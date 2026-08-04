export type ErdDiagramNodeTypeId = 'child' | 'optional' | 'primary';
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
    cornerRadius?: number;
    nodeColors?: Record<ErdDiagramNodeTypeId, {
        fill: string;
        stroke: string;
    }>;
    nodeHeight?: number;
    nodeWidth?: number;
    orderConstraints?: {
        left: string;
        right: string;
    }[];
    padding?: number;
    selfEdgeSize?: number;
}
export interface ErdDiagramHandle {
    resize: () => void;
    svg: SVGSVGElement;
}
export declare function renderErdDiagram(data: ErdDiagramData, renderTo: HTMLElement, options?: ErdDiagramOptions): ErdDiagramHandle;
