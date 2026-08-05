# DPUse D3 Tool

Consider adding support for Plotly.js, Vega and Vega-Lite.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

A TypeScript wrapper for D3 that implements the Data Positioning chart-rendering interface, starting with a Sankey
diagram renderer built on `d3-sankey` and `d3-selection`.

## Installation

There's no need to install this tool manually. Once released, it's uploaded to the Data Positioning Engine cloud and
becomes instantly available to all new instances of the browser app. A notification about the new version is also
sent to all existing browser apps.

## Usage

Basic usage example with no error handling.

```typescript
import type { D3Tool as D3ToolType, SankeyDiagramData } from '@dpuse/dpuse-tool-d3-visualiser';

async function loadD3Tool(version: string): Promise<D3ToolType> {
    if (d3Tool) return d3Tool;

    const URL = `https://engine-eu.dpuse.app/tools/d3_v${version}/dpuse-tool-d3.es.js`;
    const D3Tool = (await import(/* @vite-ignore */ URL)).D3Tool as new () => D3ToolType;
    return new D3Tool();
}

const d3Tool = await loadD3Tool('n.n.nnn');

const data: SankeyDiagramData = {
    nodes: [
        { id: 'sourcing', name: 'Sourcing' },
        { id: 'contextualising', name: 'Contextualising' },
        { id: 'publishing', name: 'Publishing' }
    ],
    links: [
        { source: 'sourcing', target: 'contextualising', value: 8 },
        { source: 'contextualising', target: 'publishing', value: 5 }
    ]
};

