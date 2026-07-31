// ── DPUse Framework
import type { PresentationView } from '@dpuse/dpuse-shared/component/presentation';

// ── Local
import { renderSankeyDiagram } from '@/sankeyDiagram';
import type { SankeyDiagramData, SankeyDiagramOptions } from '@/sankeyDiagram';

export type { SankeyDiagramData, SankeyDiagramLink, SankeyDiagramNode, SankeyDiagramOptions } from '@/sankeyDiagram';

// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export interface D3View extends PresentationView {
    svg: SVGSVGElement;
}

// ── Constants ────────────────────────────────────────────────────────────────────────────────────────────────────────

const D3_ID = 'd3';

// ── Tools ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export class D3Tool {
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
