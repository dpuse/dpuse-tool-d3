import { PresentationView } from '@dpuse/dpuse-shared/component/presentation';
import { ErdDiagramData, ErdDiagramOptions } from './erdDiagram';
import { NetworkDiagramData, NetworkDiagramOptions } from './networkDiagram';
import { SankeyDiagramData, SankeyDiagramOptions } from './sankeyDiagram';
import { TreeDiagramNode, TreeDiagramOptions } from './treeDiagram';
export type { ErdDiagramData, ErdDiagramEdge, ErdDiagramNode, ErdDiagramNodeTypeId, ErdDiagramOptions } from './erdDiagram';
export type { NetworkDiagramData, NetworkDiagramLink, NetworkDiagramNode, NetworkDiagramOptions } from './networkDiagram';
export type { SankeyDiagramData, SankeyDiagramLink, SankeyDiagramNode, SankeyDiagramOptions } from './sankeyDiagram';
export type { TreeDiagramNode, TreeDiagramNodeRoleId, TreeDiagramOptions } from './treeDiagram';
export interface D3View extends PresentationView {
    svg: SVGSVGElement;
}
export interface D3NetworkView extends D3View {
    destroy: () => void;
    triggerAutoLayout: () => void;
}
export declare class D3Tool {
    renderErdDiagram(data: ErdDiagramData, renderTo: HTMLElement, options?: ErdDiagramOptions, callback?: () => void): D3View;
    renderNetworkDiagram(data: NetworkDiagramData, renderTo: HTMLElement, options?: NetworkDiagramOptions, callback?: () => void): D3NetworkView;
    renderSankeyDiagram(data: SankeyDiagramData, renderTo: HTMLElement, options?: SankeyDiagramOptions, callback?: () => void): D3View;
    renderTreeDiagram(data: TreeDiagramNode, renderTo: HTMLElement, options?: TreeDiagramOptions, callback?: () => void): D3View;
}
