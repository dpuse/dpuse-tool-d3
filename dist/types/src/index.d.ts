import { Chart } from 'billboard.js';
import { PresentationView } from '@dpuse/dpuse-shared/component/presentation';
import { BarChartData } from './billboardJs';
import { ObservablePlotChartTypeId } from './observablePlot';
import { ChordDiagramData, ChordDiagramOptions } from './chordDiagram';
import { ErdDiagramData, ErdDiagramOptions } from './erdDiagram';
import { NetworkDiagramData, NetworkDiagramOptions } from './networkDiagram';
import { SankeyDiagramData, SankeyDiagramOptions } from './sankeyDiagram';
import { TreeDiagramNode, TreeDiagramOptions } from './treeDiagram';
export type { BarChartData, BarChartSeries } from './billboardJs';
export type { ChordDiagramData, ChordDiagramLink, ChordDiagramNode, ChordDiagramOptions } from './chordDiagram';
export type { ErdDiagramData, ErdDiagramEdge, ErdDiagramNode, ErdDiagramNodeTypeId, ErdDiagramOptions } from './erdDiagram';
export type { NetworkDiagramData, NetworkDiagramLink, NetworkDiagramNode, NetworkDiagramOptions } from './networkDiagram';
export type { ObservablePlotChartTypeId } from './observablePlot';
export type { SankeyDiagramData, SankeyDiagramLink, SankeyDiagramNode, SankeyDiagramOptions } from './sankeyDiagram';
export type { TreeDiagramNode, TreeDiagramNodeRoleId, TreeDiagramOptions } from './treeDiagram';
export interface D3View extends PresentationView {
    svg: SVGSVGElement;
}
export interface D3NetworkView extends D3View {
    destroy: () => void;
    triggerAutoLayout: () => void;
}
export interface D3BarChartView extends PresentationView {
    chart: Chart;
    destroy: () => void;
}
export interface D3TanStackChartsView extends D3View {
    destroy: () => void;
}
export declare class D3Tool {
    renderBillboardJS(data: BarChartData, renderTo: HTMLElement, callback?: () => void): Promise<D3BarChartView>;
    renderObservablePlot(typeId: ObservablePlotChartTypeId, data: BarChartData, renderTo: HTMLElement, callback?: () => void): Promise<D3View>;
    renderD3BarChart(data: BarChartData, renderTo: HTMLElement, callback?: () => void): Promise<D3View>;
    renderTanStackCharts(data: BarChartData, renderTo: HTMLElement, callback?: () => void): Promise<D3TanStackChartsView>;
    renderChordDiagram(data: ChordDiagramData, renderTo: HTMLElement, options?: ChordDiagramOptions, callback?: () => void): Promise<D3View>;
    renderErdDiagram(data: ErdDiagramData, renderTo: HTMLElement, options?: ErdDiagramOptions, callback?: () => void): Promise<D3View>;
    renderNetworkDiagram(data: NetworkDiagramData, renderTo: HTMLElement, options?: NetworkDiagramOptions, callback?: () => void): Promise<D3NetworkView>;
    renderSankeyDiagram(data: SankeyDiagramData, renderTo: HTMLElement, options?: SankeyDiagramOptions, callback?: () => void): Promise<D3View>;
    renderTreeDiagram(data: TreeDiagramNode, renderTo: HTMLElement, options?: TreeDiagramOptions, callback?: () => void): Promise<D3View>;
}
