import { BarChartData } from './barChart';
export type { BarChartData, BarChartSeries } from './barChart';
export interface PlotBarChartHandle {
    resize: () => void;
    svg: SVGSVGElement;
}
export declare function renderPlotBarChart(data: BarChartData, renderTo: HTMLElement): PlotBarChartHandle;
