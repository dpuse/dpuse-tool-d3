// ── External Dependencies & Registrations
import { select } from 'd3-selection';
import { type D3DragEvent, drag } from 'd3-drag';
import { type D3ZoomEvent, zoom } from 'd3-zoom';
import { forceCenter, forceLink, forceManyBody, forceSimulation, type Simulation, type SimulationLinkDatum, type SimulationNodeDatum } from 'd3-force';

// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export interface NetworkDiagramNode {
    id: string;
}

export interface NetworkDiagramLink {
    source: string;
    target: string;
}

export interface NetworkDiagramData {
    links: NetworkDiagramLink[];
    nodes: NetworkDiagramNode[];
}

export interface NetworkDiagramOptions {
    chargeStrength?: number;
    linkDistance?: number;
}

export interface NetworkDiagramHandle {
    destroy: () => void;
    resize: () => void;
    svg: SVGSVGElement;
    triggerAutoLayout: () => void;
}

type LaidOutNode = NetworkDiagramNode & SimulationNodeDatum;
type LaidOutLink = SimulationLinkDatum<LaidOutNode>;

// ── Constants ────────────────────────────────────────────────────────────────────────────────────────────────────────

const DEFAULT_CHARGE_STRENGTH = -300;
const DEFAULT_LINK_DISTANCE = 100;
const DEFAULT_WIDTH = 640;
const DEFAULT_HEIGHT = 480;
const AUTO_LAYOUT_TICKS = 180;
const NODE_RADIUS = 20;
const NODE_RADIUS_ACTIVE = 22;

const COLOR = {
    linkStroke: '#9ca3af',
    nodeFill: '#2563eb',
    nodeFillHovered: '#3b82f6',
    nodeFillSelected: '#f59e0b',
    nodeStroke: '#1e40af',
    nodeStrokeHovered: '#1d4ed8',
    nodeStrokeSelected: '#b45309',
    nodeText: '#ffffff'
};

// ── Actions ──────────────────────────────────────────────────────────────────────────────────────────────────────────

