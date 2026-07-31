export type TreeDiagramNodeRoleId = 'branch' | 'leaf' | 'root';
export interface TreeDiagramNode {
    children?: TreeDiagramNode[];
    id: string;
    label: string;
}
export interface TreeDiagramOptions {
    levelGap?: number;
    nodeColors?: Record<TreeDiagramNodeRoleId, {
        fill: string;
        stroke: string;
    }>;
    nodeHeight?: number;
    nodeWidth?: number;
    padding?: number;
    siblingGap?: number;
}
export interface TreeDiagramHandle {
    resize: () => void;
    svg: SVGSVGElement;
}
export declare function renderTreeDiagram(data: TreeDiagramNode, renderTo: HTMLElement, options?: TreeDiagramOptions): TreeDiagramHandle;
