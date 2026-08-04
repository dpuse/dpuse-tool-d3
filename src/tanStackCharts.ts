// ── External Dependencies & Registrations
import { group } from '@tanstack/charts/group';
import { barY, defineChart, mountChart } from '@tanstack/charts';
import { scaleBand, scaleLinear } from 'd3-scale';

// ── Local
import type { BarChartData } from '@/billboardJs';

export type { BarChartData, BarChartSeries } from '@/billboardJs';

// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export interface TanStackChartsHandle {
    destroy: () => void;
    resize: () => void;
    svg: SVGSVGElement;
}

interface TanStackBarRow {
    category: string;
    seriesName: string;
    value: number;
}

// ── Actions ──────────────────────────────────────────────────────────────────────────────────────────────────────────

// TanStack Charts is pre-alpha (0.6.4) - its vanilla-DOM API (mountChart) is undocumented and may change between releases.
export function renderTanStackCharts(data: BarChartData, renderTo: HTMLElement): TanStackChartsHandle {
    const rows = toBarRows(data);

    const definition = defineChart({
        marks: [barY(rows, { color: 'seriesName', fill: 'seriesName', layout: group(), x: 'category', y: 'value', z: 'seriesName' })],
        x: { scale: () => scaleBand().padding(0.2) },
        y: { grid: true, nice: true, scale: scaleLinear }
    });

    const hostOptions = { ariaLabel: 'Bar chart', definition };
    const host = mountChart(renderTo, hostOptions);

    function getSvg(): SVGSVGElement {
        const svgNode = renderTo.querySelector('svg');
        if (svgNode == null) throw new Error('Failed to create TanStack Charts SVG element.');
        return svgNode;
    }

    return {
        destroy: () => {
            host.destroy();
        },
        resize: () => {
            host.update(hostOptions);
        },
        get svg() {
            return getSvg();
        }
    };
}

// ── Helpers ──────────────────────────────────────────────────────────────────────────────────────────────────────────

function toBarRows(data: BarChartData): TanStackBarRow[] {
    const rows: TanStackBarRow[] = [];
    for (const series of data.series) {
        for (const [index, category] of data.categories.entries()) {
            rows.push({ category, seriesName: series.name, value: series.values[index] ?? 0 });
        }
    }
    return rows;
}
