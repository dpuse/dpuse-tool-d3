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
var Se = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function Ce(e, t = "-") {
	return e.split(t).map((e, t) => t ? e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() : e.toLowerCase()).join("");
}
var we = (e) => [].slice.call(e);
function Te(...e) {
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
function Ee(e = {}, t) {
	T(t) && t.forEach((t) => Ee(e, t));
	for (let n in t) /^\d+$/.test(n) || n in e || (e[n] = t[n]);
	return e;
}
function De(e) {
	let t = e[0] instanceof Date, n = Array.from(new Set(t ? e.map(Number) : e));
	return t ? n.map((e) => new Date(e)) : n;
}
function Oe(e) {
	return e && e.length ? e.reduce((e, t) => e.concat(t)) : [];
}
function ke(e, ...t) {
	if (!t.length || t.length === 1 && !t[0]) return e;
	let n = t.shift();
	return E(e) && E(n) && Object.keys(n).forEach((t) => {
		if (!/^(__proto__|constructor|prototype)$/i.test(t)) {
			let r = n[t];
			r instanceof Date ? e[t] = new Date(r.getTime()) : E(r) ? (!e[t] && (e[t] = {}), e[t] = ke(e[t], r)) : e[t] = T(r) ? r.concat() : r;
		}
	}), ke(e, ...t);
}
function Ae(e, t = !0) {
	let n;
	return e[0] instanceof Date ? n = t ? (e, t) => e - t : (e, t) => t - e : t && !e.every(isNaN) ? n = (e, t) => e - t : t || (n = (e, t) => e > t && -1 || e < t && 1 || e === t && 0), e.concat().sort(n);
}
function je(e, t) {
	let n = t.filter((e) => w(e));
	if (n.length) if (m(n[0])) {
		let t = e === "min" ? Infinity : -Infinity;
		for (let r of n) (e === "min" ? r < t : r > t) && (t = r);
		n = t;
	} else n[0] instanceof Date && (n = Ae(n, e === "min")[0]);
	else n = void 0;
	return n;
}
var Me = 0;
function Ne(e = !0) {
	let t = ++Me;
	return e ? String(t) : t;
}
function Pe(e, t, n, r, i) {
	if (n > r) return -1;
	let a = Math.floor((n + r) / 2), { x: o, w: s = 0 } = e[a];
	return i && (o = e[a].y, s = e[a].h), t >= o && t <= o + s ? a : t < o ? Pe(e, t, n, a - 1, i) : Pe(e, t, a + 1, r, i);
}
function Fe(e, t) {
	return _e(e.replace(/\{=([^}]+)\}/g, (e, n) => t[n] ?? ""));
}
function Ie(e) {
	let t;
	if (e instanceof Date) t = e;
	else if (p(e)) {
		let { config: n, format: r } = this;
		t = r.dataTime(n.data_xFormat)(e) ?? new Date(e);
	} else m(e) && !isNaN(e) && (t = /* @__PURE__ */ new Date(+e));
	return (!t || isNaN(+t)) && console && console.error && console.error(`Failed to parse x '${e}' to Date object`), t;
}
function Le(e) {
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
function Re(e, t) {
	t() === !1 ? s(() => Re(e, t)) : e();
}
function ze(e, t = ((e) => e)) {
	let n = /* @__PURE__ */ new Set();
	return ve(e, (e, r) => {
		n.add(t(e, r));
	}), n;
}
function Be(e, t, n = ((e) => e)) {
	let r = /* @__PURE__ */ new Map();
	return ve(e, (e, i) => {
		r.set(t(e, i), n(e, i));
	}), r;
}
//#endregion
//#region node_modules/billboard.js/dist-esm/module/error.js
var Ve = "https://github.com/naver/billboard.js/blob/master/MODULE_IMPORTS.md";
function He(n) {
	let r = n, { config: i } = r, a = "";
	if (C(i.data_type || i.data_types) && !r[t.LINE]) a = "line";
	else for (let n in t) {
		let i = e[n];
		if (r.hasType(i) && !r[t[n]]) {
			a = i;
			break;
		}
	}
	a && Ue(`Please, make sure if %c${Ce(a)}`, "module has been imported and specified correctly.", Ve);
}
function Ue(e, t, n) {
	let r = "[billboard.js]";
	if (a.console?.error) {
		let i = ["background:red;color:white;display:block;font-size:15px", t];
		console.error(`❌ ${r} ${e}`, "background:red;color:white;display:block;font-size:15px", ...i), console.info("%cℹ️", "font-size:15px", n);
	}
	throw Error(`${r} ${e.replace(/\%c([a-z-]+)/i, "'$1' ")} ${t}`);
}
var We = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
//#endregion
//#region node_modules/d3-selection/src/namespace.js
function Ge(e) {
	var t = e += "", n = t.indexOf(":");
	return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), We.hasOwnProperty(t) ? {
		space: We[t],
		local: e
	} : e;
}
//#endregion
//#region node_modules/d3-selection/src/creator.js
function Ke(e) {
	return function() {
		var t = this.ownerDocument, n = this.namespaceURI;
		return n === "http://www.w3.org/1999/xhtml" && t.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? t.createElement(e) : t.createElementNS(n, e);
	};
}
function qe(e) {
	return function() {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function Je(e) {
	var t = Ge(e);
	return (t.local ? qe : Ke)(t);
}
//#endregion
//#region node_modules/d3-selection/src/selector.js
function Ye() {}
function Xe(e) {
	return e == null ? Ye : function() {
		return this.querySelector(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/select.js
function Ze(e) {
	typeof e != "function" && (e = Xe(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = Array(o), c, l, u = 0; u < o; ++u) (c = a[u]) && (l = e.call(c, c.__data__, u, a)) && ("__data__" in c && (l.__data__ = c.__data__), s[u] = l);
	return new Vn(r, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/array.js
function Qe(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-selection/src/selectorAll.js
function $e() {
	return [];
}
function et(e) {
	return e == null ? $e : function() {
		return this.querySelectorAll(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectAll.js
function tt(e) {
	return function() {
		return Qe(e.apply(this, arguments));
	};
}
function nt(e) {
	e = typeof e == "function" ? tt(e) : et(e);
	for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a) for (var o = t[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && (r.push(e.call(c, c.__data__, l, o)), i.push(c));
	return new Vn(r, i);
}
//#endregion
//#region node_modules/d3-selection/src/matcher.js
function rt(e) {
	return function() {
		return this.matches(e);
	};
}
function at(e) {
	return function(t) {
		return t.matches(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectChild.js
var ot = Array.prototype.find;
function st(e) {
	return function() {
		return ot.call(this.children, e);
	};
}
function ct() {
	return this.firstElementChild;
}
function lt(e) {
	return this.select(e == null ? ct : st(typeof e == "function" ? e : at(e)));
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectChildren.js
var ut = Array.prototype.filter;
function dt() {
	return Array.from(this.children);
}
function ft(e) {
	return function() {
		return ut.call(this.children, e);
	};
}
function pt(e) {
	return this.selectAll(e == null ? dt : ft(typeof e == "function" ? e : at(e)));
}
//#endregion
//#region node_modules/d3-selection/src/selection/filter.js
function mt(e) {
	typeof e != "function" && (e = rt(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new Vn(r, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/sparse.js
function ht(e) {
	return Array(e.length);
}
//#endregion
//#region node_modules/d3-selection/src/selection/enter.js
function gt() {
	return new Vn(this._enter || this._groups.map(ht), this._parents);
}
function _t(e, t) {
	this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
_t.prototype = {
	constructor: _t,
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
function vt(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/data.js
function yt(e, t, n, r, i, a) {
	for (var o = 0, s, c = t.length, l = a.length; o < l; ++o) (s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new _t(e, a[o]);
	for (; o < c; ++o) (s = t[o]) && (i[o] = s);
}
function bt(e, t, n, r, i, a, o) {
	var s, c, l = /* @__PURE__ */ new Map(), u = t.length, d = a.length, f = Array(u), p;
	for (s = 0; s < u; ++s) (c = t[s]) && (f[s] = p = o.call(c, c.__data__, s, t) + "", l.has(p) ? i[s] = c : l.set(p, c));
	for (s = 0; s < d; ++s) p = o.call(e, a[s], s, a) + "", (c = l.get(p)) ? (r[s] = c, c.__data__ = a[s], l.delete(p)) : n[s] = new _t(e, a[s]);
	for (s = 0; s < u; ++s) (c = t[s]) && l.get(f[s]) === c && (i[s] = c);
}
function xt(e) {
	return e.__data__;
}
function St(e, t) {
	if (!arguments.length) return Array.from(this, xt);
	var n = t ? bt : yt, r = this._parents, i = this._groups;
	typeof e != "function" && (e = vt(e));
	for (var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0; l < a; ++l) {
		var u = r[l], d = i[l], f = d.length, p = Ct(e.call(u, u && u.__data__, l, r)), m = p.length, h = s[l] = Array(m), g = o[l] = Array(m);
		n(u, d, h, g, c[l] = Array(f), p, t);
		for (var _ = 0, v = 0, y, b; _ < m; ++_) if (y = h[_]) {
			for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
			y._next = b || null;
		}
	}
	return o = new Vn(o, r), o._enter = s, o._exit = c, o;
}
function Ct(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-selection/src/selection/exit.js
function wt() {
	return new Vn(this._exit || this._groups.map(ht), this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/join.js
function Tt(e, t, n) {
	var r = this.enter(), i = this, a = this.exit();
	return typeof e == "function" ? (r = e(r), r &&= r.selection()) : r = r.append(e + ""), t != null && (i = t(i), i &&= i.selection()), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
//#endregion
//#region node_modules/d3-selection/src/selection/merge.js
function Et(e) {
	for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, a = r.length, o = Math.min(i, a), s = Array(i), c = 0; c < o; ++c) for (var l = n[c], u = r[c], d = l.length, f = s[c] = Array(d), p, m = 0; m < d; ++m) (p = l[m] || u[m]) && (f[m] = p);
	for (; c < i; ++c) s[c] = n[c];
	return new Vn(s, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/order.js
function Dt() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n;) for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;) (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/sort.js
function Ot(e) {
	e ||= kt;
	function t(t, n) {
		return t && n ? e(t.__data__, n.__data__) : !t - !n;
	}
	for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
		for (var o = n[a], s = o.length, c = i[a] = Array(s), l, u = 0; u < s; ++u) (l = o[u]) && (c[u] = l);
		c.sort(t);
	}
	return new Vn(i, this._parents).order();
}
function kt(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-selection/src/selection/call.js
function At() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/nodes.js
function jt() {
	return Array.from(this);
}
//#endregion
//#region node_modules/d3-selection/src/selection/node.js
function Mt() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
		var o = r[i];
		if (o) return o;
	}
	return null;
}
//#endregion
//#region node_modules/d3-selection/src/selection/size.js
function Nt() {
	let e = 0;
	for (let t of this) ++e;
	return e;
}
//#endregion
//#region node_modules/d3-selection/src/selection/empty.js
function Pt() {
	return !this.node();
}
//#endregion
//#region node_modules/d3-selection/src/selection/each.js
function Ft(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n) for (var i = t[n], a = 0, o = i.length, s; a < o; ++a) (s = i[a]) && e.call(s, s.__data__, a, i);
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/attr.js
function It(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function Lt(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function Rt(e, t) {
	return function() {
		this.setAttribute(e, t);
	};
}
function zt(e, t) {
	return function() {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function Bt(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function Vt(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function Ht(e, t) {
	var n = Ge(e);
	if (arguments.length < 2) {
		var r = this.node();
		return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
	}
	return this.each((t == null ? n.local ? Lt : It : typeof t == "function" ? n.local ? Vt : Bt : n.local ? zt : Rt)(n, t));
}
//#endregion
//#region node_modules/d3-selection/src/window.js
function Ut(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
//#endregion
//#region node_modules/d3-selection/src/selection/style.js
function Wt(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function Gt(e, t, n) {
	return function() {
		this.style.setProperty(e, t, n);
	};
}
function Kt(e, t, n) {
	return function() {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function qt(e, t, n) {
	return arguments.length > 1 ? this.each((t == null ? Wt : typeof t == "function" ? Kt : Gt)(e, t, n ?? "")) : Jt(this.node(), e);
}
function Jt(e, t) {
	return e.style.getPropertyValue(t) || Ut(e).getComputedStyle(e, null).getPropertyValue(t);
}
//#endregion
//#region node_modules/d3-selection/src/selection/property.js
function Yt(e) {
	return function() {
		delete this[e];
	};
}
function Xt(e, t) {
	return function() {
		this[e] = t;
	};
}
function Zt(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : this[e] = n;
	};
}
function Qt(e, t) {
	return arguments.length > 1 ? this.each((t == null ? Yt : typeof t == "function" ? Zt : Xt)(e, t)) : this.node()[e];
}
//#endregion
//#region node_modules/d3-selection/src/selection/classed.js
function $t(e) {
	return e.trim().split(/^|\s+/);
}
function en(e) {
	return e.classList || new tn(e);
}
function tn(e) {
	this._node = e, this._names = $t(e.getAttribute("class") || "");
}
tn.prototype = {
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
function nn(e, t) {
	for (var n = en(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function rn(e, t) {
	for (var n = en(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function an(e) {
	return function() {
		nn(this, e);
	};
}
function on(e) {
	return function() {
		rn(this, e);
	};
}
function sn(e, t) {
	return function() {
		(t.apply(this, arguments) ? nn : rn)(this, e);
	};
}
function cn(e, t) {
	var n = $t(e + "");
	if (arguments.length < 2) {
		for (var r = en(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
		return !0;
	}
	return this.each((typeof t == "function" ? sn : t ? an : on)(n, t));
}
//#endregion
//#region node_modules/d3-selection/src/selection/text.js
function ln() {
	this.textContent = "";
}
function un(e) {
	return function() {
		this.textContent = e;
	};
}
function dn(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.textContent = t ?? "";
	};
}
function fn(e) {
	return arguments.length ? this.each(e == null ? ln : (typeof e == "function" ? dn : un)(e)) : this.node().textContent;
}
//#endregion
//#region node_modules/d3-selection/src/selection/html.js
function pn() {
	this.innerHTML = "";
}
function mn(e) {
	return function() {
		this.innerHTML = e;
	};
}
function hn(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? "";
	};
}
function gn(e) {
	return arguments.length ? this.each(e == null ? pn : (typeof e == "function" ? hn : mn)(e)) : this.node().innerHTML;
}
//#endregion
//#region node_modules/d3-selection/src/selection/raise.js
function _n() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function vn() {
	return this.each(_n);
}
//#endregion
//#region node_modules/d3-selection/src/selection/lower.js
function yn() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function bn() {
	return this.each(yn);
}
//#endregion
//#region node_modules/d3-selection/src/selection/append.js
function xn(e) {
	var t = typeof e == "function" ? e : Je(e);
	return this.select(function() {
		return this.appendChild(t.apply(this, arguments));
	});
}
//#endregion
//#region node_modules/d3-selection/src/selection/insert.js
function Sn() {
	return null;
}
function Cn(e, t) {
	var n = typeof e == "function" ? e : Je(e), r = t == null ? Sn : typeof t == "function" ? t : Xe(t);
	return this.select(function() {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
//#endregion
//#region node_modules/d3-selection/src/selection/remove.js
function wn() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function Tn() {
	return this.each(wn);
}
//#endregion
//#region node_modules/d3-selection/src/selection/clone.js
function En() {
	var e = this.cloneNode(!1), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Dn() {
	var e = this.cloneNode(!0), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function On(e) {
	return this.select(e ? Dn : En);
}
//#endregion
//#region node_modules/d3-selection/src/selection/datum.js
function kn(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
//#endregion
//#region node_modules/d3-selection/src/selection/on.js
function An(e) {
	return function(t) {
		e.call(this, t, this.__data__);
	};
}
function jn(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var t = "", n = e.indexOf(".");
		return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
			type: e,
			name: t
		};
	});
}
function Mn(e) {
	return function() {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, i = t.length, a; n < i; ++n) a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
			++r ? t.length = r : delete this.__on;
		}
	};
}
function Nn(e, t, n) {
	return function() {
		var r = this.__on, i, a = An(t);
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
function Pn(e, t, n) {
	var r = jn(e + ""), i, a = r.length, o;
	if (arguments.length < 2) {
		var s = this.node().__on;
		if (s) {
			for (var c = 0, l = s.length, u; c < l; ++c) for (i = 0, u = s[c]; i < a; ++i) if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
		}
		return;
	}
	for (s = t ? Nn : Mn, i = 0; i < a; ++i) this.each(s(r[i], t, n));
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/dispatch.js
function Fn(e, t, n) {
	var r = Ut(e), i = r.CustomEvent;
	typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function In(e, t) {
	return function() {
		return Fn(this, e, t);
	};
}
function Ln(e, t) {
	return function() {
		return Fn(this, e, t.apply(this, arguments));
	};
}
function Rn(e, t) {
	return this.each((typeof t == "function" ? Ln : In)(e, t));
}
//#endregion
//#region node_modules/d3-selection/src/selection/iterator.js
function* zn() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length, o; i < a; ++i) (o = r[i]) && (yield o);
}
//#endregion
//#region node_modules/d3-selection/src/selection/index.js
var Bn = [null];
function Vn(e, t) {
	this._groups = e, this._parents = t;
}
function Hn() {
	return new Vn([[document.documentElement]], Bn);
}
function Un() {
	return this;
}
Vn.prototype = Hn.prototype = {
	constructor: Vn,
	select: Ze,
	selectAll: nt,
	selectChild: lt,
	selectChildren: pt,
	filter: mt,
	data: St,
	enter: gt,
	exit: wt,
	join: Tt,
	merge: Et,
	selection: Un,
	order: Dt,
	sort: Ot,
	call: At,
	nodes: jt,
	node: Mt,
	size: Nt,
	empty: Pt,
	each: Ft,
	attr: Ht,
	style: qt,
	property: Qt,
	classed: cn,
	text: fn,
	html: gn,
	raise: vn,
	lower: bn,
	append: xn,
	insert: Cn,
	remove: Tn,
	clone: On,
	datum: kn,
	on: Pn,
	dispatch: Rn,
	[Symbol.iterator]: zn
};
//#endregion
//#region node_modules/d3-selection/src/select.js
function N(e) {
	return typeof e == "string" ? new Vn([[document.querySelector(e)]], [document.documentElement]) : new Vn([[e]], Bn);
}
//#endregion
//#region node_modules/d3-selection/src/sourceEvent.js
function Wn(e) {
	let t;
	for (; t = e.sourceEvent;) e = t;
	return e;
}
//#endregion
//#region node_modules/d3-selection/src/pointer.js
function Gn(e, t) {
	if (e = Wn(e), t === void 0 && (t = e.currentTarget), t) {
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
function Kn(e) {
	return typeof e == "string" ? new Vn([document.querySelectorAll(e)], [document.documentElement]) : new Vn([Qe(e)], Bn);
}
//#endregion
//#region node_modules/d3-time/src/interval.js
var qn = /* @__PURE__ */ new Date(), Jn = /* @__PURE__ */ new Date();
function P(e, t, n, r) {
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
	}, i.filter = (n) => P((t) => {
		if (t >= t) for (; e(t), !n(t);) t.setTime(t - 1);
	}, (e, r) => {
		if (e >= e) if (r < 0) for (; ++r <= 0;) for (; t(e, -1), !n(e););
		else for (; --r >= 0;) for (; t(e, 1), !n(e););
	}), n && (i.count = (t, r) => (qn.setTime(+t), Jn.setTime(+r), e(qn), e(Jn), Math.floor(n(qn, Jn))), i.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? i.filter(r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0) : i)), i;
}
//#endregion
//#region node_modules/d3-time/src/millisecond.js
var Yn = P(() => {}, (e, t) => {
	e.setTime(+e + t);
}, (e, t) => t - e);
Yn.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? P((t) => {
	t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
	t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Yn), Yn.range;
//#endregion
//#region node_modules/d3-time/src/duration.js
var Xn = 1e3, Zn = Xn * 60, Qn = Zn * 60, $n = Qn * 24, er = $n * 7, tr = $n * 30, nr = $n * 365, rr = P((e) => {
	e.setTime(e - e.getMilliseconds());
}, (e, t) => {
	e.setTime(+e + t * Xn);
}, (e, t) => (t - e) / Xn, (e) => e.getUTCSeconds());
rr.range;
//#endregion
//#region node_modules/d3-time/src/minute.js
var ir = P((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * Xn);
}, (e, t) => {
	e.setTime(+e + t * Zn);
}, (e, t) => (t - e) / Zn, (e) => e.getMinutes());
ir.range;
var ar = P((e) => {
	e.setUTCSeconds(0, 0);
}, (e, t) => {
	e.setTime(+e + t * Zn);
}, (e, t) => (t - e) / Zn, (e) => e.getUTCMinutes());
ar.range;
//#endregion
//#region node_modules/d3-time/src/hour.js
var or = P((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * Xn - e.getMinutes() * Zn);
}, (e, t) => {
	e.setTime(+e + t * Qn);
}, (e, t) => (t - e) / Qn, (e) => e.getHours());
or.range;
var sr = P((e) => {
	e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
	e.setTime(+e + t * Qn);
}, (e, t) => (t - e) / Qn, (e) => e.getUTCHours());
sr.range;
//#endregion
//#region node_modules/d3-time/src/day.js
var cr = P((e) => e.setHours(0, 0, 0, 0), (e, t) => e.setDate(e.getDate() + t), (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Zn) / $n, (e) => e.getDate() - 1);
cr.range;
var lr = P((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / $n, (e) => e.getUTCDate() - 1);
lr.range;
var ur = P((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / $n, (e) => Math.floor(e / $n));
ur.range;
//#endregion
//#region node_modules/d3-time/src/week.js
function dr(e) {
	return P((t) => {
		t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setDate(e.getDate() + t * 7);
	}, (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Zn) / er);
}
var fr = dr(0), pr = dr(1), mr = dr(2), hr = dr(3), gr = dr(4), _r = dr(5), vr = dr(6);
fr.range, pr.range, mr.range, hr.range, gr.range, _r.range, vr.range;
function yr(e) {
	return P((t) => {
		t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setUTCDate(e.getUTCDate() + t * 7);
	}, (e, t) => (t - e) / er);
}
var br = yr(0), xr = yr(1), Sr = yr(2), Cr = yr(3), wr = yr(4), Tr = yr(5), Er = yr(6);
br.range, xr.range, Sr.range, Cr.range, wr.range, Tr.range, Er.range;
//#endregion
//#region node_modules/d3-time/src/month.js
var Dr = P((e) => {
	e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Dr.range;
var Or = P((e) => {
	e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Or.range;
//#endregion
//#region node_modules/d3-time/src/year.js
var kr = P((e) => {
	e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
kr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : P((t) => {
	t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
	t.setFullYear(t.getFullYear() + n * e);
}), kr.range;
var Ar = P((e) => {
	e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Ar.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : P((t) => {
	t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
	t.setUTCFullYear(t.getUTCFullYear() + n * e);
}), Ar.range;
//#endregion
//#region node_modules/d3-array/src/ascending.js
function jr(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-array/src/bisector.js
function Mr(e) {
	let t = e, n = e;
	e.length === 1 && (t = (t, n) => e(t) - n, n = Nr(e));
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
function Nr(e) {
	return (t, n) => jr(e(t), n);
}
//#endregion
//#region node_modules/d3-array/src/number.js
function Pr(e) {
	return e === null ? NaN : +e;
}
//#endregion
//#region node_modules/d3-array/src/bisect.js
var Fr = Mr(jr), Ir = Fr.right;
Fr.left, Mr(Pr).center;
//#endregion
//#region node_modules/d3-array/src/fsum.js
var Lr = class {
	constructor() {
		this._partials = /* @__PURE__ */ new Float64Array(32), this._n = 0;
	}
	add(e) {
		let t = this._partials, n = 0;
		for (let r = 0; r < this._n && r < 32; r++) {
			let i = t[r], a = e + i, o = Math.abs(e) < Math.abs(i) ? e - (a - i) : i - (a - e);
			o && (t[n++] = o), e = a;
		}
		return t[n] = e, this._n = n + 1, this;
	}
	valueOf() {
		let e = this._partials, t = this._n, n, r, i, a = 0;
		if (t > 0) {
			for (a = e[--t]; t > 0 && (n = a, r = e[--t], a = n + r, i = r - (a - n), !i););
			t > 0 && (i < 0 && e[t - 1] < 0 || i > 0 && e[t - 1] > 0) && (r = i * 2, n = a + r, r == n - a && (a = n));
		}
		return a;
	}
}, Rr = class extends Map {
	constructor(e, t = Ur) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: t }
		}), e != null) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		return super.get(Br(this, e));
	}
	has(e) {
		return super.has(Br(this, e));
	}
	set(e, t) {
		return super.set(Vr(this, e), t);
	}
	delete(e) {
		return super.delete(Hr(this, e));
	}
}, zr = class extends Set {
	constructor(e, t = Ur) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: t }
		}), e != null) for (let t of e) this.add(t);
	}
	has(e) {
		return super.has(Br(this, e));
	}
	add(e) {
		return super.add(Vr(this, e));
	}
	delete(e) {
		return super.delete(Hr(this, e));
	}
};
function Br({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : n;
}
function Vr({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function Hr({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) && (n = e.get(n), e.delete(r)), n;
}
function Ur(e) {
	return typeof e == "object" && e ? e.valueOf() : e;
}
//#endregion
//#region node_modules/d3-array/src/ticks.js
var Wr = Math.sqrt(50), Gr = Math.sqrt(10), Kr = Math.sqrt(2);
function qr(e, t, n) {
	var r, i = -1, a, o, s;
	if (t = +t, e = +e, n = +n, e === t && n > 0) return [e];
	if ((r = t < e) && (a = e, e = t, t = a), (s = Jr(e, t, n)) === 0 || !isFinite(s)) return [];
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
function Jr(e, t, n) {
	var r = (t - e) / Math.max(0, n), i = Math.floor(Math.log(r) / Math.LN10), a = r / 10 ** i;
	return i >= 0 ? (a >= Wr ? 10 : a >= Gr ? 5 : a >= Kr ? 2 : 1) * 10 ** i : -(10 ** -i) / (a >= Wr ? 10 : a >= Gr ? 5 : a >= Kr ? 2 : 1);
}
function Yr(e, t, n) {
	var r = Math.abs(t - e) / Math.max(0, n), i = 10 ** Math.floor(Math.log(r) / Math.LN10), a = r / i;
	return a >= Wr ? i *= 10 : a >= Gr ? i *= 5 : a >= Kr && (i *= 2), t < e ? -i : i;
}
//#endregion
//#region node_modules/d3-array/src/max.js
function Xr(e, t) {
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
function Zr(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n > t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n > i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/d3-array/src/quantile.js
function Qr(e, t, n = Pr) {
	if (r = e.length) {
		if ((t = +t) <= 0 || r < 2) return +n(e[0], 0, e);
		if (t >= 1) return +n(e[r - 1], r - 1, e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = +n(e[a], a, e);
		return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
	}
}
//#endregion
//#region node_modules/d3-array/src/merge.js
function* $r(e) {
	for (let t of e) yield* t;
}
function ei(e) {
	return Array.from($r(e));
}
//#endregion
//#region node_modules/d3-array/src/range.js
function ti(e, t, n) {
	e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
	for (var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = Array(i); ++r < i;) a[r] = e + r * n;
	return a;
}
//#endregion
//#region node_modules/d3-array/src/sum.js
function ni(e, t) {
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
function ri(e, t, n, r, i, a) {
	let o = [
		[
			rr,
			1,
			Xn
		],
		[
			rr,
			5,
			5 * Xn
		],
		[
			rr,
			15,
			15 * Xn
		],
		[
			rr,
			30,
			30 * Xn
		],
		[
			a,
			1,
			Zn
		],
		[
			a,
			5,
			5 * Zn
		],
		[
			a,
			15,
			15 * Zn
		],
		[
			a,
			30,
			30 * Zn
		],
		[
			i,
			1,
			Qn
		],
		[
			i,
			3,
			3 * Qn
		],
		[
			i,
			6,
			6 * Qn
		],
		[
			i,
			12,
			12 * Qn
		],
		[
			r,
			1,
			$n
		],
		[
			r,
			2,
			2 * $n
		],
		[
			n,
			1,
			er
		],
		[
			t,
			1,
			tr
		],
		[
			t,
			3,
			3 * tr
		],
		[
			e,
			1,
			nr
		]
	];
	function s(e, t, n) {
		let r = t < e;
		r && ([e, t] = [t, e]);
		let i = n && typeof n.range == "function" ? n : c(e, t, n), a = i ? i.range(e, +t + 1) : [];
		return r ? a.reverse() : a;
	}
	function c(t, n, r) {
		let i = Math.abs(n - t) / r, a = Mr(([, , e]) => e).right(o, i);
		if (a === o.length) return e.every(Yr(t / nr, n / nr, r));
		if (a === 0) return Yn.every(Math.max(Yr(t, n, r), 1));
		let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
		return s.every(c);
	}
	return [s, c];
}
var [ii, ai] = ri(Ar, Or, br, ur, sr, ar), [oi, si] = ri(kr, Dr, fr, cr, or, ir);
//#endregion
//#region node_modules/d3-time-format/src/locale.js
function ci(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
		return t.setFullYear(e.y), t;
	}
	return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function li(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
		return t.setUTCFullYear(e.y), t;
	}
	return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function ui(e, t, n) {
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
function di(e) {
	var t = e.dateTime, n = e.date, r = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, l = gi(i), u = _i(i), d = gi(a), f = _i(a), p = gi(o), m = _i(o), h = gi(s), g = _i(s), _ = gi(c), v = _i(c), y = {
		a: te,
		A: ne,
		b: re,
		B: ie,
		c: null,
		d: Ri,
		e: Ri,
		f: Ui,
		g: ea,
		G: na,
		H: zi,
		I: Bi,
		j: Vi,
		L: Hi,
		m: Wi,
		M: Gi,
		p: ae,
		q: oe,
		Q: Ta,
		s: Ea,
		S: Ki,
		u: qi,
		U: Ji,
		V: Xi,
		w: Zi,
		W: Qi,
		x: null,
		X: null,
		y: $i,
		Y: ta,
		Z: ra,
		"%": wa
	}, b = {
		a: se,
		A: ce,
		b: le,
		B: ue,
		c: null,
		d: ia,
		e: ia,
		f: la,
		g: ba,
		G: Sa,
		H: aa,
		I: oa,
		j: sa,
		L: ca,
		m: ua,
		M: da,
		p: de,
		q: fe,
		Q: Ta,
		s: Ea,
		S: fa,
		u: pa,
		U: ma,
		V: ga,
		w: _a,
		W: va,
		x: null,
		X: null,
		y: ya,
		Y: xa,
		Z: Ca,
		"%": wa
	}, x = {
		a: E,
		A: D,
		b: O,
		B: k,
		c: A,
		d: Oi,
		e: Oi,
		f: Pi,
		g: wi,
		G: Ci,
		H: Ai,
		I: Ai,
		j: ki,
		L: Ni,
		m: Di,
		M: ji,
		p: T,
		q: Ei,
		Q: Ii,
		s: Li,
		S: Mi,
		u: yi,
		U: bi,
		V: xi,
		w: vi,
		W: Si,
		x: j,
		X: ee,
		y: wi,
		Y: Ci,
		Z: Ti,
		"%": Fi
	};
	y.x = S(n, y), y.X = S(r, y), y.c = S(t, y), b.x = S(n, b), b.X = S(r, b), b.c = S(t, b);
	function S(e, t) {
		return function(n) {
			var r = [], i = -1, a = 0, o = e.length, s, c, l;
			for (n instanceof Date || (n = /* @__PURE__ */ new Date(+n)); ++i < o;) e.charCodeAt(i) === 37 && (r.push(e.slice(a, i)), (c = fi[s = e.charAt(++i)]) == null ? c = s === "e" ? " " : "0" : s = e.charAt(++i), (l = t[s]) && (s = l(n, c)), r.push(s), a = i + 1);
			return r.push(e.slice(a, i)), r.join("");
		};
	}
	function C(e, t) {
		return function(n) {
			var r = ui(1900, void 0, 1), i = w(r, e, n += "", 0), a, o;
			if (i != n.length) return null;
			if ("Q" in r) return new Date(r.Q);
			if ("s" in r) return new Date(r.s * 1e3 + ("L" in r ? r.L : 0));
			if (t && !("Z" in r) && (r.Z = 0), "p" in r && (r.H = r.H % 12 + r.p * 12), r.m === void 0 && (r.m = "q" in r ? r.q : 0), "V" in r) {
				if (r.V < 1 || r.V > 53) return null;
				"w" in r || (r.w = 1), "Z" in r ? (a = li(ui(r.y, 0, 1)), o = a.getUTCDay(), a = o > 4 || o === 0 ? xr.ceil(a) : xr(a), a = lr.offset(a, (r.V - 1) * 7), r.y = a.getUTCFullYear(), r.m = a.getUTCMonth(), r.d = a.getUTCDate() + (r.w + 6) % 7) : (a = ci(ui(r.y, 0, 1)), o = a.getDay(), a = o > 4 || o === 0 ? pr.ceil(a) : pr(a), a = cr.offset(a, (r.V - 1) * 7), r.y = a.getFullYear(), r.m = a.getMonth(), r.d = a.getDate() + (r.w + 6) % 7);
			} else ("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : +("W" in r)), o = "Z" in r ? li(ui(r.y, 0, 1)).getUTCDay() : ci(ui(r.y, 0, 1)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + r.W * 7 - (o + 5) % 7 : r.w + r.U * 7 - (o + 6) % 7);
			return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, li(r)) : ci(r);
		};
	}
	function w(e, t, n, r) {
		for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
			if (r >= o) return -1;
			if (s = t.charCodeAt(i++), s === 37) {
				if (s = t.charAt(i++), c = x[s in fi ? t.charAt(i++) : s], !c || (r = c(e, n, r)) < 0) return -1;
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
var fi = {
	"-": "",
	_: " ",
	0: "0"
}, F = /^\s*\d+/, pi = /^%/, mi = /[\\^$*+?|[\]().{}]/g;
function I(e, t, n) {
	var r = e < 0 ? "-" : "", i = (r ? -e : e) + "", a = i.length;
	return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function hi(e) {
	return e.replace(mi, "\\$&");
}
function gi(e) {
	return RegExp("^(?:" + e.map(hi).join("|") + ")", "i");
}
function _i(e) {
	return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function vi(e, t, n) {
	var r = F.exec(t.slice(n, n + 1));
	return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function yi(e, t, n) {
	var r = F.exec(t.slice(n, n + 1));
	return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function bi(e, t, n) {
	var r = F.exec(t.slice(n, n + 2));
	return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function xi(e, t, n) {
	var r = F.exec(t.slice(n, n + 2));
	return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function Si(e, t, n) {
	var r = F.exec(t.slice(n, n + 2));
	return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function Ci(e, t, n) {
	var r = F.exec(t.slice(n, n + 4));
	return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function wi(e, t, n) {
	var r = F.exec(t.slice(n, n + 2));
	return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Ti(e, t, n) {
	var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
	return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Ei(e, t, n) {
	var r = F.exec(t.slice(n, n + 1));
	return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Di(e, t, n) {
	var r = F.exec(t.slice(n, n + 2));
	return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function Oi(e, t, n) {
	var r = F.exec(t.slice(n, n + 2));
	return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function ki(e, t, n) {
	var r = F.exec(t.slice(n, n + 3));
	return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function Ai(e, t, n) {
	var r = F.exec(t.slice(n, n + 2));
	return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function ji(e, t, n) {
	var r = F.exec(t.slice(n, n + 2));
	return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function Mi(e, t, n) {
	var r = F.exec(t.slice(n, n + 2));
	return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function Ni(e, t, n) {
	var r = F.exec(t.slice(n, n + 3));
	return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function Pi(e, t, n) {
	var r = F.exec(t.slice(n, n + 6));
	return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Fi(e, t, n) {
	var r = pi.exec(t.slice(n, n + 1));
	return r ? n + r[0].length : -1;
}
function Ii(e, t, n) {
	var r = F.exec(t.slice(n));
	return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function Li(e, t, n) {
	var r = F.exec(t.slice(n));
	return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function Ri(e, t) {
	return I(e.getDate(), t, 2);
}
function zi(e, t) {
	return I(e.getHours(), t, 2);
}
function Bi(e, t) {
	return I(e.getHours() % 12 || 12, t, 2);
}
function Vi(e, t) {
	return I(1 + cr.count(kr(e), e), t, 3);
}
function Hi(e, t) {
	return I(e.getMilliseconds(), t, 3);
}
function Ui(e, t) {
	return Hi(e, t) + "000";
}
function Wi(e, t) {
	return I(e.getMonth() + 1, t, 2);
}
function Gi(e, t) {
	return I(e.getMinutes(), t, 2);
}
function Ki(e, t) {
	return I(e.getSeconds(), t, 2);
}
function qi(e) {
	var t = e.getDay();
	return t === 0 ? 7 : t;
}
function Ji(e, t) {
	return I(fr.count(kr(e) - 1, e), t, 2);
}
function Yi(e) {
	var t = e.getDay();
	return t >= 4 || t === 0 ? gr(e) : gr.ceil(e);
}
function Xi(e, t) {
	return e = Yi(e), I(gr.count(kr(e), e) + (kr(e).getDay() === 4), t, 2);
}
function Zi(e) {
	return e.getDay();
}
function Qi(e, t) {
	return I(pr.count(kr(e) - 1, e), t, 2);
}
function $i(e, t) {
	return I(e.getFullYear() % 100, t, 2);
}
function ea(e, t) {
	return e = Yi(e), I(e.getFullYear() % 100, t, 2);
}
function ta(e, t) {
	return I(e.getFullYear() % 1e4, t, 4);
}
function na(e, t) {
	var n = e.getDay();
	return e = n >= 4 || n === 0 ? gr(e) : gr.ceil(e), I(e.getFullYear() % 1e4, t, 4);
}
function ra(e) {
	var t = e.getTimezoneOffset();
	return (t > 0 ? "-" : (t *= -1, "+")) + I(t / 60 | 0, "0", 2) + I(t % 60, "0", 2);
}
function ia(e, t) {
	return I(e.getUTCDate(), t, 2);
}
function aa(e, t) {
	return I(e.getUTCHours(), t, 2);
}
function oa(e, t) {
	return I(e.getUTCHours() % 12 || 12, t, 2);
}
function sa(e, t) {
	return I(1 + lr.count(Ar(e), e), t, 3);
}
function ca(e, t) {
	return I(e.getUTCMilliseconds(), t, 3);
}
function la(e, t) {
	return ca(e, t) + "000";
}
function ua(e, t) {
	return I(e.getUTCMonth() + 1, t, 2);
}
function da(e, t) {
	return I(e.getUTCMinutes(), t, 2);
}
function fa(e, t) {
	return I(e.getUTCSeconds(), t, 2);
}
function pa(e) {
	var t = e.getUTCDay();
	return t === 0 ? 7 : t;
}
function ma(e, t) {
	return I(br.count(Ar(e) - 1, e), t, 2);
}
function ha(e) {
	var t = e.getUTCDay();
	return t >= 4 || t === 0 ? wr(e) : wr.ceil(e);
}
function ga(e, t) {
	return e = ha(e), I(wr.count(Ar(e), e) + (Ar(e).getUTCDay() === 4), t, 2);
}
function _a(e) {
	return e.getUTCDay();
}
function va(e, t) {
	return I(xr.count(Ar(e) - 1, e), t, 2);
}
function ya(e, t) {
	return I(e.getUTCFullYear() % 100, t, 2);
}
function ba(e, t) {
	return e = ha(e), I(e.getUTCFullYear() % 100, t, 2);
}
function xa(e, t) {
	return I(e.getUTCFullYear() % 1e4, t, 4);
}
function Sa(e, t) {
	var n = e.getUTCDay();
	return e = n >= 4 || n === 0 ? wr(e) : wr.ceil(e), I(e.getUTCFullYear() % 1e4, t, 4);
}
function Ca() {
	return "+0000";
}
function wa() {
	return "%";
}
function Ta(e) {
	return +e;
}
function Ea(e) {
	return Math.floor(e / 1e3);
}
//#endregion
//#region node_modules/d3-time-format/src/defaultLocale.js
var Da, Oa, ka, Aa, ja;
Ma({
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
function Ma(e) {
	return Da = di(e), Oa = Da.format, ka = Da.parse, Aa = Da.utcFormat, ja = Da.utcParse, Da;
}
//#endregion
//#region node_modules/billboard.js/dist-esm/config/classes.js
var L = {
	button: "bb-button",
	chart: "bb-chart",
	empty: "bb-empty",
	main: "bb-main",
	target: "bb-target",
	EXPANDED: "_expanded_",
	dummy: "_dummy_"
}, Na = {
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
}, Pa = {
	area: "bb-area",
	areas: "bb-areas"
}, Fa = {
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
}, Ia = {
	bar: "bb-bar",
	bars: "bb-bars",
	chartBar: "bb-chart-bar",
	chartBars: "bb-chart-bars",
	barConnectLine: "bb-bar-connectLine"
}, La = {
	candlestick: "bb-candlestick",
	candlesticks: "bb-candlesticks",
	chartCandlestick: "bb-chart-candlestick",
	chartCandlesticks: "bb-chart-candlesticks",
	valueDown: "bb-value-down",
	valueUp: "bb-value-up"
}, Ra = {
	chartCircles: "bb-chart-circles",
	circle: "bb-circle",
	circles: "bb-circles"
}, za = {
	colorPattern: "bb-color-pattern",
	colorScale: "bb-colorscale"
}, Ba = {
	dragarea: "bb-dragarea",
	INCLUDED: "_included_"
}, Va = {
	funnel: "bb-funnel",
	chartFunnel: "bb-chart-funnel",
	chartFunnels: "bb-chart-funnels",
	funnelBackground: "bb-funnel-background"
}, Ha = {
	chartArcsGaugeMax: "bb-chart-arcs-gauge-max",
	chartArcsGaugeMin: "bb-chart-arcs-gauge-min",
	chartArcsGaugeUnit: "bb-chart-arcs-gauge-unit",
	chartArcsGaugeTitle: "bb-chart-arcs-gauge-title",
	gaugeValue: "bb-gauge-value"
}, R = {
	legend: "bb-legend",
	legendBackground: "bb-legend-background",
	legendItem: "bb-legend-item",
	legendItemEvent: "bb-legend-item-event",
	legendItemHidden: "bb-legend-item-hidden",
	legendItemPoint: "bb-legend-item-point",
	legendItemTile: "bb-legend-item-tile"
}, Ua = {
	chartLine: "bb-chart-line",
	chartLines: "bb-chart-lines",
	line: "bb-line",
	lines: "bb-lines"
}, Wa = {
	eventRect: "bb-event-rect",
	eventRects: "bb-event-rects",
	eventRectsMultiple: "bb-event-rects-multiple",
	eventRectsSingle: "bb-event-rects-single"
}, Ga = {
	focused: "bb-focused",
	defocused: "bb-defocused",
	legendItemFocused: "bb-legend-item-focused",
	xgridFocus: "bb-xgrid-focus",
	ygridFocus: "bb-ygrid-focus"
}, Ka = {
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
}, qa = {
	level: "bb-level",
	levels: "bb-levels"
}, Ja = {
	chartRadar: "bb-chart-radar",
	chartRadars: "bb-chart-radars"
}, Ya = {
	region: "bb-region",
	regions: "bb-regions"
}, Xa = {
	selectedCircle: "bb-selected-circle",
	selectedCircles: "bb-selected-circles",
	SELECTED: "_selected_"
}, Za = {
	shape: "bb-shape",
	shapes: "bb-shapes"
}, Qa = {
	brush: "bb-brush",
	subchart: "bb-subchart"
}, z = {
	chartText: "bb-chart-text",
	chartTexts: "bb-chart-texts",
	text: "bb-text",
	texts: "bb-texts",
	title: "bb-title",
	textBorderRect: "bb-text-border",
	textLabelImage: "bb-text-label-image",
	TextOverlapping: "text-overlapping"
}, $a = {
	tooltip: "bb-tooltip",
	tooltipContainer: "bb-tooltip-container",
	tooltipName: "bb-tooltip-name"
}, eo = {
	treemap: "bb-treemap",
	chartTreemap: "bb-chart-treemap",
	chartTreemaps: "bb-chart-treemaps"
}, to = {
	buttonZoomReset: "bb-zoom-reset",
	zoomBrush: "bb-zoom-brush"
}, no = {
	...L,
	...Na,
	...Pa,
	...Fa,
	...Ia,
	...La,
	...Ra,
	...za,
	...Ba,
	...Ha,
	...R,
	...Ua,
	...Wa,
	...Ga,
	...Va,
	...Ka,
	...qa,
	...Ja,
	...Ya,
	...Xa,
	...Za,
	...Qa,
	...z,
	...$a,
	...eo,
	...to
}, ro = {
	boost_useCssRule: !1,
	boost_useWorker: !1
}, io = {
	color_pattern: [],
	color_tiles: void 0,
	color_threshold: {},
	color_onover: void 0
}, ao = {
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
}, oo = {
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
}, so = {
	title_text: void 0,
	title_padding: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	},
	title_position: "center"
}, co = {
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
}, lo = {
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
}, uo = {
	interaction_enabled: !0,
	interaction_brighten: !0,
	interaction_inputType_mouse: !0,
	interaction_inputType_touch: {},
	interaction_onout: !0
}, fo = class e {
	static data = {};
	static setOptions(e) {
		for (let t = 0; t < e.length; t++) Object.assign(this.data, e[t]);
	}
	constructor() {
		return Te(oo, ro, lo, io, uo, ao, so, co, e.data);
	}
}, po = {
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
}, mo = class {
	constructor() {
		Object.keys(po).forEach((e) => {
			this[e] = new po[e]();
		});
	}
	getStore(e) {
		return this[e];
	}
}, B = {
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
}, ho = class {
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
}, go = /\s?(bb-)/g, _o = /\.+/g;
function vo(e) {
	return e.replace(go, ".$1").replace(_o, ".");
}
function yo(e, t, n = !1) {
	let r = (t) => t[e ? "getBoundingClientRect" : "getBBox"](), i = e ? "rectClient" : "rectBBox";
	return n ? r(t) : !(i in t) || t.hasAttribute("width") && t[i].width !== +(t.getAttribute("width") || 0) ? t[i] = r(t) : t[i];
}
function bo(e, t, n = [-1, 1], r = !1) {
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
function xo(e) {
	let { x: t, y: n, width: r, height: i } = wo(e, !0);
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
function So(e, t) {
	let n = e && (e.touches || e.sourceEvent && e.sourceEvent.touches)?.[0], r = [0, 0];
	try {
		r = Gn(n || e, t);
	} catch {}
	return r.map((e) => isNaN(e) ? 0 : e);
}
function Co(e, t = !1) {
	return yo(!0, e, t);
}
function wo(e, t = !1) {
	return yo(!1, e, t);
}
function To(e, t, n) {
	let { rootSelector: r = "", sheet: i } = e, a = `${r} ${vo(t)} {${n.join(";")}}`;
	return i[i.insertRule ? "insertRule" : "addRule"](a, i.cssRules.length);
}
function Eo(e) {
	return {
		x: (a.pageXOffset ?? a.scrollX ?? 0) + (e.scrollLeft ?? 0),
		y: (a.pageYOffset ?? a.scrollY ?? 0) + (e.scrollTop ?? 0)
	};
}
function Do(e, t = 0, n = 0, r = !0) {
	let i = new DOMPoint(t, n), a = e.getScreenCTM(), o = i.matrixTransform(r ? a?.inverse() : a);
	if (r === !1) {
		let t = Co(e);
		o.x -= t.x, o.y -= t.y;
	}
	return o;
}
function Oo(e) {
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
function ko(e, t) {
	let n = e?.getAttribute?.(t);
	if (n) return parseFloat(n);
	let r = Oo(e);
	return t === "x" ? r.e : r.f;
}
function Ao(e) {
	let t = e.attr("viewBox");
	return t ? t.trim().split(/[\s,]+/).length === 4 : !1;
}
function jo(e, t, n = !1) {
	let r = !!e.node, i = !1;
	for (let [a, o] of Object.entries(t)) if (i = r ? e.style(a) === o : e.style[a] === o, n ? !i : i) break;
	return i;
}
function Mo() {
	return o?.hidden === !1 || o?.visibilityState === "visible";
}
function No(e, t) {
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
var Po = {
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
		let r = new Touch(ke({
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
}, { setTimeout: Fo, clearTimeout: Io } = a;
function Lo(e) {
	let t = [], n, r = function() {
		r.clear(), n = e === !1 ? l(() => {
			n = null, t.forEach((e) => e());
		}, { timeout: 200 }) : Fo(() => {
			n = null, t.forEach((e) => e());
		}, m(e) ? e : 200);
	};
	return r.clear = () => {
		n &&= ((e === !1 ? u : Io)(n), null);
	}, r.add = (e) => t.push(e), r.remove = (e) => {
		let n = t.indexOf(e);
		n !== -1 && t.splice(n, 1);
	}, r;
}
function Ro() {
	let e = [], t = function(t, n) {
		function r() {
			let t = 0;
			for (let n = 0, r; r = e[n]; n++) {
				if (r === !0 || r.empty?.()) {
					t++;
					continue;
				}
				if (Mo() === !1) {
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
		Re(() => {
			n?.();
		}, r);
	};
	return t.add = function(t) {
		T(t) ? e = e.concat(t) : e.push(t);
	}, t;
}
//#endregion
//#region node_modules/billboard.js/dist-esm/module/worker.js
var zo = {}, Bo = 0;
function Vo(e, t) {
	let n = e.toString(), r = t?.map(String).join(";") ?? "", i = (n + r).replace(/(function|[\s\W\n])/g, "").substring(0, 30);
	if (!(i in zo)) try {
		let e = new a.Blob([`${r}

				self.onmessage=function({data}) {
					const result = (${n}).apply(null, data.args);
					self.postMessage({id: data.id, result});
				};`], { type: "text/javascript" });
		zo[i] = {
			src: a.URL.createObjectURL(e),
			worker: null
		};
	} catch {
		return null;
	}
	return {
		key: i,
		src: zo[i].src
	};
}
function Ho(e, t) {
	let n = zo[e];
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
function Uo(e = !0, t, n, r) {
	let i = function(...e) {
		n(t(...e));
	};
	if (a.Worker && e) {
		let e = Vo(t, r), a = e && Ho(e.key, e.src);
		a && (i = function(...e) {
			let t = ++Bo, r = function(e) {
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
function Wo() {
	for (let e in zo) {
		let t = zo[e];
		t.worker && t.worker.terminate(), t.src && a.URL.revokeObjectURL(t.src), delete zo[e];
	}
}
//#endregion
//#region node_modules/billboard.js/dist-esm/module/dsv.js
var Go = 34, Ko = 10, qo = 13;
function Jo(e) {
	let t = e.charCodeAt(0);
	function n(e, n) {
		let r = [], i = e.length, a = 0, o = 0, s = i <= 0, c = !1;
		e.charCodeAt(0) === 65279 && a++, e.charCodeAt(i - 1) === Ko && --i, e.charCodeAt(i - 1) === qo && --i;
		function l() {
			if (s) return null;
			if (c) return c = !1, null;
			let n = a, r, o;
			if (e.charCodeAt(n) === Go) {
				for (; ++a < i;) if (e.charCodeAt(a) === Go) {
					if (e.charCodeAt(a + 1) !== Go) break;
					a++;
				}
				return (o = a++) >= i ? s = !0 : (r = e.charCodeAt(a++)) === Ko ? c = !0 : r === qo && (c = !0, e.charCodeAt(a) === Ko && ++a), e.slice(n + 1, o).replace(/""/g, "\"");
			}
			for (; a < i;) {
				if ((r = e.charCodeAt(o = a++)) === Ko) c = !0;
				else if (r === qo) c = !0, e.charCodeAt(a) === Ko && ++a;
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
var Yo = Jo(","), Xo = Jo("	"), Zo = Yo.parse, Qo = Yo.parseRows, $o = Xo.parse, es = Xo.parseRows;
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/data/convert.helper.js
function ts(e) {
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
function ns(e) {
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
function rs(e, t) {
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
		}), i = ns(n);
	} else Object.keys(e).forEach(function(t) {
		let r = [].concat(e[t]);
		r.unshift?.(t), n.push(r);
	}), i = ts(n);
	return i;
}
function is(e, t = "csv", n, r, i) {
	let a = new XMLHttpRequest(), o = {
		csv: os,
		tsv: ss,
		json: rs
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
function as(e, t) {
	let n = e.rows(t), r;
	return n.length === 1 ? (r = [{}], n[0].forEach((e) => {
		r[0][e] = null;
	})) : r = e.parse(t), r;
}
function os(e) {
	return as({
		rows: Qo,
		parse: Zo
	}, e);
}
function ss(e) {
	return as({
		rows: es,
		parse: $o
	}, e);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/data/convert.js
function cs(e, t) {
	let n = e || t?.data_keys;
	return n?.x && (t.data_x = n.x), n;
}
function ls(e, t, n) {
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
var us = {
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
		})), i.url && t) is(i.url, i.mimeType, i.headers, cs(i.keys, n), t);
		else if (i.json) Uo(r(i.json), rs, t, [ts, ns])(i.json, cs(i.keys, n));
		else if (i.rows) Uo(r(i.rows), ns, t)(i.rows);
		else if (i.columns) Uo(r(i.columns), ts, t)(i.columns);
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
		ls.bind(n)(c, e, u);
		let d = u.customX && u.categorized && i.axis_x_categories.length ? new Map(i.axis_x_categories.map((e, t) => [e, t])) : null, f = i.data_idConverter.bind(n.api), p = c.map((t, r) => {
			let o = f(t), s = n.getXKey(t), c = u.customX && u.categorized, l = c && r === 0 && (() => {
				let t = ze(i.axis_x_categories);
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
}, ds = {
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
function fs(e) {
	return T(e) ? e : [e];
}
var ps = {
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
		return i?.isTimeSeries() ? a = Ie.bind(r)(e || r.getXValue(t, n)) : i?.isCustomX() && !i?.isCategorized() && (a = d(e) ? +e : r.getXValue(t, n)), a;
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
		let e = this, t = B.dataMinMax, n = e.cache.get(t);
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
		let t = this, { config: n } = t, r = e ? `${B.dataTotalPerIndex}-${e}` : B.dataTotalPerIndex, i = t.cache.get(r);
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
		let t = this, n = B.dataTotalSum, r = t.cache.get(n);
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
		let e = this, { cache: t, state: n } = e, r = t.get(B.maxDataCountTarget);
		if (r && r.generation === n.dataGeneration) return r.value;
		let i = e.filterTargetsToShow() || [], a = i.length, o = e.config.axis_x_inverted;
		if (a > 1) {
			let e = [];
			for (let t = 0; t < i.length; t++) {
				let n = i[t].values;
				for (let t = 0; t < n.length; t++) e.push(n[t].x);
			}
			i = e, i = Ae(De(i)).map((e, t, n) => ({
				x: e,
				index: o ? n.length - t - 1 : t
			}));
		} else a && (i = i[0].values.concat());
		return t.add(B.maxDataCountTarget, {
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
			let { cache: e, data: n, state: r } = t, i = B.filteredTargets, a = e.get(i);
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
		return e?.length && (n = De(Oe(e.map((e) => e.values.map((e) => +e.x)))), n = t?.isTimeSeries() ? n.map((e) => /* @__PURE__ */ new Date(+e)) : n.map(Number)), Ae(n);
	},
	addTargetIds(e, t) {
		let { state: n } = this;
		fs(t).forEach((t) => n[e].add(t));
	},
	removeTargetIds(e, t) {
		let { state: n } = this;
		fs(t).forEach((t) => n[e].delete(t));
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
			let e = t.cache.get(B.valuesXIndexMap);
			if (e && e.generation === t.state.dataGeneration) a = e.value;
			else {
				let e = t.mapTargetsToUniqueXs(t.data.targets).map((e) => p(e) ? e : +e);
				a = new Map(e.map((e, t) => [e, t])), t.cache.add(B.valuesXIndexMap, {
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
			let n = N(t).datum();
			s = n && Object.keys(n).length === 1 ? n.index : void 0;
		} else {
			let r = n.axis_rotated, c = Eo(t.chart.node()), l = i === "touch" && e.changedTouches ? e.changedTouches[0] : e, u = r ? l.clientY + c.y : l.clientX + c.x;
			if (Ao(t.svg)) {
				let e = [u, 0];
				r && e.reverse(), u = Do(t.eventRect.node(), ...e)[r ? "y" : "x"];
			} else u -= r ? o.top : o.left;
			s = Pe(a, u, 0, a.length - 1, r);
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
		}).join("|"), a = n.get(B.valuesByX);
		if (a && a.generation === r.dataGeneration && a.targetKey === i) return a.value;
		let o = /* @__PURE__ */ new Map();
		for (let n = 0; n < e.length; n++) {
			let r = e[n].values;
			for (let e = 0; e < r.length; e++) {
				let n = r[e], i = t.getXCacheKey(n.x), a = o.get(i);
				a ? a.push(n) : o.set(i, [n]);
			}
		}
		return n.add(B.valuesByX, {
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
				let e = c ? `.${Ia.chartBar}.${L.target}${r.getTargetSelectorSuffix(n.id)} .${Ia.bar}-${n.index}` : `.${La.chartCandlestick}.${L.target}${r.getTargetSelectorSuffix(n.id)} .${La.candlestick}-${n.index} path`;
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
				let e = ds[n]?.[t] ?? -1;
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
function ms(e, t = !1) {
	let n = this, { api: r } = n;
	t && n.api.flush(!0), e?.call(r);
}
var hs = {
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
			}), n.updateTypesElements(), ms.call(n, t.done, t.resizeAfter);
			return;
		}
		n.updateTargets(i.targets), o.zoom && (c.x = r.isCategorized() ? o.x.orgScale() : (a.xScale || o.x).copy(), c.domain = n.getXDomain(i.targets), c.x.domain(c.domain), c.currentDomain = n.zoom.getDomain(), n.withinRange(c.currentDomain, void 0, c.domain) || (o.x.domain(c.domain), o.zoom = null, n.$el.eventRect.property("__zoom", null))), n.redraw({
			withUpdateOrgXDomain: !0,
			withUpdateXDomain: !0,
			withLegend: !0
		}), o.zoom ? (a.xDomain = c.domain, a.xScale = c.x, r.isCategorized() && (c.currentDomain = n.getZoomDomainValue(c.currentDomain), a.xDomain = n.getZoomDomainValue(a.xDomain), a.xScale = c.x.domain(a.xDomain)), n.updateCurrentZoomTransform(c.x, c.currentDomain)) : a.xScale && a.xScale.domain(a.xDomain), n.updateTypesElements(), ms.call(n, t.done, t.resizeAfter);
	},
	loadFromArgs(e) {
		let t = this;
		t.config && (t.cache.reset(!1, [
			B.filteredTargets,
			B.maxDataCountTarget,
			B.valuesXIndexMap,
			B.maxTickSize
		]), t.convertData(e, (n) => {
			let r = e.data || n;
			e.append && (r.__append__ = !0), r && t.load(t.convertDataToTargets.call(t, r), e);
		}));
	},
	unload(e, t) {
		let n = this, { state: r, $el: i, $T: a } = n, o = !!n.hasLegendDefsPoint?.(), s = t, c = e;
		if (n.cache.reset(!1, [
			B.filteredTargets,
			B.maxDataCountTarget,
			B.valuesXIndexMap,
			B.maxTickSize
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
			r.withoutFadeIn[e] = !1, i.legend && i.legend.selectAll(`.${R.legendItem}${t}`).remove(), o && i.defs?.select(`#${n.getDefsPointId(t)}`).remove();
		}), n.data.targets = n.data.targets.filter((e) => !l.has(e.id)), r.hasFunnel && n.updateFunnel(n.data.targets), r.hasTreemap && n.updateTargetsForTreemap(n.data.targets), n.updateTypesElements(), a(i.svg.selectAll(c.map((e) => n.selectorTarget(e)))).style("opacity", "0").remove().call(xe, s);
	}
}, gs = { value: () => {} };
function _s() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new vs(n);
}
function vs(e) {
	this._ = e;
}
function ys(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
vs.prototype = _s.prototype = {
	constructor: vs,
	on: function(e, t) {
		var n = this._, r = ys(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = bs(n[i], e.name))) return i;
			return;
		}
		if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
		for (; ++a < o;) if (i = (e = r[a]).type) n[i] = xs(n[i], e.name, t);
		else if (t == null) for (i in n) n[i] = xs(n[i], e.name, null);
		return this;
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new vs(e);
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
function bs(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function xs(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = gs, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
//#endregion
//#region node_modules/d3-drag/src/noevent.js
var Ss = { passive: !1 }, Cs = {
	capture: !0,
	passive: !1
};
function ws(e) {
	e.stopImmediatePropagation();
}
function Ts(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region node_modules/d3-drag/src/nodrag.js
function Es(e) {
	var t = e.document.documentElement, n = N(e).on("dragstart.drag", Ts, Cs);
	"onselectstart" in t ? n.on("selectstart.drag", Ts, Cs) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ds(e, t) {
	var n = e.document.documentElement, r = N(e).on("dragstart.drag", null);
	t && (r.on("click.drag", Ts, Cs), setTimeout(function() {
		r.on("click.drag", null);
	}, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
//#endregion
//#region node_modules/d3-drag/src/constant.js
var Os = (e) => () => e;
//#endregion
//#region node_modules/d3-drag/src/event.js
function ks(e, { sourceEvent: t, subject: n, target: r, identifier: i, active: a, x: o, y: s, dx: c, dy: l, dispatch: u }) {
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
ks.prototype.on = function() {
	var e = this._.on.apply(this._, arguments);
	return e === this._ ? this : e;
};
//#endregion
//#region node_modules/d3-drag/src/drag.js
function As(e) {
	return !e.ctrlKey && !e.button;
}
function js() {
	return this.parentNode;
}
function Ms(e, t) {
	return t ?? {
		x: e.x,
		y: e.y
	};
}
function Ns() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Ps() {
	var e = As, t = js, n = Ms, r = Ns, i = {}, a = _s("start", "drag", "end"), o = 0, s, c, l, u, d = 0;
	function f(e) {
		e.on("mousedown.drag", p).filter(r).on("touchstart.drag", g).on("touchmove.drag", _, Ss).on("touchend.drag touchcancel.drag", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	function p(n, r) {
		if (!(u || !e.call(this, n, r))) {
			var i = y(this, t.call(this, n, r), n, r, "mouse");
			i && (N(n.view).on("mousemove.drag", m, Cs).on("mouseup.drag", h, Cs), Es(n.view), ws(n), l = !1, s = n.clientX, c = n.clientY, i("start", n));
		}
	}
	function m(e) {
		if (Ts(e), !l) {
			var t = e.clientX - s, n = e.clientY - c;
			l = t * t + n * n > d;
		}
		i.mouse("drag", e);
	}
	function h(e) {
		N(e.view).on("mousemove.drag mouseup.drag", null), Ds(e.view, l), Ts(e), i.mouse("end", e);
	}
	function g(n, r) {
		if (e.call(this, n, r)) {
			var i = n.changedTouches, a = t.call(this, n, r), o = i.length, s, c;
			for (s = 0; s < o; ++s) (c = y(this, a, n, r, i[s].identifier, i[s])) && (ws(n), c("start", n, i[s]));
		}
	}
	function _(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (r = 0; r < n; ++r) (a = i[t[r].identifier]) && (Ts(e), a("drag", e, t[r]));
	}
	function v(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (u && clearTimeout(u), u = setTimeout(function() {
			u = null;
		}, 500), r = 0; r < n; ++r) (a = i[t[r].identifier]) && (ws(e), a("end", e, t[r]));
	}
	function y(e, t, r, s, c, l) {
		var u = a.copy(), d = Gn(l || r, t), p, m, h;
		if ((h = n.call(e, new ks("beforestart", {
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
				case "drag": d = Gn(l || a, t), _ = o;
			}
			u.call(r, e, new ks(r, {
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
		return arguments.length ? (e = typeof t == "function" ? t : Os(!!t), f) : e;
	}, f.container = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : Os(e), f) : t;
	}, f.subject = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : Os(e), f) : n;
	}, f.touchable = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : Os(!!e), f) : r;
	}, f.on = function() {
		var e = a.on.apply(a, arguments);
		return e === a ? f : e;
	}, f.clickDistance = function(e) {
		return arguments.length ? (d = (e = +e) * e, f) : Math.sqrt(d);
	}, f;
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/interactions/interaction.js
var Fs = {
	setExpand(e, t, n) {
		let r = this, { config: i, $el: { circle: a } } = r;
		a && i.point_focus_expand_enabled && r.expandCircles(e, t, n), r.expandBarTypeShapes(!0, e, t, n);
	},
	expandBarTypeShapes(e = !0, t, n, r) {
		let i = this;
		["bar", "candlestick"].filter((e) => i.$el[e]).forEach((a) => {
			r && i.$el[a].classed(L.EXPANDED, !1), i.getShapeByIndex(a, t, n).classed(L.EXPANDED, e);
		});
	},
	setOverOut(e, t) {
		let n = this, { config: r, state: { hasFunnel: i, hasRadar: a, hasTreemap: o }, $el: { main: s } } = n, c = E(t);
		if (c || t !== -1) {
			let l = r[e ? "data_onover" : "data_onout"].bind(n.api);
			if (r.color_onover && n.setOverColor(e, t, c), c) {
				let e = n.getTargetSelectorSuffix(t.id), r = i || o ? `${L.target + e} .${Za.shape}` : Na.arc + e;
				l(t, s.select(`.${r}`).node());
			} else if (r.tooltip_grouped) e && (a && n.isPointFocusOnly() ? n.showCircleFocus(n.getAllValuesOnIndex(t, !0)) : n.setExpand(t, null, !0)), !n.isMultipleX() && s.selectAll(`.${Za.shape}-${t}`).each(function(e) {
				l(e, this);
			});
			else {
				let i = n.cache.get(B.setOverOut) || [], a = s.selectAll(`.${Za.shape}-${t}`).filter(function(e) {
					return n.isWithinShape(this, e);
				}), o = a.filter(function() {
					return i.every((e) => e !== this);
				});
				if (!e || a.empty() || i.length === o.size() && o.nodes().every((e, t) => e !== i[t])) for (; i.length;) {
					let e = i.pop();
					r.data_onout.bind(n.api)(N(e).datum(), e);
				}
				o.each(function() {
					e && (l(N(this).datum(), this), i.push(this));
				}), n.cache.add(B.setOverOut, i);
			}
		}
	},
	callOverOutForTouch(e) {
		let t = this, n = t.cache.get(B.callOverOutForTouch);
		(E(e) && n ? e.id !== n.id : e !== n) && ((n || m(n)) && t.setOverOut(!1, n), (e || m(e)) && t.setOverOut(!0, e), t.cache.add(B.callOverOutForTouch, e));
	},
	getDraggableSelection() {
		let e = this, { config: t, state: n } = e;
		return t.interaction_enabled && t.data_selection_draggable && e.drag ? Ps().on("drag", function(t) {
			n.event = t, e.drag(So(t, this));
		}).on("start", function(t) {
			n.event = t, e.dragstart(So(t, this));
		}).on("end", (t) => {
			n.event = t, e.dragend();
		}) : () => {};
	},
	dispatchEvent(e, t, n) {
		let r = this, { config: i, state: { eventReceiver: a, hasAxis: o, hasFunnel: s, hasRadar: c, hasTreemap: l }, $el: { eventRect: u, funnel: d, radar: f, svg: p, treemap: m } } = r, h = ((s || l) && a.rect || c && f.axes.select(`.${Fa.axis}-${t} text`) || u || r.getArcElementByIdOrIndex?.(t))?.node?.();
		if (h) {
			let u = r.isMultipleX(), f = i.axis_rotated, { width: g, left: _, top: v } = Co(h);
			if (o && !c && !u) {
				let e = a.coords[t];
				e ? (g = e.w, _ += e.x, v += e.y) : (g = 0, _ = 0, v = 0);
			}
			let y = _ + (n ? n[0] : 0) + (u || f ? 0 : g / 2), b = v + (n ? n[1] : 0) + (f ? 4 : 0);
			if (Ao(p) && r.$el.eventRect) {
				let e = Do(r.$el.eventRect.node(), y, b, !1);
				y = e.x, b = e.y;
			}
			let x = {
				screenX: y,
				screenY: b,
				clientX: y,
				clientY: b,
				bubbles: c
			};
			(s || l) && (h = (d ?? m).node()), Po[/^(mouse|click)/.test(e) ? "mouse" : "touch"](h, e, x);
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
}, Is = { categoryName(e) {
	let { axis_x_categories: t } = this.config;
	return t?.[e] ?? e;
} }, Ls = /[\x00-\x20\x7F-\xA0\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\]/g, Rs = {
	generateClass(e, t) {
		let n = this.state.generateClassCache, r = `${e}\0${t}`, i = n.get(r);
		return i || (i = ` ${e} ${e + this.getTargetSelectorSuffix(t)}`, n.set(r, i)), i;
	},
	getClass(e, t) {
		let n = /s$/.test(e), r = /^(area|arc|line|funnel|treemap)s?$/.test(e), i = n ? "id" : "index";
		return (a) => {
			let o = a.data || a;
			return ((t ? this.generateClass(no[n ? "shapes" : "shape"], o[i]) : "") + this.generateClass(no[e], o[r ? "id" : i])).trim();
		};
	},
	getChartClass(e) {
		return (t) => no[`chart${e}`] + this.classTarget((t.data ? t.data : t).id);
	},
	generateExtraLineClass() {
		let e = this.config.line_classes || [], t = [];
		return function(n) {
			let r = n.id || n.data?.id || n;
			return t.indexOf(r) < 0 && t.push(r), e[t.indexOf(r) % e.length];
		};
	},
	classRegion(e, t) {
		return `${this.generateClass(no.region, t)} ${"class" in e ? e.class : ""}`;
	},
	classTarget(e) {
		let t = this.config.data_classes[e], n = "";
		return t && (n = ` ${no.target}-${t}`), this.generateClass(no.target, e) + n;
	},
	classFocus(e) {
		return this.classFocused(e) + this.classDefocused(e);
	},
	classFocused(e) {
		return ` ${this.state.focusedTargetIds.has(e.id) ? no.focused : ""}`;
	},
	classDefocused(e) {
		return ` ${this.state.defocusedTargetIds.has(e.id) ? no.defocused : ""}`;
	},
	getTargetSelectorSuffix(e) {
		return (e || e === 0 ? `-${e}` : "").replace(Ls, "-");
	},
	selectorTarget(e, t = "", n = "") {
		let r = this.getTargetSelectorSuffix(e);
		return `${t}.${no.target + r} ${n}, ${t}.${no.circles + r} ${n}`;
	},
	selectorTargets(e, t) {
		let n = e || [];
		return n.length ? n.map((e) => this.selectorTarget(e, t)) : null;
	},
	selectorLegend(e) {
		return `.${no.legendItem + this.getTargetSelectorSuffix(e)}`;
	},
	selectorLegends(e) {
		return e?.length ? e.map((e) => this.selectorLegend(e)) : null;
	}
};
//#endregion
//#region node_modules/d3-scale/src/init.js
function zs(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			this.range(e);
			break;
		default: this.range(t).domain(e);
	}
	return this;
}
function Bs(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			typeof e == "function" ? this.interpolator(e) : this.range(e);
			break;
		default: this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
	}
	return this;
}
//#endregion
//#region node_modules/d3-scale/src/ordinal.js
var Vs = Symbol("implicit");
function Hs() {
	var e = new Rr(), t = [], n = [], r = Vs;
	function i(i) {
		let a = e.get(i);
		if (a === void 0) {
			if (r !== Vs) return r;
			e.set(i, a = t.push(i) - 1);
		}
		return n[a % n.length];
	}
	return i.domain = function(n) {
		if (!arguments.length) return t.slice();
		t = [], e = new Rr();
		for (let r of n) e.has(r) || e.set(r, t.push(r) - 1);
		return i;
	}, i.range = function(e) {
		return arguments.length ? (n = Array.from(e), i) : n.slice();
	}, i.unknown = function(e) {
		return arguments.length ? (r = e, i) : r;
	}, i.copy = function() {
		return Hs(t, n).unknown(r);
	}, zs.apply(i, arguments), i;
}
//#endregion
//#region node_modules/d3-scale/src/band.js
function Us() {
	var e = Hs().unknown(void 0), t = e.domain, n = e.range, r = 0, i = 1, a, o, s = !1, c = 0, l = 0, u = .5;
	delete e.unknown;
	function d() {
		var e = t().length, d = i < r, f = d ? i : r, p = d ? r : i;
		a = (p - f) / Math.max(1, e - c + l * 2), s && (a = Math.floor(a)), f += (p - f - a * (e - c)) * u, o = a * (1 - c), s && (f = Math.round(f), o = Math.round(o));
		var m = ti(e).map(function(e) {
			return f + a * e;
		});
		return n(d ? m.reverse() : m);
	}
	return e.domain = function(e) {
		return arguments.length ? (t(e), d()) : t();
	}, e.range = function(e) {
		return arguments.length ? ([r, i] = e, r = +r, i = +i, d()) : [r, i];
	}, e.rangeRound = function(e) {
		return [r, i] = e, r = +r, i = +i, s = !0, d();
	}, e.bandwidth = function() {
		return o;
	}, e.step = function() {
		return a;
	}, e.round = function(e) {
		return arguments.length ? (s = !!e, d()) : s;
	}, e.padding = function(e) {
		return arguments.length ? (c = Math.min(1, l = +e), d()) : c;
	}, e.paddingInner = function(e) {
		return arguments.length ? (c = Math.min(1, e), d()) : c;
	}, e.paddingOuter = function(e) {
		return arguments.length ? (l = +e, d()) : l;
	}, e.align = function(e) {
		return arguments.length ? (u = Math.max(0, Math.min(1, e)), d()) : u;
	}, e.copy = function() {
		return Us(t(), [r, i]).round(s).paddingInner(c).paddingOuter(l).align(u);
	}, zs.apply(d(), arguments);
}
function Ws(e) {
	var t = e.copy;
	return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
		return Ws(t());
	}, e;
}
function Gs() {
	return Ws(Us.apply(null, arguments).paddingInner(1));
}
//#endregion
//#region node_modules/d3-color/src/define.js
function Ks(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function qs(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region node_modules/d3-color/src/color.js
function Js() {}
var Ys = .7, Xs = 1 / Ys, Zs = "\\s*([+-]?\\d+)\\s*", Qs = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", $s = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ec = /^#([0-9a-f]{3,8})$/, tc = RegExp(`^rgb\\(${Zs},${Zs},${Zs}\\)$`), nc = RegExp(`^rgb\\(${$s},${$s},${$s}\\)$`), rc = RegExp(`^rgba\\(${Zs},${Zs},${Zs},${Qs}\\)$`), ic = RegExp(`^rgba\\(${$s},${$s},${$s},${Qs}\\)$`), ac = RegExp(`^hsl\\(${Qs},${$s},${$s}\\)$`), oc = RegExp(`^hsla\\(${Qs},${$s},${$s},${Qs}\\)$`), sc = {
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
Ks(Js, fc, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: cc,
	formatHex: cc,
	formatHex8: lc,
	formatHsl: uc,
	formatRgb: dc,
	toString: dc
});
function cc() {
	return this.rgb().formatHex();
}
function lc() {
	return this.rgb().formatHex8();
}
function uc() {
	return Tc(this).formatHsl();
}
function dc() {
	return this.rgb().formatRgb();
}
function fc(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = ec.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? pc(t) : n === 3 ? new _c(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? mc(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? mc(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = tc.exec(e)) ? new _c(t[1], t[2], t[3], 1) : (t = nc.exec(e)) ? new _c(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = rc.exec(e)) ? mc(t[1], t[2], t[3], t[4]) : (t = ic.exec(e)) ? mc(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ac.exec(e)) ? wc(t[1], t[2] / 100, t[3] / 100, 1) : (t = oc.exec(e)) ? wc(t[1], t[2] / 100, t[3] / 100, t[4]) : sc.hasOwnProperty(e) ? pc(sc[e]) : e === "transparent" ? new _c(NaN, NaN, NaN, 0) : null;
}
function pc(e) {
	return new _c(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function mc(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new _c(e, t, n, r);
}
function hc(e) {
	return e instanceof Js || (e = fc(e)), e ? (e = e.rgb(), new _c(e.r, e.g, e.b, e.opacity)) : new _c();
}
function gc(e, t, n, r) {
	return arguments.length === 1 ? hc(e) : new _c(e, t, n, r ?? 1);
}
function _c(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ks(_c, gc, qs(Js, {
	brighter(e) {
		return e = e == null ? Xs : Xs ** +e, new _c(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? Ys : Ys ** +e, new _c(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new _c(Sc(this.r), Sc(this.g), Sc(this.b), xc(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: vc,
	formatHex: vc,
	formatHex8: yc,
	formatRgb: bc,
	toString: bc
}));
function vc() {
	return `#${Cc(this.r)}${Cc(this.g)}${Cc(this.b)}`;
}
function yc() {
	return `#${Cc(this.r)}${Cc(this.g)}${Cc(this.b)}${Cc((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function bc() {
	let e = xc(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${Sc(this.r)}, ${Sc(this.g)}, ${Sc(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function xc(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Sc(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Cc(e) {
	return e = Sc(e), (e < 16 ? "0" : "") + e.toString(16);
}
function wc(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Dc(e, t, n, r);
}
function Tc(e) {
	if (e instanceof Dc) return new Dc(e.h, e.s, e.l, e.opacity);
	if (e instanceof Js || (e = fc(e)), !e) return new Dc();
	if (e instanceof Dc) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new Dc(o, s, c, e.opacity);
}
function Ec(e, t, n, r) {
	return arguments.length === 1 ? Tc(e) : new Dc(e, t, n, r ?? 1);
}
function Dc(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ks(Dc, Ec, qs(Js, {
	brighter(e) {
		return e = e == null ? Xs : Xs ** +e, new Dc(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? Ys : Ys ** +e, new Dc(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new _c(Ac(e >= 240 ? e - 240 : e + 120, i, r), Ac(e, i, r), Ac(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new Dc(Oc(this.h), kc(this.s), kc(this.l), xc(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = xc(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${Oc(this.h)}, ${kc(this.s) * 100}%, ${kc(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function Oc(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function kc(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function Ac(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region node_modules/d3-color/src/math.js
var jc = Math.PI / 180, Mc = 180 / Math.PI, Nc = 18, Pc = .96422, Fc = 1, Ic = .82521, Lc = 4 / 29, Rc = 6 / 29, zc = 3 * Rc * Rc, Bc = Rc * Rc * Rc;
function Vc(e) {
	if (e instanceof Uc) return new Uc(e.l, e.a, e.b, e.opacity);
	if (e instanceof Xc) return Zc(e);
	e instanceof _c || (e = hc(e));
	var t = qc(e.r), n = qc(e.g), r = qc(e.b), i = Wc((.2225045 * t + .7168786 * n + .0606169 * r) / Fc), a, o;
	return t === n && n === r ? a = o = i : (a = Wc((.4360747 * t + .3850649 * n + .1430804 * r) / Pc), o = Wc((.0139322 * t + .0971045 * n + .7141733 * r) / Ic)), new Uc(116 * i - 16, 500 * (a - i), 200 * (i - o), e.opacity);
}
function Hc(e, t, n, r) {
	return arguments.length === 1 ? Vc(e) : new Uc(e, t, n, r ?? 1);
}
function Uc(e, t, n, r) {
	this.l = +e, this.a = +t, this.b = +n, this.opacity = +r;
}
Ks(Uc, Hc, qs(Js, {
	brighter(e) {
		return new Uc(this.l + Nc * (e ?? 1), this.a, this.b, this.opacity);
	},
	darker(e) {
		return new Uc(this.l - Nc * (e ?? 1), this.a, this.b, this.opacity);
	},
	rgb() {
		var e = (this.l + 16) / 116, t = isNaN(this.a) ? e : e + this.a / 500, n = isNaN(this.b) ? e : e - this.b / 200;
		return t = Pc * Gc(t), e = Fc * Gc(e), n = Ic * Gc(n), new _c(Kc(3.1338561 * t - 1.6168667 * e - .4906146 * n), Kc(-.9787684 * t + 1.9161415 * e + .033454 * n), Kc(.0719453 * t - .2289914 * e + 1.4052427 * n), this.opacity);
	}
}));
function Wc(e) {
	return e > Bc ? e ** (1 / 3) : e / zc + Lc;
}
function Gc(e) {
	return e > Rc ? e * e * e : zc * (e - Lc);
}
function Kc(e) {
	return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055);
}
function qc(e) {
	return (e /= 255) <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;
}
function Jc(e) {
	if (e instanceof Xc) return new Xc(e.h, e.c, e.l, e.opacity);
	if (e instanceof Uc || (e = Vc(e)), e.a === 0 && e.b === 0) return new Xc(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
	var t = Math.atan2(e.b, e.a) * Mc;
	return new Xc(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
}
function Yc(e, t, n, r) {
	return arguments.length === 1 ? Jc(e) : new Xc(e, t, n, r ?? 1);
}
function Xc(e, t, n, r) {
	this.h = +e, this.c = +t, this.l = +n, this.opacity = +r;
}
function Zc(e) {
	if (isNaN(e.h)) return new Uc(e.l, 0, 0, e.opacity);
	var t = e.h * jc;
	return new Uc(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
}
Ks(Xc, Yc, qs(Js, {
	brighter(e) {
		return new Xc(this.h, this.c, this.l + Nc * (e ?? 1), this.opacity);
	},
	darker(e) {
		return new Xc(this.h, this.c, this.l - Nc * (e ?? 1), this.opacity);
	},
	rgb() {
		return Zc(this).rgb();
	}
}));
//#endregion
//#region node_modules/d3-color/src/cubehelix.js
var Qc = -.14861, $c = 1.78277, el = -.29227, tl = -.90649, nl = 1.97294, rl = nl * tl, il = nl * $c, al = $c * el - tl * Qc;
function ol(e) {
	if (e instanceof cl) return new cl(e.h, e.s, e.l, e.opacity);
	e instanceof _c || (e = hc(e));
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = (al * r + rl * t - il * n) / (al + rl - il), a = r - i, o = (nl * (n - i) - el * a) / tl, s = Math.sqrt(o * o + a * a) / (nl * i * (1 - i)), c = s ? Math.atan2(o, a) * Mc - 120 : NaN;
	return new cl(c < 0 ? c + 360 : c, s, i, e.opacity);
}
function sl(e, t, n, r) {
	return arguments.length === 1 ? ol(e) : new cl(e, t, n, r ?? 1);
}
function cl(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ks(cl, sl, qs(Js, {
	brighter(e) {
		return e = e == null ? Xs : Xs ** +e, new cl(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? Ys : Ys ** +e, new cl(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = isNaN(this.h) ? 0 : (this.h + 120) * jc, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), r = Math.cos(e), i = Math.sin(e);
		return new _c(255 * (t + n * (Qc * r + $c * i)), 255 * (t + n * (el * r + tl * i)), 255 * (t + nl * r * n), this.opacity);
	}
}));
//#endregion
//#region node_modules/d3-interpolate/src/basis.js
function ll(e, t, n, r, i) {
	var a = e * e, o = a * e;
	return ((1 - 3 * e + 3 * a - o) * t + (4 - 6 * a + 3 * o) * n + (1 + 3 * e + 3 * a - 3 * o) * r + o * i) / 6;
}
function ul(e) {
	var t = e.length - 1;
	return function(n) {
		var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), i = e[r], a = e[r + 1], o = r > 0 ? e[r - 1] : 2 * i - a, s = r < t - 1 ? e[r + 2] : 2 * a - i;
		return ll((n - r / t) * t, o, i, a, s);
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/constant.js
var dl = (e) => () => e;
//#endregion
//#region node_modules/d3-interpolate/src/color.js
function fl(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function pl(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function ml(e, t) {
	var n = t - e;
	return n ? fl(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : dl(isNaN(e) ? t : e);
}
function hl(e) {
	return (e = +e) == 1 ? gl : function(t, n) {
		return n - t ? pl(t, n, e) : dl(isNaN(t) ? n : t);
	};
}
function gl(e, t) {
	var n = t - e;
	return n ? fl(e, n) : dl(isNaN(e) ? t : e);
}
//#endregion
//#region node_modules/d3-interpolate/src/rgb.js
var _l = (function e(t) {
	var n = hl(t);
	function r(e, t) {
		var r = n((e = gc(e)).r, (t = gc(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = gl(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
function vl(e) {
	return function(t) {
		var n = t.length, r = Array(n), i = Array(n), a = Array(n), o, s;
		for (o = 0; o < n; ++o) s = gc(t[o]), r[o] = s.r || 0, i[o] = s.g || 0, a[o] = s.b || 0;
		return r = e(r), i = e(i), a = e(a), s.opacity = 1, function(e) {
			return s.r = r(e), s.g = i(e), s.b = a(e), s + "";
		};
	};
}
var yl = vl(ul);
//#endregion
//#region node_modules/d3-interpolate/src/numberArray.js
function bl(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function xl(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region node_modules/d3-interpolate/src/array.js
function Sl(e, t) {
	var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o;
	for (o = 0; o < r; ++o) i[o] = jl(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/date.js
function Cl(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/number.js
function wl(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/object.js
function Tl(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = jl(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/string.js
var El = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Dl = new RegExp(El.source, "g");
function Ol(e) {
	return function() {
		return e;
	};
}
function kl(e) {
	return function(t) {
		return e(t) + "";
	};
}
function Al(e, t) {
	var n = El.lastIndex = Dl.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = El.exec(e)) && (i = Dl.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: wl(r, i)
	})), n = Dl.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? kl(c[0].x) : Ol(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region node_modules/d3-interpolate/src/value.js
function jl(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? dl(t) : (n === "number" ? wl : n === "string" ? (r = fc(t)) ? (t = r, _l) : Al : t instanceof fc ? _l : t instanceof Date ? Cl : xl(t) ? bl : Array.isArray(t) ? Sl : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Tl : wl)(e, t);
}
//#endregion
//#region node_modules/d3-interpolate/src/round.js
function Ml(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/decompose.js
var Nl = 180 / Math.PI, Pl = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function Fl(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * Nl,
		skewX: Math.atan(c) * Nl,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/parse.js
var Il;
function Ll(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? Pl : Fl(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Rl(e) {
	return e == null || (Il ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), Il.setAttribute("transform", e), !(e = Il.transform.baseVal.consolidate())) ? Pl : (e = e.matrix, Fl(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/index.js
function zl(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: wl(e, i)
			}, {
				i: c - 2,
				x: wl(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: wl(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: wl(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: wl(e, n)
			}, {
				i: s - 2,
				x: wl(t, r)
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
var Bl = zl(Ll, "px, ", "px)", "deg)"), Vl = zl(Rl, ", ", ")", ")"), Hl = 1e-12;
function Ul(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Wl(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Gl(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var Kl = (function e(t, n, r) {
	function i(e, i) {
		var a = e[0], o = e[1], s = e[2], c = i[0], l = i[1], u = i[2], d = c - a, f = l - o, p = d * d + f * f, m, h;
		if (p < Hl) h = Math.log(u / s) / t, m = function(e) {
			return [
				a + e * d,
				o + e * f,
				s * Math.exp(t * e * h)
			];
		};
		else {
			var g = Math.sqrt(p), _ = (u * u - s * s + r * p) / (2 * s * n * g), v = (u * u - s * s - r * p) / (2 * u * n * g), y = Math.log(Math.sqrt(_ * _ + 1) - _);
			h = (Math.log(Math.sqrt(v * v + 1) - v) - y) / t, m = function(e) {
				var r = e * h, i = Ul(y), c = s / (n * g) * (i * Gl(t * r + y) - Wl(y));
				return [
					a + c * d,
					o + c * f,
					s * i / Ul(t * r + y)
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
//#region node_modules/d3-interpolate/src/hsl.js
function ql(e) {
	return function(t, n) {
		var r = e((t = Ec(t)).h, (n = Ec(n)).h), i = gl(t.s, n.s), a = gl(t.l, n.l), o = gl(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.s = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var Jl = ql(ml);
//#endregion
//#region node_modules/d3-interpolate/src/lab.js
function Yl(e, t) {
	var n = gl((e = Hc(e)).l, (t = Hc(t)).l), r = gl(e.a, t.a), i = gl(e.b, t.b), a = gl(e.opacity, t.opacity);
	return function(t) {
		return e.l = n(t), e.a = r(t), e.b = i(t), e.opacity = a(t), e + "";
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/hcl.js
function Xl(e) {
	return function(t, n) {
		var r = e((t = Yc(t)).h, (n = Yc(n)).h), i = gl(t.c, n.c), a = gl(t.l, n.l), o = gl(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.c = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var Zl = Xl(ml);
//#endregion
//#region node_modules/d3-interpolate/src/cubehelix.js
function Ql(e) {
	return (function t(n) {
		n = +n;
		function r(t, r) {
			var i = e((t = sl(t)).h, (r = sl(r)).h), a = gl(t.s, r.s), o = gl(t.l, r.l), s = gl(t.opacity, r.opacity);
			return function(e) {
				return t.h = i(e), t.s = a(e), t.l = o(e ** +n), t.opacity = s(e), t + "";
			};
		}
		return r.gamma = t, r;
	})(1);
}
Ql(ml);
var $l = Ql(gl);
//#endregion
//#region node_modules/d3-interpolate/src/piecewise.js
function eu(e, t) {
	t === void 0 && (t = e, e = jl);
	for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;) a[n] = e(i, i = t[++n]);
	return function(e) {
		var t = Math.max(0, Math.min(r - 1, Math.floor(e *= r)));
		return a[t](e - t);
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/quantize.js
function tu(e, t) {
	for (var n = Array(t), r = 0; r < t; ++r) n[r] = e(r / (t - 1));
	return n;
}
//#endregion
//#region node_modules/d3-scale/src/constant.js
function nu(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-scale/src/number.js
function ru(e) {
	return +e;
}
//#endregion
//#region node_modules/d3-scale/src/continuous.js
var iu = [0, 1];
function au(e) {
	return e;
}
function ou(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : nu(isNaN(t) ? NaN : .5);
}
function su(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function cu(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = ou(i, r), a = n(o, a)) : (r = ou(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function lu(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = ou(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = Ir(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function uu(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function du() {
	var e = iu, t = iu, n = jl, r, i, a, o = au, s, c, l;
	function u() {
		var n = Math.min(e.length, t.length);
		return o !== au && (o = su(e[0], e[n - 1])), s = n > 2 ? lu : cu, c = l = null, d;
	}
	function d(i) {
		return i == null || isNaN(i = +i) ? a : (c ||= s(e.map(r), t, n))(r(o(i)));
	}
	return d.invert = function(n) {
		return o(i((l ||= s(t, e.map(r), wl))(n)));
	}, d.domain = function(t) {
		return arguments.length ? (e = Array.from(t, ru), u()) : e.slice();
	}, d.range = function(e) {
		return arguments.length ? (t = Array.from(e), u()) : t.slice();
	}, d.rangeRound = function(e) {
		return t = Array.from(e), n = Ml, u();
	}, d.clamp = function(e) {
		return arguments.length ? (o = e ? !0 : au, u()) : o !== au;
	}, d.interpolate = function(e) {
		return arguments.length ? (n = e, u()) : n;
	}, d.unknown = function(e) {
		return arguments.length ? (a = e, d) : a;
	}, function(e, t) {
		return r = e, i = t, u();
	};
}
function fu() {
	return du()(au, au);
}
//#endregion
//#region node_modules/d3-format/src/formatDecimal.js
function pu(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function mu(e, t) {
	if (!isFinite(e) || e === 0) return null;
	var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), r = e.slice(0, n);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
//#endregion
//#region node_modules/d3-format/src/exponent.js
function hu(e) {
	return e = mu(Math.abs(e)), e ? e[1] : NaN;
}
//#endregion
//#region node_modules/d3-format/src/formatGroup.js
function gu(e, t) {
	return function(n, r) {
		for (var i = n.length, a = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r));) s = e[o = (o + 1) % e.length];
		return a.reverse().join(t);
	};
}
//#endregion
//#region node_modules/d3-format/src/formatNumerals.js
function _u(e) {
	return function(t) {
		return t.replace(/[0-9]/g, function(t) {
			return e[+t];
		});
	};
}
//#endregion
//#region node_modules/d3-format/src/formatSpecifier.js
var vu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function yu(e) {
	if (!(t = vu.exec(e))) throw Error("invalid format: " + e);
	var t;
	return new bu({
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
yu.prototype = bu.prototype;
function bu(e) {
	this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
bu.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
//#endregion
//#region node_modules/d3-format/src/formatTrim.js
function xu(e) {
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
var Su;
function Cu(e, t) {
	var n = mu(e, t);
	if (!n) return Su = void 0, e.toPrecision(t);
	var r = n[0], i = n[1], a = i - (Su = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
	return a === o ? r : a > o ? r + Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + Array(1 - a).join("0") + mu(e, Math.max(0, t + a - 1))[0];
}
//#endregion
//#region node_modules/d3-format/src/formatRounded.js
function wu(e, t) {
	var n = mu(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1];
	return i < 0 ? "0." + Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + Array(i - r.length + 2).join("0");
}
//#endregion
//#region node_modules/d3-format/src/formatTypes.js
var Tu = {
	"%": (e, t) => (e * 100).toFixed(t),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + "",
	d: pu,
	e: (e, t) => e.toExponential(t),
	f: (e, t) => e.toFixed(t),
	g: (e, t) => e.toPrecision(t),
	o: (e) => Math.round(e).toString(8),
	p: (e, t) => wu(e * 100, t),
	r: wu,
	s: Cu,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
};
//#endregion
//#region node_modules/d3-format/src/identity.js
function Eu(e) {
	return e;
}
//#endregion
//#region node_modules/d3-format/src/locale.js
var Du = Array.prototype.map, Ou = [
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
function ku(e) {
	var t = e.grouping === void 0 || e.thousands === void 0 ? Eu : gu(Du.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Eu : _u(Du.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
	function l(e, l) {
		e = yu(e);
		var u = e.fill, d = e.align, f = e.sign, p = e.symbol, m = e.zero, h = e.width, g = e.comma, _ = e.precision, v = e.trim, y = e.type;
		y === "n" ? (g = !0, y = "g") : Tu[y] || (_ === void 0 && (_ = 12), v = !0, y = "g"), (m || u === "0" && d === "=") && (m = !0, u = "0", d = "=");
		var b = (l && l.prefix !== void 0 ? l.prefix : "") + (p === "$" ? n : p === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : ""), x = (p === "$" ? r : /[%p]/.test(y) ? o : "") + (l && l.suffix !== void 0 ? l.suffix : ""), S = Tu[y], C = /[defgprs%]/.test(y);
		_ = _ === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
		function w(e) {
			var n = b, r = x, o, l, p;
			if (y === "c") r = S(e) + r, e = "";
			else {
				e = +e;
				var w = e < 0 || 1 / e < 0;
				if (e = isNaN(e) ? c : S(Math.abs(e), _), v && (e = xu(e)), w && +e == 0 && f !== "+" && (w = !1), n = (w ? f === "(" ? f : s : f === "-" || f === "(" ? "" : f) + n, r = (y === "s" && !isNaN(e) && Su !== void 0 ? Ou[8 + Su / 3] : "") + r + (w && f === "(" ? ")" : ""), C) {
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
		var n = Math.max(-8, Math.min(8, Math.floor(hu(t) / 3))) * 3, r = 10 ** -n, i = l((e = yu(e), e.type = "f", e), { suffix: Ou[8 + n / 3] });
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
var Au, ju, Mu;
Nu({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function Nu(e) {
	return Au = ku(e), ju = Au.format, Mu = Au.formatPrefix, Au;
}
//#endregion
//#region node_modules/d3-format/src/precisionFixed.js
function Pu(e) {
	return Math.max(0, -hu(Math.abs(e)));
}
//#endregion
//#region node_modules/d3-format/src/precisionPrefix.js
function Fu(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(hu(t) / 3))) * 3 - hu(Math.abs(e)));
}
//#endregion
//#region node_modules/d3-format/src/precisionRound.js
function Iu(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, hu(t) - hu(e)) + 1;
}
//#endregion
//#region node_modules/d3-scale/src/tickFormat.js
function Lu(e, t, n, r) {
	var i = Yr(e, t, n), a;
	switch (r = yu(r ?? ",f"), r.type) {
		case "s":
			var o = Math.max(Math.abs(e), Math.abs(t));
			return r.precision == null && !isNaN(a = Fu(i, o)) && (r.precision = a), Mu(r, o);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			r.precision == null && !isNaN(a = Iu(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = a - (r.type === "e"));
			break;
		case "f":
		case "%": r.precision == null && !isNaN(a = Pu(i)) && (r.precision = a - (r.type === "%") * 2);
	}
	return ju(r);
}
//#endregion
//#region node_modules/d3-scale/src/linear.js
function Ru(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return qr(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return Lu(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = Jr(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
			if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
			else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
			else break;
			c = l;
		}
		return e;
	}, e;
}
function zu() {
	var e = fu();
	return e.copy = function() {
		return uu(e, zu());
	}, zs.apply(e, arguments), Ru(e);
}
//#endregion
//#region node_modules/d3-scale/src/identity.js
function Bu(e) {
	var t;
	function n(e) {
		return e == null || isNaN(e = +e) ? t : e;
	}
	return n.invert = n, n.domain = n.range = function(t) {
		return arguments.length ? (e = Array.from(t, ru), n) : e.slice();
	}, n.unknown = function(e) {
		return arguments.length ? (t = e, n) : t;
	}, n.copy = function() {
		return Bu(e).unknown(t);
	}, e = arguments.length ? Array.from(e, ru) : [0, 1], Ru(n);
}
//#endregion
//#region node_modules/d3-scale/src/nice.js
function Vu(e, t) {
	e = e.slice();
	var n = 0, r = e.length - 1, i = e[n], a = e[r], o;
	return a < i && (o = n, n = r, r = o, o = i, i = a, a = o), e[n] = t.floor(i), e[r] = t.ceil(a), e;
}
//#endregion
//#region node_modules/d3-scale/src/log.js
function Hu(e) {
	return Math.log(e);
}
function Uu(e) {
	return Math.exp(e);
}
function Wu(e) {
	return -Math.log(-e);
}
function Gu(e) {
	return -Math.exp(-e);
}
function Ku(e) {
	return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function qu(e) {
	return e === 10 ? Ku : e === Math.E ? Math.exp : (t) => e ** +t;
}
function Ju(e) {
	return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Yu(e) {
	return (t, n) => -e(-t, n);
}
function Xu(e) {
	let t = e(Hu, Uu), n = t.domain, r = 10, i, a;
	function o() {
		return i = Ju(r), a = qu(r), n()[0] < 0 ? (i = Yu(i), a = Yu(a), e(Wu, Gu)) : e(Hu, Uu), t;
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
			m.length * 2 < p && (m = qr(o, s, p));
		} else m = qr(l, u, Math.min(u - l, p)).map(a);
		return c ? m.reverse() : m;
	}, t.tickFormat = (e, n) => {
		if (e ??= 10, n ??= r === 10 ? "s" : ",", typeof n != "function" && (!(r % 1) && (n = yu(n)).precision == null && (n.trim = !0), n = ju(n)), e === Infinity) return n;
		let o = Math.max(1, r * e / t.ticks().length);
		return (e) => {
			let t = e / a(Math.round(i(e)));
			return t * r < r - .5 && (t *= r), t <= o ? n(e) : "";
		};
	}, t.nice = () => n(Vu(n(), {
		floor: (e) => a(Math.floor(i(e))),
		ceil: (e) => a(Math.ceil(i(e)))
	})), t;
}
function Zu() {
	let e = Xu(du()).domain([1, 10]);
	return e.copy = () => uu(e, Zu()).base(e.base()), zs.apply(e, arguments), e;
}
//#endregion
//#region node_modules/d3-scale/src/symlog.js
function Qu(e) {
	return function(t) {
		return Math.sign(t) * Math.log1p(Math.abs(t / e));
	};
}
function $u(e) {
	return function(t) {
		return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
	};
}
function ed(e) {
	var t = 1, n = e(Qu(t), $u(t));
	return n.constant = function(n) {
		return arguments.length ? e(Qu(t = +n), $u(t)) : t;
	}, Ru(n);
}
function td() {
	var e = ed(du());
	return e.copy = function() {
		return uu(e, td()).constant(e.constant());
	}, zs.apply(e, arguments);
}
//#endregion
//#region node_modules/d3-scale/src/pow.js
function nd(e) {
	return function(t) {
		return t < 0 ? -((-t) ** +e) : t ** +e;
	};
}
function rd(e) {
	return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function id(e) {
	return e < 0 ? -e * e : e * e;
}
function ad(e) {
	var t = e(au, au), n = 1;
	function r() {
		return n === 1 ? e(au, au) : n === .5 ? e(rd, id) : e(nd(n), nd(1 / n));
	}
	return t.exponent = function(e) {
		return arguments.length ? (n = +e, r()) : n;
	}, Ru(t);
}
function od() {
	var e = ad(du());
	return e.copy = function() {
		return uu(e, od()).exponent(e.exponent());
	}, zs.apply(e, arguments), e;
}
//#endregion
//#region node_modules/d3-scale/src/quantile.js
function sd() {
	var e = [], t = [], n = [], r;
	function i() {
		var r = 0, i = Math.max(1, t.length);
		for (n = Array(i - 1); ++r < i;) n[r - 1] = Qr(e, r / i);
		return a;
	}
	function a(e) {
		return e == null || isNaN(e = +e) ? r : t[Ir(n, e)];
	}
	return a.invertExtent = function(r) {
		var i = t.indexOf(r);
		return i < 0 ? [NaN, NaN] : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]];
	}, a.domain = function(t) {
		if (!arguments.length) return e.slice();
		e = [];
		for (let n of t) n != null && !isNaN(n = +n) && e.push(n);
		return e.sort(jr), i();
	}, a.range = function(e) {
		return arguments.length ? (t = Array.from(e), i()) : t.slice();
	}, a.unknown = function(e) {
		return arguments.length ? (r = e, a) : r;
	}, a.quantiles = function() {
		return n.slice();
	}, a.copy = function() {
		return sd().domain(e).range(t).unknown(r);
	}, zs.apply(a, arguments);
}
//#endregion
//#region node_modules/d3-scale/src/threshold.js
function cd() {
	var e = [.5], t = [0, 1], n, r = 1;
	function i(i) {
		return i != null && i <= i ? t[Ir(e, i, 0, r)] : n;
	}
	return i.domain = function(n) {
		return arguments.length ? (e = Array.from(n), r = Math.min(e.length, t.length - 1), i) : e.slice();
	}, i.range = function(n) {
		return arguments.length ? (t = Array.from(n), r = Math.min(e.length, t.length - 1), i) : t.slice();
	}, i.invertExtent = function(n) {
		var r = t.indexOf(n);
		return [e[r - 1], e[r]];
	}, i.unknown = function(e) {
		return arguments.length ? (n = e, i) : n;
	}, i.copy = function() {
		return cd().domain(e).range(t).unknown(n);
	}, zs.apply(i, arguments);
}
//#endregion
//#region node_modules/d3-scale/src/time.js
function ld(e) {
	return new Date(e);
}
function ud(e) {
	return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function dd(e, t, n, r, i, a, o, s, c, l) {
	var u = fu(), d = u.invert, f = u.domain, p = l(".%L"), m = l(":%S"), h = l("%I:%M"), g = l("%I %p"), _ = l("%a %d"), v = l("%b %d"), y = l("%B"), b = l("%Y");
	function x(e) {
		return (c(e) < e ? p : s(e) < e ? m : o(e) < e ? h : a(e) < e ? g : r(e) < e ? i(e) < e ? _ : v : n(e) < e ? y : b)(e);
	}
	return u.invert = function(e) {
		return new Date(d(e));
	}, u.domain = function(e) {
		return arguments.length ? f(Array.from(e, ud)) : f().map(ld);
	}, u.ticks = function(t) {
		var n = f();
		return e(n[0], n[n.length - 1], t ?? 10);
	}, u.tickFormat = function(e, t) {
		return t == null ? x : l(t);
	}, u.nice = function(e) {
		var n = f();
		return (!e || typeof e.range != "function") && (e = t(n[0], n[n.length - 1], e ?? 10)), e ? f(Vu(n, e)) : u;
	}, u.copy = function() {
		return uu(u, dd(e, t, n, r, i, a, o, s, c, l));
	}, u;
}
function fd() {
	return zs.apply(dd(oi, si, kr, Dr, fr, cr, or, ir, rr, Oa).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
//#endregion
//#region node_modules/d3-scale/src/utcTime.js
function pd() {
	return zs.apply(dd(ii, ai, Ar, Or, br, lr, sr, ar, rr, Aa).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
//#endregion
//#region node_modules/d3-scale/src/sequential.js
function md(e, t) {
	return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
//#endregion
//#region node_modules/d3-scale/src/diverging.js
function hd() {
	var e = 0, t = .5, n = 1, r = 1, i, a, o, s, c, l = au, u, d = !1, f;
	function p(e) {
		return isNaN(e = +e) ? f : (e = .5 + ((e = +u(e)) - a) * (r * e < r * a ? s : c), l(d ? Math.max(0, Math.min(1, e)) : e));
	}
	p.domain = function(l) {
		return arguments.length ? ([e, t, n] = l, i = u(e = +e), a = u(t = +t), o = u(n = +n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p) : [
			e,
			t,
			n
		];
	}, p.clamp = function(e) {
		return arguments.length ? (d = !!e, p) : d;
	}, p.interpolator = function(e) {
		return arguments.length ? (l = e, p) : l;
	};
	function m(e) {
		return function(t) {
			var n, r, i;
			return arguments.length ? ([n, r, i] = t, l = eu(e, [
				n,
				r,
				i
			]), p) : [
				l(0),
				l(.5),
				l(1)
			];
		};
	}
	return p.range = m(jl), p.rangeRound = m(Ml), p.unknown = function(e) {
		return arguments.length ? (f = e, p) : f;
	}, function(l) {
		return u = l, i = l(e), a = l(t), o = l(n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p;
	};
}
function gd() {
	var e = Ru(hd()(au));
	return e.copy = function() {
		return md(e, gd());
	}, Bs.apply(e, arguments);
}
function _d() {
	var e = Xu(hd()).domain([
		.1,
		1,
		10
	]);
	return e.copy = function() {
		return md(e, _d()).base(e.base());
	}, Bs.apply(e, arguments);
}
function vd() {
	var e = ed(hd());
	return e.copy = function() {
		return md(e, vd()).constant(e.constant());
	}, Bs.apply(e, arguments);
}
function yd() {
	var e = ad(hd());
	return e.copy = function() {
		return md(e, yd()).exponent(e.exponent());
	}, Bs.apply(e, arguments);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/color.js
var bd = (e, t, n) => {
	let r = N(e.cloneNode(!0));
	return r.attr("id", n).insert("rect", ":first-child").attr("width", r.attr("width")).attr("height", r.attr("height")).style("fill", t), {
		id: n,
		node: r.node()
	};
};
function xd(e) {
	let t = B.colorPattern, { body: n } = o, r = n[t];
	if (!r) {
		let i = e.classed(za.colorPattern, !0).style("background-image");
		e.classed(za.colorPattern, !1), i.indexOf(";") > -1 && (r = i.replace(/url[^#]*|["'()]|(\s|%20)/g, "").split(";").map((e) => e.trim().replace(/[\"'\s]/g, "")).filter(Boolean), n[t] = r);
	}
	return r;
}
var Sd = [
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
], Cd = {
	generateColor() {
		let e = this, { $el: t, config: n } = e, r = [], i = n.area_linearGradient || n.bar_linearGradient || n.point_radialGradient, a = w(n.color_pattern) ? n.color_pattern : Hs(xd(t.chart) || Sd).range(), o = a;
		if (f(n.color_tiles)) {
			let t = n.color_tiles.bind(e.api)(), r = a.map((n, r) => {
				let i = n.replace(/[#\(\)\s,]/g, ""), a = `${e.state.datetimeId}-pattern-${i}-${r}`;
				return bd(t[r % t.length], n, a);
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
		E(o) ? o = ({ id: e }) => e in a ? a[e] : n.color(e) : p(o) ? o = () => a : f(a) && (o = o.bind(n.api)), i.selectAll(E(t) ? `.${Na.arc}${n.getTargetSelectorSuffix(t.id)}` : `.${Za.shape}-${t}`).style("fill", o);
	}
}, wd = 0, Td = 0, Ed = 0, Dd = 1e3, Od, kd, Ad = 0, jd = 0, Md = 0, Nd = typeof performance == "object" && performance.now ? performance : Date, Pd = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function Fd() {
	return jd ||= (Pd(Id), Nd.now() + Md);
}
function Id() {
	jd = 0;
}
function Ld() {
	this._call = this._time = this._next = null;
}
Ld.prototype = Rd.prototype = {
	constructor: Ld,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? Fd() : +n) + (t == null ? 0 : +t), !this._next && kd !== this && (kd ? kd._next = this : Od = this, kd = this), this._call = e, this._time = n, Ud();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, Ud());
	}
};
function Rd(e, t, n) {
	var r = new Ld();
	return r.restart(e, t, n), r;
}
function zd() {
	Fd(), ++wd;
	for (var e = Od, t; e;) (t = jd - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--wd;
}
function Bd() {
	jd = (Ad = Nd.now()) + Md, wd = Td = 0;
	try {
		zd();
	} finally {
		wd = 0, Hd(), jd = 0;
	}
}
function Vd() {
	var e = Nd.now(), t = e - Ad;
	t > Dd && (Md -= t, Ad = e);
}
function Hd() {
	for (var e, t = Od, n, r = Infinity; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Od = n);
	kd = e, Ud(r);
}
function Ud(e) {
	wd || (Td &&= clearTimeout(Td), e - jd > 24 ? (e < Infinity && (Td = setTimeout(Bd, e - Nd.now() - Md)), Ed &&= clearInterval(Ed)) : (Ed ||= (Ad = Nd.now(), setInterval(Vd, Dd)), wd = 1, Pd(Bd)));
}
//#endregion
//#region node_modules/d3-timer/src/timeout.js
function Wd(e, t, n) {
	var r = new Ld();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
//#endregion
//#region node_modules/d3-transition/src/transition/schedule.js
var Gd = _s("start", "end", "cancel", "interrupt"), Kd = [];
function qd(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	Zd(e, n, {
		name: t,
		index: r,
		group: i,
		on: Gd,
		tween: Kd,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: 0
	});
}
function Jd(e, t) {
	var n = Xd(e, t);
	if (n.state > 0) throw Error("too late; already scheduled");
	return n;
}
function Yd(e, t) {
	var n = Xd(e, t);
	if (n.state > 3) throw Error("too late; already running");
	return n;
}
function Xd(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function Zd(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = Rd(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay);
	}
	function o(a) {
		var l, u, d, f;
		if (n.state !== 1) return c();
		for (l in r) if (f = r[l], f.name === n.name) {
			if (f.state === 3) return Wd(o);
			f.state === 4 ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = 6, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete r[l]);
		}
		if (Wd(function() {
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
function Qd(e, t) {
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
function $d(e) {
	return this.each(function() {
		Qd(this, e);
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/tween.js
function ef(e, t) {
	var n, r;
	return function() {
		var i = Yd(this, e), a = i.tween;
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
function tf(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = Yd(this, e), o = a.tween;
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
function nf(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = Xd(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? ef : tf)(n, e, t));
}
function rf(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = Yd(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return Xd(e, r).value[t];
	};
}
//#endregion
//#region node_modules/d3-transition/src/transition/interpolate.js
function af(e, t) {
	var n;
	return (typeof t == "number" ? wl : t instanceof fc ? _l : (n = fc(t)) ? (t = n, _l) : Al)(e, t);
}
//#endregion
//#region node_modules/d3-transition/src/transition/attr.js
function of(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function sf(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function cf(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function lf(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function uf(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function df(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function ff(e, t) {
	var n = Ge(e), r = n === "transform" ? Vl : af;
	return this.attrTween(e, typeof t == "function" ? (n.local ? df : uf)(n, r, rf(this, "attr." + e, t)) : t == null ? (n.local ? sf : of)(n) : (n.local ? lf : cf)(n, r, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/attrTween.js
function pf(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function mf(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function hf(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && mf(e, i)), n;
	}
	return i._value = t, i;
}
function gf(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && pf(e, i)), n;
	}
	return i._value = t, i;
}
function _f(e, t) {
	var n = "attr." + e;
	if (arguments.length < 2) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != "function") throw Error();
	var r = Ge(e);
	return this.tween(n, (r.local ? hf : gf)(r, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/delay.js
function vf(e, t) {
	return function() {
		Jd(this, e).delay = +t.apply(this, arguments);
	};
}
function yf(e, t) {
	return t = +t, function() {
		Jd(this, e).delay = t;
	};
}
function bf(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? vf : yf)(t, e)) : Xd(this.node(), t).delay;
}
//#endregion
//#region node_modules/d3-transition/src/transition/duration.js
function xf(e, t) {
	return function() {
		Yd(this, e).duration = +t.apply(this, arguments);
	};
}
function Sf(e, t) {
	return t = +t, function() {
		Yd(this, e).duration = t;
	};
}
function Cf(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? xf : Sf)(t, e)) : Xd(this.node(), t).duration;
}
//#endregion
//#region node_modules/d3-transition/src/transition/ease.js
function wf(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		Yd(this, e).ease = t;
	};
}
function Tf(e) {
	var t = this._id;
	return arguments.length ? this.each(wf(t, e)) : Xd(this.node(), t).ease;
}
//#endregion
//#region node_modules/d3-transition/src/transition/easeVarying.js
function Ef(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		Yd(this, e).ease = n;
	};
}
function Df(e) {
	if (typeof e != "function") throw Error();
	return this.each(Ef(this._id, e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/filter.js
function Of(e) {
	typeof e != "function" && (e = rt(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new rp(r, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/merge.js
function kf(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new rp(o, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/on.js
function Af(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function jf(e, t, n) {
	var r, i, a = Af(t) ? Jd : Yd;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function Mf(e, t) {
	var n = this._id;
	return arguments.length < 2 ? Xd(this.node(), n).on.on(e) : this.each(jf(n, e, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/remove.js
function Nf(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function Pf() {
	return this.on("end.remove", Nf(this._id));
}
//#endregion
//#region node_modules/d3-transition/src/transition/select.js
function Ff(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = Xe(e));
	for (var r = this._groups, i = r.length, a = Array(i), o = 0; o < i; ++o) for (var s = r[o], c = s.length, l = a[o] = Array(c), u, d, f = 0; f < c; ++f) (u = s[f]) && (d = e.call(u, u.__data__, f, s)) && ("__data__" in u && (d.__data__ = u.__data__), l[f] = d, qd(l[f], t, n, f, l, Xd(u, n)));
	return new rp(a, this._parents, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selectAll.js
function If(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = et(e));
	for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s) for (var c = r[s], l = c.length, u, d = 0; d < l; ++d) if (u = c[d]) {
		for (var f = e.call(u, u.__data__, d, c), p, m = Xd(u, n), h = 0, g = f.length; h < g; ++h) (p = f[h]) && qd(p, t, n, h, f, m);
		a.push(f), o.push(u);
	}
	return new rp(a, o, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selection.js
var Lf = Hn.prototype.constructor;
function Rf() {
	return new Lf(this._groups, this._parents);
}
//#endregion
//#region node_modules/d3-transition/src/transition/style.js
function zf(e, t) {
	var n, r, i;
	return function() {
		var a = Jt(this, e), o = (this.style.removeProperty(e), Jt(this, e));
		return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o);
	};
}
function Bf(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function Vf(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = Jt(this, e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Hf(e, t, n) {
	var r, i, a;
	return function() {
		var o = Jt(this, e), s = n(this), c = s + "";
		return s ?? (c = s = (this.style.removeProperty(e), Jt(this, e))), o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s));
	};
}
function Uf(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = Yd(this, e), l = c.on, u = c.value[a] == null ? s ||= Bf(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function Wf(e, t, n) {
	var r = (e += "") == "transform" ? Bl : af;
	return t == null ? this.styleTween(e, zf(e, r)).on("end.style." + e, Bf(e)) : typeof t == "function" ? this.styleTween(e, Hf(e, r, rf(this, "style." + e, t))).each(Uf(this._id, e)) : this.styleTween(e, Vf(e, r, t), n).on("end.style." + e, null);
}
//#endregion
//#region node_modules/d3-transition/src/transition/styleTween.js
function Gf(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function Kf(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && Gf(e, a, n)), r;
	}
	return a._value = t, a;
}
function qf(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, Kf(e, t, n ?? ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/text.js
function Jf(e) {
	return function() {
		this.textContent = e;
	};
}
function Yf(e) {
	return function() {
		var t = e(this);
		this.textContent = t ?? "";
	};
}
function Xf(e) {
	return this.tween("text", typeof e == "function" ? Yf(rf(this, "text", e)) : Jf(e == null ? "" : e + ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/textTween.js
function Zf(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function Qf(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && Zf(r)), t;
	}
	return r._value = e, r;
}
function $f(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, Qf(e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/transition.js
function ep() {
	for (var e = this._name, t = this._id, n = ap(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = Xd(c, t);
		qd(c, e, n, l, o, {
			time: u.time + u.delay + u.duration,
			delay: 0,
			duration: u.duration,
			ease: u.ease
		});
	}
	return new rp(r, this._parents, e, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/end.js
function tp() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = Yd(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/index.js
var np = 0;
function rp(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function ip(e) {
	return Hn().transition(e);
}
function ap() {
	return ++np;
}
var op = Hn.prototype;
rp.prototype = ip.prototype = {
	constructor: rp,
	select: Ff,
	selectAll: If,
	selectChild: op.selectChild,
	selectChildren: op.selectChildren,
	filter: Of,
	merge: kf,
	selection: Rf,
	transition: ep,
	call: op.call,
	nodes: op.nodes,
	node: op.node,
	size: op.size,
	empty: op.empty,
	each: op.each,
	on: Mf,
	attr: ff,
	attrTween: _f,
	style: Wf,
	styleTween: qf,
	text: Xf,
	textTween: $f,
	remove: Pf,
	tween: nf,
	delay: bf,
	duration: Cf,
	ease: Tf,
	easeVarying: Df,
	end: tp,
	[Symbol.iterator]: op[Symbol.iterator]
};
//#endregion
//#region node_modules/d3-ease/src/cubic.js
function sp(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region node_modules/d3-transition/src/selection/transition.js
var cp = {
	time: null,
	delay: 0,
	duration: 250,
	ease: sp
};
function lp(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function up(e) {
	var t, n;
	e instanceof rp ? (t = e._id, e = e._name) : (t = ap(), (n = cp).time = Fd(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && qd(c, e, t, l, o, n || lp(c, t));
	return new rp(r, this._parents, e, t);
}
Hn.prototype.interrupt = $d, Hn.prototype.transition = up;
//#endregion
//#region node_modules/d3-brush/src/brush.js
var { abs: dp, max: fp, min: pp } = Math;
["w", "e"].map(mp), ["n", "s"].map(mp), [
	"n",
	"w",
	"e",
	"s",
	"nw",
	"ne",
	"sw",
	"se"
].map(mp);
function mp(e) {
	return { type: e };
}
function hp(e) {
	var t = e.__brush;
	return t ? t.dim.output(t.selection) : null;
}
//#endregion
//#region node_modules/billboard.js/dist-esm/module/util/brush.js
function gp(e) {
	let { event: t, $el: n } = e, r = n.subchart.main || n.main, i;
	return t && t.type === "brush" ? i = t.selection : r && (i = r.select(".bb-brush").node()) && (i = hp(i)), i;
}
function _p(e) {
	let t = gp(e);
	return !t || t[0] === t[1];
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/domain.js
function vp(e, t) {
	return t.map((t) => {
		let { values: n } = t, r = n[0], i = n[n.length - 1], a = r ? e.getXCacheKey?.(r.x) ?? r.x : "", o = i ? e.getXCacheKey?.(i.x) ?? i.x : "";
		return `${t.id}:${n.length}:${a}:${o}`;
	}).join("|");
}
function yp(e, t) {
	let n = e.data?.targets;
	if (!n) return !1;
	for (let e = 0; e < t.length; e++) {
		let r = t[e], i = n.find((e) => e.id === r.id);
		if (!i || i.values !== r.values) return !1;
	}
	return !0;
}
function bp(e, t) {
	w(t) && ((e.min === void 0 || t < e.min) && (e.min = t), (e.max === void 0 || t > e.max) && (e.max = t));
}
function xp(e, t) {
	for (let n = 0; n < t.length; n++) bp(e, t[n]);
}
function Sp(e, t) {
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
			]), Array.isArray(a) ? xp(n, a) : E(a) && "high" in a ? xp(n, Object.values(a)) : e.isBubbleZType?.(i) ? bp(n, r && e.getBubbleZData(a, "y")) : bp(n, a));
		}
	}
	return [n.min, n.max];
}
function Cp(e, t) {
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
var wp = {
	getYDomainMinMaxBoth(e) {
		let t = this, { axis: n, cache: r, config: i, state: a } = t, o = yp(t, e) ? `${B.domainMinMax}_y_${vp(t, e)}` : null, s = o && r.get(o);
		if (s && s.generation === a.dataGeneration) return s.value;
		let c = i.data_groups, l = t.mapToIds(e), u = ze(l), d;
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
			for (let e in s) p.push(je("min", s[e])), m.push(je("max", f[e]));
			d = [je("min", p), je("max", m)];
		} else d = Sp(t, e);
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
		let n = this, { cache: r, state: i } = n, a = n.config[`axis_x_${t}`], o = yp(n, e) ? `${B.domainMinMax}_x_${t}_${vp(n, e)}` : null, s = o && r.get(o), c = s?.generation === i.dataGeneration ? s.value : void 0;
		c === void 0 && (c = Cp(e, t), o && r.add(o, {
			generation: i.dataGeneration,
			value: c
		}));
		let l = E(a) ? a.value : a;
		return l = g(l) && n.axis?.isTimeSeries() ? Ie.bind(this)(l) : l, E(a) && a.fit && (t === "min" && l < c || t === "max" && l > c) && (l = void 0), g(l) ? l : c;
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
		if (n && (c.domain(i || Ae(a.getXDomain(e), !o.axis_x_inverted)), s.xDomain = c.domain(), l.domain(c.domain()), a.brush?.scale(l)), t) {
			let e = i || !a.brush || _p(a) ? s.xDomain : gp(a).map(l.invert);
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
		return e === "zoom" && (g(n.zoom_x_min) && (a = je("min", [a, n.zoom_x_min])), g(n.zoom_x_max) && (o = je("max", [o, n.zoom_x_max]))), [a, o];
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
function Tp(e, t, n) {
	let { config: r } = e, i = `axis_${t}_tick_format`;
	return (r[i] ? r[i] : e.defaultValueFormat).call(e.api, n);
}
var Ep = {
	yFormat(e) {
		return Tp(this, "y", e);
	},
	y2Format(e) {
		return Tp(this, "y2", e);
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
}, Dp = 10, Op = 750;
function kp(e) {
	let t = this, n = t.getDataById(e);
	return t.levelColor ? t.levelColor(n.values[0].value) : t.color(n);
}
function Ap(e, t = !0) {
	let { config: n } = this, r = n.data_names[e] ?? e;
	return t && f(n.legend_format) && (r = n.legend_format(r, e === r ? void 0 : e)), r;
}
function jp(e, t) {
	if (!t || t.empty()) return;
	let n = e.$el.legend?.selectAll(`.${R.legendItem}`);
	n && !n.empty() && (t = n);
	let r = [];
	t.each(function(e) {
		r.push({
			id: e,
			node: this
		});
	});
	let i = Be(r, (e) => e.id, (e) => e.node);
	e.cache.add(B.legendItemMap, i);
}
function Mp(e) {
	return e.changedTouches?.[0] || e.touches?.[0];
}
function Np(e, t, n) {
	let r = Mp(n);
	e.state.legendTouch = r ? {
		id: t,
		x: r.clientX,
		y: r.clientY,
		moved: !1
	} : null;
}
function Pp(e, t) {
	let n = e.state.legendTouch, r = n && Mp(t);
	r && (n.moved = n.moved || Math.abs(r.clientX - n.x) > Dp || Math.abs(r.clientY - n.y) > Dp);
}
function Fp(e, t, n) {
	Pp(e, n);
	let r = e.state.legendTouch;
	return e.state.legendTouch = null, !!r && r.id === t && !r.moved;
}
function Ip(e, t) {
	e.state.legendLastTouchClickId = t, e.state.legendLastTouchClickTime = Date.now();
}
function Lp(e, t) {
	let { state: n } = e, r = n.legendLastTouchClickId === t && Date.now() - (n.legendLastTouchClickTime || 0) < Op;
	return r && (n.legendLastTouchClickId = null, n.legendLastTouchClickTime = 0), r;
}
function Rp(e) {
	let t = e.config.interaction_inputType_touch?.preventDefault;
	return { passive: !(_(t) && t) && (!isNaN(t) && t || null) === null };
}
var zp = {
	initLegend() {
		let e = this, { config: t, $el: n } = e;
		if (e.legendItemTextBox = {}, e.state.legendHasRendered = !1, e.state.isCanvasMode) {
			t.legend_show ? e.updateHtmlLegend?.() : e.state.hiddenLegendIds = new Set(e.mapToIds(e.data.targets));
			return;
		}
		t.legend_show ? (t.legend_contents_bindto || (n.legend = e.$el.svg.append("g").classed(R.legend, !0).attr("transform", e.getTranslate("legend"))), e.updateLegend()) : e.state.hiddenLegendIds = new Set(e.mapToIds(e.data.targets));
	},
	updateLegend(e, t, n) {
		let r = this, { config: i, state: a, scale: o, $el: s } = r, c = t || {
			withTransform: !1,
			withTransitionForTransform: !1,
			withTransition: !1
		};
		c.withTransition = ye(c, "withTransition", !0), c.withTransitionForTransform = ye(c, "withTransitionForTransform", !0), i.legend_contents_bindto && i.legend_contents_template ? r.updateLegendTemplate() : a.hasTreemap || r.updateLegendElement(e || r.mapToIds(r.data.targets), c), s.legend?.selectAll(`.${R.legendItem}`).classed(R.legendItemHidden, function(e) {
			let t = !r.isTargetToShow(e);
			return t && (this.style.opacity = null), t;
		}), r.updateScales(!1, !o.zoom), r.updateSvgSize(), r.transformAll(c.withTransitionForTransform, n), a.legendHasRendered = !0;
	},
	updateLegendTemplate() {
		let e = this, { config: t, $el: n } = e, r = N(t.legend_contents_bindto), i = t.legend_contents_template;
		if (!r.empty()) {
			let t = e.mapToIds(e.data.targets), a = [], o = "";
			t.forEach((t) => {
				let n = f(i) ? _e(i.call(e.api, t, e.color(t), e.api.data(t)[0].values)) : Fe(i, {
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
			r && N(r).select("line").style("stroke", t);
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
		return e.classed(R.legendItemHidden) ? null : "0.3";
	},
	toggleFocusLegend(e, t) {
		let n = this, { $el: { legend: r }, $T: i } = n, a = n.mapToTargetIds(e);
		r && i(r.selectAll(`.${R.legendItem}`).filter((e) => a.indexOf(e) >= 0).classed(Ga.legendItemFocused, t)).style("opacity", function() {
			return t ? null : n.opacityForUnfocusedLegend.call(n, N(this));
		});
	},
	revertLegend() {
		let { $el: { legend: e }, $T: t } = this;
		e && t(e.selectAll(`.${R.legendItem}`).classed(Ga.legendItemFocused, !1)).style("opacity", null);
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
		let n = this, { cache: r, state: i } = n, a, o = B.legendItemTextBox;
		return e && (a = !i.redrawing && r.get(o) || {}, a[e] || (a[e] = n.getTextRect(t, R.legendItem), r.add(o, a)), a = a[e]), a;
	},
	setLegendItem(e) {
		let t = this, { $el: n, api: r, config: i, state: a } = t, o = a.inputType === "touch", s = t.hasType("gauge"), c = i.boost_useCssRule, l = i.legend_item_interaction, u = l.dblclick ? "dblclick" : "click", d = l || f(i.legend_item_onclick), p = o ? Rp(t) : void 0, m = function(e, n) {
			if (!M(i.legend_item_onclick, r, n, !a.hiddenTargetIds.has(n))) {
				let { altKey: t, type: i } = e, o = N(this);
				i === "dblclick" || t ? a.hiddenTargetIds.size && !o.classed(R.legendItemHidden) ? r.show() : (r.hide(), r.show(n)) : (r.toggle(n), o.classed(Ga.legendItemFocused, !1));
			}
			o && (t.hideTooltip(), t.hideGridFocus?.(!0));
		};
		e.attr("class", function(e) {
			let n = N(this);
			return (!n.empty() && n.attr("class") || "") + t.generateClass(R.legendItem, e);
		}).style("visibility", (e) => t.isLegendToShow(e) ? null : "hidden"), i.interaction_enabled && (c && [
			[`.${R.legendItem}`, "cursor:pointer"],
			[`.${R.legendItem} text`, "pointer-events:none"],
			[`.${R.legendItemPoint} text`, "pointer-events:none"],
			[`.${R.legendItemTile}`, "pointer-events:none"],
			[`.${R.legendItemEvent}`, "fill-opacity:0"]
		].forEach((e) => {
			let [r, i] = e;
			t.setCssRule(!1, r, [i])(n.legend);
		}), e.on(u, d ? function(e, n) {
			o && e.type === "click" && Lp(t, n) || m.call(this, e, n);
		} : null), o && u === "click" && d && e.on("touchstart", function(e, n) {
			Np(t, n, e);
		}, p).on("touchmove", (e) => {
			Pp(t, e);
		}, p).on("touchend", function(e, n) {
			Fp(t, n, e) && (Ip(t, n), m.call(this, e, n));
		}, p), !o && e.on("mouseout", l || f(i.legend_item_onout) ? function(e, n) {
			M(i.legend_item_onout, r, n, !a.hiddenTargetIds.has(n)) || (N(this).classed(Ga.legendItemFocused, !1), s && t.undoMarkOverlapped(t, `.${Ha.gaugeValue}`), t.api.revert());
		} : null).on("mouseover", l || f(i.legend_item_onover) ? function(e, n) {
			M(i.legend_item_onover, r, n, !a.hiddenTargetIds.has(n)) || (N(this).classed(Ga.legendItemFocused, !0), s && t.markOverlapped(n, t, `.${Ha.gaugeValue}`), !a.transiting && t.isTargetToShow(n) && r.focus(n));
		} : null), !e.empty() && e.on("click mouseout mouseover") && e.style("cursor", t.getStylePropValue("pointer"))), jp(t, e);
	},
	getLegendItemById(e) {
		let t = this, n = t.cache.get(B.legendItemMap);
		return n && n instanceof Map ? n.get(e) || null : (t.$el.legend?.selectAll(`.${R.legendItem}`).filter((t) => t === e))?.node() || null;
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
		}, f, p, m, h = e.filter((e) => !g(r.data_names[e]) || r.data_names[e] !== null), _ = t.withTransition, v = i.isLegendRight || i.isLegendInset, y = Ap.bind(n), b = n.getUpdateLegendPositions(h, u, d, v);
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
		n.generateLegendItem(h, l, b, x, v, y), m = a.select(`.${R.legendBackground} rect`), i.isLegendInset && u.max.width > 0 && m.size() === 0 && (m = a.insert("g", `.${R.legendItem}`).attr("class", R.legendBackground).append("rect")), r.legend_tooltip && a.selectAll("title").data(h).text((e) => y(e, !1)), o(a.selectAll("text").data(h).text((e) => y(e)).each(function(e, t) {
			b(this, e, t);
		}), _).attr("x", x.xText).attr("y", x.yText), o(a.selectAll(`rect.${R.legendItemEvent}`).data(h), _).attr("width", (e) => d.widths[e]).attr("height", (e) => d.heights[e]).attr("x", x.xRect).attr("y", x.yRect), n.updateLegendItemPos(h, _, x), m && o(m, _).attr("height", n.getLegendHeight() - 12).attr("width", u.max.width * (u.step + 1) + 10), i.legendItemWidth = u.max.width, i.legendItemHeight = u.max.height, i.legendStep = u.step;
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
		let s = this, { config: c, state: l, $el: { legend: u } } = s, d = c.legend_usePoint, f = c.legend_item_tile_r, p = c.legend_item_tile_type, m = p !== "circle", h = -200, g = u.selectAll(`.${R.legendItem}`).data(e).enter().append("g");
		if (s.setLegendItem(g), c.legend_tooltip && g.append("title").text((e) => e), g.append("text").text((e) => a(e)).each(function(e, t) {
			n(this, e, t);
		}).style("pointer-events", s.getStylePropValue("none")).attr("x", i ? r.xText : h).attr("y", i ? h : r.yText), g.append("rect").attr("class", R.legendItemEvent).style("fill-opacity", s.getStylePropValue("0")).attr("x", i ? r.xRect : h).attr("y", i ? h : r.yRect), d) {
			let e = [], t = s.getValidPointPattern();
			g.append((n) => {
				e.indexOf(n) === -1 && e.push(n);
				let r = t[e.indexOf(n) % t.length];
				return r === "rectangle" && (r = "rect"), o.createElementNS(We.svg, "hasValidPointType" in s && s.hasValidPointType(r) ? r : "use");
			}).attr("class", R.legendItemPoint).style("fill", kp.bind(s)).style("pointer-events", s.getStylePropValue("none")).attr("href", (e, t, n) => {
				let r = n[t].nodeName.toLowerCase(), i = s.getTargetSelectorSuffix(e);
				return r === "use" ? `#${l.datetimeId}-point${i}` : void 0;
			});
		} else g.append(m ? "line" : p).attr("class", R.legendItemTile).style("stroke", kp.bind(s)).style("pointer-events", s.getStylePropValue("none")).call((e) => {
			p === "circle" ? e.attr("r", f).style("fill", kp.bind(s)).attr("cx", i ? r.x2Tile : h).attr("cy", i ? h : r.yTile) : m && e.attr("stroke-width", t.height).attr("x1", i ? r.x1Tile : h).attr("y1", i ? h : r.yTile).attr("x2", i ? r.x2Tile : h).attr("y2", i ? h : r.yTile);
		});
	},
	updateLegendItemPos(e, t, n) {
		let r = this, { config: i, $el: { legend: a }, $T: o } = r, s = i.legend_usePoint, c = i.legend_item_tile_type, l = c !== "circle";
		if (s) {
			let r = a.selectAll(`.${R.legendItemPoint}`).data(e), s = i.legend_item_tile_type !== "circle", c = s ? i.legend_item_tile_width : i.legend_item_tile_r * 2, l = s ? i.legend_item_tile_height : i.legend_item_tile_r * 2, u = c * .75, d = l * .75, f = c / 8, p = l / 8;
			o(r, t).each(function() {
				let e = this.nodeName.toLowerCase(), t = "x", r = "y", i = null, a = null, o = null;
				e === "circle" ? (t = "cx", r = "cy", i = Math.min(u, d) / 2) : e === "rect" && (a = u, o = d);
				let s = N(this).attr("transform", null).attr("x", null).attr("y", null).attr("cx", null).attr("cy", null).attr("r", i).attr("width", a).attr("height", o);
				e === "use" ? s.attr("transform", (e) => `translate(${n.x1Tile(e)} ${n.yTile(e) - l / 2}) scale(${f} ${p})`) : s.attr(t, (e) => n.x1Tile(e) + (c - (a || 0)) / 2).attr(r, (e) => n.yTile(e) - (o || 0) / 2);
			});
		} else o(a.selectAll(`.${R.legendItemTile}`).data(e), t).style("stroke", kp.bind(r)).call((e) => {
			c === "circle" ? e.attr("cx", (e) => {
				let t = n.x2Tile(e);
				return t - (t - n.x1Tile(e)) / 2;
			}).attr("cy", n.yTile) : l && e.attr("x1", n.x1Tile).attr("y1", n.yTile).attr("x2", n.x2Tile).attr("y2", n.yTile);
		});
	}
}, Bp = {
	redraw(e = {}) {
		let t = this, { config: n, state: r, $el: i } = t, { main: a, treemap: o } = i;
		r.redrawing = !0, r.redrawGeneration++, (r.dirty.data || r.dirty.visibility || e.initializing) && r.dataGeneration++, (e.initializing || r.dirty.size || r.dirty.data || !r.rendered) && t.cache.remove([B.svgLeft]);
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
		d.Legend && n.legend_show ? (e.withTransition = !!f, !o && t.updateLegend(t.mapToIds(t.data.targets), e, h)) : d.Dimension && t.updateDimension(!0), n.data_empty_label_text && a.select(`text.${z.text}.${L.empty}`).attr("x", r.width / 2).attr("y", r.height / 2).text(n.data_empty_label_text).style("display", s.length ? "none" : null), t.redrawTitle?.(), r.hasAxis ? (t.axis.redrawAxis(s, d, h, l, u), t.hasGrid?.() && t.updateGrid(), n.regions.length && t.updateRegion?.(), [
			"bar",
			"candlestick",
			"line",
			"area"
		].forEach((e) => {
			let n = Se(e);
			(/^(line|area)$/.test(e) && t.hasTypeOf(n) || t.hasType(e)) && g && t[`update${n}`](d.TransitionForExit);
		}), i.text && a.selectAll(`.${Xa.selectedCircles}`).filter(t.isBarType.bind(t)).selectAll("circle").remove(), n.interaction_enabled && !l && d.EventRect && (t.redrawEventRect(), t.bindZoomEvent?.())) : (i.arcs && t.redrawArc(f, p, d.Transform), i.radar && t.redrawRadar(), i.polar && t.redrawPolar(), i.funnel && t.redrawFunnel(), o && t.updateTreemap(p)), !r.resizing && !o && (t.hasPointType() || r.hasRadar) ? g && t.updateCircle() : t.hasLegendDefsPoint?.() && t.data.targets.forEach(t.point("create", this)), t.hasDataLabel() && !t.hasArcType(null, ["radar"]) && g && t.updateText(), u && t.updateTypesElements(), t.generateRedrawList(s, l, f, d.Subchart, g), t.updateTooltipOnRedraw(), t.callPluginHook("$redraw", e, f);
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
		}), u = (n || l) && Mo(), d = a.getRedrawList(c, t, l, u), f = () => {
			l && l(), s.redrawing = !1, s._targetsToShow = null, s._cachedDrawShape = null, M(o.onrendered, a.api);
		};
		if (u && d.length) {
			let e = Ro();
			ip().duration(n).each(() => {
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
				let n = Se(t), a = e.type[t];
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
function Vp(e = "linear", t, n) {
	let r = {
		linear: zu,
		log: td,
		_log: Zu,
		time: fd,
		utc: pd
	}[e]();
	return r.type = e, /_?log/.test(e) && r.clamp(!0), r.range([t ?? 0, n ?? 1]);
}
var Hp = {
	getXScale(e, t, n, r) {
		let i = this, a = i.state.loading !== "append" && i.scale.zoom || Vp(i.axis.getAxisType("x"), e, t);
		return i.getCustomizedXScale(n ? a.domain(n) : a, r);
	},
	getYScale(e, t, n, r, i) {
		let a = this.axis.getAxisType(e);
		if (i && i.type === a) return i.range([t, n]), r && i.domain(r), i;
		let o = Vp(a, t, n);
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
			s.x = zu().rangeRound([e.left, c.width - e.right]), s.y = zu().rangeRound([e.top, c.height - e.bottom]);
		} else n.updateArc?.();
	},
	xx(e) {
		let { config: t, scale: { x: n, zoom: r } } = this, i = t.zoom_enabled && r ? r : n;
		return e ? i(d(e.x) ? e.x : e) : null;
	},
	xv(e) {
		let t = this, { axis: n, config: r, scale: { x: i, zoom: a } } = t, o = r.zoom_enabled && a ? a : i, s = t.getBaseValue(e);
		return n.isTimeSeries() ? s = Ie.call(t, s) : n.isCategorized() && p(s) && (s = r.axis_x_categories.indexOf(s)), o(s);
	},
	yv(e) {
		let t = this, { scale: { y: n, y2: r } } = t;
		return (e.axis && e.axis === "y2" ? r : n)(t.getBaseValue(e));
	},
	subxx(e) {
		return e ? this.scale.subX(e.x) : null;
	}
}, Up = {
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
		let t = `offset${Se(e)}`, n = this.$el.chart.node(), r = 0;
		for (; r < 30 && n && n.tagName !== "BODY";) {
			try {
				r = Co(n, !0)[e];
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
			let e = n.get(B.svgLeft);
			if (e !== null) return e;
		}
		let o = r.axis_rotated, s = o || !o && !r.axis_y_inner, c = o ? Fa.axisX : Fa.axisY, l = a.main.select(`.${c}`).node(), u = i && r[`axis_${o ? "x" : "y"}_label`], d = i && (p(u) || p(u.text) || /^inner-/.test(u?.position)) ? a.main.select(`.${c}-label`) : null, f = d && !d.empty() ? d.node() : null, m = !e, h = {
			label: f ? Co(f, m) : null,
			leftAxis: l && s ? Co(l, m) : null,
			chart: Co(a.chart.node(), m)
		}, g = h.label?.left ?? 0, _ = h.leftAxis ?? { right: 0 }, v = h.chart.left + g, y = t.hasArcType(), b = _.right - v - (y ? 0 : t.getCurrentPaddingByDirection("left", e)), x = b > 0 ? b : 0;
		return n.add(B.svgLeft, x), x;
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
			let t = s.select(`.${Qa.brush} .overlay`), r = {
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
			let e = t.hasType("gauge"), i = n.legend_show && r.isLegendRight, a = (r.hasRadar && t.cache.get(B.radarTextWidth)) ?? 0;
			r.arcWidth = r.width - (i ? u.width + 10 : 0) - a, r.arcHeight = r.height - (i && !e ? 0 : 10), n.arc_rangeText_values?.length && (e ? (r.arcWidth -= 25, r.arcHeight -= 10, r.margin.left += 10) : (r.arcHeight -= 20, r.margin.top += 10)), e && !n.gauge_fullCircle && (r.arcHeight += r.height - t.getPaddingBottomForGauge()), t.updateRadius?.();
		}
		r.isLegendRight && o && (r.margin3.left = r.arcWidth / 2 + r.radiusExpanded * 1.1);
	}
}, Wp = {
	setCssRule(e, t, n, r) {
		let i = this, { config: a, state: { cssRule: o, style: s } } = i;
		return a.boost_useCssRule ? (a) => {
			a.each((a) => {
				let c = r && r?.call(i, a), l = `${e ? `.${Za.shapes + i.getTargetSelectorSuffix(a.id)}` : ""}${t}`;
				t in o && s.sheet.deleteRule(o[l]), i.state.cssRule[l] = To(s, l, n.filter(Boolean).map((e) => p(c) && e.indexOf(":") === -1 ? `${e}: ${c}` : e || ""));
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
function Gp(e) {
	let t = "middle";
	return e > 0 && e <= 170 ? t = "end" : e > 190 && e <= 360 && (t = "start"), t;
}
function Kp(e, t, n, r, i) {
	let a = this, { value: o } = e, s = a.isCandlestickType(e), c = m(o) && o < 0 || s && !a.getCandlestickData(e)?._isUp, { x: l, y: u } = t;
	return r ? n === "start" ? (l += c ? 0 : 8, u += 4) : n === "middle" ? (l += 8, u -= 8) : n === "end" && (c && (l -= 8), u += 4) : (n === "start" ? (l += 4, c && (u += 16)) : n === "middle" ? u -= 8 : n === "end" && (l -= 4, c && (u += 16)), i && (u += c ? -17 : s ? 13 : 7)), {
		x: l,
		y: u
	};
}
function qp(e, t) {
	let n = this.config.data_labels_position, { id: r, index: i, value: a } = e;
	return (f(n) ? n.bind(this.api)(t, a, r, i, this.$el.text) : (r in n ? n[r] : n)[t]) ?? 0;
}
function Jp(e, t, n) {
	let { config: r, $T: i } = this, a = r.axis_rotated, { border: { padding: o = "3 5", radius: s = 10, stroke: c = "#000", strokeWidth: l = 1, fill: u = "none" } } = r.data_labels, d = Le(o), f = r.data_labels.border !== !0, p = wo(e), m = N(e.previousElementSibling);
	(m.empty() || m.node()?.tagName !== "rect" || !m.attr("class")?.includes(n)) && (m = N(e.parentNode).insert("rect", () => e).attr("class", `${z.textBorderRect} ${n}`).attr("width", p.width + (f ? d.left + d.right : 0)).attr("height", p.height + (f ? d.top + d.bottom : 0)), f && m.style("fill", u).style("stroke", c).style("stroke-width", `${l}px`).attr("rx", s).attr("ry", s)), i(m).attr("x", t.x - (f ? d.left : 0) - (a ? 0 : p.width / 2)).attr("y", t.y - (f ? d.top : 0) - p.height / 4 * 3.2);
}
function Yp(e = 0, t) {
	let { config: n } = this;
	return e >= (n[`${t}_label_threshold`] || 0);
}
function Xp() {
	let e = this, { $el: { text: t }, config: n } = e;
	(e.state.arcWidth ? e.getArcLabelConfig("image") : n.data_labels.image) && t.filter(function() {
		let e = this.previousElementSibling;
		return !e || e.tagName !== "image" || !e.classList.contains(z.textLabelImage);
	}).each(function(t) {
		let n = Zp.call(e, t);
		if (!n) return;
		let { url: r, width: i, height: a, pos: o } = n;
		r && N(this.parentNode)?.insert("image", `${this.getAttribute("class")?.replace(/(?:^(.)|\s)/g, ".$1") ?? "text"}`).style("opacity", "0").attr("href", (e) => Fe(r, { ID: "id" in e ? e.id : e.data.id })).attr("class", z.textLabelImage).style("pointer-events", "none").attr("width", i).attr("height", a).attr("transform", o ? `translate(${o.x ?? 0} ${o.y ?? 0})` : null);
	});
}
function Zp(e) {
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
function Qp(e, t, n) {
	let r = this, { config: i, state: { arcWidth: a, hasTreemap: o } } = r, s = i.axis_rotated, c = N(e.previousElementSibling), l = (e) => {
		let t = e.style.opacity !== "0" && e.style.fillOpacity !== "0";
		return (a ? e.textContent : t) && this.previousElementSibling?.tagName !== "image";
	};
	if (!c.empty() && c.node()?.tagName === "image") {
		let i = n || Co(e), a = c.attr("width") / 2, u = c.attr("height") / 2, d = t.x - a, f = t.y - u - i.height / 2;
		s ? t.x += a : (o && (d = -a, f = -(u * 2 + i.height)), r.hasType("pie") || r.hasType("polar") || (t.y += u)), r.$T(c).style("opacity", l(e) ? null : "0").attr("x", d).attr("y", f);
	}
}
function $p(e) {
	return Be(e, (e) => e, (e) => wo(e, !0));
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/text.js
var em = {
	opacityForText(e) {
		let t = this;
		return t.isBarType(e) && !Yp.call(t, Math.abs(t.getRatio("bar", e)), "bar") ? "0" : t.hasDataLabel() ? null : "0";
	},
	initText() {
		let { $el: e } = this;
		e.main.select(`.${L.chart}`).append("g").attr("class", z.chartTexts).style("pointer-events", e.funnel || e.treemap ? "none" : null);
	},
	updateTargetsForText(e) {
		let t = this, n = t.getChartClass("Text"), r = t.getClass("texts", "id"), i = t.classFocus.bind(t);
		t.$el.main.select(`.${z.chartTexts}`).selectAll(`.${z.chartText}`).data(t.filterNullish(e)).attr("class", (e) => `${n(e)}${i(e)}`.trim()).enter().append("g").style("opacity", "0").attr("class", n).call(t.setCssRule(!0, ` .${z.text}`, ["fill", "pointer-events:none"], t.updateTextColor)).append("g").attr("class", r);
	},
	updateText() {
		let e = this, { $el: t, $T: n, config: r, axis: i } = e, a = e.getClass("text", "index"), o = r.data_labels.centered, s = t.main.selectAll(`.${z.texts}`).selectAll(`.${z.text}`).data(e.labelishData.bind(e));
		n(s.exit()).style("fill-opacity", "0").remove(), t.text = s.enter().append("text").merge(s).attr("class", a).attr("text-anchor", (t) => {
			let n = r[`axis_${i?.getId(t.id)}_inverted`] ? t.value > 0 : t.value < 0;
			if (e.isCandlestickType(t)) n = !e.getCandlestickData(t)?._isUp;
			else if (e.isTreemapType(t)) return o ? "middle" : "start";
			return r.axis_rotated ? n ? "end" : "start" : "middle";
		}).style("fill", e.getStylePropValue(e.updateTextColor)).style("fill-opacity", "0").each(function(t, n, r) {
			let i = N(this), { value: a } = t;
			if (e.isBubbleZType(t)) a = e.getBubbleZData(a, "z");
			else if (e.isCandlestickType(t)) {
				let n = e.getCandlestickData(t);
				n && (a = n.close);
			}
			a = e.isTreemapType(t) ? e.treemapDataLabelFormat(t)(i) : e.dataLabelFormat(t.id)(a, t.id, t.index, r), m(a) ? this.textContent = a : bo(i, a, void 0, !0);
		}), Xp.call(e);
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
		let i = this, { $T: a, axis: o, config: s, state: { hasTreemap: c } } = i, l = Ne(!0), u = s.axis_rotated, d = s.data_labels.rotate, f = Gp(d), p = d ? `rotate(${d})` : "", m = i.$el.text.style("fill", i.getStylePropValue(i.updateTextColor)).attr("filter", (e) => i.updateTextBGColor.bind(i)(e, s.data_labels_backgroundColors)).style("fill-opacity", n ? 0 : i.opacityForText.bind(i)), h = /* @__PURE__ */ new Map(), g = [];
		return m.each(function(e) {
			let t = this;
			h.set(t, { rect: Co(t) }), s.data_labels.centered && (i.isBarType(e) || i.isTreemapType(e)) && g.push(t);
		}), g.length > 0 && $p(g).forEach((e, t) => {
			let n = h.get(t);
			n && (n.bbox = e);
		}), m.each(function(n, m) {
			let g = h.get(this), _ = a(c && this.childElementCount ? this.parentNode : this, !!(r && (this.getAttribute("x") || this.getAttribute("transform"))), l), v = s[`axis_${o?.getId(n.id)}_inverted`], y = {
				x: e.call(this, n, m, g),
				y: t.call(this, n, m, g)
			};
			d && (y = Kp.bind(i)(n, y, f, u, v), _.attr("text-anchor", f)), Qp.call(i, this, y, g?.rect), this.childElementCount || d ? _.attr("transform", `translate(${y.x} ${y.y}) ${p}`) : _.attr("x", y.x).attr("y", y.y), s.data_labels.border && Jp.call(i, _.node(), y, `${z.textBorderRect}-${m}`);
		}), !0;
	},
	getTextRect(e, t) {
		let n = this, r, i, a;
		Array.isArray(e) ? r = `${B.textRect}-${e.join("_")}` : (i = e.node?.() ?? e, /text/i.test(i.tagName) || (i = i.querySelector("text")), a = i.textContent, r = `${B.textRect}-${a.replace(/\W/g, "_")}`);
		let o = n.cache.get(r) || [];
		return o.length === 0 && ((n.$el.svg || n.$el.chart.select("svg")).selectAll(`.${L.dummy}`).data(a ? [a] : e).enter().append("text").style("visibility", "hidden").style("font", i ? N(i).style("font") : null).classed(t || L.dummy, !0).text((e) => e).each(function(e, t) {
			o[t] = Co(this);
		}).remove(), n.cache.add(r, o)), o.length > 1 ? o : o[0];
	},
	generateXYForText(e, t) {
		let n = this, { state: { hasRadar: r, hasFunnel: i, hasTreemap: a } } = n, o = Object.keys(e), s = {}, c = t ? n.getXForText : n.getYForText;
		return i && o.push("funnel"), r && o.push("radar"), a && o.push("treemap"), o.forEach((t) => {
			s[t] = n[`generateGet${Se(t)}Points`](e[t], !1);
		}), function(e, t, r) {
			let i = n.isAreaType(e) && "area" || n.isBarType(e) && "bar" || n.isCandlestickType(e) && "candlestick" || n.isFunnelType(e) && "funnel" || n.isRadarType(e) && "radar" || n.isTreemapType(e) && "treemap" || "line";
			return c.call(n, s[i](e, t), e, this, r);
		};
	},
	getCenteredTextPos(e, t, n, r, i) {
		let a = this, { config: o } = a, s = o.axis_rotated, c = a.isBarType(e), l = a.isTreemapType(e);
		if (o.data_labels.centered && (c || l)) {
			let o = i?.bbox || wo(n);
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
		else return ko(n, "x");
		else if (c) l += a.data_labels.centered ? 0 : 5;
		else if (o) {
			let n = a[`axis_${i.axis.getId(t.id)}_inverted`], r = i.isBarType(t) ? 4 : 6, o = t.value;
			l = e[2][1], l += r * ((n ? o > 0 : o < 0) ? -1 : 1);
		} else l = i.hasType("bar") ? (e[2][0] + e[0][0]) / 2 : l;
		return (o || c || s) && (l += i.getCenteredTextPos(t, e, n, "x", r)), l + qp.call(this, t, "x");
	},
	getYForText(e, t, n, r) {
		let i = this, { axis: a, config: o, state: s } = i, c = o.axis_rotated, l = o[`axis_${a?.getId(t.id)}_inverted`], u = i.isBarType(t), d = i.isFunnelType(t), f = i.isTreemapType(t), p = o.point_r, h = r?.rect || Co(n), { value: g } = t, _ = 3, v;
		if (i.isCandlestickType(t)) g = i.getCandlestickData(t), c ? (v = e[0][0], v += (e[1][0] - v) / 2 + _) : (v = g && g._isUp ? e[2][2] - _ : e[2][1] + _ * 4, l && (v += 15 * (g._isUp ? 1 : -1)));
		else if (d) if (e) v = (e[2]?.[1] ?? e[0][1]) + h.height / 2 - 3;
		else return ko(n, "y");
		else if (f) v = e[0][1] + (o.data_labels.centered ? 0 : h.height + 5);
		else if (c) v = (e[0][0] + e[2][0] + h.height * .6) / 2;
		else if (v = e[2][1], m(p) && p > 5 && (i.isLineType(t) || i.isScatterType(t)) && (_ += o.point_r / 2.3), g < 0 || g === 0 && !s.hasPositiveValue && s.hasNegativeValue) v += l ? u ? -3 : -5 : h.height + (u ? -_ : _);
		else {
			let e = -_ * 2;
			u ? e = -_ : i.isBubbleType(t) && (e = _), l && (e = u ? 10 : 15), v += e;
		}
		return (!c || f) && (v += i.getCenteredTextPos(t, e, n, "y", r)), v + qp.call(this, t, "y");
	},
	markOverlapped(e, t, n) {
		let r = t.$el.arcs.selectAll(n), i = r.filter((t) => t.data.id !== e), a = r.filter((t) => t.data.id === e), o = Oo(a.node()), s = (e, t) => Math.sqrt(e * e + t * t);
		a.node() && i.each(function() {
			let e = Oo(this), t = N(this), n = s(o.e, o.f) > s(e.e, e.f) ? a : t, r = Math.ceil(Math.abs(o.e - e.e)) < Math.ceil(n.node().getComputedTextLength()), i = Math.ceil(Math.abs(o.f - e.f)) < parseInt(a.style("font-size"), 10);
			t.classed(z.TextOverlapping, r && i);
		});
	},
	undoMarkOverlapped(e, t) {
		e.$el.arcs.selectAll(t).each(function() {
			Kn([this, this.previousSibling]).classed(z.TextOverlapping, !1);
		});
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/title.js
function tm(e = "left", t) {
	let n = m(t);
	return e.includes("center") ? n ? t / 2 : "middle" : e.includes("right") ? n ? t : "end" : n ? 0 : "start";
}
function nm(e) {
	let { config: t, $el: n } = e, r = e.canvasTheme?.style?.title?.font || e.canvasTheme?.style?.label?.font || "14px sans-serif", i = n.chart?.node?.(), a = i?.ownerDocument;
	if (i && a && t.title_text) {
		let e = a.createElementNS("http://www.w3.org/2000/svg", "svg"), n = a.createElementNS("http://www.w3.org/2000/svg", "text");
		e.style.cssText = "position:absolute;visibility:hidden;left:-10000px;top:-10000px;", n.setAttribute("class", z.title), n.style.font = r, n.textContent = String(t.title_text), e.appendChild(n), i.appendChild(e);
		let o = Co(n).height;
		if (e.remove(), o) return o;
	}
	return t.title_text ? parseFloat(r) || 14 : 0;
}
var rm = {
	initTitle() {
		let { config: e, $el: t } = this;
		e.title_text && (t.title = t.svg.append("g"), bo(t.title.append("text").style("text-anchor", tm(e.title_position)).attr("class", z.title), e.title_text, [.3, 1.5]));
	},
	redrawTitle() {
		let e = this, { config: t, state: { current: n }, $el: { title: r } } = e;
		if (r) {
			let i = tm(t.title_position, n.width), a = (t.title_padding.top || 0) + e.getTextRect(e.$el.title, z.title).height;
			r.attr("transform", `translate(${i}, ${a})`);
		}
	},
	getCanvasTitleHeight() {
		return nm(this);
	},
	getTitlePadding() {
		let e = this, { $el: { title: t }, config: n, state: r } = e, i = n.title_padding.top || 0, a = n.title_padding.bottom || 0;
		if (r.isCanvasMode && n.title_text) return i + e.getCanvasTitleHeight() + a;
		if (!t?.node()) return i + a;
		let o = t.node(), s = ko(o, "y");
		if (s) {
			let e = wo(o);
			return s + e.y + e.height + a;
		}
		return i + e.getTextRect(t, z.title).height + a;
	}
}, im = /(\r?\n|\t)/g, am = /{{(.*)}}/, om = {
	initTooltip() {
		let e = this, { config: t, $el: n } = e;
		n.tooltip = N(t.tooltip_contents.bindto), n.tooltip.empty() && (n.tooltip = n.chart.append("div").attr("class", $a.tooltipContainer).style("position", "absolute").style("pointer-events", "none").style("display", "none")), e.bindTooltipResizePos();
	},
	initShowTooltip() {
		let e = this, { config: t, $el: n, state: { hasAxis: r, hasRadar: i } } = e;
		if (t.tooltip_init_show) {
			let a = !(r || i);
			e.axis?.isTimeSeries() && p(t.tooltip_init_x) && (t.tooltip_init_x = Ie.call(e, t.tooltip_init_x)), e.api.tooltip.show({ data: { [a ? "index" : "x"]: t.tooltip_init_x } });
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
					O = Fe(T[0], {
						CLASS_TOOLTIP: $a.tooltip,
						TITLE: d(e) ? C ? e : `<tr><th colspan="2">${e}</th></tr>` : ""
					});
				}
				if (!k.ratio && c.arcs && (A = ["arc", i.$el.arcs.select(`path.${Na.arc}-${k.id}`).data()[0]], k.ratio = i.getRatio(...A)), A = [
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
						CLASS_TOOLTIP_NAME: $a.tooltipName + i.getTargetSelectorSuffix(k.id),
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
					O += Fe(T[1], n);
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
			</tbody></table>`).replace(im, "").split(am);
	},
	setTooltipPosition(e, t) {
		let n = this, { config: r, scale: i, state: a, $el: { eventRect: o, tooltip: s, svg: c } } = n, { bindto: l } = r.tooltip_contents, u = r.axis_rotated, d = s?.datum();
		if (!l && d) {
			let l = e ?? d.data, [f, p] = So(a.event, t ?? o?.node()), m = {
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
			let { width: h = 0, height: g = 0 } = d, _ = r.tooltip_position?.bind(n.api)(l, h, g, o?.node(), m) ?? (c && Ao(c) ? n.getTooltipPositionViewBox.bind(n)(h, g, m) : n.getTooltipPosition.bind(n)(h, g, m));
			["top", "left"].forEach((e) => {
				let t = _[e];
				s.style(e, `${t}px`), e === "left" && !d.xPosInPercent && (d.xPosInPercent = t / a.current.width * 100);
			});
		}
	},
	getTooltipPositionViewBox(e, t, n) {
		let r = this, { $el: { eventRect: i, svg: a }, config: o, state: s } = r, c = o.axis_rotated, l = r.hasArcType() || s.hasFunnel || s.hasTreemap, u = (l ? a : i)?.node() ?? s.event.target, { x: d, y: f } = n;
		s.hasAxis && (d = c ? d : n.xAxis, f = c ? n.xAxis : f);
		let p = Do(u, d, f, !1), m = Co(u), h = Do(u, 20, 0, !1).x, g = p.y, _ = p.x + e / 2 + h;
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
					let r = [e, t].every(Number.isFinite) && o.elementFromPoint(e, t), i = r && N(r).datum();
					if (i) {
						let e = n.hasArcType() ? n.convertToArcData(n.updateAngle(i)) : i?.data;
						d && (r = a.node()), e && n.showTooltip([e], r);
					} else n.api.tooltip.hide();
				}, r.transition_duration);
			}
		}
	}
}, sm = {
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
		let n = this, { $el: { main: r }, $T: i } = n, a = t?.axisX ? t.axisX : i(r.select(`.${Fa.axisX}`), e), o = t?.axisY ? t.axisY : i(r.select(`.${Fa.axisY}`), e), s = t?.axisY2 ? t.axisY2 : i(r.select(`.${Fa.axisY2}`), e);
		i(r, e).attr("transform", n.getTranslate("main")), a.attr("transform", n.getTranslate("x")), o.attr("transform", n.getTranslate("y")), s.attr("transform", n.getTranslate("y2")), r.select(`.${Na.chartArcs}`).attr("transform", n.getTranslate("arc"));
	},
	transformAll(e, t) {
		let n = this, { config: r, state: { hasAxis: i, hasFunnel: a, hasTreemap: o, isCanvasMode: s }, $el: c } = n;
		s || (!a && !o && n.transformMain(e, t), i && r.subchart_show && n.transformContext(e, t), c.legend && n.transformLegend(e));
	}
}, cm = /* @__PURE__ */ new Set([
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
]), lm = {
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
		return cm.has(e);
	}
};
//#endregion
//#region node_modules/d3-shape/src/constant.js
function um(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-shape/src/math.js
var dm = Math.cos, fm = Math.min, pm = Math.sin, V = Math.sqrt, mm = Math.PI;
mm / 2;
var hm = 2 * mm, gm = Math.PI, _m = 2 * gm, vm = 1e-6, ym = _m - vm;
function bm(e) {
	this._ += e[0];
	for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function xm(e) {
	let t = Math.floor(e);
	if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
	if (t > 15) return bm;
	let n = 10 ** t;
	return function(e) {
		this._ += e[0];
		for (let t = 1, r = e.length; t < r; ++t) this._ += Math.round(arguments[t] * n) / n + e[t];
	};
}
var Sm = class {
	constructor(e) {
		this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = e == null ? bm : xm(e);
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
		else if (d > vm) if (!(Math.abs(u * s - c * l) > vm) || !i) this._append`L${this._x1 = e},${this._y1 = t}`;
		else {
			let f = n - a, p = r - o, m = s * s + c * c, h = f * f + p * p, g = Math.sqrt(m), _ = Math.sqrt(d), v = i * Math.tan((gm - Math.acos((m + d - h) / (2 * g * _))) / 2), y = v / _, b = v / g;
			Math.abs(y - 1) > vm && this._append`L${e + y * l},${t + y * u}`, this._append`A${i},${i},0,0,${+(u * f > l * p)},${this._x1 = e + b * s},${this._y1 = t + b * c}`;
		}
	}
	arc(e, t, n, r, i, a) {
		if (e = +e, t = +t, n = +n, a = !!a, n < 0) throw Error(`negative radius: ${n}`);
		let o = n * Math.cos(r), s = n * Math.sin(r), c = e + o, l = t + s, u = 1 ^ a, d = a ? r - i : i - r;
		this._x1 === null ? this._append`M${c},${l}` : (Math.abs(this._x1 - c) > vm || Math.abs(this._y1 - l) > vm) && this._append`L${c},${l}`, n && (d < 0 && (d = d % _m + _m), d > ym ? this._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${this._x1 = c},${this._y1 = l}` : d > vm && this._append`A${n},${n},0,${+(d >= gm)},${u},${this._x1 = e + n * Math.cos(i)},${this._y1 = t + n * Math.sin(i)}`);
	}
	rect(e, t, n, r) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}h${n = +n}v${+r}h${-n}Z`;
	}
	toString() {
		return this._;
	}
};
Sm.prototype;
function Cm(e = 3) {
	return new Sm(+e);
}
//#endregion
//#region node_modules/d3-shape/src/path.js
function wm(e) {
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
	}, () => new Sm(t);
}
//#endregion
//#region node_modules/d3-shape/src/array.js
var Tm = Array.prototype.slice;
function Em(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/linear.js
function Dm(e) {
	this._context = e;
}
Dm.prototype = {
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
function Om(e) {
	return new Dm(e);
}
//#endregion
//#region node_modules/d3-shape/src/point.js
function km(e) {
	return e[0];
}
function Am(e) {
	return e[1];
}
//#endregion
//#region node_modules/d3-shape/src/line.js
function jm(e, t) {
	var n = um(!0), r = null, i = Om, a = null, o = wm(s);
	e = typeof e == "function" ? e : e === void 0 ? km : um(e), t = typeof t == "function" ? t : t === void 0 ? Am : um(t);
	function s(s) {
		var c, l = (s = Em(s)).length, u, d = !1, f;
		for (r ?? (a = i(f = o())), c = 0; c <= l; ++c) !(c < l && n(u = s[c], c, s)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(u, c, s), +t(u, c, s));
		if (f) return a = null, f + "" || null;
	}
	return s.x = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : um(+t), s) : e;
	}, s.y = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : um(+e), s) : t;
	}, s.defined = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : um(!!e), s) : n;
	}, s.curve = function(e) {
		return arguments.length ? (i = e, r != null && (a = i(r)), s) : i;
	}, s.context = function(e) {
		return arguments.length ? (e == null ? r = a = null : a = i(r = e), s) : r;
	}, s;
}
//#endregion
//#region node_modules/d3-shape/src/curve/bump.js
var Mm = class {
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
function Nm(e) {
	return new Mm(e, !0);
}
function Pm(e) {
	return new Mm(e, !1);
}
//#endregion
//#region node_modules/d3-shape/src/link.js
function Fm(e) {
	return e.source;
}
function Im(e) {
	return e.target;
}
function Lm(e) {
	let t = Fm, n = Im, r = km, i = Am, a = null, o = null, s = wm(c);
	function c() {
		let c, l = Tm.call(arguments), u = t.apply(this, l), d = n.apply(this, l);
		if (a ?? (o = e(c = s())), o.lineStart(), l[0] = u, o.point(+r.apply(this, l), +i.apply(this, l)), l[0] = d, o.point(+r.apply(this, l), +i.apply(this, l)), o.lineEnd(), c) return o = null, c + "" || null;
	}
	return c.source = function(e) {
		return arguments.length ? (t = e, c) : t;
	}, c.target = function(e) {
		return arguments.length ? (n = e, c) : n;
	}, c.x = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : um(+e), c) : r;
	}, c.y = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : um(+e), c) : i;
	}, c.context = function(t) {
		return arguments.length ? (t == null ? a = o = null : o = e(a = t), c) : a;
	}, c;
}
function Rm() {
	return Lm(Nm);
}
//#endregion
//#region node_modules/d3-shape/src/symbol/asterisk.js
var zm = V(3), Bm = { draw(e, t) {
	let n = V(t + fm(t / 28, .75)) * .59436, r = n / 2, i = r * zm;
	e.moveTo(0, n), e.lineTo(0, -n), e.moveTo(-i, -r), e.lineTo(i, r), e.moveTo(-i, r), e.lineTo(i, -r);
} }, Vm = { draw(e, t) {
	let n = V(t / mm);
	e.moveTo(n, 0), e.arc(0, 0, n, 0, hm);
} }, Hm = { draw(e, t) {
	let n = V(t / 5) / 2;
	e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
} }, Um = V(1 / 3), Wm = Um * 2, Gm = { draw(e, t) {
	let n = V(t / Wm), r = n * Um;
	e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
} }, Km = { draw(e, t) {
	let n = V(t) * .62625;
	e.moveTo(0, -n), e.lineTo(n, 0), e.lineTo(0, n), e.lineTo(-n, 0), e.closePath();
} }, qm = { draw(e, t) {
	let n = V(t - fm(t / 7, 2)) * .87559;
	e.moveTo(-n, 0), e.lineTo(n, 0), e.moveTo(0, n), e.lineTo(0, -n);
} }, Jm = { draw(e, t) {
	let n = V(t), r = -n / 2;
	e.rect(r, r, n, n);
} }, Ym = { draw(e, t) {
	let n = V(t) * .4431;
	e.moveTo(n, n), e.lineTo(n, -n), e.lineTo(-n, -n), e.lineTo(-n, n), e.closePath();
} }, Xm = .8908130915292852, Zm = pm(mm / 10) / pm(7 * mm / 10), Qm = pm(hm / 10) * Zm, $m = -dm(hm / 10) * Zm, eh = { draw(e, t) {
	let n = V(t * Xm), r = Qm * n, i = $m * n;
	e.moveTo(0, -n), e.lineTo(r, i);
	for (let t = 1; t < 5; ++t) {
		let a = hm * t / 5, o = dm(a), s = pm(a);
		e.lineTo(s * n, -o * n), e.lineTo(o * r - s * i, s * r + o * i);
	}
	e.closePath();
} }, th = V(3), nh = { draw(e, t) {
	let n = -V(t / (th * 3));
	e.moveTo(0, n * 2), e.lineTo(-th * n, -n), e.lineTo(th * n, -n), e.closePath();
} }, rh = V(3), ih = { draw(e, t) {
	let n = V(t) * .6824, r = n / 2, i = n * rh / 2;
	e.moveTo(0, -n), e.lineTo(i, r), e.lineTo(-i, r), e.closePath();
} }, ah = -.5, oh = V(3) / 2, sh = 1 / V(12), ch = (sh / 2 + 1) * 3, lh = { draw(e, t) {
	let n = V(t / ch), r = n / 2, i = n * sh, a = r, o = n * sh + n, s = -a, c = o;
	e.moveTo(r, i), e.lineTo(a, o), e.lineTo(s, c), e.lineTo(ah * r - oh * i, oh * r + ah * i), e.lineTo(ah * a - oh * o, oh * a + ah * o), e.lineTo(ah * s - oh * c, oh * s + ah * c), e.lineTo(ah * r + oh * i, ah * i - oh * r), e.lineTo(ah * a + oh * o, ah * o - oh * a), e.lineTo(ah * s + oh * c, ah * c - oh * s), e.closePath();
} }, uh = { draw(e, t) {
	let n = V(t - fm(t / 6, 1.7)) * .6189;
	e.moveTo(-n, -n), e.lineTo(n, n), e.moveTo(-n, n), e.lineTo(n, -n);
} }, dh = [
	Vm,
	Hm,
	Gm,
	Jm,
	eh,
	nh,
	lh
], fh = [
	Vm,
	qm,
	uh,
	ih,
	Bm,
	Ym,
	Km
];
//#endregion
//#region node_modules/d3-shape/src/noop.js
function ph() {}
//#endregion
//#region node_modules/d3-shape/src/curve/basis.js
function mh(e, t, n) {
	e._context.bezierCurveTo((2 * e._x0 + e._x1) / 3, (2 * e._y0 + e._y1) / 3, (e._x0 + 2 * e._x1) / 3, (e._y0 + 2 * e._y1) / 3, (e._x0 + 4 * e._x1 + t) / 6, (e._y0 + 4 * e._y1 + n) / 6);
}
function hh(e) {
	this._context = e;
}
hh.prototype = {
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
			case 3: mh(this, this._x1, this._y1);
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
			default: mh(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function gh(e) {
	return new hh(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/basisClosed.js
function _h(e) {
	this._context = e;
}
_h.prototype = {
	areaStart: ph,
	areaEnd: ph,
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
			default: mh(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function vh(e) {
	return new _h(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/basisOpen.js
function yh(e) {
	this._context = e;
}
yh.prototype = {
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
			default: mh(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function bh(e) {
	return new yh(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/bundle.js
function xh(e, t) {
	this._basis = new hh(e), this._beta = t;
}
xh.prototype = {
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
var Sh = (function e(t) {
	function n(e) {
		return t === 1 ? new hh(e) : new xh(e, t);
	}
	return n.beta = function(t) {
		return e(+t);
	}, n;
})(.85);
//#endregion
//#region node_modules/d3-shape/src/curve/cardinal.js
function Ch(e, t, n) {
	e._context.bezierCurveTo(e._x1 + e._k * (e._x2 - e._x0), e._y1 + e._k * (e._y2 - e._y0), e._x2 + e._k * (e._x1 - t), e._y2 + e._k * (e._y1 - n), e._x2, e._y2);
}
function wh(e, t) {
	this._context = e, this._k = (1 - t) / 6;
}
wh.prototype = {
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
			case 3: Ch(this, this._x1, this._y1);
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
			default: Ch(this, e, t);
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var Th = (function e(t) {
	function n(e) {
		return new wh(e, t);
	}
	return n.tension = function(t) {
		return e(+t);
	}, n;
})(0);
//#endregion
//#region node_modules/d3-shape/src/curve/cardinalClosed.js
function Eh(e, t) {
	this._context = e, this._k = (1 - t) / 6;
}
Eh.prototype = {
	areaStart: ph,
	areaEnd: ph,
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
			default: Ch(this, e, t);
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var Dh = (function e(t) {
	function n(e) {
		return new Eh(e, t);
	}
	return n.tension = function(t) {
		return e(+t);
	}, n;
})(0);
//#endregion
//#region node_modules/d3-shape/src/curve/cardinalOpen.js
function Oh(e, t) {
	this._context = e, this._k = (1 - t) / 6;
}
Oh.prototype = {
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
			default: Ch(this, e, t);
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var kh = (function e(t) {
	function n(e) {
		return new Oh(e, t);
	}
	return n.tension = function(t) {
		return e(+t);
	}, n;
})(0);
//#endregion
//#region node_modules/d3-shape/src/curve/catmullRom.js
function Ah(e, t, n) {
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
function jh(e, t) {
	this._context = e, this._alpha = t;
}
jh.prototype = {
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
			default: Ah(this, e, t);
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var Mh = (function e(t) {
	function n(e) {
		return t ? new jh(e, t) : new wh(e, 0);
	}
	return n.alpha = function(t) {
		return e(+t);
	}, n;
})(.5);
//#endregion
//#region node_modules/d3-shape/src/curve/catmullRomClosed.js
function Nh(e, t) {
	this._context = e, this._alpha = t;
}
Nh.prototype = {
	areaStart: ph,
	areaEnd: ph,
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
			default: Ah(this, e, t);
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var Ph = (function e(t) {
	function n(e) {
		return t ? new Nh(e, t) : new Eh(e, 0);
	}
	return n.alpha = function(t) {
		return e(+t);
	}, n;
})(.5);
//#endregion
//#region node_modules/d3-shape/src/curve/catmullRomOpen.js
function Fh(e, t) {
	this._context = e, this._alpha = t;
}
Fh.prototype = {
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
			default: Ah(this, e, t);
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var Ih = (function e(t) {
	function n(e) {
		return t ? new Fh(e, t) : new Oh(e, 0);
	}
	return n.alpha = function(t) {
		return e(+t);
	}, n;
})(.5);
//#endregion
//#region node_modules/d3-shape/src/curve/linearClosed.js
function Lh(e) {
	this._context = e;
}
Lh.prototype = {
	areaStart: ph,
	areaEnd: ph,
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
function Rh(e) {
	return new Lh(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/monotone.js
function zh(e) {
	return e < 0 ? -1 : 1;
}
function Bh(e, t, n) {
	var r = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (r || i < 0 && -0), o = (n - e._y1) / (i || r < 0 && -0), s = (a * i + o * r) / (r + i);
	return (zh(a) + zh(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(s)) || 0;
}
function Vh(e, t) {
	var n = e._x1 - e._x0;
	return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Hh(e, t, n) {
	var r = e._x0, i = e._y0, a = e._x1, o = e._y1, s = (a - r) / 3;
	e._context.bezierCurveTo(r + s, i + s * t, a - s, o - s * n, a, o);
}
function Uh(e) {
	this._context = e;
}
Uh.prototype = {
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
			case 3: Hh(this, this._t0, Vh(this, this._t0));
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
					this._point = 3, Hh(this, Vh(this, n = Bh(this, e, t)), n);
					break;
				default: Hh(this, this._t0, n = Bh(this, e, t));
			}
			this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
		}
	}
};
function Wh(e) {
	this._context = new Gh(e);
}
(Wh.prototype = Object.create(Uh.prototype)).point = function(e, t) {
	Uh.prototype.point.call(this, t, e);
};
function Gh(e) {
	this._context = e;
}
Gh.prototype = {
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
function Kh(e) {
	return new Uh(e);
}
function qh(e) {
	return new Wh(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/natural.js
function Jh(e) {
	this._context = e;
}
Jh.prototype = {
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
		else for (var r = Yh(e), i = Yh(t), a = 0, o = 1; o < n; ++a, ++o) this._context.bezierCurveTo(r[0][a], i[0][a], r[1][a], i[1][a], e[o], t[o]);
		(this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
	},
	point: function(e, t) {
		this._x.push(+e), this._y.push(+t);
	}
};
function Yh(e) {
	var t, n = e.length - 1, r, i = Array(n), a = Array(n), o = Array(n);
	for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
	for (i[n - 1] = 2, a[n - 1] = 7, o[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t) r = i[t] / a[t - 1], a[t] -= r, o[t] -= r * o[t - 1];
	for (i[n - 1] = o[n - 1] / a[n - 1], t = n - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
	for (a[n - 1] = (e[n] + i[n - 1]) / 2, t = 0; t < n - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
	return [i, a];
}
function Xh(e) {
	return new Jh(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/step.js
function Zh(e, t) {
	this._context = e, this._t = t;
}
Zh.prototype = {
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
function Qh(e) {
	return new Zh(e, .5);
}
function $h(e) {
	return new Zh(e, 0);
}
function eg(e) {
	return new Zh(e, 1);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/shape/shape.js
var tg = {
	basis: gh,
	"basis-closed": vh,
	"basis-open": bh,
	bundle: Sh,
	cardinal: Th,
	"cardinal-closed": Dh,
	"cardinal-open": kh,
	"catmull-rom": Mh,
	"catmull-rom-closed": Ph,
	"catmull-rom-open": Ih,
	"monotone-x": Kh,
	"monotone-y": qh,
	natural: Xh,
	"linear-closed": Rh,
	linear: Om,
	step: Qh,
	"step-after": eg,
	"step-before": $h
};
function ng(e, t) {
	return e.isLineType(t) || e.isScatterType?.(t) || e.isBubbleType?.(t);
}
function rg(e) {
	return (t) => ng(e, t);
}
function ig(e, t) {
	return e.isCandlestickType?.(t) ? e.getCandlestickData?.(t)?.close : e.getBaseValue(t);
}
function ag(e) {
	let t = this, n;
	if (ng(t, e)) {
		let e = rg(t);
		n = t.generateGetLinePoints(t.getShapeIndices(e), !1, e);
	} else t.isBarType(e) ? n = t.generateGetBarPoints(t.getShapeIndices(t.isBarType)) : t.isCandlestickType?.(e) && (n = t.generateGetCandlestickPoints?.(t.getShapeIndices(t.isCandlestickType)));
	return n;
}
function og(e, t, n) {
	return this.config[t] ? this.getGradienColortUrl(e.id) : n(e);
}
function sg(e, t) {
	let n = this, { $el: r } = n, { type: i, elKey: a, containerClass: o, itemClass: s, initFn: c, withFocus: l = !0, withStyles: u = !0 } = t;
	r[a] || c.call(n);
	let d = n.getChartClass(i), f = l ? n.classFocus.bind(n) : () => "", p = r.main.select(`.${o}`).selectAll(`.${s}`).data(n.filterNullish(e)).attr("class", (e) => d(e) + f(e)).enter().append("g").attr("class", d);
	return u && p.style("opacity", "0").style("pointer-events", n.getStylePropValue("none")), p;
}
var cg = {
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
			let n = Se(t);
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
		return i && De(Object.keys(r).map((e) => r[e])).forEach((e) => {
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
		let t = this, n = t.orderTargets(t.filterTargetsToShow(t.data.targets.filter(e, t))), r = t.state.dataGeneration, i = n.map((e) => e.id).join("_"), a = `${B.shapeOffset}_${i}`, o = t.cache.get(a);
		if (o?.generation === r) return o;
		let s = t.isStackNormalized(), c = n.map((e) => {
			let n = e.values, r = {};
			t.isStepType(e) && (n = t.convertValuesToStep(n));
			let i = n.reduce((e, n) => {
				let i = Number(n.x), a = ig(t, n);
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
			let { id: l, value: u, x: d } = e, f = ig(r, e), p = r.getIndices(t, e), h = r.getYScaleById(l, n);
			if (r.isBarRangeType(e)) return h(u[0]);
			let g = Number(d), _ = h(o === "zero" ? 0 : r.getShapeYMin(l)), v = _, y = s?.get(l) ?? i.filter((e) => e.id !== l && p[e.id] === p[l]);
			for (let e of y) {
				let { id: t, rowValueMapByXValue: n, rowValues: i, values: s } = e;
				if (a[t] < a[l]) {
					let e = s[g], t = i[c];
					(!t || Number(t.x) !== g) && (t = n[g]);
					let a = t && ig(r, t);
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
		return n.isGrouped(r) && (i = ag.bind(n)(e)), i ? i(e, t)[0][1] : n.getYScaleById(r)(n.getBaseValue(e));
	},
	circleX(e) {
		return this.xx(e);
	},
	updateCircleY(e = !1) {
		let t = this, n = rg(t), r = t.generateGetLinePoints(t.getShapeIndices(n), e, n);
		return (n, i) => {
			let a = n.id;
			return t.isGrouped(a) && ng(t, n) ? r(n, i)[0][1] : t.getYScaleById(a, e)(t.getBaseValue(n));
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
		let r = this, { config: i, org: a, scale: o, state: s } = r, c = r.getMaxDataCount(), l = e === "bar" && i.data_groups?.length, u = `${e}_width`, { k: d } = r.getZoomTransform?.() ?? { k: 1 }, p = [i.axis_x_min ?? a.xDomain[0], i.axis_x_max ?? a.xDomain[1]].map((e) => r.axis.isTimeSeries() ? Ie.call(r, e) : Number(e)), h = t.tickInterval(c);
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
		return o = o && !o.empty() ? o.filter((e) => !n || e.id === n).filter((e) => !d(t) || e.index === t) : (n ? i.main.selectAll(`.${no[`${e}s`]}${r.getTargetSelectorSuffix(n)}`) : i.main).selectAll(`.${no[e]}${a}`), o;
	},
	isWithinShape(e, t) {
		let n = this, r = N(e), i;
		return n.isTargetToShow(t.id) ? n.hasValidPointType?.(e.nodeName) ? i = n.isStepType(t) ? n.isWithinStep(e, n.getYScaleById(t.id)(n.getBaseValue(t))) : n.isWithinCircle(e, n.isBubbleType(t) ? n.pointSelectR(t) * 1.5 : 0) : e.nodeName === "path" && (i = !r.classed(no.bar) || n.isWithinBar(e)) : i = !1, i;
	},
	getInterpolate(e) {
		return tg[this.getInterpolateType(e)];
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
		let t = So(this.state.event, e), [n, r, i] = xo(e), a = Math.min(n.x, r.x), o = Math.min(n.y, r.y), s = this.config.bar_sensitivity, c = Math.abs(i.x - r.x), l = Math.abs(n.y - r.y), u = a - s, d = a + c + s, f = o + l + s, p = o - s;
		return u < t[0] && t[0] < d && p < t[1] && t[1] < f;
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/ChartInternal.js
function lg(e) {
	return e.hasArcType() ? "arc charts" : e.hasType("funnel") ? "funnel chart" : null;
}
function ug(e) {
	let { config: t } = e, n = t.render_mode === "canvas" ? lg(e) : null;
	n && (a.console?.warn?.(`[billboard.js] render.mode='canvas' is ignored for ${n}; falling back to SVG.`), t.render_mode = "svg");
}
var dg = class {
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
		t.api = e, t.config = new fo(), t.cache = new ho();
		let n = new mo();
		t.$el = n.getStore("element"), t.state = n.getStore("state"), t.$T = t.$T.bind(t);
	}
	$T(e, t, n) {
		let { config: r, state: i } = this, a = r.transition_duration, o = r.subchart_show, s = e;
		return s &&= ("tagName" in s && (s = N(s)), (t !== !1 && a || t) && (!i.zooming || i.dragging) && !i.resizing && i.rendered && !o ? s.transition(n).duration(a) : s), s;
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
		He(e), ug(e);
		let s = e.hasArcType();
		if (n.hasRadar = !n.hasAxis && e.hasType("radar"), n.hasFunnel = !n.hasAxis && e.hasType("funnel"), n.hasTreemap = !n.hasAxis && e.hasType("treemap"), n.hasAxis = !s && !n.hasFunnel && !n.hasTreemap, n.datetimeId = `bb-${+/* @__PURE__ */ new Date() * Ne()}`, i) {
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
		E(a) && (c.element = a.element || "#chart", c.classname = a.classname || c.classname), r.chart = f(c.element.node) ? a.element : N(c.element || []), r.chart.empty() && (r.chart = N(o.body.appendChild(o.createElement("div")))), r.chart.html("").classed(c.classname, !0).classed(n.datetimeId, i).style("position", "relative"), e.initParams(), e.initToRender();
	}
	initToRender(e) {
		let t = this, { config: n, state: r, $el: { chart: i } } = t, o = () => jo(i, {
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
			e.initClip(), n.extraLineClasses = e.generateExtraLineClass(), n.dataTime = t.data_xLocaltime ? ka : ja, n.axisTime = t.axis_x_localtime ? Oa : Aa;
			let r = t.zoom_enabled && t.zoom_type === "drag";
			n.defaultAxisTime = (t) => {
				let { x: i, zoom: a } = e.scale, o = r ? a : a && i.orgDomain().toString() !== a.domain().toString(), s = t.getMilliseconds() && ".%L" || t.getSeconds() && ".:%S" || t.getMinutes() && "%I:%M" || t.getHours() && "%I %p" || t.getDate() !== 1 && "%b %d" || o && t.getDate() === 1 && "%b'%y" || t.getMonth() && "%-m/%-d" || "%Y";
				return n.axisTime(s)(t);
			};
		}
		let { legend_position: i, legend_inset_anchor: a, axis_rotated: o } = t;
		r.isLegendRight = i === "right", r.isLegendInset = i === "inset", r.isLegendTop = a === "top-left" || a === "top-right", r.isLegendLeft = a === "top-left" || a === "bottom-left", r.rotatedPadding.top = e.getResettedPadding(r.rotatedPadding.top), r.rotatedPadding.right = o && !t.axis_x_show ? 0 : 30, r.inputType = No(t.interaction_inputType_mouse, t.interaction_inputType_touch);
	}
	initWithData(e) {
		let t = this, { config: n, scale: r, state: i, $el: a, org: o } = t, { hasAxis: s, hasFunnel: c, hasTreemap: l } = i, u = n.interaction_enabled, d = t.hasType("polar"), p = n.data_labels_backgroundColors;
		if (s && (t.axis = t.getAxisInstance(), n.zoom_enabled && t.initZoom()), t.data.xs = {}, t.data.targets = t.convertDataToTargets(e), n.data_filter && (t.data.targets = t.data.targets.filter(n.data_filter.bind(t.api))), n.data_hide && t.addHiddenTargetIds(n.data_hide === !0 ? t.mapToIds(t.data.targets) : n.data_hide), n.legend_hide && t.addHiddenLegendIds(n.legend_hide === !0 ? t.mapToIds(t.data.targets) : n.legend_hide), t.updateSizes(), t.updateScales(!0), s) {
			let { x: e, y: i, y2: a, subX: s, subY: c, subY2: l } = r;
			e && (e.domain(Ae(t.getXDomain(t.data.targets), !n.axis_x_inverted)), s.domain(e.domain()), o.xDomain = e.domain()), i && (i.domain(t.getYDomain(t.data.targets, "y")), c.domain(i.domain())), a && (a.domain(t.getYDomain(t.data.targets, "y2")), l && l.domain(a.domain()));
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
		let h = a.svg.append("g").classed(L.main, !0).attr("transform", c || l ? null : t.getTranslate("main"));
		if (a.main = h, n.subchart_show && t.initSubchart(), n.tooltip_show && t.initTooltip(), n.title_text && t.initTitle(), !l && n.legend_show && t.initLegend(), n.data_empty_label_text && h.append("text").attr("class", `${z.text} ${L.empty}`).attr("text-anchor", "middle").attr("dominant-baseline", "middle"), s && (n.regions.length && t.initRegion?.(), !n.clipPath && t.axis.init()), h.append("g").classed(L.chart, !0).attr("clip-path", s ? i.clip.path : null), t.callPluginHook("$init"), t.initChartElements(), s && (u && t.initEventRect?.(), t.initGrid?.(), n.clipPath && t.axis?.init()), t.updateTargets(t.data.targets), t.updateDimension(), M(n.oninit, t.api), t.setBackground(), t.redraw({
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
				let t = Se(n);
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
				let n = Se(e);
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
		let t = this, { $el: { svg: n }, $T: r } = t, i = `.${L.target}`;
		e && (i += `, .${Ra.chartCircles} > .${Ra.circles}`), r(n.selectAll(i).filter((e) => t.isTargetToShow(e.id))).style("opacity", null);
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
		let e = this, { $el: t, config: n, state: r } = e, i = Lo(n.resize_timer), { resize_auto: o } = n, s = [];
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
Ee(dg.prototype, [
	us,
	ps,
	hs,
	Is,
	Rs,
	Cd,
	wp,
	Fs,
	Ep,
	zp,
	Bp,
	Hp,
	cg,
	Up,
	Wp,
	em,
	rm,
	om,
	sm,
	lm
]);
//#endregion
//#region node_modules/billboard.js/dist-esm/config/config.js
function fg(e) {
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
var pg = {
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
			e.callPluginHook("$willDestroy"), e.cache?.remove(["setOverOut", "callOverOutForTouch"]), e.charts.splice(e.charts.indexOf(this), 1), e.charts.length === 0 && Wo(), e.unbindAllEvents(), i?.select("*").interrupt(), t.canvasFlowFrame !== null && a.cancelAnimationFrame?.(t.canvasFlowFrame), t.canvasFlowFrame = null, t.canvasFlowFinish = null, t.pendingRaf !== null && a.cancelAnimationFrame?.(t.pendingRaf), t.pendingRaf = null, e.canvasRenderer?.destroy(), e.canvasEngine?.destroy(), e.resizeFunction?.clear(), e.resizeFunction?.resizeObserver?.disconnect(), e.resizeFunction && a.removeEventListener("resize", e.resizeFunction), n.classed("bb", !1).style("position", null), t.isCanvasMode && n.style("min-height", t.canvasInlineStyle.minHeight || null), n.selectChildren().remove(), r && r.parentNode.removeChild(r), Object.keys(this).forEach((t) => {
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
}, mg = { color(e) {
	return this.internal.color(e);
} }, hg = function(e) {
	let { targets: t } = this.internal.data;
	if (!h(e)) {
		let n = T(e) ? e : [e];
		return t.filter((e) => n.some((t) => t === e.id));
	}
	return t;
};
Ee(hg, {
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
var gg = { data: hg }, _g = {
	focus(e) {
		let t = this.internal, { state: n } = t, r = t.mapToTargetIds(e);
		if (n.isCanvasMode) {
			let e = r.filter(t.isTargetToShow, t), i = new Set(e), a = t.mapToTargetIds().filter((e) => !i.has(e) && t.isTargetToShow(e));
			t.revertLegend(), t.toggleFocusLegend(a, !1), t.toggleFocusLegend(e, !0), n.focusedTargetIds = i, n.defocusedTargetIds = new Set(a), t.renderCanvasFrame?.(void 0, null, !1);
			return;
		}
		let i = t.$el.svg.selectAll(t.selectorTargets(r.filter(t.isTargetToShow, t)));
		this.revert(), this.defocus(), i.classed(Ga.focused, !0).classed(Ga.defocused, !1), t.hasArcType() && !n.hasRadar && (t.expandArc(r), t.hasType("gauge") && t.markOverlapped(e, t, `.${Ha.gaugeValue}`)), t.toggleFocusLegend(r, !0), n.focusedTargetIds = new Set(r), r.forEach((e) => n.defocusedTargetIds.delete(e));
	},
	defocus(e) {
		let t = this.internal, { state: n } = t, r = t.mapToTargetIds(e);
		if (n.isCanvasMode) {
			let e = r.filter(t.isTargetToShow, t);
			t.toggleFocusLegend(e, !1), e.forEach((e) => n.focusedTargetIds.delete(e)), n.defocusedTargetIds = new Set(e), t.renderCanvasFrame?.(void 0, null, !1);
			return;
		}
		t.$el.svg.selectAll(t.selectorTargets(r.filter(t.isTargetToShow, t))).classed(Ga.focused, !1).classed(Ga.defocused, !0), t.hasArcType(null, ["polar"]) && (t.unexpandArc(r), t.hasType("gauge") && t.undoMarkOverlapped(t, `.${Ha.gaugeValue}`)), t.toggleFocusLegend(r, !1), r.forEach((e) => n.focusedTargetIds.delete(e)), n.defocusedTargetIds = new Set(r);
	},
	revert(e) {
		let t = this.internal, { config: n, state: r, $el: i } = t, a = t.mapToTargetIds(e), o = () => {
			n.legend_show && (t.showLegend(a.filter(t.isLegendToShow.bind(t))), i.legend.selectAll(t.selectorLegends(a)).filter(function() {
				return N(this).classed(Ga.legendItemFocused);
			}).classed(Ga.legendItemFocused, !1));
		};
		if (r.isCanvasMode) {
			let e = !!r.focusedTargetIds?.size || !!r.defocusedTargetIds?.size;
			o(), r.focusedTargetIds = /* @__PURE__ */ new Set(), r.defocusedTargetIds = /* @__PURE__ */ new Set(), e && t.renderCanvasFrame?.(void 0, null, !1);
			return;
		}
		i.svg.selectAll(t.selectorTargets(a)).classed(Ga.focused, !1).classed(Ga.defocused, !1), t.hasArcType(null, ["polar"]) && t.unexpandArc(a), o(), r.focusedTargetIds = /* @__PURE__ */ new Set(), r.defocusedTargetIds = /* @__PURE__ */ new Set();
	}
}, vg = { legend: {
	show: function(e) {
		let t = this.internal;
		t.showLegend(t.mapToTargetIds(e)), t.updateAndRedraw({ withLegend: !0 });
	},
	hide: function(e) {
		let t = this.internal;
		t.hideLegend(t.mapToTargetIds(e)), t.updateAndRedraw({ withLegend: !0 });
	}
} }, yg = {
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
			}), ms.call(t, e.done, e.resizeAfter);
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
			}), t.cache.remove(r), ms.call(t, n.done, n.resizeAfter));
		});
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/Chart/api/show.js
function bg(e, t, n, r = !1) {
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
var xg = {
	show(e, t = {}) {
		bg.call(this, !0, e, t);
	},
	hide(e, t = {}) {
		bg.call(this, !1, e, t);
	},
	toggle(e, t = {}) {
		let n = this.internal, r = {
			show: [],
			hide: []
		};
		n.mapToTargetIds(e).forEach((e) => r[n.isTargetToShow(e) ? "hide" : "show"].push(e)), r.show.length && r.hide.length ? (bg.call(this, !0, r.show, t, !0), bg.call(this, !1, r.hide, t)) : (r.show.length && this.show(r.show, t), r.hide.length && this.hide(r.hide, t));
	}
}, Sg = { tooltip: {
	show: function(e) {
		let t = this.internal, { $el: n, config: r, state: { eventReceiver: i, hasFunnel: a, hasTreemap: o, inputType: s } } = t, c, l;
		if (e.mouse && (l = e.mouse), e.data) {
			let { data: s } = e, u = t.getYScaleById(s.id)?.(s.value);
			if ((a || o) && s.id) {
				let e = t.selectorTarget(s.id, void 0, `.${Za.shape}`);
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
} }, Cg = class e {
	plugins = [];
	internal;
	constructor(t) {
		let n = new dg(this);
		this.internal = n, (function e(t, n, r) {
			Object.keys(t).forEach((i) => {
				let a = f(t[i]), o = n !== r, s = w(t[i]), c = s && Object.keys(t[i]).length > 0;
				n[i] = a && (!o && c || o) ? t[i].bind(r) : s && !a ? {} : t[i], c && e(t[i], n[i], r);
			});
		})(e.prototype, this, this), fg.call(n, t), n.beforeInit(), n.init();
	}
};
Ee(Cg.prototype, [
	pg,
	mg,
	gg,
	_g,
	vg,
	yg,
	xg,
	Sg
]);
//#endregion
//#region node_modules/billboard.js/dist-esm/core.js
var wg = Object.create(null), Tg = {
	version: "4.0.3",
	generate(e) {
		let t = new Cg(ke(Object.create(null), wg, e));
		return t.internal.charts = this.instance, this.instance.push(t), t;
	},
	defaults(e) {
		return E(e) && (wg = e), wg;
	},
	instance: [],
	plugin: {}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/shape/core/point.js
function Eg(e) {
	return x(e) && f(e.create) && f(e.update);
}
function Dg(e, t) {
	let n = this, r = (e, t) => {
		let n = e.attributes;
		for (let r = 0, i; i = n[r]; r++) i = i.name, t.setAttribute(i, e.getAttribute(i));
	}, i = new DOMParser().parseFromString(_e(e), "image/svg+xml").documentElement, a = o.createElementNS(We.svg, i.nodeName.toLowerCase());
	if (a.id = t, a.style.fill = "inherit", a.style.stroke = "inherit", r(i, a), i.childNodes?.length) {
		let e = N(a);
		"innerHTML" in a ? e.html(_e(i.innerHTML)) : we(i.childNodes).forEach((t) => {
			r(t, e.append(t.tagName).node());
		});
	}
	n.$el.defs.node().appendChild(a);
}
var Og = {
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
				let l = e.getTargetSelectorSuffix(c.id || c.data?.id || c), u = N(this);
				r.indexOf(l) < 0 && r.push(l);
				let d = i[r.indexOf(l) % i.length];
				if (e.hasValidPointType(d)) d = e[d];
				else if (!Eg(d || n.point_type)) {
					let n = e.getDefsPointId(l);
					if (t.defs.select(`#${n}`).size() < 1 && Dg.call(e, d, n), a === "create") return e.custom?.create.bind(o)(u, n, ...s);
					if (a === "update") return e.custom?.update.bind(o)(u, ...s);
				}
				return d[a]?.bind(o)(u, ...s);
			};
		};
	}
}, kg = {
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
function Ag(e, t, n) {
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
function jg(e, t) {
	let { config: n } = e;
	return {
		x: n[`axis_x_${t}`],
		y: n[`axis_y_${t}`],
		y2: n[`axis_y2_${t}`]
	};
}
var Mg = { axis: {
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
		return d(e) || e === !1 ? Ag(t, "min", e) : jg(t, "min");
	},
	max: function(e) {
		let t = this.internal;
		return d(e) || e === !1 ? Ag(t, "max", e) : jg(t, "max");
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
} }, Ng = { groups(e) {
	let t = this.internal, { config: n } = t;
	return h(e) ? n.data_groups : (n.data_groups = e, t.state.dirty.data = !0, t.redraw(), n.data_groups);
} }, Pg = {
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
function Fg(e) {
	return e;
}
//#endregion
//#region node_modules/d3-axis/src/axis.js
var Ig = 1, Lg = 2, Rg = 3, zg = 4, Bg = 1e-6;
function Vg(e) {
	return "translate(" + e + ",0)";
}
function Hg(e) {
	return "translate(0," + e + ")";
}
function Ug(e) {
	return (t) => +e(t);
}
function Wg(e, t) {
	return t = Math.max(0, e.bandwidth() - t * 2) / 2, e.round() && (t = Math.round(t)), (n) => +e(n) + t;
}
function Gg() {
	return !this.__axis;
}
function Kg(e, t) {
	var n = [], r = null, i = null, a = 6, o = 6, s = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : .5, l = e === Ig || e === zg ? -1 : 1, u = e === zg || e === Lg ? "x" : "y", d = e === Ig || e === Rg ? Vg : Hg;
	function f(f) {
		var p = r ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()), m = i ?? (t.tickFormat ? t.tickFormat.apply(t, n) : Fg), h = Math.max(a, 0) + s, g = t.range(), _ = +g[0] + c, v = +g[g.length - 1] + c, y = (t.bandwidth ? Wg : Ug)(t.copy(), c), b = f.selection ? f.selection() : f, x = b.selectAll(".domain").data([null]), S = b.selectAll(".tick").data(p, t).order(), C = S.exit(), w = S.enter().append("g").attr("class", "tick"), T = S.select("line"), E = S.select("text");
		x = x.merge(x.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), S = S.merge(w), T = T.merge(w.append("line").attr("stroke", "currentColor").attr(u + "2", l * a)), E = E.merge(w.append("text").attr("fill", "currentColor").attr(u, l * h).attr("dy", e === Ig ? "0em" : e === Rg ? "0.71em" : "0.32em")), f !== b && (x = x.transition(f), S = S.transition(f), T = T.transition(f), E = E.transition(f), C = C.transition(f).attr("opacity", Bg).attr("transform", function(e) {
			return isFinite(e = y(e)) ? d(e + c) : this.getAttribute("transform");
		}), w.attr("opacity", Bg).attr("transform", function(e) {
			var t = this.parentNode.__axis;
			return d((t && isFinite(t = t(e)) ? t : y(e)) + c);
		})), C.remove(), x.attr("d", e === zg || e === Lg ? o ? "M" + l * o + "," + _ + "H" + c + "V" + v + "H" + l * o : "M" + c + "," + _ + "V" + v : o ? "M" + _ + "," + l * o + "V" + c + "H" + v + "V" + l * o : "M" + _ + "," + c + "H" + v), S.attr("opacity", 1).attr("transform", function(e) {
			return d(y(e) + c);
		}), T.attr(u + "2", l * a), E.attr(u, l * h).text(m), b.filter(Gg).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === Lg ? "start" : e === zg ? "end" : "middle"), b.each(function() {
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
function qg(e) {
	return Kg(Ig, e);
}
function Jg(e) {
	return Kg(Lg, e);
}
function Yg(e) {
	return Kg(Rg, e);
}
function Xg(e) {
	return Kg(zg, e);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/Axis/AxisRendererHelper.js
var Zg = class {
	owner;
	config;
	scale;
	charSize = {};
	constructor(e) {
		let t = Vp(), { config: n, params: r } = e;
		this.owner = e, this.config = n, this.scale = t, (n.noTransition || !r.config.transition_duration) && (n.withoutTransition = !0), n.range = this.scaleExtent((r.orgXScale || t).range());
	}
	getSizeFor1Char(e, t, n = !0) {
		let r = {
			w: 5.5,
			h: 11.5
		};
		return this.charSize[e] && n ? this.charSize[e] : (!t.empty() && t.text("0").call((e) => {
			try {
				let { width: t, height: n } = wo(e.node(), !0);
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
				let t = Vp("_log").domain([r > 0 ? r : 1, i]).range(e.range());
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
}, Qg = class {
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
		t.tickLength = Math.max(t.innerTickSize, 0) + t.tickPadding, this.config = t, this.params = e, this.helper = new Zg(this);
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
			let e = N(this), x = this.__chart__ || a, S = r.copyScale();
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
						k = e, f(w) && (O = w.bind(t.params.owner.api)(e.node(), y), this.classList.contains(L.dummy) && (this.sizeFor1Char = O)), (!O || O.w === 0 || O.h === 0) && (O = t.helper.getSizeFor1Char(o, e, !!w));
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
		return e.length ? (t.tickArguments = we(e), this) : t.tickArguments;
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
function $g(e) {
	let t = [e[0], e[e.length - 1]], n = 0, r = null;
	for (let t of e) {
		let e = t.textContent?.length ?? 0;
		e > n && (n = e, r = t);
	}
	r && !t.includes(r) && t.push(r);
	let i = e[Math.floor(e.length / 2)];
	return t.includes(i) || t.push(i), t;
}
var e_ = 50, t_ = Symbol("tickWidthFallback");
function n_(e) {
	let t = e.select("line").node(), n = t?.ownerDocument?.defaultView?.getComputedStyle ? parseFloat(t.ownerDocument.defaultView.getComputedStyle(t).strokeWidth) : parseFloat(t?.getAttribute?.("stroke-width"));
	return Number.isFinite(n) && n > 0 ? n : 1;
}
function r_(e, t, n) {
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
function i_(e, t) {
	if (e.length <= e_) return e;
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
function a_(e) {
	return f(e) ? h_(e) : !Array.isArray(e) || e.length <= e_ ? e : {
		length: e.length,
		first: e[0],
		middle: e[Math.floor(e.length / 2)],
		last: e[e.length - 1]
	};
}
function o_(e) {
	return e[t_];
}
function s_(e, t) {
	m(t) ? Object.defineProperty(e, t_, {
		configurable: !0,
		value: t,
		writable: !0
	}) : delete e[t_];
}
function c_(e) {
	e.length = 0, s_(e);
}
function l_(e, t, n) {
	c_(e), e.length = t, s_(e, n);
}
function u_(e) {
	let t = [];
	return t.length = e.length, Object.keys(e).forEach((n) => {
		let r = +n;
		t[r] = e[r];
	}), s_(t, o_(e)), t;
}
function d_(e, t) {
	c_(e), e.length = t.length, Object.keys(t).forEach((n) => {
		let r = +n;
		e[r] = t[r];
	}), s_(e, o_(t));
}
function f_(e, t, n) {
	let r = e[t];
	if (m(r)) return r;
	let i = Number(r);
	return Number.isFinite(i) ? i : n;
}
var p_ = /* @__PURE__ */ new WeakMap(), m_ = 0;
function h_(e) {
	if (!e || !/^(function|object)$/.test(typeof e)) return `${typeof e}:${String(e)}`;
	let t = p_.get(e);
	return t || (t = ++m_, p_.set(e, t)), `${typeof e}:${t}`;
}
function g_(e) {
	return e instanceof Date ? `date:${+e}` : Array.isArray(e) ? `[${e.map((e) => g_(e)).join(",")}]` : e && typeof e == "object" ? `{${Object.keys(e).sort().map((t) => `${t}:${g_(e[t])}`).join(",")}}` : typeof e == "function" ? h_(e) : `${typeof e}:${String(e)}`;
}
function __(e) {
	return e instanceof Date ? /* @__PURE__ */ new Date(+e) : Array.isArray(e) ? e.map((e) => __(e)) : e;
}
function v_(e) {
	return {
		width: e.width,
		height: e.height,
		ticks: e.ticks && u_(e.ticks),
		clipPath: e.clipPath,
		domain: __(e.domain)
	};
}
function y_(e, t) {
	return e.width = t.width, e.height = t.height, e.clipPath = t.clipPath, e.domain = __(t.domain), e.ticks && t.ticks && d_(e.ticks, t.ticks), e;
}
var b_ = { getAxisInstance: function() {
	return this.axis || new x_(this);
} }, x_ = class {
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
		return `${Fa.axis} ${Fa[`axis${Se(e)}`]}`;
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
				let t = Ie.bind(e);
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
		e === "x" ? o = a ? Xg : Yg : e === "y" ? o = a ? Yg : Xg : e === "y2" && (o = a ? qg : Jg), i.length && i.forEach((n) => {
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
		let m = this.tick[c], h = ke({
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
		let g = new Qg(h).scale(s && a.scale.zoom || t).orient(u);
		if (s && this.isTimeSeries() && m && !f(m)) {
			let e = Ie.bind(a);
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
		return g_({
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
				values: a_(u),
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
		let n = this.owner, { config: r, state: i, $el: { svg: a, chart: o } } = n, { current: s, resizing: c } = i, l = s.maxTickSize[e], u = `${B.maxTickSize}_${e}_${!!t}`, d = n.cache.get(u);
		if (d && d.generation === i.redrawGeneration) return l;
		let f = `axis_${e}`, p = {
			width: 0,
			height: 0
		}, h;
		if (c || t || !r[`${f}_show`] || l.width > 0 && n.filterTargetsToShow().length === 0) return l;
		if ((a || r.render_mode === "canvas") && n.scale[e]?.copy) {
			let a = /^y2?$/.test(e), s = n.getTargetsToShow(), c = n.scale[e].copy().domain(n[`get${a ? "Y" : "X"}Domain`](s, e)), g = c.domain(), _ = g[0] === g[1] && g.every((e) => e > 0), v = T(l.domain) && l.domain[0] === l.domain[1] && l.domain.every((e) => e > 0);
			if (_ || v) return l;
			l.domain = g, a || c_(l.ticks);
			let y = this.getAxis(e, c, !1, !1, !0), b = r[`${f}_tick_rotate`], x = r[`${f}_tick_count`];
			if (!r[`${f}_tick_values`] && x && y.tickValues(this.generateTickValues(g, x, a ? this.isTimeSeriesY() : this.isTimeSeries())), !a && this.updateXAxisTickValues(s, y), h = this.getMaxTickSizeFingerprint(e, c, g, y, b, t), d?.fingerprint === h) return n.cache.add(u, {
				...d,
				generation: i.redrawGeneration
			}), y_(l, d.value);
			let S = y.tickValues(), C = !a && Array.isArray(S) && S.length > e_;
			C && y.tickValues(i_(S, y.tickFormat()));
			let w = o.append("svg").style("visibility", "hidden").style("position", "fixed").style("top", "0").style("left", "0"), E = w.append("g").attr("class", `${Fa[`axis${Se(e)}`]} ${L.dummy}`);
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
				}), (e.length <= 5 ? e : $g(e)).map((e) => Co(e, !0)).forEach((e) => {
					p.width = Math.max(p.width, e.width), p.height = Math.max(p.height, e.height);
				}), !a) for (let t = 0; t < e.length; t++) l.ticks[t] = p.width;
			}
			!a && C && l_(l.ticks, k, p.width), w.remove();
		}
		return Object.keys(p).forEach((e) => {
			p[e] > 0 && (l[e] = p[e]);
		}), n.cache.add(u, {
			fingerprint: h,
			generation: i.redrawGeneration,
			value: v_(l)
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
		let n = this.owner, { axis: r, config: i, state: a } = n, o = r.isTimeSeries(), s = a.current.maxTickSize.x.ticks, c = s.length, l = o_(s) ?? a.current.maxTickSize.x.width, { left: u, right: d } = a.axis.x.padding, f = 0, p = c - (o && i.axis_x_tick_fit ? .5 : 0);
		for (let n = 0; n < c; n++) {
			let r = n + 1, i = Math.cos(Math.PI * e / 180) * f_(s, n, l), a = r - (o ? 1 : .5) + u;
			if (a <= 0) continue;
			let c = (t - i) / a, m = p - r, h = d * c, g = m * c + h, _ = i - c / 2 - g;
			f = Math.max(f, _);
		}
		let m = n.getTargetsToShow(), h = 0;
		if (!o && i.axis_x_tick_count <= m.length && m[0].values.length) {
			let e = Vp(n.axis.getAxisType("x"), 0, t - f).domain([u * -1, n.getXDomainMax(n.data.targets) + 1 + d]);
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
			let a = this.getLabelText(t), o = `axis${Se(t)}`, s = Fa[`${o}Label`];
			if (a) {
				let c = n.select(`text.${s}`);
				c.empty() && (c = n.select(`g.${Fa[o]}`).insert("text", ":first-child").attr("class", s).attr("transform", ["rotate(-90)", null][t === "x" ? +!i : +i]).style("text-anchor", () => this.textAnchorForAxisLabel(t))), r(c, e).attr("x", () => this.xForAxisLabel(t)).attr("dx", () => this.dxForAxisLabel(t)).attr("dy", () => this.dyForAxisLabel(t)).text(a);
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
			i && s && (!n && !r.transition_duration && (i.config.withoutTransition = !0), s.style("opacity", o), i.create(e[`axis${Se(t)}`]));
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
				let s = a.selectAll(".tick"), c = Ae(s.data(), !e[`${o}_reverse`]), l = c.length, u = e[`${o}_max`], d = !e[`${o}_lines`] || r_(this[i], c, n_(s)), f;
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
					r.svg.selectAll(`.${Fa.axisX} .tick text`).attr("clip-path", e);
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
			if (p(a) || a[n]) if (i[n] = r[n]?.append("text").classed(Fa[`axis${n.toUpperCase()}Tooltip`], !0).attr("filter", e.updateTextBGColor({ id: n }, a)), t) {
				let e = n === "x" ? "x" : "y", t = n === "y" ? "1.15em" : n === "x" ? "-0.3em" : "-0.4em";
				i[n]?.attr(e, t).attr(`d${n === "x" ? "y" : "x"}`, n === "x" ? "0.4em" : "-1.3em").style("text-anchor", n === "x" ? "end" : null);
			} else {
				let e = n === "x" ? "y" : "x", t = n === "x" ? "1.15em" : `${n === "y" ? "-" : ""}0.4em`;
				i[n]?.attr(e, t).attr(`d${n === "x" ? "x" : "y"}`, n === "x" ? "-1em" : "0.3em").style("text-anchor", n === "y" ? "end" : null);
			}
		});
	}
}, S_ = {
	initEventRect() {
		this.$el.main.select(`.${L.chart}`).append("g").attr("class", Wa.eventRects).style("fill-opacity", "0");
	},
	redrawEventRect() {
		let e = this, { config: t, state: n, $el: r } = e, i = e.isMultipleX(), a = t.axis_x_inverted;
		if (r.eventRect) e.updateEventRect(r.eventRect, !0);
		else if (e.data.targets.length) {
			let a = e.$el.main.select(`.${Wa.eventRects}`).style("cursor", t.zoom_enabled && t.zoom_type !== "drag" ? t.axis_rotated ? "ns-resize" : "ew-resize" : null).classed(Wa.eventRectsMultiple, i).classed(Wa.eventRectsSingle, !i).selectAll(`.${Wa.eventRect}`).data([0]).enter().append("rect");
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
			if (n.event = t, !r.empty() && r.classed(Wa.eventRect)) {
				if (n.dragging || n.flowing || e.hasArcType() || t.touches.length > 1) return;
				f(t), a(r.node());
			} else o();
		}, { passive: d }).on("touchend.eventRect", (t) => {
			n.event = t, !r.empty() && r.classed(Wa.eventRect) && (e.hasArcType() || !e.toggleShape || n.cancelClick) && (n.cancelClick &&= !1);
		}, { passive: d }), i.on("touchstart", (e) => {
			n.event = e;
			let { target: t } = e;
			t && t !== r.node() && o();
		}, { passive: d });
	},
	updateEventRect(e, t = !1) {
		let { state: n, $el: r } = this, { eventReceiver: i, width: a, height: o, rendered: s, resizing: c } = n, l = e || r.eventRect;
		(!s || c || t) && (l.attr("x", 0).attr("y", 0).attr("width", a).attr("height", o), (!s || t) && l.classed(Wa.eventRect, !0)), (() => {
			if (i) {
				let e = Eo(r.chart.node());
				i.rect = Co(l.node(), !0).toJSON(), i.rect.top += e.y, i.rect.left += e.x;
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
		!o && a.selectAll(`.${L.EXPANDED}:not(.${Za.shape}-${t})`).classed(L.EXPANDED, !1);
		let f = a.selectAll(`.${Za.shape}-${t}`).classed(L.EXPANDED, !0).style("cursor", l ? "pointer" : null).filter(function(e) {
			return n.isWithinShape(this, e);
		});
		if (f.call((r) => {
			let i = r.data();
			s && (c || l?.bind(n.api)(i)) && (e.style.cursor = "pointer"), u || (n.showTooltip(i, e), n.showGridFocus?.(i), n.unexpandCircles?.(), r.each((e) => n.setExpand(t, e.id)));
		}), !u && f.empty()) {
			let a = So(i.event, e), o = d.filter((e) => n.isTargetToShow(e.id) ? n.dist(e, a) < n.getPointSensitivity(e) : !1);
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
		let o = So(i.event, e), s = n.findClosestFromTargets(a, o);
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
					let e = t.scale.zoom || t.scale.x, n = t.axis.xs[s], r = e.invert(So(a, this)[0]);
					c === "step-after" && r < n ? --s : c === "step-before" && r > n && (s += 1);
				}
				t.showAxisGridFocus();
				let l = n.tooltip_grouped && s === i.currentIdx;
				if (r.dragging || r.flowing || t.hasArcType() || l) {
					if (n.tooltip_show && l) {
						let [e, n] = So(a, this), i = r._lastTooltipMouse;
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
		a.selectAll(`.${Za.shape}-${o}`).each(function(e) {
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
		let a = So(r.event, this), o = t.findClosestFromTargets(i, a);
		if (!o) return;
		let s = t.getPointSensitivity(o);
		(t.isBarType(o.id) || t.dist(o, a) < s) && t.$el.main.selectAll(`.${Za.shapes}${t.getTargetSelectorSuffix(o.id)}`).selectAll(`.${Za.shape}-${o.index}`).each(function() {
			(n.data_selection_grouped || t.isWithinShape(this, o)) && (t.toggleShape?.(this, o, o.index), n.data_onclick.bind(t.api)(o, this));
		});
	}
}, C_ = {
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
}, w_ = {
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
}, T_ = {
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
}, E_ = {
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
}, D_ = {
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
}, O_ = {
	axis_evalTextSize: !0,
	axis_rotated: !1,
	axis_tooltip: !1,
	...T_,
	...E_,
	...D_
}, k_ = {
	data_xs: {},
	data_xFormat: "%Y-%m-%d",
	data_xLocaltime: !0,
	data_xSort: !0,
	data_axes: {},
	data_regions: {},
	data_stack_normalize: !1
}, A_ = [
	Mg,
	Ng,
	Pg
], j_ = {
	axis: b_,
	clip: C_,
	eventrect: S_,
	sizeAxis: w_
}, M_ = {
	optDataAxis: k_,
	optAxis: O_
};
//#endregion
//#region node_modules/billboard.js/dist-esm/config/resolver/axis.core.js
function N_(e) {
	return Object.keys(e).map((t) => e[t]);
}
function P_(e = [], t = []) {
	Ee(dg.prototype, N_(j_).concat(e)), Ee(Cg.prototype, A_), fo.setOptions(N_(M_).concat(t));
}
//#endregion
//#region node_modules/billboard.js/dist-esm/config/resolver/shape/axis.helpers.js
function F_(e = [], t = []) {
	P_(e, t);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/shape/core/barRadius.js
function I_(e) {
	let { bar_radius: t, bar_radius_ratio: n } = e.config;
	return m(t) && t > 0 ? () => t : m(n) ? (e) => e * n : null;
}
function L_(e) {
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
function R_(e, t, n) {
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
function z_(e, t, n, r) {
	let i = "";
	return n ? r && e[0] < t ? i = `0 ${t - e[0]}px 0 0` : !r && e[0] > t && (i = `0 0 0 ${e[0] - t}px`) : r && e[1] > t ? i = `${e[1] - t}px 0 0 0` : !r && e[1] < t && (i = `0 0 ${t - e[1]}px 0`), i ? `inset(${i})` : null;
}
function B_(e, t, n, r, i, a) {
	let { config: o, state: s } = e, c = o.axis_rotated, l = +c, u = +!l, d = t.value < 0, f = o[`axis_${e.axis.getId(t.id)}_inverted`], p = !f && d || f && !d, m = e.isGrouped(t.id), h = r && m && t.value !== 0 ? s.hiddenTargetIds.has(t.id) && a ? a(t) : i.has(`${t.id}:${t.index}`) : !1, g = [n[0][l], n[0][u]], _ = 0;
	if (r) {
		let e = c ? u : l, t = Math.abs(n[2][e] - n[0][e]);
		_ = Math.max(0, !m || h ? r(t) : 0);
	}
	let v = c ? n[1][l] + (p ? _ : -_) : n[1][u] + (p ? -_ : _);
	return {
		radius: _,
		corners: R_(c, p, _),
		clipPath: _ ? z_(g, v, c, p) : null,
		indexX: l,
		indexY: u,
		isNegative: p,
		pos: v
	};
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/shape/bar.js
function V_(e) {
	let t = this.config.bar_connectLine, n = t?.[e] || t;
	return /^(start|end)\-(start|end)$/.test(n) ? n : null;
}
var H_ = {
	initBar() {
		let { $el: e, config: t, state: { clip: n } } = this;
		e.bar = e.main.select(`.${L.chart}`), e.bar = t.bar_front ? e.bar.append("g") : e.bar.insert("g", ":first-child"), e.bar.attr("class", Ia.chartBars).call(this.setCssRule(!1, `.${Ia.chartBars}`, ["pointer-events:none"])), t.clipPath === !1 && (t.bar_radius || t.bar_radius_ratio) && e.bar.attr("clip-path", n.pathXAxis.replace(/#[^)]*/, `#${n.id}`));
	},
	updateTargetsForBar(e) {
		let t = this, { config: n } = t, r = t.getClass("bars", !0), i = n.interaction_enabled && n.data_selection_isselectable;
		sg.call(t, e, {
			type: "Bar",
			elKey: "bar",
			containerClass: Ia.chartBars,
			itemClass: Ia.chartBar,
			initFn: t.initBar
		}).append("g").attr("class", r).style("cursor", (e) => i?.bind?.(t.api)(e) ? "pointer" : null).call((e) => {
			t.setCssRule(!0, ` .${Ia.bar}`, ["fill"], t.color)(e), e.each(function(e) {
				V_.call(t, e.id) && N(this).append("path").attr("class", Ia.barConnectLine);
			});
		});
	},
	updateBar(e, t = !1) {
		let n = this;
		if (n.state.isCanvasMode) return;
		let { config: r, $el: i, $T: a } = n, o = t ? i.subchart : i, s = n.getClass("bar", !0), c = n.initialOpacity.bind(n);
		r.bar_linearGradient && n.updateLinearGradient();
		let l = o.main.selectAll(`.${Ia.bars}`).selectAll(`.${Ia.bar}`).data(n.labelishData.bind(n));
		a(l.exit(), e).style("opacity", "0").remove(), o.bar = l.enter().append("path").attr("class", s).style("fill", n.generateUpdateBarColor()).merge(l).style("opacity", c), n.setRatioForGroupedData(o.bar.data());
	},
	generateUpdateBarColor() {
		let e = this, t = e.getStylePropValue(e.color) || (() => null);
		return (n) => og.call(e, n, "bar_linearGradient", t);
	},
	updateBarColor(e) {
		return this.generateUpdateBarColor()(e);
	},
	redrawBar(e, t, n = !1) {
		let r = this;
		if (r.state.isCanvasMode) return [];
		let { bar: i } = n ? r.$el.subchart : r.$el, a = [], o = /* @__PURE__ */ new Map();
		return [r.$T(i, t, Ne()).attr("d", function(n, i, s) {
			let c = (m(n.value) || r.isBarRangeType(n)) && e(n, i), l = o.get(n.id);
			if (l === void 0 && (l = V_.call(r, n.id), o.set(n.id, l)), c.length > 1 && a.push(c[1]), i === s.length - 1 && a.length) {
				let e = r.$T(N(this.parentNode.querySelector(`.${Ia.barConnectLine}`)), t, Ne());
				r.updateConnectLine(e, l, a), a.splice(0);
			}
			return c[0];
		}).style("fill", r.generateUpdateBarColor()).style("clip-path", (e) => e.clipPath).style("opacity", null)];
	},
	generateDrawBar(e, t) {
		let n = this, { config: r } = n, i = n.generateGetBarPoints(e, t), a = I_(n), o = a ? L_(n) : /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
		return (e, t) => {
			let c = i(e, t), { indexX: l, indexY: u, isNegative: d, pos: f, radius: p, clipPath: m } = B_(n, e, c, a, o, n.isStackingRadiusData.bind(n)), h = ["", ""];
			if (e.clipPath = m, a) {
				let e = `a${p} ${p} ${d ? "1 0 0" : "0 0 1"} `;
				h[u] = `${e}${p},${p}`, h[l] = `${e}${[-p, p][r.axis_rotated ? "sort" : "reverse"]()}`, d && h.reverse();
			}
			let g = r.axis_rotated ? `H${f} ${h[0]}V${c[2][u] - p} ${h[1]}H${c[3][l]}` : `V${f} ${h[0]}H${c[2][l] - p} ${h[1]}V${c[3][u]}`, _ = [`M${c[0][l]},${c[0][u]}${g}z`], v = s.get(e.id);
			return v === void 0 && (v = V_.call(n, e.id), s.set(e.id, v)), v && _.push(r.axis_rotated ? {
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
}, U_ = {
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
}, W_ = () => (F_([H_, Og], [U_, kg]), (W_ = () => e.BAR)());
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/count.js
function G_(e) {
	var t = 0, n = e.children, r = n && n.length;
	if (!r) t = 1;
	else for (; --r >= 0;) t += n[r].value;
	e.value = t;
}
function K_() {
	return this.eachAfter(G_);
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/each.js
function q_(e, t) {
	let n = -1;
	for (let r of this) e.call(t, r, ++n, this);
	return this;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
function J_(e, t) {
	for (var n = this, r = [n], i, a, o = -1; n = r.pop();) if (e.call(t, n, ++o, this), i = n.children) for (a = i.length - 1; a >= 0; --a) r.push(i[a]);
	return this;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
function Y_(e, t) {
	for (var n = this, r = [n], i = [], a, o, s, c = -1; n = r.pop();) if (i.push(n), a = n.children) for (o = 0, s = a.length; o < s; ++o) r.push(a[o]);
	for (; n = i.pop();) e.call(t, n, ++c, this);
	return this;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/find.js
function X_(e, t) {
	let n = -1;
	for (let r of this) if (e.call(t, r, ++n, this)) return r;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/sum.js
function Z_(e) {
	return this.eachAfter(function(t) {
		for (var n = +e(t.data) || 0, r = t.children, i = r && r.length; --i >= 0;) n += r[i].value;
		t.value = n;
	});
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/sort.js
function Q_(e) {
	return this.eachBefore(function(t) {
		t.children && t.children.sort(e);
	});
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/path.js
function $_(e) {
	for (var t = this, n = ev(t, e), r = [t]; t !== n;) t = t.parent, r.push(t);
	for (var i = r.length; e !== n;) r.splice(i, 0, e), e = e.parent;
	return r;
}
function ev(e, t) {
	if (e === t) return e;
	var n = e.ancestors(), r = t.ancestors(), i = null;
	for (e = n.pop(), t = r.pop(); e === t;) i = e, e = n.pop(), t = r.pop();
	return i;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/ancestors.js
function tv() {
	for (var e = this, t = [e]; e = e.parent;) t.push(e);
	return t;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/descendants.js
function nv() {
	return Array.from(this);
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/leaves.js
function rv() {
	var e = [];
	return this.eachBefore(function(t) {
		t.children || e.push(t);
	}), e;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/links.js
function iv() {
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
function* av() {
	var e = this, t, n = [e], r, i, a;
	do
		for (t = n.reverse(), n = []; e = t.pop();) if (yield e, r = e.children) for (i = 0, a = r.length; i < a; ++i) n.push(r[i]);
	while (n.length);
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/index.js
function ov(e, t) {
	e instanceof Map ? (e = [void 0, e], t === void 0 && (t = lv)) : t === void 0 && (t = cv);
	for (var n = new fv(e), r, i = [n], a, o, s, c; r = i.pop();) if ((o = t(r.data)) && (c = (o = Array.from(o)).length)) for (r.children = o, s = c - 1; s >= 0; --s) i.push(a = o[s] = new fv(o[s])), a.parent = r, a.depth = r.depth + 1;
	return n.eachBefore(dv);
}
function sv() {
	return ov(this).eachBefore(uv);
}
function cv(e) {
	return e.children;
}
function lv(e) {
	return Array.isArray(e) ? e[1] : null;
}
function uv(e) {
	e.data.value !== void 0 && (e.value = e.data.value), e.data = e.data.data;
}
function dv(e) {
	var t = 0;
	do
		e.height = t;
	while ((e = e.parent) && e.height < ++t);
}
function fv(e) {
	this.data = e, this.depth = this.height = 0, this.parent = null;
}
fv.prototype = ov.prototype = {
	constructor: fv,
	count: K_,
	each: q_,
	eachAfter: Y_,
	eachBefore: J_,
	find: X_,
	sum: Z_,
	sort: Q_,
	path: $_,
	ancestors: tv,
	descendants: nv,
	leaves: rv,
	links: iv,
	copy: sv,
	[Symbol.iterator]: av
};
//#endregion
//#region node_modules/d3-hierarchy/src/tree.js
function pv(e, t) {
	return e.parent === t.parent ? 1 : 2;
}
function mv(e) {
	var t = e.children;
	return t ? t[0] : e.t;
}
function hv(e) {
	var t = e.children;
	return t ? t[t.length - 1] : e.t;
}
function gv(e, t, n) {
	var r = n / (t.i - e.i);
	t.c -= r, t.s += n, e.c += r, t.z += n, t.m += n;
}
function _v(e) {
	for (var t = 0, n = 0, r = e.children, i = r.length, a; --i >= 0;) a = r[i], a.z += t, a.m += t, t += a.s + (n += a.c);
}
function vv(e, t, n) {
	return e.a.parent === t.parent ? e.a : n;
}
function yv(e, t) {
	this._ = e, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = t;
}
yv.prototype = Object.create(fv.prototype);
function bv(e) {
	for (var t = new yv(e, 0), n, r = [t], i, a, o, s; n = r.pop();) if (a = n._.children) for (n.children = Array(s = a.length), o = s - 1; o >= 0; --o) r.push(i = n.children[o] = new yv(a[o], o)), i.parent = n;
	return (t.parent = new yv(null, 0)).children = [t], t;
}
function xv() {
	var e = pv, t = 1, n = 1, r = null;
	function i(i) {
		var s = bv(i);
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
			_v(t);
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
			for (var i = t, a = t, o = n, s = i.parent.children[0], c = i.m, l = a.m, u = o.m, d = s.m, f; o = hv(o), i = mv(i), o && i;) s = mv(s), a = hv(a), a.a = t, f = o.z + u - i.z - c + e(o._, i._), f > 0 && (gv(vv(o, t, r), t, f), c += f, l += f), u += o.m, c += i.m, d += s.m, l += a.m;
			o && !hv(a) && (a.t = o, a.m += u - l), i && !mv(s) && (s.t = i, s.m += c - d, r = t);
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
var Sv = (e) => () => e;
//#endregion
//#region node_modules/d3-zoom/src/event.js
function Cv(e, { sourceEvent: t, target: n, transform: r, dispatch: i }) {
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
function wv(e, t, n) {
	this.k = e, this.x = t, this.y = n;
}
wv.prototype = {
	constructor: wv,
	scale: function(e) {
		return e === 1 ? this : new wv(this.k * e, this.x, this.y);
	},
	translate: function(e, t) {
		return e === 0 & t === 0 ? this : new wv(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Tv = new wv(1, 0, 0);
Ev.prototype = wv.prototype;
function Ev(e) {
	for (; !e.__zoom;) if (!(e = e.parentNode)) return Tv;
	return e.__zoom;
}
//#endregion
//#region node_modules/d3-zoom/src/noevent.js
function Dv(e) {
	e.stopImmediatePropagation();
}
function Ov(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region node_modules/d3-zoom/src/zoom.js
function kv(e) {
	return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Av() {
	var e = this;
	return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function jv() {
	return this.__zoom || Tv;
}
function Mv(e) {
	return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * (e.ctrlKey ? 10 : 1);
}
function Nv() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Pv(e, t, n) {
	var r = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], o = e.invertY(t[1][1]) - n[1][1];
	return e.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), o > a ? (a + o) / 2 : Math.min(0, a) || Math.max(0, o));
}
function Fv() {
	var e = kv, t = Av, n = Pv, r = Mv, i = Nv, a = [0, Infinity], o = [[-Infinity, -Infinity], [Infinity, Infinity]], s = 250, c = Kl, l = _s("start", "zoom", "end"), u, d, f, p = 500, m = 150, h = 0, g = 10;
	function _(e) {
		e.property("__zoom", jv).on("wheel.zoom", w, { passive: !1 }).on("mousedown.zoom", T).on("dblclick.zoom", E).filter(i).on("touchstart.zoom", D).on("touchmove.zoom", O).on("touchend.zoom touchcancel.zoom", k).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	_.transform = function(e, t, n, r) {
		var i = e.selection ? e.selection() : e;
		i.property("__zoom", jv), e === i ? i.interrupt().each(function() {
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
			return n(Tv.translate(c[0], c[1]).scale(s.k).translate(typeof r == "function" ? -r.apply(this, arguments) : -r, typeof i == "function" ? -i.apply(this, arguments) : -i), e, o);
		}, a, s);
	};
	function v(e, t) {
		return t = Math.max(a[0], Math.min(a[1], t)), t === e.k ? e : new wv(t, e.x, e.y);
	}
	function y(e, t, n) {
		var r = t[0] - n[0] * e.k, i = t[1] - n[1] * e.k;
		return r === e.x && i === e.y ? e : new wv(e.k, r, i);
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
					e = new wv(n, l[0] - t[0] * n, l[1] - t[1] * n);
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
			var t = N(this.that).datum();
			l.call(e, this.that, new Cv(e, {
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
		var s = S(this, i).event(t), c = this.__zoom, l = Math.max(a[0], Math.min(a[1], c.k * 2 ** r.apply(this, arguments))), u = Gn(t);
		if (s.wheel) (s.mouse[0][0] !== u[0] || s.mouse[0][1] !== u[1]) && (s.mouse[1] = c.invert(s.mouse[0] = u)), clearTimeout(s.wheel);
		else if (c.k === l) return;
		else s.mouse = [u, c.invert(u)], Qd(this), s.start();
		Ov(t), s.wheel = setTimeout(d, m), s.zoom("mouse", n(y(v(c, l), s.mouse[0], s.mouse[1]), s.extent, o));
		function d() {
			s.wheel = null, s.end();
		}
	}
	function T(t, ...r) {
		if (f || !e.apply(this, arguments)) return;
		var i = t.currentTarget, a = S(this, r, !0).event(t), s = N(t.view).on("mousemove.zoom", d, !0).on("mouseup.zoom", p, !0), c = Gn(t, i), l = t.clientX, u = t.clientY;
		Es(t.view), Dv(t), a.mouse = [c, this.__zoom.invert(c)], Qd(this), a.start();
		function d(e) {
			if (Ov(e), !a.moved) {
				var t = e.clientX - l, r = e.clientY - u;
				a.moved = t * t + r * r > h;
			}
			a.event(e).zoom("mouse", n(y(a.that.__zoom, a.mouse[0] = Gn(e, i), a.mouse[1]), a.extent, o));
		}
		function p(e) {
			s.on("mousemove.zoom mouseup.zoom", null), Ds(e.view, a.moved), Ov(e), a.event(e).end();
		}
	}
	function E(r, ...i) {
		if (e.apply(this, arguments)) {
			var a = this.__zoom, c = Gn(r.changedTouches ? r.changedTouches[0] : r, this), l = a.invert(c), u = a.k * (r.shiftKey ? .5 : 2), d = n(y(v(a, u), c, l), t.apply(this, i), o);
			Ov(r), s > 0 ? N(this).transition().duration(s).call(x, d, c, r) : N(this).call(_.transform, d, c, r);
		}
	}
	function D(t, ...n) {
		if (e.apply(this, arguments)) {
			var r = t.touches, i = r.length, a = S(this, n, t.changedTouches.length === i).event(t), o, s, c, l;
			for (Dv(t), s = 0; s < i; ++s) c = r[s], l = Gn(c, this), l = [
				l,
				this.__zoom.invert(l),
				c.identifier
			], a.touch0 ? !a.touch1 && a.touch0[2] !== l[2] && (a.touch1 = l, a.taps = 0) : (a.touch0 = l, o = !0, a.taps = 1 + !!u);
			u &&= clearTimeout(u), o && (a.taps < 2 && (d = l[0], u = setTimeout(function() {
				u = null;
			}, p)), Qd(this), a.start());
		}
	}
	function O(e, ...t) {
		if (this.__zooming) {
			var r = S(this, t).event(e), i = e.changedTouches, a = i.length, s, c, l, u;
			for (Ov(e), s = 0; s < a; ++s) c = i[s], l = Gn(c, this), r.touch0 && r.touch0[2] === c.identifier ? r.touch0[0] = l : r.touch1 && r.touch1[2] === c.identifier && (r.touch1[0] = l);
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
			for (Dv(e), f && clearTimeout(f), f = setTimeout(function() {
				f = null;
			}, p), a = 0; a < i; ++a) o = r[a], n.touch0 && n.touch0[2] === o.identifier ? delete n.touch0 : n.touch1 && n.touch1[2] === o.identifier && delete n.touch1;
			if (n.touch1 && !n.touch0 && (n.touch0 = n.touch1, delete n.touch1), n.touch0) n.touch0[1] = this.__zoom.invert(n.touch0[0]);
			else if (n.end(), n.taps === 2 && (o = Gn(o, this), Math.hypot(d[0] - o[0], d[1] - o[1]) < g)) {
				var s = N(this).on("dblclick.zoom");
				s && s.apply(this, arguments);
			}
		}
	}
	return _.wheelDelta = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : Sv(+e), _) : r;
	}, _.filter = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : Sv(!!t), _) : e;
	}, _.touchable = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : Sv(!!e), _) : i;
	}, _.extent = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : Sv([[+e[0][0], +e[0][1]], [+e[1][0], +e[1][1]]]), _) : t;
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
function Iv(e, t) {
	let n = e.series.map((e) => [e.name, ...e.values]), r = Tg.generate({
		axis: { x: {
			categories: e.categories,
			type: "category"
		} },
		bindto: t,
		data: {
			columns: n,
			type: W_()
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
var Lv = Object.defineProperty, Rv = (e, t, n) => t in e ? Lv(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, zv = (e, t) => {
	for (var n in t) Lv(e, n, {
		get: t[n],
		enumerable: !0
	});
}, Bv = (e, t, n) => Rv(e, typeof t == "symbol" ? t : t + "", n), Vv = {};
zv(Vv, {
	Graph: () => Wv,
	alg: () => ny,
	json: () => Zv,
	version: () => Xv
});
var Hv = Object.defineProperty, Uv = (e, t) => {
	for (var n in t) Hv(e, n, {
		get: t[n],
		enumerable: !0
	});
}, Wv = class {
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
		let l = qv(this._isDirected, i, a, o);
		if (l in this._edgeLabels) return c && (this._edgeLabels[l] = s), this;
		if (o !== void 0 && !this._isMultigraph) throw Error("Cannot set a named edge when isMultigraph = false");
		this.setNode(i), this.setNode(a), this._edgeLabels[l] = c ? s : this._defaultEdgeLabelFn(i, a, o);
		let u = Jv(this._isDirected, i, a, o);
		return i = u.v, a = u.w, Object.freeze(u), this._edgeObjs[l] = u, Gv(this._preds[a], i), Gv(this._sucs[i], a), this._in[a][l] = u, this._out[i][l] = u, this._edgeCount++, this;
	}
	edge(e, t, n) {
		let r = arguments.length === 1 ? Yv(this._isDirected, e) : qv(this._isDirected, e, t, n);
		return this._edgeLabels[r];
	}
	edgeAsObj(e, t, n) {
		let r = arguments.length === 1 ? this.edge(e) : this.edge(e, t, n);
		return typeof r == "object" ? r : { label: r };
	}
	hasEdge(e, t, n) {
		return (arguments.length === 1 ? Yv(this._isDirected, e) : qv(this._isDirected, e, t, n)) in this._edgeLabels;
	}
	removeEdge(e, t, n) {
		let r = arguments.length === 1 ? Yv(this._isDirected, e) : qv(this._isDirected, e, t, n), i = this._edgeObjs[r];
		if (i) {
			let e = i.v, t = i.w;
			delete this._edgeLabels[r], delete this._edgeObjs[r], Kv(this._preds[t], e), Kv(this._sucs[e], t), delete this._in[t][r], delete this._out[e][r], this._edgeCount--;
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
function Gv(e, t) {
	e[t] ? e[t]++ : e[t] = 1;
}
function Kv(e, t) {
	e[t] !== void 0 && !--e[t] && delete e[t];
}
function qv(e, t, n, r) {
	let i = "" + t, a = "" + n;
	if (!e && i > a) {
		let e = i;
		i = a, a = e;
	}
	return i + "" + a + "" + (r === void 0 ? "\0" : r);
}
function Jv(e, t, n, r) {
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
function Yv(e, t) {
	return qv(e, t.v, t.w, t.name);
}
var Xv = "4.0.1", Zv = {};
Uv(Zv, {
	read: () => ty,
	write: () => Qv
});
function Qv(e) {
	let t = {
		options: {
			directed: e.isDirected(),
			multigraph: e.isMultigraph(),
			compound: e.isCompound()
		},
		nodes: $v(e),
		edges: ey(e)
	}, n = e.graph();
	return n !== void 0 && (t.value = structuredClone(n)), t;
}
function $v(e) {
	return e.nodes().map((t) => {
		let n = e.node(t), r = e.parent(t), i = { v: t };
		return n !== void 0 && (i.value = n), r !== void 0 && (i.parent = r), i;
	});
}
function ey(e) {
	return e.edges().map((t) => {
		let n = e.edge(t), r = {
			v: t.v,
			w: t.w
		};
		return t.name !== void 0 && (r.name = t.name), n !== void 0 && (r.value = n), r;
	});
}
function ty(e) {
	let t = new Wv(e.options);
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
var ny = {};
Uv(ny, {
	CycleException: () => _y,
	bellmanFord: () => iy,
	components: () => oy,
	dijkstra: () => ly,
	dijkstraAll: () => dy,
	findCycles: () => py,
	floydWarshall: () => hy,
	isAcyclic: () => yy,
	postorder: () => Cy,
	preorder: () => wy,
	prim: () => Ty,
	shortestPaths: () => Ey,
	tarjan: () => fy,
	topsort: () => vy
});
var ry = () => 1;
function iy(e, t, n, r) {
	return ay(e, String(t), n || ry, r || function(t) {
		return e.outEdges(t);
	});
}
function ay(e, t, n, r) {
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
function oy(e) {
	let t = {}, n = [], r;
	function i(n) {
		n in t || (t[n] = !0, r.push(n), e.successors(n).forEach(i), e.predecessors(n).forEach(i));
	}
	return e.nodes().forEach(function(e) {
		r = [], i(e), r.length && n.push(r);
	}), n;
}
var sy = class {
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
}, cy = () => 1;
function ly(e, t, n, r) {
	return uy(e, String(t), n || cy, r || function(t) {
		return e.outEdges(t);
	});
}
function uy(e, t, n, r) {
	let i = {}, a = new sy(), o, s, c = function(e) {
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
function dy(e, t, n) {
	return e.nodes().reduce(function(r, i) {
		return r[i] = ly(e, i, t, n), r;
	}, {});
}
function fy(e) {
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
function py(e) {
	return fy(e).filter(function(t) {
		return t.length > 1 || t.length === 1 && e.hasEdge(t[0], t[0]);
	});
}
var my = () => 1;
function hy(e, t, n) {
	return gy(e, t || my, n || function(t) {
		return e.outEdges(t);
	});
}
function gy(e, t, n) {
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
var _y = class extends Error {
	constructor(...e) {
		super(...e);
	}
};
function vy(e) {
	let t = {}, n = {}, r = [];
	function i(a) {
		if (a in n) throw new _y();
		a in t || (n[a] = !0, t[a] = !0, e.predecessors(a).forEach(i), delete n[a], r.push(a));
	}
	if (e.sinks().forEach(i), Object.keys(t).length !== e.nodeCount()) throw new _y();
	return r;
}
function yy(e) {
	try {
		vy(e);
	} catch (e) {
		if (e instanceof _y) return !1;
		throw e;
	}
	return !0;
}
function by(e, t, n, r, i) {
	Array.isArray(t) || (t = [t]);
	let a = ((t) => (e.isDirected() ? e.successors(t) : e.neighbors(t)) ?? []), o = {};
	return t.forEach(function(t) {
		if (!e.hasNode(t)) throw Error("Graph does not have node: " + t);
		i = xy(e, t, n === "post", o, a, r, i);
	}), i;
}
function xy(e, t, n, r, i, a, o) {
	return t in r || (r[t] = !0, n || (o = a(o, t)), i(t).forEach(function(t) {
		o = xy(e, t, n, r, i, a, o);
	}), n && (o = a(o, t))), o;
}
function Sy(e, t, n) {
	return by(e, t, n, function(e, t) {
		return e.push(t), e;
	}, []);
}
function Cy(e, t) {
	return Sy(e, t, "post");
}
function wy(e, t) {
	return Sy(e, t, "pre");
}
function Ty(e, t) {
	let n = new Wv(), r = {}, i = new sy(), a;
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
function Ey(e, t, n, r) {
	return Dy(e, t, n, r ?? ((t) => e.outEdges(t) ?? []));
}
function Dy(e, t, n, r) {
	if (n === void 0) return ly(e, t, n, r);
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
		if (i) return iy(e, t, n, r);
	}
	return ly(e, t, n, r);
}
function Oy(e, t, n, r) {
	let i = r;
	for (; e.hasNode(i);) i = Wy(r);
	return n.dummy = t, e.setNode(i, n), i;
}
function ky(e) {
	let t = new Wv().setGraph(e.graph());
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
function Ay(e) {
	let t = new Wv({ multigraph: e.isMultigraph() }).setGraph(e.graph());
	return e.nodes().forEach((n) => {
		e.children(n).length || t.setNode(n, e.node(n));
	}), e.edges().forEach((n) => {
		t.setEdge(n, e.edge(n));
	}), t;
}
function jy(e, t) {
	let n = e.x, r = e.y, i = t.x - n, a = t.y - r, o = e.width / 2, s = e.height / 2;
	if (!i && !a) throw Error("Not possible to find intersection inside of the rectangle");
	let c, l;
	return Math.abs(a) * o > Math.abs(i) * s ? (a < 0 && (s = -s), c = s * i / a, l = s) : (i < 0 && (o = -o), c = o, l = o * a / i), {
		x: n + c,
		y: r + l
	};
}
function My(e) {
	let t = Gy(zy(e) + 1).map(() => []);
	return e.nodes().forEach((n) => {
		let r = e.node(n), i = r.rank;
		i !== void 0 && (t[i] || (t[i] = []), t[i][r.order] = n);
	}), t;
}
function Ny(e) {
	let t = e.nodes().map((t) => {
		let n = e.node(t).rank;
		return n === void 0 ? Number.MAX_VALUE : n;
	}), n = Ry(Math.min, t);
	e.nodes().forEach((t) => {
		let r = e.node(t);
		Object.hasOwn(r, "rank") && (r.rank -= n);
	});
}
function Py(e) {
	let t = e.nodes().map((t) => e.node(t).rank).filter((e) => e !== void 0), n = Ry(Math.min, t), r = [];
	e.nodes().forEach((t) => {
		let i = e.node(t).rank - n;
		r[i] || (r[i] = []), r[i].push(t);
	});
	let i = 0, a = e.graph().nodeRankFactor;
	Array.from(r).forEach((t, n) => {
		t === void 0 && n % a !== 0 ? --i : t !== void 0 && i && t.forEach((t) => e.node(t).rank += i);
	});
}
function Fy(e, t, n, r) {
	let i = {
		width: 0,
		height: 0
	};
	return arguments.length >= 4 && (i.rank = n, i.order = r), Oy(e, "border", i, t);
}
function Iy(e, t = Ly) {
	let n = [];
	for (let r = 0; r < e.length; r += t) {
		let i = e.slice(r, r + t);
		n.push(i);
	}
	return n;
}
var Ly = 65535;
function Ry(e, t) {
	return t.length > Ly ? e(...Iy(t).map((t) => e(...t))) : e(...t);
}
function zy(e) {
	let t = e.nodes().map((t) => {
		let n = e.node(t).rank;
		return n === void 0 ? Number.MIN_VALUE : n;
	});
	return Ry(Math.max, t);
}
function By(e, t) {
	let n = {
		lhs: [],
		rhs: []
	};
	return e.forEach((e) => {
		t(e) ? n.lhs.push(e) : n.rhs.push(e);
	}), n;
}
function Vy(e, t) {
	let n = Date.now();
	try {
		return t();
	} finally {
		console.log(e + " time: " + (Date.now() - n) + "ms");
	}
}
function Hy(e, t) {
	return t();
}
var Uy = 0;
function Wy(e) {
	return e + ("" + ++Uy);
}
function Gy(e, t, n = 1) {
	t ?? (t = e, e = 0);
	let r = (e) => e < t;
	n < 0 && (r = (e) => t < e);
	let i = [];
	for (let t = e; r(t); t += n) i.push(t);
	return i;
}
function Ky(e, t) {
	let n = {};
	for (let r of t) e[r] !== void 0 && (n[r] = e[r]);
	return n;
}
function qy(e, t) {
	let n;
	return n = typeof t == "string" ? (e) => e[t] : t, Object.entries(e).reduce((e, [t, r]) => (e[t] = n(r, t), e), {});
}
function Jy(e, t) {
	return e.reduce((e, n, r) => (e[n] = t[r], e), {});
}
var Yy = "\0", Xy = class {
	constructor() {
		Bv(this, "_sentinel");
		let e = {};
		e._next = e._prev = e, this._sentinel = e;
	}
	dequeue() {
		let e = this._sentinel, t = e._prev;
		if (t !== e) return Zy(t), t;
	}
	enqueue(e) {
		let t = this._sentinel;
		e._prev && e._next && Zy(e), e._next = t._next, t._next._prev = e, t._next = e, e._prev = t;
	}
	toString() {
		let e = [], t = this._sentinel, n = t._prev;
		for (; n !== t;) e.push(JSON.stringify(n, Qy)), n = n._prev;
		return "[" + e.join(", ") + "]";
	}
};
function Zy(e) {
	e._prev._next = e._next, e._next._prev = e._prev, delete e._next, delete e._prev;
}
function Qy(e, t) {
	if (e !== "_next" && e !== "_prev") return t;
}
var $y = Xy, eb = () => 1;
function tb(e, t) {
	if (e.nodeCount() <= 1) return [];
	let n = ib(e, t || eb);
	return nb(n.graph, n.buckets, n.zeroIdx).flatMap((t) => e.outEdges(t.v, t.w) || []);
}
function nb(e, t, n) {
	let r = [], i = t[t.length - 1], a = t[0], o;
	for (; e.nodeCount();) {
		for (; o = a.dequeue();) rb(e, t, n, o);
		for (; o = i.dequeue();) rb(e, t, n, o);
		if (e.nodeCount()) {
			for (let i = t.length - 2; i > 0; --i) if (o = t[i]?.dequeue(), o) {
				r = r.concat(rb(e, t, n, o, !0) || []);
				break;
			}
		}
	}
	return r;
}
function rb(e, t, n, r, i) {
	let a = [], o = i ? a : void 0;
	return (e.inEdges(r.v) || []).forEach((r) => {
		let o = e.edge(r), s = e.node(r.v);
		i && a.push({
			v: r.v,
			w: r.w
		}), s.out -= o, ab(t, n, s);
	}), (e.outEdges(r.v) || []).forEach((r) => {
		let i = e.edge(r), a = r.w, o = e.node(a);
		o.in -= i, ab(t, n, o);
	}), e.removeNode(r.v), o;
}
function ib(e, t) {
	let n = new Wv(), r = 0, i = 0;
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
	let a = ob(i + r + 3).map(() => new $y()), o = r + 1;
	return n.nodes().forEach((e) => {
		ab(a, o, n.node(e));
	}), {
		graph: n,
		buckets: a,
		zeroIdx: o
	};
}
function ab(e, t, n) {
	var r, i, a;
	n.out ? n.in ? (a = e[n.out - n.in + t]) == null || a.enqueue(n) : (i = e[e.length - 1]) == null || i.enqueue(n) : (r = e[0]) == null || r.enqueue(n);
}
function ob(e) {
	let t = [];
	for (let n = 0; n < e; n++) t.push(n);
	return t;
}
function sb(e) {
	(e.graph().acyclicer === "greedy" ? tb(e, t(e)) : cb(e)).forEach((t) => {
		let n = e.edge(t);
		e.removeEdge(t), n.forwardName = t.name, n.reversed = !0, e.setEdge(t.w, t.v, n, Wy("rev"));
	});
	function t(e) {
		return (t) => e.edge(t).weight;
	}
}
function cb(e) {
	let t = [], n = {}, r = {};
	function i(a) {
		Object.hasOwn(r, a) || (r[a] = !0, n[a] = !0, e.outEdges(a).forEach((e) => {
			Object.hasOwn(n, e.w) ? t.push(e) : i(e.w);
		}), delete n[a]);
	}
	return e.nodes().forEach(i), t;
}
function lb(e) {
	e.edges().forEach((t) => {
		let n = e.edge(t);
		if (n.reversed) {
			e.removeEdge(t);
			let r = n.forwardName;
			delete n.reversed, delete n.forwardName, e.setEdge(t.w, t.v, n, r);
		}
	});
}
function ub(e) {
	e.graph().dummyChains = [], e.edges().forEach((t) => db(e, t));
}
function db(e, t) {
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
	}, l = Oy(e, "edge", u, "_d"), r === c && (u.width = s.width, u.height = s.height, u.dummy = "edge-label", u.labelpos = s.labelpos), e.setEdge(n, l, { weight: s.weight }, o), d === 0 && e.graph().dummyChains.push(l), n = l;
	e.setEdge(n, i, { weight: s.weight }, o);
}
function fb(e) {
	e.graph().dummyChains.forEach((t) => {
		let n = e.node(t), r = n.edgeLabel, i;
		for (e.setEdge(n.edgeObj, r); n.dummy;) i = e.successors(t)[0], e.removeNode(t), r.points.push({
			x: n.x,
			y: n.y
		}), n.dummy === "edge-label" && (r.x = n.x, r.y = n.y, r.width = n.width, r.height = n.height), t = i, n = e.node(t);
	});
}
function pb(e) {
	let t = {};
	function n(r) {
		let i = e.node(r);
		if (Object.hasOwn(t, r)) return i.rank;
		t[r] = !0;
		let a = e.outEdges(r), o = a ? a.map((t) => t == null ? Infinity : n(t.w) - e.edge(t).minlen) : [], s = Ry(Math.min, o);
		return s === Infinity && (s = 0), i.rank = s;
	}
	e.sources().forEach(n);
}
function mb(e, t) {
	return e.node(t.w).rank - e.node(t.v).rank - e.edge(t).minlen;
}
var hb = gb;
function gb(e) {
	let t = new Wv({ directed: !1 }), n = e.nodes();
	if (n.length === 0) throw Error("Graph must have at least one node");
	let r = n[0], i = e.nodeCount();
	t.setNode(r, {});
	let a, o;
	for (; _b(t, e) < i && (a = vb(t, e), a);) o = t.hasNode(a.v) ? mb(e, a) : -mb(e, a), yb(t, e, o);
	return t;
}
function _b(e, t) {
	function n(r) {
		let i = t.nodeEdges(r);
		i && i.forEach((i) => {
			let a = i.v, o = r === a ? i.w : a;
			!e.hasNode(o) && !mb(t, i) && (e.setNode(o, {}), e.setEdge(r, o, {}), n(o));
		});
	}
	return e.nodes().forEach(n), e.nodeCount();
}
function vb(e, t) {
	return t.edges().reduce((n, r) => {
		let i = Infinity;
		return e.hasNode(r.v) !== e.hasNode(r.w) && (i = mb(t, r)), i < n[0] ? [i, r] : n;
	}, [Infinity, null])[1];
}
function yb(e, t, n) {
	e.nodes().forEach((e) => t.node(e).rank += n);
}
var { preorder: bb, postorder: xb } = ny, Sb = Cb;
Cb.initLowLimValues = Db, Cb.initCutValues = wb, Cb.calcCutValue = Eb, Cb.leaveEdge = kb, Cb.enterEdge = Ab, Cb.exchangeEdges = jb;
function Cb(e) {
	e = ky(e), pb(e);
	let t = hb(e);
	Db(t), wb(t, e);
	let n, r;
	for (; n = kb(t);) r = Ab(t, e, n), jb(t, e, n, r);
}
function wb(e, t) {
	let n = xb(e, e.nodes());
	n = n.slice(0, n.length - 1), n.forEach((n) => Tb(e, t, n));
}
function Tb(e, t, n) {
	let r = e.node(n).parent, i = e.edge(n, r);
	i.cutvalue = Eb(e, t, n);
}
function Eb(e, t, n) {
	let r = e.node(n).parent, i = !0, a = t.edge(n, r), o = 0;
	a ||= (i = !1, t.edge(r, n)), o = a.weight;
	let s = t.nodeEdges(n);
	return s && s.forEach((a) => {
		let s = a.v === n, c = s ? a.w : a.v;
		if (c !== r) {
			let r = s === i, l = t.edge(a).weight;
			if (o += r ? l : -l, Nb(e, n, c)) {
				let t = e.edge(n, c).cutvalue;
				o += r ? -t : t;
			}
		}
	}), o;
}
function Db(e, t) {
	arguments.length < 2 && (t = e.nodes()[0]), Ob(e, {}, 1, t);
}
function Ob(e, t, n, r, i) {
	let a = n, o = e.node(r);
	t[r] = !0;
	let s = e.neighbors(r);
	return s && s.forEach((i) => {
		Object.hasOwn(t, i) || (n = Ob(e, t, n, i, r));
	}), o.low = a, o.lim = n++, i ? o.parent = i : delete o.parent, n;
}
function kb(e) {
	return e.edges().find((t) => e.edge(t).cutvalue < 0);
}
function Ab(e, t, n) {
	let r = n.v, i = n.w;
	t.hasEdge(r, i) || (r = n.w, i = n.v);
	let a = e.node(r), o = e.node(i), s = a, c = !1;
	return a.lim > o.lim && (s = o, c = !0), t.edges().filter((t) => c === Pb(e, e.node(t.v), s) && c !== Pb(e, e.node(t.w), s)).reduce((e, n) => mb(t, n) < mb(t, e) ? n : e);
}
function jb(e, t, n, r) {
	let i = n.v, a = n.w;
	e.removeEdge(i, a), e.setEdge(r.v, r.w, {}), Db(e), wb(e, t), Mb(e, t);
}
function Mb(e, t) {
	let n = e.nodes().find((t) => !e.node(t).parent);
	if (!n) return;
	let r = bb(e, [n]);
	r = r.slice(1), r.forEach((n) => {
		let r = e.node(n).parent, i = t.edge(n, r), a = !1;
		i || (i = t.edge(r, n), a = !0), t.node(n).rank = t.node(r).rank + (a ? i.minlen : -i.minlen);
	});
}
function Nb(e, t, n) {
	return e.hasEdge(t, n);
}
function Pb(e, t, n) {
	return n.low <= t.lim && t.lim <= n.lim;
}
var Fb = Ib;
function Ib(e) {
	let t = e.graph().ranker;
	if (typeof t == "function") return t(e);
	switch (t) {
		case "network-simplex":
			zb(e);
			break;
		case "tight-tree":
			Rb(e);
			break;
		case "longest-path":
			Lb(e);
			break;
		case "none": break;
		default: zb(e);
	}
}
var Lb = pb;
function Rb(e) {
	pb(e), hb(e);
}
function zb(e) {
	Sb(e);
}
var Bb = Vb;
function Vb(e) {
	let t = Ub(e);
	e.graph().dummyChains.forEach((n) => {
		let r = e.node(n), i = r.edgeObj, a = Hb(e, t, i.v, i.w), o = a.path, s = a.lca, c = 0, l = o[c], u = !0;
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
function Hb(e, t, n, r) {
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
function Ub(e) {
	let t = {}, n = 0;
	function r(i) {
		let a = n;
		e.children(i).forEach(r), t[i] = {
			low: a,
			lim: n++
		};
	}
	return e.children(Yy).forEach(r), t;
}
function Wb(e) {
	let t = Oy(e, "root", {}, "_root"), n = Kb(e), r = Object.values(n), i = Ry(Math.max, r) - 1, a = 2 * i + 1;
	e.graph().nestingRoot = t, e.edges().forEach((t) => e.edge(t).minlen *= a);
	let o = qb(e) + 1;
	e.children(Yy).forEach((r) => Gb(e, t, a, o, i, n, r)), e.graph().nodeRankFactor = a;
}
function Gb(e, t, n, r, i, a, o) {
	let s = e.children(o);
	if (!s.length) {
		o !== t && e.setEdge(t, o, {
			weight: 0,
			minlen: n
		});
		return;
	}
	let c = Fy(e, "_bt"), l = Fy(e, "_bb"), u = e.node(o);
	e.setParent(c, o), u.borderTop = c, e.setParent(l, o), u.borderBottom = l, s.forEach((s) => {
		Gb(e, t, n, r, i, a, s);
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
function Kb(e) {
	let t = {};
	function n(r, i) {
		let a = e.children(r);
		a && a.length && a.forEach((e) => n(e, i + 1)), t[r] = i;
	}
	return e.children(Yy).forEach((e) => n(e, 1)), t;
}
function qb(e) {
	return e.edges().reduce((t, n) => t + e.edge(n).weight, 0);
}
function Jb(e) {
	let t = e.graph();
	e.removeNode(t.nestingRoot), delete t.nestingRoot, e.edges().forEach((t) => {
		e.edge(t).nestingEdge && e.removeEdge(t);
	});
}
var Yb = Xb;
function Xb(e) {
	function t(n) {
		let r = e.children(n), i = e.node(n);
		if (r.length && r.forEach(t), Object.hasOwn(i, "minRank")) {
			i.borderLeft = [], i.borderRight = [];
			for (let t = i.minRank, r = i.maxRank + 1; t < r; ++t) Zb(e, "borderLeft", "_bl", n, i, t), Zb(e, "borderRight", "_br", n, i, t);
		}
	}
	e.children(Yy).forEach(t);
}
function Zb(e, t, n, r, i, a) {
	let o = {
		width: 0,
		height: 0,
		rank: a,
		borderType: t
	}, s = i[t][a - 1], c = Oy(e, "border", o, n);
	i[t][a] = c, e.setParent(c, r), s && e.setEdge(s, c, { weight: 1 });
}
function Qb(e) {
	let t = e.graph().rankdir?.toLowerCase();
	(t === "lr" || t === "rl") && ex(e);
}
function $b(e) {
	let t = e.graph().rankdir?.toLowerCase();
	(t === "bt" || t === "rl") && nx(e), (t === "lr" || t === "rl") && (ix(e), ex(e));
}
function ex(e) {
	e.nodes().forEach((t) => tx(e.node(t))), e.edges().forEach((t) => tx(e.edge(t)));
}
function tx(e) {
	let t = e.width;
	e.width = e.height, e.height = t;
}
function nx(e) {
	e.nodes().forEach((t) => rx(e.node(t))), e.edges().forEach((t) => {
		var n;
		let r = e.edge(t);
		(n = r.points) == null || n.forEach(rx), Object.hasOwn(r, "y") && rx(r);
	});
}
function rx(e) {
	e.y = -e.y;
}
function ix(e) {
	e.nodes().forEach((t) => ax(e.node(t))), e.edges().forEach((t) => {
		var n;
		let r = e.edge(t);
		(n = r.points) == null || n.forEach(ax), Object.hasOwn(r, "x") && ax(r);
	});
}
function ax(e) {
	let t = e.x;
	e.x = e.y, e.y = t;
}
function ox(e) {
	let t = {}, n = e.nodes().filter((t) => !e.children(t).length), r = n.map((t) => e.node(t).rank), i = Gy(Ry(Math.max, r) + 1).map(() => []);
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
function sx(e, t) {
	let n = 0;
	for (let r = 1; r < t.length; ++r) n += cx(e, t[r - 1], t[r]);
	return n;
}
function cx(e, t, n) {
	let r = Jy(n, n.map((e, t) => t)), i = t.flatMap((t) => {
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
function lx(e, t = []) {
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
function ux(e, t) {
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
	}), dx(Object.values(n).filter((e) => !e.indegree));
}
function dx(e) {
	let t = [];
	function n(e) {
		return (t) => {
			t.merged || (t.barycenter === void 0 || e.barycenter === void 0 || t.barycenter >= e.barycenter) && fx(e, t);
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
	return t.filter((e) => !e.merged).map((e) => Ky(e, [
		"vs",
		"i",
		"barycenter",
		"weight"
	]));
}
function fx(e, t) {
	let n = 0, r = 0;
	e.weight && (n += e.barycenter * e.weight, r += e.weight), t.weight && (n += t.barycenter * t.weight, r += t.weight), e.vs = t.vs.concat(e.vs), e.barycenter = n / r, e.weight = r, e.i = Math.min(t.i, e.i), t.merged = !0;
}
function px(e, t) {
	let n = By(e, (e) => Object.hasOwn(e, "barycenter")), r = n.lhs, i = n.rhs.sort((e, t) => t.i - e.i), a = [], o = 0, s = 0, c = 0;
	r.sort(hx(!!t)), c = mx(a, i, c), r.forEach((e) => {
		c += e.vs.length, a.push(e.vs), o += e.barycenter * e.weight, s += e.weight, c = mx(a, i, c);
	});
	let l = { vs: a.flat(1) };
	return s && (l.barycenter = o / s, l.weight = s), l;
}
function mx(e, t, n) {
	let r;
	for (; t.length && (r = t[t.length - 1]).i <= n;) t.pop(), e.push(r.vs), n++;
	return n;
}
function hx(e) {
	return (t, n) => t.barycenter < n.barycenter ? -1 : t.barycenter > n.barycenter ? 1 : e ? n.i - t.i : t.i - n.i;
}
function gx(e, t, n, r) {
	let i = e.children(t), a = e.node(t), o = a ? a.borderLeft : void 0, s = a ? a.borderRight : void 0, c = {};
	o && (i = i.filter((e) => e !== o && e !== s));
	let l = lx(e, i);
	l.forEach((t) => {
		if (e.children(t.v).length) {
			let i = gx(e, t.v, n, r);
			c[t.v] = i, Object.hasOwn(i, "barycenter") && vx(t, i);
		}
	});
	let u = ux(l, n);
	_x(u, c);
	let d = px(u, r);
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
function _x(e, t) {
	e.forEach((e) => {
		e.vs = e.vs.flatMap((e) => t[e] ? t[e].vs : e);
	});
}
function vx(e, t) {
	e.barycenter === void 0 ? (e.barycenter = t.barycenter, e.weight = t.weight) : (e.barycenter = (e.barycenter * e.weight + t.barycenter * t.weight) / (e.weight + t.weight), e.weight += t.weight);
}
function yx(e, t, n, r) {
	r ||= e.nodes();
	let i = bx(e), a = new Wv({ compound: !0 }).setGraph({ root: i }).setDefaultNodeLabel((t) => e.node(t));
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
function bx(e) {
	let t;
	for (; e.hasNode(t = Wy("_root")););
	return t;
}
function xx(e, t, n) {
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
function Sx(e, t = {}) {
	if (typeof t.customOrder == "function") {
		t.customOrder(e, Sx);
		return;
	}
	let n = zy(e), r = Cx(e, Gy(1, n + 1), "inEdges"), i = Cx(e, Gy(n - 1, -1, -1), "outEdges"), a = ox(e);
	if (Tx(e, a), t.disableOptimalOrderHeuristic) return;
	let o = Infinity, s, c = t.constraints || [];
	for (let t = 0, n = 0; n < 4; ++t, ++n) {
		wx(t % 2 ? r : i, t % 4 >= 2, c), a = My(e);
		let l = sx(e, a);
		l < o ? (n = 0, s = Object.assign({}, a), o = l) : l === o && (s = structuredClone(a));
	}
	Tx(e, s);
}
function Cx(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i = (e, t) => {
		r.has(e) || r.set(e, []), r.get(e).push(t);
	};
	for (let t of e.nodes()) {
		let n = e.node(t);
		if (typeof n.rank == "number" && i(n.rank, t), typeof n.minRank == "number" && typeof n.maxRank == "number") for (let e = n.minRank; e <= n.maxRank; e++) e !== n.rank && i(e, t);
	}
	return t.map(function(t) {
		return yx(e, t, n, r.get(t) || []);
	});
}
function wx(e, t, n) {
	let r = new Wv();
	e.forEach(function(e) {
		n.forEach((e) => r.setEdge(e.left, e.right));
		let i = e.graph().root, a = gx(e, i, r, t);
		a.vs.forEach((t, n) => e.node(t).order = n), xx(e, r, a.vs);
	});
}
function Tx(e, t) {
	Object.values(t).forEach((t) => t.forEach((t, n) => e.node(t).order = n));
}
function Ex(e, t) {
	let n = {};
	function r(t, r) {
		let i = 0, a = 0, o = t.length, s = r[r.length - 1];
		return r.forEach((t, c) => {
			let l = Ox(e, t), u = l ? e.node(l).order : o;
			(l || t === s) && (r.slice(a, c + 1).forEach((t) => {
				let r = e.predecessors(t);
				r && r.forEach((r) => {
					let a = e.node(r), o = a.order;
					(o < i || u < o) && !(a.dummy && e.node(t).dummy) && kx(n, r, t);
				});
			}), a = c + 1, i = u);
		}), r;
	}
	return t.length && t.reduce(r), n;
}
function Dx(e, t) {
	let n = {};
	function r(t, r, i, a, o) {
		Gy(r, i).forEach((r) => {
			let i = t[r];
			if (i !== void 0 && e.node(i).dummy) {
				let t = e.predecessors(i);
				t && t.forEach((t) => {
					if (t === void 0) return;
					let r = e.node(t);
					r.dummy && (r.order < a || r.order > o) && kx(n, t, i);
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
function Ox(e, t) {
	if (e.node(t).dummy) {
		let n = e.predecessors(t);
		if (n) return n.find((t) => e.node(t).dummy);
	}
}
function kx(e, t, n) {
	if (t > n) {
		let e = t;
		t = n, n = e;
	}
	let r = e[t];
	r || (e[t] = r = {}), r[n] = !0;
}
function Ax(e, t, n) {
	if (t > n) {
		let e = t;
		t = n, n = e;
	}
	let r = e[t];
	return r !== void 0 && Object.hasOwn(r, n);
}
function jx(e, t, n, r) {
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
					if (l !== void 0 && a[e] === e && t < l && !Ax(n, e, c)) {
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
function Mx(e, t, n, r, i = !1) {
	let a = {}, o = Nx(e, t, n, i), s = i ? "borderLeft" : "borderRight";
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
function Nx(e, t, n, r) {
	let i = new Wv(), a = e.graph(), o = Rx(a.nodesep, a.edgesep, r);
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
function Px(e, t) {
	return Object.values(t).reduce((t, n) => {
		let r = -Infinity, i = Infinity;
		Object.entries(n).forEach(([t, n]) => {
			let a = zx(e, t) / 2;
			r = Math.max(n + a, r), i = Math.min(n - a, i);
		});
		let a = r - i;
		return a < t[0] && (t = [a, n]), t;
	}, [Infinity, null])[1];
}
function Fx(e, t) {
	let n = Object.values(t), r = Ry(Math.min, n), i = Ry(Math.max, n);
	["u", "d"].forEach((n) => {
		["l", "r"].forEach((a) => {
			let o = n + a, s = e[o];
			if (!s || s === t) return;
			let c = Object.values(s), l = r - Ry(Math.min, c);
			a !== "l" && (l = i - Ry(Math.max, c)), l && (e[o] = qy(s, (e) => e + l));
		});
	});
}
function Ix(e, t = void 0) {
	let n = e.ul;
	return n ? qy(n, (n, r) => {
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
function Lx(e) {
	let t = My(e), n = Object.assign(Ex(e, t), Dx(e, t)), r = {}, i;
	return ["u", "d"].forEach((a) => {
		i = a === "u" ? t : Object.values(t).reverse(), ["l", "r"].forEach((t) => {
			t === "r" && (i = i.map((e) => Object.values(e).reverse()));
			let o = jx(e, i, n, (t) => (a === "u" ? e.predecessors(t) : e.successors(t)) || []), s = Mx(e, i, o.root, o.align, t === "r");
			t === "r" && (s = qy(s, (e) => -e)), r[a + t] = s;
		});
	}), Fx(r, Px(e, r)), Ix(r, e.graph().align);
}
function Rx(e, t, n) {
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
function zx(e, t) {
	return e.node(t).width;
}
function Bx(e) {
	e = Ay(e), Vx(e), Object.entries(Lx(e)).forEach(([t, n]) => e.node(t).x = n);
}
function Vx(e) {
	let t = My(e), n = e.graph(), r = n.ranksep, i = n.rankalign, a = 0;
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
function Hx(e, t = {}) {
	let n = t.debugTiming ? Vy : Hy;
	return n("layout", () => {
		let r = n("  buildLayoutGraph", () => $x(e));
		return n("  runLayout", () => Ux(r, n, t)), n("  updateInputGraph", () => Wx(e, r)), r;
	});
}
function Ux(e, t, n) {
	t("    makeSpaceForEdgeLabels", () => eS(e)), t("    removeSelfEdges", () => lS(e)), t("    acyclic", () => sb(e)), t("    nestingGraph.run", () => Wb(e)), t("    rank", () => Fb(Ay(e))), t("    injectEdgeLabelProxies", () => tS(e)), t("    removeEmptyRanks", () => Py(e)), t("    nestingGraph.cleanup", () => Jb(e)), t("    normalizeRanks", () => Ny(e)), t("    assignRankMinMax", () => nS(e)), t("    removeEdgeLabelProxies", () => rS(e)), t("    normalize.run", () => ub(e)), t("    parentDummyChains", () => Bb(e)), t("    addBorderSegments", () => Yb(e)), t("    order", () => Sx(e, n)), t("    insertSelfEdges", () => uS(e)), t("    adjustCoordinateSystem", () => Qb(e)), t("    position", () => Bx(e)), t("    positionSelfEdges", () => dS(e)), t("    removeBorderNodes", () => cS(e)), t("    normalize.undo", () => fb(e)), t("    fixupEdgeLabelCoords", () => oS(e)), t("    undoCoordinateSystem", () => $b(e)), t("    translateGraph", () => iS(e)), t("    assignNodeIntersects", () => aS(e)), t("    reversePoints", () => sS(e)), t("    acyclic.undo", () => lb(e));
}
function Wx(e, t) {
	e.nodes().forEach((n) => {
		let r = e.node(n), i = t.node(n);
		r && (r.x = i.x, r.y = i.y, r.order = i.order, r.rank = i.rank, t.children(n).length && (r.width = i.width, r.height = i.height));
	}), e.edges().forEach((n) => {
		let r = e.edge(n), i = t.edge(n);
		r.points = i.points, Object.hasOwn(i, "x") && (r.x = i.x, r.y = i.y);
	}), e.graph().width = t.graph().width, e.graph().height = t.graph().height;
}
var Gx = [
	"nodesep",
	"edgesep",
	"ranksep",
	"marginx",
	"marginy"
], Kx = {
	ranksep: 50,
	edgesep: 20,
	nodesep: 50,
	rankdir: "TB",
	rankalign: "center"
}, qx = [
	"acyclicer",
	"ranker",
	"rankdir",
	"align",
	"rankalign"
], Jx = [
	"width",
	"height",
	"rank"
], Yx = {
	width: 0,
	height: 0
}, Xx = [
	"minlen",
	"weight",
	"width",
	"height",
	"labeloffset"
], Zx = {
	minlen: 1,
	weight: 1,
	width: 0,
	height: 0,
	labeloffset: 10,
	labelpos: "r"
}, Qx = ["labelpos"];
function $x(e) {
	let t = new Wv({
		multigraph: !0,
		compound: !0
	}), n = pS(e.graph());
	return t.setGraph(Object.assign({}, Kx, fS(n, Gx), Ky(n, qx))), e.nodes().forEach((n) => {
		let r = fS(pS(e.node(n)), Jx);
		Object.keys(Yx).forEach((e) => {
			r[e] === void 0 && (r[e] = Yx[e]);
		}), t.setNode(n, r);
		let i = e.parent(n);
		i !== void 0 && t.setParent(n, i);
	}), e.edges().forEach((n) => {
		let r = pS(e.edge(n));
		t.setEdge(n, Object.assign({}, Zx, fS(r, Xx), Ky(r, Qx)));
	}), t;
}
function eS(e) {
	let t = e.graph();
	t.ranksep /= 2, e.edges().forEach((n) => {
		let r = e.edge(n);
		r.minlen *= 2, r.labelpos.toLowerCase() !== "c" && (t.rankdir === "TB" || t.rankdir === "BT" ? r.width += r.labeloffset : r.height += r.labeloffset);
	});
}
function tS(e) {
	e.edges().forEach((t) => {
		let n = e.edge(t);
		if (n.width && n.height) {
			let n = e.node(t.v);
			Oy(e, "edge-proxy", {
				rank: (e.node(t.w).rank - n.rank) / 2 + n.rank,
				e: t
			}, "_ep");
		}
	});
}
function nS(e) {
	let t = 0;
	e.nodes().forEach((n) => {
		let r = e.node(n);
		r.borderTop && (r.minRank = e.node(r.borderTop).rank, r.maxRank = e.node(r.borderBottom).rank, t = Math.max(t, r.maxRank));
	}), e.graph().maxRank = t;
}
function rS(e) {
	e.nodes().forEach((t) => {
		let n = e.node(t);
		if (n.dummy === "edge-proxy") {
			let r = n;
			e.edge(r.e).labelRank = n.rank, e.removeNode(t);
		}
	});
}
function iS(e) {
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
function aS(e) {
	e.edges().forEach((t) => {
		let n = e.edge(t), r = e.node(t.v), i = e.node(t.w), a, o;
		n.points ? (a = n.points[0], o = n.points[n.points.length - 1]) : (n.points = [], a = i, o = r), n.points.unshift(jy(r, a)), n.points.push(jy(i, o));
	});
}
function oS(e) {
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
function sS(e) {
	e.edges().forEach((t) => {
		let n = e.edge(t);
		n.reversed && n.points.reverse();
	});
}
function cS(e) {
	e.nodes().forEach((t) => {
		if (e.children(t).length) {
			let n = e.node(t), r = e.node(n.borderTop), i = e.node(n.borderBottom), a = e.node(n.borderLeft[n.borderLeft.length - 1]), o = e.node(n.borderRight[n.borderRight.length - 1]);
			n.width = Math.abs(o.x - a.x), n.height = Math.abs(i.y - r.y), n.x = a.x + n.width / 2, n.y = r.y + n.height / 2;
		}
	}), e.nodes().forEach((t) => {
		e.node(t).dummy === "border" && e.removeNode(t);
	});
}
function lS(e) {
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
function uS(e) {
	My(e).forEach((t) => {
		let n = 0;
		t.forEach((t, r) => {
			let i = e.node(t);
			i.order = r + n, (i.selfEdges || []).forEach((t) => {
				Oy(e, "selfedge", {
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
function dS(e) {
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
function fS(e, t) {
	return qy(Ky(e, t), Number);
}
function pS(e) {
	let t = {};
	return e && Object.entries(e).forEach(([e, n]) => {
		typeof e == "string" && (e = e.toLowerCase()), t[e] = n;
	}), t;
}
//#endregion
//#region src/erdDiagram.ts
var mS = 160, hS = 50, gS = 8, _S = 24, vS = {
	child: {
		fill: "#dae8fc",
		stroke: "#6c8ebf"
	},
	primary: {
		fill: "#d5e8d4",
		stroke: "#82b366"
	}
}, yS = "dpuse-tool-d3-erd-arrow";
function bS(e, t, n = {}) {
	let r = n.nodeWidth ?? mS, i = n.nodeHeight ?? hS, a = n.padding ?? gS, o = n.selfEdgeSize ?? _S, s = n.nodeColors ?? vS;
	function c() {
		N(t).selectAll("svg").remove();
		let n = new Vv.Graph();
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
		Hx(n);
		let { width: c = 0, height: l = 0 } = n.graph(), u = c + a * 2, d = l + a * 2, f = N(t).append("svg").attr("viewBox", `0 0 ${String(u)} ${String(d)}`).attr("width", u).attr("height", d), p = f.append("g").attr("transform", `translate(${String(a)}, ${String(a)})`);
		f.append("defs").append("marker").attr("id", yS).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", "auto-start-reverse").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("fill", "#6c8ebf");
		let m = jm().x((e) => e.x).y((e) => e.y).curve(Pm);
		p.append("g").attr("fill", "none").attr("stroke", "#6c8ebf").attr("stroke-width", 1.5).selectAll("path").data(n.edges()).join("path").attr("marker-end", `url(#${yS})`).attr("d", (e) => e.v === e.w ? xS(n.node(e.v), o) : m(n.edge(e).points ?? []) ?? "");
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
function xS(e, t) {
	let n = (e.x ?? 0) + e.width / 2, r = n + t, i = (e.y ?? 0) - e.height / 4, a = (e.y ?? 0) + e.height / 4;
	return `M ${String(n)} ${String(i)} C ${String(r)} ${String(i)}, ${String(r)} ${String(a)}, ${String(n)} ${String(a)}`;
}
//#endregion
//#region node_modules/d3-force/src/center.js
function SS(e, t) {
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
function CS(e) {
	let t = +this._x.call(null, e), n = +this._y.call(null, e);
	return wS(this.cover(t, n), t, n, e);
}
function wS(e, t, n, r) {
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
function TS(e) {
	var t, n, r = e.length, i, a, o = Array(r), s = Array(r), c = Infinity, l = Infinity, u = -Infinity, d = -Infinity;
	for (n = 0; n < r; ++n) isNaN(i = +this._x.call(null, t = e[n])) || isNaN(a = +this._y.call(null, t)) || (o[n] = i, s[n] = a, i < c && (c = i), i > u && (u = i), a < l && (l = a), a > d && (d = a));
	if (c > u || l > d) return this;
	for (this.cover(c, l).cover(u, d), n = 0; n < r; ++n) wS(this, o[n], s[n], e[n]);
	return this;
}
//#endregion
//#region node_modules/d3-quadtree/src/cover.js
function ES(e, t) {
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
function DS() {
	var e = [];
	return this.visit(function(t) {
		if (!t.length) do
			e.push(t.data);
		while (t = t.next);
	}), e;
}
//#endregion
//#region node_modules/d3-quadtree/src/extent.js
function OS(e) {
	return arguments.length ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
//#endregion
//#region node_modules/d3-quadtree/src/quad.js
function kS(e, t, n, r, i) {
	this.node = e, this.x0 = t, this.y0 = n, this.x1 = r, this.y1 = i;
}
//#endregion
//#region node_modules/d3-quadtree/src/find.js
function AS(e, t, n) {
	var r, i = this._x0, a = this._y0, o, s, c, l, u = this._x1, d = this._y1, f = [], p = this._root, m, h;
	for (p && f.push(new kS(p, i, a, u, d)), n == null ? n = Infinity : (i = e - n, a = t - n, u = e + n, d = t + n, n *= n); m = f.pop();) if (!(!(p = m.node) || (o = m.x0) > u || (s = m.y0) > d || (c = m.x1) < i || (l = m.y1) < a)) if (p.length) {
		var g = (o + c) / 2, _ = (s + l) / 2;
		f.push(new kS(p[3], g, _, c, l), new kS(p[2], o, _, g, l), new kS(p[1], g, s, c, _), new kS(p[0], o, s, g, _)), (h = (t >= _) << 1 | e >= g) && (m = f[f.length - 1], f[f.length - 1] = f[f.length - 1 - h], f[f.length - 1 - h] = m);
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
function jS(e) {
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
function MS(e) {
	for (var t = 0, n = e.length; t < n; ++t) this.remove(e[t]);
	return this;
}
//#endregion
//#region node_modules/d3-quadtree/src/root.js
function NS() {
	return this._root;
}
//#endregion
//#region node_modules/d3-quadtree/src/size.js
function PS() {
	var e = 0;
	return this.visit(function(t) {
		if (!t.length) do
			++e;
		while (t = t.next);
	}), e;
}
//#endregion
//#region node_modules/d3-quadtree/src/visit.js
function FS(e) {
	var t = [], n, r = this._root, i, a, o, s, c;
	for (r && t.push(new kS(r, this._x0, this._y0, this._x1, this._y1)); n = t.pop();) if (!e(r = n.node, a = n.x0, o = n.y0, s = n.x1, c = n.y1) && r.length) {
		var l = (a + s) / 2, u = (o + c) / 2;
		(i = r[3]) && t.push(new kS(i, l, u, s, c)), (i = r[2]) && t.push(new kS(i, a, u, l, c)), (i = r[1]) && t.push(new kS(i, l, o, s, u)), (i = r[0]) && t.push(new kS(i, a, o, l, u));
	}
	return this;
}
//#endregion
//#region node_modules/d3-quadtree/src/visitAfter.js
function IS(e) {
	var t = [], n = [], r;
	for (this._root && t.push(new kS(this._root, this._x0, this._y0, this._x1, this._y1)); r = t.pop();) {
		var i = r.node;
		if (i.length) {
			var a, o = r.x0, s = r.y0, c = r.x1, l = r.y1, u = (o + c) / 2, d = (s + l) / 2;
			(a = i[0]) && t.push(new kS(a, o, s, u, d)), (a = i[1]) && t.push(new kS(a, u, s, c, d)), (a = i[2]) && t.push(new kS(a, o, d, u, l)), (a = i[3]) && t.push(new kS(a, u, d, c, l));
		}
		n.push(r);
	}
	for (; r = n.pop();) e(r.node, r.x0, r.y0, r.x1, r.y1);
	return this;
}
//#endregion
//#region node_modules/d3-quadtree/src/x.js
function LS(e) {
	return e[0];
}
function RS(e) {
	return arguments.length ? (this._x = e, this) : this._x;
}
//#endregion
//#region node_modules/d3-quadtree/src/y.js
function zS(e) {
	return e[1];
}
function BS(e) {
	return arguments.length ? (this._y = e, this) : this._y;
}
//#endregion
//#region node_modules/d3-quadtree/src/quadtree.js
function VS(e, t, n) {
	var r = new HS(t ?? LS, n ?? zS, NaN, NaN, NaN, NaN);
	return e == null ? r : r.addAll(e);
}
function HS(e, t, n, r, i, a) {
	this._x = e, this._y = t, this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = a, this._root = void 0;
}
function US(e) {
	for (var t = { data: e.data }, n = t; e = e.next;) n = n.next = { data: e.data };
	return t;
}
var WS = VS.prototype = HS.prototype;
WS.copy = function() {
	var e = new HS(this._x, this._y, this._x0, this._y0, this._x1, this._y1), t = this._root, n, r;
	if (!t) return e;
	if (!t.length) return e._root = US(t), e;
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
	}) : t.target[i] = US(r));
	return e;
}, WS.add = CS, WS.addAll = TS, WS.cover = ES, WS.data = DS, WS.extent = OS, WS.find = AS, WS.remove = jS, WS.removeAll = MS, WS.root = NS, WS.size = PS, WS.visit = FS, WS.visitAfter = IS, WS.x = RS, WS.y = BS;
//#endregion
//#region node_modules/d3-force/src/constant.js
function GS(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-force/src/jiggle.js
function KS(e) {
	return (e() - .5) * 1e-6;
}
//#endregion
//#region node_modules/d3-force/src/link.js
function qS(e) {
	return e.index;
}
function JS(e, t) {
	var n = e.get(t);
	if (!n) throw Error("node not found: " + t);
	return n;
}
function YS(e) {
	var t = qS, n = d, r, i = GS(30), a, o, s, c, l, u = 1;
	e ??= [];
	function d(e) {
		return 1 / Math.min(s[e.source.index], s[e.target.index]);
	}
	function f(t) {
		for (var n = 0, i = e.length; n < u; ++n) for (var o = 0, s, d, f, p, m, h, g; o < i; ++o) s = e[o], d = s.source, f = s.target, p = f.x + f.vx - d.x - d.vx || KS(l), m = f.y + f.vy - d.y - d.vy || KS(l), h = Math.sqrt(p * p + m * m), h = (h - a[o]) / h * t * r[o], p *= h, m *= h, f.vx -= p * (g = c[o]), f.vy -= m * g, d.vx += p * (g = 1 - g), d.vy += m * g;
	}
	function p() {
		if (o) {
			var n, i = o.length, l = e.length, u = new Map(o.map((e, n) => [t(e, n, o), e])), d;
			for (n = 0, s = Array(i); n < l; ++n) d = e[n], d.index = n, typeof d.source != "object" && (d.source = JS(u, d.source)), typeof d.target != "object" && (d.target = JS(u, d.target)), s[d.source.index] = (s[d.source.index] || 0) + 1, s[d.target.index] = (s[d.target.index] || 0) + 1;
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
		return arguments.length ? (n = typeof e == "function" ? e : GS(+e), m(), f) : n;
	}, f.distance = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : GS(+e), h(), f) : i;
	}, f;
}
//#endregion
//#region node_modules/d3-force/src/lcg.js
var XS = 1664525, ZS = 1013904223, QS = 4294967296;
function $S() {
	let e = 1;
	return () => (e = (XS * e + ZS) % QS) / QS;
}
//#endregion
//#region node_modules/d3-force/src/simulation.js
function eC(e) {
	return e.x;
}
function tC(e) {
	return e.y;
}
var nC = 10, rC = Math.PI * (3 - Math.sqrt(5));
function iC(e) {
	var t, n = 1, r = .001, i = 1 - r ** (1 / 300), a = 0, o = .6, s = /* @__PURE__ */ new Map(), c = Rd(d), l = _s("tick", "end"), u = $S();
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
				var i = nC * Math.sqrt(.5 + t), a = t * rC;
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
function aC() {
	var e, t, n, r, i = GS(-30), a, o = 1, s = Infinity, c = .81;
	function l(n) {
		var i, a = e.length, o = VS(e, eC, tC).visitAfter(d);
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
		if (p * p / c < m) return m < s && (d === 0 && (d = KS(n), m += d * d), f === 0 && (f = KS(n), m += f * f), m < o && (m = Math.sqrt(o * m)), t.vx += d * e.value * r / m, t.vy += f * e.value * r / m), !0;
		if (!(e.length || m >= s)) {
			(e.data !== t || e.next) && (d === 0 && (d = KS(n), m += d * d), f === 0 && (f = KS(n), m += f * f), m < o && (m = Math.sqrt(o * m)));
			do
				e.data !== t && (p = a[e.data.index] * r / m, t.vx += d * p, t.vy += f * p);
			while (e = e.next);
		}
	}
	return l.initialize = function(t, r) {
		e = t, n = r, u();
	}, l.strength = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : GS(+e), u(), l) : i;
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
var oC = -300, sC = 100, cC = 640, lC = 480, uC = 180, dC = 20, fC = 22, pC = {
	linkStroke: "#9ca3af",
	nodeFill: "#2563eb",
	nodeFillHovered: "#3b82f6",
	nodeFillSelected: "#f59e0b",
	nodeStroke: "#1e40af",
	nodeStrokeHovered: "#1d4ed8",
	nodeStrokeSelected: "#b45309",
	nodeText: "#ffffff"
};
function mC(e, t, n = {}) {
	let r = t.clientWidth || cC, i = t.clientHeight || lC, a = e.nodes.map((e) => ({ ...e })), o = e.links.map((e) => ({ ...e })), s = Math.min(r, i) * .22;
	for (let [e, t] of a.entries()) {
		let n = e / a.length * Math.PI * 2;
		t.x = r / 2 + Math.cos(n) * s, t.y = i / 2 + Math.sin(n) * s;
	}
	let c = iC(a).force("link", YS(o).id((e) => e.id).distance(n.linkDistance ?? sC)).force("charge", aC().strength(n.chargeStrength ?? oC)).force("center", SS(r / 2, i / 2)), l = N(t).append("svg").attr("width", r).attr("height", i).attr("viewBox", `0 0 ${String(r)} ${String(i)}`).style("touch-action", "none"), u = l.append("g"), d = u.selectAll("line").data(o).join("line").attr("stroke", pC.linkStroke).attr("stroke-width", 2), f = u.selectAll("g").data(a).join("g").style("cursor", "pointer");
	f.append("circle").attr("r", dC).attr("fill", pC.nodeFill).attr("stroke", pC.nodeStroke).attr("stroke-width", 2), f.append("text").text((e) => e.id).attr("text-anchor", "middle").attr("dy", 4).attr("fill", pC.nodeText);
	let p = null, m = null, h = () => {
		f.selectAll("circle").attr("fill", (e) => e.id === p ? pC.nodeFillSelected : e.id === m ? pC.nodeFillHovered : pC.nodeFill).attr("stroke", (e) => e.id === p ? pC.nodeStrokeSelected : e.id === m ? pC.nodeStrokeHovered : pC.nodeStroke).attr("stroke-width", (e) => e.id === p ? 3 : 2).attr("r", (e) => e.id === p || e.id === m ? fC : dC);
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
	let g = Fv().scaleExtent([.5, 4]).on("zoom", (e) => {
		u.attr("transform", e.transform.toString());
	});
	l.call(g).on("dblclick.zoom", null);
	let _ = (e, t) => typeof e == "object" ? e[t] ?? 0 : 0, v = () => {
		d.attr("x1", (e) => _(e.source, "x")).attr("y1", (e) => _(e.source, "y")).attr("x2", (e) => _(e.target, "x")).attr("y2", (e) => _(e.target, "y")), f.attr("transform", (e) => `translate(${String(e.x ?? 0)},${String(e.y ?? 0)})`);
	};
	c.stop(), f.call(Ps().on("start", (e, t) => {
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
			let e = t.clientWidth || cC, n = t.clientHeight || lC;
			l.attr("width", e).attr("height", n).attr("viewBox", `0 0 ${String(e)} ${String(n)}`), c.force("center", SS(e / 2, n / 2));
		},
		svg: y,
		triggerAutoLayout: () => {
			c.alpha(1);
			for (let e = 0; e < uC; e += 1) c.tick();
			c.stop(), v();
		}
	};
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/ascending.js
function hC(e, t) {
	return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/descending.js
function gC(e, t) {
	return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/bisector.js
function _C(e) {
	let t, n, r;
	e.length === 2 ? (t = e === hC || e === gC ? e : vC, n = e, r = e) : (t = hC, n = (t, n) => hC(e(t), n), r = (t, n) => e(t) - n);
	function i(e, r, i = 0, a = e.length) {
		if (i < a) {
			if (t(r, r) !== 0) return a;
			do {
				let t = i + a >>> 1;
				n(e[t], r) < 0 ? i = t + 1 : a = t;
			} while (i < a);
		}
		return i;
	}
	function a(e, r, i = 0, a = e.length) {
		if (i < a) {
			if (t(r, r) !== 0) return a;
			do {
				let t = i + a >>> 1;
				n(e[t], r) <= 0 ? i = t + 1 : a = t;
			} while (i < a);
		}
		return i;
	}
	function o(e, t, n = 0, a = e.length) {
		let o = i(e, t, n, a - 1);
		return o > n && r(e[o - 1], t) > -r(e[o], t) ? o - 1 : o;
	}
	return {
		left: i,
		center: o,
		right: a
	};
}
function vC() {
	return 0;
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/number.js
function* yC(e, t) {
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
	else {
		let n = -1;
		for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
	}
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/cross.js
function bC(e) {
	return e.length | 0;
}
function xC(e) {
	return !(e > 0);
}
function SC(e) {
	return typeof e != "object" || "length" in e ? e : Array.from(e);
}
function CC(e) {
	return (t) => e(...t);
}
function wC(...e) {
	let t = typeof e[e.length - 1] == "function" && CC(e.pop());
	e = e.map(SC);
	let n = e.map(bC), r = e.length - 1, i = Array(r + 1).fill(0), a = [];
	if (r < 0 || n.some(xC)) return a;
	for (;;) {
		a.push(i.map((t, n) => e[n][t]));
		let o = r;
		for (; ++i[o] === n[o];) {
			if (o === 0) return t ? a.map(t) : a;
			i[o--] = 0;
		}
	}
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/cumsum.js
function TC(e, t) {
	var n = 0, r = 0;
	return Float64Array.from(e, t === void 0 ? (e) => n += +e || 0 : (i) => n += +t(i, r++, e) || 0);
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/variance.js
function EC(e, t) {
	let n = 0, r, i = 0, a = 0;
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (r = t - i, i += r / ++n, a += r * (t - i));
	else {
		let o = -1;
		for (let s of e) (s = t(s, ++o, e)) != null && (s = +s) >= s && (r = s - i, i += r / ++n, a += r * (s - i));
	}
	if (n > 1) return a / (n - 1);
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/deviation.js
function DC(e, t) {
	let n = EC(e, t);
	return n && Math.sqrt(n);
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/extent.js
function OC(e, t) {
	let n, r;
	if (t === void 0) for (let t of e) t != null && (n === void 0 ? t >= t && (n = r = t) : (n > t && (n = t), r < t && (r = t)));
	else {
		let i = -1;
		for (let a of e) (a = t(a, ++i, e)) != null && (n === void 0 ? a >= a && (n = r = a) : (n > a && (n = a), r < a && (r = a)));
	}
	return [n, r];
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/identity.js
function kC(e) {
	return e;
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/group.js
function AC(e, ...t) {
	return NC(e, kC, kC, t);
}
function jC(e, t, ...n) {
	return NC(e, kC, t, n);
}
function MC(e, t, ...n) {
	return NC(e, Array.from, t, n);
}
function NC(e, t, n, r) {
	return (function e(i, a) {
		if (a >= r.length) return n(i);
		let o = new Rr(), s = r[a++], c = -1;
		for (let e of i) {
			let t = s(e, ++c, i), n = o.get(t);
			n ? n.push(e) : o.set(t, [e]);
		}
		for (let [t, n] of o) o.set(t, e(n, a));
		return t(o);
	})(e, 0);
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/permute.js
function PC(e, t) {
	return Array.from(t, (t) => e[t]);
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/sort.js
function FC(e, ...t) {
	if (typeof e[Symbol.iterator] != "function") throw TypeError("values is not iterable");
	e = Array.from(e);
	let [n] = t;
	if (n && n.length !== 2 || t.length > 1) {
		let r = Uint32Array.from(e, (e, t) => t);
		return t.length > 1 ? (t = t.map((t) => e.map(t)), r.sort((e, n) => {
			for (let r of t) {
				let t = LC(r[e], r[n]);
				if (t) return t;
			}
		})) : (n = e.map(n), r.sort((e, t) => LC(n[e], n[t]))), PC(e, r);
	}
	return e.sort(IC(n));
}
function IC(e = hC) {
	if (e === hC) return LC;
	if (typeof e != "function") throw TypeError("compare is not a function");
	return (t, n) => {
		let r = e(t, n);
		return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
	};
}
function LC(e, t) {
	return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : +(e > t));
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/groupSort.js
function RC(e, t, n) {
	return (t.length === 2 ? FC(AC(e, n), (([e, n], [r, i]) => t(n, i) || hC(e, r))) : FC(jC(e, t, n), (([e, t], [n, r]) => hC(t, r) || hC(e, n)))).map(([e]) => e);
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/ticks.js
var zC = Math.sqrt(50), BC = Math.sqrt(10), VC = Math.sqrt(2);
function HC(e, t, n) {
	let r = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / 10 ** i, o = a >= zC ? 10 : a >= BC ? 5 : a >= VC ? 2 : 1, s, c, l;
	return i < 0 ? (l = 10 ** -i / o, s = Math.round(e * l), c = Math.round(t * l), s / l < e && ++s, c / l > t && --c, l = -l) : (l = 10 ** i * o, s = Math.round(e / l), c = Math.round(t / l), s * l < e && ++s, c * l > t && --c), c < s && .5 <= n && n < 2 ? HC(e, t, n * 2) : [
		s,
		c,
		l
	];
}
function UC(e, t, n) {
	if (t = +t, e = +e, n = +n, !(n > 0)) return [];
	if (e === t) return [e];
	let r = t < e, [i, a, o] = r ? HC(t, e, n) : HC(e, t, n);
	if (!(a >= i)) return [];
	let s = a - i + 1, c = Array(s);
	if (r) if (o < 0) for (let e = 0; e < s; ++e) c[e] = (a - e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (a - e) * o;
	else if (o < 0) for (let e = 0; e < s; ++e) c[e] = (i + e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (i + e) * o;
	return c;
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/max.js
function WC(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n < t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n < i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/maxIndex.js
function GC(e, t) {
	let n, r = -1, i = -1;
	if (t === void 0) for (let t of e) ++i, t != null && (n < t || n === void 0 && t >= t) && (n = t, r = i);
	else for (let a of e) (a = t(a, ++i, e)) != null && (n < a || n === void 0 && a >= a) && (n = a, r = i);
	return r;
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/min.js
function KC(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n > t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n > i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/minIndex.js
function qC(e, t) {
	let n, r = -1, i = -1;
	if (t === void 0) for (let t of e) ++i, t != null && (n > t || n === void 0 && t >= t) && (n = t, r = i);
	else for (let a of e) (a = t(a, ++i, e)) != null && (n > a || n === void 0 && a >= a) && (n = a, r = i);
	return r;
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/quickselect.js
function JC(e, t, n = 0, r = Infinity, i) {
	if (t = Math.floor(t), n = Math.floor(Math.max(0, n)), r = Math.floor(Math.min(e.length - 1, r)), !(n <= t && t <= r)) return e;
	for (i = i === void 0 ? LC : IC(i); r > n;) {
		if (r - n > 600) {
			let a = r - n + 1, o = t - n + 1, s = Math.log(a), c = .5 * Math.exp(2 * s / 3), l = .5 * Math.sqrt(s * c * (a - c) / a) * (o - a / 2 < 0 ? -1 : 1), u = Math.max(n, Math.floor(t - o * c / a + l)), d = Math.min(r, Math.floor(t + (a - o) * c / a + l));
			JC(e, t, u, d, i);
		}
		let a = e[t], o = n, s = r;
		for (YC(e, n, t), i(e[r], a) > 0 && YC(e, n, r); o < s;) {
			for (YC(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
			for (; i(e[s], a) > 0;) --s;
		}
		i(e[n], a) === 0 ? YC(e, n, s) : (++s, YC(e, s, r)), s <= t && (n = s + 1), t <= s && (r = s - 1);
	}
	return e;
}
function YC(e, t, n) {
	let r = e[t];
	e[t] = e[n], e[n] = r;
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/greatest.js
function XC(e, t = hC) {
	let n, r = !1;
	if (t.length === 1) {
		let i;
		for (let a of e) {
			let e = t(a);
			(r ? hC(e, i) > 0 : hC(e, e) === 0) && (n = a, i = e, r = !0);
		}
	} else for (let i of e) (r ? t(i, n) > 0 : t(i, i) === 0) && (n = i, r = !0);
	return n;
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/quantile.js
function ZC(e, t, n) {
	if (e = Float64Array.from(yC(e, n)), !(!(r = e.length) || isNaN(t = +t))) {
		if (t <= 0 || r < 2) return KC(e);
		if (t >= 1) return WC(e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = WC(JC(e, a).subarray(0, a + 1));
		return o + (KC(e.subarray(a + 1)) - o) * (i - a);
	}
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/mean.js
function QC(e, t) {
	let n = 0, r = 0;
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (++n, r += t);
	else {
		let i = -1;
		for (let a of e) (a = t(a, ++i, e)) != null && (a = +a) >= a && (++n, r += a);
	}
	if (n) return r / n;
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/median.js
function $C(e, t) {
	return ZC(e, .5, t);
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/mode.js
function ew(e, t) {
	let n = new Rr();
	if (t === void 0) for (let t of e) t != null && t >= t && n.set(t, (n.get(t) || 0) + 1);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && i >= i && n.set(i, (n.get(i) || 0) + 1);
	}
	let r, i = 0;
	for (let [e, t] of n) t > i && (i = t, r = e);
	return r;
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/pairs.js
function tw(e, t = nw) {
	let n = [], r, i = !1;
	for (let a of e) i && n.push(t(r, a)), r = a, i = !0;
	return n;
}
function nw(e, t) {
	return [e, t];
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/range.js
function rw(e, t, n) {
	e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
	for (var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = Array(i); ++r < i;) a[r] = e + r * n;
	return a;
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/sum.js
function iw(e, t) {
	let n = 0;
	if (t === void 0) for (let t of e) (t = +t) && (n += t);
	else {
		let r = -1;
		for (let i of e) (i = +t(i, ++r, e)) && (n += i);
	}
	return n;
}
//#endregion
//#region node_modules/d3/node_modules/d3-array/src/reverse.js
function aw(e) {
	if (typeof e[Symbol.iterator] != "function") throw TypeError("values is not iterable");
	return Array.from(e).reverse();
}
//#endregion
//#region node_modules/d3-geo/src/math.js
var H = 1e-6, U = Math.PI, W = U / 2, ow = U / 4, sw = U * 2, cw = 180 / U, G = U / 180, K = Math.abs, lw = Math.atan, uw = Math.atan2, q = Math.cos, dw = Math.exp, fw = Math.log, pw = Math.pow, J = Math.sin, mw = Math.sign || function(e) {
	return e > 0 ? 1 : e < 0 ? -1 : 0;
}, hw = Math.sqrt, gw = Math.tan;
function _w(e) {
	return e > 1 ? 0 : e < -1 ? U : Math.acos(e);
}
function vw(e) {
	return e > 1 ? W : e < -1 ? -W : Math.asin(e);
}
//#endregion
//#region node_modules/d3-geo/src/noop.js
function yw() {}
//#endregion
//#region node_modules/d3-geo/src/stream.js
function bw(e, t) {
	e && Sw.hasOwnProperty(e.type) && Sw[e.type](e, t);
}
var xw = {
	Feature: function(e, t) {
		bw(e.geometry, t);
	},
	FeatureCollection: function(e, t) {
		for (var n = e.features, r = -1, i = n.length; ++r < i;) bw(n[r].geometry, t);
	}
}, Sw = {
	Sphere: function(e, t) {
		t.sphere();
	},
	Point: function(e, t) {
		e = e.coordinates, t.point(e[0], e[1], e[2]);
	},
	MultiPoint: function(e, t) {
		for (var n = e.coordinates, r = -1, i = n.length; ++r < i;) e = n[r], t.point(e[0], e[1], e[2]);
	},
	LineString: function(e, t) {
		Cw(e.coordinates, t, 0);
	},
	MultiLineString: function(e, t) {
		for (var n = e.coordinates, r = -1, i = n.length; ++r < i;) Cw(n[r], t, 0);
	},
	Polygon: function(e, t) {
		ww(e.coordinates, t);
	},
	MultiPolygon: function(e, t) {
		for (var n = e.coordinates, r = -1, i = n.length; ++r < i;) ww(n[r], t);
	},
	GeometryCollection: function(e, t) {
		for (var n = e.geometries, r = -1, i = n.length; ++r < i;) bw(n[r], t);
	}
};
function Cw(e, t, n) {
	var r = -1, i = e.length - n, a;
	for (t.lineStart(); ++r < i;) a = e[r], t.point(a[0], a[1], a[2]);
	t.lineEnd();
}
function ww(e, t) {
	var n = -1, r = e.length;
	for (t.polygonStart(); ++n < r;) Cw(e[n], t, 1);
	t.polygonEnd();
}
function Tw(e, t) {
	e && xw.hasOwnProperty(e.type) ? xw[e.type](e, t) : bw(e, t);
}
//#endregion
//#region node_modules/d3-geo/src/cartesian.js
function Ew(e) {
	return [uw(e[1], e[0]), vw(e[2])];
}
function Dw(e) {
	var t = e[0], n = e[1], r = q(n);
	return [
		r * q(t),
		r * J(t),
		J(n)
	];
}
function Ow(e, t) {
	return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function kw(e, t) {
	return [
		e[1] * t[2] - e[2] * t[1],
		e[2] * t[0] - e[0] * t[2],
		e[0] * t[1] - e[1] * t[0]
	];
}
function Aw(e, t) {
	e[0] += t[0], e[1] += t[1], e[2] += t[2];
}
function jw(e, t) {
	return [
		e[0] * t,
		e[1] * t,
		e[2] * t
	];
}
function Mw(e) {
	var t = hw(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
	e[0] /= t, e[1] /= t, e[2] /= t;
}
//#endregion
//#region node_modules/d3-geo/src/compose.js
function Nw(e, t) {
	function n(n, r) {
		return n = e(n, r), t(n[0], n[1]);
	}
	return e.invert && t.invert && (n.invert = function(n, r) {
		return n = t.invert(n, r), n && e.invert(n[0], n[1]);
	}), n;
}
//#endregion
//#region node_modules/d3-geo/src/rotation.js
function Pw(e, t) {
	return K(e) > U && (e -= Math.round(e / sw) * sw), [e, t];
}
Pw.invert = Pw;
function Fw(e, t, n) {
	return (e %= sw) ? t || n ? Nw(Lw(e), Rw(t, n)) : Lw(e) : t || n ? Rw(t, n) : Pw;
}
function Iw(e) {
	return function(t, n) {
		return t += e, K(t) > U && (t -= Math.round(t / sw) * sw), [t, n];
	};
}
function Lw(e) {
	var t = Iw(e);
	return t.invert = Iw(-e), t;
}
function Rw(e, t) {
	var n = q(e), r = J(e), i = q(t), a = J(t);
	function o(e, t) {
		var o = q(t), s = q(e) * o, c = J(e) * o, l = J(t), u = l * n + s * r;
		return [uw(c * i - u * a, s * n - l * r), vw(u * i + c * a)];
	}
	return o.invert = function(e, t) {
		var o = q(t), s = q(e) * o, c = J(e) * o, l = J(t), u = l * i - c * a;
		return [uw(c * i + l * a, s * n + u * r), vw(u * n - s * r)];
	}, o;
}
function zw(e) {
	e = Fw(e[0] * G, e[1] * G, e.length > 2 ? e[2] * G : 0);
	function t(t) {
		return t = e(t[0] * G, t[1] * G), t[0] *= cw, t[1] *= cw, t;
	}
	return t.invert = function(t) {
		return t = e.invert(t[0] * G, t[1] * G), t[0] *= cw, t[1] *= cw, t;
	}, t;
}
//#endregion
//#region node_modules/d3-geo/src/circle.js
function Bw(e, t, n, r, i, a) {
	if (n) {
		var o = q(t), s = J(t), c = r * n;
		i == null ? (i = t + r * sw, a = t - c / 2) : (i = Vw(o, i), a = Vw(o, a), (r > 0 ? i < a : i > a) && (i += r * sw));
		for (var l, u = i; r > 0 ? u > a : u < a; u -= c) l = Ew([
			o,
			-s * q(u),
			-s * J(u)
		]), e.point(l[0], l[1]);
	}
}
function Vw(e, t) {
	t = Dw(t), t[0] -= e, Mw(t);
	var n = _w(-t[1]);
	return ((-t[2] < 0 ? -n : n) + sw - H) % sw;
}
//#endregion
//#region node_modules/d3-geo/src/clip/buffer.js
function Hw() {
	var e = [], t;
	return {
		point: function(e, n, r) {
			t.push([
				e,
				n,
				r
			]);
		},
		lineStart: function() {
			e.push(t = []);
		},
		lineEnd: yw,
		rejoin: function() {
			e.length > 1 && e.push(e.pop().concat(e.shift()));
		},
		result: function() {
			var n = e;
			return e = [], t = null, n;
		}
	};
}
//#endregion
//#region node_modules/d3-geo/src/pointEqual.js
function Uw(e, t) {
	return K(e[0] - t[0]) < 1e-6 && K(e[1] - t[1]) < 1e-6;
}
//#endregion
//#region node_modules/d3-geo/src/clip/rejoin.js
function Ww(e, t, n, r) {
	this.x = e, this.z = t, this.o = n, this.e = r, this.v = !1, this.n = this.p = null;
}
function Gw(e, t, n, r, i) {
	var a = [], o = [], s, c;
	if (e.forEach(function(e) {
		if (!((t = e.length - 1) <= 0)) {
			var t, n = e[0], r = e[t], c;
			if (Uw(n, r)) {
				if (!n[2] && !r[2]) {
					for (i.lineStart(), s = 0; s < t; ++s) i.point((n = e[s])[0], n[1]);
					i.lineEnd();
					return;
				}
				r[0] += 2 * H;
			}
			a.push(c = new Ww(n, e, null, !0)), o.push(c.o = new Ww(n, null, c, !1)), a.push(c = new Ww(r, e, null, !1)), o.push(c.o = new Ww(r, null, c, !0));
		}
	}), a.length) {
		for (o.sort(t), Kw(a), Kw(o), s = 0, c = o.length; s < c; ++s) o[s].e = n = !n;
		for (var l = a[0], u, d;;) {
			for (var f = l, p = !0; f.v;) if ((f = f.n) === l) return;
			u = f.z, i.lineStart();
			do {
				if (f.v = f.o.v = !0, f.e) {
					if (p) for (s = 0, c = u.length; s < c; ++s) i.point((d = u[s])[0], d[1]);
					else r(f.x, f.n.x, 1, i);
					f = f.n;
				} else {
					if (p) for (u = f.p.z, s = u.length - 1; s >= 0; --s) i.point((d = u[s])[0], d[1]);
					else r(f.x, f.p.x, -1, i);
					f = f.p;
				}
				f = f.o, u = f.z, p = !p;
			} while (!f.v);
			i.lineEnd();
		}
	}
}
function Kw(e) {
	if (t = e.length) {
		for (var t, n = 0, r = e[0], i; ++n < t;) r.n = i = e[n], i.p = r, r = i;
		r.n = i = e[0], i.p = r;
	}
}
//#endregion
//#region node_modules/d3-geo/src/polygonContains.js
function qw(e) {
	return K(e[0]) <= U ? e[0] : mw(e[0]) * ((K(e[0]) + U) % sw - U);
}
function Jw(e, t) {
	var n = qw(t), r = t[1], i = J(r), a = [
		J(n),
		-q(n),
		0
	], o = 0, s = 0, c = new Lr();
	i === 1 ? r = W + H : i === -1 && (r = -W - H);
	for (var l = 0, u = e.length; l < u; ++l) if (f = (d = e[l]).length) for (var d, f, p = d[f - 1], m = qw(p), h = p[1] / 2 + ow, g = J(h), _ = q(h), v = 0; v < f; ++v, m = b, g = S, _ = C, p = y) {
		var y = d[v], b = qw(y), x = y[1] / 2 + ow, S = J(x), C = q(x), w = b - m, T = w >= 0 ? 1 : -1, E = T * w, D = E > U, O = g * S;
		if (c.add(uw(O * T * J(E), _ * C + O * q(E))), o += D ? w + T * sw : w, D ^ m >= n ^ b >= n) {
			var k = kw(Dw(p), Dw(y));
			Mw(k);
			var A = kw(a, k);
			Mw(A);
			var j = (D ^ w >= 0 ? -1 : 1) * vw(A[2]);
			(r > j || r === j && (k[0] || k[1])) && (s += D ^ w >= 0 ? 1 : -1);
		}
	}
	return (o < -1e-6 || o < 1e-6 && c < -1e-12) ^ s & 1;
}
//#endregion
//#region node_modules/d3-geo/src/clip/index.js
function Yw(e, t, n, r) {
	return function(i) {
		var a = t(i), o = Hw(), s = t(o), c = !1, l, u, d, f = {
			point: p,
			lineStart: h,
			lineEnd: g,
			polygonStart: function() {
				f.point = _, f.lineStart = v, f.lineEnd = y, u = [], l = [];
			},
			polygonEnd: function() {
				f.point = p, f.lineStart = h, f.lineEnd = g, u = ei(u);
				var e = Jw(l, r);
				u.length ? (c ||= (i.polygonStart(), !0), Gw(u, Zw, e, n, i)) : e && (c ||= (i.polygonStart(), !0), i.lineStart(), n(null, null, 1, i), i.lineEnd()), c &&= (i.polygonEnd(), !1), u = l = null;
			},
			sphere: function() {
				i.polygonStart(), i.lineStart(), n(null, null, 1, i), i.lineEnd(), i.polygonEnd();
			}
		};
		function p(t, n) {
			e(t, n) && i.point(t, n);
		}
		function m(e, t) {
			a.point(e, t);
		}
		function h() {
			f.point = m, a.lineStart();
		}
		function g() {
			f.point = p, a.lineEnd();
		}
		function _(e, t) {
			d.push([e, t]), s.point(e, t);
		}
		function v() {
			s.lineStart(), d = [];
		}
		function y() {
			_(d[0][0], d[0][1]), s.lineEnd();
			var e = s.clean(), t = o.result(), n, r = t.length, a, f, p;
			if (d.pop(), l.push(d), d = null, r) {
				if (e & 1) {
					if (f = t[0], (a = f.length - 1) > 0) {
						for (c ||= (i.polygonStart(), !0), i.lineStart(), n = 0; n < a; ++n) i.point((p = f[n])[0], p[1]);
						i.lineEnd();
					}
					return;
				}
				r > 1 && e & 2 && t.push(t.pop().concat(t.shift())), u.push(t.filter(Xw));
			}
		}
		return f;
	};
}
function Xw(e) {
	return e.length > 1;
}
function Zw(e, t) {
	return ((e = e.x)[0] < 0 ? e[1] - W - H : W - e[1]) - ((t = t.x)[0] < 0 ? t[1] - W - H : W - t[1]);
}
//#endregion
//#region node_modules/d3-geo/src/clip/antimeridian.js
var Qw = Yw(function() {
	return !0;
}, $w, tT, [-U, -W]);
function $w(e) {
	var t = NaN, n = NaN, r = NaN, i;
	return {
		lineStart: function() {
			e.lineStart(), i = 1;
		},
		point: function(a, o) {
			var s = a > 0 ? U : -U, c = K(a - t);
			K(c - U) < 1e-6 ? (e.point(t, n = (n + o) / 2 > 0 ? W : -W), e.point(r, n), e.lineEnd(), e.lineStart(), e.point(s, n), e.point(a, n), i = 0) : r !== s && c >= U && (K(t - r) < 1e-6 && (t -= r * H), K(a - s) < 1e-6 && (a -= s * H), n = eT(t, n, a, o), e.point(r, n), e.lineEnd(), e.lineStart(), e.point(s, n), i = 0), e.point(t = a, n = o), r = s;
		},
		lineEnd: function() {
			e.lineEnd(), t = n = NaN;
		},
		clean: function() {
			return 2 - i;
		}
	};
}
function eT(e, t, n, r) {
	var i, a, o = J(e - n);
	return K(o) > 1e-6 ? lw((J(t) * (a = q(r)) * J(n) - J(r) * (i = q(t)) * J(e)) / (i * a * o)) : (t + r) / 2;
}
function tT(e, t, n, r) {
	var i;
	if (e == null) i = n * W, r.point(-U, i), r.point(0, i), r.point(U, i), r.point(U, 0), r.point(U, -i), r.point(0, -i), r.point(-U, -i), r.point(-U, 0), r.point(-U, i);
	else if (K(e[0] - t[0]) > 1e-6) {
		var a = e[0] < t[0] ? U : -U;
		i = n * a / 2, r.point(-a, i), r.point(0, i), r.point(a, i);
	} else r.point(t[0], t[1]);
}
//#endregion
//#region node_modules/d3-geo/src/clip/circle.js
function nT(e) {
	var t = q(e), n = 2 * G, r = t > 0, i = K(t) > H;
	function a(t, r, i, a) {
		Bw(a, e, n, i, t, r);
	}
	function o(e, n) {
		return q(e) * q(n) > t;
	}
	function s(e) {
		var t, n, a, s, u;
		return {
			lineStart: function() {
				s = a = !1, u = 1;
			},
			point: function(d, f) {
				var p = [d, f], m, h = o(d, f), g = r ? h ? 0 : l(d, f) : h ? l(d + (d < 0 ? U : -U), f) : 0;
				if (!t && (s = a = h) && e.lineStart(), h !== a && (m = c(t, p), (!m || Uw(t, m) || Uw(p, m)) && (p[2] = 1)), h !== a) u = 0, h ? (e.lineStart(), m = c(p, t), e.point(m[0], m[1])) : (m = c(t, p), e.point(m[0], m[1], 2), e.lineEnd()), t = m;
				else if (i && t && r ^ h) {
					var _;
					!(g & n) && (_ = c(p, t, !0)) && (u = 0, r ? (e.lineStart(), e.point(_[0][0], _[0][1]), e.point(_[1][0], _[1][1]), e.lineEnd()) : (e.point(_[1][0], _[1][1]), e.lineEnd(), e.lineStart(), e.point(_[0][0], _[0][1], 3)));
				}
				h && (!t || !Uw(t, p)) && e.point(p[0], p[1]), t = p, a = h, n = g;
			},
			lineEnd: function() {
				a && e.lineEnd(), t = null;
			},
			clean: function() {
				return u | (s && a) << 1;
			}
		};
	}
	function c(e, n, r) {
		var i = Dw(e), a = Dw(n), o = [
			1,
			0,
			0
		], s = kw(i, a), c = Ow(s, s), l = s[0], u = c - l * l;
		if (!u) return !r && e;
		var d = t * c / u, f = -t * l / u, p = kw(o, s), m = jw(o, d);
		Aw(m, jw(s, f));
		var h = p, g = Ow(m, h), _ = Ow(h, h), v = g * g - _ * (Ow(m, m) - 1);
		if (!(v < 0)) {
			var y = hw(v), b = jw(h, (-g - y) / _);
			if (Aw(b, m), b = Ew(b), !r) return b;
			var x = e[0], S = n[0], C = e[1], w = n[1], T;
			S < x && (T = x, x = S, S = T);
			var E = S - x, D = K(E - U) < H, O = D || E < 1e-6;
			if (!D && w < C && (T = C, C = w, w = T), O ? D ? C + w > 0 ^ b[1] < (K(b[0] - x) < 1e-6 ? C : w) : C <= b[1] && b[1] <= w : E > U ^ (x <= b[0] && b[0] <= S)) {
				var k = jw(h, (-g + y) / _);
				return Aw(k, m), [b, Ew(k)];
			}
		}
	}
	function l(t, n) {
		var i = r ? e : U - e, a = 0;
		return t < -i ? a |= 1 : t > i && (a |= 2), n < -i ? a |= 4 : n > i && (a |= 8), a;
	}
	return Yw(o, s, a, r ? [0, -e] : [-U, e - U]);
}
//#endregion
//#region node_modules/d3-geo/src/clip/line.js
function rT(e, t, n, r, i, a) {
	var o = e[0], s = e[1], c = t[0], l = t[1], u = 0, d = 1, f = c - o, p = l - s, m = n - o;
	if (!(!f && m > 0)) {
		if (m /= f, f < 0) {
			if (m < u) return;
			m < d && (d = m);
		} else if (f > 0) {
			if (m > d) return;
			m > u && (u = m);
		}
		if (m = i - o, !(!f && m < 0)) {
			if (m /= f, f < 0) {
				if (m > d) return;
				m > u && (u = m);
			} else if (f > 0) {
				if (m < u) return;
				m < d && (d = m);
			}
			if (m = r - s, !(!p && m > 0)) {
				if (m /= p, p < 0) {
					if (m < u) return;
					m < d && (d = m);
				} else if (p > 0) {
					if (m > d) return;
					m > u && (u = m);
				}
				if (m = a - s, !(!p && m < 0)) {
					if (m /= p, p < 0) {
						if (m > d) return;
						m > u && (u = m);
					} else if (p > 0) {
						if (m < u) return;
						m < d && (d = m);
					}
					return u > 0 && (e[0] = o + u * f, e[1] = s + u * p), d < 1 && (t[0] = o + d * f, t[1] = s + d * p), !0;
				}
			}
		}
	}
}
//#endregion
//#region node_modules/d3-geo/src/clip/rectangle.js
var iT = 1e9, aT = -iT;
function oT(e, t, n, r) {
	function i(i, a) {
		return e <= i && i <= n && t <= a && a <= r;
	}
	function a(i, a, s, l) {
		var u = 0, d = 0;
		if (i == null || (u = o(i, s)) !== (d = o(a, s)) || c(i, a) < 0 ^ s > 0) do
			l.point(u === 0 || u === 3 ? e : n, u > 1 ? r : t);
		while ((u = (u + s + 4) % 4) !== d);
		else l.point(a[0], a[1]);
	}
	function o(r, i) {
		return K(r[0] - e) < 1e-6 ? i > 0 ? 0 : 3 : K(r[0] - n) < 1e-6 ? i > 0 ? 2 : 1 : K(r[1] - t) < 1e-6 ? +(i > 0) : i > 0 ? 3 : 2;
	}
	function s(e, t) {
		return c(e.x, t.x);
	}
	function c(e, t) {
		var n = o(e, 1), r = o(t, 1);
		return n === r ? n === 0 ? t[1] - e[1] : n === 1 ? e[0] - t[0] : n === 2 ? e[1] - t[1] : t[0] - e[0] : n - r;
	}
	return function(o) {
		var c = o, l = Hw(), u, d, f, p, m, h, g, _, v, y, b, x = {
			point: S,
			lineStart: E,
			lineEnd: D,
			polygonStart: w,
			polygonEnd: T
		};
		function S(e, t) {
			i(e, t) && c.point(e, t);
		}
		function C() {
			for (var t = 0, n = 0, i = d.length; n < i; ++n) for (var a = d[n], o = 1, s = a.length, c = a[0], l, u, f = c[0], p = c[1]; o < s; ++o) l = f, u = p, c = a[o], f = c[0], p = c[1], u <= r ? p > r && (f - l) * (r - u) > (p - u) * (e - l) && ++t : p <= r && (f - l) * (r - u) < (p - u) * (e - l) && --t;
			return t;
		}
		function w() {
			c = l, u = [], d = [], b = !0;
		}
		function T() {
			var e = C(), t = b && e, n = (u = ei(u)).length;
			(t || n) && (o.polygonStart(), t && (o.lineStart(), a(null, null, 1, o), o.lineEnd()), n && Gw(u, s, e, a, o), o.polygonEnd()), c = o, u = d = f = null;
		}
		function E() {
			x.point = O, d && d.push(f = []), y = !0, v = !1, g = _ = NaN;
		}
		function D() {
			u && (O(p, m), h && v && l.rejoin(), u.push(l.result())), x.point = S, v && c.lineEnd();
		}
		function O(a, o) {
			var s = i(a, o);
			if (d && f.push([a, o]), y) p = a, m = o, h = s, y = !1, s && (c.lineStart(), c.point(a, o));
			else if (s && v) c.point(a, o);
			else {
				var l = [g = Math.max(aT, Math.min(iT, g)), _ = Math.max(aT, Math.min(iT, _))], u = [a = Math.max(aT, Math.min(iT, a)), o = Math.max(aT, Math.min(iT, o))];
				rT(l, u, e, t, n, r) ? (v || (c.lineStart(), c.point(l[0], l[1])), c.point(u[0], u[1]), s || c.lineEnd(), b = !1) : s && (c.lineStart(), c.point(a, o), b = !1);
			}
			g = a, _ = o, v = s;
		}
		return x;
	};
}
//#endregion
//#region node_modules/d3-geo/src/identity.js
var sT = (e) => e, cT = new Lr(), lT = new Lr(), uT, dT, fT, pT, mT = {
	point: yw,
	lineStart: yw,
	lineEnd: yw,
	polygonStart: function() {
		mT.lineStart = hT, mT.lineEnd = vT;
	},
	polygonEnd: function() {
		mT.lineStart = mT.lineEnd = mT.point = yw, cT.add(K(lT)), lT = new Lr();
	},
	result: function() {
		var e = cT / 2;
		return cT = new Lr(), e;
	}
};
function hT() {
	mT.point = gT;
}
function gT(e, t) {
	mT.point = _T, uT = fT = e, dT = pT = t;
}
function _T(e, t) {
	lT.add(pT * e - fT * t), fT = e, pT = t;
}
function vT() {
	_T(uT, dT);
}
//#endregion
//#region node_modules/d3-geo/src/path/bounds.js
var yT = Infinity, bT = yT, xT = -yT, ST = xT, CT = {
	point: wT,
	lineStart: yw,
	lineEnd: yw,
	polygonStart: yw,
	polygonEnd: yw,
	result: function() {
		var e = [[yT, bT], [xT, ST]];
		return xT = ST = -(bT = yT = Infinity), e;
	}
};
function wT(e, t) {
	e < yT && (yT = e), e > xT && (xT = e), t < bT && (bT = t), t > ST && (ST = t);
}
//#endregion
//#region node_modules/d3-geo/src/path/centroid.js
var TT = 0, ET = 0, DT = 0, OT = 0, kT = 0, AT = 0, jT = 0, MT = 0, NT = 0, PT, FT, IT, LT, RT = {
	point: zT,
	lineStart: BT,
	lineEnd: UT,
	polygonStart: function() {
		RT.lineStart = WT, RT.lineEnd = GT;
	},
	polygonEnd: function() {
		RT.point = zT, RT.lineStart = BT, RT.lineEnd = UT;
	},
	result: function() {
		var e = NT ? [jT / NT, MT / NT] : AT ? [OT / AT, kT / AT] : DT ? [TT / DT, ET / DT] : [NaN, NaN];
		return TT = ET = DT = OT = kT = AT = jT = MT = NT = 0, e;
	}
};
function zT(e, t) {
	TT += e, ET += t, ++DT;
}
function BT() {
	RT.point = VT;
}
function VT(e, t) {
	RT.point = HT, zT(IT = e, LT = t);
}
function HT(e, t) {
	var n = e - IT, r = t - LT, i = hw(n * n + r * r);
	OT += i * (IT + e) / 2, kT += i * (LT + t) / 2, AT += i, zT(IT = e, LT = t);
}
function UT() {
	RT.point = zT;
}
function WT() {
	RT.point = KT;
}
function GT() {
	qT(PT, FT);
}
function KT(e, t) {
	RT.point = qT, zT(PT = IT = e, FT = LT = t);
}
function qT(e, t) {
	var n = e - IT, r = t - LT, i = hw(n * n + r * r);
	OT += i * (IT + e) / 2, kT += i * (LT + t) / 2, AT += i, i = LT * e - IT * t, jT += i * (IT + e), MT += i * (LT + t), NT += i * 3, zT(IT = e, LT = t);
}
//#endregion
//#region node_modules/d3-geo/src/path/context.js
function JT(e) {
	this._context = e;
}
JT.prototype = {
	_radius: 4.5,
	pointRadius: function(e) {
		return this._radius = e, this;
	},
	polygonStart: function() {
		this._line = 0;
	},
	polygonEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._point = 0;
	},
	lineEnd: function() {
		this._line === 0 && this._context.closePath(), this._point = NaN;
	},
	point: function(e, t) {
		switch (this._point) {
			case 0:
				this._context.moveTo(e, t), this._point = 1;
				break;
			case 1:
				this._context.lineTo(e, t);
				break;
			default: this._context.moveTo(e + this._radius, t), this._context.arc(e, t, this._radius, 0, sw);
		}
	},
	result: yw
};
//#endregion
//#region node_modules/d3-geo/src/path/measure.js
var YT = new Lr(), XT, ZT, QT, $T, eE, tE = {
	point: yw,
	lineStart: function() {
		tE.point = nE;
	},
	lineEnd: function() {
		XT && rE(ZT, QT), tE.point = yw;
	},
	polygonStart: function() {
		XT = !0;
	},
	polygonEnd: function() {
		XT = null;
	},
	result: function() {
		var e = +YT;
		return YT = new Lr(), e;
	}
};
function nE(e, t) {
	tE.point = rE, ZT = $T = e, QT = eE = t;
}
function rE(e, t) {
	$T -= e, eE -= t, YT.add(hw($T * $T + eE * eE)), $T = e, eE = t;
}
//#endregion
//#region node_modules/d3-geo/src/path/string.js
var iE, aE, oE, sE, cE = class {
	constructor(e) {
		this._append = e == null ? lE : uE(e), this._radius = 4.5, this._ = "";
	}
	pointRadius(e) {
		return this._radius = +e, this;
	}
	polygonStart() {
		this._line = 0;
	}
	polygonEnd() {
		this._line = NaN;
	}
	lineStart() {
		this._point = 0;
	}
	lineEnd() {
		this._line === 0 && (this._ += "Z"), this._point = NaN;
	}
	point(e, t) {
		switch (this._point) {
			case 0:
				this._append`M${e},${t}`, this._point = 1;
				break;
			case 1:
				this._append`L${e},${t}`;
				break;
			default:
				if (this._append`M${e},${t}`, this._radius !== oE || this._append !== aE) {
					let e = this._radius, t = this._;
					this._ = "", this._append`m0,${e}a${e},${e} 0 1,1 0,${-2 * e}a${e},${e} 0 1,1 0,${2 * e}z`, oE = e, aE = this._append, sE = this._, this._ = t;
				}
				this._ += sE;
		}
	}
	result() {
		let e = this._;
		return this._ = "", e.length ? e : null;
	}
};
function lE(e) {
	let t = 1;
	this._ += e[0];
	for (let n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function uE(e) {
	let t = Math.floor(e);
	if (!(t >= 0)) throw RangeError(`invalid digits: ${e}`);
	if (t > 15) return lE;
	if (t !== iE) {
		let e = 10 ** t;
		iE = t, aE = function(t) {
			let n = 1;
			this._ += t[0];
			for (let r = t.length; n < r; ++n) this._ += Math.round(arguments[n] * e) / e + t[n];
		};
	}
	return aE;
}
//#endregion
//#region node_modules/d3-geo/src/path/index.js
function dE(e, t) {
	let n = 3, r = 4.5, i, a;
	function o(e) {
		return e && (typeof r == "function" && a.pointRadius(+r.apply(this, arguments)), Tw(e, i(a))), a.result();
	}
	return o.area = function(e) {
		return Tw(e, i(mT)), mT.result();
	}, o.measure = function(e) {
		return Tw(e, i(tE)), tE.result();
	}, o.bounds = function(e) {
		return Tw(e, i(CT)), CT.result();
	}, o.centroid = function(e) {
		return Tw(e, i(RT)), RT.result();
	}, o.projection = function(t) {
		return arguments.length ? (i = t == null ? (e = null, sT) : (e = t).stream, o) : e;
	}, o.context = function(e) {
		return arguments.length ? (a = e == null ? (t = null, new cE(n)) : new JT(t = e), typeof r != "function" && a.pointRadius(r), o) : t;
	}, o.pointRadius = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : (a.pointRadius(+e), +e), o) : r;
	}, o.digits = function(e) {
		if (!arguments.length) return n;
		if (e == null) n = null;
		else {
			let t = Math.floor(e);
			if (!(t >= 0)) throw RangeError(`invalid digits: ${e}`);
			n = t;
		}
		return t === null && (a = new cE(n)), o;
	}, o.projection(e).digits(n).context(t);
}
//#endregion
//#region node_modules/d3-geo/src/transform.js
function fE(e) {
	return { stream: pE(e) };
}
function pE(e) {
	return function(t) {
		var n = new mE();
		for (var r in e) n[r] = e[r];
		return n.stream = t, n;
	};
}
function mE() {}
mE.prototype = {
	constructor: mE,
	point: function(e, t) {
		this.stream.point(e, t);
	},
	sphere: function() {
		this.stream.sphere();
	},
	lineStart: function() {
		this.stream.lineStart();
	},
	lineEnd: function() {
		this.stream.lineEnd();
	},
	polygonStart: function() {
		this.stream.polygonStart();
	},
	polygonEnd: function() {
		this.stream.polygonEnd();
	}
};
//#endregion
//#region node_modules/d3-geo/src/projection/fit.js
function hE(e, t, n) {
	var r = e.clipExtent && e.clipExtent();
	return e.scale(150).translate([0, 0]), r != null && e.clipExtent(null), Tw(n, e.stream(CT)), t(CT.result()), r != null && e.clipExtent(r), e;
}
function gE(e, t, n) {
	return hE(e, function(n) {
		var r = t[1][0] - t[0][0], i = t[1][1] - t[0][1], a = Math.min(r / (n[1][0] - n[0][0]), i / (n[1][1] - n[0][1])), o = +t[0][0] + (r - a * (n[1][0] + n[0][0])) / 2, s = +t[0][1] + (i - a * (n[1][1] + n[0][1])) / 2;
		e.scale(150 * a).translate([o, s]);
	}, n);
}
function _E(e, t, n) {
	return gE(e, [[0, 0], t], n);
}
function vE(e, t, n) {
	return hE(e, function(n) {
		var r = +t, i = r / (n[1][0] - n[0][0]), a = (r - i * (n[1][0] + n[0][0])) / 2, o = -i * n[0][1];
		e.scale(150 * i).translate([a, o]);
	}, n);
}
function yE(e, t, n) {
	return hE(e, function(n) {
		var r = +t, i = r / (n[1][1] - n[0][1]), a = -i * n[0][0], o = (r - i * (n[1][1] + n[0][1])) / 2;
		e.scale(150 * i).translate([a, o]);
	}, n);
}
//#endregion
//#region node_modules/d3-geo/src/projection/resample.js
var bE = 16, xE = q(30 * G);
function SE(e, t) {
	return +t ? wE(e, t) : CE(e);
}
function CE(e) {
	return pE({ point: function(t, n) {
		t = e(t, n), this.stream.point(t[0], t[1]);
	} });
}
function wE(e, t) {
	function n(r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
		var _ = l - r, v = u - i, y = _ * _ + v * v;
		if (y > 4 * t && h--) {
			var b = o + f, x = s + p, S = c + m, C = hw(b * b + x * x + S * S), w = vw(S /= C), T = K(K(S) - 1) < 1e-6 || K(a - d) < 1e-6 ? (a + d) / 2 : uw(x, b), E = e(T, w), D = E[0], O = E[1], k = D - r, A = O - i, j = v * k - _ * A;
			(j * j / y > t || K((_ * k + v * A) / y - .5) > .3 || o * f + s * p + c * m < xE) && (n(r, i, a, o, s, c, D, O, T, b /= C, x /= C, S, h, g), g.point(D, O), n(D, O, T, b, x, S, l, u, d, f, p, m, h, g));
		}
	}
	return function(t) {
		var r, i, a, o, s, c, l, u, d, f, p, m, h = {
			point: g,
			lineStart: _,
			lineEnd: y,
			polygonStart: function() {
				t.polygonStart(), h.lineStart = b;
			},
			polygonEnd: function() {
				t.polygonEnd(), h.lineStart = _;
			}
		};
		function g(n, r) {
			n = e(n, r), t.point(n[0], n[1]);
		}
		function _() {
			u = NaN, h.point = v, t.lineStart();
		}
		function v(r, i) {
			var a = Dw([r, i]), o = e(r, i);
			n(u, d, l, f, p, m, u = o[0], d = o[1], l = r, f = a[0], p = a[1], m = a[2], bE, t), t.point(u, d);
		}
		function y() {
			h.point = g, t.lineEnd();
		}
		function b() {
			_(), h.point = x, h.lineEnd = S;
		}
		function x(e, t) {
			v(r = e, t), i = u, a = d, o = f, s = p, c = m, h.point = v;
		}
		function S() {
			n(u, d, l, f, p, m, i, a, r, o, s, c, bE, t), h.lineEnd = y, y();
		}
		return h;
	};
}
//#endregion
//#region node_modules/d3-geo/src/projection/index.js
var TE = pE({ point: function(e, t) {
	this.stream.point(e * G, t * G);
} });
function EE(e) {
	return pE({ point: function(t, n) {
		var r = e(t, n);
		return this.stream.point(r[0], r[1]);
	} });
}
function DE(e, t, n, r, i) {
	function a(a, o) {
		return a *= r, o *= i, [t + e * a, n - e * o];
	}
	return a.invert = function(a, o) {
		return [(a - t) / e * r, (n - o) / e * i];
	}, a;
}
function OE(e, t, n, r, i, a) {
	if (!a) return DE(e, t, n, r, i);
	var o = q(a), s = J(a), c = o * e, l = s * e, u = o / e, d = s / e, f = (s * n - o * t) / e, p = (s * t + o * n) / e;
	function m(e, a) {
		return e *= r, a *= i, [c * e - l * a + t, n - l * e - c * a];
	}
	return m.invert = function(e, t) {
		return [r * (u * e - d * t + f), i * (p - d * e - u * t)];
	}, m;
}
function kE(e) {
	return AE(function() {
		return e;
	})();
}
function AE(e) {
	var t, n = 150, r = 480, i = 250, a = 0, o = 0, s = 0, c = 0, l = 0, u, d = 0, f = 1, p = 1, m = null, h = Qw, g = null, _, v, y, b = sT, x = .5, S, C, w, T, E;
	function D(e) {
		return w(e[0] * G, e[1] * G);
	}
	function O(e) {
		return e = w.invert(e[0], e[1]), e && [e[0] * cw, e[1] * cw];
	}
	D.stream = function(e) {
		return T && E === e ? T : T = TE(EE(u)(h(S(b(E = e)))));
	}, D.preclip = function(e) {
		return arguments.length ? (h = e, m = void 0, A()) : h;
	}, D.postclip = function(e) {
		return arguments.length ? (b = e, g = _ = v = y = null, A()) : b;
	}, D.clipAngle = function(e) {
		return arguments.length ? (h = +e ? nT(m = e * G) : (m = null, Qw), A()) : m * cw;
	}, D.clipExtent = function(e) {
		return arguments.length ? (b = e == null ? (g = _ = v = y = null, sT) : oT(g = +e[0][0], _ = +e[0][1], v = +e[1][0], y = +e[1][1]), A()) : g == null ? null : [[g, _], [v, y]];
	}, D.scale = function(e) {
		return arguments.length ? (n = +e, k()) : n;
	}, D.translate = function(e) {
		return arguments.length ? (r = +e[0], i = +e[1], k()) : [r, i];
	}, D.center = function(e) {
		return arguments.length ? (a = e[0] % 360 * G, o = e[1] % 360 * G, k()) : [a * cw, o * cw];
	}, D.rotate = function(e) {
		return arguments.length ? (s = e[0] % 360 * G, c = e[1] % 360 * G, l = e.length > 2 ? e[2] % 360 * G : 0, k()) : [
			s * cw,
			c * cw,
			l * cw
		];
	}, D.angle = function(e) {
		return arguments.length ? (d = e % 360 * G, k()) : d * cw;
	}, D.reflectX = function(e) {
		return arguments.length ? (f = e ? -1 : 1, k()) : f < 0;
	}, D.reflectY = function(e) {
		return arguments.length ? (p = e ? -1 : 1, k()) : p < 0;
	}, D.precision = function(e) {
		return arguments.length ? (S = SE(C, x = e * e), A()) : hw(x);
	}, D.fitExtent = function(e, t) {
		return gE(D, e, t);
	}, D.fitSize = function(e, t) {
		return _E(D, e, t);
	}, D.fitWidth = function(e, t) {
		return vE(D, e, t);
	}, D.fitHeight = function(e, t) {
		return yE(D, e, t);
	};
	function k() {
		var e = OE(n, 0, 0, f, p, d).apply(null, t(a, o)), m = OE(n, r - e[0], i - e[1], f, p, d);
		return u = Fw(s, c, l), C = Nw(t, m), w = Nw(u, C), S = SE(C, x), A();
	}
	function A() {
		return T = E = null, D;
	}
	return function() {
		return t = e.apply(this, arguments), D.invert = t.invert && O, k();
	};
}
//#endregion
//#region node_modules/d3-geo/src/projection/conic.js
function jE(e) {
	var t = 0, n = U / 3, r = AE(e), i = r(t, n);
	return i.parallels = function(e) {
		return arguments.length ? r(t = e[0] * G, n = e[1] * G) : [t * cw, n * cw];
	}, i;
}
//#endregion
//#region node_modules/d3-geo/src/projection/cylindricalEqualArea.js
function ME(e) {
	var t = q(e);
	function n(e, n) {
		return [e * t, J(n) / t];
	}
	return n.invert = function(e, n) {
		return [e / t, vw(n * t)];
	}, n;
}
//#endregion
//#region node_modules/d3-geo/src/projection/conicEqualArea.js
function NE(e, t) {
	var n = J(e), r = (n + J(t)) / 2;
	if (K(r) < 1e-6) return ME(e);
	var i = 1 + n * (2 * r - n), a = hw(i) / r;
	function o(e, t) {
		var n = hw(i - 2 * r * J(t)) / r;
		return [n * J(e *= r), a - n * q(e)];
	}
	return o.invert = function(e, t) {
		var n = a - t, o = uw(e, K(n)) * mw(n);
		return n * r < 0 && (o -= U * mw(e) * mw(n)), [o / r, vw((i - (e * e + n * n) * r * r) / (2 * r))];
	}, o;
}
function PE() {
	return jE(NE).scale(155.424).center([0, 33.6442]);
}
//#endregion
//#region node_modules/d3-geo/src/projection/albers.js
function FE() {
	return PE().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7]);
}
//#endregion
//#region node_modules/d3-geo/src/projection/albersUsa.js
function IE(e) {
	var t = e.length;
	return {
		point: function(n, r) {
			for (var i = -1; ++i < t;) e[i].point(n, r);
		},
		sphere: function() {
			for (var n = -1; ++n < t;) e[n].sphere();
		},
		lineStart: function() {
			for (var n = -1; ++n < t;) e[n].lineStart();
		},
		lineEnd: function() {
			for (var n = -1; ++n < t;) e[n].lineEnd();
		},
		polygonStart: function() {
			for (var n = -1; ++n < t;) e[n].polygonStart();
		},
		polygonEnd: function() {
			for (var n = -1; ++n < t;) e[n].polygonEnd();
		}
	};
}
function LE() {
	var e, t, n = FE(), r, i = PE().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), a, o = PE().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), s, c, l = { point: function(e, t) {
		c = [e, t];
	} };
	function u(e) {
		var t = e[0], n = e[1];
		return c = null, r.point(t, n), c || (a.point(t, n), c) || (s.point(t, n), c);
	}
	u.invert = function(e) {
		var t = n.scale(), r = n.translate(), a = (e[0] - r[0]) / t, s = (e[1] - r[1]) / t;
		return (s >= .12 && s < .234 && a >= -.425 && a < -.214 ? i : s >= .166 && s < .234 && a >= -.214 && a < -.115 ? o : n).invert(e);
	}, u.stream = function(r) {
		return e && t === r ? e : e = IE([
			n.stream(t = r),
			i.stream(r),
			o.stream(r)
		]);
	}, u.precision = function(e) {
		return arguments.length ? (n.precision(e), i.precision(e), o.precision(e), d()) : n.precision();
	}, u.scale = function(e) {
		return arguments.length ? (n.scale(e), i.scale(e * .35), o.scale(e), u.translate(n.translate())) : n.scale();
	}, u.translate = function(e) {
		if (!arguments.length) return n.translate();
		var t = n.scale(), c = +e[0], u = +e[1];
		return r = n.translate(e).clipExtent([[c - .455 * t, u - .238 * t], [c + .455 * t, u + .238 * t]]).stream(l), a = i.translate([c - .307 * t, u + .201 * t]).clipExtent([[c - .425 * t + H, u + .12 * t + H], [c - .214 * t - H, u + .234 * t - H]]).stream(l), s = o.translate([c - .205 * t, u + .212 * t]).clipExtent([[c - .214 * t + H, u + .166 * t + H], [c - .115 * t - H, u + .234 * t - H]]).stream(l), d();
	}, u.fitExtent = function(e, t) {
		return gE(u, e, t);
	}, u.fitSize = function(e, t) {
		return _E(u, e, t);
	}, u.fitWidth = function(e, t) {
		return vE(u, e, t);
	}, u.fitHeight = function(e, t) {
		return yE(u, e, t);
	};
	function d() {
		return e = t = null, u;
	}
	return u.scale(1070);
}
//#endregion
//#region node_modules/d3-geo/src/projection/azimuthal.js
function RE(e) {
	return function(t, n) {
		var r = q(t), i = q(n), a = e(r * i);
		return a === Infinity ? [2, 0] : [a * i * J(t), a * J(n)];
	};
}
function zE(e) {
	return function(t, n) {
		var r = hw(t * t + n * n), i = e(r), a = J(i), o = q(i);
		return [uw(t * a, r * o), vw(r && n * a / r)];
	};
}
//#endregion
//#region node_modules/d3-geo/src/projection/azimuthalEqualArea.js
var BE = RE(function(e) {
	return hw(2 / (1 + e));
});
BE.invert = zE(function(e) {
	return 2 * vw(e / 2);
});
function VE() {
	return kE(BE).scale(124.75).clipAngle(179.999);
}
//#endregion
//#region node_modules/d3-geo/src/projection/azimuthalEquidistant.js
var HE = RE(function(e) {
	return (e = _w(e)) && e / J(e);
});
HE.invert = zE(function(e) {
	return e;
});
function UE() {
	return kE(HE).scale(79.4188).clipAngle(179.999);
}
//#endregion
//#region node_modules/d3-geo/src/projection/mercator.js
function WE(e, t) {
	return [e, fw(gw((W + t) / 2))];
}
WE.invert = function(e, t) {
	return [e, 2 * lw(dw(t)) - W];
};
function GE() {
	return KE(WE).scale(961 / sw);
}
function KE(e) {
	var t = kE(e), n = t.center, r = t.scale, i = t.translate, a = t.clipExtent, o = null, s, c, l;
	t.scale = function(e) {
		return arguments.length ? (r(e), u()) : r();
	}, t.translate = function(e) {
		return arguments.length ? (i(e), u()) : i();
	}, t.center = function(e) {
		return arguments.length ? (n(e), u()) : n();
	}, t.clipExtent = function(e) {
		return arguments.length ? (e == null ? o = s = c = l = null : (o = +e[0][0], s = +e[0][1], c = +e[1][0], l = +e[1][1]), u()) : o == null ? null : [[o, s], [c, l]];
	};
	function u() {
		var n = U * r(), i = t(zw(t.rotate()).invert([0, 0]));
		return a(o == null ? [[i[0] - n, i[1] - n], [i[0] + n, i[1] + n]] : e === WE ? [[Math.max(i[0] - n, o), s], [Math.min(i[0] + n, c), l]] : [[o, Math.max(i[1] - n, s)], [c, Math.min(i[1] + n, l)]]);
	}
	return u();
}
//#endregion
//#region node_modules/d3-geo/src/projection/conicConformal.js
function qE(e) {
	return gw((W + e) / 2);
}
function JE(e, t) {
	var n = q(e), r = e === t ? J(e) : fw(n / q(t)) / fw(qE(t) / qE(e)), i = n * pw(qE(e), r) / r;
	if (!r) return WE;
	function a(e, t) {
		i > 0 ? t < -W + 1e-6 && (t = -W + H) : t > W - 1e-6 && (t = W - H);
		var n = i / pw(qE(t), r);
		return [n * J(r * e), i - n * q(r * e)];
	}
	return a.invert = function(e, t) {
		var n = i - t, a = mw(r) * hw(e * e + n * n), o = uw(e, K(n)) * mw(n);
		return n * r < 0 && (o -= U * mw(e) * mw(n)), [o / r, 2 * lw(pw(i / a, 1 / r)) - W];
	}, a;
}
function YE() {
	return jE(JE).scale(109.5).parallels([30, 30]);
}
//#endregion
//#region node_modules/d3-geo/src/projection/equirectangular.js
function XE(e, t) {
	return [e, t];
}
XE.invert = XE;
function ZE() {
	return kE(XE).scale(152.63);
}
//#endregion
//#region node_modules/d3-geo/src/projection/conicEquidistant.js
function QE(e, t) {
	var n = q(e), r = e === t ? J(e) : (n - q(t)) / (t - e), i = n / r + e;
	if (K(r) < 1e-6) return XE;
	function a(e, t) {
		var n = i - t, a = r * e;
		return [n * J(a), i - n * q(a)];
	}
	return a.invert = function(e, t) {
		var n = i - t, a = uw(e, K(n)) * mw(n);
		return n * r < 0 && (a -= U * mw(e) * mw(n)), [a / r, i - mw(r) * hw(e * e + n * n)];
	}, a;
}
function $E() {
	return jE(QE).scale(131.154).center([0, 13.9389]);
}
//#endregion
//#region node_modules/d3-geo/src/projection/equalEarth.js
var eD = 1.340264, tD = -.081106, nD = 893e-6, rD = .003796, iD = hw(3) / 2, aD = 12;
function oD(e, t) {
	var n = vw(iD * J(t)), r = n * n, i = r * r * r;
	return [e * q(n) / (iD * (eD + 3 * tD * r + i * (7 * nD + 9 * rD * r))), n * (eD + tD * r + i * (nD + rD * r))];
}
oD.invert = function(e, t) {
	for (var n = t, r = n * n, i = r * r * r, a = 0, o, s, c; a < aD && (s = n * (eD + tD * r + i * (nD + rD * r)) - t, c = eD + 3 * tD * r + i * (7 * nD + 9 * rD * r), n -= o = s / c, r = n * n, i = r * r * r, !(K(o) < 1e-12)); ++a);
	return [iD * e * (eD + 3 * tD * r + i * (7 * nD + 9 * rD * r)) / q(n), vw(J(n) / iD)];
};
function sD() {
	return kE(oD).scale(177.158);
}
//#endregion
//#region node_modules/d3-geo/src/projection/gnomonic.js
function cD(e, t) {
	var n = q(t), r = q(e) * n;
	return [n * J(e) / r, J(t) / r];
}
cD.invert = zE(lw);
function lD() {
	return kE(cD).scale(144.049).clipAngle(60);
}
//#endregion
//#region node_modules/d3-geo/src/projection/orthographic.js
function uD(e, t) {
	return [q(t) * J(e), J(t)];
}
uD.invert = zE(vw);
function dD() {
	return kE(uD).scale(249.5).clipAngle(90 + H);
}
//#endregion
//#region node_modules/d3-geo/src/projection/stereographic.js
function fD(e, t) {
	var n = q(t), r = 1 + q(e) * n;
	return [n * J(e) / r, J(t) / r];
}
fD.invert = zE(function(e) {
	return 2 * lw(e);
});
function pD() {
	return kE(fD).scale(250).clipAngle(142);
}
//#endregion
//#region node_modules/d3-geo/src/projection/transverseMercator.js
function mD(e, t) {
	return [fw(gw((W + t) / 2)), -e];
}
mD.invert = function(e, t) {
	return [-t, 2 * lw(dw(e)) - W];
};
function hD() {
	var e = KE(mD), t = e.center, n = e.rotate;
	return e.center = function(e) {
		return arguments.length ? t([-e[1], e[0]]) : (e = t(), [e[1], -e[0]]);
	}, e.rotate = function(e) {
		return arguments.length ? n([
			e[0],
			e[1],
			e.length > 2 ? e[2] + 90 : 90
		]) : (e = n(), [
			e[0],
			e[1],
			e[2] - 90
		]);
	}, n([
		0,
		0,
		90
	]).scale(159.155);
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/colors.js
function Y(e) {
	for (var t = e.length / 6 | 0, n = Array(t), r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/categorical/category10.js
var gD = Y("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), _D = Y("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), vD = Y("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), yD = Y("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0"), bD = Y("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), xD = Y("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), SD = Y("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), CD = Y("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), wD = Y("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), TD = Y("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), ED = Y("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"), X = (e) => yl(e[e.length - 1]), DD = [
	,
	,
	,
	"d8b365f5f5f55ab4ac",
	"a6611adfc27d80cdc1018571",
	"a6611adfc27df5f5f580cdc1018571",
	"8c510ad8b365f6e8c3c7eae55ab4ac01665e",
	"8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
	"8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
	"8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
	"5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
	"5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
].map(Y), OD = X(DD), kD = [
	,
	,
	,
	"af8dc3f7f7f77fbf7b",
	"7b3294c2a5cfa6dba0008837",
	"7b3294c2a5cff7f7f7a6dba0008837",
	"762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
	"762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
	"762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
	"762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
	"40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
	"40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
].map(Y), AD = X(kD), jD = [
	,
	,
	,
	"e9a3c9f7f7f7a1d76a",
	"d01c8bf1b6dab8e1864dac26",
	"d01c8bf1b6daf7f7f7b8e1864dac26",
	"c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
	"c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
	"c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
	"c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
	"8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
	"8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
].map(Y), MD = X(jD), ND = [
	,
	,
	,
	"998ec3f7f7f7f1a340",
	"5e3c99b2abd2fdb863e66101",
	"5e3c99b2abd2f7f7f7fdb863e66101",
	"542788998ec3d8daebfee0b6f1a340b35806",
	"542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
	"5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
	"5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
	"2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
	"2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
].map(Y), PD = X(ND), FD = [
	,
	,
	,
	"ef8a62f7f7f767a9cf",
	"ca0020f4a58292c5de0571b0",
	"ca0020f4a582f7f7f792c5de0571b0",
	"b2182bef8a62fddbc7d1e5f067a9cf2166ac",
	"b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
	"b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
	"b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
	"67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
	"67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
].map(Y), ID = X(FD), LD = [
	,
	,
	,
	"ef8a62ffffff999999",
	"ca0020f4a582bababa404040",
	"ca0020f4a582ffffffbababa404040",
	"b2182bef8a62fddbc7e0e0e09999994d4d4d",
	"b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
	"b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
	"b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
	"67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
	"67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
].map(Y), RD = X(LD), zD = [
	,
	,
	,
	"fc8d59ffffbf91bfdb",
	"d7191cfdae61abd9e92c7bb6",
	"d7191cfdae61ffffbfabd9e92c7bb6",
	"d73027fc8d59fee090e0f3f891bfdb4575b4",
	"d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
	"d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
	"d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
	"a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
	"a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
].map(Y), BD = X(zD), VD = [
	,
	,
	,
	"fc8d59ffffbf91cf60",
	"d7191cfdae61a6d96a1a9641",
	"d7191cfdae61ffffbfa6d96a1a9641",
	"d73027fc8d59fee08bd9ef8b91cf601a9850",
	"d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
	"d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
	"d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
	"a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
	"a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
].map(Y), HD = X(VD), UD = [
	,
	,
	,
	"fc8d59ffffbf99d594",
	"d7191cfdae61abdda42b83ba",
	"d7191cfdae61ffffbfabdda42b83ba",
	"d53e4ffc8d59fee08be6f59899d5943288bd",
	"d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
	"d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
	"d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
	"9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
	"9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
].map(Y), WD = X(UD), GD = [
	,
	,
	,
	"e5f5f999d8c92ca25f",
	"edf8fbb2e2e266c2a4238b45",
	"edf8fbb2e2e266c2a42ca25f006d2c",
	"edf8fbccece699d8c966c2a42ca25f006d2c",
	"edf8fbccece699d8c966c2a441ae76238b45005824",
	"f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
	"f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
].map(Y), KD = X(GD), qD = [
	,
	,
	,
	"e0ecf49ebcda8856a7",
	"edf8fbb3cde38c96c688419d",
	"edf8fbb3cde38c96c68856a7810f7c",
	"edf8fbbfd3e69ebcda8c96c68856a7810f7c",
	"edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
	"f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
	"f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
].map(Y), JD = X(qD), YD = [
	,
	,
	,
	"e0f3dba8ddb543a2ca",
	"f0f9e8bae4bc7bccc42b8cbe",
	"f0f9e8bae4bc7bccc443a2ca0868ac",
	"f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
	"f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
	"f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
	"f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
].map(Y), XD = X(YD), ZD = [
	,
	,
	,
	"fee8c8fdbb84e34a33",
	"fef0d9fdcc8afc8d59d7301f",
	"fef0d9fdcc8afc8d59e34a33b30000",
	"fef0d9fdd49efdbb84fc8d59e34a33b30000",
	"fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
	"fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
	"fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
].map(Y), QD = X(ZD), $D = [
	,
	,
	,
	"ece2f0a6bddb1c9099",
	"f6eff7bdc9e167a9cf02818a",
	"f6eff7bdc9e167a9cf1c9099016c59",
	"f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
	"f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
	"fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
	"fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
].map(Y), eO = X($D), tO = [
	,
	,
	,
	"ece7f2a6bddb2b8cbe",
	"f1eef6bdc9e174a9cf0570b0",
	"f1eef6bdc9e174a9cf2b8cbe045a8d",
	"f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
	"f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
	"fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
	"fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
].map(Y), nO = X(tO), rO = [
	,
	,
	,
	"e7e1efc994c7dd1c77",
	"f1eef6d7b5d8df65b0ce1256",
	"f1eef6d7b5d8df65b0dd1c77980043",
	"f1eef6d4b9dac994c7df65b0dd1c77980043",
	"f1eef6d4b9dac994c7df65b0e7298ace125691003f",
	"f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
	"f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
].map(Y), iO = X(rO), aO = [
	,
	,
	,
	"fde0ddfa9fb5c51b8a",
	"feebe2fbb4b9f768a1ae017e",
	"feebe2fbb4b9f768a1c51b8a7a0177",
	"feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
	"feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
	"fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
	"fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
].map(Y), oO = X(aO), sO = [
	,
	,
	,
	"edf8b17fcdbb2c7fb8",
	"ffffcca1dab441b6c4225ea8",
	"ffffcca1dab441b6c42c7fb8253494",
	"ffffccc7e9b47fcdbb41b6c42c7fb8253494",
	"ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
	"ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
	"ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
].map(Y), cO = X(sO), lO = [
	,
	,
	,
	"f7fcb9addd8e31a354",
	"ffffccc2e69978c679238443",
	"ffffccc2e69978c67931a354006837",
	"ffffccd9f0a3addd8e78c67931a354006837",
	"ffffccd9f0a3addd8e78c67941ab5d238443005a32",
	"ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
	"ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
].map(Y), uO = X(lO), dO = [
	,
	,
	,
	"fff7bcfec44fd95f0e",
	"ffffd4fed98efe9929cc4c02",
	"ffffd4fed98efe9929d95f0e993404",
	"ffffd4fee391fec44ffe9929d95f0e993404",
	"ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
	"ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
	"ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
].map(Y), fO = X(dO), pO = [
	,
	,
	,
	"ffeda0feb24cf03b20",
	"ffffb2fecc5cfd8d3ce31a1c",
	"ffffb2fecc5cfd8d3cf03b20bd0026",
	"ffffb2fed976feb24cfd8d3cf03b20bd0026",
	"ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
	"ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
	"ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
].map(Y), mO = X(pO), hO = [
	,
	,
	,
	"deebf79ecae13182bd",
	"eff3ffbdd7e76baed62171b5",
	"eff3ffbdd7e76baed63182bd08519c",
	"eff3ffc6dbef9ecae16baed63182bd08519c",
	"eff3ffc6dbef9ecae16baed64292c62171b5084594",
	"f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
	"f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
].map(Y), gO = X(hO), _O = [
	,
	,
	,
	"e5f5e0a1d99b31a354",
	"edf8e9bae4b374c476238b45",
	"edf8e9bae4b374c47631a354006d2c",
	"edf8e9c7e9c0a1d99b74c47631a354006d2c",
	"edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
	"f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
	"f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
].map(Y), vO = X(_O), yO = [
	,
	,
	,
	"f0f0f0bdbdbd636363",
	"f7f7f7cccccc969696525252",
	"f7f7f7cccccc969696636363252525",
	"f7f7f7d9d9d9bdbdbd969696636363252525",
	"f7f7f7d9d9d9bdbdbd969696737373525252252525",
	"fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
	"fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
].map(Y), bO = X(yO), xO = [
	,
	,
	,
	"efedf5bcbddc756bb1",
	"f2f0f7cbc9e29e9ac86a51a3",
	"f2f0f7cbc9e29e9ac8756bb154278f",
	"f2f0f7dadaebbcbddc9e9ac8756bb154278f",
	"f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
	"fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
	"fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
].map(Y), SO = X(xO), CO = [
	,
	,
	,
	"fee0d2fc9272de2d26",
	"fee5d9fcae91fb6a4acb181d",
	"fee5d9fcae91fb6a4ade2d26a50f15",
	"fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
	"fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
	"fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
	"fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
].map(Y), wO = X(CO), TO = [
	,
	,
	,
	"fee6cefdae6be6550d",
	"feeddefdbe85fd8d3cd94701",
	"feeddefdbe85fd8d3ce6550da63603",
	"feeddefdd0a2fdae6bfd8d3ce6550da63603",
	"feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
	"fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
	"fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
].map(Y), EO = X(TO);
//#endregion
//#region node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js
function DO(e) {
	return e = Math.max(0, Math.min(1, e)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - e * (35.34 - e * (2381.73 - e * (6402.7 - e * (7024.72 - e * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + e * (170.73 + e * (52.82 - e * (131.46 - e * (176.58 - e * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + e * (442.36 - e * (2482.43 - e * (6167.24 - e * (6614.94 - e * 2475.67))))))) + ")";
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
var OO = $l(sl(300, .5, 0), sl(-240, .5, 1)), kO = $l(sl(-100, .75, .35), sl(80, 1.5, .8)), AO = $l(sl(260, .75, .35), sl(80, 1.5, .8)), jO = sl();
function MO(e) {
	(e < 0 || e > 1) && (e -= Math.floor(e));
	var t = Math.abs(e - .5);
	return jO.h = 360 * e - 100, jO.s = 1.5 - 1.5 * t, jO.l = .8 - .9 * t, jO + "";
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
var NO = gc(), PO = Math.PI / 3, FO = Math.PI * 2 / 3;
function IO(e) {
	var t;
	return e = (.5 - e) * Math.PI, NO.r = 255 * (t = Math.sin(e)) * t, NO.g = 255 * (t = Math.sin(e + PO)) * t, NO.b = 255 * (t = Math.sin(e + FO)) * t, NO + "";
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js
function LO(e) {
	return e = Math.max(0, Math.min(1, e)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + e * (1172.33 - e * (10793.56 - e * (33300.12 - e * (38394.49 - e * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + e * (557.33 + e * (1225.33 - e * (3574.96 - e * (1073.77 + e * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + e * (3211.1 - e * (15327.97 - e * (27814 - e * (22569.18 - e * 6838.66))))))) + ")";
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
function RO(e) {
	var t = e.length;
	return function(n) {
		return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
	};
}
var zO = RO(Y("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")), BO = RO(Y("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), VO = RO(Y("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), HO = RO(Y("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
//#endregion
//#region node_modules/@observablehq/plot/src/defined.js
function UO(e) {
	return e != null && !Number.isNaN(e);
}
function WO(e, t) {
	return UO(t) - +UO(e) || hC(e, t);
}
function GO(e, t) {
	return UO(t) - +UO(e) || gC(e, t);
}
function KO(e) {
	return e != null && `${e}` != "";
}
function qO(e) {
	return isFinite(e) ? e : NaN;
}
function JO(e) {
	return e > 0 && isFinite(e) ? e : NaN;
}
function YO(e) {
	return e < 0 && isFinite(e) ? e : NaN;
}
//#endregion
//#region node_modules/isoformat/src/format.js
function XO(e, t) {
	if (e instanceof Date || (e = /* @__PURE__ */ new Date(+e)), isNaN(e)) return typeof t == "function" ? t(e) : t;
	let n = e.getUTCHours(), r = e.getUTCMinutes(), i = e.getUTCSeconds(), a = e.getUTCMilliseconds();
	return `${ZO(e.getUTCFullYear(), 4)}-${QO(e.getUTCMonth() + 1, 2)}-${QO(e.getUTCDate(), 2)}${n || r || i || a ? `T${QO(n, 2)}:${QO(r, 2)}${i || a ? `:${QO(i, 2)}${a ? `.${QO(a, 3)}` : ""}` : ""}Z` : ""}`;
}
function ZO(e) {
	return e < 0 ? `-${QO(-e, 6)}` : e > 9999 ? `+${QO(e, 6)}` : QO(e, 4);
}
function QO(e, t) {
	return `${e}`.padStart(t, "0");
}
//#endregion
//#region node_modules/isoformat/src/parse.js
var $O = /^(?:[-+]\d{2})?\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?(?:Z|[-+]\d{2}:?\d{2})?)?$/;
function ek(e, t) {
	return $O.test(e += "") ? new Date(e) : typeof t == "function" ? t(e) : t;
}
//#endregion
//#region node_modules/@observablehq/plot/src/order.js
function tk(e) {
	if (e == null) return;
	let t = e[0], n = e[e.length - 1];
	return gC(t, n);
}
//#endregion
//#region node_modules/@observablehq/plot/src/time.js
var nk = 1e3, rk = nk * 60, ik = rk * 60, ak = ik * 24, ok = ak * 7, sk = ak * 30, ck = ak * 365, lk = [
	["millisecond", 1],
	["2 milliseconds", 2],
	["5 milliseconds", 5],
	["10 milliseconds", 10],
	["20 milliseconds", 20],
	["50 milliseconds", 50],
	["100 milliseconds", 100],
	["200 milliseconds", 200],
	["500 milliseconds", 500],
	["second", nk],
	["5 seconds", 5 * nk],
	["15 seconds", 15 * nk],
	["30 seconds", 30 * nk],
	["minute", rk],
	["5 minutes", 5 * rk],
	["15 minutes", 15 * rk],
	["30 minutes", 30 * rk],
	["hour", ik],
	["3 hours", 3 * ik],
	["6 hours", 6 * ik],
	["12 hours", 12 * ik],
	["day", ak],
	["2 days", 2 * ak],
	["week", ok],
	["2 weeks", 2 * ok],
	["month", sk],
	["3 months", 3 * sk],
	["6 months", 6 * sk],
	["year", ck],
	["2 years", 2 * ck],
	["5 years", 5 * ck],
	["10 years", 10 * ck],
	["20 years", 20 * ck],
	["50 years", 50 * ck],
	["100 years", 100 * ck]
], uk = /* @__PURE__ */ new Map([
	["second", nk],
	["minute", rk],
	["hour", ik],
	["day", ak],
	["monday", ok],
	["tuesday", ok],
	["wednesday", ok],
	["thursday", ok],
	["friday", ok],
	["saturday", ok],
	["sunday", ok],
	["week", ok],
	["month", sk],
	["year", ck]
]), dk = /* @__PURE__ */ new Map([
	["second", rr],
	["minute", ir],
	["hour", or],
	["day", cr],
	["monday", pr],
	["tuesday", mr],
	["wednesday", hr],
	["thursday", gr],
	["friday", _r],
	["saturday", vr],
	["sunday", fr],
	["week", fr],
	["month", Dr],
	["year", kr]
]), fk = /* @__PURE__ */ new Map([
	["second", rr],
	["minute", ar],
	["hour", sr],
	["day", ur],
	["monday", xr],
	["tuesday", Sr],
	["wednesday", Cr],
	["thursday", wr],
	["friday", Tr],
	["saturday", Er],
	["sunday", br],
	["week", br],
	["month", Or],
	["year", Ar]
]), pk = Symbol("intervalDuration"), mk = Symbol("intervalType");
for (let [e, t] of dk) t[pk] = uk.get(e), t[mk] = "time";
for (let [e, t] of fk) t[pk] = uk.get(e), t[mk] = "utc";
var hk = [
	[
		"year",
		Ar,
		"utc"
	],
	[
		"month",
		Or,
		"utc"
	],
	[
		"day",
		ur,
		"utc",
		6 * sk
	],
	[
		"hour",
		sr,
		"utc",
		3 * ak
	],
	[
		"minute",
		ar,
		"utc",
		6 * ik
	],
	[
		"second",
		rr,
		"utc",
		30 * rk
	]
], gk = [
	[
		"year",
		kr,
		"time"
	],
	[
		"month",
		Dr,
		"time"
	],
	[
		"day",
		cr,
		"time",
		6 * sk
	],
	[
		"hour",
		or,
		"time",
		3 * ak
	],
	[
		"minute",
		ir,
		"time",
		6 * ik
	],
	[
		"second",
		rr,
		"time",
		30 * rk
	]
], _k = [
	hk[0],
	gk[0],
	hk[1],
	gk[1],
	hk[2],
	gk[2],
	...hk.slice(3)
];
function vk(e) {
	let t = `${e}`.toLowerCase();
	t.endsWith("s") && (t = t.slice(0, -1));
	let n = 1, r = /^(?:(\d+)\s+)/.exec(t);
	switch (r && (t = t.slice(r[0].length), n = +r[1]), t) {
		case "quarter":
			t = "month", n *= 3;
			break;
		case "half": t = "month", n *= 6;
	}
	let i = fk.get(t);
	if (!i) throw Error(`unknown interval: ${e}`);
	if (n > 1 && !i.every) throw Error(`non-periodic interval: ${t}`);
	return [t, n];
}
function yk(e) {
	return xk(vk(e), "time");
}
function bk(e) {
	return xk(vk(e), "utc");
}
function xk([e, t], n) {
	let r = (n === "time" ? dk : fk).get(e);
	return t > 1 && (r = r.every(t), r[pk] = uk.get(e) * t, r[mk] = n), r;
}
function Sk(e, t) {
	if (!(t > 1)) return;
	let n = e[pk];
	if (!lk.some(([, e]) => e === n) || n % ak === 0 && ak < n && n < sk) return;
	let [r] = lk[_C(([, e]) => Math.log(e)).center(lk, Math.log(n * t))];
	return (e[mk] === "time" ? yk : bk)(r);
}
function Ck(e, t, n) {
	let r = t === "time" ? Oa : Aa;
	if (n == null) return r(e === "year" ? "%Y" : e === "month" ? "%Y-%m" : e === "day" ? "%Y-%m-%d" : e === "hour" || e === "minute" ? "%Y-%m-%dT%H:%M" : e === "second" ? "%Y-%m-%dT%H:%M:%S" : "%Y-%m-%dT%H:%M:%S.%L");
	let i = wk(n);
	switch (e) {
		case "millisecond": return Dk(r(".%L"), r(":%M:%S"), i);
		case "second": return Dk(r(":%S"), r("%-I:%M"), i);
		case "minute": return Dk(r("%-I:%M"), r("%p"), i);
		case "hour": return Dk(r("%-I %p"), r("%b %-d"), i);
		case "day": return Dk(r("%-d"), r("%b"), i);
		case "month": return Dk(r("%b"), r("%Y"), i);
		case "year": return r("%Y");
	}
	throw Error("unable to format time ticks");
}
function wk(e) {
	return e === "left" || e === "right" ? (e, t) => `\n${e}\n${t}` : e === "top" ? (e, t) => `${t}\n${e}` : (e, t) => `${e}\n${t}`;
}
function Tk(e) {
	return e === "time" ? gk : e === "utc" ? hk : _k;
}
function Ek(e, t, n) {
	let r = WC(tw(t, (e, t) => Math.abs(t - e)));
	if (r < 1e3) return Ck("millisecond", "utc", n);
	for (let [i, a, o, s] of Tk(e)) {
		if (r > s || i === "hour" && !r) break;
		if (t.every((e) => a.floor(e) >= e)) return Ck(i, o, n);
	}
}
function Dk(e, t, n) {
	return (r, i, a) => {
		let o = e(r, i), s = t(r, i), c = i - tk(a);
		return i !== c && a[c] !== void 0 && s === t(a[c], c) ? o : n(o, s);
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/options.js
var Ok = Object.getPrototypeOf(Uint8Array), kk = Object.prototype.toString;
function Ak(e) {
	return e instanceof Array || e instanceof Ok;
}
function jk(e) {
	return e instanceof Ok && !Nk(e);
}
function Mk(e) {
	return e?.prototype instanceof Ok && !Pk(e);
}
function Nk(e) {
	return e instanceof BigInt64Array || e instanceof BigUint64Array;
}
function Pk(e) {
	return e === BigInt64Array || e === BigUint64Array;
}
var Fk = Symbol("reindex");
function Ik(e, t, n) {
	let r = typeof t;
	return r === "string" ? oj(e) ? Bk(e.getChild(t), n) : Rk(e, Uk(t), n) : r === "function" ? Rk(e, t, n) : r === "number" || t instanceof Date || r === "boolean" ? Z(e, Qk(t), n) : typeof t?.transform == "function" ? zk(t.transform(e), n) : Lk(zk(t, n), e?.[Fk]);
}
function Lk(e, t) {
	return e != null && t ? wA(e, t) : e;
}
function Rk(e, t, n) {
	return Z(e, Mk(n) ? (e, n) => tA(t(e, n)) : t, n);
}
function zk(e, t) {
	return t === void 0 ? lA(e) : sj(e) ? Bk(e, t) : e instanceof t ? e : t.from(e, Mk(t) && !jk(e) ? tA : void 0);
}
function Bk(e, t) {
	return e == null ? e : (t === void 0 || t === Array) && cj(e.type) ? nA(Vk(e)) : zk(Vk(e), t);
}
function Vk(e) {
	return e.nullCount ? e.toJSON() : e.toArray();
}
var Hk = [null], Uk = (e) => (t) => {
	let n = t[e];
	return n === void 0 && t.type === "Feature" ? t.properties?.[e] : n;
}, Wk = { transform: CA }, Gk = { transform: (e) => e }, Kk = () => 1, qk = () => !0, Jk = (e) => e == null ? e : `${e}`, Yk = (e) => e == null ? e : +e, Xk = (e) => e ? e[0] : void 0, Zk = (e) => e ? e[1] : void 0, Qk = (e) => () => e;
function $k(e) {
	let t = `${e}`.slice(1) / 100;
	return (e, n) => ZC(e, t, n);
}
function eA(e) {
	return jk(e) ? e : Z(e, tA, Float64Array);
}
function tA(e) {
	return e == null ? NaN : Number(e);
}
function nA(e) {
	return Z(e, rA);
}
function rA(e) {
	return e instanceof Date && !isNaN(e) ? e : typeof e == "string" ? ek(e) : e == null || isNaN(e = Number(e)) ? void 0 : new Date(e);
}
function iA(e, t) {
	return e === void 0 && (e = t), e === null ? [void 0, "none"] : YA(e) ? [void 0, e] : [e, void 0];
}
function aA(e, t) {
	return e === void 0 && (e = t), e === null || typeof e == "number" ? [void 0, e] : [e, void 0];
}
function oA(e, t, n) {
	if (e != null) return sA(e, t, n);
}
function sA(e, t, n) {
	let r = `${e}`.toLowerCase();
	if (!n.includes(r)) throw Error(`invalid ${t}: ${e}`);
	return r;
}
function cA(e) {
	return oj(e) ? e : lA(e);
}
function lA(e) {
	if (e == null || Ak(e)) return e;
	if (sj(e)) return Bk(e);
	if (uA(e)) switch (e.type) {
		case "FeatureCollection": return e.features;
		case "GeometryCollection": return e.geometries;
		default: return [e];
	}
	return Array.from(e);
}
function uA(e) {
	switch (e?.type) {
		case "FeatureCollection":
		case "GeometryCollection":
		case "Feature":
		case "LineString":
		case "MultiLineString":
		case "MultiPoint":
		case "MultiPolygon":
		case "Point":
		case "Polygon":
		case "Sphere": return !0;
		default: return !1;
	}
}
function Z(e, t, n = Array) {
	return e == null ? e : e instanceof n ? e.map(t) : n.from(e, t);
}
function dA(e, t = Array) {
	return e instanceof t ? e.slice() : t.from(e);
}
function fA({ x: e, x1: t, x2: n }) {
	return e !== void 0 || t !== void 0 || n !== void 0;
}
function pA({ y: e, y1: t, y2: n }) {
	return e !== void 0 || t !== void 0 || n !== void 0;
}
function mA(e) {
	return fA(e) || pA(e) || e.interval !== void 0;
}
function hA(e) {
	return e?.toString === kk;
}
function gA(e) {
	return hA(e) && (e.type !== void 0 || e.domain !== void 0);
}
function _A(e) {
	return hA(e) && typeof e.transform != "function";
}
function vA(e) {
	return _A(e) && e.value === void 0 && e.channel === void 0;
}
function yA(e, t, n, r = Gk) {
	return t === void 0 && n === void 0 ? (t = 0, n = e === void 0 ? r : e) : t === void 0 ? t = e === void 0 ? 0 : e : n === void 0 && (n = e === void 0 ? 0 : e), [t, n];
}
function bA(e, t) {
	return e === void 0 && t === void 0 ? [Xk, Zk] : [e, t];
}
function xA({ z: e, fill: t, stroke: n } = {}) {
	return e === void 0 && ([e] = iA(t)), e === void 0 && ([e] = iA(n)), e;
}
function SA(e) {
	return Ak(e) ? e.length : e?.numRows;
}
function CA(e) {
	let t = SA(e), n = new Uint32Array(t);
	for (let e = 0; e < t; ++e) n[e] = e;
	return n;
}
function wA(e, t) {
	return Ak(e) ? Z(t, (t) => e[t], e.constructor) : Z(t, (t) => e.at(t));
}
function TA(e, t, n) {
	return e.subarray ? e.subarray(t, n) : e.slice(t, n);
}
function EA(e) {
	return typeof e == "object" && e ? e.valueOf() : e;
}
function DA(e) {
	let t;
	return [{
		transform: () => t,
		label: kA(e)
	}, (e) => t = e];
}
function OA(e) {
	return e == null ? [e] : DA(e);
}
function kA(e, t) {
	return typeof e == "string" ? e : e && e.label !== void 0 ? e.label : t;
}
function AA(e, t) {
	return {
		transform(n) {
			let r = e.transform(n), i = t.transform(n);
			return UA(r) || UA(i) ? Z(r, (e, t) => /* @__PURE__ */ new Date((+r[t] + +i[t]) / 2)) : Z(r, (e, t) => (+r[t] + +i[t]) / 2, Float64Array);
		},
		label: e.label
	};
}
function jA(e, t) {
	let n = MA(t?.interval, t?.type);
	return n ? Z(e, n) : e;
}
function MA(e, t) {
	let n = NA(e, t);
	return n && ((e) => UO(e) ? n.floor(e) : e);
}
function NA(e, t) {
	if (e != null) {
		if (typeof e == "number") return PA(e);
		if (typeof e == "string") return (t === "time" ? yk : bk)(e);
		if (typeof e.floor != "function") throw Error("invalid interval; missing floor method");
		if (typeof e.offset != "function") throw Error("invalid interval; missing offset method");
		return e;
	}
}
function PA(e) {
	e = +e, 0 < e && e < 1 && Number.isInteger(1 / e) && (e = -1 / e);
	let t = Math.abs(e);
	return e < 0 ? {
		floor: (e) => Math.floor(e * t) / t,
		offset: (e, n = 1) => (e * t + Math.floor(n)) / t,
		range: (e, n) => rw(Math.ceil(e * t), n * t).map((e) => e / t)
	} : {
		floor: (e) => Math.floor(e / t) * t,
		offset: (e, n = 1) => e + t * Math.floor(n),
		range: (e, n) => rw(Math.ceil(e / t), n / t).map((e) => e * t)
	};
}
function FA(e, t) {
	if (e = NA(e, t), e && typeof e.range != "function") throw Error("invalid interval: missing range method");
	return e;
}
function IA(e, t) {
	if (e = FA(e, t), e && typeof e.ceil != "function") throw Error("invalid interval: missing ceil method");
	return e;
}
function LA(e) {
	return typeof e?.range == "function";
}
function RA(e) {
	return e === void 0 || _A(e) ? e : { value: e };
}
function zA(e) {
	return e == null ? null : {
		transform: (t) => Ik(t, e, Float64Array),
		label: kA(e)
	};
}
function BA(e) {
	return e && typeof e[Symbol.iterator] == "function";
}
function VA(e) {
	for (let t of e) if (t != null) return typeof t != "object" || t instanceof Date;
}
function HA(e) {
	for (let t of e) {
		if (t == null) continue;
		let e = typeof t;
		return e === "string" || e === "boolean";
	}
}
function UA(e) {
	for (let t of e) if (t != null) return t instanceof Date;
}
function WA(e) {
	for (let t of e) if (t != null) return typeof t == "string" && isNaN(t) && ek(t);
}
function GA(e) {
	for (let t of e) if (t != null) {
		if (typeof t != "string") return !1;
		if (t.trim()) return !isNaN(t);
	}
}
function KA(e) {
	for (let t of e) if (t != null) return typeof t == "number";
}
function qA(e, t) {
	let n;
	for (let r of e) if (r != null) {
		if (!t(r)) return !1;
		n = !0;
	}
	return n;
}
var JA = new Set("none,currentcolor,transparent,aliceblue,antiquewhite,aqua,aquamarine,azure,beige,bisque,black,blanchedalmond,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick,floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey,honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon,lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink,lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyellow,lime,limegreen,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple,mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue,mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid,palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue,purple,rebeccapurple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna,silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,tomato,turquoise,violet,wheat,white,whitesmoke,yellow".split(","));
function YA(e) {
	return typeof e == "string" && (e = e.toLowerCase().trim(), /^#[0-9a-f]{3,8}$/.test(e) || /^(?:url|var|rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color|color-mix)\(.*\)$/.test(e) || JA.has(e));
}
function XA(e) {
	return typeof e == "number" && (0 <= e && e <= 1 || isNaN(e));
}
function ZA(e) {
	return e == null || QA(e);
}
function QA(e) {
	return /^\s*none\s*$/i.test(e);
}
function $A(e) {
	return /^\s*round\s*$/i.test(e);
}
function ej(e, t) {
	return oA(e, t, [
		"middle",
		"top-left",
		"top",
		"top-right",
		"right",
		"bottom-right",
		"bottom",
		"bottom-left",
		"left"
	]);
}
function tj(e = "middle") {
	return ej(e, "frameAnchor");
}
function nj(e = {}, ...t) {
	let n = e;
	for (let r of t) for (let t in r) if (n[t] === void 0) {
		let i = r[t];
		n === e ? n = {
			...n,
			[t]: i
		} : n[t] = i;
	}
	return n;
}
function rj(e) {
	console.warn("named iterables are deprecated; please use an object instead");
	let t = /* @__PURE__ */ new Set();
	return Object.fromEntries(Array.from(e, (e) => {
		let { name: n } = e;
		if (n == null) throw Error("missing name");
		let r = `${n}`;
		if (r === "__proto__") throw Error(`illegal name: ${r}`);
		if (t.has(r)) throw Error(`duplicate name: ${r}`);
		return t.add(r), [n, e];
	}));
}
function ij(e) {
	return BA(e) ? rj(e) : e;
}
function aj(e) {
	return e === !0 ? e = "frame" : e === !1 ? e = null : !uA(e) && e != null && (e = sA(e, "clip", ["frame", "sphere"]), e === "sphere" && (e = { type: "Sphere" })), e;
}
function oj(e) {
	return e && typeof e.getChild == "function" && typeof e.toArray == "function" && e.schema && Array.isArray(e.schema.fields);
}
function sj(e) {
	return e && typeof e.toArray == "function" && e.type;
}
function cj(e) {
	return e && (e.typeId === 8 || e.typeId === 10) && e.unit === 1;
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/index.js
var lj = Symbol("position"), uj = Symbol("color"), dj = Symbol("radius"), fj = Symbol("length"), pj = Symbol("opacity"), mj = Symbol("symbol"), hj = Symbol("projection"), Q = /* @__PURE__ */ new Map([
	["x", lj],
	["y", lj],
	["fx", lj],
	["fy", lj],
	["r", dj],
	["color", uj],
	["opacity", pj],
	["symbol", mj],
	["length", fj],
	["projection", hj]
]);
function gj(e) {
	return e === lj || e === hj;
}
function _j(e) {
	return e === lj || e === dj || e === fj || e === pj;
}
var vj = 2 / Math.sqrt(3), yj = /* @__PURE__ */ new Map([
	["asterisk", Bm],
	["circle", Vm],
	["cross", Hm],
	["diamond", Gm],
	["diamond2", Km],
	["hexagon", { draw(e, t) {
		let n = Math.sqrt(t / Math.PI), r = n * vj, i = r / 2;
		e.moveTo(0, r), e.lineTo(n, i), e.lineTo(n, -i), e.lineTo(0, -r), e.lineTo(-n, -i), e.lineTo(-n, i), e.closePath();
	} }],
	["plus", qm],
	["square", Jm],
	["square2", Ym],
	["star", eh],
	["times", uh],
	["triangle", nh],
	["triangle2", ih],
	["wye", lh]
]);
function bj(e) {
	return e && typeof e.draw == "function";
}
function xj(e) {
	return bj(e) ? !0 : typeof e == "string" && yj.has(e.toLowerCase());
}
function Sj(e) {
	if (e == null || bj(e)) return e;
	let t = yj.get(`${e}`.toLowerCase());
	if (t) return t;
	throw Error(`invalid symbol: ${e}`);
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/basic.js
function Cj({ filter: e, sort: t, reverse: n, transform: r, initializer: i, ...a } = {}, o) {
	if (r === void 0 && (e != null && (r = Dj(e)), t != null && !vA(t) && (r = Tj(r, kj(t))), n && (r = Tj(r, Oj))), o != null && i != null) throw Error("transforms cannot be applied after initializers");
	return {
		...a,
		...(t === null || vA(t)) && { sort: t },
		transform: Tj(r, o)
	};
}
function wj({ filter: e, sort: t, reverse: n, initializer: r, ...i } = {}, a) {
	return r === void 0 && (e != null && (r = Dj(e)), t != null && !vA(t) && (r = Ej(r, kj(t))), n && (r = Ej(r, Oj))), {
		...i,
		...(t === null || vA(t)) && { sort: t },
		initializer: Ej(r, a)
	};
}
function Tj(e, t) {
	return e == null ? t === null ? void 0 : t : t == null ? e === null ? void 0 : e : function(n, r, i) {
		return {data: n, facets: r} = e.call(this, n, r, i), t.call(this, cA(n), r, i);
	};
}
function Ej(e, t) {
	return e == null ? t === null ? void 0 : t : t == null ? e === null ? void 0 : e : function(n, r, i, ...a) {
		let o, s, c, l, u, d;
		return {data: s = n, facets: c = r, channels: o} = e.call(this, n, r, i, ...a), {data: u = s, facets: d = c, channels: l} = t.call(this, s, c, {
			...i,
			...o
		}, ...a), {
			data: u,
			facets: d,
			channels: {
				...o,
				...l
			}
		};
	};
}
function Dj(e) {
	return (t, n) => {
		let r = Ik(t, e);
		return {
			data: t,
			facets: n.map((e) => e.filter((e) => r[e]))
		};
	};
}
function Oj(e, t) {
	return {
		data: e,
		facets: t.map((e) => e.slice().reverse())
	};
}
function kj(e) {
	return (typeof e == "function" && e.length !== 1 ? Aj : jj)(e);
}
function Aj(e) {
	return (t, n) => {
		let r = Ak(t) ? (n, r) => e(t[n], t[r]) : (n, r) => e(t.get(n), t.get(r));
		return {
			data: t,
			facets: n.map((e) => e.slice().sort(r))
		};
	};
}
function jj(e) {
	let t, n;
	({channel: t, value: e, order: n} = { ...RA(e) });
	let r = t?.startsWith("-");
	if (r && (t = t.slice(1)), n === void 0 && (n = r ? GO : WO), typeof n != "function") switch (`${n}`.toLowerCase()) {
		case "ascending":
			n = WO;
			break;
		case "descending":
			n = GO;
			break;
		default: throw Error(`invalid order: ${n}`);
	}
	return (r, i, a) => {
		let o;
		if (t === void 0) o = Ik(r, e);
		else {
			if (a === void 0) throw Error("channel sort requires an initializer");
			if (o = a[t], !o) return {};
			o = o.value;
		}
		let s = (e, t) => n(o[e], o[t]);
		return {
			data: r,
			facets: i.map((e) => e.slice().sort(s))
		};
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/group.js
function Mj(e, t, n = Nj) {
	if (e == null) return n(e);
	if (typeof e.reduceIndex == "function") return e;
	if (typeof e.reduce == "function" && hA(e)) return Pj(e);
	if (typeof e == "function") return Fj(e);
	if (/^p\d{2}$/i.test(e)) return Ij($k(e));
	switch (`${e}`.toLowerCase()) {
		case "first": return zj;
		case "last": return Bj;
		case "identity": return Rj;
		case "count": return Vj;
		case "distinct": return Hj;
		case "sum": return t == null ? Vj : Uj;
		case "proportion": return Wj(t, "data");
		case "proportion-facet": return Wj(t, "facet");
		case "deviation": return Ij(DC);
		case "min": return Ij(KC);
		case "min-index": return Ij(qC);
		case "max": return Ij(WC);
		case "max-index": return Ij(GC);
		case "mean": return Lj(QC);
		case "median": return Lj($C);
		case "variance": return Ij(EC);
		case "mode": return Ij(ew);
	}
	return n(e);
}
function Nj(e) {
	throw Error(`invalid reduce: ${e}`);
}
function Pj(e) {
	return console.warn("deprecated reduce interface; implement reduceIndex instead."), {
		...e,
		reduceIndex: e.reduce.bind(e)
	};
}
function Fj(e) {
	return { reduceIndex(t, n, r) {
		return e(wA(n, t), r);
	} };
}
function Ij(e) {
	return { reduceIndex(t, n) {
		return e(t, (e) => n[e]);
	} };
}
function Lj(e) {
	return { reduceIndex(t, n) {
		let r = e(t, (e) => n[e]);
		return UA(n) ? new Date(r) : r;
	} };
}
var Rj = { reduceIndex(e, t) {
	return wA(t, e);
} }, zj = { reduceIndex(e, t) {
	return t[e[0]];
} }, Bj = { reduceIndex(e, t) {
	return t[e[e.length - 1]];
} }, Vj = {
	label: "Frequency",
	reduceIndex(e) {
		return e.length;
	}
}, Hj = {
	label: "Distinct",
	reduceIndex(e, t) {
		let n = new zr();
		for (let r of e) n.add(t[r]);
		return n.size;
	}
}, Uj = Ij(iw);
function Wj(e, t) {
	return e == null ? {
		scope: t,
		label: "Frequency",
		reduceIndex: (e, t, n = 1) => e.length / n
	} : {
		scope: t,
		reduceIndex: (e, t, n = 1) => iw(e, (e) => t[e]) / n
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/channel.js
function Gj(e, { scale: t, type: n, value: r, filter: i, hint: a, label: o = kA(r) }, s) {
	return a === void 0 && typeof r?.transform == "function" && (a = r.hint), Jj(s, {
		scale: t,
		type: n,
		value: Ik(e, r),
		label: o,
		filter: i,
		hint: a
	});
}
function Kj(e, t) {
	return Object.fromEntries(Object.entries(e).map(([e, n]) => [e, Gj(t, n, e)]));
}
function qj(e, t) {
	let n = Object.fromEntries(Object.entries(e).map(([e, { scale: n, value: r }]) => {
		let i = n == null ? null : t[n];
		return [e, i == null ? r : Z(r, i)];
	}));
	return n.channels = e, n;
}
function Jj(e, t) {
	let { scale: n, value: r } = t;
	if (n === !0 || n === "auto") switch (e) {
		case "fill":
		case "stroke":
		case "color":
			t.scale = n !== !0 && qA(r, YA) ? null : "color", t.defaultScale = "color";
			break;
		case "fillOpacity":
		case "strokeOpacity":
		case "opacity":
			t.scale = n !== !0 && qA(r, XA) ? null : "opacity", t.defaultScale = "opacity";
			break;
		case "symbol":
			n !== !0 && qA(r, xj) ? (t.scale = null, t.value = Z(r, Sj)) : t.scale = "symbol", t.defaultScale = "symbol";
			break;
		default: t.scale = Q.has(e) ? e : null;
	}
	else if (n === !1) t.scale = null;
	else if (n != null && !Q.has(n)) throw Error(`unknown scale: ${n}`);
	return t;
}
function Yj(e, t, n, r, i) {
	let { order: a, reverse: o, reduce: s = !0, limit: c } = i;
	for (let l in i) {
		if (!Q.has(l)) continue;
		let { value: u, order: d = a, reverse: f = o, reduce: p = s, limit: m = c } = RA(i[l]), h = u?.startsWith("-");
		if (h && (u = u.slice(1)), d = d === void 0 ? h === (u === "width" || u === "height") ? tM : nM : eM(d), p == null || p === !1) continue;
		let g = l === "fx" || l === "fy" ? Zj(t, r[l]) : Xj(n, l);
		if (!g) throw Error(`missing channel for scale: ${l}`);
		let _ = g.value, [v = 0, y = Infinity] = BA(m) ? m : m < 0 ? [m] : [0, m];
		if (u == null) g.domain = () => {
			let e = Array.from(new zr(_));
			return f && (e = e.reverse()), (v !== 0 || y !== Infinity) && (e = e.slice(v, y)), e;
		};
		else {
			let t = u === "data" ? e : u === "height" ? Qj(n, "y1", "y2") : u === "width" ? Qj(n, "x1", "x2") : $j(n, u, u === "y" ? "y2" : u === "x" ? "x2" : void 0), r = Mj(p === !0 ? "max" : p, t);
			g.domain = () => {
				let e = MC(CA(_), (e) => r.reduceIndex(e, t), (e) => _[e]);
				return d && e.sort(d), f && e.reverse(), (v !== 0 || y !== Infinity) && (e = e.slice(v, y)), e.map(Xk);
			};
		}
	}
}
function Xj(e, t) {
	for (let n in e) {
		let r = e[n];
		if (r.scale === t) return r;
	}
}
function Zj(e, t) {
	let n = e.original;
	if (n === e) return t;
	let r = t.value, i = t.value = [];
	for (let t = 0; t < n.length; ++t) {
		let a = r[n[t][0]];
		for (let n of e[t]) i[n] = a;
	}
	return t;
}
function Qj(e, t, n) {
	let r = $j(e, t);
	return Z($j(e, n), (e, t) => Math.abs(e - r[t]), Float64Array);
}
function $j(e, t, n) {
	let r = e[t];
	if (!r && n !== void 0 && (r = e[n]), r) return r.value;
	throw Error(`missing channel: ${t}`);
}
function eM(e) {
	if (e == null || typeof e == "function") return e;
	switch (`${e}`.toLowerCase()) {
		case "ascending": return tM;
		case "descending": return nM;
	}
	throw Error(`invalid order: ${e}`);
}
function tM([e, t], [n, r]) {
	return WO(t, r) || WO(e, n);
}
function nM([e, t], [n, r]) {
	return GO(t, r) || WO(e, n);
}
function rM(e, t) {
	let n = e[t];
	if (n) {
		for (; n.source;) n = n.source;
		return n.source === null ? null : n;
	}
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/schemes.js
var iM = /* @__PURE__ */ new Map([
	["accent", _D],
	["category10", gD],
	["dark2", vD],
	["observable10", yD],
	["paired", bD],
	["pastel1", xD],
	["pastel2", SD],
	["set1", CD],
	["set2", wD],
	["set3", TD],
	["tableau10", ED]
]);
function aM(e) {
	return e != null && iM.has(`${e}`.toLowerCase());
}
var oM = new Map([
	...iM,
	["brbg", cM(DD, OD)],
	["prgn", cM(kD, AD)],
	["piyg", cM(jD, MD)],
	["puor", cM(ND, PD)],
	["rdbu", cM(FD, ID)],
	["rdgy", cM(LD, RD)],
	["rdylbu", cM(zD, BD)],
	["rdylgn", cM(VD, HD)],
	["spectral", cM(UD, WD)],
	["burd", lM(FD, ID)],
	["buylrd", lM(zD, BD)],
	["blues", sM(hO, gO)],
	["greens", sM(_O, vO)],
	["greys", sM(yO, bO)],
	["oranges", sM(TO, EO)],
	["purples", sM(xO, SO)],
	["reds", sM(CO, wO)],
	["turbo", uM(LO)],
	["viridis", uM(zO)],
	["magma", uM(BO)],
	["inferno", uM(VO)],
	["plasma", uM(HO)],
	["cividis", uM(DO)],
	["cubehelix", uM(OO)],
	["warm", uM(kO)],
	["cool", uM(AO)],
	["bugn", sM(GD, KD)],
	["bupu", sM(qD, JD)],
	["gnbu", sM(YD, XD)],
	["orrd", sM(ZD, QD)],
	["pubu", sM(tO, nO)],
	["pubugn", sM($D, eO)],
	["purd", sM(rO, iO)],
	["rdpu", sM(aO, oO)],
	["ylgn", sM(lO, uO)],
	["ylgnbu", sM(sO, cO)],
	["ylorbr", sM(dO, fO)],
	["ylorrd", sM(pO, mO)],
	["rainbow", dM(MO)],
	["sinebow", dM(IO)]
]);
function sM(e, t) {
	return ({ length: n }) => n === 1 ? [e[3][1]] : n === 2 ? [e[3][1], e[3][2]] : (n = Math.max(3, Math.floor(n)), n > 9 ? tu(t, n) : e[n]);
}
function cM(e, t) {
	return ({ length: n }) => n === 2 ? [e[3][0], e[3][2]] : (n = Math.max(3, Math.floor(n)), n > 11 ? tu(t, n) : e[n]);
}
function lM(e, t) {
	return ({ length: n }) => n === 2 ? [e[3][2], e[3][0]] : (n = Math.max(3, Math.floor(n)), n > 11 ? tu((e) => t(1 - e), n) : e[n].slice().reverse());
}
function uM(e) {
	return ({ length: t }) => tu(e, Math.max(2, Math.floor(t)));
}
function dM(e) {
	return ({ length: t }) => tu(e, Math.floor(t) + 1).slice(0, -1);
}
function fM(e) {
	let t = `${e}`.toLowerCase();
	if (!oM.has(t)) throw Error(`unknown ordinal scheme: ${t}`);
	return oM.get(t);
}
function pM(e, t) {
	let n = fM(e), r = typeof n == "function" ? n({ length: t }) : n;
	return r.length === t ? r : r.slice(0, t);
}
function mM(e, t = "greys") {
	let n = /* @__PURE__ */ new Set(), [r, i] = pM(t, 2);
	for (let t of e) if (t != null) if (t === !0) n.add(i);
	else if (t === !1) n.add(r);
	else return;
	return [...n];
}
var hM = /* @__PURE__ */ new Map([
	["brbg", OD],
	["prgn", AD],
	["piyg", MD],
	["puor", PD],
	["rdbu", ID],
	["rdgy", RD],
	["rdylbu", BD],
	["rdylgn", HD],
	["spectral", WD],
	["burd", (e) => ID(1 - e)],
	["buylrd", (e) => BD(1 - e)],
	["blues", gO],
	["greens", vO],
	["greys", bO],
	["purples", SO],
	["reds", wO],
	["oranges", EO],
	["turbo", LO],
	["viridis", zO],
	["magma", BO],
	["inferno", VO],
	["plasma", HO],
	["cividis", DO],
	["cubehelix", OO],
	["warm", kO],
	["cool", AO],
	["bugn", KD],
	["bupu", JD],
	["gnbu", XD],
	["orrd", QD],
	["pubugn", eO],
	["pubu", nO],
	["purd", iO],
	["rdpu", oO],
	["ylgnbu", cO],
	["ylgn", uO],
	["ylorbr", fO],
	["ylorrd", mO],
	["rainbow", MO],
	["sinebow", IO]
]);
function gM(e) {
	let t = `${e}`.toLowerCase();
	if (!hM.has(t)) throw Error(`unknown quantitative scheme: ${t}`);
	return hM.get(t);
}
var _M = /* @__PURE__ */ new Set([
	"brbg",
	"prgn",
	"piyg",
	"puor",
	"rdbu",
	"rdgy",
	"rdylbu",
	"rdylgn",
	"spectral",
	"burd",
	"buylrd"
]);
function vM(e) {
	return e != null && _M.has(`${e}`.toLowerCase());
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/quantitative.js
var yM = (e) => (t) => e(1 - t), bM = [0, 1], xM = /* @__PURE__ */ new Map([
	["number", wl],
	["rgb", _l],
	["hsl", Jl],
	["hcl", Zl],
	["lab", Yl]
]);
function SM(e) {
	let t = `${e}`.toLowerCase();
	if (!xM.has(t)) throw Error(`unknown interpolator: ${t}`);
	return xM.get(t);
}
function CM(e, t, n, { type: r, nice: i, clamp: a, zero: o, domain: s = LM(e, n), unknown: c, round: l, scheme: u, interval: d, range: f = Q.get(e) === dj ? zM(n, s) : Q.get(e) === fj ? BM(n, s) : Q.get(e) === pj ? bM : void 0, interpolate: p = Q.get(e) === uj ? u == null && f !== void 0 ? _l : gM(u === void 0 ? r === "cyclical" ? "rainbow" : "turbo" : u) : l ? Ml : wl, reverse: m }) {
	if (s = wM(s), d = FA(d, r), (r === "cyclical" || r === "sequential") && (r = "linear"), typeof p != "function" && (p = SM(p)), m = !!m, f !== void 0 && s.length !== (f = wM(f)).length) {
		if (p.length === 1) throw Error("invalid piecewise interpolator");
		p = eu(p, f), f = void 0;
	}
	if (p.length === 1 ? (m &&= (p = yM(p), !1), f === void 0 && (f = Float64Array.from(s, (e, t) => t / (s.length - 1)), f.length === 2 && (f = bM)), t.interpolate((f === bM ? Qk : UM)(p))) : t.interpolate(p), o) {
		let [e, t] = OC(s);
		(e > 0 || t < 0) && (s = dA(s), (tk(s) || 1) === Math.sign(e) ? s[0] = 0 : s[s.length - 1] = 0);
	}
	return m && (s = aw(s)), t.domain(s).unknown(c), i && (t.nice(TM(i, r)), s = t.domain()), f !== void 0 && t.range(f), a && t.clamp(a), {
		type: r,
		domain: s,
		range: f,
		scale: t,
		interpolate: p,
		interval: d
	};
}
function wM(e) {
	return e = lA(e), e.length >= 2 ? e : [e[0], e[0]];
}
function TM(e, t) {
	return e === !0 ? void 0 : typeof e == "number" ? e : IA(e, t);
}
function EM(e, t, n) {
	return CM(e, zu(), t, n);
}
function DM(e, t, n) {
	return OM(e, t, {
		...n,
		exponent: .5
	});
}
function OM(e, t, { exponent: n = 1, ...r }) {
	return CM(e, od().exponent(n), t, {
		...r,
		type: "pow"
	});
}
function kM(e, t, { base: n = 10, domain: r = VM(t), ...i }) {
	return CM(e, Zu().base(n), t, {
		...i,
		domain: r
	});
}
function AM(e, t, { constant: n = 1, ...r }) {
	return CM(e, td().constant(n), t, r);
}
function jM(e, t, { range: n, quantiles: r = n === void 0 ? 5 : (n = [...n]).length, n: i = r, scheme: a = "rdylbu", domain: o = HM(t), unknown: s, interpolate: c, reverse: l }) {
	return n === void 0 && (n = c === void 0 ? Q.get(e) === uj ? pM(a, i) : void 0 : tu(c, i)), o.length > 0 && (o = sd(o, n === void 0 ? { length: i } : n).quantiles()), NM(e, t, {
		domain: o,
		range: n,
		reverse: l,
		unknown: s
	});
}
function MM(e, t, { range: n, n: r = n === void 0 ? 5 : (n = [...n]).length, scheme: i = "rdylbu", domain: a = LM(e, t), unknown: o, interpolate: s, reverse: c }) {
	let [l, u] = OC(a), d;
	return n === void 0 ? (d = UC(l, u, r), d[0] <= l && d.splice(0, 1), d[d.length - 1] >= u && d.pop(), r = d.length + 1, n = s === void 0 ? Q.get(e) === uj ? pM(i, r) : void 0 : tu(s, r)) : (d = tu(wl(l, u), r + 1).slice(1, -1), l instanceof Date && (d = d.map((e) => new Date(e)))), tk(lA(a)) < 0 && d.reverse(), NM(e, t, {
		domain: d,
		range: n,
		reverse: c,
		unknown: o
	});
}
function NM(e, t, { domain: n = [0], unknown: r, scheme: i = "rdylbu", interpolate: a, range: o = a === void 0 ? Q.get(e) === uj ? pM(i, n.length + 1) : void 0 : tu(a, n.length + 1), reverse: s }) {
	n = lA(n);
	let c = tk(n);
	if (!isNaN(c) && !PM(n, c)) throw Error(`the ${e} scale has a non-monotonic domain`);
	return s && (o = aw(o)), {
		type: "threshold",
		scale: cd(c < 0 ? aw(n) : n, o === void 0 ? [] : o).unknown(r),
		domain: n,
		range: o
	};
}
function PM(e, t) {
	for (let n = 1, r = e.length, i = e[0]; n < r; ++n) {
		let r = gC(i, i = e[n]);
		if (r !== 0 && r !== t) return !1;
	}
	return !0;
}
function FM(e) {
	return {
		type: "identity",
		scale: _j(Q.get(e)) ? Bu() : (e) => e
	};
}
function IM(e, t = qO) {
	return e.length ? [KC(e, ({ value: e }) => e === void 0 ? e : KC(e, t)), WC(e, ({ value: e }) => e === void 0 ? e : WC(e, t))] : [0, 1];
}
function LM(e, t) {
	let n = Q.get(e);
	return (n === dj || n === pj || n === fj ? RM : IM)(t);
}
function RM(e) {
	return [0, e.length ? WC(e, ({ value: e }) => e === void 0 ? e : WC(e, qO)) : 1];
}
function zM(e, t) {
	let n = e.find(({ radius: e }) => e !== void 0);
	if (n !== void 0) return [0, n.radius];
	let r = ZC(e, .5, ({ value: e }) => e === void 0 ? NaN : ZC(e, .25, JO)), i = t.map((e) => 3 * Math.sqrt(e / r)), a = 30 / WC(i);
	return a < 1 ? i.map((e) => e * a) : i;
}
function BM(e, t) {
	let n = $C(e, ({ value: e }) => e === void 0 ? NaN : $C(e, Math.abs)), r = t.map((e) => 12 * e / n), i = 60 / WC(r);
	return i < 1 ? r.map((e) => e * i) : r;
}
function VM(e) {
	for (let { value: t } of e) if (t !== void 0) for (let n of t) {
		if (n > 0) return IM(e, JO);
		if (n < 0) return IM(e, YO);
	}
	return [1, 10];
}
function HM(e) {
	let t = [];
	for (let { value: n } of e) if (n !== void 0) for (let e of n) t.push(e);
	return t;
}
function UM(e) {
	return (t, n) => (r) => e(t + r * (n - t));
}
//#endregion
//#region node_modules/@observablehq/plot/src/warnings.js
var WM = 0, GM;
function KM() {
	let e = WM;
	return WM = 0, GM = void 0, e;
}
function qM(e) {
	e !== GM && (GM = e, console.warn(e), ++WM);
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/diverging.js
function JM(e, t, n, r, { type: i, nice: a, clamp: o, domain: s = IM(r), unknown: c, pivot: l = 0, scheme: u, range: d, symmetric: f = !0, interpolate: p = Q.get(e) === uj ? u == null && d !== void 0 ? _l : gM(u === void 0 ? "rdbu" : u) : wl, reverse: m }) {
	l = +l, s = lA(s);
	let [h, g] = s;
	if (s.length > 2 && qM(`Warning: the diverging ${e} scale domain contains extra elements.`), gC(h, g) < 0 && ([h, g] = [g, h], m = !m), h = Math.min(h, l), g = Math.max(g, l), typeof p != "function" && (p = SM(p)), d !== void 0 && (p = p.length === 1 ? UM(p)(...d) : eu(p, d)), m && (p = yM(p)), f) {
		let e = n.apply(l), t = e - n.apply(h), r = n.apply(g) - e;
		t < r ? h = n.invert(e - r) : t > r && (g = n.invert(e + t));
	}
	return t.domain([
		h,
		l,
		g
	]).unknown(c).interpolator(p), o && t.clamp(o), a && t.nice(a), {
		type: i,
		domain: [h, g],
		pivot: l,
		interpolate: p,
		scale: t
	};
}
function YM(e, t, n) {
	return JM(e, gd(), eN, t, n);
}
function XM(e, t, n) {
	return ZM(e, t, {
		...n,
		exponent: .5
	});
}
function ZM(e, t, { exponent: n = 1, ...r }) {
	return JM(e, yd().exponent(n = +n), rN(n), t, {
		...r,
		type: "diverging-pow"
	});
}
function QM(e, t, { base: n = 10, pivot: r = 1, domain: i = IM(t, r < 0 ? YO : JO), ...a }) {
	return JM(e, _d().base(n = +n), tN, t, {
		domain: i,
		pivot: r,
		...a
	});
}
function $M(e, t, { constant: n = 1, ...r }) {
	return JM(e, vd().constant(n = +n), iN(n), t, r);
}
var eN = {
	apply(e) {
		return e;
	},
	invert(e) {
		return e;
	}
}, tN = {
	apply: Math.log,
	invert: Math.exp
}, nN = {
	apply(e) {
		return Math.sign(e) * Math.sqrt(Math.abs(e));
	},
	invert(e) {
		return e * e * Math.sign(e);
	}
};
function rN(e) {
	return e === .5 ? nN : {
		apply(t) {
			return Math.sign(t) * Math.abs(t) ** +e;
		},
		invert(t) {
			return Math.sign(t) * Math.abs(t) ** (1 / e);
		}
	};
}
function iN(e) {
	return {
		apply(t) {
			return Math.sign(t) * Math.log1p(Math.abs(t / e));
		},
		invert(t) {
			return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
		}
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/temporal.js
function aN(e, t, n, r) {
	return CM(e, t, n, r);
}
function oN(e, t, n) {
	return aN(e, fd(), t, n);
}
function sN(e, t, n) {
	return aN(e, pd(), t, n);
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/ordinal.js
var cN = Symbol("ordinal");
function lN(e, t, n, { type: r, interval: i, domain: a, range: o, reverse: s, hint: c }) {
	return i = FA(i, r), a === void 0 && (a = mN(n, i, e)), (r === "categorical" || r === cN) && (r = "ordinal"), s && (a = aw(a)), a = t.domain(a).domain(), o !== void 0 && (typeof o == "function" && (o = o(a)), t.range(o)), {
		type: r,
		domain: a,
		range: o,
		scale: t,
		hint: c,
		interval: i
	};
}
function uN(e, t, { type: n, interval: r, domain: i, range: a, scheme: o, unknown: s, ...c }) {
	r = FA(r, n), i === void 0 && (i = mN(t, r, e));
	let l;
	if (Q.get(e) === mj) l = gN(t), a = a === void 0 ? _N(l) : Z(a, Sj);
	else if (Q.get(e) === uj && (a === void 0 && (n === "ordinal" || n === cN) && (a = mM(i, o), a !== void 0 && (o = void 0)), o === void 0 && a === void 0 && (o = n === "ordinal" ? "turbo" : "observable10"), o !== void 0)) if (a !== void 0) {
		let e = gM(o), t = a[0], n = a[1] - a[0];
		a = ({ length: r }) => tu((r) => e(t + n * r), r);
	} else a = fM(o);
	if (s === Vs) throw Error(`implicit unknown on ${e} scale is not supported`);
	return lN(e, Hs().unknown(s), t, {
		...c,
		type: n,
		domain: i,
		range: a,
		hint: l
	});
}
function dN(e, t, { align: n = .5, padding: r = .5, ...i }) {
	return pN(Gs().align(n).padding(r), t, i, e);
}
function fN(e, t, { align: n = .5, padding: r = .1, paddingInner: i = r, paddingOuter: a = e === "fx" || e === "fy" ? 0 : r, ...o }) {
	return pN(Us().align(n).paddingInner(i).paddingOuter(a), t, o, e);
}
function pN(e, t, n, r) {
	let { round: i } = n;
	return i !== void 0 && e.round(i = !!i), e = lN(r, e, t, n), e.round = i, e;
}
function mN(e, t, n) {
	let r = new zr();
	for (let { value: t, domain: n } of e) {
		if (n !== void 0) return n();
		if (t !== void 0) for (let e of t) r.add(e);
	}
	if (t !== void 0) {
		let [e, n] = OC(r).map(t.floor, t);
		return t.range(e, t.offset(n));
	}
	if (r.size > 1e4 && Q.get(n) === lj) throw Error(`implicit ordinal domain of ${n} scale has more than 10,000 values`);
	return FC(r, WO);
}
function hN(e, t) {
	let n;
	for (let { hint: r } of e) {
		let e = r?.[t];
		if (e !== void 0) {
			if (n === void 0) n = e;
			else if (n !== e) return;
		}
	}
	return n;
}
function gN(e) {
	return {
		fill: hN(e, "fill"),
		stroke: hN(e, "stroke")
	};
}
function _N(e) {
	return ZA(e.fill) ? fh : dh;
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales.js
function vN(e, { label: t, inset: n = 0, insetTop: r = n, insetRight: i = n, insetBottom: a = n, insetLeft: o = n, round: s, nice: c, clamp: l, zero: u, align: d, padding: f, projection: p, facet: { label: m = t } = {}, ...h } = {}) {
	let g = {};
	for (let [n, _] of e) {
		let e = h[n], v = AN(n, _, {
			round: Q.get(n) === lj ? s : void 0,
			nice: c,
			clamp: l,
			zero: u,
			align: d,
			padding: f,
			projection: p,
			...e
		});
		if (v) {
			let { label: s = n === "fx" || n === "fy" ? m : t, percent: c, transform: l, inset: u, insetTop: d = u === void 0 ? n === "y" ? r : 0 : u, insetRight: f = u === void 0 ? n === "x" ? i : 0 : u, insetBottom: p = u === void 0 ? n === "y" ? a : 0 : u, insetLeft: h = u === void 0 ? n === "x" ? o : 0 : u } = e || {};
			if (l == null) l = void 0;
			else if (typeof l != "function") throw Error("invalid scale transform; not a function");
			v.percent = !!c, v.label = s === void 0 ? xN(_, v) : s, v.transform = l, n === "x" || n === "fx" ? (v.insetLeft = +h, v.insetRight = +f) : (n === "y" || n === "fy") && (v.insetTop = +d, v.insetBottom = +p), g[n] = v;
		}
	}
	return g;
}
function yN(e) {
	let t = {}, n = { scales: t };
	for (let [r, i] of Object.entries(e)) {
		let { scale: e, type: a, interval: o, label: s } = i;
		t[r] = UN(i), n[r] = e, e.type = a, o != null && (e.interval = o), s != null && (e.label = s);
	}
	return n;
}
function bN(e, t) {
	let { x: n, y: r, fx: i, fy: a } = e, o = i || a ? CN(t) : t;
	i && TN(i, o), a && EN(a, o);
	let s = i || a ? wN(e, t) : t;
	n && TN(n, s), r && EN(r, s);
}
function xN(e = [], t) {
	let n;
	for (let { label: t } of e) if (t !== void 0) {
		if (n === void 0) n = t;
		else if (n !== t) return;
	}
	if (n !== void 0) return !IN(t) && t.percent && (n = `${n} (%)`), {
		inferred: !0,
		toString: () => n
	};
}
function SN(e) {
	return Math.sign(tk(e.domain())) * Math.sign(tk(e.range()));
}
function CN(e) {
	let { marginTop: t, marginRight: n, marginBottom: r, marginLeft: i, width: a, height: o, facet: { marginTop: s, marginRight: c, marginBottom: l, marginLeft: u } } = e;
	return {
		marginTop: Math.max(t, s),
		marginRight: Math.max(n, c),
		marginBottom: Math.max(r, l),
		marginLeft: Math.max(i, u),
		width: a,
		height: o
	};
}
function wN({ fx: e, fy: t }, n) {
	let { marginTop: r, marginRight: i, marginBottom: a, marginLeft: o, width: s, height: c } = CN(n);
	return {
		marginTop: r,
		marginRight: i,
		marginBottom: a,
		marginLeft: o,
		width: e ? e.scale.bandwidth() + o + i : s,
		height: t ? t.scale.bandwidth() + r + a : c,
		facet: {
			width: s,
			height: c
		}
	};
}
function TN(e, t) {
	if (e.range === void 0) {
		let { insetLeft: n, insetRight: r } = e, { width: i, marginLeft: a = 0, marginRight: o = 0 } = t, s = a + n, c = i - o - r;
		e.range = [s, Math.max(s, c)], IN(e) || (e.range = kN(e)), e.scale.range(e.range);
	}
	DN(e);
}
function EN(e, t) {
	if (e.range === void 0) {
		let { insetTop: n, insetBottom: r } = e, { height: i, marginTop: a = 0, marginBottom: o = 0 } = t, s = a + n, c = i - o - r;
		e.range = [Math.max(s, c), s], IN(e) ? e.range.reverse() : e.range = kN(e), e.scale.range(e.range);
	}
	DN(e);
}
function DN(e) {
	e.round === void 0 && RN(e) && ON(e) <= 30 && e.scale.round(!0);
}
function ON({ scale: e }) {
	let t = e.domain().length, [n, r] = e.range(), i = e.paddingInner ? e.paddingInner() : 1, a = e.paddingOuter ? e.paddingOuter() : e.padding(), o = t - i, s = Math.abs(r - n) / Math.max(1, o + a * 2);
	return (s - Math.floor(s)) * o;
}
function kN(e) {
	let t = e.scale.domain().length + LN(e);
	if (!(t > 2)) return e.range;
	let [n, r] = e.range;
	return Array.from({ length: t }, (e, i) => n + i / (t - 1) * (r - n));
}
function AN(e, t = [], n = {}) {
	let r = PN(e, t, n);
	if (n.type === void 0 && n.domain === void 0 && n.range === void 0 && n.interval == null && e !== "fx" && e !== "fy" && IN({ type: r })) {
		let n = t.map(({ value: e }) => e).filter((e) => e !== void 0);
		n.some(UA) ? qM(`Warning: some data associated with the ${e} scale are dates. Dates are typically associated with a "utc" or "time" scale rather than a "${jN(r)}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can specify the interval of the ${e} scale (e.g., d3.utcDay), or you can suppress this warning by setting the type of the ${e} scale to "${jN(r)}".`) : n.some(WA) ? qM(`Warning: some data associated with the ${e} scale are strings that appear to be dates (e.g., YYYY-MM-DD). If these strings represent dates, you should parse them to Date objects. Dates are typically associated with a "utc" or "time" scale rather than a "${jN(r)}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can suppress this warning by setting the type of the ${e} scale to "${jN(r)}".`) : n.some(GA) && qM(`Warning: some data associated with the ${e} scale are strings that appear to be numbers. If these strings represent numbers, you should parse or coerce them to numbers. Numbers are typically associated with a "linear" scale rather than a "${jN(r)}" scale. If you want to treat this data as ordinal, you can specify the interval of the ${e} scale (e.g., 1 for integers), or you can suppress this warning by setting the type of the ${e} scale to "${jN(r)}".`);
	}
	switch (n.type = r, r) {
		case "diverging":
		case "diverging-sqrt":
		case "diverging-pow":
		case "diverging-log":
		case "diverging-symlog":
		case "cyclical":
		case "sequential":
		case "linear":
		case "sqrt":
		case "threshold":
		case "quantile":
		case "pow":
		case "log":
		case "symlog":
			n = BN(t, n, eA);
			break;
		case "identity":
			switch (Q.get(e)) {
				case lj:
					n = BN(t, n, eA);
					break;
				case mj: n = BN(t, n, VN);
			}
			break;
		case "utc":
		case "time": n = BN(t, n, nA);
	}
	switch (r) {
		case "diverging": return YM(e, t, n);
		case "diverging-sqrt": return XM(e, t, n);
		case "diverging-pow": return ZM(e, t, n);
		case "diverging-log": return QM(e, t, n);
		case "diverging-symlog": return $M(e, t, n);
		case "categorical":
		case "ordinal":
		case cN: return uN(e, t, n);
		case "cyclical":
		case "sequential":
		case "linear": return EM(e, t, n);
		case "sqrt": return DM(e, t, n);
		case "threshold": return NM(e, t, n);
		case "quantile": return jM(e, t, n);
		case "quantize": return MM(e, t, n);
		case "pow": return OM(e, t, n);
		case "log": return kM(e, t, n);
		case "symlog": return AM(e, t, n);
		case "utc": return sN(e, t, n);
		case "time": return oN(e, t, n);
		case "point": return dN(e, t, n);
		case "band": return fN(e, t, n);
		case "identity": return FM(e);
		case void 0: return;
		default: throw Error(`unknown scale type: ${r}`);
	}
}
function jN(e) {
	return typeof e == "symbol" ? e.description : e;
}
function MN(e) {
	return typeof e == "string" ? `${e}`.toLowerCase() : e;
}
var NN = { toString: () => "projection" };
function PN(e, t, { type: n, domain: r, range: i, scheme: a, pivot: o, projection: s }) {
	if (n = MN(n), e === "fx" || e === "fy") return "band";
	(e === "x" || e === "y") && s != null && (n = NN);
	for (let e of t) {
		let t = MN(e.type);
		if (t !== void 0) {
			if (n === void 0) n = t;
			else if (n !== t) throw Error(`scale incompatible with channel: ${n} !== ${t}`);
		}
	}
	if (n === NN) return;
	if (n !== void 0) return n;
	if (r === void 0 && !t.some(({ value: e }) => e !== void 0)) return;
	let c = Q.get(e);
	if (c === dj) return "sqrt";
	if (c === pj || c === fj) return "linear";
	if (c === mj) return "ordinal";
	let l = (r ?? i)?.length;
	if (l < 2 || l > 2) return FN(c);
	if (r !== void 0) {
		if (HA(r)) return FN(c);
		if (UA(r)) return "utc";
	} else {
		let e = t.map(({ value: e }) => e).filter((e) => e !== void 0);
		if (e.some(HA)) return FN(c);
		if (e.some(UA)) return "utc";
	}
	if (c === uj) {
		if (o != null || vM(a)) return "diverging";
		if (aM(a)) return "categorical";
	}
	return "linear";
}
function FN(e) {
	switch (e) {
		case lj: return "point";
		case uj: return cN;
		default: return "ordinal";
	}
}
function IN({ type: e }) {
	return e === "ordinal" || e === "point" || e === "band" || e === cN;
}
function LN({ type: e }) {
	return e === "threshold";
}
function RN({ type: e }) {
	return e === "point" || e === "band";
}
function zN(e) {
	if (e === void 0) return !0;
	let t = e.domain(), n = e(t[0]);
	for (let r = 1, i = t.length; r < i; ++r) if (e(t[r]) - n) return !1;
	return !0;
}
function BN(e, { domain: t, ...n }, r) {
	for (let n of e) n.value !== void 0 && (t === void 0 && (t = n.value?.domain), n.value = r(n.value));
	return {
		domain: t === void 0 ? t : r(t),
		...n
	};
}
function VN(e) {
	return Z(e, Sj);
}
function HN(e) {
	return (t) => {
		if (!Q.has(t = `${t}`)) throw Error(`unknown scale: ${t}`);
		return e[t];
	};
}
function UN({ scale: e, type: t, domain: n, range: r, interpolate: i, interval: a, transform: o, percent: s, pivot: c }) {
	if (t === "identity") return {
		type: "identity",
		apply: (e) => e,
		invert: (e) => e
	};
	let l = e.unknown ? e.unknown() : void 0;
	return {
		type: t,
		domain: dA(n),
		...r !== void 0 && { range: dA(r) },
		...o !== void 0 && { transform: o },
		...s && { percent: s },
		...l !== void 0 && { unknown: l },
		...a !== void 0 && { interval: a },
		...i !== void 0 && { interpolate: i },
		...e.clamp && { clamp: e.clamp() },
		...c !== void 0 && {
			pivot: c,
			symmetric: !1
		},
		...e.base && { base: e.base() },
		...e.exponent && { exponent: e.exponent() },
		...e.constant && { constant: e.constant() },
		...e.align && {
			align: e.align(),
			round: e.round()
		},
		...e.padding && (e.paddingInner ? {
			paddingInner: e.paddingInner(),
			paddingOuter: e.paddingOuter()
		} : { padding: e.padding() }),
		...e.bandwidth && {
			bandwidth: e.bandwidth(),
			step: e.step()
		},
		apply: (t) => e(t),
		...e.invert && { invert: (t) => e.invert(t) }
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/facet.js
function WN(e, t) {
	let { fx: n, fy: r } = vN(e, t), i = n?.scale.domain(), a = r?.scale.domain();
	return i && a ? wC(i, a).map(([e, t], n) => ({
		x: e,
		y: t,
		i: n
	})) : i ? i.map((e, t) => ({
		x: e,
		i: t
	})) : a ? a.map((e, t) => ({
		y: e,
		i: t
	})) : void 0;
}
function GN(e, { x: t, y: n }) {
	return t &&= QN(t), n &&= QN(n), e.filter(t && n ? (e) => t.has(e.x) && n.has(e.y) : t ? (e) => t.has(e.x) : (e) => n.has(e.y)).sort(t && n ? (e, r) => t.get(e.x) - t.get(r.x) || n.get(e.y) - n.get(r.y) : t ? (e, n) => t.get(e.x) - t.get(n.x) : (e, t) => n.get(e.y) - n.get(t.y));
}
function KN(e, { fx: t, fy: n }) {
	let r = CA(e), i = t?.value, a = n?.value;
	return t && n ? jC(r, (e) => (e.fx = i[e[0]], e.fy = a[e[0]], e), (e) => i[e], (e) => a[e]) : t ? jC(r, (e) => (e.fx = i[e[0]], e), (e) => i[e]) : jC(r, (e) => (e.fy = a[e[0]], e), (e) => a[e]);
}
function qN(e, t, { marginTop: n, marginLeft: r }) {
	let i = e ? ({ x: t }) => e(t) - r : () => 0, a = t ? ({ y: e }) => t(e) - n : () => 0;
	return function(e) {
		this.tagName === "svg" ? (this.setAttribute("x", i(e)), this.setAttribute("y", a(e))) : this.setAttribute("transform", `translate(${i(e)},${a(e)})`);
	};
}
function JN(e) {
	let t = [], n = new Uint32Array(iw(e, (e) => e.length));
	for (let r of e) {
		let i = 0;
		for (let t of e) r !== t && (n.set(t, i), i += t.length);
		t.push(n.slice(0, i));
	}
	return t;
}
var YN = /* @__PURE__ */ new Map([
	["top", nP],
	["right", aP],
	["bottom", rP],
	["left", iP],
	["top-left", dP(nP, iP)],
	["top-right", dP(nP, aP)],
	["bottom-left", dP(rP, iP)],
	["bottom-right", dP(rP, aP)],
	["top-empty", oP],
	["right-empty", lP],
	["bottom-empty", sP],
	["left-empty", cP],
	["empty", uP]
]);
function XN(e) {
	if (e == null) return null;
	let t = YN.get(`${e}`.toLowerCase());
	if (t) return t;
	throw Error(`invalid facet anchor: ${e}`);
}
var ZN = /* @__PURE__ */ new WeakMap();
function QN(e) {
	let t = ZN.get(e);
	return t || ZN.set(e, t = new Rr(Z(e, (e, t) => [e, t]))), t;
}
function $N(e, t) {
	return QN(e).get(t);
}
function eP(e, t, n) {
	return t = EA(t), n = EA(n), e.find((e) => Object.is(EA(e.x), t) && Object.is(EA(e.y), n));
}
function tP(e, t, n) {
	return eP(e, t, n)?.empty;
}
function nP(e, { y: t }, { y: n }) {
	return !t || $N(t, n) === 0;
}
function rP(e, { y: t }, { y: n }) {
	return !t || $N(t, n) === t.length - 1;
}
function iP(e, { x: t }, { x: n }) {
	return !t || $N(t, n) === 0;
}
function aP(e, { x: t }, { x: n }) {
	return !t || $N(t, n) === t.length - 1;
}
function oP(e, { y: t }, { x: n, y: r, empty: i }) {
	if (i) return !1;
	if (!t) return;
	let a = $N(t, r);
	if (a > 0) return tP(e, n, t[a - 1]);
}
function sP(e, { y: t }, { x: n, y: r, empty: i }) {
	if (i) return !1;
	if (!t) return;
	let a = $N(t, r);
	if (a < t.length - 1) return tP(e, n, t[a + 1]);
}
function cP(e, { x: t }, { x: n, y: r, empty: i }) {
	if (i) return !1;
	if (!t) return;
	let a = $N(t, n);
	if (a > 0) return tP(e, t[a - 1], r);
}
function lP(e, { x: t }, { x: n, y: r, empty: i }) {
	if (i) return !1;
	if (!t) return;
	let a = $N(t, n);
	if (a < t.length - 1) return tP(e, t[a + 1], r);
}
function uP(e, t, { empty: n }) {
	return n;
}
function dP(e, t) {
	return function() {
		return e.apply(null, arguments) && t.apply(null, arguments);
	};
}
function fP(e, { channels: { fx: t, fy: n }, groups: r }) {
	return t && n ? e.map(({ x: e, y: t }) => r.get(e)?.get(t) ?? []) : t ? e.map(({ x: e }) => r.get(e) ?? []) : e.map(({ y: e }) => r.get(e) ?? []);
}
//#endregion
//#region node_modules/@observablehq/plot/src/projection.js
var pP = Math.PI, mP = 2 * pP, hP = .618;
function gP({ projection: e, inset: t = 0, insetTop: n = t, insetRight: r = t, insetBottom: i = t, insetLeft: a = t } = {}, o) {
	if (e == null) return;
	if (typeof e.stream == "function") return e;
	let s, c, l = "frame";
	if (hA(e)) {
		let t;
		if ({type: e, domain: c, inset: t, insetTop: n = t === void 0 ? n : t, insetRight: r = t === void 0 ? r : t, insetBottom: i = t === void 0 ? i : t, insetLeft: a = t === void 0 ? a : t, clip: l = l, ...s} = e, e == null) return;
	}
	typeof e != "function" && ({type: e} = _P(e));
	let { width: u, height: d, marginLeft: f, marginRight: p, marginTop: m, marginBottom: h } = o, g = u - f - p - a - r, _ = d - m - h - n - i;
	if (e = e?.({
		width: g,
		height: _,
		clip: l,
		...s
	}), e == null) return;
	l = vP(l, f, m, u - p, d - h);
	let v = f + a, y = m + n, b;
	if (c != null) {
		let [[t, n], [r, i]] = dE(e).bounds(c), a = Math.min(g / (r - t), _ / (i - n));
		a > 0 ? (v -= (a * (t + r) - g) / 2, y -= (a * (n + i) - _) / 2, b = fE({ point(e, t) {
			this.stream.point(e * a + v, t * a + y);
		} })) : qM("Warning: the projection could not be fit to the specified domain; using the default scale.");
	}
	return b ??= v === 0 && y === 0 ? xP() : fE({ point(e, t) {
		this.stream.point(e + v, t + y);
	} }), { stream: (t) => e.stream(b.stream(l(t))) };
}
function _P(e) {
	switch (`${e}`.toLowerCase()) {
		case "albers-usa": return yP(LE, .7463, .4673);
		case "albers": return bP(FE, .7463, .4673);
		case "azimuthal-equal-area": return yP(VE, 4, 4);
		case "azimuthal-equidistant": return yP(UE, mP, mP);
		case "conic-conformal": return bP(YE, mP, mP);
		case "conic-equal-area": return bP(PE, 6.1702, 2.9781);
		case "conic-equidistant": return bP($E, 7.312, 3.6282);
		case "equal-earth": return yP(sD, 5.4133, 2.6347);
		case "equirectangular": return yP(ZE, mP, pP);
		case "gnomonic": return yP(lD, 3.4641, 3.4641);
		case "identity": return { type: xP };
		case "reflect-y": return { type: SP };
		case "mercator": return yP(GE, mP, mP);
		case "orthographic": return yP(dD, 2, 2);
		case "stereographic": return yP(pD, 2, 2);
		case "transverse-mercator": return yP(hD, mP, mP);
		default: throw Error(`unknown projection type: ${e}`);
	}
}
function vP(e, t, n, r, i) {
	if (e === !1 || e == null || typeof e == "number") return (e) => e;
	switch (e === !0 && (e = "frame"), `${e}`.toLowerCase()) {
		case "frame": return oT(t, n, r, i);
		default: throw Error(`unknown projection clip type: ${e}`);
	}
}
function yP(e, t, n) {
	return {
		type: ({ width: r, height: i, rotate: a, precision: o = .15, clip: s }) => {
			let c = e();
			return o != null && c.precision?.(o), a != null && c.rotate?.(a), typeof s == "number" && c.clipAngle?.(s), r != null && (c.scale(Math.min(r / t, i / n)), c.translate([r / 2, i / 2])), c;
		},
		aspectRatio: n / t
	};
}
function bP(e, t, n) {
	let { type: r, aspectRatio: i } = yP(e, t, n);
	return {
		type: (e) => {
			let { parallels: t, domain: n, width: i, height: a } = e, o = r(e);
			return t != null && (o.parallels(t), n === void 0 && i != null && o.fitSize([i, a], { type: "Sphere" })), o;
		},
		aspectRatio: i
	};
}
var xP = Qk({ stream: (e) => e }), SP = Qk(fE({ point(e, t) {
	this.stream.point(e, -t);
} }));
function CP(e, t, n, r) {
	let i = n[e], a = n[t], o = i.length, s = n[e] = new Float64Array(o).fill(NaN), c = n[t] = new Float64Array(o).fill(NaN), l, u = r.stream({ point(e, t) {
		s[l] = e, c[l] = t;
	} });
	for (l = 0; l < o; ++l) u.point(i[l], a[l]);
}
function wP({ projection: e } = {}) {
	return e == null ? !1 : typeof e.stream == "function" || (hA(e) && (e = e.type), e != null);
}
function TP(e) {
	if (typeof e?.stream == "function") return hP;
	if (hA(e)) {
		let t, n;
		if ({domain: t, type: e, ...n} = e, t != null && e != null) {
			let [[r, i], [a, o]] = dE((typeof e == "string" ? _P(e).type : e)({
				...n,
				width: 100,
				height: 100
			})).bounds(t), s = (o - i) / (a - r);
			return s && isFinite(s) ? s < .2 ? .2 : s > 5 ? 5 : s : hP;
		}
	}
	if (e != null) {
		if (typeof e != "function") {
			let { aspectRatio: t } = _P(e);
			if (t) return t;
		}
		return hP;
	}
}
function EP(e) {
	let t = [], n = [], r = {
		scale: "x",
		value: t
	}, i = {
		scale: "y",
		value: n
	}, a = {
		point(e, r) {
			t.push(e), n.push(r);
		},
		lineStart() {},
		lineEnd() {},
		polygonStart() {},
		polygonEnd() {},
		sphere() {}
	};
	for (let t of e.value) Tw(t, a);
	return [r, i];
}
function DP({ x: e, y: t }) {
	if (e || t) return e ??= (e) => e, t ??= (e) => e, fE({ point(n, r) {
		this.stream.point(e(n), t(r));
	} });
}
//#endregion
//#region node_modules/@observablehq/plot/src/context.js
function OP(e = {}) {
	let { document: t = typeof window < "u" ? window.document : void 0, clip: n } = e;
	return {
		document: t,
		clip: aj(n)
	};
}
function kP(e, { document: t }) {
	return N(Je(e).call(t.documentElement));
}
//#endregion
//#region node_modules/@observablehq/plot/src/memoize.js
var AP = Symbol("unset");
function jP(e) {
	return (e.length === 1 ? MP : NP)(e);
}
function MP(e) {
	let t, n = AP;
	return (r) => (Object.is(n, r) || (n = r, t = e(r)), t);
}
function NP(e) {
	let t, n;
	return (...r) => ((n?.length !== r.length || n.some((e, t) => !Object.is(e, r[t]))) && (n = r, t = e(...r)), t);
}
//#endregion
//#region node_modules/@observablehq/plot/src/format.js
var PP = jP((e) => new Intl.NumberFormat(e));
jP((e, t) => new Intl.DateTimeFormat(e, {
	timeZone: "UTC",
	...t && { month: t }
})), jP((e, t) => new Intl.DateTimeFormat(e, {
	timeZone: "UTC",
	...t && { weekday: t }
}));
function FP(e = "en-US") {
	let t = PP(e);
	return (e) => e != null && !isNaN(e) ? t.format(e) : void 0;
}
function IP(e) {
	return XO(e, "Invalid Date");
}
function LP(e = "en-US") {
	let t = FP(e);
	return (e) => (e instanceof Date ? IP : typeof e == "number" ? t : Jk)(e);
}
var RP = LP(), zP = (typeof window < "u" ? window.devicePixelRatio > 1 : typeof it > "u") ? 0 : .5, BP = 0;
function VP() {
	return `plot-clip-${++BP}`;
}
function HP(e, { title: t, href: n, ariaLabel: r, ariaDescription: i, ariaHidden: a, target: o, fill: s, fillOpacity: c, stroke: l, strokeWidth: u, strokeOpacity: d, strokeLinejoin: f, strokeLinecap: p, strokeMiterlimit: m, strokeDasharray: h, strokeDashoffset: g, opacity: _, mixBlendMode: v, imageFilter: y, paintOrder: b, pointerEvents: x, shapeRendering: S, channels: C }, { ariaLabel: w, fill: T = "currentColor", fillOpacity: E, stroke: D = "none", strokeOpacity: O, strokeWidth: k, strokeLinecap: A, strokeLinejoin: j, strokeMiterlimit: ee, paintOrder: te }) {
	T === null && (s = null, c = null), D === null && (l = null, d = null), ZA(T) ? !ZA(D) && (!ZA(s) || C?.fill) && (D = "none") : ZA(D) && (!ZA(l) || C?.stroke) && (T = "none");
	let [ne, re] = iA(s, T), [ie, ae] = aA(c, E), [oe, se] = iA(l, D), [ce, le] = aA(d, O), [ue, de] = aA(_);
	QA(se) || (u === void 0 && (u = k), p === void 0 && (p = A), f === void 0 && (f = j), m === void 0 && !$A(f) && (m = ee), !QA(re) && b === void 0 && (b = te));
	let [fe, pe] = aA(u);
	return T !== null && (e.fill = rF(re, "currentColor"), e.fillOpacity = iF(ae, 1)), D !== null && (e.stroke = rF(se, "none"), e.strokeWidth = iF(pe, 1), e.strokeOpacity = iF(le, 1), e.strokeLinejoin = rF(f, "miter"), e.strokeLinecap = rF(p, "butt"), e.strokeMiterlimit = iF(m, 4), e.strokeDasharray = rF(h, "none"), e.strokeDashoffset = rF(g, "0")), e.target = Jk(o), e.ariaLabel = Jk(w), e.ariaDescription = Jk(i), e.ariaHidden = Jk(a), e.opacity = iF(de, 1), e.mixBlendMode = rF(v, "normal"), e.imageFilter = rF(y, "none"), e.paintOrder = rF(b, "normal"), e.pointerEvents = rF(x, "auto"), e.shapeRendering = rF(S, "auto"), {
		title: {
			value: t,
			optional: !0,
			filter: null
		},
		href: {
			value: n,
			optional: !0,
			filter: null
		},
		ariaLabel: {
			value: r,
			optional: !0,
			filter: null
		},
		fill: {
			value: ne,
			scale: "auto",
			optional: !0
		},
		fillOpacity: {
			value: ie,
			scale: "auto",
			optional: !0
		},
		stroke: {
			value: oe,
			scale: "auto",
			optional: !0
		},
		strokeOpacity: {
			value: ce,
			scale: "auto",
			optional: !0
		},
		strokeWidth: {
			value: fe,
			optional: !0
		},
		opacity: {
			value: ue,
			scale: "auto",
			optional: !0
		}
	};
}
function UP(e, t) {
	t && e.filter((e) => KO(t[e])).append("title").call(WP, t);
}
function WP(e, t) {
	t && e.text((e) => RP(t[e]));
}
function GP(e, { target: t, tip: n }, { ariaLabel: r, title: i, fill: a, fillOpacity: o, stroke: s, strokeOpacity: c, strokeWidth: l, opacity: u, href: d }) {
	r && $(e, "aria-label", (e) => r[e]), a && $(e, "fill", (e) => a[e]), o && $(e, "fill-opacity", (e) => o[e]), s && $(e, "stroke", (e) => s[e]), c && $(e, "stroke-opacity", (e) => c[e]), l && $(e, "stroke-width", (e) => l[e]), u && $(e, "opacity", (e) => u[e]), d && eF(e, (e) => d[e], t), n || UP(e, i);
}
function KP(e, t, n, r) {
	let i, { clip: a = r.clip } = t;
	a === "frame" ? (e = kP("svg:g", r).each(function() {
		this.appendChild(e.node()), e.node = () => this;
	}), i = JP(r, n)) : a && (i = ZP(a, r)), $(e, "aria-label", t.ariaLabel), $(e, "aria-description", t.ariaDescription), $(e, "aria-hidden", t.ariaHidden), $(e, "clip-path", i);
}
function qP(e) {
	let t = /* @__PURE__ */ new WeakMap();
	return (n, r) => {
		let i = t.get(n);
		if (!i) {
			let a = VP();
			N(n.ownerSVGElement).append("clipPath").attr("id", a).call(e, n, r), t.set(n, i = `url(#${a})`);
		}
		return i;
	};
}
var JP = qP((e, t, n) => {
	let { width: r, height: i, marginLeft: a, marginRight: o, marginTop: s, marginBottom: c } = n;
	e.append("rect").attr("x", a).attr("y", s).attr("width", r - o - a).attr("height", i - s - c);
}), YP = /* @__PURE__ */ new WeakMap(), XP = { type: "Sphere" };
function ZP(e, t) {
	let n, r;
	if ((n = YP.get(t)) || YP.set(t, n = /* @__PURE__ */ new WeakMap()), e.type === "Sphere" && (e = XP), !(r = n.get(e))) {
		let i = VP();
		N(t.ownerSVGElement).append("clipPath").attr("id", i).append("path").attr("d", t.path()(e)), n.set(e, r = `url(#${i})`);
	}
	return r;
}
function QP(e, t, n, r) {
	KP(e, t, n, r), $(e, "class", t.className), $(e, "fill", t.fill), $(e, "fill-opacity", t.fillOpacity), $(e, "stroke", t.stroke), $(e, "stroke-width", t.strokeWidth), $(e, "stroke-opacity", t.strokeOpacity), $(e, "stroke-linejoin", t.strokeLinejoin), $(e, "stroke-linecap", t.strokeLinecap), $(e, "stroke-miterlimit", t.strokeMiterlimit), $(e, "stroke-dasharray", t.strokeDasharray), $(e, "stroke-dashoffset", t.strokeDashoffset), $(e, "shape-rendering", t.shapeRendering), $(e, "filter", t.imageFilter), $(e, "paint-order", t.paintOrder);
	let { pointerEvents: i = r.pointerSticky === !1 ? "none" : void 0 } = t;
	$(e, "pointer-events", i);
}
function $P(e, t) {
	tF(e, "mix-blend-mode", t.mixBlendMode), $(e, "opacity", t.opacity);
}
function eF(e, t, n) {
	e.each(function(e) {
		let r = t(e);
		if (r != null) {
			let e = this.ownerDocument.createElementNS(We.svg, "a");
			e.setAttribute("fill", "inherit"), e.setAttributeNS(We.xlink, "href", r), n != null && e.setAttribute("target", n), this.parentNode.insertBefore(e, this).appendChild(this);
		}
	});
}
function $(e, t, n) {
	n != null && e.attr(t, n);
}
function tF(e, t, n) {
	n != null && e.style(t, n);
}
function nF(e, t, { x: n, y: r }, i = zP, a = zP) {
	i += t.dx, a += t.dy, n?.bandwidth && (i += n.bandwidth() / 2), r?.bandwidth && (a += r.bandwidth() / 2), (i || a) && e.attr("transform", `translate(${i},${a})`);
}
function rF(e, t) {
	if ((e = Jk(e)) !== t) return e;
}
function iF(e, t) {
	if ((e = Yk(e)) !== t) return e;
}
var aF = /^-?([_a-z]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])([_a-z0-9-]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])*$/i;
function oF(e) {
	if (e === void 0) return "plot-d6a7b5";
	if (e = `${e}`, !aF.test(e)) throw Error(`invalid class name: ${e}`);
	return e;
}
function sF(e, t) {
	if (typeof t == "string") e.property("style", t);
	else if (t != null) for (let n of e) Object.assign(n.style, t);
}
function cF({ frameAnchor: e }, { width: t, height: n, marginTop: r, marginRight: i, marginBottom: a, marginLeft: o }) {
	return [/left$/.test(e) ? o : /right$/.test(e) ? t - i : (o + t - i) / 2, /^top/.test(e) ? r : /^bottom/.test(e) ? n - a : (r + n - a) / 2];
}
//#endregion
//#region node_modules/@observablehq/plot/src/mark.js
var lF = class {
	constructor(e, t = {}, n = {}, r) {
		let { facet: i = "auto", facetAnchor: a, fx: o, fy: s, sort: c, dx: l = 0, dy: u = 0, margin: d = 0, marginTop: f = d, marginRight: p = d, marginBottom: m = d, marginLeft: h = d, className: g, clip: _ = r?.clip, channels: v, tip: y, render: b } = n;
		if (this.data = e, this.sort = vA(c) ? c : null, this.initializer = wj(n).initializer, this.transform = this.initializer ? n.transform : Cj(n).transform, i === null || i === !1 ? this.facet = null : (this.facet = sA(i === !0 ? "include" : i, "facet", [
			"auto",
			"include",
			"exclude",
			"super"
		]), this.fx = e === Hk && typeof o == "string" ? [o] : o, this.fy = e === Hk && typeof s == "string" ? [s] : s), this.facetAnchor = XN(a), t = ij(t), v !== void 0 && (t = {
			...fF(v),
			...t
		}), r !== void 0 && (t = {
			...HP(this, n, r),
			...t
		}), this.channels = Object.fromEntries(Object.entries(t).map(([t, n]) => {
			if (_A(n.value)) {
				let { value: e, label: t = n.label, scale: r = n.scale } = n.value;
				n = {
					...n,
					label: t,
					scale: r,
					value: e
				};
			}
			if (e === Hk && typeof n.value == "string") {
				let { value: e } = n;
				n = {
					...n,
					value: [e]
				};
			}
			return [t, n];
		}).filter(([e, { value: t, optional: n }]) => {
			if (t != null) return !0;
			if (n) return !1;
			throw Error(`missing channel value: ${e}`);
		})), this.dx = +l, this.dy = +u, this.marginTop = +f, this.marginRight = +p, this.marginBottom = +m, this.marginLeft = +h, this.clip = aj(_), this.tip = pF(y), this.className = Jk(g), this.facet === "super") {
			if (o || s) throw Error("super-faceting cannot use fx or fy");
			for (let e in this.channels) {
				let { scale: n } = t[e];
				if (n === "x" || n === "y") throw Error("super-faceting cannot use x or y");
			}
		}
		b != null && (this.render = dF(b, this.render));
	}
	initialize(e, t, n) {
		let r = cA(this.data);
		e === void 0 && r != null && (e = [CA(r)]);
		let i = e;
		this.transform != null && ({facets: e, data: r} = this.transform(r, e, n), r = cA(r)), e !== void 0 && (e.original = i);
		let a = Kj(this.channels, r);
		return this.sort != null && Yj(r, e, a, t, this.sort), {
			data: r,
			facets: e,
			channels: a
		};
	}
	filter(e, t, n) {
		for (let r in t) {
			let { filter: i = UO } = t[r];
			if (i !== null) {
				let t = n[r];
				e = e.filter((e) => i(t[e]));
			}
		}
		return e;
	}
	project(e, t, n) {
		for (let r in e) if (e[r].scale === "x" && /^x|x$/.test(r)) {
			let i = r.replace(/^x|x$/, "y");
			i in e && e[i].scale === "y" && CP(r, i, t, n.projection);
		}
	}
	scale(e, t, n) {
		let r = qj(e, t);
		return n.projection && this.project(e, r, n), r;
	}
};
function uF(...e) {
	return e.plot = lF.prototype.plot, e;
}
function dF(e, t) {
	if (e == null) return t === null ? void 0 : t;
	if (t == null) return e === null ? void 0 : e;
	if (typeof e != "function") throw TypeError(`invalid render transform: ${e}`);
	if (typeof t != "function") throw TypeError(`invalid render transform: ${t}`);
	return function(n, r, i, a, o, s) {
		return e.call(this, n, r, i, a, o, (e, n, r, i, a) => t.call(this, e, n, r, i, a, s));
	};
}
function fF(e) {
	return Object.fromEntries(Object.entries(ij(e)).map(([e, t]) => (t = typeof t == "string" ? {
		value: t,
		label: e
	} : RA(t), t.filter === void 0 && t.scale == null && (t = {
		...t,
		filter: null
	}), [e, t])));
}
function pF(e) {
	return e === !0 ? "xy" : e === !1 || e == null ? null : typeof e == "string" ? sA(e, "tip", [
		"x",
		"y",
		"xy"
	]) : e;
}
function mF(e, t) {
	return e?.tip === !0 ? {
		...e,
		tip: t
	} : hA(e?.tip) && e.tip.pointer === void 0 ? {
		...e,
		tip: {
			...e.tip,
			pointer: t
		}
	} : e;
}
//#endregion
//#region node_modules/@observablehq/plot/src/dimensions.js
function hF(e, t, n = {}) {
	let r = .5 - zP, i = .5 + zP, a = .5 + zP, o = .5 - zP;
	for (let { marginTop: e, marginRight: n, marginBottom: s, marginLeft: c } of t) e > r && (r = e), n > i && (i = n), s > a && (a = s), c > o && (o = c);
	let { margin: s, marginTop: c = s === void 0 ? r : s, marginRight: l = s === void 0 ? i : s, marginBottom: u = s === void 0 ? a : s, marginLeft: d = s === void 0 ? o : s } = n;
	c = +c, l = +l, u = +u, d = +d;
	let { width: f = 640, height: p = gF(e, n, {
		width: f,
		marginTopDefault: r,
		marginRightDefault: i,
		marginBottomDefault: a,
		marginLeftDefault: o
	}) + Math.max(0, c - r + u - a) } = n;
	f = +f, p = +p;
	let m = {
		width: f,
		height: p,
		marginTop: c,
		marginRight: l,
		marginBottom: u,
		marginLeft: d
	};
	if (e.fx || e.fy) {
		let { margin: e, marginTop: t = e === void 0 ? c : e, marginRight: r = e === void 0 ? l : e, marginBottom: i = e === void 0 ? u : e, marginLeft: a = e === void 0 ? d : e } = n.facet ?? {};
		t = +t, r = +r, i = +i, a = +a, m.facet = {
			marginTop: t,
			marginRight: r,
			marginBottom: i,
			marginLeft: a
		};
	}
	return m;
}
function gF({ x: e, y: t, fy: n, fx: r }, { projection: i, aspectRatio: a }, { width: o, marginTopDefault: s, marginRightDefault: c, marginBottomDefault: l, marginLeftDefault: u }) {
	let d = n && n.scale.domain().length || 1, f = TP(i);
	if (f) {
		let e = r ? r.scale.domain().length : 1, t = (1.1 * d - .1) / (1.1 * e - .1) * f, n = Math.max(.1, Math.min(10, t));
		return Math.round((o - u - c) * n + s + l);
	}
	let p = t ? IN(t) ? t.scale.domain().length || 1 : Math.max(7, 17 / d) : 1;
	if (a != null) {
		if (a = +a, !(isFinite(a) && a > 0)) throw Error(`invalid aspectRatio: ${a}`);
		let i = _F("y", t) / (_F("x", e) * a), d = r ? r.scale.bandwidth() : 1, f = n ? n.scale.bandwidth() : 1;
		return (i * (d * (o - u - c) - e.insetLeft - e.insetRight) + t.insetTop + t.insetBottom) / f + s + l;
	}
	return !!(t || n) * Math.max(1, Math.min(60, p * d)) * 20 + !!r * 30 + 60;
}
function _F(e, t) {
	if (!t) throw Error(`aspectRatio requires ${e} scale`);
	let { type: n, domain: r } = t, i;
	switch (n) {
		case "linear":
		case "utc":
		case "time":
			i = Number;
			break;
		case "pow": {
			let e = t.scale.exponent();
			i = (t) => t ** +e;
			break;
		}
		case "log":
			i = Math.log;
			break;
		case "point":
		case "band": return r.length;
		default: throw Error(`unsupported ${e} scale for aspectRatio: ${n}`);
	}
	let [a, o] = OC(r);
	return Math.abs(i(o) - i(a));
}
//#endregion
//#region node_modules/@observablehq/plot/src/interactions/pointer.js
var vF = /* @__PURE__ */ new WeakMap();
function yF(e, t, { x: n, y: r, px: i, py: a, maxRadius: o = 40, channels: s, render: c, ...l } = {}) {
	return o = +o, i != null && (n ??= null, s = {
		...s,
		px: {
			value: i,
			scale: "x"
		}
	}), a != null && (r ??= null, s = {
		...s,
		py: {
			value: a,
			scale: "y"
		}
	}), {
		x: n,
		y: r,
		channels: s,
		...l,
		render: dF(function(n, r, i, a, s, c) {
			s = {
				...s,
				pointerSticky: !1
			};
			let l = s.ownerSVGElement, { data: u } = s.getMarkState(this), d = vF.get(l);
			d || vF.set(l, d = {
				sticky: !1,
				roots: [],
				renders: []
			});
			let f = d.renders.push(ee) - 1, { x: p, y: m, fx: h, fy: g } = r, _ = h ? h(n.fx) - a.marginLeft : 0, v = g ? g(n.fy) - a.marginTop : 0;
			p?.bandwidth && (_ += p.bandwidth() / 2), m?.bandwidth && (v += m.bandwidth() / 2);
			let y = n.fi != null, b;
			if (y) {
				let e = d.facetStates;
				e || (d.facetStates = e = /* @__PURE__ */ new Map()), b = e.get(this), b || e.set(this, b = /* @__PURE__ */ new Map());
			}
			let [x, S] = cF(this, a), { px: C, py: w } = i, T = C ? (e) => C[e] : CF(i, x), E = w ? (e) => w[e] : wF(i, S), D, O, k, A;
			function j(e, t) {
				if (y) if (A &&= cancelAnimationFrame(A), e == null) b.delete(n.fi);
				else {
					b.set(n.fi, t), A = requestAnimationFrame(() => {
						A = null;
						for (let [r, i] of b) if (i < t || i === t && r < n.fi) {
							e = null;
							break;
						}
						ee(e);
					});
					return;
				}
				ee(e);
			}
			function ee(e) {
				if (D === e && k === d.sticky) return;
				D = e, k = s.pointerSticky = d.sticky;
				let t = D == null ? [] : [D];
				y && (t.fx = n.fx, t.fy = n.fy, t.fi = n.fi);
				let o = c(t, r, i, a, s);
				if (O) {
					if (y) {
						let e = O.parentNode, t = O.getAttribute("transform"), n = o.getAttribute("transform");
						t ? o.setAttribute("transform", t) : o.removeAttribute("transform"), n ? e.setAttribute("transform", n) : e.removeAttribute("transform"), o.removeAttribute("aria-label"), o.removeAttribute("aria-description"), o.removeAttribute("aria-hidden");
					}
					O.replaceWith(o);
				}
				if (d.roots[f] = O = o, !(D == null && b?.size > 1)) {
					let e = D == null ? null : Ak(u) ? u[D] : u.get(D);
					s.dispatchValue(e);
				}
				return o;
			}
			function te(r) {
				if (d.sticky || r.pointerType === "mouse" && r.buttons === 1) return;
				let [i, s] = Gn(r);
				i -= _, s -= v;
				let c = i < a.marginLeft || i > a.width - a.marginRight ? 1 : e, l = s < a.marginTop || s > a.height - a.marginBottom ? 1 : t, u = null, f = o * o;
				for (let e of n) {
					let t = c * (T(e) - i), n = l * (E(e) - s), r = t * t + n * n;
					r <= f && (u = e, f = r);
				}
				if (u != null && (e !== 1 || t !== 1)) {
					let e = T(u) - i, t = E(u) - s;
					f = e * e + t * t;
				}
				j(u, f);
			}
			function ne(e) {
				e.pointerType === "mouse" && D != null && (d.sticky && d.roots.some((t) => t?.contains(e.target)) || (d.sticky ? (d.sticky = !1, d.renders.forEach((e) => e(null))) : (d.sticky = !0, ee(D)), e.stopImmediatePropagation()));
			}
			function re(e) {
				e.pointerType === "mouse" && (d.sticky || j(null));
			}
			return l.addEventListener("pointerenter", te), l.addEventListener("pointermove", te), l.addEventListener("pointerdown", ne), l.addEventListener("pointerleave", re), ee(null);
		}, c)
	};
}
function bF(e) {
	return yF(1, 1, e);
}
function xF(e) {
	return yF(1, .01, e);
}
function SF(e) {
	return yF(.01, 1, e);
}
function CF({ x1: e, x2: t, x: n = e }, r) {
	return e && t ? (n) => (e[n] + t[n]) / 2 : n ? (e) => n[e] : () => r;
}
function wF({ y1: e, y2: t, y: n = e }, r) {
	return e && t ? (n) => (e[n] + t[n]) / 2 : n ? (e) => n[e] : () => r;
}
//#endregion
//#region node_modules/@observablehq/plot/src/axes.js
function TF(e) {
	return IN(e) && e.interval === void 0 ? void 0 : "tabular-nums";
}
//#endregion
//#region node_modules/@observablehq/plot/src/legends/ramp.js
function EF(e, t) {
	let { label: n = e.label, tickSize: r = 6, width: i = 240, height: a = 44 + r, marginTop: o = 18, marginRight: s = 0, marginBottom: c = 16 + r, marginLeft: l = 0, style: u, ticks: d = (i - l - s) / 64, tickFormat: f, fontVariant: p = TF(e), round: m = !0, opacity: h, className: g } = t, _ = OP(t);
	g = oF(g), h = aA(h)[1], f === null && (f = () => null);
	let v = kP("svg", _).attr("class", `${g}-ramp`).attr("font-family", "system-ui, sans-serif").attr("font-size", 10).attr("width", i).attr("height", a).attr("viewBox", `0 0 ${i} ${a}`).call((e) => e.append("style").text(`:where(.${g}-ramp) {
  display: block;
  height: auto;
  height: intrinsic;
  max-width: 100%;
  overflow: visible;
}
:where(.${g}-ramp text) {
  white-space: pre;
}`)).call(sF, u), y = (e) => e.selectAll(".tick line").attr("y1", o + c - a), b, x = m ? (e, t) => e.rangeRound(t) : (e, t) => e.range(t), { type: S, domain: C, range: w, interpolate: T, scale: E, pivot: D } = e;
	if (T) {
		let e = w === void 0 ? T : eu(T.length === 1 ? UM(T) : T, w);
		b = x(E.copy(), tu(wl(l, i - s), Math.min(C.length + (D !== void 0), w === void 0 ? Infinity : w.length)));
		let t = _.document.createElement("canvas");
		t.width = 256, t.height = 1;
		let n = t.getContext("2d");
		for (let t = 0; t < 256; ++t) n.fillStyle = e(t / 255), n.fillRect(t, 0, 1, 1);
		v.append("image").attr("opacity", h).attr("x", l).attr("y", o).attr("width", i - l - s).attr("height", a - o - c).attr("preserveAspectRatio", "none").attr("xlink:href", t.toDataURL());
	} else if (S === "threshold") {
		let e = C, t = f === void 0 ? (e) => e : typeof f == "string" ? ju(f) : f;
		b = x(zu().domain([-1, w.length - 1]), [l, i - s]), v.append("g").attr("fill-opacity", h).selectAll().data(w).enter().append("rect").attr("x", (e, t) => b(t - 1)).attr("y", o).attr("width", (e, t) => b(t) - b(t - 1)).attr("height", a - o - c).attr("fill", (e) => e), d = Z(e, (e, t) => t), f = (n) => t(e[n], n);
	} else b = x(Us().domain(C), [l, i - s]), v.append("g").attr("fill-opacity", h).selectAll().data(C).enter().append("rect").attr("x", b).attr("y", o).attr("width", Math.max(0, b.bandwidth() - 1)).attr("height", a - o - c).attr("fill", E), y = () => {};
	return v.append("g").attr("transform", `translate(0,${a - c})`).call(Yg(b).ticks(Array.isArray(d) ? null : d, typeof f == "string" ? f : void 0).tickFormat(typeof f == "function" ? f : void 0).tickSize(r).tickValues(Array.isArray(d) ? d : null)).attr("font-size", null).attr("font-family", null).attr("font-variant", rF(p, "normal")).call(y).call((e) => e.select(".domain").remove()), n !== void 0 && v.append("text").attr("x", l).attr("y", o - 6).attr("fill", "currentColor").attr("font-weight", "bold").text(n), v.node();
}
//#endregion
//#region node_modules/@observablehq/plot/src/math.js
var DF = Math.PI / 180;
//#endregion
//#region node_modules/@observablehq/plot/src/marker.js
function OF(e, { marker: t, markerStart: n = t, markerMid: r = t, markerEnd: i = t } = {}) {
	e.markerStart = kF(n), e.markerMid = kF(r), e.markerEnd = kF(i);
}
function kF(e) {
	if (e == null || e === !1) return null;
	if (e === !0) return MF;
	if (typeof e == "function") return e;
	switch (`${e}`.toLowerCase()) {
		case "none": return null;
		case "arrow": return AF("auto");
		case "arrow-reverse": return AF("auto-start-reverse");
		case "dot": return jF;
		case "circle":
		case "circle-fill": return MF;
		case "circle-stroke": return NF;
		case "tick": return PF("auto");
		case "tick-x": return PF(90);
		case "tick-y": return PF(0);
	}
	throw Error(`invalid marker: ${e}`);
}
function AF(e) {
	return (t, n) => kP("svg:marker", n).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("orient", e).attr("fill", "none").attr("stroke", t).attr("stroke-width", 1.5).attr("stroke-linecap", "round").attr("stroke-linejoin", "round").call((e) => e.append("path").attr("d", "M-1.5,-3l3,3l-3,3")).node();
}
function jF(e, t) {
	return kP("svg:marker", t).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", e).attr("stroke", "none").call((e) => e.append("circle").attr("r", 2.5)).node();
}
function MF(e, t) {
	return kP("svg:marker", t).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", e).attr("stroke", "var(--plot-background)").attr("stroke-width", 1.5).call((e) => e.append("circle").attr("r", 3)).node();
}
function NF(e, t) {
	return kP("svg:marker", t).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", "var(--plot-background)").attr("stroke", e).attr("stroke-width", 1.5).call((e) => e.append("circle").attr("r", 3)).node();
}
function PF(e) {
	return (t, n) => kP("svg:marker", n).attr("viewBox", "-3 -3 6 6").attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", e).attr("stroke", t).call((e) => e.append("path").attr("d", "M0,-3v6")).node();
}
var FF = 0;
function IF(e, t, { stroke: n }, r) {
	return BF(e, t, n && ((e) => n[e]), null, r);
}
var LF = 1, RF = 2;
function zF(e, t) {
	let n = new Uint8Array(t.length), r = e.data().filter((e) => e.length > 1), i = r.length;
	for (let e = 0, a = AP; e < i; ++e) {
		let i = r[e];
		if (i.length > 1) {
			let e = i[0];
			a !== (a = EA(t[e])) && (n[e] |= LF);
		}
	}
	for (let e = i - 1, a = AP; e >= 0; --e) {
		let i = r[e];
		if (i.length > 1) {
			let e = i[0];
			a !== (a = EA(t[e])) && (n[e] |= RF);
		}
	}
	return ([e]) => n[e];
}
function BF(e, { markerStart: t, markerMid: n, markerEnd: r, stroke: i }, a = () => i, o, s) {
	if (!t && !n && !r) return;
	let c = /* @__PURE__ */ new Map(), l = o && zF(e, o);
	function u(e, t, n) {
		return function(r) {
			if (n && !n(r)) return;
			let i = a(r), o = c.get(t);
			o || c.set(t, o = /* @__PURE__ */ new Map());
			let l = o.get(i);
			if (!l) {
				let e = this.parentNode.insertBefore(t(i, s), this), n = `plot-marker-${++FF}`;
				e.setAttribute("id", n), o.set(i, l = `url(#${n})`);
			}
			this.setAttribute(e, l);
		};
	}
	t && e.each(u("marker-start", t, l && ((e) => l(e) & LF))), n && l && e.each(u("marker-start", n, (e) => !(l(e) & LF))), n && e.each(u("marker-mid", n)), r && e.each(u("marker-end", r, l && ((e) => l(e) & RF)));
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/inset.js
function VF({ inset: e, insetLeft: t, insetRight: n, ...r } = {}) {
	return [t, n] = UF(e, t, n), {
		inset: e,
		insetLeft: t,
		insetRight: n,
		...r
	};
}
function HF({ inset: e, insetTop: t, insetBottom: n, ...r } = {}) {
	return [t, n] = UF(e, t, n), {
		inset: e,
		insetTop: t,
		insetBottom: n,
		...r
	};
}
function UF(e, t, n) {
	return e === void 0 && t === void 0 && n === void 0 ? zP ? [1, 0] : [.5, .5] : [t, n];
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/interval.js
function WF(e, { interval: t }) {
	return e = { ...RA(e) }, e.interval = NA(e.interval === void 0 ? t : e.interval), e;
}
function GF(e, t, n, r) {
	let { [e]: i, [`${e}1`]: a, [`${e}2`]: o } = n, { value: s, interval: c } = WF(i, n);
	if (s == null || c == null && !r) return n;
	let l = kA(i);
	if (c == null) {
		let t, i = {
			transform: (e) => t ||= Ik(e, s),
			label: l
		};
		return {
			...n,
			[e]: void 0,
			[`${e}1`]: a === void 0 ? i : a,
			[`${e}2`]: o === void 0 && !(a === o && r) ? i : o
		};
	}
	let u, d;
	function f(e) {
		return d !== void 0 && e === u ? d : d = Z(Ik(u = e, s), (e) => c.floor(e));
	}
	return t({
		...n,
		[e]: void 0,
		[`${e}1`]: a === void 0 ? {
			transform: f,
			label: l
		} : a,
		[`${e}2`]: o === void 0 ? {
			transform: (e) => f(e).map((e) => c.offset(e)),
			label: l
		} : o
	});
}
function KF(e, t, n) {
	let { [e]: r } = n, { value: i, interval: a } = WF(r, n);
	return i == null || a == null ? n : t({
		...n,
		[e]: {
			label: kA(r),
			transform: (e) => {
				let t = Z(Ik(e, i), (e) => a.floor(e)), n = t.map((e) => a.offset(e));
				return t.map(UA(t) ? (e, t) => e == null || isNaN(e = +e) || (t = n[t], t == null) || isNaN(t = +t) ? void 0 : /* @__PURE__ */ new Date((e + t) / 2) : (e, t) => e == null || (t = n[t], t == null) ? NaN : (+e + +t) / 2);
			}
		}
	});
}
function qF(e = {}) {
	return GF("x", VF, e);
}
function JF(e = {}) {
	return GF("y", HF, e);
}
function YF(e = {}) {
	return KF("x", VF, e);
}
function XF(e = {}) {
	return KF("y", HF, e);
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/rule.js
var ZF = {
	ariaLabel: "rule",
	fill: null,
	stroke: "currentColor"
}, QF = class extends lF {
	constructor(e, t = {}) {
		let { x: n, y1: r, y2: i, inset: a = 0, insetTop: o = a, insetBottom: s = a } = t;
		super(e, {
			x: {
				value: n,
				scale: "x",
				optional: !0
			},
			y1: {
				value: r,
				scale: "y",
				optional: !0
			},
			y2: {
				value: i,
				scale: "y",
				optional: !0
			}
		}, mF(t, "x"), ZF), this.insetTop = Yk(o), this.insetBottom = Yk(s), OF(this, t);
	}
	render(e, t, n, r, i) {
		let { x: a, y: o } = t, { x: s, y1: c, y2: l } = n, { width: u, height: d, marginTop: f, marginRight: p, marginLeft: m, marginBottom: h } = r, { insetTop: g, insetBottom: _ } = this;
		return kP("svg:g", i).call(QP, this, r, i).call(nF, this, { x: s && a }, zP, 0).call((t) => t.selectAll().data(e).enter().append("line").call($P, this).attr("x1", s ? (e) => s[e] : (m + u - p) / 2).attr("x2", s ? (e) => s[e] : (m + u - p) / 2).attr("y1", c && !zN(o) ? (e) => c[e] + g : f + g).attr("y2", l && !zN(o) ? o.bandwidth ? (e) => l[e] + o.bandwidth() - _ : (e) => l[e] - _ : d - h - _).call(GP, this, n).call(IF, this, n, i)).node();
	}
}, $F = class extends lF {
	constructor(e, t = {}) {
		let { x1: n, x2: r, y: i, inset: a = 0, insetRight: o = a, insetLeft: s = a } = t;
		super(e, {
			y: {
				value: i,
				scale: "y",
				optional: !0
			},
			x1: {
				value: n,
				scale: "x",
				optional: !0
			},
			x2: {
				value: r,
				scale: "x",
				optional: !0
			}
		}, mF(t, "y"), ZF), this.insetRight = Yk(o), this.insetLeft = Yk(s), OF(this, t);
	}
	render(e, t, n, r, i) {
		let { x: a, y: o } = t, { y: s, x1: c, x2: l } = n, { width: u, height: d, marginTop: f, marginRight: p, marginLeft: m, marginBottom: h } = r, { insetLeft: g, insetRight: _ } = this;
		return kP("svg:g", i).call(QP, this, r, i).call(nF, this, { y: s && o }, 0, zP).call((t) => t.selectAll().data(e).enter().append("line").call($P, this).attr("x1", c && !zN(a) ? (e) => c[e] + g : m + g).attr("x2", l && !zN(a) ? a.bandwidth ? (e) => l[e] + a.bandwidth() - _ : (e) => l[e] - _ : u - p - _).attr("y1", s ? (e) => s[e] : (f + d - h) / 2).attr("y2", s ? (e) => s[e] : (f + d - h) / 2).call(GP, this, n).call(IF, this, n, i)).node();
	}
};
function eI(e, t) {
	let { x: n = Gk, y: r, y1: i, y2: a, ...o } = JF(t);
	return [i, a] = nI(r, i, a), new QF(e, {
		...o,
		x: n,
		y1: i,
		y2: a
	});
}
function tI(e, t) {
	let { y: n = Gk, x: r, x1: i, x2: a, ...o } = qF(t);
	return [i, a] = nI(r, i, a), new $F(e, {
		...o,
		y: n,
		x1: i,
		x2: a
	});
}
function nI(e, t, n) {
	if (e == null) {
		if (t === void 0) {
			if (n !== void 0) return [0, n];
		} else if (n === void 0) return [0, t];
	} else if (t === void 0) return n === void 0 ? [0, e] : [e, n];
	else if (n === void 0) return [e, t];
	return [t, n];
}
//#endregion
//#region node_modules/@observablehq/plot/src/template.js
function rI(e, ...t) {
	let n = t.length;
	for (let r = 0, i = !0; r < n; ++r) typeof t[r] != "function" && (i &&= (e = e.slice(), !1), e.splice(r, 2, e[r] + t[r] + e[r + 1]), t.splice(r, 1), --r, --n);
	return (r) => {
		let i = e[0];
		for (let a = 0; a < n; ++a) i += t[a](r) + e[a + 1];
		return i;
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/text.js
var iI = {
	ariaLabel: "text",
	strokeLinejoin: "round",
	strokeWidth: 3,
	paintOrder: "stroke"
}, aI = "­", oI = class extends lF {
	constructor(e, t = {}) {
		let { x: n, y: r, text: i = BA(e) && VA(e) ? Gk : Wk, frameAnchor: a, textAnchor: o = /right$/i.test(a) ? "end" : /left$/i.test(a) ? "start" : "middle", lineAnchor: s = /^top/i.test(a) ? "top" : /^bottom/i.test(a) ? "bottom" : "middle", lineHeight: c = 1, lineWidth: l = Infinity, textOverflow: u, monospace: d, fontFamily: f = d ? "ui-monospace, monospace" : void 0, fontSize: p, fontStyle: m, fontVariant: h, fontWeight: g, rotate: _ } = t, [v, y] = aA(_, 0), [b, x] = hI(p);
		if (super(e, {
			x: {
				value: n,
				scale: "x",
				optional: !0
			},
			y: {
				value: r,
				scale: "y",
				optional: !0
			},
			fontSize: {
				value: b,
				optional: !0
			},
			rotate: {
				value: zA(v),
				optional: !0
			},
			text: {
				value: i,
				filter: KO,
				optional: !0
			}
		}, t, iI), this.rotate = y, this.textAnchor = rF(o, "middle"), this.lineAnchor = sA(s, "lineAnchor", [
			"top",
			"middle",
			"bottom"
		]), this.lineHeight = +c, this.lineWidth = +l, this.textOverflow = sI(u), this.monospace = !!d, this.fontFamily = Jk(f), this.fontSize = x, this.fontStyle = Jk(m), this.fontVariant = Jk(h), this.fontWeight = Jk(g), this.frameAnchor = tj(a), !(this.lineWidth >= 0)) throw Error(`invalid lineWidth: ${l}`);
		this.splitLines = xI(this), this.clipLine = SI(this);
	}
	render(e, t, n, r, i) {
		let { x: a, y: o } = t, { x: s, y: c, rotate: l, text: u, title: d, fontSize: f } = n, { rotate: p } = this, [m, h] = cF(this, r);
		return kP("svg:g", i).call(QP, this, r, i).call(fI, this, u, r).call(nF, this, {
			x: s && a,
			y: c && o
		}).call((t) => t.selectAll().data(e).enter().append("text").call($P, this).call(cI, this, u, d).attr("transform", rI`translate(${s ? (e) => s[e] : m},${c ? (e) => c[e] : h})${l ? (e) => ` rotate(${l[e]})` : p ? ` rotate(${p})` : ""}`).call($, "font-size", f && ((e) => f[e])).call(GP, this, n)).node();
	}
};
function sI(e) {
	return e == null ? null : sA(e, "textOverflow", [
		"clip",
		"ellipsis",
		"clip-start",
		"clip-end",
		"ellipsis-start",
		"ellipsis-middle",
		"ellipsis-end"
	]).replace(/^(clip|ellipsis)$/, "$1-end");
}
function cI(e, t, n, r) {
	if (!n) return;
	let { lineAnchor: i, lineHeight: a, textOverflow: o, splitLines: s, clipLine: c } = t;
	e.each(function(e) {
		let t = s(RP(n[e]) ?? "").map(c), l = t.length, u = i === "top" ? .71 : i === "bottom" ? 1 - l : (164 - l * 100) / 200;
		if (l > 1) {
			let e = 0;
			for (let n = 0; n < l; ++n) {
				if (++e, !t[n]) continue;
				let r = this.ownerDocument.createElementNS(We.svg, "tspan");
				r.setAttribute("x", 0), n === e - 1 ? r.setAttribute("y", `${(u + n) * a}em`) : r.setAttribute("dy", `${e * a}em`), r.textContent = t[n], this.appendChild(r), e = 0;
			}
		} else u && this.setAttribute("y", `${u * a}em`), this.textContent = t[0];
		if (o && !r && t[0] !== n[e]) {
			let t = this.ownerDocument.createElementNS(We.svg, "title");
			t.textContent = n[e], this.appendChild(t);
		}
	});
}
function lI(e, { x: t, y: n, ...r } = {}) {
	return r.frameAnchor === void 0 && ([t, n] = bA(t, n)), new oI(e, {
		...r,
		x: t,
		y: n
	});
}
function uI(e, { x: t = Gk, ...n } = {}) {
	return new oI(e, XF({
		...n,
		x: t
	}));
}
function dI(e, { y: t = Gk, ...n } = {}) {
	return new oI(e, YF({
		...n,
		y: t
	}));
}
function fI(e, t, n) {
	$(e, "text-anchor", t.textAnchor), $(e, "font-family", t.fontFamily), $(e, "font-size", t.fontSize), $(e, "font-style", t.fontStyle), $(e, "font-variant", t.fontVariant === void 0 ? pI(n) : t.fontVariant), $(e, "font-weight", t.fontWeight);
}
function pI(e) {
	return e && (KA(e) || UA(e)) ? "tabular-nums" : void 0;
}
var mI = /* @__PURE__ */ new Set([
	"inherit",
	"initial",
	"revert",
	"unset",
	"xx-small",
	"x-small",
	"small",
	"medium",
	"large",
	"x-large",
	"xx-large",
	"xxx-large",
	"larger",
	"smaller"
]);
function hI(e) {
	return e == null || typeof e == "number" ? [void 0, e] : typeof e == "string" ? (e = e.trim().toLowerCase(), mI.has(e) || /^[+-]?\d*\.?\d+(e[+-]?\d+)?(\w*|%)$/.test(e) ? [void 0, e] : [e, void 0]) : [e, void 0];
}
function gI(e, t, n) {
	let r = [], i, a = 0;
	for (let [o, s, c] of _I(e)) {
		if (i === void 0 && (i = o), a > i && n(e, i, s) > t && (r.push(e.slice(i, a) + (e[a - 1] === aI ? "-" : "")), i = o), c) {
			r.push(e.slice(i, s)), i = void 0;
			continue;
		}
		a = s;
	}
	return r;
}
function* _I(e) {
	let t = 0, n = 0, r = e.length;
	for (; n < r;) {
		let r = 1;
		switch (e[n]) {
			case aI:
			case "-":
				++n, yield [
					t,
					n,
					!1
				], t = n;
				break;
			case " ":
				for (yield [
					t,
					n,
					!1
				]; e[++n] === " ";);
				t = n;
				break;
			case "\r": e[n + 1] === "\n" && ++r;
			case "\n":
				yield [
					t,
					n,
					!0
				], n += r, t = n;
				break;
			default: ++n;
		}
	}
	yield [
		t,
		n,
		!0
	];
}
var vI = {
	a: 56,
	b: 63,
	c: 57,
	d: 63,
	e: 58,
	f: 37,
	g: 62,
	h: 60,
	i: 26,
	j: 26,
	k: 55,
	l: 26,
	m: 88,
	n: 60,
	o: 60,
	p: 62,
	q: 62,
	r: 39,
	s: 54,
	t: 38,
	u: 60,
	v: 55,
	w: 79,
	x: 54,
	y: 55,
	z: 55,
	A: 69,
	B: 67,
	C: 73,
	D: 74,
	E: 61,
	F: 58,
	G: 76,
	H: 75,
	I: 28,
	J: 55,
	K: 67,
	L: 58,
	M: 89,
	N: 75,
	O: 78,
	P: 65,
	Q: 78,
	R: 67,
	S: 65,
	T: 65,
	U: 75,
	V: 69,
	W: 98,
	X: 69,
	Y: 67,
	Z: 67,
	0: 64,
	1: 48,
	2: 62,
	3: 64,
	4: 66,
	5: 63,
	6: 65,
	7: 58,
	8: 65,
	9: 65,
	" ": 29,
	"!": 32,
	"\"": 49,
	"'": 31,
	"(": 39,
	")": 39,
	",": 31,
	"-": 48,
	".": 31,
	"/": 32,
	":": 31,
	";": 31,
	"?": 52,
	"‘": 31,
	"’": 31,
	"“": 47,
	"”": 47,
	"…": 82
};
function yI(e, t = 0, n = e.length) {
	let r = 0;
	for (let i = t; i < n; i = kI(e, i)) r += vI[e[i]] ?? (PI(e, i) ? 120 : vI.e);
	return r;
}
function bI(e, t = 0, n = e.length) {
	let r = 0;
	for (let i = t; i < n; i = kI(e, i)) r += PI(e, i) ? 126 : 63;
	return r;
}
function xI({ monospace: e, lineWidth: t, textOverflow: n }) {
	if (n != null || t == Infinity) return (e) => e.split(/\r\n?|\n/g);
	let r = e ? bI : yI, i = t * 100;
	return (e) => gI(e, i, r);
}
function SI({ monospace: e, lineWidth: t, textOverflow: n }) {
	if (n == null || t == Infinity) return (e) => e;
	let r = e ? bI : yI, i = t * 100;
	switch (n) {
		case "clip-start": return (e) => EI(e, i, r, "");
		case "clip-end": return (e) => wI(e, i, r, "");
		case "ellipsis-start": return (e) => EI(e, i, r, "…");
		case "ellipsis-middle": return (e) => TI(e, i, r, "…");
		case "ellipsis-end": return (e) => wI(e, i, r, "…");
	}
}
function CI(e, t, n, r) {
	let i = [], a = 0;
	for (let o = 0, s = 0, c = e.length; o < c; o = s) {
		s = kI(e, o);
		let c = n(e, o, s);
		if (a + c > t) {
			for (a += r; a > t && o > 0;) s = o, o = i.pop(), a -= n(e, o, s);
			return [o, t - a];
		}
		a += c, i.push(o);
	}
	return [-1, 0];
}
function wI(e, t, n, r) {
	e = e.trim();
	let i = n(r), [a] = CI(e, t, n, i);
	return a < 0 ? e : e.slice(0, a).trimEnd() + r;
}
function TI(e, t, n, r) {
	e = e.trim();
	let i = n(e);
	if (i <= t) return e;
	let a = n(r) / 2, [o, s] = CI(e, t / 2, n, a), [c] = CI(e, i - t / 2 - s + a, n, -a);
	return c < 0 ? r : e.slice(0, o).trimEnd() + r + e.slice(kI(e, c)).trimStart();
}
function EI(e, t, n, r) {
	e = e.trim();
	let i = n(e);
	if (i <= t) return e;
	let a = n(r), [o] = CI(e, i - t + a, n, -a);
	return o < 0 ? r : r + e.slice(kI(e, o)).trimStart();
}
var DI = /[\p{Combining_Mark}\p{Emoji_Modifier}]+/uy, OI = /\p{Extended_Pictographic}/uy;
function kI(e, t) {
	return t += jI(e, t) ? 2 : 1, NI(e, t) && (t = DI.lastIndex), MI(e, t) ? kI(e, t + 1) : t;
}
function AI(e, t) {
	return e.charCodeAt(t) < 128;
}
function jI(e, t) {
	let n = e.charCodeAt(t);
	if (n >= 55296 && n < 56320) {
		let n = e.charCodeAt(t + 1);
		return n >= 56320 && n < 57344;
	}
	return !1;
}
function MI(e, t) {
	return e.charCodeAt(t) === 8205;
}
function NI(e, t) {
	return !AI(e, t) && (DI.lastIndex = t, DI.test(e));
}
function PI(e, t) {
	return !AI(e, t) && (OI.lastIndex = t, OI.test(e));
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/vector.js
var FI = {
	ariaLabel: "vector",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.5,
	strokeLinejoin: "round",
	strokeLinecap: "round"
}, II = 3.5, LI = II * 5, RI = { draw(e, t, n) {
	let r = t * n / LI;
	e.moveTo(0, 0), e.lineTo(0, -t), e.moveTo(-r, r - t), e.lineTo(0, -t), e.lineTo(r, r - t);
} }, zI = /* @__PURE__ */ new Map([["arrow", RI], ["spike", { draw(e, t, n) {
	e.moveTo(-n, 0), e.lineTo(0, -t), e.lineTo(n, 0);
} }]]);
function BI(e) {
	return e && typeof e.draw == "function";
}
function VI(e) {
	if (BI(e)) return e;
	let t = zI.get(`${e}`.toLowerCase());
	if (t) return t;
	throw Error(`invalid shape: ${e}`);
}
var HI = class extends lF {
	constructor(e, t = {}) {
		let { x: n, y: r, r: i = II, length: a, rotate: o, shape: s = RI, anchor: c = "middle", frameAnchor: l } = t, [u, d] = aA(a, 12), [f, p] = aA(o, 0);
		super(e, {
			x: {
				value: n,
				scale: "x",
				optional: !0
			},
			y: {
				value: r,
				scale: "y",
				optional: !0
			},
			length: {
				value: u,
				scale: "length",
				optional: !0
			},
			rotate: {
				value: f,
				optional: !0
			}
		}, t, FI), this.r = +i, this.length = d, this.rotate = p, this.shape = VI(s), this.anchor = sA(c, "anchor", [
			"start",
			"middle",
			"end"
		]), this.frameAnchor = tj(l);
	}
	render(e, t, n, r, i) {
		let { x: a, y: o } = t, { x: s, y: c, length: l, rotate: u } = n, { length: d, rotate: f, anchor: p, shape: m, r: h } = this, [g, _] = cF(this, r);
		return kP("svg:g", i).call(QP, this, r, i).call(nF, this, {
			x: s && a,
			y: c && o
		}).call((t) => t.selectAll().data(e).enter().append("path").call($P, this).attr("transform", rI`translate(${s ? (e) => s[e] : g},${c ? (e) => c[e] : _})${u ? (e) => ` rotate(${u[e]})` : f ? ` rotate(${f})` : ""}${p === "start" ? "" : p === "end" ? l ? (e) => ` translate(0,${l[e]})` : ` translate(0,${d})` : l ? (e) => ` translate(0,${l[e] / 2})` : ` translate(0,${d / 2})`}`).attr("d", l ? (e) => {
			let t = Cm();
			return m.draw(t, l[e], h), t;
		} : (() => {
			let e = Cm();
			return m.draw(e, d, h), e;
		})()).call(GP, this, n)).node();
	}
};
function UI(e, t = {}) {
	let { x: n = Gk, ...r } = t;
	return new HI(e, {
		...r,
		x: n
	});
}
function WI(e, t = {}) {
	let { y: n = Gk, ...r } = t;
	return new HI(e, {
		...r,
		y: n
	});
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/axis.js
function GI(e, t) {
	return arguments.length < 2 && !BA(e) && (t = e, e = null), t === void 0 && (t = {}), [e, t];
}
function KI({ anchor: e } = {}, t) {
	return e === void 0 ? t[0] : sA(e, "anchor", t);
}
function qI(e) {
	return KI(e, ["left", "right"]);
}
function JI(e) {
	return KI(e, ["right", "left"]);
}
function YI(e) {
	return KI(e, ["bottom", "top"]);
}
function XI(e) {
	return KI(e, ["top", "bottom"]);
}
function ZI() {
	let [e, t] = GI(...arguments);
	return tL("y", qI(t), e, t);
}
function QI() {
	let [e, t] = GI(...arguments);
	return tL("fy", JI(t), e, t);
}
function $I() {
	let [e, t] = GI(...arguments);
	return nL("x", YI(t), e, t);
}
function eL() {
	let [e, t] = GI(...arguments);
	return nL("fx", XI(t), e, t);
}
function tL(e, t, n, { color: r = "currentColor", opacity: i = 1, stroke: a = r, strokeOpacity: o = i, strokeWidth: s = 1, fill: c = r, fillOpacity: l = i, textAnchor: u, textStroke: d, textStrokeOpacity: f, textStrokeWidth: p, tickSize: m = e === "y" ? 6 : 0, tickPadding: h, tickRotate: g, x: _, margin: v, marginTop: y = v === void 0 ? 20 : v, marginRight: b = v === void 0 ? t === "right" ? 40 : 0 : v, marginBottom: x = v === void 0 ? 20 : v, marginLeft: S = v === void 0 ? t === "left" ? 40 : 0 : v, label: C, labelAnchor: w, labelArrow: T, labelOffset: E, ariaLabel: D = `${e}-axis`, ...O }) {
	return m = Yk(m), h = Yk(h), g = Yk(g), w !== void 0 && (w = sA(w, "labelAnchor", [
		"center",
		"top",
		"bottom"
	])), T = EL(T), uF(m && !ZA(a) ? rL(e, t, n, {
		stroke: a,
		strokeOpacity: o,
		strokeWidth: s,
		tickSize: m,
		tickPadding: h,
		tickRotate: g,
		x: _,
		ariaLabel: D,
		...O
	}) : null, ZA(c) ? null : aL(e, t, n, {
		fill: c,
		fillOpacity: l,
		stroke: d,
		strokeOpacity: f,
		strokeWidth: p,
		textAnchor: u,
		tickSize: m,
		tickPadding: h,
		tickRotate: g,
		x: _,
		marginTop: y,
		marginRight: b,
		marginBottom: x,
		marginLeft: S,
		ariaLabel: D,
		...O
	}), !ZA(c) && C !== null ? lI([], mL({
		fill: c,
		fillOpacity: l,
		...O
	}, function(n, r, i, a, o) {
		let s = a[e], { marginTop: c, marginRight: l, marginBottom: u, marginLeft: d } = e === "y" && o.inset || o, f = w ?? (s.bandwidth ? "center" : "top"), p = E ?? (t === "right" ? l : d) - 3;
		return f === "center" ? (this.textAnchor = void 0, this.lineAnchor = t === "right" ? "bottom" : "top", this.frameAnchor = t, this.rotate = -90) : (this.textAnchor = t === "right" ? "end" : "start", this.lineAnchor = f, this.frameAnchor = `${f}-${t}`, this.rotate = 0), this.dy = f === "top" ? 3 - c : f === "bottom" ? u - 3 : 0, this.dx = t === "right" ? p : -p, this.ariaLabel = `${D} label`, {
			facets: [[0]],
			channels: { text: { value: [TL(e, s, {
				anchor: t,
				label: C,
				labelAnchor: f,
				labelArrow: T
			})] } }
		};
	})) : null);
}
function nL(e, t, n, { color: r = "currentColor", opacity: i = 1, stroke: a = r, strokeOpacity: o = i, strokeWidth: s = 1, fill: c = r, fillOpacity: l = i, textAnchor: u, textStroke: d, textStrokeOpacity: f, textStrokeWidth: p, tickSize: m = e === "x" ? 6 : 0, tickPadding: h, tickRotate: g, y: _, margin: v, marginTop: y = v === void 0 ? t === "top" ? 30 : 0 : v, marginRight: b = v === void 0 ? 20 : v, marginBottom: x = v === void 0 ? t === "bottom" ? 30 : 0 : v, marginLeft: S = v === void 0 ? 20 : v, label: C, labelAnchor: w, labelArrow: T, labelOffset: E, ariaLabel: D = `${e}-axis`, ...O }) {
	return m = Yk(m), h = Yk(h), g = Yk(g), w !== void 0 && (w = sA(w, "labelAnchor", [
		"center",
		"left",
		"right"
	])), T = EL(T), uF(m && !ZA(a) ? iL(e, t, n, {
		stroke: a,
		strokeOpacity: o,
		strokeWidth: s,
		tickSize: m,
		tickPadding: h,
		tickRotate: g,
		y: _,
		ariaLabel: D,
		...O
	}) : null, ZA(c) ? null : oL(e, t, n, {
		fill: c,
		fillOpacity: l,
		stroke: d,
		strokeOpacity: f,
		strokeWidth: p,
		textAnchor: u,
		tickSize: m,
		tickPadding: h,
		tickRotate: g,
		y: _,
		marginTop: y,
		marginRight: b,
		marginBottom: x,
		marginLeft: S,
		ariaLabel: D,
		...O
	}), !ZA(c) && C !== null ? lI([], mL({
		fill: c,
		fillOpacity: l,
		...O
	}, function(n, r, i, a, o) {
		let s = a[e], { marginTop: c, marginRight: l, marginBottom: u, marginLeft: d } = e === "x" && o.inset || o, f = w ?? (s.bandwidth ? "center" : "right"), p = E ?? (t === "top" ? c : u) - 3;
		return f === "center" ? (this.frameAnchor = t, this.textAnchor = void 0) : (this.frameAnchor = `${t}-${f}`, this.textAnchor = f === "right" ? "end" : "start"), this.lineAnchor = t, this.dy = t === "top" ? -p : p, this.dx = f === "right" ? l - 3 : f === "left" ? 3 - d : 0, this.ariaLabel = `${D} label`, {
			facets: [[0]],
			channels: { text: { value: [TL(e, s, {
				anchor: t,
				label: C,
				labelAnchor: f,
				labelArrow: T
			})] } }
		};
	})) : null);
}
function rL(e, t, n, { strokeWidth: r = 1, strokeLinecap: i = null, strokeLinejoin: a = null, facetAnchor: o = t + (e === "y" ? "-empty" : ""), frameAnchor: s = t, tickSize: c, inset: l = 0, insetLeft: u = l, insetRight: d = l, dx: f = 0, y: p = e === "y" ? void 0 : null, ariaLabel: m, ...h }) {
	return hL(WI, e, n, {
		ariaLabel: `${m} tick`,
		ariaHidden: !0
	}, {
		strokeWidth: r,
		strokeLinecap: i,
		strokeLinejoin: a,
		facetAnchor: o,
		frameAnchor: s,
		y: p,
		...h,
		dx: t === "left" ? +f - zP + +u : +f + zP - d,
		anchor: "start",
		length: c,
		shape: t === "left" ? SL : CL
	});
}
function iL(e, t, n, { strokeWidth: r = 1, strokeLinecap: i = null, strokeLinejoin: a = null, facetAnchor: o = t + (e === "x" ? "-empty" : ""), frameAnchor: s = t, tickSize: c, inset: l = 0, insetTop: u = l, insetBottom: d = l, dy: f = 0, x: p = e === "x" ? void 0 : null, ariaLabel: m, ...h }) {
	return hL(UI, e, n, {
		ariaLabel: `${m} tick`,
		ariaHidden: !0
	}, {
		strokeWidth: r,
		strokeLinejoin: a,
		strokeLinecap: i,
		facetAnchor: o,
		frameAnchor: s,
		x: p,
		...h,
		dy: t === "bottom" ? +f - zP - d : +f + zP + +u,
		anchor: "start",
		length: c,
		shape: t === "bottom" ? bL : xL
	});
}
function aL(e, t, n, { facetAnchor: r = t + (e === "y" ? "-empty" : ""), frameAnchor: i = t, tickSize: a, tickRotate: o = 0, tickPadding: s = Math.max(3, 9 - a) + (Math.abs(o) > 60 ? 4 * Math.cos(o * DF) : 0), text: c, textAnchor: l = Math.abs(o) > 60 ? "middle" : t === "left" ? "end" : "start", lineAnchor: u = o > 60 ? "top" : o < -60 ? "bottom" : "middle", fontVariant: d, inset: f = 0, insetLeft: p = f, insetRight: m = f, dx: h = 0, ariaLabel: g, y: _ = e === "y" ? void 0 : null, ...v }) {
	return hL(dI, e, n, { ariaLabel: `${g} tick label` }, {
		facetAnchor: r,
		frameAnchor: i,
		text: c,
		textAnchor: l,
		lineAnchor: u,
		fontVariant: d,
		rotate: o,
		y: _,
		...v,
		dx: t === "left" ? +h - a - s + +p : +h + +a + +s - m
	}, function(e, n, r, i, a) {
		d === void 0 && (this.fontVariant = wL(e)), c === void 0 && (a.text = _L(e, n, r, i, t));
	});
}
function oL(e, t, n, { facetAnchor: r = t + (e === "x" ? "-empty" : ""), frameAnchor: i = t, tickSize: a, tickRotate: o = 0, tickPadding: s = Math.max(3, 9 - a) + (Math.abs(o) >= 10 ? 4 * Math.cos(o * DF) : 0), text: c, textAnchor: l = Math.abs(o) >= 10 ? o < 0 ^ t === "bottom" ? "start" : "end" : "middle", lineAnchor: u = Math.abs(o) >= 10 ? "middle" : t === "bottom" ? "top" : "bottom", fontVariant: d, inset: f = 0, insetTop: p = f, insetBottom: m = f, dy: h = 0, x: g = e === "x" ? void 0 : null, ariaLabel: _, ...v }) {
	return hL(uI, e, n, { ariaLabel: `${_} tick label` }, {
		facetAnchor: r,
		frameAnchor: i,
		text: c === void 0 ? null : c,
		textAnchor: l,
		lineAnchor: u,
		fontVariant: d,
		rotate: o,
		x: g,
		...v,
		dy: t === "bottom" ? +h + +a + +s - m : +h - a - s + +p
	}, function(e, n, r, i, a) {
		d === void 0 && (this.fontVariant = wL(e)), c === void 0 && (a.text = _L(e, n, r, i, t));
	});
}
function sL() {
	let [e, t] = GI(...arguments);
	return dL("y", qI(t), e, t);
}
function cL() {
	let [e, t] = GI(...arguments);
	return dL("fy", JI(t), e, t);
}
function lL() {
	let [e, t] = GI(...arguments);
	return fL("x", YI(t), e, t);
}
function uL() {
	let [e, t] = GI(...arguments);
	return fL("fx", XI(t), e, t);
}
function dL(e, t, n, { y: r = e === "y" ? void 0 : null, x: i = null, x1: a = t === "left" ? i : null, x2: o = t === "right" ? i : null, ariaLabel: s = `${e}-grid`, ariaHidden: c = !0, ...l }) {
	return hL(tI, e, n, {
		ariaLabel: s,
		ariaHidden: c
	}, {
		y: r,
		x1: a,
		x2: o,
		...pL(l)
	});
}
function fL(e, t, n, { x: r = e === "x" ? void 0 : null, y: i = null, y1: a = t === "top" ? i : null, y2: o = t === "bottom" ? i : null, ariaLabel: s = `${e}-grid`, ariaHidden: c = !0, ...l }) {
	return hL(eI, e, n, {
		ariaLabel: s,
		ariaHidden: c
	}, {
		x: r,
		y1: a,
		y2: o,
		...pL(l)
	});
}
function pL({ color: e = "currentColor", opacity: t = .1, stroke: n = e, strokeOpacity: r = t, strokeWidth: i = 1, ...a }) {
	return {
		stroke: n,
		strokeOpacity: r,
		strokeWidth: i,
		...a
	};
}
function mL({ fill: e, fillOpacity: t, fontFamily: n, fontSize: r, fontStyle: i, fontVariant: a, fontWeight: o, monospace: s, pointerEvents: c, shapeRendering: l, clip: u = !1 }, d) {
	return [, e] = iA(e), [, t] = aA(t), {
		facet: "super",
		x: null,
		y: null,
		fill: e,
		fillOpacity: t,
		fontFamily: n,
		fontSize: r,
		fontStyle: i,
		fontVariant: a,
		fontWeight: o,
		monospace: s,
		pointerEvents: c,
		shapeRendering: l,
		clip: u,
		initializer: d
	};
}
function hL(e, t, n, r, i, a) {
	let o;
	function s(e, n, r, s, c, l) {
		let u = e == null && (t === "fx" || t === "fy"), { [t]: d } = s;
		if (!d) throw Error(`missing scale: ${t}`);
		let f = d.domain(), { interval: p, ticks: m, tickFormat: h, tickSpacing: g = t === "x" ? 80 : 35 } = i;
		if (typeof m == "string" && DL(d) && (p = m, m = void 0), m === void 0 && (m = FA(p, d.type) ?? gL(d, g)), e == null) {
			if (BA(m)) e = lA(m);
			else if (LA(m)) e = yL(m, ...OC(f));
			else if (d.interval) {
				let t = d.interval;
				if (d.ticks) {
					let [n, r] = OC(f), i = (r - n) / t[pk];
					t = Sk(t, i / m) ?? t, e = yL(t, n, r);
				} else {
					e = f;
					let n = e.length;
					t = Sk(t, n / m) ?? t, t !== d.interval && (e = yL(t, ...OC(e)));
				}
				if (t === d.interval) {
					let t = Math.round(e.length / m);
					t > 1 && (e = e.filter((e, n) => n % t === 0));
				}
			} else e = d.ticks ? d.ticks(m) : f;
			if (!d.ticks && e.length && e !== f) {
				let n = new zr(f);
				e = e.filter((e) => n.has(e)), e.length || qM(`Warning: the ${t}-axis ticks appear to not align with the scale domain, resulting in no ticks. Try different ticks?`);
			}
			t === "y" || t === "x" ? n = [CA(e)] : o[t] = {
				scale: t,
				value: Gk
			};
		}
		a?.call(this, d, e, m, h, o);
		let _ = Object.fromEntries(Object.entries(o).map(([t, n]) => [t, {
			...n,
			value: Ik(e, n.value)
		}]));
		return u && (n = l.filterFacets(e, _)), {
			data: e,
			facets: n,
			channels: _
		};
	}
	let c = wj(i).initializer, l = e(n, wj({
		...i,
		initializer: s
	}, c));
	return n == null ? (o = l.channels, l.channels = {}) : o = {}, r !== void 0 && Object.assign(l, r), l.clip === void 0 && (l.clip = !1), l;
}
function gL(e, t) {
	let [n, r] = OC(e.range());
	return (r - n) / t;
}
function _L(e, t, n, r, i) {
	return { value: vL(e, t, n, r, i) };
}
function vL(e, t, n, r, i) {
	return typeof r == "function" && !(e.type === "log" && e.tickFormat) ? r : r === void 0 && t && UA(t) ? Ek(e.type, t, i) ?? RP : e.tickFormat ? e.tickFormat(typeof n == "number" ? n : null, r) : typeof r == "string" && e.domain().length > 0 ? (UA(e.domain()) ? Aa : ju)(r) : r === void 0 ? RP : Qk(r);
}
function yL(e, t, n) {
	return e.range(t, e.offset(e.floor(n)));
}
var bL = { draw(e, t) {
	e.moveTo(0, 0), e.lineTo(0, t);
} }, xL = { draw(e, t) {
	e.moveTo(0, 0), e.lineTo(0, -t);
} }, SL = { draw(e, t) {
	e.moveTo(0, 0), e.lineTo(-t, 0);
} }, CL = { draw(e, t) {
	e.moveTo(0, 0), e.lineTo(t, 0);
} };
function wL(e) {
	return e.bandwidth && !e.interval ? void 0 : "tabular-nums";
}
function TL(e, t, { anchor: n, label: r = t.label, labelAnchor: i, labelArrow: a } = {}) {
	if (!(r == null || r.inferred && DL(t) && /^(date|time|year)$/i.test(r))) {
		if (r = String(r), a === "auto" && (a = (!t.bandwidth || t.interval) && !/[↑↓→←]/.test(r)), !a) return r;
		if (a === !0) {
			let n = SN(t);
			n && (a = /x$/.test(e) || i === "center" ? /x$/.test(e) === n < 0 ? "left" : "right" : n < 0 ? "up" : "down");
		}
		switch (a) {
			case "left": return `← ${r}`;
			case "right": return `${r} →`;
			case "up": return n === "right" ? `${r} ↑` : `↑ ${r}`;
			case "down": return n === "right" ? `${r} ↓` : `↓ ${r}`;
		}
		return r;
	}
}
function EL(e = "auto") {
	return ZA(e) ? !1 : typeof e == "boolean" ? e : sA(e, "labelArrow", [
		"auto",
		"up",
		"right",
		"down",
		"left"
	]);
}
function DL(e) {
	return UA(e.domain());
}
//#endregion
//#region node_modules/@observablehq/plot/src/legends/swatches.js
function OL(e, t) {
	if (t == null) return t;
	let n = e(t);
	if (!n) throw Error(`scale not found: ${t}`);
	return n;
}
function kL(e, { opacity: t, ...n } = {}) {
	if (!IN(e) && !LN(e)) throw Error(`swatches legend requires ordinal or threshold color scale (not ${e.type})`);
	return jL(e, n, (e, n, r, i) => e.append("svg").attr("width", r).attr("height", i).attr("fill", n.scale).attr("fill-opacity", aA(t)[1]).append("rect").attr("width", "100%").attr("height", "100%"));
}
function AL(e, { fill: t = e.hint?.fill === void 0 ? "none" : e.hint.fill, fillOpacity: n = 1, stroke: r = e.hint?.stroke === void 0 ? ZA(t) ? "currentColor" : "none" : e.hint.stroke, strokeOpacity: i = 1, strokeWidth: a = 1.5, r: o = 4.5, ...s } = {}, c) {
	let [l, u] = iA(t), [d, f] = iA(r), p = OL(c, l), m = OL(c, d), h = o * o * Math.PI;
	return n = aA(n)[1], i = aA(i)[1], a = aA(a)[1], jL(e, s, (t, r, o, s) => t.append("svg").attr("viewBox", "-8 -8 16 16").attr("width", o).attr("height", s).attr("fill", l === "color" ? (e) => p.scale(e) : u).attr("fill-opacity", n).attr("stroke", d === "color" ? (e) => m.scale(e) : f).attr("stroke-opacity", i).attr("stroke-width", a).append("path").attr("d", (t) => {
		let n = Cm();
		return e.scale(t).draw(n, h), n;
	}));
}
function jL(e, t = {}, n) {
	let { columns: r, tickFormat: i, fontVariant: a = TF(e), swatchSize: o = 15, swatchWidth: s = o, swatchHeight: c = o, marginLeft: l = 0, className: u, style: d, width: f } = t, p = OP(t);
	u = oF(u), i = vL(e.scale, e.domain, void 0, i);
	let m = kP("div", p).attr("class", `${u}-swatches ${u}-swatches-${r == null ? "wrap" : "columns"}`), h;
	return r == null ? (h = `:where(.${u}-swatches-wrap) {
  display: flex;
  align-items: center;
  min-height: 33px;
  flex-wrap: wrap;
}
:where(.${u}-swatches-wrap .${u}-swatch) {
  display: inline-flex;
  align-items: center;
  margin-right: 1em;
}`, m.selectAll().data(e.domain).enter().append("span").attr("class", `${u}-swatch`).call(n, e, s, c).append(function() {
		return this.ownerDocument.createTextNode(i.apply(this, arguments));
	})) : (h = `:where(.${u}-swatches-columns .${u}-swatch) {
  display: flex;
  align-items: center;
  break-inside: avoid;
  padding-bottom: 1px;
}
:where(.${u}-swatches-columns .${u}-swatch::before) {
  flex-shrink: 0;
}
:where(.${u}-swatches-columns .${u}-swatch-label) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`, m.style("columns", r).selectAll().data(e.domain).enter().append("div").attr("class", `${u}-swatch`).call(n, e, s, c).call((e) => e.append("div").attr("class", `${u}-swatch-label`).attr("title", i).text(i))), m.call((e) => e.insert("style", "*").text(`:where(.${u}-swatches) {
  font-family: system-ui, sans-serif;
  font-size: 10px;
  margin-bottom: 0.5em;
}
:where(.${u}-swatch > svg) {
  margin-right: 0.5em;
  overflow: visible;
}
${h}`)).style("margin-left", l ? `${+l}px` : null).style("width", f === void 0 ? null : `${+f}px`).style("font-variant", rF(a, "normal")).call(sF, d).node();
}
//#endregion
//#region node_modules/@observablehq/plot/src/legends.js
var ML = /* @__PURE__ */ new Map([
	["symbol", AL],
	["color", FL],
	["opacity", IL]
]);
function NL(e, t, n = {}) {
	return (r, i) => {
		if (!ML.has(r)) throw Error(`unknown legend type: ${r}`);
		if (r in e) return ML.get(r)(e[r], PL(t, n[r], i), (t) => e[t]);
	};
}
function PL({ className: e, ...t }, { label: n, ticks: r, tickFormat: i } = {}, a) {
	return nj(a, {
		className: e,
		...t
	}, {
		label: n,
		ticks: r,
		tickFormat: i
	});
}
function FL(e, { legend: t = !0, ...n }) {
	if (t === !0 && (t = e.type === "ordinal" ? "swatches" : "ramp"), e.domain !== void 0) switch (`${t}`.toLowerCase()) {
		case "swatches": return kL(e, n);
		case "ramp": return EF(e, n);
		default: throw Error(`unknown legend type: ${t}`);
	}
}
function IL({ type: e, interpolate: t, ...n }, { legend: r = !0, color: i = gc(0, 0, 0), ...a }) {
	if (!t) throw Error(`${e} opacity scales are not supported`);
	if (r === !0 && (r = "ramp"), `${r}`.toLowerCase() !== "ramp") throw Error(`${r} opacity legends are not supported`);
	return FL({
		type: e,
		...n,
		interpolate: LL(i)
	}, {
		legend: r,
		...a
	});
}
function LL(e) {
	let { r: t, g: n, b: r } = gc(e) || gc(0, 0, 0);
	return (e) => `rgba(${t},${n},${r},${e})`;
}
function RL(e, t, n) {
	let r = [];
	for (let [i, a] of ML) {
		let o = n[i];
		if (o?.legend && i in e) {
			let n = a(e[i], PL(t, e[i], o), (t) => e[t]);
			n != null && r.push(n);
		}
	}
	return r;
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/identity.js
function zL(e = {}, t = "y") {
	return pA(e) ? e : {
		...e,
		[t]: Gk
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/exclusiveFacets.js
function BL(e, t) {
	if (t.length === 1) return {
		data: e,
		facets: t
	};
	let n = SA(e), r = new Uint8Array(n), i = 0;
	for (let e of t) for (let t of e) r[t] && ++i, r[t] = 1;
	if (i === 0) return {
		data: e,
		facets: t
	};
	e = dA(e);
	let a = e[Fk] = new Uint32Array(n + i);
	t = t.map((e) => dA(e, Uint32Array));
	let o = n;
	r.fill(0);
	for (let n of t) for (let t = 0, i = n.length; t < i; ++t) {
		let i = n[t];
		r[i] ? (n[t] = o, e[o] = e[i], a[o] = i, ++o) : a[i] = i, r[i] = 1;
	}
	return {
		data: e,
		facets: t
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/stack.js
function VL(e = {}, t = {}) {
	arguments.length === 1 && ([e, t] = UL(e));
	let { x1: n, x: r = n, y: i, ...a } = t, [o, s, c, l] = GL(r, i, "x", "y", e, a);
	return {
		...o,
		x1: n,
		x: s,
		y1: c,
		y2: l,
		y: AA(c, l)
	};
}
function HL({ y: e, y1: t, y2: n, ...r } = {}) {
	return r = mF(r, "x"), t === void 0 && n === void 0 ? VL({
		y: e,
		...r
	}) : ([t, n] = yA(e, t, n), {
		...r,
		y1: t,
		y2: n
	});
}
function UL(e) {
	let { offset: t, order: n, reverse: r, ...i } = e;
	return [{
		offset: t,
		order: n,
		reverse: r
	}, i];
}
var WL = { length: !0 };
function GL(e, t = Kk, n, r, { offset: i, order: a, reverse: o }, s) {
	if (t === null) throw Error(`stack requires ${r}`);
	let c = xA(s), [l, u] = OA(e), [d, f] = DA(t), [p, m] = DA(t);
	return d.hint = p.hint = WL, i = KL(i), a = $L(a, i, r), [
		Cj(s, (r, s, l) => {
			({data: r, facets: s} = BL(r, s));
			let d = e == null ? void 0 : u(jA(Ik(r, e), l?.[n])), p = Ik(r, t, Float64Array), h = Ik(r, c), g = a && a(r, d, p, h), _ = SA(r), v = f(new Float64Array(_)), y = m(new Float64Array(_)), b = [];
			for (let e of s) {
				let t = d ? Array.from(AC(e, (e) => d[e]).values()) : [e];
				if (g) for (let e of t) e.sort(g);
				for (let e of t) {
					let t = 0, n = 0;
					o && e.reverse();
					for (let r of e) {
						let e = p[r];
						e < 0 ? t = y[r] = (v[r] = t) + e : e > 0 ? n = y[r] = (v[r] = n) + e : y[r] = v[r] = n;
					}
				}
				b.push(t);
			}
			return i && i(b, v, y, h), {
				data: r,
				facets: s
			};
		}),
		l,
		d,
		p
	];
}
function KL(e) {
	if (e != null) {
		if (typeof e == "function") return e;
		switch (`${e}`.toLowerCase()) {
			case "expand":
			case "normalize": return JL;
			case "center":
			case "silhouette": return YL;
			case "wiggle": return XL;
		}
		throw Error(`unknown offset: ${e}`);
	}
}
function qL(e, t) {
	let n = 0, r = 0;
	for (let i of e) {
		let e = t[i];
		e < n && (n = e), e > r && (r = e);
	}
	return [n, r];
}
function JL(e, t, n) {
	for (let r of e) for (let e of r) {
		let [r, i] = qL(e, n);
		for (let a of e) {
			let e = 1 / (i - r || 1);
			t[a] = e * (t[a] - r), n[a] = e * (n[a] - r);
		}
	}
}
function YL(e, t, n) {
	for (let r of e) {
		for (let e of r) {
			let [r, i] = qL(e, n);
			for (let a of e) {
				let e = (i + r) / 2;
				t[a] -= e, n[a] -= e;
			}
		}
		ZL(r, t, n);
	}
	QL(e, t, n);
}
function XL(e, t, n, r) {
	for (let i of e) {
		let e = new Rr(), a = 0;
		for (let o of i) {
			let i = -1, s = o.map((e) => Math.abs(n[e] - t[e])), c = o.map((a) => {
				i = r ? r[a] : ++i;
				let o = n[a] - t[a], s = e.has(i) ? o - e.get(i) : 0;
				return e.set(i, o), s;
			}), l = [0, ...TC(c)];
			for (let e of o) t[e] += a, n[e] += a;
			let u = iw(s);
			u && (a -= iw(s, (e, t) => (c[t] / 2 + l[t]) * e) / u);
		}
		ZL(i, t, n);
	}
	QL(e, t, n);
}
function ZL(e, t, n) {
	let r = KC(e, (e) => KC(e, (e) => t[e]));
	for (let i of e) for (let e of i) t[e] -= r, n[e] -= r;
}
function QL(e, t, n) {
	let r = e.length;
	if (r === 1) return;
	let i = e.map((e) => e.flat()), a = i.map((e) => (KC(e, (e) => t[e]) + WC(e, (e) => n[e])) / 2), o = KC(a);
	for (let e = 0; e < r; e++) {
		let r = o - a[e];
		for (let a of i[e]) t[a] += r, n[a] += r;
	}
}
function $L(e, t, n) {
	if (e === void 0 && t === XL) return iR(WO);
	if (e != null) {
		if (typeof e == "string") {
			let t = e.startsWith("-"), r = t ? GO : WO;
			switch ((t ? e.slice(1) : e).toLowerCase()) {
				case "value":
				case n: return eR(r);
				case "z": return tR(r);
				case "sum": return nR(r);
				case "appearance": return rR(r);
				case "inside-out": return iR(r);
			}
			return aR(Uk(e));
		}
		if (typeof e == "function") return (e.length === 1 ? aR : oR)(e);
		if (Ak(e)) return sR(e);
		throw Error(`invalid order: ${e}`);
	}
}
function eR(e) {
	return (t, n, r) => (t, n) => e(r[t], r[n]);
}
function tR(e) {
	return (t, n, r, i) => (t, n) => e(i[t], i[n]);
}
function nR(e) {
	return cR(e, (e, t, n, r) => RC(CA(e), (e) => iw(e, (e) => n[e]), (e) => r[e]));
}
function rR(e) {
	return cR(e, (e, t, n, r) => RC(CA(e), (e) => t[XC(e, (e) => n[e])], (e) => r[e]));
}
function iR(e) {
	return cR(e, (e, t, n, r) => {
		let i = CA(e), a = RC(i, (e) => t[XC(e, (e) => n[e])], (e) => r[e]), o = jC(i, (e) => iw(e, (e) => n[e]), (e) => r[e]), s = [], c = [], l = 0;
		for (let e of a) l < 0 ? (l += o.get(e), s.push(e)) : (l -= o.get(e), c.push(e));
		return c.reverse().concat(s);
	});
}
function aR(e) {
	return (t) => {
		let n = Ik(t, e);
		return (e, t) => WO(n[e], n[t]);
	};
}
function oR(e) {
	return (t) => Ak(t) ? (n, r) => e(t[n], t[r]) : (n, r) => e(t.get(n), t.get(r));
}
function sR(e) {
	return cR(WO, () => e);
}
function cR(e, t) {
	return (n, r, i, a) => {
		if (!a) throw Error("missing channel: z");
		let o = new Rr(t(n, r, i, a).map((e, t) => [e, t]));
		return (t, n) => e(o.get(a[t]), o.get(a[n]));
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/rect.js
function lR(e, { inset: t = 0, insetTop: n = t, insetRight: r = t, insetBottom: i = t, insetLeft: a = t } = {}) {
	e.insetTop = Yk(n), e.insetRight = Yk(r), e.insetBottom = Yk(i), e.insetLeft = Yk(a);
}
function uR(e, { r: t, rx: n, ry: r, rx1: i = t, ry1: a = t, rx2: o = t, ry2: s = t, rx1y1: c = i === void 0 ? a === void 0 ? 0 : +a : +i, rx1y2: l = i === void 0 ? s === void 0 ? 0 : +s : +i, rx2y1: u = o === void 0 ? a === void 0 ? 0 : +a : +o, rx2y2: d = o === void 0 ? s === void 0 ? 0 : +s : +o } = {}) {
	c || l || u || d ? (e.rx1y1 = c, e.rx1y2 = l, e.rx2y1 = u, e.rx2y2 = d) : (e.rx = rF(n, "auto"), e.ry = rF(r, "auto"));
}
function dR(e, t, n, r, i, a) {
	let { rx1y1: o, rx1y2: s, rx2y1: c, rx2y2: l } = a;
	typeof t != "function" && (t = Qk(t)), typeof n != "function" && (n = Qk(n)), typeof r != "function" && (r = Qk(r)), typeof i != "function" && (i = Qk(i));
	let u = Math.max(Math.abs(o + c), Math.abs(s + l)), d = Math.max(Math.abs(o + s), Math.abs(c + l));
	e.attr("d", (e) => {
		let a = t(e), f = n(e), p = r(e), m = i(e), h = a > p, g = f > m, _ = h ? p : a, v = h ? a : p, y = g ? m : f, b = g ? f : m, x = Math.min(1, (v - _) / u, (b - y) / d), S = x * (h ? g ? l : c : g ? s : o), C = x * (h ? g ? s : o : g ? l : c), w = x * (h ? g ? o : s : g ? c : l), T = x * (h ? g ? c : l : g ? o : s);
		return `M${_},${y + pR(S, T)}A${S},${S} 0 0 ${S < 0 ? 0 : 1} ${_ + fR(S, T)},${y}H${v - fR(C, w)}A${C},${C} 0 0 ${C < 0 ? 0 : 1} ${v},${y + pR(C, w)}V${b - pR(w, C)}A${w},${w} 0 0 ${w < 0 ? 0 : 1} ${v - fR(w, C)},${b}H${_ + fR(T, S)}A${T},${T} 0 0 ${T < 0 ? 0 : 1} ${_},${b - pR(T, S)}Z`;
	});
}
function fR(e, t) {
	return t < 0 ? e : Math.abs(e);
}
function pR(e, t) {
	return t < 0 ? Math.abs(e) : e;
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/frame.js
var mR = {
	ariaLabel: "frame",
	fill: "none",
	stroke: "currentColor",
	clip: !1
}, hR = {
	ariaLabel: "frame",
	fill: null,
	stroke: "currentColor",
	strokeLinecap: "square",
	clip: !1
}, gR = class extends lF {
	constructor(e = {}) {
		let { anchor: t = null } = e;
		super(Hk, void 0, e, t == null ? mR : hR), this.anchor = oA(t, "anchor", [
			"top",
			"right",
			"bottom",
			"left"
		]), lR(this, e), t || uR(this, e);
	}
	render(e, t, n, r, i) {
		let { marginTop: a, marginRight: o, marginBottom: s, marginLeft: c, width: l, height: u } = r, { anchor: d, insetTop: f, insetRight: p, insetBottom: m, insetLeft: h } = this, { rx: g, ry: _, rx1y1: v, rx1y2: y, rx2y1: b, rx2y2: x } = this, S = c + h, C = l - o - p, w = a + f, T = u - s - m;
		return kP(d ? "svg:line" : v || y || b || x ? "svg:path" : "svg:rect", i).datum(0).call(QP, this, r, i).call($P, this).call(GP, this, n).call(nF, this, {}).call(d === "left" ? (e) => e.attr("x1", S).attr("x2", S).attr("y1", w).attr("y2", T) : d === "right" ? (e) => e.attr("x1", C).attr("x2", C).attr("y1", w).attr("y2", T) : d === "top" ? (e) => e.attr("x1", S).attr("x2", C).attr("y1", w).attr("y2", w) : d === "bottom" ? (e) => e.attr("x1", S).attr("x2", C).attr("y1", T).attr("y2", T) : v || y || b || x ? (e) => e.call(dR, S, w, C, T, this) : (e) => e.attr("x", S).attr("y", w).attr("width", C - S).attr("height", T - w).attr("rx", g).attr("ry", _)).node();
	}
};
function _R(e) {
	return new gR(e);
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/tip.js
var vR = {
	ariaLabel: "tip",
	fill: "var(--plot-background)",
	stroke: "currentColor"
}, yR = /* @__PURE__ */ new Set([
	"geometry",
	"href",
	"src",
	"ariaLabel",
	"scales"
]), bR = class extends lF {
	constructor(e, t = {}) {
		t.tip && (t = {
			...t,
			tip: !1
		}), t.title === void 0 && BA(e) && VA(e) && (t = {
			...t,
			title: Gk
		});
		let { x: n, y: r, x1: i, x2: a, y1: o, y2: s, anchor: c, preferredAnchor: l = "bottom", monospace: u, fontFamily: d = u ? "ui-monospace, monospace" : void 0, fontSize: f, fontStyle: p, fontVariant: m, fontWeight: h, lineHeight: g = 1, lineWidth: _ = 20, frameAnchor: v, format: y, textAnchor: b = "start", textOverflow: x, textPadding: S = 8, title: C, pointerSize: w = 12, pathFilter: T = "drop-shadow(0 3px 4px rgba(0,0,0,0.2))" } = t;
		super(e, {
			x: {
				value: i != null && a != null ? null : n,
				scale: "x",
				optional: !0
			},
			y: {
				value: o != null && s != null ? null : r,
				scale: "y",
				optional: !0
			},
			x1: {
				value: i,
				scale: "x",
				optional: a == null
			},
			y1: {
				value: o,
				scale: "y",
				optional: s == null
			},
			x2: {
				value: a,
				scale: "x",
				optional: i == null
			},
			y2: {
				value: s,
				scale: "y",
				optional: o == null
			},
			title: {
				value: C,
				optional: !0
			}
		}, t, vR), this.anchor = ej(c, "anchor"), this.preferredAnchor = ej(l, "preferredAnchor"), this.frameAnchor = tj(v), this.textAnchor = rF(b, "middle"), this.textPadding = +S, this.pointerSize = +w, this.pathFilter = Jk(T), this.lineHeight = +g, this.lineWidth = +_, this.textOverflow = sI(x), this.monospace = !!u, this.fontFamily = Jk(d), this.fontSize = Yk(f), this.fontStyle = Jk(p), this.fontVariant = Jk(m), this.fontWeight = Jk(h);
		for (let e in vR) e in this.channels && (this[e] = vR[e]);
		this.splitLines = xI(this), this.clipLine = SI(this), this.format = typeof y == "string" || typeof y == "function" ? { title: y } : { ...y };
	}
	render(e, t, n, r, i) {
		let a = this, { x: o, y: s, fx: c, fy: l } = t, { ownerSVGElement: u, document: d } = i, { anchor: f, monospace: p, lineHeight: m, lineWidth: h } = this, { textPadding: g, pointerSize: _, pathFilter: v } = this, { marginTop: y, marginLeft: b } = r, { x1: x, y1: S, x2: C, y2: w, x: T = x ?? C, y: E = S ?? w } = n, D = c ? c(e.fx) - b : 0, O = l ? l(e.fy) - y : 0, [k, A] = cF(this, r), j = CF(n, k), ee = wF(n, A), te = p ? bI : yI, ne = te("…"), re, ie;
		"title" in n ? (re = TR.call(this, { title: n.channels.title }, t), ie = DR) : (re = TR.call(this, n.channels, t), ie = OR);
		let ae = kP("svg:g", i).call(QP, this, r, i).call(fI, this).call(nF, this, {
			x: T && o,
			y: E && s
		}).call((r) => r.selectAll().data(e).enter().append("g").attr("transform", (e) => `translate(${Math.round(j(e))},${Math.round(ee(e))})`).call($P, this).call((e) => e.append("path").attr("filter", v)).call((r) => r.append("text").each(function(r) {
			let i = N(this);
			this.setAttribute("fill", "currentColor"), this.setAttribute("fill-opacity", 1), this.setAttribute("stroke", "none");
			let o = ie.call(a, r, e, re, t, n);
			if (typeof o == "string") for (let e of a.splitLines(o)) oe(i, { value: a.clipLine(e) });
			else {
				let e = /* @__PURE__ */ new Set();
				for (let t of o) {
					let { label: n = "" } = t;
					n && e.has(n) || (e.add(n), oe(i, t));
				}
			}
		})));
		function oe(e, { label: t, value: n, color: r, opacity: i }) {
			t ??= "", n ??= "";
			let a = r != null || i != null, o, s = h * 100, [c] = CI(t, s, te, ne);
			if (c >= 0) t = t.slice(0, c).trimEnd() + "…", o = n.trim(), n = "";
			else {
				(t || !n && !a) && (n = " " + n);
				let [e] = CI(n, s - te(t), te, ne);
				e >= 0 && (o = n.trim(), n = n.slice(0, e).trimEnd() + "…");
			}
			let l = e.append("tspan").attr("x", 0).attr("dy", `${m}em`).text("​");
			t && l.append("tspan").attr("font-weight", "bold").text(t), n && l.append(() => d.createTextNode(n)), a && l.append("tspan").text(" ■").attr("fill", r).attr("fill-opacity", i).style("user-select", "none"), o && l.append("title").text(o);
		}
		function se() {
			let { width: e, height: t } = r.facet ?? r;
			ae.selectChildren().each(function(n) {
				let { x: r, width: i, height: o } = this.getBBox();
				i = Math.round(i), o = Math.round(o);
				let s = f;
				if (s === void 0) {
					let r = j(n) + D, c = ee(n) + O, l = r + i + _ + g * 2 < e, u = r - i - _ - g * 2 > 0, d = c + o + _ + g * 2 < t, f = c - o - _ - g * 2 > 0;
					s = l && u ? d && f ? a.preferredAnchor : f ? "bottom" : "top" : d && f ? l ? "left" : "right" : (l || u) && (d || f) ? `${f ? "bottom" : "top"}-${l ? "left" : "right"}` : a.preferredAnchor;
				}
				let c = this.firstChild, l = this.lastChild;
				if (c.setAttribute("d", wR(s, _, g, i, o)), r) for (let e of l.childNodes) e.setAttribute("x", -r);
				l.setAttribute("y", `${+SR(s, l.childNodes.length, m).toFixed(6)}em`), l.setAttribute("transform", `translate(${CR(s, _, g, i, o)})`);
			}), ae.attr("visibility", null);
		}
		return e.length && (ae.attr("visibility", "hidden"), u.isConnected ? Promise.resolve().then(se) : typeof requestAnimationFrame < "u" && requestAnimationFrame(se)), ae.node();
	}
};
function xR(e, { x: t, y: n, ...r } = {}) {
	return r.frameAnchor === void 0 && ([t, n] = bA(t, n)), new bR(e, {
		...r,
		x: t,
		y: n
	});
}
function SR(e, t, n) {
	return /^top(?:-|$)/.test(e) ? .94 - n : -.29 - t * n;
}
function CR(e, t, n, r, i) {
	switch (e) {
		case "middle": return [-r / 2, i / 2];
		case "top-left": return [n, t + n];
		case "top": return [-r / 2, t / 2 + n];
		case "top-right": return [-r - n, t + n];
		case "right": return [-t / 2 - r - n, i / 2];
		case "bottom-left": return [n, -t - n];
		case "bottom": return [-r / 2, -t / 2 - n];
		case "bottom-right": return [-r - n, -t - n];
		case "left": return [n + t / 2, i / 2];
	}
}
function wR(e, t, n, r, i) {
	let a = r + n * 2, o = i + n * 2;
	switch (e) {
		case "middle": return `M${-a / 2},${-o / 2}h${a}v${o}h${-a}z`;
		case "top-left": return `M0,0l${t},${t}h${a - t}v${o}h${-a}z`;
		case "top": return `M0,0l${t / 2},${t / 2}h${(a - t) / 2}v${o}h${-a}v${-o}h${(a - t) / 2}z`;
		case "top-right": return `M0,0l${-t},${t}h${t - a}v${o}h${a}z`;
		case "right": return `M0,0l${-t / 2},${-t / 2}v${t / 2 - o / 2}h${-a}v${o}h${a}v${t / 2 - o / 2}z`;
		case "bottom-left": return `M0,0l${t},${-t}h${a - t}v${-o}h${-a}z`;
		case "bottom": return `M0,0l${t / 2},${-t / 2}h${(a - t) / 2}v${-o}h${-a}v${o}h${(a - t) / 2}z`;
		case "bottom-right": return `M0,0l${-t},${-t}h${t - a}v${-o}h${a}z`;
		case "left": return `M0,0l${t / 2},${-t / 2}v${t / 2 - o / 2}h${a}v${o}h${-a}v${t / 2 - o / 2}z`;
	}
}
function TR(e, t) {
	let n = {}, r = this.format;
	r = ER(r, e, "x"), r = ER(r, e, "y"), this.format = r;
	for (let t in r) {
		let i = r[t];
		if (i !== null && i !== !1) if (t === "fx" || t === "fy") n[t] = !0;
		else {
			let r = rM(e, t);
			r && (n[t] = r);
		}
	}
	for (let t in e) {
		if (t in n || t in r || yR.has(t) || (t === "x" || t === "y") && e.geometry) continue;
		let i = rM(e, t);
		if (i) {
			if (i.scale == null && i.defaultScale === "color") continue;
			n[t] = i;
		}
	}
	this.facet && (t.fx && !("fx" in r) && (n.fx = !0), t.fy && !("fy" in r) && (n.fy = !0));
	for (let e in n) {
		let r = this.format[e];
		if (typeof r == "string") {
			let i = n[e]?.value ?? t[e]?.domain() ?? [];
			this.format[e] = (UA(i) ? Aa : ju)(r);
		} else if (r === void 0 || r === !0) {
			let n = t[e];
			this.format[e] = n?.bandwidth ? vL(n, n.domain()) : RP;
		}
	}
	return n;
}
function ER(e, t, n) {
	if (!(n in e)) return e;
	let r = `${n}1`, i = `${n}2`;
	if ((r in e || !(r in t)) && (i in e || !(i in t))) return e;
	let a = Object.entries(e), o = e[n];
	return a.splice(a.findIndex(([e]) => e === n) + 1, 0, [r, o], [i, o]), Object.fromEntries(a);
}
function DR(e, t, { title: n }) {
	return this.format.title(n.value[e], e);
}
function* OR(e, t, n, r, i) {
	for (let a in n) {
		if (a === "fx" || a === "fy") {
			yield {
				label: jR(r, n, a),
				value: this.format[a](t[a], e)
			};
			continue;
		}
		if (a === "x1" && "x2" in n || a === "y1" && "y2" in n) continue;
		let o = n[a];
		if (a === "x2" && "x1" in n) yield {
			label: AR(r, n, "x"),
			value: kR(this.format.x2, n.x1, o, e)
		};
		else if (a === "y2" && "y1" in n) yield {
			label: AR(r, n, "y"),
			value: kR(this.format.y2, n.y1, o, e)
		};
		else {
			let t = o.value[e], s = o.scale;
			if (!UO(t) && s == null) continue;
			yield {
				label: jR(r, n, a),
				value: this.format[a](t, e),
				color: s === "color" ? i[a][e] : null,
				opacity: s === "opacity" ? i[a][e] : null
			};
		}
	}
}
function kR(e, t, n, r) {
	return n.hint?.length ? `${e(n.value[r] - t.value[r], r)}` : `${e(t.value[r], r)}–${e(n.value[r], r)}`;
}
function AR(e, t, n) {
	let r = jR(e, t, `${n}1`, n), i = jR(e, t, `${n}2`, n);
	return r === i ? r : `${r}–${i}`;
}
function jR(e, t, n, r = n) {
	let i = t[n], a = e[i?.scale ?? n];
	return String(a?.label ?? i?.label ?? r);
}
//#endregion
//#region node_modules/@observablehq/plot/src/plot.js
function MR(e = {}) {
	let { facet: t, style: n, title: r, subtitle: i, caption: a, ariaLabel: o, ariaDescription: s } = e, c = oF(e.className), l = e.marks === void 0 ? [] : FR(e.marks);
	l.push(...KR(l));
	let u = UR(t, e), d = /* @__PURE__ */ new Map();
	for (let t of l) {
		let n = WR(t, u, e);
		n && d.set(t, n);
	}
	let f = /* @__PURE__ */ new Map();
	u && VR(f, [u], e), VR(f, d, e);
	let p = FR(qR(l, f, e));
	for (let t of p) {
		let n = WR(t, u, e);
		n && d.set(t, n);
	}
	l.unshift(...p);
	let m = WN(f, e);
	if (m !== void 0) {
		let e = u ? fP(m, u) : void 0;
		for (let t of l) {
			if (t.facet === null || t.facet === "super") continue;
			let n = d.get(t);
			n !== void 0 && (n.facetsIndex = t.fx != null || t.fy != null ? fP(m, n) : e);
		}
		let t = /* @__PURE__ */ new Set();
		for (let { facetsIndex: e } of d.values()) e?.forEach((e, n) => {
			e?.length > 0 && t.add(n);
		});
		m.forEach(0 < t.size && t.size < m.length ? (e, n) => e.empty = !t.has(n) : (e) => e.empty = !1);
		for (let e of l) if (e.facet === "exclude") {
			let t = d.get(e);
			t !== void 0 && (t.facetsIndex = JN(t.facetsIndex));
		}
	}
	for (let t of Q.keys()) gA(e[t]) && t !== "fx" && t !== "fy" && f.set(t, []);
	let h = /* @__PURE__ */ new Map();
	for (let t of l) {
		if (h.has(t)) throw Error("duplicate mark; each mark must be unique");
		let { facetsIndex: n, channels: r } = d.get(t) ?? {}, { data: i, facets: a, channels: o } = t.initialize(n, r, e);
		RR(o, e), h.set(t, {
			data: i,
			facets: a,
			channels: o
		});
	}
	let g = vN(VR(f, h, e), e), _ = hF(g, l, e);
	bN(g, _);
	let v = yN(g), { fx: y, fy: b } = v, x = y || b ? wN(g, _) : _, S = y || b ? iz(v, _) : _, C = OP(e), w = C.document, T = Je("svg").call(w.documentElement), E = T;
	C.ownerSVGElement = T, C.className = c, C.projection = gP(e, x), C.path = function() {
		return dE(this.projection ?? DP(v));
	}, C.filterFacets = (e, t) => fP(m, {
		channels: t,
		groups: KN(e, t)
	}), C.getMarkState = (e) => {
		let t = h.get(e), n = d.get(e);
		return {
			...t,
			channels: {
				...t.channels,
				...n?.channels
			}
		};
	}, C.dispatchValue = (e) => {
		E.value !== e && (E.value = e, E.dispatchEvent(new C.document.defaultView.Event("input", { bubbles: !0 })));
	};
	let D = /* @__PURE__ */ new Set();
	for (let [t, n] of h) if (t.initializer != null) {
		let r = t.facet === "super" ? S : x, i = t.initializer(n.data, n.facets, n.channels, v, r, C);
		if (i.data !== void 0 && (n.data = i.data), i.facets !== void 0 && (n.facets = i.facets), i.channels !== void 0) {
			let { fx: r, fy: a, ...o } = i.channels;
			BR(o), Object.assign(n.channels, o);
			for (let t of Object.values(o)) {
				let { scale: n } = t;
				n != null && !gj(Q.get(n)) && (zR(t, e), D.add(n));
			}
			(r != null || a != null) && d.set(t, !0);
		}
	}
	if (D.size) {
		let t = /* @__PURE__ */ new Map();
		VR(t, h, e, (e) => D.has(e)), VR(f, h, e, (e) => D.has(e));
		let n = rz(vN(t, e), g), { scales: r, ...i } = yN(n);
		Object.assign(g, n), Object.assign(v, i), Object.assign(v.scales, r);
	}
	let O, k;
	m !== void 0 && (O = {
		x: y?.domain(),
		y: b?.domain()
	}, m = GN(m, O), k = qN(y, b, _));
	for (let [e, t] of h) t.values = e.scale(t.channels, v, C);
	let { width: A, height: j } = _;
	N(T).attr("class", c).attr("fill", "currentColor").attr("font-family", "system-ui, sans-serif").attr("font-size", 10).attr("text-anchor", "middle").attr("width", A).attr("height", j).attr("viewBox", `0 0 ${A} ${j}`).attr("aria-label", o).attr("aria-description", s).call((e) => e.append("style").text(`:where(.${c}) {
  --plot-background: white;
  display: block;
  height: auto;
  height: intrinsic;
  max-width: 100%;
}
:where(.${c} text),
:where(.${c} tspan) {
  white-space: pre;
}`)).call(sF, n);
	for (let e of l) {
		let { channels: t, values: n, facets: r } = h.get(e);
		if (m === void 0 || e.facet === "super") {
			let i = null;
			if (r && (i = r[0], i = e.filter(i, t, n), i.length === 0)) continue;
			let a = e.render(i, v, n, S, C);
			if (a == null) continue;
			T.appendChild(a);
		} else {
			let i;
			for (let a of m) {
				if (!(e.facetAnchor?.(m, O, a) ?? !a.empty)) continue;
				let o = null;
				if (r) {
					let i = d.has(e);
					if (o = r[i ? a.i : 0], o = e.filter(o, t, n), o.length === 0) continue;
					!i && o === r[0] && (o = TA(o)), o.fx = a.x, o.fy = a.y, o.fi = a.i;
				}
				let s = e.render(o, v, n, x, C);
				if (s != null) {
					(i ??= N(T).append("g")).append(() => s).datum(a);
					for (let e of [
						"aria-label",
						"aria-description",
						"aria-hidden",
						"transform"
					]) s.hasAttribute(e) && (i.attr(e, s.getAttribute(e)), s.removeAttribute(e));
				}
			}
			i?.selectChildren().each(k);
		}
	}
	let ee = RL(g, C, e), { figure: te = r != null || i != null || a != null || ee.length > 0 } = e;
	te && (E = w.createElement("figure"), E.className = `${c}-figure`, E.style.maxWidth = "initial", r != null && E.append(NR(w, r, "h2")), i != null && E.append(NR(w, i, "h3")), E.append(...ee, T), a != null && E.append(PR(w, a)), "value" in T && (E.value = T.value, delete T.value)), E.scale = HN(v.scales), E.legend = NL(g, C, e);
	let ne = KM();
	return ne > 0 && N(T).append("text").attr("x", A).attr("y", 20).attr("dy", "-1em").attr("text-anchor", "end").attr("font-family", "initial").text("⚠️").append("title").text(`${ne.toLocaleString("en-US")} warning${ne === 1 ? "" : "s"}. Please check the console.`), E;
}
function NR(e, t, n) {
	if (t.ownerDocument) return t;
	let r = e.createElement(n);
	return r.append(t), r;
}
function PR(e, t) {
	let n = e.createElement("figcaption");
	return n.append(t), n;
}
function FR(e) {
	return e.flat(Infinity).filter((e) => e != null).map(IR);
}
function IR(e) {
	return typeof e.render == "function" ? e : new LR(e);
}
var LR = class extends lF {
	constructor(e) {
		if (typeof e != "function") throw TypeError("invalid mark; missing render function");
		super(), this.render = e;
	}
	render() {}
};
function RR(e, t) {
	for (let n in e) zR(e[n], t);
	return e;
}
function zR(e, t) {
	let { scale: n, transform: r = !0 } = e;
	if (n == null || !r) return;
	let { type: i, percent: a, interval: o, transform: s = a ? (e) => e == null ? NaN : e * 100 : MA(o, i) } = t[n] ?? {};
	s != null && (e.value = Z(e.value, s), e.transform = !1);
}
function BR(e) {
	for (let t in e) Jj(t, e[t]);
}
function VR(e, t, n, r = qk) {
	for (let { channels: i } of t.values()) for (let t in i) {
		let a = i[t], { scale: o } = a;
		if (o != null && r(o)) if (o === "projection") {
			if (!wP(n)) {
				let t = n.x?.domain === void 0, r = n.y?.domain === void 0;
				if (t || r) {
					let [n, i] = EP(a);
					t && HR(e, "x", n), r && HR(e, "y", i);
				}
			}
		} else HR(e, o, a);
	}
	return e;
}
function HR(e, t, n) {
	let r = e.get(t);
	r === void 0 ? e.set(t, [n]) : r.push(n);
}
function UR(e, t) {
	if (e == null) return;
	let { x: n, y: r } = e;
	if (n == null && r == null) return;
	let i = cA(e.data);
	if (i == null) throw Error("missing facet data");
	let a = {};
	return n != null && (a.fx = Gj(i, {
		value: n,
		scale: "fx"
	})), r != null && (a.fy = Gj(i, {
		value: r,
		scale: "fy"
	})), RR(a, t), {
		channels: a,
		groups: KN(i, a),
		data: e.data
	};
}
function WR(e, t, n) {
	if (e.facet === null || e.facet === "super") return;
	let { fx: r, fy: i } = e;
	if (r != null || i != null) {
		let t = cA(e.data ?? r ?? i);
		if (t === void 0) throw Error(`missing facet data in ${e.ariaLabel}`);
		if (t === null) return;
		let a = {};
		return r != null && (a.fx = Gj(t, {
			value: r,
			scale: "fx"
		})), i != null && (a.fy = Gj(t, {
			value: i,
			scale: "fy"
		})), RR(a, n), {
			channels: a,
			groups: KN(t, a)
		};
	}
	if (t === void 0) return;
	let { channels: a, groups: o, data: s } = t;
	if (e.facet !== "auto" || e.data === s) return {
		channels: a,
		groups: o
	};
	s.length > 0 && (o.size > 1 || o.size === 1 && a.fx && a.fy && [...o][0][1].size > 1) && SA(cA(e.data)) === SA(s) && qM(`Warning: the ${e.ariaLabel} mark appears to use faceted data, but isn’t faceted. The mark data has the same length as the facet data and the mark facet option is "auto", but the mark data and facet data are distinct. If this mark should be faceted, set the mark facet option to true; otherwise, suppress this warning by setting the mark facet option to false.`);
}
function GR(e, t = {}) {
	return wj({
		...t,
		x: null,
		y: null
	}, (t, n, r, i, a, o) => o.getMarkState(e));
}
function KR(e) {
	let t = [];
	for (let n of e) {
		let e = n.tip;
		if (e) {
			e === !0 ? e = {} : typeof e == "string" && (e = { pointer: e });
			let { pointer: r, preferredAnchor: i } = e;
			r = /^x$/i.test(r) ? xF : /^y$/i.test(r) ? SF : bF, e = r(GR(n, e)), e.title = null, i === void 0 && (e.preferredAnchor = r === SF ? "left" : "bottom");
			let a = xR(n.data, e);
			a.facet = n.facet, a.facetAnchor = n.facetAnchor, t.push(a);
		}
	}
	return t;
}
function qR(e, t, n) {
	let { projection: r, x: i = {}, y: a = {}, fx: o = {}, fy: s = {}, axis: c, grid: l, facet: u = {}, facet: { axis: d = c, grid: f } = u, x: { axis: p = c, grid: m = p === null ? null : l } = i, y: { axis: h = c, grid: g = h === null ? null : l } = a, fx: { axis: _ = d, grid: v = _ === null ? null : f } = o, fy: { axis: y = d, grid: b = y === null ? null : f } = s } = n;
	(r || !gA(i) && !nz("x", e)) && (p = m = null), (r || !gA(a) && !nz("y", e)) && (h = g = null), t.has("fx") || (_ = v = null), t.has("fy") || (y = b = null), p === void 0 && (p = !tz(e, "x")), h === void 0 && (h = !tz(e, "y")), _ === void 0 && (_ = !tz(e, "fx")), y === void 0 && (y = !tz(e, "fy")), p === !0 && (p = "bottom"), h === !0 && (h = "left"), _ === !0 && (_ = p === "top" || p === null ? "bottom" : "top"), y === !0 && (y = h === "right" || h === null ? "left" : "right");
	let x = [];
	return YR(x, b, cL, s), JR(x, y, QI, "right", "left", u, s), YR(x, v, uL, o), JR(x, _, eL, "top", "bottom", u, o), YR(x, g, sL, a), JR(x, h, ZI, "left", "right", n, a), YR(x, m, lL, i), JR(x, p, $I, "bottom", "top", n, i), x;
}
function JR(e, t, n, r, i, a, o) {
	if (!t) return;
	let s = XR(t);
	o = ZR(s ? r : t, a, o);
	let { line: c } = o;
	(n === ZI || n === $I) && c && !QA(c) && e.push(_R(QR(o))), e.push(n(o)), s && e.push(n({
		...o,
		anchor: i,
		label: null
	}));
}
function YR(e, t, n, r) {
	!t || QA(t) || e.push(n($R(t, r)));
}
function XR(e) {
	return /^\s*both\s*$/i.test(e);
}
function ZR(e, t, { line: n = t.line, ticks: r, tickSize: i, tickSpacing: a, tickPadding: o, tickFormat: s, tickRotate: c, fontVariant: l, ariaLabel: u, ariaDescription: d, label: f = t.label, labelAnchor: p, labelArrow: m = t.labelArrow, labelOffset: h }) {
	return {
		anchor: e,
		line: n,
		ticks: r,
		tickSize: i,
		tickSpacing: a,
		tickPadding: o,
		tickFormat: s,
		tickRotate: c,
		fontVariant: l,
		ariaLabel: u,
		ariaDescription: d,
		label: f,
		labelAnchor: p,
		labelArrow: m,
		labelOffset: h
	};
}
function QR(e) {
	let { anchor: t, line: n } = e;
	return {
		anchor: t,
		facetAnchor: t + "-empty",
		stroke: n === !0 ? void 0 : n
	};
}
function $R(e, { stroke: t = YA(e) ? e : void 0, ticks: n = ez(e) ? e : void 0, tickSpacing: r, ariaLabel: i, ariaDescription: a }) {
	return {
		stroke: t,
		ticks: n,
		tickSpacing: r,
		ariaLabel: i,
		ariaDescription: a
	};
}
function ez(e) {
	switch (typeof e) {
		case "number": return !0;
		case "string": return !YA(e);
	}
	return BA(e) || typeof e?.range == "function";
}
function tz(e, t) {
	let n = `${t}-axis `;
	return e.some((e) => e.ariaLabel?.startsWith(n));
}
function nz(e, t) {
	for (let n of t) for (let t in n.channels) {
		let { scale: r } = n.channels[t];
		if (r === e || r === "projection") return !0;
	}
	return !1;
}
function rz(e, t) {
	for (let n in e) {
		let r = e[n], i = t[n];
		r.label === void 0 && i && (r.label = i.label);
	}
	return e;
}
function iz({ fx: e, fy: t }, n) {
	let { marginTop: r, marginRight: i, marginBottom: a, marginLeft: o, width: s, height: c } = CN(n), l = e && az(e), u = t && az(t);
	return {
		marginTop: t ? u[0] : r,
		marginRight: e ? s - l[1] : i,
		marginBottom: t ? c - u[1] : a,
		marginLeft: e ? l[0] : o,
		inset: {
			marginTop: n.marginTop,
			marginRight: n.marginRight,
			marginBottom: n.marginBottom,
			marginLeft: n.marginLeft
		},
		width: s,
		height: c
	};
}
function az(e) {
	let t = e.domain();
	if (t.length === 0) return [0, e.bandwidth()];
	let n = e(t[0]), r = e(t[t.length - 1]);
	return r < n && ([n, r] = [r, n]), [n, r + e.bandwidth()];
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/bar.js
var oz = { ariaLabel: "bar" }, sz = class extends lF {
	constructor(e, t, n = {}, r = oz) {
		super(e, t, n, r), lR(this, n), uR(this, n);
	}
	render(e, t, n, r, i) {
		let { rx: a, ry: o, rx1y1: s, rx1y2: c, rx2y1: l, rx2y2: u } = this, d = this._x(t, n, r), f = this._y(t, n, r), p = this._width(t, n, r), m = this._height(t, n, r);
		return kP("svg:g", i).call(QP, this, r, i).call(this._transform, this, t).call((t) => t.selectAll().data(e).enter().call(s || c || l || u ? (e) => e.append("path").call($P, this).call(dR, d, f, cz(d, p), cz(f, m), this).call(GP, this, n) : (e) => e.append("rect").call($P, this).attr("x", d).attr("width", p).attr("y", f).attr("height", m).call($, "rx", a).call($, "ry", o).call(GP, this, n))).node();
	}
	_x(e, { x: t }, { marginLeft: n }) {
		let { insetLeft: r } = this;
		return t ? (e) => t[e] + r : n + r;
	}
	_y(e, { y: t }, { marginTop: n }) {
		let { insetTop: r } = this;
		return t ? (e) => t[e] + r : n + r;
	}
	_width({ x: e }, { x: t }, { marginRight: n, marginLeft: r, width: i }) {
		let { insetLeft: a, insetRight: o } = this, s = t && e ? e.bandwidth() : i - n - r;
		return Math.max(0, s - a - o);
	}
	_height({ y: e }, { y: t }, { marginTop: n, marginBottom: r, height: i }) {
		let { insetTop: a, insetBottom: o } = this, s = t && e ? e.bandwidth() : i - n - r;
		return Math.max(0, s - a - o);
	}
};
function cz(e, t) {
	return typeof e == "function" && typeof t == "function" ? (n) => e(n) + t(n) : typeof e == "function" ? (n) => e(n) + t : typeof t == "function" ? (n) => e + t(n) : e + t;
}
var lz = class extends sz {
	constructor(e, t = {}, n) {
		let { x: r, y1: i, y2: a } = t;
		super(e, {
			y1: {
				value: i,
				scale: "y"
			},
			y2: {
				value: a,
				scale: "y"
			},
			x: {
				value: r,
				scale: "x",
				type: "band",
				optional: !0
			}
		}, t, n);
	}
	_transform(e, t, { y: n }) {
		e.call(nF, t, { y: n }, 0, 0);
	}
	_y({ y: e }, { y1: t, y2: n }, { marginTop: r }) {
		let { insetTop: i } = this;
		return zN(e) ? r + i : (e) => Math.min(t[e], n[e]) + i;
	}
	_height({ y: e }, { y1: t, y2: n }, { marginTop: r, marginBottom: i, height: a }) {
		let { insetTop: o, insetBottom: s } = this;
		return zN(e) ? a - r - i - o - s : (e) => Math.max(0, Math.abs(n[e] - t[e]) - o - s);
	}
};
function uz(e, t = {}) {
	return mA(t) || (t = {
		...t,
		x: Wk,
		y2: Gk
	}), new lz(e, HL(JF(zL(t))));
}
//#endregion
//#region node_modules/@observablehq/plot/src/index.js
lF.prototype.plot = function({ marks: e = [], ...t } = {}) {
	return MR({
		...t,
		marks: [...e, this]
	});
};
//#endregion
//#region src/plotBarChart.ts
var dz = 640, fz = 400;
function pz(e, t) {
	let n = mz(e);
	function r() {
		t.replaceChildren();
		let e = t.clientWidth || dz, r = MR({
			fx: { label: null },
			height: t.clientHeight || fz,
			marks: [uz(n, {
				fx: "category",
				tip: !0,
				x: "seriesName",
				y: "value",
				fill: "seriesName"
			}), tI([0])],
			width: e,
			x: { axis: null },
			y: { grid: !0 }
		});
		if (t.append(r), !(r instanceof SVGSVGElement)) throw Error("Expected Observable Plot to render an SVG element.");
		return r;
	}
	let i = r();
	return {
		resize: () => {
			i = r();
		},
		get svg() {
			return i;
		}
	};
}
function mz(e) {
	let t = [];
	for (let n of e.series) for (let [r, i] of e.categories.entries()) t.push({
		category: i,
		seriesName: n.name,
		value: n.values[r] ?? 0
	});
	return t;
}
//#endregion
//#region node_modules/d3-sankey/src/align.js
function hz(e, t) {
	return e.sourceLinks.length ? e.depth : t - 1;
}
//#endregion
//#region node_modules/d3-sankey/src/constant.js
function gz(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-sankey/src/sankey.js
function _z(e, t) {
	return yz(e.source, t.source) || e.index - t.index;
}
function vz(e, t) {
	return yz(e.target, t.target) || e.index - t.index;
}
function yz(e, t) {
	return e.y0 - t.y0;
}
function bz(e) {
	return e.value;
}
function xz(e) {
	return e.index;
}
function Sz(e) {
	return e.nodes;
}
function Cz(e) {
	return e.links;
}
function wz(e, t) {
	let n = e.get(t);
	if (!n) throw Error("missing: " + t);
	return n;
}
function Tz({ nodes: e }) {
	for (let t of e) {
		let e = t.y0, n = e;
		for (let n of t.sourceLinks) n.y0 = e + n.width / 2, e += n.width;
		for (let e of t.targetLinks) e.y1 = n + e.width / 2, n += e.width;
	}
}
function Ez() {
	let e = 0, t = 0, n = 1, r = 1, i = 24, a = 8, o, s = xz, c = hz, l, u, d = Sz, f = Cz, p = 6;
	function m() {
		let e = {
			nodes: d.apply(null, arguments),
			links: f.apply(null, arguments)
		};
		return h(e), g(e), _(e), v(e), x(e), Tz(e), e;
	}
	m.update = function(e) {
		return Tz(e), e;
	}, m.nodeId = function(e) {
		return arguments.length ? (s = typeof e == "function" ? e : gz(e), m) : s;
	}, m.nodeAlign = function(e) {
		return arguments.length ? (c = typeof e == "function" ? e : gz(e), m) : c;
	}, m.nodeSort = function(e) {
		return arguments.length ? (l = e, m) : l;
	}, m.nodeWidth = function(e) {
		return arguments.length ? (i = +e, m) : i;
	}, m.nodePadding = function(e) {
		return arguments.length ? (a = o = +e, m) : a;
	}, m.nodes = function(e) {
		return arguments.length ? (d = typeof e == "function" ? e : gz(e), m) : d;
	}, m.links = function(e) {
		return arguments.length ? (f = typeof e == "function" ? e : gz(e), m) : f;
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
			typeof t != "object" && (t = r.source = wz(n, t)), typeof i != "object" && (i = r.target = wz(n, i)), t.sourceLinks.push(r), i.targetLinks.push(r);
		}
		if (u != null) for (let { sourceLinks: t, targetLinks: n } of e) t.sort(u), n.sort(u);
	}
	function g({ nodes: e }) {
		for (let t of e) t.value = t.fixedValue === void 0 ? Math.max(ni(t.sourceLinks, bz), ni(t.targetLinks, bz)) : t.fixedValue;
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
		let r = Xr(t, (e) => e.depth) + 1, a = (n - e - i) / (r - 1), o = Array(r);
		for (let n of t) {
			let t = Math.max(0, Math.min(r - 1, Math.floor(c.call(null, n, r))));
			n.layer = t, n.x0 = e + t * a, n.x1 = n.x0 + i, o[t] ? o[t].push(n) : o[t] = [n];
		}
		if (l) for (let e of o) e.sort(l);
		return o;
	}
	function b(e) {
		let n = Zr(e, (e) => (r - t - (e.length - 1) * o) / ni(e, bz));
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
		o = Math.min(a, (r - t) / (Xr(n, (e) => e.length) - 1)), b(n);
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
			l === void 0 && i.sort(yz), w(i, n);
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
			l === void 0 && i.sort(yz), w(i, n);
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
			for (let { source: { sourceLinks: e } } of t) e.sort(vz);
			for (let { target: { targetLinks: t } } of e) t.sort(_z);
		}
	}
	function O(e) {
		if (u === void 0) for (let { sourceLinks: t, targetLinks: n } of e) t.sort(vz), n.sort(_z);
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
var Dz = Math.PI, Oz = 2 * Dz, kz = 1e-6, Az = Oz - kz;
function jz() {
	this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
}
function Mz() {
	return new jz();
}
jz.prototype = Mz.prototype = {
	constructor: jz,
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
		else if (d > kz) if (!(Math.abs(u * s - c * l) > kz) || !i) this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
		else {
			var f = n - a, p = r - o, m = s * s + c * c, h = f * f + p * p, g = Math.sqrt(m), _ = Math.sqrt(d), v = i * Math.tan((Dz - Math.acos((m + d - h) / (2 * g * _))) / 2), y = v / _, b = v / g;
			Math.abs(y - 1) > kz && (this._ += "L" + (e + y * l) + "," + (t + y * u)), this._ += "A" + i + "," + i + ",0,0," + +(u * f > l * p) + "," + (this._x1 = e + b * s) + "," + (this._y1 = t + b * c);
		}
	},
	arc: function(e, t, n, r, i, a) {
		e = +e, t = +t, n = +n, a = !!a;
		var o = n * Math.cos(r), s = n * Math.sin(r), c = e + o, l = t + s, u = 1 ^ a, d = a ? r - i : i - r;
		if (n < 0) throw Error("negative radius: " + n);
		this._x1 === null ? this._ += "M" + c + "," + l : (Math.abs(this._x1 - c) > kz || Math.abs(this._y1 - l) > kz) && (this._ += "L" + c + "," + l), n && (d < 0 && (d = d % Oz + Oz), d > Az ? this._ += "A" + n + "," + n + ",0,1," + u + "," + (e - o) + "," + (t - s) + "A" + n + "," + n + ",0,1," + u + "," + (this._x1 = c) + "," + (this._y1 = l) : d > kz && (this._ += "A" + n + "," + n + ",0," + +(d >= Dz) + "," + u + "," + (this._x1 = e + n * Math.cos(i)) + "," + (this._y1 = t + n * Math.sin(i))));
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
function Nz(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-sankey/node_modules/d3-shape/src/point.js
function Pz(e) {
	return e[0];
}
function Fz(e) {
	return e[1];
}
//#endregion
//#region node_modules/d3-sankey/node_modules/d3-shape/src/array.js
var Iz = Array.prototype.slice;
//#endregion
//#region node_modules/d3-sankey/node_modules/d3-shape/src/link/index.js
function Lz(e) {
	return e.source;
}
function Rz(e) {
	return e.target;
}
function zz(e) {
	var t = Lz, n = Rz, r = Pz, i = Fz, a = null;
	function o() {
		var o, s = Iz.call(arguments), c = t.apply(this, s), l = n.apply(this, s);
		if (a ||= o = Mz(), e(a, +r.apply(this, (s[0] = c, s)), +i.apply(this, s), +r.apply(this, (s[0] = l, s)), +i.apply(this, s)), o) return a = null, o + "" || null;
	}
	return o.source = function(e) {
		return arguments.length ? (t = e, o) : t;
	}, o.target = function(e) {
		return arguments.length ? (n = e, o) : n;
	}, o.x = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : Nz(+e), o) : r;
	}, o.y = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : Nz(+e), o) : i;
	}, o.context = function(e) {
		return arguments.length ? (a = e ?? null, o) : a;
	}, o;
}
function Bz(e, t, n, r, i) {
	e.moveTo(t, n), e.bezierCurveTo(t = (t + r) / 2, n, t, i, r, i);
}
function Vz() {
	return zz(Bz);
}
//#endregion
//#region node_modules/d3-sankey/src/sankeyLinkHorizontal.js
function Hz(e) {
	return [e.source.x1, e.y0];
}
function Uz(e) {
	return [e.target.x0, e.y1];
}
function Wz() {
	return Vz().source(Hz).target(Uz);
}
//#endregion
//#region src/palette.ts
var Gz = [
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
], Kz = {
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
}, qz = {
	dark: {
		border: "rgba(255,255,255,0.10)",
		chart: "#1a1a19"
	},
	light: {
		border: "rgba(11,11,11,0.10)",
		chart: "#fcfcfb"
	}
};
function Jz(e, t) {
	let n = Gz[(e % Gz.length + Gz.length) % Gz.length];
	if (n == null) throw Error("Categorical palette is empty.");
	return t === "dark" ? n.dark : n.light;
}
//#endregion
//#region src/sankeyDiagram.ts
var Yz = 16, Xz = 12, Zz = 480, Qz = 640, $z = 6;
function eB(e, t, n = {}) {
	let r = n.colorModeId ?? "light", i = Kz[r], a = qz[r];
	getComputedStyle(t).position === "static" && (t.style.position = "relative");
	let o = N(t).append("div").attr("role", "tooltip").style("position", "absolute").style("pointer-events", "none").style("z-index", "1").style("opacity", "0").style("transition", "opacity 120ms ease").style("padding", "4px 8px").style("border-radius", "4px").style("font", "12px system-ui, -apple-system, \"Segoe UI\", sans-serif").style("white-space", "nowrap").style("background", a.chart).style("color", i.primary).style("border", `1px solid ${a.border}`).style("box-shadow", "0 2px 8px rgba(0,0,0,0.15)");
	function s(e, n) {
		let r = t.getBoundingClientRect();
		o.html(n).style("left", `${String(e.clientX - r.left + 12)}px`).style("top", `${String(e.clientY - r.top + 12)}px`).style("opacity", "1");
	}
	function c() {
		o.style("opacity", "0");
	}
	function l() {
		N(t).selectAll("svg").remove();
		let a = t.clientWidth || Qz, o = t.clientHeight || Zz, l = {
			links: e.links.map((e) => ({ ...e })),
			nodes: e.nodes.map((e) => ({ ...e }))
		}, { links: u, nodes: d } = Ez().nodeId((e) => e.id).nodeWidth(n.nodeWidth ?? Yz).nodePadding(n.nodePadding ?? Xz).extent([[1, 1], [a - 1, o - 1]])(l), f = N(t).insert("svg", "div").attr("viewBox", `0 0 ${String(a)} ${String(o)}`).attr("width", "100%").attr("height", "100%").attr("font-family", "system-ui, -apple-system, \"Segoe UI\", sans-serif").attr("font-size", 12), p = Wz();
		f.append("g").attr("fill", "none").selectAll("path").data(u).join("path").attr("d", p).attr("stroke", (e) => Jz(d.indexOf(e.source), r)).attr("stroke-opacity", .35).attr("stroke-width", (e) => Math.max(1, e.width ?? 1)).on("mouseenter", (e, t) => {
			N(e.currentTarget).attr("stroke-opacity", .6);
			let n = t.source, r = t.target;
			s(e, `${n.name} → ${r.name}<br>${t.value.toLocaleString()}`);
		}).on("mousemove", (e, t) => {
			let n = t.source, r = t.target;
			s(e, `${n.name} → ${r.name}<br>${t.value.toLocaleString()}`);
		}).on("mouseleave", (e) => {
			N(e.currentTarget).attr("stroke-opacity", .35), c();
		});
		let m = f.append("g").selectAll("g").data(d).join("g");
		m.append("rect").attr("x", (e) => e.x0 ?? 0).attr("y", (e) => e.y0 ?? 0).attr("width", (e) => (e.x1 ?? 0) - (e.x0 ?? 0)).attr("height", (e) => Math.max(1, (e.y1 ?? 0) - (e.y0 ?? 0))).attr("rx", 2).attr("fill", (e, t) => Jz(t, r)).on("mouseenter", (e, t) => {
			s(e, `${t.name}<br>${(t.value ?? 0).toLocaleString()}`);
		}).on("mousemove", (e, t) => {
			s(e, `${t.name}<br>${(t.value ?? 0).toLocaleString()}`);
		}).on("mouseleave", c), m.append("text").attr("x", (e) => (e.x0 ?? 0) < a / 2 ? (e.x1 ?? 0) + $z : (e.x0 ?? 0) - $z).attr("y", (e) => ((e.y0 ?? 0) + (e.y1 ?? 0)) / 2).attr("dy", "0.35em").attr("text-anchor", (e) => (e.x0 ?? 0) < a / 2 ? "start" : "end").attr("fill", i.primary).text((e) => e.name);
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
var tB = 140, nB = 40, rB = 24, iB = 50, aB = 8, oB = {
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
function sB(e, t, n = {}) {
	let r = n.nodeWidth ?? tB, i = n.nodeHeight ?? nB, a = n.siblingGap ?? rB, o = n.levelGap ?? iB, s = n.padding ?? aB, c = n.nodeColors ?? oB;
	function l(e) {
		return e.depth === 0 ? "root" : e.children ? "branch" : "leaf";
	}
	function u() {
		N(t).selectAll("svg").remove();
		let n = ov(e, (e) => e.children), u = xv().nodeSize([i + a, r + o]).separation(() => 1)(n);
		u.eachAfter((e) => {
			let [t] = e.children ?? [];
			t && (e.x = t.x);
		});
		let d = u.descendants(), f = Math.min(...d.map((e) => e.y)) - r / 2, p = Math.max(...d.map((e) => e.y)) + r / 2, m = Math.min(...d.map((e) => e.x)) - i / 2, h = Math.max(...d.map((e) => e.x)) + i / 2, g = p - f + s * 2, _ = h - m + s * 2, v = N(t).append("svg").attr("viewBox", `0 0 ${String(g)} ${String(_)}`).attr("width", g).attr("height", _), y = v.append("g").attr("transform", `translate(${String(s - f)}, ${String(s - m)})`), b = Rm().x((e) => e.y).y((e) => e.x);
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
var cB = "d3", lB = class {
	renderBarChart(e, t, n) {
		let r = Iv(e, t);
		return n?.(), {
			chart: r.chart,
			destroy: r.destroy,
			resize: r.resize,
			vendorId: "billboard.js"
		};
	}
	renderPlotBarChart(e, t, n) {
		let r = pz(e, t);
		return n?.(), {
			resize: r.resize,
			get svg() {
				return r.svg;
			},
			vendorId: "observable-plot"
		};
	}
	renderErdDiagram(e, t, n, r) {
		let i = bS(e, t, n);
		return r?.(), {
			resize: i.resize,
			get svg() {
				return i.svg;
			},
			vendorId: cB
		};
	}
	renderNetworkDiagram(e, t, n, r) {
		let i = mC(e, t, n);
		return r?.(), {
			destroy: i.destroy,
			resize: i.resize,
			get svg() {
				return i.svg;
			},
			triggerAutoLayout: i.triggerAutoLayout,
			vendorId: cB
		};
	}
	renderSankeyDiagram(e, t, n, r) {
		let i = eB(e, t, n);
		return r?.(), {
			resize: i.resize,
			get svg() {
				return i.svg;
			},
			vendorId: cB
		};
	}
	renderTreeDiagram(e, t, n, r) {
		let i = sB(e, t, n);
		return r?.(), {
			resize: i.resize,
			get svg() {
				return i.svg;
			},
			vendorId: cB
		};
	}
};
//#endregion
export { lB as D3Tool };

//# sourceMappingURL=dpuse-tool-d3.es.js.map