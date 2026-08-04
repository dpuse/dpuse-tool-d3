import { t as e } from "./select-BIuoFcZG.js";
import { n as t, r as n, t as r } from "./sum-BAZU479z.js";
import { t as i } from "./link-RZgae8Z2.js";
//#region node_modules/d3-sankey/src/align.js
function a(e, t) {
	return e.sourceLinks.length ? e.depth : t - 1;
}
//#endregion
//#region node_modules/d3-sankey/src/constant.js
function o(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-sankey/src/sankey.js
function s(e, t) {
	return l(e.source, t.source) || e.index - t.index;
}
function c(e, t) {
	return l(e.target, t.target) || e.index - t.index;
}
function l(e, t) {
	return e.y0 - t.y0;
}
function u(e) {
	return e.value;
}
function d(e) {
	return e.index;
}
function f(e) {
	return e.nodes;
}
function p(e) {
	return e.links;
}
function m(e, t) {
	let n = e.get(t);
	if (!n) throw Error("missing: " + t);
	return n;
}
function h({ nodes: e }) {
	for (let t of e) {
		let e = t.y0, n = e;
		for (let n of t.sourceLinks) n.y0 = e + n.width / 2, e += n.width;
		for (let e of t.targetLinks) e.y1 = n + e.width / 2, n += e.width;
	}
}
function g() {
	let e = 0, i = 0, g = 1, _ = 1, v = 24, y = 8, b, x = d, S = a, C, w, T = f, E = p, D = 6;
	function O() {
		let e = {
			nodes: T.apply(null, arguments),
			links: E.apply(null, arguments)
		};
		return k(e), A(e), j(e), M(e), F(e), h(e), e;
	}
	O.update = function(e) {
		return h(e), e;
	}, O.nodeId = function(e) {
		return arguments.length ? (x = typeof e == "function" ? e : o(e), O) : x;
	}, O.nodeAlign = function(e) {
		return arguments.length ? (S = typeof e == "function" ? e : o(e), O) : S;
	}, O.nodeSort = function(e) {
		return arguments.length ? (C = e, O) : C;
	}, O.nodeWidth = function(e) {
		return arguments.length ? (v = +e, O) : v;
	}, O.nodePadding = function(e) {
		return arguments.length ? (y = b = +e, O) : y;
	}, O.nodes = function(e) {
		return arguments.length ? (T = typeof e == "function" ? e : o(e), O) : T;
	}, O.links = function(e) {
		return arguments.length ? (E = typeof e == "function" ? e : o(e), O) : E;
	}, O.linkSort = function(e) {
		return arguments.length ? (w = e, O) : w;
	}, O.size = function(t) {
		return arguments.length ? (e = i = 0, g = +t[0], _ = +t[1], O) : [g - e, _ - i];
	}, O.extent = function(t) {
		return arguments.length ? (e = +t[0][0], g = +t[1][0], i = +t[0][1], _ = +t[1][1], O) : [[e, i], [g, _]];
	}, O.iterations = function(e) {
		return arguments.length ? (D = +e, O) : D;
	};
	function k({ nodes: e, links: t }) {
		for (let [t, n] of e.entries()) n.index = t, n.sourceLinks = [], n.targetLinks = [];
		let n = new Map(e.map((t, n) => [x(t, n, e), t]));
		for (let [e, r] of t.entries()) {
			r.index = e;
			let { source: t, target: i } = r;
			typeof t != "object" && (t = r.source = m(n, t)), typeof i != "object" && (i = r.target = m(n, i)), t.sourceLinks.push(r), i.targetLinks.push(r);
		}
		if (w != null) for (let { sourceLinks: t, targetLinks: n } of e) t.sort(w), n.sort(w);
	}
	function A({ nodes: e }) {
		for (let t of e) t.value = t.fixedValue === void 0 ? Math.max(r(t.sourceLinks, u), r(t.targetLinks, u)) : t.fixedValue;
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
		let r = n(t, (e) => e.depth) + 1, i = (g - e - v) / (r - 1), a = Array(r);
		for (let n of t) {
			let t = Math.max(0, Math.min(r - 1, Math.floor(S.call(null, n, r))));
			n.layer = t, n.x0 = e + t * i, n.x1 = n.x0 + v, a[t] ? a[t].push(n) : a[t] = [n];
		}
		if (C) for (let e of a) e.sort(C);
		return a;
	}
	function P(e) {
		let n = t(e, (e) => (_ - i - (e.length - 1) * b) / r(e, u));
		for (let t of e) {
			let e = i;
			for (let r of t) {
				r.y0 = e, r.y1 = e + r.value * n, e = r.y1 + b;
				for (let e of r.sourceLinks) e.width = e.value * n;
			}
			e = (_ - e + b) / (t.length + 1);
			for (let n = 0; n < t.length; ++n) {
				let r = t[n];
				r.y0 += e * (n + 1), r.y1 += e * (n + 1);
			}
			H(t);
		}
	}
	function F(e) {
		let t = N(e);
		b = Math.min(y, (_ - i) / (n(t, (e) => e.length) - 1)), P(t);
		for (let e = 0; e < D; ++e) {
			let n = .99 ** e, r = Math.max(1 - n, (e + 1) / D);
			L(t, n, r), I(t, n, r);
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
			C === void 0 && i.sort(l), R(i, n);
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
			C === void 0 && i.sort(l), R(i, n);
		}
	}
	function R(e, t) {
		let n = e.length >> 1, r = e[n];
		B(e, r.y0 - b, n - 1, t), z(e, r.y1 + b, n + 1, t), B(e, _, e.length - 1, t), z(e, i, 0, t);
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
			for (let { source: { sourceLinks: e } } of t) e.sort(c);
			for (let { target: { targetLinks: t } } of e) t.sort(s);
		}
	}
	function H(e) {
		if (w === void 0) for (let { sourceLinks: t, targetLinks: n } of e) t.sort(c), n.sort(s);
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
function _(e) {
	return [e.source.x1, e.y0];
}
function v(e) {
	return [e.target.x0, e.y1];
}
function y() {
	return i().source(_).target(v);
}
//#endregion
//#region src/palette.ts
var b = [
	{
		dark: "#3987e5",
		light: "#2a78d6"
	},
	{
		dark: "#d95926",
		light: "#eb6834"
	},
	{
		dark: "#199e70",
		light: "#1baf7a"
	},
	{
		dark: "#c98500",
		light: "#eda100"
	},
	{
		dark: "#d55181",
		light: "#e87ba4"
	},
	{
		dark: "#008300",
		light: "#008300"
	},
	{
		dark: "#9085e9",
		light: "#4a3aa7"
	},
	{
		dark: "#e66767",
		light: "#e34948"
	}
], x = {
	dark: {
		muted: "#898781",
		primary: "#ffffff",
		secondary: "#c3c2b7"
	},
	light: {
		muted: "#898781",
		primary: "#0b0b0b",
		secondary: "#52514e"
	}
}, S = {
	dark: {
		border: "rgba(255,255,255,0.10)",
		chart: "#1a1a19"
	},
	light: {
		border: "rgba(11,11,11,0.10)",
		chart: "#fcfcfb"
	}
};
function C(e, t) {
	let n = b[(e % b.length + b.length) % b.length];
	if (n == null) throw Error("Categorical palette is empty.");
	return t === "dark" ? n.dark : n.light;
}
//#endregion
//#region src/sankeyDiagram.ts
var w = 16, T = 12, E = 480, D = 640, O = 6;
function k(t, n, r = {}) {
	let i = r.colorModeId ?? "light", a = x[i], o = S[i];
	getComputedStyle(n).position === "static" && (n.style.position = "relative");
	let s = e(n).append("div").attr("role", "tooltip").style("position", "absolute").style("pointer-events", "none").style("z-index", "1").style("opacity", "0").style("transition", "opacity 120ms ease").style("padding", "4px 8px").style("border-radius", "4px").style("font", "12px system-ui, -apple-system, \"Segoe UI\", sans-serif").style("white-space", "nowrap").style("background", o.chart).style("color", a.primary).style("border", `1px solid ${o.border}`).style("box-shadow", "0 2px 8px rgba(0,0,0,0.15)");
	function c(e, t) {
		let r = n.getBoundingClientRect();
		s.html(t).style("left", `${String(e.clientX - r.left + 12)}px`).style("top", `${String(e.clientY - r.top + 12)}px`).style("opacity", "1");
	}
	function l() {
		s.style("opacity", "0");
	}
	function u() {
		e(n).selectAll("svg").remove();
		let o = n.clientWidth || D, s = n.clientHeight || E, u = {
			links: t.links.map((e) => ({ ...e })),
			nodes: t.nodes.map((e) => ({ ...e }))
		}, { links: d, nodes: f } = g().nodeId((e) => e.id).nodeWidth(r.nodeWidth ?? w).nodePadding(r.nodePadding ?? T).extent([[1, 1], [o - 1, s - 1]])(u), p = e(n).insert("svg", "div").attr("viewBox", `0 0 ${String(o)} ${String(s)}`).attr("width", "100%").attr("height", "100%").attr("font-family", "system-ui, -apple-system, \"Segoe UI\", sans-serif").attr("font-size", 12), m = y();
		p.append("g").attr("fill", "none").selectAll("path").data(d).join("path").attr("d", m).attr("stroke", (e) => C(f.indexOf(e.source), i)).attr("stroke-opacity", .35).attr("stroke-width", (e) => Math.max(1, e.width ?? 1)).on("mouseenter", (t, n) => {
			e(t.currentTarget).attr("stroke-opacity", .6);
			let r = n.source, i = n.target;
			c(t, `${r.name} → ${i.name}<br>${n.value.toLocaleString()}`);
		}).on("mousemove", (e, t) => {
			let n = t.source, r = t.target;
			c(e, `${n.name} → ${r.name}<br>${t.value.toLocaleString()}`);
		}).on("mouseleave", (t) => {
			e(t.currentTarget).attr("stroke-opacity", .35), l();
		});
		let h = p.append("g").selectAll("g").data(f).join("g");
		h.append("rect").attr("x", (e) => e.x0 ?? 0).attr("y", (e) => e.y0 ?? 0).attr("width", (e) => (e.x1 ?? 0) - (e.x0 ?? 0)).attr("height", (e) => Math.max(1, (e.y1 ?? 0) - (e.y0 ?? 0))).attr("rx", 2).attr("fill", (e, t) => C(t, i)).on("mouseenter", (e, t) => {
			c(e, `${t.name}<br>${(t.value ?? 0).toLocaleString()}`);
		}).on("mousemove", (e, t) => {
			c(e, `${t.name}<br>${(t.value ?? 0).toLocaleString()}`);
		}).on("mouseleave", l), h.append("text").attr("x", (e) => (e.x0 ?? 0) < o / 2 ? (e.x1 ?? 0) + O : (e.x0 ?? 0) - O).attr("y", (e) => ((e.y0 ?? 0) + (e.y1 ?? 0)) / 2).attr("dy", "0.35em").attr("text-anchor", (e) => (e.x0 ?? 0) < o / 2 ? "start" : "end").attr("fill", a.primary).text((e) => e.name);
		let _ = p.node();
		if (_ == null) throw Error("Failed to create Sankey diagram SVG element.");
		return _;
	}
	let d = u();
	return {
		resize: () => {
			d = u();
		},
		get svg() {
			return d;
		}
	};
}
//#endregion
export { k as renderSankeyDiagram };

//# sourceMappingURL=sankeyDiagram-DlIuwzOl.js.map