export function renderNetworkDiagram(data: NetworkDiagramData, renderTo: HTMLElement, options: NetworkDiagramOptions = {}): NetworkDiagramHandle {
    const width = renderTo.clientWidth || DEFAULT_WIDTH;
    const height = renderTo.clientHeight || DEFAULT_HEIGHT;

    const nodes: LaidOutNode[] = data.nodes.map((node) => ({ ...node }));
    const links: LaidOutLink[] = data.links.map((link) => ({ ...link }));

    // Set deterministic initial positions so the graph is readable before force layout runs.
    const startRadius = Math.min(width, height) * 0.22;
    for (const [index, node] of nodes.entries()) {
        const angle = (index / nodes.length) * Math.PI * 2;
        node.x = width / 2 + Math.cos(angle) * startRadius;
        node.y = height / 2 + Math.sin(angle) * startRadius;
    }

    const simulation: Simulation<LaidOutNode, LaidOutLink> = forceSimulation(nodes)
        .force(
            'link',
            forceLink<LaidOutNode, LaidOutLink>(links)
                .id((node) => node.id)
                .distance(options.linkDistance ?? DEFAULT_LINK_DISTANCE)
        )
        .force('charge', forceManyBody().strength(options.chargeStrength ?? DEFAULT_CHARGE_STRENGTH))
        .force('center', forceCenter(width / 2, height / 2));

    const svgSelection = select(renderTo)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', `0 0 ${String(width)} ${String(height)}`)
        .style('touch-action', 'none');
    const viewport = svgSelection.append('g');

    const link = viewport.selectAll<SVGLineElement, LaidOutLink>('line').data(links).join('line').attr('stroke', COLOR.linkStroke).attr('stroke-width', 2);

    const node = viewport.selectAll<SVGGElement, LaidOutNode>('g').data(nodes).join('g').style('cursor', 'pointer');
    node.append('circle').attr('r', NODE_RADIUS).attr('fill', COLOR.nodeFill).attr('stroke', COLOR.nodeStroke).attr('stroke-width', 2);
    node.append('text')
        .text((laidOutNode) => laidOutNode.id)
        .attr('text-anchor', 'middle')
        .attr('dy', 4)
        .attr('fill', COLOR.nodeText); // explicit - iOS Safari can default to transparent

    let selectedNodeId: string | null = null;
    let hoveredNodeId: string | null = null;

    const updateNodeStyles = (): void => {
        node.selectAll<SVGCircleElement, LaidOutNode>('circle')
            .attr('fill', (laidOutNode) => {
                if (laidOutNode.id === selectedNodeId) return COLOR.nodeFillSelected;
                if (laidOutNode.id === hoveredNodeId) return COLOR.nodeFillHovered;
                return COLOR.nodeFill;
            })
            .attr('stroke', (laidOutNode) => {
                if (laidOutNode.id === selectedNodeId) return COLOR.nodeStrokeSelected;
                if (laidOutNode.id === hoveredNodeId) return COLOR.nodeStrokeHovered;
                return COLOR.nodeStroke;
            })
            .attr('stroke-width', (laidOutNode) => (laidOutNode.id === selectedNodeId ? 3 : 2))
            .attr('r', (laidOutNode) => (laidOutNode.id === selectedNodeId || laidOutNode.id === hoveredNodeId ? NODE_RADIUS_ACTIVE : NODE_RADIUS));
    };

    node.on('mouseenter', (_event, laidOutNode) => {
        hoveredNodeId = laidOutNode.id;
        updateNodeStyles();
    })
        .on('mouseleave', (_event, laidOutNode) => {
            if (hoveredNodeId === laidOutNode.id) hoveredNodeId = null;
            updateNodeStyles();
        })
        .on('click', (event: MouseEvent, laidOutNode) => {
            event.stopPropagation();
            selectedNodeId = selectedNodeId === laidOutNode.id ? null : laidOutNode.id;
            updateNodeStyles();
        });

    svgSelection.on('click', () => {
        selectedNodeId = null;
        updateNodeStyles();
    });

    const zoomBehavior = zoom<SVGSVGElement, unknown>()
        .scaleExtent([0.5, 4])
        .on('zoom', (event: D3ZoomEvent<SVGSVGElement, unknown>) => {
            viewport.attr('transform', event.transform.toString());
        });

    svgSelection.call(zoomBehavior).on('dblclick.zoom', null);

    const getNodePosition = (value: LaidOutNode | string | number, axis: 'x' | 'y'): number => {
        if (typeof value === 'object') return value[axis] ?? 0;
        return 0;
    };

    const renderGraph = (): void => {
        link.attr('x1', (laidOutLink) => getNodePosition(laidOutLink.source, 'x'))
            .attr('y1', (laidOutLink) => getNodePosition(laidOutLink.source, 'y'))
            .attr('x2', (laidOutLink) => getNodePosition(laidOutLink.target, 'x'))
            .attr('y2', (laidOutLink) => getNodePosition(laidOutLink.target, 'y'));
        node.attr('transform', (laidOutNode) => `translate(${String(laidOutNode.x ?? 0)},${String(laidOutNode.y ?? 0)})`);
    };

    // Keep force simulation idle by default; run it only on explicit request.
    simulation.stop();

    type DragEvent = D3DragEvent<SVGGElement, LaidOutNode, LaidOutNode>;

    node.call(
        drag<SVGGElement, LaidOutNode>()
            .on('start', (event: DragEvent, laidOutNode) => {
                (event.sourceEvent as MouseEvent | TouchEvent | undefined)?.stopPropagation();
                laidOutNode.fx = laidOutNode.x;
                laidOutNode.fy = laidOutNode.y;
            })
            .on('drag', (event: DragEvent, laidOutNode) => {
                laidOutNode.x = event.x;
                laidOutNode.y = event.y;
                laidOutNode.fx = event.x;
                laidOutNode.fy = event.y;
                renderGraph();
            })
            .on('end', (_event: DragEvent, laidOutNode) => {
                laidOutNode.fx = null;
                laidOutNode.fy = null;
            })
    );

    renderGraph();

    const svgNode = svgSelection.node();
    if (svgNode == null) throw new Error('Failed to create network diagram SVG element.');

    return {
        destroy: () => {
            simulation.stop();
            svgSelection.remove();
        },
        resize: () => {
            const newWidth = renderTo.clientWidth || DEFAULT_WIDTH;
            const newHeight = renderTo.clientHeight || DEFAULT_HEIGHT;
            svgSelection.attr('width', newWidth).attr('height', newHeight).attr('viewBox', `0 0 ${String(newWidth)} ${String(newHeight)}`);
            simulation.force('center', forceCenter(newWidth / 2, newHeight / 2));
        },
        svg: svgNode,
        triggerAutoLayout: () => {
            simulation.alpha(1);
            for (let step = 0; step < AUTO_LAYOUT_TICKS; step += 1) simulation.tick();
            simulation.stop();
            renderGraph();
        }
    };
}
