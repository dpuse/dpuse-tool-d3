// @vitest-environment happy-dom

// ── External Dependencies & Registrations
import { describe, expect, it } from 'vitest';

// ── Local
import { D3Tool } from '@/index';
import type { BarChartData } from '@/index';

// ── Data ─────────────────────────────────────────────────────────────────────────────────────────────────────────────

const data: BarChartData = {
    categories: ['Q1', 'Q2', 'Q3', 'Q4'],
    series: [
        { name: 'Revenue', values: [30, 200, 100, 400] },
        { name: 'Cost', values: [130, 100, 140, 200] }
    ]
};

// ── Tests ────────────────────────────────────────────────────────────────────────────────────────────────────────────

describe('D3Tool.renderPlotBarChart', () => {
    it('renders an SVG with one bar per category/series combination', () => {
        const renderTo = document.createElement('div');
        document.body.append(renderTo);

        const view = new D3Tool().renderPlotBarChart(data, renderTo);

        expect(view.vendorId).toBe('observable-plot');
        expect(view.svg.tagName.toLowerCase()).toBe('svg');

        const expectedBarCount = data.categories.length * data.series.length;
        expect(view.svg.querySelectorAll('rect')).toHaveLength(expectedBarCount);
    });

    it('invokes the callback once the initial render completes', () => {
        const renderTo = document.createElement('div');
        let called = false;

        new D3Tool().renderPlotBarChart(data, renderTo, () => {
            called = true;
        });

        expect(called).toBe(true);
    });

    it('resize() redraws into the same container without throwing', () => {
        const renderTo = document.createElement('div');
        const view = new D3Tool().renderPlotBarChart(data, renderTo);

        expect(() => {
            view.resize();
        }).not.toThrow();
        expect(renderTo.querySelectorAll('svg')).toHaveLength(1);
    });
});
