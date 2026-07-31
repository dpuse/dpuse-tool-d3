export type ColorModeId = 'dark' | 'light';
export declare const CATEGORICAL_PALETTE: readonly {
    readonly dark: string;
    readonly light: string;
}[];
export declare const INK: Readonly<Record<ColorModeId, {
    readonly muted: string;
    readonly primary: string;
    readonly secondary: string;
}>>;
export declare const SURFACE: Readonly<Record<ColorModeId, {
    readonly border: string;
    readonly chart: string;
}>>;
export declare function categoricalColor(index: number, colorModeId: ColorModeId): string;
