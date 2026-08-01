// ── External Dependencies & Registrations
import 'billboard.js/dist/billboard.css';
import type { Chart } from 'billboard.js';
import { bar, bb, grid } from 'billboard.js';

// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

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

// ── Actions ──────────────────────────────────────────────────────────────────────────────────────────────────────────

// Billboard.js's SVG entry point (there's also a heavier `billboard.js/canvas` entry, unused here - see the D3Tool.renderBillboardJS comment).
export function renderBillboardJS(data: BarChartData, renderTo: HTMLElement): BillboardJSHandle {
    const columns = data.series.map((series): [string, ...number[]] => [series.name, ...series.values]);

    const chart = bb.generate({
        ...grid(),
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
