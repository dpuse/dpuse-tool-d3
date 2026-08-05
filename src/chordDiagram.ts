// ── External Dependencies & Registrations
import { ChordDiagram, type ChordInputLink, type ChordInputNode, type GraphData, SingleContainer } from '@unovis/ts';

// ── Local
import { categoricalColor, type ColorModeId, INK } from '@/palette';

// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export interface ChordDiagramNode extends ChordInputNode {
    id: string;
    label: string;
}

export interface ChordDiagramLink extends ChordInputLink {
    source: string;
    target: string;
    value: number;
}

export interface ChordDiagramData {
    links: ChordDiagramLink[];
    nodes: ChordDiagramNode[];
}

export interface ChordDiagramOptions {
    colorModeId?: ColorModeId;
    nodeWidth?: number;
    padAngle?: number;
}

export interface ChordDiagramRenderHandle {
    resize: () => void;
    svg: SVGSVGElement;
}

// ── Constants ────────────────────────────────────────────────────────────────────────────────────────────────────────

const DEFAULT_NODE_WIDTH = 16;
const DEFAULT_PAD_ANGLE = 0.02;

// ── Actions ──────────────────────────────────────────────────────────────────────────────────────────────────────────

export function renderChordDiagram(data: ChordDiagramData, renderTo: HTMLElement, options: ChordDiagramOptions = {}): ChordDiagramRenderHandle {
    const colorModeId = options.colorModeId ?? 'light';
    const ink = INK[colorModeId];

    const chordDiagram = new ChordDiagram<ChordDiagramNode, ChordDiagramLink>({
        linkColor: (link) => categoricalColor(data.nodes.findIndex((node) => node.id === link.source), colorModeId),
        nodeColor: (_node, index) => categoricalColor(index, colorModeId),
        nodeLabel: (node) => ('label' in node ? node.label : node.key),
        nodeLabelColor: ink.primary,
        nodeWidth: options.nodeWidth ?? DEFAULT_NODE_WIDTH,
        padAngle: options.padAngle ?? DEFAULT_PAD_ANGLE
    });

    const graphData: GraphData<ChordDiagramNode, ChordDiagramLink> = { links: data.links, nodes: data.nodes };
    const container = new SingleContainer<GraphData<ChordDiagramNode, ChordDiagramLink>>(renderTo, { component: chordDiagram }, graphData);

    return {
        resize: () => {
            container.render();
        },
        get svg() {
            return container.element;
        }
    };
}
