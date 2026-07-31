import { Chart } from 'billboard.js';
export interface BarChartSeries {
    name: string;
    values: number[];
}
export interface BarChartData {
    categories: string[];
    series: BarChartSeries[];
}
export interface BarChartHandle {
    chart: Chart;
    destroy: () => void;
    resize: () => void;
}
export declare function renderBarChart(data: BarChartData, renderTo: HTMLElement): BarChartHandle;
