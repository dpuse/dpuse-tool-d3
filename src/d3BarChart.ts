// ── External Dependencies & Registrations
import { select } from 'd3-selection';
import { axisBottom, axisLeft } from 'd3-axis';
import { scaleBand, scaleLinear, scaleOrdinal } from 'd3-scale';

// ── Local
import type { BarChartData } from '@/billboardJs';

export type { BarChartData, BarChartSeries } from '@/billboardJs';

// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export interface D3BarChartHandle {
    resize: () => void;
    svg: SVGSVGElement;
}

interface D3BarChartRow {
    category: string;
    seriesName: string;
    value: number;
}

// ── Constants ────────────────────────────────────────────────────────────────────────────────────────────────────────

const DEFAULT_WIDTH = 640;
const DEFAULT_HEIGHT = 400;
const MARGIN = { bottom: 24, left: 40, right: 16, top: 16 };
const SERIES_COLORS = ['#6c8ebf', '#d79b00', '#82b366', '#9673a6', '#b85450'];

// ── Actions ──────────────────────────────────────────────────────────────────────────────────────────────────────────

// A grouped bar chart built from raw D3 primitives (d3-scale, d3-axis, d3-selection) - no chart wrapper library.
export function renderD3BarChart(data: BarChartData, renderTo: HTMLElement): D3BarChartHandle {
    function draw(): SVGSVGElement {
        select(renderTo).selectAll('svg').remove();

        const width = renderTo.clientWidth || DEFAULT_WIDTH;
        const height = renderTo.clientHeight || DEFAULT_HEIGHT;
        const innerWidth = width - MARGIN.left - MARGIN.right;
        const innerHeight = height - MARGIN.top - MARGIN.bottom;

        const categoryScale = scaleBand().domain(data.categories).range([0, innerWidth]).padding(0.2);
        const seriesScale = scaleBand()
            .domain(data.series.map((series) => series.name))
            .range([0, categoryScale.bandwidth()])
            .padding(0.1);
        const maxValue = Math.max(0, ...data.series.flatMap((series) => series.values));
        const valueScale = scaleLinear().domain([0, maxValue]).nice().range([innerHeight, 0]);
        const colorScale = scaleOrdinal<string, string>()
            .domain(data.series.map((series) => series.name))
            .range(SERIES_COLORS);

        const svgSelection = select(renderTo)
            .append('svg')
            .attr('viewBox', `0 0 ${String(width)} ${String(height)}`)
            .attr('width', width)
            .attr('height', height);

        const canvas = svgSelection.append('g').attr('transform', `translate(${String(MARGIN.left)}, ${String(MARGIN.top)})`);

        canvas
            .append('g')
            .attr('transform', `translate(0, ${String(innerHeight)})`)
            .call(axisBottom(categoryScale));
        canvas.append('g').call(axisLeft(valueScale));

        canvas
            .append('g')
            .selectAll('rect')
            .data(toBarRows(data))
            .join('rect')
            .attr('x', (row) => (categoryScale(row.category) ?? 0) + (seriesScale(row.seriesName) ?? 0))
            .attr('y', (row) => valueScale(row.value))
            .attr('width', seriesScale.bandwidth())
            .attr('height', (row) => innerHeight - valueScale(row.value))
            .attr('fill', (row) => colorScale(row.seriesName));

        const svgNode = svgSelection.node();
        if (svgNode == null) throw new Error('Failed to create D3 bar chart SVG element.');
        return svgNode;
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

function toBarRows(data: BarChartData): D3BarChartRow[] {
    const rows: D3BarChartRow[] = [];
    for (const series of data.series) {
        for (const [index, category] of data.categories.entries()) {
            rows.push({ category, seriesName: series.name, value: series.values[index] ?? 0 });
        }
    }
    return rows;
}
