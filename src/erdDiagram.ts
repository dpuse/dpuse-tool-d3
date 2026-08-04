// ── External Dependencies & Registrations
import * as dagre from '@dagrejs/dagre';
import { select } from 'd3-selection';
import type { EdgeLabel, GraphLabel, NodeLabel } from '@dagrejs/dagre';

// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export type ErdDiagramNodeTypeId = 'external' | 'local' | 'optional';

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

export interface ErdDiagramNodeStyle {
    fill: string;
    stroke: string;
    strokeDasharray?: string;
}

export interface ErdDiagramOptions {
    cornerRadius?: number;
    edgeColor?: string;
    nodeColors?: Record<ErdDiagramNodeTypeId, ErdDiagramNodeStyle>;
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
const DEFAULT_CORNER_RADIUS = 6;
// local: declared in this model. external: a reference into another model. optional: may not be present.
const DEFAULT_NODE_COLORS: Record<ErdDiagramNodeTypeId, ErdDiagramNodeStyle> = {
    external: { fill: '#f0f0f0', stroke: '#b0b0b0' },
    local: { fill: '#dae8fc', stroke: '#9fc0e8' },
    optional: { fill: '#fafafa', stroke: '#c9c9c9', strokeDasharray: '4 3' }
};
// Neutral, deliberately not matching any single node type's stroke colour — connectors are structural, not typed.
const DEFAULT_EDGE_COLOR = '#c0c0c0';
const ARROW_MARKER_ID = 'dpuse-tool-d3-erd-arrow';

// ── Actions ──────────────────────────────────────────────────────────────────────────────────────────────────────────

export function renderErdDiagram(data: ErdDiagramData, renderTo: HTMLElement, options: ErdDiagramOptions = {}): ErdDiagramHandle {
    const nodeWidth = options.nodeWidth ?? DEFAULT_NODE_WIDTH;
    const nodeHeight = options.nodeHeight ?? DEFAULT_NODE_HEIGHT;
    const padding = options.padding ?? DEFAULT_PADDING;
    const selfEdgeSize = options.selfEdgeSize ?? DEFAULT_SELF_EDGE_SIZE;
    const cornerRadius = options.cornerRadius ?? DEFAULT_CORNER_RADIUS;
    const nodeColors = options.nodeColors ?? DEFAULT_NODE_COLORS;
    const edgeColor = options.edgeColor ?? DEFAULT_EDGE_COLOR;
    const orderConstraints = options.orderConstraints ?? [];

    function draw(): SVGSVGElement {
        select(renderTo).selectAll('svg').remove();

        const graph = new dagre.graphlib.Graph<GraphLabel, NodeLabel, EdgeLabel>();
        graph.setGraph({ rankdir: 'TB', nodesep: 40, ranksep: 60 });
        graph.setDefaultEdgeLabel(() => ({}));

        for (const node of data.nodes) graph.setNode(node.id, { width: nodeWidth, height: nodeHeight, label: node.label, typeId: node.typeId });
        // Self-loops are drawn directly off the node's own position (see buildSelfLoopPath) rather than routed by dagre, so
        // they're deliberately left out of the layout graph — registering them made dagre reserve extra width around the
        // node for a loop it never actually routes, widening the gap to its neighbour for no reason.
        for (const edge of data.edges) {
            if (edge.source !== edge.target) graph.setEdge(edge.source, edge.target);
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
            .attr('fill', edgeColor);

        canvas
            .append('g')
            .attr('fill', 'none')
            .attr('stroke', edgeColor)
            .attr('stroke-width', 1.5)
            .selectAll('path')
            .data(data.edges)
            .join('path')
            .attr('marker-end', `url(#${ARROW_MARKER_ID})`)
            .attr('d', (edge) =>
                edge.source === edge.target
                    ? buildSelfLoopPath(graph.node(edge.source), selfEdgeSize)
                    : buildElbowEdgePath(graph.node(edge.source), graph.node(edge.target), cornerRadius)
            );

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
            .attr('rx', cornerRadius)
            .attr('fill', (nodeId) => nodeColors[graph.node(nodeId)['typeId'] as ErdDiagramNodeTypeId].fill)
            .attr('stroke', (nodeId) => nodeColors[graph.node(nodeId)['typeId'] as ErdDiagramNodeTypeId].stroke)
            .attr('stroke-dasharray', (nodeId) => nodeColors[graph.node(nodeId)['typeId'] as ErdDiagramNodeTypeId].strokeDasharray ?? null);

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

// dagre always routes edges through an extra, unnamed "label space" node it inserts between ranks (even when the edge has
// no label and spans a single rank), and that node's position isn't reachable via orderConstraints. Ordering it can drift
// edges sideways and cross others, so edges are built directly from the source/target node positions instead. The path is
// an orthogonal elbow (down, across, down) rather than a diagonal so the arrowhead always enters the target perpendicular
// to its border, per standard ERD/org-chart connector convention.
function buildElbowEdgePath(source: NodeLabel, target: NodeLabel, cornerRadius: number): string {
    const sourceX = source.x ?? 0;
    const sourceY = (source.y ?? 0) + source.height / 2;
    const targetX = target.x ?? 0;
    const targetY = (target.y ?? 0) - target.height / 2;

    if (sourceX === targetX) return `M ${String(sourceX)} ${String(sourceY)} L ${String(targetX)} ${String(targetY)}`;

    const midY = (sourceY + targetY) / 2;
    const directionX = Math.sign(targetX - sourceX);
    // Clamp so each bend never eats more of a segment than that segment actually has, otherwise the curve would overshoot
    // and loop back on itself. Clamping to 0 degrades gracefully to the original sharp-cornered elbow.
    const radius = Math.max(0, Math.min(cornerRadius, midY - sourceY, targetY - midY, Math.abs(targetX - sourceX) / 2));

    // Each bend is a quadratic curve toward the sharp corner as its control point — tangent to both straight segments,
    // so it curves the correct way regardless of direction without needing arc sweep-flag bookkeeping.
    return [
        `M ${String(sourceX)} ${String(sourceY)}`,
        `L ${String(sourceX)} ${String(midY - radius)}`,
        `Q ${String(sourceX)} ${String(midY)} ${String(sourceX + directionX * radius)} ${String(midY)}`,
        `L ${String(targetX - directionX * radius)} ${String(midY)}`,
        `Q ${String(targetX)} ${String(midY)} ${String(targetX)} ${String(midY + radius)}`,
        `L ${String(targetX)} ${String(targetY)}`
    ].join(' ');
}

function buildSelfLoopPath(node: NodeLabel, selfEdgeSize: number): string {
    const rightX = (node.x ?? 0) + node.width / 2;
    const bulgeX = rightX + selfEdgeSize;
    const topY = (node.y ?? 0) - node.height / 4;
    const bottomY = (node.y ?? 0) + node.height / 4;
    return `M ${String(rightX)} ${String(topY)} C ${String(bulgeX)} ${String(topY)}, ${String(bulgeX)} ${String(bottomY)}, ${String(rightX)} ${String(bottomY)}`;
}
