import { PresentationView } from '@dpuse/dpuse-shared/component/presentation';
import { SankeyDiagramData, SankeyDiagramOptions } from './sankeyDiagram';
export type { SankeyDiagramData, SankeyDiagramLink, SankeyDiagramNode, SankeyDiagramOptions } from './sankeyDiagram';
export interface D3View extends PresentationView {
    svg: SVGSVGElement;
}
export declare class D3Tool {
    renderSankeyDiagram(data: SankeyDiagramData, renderTo: HTMLElement, options?: SankeyDiagramOptions, callback?: () => void): D3View;
}
