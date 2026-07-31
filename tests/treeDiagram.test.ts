// @vitest-environment happy-dom

// ── External Dependencies & Registrations
import { describe, expect, it } from 'vitest';

// ── Local
import { D3Tool } from '@/index';
import type { TreeDiagramNode } from '@/index';

// ── Data ─────────────────────────────────────────────────────────────────────────────────────────────────────────────

const data: TreeDiagramNode = {
    id: 'geography',
    label: 'Geography',
    children: [
        {
            id: 'europe',
            label: 'Europe',
            children: [
                { id: 'unitedKingdom', label: 'United Kingdom' },
                { id: 'germany', label: 'Germany' }
            ]
        },
        { id: 'northAmerica', label: 'North America' }
    ]
};

const NODE_COUNT = 5; // geography, europe, unitedKingdom, germany, northAmerica
const LINK_COUNT = 4;

// ── Tests ────────────────────────────────────────────────────────────────────────────────────────────────────────────

describe('D3Tool.renderTreeDiagram', () => {
    it('renders an SVG with one rect and one labelled group per node, one path per link', () => {
        const renderTo = document.createElement('div');
        document.body.append(renderTo);

        const view = new D3Tool().renderTreeDiagram(data, renderTo);

        expect(view.vendorId).toBe('d3');
        expect(view.svg.tagName.toLowerCase()).toBe('svg');
        expect(view.svg.querySelectorAll('rect')).toHaveLength(NODE_COUNT);
        expect(view.svg.querySelectorAll('path')).toHaveLength(LINK_COUNT);

        const labels = Array.from(view.svg.querySelectorAll('text'), (node) => node.textContent);
        expect(labels).toEqual(expect.arrayContaining(['Geography', 'Europe', 'United Kingdom', 'Germany', 'North America']));
    });

    it('invokes the callback once the initial render completes', () => {
        const renderTo = document.createElement('div');
        let called = false;

        new D3Tool().renderTreeDiagram(data, renderTo, undefined, () => {
            called = true;
        });

        expect(called).toBe(true);
    });

    it('resize() redraws into the same container without throwing', () => {
        const renderTo = document.createElement('div');
        const view = new D3Tool().renderTreeDiagram(data, renderTo);

        expect(() => {
            view.resize();
        }).not.toThrow();
        expect(renderTo.querySelectorAll('svg')).toHaveLength(1);
    });
});
