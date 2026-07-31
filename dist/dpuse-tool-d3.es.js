//#region node_modules/billboard.js/dist-esm/config/const.js
var e = {
	AREA: "area",
	AREA_LINE_RANGE: "area-line-range",
	AREA_SPLINE: "area-spline",
	AREA_SPLINE_RANGE: "area-spline-range",
	AREA_STEP: "area-step",
	AREA_STEP_RANGE: "area-step-range",
	BAR: "bar",
	BUBBLE: "bubble",
	CANDLESTICK: "candlestick",
	DONUT: "donut",
	FUNNEL: "funnel",
	GAUGE: "gauge",
	LINE: "line",
	PIE: "pie",
	POLAR: "polar",
	RADAR: "radar",
	SCATTER: "scatter",
	SPLINE: "spline",
	STEP: "step",
	TREEMAP: "treemap"
}, t = {
	AREA: "initArea",
	AREA_LINE_RANGE: "initArea",
	AREA_SPLINE: "initArea",
	AREA_SPLINE_RANGE: "initArea",
	AREA_STEP: "initArea",
	AREA_STEP_RANGE: "initArea",
	BAR: "initBar",
	BUBBLE: "initCircle",
	CANDLESTICK: "initCandlestick",
	DONUT: "initArc",
	FUNNEL: "initFunnel",
	GAUGE: "initArc",
	LINE: "initLine",
	PIE: "initArc",
	POLAR: "initPolar",
	RADAR: "initCircle",
	SCATTER: "initCircle",
	SPLINE: "initLine",
	STEP: "initLine",
	TREEMAP: "initTreemap"
}, n = {
	Area: [
		e.AREA,
		e.AREA_SPLINE,
		e.AREA_SPLINE_RANGE,
		e.AREA_LINE_RANGE,
		e.AREA_STEP,
		e.AREA_STEP_RANGE
	],
	AreaRange: [
		e.AREA_SPLINE_RANGE,
		e.AREA_LINE_RANGE,
		e.AREA_STEP_RANGE
	],
	Arc: [
		e.PIE,
		e.DONUT,
		e.GAUGE,
		e.POLAR,
		e.RADAR
	],
	Line: [
		e.LINE,
		e.SPLINE,
		e.AREA,
		e.AREA_SPLINE,
		e.AREA_SPLINE_RANGE,
		e.AREA_LINE_RANGE,
		e.STEP,
		e.AREA_STEP,
		e.AREA_STEP_RANGE
	],
	Step: [
		e.STEP,
		e.AREA_STEP,
		e.AREA_STEP_RANGE
	],
	Spline: [
		e.SPLINE,
		e.AREA_SPLINE,
		e.AREA_SPLINE_RANGE
	]
};
//#endregion
//#region node_modules/billboard.js/dist-esm/module/browser.js
function r() {
	return typeof globalThis == "object" && globalThis !== null && globalThis.Object === Object && globalThis || typeof self == "object" && self !== null && self.Object === Object && self || Function("return this")();
}
function i(e) {
	let t = typeof e?.requestAnimationFrame == "function" && typeof e?.cancelAnimationFrame == "function", n = typeof e?.requestIdleCallback == "function" && typeof e?.cancelIdleCallback == "function", r = (e) => setTimeout(e, 1), i = (e) => clearTimeout(e);
	return [
		t ? e.requestAnimationFrame : r,
		t ? e.cancelAnimationFrame : i,
		n ? e.requestIdleCallback : r,
		n ? e.cancelIdleCallback : i
	];
}
var a = r(), o = a?.document, [s, c, l, u] = i(a), d = (e) => e || e === 0, f = (e) => typeof e == "function", p = (e) => typeof e == "string", m = (e) => typeof e == "number", h = (e) => e === void 0, g = (e) => e !== void 0, _ = (e) => typeof e == "boolean", v = (e) => Math.ceil(e / 10) * 10, y = (e) => Math.ceil(e) + .5, b = (e) => e[1] - e[0], x = (e) => typeof e == "object", S = (e) => {
	for (let t in e) return !1;
	return !0;
}, C = (e) => h(e) || e === null || p(e) && e.length === 0 || x(e) && !(e instanceof Date) && S(e) || m(e) && isNaN(e), w = (e) => !C(e), T = (e) => Array.isArray(e), E = (e) => e && !e?.nodeType && x(e) && !T(e), D = /* @__PURE__ */ new Set(/* @__PURE__ */ "span.div.p.br.b.i.em.small.strong.mark.u.s.sub.sup.h1.h2.h3.h4.h5.h6.ul.ol.li.dl.dt.dd.table.thead.tbody.tfoot.tr.th.td.caption.colgroup.col.hr.pre.code.blockquote.abbr.ins.del.a.img.figure.figcaption.svg.g.path.circle.ellipse.rect.line.polyline.polygon.text.tspan.textPath.use.defs.symbol.clipPath.mask.linearGradient.radialGradient.stop.pattern.marker.title.desc".split(".")), O = /* @__PURE__ */ new Set(/* @__PURE__ */ "class.id.style.title.lang.dir.href.src.alt.width.height.colspan.rowspan.scope.headers.d.points.x.y.x1.x2.y1.y2.cx.cy.r.rx.ry.dx.dy.viewBox.preserveAspectRatio.transform.fill.fill-opacity.fill-rule.stroke.stroke-width.stroke-opacity.stroke-linecap.stroke-linejoin.stroke-dasharray.stroke-dashoffset.opacity.clip-path.clip-rule.mask.font-family.font-size.font-weight.font-style.text-anchor.dominant-baseline.offset.stop-color.stop-opacity.gradientUnits.gradientTransform.spreadMethod.patternUnits.patternTransform.marker-start.marker-mid.marker-end.markerWidth.markerHeight.refX.refY.xlink:href".split(".")), k = /* @__PURE__ */ new Map();
D.forEach((e) => k.set(e.toLowerCase(), e));
var A = /* @__PURE__ */ new Map();
O.forEach((e) => A.set(e.toLowerCase(), e));
var j = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:"
]), ee = /* @__PURE__ */ new Set([
	"href",
	"src",
	"xlink:href"
]), te = /^<\/?([a-zA-Z][a-zA-Z0-9]*)/, ne = /^<\/([a-zA-Z][a-zA-Z0-9]*)\s*>$/, re = /^<([a-zA-Z][a-zA-Z0-9]*)([\s\S]*?)(\/?)>$/, ie = /([a-zA-Z][\w:-]*)\s*(?:=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g, ae = /url\s*\(\s*["']?([^"')]+)["']?\s*\)/gi, oe = [
	"expression(",
	"behavior:",
	"binding:",
	"@import",
	"@charset",
	"-moz-binding:"
];
function se(e) {
	return e.replace(/&colon;/gi, ":").replace(/&newline;/gi, "\n").replace(/&tab;/gi, "	").replace(/&nbsp;/gi, " ").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&").replace(/&quot;/gi, "\"").replace(/&apos;/gi, "'").replace(/&#(\d+);?/gi, (e, t) => String.fromCharCode(parseInt(t, 10))).replace(/&#x([0-9a-f]+);?/gi, (e, t) => String.fromCharCode(parseInt(t, 16)));
}
function ce(e) {
	let t = se(e).trim().replace(/[\s\u0000-\u001f]/g, "").toLowerCase();
	if (!t || t.startsWith("#")) return !0;
	let n = t.match(/^[^/?#]*:/);
	return !n || j.has(n[0]);
}
function le(e) {
	let t = se(e).replace(/[\u0000-\u001f]/g, "");
	ae.lastIndex = 0;
	let n;
	for (; (n = ae.exec(t)) !== null;) if (!ce(n[1])) return null;
	let r = t.toLowerCase().replace(/\s/g, "");
	for (let e of oe) if (r.includes(e)) return null;
	return e;
}
var ue = {
	"\"": "&quot;",
	"'": "&#39;",
	"`": "&#96;"
}, de = /["'`]/g;
function fe(e) {
	return e.replace(de, (e) => ue[e]);
}
function pe(e, t, n = !1) {
	if (ee.has(e)) return ce(t) ? n ? fe(t) : t : null;
	if (e === "style") {
		let e = le(t);
		return e === null ? null : n ? fe(e) : e;
	}
	let r = se(t).toLowerCase().replace(/\s/g, "");
	return /\bon\w+=/.test(r) ? null : n ? fe(t) : t;
}
function me(e) {
	let t = e.match(te);
	return t ? t[1].toLowerCase() : null;
}
function he(e) {
	let t = me(e);
	return t !== null && k.has(t);
}
function ge(e) {
	let t = e.match(ne);
	if (t) {
		let e = t[1].toLowerCase();
		return `</${k.get(e) ?? e}>`;
	}
	let n = e.match(re);
	if (!n) return "";
	let [, r, i, a] = n, o = r.toLowerCase(), s = k.get(o) ?? o, c = [];
	ie.lastIndex = 0;
	let l;
	for (; (l = ie.exec(i)) !== null;) {
		let e = l[1].toLowerCase(), t = l[2], n = l[3], r = l[4];
		if (e.startsWith("on")) continue;
		let i = A.get(e) ?? e, a, o;
		if (t !== void 0) a = t, o = "\"";
		else if (n !== void 0) a = n, o = "'";
		else if (r !== void 0) a = r, o = "\"";
		else {
			A.has(e) && c.push(i);
			continue;
		}
		if (A.has(e)) {
			let t = pe(e, a, r !== void 0);
			t !== null && c.push(`${i}=${o}${t}${o}`);
		}
	}
	return `<${s}${c.length > 0 ? ` ${c.join(" ")}` : ""}${a ? "/>" : ">"}`;
}
function _e(e) {
	return typeof e != "string" || !e || e.indexOf("<") === -1 ? e : e.replace(/<\/?[^>]*>|[^<>\s]+>/g, (e) => e.startsWith("<!--") ? "" : e.startsWith("<") ? he(e) ? ge(e) : e.replace(/</g, "&lt;") : e.slice(0, -1) + "&gt;");
}
//#endregion
//#region node_modules/billboard.js/dist-esm/module/util/object.js
function ve(e, t) {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		r !== null && g(r) && t(r, n);
	}
}
function ye(e, t, n) {
	return g(e[t]) ? e[t] : n;
}
function be(e, t) {
	for (let n in e) if (e[n] === t) return !0;
	return !1;
}
function M(e, t, ...n) {
	let r = f(e);
	return r && e.call(t, ...n), r;
}
function xe(e, t) {
	let n = 0, r = function(...e) {
		!--n && t.apply(this, e);
	};
	"duration" in e ? e.each(() => ++n).on("end", r) : (++n, e.call(r));
}
var N = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function Se(e, t = "-") {
	return e.split(t).map((e, t) => t ? e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() : e.toLowerCase()).join("");
}
var Ce = (e) => [].slice.call(e);
function we(...e) {
	let t = (e) => {
		if (T(e)) return e.map(t);
		if (E(e) && e.constructor) {
			let n = new e.constructor();
			for (let r in e) n[r] = t(e[r]);
			return n;
		}
		return e;
	};
	return e.map((e) => t(e)).reduce((e, t) => ({
		...e,
		...t
	}));
}
function Te(e = {}, t) {
	T(t) && t.forEach((t) => Te(e, t));
	for (let n in t) /^\d+$/.test(n) || n in e || (e[n] = t[n]);
	return e;
}
function Ee(e) {
	let t = e[0] instanceof Date, n = Array.from(new Set(t ? e.map(Number) : e));
	return t ? n.map((e) => new Date(e)) : n;
}
function De(e) {
	return e && e.length ? e.reduce((e, t) => e.concat(t)) : [];
}
function Oe(e, ...t) {
	if (!t.length || t.length === 1 && !t[0]) return e;
	let n = t.shift();
	return E(e) && E(n) && Object.keys(n).forEach((t) => {
		if (!/^(__proto__|constructor|prototype)$/i.test(t)) {
			let r = n[t];
			r instanceof Date ? e[t] = new Date(r.getTime()) : E(r) ? (!e[t] && (e[t] = {}), e[t] = Oe(e[t], r)) : e[t] = T(r) ? r.concat() : r;
		}
	}), Oe(e, ...t);
}
function ke(e, t = !0) {
	let n;
	return e[0] instanceof Date ? n = t ? (e, t) => e - t : (e, t) => t - e : t && !e.every(isNaN) ? n = (e, t) => e - t : t || (n = (e, t) => e > t && -1 || e < t && 1 || e === t && 0), e.concat().sort(n);
}
function Ae(e, t) {
	let n = t.filter((e) => w(e));
	if (n.length) if (m(n[0])) {
		let t = e === "min" ? Infinity : -Infinity;
		for (let r of n) (e === "min" ? r < t : r > t) && (t = r);
		n = t;
	} else n[0] instanceof Date && (n = ke(n, e === "min")[0]);
	else n = void 0;
	return n;
}
var je = 0;
function Me(e = !0) {
	let t = ++je;
	return e ? String(t) : t;
}
function Ne(e, t, n, r, i) {
	if (n > r) return -1;
	let a = Math.floor((n + r) / 2), { x: o, w: s = 0 } = e[a];
	return i && (o = e[a].y, s = e[a].h), t >= o && t <= o + s ? a : t < o ? Ne(e, t, n, a - 1, i) : Ne(e, t, a + 1, r, i);
}
function Pe(e, t) {
	return _e(e.replace(/\{=([^}]+)\}/g, (e, n) => t[n] ?? ""));
}
function Fe(e) {
	let t;
	if (e instanceof Date) t = e;
	else if (p(e)) {
		let { config: n, format: r } = this;
		t = r.dataTime(n.data_xFormat)(e) ?? new Date(e);
	} else m(e) && !isNaN(e) && (t = /* @__PURE__ */ new Date(+e));
	return (!t || isNaN(+t)) && console && console.error && console.error(`Failed to parse x '${e}' to Date object`), t;
}
function Ie(e) {
	if (E(e) && !p(e)) {
		let t = e;
		return {
			top: t.top || 0,
			right: t.right || 0,
			bottom: t.bottom || 0,
			left: t.left || 0
		};
	}
	let [t, n = t, r = t, i = n] = (p(e) ? e.trim().split(/\s+/) : [e]).map((e) => +e || 0);
	return {
		top: t,
		right: n,
		bottom: r,
		left: i
	};
}
function Le(e, t) {
	t() === !1 ? s(() => Le(e, t)) : e();
}
function Re(e, t = ((e) => e)) {
	let n = /* @__PURE__ */ new Set();
	return ve(e, (e, r) => {
		n.add(t(e, r));
	}), n;
}
function ze(e, t, n = ((e) => e)) {
	let r = /* @__PURE__ */ new Map();
	return ve(e, (e, i) => {
		r.set(t(e, i), n(e, i));
	}), r;
}
//#endregion
//#region node_modules/billboard.js/dist-esm/module/error.js
var Be = "https://github.com/naver/billboard.js/blob/master/MODULE_IMPORTS.md";
function Ve(n) {
	let r = n, { config: i } = r, a = "";
	if (C(i.data_type || i.data_types) && !r[t.LINE]) a = "line";
	else for (let n in t) {
		let i = e[n];
		if (r.hasType(i) && !r[t[n]]) {
			a = i;
			break;
		}
	}
	a && He(`Please, make sure if %c${Se(a)}`, "module has been imported and specified correctly.", Be);
}
function He(e, t, n) {
	let r = "[billboard.js]";
	if (a.console?.error) {
		let i = ["background:red;color:white;display:block;font-size:15px", t];
		console.error(`❌ ${r} ${e}`, "background:red;color:white;display:block;font-size:15px", ...i), console.info("%cℹ️", "font-size:15px", n);
	}
	throw Error(`${r} ${e.replace(/\%c([a-z-]+)/i, "'$1' ")} ${t}`);
}
var Ue = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
//#endregion
//#region node_modules/d3-selection/src/namespace.js
function We(e) {
	var t = e += "", n = t.indexOf(":");
	return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ue.hasOwnProperty(t) ? {
		space: Ue[t],
		local: e
	} : e;
}
//#endregion
//#region node_modules/d3-selection/src/creator.js
function Ge(e) {
	return function() {
		var t = this.ownerDocument, n = this.namespaceURI;
		return n === "http://www.w3.org/1999/xhtml" && t.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? t.createElement(e) : t.createElementNS(n, e);
	};
}
function Ke(e) {
	return function() {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function qe(e) {
	var t = We(e);
	return (t.local ? Ke : Ge)(t);
}
//#endregion
//#region node_modules/d3-selection/src/selector.js
function Je() {}
function Ye(e) {
	return e == null ? Je : function() {
		return this.querySelector(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/select.js
function Xe(e) {
	typeof e != "function" && (e = Ye(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = Array(o), c, l, u = 0; u < o; ++u) (c = a[u]) && (l = e.call(c, c.__data__, u, a)) && ("__data__" in c && (l.__data__ = c.__data__), s[u] = l);
	return new P(r, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/array.js
function Ze(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-selection/src/selectorAll.js
function Qe() {
	return [];
}
function $e(e) {
	return e == null ? Qe : function() {
		return this.querySelectorAll(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectAll.js
function et(e) {
	return function() {
		return Ze(e.apply(this, arguments));
	};
}
function tt(e) {
	e = typeof e == "function" ? et(e) : $e(e);
	for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a) for (var o = t[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && (r.push(e.call(c, c.__data__, l, o)), i.push(c));
	return new P(r, i);
}
//#endregion
//#region node_modules/d3-selection/src/matcher.js
function nt(e) {
	return function() {
		return this.matches(e);
	};
}
function rt(e) {
	return function(t) {
		return t.matches(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectChild.js
var it = Array.prototype.find;
function at(e) {
	return function() {
		return it.call(this.children, e);
	};
}
function ot() {
	return this.firstElementChild;
}
function st(e) {
	return this.select(e == null ? ot : at(typeof e == "function" ? e : rt(e)));
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectChildren.js
var ct = Array.prototype.filter;
function lt() {
	return Array.from(this.children);
}
function ut(e) {
	return function() {
		return ct.call(this.children, e);
	};
}
function dt(e) {
	return this.selectAll(e == null ? lt : ut(typeof e == "function" ? e : rt(e)));
}
//#endregion
//#region node_modules/d3-selection/src/selection/filter.js
function ft(e) {
	typeof e != "function" && (e = nt(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new P(r, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/sparse.js
function pt(e) {
	return Array(e.length);
}
//#endregion
//#region node_modules/d3-selection/src/selection/enter.js
function mt() {
	return new P(this._enter || this._groups.map(pt), this._parents);
}
function ht(e, t) {
	this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
ht.prototype = {
	constructor: ht,
	appendChild: function(e) {
		return this._parent.insertBefore(e, this._next);
	},
	insertBefore: function(e, t) {
		return this._parent.insertBefore(e, t);
	},
	querySelector: function(e) {
		return this._parent.querySelector(e);
	},
	querySelectorAll: function(e) {
		return this._parent.querySelectorAll(e);
	}
};
//#endregion
//#region node_modules/d3-selection/src/constant.js
function gt(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/data.js
function _t(e, t, n, r, i, a) {
	for (var o = 0, s, c = t.length, l = a.length; o < l; ++o) (s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new ht(e, a[o]);
	for (; o < c; ++o) (s = t[o]) && (i[o] = s);
}
function vt(e, t, n, r, i, a, o) {
	var s, c, l = /* @__PURE__ */ new Map(), u = t.length, d = a.length, f = Array(u), p;
	for (s = 0; s < u; ++s) (c = t[s]) && (f[s] = p = o.call(c, c.__data__, s, t) + "", l.has(p) ? i[s] = c : l.set(p, c));
	for (s = 0; s < d; ++s) p = o.call(e, a[s], s, a) + "", (c = l.get(p)) ? (r[s] = c, c.__data__ = a[s], l.delete(p)) : n[s] = new ht(e, a[s]);
	for (s = 0; s < u; ++s) (c = t[s]) && l.get(f[s]) === c && (i[s] = c);
}
function yt(e) {
	return e.__data__;
}
function bt(e, t) {
	if (!arguments.length) return Array.from(this, yt);
	var n = t ? vt : _t, r = this._parents, i = this._groups;
	typeof e != "function" && (e = gt(e));
	for (var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0; l < a; ++l) {
		var u = r[l], d = i[l], f = d.length, p = xt(e.call(u, u && u.__data__, l, r)), m = p.length, h = s[l] = Array(m), g = o[l] = Array(m);
		n(u, d, h, g, c[l] = Array(f), p, t);
		for (var _ = 0, v = 0, y, b; _ < m; ++_) if (y = h[_]) {
			for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
			y._next = b || null;
		}
	}
	return o = new P(o, r), o._enter = s, o._exit = c, o;
}
function xt(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-selection/src/selection/exit.js
function St() {
	return new P(this._exit || this._groups.map(pt), this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/join.js
function Ct(e, t, n) {
	var r = this.enter(), i = this, a = this.exit();
	return typeof e == "function" ? (r = e(r), r &&= r.selection()) : r = r.append(e + ""), t != null && (i = t(i), i &&= i.selection()), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
//#endregion
//#region node_modules/d3-selection/src/selection/merge.js
function wt(e) {
	for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, a = r.length, o = Math.min(i, a), s = Array(i), c = 0; c < o; ++c) for (var l = n[c], u = r[c], d = l.length, f = s[c] = Array(d), p, m = 0; m < d; ++m) (p = l[m] || u[m]) && (f[m] = p);
	for (; c < i; ++c) s[c] = n[c];
	return new P(s, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/order.js
function Tt() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n;) for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;) (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/sort.js
function Et(e) {
	e ||= Dt;
	function t(t, n) {
		return t && n ? e(t.__data__, n.__data__) : !t - !n;
	}
	for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
		for (var o = n[a], s = o.length, c = i[a] = Array(s), l, u = 0; u < s; ++u) (l = o[u]) && (c[u] = l);
		c.sort(t);
	}
	return new P(i, this._parents).order();
}
function Dt(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-selection/src/selection/call.js
function Ot() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/nodes.js
function kt() {
	return Array.from(this);
}
//#endregion
//#region node_modules/d3-selection/src/selection/node.js
function At() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
		var o = r[i];
		if (o) return o;
	}
	return null;
}
//#endregion
//#region node_modules/d3-selection/src/selection/size.js
function jt() {
	let e = 0;
	for (let t of this) ++e;
	return e;
}
//#endregion
//#region node_modules/d3-selection/src/selection/empty.js
function Mt() {
	return !this.node();
}
//#endregion
//#region node_modules/d3-selection/src/selection/each.js
function Nt(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n) for (var i = t[n], a = 0, o = i.length, s; a < o; ++a) (s = i[a]) && e.call(s, s.__data__, a, i);
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/attr.js
function Pt(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function Ft(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function It(e, t) {
	return function() {
		this.setAttribute(e, t);
	};
}
function Lt(e, t) {
	return function() {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function Rt(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function zt(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function Bt(e, t) {
	var n = We(e);
	if (arguments.length < 2) {
		var r = this.node();
		return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
	}
	return this.each((t == null ? n.local ? Ft : Pt : typeof t == "function" ? n.local ? zt : Rt : n.local ? Lt : It)(n, t));
}
//#endregion
//#region node_modules/d3-selection/src/window.js
function Vt(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
//#endregion
//#region node_modules/d3-selection/src/selection/style.js
function Ht(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function Ut(e, t, n) {
	return function() {
		this.style.setProperty(e, t, n);
	};
}
function Wt(e, t, n) {
	return function() {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function Gt(e, t, n) {
	return arguments.length > 1 ? this.each((t == null ? Ht : typeof t == "function" ? Wt : Ut)(e, t, n ?? "")) : Kt(this.node(), e);
}
function Kt(e, t) {
	return e.style.getPropertyValue(t) || Vt(e).getComputedStyle(e, null).getPropertyValue(t);
}
//#endregion
//#region node_modules/d3-selection/src/selection/property.js
function qt(e) {
	return function() {
		delete this[e];
	};
}
function Jt(e, t) {
	return function() {
		this[e] = t;
	};
}
function Yt(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : this[e] = n;
	};
}
function Xt(e, t) {
	return arguments.length > 1 ? this.each((t == null ? qt : typeof t == "function" ? Yt : Jt)(e, t)) : this.node()[e];
}
//#endregion
//#region node_modules/d3-selection/src/selection/classed.js
function Zt(e) {
	return e.trim().split(/^|\s+/);
}
function Qt(e) {
	return e.classList || new $t(e);
}
function $t(e) {
	this._node = e, this._names = Zt(e.getAttribute("class") || "");
}
$t.prototype = {
	add: function(e) {
		this._names.indexOf(e) < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
	},
	remove: function(e) {
		var t = this._names.indexOf(e);
		t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
	},
	contains: function(e) {
		return this._names.indexOf(e) >= 0;
	}
};
function en(e, t) {
	for (var n = Qt(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function tn(e, t) {
	for (var n = Qt(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function nn(e) {
	return function() {
		en(this, e);
	};
}
function rn(e) {
	return function() {
		tn(this, e);
	};
}
function an(e, t) {
	return function() {
		(t.apply(this, arguments) ? en : tn)(this, e);
	};
}
function on(e, t) {
	var n = Zt(e + "");
	if (arguments.length < 2) {
		for (var r = Qt(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
		return !0;
	}
	return this.each((typeof t == "function" ? an : t ? nn : rn)(n, t));
}
//#endregion
//#region node_modules/d3-selection/src/selection/text.js
function sn() {
	this.textContent = "";
}
function cn(e) {
	return function() {
		this.textContent = e;
	};
}
function ln(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.textContent = t ?? "";
	};
}
function un(e) {
	return arguments.length ? this.each(e == null ? sn : (typeof e == "function" ? ln : cn)(e)) : this.node().textContent;
}
//#endregion
//#region node_modules/d3-selection/src/selection/html.js
function dn() {
	this.innerHTML = "";
}
function fn(e) {
	return function() {
		this.innerHTML = e;
	};
}
function pn(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? "";
	};
}
function mn(e) {
	return arguments.length ? this.each(e == null ? dn : (typeof e == "function" ? pn : fn)(e)) : this.node().innerHTML;
}
//#endregion
//#region node_modules/d3-selection/src/selection/raise.js
function hn() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function gn() {
	return this.each(hn);
}
//#endregion
//#region node_modules/d3-selection/src/selection/lower.js
function _n() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function vn() {
	return this.each(_n);
}
//#endregion
//#region node_modules/d3-selection/src/selection/append.js
function yn(e) {
	var t = typeof e == "function" ? e : qe(e);
	return this.select(function() {
		return this.appendChild(t.apply(this, arguments));
	});
}
//#endregion
//#region node_modules/d3-selection/src/selection/insert.js
function bn() {
	return null;
}
function xn(e, t) {
	var n = typeof e == "function" ? e : qe(e), r = t == null ? bn : typeof t == "function" ? t : Ye(t);
	return this.select(function() {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
//#endregion
//#region node_modules/d3-selection/src/selection/remove.js
function Sn() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function Cn() {
	return this.each(Sn);
}
//#endregion
//#region node_modules/d3-selection/src/selection/clone.js
function wn() {
	var e = this.cloneNode(!1), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Tn() {
	var e = this.cloneNode(!0), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function En(e) {
	return this.select(e ? Tn : wn);
}
//#endregion
//#region node_modules/d3-selection/src/selection/datum.js
function Dn(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
//#endregion
//#region node_modules/d3-selection/src/selection/on.js
function On(e) {
	return function(t) {
		e.call(this, t, this.__data__);
	};
}
function kn(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var t = "", n = e.indexOf(".");
		return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
			type: e,
			name: t
		};
	});
}
function An(e) {
	return function() {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, i = t.length, a; n < i; ++n) a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
			++r ? t.length = r : delete this.__on;
		}
	};
}
function jn(e, t, n) {
	return function() {
		var r = this.__on, i, a = On(t);
		if (r) {
			for (var o = 0, s = r.length; o < s; ++o) if ((i = r[o]).type === e.type && i.name === e.name) {
				this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = t;
				return;
			}
		}
		this.addEventListener(e.type, a, n), i = {
			type: e.type,
			name: e.name,
			value: t,
			listener: a,
			options: n
		}, r ? r.push(i) : this.__on = [i];
	};
}
function Mn(e, t, n) {
	var r = kn(e + ""), i, a = r.length, o;
	if (arguments.length < 2) {
		var s = this.node().__on;
		if (s) {
			for (var c = 0, l = s.length, u; c < l; ++c) for (i = 0, u = s[c]; i < a; ++i) if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
		}
		return;
	}
	for (s = t ? jn : An, i = 0; i < a; ++i) this.each(s(r[i], t, n));
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/dispatch.js
function Nn(e, t, n) {
	var r = Vt(e), i = r.CustomEvent;
	typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function Pn(e, t) {
	return function() {
		return Nn(this, e, t);
	};
}
function Fn(e, t) {
	return function() {
		return Nn(this, e, t.apply(this, arguments));
	};
}
function In(e, t) {
	return this.each((typeof t == "function" ? Fn : Pn)(e, t));
}
//#endregion
//#region node_modules/d3-selection/src/selection/iterator.js
function* Ln() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length, o; i < a; ++i) (o = r[i]) && (yield o);
}
//#endregion
//#region node_modules/d3-selection/src/selection/index.js
var Rn = [null];
function P(e, t) {
	this._groups = e, this._parents = t;
}
function zn() {
	return new P([[document.documentElement]], Rn);
}
function Bn() {
	return this;
}
P.prototype = zn.prototype = {
	constructor: P,
	select: Xe,
	selectAll: tt,
	selectChild: st,
	selectChildren: dt,
	filter: ft,
	data: bt,
	enter: mt,
	exit: St,
	join: Ct,
	merge: wt,
	selection: Bn,
	order: Tt,
	sort: Et,
	call: Ot,
	nodes: kt,
	node: At,
	size: jt,
	empty: Mt,
	each: Nt,
	attr: Bt,
	style: Gt,
	property: Xt,
	classed: on,
	text: un,
	html: mn,
	raise: gn,
	lower: vn,
	append: yn,
	insert: xn,
	remove: Cn,
	clone: En,
	datum: Dn,
	on: Mn,
	dispatch: In,
	[Symbol.iterator]: Ln
};
//#endregion
//#region node_modules/d3-selection/src/select.js
function F(e) {
	return typeof e == "string" ? new P([[document.querySelector(e)]], [document.documentElement]) : new P([[e]], Rn);
}
//#endregion
//#region node_modules/d3-selection/src/sourceEvent.js
function Vn(e) {
	let t;
	for (; t = e.sourceEvent;) e = t;
	return e;
}
//#endregion
//#region node_modules/d3-selection/src/pointer.js
function Hn(e, t) {
	if (e = Vn(e), t === void 0 && (t = e.currentTarget), t) {
		var n = t.ownerSVGElement || t;
		if (n.createSVGPoint) {
			var r = n.createSVGPoint();
			return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
		}
		if (t.getBoundingClientRect) {
			var i = t.getBoundingClientRect();
			return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
		}
	}
	return [e.pageX, e.pageY];
}
//#endregion
//#region node_modules/d3-selection/src/selectAll.js
function Un(e) {
	return typeof e == "string" ? new P([document.querySelectorAll(e)], [document.documentElement]) : new P([Ze(e)], Rn);
}
//#endregion
//#region node_modules/d3-time/src/interval.js
var Wn = /* @__PURE__ */ new Date(), Gn = /* @__PURE__ */ new Date();
function I(e, t, n, r) {
	function i(t) {
		return e(t = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+t)), t;
	}
	return i.floor = (t) => (e(t = /* @__PURE__ */ new Date(+t)), t), i.ceil = (n) => (e(n = /* @__PURE__ */ new Date(n - 1)), t(n, 1), e(n), n), i.round = (e) => {
		let t = i(e), n = i.ceil(e);
		return e - t < n - e ? t : n;
	}, i.offset = (e, n) => (t(e = /* @__PURE__ */ new Date(+e), n == null ? 1 : Math.floor(n)), e), i.range = (n, r, a) => {
		let o = [];
		if (n = i.ceil(n), a = a == null ? 1 : Math.floor(a), !(n < r) || !(a > 0)) return o;
		let s;
		do
			o.push(s = /* @__PURE__ */ new Date(+n)), t(n, a), e(n);
		while (s < n && n < r);
		return o;
	}, i.filter = (n) => I((t) => {
		if (t >= t) for (; e(t), !n(t);) t.setTime(t - 1);
	}, (e, r) => {
		if (e >= e) if (r < 0) for (; ++r <= 0;) for (; t(e, -1), !n(e););
		else for (; --r >= 0;) for (; t(e, 1), !n(e););
	}), n && (i.count = (t, r) => (Wn.setTime(+t), Gn.setTime(+r), e(Wn), e(Gn), Math.floor(n(Wn, Gn))), i.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? i.filter(r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0) : i)), i;
}
//#endregion
//#region node_modules/d3-time/src/millisecond.js
var Kn = I(() => {}, (e, t) => {
	e.setTime(+e + t);
}, (e, t) => t - e);
Kn.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? I((t) => {
	t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
	t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Kn), Kn.range;
//#endregion
//#region node_modules/d3-time/src/duration.js
var qn = 1e3, L = qn * 60, Jn = L * 60, Yn = Jn * 24, Xn = Yn * 7, Zn = Yn * 30, Qn = Yn * 365, $n = I((e) => {
	e.setTime(e - e.getMilliseconds());
}, (e, t) => {
	e.setTime(+e + t * qn);
}, (e, t) => (t - e) / qn, (e) => e.getUTCSeconds());
$n.range;
//#endregion
//#region node_modules/d3-time/src/minute.js
var er = I((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * qn);
}, (e, t) => {
	e.setTime(+e + t * L);
}, (e, t) => (t - e) / L, (e) => e.getMinutes());
er.range;
var tr = I((e) => {
	e.setUTCSeconds(0, 0);
}, (e, t) => {
	e.setTime(+e + t * L);
}, (e, t) => (t - e) / L, (e) => e.getUTCMinutes());
tr.range;
//#endregion
//#region node_modules/d3-time/src/hour.js
var nr = I((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * qn - e.getMinutes() * L);
}, (e, t) => {
	e.setTime(+e + t * Jn);
}, (e, t) => (t - e) / Jn, (e) => e.getHours());
nr.range;
var rr = I((e) => {
	e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
	e.setTime(+e + t * Jn);
}, (e, t) => (t - e) / Jn, (e) => e.getUTCHours());
rr.range;
//#endregion
//#region node_modules/d3-time/src/day.js
var ir = I((e) => e.setHours(0, 0, 0, 0), (e, t) => e.setDate(e.getDate() + t), (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * L) / Yn, (e) => e.getDate() - 1);
ir.range;
var ar = I((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Yn, (e) => e.getUTCDate() - 1);
ar.range;
var or = I((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Yn, (e) => Math.floor(e / Yn));
or.range;
//#endregion
//#region node_modules/d3-time/src/week.js
function sr(e) {
	return I((t) => {
		t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setDate(e.getDate() + t * 7);
	}, (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * L) / Xn);
}
var cr = sr(0), lr = sr(1), ur = sr(2), dr = sr(3), fr = sr(4), pr = sr(5), mr = sr(6);
cr.range, lr.range, ur.range, dr.range, fr.range, pr.range, mr.range;
function hr(e) {
	return I((t) => {
		t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setUTCDate(e.getUTCDate() + t * 7);
	}, (e, t) => (t - e) / Xn);
}
var gr = hr(0), _r = hr(1), vr = hr(2), yr = hr(3), br = hr(4), xr = hr(5), Sr = hr(6);
gr.range, _r.range, vr.range, yr.range, br.range, xr.range, Sr.range;
//#endregion
//#region node_modules/d3-time/src/month.js
var Cr = I((e) => {
	e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Cr.range;
var wr = I((e) => {
	e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
wr.range;
//#endregion
//#region node_modules/d3-time/src/year.js
var Tr = I((e) => {
	e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Tr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : I((t) => {
	t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
	t.setFullYear(t.getFullYear() + n * e);
}), Tr.range;
var Er = I((e) => {
	e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Er.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : I((t) => {
	t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
	t.setUTCFullYear(t.getUTCFullYear() + n * e);
}), Er.range;
//#endregion
//#region node_modules/d3-array/src/ascending.js
function Dr(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-array/src/bisector.js
function Or(e) {
	let t = e, n = e;
	e.length === 1 && (t = (t, n) => e(t) - n, n = kr(e));
	function r(e, t, r, i) {
		for (r ??= 0, i ??= e.length; r < i;) {
			let a = r + i >>> 1;
			n(e[a], t) < 0 ? r = a + 1 : i = a;
		}
		return r;
	}
	function i(e, t, r, i) {
		for (r ??= 0, i ??= e.length; r < i;) {
			let a = r + i >>> 1;
			n(e[a], t) > 0 ? i = a : r = a + 1;
		}
		return r;
	}
	function a(e, n, i, a) {
		i ??= 0, a ??= e.length;
		let o = r(e, n, i, a - 1);
		return o > i && t(e[o - 1], n) > -t(e[o], n) ? o - 1 : o;
	}
	return {
		left: r,
		center: a,
		right: i
	};
}
function kr(e) {
	return (t, n) => Dr(e(t), n);
}
//#endregion
//#region node_modules/d3-array/src/number.js
function Ar(e) {
	return e === null ? NaN : +e;
}
//#endregion
//#region node_modules/d3-array/src/bisect.js
var jr = Or(Dr), Mr = jr.right;
jr.left, Or(Ar).center;
//#endregion
//#region node_modules/internmap/src/index.js
var Nr = class extends Map {
	constructor(e, t = Lr) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: t }
		}), e != null) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		return super.get(Pr(this, e));
	}
	has(e) {
		return super.has(Pr(this, e));
	}
	set(e, t) {
		return super.set(Fr(this, e), t);
	}
	delete(e) {
		return super.delete(Ir(this, e));
	}
};
function Pr({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : n;
}
function Fr({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function Ir({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) && (n = e.get(n), e.delete(r)), n;
}
function Lr(e) {
	return typeof e == "object" && e ? e.valueOf() : e;
}
//#endregion
//#region node_modules/d3-array/src/ticks.js
var Rr = Math.sqrt(50), zr = Math.sqrt(10), Br = Math.sqrt(2);
function Vr(e, t, n) {
	var r, i = -1, a, o, s;
	if (t = +t, e = +e, n = +n, e === t && n > 0) return [e];
	if ((r = t < e) && (a = e, e = t, t = a), (s = Hr(e, t, n)) === 0 || !isFinite(s)) return [];
	if (s > 0) {
		let n = Math.round(e / s), r = Math.round(t / s);
		for (n * s < e && ++n, r * s > t && --r, o = Array(a = r - n + 1); ++i < a;) o[i] = (n + i) * s;
	} else {
		s = -s;
		let n = Math.round(e * s), r = Math.round(t * s);
		for (n / s < e && ++n, r / s > t && --r, o = Array(a = r - n + 1); ++i < a;) o[i] = (n + i) / s;
	}
	return r && o.reverse(), o;
}
function Hr(e, t, n) {
	var r = (t - e) / Math.max(0, n), i = Math.floor(Math.log(r) / Math.LN10), a = r / 10 ** i;
	return i >= 0 ? (a >= Rr ? 10 : a >= zr ? 5 : a >= Br ? 2 : 1) * 10 ** i : -(10 ** -i) / (a >= Rr ? 10 : a >= zr ? 5 : a >= Br ? 2 : 1);
}
function Ur(e, t, n) {
	var r = Math.abs(t - e) / Math.max(0, n), i = 10 ** Math.floor(Math.log(r) / Math.LN10), a = r / i;
	return a >= Rr ? i *= 10 : a >= zr ? i *= 5 : a >= Br && (i *= 2), t < e ? -i : i;
}
//#endregion
//#region node_modules/d3-array/src/max.js
function Wr(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n < t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n < i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/d3-array/src/min.js
function Gr(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n > t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n > i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/d3-array/src/sum.js
function Kr(e, t) {
	let n = 0;
	if (t === void 0) for (let t of e) (t = +t) && (n += t);
	else {
		let r = -1;
		for (let i of e) (i = +t(i, ++r, e)) && (n += i);
	}
	return n;
}
//#endregion
//#region node_modules/d3-time/src/ticks.js
function qr(e, t, n, r, i, a) {
	let o = [
		[
			$n,
			1,
			qn
		],
		[
			$n,
			5,
			5 * qn
		],
		[
			$n,
			15,
			15 * qn
		],
		[
			$n,
			30,
			30 * qn
		],
		[
			a,
			1,
			L
		],
		[
			a,
			5,
			5 * L
		],
		[
			a,
			15,
			15 * L
		],
		[
			a,
			30,
			30 * L
		],
		[
			i,
			1,
			Jn
		],
		[
			i,
			3,
			3 * Jn
		],
		[
			i,
			6,
			6 * Jn
		],
		[
			i,
			12,
			12 * Jn
		],
		[
			r,
			1,
			Yn
		],
		[
			r,
			2,
			2 * Yn
		],
		[
			n,
			1,
			Xn
		],
		[
			t,
			1,
			Zn
		],
		[
			t,
			3,
			3 * Zn
		],
		[
			e,
			1,
			Qn
		]
	];
	function s(e, t, n) {
		let r = t < e;
		r && ([e, t] = [t, e]);
		let i = n && typeof n.range == "function" ? n : c(e, t, n), a = i ? i.range(e, +t + 1) : [];
		return r ? a.reverse() : a;
	}
	function c(t, n, r) {
		let i = Math.abs(n - t) / r, a = Or(([, , e]) => e).right(o, i);
		if (a === o.length) return e.every(Ur(t / Qn, n / Qn, r));
		if (a === 0) return Kn.every(Math.max(Ur(t, n, r), 1));
		let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
		return s.every(c);
	}
	return [s, c];
}
var [Jr, Yr] = qr(Er, wr, gr, or, rr, tr), [Xr, Zr] = qr(Tr, Cr, cr, ir, nr, er);
//#endregion
//#region node_modules/d3-time-format/src/locale.js
function Qr(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
		return t.setFullYear(e.y), t;
	}
	return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function $r(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
		return t.setUTCFullYear(e.y), t;
	}
	return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function ei(e, t, n) {
	return {
		y: e,
		m: t,
		d: n,
		H: 0,
		M: 0,
		S: 0,
		L: 0
	};
}
function ti(e) {
	var t = e.dateTime, n = e.date, r = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, l = oi(i), u = si(i), d = oi(a), f = si(a), p = oi(o), m = si(o), h = oi(s), g = si(s), _ = oi(c), v = si(c), y = {
		a: te,
		A: ne,
		b: re,
		B: ie,
		c: null,
		d: Oi,
		e: Oi,
		f: Ni,
		g: Wi,
		G: Ki,
		H: ki,
		I: Ai,
		j: ji,
		L: Mi,
		m: Pi,
		M: Fi,
		p: ae,
		q: oe,
		Q: ha,
		s: ga,
		S: Ii,
		u: Li,
		U: Ri,
		V: Bi,
		w: Vi,
		W: Hi,
		x: null,
		X: null,
		y: Ui,
		Y: Gi,
		Z: qi,
		"%": ma
	}, b = {
		a: se,
		A: ce,
		b: le,
		B: ue,
		c: null,
		d: Ji,
		e: Ji,
		f: $i,
		g: ua,
		G: fa,
		H: Yi,
		I: Xi,
		j: Zi,
		L: Qi,
		m: ea,
		M: ta,
		p: de,
		q: fe,
		Q: ha,
		s: ga,
		S: na,
		u: ra,
		U: ia,
		V: oa,
		w: sa,
		W: ca,
		x: null,
		X: null,
		y: la,
		Y: da,
		Z: pa,
		"%": ma
	}, x = {
		a: E,
		A: D,
		b: O,
		B: k,
		c: A,
		d: vi,
		e: vi,
		f: wi,
		g: mi,
		G: pi,
		H: bi,
		I: bi,
		j: yi,
		L: Ci,
		m: _i,
		M: xi,
		p: T,
		q: gi,
		Q: Ei,
		s: Di,
		S: Si,
		u: li,
		U: ui,
		V: di,
		w: ci,
		W: fi,
		x: j,
		X: ee,
		y: mi,
		Y: pi,
		Z: hi,
		"%": Ti
	};
	y.x = S(n, y), y.X = S(r, y), y.c = S(t, y), b.x = S(n, b), b.X = S(r, b), b.c = S(t, b);
	function S(e, t) {
		return function(n) {
			var r = [], i = -1, a = 0, o = e.length, s, c, l;
			for (n instanceof Date || (n = /* @__PURE__ */ new Date(+n)); ++i < o;) e.charCodeAt(i) === 37 && (r.push(e.slice(a, i)), (c = ni[s = e.charAt(++i)]) == null ? c = s === "e" ? " " : "0" : s = e.charAt(++i), (l = t[s]) && (s = l(n, c)), r.push(s), a = i + 1);
			return r.push(e.slice(a, i)), r.join("");
		};
	}
	function C(e, t) {
		return function(n) {
			var r = ei(1900, void 0, 1), i = w(r, e, n += "", 0), a, o;
			if (i != n.length) return null;
			if ("Q" in r) return new Date(r.Q);
			if ("s" in r) return new Date(r.s * 1e3 + ("L" in r ? r.L : 0));
			if (t && !("Z" in r) && (r.Z = 0), "p" in r && (r.H = r.H % 12 + r.p * 12), r.m === void 0 && (r.m = "q" in r ? r.q : 0), "V" in r) {
				if (r.V < 1 || r.V > 53) return null;
				"w" in r || (r.w = 1), "Z" in r ? (a = $r(ei(r.y, 0, 1)), o = a.getUTCDay(), a = o > 4 || o === 0 ? _r.ceil(a) : _r(a), a = ar.offset(a, (r.V - 1) * 7), r.y = a.getUTCFullYear(), r.m = a.getUTCMonth(), r.d = a.getUTCDate() + (r.w + 6) % 7) : (a = Qr(ei(r.y, 0, 1)), o = a.getDay(), a = o > 4 || o === 0 ? lr.ceil(a) : lr(a), a = ir.offset(a, (r.V - 1) * 7), r.y = a.getFullYear(), r.m = a.getMonth(), r.d = a.getDate() + (r.w + 6) % 7);
			} else ("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : +("W" in r)), o = "Z" in r ? $r(ei(r.y, 0, 1)).getUTCDay() : Qr(ei(r.y, 0, 1)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + r.W * 7 - (o + 5) % 7 : r.w + r.U * 7 - (o + 6) % 7);
			return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, $r(r)) : Qr(r);
		};
	}
	function w(e, t, n, r) {
		for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
			if (r >= o) return -1;
			if (s = t.charCodeAt(i++), s === 37) {
				if (s = t.charAt(i++), c = x[s in ni ? t.charAt(i++) : s], !c || (r = c(e, n, r)) < 0) return -1;
			} else if (s != n.charCodeAt(r++)) return -1;
		}
		return r;
	}
	function T(e, t, n) {
		var r = l.exec(t.slice(n));
		return r ? (e.p = u.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function E(e, t, n) {
		var r = p.exec(t.slice(n));
		return r ? (e.w = m.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function D(e, t, n) {
		var r = d.exec(t.slice(n));
		return r ? (e.w = f.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function O(e, t, n) {
		var r = _.exec(t.slice(n));
		return r ? (e.m = v.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function k(e, t, n) {
		var r = h.exec(t.slice(n));
		return r ? (e.m = g.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function A(e, n, r) {
		return w(e, t, n, r);
	}
	function j(e, t, r) {
		return w(e, n, t, r);
	}
	function ee(e, t, n) {
		return w(e, r, t, n);
	}
	function te(e) {
		return o[e.getDay()];
	}
	function ne(e) {
		return a[e.getDay()];
	}
	function re(e) {
		return c[e.getMonth()];
	}
	function ie(e) {
		return s[e.getMonth()];
	}
	function ae(e) {
		return i[+(e.getHours() >= 12)];
	}
	function oe(e) {
		return 1 + ~~(e.getMonth() / 3);
	}
	function se(e) {
		return o[e.getUTCDay()];
	}
	function ce(e) {
		return a[e.getUTCDay()];
	}
	function le(e) {
		return c[e.getUTCMonth()];
	}
	function ue(e) {
		return s[e.getUTCMonth()];
	}
	function de(e) {
		return i[+(e.getUTCHours() >= 12)];
	}
	function fe(e) {
		return 1 + ~~(e.getUTCMonth() / 3);
	}
	return {
		format: function(e) {
			var t = S(e += "", y);
			return t.toString = function() {
				return e;
			}, t;
		},
		parse: function(e) {
			var t = C(e += "", !1);
			return t.toString = function() {
				return e;
			}, t;
		},
		utcFormat: function(e) {
			var t = S(e += "", b);
			return t.toString = function() {
				return e;
			}, t;
		},
		utcParse: function(e) {
			var t = C(e += "", !0);
			return t.toString = function() {
				return e;
			}, t;
		}
	};
}
var ni = {
	"-": "",
	_: " ",
	0: "0"
}, R = /^\s*\d+/, ri = /^%/, ii = /[\\^$*+?|[\]().{}]/g;
function z(e, t, n) {
	var r = e < 0 ? "-" : "", i = (r ? -e : e) + "", a = i.length;
	return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function ai(e) {
	return e.replace(ii, "\\$&");
}
function oi(e) {
	return RegExp("^(?:" + e.map(ai).join("|") + ")", "i");
}
function si(e) {
	return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function ci(e, t, n) {
	var r = R.exec(t.slice(n, n + 1));
	return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function li(e, t, n) {
	var r = R.exec(t.slice(n, n + 1));
	return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function ui(e, t, n) {
	var r = R.exec(t.slice(n, n + 2));
	return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function di(e, t, n) {
	var r = R.exec(t.slice(n, n + 2));
	return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function fi(e, t, n) {
	var r = R.exec(t.slice(n, n + 2));
	return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function pi(e, t, n) {
	var r = R.exec(t.slice(n, n + 4));
	return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function mi(e, t, n) {
	var r = R.exec(t.slice(n, n + 2));
	return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function hi(e, t, n) {
	var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
	return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function gi(e, t, n) {
	var r = R.exec(t.slice(n, n + 1));
	return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function _i(e, t, n) {
	var r = R.exec(t.slice(n, n + 2));
	return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function vi(e, t, n) {
	var r = R.exec(t.slice(n, n + 2));
	return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function yi(e, t, n) {
	var r = R.exec(t.slice(n, n + 3));
	return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function bi(e, t, n) {
	var r = R.exec(t.slice(n, n + 2));
	return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function xi(e, t, n) {
	var r = R.exec(t.slice(n, n + 2));
	return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function Si(e, t, n) {
	var r = R.exec(t.slice(n, n + 2));
	return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function Ci(e, t, n) {
	var r = R.exec(t.slice(n, n + 3));
	return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function wi(e, t, n) {
	var r = R.exec(t.slice(n, n + 6));
	return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Ti(e, t, n) {
	var r = ri.exec(t.slice(n, n + 1));
	return r ? n + r[0].length : -1;
}
function Ei(e, t, n) {
	var r = R.exec(t.slice(n));
	return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function Di(e, t, n) {
	var r = R.exec(t.slice(n));
	return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function Oi(e, t) {
	return z(e.getDate(), t, 2);
}
function ki(e, t) {
	return z(e.getHours(), t, 2);
}
function Ai(e, t) {
	return z(e.getHours() % 12 || 12, t, 2);
}
function ji(e, t) {
	return z(1 + ir.count(Tr(e), e), t, 3);
}
function Mi(e, t) {
	return z(e.getMilliseconds(), t, 3);
}
function Ni(e, t) {
	return Mi(e, t) + "000";
}
function Pi(e, t) {
	return z(e.getMonth() + 1, t, 2);
}
function Fi(e, t) {
	return z(e.getMinutes(), t, 2);
}
function Ii(e, t) {
	return z(e.getSeconds(), t, 2);
}
function Li(e) {
	var t = e.getDay();
	return t === 0 ? 7 : t;
}
function Ri(e, t) {
	return z(cr.count(Tr(e) - 1, e), t, 2);
}
function zi(e) {
	var t = e.getDay();
	return t >= 4 || t === 0 ? fr(e) : fr.ceil(e);
}
function Bi(e, t) {
	return e = zi(e), z(fr.count(Tr(e), e) + (Tr(e).getDay() === 4), t, 2);
}
function Vi(e) {
	return e.getDay();
}
function Hi(e, t) {
	return z(lr.count(Tr(e) - 1, e), t, 2);
}
function Ui(e, t) {
	return z(e.getFullYear() % 100, t, 2);
}
function Wi(e, t) {
	return e = zi(e), z(e.getFullYear() % 100, t, 2);
}
function Gi(e, t) {
	return z(e.getFullYear() % 1e4, t, 4);
}
function Ki(e, t) {
	var n = e.getDay();
	return e = n >= 4 || n === 0 ? fr(e) : fr.ceil(e), z(e.getFullYear() % 1e4, t, 4);
}
function qi(e) {
	var t = e.getTimezoneOffset();
	return (t > 0 ? "-" : (t *= -1, "+")) + z(t / 60 | 0, "0", 2) + z(t % 60, "0", 2);
}
function Ji(e, t) {
	return z(e.getUTCDate(), t, 2);
}
function Yi(e, t) {
	return z(e.getUTCHours(), t, 2);
}
function Xi(e, t) {
	return z(e.getUTCHours() % 12 || 12, t, 2);
}
function Zi(e, t) {
	return z(1 + ar.count(Er(e), e), t, 3);
}
function Qi(e, t) {
	return z(e.getUTCMilliseconds(), t, 3);
}
function $i(e, t) {
	return Qi(e, t) + "000";
}
function ea(e, t) {
	return z(e.getUTCMonth() + 1, t, 2);
}
function ta(e, t) {
	return z(e.getUTCMinutes(), t, 2);
}
function na(e, t) {
	return z(e.getUTCSeconds(), t, 2);
}
function ra(e) {
	var t = e.getUTCDay();
	return t === 0 ? 7 : t;
}
function ia(e, t) {
	return z(gr.count(Er(e) - 1, e), t, 2);
}
function aa(e) {
	var t = e.getUTCDay();
	return t >= 4 || t === 0 ? br(e) : br.ceil(e);
}
function oa(e, t) {
	return e = aa(e), z(br.count(Er(e), e) + (Er(e).getUTCDay() === 4), t, 2);
}
function sa(e) {
	return e.getUTCDay();
}
function ca(e, t) {
	return z(_r.count(Er(e) - 1, e), t, 2);
}
function la(e, t) {
	return z(e.getUTCFullYear() % 100, t, 2);
}
function ua(e, t) {
	return e = aa(e), z(e.getUTCFullYear() % 100, t, 2);
}
function da(e, t) {
	return z(e.getUTCFullYear() % 1e4, t, 4);
}
function fa(e, t) {
	var n = e.getUTCDay();
	return e = n >= 4 || n === 0 ? br(e) : br.ceil(e), z(e.getUTCFullYear() % 1e4, t, 4);
}
function pa() {
	return "+0000";
}
function ma() {
	return "%";
}
function ha(e) {
	return +e;
}
function ga(e) {
	return Math.floor(e / 1e3);
}
//#endregion
//#region node_modules/d3-time-format/src/defaultLocale.js
var _a, va, ya, ba, xa;
Sa({
	dateTime: "%x, %X",
	date: "%-m/%-d/%Y",
	time: "%-I:%M:%S %p",
	periods: ["AM", "PM"],
	days: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	],
	shortDays: [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],
	months: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	],
	shortMonths: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	]
});
function Sa(e) {
	return _a = ti(e), va = _a.format, ya = _a.parse, ba = _a.utcFormat, xa = _a.utcParse, _a;
}
//#endregion
//#region node_modules/billboard.js/dist-esm/config/classes.js
var B = {
	button: "bb-button",
	chart: "bb-chart",
	empty: "bb-empty",
	main: "bb-main",
	target: "bb-target",
	EXPANDED: "_expanded_",
	dummy: "_dummy_"
}, Ca = {
	arc: "bb-arc",
	arcLabelLine: "bb-arc-label-line",
	arcLabelLineText: "bb-arc-label-line-text",
	arcRange: "bb-arc-range",
	arcs: "bb-arcs",
	chartArc: "bb-chart-arc",
	chartArcs: "bb-chart-arcs",
	chartArcsBackground: "bb-chart-arcs-background",
	chartArcsTitle: "bb-chart-arcs-title",
	needle: "bb-needle"
}, wa = {
	area: "bb-area",
	areas: "bb-areas"
}, V = {
	axis: "bb-axis",
	axisX: "bb-axis-x",
	axisXLabel: "bb-axis-x-label",
	axisY: "bb-axis-y",
	axisY2: "bb-axis-y2",
	axisY2Label: "bb-axis-y2-label",
	axisYLabel: "bb-axis-y-label",
	axisXTooltip: "bb-axis-x-tooltip",
	axisYTooltip: "bb-axis-y-tooltip",
	axisY2Tooltip: "bb-axis-y2-tooltip",
	axisTooltipX: "bb-axis-tooltip-x",
	axisTooltipY: "bb-axis-tooltip-y"
}, H = {
	bar: "bb-bar",
	bars: "bb-bars",
	chartBar: "bb-chart-bar",
	chartBars: "bb-chart-bars",
	barConnectLine: "bb-bar-connectLine"
}, Ta = {
	candlestick: "bb-candlestick",
	candlesticks: "bb-candlesticks",
	chartCandlestick: "bb-chart-candlestick",
	chartCandlesticks: "bb-chart-candlesticks",
	valueDown: "bb-value-down",
	valueUp: "bb-value-up"
}, Ea = {
	chartCircles: "bb-chart-circles",
	circle: "bb-circle",
	circles: "bb-circles"
}, Da = {
	colorPattern: "bb-color-pattern",
	colorScale: "bb-colorscale"
}, Oa = {
	dragarea: "bb-dragarea",
	INCLUDED: "_included_"
}, ka = {
	funnel: "bb-funnel",
	chartFunnel: "bb-chart-funnel",
	chartFunnels: "bb-chart-funnels",
	funnelBackground: "bb-funnel-background"
}, Aa = {
	chartArcsGaugeMax: "bb-chart-arcs-gauge-max",
	chartArcsGaugeMin: "bb-chart-arcs-gauge-min",
	chartArcsGaugeUnit: "bb-chart-arcs-gauge-unit",
	chartArcsGaugeTitle: "bb-chart-arcs-gauge-title",
	gaugeValue: "bb-gauge-value"
}, U = {
	legend: "bb-legend",
	legendBackground: "bb-legend-background",
	legendItem: "bb-legend-item",
	legendItemEvent: "bb-legend-item-event",
	legendItemHidden: "bb-legend-item-hidden",
	legendItemPoint: "bb-legend-item-point",
	legendItemTile: "bb-legend-item-tile"
}, ja = {
	chartLine: "bb-chart-line",
	chartLines: "bb-chart-lines",
	line: "bb-line",
	lines: "bb-lines"
}, Ma = {
	eventRect: "bb-event-rect",
	eventRects: "bb-event-rects",
	eventRectsMultiple: "bb-event-rects-multiple",
	eventRectsSingle: "bb-event-rects-single"
}, W = {
	focused: "bb-focused",
	defocused: "bb-defocused",
	legendItemFocused: "bb-legend-item-focused",
	xgridFocus: "bb-xgrid-focus",
	ygridFocus: "bb-ygrid-focus"
}, Na = {
	grid: "bb-grid",
	gridLines: "bb-grid-lines",
	xgrid: "bb-xgrid",
	xgridLine: "bb-xgrid-line",
	xgridLines: "bb-xgrid-lines",
	xgrids: "bb-xgrids",
	ygrid: "bb-ygrid",
	ygridLine: "bb-ygrid-line",
	ygridLines: "bb-ygrid-lines",
	ygrids: "bb-ygrids"
}, Pa = {
	level: "bb-level",
	levels: "bb-levels"
}, Fa = {
	chartRadar: "bb-chart-radar",
	chartRadars: "bb-chart-radars"
}, Ia = {
	region: "bb-region",
	regions: "bb-regions"
}, La = {
	selectedCircle: "bb-selected-circle",
	selectedCircles: "bb-selected-circles",
	SELECTED: "_selected_"
}, G = {
	shape: "bb-shape",
	shapes: "bb-shapes"
}, Ra = {
	brush: "bb-brush",
	subchart: "bb-subchart"
}, K = {
	chartText: "bb-chart-text",
	chartTexts: "bb-chart-texts",
	text: "bb-text",
	texts: "bb-texts",
	title: "bb-title",
	textBorderRect: "bb-text-border",
	textLabelImage: "bb-text-label-image",
	TextOverlapping: "text-overlapping"
}, za = {
	tooltip: "bb-tooltip",
	tooltipContainer: "bb-tooltip-container",
	tooltipName: "bb-tooltip-name"
}, Ba = {
	treemap: "bb-treemap",
	chartTreemap: "bb-chart-treemap",
	chartTreemaps: "bb-chart-treemaps"
}, Va = {
	buttonZoomReset: "bb-zoom-reset",
	zoomBrush: "bb-zoom-brush"
}, q = {
	...B,
	...Ca,
	...wa,
	...V,
	...H,
	...Ta,
	...Ea,
	...Da,
	...Oa,
	...Aa,
	...U,
	...ja,
	...Ma,
	...W,
	...ka,
	...Na,
	...Pa,
	...Fa,
	...Ia,
	...La,
	...G,
	...Ra,
	...K,
	...za,
	...Ba,
	...Va
}, Ha = {
	boost_useCssRule: !1,
	boost_useWorker: !1
}, Ua = {
	color_pattern: [],
	color_tiles: void 0,
	color_threshold: {},
	color_onover: void 0
}, Wa = {
	legend_contents_bindto: void 0,
	legend_contents_template: "<span style='color:#fff;padding:5px;background-color:{=COLOR}'>{=TITLE}</span>",
	legend_equally: !1,
	legend_hide: !1,
	legend_inset_anchor: "top-left",
	legend_inset_x: 10,
	legend_inset_y: 0,
	legend_inset_step: void 0,
	legend_item_interaction: !0,
	legend_item_dblclick: !1,
	legend_item_onclick: void 0,
	legend_item_onover: void 0,
	legend_item_onout: void 0,
	legend_item_tile_width: 10,
	legend_item_tile_height: 10,
	legend_item_tile_r: 5,
	legend_item_tile_type: "rectangle",
	legend_format: void 0,
	legend_padding: 0,
	legend_position: "bottom",
	legend_show: !0,
	legend_tooltip: !1,
	legend_usePoint: !1
}, Ga = {
	bindto: "#chart",
	background: {},
	clipPath: !0,
	svg_classname: void 0,
	size_width: void 0,
	size_height: void 0,
	padding: !0,
	padding_mode: void 0,
	padding_left: void 0,
	padding_right: void 0,
	padding_top: void 0,
	padding_bottom: void 0,
	resize_auto: !0,
	resize_timer: !0,
	onclick: void 0,
	onover: void 0,
	onout: void 0,
	onresize: void 0,
	onresized: void 0,
	onbeforeinit: void 0,
	oninit: void 0,
	onafterinit: void 0,
	onrendered: void 0,
	transition_duration: 250,
	plugins: [],
	render: {},
	render_mode: "svg",
	canvas_theme: {},
	regions: []
}, Ka = {
	title_text: void 0,
	title_padding: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	},
	title_position: "center"
}, qa = {
	tooltip_show: !0,
	tooltip_doNotHide: !1,
	tooltip_grouped: !0,
	tooltip_format_title: void 0,
	tooltip_format_name: void 0,
	tooltip_format_value: void 0,
	tooltip_position: void 0,
	tooltip_contents: {},
	tooltip_init_show: !1,
	tooltip_init_x: 0,
	tooltip_init_position: void 0,
	tooltip_linked: !1,
	tooltip_linked_name: "",
	tooltip_onshow: () => {},
	tooltip_onhide: () => {},
	tooltip_onshown: () => {},
	tooltip_onhidden: () => {},
	tooltip_order: null
}, Ja = {
	data_x: void 0,
	data_idConverter: (e) => e,
	data_names: {},
	data_classes: {},
	data_type: void 0,
	data_types: {},
	data_order: "desc",
	data_groups: [],
	data_groupsZeroAs: "positive",
	data_color: void 0,
	data_colors: {},
	data_labels: {},
	data_labels_backgroundColors: void 0,
	data_labels_colors: void 0,
	data_labels_position: {},
	data_labels_imgUrl: void 0,
	data_hide: !1,
	data_filter: void 0,
	data_onclick: () => {},
	data_onover: () => {},
	data_onout: () => {},
	data_onshown: void 0,
	data_onhidden: void 0,
	data_onmin: void 0,
	data_onmax: void 0,
	data_url: void 0,
	data_headers: void 0,
	data_json: void 0,
	data_rows: void 0,
	data_columns: void 0,
	data_mimeType: "csv",
	data_keys: void 0,
	data_empty_label_text: ""
}, Ya = {
	interaction_enabled: !0,
	interaction_brighten: !0,
	interaction_inputType_mouse: !0,
	interaction_inputType_touch: {},
	interaction_onout: !0
}, Xa = class e {
	static data = {};
	static setOptions(e) {
		for (let t = 0; t < e.length; t++) Object.assign(this.data, e[t]);
	}
	constructor() {
		return we(Ga, Ha, Ja, Ua, Ya, Wa, Ka, qa, e.data);
	}
}, Za = {
	element: class {
		constructor() {
			return {
				chart: null,
				main: null,
				svg: null,
				axis: {
					x: null,
					y: null,
					y2: null,
					subX: null
				},
				axisTooltip: {
					x: null,
					y: null,
					y2: null
				},
				defs: null,
				tooltip: null,
				legend: null,
				title: null,
				subchart: {
					main: null,
					bar: null,
					line: null,
					area: null
				},
				arcs: null,
				bar: null,
				candlestick: null,
				line: null,
				area: null,
				circle: null,
				radar: null,
				text: null,
				grid: {
					main: null,
					x: null,
					y: null
				},
				gridLines: {
					main: null,
					x: null,
					y: null
				},
				region: {
					main: null,
					list: null
				},
				eventRect: null,
				zoomResetBtn: null
			};
		}
	},
	state: class {
		constructor() {
			return {
				width: 0,
				width2: 0,
				height: 0,
				height2: 0,
				margin: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				margin2: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				margin3: {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				arcWidth: 0,
				arcHeight: 0,
				xAxisHeight: 0,
				hasAxis: !1,
				hasFunnel: !1,
				hasRadar: !1,
				hasTreemap: !1,
				isCanvasMode: !1,
				canvasShape: null,
				canvasFocusKey: null,
				canvasSubchartBrushDragging: !1,
				canvasSubchartBrushMode: null,
				canvasSubchartBrushStart: null,
				canvasSubchartBrushOrigin: null,
				canvasSubchartBrushMoved: !1,
				canvasFlowFrame: null,
				canvasFlowFinish: null,
				canvasFocusMainRedraw: !1,
				cssRule: {},
				loading: void 0,
				domain: void 0,
				current: {
					domain: void 0,
					width: 0,
					height: 0,
					dataMax: 0,
					maxTickSize: {
						x: {
							width: 0,
							height: 0,
							ticks: [],
							clipPath: 0,
							domain: ""
						},
						y: {
							width: 0,
							height: 0,
							domain: ""
						},
						y2: {
							width: 0,
							height: 0,
							domain: ""
						}
					},
					types: [],
					needle: void 0,
					zoomDomain: null
				},
				isLegendRight: !1,
				isLegendInset: !1,
				isLegendTop: !1,
				isLegendLeft: !1,
				legendStep: 0,
				legendItemWidth: 0,
				legendItemHeight: 0,
				legendHasRendered: !1,
				canvasInlineStyle: { minHeight: "" },
				canvasSelection: /* @__PURE__ */ new Set(),
				canvasSelectionDragStart: null,
				canvasSelectionDragIncluded: /* @__PURE__ */ new Set(),
				canvasSelectionDragging: !1,
				canvasSelectionDragMoved: !1,
				canvasSelectionDragMoveHandler: null,
				canvasSelectionDragEndHandler: null,
				eventReceiver: {
					currentIdx: -1,
					rect: {},
					data: [],
					coords: []
				},
				axis: { x: {
					padding: {
						left: 0,
						right: 0
					},
					tickCount: 0
				} },
				rotatedPadding: {
					left: 30,
					right: 0,
					top: 5
				},
				withoutFadeIn: {},
				inputType: "",
				datetimeId: "",
				clip: {
					id: "",
					idXAxis: "",
					idYAxis: "",
					idXAxisTickTexts: "",
					idGrid: "",
					idSubchart: "",
					path: "",
					pathXAxis: "",
					pathYAxis: "",
					pathXAxisTickTexts: "",
					pathGrid: ""
				},
				event: null,
				dragStart: null,
				dragging: !1,
				flowing: !1,
				cancelClick: !1,
				mouseover: !1,
				rendered: !1,
				transiting: !1,
				redrawing: !1,
				resizing: !1,
				toggling: !1,
				zooming: !1,
				hasNegativeValue: !1,
				hasPositiveValue: !0,
				orgAreaOpacity: "0.2",
				orgConfig: {},
				hiddenTargetIds: /* @__PURE__ */ new Set(),
				hiddenLegendIds: /* @__PURE__ */ new Set(),
				focusedTargetIds: /* @__PURE__ */ new Set(),
				defocusedTargetIds: /* @__PURE__ */ new Set(),
				radius: 0,
				innerRadius: 0,
				outerRadius: void 0,
				innerRadiusRatio: 0,
				gaugeArcWidth: 0,
				radiusExpanded: 0,
				xgridAttr: {
					x1: null,
					x2: null,
					y1: null,
					y2: null
				},
				pendingRaf: null,
				rafBatchQueue: [],
				dirty: {
					data: !1,
					visibility: !1,
					size: !1
				},
				redrawGeneration: 0,
				dataGeneration: 0,
				_targetsToShow: null,
				_cachedDrawShape: null,
				_canvasVisibleRangeCache: null,
				_canvasXDataTickCache: null,
				_canvasXTickValuesCache: null,
				_eventRectFingerprint: null,
				_lastTooltipMouse: null,
				_gridFocusEl: null,
				generateClassCache: /* @__PURE__ */ new Map()
			};
		}
	}
}, Qa = class {
	constructor() {
		Object.keys(Za).forEach((e) => {
			this[e] = new Za[e]();
		});
	}
	getStore(e) {
		return this[e];
	}
}, J = {
	bubbleBaseLength: "$baseLength",
	bubbleMaxValue: "$bubbleMaxValue",
	colorPattern: "__colorPattern__",
	dataMinMax: "$dataMinMax",
	dataTotalSum: "$dataTotalSum",
	dataTotalPerIndex: "$totalPerIndex",
	domainMinMax: "$domainMinMax",
	filteredTargets: "$filteredTargets",
	svgLeft: "$svgLeft",
	valuesByX: "$valuesByX",
	legendItemTextBox: "legendItemTextBox",
	legendItemMap: "$legendItemMap",
	radarPoints: "$radarPoints",
	radarTextWidth: "$radarTextWidth",
	setOverOut: "setOverOut",
	callOverOutForTouch: "callOverOutForTouch",
	textRect: "textRect",
	shapeOffset: "$shapeOffset",
	maxTickSize: "$maxTickSize",
	maxDataCountTarget: "$maxDataCountTarget",
	valuesXIndexMap: "$valuesXIndexMap"
}, $a = class {
	cache = /* @__PURE__ */ new Map();
	add(e, t, n = !1) {
		let r = n ? this.cloneTarget(t) : t;
		return this.cache.set(e, r), r;
	}
	remove(e) {
		let t = p(e) ? [e] : e;
		for (let e = 0; e < t.length; e++) this.cache.delete(t[e]);
	}
	get(e, t = !1) {
		if (t && Array.isArray(e)) {
			let t = [];
			for (let n = 0, r; r = e[n]; n++) this.cache.has(r) && t.push(this.cache.get(r));
			return t;
		}
		return this.cache.has(e) ? this.cache.get(e) : null;
	}
	has(e) {
		return this.cache.has(e);
	}
	getKeys() {
		return Array.from(this.cache.keys());
	}
	reset(e, t) {
		e ? this.cache.clear() : this.cache.forEach((e, n) => {
			/^\$/.test(n) && (t?.some((e) => n.startsWith(e)) || this.cache.delete(n));
		});
	}
	cloneTarget(e) {
		return {
			id: e.id,
			id_org: e.id_org,
			values: e.values.map((e) => ({
				x: e.x,
				value: e.value,
				id: e.id
			}))
		};
	}
}, eo = /\s?(bb-)/g, to = /\.+/g;
function no(e) {
	return e.replace(eo, ".$1").replace(to, ".");
}
function ro(e, t, n = !1) {
	let r = (t) => t[e ? "getBoundingClientRect" : "getBBox"](), i = e ? "rectClient" : "rectBBox";
	return n ? r(t) : !(i in t) || t.hasAttribute("width") && t[i].width !== +(t.getAttribute("width") || 0) ? t[i] = r(t) : t[i];
}
function io(e, t, n = [-1, 1], r = !1) {
	if (!(!e || !p(t))) if (t.indexOf("\n") === -1) e.text(t);
	else {
		let i = [e.text(), t].map((e) => e.replace(/[\s\n]/g, ""));
		if (i[0] !== i[1]) {
			let i = t.split("\n"), a = r ? i.length - 1 : 1;
			e.html(""), i.forEach((t, r) => {
				e.append("tspan").attr("x", 0).attr("dy", `${r === 0 ? n[0] * a : n[1]}em`).text(t);
			});
		}
	}
}
function ao(e) {
	let { x: t, y: n, width: r, height: i } = so(e, !0);
	return [
		{
			x: t,
			y: n + i
		},
		{
			x: t,
			y: n
		},
		{
			x: t + r,
			y: n
		},
		{
			x: t + r,
			y: n + i
		}
	];
}
function oo(e, t) {
	let n = e && (e.touches || e.sourceEvent && e.sourceEvent.touches)?.[0], r = [0, 0];
	try {
		r = Hn(n || e, t);
	} catch {}
	return r.map((e) => isNaN(e) ? 0 : e);
}
function Y(e, t = !1) {
	return ro(!0, e, t);
}
function so(e, t = !1) {
	return ro(!1, e, t);
}
function co(e, t, n) {
	let { rootSelector: r = "", sheet: i } = e, a = `${r} ${no(t)} {${n.join(";")}}`;
	return i[i.insertRule ? "insertRule" : "addRule"](a, i.cssRules.length);
}
function lo(e) {
	return {
		x: (a.pageXOffset ?? a.scrollX ?? 0) + (e.scrollLeft ?? 0),
		y: (a.pageYOffset ?? a.scrollY ?? 0) + (e.scrollTop ?? 0)
	};
}
function uo(e, t = 0, n = 0, r = !0) {
	let i = new DOMPoint(t, n), a = e.getScreenCTM(), o = i.matrixTransform(r ? a?.inverse() : a);
	if (r === !1) {
		let t = Y(e);
		o.x -= t.x, o.y -= t.y;
	}
	return o;
}
function fo(e) {
	let t = e ? e.transform : null, n = t && t.baseVal;
	return n && n.numberOfItems ? n.getItem(0).matrix : {
		a: 0,
		b: 0,
		c: 0,
		d: 0,
		e: 0,
		f: 0
	};
}
function po(e, t) {
	let n = e?.getAttribute?.(t);
	if (n) return parseFloat(n);
	let r = fo(e);
	return t === "x" ? r.e : r.f;
}
function mo(e) {
	let t = e.attr("viewBox");
	return t ? t.trim().split(/[\s,]+/).length === 4 : !1;
}
function ho(e, t, n = !1) {
	let r = !!e.node, i = !1;
	for (let [a, o] of Object.entries(t)) if (i = r ? e.style(a) === o : e.style[a] === o, n ? !i : i) break;
	return i;
}
function go() {
	return o?.hidden === !1 || o?.visibilityState === "visible";
}
function _o(e, t) {
	let { DocumentTouch: n, matchMedia: r, navigator: i } = a, s = r?.("(pointer:coarse)").matches, c = !1;
	if (t) if (i && "maxTouchPoints" in i) c = i.maxTouchPoints > 0;
	else if ("ontouchmove" in a || n && o instanceof n) c = !0;
	else if (s) c = !0;
	else {
		let e = i.userAgent;
		c = /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(e) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(e);
	}
	return e && !s && r?.("(pointer:fine)").matches && "mouse" || c && "touch" || "mouse";
}
var vo = {
	mouse: (() => {
		let e = () => ({
			bubbles: !1,
			cancelable: !1,
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0
		});
		try {
			return new MouseEvent("t"), (t, n, r = e()) => {
				t.dispatchEvent(new MouseEvent(n, r));
			};
		} catch {
			return (t, n, r = e()) => {
				let i = o.createEvent("MouseEvent");
				i.initMouseEvent(n, r.bubbles, r.cancelable, a, 0, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), t.dispatchEvent(i);
			};
		}
	})(),
	touch: (e, t, n) => {
		let r = new Touch(Oe({
			identifier: Date.now(),
			target: e,
			radiusX: 2.5,
			radiusY: 2.5,
			rotationAngle: 10,
			force: .5
		}, n));
		e.dispatchEvent(new TouchEvent(t, {
			cancelable: !0,
			bubbles: !0,
			shiftKey: !0,
			touches: [r],
			targetTouches: [],
			changedTouches: [r]
		}));
	}
}, { setTimeout: yo, clearTimeout: bo } = a;
function xo(e) {
	let t = [], n, r = function() {
		r.clear(), n = e === !1 ? l(() => {
			n = null, t.forEach((e) => e());
		}, { timeout: 200 }) : yo(() => {
			n = null, t.forEach((e) => e());
		}, m(e) ? e : 200);
	};
	return r.clear = () => {
		n &&= ((e === !1 ? u : bo)(n), null);
	}, r.add = (e) => t.push(e), r.remove = (e) => {
		let n = t.indexOf(e);
		n !== -1 && t.splice(n, 1);
	}, r;
}
function So() {
	let e = [], t = function(t, n) {
		function r() {
			let t = 0;
			for (let n = 0, r; r = e[n]; n++) {
				if (r === !0 || r.empty?.()) {
					t++;
					continue;
				}
				if (go() === !1) {
					t = e.length;
					break;
				}
				try {
					r.transition();
				} catch {
					t++;
				}
			}
			return t === e.length;
		}
		Le(() => {
			n?.();
		}, r);
	};
	return t.add = function(t) {
		T(t) ? e = e.concat(t) : e.push(t);
	}, t;
}
//#endregion
//#region node_modules/billboard.js/dist-esm/module/worker.js
var Co = {}, wo = 0;
function To(e, t) {
	let n = e.toString(), r = t?.map(String).join(";") ?? "", i = (n + r).replace(/(function|[\s\W\n])/g, "").substring(0, 30);
	if (!(i in Co)) try {
		let e = new a.Blob([`${r}

				self.onmessage=function({data}) {
					const result = (${n}).apply(null, data.args);
					self.postMessage({id: data.id, result});
				};`], { type: "text/javascript" });
		Co[i] = {
			src: a.URL.createObjectURL(e),
			worker: null
		};
	} catch {
		return null;
	}
	return {
		key: i,
		src: Co[i].src
	};
}
function Eo(e, t) {
	let n = Co[e];
	if (!n) return null;
	if (!n.worker) {
		try {
			n.worker = new a.Worker(t);
		} catch {
			return null;
		}
		n.worker && (n.worker.onerror = function(e) {
			console.error ? console.error(e) : console.log(e);
		});
	}
	return n.worker;
}
function Do(e = !0, t, n, r) {
	let i = function(...e) {
		n(t(...e));
	};
	if (a.Worker && e) {
		let e = To(t, r), a = e && Eo(e.key, e.src);
		a && (i = function(...e) {
			let t = ++wo, r = function(e) {
				e.data?.id === t && (a.removeEventListener("message", r), n(e.data.result));
			};
			a.addEventListener("message", r), a.postMessage({
				id: t,
				args: e
			});
		});
	}
	return i;
}
function Oo() {
	for (let e in Co) {
		let t = Co[e];
		t.worker && t.worker.terminate(), t.src && a.URL.revokeObjectURL(t.src), delete Co[e];
	}
}
//#endregion
//#region node_modules/billboard.js/dist-esm/module/dsv.js
var ko = 34, Ao = 10, jo = 13;
function Mo(e) {
	let t = e.charCodeAt(0);
	function n(e, n) {
		let r = [], i = e.length, a = 0, o = 0, s = i <= 0, c = !1;
		e.charCodeAt(0) === 65279 && a++, e.charCodeAt(i - 1) === Ao && --i, e.charCodeAt(i - 1) === jo && --i;
		function l() {
			if (s) return null;
			if (c) return c = !1, null;
			let n = a, r, o;
			if (e.charCodeAt(n) === ko) {
				for (; ++a < i;) if (e.charCodeAt(a) === ko) {
					if (e.charCodeAt(a + 1) !== ko) break;
					a++;
				}
				return (o = a++) >= i ? s = !0 : (r = e.charCodeAt(a++)) === Ao ? c = !0 : r === jo && (c = !0, e.charCodeAt(a) === Ao && ++a), e.slice(n + 1, o).replace(/""/g, "\"");
			}
			for (; a < i;) {
				if ((r = e.charCodeAt(o = a++)) === Ao) c = !0;
				else if (r === jo) c = !0, e.charCodeAt(a) === Ao && ++a;
				else if (r !== t) continue;
				return e.slice(n, o);
			}
			return s = !0, e.slice(n, i);
		}
		let u;
		for (; (u = l()) !== null;) {
			let e = [];
			for (; u !== null;) e.push(u), u = l();
			if (n) {
				let t = n(e, o++);
				t != null && r.push(t);
			} else r.push(e);
		}
		return r;
	}
	function r(e, t) {
		let r = [];
		return n(e, (e, n) => {
			if (n === 0) return r = e, null;
			let i = {};
			for (let t = 0; t < r.length; t++) i[r[t]] = e[t] ?? "";
			return t ? t(i, n - 1, r) : i;
		});
	}
	return {
		parse: r,
		parseRows: n
	};
}
var No = Mo(","), Po = Mo("	"), Fo = No.parse, Io = No.parseRows, Lo = Po.parse, Ro = Po.parseRows;
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/data/convert.helper.js
function zo(e) {
	let t = [];
	return e.forEach(function(e, n) {
		let r = e[0];
		e.forEach(function(e, i) {
			if (i > 0) {
				if (t[i - 1] === void 0 && (t[i - 1] = {}), e === void 0) throw Error(`Source data is missing a component at (${n}, ${i})!`);
				t[i - 1][r] = e;
			}
		});
	}), t;
}
function Bo(e) {
	let t = e[0], n = [];
	return e.forEach(function(e, r) {
		if (r > 0) {
			let i = {};
			e.forEach(function(e, n) {
				if (e === void 0) throw Error(`Source data is missing a component at (${r}, ${n})!`);
				i[t[n]] = e;
			}), n.push(i);
		}
	}), n;
}
function Vo(e, t) {
	let n = [], r, i;
	if (Array.isArray(e)) {
		let a = function(e, t) {
			if (e[t] !== void 0) return e[t];
			let n = t.replace(/\[(\w+)\]/g, ".$1").replace(/^\./, "").split("."), r = e;
			return n.some(function(e) {
				return !(r = r && typeof r == "object" && e in r ? r[e] : void 0);
			}), r;
		};
		r = t.x ? t.value.concat(t.x) : t.value, n.push(r), e.forEach(function(e) {
			let t = r.map(function(t) {
				let n = a(e, t);
				return n === void 0 && (n = null), n;
			});
			n.push(t);
		}), i = Bo(n);
	} else Object.keys(e).forEach(function(t) {
		let r = [].concat(e[t]);
		r.unshift?.(t), n.push(r);
	}), i = zo(n);
	return i;
}
function Ho(e, t = "csv", n, r, i) {
	let a = new XMLHttpRequest(), o = {
		csv: Wo,
		tsv: Go,
		json: Vo
	};
	a.open("GET", e), n && Object.keys(n).forEach(function(e) {
		a.setRequestHeader(e, n[e]);
	}), a.onreadystatechange = function() {
		if (a.readyState === 4) if (a.status === 200) {
			let e = a.responseText;
			e && i.call(this, o[t](t === "json" ? JSON.parse(e) : e, r));
		} else throw Error(`${e}: Something went wrong loading!`);
	}, a.send();
}
function Uo(e, t) {
	let n = e.rows(t), r;
	return n.length === 1 ? (r = [{}], n[0].forEach((e) => {
		r[0][e] = null;
	})) : r = e.parse(t), r;
}
function Wo(e) {
	return Uo({
		rows: Io,
		parse: Fo
	}, e);
}
function Go(e) {
	return Uo({
		rows: Ro,
		parse: Lo
	}, e);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/data/convert.js
function Ko(e, t) {
	let n = e || t?.data_keys;
	return n?.x && (t.data_x = n.x), n;
}
function qo(e, t, n) {
	let r = this, { config: i } = r, a;
	e.forEach((e) => {
		let o = r.getXKey(e);
		if (n.customX || n.timeSeries ? n.xs.indexOf(o) >= 0 ? a = (n.appendXs && r.data.xs[e] || []).concat(t.map((t, n) => {
			let i = t[o];
			return d(i) ? r.generateTargetX(i, e, n) : !1;
		}).filter((e) => e !== !1)) : i.data_x ? a = this.getOtherTargetXs() : w(i.data_xs) && (a = r.getXValuesOfXKey(o, r.data.targets)) : a = t.map((e, t) => t), a) r.data.xs[e] = a;
		else throw Error(`x is not defined for id = "${e}".`);
	});
}
var Jo = {
	convertData(e, t) {
		let { config: n } = this, r = (e) => e?.length && !C(e[0]) ? n.boost_useWorker : !1, i = e;
		if (e.bindto && (i = {}, [
			"url",
			"mimeType",
			"headers",
			"keys",
			"json",
			"rows",
			"columns"
		].forEach((t) => {
			let n = `data_${t}`;
			n in e && (i[t] = e[n]);
		})), i.url && t) Ho(i.url, i.mimeType, i.headers, Ko(i.keys, n), t);
		else if (i.json) Do(r(i.json), Vo, t, [zo, Bo])(i.json, Ko(i.keys, n));
		else if (i.rows) Do(r(i.rows), Bo, t)(i.rows);
		else if (i.columns) Do(r(i.columns), zo, t)(i.columns);
		else if (e.bindto) throw Error("url or json or rows or columns is required.");
	},
	convertDataToTargets(e, t) {
		let n = this, { axis: r, config: i, state: a } = n, o = i.data_type, s = Object.keys(e[0] || {}), { ids: c, xs: l } = s.length ? s.reduce((e, t) => (n.isX.call(n, t) ? e.xs.push(t) : e.ids.push(t), e), {
			ids: [],
			xs: []
		}) : {
			ids: [],
			xs: []
		}, u = {
			appendXs: t,
			xs: l,
			categorized: r?.isCategorized(),
			timeSeries: r?.isTimeSeries(),
			customX: r?.isCustomX()
		};
		qo.bind(n)(c, e, u);
		let d = u.customX && u.categorized && i.axis_x_categories.length ? new Map(i.axis_x_categories.map((e, t) => [e, t])) : null, f = i.data_idConverter.bind(n.api), p = c.map((t, r) => {
			let o = f(t), s = n.getXKey(t), c = u.customX && u.categorized, l = c && r === 0 && (() => {
				let t = Re(i.axis_x_categories);
				return e.every((e) => t.has(e[s]));
			})(), p = e.__append__, m = s === null && p ? n.api.data.values(t).length : 0;
			return {
				id: o,
				id_org: t,
				values: e.map((e, u) => {
					let f = e[s], g = e[t], _;
					if (g = g !== null && !isNaN(g) && !E(g) ? +g : T(g) || E(g) ? g : null, (c || a.hasRadar) && r === 0 && !h(f)) {
						!l && u === 0 && !p && (i.axis_x_categories = [], d && d.clear());
						let e = String(f);
						_ = d?.get(e) ?? -1, _ === -1 && (_ = i.axis_x_categories.length, i.axis_x_categories.push(f), d?.set(e, _));
					} else _ = n.generateTargetX(f, t, m + u);
					return (h(g) || n.data.xs[t].length <= u) && (_ = void 0), {
						x: _,
						value: g,
						id: o,
						index: -1
					};
				}).filter((e) => g(e.x))
			};
		});
		if (p.forEach((e) => {
			i.data_xSort && (e.values = e.values.sort((e, t) => (e.x || e.x === 0 ? e.x : Infinity) - (t.x || t.x === 0 ? t.x : Infinity))), e.values.forEach((e, t) => e.index = t), n.data.xs[e.id]?.sort((e, t) => e - t);
		}), a.hasNegativeValue = p.some((e) => e.values.some((e) => e.value !== null && e.value < 0)), a.hasPositiveValue = p.some((e) => e.values.some((e) => e.value !== null && e.value > 0)), o && n.isValidChartType(o)) {
			let e = n.mapToIds(p).filter((e) => !(e in i.data_types) || !n.isValidChartType(i.data_types[e]));
			n.setTargetType(e, o);
		}
		return p.forEach((e) => n.cache.add(e.id_org, e, !0)), p;
	}
}, Yo = {
	areaRange: {
		high: 0,
		mid: 1,
		low: 2
	},
	candlestick: {
		open: 0,
		high: 1,
		low: 2,
		close: 3,
		volume: 4
	}
};
function Xo(e) {
	return T(e) ? e : [e];
}
var Zo = {
	isX(e) {
		let { config: t } = this, n = t.data_x && e === t.data_x, r = w(t.data_xs) && be(t.data_xs, e);
		return n || r;
	},
	isStackNormalized() {
		let { config: e } = this;
		return !!((e.data_stack_normalize === !0 || x(e.data_stack_normalize)) && e.data_groups.length);
	},
	isStackNormalizedPerGroup() {
		let { config: e } = this;
		return !!(x(e.data_stack_normalize) && e.data_stack_normalize?.perGroup && e.data_groups.length);
	},
	isGrouped(e) {
		let t = this.config.data_groups;
		return e ? t.some((t) => t.indexOf(e) >= 0 && t.length > 1) : t.length > 0;
	},
	hasAxisGroupedData(e) {
		let t = this, { axis: n } = t;
		return t.data.targets.filter((t) => n.getId(t.id) === e).map((e) => e.id).some((e) => t.isGrouped(e));
	},
	getXKey(e) {
		let { config: t } = this;
		return t.data_x ? t.data_x : w(t.data_xs) ? t.data_xs[e] : null;
	},
	getXValuesOfXKey(e, t) {
		let n = this, r = t && w(t) ? n.mapToIds(t) : [], i;
		return r.forEach((t) => {
			n.getXKey(t) === e && (i = n.data.xs[t]);
		}), i;
	},
	getIndexByX(e, t) {
		let n = this;
		return t ? t.indexOf(p(e) ? e : +e) : (n.filterByX(n.data.targets, e)[0] || { index: null }).index;
	},
	getXValue(e, t) {
		let n = this;
		return e in n.data.xs && n.data.xs[e] && d(n.data.xs[e][t]) ? n.data.xs[e][t] : t;
	},
	getOtherTargetXs() {
		let e = this, t = Object.keys(e.data.xs);
		return t.length ? e.data.xs[t[0]] : null;
	},
	getOtherTargetX(e) {
		let t = this.getOtherTargetXs();
		return t && e < t.length ? t[e] : null;
	},
	addXs(e) {
		let { config: t } = this;
		Object.keys(e).forEach((n) => {
			t.data_xs[n] = e[n];
		});
	},
	isMultipleX() {
		return !this.config.axis_x_forceAsSingle && (w(this.config.data_xs) || this.hasType("bubble") || this.hasType("scatter"));
	},
	addName(e) {
		let { config: t } = this, n;
		return e && (n = t.data_names[e.id], e.name = n === void 0 ? e.id : n), e;
	},
	getAllValuesOnIndex(e, t = !1) {
		let n = this, r = n.filterTargetsToShow(n.data.targets).map((t) => n.addName(n.getValueOnIndex(t.values, e)));
		return t && (r = r.filter((e) => e && "value" in e && d(e.value))), r;
	},
	getValueOnIndex(e, t) {
		if (e[t]?.index === t) return e[t];
		let n = e.filter((e) => e.index === t);
		return n.length ? n[0] : null;
	},
	updateTargetX(e, t) {
		let n = this;
		e.forEach((e) => {
			e.values.forEach((r, i) => {
				r.x = n.generateTargetX(t[i], e.id, i);
			}), n.data.xs[e.id] = t;
		});
	},
	updateTargetXs(e, t) {
		let n = this;
		e.forEach((e) => {
			t[e.id] && n.updateTargetX([e], t[e.id]);
		});
	},
	generateTargetX(e, t, n) {
		let r = this, { axis: i } = r, a = i?.isCategorized() ? n : e || n;
		return i?.isTimeSeries() ? a = Fe.bind(r)(e || r.getXValue(t, n)) : i?.isCustomX() && !i?.isCategorized() && (a = d(e) ? +e : r.getXValue(t, n)), a;
	},
	updateXs(e) {
		e.length && (this.axis.xs = e.map((e) => e.x));
	},
	getPrevX(e) {
		let t = this.axis.xs[e - 1];
		return g(t) ? t : null;
	},
	getNextX(e) {
		let t = this.axis.xs[e + 1];
		return g(t) ? t : null;
	},
	getBaseValue(e) {
		let t = this, { hasAxis: n } = t.state, { value: r } = e;
		return r && n && (t.isAreaRangeType(e) ? r = t.getRangedData(e, "mid") : t.isBubbleZType(e) && (r = t.getBubbleZData(r, "y"))), r;
	},
	getMinMaxValue(e) {
		let t = this.getBaseValue.bind(this), n = Infinity, r = -Infinity, i = e || this.data.targets.map((e) => e.values);
		for (let e = 0; e < i.length; e++) {
			let a = i[e];
			for (let e = 0; e < a.length; e++) {
				let i = t(a[e]);
				m(i) && (i < n && (n = i), i > r && (r = i));
			}
		}
		return {
			min: n,
			max: r
		};
	},
	getMinMaxData() {
		let e = this, t = J.dataMinMax, n = e.cache.get(t);
		if (!n) {
			let r = e.data.targets.map((e) => e.values), i = e.getMinMaxValue(r), a = [], o = [], { min: s, max: c } = i;
			r.forEach((t) => {
				let n = e.getFilteredDataByValue(t, s), r = e.getFilteredDataByValue(t, c);
				if (n.length) for (let e = 0; e < n.length; e++) a.push(n[e]);
				if (r.length) for (let e = 0; e < r.length; e++) o.push(r[e]);
			}), e.cache.add(t, n = {
				min: a,
				max: o
			});
		}
		return n;
	},
	getTotalPerIndex(e) {
		let t = this, { config: n } = t, r = e ? `${J.dataTotalPerIndex}-${e}` : J.dataTotalPerIndex, i = t.cache.get(r);
		if ((t.config.data_groups.length || t.isStackNormalized()) && !i) {
			i = [];
			let { targets: a } = t.data;
			if (t.isStackNormalizedPerGroup() && e) {
				let t = n.data_groups.find((t) => t.indexOf(e) >= 0);
				if (t) a = a.filter((e) => t.indexOf(e.id) >= 0);
				else return null;
			}
			a.forEach((e) => {
				e.values.forEach((e, t) => {
					i[t] || (i[t] = 0), i[t] += m(e.value) ? e.value : 0;
				});
			}), t.cache.add(r, i);
		}
		return i;
	},
	getTotalDataSum(e) {
		let t = this, n = J.dataTotalSum, r = t.cache.get(n);
		return m(r) || (r = t.data.targets.reduce((e, t) => e + t.values.reduce((e, t) => e + (t.value ?? 0), 0), 0), t.cache.add(n, r)), e && (r -= t.getHiddenTotalDataSum()), r;
	},
	getHiddenTotalDataSum() {
		let { api: e, state: { hiddenTargetIds: t } } = this, n = 0;
		return t.size && (n = e.data.values.bind(e)([...t]).reduce((e, t) => e + t, 0)), n;
	},
	getFilteredDataByValue(e, t) {
		return e.filter((e) => this.getBaseValue(e) === t);
	},
	getMaxDataCount() {
		let { targets: e } = this.data, t = 0;
		for (let n = 0; n < e.length; n++) e[n].values.length > t && (t = e[n].values.length);
		return t;
	},
	getMaxDataCountTarget() {
		let e = this, { cache: t, state: n } = e, r = t.get(J.maxDataCountTarget);
		if (r && r.generation === n.dataGeneration) return r.value;
		let i = e.filterTargetsToShow() || [], a = i.length, o = e.config.axis_x_inverted;
		if (a > 1) {
			let e = [];
			for (let t = 0; t < i.length; t++) {
				let n = i[t].values;
				for (let t = 0; t < n.length; t++) e.push(n[t].x);
			}
			i = e, i = ke(Ee(i)).map((e, t, n) => ({
				x: e,
				index: o ? n.length - t - 1 : t
			}));
		} else a && (i = i[0].values.concat());
		return t.add(J.maxDataCountTarget, {
			value: i,
			generation: n.dataGeneration
		}), i;
	},
	mapToIds(e) {
		return e.map((e) => e.id);
	},
	mapToTargetIds(e) {
		let t = this;
		return e ? T(e) ? e.concat() : [e] : t.mapToIds(t.data.targets);
	},
	hasTarget(e, t) {
		let n = this.mapToIds(e);
		for (let e = 0, r; r = n[e]; e++) if (r === t) return !0;
		return !1;
	},
	isTargetToShow(e) {
		return !this.state.hiddenTargetIds.has(e);
	},
	isLegendToShow(e) {
		return !this.state.hiddenLegendIds.has(e);
	},
	getTargetsToShow() {
		let { state: e } = this;
		return e._targetsToShow ?? this.filterTargetsToShow();
	},
	filterTargetsToShow(e) {
		let t = this;
		if (!e) {
			let { cache: e, data: n, state: r } = t, i = J.filteredTargets, a = e.get(i);
			if (a && a.generation === r.dataGeneration) return a.value;
			let o = n.targets.filter((e) => t.isTargetToShow(e.id));
			return e.add(i, {
				value: o,
				generation: r.dataGeneration
			}), o;
		}
		return e.filter((e) => t.isTargetToShow(e.id));
	},
	mapTargetsToUniqueXs(e) {
		let { axis: t } = this, n = [];
		return e?.length && (n = Ee(De(e.map((e) => e.values.map((e) => +e.x)))), n = t?.isTimeSeries() ? n.map((e) => /* @__PURE__ */ new Date(+e)) : n.map(Number)), ke(n);
	},
	addTargetIds(e, t) {
		let { state: n } = this;
		Xo(t).forEach((t) => n[e].add(t));
	},
	removeTargetIds(e, t) {
		let { state: n } = this;
		Xo(t).forEach((t) => n[e].delete(t));
	},
	addHiddenTargetIds(e) {
		this.addTargetIds("hiddenTargetIds", e);
	},
	removeHiddenTargetIds(e) {
		this.removeTargetIds("hiddenTargetIds", e);
	},
	addHiddenLegendIds(e) {
		this.addTargetIds("hiddenLegendIds", e);
	},
	removeHiddenLegendIds(e) {
		this.removeTargetIds("hiddenLegendIds", e);
	},
	getValuesAsIdKeyed(e) {
		let t = this, { hasAxis: n } = t.state, r = {}, i = t.isMultipleX(), a = null;
		if (i) {
			let e = t.cache.get(J.valuesXIndexMap);
			if (e && e.generation === t.state.dataGeneration) a = e.value;
			else {
				let e = t.mapTargetsToUniqueXs(t.data.targets).map((e) => p(e) ? e : +e);
				a = new Map(e.map((e, t) => [e, t])), t.cache.add(J.valuesXIndexMap, {
					value: a,
					generation: t.state.dataGeneration
				});
			}
		}
		return e.forEach((e) => {
			let o = [];
			e.values.filter(({ value: e }) => d(e) || e === null).forEach((e) => {
				let { value: r } = e;
				if (r !== null && t.isCandlestickType(e) && (r = T(r) ? r.slice(0, 4) : [
					r.open,
					r.high,
					r.low,
					r.close
				]), T(r)) o.push(...r);
				else if (E(r) && "high" in r) o.push(...Object.values(r));
				else if (t.isBubbleZType(e)) o.push(n && t.getBubbleZData(r, "y"));
				else if (i && a) {
					let t = p(e.x) ? e.x : +e.x, n = a.get(t);
					n !== void 0 && (o[n] = r);
				} else o.push(r);
			}), r[e.id] = o;
		}), r;
	},
	hasMultiTargets() {
		return this.filterTargetsToShow().length > 1;
	},
	orderTargets(e) {
		let t = this, n = e.slice(), r = t.getSortCompareFn();
		return r && n.sort(r), n;
	},
	getSortCompareFn(e = !1) {
		let t = this, { config: n } = t, r = n.data_order, i = /asc/i.test(r), a = /desc/i.test(r), o;
		if (i || a) {
			let t = (e, t) => e + Math.abs(t.value), n = (e) => m(e) ? e : "values" in e ? e.values.reduce(t, 0) : e.value;
			o = (t, r) => {
				let a = n(t), o = n(r);
				return e ? i ? a - o : o - a : i ? o - a : a - o;
			};
		} else f(r) && (o = r.bind(t.api));
		return o || null;
	},
	filterByX(e, t) {
		return this.getValuesByX(e).get(this.getXCacheKey(t)) || [];
	},
	filterNullish(e) {
		let t = (e) => d(e.value);
		return e && e.filter((e) => "value" in e ? t(e) : e.values.some(t));
	},
	filterRemoveNull(e) {
		return e.filter((e) => d(this.getBaseValue(e)));
	},
	filterByXDomain(e, t) {
		return e.map((e) => ({
			id: e.id,
			id_org: e.id_org,
			values: e.values.filter((e) => t[0] <= e.x && e.x <= t[1])
		}));
	},
	hasDataLabel() {
		let e = this.config.data_labels;
		return _(e) && e || x(e) && w(e);
	},
	hasNullDataValue(e) {
		return e.some(({ value: e }) => e === null);
	},
	getDataIndexFromEvent(e) {
		let { $el: t, config: n, state: { hasRadar: r, inputType: i, eventReceiver: { coords: a, rect: o } } } = this, s;
		if (r) {
			let t = e.target;
			/tspan/i.test(t.tagName) && (t = t.parentNode);
			let n = F(t).datum();
			s = n && Object.keys(n).length === 1 ? n.index : void 0;
		} else {
			let r = n.axis_rotated, c = lo(t.chart.node()), l = i === "touch" && e.changedTouches ? e.changedTouches[0] : e, u = r ? l.clientY + c.y : l.clientX + c.x;
			if (mo(t.svg)) {
				let e = [u, 0];
				r && e.reverse(), u = uo(t.eventRect.node(), ...e)[r ? "y" : "x"];
			} else u -= r ? o.top : o.left;
			s = Ne(a, u, 0, a.length - 1, r);
		}
		return s;
	},
	getDataLabelLength(e, t, n) {
		let r = this, i = 1.3, a = [e, t].map((e) => r.dataLabelFormat()(e));
		if (r.config.render_mode === "canvas" && !r.$el.svg) {
			let e = r.$el.chart?.node?.(), t = e?.ownerDocument, o = t?.createElementNS("http://www.w3.org/2000/svg", "svg");
			if (e && o) {
				let r = a.map((e) => {
					let n = t.createElementNS("http://www.w3.org/2000/svg", "text");
					return n.textContent = e, o.appendChild(n), n;
				});
				o.style.cssText = "position:absolute;visibility:hidden;left:-10000px;top:-10000px;", e.appendChild(o);
				let s = r.map((e) => e.getBoundingClientRect()[n] * i);
				return o.remove(), s;
			}
		}
		return r.getTextRect(a)?.map((e) => e[n] * i) || [0, 0];
	},
	isNoneArc(e) {
		return this.hasTarget(this.data.targets, e.id);
	},
	isArc(e) {
		return "data" in e && this.hasTarget(this.data.targets, e.data.id);
	},
	findSameXOfValues(e, t) {
		let n = e[t].x, r = [], i;
		for (i = t - 1; i >= 0 && n === e[i].x; i--) r.push(e[i]);
		for (i = t; i < e.length && n === e[i].x; i++) r.push(e[i]);
		return r;
	},
	getXCacheKey(e) {
		return p(e) ? e : +e;
	},
	getValuesByX(e) {
		let t = this, { cache: n, state: r } = t, i = e.map((e) => {
			let { values: n } = e, r = n[0], i = n[n.length - 1];
			return `${e.id}:${n.length}:${r ? t.getXCacheKey(r.x) : ""}:${i ? t.getXCacheKey(i.x) : ""}`;
		}).join("|"), a = n.get(J.valuesByX);
		if (a && a.generation === r.dataGeneration && a.targetKey === i) return a.value;
		let o = /* @__PURE__ */ new Map();
		for (let n = 0; n < e.length; n++) {
			let r = e[n].values;
			for (let e = 0; e < r.length; e++) {
				let n = r[e], i = t.getXCacheKey(n.x), a = o.get(i);
				a ? a.push(n) : o.set(i, [n]);
			}
		}
		return n.add(J.valuesByX, {
			generation: r.dataGeneration,
			targetKey: i,
			value: o
		}), o;
	},
	getClosestCandidates(e, t, n = !0) {
		let r = this, { config: i, scale: a } = r, o = e.length, s = e[0];
		if (!n || o < 200 || !s || !i.data_xSort) return e;
		let c = r.isBarType(s.id), l = r.isCandlestickType(s.id), u = i.point_sensitivity;
		if (!(c || l) && !m(u)) return e;
		let d = a.zoom || a.x, f = t[+i.axis_rotated], p = d(e[0].x) <= d(e[o - 1].x), h = 0, g = o - 1;
		for (; h < g;) {
			let t = h + g >> 1, n = d(e[t].x);
			(p ? n < f : n > f) ? h = t + 1 : g = t;
		}
		let _ = [], v = /* @__PURE__ */ new Set(), y = (t) => {
			t >= 0 && t < o && !v.has(t) && (v.add(t), _.push(e[t]));
		}, b = (t) => {
			if (t < 0 || t >= o) return;
			let n = r.getXCacheKey(e[t].x), i = t;
			for (; i >= 0 && r.getXCacheKey(e[i].x) === n;) y(i--);
			for (i = t + 1; i < o && r.getXCacheKey(e[i].x) === n;) y(i++);
		};
		if (c || l) for (let e = h - 2; e <= h + 2; e++) b(e);
		else {
			let t = u, n = (n, r) => {
				for (let i = n; i >= 0 && i < o; i += r) {
					let n = e[i];
					if (Math.abs(d(n.x) - f) > t) break;
					y(i);
				}
			};
			n(h, 1), n(h - 1, -1);
		}
		return _;
	},
	findClosestFromTargets(e, t) {
		let n = this, r = [];
		for (let i = 0; i < e.length; i++) {
			let a = n.findClosest(e[i].values, t);
			a && r.push(a);
		}
		return n.findClosest(r, t, !1);
	},
	findClosest(e, t, n = !0) {
		let r = this, { $el: { main: i } } = r, a = r.getClosestCandidates(e, t, n), o, s;
		for (let e = 0; e < a.length; e++) {
			let n = a[e];
			if (!n || !d(n.value)) continue;
			let c = r.isBarType(n.id), l = r.isCandlestickType(n.id);
			if (c || l) {
				let e = c ? `.${H.chartBar}.${B.target}${r.getTargetSelectorSuffix(n.id)} .${H.bar}-${n.index}` : `.${Ta.chartCandlestick}.${B.target}${r.getTargetSelectorSuffix(n.id)} .${Ta.candlestick}-${n.index} path`;
				!s && r.isWithinBar(i.select(e).node()) && (s = n);
			} else {
				let e = r.dist(n, t);
				e < r.getPointSensitivity(n) && (o === void 0 || e < o) && (o = e, s = n);
			}
		}
		return s;
	},
	dist(e, t) {
		let n = this, { config: { axis_rotated: r }, scale: i } = n, a = +r, o = +!r, s = n.circleY(e, e.index), c = (i.zoom || i.x)(e.x) - t[a], l = s - t[o];
		return Math.sqrt(c * c + l * l);
	},
	convertValuesToStep(e) {
		let { axis: t, config: n } = this, r = n.line_step_type, i = t ? t.isCategorized() : !1, a = T(e) ? e.concat() : [e];
		if (!(i || /step\-(after|before)/.test(r))) return e;
		if (a.length) {
			let e = a[0], t = a[a.length - 1], { id: n } = e, { x: o } = e;
			a.unshift({
				x: --o,
				value: e.value,
				id: n
			}), i && r === "step-after" && a.unshift({
				x: o - 1,
				value: e.value,
				id: n
			}), o = t.x, a.push({
				x: ++o,
				value: t.value,
				id: n
			}), i && r === "step-before" && a.push({
				x: o + 1,
				value: t.value,
				id: n
			});
		}
		return a;
	},
	convertValuesToRange(e) {
		let t = T(e) ? e.concat() : [e], n = [];
		return t.forEach((e) => {
			let { x: t, id: r } = e;
			n.push({
				x: t,
				id: r,
				value: e.value[0]
			}), n.push({
				x: t,
				id: r,
				value: e.value[2]
			});
		}), n;
	},
	updateDataAttributes(e, t) {
		let n = this, { config: r } = n, i = r[`data_${e}`];
		return h(t) ? i : (Object.keys(t).forEach((e) => {
			i[e] = t[e];
		}), n.redraw({ withLegend: !0 }), i);
	},
	getRangedData(e, t = "", n = "areaRange") {
		let r = e?.value;
		if (T(r)) {
			if (n === "bar") return r.reduce((e, t) => t - e);
			{
				let e = Yo[n]?.[t] ?? -1;
				return e >= 0 ? r[e] : void 0;
			}
		}
		return r && t ? r[t] : r;
	},
	setRatioForGroupedData(e) {
		let t = this, { config: n } = t;
		if (n.data_groups.length && e.some((e) => t.isGrouped(e.id))) {
			let n = (e) => t.getRatio("index", e, !0);
			e.forEach((e) => {
				"values" in e ? e.values.forEach(n) : n(e);
			});
		}
	},
	getRatio(e, t, n = !1) {
		let r = this, { config: i, state: a } = r, o = r.api, s = 0;
		if (t && o.data.shown().length) if (s = t.ratio || t.value, e === "arc") if (r.pie.padAngle()()) s = t.value / r.getTotalDataSum(!0);
		else {
			let e = i.gauge_fullCircle ? r.getArcLength() : r.getStartingAngle() * -2, n = r.hasType("gauge") ? e : Math.PI * 2;
			s = (t.endAngle - t.startAngle) / n;
		}
		else if (e === "index") {
			let e = o.data.values.bind(o), { hiddenTargetIds: n } = a, c = this.getTotalPerIndex(r.isStackNormalizedPerGroup() ? t.id : void 0);
			if (c === null) return s;
			if (n.size) {
				let a = [...n];
				if (r.isStackNormalizedPerGroup() && t.id) {
					let e = i.data_groups.find((e) => e.indexOf(t.id) >= 0);
					e && (a = a.filter((t) => e.indexOf(t) >= 0));
				}
				if (a.length) {
					let t = e(a, !1);
					t.length && (t = t.reduce((e, t) => e.map((e, n) => (m(e) ? e : 0) + t[n])), c = c.map((e, n) => e - t[n]));
				}
			}
			let l = c[t.index];
			t.ratio = m(t.value) && c && l ? t.value / l : 0, s = t.ratio;
		} else if (e === "radar") s = parseFloat(String(Math.max(t.value, 0))) / a.current.dataMax * i.radar_size_ratio;
		else if (e === "bar") {
			let n = r.getYScaleById.bind(r)(t.id).domain().reduce((e, t) => t - e);
			s = n === 0 ? 0 : Math.abs(r.getRangedData(t, null, e) / n);
		} else e === "treemap" && (s /= r.getTotalDataSum(!0));
		return n && s ? s * 100 : s;
	},
	updateDataIndexByX(e) {
		let t = this, n = e.reduce((e, t, n) => (e[Number(t.x)] = n, e), {});
		t.data.targets.forEach((e) => {
			e.values.forEach((e, t) => {
				let r = n[Number(e.x)];
				r === void 0 && (r = t), e.index = r;
			});
		});
	},
	isBubbleZType(e) {
		return this.isBubbleType(e) && (E(e.value) && ("z" in e.value || "y" in e.value) || T(e.value) && e.value.length >= 2);
	},
	isBarRangeType(e) {
		let t = this, { value: n } = e;
		return t.isBarType(e) && T(n) && n.length >= 2 && n.every(m);
	},
	getDataById(e) {
		let t = this.cache.get(e) || this.api.data(e);
		return t?.[0] ?? t;
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/data/load.js
function Qo(e, t = !1) {
	let n = this, { api: r } = n;
	t && n.api.flush(!0), e?.call(r);
}
var $o = {
	load(e, t) {
		let n = this, { axis: r, data: i, org: a, scale: o } = n, { append: s } = t, c = {
			domain: null,
			currentDomain: null,
			x: null
		}, l = e;
		if (l) {
			t.filter && (l = l.filter(t.filter)), (t.type || t.types) && l.forEach((e) => {
				let r = t.types?.[e.id] || t.type;
				n.setTargetType(e.id, r);
			});
			let e = new Map(l.map((e) => [e.id, e]));
			i.targets.forEach((t) => {
				let n = e.get(t.id);
				if (n) {
					if (s) {
						let e = n.values;
						for (let n = 0; n < e.length; n++) t.values.push(e[n]);
					} else t.values = n.values;
					e.delete(t.id);
				}
			}), e.forEach((e) => i.targets.push(e));
		}
		if (n.state.isCanvasMode) {
			n.redraw({
				withUpdateOrgXDomain: !0,
				withUpdateXDomain: !0,
				withLegend: !0
			}), n.updateTypesElements(), Qo.call(n, t.done, t.resizeAfter);
			return;
		}
		n.updateTargets(i.targets), o.zoom && (c.x = r.isCategorized() ? o.x.orgScale() : (a.xScale || o.x).copy(), c.domain = n.getXDomain(i.targets), c.x.domain(c.domain), c.currentDomain = n.zoom.getDomain(), n.withinRange(c.currentDomain, void 0, c.domain) || (o.x.domain(c.domain), o.zoom = null, n.$el.eventRect.property("__zoom", null))), n.redraw({
			withUpdateOrgXDomain: !0,
			withUpdateXDomain: !0,
			withLegend: !0
		}), o.zoom ? (a.xDomain = c.domain, a.xScale = c.x, r.isCategorized() && (c.currentDomain = n.getZoomDomainValue(c.currentDomain), a.xDomain = n.getZoomDomainValue(a.xDomain), a.xScale = c.x.domain(a.xDomain)), n.updateCurrentZoomTransform(c.x, c.currentDomain)) : a.xScale && a.xScale.domain(a.xDomain), n.updateTypesElements(), Qo.call(n, t.done, t.resizeAfter);
	},
	loadFromArgs(e) {
		let t = this;
		t.config && (t.cache.reset(!1, [
			J.filteredTargets,
			J.maxDataCountTarget,
			J.valuesXIndexMap,
			J.maxTickSize
		]), t.convertData(e, (n) => {
			let r = e.data || n;
			e.append && (r.__append__ = !0), r && t.load(t.convertDataToTargets.call(t, r), e);
		}));
	},
	unload(e, t) {
		let n = this, { state: r, $el: i, $T: a } = n, o = !!n.hasLegendDefsPoint?.(), s = t, c = e;
		if (n.cache.reset(!1, [
			J.filteredTargets,
			J.maxDataCountTarget,
			J.valuesXIndexMap,
			J.maxTickSize
		]), s ||= () => {}, c = c.filter((e) => n.hasTarget(n.data.targets, e)), c.length === 0) {
			s();
			return;
		}
		let l = new Set(c);
		if (r.isCanvasMode) {
			c.forEach((e) => {
				r.withoutFadeIn[e] = !1;
			}), n.data.targets = n.data.targets.filter((e) => !l.has(e.id)), n.removeHiddenTargetIds(c), n.removeHiddenLegendIds(c), n.updateTypesElements(), s();
			return;
		}
		c.forEach((e) => {
			let t = n.getTargetSelectorSuffix(e);
			r.withoutFadeIn[e] = !1, i.legend && i.legend.selectAll(`.${U.legendItem}${t}`).remove(), o && i.defs?.select(`#${n.getDefsPointId(t)}`).remove();
		}), n.data.targets = n.data.targets.filter((e) => !l.has(e.id)), r.hasFunnel && n.updateFunnel(n.data.targets), r.hasTreemap && n.updateTargetsForTreemap(n.data.targets), n.updateTypesElements(), a(i.svg.selectAll(c.map((e) => n.selectorTarget(e)))).style("opacity", "0").remove().call(xe, s);
	}
}, es = { value: () => {} };
function ts() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new ns(n);
}
function ns(e) {
	this._ = e;
}
function rs(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
ns.prototype = ts.prototype = {
	constructor: ns,
	on: function(e, t) {
		var n = this._, r = rs(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = is(n[i], e.name))) return i;
			return;
		}
		if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
		for (; ++a < o;) if (i = (e = r[a]).type) n[i] = as(n[i], e.name, t);
		else if (t == null) for (i in n) n[i] = as(n[i], e.name, null);
		return this;
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new ns(e);
	},
	call: function(e, t) {
		if ((i = arguments.length - 2) > 0) for (var n = Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (a = this._[e], r = 0, i = a.length; r < i; ++r) a[r].value.apply(t, n);
	},
	apply: function(e, t, n) {
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (var r = this._[e], i = 0, a = r.length; i < a; ++i) r[i].value.apply(t, n);
	}
};
function is(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function as(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = es, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
//#endregion
//#region node_modules/d3-drag/src/noevent.js
var os = { passive: !1 }, ss = {
	capture: !0,
	passive: !1
};
function cs(e) {
	e.stopImmediatePropagation();
}
function ls(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region node_modules/d3-drag/src/nodrag.js
function us(e) {
	var t = e.document.documentElement, n = F(e).on("dragstart.drag", ls, ss);
	"onselectstart" in t ? n.on("selectstart.drag", ls, ss) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function ds(e, t) {
	var n = e.document.documentElement, r = F(e).on("dragstart.drag", null);
	t && (r.on("click.drag", ls, ss), setTimeout(function() {
		r.on("click.drag", null);
	}, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
//#endregion
//#region node_modules/d3-drag/src/constant.js
var fs = (e) => () => e;
//#endregion
//#region node_modules/d3-drag/src/event.js
function ps(e, { sourceEvent: t, subject: n, target: r, identifier: i, active: a, x: o, y: s, dx: c, dy: l, dispatch: u }) {
	Object.defineProperties(this, {
		type: {
			value: e,
			enumerable: !0,
			configurable: !0
		},
		sourceEvent: {
			value: t,
			enumerable: !0,
			configurable: !0
		},
		subject: {
			value: n,
			enumerable: !0,
			configurable: !0
		},
		target: {
			value: r,
			enumerable: !0,
			configurable: !0
		},
		identifier: {
			value: i,
			enumerable: !0,
			configurable: !0
		},
		active: {
			value: a,
			enumerable: !0,
			configurable: !0
		},
		x: {
			value: o,
			enumerable: !0,
			configurable: !0
		},
		y: {
			value: s,
			enumerable: !0,
			configurable: !0
		},
		dx: {
			value: c,
			enumerable: !0,
			configurable: !0
		},
		dy: {
			value: l,
			enumerable: !0,
			configurable: !0
		},
		_: { value: u }
	});
}
ps.prototype.on = function() {
	var e = this._.on.apply(this._, arguments);
	return e === this._ ? this : e;
};
//#endregion
//#region node_modules/d3-drag/src/drag.js
function ms(e) {
	return !e.ctrlKey && !e.button;
}
function hs() {
	return this.parentNode;
}
function gs(e, t) {
	return t ?? {
		x: e.x,
		y: e.y
	};
}
function _s() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function vs() {
	var e = ms, t = hs, n = gs, r = _s, i = {}, a = ts("start", "drag", "end"), o = 0, s, c, l, u, d = 0;
	function f(e) {
		e.on("mousedown.drag", p).filter(r).on("touchstart.drag", g).on("touchmove.drag", _, os).on("touchend.drag touchcancel.drag", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	function p(n, r) {
		if (!(u || !e.call(this, n, r))) {
			var i = y(this, t.call(this, n, r), n, r, "mouse");
			i && (F(n.view).on("mousemove.drag", m, ss).on("mouseup.drag", h, ss), us(n.view), cs(n), l = !1, s = n.clientX, c = n.clientY, i("start", n));
		}
	}
	function m(e) {
		if (ls(e), !l) {
			var t = e.clientX - s, n = e.clientY - c;
			l = t * t + n * n > d;
		}
		i.mouse("drag", e);
	}
	function h(e) {
		F(e.view).on("mousemove.drag mouseup.drag", null), ds(e.view, l), ls(e), i.mouse("end", e);
	}
	function g(n, r) {
		if (e.call(this, n, r)) {
			var i = n.changedTouches, a = t.call(this, n, r), o = i.length, s, c;
			for (s = 0; s < o; ++s) (c = y(this, a, n, r, i[s].identifier, i[s])) && (cs(n), c("start", n, i[s]));
		}
	}
	function _(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (r = 0; r < n; ++r) (a = i[t[r].identifier]) && (ls(e), a("drag", e, t[r]));
	}
	function v(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (u && clearTimeout(u), u = setTimeout(function() {
			u = null;
		}, 500), r = 0; r < n; ++r) (a = i[t[r].identifier]) && (cs(e), a("end", e, t[r]));
	}
	function y(e, t, r, s, c, l) {
		var u = a.copy(), d = Hn(l || r, t), p, m, h;
		if ((h = n.call(e, new ps("beforestart", {
			sourceEvent: r,
			target: f,
			identifier: c,
			active: o,
			x: d[0],
			y: d[1],
			dx: 0,
			dy: 0,
			dispatch: u
		}), s)) != null) return p = h.x - d[0] || 0, m = h.y - d[1] || 0, function n(r, a, l) {
			var g = d, _;
			switch (r) {
				case "start":
					i[c] = n, _ = o++;
					break;
				case "end": delete i[c], --o;
				case "drag": d = Hn(l || a, t), _ = o;
			}
			u.call(r, e, new ps(r, {
				sourceEvent: a,
				subject: h,
				target: f,
				identifier: c,
				active: _,
				x: d[0] + p,
				y: d[1] + m,
				dx: d[0] - g[0],
				dy: d[1] - g[1],
				dispatch: u
			}), s);
		};
	}
	return f.filter = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : fs(!!t), f) : e;
	}, f.container = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : fs(e), f) : t;
	}, f.subject = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : fs(e), f) : n;
	}, f.touchable = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : fs(!!e), f) : r;
	}, f.on = function() {
		var e = a.on.apply(a, arguments);
		return e === a ? f : e;
	}, f.clickDistance = function(e) {
		return arguments.length ? (d = (e = +e) * e, f) : Math.sqrt(d);
	}, f;
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/interactions/interaction.js
var ys = {
	setExpand(e, t, n) {
		let r = this, { config: i, $el: { circle: a } } = r;
		a && i.point_focus_expand_enabled && r.expandCircles(e, t, n), r.expandBarTypeShapes(!0, e, t, n);
	},
	expandBarTypeShapes(e = !0, t, n, r) {
		let i = this;
		["bar", "candlestick"].filter((e) => i.$el[e]).forEach((a) => {
			r && i.$el[a].classed(B.EXPANDED, !1), i.getShapeByIndex(a, t, n).classed(B.EXPANDED, e);
		});
	},
	setOverOut(e, t) {
		let n = this, { config: r, state: { hasFunnel: i, hasRadar: a, hasTreemap: o }, $el: { main: s } } = n, c = E(t);
		if (c || t !== -1) {
			let l = r[e ? "data_onover" : "data_onout"].bind(n.api);
			if (r.color_onover && n.setOverColor(e, t, c), c) {
				let e = n.getTargetSelectorSuffix(t.id), r = i || o ? `${B.target + e} .${G.shape}` : Ca.arc + e;
				l(t, s.select(`.${r}`).node());
			} else if (r.tooltip_grouped) e && (a && n.isPointFocusOnly() ? n.showCircleFocus(n.getAllValuesOnIndex(t, !0)) : n.setExpand(t, null, !0)), !n.isMultipleX() && s.selectAll(`.${G.shape}-${t}`).each(function(e) {
				l(e, this);
			});
			else {
				let i = n.cache.get(J.setOverOut) || [], a = s.selectAll(`.${G.shape}-${t}`).filter(function(e) {
					return n.isWithinShape(this, e);
				}), o = a.filter(function() {
					return i.every((e) => e !== this);
				});
				if (!e || a.empty() || i.length === o.size() && o.nodes().every((e, t) => e !== i[t])) for (; i.length;) {
					let e = i.pop();
					r.data_onout.bind(n.api)(F(e).datum(), e);
				}
				o.each(function() {
					e && (l(F(this).datum(), this), i.push(this));
				}), n.cache.add(J.setOverOut, i);
			}
		}
	},
	callOverOutForTouch(e) {
		let t = this, n = t.cache.get(J.callOverOutForTouch);
		(E(e) && n ? e.id !== n.id : e !== n) && ((n || m(n)) && t.setOverOut(!1, n), (e || m(e)) && t.setOverOut(!0, e), t.cache.add(J.callOverOutForTouch, e));
	},
	getDraggableSelection() {
		let e = this, { config: t, state: n } = e;
		return t.interaction_enabled && t.data_selection_draggable && e.drag ? vs().on("drag", function(t) {
			n.event = t, e.drag(oo(t, this));
		}).on("start", function(t) {
			n.event = t, e.dragstart(oo(t, this));
		}).on("end", (t) => {
			n.event = t, e.dragend();
		}) : () => {};
	},
	dispatchEvent(e, t, n) {
		let r = this, { config: i, state: { eventReceiver: a, hasAxis: o, hasFunnel: s, hasRadar: c, hasTreemap: l }, $el: { eventRect: u, funnel: d, radar: f, svg: p, treemap: m } } = r, h = ((s || l) && a.rect || c && f.axes.select(`.${V.axis}-${t} text`) || u || r.getArcElementByIdOrIndex?.(t))?.node?.();
		if (h) {
			let u = r.isMultipleX(), f = i.axis_rotated, { width: g, left: _, top: v } = Y(h);
			if (o && !c && !u) {
				let e = a.coords[t];
				e ? (g = e.w, _ += e.x, v += e.y) : (g = 0, _ = 0, v = 0);
			}
			let y = _ + (n ? n[0] : 0) + (u || f ? 0 : g / 2), b = v + (n ? n[1] : 0) + (f ? 4 : 0);
			if (mo(p) && r.$el.eventRect) {
				let e = uo(r.$el.eventRect.node(), y, b, !1);
				y = e.x, b = e.y;
			}
			let x = {
				screenX: y,
				screenY: b,
				clientX: y,
				clientY: b,
				bubbles: c
			};
			(s || l) && (h = (d ?? m).node()), vo[/^(mouse|click)/.test(e) ? "mouse" : "touch"](h, e, x);
		}
	},
	setDragStatus(e) {
		this.state.dragging = e;
	},
	unbindZoomEvent() {
		let { $el: { canvas: e, eventRect: t, svg: n, zoomResetBtn: r } } = this;
		t?.on(".zoom wheel.zoom .drag", null), e?.on(".zoom wheel.zoom .drag", null), n?.on("wheel", null), r?.on("click", null).style("display", "none");
	},
	unbindAllEvents() {
		let e = this, { $el: { arcs: t, eventRect: n, legend: r, region: i, svg: a, treemap: o }, brush: s } = e, c = [
			"wheel",
			"click",
			"mouseover",
			"mousemove",
			"mouseout",
			"touchstart",
			"touchmove",
			"touchend",
			"touchstart.eventRect",
			"touchmove.eventRect",
			"touchend.eventRect",
			".brush",
			".drag",
			".zoom",
			"wheel.zoom",
			"dblclick.zoom"
		].join(" ");
		[
			a,
			n,
			i?.list,
			s?.getSelection(),
			t?.selectAll("path"),
			r?.selectAll("g"),
			o
		].forEach((e) => e?.on(c, null)), e.unbindZoomEvent?.();
	}
}, bs = { categoryName(e) {
	let { axis_x_categories: t } = this.config;
	return t?.[e] ?? e;
} }, xs = /[\x00-\x20\x7F-\xA0\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\]/g, Ss = {
	generateClass(e, t) {
		let n = this.state.generateClassCache, r = `${e}\0${t}`, i = n.get(r);
		return i || (i = ` ${e} ${e + this.getTargetSelectorSuffix(t)}`, n.set(r, i)), i;
	},
	getClass(e, t) {
		let n = /s$/.test(e), r = /^(area|arc|line|funnel|treemap)s?$/.test(e), i = n ? "id" : "index";
		return (a) => {
			let o = a.data || a;
			return ((t ? this.generateClass(q[n ? "shapes" : "shape"], o[i]) : "") + this.generateClass(q[e], o[r ? "id" : i])).trim();
		};
	},
	getChartClass(e) {
		return (t) => q[`chart${e}`] + this.classTarget((t.data ? t.data : t).id);
	},
	generateExtraLineClass() {
		let e = this.config.line_classes || [], t = [];
		return function(n) {
			let r = n.id || n.data?.id || n;
			return t.indexOf(r) < 0 && t.push(r), e[t.indexOf(r) % e.length];
		};
	},
	classRegion(e, t) {
		return `${this.generateClass(q.region, t)} ${"class" in e ? e.class : ""}`;
	},
	classTarget(e) {
		let t = this.config.data_classes[e], n = "";
		return t && (n = ` ${q.target}-${t}`), this.generateClass(q.target, e) + n;
	},
	classFocus(e) {
		return this.classFocused(e) + this.classDefocused(e);
	},
	classFocused(e) {
		return ` ${this.state.focusedTargetIds.has(e.id) ? q.focused : ""}`;
	},
	classDefocused(e) {
		return ` ${this.state.defocusedTargetIds.has(e.id) ? q.defocused : ""}`;
	},
	getTargetSelectorSuffix(e) {
		return (e || e === 0 ? `-${e}` : "").replace(xs, "-");
	},
	selectorTarget(e, t = "", n = "") {
		let r = this.getTargetSelectorSuffix(e);
		return `${t}.${q.target + r} ${n}, ${t}.${q.circles + r} ${n}`;
	},
	selectorTargets(e, t) {
		let n = e || [];
		return n.length ? n.map((e) => this.selectorTarget(e, t)) : null;
	},
	selectorLegend(e) {
		return `.${q.legendItem + this.getTargetSelectorSuffix(e)}`;
	},
	selectorLegends(e) {
		return e?.length ? e.map((e) => this.selectorLegend(e)) : null;
	}
};
//#endregion
//#region node_modules/d3-scale/src/init.js
function Cs(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			this.range(e);
			break;
		default: this.range(t).domain(e);
	}
	return this;
}
//#endregion
//#region node_modules/d3-scale/src/ordinal.js
var ws = Symbol("implicit");
function Ts() {
	var e = new Nr(), t = [], n = [], r = ws;
	function i(i) {
		let a = e.get(i);
		if (a === void 0) {
			if (r !== ws) return r;
			e.set(i, a = t.push(i) - 1);
		}
		return n[a % n.length];
	}
	return i.domain = function(n) {
		if (!arguments.length) return t.slice();
		t = [], e = new Nr();
		for (let r of n) e.has(r) || e.set(r, t.push(r) - 1);
		return i;
	}, i.range = function(e) {
		return arguments.length ? (n = Array.from(e), i) : n.slice();
	}, i.unknown = function(e) {
		return arguments.length ? (r = e, i) : r;
	}, i.copy = function() {
		return Ts(t, n).unknown(r);
	}, Cs.apply(i, arguments), i;
}
//#endregion
//#region node_modules/d3-color/src/define.js
function Es(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function Ds(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region node_modules/d3-color/src/color.js
function Os() {}
var ks = .7, As = 1 / ks, js = "\\s*([+-]?\\d+)\\s*", Ms = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ns = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ps = /^#([0-9a-f]{3,8})$/, Fs = RegExp(`^rgb\\(${js},${js},${js}\\)$`), Is = RegExp(`^rgb\\(${Ns},${Ns},${Ns}\\)$`), Ls = RegExp(`^rgba\\(${js},${js},${js},${Ms}\\)$`), Rs = RegExp(`^rgba\\(${Ns},${Ns},${Ns},${Ms}\\)$`), zs = RegExp(`^hsl\\(${Ms},${Ns},${Ns}\\)$`), Bs = RegExp(`^hsla\\(${Ms},${Ns},${Ns},${Ms}\\)$`), Vs = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
};
Es(Os, Ks, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: Hs,
	formatHex: Hs,
	formatHex8: Us,
	formatHsl: Ws,
	formatRgb: Gs,
	toString: Gs
});
function Hs() {
	return this.rgb().formatHex();
}
function Us() {
	return this.rgb().formatHex8();
}
function Ws() {
	return ic(this).formatHsl();
}
function Gs() {
	return this.rgb().formatRgb();
}
function Ks(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = Ps.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? qs(t) : n === 3 ? new X(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Js(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Js(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Fs.exec(e)) ? new X(t[1], t[2], t[3], 1) : (t = Is.exec(e)) ? new X(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ls.exec(e)) ? Js(t[1], t[2], t[3], t[4]) : (t = Rs.exec(e)) ? Js(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = zs.exec(e)) ? rc(t[1], t[2] / 100, t[3] / 100, 1) : (t = Bs.exec(e)) ? rc(t[1], t[2] / 100, t[3] / 100, t[4]) : Vs.hasOwnProperty(e) ? qs(Vs[e]) : e === "transparent" ? new X(NaN, NaN, NaN, 0) : null;
}
function qs(e) {
	return new X(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Js(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new X(e, t, n, r);
}
function Ys(e) {
	return e instanceof Os || (e = Ks(e)), e ? (e = e.rgb(), new X(e.r, e.g, e.b, e.opacity)) : new X();
}
function Xs(e, t, n, r) {
	return arguments.length === 1 ? Ys(e) : new X(e, t, n, r ?? 1);
}
function X(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Es(X, Xs, Ds(Os, {
	brighter(e) {
		return e = e == null ? As : As ** +e, new X(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? ks : ks ** +e, new X(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new X(tc(this.r), tc(this.g), tc(this.b), ec(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: Zs,
	formatHex: Zs,
	formatHex8: Qs,
	formatRgb: $s,
	toString: $s
}));
function Zs() {
	return `#${nc(this.r)}${nc(this.g)}${nc(this.b)}`;
}
function Qs() {
	return `#${nc(this.r)}${nc(this.g)}${nc(this.b)}${nc((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function $s() {
	let e = ec(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${tc(this.r)}, ${tc(this.g)}, ${tc(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ec(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function tc(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function nc(e) {
	return e = tc(e), (e < 16 ? "0" : "") + e.toString(16);
}
function rc(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new oc(e, t, n, r);
}
function ic(e) {
	if (e instanceof oc) return new oc(e.h, e.s, e.l, e.opacity);
	if (e instanceof Os || (e = Ks(e)), !e) return new oc();
	if (e instanceof oc) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new oc(o, s, c, e.opacity);
}
function ac(e, t, n, r) {
	return arguments.length === 1 ? ic(e) : new oc(e, t, n, r ?? 1);
}
function oc(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Es(oc, ac, Ds(Os, {
	brighter(e) {
		return e = e == null ? As : As ** +e, new oc(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? ks : ks ** +e, new oc(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new X(lc(e >= 240 ? e - 240 : e + 120, i, r), lc(e, i, r), lc(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new oc(sc(this.h), cc(this.s), cc(this.l), ec(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = ec(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${sc(this.h)}, ${cc(this.s) * 100}%, ${cc(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function sc(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function cc(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function lc(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region node_modules/d3-interpolate/src/constant.js
var uc = (e) => () => e;
//#endregion
//#region node_modules/d3-interpolate/src/color.js
function dc(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function fc(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function pc(e) {
	return (e = +e) == 1 ? mc : function(t, n) {
		return n - t ? fc(t, n, e) : uc(isNaN(t) ? n : t);
	};
}
function mc(e, t) {
	var n = t - e;
	return n ? dc(e, n) : uc(isNaN(e) ? t : e);
}
//#endregion
//#region node_modules/d3-interpolate/src/rgb.js
var hc = (function e(t) {
	var n = pc(t);
	function r(e, t) {
		var r = n((e = Xs(e)).r, (t = Xs(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = mc(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
//#endregion
//#region node_modules/d3-interpolate/src/numberArray.js
function gc(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function _c(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region node_modules/d3-interpolate/src/array.js
function vc(e, t) {
	var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o;
	for (o = 0; o < r; ++o) i[o] = Dc(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/date.js
function yc(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/number.js
function bc(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/object.js
function xc(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = Dc(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/string.js
var Sc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Cc = new RegExp(Sc.source, "g");
function wc(e) {
	return function() {
		return e;
	};
}
function Tc(e) {
	return function(t) {
		return e(t) + "";
	};
}
function Ec(e, t) {
	var n = Sc.lastIndex = Cc.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = Sc.exec(e)) && (i = Cc.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: bc(r, i)
	})), n = Cc.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Tc(c[0].x) : wc(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region node_modules/d3-interpolate/src/value.js
function Dc(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? uc(t) : (n === "number" ? bc : n === "string" ? (r = Ks(t)) ? (t = r, hc) : Ec : t instanceof Ks ? hc : t instanceof Date ? yc : _c(t) ? gc : Array.isArray(t) ? vc : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? xc : bc)(e, t);
}
//#endregion
//#region node_modules/d3-interpolate/src/round.js
function Oc(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/decompose.js
var kc = 180 / Math.PI, Ac = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function jc(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * kc,
		skewX: Math.atan(c) * kc,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/parse.js
var Mc;
function Nc(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? Ac : jc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Pc(e) {
	return e == null || (Mc ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), Mc.setAttribute("transform", e), !(e = Mc.transform.baseVal.consolidate())) ? Ac : (e = e.matrix, jc(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/index.js
function Fc(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: bc(e, i)
			}, {
				i: c - 2,
				x: bc(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: bc(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: bc(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: bc(e, n)
			}, {
				i: s - 2,
				x: bc(t, r)
			});
		} else (n !== 1 || r !== 1) && a.push(i(a) + "scale(" + n + "," + r + ")");
	}
	return function(t, n) {
		var r = [], i = [];
		return t = e(t), n = e(n), a(t.translateX, t.translateY, n.translateX, n.translateY, r, i), o(t.rotate, n.rotate, r, i), s(t.skewX, n.skewX, r, i), c(t.scaleX, t.scaleY, n.scaleX, n.scaleY, r, i), t = n = null, function(e) {
			for (var t = -1, n = i.length, a; ++t < n;) r[(a = i[t]).i] = a.x(e);
			return r.join("");
		};
	};
}
var Ic = Fc(Nc, "px, ", "px)", "deg)"), Lc = Fc(Pc, ", ", ")", ")"), Rc = 1e-12;
function zc(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Bc(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Vc(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var Hc = (function e(t, n, r) {
	function i(e, i) {
		var a = e[0], o = e[1], s = e[2], c = i[0], l = i[1], u = i[2], d = c - a, f = l - o, p = d * d + f * f, m, h;
		if (p < Rc) h = Math.log(u / s) / t, m = function(e) {
			return [
				a + e * d,
				o + e * f,
				s * Math.exp(t * e * h)
			];
		};
		else {
			var g = Math.sqrt(p), _ = (u * u - s * s + r * p) / (2 * s * n * g), v = (u * u - s * s - r * p) / (2 * u * n * g), y = Math.log(Math.sqrt(_ * _ + 1) - _);
			h = (Math.log(Math.sqrt(v * v + 1) - v) - y) / t, m = function(e) {
				var r = e * h, i = zc(y), c = s / (n * g) * (i * Vc(t * r + y) - Bc(y));
				return [
					a + c * d,
					o + c * f,
					s * i / zc(t * r + y)
				];
			};
		}
		return m.duration = h * 1e3 * t / Math.SQRT2, m;
	}
	return i.rho = function(t) {
		var n = Math.max(.001, +t), r = n * n;
		return e(n, r, r * r);
	}, i;
})(Math.SQRT2, 2, 4);
//#endregion
//#region node_modules/d3-scale/src/constant.js
function Uc(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-scale/src/number.js
function Wc(e) {
	return +e;
}
//#endregion
//#region node_modules/d3-scale/src/continuous.js
var Gc = [0, 1];
function Kc(e) {
	return e;
}
function qc(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : Uc(isNaN(t) ? NaN : .5);
}
function Jc(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function Yc(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = qc(i, r), a = n(o, a)) : (r = qc(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function Xc(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = qc(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = Mr(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function Zc(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Qc() {
	var e = Gc, t = Gc, n = Dc, r, i, a, o = Kc, s, c, l;
	function u() {
		var n = Math.min(e.length, t.length);
		return o !== Kc && (o = Jc(e[0], e[n - 1])), s = n > 2 ? Xc : Yc, c = l = null, d;
	}
	function d(i) {
		return i == null || isNaN(i = +i) ? a : (c ||= s(e.map(r), t, n))(r(o(i)));
	}
	return d.invert = function(n) {
		return o(i((l ||= s(t, e.map(r), bc))(n)));
	}, d.domain = function(t) {
		return arguments.length ? (e = Array.from(t, Wc), u()) : e.slice();
	}, d.range = function(e) {
		return arguments.length ? (t = Array.from(e), u()) : t.slice();
	}, d.rangeRound = function(e) {
		return t = Array.from(e), n = Oc, u();
	}, d.clamp = function(e) {
		return arguments.length ? (o = e ? !0 : Kc, u()) : o !== Kc;
	}, d.interpolate = function(e) {
		return arguments.length ? (n = e, u()) : n;
	}, d.unknown = function(e) {
		return arguments.length ? (a = e, d) : a;
	}, function(e, t) {
		return r = e, i = t, u();
	};
}
function $c() {
	return Qc()(Kc, Kc);
}
//#endregion
//#region node_modules/d3-format/src/formatDecimal.js
function el(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function tl(e, t) {
	if (!isFinite(e) || e === 0) return null;
	var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), r = e.slice(0, n);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
//#endregion
//#region node_modules/d3-format/src/exponent.js
function nl(e) {
	return e = tl(Math.abs(e)), e ? e[1] : NaN;
}
//#endregion
//#region node_modules/d3-format/src/formatGroup.js
function rl(e, t) {
	return function(n, r) {
		for (var i = n.length, a = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r));) s = e[o = (o + 1) % e.length];
		return a.reverse().join(t);
	};
}
//#endregion
//#region node_modules/d3-format/src/formatNumerals.js
function il(e) {
	return function(t) {
		return t.replace(/[0-9]/g, function(t) {
			return e[+t];
		});
	};
}
//#endregion
//#region node_modules/d3-format/src/formatSpecifier.js
var al = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ol(e) {
	if (!(t = al.exec(e))) throw Error("invalid format: " + e);
	var t;
	return new sl({
		fill: t[1],
		align: t[2],
		sign: t[3],
		symbol: t[4],
		zero: t[5],
		width: t[6],
		comma: t[7],
		precision: t[8] && t[8].slice(1),
		trim: t[9],
		type: t[10]
	});
}
ol.prototype = sl.prototype;
function sl(e) {
	this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
sl.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
//#endregion
//#region node_modules/d3-format/src/formatTrim.js
function cl(e) {
	out: for (var t = e.length, n = 1, r = -1, i; n < t; ++n) switch (e[n]) {
		case ".":
			r = i = n;
			break;
		case "0":
			r === 0 && (r = n), i = n;
			break;
		default:
			if (!+e[n]) break out;
			r > 0 && (r = 0);
	}
	return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
//#endregion
//#region node_modules/d3-format/src/formatPrefixAuto.js
var ll;
function ul(e, t) {
	var n = tl(e, t);
	if (!n) return ll = void 0, e.toPrecision(t);
	var r = n[0], i = n[1], a = i - (ll = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
	return a === o ? r : a > o ? r + Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + Array(1 - a).join("0") + tl(e, Math.max(0, t + a - 1))[0];
}
//#endregion
//#region node_modules/d3-format/src/formatRounded.js
function dl(e, t) {
	var n = tl(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1];
	return i < 0 ? "0." + Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + Array(i - r.length + 2).join("0");
}
//#endregion
//#region node_modules/d3-format/src/formatTypes.js
var fl = {
	"%": (e, t) => (e * 100).toFixed(t),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + "",
	d: el,
	e: (e, t) => e.toExponential(t),
	f: (e, t) => e.toFixed(t),
	g: (e, t) => e.toPrecision(t),
	o: (e) => Math.round(e).toString(8),
	p: (e, t) => dl(e * 100, t),
	r: dl,
	s: ul,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
};
//#endregion
//#region node_modules/d3-format/src/identity.js
function pl(e) {
	return e;
}
//#endregion
//#region node_modules/d3-format/src/locale.js
var ml = Array.prototype.map, hl = [
	"y",
	"z",
	"a",
	"f",
	"p",
	"n",
	"µ",
	"m",
	"",
	"k",
	"M",
	"G",
	"T",
	"P",
	"E",
	"Z",
	"Y"
];
function gl(e) {
	var t = e.grouping === void 0 || e.thousands === void 0 ? pl : rl(ml.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? pl : il(ml.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
	function l(e, l) {
		e = ol(e);
		var u = e.fill, d = e.align, f = e.sign, p = e.symbol, m = e.zero, h = e.width, g = e.comma, _ = e.precision, v = e.trim, y = e.type;
		y === "n" ? (g = !0, y = "g") : fl[y] || (_ === void 0 && (_ = 12), v = !0, y = "g"), (m || u === "0" && d === "=") && (m = !0, u = "0", d = "=");
		var b = (l && l.prefix !== void 0 ? l.prefix : "") + (p === "$" ? n : p === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : ""), x = (p === "$" ? r : /[%p]/.test(y) ? o : "") + (l && l.suffix !== void 0 ? l.suffix : ""), S = fl[y], C = /[defgprs%]/.test(y);
		_ = _ === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
		function w(e) {
			var n = b, r = x, o, l, p;
			if (y === "c") r = S(e) + r, e = "";
			else {
				e = +e;
				var w = e < 0 || 1 / e < 0;
				if (e = isNaN(e) ? c : S(Math.abs(e), _), v && (e = cl(e)), w && +e == 0 && f !== "+" && (w = !1), n = (w ? f === "(" ? f : s : f === "-" || f === "(" ? "" : f) + n, r = (y === "s" && !isNaN(e) && ll !== void 0 ? hl[8 + ll / 3] : "") + r + (w && f === "(" ? ")" : ""), C) {
					for (o = -1, l = e.length; ++o < l;) if (p = e.charCodeAt(o), 48 > p || p > 57) {
						r = (p === 46 ? i + e.slice(o + 1) : e.slice(o)) + r, e = e.slice(0, o);
						break;
					}
				}
			}
			g && !m && (e = t(e, Infinity));
			var T = n.length + e.length + r.length, E = T < h ? Array(h - T + 1).join(u) : "";
			switch (g && m && (e = t(E + e, E.length ? h - r.length : Infinity), E = ""), d) {
				case "<":
					e = n + e + r + E;
					break;
				case "=":
					e = n + E + e + r;
					break;
				case "^":
					e = E.slice(0, T = E.length >> 1) + n + e + r + E.slice(T);
					break;
				default: e = E + n + e + r;
			}
			return a(e);
		}
		return w.toString = function() {
			return e + "";
		}, w;
	}
	function u(e, t) {
		var n = Math.max(-8, Math.min(8, Math.floor(nl(t) / 3))) * 3, r = 10 ** -n, i = l((e = ol(e), e.type = "f", e), { suffix: hl[8 + n / 3] });
		return function(e) {
			return i(r * e);
		};
	}
	return {
		format: l,
		formatPrefix: u
	};
}
//#endregion
//#region node_modules/d3-format/src/defaultLocale.js
var _l, vl, yl;
bl({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function bl(e) {
	return _l = gl(e), vl = _l.format, yl = _l.formatPrefix, _l;
}
//#endregion
//#region node_modules/d3-format/src/precisionFixed.js
function xl(e) {
	return Math.max(0, -nl(Math.abs(e)));
}
//#endregion
//#region node_modules/d3-format/src/precisionPrefix.js
function Sl(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(nl(t) / 3))) * 3 - nl(Math.abs(e)));
}
//#endregion
//#region node_modules/d3-format/src/precisionRound.js
function Cl(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, nl(t) - nl(e)) + 1;
}
//#endregion
//#region node_modules/d3-scale/src/tickFormat.js
function wl(e, t, n, r) {
	var i = Ur(e, t, n), a;
	switch (r = ol(r ?? ",f"), r.type) {
		case "s":
			var o = Math.max(Math.abs(e), Math.abs(t));
			return r.precision == null && !isNaN(a = Sl(i, o)) && (r.precision = a), yl(r, o);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			r.precision == null && !isNaN(a = Cl(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = a - (r.type === "e"));
			break;
		case "f":
		case "%": r.precision == null && !isNaN(a = xl(i)) && (r.precision = a - (r.type === "%") * 2);
	}
	return vl(r);
}
//#endregion
//#region node_modules/d3-scale/src/linear.js
function Tl(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return Vr(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return wl(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = Hr(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
			if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
			else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
			else break;
			c = l;
		}
		return e;
	}, e;
}
function El() {
	var e = $c();
	return e.copy = function() {
		return Zc(e, El());
	}, Cs.apply(e, arguments), Tl(e);
}
//#endregion
//#region node_modules/d3-scale/src/nice.js
function Dl(e, t) {
	e = e.slice();
	var n = 0, r = e.length - 1, i = e[n], a = e[r], o;
	return a < i && (o = n, n = r, r = o, o = i, i = a, a = o), e[n] = t.floor(i), e[r] = t.ceil(a), e;
}
//#endregion
//#region node_modules/d3-scale/src/log.js
function Ol(e) {
	return Math.log(e);
}
function kl(e) {
	return Math.exp(e);
}
function Al(e) {
	return -Math.log(-e);
}
function jl(e) {
	return -Math.exp(-e);
}
function Ml(e) {
	return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function Nl(e) {
	return e === 10 ? Ml : e === Math.E ? Math.exp : (t) => e ** +t;
}
function Pl(e) {
	return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Fl(e) {
	return (t, n) => -e(-t, n);
}
function Il(e) {
	let t = e(Ol, kl), n = t.domain, r = 10, i, a;
	function o() {
		return i = Pl(r), a = Nl(r), n()[0] < 0 ? (i = Fl(i), a = Fl(a), e(Al, jl)) : e(Ol, kl), t;
	}
	return t.base = function(e) {
		return arguments.length ? (r = +e, o()) : r;
	}, t.domain = function(e) {
		return arguments.length ? (n(e), o()) : n();
	}, t.ticks = (e) => {
		let t = n(), o = t[0], s = t[t.length - 1], c = s < o;
		c && ([o, s] = [s, o]);
		let l = i(o), u = i(s), d, f, p = e == null ? 10 : +e, m = [];
		if (!(r % 1) && u - l < p) {
			if (l = Math.floor(l), u = Math.ceil(u), o > 0) {
				for (; l <= u; ++l) for (d = 1; d < r; ++d) if (f = l < 0 ? d / a(-l) : d * a(l), !(f < o)) {
					if (f > s) break;
					m.push(f);
				}
			} else for (; l <= u; ++l) for (d = r - 1; d >= 1; --d) if (f = l > 0 ? d / a(-l) : d * a(l), !(f < o)) {
				if (f > s) break;
				m.push(f);
			}
			m.length * 2 < p && (m = Vr(o, s, p));
		} else m = Vr(l, u, Math.min(u - l, p)).map(a);
		return c ? m.reverse() : m;
	}, t.tickFormat = (e, n) => {
		if (e ??= 10, n ??= r === 10 ? "s" : ",", typeof n != "function" && (!(r % 1) && (n = ol(n)).precision == null && (n.trim = !0), n = vl(n)), e === Infinity) return n;
		let o = Math.max(1, r * e / t.ticks().length);
		return (e) => {
			let t = e / a(Math.round(i(e)));
			return t * r < r - .5 && (t *= r), t <= o ? n(e) : "";
		};
	}, t.nice = () => n(Dl(n(), {
		floor: (e) => a(Math.floor(i(e))),
		ceil: (e) => a(Math.ceil(i(e)))
	})), t;
}
function Ll() {
	let e = Il(Qc()).domain([1, 10]);
	return e.copy = () => Zc(e, Ll()).base(e.base()), Cs.apply(e, arguments), e;
}
//#endregion
//#region node_modules/d3-scale/src/symlog.js
function Rl(e) {
	return function(t) {
		return Math.sign(t) * Math.log1p(Math.abs(t / e));
	};
}
function zl(e) {
	return function(t) {
		return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
	};
}
function Bl(e) {
	var t = 1, n = e(Rl(t), zl(t));
	return n.constant = function(n) {
		return arguments.length ? e(Rl(t = +n), zl(t)) : t;
	}, Tl(n);
}
function Vl() {
	var e = Bl(Qc());
	return e.copy = function() {
		return Zc(e, Vl()).constant(e.constant());
	}, Cs.apply(e, arguments);
}
//#endregion
//#region node_modules/d3-scale/src/time.js
function Hl(e) {
	return new Date(e);
}
function Ul(e) {
	return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Wl(e, t, n, r, i, a, o, s, c, l) {
	var u = $c(), d = u.invert, f = u.domain, p = l(".%L"), m = l(":%S"), h = l("%I:%M"), g = l("%I %p"), _ = l("%a %d"), v = l("%b %d"), y = l("%B"), b = l("%Y");
	function x(e) {
		return (c(e) < e ? p : s(e) < e ? m : o(e) < e ? h : a(e) < e ? g : r(e) < e ? i(e) < e ? _ : v : n(e) < e ? y : b)(e);
	}
	return u.invert = function(e) {
		return new Date(d(e));
	}, u.domain = function(e) {
		return arguments.length ? f(Array.from(e, Ul)) : f().map(Hl);
	}, u.ticks = function(t) {
		var n = f();
		return e(n[0], n[n.length - 1], t ?? 10);
	}, u.tickFormat = function(e, t) {
		return t == null ? x : l(t);
	}, u.nice = function(e) {
		var n = f();
		return (!e || typeof e.range != "function") && (e = t(n[0], n[n.length - 1], e ?? 10)), e ? f(Dl(n, e)) : u;
	}, u.copy = function() {
		return Zc(u, Wl(e, t, n, r, i, a, o, s, c, l));
	}, u;
}
function Gl() {
	return Cs.apply(Wl(Xr, Zr, Tr, Cr, cr, ir, nr, er, $n, va).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
//#endregion
//#region node_modules/d3-scale/src/utcTime.js
function Kl() {
	return Cs.apply(Wl(Jr, Yr, Er, wr, gr, ar, rr, tr, $n, ba).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/color.js
var ql = (e, t, n) => {
	let r = F(e.cloneNode(!0));
	return r.attr("id", n).insert("rect", ":first-child").attr("width", r.attr("width")).attr("height", r.attr("height")).style("fill", t), {
		id: n,
		node: r.node()
	};
};
function Jl(e) {
	let t = J.colorPattern, { body: n } = o, r = n[t];
	if (!r) {
		let i = e.classed(Da.colorPattern, !0).style("background-image");
		e.classed(Da.colorPattern, !1), i.indexOf(";") > -1 && (r = i.replace(/url[^#]*|["'()]|(\s|%20)/g, "").split(";").map((e) => e.trim().replace(/[\"'\s]/g, "")).filter(Boolean), n[t] = r);
	}
	return r;
}
var Yl = [
	"#1f77b4",
	"#ff7f0e",
	"#2ca02c",
	"#d62728",
	"#9467bd",
	"#8c564b",
	"#e377c2",
	"#7f7f7f",
	"#bcbd22",
	"#17becf"
], Xl = {
	generateColor() {
		let e = this, { $el: t, config: n } = e, r = [], i = n.area_linearGradient || n.bar_linearGradient || n.point_radialGradient, a = w(n.color_pattern) ? n.color_pattern : Ts(Jl(t.chart) || Yl).range(), o = a;
		if (f(n.color_tiles)) {
			let t = n.color_tiles.bind(e.api)(), r = a.map((n, r) => {
				let i = n.replace(/[#\(\)\s,]/g, ""), a = `${e.state.datetimeId}-pattern-${i}-${r}`;
				return ql(t[r % t.length], n, a);
			});
			a = r.map((e) => `url(#${e.id})`), e.patterns = r;
		}
		return function(s) {
			let c = n.data_colors, l = n.data_color, u = s.id || s.data?.id || s, d = e.isTypeOf(u, [
				"line",
				"spline",
				"step"
			]) || !n.data_types[u], p;
			if (f(c[u])) p = c[u].bind(e.api)(s);
			else if (c[u]) p = c[u];
			else {
				let e = r.indexOf(u);
				e < 0 && (r.push(u), e = r.length - 1), p = d ? o[e % o.length] : a[e % a.length], c[u] = p;
			}
			if (p = f(l) ? l.call(e.api, p, s) : p, i && t.defs) {
				let t = e.$el.defs.selectAll(`[id$='-gradient${e.getTargetSelectorSuffix(u)}'] stop`), n;
				t.each(function(e, t) {
					n = t === 0 ? this.style.stopColor : this.style.stopColor === n;
				}), n === !0 && t.attr("stop-color", p);
			}
			return p;
		};
	},
	generateLevelColor() {
		let { config: e } = this, t = e.color_pattern, n = e.color_threshold, r = n.unit === "value", i = n.max || 100, a = n.values && n.values.length ? n.values : [];
		return w(n) ? function(e) {
			let n = r ? e : e * 100 / i, o = t[t.length - 1];
			for (let e = 0, r = a.length; e < r; e++) if (n <= a[e]) {
				o = t[e];
				break;
			}
			return o;
		} : null;
	},
	generateTextBGColorFilter(e, t = {
		x: 0,
		y: 0,
		width: 1,
		height: 1
	}) {
		let n = this, { $el: { defs: r }, state: i } = n;
		if (e) {
			let a = [];
			p(e) ? a.push("") : E(e) ? a = Object.keys(e) : f(e) && (a = n.mapToTargetIds()), a.forEach((a) => {
				let o = `${i.datetimeId}-labels-bg${n.getTargetSelectorSuffix(a)}${p(e) ? n.getTargetSelectorSuffix(e) : ""}`, s = _e(a === "" ? e : e?.[a] || "");
				if (r.select(`#${o}`).empty()) {
					let e = r.append("filter").attr("x", t.x).attr("y", t.y).attr("width", t.width).attr("height", t.height).attr("id", o);
					e.append("feFlood").attr("flood-color", s), e.append("feComposite").attr("in", "SourceGraphic");
				}
			});
		}
	},
	getGradienColortUrl(e) {
		return `url(#${this.state.datetimeId}-gradient${this.getTargetSelectorSuffix(e)})`;
	},
	updateLinearGradient() {
		let e = this, { config: t, data: { targets: n }, state: { datetimeId: r }, $el: { defs: i } } = e;
		n.forEach((n) => {
			let a = `${r}-gradient${e.getTargetSelectorSuffix(n.id)}`, o = e.hasPointType() && t.point_radialGradient, s = e.isAreaType(n) && "area" || e.isBarType(n) && "bar";
			if ((o || s) && i.select(`#${a}`).empty()) {
				let r = e.color(n), c = {
					defs: null,
					stops: []
				};
				if (o) {
					let { cx: e = .3, cy: t = .3, r: n = .7, stops: s = [[
						.1,
						r,
						0
					], [
						.9,
						r,
						1
					]] } = o;
					c.stops = s, c.defs = i.append("radialGradient").attr("id", `${a}`).attr("cx", e).attr("cy", t).attr("r", n);
				} else {
					let e = t.axis_rotated, { x: n = e ? [1, 0] : [0, 0], y: o = e ? [0, 0] : [0, 1], stops: l = [[
						0,
						r,
						1
					], [
						1,
						r,
						0
					]] } = t[`${s}_linearGradient`];
					c.stops = l, c.defs = i.append("linearGradient").attr("id", `${a}`).attr("x1", n[0]).attr("x2", n[1]).attr("y1", o[0]).attr("y2", o[1]);
				}
				c.stops.forEach((t) => {
					let [i, a, o] = t, s = f(a) ? a.bind(e.api)(n.id) : a;
					c.defs && c.defs.append("stop").attr("offset", i).attr("stop-color", s || r).attr("stop-opacity", o);
				});
			}
		});
	},
	setOverColor(e, t) {
		let n = this, { config: r, $el: { main: i } } = n, a = r.color_onover, o = e ? a : n.color;
		E(o) ? o = ({ id: e }) => e in a ? a[e] : n.color(e) : p(o) ? o = () => a : f(a) && (o = o.bind(n.api)), i.selectAll(E(t) ? `.${Ca.arc}${n.getTargetSelectorSuffix(t.id)}` : `.${G.shape}-${t}`).style("fill", o);
	}
}, Zl = 0, Ql = 0, $l = 0, eu = 1e3, tu, nu, ru = 0, iu = 0, au = 0, ou = typeof performance == "object" && performance.now ? performance : Date, su = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function cu() {
	return iu ||= (su(lu), ou.now() + au);
}
function lu() {
	iu = 0;
}
function uu() {
	this._call = this._time = this._next = null;
}
uu.prototype = du.prototype = {
	constructor: uu,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? cu() : +n) + (t == null ? 0 : +t), !this._next && nu !== this && (nu ? nu._next = this : tu = this, nu = this), this._call = e, this._time = n, gu();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, gu());
	}
};
function du(e, t, n) {
	var r = new uu();
	return r.restart(e, t, n), r;
}
function fu() {
	cu(), ++Zl;
	for (var e = tu, t; e;) (t = iu - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--Zl;
}
function pu() {
	iu = (ru = ou.now()) + au, Zl = Ql = 0;
	try {
		fu();
	} finally {
		Zl = 0, hu(), iu = 0;
	}
}
function mu() {
	var e = ou.now(), t = e - ru;
	t > eu && (au -= t, ru = e);
}
function hu() {
	for (var e, t = tu, n, r = Infinity; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : tu = n);
	nu = e, gu(r);
}
function gu(e) {
	Zl || (Ql &&= clearTimeout(Ql), e - iu > 24 ? (e < Infinity && (Ql = setTimeout(pu, e - ou.now() - au)), $l &&= clearInterval($l)) : ($l ||= (ru = ou.now(), setInterval(mu, eu)), Zl = 1, su(pu)));
}
//#endregion
//#region node_modules/d3-timer/src/timeout.js
function _u(e, t, n) {
	var r = new uu();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
//#endregion
//#region node_modules/d3-transition/src/transition/schedule.js
var vu = ts("start", "end", "cancel", "interrupt"), yu = [];
function bu(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	wu(e, n, {
		name: t,
		index: r,
		group: i,
		on: vu,
		tween: yu,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: 0
	});
}
function xu(e, t) {
	var n = Cu(e, t);
	if (n.state > 0) throw Error("too late; already scheduled");
	return n;
}
function Su(e, t) {
	var n = Cu(e, t);
	if (n.state > 3) throw Error("too late; already running");
	return n;
}
function Cu(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function wu(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = du(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay);
	}
	function o(a) {
		var l, u, d, f;
		if (n.state !== 1) return c();
		for (l in r) if (f = r[l], f.name === n.name) {
			if (f.state === 3) return _u(o);
			f.state === 4 ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = 6, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete r[l]);
		}
		if (_u(function() {
			n.state === 3 && (n.state = 4, n.timer.restart(s, n.delay, n.time), s(a));
		}), n.state = 2, n.on.call("start", e, e.__data__, n.index, n.group), n.state === 2) {
			for (n.state = 3, i = Array(d = n.tween.length), l = 0, u = -1; l < d; ++l) (f = n.tween[l].value.call(e, e.__data__, n.index, n.group)) && (i[++u] = f);
			i.length = u + 1;
		}
	}
	function s(t) {
		for (var r = t < n.duration ? n.ease.call(null, t / n.duration) : (n.timer.restart(c), n.state = 5, 1), a = -1, o = i.length; ++a < o;) i[a].call(e, r);
		n.state === 5 && (n.on.call("end", e, e.__data__, n.index, n.group), c());
	}
	function c() {
		for (var i in n.state = 6, n.timer.stop(), delete r[t], r) return;
		delete e.__transition;
	}
}
//#endregion
//#region node_modules/d3-transition/src/interrupt.js
function Tu(e, t) {
	var n = e.__transition, r, i, a = !0, o;
	if (n) {
		for (o in t = t == null ? null : t + "", n) {
			if ((r = n[o]).name !== t) {
				a = !1;
				continue;
			}
			i = r.state > 2 && r.state < 5, r.state = 6, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[o];
		}
		a && delete e.__transition;
	}
}
//#endregion
//#region node_modules/d3-transition/src/selection/interrupt.js
function Eu(e) {
	return this.each(function() {
		Tu(this, e);
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/tween.js
function Du(e, t) {
	var n, r;
	return function() {
		var i = Su(this, e), a = i.tween;
		if (a !== n) {
			r = n = a;
			for (var o = 0, s = r.length; o < s; ++o) if (r[o].name === t) {
				r = r.slice(), r.splice(o, 1);
				break;
			}
		}
		i.tween = r;
	};
}
function Ou(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = Su(this, e), o = a.tween;
		if (o !== r) {
			i = (r = o).slice();
			for (var s = {
				name: t,
				value: n
			}, c = 0, l = i.length; c < l; ++c) if (i[c].name === t) {
				i[c] = s;
				break;
			}
			c === l && i.push(s);
		}
		a.tween = i;
	};
}
function ku(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = Cu(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? Du : Ou)(n, e, t));
}
function Au(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = Su(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return Cu(e, r).value[t];
	};
}
//#endregion
//#region node_modules/d3-transition/src/transition/interpolate.js
function ju(e, t) {
	var n;
	return (typeof t == "number" ? bc : t instanceof Ks ? hc : (n = Ks(t)) ? (t = n, hc) : Ec)(e, t);
}
//#endregion
//#region node_modules/d3-transition/src/transition/attr.js
function Mu(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function Nu(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function Pu(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Fu(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Iu(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Lu(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Ru(e, t) {
	var n = We(e), r = n === "transform" ? Lc : ju;
	return this.attrTween(e, typeof t == "function" ? (n.local ? Lu : Iu)(n, r, Au(this, "attr." + e, t)) : t == null ? (n.local ? Nu : Mu)(n) : (n.local ? Fu : Pu)(n, r, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/attrTween.js
function zu(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function Bu(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function Vu(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Bu(e, i)), n;
	}
	return i._value = t, i;
}
function Hu(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && zu(e, i)), n;
	}
	return i._value = t, i;
}
function Uu(e, t) {
	var n = "attr." + e;
	if (arguments.length < 2) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != "function") throw Error();
	var r = We(e);
	return this.tween(n, (r.local ? Vu : Hu)(r, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/delay.js
function Wu(e, t) {
	return function() {
		xu(this, e).delay = +t.apply(this, arguments);
	};
}
function Gu(e, t) {
	return t = +t, function() {
		xu(this, e).delay = t;
	};
}
function Ku(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? Wu : Gu)(t, e)) : Cu(this.node(), t).delay;
}
//#endregion
//#region node_modules/d3-transition/src/transition/duration.js
function qu(e, t) {
	return function() {
		Su(this, e).duration = +t.apply(this, arguments);
	};
}
function Ju(e, t) {
	return t = +t, function() {
		Su(this, e).duration = t;
	};
}
function Yu(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? qu : Ju)(t, e)) : Cu(this.node(), t).duration;
}
//#endregion
//#region node_modules/d3-transition/src/transition/ease.js
function Xu(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		Su(this, e).ease = t;
	};
}
function Zu(e) {
	var t = this._id;
	return arguments.length ? this.each(Xu(t, e)) : Cu(this.node(), t).ease;
}
//#endregion
//#region node_modules/d3-transition/src/transition/easeVarying.js
function Qu(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		Su(this, e).ease = n;
	};
}
function $u(e) {
	if (typeof e != "function") throw Error();
	return this.each(Qu(this._id, e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/filter.js
function ed(e) {
	typeof e != "function" && (e = nt(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new kd(r, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/merge.js
function td(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new kd(o, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/on.js
function nd(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function rd(e, t, n) {
	var r, i, a = nd(t) ? xu : Su;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function id(e, t) {
	var n = this._id;
	return arguments.length < 2 ? Cu(this.node(), n).on.on(e) : this.each(rd(n, e, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/remove.js
function ad(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function od() {
	return this.on("end.remove", ad(this._id));
}
//#endregion
//#region node_modules/d3-transition/src/transition/select.js
function sd(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = Ye(e));
	for (var r = this._groups, i = r.length, a = Array(i), o = 0; o < i; ++o) for (var s = r[o], c = s.length, l = a[o] = Array(c), u, d, f = 0; f < c; ++f) (u = s[f]) && (d = e.call(u, u.__data__, f, s)) && ("__data__" in u && (d.__data__ = u.__data__), l[f] = d, bu(l[f], t, n, f, l, Cu(u, n)));
	return new kd(a, this._parents, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selectAll.js
function cd(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = $e(e));
	for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s) for (var c = r[s], l = c.length, u, d = 0; d < l; ++d) if (u = c[d]) {
		for (var f = e.call(u, u.__data__, d, c), p, m = Cu(u, n), h = 0, g = f.length; h < g; ++h) (p = f[h]) && bu(p, t, n, h, f, m);
		a.push(f), o.push(u);
	}
	return new kd(a, o, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selection.js
var ld = zn.prototype.constructor;
function ud() {
	return new ld(this._groups, this._parents);
}
//#endregion
//#region node_modules/d3-transition/src/transition/style.js
function dd(e, t) {
	var n, r, i;
	return function() {
		var a = Kt(this, e), o = (this.style.removeProperty(e), Kt(this, e));
		return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o);
	};
}
function fd(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function pd(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = Kt(this, e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function md(e, t, n) {
	var r, i, a;
	return function() {
		var o = Kt(this, e), s = n(this), c = s + "";
		return s ?? (c = s = (this.style.removeProperty(e), Kt(this, e))), o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s));
	};
}
function hd(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = Su(this, e), l = c.on, u = c.value[a] == null ? s ||= fd(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function gd(e, t, n) {
	var r = (e += "") == "transform" ? Ic : ju;
	return t == null ? this.styleTween(e, dd(e, r)).on("end.style." + e, fd(e)) : typeof t == "function" ? this.styleTween(e, md(e, r, Au(this, "style." + e, t))).each(hd(this._id, e)) : this.styleTween(e, pd(e, r, t), n).on("end.style." + e, null);
}
//#endregion
//#region node_modules/d3-transition/src/transition/styleTween.js
function _d(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function vd(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && _d(e, a, n)), r;
	}
	return a._value = t, a;
}
function yd(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, vd(e, t, n ?? ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/text.js
function bd(e) {
	return function() {
		this.textContent = e;
	};
}
function xd(e) {
	return function() {
		var t = e(this);
		this.textContent = t ?? "";
	};
}
function Sd(e) {
	return this.tween("text", typeof e == "function" ? xd(Au(this, "text", e)) : bd(e == null ? "" : e + ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/textTween.js
function Cd(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function wd(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && Cd(r)), t;
	}
	return r._value = e, r;
}
function Td(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, wd(e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/transition.js
function Ed() {
	for (var e = this._name, t = this._id, n = jd(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = Cu(c, t);
		bu(c, e, n, l, o, {
			time: u.time + u.delay + u.duration,
			delay: 0,
			duration: u.duration,
			ease: u.ease
		});
	}
	return new kd(r, this._parents, e, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/end.js
function Dd() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = Su(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/index.js
var Od = 0;
function kd(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Ad(e) {
	return zn().transition(e);
}
function jd() {
	return ++Od;
}
var Md = zn.prototype;
kd.prototype = Ad.prototype = {
	constructor: kd,
	select: sd,
	selectAll: cd,
	selectChild: Md.selectChild,
	selectChildren: Md.selectChildren,
	filter: ed,
	merge: td,
	selection: ud,
	transition: Ed,
	call: Md.call,
	nodes: Md.nodes,
	node: Md.node,
	size: Md.size,
	empty: Md.empty,
	each: Md.each,
	on: id,
	attr: Ru,
	attrTween: Uu,
	style: gd,
	styleTween: yd,
	text: Sd,
	textTween: Td,
	remove: od,
	tween: ku,
	delay: Ku,
	duration: Yu,
	ease: Zu,
	easeVarying: $u,
	end: Dd,
	[Symbol.iterator]: Md[Symbol.iterator]
};
//#endregion
//#region node_modules/d3-ease/src/cubic.js
function Nd(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region node_modules/d3-transition/src/selection/transition.js
var Pd = {
	time: null,
	delay: 0,
	duration: 250,
	ease: Nd
};
function Fd(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function Id(e) {
	var t, n;
	e instanceof kd ? (t = e._id, e = e._name) : (t = jd(), (n = Pd).time = cu(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && bu(c, e, t, l, o, n || Fd(c, t));
	return new kd(r, this._parents, e, t);
}
zn.prototype.interrupt = Eu, zn.prototype.transition = Id;
//#endregion
//#region node_modules/d3-brush/src/brush.js
var { abs: Ld, max: Rd, min: zd } = Math;
["w", "e"].map(Bd), ["n", "s"].map(Bd), [
	"n",
	"w",
	"e",
	"s",
	"nw",
	"ne",
	"sw",
	"se"
].map(Bd);
function Bd(e) {
	return { type: e };
}
function Vd(e) {
	var t = e.__brush;
	return t ? t.dim.output(t.selection) : null;
}
//#endregion
//#region node_modules/billboard.js/dist-esm/module/util/brush.js
function Hd(e) {
	let { event: t, $el: n } = e, r = n.subchart.main || n.main, i;
	return t && t.type === "brush" ? i = t.selection : r && (i = r.select(".bb-brush").node()) && (i = Vd(i)), i;
}
function Ud(e) {
	let t = Hd(e);
	return !t || t[0] === t[1];
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/domain.js
function Wd(e, t) {
	return t.map((t) => {
		let { values: n } = t, r = n[0], i = n[n.length - 1], a = r ? e.getXCacheKey?.(r.x) ?? r.x : "", o = i ? e.getXCacheKey?.(i.x) ?? i.x : "";
		return `${t.id}:${n.length}:${a}:${o}`;
	}).join("|");
}
function Gd(e, t) {
	let n = e.data?.targets;
	if (!n) return !1;
	for (let e = 0; e < t.length; e++) {
		let r = t[e], i = n.find((e) => e.id === r.id);
		if (!i || i.values !== r.values) return !1;
	}
	return !0;
}
function Kd(e, t) {
	w(t) && ((e.min === void 0 || t < e.min) && (e.min = t), (e.max === void 0 || t > e.max) && (e.max = t));
}
function qd(e, t) {
	for (let n = 0; n < t.length; n++) Kd(e, t[n]);
}
function Jd(e, t) {
	let n = {
		min: void 0,
		max: void 0
	}, r = e.state.hasAxis;
	for (let i = 0; i < t.length; i++) {
		let a = t[i], o = e.isCandlestickType?.(a), { values: s } = a;
		for (let t = 0; t < s.length; t++) {
			let i = s[t], a = i.value;
			(d(a) || a === null) && (a !== null && o && (a = Array.isArray(a) ? a.slice(0, 4) : [
				a.open,
				a.high,
				a.low,
				a.close
			]), Array.isArray(a) ? qd(n, a) : E(a) && "high" in a ? qd(n, Object.values(a)) : e.isBubbleZType?.(i) ? Kd(n, r && e.getBubbleZData(a, "y")) : Kd(n, a));
		}
	}
	return [n.min, n.max];
}
function Yd(e, t) {
	let n;
	for (let r = 0; r < e.length; r++) {
		let { values: i } = e[r];
		for (let e = 0; e < i.length; e++) {
			let { x: r } = i[e];
			w(r) && (n === void 0 || (t === "min" ? r < n : r > n)) && (n = r);
		}
	}
	return n;
}
var Xd = {
	getYDomainMinMaxBoth(e) {
		let t = this, { axis: n, cache: r, config: i, state: a } = t, o = Gd(t, e) ? `${J.domainMinMax}_y_${Wd(t, e)}` : null, s = o && r.get(o);
		if (s && s.generation === a.dataGeneration) return s.value;
		let c = i.data_groups, l = t.mapToIds(e), u = Re(l), d;
		if (c.length > 0) {
			let r = t.getValuesAsIdKeyed(e), i = e.some((e) => e.values.some((e) => e.value < 0)), a = e.some((e) => e.values.some((e) => e.value > 0)), o = new Map(l.map((e) => [e, n.getId(e)])), s = {}, f = {};
			for (let e in r) s[e] = r[e].slice(), f[e] = r[e].slice();
			c.forEach((e) => {
				let t = e.filter((e) => u.has(e));
				if (t.length) {
					let e = t[0], n = o.get(e);
					s[e] && i && (s[e] = s[e].map((e) => e < 0 ? e : 0)), f[e] && a && (f[e] = f[e].map((e) => e > 0 ? e : 0)), t.filter((e, t) => t > 0).forEach((t) => {
						if (s[t]) {
							let r = o.get(t);
							s[t].forEach((t, a) => {
								let o = +t;
								r === n && !(i && o > 0) && (s[e][a] += o);
							});
						}
						if (f[t]) {
							let r = o.get(t);
							f[t].forEach((t, i) => {
								let o = +t;
								r === n && !(a && o < 0) && (f[e][i] += o);
							});
						}
					});
				}
			});
			let p = [], m = [];
			for (let e in s) p.push(Ae("min", s[e])), m.push(Ae("max", f[e]));
			d = [Ae("min", p), Ae("max", m)];
		} else d = Jd(t, e);
		return o && r.add(o, {
			generation: a.dataGeneration,
			value: d
		}), d;
	},
	isHiddenTargetWithYDomain(e) {
		let t = this;
		for (let n of t.state.hiddenTargetIds) if (t.axis.getId(n) === e) return !0;
		return !1;
	},
	getYDomain(t, r, i) {
		let a = this, { axis: o, config: s, scale: c } = a, l = `axis_${r}`;
		if (a.isStackNormalized() && t.filter((e) => o.getId(e.id) === r).map((e) => e.id).some((e) => a.isGrouped(e))) return [0, 100];
		let u = c?.[r] && c[r].type === "log", f = t.filter((e) => o.getId(e.id) === r), p = i ? a.filterByXDomain(f, i) : f;
		if (p.length === 0) return a.isHiddenTargetWithYDomain(r) ? c[r].domain() : r === "y2" ? c.y.domain() : a.getYDomain(t, "y2", i);
		let m = s[`${l}_min`], h = s[`${l}_max`], _ = s[`${l}_center`], v = s[`${l}_inverted`], y = a.hasDataLabel() && s.axis_rotated, x = a.hasDataLabel() && !s.axis_rotated, [S, C] = a.getYDomainMinMaxBoth(p), T = S, E = C, D = [
			e.BAR,
			e.BUBBLE,
			e.SCATTER,
			...n.Line
		].some((e) => {
			let t = e.indexOf("area") > -1 ? "area" : e;
			return a.hasType(e, p, !0) && s[`${t}_zerobased`];
		});
		T = d(m) ? m : d(h) ? T <= h ? T : h - 10 : T, E = d(h) ? h : d(m) ? m <= E ? E : m + 10 : E, isNaN(T) && (T = 0), isNaN(E) && (E = T), T === E && (T < 0 ? E = 0 : T = 0);
		let O = T >= 0 && E >= 0, k = T <= 0 && E <= 0;
		(d(m) && O || d(h) && k) && (D = !1), D && (O && (T = 0), k && (E = 0));
		let A = Math.abs(E - T), j = {
			top: A * .1,
			bottom: A * .1
		};
		if (g(_)) {
			let e = Math.max(Math.abs(T), Math.abs(E));
			E = _ + e, T = _ - e;
		}
		if (y) {
			let e = b(c.y.range()), t = a.getDataLabelLength(T, E, "width").map((t) => {
				let n = t / e;
				return isFinite(n) ? n : 0;
			});
			["bottom", "top"].forEach((e, n) => {
				j[e] += A * (t[n] / (1 - t[0] - t[1]));
			});
		} else if (x) {
			let e = a.getDataLabelLength(T, E, "height");
			["bottom", "top"].forEach((t, n) => {
				j[t] += a.convertPixelToScale("y", e[n], A);
			});
		}
		j = a.getResettedPadding(j);
		let ee = s[`${l}_padding`];
		w(ee) && ["bottom", "top"].forEach((e) => {
			j[e] = o.getPadding(ee, e, j[e], A);
		}), D && (O && (j.bottom = T), k && (j.top = -E));
		let te = u ? [T, E].map((e) => e < 0 ? 0 : e) : [T - j.bottom, E + j.top];
		return v ? te.reverse() : te;
	},
	getXDomainMinMax(e, t) {
		let n = this, { cache: r, state: i } = n, a = n.config[`axis_x_${t}`], o = Gd(n, e) ? `${J.domainMinMax}_x_${t}_${Wd(n, e)}` : null, s = o && r.get(o), c = s?.generation === i.dataGeneration ? s.value : void 0;
		c === void 0 && (c = Yd(e, t), o && r.add(o, {
			generation: i.dataGeneration,
			value: c
		}));
		let l = E(a) ? a.value : a;
		return l = g(l) && n.axis?.isTimeSeries() ? Fe.bind(this)(l) : l, E(a) && a.fit && (t === "min" && l < c || t === "max" && l > c) && (l = void 0), g(l) ? l : c;
	},
	getXDomainPadding(e, t) {
		let n = this, { axis: r, config: i } = n, a = i.axis_x_padding, o = r.isTimeSeries() && t, s = b(e), c;
		if (r.isCategorized() || o) c = 0;
		else if (n.hasType("bar")) {
			let e = n.getMaxDataCount();
			c = e > 1 ? s / (e - 1) / 2 : .5;
		} else c = n.getResettedPadding(s * .01);
		let { left: l = c, right: u = c } = m(a) ? {
			left: a,
			right: a
		} : a;
		if (a.unit === "px") {
			let e = Math.abs(s + s * .2);
			l = r.getPadding(a, "left", c, e), u = r.getPadding(a, "right", c, e);
		} else {
			let e = s + l + u;
			if (o && e) {
				let n = s / t / e;
				l = l / e / n, u = u / e / n;
			}
		}
		return {
			left: l,
			right: u
		};
	},
	getXDomain(e) {
		let t = this, { axis: n, config: r, scale: { x: i } } = t, a = r.axis_x_inverted, o = [t.getXDomainMinMax(e, "min"), t.getXDomainMinMax(e, "max")], [s = 0, c = 0] = o;
		if (i.type !== "log") {
			let e = n.isCategorized(), r = n.isTimeSeries(), i = t.getXDomainPadding(o), [a, l] = o;
			a - l === 0 && !e && (r ? (a = /* @__PURE__ */ new Date(a.getTime() * .5), l = /* @__PURE__ */ new Date(l.getTime() * 1.5)) : (a = a === 0 ? 1 : a * .5, l = l === 0 ? -1 : l * 1.5)), (a || a === 0) && (s = r ? new Date(a.getTime() - i.left) : a - i.left), (l || l === 0) && (c = r ? new Date(l.getTime() + i.right) : l + i.right);
		}
		return a ? [c, s] : [s, c];
	},
	updateXDomain(e, t, n, r, i) {
		let a = this, { config: o, org: s, scale: { x: c, subX: l } } = a, u = o.zoom_enabled;
		if (n && (c.domain(i || ke(a.getXDomain(e), !o.axis_x_inverted)), s.xDomain = c.domain(), l.domain(c.domain()), a.brush?.scale(l)), t) {
			let e = i || !a.brush || Ud(a) ? s.xDomain : Hd(a).map(l.invert);
			c.domain(e);
		}
		return (n || t) && u && a.zoom.updateScaleExtent(), r && c.domain(a.trimXDomain(c.orgDomain())), c.domain();
	},
	trimXDomain(e) {
		let t = this, n = t.config.axis_x_inverted, [r, i] = t.getZoomDomain();
		return (n ? e[0] >= r : e[0] <= r) && (e[1] = +e[1] + (r - e[0]), e[0] = r), (n ? e[1] <= i : e[1] >= i) && (e[0] = +e[0] - (e[1] - i), e[1] = i), e;
	},
	getZoomDomain(e = "zoom", t = !1) {
		let { config: n, scale: r, org: i } = this, [a, o] = t && r[e] ? r[e].domain() : i.xDomain;
		return e === "zoom" && (g(n.zoom_x_min) && (a = Ae("min", [a, n.zoom_x_min])), g(n.zoom_x_max) && (o = Ae("max", [o, n.zoom_x_max]))), [a, o];
	},
	getZoomDomainValue(e) {
		let { config: t, axis: n } = this;
		if (n.isCategorized() && Array.isArray(e)) {
			let n = t.axis_x_inverted;
			return e.map((e, t) => Number(e) + (t === 0 ? +n : +!n));
		}
		return e;
	},
	convertPixelToScale(e, t, n) {
		let { config: r, state: i } = this, a = r.axis_rotated, o;
		return o = e === "x" ? a ? "height" : "width" : a ? "width" : "height", n * (t / i[o]);
	},
	withinRange(e, t = [0, 0], n) {
		let r = this.config.axis_x_inverted, [i, a] = n;
		return Array.isArray(e) && (r ? e[1] : e[0]) < (r ? e[0] : e[1]) ? e.every((n, o) => (o === 0 ? r ? +n <= i : +n >= i : r ? +n >= a : +n <= a) && !e.every((e, n) => e === t[n])) : !1;
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/format.js
function Zd(e, t, n) {
	let { config: r } = e, i = `axis_${t}_tick_format`;
	return (r[i] ? r[i] : e.defaultValueFormat).call(e.api, n);
}
var Qd = {
	yFormat(e) {
		return Zd(this, "y", e);
	},
	y2Format(e) {
		return Zd(this, "y2", e);
	},
	getDefaultValueFormat() {
		let e = this, { defaultArcValueFormat: t, yFormat: n, y2Format: r } = e, i = e.hasArcType(null, [
			"gauge",
			"polar",
			"radar"
		]);
		return function(a, o, s) {
			return (i ? t : e.axis && e.axis.getId(s) === "y2" ? r : n).call(e, a, o);
		};
	},
	defaultValueFormat(e) {
		return T(e) ? e.join("~") : d(e) ? +e : "";
	},
	defaultArcValueFormat(e, t) {
		return `${(t * 100).toFixed(1)}%`;
	},
	defaultPolarValueFormat(e) {
		return `${e}`;
	},
	dataLabelFormat(e) {
		let t = this, n = t.config.data_labels, r = (e) => {
			let t = e;
			return T(e) ? t = e.join("~") : E(e) && (t = Object.values(e).join("~")), t;
		}, i = r;
		return f(n.format) ? i = n.format : x(n.format) && (i = n.format[e] ? n.format[e] === !0 ? r : n.format[e] : () => ""), i.bind(t.api);
	}
}, $d = 10, ef = 750;
function tf(e) {
	let t = this, n = t.getDataById(e);
	return t.levelColor ? t.levelColor(n.values[0].value) : t.color(n);
}
function nf(e, t = !0) {
	let { config: n } = this, r = n.data_names[e] ?? e;
	return t && f(n.legend_format) && (r = n.legend_format(r, e === r ? void 0 : e)), r;
}
function rf(e, t) {
	if (!t || t.empty()) return;
	let n = e.$el.legend?.selectAll(`.${U.legendItem}`);
	n && !n.empty() && (t = n);
	let r = [];
	t.each(function(e) {
		r.push({
			id: e,
			node: this
		});
	});
	let i = ze(r, (e) => e.id, (e) => e.node);
	e.cache.add(J.legendItemMap, i);
}
function af(e) {
	return e.changedTouches?.[0] || e.touches?.[0];
}
function of(e, t, n) {
	let r = af(n);
	e.state.legendTouch = r ? {
		id: t,
		x: r.clientX,
		y: r.clientY,
		moved: !1
	} : null;
}
function sf(e, t) {
	let n = e.state.legendTouch, r = n && af(t);
	r && (n.moved = n.moved || Math.abs(r.clientX - n.x) > $d || Math.abs(r.clientY - n.y) > $d);
}
function cf(e, t, n) {
	sf(e, n);
	let r = e.state.legendTouch;
	return e.state.legendTouch = null, !!r && r.id === t && !r.moved;
}
function lf(e, t) {
	e.state.legendLastTouchClickId = t, e.state.legendLastTouchClickTime = Date.now();
}
function uf(e, t) {
	let { state: n } = e, r = n.legendLastTouchClickId === t && Date.now() - (n.legendLastTouchClickTime || 0) < ef;
	return r && (n.legendLastTouchClickId = null, n.legendLastTouchClickTime = 0), r;
}
function df(e) {
	let t = e.config.interaction_inputType_touch?.preventDefault;
	return { passive: !(_(t) && t) && (!isNaN(t) && t || null) === null };
}
var ff = {
	initLegend() {
		let e = this, { config: t, $el: n } = e;
		if (e.legendItemTextBox = {}, e.state.legendHasRendered = !1, e.state.isCanvasMode) {
			t.legend_show ? e.updateHtmlLegend?.() : e.state.hiddenLegendIds = new Set(e.mapToIds(e.data.targets));
			return;
		}
		t.legend_show ? (t.legend_contents_bindto || (n.legend = e.$el.svg.append("g").classed(U.legend, !0).attr("transform", e.getTranslate("legend"))), e.updateLegend()) : e.state.hiddenLegendIds = new Set(e.mapToIds(e.data.targets));
	},
	updateLegend(e, t, n) {
		let r = this, { config: i, state: a, scale: o, $el: s } = r, c = t || {
			withTransform: !1,
			withTransitionForTransform: !1,
			withTransition: !1
		};
		c.withTransition = ye(c, "withTransition", !0), c.withTransitionForTransform = ye(c, "withTransitionForTransform", !0), i.legend_contents_bindto && i.legend_contents_template ? r.updateLegendTemplate() : a.hasTreemap || r.updateLegendElement(e || r.mapToIds(r.data.targets), c), s.legend?.selectAll(`.${U.legendItem}`).classed(U.legendItemHidden, function(e) {
			let t = !r.isTargetToShow(e);
			return t && (this.style.opacity = null), t;
		}), r.updateScales(!1, !o.zoom), r.updateSvgSize(), r.transformAll(c.withTransitionForTransform, n), a.legendHasRendered = !0;
	},
	updateLegendTemplate() {
		let e = this, { config: t, $el: n } = e, r = F(t.legend_contents_bindto), i = t.legend_contents_template;
		if (!r.empty()) {
			let t = e.mapToIds(e.data.targets), a = [], o = "";
			t.forEach((t) => {
				let n = f(i) ? _e(i.call(e.api, t, e.color(t), e.api.data(t)[0].values)) : Pe(i, {
					COLOR: e.color(t),
					TITLE: t
				});
				n && (a.push(t), o += n);
			});
			let s = r.html(o).selectAll(function() {
				return this.childNodes;
			}).data(a);
			e.setLegendItem(s), n.legend = r;
		}
	},
	updateSizeForLegend(e) {
		let t = this, { config: n, state: { isLegendTop: r, isLegendLeft: i, isLegendRight: a, isLegendInset: o, current: s } } = t, { width: c, height: l } = e, u = {
			top: r ? t.getCurrentPaddingByDirection("top") + n.legend_inset_y + 5.5 : s.height - l - t.getCurrentPaddingByDirection("bottom") - n.legend_inset_y,
			left: i ? t.getCurrentPaddingByDirection("left") + n.legend_inset_x + .5 : s.width - c - t.getCurrentPaddingByDirection("right") - n.legend_inset_x + .5
		};
		t.state.margin3 = {
			top: a ? 0 : o ? u.top : s.height - l,
			right: NaN,
			bottom: 0,
			left: a ? s.width - c : o ? u.left : 0
		};
	},
	transformLegend(e) {
		let t = this, { $el: { legend: n }, $T: r } = t;
		r(n, e).attr("transform", t.getTranslate("legend"));
	},
	updateLegendItemColor(e, t) {
		let n = this, { legend: r } = n.$el;
		if (r) {
			let r = n.getLegendItemById(e);
			r && F(r).select("line").style("stroke", t);
		}
	},
	getLegendWidth() {
		let e = this, { current: { width: t }, isLegendRight: n, isLegendInset: r, legendItemWidth: i, legendStep: a } = e.state;
		return e.config.legend_show ? n || r ? i * (a + 1) : t : 0;
	},
	getLegendHeight() {
		let e = this, { current: t, isLegendRight: n, legendItemHeight: r, legendStep: i } = e.state, a = e.config.padding?.mode === "fit" ? 10 : 20;
		return e.config.legend_show ? n ? t.height : Math.max(a, r) * (i + 1) : 0;
	},
	opacityForUnfocusedLegend(e) {
		return e.classed(U.legendItemHidden) ? null : "0.3";
	},
	toggleFocusLegend(e, t) {
		let n = this, { $el: { legend: r }, $T: i } = n, a = n.mapToTargetIds(e);
		r && i(r.selectAll(`.${U.legendItem}`).filter((e) => a.indexOf(e) >= 0).classed(W.legendItemFocused, t)).style("opacity", function() {
			return t ? null : n.opacityForUnfocusedLegend.call(n, F(this));
		});
	},
	revertLegend() {
		let { $el: { legend: e }, $T: t } = this;
		e && t(e.selectAll(`.${U.legendItem}`).classed(W.legendItemFocused, !1)).style("opacity", null);
	},
	showLegend(e) {
		let t = this, { config: n, $el: r, $T: i } = t;
		n.legend_show || (n.legend_show = !0, r.legend ? r.legend.style("visibility", null) : t.initLegend(), !t.state.legendHasRendered && t.updateLegend()), t.removeHiddenLegendIds(e), i(r.legend.selectAll(t.selectorLegends(e)).style("visibility", null)).style("opacity", null);
	},
	hideLegend(e) {
		let t = this, { config: n, $el: { legend: r } } = t;
		n.legend_show && C(e) && (n.legend_show = !1, r?.style("visibility", "hidden")), t.addHiddenLegendIds(e), r?.selectAll(t.selectorLegends(e)).style("opacity", "0").style("visibility", "hidden");
	},
	getLegendItemTextBox(e, t) {
		let n = this, { cache: r, state: i } = n, a, o = J.legendItemTextBox;
		return e && (a = !i.redrawing && r.get(o) || {}, a[e] || (a[e] = n.getTextRect(t, U.legendItem), r.add(o, a)), a = a[e]), a;
	},
	setLegendItem(e) {
		let t = this, { $el: n, api: r, config: i, state: a } = t, o = a.inputType === "touch", s = t.hasType("gauge"), c = i.boost_useCssRule, l = i.legend_item_interaction, u = l.dblclick ? "dblclick" : "click", d = l || f(i.legend_item_onclick), p = o ? df(t) : void 0, m = function(e, n) {
			if (!M(i.legend_item_onclick, r, n, !a.hiddenTargetIds.has(n))) {
				let { altKey: t, type: i } = e, o = F(this);
				i === "dblclick" || t ? a.hiddenTargetIds.size && !o.classed(U.legendItemHidden) ? r.show() : (r.hide(), r.show(n)) : (r.toggle(n), o.classed(W.legendItemFocused, !1));
			}
			o && (t.hideTooltip(), t.hideGridFocus?.(!0));
		};
		e.attr("class", function(e) {
			let n = F(this);
			return (!n.empty() && n.attr("class") || "") + t.generateClass(U.legendItem, e);
		}).style("visibility", (e) => t.isLegendToShow(e) ? null : "hidden"), i.interaction_enabled && (c && [
			[`.${U.legendItem}`, "cursor:pointer"],
			[`.${U.legendItem} text`, "pointer-events:none"],
			[`.${U.legendItemPoint} text`, "pointer-events:none"],
			[`.${U.legendItemTile}`, "pointer-events:none"],
			[`.${U.legendItemEvent}`, "fill-opacity:0"]
		].forEach((e) => {
			let [r, i] = e;
			t.setCssRule(!1, r, [i])(n.legend);
		}), e.on(u, d ? function(e, n) {
			o && e.type === "click" && uf(t, n) || m.call(this, e, n);
		} : null), o && u === "click" && d && e.on("touchstart", function(e, n) {
			of(t, n, e);
		}, p).on("touchmove", (e) => {
			sf(t, e);
		}, p).on("touchend", function(e, n) {
			cf(t, n, e) && (lf(t, n), m.call(this, e, n));
		}, p), !o && e.on("mouseout", l || f(i.legend_item_onout) ? function(e, n) {
			M(i.legend_item_onout, r, n, !a.hiddenTargetIds.has(n)) || (F(this).classed(W.legendItemFocused, !1), s && t.undoMarkOverlapped(t, `.${Aa.gaugeValue}`), t.api.revert());
		} : null).on("mouseover", l || f(i.legend_item_onover) ? function(e, n) {
			M(i.legend_item_onover, r, n, !a.hiddenTargetIds.has(n)) || (F(this).classed(W.legendItemFocused, !0), s && t.markOverlapped(n, t, `.${Aa.gaugeValue}`), !a.transiting && t.isTargetToShow(n) && r.focus(n));
		} : null), !e.empty() && e.on("click mouseout mouseover") && e.style("cursor", t.getStylePropValue("pointer"))), rf(t, e);
	},
	getLegendItemById(e) {
		let t = this, n = t.cache.get(J.legendItemMap);
		return n && n instanceof Map ? n.get(e) || null : (t.$el.legend?.selectAll(`.${U.legendItem}`).filter((t) => t === e))?.node() || null;
	},
	updateLegendElement(e, t) {
		let n = this, { config: r, state: i, $el: { legend: a }, $T: o } = n, s = r.legend_item_tile_type !== "circle", c = r.legend_item_tile_r, l = {
			width: s ? r.legend_item_tile_width : c * 2,
			height: s ? r.legend_item_tile_height : c * 2
		}, u = {
			padding: {
				top: 4,
				right: 10
			},
			max: {
				width: 0,
				height: 0
			},
			posMin: 10,
			step: 0,
			tileWidth: l.width + 5,
			totalLength: 0
		}, d = {
			offsets: {},
			widths: {},
			heights: {},
			margins: [0],
			steps: {}
		}, f, p, m, h = e.filter((e) => !g(r.data_names[e]) || r.data_names[e] !== null), _ = t.withTransition, v = i.isLegendRight || i.isLegendInset, y = nf.bind(n), b = n.getUpdateLegendPositions(h, u, d, v);
		i.isLegendInset && (u.step = r.legend_inset_step ? r.legend_inset_step : h.length, i.legendStep = u.step), i.isLegendRight ? (f = (e) => u.max.width * d.steps[e], p = (e) => d.margins[d.steps[e]] + d.offsets[e]) : i.isLegendInset ? (f = (e) => u.max.width * d.steps[e] + 10, p = (e) => d.margins[d.steps[e]] + d.offsets[e]) : (f = (e) => d.margins[d.steps[e]] + d.offsets[e], p = (e) => u.max.height * d.steps[e]);
		let x = {
			xText: (e, t) => f(e, t) + 4 + l.width,
			xRect: (e, t) => f(e, t),
			x1Tile: (e, t) => f(e, t) - 2,
			x2Tile: (e, t) => f(e, t) - 2 + l.width,
			yText: (e, t) => p(e, t) + 9,
			yRect: (e, t) => p(e, t) - 5,
			yTile: (e, t) => p(e, t) + 4
		};
		n.generateLegendItem(h, l, b, x, v, y), m = a.select(`.${U.legendBackground} rect`), i.isLegendInset && u.max.width > 0 && m.size() === 0 && (m = a.insert("g", `.${U.legendItem}`).attr("class", U.legendBackground).append("rect")), r.legend_tooltip && a.selectAll("title").data(h).text((e) => y(e, !1)), o(a.selectAll("text").data(h).text((e) => y(e)).each(function(e, t) {
			b(this, e, t);
		}), _).attr("x", x.xText).attr("y", x.yText), o(a.selectAll(`rect.${U.legendItemEvent}`).data(h), _).attr("width", (e) => d.widths[e]).attr("height", (e) => d.heights[e]).attr("x", x.xRect).attr("y", x.yRect), n.updateLegendItemPos(h, _, x), m && o(m, _).attr("height", n.getLegendHeight() - 12).attr("width", u.max.width * (u.step + 1) + 10), i.legendItemWidth = u.max.width, i.legendItemHeight = u.max.height, i.legendStep = u.step;
	},
	getUpdateLegendPositions(e, t, n, r) {
		let i = this, { config: a, state: o } = i;
		return function(s, c, l) {
			let u = l === 0, d = l === e.length - 1, f = i.getLegendItemTextBox(c, s), p = f.width + t.tileWidth + (d && !r ? 0 : t.padding.right) + a.legend_padding, m = f.height + t.padding.top, h = r ? m : p, g = r ? i.getLegendHeight() : i.getLegendWidth(), _, v = function(e, r) {
				r || (_ = (g - t.totalLength - h) / 2, _ < t.posMin && (_ = (g - h) / 2, t.totalLength = 0, t.step++)), n.steps[e] = t.step, n.margins[t.step] = o.isLegendInset ? 10 : _, n.offsets[e] = t.totalLength, t.totalLength += h;
			};
			if (u && (t.totalLength = 0, t.step = 0, t.max.width = 0, t.max.height = 0), a.legend_show && !i.isLegendToShow(c)) {
				n.widths[c] = 0, n.heights[c] = 0, n.steps[c] = 0, n.offsets[c] = 0;
				return;
			}
			n.widths[c] = p, n.heights[c] = m, (!t.max.width || p >= t.max.width) && (t.max.width = p), (!t.max.height || m >= t.max.height) && (t.max.height = m);
			let y = r ? t.max.height : t.max.width;
			if (a.legend_equally) {
				for (let e in n.widths) n.widths[e] = t.max.width;
				for (let e in n.heights) n.heights[e] = t.max.height;
				_ = (g - y * e.length) / 2, _ < t.posMin ? (t.totalLength = 0, t.step = 0, e.forEach((e) => v(e))) : v(c, !0);
			} else v(c);
		};
	},
	generateLegendItem(e, t, n, r, i, a) {
		let s = this, { config: c, state: l, $el: { legend: u } } = s, d = c.legend_usePoint, f = c.legend_item_tile_r, p = c.legend_item_tile_type, m = p !== "circle", h = -200, g = u.selectAll(`.${U.legendItem}`).data(e).enter().append("g");
		if (s.setLegendItem(g), c.legend_tooltip && g.append("title").text((e) => e), g.append("text").text((e) => a(e)).each(function(e, t) {
			n(this, e, t);
		}).style("pointer-events", s.getStylePropValue("none")).attr("x", i ? r.xText : h).attr("y", i ? h : r.yText), g.append("rect").attr("class", U.legendItemEvent).style("fill-opacity", s.getStylePropValue("0")).attr("x", i ? r.xRect : h).attr("y", i ? h : r.yRect), d) {
			let e = [], t = s.getValidPointPattern();
			g.append((n) => {
				e.indexOf(n) === -1 && e.push(n);
				let r = t[e.indexOf(n) % t.length];
				return r === "rectangle" && (r = "rect"), o.createElementNS(Ue.svg, "hasValidPointType" in s && s.hasValidPointType(r) ? r : "use");
			}).attr("class", U.legendItemPoint).style("fill", tf.bind(s)).style("pointer-events", s.getStylePropValue("none")).attr("href", (e, t, n) => {
				let r = n[t].nodeName.toLowerCase(), i = s.getTargetSelectorSuffix(e);
				return r === "use" ? `#${l.datetimeId}-point${i}` : void 0;
			});
		} else g.append(m ? "line" : p).attr("class", U.legendItemTile).style("stroke", tf.bind(s)).style("pointer-events", s.getStylePropValue("none")).call((e) => {
			p === "circle" ? e.attr("r", f).style("fill", tf.bind(s)).attr("cx", i ? r.x2Tile : h).attr("cy", i ? h : r.yTile) : m && e.attr("stroke-width", t.height).attr("x1", i ? r.x1Tile : h).attr("y1", i ? h : r.yTile).attr("x2", i ? r.x2Tile : h).attr("y2", i ? h : r.yTile);
		});
	},
	updateLegendItemPos(e, t, n) {
		let r = this, { config: i, $el: { legend: a }, $T: o } = r, s = i.legend_usePoint, c = i.legend_item_tile_type, l = c !== "circle";
		if (s) {
			let r = a.selectAll(`.${U.legendItemPoint}`).data(e), s = i.legend_item_tile_type !== "circle", c = s ? i.legend_item_tile_width : i.legend_item_tile_r * 2, l = s ? i.legend_item_tile_height : i.legend_item_tile_r * 2, u = c * .75, d = l * .75, f = c / 8, p = l / 8;
			o(r, t).each(function() {
				let e = this.nodeName.toLowerCase(), t = "x", r = "y", i = null, a = null, o = null;
				e === "circle" ? (t = "cx", r = "cy", i = Math.min(u, d) / 2) : e === "rect" && (a = u, o = d);
				let s = F(this).attr("transform", null).attr("x", null).attr("y", null).attr("cx", null).attr("cy", null).attr("r", i).attr("width", a).attr("height", o);
				e === "use" ? s.attr("transform", (e) => `translate(${n.x1Tile(e)} ${n.yTile(e) - l / 2}) scale(${f} ${p})`) : s.attr(t, (e) => n.x1Tile(e) + (c - (a || 0)) / 2).attr(r, (e) => n.yTile(e) - (o || 0) / 2);
			});
		} else o(a.selectAll(`.${U.legendItemTile}`).data(e), t).style("stroke", tf.bind(r)).call((e) => {
			c === "circle" ? e.attr("cx", (e) => {
				let t = n.x2Tile(e);
				return t - (t - n.x1Tile(e)) / 2;
			}).attr("cy", n.yTile) : l && e.attr("x1", n.x1Tile).attr("y1", n.yTile).attr("x2", n.x2Tile).attr("y2", n.yTile);
		});
	}
}, pf = {
	redraw(e = {}) {
		let t = this, { config: n, state: r, $el: i } = t, { main: a, treemap: o } = i;
		r.redrawing = !0, r.redrawGeneration++, (r.dirty.data || r.dirty.visibility || e.initializing) && r.dataGeneration++, (e.initializing || r.dirty.size || r.dirty.data || !r.rendered) && t.cache.remove([J.svgLeft]);
		let s = t.filterTargetsToShow(t.data.targets);
		r._targetsToShow = s;
		let c = {
			data: r.dirty.data,
			visibility: r.dirty.visibility
		};
		r.dirty.data = !1, r.dirty.visibility = !1, r.dirty.size = !1;
		let { flow: l, initializing: u } = e, d = t.getWithOption(e), f = d.Transition ? n.transition_duration : 0, p = d.TransitionForExit ? f : 0, m = d.TransitionForAxis ? f : 0, h = t.axis?.generateTransitions(m), g = c.data || c.visibility || u;
		if (r.isCanvasMode && (t.setContainerSize(), t.updateHtmlLegend?.()), t.updateSizes(u), r.isCanvasMode) {
			let i = t.scale.zoom, a = i?.domain();
			i && (t.scale.zoom = null), t.updateScales(u, d.UpdateXDomain), i && (i.range(t.scale.x.range()), a && i.domain(a), t.scale.zoom = t.getCustomizedXScale(i), t.axis.x.scale(t.scale.zoom), t.scale.x.domain(n.zoom_rescale ? a : t.org.xDomain), t.scale.subX.domain(t.org.xDomain)), r.hasAxis && t.axis.syncAxisDomains(s, d, l), r.hasAxis && t.applyCanvasSubchartDomain?.();
			let o = g ? t.getDrawShape() : r._cachedDrawShape || t.getDrawShape();
			g && (r._cachedDrawShape = o), t.updateHtmlLegend?.(), t.resizeCanvas?.(), r.canvasFocusKey = null, t.renderCanvasFrame(o, null, !0), u && t.updateTypesElements(), t.callPluginHook("$redraw", e, 0), r.redrawing = !1, r._targetsToShow = null, r._cachedDrawShape = null, t.mapToIds(t.data.targets).forEach((e) => {
				r.withoutFadeIn[e] = !0;
			}), M(n.onrendered, t.api);
			return;
		}
		d.Legend && n.legend_show ? (e.withTransition = !!f, !o && t.updateLegend(t.mapToIds(t.data.targets), e, h)) : d.Dimension && t.updateDimension(!0), n.data_empty_label_text && a.select(`text.${K.text}.${B.empty}`).attr("x", r.width / 2).attr("y", r.height / 2).text(n.data_empty_label_text).style("display", s.length ? "none" : null), t.redrawTitle?.(), r.hasAxis ? (t.axis.redrawAxis(s, d, h, l, u), t.hasGrid?.() && t.updateGrid(), n.regions.length && t.updateRegion?.(), [
			"bar",
			"candlestick",
			"line",
			"area"
		].forEach((e) => {
			let n = N(e);
			(/^(line|area)$/.test(e) && t.hasTypeOf(n) || t.hasType(e)) && g && t[`update${n}`](d.TransitionForExit);
		}), i.text && a.selectAll(`.${La.selectedCircles}`).filter(t.isBarType.bind(t)).selectAll("circle").remove(), n.interaction_enabled && !l && d.EventRect && (t.redrawEventRect(), t.bindZoomEvent?.())) : (i.arcs && t.redrawArc(f, p, d.Transform), i.radar && t.redrawRadar(), i.polar && t.redrawPolar(), i.funnel && t.redrawFunnel(), o && t.updateTreemap(p)), !r.resizing && !o && (t.hasPointType() || r.hasRadar) ? g && t.updateCircle() : t.hasLegendDefsPoint?.() && t.data.targets.forEach(t.point("create", this)), t.hasDataLabel() && !t.hasArcType(null, ["radar"]) && g && t.updateText(), u && t.updateTypesElements(), t.generateRedrawList(s, l, f, d.Subchart, g), t.updateTooltipOnRedraw(), t.callPluginHook("$redraw", e, f);
	},
	generateRedrawList(e, t, n, r, i = !0) {
		let a = this, { config: o, state: s } = a, c = i ? a.getDrawShape() : s._cachedDrawShape || a.getDrawShape();
		i && (s._cachedDrawShape = c), s.hasAxis && o.subchart_show && a.redrawSubchart(r, n, c);
		let l = t && a.generateFlow({
			targets: e,
			flow: t,
			duration: t.duration,
			shape: c,
			xv: a.xv.bind(a)
		}), u = (n || l) && go(), d = a.getRedrawList(c, t, l, u), f = () => {
			l && l(), s.redrawing = !1, s._targetsToShow = null, s._cachedDrawShape = null, M(o.onrendered, a.api);
		};
		if (u && d.length) {
			let e = So();
			Ad().duration(n).each(() => {
				d.flatMap((e) => e).forEach((t) => e.add(t));
			}).call(e, f);
		} else s.transiting || f();
		a.mapToIds(a.data.targets).forEach((e) => {
			s.withoutFadeIn[e] = !0;
		});
	},
	getRedrawList(e, t, n, r) {
		let i = this, { config: a, state: { hasAxis: o, hasRadar: s, hasTreemap: c }, $el: { grid: l } } = i, { cx: u, cy: d, xForText: f, yForText: p } = e.pos, m = [];
		if (o) {
			i.redrawGrid && (a.grid_x_lines.length || a.grid_y_lines.length) && m.push(i.redrawGrid(r)), i.redrawRegion && a.regions.length && m.push(i.redrawRegion(r));
			for (let t in e.type) {
				let n = N(t), a = e.type[t];
				(/^(area|line)$/.test(t) && i.hasTypeOf(n) || i.hasType(t)) && m.push(i[`redraw${n}`](a, r));
			}
			!t && l.main && i.updateGridFocus && m.push(i.updateGridFocus());
		}
		return (!i.hasArcType() || s) && w(a.data_labels) && a.data_labels !== !1 && m.push(i.redrawText(f, p, t, r)), (i.hasPointType() || s) && !i.isPointFocusOnly() && i.redrawCircle && m.push(i.redrawCircle(u, d, r, n)), c && m.push(i.redrawTreemap(r)), m;
	},
	updateAndRedraw(e = {}) {
		let t = this, { config: n, state: r } = t, i;
		e.withTransition = ye(e, "withTransition", !0), e.withTransform = ye(e, "withTransform", !1), e.withLegend = ye(e, "withLegend", !1), e.withUpdateXDomain = !0, e.withUpdateOrgXDomain = !0, e.withTransitionForExit = !1, e.withTransitionForTransform = ye(e, "withTransitionForTransform", e.withTransition), e.withLegend && n.legend_show || (r.hasAxis && (i = t.axis.generateTransitions(e.withTransitionForAxis ? n.transition_duration : 0)), t.updateScales(), t.updateSvgSize(), t.transformAll(e.withTransitionForTransform, i)), t.redraw(e);
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/scale.js
function mf(e = "linear", t, n) {
	let r = {
		linear: El,
		log: Vl,
		_log: Ll,
		time: Gl,
		utc: Kl
	}[e]();
	return r.type = e, /_?log/.test(e) && r.clamp(!0), r.range([t ?? 0, n ?? 1]);
}
var hf = {
	getXScale(e, t, n, r) {
		let i = this, a = i.state.loading !== "append" && i.scale.zoom || mf(i.axis.getAxisType("x"), e, t);
		return i.getCustomizedXScale(n ? a.domain(n) : a, r);
	},
	getYScale(e, t, n, r, i) {
		let a = this.axis.getAxisType(e);
		if (i && i.type === a) return i.range([t, n]), r && i.domain(r), i;
		let o = mf(a, t, n);
		return r && o.domain(r), o;
	},
	getYScaleById(e, t = !1) {
		let n = this.axis?.getId(e) === "y2", r = t ? n ? "subY2" : "subY" : n ? "y2" : "y";
		return this.scale[r];
	},
	getCustomizedXScale(e, t) {
		let n = this, r = () => (t ? t() : n.axis.x.tickOffset()) || (n.axis.isCategorized() ? (e(1) - e(0)) / 2 : 0), i = n.config.axis_x_inverted, a = function(t) {
			return e(t) + r();
		};
		for (let t in e) a[t] = e[t];
		return a.orgDomain = () => e.domain(), a.orgScale = () => e, n.axis.isCategorized() && (a.domain = function(t) {
			let n = t;
			return arguments.length ? (e.domain(n), a) : (n = this.orgDomain(), i ? [n[0] + 1, n[1]] : [n[0], n[1] + 1]);
		}), a;
	},
	updateScales(e, t = !0) {
		let n = this, { axis: r, config: i, format: a, org: o, scale: s, state: { current: c, width: l, height: u, width2: d, height2: f, hasAxis: p, hasTreemap: m } } = n;
		if (p) {
			let c = i.axis_rotated, p = n.getResettedPadding(1), m = {
				x: c ? p : 0,
				y: c ? 0 : u,
				subY: c ? 0 : f
			}, h = {
				x: c ? u : l,
				y: c ? l : p,
				subY: c ? d : 1
			}, g = t ? s.x?.orgDomain() : s.zoom ? void 0 : s.x?.domain?.(), _ = t ? o.xDomain : s.zoom ? void 0 : s.subX?.domain?.();
			s.x = n.getXScale(m.x, h.x, g, () => r.x.tickOffset()), s.subX = n.getXScale(m.x, h.x, _, (e) => e % 1 ? 0 : (r.subX ?? r.x).tickOffset()), a.xAxisTick = r.getXAxisTickFormat(), a.subXAxisTick = r.getXAxisTickFormat(!0), r.setAxis("x", s.x, i.axis_x_tick_outer, e), i.subchart_show && r.setAxis("subX", s.subX, i.axis_x_tick_outer, e), s.y = n.getYScale("y", m.y, h.y, s.y ? s.y.domain() : i.axis_y_default, s.y), s.subY = n.getYScale("y", m.subY, h.subY, s.subY ? s.subY.domain() : i.axis_y_default, s.subY), r.setAxis("y", s.y, i.axis_y_tick_outer, e), i.axis_y2_show && (s.y2 = n.getYScale("y2", m.y, h.y, s.y2 ? s.y2.domain() : i.axis_y2_default, s.y2), s.subY2 = n.getYScale("y2", m.subY, h.subY, s.subY2 ? s.subY2.domain() : i.axis_y2_default, s.subY2), r.setAxis("y2", s.y2, i.axis_y2_tick_outer, e));
		} else if (m) {
			let e = n.getCurrentPadding();
			s.x = El().rangeRound([e.left, c.width - e.right]), s.y = El().rangeRound([e.top, c.height - e.bottom]);
		} else n.updateArc?.();
	},
	xx(e) {
		let { config: t, scale: { x: n, zoom: r } } = this, i = t.zoom_enabled && r ? r : n;
		return e ? i(d(e.x) ? e.x : e) : null;
	},
	xv(e) {
		let t = this, { axis: n, config: r, scale: { x: i, zoom: a } } = t, o = r.zoom_enabled && a ? a : i, s = t.getBaseValue(e);
		return n.isTimeSeries() ? s = Fe.call(t, s) : n.isCategorized() && p(s) && (s = r.axis_x_categories.indexOf(s)), o(s);
	},
	yv(e) {
		let t = this, { scale: { y: n, y2: r } } = t;
		return (e.axis && e.axis === "y2" ? r : n)(t.getBaseValue(e));
	},
	subxx(e) {
		return e ? this.scale.subX(e.x) : null;
	}
}, gf = {
	setContainerSize() {
		let e = this, { state: t } = e;
		t.current.width = e.getCurrentWidth(), t.current.height = e.getCurrentHeight();
	},
	getCurrentWidth() {
		let e = this;
		return e.config.size_width || e.getParentRectValue("width");
	},
	getCurrentHeight() {
		let e = this, { config: t } = e, n = t.size_height || e.getParentHeight();
		return n > 0 ? n : 320 / (e.hasType("gauge") && !t.gauge_fullCircle ? 2 : 1);
	},
	getParentRectValue(e) {
		let t = `offset${N(e)}`, n = this.$el.chart.node(), r = 0;
		for (; r < 30 && n && n.tagName !== "BODY";) {
			try {
				r = Y(n, !0)[e];
			} catch {
				t in n && (r = n[t]);
			}
			n = n.parentNode;
		}
		let i = o.body[t];
		return r > i && (r = i), r;
	},
	getParentHeight() {
		let e = this.$el.chart.style("height"), t = 0;
		return e && (t = /px$/.test(e) ? parseInt(e, 10) : this.getParentRectValue("height")), t;
	},
	getSvgLeft(e) {
		let t = this, { cache: n, config: r, state: { hasAxis: i }, $el: a } = t;
		if (e) {
			let e = n.get(J.svgLeft);
			if (e !== null) return e;
		}
		let o = r.axis_rotated, s = o || !o && !r.axis_y_inner, c = o ? V.axisX : V.axisY, l = a.main.select(`.${c}`).node(), u = i && r[`axis_${o ? "x" : "y"}_label`], d = i && (p(u) || p(u.text) || /^inner-/.test(u?.position)) ? a.main.select(`.${c}-label`) : null, f = d && !d.empty() ? d.node() : null, m = !e, h = {
			label: f ? Y(f, m) : null,
			leftAxis: l && s ? Y(l, m) : null,
			chart: Y(a.chart.node(), m)
		}, g = h.label?.left ?? 0, _ = h.leftAxis ?? { right: 0 }, v = h.chart.left + g, y = t.hasArcType(), b = _.right - v - (y ? 0 : t.getCurrentPaddingByDirection("left", e)), x = b > 0 ? b : 0;
		return n.add(J.svgLeft, x), x;
	},
	updateDimension(e) {
		let t = this, { config: n, state: { hasAxis: r, isCanvasMode: i }, $el: a } = t;
		if (r && !e && t.axis.x && n.axis_rotated && t.axis.subX?.create(a.axis.subX), t.updateScales(e), i) {
			t.resizeCanvas?.();
			return;
		}
		t.updateSvgSize(), t.transformAll(!1);
	},
	updateSvgSize() {
		let e = this, { config: t, state: { clip: n, current: r, hasAxis: i, width: a, height: o }, $el: { svg: s } } = e;
		if (!s) {
			e.resizeCanvas?.();
			return;
		}
		if (t.resize_auto === "viewBox" ? s.attr("viewBox", `0 0 ${r.width} ${r.height}`) : s.attr("width", r.width).attr("height", r.height), i) {
			let t = s.select(`.${Ra.brush} .overlay`), r = {
				width: 0,
				height: 0
			};
			t.size() && (r.width = +t.attr("width"), r.height = +t.attr("height")), s.selectAll([`#${n.id}`, `#${n.idGrid}`]).select("rect").attr("width", a).attr("height", o), s.select(`#${n.idXAxis}`).select("rect").call(e.setXAxisClipPath.bind(e)), s.select(`#${n.idYAxis}`).select("rect").call(e.setYAxisClipPath.bind(e)), n.idSubchart && s.select(`#${n.idSubchart}`).select("rect").attr("width", a).attr("height", r.height);
		}
	},
	getCurrentPaddingByDirection(e, t = !1, n = !1) {
		let r = this, { config: i, $el: a, state: { hasAxis: o, isCanvasMode: s } } = r, c = i.axis_rotated, l = i.padding?.mode === "fit", u = m(i[`padding_${e}`]) ? i[`padding_${e}`] : void 0, d = o ? {
			top: c ? "y2" : null,
			bottom: c ? "y" : "x",
			left: c ? "x" : "y",
			right: c ? null : "y2"
		}[e] : null, f = /^(left|right)$/.test(e), p = d && i[`axis_${d}_inner`], g = d && i[`axis_${d}_show`], _ = d ? i[`axis_${d}_axes`].length : 0, y = d ? f ? r.getAxisWidthByAxisId(d, t) : r.getHorizontalAxisHeight(d) : 0, b = 0;
		!l && f && (y = v(y));
		let x = o && f && (p || h(u) && !g) ? 0 : l ? (g ? y : 0) + (u ?? 0) : h(u) ? y : u;
		return f && o ? (d && (l || p) && i[`axis_${d}_label`].text && (x += r.axis.getAxisLabelPosition(d).isOuter ? 20 : 0), e === "right" ? (x += c ? !l && h(u) ? 10 : 2 : !g || p ? l ? 2 : 1 : 0, x += n ? r.axis.getXAxisTickTextY2Overflow(20) : 0) : e === "left" && c && h(u) && (x = i.axis_x_show ? l ? y : Math.max(y, 40) : 1)) : e === "top" ? ((a.title && a.title.node() || s && i.title_text) && (x += r.getTitlePadding()), b = c && !p ? _ : 0) : e === "bottom" && o && c && !g && (x += 1), x + y * _ - b;
	},
	getCurrentPadding(e = !1) {
		let t = this, [n, r, i, a] = [
			"top",
			"bottom",
			"left",
			"right"
		].map((n) => t.getCurrentPaddingByDirection(n, null, e));
		return {
			top: n,
			bottom: r,
			left: i,
			right: a
		};
	},
	getResettedPadding(e) {
		let { config: t } = this, n = m(e), r = n ? 0 : {};
		return t.padding === !1 ? !n && Object.keys(e).forEach((n) => {
			r[n] = !C(t.data_labels) && t.data_labels !== !1 && n === "top" ? e[n] : 0;
		}) : r = e, r;
	},
	updateSizes(e) {
		let t = this, { config: n, state: r, $el: { legend: i } } = t, a = n.axis_rotated, o = t.hasArcType() || r.hasFunnel || r.hasTreemap, s = n.padding?.mode === "fit";
		!e && t.setContainerSize();
		let c = i ? t.getLegendWidth() : 0, l = i ? t.getLegendHeight() : 0, u = {
			width: c,
			height: l
		};
		!o && n.axis_x_show && n.axis_x_tick_autorotate && t.updateXAxisTickClip();
		let d = {
			right: n.legend_show && r.isLegendRight ? c + (s ? 0 : 20) : 0,
			bottom: !n.legend_show || r.isLegendRight || r.isLegendInset ? 0 : l
		}, f = a || o ? 0 : t.getHorizontalAxisHeight("x"), p = n.subchart_axis_x_show && n.subchart_axis_x_tick_text_show ? f : 30, m = n.subchart_show && !o ? n.subchart_size_height + p : 0, h = t.hasType("gauge") && n.arc_needle_show && !n.gauge_fullCircle && !n.gauge_label_show ? 10 : 0, g = t.getCurrentPadding(!0);
		if (r.margin = !o && a ? {
			top: g.top,
			right: o ? 0 : g.right + d.right,
			bottom: d.bottom + g.bottom,
			left: m + (o ? 0 : g.left)
		} : {
			top: (s ? 0 : 4) + g.top,
			right: o ? 0 : g.right + d.right,
			bottom: h + m + d.bottom + g.bottom,
			left: o ? 0 : g.left
		}, r.margin = t.getResettedPadding(r.margin), r.margin2 = a ? {
			top: r.margin.top,
			right: NaN,
			bottom: 20 + d.bottom,
			left: t.state.rotatedPadding.left
		} : {
			top: r.current.height - m - d.bottom,
			right: NaN,
			bottom: p + d.bottom,
			left: r.margin.left
		}, r.margin3 = {
			top: 0,
			right: NaN,
			bottom: 0,
			left: 0
		}, t.updateSizeForLegend?.(u), r.width = r.current.width - r.margin.left - r.margin.right, r.height = r.current.height - r.margin.top - r.margin.bottom, r.width < 0 && (r.width = 0), r.height < 0 && (r.height = 0), r.width2 = a ? r.margin.left - r.rotatedPadding.left - r.rotatedPadding.right : r.width, r.height2 = a ? r.height : r.current.height - r.margin2.top - r.margin2.bottom, r.width2 < 0 && (r.width2 = 0), r.height2 < 0 && (r.height2 = 0), t.hasArcType()) {
			let e = t.hasType("gauge"), i = n.legend_show && r.isLegendRight, a = (r.hasRadar && t.cache.get(J.radarTextWidth)) ?? 0;
			r.arcWidth = r.width - (i ? u.width + 10 : 0) - a, r.arcHeight = r.height - (i && !e ? 0 : 10), n.arc_rangeText_values?.length && (e ? (r.arcWidth -= 25, r.arcHeight -= 10, r.margin.left += 10) : (r.arcHeight -= 20, r.margin.top += 10)), e && !n.gauge_fullCircle && (r.arcHeight += r.height - t.getPaddingBottomForGauge()), t.updateRadius?.();
		}
		r.isLegendRight && o && (r.margin3.left = r.arcWidth / 2 + r.radiusExpanded * 1.1);
	}
}, _f = {
	setCssRule(e, t, n, r) {
		let i = this, { config: a, state: { cssRule: o, style: s } } = i;
		return a.boost_useCssRule ? (a) => {
			a.each((a) => {
				let c = r && r?.call(i, a), l = `${e ? `.${G.shapes + i.getTargetSelectorSuffix(a.id)}` : ""}${t}`;
				t in o && s.sheet.deleteRule(o[l]), i.state.cssRule[l] = co(s, l, n.filter(Boolean).map((e) => p(c) && e.indexOf(":") === -1 ? `${e}: ${c}` : e || ""));
			});
		} : () => {};
	},
	getStylePropValue(e) {
		let { config: { boost_useCssRule: t } } = this;
		return t ? null : f(e) ? e.bind(this) : e;
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/text.util.js
function vf(e) {
	let t = "middle";
	return e > 0 && e <= 170 ? t = "end" : e > 190 && e <= 360 && (t = "start"), t;
}
function yf(e, t, n, r, i) {
	let a = this, { value: o } = e, s = a.isCandlestickType(e), c = m(o) && o < 0 || s && !a.getCandlestickData(e)?._isUp, { x: l, y: u } = t;
	return r ? n === "start" ? (l += c ? 0 : 8, u += 4) : n === "middle" ? (l += 8, u -= 8) : n === "end" && (c && (l -= 8), u += 4) : (n === "start" ? (l += 4, c && (u += 16)) : n === "middle" ? u -= 8 : n === "end" && (l -= 4, c && (u += 16)), i && (u += c ? -17 : s ? 13 : 7)), {
		x: l,
		y: u
	};
}
function bf(e, t) {
	let n = this.config.data_labels_position, { id: r, index: i, value: a } = e;
	return (f(n) ? n.bind(this.api)(t, a, r, i, this.$el.text) : (r in n ? n[r] : n)[t]) ?? 0;
}
function xf(e, t, n) {
	let { config: r, $T: i } = this, a = r.axis_rotated, { border: { padding: o = "3 5", radius: s = 10, stroke: c = "#000", strokeWidth: l = 1, fill: u = "none" } } = r.data_labels, d = Ie(o), f = r.data_labels.border !== !0, p = so(e), m = F(e.previousElementSibling);
	(m.empty() || m.node()?.tagName !== "rect" || !m.attr("class")?.includes(n)) && (m = F(e.parentNode).insert("rect", () => e).attr("class", `${K.textBorderRect} ${n}`).attr("width", p.width + (f ? d.left + d.right : 0)).attr("height", p.height + (f ? d.top + d.bottom : 0)), f && m.style("fill", u).style("stroke", c).style("stroke-width", `${l}px`).attr("rx", s).attr("ry", s)), i(m).attr("x", t.x - (f ? d.left : 0) - (a ? 0 : p.width / 2)).attr("y", t.y - (f ? d.top : 0) - p.height / 4 * 3.2);
}
function Sf(e = 0, t) {
	let { config: n } = this;
	return e >= (n[`${t}_label_threshold`] || 0);
}
function Cf() {
	let e = this, { $el: { text: t }, config: n } = e;
	(e.state.arcWidth ? e.getArcLabelConfig("image") : n.data_labels.image) && t.filter(function() {
		let e = this.previousElementSibling;
		return !e || e.tagName !== "image" || !e.classList.contains(K.textLabelImage);
	}).each(function(t) {
		let n = wf.call(e, t);
		if (!n) return;
		let { url: r, width: i, height: a, pos: o } = n;
		r && F(this.parentNode)?.insert("image", `${this.getAttribute("class")?.replace(/(?:^(.)|\s)/g, ".$1") ?? "text"}`).style("opacity", "0").attr("href", (e) => Pe(r, { ID: "id" in e ? e.id : e.data.id })).attr("class", K.textLabelImage).style("pointer-events", "none").attr("width", i).attr("height", a).attr("transform", o ? `translate(${o.x ?? 0} ${o.y ?? 0})` : null);
	});
}
function wf(e) {
	let t = this, { config: n, state: r } = t, i = r.arcWidth ? t.getArcLabelConfig("image") : n.data_labels.image;
	if (f(i)) return i.call(t.api, e.value, e.id, e.index) ?? {
		url: "",
		width: 0,
		height: 0,
		pos: {
			x: 0,
			y: 0
		}
	};
	if (i) {
		let { url: e = "", width: t = 0, height: n = 0, pos: r } = i;
		return {
			url: e,
			width: t,
			height: n,
			pos: r
		};
	}
	return null;
}
function Tf(e, t, n) {
	let r = this, { config: i, state: { arcWidth: a, hasTreemap: o } } = r, s = i.axis_rotated, c = F(e.previousElementSibling), l = (e) => {
		let t = e.style.opacity !== "0" && e.style.fillOpacity !== "0";
		return (a ? e.textContent : t) && this.previousElementSibling?.tagName !== "image";
	};
	if (!c.empty() && c.node()?.tagName === "image") {
		let i = n || Y(e), a = c.attr("width") / 2, u = c.attr("height") / 2, d = t.x - a, f = t.y - u - i.height / 2;
		s ? t.x += a : (o && (d = -a, f = -(u * 2 + i.height)), r.hasType("pie") || r.hasType("polar") || (t.y += u)), r.$T(c).style("opacity", l(e) ? null : "0").attr("x", d).attr("y", f);
	}
}
function Ef(e) {
	return ze(e, (e) => e, (e) => so(e, !0));
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/text.js
var Df = {
	opacityForText(e) {
		let t = this;
		return t.isBarType(e) && !Sf.call(t, Math.abs(t.getRatio("bar", e)), "bar") ? "0" : t.hasDataLabel() ? null : "0";
	},
	initText() {
		let { $el: e } = this;
		e.main.select(`.${B.chart}`).append("g").attr("class", K.chartTexts).style("pointer-events", e.funnel || e.treemap ? "none" : null);
	},
	updateTargetsForText(e) {
		let t = this, n = t.getChartClass("Text"), r = t.getClass("texts", "id"), i = t.classFocus.bind(t);
		t.$el.main.select(`.${K.chartTexts}`).selectAll(`.${K.chartText}`).data(t.filterNullish(e)).attr("class", (e) => `${n(e)}${i(e)}`.trim()).enter().append("g").style("opacity", "0").attr("class", n).call(t.setCssRule(!0, ` .${K.text}`, ["fill", "pointer-events:none"], t.updateTextColor)).append("g").attr("class", r);
	},
	updateText() {
		let e = this, { $el: t, $T: n, config: r, axis: i } = e, a = e.getClass("text", "index"), o = r.data_labels.centered, s = t.main.selectAll(`.${K.texts}`).selectAll(`.${K.text}`).data(e.labelishData.bind(e));
		n(s.exit()).style("fill-opacity", "0").remove(), t.text = s.enter().append("text").merge(s).attr("class", a).attr("text-anchor", (t) => {
			let n = r[`axis_${i?.getId(t.id)}_inverted`] ? t.value > 0 : t.value < 0;
			if (e.isCandlestickType(t)) n = !e.getCandlestickData(t)?._isUp;
			else if (e.isTreemapType(t)) return o ? "middle" : "start";
			return r.axis_rotated ? n ? "end" : "start" : "middle";
		}).style("fill", e.getStylePropValue(e.updateTextColor)).style("fill-opacity", "0").each(function(t, n, r) {
			let i = F(this), { value: a } = t;
			if (e.isBubbleZType(t)) a = e.getBubbleZData(a, "z");
			else if (e.isCandlestickType(t)) {
				let n = e.getCandlestickData(t);
				n && (a = n.close);
			}
			a = e.isTreemapType(t) ? e.treemapDataLabelFormat(t)(i) : e.dataLabelFormat(t.id)(a, t.id, t.index, r), m(a) ? this.textContent = a : io(i, a, void 0, !0);
		}), Cf.call(e);
	},
	updateTextColor(e) {
		let t = this, { config: n } = t, r = n.data_labels_colors, i = t.isArcType(e) && !t.isRadarType(e) || t.isFunnelType(e) || t.isTreemapType(e) ? null : t.color(e), a;
		if (p(r)) a = r;
		else if (E(r)) {
			let { id: t } = e.data || e;
			a = r[t];
		} else f(r) && (a = r.bind(t.api)(i, e));
		if (t.isCandlestickType(e) && !f(r) && !t.getCandlestickData(e)?._isUp) {
			let t = n.candlestick_color_down;
			a = E(t) ? t[e.id] : t;
		}
		return a || i;
	},
	updateTextBGColor(e, t) {
		let n = this, { $el: { defs: r } } = n, i = "";
		if (t) {
			let a = p(t) ? "" : n.getTargetSelectorSuffix("id" in e ? e.id : e.data.id), o = r.select(["filter[id*='labels-bg", "']"].join(a));
			if (o.size() && (i = `url(#${o.attr("id")})`), f(t)) {
				n.generateTextBGColorFilter(t);
				let r = n.color(e), a = t.bind(n.api)(r, e);
				a ? o.select("feFlood").attr("flood-color", a) : i = "";
			}
		}
		return i || null;
	},
	redrawText(e, t, n, r) {
		let i = this, { $T: a, axis: o, config: s, state: { hasTreemap: c } } = i, l = Me(!0), u = s.axis_rotated, d = s.data_labels.rotate, f = vf(d), p = d ? `rotate(${d})` : "", m = i.$el.text.style("fill", i.getStylePropValue(i.updateTextColor)).attr("filter", (e) => i.updateTextBGColor.bind(i)(e, s.data_labels_backgroundColors)).style("fill-opacity", n ? 0 : i.opacityForText.bind(i)), h = /* @__PURE__ */ new Map(), g = [];
		return m.each(function(e) {
			let t = this;
			h.set(t, { rect: Y(t) }), s.data_labels.centered && (i.isBarType(e) || i.isTreemapType(e)) && g.push(t);
		}), g.length > 0 && Ef(g).forEach((e, t) => {
			let n = h.get(t);
			n && (n.bbox = e);
		}), m.each(function(n, m) {
			let g = h.get(this), _ = a(c && this.childElementCount ? this.parentNode : this, !!(r && (this.getAttribute("x") || this.getAttribute("transform"))), l), v = s[`axis_${o?.getId(n.id)}_inverted`], y = {
				x: e.call(this, n, m, g),
				y: t.call(this, n, m, g)
			};
			d && (y = yf.bind(i)(n, y, f, u, v), _.attr("text-anchor", f)), Tf.call(i, this, y, g?.rect), this.childElementCount || d ? _.attr("transform", `translate(${y.x} ${y.y}) ${p}`) : _.attr("x", y.x).attr("y", y.y), s.data_labels.border && xf.call(i, _.node(), y, `${K.textBorderRect}-${m}`);
		}), !0;
	},
	getTextRect(e, t) {
		let n = this, r, i, a;
		Array.isArray(e) ? r = `${J.textRect}-${e.join("_")}` : (i = e.node?.() ?? e, /text/i.test(i.tagName) || (i = i.querySelector("text")), a = i.textContent, r = `${J.textRect}-${a.replace(/\W/g, "_")}`);
		let o = n.cache.get(r) || [];
		return o.length === 0 && ((n.$el.svg || n.$el.chart.select("svg")).selectAll(`.${B.dummy}`).data(a ? [a] : e).enter().append("text").style("visibility", "hidden").style("font", i ? F(i).style("font") : null).classed(t || B.dummy, !0).text((e) => e).each(function(e, t) {
			o[t] = Y(this);
		}).remove(), n.cache.add(r, o)), o.length > 1 ? o : o[0];
	},
	generateXYForText(e, t) {
		let n = this, { state: { hasRadar: r, hasFunnel: i, hasTreemap: a } } = n, o = Object.keys(e), s = {}, c = t ? n.getXForText : n.getYForText;
		return i && o.push("funnel"), r && o.push("radar"), a && o.push("treemap"), o.forEach((t) => {
			s[t] = n[`generateGet${N(t)}Points`](e[t], !1);
		}), function(e, t, r) {
			let i = n.isAreaType(e) && "area" || n.isBarType(e) && "bar" || n.isCandlestickType(e) && "candlestick" || n.isFunnelType(e) && "funnel" || n.isRadarType(e) && "radar" || n.isTreemapType(e) && "treemap" || "line";
			return c.call(n, s[i](e, t), e, this, r);
		};
	},
	getCenteredTextPos(e, t, n, r, i) {
		let a = this, { config: o } = a, s = o.axis_rotated, c = a.isBarType(e), l = a.isTreemapType(e);
		if (o.data_labels.centered && (c || l)) {
			let o = i?.bbox || so(n);
			if (c) {
				let n = a.getRangedData(e, null, "bar") >= 0;
				if (s) {
					let e = (n ? t[1][1] - t[0][1] : t[0][1] - t[1][1]) / 2 + o.width / 2;
					return n ? -e - 3 : e + 2;
				}
				{
					let e = (n ? t[0][1] - t[1][1] : t[1][1] - t[0][1]) / 2 + o.height / 2;
					return n ? e : -e - 2;
				}
			}
			if (l) return r === "x" ? (t[1][0] - t[0][0]) / 2 : (t[1][1] - t[0][1]) / 2 - o.y - o.height / 2;
		}
		return 0;
	},
	getXForText(e, t, n, r) {
		let i = this, { config: a } = i, o = a.axis_rotated, s = i.isFunnelType(t), c = i.isTreemapType(t), l = e ? e[0][0] : 0;
		if (i.isCandlestickType(t)) o ? l = i.getCandlestickData(t)?._isUp ? e[2][2] + 4 : e[2][1] - 4 : l += (e[1][0] - l) / 2;
		else if (s) if (e) l = e[2]?.[0] ?? l;
		else return po(n, "x");
		else if (c) l += a.data_labels.centered ? 0 : 5;
		else if (o) {
			let n = a[`axis_${i.axis.getId(t.id)}_inverted`], r = i.isBarType(t) ? 4 : 6, o = t.value;
			l = e[2][1], l += r * ((n ? o > 0 : o < 0) ? -1 : 1);
		} else l = i.hasType("bar") ? (e[2][0] + e[0][0]) / 2 : l;
		return (o || c || s) && (l += i.getCenteredTextPos(t, e, n, "x", r)), l + bf.call(this, t, "x");
	},
	getYForText(e, t, n, r) {
		let i = this, { axis: a, config: o, state: s } = i, c = o.axis_rotated, l = o[`axis_${a?.getId(t.id)}_inverted`], u = i.isBarType(t), d = i.isFunnelType(t), f = i.isTreemapType(t), p = o.point_r, h = r?.rect || Y(n), { value: g } = t, _ = 3, v;
		if (i.isCandlestickType(t)) g = i.getCandlestickData(t), c ? (v = e[0][0], v += (e[1][0] - v) / 2 + _) : (v = g && g._isUp ? e[2][2] - _ : e[2][1] + _ * 4, l && (v += 15 * (g._isUp ? 1 : -1)));
		else if (d) if (e) v = (e[2]?.[1] ?? e[0][1]) + h.height / 2 - 3;
		else return po(n, "y");
		else if (f) v = e[0][1] + (o.data_labels.centered ? 0 : h.height + 5);
		else if (c) v = (e[0][0] + e[2][0] + h.height * .6) / 2;
		else if (v = e[2][1], m(p) && p > 5 && (i.isLineType(t) || i.isScatterType(t)) && (_ += o.point_r / 2.3), g < 0 || g === 0 && !s.hasPositiveValue && s.hasNegativeValue) v += l ? u ? -3 : -5 : h.height + (u ? -_ : _);
		else {
			let e = -_ * 2;
			u ? e = -_ : i.isBubbleType(t) && (e = _), l && (e = u ? 10 : 15), v += e;
		}
		return (!c || f) && (v += i.getCenteredTextPos(t, e, n, "y", r)), v + bf.call(this, t, "y");
	},
	markOverlapped(e, t, n) {
		let r = t.$el.arcs.selectAll(n), i = r.filter((t) => t.data.id !== e), a = r.filter((t) => t.data.id === e), o = fo(a.node()), s = (e, t) => Math.sqrt(e * e + t * t);
		a.node() && i.each(function() {
			let e = fo(this), t = F(this), n = s(o.e, o.f) > s(e.e, e.f) ? a : t, r = Math.ceil(Math.abs(o.e - e.e)) < Math.ceil(n.node().getComputedTextLength()), i = Math.ceil(Math.abs(o.f - e.f)) < parseInt(a.style("font-size"), 10);
			t.classed(K.TextOverlapping, r && i);
		});
	},
	undoMarkOverlapped(e, t) {
		e.$el.arcs.selectAll(t).each(function() {
			Un([this, this.previousSibling]).classed(K.TextOverlapping, !1);
		});
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/title.js
function Of(e = "left", t) {
	let n = m(t);
	return e.includes("center") ? n ? t / 2 : "middle" : e.includes("right") ? n ? t : "end" : n ? 0 : "start";
}
function kf(e) {
	let { config: t, $el: n } = e, r = e.canvasTheme?.style?.title?.font || e.canvasTheme?.style?.label?.font || "14px sans-serif", i = n.chart?.node?.(), a = i?.ownerDocument;
	if (i && a && t.title_text) {
		let e = a.createElementNS("http://www.w3.org/2000/svg", "svg"), n = a.createElementNS("http://www.w3.org/2000/svg", "text");
		e.style.cssText = "position:absolute;visibility:hidden;left:-10000px;top:-10000px;", n.setAttribute("class", K.title), n.style.font = r, n.textContent = String(t.title_text), e.appendChild(n), i.appendChild(e);
		let o = Y(n).height;
		if (e.remove(), o) return o;
	}
	return t.title_text ? parseFloat(r) || 14 : 0;
}
var Af = {
	initTitle() {
		let { config: e, $el: t } = this;
		e.title_text && (t.title = t.svg.append("g"), io(t.title.append("text").style("text-anchor", Of(e.title_position)).attr("class", K.title), e.title_text, [.3, 1.5]));
	},
	redrawTitle() {
		let e = this, { config: t, state: { current: n }, $el: { title: r } } = e;
		if (r) {
			let i = Of(t.title_position, n.width), a = (t.title_padding.top || 0) + e.getTextRect(e.$el.title, K.title).height;
			r.attr("transform", `translate(${i}, ${a})`);
		}
	},
	getCanvasTitleHeight() {
		return kf(this);
	},
	getTitlePadding() {
		let e = this, { $el: { title: t }, config: n, state: r } = e, i = n.title_padding.top || 0, a = n.title_padding.bottom || 0;
		if (r.isCanvasMode && n.title_text) return i + e.getCanvasTitleHeight() + a;
		if (!t?.node()) return i + a;
		let o = t.node(), s = po(o, "y");
		if (s) {
			let e = so(o);
			return s + e.y + e.height + a;
		}
		return i + e.getTextRect(t, K.title).height + a;
	}
}, jf = /(\r?\n|\t)/g, Mf = /{{(.*)}}/, Nf = {
	initTooltip() {
		let e = this, { config: t, $el: n } = e;
		n.tooltip = F(t.tooltip_contents.bindto), n.tooltip.empty() && (n.tooltip = n.chart.append("div").attr("class", za.tooltipContainer).style("position", "absolute").style("pointer-events", "none").style("display", "none")), e.bindTooltipResizePos();
	},
	initShowTooltip() {
		let e = this, { config: t, $el: n, state: { hasAxis: r, hasRadar: i } } = e;
		if (t.tooltip_init_show) {
			let a = !(r || i);
			e.axis?.isTimeSeries() && p(t.tooltip_init_x) && (t.tooltip_init_x = Fe.call(e, t.tooltip_init_x)), e.api.tooltip.show({ data: { [a ? "index" : "x"]: t.tooltip_init_x } });
			let o = t.tooltip_init_position;
			if (!t.tooltip_contents.bindto && !C(o)) {
				let { top: e = 0, left: t = 50 } = o;
				n.tooltip.style("top", p(e) ? e : `${e}px`).style("left", p(t) ? t : `${t}px`).style("display", null);
			}
		}
	},
	getTooltipHTML(...e) {
		let t = this, { api: n, config: r } = t;
		return _e(f(r.tooltip_contents) ? r.tooltip_contents.bind(n)(...e) : t.getTooltipContent(...e));
	},
	getTooltipContent(e, t, n, r) {
		let i = this, { api: a, config: o, state: s, $el: c } = i, l = o.tooltip_format_title, u = o.tooltip_format_name, p = o.tooltip_format_value, m = f(l) ? l.bind(a) : t, g = f(u) ? u.bind(a) : ((e) => e), _ = f(p) ? p.bind(a) : null, v = (e, t, r, a) => {
			let o = _;
			return o ||= s.hasTreemap || i.isStackNormalized() && (!i.isStackNormalizedPerGroup() || i.isGrouped(r)) ? (e, t) => `${(t * 100).toFixed(2)}%` : n, o(e, t, r, a);
		}, y = o.tooltip_order, b = (e) => i.axis && i.isBubbleZType(e) ? i.getBubbleZData(e.value, "z") : i.getBaseValue(e), x = i.levelColor ? (e) => i.levelColor(e.value) : (e) => r(e), S = o.tooltip_contents, C = S.template, w = i.mapToTargetIds();
		if (y === null && o.data_groups.length) {
			let t = i.orderTargets(i.data.targets).map((e) => e.id).reverse();
			e.sort((e, n) => {
				let r = e ? e.value : null, i = n ? n.value : null;
				return r > 0 && i > 0 && (r = e.id ? t.indexOf(e.id) : null, i = n.id ? t.indexOf(n.id) : null), r - i;
			});
		} else if (/^(asc|desc)$/.test(y)) {
			let t = y === "asc";
			e.sort((e, n) => {
				let r = e ? b(e) : null, i = n ? b(n) : null;
				return t ? r - i : i - r;
			});
		} else f(y) && e.sort(y.bind(a));
		let T = i.getTooltipContentTemplate(C), D = e.length, O, k, A, j, ee;
		for (ee = 0; ee < D; ee++) {
			k = e[ee];
			let t = k && b(k);
			if (!(!k || !(t || t === 0))) {
				if (h(O)) {
					let e = (s.hasAxis || s.hasRadar) && m(k.x);
					O = Pe(T[0], {
						CLASS_TOOLTIP: za.tooltip,
						TITLE: d(e) ? C ? e : `<tr><th colspan="2">${e}</th></tr>` : ""
					});
				}
				if (!k.ratio && c.arcs && (A = ["arc", i.$el.arcs.select(`path.${Ca.arc}-${k.id}`).data()[0]], k.ratio = i.getRatio(...A)), A = [
					k.ratio,
					k.id,
					k.index
				], i.isAreaRangeType(k)) {
					let [e, t] = ["high", "low"].map((e) => v(i.getRangedData(k, e), ...A));
					j = `<b>Mid:</b> ${v(b(k), ...A)} <b>High:</b> ${e} <b>Low:</b> ${t}`;
				} else if (i.isCandlestickType(k)) {
					let [e, t, n, r, a] = [
						"open",
						"high",
						"low",
						"close",
						"volume"
					].map((e) => i.getRangedData(k, e, "candlestick") ? v(i.getRangedData(k, e, "candlestick"), ...A) : void 0);
					j = `<b>Open:</b> ${e} <b>High:</b> ${t} <b>Low:</b> ${n} <b>Close:</b> ${r}${a ? ` <b>Volume:</b> ${a}` : ""}`;
				} else if (i.isBarRangeType(k)) {
					let { value: e, id: t, index: n } = k;
					j = `${v(e, void 0, t, n)}`;
				} else j = v(b(k), ...A);
				if (j !== void 0) {
					if (k.name === null) continue;
					let e = g(k.name ?? k.id, ...A), t = x(k), n = {
						CLASS_TOOLTIP_NAME: za.tooltipName + i.getTargetSelectorSuffix(k.id),
						COLOR: C || !i.patterns ? t : `<svg><rect style="fill:${t}" width="10" height="10"></rect></svg>`,
						NAME: e,
						VALUE: j
					};
					if (C && E(S.text)) {
						let e = w.indexOf(k.id);
						Object.keys(S.text).forEach((t) => {
							n[t] = S.text[t][e];
						});
					}
					O += Pe(T[1], n);
				}
			}
		}
		return `${O}</table>`;
	},
	getTooltipContentTemplate(e) {
		return (e || `<table class="{=CLASS_TOOLTIP}"><tbody>
				{=TITLE}
				{{<tr class="{=CLASS_TOOLTIP_NAME}">
					<td class="name">${this.patterns ? "{=COLOR}" : "<span style=\"background-color:{=COLOR}\"></span>"}{=NAME}</td>
					<td class="value">{=VALUE}</td>
				</tr>}}
			</tbody></table>`).replace(jf, "").split(Mf);
	},
	setTooltipPosition(e, t) {
		let n = this, { config: r, scale: i, state: a, $el: { eventRect: o, tooltip: s, svg: c } } = n, { bindto: l } = r.tooltip_contents, u = r.axis_rotated, d = s?.datum();
		if (!l && d) {
			let l = e ?? d.data, [f, p] = oo(a.event, t ?? o?.node()), m = {
				x: f,
				y: p
			};
			if (a.hasAxis && i.x && d && "x" in d) {
				let e = (e = 0, t, r = "y") => {
					let o = i[t ? n.axis?.getId(t) : r];
					return o ? o(e) + (u ? a.margin.left : a.margin.top) : 0;
				};
				m.xAxis = i.x(d.x) + (r.tooltip_position ? u ? a.margin.top : a.margin.left : 0), m.yAxis = l.length === 1 ? e(l[0].value, l[0].id) : e;
			}
			let { width: h = 0, height: g = 0 } = d, _ = r.tooltip_position?.bind(n.api)(l, h, g, o?.node(), m) ?? (c && mo(c) ? n.getTooltipPositionViewBox.bind(n)(h, g, m) : n.getTooltipPosition.bind(n)(h, g, m));
			["top", "left"].forEach((e) => {
				let t = _[e];
				s.style(e, `${t}px`), e === "left" && !d.xPosInPercent && (d.xPosInPercent = t / a.current.width * 100);
			});
		}
	},
	getTooltipPositionViewBox(e, t, n) {
		let r = this, { $el: { eventRect: i, svg: a }, config: o, state: s } = r, c = o.axis_rotated, l = r.hasArcType() || s.hasFunnel || s.hasTreemap, u = (l ? a : i)?.node() ?? s.event.target, { x: d, y: f } = n;
		s.hasAxis && (d = c ? d : n.xAxis, f = c ? n.xAxis : f);
		let p = uo(u, d, f, !1), m = Y(u), h = uo(u, 20, 0, !1).x, g = p.y, _ = p.x + e / 2 + h;
		return l && (s.hasFunnel || s.hasTreemap || s.hasRadar ? (_ -= e / 2 + h, g += t) : (g += m.height / 2, _ += m.width / 2 - (e - h))), _ + e > m.width && (_ = m.width - e - h), g + t > m.height && (g -= t * 2), {
			top: g,
			left: _
		};
	},
	getTooltipPosition(e, t, n) {
		let r = this, { config: i, scale: a, state: o } = r, { width: s, height: c, current: l, hasFunnel: u, hasRadar: d, hasTreemap: f, isLegendRight: p, inputType: m } = o, h = r.hasType("gauge") && !i.gauge_fullCircle, g = i.axis_rotated, _ = r.hasArcType(), v = o.isCanvasMode ? 0 : r.getSvgLeft(!0), y = v + l.width - r.getCurrentPaddingByDirection("right"), { x: b, y: x } = n;
		if (d) b += b >= s / 2 ? 15 : -(e + 15), x += 15;
		else if (_) {
			if (m !== "touch") {
				let e = r.getTitlePadding?.() ?? 0;
				e && h && i.arc_rangeText_values?.length && (e += 10), b += (s - (p ? r.getLegendWidth() : 0)) / 2, x += (h ? c : c / 2 + t) + e;
			}
		} else if (u || f) x += t;
		else {
			let e = {
				top: r.getCurrentPaddingByDirection("top", !0),
				left: r.getCurrentPaddingByDirection("left", !0)
			};
			g ? (b += v + e.left + 20, x = e.top + n.xAxis + 20, y -= v) : (b = v + e.left + 20 + (a.zoom ? b : n.xAxis), x += e.top - 5);
		}
		if (b + e + 15 > y && (b -= e + (u || f || _ ? 0 : g ? 40 : 38)), x + t > l.height) {
			let e = f ? t + 10 : 30;
			x -= h ? t * 1.5 : t + e;
		}
		let S = {
			top: x,
			left: b
		};
		return S.top < 0 && (S.top = 0), S.left < 0 && (S.left = 0), S;
	},
	showTooltip(e, t) {
		let n = this, { config: r, $el: { tooltip: i } } = n;
		if (!i || !r.tooltip_show) return;
		let a = null, o = 0, s = `${n.data.targets.length}:`, c;
		for (let t = 0; t < e.length; t++) {
			let r = e[t];
			t > 0 && (s += ","), s += `${r?.index}|${r?.id}|${r?.value}`, !c && r && (c = r), r && d(n.getBaseValue(r)) ? (o++, a?.push(r)) : a ||= e.slice(0, t);
		}
		if (o === 0 || !c) return;
		let l = i.datum(), u = a;
		if (!l || l.current !== s) {
			let { index: t, x: a } = c;
			u ||= e.slice(), M(r.tooltip_onshow, n.api, e), i.html(n.getTooltipHTML(e, n.axis ? n.axis.getXAxisTickFormat() : n.categoryName.bind(n), n.getDefaultValueFormat(), n.color)).style("display", null).style("visibility", null), i.datum({
				index: t,
				x: a,
				current: s,
				data: e,
				width: i.property("offsetWidth"),
				height: i.property("offsetHeight")
			}), M(r.tooltip_onshown, n.api, e), n._handleLinkedCharts(!0, t);
		}
		n.setTooltipPosition(u || e, t);
	},
	bindTooltipResizePos() {
		let { resizeFunction: e, state: t, $el: { tooltip: n } } = this;
		e.add(() => {
			if (n.style("display") === "block") {
				let { current: e } = t, { width: r, xPosInPercent: i } = n.datum(), a = e.width / 100 * i, o = e.width - (a + r);
				o < 0 && (a += o), n.style("left", `${a}px`);
			}
		});
	},
	hideTooltip(e) {
		let { api: t, config: n, $el: { tooltip: r } } = this;
		if (r && r.style("display") !== "none" && (!n.tooltip_doNotHide || e)) {
			let e = r.datum().data ?? [];
			M(n.tooltip_onhide, t, e), r.style("display", "none").datum(null), M(n.tooltip_onhidden, t, e);
		}
	},
	_handleLinkedCharts(e, t) {
		let n = this, { charts: r, config: i, state: { event: a } } = n;
		if (a?.isTrusted && i.tooltip_linked && r.length > 1) {
			let a = i.tooltip_linked_name;
			r.filter((e) => e !== n.api).forEach((n) => {
				let { config: r, $el: i, state: s } = n.internal, c = r.tooltip_linked, l = r.tooltip_linked_name, u = o.body.contains(i.chart.node());
				if (c && a === l && u) {
					let r = t !== i.tooltip.data()[0]?.index;
					try {
						e && r && s.isCanvasMode ? n.internal.showCanvasLinkedTooltip?.(t) : n.tooltip[e && r ? "show" : "hide"]({ index: t });
					} catch {}
				}
			});
		}
	},
	updateTooltipOnRedraw(e, t) {
		let n = this, { config: r, $el: { eventRect: i, svg: a, tooltip: s }, state: { event: c, hasAxis: l, hasRadar: u, hasTreemap: d } } = n;
		if (!n.state.isCanvasMode && s?.style("display") === "block" && c) {
			let s = e ?? (u ? a : i)?.node();
			if (l || u) if (n.isMultipleX()) n.selectRectForMultipleXs(s, !1);
			else {
				let e = t ?? n.getDataIndexFromEvent(c);
				t === -1 ? n.api.tooltip.hide() : (n.selectRectForSingle(s, e), n.setExpand(e, null, !0));
			}
			else {
				let { clientX: e, clientY: t } = c;
				setTimeout(() => {
					let r = [e, t].every(Number.isFinite) && o.elementFromPoint(e, t), i = r && F(r).datum();
					if (i) {
						let e = n.hasArcType() ? n.convertToArcData(n.updateAngle(i)) : i?.data;
						d && (r = a.node()), e && n.showTooltip([e], r);
					} else n.api.tooltip.hide();
				}, r.transition_duration);
			}
		}
	}
}, Pf = {
	getTranslate(e, t = 0) {
		let n = this, { config: r, state: i } = n, a = r.axis_rotated, o = 0, s, c;
		if (t && /^(x|y2?)$/.test(e) && (o = n.getAxisSize(e) * t), e === "main") s = y(i.margin.left), c = y(i.margin.top);
		else if (e === "context") s = y(i.margin2.left), c = y(i.margin2.top);
		else if (e === "legend") s = i.margin3.left, c = i.margin3.top;
		else if (e === "x") s = a ? -o : 0, c = a ? 0 : i.height + o;
		else if (e === "y") s = a ? 0 : -o, c = a ? i.height + o : 0;
		else if (e === "y2") s = a ? 0 : i.width + o, c = a ? -o - 1 : 0;
		else if (e === "subX") s = 0, c = a ? 0 : i.height2;
		else if (e === "arc") s = i.arcWidth / 2, c = i.arcHeight / 2, r.arc_rangeText_values?.length && (c += 5 + (n.hasType("gauge") && r.title_text ? 10 : 0));
		else if (e === "polar") s = i.arcWidth / 2, c = i.arcHeight / 2;
		else if (e === "radar") {
			let [e, t] = n.getRadarSize();
			s = i.width / 2 - e, c = i.height / 2 - t;
		}
		return `translate(${s}, ${c})`;
	},
	transformMain(e, t) {
		let n = this, { $el: { main: r }, $T: i } = n, a = t?.axisX ? t.axisX : i(r.select(`.${V.axisX}`), e), o = t?.axisY ? t.axisY : i(r.select(`.${V.axisY}`), e), s = t?.axisY2 ? t.axisY2 : i(r.select(`.${V.axisY2}`), e);
		i(r, e).attr("transform", n.getTranslate("main")), a.attr("transform", n.getTranslate("x")), o.attr("transform", n.getTranslate("y")), s.attr("transform", n.getTranslate("y2")), r.select(`.${Ca.chartArcs}`).attr("transform", n.getTranslate("arc"));
	},
	transformAll(e, t) {
		let n = this, { config: r, state: { hasAxis: i, hasFunnel: a, hasTreemap: o, isCanvasMode: s }, $el: c } = n;
		s || (!a && !o && n.transformMain(e, t), i && r.subchart_show && n.transformContext(e, t), c.legend && n.transformLegend(e));
	}
}, Ff = /* @__PURE__ */ new Set([
	"basis",
	"basis-closed",
	"basis-open",
	"bundle",
	"cardinal",
	"cardinal-closed",
	"cardinal-open",
	"catmull-rom",
	"catmull-rom-closed",
	"catmull-rom-open",
	"linear",
	"linear-closed",
	"monotone-x",
	"monotone-y",
	"natural"
]), If = {
	isValidChartType(t) {
		return !!(t && Object.values(e).indexOf(t) > -1);
	},
	setTargetType(e, t) {
		let n = this, { config: r, state: { withoutFadeIn: i } } = n;
		n.mapToTargetIds(e).forEach((e) => {
			i[e] = t === r.data_types[e], r.data_types[e] = t;
		}), e || (r.data_type = t);
	},
	updateTypesElements() {
		let t = this, { state: { current: n } } = t;
		Object.keys(e).forEach((r) => {
			let i = e[r], a = t.hasType(i, null, !0), o = n.types.indexOf(i);
			o === -1 && a ? n.types.push(i) : o > -1 && !a && n.types.splice(o, 1);
		}), t.setChartElements();
	},
	hasType(e, t, n = !1) {
		let r = this, { config: i, state: { current: a } } = r, o = i.data_types, s = t || r.data.targets;
		return !n && a.types?.indexOf(e) > -1 ? !0 : s?.length ? s.some((t) => {
			let n = o[t.id];
			return n === e || !n && e === "line";
		}) : Object.keys(o).length ? Object.values(o).some((t) => t === e) : i.data_type === e;
	},
	hasTypeOf(e, t, r = []) {
		return e in n && !n[e].filter((e) => r.indexOf(e) === -1).every((e) => !this.hasType(e, t));
	},
	isTypeOf(e, t) {
		let n = p(e) ? e : e.id, r = this.config && (this.config.data_types?.[n] || this.config.data_type);
		return T(t) ? t.indexOf(r) >= 0 : r === t;
	},
	hasPointType() {
		let e = this;
		return e.hasTypeOf("Line") || e.hasType("bubble") || e.hasType("scatter");
	},
	hasArcType(e, t) {
		return this.hasTypeOf("Arc", e, t);
	},
	hasMultiArcGauge() {
		return this.hasType("gauge") && this.config.gauge_type === "multi";
	},
	isLineType(e) {
		let t = p(e) ? e : e.id;
		return !this.config.data_types[t] || this.isTypeOf(t, n.Line);
	},
	isStepType(e) {
		return this.isTypeOf(e, n.Step);
	},
	isSplineType(e) {
		return this.isTypeOf(e, n.Spline);
	},
	isAreaType(e) {
		return this.isTypeOf(e, n.Area);
	},
	isAreaRangeType(e) {
		return this.isTypeOf(e, n.AreaRange);
	},
	isBarType(e) {
		return this.isTypeOf(e, "bar");
	},
	isBubbleType(e) {
		return this.isTypeOf(e, "bubble");
	},
	isCandlestickType(e) {
		return this.isTypeOf(e, "candlestick");
	},
	isScatterType(e) {
		return this.isTypeOf(e, "scatter");
	},
	isTreemapType(e) {
		return this.isTypeOf(e, "treemap");
	},
	isPieType(e) {
		return this.isTypeOf(e, "pie");
	},
	isFunnelType(e) {
		return this.isTypeOf(e, "funnel");
	},
	isGaugeType(e) {
		return this.isTypeOf(e, "gauge");
	},
	isDonutType(e) {
		return this.isTypeOf(e, "donut");
	},
	isPolarType(e) {
		return this.isTypeOf(e, "polar");
	},
	isRadarType(e) {
		return this.isTypeOf(e, "radar");
	},
	isArcType(e) {
		return this.isPieType(e) || this.isDonutType(e) || this.isGaugeType(e) || this.isPolarType(e) || this.isRadarType(e);
	},
	isCirclePoint(e) {
		let { config: t } = this, n = t.point_pattern;
		return e?.tagName === "circle" || t.point_type === "circle" && (!n || T(n) && n.length === 0);
	},
	lineData(e) {
		return this.isLineType(e) ? [e] : [];
	},
	arcData(e) {
		return this.isArcType(e.data) ? [e] : [];
	},
	labelishData(e) {
		return this.isBarType(e) || this.isLineType(e) || this.isScatterType(e) || this.isBubbleType(e) || this.isCandlestickType(e) || this.isFunnelType(e) || this.isRadarType(e) || this.isTreemapType(e) ? e.values.filter((e) => m(e.value) || !!e.value) : [];
	},
	barLineBubbleData(e) {
		return this.isBarType(e) || this.isLineType(e) || this.isBubbleType(e) ? e.values : [];
	},
	isInterpolationType(e) {
		return Ff.has(e);
	}
};
//#endregion
//#region node_modules/d3-shape/src/constant.js
function Lf(e) {
	return function() {
		return e;
	};
}
var Rf = Math.PI;
Rf / 2, 2 * Rf;
//#endregion
//#region node_modules/d3-path/src/path.js
var zf = Math.PI, Bf = 2 * zf, Vf = 1e-6, Hf = Bf - Vf;
function Uf(e) {
	this._ += e[0];
	for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function Wf(e) {
	let t = Math.floor(e);
	if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
	if (t > 15) return Uf;
	let n = 10 ** t;
	return function(e) {
		this._ += e[0];
		for (let t = 1, r = e.length; t < r; ++t) this._ += Math.round(arguments[t] * n) / n + e[t];
	};
}
var Gf = class {
	constructor(e) {
		this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Uf : Wf(e);
	}
	moveTo(e, t) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}`;
	}
	closePath() {
		this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
	}
	lineTo(e, t) {
		this._append`L${this._x1 = +e},${this._y1 = +t}`;
	}
	quadraticCurveTo(e, t, n, r) {
		this._append`Q${+e},${+t},${this._x1 = +n},${this._y1 = +r}`;
	}
	bezierCurveTo(e, t, n, r, i, a) {
		this._append`C${+e},${+t},${+n},${+r},${this._x1 = +i},${this._y1 = +a}`;
	}
	arcTo(e, t, n, r, i) {
		if (e = +e, t = +t, n = +n, r = +r, i = +i, i < 0) throw Error(`negative radius: ${i}`);
		let a = this._x1, o = this._y1, s = n - e, c = r - t, l = a - e, u = o - t, d = l * l + u * u;
		if (this._x1 === null) this._append`M${this._x1 = e},${this._y1 = t}`;
		else if (d > Vf) if (!(Math.abs(u * s - c * l) > Vf) || !i) this._append`L${this._x1 = e},${this._y1 = t}`;
		else {
			let f = n - a, p = r - o, m = s * s + c * c, h = f * f + p * p, g = Math.sqrt(m), _ = Math.sqrt(d), v = i * Math.tan((zf - Math.acos((m + d - h) / (2 * g * _))) / 2), y = v / _, b = v / g;
			Math.abs(y - 1) > Vf && this._append`L${e + y * l},${t + y * u}`, this._append`A${i},${i},0,0,${+(u * f > l * p)},${this._x1 = e + b * s},${this._y1 = t + b * c}`;
		}
	}
	arc(e, t, n, r, i, a) {
		if (e = +e, t = +t, n = +n, a = !!a, n < 0) throw Error(`negative radius: ${n}`);
		let o = n * Math.cos(r), s = n * Math.sin(r), c = e + o, l = t + s, u = 1 ^ a, d = a ? r - i : i - r;
		this._x1 === null ? this._append`M${c},${l}` : (Math.abs(this._x1 - c) > Vf || Math.abs(this._y1 - l) > Vf) && this._append`L${c},${l}`, n && (d < 0 && (d = d % Bf + Bf), d > Hf ? this._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${this._x1 = c},${this._y1 = l}` : d > Vf && this._append`A${n},${n},0,${+(d >= zf)},${u},${this._x1 = e + n * Math.cos(i)},${this._y1 = t + n * Math.sin(i)}`);
	}
	rect(e, t, n, r) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}h${n = +n}v${+r}h${-n}Z`;
	}
	toString() {
		return this._;
	}
};
Gf.prototype;
//#endregion
//#region node_modules/d3-shape/src/path.js
function Kf(e) {
	let t = 3;
	return e.digits = function(n) {
		if (!arguments.length) return t;
		if (n == null) t = null;
		else {
			let e = Math.floor(n);
			if (!(e >= 0)) throw RangeError(`invalid digits: ${n}`);
			t = e;
		}
		return e;
	}, () => new Gf(t);
}
//#endregion
//#region node_modules/d3-shape/src/array.js
var qf = Array.prototype.slice;
function Jf(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/linear.js
function Yf(e) {
	this._context = e;
}
Yf.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1: this._point = 2;
			default: this._context.lineTo(e, t);
		}
	}
};
function Xf(e) {
	return new Yf(e);
}
//#endregion
//#region node_modules/d3-shape/src/point.js
function Zf(e) {
	return e[0];
}
function Qf(e) {
	return e[1];
}
//#endregion
//#region node_modules/d3-shape/src/line.js
function $f(e, t) {
	var n = Lf(!0), r = null, i = Xf, a = null, o = Kf(s);
	e = typeof e == "function" ? e : e === void 0 ? Zf : Lf(e), t = typeof t == "function" ? t : t === void 0 ? Qf : Lf(t);
	function s(s) {
		var c, l = (s = Jf(s)).length, u, d = !1, f;
		for (r ?? (a = i(f = o())), c = 0; c <= l; ++c) !(c < l && n(u = s[c], c, s)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(u, c, s), +t(u, c, s));
		if (f) return a = null, f + "" || null;
	}
	return s.x = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : Lf(+t), s) : e;
	}, s.y = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : Lf(+e), s) : t;
	}, s.defined = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : Lf(!!e), s) : n;
	}, s.curve = function(e) {
		return arguments.length ? (i = e, r != null && (a = i(r)), s) : i;
	}, s.context = function(e) {
		return arguments.length ? (e == null ? r = a = null : a = i(r = e), s) : r;
	}, s;
}
//#endregion
//#region node_modules/d3-shape/src/curve/bump.js
var ep = class {
	constructor(e, t) {
		this._context = e, this._x = t;
	}
	areaStart() {
		this._line = 0;
	}
	areaEnd() {
		this._line = NaN;
	}
	lineStart() {
		this._point = 0;
	}
	lineEnd() {
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	}
	point(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1: this._point = 2;
			default: this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, t, e, t) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + t) / 2, e, this._y0, e, t);
		}
		this._x0 = e, this._y0 = t;
	}
};
function tp(e) {
	return new ep(e, !0);
}
function np(e) {
	return new ep(e, !1);
}
//#endregion
//#region node_modules/d3-shape/src/link.js
function rp(e) {
	return e.source;
}
function ip(e) {
	return e.target;
}
function ap(e) {
	let t = rp, n = ip, r = Zf, i = Qf, a = null, o = null, s = Kf(c);
	function c() {
		let c, l = qf.call(arguments), u = t.apply(this, l), d = n.apply(this, l);
		if (a ?? (o = e(c = s())), o.lineStart(), l[0] = u, o.point(+r.apply(this, l), +i.apply(this, l)), l[0] = d, o.point(+r.apply(this, l), +i.apply(this, l)), o.lineEnd(), c) return o = null, c + "" || null;
	}
	return c.source = function(e) {
		return arguments.length ? (t = e, c) : t;
	}, c.target = function(e) {
		return arguments.length ? (n = e, c) : n;
	}, c.x = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : Lf(+e), c) : r;
	}, c.y = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : Lf(+e), c) : i;
	}, c.context = function(t) {
		return arguments.length ? (t == null ? a = o = null : o = e(a = t), c) : a;
	}, c;
}
function op() {
	return ap(tp);
}
//#endregion
//#region node_modules/d3-shape/src/noop.js
function sp() {}
//#endregion
//#region node_modules/d3-shape/src/curve/basis.js
function cp(e, t, n) {
	e._context.bezierCurveTo((2 * e._x0 + e._x1) / 3, (2 * e._y0 + e._y1) / 3, (e._x0 + 2 * e._x1) / 3, (e._y0 + 2 * e._y1) / 3, (e._x0 + 4 * e._x1 + t) / 6, (e._y0 + 4 * e._y1 + n) / 6);
}
function lp(e) {
	this._context = e;
}
lp.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 3: cp(this, this._x1, this._y1);
			case 2: this._context.lineTo(this._x1, this._y1);
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1:
				this._point = 2;
				break;
			case 2: this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
			default: cp(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function up(e) {
	return new lp(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/basisClosed.js
function dp(e) {
	this._context = e;
}
dp.prototype = {
	areaStart: sp,
	areaEnd: sp,
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x2, this._y2), this._context.closePath();
				break;
			case 2:
				this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
				break;
			case 3: this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
		}
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._x2 = e, this._y2 = t;
				break;
			case 1:
				this._point = 2, this._x3 = e, this._y3 = t;
				break;
			case 2:
				this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
				break;
			default: cp(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function fp(e) {
	return new dp(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/basisOpen.js
function pp(e) {
	this._context = e;
}
pp.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3;
				var n = (this._x0 + 4 * this._x1 + e) / 6, r = (this._y0 + 4 * this._y1 + t) / 6;
				this._line ? this._context.lineTo(n, r) : this._context.moveTo(n, r);
				break;
			case 3: this._point = 4;
			default: cp(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function mp(e) {
	return new pp(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/bundle.js
function hp(e, t) {
	this._basis = new lp(e), this._beta = t;
}
hp.prototype = {
	lineStart: function() {
		this._x = [], this._y = [], this._basis.lineStart();
	},
	lineEnd: function() {
		var e = this._x, t = this._y, n = e.length - 1;
		if (n > 0) for (var r = e[0], i = t[0], a = e[n] - r, o = t[n] - i, s = -1, c; ++s <= n;) c = s / n, this._basis.point(this._beta * e[s] + (1 - this._beta) * (r + c * a), this._beta * t[s] + (1 - this._beta) * (i + c * o));
		this._x = this._y = null, this._basis.lineEnd();
	},
	point: function(e, t) {
		this._x.push(+e), this._y.push(+t);
	}
};
var gp = (function e(t) {
	function n(e) {
		return t === 1 ? new lp(e) : new hp(e, t);
	}
	return n.beta = function(t) {
		return e(+t);
	}, n;
})(.85);
//#endregion
//#region node_modules/d3-shape/src/curve/cardinal.js
function _p(e, t, n) {
	e._context.bezierCurveTo(e._x1 + e._k * (e._x2 - e._x0), e._y1 + e._k * (e._y2 - e._y0), e._x2 + e._k * (e._x1 - t), e._y2 + e._k * (e._y1 - n), e._x2, e._y2);
}
function vp(e, t) {
	this._context = e, this._k = (1 - t) / 6;
}
vp.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x2, this._y2);
				break;
			case 3: _p(this, this._x1, this._y1);
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1:
				this._point = 2, this._x1 = e, this._y1 = t;
				break;
			case 2: this._point = 3;
			default: _p(this, e, t);
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var yp = (function e(t) {
	function n(e) {
		return new vp(e, t);
	}
	return n.tension = function(t) {
		return e(+t);
	}, n;
})(0);
//#endregion
//#region node_modules/d3-shape/src/curve/cardinalClosed.js
function bp(e, t) {
	this._context = e, this._k = (1 - t) / 6;
}
bp.prototype = {
	areaStart: sp,
	areaEnd: sp,
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x3, this._y3), this._context.closePath();
				break;
			case 2:
				this._context.lineTo(this._x3, this._y3), this._context.closePath();
				break;
			case 3: this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
		}
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._x3 = e, this._y3 = t;
				break;
			case 1:
				this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
				break;
			case 2:
				this._point = 3, this._x5 = e, this._y5 = t;
				break;
			default: _p(this, e, t);
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var xp = (function e(t) {
	function n(e) {
		return new bp(e, t);
	}
	return n.tension = function(t) {
		return e(+t);
	}, n;
})(0);
//#endregion
//#region node_modules/d3-shape/src/curve/cardinalOpen.js
function Sp(e, t) {
	this._context = e, this._k = (1 - t) / 6;
}
Sp.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
				break;
			case 3: this._point = 4;
			default: _p(this, e, t);
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var Cp = (function e(t) {
	function n(e) {
		return new Sp(e, t);
	}
	return n.tension = function(t) {
		return e(+t);
	}, n;
})(0);
//#endregion
//#region node_modules/d3-shape/src/curve/catmullRom.js
function wp(e, t, n) {
	var r = e._x1, i = e._y1, a = e._x2, o = e._y2;
	if (e._l01_a > 1e-12) {
		var s = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, c = 3 * e._l01_a * (e._l01_a + e._l12_a);
		r = (r * s - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / c, i = (i * s - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / c;
	}
	if (e._l23_a > 1e-12) {
		var l = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, u = 3 * e._l23_a * (e._l23_a + e._l12_a);
		a = (a * l + e._x1 * e._l23_2a - t * e._l12_2a) / u, o = (o * l + e._y1 * e._l23_2a - n * e._l12_2a) / u;
	}
	e._context.bezierCurveTo(r, i, a, o, e._x2, e._y2);
}
function Tp(e, t) {
	this._context = e, this._alpha = t;
}
Tp.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x2, this._y2);
				break;
			case 3: this.point(this._x2, this._y2);
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		if (e = +e, t = +t, this._point) {
			var n = this._x2 - e, r = this._y2 - t;
			this._l23_a = Math.sqrt(this._l23_2a = (n * n + r * r) ** +this._alpha);
		}
		switch (this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1:
				this._point = 2;
				break;
			case 2: this._point = 3;
			default: wp(this, e, t);
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var Ep = (function e(t) {
	function n(e) {
		return t ? new Tp(e, t) : new vp(e, 0);
	}
	return n.alpha = function(t) {
		return e(+t);
	}, n;
})(.5);
//#endregion
//#region node_modules/d3-shape/src/curve/catmullRomClosed.js
function Dp(e, t) {
	this._context = e, this._alpha = t;
}
Dp.prototype = {
	areaStart: sp,
	areaEnd: sp,
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 1:
				this._context.moveTo(this._x3, this._y3), this._context.closePath();
				break;
			case 2:
				this._context.lineTo(this._x3, this._y3), this._context.closePath();
				break;
			case 3: this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
		}
	},
	point: function(e, t) {
		if (e = +e, t = +t, this._point) {
			var n = this._x2 - e, r = this._y2 - t;
			this._l23_a = Math.sqrt(this._l23_2a = (n * n + r * r) ** +this._alpha);
		}
		switch (this._point) {
			case 0:
				this._point = 1, this._x3 = e, this._y3 = t;
				break;
			case 1:
				this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
				break;
			case 2:
				this._point = 3, this._x5 = e, this._y5 = t;
				break;
			default: wp(this, e, t);
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var Op = (function e(t) {
	function n(e) {
		return t ? new Dp(e, t) : new bp(e, 0);
	}
	return n.alpha = function(t) {
		return e(+t);
	}, n;
})(.5);
//#endregion
//#region node_modules/d3-shape/src/curve/catmullRomOpen.js
function kp(e, t) {
	this._context = e, this._alpha = t;
}
kp.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		if (e = +e, t = +t, this._point) {
			var n = this._x2 - e, r = this._y2 - t;
			this._l23_a = Math.sqrt(this._l23_2a = (n * n + r * r) ** +this._alpha);
		}
		switch (this._point) {
			case 0:
				this._point = 1;
				break;
			case 1:
				this._point = 2;
				break;
			case 2:
				this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
				break;
			case 3: this._point = 4;
			default: wp(this, e, t);
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var Ap = (function e(t) {
	function n(e) {
		return t ? new kp(e, t) : new Sp(e, 0);
	}
	return n.alpha = function(t) {
		return e(+t);
	}, n;
})(.5);
//#endregion
//#region node_modules/d3-shape/src/curve/linearClosed.js
function jp(e) {
	this._context = e;
}
jp.prototype = {
	areaStart: sp,
	areaEnd: sp,
	lineStart: function() {
		this._point = 0;
	},
	lineEnd: function() {
		this._point && this._context.closePath();
	},
	point: function(e, t) {
		e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
	}
};
function Mp(e) {
	return new jp(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/monotone.js
function Np(e) {
	return e < 0 ? -1 : 1;
}
function Pp(e, t, n) {
	var r = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (r || i < 0 && -0), o = (n - e._y1) / (i || r < 0 && -0), s = (a * i + o * r) / (r + i);
	return (Np(a) + Np(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(s)) || 0;
}
function Fp(e, t) {
	var n = e._x1 - e._x0;
	return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Ip(e, t, n) {
	var r = e._x0, i = e._y0, a = e._x1, o = e._y1, s = (a - r) / 3;
	e._context.bezierCurveTo(r + s, i + s * t, a - s, o - s * n, a, o);
}
function Lp(e) {
	this._context = e;
}
Lp.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
	},
	lineEnd: function() {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x1, this._y1);
				break;
			case 3: Ip(this, this._t0, Fp(this, this._t0));
		}
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		var n = NaN;
		if (e = +e, t = +t, e !== this._x1 || t !== this._y1) {
			switch (this._point) {
				case 0:
					this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
					break;
				case 1:
					this._point = 2;
					break;
				case 2:
					this._point = 3, Ip(this, Fp(this, n = Pp(this, e, t)), n);
					break;
				default: Ip(this, this._t0, n = Pp(this, e, t));
			}
			this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
		}
	}
};
function Rp(e) {
	this._context = new zp(e);
}
(Rp.prototype = Object.create(Lp.prototype)).point = function(e, t) {
	Lp.prototype.point.call(this, t, e);
};
function zp(e) {
	this._context = e;
}
zp.prototype = {
	moveTo: function(e, t) {
		this._context.moveTo(t, e);
	},
	closePath: function() {
		this._context.closePath();
	},
	lineTo: function(e, t) {
		this._context.lineTo(t, e);
	},
	bezierCurveTo: function(e, t, n, r, i, a) {
		this._context.bezierCurveTo(t, e, r, n, a, i);
	}
};
function Bp(e) {
	return new Lp(e);
}
function Vp(e) {
	return new Rp(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/natural.js
function Hp(e) {
	this._context = e;
}
Hp.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x = [], this._y = [];
	},
	lineEnd: function() {
		var e = this._x, t = this._y, n = e.length;
		if (n) if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), n === 2) this._context.lineTo(e[1], t[1]);
		else for (var r = Up(e), i = Up(t), a = 0, o = 1; o < n; ++a, ++o) this._context.bezierCurveTo(r[0][a], i[0][a], r[1][a], i[1][a], e[o], t[o]);
		(this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
	},
	point: function(e, t) {
		this._x.push(+e), this._y.push(+t);
	}
};
function Up(e) {
	var t, n = e.length - 1, r, i = Array(n), a = Array(n), o = Array(n);
	for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
	for (i[n - 1] = 2, a[n - 1] = 7, o[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t) r = i[t] / a[t - 1], a[t] -= r, o[t] -= r * o[t - 1];
	for (i[n - 1] = o[n - 1] / a[n - 1], t = n - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
	for (a[n - 1] = (e[n] + i[n - 1]) / 2, t = 0; t < n - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
	return [i, a];
}
function Wp(e) {
	return new Hp(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/step.js
function Gp(e, t) {
	this._context = e, this._t = t;
}
Gp.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._x = this._y = NaN, this._point = 0;
	},
	lineEnd: function() {
		0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1: this._point = 2;
			default: if (this._t <= 0) this._context.lineTo(this._x, t), this._context.lineTo(e, t);
			else {
				var n = this._x * (1 - this._t) + e * this._t;
				this._context.lineTo(n, this._y), this._context.lineTo(n, t);
			}
		}
		this._x = e, this._y = t;
	}
};
function Kp(e) {
	return new Gp(e, .5);
}
function qp(e) {
	return new Gp(e, 0);
}
function Jp(e) {
	return new Gp(e, 1);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/shape/shape.js
var Yp = {
	basis: up,
	"basis-closed": fp,
	"basis-open": mp,
	bundle: gp,
	cardinal: yp,
	"cardinal-closed": xp,
	"cardinal-open": Cp,
	"catmull-rom": Ep,
	"catmull-rom-closed": Op,
	"catmull-rom-open": Ap,
	"monotone-x": Bp,
	"monotone-y": Vp,
	natural: Wp,
	"linear-closed": Mp,
	linear: Xf,
	step: Kp,
	"step-after": Jp,
	"step-before": qp
};
function Xp(e, t) {
	return e.isLineType(t) || e.isScatterType?.(t) || e.isBubbleType?.(t);
}
function Zp(e) {
	return (t) => Xp(e, t);
}
function Qp(e, t) {
	return e.isCandlestickType?.(t) ? e.getCandlestickData?.(t)?.close : e.getBaseValue(t);
}
function $p(e) {
	let t = this, n;
	if (Xp(t, e)) {
		let e = Zp(t);
		n = t.generateGetLinePoints(t.getShapeIndices(e), !1, e);
	} else t.isBarType(e) ? n = t.generateGetBarPoints(t.getShapeIndices(t.isBarType)) : t.isCandlestickType?.(e) && (n = t.generateGetCandlestickPoints?.(t.getShapeIndices(t.isCandlestickType)));
	return n;
}
function em(e, t, n) {
	return this.config[t] ? this.getGradienColortUrl(e.id) : n(e);
}
function tm(e, t) {
	let n = this, { $el: r } = n, { type: i, elKey: a, containerClass: o, itemClass: s, initFn: c, withFocus: l = !0, withStyles: u = !0 } = t;
	r[a] || c.call(n);
	let d = n.getChartClass(i), f = l ? n.classFocus.bind(n) : () => "", p = r.main.select(`.${o}`).selectAll(`.${s}`).data(n.filterNullish(e)).attr("class", (e) => d(e) + f(e)).enter().append("g").attr("class", d);
	return u && p.style("opacity", "0").style("pointer-events", n.getStylePropValue("none")), p;
}
var nm = {
	getDrawShape() {
		let e = this, t = e.config.axis_rotated, { hasRadar: n, hasTreemap: r } = e.state, i = {
			type: {},
			indices: {},
			pos: {}
		};
		if (!r && [
			"bar",
			"candlestick",
			"line",
			"area"
		].forEach((t) => {
			let n = N(t);
			if (e.hasType(t) || e.hasTypeOf(n) || t === "line" && (e.hasType("bubble") || e.hasType("scatter"))) {
				let r = e.getShapeIndices(e[`is${n}Type`]), a = e[`generateDraw${n}`];
				i.indices[t] = r, i.type[t] = a ? a.bind(e)(r, !1) : void 0;
			}
		}), !e.hasArcType() || n || r) {
			let a, o, s, c;
			r || (a = n ? e.radarCircleX : t ? e.circleY : e.circleX, o = n ? e.radarCircleY : t ? e.circleX : e.circleY), r && e.state.isCanvasMode ? s = c = function() {} : (s = e.generateXYForText(i.indices, !0), c = e.generateXYForText(i.indices, !1)), i.pos = {
				xForText: s,
				yForText: c,
				cx: (a || function() {}).bind(e),
				cy: (o || function() {}).bind(e)
			};
		}
		return i;
	},
	getShapeIndices(e) {
		let t = this, { config: n } = t, r = n.data_xs, i = w(r), a = {}, o = i ? {} : 0;
		return i && Ee(Object.keys(r).map((e) => r[e])).forEach((e) => {
			o[e] = 0, a[e] = {};
		}), t.filterTargetsToShow(t.data.targets.filter(e, t)).forEach((e) => {
			let t = e.id in r ? r[e.id] : "", i = t ? a[t] : a;
			for (let r = 0, a; a = n.data_groups[r]; r++) if (!(a.indexOf(e.id) < 0)) for (let n = 0, r; r = a[n]; n++) {
				if (r in i) {
					i[e.id] = i[r];
					break;
				}
				e.id !== r && t && (i[r] = i[e.id] ?? o[t]);
			}
			h(i[e.id]) && (i[e.id] = t ? o[t]++ : o++, i.__max__ = (t ? o[t] : o) - 1);
		}), a;
	},
	getIndices(e, t, n) {
		let r = this, { data_xs: i, bar_indices_removeNull: a } = r.config, { id: o, index: s } = t;
		if (r.isBarType(o) && a) {
			let e = {};
			return r.getAllValuesOnIndex(s, !0).forEach((t, n) => {
				e[t.id] = n, e.__max__ = n;
			}), e;
		}
		return w(i) ? e[i[o]] : e;
	},
	getIndicesMax(e) {
		if (!w(this.config.data_xs)) return e.__max__;
		let t = 0;
		for (let n in e) t += e[n].__max__ || 0;
		return t;
	},
	getShapeX(e, t, n) {
		let r = this, { config: i, scale: a } = r, o = n ? a.subX : a.zoom || a.x, s = i.bar_overlap, c = i.bar_padding, l = (e, t) => e + t, u = x(e) && (e._$total.length ? e._$total.reduce(l) / 2 : 0), d = [];
		if (u && x(e) && e._$total.length) {
			let t = 0;
			for (let n of e._$total) t += n, d.push(t);
		}
		return (n) => {
			let i = r.getIndices(t, n, "getShapeX"), a = n.id in i ? i[n.id] : 0, f = (i.__max__ || 0) + 1, p = 0;
			if (w(n.x)) {
				let t = o(n.x, !0);
				if (u) {
					let r = e[n.id] || e._$width;
					p = s ? t - r / 2 : t - r + (d[a] ?? e._$total.slice(0, a + 1).reduce(l)) - u;
				} else p = t - (m(e) ? e : e._$width) * (f / 2 - (s ? 1 : a));
			}
			return e && p && f > 1 && c && (a && (p += c * a), f > 2 ? p -= (f - 1) * c / 2 : f === 2 && (p -= c / 2)), p;
		};
	},
	getShapeY(e) {
		let t = this, n = t.isStackNormalized();
		return (r) => {
			let { value: i } = r;
			return m(r) ? i = r : t.isAreaRangeType(r) ? i = t.getBaseValue(r, "mid") : n ? i = t.getRatio("index", r, !0) : t.isBubbleZType(r) ? i = t.getBubbleZData(r.value, "y") : t.isBarRangeType(r) && (i = i[1]), t.getYScaleById(r.id, e)(i);
		};
	},
	getShapeYMin(e) {
		let t = this, n = t.axis.getId(e), [r] = t.scale[n].domain(), i = t.config[`axis_${n}_inverted`];
		return !t.isGrouped(e) && !i && r > 0 ? r : 0;
	},
	getShapeOffsetData(e) {
		let t = this, n = t.orderTargets(t.filterTargetsToShow(t.data.targets.filter(e, t))), r = t.state.dataGeneration, i = n.map((e) => e.id).join("_"), a = `${J.shapeOffset}_${i}`, o = t.cache.get(a);
		if (o?.generation === r) return o;
		let s = t.isStackNormalized(), c = n.map((e) => {
			let n = e.values, r = {};
			t.isStepType(e) && (n = t.convertValuesToStep(n));
			let i = n.reduce((e, n) => {
				let i = Number(n.x), a = Qp(t, n);
				return e[i] = n, r[i] = s ? t.getRatio("index", n, !0) : a, e;
			}, {});
			return {
				id: e.id,
				rowValues: n,
				rowValueMapByXValue: i,
				values: r
			};
		}), l = {
			generation: r,
			indexMapByTargetId: n.reduce((e, { id: t }, n) => (e[t] = n, e), {}),
			shapeOffsetTargets: c
		};
		return t.cache.add(a, l), l;
	},
	getShapeOffset(e, t, n) {
		let r = this, { shapeOffsetTargets: i, indexMapByTargetId: a } = r.getShapeOffsetData(e), o = r.config.data_groupsZeroAs, s = null;
		if (!r.config.bar_indices_removeNull) {
			s = /* @__PURE__ */ new Map();
			for (let e of i) {
				let n = r.getIndices(t, {
					id: e.id,
					index: 0
				});
				s.set(e.id, i.filter((t) => t.id !== e.id && n[t.id] === n[e.id]));
			}
		}
		return (e, c) => {
			let { id: l, value: u, x: d } = e, f = Qp(r, e), p = r.getIndices(t, e), h = r.getYScaleById(l, n);
			if (r.isBarRangeType(e)) return h(u[0]);
			let g = Number(d), _ = h(o === "zero" ? 0 : r.getShapeYMin(l)), v = _, y = s?.get(l) ?? i.filter((e) => e.id !== l && p[e.id] === p[l]);
			for (let e of y) {
				let { id: t, rowValueMapByXValue: n, rowValues: i, values: s } = e;
				if (a[t] < a[l]) {
					let e = s[g], t = i[c];
					(!t || Number(t.x) !== g) && (t = n[g]);
					let a = t && Qp(r, t);
					m(a) && m(f) && a * f >= 0 && m(e) && (f !== 0 || o === "positive" && e > 0 || o === "negative" && e < 0) && (v += h(e) - _);
				}
			}
			return v;
		};
	},
	generateGetLinePoints(e, t, n) {
		let r = this, { config: i } = r, a = r.getShapeX(0, e, t), o = r.getShapeY(t), s = r.getShapeOffset(n || r.isLineType, e, t), c = r.getYScaleById.bind(r);
		return (e, n) => {
			let l = c.call(r, e.id, t)(r.getShapeYMin(e.id)), u = s(e, n) || l, d = a(e), f = o(e);
			i.axis_rotated && (e.value > 0 && f < l || e.value < 0 && l < f) && (f = l);
			let p = [d, f - (l - u)];
			return [
				p,
				p,
				p,
				p
			];
		};
	},
	generateGetAreaPoints(e, t) {
		let n = this, { config: r } = n, i = n.getShapeX(0, e, t), a = n.getShapeY(!!t), o = n.getShapeOffset(n.isAreaType, e, t), s = n.getYScaleById.bind(n), c = /* @__PURE__ */ new Map();
		return function(e, l) {
			let u = c.get(e.id);
			u === void 0 && (u = s.call(n, e.id, t)(n.getShapeYMin(e.id)), c.set(e.id, u));
			let d = o(e, l) || u, f = i(e), p = e.value, m = a(e);
			return r.axis_rotated && (p > 0 && m < u || p < 0 && u < m) && (m = u), [
				[f, d],
				[f, m - (u - d)],
				[f, m - (u - d)],
				[f, d]
			];
		};
	},
	generateGetBarPoints(e, t) {
		let n = this, { config: r } = n, i = t ? n.axis.subX : n.axis.x, a = n.getIndicesMax(e) + 1, o = n.getBarW("bar", i, a), s = n.getShapeX(o, e, !!t), c = n.getShapeY(!!t), l = n.getShapeOffset(n.isBarType, e, !!t), u = n.getYScaleById.bind(n), d = /* @__PURE__ */ new Map();
		return (e, i) => {
			let { id: a } = e, f = d.get(a);
			f || (f = {
				y0: u.call(n, a, t)(n.getShapeYMin(a)),
				isInverted: r[`axis_${n.axis.getId(a)}_inverted`]
			}, d.set(a, f));
			let { y0: p, isInverted: h } = f, g = l(e, i) || p, _ = m(o) ? o : o[e.id] || o._$width, v = e.value, y = s(e), b = c(e);
			r.axis_rotated && !h && (v > 0 && b < p || v < 0 && p < b) && (b = p), n.isBarRangeType(e) || (b -= p - g);
			let x = y + _;
			return [
				[y, g],
				[y, b],
				[x, b],
				[x, g]
			];
		};
	},
	circleY(e, t) {
		let n = this, r = e.id, i;
		return n.isGrouped(r) && (i = $p.bind(n)(e)), i ? i(e, t)[0][1] : n.getYScaleById(r)(n.getBaseValue(e));
	},
	circleX(e) {
		return this.xx(e);
	},
	updateCircleY(e = !1) {
		let t = this, n = Zp(t), r = t.generateGetLinePoints(t.getShapeIndices(n), e, n);
		return (n, i) => {
			let a = n.id;
			return t.isGrouped(a) && Xp(t, n) ? r(n, i)[0][1] : t.getYScaleById(a, e)(t.getBaseValue(n));
		};
	},
	pointR(e) {
		let t = this, { config: n } = t, r = n.point_r, i = r;
		return t.isBubbleType(e) ? i = t.getBubbleR(e) : f(r) && (i = r.bind(t.api)(e)), e.r = i, i;
	},
	pointExpandedR(e) {
		let t = this, { config: n } = t, r = t.isBubbleType(e) ? 1.15 : 1.75;
		return n.point_focus_expand_enabled ? n.point_focus_expand_r || t.pointR(e) * r : t.pointR(e);
	},
	pointSelectR(e) {
		let t = this, n = t.config.point_select_r;
		return f(n) ? n(e) : n || t.pointR(e) * 4;
	},
	isPointFocusOnly() {
		let e = this;
		return e.config.point_focus_only && !e.hasType("bubble") && !e.hasType("scatter") && !e.hasArcType(null, ["radar"]);
	},
	getPointSensitivity(e) {
		let t = this, n = t.config.point_sensitivity;
		if (e) f(n) ? n = n.call(t.api, e) : n === "radius" && (n = e.r);
		else return n;
		return n;
	},
	getBarW(e, t, n) {
		let r = this, { config: i, org: a, scale: o, state: s } = r, c = r.getMaxDataCount(), l = e === "bar" && i.data_groups?.length, u = `${e}_width`, { k: d } = r.getZoomTransform?.() ?? { k: 1 }, p = [i.axis_x_min ?? a.xDomain[0], i.axis_x_max ?? a.xDomain[1]].map((e) => r.axis.isTimeSeries() ? Fe.call(r, e) : Number(e)), h = t.tickInterval(c);
		if (o.zoom && !r.axis.isCategorized() && d > 1) {
			let e = p.every((e, t) => e === a.xDomain[t]);
			h = a.xDomain.map((t, n) => {
				let r = e ? t : t - Math.abs(p[n]);
				return o.zoom(r);
			}).reduce((e, t) => Math.abs(e) + t) / c;
		}
		let g = (e) => {
			let t = e ? i[u][e] : i[u], a = e ? t.ratio : i[`${u}_ratio`], o = e ? t.max : i[`${u}_max`], l = m(t) ? t : f(t) ? t.call(r, s.width, n, c) : n ? h * a / n : 0;
			return o && l > o ? o : l;
		}, _ = g();
		return !l && x(i[u]) && (_ = {
			_$width: _,
			_$total: []
		}, r.getTargetsToShow().forEach((e) => {
			i[u][e.id] && (_[e.id] = g(e.id), _._$total.push(_[e.id] || _._$width));
		})), _;
	},
	getShapeByIndex(e, t, n) {
		let r = this, { $el: i } = r, a = d(t) ? `-${t}` : "", o = i[e];
		return o = o && !o.empty() ? o.filter((e) => !n || e.id === n).filter((e) => !d(t) || e.index === t) : (n ? i.main.selectAll(`.${q[`${e}s`]}${r.getTargetSelectorSuffix(n)}`) : i.main).selectAll(`.${q[e]}${a}`), o;
	},
	isWithinShape(e, t) {
		let n = this, r = F(e), i;
		return n.isTargetToShow(t.id) ? n.hasValidPointType?.(e.nodeName) ? i = n.isStepType(t) ? n.isWithinStep(e, n.getYScaleById(t.id)(n.getBaseValue(t))) : n.isWithinCircle(e, n.isBubbleType(t) ? n.pointSelectR(t) * 1.5 : 0) : e.nodeName === "path" && (i = !r.classed(q.bar) || n.isWithinBar(e)) : i = !1, i;
	},
	getInterpolate(e) {
		return Yp[this.getInterpolateType(e)];
	},
	getCurve(e) {
		let t = this;
		return t.config.axis_rotated && t.isStepType(e) ? (n) => {
			let r = t.getInterpolate(e)(n);
			return r.orgPoint = r.point, r.pointRotated = function(e, t) {
				this._point === 1 && (this._point = 2);
				let n = this._y * (1 - this._t) + t * this._t;
				this._context.lineTo(this._x, n), this._context.lineTo(e, n), this._x = e, this._y = t;
			}, r.point = function(e, t) {
				this._point === 0 ? this.orgPoint(e, t) : this.pointRotated(e, t);
			}, r;
		} : t.getInterpolate(e);
	},
	getInterpolateType(e) {
		let t = this, { config: n } = t, r = n.spline_interpolation_type, i = t.isInterpolationType(r) ? r : "cardinal";
		return t.isSplineType(e) ? i : t.isStepType(e) ? n.line_step_type : "linear";
	},
	isWithinBar(e) {
		let t = oo(this.state.event, e), [n, r, i] = ao(e), a = Math.min(n.x, r.x), o = Math.min(n.y, r.y), s = this.config.bar_sensitivity, c = Math.abs(i.x - r.x), l = Math.abs(n.y - r.y), u = a - s, d = a + c + s, f = o + l + s, p = o - s;
		return u < t[0] && t[0] < d && p < t[1] && t[1] < f;
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/ChartInternal.js
function rm(e) {
	return e.hasArcType() ? "arc charts" : e.hasType("funnel") ? "funnel chart" : null;
}
function im(e) {
	let { config: t } = e, n = t.render_mode === "canvas" ? rm(e) : null;
	n && (a.console?.warn?.(`[billboard.js] render.mode='canvas' is ignored for ${n}; falling back to SVG.`), t.render_mode = "svg");
}
var am = class {
	api;
	config;
	cache;
	$el;
	state;
	charts;
	data = {
		xs: {},
		targets: []
	};
	axis;
	scale = {
		x: null,
		y: null,
		y2: null,
		subX: null,
		subY: null,
		subY2: null,
		zoom: null
	};
	org = {
		xScale: null,
		xDomain: null
	};
	color;
	patterns;
	levelColor;
	point;
	brush;
	format = {
		extraLineClasses: null,
		xAxisTick: null,
		dataTime: null,
		defaultAxisTime: null,
		axisTime: null
	};
	constructor(e) {
		let t = this;
		t.api = e, t.config = new Xa(), t.cache = new $a();
		let n = new Qa();
		t.$el = n.getStore("element"), t.state = n.getStore("state"), t.$T = t.$T.bind(t);
	}
	$T(e, t, n) {
		let { config: r, state: i } = this, a = r.transition_duration, o = r.subchart_show, s = e;
		return s &&= ("tagName" in s && (s = F(s)), (t !== !1 && a || t) && (!i.zooming || i.dragging) && !i.resizing && i.rendered && !o ? s.transition(n).duration(a) : s), s;
	}
	beforeInit() {
		let e = this;
		e.callPluginHook("$beforeInit"), M(e.config.onbeforeinit, e.api);
	}
	afterInit() {
		let e = this;
		e.callPluginHook("$afterInit"), M(e.config.onafterinit, e.api);
	}
	init() {
		let e = this, { config: t, state: n, $el: r } = e, { boost_useCssRule: i, bindto: a } = t;
		Ve(e), im(e);
		let s = e.hasArcType();
		if (n.hasRadar = !n.hasAxis && e.hasType("radar"), n.hasFunnel = !n.hasAxis && e.hasType("funnel"), n.hasTreemap = !n.hasAxis && e.hasType("treemap"), n.hasAxis = !s && !n.hasFunnel && !n.hasTreemap, n.datetimeId = `bb-${+/* @__PURE__ */ new Date() * Me()}`, i) {
			let e = o.createElement("style");
			e.type = "text/css", o.head.appendChild(e), n.style = {
				rootSelector: `.${n.datetimeId}`,
				sheet: e.sheet
			}, r.style = e;
		}
		let c = {
			element: a,
			classname: "bb"
		};
		E(a) && (c.element = a.element || "#chart", c.classname = a.classname || c.classname), r.chart = f(c.element.node) ? a.element : F(c.element || []), r.chart.empty() && (r.chart = F(o.body.appendChild(o.createElement("div")))), r.chart.html("").classed(c.classname, !0).classed(n.datetimeId, i).style("position", "relative"), e.initParams(), e.initToRender();
	}
	initToRender(e) {
		let t = this, { config: n, state: r, $el: { chart: i } } = t, o = () => ho(i, {
			display: "none",
			visibility: "hidden"
		}), s = n.render.lazy === !1 ? !1 : n.render.lazy || o(), c = a.MutationObserver;
		s && c && n.render.observe !== !1 && !e && new c((e, n) => {
			o() || (n.disconnect(), !r.rendered && t.initToRender(!0));
		}).observe(i.node(), {
			attributes: !0,
			attributeFilter: ["class", "style"]
		}), (!s || e) && t.convertData(n, (e) => {
			t.initWithData(e), t.afterInit();
		});
	}
	initParams() {
		let e = this, { config: t, format: n, state: r } = e;
		if (t.render_mode === "canvas" && e.prepareCanvasConfig?.(), e.color = e.generateColor(), e.levelColor = e.generateLevelColor(), t.padding === !1 && (t.axis_x_show = !1, t.axis_y_show = !1, t.axis_y2_show = !1, t.subchart_show = !1), t.render_mode !== "canvas" && (e.hasPointType() || e.hasLegendDefsPoint?.()) && (e.point = e.generatePoint()), r.hasAxis) {
			e.initClip(), n.extraLineClasses = e.generateExtraLineClass(), n.dataTime = t.data_xLocaltime ? ya : xa, n.axisTime = t.axis_x_localtime ? va : ba;
			let r = t.zoom_enabled && t.zoom_type === "drag";
			n.defaultAxisTime = (t) => {
				let { x: i, zoom: a } = e.scale, o = r ? a : a && i.orgDomain().toString() !== a.domain().toString(), s = t.getMilliseconds() && ".%L" || t.getSeconds() && ".:%S" || t.getMinutes() && "%I:%M" || t.getHours() && "%I %p" || t.getDate() !== 1 && "%b %d" || o && t.getDate() === 1 && "%b'%y" || t.getMonth() && "%-m/%-d" || "%Y";
				return n.axisTime(s)(t);
			};
		}
		let { legend_position: i, legend_inset_anchor: a, axis_rotated: o } = t;
		r.isLegendRight = i === "right", r.isLegendInset = i === "inset", r.isLegendTop = a === "top-left" || a === "top-right", r.isLegendLeft = a === "top-left" || a === "bottom-left", r.rotatedPadding.top = e.getResettedPadding(r.rotatedPadding.top), r.rotatedPadding.right = o && !t.axis_x_show ? 0 : 30, r.inputType = _o(t.interaction_inputType_mouse, t.interaction_inputType_touch);
	}
	initWithData(e) {
		let t = this, { config: n, scale: r, state: i, $el: a, org: o } = t, { hasAxis: s, hasFunnel: c, hasTreemap: l } = i, u = n.interaction_enabled, d = t.hasType("polar"), p = n.data_labels_backgroundColors;
		if (s && (t.axis = t.getAxisInstance(), n.zoom_enabled && t.initZoom()), t.data.xs = {}, t.data.targets = t.convertDataToTargets(e), n.data_filter && (t.data.targets = t.data.targets.filter(n.data_filter.bind(t.api))), n.data_hide && t.addHiddenTargetIds(n.data_hide === !0 ? t.mapToIds(t.data.targets) : n.data_hide), n.legend_hide && t.addHiddenLegendIds(n.legend_hide === !0 ? t.mapToIds(t.data.targets) : n.legend_hide), t.updateSizes(), t.updateScales(!0), s) {
			let { x: e, y: i, y2: a, subX: s, subY: c, subY2: l } = r;
			e && (e.domain(ke(t.getXDomain(t.data.targets), !n.axis_x_inverted)), s.domain(e.domain()), o.xDomain = e.domain()), i && (i.domain(t.getYDomain(t.data.targets, "y")), c.domain(i.domain())), a && (a.domain(t.getYDomain(t.data.targets, "y2")), l && l.domain(a.domain()));
		}
		if (n.render_mode === "canvas") {
			if (!t.initCanvas) throw Error("[billboard.js] Please import and call canvas() to use render.mode='canvas'.");
			if (t.bindResize(), t.initCanvas(), n.tooltip_show && t.initTooltip(), t.callPluginHook("$init"), M(n.oninit, t.api), t.redraw({
				withTransition: !1,
				withTransform: !0,
				withUpdateXDomain: !0,
				withUpdateOrgXDomain: !0,
				withTransitionForAxis: !1,
				initializing: !0
			}), n.data_onmin || n.data_onmax) {
				let e = t.getMinMaxData();
				M(n.data_onmin, t.api, e.min), M(n.data_onmax, t.api, e.max);
			}
			i.rendered = !0;
			return;
		}
		if (a.svg = a.chart.append("svg").style("overflow", "hidden").style("display", "block"), u && i.inputType) {
			let e = i.inputType === "touch", { onclick: r, onover: o, onout: s } = n, c = n.interaction_inputType_touch?.preventDefault, l = _(c) && c || !1, u = e ? { passive: !l && (!isNaN(c) && c || null) === null } : void 0;
			a.svg.on("click", r?.bind(t.api) || null).on(e ? "touchstart" : "mouseenter", o?.bind(t.api) || null, u).on(e ? "touchend" : "mouseleave", s?.bind(t.api) || null);
		}
		n.svg_classname && a.svg.attr("class", n.svg_classname);
		let m = f(n.color_tiles) && t.patterns;
		(s || m || d || l || p || t.hasLegendDefsPoint?.()) && (a.defs = a.svg.append("defs"), s && [
			"id",
			"idXAxis",
			"idYAxis",
			"idGrid"
		].forEach((e) => {
			t.appendClip(a.defs, i.clip[e]);
		}), t.generateTextBGColorFilter(p), m && t.patterns.forEach((e) => a.defs.append(() => e.node))), t.updateSvgSize(), t.bindResize();
		let h = a.svg.append("g").classed(B.main, !0).attr("transform", c || l ? null : t.getTranslate("main"));
		if (a.main = h, n.subchart_show && t.initSubchart(), n.tooltip_show && t.initTooltip(), n.title_text && t.initTitle(), !l && n.legend_show && t.initLegend(), n.data_empty_label_text && h.append("text").attr("class", `${K.text} ${B.empty}`).attr("text-anchor", "middle").attr("dominant-baseline", "middle"), s && (n.regions.length && t.initRegion?.(), !n.clipPath && t.axis.init()), h.append("g").classed(B.chart, !0).attr("clip-path", s ? i.clip.path : null), t.callPluginHook("$init"), t.initChartElements(), s && (u && t.initEventRect?.(), t.initGrid?.(), n.clipPath && t.axis?.init()), t.updateTargets(t.data.targets), t.updateDimension(), M(n.oninit, t.api), t.setBackground(), t.redraw({
			withTransition: !1,
			withTransform: !0,
			withUpdateXDomain: !0,
			withUpdateOrgXDomain: !0,
			withTransitionForAxis: !1,
			initializing: !0
		}), n.data_onmin || n.data_onmax) {
			let e = t.getMinMaxData();
			M(n.data_onmin, t.api, e.min), M(n.data_onmax, t.api, e.max);
		}
		n.tooltip_show && t.initShowTooltip(), i.rendered = !0;
	}
	initChartElements() {
		let e = this, { hasAxis: t, hasRadar: n, hasTreemap: r } = e.state, i = [];
		if (t) {
			let t = [
				"bar",
				"bubble",
				"candlestick",
				"line"
			];
			e.config.bar_front && t.push(t.shift());
			for (let n of t) {
				let t = N(n);
				(n === "line" && e.hasTypeOf(t) || e.hasType(n)) && i.push(t);
			}
		} else if (r) i.push("Treemap");
		else if (e.hasType("funnel")) i.push("Funnel");
		else {
			let t = e.hasType("polar"), r = e.hasType("gauge");
			n || i.push("Arc", "Pie"), r ? i.push("Gauge") : n ? i.push("Radar") : t && i.push("Polar");
		}
		for (let t of i) e[`init${t}`]();
		w(e.config.data_labels) && !e.hasArcType(null, ["radar"]) && e.initText();
	}
	setChartElements() {
		let e = this, { $el: { chart: t, svg: n, defs: r, main: i, tooltip: a, legend: o, title: s, canvas: c, eventOverlay: l, grid: u, needle: d, arcs: f, circle: p, bar: m, candlestick: h, line: g, area: _, text: v } } = e;
		e.api.$ = {
			chart: t,
			svg: n,
			canvas: c,
			eventOverlay: l,
			defs: r,
			main: i,
			tooltip: a,
			legend: o,
			title: s,
			grid: u,
			arc: f,
			circles: p,
			bar: { bars: m },
			candlestick: h,
			line: {
				lines: g,
				areas: _
			},
			needle: d,
			text: { texts: v }
		};
	}
	setBackground() {
		let { config: { background: e }, state: t, $el: { svg: n } } = this;
		if (w(e)) {
			let r = n.select("g").insert(e.imgUrl ? "image" : "rect", ":first-child");
			e.imgUrl ? r.attr("href", e.imgUrl) : e.color && r.style("fill", e.color).attr("clip-path", t.clip.path), r.attr("class", e.class || null).attr("width", "100%").attr("height", "100%");
		}
	}
	updateTargets(e) {
		let t = this, { hasAxis: n, hasFunnel: r, hasRadar: i, hasTreemap: a } = t.state, o = (n) => t[`updateTargetsFor${n}`](e.filter(t[`is${n}Type`].bind(t)));
		if (t.updateTargetsForText(e), n) {
			for (let e of [
				"bar",
				"candlestick",
				"line"
			]) {
				let n = N(e);
				(e === "line" && t.hasTypeOf(n) || t.hasType(e)) && o(n);
			}
			t.updateTargetsForSubchart?.(e);
		} else if (t.hasArcType(e)) {
			let e = "Arc";
			i ? e = "Radar" : t.hasType("polar") && (e = "Polar"), o(e);
		} else r ? o("Funnel") : a && o("Treemap");
		let s = t.hasType("bubble") || t.hasType("scatter");
		s && t.updateTargetForCircle?.(), t.filterTargetsToShowAtInit(s);
	}
	filterTargetsToShowAtInit(e = !1) {
		let t = this, { $el: { svg: n }, $T: r } = t, i = `.${B.target}`;
		e && (i += `, .${Ea.chartCircles} > .${Ea.circles}`), r(n.selectAll(i).filter((e) => t.isTargetToShow(e.id))).style("opacity", null);
	}
	getWithOption(e) {
		let t = {
			Dimension: !0,
			EventRect: !0,
			Legend: !1,
			Subchart: !0,
			Transform: !1,
			Transition: !0,
			TrimXDomain: !0,
			UpdateXAxis: "UpdateXDomain",
			UpdateXDomain: !1,
			UpdateOrgXDomain: !1,
			TransitionForExit: "Transition",
			TransitionForAxis: "Transition",
			Y: !0
		};
		for (let [n, r] of Object.entries(t)) {
			let i = p(r) ? t[r] : r;
			t[n] = ye(e, `with${n}`, i);
		}
		return t;
	}
	initialOpacity(e) {
		let t = this, { withoutFadeIn: n } = t.state;
		return t.getBaseValue(e) !== null && n[e.id] ? null : "0";
	}
	bindResize() {
		let e = this, { $el: t, config: n, state: r } = e, i = xo(n.resize_timer), { resize_auto: o } = n, s = [];
		s.push(() => M(n.onresize, e.api)), /^(true|parent)$/.test(o) && s.push(() => {
			let t = r.current.width, i = r.current.height;
			e.setContainerSize(), (t !== r.current.width || i !== r.current.height) && (r.resizing = !0, n.legend_show && (e.updateSizes(), r.isCanvasMode ? e.updateHtmlLegend?.() : e.updateLegend()), e.api.flush(!1));
		}), s.push(() => {
			M(n.onresized, e.api), r.resizing = !1;
		}), s.forEach((e) => i.add(e)), e.resizeFunction = i, o === "parent" && a.ResizeObserver ? (e.resizeFunction.resizeObserver = new a.ResizeObserver(e.resizeFunction.bind(e))).observe(t.chart.node().parentNode) : (o === "parent" && a.console?.warn?.("[billboard.js] resize.auto='parent' requires ResizeObserver; falling back to window resize."), a.addEventListener("resize", e.resizeFunction));
	}
	callPluginHook(e, ...t) {
		this.config.plugins.forEach((n) => {
			e === "$beforeInit" && (n.$$ = this, this.api.plugins.push(n)), n[e](...t);
		});
	}
};
Te(am.prototype, [
	Jo,
	Zo,
	$o,
	bs,
	Ss,
	Xl,
	Xd,
	ys,
	Qd,
	ff,
	pf,
	hf,
	nm,
	gf,
	_f,
	Df,
	Af,
	Nf,
	Pf,
	If
]);
//#endregion
//#region node_modules/billboard.js/dist-esm/config/config.js
function om(e) {
	let t = this.config, n, r, i, a = () => {
		let e = r.shift();
		if (e && n && x(n) && e in n) return n = n[e], a();
		if (!e) return n;
	};
	Object.keys(t).forEach((o) => {
		n = e, r = o.split("_"), i = a(), g(i) && (t[o] = i);
	}), this.api && (this.state.orgConfig = e);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/Chart/api/chart.js
var sm = {
	resize(e) {
		let t = this.internal, { config: n, state: r } = t;
		r.rendered && (n.size_width = e ? e.width : null, n.size_height = e ? e.height : null, r.resizing = !0, r.dirty.size = !0, this.flush(!1), t.resizeFunction());
	},
	flush(e) {
		let t = this.internal, { state: n, $el: { zoomResetBtn: r } } = t;
		n.rendered ? (n.resizing ? t.brush?.updateResize() : t.axis?.setOrient(), r?.style("display", "none"), t.scale.zoom && (n.current.zoomDomain = t.scale.zoom.domain()), t.scale.zoom = null, n.resizing || (n.dirty.data = !0), e ? t.redraw({
			withTransform: !0,
			withUpdateXDomain: !0,
			withUpdateOrgXDomain: !0,
			withLegend: !0
		}) : t.updateAndRedraw({
			withLegend: !0,
			withTransition: !1,
			withTransitionForTransform: !1
		}), !n.resizing && t.brush && (t.brush.getSelection().call(t.brush.move), t.unselectRect()), n.current.zoomDomain && (t.api.zoom(n.current.zoomDomain), n.current.zoomDomain = null)) : t.initToRender(!0);
	},
	destroy() {
		let e = this.internal, { state: t, $el: { chart: n, style: r, svg: i } } = e;
		if (w(e)) {
			e.callPluginHook("$willDestroy"), e.cache?.remove(["setOverOut", "callOverOutForTouch"]), e.charts.splice(e.charts.indexOf(this), 1), e.charts.length === 0 && Oo(), e.unbindAllEvents(), i?.select("*").interrupt(), t.canvasFlowFrame !== null && a.cancelAnimationFrame?.(t.canvasFlowFrame), t.canvasFlowFrame = null, t.canvasFlowFinish = null, t.pendingRaf !== null && a.cancelAnimationFrame?.(t.pendingRaf), t.pendingRaf = null, e.canvasRenderer?.destroy(), e.canvasEngine?.destroy(), e.resizeFunction?.clear(), e.resizeFunction?.resizeObserver?.disconnect(), e.resizeFunction && a.removeEventListener("resize", e.resizeFunction), n.classed("bb", !1).style("position", null), t.isCanvasMode && n.style("min-height", t.canvasInlineStyle.minHeight || null), n.selectChildren().remove(), r && r.parentNode.removeChild(r), Object.keys(this).forEach((t) => {
				t === "internal" && Object.keys(e).forEach((t) => {
					e[t] = null;
				}), this[t] = null, delete this[t];
			});
			for (let e in this) this[e] = () => {};
		}
		return null;
	},
	config(e, t, n) {
		let { config: r, state: i } = this.internal, a = e?.replace(/\./g, "_"), o;
		return e && a in r ? g(t) ? (r[a] = t, o = t, n && this.flush()) : o = r[a] : (arguments.length === 0 || C(e)) && (o = i.orgConfig), o;
	}
}, cm = { color(e) {
	return this.internal.color(e);
} }, lm = function(e) {
	let { targets: t } = this.internal.data;
	if (!h(e)) {
		let n = T(e) ? e : [e];
		return t.filter((e) => n.some((t) => t === e.id));
	}
	return t;
};
Te(lm, {
	shown: function(e) {
		return this.internal.filterTargetsToShow(this.data(e));
	},
	values: function(e, t = !0) {
		let n = null;
		if (e) {
			let r = this.data(e);
			T(r) && (n = [], r.forEach((e) => {
				let r = e.values.map((e) => e.value);
				t ? n = n.concat(r) : n.push(r);
			}));
		}
		return n;
	},
	names: function(e) {
		return this.internal.updateDataAttributes("names", e);
	},
	colors: function(e) {
		return this.internal.updateDataAttributes("colors", e);
	},
	axes: function(e) {
		return this.internal.updateDataAttributes("axes", e);
	},
	min: function() {
		return this.internal.getMinMaxData().min;
	},
	max: function() {
		return this.internal.getMinMaxData().max;
	}
});
var um = { data: lm }, dm = {
	focus(e) {
		let t = this.internal, { state: n } = t, r = t.mapToTargetIds(e);
		if (n.isCanvasMode) {
			let e = r.filter(t.isTargetToShow, t), i = new Set(e), a = t.mapToTargetIds().filter((e) => !i.has(e) && t.isTargetToShow(e));
			t.revertLegend(), t.toggleFocusLegend(a, !1), t.toggleFocusLegend(e, !0), n.focusedTargetIds = i, n.defocusedTargetIds = new Set(a), t.renderCanvasFrame?.(void 0, null, !1);
			return;
		}
		let i = t.$el.svg.selectAll(t.selectorTargets(r.filter(t.isTargetToShow, t)));
		this.revert(), this.defocus(), i.classed(W.focused, !0).classed(W.defocused, !1), t.hasArcType() && !n.hasRadar && (t.expandArc(r), t.hasType("gauge") && t.markOverlapped(e, t, `.${Aa.gaugeValue}`)), t.toggleFocusLegend(r, !0), n.focusedTargetIds = new Set(r), r.forEach((e) => n.defocusedTargetIds.delete(e));
	},
	defocus(e) {
		let t = this.internal, { state: n } = t, r = t.mapToTargetIds(e);
		if (n.isCanvasMode) {
			let e = r.filter(t.isTargetToShow, t);
			t.toggleFocusLegend(e, !1), e.forEach((e) => n.focusedTargetIds.delete(e)), n.defocusedTargetIds = new Set(e), t.renderCanvasFrame?.(void 0, null, !1);
			return;
		}
		t.$el.svg.selectAll(t.selectorTargets(r.filter(t.isTargetToShow, t))).classed(W.focused, !1).classed(W.defocused, !0), t.hasArcType(null, ["polar"]) && (t.unexpandArc(r), t.hasType("gauge") && t.undoMarkOverlapped(t, `.${Aa.gaugeValue}`)), t.toggleFocusLegend(r, !1), r.forEach((e) => n.focusedTargetIds.delete(e)), n.defocusedTargetIds = new Set(r);
	},
	revert(e) {
		let t = this.internal, { config: n, state: r, $el: i } = t, a = t.mapToTargetIds(e), o = () => {
			n.legend_show && (t.showLegend(a.filter(t.isLegendToShow.bind(t))), i.legend.selectAll(t.selectorLegends(a)).filter(function() {
				return F(this).classed(W.legendItemFocused);
			}).classed(W.legendItemFocused, !1));
		};
		if (r.isCanvasMode) {
			let e = !!r.focusedTargetIds?.size || !!r.defocusedTargetIds?.size;
			o(), r.focusedTargetIds = /* @__PURE__ */ new Set(), r.defocusedTargetIds = /* @__PURE__ */ new Set(), e && t.renderCanvasFrame?.(void 0, null, !1);
			return;
		}
		i.svg.selectAll(t.selectorTargets(a)).classed(W.focused, !1).classed(W.defocused, !1), t.hasArcType(null, ["polar"]) && t.unexpandArc(a), o(), r.focusedTargetIds = /* @__PURE__ */ new Set(), r.defocusedTargetIds = /* @__PURE__ */ new Set();
	}
}, fm = { legend: {
	show: function(e) {
		let t = this.internal;
		t.showLegend(t.mapToTargetIds(e)), t.updateAndRedraw({ withLegend: !0 });
	},
	hide: function(e) {
		let t = this.internal;
		t.hideLegend(t.mapToTargetIds(e)), t.updateAndRedraw({ withLegend: !0 });
	}
} }, pm = {
	load(e) {
		let t = this.internal, { config: n } = t;
		t.state.dirty.data = !0, t.state._eventRectFingerprint = null, e.xs && t.addXs(e.xs), "names" in e && this.data.names(e.names), "classes" in e && Object.keys(e.classes).forEach((t) => {
			n.data_classes[t] = e.classes[t];
		}), "categories" in e && t.axis.isCategorized() && (n.axis_x_categories = e.categories), "axes" in e && Object.keys(e.axes).forEach((t) => {
			n.data_axes[t] = e.axes[t];
		}), "colors" in e && Object.keys(e.colors).forEach((t) => {
			n.data_colors[t] = e.colors[t];
		}), "regions" in e && (n.data_regions = e.regions || {});
		let r = [
			"data",
			"columns",
			"rows",
			"json",
			"url"
		].some((t) => t in e), i = "unload" in e && e.unload !== !1;
		if ("regions" in e && !r && !i) {
			t.redraw({
				withUpdateOrgXDomain: !0,
				withUpdateXDomain: !0,
				withLegend: !0
			}), Qo.call(t, e.done, e.resizeAfter);
			return;
		}
		if (i) {
			let n = t.mapToTargetIds(e.unload === !0 ? null : e.unload);
			t.unload(n, () => {
				!t.config || !t.cache || (t.cache.remove(n), l(() => t.loadFromArgs(e)));
			});
		} else t.loadFromArgs(e);
	},
	unload(e) {
		let t = this.internal, n = e || {};
		C(n) && this.tooltip.hide(), T(n) ? n = { ids: n } : p(n) && (n = { ids: [n] });
		let r = t.mapToTargetIds(n.ids);
		t.state.dirty.data = !0, t.state._eventRectFingerprint = null, t.unload(r, () => {
			!t.config || !t.cache || (t.redraw({
				withUpdateOrgXDomain: !0,
				withUpdateXDomain: !0,
				withLegend: !0
			}), t.cache.remove(r), Qo.call(t, n.done, n.resizeAfter));
		});
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/Chart/api/show.js
function mm(e, t, n, r = !1) {
	let i = this.internal, a = i.mapToTargetIds(t), o = new Set(a), s = [...i.state.hiddenTargetIds].filter((e) => o.has(e));
	if (i.state.toggling = !0, i.state.dirty.visibility = !0, i[`${e ? "remove" : "add"}HiddenTargetIds`](a), i.state.isCanvasMode) {
		e && s.length ? M(i.config.data_onshown, this, s) : !e && s.length === 0 && M(i.config?.data_onhidden, this, a), r || i.redraw({
			withUpdateOrgXDomain: !0,
			withUpdateXDomain: !0,
			withLegend: !0
		}), i.state.toggling = !1;
		return;
	}
	let c = i.$el.svg.selectAll(i.selectorTargets(a)), l = e ? null : "0";
	e && s.length && (c.style("display", null), M(i.config.data_onshown, this, s)), i.$T(c).style("opacity", l, "important").call(xe, () => {
		!e && s.length === 0 && (c.style("display", "none"), M(i.config?.data_onhidden, this, a)), c.style("opacity", l);
	}), n.withLegend && i[`${e ? "show" : "hide"}Legend`](a), r || i.redraw({
		withUpdateOrgXDomain: !0,
		withUpdateXDomain: !0,
		withLegend: !0
	}), i.state.toggling = !1;
}
var hm = {
	show(e, t = {}) {
		mm.call(this, !0, e, t);
	},
	hide(e, t = {}) {
		mm.call(this, !1, e, t);
	},
	toggle(e, t = {}) {
		let n = this.internal, r = {
			show: [],
			hide: []
		};
		n.mapToTargetIds(e).forEach((e) => r[n.isTargetToShow(e) ? "hide" : "show"].push(e)), r.show.length && r.hide.length ? (mm.call(this, !0, r.show, t, !0), mm.call(this, !1, r.hide, t)) : (r.show.length && this.show(r.show, t), r.hide.length && this.hide(r.hide, t));
	}
}, gm = { tooltip: {
	show: function(e) {
		let t = this.internal, { $el: n, config: r, state: { eventReceiver: i, hasFunnel: a, hasTreemap: o, inputType: s } } = t, c, l;
		if (e.mouse && (l = e.mouse), e.data) {
			let { data: s } = e, u = t.getYScaleById(s.id)?.(s.value);
			if ((a || o) && s.id) {
				let e = t.selectorTarget(s.id, void 0, `.${G.shape}`);
				i.rect = n.main.select(e);
			} else t.isMultipleX() ? l = [t.xx(s), u] : (r.tooltip_grouped || (l = [0, u]), c = s.index ?? (t.hasArcType() && s.id ? t.getArcElementByIdOrIndex(s.id)?.datum().index : t.getIndexByX(s.x)));
		} else g(e.x) ? c = t.getIndexByX(e.x) : g(e.index) && (c = e.index);
		if (t.state.isCanvasMode) {
			let i = t.filterTargetsToShow?.() || t.data.targets, a = e.data?.id && !r.tooltip_grouped ? i.filter((t) => t.id === e.data.id).map((t) => t.values[c ?? e.data.index]).filter(Boolean) : i.map((e) => e.values[c]).filter(Boolean), o = n.canvas?.node?.(), s = t.state.canvasShape || t.getDrawShape?.(), u = a[0], d = l || (u && s?.pos?.cx && s?.pos?.cy ? [t.state.margin.left + s.pos.cx(u), t.state.margin.top + s.pos.cy(u)] : void 0);
			if (!a.length || !o) return;
			t.state.canvasFocusKey = a.map((e) => `${e.id}:${e.index}`).join("|"), t.renderCanvasFocus?.(a, d), t.showTooltip?.(a, o);
			return;
		}
		(s === "mouse" ? ["mouseover", "mousemove"] : ["touchstart"]).forEach((e) => {
			t.dispatchEvent(e, c, l);
		});
	},
	hide: function() {
		let e = this.internal, { state: { inputType: t, isCanvasMode: n }, $el: { tooltip: r } } = e, i = r?.datum();
		if (n) {
			e.state.canvasFocusKey = null, e.hideTooltip(!0), e.clearCanvasFocus?.();
			return;
		}
		if (i?.data?.[0]) {
			let { index: n } = i.data[0];
			(t === "mouse" ? ["mouseout"] : ["touchend"]).forEach((t) => {
				e.dispatchEvent(t, n);
			});
		}
		t === "touch" && e.callOverOutForTouch(), e.hideTooltip(!0), e.hideGridFocus?.(), e.unexpandCircles?.(), e.expandBarTypeShapes?.(!1);
	}
} }, _m = class e {
	plugins = [];
	internal;
	constructor(t) {
		let n = new am(this);
		this.internal = n, (function e(t, n, r) {
			Object.keys(t).forEach((i) => {
				let a = f(t[i]), o = n !== r, s = w(t[i]), c = s && Object.keys(t[i]).length > 0;
				n[i] = a && (!o && c || o) ? t[i].bind(r) : s && !a ? {} : t[i], c && e(t[i], n[i], r);
			});
		})(e.prototype, this, this), om.call(n, t), n.beforeInit(), n.init();
	}
};
Te(_m.prototype, [
	sm,
	cm,
	um,
	dm,
	fm,
	pm,
	hm,
	gm
]);
//#endregion
//#region node_modules/billboard.js/dist-esm/core.js
var vm = Object.create(null), ym = {
	version: "4.0.3",
	generate(e) {
		let t = new _m(Oe(Object.create(null), vm, e));
		return t.internal.charts = this.instance, this.instance.push(t), t;
	},
	defaults(e) {
		return E(e) && (vm = e), vm;
	},
	instance: [],
	plugin: {}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/shape/core/point.js
function bm(e) {
	return x(e) && f(e.create) && f(e.update);
}
function xm(e, t) {
	let n = this, r = (e, t) => {
		let n = e.attributes;
		for (let r = 0, i; i = n[r]; r++) i = i.name, t.setAttribute(i, e.getAttribute(i));
	}, i = new DOMParser().parseFromString(_e(e), "image/svg+xml").documentElement, a = o.createElementNS(Ue.svg, i.nodeName.toLowerCase());
	if (a.id = t, a.style.fill = "inherit", a.style.stroke = "inherit", r(i, a), i.childNodes?.length) {
		let e = F(a);
		"innerHTML" in a ? e.html(_e(i.innerHTML)) : Ce(i.childNodes).forEach((t) => {
			r(t, e.append(t.tagName).node());
		});
	}
	n.$el.defs.node().appendChild(a);
}
var Sm = {
	hasValidPointType(e) {
		return /^(circle|rect(angle)?|polygon|ellipse|use)$/i.test(e || this.config.point_type);
	},
	hasLegendDefsPoint() {
		let { config: e } = this;
		return e.legend_show && e.point_pattern?.length && e.legend_usePoint;
	},
	getDefsPointId(e) {
		let { state: { datetimeId: t } } = this;
		return `${t}-point${e}`;
	},
	getValidPointPattern() {
		let { config: e } = this, t = /^(circle|rect(angle)?)$/i.test(e.point_type) ? e.point_type : "circle";
		return w(e.point_pattern) ? e.point_pattern : [t];
	},
	generatePoint() {
		let e = this, { $el: t, config: n } = e, r = [], i = e.getValidPointPattern();
		return function(a, o, ...s) {
			return function(c) {
				let l = e.getTargetSelectorSuffix(c.id || c.data?.id || c), u = F(this);
				r.indexOf(l) < 0 && r.push(l);
				let d = i[r.indexOf(l) % i.length];
				if (e.hasValidPointType(d)) d = e[d];
				else if (!bm(d || n.point_type)) {
					let n = e.getDefsPointId(l);
					if (t.defs.select(`#${n}`).size() < 1 && xm.call(e, d, n), a === "create") return e.custom?.create.bind(o)(u, n, ...s);
					if (a === "update") return e.custom?.update.bind(o)(u, ...s);
				}
				return d[a]?.bind(o)(u, ...s);
			};
		};
	}
}, Cm = {
	point_show: !0,
	point_r: 2.5,
	point_radialGradient: !1,
	point_sensitivity: 10,
	point_focus_expand_enabled: !0,
	point_focus_expand_r: void 0,
	point_focus_only: !1,
	point_opacity: void 0,
	point_pattern: [],
	point_select_r: void 0,
	point_type: "circle"
};
//#endregion
//#region node_modules/billboard.js/dist-esm/Chart/api/axis.js
function wm(e, t, n) {
	let { config: r } = e, i = (e, n) => {
		let i = m(n) ? n : n === !1 ? void 0 : null;
		i !== null && (r[`axis_${e}_${t}`] = i);
	};
	g(n) && (x(n) ? Object.keys(n).forEach((e) => {
		i(e, n[e]);
	}) : (m(n) || n === !1) && ["y", "y2"].forEach((e) => {
		i(e, n);
	}), e.state.dirty.data = !0, e.redraw({
		withUpdateOrgXDomain: !0,
		withUpdateXDomain: !0
	}));
}
function Tm(e, t) {
	let { config: n } = e;
	return {
		x: n[`axis_x_${t}`],
		y: n[`axis_y_${t}`],
		y2: n[`axis_y2_${t}`]
	};
}
var Em = { axis: {
	labels: function(e) {
		let t = this.internal, n;
		return e && (Object.keys(e).forEach((n) => {
			t.axis.setLabelText(n, e[n]);
		}), t.state.isCanvasMode ? t.renderCanvasFrame?.(void 0, null, !1) : t.axis.updateLabels()), [
			"x",
			"y",
			"y2"
		].forEach((e) => {
			let r = t.axis.getLabelText(e);
			r && (!n && (n = {}), n[e] = r);
		}), n;
	},
	min: function(e) {
		let t = this.internal;
		return d(e) || e === !1 ? wm(t, "min", e) : Tm(t, "min");
	},
	max: function(e) {
		let t = this.internal;
		return d(e) || e === !1 ? wm(t, "max", e) : Tm(t, "max");
	},
	range: function(e) {
		let { axis: t } = this;
		if (arguments.length) {
			let { min: n, max: r } = e;
			g(r) && t.max(r), g(n) && t.min(n);
		} else return {
			max: t.max(),
			min: t.min()
		};
	}
} }, Dm = { groups(e) {
	let t = this.internal, { config: n } = t;
	return h(e) ? n.data_groups : (n.data_groups = e, t.state.dirty.data = !0, t.redraw(), n.data_groups);
} }, Om = {
	x(e) {
		let t = this.internal, { axis: n, data: r } = t, i = n.isCustomX() && n.isCategorized();
		return T(e) && (i ? this.categories(e) : (t.updateTargetX(r.targets, e), t.state.dirty.data = !0, t.redraw({
			withUpdateOrgXDomain: !0,
			withUpdateXDomain: !0
		}))), i ? this.categories() : r.xs;
	},
	xs(e) {
		let t = this.internal;
		return E(e) && (t.updateTargetXs(t.data.targets, e), t.state.dirty.data = !0, t.redraw({
			withUpdateOrgXDomain: !0,
			withUpdateXDomain: !0
		})), t.data.xs;
	}
};
//#endregion
//#region node_modules/d3-axis/src/identity.js
function km(e) {
	return e;
}
//#endregion
//#region node_modules/d3-axis/src/axis.js
var Am = 1, jm = 2, Mm = 3, Nm = 4, Pm = 1e-6;
function Fm(e) {
	return "translate(" + e + ",0)";
}
function Im(e) {
	return "translate(0," + e + ")";
}
function Lm(e) {
	return (t) => +e(t);
}
function Rm(e, t) {
	return t = Math.max(0, e.bandwidth() - t * 2) / 2, e.round() && (t = Math.round(t)), (n) => +e(n) + t;
}
function zm() {
	return !this.__axis;
}
function Bm(e, t) {
	var n = [], r = null, i = null, a = 6, o = 6, s = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : .5, l = e === Am || e === Nm ? -1 : 1, u = e === Nm || e === jm ? "x" : "y", d = e === Am || e === Mm ? Fm : Im;
	function f(f) {
		var p = r ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()), m = i ?? (t.tickFormat ? t.tickFormat.apply(t, n) : km), h = Math.max(a, 0) + s, g = t.range(), _ = +g[0] + c, v = +g[g.length - 1] + c, y = (t.bandwidth ? Rm : Lm)(t.copy(), c), b = f.selection ? f.selection() : f, x = b.selectAll(".domain").data([null]), S = b.selectAll(".tick").data(p, t).order(), C = S.exit(), w = S.enter().append("g").attr("class", "tick"), T = S.select("line"), E = S.select("text");
		x = x.merge(x.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), S = S.merge(w), T = T.merge(w.append("line").attr("stroke", "currentColor").attr(u + "2", l * a)), E = E.merge(w.append("text").attr("fill", "currentColor").attr(u, l * h).attr("dy", e === Am ? "0em" : e === Mm ? "0.71em" : "0.32em")), f !== b && (x = x.transition(f), S = S.transition(f), T = T.transition(f), E = E.transition(f), C = C.transition(f).attr("opacity", Pm).attr("transform", function(e) {
			return isFinite(e = y(e)) ? d(e + c) : this.getAttribute("transform");
		}), w.attr("opacity", Pm).attr("transform", function(e) {
			var t = this.parentNode.__axis;
			return d((t && isFinite(t = t(e)) ? t : y(e)) + c);
		})), C.remove(), x.attr("d", e === Nm || e === jm ? o ? "M" + l * o + "," + _ + "H" + c + "V" + v + "H" + l * o : "M" + c + "," + _ + "V" + v : o ? "M" + _ + "," + l * o + "V" + c + "H" + v + "V" + l * o : "M" + _ + "," + c + "H" + v), S.attr("opacity", 1).attr("transform", function(e) {
			return d(y(e) + c);
		}), T.attr(u + "2", l * a), E.attr(u, l * h).text(m), b.filter(zm).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === jm ? "start" : e === Nm ? "end" : "middle"), b.each(function() {
			this.__axis = y;
		});
	}
	return f.scale = function(e) {
		return arguments.length ? (t = e, f) : t;
	}, f.ticks = function() {
		return n = Array.from(arguments), f;
	}, f.tickArguments = function(e) {
		return arguments.length ? (n = e == null ? [] : Array.from(e), f) : n.slice();
	}, f.tickValues = function(e) {
		return arguments.length ? (r = e == null ? null : Array.from(e), f) : r && r.slice();
	}, f.tickFormat = function(e) {
		return arguments.length ? (i = e, f) : i;
	}, f.tickSize = function(e) {
		return arguments.length ? (a = o = +e, f) : a;
	}, f.tickSizeInner = function(e) {
		return arguments.length ? (a = +e, f) : a;
	}, f.tickSizeOuter = function(e) {
		return arguments.length ? (o = +e, f) : o;
	}, f.tickPadding = function(e) {
		return arguments.length ? (s = +e, f) : s;
	}, f.offset = function(e) {
		return arguments.length ? (c = +e, f) : c;
	}, f;
}
function Vm(e) {
	return Bm(Am, e);
}
function Hm(e) {
	return Bm(jm, e);
}
function Um(e) {
	return Bm(Mm, e);
}
function Wm(e) {
	return Bm(Nm, e);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/Axis/AxisRendererHelper.js
var Gm = class {
	owner;
	config;
	scale;
	charSize = {};
	constructor(e) {
		let t = mf(), { config: n, params: r } = e;
		this.owner = e, this.config = n, this.scale = t, (n.noTransition || !r.config.transition_duration) && (n.withoutTransition = !0), n.range = this.scaleExtent((r.orgXScale || t).range());
	}
	getSizeFor1Char(e, t, n = !0) {
		let r = {
			w: 5.5,
			h: 11.5
		};
		return this.charSize[e] && n ? this.charSize[e] : (!t.empty() && t.text("0").call((e) => {
			try {
				let { width: t, height: n } = so(e.node(), !0);
				t && n && (r.w = t, r.h = n);
			} finally {
				e.text("");
			}
		}), this.charSize[e] = r, r);
	}
	getTickTransformSetter(e) {
		let { config: t } = this, n = e === "x" ? (e) => `translate(${e + t.tickOffset},0)` : (e) => `translate(0,${e})`;
		return (e, t) => {
			e.attr("transform", (e) => {
				let r = t(e);
				return d(e) ? n(r) : null;
			});
		};
	}
	scaleExtent(e) {
		let t = e[0], n = e[e.length - 1];
		return t < n ? [t, n] : [n, t];
	}
	generateTicks(e, t) {
		let { tickStepSize: n } = this.owner.params, [r, i] = e.domain(), a = [];
		if (t && n) {
			let e = Math.round(r);
			for (; e <= i;) a.push(e), e += n;
		} else if (e.ticks) {
			let { tickArguments: t } = this.config;
			if (e.type === "log" && !t) {
				let t = mf("_log").domain([r > 0 ? r : 1, i]).range(e.range());
				a = t.ticks();
				for (let e = i.toFixed().length; a.length > 15; e--) a = t.ticks(e);
				a.splice(0, 1, r), a.splice(a.length - 1, 1, i);
			} else a = e.ticks(...this.config.tickArguments || []);
		}
		return a;
	}
	copyScale() {
		let e = this.scale.copy();
		return e.domain().length || e.domain(this.scale.domain()), e.type = this.scale.type, e;
	}
	textFormatted(e) {
		let t = this.config.tickFormat, n = /\d+\.\d+0{5,}\d$/.test(e) ? +String(e).replace(/0+\d$/, "") : e, r = t ? t(n) : n;
		return g(r) ? r : "";
	}
	transitionise(e) {
		let { config: t } = this, n = e;
		if (t.withoutTransition) n = e.interrupt();
		else if (t.transition || !this.owner.params.noTransition) try {
			n = e.transition(t.transition);
		} catch {}
		return n;
	}
}, Km = class {
	helper;
	config;
	params;
	g;
	generatedTicks = [];
	canReuseTickTextOnResize(e) {
		let { config: t, params: n } = this, { config: r, id: i, owner: a } = n, o = /^(x|subX)$/.test(i), s = i === "subX" ? r.subchart_axis_x_tick_format || r.axis_x_tick_format : r[`axis_${i === "subX" ? "x" : i}_tick_format`], c = n.tickMultiline && n.isCategory && !e && !(n.tickWidth > 0);
		return !!(a.state.resizing && !a.state.flowing && !f(r.axis_evalTextSize) && !s && !n.tickTitle && !(o && r.axis_x_tick_autorotate) && !c && t.withoutTransition);
	}
	canReuseTickNodesOnResize(e, t, n, r) {
		if (r.tick || !r.text || !this.canReuseTickTextOnResize(n) || e.size() !== t.length) return !1;
		let i = e.nodes();
		for (let e = 0; e < t.length; e++) {
			let n = i[e].__data__, r = t[e];
			if (n instanceof Date || r instanceof Date) {
				if (+n != +r) return !1;
			} else if (n !== r) return !1;
		}
		return !0;
	}
	constructor(e = {}) {
		let t = {
			innerTickSize: 6,
			outerTickSize: e.outerTick ? 6 : 0,
			orient: "bottom",
			range: [],
			tickArguments: null,
			tickCentered: null,
			tickCulling: !0,
			tickFormat: null,
			tickLength: 9,
			tickOffset: 0,
			tickPadding: 3,
			tickValues: null,
			transition: null,
			noTransition: e.noTransition
		};
		t.tickLength = Math.max(t.innerTickSize, 0) + t.tickPadding, this.config = t, this.params = e, this.helper = new Gm(this);
	}
	create(e) {
		let t = this, { config: n, helper: r, params: i } = t, { scale: a } = r, { orient: o } = n, s = this.splitTickText.bind(t), c = /^(left|right)$/.test(o), l = /^(top|bottom)$/.test(o), u = r.getTickTransformSetter(l ? "x" : "y"), d = u === r.axisX ? "y" : "x", p = /^(top|left)$/.test(o) ? -1 : 1, h = i.tickTextRotate;
		this.config.range = a.rangeExtent ? a.rangeExtent() : r.scaleExtent((i.orgXScale || a).range());
		let { innerTickSize: g, tickLength: _, range: v } = n, y = i.id, b = y && /^(x|y|y2)$/.test(y) ? i.config[`axis_${y}_tick_text_position`] : {
			x: 0,
			y: 0
		}, x = y === "subX" ? "subchart_axis_x" : `axis_${y}`, S = i.config[`${x}_show`], C = {
			tick: S ? i.config[`${x}_tick_show`] : !1,
			text: S ? i.config[`${x}_tick_text_show`] : !1
		}, w = i.config.axis_evalTextSize, E;
		e.each(function() {
			let e = F(this), x = this.__chart__ || a, S = r.copyScale();
			E = e, this.__chart__ = S, n.tickOffset = i.isCategory ? (S(1) - S(0)) / 2 : 0;
			let D = e.selectAll(".domain").data([0]);
			if (D.enter().append("path").attr("class", "domain").merge(D).attr("d", () => {
				let e = n.outerTickSize * p;
				return l ? `M${v[0]},${e}V0H${v[1]}V${e}` : `M${e},${v[0]}H0V${v[1]}H${e}`;
			}), C.tick || C.text) {
				let a = n.tickValues || r.generateTicks(S, c || i.config.axis_rotated);
				t.generatedTicks = a;
				let v = e.selectAll(".tick");
				if (t.canReuseTickNodesOnResize(v, a, c || i.config.axis_rotated, C)) u(v, S);
				else {
					v = v.data(a, S);
					let e = v.enter().insert("g", ".domain").attr("class", "tick"), n = v.exit().remove();
					v = e.merge(v), C.tick && e.append("line"), C.text && e.append("text");
					let E = !e.empty() || !n.empty(), D = C.text && !E && t.canReuseTickTextOnResize(c || i.config.axis_rotated), O = {
						w: 0,
						h: 0
					}, k = v.selectAll("text.__bb-empty");
					if (C.text && !D) {
						let e = v.select("text"), n = [];
						k = e, f(w) && (O = w.bind(t.params.owner.api)(e.node(), y), this.classList.contains(B.dummy) && (this.sizeFor1Char = O)), (!O || O.w === 0 || O.h === 0) && (O = t.helper.getSizeFor1Char(o, e, !!w));
						let u = e.selectAll("tspan").data((e, t) => {
							let o;
							if (i.tickMultiline) o = s(e, S, a, c, O.w);
							else {
								let t = r.textFormatted(e);
								o = T(t) ? t.concat() : [t];
							}
							return n[t] = o.length, o.map((e) => ({
								index: t,
								splitted: e
							}));
						});
						u.exit().remove(), u = u.enter().append("tspan").merge(u).text((e) => e.splitted), u.attr("x", l ? 0 : _ * p).attr("dx", (() => {
							let e = 0;
							return /(top|bottom)/.test(o) && h && (e = 8 * Math.sin(h / 180 * Math.PI) * (o === "top" ? -1 : 1)), e + (b.x || 0);
						})()).attr("dy", (e, t) => {
							let r = ".71em", i = 0;
							return o !== "top" && (i = O.h, t === 0 && (i = c ? -((n[e.index] - 1) * (O.h / 2) - 3) : b.y === 0 ? r : 0)), m(i) && b.y ? i + b.y : i || r;
						});
					}
					let A = v.select("line");
					if (e.select("line").attr(`${d}2`, g * p), e.select("text").attr(d, _ * p), t.setTickLineTextPosition(A, k, O), i.tickTitle) {
						let e = k.select("title"), t = i.tickTitle;
						(e.empty() ? k.append("title") : e).text((e) => t[Number(e)]);
					}
					if (S.bandwidth) {
						let e = S, t = e.bandwidth() / 2;
						x = (n) => e(n) + t, S = x;
					} else x.bandwidth ? x = S : u(n, S);
					v = i.owner.state.flowing ? r.transitionise(v) : i.owner.$T(v), u(e, x), u(v.style("opacity", null), S);
				}
			}
		}), this.g = E;
	}
	getGeneratedTicks(e) {
		let t = this.generatedTicks?.length - 1, n = this.generatedTicks;
		if (t > e) {
			let r = Math.round(t / e + .1);
			n = this.generatedTicks.map((e, t) => t % r === 0 ? e : null).filter((e) => e !== null).splice(0, e);
		}
		return n;
	}
	getTickXY() {
		let { config: e } = this, t = {
			x: 0,
			y: 0
		};
		return this.params.isCategory && (t.x = e.tickCentered ? 0 : e.tickOffset, t.y = e.tickCentered ? e.tickOffset : 0), t;
	}
	getTickSize(e) {
		let { scale: t } = this.helper, { config: n } = this, { innerTickSize: r, range: i } = n, a = t(e) + (n.tickCentered ? 0 : n.tickOffset);
		return i[0] < a && a < i[1] ? r : 0;
	}
	setTickLineTextPosition(e, t, n) {
		let r = this.getTickXY(), { innerTickSize: i, orient: a, tickLength: o, tickOffset: s } = this.config, c = this.params.id, l = this.params.tickTextRotate, u = n.h / 2 - 6, d = (e) => {
			let t = ["start", "end"];
			return a === "top" && t.reverse(), e ? t[e > 0 ? 0 : 1] : "middle";
		}, f = (e) => e ? `rotate(${e})` : null, p = (e) => {
			let t = e / (a === "bottom" ? 15 : 23);
			return e ? 11.5 - 2.5 * t * (e > 0 ? 1 : -1) : o;
		}, { config: { axis_rotated: m, axis_x_tick_text_inner: h } } = this.params.owner, g = this.params.config[`axis_${c}_tick_inner`];
		switch (a) {
			case "bottom":
				e.attr("x1", r.x).attr("x2", r.x).attr("y2", (e) => this.getTickSize.bind(this)(e) * (g ? -1 : 1)), t.attr("x", 0).attr("y", p(l)).style("text-anchor", (e, t, { length: n }) => !m && t === 0 && (h === !0 || h.first) ? "start" : !m && t === n - 1 && (h === !0 || h.last) ? "end" : d(l)).attr("transform", f(l));
				break;
			case "top":
				e.attr("x2", 0).attr("y2", g ? i : -i), t.attr("x", 0).attr("y", -(p(l) + u + 6)).style("text-anchor", d(l)).attr("transform", f(l));
				break;
			case "left":
				e.attr("x2", g ? i : -i).attr("y1", r.y).attr("y2", r.y), t.attr("x", -o).attr("y", s + (m ? u / 4 : u)).style("text-anchor", "end");
				break;
			case "right": e.attr("x2", g ? -i : i).attr("y2", 0), t.attr("x", o).attr("y", u).style("text-anchor", "start");
		}
	}
	splitTickText(e, t, n, r, i) {
		let { params: a } = this, o = this.helper.textFormatted(e), s = p(o) && o.indexOf("\n") > -1 ? o.split("\n") : [];
		if (s.length) return s;
		if (T(o)) return o;
		let c = a.tickWidth;
		(!c || c <= 0) && (c = r ? 95 : a.isCategory ? (a.isInverted ? t(n[0]) - t(n[1]) : t(n[1]) - t(n[0])) - 12 : 110);
		function l(e, t) {
			let n, r, a;
			for (let o = 1; o < t.length; o++) if (t.charAt(o) === " " && (r = o), n = t.substr(0, o + 1), a = i * n.length, c < a) return l(e.concat(t.substr(0, r || o)), t.slice(r ? r + 1 : o));
			return e.concat(t);
		}
		return l(s, String(o));
	}
	scale(e) {
		return arguments.length ? (this.helper.scale = e, this) : this.helper.scale;
	}
	orient(e) {
		return arguments.length ? (this.config.orient = e in {
			top: 1,
			right: 1,
			bottom: 1,
			left: 1
		} ? String(e) : "bottom", this) : this.config.orient;
	}
	tickFormat(e) {
		let { config: t } = this;
		return arguments.length ? (t.tickFormat = e, this) : t.tickFormat;
	}
	tickCentered(e) {
		let { config: t } = this;
		return arguments.length ? (t.tickCentered = e, this) : t.tickCentered;
	}
	tickOffset() {
		return this.config.tickOffset;
	}
	tickInterval(e) {
		let { outerTickSize: t, tickOffset: n, tickValues: r } = this.config, i;
		if (this.params.isCategory) {
			let e = this.params.owner.scale.zoom ?? this.helper.scale;
			i = n * 2 || Math.abs(e(1) - e(0));
		} else {
			let n = this.params.owner.scale.zoom ?? this.helper.scale;
			if (i = (this.g ? this.g.select("path.domain").node().getTotalLength() - t * 2 : Math.abs(n.range()[1] - n.range()[0])) / (e || this.g?.selectAll("line").size() || 1), r) for (let e = 0; e < r.length - 1; e++) {
				let t = n(r[e + 1]) - n(r[e]);
				t && t < i && (i = t);
			}
		}
		return i === Infinity ? 0 : i;
	}
	ticks(...e) {
		let { config: t } = this;
		return e.length ? (t.tickArguments = Ce(e), this) : t.tickArguments;
	}
	tickCulling(e) {
		let { config: t } = this;
		return arguments.length ? (t.tickCulling = e, this) : t.tickCulling;
	}
	tickValues(e) {
		let { config: t } = this;
		if (f(e)) t.tickValues = () => e(this.helper.scale.domain());
		else {
			if (!arguments.length) return t.tickValues;
			t.tickValues = e;
		}
		return this;
	}
	setTransition(e) {
		return this.config.transition = e, this;
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/Axis/Axis.js
function qm(e) {
	let t = [e[0], e[e.length - 1]], n = 0, r = null;
	for (let t of e) {
		let e = t.textContent?.length ?? 0;
		e > n && (n = e, r = t);
	}
	r && !t.includes(r) && t.push(r);
	let i = e[Math.floor(e.length / 2)];
	return t.includes(i) || t.push(i), t;
}
var Jm = 50, Ym = Symbol("tickWidthFallback");
function Xm(e) {
	let t = e.select("line").node(), n = t?.ownerDocument?.defaultView?.getComputedStyle ? parseFloat(t.ownerDocument.defaultView.getComputedStyle(t).strokeWidth) : parseFloat(t?.getAttribute?.("stroke-width"));
	return Number.isFinite(n) && n > 0 ? n : 1;
}
function Zm(e, t, n) {
	let r = e?.scale?.();
	if (!r || t.length < 2) return !1;
	let i = Math.max(1, n) / 2, a = t.map((e) => +r(e)).filter(Number.isFinite).sort((e, t) => e - t);
	if (a.length < 2) return !1;
	let o = a[0] + i;
	for (let e = 1; e < a.length; e++) {
		let t = a[e] - i, n = a[e] + i;
		if (t <= o + 1) return !0;
		o = Math.max(o, n);
	}
	return !1;
}
function Qm(e, t) {
	if (e.length <= Jm) return e;
	let n = /* @__PURE__ */ new Map(), r = (t) => {
		t >= 0 && t < e.length && n.set(t, e[t]);
	};
	r(0), r(e.length - 1), r(Math.floor(e.length / 2));
	let i = Math.max(1, Math.floor(e.length / 47)), a = -1, o = 0;
	for (let n = 0; n < e.length; n += i) {
		r(n);
		let i = e[n], s = t ? t(i) : i, c = Array.isArray(s) ? s.join("").length : String(s ?? "").length;
		c > a && (a = c, o = n);
	}
	return r(o), Array.from(n.keys()).sort((e, t) => e - t).map((e) => n.get(e));
}
function $m(e) {
	return f(e) ? lh(e) : !Array.isArray(e) || e.length <= Jm ? e : {
		length: e.length,
		first: e[0],
		middle: e[Math.floor(e.length / 2)],
		last: e[e.length - 1]
	};
}
function eh(e) {
	return e[Ym];
}
function th(e, t) {
	m(t) ? Object.defineProperty(e, Ym, {
		configurable: !0,
		value: t,
		writable: !0
	}) : delete e[Ym];
}
function nh(e) {
	e.length = 0, th(e);
}
function rh(e, t, n) {
	nh(e), e.length = t, th(e, n);
}
function ih(e) {
	let t = [];
	return t.length = e.length, Object.keys(e).forEach((n) => {
		let r = +n;
		t[r] = e[r];
	}), th(t, eh(e)), t;
}
function ah(e, t) {
	nh(e), e.length = t.length, Object.keys(t).forEach((n) => {
		let r = +n;
		e[r] = t[r];
	}), th(e, eh(t));
}
function oh(e, t, n) {
	let r = e[t];
	if (m(r)) return r;
	let i = Number(r);
	return Number.isFinite(i) ? i : n;
}
var sh = /* @__PURE__ */ new WeakMap(), ch = 0;
function lh(e) {
	if (!e || !/^(function|object)$/.test(typeof e)) return `${typeof e}:${String(e)}`;
	let t = sh.get(e);
	return t || (t = ++ch, sh.set(e, t)), `${typeof e}:${t}`;
}
function uh(e) {
	return e instanceof Date ? `date:${+e}` : Array.isArray(e) ? `[${e.map((e) => uh(e)).join(",")}]` : e && typeof e == "object" ? `{${Object.keys(e).sort().map((t) => `${t}:${uh(e[t])}`).join(",")}}` : typeof e == "function" ? lh(e) : `${typeof e}:${String(e)}`;
}
function dh(e) {
	return e instanceof Date ? /* @__PURE__ */ new Date(+e) : Array.isArray(e) ? e.map((e) => dh(e)) : e;
}
function fh(e) {
	return {
		width: e.width,
		height: e.height,
		ticks: e.ticks && ih(e.ticks),
		clipPath: e.clipPath,
		domain: dh(e.domain)
	};
}
function ph(e, t) {
	return e.width = t.width, e.height = t.height, e.clipPath = t.clipPath, e.domain = dh(t.domain), e.ticks && t.ticks && ah(e.ticks, t.ticks), e;
}
var mh = { getAxisInstance: function() {
	return this.axis || new hh(this);
} }, hh = class {
	owner;
	x;
	subX;
	y;
	y2;
	axesList = {};
	tick = {
		x: null,
		y: null,
		y2: null
	};
	xs = [];
	orient = {
		x: "bottom",
		y: "left",
		y2: "right",
		subX: "bottom"
	};
	constructor(e) {
		this.owner = e, this.setOrient();
	}
	getAxisClassName(e) {
		return `${V.axis} ${V[`axis${N(e)}`]}`;
	}
	isHorizontal(e, t) {
		let n = e.config.axis_rotated;
		return t ? n : !n;
	}
	isCategorized() {
		let { config: e, state: t } = this.owner;
		return e.axis_x_type.indexOf("category") >= 0 || t.hasRadar;
	}
	isCustomX() {
		let { config: e } = this.owner;
		return !this.isTimeSeries() && (e.data_x || w(e.data_xs));
	}
	isTimeSeries(e = "x") {
		return this.owner.config[`axis_${e}_type`] === "timeseries";
	}
	isLog(e = "x") {
		return this.owner.config[`axis_${e}_type`] === "log";
	}
	isTimeSeriesY() {
		return this.isTimeSeries("y");
	}
	getAxisType(e = "x") {
		let t = "linear";
		return this.isTimeSeries(e) ? t = this.owner.config.axis_x_localtime ? "time" : "utc" : this.isLog(e) && (t = "log"), t;
	}
	getExtent() {
		let e = this.owner, { config: t, scale: n } = e, r = t.axis_x_extent;
		if (r) {
			if (f(r)) r = r.bind(e.api)(e.getXDomain(e.data.targets), n.subX);
			else if (this.isTimeSeries() && r.every(isNaN)) {
				let t = Fe.bind(e);
				r = r.map((e) => n.subX(t(e)));
			}
		}
		return r;
	}
	init() {
		let e = this.owner, { config: t, $el: { main: n, axis: r }, state: { clip: i } } = e, a = ["x", "y"];
		t.axis_y2_show && a.push("y2"), a.forEach((a) => {
			let o = this.getAxisClassName(a);
			r[a] = n.append("g").attr("class", o).attr("clip-path", () => {
				let e = null;
				return a === "x" ? e = i.pathXAxis : a === "y" && (e = i.pathYAxis), e;
			}).attr("transform", e.getTranslate(a)).style("visibility", t[`axis_${a}_show`] ? null : "hidden"), this.generateAxes(a);
		});
	}
	setOrient() {
		let { axis_rotated: e, axis_y_inner: t, axis_y2_inner: n } = this.owner.config;
		this.orient = {
			x: e ? "left" : "bottom",
			y: e ? t ? "top" : "bottom" : t ? "right" : "left",
			y2: e ? n ? "bottom" : "top" : n ? "left" : "right",
			subX: e ? "left" : "bottom"
		};
	}
	generateAxes(e) {
		let t = this.owner, { config: n } = t, r = [], i = n[`axis_${e}_axes`], a = n.axis_rotated, o;
		e === "x" ? o = a ? Wm : Um : e === "y" ? o = a ? Um : Wm : e === "y2" && (o = a ? Vm : Hm), i.length && i.forEach((n) => {
			let i = n.tick || {}, a = t.scale[e].copy();
			n.domain && a.domain(n.domain), r.push(o(a).ticks(i.count).tickFormat(f(i.format) ? i.format.bind(t.api) : ((e) => e)).tickValues(i.values).tickSizeOuter(i.outer === !1 ? 0 : 6));
		}), this.axesList[e] = r;
	}
	updateAxes() {
		let e = this.owner, { config: t, $el: { main: n }, $T: r } = e;
		Object.keys(this.axesList).forEach((i) => {
			let a = t[`axis_${i}_axes`], o = e.scale[i].copy(), s = o.range();
			this.axesList[i].forEach((c, l) => {
				let u = c.scale().range();
				s.every((e, t) => e === u[t]) || c.scale().range(s);
				let d = `${this.getAxisClassName(i)}-${l + 1}`, f = n.select(`.${d.replace(/\s/, ".")}`);
				f.empty() ? f = n.append("g").attr("class", d).style("visibility", t[`axis_${i}_show`] ? null : "hidden").call(c) : (a[l].domain && o.domain(a[l].domain), r(f).call(c.scale(o))), f.attr("transform", e.getTranslate(i, l + 1));
			});
		});
	}
	setAxis(e, t, n, r) {
		let i = this.owner;
		e !== "subX" && (this.tick[e] = this.getTickValues(e)), this[e] = this.getAxis(e, t, n, e === "x" && (i.scale.zoom || i.config.subchart_show || i.state.resizing) ? !0 : r);
	}
	getAxis(e, t, n, r, i) {
		let a = this.owner, { config: o } = a, s = /^(x|subX)$/.test(e), c = s ? "x" : e, l = s && this.isCategorized(), u = this.orient[e], d = i ? 0 : a.getAxisTickRotate(c), p;
		if (s) p = e === "subX" ? a.format.subXAxisTick : a.format.xAxisTick;
		else {
			let t = o[`axis_${e}_tick_format`];
			f(t) && (p = t.bind(a.api));
		}
		let m = this.tick[c], h = Oe({
			outerTick: n,
			noTransition: r,
			config: o,
			id: e,
			tickTextRotate: d,
			owner: a
		}, s && {
			isCategory: l,
			isInverted: o.axis_x_inverted,
			tickMultiline: o.axis_x_tick_multiline,
			tickWidth: o.axis_x_tick_width,
			tickTitle: l && o.axis_x_tick_tooltip && a.api.categories(),
			orgXScale: a.scale.x
		});
		s || (h.tickStepSize = o[`axis_${c}_tick_stepSize`]);
		let g = new Km(h).scale(s && a.scale.zoom || t).orient(u);
		if (s && this.isTimeSeries() && m && !f(m)) {
			let e = Fe.bind(a);
			m = m.map((t) => e(t));
		} else !s && this.isTimeSeriesY() && (g.ticks(o.axis_y_tick_time_value), m = null);
		m && g.tickValues(m), g.tickFormat(p || !s && a.isStackNormalized() && a.hasAxisGroupedData(e) && ((e) => `${e}%`)), l && (g.tickCentered(o.axis_x_tick_centered), C(o.axis_x_tick_culling) && (o.axis_x_tick_culling = !1));
		let _ = o[`axis_${c}_tick_count`];
		return _ && g.ticks(_), g;
	}
	updateXAxisTickValues(e, t) {
		let n = this.owner, { config: r } = n, i = r.axis_x_tick_fit, a = r.axis_x_tick_count, o;
		return i && (o = n.mapTargetsToUniqueXs(e), this.isCategorized() && a > o.length && (a = o.length), o = this.generateTickValues(o, a, this.isTimeSeries())), t ? t.tickValues(o) : this.x && (this.x.tickValues(o), this.subX?.tickValues(o)), o;
	}
	getId(e) {
		let { config: t, scale: n } = this.owner, r = t.data_axes[e];
		return (!r || !n[r]) && (r = "y"), r;
	}
	getXAxisTickFormat(e) {
		let t = this.owner, { config: n, format: r } = t, i = e && n.subchart_axis_x_tick_format || n.axis_x_tick_format, a = this.isTimeSeries(), o = this.isCategorized(), s;
		return i ? f(i) ? s = i.bind(t.api) : a && (s = (e) => e ? r.axisTime(i)(e) : "") : s = a ? r.defaultAxisTime : o ? t.categoryName : (e) => e < 0 ? e.toFixed(0) : e, f(s) ? (e) => s.apply(t, o ? [e, t.categoryName(e)] : [e]) : s;
	}
	getTickValues(e) {
		let t = this.owner, n = t.config[`axis_${e}_tick_values`], r = t[`${e}Axis`];
		return (f(n) ? n.call(t.api) : n) || (r ? r.tickValues() : void 0);
	}
	getLabelOptionByAxisId(e) {
		return this.owner.config[`axis_${e}_label`];
	}
	getLabelText(e) {
		let t = this.getLabelOptionByAxisId(e);
		return p(t) ? t : t ? t.text : null;
	}
	setLabelText(e, t) {
		let { config: n } = this.owner, r = this.getLabelOptionByAxisId(e);
		p(r) ? n[`axis_${e}_label`] = t : r && (r.text = t);
	}
	getLabelPosition(e, t) {
		let n = this.owner.config.axis_rotated, r = this.getLabelOptionByAxisId(e), i = x(r) && r.position ? r.position : t[+!n], a = (e) => !!~i.indexOf(e);
		return {
			isInner: a("inner"),
			isOuter: a("outer"),
			isLeft: a("left"),
			isCenter: a("center"),
			isRight: a("right"),
			isTop: a("top"),
			isMiddle: a("middle"),
			isBottom: a("bottom")
		};
	}
	getAxisLabelPosition(e) {
		return this.getLabelPosition(e, e === "x" ? ["inner-top", "inner-right"] : ["inner-right", "inner-top"]);
	}
	xForAxisLabel(e) {
		let t = this.owner, { state: { width: n, height: r } } = t, i = this.getAxisLabelPosition(e), a = i.isMiddle ? -r / 2 : 0;
		return this.isHorizontal(t, e !== "x") ? a = i.isLeft ? 0 : i.isCenter ? n / 2 : n : i.isBottom && (a = -r), a;
	}
	textAnchorForAxisLabel(e) {
		let t = this.owner, n = this.getAxisLabelPosition(e), r = n.isMiddle ? "middle" : "end";
		return this.isHorizontal(t, e !== "x") ? r = n.isLeft ? "start" : n.isCenter ? "middle" : "end" : n.isBottom && (r = "start"), r;
	}
	dxForAxisLabel(e) {
		let t = this.owner, n = this.getAxisLabelPosition(e), r = n.isBottom ? "0.5em" : "0";
		return this.isHorizontal(t, e !== "x") ? r = n.isLeft ? "0.5em" : n.isRight ? "-0.5em" : "0" : n.isTop && (r = "-0.5em"), r;
	}
	dyForAxisLabel(e) {
		let t = this.owner, { config: n } = t, r = n.axis_rotated, i = this.getAxisLabelPosition(e).isInner, a = n[`axis_${e}_tick_rotate`] ? t.getHorizontalAxisHeight(e) : 0, { width: o } = this.getMaxTickSize(e), s;
		if (e === "x") {
			let e = n.axis_x_height;
			s = r ? i ? "1.2em" : -25 - o : i ? "-0.5em" : e ? e - 10 : a ? a - 10 : "3em";
		} else s = {
			y: [
				"-0.5em",
				10,
				"3em",
				"1.2em",
				10
			],
			y2: [
				"1.2em",
				-20,
				"-2.2em",
				"-0.5em",
				15
			]
		}[e], s = r ? i ? s[0] : a ? a * (e === "y2" ? -1 : 1) - s[1] : s[2] : i ? s[3] : (s[4] + (n[`axis_${e}_inner`] ? 0 : o + s[4])) * (e === "y" ? -1 : 1);
		return s;
	}
	getTickFormatCacheValue(e) {
		let t = this.owner, { config: n } = t;
		return e === "x" ? {
			format: n.axis_x_tick_format,
			type: n.axis_x_type,
			localtime: n.axis_x_localtime,
			categories: n.axis_x_categories
		} : {
			format: n[`axis_${e}_tick_format`],
			normalized: t.isStackNormalized(),
			grouped: t.hasAxisGroupedData(e),
			type: n[`axis_${e}_type`]
		};
	}
	getMaxTickSizeFingerprint(e, t, n, r, i, a) {
		let { config: o, state: s } = this.owner, c = e === "x", l = c ? "axis_x" : `axis_${e}`, u = r.tickValues();
		return uh({
			id: e,
			withoutRecompute: !!a,
			dataGeneration: s.dataGeneration,
			size: [s.current.width, s.current.height],
			range: t.range?.(),
			domain: n,
			type: t.type,
			orient: this.orient[e],
			axisRotated: o.axis_rotated,
			evalTextSize: o.axis_evalTextSize,
			format: this.getTickFormatCacheValue(e),
			ticks: {
				values: $m(u),
				rawValues: o[`${l}_tick_values`],
				arguments: r.ticks(),
				count: o[`${l}_tick_count`],
				rotate: i,
				show: o[`${l}_tick_show`],
				textShow: o[`${l}_tick_text_show`],
				textPosition: o[`${l}_tick_text_position`],
				inner: o[`${l}_tick_inner`],
				culling: o[`${l}_tick_culling`],
				cullingMax: o[`${l}_tick_culling_max`],
				cullingLines: o[`${l}_tick_culling_lines`],
				cullingReverse: o[`${l}_tick_culling_reverse`],
				stepSize: !c && o[`${l}_tick_stepSize`],
				timeValue: !c && o[`${l}_tick_time_value`],
				fit: c && o.axis_x_tick_fit,
				autorotate: c && o.axis_x_tick_autorotate,
				centered: c && o.axis_x_tick_centered,
				inverted: c && o.axis_x_inverted,
				multiline: c && o.axis_x_tick_multiline,
				width: c && o.axis_x_tick_width
			}
		});
	}
	getMaxTickSize(e, t) {
		let n = this.owner, { config: r, state: i, $el: { svg: a, chart: o } } = n, { current: s, resizing: c } = i, l = s.maxTickSize[e], u = `${J.maxTickSize}_${e}_${!!t}`, d = n.cache.get(u);
		if (d && d.generation === i.redrawGeneration) return l;
		let f = `axis_${e}`, p = {
			width: 0,
			height: 0
		}, h;
		if (c || t || !r[`${f}_show`] || l.width > 0 && n.filterTargetsToShow().length === 0) return l;
		if ((a || r.render_mode === "canvas") && n.scale[e]?.copy) {
			let a = /^y2?$/.test(e), s = n.getTargetsToShow(), c = n.scale[e].copy().domain(n[`get${a ? "Y" : "X"}Domain`](s, e)), g = c.domain(), _ = g[0] === g[1] && g.every((e) => e > 0), v = T(l.domain) && l.domain[0] === l.domain[1] && l.domain.every((e) => e > 0);
			if (_ || v) return l;
			l.domain = g, a || nh(l.ticks);
			let y = this.getAxis(e, c, !1, !1, !0), b = r[`${f}_tick_rotate`], x = r[`${f}_tick_count`];
			if (!r[`${f}_tick_values`] && x && y.tickValues(this.generateTickValues(g, x, a ? this.isTimeSeriesY() : this.isTimeSeries())), !a && this.updateXAxisTickValues(s, y), h = this.getMaxTickSizeFingerprint(e, c, g, y, b, t), d?.fingerprint === h) return n.cache.add(u, {
				...d,
				generation: i.redrawGeneration
			}), ph(l, d.value);
			let S = y.tickValues(), C = !a && Array.isArray(S) && S.length > Jm;
			C && y.tickValues(Qm(S, y.tickFormat()));
			let w = o.append("svg").style("visibility", "hidden").style("position", "fixed").style("top", "0").style("left", "0"), E = w.append("g").attr("class", `${V[`axis${N(e)}`]} ${B.dummy}`);
			y.create(E);
			let { sizeFor1Char: D } = E.node(), O = w.selectAll("text").attr("transform", m(b) ? `rotate(${b})` : null), k = C ? S.length : O.size();
			if (D) O.each(function(e, t) {
				let n = this.textContent.length * D.w, r = D.h;
				p.width = Math.max(p.width, n), p.height = Math.max(p.height, r), a || (l.ticks[t] = n);
			});
			else {
				let e = [];
				if (O.each(function() {
					e.push(this);
				}), (e.length <= 5 ? e : qm(e)).map((e) => Y(e, !0)).forEach((e) => {
					p.width = Math.max(p.width, e.width), p.height = Math.max(p.height, e.height);
				}), !a) for (let t = 0; t < e.length; t++) l.ticks[t] = p.width;
			}
			!a && C && rh(l.ticks, k, p.width), w.remove();
		}
		return Object.keys(p).forEach((e) => {
			p[e] > 0 && (l[e] = p[e]);
		}), n.cache.add(u, {
			fingerprint: h,
			generation: i.redrawGeneration,
			value: fh(l)
		}), l;
	}
	getXAxisTickTextY2Overflow(e) {
		let t = this.owner, { axis: n, config: r, state: { current: i, isLegendRight: a, legendItemWidth: o } } = t, s = t.getAxisTickRotate("x"), c = s > 0 && s < 90;
		if ((n.isCategorized() || n.isTimeSeries()) && r.axis_x_tick_fit && (!r.axis_x_tick_culling || C(r.axis_x_tick_culling)) && !r.axis_x_tick_multiline && c) {
			let n = r.axis_y2_show && i.maxTickSize.y2.width || 0, c = a && o || 0, l = i.width - t.getCurrentPaddingByDirection("left"), u = this.getXAxisTickMaxOverflow(s, l - e) - n - c, d = Math.max(0, u) + e;
			return Math.min(d, l / 2);
		}
		return 0;
	}
	getXAxisTickMaxOverflow(e, t) {
		let n = this.owner, { axis: r, config: i, state: a } = n, o = r.isTimeSeries(), s = a.current.maxTickSize.x.ticks, c = s.length, l = eh(s) ?? a.current.maxTickSize.x.width, { left: u, right: d } = a.axis.x.padding, f = 0, p = c - (o && i.axis_x_tick_fit ? .5 : 0);
		for (let n = 0; n < c; n++) {
			let r = n + 1, i = Math.cos(Math.PI * e / 180) * oh(s, n, l), a = r - (o ? 1 : .5) + u;
			if (a <= 0) continue;
			let c = (t - i) / a, m = p - r, h = d * c, g = m * c + h, _ = i - c / 2 - g;
			f = Math.max(f, _);
		}
		let m = n.getTargetsToShow(), h = 0;
		if (!o && i.axis_x_tick_count <= m.length && m[0].values.length) {
			let e = mf(n.axis.getAxisType("x"), 0, t - f).domain([u * -1, n.getXDomainMax(n.data.targets) + 1 + d]);
			h = (e(1) - e(0)) / 2;
		}
		return f + h;
	}
	updateLabels(e) {
		let { config: t, $el: { main: n }, $T: r } = this.owner, i = t.axis_rotated;
		[
			"x",
			"y",
			"y2"
		].forEach((t) => {
			let a = this.getLabelText(t), o = `axis${N(t)}`, s = V[`${o}Label`];
			if (a) {
				let c = n.select(`text.${s}`);
				c.empty() && (c = n.select(`g.${V[o]}`).insert("text", ":first-child").attr("class", s).attr("transform", ["rotate(-90)", null][t === "x" ? +!i : +i]).style("text-anchor", () => this.textAnchorForAxisLabel(t))), r(c, e).attr("x", () => this.xForAxisLabel(t)).attr("dx", () => this.dxForAxisLabel(t)).attr("dy", () => this.dyForAxisLabel(t)).text(a);
			}
		});
	}
	getPadding(e, t, n, r) {
		let i = m(e) ? e : e[t];
		return d(i) ? this.owner.convertPixelToScale(/(bottom|top)/.test(t) ? "y" : "x", i, r) : n;
	}
	generateTickValues(e, t, n) {
		let r = e;
		if (t) {
			let i = f(t) ? t() : t;
			if (i === 1) r = [e[0]];
			else if (i === 2) r = [e[0], e[e.length - 1]];
			else if (i > 2) {
				let t = this.isCategorized(), a = i - 2, o = e[0], s = e[e.length - 1], c = (s - o) / (a + 1), l;
				r = [o];
				for (let e = 0; e < a; e++) l = +o + c * (e + 1), r.push(n ? new Date(l) : t ? Math.round(l) : l);
				r.push(s);
			}
		}
		return n || (r = r.sort((e, t) => e - t)), r;
	}
	generateTransitions(e) {
		let { $el: { axis: t }, $T: n } = this.owner, [r, i, a, o] = [
			"x",
			"y",
			"y2",
			"subX"
		].map((r) => n(t[r], e));
		return {
			axisX: r,
			axisY: i,
			axisY2: a,
			axisSubX: o
		};
	}
	redraw(e, t, n) {
		let { config: r, state: i, $el: a } = this.owner, o = t ? "0" : null;
		[
			"x",
			"y",
			"y2",
			"subX"
		].forEach((t) => {
			let i = this[t], s = a.axis[t];
			i && s && (!n && !r.transition_duration && (i.config.withoutTransition = !0), s.style("opacity", o), i.create(e[`axis${N(t)}`]));
		}), this.updateAxes(), !i.rendered && r.axis_tooltip && this.setAxisTooltip();
	}
	syncAxisDomains(e, t, n) {
		let r = this.owner, { config: i, scale: a, $el: o } = r, s = !!a.zoom, c;
		!s && this.isCategorized() && e.length === 0 && o.axis.x && a.x.domain([0, o.axis.x.selectAll(".tick").size()]), a.x && e.length ? (!s && r.updateXDomain(e, t.UpdateXDomain, t.UpdateOrgXDomain, t.TrimXDomain), i.axis_x_tick_values || this.updateXAxisTickValues(e)) : this.x && (this.x.tickValues([]), this.subX?.tickValues([])), i.zoom_rescale && !n && (c = a.x.orgDomain()), ["y", "y2"].forEach((t) => {
			let n = `axis_${t}_`, o = a[t];
			if (o) {
				let a = i[`${n}tick_values`], s = i[`${n}tick_count`];
				if (o.domain(r.getYDomain(e, t, c)), !a && s) {
					let e = r.axis[t], n = o.domain();
					e.tickValues(this.generateTickValues(n, n.every((e) => e === 0) ? 1 : s, this.isTimeSeriesY()));
				}
			}
		}), t.Y && (a.subY?.domain(r.getYDomain(e, "y")), a.subY2?.domain(r.getYDomain(e, "y2")));
	}
	redrawAxis(e, t, n, r, i) {
		let a = this.owner;
		this.syncAxisDomains(e, t, r), this.redraw(n, a.hasArcType(), i), this.updateLabels(t.Transition), (t.UpdateXDomain || t.UpdateXAxis || t.Y) && e.length && this.setCulling();
	}
	setCulling() {
		let { config: e, state: { clip: t, current: n }, $el: r } = this.owner;
		[
			"subX",
			"x",
			"y",
			"y2"
		].forEach((i) => {
			let a = r.axis[i], o = `axis_${i === "subX" ? "x" : i}_tick_culling`, s = e[o];
			if (a && s) {
				let s = a.selectAll(".tick"), c = ke(s.data(), !e[`${o}_reverse`]), l = c.length, u = e[`${o}_max`], d = !e[`${o}_lines`] || Zm(this[i], c, Xm(s)), f;
				if (l) {
					for (let e = 1; e < l; e++) if (l / e < u) {
						f = e;
						break;
					}
					f ??= l;
					let e = /* @__PURE__ */ new Map();
					for (let t = 0; t < c.length; t++) e.set(c[t], t);
					s.each(function(t) {
						let n = d ? this : this.querySelector("text");
						n && (n.style.display = (e.get(t) ?? 0) % f ? "none" : null);
					});
				} else s.style("display", null);
				if (i === "x") {
					let e = n.maxTickSize.x.clipPath ? t.pathXAxisTickTexts : null;
					r.svg.selectAll(`.${V.axisX} .tick text`).attr("clip-path", e);
				}
			}
		});
	}
	setAxisTooltip() {
		let e = this.owner, { config: { axis_rotated: t, axis_tooltip: n }, $el: { axis: r, axisTooltip: i } } = e, a = n.backgroundColor ?? "black";
		e.generateTextBGColorFilter(a, {
			x: -.15,
			y: -.2,
			width: 1.3,
			height: 1.3
		}), [
			"x",
			"y",
			"y2"
		].forEach((n) => {
			if (p(a) || a[n]) if (i[n] = r[n]?.append("text").classed(V[`axis${n.toUpperCase()}Tooltip`], !0).attr("filter", e.updateTextBGColor({ id: n }, a)), t) {
				let e = n === "x" ? "x" : "y", t = n === "y" ? "1.15em" : n === "x" ? "-0.3em" : "-0.4em";
				i[n]?.attr(e, t).attr(`d${n === "x" ? "y" : "x"}`, n === "x" ? "0.4em" : "-1.3em").style("text-anchor", n === "x" ? "end" : null);
			} else {
				let e = n === "x" ? "y" : "x", t = n === "x" ? "1.15em" : `${n === "y" ? "-" : ""}0.4em`;
				i[n]?.attr(e, t).attr(`d${n === "x" ? "x" : "y"}`, n === "x" ? "-1em" : "0.3em").style("text-anchor", n === "y" ? "end" : null);
			}
		});
	}
}, gh = {
	initEventRect() {
		this.$el.main.select(`.${B.chart}`).append("g").attr("class", Ma.eventRects).style("fill-opacity", "0");
	},
	redrawEventRect() {
		let e = this, { config: t, state: n, $el: r } = e, i = e.isMultipleX(), a = t.axis_x_inverted;
		if (r.eventRect) e.updateEventRect(r.eventRect, !0);
		else if (e.data.targets.length) {
			let a = e.$el.main.select(`.${Ma.eventRects}`).style("cursor", t.zoom_enabled && t.zoom_type !== "drag" ? t.axis_rotated ? "ns-resize" : "ew-resize" : null).classed(Ma.eventRectsMultiple, i).classed(Ma.eventRectsSingle, !i).selectAll(`.${Ma.eventRect}`).data([0]).enter().append("rect");
			e.updateEventRect(a), e.updateEventType(a), a.call(e.getDraggableSelection()), r.eventRect = a, e.state.inputType === "touch" && !r.svg.on("touchstart.eventRect") && !e.hasArcType() && e.bindTouchOnEventRect(), n.rendered && e.updateEventRect(r.eventRect, !0);
		}
		if (!i) {
			let r = e.getMaxDataCountTarget();
			(!t.data_xSort || a) && r.sort((e, t) => a ? t.x - e.x : e.x - t.x), e.updateDataIndexByX(r), e.updateXs(r), e.updatePointClass?.(!0), n.eventReceiver.data = r;
		}
		e.updateEventRectData();
	},
	bindTouchOnEventRect() {
		let e = this, { config: t, state: n, $el: { eventRect: r, svg: i } } = e, a = (t) => {
			if (e.isMultipleX()) e.selectRectForMultipleXs(t);
			else {
				let r = e.getDataIndexFromEvent(n.event);
				e.callOverOutForTouch(r), r === -1 ? e.unselectRect() : e.selectRectForSingle(t, r);
			}
		}, o = () => {
			e.unselectRect(), e.callOverOutForTouch();
		}, s = t.interaction_inputType_touch.preventDefault, c = _(s) && s || !1, l = !isNaN(s) && s || null, u, d = !c && l === null, f = (e) => {
			let n = e.type, r = e.changedTouches[0][`client${t.axis_rotated ? "Y" : "X"}`];
			n === "touchstart" ? c ? e.preventDefault() : l !== null && (u = r) : n === "touchmove" && (c || u === !0 || l !== null && Math.abs(u - r) >= l) && (u = !0, e.preventDefault());
		};
		r.on("touchstart", (t) => {
			n.event = t, e.updateEventRect();
		}, { passive: d }).on("touchstart.eventRect touchmove.eventRect", (t) => {
			if (n.event = t, !r.empty() && r.classed(Ma.eventRect)) {
				if (n.dragging || n.flowing || e.hasArcType() || t.touches.length > 1) return;
				f(t), a(r.node());
			} else o();
		}, { passive: d }).on("touchend.eventRect", (t) => {
			n.event = t, !r.empty() && r.classed(Ma.eventRect) && (e.hasArcType() || !e.toggleShape || n.cancelClick) && (n.cancelClick &&= !1);
		}, { passive: d }), i.on("touchstart", (e) => {
			n.event = e;
			let { target: t } = e;
			t && t !== r.node() && o();
		}, { passive: d });
	},
	updateEventRect(e, t = !1) {
		let { state: n, $el: r } = this, { eventReceiver: i, width: a, height: o, rendered: s, resizing: c } = n, l = e || r.eventRect;
		(!s || c || t) && (l.attr("x", 0).attr("y", 0).attr("width", a).attr("height", o), (!s || t) && l.classed(Ma.eventRect, !0)), (() => {
			if (i) {
				let e = lo(r.chart.node());
				i.rect = Y(l.node(), !0).toJSON(), i.rect.top += e.y, i.rect.left += e.x;
			}
		})();
	},
	updateEventType(e) {
		let t = this, n = _(e), r = n ? t.$el.eventRect : e, i = n ? e !== r?.datum().multipleX : !1;
		r && (i && r?.on("mouseover mousemove mouseout click", null), t.isMultipleX() ? t.generateEventRectsForMultipleXs(r) : t.generateEventRectsForSingleX(r));
	},
	updateEventRectData() {
		let e = this, { config: t, scale: n, state: r } = e, i = n.zoom || n.x, a = t.axis_rotated, o = e.isMultipleX(), s = i?.domain(), c = s ? `${s[0]}_${s[1]}_${r.width}_${r.height}_${e.data.targets.length}_${r.dataGeneration}_${[...r.hiddenTargetIds].join(",")}` : null;
		if (c && c === r._eventRectFingerprint) return;
		r._eventRectFingerprint = c;
		let l, u, d, p;
		if (e.updateEventType(o), o) l = 0, u = 0, d = r.width, p = r.height;
		else {
			let t, n;
			if (e.axis.isCategorized()) t = e.getEventRectWidth(), n = (e) => i(e.x) - t / 2;
			else {
				let o = ({ index: t }) => ({
					prev: e.getPrevX(t),
					next: e.getNextX(t)
				});
				t = (e) => {
					let t = o(e), n = i.domain(), s;
					return s = t.prev === null && t.next === null ? a ? r.height : r.width : t.prev === null ? (i(t.next) + i(e.x)) / 2 : t.next === null ? i(n[1]) - (i(t.prev) + i(e.x)) / 2 : Math.max(0, (i(t.next) - i(t.prev)) / 2), s;
				}, n = (e) => {
					let t = o(e), n;
					return n = t.prev === null && t.next === null ? 0 : t.prev === null ? i(i.domain()[0]) : (i(e.x) + i(t.prev)) / 2, n;
				};
			}
			l = a ? 0 : n, u = a ? n : 0, d = a ? r.width : t, p = a ? t : r.height;
		}
		let { eventReceiver: m } = r, h = (e, t) => f(e) ? e(t) : e;
		m.coords.splice(m.data.length), m.data.forEach((e, t) => {
			m.coords[t] = {
				x: h(l, e),
				y: h(u, e),
				w: h(d, e),
				h: h(p, e)
			};
		});
	},
	selectRectForSingle(e, t) {
		let n = this, { config: r, state: i, $el: { main: a, circle: o } } = n, s = r.data_selection_enabled, c = r.data_selection_grouped, l = r.data_selection_isselectable, u = r.tooltip_grouped, d = n.getAllValuesOnIndex(t);
		if (u && (n.showTooltip(d, e), n.showGridFocus?.(d), !s || c)) return;
		!o && a.selectAll(`.${B.EXPANDED}:not(.${G.shape}-${t})`).classed(B.EXPANDED, !1);
		let f = a.selectAll(`.${G.shape}-${t}`).classed(B.EXPANDED, !0).style("cursor", l ? "pointer" : null).filter(function(e) {
			return n.isWithinShape(this, e);
		});
		if (f.call((r) => {
			let i = r.data();
			s && (c || l?.bind(n.api)(i)) && (e.style.cursor = "pointer"), u || (n.showTooltip(i, e), n.showGridFocus?.(i), n.unexpandCircles?.(), r.each((e) => n.setExpand(t, e.id)));
		}), !u && f.empty()) {
			let a = oo(i.event, e), o = d.filter((e) => n.isTargetToShow(e.id) ? n.dist(e, a) < n.getPointSensitivity(e) : !1);
			if (o.length > 0) {
				let r = o[0], i = n.dist(r, a);
				for (let e = 1; e < o.length; e++) {
					let t = o[e], s = n.dist(t, a);
					s < i && (i = s, r = t);
				}
				n.showTooltip([r], e), n.showGridFocus?.([r]), n.unexpandCircles?.(), n.setExpand(t, r.id, !0), s && (c || l?.bind(n.api)(r)) && (e.style.cursor = "pointer");
			} else r.interaction_onout && (n.hideGridFocus?.(), n.hideTooltip(), !c && n.setExpand(t));
		}
	},
	selectRectForMultipleXs(e, t = !0) {
		let n = this, { config: r, state: i } = n, a = n.getTargetsToShow();
		if (i.dragging || n.hasArcType(a)) return;
		let o = oo(i.event, e), s = n.findClosestFromTargets(a, o);
		if (t && i.mouseover && (!s || s.id !== i.mouseover.id) && (r.data_onout.call(n.api, i.mouseover), i.mouseover = void 0), !s) {
			n.unselectRect();
			return;
		}
		let c = (n.isBubbleType(s) || n.isScatterType(s) || !r.tooltip_grouped ? [s] : n.filterByX(a, s.x)).map((e) => n.addName(e));
		n.showTooltip(c, e), n.setExpand(s.index, s.id, !0), n.showGridFocus?.(c);
		let l = n.dist(s, o);
		(n.isBarType(s.id) || l < n.getPointSensitivity(s)) && (n.$el.eventRect.style("cursor", "pointer"), t && (!i.mouseover || i.mouseover.x !== s.x || i.mouseover.id !== s.id) && (r.data_onover.call(n.api, s), i.mouseover = s));
	},
	unselectRect() {
		let e = this, { state: t, $el: { circle: n, tooltip: r } } = e;
		if (t._lastTooltipMouse = null, t.isCanvasMode) {
			e.clearCanvasFocus?.(), r && e.hideTooltip();
			return;
		}
		e.$el.eventRect?.style("cursor", null), e.hideGridFocus?.(), r && (e.hideTooltip(), e._handleLinkedCharts(!1)), n && !e.isPointFocusOnly() && e.unexpandCircles(), e.expandBarTypeShapes(!1);
	},
	generateEventRectsForSingleX(e) {
		let t = this, { config: n, state: r } = t, { eventReceiver: i } = r, a = e.style("cursor", n.data_selection_enabled && n.data_selection_grouped ? "pointer" : null).on("click", function(e) {
			r.event = e;
			let { currentIdx: n, data: a } = i, o = a[n === -1 ? t.getDataIndexFromEvent(e) : n];
			t.clickHandlerForSingleX.bind(this)(o, t);
		}).datum({ multipleX: !1 });
		if (r.inputType === "mouse") {
			let e = (e) => {
				let n = e ? t.getDataIndexFromEvent(e) : i.currentIdx;
				return n > -1 ? i.data[n] : null;
			};
			a.on("mouseover", (e) => {
				r.event = e, t.updateEventRect(), Object.values(t.$el.axisTooltip).forEach((e) => e?.style("display", null));
			}).on("mousemove", function(a) {
				let o = e(a);
				if (r.event = a, !o) return;
				let { index: s } = o, c = n.line_step_type;
				if (n.line_step_tooltipMatch && t.hasType("step") && /^step\-(before|after)$/.test(c)) {
					let e = t.scale.zoom || t.scale.x, n = t.axis.xs[s], r = e.invert(oo(a, this)[0]);
					c === "step-after" && r < n ? --s : c === "step-before" && r > n && (s += 1);
				}
				t.showAxisGridFocus();
				let l = n.tooltip_grouped && s === i.currentIdx;
				if (r.dragging || r.flowing || t.hasArcType() || l) {
					if (n.tooltip_show && l) {
						let [e, n] = oo(a, this), i = r._lastTooltipMouse;
						(!i || (e - i[0]) ** 2 + (n - i[1]) ** 2 >= 9) && (r._lastTooltipMouse = [e, n], t.setTooltipPosition());
					}
					return;
				}
				s !== i.currentIdx && (t.setOverOut(!1, i.currentIdx), i.currentIdx = s), s === -1 ? t.unselectRect() : t.selectRectForSingle(this, s), t.setOverOut(s !== -1, s);
			}).on("mouseout", (e) => {
				r.event = e, !(!t.config || t.hasArcType() || i.currentIdx === -1 || !n.interaction_onout) && (t.hideAxisGridFocus(), t.unselectRect(), t.setOverOut(!1, i.currentIdx), i.currentIdx = -1);
			});
		}
		return a;
	},
	clickHandlerForSingleX(e, t) {
		let n = t, { config: r, state: i, $el: { main: a } } = n;
		if (!e || n.hasArcType() || i.cancelClick) {
			i.cancelClick &&= !1;
			return;
		}
		let { index: o } = e;
		a.selectAll(`.${G.shape}-${o}`).each(function(e) {
			(r.data_selection_grouped || n.isWithinShape(this, e)) && (n.toggleShape?.(this, e, o), r.data_onclick.bind(n.api)(e, this));
		});
	},
	generateEventRectsForMultipleXs(e) {
		let t = this, { config: n, state: r } = t;
		e.on("click", function(e) {
			r.event = e, t.clickHandlerForMultipleXS.bind(this)(t);
		}).datum({ multipleX: !0 }), r.inputType === "mouse" && e.on("mouseover mousemove", function(e) {
			r.event = e, t.selectRectForMultipleXs(this);
		}).on("mouseout", (e) => {
			r.event = e, !(!t.config || t.hasArcType() || !n.interaction_onout) && t.unselectRect();
		});
	},
	clickHandlerForMultipleXS(e) {
		let t = e, { config: n, state: r } = t, i = t.getTargetsToShow();
		if (t.hasArcType(i)) return;
		let a = oo(r.event, this), o = t.findClosestFromTargets(i, a);
		if (!o) return;
		let s = t.getPointSensitivity(o);
		(t.isBarType(o.id) || t.dist(o, a) < s) && t.$el.main.selectAll(`.${G.shapes}${t.getTargetSelectorSuffix(o.id)}`).selectAll(`.${G.shape}-${o.index}`).each(function() {
			(n.data_selection_grouped || t.isWithinShape(this, o)) && (t.toggleShape?.(this, o, o.index), n.data_onclick.bind(t.api)(o, this));
		});
	}
}, _h = {
	initClip() {
		let e = this, { clip: t, datetimeId: n } = e.state;
		t.id = `${n}-clip`, t.idXAxis = `${t.id}-xaxis`, t.idYAxis = `${t.id}-yaxis`, t.idGrid = `${t.id}-grid`, t.path = e.getClipPath(t.id), t.pathXAxis = e.getClipPath(t.idXAxis), t.pathYAxis = e.getClipPath(t.idYAxis), t.pathGrid = e.getClipPath(t.idGrid);
	},
	getClipPath(e) {
		let { config: t } = this;
		return !t.clipPath && /-clip$/.test(e) || !t.axis_x_clipPath && /-clip-xaxis$/.test(e) || !t.axis_y_clipPath && /-clip-yaxis$/.test(e) ? null : `url(#${e})`;
	},
	appendClip(e, t) {
		t && e.append("clipPath").attr("id", t).append("rect");
	},
	setXAxisClipPath(e) {
		let { config: t, state: { margin: n, width: r, height: i } } = this, a = t.axis_rotated, o = Math.max(30, n.left) - (a ? 0 : 20), s = (a ? n.top + i + 10 : n.bottom) + 20, c = a ? -(1 + o) : -(o - 1), l = a ? n.left + 20 : r + 10 + o;
		e.attr("x", c).attr("y", -15).attr("width", l).attr("height", s);
	},
	setYAxisClipPath(e) {
		let { config: t, state: { margin: n, width: r, height: i } } = this, a = t.axis_rotated, o = Math.max(30, n.left) - (a ? 20 : 0), s = t.axis_y_inner, c = s && !a ? t.axis_y_label.text ? -20 : -1 : a ? -(1 + o) : -(o - 1), l = -(a ? 20 : n.top), u = (a ? r + 15 + o : n.left + 20) + (s ? 20 : 0), d = (a ? n.bottom + 10 : n.top + i) + 10;
		e.attr("x", c).attr("y", l).attr("width", u).attr("height", d);
	},
	updateXAxisTickClip() {
		let e = this, { config: t, state: { clip: n, xAxisHeight: r }, $el: { defs: i } } = e, a = e.getHorizontalAxisHeight("x");
		if (i && !n.idXAxisTickTexts) {
			let t = `${n.id}-xaxisticktexts`;
			e.appendClip(i, t), n.idXAxisTickTexts = t, n.pathXAxisTickTexts = e.getClipPath(n.idXAxisTickTexts);
		}
		!t.axis_x_tick_multiline && e.getAxisTickRotate("x") && a !== r && (e.setXAxisTickClipWidth(), e.setXAxisTickTextClipPathWidth()), e.state.xAxisHeight = a;
	},
	setXAxisTickClipWidth() {
		let e = this, { config: t, state: { current: { maxTickSize: n } } } = e, r = e.getAxisTickRotate("x");
		if (!t.axis_x_tick_multiline && r) {
			let t = Math.sin(Math.PI / 180 * Math.abs(r));
			n.x.clipPath = (e.getHorizontalAxisHeight("x") - 20) / t;
		} else n.x.clipPath = null;
	},
	setXAxisTickTextClipPathWidth() {
		let { state: { clip: e, current: t }, $el: { svg: n } } = this;
		n && n.select(`#${e.idXAxisTickTexts} rect`).attr("width", t.maxTickSize.x.clipPath).attr("height", 30);
	}
}, vh = {
	getAxisSize(e) {
		let t = this, n = t.config.axis_rotated;
		return n && e === "x" || !n && /y2?/.test(e) ? t.getAxisWidthByAxisId(e, !0) : t.getHorizontalAxisHeight(e);
	},
	getAxisWidthByAxisId(e, t) {
		let n = this;
		if (n.axis) {
			let r = n.axis?.getAxisLabelPosition(e), { width: i } = n.axis.getMaxTickSize(e, t), a = i === 0 ? .5 : 0;
			return i + (n.config.padding?.mode === "fit" ? r.isInner ? 10 + a : 10 : r.isInner ? 20 + a : 40);
		}
		return 40;
	},
	getHorizontalAxisHeight(e) {
		let t = this, { config: n, state: r } = t, { rotatedPadding: i, isLegendRight: a, isLegendInset: o } = r, s = n.axis_rotated, c = n.padding?.mode === "fit", l = n[`axis_${e}_inner`], u = n[`axis_${e}_label`].text, d = n.padding?.mode === "fit" ? l && !u ? +(e === "y") : 20 : 30;
		if (e === "x" && !n.axis_x_show) return 8;
		if (e === "x" && m(n.axis_x_height)) return n.axis_x_height;
		if (e === "y" && !n.axis_y_show) return n.legend_show && !a && !o ? 10 : 1;
		if (e === "y2" && !n.axis_y2_show) return c ? 0 : i.top;
		let f = t.axis.getMaxTickSize(e), p = Math.abs(n.axis_x_tick_rotate) > 0 && (!n.axis_x_tick_autorotate || t.needToRotateXAxisTickTexts());
		return (n.axis_x_tick_multiline || p) && f.height > 13 && (d += f.height - 13), d + (t.axis.getAxisLabelPosition(e).isInner ? 0 : 10) + (e === "y2" && !s ? -10 : 0);
	},
	getEventRectWidth() {
		let { config: e, axis: t } = this, n = e.axis_x_inverted, r = t.x.tickInterval();
		return Math.max(0, n ? Math.abs(r) : r);
	},
	getAxisTickRotate(e) {
		let t = this, { axis: n, config: r, state: i, $el: a } = t, o = r[`axis_${e}_tick_rotate`];
		if (e === "x") {
			let e = n.isCategorized() || n.isTimeSeries();
			if (r.axis_x_tick_fit && e) {
				let e = r.axis_x_tick_count, n = i.current.maxTickSize.x.ticks.length, a = 0;
				if (e ? a = e > n ? n : e : n && (a = n), a !== i.axis.x.tickCount) {
					let { targets: e } = t.data;
					i.axis.x.padding = t.getXDomainPadding([t.getXDomainMinMax(e, "min"), t.getXDomainMinMax(e, "max")], a);
				}
				i.axis.x.tickCount = a;
			}
			(a.svg || i.isCanvasMode) && r.axis_x_tick_autorotate && r.axis_x_tick_fit && !r.axis_x_tick_multiline && !r.axis_x_tick_culling && e && (o = t.needToRotateXAxisTickTexts() ? r.axis_x_tick_rotate : 0);
		}
		return o;
	},
	needToRotateXAxisTickTexts() {
		let e = this, { state: { axis: t, current: n, isLegendRight: r, legendItemWidth: i } } = e, a = r && i, o = n.width - a - e.getCurrentPaddingByDirection("left") - e.getCurrentPaddingByDirection("right"), s = t.x.tickCount + t.x.padding.left + t.x.padding.right, { width: c } = e.axis.getMaxTickSize("x");
		return c > (s ? o / s : 0);
	}
}, yh = {
	axis_x_clipPath: !0,
	axis_x_show: !0,
	axis_x_forceAsSingle: !1,
	axis_x_type: "indexed",
	axis_x_localtime: !0,
	axis_x_categories: [],
	axis_x_tick_centered: !1,
	axis_x_tick_format: void 0,
	axis_x_tick_culling: {},
	axis_x_tick_culling_max: 10,
	axis_x_tick_culling_lines: !0,
	axis_x_tick_culling_reverse: !1,
	axis_x_tick_count: void 0,
	axis_x_tick_inner: !1,
	axis_x_tick_show: !0,
	axis_x_tick_text_show: !0,
	axis_x_tick_text_inner: !1,
	axis_x_tick_text_position: {
		x: 0,
		y: 0
	},
	axis_x_tick_fit: !0,
	axis_x_tick_values: null,
	axis_x_tick_autorotate: !1,
	axis_x_tick_rotate: 0,
	axis_x_tick_outer: !0,
	axis_x_tick_multiline: !0,
	axis_x_tick_width: null,
	axis_x_tick_tooltip: !1,
	axis_x_max: void 0,
	axis_x_min: void 0,
	axis_x_inverted: !1,
	axis_x_padding: {},
	axis_x_height: void 0,
	axis_x_extent: void 0,
	axis_x_label: {},
	axis_x_axes: []
}, bh = {
	axis_y_clipPath: !0,
	axis_y_show: !0,
	axis_y_type: "indexed",
	axis_y_max: void 0,
	axis_y_min: void 0,
	axis_y_inverted: !1,
	axis_y_center: void 0,
	axis_y_inner: !1,
	axis_y_label: {},
	axis_y_tick_format: void 0,
	axis_y_tick_culling: !1,
	axis_y_tick_culling_max: 5,
	axis_y_tick_culling_lines: !0,
	axis_y_tick_culling_reverse: !1,
	axis_y_tick_inner: !1,
	axis_y_tick_outer: !0,
	axis_y_tick_values: null,
	axis_y_tick_rotate: 0,
	axis_y_tick_count: void 0,
	axis_y_tick_show: !0,
	axis_y_tick_stepSize: null,
	axis_y_tick_text_show: !0,
	axis_y_tick_text_position: {
		x: 0,
		y: 0
	},
	axis_y_tick_time_value: void 0,
	axis_y_padding: {},
	axis_y_default: void 0,
	axis_y_axes: []
}, xh = {
	axis_y2_show: !1,
	axis_y2_type: "indexed",
	axis_y2_max: void 0,
	axis_y2_min: void 0,
	axis_y2_inverted: !1,
	axis_y2_center: void 0,
	axis_y2_inner: !1,
	axis_y2_label: {},
	axis_y2_tick_format: void 0,
	axis_y2_tick_culling: !1,
	axis_y2_tick_culling_max: 5,
	axis_y2_tick_culling_lines: !0,
	axis_y2_tick_culling_reverse: !1,
	axis_y2_tick_inner: !1,
	axis_y2_tick_outer: !0,
	axis_y2_tick_values: null,
	axis_y2_tick_rotate: 0,
	axis_y2_tick_count: void 0,
	axis_y2_tick_show: !0,
	axis_y2_tick_stepSize: null,
	axis_y2_tick_text_show: !0,
	axis_y2_tick_text_position: {
		x: 0,
		y: 0
	},
	axis_y2_padding: {},
	axis_y2_default: void 0,
	axis_y2_axes: []
}, Sh = {
	axis_evalTextSize: !0,
	axis_rotated: !1,
	axis_tooltip: !1,
	...yh,
	...bh,
	...xh
}, Ch = {
	data_xs: {},
	data_xFormat: "%Y-%m-%d",
	data_xLocaltime: !0,
	data_xSort: !0,
	data_axes: {},
	data_regions: {},
	data_stack_normalize: !1
}, wh = [
	Em,
	Dm,
	Om
], Th = {
	axis: mh,
	clip: _h,
	eventrect: gh,
	sizeAxis: vh
}, Eh = {
	optDataAxis: Ch,
	optAxis: Sh
};
//#endregion
//#region node_modules/billboard.js/dist-esm/config/resolver/axis.core.js
function Dh(e) {
	return Object.keys(e).map((t) => e[t]);
}
function Oh(e = [], t = []) {
	Te(am.prototype, Dh(Th).concat(e)), Te(_m.prototype, wh), Xa.setOptions(Dh(Eh).concat(t));
}
//#endregion
//#region node_modules/billboard.js/dist-esm/config/resolver/shape/axis.helpers.js
function kh(e = [], t = []) {
	Oh(e, t);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/shape/core/barRadius.js
function Ah(e) {
	let { bar_radius: t, bar_radius_ratio: n } = e.config;
	return m(t) && t > 0 ? () => t : m(n) ? (e) => e * n : null;
}
function jh(e) {
	let { config: t, data: n } = e, r = /* @__PURE__ */ new Set();
	if (!t.data_groups.length) return r;
	let i = e.orderTargets(e.filterTargetsToShow(n.targets.filter(e.isBarType, e)));
	for (let e of t.data_groups) {
		let t = new Set(e), n = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
		for (let e of i) if (t.has(e.id)) for (let t of e.values) t.value !== null && t.value !== 0 && (t.value > 0 ? n : a).set(t.index, e.id);
		for (let [e, t] of n) r.add(`${t}:${e}`);
		for (let [e, t] of a) r.add(`${t}:${e}`);
	}
	return r;
}
function Mh(e, t, n) {
	return n ? e ? t ? {
		tl: n,
		bl: n
	} : {
		tr: n,
		br: n
	} : t ? {
		br: n,
		bl: n
	} : {
		tl: n,
		tr: n
	} : 0;
}
function Nh(e, t, n, r) {
	let i = "";
	return n ? r && e[0] < t ? i = `0 ${t - e[0]}px 0 0` : !r && e[0] > t && (i = `0 0 0 ${e[0] - t}px`) : r && e[1] > t ? i = `${e[1] - t}px 0 0 0` : !r && e[1] < t && (i = `0 0 ${t - e[1]}px 0`), i ? `inset(${i})` : null;
}
function Ph(e, t, n, r, i, a) {
	let { config: o, state: s } = e, c = o.axis_rotated, l = +c, u = +!l, d = t.value < 0, f = o[`axis_${e.axis.getId(t.id)}_inverted`], p = !f && d || f && !d, m = e.isGrouped(t.id), h = r && m && t.value !== 0 ? s.hiddenTargetIds.has(t.id) && a ? a(t) : i.has(`${t.id}:${t.index}`) : !1, g = [n[0][l], n[0][u]], _ = 0;
	if (r) {
		let e = c ? u : l, t = Math.abs(n[2][e] - n[0][e]);
		_ = Math.max(0, !m || h ? r(t) : 0);
	}
	let v = c ? n[1][l] + (p ? _ : -_) : n[1][u] + (p ? -_ : _);
	return {
		radius: _,
		corners: Mh(c, p, _),
		clipPath: _ ? Nh(g, v, c, p) : null,
		indexX: l,
		indexY: u,
		isNegative: p,
		pos: v
	};
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/shape/bar.js
function Fh(e) {
	let t = this.config.bar_connectLine, n = t?.[e] || t;
	return /^(start|end)\-(start|end)$/.test(n) ? n : null;
}
var Ih = {
	initBar() {
		let { $el: e, config: t, state: { clip: n } } = this;
		e.bar = e.main.select(`.${B.chart}`), e.bar = t.bar_front ? e.bar.append("g") : e.bar.insert("g", ":first-child"), e.bar.attr("class", H.chartBars).call(this.setCssRule(!1, `.${H.chartBars}`, ["pointer-events:none"])), t.clipPath === !1 && (t.bar_radius || t.bar_radius_ratio) && e.bar.attr("clip-path", n.pathXAxis.replace(/#[^)]*/, `#${n.id}`));
	},
	updateTargetsForBar(e) {
		let t = this, { config: n } = t, r = t.getClass("bars", !0), i = n.interaction_enabled && n.data_selection_isselectable;
		tm.call(t, e, {
			type: "Bar",
			elKey: "bar",
			containerClass: H.chartBars,
			itemClass: H.chartBar,
			initFn: t.initBar
		}).append("g").attr("class", r).style("cursor", (e) => i?.bind?.(t.api)(e) ? "pointer" : null).call((e) => {
			t.setCssRule(!0, ` .${H.bar}`, ["fill"], t.color)(e), e.each(function(e) {
				Fh.call(t, e.id) && F(this).append("path").attr("class", H.barConnectLine);
			});
		});
	},
	updateBar(e, t = !1) {
		let n = this;
		if (n.state.isCanvasMode) return;
		let { config: r, $el: i, $T: a } = n, o = t ? i.subchart : i, s = n.getClass("bar", !0), c = n.initialOpacity.bind(n);
		r.bar_linearGradient && n.updateLinearGradient();
		let l = o.main.selectAll(`.${H.bars}`).selectAll(`.${H.bar}`).data(n.labelishData.bind(n));
		a(l.exit(), e).style("opacity", "0").remove(), o.bar = l.enter().append("path").attr("class", s).style("fill", n.generateUpdateBarColor()).merge(l).style("opacity", c), n.setRatioForGroupedData(o.bar.data());
	},
	generateUpdateBarColor() {
		let e = this, t = e.getStylePropValue(e.color) || (() => null);
		return (n) => em.call(e, n, "bar_linearGradient", t);
	},
	updateBarColor(e) {
		return this.generateUpdateBarColor()(e);
	},
	redrawBar(e, t, n = !1) {
		let r = this;
		if (r.state.isCanvasMode) return [];
		let { bar: i } = n ? r.$el.subchart : r.$el, a = [], o = /* @__PURE__ */ new Map();
		return [r.$T(i, t, Me()).attr("d", function(n, i, s) {
			let c = (m(n.value) || r.isBarRangeType(n)) && e(n, i), l = o.get(n.id);
			if (l === void 0 && (l = Fh.call(r, n.id), o.set(n.id, l)), c.length > 1 && a.push(c[1]), i === s.length - 1 && a.length) {
				let e = r.$T(F(this.parentNode.querySelector(`.${H.barConnectLine}`)), t, Me());
				r.updateConnectLine(e, l, a), a.splice(0);
			}
			return c[0];
		}).style("fill", r.generateUpdateBarColor()).style("clip-path", (e) => e.clipPath).style("opacity", null)];
	},
	generateDrawBar(e, t) {
		let n = this, { config: r } = n, i = n.generateGetBarPoints(e, t), a = Ah(n), o = a ? jh(n) : /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
		return (e, t) => {
			let c = i(e, t), { indexX: l, indexY: u, isNegative: d, pos: f, radius: p, clipPath: m } = Ph(n, e, c, a, o, n.isStackingRadiusData.bind(n)), h = ["", ""];
			if (e.clipPath = m, a) {
				let e = `a${p} ${p} ${d ? "1 0 0" : "0 0 1"} `;
				h[u] = `${e}${p},${p}`, h[l] = `${e}${[-p, p][r.axis_rotated ? "sort" : "reverse"]()}`, d && h.reverse();
			}
			let g = r.axis_rotated ? `H${f} ${h[0]}V${c[2][u] - p} ${h[1]}H${c[3][l]}` : `V${f} ${h[0]}H${c[2][l] - p} ${h[1]}V${c[3][u]}`, _ = [`M${c[0][l]},${c[0][u]}${g}z`], v = s.get(e.id);
			return v === void 0 && (v = Fh.call(n, e.id), s.set(e.id, v)), v && _.push(r.axis_rotated ? {
				x: c[0][l],
				y: c[0][u],
				width: c[0][l] - f,
				height: c[2][u] - c[0][u]
			} : {
				x: c[0][l],
				y: f,
				width: c[2][l] - c[0][l],
				height: c[3][u] - f
			}), _;
		};
	},
	isStackingRadiusData(e) {
		let t = this, { $el: n, config: r, data: i, state: a } = t, { id: o, index: s, value: c } = e;
		if (a.hiddenTargetIds.has(o)) {
			let e = n.bar.filter((e) => e.id === o && e.value === c);
			return !e.empty() && /a\d+/i.test(e.attr("d"));
		}
		let l = r.data_groups.find((e) => e.indexOf(o) > -1), u = t.orderTargets(t.filterTargetsToShow(i.targets.filter(t.isBarType, t))).filter((e) => l.indexOf(e.id) > -1).map((e) => {
			let t = e.values[s];
			if (t && (m(c) && c > 0 ? t.value > 0 : t.value < 0)) return t;
		}).filter(Boolean).map((e) => e.id);
		return c !== 0 && u.indexOf(o) === u.length - 1;
	},
	updateConnectLine(e, t, n) {
		let r = n.map((e, n, r) => {
			let i = this.config.axis_rotated, a = /^start-(start|end)$/.test(t), o = /^end-(start|end)$/.test(t), s = [], c = i ? o ? e.x - e.width : e.x : e.x + e.width, l = i || a ? e.y + e.height : e.y;
			return n === 0 ? s.push(`${c},${l}`) : (s.push(i ? `L${e.x - (/\w+-end$/.test(t) ? e.width : 0)},${e.y}` : `L${e.x},${e.y + (/\w+-start$/.test(t) ? e.height : 0)}`), n < r.length - 1 && s.push(`M${c},${l}`)), s.join(" ");
		});
		e.attr("d", `M${r.join("")}z`);
	}
}, Lh = {
	bar_connectLine: !1,
	bar_front: !1,
	bar_indices_removeNull: !1,
	bar_label_threshold: 0,
	bar_linearGradient: !1,
	bar_overlap: !1,
	bar_padding: 0,
	bar_radius: void 0,
	bar_radius_ratio: void 0,
	bar_sensitivity: 2,
	bar_width: void 0,
	bar_width_ratio: .6,
	bar_width_max: void 0,
	bar_zerobased: !0
}, Rh = () => (kh([Ih, Sm], [Lh, Cm]), (Rh = () => e.BAR)());
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/count.js
function zh(e) {
	var t = 0, n = e.children, r = n && n.length;
	if (!r) t = 1;
	else for (; --r >= 0;) t += n[r].value;
	e.value = t;
}
function Bh() {
	return this.eachAfter(zh);
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/each.js
function Vh(e, t) {
	let n = -1;
	for (let r of this) e.call(t, r, ++n, this);
	return this;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
function Hh(e, t) {
	for (var n = this, r = [n], i, a, o = -1; n = r.pop();) if (e.call(t, n, ++o, this), i = n.children) for (a = i.length - 1; a >= 0; --a) r.push(i[a]);
	return this;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
function Uh(e, t) {
	for (var n = this, r = [n], i = [], a, o, s, c = -1; n = r.pop();) if (i.push(n), a = n.children) for (o = 0, s = a.length; o < s; ++o) r.push(a[o]);
	for (; n = i.pop();) e.call(t, n, ++c, this);
	return this;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/find.js
function Wh(e, t) {
	let n = -1;
	for (let r of this) if (e.call(t, r, ++n, this)) return r;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/sum.js
function Gh(e) {
	return this.eachAfter(function(t) {
		for (var n = +e(t.data) || 0, r = t.children, i = r && r.length; --i >= 0;) n += r[i].value;
		t.value = n;
	});
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/sort.js
function Kh(e) {
	return this.eachBefore(function(t) {
		t.children && t.children.sort(e);
	});
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/path.js
function qh(e) {
	for (var t = this, n = Jh(t, e), r = [t]; t !== n;) t = t.parent, r.push(t);
	for (var i = r.length; e !== n;) r.splice(i, 0, e), e = e.parent;
	return r;
}
function Jh(e, t) {
	if (e === t) return e;
	var n = e.ancestors(), r = t.ancestors(), i = null;
	for (e = n.pop(), t = r.pop(); e === t;) i = e, e = n.pop(), t = r.pop();
	return i;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/ancestors.js
function Yh() {
	for (var e = this, t = [e]; e = e.parent;) t.push(e);
	return t;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/descendants.js
function Xh() {
	return Array.from(this);
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/leaves.js
function Zh() {
	var e = [];
	return this.eachBefore(function(t) {
		t.children || e.push(t);
	}), e;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/links.js
function Qh() {
	var e = this, t = [];
	return e.each(function(n) {
		n !== e && t.push({
			source: n.parent,
			target: n
		});
	}), t;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/iterator.js
function* $h() {
	var e = this, t, n = [e], r, i, a;
	do
		for (t = n.reverse(), n = []; e = t.pop();) if (yield e, r = e.children) for (i = 0, a = r.length; i < a; ++i) n.push(r[i]);
	while (n.length);
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/index.js
function eg(e, t) {
	e instanceof Map ? (e = [void 0, e], t === void 0 && (t = rg)) : t === void 0 && (t = ng);
	for (var n = new og(e), r, i = [n], a, o, s, c; r = i.pop();) if ((o = t(r.data)) && (c = (o = Array.from(o)).length)) for (r.children = o, s = c - 1; s >= 0; --s) i.push(a = o[s] = new og(o[s])), a.parent = r, a.depth = r.depth + 1;
	return n.eachBefore(ag);
}
function tg() {
	return eg(this).eachBefore(ig);
}
function ng(e) {
	return e.children;
}
function rg(e) {
	return Array.isArray(e) ? e[1] : null;
}
function ig(e) {
	e.data.value !== void 0 && (e.value = e.data.value), e.data = e.data.data;
}
function ag(e) {
	var t = 0;
	do
		e.height = t;
	while ((e = e.parent) && e.height < ++t);
}
function og(e) {
	this.data = e, this.depth = this.height = 0, this.parent = null;
}
og.prototype = eg.prototype = {
	constructor: og,
	count: Bh,
	each: Vh,
	eachAfter: Uh,
	eachBefore: Hh,
	find: Wh,
	sum: Gh,
	sort: Kh,
	path: qh,
	ancestors: Yh,
	descendants: Xh,
	leaves: Zh,
	links: Qh,
	copy: tg,
	[Symbol.iterator]: $h
};
//#endregion
//#region node_modules/d3-hierarchy/src/tree.js
function sg(e, t) {
	return e.parent === t.parent ? 1 : 2;
}
function cg(e) {
	var t = e.children;
	return t ? t[0] : e.t;
}
function lg(e) {
	var t = e.children;
	return t ? t[t.length - 1] : e.t;
}
function ug(e, t, n) {
	var r = n / (t.i - e.i);
	t.c -= r, t.s += n, e.c += r, t.z += n, t.m += n;
}
function dg(e) {
	for (var t = 0, n = 0, r = e.children, i = r.length, a; --i >= 0;) a = r[i], a.z += t, a.m += t, t += a.s + (n += a.c);
}
function fg(e, t, n) {
	return e.a.parent === t.parent ? e.a : n;
}
function pg(e, t) {
	this._ = e, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = t;
}
pg.prototype = Object.create(og.prototype);
function mg(e) {
	for (var t = new pg(e, 0), n, r = [t], i, a, o, s; n = r.pop();) if (a = n._.children) for (n.children = Array(s = a.length), o = s - 1; o >= 0; --o) r.push(i = n.children[o] = new pg(a[o], o)), i.parent = n;
	return (t.parent = new pg(null, 0)).children = [t], t;
}
function hg() {
	var e = sg, t = 1, n = 1, r = null;
	function i(i) {
		var s = mg(i);
		if (s.eachAfter(a), s.parent.m = -s.z, s.eachBefore(o), r) i.eachBefore(c);
		else {
			var l = i, u = i, d = i;
			i.eachBefore(function(e) {
				e.x < l.x && (l = e), e.x > u.x && (u = e), e.depth > d.depth && (d = e);
			});
			var f = l === u ? 1 : e(l, u) / 2, p = f - l.x, m = t / (u.x + f + p), h = n / (d.depth || 1);
			i.eachBefore(function(e) {
				e.x = (e.x + p) * m, e.y = e.depth * h;
			});
		}
		return i;
	}
	function a(t) {
		var n = t.children, r = t.parent.children, i = t.i ? r[t.i - 1] : null;
		if (n) {
			dg(t);
			var a = (n[0].z + n[n.length - 1].z) / 2;
			i ? (t.z = i.z + e(t._, i._), t.m = t.z - a) : t.z = a;
		} else i && (t.z = i.z + e(t._, i._));
		t.parent.A = s(t, i, t.parent.A || r[0]);
	}
	function o(e) {
		e._.x = e.z + e.parent.m, e.m += e.parent.m;
	}
	function s(t, n, r) {
		if (n) {
			for (var i = t, a = t, o = n, s = i.parent.children[0], c = i.m, l = a.m, u = o.m, d = s.m, f; o = lg(o), i = cg(i), o && i;) s = cg(s), a = lg(a), a.a = t, f = o.z + u - i.z - c + e(o._, i._), f > 0 && (ug(fg(o, t, r), t, f), c += f, l += f), u += o.m, c += i.m, d += s.m, l += a.m;
			o && !lg(a) && (a.t = o, a.m += u - l), i && !cg(s) && (s.t = i, s.m += c - d, r = t);
		}
		return r;
	}
	function c(e) {
		e.x *= t, e.y = e.depth * n;
	}
	return i.separation = function(t) {
		return arguments.length ? (e = t, i) : e;
	}, i.size = function(e) {
		return arguments.length ? (r = !1, t = +e[0], n = +e[1], i) : r ? null : [t, n];
	}, i.nodeSize = function(e) {
		return arguments.length ? (r = !0, t = +e[0], n = +e[1], i) : r ? [t, n] : null;
	}, i;
}
//#endregion
//#region node_modules/d3-zoom/src/constant.js
var gg = (e) => () => e;
//#endregion
//#region node_modules/d3-zoom/src/event.js
function _g(e, { sourceEvent: t, target: n, transform: r, dispatch: i }) {
	Object.defineProperties(this, {
		type: {
			value: e,
			enumerable: !0,
			configurable: !0
		},
		sourceEvent: {
			value: t,
			enumerable: !0,
			configurable: !0
		},
		target: {
			value: n,
			enumerable: !0,
			configurable: !0
		},
		transform: {
			value: r,
			enumerable: !0,
			configurable: !0
		},
		_: { value: i }
	});
}
//#endregion
//#region node_modules/d3-zoom/src/transform.js
function vg(e, t, n) {
	this.k = e, this.x = t, this.y = n;
}
vg.prototype = {
	constructor: vg,
	scale: function(e) {
		return e === 1 ? this : new vg(this.k * e, this.x, this.y);
	},
	translate: function(e, t) {
		return e === 0 & t === 0 ? this : new vg(this.k, this.x + this.k * e, this.y + this.k * t);
	},
	apply: function(e) {
		return [e[0] * this.k + this.x, e[1] * this.k + this.y];
	},
	applyX: function(e) {
		return e * this.k + this.x;
	},
	applyY: function(e) {
		return e * this.k + this.y;
	},
	invert: function(e) {
		return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
	},
	invertX: function(e) {
		return (e - this.x) / this.k;
	},
	invertY: function(e) {
		return (e - this.y) / this.k;
	},
	rescaleX: function(e) {
		return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
	},
	rescaleY: function(e) {
		return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
	},
	toString: function() {
		return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
	}
};
var yg = new vg(1, 0, 0);
bg.prototype = vg.prototype;
function bg(e) {
	for (; !e.__zoom;) if (!(e = e.parentNode)) return yg;
	return e.__zoom;
}
//#endregion
//#region node_modules/d3-zoom/src/noevent.js
function xg(e) {
	e.stopImmediatePropagation();
}
function Sg(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region node_modules/d3-zoom/src/zoom.js
function Cg(e) {
	return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function wg() {
	var e = this;
	return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Tg() {
	return this.__zoom || yg;
}
function Eg(e) {
	return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * (e.ctrlKey ? 10 : 1);
}
function Dg() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Og(e, t, n) {
	var r = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], o = e.invertY(t[1][1]) - n[1][1];
	return e.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), o > a ? (a + o) / 2 : Math.min(0, a) || Math.max(0, o));
}
function kg() {
	var e = Cg, t = wg, n = Og, r = Eg, i = Dg, a = [0, Infinity], o = [[-Infinity, -Infinity], [Infinity, Infinity]], s = 250, c = Hc, l = ts("start", "zoom", "end"), u, d, f, p = 500, m = 150, h = 0, g = 10;
	function _(e) {
		e.property("__zoom", Tg).on("wheel.zoom", w, { passive: !1 }).on("mousedown.zoom", T).on("dblclick.zoom", E).filter(i).on("touchstart.zoom", D).on("touchmove.zoom", O).on("touchend.zoom touchcancel.zoom", k).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	_.transform = function(e, t, n, r) {
		var i = e.selection ? e.selection() : e;
		i.property("__zoom", Tg), e === i ? i.interrupt().each(function() {
			S(this, arguments).event(r).start().zoom(null, typeof t == "function" ? t.apply(this, arguments) : t).end();
		}) : x(e, t, n, r);
	}, _.scaleBy = function(e, t, n, r) {
		_.scaleTo(e, function() {
			return this.__zoom.k * (typeof t == "function" ? t.apply(this, arguments) : t);
		}, n, r);
	}, _.scaleTo = function(e, r, i, a) {
		_.transform(e, function() {
			var e = t.apply(this, arguments), a = this.__zoom, s = i == null ? b(e) : typeof i == "function" ? i.apply(this, arguments) : i, c = a.invert(s), l = typeof r == "function" ? r.apply(this, arguments) : r;
			return n(y(v(a, l), s, c), e, o);
		}, i, a);
	}, _.translateBy = function(e, r, i, a) {
		_.transform(e, function() {
			return n(this.__zoom.translate(typeof r == "function" ? r.apply(this, arguments) : r, typeof i == "function" ? i.apply(this, arguments) : i), t.apply(this, arguments), o);
		}, null, a);
	}, _.translateTo = function(e, r, i, a, s) {
		_.transform(e, function() {
			var e = t.apply(this, arguments), s = this.__zoom, c = a == null ? b(e) : typeof a == "function" ? a.apply(this, arguments) : a;
			return n(yg.translate(c[0], c[1]).scale(s.k).translate(typeof r == "function" ? -r.apply(this, arguments) : -r, typeof i == "function" ? -i.apply(this, arguments) : -i), e, o);
		}, a, s);
	};
	function v(e, t) {
		return t = Math.max(a[0], Math.min(a[1], t)), t === e.k ? e : new vg(t, e.x, e.y);
	}
	function y(e, t, n) {
		var r = t[0] - n[0] * e.k, i = t[1] - n[1] * e.k;
		return r === e.x && i === e.y ? e : new vg(e.k, r, i);
	}
	function b(e) {
		return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2];
	}
	function x(e, n, r, i) {
		e.on("start.zoom", function() {
			S(this, arguments).event(i).start();
		}).on("interrupt.zoom end.zoom", function() {
			S(this, arguments).event(i).end();
		}).tween("zoom", function() {
			var e = this, a = arguments, o = S(e, a).event(i), s = t.apply(e, a), l = r == null ? b(s) : typeof r == "function" ? r.apply(e, a) : r, u = Math.max(s[1][0] - s[0][0], s[1][1] - s[0][1]), d = e.__zoom, f = typeof n == "function" ? n.apply(e, a) : n, p = c(d.invert(l).concat(u / d.k), f.invert(l).concat(u / f.k));
			return function(e) {
				if (e === 1) e = f;
				else {
					var t = p(e), n = u / t[2];
					e = new vg(n, l[0] - t[0] * n, l[1] - t[1] * n);
				}
				o.zoom(null, e);
			};
		});
	}
	function S(e, t, n) {
		return !n && e.__zooming || new C(e, t);
	}
	function C(e, n) {
		this.that = e, this.args = n, this.active = 0, this.sourceEvent = null, this.extent = t.apply(e, n), this.taps = 0;
	}
	C.prototype = {
		event: function(e) {
			return e && (this.sourceEvent = e), this;
		},
		start: function() {
			return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
		},
		zoom: function(e, t) {
			return this.mouse && e !== "mouse" && (this.mouse[1] = t.invert(this.mouse[0])), this.touch0 && e !== "touch" && (this.touch0[1] = t.invert(this.touch0[0])), this.touch1 && e !== "touch" && (this.touch1[1] = t.invert(this.touch1[0])), this.that.__zoom = t, this.emit("zoom"), this;
		},
		end: function() {
			return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
		},
		emit: function(e) {
			var t = F(this.that).datum();
			l.call(e, this.that, new _g(e, {
				sourceEvent: this.sourceEvent,
				target: _,
				type: e,
				transform: this.that.__zoom,
				dispatch: l
			}), t);
		}
	};
	function w(t, ...i) {
		if (!e.apply(this, arguments)) return;
		var s = S(this, i).event(t), c = this.__zoom, l = Math.max(a[0], Math.min(a[1], c.k * 2 ** r.apply(this, arguments))), u = Hn(t);
		if (s.wheel) (s.mouse[0][0] !== u[0] || s.mouse[0][1] !== u[1]) && (s.mouse[1] = c.invert(s.mouse[0] = u)), clearTimeout(s.wheel);
		else if (c.k === l) return;
		else s.mouse = [u, c.invert(u)], Tu(this), s.start();
		Sg(t), s.wheel = setTimeout(d, m), s.zoom("mouse", n(y(v(c, l), s.mouse[0], s.mouse[1]), s.extent, o));
		function d() {
			s.wheel = null, s.end();
		}
	}
	function T(t, ...r) {
		if (f || !e.apply(this, arguments)) return;
		var i = t.currentTarget, a = S(this, r, !0).event(t), s = F(t.view).on("mousemove.zoom", d, !0).on("mouseup.zoom", p, !0), c = Hn(t, i), l = t.clientX, u = t.clientY;
		us(t.view), xg(t), a.mouse = [c, this.__zoom.invert(c)], Tu(this), a.start();
		function d(e) {
			if (Sg(e), !a.moved) {
				var t = e.clientX - l, r = e.clientY - u;
				a.moved = t * t + r * r > h;
			}
			a.event(e).zoom("mouse", n(y(a.that.__zoom, a.mouse[0] = Hn(e, i), a.mouse[1]), a.extent, o));
		}
		function p(e) {
			s.on("mousemove.zoom mouseup.zoom", null), ds(e.view, a.moved), Sg(e), a.event(e).end();
		}
	}
	function E(r, ...i) {
		if (e.apply(this, arguments)) {
			var a = this.__zoom, c = Hn(r.changedTouches ? r.changedTouches[0] : r, this), l = a.invert(c), u = a.k * (r.shiftKey ? .5 : 2), d = n(y(v(a, u), c, l), t.apply(this, i), o);
			Sg(r), s > 0 ? F(this).transition().duration(s).call(x, d, c, r) : F(this).call(_.transform, d, c, r);
		}
	}
	function D(t, ...n) {
		if (e.apply(this, arguments)) {
			var r = t.touches, i = r.length, a = S(this, n, t.changedTouches.length === i).event(t), o, s, c, l;
			for (xg(t), s = 0; s < i; ++s) c = r[s], l = Hn(c, this), l = [
				l,
				this.__zoom.invert(l),
				c.identifier
			], a.touch0 ? !a.touch1 && a.touch0[2] !== l[2] && (a.touch1 = l, a.taps = 0) : (a.touch0 = l, o = !0, a.taps = 1 + !!u);
			u &&= clearTimeout(u), o && (a.taps < 2 && (d = l[0], u = setTimeout(function() {
				u = null;
			}, p)), Tu(this), a.start());
		}
	}
	function O(e, ...t) {
		if (this.__zooming) {
			var r = S(this, t).event(e), i = e.changedTouches, a = i.length, s, c, l, u;
			for (Sg(e), s = 0; s < a; ++s) c = i[s], l = Hn(c, this), r.touch0 && r.touch0[2] === c.identifier ? r.touch0[0] = l : r.touch1 && r.touch1[2] === c.identifier && (r.touch1[0] = l);
			if (c = r.that.__zoom, r.touch1) {
				var d = r.touch0[0], f = r.touch0[1], p = r.touch1[0], m = r.touch1[1], h = (h = p[0] - d[0]) * h + (h = p[1] - d[1]) * h, g = (g = m[0] - f[0]) * g + (g = m[1] - f[1]) * g;
				c = v(c, Math.sqrt(h / g)), l = [(d[0] + p[0]) / 2, (d[1] + p[1]) / 2], u = [(f[0] + m[0]) / 2, (f[1] + m[1]) / 2];
			} else if (r.touch0) l = r.touch0[0], u = r.touch0[1];
			else return;
			r.zoom("touch", n(y(c, l, u), r.extent, o));
		}
	}
	function k(e, ...t) {
		if (this.__zooming) {
			var n = S(this, t).event(e), r = e.changedTouches, i = r.length, a, o;
			for (xg(e), f && clearTimeout(f), f = setTimeout(function() {
				f = null;
			}, p), a = 0; a < i; ++a) o = r[a], n.touch0 && n.touch0[2] === o.identifier ? delete n.touch0 : n.touch1 && n.touch1[2] === o.identifier && delete n.touch1;
			if (n.touch1 && !n.touch0 && (n.touch0 = n.touch1, delete n.touch1), n.touch0) n.touch0[1] = this.__zoom.invert(n.touch0[0]);
			else if (n.end(), n.taps === 2 && (o = Hn(o, this), Math.hypot(d[0] - o[0], d[1] - o[1]) < g)) {
				var s = F(this).on("dblclick.zoom");
				s && s.apply(this, arguments);
			}
		}
	}
	return _.wheelDelta = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : gg(+e), _) : r;
	}, _.filter = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : gg(!!t), _) : e;
	}, _.touchable = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : gg(!!e), _) : i;
	}, _.extent = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : gg([[+e[0][0], +e[0][1]], [+e[1][0], +e[1][1]]]), _) : t;
	}, _.scaleExtent = function(e) {
		return arguments.length ? (a[0] = +e[0], a[1] = +e[1], _) : [a[0], a[1]];
	}, _.translateExtent = function(e) {
		return arguments.length ? (o[0][0] = +e[0][0], o[1][0] = +e[1][0], o[0][1] = +e[0][1], o[1][1] = +e[1][1], _) : [[o[0][0], o[0][1]], [o[1][0], o[1][1]]];
	}, _.constrain = function(e) {
		return arguments.length ? (n = e, _) : n;
	}, _.duration = function(e) {
		return arguments.length ? (s = +e, _) : s;
	}, _.interpolate = function(e) {
		return arguments.length ? (c = e, _) : c;
	}, _.on = function() {
		var e = l.on.apply(l, arguments);
		return e === l ? _ : e;
	}, _.clickDistance = function(e) {
		return arguments.length ? (h = (e = +e) * e, _) : Math.sqrt(h);
	}, _.tapDistance = function(e) {
		return arguments.length ? (g = +e, _) : g;
	}, _;
}
//#endregion
//#region src/barChart.ts
function Ag(e, t) {
	let n = e.series.map((e) => [e.name, ...e.values]), r = ym.generate({
		axis: { x: {
			categories: e.categories,
			type: "category"
		} },
		bindto: t,
		data: {
			columns: n,
			type: Rh()
		}
	});
	return {
		chart: r,
		destroy: () => {
			r.destroy();
		},
		resize: () => {
			r.resize();
		}
	};
}
//#endregion
//#region node_modules/@dagrejs/dagre/dist/dagre.esm.js
var jg = Object.defineProperty, Mg = (e, t, n) => t in e ? jg(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Ng = (e, t) => {
	for (var n in t) jg(e, n, {
		get: t[n],
		enumerable: !0
	});
}, Pg = (e, t, n) => Mg(e, typeof t == "symbol" ? t : t + "", n), Fg = {};
Ng(Fg, {
	Graph: () => Z,
	alg: () => Yg,
	json: () => Wg,
	version: () => Ug
});
var Ig = Object.defineProperty, Lg = (e, t) => {
	for (var n in t) Ig(e, n, {
		get: t[n],
		enumerable: !0
	});
}, Z = class {
	constructor(e) {
		this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, e && (this._isDirected = "directed" in e ? e.directed : !0, this._isMultigraph = "multigraph" in e && e.multigraph, this._isCompound = "compound" in e && e.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {});
	}
	isDirected() {
		return this._isDirected;
	}
	isMultigraph() {
		return this._isMultigraph;
	}
	isCompound() {
		return this._isCompound;
	}
	setGraph(e) {
		return this._label = e, this;
	}
	graph() {
		return this._label;
	}
	setDefaultNodeLabel(e) {
		return this._defaultNodeLabelFn = typeof e == "function" ? e : () => e, this;
	}
	nodeCount() {
		return this._nodeCount;
	}
	nodes() {
		return Object.keys(this._nodes);
	}
	sources() {
		return this.nodes().filter((e) => Object.keys(this._in[e]).length === 0);
	}
	sinks() {
		return this.nodes().filter((e) => Object.keys(this._out[e]).length === 0);
	}
	setNodes(e, t) {
		return e.forEach((e) => {
			t === void 0 ? this.setNode(e) : this.setNode(e, t);
		}), this;
	}
	setNode(e, t) {
		return e in this._nodes ? (arguments.length > 1 && (this._nodes[e] = t), this) : (this._nodes[e] = arguments.length > 1 ? t : this._defaultNodeLabelFn(e), this._isCompound && (this._parent[e] = "\0", this._children[e] = {}, this._children["\0"][e] = !0), this._in[e] = {}, this._preds[e] = {}, this._out[e] = {}, this._sucs[e] = {}, ++this._nodeCount, this);
	}
	node(e) {
		return this._nodes[e];
	}
	hasNode(e) {
		return e in this._nodes;
	}
	removeNode(e) {
		if (e in this._nodes) {
			let t = (e) => this.removeEdge(this._edgeObjs[e]);
			delete this._nodes[e], this._isCompound && (this._removeFromParentsChildList(e), delete this._parent[e], this.children(e).forEach((e) => {
				this.setParent(e);
			}), delete this._children[e]), Object.keys(this._in[e]).forEach(t), delete this._in[e], delete this._preds[e], Object.keys(this._out[e]).forEach(t), delete this._out[e], delete this._sucs[e], --this._nodeCount;
		}
		return this;
	}
	setParent(e, t) {
		if (!this._isCompound) throw Error("Cannot set parent in a non-compound graph");
		if (t === void 0) t = "\0";
		else {
			t += "";
			for (let n = t; n !== void 0; n = this.parent(n)) if (n === e) throw Error("Setting " + t + " as parent of " + e + " would create a cycle");
			this.setNode(t);
		}
		return this.setNode(e), this._removeFromParentsChildList(e), this._parent[e] = t, this._children[t][e] = !0, this;
	}
	parent(e) {
		if (this._isCompound) {
			let t = this._parent[e];
			if (t !== "\0") return t;
		}
	}
	children(e = "\0") {
		if (this._isCompound) {
			let t = this._children[e];
			if (t) return Object.keys(t);
		} else {
			if (e === "\0") return this.nodes();
			if (this.hasNode(e)) return [];
		}
		return [];
	}
	predecessors(e) {
		let t = this._preds[e];
		if (t) return Object.keys(t);
	}
	successors(e) {
		let t = this._sucs[e];
		if (t) return Object.keys(t);
	}
	neighbors(e) {
		let t = this.predecessors(e);
		if (t) {
			let n = new Set(t);
			for (let t of this.successors(e)) n.add(t);
			return Array.from(n.values());
		}
	}
	isLeaf(e) {
		let t;
		return t = this.isDirected() ? this.successors(e) : this.neighbors(e), t.length === 0;
	}
	filterNodes(e) {
		let t = new this.constructor({
			directed: this._isDirected,
			multigraph: this._isMultigraph,
			compound: this._isCompound
		});
		t.setGraph(this.graph()), Object.entries(this._nodes).forEach(([n, r]) => {
			e(n) && t.setNode(n, r);
		}), Object.values(this._edgeObjs).forEach((e) => {
			t.hasNode(e.v) && t.hasNode(e.w) && t.setEdge(e, this.edge(e));
		});
		let n = {}, r = (e) => {
			let i = this.parent(e);
			return !i || t.hasNode(i) ? (n[e] = i ?? void 0, i ?? void 0) : i in n ? n[i] : r(i);
		};
		return this._isCompound && t.nodes().forEach((e) => t.setParent(e, r(e))), t;
	}
	setDefaultEdgeLabel(e) {
		return this._defaultEdgeLabelFn = typeof e == "function" ? e : () => e, this;
	}
	edgeCount() {
		return this._edgeCount;
	}
	edges() {
		return Object.values(this._edgeObjs);
	}
	setPath(e, t) {
		return e.reduce((e, n) => (t === void 0 ? this.setEdge(e, n) : this.setEdge(e, n, t), n)), this;
	}
	setEdge(e, t, n, r) {
		let i, a, o, s, c = !1;
		typeof e == "object" && e && "v" in e ? (i = e.v, a = e.w, o = e.name, arguments.length === 2 && (s = t, c = !0)) : (i = e, a = t, o = r, arguments.length > 2 && (s = n, c = !0)), i = "" + i, a = "" + a, o !== void 0 && (o = "" + o);
		let l = Bg(this._isDirected, i, a, o);
		if (l in this._edgeLabels) return c && (this._edgeLabels[l] = s), this;
		if (o !== void 0 && !this._isMultigraph) throw Error("Cannot set a named edge when isMultigraph = false");
		this.setNode(i), this.setNode(a), this._edgeLabels[l] = c ? s : this._defaultEdgeLabelFn(i, a, o);
		let u = Vg(this._isDirected, i, a, o);
		return i = u.v, a = u.w, Object.freeze(u), this._edgeObjs[l] = u, Rg(this._preds[a], i), Rg(this._sucs[i], a), this._in[a][l] = u, this._out[i][l] = u, this._edgeCount++, this;
	}
	edge(e, t, n) {
		let r = arguments.length === 1 ? Hg(this._isDirected, e) : Bg(this._isDirected, e, t, n);
		return this._edgeLabels[r];
	}
	edgeAsObj(e, t, n) {
		let r = arguments.length === 1 ? this.edge(e) : this.edge(e, t, n);
		return typeof r == "object" ? r : { label: r };
	}
	hasEdge(e, t, n) {
		return (arguments.length === 1 ? Hg(this._isDirected, e) : Bg(this._isDirected, e, t, n)) in this._edgeLabels;
	}
	removeEdge(e, t, n) {
		let r = arguments.length === 1 ? Hg(this._isDirected, e) : Bg(this._isDirected, e, t, n), i = this._edgeObjs[r];
		if (i) {
			let e = i.v, t = i.w;
			delete this._edgeLabels[r], delete this._edgeObjs[r], zg(this._preds[t], e), zg(this._sucs[e], t), delete this._in[t][r], delete this._out[e][r], this._edgeCount--;
		}
		return this;
	}
	inEdges(e, t) {
		return this.isDirected() ? this.filterEdges(this._in[e], e, t) : this.nodeEdges(e, t);
	}
	outEdges(e, t) {
		return this.isDirected() ? this.filterEdges(this._out[e], e, t) : this.nodeEdges(e, t);
	}
	nodeEdges(e, t) {
		if (e in this._nodes) return this.filterEdges({
			...this._in[e],
			...this._out[e]
		}, e, t);
	}
	_removeFromParentsChildList(e) {
		delete this._children[this._parent[e]][e];
	}
	filterEdges(e, t, n) {
		if (!e) return;
		let r = Object.values(e);
		return n ? r.filter((e) => e.v === t && e.w === n || e.v === n && e.w === t) : r;
	}
};
function Rg(e, t) {
	e[t] ? e[t]++ : e[t] = 1;
}
function zg(e, t) {
	e[t] !== void 0 && !--e[t] && delete e[t];
}
function Bg(e, t, n, r) {
	let i = "" + t, a = "" + n;
	if (!e && i > a) {
		let e = i;
		i = a, a = e;
	}
	return i + "" + a + "" + (r === void 0 ? "\0" : r);
}
function Vg(e, t, n, r) {
	let i = "" + t, a = "" + n;
	if (!e && i > a) {
		let e = i;
		i = a, a = e;
	}
	let o = {
		v: i,
		w: a
	};
	return r && (o.name = r), o;
}
function Hg(e, t) {
	return Bg(e, t.v, t.w, t.name);
}
var Ug = "4.0.1", Wg = {};
Lg(Wg, {
	read: () => Jg,
	write: () => Gg
});
function Gg(e) {
	let t = {
		options: {
			directed: e.isDirected(),
			multigraph: e.isMultigraph(),
			compound: e.isCompound()
		},
		nodes: Kg(e),
		edges: qg(e)
	}, n = e.graph();
	return n !== void 0 && (t.value = structuredClone(n)), t;
}
function Kg(e) {
	return e.nodes().map((t) => {
		let n = e.node(t), r = e.parent(t), i = { v: t };
		return n !== void 0 && (i.value = n), r !== void 0 && (i.parent = r), i;
	});
}
function qg(e) {
	return e.edges().map((t) => {
		let n = e.edge(t), r = {
			v: t.v,
			w: t.w
		};
		return t.name !== void 0 && (r.name = t.name), n !== void 0 && (r.value = n), r;
	});
}
function Jg(e) {
	let t = new Z(e.options);
	return e.value !== void 0 && t.setGraph(e.value), e.nodes.forEach((e) => {
		t.setNode(e.v, e.value), e.parent && t.setParent(e.v, e.parent);
	}), e.edges.forEach((e) => {
		t.setEdge({
			v: e.v,
			w: e.w,
			name: e.name
		}, e.value);
	}), t;
}
var Yg = {};
Lg(Yg, {
	CycleException: () => u_,
	bellmanFord: () => Zg,
	components: () => $g,
	dijkstra: () => n_,
	dijkstraAll: () => i_,
	findCycles: () => o_,
	floydWarshall: () => c_,
	isAcyclic: () => f_,
	postorder: () => g_,
	preorder: () => __,
	prim: () => v_,
	shortestPaths: () => y_,
	tarjan: () => a_,
	topsort: () => d_
});
var Xg = () => 1;
function Zg(e, t, n, r) {
	return Qg(e, String(t), n || Xg, r || function(t) {
		return e.outEdges(t);
	});
}
function Qg(e, t, n, r) {
	let i = {}, a, o = 0, s = e.nodes(), c = function(e) {
		let t = n(e);
		i[e.v].distance + t < i[e.w].distance && (i[e.w] = {
			distance: i[e.v].distance + t,
			predecessor: e.v
		}, a = !0);
	}, l = function() {
		s.forEach(function(e) {
			r(e).forEach(function(t) {
				let n = t.v === e ? t.v : t.w, r = n === t.v ? t.w : t.v;
				c({
					v: n,
					w: r
				});
			});
		});
	};
	s.forEach(function(e) {
		i[e] = {
			distance: e === t ? 0 : Infinity,
			predecessor: ""
		};
	});
	let u = s.length;
	for (let e = 1; e < u && (a = !1, o++, l(), a); e++);
	if (o === u - 1 && (a = !1, l(), a)) throw Error("The graph contains a negative weight cycle");
	return i;
}
function $g(e) {
	let t = {}, n = [], r;
	function i(n) {
		n in t || (t[n] = !0, r.push(n), e.successors(n).forEach(i), e.predecessors(n).forEach(i));
	}
	return e.nodes().forEach(function(e) {
		r = [], i(e), r.length && n.push(r);
	}), n;
}
var e_ = class {
	constructor() {
		this._arr = [], this._keyIndices = {};
	}
	size() {
		return this._arr.length;
	}
	keys() {
		return this._arr.map((e) => e.key);
	}
	has(e) {
		return e in this._keyIndices;
	}
	priority(e) {
		let t = this._keyIndices[e];
		if (t !== void 0) return this._arr[t].priority;
	}
	min() {
		if (this.size() === 0) throw Error("Queue underflow");
		return this._arr[0].key;
	}
	add(e, t) {
		let n = this._keyIndices, r = String(e);
		if (!(r in n)) {
			let e = this._arr, i = e.length;
			return n[r] = i, e.push({
				key: r,
				priority: t
			}), this._decrease(i), !0;
		}
		return !1;
	}
	removeMin() {
		this._swap(0, this._arr.length - 1);
		let e = this._arr.pop();
		return delete this._keyIndices[e.key], this._heapify(0), e.key;
	}
	decrease(e, t) {
		let n = this._keyIndices[e];
		if (n === void 0) throw Error(`Key not found: ${e}`);
		let r = this._arr[n].priority;
		if (t > r) throw Error(`New priority is greater than current priority. Key: ${e} Old: ${r} New: ${t}`);
		this._arr[n].priority = t, this._decrease(n);
	}
	_heapify(e) {
		let t = this._arr, n = 2 * e, r = n + 1, i = e;
		n < t.length && (i = t[n].priority < t[i].priority ? n : i, r < t.length && (i = t[r].priority < t[i].priority ? r : i), i !== e && (this._swap(e, i), this._heapify(i)));
	}
	_decrease(e) {
		let t = this._arr, n = t[e].priority, r;
		for (; e !== 0 && (r = e >> 1, !(t[r].priority < n));) this._swap(e, r), e = r;
	}
	_swap(e, t) {
		let n = this._arr, r = this._keyIndices, i = n[e], a = n[t];
		n[e] = a, n[t] = i, r[a.key] = e, r[i.key] = t;
	}
}, t_ = () => 1;
function n_(e, t, n, r) {
	return r_(e, String(t), n || t_, r || function(t) {
		return e.outEdges(t);
	});
}
function r_(e, t, n, r) {
	let i = {}, a = new e_(), o, s, c = function(e) {
		let t = e.v === o ? e.w : e.v, r = i[t], c = n(e), l = s.distance + c;
		if (c < 0) throw Error("dijkstra does not allow negative edge weights. Bad edge: " + e + " Weight: " + c);
		l < r.distance && (r.distance = l, r.predecessor = o, a.decrease(t, l));
	};
	for (e.nodes().forEach(function(e) {
		let n = e === t ? 0 : Infinity;
		i[e] = {
			distance: n,
			predecessor: ""
		}, a.add(e, n);
	}); a.size() > 0 && (o = a.removeMin(), s = i[o], s.distance !== Infinity);) r(o).forEach(c);
	return i;
}
function i_(e, t, n) {
	return e.nodes().reduce(function(r, i) {
		return r[i] = n_(e, i, t, n), r;
	}, {});
}
function a_(e) {
	let t = 0, n = [], r = {}, i = [];
	function a(o) {
		let s = r[o] = {
			onStack: !0,
			lowlink: t,
			index: t++
		};
		if (n.push(o), e.successors(o).forEach(function(e) {
			e in r ? r[e].onStack && (s.lowlink = Math.min(s.lowlink, r[e].index)) : (a(e), s.lowlink = Math.min(s.lowlink, r[e].lowlink));
		}), s.lowlink === s.index) {
			let e = [], t;
			do
				t = n.pop(), r[t].onStack = !1, e.push(t);
			while (o !== t);
			i.push(e);
		}
	}
	return e.nodes().forEach(function(e) {
		e in r || a(e);
	}), i;
}
function o_(e) {
	return a_(e).filter(function(t) {
		return t.length > 1 || t.length === 1 && e.hasEdge(t[0], t[0]);
	});
}
var s_ = () => 1;
function c_(e, t, n) {
	return l_(e, t || s_, n || function(t) {
		return e.outEdges(t);
	});
}
function l_(e, t, n) {
	let r = {}, i = e.nodes();
	return i.forEach(function(e) {
		r[e] = {}, r[e][e] = {
			distance: 0,
			predecessor: ""
		}, i.forEach(function(t) {
			e !== t && (r[e][t] = {
				distance: Infinity,
				predecessor: ""
			});
		}), n(e).forEach(function(n) {
			let i = n.v === e ? n.w : n.v, a = t(n);
			r[e][i] = {
				distance: a,
				predecessor: e
			};
		});
	}), i.forEach(function(e) {
		let t = r[e];
		i.forEach(function(n) {
			let a = r[n];
			i.forEach(function(n) {
				let r = a[e], i = t[n], o = a[n], s = r.distance + i.distance;
				s < o.distance && (o.distance = s, o.predecessor = i.predecessor);
			});
		});
	}), r;
}
var u_ = class extends Error {
	constructor(...e) {
		super(...e);
	}
};
function d_(e) {
	let t = {}, n = {}, r = [];
	function i(a) {
		if (a in n) throw new u_();
		a in t || (n[a] = !0, t[a] = !0, e.predecessors(a).forEach(i), delete n[a], r.push(a));
	}
	if (e.sinks().forEach(i), Object.keys(t).length !== e.nodeCount()) throw new u_();
	return r;
}
function f_(e) {
	try {
		d_(e);
	} catch (e) {
		if (e instanceof u_) return !1;
		throw e;
	}
	return !0;
}
function p_(e, t, n, r, i) {
	Array.isArray(t) || (t = [t]);
	let a = ((t) => (e.isDirected() ? e.successors(t) : e.neighbors(t)) ?? []), o = {};
	return t.forEach(function(t) {
		if (!e.hasNode(t)) throw Error("Graph does not have node: " + t);
		i = m_(e, t, n === "post", o, a, r, i);
	}), i;
}
function m_(e, t, n, r, i, a, o) {
	return t in r || (r[t] = !0, n || (o = a(o, t)), i(t).forEach(function(t) {
		o = m_(e, t, n, r, i, a, o);
	}), n && (o = a(o, t))), o;
}
function h_(e, t, n) {
	return p_(e, t, n, function(e, t) {
		return e.push(t), e;
	}, []);
}
function g_(e, t) {
	return h_(e, t, "post");
}
function __(e, t) {
	return h_(e, t, "pre");
}
function v_(e, t) {
	let n = new Z(), r = {}, i = new e_(), a;
	function o(e) {
		let n = e.v === a ? e.w : e.v, o = i.priority(n);
		if (o !== void 0) {
			let s = t(e);
			s < o && (r[n] = a, i.decrease(n, s));
		}
	}
	if (e.nodeCount() === 0) return n;
	e.nodes().forEach(function(e) {
		i.add(e, Infinity), n.setNode(e);
	}), i.decrease(e.nodes()[0], 0);
	let s = !1;
	for (; i.size() > 0;) {
		if (a = i.removeMin(), a in r) n.setEdge(a, r[a]);
		else {
			if (s) throw Error("Input graph is not connected: " + e);
			s = !0;
		}
		e.nodeEdges(a).forEach(o);
	}
	return n;
}
function y_(e, t, n, r) {
	return b_(e, t, n, r ?? ((t) => e.outEdges(t) ?? []));
}
function b_(e, t, n, r) {
	if (n === void 0) return n_(e, t, n, r);
	let i = !1, a = e.nodes();
	for (let o = 0; o < a.length; o++) {
		let s = r(a[o]);
		for (let e = 0; e < s.length; e++) {
			let t = s[e], r = t.v === a[o] ? t.v : t.w;
			n({
				v: r,
				w: r === t.v ? t.w : t.v
			}) < 0 && (i = !0);
		}
		if (i) return Zg(e, t, n, r);
	}
	return n_(e, t, n, r);
}
function x_(e, t, n, r) {
	let i = r;
	for (; e.hasNode(i);) i = L_(r);
	return n.dummy = t, e.setNode(i, n), i;
}
function S_(e) {
	let t = new Z().setGraph(e.graph());
	return e.nodes().forEach((n) => t.setNode(n, e.node(n))), e.edges().forEach((n) => {
		let r = t.edge(n.v, n.w) || {
			weight: 0,
			minlen: 1
		}, i = e.edge(n);
		t.setEdge(n.v, n.w, {
			weight: r.weight + i.weight,
			minlen: Math.max(r.minlen, i.minlen)
		});
	}), t;
}
function C_(e) {
	let t = new Z({ multigraph: e.isMultigraph() }).setGraph(e.graph());
	return e.nodes().forEach((n) => {
		e.children(n).length || t.setNode(n, e.node(n));
	}), e.edges().forEach((n) => {
		t.setEdge(n, e.edge(n));
	}), t;
}
function w_(e, t) {
	let n = e.x, r = e.y, i = t.x - n, a = t.y - r, o = e.width / 2, s = e.height / 2;
	if (!i && !a) throw Error("Not possible to find intersection inside of the rectangle");
	let c, l;
	return Math.abs(a) * o > Math.abs(i) * s ? (a < 0 && (s = -s), c = s * i / a, l = s) : (i < 0 && (o = -o), c = o, l = o * a / i), {
		x: n + c,
		y: r + l
	};
}
function T_(e) {
	let t = R_(M_(e) + 1).map(() => []);
	return e.nodes().forEach((n) => {
		let r = e.node(n), i = r.rank;
		i !== void 0 && (t[i] || (t[i] = []), t[i][r.order] = n);
	}), t;
}
function E_(e) {
	let t = e.nodes().map((t) => {
		let n = e.node(t).rank;
		return n === void 0 ? Number.MAX_VALUE : n;
	}), n = j_(Math.min, t);
	e.nodes().forEach((t) => {
		let r = e.node(t);
		Object.hasOwn(r, "rank") && (r.rank -= n);
	});
}
function D_(e) {
	let t = e.nodes().map((t) => e.node(t).rank).filter((e) => e !== void 0), n = j_(Math.min, t), r = [];
	e.nodes().forEach((t) => {
		let i = e.node(t).rank - n;
		r[i] || (r[i] = []), r[i].push(t);
	});
	let i = 0, a = e.graph().nodeRankFactor;
	Array.from(r).forEach((t, n) => {
		t === void 0 && n % a !== 0 ? --i : t !== void 0 && i && t.forEach((t) => e.node(t).rank += i);
	});
}
function O_(e, t, n, r) {
	let i = {
		width: 0,
		height: 0
	};
	return arguments.length >= 4 && (i.rank = n, i.order = r), x_(e, "border", i, t);
}
function k_(e, t = A_) {
	let n = [];
	for (let r = 0; r < e.length; r += t) {
		let i = e.slice(r, r + t);
		n.push(i);
	}
	return n;
}
var A_ = 65535;
function j_(e, t) {
	return t.length > A_ ? e(...k_(t).map((t) => e(...t))) : e(...t);
}
function M_(e) {
	let t = e.nodes().map((t) => {
		let n = e.node(t).rank;
		return n === void 0 ? Number.MIN_VALUE : n;
	});
	return j_(Math.max, t);
}
function N_(e, t) {
	let n = {
		lhs: [],
		rhs: []
	};
	return e.forEach((e) => {
		t(e) ? n.lhs.push(e) : n.rhs.push(e);
	}), n;
}
function P_(e, t) {
	let n = Date.now();
	try {
		return t();
	} finally {
		console.log(e + " time: " + (Date.now() - n) + "ms");
	}
}
function F_(e, t) {
	return t();
}
var I_ = 0;
function L_(e) {
	return e + ("" + ++I_);
}
function R_(e, t, n = 1) {
	t ?? (t = e, e = 0);
	let r = (e) => e < t;
	n < 0 && (r = (e) => t < e);
	let i = [];
	for (let t = e; r(t); t += n) i.push(t);
	return i;
}
function z_(e, t) {
	let n = {};
	for (let r of t) e[r] !== void 0 && (n[r] = e[r]);
	return n;
}
function B_(e, t) {
	let n;
	return n = typeof t == "string" ? (e) => e[t] : t, Object.entries(e).reduce((e, [t, r]) => (e[t] = n(r, t), e), {});
}
function V_(e, t) {
	return e.reduce((e, n, r) => (e[n] = t[r], e), {});
}
var H_ = "\0", U_ = class {
	constructor() {
		Pg(this, "_sentinel");
		let e = {};
		e._next = e._prev = e, this._sentinel = e;
	}
	dequeue() {
		let e = this._sentinel, t = e._prev;
		if (t !== e) return W_(t), t;
	}
	enqueue(e) {
		let t = this._sentinel;
		e._prev && e._next && W_(e), e._next = t._next, t._next._prev = e, t._next = e, e._prev = t;
	}
	toString() {
		let e = [], t = this._sentinel, n = t._prev;
		for (; n !== t;) e.push(JSON.stringify(n, G_)), n = n._prev;
		return "[" + e.join(", ") + "]";
	}
};
function W_(e) {
	e._prev._next = e._next, e._next._prev = e._prev, delete e._next, delete e._prev;
}
function G_(e, t) {
	if (e !== "_next" && e !== "_prev") return t;
}
var K_ = U_, q_ = () => 1;
function J_(e, t) {
	if (e.nodeCount() <= 1) return [];
	let n = Z_(e, t || q_);
	return Y_(n.graph, n.buckets, n.zeroIdx).flatMap((t) => e.outEdges(t.v, t.w) || []);
}
function Y_(e, t, n) {
	let r = [], i = t[t.length - 1], a = t[0], o;
	for (; e.nodeCount();) {
		for (; o = a.dequeue();) X_(e, t, n, o);
		for (; o = i.dequeue();) X_(e, t, n, o);
		if (e.nodeCount()) {
			for (let i = t.length - 2; i > 0; --i) if (o = t[i]?.dequeue(), o) {
				r = r.concat(X_(e, t, n, o, !0) || []);
				break;
			}
		}
	}
	return r;
}
function X_(e, t, n, r, i) {
	let a = [], o = i ? a : void 0;
	return (e.inEdges(r.v) || []).forEach((r) => {
		let o = e.edge(r), s = e.node(r.v);
		i && a.push({
			v: r.v,
			w: r.w
		}), s.out -= o, Q_(t, n, s);
	}), (e.outEdges(r.v) || []).forEach((r) => {
		let i = e.edge(r), a = r.w, o = e.node(a);
		o.in -= i, Q_(t, n, o);
	}), e.removeNode(r.v), o;
}
function Z_(e, t) {
	let n = new Z(), r = 0, i = 0;
	e.nodes().forEach((e) => {
		n.setNode(e, {
			v: e,
			in: 0,
			out: 0
		});
	}), e.edges().forEach((e) => {
		let a = n.edge(e.v, e.w) || 0, o = t(e), s = a + o;
		n.setEdge(e.v, e.w, s);
		let c = n.node(e.v), l = n.node(e.w);
		i = Math.max(i, c.out += o), r = Math.max(r, l.in += o);
	});
	let a = $_(i + r + 3).map(() => new K_()), o = r + 1;
	return n.nodes().forEach((e) => {
		Q_(a, o, n.node(e));
	}), {
		graph: n,
		buckets: a,
		zeroIdx: o
	};
}
function Q_(e, t, n) {
	var r, i, a;
	n.out ? n.in ? (a = e[n.out - n.in + t]) == null || a.enqueue(n) : (i = e[e.length - 1]) == null || i.enqueue(n) : (r = e[0]) == null || r.enqueue(n);
}
function $_(e) {
	let t = [];
	for (let n = 0; n < e; n++) t.push(n);
	return t;
}
function ev(e) {
	(e.graph().acyclicer === "greedy" ? J_(e, t(e)) : tv(e)).forEach((t) => {
		let n = e.edge(t);
		e.removeEdge(t), n.forwardName = t.name, n.reversed = !0, e.setEdge(t.w, t.v, n, L_("rev"));
	});
	function t(e) {
		return (t) => e.edge(t).weight;
	}
}
function tv(e) {
	let t = [], n = {}, r = {};
	function i(a) {
		Object.hasOwn(r, a) || (r[a] = !0, n[a] = !0, e.outEdges(a).forEach((e) => {
			Object.hasOwn(n, e.w) ? t.push(e) : i(e.w);
		}), delete n[a]);
	}
	return e.nodes().forEach(i), t;
}
function nv(e) {
	e.edges().forEach((t) => {
		let n = e.edge(t);
		if (n.reversed) {
			e.removeEdge(t);
			let r = n.forwardName;
			delete n.reversed, delete n.forwardName, e.setEdge(t.w, t.v, n, r);
		}
	});
}
function rv(e) {
	e.graph().dummyChains = [], e.edges().forEach((t) => iv(e, t));
}
function iv(e, t) {
	let n = t.v, r = e.node(n).rank, i = t.w, a = e.node(i).rank, o = t.name, s = e.edge(t), c = s.labelRank;
	if (a === r + 1) return;
	e.removeEdge(t);
	let l, u, d;
	for (d = 0, ++r; r < a; ++d, ++r) s.points = [], u = {
		width: 0,
		height: 0,
		edgeLabel: s,
		edgeObj: t,
		rank: r
	}, l = x_(e, "edge", u, "_d"), r === c && (u.width = s.width, u.height = s.height, u.dummy = "edge-label", u.labelpos = s.labelpos), e.setEdge(n, l, { weight: s.weight }, o), d === 0 && e.graph().dummyChains.push(l), n = l;
	e.setEdge(n, i, { weight: s.weight }, o);
}
function av(e) {
	e.graph().dummyChains.forEach((t) => {
		let n = e.node(t), r = n.edgeLabel, i;
		for (e.setEdge(n.edgeObj, r); n.dummy;) i = e.successors(t)[0], e.removeNode(t), r.points.push({
			x: n.x,
			y: n.y
		}), n.dummy === "edge-label" && (r.x = n.x, r.y = n.y, r.width = n.width, r.height = n.height), t = i, n = e.node(t);
	});
}
function ov(e) {
	let t = {};
	function n(r) {
		let i = e.node(r);
		if (Object.hasOwn(t, r)) return i.rank;
		t[r] = !0;
		let a = e.outEdges(r), o = a ? a.map((t) => t == null ? Infinity : n(t.w) - e.edge(t).minlen) : [], s = j_(Math.min, o);
		return s === Infinity && (s = 0), i.rank = s;
	}
	e.sources().forEach(n);
}
function sv(e, t) {
	return e.node(t.w).rank - e.node(t.v).rank - e.edge(t).minlen;
}
var cv = lv;
function lv(e) {
	let t = new Z({ directed: !1 }), n = e.nodes();
	if (n.length === 0) throw Error("Graph must have at least one node");
	let r = n[0], i = e.nodeCount();
	t.setNode(r, {});
	let a, o;
	for (; uv(t, e) < i && (a = dv(t, e), a);) o = t.hasNode(a.v) ? sv(e, a) : -sv(e, a), fv(t, e, o);
	return t;
}
function uv(e, t) {
	function n(r) {
		let i = t.nodeEdges(r);
		i && i.forEach((i) => {
			let a = i.v, o = r === a ? i.w : a;
			!e.hasNode(o) && !sv(t, i) && (e.setNode(o, {}), e.setEdge(r, o, {}), n(o));
		});
	}
	return e.nodes().forEach(n), e.nodeCount();
}
function dv(e, t) {
	return t.edges().reduce((n, r) => {
		let i = Infinity;
		return e.hasNode(r.v) !== e.hasNode(r.w) && (i = sv(t, r)), i < n[0] ? [i, r] : n;
	}, [Infinity, null])[1];
}
function fv(e, t, n) {
	e.nodes().forEach((e) => t.node(e).rank += n);
}
var { preorder: pv, postorder: mv } = Yg, hv = gv;
gv.initLowLimValues = bv, gv.initCutValues = _v, gv.calcCutValue = yv, gv.leaveEdge = Sv, gv.enterEdge = Cv, gv.exchangeEdges = wv;
function gv(e) {
	e = S_(e), ov(e);
	let t = cv(e);
	bv(t), _v(t, e);
	let n, r;
	for (; n = Sv(t);) r = Cv(t, e, n), wv(t, e, n, r);
}
function _v(e, t) {
	let n = mv(e, e.nodes());
	n = n.slice(0, n.length - 1), n.forEach((n) => vv(e, t, n));
}
function vv(e, t, n) {
	let r = e.node(n).parent, i = e.edge(n, r);
	i.cutvalue = yv(e, t, n);
}
function yv(e, t, n) {
	let r = e.node(n).parent, i = !0, a = t.edge(n, r), o = 0;
	a ||= (i = !1, t.edge(r, n)), o = a.weight;
	let s = t.nodeEdges(n);
	return s && s.forEach((a) => {
		let s = a.v === n, c = s ? a.w : a.v;
		if (c !== r) {
			let r = s === i, l = t.edge(a).weight;
			if (o += r ? l : -l, Ev(e, n, c)) {
				let t = e.edge(n, c).cutvalue;
				o += r ? -t : t;
			}
		}
	}), o;
}
function bv(e, t) {
	arguments.length < 2 && (t = e.nodes()[0]), xv(e, {}, 1, t);
}
function xv(e, t, n, r, i) {
	let a = n, o = e.node(r);
	t[r] = !0;
	let s = e.neighbors(r);
	return s && s.forEach((i) => {
		Object.hasOwn(t, i) || (n = xv(e, t, n, i, r));
	}), o.low = a, o.lim = n++, i ? o.parent = i : delete o.parent, n;
}
function Sv(e) {
	return e.edges().find((t) => e.edge(t).cutvalue < 0);
}
function Cv(e, t, n) {
	let r = n.v, i = n.w;
	t.hasEdge(r, i) || (r = n.w, i = n.v);
	let a = e.node(r), o = e.node(i), s = a, c = !1;
	return a.lim > o.lim && (s = o, c = !0), t.edges().filter((t) => c === Dv(e, e.node(t.v), s) && c !== Dv(e, e.node(t.w), s)).reduce((e, n) => sv(t, n) < sv(t, e) ? n : e);
}
function wv(e, t, n, r) {
	let i = n.v, a = n.w;
	e.removeEdge(i, a), e.setEdge(r.v, r.w, {}), bv(e), _v(e, t), Tv(e, t);
}
function Tv(e, t) {
	let n = e.nodes().find((t) => !e.node(t).parent);
	if (!n) return;
	let r = pv(e, [n]);
	r = r.slice(1), r.forEach((n) => {
		let r = e.node(n).parent, i = t.edge(n, r), a = !1;
		i || (i = t.edge(r, n), a = !0), t.node(n).rank = t.node(r).rank + (a ? i.minlen : -i.minlen);
	});
}
function Ev(e, t, n) {
	return e.hasEdge(t, n);
}
function Dv(e, t, n) {
	return n.low <= t.lim && t.lim <= n.lim;
}
var Ov = kv;
function kv(e) {
	let t = e.graph().ranker;
	if (typeof t == "function") return t(e);
	switch (t) {
		case "network-simplex":
			Mv(e);
			break;
		case "tight-tree":
			jv(e);
			break;
		case "longest-path":
			Av(e);
			break;
		case "none": break;
		default: Mv(e);
	}
}
var Av = ov;
function jv(e) {
	ov(e), cv(e);
}
function Mv(e) {
	hv(e);
}
var Nv = Pv;
function Pv(e) {
	let t = Iv(e);
	e.graph().dummyChains.forEach((n) => {
		let r = e.node(n), i = r.edgeObj, a = Fv(e, t, i.v, i.w), o = a.path, s = a.lca, c = 0, l = o[c], u = !0;
		for (; n !== i.w;) {
			if (r = e.node(n), u) {
				for (; (l = o[c]) !== s && e.node(l).maxRank < r.rank;) c++;
				l === s && (u = !1);
			}
			if (!u) {
				for (; c < o.length - 1 && e.node(o[c + 1]).minRank <= r.rank;) c++;
				l = o[c];
			}
			l !== void 0 && e.setParent(n, l), n = e.successors(n)[0];
		}
	});
}
function Fv(e, t, n, r) {
	let i = [], a = [], o = Math.min(t[n].low, t[r].low), s = Math.max(t[n].lim, t[r].lim), c;
	c = n;
	do
		c = e.parent(c), i.push(c);
	while (c && (t[c].low > o || s > t[c].lim));
	let l = c, u = r;
	for (; (u = e.parent(u)) !== l;) a.push(u);
	return {
		path: i.concat(a.reverse()),
		lca: l
	};
}
function Iv(e) {
	let t = {}, n = 0;
	function r(i) {
		let a = n;
		e.children(i).forEach(r), t[i] = {
			low: a,
			lim: n++
		};
	}
	return e.children(H_).forEach(r), t;
}
function Lv(e) {
	let t = x_(e, "root", {}, "_root"), n = zv(e), r = Object.values(n), i = j_(Math.max, r) - 1, a = 2 * i + 1;
	e.graph().nestingRoot = t, e.edges().forEach((t) => e.edge(t).minlen *= a);
	let o = Bv(e) + 1;
	e.children(H_).forEach((r) => Rv(e, t, a, o, i, n, r)), e.graph().nodeRankFactor = a;
}
function Rv(e, t, n, r, i, a, o) {
	let s = e.children(o);
	if (!s.length) {
		o !== t && e.setEdge(t, o, {
			weight: 0,
			minlen: n
		});
		return;
	}
	let c = O_(e, "_bt"), l = O_(e, "_bb"), u = e.node(o);
	e.setParent(c, o), u.borderTop = c, e.setParent(l, o), u.borderBottom = l, s.forEach((s) => {
		Rv(e, t, n, r, i, a, s);
		let u = e.node(s), d = u.borderTop ? u.borderTop : s, f = u.borderBottom ? u.borderBottom : s, p = u.borderTop ? r : 2 * r, m = d === f ? i - (a[o] ?? 0) + 1 : 1;
		e.setEdge(c, d, {
			weight: p,
			minlen: m,
			nestingEdge: !0
		}), e.setEdge(f, l, {
			weight: p,
			minlen: m,
			nestingEdge: !0
		});
	}), e.parent(o) || e.setEdge(t, c, {
		weight: 0,
		minlen: i + (a[o] ?? 0)
	});
}
function zv(e) {
	let t = {};
	function n(r, i) {
		let a = e.children(r);
		a && a.length && a.forEach((e) => n(e, i + 1)), t[r] = i;
	}
	return e.children(H_).forEach((e) => n(e, 1)), t;
}
function Bv(e) {
	return e.edges().reduce((t, n) => t + e.edge(n).weight, 0);
}
function Vv(e) {
	let t = e.graph();
	e.removeNode(t.nestingRoot), delete t.nestingRoot, e.edges().forEach((t) => {
		e.edge(t).nestingEdge && e.removeEdge(t);
	});
}
var Hv = Uv;
function Uv(e) {
	function t(n) {
		let r = e.children(n), i = e.node(n);
		if (r.length && r.forEach(t), Object.hasOwn(i, "minRank")) {
			i.borderLeft = [], i.borderRight = [];
			for (let t = i.minRank, r = i.maxRank + 1; t < r; ++t) Wv(e, "borderLeft", "_bl", n, i, t), Wv(e, "borderRight", "_br", n, i, t);
		}
	}
	e.children(H_).forEach(t);
}
function Wv(e, t, n, r, i, a) {
	let o = {
		width: 0,
		height: 0,
		rank: a,
		borderType: t
	}, s = i[t][a - 1], c = x_(e, "border", o, n);
	i[t][a] = c, e.setParent(c, r), s && e.setEdge(s, c, { weight: 1 });
}
function Gv(e) {
	let t = e.graph().rankdir?.toLowerCase();
	(t === "lr" || t === "rl") && qv(e);
}
function Kv(e) {
	let t = e.graph().rankdir?.toLowerCase();
	(t === "bt" || t === "rl") && Yv(e), (t === "lr" || t === "rl") && (Zv(e), qv(e));
}
function qv(e) {
	e.nodes().forEach((t) => Jv(e.node(t))), e.edges().forEach((t) => Jv(e.edge(t)));
}
function Jv(e) {
	let t = e.width;
	e.width = e.height, e.height = t;
}
function Yv(e) {
	e.nodes().forEach((t) => Xv(e.node(t))), e.edges().forEach((t) => {
		var n;
		let r = e.edge(t);
		(n = r.points) == null || n.forEach(Xv), Object.hasOwn(r, "y") && Xv(r);
	});
}
function Xv(e) {
	e.y = -e.y;
}
function Zv(e) {
	e.nodes().forEach((t) => Qv(e.node(t))), e.edges().forEach((t) => {
		var n;
		let r = e.edge(t);
		(n = r.points) == null || n.forEach(Qv), Object.hasOwn(r, "x") && Qv(r);
	});
}
function Qv(e) {
	let t = e.x;
	e.x = e.y, e.y = t;
}
function $v(e) {
	let t = {}, n = e.nodes().filter((t) => !e.children(t).length), r = n.map((t) => e.node(t).rank), i = R_(j_(Math.max, r) + 1).map(() => []);
	function a(n) {
		if (t[n]) return;
		t[n] = !0;
		let r = e.node(n);
		i[r.rank].push(n);
		let o = e.successors(n);
		o && o.forEach(a);
	}
	return n.sort((t, n) => e.node(t).rank - e.node(n).rank).forEach(a), i;
}
function ey(e, t) {
	let n = 0;
	for (let r = 1; r < t.length; ++r) n += ty(e, t[r - 1], t[r]);
	return n;
}
function ty(e, t, n) {
	let r = V_(n, n.map((e, t) => t)), i = t.flatMap((t) => {
		let n = e.outEdges(t);
		return n ? n.map((t) => ({
			pos: r[t.w],
			weight: e.edge(t).weight
		})).sort((e, t) => e.pos - t.pos) : [];
	}), a = 1;
	for (; a < n.length;) a <<= 1;
	let o = 2 * a - 1;
	--a;
	let s = Array(o).fill(0), c = 0;
	return i.forEach((e) => {
		let t = e.pos + a;
		s[t] += e.weight;
		let n = 0;
		for (; t > 0;) t % 2 && (n += s[t + 1]), t = t - 1 >> 1, s[t] += e.weight;
		c += e.weight * n;
	}), c;
}
function ny(e, t = []) {
	return t.map((t) => {
		let n = e.inEdges(t);
		if (!n || !n.length) return { v: t };
		{
			let r = n.reduce((t, n) => {
				let r = e.edge(n), i = e.node(n.v);
				return {
					sum: t.sum + r.weight * i.order,
					weight: t.weight + r.weight
				};
			}, {
				sum: 0,
				weight: 0
			});
			return {
				v: t,
				barycenter: r.sum / r.weight,
				weight: r.weight
			};
		}
	});
}
function ry(e, t) {
	let n = {};
	return e.forEach((e, t) => {
		let r = {
			indegree: 0,
			in: [],
			out: [],
			vs: [e.v],
			i: t
		};
		e.barycenter !== void 0 && (r.barycenter = e.barycenter, r.weight = e.weight), n[e.v] = r;
	}), t.edges().forEach((e) => {
		let t = n[e.v], r = n[e.w];
		t !== void 0 && r !== void 0 && (r.indegree++, t.out.push(r));
	}), iy(Object.values(n).filter((e) => !e.indegree));
}
function iy(e) {
	let t = [];
	function n(e) {
		return (t) => {
			t.merged || (t.barycenter === void 0 || e.barycenter === void 0 || t.barycenter >= e.barycenter) && ay(e, t);
		};
	}
	function r(t) {
		return (n) => {
			n.in.push(t), --n.indegree === 0 && e.push(n);
		};
	}
	for (; e.length;) {
		let i = e.pop();
		t.push(i), i.in.reverse().forEach(n(i)), i.out.forEach(r(i));
	}
	return t.filter((e) => !e.merged).map((e) => z_(e, [
		"vs",
		"i",
		"barycenter",
		"weight"
	]));
}
function ay(e, t) {
	let n = 0, r = 0;
	e.weight && (n += e.barycenter * e.weight, r += e.weight), t.weight && (n += t.barycenter * t.weight, r += t.weight), e.vs = t.vs.concat(e.vs), e.barycenter = n / r, e.weight = r, e.i = Math.min(t.i, e.i), t.merged = !0;
}
function oy(e, t) {
	let n = N_(e, (e) => Object.hasOwn(e, "barycenter")), r = n.lhs, i = n.rhs.sort((e, t) => t.i - e.i), a = [], o = 0, s = 0, c = 0;
	r.sort(cy(!!t)), c = sy(a, i, c), r.forEach((e) => {
		c += e.vs.length, a.push(e.vs), o += e.barycenter * e.weight, s += e.weight, c = sy(a, i, c);
	});
	let l = { vs: a.flat(1) };
	return s && (l.barycenter = o / s, l.weight = s), l;
}
function sy(e, t, n) {
	let r;
	for (; t.length && (r = t[t.length - 1]).i <= n;) t.pop(), e.push(r.vs), n++;
	return n;
}
function cy(e) {
	return (t, n) => t.barycenter < n.barycenter ? -1 : t.barycenter > n.barycenter ? 1 : e ? n.i - t.i : t.i - n.i;
}
function ly(e, t, n, r) {
	let i = e.children(t), a = e.node(t), o = a ? a.borderLeft : void 0, s = a ? a.borderRight : void 0, c = {};
	o && (i = i.filter((e) => e !== o && e !== s));
	let l = ny(e, i);
	l.forEach((t) => {
		if (e.children(t.v).length) {
			let i = ly(e, t.v, n, r);
			c[t.v] = i, Object.hasOwn(i, "barycenter") && dy(t, i);
		}
	});
	let u = ry(l, n);
	uy(u, c);
	let d = oy(u, r);
	if (o && s) {
		d.vs = [
			o,
			d.vs,
			s
		].flat(1);
		let t = e.predecessors(o);
		if (t && t.length) {
			let n = e.node(t[0]), r = e.predecessors(s), i = e.node(r[0]);
			Object.hasOwn(d, "barycenter") || (d.barycenter = 0, d.weight = 0), d.barycenter = (d.barycenter * d.weight + n.order + i.order) / (d.weight + 2), d.weight += 2;
		}
	}
	return d;
}
function uy(e, t) {
	e.forEach((e) => {
		e.vs = e.vs.flatMap((e) => t[e] ? t[e].vs : e);
	});
}
function dy(e, t) {
	e.barycenter === void 0 ? (e.barycenter = t.barycenter, e.weight = t.weight) : (e.barycenter = (e.barycenter * e.weight + t.barycenter * t.weight) / (e.weight + t.weight), e.weight += t.weight);
}
function fy(e, t, n, r) {
	r ||= e.nodes();
	let i = py(e), a = new Z({ compound: !0 }).setGraph({ root: i }).setDefaultNodeLabel((t) => e.node(t));
	return r.forEach((r) => {
		let o = e.node(r), s = e.parent(r);
		if (o.rank === t || o.minRank <= t && t <= o.maxRank) {
			a.setNode(r), a.setParent(r, s || i);
			let c = e[n](r);
			c && c.forEach((t) => {
				let n = t.v === r ? t.w : t.v, i = a.edge(n, r), o = i === void 0 ? 0 : i.weight;
				a.setEdge(n, r, { weight: e.edge(t).weight + o });
			}), Object.hasOwn(o, "minRank") && a.setNode(r, {
				borderLeft: o.borderLeft[t],
				borderRight: o.borderRight[t]
			});
		}
	}), a;
}
function py(e) {
	let t;
	for (; e.hasNode(t = L_("_root")););
	return t;
}
function my(e, t, n) {
	let r = {}, i;
	n.forEach((n) => {
		let a = e.parent(n), o, s;
		for (; a;) {
			if (o = e.parent(a), o ? (s = r[o], r[o] = a) : (s = i, i = a), s && s !== a) {
				t.setEdge(s, a);
				return;
			}
			a = o;
		}
	});
}
function hy(e, t = {}) {
	if (typeof t.customOrder == "function") {
		t.customOrder(e, hy);
		return;
	}
	let n = M_(e), r = gy(e, R_(1, n + 1), "inEdges"), i = gy(e, R_(n - 1, -1, -1), "outEdges"), a = $v(e);
	if (vy(e, a), t.disableOptimalOrderHeuristic) return;
	let o = Infinity, s, c = t.constraints || [];
	for (let t = 0, n = 0; n < 4; ++t, ++n) {
		_y(t % 2 ? r : i, t % 4 >= 2, c), a = T_(e);
		let l = ey(e, a);
		l < o ? (n = 0, s = Object.assign({}, a), o = l) : l === o && (s = structuredClone(a));
	}
	vy(e, s);
}
function gy(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i = (e, t) => {
		r.has(e) || r.set(e, []), r.get(e).push(t);
	};
	for (let t of e.nodes()) {
		let n = e.node(t);
		if (typeof n.rank == "number" && i(n.rank, t), typeof n.minRank == "number" && typeof n.maxRank == "number") for (let e = n.minRank; e <= n.maxRank; e++) e !== n.rank && i(e, t);
	}
	return t.map(function(t) {
		return fy(e, t, n, r.get(t) || []);
	});
}
function _y(e, t, n) {
	let r = new Z();
	e.forEach(function(e) {
		n.forEach((e) => r.setEdge(e.left, e.right));
		let i = e.graph().root, a = ly(e, i, r, t);
		a.vs.forEach((t, n) => e.node(t).order = n), my(e, r, a.vs);
	});
}
function vy(e, t) {
	Object.values(t).forEach((t) => t.forEach((t, n) => e.node(t).order = n));
}
function yy(e, t) {
	let n = {};
	function r(t, r) {
		let i = 0, a = 0, o = t.length, s = r[r.length - 1];
		return r.forEach((t, c) => {
			let l = xy(e, t), u = l ? e.node(l).order : o;
			(l || t === s) && (r.slice(a, c + 1).forEach((t) => {
				let r = e.predecessors(t);
				r && r.forEach((r) => {
					let a = e.node(r), o = a.order;
					(o < i || u < o) && !(a.dummy && e.node(t).dummy) && Sy(n, r, t);
				});
			}), a = c + 1, i = u);
		}), r;
	}
	return t.length && t.reduce(r), n;
}
function by(e, t) {
	let n = {};
	function r(t, r, i, a, o) {
		R_(r, i).forEach((r) => {
			let i = t[r];
			if (i !== void 0 && e.node(i).dummy) {
				let t = e.predecessors(i);
				t && t.forEach((t) => {
					if (t === void 0) return;
					let r = e.node(t);
					r.dummy && (r.order < a || r.order > o) && Sy(n, t, i);
				});
			}
		});
	}
	function i(t, n) {
		let i = -1, a = -1, o = 0;
		return n.forEach((s, c) => {
			if (e.node(s).dummy === "border") {
				let t = e.predecessors(s);
				if (t && t.length) {
					let s = t[0];
					if (s === void 0) return;
					a = e.node(s).order, r(n, o, c, i, a), o = c, i = a;
				}
			}
			r(n, o, n.length, a, t.length);
		}), n;
	}
	return t.length && t.reduce(i), n;
}
function xy(e, t) {
	if (e.node(t).dummy) {
		let n = e.predecessors(t);
		if (n) return n.find((t) => e.node(t).dummy);
	}
}
function Sy(e, t, n) {
	if (t > n) {
		let e = t;
		t = n, n = e;
	}
	let r = e[t];
	r || (e[t] = r = {}), r[n] = !0;
}
function Cy(e, t, n) {
	if (t > n) {
		let e = t;
		t = n, n = e;
	}
	let r = e[t];
	return r !== void 0 && Object.hasOwn(r, n);
}
function wy(e, t, n, r) {
	let i = {}, a = {}, o = {};
	return t.forEach((e) => {
		e.forEach((e, t) => {
			i[e] = e, a[e] = e, o[e] = t;
		});
	}), t.forEach((e) => {
		let t = -1;
		e.forEach((e) => {
			let s = r(e);
			if (s && s.length) {
				let r = s.sort((e, t) => {
					let n = o[e], r = o[t];
					return (n === void 0 ? 0 : n) - (r === void 0 ? 0 : r);
				}), c = (r.length - 1) / 2;
				for (let s = Math.floor(c), l = Math.ceil(c); s <= l; ++s) {
					let c = r[s];
					if (c === void 0) continue;
					let l = o[c];
					if (l !== void 0 && a[e] === e && t < l && !Cy(n, e, c)) {
						let n = i[c];
						n !== void 0 && (a[c] = e, a[e] = i[e] = n, t = l);
					}
				}
			}
		});
	}), {
		root: i,
		align: a
	};
}
function Ty(e, t, n, r, i = !1) {
	let a = {}, o = Ey(e, t, n, i), s = i ? "borderLeft" : "borderRight";
	function c(e, t) {
		let n = o.nodes().slice(), r = {}, i = n.pop();
		for (; i;) {
			if (r[i]) e(i);
			else {
				r[i] = !0, n.push(i);
				for (let e of t(i)) n.push(e);
			}
			i = n.pop();
		}
	}
	function l(e) {
		let t = o.inEdges(e);
		t ? a[e] = t.reduce((e, t) => {
			let n = a[t.v] ?? 0, r = o.edge(t);
			return Math.max(e, n + (r === void 0 ? 0 : r));
		}, 0) : a[e] = 0;
	}
	function u(t) {
		let n = o.outEdges(t), r = Infinity;
		n && (r = n.reduce((e, t) => {
			let n = a[t.w], r = o.edge(t);
			return Math.min(e, (n === void 0 ? 0 : n) - (r === void 0 ? 0 : r));
		}, Infinity));
		let i = e.node(t);
		r !== Infinity && i.borderType !== s && (a[t] = Math.max(a[t] === void 0 ? 0 : a[t], r));
	}
	function d(e) {
		return o.predecessors(e) || [];
	}
	function f(e) {
		return o.successors(e) || [];
	}
	return c(l, d), c(u, f), Object.keys(r).forEach((e) => {
		let t = n[e];
		t !== void 0 && (a[e] = a[t] ?? 0);
	}), a;
}
function Ey(e, t, n, r) {
	let i = new Z(), a = e.graph(), o = jy(a.nodesep, a.edgesep, r);
	return t.forEach((t) => {
		let r;
		t.forEach((t) => {
			let a = n[t];
			if (a !== void 0) {
				if (i.setNode(a), r !== void 0) {
					let s = n[r];
					if (s !== void 0) {
						let n = i.edge(s, a);
						i.setEdge(s, a, Math.max(o(e, t, r), n || 0));
					}
				}
				r = t;
			}
		});
	}), i;
}
function Dy(e, t) {
	return Object.values(t).reduce((t, n) => {
		let r = -Infinity, i = Infinity;
		Object.entries(n).forEach(([t, n]) => {
			let a = My(e, t) / 2;
			r = Math.max(n + a, r), i = Math.min(n - a, i);
		});
		let a = r - i;
		return a < t[0] && (t = [a, n]), t;
	}, [Infinity, null])[1];
}
function Oy(e, t) {
	let n = Object.values(t), r = j_(Math.min, n), i = j_(Math.max, n);
	["u", "d"].forEach((n) => {
		["l", "r"].forEach((a) => {
			let o = n + a, s = e[o];
			if (!s || s === t) return;
			let c = Object.values(s), l = r - j_(Math.min, c);
			a !== "l" && (l = i - j_(Math.max, c)), l && (e[o] = B_(s, (e) => e + l));
		});
	});
}
function ky(e, t = void 0) {
	let n = e.ul;
	return n ? B_(n, (n, r) => {
		if (t) {
			let n = e[t.toLowerCase()];
			if (n && n[r] !== void 0) return n[r];
		}
		let i = Object.values(e).map((e) => {
			let t = e[r];
			return t === void 0 ? 0 : t;
		}).sort((e, t) => e - t);
		return ((i[1] ?? 0) + (i[2] ?? 0)) / 2;
	}) : {};
}
function Ay(e) {
	let t = T_(e), n = Object.assign(yy(e, t), by(e, t)), r = {}, i;
	return ["u", "d"].forEach((a) => {
		i = a === "u" ? t : Object.values(t).reverse(), ["l", "r"].forEach((t) => {
			t === "r" && (i = i.map((e) => Object.values(e).reverse()));
			let o = wy(e, i, n, (t) => (a === "u" ? e.predecessors(t) : e.successors(t)) || []), s = Ty(e, i, o.root, o.align, t === "r");
			t === "r" && (s = B_(s, (e) => -e)), r[a + t] = s;
		});
	}), Oy(r, Dy(e, r)), ky(r, e.graph().align);
}
function jy(e, t, n) {
	return (r, i, a) => {
		let o = r.node(i), s = r.node(a), c = 0, l;
		if (c += o.width / 2, Object.hasOwn(o, "labelpos")) switch (o.labelpos.toLowerCase()) {
			case "l":
				l = -o.width / 2;
				break;
			case "r":
				l = o.width / 2;
				break;
		}
		if (l && (c += n ? l : -l), l = void 0, c += (o.dummy ? t : e) / 2, c += (s.dummy ? t : e) / 2, c += s.width / 2, Object.hasOwn(s, "labelpos")) switch (s.labelpos.toLowerCase()) {
			case "l":
				l = s.width / 2;
				break;
			case "r":
				l = -s.width / 2;
				break;
		}
		return l && (c += n ? l : -l), c;
	};
}
function My(e, t) {
	return e.node(t).width;
}
function Ny(e) {
	e = C_(e), Py(e), Object.entries(Ay(e)).forEach(([t, n]) => e.node(t).x = n);
}
function Py(e) {
	let t = T_(e), n = e.graph(), r = n.ranksep, i = n.rankalign, a = 0;
	t.forEach((t) => {
		let n = t.reduce((t, n) => {
			let r = e.node(n).height ?? 0;
			return t > r ? t : r;
		}, 0);
		t.forEach((t) => {
			let r = e.node(t);
			r.y = i === "top" ? a + r.height / 2 : i === "bottom" ? a + n - r.height / 2 : a + n / 2;
		}), a += n + r;
	});
}
function Fy(e, t = {}) {
	let n = t.debugTiming ? P_ : F_;
	return n("layout", () => {
		let r = n("  buildLayoutGraph", () => Ky(e));
		return n("  runLayout", () => Iy(r, n, t)), n("  updateInputGraph", () => Ly(e, r)), r;
	});
}
function Iy(e, t, n) {
	t("    makeSpaceForEdgeLabels", () => qy(e)), t("    removeSelfEdges", () => nb(e)), t("    acyclic", () => ev(e)), t("    nestingGraph.run", () => Lv(e)), t("    rank", () => Ov(C_(e))), t("    injectEdgeLabelProxies", () => Jy(e)), t("    removeEmptyRanks", () => D_(e)), t("    nestingGraph.cleanup", () => Vv(e)), t("    normalizeRanks", () => E_(e)), t("    assignRankMinMax", () => Yy(e)), t("    removeEdgeLabelProxies", () => Xy(e)), t("    normalize.run", () => rv(e)), t("    parentDummyChains", () => Nv(e)), t("    addBorderSegments", () => Hv(e)), t("    order", () => hy(e, n)), t("    insertSelfEdges", () => rb(e)), t("    adjustCoordinateSystem", () => Gv(e)), t("    position", () => Ny(e)), t("    positionSelfEdges", () => ib(e)), t("    removeBorderNodes", () => tb(e)), t("    normalize.undo", () => av(e)), t("    fixupEdgeLabelCoords", () => $y(e)), t("    undoCoordinateSystem", () => Kv(e)), t("    translateGraph", () => Zy(e)), t("    assignNodeIntersects", () => Qy(e)), t("    reversePoints", () => eb(e)), t("    acyclic.undo", () => nv(e));
}
function Ly(e, t) {
	e.nodes().forEach((n) => {
		let r = e.node(n), i = t.node(n);
		r && (r.x = i.x, r.y = i.y, r.order = i.order, r.rank = i.rank, t.children(n).length && (r.width = i.width, r.height = i.height));
	}), e.edges().forEach((n) => {
		let r = e.edge(n), i = t.edge(n);
		r.points = i.points, Object.hasOwn(i, "x") && (r.x = i.x, r.y = i.y);
	}), e.graph().width = t.graph().width, e.graph().height = t.graph().height;
}
var Ry = [
	"nodesep",
	"edgesep",
	"ranksep",
	"marginx",
	"marginy"
], zy = {
	ranksep: 50,
	edgesep: 20,
	nodesep: 50,
	rankdir: "TB",
	rankalign: "center"
}, By = [
	"acyclicer",
	"ranker",
	"rankdir",
	"align",
	"rankalign"
], Vy = [
	"width",
	"height",
	"rank"
], Hy = {
	width: 0,
	height: 0
}, Uy = [
	"minlen",
	"weight",
	"width",
	"height",
	"labeloffset"
], Wy = {
	minlen: 1,
	weight: 1,
	width: 0,
	height: 0,
	labeloffset: 10,
	labelpos: "r"
}, Gy = ["labelpos"];
function Ky(e) {
	let t = new Z({
		multigraph: !0,
		compound: !0
	}), n = ob(e.graph());
	return t.setGraph(Object.assign({}, zy, ab(n, Ry), z_(n, By))), e.nodes().forEach((n) => {
		let r = ab(ob(e.node(n)), Vy);
		Object.keys(Hy).forEach((e) => {
			r[e] === void 0 && (r[e] = Hy[e]);
		}), t.setNode(n, r);
		let i = e.parent(n);
		i !== void 0 && t.setParent(n, i);
	}), e.edges().forEach((n) => {
		let r = ob(e.edge(n));
		t.setEdge(n, Object.assign({}, Wy, ab(r, Uy), z_(r, Gy)));
	}), t;
}
function qy(e) {
	let t = e.graph();
	t.ranksep /= 2, e.edges().forEach((n) => {
		let r = e.edge(n);
		r.minlen *= 2, r.labelpos.toLowerCase() !== "c" && (t.rankdir === "TB" || t.rankdir === "BT" ? r.width += r.labeloffset : r.height += r.labeloffset);
	});
}
function Jy(e) {
	e.edges().forEach((t) => {
		let n = e.edge(t);
		if (n.width && n.height) {
			let n = e.node(t.v);
			x_(e, "edge-proxy", {
				rank: (e.node(t.w).rank - n.rank) / 2 + n.rank,
				e: t
			}, "_ep");
		}
	});
}
function Yy(e) {
	let t = 0;
	e.nodes().forEach((n) => {
		let r = e.node(n);
		r.borderTop && (r.minRank = e.node(r.borderTop).rank, r.maxRank = e.node(r.borderBottom).rank, t = Math.max(t, r.maxRank));
	}), e.graph().maxRank = t;
}
function Xy(e) {
	e.nodes().forEach((t) => {
		let n = e.node(t);
		if (n.dummy === "edge-proxy") {
			let r = n;
			e.edge(r.e).labelRank = n.rank, e.removeNode(t);
		}
	});
}
function Zy(e) {
	let t = Infinity, n = 0, r = Infinity, i = 0, a = e.graph(), o = a.marginx || 0, s = a.marginy || 0;
	function c(e) {
		let a = e.x, o = e.y, s = e.width, c = e.height;
		t = Math.min(t, a - s / 2), n = Math.max(n, a + s / 2), r = Math.min(r, o - c / 2), i = Math.max(i, o + c / 2);
	}
	e.nodes().forEach((t) => c(e.node(t))), e.edges().forEach((t) => {
		let n = e.edge(t);
		Object.hasOwn(n, "x") && c(n);
	}), t -= o, r -= s, e.nodes().forEach((n) => {
		let i = e.node(n);
		i.x -= t, i.y -= r;
	}), e.edges().forEach((n) => {
		let i = e.edge(n);
		i.points.forEach((e) => {
			e.x -= t, e.y -= r;
		}), Object.hasOwn(i, "x") && (i.x -= t), Object.hasOwn(i, "y") && (i.y -= r);
	}), a.width = n - t + o, a.height = i - r + s;
}
function Qy(e) {
	e.edges().forEach((t) => {
		let n = e.edge(t), r = e.node(t.v), i = e.node(t.w), a, o;
		n.points ? (a = n.points[0], o = n.points[n.points.length - 1]) : (n.points = [], a = i, o = r), n.points.unshift(w_(r, a)), n.points.push(w_(i, o));
	});
}
function $y(e) {
	e.edges().forEach((t) => {
		let n = e.edge(t);
		if (Object.hasOwn(n, "x")) switch ((n.labelpos === "l" || n.labelpos === "r") && (n.width -= n.labeloffset), n.labelpos) {
			case "l":
				n.x -= n.width / 2 + n.labeloffset;
				break;
			case "r":
				n.x += n.width / 2 + n.labeloffset;
				break;
		}
	});
}
function eb(e) {
	e.edges().forEach((t) => {
		let n = e.edge(t);
		n.reversed && n.points.reverse();
	});
}
function tb(e) {
	e.nodes().forEach((t) => {
		if (e.children(t).length) {
			let n = e.node(t), r = e.node(n.borderTop), i = e.node(n.borderBottom), a = e.node(n.borderLeft[n.borderLeft.length - 1]), o = e.node(n.borderRight[n.borderRight.length - 1]);
			n.width = Math.abs(o.x - a.x), n.height = Math.abs(i.y - r.y), n.x = a.x + n.width / 2, n.y = r.y + n.height / 2;
		}
	}), e.nodes().forEach((t) => {
		e.node(t).dummy === "border" && e.removeNode(t);
	});
}
function nb(e) {
	e.edges().forEach((t) => {
		if (t.v === t.w) {
			let n = e.node(t.v);
			n.selfEdges ||= [], n.selfEdges.push({
				e: t,
				label: e.edge(t)
			}), e.removeEdge(t);
		}
	});
}
function rb(e) {
	T_(e).forEach((t) => {
		let n = 0;
		t.forEach((t, r) => {
			let i = e.node(t);
			i.order = r + n, (i.selfEdges || []).forEach((t) => {
				x_(e, "selfedge", {
					width: t.label.width,
					height: t.label.height,
					rank: i.rank,
					order: r + ++n,
					e: t.e,
					label: t.label
				}, "_se");
			}), delete i.selfEdges;
		});
	});
}
function ib(e) {
	e.nodes().forEach((t) => {
		let n = e.node(t);
		if (n.dummy === "selfedge") {
			let r = n, i = e.node(r.e.v), a = i.x + i.width / 2, o = i.y, s = n.x - a, c = i.height / 2;
			e.setEdge(r.e, r.label), e.removeNode(t), r.label.points = [
				{
					x: a + 2 * s / 3,
					y: o - c
				},
				{
					x: a + 5 * s / 6,
					y: o - c
				},
				{
					x: a + s,
					y: o
				},
				{
					x: a + 5 * s / 6,
					y: o + c
				},
				{
					x: a + 2 * s / 3,
					y: o + c
				}
			], r.label.x = n.x, r.label.y = n.y;
		}
	});
}
function ab(e, t) {
	return B_(z_(e, t), Number);
}
function ob(e) {
	let t = {};
	return e && Object.entries(e).forEach(([e, n]) => {
		typeof e == "string" && (e = e.toLowerCase()), t[e] = n;
	}), t;
}
//#endregion
//#region src/erdDiagram.ts
var sb = 160, cb = 50, lb = 8, ub = 24, db = {
	child: {
		fill: "#dae8fc",
		stroke: "#6c8ebf"
	},
	primary: {
		fill: "#d5e8d4",
		stroke: "#82b366"
	}
}, fb = "dpuse-tool-d3-erd-arrow";
function pb(e, t, n = {}) {
	let r = n.nodeWidth ?? sb, i = n.nodeHeight ?? cb, a = n.padding ?? lb, o = n.selfEdgeSize ?? ub, s = n.nodeColors ?? db;
	function c() {
		F(t).selectAll("svg").remove();
		let n = new Fg.Graph();
		n.setGraph({
			rankdir: "TB",
			nodesep: 40,
			ranksep: 60
		}), n.setDefaultEdgeLabel(() => ({}));
		for (let t of e.nodes) n.setNode(t.id, {
			width: r,
			height: i,
			label: t.label,
			typeId: t.typeId
		});
		for (let t of e.edges) t.source === t.target ? n.setEdge(t.source, t.target, {
			width: o,
			height: o
		}) : n.setEdge(t.source, t.target);
		Fy(n);
		let { width: c = 0, height: l = 0 } = n.graph(), u = c + a * 2, d = l + a * 2, f = F(t).append("svg").attr("viewBox", `0 0 ${String(u)} ${String(d)}`).attr("width", u).attr("height", d), p = f.append("g").attr("transform", `translate(${String(a)}, ${String(a)})`);
		f.append("defs").append("marker").attr("id", fb).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", "auto-start-reverse").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("fill", "#6c8ebf");
		let m = $f().x((e) => e.x).y((e) => e.y).curve(np);
		p.append("g").attr("fill", "none").attr("stroke", "#6c8ebf").attr("stroke-width", 1.5).selectAll("path").data(n.edges()).join("path").attr("marker-end", `url(#${fb})`).attr("d", (e) => e.v === e.w ? mb(n.node(e.v), o) : m(n.edge(e).points ?? []) ?? "");
		let h = p.append("g").selectAll("g").data(n.nodes()).join("g").attr("transform", (e) => {
			let t = n.node(e);
			return `translate(${String((t.x ?? 0) - t.width / 2)}, ${String((t.y ?? 0) - t.height / 2)})`;
		});
		h.append("rect").attr("width", (e) => n.node(e).width).attr("height", (e) => n.node(e).height).attr("rx", 6).attr("fill", (e) => s[n.node(e).typeId].fill).attr("stroke", (e) => s[n.node(e).typeId].stroke), h.append("text").attr("x", (e) => n.node(e).width / 2).attr("y", (e) => n.node(e).height / 2).attr("text-anchor", "middle").attr("dominant-baseline", "middle").attr("font-family", "Helvetica, Arial, sans-serif").attr("font-size", 14).attr("fill", "#000000").text((e) => n.node(e).label ?? "");
		let g = f.node();
		if (g == null) throw Error("Failed to create ERD diagram SVG element.");
		return g;
	}
	let l = c();
	return {
		resize: () => {
			l = c();
		},
		get svg() {
			return l;
		}
	};
}
function mb(e, t) {
	let n = (e.x ?? 0) + e.width / 2, r = n + t, i = (e.y ?? 0) - e.height / 4, a = (e.y ?? 0) + e.height / 4;
	return `M ${String(n)} ${String(i)} C ${String(r)} ${String(i)}, ${String(r)} ${String(a)}, ${String(n)} ${String(a)}`;
}
//#endregion
//#region node_modules/d3-force/src/center.js
function hb(e, t) {
	var n, r = 1;
	e ??= 0, t ??= 0;
	function i() {
		var i, a = n.length, o, s = 0, c = 0;
		for (i = 0; i < a; ++i) o = n[i], s += o.x, c += o.y;
		for (s = (s / a - e) * r, c = (c / a - t) * r, i = 0; i < a; ++i) o = n[i], o.x -= s, o.y -= c;
	}
	return i.initialize = function(e) {
		n = e;
	}, i.x = function(t) {
		return arguments.length ? (e = +t, i) : e;
	}, i.y = function(e) {
		return arguments.length ? (t = +e, i) : t;
	}, i.strength = function(e) {
		return arguments.length ? (r = +e, i) : r;
	}, i;
}
//#endregion
//#region node_modules/d3-quadtree/src/add.js
function gb(e) {
	let t = +this._x.call(null, e), n = +this._y.call(null, e);
	return _b(this.cover(t, n), t, n, e);
}
function _b(e, t, n, r) {
	if (isNaN(t) || isNaN(n)) return e;
	var i, a = e._root, o = { data: r }, s = e._x0, c = e._y0, l = e._x1, u = e._y1, d, f, p, m, h, g, _, v;
	if (!a) return e._root = o, e;
	for (; a.length;) if ((h = t >= (d = (s + l) / 2)) ? s = d : l = d, (g = n >= (f = (c + u) / 2)) ? c = f : u = f, i = a, !(a = a[_ = g << 1 | h])) return i[_] = o, e;
	if (p = +e._x.call(null, a.data), m = +e._y.call(null, a.data), t === p && n === m) return o.next = a, i ? i[_] = o : e._root = o, e;
	do
		i = i ? i[_] = [
			,
			,
			,
			,
		] : e._root = [
			,
			,
			,
			,
		], (h = t >= (d = (s + l) / 2)) ? s = d : l = d, (g = n >= (f = (c + u) / 2)) ? c = f : u = f;
	while ((_ = g << 1 | h) == (v = (m >= f) << 1 | p >= d));
	return i[v] = a, i[_] = o, e;
}
function vb(e) {
	var t, n, r = e.length, i, a, o = Array(r), s = Array(r), c = Infinity, l = Infinity, u = -Infinity, d = -Infinity;
	for (n = 0; n < r; ++n) isNaN(i = +this._x.call(null, t = e[n])) || isNaN(a = +this._y.call(null, t)) || (o[n] = i, s[n] = a, i < c && (c = i), i > u && (u = i), a < l && (l = a), a > d && (d = a));
	if (c > u || l > d) return this;
	for (this.cover(c, l).cover(u, d), n = 0; n < r; ++n) _b(this, o[n], s[n], e[n]);
	return this;
}
//#endregion
//#region node_modules/d3-quadtree/src/cover.js
function yb(e, t) {
	if (isNaN(e = +e) || isNaN(t = +t)) return this;
	var n = this._x0, r = this._y0, i = this._x1, a = this._y1;
	if (isNaN(n)) i = (n = Math.floor(e)) + 1, a = (r = Math.floor(t)) + 1;
	else {
		for (var o = i - n || 1, s = this._root, c, l; n > e || e >= i || r > t || t >= a;) switch (l = (t < r) << 1 | e < n, c = [
			,
			,
			,
			,
		], c[l] = s, s = c, o *= 2, l) {
			case 0:
				i = n + o, a = r + o;
				break;
			case 1:
				n = i - o, a = r + o;
				break;
			case 2:
				i = n + o, r = a - o;
				break;
			case 3: n = i - o, r = a - o;
		}
		this._root && this._root.length && (this._root = s);
	}
	return this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = a, this;
}
//#endregion
//#region node_modules/d3-quadtree/src/data.js
function bb() {
	var e = [];
	return this.visit(function(t) {
		if (!t.length) do
			e.push(t.data);
		while (t = t.next);
	}), e;
}
//#endregion
//#region node_modules/d3-quadtree/src/extent.js
function xb(e) {
	return arguments.length ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
//#endregion
//#region node_modules/d3-quadtree/src/quad.js
function Q(e, t, n, r, i) {
	this.node = e, this.x0 = t, this.y0 = n, this.x1 = r, this.y1 = i;
}
//#endregion
//#region node_modules/d3-quadtree/src/find.js
function Sb(e, t, n) {
	var r, i = this._x0, a = this._y0, o, s, c, l, u = this._x1, d = this._y1, f = [], p = this._root, m, h;
	for (p && f.push(new Q(p, i, a, u, d)), n == null ? n = Infinity : (i = e - n, a = t - n, u = e + n, d = t + n, n *= n); m = f.pop();) if (!(!(p = m.node) || (o = m.x0) > u || (s = m.y0) > d || (c = m.x1) < i || (l = m.y1) < a)) if (p.length) {
		var g = (o + c) / 2, _ = (s + l) / 2;
		f.push(new Q(p[3], g, _, c, l), new Q(p[2], o, _, g, l), new Q(p[1], g, s, c, _), new Q(p[0], o, s, g, _)), (h = (t >= _) << 1 | e >= g) && (m = f[f.length - 1], f[f.length - 1] = f[f.length - 1 - h], f[f.length - 1 - h] = m);
	} else {
		var v = e - +this._x.call(null, p.data), y = t - +this._y.call(null, p.data), b = v * v + y * y;
		if (b < n) {
			var x = Math.sqrt(n = b);
			i = e - x, a = t - x, u = e + x, d = t + x, r = p.data;
		}
	}
	return r;
}
//#endregion
//#region node_modules/d3-quadtree/src/remove.js
function Cb(e) {
	if (isNaN(u = +this._x.call(null, e)) || isNaN(d = +this._y.call(null, e))) return this;
	var t, n = this._root, r, i, a, o = this._x0, s = this._y0, c = this._x1, l = this._y1, u, d, f, p, m, h, g, _;
	if (!n) return this;
	if (n.length) for (;;) {
		if ((m = u >= (f = (o + c) / 2)) ? o = f : c = f, (h = d >= (p = (s + l) / 2)) ? s = p : l = p, t = n, !(n = n[g = h << 1 | m])) return this;
		if (!n.length) break;
		(t[g + 1 & 3] || t[g + 2 & 3] || t[g + 3 & 3]) && (r = t, _ = g);
	}
	for (; n.data !== e;) if (i = n, !(n = n.next)) return this;
	return (a = n.next) && delete n.next, i ? (a ? i.next = a : delete i.next, this) : t ? (a ? t[g] = a : delete t[g], (n = t[0] || t[1] || t[2] || t[3]) && n === (t[3] || t[2] || t[1] || t[0]) && !n.length && (r ? r[_] = n : this._root = n), this) : (this._root = a, this);
}
function wb(e) {
	for (var t = 0, n = e.length; t < n; ++t) this.remove(e[t]);
	return this;
}
//#endregion
//#region node_modules/d3-quadtree/src/root.js
function Tb() {
	return this._root;
}
//#endregion
//#region node_modules/d3-quadtree/src/size.js
function Eb() {
	var e = 0;
	return this.visit(function(t) {
		if (!t.length) do
			++e;
		while (t = t.next);
	}), e;
}
//#endregion
//#region node_modules/d3-quadtree/src/visit.js
function Db(e) {
	var t = [], n, r = this._root, i, a, o, s, c;
	for (r && t.push(new Q(r, this._x0, this._y0, this._x1, this._y1)); n = t.pop();) if (!e(r = n.node, a = n.x0, o = n.y0, s = n.x1, c = n.y1) && r.length) {
		var l = (a + s) / 2, u = (o + c) / 2;
		(i = r[3]) && t.push(new Q(i, l, u, s, c)), (i = r[2]) && t.push(new Q(i, a, u, l, c)), (i = r[1]) && t.push(new Q(i, l, o, s, u)), (i = r[0]) && t.push(new Q(i, a, o, l, u));
	}
	return this;
}
//#endregion
//#region node_modules/d3-quadtree/src/visitAfter.js
function Ob(e) {
	var t = [], n = [], r;
	for (this._root && t.push(new Q(this._root, this._x0, this._y0, this._x1, this._y1)); r = t.pop();) {
		var i = r.node;
		if (i.length) {
			var a, o = r.x0, s = r.y0, c = r.x1, l = r.y1, u = (o + c) / 2, d = (s + l) / 2;
			(a = i[0]) && t.push(new Q(a, o, s, u, d)), (a = i[1]) && t.push(new Q(a, u, s, c, d)), (a = i[2]) && t.push(new Q(a, o, d, u, l)), (a = i[3]) && t.push(new Q(a, u, d, c, l));
		}
		n.push(r);
	}
	for (; r = n.pop();) e(r.node, r.x0, r.y0, r.x1, r.y1);
	return this;
}
//#endregion
//#region node_modules/d3-quadtree/src/x.js
function kb(e) {
	return e[0];
}
function Ab(e) {
	return arguments.length ? (this._x = e, this) : this._x;
}
//#endregion
//#region node_modules/d3-quadtree/src/y.js
function jb(e) {
	return e[1];
}
function Mb(e) {
	return arguments.length ? (this._y = e, this) : this._y;
}
//#endregion
//#region node_modules/d3-quadtree/src/quadtree.js
function Nb(e, t, n) {
	var r = new Pb(t ?? kb, n ?? jb, NaN, NaN, NaN, NaN);
	return e == null ? r : r.addAll(e);
}
function Pb(e, t, n, r, i, a) {
	this._x = e, this._y = t, this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = a, this._root = void 0;
}
function Fb(e) {
	for (var t = { data: e.data }, n = t; e = e.next;) n = n.next = { data: e.data };
	return t;
}
var $ = Nb.prototype = Pb.prototype;
$.copy = function() {
	var e = new Pb(this._x, this._y, this._x0, this._y0, this._x1, this._y1), t = this._root, n, r;
	if (!t) return e;
	if (!t.length) return e._root = Fb(t), e;
	for (n = [{
		source: t,
		target: e._root = [
			,
			,
			,
			,
		]
	}]; t = n.pop();) for (var i = 0; i < 4; ++i) (r = t.source[i]) && (r.length ? n.push({
		source: r,
		target: t.target[i] = [
			,
			,
			,
			,
		]
	}) : t.target[i] = Fb(r));
	return e;
}, $.add = gb, $.addAll = vb, $.cover = yb, $.data = bb, $.extent = xb, $.find = Sb, $.remove = Cb, $.removeAll = wb, $.root = Tb, $.size = Eb, $.visit = Db, $.visitAfter = Ob, $.x = Ab, $.y = Mb;
//#endregion
//#region node_modules/d3-force/src/constant.js
function Ib(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-force/src/jiggle.js
function Lb(e) {
	return (e() - .5) * 1e-6;
}
//#endregion
//#region node_modules/d3-force/src/link.js
function Rb(e) {
	return e.index;
}
function zb(e, t) {
	var n = e.get(t);
	if (!n) throw Error("node not found: " + t);
	return n;
}
function Bb(e) {
	var t = Rb, n = d, r, i = Ib(30), a, o, s, c, l, u = 1;
	e ??= [];
	function d(e) {
		return 1 / Math.min(s[e.source.index], s[e.target.index]);
	}
	function f(t) {
		for (var n = 0, i = e.length; n < u; ++n) for (var o = 0, s, d, f, p, m, h, g; o < i; ++o) s = e[o], d = s.source, f = s.target, p = f.x + f.vx - d.x - d.vx || Lb(l), m = f.y + f.vy - d.y - d.vy || Lb(l), h = Math.sqrt(p * p + m * m), h = (h - a[o]) / h * t * r[o], p *= h, m *= h, f.vx -= p * (g = c[o]), f.vy -= m * g, d.vx += p * (g = 1 - g), d.vy += m * g;
	}
	function p() {
		if (o) {
			var n, i = o.length, l = e.length, u = new Map(o.map((e, n) => [t(e, n, o), e])), d;
			for (n = 0, s = Array(i); n < l; ++n) d = e[n], d.index = n, typeof d.source != "object" && (d.source = zb(u, d.source)), typeof d.target != "object" && (d.target = zb(u, d.target)), s[d.source.index] = (s[d.source.index] || 0) + 1, s[d.target.index] = (s[d.target.index] || 0) + 1;
			for (n = 0, c = Array(l); n < l; ++n) d = e[n], c[n] = s[d.source.index] / (s[d.source.index] + s[d.target.index]);
			r = Array(l), m(), a = Array(l), h();
		}
	}
	function m() {
		if (o) for (var t = 0, i = e.length; t < i; ++t) r[t] = +n(e[t], t, e);
	}
	function h() {
		if (o) for (var t = 0, n = e.length; t < n; ++t) a[t] = +i(e[t], t, e);
	}
	return f.initialize = function(e, t) {
		o = e, l = t, p();
	}, f.links = function(t) {
		return arguments.length ? (e = t, p(), f) : e;
	}, f.id = function(e) {
		return arguments.length ? (t = e, f) : t;
	}, f.iterations = function(e) {
		return arguments.length ? (u = +e, f) : u;
	}, f.strength = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : Ib(+e), m(), f) : n;
	}, f.distance = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : Ib(+e), h(), f) : i;
	}, f;
}
//#endregion
//#region node_modules/d3-force/src/lcg.js
var Vb = 1664525, Hb = 1013904223, Ub = 4294967296;
function Wb() {
	let e = 1;
	return () => (e = (Vb * e + Hb) % Ub) / Ub;
}
//#endregion
//#region node_modules/d3-force/src/simulation.js
function Gb(e) {
	return e.x;
}
function Kb(e) {
	return e.y;
}
var qb = 10, Jb = Math.PI * (3 - Math.sqrt(5));
function Yb(e) {
	var t, n = 1, r = .001, i = 1 - r ** (1 / 300), a = 0, o = .6, s = /* @__PURE__ */ new Map(), c = du(d), l = ts("tick", "end"), u = Wb();
	e ??= [];
	function d() {
		f(), l.call("tick", t), n < r && (c.stop(), l.call("end", t));
	}
	function f(r) {
		var c, l = e.length, u;
		r === void 0 && (r = 1);
		for (var d = 0; d < r; ++d) for (n += (a - n) * i, s.forEach(function(e) {
			e(n);
		}), c = 0; c < l; ++c) u = e[c], u.fx == null ? u.x += u.vx *= o : (u.x = u.fx, u.vx = 0), u.fy == null ? u.y += u.vy *= o : (u.y = u.fy, u.vy = 0);
		return t;
	}
	function p() {
		for (var t = 0, n = e.length, r; t < n; ++t) {
			if (r = e[t], r.index = t, r.fx != null && (r.x = r.fx), r.fy != null && (r.y = r.fy), isNaN(r.x) || isNaN(r.y)) {
				var i = qb * Math.sqrt(.5 + t), a = t * Jb;
				r.x = i * Math.cos(a), r.y = i * Math.sin(a);
			}
			(isNaN(r.vx) || isNaN(r.vy)) && (r.vx = r.vy = 0);
		}
	}
	function m(t) {
		return t.initialize && t.initialize(e, u), t;
	}
	return p(), t = {
		tick: f,
		restart: function() {
			return c.restart(d), t;
		},
		stop: function() {
			return c.stop(), t;
		},
		nodes: function(n) {
			return arguments.length ? (e = n, p(), s.forEach(m), t) : e;
		},
		alpha: function(e) {
			return arguments.length ? (n = +e, t) : n;
		},
		alphaMin: function(e) {
			return arguments.length ? (r = +e, t) : r;
		},
		alphaDecay: function(e) {
			return arguments.length ? (i = +e, t) : +i;
		},
		alphaTarget: function(e) {
			return arguments.length ? (a = +e, t) : a;
		},
		velocityDecay: function(e) {
			return arguments.length ? (o = 1 - e, t) : 1 - o;
		},
		randomSource: function(e) {
			return arguments.length ? (u = e, s.forEach(m), t) : u;
		},
		force: function(e, n) {
			return arguments.length > 1 ? (n == null ? s.delete(e) : s.set(e, m(n)), t) : s.get(e);
		},
		find: function(t, n, r) {
			var i = 0, a = e.length, o, s, c, l, u;
			for (r == null ? r = Infinity : r *= r, i = 0; i < a; ++i) l = e[i], o = t - l.x, s = n - l.y, c = o * o + s * s, c < r && (u = l, r = c);
			return u;
		},
		on: function(e, n) {
			return arguments.length > 1 ? (l.on(e, n), t) : l.on(e);
		}
	};
}
//#endregion
//#region node_modules/d3-force/src/manyBody.js
function Xb() {
	var e, t, n, r, i = Ib(-30), a, o = 1, s = Infinity, c = .81;
	function l(n) {
		var i, a = e.length, o = Nb(e, Gb, Kb).visitAfter(d);
		for (r = n, i = 0; i < a; ++i) t = e[i], o.visit(f);
	}
	function u() {
		if (e) {
			var t, n = e.length, r;
			for (a = Array(n), t = 0; t < n; ++t) r = e[t], a[r.index] = +i(r, t, e);
		}
	}
	function d(e) {
		var t = 0, n, r, i = 0, o, s, c;
		if (e.length) {
			for (o = s = c = 0; c < 4; ++c) (n = e[c]) && (r = Math.abs(n.value)) && (t += n.value, i += r, o += r * n.x, s += r * n.y);
			e.x = o / i, e.y = s / i;
		} else {
			n = e, n.x = n.data.x, n.y = n.data.y;
			do
				t += a[n.data.index];
			while (n = n.next);
		}
		e.value = t;
	}
	function f(e, i, l, u) {
		if (!e.value) return !0;
		var d = e.x - t.x, f = e.y - t.y, p = u - i, m = d * d + f * f;
		if (p * p / c < m) return m < s && (d === 0 && (d = Lb(n), m += d * d), f === 0 && (f = Lb(n), m += f * f), m < o && (m = Math.sqrt(o * m)), t.vx += d * e.value * r / m, t.vy += f * e.value * r / m), !0;
		if (!(e.length || m >= s)) {
			(e.data !== t || e.next) && (d === 0 && (d = Lb(n), m += d * d), f === 0 && (f = Lb(n), m += f * f), m < o && (m = Math.sqrt(o * m)));
			do
				e.data !== t && (p = a[e.data.index] * r / m, t.vx += d * p, t.vy += f * p);
			while (e = e.next);
		}
	}
	return l.initialize = function(t, r) {
		e = t, n = r, u();
	}, l.strength = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : Ib(+e), u(), l) : i;
	}, l.distanceMin = function(e) {
		return arguments.length ? (o = e * e, l) : Math.sqrt(o);
	}, l.distanceMax = function(e) {
		return arguments.length ? (s = e * e, l) : Math.sqrt(s);
	}, l.theta = function(e) {
		return arguments.length ? (c = e * e, l) : Math.sqrt(c);
	}, l;
}
//#endregion
//#region src/networkDiagram.ts
var Zb = -300, Qb = 100, $b = 640, ex = 480, tx = 180, nx = 20, rx = 22, ix = {
	linkStroke: "#9ca3af",
	nodeFill: "#2563eb",
	nodeFillHovered: "#3b82f6",
	nodeFillSelected: "#f59e0b",
	nodeStroke: "#1e40af",
	nodeStrokeHovered: "#1d4ed8",
	nodeStrokeSelected: "#b45309",
	nodeText: "#ffffff"
};
function ax(e, t, n = {}) {
	let r = t.clientWidth || $b, i = t.clientHeight || ex, a = e.nodes.map((e) => ({ ...e })), o = e.links.map((e) => ({ ...e })), s = Math.min(r, i) * .22;
	for (let [e, t] of a.entries()) {
		let n = e / a.length * Math.PI * 2;
		t.x = r / 2 + Math.cos(n) * s, t.y = i / 2 + Math.sin(n) * s;
	}
	let c = Yb(a).force("link", Bb(o).id((e) => e.id).distance(n.linkDistance ?? Qb)).force("charge", Xb().strength(n.chargeStrength ?? Zb)).force("center", hb(r / 2, i / 2)), l = F(t).append("svg").attr("width", r).attr("height", i).attr("viewBox", `0 0 ${String(r)} ${String(i)}`).style("touch-action", "none"), u = l.append("g"), d = u.selectAll("line").data(o).join("line").attr("stroke", ix.linkStroke).attr("stroke-width", 2), f = u.selectAll("g").data(a).join("g").style("cursor", "pointer");
	f.append("circle").attr("r", nx).attr("fill", ix.nodeFill).attr("stroke", ix.nodeStroke).attr("stroke-width", 2), f.append("text").text((e) => e.id).attr("text-anchor", "middle").attr("dy", 4).attr("fill", ix.nodeText);
	let p = null, m = null, h = () => {
		f.selectAll("circle").attr("fill", (e) => e.id === p ? ix.nodeFillSelected : e.id === m ? ix.nodeFillHovered : ix.nodeFill).attr("stroke", (e) => e.id === p ? ix.nodeStrokeSelected : e.id === m ? ix.nodeStrokeHovered : ix.nodeStroke).attr("stroke-width", (e) => e.id === p ? 3 : 2).attr("r", (e) => e.id === p || e.id === m ? rx : nx);
	};
	f.on("mouseenter", (e, t) => {
		m = t.id, h();
	}).on("mouseleave", (e, t) => {
		m === t.id && (m = null), h();
	}).on("click", (e, t) => {
		e.stopPropagation(), p = p === t.id ? null : t.id, h();
	}), l.on("click", () => {
		p = null, h();
	});
	let g = kg().scaleExtent([.5, 4]).on("zoom", (e) => {
		u.attr("transform", e.transform.toString());
	});
	l.call(g).on("dblclick.zoom", null);
	let _ = (e, t) => typeof e == "object" ? e[t] ?? 0 : 0, v = () => {
		d.attr("x1", (e) => _(e.source, "x")).attr("y1", (e) => _(e.source, "y")).attr("x2", (e) => _(e.target, "x")).attr("y2", (e) => _(e.target, "y")), f.attr("transform", (e) => `translate(${String(e.x ?? 0)},${String(e.y ?? 0)})`);
	};
	c.stop(), f.call(vs().on("start", (e, t) => {
		e.sourceEvent?.stopPropagation(), t.fx = t.x, t.fy = t.y;
	}).on("drag", (e, t) => {
		t.x = e.x, t.y = e.y, t.fx = e.x, t.fy = e.y, v();
	}).on("end", (e, t) => {
		t.fx = null, t.fy = null;
	})), v();
	let y = l.node();
	if (y == null) throw Error("Failed to create network diagram SVG element.");
	return {
		destroy: () => {
			c.stop(), l.remove();
		},
		resize: () => {
			let e = t.clientWidth || $b, n = t.clientHeight || ex;
			l.attr("width", e).attr("height", n).attr("viewBox", `0 0 ${String(e)} ${String(n)}`), c.force("center", hb(e / 2, n / 2));
		},
		svg: y,
		triggerAutoLayout: () => {
			c.alpha(1);
			for (let e = 0; e < tx; e += 1) c.tick();
			c.stop(), v();
		}
	};
}
//#endregion
//#region node_modules/d3-sankey/src/align.js
function ox(e, t) {
	return e.sourceLinks.length ? e.depth : t - 1;
}
//#endregion
//#region node_modules/d3-sankey/src/constant.js
function sx(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-sankey/src/sankey.js
function cx(e, t) {
	return ux(e.source, t.source) || e.index - t.index;
}
function lx(e, t) {
	return ux(e.target, t.target) || e.index - t.index;
}
function ux(e, t) {
	return e.y0 - t.y0;
}
function dx(e) {
	return e.value;
}
function fx(e) {
	return e.index;
}
function px(e) {
	return e.nodes;
}
function mx(e) {
	return e.links;
}
function hx(e, t) {
	let n = e.get(t);
	if (!n) throw Error("missing: " + t);
	return n;
}
function gx({ nodes: e }) {
	for (let t of e) {
		let e = t.y0, n = e;
		for (let n of t.sourceLinks) n.y0 = e + n.width / 2, e += n.width;
		for (let e of t.targetLinks) e.y1 = n + e.width / 2, n += e.width;
	}
}
function _x() {
	let e = 0, t = 0, n = 1, r = 1, i = 24, a = 8, o, s = fx, c = ox, l, u, d = px, f = mx, p = 6;
	function m() {
		let e = {
			nodes: d.apply(null, arguments),
			links: f.apply(null, arguments)
		};
		return h(e), g(e), _(e), v(e), x(e), gx(e), e;
	}
	m.update = function(e) {
		return gx(e), e;
	}, m.nodeId = function(e) {
		return arguments.length ? (s = typeof e == "function" ? e : sx(e), m) : s;
	}, m.nodeAlign = function(e) {
		return arguments.length ? (c = typeof e == "function" ? e : sx(e), m) : c;
	}, m.nodeSort = function(e) {
		return arguments.length ? (l = e, m) : l;
	}, m.nodeWidth = function(e) {
		return arguments.length ? (i = +e, m) : i;
	}, m.nodePadding = function(e) {
		return arguments.length ? (a = o = +e, m) : a;
	}, m.nodes = function(e) {
		return arguments.length ? (d = typeof e == "function" ? e : sx(e), m) : d;
	}, m.links = function(e) {
		return arguments.length ? (f = typeof e == "function" ? e : sx(e), m) : f;
	}, m.linkSort = function(e) {
		return arguments.length ? (u = e, m) : u;
	}, m.size = function(i) {
		return arguments.length ? (e = t = 0, n = +i[0], r = +i[1], m) : [n - e, r - t];
	}, m.extent = function(i) {
		return arguments.length ? (e = +i[0][0], n = +i[1][0], t = +i[0][1], r = +i[1][1], m) : [[e, t], [n, r]];
	}, m.iterations = function(e) {
		return arguments.length ? (p = +e, m) : p;
	};
	function h({ nodes: e, links: t }) {
		for (let [t, n] of e.entries()) n.index = t, n.sourceLinks = [], n.targetLinks = [];
		let n = new Map(e.map((t, n) => [s(t, n, e), t]));
		for (let [e, r] of t.entries()) {
			r.index = e;
			let { source: t, target: i } = r;
			typeof t != "object" && (t = r.source = hx(n, t)), typeof i != "object" && (i = r.target = hx(n, i)), t.sourceLinks.push(r), i.targetLinks.push(r);
		}
		if (u != null) for (let { sourceLinks: t, targetLinks: n } of e) t.sort(u), n.sort(u);
	}
	function g({ nodes: e }) {
		for (let t of e) t.value = t.fixedValue === void 0 ? Math.max(Kr(t.sourceLinks, dx), Kr(t.targetLinks, dx)) : t.fixedValue;
	}
	function _({ nodes: e }) {
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
	function v({ nodes: e }) {
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
	function y({ nodes: t }) {
		let r = Wr(t, (e) => e.depth) + 1, a = (n - e - i) / (r - 1), o = Array(r);
		for (let n of t) {
			let t = Math.max(0, Math.min(r - 1, Math.floor(c.call(null, n, r))));
			n.layer = t, n.x0 = e + t * a, n.x1 = n.x0 + i, o[t] ? o[t].push(n) : o[t] = [n];
		}
		if (l) for (let e of o) e.sort(l);
		return o;
	}
	function b(e) {
		let n = Gr(e, (e) => (r - t - (e.length - 1) * o) / Kr(e, dx));
		for (let i of e) {
			let e = t;
			for (let t of i) {
				t.y0 = e, t.y1 = e + t.value * n, e = t.y1 + o;
				for (let e of t.sourceLinks) e.width = e.value * n;
			}
			e = (r - e + o) / (i.length + 1);
			for (let t = 0; t < i.length; ++t) {
				let n = i[t];
				n.y0 += e * (t + 1), n.y1 += e * (t + 1);
			}
			O(i);
		}
	}
	function x(e) {
		let n = y(e);
		o = Math.min(a, (r - t) / (Wr(n, (e) => e.length) - 1)), b(n);
		for (let e = 0; e < p; ++e) {
			let t = .99 ** e, r = Math.max(1 - t, (e + 1) / p);
			C(n, t, r), S(n, t, r);
		}
	}
	function S(e, t, n) {
		for (let r = 1, i = e.length; r < i; ++r) {
			let i = e[r];
			for (let e of i) {
				let n = 0, r = 0;
				for (let { source: t, value: i } of e.targetLinks) {
					let a = i * (e.layer - t.layer);
					n += k(t, e) * a, r += a;
				}
				if (!(r > 0)) continue;
				let i = (n / r - e.y0) * t;
				e.y0 += i, e.y1 += i, D(e);
			}
			l === void 0 && i.sort(ux), w(i, n);
		}
	}
	function C(e, t, n) {
		for (let r = e.length - 2; r >= 0; --r) {
			let i = e[r];
			for (let e of i) {
				let n = 0, r = 0;
				for (let { target: t, value: i } of e.sourceLinks) {
					let a = i * (t.layer - e.layer);
					n += A(e, t) * a, r += a;
				}
				if (!(r > 0)) continue;
				let i = (n / r - e.y0) * t;
				e.y0 += i, e.y1 += i, D(e);
			}
			l === void 0 && i.sort(ux), w(i, n);
		}
	}
	function w(e, n) {
		let i = e.length >> 1, a = e[i];
		E(e, a.y0 - o, i - 1, n), T(e, a.y1 + o, i + 1, n), E(e, r, e.length - 1, n), T(e, t, 0, n);
	}
	function T(e, t, n, r) {
		for (; n < e.length; ++n) {
			let i = e[n], a = (t - i.y0) * r;
			a > 1e-6 && (i.y0 += a, i.y1 += a), t = i.y1 + o;
		}
	}
	function E(e, t, n, r) {
		for (; n >= 0; --n) {
			let i = e[n], a = (i.y1 - t) * r;
			a > 1e-6 && (i.y0 -= a, i.y1 -= a), t = i.y0 - o;
		}
	}
	function D({ sourceLinks: e, targetLinks: t }) {
		if (u === void 0) {
			for (let { source: { sourceLinks: e } } of t) e.sort(lx);
			for (let { target: { targetLinks: t } } of e) t.sort(cx);
		}
	}
	function O(e) {
		if (u === void 0) for (let { sourceLinks: t, targetLinks: n } of e) t.sort(lx), n.sort(cx);
	}
	function k(e, t) {
		let n = e.y0 - (e.sourceLinks.length - 1) * o / 2;
		for (let { target: r, width: i } of e.sourceLinks) {
			if (r === t) break;
			n += i + o;
		}
		for (let { source: r, width: i } of t.targetLinks) {
			if (r === e) break;
			n -= i;
		}
		return n;
	}
	function A(e, t) {
		let n = t.y0 - (t.targetLinks.length - 1) * o / 2;
		for (let { source: r, width: i } of t.targetLinks) {
			if (r === e) break;
			n += i + o;
		}
		for (let { target: r, width: i } of e.sourceLinks) {
			if (r === t) break;
			n -= i;
		}
		return n;
	}
	return m;
}
//#endregion
//#region node_modules/d3-sankey/node_modules/d3-path/src/path.js
var vx = Math.PI, yx = 2 * vx, bx = 1e-6, xx = yx - bx;
function Sx() {
	this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
}
function Cx() {
	return new Sx();
}
Sx.prototype = Cx.prototype = {
	constructor: Sx,
	moveTo: function(e, t) {
		this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
	},
	closePath: function() {
		this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
	},
	lineTo: function(e, t) {
		this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
	},
	quadraticCurveTo: function(e, t, n, r) {
		this._ += "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +r);
	},
	bezierCurveTo: function(e, t, n, r, i, a) {
		this._ += "C" + +e + "," + +t + "," + +n + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +a);
	},
	arcTo: function(e, t, n, r, i) {
		e = +e, t = +t, n = +n, r = +r, i = +i;
		var a = this._x1, o = this._y1, s = n - e, c = r - t, l = a - e, u = o - t, d = l * l + u * u;
		if (i < 0) throw Error("negative radius: " + i);
		if (this._x1 === null) this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
		else if (d > bx) if (!(Math.abs(u * s - c * l) > bx) || !i) this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
		else {
			var f = n - a, p = r - o, m = s * s + c * c, h = f * f + p * p, g = Math.sqrt(m), _ = Math.sqrt(d), v = i * Math.tan((vx - Math.acos((m + d - h) / (2 * g * _))) / 2), y = v / _, b = v / g;
			Math.abs(y - 1) > bx && (this._ += "L" + (e + y * l) + "," + (t + y * u)), this._ += "A" + i + "," + i + ",0,0," + +(u * f > l * p) + "," + (this._x1 = e + b * s) + "," + (this._y1 = t + b * c);
		}
	},
	arc: function(e, t, n, r, i, a) {
		e = +e, t = +t, n = +n, a = !!a;
		var o = n * Math.cos(r), s = n * Math.sin(r), c = e + o, l = t + s, u = 1 ^ a, d = a ? r - i : i - r;
		if (n < 0) throw Error("negative radius: " + n);
		this._x1 === null ? this._ += "M" + c + "," + l : (Math.abs(this._x1 - c) > bx || Math.abs(this._y1 - l) > bx) && (this._ += "L" + c + "," + l), n && (d < 0 && (d = d % yx + yx), d > xx ? this._ += "A" + n + "," + n + ",0,1," + u + "," + (e - o) + "," + (t - s) + "A" + n + "," + n + ",0,1," + u + "," + (this._x1 = c) + "," + (this._y1 = l) : d > bx && (this._ += "A" + n + "," + n + ",0," + +(d >= vx) + "," + u + "," + (this._x1 = e + n * Math.cos(i)) + "," + (this._y1 = t + n * Math.sin(i))));
	},
	rect: function(e, t, n, r) {
		this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +r + "h" + -n + "Z";
	},
	toString: function() {
		return this._;
	}
};
//#endregion
//#region node_modules/d3-sankey/node_modules/d3-shape/src/constant.js
function wx(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-sankey/node_modules/d3-shape/src/point.js
function Tx(e) {
	return e[0];
}
function Ex(e) {
	return e[1];
}
//#endregion
//#region node_modules/d3-sankey/node_modules/d3-shape/src/array.js
var Dx = Array.prototype.slice;
//#endregion
//#region node_modules/d3-sankey/node_modules/d3-shape/src/link/index.js
function Ox(e) {
	return e.source;
}
function kx(e) {
	return e.target;
}
function Ax(e) {
	var t = Ox, n = kx, r = Tx, i = Ex, a = null;
	function o() {
		var o, s = Dx.call(arguments), c = t.apply(this, s), l = n.apply(this, s);
		if (a ||= o = Cx(), e(a, +r.apply(this, (s[0] = c, s)), +i.apply(this, s), +r.apply(this, (s[0] = l, s)), +i.apply(this, s)), o) return a = null, o + "" || null;
	}
	return o.source = function(e) {
		return arguments.length ? (t = e, o) : t;
	}, o.target = function(e) {
		return arguments.length ? (n = e, o) : n;
	}, o.x = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : wx(+e), o) : r;
	}, o.y = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : wx(+e), o) : i;
	}, o.context = function(e) {
		return arguments.length ? (a = e ?? null, o) : a;
	}, o;
}
function jx(e, t, n, r, i) {
	e.moveTo(t, n), e.bezierCurveTo(t = (t + r) / 2, n, t, i, r, i);
}
function Mx() {
	return Ax(jx);
}
//#endregion
//#region node_modules/d3-sankey/src/sankeyLinkHorizontal.js
function Nx(e) {
	return [e.source.x1, e.y0];
}
function Px(e) {
	return [e.target.x0, e.y1];
}
function Fx() {
	return Mx().source(Nx).target(Px);
}
//#endregion
//#region src/palette.ts
var Ix = [
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
], Lx = {
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
}, Rx = {
	dark: {
		border: "rgba(255,255,255,0.10)",
		chart: "#1a1a19"
	},
	light: {
		border: "rgba(11,11,11,0.10)",
		chart: "#fcfcfb"
	}
};
function zx(e, t) {
	let n = Ix[(e % Ix.length + Ix.length) % Ix.length];
	if (n == null) throw Error("Categorical palette is empty.");
	return t === "dark" ? n.dark : n.light;
}
//#endregion
//#region src/sankeyDiagram.ts
var Bx = 16, Vx = 12, Hx = 480, Ux = 640, Wx = 6;
function Gx(e, t, n = {}) {
	let r = n.colorModeId ?? "light", i = Lx[r], a = Rx[r];
	getComputedStyle(t).position === "static" && (t.style.position = "relative");
	let o = F(t).append("div").attr("role", "tooltip").style("position", "absolute").style("pointer-events", "none").style("z-index", "1").style("opacity", "0").style("transition", "opacity 120ms ease").style("padding", "4px 8px").style("border-radius", "4px").style("font", "12px system-ui, -apple-system, \"Segoe UI\", sans-serif").style("white-space", "nowrap").style("background", a.chart).style("color", i.primary).style("border", `1px solid ${a.border}`).style("box-shadow", "0 2px 8px rgba(0,0,0,0.15)");
	function s(e, n) {
		let r = t.getBoundingClientRect();
		o.html(n).style("left", `${String(e.clientX - r.left + 12)}px`).style("top", `${String(e.clientY - r.top + 12)}px`).style("opacity", "1");
	}
	function c() {
		o.style("opacity", "0");
	}
	function l() {
		F(t).selectAll("svg").remove();
		let a = t.clientWidth || Ux, o = t.clientHeight || Hx, l = {
			links: e.links.map((e) => ({ ...e })),
			nodes: e.nodes.map((e) => ({ ...e }))
		}, { links: u, nodes: d } = _x().nodeId((e) => e.id).nodeWidth(n.nodeWidth ?? Bx).nodePadding(n.nodePadding ?? Vx).extent([[1, 1], [a - 1, o - 1]])(l), f = F(t).insert("svg", "div").attr("viewBox", `0 0 ${String(a)} ${String(o)}`).attr("width", "100%").attr("height", "100%").attr("font-family", "system-ui, -apple-system, \"Segoe UI\", sans-serif").attr("font-size", 12), p = Fx();
		f.append("g").attr("fill", "none").selectAll("path").data(u).join("path").attr("d", p).attr("stroke", (e) => zx(d.indexOf(e.source), r)).attr("stroke-opacity", .35).attr("stroke-width", (e) => Math.max(1, e.width ?? 1)).on("mouseenter", (e, t) => {
			F(e.currentTarget).attr("stroke-opacity", .6);
			let n = t.source, r = t.target;
			s(e, `${n.name} → ${r.name}<br>${t.value.toLocaleString()}`);
		}).on("mousemove", (e, t) => {
			let n = t.source, r = t.target;
			s(e, `${n.name} → ${r.name}<br>${t.value.toLocaleString()}`);
		}).on("mouseleave", (e) => {
			F(e.currentTarget).attr("stroke-opacity", .35), c();
		});
		let m = f.append("g").selectAll("g").data(d).join("g");
		m.append("rect").attr("x", (e) => e.x0 ?? 0).attr("y", (e) => e.y0 ?? 0).attr("width", (e) => (e.x1 ?? 0) - (e.x0 ?? 0)).attr("height", (e) => Math.max(1, (e.y1 ?? 0) - (e.y0 ?? 0))).attr("rx", 2).attr("fill", (e, t) => zx(t, r)).on("mouseenter", (e, t) => {
			s(e, `${t.name}<br>${(t.value ?? 0).toLocaleString()}`);
		}).on("mousemove", (e, t) => {
			s(e, `${t.name}<br>${(t.value ?? 0).toLocaleString()}`);
		}).on("mouseleave", c), m.append("text").attr("x", (e) => (e.x0 ?? 0) < a / 2 ? (e.x1 ?? 0) + Wx : (e.x0 ?? 0) - Wx).attr("y", (e) => ((e.y0 ?? 0) + (e.y1 ?? 0)) / 2).attr("dy", "0.35em").attr("text-anchor", (e) => (e.x0 ?? 0) < a / 2 ? "start" : "end").attr("fill", i.primary).text((e) => e.name);
		let h = f.node();
		if (h == null) throw Error("Failed to create Sankey diagram SVG element.");
		return h;
	}
	let u = l();
	return {
		resize: () => {
			u = l();
		},
		get svg() {
			return u;
		}
	};
}
//#endregion
//#region src/treeDiagram.ts
var Kx = 140, qx = 40, Jx = 24, Yx = 50, Xx = 8, Zx = {
	branch: {
		fill: "#ffe6cc",
		stroke: "#d79b00"
	},
	leaf: {
		fill: "#dae8fc",
		stroke: "#6c8ebf"
	},
	root: {
		fill: "#d5e8d4",
		stroke: "#82b366"
	}
};
function Qx(e, t, n = {}) {
	let r = n.nodeWidth ?? Kx, i = n.nodeHeight ?? qx, a = n.siblingGap ?? Jx, o = n.levelGap ?? Yx, s = n.padding ?? Xx, c = n.nodeColors ?? Zx;
	function l(e) {
		return e.depth === 0 ? "root" : e.children ? "branch" : "leaf";
	}
	function u() {
		F(t).selectAll("svg").remove();
		let n = eg(e, (e) => e.children), u = hg().nodeSize([i + a, r + o]).separation(() => 1)(n);
		u.eachAfter((e) => {
			let [t] = e.children ?? [];
			t && (e.x = t.x);
		});
		let d = u.descendants(), f = Math.min(...d.map((e) => e.y)) - r / 2, p = Math.max(...d.map((e) => e.y)) + r / 2, m = Math.min(...d.map((e) => e.x)) - i / 2, h = Math.max(...d.map((e) => e.x)) + i / 2, g = p - f + s * 2, _ = h - m + s * 2, v = F(t).append("svg").attr("viewBox", `0 0 ${String(g)} ${String(_)}`).attr("width", g).attr("height", _), y = v.append("g").attr("transform", `translate(${String(s - f)}, ${String(s - m)})`), b = op().x((e) => e.y).y((e) => e.x);
		y.append("g").attr("fill", "none").attr("stroke", "#999999").attr("stroke-width", 1.5).selectAll("path").data(u.links()).join("path").attr("d", b);
		let x = y.append("g").selectAll("g").data(d).join("g").attr("transform", (e) => `translate(${String(e.y - r / 2)}, ${String(e.x - i / 2)})`);
		x.append("rect").attr("width", r).attr("height", i).attr("rx", 6).attr("fill", (e) => c[l(e)].fill).attr("stroke", (e) => c[l(e)].stroke), x.append("text").attr("x", r / 2).attr("y", i / 2).attr("text-anchor", "middle").attr("dominant-baseline", "middle").attr("font-family", "Helvetica, Arial, sans-serif").attr("font-size", 12).attr("fill", "#000000").text((e) => e.data.label);
		let S = v.node();
		if (S == null) throw Error("Failed to create tree diagram SVG element.");
		return S;
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
//#region src/index.ts
var $x = "d3", eS = class {
	renderBarChart(e, t, n) {
		let r = Ag(e, t);
		return n?.(), {
			chart: r.chart,
			destroy: r.destroy,
			resize: r.resize,
			vendorId: "billboard.js"
		};
	}
	renderErdDiagram(e, t, n, r) {
		let i = pb(e, t, n);
		return r?.(), {
			resize: i.resize,
			get svg() {
				return i.svg;
			},
			vendorId: $x
		};
	}
	renderNetworkDiagram(e, t, n, r) {
		let i = ax(e, t, n);
		return r?.(), {
			destroy: i.destroy,
			resize: i.resize,
			get svg() {
				return i.svg;
			},
			triggerAutoLayout: i.triggerAutoLayout,
			vendorId: $x
		};
	}
	renderSankeyDiagram(e, t, n, r) {
		let i = Gx(e, t, n);
		return r?.(), {
			resize: i.resize,
			get svg() {
				return i.svg;
			},
			vendorId: $x
		};
	}
	renderTreeDiagram(e, t, n, r) {
		let i = Qx(e, t, n);
		return r?.(), {
			resize: i.resize,
			get svg() {
				return i.svg;
			},
			vendorId: $x
		};
	}
};
//#endregion
export { eS as D3Tool };

//# sourceMappingURL=dpuse-tool-d3.es.js.map