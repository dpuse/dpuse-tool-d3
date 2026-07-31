import { PresentationView } from '@dpuse/dpuse-shared/component/presentation';
import { NetworkDiagramData, NetworkDiagramOptions } from './networkDiagram';
import { SankeyDiagramData, SankeyDiagramOptions } from './sankeyDiagram';
export type { NetworkDiagramData, NetworkDiagramLink, NetworkDiagramNode, NetworkDiagramOptions } from './networkDiagram';
export type { SankeyDiagramData, SankeyDiagramLink, SankeyDiagramNode, SankeyDiagramOptions } from './sankeyDiagram';
export interface D3View extends PresentationView {
    svg: SVGSVGElement;
}
export interface D3NetworkView extends D3View {
    destroy: () => void;
    triggerAutoLayout: () => void;
}
export declare class D3Tool {
    renderNetworkDiagram(data: NetworkDiagramData, renderTo: HTMLElement, options?: NetworkDiagramOptions, callback?: () => void): D3NetworkView;
    renderSankeyDiagram(data: SankeyDiagramData, renderTo: HTMLElement, options?: SankeyDiagramOptions, callback?: () => void): D3View;
}
