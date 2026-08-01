import { Chart } from 'billboard.js';
export interface BarChartSeries {
    name: string;
    values: number[];
}
export interface BarChartData {
    categories: string[];
    series: BarChartSeries[];
}
export interface BillboardJSHandle {
    chart: Chart;
    destroy: () => void;
    resize: () => void;
}
export declare function renderBillboardJS(data: BarChartData, renderTo: HTMLElement): BillboardJSHandle;
