import { BarChartData } from './billboardJs';
export type { BarChartData, BarChartSeries } from './billboardJs';
export type ObservablePlotChartTypeId = 'bar';
export interface ObservablePlotHandle {
    resize: () => void;
    svg: SVGSVGElement;
}
export declare function renderObservablePlot(typeId: ObservablePlotChartTypeId, data: BarChartData, renderTo: HTMLElement): ObservablePlotHandle;
