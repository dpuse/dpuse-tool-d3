import { BarChartData } from './billboardJs';
export type { BarChartData, BarChartSeries } from './billboardJs';
export interface D3BarChartHandle {
    resize: () => void;
    svg: SVGSVGElement;
}
export declare function renderD3BarChart(data: BarChartData, renderTo: HTMLElement): D3BarChartHandle;
