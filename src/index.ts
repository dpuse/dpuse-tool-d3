// ── External Dependencies & Registrations
import type { Chart } from 'billboard.js';

// ── DPUse Framework
import type { PresentationView } from '@dpuse/dpuse-shared/component/presentation';

// ── Local Framework
import type { BarChartData } from '@/billboardJs';
import type { ObservablePlotChartTypeId } from '@/observablePlot';
import type { ErdDiagramData, ErdDiagramOptions } from '@/erdDiagram';
import type { NetworkDiagramData, NetworkDiagramOptions } from '@/networkDiagram';
import type { SankeyDiagramData, SankeyDiagramOptions } from '@/sankeyDiagram';
import type { TreeDiagramNode, TreeDiagramOptions } from '@/treeDiagram';

// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export type { BarChartData, BarChartSeries } from '@/billboardJs';
export type { ErdDiagramData, ErdDiagramEdge, ErdDiagramNode, ErdDiagramNodeTypeId, ErdDiagramOptions } from '@/erdDiagram';
export type { NetworkDiagramData, NetworkDiagramLink, NetworkDiagramNode, NetworkDiagramOptions } from '@/networkDiagram';
export type { ObservablePlotChartTypeId } from '@/observablePlot';
export type { SankeyDiagramData, SankeyDiagramLink, SankeyDiagramNode, SankeyDiagramOptions } from '@/sankeyDiagram';
export type { TreeDiagramNode, TreeDiagramNodeRoleId, TreeDiagramOptions } from '@/treeDiagram';

export interface D3View extends PresentationView {
    svg: SVGSVGElement;
}

export interface D3NetworkView extends D3View {
    destroy: () => void;
    triggerAutoLayout: () => void;
}

export interface D3BarChartView extends PresentationView {
    chart: Chart;
    destroy: () => void;
}

// ── Constants ────────────────────────────────────────────────────────────────────────────────────────────────────────

const D3_ID = 'd3';

// ── Tools ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export class D3Tool {
    // Actions - Render chart (Billboard.js, SVG only - see the `billboard.js/canvas` entry point for canvas rendering, unused here).
    async renderBillboardJS(data: BarChartData, renderTo: HTMLElement, callback?: () => void): Promise<D3BarChartView> {
        const { renderBillboardJS } = await import('@/billboardJs');
        const handle = renderBillboardJS(data, renderTo);
        callback?.();
        return {
            chart: handle.chart,
            destroy: handle.destroy,
            resize: handle.resize,
            vendorId: 'billboard.js'
        };
    }

    // Actions - Render Observable Plot visualisation.
    async renderObservablePlot(typeId: ObservablePlotChartTypeId, data: BarChartData, renderTo: HTMLElement, callback?: () => void): Promise<D3View> {
        const { renderObservablePlot } = await import('@/observablePlot');
        const handle = renderObservablePlot(typeId, data, renderTo);
        callback?.();
        return {
            resize: handle.resize,
            get svg() {
                return handle.svg;
            },
            vendorId: 'observable-plot'
        };
    }

    // Actions - Render ERD diagram.
    async renderErdDiagram(data: ErdDiagramData, renderTo: HTMLElement, options?: ErdDiagramOptions, callback?: () => void): Promise<D3View> {
        const { renderErdDiagram } = await import('@/erdDiagram');
        const handle = renderErdDiagram(data, renderTo, options);
        callback?.();
        return {
            resize: handle.resize,
            get svg() {
                return handle.svg;
            },
            vendorId: D3_ID
        };
    }

    // Actions - Render network diagram.
    async renderNetworkDiagram(data: NetworkDiagramData, renderTo: HTMLElement, options?: NetworkDiagramOptions, callback?: () => void): Promise<D3NetworkView> {
        const { renderNetworkDiagram } = await import('@/networkDiagram');
        const handle = renderNetworkDiagram(data, renderTo, options);
        callback?.();
        return {
            destroy: handle.destroy,
            resize: handle.resize,
            get svg() {
                return handle.svg;
            },
            triggerAutoLayout: handle.triggerAutoLayout,
            vendorId: D3_ID
        };
    }

    // Actions - Render Sankey diagram.
    async renderSankeyDiagram(data: SankeyDiagramData, renderTo: HTMLElement, options?: SankeyDiagramOptions, callback?: () => void): Promise<D3View> {
        const { renderSankeyDiagram } = await import('@/sankeyDiagram');
        const handle = renderSankeyDiagram(data, renderTo, options);
        callback?.();
        return {
            resize: handle.resize,
            get svg() {
                return handle.svg;
            },
            vendorId: D3_ID
        };
    }

    // Actions - Render tree diagram.
    async renderTreeDiagram(data: TreeDiagramNode, renderTo: HTMLElement, options?: TreeDiagramOptions, callback?: () => void): Promise<D3View> {
        const { renderTreeDiagram } = await import('@/treeDiagram');
        const handle = renderTreeDiagram(data, renderTo, options);
        callback?.();
        return {
            resize: handle.resize,
            get svg() {
                return handle.svg;
            },
            vendorId: D3_ID
        };
    }
}