const view = d3Tool.renderSankeyDiagram(data, renderTo);
// Call view.resize() after the container's size changes to redraw the layout.
```

<!-- DEPENDENCY_LICENSES_START -->

License data is collected automatically on each release using [license-checker](https://github.com/RSeidelsohn/license-checker-rseidelsohn). The following table lists all production dependencies. These dependencies (including transitive ones) have been checked and confirmed to use BSD-3-Clause, ISC, MIT, or Unlicense — all permissive, commercially-friendly licenses. Users of the uploaded library are covered by these checks; developers cloning this repository should independently verify development dependencies.

| Dependency                                                                    | Version | License(s)   | Document                                                              |
| :---------------------------------------------------------------------------- | :-----: | :----------- | :-------------------------------------------------------------------- |
| [@dagrejs/dagre](https://github.com/dagrejs/dagre)                            |  3.0.0  | MIT          | [LICENSE](licenses/downloads/@dagrejs/dagre@3.0.0-LICENSE.txt)        |
| [@dagrejs/graphlib](https://github.com/dagrejs/graphlib)                      |  4.0.1  | MIT          | [LICENSE](licenses/downloads/@dagrejs/graphlib@4.0.1-LICENSE.txt)     |
| [@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)                  | 0.3.760 | MIT          | [LICENSE](licenses/downloads/@dpuse/dpuse-shared@0.3.760-LICENSE.txt) |
| [@observablehq/plot](https://github.com/observablehq/plot)                    | 0.6.17  | ISC          | [LICENSE](licenses/downloads/@observablehq/plot@0.6.17-LICENSE.txt)   |
| [@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)     | 3.0.11  | MIT          | [LICENSE](licenses/downloads/@types/d3-selection@3.0.11-LICENSE.txt)  |
| [@types/d3-transition](https://github.com/DefinitelyTyped/DefinitelyTyped)    |  3.0.9  | MIT          | [LICENSE](licenses/downloads/@types/d3-transition@3.0.9-LICENSE.txt)  |
| [billboard.js](https://github.com/naver/billboard.js)                         |  4.0.3  | MIT          | [LICENSE](licenses/downloads/billboard.js@4.0.3-LICENSE.txt)          |
| [binary-search-bounds](https://github.com/mikolalysenko/binary-search-bounds) |  2.0.5  | MIT          | [LICENSE](licenses/downloads/binary-search-bounds@2.0.5-LICENSE.txt)  |
| [commander](https://github.com/tj/commander.js)                               |  7.2.0  | MIT          | [LICENSE](licenses/downloads/commander@7.2.0-LICENSE.txt)             |
| [d3-array](https://github.com/d3/d3-array)                                    |  3.2.4  | ISC          | [LICENSE](licenses/downloads/d3-array@3.2.4-LICENSE.txt)              |
| [d3-axis](https://github.com/d3/d3-axis)                                      |  3.0.0  | ISC          | [LICENSE](licenses/downloads/d3-axis@3.0.0-LICENSE.txt)               |
| [d3-brush](https://github.com/d3/d3-brush)                                    |  3.0.0  | ISC          | [LICENSE](licenses/downloads/d3-brush@3.0.0-LICENSE.txt)              |
| [d3-chord](https://github.com/d3/d3-chord)                                    |  3.0.1  | ISC          | [LICENSE](licenses/downloads/d3-chord@3.0.1-LICENSE.txt)              |
| [d3-color](https://github.com/d3/d3-color)                                    |  3.1.0  | ISC          | [LICENSE](licenses/downloads/d3-color@3.1.0-LICENSE.txt)              |
| [d3-contour](https://github.com/d3/d3-contour)                                |  4.0.2  | ISC          | [LICENSE](licenses/downloads/d3-contour@4.0.2-LICENSE.txt)            |
| [d3-delaunay](https://github.com/d3/d3-delaunay)                              |  6.0.4  | ISC          | [LICENSE](licenses/downloads/d3-delaunay@6.0.4-LICENSE.txt)           |
| [d3-dispatch](https://github.com/d3/d3-dispatch)                              |  3.0.1  | ISC          | [LICENSE](licenses/downloads/d3-dispatch@3.0.1-LICENSE.txt)           |
| [d3-drag](https://github.com/d3/d3-drag)                                      |  3.0.0  | ISC          | [LICENSE](licenses/downloads/d3-drag@3.0.0-LICENSE.txt)               |
| [d3-dsv](https://github.com/d3/d3-dsv)                                        |  3.0.1  | ISC          | [LICENSE](licenses/downloads/d3-dsv@3.0.1-LICENSE.txt)                |
| [d3-ease](https://github.com/d3/d3-ease)                                      |  3.0.1  | BSD-3-Clause | [LICENSE](licenses/downloads/d3-ease@3.0.1-LICENSE.txt)               |
| [d3-fetch](https://github.com/d3/d3-fetch)                                    |  3.0.1  | ISC          | [LICENSE](licenses/downloads/d3-fetch@3.0.1-LICENSE.txt)              |
| [d3-force](https://github.com/d3/d3-force)                                    |  3.0.0  | ISC          | [LICENSE](licenses/downloads/d3-force@3.0.0-LICENSE.txt)              |
| [d3-format](https://github.com/d3/d3-format)                                  |  3.1.2  | ISC          | [LICENSE](licenses/downloads/d3-format@3.1.2-LICENSE.txt)             |
| [d3-geo](https://github.com/d3/d3-geo)                                        |  3.1.1  | ISC          | [LICENSE](licenses/downloads/d3-geo@3.1.1-LICENSE.txt)                |
| [d3-hierarchy](https://github.com/d3/d3-hierarchy)                            |  3.1.2  | ISC          | [LICENSE](licenses/downloads/d3-hierarchy@3.1.2-LICENSE.txt)          |
| [d3-interpolate](https://github.com/d3/d3-interpolate)                        |  3.0.1  | ISC          | [LICENSE](licenses/downloads/d3-interpolate@3.0.1-LICENSE.txt)        |
| [d3-path](https://github.com/d3/d3-path)                                      |  3.1.0  | ISC          | [LICENSE](licenses/downloads/d3-path@3.1.0-LICENSE.txt)               |
| [d3-polygon](https://github.com/d3/d3-polygon)                                |  3.0.1  | ISC          | [LICENSE](licenses/downloads/d3-polygon@3.0.1-LICENSE.txt)            |
| [d3-quadtree](https://github.com/d3/d3-quadtree)                              |  3.0.1  | ISC          | [LICENSE](licenses/downloads/d3-quadtree@3.0.1-LICENSE.txt)           |
| [d3-random](https://github.com/d3/d3-random)                                  |  3.0.1  | ISC          | [LICENSE](licenses/downloads/d3-random@3.0.1-LICENSE.txt)             |
| [d3-sankey](https://github.com/d3/d3-sankey)                                  | 0.12.3  | BSD-3-Clause | [LICENSE](licenses/downloads/d3-sankey@0.12.3-LICENSE.txt)            |
| [d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic)                |  3.1.0  | ISC          | [LICENSE](licenses/downloads/d3-scale-chromatic@3.1.0-LICENSE.txt)    |
| [d3-scale](https://github.com/d3/d3-scale)                                    |  4.0.2  | ISC          | [LICENSE](licenses/downloads/d3-scale@4.0.2-LICENSE.txt)              |
| [d3-selection](https://github.com/d3/d3-selection)                            |  3.0.0  | ISC          | [LICENSE](licenses/downloads/d3-selection@3.0.0-LICENSE.txt)          |
| [d3-shape](https://github.com/d3/d3-shape)                                    |  3.2.0  | ISC          | [LICENSE](licenses/downloads/d3-shape@3.2.0-LICENSE.txt)              |
| [d3-time-format](https://github.com/d3/d3-time-format)                        |  4.1.0  | ISC          | [LICENSE](licenses/downloads/d3-time-format@4.1.0-LICENSE.txt)        |
| [d3-time](https://github.com/d3/d3-time)                                      |  3.1.0  | ISC          | [LICENSE](licenses/downloads/d3-time@3.1.0-LICENSE.txt)               |
| [d3-timer](https://github.com/d3/d3-timer)                                    |  3.0.1  | ISC          | [LICENSE](licenses/downloads/d3-timer@3.0.1-LICENSE.txt)              |
| [d3-transition](https://github.com/d3/d3-transition)                          |  3.0.1  | ISC          | [LICENSE](licenses/downloads/d3-transition@3.0.1-LICENSE.txt)         |
| [d3-zoom](https://github.com/d3/d3-zoom)                                      |  3.0.0  | ISC          | [LICENSE](licenses/downloads/d3-zoom@3.0.0-LICENSE.txt)               |
| [d3](https://github.com/d3/d3)                                                |  7.9.0  | ISC          | [LICENSE](licenses/downloads/d3@7.9.0-LICENSE.txt)                    |
| [delaunator](https://github.com/mapbox/delaunator)                            |  5.1.0  | ISC          | [LICENSE](licenses/downloads/delaunator@5.1.0-LICENSE.txt)            |
| [iconv-lite](https://github.com/ashtuchkin/iconv-lite)                        |  0.6.3  | MIT          | [LICENSE](licenses/downloads/iconv-lite@0.6.3-LICENSE.txt)            |
| [internmap](https://github.com/mbostock/internmap)                            |  2.0.3  | ISC          | [LICENSE](licenses/downloads/internmap@2.0.3-LICENSE.txt)             |
| [interval-tree-1d](https://github.com/mikolalysenko/interval-tree-1d)         |  1.0.4  | MIT          | [LICENSE](licenses/downloads/interval-tree-1d@1.0.4-LICENSE.txt)      |
| [isoformat](https://github.com/mbostock/isoformat)                            |  0.2.1  | ISC          | [LICENSE](licenses/downloads/isoformat@0.2.1-LICENSE.txt)             |
| [robust-predicates](https://github.com/mourner/robust-predicates)             |  3.0.3  | Unlicense    | [LICENSE](licenses/downloads/robust-predicates@3.0.3-LICENSE.txt)     |
| [rw](https://github.com/mbostock/rw)                                          |  1.3.3  | BSD-3-Clause | [LICENSE](licenses/downloads/rw@1.3.3-LICENSE.txt)                    |
| [safer-buffer](https://github.com/ChALkeR/safer-buffer)                       |  2.1.2  | MIT          | [LICENSE](licenses/downloads/safer-buffer@2.1.2-LICENSE.txt)          |

<!-- DEPENDENCY_LICENSES_END -->

<!-- DEPENDENCY_TREE_START -->

The dependency tree below lists every package in this project — direct and transitive — along with its installed version, release date, and update status. Packages flagged ❗ have a newer version available; ⚠️ indicates a package that hasn't been updated in the last 6 months or longer. Neither flag necessarily indicates a problem: we let new releases stabilise before upgrading, and some packages are simply mature and stable, requiring no active development.

- **[@dagrejs/dagre](https://github.com/dagrejs/dagre)** 3.0.0 — **4 months** ago: 2026-03-22
    - **[@dagrejs/graphlib](https://github.com/dagrejs/graphlib)** 4.0.1 — **4 months** ago: 2026-03-08
- **[@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)** 0.3.760 — this month: 2026-08-02
- **[@observablehq/plot](https://github.com/observablehq/plot)** 0.6.17 — **17 months** ago: 2025-02-14 ⚠️
    - **[d3](https://github.com/d3/d3)** 7.9.0 — **28 months** ago: 2024-03-12 ⚠️
        - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **38 months** ago: 2023-05-30 ⚠️
        - **[d3-axis](https://github.com/d3/d3-axis)** 3.0.0 — **61 months** ago: 2021-06-09 ⚠️
        - **[d3-brush](https://github.com/d3/d3-brush)** 3.0.0 — **61 months** ago: 2021-06-10 ⚠️
        - **[d3-chord](https://github.com/d3/d3-chord)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
            - **[d3-path](https://github.com/d3/d3-path)** 3.1.0 — **43 months** ago: 2022-12-19 ⚠️
        - **[d3-color](https://github.com/d3/d3-color)** 3.1.0 — **52 months** ago: 2022-03-28 ⚠️
        - **[d3-contour](https://github.com/d3/d3-contour)** 4.0.2 — **42 months** ago: 2023-01-11 ⚠️
            - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **38 months** ago: 2023-05-30 ⚠️
        - **[d3-delaunay](https://github.com/d3/d3-delaunay)** 6.0.4 — **40 months** ago: 2023-04-01 ⚠️
            - **[delaunator](https://github.com/mapbox/delaunator)** 5.1.0 — **4 months** ago: 2026-03-23
                - **[robust-predicates](https://github.com/mourner/robust-predicates)** 3.0.3 — **4 months** ago: 2026-03-22
        - **[d3-dispatch](https://github.com/d3/d3-dispatch)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
        - **[d3-drag](https://github.com/d3/d3-drag)** 3.0.0 — **61 months** ago: 2021-06-09 ⚠️
        - **[d3-dsv](https://github.com/d3/d3-dsv)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
            - **[commander](https://github.com/tj/commander.js)** 7.2.0 — **64 months** ago: 2021-03-21 ⚠️ → **latest**: 15.0.0 — **2 months** ago: 2026-05-29 ❗
            - **[iconv-lite](https://github.com/ashtuchkin/iconv-lite)** 0.6.3 — **62 months** ago: 2021-05-24 ⚠️ → **latest**: 0.7.3 — this month: 2026-07-03 ❗
                - **[safer-buffer](https://github.com/ChALkeR/safer-buffer)** 2.1.2 — **99 months** ago: 2018-04-08 ⚠️
            - **[rw](https://github.com/mbostock/rw)** 1.3.3 — **114 months** ago: 2017-01-20 ⚠️
        - **[d3-ease](https://github.com/d3/d3-ease)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
        - **[d3-fetch](https://github.com/d3/d3-fetch)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
            - **[d3-dsv](https://github.com/d3/d3-dsv)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
        - **[d3-force](https://github.com/d3/d3-force)** 3.0.0 — **61 months** ago: 2021-06-05 ⚠️
        - **[d3-format](https://github.com/d3/d3-format)** 3.1.2 — **6 months** ago: 2026-01-14
        - **[d3-geo](https://github.com/d3/d3-geo)** 3.1.1 — **28 months** ago: 2024-03-12 ⚠️
            - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **38 months** ago: 2023-05-30 ⚠️
        - **[d3-hierarchy](https://github.com/d3/d3-hierarchy)** 3.1.2 — **52 months** ago: 2022-04-02 ⚠️
        - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
        - **[d3-path](https://github.com/d3/d3-path)** 3.1.0 — **43 months** ago: 2022-12-19 ⚠️
        - **[d3-polygon](https://github.com/d3/d3-polygon)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
        - **[d3-quadtree](https://github.com/d3/d3-quadtree)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
        - **[d3-random](https://github.com/d3/d3-random)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
        - **[d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic)** 3.1.0 — **28 months** ago: 2024-03-12 ⚠️
            - **[d3-color](https://github.com/d3/d3-color)** 3.1.0 — **52 months** ago: 2022-03-28 ⚠️
            - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
        - **[d3-scale](https://github.com/d3/d3-scale)** 4.0.2 — **58 months** ago: 2021-09-24 ⚠️
        - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **61 months** ago: 2021-06-07 ⚠️
        - **[d3-shape](https://github.com/d3/d3-shape)** 3.2.0 — **43 months** ago: 2022-12-20 ⚠️
        - **[d3-time-format](https://github.com/d3/d3-time-format)** 4.1.0 — **55 months** ago: 2021-12-04 ⚠️
        - **[d3-time](https://github.com/d3/d3-time)** 3.1.0 — **44 months** ago: 2022-12-02 ⚠️
            - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **38 months** ago: 2023-05-30 ⚠️
        - **[d3-timer](https://github.com/d3/d3-timer)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
        - **[d3-transition](https://github.com/d3/d3-transition)** 3.0.1 — **61 months** ago: 2021-06-09 ⚠️
        - **[d3-zoom](https://github.com/d3/d3-zoom)** 3.0.0 — **61 months** ago: 2021-06-10 ⚠️
    - **[interval-tree-1d](https://github.com/mikolalysenko/interval-tree-1d)** 1.0.4 — **61 months** ago: 2021-06-03 ⚠️
        - **[binary-search-bounds](https://github.com/mikolalysenko/binary-search-bounds)** 2.0.5 — **66 months** ago: 2021-01-25 ⚠️
    - **[isoformat](https://github.com/mbostock/isoformat)** 0.2.1 — **58 months** ago: 2021-09-24 ⚠️
- **[billboard.js](https://github.com/naver/billboard.js)** 4.0.3 — this month: 2026-07-06
    - **[@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.11 — **21 months** ago: 2024-10-07 ⚠️
    - **[@types/d3-transition](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.9 — **21 months** ago: 2024-10-07 ⚠️
        - **[@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.11 — **21 months** ago: 2024-10-07 ⚠️
    - **[d3-axis](https://github.com/d3/d3-axis)** 3.0.0 — **61 months** ago: 2021-06-09 ⚠️
    - **[d3-brush](https://github.com/d3/d3-brush)** 3.0.0 — **61 months** ago: 2021-06-10 ⚠️
        - **[d3-dispatch](https://github.com/d3/d3-dispatch)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
        - **[d3-drag](https://github.com/d3/d3-drag)** 3.0.0 — **61 months** ago: 2021-06-09 ⚠️
        - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
        - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **61 months** ago: 2021-06-07 ⚠️
        - **[d3-transition](https://github.com/d3/d3-transition)** 3.0.1 — **61 months** ago: 2021-06-09 ⚠️
    - **[d3-drag](https://github.com/d3/d3-drag)** 3.0.0 — **61 months** ago: 2021-06-09 ⚠️
    - **[d3-hierarchy](https://github.com/d3/d3-hierarchy)** 3.1.2 — **52 months** ago: 2022-04-02 ⚠️
    - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
        - **[d3-color](https://github.com/d3/d3-color)** 3.1.0 — **52 months** ago: 2022-03-28 ⚠️
    - **[d3-scale](https://github.com/d3/d3-scale)** 4.0.2 — **58 months** ago: 2021-09-24 ⚠️
        - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **38 months** ago: 2023-05-30 ⚠️
        - **[d3-format](https://github.com/d3/d3-format)** 3.1.2 — **6 months** ago: 2026-01-14
        - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
        - **[d3-time-format](https://github.com/d3/d3-time-format)** 4.1.0 — **55 months** ago: 2021-12-04 ⚠️
        - **[d3-time](https://github.com/d3/d3-time)** 3.1.0 — **44 months** ago: 2022-12-02 ⚠️
    - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **61 months** ago: 2021-06-07 ⚠️
    - **[d3-shape](https://github.com/d3/d3-shape)** 3.2.0 — **43 months** ago: 2022-12-20 ⚠️
    - **[d3-time-format](https://github.com/d3/d3-time-format)** 4.1.0 — **55 months** ago: 2021-12-04 ⚠️
        - **[d3-time](https://github.com/d3/d3-time)** 3.1.0 — **44 months** ago: 2022-12-02 ⚠️
    - **[d3-transition](https://github.com/d3/d3-transition)** 3.0.1 — **61 months** ago: 2021-06-09 ⚠️
        - **[d3-color](https://github.com/d3/d3-color)** 3.1.0 — **52 months** ago: 2022-03-28 ⚠️
        - **[d3-dispatch](https://github.com/d3/d3-dispatch)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
        - **[d3-ease](https://github.com/d3/d3-ease)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
        - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
        - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **61 months** ago: 2021-06-07 ⚠️
        - **[d3-timer](https://github.com/d3/d3-timer)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
    - **[d3-zoom](https://github.com/d3/d3-zoom)** 3.0.0 — **61 months** ago: 2021-06-10 ⚠️
- **[d3-drag](https://github.com/d3/d3-drag)** 3.0.0 — **61 months** ago: 2021-06-09 ⚠️
    - **[d3-dispatch](https://github.com/d3/d3-dispatch)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
    - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **61 months** ago: 2021-06-07 ⚠️
- **[d3-force](https://github.com/d3/d3-force)** 3.0.0 — **61 months** ago: 2021-06-05 ⚠️
    - **[d3-dispatch](https://github.com/d3/d3-dispatch)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
    - **[d3-quadtree](https://github.com/d3/d3-quadtree)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
    - **[d3-timer](https://github.com/d3/d3-timer)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
- **[d3-hierarchy](https://github.com/d3/d3-hierarchy)** 3.1.2 — **52 months** ago: 2022-04-02 ⚠️
- **[d3-sankey](https://github.com/d3/d3-sankey)** 0.12.3 — **83 months** ago: 2019-09-02 ⚠️
    - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **38 months** ago: 2023-05-30 ⚠️
        - **[internmap](https://github.com/mbostock/internmap)** 2.0.3 — **58 months** ago: 2021-09-20 ⚠️
    - **[d3-shape](https://github.com/d3/d3-shape)** 3.2.0 — **43 months** ago: 2022-12-20 ⚠️
- **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **61 months** ago: 2021-06-07 ⚠️
- **[d3-shape](https://github.com/d3/d3-shape)** 3.2.0 — **43 months** ago: 2022-12-20 ⚠️
    - **[d3-path](https://github.com/d3/d3-path)** 3.1.0 — **43 months** ago: 2022-12-19 ⚠️
- **[d3-zoom](https://github.com/d3/d3-zoom)** 3.0.0 — **61 months** ago: 2021-06-10 ⚠️
    - **[d3-dispatch](https://github.com/d3/d3-dispatch)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
    - **[d3-drag](https://github.com/d3/d3-drag)** 3.0.0 — **61 months** ago: 2021-06-09 ⚠️
    - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **61 months** ago: 2021-06-05 ⚠️
    - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **61 months** ago: 2021-06-07 ⚠️
    - **[d3-transition](https://github.com/d3/d3-transition)** 3.0.1 — **61 months** ago: 2021-06-09 ⚠️

<!-- DEPENDENCY_TREE_END -->

<!-- USAGE_START -->

This connector is automatically uploaded to the DPUse Engine cloud once released and becomes instantly available to all new browser app instances, with existing instances notified of the update.

You may view or clone this repository for your own purposes, such as building a new, similar connector, though there is currently no process to accept third-party connectors into DPUse at this stage. Cloned or forked code is unsupported and isn't guaranteed to remain compatible with the DPUse Engine as it evolves.

```bash
git clone https://github.com/dpuse/dpuse-tool-d3-visualiser.git
cd dpuse-tool-d3-visualiser
npm install
```

_Requires [Node.js](https://nodejs.org/) 23.11 or later, [npm](https://www.npmjs.com/) 11 or later, and [TypeScript](https://www.typescriptlang.org/) 6.0.3 or later._

<!-- USAGE_END -->

<!-- BUNDLE_START -->

The Bundle Analysis Report is generated automatically on each release using [Sonda](https://sonda.dev/), which analyses final source maps to reveal the actual effects of tree-shaking and minification rather than relying on pre-build estimates.

_Note: Sonda's Vite reports currently exclude CSS files, since Vite does not generate source maps for CSS._

| Chunk/Module/File                                          | Composition                  |
| :--------------------------------------------------------- | :--------------------------- |
| dist/billboardJs-jmaH9Gag.js                               | 269.4 kB · brotli 67.0 kB    |
| &nbsp;&nbsp;&nbsp;&nbsp;billboard.js                       | `██████░░░░░░░░░░░░░░` 29.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 2.5%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-shape                           | `░░░░░░░░░░░░░░░░░░░░` 2.2%  |
| &nbsp;&nbsp;&nbsp;&nbsp;src → billboardJs.ts               | `░░░░░░░░░░░░░░░░░░░░` 0.0%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-selection → src/selectAll.js    | `░░░░░░░░░░░░░░░░░░░░` 0.0%  |
| dist/observablePlot-B1CSEvcU.js                            | 224.5 kB · brotli 56.3 kB    |
| &nbsp;&nbsp;&nbsp;&nbsp;@observablehq/plot                 | `███░░░░░░░░░░░░░░░░░` 17.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-geo                             | `█░░░░░░░░░░░░░░░░░░░` 4.1%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `█░░░░░░░░░░░░░░░░░░░` 2.6%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-scale-chromatic                 | `░░░░░░░░░░░░░░░░░░░░` 2.3%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-array                           | `░░░░░░░░░░░░░░░░░░░░` 0.8%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-scale                           | `░░░░░░░░░░░░░░░░░░░░` 0.5%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-color                           | `░░░░░░░░░░░░░░░░░░░░` 0.5%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-shape                           | `░░░░░░░░░░░░░░░░░░░░` 0.3%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-interpolate                     | `░░░░░░░░░░░░░░░░░░░░` 0.2%  |
| &nbsp;&nbsp;&nbsp;&nbsp;isoformat                          | `░░░░░░░░░░░░░░░░░░░░` 0.1%  |
| &nbsp;&nbsp;&nbsp;&nbsp;src → observablePlot.ts            | `░░░░░░░░░░░░░░░░░░░░` 0.1%  |
| dist/tanStackCharts-vvQteV9z.js                            | 69.1 kB · brotli 18.6 kB     |
| &nbsp;&nbsp;&nbsp;&nbsp;@tanstack/charts                   | `██░░░░░░░░░░░░░░░░░░` 7.6%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 0.8%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-shape                           | `░░░░░░░░░░░░░░░░░░░░` 0.3%  |
| &nbsp;&nbsp;&nbsp;&nbsp;src → tanStackCharts.ts            | `░░░░░░░░░░░░░░░░░░░░` 0.1%  |
| dist/erdDiagram-Ds-nrw7Q.js                                | 62.3 kB · brotli 16.2 kB     |
| &nbsp;&nbsp;&nbsp;&nbsp;@dagrejs/dagre → dist/dagre.esm.js | `█░░░░░░░░░░░░░░░░░░░` 7.0%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 0.5%  |
| &nbsp;&nbsp;&nbsp;&nbsp;src → erdDiagram.ts                | `░░░░░░░░░░░░░░░░░░░░` 0.4%  |
| dist/math-Dc0ICuib.js                                      | 23.5 kB · brotli 5.6 kB      |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-time-format                     | `░░░░░░░░░░░░░░░░░░░░` 1.4%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-time                            | `░░░░░░░░░░░░░░░░░░░░` 0.7%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-scale                           | `░░░░░░░░░░░░░░░░░░░░` 0.5%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 0.4%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-brush → src/brush.js            | `░░░░░░░░░░░░░░░░░░░░` 0.0%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-shape → src/math.js             | `░░░░░░░░░░░░░░░░░░░░` 0.0%  |
| dist/src-Du_hPZAX.js                                       | 23.5 kB · brotli 5.9 kB      |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-transition                      | `░░░░░░░░░░░░░░░░░░░░` 1.6%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 0.5%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-interpolate                     | `░░░░░░░░░░░░░░░░░░░░` 0.3%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-dispatch → src/dispatch.js      | `░░░░░░░░░░░░░░░░░░░░` 0.2%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-timer                           | `░░░░░░░░░░░░░░░░░░░░` 0.2%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-drag                            | `░░░░░░░░░░░░░░░░░░░░` 0.1%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-selection                       | `░░░░░░░░░░░░░░░░░░░░` 0.1%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-ease → src/cubic.js             | `░░░░░░░░░░░░░░░░░░░░` 0.0%  |
| dist/linear-D3BD7E1p.js                                    | 18.0 kB · brotli 5.0 kB      |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-format                          | `░░░░░░░░░░░░░░░░░░░░` 0.8%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-scale                           | `░░░░░░░░░░░░░░░░░░░░` 0.5%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 0.4%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-array                           | `░░░░░░░░░░░░░░░░░░░░` 0.3%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-interpolate                     | `░░░░░░░░░░░░░░░░░░░░` 0.2%  |
| &nbsp;&nbsp;&nbsp;&nbsp;internmap → src/index.js           | `░░░░░░░░░░░░░░░░░░░░` 0.1%  |
| dist/select-BIuoFcZG.js                                    | 17.9 kB · brotli 3.9 kB      |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-selection                       | `░░░░░░░░░░░░░░░░░░░░` 1.8%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 0.5%  |
| dist/networkDiagram-HS-SgOZ0.js                            | 17.7 kB · brotli 5.0 kB      |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-force                           | `░░░░░░░░░░░░░░░░░░░░` 0.8%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-quadtree                        | `░░░░░░░░░░░░░░░░░░░░` 0.8%  |
| &nbsp;&nbsp;&nbsp;&nbsp;src → networkDiagram.ts            | `░░░░░░░░░░░░░░░░░░░░` 0.4%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 0.3%  |
| dist/src-Br_t1-IV.js                                       | 12.8 kB · brotli 3.6 kB      |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-zoom                            | `░░░░░░░░░░░░░░░░░░░░` 1.4%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 0.1%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-interpolate → src/zoom.js       | `░░░░░░░░░░░░░░░░░░░░` 0.1%  |
| dist/string-CnCj7THX.js                                    | 11.6 kB · brotli 3.7 kB      |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-color                           | `░░░░░░░░░░░░░░░░░░░░` 1.0%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-interpolate                     | `░░░░░░░░░░░░░░░░░░░░` 0.3%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 0.1%  |
| dist/sankeyDiagram-BXTYCHPV.js                             | 11.0 kB · brotli 3.2 kB      |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-sankey                          | `░░░░░░░░░░░░░░░░░░░░` 0.8%  |
| &nbsp;&nbsp;&nbsp;&nbsp;src                                | `░░░░░░░░░░░░░░░░░░░░` 0.5%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 0.1%  |
| dist/treeDiagram-DemHfVnX.js                               | 8.8 kB · brotli 2.7 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-hierarchy                       | `░░░░░░░░░░░░░░░░░░░░` 0.7%  |
| &nbsp;&nbsp;&nbsp;&nbsp;src → treeDiagram.ts               | `░░░░░░░░░░░░░░░░░░░░` 0.2%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 0.2%  |
| dist/drag-DLokvdmv.js                                      | 4.3 kB · brotli 1.4 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-drag                            | `░░░░░░░░░░░░░░░░░░░░` 0.5%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 0.1%  |
| dist/axis-DjmZ9QYe.js                                      | 3.5 kB · brotli 1.1 kB       |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-axis                            | `░░░░░░░░░░░░░░░░░░░░` 0.4%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 0.0%  |
| dist/path-Bt1sPr2f.js                                      | 2.7 kB · brotli 1010 B       |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-path → src/path.js              | `░░░░░░░░░░░░░░░░░░░░` 0.3%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 0.0%  |
| dist/link-DKK0Q0lG.js                                      | 2.4 kB · brotli 840 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-shape                           | `░░░░░░░░░░░░░░░░░░░░` 0.2%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 0.1%  |
| dist/dpuse-tool-d3-visualiser.es.js                        | 2.1 kB · brotli 521 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;src → index.ts                     | `░░░░░░░░░░░░░░░░░░░░` 0.2%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 0.0%  |
| dist/band-DbExrcif.js                                      | 2.1 kB · brotli 738 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-scale → src/band.js             | `░░░░░░░░░░░░░░░░░░░░` 0.2%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 0.0%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-array → src/range.js            | `░░░░░░░░░░░░░░░░░░░░` 0.0%  |
| dist/d3BarChart-DEzayAyh.js                                | 1.8 kB · brotli 840 B        |
| &nbsp;&nbsp;&nbsp;&nbsp;src → d3BarChart.ts                | `░░░░░░░░░░░░░░░░░░░░` 0.2%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 0.0%  |
| dist/sum-BAZU479z.js                                       | 933 B · brotli 283 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-array                           | `░░░░░░░░░░░░░░░░░░░░` 0.1%  |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 0.0%  |
| dist/array-Cv4-2llb.js                                     | 368 B · brotli 215 B         |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned]        | `░░░░░░░░░░░░░░░░░░░░` 0.0%  |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-shape                           | `░░░░░░░░░░░░░░░░░░░░` 0.0%  |

(unassigned) = bytes Sonda can't trace to a specific source line (whitespace, stray keywords, bundler-injected region markers) — not actual missing/unknown code.

<!-- BUNDLE_END -->

## Design Notes

- All D3 submodules (`d3-sankey`, `d3-selection`, and their transitive `d3-array`/`d3-shape` dependencies) are bundled
  directly into this tool's build, the same way `@dpuse/-visualiser` bundles Highcharts. There is exactly
  one copy of each module per page load regardless of how many times this tool is dynamically imported, since the
  browser's module registry caches `import()` calls by resolved URL.
- Rendering happens on the main thread because it writes directly into a real `HTMLElement` - the DPUse Engine's
  connector/context processing runs inside a dedicated Web Worker, but presentation-rendering tools (this one and
  Highcharts) are loaded the same way `dpuse-presenter-default` is, directly by the host app.
- Node identity is carried by a direct text label on every node, not by colour alone, so the categorical palette is
  free to cycle past its 8 fixed slots for diagrams with more nodes than that.

<!-- OPENING_START -->

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![DPUse version](https://img.shields.io/github/v/release/dpuse/dpuse-tool-d3-visualiser?color=f6821f&label=DPUse)](https://github.com/dpuse/dpuse-tool-d3-visualiser/releases/latest)
[![CI](https://github.com/dpuse/dpuse-tool-d3-visualiser/actions/workflows/ci.yml/badge.svg)](https://github.com/dpuse/dpuse-tool-d3-visualiser/actions/workflows/ci.yml)
[![CodeQL](https://github.com/dpuse/dpuse-tool-d3-visualiser/actions/workflows/codeql.yml/badge.svg)](https://github.com/dpuse/dpuse-tool-d3-visualiser/actions/workflows/codeql.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=dpuse_dpuse-tool-d3-visualiser&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=dpuse_dpuse-tool-d3-visualiser)

[Documentation](https://www.dpuse.app) · [Report a Vulnerability](https://github.com/dpuse/dpuse-tool-d3-visualiser/security/advisories/new) · [Open an Issue](https://github.com/dpuse/dpuse-tool-d3-visualiser/issues)

## About DPUse

DPUse (Data Positioning & Use) is an in-browser application that positions your data for use through three core activities: sourcing, contextualising, and publishing. **Sourcing** uses a library of [Connectors](https://www.dpuse.app) to establish [Connections](https://www.dpuse.app) to applications, databases, file stores, and curated datasets; these connections are subsequently used to configure structured [Data Views](https://www.dpuse.app) from the underlying sources. **Contextualising** extracts chronological events from those [Data Views](https://www.dpuse.app) and maps them into comprehensive [Context Models](https://www.dpuse.app). This provides the DPUse Engine with the structural framework required to generate deterministic transactions, facts, or observations. **Publishing** employs a library of [Presenters](https://www.dpuse.app) to render standard [Presentations](https://www.dpuse.app) immediately using the contextualised data; additionally, [Cookbooks](https://www.dpuse.app) of [Recipes](https://www.dpuse.app) allow you to build Data Apps using your preferred tools.

## Introduction

...

<!-- OPENING_END -->

## Contributing

This repository is maintained solely by its owner and does not, at present, accept external contributions into the canonical repo. Its source is published openly under the MIT License.

## License

This project is licensed under the MIT License, permitting free use, modification, and distribution.

[MIT](./LICENSE) © 2026-present Jonathan Terrell

<!-- GOVERNANCE_START -->

## Security & Quality

### CodeQL

[CodeQL](https://github.com/dpuse/dpuse-tool-d3-visualiser/security/code-scanning) static analysis runs on every push to `main` and on a weekly schedule, scanning TypeScript, JavaScript, Rust, and GitHub Actions workflow files for security vulnerabilities and coding errors.

### SonarCloud

[SonarCloud](https://sonarcloud.io/summary/new_code?id=dpuse_dpuse-tool-d3-visualiser) performs continuous code quality and security analysis on every push, detecting bugs, code smells, and security vulnerabilities in the TypeScript source.

### Vulnerability Scanning

Two complementary tools continuously monitor dependencies for known vulnerabilities:

- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) runs on every push to `main` via the CI workflow, failing the build if any high or critical severity vulnerabilities are detected.
- [GitHub Dependabot](https://docs.github.com/en/code-security/dependabot) automatically raises pull requests to update vulnerable dependencies, drawing on the GitHub Advisory Database which combines NVD and npm-specific advisories.

### Supply Chain Security

[Socket.dev](https://socket.dev) monitors all dependencies for supply chain risk — detecting malicious packages, dependency confusion, typosquatting, and suspicious behaviour that may not yet have a CVE.

### Reporting Vulnerabilities

Please do not open public GitHub issues for security vulnerabilities. Use [GitHub private vulnerability reporting](https://github.com/dpuse/dpuse-tool-d3-visualiser/security/advisories/new) instead. See [SECURITY.md](./SECURITY.md) for the full disclosure policy, contact details, and expected response times.

### OpenSSF 🚧

[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/dpuse/dpuse-tool-d3-visualiser/badge)](https://scorecard.dev/viewer/?uri=github.com/dpuse/dpuse-tool-d3-visualiser)

This project is working towards the [OpenSSF Best Practices](https://www.bestpractices.dev) Passing badge, a self-certification covering security policy, vulnerability reporting, build processes, code quality, and more. Currently the [OpenSSF Scorecard](https://scorecard.dev/viewer/?uri=github.com/dpuse/dpuse-tool-d3-visualiser) provides an independent automated assessment of the project's security practices and is an ongoing area of improvement.

## Contributing

This repository is maintained solely by its owner and does not, at present, accept external contributions into the canonical repo. Its source is published openly under the MIT License — every DPUse project is fully open source except DPUse Engine, which remains closed and proprietary.

For security vulnerabilities, see [Reporting Vulnerabilities](#reporting-vulnerabilities). For bugs, inconsistencies, or other feedback, [open a GitHub issue](https://github.com/dpuse/dpuse-tool-d3-visualiser/issues) — feedback is read, but responses and fixes are at the maintainer's discretion.

## License

This project is licensed under the MIT License, permitting free use, modification, and distribution.

[MIT](./LICENSE) © 2026-present Jonathan Terrell

<!-- GOVERNANCE_END -->
