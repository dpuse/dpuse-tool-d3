// ── External Dependencies & Registrations
import { barY, plot, ruleY } from '@observablehq/plot';

// ── Local
import type { BarChartData } from '@/billboardJs';

export type { BarChartData, BarChartSeries } from '@/billboardJs';

// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export type ObservablePlotChartTypeId = 'bar';

export interface ObservablePlotHandle {
    resize: () => void;
    svg: SVGSVGElement;
}

interface ObservablePlotBarRow {
    category: string;
    seriesName: string;
    value: number;
}

// ── Constants ────────────────────────────────────────────────────────────────────────────────────────────────────────

const DEFAULT_WIDTH = 640;
const DEFAULT_HEIGHT = 400;

// ── Actions ──────────────────────────────────────────────────────────────────────────────────────────────────────────

export function renderObservablePlot(typeId: ObservablePlotChartTypeId, data: BarChartData, renderTo: HTMLElement): ObservablePlotHandle {
    function draw(): SVGSVGElement {
        renderTo.replaceChildren();

        const width = renderTo.clientWidth || DEFAULT_WIDTH;
        const height = renderTo.clientHeight || DEFAULT_HEIGHT;

        let figure: HTMLElement | SVGSVGElement;
        switch (typeId) {
            case 'bar': {
                const rows = toBarRows(data);
                figure = plot({
                    fx: { label: null },
                    height,
                    marks: [barY(rows, { fx: 'category', tip: true, x: 'seriesName', y: 'value', fill: 'seriesName' }), ruleY([0])],
                    width,
                    x: { axis: null },
                    y: { grid: true }
                });
                break;
            }
        }

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

function toBarRows(data: BarChartData): ObservablePlotBarRow[] {
    const rows: ObservablePlotBarRow[] = [];
    for (const series of data.series) {
        for (const [index, category] of data.categories.entries()) {
            rows.push({ category, seriesName: series.name, value: series.values[index] ?? 0 });
        }
    }
    return rows;
}
