import { t as e } from "./max-CPVNm4tn.js";
import { n as t, t as n } from "./sum-CNP0Xric.js";
import { t as r } from "./select-BIuoFcZG.js";
import { t as i } from "./link-D-9z7kEr.js";
import { n as a, r as o, t as s } from "./palette-BuTjISrV.js";
//#region node_modules/d3-sankey/src/align.js
function c(e, t) {
	return e.sourceLinks.length ? e.depth : t - 1;
}
//#endregion
//#region node_modules/d3-sankey/src/constant.js
function l(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-sankey/src/sankey.js
function u(e, t) {
	return f(e.source, t.source) || e.index - t.index;
}
function d(e, t) {
	return f(e.target, t.target) || e.index - t.index;
}
function f(e, t) {
	return e.y0 - t.y0;
}
function p(e) {
	return e.value;
}
function m(e) {
	return e.index;
}
function h(e) {
	return e.nodes;
}
function g(e) {
	return e.links;
}
function _(e, t) {
	let n = e.get(t);
	if (!n) throw Error("missing: " + t);
	return n;
}
function v({ nodes: e }) {
	for (let t of e) {
		let e = t.y0, n = e;
		for (let n of t.sourceLinks) n.y0 = e + n.width / 2, e += n.width;
		for (let e of t.targetLinks) e.y1 = n + e.width / 2, n += e.width;
	}
}
function y() {
	let r = 0, i = 0, a = 1, o = 1, s = 24, y = 8, b, x = m, S = c, C, w, T = h, E = g, D = 6;
	function O() {
		let e = {
			nodes: T.apply(null, arguments),
			links: E.apply(null, arguments)
		};
		return k(e), A(e), j(e), M(e), F(e), v(e), e;
	}
	O.update = function(e) {
		return v(e), e;
	}, O.nodeId = function(e) {
		return arguments.length ? (x = typeof e == "function" ? e : l(e), O) : x;
	}, O.nodeAlign = function(e) {
		return arguments.length ? (S = typeof e == "function" ? e : l(e), O) : S;
	}, O.nodeSort = function(e) {
		return arguments.length ? (C = e, O) : C;
	}, O.nodeWidth = function(e) {
		return arguments.length ? (s = +e, O) : s;
	}, O.nodePadding = function(e) {
		return arguments.length ? (y = b = +e, O) : y;
	}, O.nodes = function(e) {
		return arguments.length ? (T = typeof e == "function" ? e : l(e), O) : T;
	}, O.links = function(e) {
		return arguments.length ? (E = typeof e == "function" ? e : l(e), O) : E;
	}, O.linkSort = function(e) {
		return arguments.length ? (w = e, O) : w;
	}, O.size = function(e) {
		return arguments.length ? (r = i = 0, a = +e[0], o = +e[1], O) : [a - r, o - i];
	}, O.extent = function(e) {
		return arguments.length ? (r = +e[0][0], a = +e[1][0], i = +e[0][1], o = +e[1][1], O) : [[r, i], [a, o]];
	}, O.iterations = function(e) {
		return arguments.length ? (D = +e, O) : D;
	};
	function k({ nodes: e, links: t }) {
		for (let [t, n] of e.entries()) n.index = t, n.sourceLinks = [], n.targetLinks = [];
		let n = new Map(e.map((t, n) => [x(t, n, e), t]));
		for (let [e, r] of t.entries()) {
			r.index = e;
			let { source: t, target: i } = r;
			typeof t != "object" && (t = r.source = _(n, t)), typeof i != "object" && (i = r.target = _(n, i)), t.sourceLinks.push(r), i.targetLinks.push(r);
		}
		if (w != null) for (let { sourceLinks: t, targetLinks: n } of e) t.sort(w), n.sort(w);
	}
	function A({ nodes: e }) {
		for (let t of e) t.value = t.fixedValue === void 0 ? Math.max(n(t.sourceLinks, p), n(t.targetLinks, p)) : t.fixedValue;
	}
	function j({ nodes: e }) {
		let t = e.length, n = new Set(e), r = /* @__PURE__ */ new Set(), i = 0;
		for (; n.size;) {
			for (let e of n) {
				e.depth = i;
				for (let { target: t } of e.sourceLinks) r.add(t);
			}
			if (++i > t) throw Error("circular link");
			n = r, r = /* @__PURE__ */ new Set();
		}
	}
	function M({ nodes: e }) {
		let t = e.length, n = new Set(e), r = /* @__PURE__ */ new Set(), i = 0;
		for (; n.size;) {
			for (let e of n) {
				e.height = i;
				for (let { source: t } of e.targetLinks) r.add(t);
			}
			if (++i > t) throw Error("circular link");
			n = r, r = /* @__PURE__ */ new Set();
		}
	}
	function N({ nodes: t }) {
		let n = e(t, (e) => e.depth) + 1, i = (a - r - s) / (n - 1), o = Array(n);
		for (let e of t) {
			let t = Math.max(0, Math.min(n - 1, Math.floor(S.call(null, e, n))));
			e.layer = t, e.x0 = r + t * i, e.x1 = e.x0 + s, o[t] ? o[t].push(e) : o[t] = [e];
		}
		if (C) for (let e of o) e.sort(C);
		return o;
	}
	function P(e) {
		let r = t(e, (e) => (o - i - (e.length - 1) * b) / n(e, p));
		for (let t of e) {
			let e = i;
			for (let n of t) {
				n.y0 = e, n.y1 = e + n.value * r, e = n.y1 + b;
				for (let e of n.sourceLinks) e.width = e.value * r;
			}
			e = (o - e + b) / (t.length + 1);
			for (let n = 0; n < t.length; ++n) {
				let r = t[n];
				r.y0 += e * (n + 1), r.y1 += e * (n + 1);
			}
			H(t);
		}
	}
	function F(t) {
		let n = N(t);
		b = Math.min(y, (o - i) / (e(n, (e) => e.length) - 1)), P(n);
		for (let e = 0; e < D; ++e) {
			let t = .99 ** e, r = Math.max(1 - t, (e + 1) / D);
			L(n, t, r), I(n, t, r);
		}
	}
	function I(e, t, n) {
		for (let r = 1, i = e.length; r < i; ++r) {
			let i = e[r];
			for (let e of i) {
				let n = 0, r = 0;
				for (let { source: t, value: i } of e.targetLinks) {
					let a = i * (e.layer - t.layer);
					n += U(t, e) * a, r += a;
				}
				if (!(r > 0)) continue;
				let i = (n / r - e.y0) * t;
				e.y0 += i, e.y1 += i, V(e);
			}
			C === void 0 && i.sort(f), R(i, n);
		}
	}
	function L(e, t, n) {
		for (let r = e.length - 2; r >= 0; --r) {
			let i = e[r];
			for (let e of i) {
				let n = 0, r = 0;
				for (let { target: t, value: i } of e.sourceLinks) {
					let a = i * (t.layer - e.layer);
					n += W(e, t) * a, r += a;
				}
				if (!(r > 0)) continue;
				let i = (n / r - e.y0) * t;
				e.y0 += i, e.y1 += i, V(e);
			}
			C === void 0 && i.sort(f), R(i, n);
		}
	}
	function R(e, t) {
		let n = e.length >> 1, r = e[n];
		B(e, r.y0 - b, n - 1, t), z(e, r.y1 + b, n + 1, t), B(e, o, e.length - 1, t), z(e, i, 0, t);
	}
	function z(e, t, n, r) {
		for (; n < e.length; ++n) {
			let i = e[n], a = (t - i.y0) * r;
			a > 1e-6 && (i.y0 += a, i.y1 += a), t = i.y1 + b;
		}
	}
	function B(e, t, n, r) {
		for (; n >= 0; --n) {
			let i = e[n], a = (i.y1 - t) * r;
			a > 1e-6 && (i.y0 -= a, i.y1 -= a), t = i.y0 - b;
		}
	}
	function V({ sourceLinks: e, targetLinks: t }) {
		if (w === void 0) {
			for (let { source: { sourceLinks: e } } of t) e.sort(d);
			for (let { target: { targetLinks: t } } of e) t.sort(u);
		}
	}
	function H(e) {
		if (w === void 0) for (let { sourceLinks: t, targetLinks: n } of e) t.sort(d), n.sort(u);
	}
	function U(e, t) {
		let n = e.y0 - (e.sourceLinks.length - 1) * b / 2;
		for (let { target: r, width: i } of e.sourceLinks) {
			if (r === t) break;
			n += i + b;
		}
		for (let { source: r, width: i } of t.targetLinks) {
			if (r === e) break;
			n -= i;
		}
		return n;
	}
	function W(e, t) {
		let n = t.y0 - (t.targetLinks.length - 1) * b / 2;
		for (let { source: r, width: i } of t.targetLinks) {
			if (r === e) break;
			n += i + b;
		}
		for (let { target: r, width: i } of e.sourceLinks) {
			if (r === t) break;
			n -= i;
		}
		return n;
	}
	return O;
}
//#endregion
//#region node_modules/d3-sankey/src/sankeyLinkHorizontal.js
function b(e) {
	return [e.source.x1, e.y0];
}
function x(e) {
	return [e.target.x0, e.y1];
}
function S() {
	return i().source(b).target(x);
}
//#endregion
//#region src/sankeyDiagram.ts
var C = 16, w = 12, T = 480, E = 640, D = 6;
function O(e, t, n = {}) {
	let i = n.colorModeId ?? "light", c = s[i], l = a[i];
	getComputedStyle(t).position === "static" && (t.style.position = "relative");
	let u = r(t).append("div").attr("role", "tooltip").style("position", "absolute").style("pointer-events", "none").style("z-index", "1").style("opacity", "0").style("transition", "opacity 120ms ease").style("padding", "4px 8px").style("border-radius", "4px").style("font", "12px system-ui, -apple-system, \"Segoe UI\", sans-serif").style("white-space", "nowrap").style("background", l.chart).style("color", c.primary).style("border", `1px solid ${l.border}`).style("box-shadow", "0 2px 8px rgba(0,0,0,0.15)");
	function d(e, n) {
		let r = t.getBoundingClientRect();
		u.html(n).style("left", `${String(e.clientX - r.left + 12)}px`).style("top", `${String(e.clientY - r.top + 12)}px`).style("opacity", "1");
	}
	function f() {
		u.style("opacity", "0");
	}
	function p() {
		r(t).selectAll("svg").remove();
		let a = t.clientWidth || E, s = t.clientHeight || T, l = {
			links: e.links.map((e) => ({ ...e })),
			nodes: e.nodes.map((e) => ({ ...e }))
		}, { links: u, nodes: p } = y().nodeId((e) => e.id).nodeWidth(n.nodeWidth ?? C).nodePadding(n.nodePadding ?? w).extent([[1, 1], [a - 1, s - 1]])(l), m = r(t).insert("svg", "div").attr("viewBox", `0 0 ${String(a)} ${String(s)}`).attr("width", "100%").attr("height", "100%").attr("font-family", "system-ui, -apple-system, \"Segoe UI\", sans-serif").attr("font-size", 12), h = S();
		m.append("g").attr("fill", "none").selectAll("path").data(u).join("path").attr("d", h).attr("stroke", (e) => o(p.indexOf(e.source), i)).attr("stroke-opacity", .35).attr("stroke-width", (e) => Math.max(1, e.width ?? 1)).on("mouseenter", (e, t) => {
			r(e.currentTarget).attr("stroke-opacity", .6);
			let n = t.source, i = t.target;
			d(e, `${n.name} → ${i.name}<br>${t.value.toLocaleString()}`);
		}).on("mousemove", (e, t) => {
			let n = t.source, r = t.target;
			d(e, `${n.name} → ${r.name}<br>${t.value.toLocaleString()}`);
		}).on("mouseleave", (e) => {
			r(e.currentTarget).attr("stroke-opacity", .35), f();
		});
		let g = m.append("g").selectAll("g").data(p).join("g");
		g.append("rect").attr("x", (e) => e.x0 ?? 0).attr("y", (e) => e.y0 ?? 0).attr("width", (e) => (e.x1 ?? 0) - (e.x0 ?? 0)).attr("height", (e) => Math.max(1, (e.y1 ?? 0) - (e.y0 ?? 0))).attr("rx", 2).attr("fill", (e, t) => o(t, i)).on("mouseenter", (e, t) => {
			d(e, `${t.name}<br>${(t.value ?? 0).toLocaleString()}`);
		}).on("mousemove", (e, t) => {
			d(e, `${t.name}<br>${(t.value ?? 0).toLocaleString()}`);
		}).on("mouseleave", f), g.append("text").attr("x", (e) => (e.x0 ?? 0) < a / 2 ? (e.x1 ?? 0) + D : (e.x0 ?? 0) - D).attr("y", (e) => ((e.y0 ?? 0) + (e.y1 ?? 0)) / 2).attr("dy", "0.35em").attr("text-anchor", (e) => (e.x0 ?? 0) < a / 2 ? "start" : "end").attr("fill", c.primary).text((e) => e.name);
		let _ = m.node();
		if (_ == null) throw Error("Failed to create Sankey diagram SVG element.");
		return _;
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
//#endregion
export { O as renderSankeyDiagram };

//# sourceMappingURL=sankeyDiagram-BT2RCRpi.js.map