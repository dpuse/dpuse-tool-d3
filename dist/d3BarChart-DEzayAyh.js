import { t as e } from "./select-BIuoFcZG.js";
import { p as t, t as n } from "./linear-D3BD7E1p.js";
import { t as r } from "./band-DbExrcif.js";
import { n as i, t as a } from "./axis-DjmZ9QYe.js";
//#region src/d3BarChart.ts
var o = 640, s = 400, c = {
	bottom: 24,
	left: 40,
	right: 16,
	top: 16
}, l = [
	"#6c8ebf",
	"#d79b00",
	"#82b366",
	"#9673a6",
	"#b85450"
];
function u(u, f) {
	function p() {
		e(f).selectAll("svg").remove();
		let p = f.clientWidth || o, m = f.clientHeight || s, h = p - c.left - c.right, g = m - c.top - c.bottom, _ = r().domain(u.categories).range([0, h]).padding(.2), v = r().domain(u.series.map((e) => e.name)).range([0, _.bandwidth()]).padding(.1), y = Math.max(0, ...u.series.flatMap((e) => e.values)), b = n().domain([0, y]).nice().range([g, 0]), x = t().domain(u.series.map((e) => e.name)).range(l), S = e(f).append("svg").attr("viewBox", `0 0 ${String(p)} ${String(m)}`).attr("width", p).attr("height", m), C = S.append("g").attr("transform", `translate(${String(c.left)}, ${String(c.top)})`);
		C.append("g").attr("transform", `translate(0, ${String(g)})`).call(a(_)), C.append("g").call(i(b)), C.append("g").selectAll("rect").data(d(u)).join("rect").attr("x", (e) => (_(e.category) ?? 0) + (v(e.seriesName) ?? 0)).attr("y", (e) => b(e.value)).attr("width", v.bandwidth()).attr("height", (e) => g - b(e.value)).attr("fill", (e) => x(e.seriesName));
		let w = S.node();
		if (w == null) throw Error("Failed to create D3 bar chart SVG element.");
		return w;
	}
	let m = p();
	return {
		resize: () => {
			m = p();
		},
		get svg() {
			return m;
		}
	};
}
function d(e) {
	let t = [];
	for (let n of e.series) for (let [r, i] of e.categories.entries()) t.push({
		category: i,
		seriesName: n.name,
		value: n.values[r] ?? 0
	});
	return t;
}
//#endregion
export { u as renderD3BarChart };

//# sourceMappingURL=d3BarChart-DEzayAyh.js.map