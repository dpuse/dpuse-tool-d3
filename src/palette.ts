// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

export type ColorModeId = 'dark' | 'light';

// ── Constants ────────────────────────────────────────────────────────────────────────────────────────────────────────
// Fixed-order categorical palette validated for adjacent-pair CVD/normal-vision contrast in both modes. Every node in a
// Sankey diagram carries a direct text label, so identity never relies on colour alone - slots may cycle past 8.

export const CATEGORICAL_PALETTE: readonly { readonly dark: string; readonly light: string }[] = [
    { dark: '#3987e5', light: '#2a78d6' }, // blue
    { dark: '#d95926', light: '#eb6834' }, // orange
    { dark: '#199e70', light: '#1baf7a' }, // aqua
    { dark: '#c98500', light: '#eda100' }, // yellow
    { dark: '#d55181', light: '#e87ba4' }, // magenta
    { dark: '#008300', light: '#008300' }, // green
    { dark: '#9085e9', light: '#4a3aa7' }, // violet
    { dark: '#e66767', light: '#e34948' } // red
];

export const INK: Readonly<Record<ColorModeId, { readonly muted: string; readonly primary: string; readonly secondary: string }>> = {
    dark: { muted: '#898781', primary: '#ffffff', secondary: '#c3c2b7' },
    light: { muted: '#898781', primary: '#0b0b0b', secondary: '#52514e' }
};

export const SURFACE: Readonly<Record<ColorModeId, { readonly border: string; readonly chart: string }>> = {
    dark: { border: 'rgba(255,255,255,0.10)', chart: '#1a1a19' },
    light: { border: 'rgba(11,11,11,0.10)', chart: '#fcfcfb' }
};

// ── Helpers ──────────────────────────────────────────────────────────────────────────────────────────────────────────

export function categoricalColor(index: number, colorModeId: ColorModeId): string {
    const slot = CATEGORICAL_PALETTE[((index % CATEGORICAL_PALETTE.length) + CATEGORICAL_PALETTE.length) % CATEGORICAL_PALETTE.length];
    if (slot == null) throw new Error('Categorical palette is empty.');
    return colorModeId === 'dark' ? slot.dark : slot.light;
}
