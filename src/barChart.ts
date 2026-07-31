// ── External Dependencies & Registrations
import 'billboard.js/dist/billboard.css';
import type { Chart } from 'billboard.js';
import { bar, bb } from 'billboard.js';

// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

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

// ── Actions ──────────────────────────────────────────────────────────────────────────────────────────────────────────

export function renderBarChart(data: BarChartData, renderTo: HTMLElement): BarChartHandle {
    const columns = data.series.map((series): [string, ...number[]] => [series.name, ...series.values]);

    const chart = bb.generate({
        axis: { x: { categories: data.categories, type: 'category' } },
        bindto: renderTo,
        data: { columns, type: bar() }
    });

    return {
        chart,
        destroy: () => {
            chart.destroy();
        },
        resize: () => {
            chart.resize();
        }
    };
}
