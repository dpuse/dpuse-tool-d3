import { ColorModeId } from './palette';
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
export declare function renderSankeyDiagram(data: SankeyDiagramData, renderTo: HTMLElement, options?: SankeyDiagramOptions): SankeyDiagramHandle;
