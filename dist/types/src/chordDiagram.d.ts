import { ChordInputLink, ChordInputNode } from '@unovis/ts';
import { ColorModeId } from './palette';
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
export declare function renderChordDiagram(data: ChordDiagramData, renderTo: HTMLElement, options?: ChordDiagramOptions): ChordDiagramRenderHandle;
