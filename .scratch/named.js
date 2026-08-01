import { barY, plot, ruleY } from '@observablehq/plot';
export function run(rows, el) {
  return plot({ marks: [barY(rows, { x: 'a', y: 'b' }), ruleY([0])] });
}
