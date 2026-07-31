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

describe('D3Tool.renderBarChart', () => {
    it('renders a chart with one bar group per series into the container', () => {
        const renderTo = document.createElement('div');
        document.body.append(renderTo);

        const view = new D3Tool().renderBarChart(data, renderTo);

        expect(view.vendorId).toBe('billboard.js');
        expect(renderTo.querySelectorAll('svg')).toHaveLength(1);
        expect(renderTo.querySelectorAll('.bb-chart-bars')).toHaveLength(1);
        expect(renderTo.querySelectorAll('.bb-target')).toHaveLength(data.series.length);
    });

    it('invokes the callback once the initial render completes', () => {
        const renderTo = document.createElement('div');
        let called = false;

        new D3Tool().renderBarChart(data, renderTo, () => {
            called = true;
        });

        expect(called).toBe(true);
    });

    it('resize() and destroy() run without throwing', () => {
        const renderTo = document.createElement('div');
        const view = new D3Tool().renderBarChart(data, renderTo);

        expect(() => {
            view.resize();
        }).not.toThrow();
        expect(() => {
            view.destroy();
        }).not.toThrow();
    });
});
