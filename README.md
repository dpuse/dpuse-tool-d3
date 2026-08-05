# DPUse D3 Tool

Consider adding support for Plotly.js, Unovis, Vega and Vega-Lite.

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

License data is collected automatically on each release using [license-checker](https://github.com/RSeidelsohn/license-checker-rseidelsohn). The following table lists all production dependencies. These dependencies (including transitive ones) have been checked and confirmed to use 0BSD, Apache-2.0, BSD-2-Clause, BSD-3-Clause, EPL-2.0, ISC, MIT, or Unlicense — all permissive, commercially-friendly licenses. Users of the uploaded library are covered by these checks; developers cloning this repository should independently verify development dependencies.

|Dependency|Version|License(s)|Document|
|:-|:-:|:-|:-|
|[@babel/code-frame](https://github.com/babel/babel)|7.29.7|MIT|[LICENSE](licenses/downloads/@babel/code-frame@7.29.7-LICENSE.txt)|
|[@babel/generator](https://github.com/babel/babel)|7.29.8|MIT|[LICENSE](licenses/downloads/@babel/generator@7.29.8-LICENSE.txt)|
|[@babel/helper-globals](https://github.com/babel/babel)|7.29.7|MIT|[LICENSE](licenses/downloads/@babel/helper-globals@7.29.7-LICENSE.txt)|
|[@babel/helper-module-imports](https://github.com/babel/babel)|7.29.7|MIT|[LICENSE](licenses/downloads/@babel/helper-module-imports@7.29.7-LICENSE.txt)|
|[@babel/helper-string-parser](https://github.com/babel/babel)|7.29.7|MIT|[LICENSE](licenses/downloads/@babel/helper-string-parser@7.29.7-LICENSE.txt)|
|[@babel/helper-validator-identifier](https://github.com/babel/babel)|7.29.7|MIT|[LICENSE](licenses/downloads/@babel/helper-validator-identifier@7.29.7-LICENSE.txt)|
|[@babel/parser](https://github.com/babel/babel)|7.29.8|MIT|[LICENSE](licenses/downloads/@babel/parser@7.29.8-LICENSE.txt)|
|[@babel/runtime](https://github.com/babel/babel)|7.29.7|MIT|[LICENSE](licenses/downloads/@babel/runtime@7.29.7-LICENSE.txt)|
|[@babel/template](https://github.com/babel/babel)|7.29.7|MIT|[LICENSE](licenses/downloads/@babel/template@7.29.7-LICENSE.txt)|
|[@babel/traverse](https://github.com/babel/babel)|7.29.8|MIT|[LICENSE](licenses/downloads/@babel/traverse@7.29.8-LICENSE.txt)|
|[@babel/types](https://github.com/babel/babel)|7.29.8|MIT|[LICENSE](licenses/downloads/@babel/types@7.29.8-LICENSE.txt)|
|[@dagrejs/dagre](https://github.com/dagrejs/dagre)|3.1.0|MIT|[LICENSE](licenses/downloads/@dagrejs/dagre@3.1.0-LICENSE.txt)|
|[@dagrejs/graphlib](https://github.com/dagrejs/graphlib)|4.0.3|MIT|[LICENSE](licenses/downloads/@dagrejs/graphlib@4.0.3-LICENSE.txt)|
|[@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)|0.3.760|MIT|[LICENSE](licenses/downloads/@dpuse/dpuse-shared@0.3.760-LICENSE.txt)|
|[@emotion/babel-plugin](https://github.com/emotion-js/emotion.git#main)|11.13.5|MIT|[LICENSE](licenses/downloads/@emotion/babel-plugin@11.13.5-LICENSE.txt)|
|[@emotion/cache](https://github.com/emotion-js/emotion.git#main)|11.14.0|MIT|[LICENSE](licenses/downloads/@emotion/cache@11.14.0-LICENSE.txt)|
|[@emotion/css](https://github.com/emotion-js/emotion.git#main)|11.13.5|MIT|[LICENSE](licenses/downloads/@emotion/css@11.13.5-LICENSE.txt)|
|[@emotion/hash](https://github.com/emotion-js/emotion.git#main)|0.9.2|MIT|[LICENSE](licenses/downloads/@emotion/hash@0.9.2-LICENSE.txt)|
|[@emotion/memoize](https://github.com/emotion-js/emotion.git#main)|0.9.0|MIT|[LICENSE](licenses/downloads/@emotion/memoize@0.9.0-LICENSE.txt)|
|[@emotion/serialize](https://github.com/emotion-js/emotion.git#main)|1.3.3|MIT|[LICENSE](licenses/downloads/@emotion/serialize@1.3.3-LICENSE.txt)|
|[@emotion/sheet](https://github.com/emotion-js/emotion.git#main)|1.4.0|MIT|[LICENSE](licenses/downloads/@emotion/sheet@1.4.0-LICENSE.txt)|
|[@emotion/unitless](https://github.com/emotion-js/emotion.git#main)|0.10.0|MIT|[LICENSE](licenses/downloads/@emotion/unitless@0.10.0-LICENSE.txt)|
|[@emotion/utils](https://github.com/emotion-js/emotion.git#main)|1.4.2|MIT|[LICENSE](licenses/downloads/@emotion/utils@1.4.2-LICENSE.txt)|
|[@emotion/weak-memoize](https://github.com/emotion-js/emotion.git#main)|0.4.0|MIT|[LICENSE](licenses/downloads/@emotion/weak-memoize@0.4.0-LICENSE.txt)|
|[@jridgewell/gen-mapping](https://github.com/jridgewell/sourcemaps)|0.3.13|MIT|[LICENSE](licenses/downloads/@jridgewell/gen-mapping@0.3.13-LICENSE.txt)|
|[@jridgewell/resolve-uri](https://github.com/jridgewell/resolve-uri)|3.1.2|MIT|[LICENSE](licenses/downloads/@jridgewell/resolve-uri@3.1.2-LICENSE.txt)|
|[@jridgewell/sourcemap-codec](https://github.com/jridgewell/sourcemaps)|1.5.5|MIT|[LICENSE](licenses/downloads/@jridgewell/sourcemap-codec@1.5.5-LICENSE.txt)|
|[@jridgewell/trace-mapping](https://github.com/jridgewell/sourcemaps)|0.3.31|MIT|[LICENSE](licenses/downloads/@jridgewell/trace-mapping@0.3.31-LICENSE.txt)|
|[@juggle/resize-observer](https://github.com/juggle/resize-observer)|3.4.0|Apache-2.0|[LICENSE](licenses/downloads/@juggle/resize-observer@3.4.0-LICENSE.txt)|
|[@mapbox/geojson-rewind](https://github.com/mapbox/geojson-rewind)|0.5.2|ISC|[LICENSE](licenses/downloads/@mapbox/geojson-rewind@0.5.2-LICENSE.txt)|
|[@mapbox/jsonlint-lines-primitives](https://github.com/mapbox/jsonlint)|2.0.3|MIT|[LICENSE](licenses/downloads/@mapbox/jsonlint-lines-primitives@2.0.3-LICENSE.txt)|
|[@mapbox/mapbox-gl-supported](https://github.com/mapbox/mapbox-gl-supported)|2.0.1|BSD-3-Clause|[LICENSE](licenses/downloads/@mapbox/mapbox-gl-supported@2.0.1-LICENSE.txt)|
|[@mapbox/point-geometry](https://github.com/mapbox/point-geometry)|0.1.0|ISC|[LICENSE](licenses/downloads/@mapbox/point-geometry@0.1.0-LICENSE.txt)|
|[@mapbox/tiny-sdf](https://github.com/mapbox/tiny-sdf)|2.2.0|BSD-2-Clause|[LICENSE](licenses/downloads/@mapbox/tiny-sdf@2.2.0-LICENSE.txt)|
|[@mapbox/unitbezier](https://github.com/mapbox/unitbezier)|0.0.1|BSD-2-Clause|[LICENSE](licenses/downloads/@mapbox/unitbezier@0.0.1-LICENSE.txt)|
|[@mapbox/vector-tile](https://github.com/mapbox/vector-tile-js)|1.3.1|BSD-3-Clause|[LICENSE](licenses/downloads/@mapbox/vector-tile@1.3.1-LICENSE.txt)|
|[@mapbox/whoots-js](https://github.com/mapbox/whoots-js)|3.1.0|ISC|[LICENSE](licenses/downloads/@mapbox/whoots-js@3.1.0-LICENSE.txt)|
|[@observablehq/plot](https://github.com/observablehq/plot)|0.6.17|ISC|[LICENSE](licenses/downloads/@observablehq/plot@0.6.17-LICENSE.txt)|
|[@tanstack/charts](https://github.com/TanStack/charts)|0.6.5|MIT|[LICENSE](licenses/downloads/@tanstack/charts@0.6.5-LICENSE.txt)|
|[@types/d3-array](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.2.2|MIT|[LICENSE](licenses/downloads/@types/d3-array@3.2.2-LICENSE.txt)|
|[@types/d3-axis](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.6|MIT|[LICENSE](licenses/downloads/@types/d3-axis@3.0.6-LICENSE.txt)|
|[@types/d3-brush](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.6|MIT|[LICENSE](licenses/downloads/@types/d3-brush@3.0.6-LICENSE.txt)|
|[@types/d3-chord](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.6|MIT|[LICENSE](licenses/downloads/@types/d3-chord@3.0.6-LICENSE.txt)|
|[@types/d3-collection](https://github.com/DefinitelyTyped/DefinitelyTyped)|1.0.13|MIT|[LICENSE](licenses/downloads/@types/d3-collection@1.0.13-LICENSE.txt)|
|[@types/d3-color](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.1.3|MIT|[LICENSE](licenses/downloads/@types/d3-color@3.1.3-LICENSE.txt)|
|[@types/d3-contour](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.6|MIT|[LICENSE](licenses/downloads/@types/d3-contour@3.0.6-LICENSE.txt)|
|[@types/d3-delaunay](https://github.com/DefinitelyTyped/DefinitelyTyped)|6.0.4|MIT|[LICENSE](licenses/downloads/@types/d3-delaunay@6.0.4-LICENSE.txt)|
|[@types/d3-dispatch](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.7|MIT|[LICENSE](licenses/downloads/@types/d3-dispatch@3.0.7-LICENSE.txt)|
|[@types/d3-drag](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.7|MIT|[LICENSE](licenses/downloads/@types/d3-drag@3.0.7-LICENSE.txt)|
|[@types/d3-dsv](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.7|MIT|[LICENSE](licenses/downloads/@types/d3-dsv@3.0.7-LICENSE.txt)|
|[@types/d3-ease](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.2|MIT|[LICENSE](licenses/downloads/@types/d3-ease@3.0.2-LICENSE.txt)|
|[@types/d3-fetch](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.7|MIT|[LICENSE](licenses/downloads/@types/d3-fetch@3.0.7-LICENSE.txt)|
|[@types/d3-force](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.10|MIT|[LICENSE](licenses/downloads/@types/d3-force@3.0.10-LICENSE.txt)|
|[@types/d3-format](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.4|MIT|[LICENSE](licenses/downloads/@types/d3-format@3.0.4-LICENSE.txt)|
|[@types/d3-geo](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.1.1|MIT|[LICENSE](licenses/downloads/@types/d3-geo@3.1.1-LICENSE.txt)|
|[@types/d3-hierarchy](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.1.7|MIT|[LICENSE](licenses/downloads/@types/d3-hierarchy@3.1.7-LICENSE.txt)|
|[@types/d3-interpolate](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.4|MIT|[LICENSE](licenses/downloads/@types/d3-interpolate@3.0.4-LICENSE.txt)|
|[@types/d3-path](https://github.com/DefinitelyTyped/DefinitelyTyped)|1.0.11|MIT|[LICENSE](licenses/downloads/@types/d3-path@1.0.11-LICENSE.txt)|
|[@types/d3-path](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.1.1|MIT|[LICENSE](licenses/downloads/@types/d3-path@3.1.1-LICENSE.txt)|
|[@types/d3-polygon](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.2|MIT|[LICENSE](licenses/downloads/@types/d3-polygon@3.0.2-LICENSE.txt)|
|[@types/d3-quadtree](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.6|MIT|[LICENSE](licenses/downloads/@types/d3-quadtree@3.0.6-LICENSE.txt)|
|[@types/d3-random](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.4|MIT|[LICENSE](licenses/downloads/@types/d3-random@3.0.4-LICENSE.txt)|
|[@types/d3-sankey](https://github.com/DefinitelyTyped/DefinitelyTyped)|0.12.5|MIT|[LICENSE](licenses/downloads/@types/d3-sankey@0.12.5-LICENSE.txt)|
|[@types/d3-scale-chromatic](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.1.0|MIT|[LICENSE](licenses/downloads/@types/d3-scale-chromatic@3.1.0-LICENSE.txt)|
|[@types/d3-scale](https://github.com/DefinitelyTyped/DefinitelyTyped)|4.0.9|MIT|[LICENSE](licenses/downloads/@types/d3-scale@4.0.9-LICENSE.txt)|
|[@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.11|MIT|[LICENSE](licenses/downloads/@types/d3-selection@3.0.11-LICENSE.txt)|
|[@types/d3-shape](https://github.com/DefinitelyTyped/DefinitelyTyped)|1.3.12|MIT|[LICENSE](licenses/downloads/@types/d3-shape@1.3.12-LICENSE.txt)|
|[@types/d3-shape](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.1.8|MIT|[LICENSE](licenses/downloads/@types/d3-shape@3.1.8-LICENSE.txt)|
|[@types/d3-time-format](https://github.com/DefinitelyTyped/DefinitelyTyped)|4.0.3|MIT|[LICENSE](licenses/downloads/@types/d3-time-format@4.0.3-LICENSE.txt)|
|[@types/d3-time](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.4|MIT|[LICENSE](licenses/downloads/@types/d3-time@3.0.4-LICENSE.txt)|
|[@types/d3-timer](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.2|MIT|[LICENSE](licenses/downloads/@types/d3-timer@3.0.2-LICENSE.txt)|
|[@types/d3-transition](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.9|MIT|[LICENSE](licenses/downloads/@types/d3-transition@3.0.9-LICENSE.txt)|
|[@types/d3-zoom](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.8|MIT|[LICENSE](licenses/downloads/@types/d3-zoom@3.0.8-LICENSE.txt)|
|[@types/d3](https://github.com/DefinitelyTyped/DefinitelyTyped)|7.4.3|MIT|[LICENSE](licenses/downloads/@types/d3@7.4.3-LICENSE.txt)|
|[@types/dagre](https://github.com/DefinitelyTyped/DefinitelyTyped)|0.7.54|MIT|[LICENSE](licenses/downloads/@types/dagre@0.7.54-LICENSE.txt)|
|[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)|7946.0.16|MIT|[LICENSE](licenses/downloads/@types/geojson@7946.0.16-LICENSE.txt)|
|[@types/leaflet](https://github.com/DefinitelyTyped/DefinitelyTyped)|1.7.6|MIT|[LICENSE](licenses/downloads/@types/leaflet@1.7.6-LICENSE.txt)|
|[@types/mapbox__point-geometry](https://github.com/DefinitelyTyped/DefinitelyTyped)|0.1.4|MIT|[LICENSE](licenses/downloads/@types/mapbox__point-geometry@0.1.4-LICENSE.txt)|
|[@types/mapbox__vector-tile](https://github.com/DefinitelyTyped/DefinitelyTyped)|1.3.4|MIT|[LICENSE](licenses/downloads/@types/mapbox__vector-tile@1.3.4-LICENSE.txt)|
|[@types/parse-json](https://github.com/DefinitelyTyped/DefinitelyTyped)|4.0.2|MIT|[LICENSE](licenses/downloads/@types/parse-json@4.0.2-LICENSE.txt)|
|[@types/pbf](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.5|MIT|[LICENSE](licenses/downloads/@types/pbf@3.0.5-LICENSE.txt)|
|[@types/supercluster](https://github.com/DefinitelyTyped/DefinitelyTyped)|5.0.3|MIT|[LICENSE](licenses/downloads/@types/supercluster@5.0.3-LICENSE.txt)|
|[@types/three](https://github.com/DefinitelyTyped/DefinitelyTyped)|0.135.0|MIT|[LICENSE](licenses/downloads/@types/three@0.135.0-LICENSE.txt)|
|[@types/throttle-debounce](https://github.com/DefinitelyTyped/DefinitelyTyped)|5.0.2|MIT|[LICENSE](licenses/downloads/@types/throttle-debounce@5.0.2-LICENSE.txt)|
|[@types/topojson-client](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.1.5|MIT|[LICENSE](licenses/downloads/@types/topojson-client@3.1.5-LICENSE.txt)|
|[@types/topojson-server](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.4|MIT|[LICENSE](licenses/downloads/@types/topojson-server@3.0.4-LICENSE.txt)|
|[@types/topojson-simplify](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.3|MIT|[LICENSE](licenses/downloads/@types/topojson-simplify@3.0.3-LICENSE.txt)|
|[@types/topojson-specification](https://github.com/DefinitelyTyped/DefinitelyTyped)|1.0.5|MIT|[LICENSE](licenses/downloads/@types/topojson-specification@1.0.5-LICENSE.txt)|
|[@types/topojson](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.2.6|MIT|[LICENSE](licenses/downloads/@types/topojson@3.2.6-LICENSE.txt)|
|[@unovis/dagre-layout](https://github.com/unovis/dagre-layout)|0.8.8-2|MIT|[LICENSE](licenses/downloads/@unovis/dagre-layout@0.8.8-2-LICENSE.txt)|
|[@unovis/graphlibrary](https://github.com/unovis/graphlibrary)|2.2.0-2|MIT|[LICENSE](licenses/downloads/@unovis/graphlibrary@2.2.0-2-LICENSE.txt)|
|[@unovis/ts](https://github.com/f5/unovis)|1.6.7|Apache-2.0|[LICENSE](licenses/downloads/@unovis/ts@1.6.7-LICENSE.txt)|
|[babel-plugin-macros](https://github.com/kentcdodds/babel-plugin-macros)|3.1.0|MIT|[LICENSE](licenses/downloads/babel-plugin-macros@3.1.0-LICENSE.txt)|
|[billboard.js](https://github.com/naver/billboard.js)|4.0.3|MIT|[LICENSE](licenses/downloads/billboard.js@4.0.3-LICENSE.txt)|
|[binary-search-bounds](https://github.com/mikolalysenko/binary-search-bounds)|2.0.5|MIT|[LICENSE](licenses/downloads/binary-search-bounds@2.0.5-LICENSE.txt)|
|[callsites](https://github.com/sindresorhus/callsites)|3.1.0|MIT|[LICENSE](licenses/downloads/callsites@3.1.0-LICENSE.txt)|
|[commander](https://github.com/tj/commander.js)|2.20.3|MIT|[LICENSE](licenses/downloads/commander@2.20.3-LICENSE.txt)|
|[commander](https://github.com/tj/commander.js)|7.2.0|MIT|[LICENSE](licenses/downloads/commander@7.2.0-LICENSE.txt)|
|[convert-source-map](https://github.com/thlorenz/convert-source-map)|1.9.0|MIT|[LICENSE](licenses/downloads/convert-source-map@1.9.0-LICENSE.txt)|
|[cosmiconfig](https://github.com/davidtheclark/cosmiconfig)|7.1.0|MIT|[LICENSE](licenses/downloads/cosmiconfig@7.1.0-LICENSE.txt)|
|[csscolorparser](https://github.com/deanm/css-color-parser-js)|1.0.3|MIT|[LICENSE](licenses/downloads/csscolorparser@1.0.3-LICENSE.txt)|
|[csstype](https://github.com/frenic/csstype)|3.2.3|MIT|[LICENSE](licenses/downloads/csstype@3.2.3-LICENSE.txt)|
|[d3-array](https://github.com/d3/d3-array)|3.2.4|ISC|[LICENSE](licenses/downloads/d3-array@3.2.4-LICENSE.txt)|
|[d3-axis](https://github.com/d3/d3-axis)|3.0.0|ISC|[LICENSE](licenses/downloads/d3-axis@3.0.0-LICENSE.txt)|
|[d3-brush](https://github.com/d3/d3-brush)|3.0.0|ISC|[LICENSE](licenses/downloads/d3-brush@3.0.0-LICENSE.txt)|
|[d3-chord](https://github.com/d3/d3-chord)|3.0.1|ISC|[LICENSE](licenses/downloads/d3-chord@3.0.1-LICENSE.txt)|
|[d3-collection](https://github.com/d3/d3-collection)|1.0.7|BSD-3-Clause|[LICENSE](licenses/downloads/d3-collection@1.0.7-LICENSE.txt)|
|[d3-color](https://github.com/d3/d3-color)|3.1.0|ISC|[LICENSE](licenses/downloads/d3-color@3.1.0-LICENSE.txt)|
|[d3-contour](https://github.com/d3/d3-contour)|4.0.2|ISC|[LICENSE](licenses/downloads/d3-contour@4.0.2-LICENSE.txt)|
|[d3-delaunay](https://github.com/d3/d3-delaunay)|6.0.4|ISC|[LICENSE](licenses/downloads/d3-delaunay@6.0.4-LICENSE.txt)|
|[d3-dispatch](https://github.com/d3/d3-dispatch)|3.0.1|ISC|[LICENSE](licenses/downloads/d3-dispatch@3.0.1-LICENSE.txt)|
|[d3-drag](https://github.com/d3/d3-drag)|3.0.0|ISC|[LICENSE](licenses/downloads/d3-drag@3.0.0-LICENSE.txt)|
|[d3-dsv](https://github.com/d3/d3-dsv)|3.0.1|ISC|[LICENSE](licenses/downloads/d3-dsv@3.0.1-LICENSE.txt)|
|[d3-ease](https://github.com/d3/d3-ease)|3.0.1|BSD-3-Clause|[LICENSE](licenses/downloads/d3-ease@3.0.1-LICENSE.txt)|
|[d3-fetch](https://github.com/d3/d3-fetch)|3.0.1|ISC|[LICENSE](licenses/downloads/d3-fetch@3.0.1-LICENSE.txt)|
|[d3-force](https://github.com/d3/d3-force)|3.0.0|ISC|[LICENSE](licenses/downloads/d3-force@3.0.0-LICENSE.txt)|
|[d3-format](https://github.com/d3/d3-format)|3.1.2|ISC|[LICENSE](licenses/downloads/d3-format@3.1.2-LICENSE.txt)|
|[d3-geo-projection](https://github.com/d3/d3-geo-projection)|4.0.0|ISC|[LICENSE](licenses/downloads/d3-geo-projection@4.0.0-LICENSE.txt)|
|[d3-geo](https://github.com/d3/d3-geo)|3.1.1|ISC|[LICENSE](licenses/downloads/d3-geo@3.1.1-LICENSE.txt)|
|[d3-hierarchy](https://github.com/d3/d3-hierarchy)|3.1.2|ISC|[LICENSE](licenses/downloads/d3-hierarchy@3.1.2-LICENSE.txt)|
|[d3-interpolate-path](https://github.com/pbeshai/d3-interpolate-path)|2.3.0|BSD-3-Clause|[LICENSE](licenses/downloads/d3-interpolate-path@2.3.0-LICENSE.txt)|
|[d3-interpolate](https://github.com/d3/d3-interpolate)|3.0.1|ISC|[LICENSE](licenses/downloads/d3-interpolate@3.0.1-LICENSE.txt)|
|[d3-path](https://github.com/d3/d3-path)|3.1.0|ISC|[LICENSE](licenses/downloads/d3-path@3.1.0-LICENSE.txt)|
|[d3-polygon](https://github.com/d3/d3-polygon)|3.0.1|ISC|[LICENSE](licenses/downloads/d3-polygon@3.0.1-LICENSE.txt)|
|[d3-quadtree](https://github.com/d3/d3-quadtree)|3.0.1|ISC|[LICENSE](licenses/downloads/d3-quadtree@3.0.1-LICENSE.txt)|
|[d3-random](https://github.com/d3/d3-random)|3.0.1|ISC|[LICENSE](licenses/downloads/d3-random@3.0.1-LICENSE.txt)|
|[d3-sankey](https://github.com/d3/d3-sankey)|0.12.3|BSD-3-Clause|[LICENSE](licenses/downloads/d3-sankey@0.12.3-LICENSE.txt)|
|[d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic)|3.1.0|ISC|[LICENSE](licenses/downloads/d3-scale-chromatic@3.1.0-LICENSE.txt)|
|[d3-scale](https://github.com/d3/d3-scale)|4.0.2|ISC|[LICENSE](licenses/downloads/d3-scale@4.0.2-LICENSE.txt)|
|[d3-selection](https://github.com/d3/d3-selection)|3.0.0|ISC|[LICENSE](licenses/downloads/d3-selection@3.0.0-LICENSE.txt)|
|[d3-shape](https://github.com/d3/d3-shape)|3.2.0|ISC|[LICENSE](licenses/downloads/d3-shape@3.2.0-LICENSE.txt)|
|[d3-time-format](https://github.com/d3/d3-time-format)|4.1.0|ISC|[LICENSE](licenses/downloads/d3-time-format@4.1.0-LICENSE.txt)|
|[d3-time](https://github.com/d3/d3-time)|3.1.0|ISC|[LICENSE](licenses/downloads/d3-time@3.1.0-LICENSE.txt)|
|[d3-timer](https://github.com/d3/d3-timer)|3.0.1|ISC|[LICENSE](licenses/downloads/d3-timer@3.0.1-LICENSE.txt)|
|[d3-transition](https://github.com/d3/d3-transition)|3.0.1|ISC|[LICENSE](licenses/downloads/d3-transition@3.0.1-LICENSE.txt)|
|[d3-zoom](https://github.com/d3/d3-zoom)|3.0.0|ISC|[LICENSE](licenses/downloads/d3-zoom@3.0.0-LICENSE.txt)|
|[d3](https://github.com/d3/d3)|7.9.0|ISC|[LICENSE](licenses/downloads/d3@7.9.0-LICENSE.txt)|
|[debug](https://github.com/debug-js/debug)|4.4.3|MIT|[LICENSE](licenses/downloads/debug@4.4.3-LICENSE.txt)|
|[delaunator](https://github.com/mapbox/delaunator)|5.1.0|ISC|[LICENSE](licenses/downloads/delaunator@5.1.0-LICENSE.txt)|
|[earcut](https://github.com/mapbox/earcut)|2.2.4|ISC|[LICENSE](licenses/downloads/earcut@2.2.4-LICENSE.txt)|
|[elkjs](https://github.com/kieler/elkjs)|0.10.2|EPL-2.0|[LICENSE](licenses/downloads/elkjs@0.10.2-LICENSE.txt)|
|[error-ex](https://github.com/qix-/node-error-ex)|1.3.4|MIT|[LICENSE](licenses/downloads/error-ex@1.3.4-LICENSE.txt)|
|[es-errors](https://github.com/ljharb/es-errors)|1.3.0|MIT|[LICENSE](licenses/downloads/es-errors@1.3.0-LICENSE.txt)|
|[escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp)|4.0.0|MIT|[LICENSE](licenses/downloads/escape-string-regexp@4.0.0-LICENSE.txt)|
|[find-root](https://github.com/js-n/find-root)|1.1.0|MIT|[LICENSE](licenses/downloads/find-root@1.1.0-LICENSE.txt)|
|[function-bind](https://github.com/Raynos/function-bind)|1.1.2|MIT|[LICENSE](licenses/downloads/function-bind@1.1.2-LICENSE.txt)|
|[geojson-vt](https://github.com/mapbox/geojson-vt)|3.2.1|ISC|[LICENSE](licenses/downloads/geojson-vt@3.2.1-LICENSE.txt)|
|[geojson](https://github.com/caseycesari/geojson.js)|0.5.0|MIT|[LICENSE](licenses/downloads/geojson@0.5.0-LICENSE.txt)|
|[get-stream](https://github.com/sindresorhus/get-stream)|6.0.1|MIT|[LICENSE](licenses/downloads/get-stream@6.0.1-LICENSE.txt)|
|[gl-matrix](https://github.com/toji/gl-matrix)|3.4.4|MIT|[LICENSE](licenses/downloads/gl-matrix@3.4.4-LICENSE.txt)|
|[global-prefix](https://github.com/jonschlinkert/global-prefix)|3.0.0|MIT|[LICENSE](licenses/downloads/global-prefix@3.0.0-LICENSE.txt)|
|[hasown](https://github.com/inspect-js/hasOwn)|2.0.4|MIT|[LICENSE](licenses/downloads/hasown@2.0.4-LICENSE.txt)|
|[iconv-lite](https://github.com/ashtuchkin/iconv-lite)|0.6.3|MIT|[LICENSE](licenses/downloads/iconv-lite@0.6.3-LICENSE.txt)|
|[ieee754](https://github.com/feross/ieee754)|1.2.1|BSD-3-Clause|[LICENSE](licenses/downloads/ieee754@1.2.1-LICENSE.txt)|
|[import-fresh](https://github.com/sindresorhus/import-fresh)|3.3.1|MIT|[LICENSE](licenses/downloads/import-fresh@3.3.1-LICENSE.txt)|
|[ini](https://github.com/isaacs/ini)|1.3.8|ISC|[LICENSE](licenses/downloads/ini@1.3.8-LICENSE.txt)|
|[internmap](https://github.com/mbostock/internmap)|2.0.3|ISC|[LICENSE](licenses/downloads/internmap@2.0.3-LICENSE.txt)|
|[interval-tree-1d](https://github.com/mikolalysenko/interval-tree-1d)|1.0.4|MIT|[LICENSE](licenses/downloads/interval-tree-1d@1.0.4-LICENSE.txt)|
|[is-arrayish](https://github.com/qix-/node-is-arrayish)|0.2.1|MIT|[LICENSE](licenses/downloads/is-arrayish@0.2.1-LICENSE.txt)|
|[is-core-module](https://github.com/inspect-js/is-core-module)|2.16.2|MIT|[LICENSE](licenses/downloads/is-core-module@2.16.2-LICENSE.txt)|
|[isexe](https://github.com/isaacs/isexe)|2.0.0|ISC|[LICENSE](licenses/downloads/isexe@2.0.0-LICENSE.txt)|
|[isoformat](https://github.com/mbostock/isoformat)|0.2.1|ISC|[LICENSE](licenses/downloads/isoformat@0.2.1-LICENSE.txt)|
|[js-tokens](https://github.com/lydell/js-tokens)|4.0.0|MIT|[LICENSE](licenses/downloads/js-tokens@4.0.0-LICENSE.txt)|
|[jsesc](https://github.com/mathiasbynens/jsesc)|3.1.0|MIT|[LICENSE](licenses/downloads/jsesc@3.1.0-LICENSE.txt)|
|[json-parse-even-better-errors](https://github.com/npm/json-parse-even-better-errors)|2.3.1|MIT|[LICENSE](licenses/downloads/json-parse-even-better-errors@2.3.1-LICENSE.txt)|
|[kdbush](https://github.com/mourner/kdbush)|3.0.0|ISC|[LICENSE](licenses/downloads/kdbush@3.0.0-LICENSE.txt)|
|[kind-of](https://github.com/jonschlinkert/kind-of)|6.0.3|MIT|[LICENSE](licenses/downloads/kind-of@6.0.3-LICENSE.txt)|
|[leaflet](https://github.com/Leaflet/Leaflet)|1.7.1|BSD-2-Clause|[LICENSE](licenses/downloads/leaflet@1.7.1-LICENSE.txt)|
|[lines-and-columns](https://github.com/eventualbuddha/lines-and-columns)|1.2.4|MIT|[LICENSE](licenses/downloads/lines-and-columns@1.2.4-LICENSE.txt)|
|[lodash-es](https://github.com/lodash/lodash)|4.18.1|MIT|[LICENSE](licenses/downloads/lodash-es@4.18.1-LICENSE.txt)|
|[maplibre-gl](https://github.com/maplibre/maplibre-gl-js)|2.4.0|BSD-3-Clause|[LICENSE](licenses/downloads/maplibre-gl@2.4.0-LICENSE.txt)|
|[minimist](https://github.com/minimistjs/minimist)|1.2.8|MIT|[LICENSE](licenses/downloads/minimist@1.2.8-LICENSE.txt)|
|[ms](https://github.com/vercel/ms)|2.1.3|MIT|[LICENSE](licenses/downloads/ms@2.1.3-LICENSE.txt)|
|[murmurhash-js](https://github.com/mikolalysenko/murmurhash-js)|1.0.0|MIT|[LICENSE](licenses/downloads/murmurhash-js@1.0.0-LICENSE.txt)|
|[parent-module](https://github.com/sindresorhus/parent-module)|1.0.1|MIT|[LICENSE](licenses/downloads/parent-module@1.0.1-LICENSE.txt)|
|[parse-json](https://github.com/sindresorhus/parse-json)|5.2.0|MIT|[LICENSE](licenses/downloads/parse-json@5.2.0-LICENSE.txt)|
|[path-parse](https://github.com/jbgutierrez/path-parse)|1.0.7|MIT|[LICENSE](licenses/downloads/path-parse@1.0.7-LICENSE.txt)|
|[path-type](https://github.com/sindresorhus/path-type)|4.0.0|MIT|[LICENSE](licenses/downloads/path-type@4.0.0-LICENSE.txt)|
|[pbf](https://github.com/mapbox/pbf)|3.3.0|BSD-3-Clause|[LICENSE](licenses/downloads/pbf@3.3.0-LICENSE.txt)|
|[picocolors](https://github.com/alexeyraspopov/picocolors)|1.1.1|ISC|[LICENSE](licenses/downloads/picocolors@1.1.1-LICENSE.txt)|
|[potpack](https://github.com/mapbox/potpack)|1.0.2|ISC|[LICENSE](licenses/downloads/potpack@1.0.2-LICENSE.txt)|
|[protocol-buffers-schema](https://github.com/mafintosh/protocol-buffers-schema)|3.6.1|MIT|[LICENSE](licenses/downloads/protocol-buffers-schema@3.6.1-LICENSE.txt)|
|[quickselect](https://www.npmjs.com/package/quickselect)|2.0.0|ISC|[LICENSE](licenses/downloads/quickselect@2.0.0-LICENSE.txt)|
|[resolve-from](https://github.com/sindresorhus/resolve-from)|4.0.0|MIT|[LICENSE](licenses/downloads/resolve-from@4.0.0-LICENSE.txt)|
|[resolve-protobuf-schema](https://github.com/mafintosh/resolve-protobuf-schema)|2.1.0|MIT|[LICENSE](licenses/downloads/resolve-protobuf-schema@2.1.0-LICENSE.txt)|
|[resolve](https://github.com/browserify/resolve)|1.22.12|MIT|[LICENSE](licenses/downloads/resolve@1.22.12-LICENSE.txt)|
|[robust-predicates](https://github.com/mourner/robust-predicates)|3.0.3|Unlicense|[LICENSE](licenses/downloads/robust-predicates@3.0.3-LICENSE.txt)|
|[rw](https://github.com/mbostock/rw)|1.3.3|BSD-3-Clause|[LICENSE](licenses/downloads/rw@1.3.3-LICENSE.txt)|
|[safer-buffer](https://github.com/ChALkeR/safer-buffer)|2.1.2|MIT|[LICENSE](licenses/downloads/safer-buffer@2.1.2-LICENSE.txt)|
|[source-map](https://github.com/mozilla/source-map)|0.5.7|BSD-3-Clause|[LICENSE](licenses/downloads/source-map@0.5.7-LICENSE.txt)|
|[striptags](https://github.com/ericnorris/striptags)|3.2.0|MIT|[LICENSE](licenses/downloads/striptags@3.2.0-LICENSE.txt)|
|[stylis](https://github.com/thysultan/stylis.js)|4.2.0|MIT|[LICENSE](licenses/downloads/stylis@4.2.0-LICENSE.txt)|
|[supercluster](https://github.com/mapbox/supercluster)|7.1.5|ISC|[LICENSE](licenses/downloads/supercluster@7.1.5-LICENSE.txt)|
|[supports-preserve-symlinks-flag](https://github.com/inspect-js/node-supports-preserve-symlinks-flag)|1.0.0|MIT|[LICENSE](licenses/downloads/supports-preserve-symlinks-flag@1.0.0-LICENSE.txt)|
|[three](https://github.com/mrdoob/three.js)|0.135.0|MIT|[LICENSE](licenses/downloads/three@0.135.0-LICENSE.txt)|
|[throttle-debounce](https://github.com/niksy/throttle-debounce)|5.0.2|MIT|[LICENSE](licenses/downloads/throttle-debounce@5.0.2-LICENSE.txt)|
|[tinyqueue](https://github.com/mourner/tinyqueue)|2.0.3|ISC|[LICENSE](licenses/downloads/tinyqueue@2.0.3-LICENSE.txt)|
|[topojson-client](https://github.com/topojson/topojson-client)|3.1.0|ISC|[LICENSE](licenses/downloads/topojson-client@3.1.0-LICENSE.txt)|
|[tslib](https://github.com/Microsoft/tslib)|2.8.1|0BSD|[LICENSE](licenses/downloads/tslib@2.8.1-LICENSE.txt)|
|[vt-pbf](https://github.com/mapbox/vt-pbf)|3.1.3|MIT|[LICENSE](licenses/downloads/vt-pbf@3.1.3-LICENSE.txt)|
|[which](https://github.com/isaacs/node-which)|1.3.1|ISC|[LICENSE](licenses/downloads/which@1.3.1-LICENSE.txt)|
|[yaml](https://github.com/eemeli/yaml)|1.10.3|ISC|[LICENSE](licenses/downloads/yaml@1.10.3-LICENSE.txt)|

<!-- DEPENDENCY_LICENSES_END -->

<!-- DEPENDENCY_TREE_START -->

The dependency tree below lists every package in this project — direct and transitive — along with its installed version, release date, and update status. Packages flagged ❗ have a newer version available; ⚠️ indicates a package that hasn't been updated in the last 6 months or longer. Neither flag necessarily indicates a problem: we let new releases stabilise before upgrading, and some packages are simply mature and stable, requiring no active development.

- **[@dagrejs/dagre](https://github.com/dagrejs/dagre)** 3.1.0 — this month: 2026-08-02
  - **[@dagrejs/graphlib](https://github.com/dagrejs/graphlib)** 4.0.3 — this month: 2026-08-02 → **latest**: 4.0.5 — this month: 2026-08-03 ❗
- **[@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)** 0.3.760 — this month: 2026-08-02
- **[@observablehq/plot](https://github.com/observablehq/plot)** 0.6.17 — **17 months** ago: 2025-02-14 ⚠️
  - **[d3](https://github.com/d3/d3)** 7.9.0 — **28 months** ago: 2024-03-12 ⚠️
    - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **38 months** ago: 2023-05-30 ⚠️
    - **[d3-axis](https://github.com/d3/d3-axis)** 3.0.0 — **61 months** ago: 2021-06-09 ⚠️
    - **[d3-brush](https://github.com/d3/d3-brush)** 3.0.0 — **61 months** ago: 2021-06-10 ⚠️
    - **[d3-chord](https://github.com/d3/d3-chord)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
    - **[d3-color](https://github.com/d3/d3-color)** 3.1.0 — **52 months** ago: 2022-03-28 ⚠️
    - **[d3-contour](https://github.com/d3/d3-contour)** 4.0.2 — **42 months** ago: 2023-01-11 ⚠️
      - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **38 months** ago: 2023-05-30 ⚠️
    - **[d3-delaunay](https://github.com/d3/d3-delaunay)** 6.0.4 — **40 months** ago: 2023-04-01 ⚠️
      - **[delaunator](https://github.com/mapbox/delaunator)** 5.1.0 — **4 months** ago: 2026-03-23
        - **[robust-predicates](https://github.com/mourner/robust-predicates)** 3.0.3 — **4 months** ago: 2026-03-22
    - **[d3-dispatch](https://github.com/d3/d3-dispatch)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
    - **[d3-drag](https://github.com/d3/d3-drag)** 3.0.0 — **61 months** ago: 2021-06-09 ⚠️
    - **[d3-dsv](https://github.com/d3/d3-dsv)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
      - **[commander](https://github.com/tj/commander.js)** 7.2.0 — **64 months** ago: 2021-03-21 ⚠️ → **latest**: 15.0.0 — **2 months** ago: 2026-05-29 ❗
      - **[iconv-lite](https://github.com/ashtuchkin/iconv-lite)** 0.6.3 — **62 months** ago: 2021-05-24 ⚠️ → **latest**: 0.7.3 — **1 month** ago: 2026-07-03 ❗
        - **[safer-buffer](https://github.com/ChALkeR/safer-buffer)** 2.1.2 — **99 months** ago: 2018-04-08 ⚠️
      - **[rw](https://github.com/mbostock/rw)** 1.3.3 — **114 months** ago: 2017-01-20 ⚠️
    - **[d3-ease](https://github.com/d3/d3-ease)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
    - **[d3-fetch](https://github.com/d3/d3-fetch)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
      - **[d3-dsv](https://github.com/d3/d3-dsv)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
    - **[d3-force](https://github.com/d3/d3-force)** 3.0.0 — **62 months** ago: 2021-06-05 ⚠️
    - **[d3-format](https://github.com/d3/d3-format)** 3.1.2 — **6 months** ago: 2026-01-14
    - **[d3-geo](https://github.com/d3/d3-geo)** 3.1.1 — **28 months** ago: 2024-03-12 ⚠️
    - **[d3-hierarchy](https://github.com/d3/d3-hierarchy)** 3.1.2 — **52 months** ago: 2022-04-02 ⚠️
    - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
    - **[d3-path](https://github.com/d3/d3-path)** 3.1.0 — **43 months** ago: 2022-12-19 ⚠️
    - **[d3-polygon](https://github.com/d3/d3-polygon)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
    - **[d3-quadtree](https://github.com/d3/d3-quadtree)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
    - **[d3-random](https://github.com/d3/d3-random)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
    - **[d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic)** 3.1.0 — **28 months** ago: 2024-03-12 ⚠️
      - **[d3-color](https://github.com/d3/d3-color)** 3.1.0 — **52 months** ago: 2022-03-28 ⚠️
      - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
    - **[d3-scale](https://github.com/d3/d3-scale)** 4.0.2 — **58 months** ago: 2021-09-24 ⚠️
    - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **61 months** ago: 2021-06-07 ⚠️
    - **[d3-shape](https://github.com/d3/d3-shape)** 3.2.0 — **43 months** ago: 2022-12-20 ⚠️
    - **[d3-time-format](https://github.com/d3/d3-time-format)** 4.1.0 — **56 months** ago: 2021-12-04 ⚠️
    - **[d3-time](https://github.com/d3/d3-time)** 3.1.0 — **44 months** ago: 2022-12-02 ⚠️
    - **[d3-timer](https://github.com/d3/d3-timer)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
    - **[d3-transition](https://github.com/d3/d3-transition)** 3.0.1 — **61 months** ago: 2021-06-09 ⚠️
    - **[d3-zoom](https://github.com/d3/d3-zoom)** 3.0.0 — **61 months** ago: 2021-06-10 ⚠️
  - **[interval-tree-1d](https://github.com/mikolalysenko/interval-tree-1d)** 1.0.4 — **62 months** ago: 2021-06-03 ⚠️
    - **[binary-search-bounds](https://github.com/mikolalysenko/binary-search-bounds)** 2.0.5 — **66 months** ago: 2021-01-25 ⚠️
  - **[isoformat](https://github.com/mbostock/isoformat)** 0.2.1 — **58 months** ago: 2021-09-24 ⚠️
- **[@tanstack/charts](https://github.com/TanStack/charts)** 0.6.5 — this month: 2026-08-05
  - **[@types/d3-geo](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.1 — this month: 2026-07-31
    - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **18 months** ago: 2025-01-23 ⚠️
  - **[@types/d3-shape](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.8 — **6 months** ago: 2026-01-12
    - **[@types/d3-path](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.0.11 — **32 months** ago: 2023-11-07 ⚠️ → **latest**: 3.1.1 — **18 months** ago: 2025-02-04 ⚠️ ❗
  - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **38 months** ago: 2023-05-30 ⚠️
    - **[internmap](https://github.com/mbostock/internmap)** 2.0.3 — **58 months** ago: 2021-09-20 ⚠️
  - **[d3-geo](https://github.com/d3/d3-geo)** 3.1.1 — **28 months** ago: 2024-03-12 ⚠️
    - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **38 months** ago: 2023-05-30 ⚠️
  - **[d3-scale](https://github.com/d3/d3-scale)** 4.0.2 — **58 months** ago: 2021-09-24 ⚠️
  - **[d3-shape](https://github.com/d3/d3-shape)** 3.2.0 — **43 months** ago: 2022-12-20 ⚠️
- **[@unovis/ts](https://github.com/f5/unovis)** 1.6.7 — **1 month** ago: 2026-06-28
  - **[@emotion/css](https://github.com/emotion-js/emotion.git#main)** 11.13.5 — **20 months** ago: 2024-11-20 ⚠️
    - **[@emotion/babel-plugin](https://github.com/emotion-js/emotion.git#main)** 11.13.5 — **20 months** ago: 2024-11-20 ⚠️
      - **[@babel/helper-module-imports](https://github.com/babel/babel)** 7.29.7 — **2 months** ago: 2026-05-25 → **latest**: 8.0.0 — **1 month** ago: 2026-06-16 ❗
        - **[@babel/traverse](https://github.com/babel/babel)** 7.29.8 — this month: 2026-07-31 → **latest**: 8.0.4 — this month: 2026-07-09 ❗
          - **[@babel/code-frame](https://github.com/babel/babel)** 7.29.7 — **2 months** ago: 2026-05-25 → **latest**: 8.0.0 — **1 month** ago: 2026-06-16 ❗
            - **[@babel/helper-validator-identifier](https://github.com/babel/babel)** 7.29.7 — **2 months** ago: 2026-05-25 → **latest**: 8.0.4 — this month: 2026-07-09 ❗
            - **[js-tokens](https://github.com/lydell/js-tokens)** 4.0.0 — **102 months** ago: 2018-01-28 ⚠️ → **latest**: 10.0.0 — **7 months** ago: 2025-12-08 ⚠️ ❗
            - **[picocolors](https://github.com/alexeyraspopov/picocolors)** 1.1.1 — **21 months** ago: 2024-10-16 ⚠️
          - **[@babel/generator](https://github.com/babel/babel)** 7.29.8 — this month: 2026-07-31 → **latest**: 8.0.0 — **1 month** ago: 2026-06-16 ❗
            - **[@babel/parser](https://github.com/babel/babel)** 7.29.8 — this month: 2026-07-31 → **latest**: 8.0.4 — this month: 2026-07-09 ❗
            - **[@babel/types](https://github.com/babel/babel)** 7.29.8 — this month: 2026-07-31 → **latest**: 8.0.4 — this month: 2026-07-09 ❗
            - **[@jridgewell/gen-mapping](https://github.com/jridgewell/sourcemaps)** 0.3.13 — **11 months** ago: 2025-08-12 ⚠️
              - **[@jridgewell/sourcemap-codec](https://github.com/jridgewell/sourcemaps)** 1.5.5 — **11 months** ago: 2025-08-12 ⚠️
              - **[@jridgewell/trace-mapping](https://github.com/jridgewell/sourcemaps)** 0.3.31 — **10 months** ago: 2025-09-10 ⚠️
            - **[@jridgewell/trace-mapping](https://github.com/jridgewell/sourcemaps)** 0.3.31 — **10 months** ago: 2025-09-10 ⚠️
              - **[@jridgewell/resolve-uri](https://github.com/jridgewell/resolve-uri)** 3.1.2 — **29 months** ago: 2024-02-14 ⚠️
              - **[@jridgewell/sourcemap-codec](https://github.com/jridgewell/sourcemaps)** 1.5.5 — **11 months** ago: 2025-08-12 ⚠️
            - **[jsesc](https://github.com/mathiasbynens/jsesc)** 3.1.0 — **19 months** ago: 2024-12-11 ⚠️
          - **[@babel/helper-globals](https://github.com/babel/babel)** 7.29.7 — **2 months** ago: 2026-05-25 → **latest**: 8.0.0 — **1 month** ago: 2026-06-16 ❗
          - **[@babel/parser](https://github.com/babel/babel)** 7.29.8 — this month: 2026-07-31 → **latest**: 8.0.4 — this month: 2026-07-09 ❗
            - **[@babel/types](https://github.com/babel/babel)** 7.29.8 — this month: 2026-07-31 → **latest**: 8.0.4 — this month: 2026-07-09 ❗
          - **[@babel/template](https://github.com/babel/babel)** 7.29.7 — **2 months** ago: 2026-05-25 → **latest**: 8.0.0 — **1 month** ago: 2026-06-16 ❗
            - **[@babel/code-frame](https://github.com/babel/babel)** 7.29.7 — **2 months** ago: 2026-05-25 → **latest**: 8.0.0 — **1 month** ago: 2026-06-16 ❗
            - **[@babel/parser](https://github.com/babel/babel)** 7.29.8 — this month: 2026-07-31 → **latest**: 8.0.4 — this month: 2026-07-09 ❗
            - **[@babel/types](https://github.com/babel/babel)** 7.29.8 — this month: 2026-07-31 → **latest**: 8.0.4 — this month: 2026-07-09 ❗
          - **[@babel/types](https://github.com/babel/babel)** 7.29.8 — this month: 2026-07-31 → **latest**: 8.0.4 — this month: 2026-07-09 ❗
          - **[debug](https://github.com/debug-js/debug)** 4.4.3 — **10 months** ago: 2025-09-13 ⚠️
            - **[ms](https://github.com/vercel/ms)** 2.1.3 — **67 months** ago: 2020-12-08 ⚠️
        - **[@babel/types](https://github.com/babel/babel)** 7.29.8 — this month: 2026-07-31 → **latest**: 8.0.4 — this month: 2026-07-09 ❗
          - **[@babel/helper-string-parser](https://github.com/babel/babel)** 7.29.7 — **2 months** ago: 2026-05-25 → **latest**: 8.0.0 — **1 month** ago: 2026-06-16 ❗
          - **[@babel/helper-validator-identifier](https://github.com/babel/babel)** 7.29.7 — **2 months** ago: 2026-05-25 → **latest**: 8.0.4 — this month: 2026-07-09 ❗
      - **[@babel/runtime](https://github.com/babel/babel)** 7.29.7 — **2 months** ago: 2026-05-25 → **latest**: 8.0.0 — **1 month** ago: 2026-06-16 ❗
      - **[@emotion/hash](https://github.com/emotion-js/emotion.git#main)** 0.9.2 — **24 months** ago: 2024-07-19 ⚠️
      - **[@emotion/memoize](https://github.com/emotion-js/emotion.git#main)** 0.9.0 — **24 months** ago: 2024-07-19 ⚠️
      - **[@emotion/serialize](https://github.com/emotion-js/emotion.git#main)** 1.3.3 — **20 months** ago: 2024-11-20 ⚠️
      - **[babel-plugin-macros](https://github.com/kentcdodds/babel-plugin-macros)** 3.1.0 — **63 months** ago: 2021-05-05 ⚠️
        - **[@babel/runtime](https://github.com/babel/babel)** 7.29.7 — **2 months** ago: 2026-05-25 → **latest**: 8.0.0 — **1 month** ago: 2026-06-16 ❗
        - **[cosmiconfig](https://github.com/davidtheclark/cosmiconfig)** 7.1.0 — **44 months** ago: 2022-11-12 ⚠️ → **latest**: 10.0.0 — this month: 2026-08-02 ❗
          - **[@types/parse-json](https://github.com/DefinitelyTyped/DefinitelyTyped)** 4.0.2 — **32 months** ago: 2023-11-07 ⚠️ → **latest**: 7.0.0 — **17 months** ago: 2025-02-21 ⚠️ ❗
          - **[import-fresh](https://github.com/sindresorhus/import-fresh)** 3.3.1 — **18 months** ago: 2025-02-02 ⚠️ → **latest**: 4.0.0 — **5 months** ago: 2026-02-25 ❗
            - **[parent-module](https://github.com/sindresorhus/parent-module)** 1.0.1 — **88 months** ago: 2019-03-28 ⚠️ → **latest**: 3.2.0 — **10 months** ago: 2025-09-15 ⚠️ ❗
              - **[callsites](https://github.com/sindresorhus/callsites)** 3.1.0 — **87 months** ago: 2019-04-06 ⚠️ → **latest**: 4.2.0 — **25 months** ago: 2024-06-29 ⚠️ ❗
            - **[resolve-from](https://github.com/sindresorhus/resolve-from)** 4.0.0 — **106 months** ago: 2017-09-23 ⚠️ → **latest**: 5.0.0 — **87 months** ago: 2019-04-15 ⚠️ ❗
          - **[parse-json](https://github.com/sindresorhus/parse-json)** 5.2.0 — **66 months** ago: 2021-01-18 ⚠️ → **latest**: 8.3.0 — **15 months** ago: 2025-04-09 ⚠️ ❗
            - **[@babel/code-frame](https://github.com/babel/babel)** 7.29.7 — **2 months** ago: 2026-05-25 → **latest**: 8.0.0 — **1 month** ago: 2026-06-16 ❗
            - **[error-ex](https://github.com/qix-/node-error-ex)** 1.3.4 — **10 months** ago: 2025-09-15 ⚠️
              - **[is-arrayish](https://github.com/qix-/node-is-arrayish)** 0.2.1 — **131 months** ago: 2015-08-31 ⚠️ → **latest**: 0.3.4 — **10 months** ago: 2025-09-13 ⚠️ ❗
            - **[json-parse-even-better-errors](https://github.com/npm/json-parse-even-better-errors)** 2.3.1 — **71 months** ago: 2020-09-02 ⚠️ → **latest**: 6.0.0 — **2 months** ago: 2026-05-08 ❗
            - **[lines-and-columns](https://github.com/eventualbuddha/lines-and-columns)** 1.2.4 — **56 months** ago: 2021-11-21 ⚠️ → **latest**: 2.0.4 — **32 months** ago: 2023-11-07 ⚠️ ❗
          - **[path-type](https://github.com/sindresorhus/path-type)** 4.0.0 — **88 months** ago: 2019-03-12 ⚠️ → **latest**: 6.0.0 — **24 months** ago: 2024-07-26 ⚠️ ❗
          - **[yaml](https://github.com/eemeli/yaml)** 1.10.3 — **4 months** ago: 2026-03-21 → **latest**: 2.9.0 — **2 months** ago: 2026-05-11 ❗
        - **[resolve](https://github.com/browserify/resolve)** 1.22.12 — **3 months** ago: 2026-04-11
          - **[es-errors](https://github.com/ljharb/es-errors)** 1.3.0 — **30 months** ago: 2024-02-05 ⚠️
          - **[is-core-module](https://github.com/inspect-js/is-core-module)** 2.16.2 — **3 months** ago: 2026-05-05
            - **[hasown](https://github.com/inspect-js/hasOwn)** 2.0.4 — **2 months** ago: 2026-05-28
              - **[function-bind](https://github.com/Raynos/function-bind)** 1.1.2 — **33 months** ago: 2023-10-12 ⚠️
          - **[path-parse](https://github.com/jbgutierrez/path-parse)** 1.0.7 — **62 months** ago: 2021-05-25 ⚠️
          - **[supports-preserve-symlinks-flag](https://github.com/inspect-js/node-supports-preserve-symlinks-flag)** 1.0.0 — **55 months** ago: 2022-01-03 ⚠️
      - **[convert-source-map](https://github.com/thlorenz/convert-source-map)** 1.9.0 — **45 months** ago: 2022-10-10 ⚠️ → **latest**: 2.0.0 — **45 months** ago: 2022-10-17 ⚠️ ❗
      - **[escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp)** 4.0.0 — **75 months** ago: 2020-04-23 ⚠️ → **latest**: 5.0.0 — **63 months** ago: 2021-04-17 ⚠️ ❗
      - **[find-root](https://github.com/js-n/find-root)** 1.1.0 — **109 months** ago: 2017-06-29 ⚠️
      - **[source-map](https://github.com/mozilla/source-map)** 0.5.7 — **107 months** ago: 2017-08-21 ⚠️ → **latest**: 0.8.0 — this month: 2026-07-20 ❗
      - **[stylis](https://github.com/thysultan/stylis.js)** 4.2.0 — **39 months** ago: 2023-05-05 ⚠️ → **latest**: 4.4.0 — **3 months** ago: 2026-04-19 ❗
    - **[@emotion/cache](https://github.com/emotion-js/emotion.git#main)** 11.14.0 — **19 months** ago: 2024-12-09 ⚠️
      - **[@emotion/memoize](https://github.com/emotion-js/emotion.git#main)** 0.9.0 — **24 months** ago: 2024-07-19 ⚠️
      - **[@emotion/sheet](https://github.com/emotion-js/emotion.git#main)** 1.4.0 — **24 months** ago: 2024-07-20 ⚠️
      - **[@emotion/utils](https://github.com/emotion-js/emotion.git#main)** 1.4.2 — **20 months** ago: 2024-11-20 ⚠️
      - **[@emotion/weak-memoize](https://github.com/emotion-js/emotion.git#main)** 0.4.0 — **24 months** ago: 2024-07-19 ⚠️
      - **[stylis](https://github.com/thysultan/stylis.js)** 4.2.0 — **39 months** ago: 2023-05-05 ⚠️ → **latest**: 4.4.0 — **3 months** ago: 2026-04-19 ❗
    - **[@emotion/serialize](https://github.com/emotion-js/emotion.git#main)** 1.3.3 — **20 months** ago: 2024-11-20 ⚠️
      - **[@emotion/hash](https://github.com/emotion-js/emotion.git#main)** 0.9.2 — **24 months** ago: 2024-07-19 ⚠️
      - **[@emotion/memoize](https://github.com/emotion-js/emotion.git#main)** 0.9.0 — **24 months** ago: 2024-07-19 ⚠️
      - **[@emotion/unitless](https://github.com/emotion-js/emotion.git#main)** 0.10.0 — **23 months** ago: 2024-08-21 ⚠️
      - **[@emotion/utils](https://github.com/emotion-js/emotion.git#main)** 1.4.2 — **20 months** ago: 2024-11-20 ⚠️
      - **[csstype](https://github.com/frenic/csstype)** 3.2.3 — **8 months** ago: 2025-11-17 ⚠️
    - **[@emotion/sheet](https://github.com/emotion-js/emotion.git#main)** 1.4.0 — **24 months** ago: 2024-07-20 ⚠️
    - **[@emotion/utils](https://github.com/emotion-js/emotion.git#main)** 1.4.2 — **20 months** ago: 2024-11-20 ⚠️
  - **[@juggle/resize-observer](https://github.com/juggle/resize-observer)** 3.4.0 — **47 months** ago: 2022-08-18 ⚠️
  - **[@types/d3-array](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.2.2 — **10 months** ago: 2025-09-12 ⚠️
  - **[@types/d3-axis](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.6 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.11 — **21 months** ago: 2024-10-07 ⚠️
  - **[@types/d3-brush](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.6 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.11 — **21 months** ago: 2024-10-07 ⚠️
  - **[@types/d3-chord](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.6 — **32 months** ago: 2023-11-07 ⚠️
  - **[@types/d3-collection](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.0.13 — **32 months** ago: 2023-11-07 ⚠️
  - **[@types/d3-color](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.3 — **32 months** ago: 2023-11-07 ⚠️
  - **[@types/d3-drag](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.7 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.11 — **21 months** ago: 2024-10-07 ⚠️
  - **[@types/d3-ease](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.2 — **32 months** ago: 2023-11-07 ⚠️
  - **[@types/d3-force](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.10 — **25 months** ago: 2024-06-17 ⚠️
  - **[@types/d3-geo](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.1 — this month: 2026-07-31
  - **[@types/d3-hierarchy](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.7 — **28 months** ago: 2024-03-18 ⚠️
  - **[@types/d3-interpolate](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.4 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-color](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.3 — **32 months** ago: 2023-11-07 ⚠️
  - **[@types/d3-path](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.1 — **18 months** ago: 2025-02-04 ⚠️
  - **[@types/d3-sankey](https://github.com/DefinitelyTyped/DefinitelyTyped)** 0.12.5 — **8 months** ago: 2025-11-16 ⚠️
    - **[@types/d3-shape](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.3.12 — **32 months** ago: 2023-11-21 ⚠️ → **latest**: 3.1.8 — **6 months** ago: 2026-01-12 ❗
      - **[@types/d3-path](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.0.11 — **32 months** ago: 2023-11-07 ⚠️ → **latest**: 3.1.1 — **18 months** ago: 2025-02-04 ⚠️ ❗
  - **[@types/d3-scale](https://github.com/DefinitelyTyped/DefinitelyTyped)** 4.0.9 — **18 months** ago: 2025-02-05 ⚠️
    - **[@types/d3-time](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.4 — **20 months** ago: 2024-11-25 ⚠️
  - **[@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.11 — **21 months** ago: 2024-10-07 ⚠️
  - **[@types/d3-shape](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.8 — **6 months** ago: 2026-01-12
  - **[@types/d3-timer](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.2 — **32 months** ago: 2023-11-07 ⚠️
  - **[@types/d3-transition](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.9 — **21 months** ago: 2024-10-07 ⚠️
    - **[@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.11 — **21 months** ago: 2024-10-07 ⚠️
  - **[@types/d3-zoom](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.8 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-interpolate](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.4 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.11 — **21 months** ago: 2024-10-07 ⚠️
  - **[@types/d3](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7.4.3 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-array](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.2.2 — **10 months** ago: 2025-09-12 ⚠️
    - **[@types/d3-axis](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.6 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-brush](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.6 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-chord](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.6 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-color](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.3 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-contour](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.6 — **32 months** ago: 2023-11-07 ⚠️
      - **[@types/d3-array](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.2.2 — **10 months** ago: 2025-09-12 ⚠️
      - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **18 months** ago: 2025-01-23 ⚠️
    - **[@types/d3-delaunay](https://github.com/DefinitelyTyped/DefinitelyTyped)** 6.0.4 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-dispatch](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.7 — **12 months** ago: 2025-07-30 ⚠️
    - **[@types/d3-drag](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.7 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-dsv](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.7 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-ease](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.2 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-fetch](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.7 — **32 months** ago: 2023-11-07 ⚠️
      - **[@types/d3-dsv](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.7 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-force](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.10 — **25 months** ago: 2024-06-17 ⚠️
    - **[@types/d3-format](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.4 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-geo](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.1 — this month: 2026-07-31
    - **[@types/d3-hierarchy](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.7 — **28 months** ago: 2024-03-18 ⚠️
    - **[@types/d3-interpolate](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.4 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-path](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.0.11 — **32 months** ago: 2023-11-07 ⚠️ → **latest**: 3.1.1 — **18 months** ago: 2025-02-04 ⚠️ ❗
    - **[@types/d3-polygon](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.2 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-quadtree](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.6 — **32 months** ago: 2023-11-22 ⚠️
    - **[@types/d3-random](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.4 — **1 month** ago: 2026-07-02
    - **[@types/d3-scale-chromatic](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.0 — **20 months** ago: 2024-11-27 ⚠️
    - **[@types/d3-scale](https://github.com/DefinitelyTyped/DefinitelyTyped)** 4.0.9 — **18 months** ago: 2025-02-05 ⚠️
    - **[@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.11 — **21 months** ago: 2024-10-07 ⚠️
    - **[@types/d3-shape](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.8 — **6 months** ago: 2026-01-12
    - **[@types/d3-time-format](https://github.com/DefinitelyTyped/DefinitelyTyped)** 4.0.3 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-time](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.4 — **20 months** ago: 2024-11-25 ⚠️
    - **[@types/d3-timer](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.2 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/d3-transition](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.9 — **21 months** ago: 2024-10-07 ⚠️
    - **[@types/d3-zoom](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.8 — **32 months** ago: 2023-11-07 ⚠️
  - **[@types/dagre](https://github.com/DefinitelyTyped/DefinitelyTyped)** 0.7.54 — **5 months** ago: 2026-02-26
  - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **18 months** ago: 2025-01-23 ⚠️
  - **[@types/leaflet](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.7.6 — **56 months** ago: 2021-11-15 ⚠️ → **latest**: 1.9.22 — this month: 2026-08-01 ❗
    - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **18 months** ago: 2025-01-23 ⚠️
  - **[@types/supercluster](https://github.com/DefinitelyTyped/DefinitelyTyped)** 5.0.3 — **61 months** ago: 2021-07-02 ⚠️ → **latest**: 7.1.3 — **32 months** ago: 2023-11-07 ⚠️ ❗
    - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **18 months** ago: 2025-01-23 ⚠️
  - **[@types/three](https://github.com/DefinitelyTyped/DefinitelyTyped)** 0.135.0 — **55 months** ago: 2021-12-06 ⚠️ → **latest**: 0.185.4 — this month: 2026-08-04 ❗
  - **[@types/throttle-debounce](https://github.com/DefinitelyTyped/DefinitelyTyped)** 5.0.2 — **32 months** ago: 2023-11-07 ⚠️
  - **[@types/topojson-client](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.5 — **22 months** ago: 2024-09-16 ⚠️
    - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **18 months** ago: 2025-01-23 ⚠️
    - **[@types/topojson-specification](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.0.5 — **32 months** ago: 2023-11-07 ⚠️
  - **[@types/topojson-specification](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.0.5 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **18 months** ago: 2025-01-23 ⚠️
  - **[@types/topojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.2.6 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **18 months** ago: 2025-01-23 ⚠️
    - **[@types/topojson-client](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.1.5 — **22 months** ago: 2024-09-16 ⚠️
    - **[@types/topojson-server](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.4 — **32 months** ago: 2023-11-07 ⚠️
      - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **18 months** ago: 2025-01-23 ⚠️
      - **[@types/topojson-specification](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.0.5 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/topojson-simplify](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.3 — **32 months** ago: 2023-11-07 ⚠️
      - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **18 months** ago: 2025-01-23 ⚠️
      - **[@types/topojson-specification](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.0.5 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/topojson-specification](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.0.5 — **32 months** ago: 2023-11-07 ⚠️
  - **[@unovis/dagre-layout](https://github.com/unovis/dagre-layout)** 0.8.8-2 — **38 months** ago: 2023-05-23 ⚠️ → **latest**: 0.8.8-3 — this month: 2026-07-28 ❗
    - **[@unovis/graphlibrary](https://github.com/unovis/graphlibrary)** 2.2.0-2 — **38 months** ago: 2023-05-23 ⚠️ → **latest**: 2.2.0-3 — this month: 2026-07-28 ❗
    - **[lodash-es](https://github.com/lodash/lodash)** 4.18.1 — **4 months** ago: 2026-04-01
  - **[@unovis/graphlibrary](https://github.com/unovis/graphlibrary)** 2.2.0-2 — **38 months** ago: 2023-05-23 ⚠️ → **latest**: 2.2.0-3 — this month: 2026-07-28 ❗
    - **[lodash-es](https://github.com/lodash/lodash)** 4.18.1 — **4 months** ago: 2026-04-01
  - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **38 months** ago: 2023-05-30 ⚠️
  - **[d3-axis](https://github.com/d3/d3-axis)** 3.0.0 — **61 months** ago: 2021-06-09 ⚠️
  - **[d3-brush](https://github.com/d3/d3-brush)** 3.0.0 — **61 months** ago: 2021-06-10 ⚠️
    - **[d3-dispatch](https://github.com/d3/d3-dispatch)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
    - **[d3-drag](https://github.com/d3/d3-drag)** 3.0.0 — **61 months** ago: 2021-06-09 ⚠️
    - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
    - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **61 months** ago: 2021-06-07 ⚠️
    - **[d3-transition](https://github.com/d3/d3-transition)** 3.0.1 — **61 months** ago: 2021-06-09 ⚠️
  - **[d3-chord](https://github.com/d3/d3-chord)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
    - **[d3-path](https://github.com/d3/d3-path)** 3.1.0 — **43 months** ago: 2022-12-19 ⚠️
  - **[d3-collection](https://github.com/d3/d3-collection)** 1.0.7 — **95 months** ago: 2018-08-24 ⚠️
  - **[d3-color](https://github.com/d3/d3-color)** 3.1.0 — **52 months** ago: 2022-03-28 ⚠️
  - **[d3-drag](https://github.com/d3/d3-drag)** 3.0.0 — **61 months** ago: 2021-06-09 ⚠️
  - **[d3-ease](https://github.com/d3/d3-ease)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
  - **[d3-force](https://github.com/d3/d3-force)** 3.0.0 — **62 months** ago: 2021-06-05 ⚠️
  - **[d3-geo-projection](https://github.com/d3/d3-geo-projection)** 4.0.0 — **61 months** ago: 2021-06-11 ⚠️
    - **[commander](https://github.com/tj/commander.js)** 7.2.0 — **64 months** ago: 2021-03-21 ⚠️ → **latest**: 15.0.0 — **2 months** ago: 2026-05-29 ❗
    - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **38 months** ago: 2023-05-30 ⚠️
    - **[d3-geo](https://github.com/d3/d3-geo)** 3.1.1 — **28 months** ago: 2024-03-12 ⚠️
  - **[d3-geo](https://github.com/d3/d3-geo)** 3.1.1 — **28 months** ago: 2024-03-12 ⚠️
  - **[d3-hierarchy](https://github.com/d3/d3-hierarchy)** 3.1.2 — **52 months** ago: 2022-04-02 ⚠️
  - **[d3-interpolate-path](https://github.com/pbeshai/d3-interpolate-path)** 2.3.0 — **47 months** ago: 2022-08-31 ⚠️
  - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
    - **[d3-color](https://github.com/d3/d3-color)** 3.1.0 — **52 months** ago: 2022-03-28 ⚠️
  - **[d3-path](https://github.com/d3/d3-path)** 3.1.0 — **43 months** ago: 2022-12-19 ⚠️
  - **[d3-sankey](https://github.com/d3/d3-sankey)** 0.12.3 — **83 months** ago: 2019-09-02 ⚠️
  - **[d3-scale](https://github.com/d3/d3-scale)** 4.0.2 — **58 months** ago: 2021-09-24 ⚠️
  - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **61 months** ago: 2021-06-07 ⚠️
  - **[d3-shape](https://github.com/d3/d3-shape)** 3.2.0 — **43 months** ago: 2022-12-20 ⚠️
  - **[d3-timer](https://github.com/d3/d3-timer)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
  - **[d3-transition](https://github.com/d3/d3-transition)** 3.0.1 — **61 months** ago: 2021-06-09 ⚠️
    - **[d3-color](https://github.com/d3/d3-color)** 3.1.0 — **52 months** ago: 2022-03-28 ⚠️
    - **[d3-dispatch](https://github.com/d3/d3-dispatch)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
    - **[d3-ease](https://github.com/d3/d3-ease)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
    - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
    - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **61 months** ago: 2021-06-07 ⚠️
    - **[d3-timer](https://github.com/d3/d3-timer)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
  - **[d3-zoom](https://github.com/d3/d3-zoom)** 3.0.0 — **61 months** ago: 2021-06-10 ⚠️
  - **[d3](https://github.com/d3/d3)** 7.9.0 — **28 months** ago: 2024-03-12 ⚠️
  - **[elkjs](https://github.com/kieler/elkjs)** 0.10.2 — **12 months** ago: 2025-07-22 ⚠️ → **latest**: 0.12.0 — this month: 2026-07-17 ❗
  - **[geojson](https://github.com/caseycesari/geojson.js)** 0.5.0 — **107 months** ago: 2017-08-06 ⚠️
  - **[leaflet](https://github.com/Leaflet/Leaflet)** 1.7.1 — **71 months** ago: 2020-09-03 ⚠️ → **latest**: 1.9.4 — **38 months** ago: 2023-05-18 ⚠️ ❗
  - **[maplibre-gl](https://github.com/maplibre/maplibre-gl-js)** 2.4.0 — **47 months** ago: 2022-08-27 ⚠️ → **latest**: 6.1.0 — this month: 2026-07-30 ❗
    - **[@mapbox/geojson-rewind](https://github.com/mapbox/geojson-rewind)** 0.5.2 — **50 months** ago: 2022-05-18 ⚠️
      - **[get-stream](https://github.com/sindresorhus/get-stream)** 6.0.1 — **63 months** ago: 2021-04-15 ⚠️ → **latest**: 9.0.1 — **28 months** ago: 2024-03-16 ⚠️ ❗
      - **[minimist](https://github.com/minimistjs/minimist)** 1.2.8 — **41 months** ago: 2023-02-09 ⚠️
    - **[@mapbox/jsonlint-lines-primitives](https://github.com/mapbox/jsonlint)** 2.0.3 — **1 month** ago: 2026-06-25
    - **[@mapbox/mapbox-gl-supported](https://github.com/mapbox/mapbox-gl-supported)** 2.0.1 — **57 months** ago: 2021-10-25 ⚠️ → **latest**: 4.0.0 — **2 months** ago: 2026-05-29 ❗
    - **[@mapbox/point-geometry](https://github.com/mapbox/point-geometry)** 0.1.0 — **111 months** ago: 2017-04-21 ⚠️ → **latest**: 1.1.0 — **24 months** ago: 2024-07-16 ⚠️ ❗
    - **[@mapbox/tiny-sdf](https://github.com/mapbox/tiny-sdf)** 2.2.0 — **3 months** ago: 2026-05-05
    - **[@mapbox/unitbezier](https://github.com/mapbox/unitbezier)** 0.0.1 — **57 months** ago: 2021-10-22 ⚠️ → **latest**: 1.0.0 — **2 months** ago: 2026-05-26 ❗
    - **[@mapbox/vector-tile](https://github.com/mapbox/vector-tile-js)** 1.3.1 — **101 months** ago: 2018-03-03 ⚠️ → **latest**: 3.0.0 — **2 months** ago: 2026-05-27 ❗
      - **[@mapbox/point-geometry](https://github.com/mapbox/point-geometry)** 0.1.0 — **111 months** ago: 2017-04-21 ⚠️ → **latest**: 1.1.0 — **24 months** ago: 2024-07-16 ⚠️ ❗
    - **[@mapbox/whoots-js](https://github.com/mapbox/whoots-js)** 3.1.0 — **96 months** ago: 2018-07-13 ⚠️
    - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **18 months** ago: 2025-01-23 ⚠️
    - **[@types/mapbox__point-geometry](https://github.com/DefinitelyTyped/DefinitelyTyped)** 0.1.4 — **32 months** ago: 2023-11-07 ⚠️ → **latest**: 1.0.87 — **5 months** ago: 2026-02-17 ❗
    - **[@types/mapbox__vector-tile](https://github.com/DefinitelyTyped/DefinitelyTyped)** 1.3.4 — **32 months** ago: 2023-11-07 ⚠️ → **latest**: 2.0.0 — **17 months** ago: 2025-02-06 ⚠️ ❗
      - **[@types/geojson](https://github.com/DefinitelyTyped/DefinitelyTyped)** 7946.0.16 — **18 months** ago: 2025-01-23 ⚠️
      - **[@types/mapbox__point-geometry](https://github.com/DefinitelyTyped/DefinitelyTyped)** 0.1.4 — **32 months** ago: 2023-11-07 ⚠️ → **latest**: 1.0.87 — **5 months** ago: 2026-02-17 ❗
      - **[@types/pbf](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.5 — **32 months** ago: 2023-11-07 ⚠️
    - **[@types/pbf](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.5 — **32 months** ago: 2023-11-07 ⚠️
    - **[csscolorparser](https://github.com/deanm/css-color-parser-js)** 1.0.3 — **119 months** ago: 2016-08-22 ⚠️
    - **[earcut](https://github.com/mapbox/earcut)** 2.2.4 — **49 months** ago: 2022-07-05 ⚠️ → **latest**: 3.2.3 — **1 month** ago: 2026-07-02 ❗
    - **[geojson-vt](https://github.com/mapbox/geojson-vt)** 3.2.1 — **93 months** ago: 2018-10-19 ⚠️ → **latest**: 4.0.3 — **2 months** ago: 2026-05-14 ❗
    - **[gl-matrix](https://github.com/toji/gl-matrix)** 3.4.4 — **11 months** ago: 2025-08-08 ⚠️
    - **[global-prefix](https://github.com/jonschlinkert/global-prefix)** 3.0.0 — **91 months** ago: 2018-12-15 ⚠️ → **latest**: 4.0.0 — **23 months** ago: 2024-08-17 ⚠️ ❗
      - **[ini](https://github.com/isaacs/ini)** 1.3.8 — **67 months** ago: 2020-12-11 ⚠️ → **latest**: 7.0.0 — **2 months** ago: 2026-05-08 ❗
      - **[kind-of](https://github.com/jonschlinkert/kind-of)** 6.0.3 — **78 months** ago: 2020-01-16 ⚠️
      - **[which](https://github.com/isaacs/node-which)** 1.3.1 — **98 months** ago: 2018-05-25 ⚠️ → **latest**: 7.0.0 — **2 months** ago: 2026-05-08 ❗
        - **[isexe](https://github.com/isaacs/isexe)** 2.0.0 — **112 months** ago: 2017-03-23 ⚠️ → **latest**: 4.0.0 — **5 months** ago: 2026-02-09 ❗
    - **[murmurhash-js](https://github.com/mikolalysenko/murmurhash-js)** 1.0.0 — **147 months** ago: 2014-04-29 ⚠️
    - **[pbf](https://github.com/mapbox/pbf)** 3.3.0 — **25 months** ago: 2024-07-03 ⚠️ → **latest**: 5.1.2 — this month: 2026-07-09 ❗
      - **[ieee754](https://github.com/feross/ieee754)** 1.2.1 — **69 months** ago: 2020-10-27 ⚠️
      - **[resolve-protobuf-schema](https://github.com/mafintosh/resolve-protobuf-schema)** 2.1.0 — **96 months** ago: 2018-07-20 ⚠️
        - **[protocol-buffers-schema](https://github.com/mafintosh/protocol-buffers-schema)** 3.6.1 — **3 months** ago: 2026-04-06
    - **[potpack](https://github.com/mapbox/potpack)** 1.0.2 — **57 months** ago: 2021-10-22 ⚠️ → **latest**: 2.1.0 — **12 months** ago: 2025-07-14 ⚠️ ❗
    - **[quickselect](https://www.npmjs.com/package/quickselect)** 2.0.0 — **100 months** ago: 2018-04-04 ⚠️ → **latest**: 3.0.0 — **25 months** ago: 2024-07-03 ⚠️ ❗
    - **[supercluster](https://github.com/mapbox/supercluster)** 7.1.5 — **52 months** ago: 2022-04-05 ⚠️ → **latest**: 8.0.1 — **39 months** ago: 2023-04-27 ⚠️ ❗
    - **[tinyqueue](https://github.com/mourner/tinyqueue)** 2.0.3 — **85 months** ago: 2019-06-14 ⚠️ → **latest**: 3.0.0 — **24 months** ago: 2024-07-06 ⚠️ ❗
    - **[vt-pbf](https://github.com/mapbox/vt-pbf)** 3.1.3 — **61 months** ago: 2021-06-07 ⚠️
      - **[@mapbox/point-geometry](https://github.com/mapbox/point-geometry)** 0.1.0 — **111 months** ago: 2017-04-21 ⚠️ → **latest**: 1.1.0 — **24 months** ago: 2024-07-16 ⚠️ ❗
      - **[@mapbox/vector-tile](https://github.com/mapbox/vector-tile-js)** 1.3.1 — **101 months** ago: 2018-03-03 ⚠️ → **latest**: 3.0.0 — **2 months** ago: 2026-05-27 ❗
      - **[pbf](https://github.com/mapbox/pbf)** 3.3.0 — **25 months** ago: 2024-07-03 ⚠️ → **latest**: 5.1.2 — this month: 2026-07-09 ❗
  - **[striptags](https://github.com/ericnorris/striptags)** 3.2.0 — **61 months** ago: 2021-06-18 ⚠️
  - **[supercluster](https://github.com/mapbox/supercluster)** 7.1.5 — **52 months** ago: 2022-04-05 ⚠️ → **latest**: 8.0.1 — **39 months** ago: 2023-04-27 ⚠️ ❗
    - **[kdbush](https://github.com/mourner/kdbush)** 3.0.0 — **94 months** ago: 2018-09-07 ⚠️ → **latest**: 4.1.0 — **2 months** ago: 2026-05-19 ❗
  - **[three](https://github.com/mrdoob/three.js)** 0.135.0 — **56 months** ago: 2021-11-26 ⚠️ → **latest**: 0.185.1 — **1 month** ago: 2026-07-01 ❗
  - **[throttle-debounce](https://github.com/niksy/throttle-debounce)** 5.0.2 — **25 months** ago: 2024-06-24 ⚠️
  - **[topojson-client](https://github.com/topojson/topojson-client)** 3.1.0 — **80 months** ago: 2019-11-06 ⚠️
    - **[commander](https://github.com/tj/commander.js)** 2.20.3 — **81 months** ago: 2019-10-11 ⚠️ → **latest**: 15.0.0 — **2 months** ago: 2026-05-29 ❗
  - **[tslib](https://github.com/Microsoft/tslib)** 2.8.1 — **21 months** ago: 2024-10-31 ⚠️
- **[billboard.js](https://github.com/naver/billboard.js)** 4.0.3 — this month: 2026-07-06
  - **[@types/d3-selection](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.11 — **21 months** ago: 2024-10-07 ⚠️
  - **[@types/d3-transition](https://github.com/DefinitelyTyped/DefinitelyTyped)** 3.0.9 — **21 months** ago: 2024-10-07 ⚠️
  - **[d3-axis](https://github.com/d3/d3-axis)** 3.0.0 — **61 months** ago: 2021-06-09 ⚠️
  - **[d3-brush](https://github.com/d3/d3-brush)** 3.0.0 — **61 months** ago: 2021-06-10 ⚠️
  - **[d3-drag](https://github.com/d3/d3-drag)** 3.0.0 — **61 months** ago: 2021-06-09 ⚠️
  - **[d3-hierarchy](https://github.com/d3/d3-hierarchy)** 3.1.2 — **52 months** ago: 2022-04-02 ⚠️
  - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
  - **[d3-scale](https://github.com/d3/d3-scale)** 4.0.2 — **58 months** ago: 2021-09-24 ⚠️
  - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **61 months** ago: 2021-06-07 ⚠️
  - **[d3-shape](https://github.com/d3/d3-shape)** 3.2.0 — **43 months** ago: 2022-12-20 ⚠️
  - **[d3-time-format](https://github.com/d3/d3-time-format)** 4.1.0 — **56 months** ago: 2021-12-04 ⚠️
    - **[d3-time](https://github.com/d3/d3-time)** 3.1.0 — **44 months** ago: 2022-12-02 ⚠️
  - **[d3-transition](https://github.com/d3/d3-transition)** 3.0.1 — **61 months** ago: 2021-06-09 ⚠️
  - **[d3-zoom](https://github.com/d3/d3-zoom)** 3.0.0 — **61 months** ago: 2021-06-10 ⚠️
- **[d3-axis](https://github.com/d3/d3-axis)** 3.0.0 — **61 months** ago: 2021-06-09 ⚠️
- **[d3-drag](https://github.com/d3/d3-drag)** 3.0.0 — **61 months** ago: 2021-06-09 ⚠️
  - **[d3-dispatch](https://github.com/d3/d3-dispatch)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
  - **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **61 months** ago: 2021-06-07 ⚠️
- **[d3-force](https://github.com/d3/d3-force)** 3.0.0 — **62 months** ago: 2021-06-05 ⚠️
  - **[d3-dispatch](https://github.com/d3/d3-dispatch)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
  - **[d3-quadtree](https://github.com/d3/d3-quadtree)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
  - **[d3-timer](https://github.com/d3/d3-timer)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
- **[d3-hierarchy](https://github.com/d3/d3-hierarchy)** 3.1.2 — **52 months** ago: 2022-04-02 ⚠️
- **[d3-sankey](https://github.com/d3/d3-sankey)** 0.12.3 — **83 months** ago: 2019-09-02 ⚠️
  - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **38 months** ago: 2023-05-30 ⚠️
  - **[d3-shape](https://github.com/d3/d3-shape)** 3.2.0 — **43 months** ago: 2022-12-20 ⚠️
- **[d3-scale](https://github.com/d3/d3-scale)** 4.0.2 — **58 months** ago: 2021-09-24 ⚠️
  - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **38 months** ago: 2023-05-30 ⚠️
  - **[d3-format](https://github.com/d3/d3-format)** 3.1.2 — **6 months** ago: 2026-01-14
  - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
  - **[d3-time-format](https://github.com/d3/d3-time-format)** 4.1.0 — **56 months** ago: 2021-12-04 ⚠️
  - **[d3-time](https://github.com/d3/d3-time)** 3.1.0 — **44 months** ago: 2022-12-02 ⚠️
    - **[d3-array](https://github.com/d3/d3-array)** 3.2.4 — **38 months** ago: 2023-05-30 ⚠️
- **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **61 months** ago: 2021-06-07 ⚠️
- **[d3-shape](https://github.com/d3/d3-shape)** 3.2.0 — **43 months** ago: 2022-12-20 ⚠️
  - **[d3-path](https://github.com/d3/d3-path)** 3.1.0 — **43 months** ago: 2022-12-19 ⚠️
- **[d3-zoom](https://github.com/d3/d3-zoom)** 3.0.0 — **61 months** ago: 2021-06-10 ⚠️
  - **[d3-dispatch](https://github.com/d3/d3-dispatch)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
  - **[d3-drag](https://github.com/d3/d3-drag)** 3.0.0 — **61 months** ago: 2021-06-09 ⚠️
  - **[d3-interpolate](https://github.com/d3/d3-interpolate)** 3.0.1 — **62 months** ago: 2021-06-05 ⚠️
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

|Chunk/Module/File|Composition|
|:------ |:-----------|
| dist/billboardJs-DS82ViEw.js | 250.5 kB · brotli 64.7 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;billboard.js | `█████░░░░░░░░░░░░░░░` 26.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 2.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;src → billboardJs.ts | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-selection → src/selectAll.js | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| dist/observablePlot-C7764aFq.js | 223.5 kB · brotli 56.1 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;@observablehq/plot | `███░░░░░░░░░░░░░░░░░` 15.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-geo | `█░░░░░░░░░░░░░░░░░░░` 3.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 2.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-scale-chromatic | `░░░░░░░░░░░░░░░░░░░░` 2.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-array | `░░░░░░░░░░░░░░░░░░░░` 0.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-color | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-scale | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-shape | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-interpolate | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;isoformat | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;src → observablePlot.ts | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| dist/chordDiagram-Cz0sVVgD.js | 96.5 kB · brotli 25.5 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;@unovis/ts | `█░░░░░░░░░░░░░░░░░░░` 3.8% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 1.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-shape | `░░░░░░░░░░░░░░░░░░░░` 1.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;@juggle/resize-observer | `░░░░░░░░░░░░░░░░░░░░` 1.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-interpolate-path → build/d3-interpolate-path.mjs | `░░░░░░░░░░░░░░░░░░░░` 0.8% |
| &nbsp;&nbsp;&nbsp;&nbsp;@emotion/cache → dist/emotion-cache.browser.esm.js | `░░░░░░░░░░░░░░░░░░░░` 0.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;stylis | `░░░░░░░░░░░░░░░░░░░░` 0.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-chord | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;@emotion/serialize → dist/emotion-serialize.esm.js | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;striptags → src/striptags.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;@emotion/css | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;@emotion/sheet → dist/emotion-sheet.esm.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-hierarchy | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;@emotion/unitless → dist/emotion-unitless.esm.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;@emotion/hash → dist/emotion-hash.esm.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;throttle-debounce → esm/index.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;src → chordDiagram.ts | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;@emotion/utils → dist/emotion-utils.browser.esm.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;@emotion/memoize → dist/emotion-memoize.esm.js | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| dist/tanStackCharts-BJAX22lS.js | 69.5 kB · brotli 18.7 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;@tanstack/charts | `█░░░░░░░░░░░░░░░░░░░` 6.8% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-shape | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;src → tanStackCharts.ts | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| dist/erdDiagram-Ds-nrw7Q.js | 62.3 kB · brotli 16.2 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;@dagrejs/dagre → dist/dagre.esm.js | `█░░░░░░░░░░░░░░░░░░░` 6.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;src → erdDiagram.ts | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| dist/src-Xlr4CcSw.js | 23.3 kB · brotli 5.6 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-time-format | `░░░░░░░░░░░░░░░░░░░░` 1.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-time | `░░░░░░░░░░░░░░░░░░░░` 0.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-scale | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-brush → src/brush.js | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| dist/src-yL3ZdoR1.js | 21.9 kB · brotli 5.5 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-transition | `░░░░░░░░░░░░░░░░░░░░` 1.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-interpolate | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-dispatch → src/dispatch.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-timer | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-ease → src/cubic.js | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| dist/step-DgCcZZ3W.js | 19.2 kB · brotli 2.5 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-shape | `░░░░░░░░░░░░░░░░░░░░` 1.9% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| dist/select-BIuoFcZG.js | 17.9 kB · brotli 3.9 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-selection | `░░░░░░░░░░░░░░░░░░░░` 1.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| dist/networkDiagram-yraPhqxN.js | 17.7 kB · brotli 5.0 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-force | `░░░░░░░░░░░░░░░░░░░░` 0.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-quadtree | `░░░░░░░░░░░░░░░░░░░░` 0.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;src → networkDiagram.ts | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| dist/linear-BnhqTvdX.js | 17.2 kB · brotli 4.9 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-format | `░░░░░░░░░░░░░░░░░░░░` 0.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-scale | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-array | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-interpolate | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;internmap → src/index.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| dist/src-WDualLFV.js | 12.8 kB · brotli 3.6 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-zoom | `░░░░░░░░░░░░░░░░░░░░` 1.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-interpolate → src/zoom.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| dist/string-CnCj7THX.js | 11.6 kB · brotli 3.7 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-color | `░░░░░░░░░░░░░░░░░░░░` 0.9% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-interpolate | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| dist/sankeyDiagram-BT2RCRpi.js | 10.2 kB · brotli 2.9 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-sankey | `░░░░░░░░░░░░░░░░░░░░` 0.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;src → sankeyDiagram.ts | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| dist/treeDiagram-DsHUD8ou.js | 4.9 kB · brotli 1.8 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-hierarchy → src/tree.js | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;src → treeDiagram.ts | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| dist/drag-DfL4uwqz.js | 4.4 kB · brotli 1.4 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-drag | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| dist/hierarchy-CDFAetye.js | 4.0 kB · brotli 1.1 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-hierarchy | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| dist/axis-DjmZ9QYe.js | 3.5 kB · brotli 1.1 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-axis | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| dist/path-6kmCrmEz.js | 2.8 kB · brotli 1021 B |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-path → src/path.js | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| dist/pow-BFDPqS3s.js | 2.4 kB · brotli 997 B |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-array | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-scale → src/pow.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| dist/dpuse-tool-d3-visualiser.es.js | 2.3 kB · brotli 544 B |
| &nbsp;&nbsp;&nbsp;&nbsp;src → index.ts | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| dist/band-C1twWuW2.js | 2.1 kB · brotli 765 B |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-scale → src/band.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-array → src/range.js | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| dist/link-D-9z7kEr.js | 2.0 kB · brotli 697 B |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-shape | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| dist/d3BarChart-DIN2KQsU.js | 1.9 kB · brotli 860 B |
| &nbsp;&nbsp;&nbsp;&nbsp;src → d3BarChart.ts | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| dist/nodrag-Dq2tlBbe.js | 1.6 kB · brotli 623 B |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-drag | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-selection | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| dist/palette-BuTjISrV.js | 956 B · brotli 420 B |
| &nbsp;&nbsp;&nbsp;&nbsp;src → palette.ts | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| dist/ordinal-uZdoVxAx.js | 841 B · brotli 399 B |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-scale → src/ordinal.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| dist/sum-CNP0Xric.js | 609 B · brotli 257 B |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-array | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| dist/point-6cHftmvM.js | 568 B · brotli 297 B |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-shape | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| dist/math-C5EhTgJw.js | 498 B · brotli 261 B |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-shape → src/math.js | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| dist/max-CPVNm4tn.js | 371 B · brotli 222 B |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-array → src/max.js | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| dist/array-Cv4-2llb.js | 368 B · brotli 215 B |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `░░░░░░░░░░░░░░░░░░░░` 0.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-shape | `░░░░░░░░░░░░░░░░░░░░` 0.0% |

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
