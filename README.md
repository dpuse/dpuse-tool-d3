# DPUse D3 Tool

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
import type { D3Tool as D3ToolType, SankeyDiagramData } from '@dpuse/dpuse-tool-d3';

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

License data is collected automatically on each release using [license-checker](https://github.com/RSeidelsohn/license-checker-rseidelsohn). The following table lists all production dependencies. These dependencies (including transitive ones) have been checked and confirmed to use BSD-3-Clause, ISC, or MIT — all permissive, commercially-friendly licenses. Users of the uploaded library are covered by these checks; developers cloning this repository should independently verify development dependencies.

|Dependency|Version|License(s)|Document|
|:-|:-:|:-|:-|
|[@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)|0.3.758|MIT|[LICENSE](licenses/downloads/@dpuse/dpuse-shared@0.3.758-LICENSE.txt)|
|[d3-array](https://github.com/d3/d3-array)|2.12.1|BSD-3-Clause|[LICENSE](licenses/downloads/d3-array@2.12.1-LICENSE.txt)|
|[d3-path](https://github.com/d3/d3-path)|1.0.9|BSD-3-Clause|[LICENSE](licenses/downloads/d3-path@1.0.9-LICENSE.txt)|
|[d3-sankey](https://github.com/d3/d3-sankey)|0.12.3|BSD-3-Clause|[LICENSE](licenses/downloads/d3-sankey@0.12.3-LICENSE.txt)|
|[d3-selection](https://github.com/d3/d3-selection)|3.0.0|ISC|[LICENSE](licenses/downloads/d3-selection@3.0.0-LICENSE.txt)|
|[d3-shape](https://github.com/d3/d3-shape)|1.3.7|BSD-3-Clause|[LICENSE](licenses/downloads/d3-shape@1.3.7-LICENSE.txt)|
|[internmap](https://github.com/mbostock/internmap)|1.0.1|ISC|[LICENSE](licenses/downloads/internmap@1.0.1-LICENSE.txt)|

<!-- DEPENDENCY_LICENSES_END -->

<!-- DEPENDENCY_TREE_START -->

The dependency tree below lists every package in this project — direct and transitive — along with its installed version, release date, and update status. Packages flagged ❗ have a newer version available; ⚠️ indicates a package that hasn't been updated in the last 6 months or longer. Neither flag necessarily indicates a problem: we let new releases stabilise before upgrading, and some packages are simply mature and stable, requiring no active development.

- **[@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)** 0.3.758 — this month: 2026-07-27
- **[d3-sankey](https://github.com/d3/d3-sankey)** 0.12.3 — **82 months** ago: 2019-09-02 ⚠️
  - **[d3-array](https://github.com/d3/d3-array)** 2.12.1 — **64 months** ago: 2021-03-24 ⚠️ → **latest**: 3.2.4 — **38 months** ago: 2023-05-30 ⚠️ ❗
    - **[internmap](https://github.com/mbostock/internmap)** 1.0.1 — **64 months** ago: 2021-03-10 ⚠️ → **latest**: 2.0.3 — **58 months** ago: 2021-09-20 ⚠️ ❗
  - **[d3-shape](https://github.com/d3/d3-shape)** 1.3.7 — **80 months** ago: 2019-11-16 ⚠️ → **latest**: 3.2.0 — **43 months** ago: 2022-12-20 ⚠️ ❗
    - **[d3-path](https://github.com/d3/d3-path)** 1.0.9 — **80 months** ago: 2019-11-16 ⚠️ → **latest**: 3.1.0 — **43 months** ago: 2022-12-19 ⚠️ ❗
- **[d3-selection](https://github.com/d3/d3-selection)** 3.0.0 — **61 months** ago: 2021-06-07 ⚠️

<!-- DEPENDENCY_TREE_END -->

<!-- USAGE_START -->

This connector is automatically uploaded to the DPUse Engine cloud once released and becomes instantly available to all new browser app instances, with existing instances notified of the update.

You may view or clone this repository for your own purposes, such as building a new, similar connector, though there is currently no process to accept third-party connectors into DPUse at this stage. Cloned or forked code is unsupported and isn't guaranteed to remain compatible with the DPUse Engine as it evolves.

```bash
git clone https://github.com/dpuse/dpuse-tool-d3.git
cd dpuse-tool-d3
npm install
```

_Requires [Node.js](https://nodejs.org/) 23.11 or later, [npm](https://www.npmjs.com/) 11 or later, and [TypeScript](https://www.typescriptlang.org/) 6.0.3 or later._

<!-- USAGE_END -->

<!-- BUNDLE_START -->

The Bundle Analysis Report is generated automatically on each release using [Sonda](https://sonda.dev/), which analyses final source maps to reveal the actual effects of tree-shaking and minification rather than relying on pre-build estimates.

_Note: Sonda's Vite reports currently exclude CSS files, since Vite does not generate source maps for CSS._

|Chunk/Module/File|Composition|
|:------ |:-----------|
| dist/dpuse-tool-d3.es.js | 33.6 kB · brotli 7.8 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-selection | `████████░░░░░░░░░░░░` 42.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/data.js | `█░░░░░░░░░░░░░░░░░░░` 4.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/on.js | `█░░░░░░░░░░░░░░░░░░░` 4.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/classed.js | `█░░░░░░░░░░░░░░░░░░░` 3.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/attr.js | `█░░░░░░░░░░░░░░░░░░░` 2.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/index.js | `░░░░░░░░░░░░░░░░░░░░` 1.8% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/style.js | `░░░░░░░░░░░░░░░░░░░░` 1.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/enter.js | `░░░░░░░░░░░░░░░░░░░░` 1.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/dispatch.js | `░░░░░░░░░░░░░░░░░░░░` 1.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/creator.js | `░░░░░░░░░░░░░░░░░░░░` 1.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/sort.js | `░░░░░░░░░░░░░░░░░░░░` 1.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/property.js | `░░░░░░░░░░░░░░░░░░░░` 1.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/merge.js | `░░░░░░░░░░░░░░░░░░░░` 1.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/selectAll.js | `░░░░░░░░░░░░░░░░░░░░` 1.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/select.js | `░░░░░░░░░░░░░░░░░░░░` 1.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/text.js | `░░░░░░░░░░░░░░░░░░░░` 1.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/html.js | `░░░░░░░░░░░░░░░░░░░░` 1.0% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/clone.js | `░░░░░░░░░░░░░░░░░░░░` 0.8% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/filter.js | `░░░░░░░░░░░░░░░░░░░░` 0.8% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/insert.js | `░░░░░░░░░░░░░░░░░░░░` 0.8% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/join.js | `░░░░░░░░░░░░░░░░░░░░` 0.8% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/selectChildren.js | `░░░░░░░░░░░░░░░░░░░░` 0.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/order.js | `░░░░░░░░░░░░░░░░░░░░` 0.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/selectChild.js | `░░░░░░░░░░░░░░░░░░░░` 0.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/namespaces.js | `░░░░░░░░░░░░░░░░░░░░` 0.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/each.js | `░░░░░░░░░░░░░░░░░░░░` 0.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/namespace.js | `░░░░░░░░░░░░░░░░░░░░` 0.5% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/node.js | `░░░░░░░░░░░░░░░░░░░░` 0.5% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/iterator.js | `░░░░░░░░░░░░░░░░░░░░` 0.5% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/append.js | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/lower.js | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/select.js | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/matcher.js | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selectorAll.js | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/raise.js | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/remove.js | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/window.js | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selector.js | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/call.js | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/datum.js | `░░░░░░░░░░░░░░░░░░░░` 0.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/exit.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/array.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/size.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/constant.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/nodes.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/sparse.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/selection/empty.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-sankey | `████░░░░░░░░░░░░░░░░` 18.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/sankey.js | `███░░░░░░░░░░░░░░░░░` 17.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/sankeyLinkHorizontal.js | `░░░░░░░░░░░░░░░░░░░░` 0.4% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/align.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/constant.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;(unassigned) → [unassigned] | `███░░░░░░░░░░░░░░░░░` 15.6% |
| &nbsp;&nbsp;&nbsp;&nbsp;src | `██░░░░░░░░░░░░░░░░░░` 11.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sankeyDiagram.ts | `██░░░░░░░░░░░░░░░░░░` 8.9% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;palette.ts | `░░░░░░░░░░░░░░░░░░░░` 2.3% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.ts | `░░░░░░░░░░░░░░░░░░░░` 0.5% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-path → src/path.js | `█░░░░░░░░░░░░░░░░░░░` 7.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-shape | `█░░░░░░░░░░░░░░░░░░░` 3.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/link/index.js | `█░░░░░░░░░░░░░░░░░░░` 2.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/point.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/constant.js | `░░░░░░░░░░░░░░░░░░░░` 0.2% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/array.js | `░░░░░░░░░░░░░░░░░░░░` 0.1% |
| &nbsp;&nbsp;&nbsp;&nbsp;d3-array | `░░░░░░░░░░░░░░░░░░░░` 1.9% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/min.js | `░░░░░░░░░░░░░░░░░░░░` 0.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/max.js | `░░░░░░░░░░░░░░░░░░░░` 0.7% |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src/sum.js | `░░░░░░░░░░░░░░░░░░░░` 0.5% |

(unassigned) = bytes Sonda can't trace to a specific source line (whitespace, stray keywords, bundler-injected region markers) — not actual missing/unknown code.

<!-- BUNDLE_END -->

## Design Notes

- All D3 submodules (`d3-sankey`, `d3-selection`, and their transitive `d3-array`/`d3-shape` dependencies) are bundled
  directly into this tool's build, the same way `@dpuse/dpuse-tool-highcharts` bundles Highcharts. There is exactly
  one copy of each module per page load regardless of how many times this tool is dynamically imported, since the
  browser's module registry caches `import()` calls by resolved URL.
- Rendering happens on the main thread because it writes directly into a real `HTMLElement` - the DPUse Engine's
  connector/context processing runs inside a dedicated Web Worker, but presentation-rendering tools (this one and
  Highcharts) are loaded the same way `dpuse-presenter-default` is, directly by the host app.
- Node identity is carried by a direct text label on every node, not by colour alone, so the categorical palette is
  free to cycle past its 8 fixed slots for diagrams with more nodes than that.

<!-- OPENING_START -->

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![DPUse version](https://img.shields.io/github/v/release/dpuse/dpuse-tool-d3?color=f6821f&label=DPUse)](https://github.com/dpuse/dpuse-tool-d3/releases/latest)
[![CI](https://github.com/dpuse/dpuse-tool-d3/actions/workflows/ci.yml/badge.svg)](https://github.com/dpuse/dpuse-tool-d3/actions/workflows/ci.yml)
[![CodeQL](https://github.com/dpuse/dpuse-tool-d3/actions/workflows/codeql.yml/badge.svg)](https://github.com/dpuse/dpuse-tool-d3/actions/workflows/codeql.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=dpuse_dpuse-tool-d3&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=dpuse_dpuse-tool-d3)

[Documentation](https://www.dpuse.app) · [Report a Vulnerability](https://github.com/dpuse/dpuse-tool-d3/security/advisories/new) · [Open an Issue](https://github.com/dpuse/dpuse-tool-d3/issues)

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

[CodeQL](https://github.com/dpuse/dpuse-tool-d3/security/code-scanning) static analysis runs on every push to `main` and on a weekly schedule, scanning TypeScript, JavaScript, Rust, and GitHub Actions workflow files for security vulnerabilities and coding errors.

### SonarCloud

[SonarCloud](https://sonarcloud.io/summary/new_code?id=dpuse_dpuse-tool-d3) performs continuous code quality and security analysis on every push, detecting bugs, code smells, and security vulnerabilities in the TypeScript source.

### Vulnerability Scanning

Two complementary tools continuously monitor dependencies for known vulnerabilities:

- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) runs on every push to `main` via the CI workflow, failing the build if any high or critical severity vulnerabilities are detected.
- [GitHub Dependabot](https://docs.github.com/en/code-security/dependabot) automatically raises pull requests to update vulnerable dependencies, drawing on the GitHub Advisory Database which combines NVD and npm-specific advisories.

### Supply Chain Security

[Socket.dev](https://socket.dev) monitors all dependencies for supply chain risk — detecting malicious packages, dependency confusion, typosquatting, and suspicious behaviour that may not yet have a CVE.

### Reporting Vulnerabilities

Please do not open public GitHub issues for security vulnerabilities. Use [GitHub private vulnerability reporting](https://github.com/dpuse/dpuse-tool-d3/security/advisories/new) instead. See [SECURITY.md](./SECURITY.md) for the full disclosure policy, contact details, and expected response times.

### OpenSSF 🚧

[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/dpuse/dpuse-tool-d3/badge)](https://scorecard.dev/viewer/?uri=github.com/dpuse/dpuse-tool-d3)

This project is working towards the [OpenSSF Best Practices](https://www.bestpractices.dev) Passing badge, a self-certification covering security policy, vulnerability reporting, build processes, code quality, and more. Currently the [OpenSSF Scorecard](https://scorecard.dev/viewer/?uri=github.com/dpuse/dpuse-tool-d3) provides an independent automated assessment of the project's security practices and is an ongoing area of improvement.

## Contributing

This repository is maintained solely by its owner and does not, at present, accept external contributions into the canonical repo. Its source is published openly under the MIT License — every DPUse project is fully open source except DPUse Engine, which remains closed and proprietary.

For security vulnerabilities, see [Reporting Vulnerabilities](#reporting-vulnerabilities). For bugs, inconsistencies, or other feedback, [open a GitHub issue](https://github.com/dpuse/dpuse-tool-d3/issues) — feedback is read, but responses and fixes are at the maintainer's discretion.

## License

This project is licensed under the MIT License, permitting free use, modification, and distribution.

[MIT](./LICENSE) © 2026-present Jonathan Terrell

<!-- GOVERNANCE_END -->
