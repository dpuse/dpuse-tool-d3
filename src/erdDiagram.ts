// ── External Dependencies & Registrations
import * as dagre from '@dagrejs/dagre';
import { select } from 'd3-selection';
import { curveLinear, line } from 'd3-shape';
import type { EdgeLabel, GraphLabel, NodeLabel } from '@dagrejs/dagre';

// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export type ErdDiagramNodeTypeId = 'child' | 'primary';

export interface ErdDiagramNode {
    id: string;
    label: string;
    typeId: ErdDiagramNodeTypeId;
}

export interface ErdDiagramEdge {
    source: string;
    target: string;
}

export interface ErdDiagramData {
    edges: ErdDiagramEdge[];
    nodes: ErdDiagramNode[];
}

export interface ErdDiagramOptions {
    nodeColors?: Record<ErdDiagramNodeTypeId, { fill: string; stroke: string }>;
    nodeHeight?: number;
    nodeWidth?: number;
    orderConstraints?: { left: string; right: string }[];
    padding?: number;
    selfEdgeSize?: number;
}

export interface ErdDiagramHandle {
    resize: () => void;
    svg: SVGSVGElement;
}

// ── Constants ────────────────────────────────────────────────────────────────────────────────────────────────────────

const DEFAULT_NODE_WIDTH = 160;
const DEFAULT_NODE_HEIGHT = 50;
const DEFAULT_PADDING = 8;
const DEFAULT_SELF_EDGE_SIZE = 24;
const DEFAULT_NODE_COLORS: Record<ErdDiagramNodeTypeId, { fill: string; stroke: string }> = {
    child: { fill: '#dae8fc', stroke: '#6c8ebf' },
    primary: { fill: '#d5e8d4', stroke: '#82b366' }
};
const ARROW_MARKER_ID = 'dpuse-tool-d3-erd-arrow';

// ── Actions ──────────────────────────────────────────────────────────────────────────────────────────────────────────

export function renderErdDiagram(data: ErdDiagramData, renderTo: HTMLElement, options: ErdDiagramOptions = {}): ErdDiagramHandle {
    const nodeWidth = options.nodeWidth ?? DEFAULT_NODE_WIDTH;
    const nodeHeight = options.nodeHeight ?? DEFAULT_NODE_HEIGHT;
    const padding = options.padding ?? DEFAULT_PADDING;
    const selfEdgeSize = options.selfEdgeSize ?? DEFAULT_SELF_EDGE_SIZE;
    const nodeColors = options.nodeColors ?? DEFAULT_NODE_COLORS;
    const orderConstraints = options.orderConstraints ?? [];

    function draw(): SVGSVGElement {
        select(renderTo).selectAll('svg').remove();

        const graph = new dagre.graphlib.Graph<GraphLabel, NodeLabel, EdgeLabel>();
        graph.setGraph({ rankdir: 'TB', nodesep: 40, ranksep: 60 });
        graph.setDefaultEdgeLabel(() => ({}));

        for (const node of data.nodes) graph.setNode(node.id, { width: nodeWidth, height: nodeHeight, label: node.label, typeId: node.typeId });
        for (const edge of data.edges) {
            if (edge.source === edge.target) graph.setEdge(edge.source, edge.target, { width: selfEdgeSize, height: selfEdgeSize });
            else graph.setEdge(edge.source, edge.target);
        }

        dagre.layout(graph, { constraints: orderConstraints });

        const { width: graphWidth = 0, height: graphHeight = 0 } = graph.graph();
        const viewBoxWidth = graphWidth + padding * 2;
        const viewBoxHeight = graphHeight + padding * 2;

        const svgSelection = select(renderTo)
            .append('svg')
            .attr('viewBox', `0 0 ${String(viewBoxWidth)} ${String(viewBoxHeight)}`)
            .attr('width', viewBoxWidth)
            .attr('height', viewBoxHeight);

        const canvas = svgSelection.append('g').attr('transform', `translate(${String(padding)}, ${String(padding)})`);

        svgSelection
            .append('defs')
            .append('marker')
            .attr('id', ARROW_MARKER_ID)
            .attr('viewBox', '0 0 10 10')
            .attr('refX', 9)
            .attr('refY', 5)
            .attr('markerWidth', 6)
            .attr('markerHeight', 6)
            .attr('orient', 'auto-start-reverse')
            .append('path')
            .attr('d', 'M 0 0 L 10 5 L 0 10 z')
            .attr('fill', '#6c8ebf');

        const edgeLine = line<{ x: number; y: number }>()
            .x((point) => point.x)
            .y((point) => point.y)
            .curve(curveLinear);

        canvas
            .append('g')
            .attr('fill', 'none')
            .attr('stroke', '#6c8ebf')
            .attr('stroke-width', 1.5)
            .selectAll('path')
            .data(graph.edges())
            .join('path')
            .attr('marker-end', `url(#${ARROW_MARKER_ID})`)
            .attr('d', (edge) => (edge.v === edge.w ? buildSelfLoopPath(graph.node(edge.v), selfEdgeSize) : (edgeLine(graph.edge(edge).points ?? []) ?? '')));

        const nodeGroups = canvas
            .append('g')
            .selectAll('g')
            .data(graph.nodes())
            .join('g')
            .attr('transform', (nodeId) => {
                const node = graph.node(nodeId);
                return `translate(${String((node.x ?? 0) - node.width / 2)}, ${String((node.y ?? 0) - node.height / 2)})`;
            });

        nodeGroups
            .append('rect')
            .attr('width', (nodeId) => graph.node(nodeId).width)
            .attr('height', (nodeId) => graph.node(nodeId).height)
            .attr('rx', 6)
            .attr('fill', (nodeId) => nodeColors[graph.node(nodeId)['typeId'] as ErdDiagramNodeTypeId].fill)
            .attr('stroke', (nodeId) => nodeColors[graph.node(nodeId)['typeId'] as ErdDiagramNodeTypeId].stroke);

        nodeGroups
            .append('text')
            .attr('x', (nodeId) => graph.node(nodeId).width / 2)
            .attr('y', (nodeId) => graph.node(nodeId).height / 2)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr('font-family', 'Helvetica, Arial, sans-serif')
            .attr('font-size', 14)
            .attr('fill', '#000000')
            .text((nodeId) => graph.node(nodeId).label ?? '');

        const svgNode = svgSelection.node();
        if (svgNode == null) throw new Error('Failed to create ERD diagram SVG element.');
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

// ── Helpers ──────────────────────────────────────────────────────────────────────────────────────────────────────────

function buildSelfLoopPath(node: NodeLabel, selfEdgeSize: number): string {
    const rightX = (node.x ?? 0) + node.width / 2;
    const bulgeX = rightX + selfEdgeSize;
    const topY = (node.y ?? 0) - node.height / 4;
    const bottomY = (node.y ?? 0) + node.height / 4;
    return `M ${String(rightX)} ${String(topY)} C ${String(bulgeX)} ${String(topY)}, ${String(bulgeX)} ${String(bottomY)}, ${String(rightX)} ${String(bottomY)}`;
}
