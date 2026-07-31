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
export declare function renderNetworkDiagram(data: NetworkDiagramData, renderTo: HTMLElement, options?: NetworkDiagramOptions): NetworkDiagramHandle;
