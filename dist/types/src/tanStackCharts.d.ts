import { BarChartData } from './billboardJs';
export type { BarChartData, BarChartSeries } from './billboardJs';
export interface TanStackChartsHandle {
    destroy: () => void;
    resize: () => void;
    svg: SVGSVGElement;
}
export declare function renderTanStackCharts(data: BarChartData, renderTo: HTMLElement): TanStackChartsHandle;
