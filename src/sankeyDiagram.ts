// ── External Dependencies & Registrations
import { select } from 'd3-selection';
import { sankey, type SankeyGraph, type SankeyLink as SankeyLinkExtra, sankeyLinkHorizontal, type SankeyNode as SankeyNodeExtra } from 'd3-sankey';

// ── Local
import { categoricalColor, type ColorModeId, INK, SURFACE } from '@/palette';

// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export interface SankeyDiagramNode {
    id: string;
    name: string;
}

export interface SankeyDiagramLink {
    source: string;
    target: string;
    value: number;
}

export interface SankeyDiagramData {
    links: SankeyDiagramLink[];
    nodes: SankeyDiagramNode[];
}

export interface SankeyDiagramOptions {
    colorModeId?: ColorModeId;
    nodePadding?: number;
    nodeWidth?: number;
}

export interface SankeyDiagramHandle {
    resize: () => void;
    svg: SVGSVGElement;
}

type LaidOutNode = SankeyDiagramNode & SankeyNodeExtra<SankeyDiagramNode, SankeyDiagramLink>;
type LaidOutLink = SankeyLinkExtra<SankeyDiagramNode, SankeyDiagramLink>;

// ── Constants ────────────────────────────────────────────────────────────────────────────────────────────────────────

const DEFAULT_NODE_WIDTH = 16;
const DEFAULT_NODE_PADDING = 12;
const DEFAULT_HEIGHT = 480;
const DEFAULT_WIDTH = 640;
const LABEL_MARGIN = 6;

// ── Actions ──────────────────────────────────────────────────────────────────────────────────────────────────────────

export function renderSankeyDiagram(data: SankeyDiagramData, renderTo: HTMLElement, options: SankeyDiagramOptions = {}): SankeyDiagramHandle {
    const colorModeId = options.colorModeId ?? 'light';
    const ink = INK[colorModeId];
    const surface = SURFACE[colorModeId];

    if (getComputedStyle(renderTo).position === 'static') renderTo.style.position = 'relative';

    const tooltip = select(renderTo)
        .append('div')
        .attr('role', 'tooltip')
        .style('position', 'absolute')
        .style('pointer-events', 'none')
        .style('z-index', '1')
        .style('opacity', '0')
        .style('transition', 'opacity 120ms ease')
        .style('padding', '4px 8px')
        .style('border-radius', '4px')
        .style('font', '12px system-ui, -apple-system, "Segoe UI", sans-serif')
        .style('white-space', 'nowrap')
        .style('background', surface.chart)
        .style('color', ink.primary)
        .style('border', `1px solid ${surface.border}`)
        .style('box-shadow', '0 2px 8px rgba(0,0,0,0.15)');

    function showTooltip(event: MouseEvent, text: string): void {
        const bounds = renderTo.getBoundingClientRect();
        tooltip
            .html(text)
            .style('left', `${String(event.clientX - bounds.left + 12)}px`)
            .style('top', `${String(event.clientY - bounds.top + 12)}px`)
            .style('opacity', '1');
    }

    function hideTooltip(): void {
        tooltip.style('opacity', '0');
    }

    function draw(): SVGSVGElement {
        select(renderTo).selectAll('svg').remove();

        const width = renderTo.clientWidth || DEFAULT_WIDTH;
        const height = renderTo.clientHeight || DEFAULT_HEIGHT;

        const graph: SankeyGraph<SankeyDiagramNode, SankeyDiagramLink> = {
            links: data.links.map((link) => ({ ...link })),
            nodes: data.nodes.map((node) => ({ ...node }))
        };

        const layout = sankey<SankeyDiagramNode, SankeyDiagramLink>()
            .nodeId((node) => node.id)
            .nodeWidth(options.nodeWidth ?? DEFAULT_NODE_WIDTH)
            .nodePadding(options.nodePadding ?? DEFAULT_NODE_PADDING)
            .extent([
                [1, 1],
                [width - 1, height - 1]
            ]);

        const { links, nodes } = layout(graph) as { links: LaidOutLink[]; nodes: LaidOutNode[] };

        const svgSelection = select(renderTo)
            .insert('svg', 'div')
            .attr('viewBox', `0 0 ${String(width)} ${String(height)}`)
            .attr('width', '100%')
            .attr('height', '100%')
            .attr('font-family', 'system-ui, -apple-system, "Segoe UI", sans-serif')
            .attr('font-size', 12);

        const linkPath = sankeyLinkHorizontal<SankeyDiagramNode, SankeyDiagramLink>();

        svgSelection
            .append('g')
            .attr('fill', 'none')
            .selectAll('path')
            .data(links)
            .join('path')
            .attr('d', linkPath)
            .attr('stroke', (link) => categoricalColor(nodes.indexOf(link.source as LaidOutNode), colorModeId))
            .attr('stroke-opacity', 0.35)
            .attr('stroke-width', (link) => Math.max(1, link.width ?? 1))
            .on('mouseenter', (event: MouseEvent, link) => {
                select(event.currentTarget as SVGPathElement).attr('stroke-opacity', 0.6);
                const source = link.source as LaidOutNode;
                const target = link.target as LaidOutNode;
                showTooltip(event, `${source.name} → ${target.name}<br>${link.value.toLocaleString()}`);
            })
            .on('mousemove', (event: MouseEvent, link) => {
                const source = link.source as LaidOutNode;
                const target = link.target as LaidOutNode;
                showTooltip(event, `${source.name} → ${target.name}<br>${link.value.toLocaleString()}`);
            })
            .on('mouseleave', (event: MouseEvent) => {
                select(event.currentTarget as SVGPathElement).attr('stroke-opacity', 0.35);
                hideTooltip();
            });

        const nodeGroup = svgSelection.append('g').selectAll('g').data(nodes).join('g');

        nodeGroup
            .append('rect')
            .attr('x', (node) => node.x0 ?? 0)
            .attr('y', (node) => node.y0 ?? 0)
            .attr('width', (node) => (node.x1 ?? 0) - (node.x0 ?? 0))
            .attr('height', (node) => Math.max(1, (node.y1 ?? 0) - (node.y0 ?? 0)))
            .attr('rx', 2)
            .attr('fill', (_node, index) => categoricalColor(index, colorModeId))
            .on('mouseenter', (event: MouseEvent, node) => {
                showTooltip(event, `${node.name}<br>${(node.value ?? 0).toLocaleString()}`);
            })
            .on('mousemove', (event: MouseEvent, node) => {
                showTooltip(event, `${node.name}<br>${(node.value ?? 0).toLocaleString()}`);
            })
            .on('mouseleave', hideTooltip);

        nodeGroup
            .append('text')
            .attr('x', (node) => ((node.x0 ?? 0) < width / 2 ? (node.x1 ?? 0) + LABEL_MARGIN : (node.x0 ?? 0) - LABEL_MARGIN))
            .attr('y', (node) => ((node.y0 ?? 0) + (node.y1 ?? 0)) / 2)
            .attr('dy', '0.35em')
            .attr('text-anchor', (node) => ((node.x0 ?? 0) < width / 2 ? 'start' : 'end'))
            .attr('fill', ink.primary)
            .text((node) => node.name);

        const svgNode = svgSelection.node();
        if (svgNode == null) throw new Error('Failed to create Sankey diagram SVG element.');
        return svgNode;
    }

    let svg = draw();

    return {
        resize: () => {
            svg = draw();
        },
        get svg() {
            return svg;
        }
    };
}
