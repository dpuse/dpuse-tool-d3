// ── External Dependencies & Registrations
import type { Chart } from 'billboard.js';

// ── DPUse Framework
import type { PresentationView } from '@dpuse/dpuse-shared/component/presentation';

// ── Local
import type { BarChartData } from '@/barChart';
import { renderBarChart } from '@/barChart';
import { renderNetworkDiagram } from '@/networkDiagram';
import { renderPlotBarChart } from '@/plotBarChart';
import { renderSankeyDiagram } from '@/sankeyDiagram';
import { renderTreeDiagram } from '@/treeDiagram';
import type { ErdDiagramData, ErdDiagramOptions } from '@/erdDiagram';
import type { NetworkDiagramData, NetworkDiagramOptions } from '@/networkDiagram';
import type { SankeyDiagramData, SankeyDiagramOptions } from '@/sankeyDiagram';
import type { TreeDiagramNode, TreeDiagramOptions } from '@/treeDiagram';

export type { BarChartData, BarChartSeries } from '@/barChart';
export type { ErdDiagramData, ErdDiagramEdge, ErdDiagramNode, ErdDiagramNodeTypeId, ErdDiagramOptions } from '@/erdDiagram';
export type { NetworkDiagramData, NetworkDiagramLink, NetworkDiagramNode, NetworkDiagramOptions } from '@/networkDiagram';
export type { SankeyDiagramData, SankeyDiagramLink, SankeyDiagramNode, SankeyDiagramOptions } from '@/sankeyDiagram';
export type { TreeDiagramNode, TreeDiagramNodeRoleId, TreeDiagramOptions } from '@/treeDiagram';

// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

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
    // Actions - Render bar chart.
    renderBarChart(data: BarChartData, renderTo: HTMLElement, callback?: () => void): D3BarChartView {
        const handle = renderBarChart(data, renderTo);
        callback?.();
        return {
            chart: handle.chart,
            destroy: handle.destroy,
            resize: handle.resize,
            vendorId: 'billboard.js'
        };
    }

    // Actions - Render bar chart (Observable Plot).
    renderPlotBarChart(data: BarChartData, renderTo: HTMLElement, callback?: () => void): D3View {
        const handle = renderPlotBarChart(data, renderTo);
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
    renderNetworkDiagram(data: NetworkDiagramData, renderTo: HTMLElement, options?: NetworkDiagramOptions, callback?: () => void): D3NetworkView {
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
    renderSankeyDiagram(data: SankeyDiagramData, renderTo: HTMLElement, options?: SankeyDiagramOptions, callback?: () => void): D3View {
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
    renderTreeDiagram(data: TreeDiagramNode, renderTo: HTMLElement, options?: TreeDiagramOptions, callback?: () => void): D3View {
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
