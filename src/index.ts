// ── DPUse Framework
import type { PresentationView } from '@dpuse/dpuse-shared/component/presentation';

// ── Local
import { renderNetworkDiagram } from '@/networkDiagram';
import { renderSankeyDiagram } from '@/sankeyDiagram';
import type { NetworkDiagramData, NetworkDiagramOptions } from '@/networkDiagram';
import type { SankeyDiagramData, SankeyDiagramOptions } from '@/sankeyDiagram';

export type { NetworkDiagramData, NetworkDiagramLink, NetworkDiagramNode, NetworkDiagramOptions } from '@/networkDiagram';
export type { SankeyDiagramData, SankeyDiagramLink, SankeyDiagramNode, SankeyDiagramOptions } from '@/sankeyDiagram';

// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export interface D3View extends PresentationView {
    svg: SVGSVGElement;
}

export interface D3NetworkView extends D3View {
    destroy: () => void;
    triggerAutoLayout: () => void;
}

// ── Constants ────────────────────────────────────────────────────────────────────────────────────────────────────────

const D3_ID = 'd3';

// ── Tools ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export class D3Tool {
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
}
