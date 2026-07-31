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
    nodeColors?: Record<ErdDiagramNodeTypeId, {
        fill: string;
        stroke: string;
    }>;
    nodeHeight?: number;
    nodeWidth?: number;
    padding?: number;
    selfEdgeSize?: number;
}
export interface ErdDiagramHandle {
    resize: () => void;
    svg: SVGSVGElement;
}
export declare function renderErdDiagram(data: ErdDiagramData, renderTo: HTMLElement, options?: ErdDiagramOptions): ErdDiagramHandle;
