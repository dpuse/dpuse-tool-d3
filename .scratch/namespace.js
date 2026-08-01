import * as Plot from '@observablehq/plot';
export function run(rows, el) {
  return Plot.plot({ marks: [Plot.barY(rows, { x: 'a', y: 'b' }), Plot.ruleY([0])] });
}
