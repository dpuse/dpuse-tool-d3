// @vitest-environment happy-dom

// ── External Dependencies & Registrations
import { describe, expect, it } from 'vitest';

// ── Local
import { D3Tool } from '@/index';
import type { NetworkDiagramData } from '@/index';

// ── Data ─────────────────────────────────────────────────────────────────────────────────────────────────────────────

const data: NetworkDiagramData = {
    links: [
        { source: 'A', target: 'B' },
        { source: 'B', target: 'C' }
    ],
    nodes: [{ id: 'A' }, { id: 'B' }, { id: 'C' }]
};

// ── Tests ────────────────────────────────────────────────────────────────────────────────────────────────────────────

describe('D3Tool.renderNetworkDiagram', () => {
    it('renders an SVG with one line per link and one labelled node per node', async () => {
        const renderTo = document.createElement('div');
        document.body.append(renderTo);

        const view = await new D3Tool().renderNetworkDiagram(data, renderTo);

        expect(view.vendorId).toBe('d3');
        expect(view.svg.tagName.toLowerCase()).toBe('svg');
        expect(view.svg.querySelectorAll('line')).toHaveLength(data.links.length);
        expect(view.svg.querySelectorAll('circle')).toHaveLength(data.nodes.length);

        const labels = Array.from(view.svg.querySelectorAll('text'), (node) => node.textContent);
        expect(labels).toEqual(expect.arrayContaining(data.nodes.map((node) => node.id)));
    });

    it('invokes the callback once the initial render completes', async () => {
        const renderTo = document.createElement('div');
        let called = false;

        await new D3Tool().renderNetworkDiagram(data, renderTo, undefined, () => {
            called = true;
        });

        expect(called).toBe(true);
    });

    it('triggerAutoLayout() and resize() run without throwing', async () => {
        const renderTo = document.createElement('div');
        const view = await new D3Tool().renderNetworkDiagram(data, renderTo);

        expect(() => {
            view.triggerAutoLayout();
        }).not.toThrow();
        expect(() => {
            view.resize();
        }).not.toThrow();
    });

    it('destroy() removes the SVG from the container', async () => {
        const renderTo = document.createElement('div');
        const view = await new D3Tool().renderNetworkDiagram(data, renderTo);

        view.destroy();

        expect(renderTo.querySelectorAll('svg')).toHaveLength(0);
    });
});
