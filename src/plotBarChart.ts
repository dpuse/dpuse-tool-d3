// ── External Dependencies & Registrations
import * as Plot from '@observablehq/plot';

// ── Local
import type { BarChartData } from '@/barChart';

export type { BarChartData, BarChartSeries } from '@/barChart';

// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export interface PlotBarChartHandle {
    resize: () => void;
    svg: SVGSVGElement;
}

interface PlotBarChartRow {
    category: string;
    seriesName: string;
    value: number;
}

// ── Constants ────────────────────────────────────────────────────────────────────────────────────────────────────────

const DEFAULT_WIDTH = 640;
const DEFAULT_HEIGHT = 400;

// ── Actions ──────────────────────────────────────────────────────────────────────────────────────────────────────────

export function renderPlotBarChart(data: BarChartData, renderTo: HTMLElement): PlotBarChartHandle {
    const rows = toTidyRows(data);

    function draw(): SVGSVGElement {
        renderTo.replaceChildren();

        const width = renderTo.clientWidth || DEFAULT_WIDTH;
        const height = renderTo.clientHeight || DEFAULT_HEIGHT;

        const figure = Plot.plot({
            fx: { label: null },
            height,
            marks: [Plot.barY(rows, { fx: 'category', tip: true, x: 'seriesName', y: 'value', fill: 'seriesName' }), Plot.ruleY([0])],
            width,
            x: { axis: null },
            y: { grid: true }
        });

        renderTo.append(figure);

        if (!(figure instanceof SVGSVGElement)) throw new Error('Expected Observable Plot to render an SVG element.');
        return figure;
    }

    let svg = draw();

    return {
        resize: () => {
            svg = draw();
        },
        get svg() {
            return svg;
        }
    };
}

// ── Helpers ──────────────────────────────────────────────────────────────────────────────────────────────────────────

function toTidyRows(data: BarChartData): PlotBarChartRow[] {
    const rows: PlotBarChartRow[] = [];
    for (const series of data.series) {
        for (const [index, category] of data.categories.entries()) {
            rows.push({ category, seriesName: series.name, value: series.values[index] ?? 0 });
        }
    }
    return rows;
}
