// @vitest-environment happy-dom

// ── External Dependencies & Registrations
import { describe, expect, it } from 'vitest';

// ── Local
import { D3Tool } from '@/index';
import type { SankeyDiagramData } from '@/index';

// ── Data ─────────────────────────────────────────────────────────────────────────────────────────────────────────────

const data: SankeyDiagramData = {
    links: [
        { source: 'sourcing', target: 'contextualising', value: 8 },
        { source: 'contextualising', target: 'publishing', value: 5 },
        { source: 'contextualising', target: 'archived', value: 3 }
    ],
    nodes: [
        { id: 'sourcing', name: 'Sourcing' },
        { id: 'contextualising', name: 'Contextualising' },
        { id: 'publishing', name: 'Publishing' },
        { id: 'archived', name: 'Archived' }
    ]
};

// ── Tests ────────────────────────────────────────────────────────────────────────────────────────────────────────────

describe('D3Tool.renderSankeyDiagram', () => {
    it('renders an SVG with one path per link and one labelled node per node', async () => {
        const renderTo = document.createElement('div');
        document.body.append(renderTo);

        const view = await new D3Tool().renderSankeyDiagram(data, renderTo);

        expect(view.vendorId).toBe('d3');
        expect(view.svg.tagName.toLowerCase()).toBe('svg');
        expect(view.svg.querySelectorAll('path')).toHaveLength(data.links.length);
        expect(view.svg.querySelectorAll('rect')).toHaveLength(data.nodes.length);
        expect(view.svg.querySelectorAll('text')).toHaveLength(data.nodes.length);

        const labels = Array.from(view.svg.querySelectorAll('text'), (node) => node.textContent);
        expect(labels).toEqual(expect.arrayContaining(data.nodes.map((node) => node.name)));
    });

    it('invokes the callback once the initial render completes', async () => {
        const renderTo = document.createElement('div');
        let called = false;

        await new D3Tool().renderSankeyDiagram(data, renderTo, undefined, () => {
            called = true;
        });

        expect(called).toBe(true);
    });

    it('resize() redraws into the same container without throwing', async () => {
        const renderTo = document.createElement('div');
        const view = await new D3Tool().renderSankeyDiagram(data, renderTo);

        expect(() => {
            view.resize();
        }).not.toThrow();
        expect(renderTo.querySelectorAll('svg')).toHaveLength(1);
    });
});
