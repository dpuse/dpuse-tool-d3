// @vitest-environment happy-dom

// ── External Dependencies & Registrations
import { describe, expect, it } from 'vitest';

// ── Local
import { D3Tool } from '@/index';
import type { ErdDiagramData } from '@/index';

// ── Data ─────────────────────────────────────────────────────────────────────────────────────────────────────────────

const data: ErdDiagramData = {
    edges: [
        { source: 'organisation', target: 'organisationalUnit' },
        { source: 'organisationalUnit', target: 'organisationalUnit' },
        { source: 'person', target: 'nationality' }
    ],
    nodes: [
        { id: 'organisation', label: 'Organisation', typeId: 'primary' },
        { id: 'organisationalUnit', label: 'Organisational Unit', typeId: 'child' },
        { id: 'person', label: 'Person', typeId: 'primary' },
        { id: 'nationality', label: 'Nationality', typeId: 'child' }
    ]
};

// ── Tests ────────────────────────────────────────────────────────────────────────────────────────────────────────────

describe('D3Tool.renderErdDiagram', () => {
    it('renders an SVG with one rect and one labelled group per node', () => {
        const renderTo = document.createElement('div');
        document.body.append(renderTo);

        const view = new D3Tool().renderErdDiagram(data, renderTo);

        expect(view.vendorId).toBe('d3');
        expect(view.svg.tagName.toLowerCase()).toBe('svg');
        expect(view.svg.querySelectorAll('rect')).toHaveLength(data.nodes.length);

        const labels = Array.from(view.svg.querySelectorAll('text'), (node) => node.textContent);
        expect(labels).toEqual(expect.arrayContaining(data.nodes.map((node) => node.label)));
    });

    it('draws one path per edge, including self-edges', () => {
        const renderTo = document.createElement('div');
        const view = new D3Tool().renderErdDiagram(data, renderTo);

        // The arrowhead marker (in <defs>) is also a <path>, so edge paths are counted separately from it.
        const edgePaths = Array.from(view.svg.querySelectorAll('path')).filter((path) => path.closest('defs') == null);
        expect(edgePaths).toHaveLength(data.edges.length);
    });

    it('invokes the callback once the initial render completes', () => {
        const renderTo = document.createElement('div');
        let called = false;

        new D3Tool().renderErdDiagram(data, renderTo, undefined, () => {
            called = true;
        });

        expect(called).toBe(true);
    });

    it('resize() redraws into the same container without throwing', () => {
        const renderTo = document.createElement('div');
        const view = new D3Tool().renderErdDiagram(data, renderTo);

        expect(() => {
            view.resize();
        }).not.toThrow();
        expect(renderTo.querySelectorAll('svg')).toHaveLength(1);
    });
});
