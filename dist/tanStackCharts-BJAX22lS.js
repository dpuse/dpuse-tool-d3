import { t as e } from "./linear-BnhqTvdX.js";
import { t } from "./band-C1twWuW2.js";
import { r as n, t as r } from "./array-Cv4-2llb.js";
//#region node_modules/d3-shape/src/offset/none.js
function i(e, t) {
	if ((o = e.length) > 1) for (var n = 1, r, i, a = e[t[0]], o, s = a.length; n < o; ++n) for (i = a, a = e[t[n]], r = 0; r < s; ++r) a[r][1] += a[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
}
//#endregion
//#region node_modules/d3-shape/src/order/none.js
function a(e) {
	for (var t = e.length, n = Array(t); --t >= 0;) n[t] = t;
	return n;
}
//#endregion
//#region node_modules/d3-shape/src/stack.js
function o(e, t) {
	return e[t];
}
function s(e) {
	let t = [];
	return t.key = e, t;
}
function c() {
	var e = n([]), t = a, c = i, l = o;
	function u(n) {
		var i = Array.from(e.apply(this, arguments), s), a, o = i.length, u = -1, d;
		for (let e of n) for (a = 0, ++u; a < o; ++a) (i[a][u] = [0, +l(e, i[a].key, u, n)]).data = e;
		for (a = 0, d = r(t(i)); a < o; ++a) i[d[a]].index = a;
		return c(i, d), i;
	}
	return u.keys = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : n(Array.from(t)), u) : e;
	}, u.value = function(e) {
		return arguments.length ? (l = typeof e == "function" ? e : n(+e), u) : l;
	}, u.order = function(e) {
		return arguments.length ? (t = e == null ? a : typeof e == "function" ? e : n(Array.from(e)), u) : t;
	}, u.offset = function(e) {
		return arguments.length ? (c = e ?? i, u) : c;
	}, u;
}
//#endregion
//#region node_modules/d3-shape/src/offset/expand.js
function l(e, t) {
	if ((r = e.length) > 0) {
		for (var n, r, a = 0, o = e[0].length, s; a < o; ++a) {
			for (s = n = 0; n < r; ++n) s += e[n][a][1] || 0;
			if (s) for (n = 0; n < r; ++n) e[n][a][1] /= s;
		}
		i(e, t);
	}
}
//#endregion
//#region node_modules/d3-shape/src/offset/diverging.js
function u(e, t) {
	if ((c = e.length) > 0) for (var n, r = 0, i, a, o, s, c, l = e[t[0]].length; r < l; ++r) for (o = s = 0, n = 0; n < c; ++n) (a = (i = e[t[n]][r])[1] - i[0]) > 0 ? (i[0] = o, i[1] = o += a) : a < 0 ? (i[1] = s, i[0] = s += a) : (i[0] = 0, i[1] = a);
}
//#endregion
//#region node_modules/d3-shape/src/offset/silhouette.js
function d(e, t) {
	if ((a = e.length) > 0) {
		for (var n = 0, r = e[t[0]], a, o = r.length; n < o; ++n) {
			for (var s = 0, c = 0; s < a; ++s) c += e[s][n][1] || 0;
			r[n][1] += r[n][0] = -c / 2;
		}
		i(e, t);
	}
}
//#endregion
//#region node_modules/d3-shape/src/offset/wiggle.js
function f(e, t) {
	if (!(!((s = e.length) > 0) || !((o = (a = e[t[0]]).length) > 0))) {
		for (var n = 0, r = 1, a, o, s; r < o; ++r) {
			for (var c = 0, l = 0, u = 0; c < s; ++c) {
				for (var d = e[t[c]], f = d[r][1] || 0, p = (f - (d[r - 1][1] || 0)) / 2, m = 0; m < c; ++m) {
					var h = e[t[m]], g = h[r][1] || 0, _ = h[r - 1][1] || 0;
					p += g - _;
				}
				l += f, u += p * f;
			}
			a[r - 1][1] += a[r - 1][0] = n, l && (n -= u / l);
		}
		a[r - 1][1] += a[r - 1][0] = n, i(e, t);
	}
}
//#endregion
//#region node_modules/@tanstack/charts/dist/group.js
function p(e = {}) {
	return {
		type: "group",
		...e
	};
}
//#endregion
//#region node_modules/@tanstack/charts/dist/scale-input.js
function m(e, t) {
	let n = h(e), r = n ? e() : e;
	if (typeof r != "function" || typeof r.copy != "function" || typeof r.domain != "function" || typeof r.range != "function") throw TypeError("A scale factory must return a copyable scale with domain and range methods");
	let i = r.copy();
	if (n) {
		let e = g(i, t.values, t.includeZero);
		e && i.domain(e);
	}
	return y(i, t.nice, t.niceCount), i;
}
function h(e) {
	return typeof e == "function" && !("copy" in e);
}
function g(e, t, n = !1) {
	let r = t.filter(A);
	if (!r.length) return;
	if (typeof e.bandwidth == "function" || typeof e.ticks != "function") {
		let e = [], t = /* @__PURE__ */ new Set();
		for (let n of r) {
			let r = n instanceof Date ? `date:${n.getTime()}` : `${typeof n}:${String(n)}`;
			t.has(r) || (t.add(r), e.push(n));
		}
		return e;
	}
	if (e.domain().some((e) => e instanceof Date)) {
		let e = r.filter((e) => e instanceof Date);
		if (e.length !== r.length) throw TypeError("A temporal scale factory requires Date channel values");
		let t = Infinity, n = -Infinity;
		for (let r of e) {
			let e = r.getTime();
			t = Math.min(t, e), n = Math.max(n, e);
		}
		if (!Number.isFinite(t) || !Number.isFinite(n)) throw TypeError("A temporal scale factory requires Date channel values");
		if (t === n) {
			let e = 432e5;
			t -= e, n += e;
		}
		return [new Date(t), new Date(n)];
	}
	let i = Infinity, a = -Infinity;
	for (let e of r) {
		if (!j(e)) throw TypeError("A quantitative scale factory requires numeric values");
		i = Math.min(i, e), a = Math.max(a, e);
	}
	if (!Number.isFinite(i) || !Number.isFinite(a)) throw TypeError("A quantitative scale factory requires numeric values");
	let o = _(e);
	if (n) {
		if (o) throw TypeError("An inferred log scale cannot include an implicit zero baseline");
		i = Math.min(0, i), a = Math.max(0, a);
	}
	if (v(e, i, a), i === a) {
		if (i === 0) return [0, 1];
		let e = Math.abs(i) * .05 || 1;
		i -= e, a += e;
	}
	return [i, a];
}
function _(e) {
	return "base" in e && typeof e.base == "function";
}
function v(e, t, n) {
	if (_(e) && (t === 0 || n === 0 || t < 0 && n > 0)) throw TypeError("An inferred log domain cannot include or cross zero");
}
function y(e, t, n = 5) {
	if (!t) return;
	let r = e;
	if (typeof r.nice != "function") throw TypeError("This scale does not support nicening");
	r.nice(typeof t == "number" ? t : n);
}
//#endregion
//#region node_modules/@tanstack/charts/dist/scales.js
function b(e, t, n) {
	if (t?.scale) {
		let r = C(t.scale), i = r ? t.scale() : t.scale;
		if (typeof i != "function" || typeof i.copy != "function") throw TypeError("A color scale must be callable and copyable");
		if (r && (typeof i.domain != "function" || typeof i.range != "function")) throw TypeError("A color scale factory must return a scale with domain and range methods");
		let a = i.copy(), o = D(a);
		if (r) {
			let n = a;
			t.range?.length && n.range(t.range);
			let r = t.domain ?? w(n, e);
			(t.domain !== void 0 || r.length) && n.domain(r);
			let i = n.range();
			if (!i.length || i.some((e) => typeof e != "string")) throw TypeError("A color-scale factory requires a string range");
		}
		if (t.nice) {
			let e = a.nice;
			if (typeof e != "function") throw TypeError("This color scale does not support nicening");
			e.call(a, typeof t.nice == "number" ? t.nice : 5);
		}
		let s = a.domain?.() ?? t.domain ?? [], c = (a.range?.() ?? t.range ?? n.palette).map(String);
		return {
			type: "configured",
			kind: o,
			domain: s,
			range: c,
			map: (e) => e == null ? c[0] ?? "currentColor" : String(a(e))
		};
	}
	if (t?.type) return t.type.resolve({
		values: e,
		domain: t.domain,
		range: t.range,
		theme: n
	});
	let r = t?.range?.length ? t.range : n.palette, i = x(t?.domain ?? e), a = i.map(O);
	return {
		type: "ordinal",
		kind: "categorical",
		domain: i,
		range: r,
		map: (e) => {
			if (e == null) return r[0] ?? "currentColor";
			let t = a.indexOf(O(e));
			return t < 0 && (t = a.push(O(e)) - 1), r[t % r.length] ?? "currentColor";
		}
	};
}
function x(e) {
	return [...new Set(e.filter(S))];
}
function S(e) {
	return typeof e == "string" || typeof e == "number";
}
function C(e) {
	return typeof e == "function" && !("copy" in e);
}
function w(e, t) {
	let n = t.filter(S), r = e.quantiles, i = e.thresholds;
	if (r) return T(n);
	if (e.invertExtent && !i) throw TypeError("Threshold color-scale factory requires an explicit domain");
	if (e.ticks || i) {
		let t = T(n), r = Infinity, a = -Infinity;
		for (let e of t) r = Math.min(r, e), a = Math.max(a, e);
		if (!Number.isFinite(r) || !Number.isFinite(a)) return [];
		if (v(e, r, a), r === a) if (r === 0) a = 1;
		else {
			let e = Math.abs(r) * .05 || 1;
			r -= e, a += e;
		}
		if (i) return [r, a];
		let o = Math.max(2, e.domain().length, e.range().length);
		return Array.from({ length: o }, (e, t) => r + (a - r) * t / (o - 1));
	}
	return x(n);
}
function T(e) {
	let t = e.filter((e) => typeof e == "number" && Number.isFinite(e));
	return t.length !== e.length && E(), t;
}
function E() {
	throw TypeError("A quantitative color-scale factory requires numeric values");
}
function D(e) {
	return e.quantiles ? e.invertExtent ? "quantile" : "continuous" : e.thresholds ? "quantize" : e.invertExtent ? "threshold" : e.ticks ? "continuous" : "categorical";
}
function O(e) {
	return e instanceof Date ? `date:${e.getTime()}` : `${typeof e}:${String(e)}`;
}
//#endregion
//#region node_modules/@tanstack/charts/dist/mark.js
var k = /* @__PURE__ */ new WeakSet();
function A(e) {
	return typeof e == "string" || e instanceof Date && Number.isFinite(e.getTime()) || j(e);
}
function j(e) {
	return typeof e == "number" && Number.isFinite(e);
}
function M(e, t) {
	return t === void 0 ? { initialize: e } : {
		initialize: e,
		motion: t
	};
}
function ee(e, t) {
	return t?.length ? {
		data: e,
		definitions: t
	} : void 0;
}
function N(e, t, n, r, i) {
	return typeof e == "function" ? e(t, n, r) : e ?? i;
}
function P(e, t, n) {
	return typeof t == "function" ? e.map((n, r) => t(n, r, e)) : t === void 0 ? e.map(n) : e.map((e) => typeof e == "object" && e ? e[t] : void 0);
}
function F(e, t, n = {}) {
	if (t !== void 0) return P(e, t, (e, t) => t);
	let r = [
		e.map((e) => typeof e == "object" && e ? e.id : void 0),
		e.map((e) => {
			if (typeof e != "object" || !e) return;
			let t = e.data;
			return typeof t == "object" && t ? t.id : void 0;
		}),
		...n.candidates ?? []
	];
	for (let t of r) {
		if (t.length !== e.length) continue;
		let r = t.map(I);
		if (r.every((e) => e !== void 0) && L(r, n.groups)) return r;
	}
	return R(n.markId, n.candidates, n.warningIdentity), e.map((e, t) => t);
}
function I(e) {
	if (S(e)) return e;
	if (e instanceof Date && Number.isFinite(e.getTime())) return `date:${e.getTime()}`;
}
function L(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r = 0; r < e.length; r += 1) {
		let i = `${O(t?.[r] ?? null)}:${O(e[r])}`;
		if (n.has(i)) return !1;
		n.add(i);
	}
	return !0;
}
function R(e, t, n) {
	!e || !t?.length || !n || k.has(n) || typeof process > "u" || process.env.NODE_ENV === "production" || (k.add(n), console.warn(`TanStack Charts could not infer a unique key for mark "${e}". Using row position; supply key for stable identity across updates.`));
}
//#endregion
//#region node_modules/@tanstack/charts/dist/stack-internal.js
function te(e, t = {}) {
	let n = [], r = /* @__PURE__ */ new Map(), i = [], a = /* @__PURE__ */ new Set();
	for (let t of e) {
		let e = O(t.position);
		r.has(e) || (r.set(e, n.length), n.push(t.position));
		let o = O(t.series);
		a.has(o) || (a.add(o), i.push(t.series));
	}
	let o = ae(e, i, t.order);
	t.reverse && o.reverse();
	let s = n.map(() => /* @__PURE__ */ Object.create(null)), p = /* @__PURE__ */ new Map();
	for (let t of e) {
		let e = r.get(O(t.position)), n = O(t.series), i = `${e}:${n}`;
		if (p.has(i)) throw TypeError(`A stack requires at most one value for each position and series; duplicate ${String(t.position)} / ${String(t.series)}`);
		p.set(i, t.index), s[e][n] = t.value;
	}
	let m = o.map(O), h = t.offset === "normalize" ? l : t.offset === "center" ? d : t.offset === "wiggle" ? f : u, g = c().keys(m).value((e, t) => e[t] ?? 0).offset(h)(s), _ = /* @__PURE__ */ new Map();
	return g.forEach((e, t) => {
		let n = m[t];
		e.forEach((e, t) => {
			let r = p.get(`${t}:${n}`);
			r !== void 0 && _.set(r, {
				start: e[0],
				end: e[1]
			});
		});
	}), _;
}
function ne(e, t, n, r = {}, i = "value") {
	let a = [];
	for (let r = 0; r < e.length; r += 1) {
		let o = e[r], s = t[r];
		if (!ie(o) || !z(s)) continue;
		let c = n[r];
		a.push({
			index: r,
			position: o,
			value: s,
			series: re(c) ? c : i === "index" ? r : "value"
		});
	}
	let o = te(a, r), s = Array.from({ length: e.length }, () => void 0), c = Array.from({ length: e.length }, () => void 0);
	for (let [e, t] of o) s[e] = t.start, c[e] = t.end;
	return {
		starts: s,
		ends: c
	};
}
function re(e) {
	return typeof e == "string" || typeof e == "number";
}
function ie(e) {
	return typeof e == "string" || z(e) || e instanceof Date && Number.isFinite(e.getTime());
}
function z(e) {
	return typeof e == "number" && Number.isFinite(e);
}
function ae(e, t, n) {
	if (Array.isArray(n)) {
		let e = [...n], r = new Set(e.map(O));
		return [...e, ...t.filter((e) => !r.has(O(e)))];
	}
	if (n !== "ascending" && n !== "descending") return [...t];
	let r = new Map(t.map((e) => [O(e), 0]));
	for (let t of e) {
		let e = O(t.series);
		r.set(e, (r.get(e) ?? 0) + Math.abs(t.value));
	}
	return [...t].sort((e, t) => {
		let i = (r.get(O(e)) ?? 0) - (r.get(O(t)) ?? 0);
		return n === "ascending" ? i : -i;
	});
}
//#endregion
//#region node_modules/@tanstack/charts/dist/configured-scale.js
function oe(e, t) {
	let n = m(e, {
		values: t.values,
		includeZero: t.includeZero,
		nice: t.options?.nice,
		niceCount: t.tickCount
	}), r = n.bandwidth !== void 0, i = r && t.id === "y" ? [Math.min(...t.range), Math.max(...t.range)] : t.range, a = t.options?.reverse ? [i[1], i[0]] : i;
	n.range(a);
	let o = n.domain(), s = t.options?.axis === !1 ? void 0 : t.options?.axis?.ticks, c = s === !1 ? void 0 : s, l = c?.values ?? n.ticks?.(t.tickCount) ?? o, u = n.tickFormat?.(t.tickCount), d = n.bandwidth?.() ?? 0, f = (e) => {
		let t = n(e);
		return t === void 0 ? NaN : t + d / 2;
	};
	return {
		id: t.id,
		type: r ? "band" : "configured",
		domain: o,
		map: f,
		ticks: l.map((e) => ({
			value: e,
			position: f(e),
			label: c?.format?.(e) ?? u?.(e) ?? B(e)
		})),
		bandwidth: d
	};
}
function B(e) {
	return e instanceof Date ? e.toLocaleDateString() : String(e);
}
//#endregion
//#region node_modules/@tanstack/charts/dist/guide-layout.js
var V = 16, se = 400;
function ce(e, t) {
	let n = H(t.fontSize, V), r = H(t.fontWeight, se);
	if (!e || n === 0) return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	let i = 0;
	for (let t of e) i += de(t);
	let a = 1 + (Math.min(900, Math.max(100, r)) - 400) / 12500, o = i * n * a, s = n;
	return {
		x: t.anchor === "middle" ? -o / 2 : t.anchor === "end" ? -o : 0,
		y: t.baseline === "middle" ? -s / 2 : t.baseline === "hanging" ? 0 : -n * .8,
		width: o,
		height: s
	};
}
function le(e, t = ce) {
	let n = H(e.fontSize, V), r = e.anchor ?? "start", i = e.baseline ?? "auto", a = e.text.length === 0 ? {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	} : t(e.text, {
		fontSize: n,
		fontWeight: e.fontWeight,
		anchor: r,
		baseline: i
	}), o = fe(a.x, 0), s = fe(a.y, 0), c = H(a.width, 0), l = H(a.height, 0), u = {
		x: e.x + o,
		y: e.y + s,
		width: c,
		height: l
	};
	return e.rotate ? ue(u, e.x, e.y, e.rotate) : u;
}
function ue(e, t, n, r) {
	let i = r * Math.PI / 180, a = Math.cos(i), o = Math.sin(i), s = e.x + e.width / 2 - t, c = e.y + e.height / 2 - n, l = Math.abs(e.width * a) + Math.abs(e.height * o), u = Math.abs(e.width * o) + Math.abs(e.height * a), d = s * a - c * o + t, f = s * o + c * a + n;
	return {
		x: d - l / 2,
		y: f - u / 2,
		width: l,
		height: u
	};
}
function de(e) {
	return /\s/u.test(e) ? .33 : /[\u0300-\u036f]/u.test(e) ? 0 : /[ilI1|!.,:;'`]/u.test(e) ? .28 : /[mwMW@#%&]/u.test(e) ? .9 : /[A-Z]/u.test(e) ? .64 : /[0-9]/u.test(e) ? .56 : e.codePointAt(0) > 127 ? 1 : .54;
}
function H(e, t) {
	return e !== void 0 && Number.isFinite(e) && e >= 0 ? e : t;
}
function fe(e, t) {
	return e !== void 0 && Number.isFinite(e) ? e : t;
}
//#endregion
//#region node_modules/@tanstack/charts/dist/nearest.js
var pe = /* @__PURE__ */ new WeakMap();
function me(e, t, n, r) {
	let i, a = Infinity;
	for (let r = e.length; r--;) {
		let o = e[r], s = o.x - t, c = o.y - n, l = s * s + c * c;
		l <= a && (i = o, a = l);
	}
	return i && a <= Math.max(0, r) ** 2 ? i : null;
}
function he(e, t, n, r) {
	let i = ge(e);
	if (!i.targets.length && !i.attachedPoints.size) return me(e.points, t, n, r);
	for (let e = i.targets.length; e--;) {
		let r = i.targets[e];
		if (je(r.bounds, t, n) && ye(r, t, n)) return ve(r.node.interaction, t, n);
	}
	let a, o, s = Infinity, c = Infinity;
	for (let e of i.targets) {
		let r = e.node.interaction, i = r.affinity ?? "xy";
		if (i === "geometry") continue;
		let l = i === "x" ? "x" : i === "y" ? "y" : void 0, u = l ? Me(e.bounds, l === "x" ? t : n, l) : be(e, t, n);
		if (u > s) continue;
		let d = l ? be(e, t, n) : u;
		(u < s || u === s && d < c) && (o = r, a = void 0, s = u, c = d);
	}
	if (s !== 0) for (let r of e.points) {
		if (i.attachedPoints.has(r)) continue;
		let e = r.x - t, l = r.y - n, u = e * e + l * l;
		u < s && (a = r, o = void 0, s = u, c = u);
	}
	return s > Math.max(0, r) ** 2 ? null : a ?? (o ? ve(o, t, n) : void 0) ?? null;
}
function ge(e) {
	let t = pe.get(e);
	if (t) return t;
	let n = [], r = /* @__PURE__ */ new Set();
	_e(e.nodes, 0, 0, void 0, n, r);
	let i = {
		targets: n,
		attachedPoints: r
	};
	return pe.set(e, i), i;
}
function _e(e, t, n, r, i, a) {
	for (let o of e) {
		if (o.kind === "group") {
			if (o.focus) continue;
			let e = t + (o.translateX ?? 0), s = n + (o.translateY ?? 0), c = o.clip ? Oe(o.clip, e, s) : void 0, l = r === null ? null : Ae(r, c);
			_e(o.children, e, s, l, i, a);
			continue;
		}
		if (o.kind === "label" || !o.interaction) continue;
		if (o.interaction.point) a.add(o.interaction.point);
		else for (let e of o.interaction.points) a.add(e);
		if (r === null) continue;
		let e = xe(o);
		if (!e) continue;
		let s = Oe(e, t, n), c = r ? Ae(s, r) : s;
		c != null && i.push({
			node: o,
			offsetX: t,
			offsetY: n,
			bounds: c,
			clip: r
		});
	}
}
function ve(e, t, n) {
	if (e.point) return e.point;
	let r = e.affinity ?? "xy", i, a = Infinity, o = Infinity;
	for (let s of e.points) {
		let e = s.x - t, c = s.y - n, l = e * e + c * c, u = r === "x" ? e * e : r === "y" ? c * c : l;
		(u < a || u === a && l < o) && (i = s, a = u, o = l);
	}
	return i ?? null;
}
function ye(e, t, n) {
	let r = t - e.offsetX, i = n - e.offsetY, { node: a } = e;
	switch (a.kind) {
		case "rect": return Se(a, r, i);
		case "dot": {
			let e = r - a.x, t = i - a.y, n = Math.max(0, a.radius);
			return e * e + t * t <= n * n;
		}
		case "area": return we(a.points, r, i);
		case "polyline": return Te(a.points, r, i, !1) <= W(a) ** 2;
		case "rule": return Ee(a.x1, a.y1, a.x2, a.y2, r, i) <= W(a) ** 2;
	}
}
function be(e, t, n) {
	let r = t - e.offsetX, i = n - e.offsetY, { node: a } = e, o;
	switch (a.kind) {
		case "rect":
			o = a.radius ? Ce(a, r, i) : Ne(a, r, i);
			break;
		case "dot": {
			let e = r - a.x, t = i - a.y, n = Math.max(0, Math.sqrt(e * e + t * t) - Math.max(0, a.radius));
			o = n * n;
			break;
		}
		case "area":
			o = Te(a.points, r, i, !0);
			break;
		case "polyline": {
			let e = Te(a.points, r, i, !1), t = Math.max(0, Math.sqrt(e) - W(a));
			o = t * t;
			break;
		}
		case "rule": {
			let e = Ee(a.x1, a.y1, a.x2, a.y2, r, i), t = Math.max(0, Math.sqrt(e) - W(a));
			o = t * t;
			break;
		}
	}
	return e.clip ? Math.max(o, Ne(e.clip, t, n)) : o;
}
function xe(e) {
	switch (e.kind) {
		case "rect": return U(e);
		case "dot": {
			let t = Math.max(0, e.radius);
			return {
				x: e.x - t,
				y: e.y - t,
				width: t * 2,
				height: t * 2
			};
		}
		case "area": return De(e.points);
		case "polyline": {
			let t = De(e.points);
			return t ? ke(t, W(e)) : null;
		}
		case "rule": return ke({
			x: Math.min(e.x1, e.x2),
			y: Math.min(e.y1, e.y2),
			width: Math.abs(e.x2 - e.x1),
			height: Math.abs(e.y2 - e.y1)
		}, W(e));
	}
}
function Se(e, t, n) {
	let r = U(e);
	if (!je(r, t, n)) return !1;
	let i = Math.max(0, Math.min(e.radius ?? 0, r.width / 2, r.height / 2));
	if (i === 0 || t >= r.x + i && t <= r.x + r.width - i || n >= r.y + i && n <= r.y + r.height - i) return !0;
	let a = t < r.x + i ? r.x + i : r.x + r.width - i, o = n < r.y + i ? r.y + i : r.y + r.height - i, s = t - a, c = n - o;
	return s * s + c * c <= i * i;
}
function Ce(e, t, n) {
	let r = U(e), i = r.width / 2, a = r.height / 2, o = Math.max(0, Math.min(e.radius ?? 0, i, a)), s = Math.abs(t - (r.x + i)) - (i - o), c = Math.abs(n - (r.y + a)) - (a - o), l = Math.sqrt(Math.max(0, s) ** 2 + Math.max(0, c) ** 2) - o;
	return Math.max(0, l) ** 2;
}
function we(e, t, n) {
	let r = !1;
	for (let i = 0, a = e.length - 1; i < e.length; a = i++) {
		let o = e[i], s = e[a];
		o[1] > n != s[1] > n && t < (s[0] - o[0]) * (n - o[1]) / (s[1] - o[1]) + o[0] && (r = !r);
	}
	return r;
}
function Te(e, t, n, r) {
	if (!e.length) return Infinity;
	if (e.length === 1) {
		let r = e[0];
		return (r[0] - t) ** 2 + (r[1] - n) ** 2;
	}
	let i = Infinity, a = r ? e.length : Math.max(0, e.length - 1);
	for (let r = 0; r < a; r += 1) {
		let a = e[r], o = e[(r + 1) % e.length];
		i = Math.min(i, Ee(a[0], a[1], o[0], o[1], t, n));
	}
	return i;
}
function Ee(e, t, n, r, i, a) {
	let o = n - e, s = r - t, c = o * o + s * s, l = c ? Math.max(0, Math.min(1, ((i - e) * o + (a - t) * s) / c)) : 0, u = i - (e + l * o), d = a - (t + l * s);
	return u * u + d * d;
}
function De(e) {
	let t = Infinity, n = Infinity, r = -Infinity, i = -Infinity;
	for (let a of e) !Number.isFinite(a[0]) || !Number.isFinite(a[1]) || (t = Math.min(t, a[0]), n = Math.min(n, a[1]), r = Math.max(r, a[0]), i = Math.max(i, a[1]));
	return Number.isFinite(t) ? {
		x: t,
		y: n,
		width: r - t,
		height: i - n
	} : null;
}
function U(e) {
	return {
		x: Math.min(e.x, e.x + e.width),
		y: Math.min(e.y, e.y + e.height),
		width: Math.abs(e.width),
		height: Math.abs(e.height)
	};
}
function Oe(e, t, n) {
	let r = U(e);
	return {
		...r,
		x: r.x + t,
		y: r.y + n
	};
}
function ke(e, t) {
	return {
		x: e.x - t,
		y: e.y - t,
		width: e.width + t * 2,
		height: e.height + t * 2
	};
}
function Ae(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = Math.max(e.x, t.x), r = Math.max(e.y, t.y), i = Math.min(e.x + e.width, t.x + t.width), a = Math.min(e.y + e.height, t.y + t.height);
	return i < n || a < r ? null : {
		x: n,
		y: r,
		width: i - n,
		height: a - r
	};
}
function je(e, t, n) {
	return t >= e.x && t <= e.x + e.width && n >= e.y && n <= e.y + e.height;
}
function Me(e, t, n) {
	let r = n === "x" ? e.x : e.y, i = n === "x" ? e.width : e.height, a = t < r ? r - t : t > r + i ? t - r - i : 0;
	return a * a;
}
function Ne(e, t, n) {
	let r = U(e), i = t < r.x ? r.x - t : t > r.x + r.width ? t - r.x - r.width : 0, a = n < r.y ? r.y - n : n > r.y + r.height ? n - r.y - r.height : 0;
	return i * i + a * a;
}
function W(e) {
	return Math.max(0, e.style?.strokeWidth ?? 1) / 2;
}
//#endregion
//#region node_modules/@tanstack/charts/dist/scene-source.js
var Pe = /* @__PURE__ */ Symbol("chart-scene-source"), Fe = {
	foreground: "currentColor",
	muted: "currentColor",
	grid: "currentColor",
	background: "transparent",
	palette: [
		"var(--ts-chart-1, #2563eb)",
		"var(--ts-chart-2, #f97316)",
		"var(--ts-chart-3, #10b981)",
		"var(--ts-chart-4, #8b5cf6)",
		"var(--ts-chart-5, #ec4899)",
		"var(--ts-chart-6, #06b6d4)"
	]
};
function Ie(e, t) {
	return t ? {
		...e,
		...t
	} : typeof e == "function" ? { chart: e } : e;
}
function Le(e, t, n = {}) {
	return ze(e, t, (e) => {
		if (!e.options?.scale) throw TypeError(`Chart scale "${e.id}" requires a configured scale`);
		return Re(e.options.scale, e);
	}, n);
}
function Re(e, t) {
	return typeof e == "function" ? oe(e, t) : e.resolve(t);
}
function ze(e, t, n, r) {
	let i = ut(t.width), a = ut(t.height), o = {
		...Fe,
		...e.theme,
		palette: e.theme?.palette ?? Fe.palette
	}, s = e.marks.map((e, t) => e.initialize({ markIndex: t })), c = b(He(s, "color").values, e.color, o);
	if (c.kind !== "categorical" && s.some((e) => e.seriesFromColor)) throw TypeError("A continuous color channel cannot infer series identity; supply z explicitly");
	let l = c.domain.length ? e.color?.legend : void 0, u = He(s, "x"), d = He(s, "y"), f = e.guides === !1 ? 0 : (e.x != null && e.x.axis !== !1) | (e.y != null && e.y.axis !== !1) << 1, { margin: p, chart: m, scales: h, axes: g } = Ge(e, s, i, a, o, u, d, c, l, f, n, r), _ = [], v = [], y = s.findIndex((e) => !e.focus);
	s.forEach((e, t) => {
		let n = e.render({
			markIndex: t,
			chart: m,
			scales: h,
			theme: o,
			color: c.map,
			colors: c,
			layout: r
		}), i = Ve(n.nodes, n.points);
		if (e.focus) _.push({
			kind: "group",
			key: `focus:${e.id}`,
			className: "ts-chart__focus-layer",
			ariaHidden: !0,
			focus: {
				match: e.focus.match ?? "primary",
				points: i,
				placement: y < 0 || t < y ? "under" : "over"
			},
			children: n.nodes
		});
		else {
			let t = i;
			if (e.states) _.push({
				kind: "group",
				key: `states:${e.id}`,
				children: n.nodes,
				states: {
					data: e.states.data,
					definitions: e.states.definitions,
					points: t
				}
			});
			else for (let e of n.nodes) _.push(e);
			for (let e of t) v.push(e);
		}
	});
	let x = [{
		kind: "group",
		key: "marks",
		className: "ts-chart__marks",
		clip: e.clip ? m : void 0,
		children: _
	}];
	return e.guides !== !1 && (e.x?.grid || e.y?.grid) && x.unshift(Qe(m, h, e, o)), f && x.push(g), l && x.push(l.render({
		colors: c,
		chart: m,
		theme: o,
		width: i
	})), e.focus !== !1 && e.focusRing !== !1 && v.length && x.push({
		kind: "group",
		key: "default-focus",
		className: "ts-chart__focus-layer ts-chart__focus-layer--default",
		ariaHidden: !0,
		focus: {
			match: "primary",
			points: v,
			placement: "over"
		},
		children: v.map((e) => ({
			kind: "dot",
			key: e.key,
			x: e.x,
			y: e.y,
			radius: 5,
			style: {
				fill: "var(--ts-chart-focus-fill, Canvas)",
				stroke: e.color,
				strokeWidth: 2.5
			}
		}))
	}), {
		width: i,
		height: a,
		margin: p,
		chart: m,
		nodes: x,
		points: v,
		scales: h,
		colors: c,
		gradients: e.gradients ?? [],
		theme: o,
		[Pe]: [e, s]
	};
}
function Be(e, t, n, r = Infinity) {
	return he(e, t, n, r);
}
function Ve(e, t) {
	let n = t ? [...t] : [], r = new Set(n), i = (e) => {
		for (let t of e) {
			if (t.kind === "group") {
				t.focus || i(t.children);
				continue;
			}
			if (t.kind === "label" || !t.interaction) continue;
			let e = t.interaction;
			if (e.point) r.has(e.point) || (r.add(e.point), n.push(e.point));
			else for (let t of e.points) r.has(t) || (r.add(t), n.push(t));
		}
	};
	return i(e), n;
}
function He(e, t) {
	let n = [], r = !1, i = !1;
	for (let a of e) for (let e of Object.values(a.channels)) if (e.scale === t) {
		i = !0;
		for (let t of e.values) n.push(t);
		r ||= e.includeZero ?? !1;
	}
	return {
		values: n,
		includeZero: r,
		materialized: i
	};
}
var G = 4, Ue = 4, We = .25;
function Ge(e, t, n, r, i, a, o, s, c, l, u, d) {
	let f = qe(e.margin), p = K(Xe(l ? G : 0), f), m = p;
	for (let e = 0; e < Ue; e += 1) {
		let e = _(p), t = v(e);
		if (m = K(t, f, m), Ye(p, t)) return e;
		p = t;
	}
	let h = _(m), g = K(v(h), f, m);
	return Ye(m, g) || (h = _(g)), h;
	function _(t) {
		let s = {
			x: t.left,
			y: t.top,
			width: Math.max(1, n - t.left - t.right),
			height: Math.max(1, r - t.top - t.bottom)
		}, c = et(e.x, s.width, 92, 8), f = et(e.y, s.height, 48, 7), p = {
			x: e.x == null ? Ze("x", a.materialized, e.x) : u({
				id: "x",
				values: a.values,
				range: [s.x, s.x + s.width],
				options: e.x,
				tickCount: c,
				includeZero: a.includeZero
			}),
			y: e.y == null ? Ze("y", o.materialized, e.y) : u({
				id: "y",
				values: o.values,
				range: [s.y + s.height, s.y],
				options: e.y,
				tickCount: f,
				includeZero: o.includeZero
			})
		}, m = $e(s, p, e, i, n, l, d.measureText);
		return {
			margin: t,
			chart: s,
			scales: p,
			axes: m.axes,
			guideMargin: m.margin
		};
	}
	function v(n) {
		let r = n.guideMargin;
		return c && f.top === void 0 && (r.top = Math.max(r.top, c.height(s.domain.length, n.chart.width, s))), e.clip || t.forEach((e, t) => {
			let a = e.layoutLabels?.({
				markIndex: t,
				chart: n.chart,
				scales: n.scales,
				theme: i,
				color: s.map,
				colors: s,
				layout: d
			});
			for (let e of a ?? []) Ke(r, n.chart, e, d.measureText);
		}), K(r, f);
	}
}
function Ke(e, t, n, r) {
	let i = le(n, r);
	return n.text ? (e.top = Math.max(e.top, t.y - i.y + G), e.right = Math.max(e.right, i.x + i.width - t.x - t.width + G), e.bottom = Math.max(e.bottom, i.y + i.height - t.y - t.height + G), e.left = Math.max(e.left, t.x - i.x + G), i) : i;
}
function qe(e) {
	if (typeof e == "number") return Xe(q(e));
	if (!e) return {};
	let t = {};
	for (let n of Je) e[n] !== void 0 && (t[n] = q(e[n]));
	return t;
}
var Je = [
	"top",
	"right",
	"bottom",
	"left"
];
function K(e, t, n) {
	let r = { ...e };
	for (let i of Je) r[i] = t[i] ?? (n ? Math.max(n[i], e[i]) : e[i]);
	return r;
}
function Ye(e, t) {
	return Je.every((n) => Math.abs(e[n] - t[n]) <= We);
}
function q(e) {
	return e !== void 0 && Number.isFinite(e) ? Math.max(0, e) : 0;
}
function Xe(e) {
	return {
		top: e,
		right: e,
		bottom: e,
		left: e
	};
}
function Ze(e, t, n) {
	if (t) throw TypeError(n === null ? `Chart scale "${e}" cannot be null when a mark materializes its channel` : `Chart scale "${e}" requires a configured scale when a mark materializes its channel`);
	return {
		id: e,
		type: "none",
		domain: [],
		map: () => {
			throw TypeError(`Chart scale "${e}" is not configured`);
		},
		ticks: [],
		bandwidth: 0
	};
}
function Qe(e, t, n, r) {
	let i = [];
	if (n.y?.grid) for (let n of t.y.ticks) i.push({
		kind: "rule",
		key: `y-grid:${O(n.value)}`,
		x1: e.x,
		x2: e.x + e.width,
		y1: n.position,
		y2: n.position
	});
	if (n.x?.grid) for (let n of t.x.ticks) i.push({
		kind: "rule",
		key: `x-grid:${O(n.value)}`,
		x1: n.position,
		x2: n.position,
		y1: e.y,
		y2: e.y + e.height
	});
	return {
		kind: "group",
		key: "grid",
		className: "ts-chart__grid",
		ariaHidden: !0,
		children: i,
		style: {
			stroke: r.grid,
			strokeOpacity: .11,
			strokeWidth: 1
		}
	};
}
function $e(e, t, n, r, i, a, o) {
	let s = a & 1, c = a & 2, l = tt(n.x), u = tt(n.y), d = !s || l?.line === !1 ? [] : [{
		kind: "rule",
		key: "x-axis",
		x1: e.x,
		x2: e.x + e.width,
		y1: e.y + e.height,
		y2: e.y + e.height,
		style: {
			stroke: r.foreground,
			strokeOpacity: .28
		}
	}];
	c && u?.line !== !1 && d.push({
		kind: "rule",
		key: "y-axis",
		x1: e.x,
		x2: e.x,
		y1: e.y,
		y2: e.y + e.height,
		style: {
			stroke: r.foreground,
			strokeOpacity: .28
		}
	});
	let f = nt(l), p = nt(u), m = f === !1 ? void 0 : f.rotate, h = e.y + e.height, g = e.x, _ = Xe(a ? G : 0), v = (t) => Ke(_, e, t, o), y = l?.ticks === !1 ? [] : t.x.ticks, b = u?.ticks === !1 ? [] : t.y.ticks, x = q(l?.ticks === !1 ? 0 : l?.ticks?.size ?? 4), S = q(u?.ticks === !1 ? 0 : u?.ticks?.size ?? 4), C = q(l?.ticks === !1 ? 0 : l?.ticks?.padding ?? 4), w = q(u?.ticks === !1 ? 0 : u?.ticks?.padding ?? 4), T = f === !1 ? [] : it("x", rt(t.x, n.x, f), e, x, C, m, i, r, o), E = p === !1 ? [] : it("y", rt(t.y, n.y, p), e, S, w, p.rotate, i, r, o), D = f === !1 ? [] : at(T, f, t.x.type === "band"), k = p === !1 ? [] : at(E, p, !1);
	for (let t of s ? y : []) {
		let n = O(t.value);
		x > 0 && d.push({
			kind: "rule",
			key: `x-tick-rule:${n}`,
			x1: t.position,
			x2: t.position,
			y1: e.y + e.height,
			y2: e.y + e.height + x,
			style: {
				stroke: r.foreground,
				strokeOpacity: .28
			}
		});
	}
	for (let e of s ? D : []) {
		let t = v(e.label);
		J(l) && Y(l) === "auto" && (h = Math.max(h, t.y + t.height)), d.push(e.label);
	}
	for (let t of c ? b : []) {
		let n = O(t.value);
		S > 0 && d.push({
			kind: "rule",
			key: `y-tick-rule:${n}`,
			x1: e.x - S,
			x2: e.x,
			y1: t.position,
			y2: t.position,
			style: {
				stroke: r.foreground,
				strokeOpacity: .28
			}
		});
	}
	for (let e of c ? k : []) {
		let t = v(e.label);
		J(u) && Y(u) === "auto" && (g = Math.min(g, t.x)), d.push(e.label);
	}
	let A = J(l);
	if (s && A) {
		let t = Y(l), n = t !== "auto", a = {
			kind: "label",
			key: "x-label",
			x: e.x + e.width / 2,
			y: n ? e.y + e.height + Math.max(0, q(t)) : h + 8,
			text: A,
			anchor: "middle",
			baseline: n ? "auto" : "hanging",
			fontSize: i < 360 ? 10 : 11,
			fontWeight: 600,
			style: {
				fill: r.foreground,
				fillOpacity: .76
			}
		};
		v(a), d.push(a);
	}
	let j = J(u);
	if (c && j) {
		let t = {
			kind: "label",
			key: "y-label",
			x: e.x,
			y: e.y + e.height / 2,
			text: j,
			anchor: "middle",
			baseline: "middle",
			rotate: -90,
			fontSize: 11,
			fontWeight: 600,
			style: {
				fill: r.foreground,
				fillOpacity: .76
			}
		}, n = Y(u);
		if (n !== "auto") t.x = e.x - Math.max(0, q(n));
		else {
			let e = le({
				...t,
				x: 0,
				y: 0
			}, o);
			t.x = g - 8 - (e.x + e.width);
		}
		v(t), d.push(t);
	}
	return {
		axes: {
			kind: "group",
			key: "axes",
			className: "ts-chart__axes",
			ariaHidden: !0,
			children: d
		},
		margin: _
	};
}
function et(e, t, n, r) {
	let i = e?.axis === !1 ? void 0 : e?.axis?.ticks;
	if (i === !1) return Math.max(2, Math.min(r, Math.floor(t / n)));
	let a = i ?? {};
	if ([
		a.count !== void 0,
		a.spacing !== void 0,
		a.values !== void 0
	].filter(Boolean).length > 1) throw TypeError("Axis ticks accept only one candidate policy: count, spacing, or values");
	if (a.values) return Math.max(1, a.values.length);
	if (a.count !== void 0) return Math.max(1, Math.floor(q(a.count)));
	if (a.spacing !== void 0) {
		let e = Math.max(1, q(a.spacing));
		return Math.max(1, Math.floor(t / e));
	}
	return Math.max(2, Math.min(r, Math.floor(t / n)));
}
function tt(e) {
	if (!(!e || e.axis === !1)) return e.axis ?? {};
}
function nt(e) {
	return e?.ticks === !1 || e?.tickLabels === !1 ? !1 : e?.tickLabels ?? {};
}
function J(e) {
	return typeof e?.label == "string" ? e.label : e?.label?.text;
}
function Y(e) {
	return typeof e?.label == "object" ? e.label.offset ?? "auto" : "auto";
}
function rt(e, t, n) {
	let r = (typeof n.thin == "object" ? n.thin : void 0)?.keep ?? [];
	if (!r.length) return e.ticks;
	let i = t?.axis === !1 || t?.axis?.ticks === !1 ? void 0 : t?.axis?.ticks?.format, a = e.ticks.map((e) => ({
		...e,
		hard: r.some((t) => O(t) === O(e.value))
	})), o = new Set(a.map((e) => O(e.value)));
	for (let t of r) {
		let n = e.map(t);
		o.has(O(t)) || !Number.isFinite(n) || a.push({
			value: t,
			position: n,
			label: i?.(t) ?? lt(t),
			hard: !0
		});
	}
	return a;
}
function it(e, t, n, r, i, a, o, s, c) {
	let l = o < 360 ? 10 : 11;
	return t.map((t) => {
		let o = e === "x" ? {
			kind: "label",
			key: `x-tick-label:${O(t.value)}`,
			x: t.position,
			y: n.y + n.height + r + i + l * .8,
			text: t.label,
			anchor: (a ?? 0) < 0 ? "end" : (a ?? 0) > 0 ? "start" : "middle",
			rotate: a,
			fontSize: l,
			style: {
				fill: s.muted,
				fillOpacity: .68
			}
		} : {
			kind: "label",
			key: `y-tick-label:${O(t.value)}`,
			x: n.x - r - i,
			y: t.position,
			text: t.label,
			anchor: "end",
			baseline: "middle",
			rotate: a,
			fontSize: l,
			style: {
				fill: s.muted,
				fillOpacity: .68
			}
		};
		return {
			value: t.value,
			label: o,
			bounds: le(o, c),
			hard: t.hard ?? !1
		};
	});
}
function at(e, t, n) {
	if (t.thin === !1 || e.length < 2) return [...e];
	let r = typeof t.thin == "object" ? t.thin : {}, i = Math.max(0, q(r.minGap ?? 4)), a = e.filter((e) => e.hard), o = e.filter((e) => !e.hard);
	if ((r.priority === "ends" || n) && o.length) {
		let e = o[0], t = o.at(-1);
		st(e, a, i) || a.push(e), t !== e && !st(t, a, i) && a.push(t);
	}
	let s = ot(o.filter((e) => !a.includes(e)));
	for (let e of s) st(e, a, i) || a.push(e);
	let c = new Set(a);
	return e.filter((e) => c.has(e));
}
function ot(e) {
	if (e.length < 3) return [...e];
	let t = [], n = [e];
	for (; n.length;) {
		let e = n.shift();
		if (!e.length) continue;
		let r = Math.floor(e.length / 2);
		t.push(e[r]), n.push(e.slice(0, r), e.slice(r + 1));
	}
	return t;
}
function st(e, t, n) {
	return t.some((t) => ct(e.bounds, t.bounds, n));
}
function ct(e, t, n) {
	return !(e.x + e.width + n <= t.x || t.x + t.width + n <= e.x || e.y + e.height + n <= t.y || t.y + t.height + n <= e.y);
}
function lt(e) {
	return e instanceof Date ? e.toLocaleDateString() : String(e);
}
function ut(e) {
	return Number.isFinite(e) ? Math.max(1, e) : 1;
}
//#endregion
//#region node_modules/@tanstack/charts/dist/runtime.js
function dt() {
	return {
		render(e, t, n) {
			if (!ft(e)) return Le(e, t, n);
			let { chart: r, ...i } = e;
			return Le({
				...r({
					width: t.width,
					height: t.height,
					theme: Fe
				}),
				...i
			}, t, n);
		},
		destroy() {}
	};
}
function ft(e) {
	return "chart" in e && typeof e.chart == "function";
}
//#endregion
//#region node_modules/@tanstack/charts/dist/dom-text.js
function pt(e) {
	let t = e.ownerDocument.defaultView, n = t?.CanvasRenderingContext2D ? e.ownerDocument.createElement("canvas").getContext("2d") : null, r = o(), i = gt(r), a = /* @__PURE__ */ new Map();
	return {
		measureText(e, t) {
			if (!n) return ce(e, t);
			let o = `${i}\0${t.fontSize}\0${t.fontWeight ?? ""}\0${t.anchor}\0${t.baseline}\0${e}`, s = a.get(o);
			if (s) return s;
			mt(n, r, t);
			let c = ht(n.measureText(e), t);
			return a.set(o, c), c;
		},
		refresh() {
			let e = o(), t = gt(e);
			return t !== i && (r = e, i = t, a.clear(), !0);
		},
		invalidate() {
			a.clear();
		}
	};
	function o() {
		let n = t?.getComputedStyle(e);
		return {
			family: n?.fontFamily || "sans-serif",
			style: n?.fontStyle || "normal",
			stretch: _t(n?.fontStretch),
			weight: n?.fontWeight || "400",
			direction: n?.direction === "rtl" ? "rtl" : n?.direction === "ltr" ? "ltr" : "inherit",
			letterSpacing: n?.letterSpacing || "0px"
		};
	}
}
function mt(e, t, n) {
	let r = n.fontWeight ?? t.weight;
	e.font = [
		t.style,
		r,
		`${n.fontSize}px`,
		t.family
	].join(" "), "fontStretch" in e && (e.fontStretch = t.stretch), e.textAlign = n.anchor === "middle" ? "center" : n.anchor, e.textBaseline = n.baseline === "auto" ? "alphabetic" : n.baseline, e.direction = t.direction, "letterSpacing" in e && (e.letterSpacing = t.letterSpacing);
}
function ht(e, t) {
	let n = e.actualBoundingBoxLeft, r = e.actualBoundingBoxRight, i = e.actualBoundingBoxAscent, a = e.actualBoundingBoxDescent;
	if ([
		n,
		r,
		i,
		a
	].every((e) => Number.isFinite(e)) && (n + r > 0 || e.width === 0) && (i + a > 0 || e.width === 0)) return {
		x: -n,
		y: -i,
		width: n + r,
		height: i + a
	};
	let o = Number.isFinite(e.width) ? Math.max(0, e.width) : 0;
	return {
		x: t.anchor === "middle" ? -o / 2 : t.anchor === "end" ? -o : 0,
		y: t.baseline === "middle" ? -t.fontSize / 2 : t.baseline === "hanging" ? 0 : -t.fontSize * .8,
		width: o,
		height: t.fontSize
	};
}
function gt(e) {
	return [
		e.family,
		e.style,
		e.stretch,
		e.weight,
		e.direction,
		e.letterSpacing
	].join("\0");
}
function _t(e) {
	if (e === "ultra-condensed" || e === "extra-condensed" || e === "condensed" || e === "semi-condensed" || e === "normal" || e === "semi-expanded" || e === "expanded" || e === "extra-expanded" || e === "ultra-expanded") return e;
	let t = Number.parseFloat(e ?? "");
	return Number.isFinite(t) ? t <= 50 ? "ultra-condensed" : t <= 62.5 ? "extra-condensed" : t <= 75 ? "condensed" : t <= 87.5 ? "semi-condensed" : t < 112.5 ? "normal" : t < 125 ? "semi-expanded" : t < 150 ? "expanded" : t < 200 ? "extra-expanded" : "ultra-expanded" : "normal";
}
//#endregion
//#region node_modules/@tanstack/charts/dist/focus.js
var vt = X("x", !0), yt = X("y", !0), bt = X("x", !1), xt = X("y", !1);
function X(e, t) {
	let n = (t) => e === "x" ? t.x : t.y, r = (t) => e === "x" ? t.xValue : t.yValue, i = (t) => e === "x" ? t.y : t.x;
	return {
		resolve(a, o, s, c) {
			let l = e === "x" ? o : s, u, d = c;
			for (let e of a) {
				let t = Math.abs(n(e) - l);
				t >= d || (u = e, d = t);
			}
			if (!u) return [];
			let f = St(a, u, r), p = e === "x" ? s : o, m = f.reduce((e, t) => Math.abs(i(t) - p) < Math.abs(i(e) - p) ? t : e, u);
			return t ? [m, ...f.filter((e) => e !== m)] : [m];
		},
		group(e, n) {
			return t ? St(e, n, r) : [n];
		},
		navigation(e) {
			let n = [...e].sort((e, t) => e.x - t.x || e.y - t.y);
			if (!t) return n;
			let i = /* @__PURE__ */ new Map();
			for (let e of n) {
				let t = O(r(e));
				i.has(t) || i.set(t, e);
			}
			return [...i.values()];
		}
	};
}
function St(e, t, n) {
	let r = O(n(t)), i = /* @__PURE__ */ new Map();
	i.set(O(t.group), t);
	for (let t of e) {
		if (O(n(t)) !== r) continue;
		let e = O(t.group);
		i.has(e) || i.set(e, t);
	}
	return [t, ...[...i.values()].sort((e, t) => e.y - t.y).filter((e) => e !== t)];
}
//#endregion
//#region node_modules/@tanstack/charts/dist/focus-disabled.js
var Ct = {
	resolve: () => [],
	group: () => [],
	navigation: () => []
};
//#endregion
//#region node_modules/@tanstack/charts/dist/renderer.js
function wt(e, t, n = dt()) {
	let r = t, i, a, o = null, s = "pointer", c = null, l = null, u, d, f = !1, p, m = !1, h = !1, g, _, v, y = !1, b, x = e.style.position, S = e.ownerDocument.defaultView, C = S?.getComputedStyle(e).position, w = !C || C === "static", T = pt(e), E = e.ownerDocument.fonts;
	w && (e.style.position = "relative");
	let D = (t = !1, n = "update") => {
		if (m) return;
		t && !r.measureText && T.refresh();
		let c = o;
		i = ne(), a = i, g ? g.renderer !== r.renderer && (g?.destroy(), B(), e.replaceChildren(), g = r.renderer.mount(e, A), h = !1) : g = r.renderer.mount(e, A), g.render(i, {
			ariaLabel: r.ariaLabel,
			ariaDescription: r.ariaDescription,
			className: r.className,
			tabIndex: r.definition.keyboard === !1 || r.definition.focus === !1 ? -1 : r.tabIndex ?? 0,
			idPrefix: r.idPrefix,
			animation: h ? Mt(r.definition.animate, e, n) : void 0
		}), h = !0, b = r.definition.focus === !1 ? void 0 : r.definition.spatialIndex?.(i.points, i);
		let u = r.definition.focus === !1 ? null : c ? Ot(i.points, c) : null;
		if (o = u, u || (l = null), c) {
			s = "restored";
			let e = u ? z(u) : [];
			N(u, e), r.onFocusChange?.(u), r.onFocusGroupChange?.(e);
		}
		let d = r.onRender;
		d && d({
			container: e,
			scene: i,
			surface: g
		});
	}, O = () => {
		let t = r.width ?? e.getBoundingClientRect().width;
		return r.width !== void 0 || t > 0 ? t : void 0;
	}, k = () => {
		if (u?.disconnect(), u = void 0, r.width !== void 0) return;
		let t = S?.ResizeObserver;
		t && (u = new t(() => {
			let e = O();
			e !== void 0 && e !== i.width && A(!1, "resize");
		}), u.observe(e));
	}, A = (e = !1, t = "layout") => {
		if (f ||= e, p = p === "layout" || t === "layout" ? "layout" : "resize", d === void 0) {
			if (!S?.requestAnimationFrame) {
				let e = O(), t = f || e !== void 0 && e !== i.width;
				f = !1;
				let n = p ?? "layout";
				p = void 0, t && D(!0, n);
				return;
			}
			d = S.requestAnimationFrame(() => {
				d = void 0;
				let e = O(), t = f || e !== void 0 && e !== i.width;
				f = !1;
				let n = p ?? "layout";
				p = void 0, t && D(!0, n);
			});
		}
	}, j = () => {
		m || r.measureText || (T.invalidate(), A(!0));
	}, M = (e, t = !1) => {
		let n = e[0] ?? null;
		if (Dt(n, o)) {
			t && ae(n, e);
			return;
		}
		o = n, N(n, e), r.onFocusChange?.(n), r.onFocusGroupChange?.(e);
	}, ee = () => {
		if (!o && !l) return;
		let t = !!v?.contains(e.ownerDocument.activeElement);
		l = null, c = null, M([]);
		let n = g?.element;
		t && n && "focus" in n && typeof n.focus == "function" && (y = !0, n.focus());
	}, N = (e, t) => {
		a = g?.paintFocus(e ? {
			primary: e,
			group: t,
			source: s,
			pinned: l !== null
		} : null, c) ?? i, ae(e, t);
	}, P = (e, t) => {
		let n = g?.clientToScene(i, e, t);
		if (c = n ?? null, !n) return [];
		let a = r.definition.maxFocusDistance ?? 48;
		return re(n.x, n.y, a);
	}, F = (e) => {
		l || (s = "pointer", M(P(e.clientX, e.clientY), se()));
	}, I = ({ relatedTarget: t }) => {
		!l && !(S && t instanceof S.Node && e.contains(t)) && (c = null, M([]));
	}, L = (e) => {
		if (v?.contains(e.target)) return;
		let t = P(e.clientX, e.clientY);
		s = "pointer";
		let n = t[0] ?? null, i = !1;
		V() && (l ? (l = null, i = !0) : n && (l = n.key, i = !0)), M(t, i), r.onSelect?.(n);
	}, R = (e) => {
		if (r.definition.keyboard === !1 || !i.points.length) return;
		if (e.key === "Escape" && l) {
			e.preventDefault(), ee();
			return;
		}
		if (e.key === "Enter" || e.key === " ") {
			if (!o) return;
			e.preventDefault(), V() && (l = l ? null : o.key, N(o, z(o))), r.onSelect?.(o);
			return;
		}
		let t = jt(r.definition.focus), n = t ? Nt(t.navigation(i.points), o, e.key) : Pt(i.points, o, e.key);
		n !== void 0 && (e.preventDefault(), c = null, s = "keyboard", M(n ? z(n) : []));
	}, te = (e) => {
		if (e.target === g?.element && y) {
			y = !1;
			return;
		}
		if (r.definition.keyboard !== !1 && e.target === g?.element && !o) {
			let e = jt(r.definition.focus), t = e ? e.navigation(i.points)[0] : Pt(i.points, null, "Home");
			c = null, s = "keyboard", M(t ? z(t) : []);
		}
	};
	return e.addEventListener("pointermove", F), e.addEventListener("pointercancel", I), e.addEventListener("mouseleave", I), e.addEventListener("click", L), e.addEventListener("keydown", R), e.addEventListener("focusin", te), e.addEventListener("focusout", I), E?.addEventListener?.("loadingdone", j), D(), k(), {
		update(e) {
			if (m) return;
			let t = e.measureText === void 0 && T.refresh(), n = r.definition !== e.definition, i = r.height !== e.height || r.aspectRatio !== e.aspectRatio || r.width !== e.width || r.initialWidth !== e.initialWidth, a = r.idPrefix !== e.idPrefix || r.renderer !== e.renderer || r.measureText !== e.measureText || t, s = n || i || r.ariaLabel !== e.ariaLabel || r.ariaDescription !== e.ariaDescription || r.className !== e.className || r.tabIndex !== e.tabIndex || r.idPrefix !== e.idPrefix || r.renderer !== e.renderer || r.measureText !== e.measureText || t, c = r.width !== e.width;
			r = e, oe(), V() || (l = null), s ? D(!1, a ? "layout" : i ? "resize" : "update") : o && N(o, z(o)), c && k();
		},
		getScene: () => i,
		destroy() {
			m || (m = !0, u?.disconnect(), E?.removeEventListener?.("loadingdone", j), d !== void 0 && S?.cancelAnimationFrame?.(d), B(), g?.destroy(), n.destroy(), e.removeEventListener("pointermove", F), e.removeEventListener("pointercancel", I), e.removeEventListener("mouseleave", I), e.removeEventListener("click", L), e.removeEventListener("keydown", R), e.removeEventListener("focusin", te), e.removeEventListener("focusout", I), e.replaceChildren(), w && e.style.position === "relative" && (e.style.position = x));
		}
	};
	function ne() {
		let e = O() ?? r.initialWidth ?? 640;
		return n.render(r.definition, {
			width: e,
			height: r.height ?? (At(r.aspectRatio) ? e / r.aspectRatio : 320)
		}, { measureText: r.measureText ?? T.measureText });
	}
	function re(e, t, n) {
		let o = ie(), s = jt(r.definition.focus);
		if (s) return s.resolve(o, e, t, n);
		let c = o === a.points ? b && a === i ? b.findNearest(e, t, n) : Be(a, e, t, n) : me(o, e, t, n);
		return c ? [c] : [];
	}
	function ie() {
		return g?.getPresentationPoints?.() ?? a.points;
	}
	function z(e) {
		return jt(r.definition.focus)?.group(ie(), e) ?? [e];
	}
	function ae(t, n) {
		let a = Et(r.definition.tooltip);
		if (!a || !t || !g) {
			v?.hide();
			return;
		}
		(_ !== a.extension || !v) && (B(), _ = a.extension, v = a.extension.create({
			container: e,
			dismiss: ee,
			bodyChange: () => r.onTooltipBodyChange
		}));
		let o = v;
		o.update(a.options), o.paint({
			point: t,
			points: n,
			scene: i,
			surface: g,
			pointer: c,
			focus: {
				primary: t,
				group: n,
				source: s,
				pinned: l !== null
			},
			pinned: l !== null
		});
	}
	function oe() {
		let e = Et(r.definition.tooltip);
		e ? e.extension === _ ? v?.update(e.options) : B() : (v?.update(Tt), v?.hide());
	}
	function B() {
		v?.destroy(), v = void 0, _ = void 0;
	}
	function V() {
		let e = Et(r.definition.tooltip);
		return !!(e && e.options.sticky !== !1);
	}
	function se() {
		let e = Et(r.definition.tooltip)?.options.anchor;
		return e === "pointer" || typeof e == "function" || typeof e == "object" && (e.x === "pointer" || e.y === "pointer");
	}
}
var Tt = {};
function Et(e) {
	return e ? "create" in e ? {
		extension: e,
		options: Tt
	} : {
		extension: e.use,
		options: e
	} : null;
}
function Dt(e, t) {
	return e === t || e !== null && t !== null && e.key === t.key && e.markId === t.markId && e.datumIndex === t.datumIndex;
}
function Ot(e, t) {
	let n = e.filter((e) => e.key === t.key);
	if (n.length < 2) return n[0] ?? null;
	let r = typeof t.datum;
	if (t.datum !== null && (r === "object" || r === "function")) {
		let e = n.find((e) => e.datum === t.datum);
		if (e) return e;
	}
	return n.find((e) => e.markId === t.markId && Object.is(e.group, t.group) && kt(e.xValue, t.xValue) && kt(e.yValue, t.yValue)) ?? n.find((e) => e.markId === t.markId && e.datumIndex === t.datumIndex) ?? n[0] ?? null;
}
function kt(e, t) {
	return e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : Object.is(e, t);
}
function At(e) {
	return typeof e == "number" && Number.isFinite(e) && e > 0;
}
function jt(e) {
	if (e === !1) return Ct;
	if (typeof e != "string") return e;
	switch (e) {
		case "nearest-x": return bt;
		case "nearest-y": return xt;
		case "group-x": return vt;
		case "group-y": return yt;
		case "nearest": return;
	}
}
function Mt(e, t, n) {
	let r = e === !0 ? {} : e || void 0;
	if (!r || n === "layout" || n === "resize" && r.resize !== !0 || (r.respectReducedMotion ?? !0) && t.ownerDocument.defaultView?.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
	let { resize: i, ...a } = r;
	return a;
}
function Nt(e, t, n) {
	let r = t ? e.findIndex((e) => Dt(e, t)) : -1, i;
	switch (n) {
		case "ArrowRight":
		case "ArrowDown":
			i = Math.min(e.length - 1, r + 1);
			break;
		case "ArrowLeft":
		case "ArrowUp":
			i = Math.max(0, r < 0 ? 0 : r - 1);
			break;
		case "Home":
			i = 0;
			break;
		case "End":
			i = e.length - 1;
			break;
		default: return;
	}
	return e[i] ?? null;
}
function Pt(e, t, n) {
	let r = n === "ArrowRight" || n === "ArrowDown" ? 1 : n === "ArrowLeft" || n === "ArrowUp" ? -1 : n === "Home" ? 0 : n === "End" ? 2 : void 0;
	if (r === void 0) return;
	if (!e.length) return null;
	let i = t ? e.findIndex((e) => Dt(e, t)) : -1;
	if (!t || i < 0 || r === 0 || r === 2) return Ft(e, r === 2);
	let a = null, o = -1;
	for (let n = 0; n < e.length; n += 1) {
		let s = e[n];
		if (!s) continue;
		let c = It(s, n, t, i);
		r > 0 && c <= 0 || r < 0 && c >= 0 || (!a || r * It(s, n, a, o) < 0) && (a = s, o = n);
	}
	return a ?? t;
}
function Ft(e, t) {
	let n = e[0] ?? null, r = 0;
	for (let i = 1; i < e.length; i += 1) {
		let a = e[i];
		if (!a || !n) continue;
		let o = It(a, i, n, r);
		(t && o > 0 || !t && o < 0) && (n = a, r = i);
	}
	return n;
}
function It(e, t, n, r) {
	return e.x - n.x || e.y - n.y || t - r;
}
//#endregion
//#region node_modules/@tanstack/charts/dist/reconcile.js
var Lt = /* @__PURE__ */ new Set([
	"cx",
	"cy",
	"d",
	"fill-opacity",
	"height",
	"opacity",
	"r",
	"rx",
	"stroke-opacity",
	"stroke-width",
	"transform",
	"width",
	"x",
	"x1",
	"x2",
	"y",
	"y1",
	"y2"
]);
function Rt(e, t, n) {
	let r = e.ownerDocument.createElement("template");
	r.innerHTML = t;
	let i = r.content.firstElementChild;
	if (!i) return () => {};
	let a = e.firstElementChild;
	if (!a || a.namespaceURI !== i.namespaceURI || a.localName !== i.localName) return e.replaceChildren(i), () => {};
	let o = [];
	return zt(a, i, n ? o : void 0), n ? Ut(e, o, n) : () => {};
}
function zt(e, t, n) {
	if (Bt(e, t, n), !t.firstElementChild) {
		e.textContent !== t.textContent && (e.textContent = t.textContent);
		return;
	}
	let r = [...e.children], i = [...t.children], a = qt(r), o = Jt(i), s = /* @__PURE__ */ new Set(), c = e.firstElementChild;
	i.forEach((t, r) => {
		let i = o[r], l = a.get(i), u;
		l && l.namespaceURI === t.namespaceURI && l.localName === t.localName ? (u = l, s.add(l), u !== c && e.insertBefore(u, c), zt(u, t, n)) : (u = t.cloneNode(!0), e.insertBefore(u, c), Vt(u, t, n)), c = u.nextElementSibling;
	});
	for (let t of r) !s.has(t) && t.parentElement === e && (n ? Ht(t, n) : t.remove());
}
function Bt(e, t, n) {
	let r = new Set(t.getAttributeNames());
	for (let t of e.getAttributeNames()) r.has(t) || e.removeAttribute(t);
	for (let i of r) {
		let r = t.getAttribute(i), a = e.getAttribute(i);
		if (r === a) continue;
		let o = n && a !== null && r !== null && Lt.has(i) ? Gt(a, r) : void 0;
		o && n ? n.push({
			element: e,
			name: i,
			interpolate: o,
			target: r
		}) : r !== null && e.setAttribute(i, r);
	}
}
function Vt(e, t, n) {
	if (!n) return;
	let r = t.getAttribute("opacity"), i = r ?? "1";
	e.setAttribute("opacity", "0"), n.push({
		element: e,
		name: "opacity",
		interpolate: (e) => String(Number(i) * Math.max(0, Math.min(1, e))),
		target: r
	});
}
function Ht(e, t) {
	let n = Number(e.getAttribute("opacity") ?? 1), r = Number.isFinite(n) ? n : 1;
	t.push({
		element: e,
		name: "opacity",
		interpolate: (e) => String(r * (1 - e)),
		target: "0",
		removeOnFinish: !0
	});
}
function Ut(e, t, n) {
	if (!t.length) return () => {};
	let r = e.ownerDocument.defaultView, i = r?.requestAnimationFrame?.bind(r), a = r?.cancelAnimationFrame?.bind(r), o = Math.max(0, n.duration ?? 240);
	if (!i || !a || o === 0) return Wt(t), () => {};
	let s = 0, c = !1, l, u = Yt(n.easing ?? "ease-out"), d = (e) => {
		if (c) return;
		l ??= e;
		let n = Math.min(1, (e - l) / o), r = u(n);
		for (let e of t) e.element.setAttribute(e.name, e.interpolate(r));
		n < 1 ? s = i(d) : Wt(t);
	};
	return s = i(d), () => {
		c = !0, a(s);
	};
}
function Wt(e) {
	for (let t of e) {
		if (t.removeOnFinish) {
			t.element.remove();
			continue;
		}
		t.target === null ? t.element.removeAttribute(t.name) : t.element.setAttribute(t.name, t.target);
	}
}
function Gt(e, t) {
	let n = Kt(e), r = Kt(t);
	if (!(n.skeleton !== r.skeleton || n.values.length !== r.values.length || !n.values.length)) return (e) => {
		let t = 0;
		return r.skeleton.replaceAll("#", () => {
			let i = n.values[t], a = r.values[t];
			return t += 1, Xt(i + (a - i) * e);
		});
	};
}
function Kt(e) {
	let t = [];
	return {
		skeleton: e.replace(/-?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?/gi, (e) => (t.push(Number(e)), "#")),
		values: t
	};
}
function qt(e) {
	let t = /* @__PURE__ */ new Map();
	return Jt(e).forEach((n, r) => {
		t.set(n, e[r]);
	}), t;
}
function Jt(e) {
	let t = /* @__PURE__ */ new Map();
	return e.map((e) => {
		let n = e.getAttribute("data-ts-key");
		if (n) return `key:${n}`;
		let r = t.get(e.localName) ?? 0;
		return t.set(e.localName, r + 1), `tag:${e.localName}:${r}`;
	});
}
function Yt(e) {
	if (typeof e == "function") return e;
	switch (e) {
		case "linear": return (e) => e;
		case "ease-in": return (e) => e * e;
		case "ease-in-out": return (e) => e < .5 ? 2 * e * e : 1 - (-2 * e + 2) ** 2 / 2;
		case "ease":
		case "ease-out": return (e) => 1 - (1 - e) ** 3;
	}
}
function Xt(e) {
	return String(Math.round(e * 1e3) / 1e3);
}
//#endregion
//#region node_modules/@tanstack/charts/dist/svg-renderer.js
function Zt(e, t, n) {
	let r = t.idPrefix ?? "", i = t.className ? `ts-chart ${t.className}` : "ts-chart", a = t.ariaDescription ? `<desc>${tn(t.ariaDescription)}</desc>` : "", o = n?.renderDefinitions?.(e, r) ?? "", s = e.theme.background === "transparent" ? "" : Qt({
		kind: "rect",
		key: "background",
		x: 0,
		y: 0,
		width: e.width,
		height: e.height,
		style: { fill: e.theme.background }
	}, n, r);
	return `<svg class="${Q(i)}" width="100%" height="100%" viewBox="0 0 ${Z(e.width)} ${Z(e.height)}" role="img" aria-roledescription="chart" aria-label="${Q(t.ariaLabel)}" tabindex="${Z(t.tabIndex ?? 0)}" style="display:block;overflow:visible">${a}${o}${s}${e.nodes.map((e) => Qt(e, n, r)).join("")}</svg>`;
}
function Qt(e, t, n) {
	let r = $t(e, t, n);
	switch (e.kind) {
		case "group": {
			let i = e.translateX === void 0 && e.translateY === void 0 ? "" : ` transform="translate(${Z(e.translateX ?? 0)} ${Z(e.translateY ?? 0)})"`, a = t?.renderGroup?.(e, n);
			return `<g${r}${i}${e.focus ? ` data-ts-focus-layer="${e.focus.placement}" visibility="hidden"` : ""}${a?.attributes ?? ""}>${a?.content ?? ""}${e.children.map((e) => Qt(e, t, n)).join("")}</g>`;
		}
		case "rule": return `<line${r} x1="${Z(e.x1)}" y1="${Z(e.y1)}" x2="${Z(e.x2)}" y2="${Z(e.y2)}"/>`;
		case "polyline": return `<path${r} d="${e.path ?? e.points.map(([e, t], n) => `${n === 0 ? "M" : "L"}${Z(e)},${Z(t)}`).join("")}" vector-effect="non-scaling-stroke"/>`;
		case "area": return `<path${r} d="${e.path ?? `${e.points.map(([e, t], n) => `${n === 0 ? "M" : "L"}${Z(e)},${Z(t)}`).join("")}Z`}" vector-effect="non-scaling-stroke"/>`;
		case "dot": return `<circle${r} cx="${Z(e.x)}" cy="${Z(e.y)}" r="${Z(e.radius)}"/>`;
		case "rect": return `<rect${r} x="${Z(e.x)}" y="${Z(e.y)}" width="${Z(e.width)}" height="${Z(e.height)}"${e.radius === void 0 ? "" : ` rx="${Z(e.radius)}"`}/>`;
		case "label": {
			let t = e.rotate === void 0 ? "" : ` transform="rotate(${Z(e.rotate)} ${Z(e.x)} ${Z(e.y)})"`, n = e.anchor ? ` text-anchor="${e.anchor}"` : "", i = e.baseline ? ` dominant-baseline="${e.baseline}"` : "", a = e.fontSize === void 0 ? "" : ` font-size="${Z(e.fontSize)}"`, o = e.fontWeight === void 0 ? "" : ` font-weight="${Z(e.fontWeight)}"`;
			return `<text${r} x="${Z(e.x)}" y="${Z(e.y)}"${n}${i}${t}${a}${o} font-family="inherit">${tn(e.text)}</text>`;
		}
	}
}
function $t(e, t, n) {
	return `${` data-ts-key="${Q(e.key)}"`}${e.className ? ` class="${Q(e.className)}"` : ""}${e.ariaHidden ? " aria-hidden=\"true\"" : ""}${en(e.style, t, n)}`;
}
function en(e, t, n) {
	if (!e) return "";
	let r = (e) => e && t?.resolvePaint ? t.resolvePaint(e, n) : e;
	return [
		["fill", r(e.fill)],
		["fill-opacity", e.fillOpacity],
		["stroke", r(e.stroke)],
		["stroke-opacity", e.strokeOpacity],
		["stroke-width", e.strokeWidth],
		["opacity", e.opacity],
		["stroke-linecap", e.lineCap],
		["stroke-linejoin", e.lineJoin],
		["stroke-dasharray", e.strokeDasharray]
	].filter((e) => e[1] != null).map(([e, t]) => ` ${e}="${typeof t == "number" ? Z(t) : Q(t)}"`).join("");
}
function Z(e) {
	return String(Math.round(e * 100) / 100);
}
function tn(e) {
	return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function Q(e) {
	return tn(e).replaceAll("\"", "&quot;");
}
//#endregion
//#region node_modules/@tanstack/charts/dist/svg.js
function nn(e, t) {
	return Zt(e, t);
}
//#endregion
//#region node_modules/@tanstack/charts/dist/focus-layer.js
function rn(e, t) {
	if (!e.focus || !t) return /* @__PURE__ */ new Set();
	let n = e.focus.points.filter((n) => on(n, t, e.focus.match)), r = an(e.children, n), i = /* @__PURE__ */ new Set();
	return dn(r, (e) => i.add(e.key)), i;
}
function an(e, t) {
	let n = [];
	for (let r of e) {
		if (r.kind !== "group") {
			t.some((e) => ln(r.key, e.key)) && n.push(r);
			continue;
		}
		let e = an(r.children, t);
		e.length ? n.push({
			...r,
			children: e
		}) : t.some((e) => e.key.startsWith(`${r.key}:`)) && n.push(r);
	}
	return n;
}
function on(e, t, n) {
	return n === "x" ? cn(e.xValue, t.primary.xValue) : n === "y" ? cn(e.yValue, t.primary.yValue) : n === "series" ? cn(e.group, t.primary.group) : n === "key" ? e.key === t.primary.key || e.datum === t.primary.datum : n === "group" ? t.group.some((t) => sn(e, t)) : sn(e, t.primary);
}
function sn(e, t) {
	return e === t || e.key === t.key || un(e.datum) && e.datum === t.datum;
}
function cn(e, t) {
	return O(e) === O(t);
}
function ln(e, t) {
	return e === t || e.startsWith(`${t}:`) || t.startsWith(`${e}:`);
}
function un(e) {
	return typeof e == "object" && !!e || typeof e == "function";
}
function dn(e, t) {
	for (let n of e) t(n), n.kind === "group" && dn(n.children, t);
}
//#endregion
//#region node_modules/@tanstack/charts/dist/mark-state.js
function fn(e, t, n = null) {
	if (!t || !mn(e.nodes)) return { scene: e };
	let r, i = (e, a, o, s, c) => e.map((e) => {
		let l = e.kind === "group" ? e.states : void 0, u = l?.points ?? a, d = l?.definitions ?? o, f = l?.data ?? s, p = l ? Sn(l.points) : c, m = u ? bn(e.key, u, p) : xn, h = e.kind !== "group" && d && f && m.length ? hn(e, m, f, d, t, n) : { node: e };
		h.transition && (r = Cn(r, h.transition));
		let g = h.node;
		return g.kind === "group" ? {
			...g,
			children: i(g.children, m.length ? m : u, d, f, p)
		} : g;
	}), a = i(e.nodes);
	return {
		scene: {
			...e,
			nodes: a
		},
		transition: r
	};
}
function pn(e, t) {
	if (!e || e.type !== "tween" || (e.respectReducedMotion ?? !0) && t.ownerDocument.defaultView?.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
	let { type: n, ...r } = e;
	return r;
}
function mn(e) {
	return e.some((e) => e.kind === "group" && (e.states !== void 0 || mn(e.children)));
}
function hn(e, t, n, r, i, a) {
	let o = e, s;
	for (let e of r) {
		let r = gn(t, n, e, i, a);
		r && (o = vn(o, e.style, r), e.transition && (s = Cn(s, e.transition)));
	}
	return {
		node: o,
		transition: s
	};
}
function gn(e, t, n, r, i) {
	if (!(typeof n.when != "function" && n.when.focus === "unmatched" && e.some((e) => on(e, r, "group")))) for (let a of e) {
		let e = {
			datum: a.datum,
			index: a.datumIndex,
			data: t,
			point: a,
			focus: r,
			pointer: i,
			matches: (e) => on(a, r, e)
		};
		if (typeof n.when == "function" ? n.when(e) : _n(n.when, e)) return e;
	}
}
function _n(e, t) {
	let n = e.source;
	return n !== void 0 && !(Array.isArray(n) ? n.includes(t.focus.source) : n === t.focus.source) || e.pinned !== void 0 && e.pinned !== t.focus.pinned ? !1 : e.focus === "unmatched" ? !t.matches("group") : t.matches(e.focus);
}
function vn(e, t, n) {
	let r = { ...e.style };
	for (let e of yn) {
		let i = $(t[e], n);
		i !== void 0 && (r[e] = i);
	}
	let i = {
		...e,
		style: r
	}, a = $(t.dx, n) ?? 0, o = $(t.dy, n) ?? 0, s = $(t.r, n), c = $(t.radius, n), l = $(t.inset, n), u = $(t.fontSize, n), d = $(t.fontWeight, n), f = $(t.rotate, n);
	switch (i.kind) {
		case "dot":
			i = {
				...i,
				x: i.x + a,
				y: i.y + o,
				radius: s ?? i.radius
			};
			break;
		case "rect": {
			let e = Math.max(0, l ?? i.inset ?? 0), t = e - (i.inset ?? 0), n = i.insetAxis === "y" ? 0 : t, r = i.insetAxis === "x" ? 0 : t;
			i = {
				...i,
				x: i.x + n + a,
				y: i.y + r + o,
				width: Math.max(0, i.width - n * 2),
				height: Math.max(0, i.height - r * 2),
				radius: c ?? i.radius,
				inset: e
			};
			break;
		}
		case "label": i = {
			...i,
			x: i.x + a,
			y: i.y + o,
			fontSize: u ?? i.fontSize,
			fontWeight: d ?? i.fontWeight,
			rotate: f ?? i.rotate
		};
	}
	return i;
}
var yn = [
	"fill",
	"fillOpacity",
	"stroke",
	"strokeOpacity",
	"strokeWidth",
	"opacity",
	"strokeDasharray"
];
function $(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function bn(e, t, n) {
	if (!n) return t;
	let r = e;
	for (; r;) {
		let e = n.get(r);
		if (e) return e;
		let t = r.lastIndexOf(":");
		if (t < 0) break;
		r = r.slice(0, t);
	}
	return t;
}
var xn = [];
function Sn(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = -1;
		do {
			e = n.key.indexOf(":", e + 1);
			let r = e < 0 ? n.key : n.key.slice(0, e), i = t.get(r);
			i ? i.push(n) : t.set(r, [n]);
		} while (e >= 0);
	}
	return t;
}
function Cn(e, t) {
	return !e || e.type !== t.type ? t : e.type === "spring" && t.type === "spring" ? {
		...e,
		...t
	} : e.type !== "tween" || t.type !== "tween" ? t : {
		...e,
		...t,
		duration: Math.max(e.duration ?? 250, t.duration ?? 250)
	};
}
//#endregion
//#region node_modules/@tanstack/charts/dist/svg-surface.js
function wn(e = nn) {
	let t = {
		id: "svg",
		prerender: e,
		mount(n) {
			let r = () => {}, i, a, o, s = () => {
				let e = n.querySelector("svg.ts-chart");
				if (!e) throw Error("The SVG renderer must produce an svg.ts-chart root element.");
				return e;
			};
			return {
				renderer: t,
				get element() {
					return s();
				},
				render(t, s) {
					r(), r = Rt(n, e(t, s), s.animation), i = t, a = s, o = void 0;
				},
				clientToScene(e, t, n) {
					return Tn(s(), e, t, n);
				},
				paintFocus(t, c) {
					if (!i || !a) return;
					let l = fn(i, t, c), u = o;
					return (l.scene !== i || u) && (r(), r = Rt(n, e(l.scene, a), pn(l.transition ?? u, n))), o = t ? l.transition ?? u : void 0, En(s(), l.scene, t), l.scene;
				},
				destroy() {
					r();
				}
			};
		}
	};
	return t;
}
function Tn(e, t, n, r) {
	let i = e.getScreenCTM?.();
	if (!i) {
		let i = e.getBoundingClientRect();
		return !i.width || !i.height ? null : {
			x: (n - i.left) / i.width * t.width,
			y: (r - i.top) / i.height * t.height
		};
	}
	let a;
	try {
		a = i.inverse();
	} catch {
		return null;
	}
	let o = a.a * n + a.c * r + a.e, s = a.b * n + a.d * r + a.f;
	return !Number.isFinite(o) || !Number.isFinite(s) ? null : {
		x: o,
		y: s
	};
}
function En(e, t, n) {
	let r = Dn(t.nodes);
	e.querySelectorAll("[data-ts-focus-layer]").forEach((e, t) => {
		let i = r[t], a = i ? rn(i, n) : /* @__PURE__ */ new Set();
		e.setAttribute("visibility", n && a.size ? "visible" : "hidden"), e.querySelectorAll("[data-ts-key]").forEach((e) => {
			let t = e.dataset.tsKey;
			e.setAttribute("visibility", t && a.has(t) ? "visible" : "hidden");
		});
	});
}
function Dn(e) {
	let t = [];
	for (let n of e) n.kind === "group" && (n.focus ? t.push(n) : t.push(...Dn(n.children)));
	return t;
}
//#endregion
//#region node_modules/@tanstack/charts/dist/dom.js
function On(e, t, n = dt()) {
	let r = t.renderSvg ?? nn, i = wn(r), a = (t) => {
		let n = t.renderSvg ?? nn;
		n !== r && (r = n, i = wn(r));
		let { renderSvg: a, onRender: o, ...s } = t;
		return {
			...s,
			renderer: i,
			onRender: o ? ({ container: t, scene: n, surface: r }) => {
				let i = r.element, a = e.ownerDocument.defaultView?.SVGSVGElement;
				if (!a || !(i instanceof a)) throw TypeError("Expected the SVG chart surface.");
				o({
					container: t,
					scene: n,
					svg: i
				});
			} : void 0
		};
	}, o = wt(e, a(t), n);
	return {
		update(e) {
			o.update(a(e));
		},
		getScene: o.getScene,
		destroy: o.destroy
	};
}
//#endregion
//#region node_modules/@tanstack/charts/dist/bar.js
function kn(e, t = {}) {
	let n = Array.isArray(e) ? e : Array.from(e);
	return M(({ markIndex: e }) => {
		let r = t.id ?? `bar-y-${e}`, i = P(n, t.x, (e, t) => t), a = Nn(n, t.y ?? t.y2, (e) => typeof e == "number" ? e : void 0), o = P(n, t.z, () => null), s = t.color === void 0 ? o : P(n, t.color, () => null), c = t.z === void 0 && t.color !== void 0 ? s : o, l = t.y1 !== void 0 || t.y2 !== void 0;
		if (l && t.layout?.type === "stack") throw TypeError("A bar with explicit y1 or y2 endpoints cannot also configure a stack layout");
		let u = t.layout?.type === "group", d = t.layout?.type === "stack" ? t.layout : {}, f = !l && !u ? ne(i, a, c, d, "index") : void 0, p = l ? Nn(n, t.y1, () => 0) : f?.starts ?? n.map(() => 0), m = l ? Nn(n, t.y2 ?? t.y, () => void 0) : u ? a : f.ends, h = jn(i), g = u || !l && h ? c : o, _ = F(n, t.key, {
			groups: g,
			candidates: [i],
			markId: r,
			warningIdentity: t
		});
		return {
			id: r,
			states: ee(n, t.states),
			seriesFromColor: t.z === void 0 && t.color !== void 0 && (u || h),
			channels: {
				x: {
					scale: "x",
					values: i.filter(A)
				},
				y: {
					scale: "y",
					values: [...m.filter(j), ...p.filter(j)],
					includeZero: t.y1 === void 0
				},
				color: {
					scale: "color",
					values: s.filter(S)
				}
			},
			render: ({ scales: e, chart: o, color: c }) => {
				let l = e.x.bandwidth || Mn(e.x, i, o.width, n.length), u = An(t.layout?.type === "group" ? t.layout : void 0, g, l), d = u?.bandwidth ?? l, f = Math.max(0, t.inset ?? 0), h = [];
				return n.forEach((o, v) => {
					let y = i[v], b = a[v], x = p[v], S = m[v];
					if (!A(y) || !j(b) || !j(x) || !j(S)) return;
					let C = g[v] ?? null, w = u?.map(C) ?? 0, T = c(s[v]), E = N(t.fill, o, v, n, T), D = e.x.map(y), k = e.y.map(x), M = e.y.map(S), ee = D - l / 2 + w + f, P = Math.min(k, M), F = Math.max(0, d - f * 2), I = Math.abs(k - M), L = `${r}:${O(C)}:${O(_[v])}`, R = {
						key: L,
						markId: r,
						group: C,
						groupLabel: C == null ? r : String(C),
						datum: o,
						datumIndex: v,
						xValue: y,
						yValue: b,
						y1Value: x,
						y2Value: S,
						yInterval: "difference",
						x: D - l / 2 + w + d / 2,
						y: M,
						color: E
					};
					h.push({
						kind: "rect",
						key: L,
						x: ee,
						y: P,
						width: F,
						height: I,
						radius: t.radius,
						inset: f,
						insetAxis: "x",
						interaction: {
							point: R,
							affinity: "x"
						},
						style: {
							fill: E,
							fillOpacity: t.fillOpacity
						}
					});
				}), { nodes: [{
					kind: "group",
					key: r,
					className: "ts-chart__bar ts-chart__bar-y",
					ariaHidden: !0,
					children: h
				}] };
			}
		};
	}, t.motion);
}
function An(e, n, r) {
	if (!e) return;
	let i = m(e.scale ?? (() => t().padding(Number.isFinite(e.padding) ? Math.max(0, e.padding) : .1)), { values: n });
	i.range([0, r]);
	let a = i.bandwidth?.();
	if (a === void 0) throw TypeError("A grouped bar layout requires a D3 band scale");
	return {
		bandwidth: a,
		map(e) {
			if (e === null) throw TypeError("A grouped bar requires an explicit z channel or a discrete color channel");
			let t = i(e);
			if (t === void 0 || !Number.isFinite(t)) throw TypeError(`Bar group value "${String(e)}" is outside the group layout scale domain`);
			return t;
		}
	};
}
function jn(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) {
		if (!A(n)) continue;
		let e = O(n);
		if (t.has(e)) return !0;
		t.add(e);
	}
	return !1;
}
function Mn(e, t, n, r) {
	let i = [...new Set(t.filter(A).map(e.map).filter((e) => Number.isFinite(e)))].sort((e, t) => e - t), a = Infinity;
	for (let e = 1; e < i.length; e += 1) a = Math.min(a, i[e] - i[e - 1]);
	return Number.isFinite(a) ? a * .8 : Math.min(48, n / Math.max(2, r + 1) * .8);
}
function Nn(e, t, n) {
	return typeof t == "number" ? e.map(() => t) : P(e, t, n);
}
//#endregion
//#region src/tanStackCharts.ts
function Pn(n, r) {
	let i = {
		ariaLabel: "Bar chart",
		definition: Ie({
			marks: [kn(Fn(n), {
				color: "seriesName",
				fill: "seriesName",
				layout: p(),
				x: "category",
				y: "value",
				z: "seriesName"
			})],
			x: { scale: () => t().padding(.2) },
			y: {
				grid: !0,
				nice: !0,
				scale: e
			}
		})
	}, a = On(r, i);
	function o() {
		let e = r.querySelector("svg");
		if (e == null) throw Error("Failed to create TanStack Charts SVG element.");
		return e;
	}
	return {
		destroy: () => {
			a.destroy();
		},
		resize: () => {
			a.update(i);
		},
		get svg() {
			return o();
		}
	};
}
function Fn(e) {
	let t = [];
	for (let n of e.series) for (let [r, i] of e.categories.entries()) t.push({
		category: i,
		seriesName: n.name,
		value: n.values[r] ?? 0
	});
	return t;
}
//#endregion
export { Pn as renderTanStackCharts };

//# sourceMappingURL=tanStackCharts-BJAX22lS.js.map