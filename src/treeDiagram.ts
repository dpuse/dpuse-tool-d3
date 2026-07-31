// ── External Dependencies & Registrations
import { linkHorizontal } from 'd3-shape';
import { select } from 'd3-selection';
import { hierarchy, type HierarchyPointLink, type HierarchyPointNode, tree } from 'd3-hierarchy';

// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export type TreeDiagramNodeRoleId = 'branch' | 'leaf' | 'root';

export interface TreeDiagramNode {
    children?: TreeDiagramNode[];
    id: string;
    label: string;
}

export interface TreeDiagramOptions {
    levelGap?: number;
    nodeColors?: Record<TreeDiagramNodeRoleId, { fill: string; stroke: string }>;
    nodeHeight?: number;
    nodeWidth?: number;
    padding?: number;
    siblingGap?: number;
}

export interface TreeDiagramHandle {
    resize: () => void;
    svg: SVGSVGElement;
}

// ── Constants ────────────────────────────────────────────────────────────────────────────────────────────────────────

const DEFAULT_NODE_WIDTH = 140;
const DEFAULT_NODE_HEIGHT = 40;
const DEFAULT_SIBLING_GAP = 24;
const DEFAULT_LEVEL_GAP = 50;
const DEFAULT_PADDING = 8;
const DEFAULT_NODE_COLORS: Record<TreeDiagramNodeRoleId, { fill: string; stroke: string }> = {
    branch: { fill: '#ffe6cc', stroke: '#d79b00' },
    leaf: { fill: '#dae8fc', stroke: '#6c8ebf' },
    root: { fill: '#d5e8d4', stroke: '#82b366' }
};

// ── Actions ──────────────────────────────────────────────────────────────────────────────────────────────────────────

export function renderTreeDiagram(data: TreeDiagramNode, renderTo: HTMLElement, options: TreeDiagramOptions = {}): TreeDiagramHandle {
    const nodeWidth = options.nodeWidth ?? DEFAULT_NODE_WIDTH;
    const nodeHeight = options.nodeHeight ?? DEFAULT_NODE_HEIGHT;
    const siblingGap = options.siblingGap ?? DEFAULT_SIBLING_GAP;
    const levelGap = options.levelGap ?? DEFAULT_LEVEL_GAP;
    const padding = options.padding ?? DEFAULT_PADDING;
    const nodeColors = options.nodeColors ?? DEFAULT_NODE_COLORS;

    function getNodeRole(node: HierarchyPointNode<TreeDiagramNode>): TreeDiagramNodeRoleId {
        if (node.depth === 0) return 'root';
        return node.children ? 'branch' : 'leaf';
    }

    function draw(): SVGSVGElement {
        select(renderTo).selectAll('svg').remove();

        const root = hierarchy(data, (node) => node.children);
        const treeLayout = tree<TreeDiagramNode>()
            .nodeSize([nodeHeight + siblingGap, nodeWidth + levelGap])
            .separation(() => 1);
        const treeRoot = treeLayout(root);

        // Align each parent with its first child (instead of d3's default centering over all children) so the root sits at the top and the tree cascades downward.
        treeRoot.eachAfter((node) => {
            const [firstChild] = node.children ?? [];
            if (!firstChild) return;
            node.x = firstChild.x;
        });

        const treeNodes = treeRoot.descendants();

        // Screen axes are swapped for a left-to-right tree: node.y (depth) drives horizontal position, node.x (sibling spread) drives vertical.
        const minX = Math.min(...treeNodes.map((node) => node.y)) - nodeWidth / 2;
        const maxX = Math.max(...treeNodes.map((node) => node.y)) + nodeWidth / 2;
        const minY = Math.min(...treeNodes.map((node) => node.x)) - nodeHeight / 2;
        const maxY = Math.max(...treeNodes.map((node) => node.x)) + nodeHeight / 2;

        const viewBoxWidth = maxX - minX + padding * 2;
        const viewBoxHeight = maxY - minY + padding * 2;

        const svgSelection = select(renderTo)
            .append('svg')
            .attr('viewBox', `0 0 ${String(viewBoxWidth)} ${String(viewBoxHeight)}`)
            .attr('width', viewBoxWidth)
            .attr('height', viewBoxHeight);

        const canvas = svgSelection.append('g').attr('transform', `translate(${String(padding - minX)}, ${String(padding - minY)})`);

        const linkGenerator = linkHorizontal<HierarchyPointLink<TreeDiagramNode>, HierarchyPointNode<TreeDiagramNode>>()
            .x((node) => node.y)
            .y((node) => node.x);

        canvas.append('g').attr('fill', 'none').attr('stroke', '#999999').attr('stroke-width', 1.5).selectAll('path').data(treeRoot.links()).join('path').attr('d', linkGenerator);

        const nodeGroups = canvas
            .append('g')
            .selectAll('g')
            .data(treeNodes)
            .join('g')
            .attr('transform', (node) => `translate(${String(node.y - nodeWidth / 2)}, ${String(node.x - nodeHeight / 2)})`);

        nodeGroups
            .append('rect')
            .attr('width', nodeWidth)
            .attr('height', nodeHeight)
            .attr('rx', 6)
            .attr('fill', (node) => nodeColors[getNodeRole(node)].fill)
            .attr('stroke', (node) => nodeColors[getNodeRole(node)].stroke);

        nodeGroups
            .append('text')
            .attr('x', nodeWidth / 2)
            .attr('y', nodeHeight / 2)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr('font-family', 'Helvetica, Arial, sans-serif')
            .attr('font-size', 12)
            .attr('fill', '#000000')
            .text((node) => node.data.label);

        const svgNode = svgSelection.node();
        if (svgNode == null) throw new Error('Failed to create tree diagram SVG element.');
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
