import { S as e, _ as t, a as n, b as r, c as i, d as a, f as o, g as s, h as c, i as l, l as u, m as d, p as f, r as p, s as m, t as h, u as g, v as _, x as v, y } from "./bump-S1d-3Q8P.js";
//#region node_modules/billboard.js/dist-esm/config/const.js
var b = {
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
}, x = {
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
}, S = {
	Area: [
		b.AREA,
		b.AREA_SPLINE,
		b.AREA_SPLINE_RANGE,
		b.AREA_LINE_RANGE,
		b.AREA_STEP,
		b.AREA_STEP_RANGE
	],
	AreaRange: [
		b.AREA_SPLINE_RANGE,
		b.AREA_LINE_RANGE,
		b.AREA_STEP_RANGE
	],
	Arc: [
		b.PIE,
		b.DONUT,
		b.GAUGE,
		b.POLAR,
		b.RADAR
	],
	Line: [
		b.LINE,
		b.SPLINE,
		b.AREA,
		b.AREA_SPLINE,
		b.AREA_SPLINE_RANGE,
		b.AREA_LINE_RANGE,
		b.STEP,
		b.AREA_STEP,
		b.AREA_STEP_RANGE
	],
	Step: [
		b.STEP,
		b.AREA_STEP,
		b.AREA_STEP_RANGE
	],
	Spline: [
		b.SPLINE,
		b.AREA_SPLINE,
		b.AREA_SPLINE_RANGE
	]
};
//#endregion
//#region node_modules/billboard.js/dist-esm/module/browser.js
function C() {
	return typeof globalThis == "object" && globalThis !== null && globalThis.Object === Object && globalThis || typeof self == "object" && self !== null && self.Object === Object && self || Function("return this")();
}
function w(e) {
	let t = typeof e?.requestAnimationFrame == "function" && typeof e?.cancelAnimationFrame == "function", n = typeof e?.requestIdleCallback == "function" && typeof e?.cancelIdleCallback == "function", r = (e) => setTimeout(e, 1), i = (e) => clearTimeout(e);
	return [
		t ? e.requestAnimationFrame : r,
		t ? e.cancelAnimationFrame : i,
		n ? e.requestIdleCallback : r,
		n ? e.cancelIdleCallback : i
	];
}
var T = C(), E = T?.document, [D, O, k, A] = w(T), j = (e) => e || e === 0, M = (e) => typeof e == "function", N = (e) => typeof e == "string", P = (e) => typeof e == "number", ee = (e) => e === void 0, F = (e) => e !== void 0, te = (e) => typeof e == "boolean", ne = (e) => Math.ceil(e / 10) * 10, re = (e) => Math.ceil(e) + .5, ie = (e) => e[1] - e[0], ae = (e) => typeof e == "object", oe = (e) => {
	for (let t in e) return !1;
	return !0;
}, se = (e) => ee(e) || e === null || N(e) && e.length === 0 || ae(e) && !(e instanceof Date) && oe(e) || P(e) && isNaN(e), I = (e) => !se(e), L = (e) => Array.isArray(e), R = (e) => e && !e?.nodeType && ae(e) && !L(e), ce = /* @__PURE__ */ new Set(/* @__PURE__ */ "span.div.p.br.b.i.em.small.strong.mark.u.s.sub.sup.h1.h2.h3.h4.h5.h6.ul.ol.li.dl.dt.dd.table.thead.tbody.tfoot.tr.th.td.caption.colgroup.col.hr.pre.code.blockquote.abbr.ins.del.a.img.figure.figcaption.svg.g.path.circle.ellipse.rect.line.polyline.polygon.text.tspan.textPath.use.defs.symbol.clipPath.mask.linearGradient.radialGradient.stop.pattern.marker.title.desc".split(".")), le = /* @__PURE__ */ new Set(/* @__PURE__ */ "class.id.style.title.lang.dir.href.src.alt.width.height.colspan.rowspan.scope.headers.d.points.x.y.x1.x2.y1.y2.cx.cy.r.rx.ry.dx.dy.viewBox.preserveAspectRatio.transform.fill.fill-opacity.fill-rule.stroke.stroke-width.stroke-opacity.stroke-linecap.stroke-linejoin.stroke-dasharray.stroke-dashoffset.opacity.clip-path.clip-rule.mask.font-family.font-size.font-weight.font-style.text-anchor.dominant-baseline.offset.stop-color.stop-opacity.gradientUnits.gradientTransform.spreadMethod.patternUnits.patternTransform.marker-start.marker-mid.marker-end.markerWidth.markerHeight.refX.refY.xlink:href".split(".")), ue = /* @__PURE__ */ new Map();
ce.forEach((e) => ue.set(e.toLowerCase(), e));
var de = /* @__PURE__ */ new Map();
le.forEach((e) => de.set(e.toLowerCase(), e));
var fe = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:"
]), pe = /* @__PURE__ */ new Set([
	"href",
	"src",
	"xlink:href"
]), me = /^<\/?([a-zA-Z][a-zA-Z0-9]*)/, he = /^<\/([a-zA-Z][a-zA-Z0-9]*)\s*>$/, ge = /^<([a-zA-Z][a-zA-Z0-9]*)([\s\S]*?)(\/?)>$/, _e = /([a-zA-Z][\w:-]*)\s*(?:=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g, ve = /url\s*\(\s*["']?([^"')]+)["']?\s*\)/gi, ye = [
	"expression(",
	"behavior:",
	"binding:",
	"@import",
	"@charset",
	"-moz-binding:"
];
function be(e) {
	return e.replace(/&colon;/gi, ":").replace(/&newline;/gi, "\n").replace(/&tab;/gi, "	").replace(/&nbsp;/gi, " ").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&").replace(/&quot;/gi, "\"").replace(/&apos;/gi, "'").replace(/&#(\d+);?/gi, (e, t) => String.fromCharCode(parseInt(t, 10))).replace(/&#x([0-9a-f]+);?/gi, (e, t) => String.fromCharCode(parseInt(t, 16)));
}
function xe(e) {
	let t = be(e).trim().replace(/[\s\u0000-\u001f]/g, "").toLowerCase();
	if (!t || t.startsWith("#")) return !0;
	let n = t.match(/^[^/?#]*:/);
	return !n || fe.has(n[0]);
}
function Se(e) {
	let t = be(e).replace(/[\u0000-\u001f]/g, "");
	ve.lastIndex = 0;
	let n;
	for (; (n = ve.exec(t)) !== null;) if (!xe(n[1])) return null;
	let r = t.toLowerCase().replace(/\s/g, "");
	for (let e of ye) if (r.includes(e)) return null;
	return e;
}
var Ce = {
	"\"": "&quot;",
	"'": "&#39;",
	"`": "&#96;"
}, we = /["'`]/g;
function Te(e) {
	return e.replace(we, (e) => Ce[e]);
}
function Ee(e, t, n = !1) {
	if (pe.has(e)) return xe(t) ? n ? Te(t) : t : null;
	if (e === "style") {
		let e = Se(t);
		return e === null ? null : n ? Te(e) : e;
	}
	let r = be(t).toLowerCase().replace(/\s/g, "");
	return /\bon\w+=/.test(r) ? null : n ? Te(t) : t;
}
function De(e) {
	let t = e.match(me);
	return t ? t[1].toLowerCase() : null;
}
function Oe(e) {
	let t = De(e);
	return t !== null && ue.has(t);
}
function ke(e) {
	let t = e.match(he);
	if (t) {
		let e = t[1].toLowerCase();
		return `</${ue.get(e) ?? e}>`;
	}
	let n = e.match(ge);
	if (!n) return "";
	let [, r, i, a] = n, o = r.toLowerCase(), s = ue.get(o) ?? o, c = [];
	_e.lastIndex = 0;
	let l;
	for (; (l = _e.exec(i)) !== null;) {
		let e = l[1].toLowerCase(), t = l[2], n = l[3], r = l[4];
		if (e.startsWith("on")) continue;
		let i = de.get(e) ?? e, a, o;
		if (t !== void 0) a = t, o = "\"";
		else if (n !== void 0) a = n, o = "'";
		else if (r !== void 0) a = r, o = "\"";
		else {
			de.has(e) && c.push(i);
			continue;
		}
		if (de.has(e)) {
			let t = Ee(e, a, r !== void 0);
			t !== null && c.push(`${i}=${o}${t}${o}`);
		}
	}
	return `<${s}${c.length > 0 ? ` ${c.join(" ")}` : ""}${a ? "/>" : ">"}`;
}
function Ae(e) {
	return typeof e != "string" || !e || e.indexOf("<") === -1 ? e : e.replace(/<\/?[^>]*>|[^<>\s]+>/g, (e) => e.startsWith("<!--") ? "" : e.startsWith("<") ? Oe(e) ? ke(e) : e.replace(/</g, "&lt;") : e.slice(0, -1) + "&gt;");
}
//#endregion
//#region node_modules/billboard.js/dist-esm/module/util/object.js
function je(e, t) {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		r !== null && F(r) && t(r, n);
	}
}
function Me(e, t, n) {
	return F(e[t]) ? e[t] : n;
}
function Ne(e, t) {
	for (let n in e) if (e[n] === t) return !0;
	return !1;
}
function z(e, t, ...n) {
	let r = M(e);
	return r && e.call(t, ...n), r;
}
function Pe(e, t) {
	let n = 0, r = function(...e) {
		!--n && t.apply(this, e);
	};
	"duration" in e ? e.each(() => ++n).on("end", r) : (++n, e.call(r));
}
var Fe = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function Ie(e, t = "-") {
	return e.split(t).map((e, t) => t ? e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() : e.toLowerCase()).join("");
}
var Le = (e) => [].slice.call(e);
function Re(...e) {
	let t = (e) => {
		if (L(e)) return e.map(t);
		if (R(e) && e.constructor) {
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
function ze(e = {}, t) {
	L(t) && t.forEach((t) => ze(e, t));
	for (let n in t) /^\d+$/.test(n) || n in e || (e[n] = t[n]);
	return e;
}
function Be(e) {
	let t = e[0] instanceof Date, n = Array.from(new Set(t ? e.map(Number) : e));
	return t ? n.map((e) => new Date(e)) : n;
}
function Ve(e) {
	return e && e.length ? e.reduce((e, t) => e.concat(t)) : [];
}
function He(e, ...t) {
	if (!t.length || t.length === 1 && !t[0]) return e;
	let n = t.shift();
	return R(e) && R(n) && Object.keys(n).forEach((t) => {
		if (!/^(__proto__|constructor|prototype)$/i.test(t)) {
			let r = n[t];
			r instanceof Date ? e[t] = new Date(r.getTime()) : R(r) ? (!e[t] && (e[t] = {}), e[t] = He(e[t], r)) : e[t] = L(r) ? r.concat() : r;
		}
	}), He(e, ...t);
}
function Ue(e, t = !0) {
	let n;
	return e[0] instanceof Date ? n = t ? (e, t) => e - t : (e, t) => t - e : t && !e.every(isNaN) ? n = (e, t) => e - t : t || (n = (e, t) => e > t && -1 || e < t && 1 || e === t && 0), e.concat().sort(n);
}
function We(e, t) {
	let n = t.filter((e) => I(e));
	if (n.length) if (P(n[0])) {
		let t = e === "min" ? Infinity : -Infinity;
		for (let r of n) (e === "min" ? r < t : r > t) && (t = r);
		n = t;
	} else n[0] instanceof Date && (n = Ue(n, e === "min")[0]);
	else n = void 0;
	return n;
}
var Ge = 0;
function Ke(e = !0) {
	let t = ++Ge;
	return e ? String(t) : t;
}
function qe(e, t, n, r, i) {
	if (n > r) return -1;
	let a = Math.floor((n + r) / 2), { x: o, w: s = 0 } = e[a];
	return i && (o = e[a].y, s = e[a].h), t >= o && t <= o + s ? a : t < o ? qe(e, t, n, a - 1, i) : qe(e, t, a + 1, r, i);
}
function Je(e, t) {
	return Ae(e.replace(/\{=([^}]+)\}/g, (e, n) => t[n] ?? ""));
}
function Ye(e) {
	let t;
	if (e instanceof Date) t = e;
	else if (N(e)) {
		let { config: n, format: r } = this;
		t = r.dataTime(n.data_xFormat)(e) ?? new Date(e);
	} else P(e) && !isNaN(e) && (t = /* @__PURE__ */ new Date(+e));
	return (!t || isNaN(+t)) && console && console.error && console.error(`Failed to parse x '${e}' to Date object`), t;
}
function Xe(e) {
	if (R(e) && !N(e)) {
		let t = e;
		return {
			top: t.top || 0,
			right: t.right || 0,
			bottom: t.bottom || 0,
			left: t.left || 0
		};
	}
	let [t, n = t, r = t, i = n] = (N(e) ? e.trim().split(/\s+/) : [e]).map((e) => +e || 0);
	return {
		top: t,
		right: n,
		bottom: r,
		left: i
	};
}
function Ze(e, t) {
	t() === !1 ? D(() => Ze(e, t)) : e();
}
function Qe(e, t = ((e) => e)) {
	let n = /* @__PURE__ */ new Set();
	return je(e, (e, r) => {
		n.add(t(e, r));
	}), n;
}
function $e(e, t, n = ((e) => e)) {
	let r = /* @__PURE__ */ new Map();
	return je(e, (e, i) => {
		r.set(t(e, i), n(e, i));
	}), r;
}
//#endregion
//#region node_modules/billboard.js/dist-esm/module/error.js
var et = "https://github.com/naver/billboard.js/blob/master/MODULE_IMPORTS.md";
function tt(e) {
	let t = e, { config: n } = t, r = "";
	if (se(n.data_type || n.data_types) && !t[x.LINE]) r = "line";
	else for (let e in x) {
		let n = b[e];
		if (t.hasType(n) && !t[x[e]]) {
			r = n;
			break;
		}
	}
	r && nt(`Please, make sure if %c${Ie(r)}`, "module has been imported and specified correctly.", et);
}
function nt(e, t, n) {
	let r = "[billboard.js]";
	if (T.console?.error) {
		let i = ["background:red;color:white;display:block;font-size:15px", t];
		console.error(`❌ ${r} ${e}`, "background:red;color:white;display:block;font-size:15px", ...i), console.info("%cℹ️", "font-size:15px", n);
	}
	throw Error(`${r} ${e.replace(/\%c([a-z-]+)/i, "'$1' ")} ${t}`);
}
//#endregion
//#region node_modules/d3-selection/src/sourceEvent.js
function rt(e) {
	let t;
	for (; t = e.sourceEvent;) e = t;
	return e;
}
//#endregion
//#region node_modules/d3-selection/src/pointer.js
function at(e, t) {
	if (e = rt(e), t === void 0 && (t = e.currentTarget), t) {
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
function ot(e) {
	return typeof e == "string" ? new o([document.querySelectorAll(e)], [document.documentElement]) : new o([_(e)], f);
}
//#endregion
//#region node_modules/d3-time/src/interval.js
var st = /* @__PURE__ */ new Date(), ct = /* @__PURE__ */ new Date();
function lt(e, t, n, r) {
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
	}, i.filter = (n) => lt((t) => {
		if (t >= t) for (; e(t), !n(t);) t.setTime(t - 1);
	}, (e, r) => {
		if (e >= e) if (r < 0) for (; ++r <= 0;) for (; t(e, -1), !n(e););
		else for (; --r >= 0;) for (; t(e, 1), !n(e););
	}), n && (i.count = (t, r) => (st.setTime(+t), ct.setTime(+r), e(st), e(ct), Math.floor(n(st, ct))), i.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? i.filter(r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0) : i)), i;
}
//#endregion
//#region node_modules/d3-time/src/millisecond.js
var ut = lt(() => {}, (e, t) => {
	e.setTime(+e + t);
}, (e, t) => t - e);
ut.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? lt((t) => {
	t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
	t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : ut), ut.range;
//#endregion
//#region node_modules/d3-time/src/duration.js
var dt = 1e3, ft = dt * 60, pt = ft * 60, mt = pt * 24, ht = mt * 7, gt = mt * 30, _t = mt * 365, vt = lt((e) => {
	e.setTime(e - e.getMilliseconds());
}, (e, t) => {
	e.setTime(+e + t * dt);
}, (e, t) => (t - e) / dt, (e) => e.getUTCSeconds());
vt.range;
//#endregion
//#region node_modules/d3-time/src/minute.js
var yt = lt((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * dt);
}, (e, t) => {
	e.setTime(+e + t * ft);
}, (e, t) => (t - e) / ft, (e) => e.getMinutes());
yt.range;
var bt = lt((e) => {
	e.setUTCSeconds(0, 0);
}, (e, t) => {
	e.setTime(+e + t * ft);
}, (e, t) => (t - e) / ft, (e) => e.getUTCMinutes());
bt.range;
//#endregion
//#region node_modules/d3-time/src/hour.js
var xt = lt((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * dt - e.getMinutes() * ft);
}, (e, t) => {
	e.setTime(+e + t * pt);
}, (e, t) => (t - e) / pt, (e) => e.getHours());
xt.range;
var St = lt((e) => {
	e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
	e.setTime(+e + t * pt);
}, (e, t) => (t - e) / pt, (e) => e.getUTCHours());
St.range;
//#endregion
//#region node_modules/d3-time/src/day.js
var Ct = lt((e) => e.setHours(0, 0, 0, 0), (e, t) => e.setDate(e.getDate() + t), (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ft) / mt, (e) => e.getDate() - 1);
Ct.range;
var wt = lt((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / mt, (e) => e.getUTCDate() - 1);
wt.range;
var Tt = lt((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / mt, (e) => Math.floor(e / mt));
Tt.range;
//#endregion
//#region node_modules/d3-time/src/week.js
function Et(e) {
	return lt((t) => {
		t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setDate(e.getDate() + t * 7);
	}, (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ft) / ht);
}
var Dt = Et(0), Ot = Et(1), kt = Et(2), At = Et(3), jt = Et(4), Mt = Et(5), Nt = Et(6);
Dt.range, Ot.range, kt.range, At.range, jt.range, Mt.range, Nt.range;
function Pt(e) {
	return lt((t) => {
		t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setUTCDate(e.getUTCDate() + t * 7);
	}, (e, t) => (t - e) / ht);
}
var Ft = Pt(0), It = Pt(1), Lt = Pt(2), Rt = Pt(3), zt = Pt(4), Bt = Pt(5), Vt = Pt(6);
Ft.range, It.range, Lt.range, Rt.range, zt.range, Bt.range, Vt.range;
//#endregion
//#region node_modules/d3-time/src/month.js
var Ht = lt((e) => {
	e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Ht.range;
var Ut = lt((e) => {
	e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Ut.range;
//#endregion
//#region node_modules/d3-time/src/year.js
var Wt = lt((e) => {
	e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Wt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : lt((t) => {
	t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
	t.setFullYear(t.getFullYear() + n * e);
}), Wt.range;
var Gt = lt((e) => {
	e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Gt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : lt((t) => {
	t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
	t.setUTCFullYear(t.getUTCFullYear() + n * e);
}), Gt.range;
//#endregion
//#region node_modules/d3-array/src/ascending.js
function Kt(e, t) {
	return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-array/src/descending.js
function qt(e, t) {
	return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-array/src/bisector.js
function Jt(e) {
	let t, n, r;
	e.length === 2 ? (t = e === Kt || e === qt ? e : Yt, n = e, r = e) : (t = Kt, n = (t, n) => Kt(e(t), n), r = (t, n) => e(t) - n);
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
function Yt() {
	return 0;
}
//#endregion
//#region node_modules/d3-array/src/number.js
function Xt(e) {
	return e === null ? NaN : +e;
}
function* Zt(e, t) {
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
	else {
		let n = -1;
		for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
	}
}
//#endregion
//#region node_modules/d3-array/src/bisect.js
var Qt = Jt(Kt), $t = Qt.right;
Qt.left, Jt(Xt).center;
//#endregion
//#region node_modules/d3-array/src/cross.js
function en(e) {
	return e.length | 0;
}
function tn(e) {
	return !(e > 0);
}
function nn(e) {
	return typeof e != "object" || "length" in e ? e : Array.from(e);
}
function rn(e) {
	return (t) => e(...t);
}
function an(...e) {
	let t = typeof e[e.length - 1] == "function" && rn(e.pop());
	e = e.map(nn);
	let n = e.map(en), r = e.length - 1, i = Array(r + 1).fill(0), a = [];
	if (r < 0 || n.some(tn)) return a;
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
//#region node_modules/d3-array/src/cumsum.js
function on(e, t) {
	var n = 0, r = 0;
	return Float64Array.from(e, t === void 0 ? (e) => n += +e || 0 : (i) => n += +t(i, r++, e) || 0);
}
//#endregion
//#region node_modules/d3-array/src/variance.js
function sn(e, t) {
	let n = 0, r, i = 0, a = 0;
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (r = t - i, i += r / ++n, a += r * (t - i));
	else {
		let o = -1;
		for (let s of e) (s = t(s, ++o, e)) != null && (s = +s) >= s && (r = s - i, i += r / ++n, a += r * (s - i));
	}
	if (n > 1) return a / (n - 1);
}
//#endregion
//#region node_modules/d3-array/src/deviation.js
function cn(e, t) {
	let n = sn(e, t);
	return n && Math.sqrt(n);
}
//#endregion
//#region node_modules/d3-array/src/extent.js
function ln(e, t) {
	let n, r;
	if (t === void 0) for (let t of e) t != null && (n === void 0 ? t >= t && (n = r = t) : (n > t && (n = t), r < t && (r = t)));
	else {
		let i = -1;
		for (let a of e) (a = t(a, ++i, e)) != null && (n === void 0 ? a >= a && (n = r = a) : (n > a && (n = a), r < a && (r = a)));
	}
	return [n, r];
}
//#endregion
//#region node_modules/d3-array/src/fsum.js
var un = class {
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
}, dn = class extends Map {
	constructor(e, t = gn) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: t }
		}), e != null) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		return super.get(pn(this, e));
	}
	has(e) {
		return super.has(pn(this, e));
	}
	set(e, t) {
		return super.set(mn(this, e), t);
	}
	delete(e) {
		return super.delete(hn(this, e));
	}
}, fn = class extends Set {
	constructor(e, t = gn) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: t }
		}), e != null) for (let t of e) this.add(t);
	}
	has(e) {
		return super.has(pn(this, e));
	}
	add(e) {
		return super.add(mn(this, e));
	}
	delete(e) {
		return super.delete(hn(this, e));
	}
};
function pn({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : n;
}
function mn({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function hn({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) && (n = e.get(n), e.delete(r)), n;
}
function gn(e) {
	return typeof e == "object" && e ? e.valueOf() : e;
}
//#endregion
//#region node_modules/d3-array/src/identity.js
function _n(e) {
	return e;
}
//#endregion
//#region node_modules/d3-array/src/group.js
function vn(e, ...t) {
	return xn(e, _n, _n, t);
}
function yn(e, t, ...n) {
	return xn(e, _n, t, n);
}
function bn(e, t, ...n) {
	return xn(e, Array.from, t, n);
}
function xn(e, t, n, r) {
	return (function e(i, a) {
		if (a >= r.length) return n(i);
		let o = new dn(), s = r[a++], c = -1;
		for (let e of i) {
			let t = s(e, ++c, i), n = o.get(t);
			n ? n.push(e) : o.set(t, [e]);
		}
		for (let [t, n] of o) o.set(t, e(n, a));
		return t(o);
	})(e, 0);
}
//#endregion
//#region node_modules/d3-array/src/permute.js
function Sn(e, t) {
	return Array.from(t, (t) => e[t]);
}
//#endregion
//#region node_modules/d3-array/src/sort.js
function Cn(e, ...t) {
	if (typeof e[Symbol.iterator] != "function") throw TypeError("values is not iterable");
	e = Array.from(e);
	let [n] = t;
	if (n && n.length !== 2 || t.length > 1) {
		let r = Uint32Array.from(e, (e, t) => t);
		return t.length > 1 ? (t = t.map((t) => e.map(t)), r.sort((e, n) => {
			for (let r of t) {
				let t = Tn(r[e], r[n]);
				if (t) return t;
			}
		})) : (n = e.map(n), r.sort((e, t) => Tn(n[e], n[t]))), Sn(e, r);
	}
	return e.sort(wn(n));
}
function wn(e = Kt) {
	if (e === Kt) return Tn;
	if (typeof e != "function") throw TypeError("compare is not a function");
	return (t, n) => {
		let r = e(t, n);
		return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
	};
}
function Tn(e, t) {
	return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : +(e > t));
}
//#endregion
//#region node_modules/d3-array/src/groupSort.js
function En(e, t, n) {
	return (t.length === 2 ? Cn(vn(e, n), (([e, n], [r, i]) => t(n, i) || Kt(e, r))) : Cn(yn(e, t, n), (([e, t], [n, r]) => Kt(t, r) || Kt(e, n)))).map(([e]) => e);
}
//#endregion
//#region node_modules/d3-array/src/ticks.js
var Dn = Math.sqrt(50), On = Math.sqrt(10), kn = Math.sqrt(2);
function An(e, t, n) {
	let r = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / 10 ** i, o = a >= Dn ? 10 : a >= On ? 5 : a >= kn ? 2 : 1, s, c, l;
	return i < 0 ? (l = 10 ** -i / o, s = Math.round(e * l), c = Math.round(t * l), s / l < e && ++s, c / l > t && --c, l = -l) : (l = 10 ** i * o, s = Math.round(e / l), c = Math.round(t / l), s * l < e && ++s, c * l > t && --c), c < s && .5 <= n && n < 2 ? An(e, t, n * 2) : [
		s,
		c,
		l
	];
}
function jn(e, t, n) {
	if (t = +t, e = +e, n = +n, !(n > 0)) return [];
	if (e === t) return [e];
	let r = t < e, [i, a, o] = r ? An(t, e, n) : An(e, t, n);
	if (!(a >= i)) return [];
	let s = a - i + 1, c = Array(s);
	if (r) if (o < 0) for (let e = 0; e < s; ++e) c[e] = (a - e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (a - e) * o;
	else if (o < 0) for (let e = 0; e < s; ++e) c[e] = (i + e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (i + e) * o;
	return c;
}
function Mn(e, t, n) {
	return t = +t, e = +e, n = +n, An(e, t, n)[2];
}
function Nn(e, t, n) {
	t = +t, e = +e, n = +n;
	let r = t < e, i = r ? Mn(t, e, n) : Mn(e, t, n);
	return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
//#endregion
//#region node_modules/d3-array/src/max.js
function Pn(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n < t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n < i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/d3-array/src/maxIndex.js
function Fn(e, t) {
	let n, r = -1, i = -1;
	if (t === void 0) for (let t of e) ++i, t != null && (n < t || n === void 0 && t >= t) && (n = t, r = i);
	else for (let a of e) (a = t(a, ++i, e)) != null && (n < a || n === void 0 && a >= a) && (n = a, r = i);
	return r;
}
//#endregion
//#region node_modules/d3-array/src/min.js
function In(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n > t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n > i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/d3-array/src/minIndex.js
function Ln(e, t) {
	let n, r = -1, i = -1;
	if (t === void 0) for (let t of e) ++i, t != null && (n > t || n === void 0 && t >= t) && (n = t, r = i);
	else for (let a of e) (a = t(a, ++i, e)) != null && (n > a || n === void 0 && a >= a) && (n = a, r = i);
	return r;
}
//#endregion
//#region node_modules/d3-array/src/quickselect.js
function Rn(e, t, n = 0, r = Infinity, i) {
	if (t = Math.floor(t), n = Math.floor(Math.max(0, n)), r = Math.floor(Math.min(e.length - 1, r)), !(n <= t && t <= r)) return e;
	for (i = i === void 0 ? Tn : wn(i); r > n;) {
		if (r - n > 600) {
			let a = r - n + 1, o = t - n + 1, s = Math.log(a), c = .5 * Math.exp(2 * s / 3), l = .5 * Math.sqrt(s * c * (a - c) / a) * (o - a / 2 < 0 ? -1 : 1), u = Math.max(n, Math.floor(t - o * c / a + l)), d = Math.min(r, Math.floor(t + (a - o) * c / a + l));
			Rn(e, t, u, d, i);
		}
		let a = e[t], o = n, s = r;
		for (zn(e, n, t), i(e[r], a) > 0 && zn(e, n, r); o < s;) {
			for (zn(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
			for (; i(e[s], a) > 0;) --s;
		}
		i(e[n], a) === 0 ? zn(e, n, s) : (++s, zn(e, s, r)), s <= t && (n = s + 1), t <= s && (r = s - 1);
	}
	return e;
}
function zn(e, t, n) {
	let r = e[t];
	e[t] = e[n], e[n] = r;
}
//#endregion
//#region node_modules/d3-array/src/greatest.js
function Bn(e, t = Kt) {
	let n, r = !1;
	if (t.length === 1) {
		let i;
		for (let a of e) {
			let e = t(a);
			(r ? Kt(e, i) > 0 : Kt(e, e) === 0) && (n = a, i = e, r = !0);
		}
	} else for (let i of e) (r ? t(i, n) > 0 : t(i, i) === 0) && (n = i, r = !0);
	return n;
}
//#endregion
//#region node_modules/d3-array/src/quantile.js
function Vn(e, t, n) {
	if (e = Float64Array.from(Zt(e, n)), !(!(r = e.length) || isNaN(t = +t))) {
		if (t <= 0 || r < 2) return In(e);
		if (t >= 1) return Pn(e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = Pn(Rn(e, a).subarray(0, a + 1));
		return o + (In(e.subarray(a + 1)) - o) * (i - a);
	}
}
function Hn(e, t, n = Xt) {
	if (!(!(r = e.length) || isNaN(t = +t))) {
		if (t <= 0 || r < 2) return +n(e[0], 0, e);
		if (t >= 1) return +n(e[r - 1], r - 1, e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = +n(e[a], a, e);
		return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
	}
}
//#endregion
//#region node_modules/d3-array/src/mean.js
function Un(e, t) {
	let n = 0, r = 0;
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (++n, r += t);
	else {
		let i = -1;
		for (let a of e) (a = t(a, ++i, e)) != null && (a = +a) >= a && (++n, r += a);
	}
	if (n) return r / n;
}
//#endregion
//#region node_modules/d3-array/src/median.js
function Wn(e, t) {
	return Vn(e, .5, t);
}
//#endregion
//#region node_modules/d3-array/src/merge.js
function* Gn(e) {
	for (let t of e) yield* t;
}
function Kn(e) {
	return Array.from(Gn(e));
}
//#endregion
//#region node_modules/d3-array/src/mode.js
function qn(e, t) {
	let n = new dn();
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
//#region node_modules/d3-array/src/pairs.js
function Jn(e, t = Yn) {
	let n = [], r, i = !1;
	for (let a of e) i && n.push(t(r, a)), r = a, i = !0;
	return n;
}
function Yn(e, t) {
	return [e, t];
}
//#endregion
//#region node_modules/d3-array/src/range.js
function Xn(e, t, n) {
	e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
	for (var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = Array(i); ++r < i;) a[r] = e + r * n;
	return a;
}
//#endregion
//#region node_modules/d3-array/src/sum.js
function Zn(e, t) {
	let n = 0;
	if (t === void 0) for (let t of e) (t = +t) && (n += t);
	else {
		let r = -1;
		for (let i of e) (i = +t(i, ++r, e)) && (n += i);
	}
	return n;
}
//#endregion
//#region node_modules/d3-array/src/reverse.js
function Qn(e) {
	if (typeof e[Symbol.iterator] != "function") throw TypeError("values is not iterable");
	return Array.from(e).reverse();
}
//#endregion
//#region node_modules/d3-time/src/ticks.js
function $n(e, t, n, r, i, a) {
	let o = [
		[
			vt,
			1,
			dt
		],
		[
			vt,
			5,
			5 * dt
		],
		[
			vt,
			15,
			15 * dt
		],
		[
			vt,
			30,
			30 * dt
		],
		[
			a,
			1,
			ft
		],
		[
			a,
			5,
			5 * ft
		],
		[
			a,
			15,
			15 * ft
		],
		[
			a,
			30,
			30 * ft
		],
		[
			i,
			1,
			pt
		],
		[
			i,
			3,
			3 * pt
		],
		[
			i,
			6,
			6 * pt
		],
		[
			i,
			12,
			12 * pt
		],
		[
			r,
			1,
			mt
		],
		[
			r,
			2,
			2 * mt
		],
		[
			n,
			1,
			ht
		],
		[
			t,
			1,
			gt
		],
		[
			t,
			3,
			3 * gt
		],
		[
			e,
			1,
			_t
		]
	];
	function s(e, t, n) {
		let r = t < e;
		r && ([e, t] = [t, e]);
		let i = n && typeof n.range == "function" ? n : c(e, t, n), a = i ? i.range(e, +t + 1) : [];
		return r ? a.reverse() : a;
	}
	function c(t, n, r) {
		let i = Math.abs(n - t) / r, a = Jt(([, , e]) => e).right(o, i);
		if (a === o.length) return e.every(Nn(t / _t, n / _t, r));
		if (a === 0) return ut.every(Math.max(Nn(t, n, r), 1));
		let [s, c] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
		return s.every(c);
	}
	return [s, c];
}
var [er, tr] = $n(Gt, Ut, Ft, Tt, St, bt), [nr, rr] = $n(Wt, Ht, Dt, Ct, xt, yt);
//#endregion
//#region node_modules/d3-time-format/src/locale.js
function ir(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
		return t.setFullYear(e.y), t;
	}
	return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function ar(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
		return t.setUTCFullYear(e.y), t;
	}
	return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function or(e, t, n) {
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
function sr(e) {
	var t = e.dateTime, n = e.date, r = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, l = pr(i), u = mr(i), d = pr(a), f = mr(a), p = pr(o), m = mr(o), h = pr(s), g = mr(s), _ = pr(c), v = mr(c), y = {
		a: N,
		A: P,
		b: ee,
		B: F,
		c: null,
		d: Fr,
		e: Fr,
		f: Br,
		g: Zr,
		G: $r,
		H: Ir,
		I: Lr,
		j: Rr,
		L: zr,
		m: Vr,
		M: Hr,
		p: te,
		q: ne,
		Q: Si,
		s: Ci,
		S: Ur,
		u: Wr,
		U: Gr,
		V: qr,
		w: Jr,
		W: Yr,
		x: null,
		X: null,
		y: Xr,
		Y: Qr,
		Z: ei,
		"%": xi
	}, b = {
		a: re,
		A: ie,
		b: ae,
		B: oe,
		c: null,
		d: ti,
		e: ti,
		f: oi,
		g: _i,
		G: yi,
		H: ni,
		I: ri,
		j: ii,
		L: ai,
		m: si,
		M: ci,
		p: se,
		q: I,
		Q: Si,
		s: Ci,
		S: li,
		u: ui,
		U: di,
		V: pi,
		w: mi,
		W: hi,
		x: null,
		X: null,
		y: gi,
		Y: vi,
		Z: bi,
		"%": xi
	}, x = {
		a: E,
		A: D,
		b: O,
		B: k,
		c: A,
		d: Tr,
		e: Tr,
		f: jr,
		g: xr,
		G: br,
		H: Dr,
		I: Dr,
		j: Er,
		L: Ar,
		m: wr,
		M: Or,
		p: T,
		q: Cr,
		Q: Nr,
		s: Pr,
		S: kr,
		u: gr,
		U: _r,
		V: vr,
		w: hr,
		W: yr,
		x: j,
		X: M,
		y: xr,
		Y: br,
		Z: Sr,
		"%": Mr
	};
	y.x = S(n, y), y.X = S(r, y), y.c = S(t, y), b.x = S(n, b), b.X = S(r, b), b.c = S(t, b);
	function S(e, t) {
		return function(n) {
			var r = [], i = -1, a = 0, o = e.length, s, c, l;
			for (n instanceof Date || (n = /* @__PURE__ */ new Date(+n)); ++i < o;) e.charCodeAt(i) === 37 && (r.push(e.slice(a, i)), (c = cr[s = e.charAt(++i)]) == null ? c = s === "e" ? " " : "0" : s = e.charAt(++i), (l = t[s]) && (s = l(n, c)), r.push(s), a = i + 1);
			return r.push(e.slice(a, i)), r.join("");
		};
	}
	function C(e, t) {
		return function(n) {
			var r = or(1900, void 0, 1), i = w(r, e, n += "", 0), a, o;
			if (i != n.length) return null;
			if ("Q" in r) return new Date(r.Q);
			if ("s" in r) return new Date(r.s * 1e3 + ("L" in r ? r.L : 0));
			if (t && !("Z" in r) && (r.Z = 0), "p" in r && (r.H = r.H % 12 + r.p * 12), r.m === void 0 && (r.m = "q" in r ? r.q : 0), "V" in r) {
				if (r.V < 1 || r.V > 53) return null;
				"w" in r || (r.w = 1), "Z" in r ? (a = ar(or(r.y, 0, 1)), o = a.getUTCDay(), a = o > 4 || o === 0 ? It.ceil(a) : It(a), a = wt.offset(a, (r.V - 1) * 7), r.y = a.getUTCFullYear(), r.m = a.getUTCMonth(), r.d = a.getUTCDate() + (r.w + 6) % 7) : (a = ir(or(r.y, 0, 1)), o = a.getDay(), a = o > 4 || o === 0 ? Ot.ceil(a) : Ot(a), a = Ct.offset(a, (r.V - 1) * 7), r.y = a.getFullYear(), r.m = a.getMonth(), r.d = a.getDate() + (r.w + 6) % 7);
			} else ("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : +("W" in r)), o = "Z" in r ? ar(or(r.y, 0, 1)).getUTCDay() : ir(or(r.y, 0, 1)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + r.W * 7 - (o + 5) % 7 : r.w + r.U * 7 - (o + 6) % 7);
			return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, ar(r)) : ir(r);
		};
	}
	function w(e, t, n, r) {
		for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
			if (r >= o) return -1;
			if (s = t.charCodeAt(i++), s === 37) {
				if (s = t.charAt(i++), c = x[s in cr ? t.charAt(i++) : s], !c || (r = c(e, n, r)) < 0) return -1;
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
	function M(e, t, n) {
		return w(e, r, t, n);
	}
	function N(e) {
		return o[e.getDay()];
	}
	function P(e) {
		return a[e.getDay()];
	}
	function ee(e) {
		return c[e.getMonth()];
	}
	function F(e) {
		return s[e.getMonth()];
	}
	function te(e) {
		return i[+(e.getHours() >= 12)];
	}
	function ne(e) {
		return 1 + ~~(e.getMonth() / 3);
	}
	function re(e) {
		return o[e.getUTCDay()];
	}
	function ie(e) {
		return a[e.getUTCDay()];
	}
	function ae(e) {
		return c[e.getUTCMonth()];
	}
	function oe(e) {
		return s[e.getUTCMonth()];
	}
	function se(e) {
		return i[+(e.getUTCHours() >= 12)];
	}
	function I(e) {
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
var cr = {
	"-": "",
	_: " ",
	0: "0"
}, lr = /^\s*\d+/, ur = /^%/, dr = /[\\^$*+?|[\]().{}]/g;
function B(e, t, n) {
	var r = e < 0 ? "-" : "", i = (r ? -e : e) + "", a = i.length;
	return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function fr(e) {
	return e.replace(dr, "\\$&");
}
function pr(e) {
	return RegExp("^(?:" + e.map(fr).join("|") + ")", "i");
}
function mr(e) {
	return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function hr(e, t, n) {
	var r = lr.exec(t.slice(n, n + 1));
	return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function gr(e, t, n) {
	var r = lr.exec(t.slice(n, n + 1));
	return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function _r(e, t, n) {
	var r = lr.exec(t.slice(n, n + 2));
	return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function vr(e, t, n) {
	var r = lr.exec(t.slice(n, n + 2));
	return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function yr(e, t, n) {
	var r = lr.exec(t.slice(n, n + 2));
	return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function br(e, t, n) {
	var r = lr.exec(t.slice(n, n + 4));
	return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function xr(e, t, n) {
	var r = lr.exec(t.slice(n, n + 2));
	return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Sr(e, t, n) {
	var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
	return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Cr(e, t, n) {
	var r = lr.exec(t.slice(n, n + 1));
	return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function wr(e, t, n) {
	var r = lr.exec(t.slice(n, n + 2));
	return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function Tr(e, t, n) {
	var r = lr.exec(t.slice(n, n + 2));
	return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function Er(e, t, n) {
	var r = lr.exec(t.slice(n, n + 3));
	return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function Dr(e, t, n) {
	var r = lr.exec(t.slice(n, n + 2));
	return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function Or(e, t, n) {
	var r = lr.exec(t.slice(n, n + 2));
	return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function kr(e, t, n) {
	var r = lr.exec(t.slice(n, n + 2));
	return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function Ar(e, t, n) {
	var r = lr.exec(t.slice(n, n + 3));
	return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function jr(e, t, n) {
	var r = lr.exec(t.slice(n, n + 6));
	return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Mr(e, t, n) {
	var r = ur.exec(t.slice(n, n + 1));
	return r ? n + r[0].length : -1;
}
function Nr(e, t, n) {
	var r = lr.exec(t.slice(n));
	return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function Pr(e, t, n) {
	var r = lr.exec(t.slice(n));
	return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function Fr(e, t) {
	return B(e.getDate(), t, 2);
}
function Ir(e, t) {
	return B(e.getHours(), t, 2);
}
function Lr(e, t) {
	return B(e.getHours() % 12 || 12, t, 2);
}
function Rr(e, t) {
	return B(1 + Ct.count(Wt(e), e), t, 3);
}
function zr(e, t) {
	return B(e.getMilliseconds(), t, 3);
}
function Br(e, t) {
	return zr(e, t) + "000";
}
function Vr(e, t) {
	return B(e.getMonth() + 1, t, 2);
}
function Hr(e, t) {
	return B(e.getMinutes(), t, 2);
}
function Ur(e, t) {
	return B(e.getSeconds(), t, 2);
}
function Wr(e) {
	var t = e.getDay();
	return t === 0 ? 7 : t;
}
function Gr(e, t) {
	return B(Dt.count(Wt(e) - 1, e), t, 2);
}
function Kr(e) {
	var t = e.getDay();
	return t >= 4 || t === 0 ? jt(e) : jt.ceil(e);
}
function qr(e, t) {
	return e = Kr(e), B(jt.count(Wt(e), e) + (Wt(e).getDay() === 4), t, 2);
}
function Jr(e) {
	return e.getDay();
}
function Yr(e, t) {
	return B(Ot.count(Wt(e) - 1, e), t, 2);
}
function Xr(e, t) {
	return B(e.getFullYear() % 100, t, 2);
}
function Zr(e, t) {
	return e = Kr(e), B(e.getFullYear() % 100, t, 2);
}
function Qr(e, t) {
	return B(e.getFullYear() % 1e4, t, 4);
}
function $r(e, t) {
	var n = e.getDay();
	return e = n >= 4 || n === 0 ? jt(e) : jt.ceil(e), B(e.getFullYear() % 1e4, t, 4);
}
function ei(e) {
	var t = e.getTimezoneOffset();
	return (t > 0 ? "-" : (t *= -1, "+")) + B(t / 60 | 0, "0", 2) + B(t % 60, "0", 2);
}
function ti(e, t) {
	return B(e.getUTCDate(), t, 2);
}
function ni(e, t) {
	return B(e.getUTCHours(), t, 2);
}
function ri(e, t) {
	return B(e.getUTCHours() % 12 || 12, t, 2);
}
function ii(e, t) {
	return B(1 + wt.count(Gt(e), e), t, 3);
}
function ai(e, t) {
	return B(e.getUTCMilliseconds(), t, 3);
}
function oi(e, t) {
	return ai(e, t) + "000";
}
function si(e, t) {
	return B(e.getUTCMonth() + 1, t, 2);
}
function ci(e, t) {
	return B(e.getUTCMinutes(), t, 2);
}
function li(e, t) {
	return B(e.getUTCSeconds(), t, 2);
}
function ui(e) {
	var t = e.getUTCDay();
	return t === 0 ? 7 : t;
}
function di(e, t) {
	return B(Ft.count(Gt(e) - 1, e), t, 2);
}
function fi(e) {
	var t = e.getUTCDay();
	return t >= 4 || t === 0 ? zt(e) : zt.ceil(e);
}
function pi(e, t) {
	return e = fi(e), B(zt.count(Gt(e), e) + (Gt(e).getUTCDay() === 4), t, 2);
}
function mi(e) {
	return e.getUTCDay();
}
function hi(e, t) {
	return B(It.count(Gt(e) - 1, e), t, 2);
}
function gi(e, t) {
	return B(e.getUTCFullYear() % 100, t, 2);
}
function _i(e, t) {
	return e = fi(e), B(e.getUTCFullYear() % 100, t, 2);
}
function vi(e, t) {
	return B(e.getUTCFullYear() % 1e4, t, 4);
}
function yi(e, t) {
	var n = e.getUTCDay();
	return e = n >= 4 || n === 0 ? zt(e) : zt.ceil(e), B(e.getUTCFullYear() % 1e4, t, 4);
}
function bi() {
	return "+0000";
}
function xi() {
	return "%";
}
function Si(e) {
	return +e;
}
function Ci(e) {
	return Math.floor(e / 1e3);
}
//#endregion
//#region node_modules/d3-time-format/src/defaultLocale.js
var wi, Ti, Ei, Di, Oi;
ki({
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
function ki(e) {
	return wi = sr(e), Ti = wi.format, Ei = wi.parse, Di = wi.utcFormat, Oi = wi.utcParse, wi;
}
//#endregion
//#region node_modules/billboard.js/dist-esm/config/classes.js
var V = {
	button: "bb-button",
	chart: "bb-chart",
	empty: "bb-empty",
	main: "bb-main",
	target: "bb-target",
	EXPANDED: "_expanded_",
	dummy: "_dummy_"
}, Ai = {
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
}, ji = {
	area: "bb-area",
	areas: "bb-areas"
}, Mi = {
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
}, Ni = {
	bar: "bb-bar",
	bars: "bb-bars",
	chartBar: "bb-chart-bar",
	chartBars: "bb-chart-bars",
	barConnectLine: "bb-bar-connectLine"
}, Pi = {
	candlestick: "bb-candlestick",
	candlesticks: "bb-candlesticks",
	chartCandlestick: "bb-chart-candlestick",
	chartCandlesticks: "bb-chart-candlesticks",
	valueDown: "bb-value-down",
	valueUp: "bb-value-up"
}, Fi = {
	chartCircles: "bb-chart-circles",
	circle: "bb-circle",
	circles: "bb-circles"
}, Ii = {
	colorPattern: "bb-color-pattern",
	colorScale: "bb-colorscale"
}, Li = {
	dragarea: "bb-dragarea",
	INCLUDED: "_included_"
}, Ri = {
	funnel: "bb-funnel",
	chartFunnel: "bb-chart-funnel",
	chartFunnels: "bb-chart-funnels",
	funnelBackground: "bb-funnel-background"
}, zi = {
	chartArcsGaugeMax: "bb-chart-arcs-gauge-max",
	chartArcsGaugeMin: "bb-chart-arcs-gauge-min",
	chartArcsGaugeUnit: "bb-chart-arcs-gauge-unit",
	chartArcsGaugeTitle: "bb-chart-arcs-gauge-title",
	gaugeValue: "bb-gauge-value"
}, H = {
	legend: "bb-legend",
	legendBackground: "bb-legend-background",
	legendItem: "bb-legend-item",
	legendItemEvent: "bb-legend-item-event",
	legendItemHidden: "bb-legend-item-hidden",
	legendItemPoint: "bb-legend-item-point",
	legendItemTile: "bb-legend-item-tile"
}, Bi = {
	chartLine: "bb-chart-line",
	chartLines: "bb-chart-lines",
	line: "bb-line",
	lines: "bb-lines"
}, Vi = {
	eventRect: "bb-event-rect",
	eventRects: "bb-event-rects",
	eventRectsMultiple: "bb-event-rects-multiple",
	eventRectsSingle: "bb-event-rects-single"
}, U = {
	focused: "bb-focused",
	defocused: "bb-defocused",
	legendItemFocused: "bb-legend-item-focused",
	xgridFocus: "bb-xgrid-focus",
	ygridFocus: "bb-ygrid-focus"
}, Hi = {
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
}, Ui = {
	level: "bb-level",
	levels: "bb-levels"
}, Wi = {
	chartRadar: "bb-chart-radar",
	chartRadars: "bb-chart-radars"
}, Gi = {
	region: "bb-region",
	regions: "bb-regions"
}, Ki = {
	selectedCircle: "bb-selected-circle",
	selectedCircles: "bb-selected-circles",
	SELECTED: "_selected_"
}, qi = {
	shape: "bb-shape",
	shapes: "bb-shapes"
}, Ji = {
	brush: "bb-brush",
	subchart: "bb-subchart"
}, Yi = {
	chartText: "bb-chart-text",
	chartTexts: "bb-chart-texts",
	text: "bb-text",
	texts: "bb-texts",
	title: "bb-title",
	textBorderRect: "bb-text-border",
	textLabelImage: "bb-text-label-image",
	TextOverlapping: "text-overlapping"
}, Xi = {
	tooltip: "bb-tooltip",
	tooltipContainer: "bb-tooltip-container",
	tooltipName: "bb-tooltip-name"
}, Zi = {
	treemap: "bb-treemap",
	chartTreemap: "bb-chart-treemap",
	chartTreemaps: "bb-chart-treemaps"
}, Qi = {
	buttonZoomReset: "bb-zoom-reset",
	zoomBrush: "bb-zoom-brush"
}, $i = {
	...V,
	...Ai,
	...ji,
	...Mi,
	...Ni,
	...Pi,
	...Fi,
	...Ii,
	...Li,
	...zi,
	...H,
	...Bi,
	...Vi,
	...U,
	...Ri,
	...Hi,
	...Ui,
	...Wi,
	...Gi,
	...Ki,
	...qi,
	...Ji,
	...Yi,
	...Xi,
	...Zi,
	...Qi
}, ea = {
	boost_useCssRule: !1,
	boost_useWorker: !1
}, ta = {
	color_pattern: [],
	color_tiles: void 0,
	color_threshold: {},
	color_onover: void 0
}, na = {
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
}, ra = {
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
}, ia = {
	title_text: void 0,
	title_padding: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	},
	title_position: "center"
}, aa = {
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
}, oa = {
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
}, sa = {
	interaction_enabled: !0,
	interaction_brighten: !0,
	interaction_inputType_mouse: !0,
	interaction_inputType_touch: {},
	interaction_onout: !0
}, ca = class e {
	static data = {};
	static setOptions(e) {
		for (let t = 0; t < e.length; t++) Object.assign(this.data, e[t]);
	}
	constructor() {
		return Re(ra, ea, oa, ta, sa, na, ia, aa, e.data);
	}
}, la = {
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
}, ua = class {
	constructor() {
		Object.keys(la).forEach((e) => {
			this[e] = new la[e]();
		});
	}
	getStore(e) {
		return this[e];
	}
}, W = {
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
}, da = class {
	cache = /* @__PURE__ */ new Map();
	add(e, t, n = !1) {
		let r = n ? this.cloneTarget(t) : t;
		return this.cache.set(e, r), r;
	}
	remove(e) {
		let t = N(e) ? [e] : e;
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
}, fa = /\s?(bb-)/g, pa = /\.+/g;
function ma(e) {
	return e.replace(fa, ".$1").replace(pa, ".");
}
function ha(e, t, n = !1) {
	let r = (t) => t[e ? "getBoundingClientRect" : "getBBox"](), i = e ? "rectClient" : "rectBBox";
	return n ? r(t) : !(i in t) || t.hasAttribute("width") && t[i].width !== +(t.getAttribute("width") || 0) ? t[i] = r(t) : t[i];
}
function ga(e, t, n = [-1, 1], r = !1) {
	if (!(!e || !N(t))) if (t.indexOf("\n") === -1) e.text(t);
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
function _a(e) {
	let { x: t, y: n, width: r, height: i } = ba(e, !0);
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
function va(e, t) {
	let n = e && (e.touches || e.sourceEvent && e.sourceEvent.touches)?.[0], r = [0, 0];
	try {
		r = at(n || e, t);
	} catch {}
	return r.map((e) => isNaN(e) ? 0 : e);
}
function ya(e, t = !1) {
	return ha(!0, e, t);
}
function ba(e, t = !1) {
	return ha(!1, e, t);
}
function xa(e, t, n) {
	let { rootSelector: r = "", sheet: i } = e, a = `${r} ${ma(t)} {${n.join(";")}}`;
	return i[i.insertRule ? "insertRule" : "addRule"](a, i.cssRules.length);
}
function Sa(e) {
	return {
		x: (T.pageXOffset ?? T.scrollX ?? 0) + (e.scrollLeft ?? 0),
		y: (T.pageYOffset ?? T.scrollY ?? 0) + (e.scrollTop ?? 0)
	};
}
function Ca(e, t = 0, n = 0, r = !0) {
	let i = new DOMPoint(t, n), a = e.getScreenCTM(), o = i.matrixTransform(r ? a?.inverse() : a);
	if (r === !1) {
		let t = ya(e);
		o.x -= t.x, o.y -= t.y;
	}
	return o;
}
function wa(e) {
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
function Ta(e, t) {
	let n = e?.getAttribute?.(t);
	if (n) return parseFloat(n);
	let r = wa(e);
	return t === "x" ? r.e : r.f;
}
function Ea(e) {
	let t = e.attr("viewBox");
	return t ? t.trim().split(/[\s,]+/).length === 4 : !1;
}
function Da(e, t, n = !1) {
	let r = !!e.node, i = !1;
	for (let [a, o] of Object.entries(t)) if (i = r ? e.style(a) === o : e.style[a] === o, n ? !i : i) break;
	return i;
}
function Oa() {
	return E?.hidden === !1 || E?.visibilityState === "visible";
}
function ka(e, t) {
	let { DocumentTouch: n, matchMedia: r, navigator: i } = T, a = r?.("(pointer:coarse)").matches, o = !1;
	if (t) if (i && "maxTouchPoints" in i) o = i.maxTouchPoints > 0;
	else if ("ontouchmove" in T || n && E instanceof n) o = !0;
	else if (a) o = !0;
	else {
		let e = i.userAgent;
		o = /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(e) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(e);
	}
	return e && !a && r?.("(pointer:fine)").matches && "mouse" || o && "touch" || "mouse";
}
var Aa = {
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
				let i = E.createEvent("MouseEvent");
				i.initMouseEvent(n, r.bubbles, r.cancelable, T, 0, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), t.dispatchEvent(i);
			};
		}
	})(),
	touch: (e, t, n) => {
		let r = new Touch(He({
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
}, { setTimeout: ja, clearTimeout: Ma } = T;
function Na(e) {
	let t = [], n, r = function() {
		r.clear(), n = e === !1 ? k(() => {
			n = null, t.forEach((e) => e());
		}, { timeout: 200 }) : ja(() => {
			n = null, t.forEach((e) => e());
		}, P(e) ? e : 200);
	};
	return r.clear = () => {
		n &&= ((e === !1 ? A : Ma)(n), null);
	}, r.add = (e) => t.push(e), r.remove = (e) => {
		let n = t.indexOf(e);
		n !== -1 && t.splice(n, 1);
	}, r;
}
function Pa() {
	let e = [], t = function(t, n) {
		function r() {
			let t = 0;
			for (let n = 0, r; r = e[n]; n++) {
				if (r === !0 || r.empty?.()) {
					t++;
					continue;
				}
				if (Oa() === !1) {
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
		Ze(() => {
			n?.();
		}, r);
	};
	return t.add = function(t) {
		L(t) ? e = e.concat(t) : e.push(t);
	}, t;
}
//#endregion
//#region node_modules/billboard.js/dist-esm/module/worker.js
var Fa = {}, Ia = 0;
function La(e, t) {
	let n = e.toString(), r = t?.map(String).join(";") ?? "", i = (n + r).replace(/(function|[\s\W\n])/g, "").substring(0, 30);
	if (!(i in Fa)) try {
		let e = new T.Blob([`${r}

				self.onmessage=function({data}) {
					const result = (${n}).apply(null, data.args);
					self.postMessage({id: data.id, result});
				};`], { type: "text/javascript" });
		Fa[i] = {
			src: T.URL.createObjectURL(e),
			worker: null
		};
	} catch {
		return null;
	}
	return {
		key: i,
		src: Fa[i].src
	};
}
function Ra(e, t) {
	let n = Fa[e];
	if (!n) return null;
	if (!n.worker) {
		try {
			n.worker = new T.Worker(t);
		} catch {
			return null;
		}
		n.worker && (n.worker.onerror = function(e) {
			console.error ? console.error(e) : console.log(e);
		});
	}
	return n.worker;
}
function za(e = !0, t, n, r) {
	let i = function(...e) {
		n(t(...e));
	};
	if (T.Worker && e) {
		let e = La(t, r), a = e && Ra(e.key, e.src);
		a && (i = function(...e) {
			let t = ++Ia, r = function(e) {
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
function Ba() {
	for (let e in Fa) {
		let t = Fa[e];
		t.worker && t.worker.terminate(), t.src && T.URL.revokeObjectURL(t.src), delete Fa[e];
	}
}
//#endregion
//#region node_modules/billboard.js/dist-esm/module/dsv.js
var Va = 34, Ha = 10, Ua = 13;
function Wa(e) {
	let t = e.charCodeAt(0);
	function n(e, n) {
		let r = [], i = e.length, a = 0, o = 0, s = i <= 0, c = !1;
		e.charCodeAt(0) === 65279 && a++, e.charCodeAt(i - 1) === Ha && --i, e.charCodeAt(i - 1) === Ua && --i;
		function l() {
			if (s) return null;
			if (c) return c = !1, null;
			let n = a, r, o;
			if (e.charCodeAt(n) === Va) {
				for (; ++a < i;) if (e.charCodeAt(a) === Va) {
					if (e.charCodeAt(a + 1) !== Va) break;
					a++;
				}
				return (o = a++) >= i ? s = !0 : (r = e.charCodeAt(a++)) === Ha ? c = !0 : r === Ua && (c = !0, e.charCodeAt(a) === Ha && ++a), e.slice(n + 1, o).replace(/""/g, "\"");
			}
			for (; a < i;) {
				if ((r = e.charCodeAt(o = a++)) === Ha) c = !0;
				else if (r === Ua) c = !0, e.charCodeAt(a) === Ha && ++a;
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
var Ga = Wa(","), Ka = Wa("	"), qa = Ga.parse, Ja = Ga.parseRows, Ya = Ka.parse, Xa = Ka.parseRows;
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/data/convert.helper.js
function Za(e) {
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
function Qa(e) {
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
function $a(e, t) {
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
		}), i = Qa(n);
	} else Object.keys(e).forEach(function(t) {
		let r = [].concat(e[t]);
		r.unshift?.(t), n.push(r);
	}), i = Za(n);
	return i;
}
function eo(e, t = "csv", n, r, i) {
	let a = new XMLHttpRequest(), o = {
		csv: no,
		tsv: ro,
		json: $a
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
function to(e, t) {
	let n = e.rows(t), r;
	return n.length === 1 ? (r = [{}], n[0].forEach((e) => {
		r[0][e] = null;
	})) : r = e.parse(t), r;
}
function no(e) {
	return to({
		rows: Ja,
		parse: qa
	}, e);
}
function ro(e) {
	return to({
		rows: Xa,
		parse: Ya
	}, e);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/data/convert.js
function io(e, t) {
	let n = e || t?.data_keys;
	return n?.x && (t.data_x = n.x), n;
}
function ao(e, t, n) {
	let r = this, { config: i } = r, a;
	e.forEach((e) => {
		let o = r.getXKey(e);
		if (n.customX || n.timeSeries ? n.xs.indexOf(o) >= 0 ? a = (n.appendXs && r.data.xs[e] || []).concat(t.map((t, n) => {
			let i = t[o];
			return j(i) ? r.generateTargetX(i, e, n) : !1;
		}).filter((e) => e !== !1)) : i.data_x ? a = this.getOtherTargetXs() : I(i.data_xs) && (a = r.getXValuesOfXKey(o, r.data.targets)) : a = t.map((e, t) => t), a) r.data.xs[e] = a;
		else throw Error(`x is not defined for id = "${e}".`);
	});
}
var oo = {
	convertData(e, t) {
		let { config: n } = this, r = (e) => e?.length && !se(e[0]) ? n.boost_useWorker : !1, i = e;
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
		})), i.url && t) eo(i.url, i.mimeType, i.headers, io(i.keys, n), t);
		else if (i.json) za(r(i.json), $a, t, [Za, Qa])(i.json, io(i.keys, n));
		else if (i.rows) za(r(i.rows), Qa, t)(i.rows);
		else if (i.columns) za(r(i.columns), Za, t)(i.columns);
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
		ao.bind(n)(c, e, u);
		let d = u.customX && u.categorized && i.axis_x_categories.length ? new Map(i.axis_x_categories.map((e, t) => [e, t])) : null, f = i.data_idConverter.bind(n.api), p = c.map((t, r) => {
			let o = f(t), s = n.getXKey(t), c = u.customX && u.categorized, l = c && r === 0 && (() => {
				let t = Qe(i.axis_x_categories);
				return e.every((e) => t.has(e[s]));
			})(), p = e.__append__, m = s === null && p ? n.api.data.values(t).length : 0;
			return {
				id: o,
				id_org: t,
				values: e.map((e, u) => {
					let f = e[s], h = e[t], g;
					if (h = h !== null && !isNaN(h) && !R(h) ? +h : L(h) || R(h) ? h : null, (c || a.hasRadar) && r === 0 && !ee(f)) {
						!l && u === 0 && !p && (i.axis_x_categories = [], d && d.clear());
						let e = String(f);
						g = d?.get(e) ?? -1, g === -1 && (g = i.axis_x_categories.length, i.axis_x_categories.push(f), d?.set(e, g));
					} else g = n.generateTargetX(f, t, m + u);
					return (ee(h) || n.data.xs[t].length <= u) && (g = void 0), {
						x: g,
						value: h,
						id: o,
						index: -1
					};
				}).filter((e) => F(e.x))
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
}, so = {
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
function co(e) {
	return L(e) ? e : [e];
}
var lo = {
	isX(e) {
		let { config: t } = this, n = t.data_x && e === t.data_x, r = I(t.data_xs) && Ne(t.data_xs, e);
		return n || r;
	},
	isStackNormalized() {
		let { config: e } = this;
		return !!((e.data_stack_normalize === !0 || ae(e.data_stack_normalize)) && e.data_groups.length);
	},
	isStackNormalizedPerGroup() {
		let { config: e } = this;
		return !!(ae(e.data_stack_normalize) && e.data_stack_normalize?.perGroup && e.data_groups.length);
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
		return t.data_x ? t.data_x : I(t.data_xs) ? t.data_xs[e] : null;
	},
	getXValuesOfXKey(e, t) {
		let n = this, r = t && I(t) ? n.mapToIds(t) : [], i;
		return r.forEach((t) => {
			n.getXKey(t) === e && (i = n.data.xs[t]);
		}), i;
	},
	getIndexByX(e, t) {
		let n = this;
		return t ? t.indexOf(N(e) ? e : +e) : (n.filterByX(n.data.targets, e)[0] || { index: null }).index;
	},
	getXValue(e, t) {
		let n = this;
		return e in n.data.xs && n.data.xs[e] && j(n.data.xs[e][t]) ? n.data.xs[e][t] : t;
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
		return !this.config.axis_x_forceAsSingle && (I(this.config.data_xs) || this.hasType("bubble") || this.hasType("scatter"));
	},
	addName(e) {
		let { config: t } = this, n;
		return e && (n = t.data_names[e.id], e.name = n === void 0 ? e.id : n), e;
	},
	getAllValuesOnIndex(e, t = !1) {
		let n = this, r = n.filterTargetsToShow(n.data.targets).map((t) => n.addName(n.getValueOnIndex(t.values, e)));
		return t && (r = r.filter((e) => e && "value" in e && j(e.value))), r;
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
		return i?.isTimeSeries() ? a = Ye.bind(r)(e || r.getXValue(t, n)) : i?.isCustomX() && !i?.isCategorized() && (a = j(e) ? +e : r.getXValue(t, n)), a;
	},
	updateXs(e) {
		e.length && (this.axis.xs = e.map((e) => e.x));
	},
	getPrevX(e) {
		let t = this.axis.xs[e - 1];
		return F(t) ? t : null;
	},
	getNextX(e) {
		let t = this.axis.xs[e + 1];
		return F(t) ? t : null;
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
				P(i) && (i < n && (n = i), i > r && (r = i));
			}
		}
		return {
			min: n,
			max: r
		};
	},
	getMinMaxData() {
		let e = this, t = W.dataMinMax, n = e.cache.get(t);
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
		let t = this, { config: n } = t, r = e ? `${W.dataTotalPerIndex}-${e}` : W.dataTotalPerIndex, i = t.cache.get(r);
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
					i[t] || (i[t] = 0), i[t] += P(e.value) ? e.value : 0;
				});
			}), t.cache.add(r, i);
		}
		return i;
	},
	getTotalDataSum(e) {
		let t = this, n = W.dataTotalSum, r = t.cache.get(n);
		return P(r) || (r = t.data.targets.reduce((e, t) => e + t.values.reduce((e, t) => e + (t.value ?? 0), 0), 0), t.cache.add(n, r)), e && (r -= t.getHiddenTotalDataSum()), r;
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
		let e = this, { cache: t, state: n } = e, r = t.get(W.maxDataCountTarget);
		if (r && r.generation === n.dataGeneration) return r.value;
		let i = e.filterTargetsToShow() || [], a = i.length, o = e.config.axis_x_inverted;
		if (a > 1) {
			let e = [];
			for (let t = 0; t < i.length; t++) {
				let n = i[t].values;
				for (let t = 0; t < n.length; t++) e.push(n[t].x);
			}
			i = e, i = Ue(Be(i)).map((e, t, n) => ({
				x: e,
				index: o ? n.length - t - 1 : t
			}));
		} else a && (i = i[0].values.concat());
		return t.add(W.maxDataCountTarget, {
			value: i,
			generation: n.dataGeneration
		}), i;
	},
	mapToIds(e) {
		return e.map((e) => e.id);
	},
	mapToTargetIds(e) {
		let t = this;
		return e ? L(e) ? e.concat() : [e] : t.mapToIds(t.data.targets);
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
			let { cache: e, data: n, state: r } = t, i = W.filteredTargets, a = e.get(i);
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
		return e?.length && (n = Be(Ve(e.map((e) => e.values.map((e) => +e.x)))), n = t?.isTimeSeries() ? n.map((e) => /* @__PURE__ */ new Date(+e)) : n.map(Number)), Ue(n);
	},
	addTargetIds(e, t) {
		let { state: n } = this;
		co(t).forEach((t) => n[e].add(t));
	},
	removeTargetIds(e, t) {
		let { state: n } = this;
		co(t).forEach((t) => n[e].delete(t));
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
			let e = t.cache.get(W.valuesXIndexMap);
			if (e && e.generation === t.state.dataGeneration) a = e.value;
			else {
				let e = t.mapTargetsToUniqueXs(t.data.targets).map((e) => N(e) ? e : +e);
				a = new Map(e.map((e, t) => [e, t])), t.cache.add(W.valuesXIndexMap, {
					value: a,
					generation: t.state.dataGeneration
				});
			}
		}
		return e.forEach((e) => {
			let o = [];
			e.values.filter(({ value: e }) => j(e) || e === null).forEach((e) => {
				let { value: r } = e;
				if (r !== null && t.isCandlestickType(e) && (r = L(r) ? r.slice(0, 4) : [
					r.open,
					r.high,
					r.low,
					r.close
				]), L(r)) o.push(...r);
				else if (R(r) && "high" in r) o.push(...Object.values(r));
				else if (t.isBubbleZType(e)) o.push(n && t.getBubbleZData(r, "y"));
				else if (i && a) {
					let t = N(e.x) ? e.x : +e.x, n = a.get(t);
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
			let t = (e, t) => e + Math.abs(t.value), n = (e) => P(e) ? e : "values" in e ? e.values.reduce(t, 0) : e.value;
			o = (t, r) => {
				let a = n(t), o = n(r);
				return e ? i ? a - o : o - a : i ? o - a : a - o;
			};
		} else M(r) && (o = r.bind(t.api));
		return o || null;
	},
	filterByX(e, t) {
		return this.getValuesByX(e).get(this.getXCacheKey(t)) || [];
	},
	filterNullish(e) {
		let t = (e) => j(e.value);
		return e && e.filter((e) => "value" in e ? t(e) : e.values.some(t));
	},
	filterRemoveNull(e) {
		return e.filter((e) => j(this.getBaseValue(e)));
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
		return te(e) && e || ae(e) && I(e);
	},
	hasNullDataValue(e) {
		return e.some(({ value: e }) => e === null);
	},
	getDataIndexFromEvent(e) {
		let { $el: t, config: n, state: { hasRadar: r, inputType: i, eventReceiver: { coords: o, rect: s } } } = this, c;
		if (r) {
			let t = e.target;
			/tspan/i.test(t.tagName) && (t = t.parentNode);
			let n = a(t).datum();
			c = n && Object.keys(n).length === 1 ? n.index : void 0;
		} else {
			let r = n.axis_rotated, a = Sa(t.chart.node()), l = i === "touch" && e.changedTouches ? e.changedTouches[0] : e, u = r ? l.clientY + a.y : l.clientX + a.x;
			if (Ea(t.svg)) {
				let e = [u, 0];
				r && e.reverse(), u = Ca(t.eventRect.node(), ...e)[r ? "y" : "x"];
			} else u -= r ? s.top : s.left;
			c = qe(o, u, 0, o.length - 1, r);
		}
		return c;
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
		return N(e) ? e : +e;
	},
	getValuesByX(e) {
		let t = this, { cache: n, state: r } = t, i = e.map((e) => {
			let { values: n } = e, r = n[0], i = n[n.length - 1];
			return `${e.id}:${n.length}:${r ? t.getXCacheKey(r.x) : ""}:${i ? t.getXCacheKey(i.x) : ""}`;
		}).join("|"), a = n.get(W.valuesByX);
		if (a && a.generation === r.dataGeneration && a.targetKey === i) return a.value;
		let o = /* @__PURE__ */ new Map();
		for (let n = 0; n < e.length; n++) {
			let r = e[n].values;
			for (let e = 0; e < r.length; e++) {
				let n = r[e], i = t.getXCacheKey(n.x), a = o.get(i);
				a ? a.push(n) : o.set(i, [n]);
			}
		}
		return n.add(W.valuesByX, {
			generation: r.dataGeneration,
			targetKey: i,
			value: o
		}), o;
	},
	getClosestCandidates(e, t, n = !0) {
		let r = this, { config: i, scale: a } = r, o = e.length, s = e[0];
		if (!n || o < 200 || !s || !i.data_xSort) return e;
		let c = r.isBarType(s.id), l = r.isCandlestickType(s.id), u = i.point_sensitivity;
		if (!(c || l) && !P(u)) return e;
		let d = a.zoom || a.x, f = t[+i.axis_rotated], p = d(e[0].x) <= d(e[o - 1].x), m = 0, h = o - 1;
		for (; m < h;) {
			let t = m + h >> 1, n = d(e[t].x);
			(p ? n < f : n > f) ? m = t + 1 : h = t;
		}
		let g = [], _ = /* @__PURE__ */ new Set(), v = (t) => {
			t >= 0 && t < o && !_.has(t) && (_.add(t), g.push(e[t]));
		}, y = (t) => {
			if (t < 0 || t >= o) return;
			let n = r.getXCacheKey(e[t].x), i = t;
			for (; i >= 0 && r.getXCacheKey(e[i].x) === n;) v(i--);
			for (i = t + 1; i < o && r.getXCacheKey(e[i].x) === n;) v(i++);
		};
		if (c || l) for (let e = m - 2; e <= m + 2; e++) y(e);
		else {
			let t = u, n = (n, r) => {
				for (let i = n; i >= 0 && i < o; i += r) {
					let n = e[i];
					if (Math.abs(d(n.x) - f) > t) break;
					v(i);
				}
			};
			n(m, 1), n(m - 1, -1);
		}
		return g;
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
			if (!n || !j(n.value)) continue;
			let c = r.isBarType(n.id), l = r.isCandlestickType(n.id);
			if (c || l) {
				let e = c ? `.${Ni.chartBar}.${V.target}${r.getTargetSelectorSuffix(n.id)} .${Ni.bar}-${n.index}` : `.${Pi.chartCandlestick}.${V.target}${r.getTargetSelectorSuffix(n.id)} .${Pi.candlestick}-${n.index} path`;
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
		let { axis: t, config: n } = this, r = n.line_step_type, i = t ? t.isCategorized() : !1, a = L(e) ? e.concat() : [e];
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
		let t = L(e) ? e.concat() : [e], n = [];
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
		return ee(t) ? i : (Object.keys(t).forEach((e) => {
			i[e] = t[e];
		}), n.redraw({ withLegend: !0 }), i);
	},
	getRangedData(e, t = "", n = "areaRange") {
		let r = e?.value;
		if (L(r)) {
			if (n === "bar") return r.reduce((e, t) => t - e);
			{
				let e = so[n]?.[t] ?? -1;
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
					t.length && (t = t.reduce((e, t) => e.map((e, n) => (P(e) ? e : 0) + t[n])), c = c.map((e, n) => e - t[n]));
				}
			}
			let l = c[t.index];
			t.ratio = P(t.value) && c && l ? t.value / l : 0, s = t.ratio;
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
		return this.isBubbleType(e) && (R(e.value) && ("z" in e.value || "y" in e.value) || L(e.value) && e.value.length >= 2);
	},
	isBarRangeType(e) {
		let t = this, { value: n } = e;
		return t.isBarType(e) && L(n) && n.length >= 2 && n.every(P);
	},
	getDataById(e) {
		let t = this.cache.get(e) || this.api.data(e);
		return t?.[0] ?? t;
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/data/load.js
function uo(e, t = !1) {
	let n = this, { api: r } = n;
	t && n.api.flush(!0), e?.call(r);
}
var fo = {
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
			}), n.updateTypesElements(), uo.call(n, t.done, t.resizeAfter);
			return;
		}
		n.updateTargets(i.targets), o.zoom && (c.x = r.isCategorized() ? o.x.orgScale() : (a.xScale || o.x).copy(), c.domain = n.getXDomain(i.targets), c.x.domain(c.domain), c.currentDomain = n.zoom.getDomain(), n.withinRange(c.currentDomain, void 0, c.domain) || (o.x.domain(c.domain), o.zoom = null, n.$el.eventRect.property("__zoom", null))), n.redraw({
			withUpdateOrgXDomain: !0,
			withUpdateXDomain: !0,
			withLegend: !0
		}), o.zoom ? (a.xDomain = c.domain, a.xScale = c.x, r.isCategorized() && (c.currentDomain = n.getZoomDomainValue(c.currentDomain), a.xDomain = n.getZoomDomainValue(a.xDomain), a.xScale = c.x.domain(a.xDomain)), n.updateCurrentZoomTransform(c.x, c.currentDomain)) : a.xScale && a.xScale.domain(a.xDomain), n.updateTypesElements(), uo.call(n, t.done, t.resizeAfter);
	},
	loadFromArgs(e) {
		let t = this;
		t.config && (t.cache.reset(!1, [
			W.filteredTargets,
			W.maxDataCountTarget,
			W.valuesXIndexMap,
			W.maxTickSize
		]), t.convertData(e, (n) => {
			let r = e.data || n;
			e.append && (r.__append__ = !0), r && t.load(t.convertDataToTargets.call(t, r), e);
		}));
	},
	unload(e, t) {
		let n = this, { state: r, $el: i, $T: a } = n, o = !!n.hasLegendDefsPoint?.(), s = t, c = e;
		if (n.cache.reset(!1, [
			W.filteredTargets,
			W.maxDataCountTarget,
			W.valuesXIndexMap,
			W.maxTickSize
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
			r.withoutFadeIn[e] = !1, i.legend && i.legend.selectAll(`.${H.legendItem}${t}`).remove(), o && i.defs?.select(`#${n.getDefsPointId(t)}`).remove();
		}), n.data.targets = n.data.targets.filter((e) => !l.has(e.id)), r.hasFunnel && n.updateFunnel(n.data.targets), r.hasTreemap && n.updateTargetsForTreemap(n.data.targets), n.updateTypesElements(), a(i.svg.selectAll(c.map((e) => n.selectorTarget(e)))).style("opacity", "0").remove().call(Pe, s);
	}
}, po = { value: () => {} };
function mo() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new ho(n);
}
function ho(e) {
	this._ = e;
}
function go(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
ho.prototype = mo.prototype = {
	constructor: ho,
	on: function(e, t) {
		var n = this._, r = go(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = _o(n[i], e.name))) return i;
			return;
		}
		if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
		for (; ++a < o;) if (i = (e = r[a]).type) n[i] = vo(n[i], e.name, t);
		else if (t == null) for (i in n) n[i] = vo(n[i], e.name, null);
		return this;
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new ho(e);
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
function _o(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function vo(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = po, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
//#endregion
//#region node_modules/d3-drag/src/noevent.js
var yo = { passive: !1 }, bo = {
	capture: !0,
	passive: !1
};
function xo(e) {
	e.stopImmediatePropagation();
}
function So(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region node_modules/d3-drag/src/nodrag.js
function Co(e) {
	var t = e.document.documentElement, n = a(e).on("dragstart.drag", So, bo);
	"onselectstart" in t ? n.on("selectstart.drag", So, bo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function wo(e, t) {
	var n = e.document.documentElement, r = a(e).on("dragstart.drag", null);
	t && (r.on("click.drag", So, bo), setTimeout(function() {
		r.on("click.drag", null);
	}, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
//#endregion
//#region node_modules/d3-drag/src/constant.js
var To = (e) => () => e;
//#endregion
//#region node_modules/d3-drag/src/event.js
function Eo(e, { sourceEvent: t, subject: n, target: r, identifier: i, active: a, x: o, y: s, dx: c, dy: l, dispatch: u }) {
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
Eo.prototype.on = function() {
	var e = this._.on.apply(this._, arguments);
	return e === this._ ? this : e;
};
//#endregion
//#region node_modules/d3-drag/src/drag.js
function Do(e) {
	return !e.ctrlKey && !e.button;
}
function Oo() {
	return this.parentNode;
}
function ko(e, t) {
	return t ?? {
		x: e.x,
		y: e.y
	};
}
function Ao() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function jo() {
	var e = Do, t = Oo, n = ko, r = Ao, i = {}, o = mo("start", "drag", "end"), s = 0, c, l, u, d, f = 0;
	function p(e) {
		e.on("mousedown.drag", m).filter(r).on("touchstart.drag", _).on("touchmove.drag", v, yo).on("touchend.drag touchcancel.drag", y).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	function m(n, r) {
		if (!(d || !e.call(this, n, r))) {
			var i = b(this, t.call(this, n, r), n, r, "mouse");
			i && (a(n.view).on("mousemove.drag", h, bo).on("mouseup.drag", g, bo), Co(n.view), xo(n), u = !1, c = n.clientX, l = n.clientY, i("start", n));
		}
	}
	function h(e) {
		if (So(e), !u) {
			var t = e.clientX - c, n = e.clientY - l;
			u = t * t + n * n > f;
		}
		i.mouse("drag", e);
	}
	function g(e) {
		a(e.view).on("mousemove.drag mouseup.drag", null), wo(e.view, u), So(e), i.mouse("end", e);
	}
	function _(n, r) {
		if (e.call(this, n, r)) {
			var i = n.changedTouches, a = t.call(this, n, r), o = i.length, s, c;
			for (s = 0; s < o; ++s) (c = b(this, a, n, r, i[s].identifier, i[s])) && (xo(n), c("start", n, i[s]));
		}
	}
	function v(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (r = 0; r < n; ++r) (a = i[t[r].identifier]) && (So(e), a("drag", e, t[r]));
	}
	function y(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (d && clearTimeout(d), d = setTimeout(function() {
			d = null;
		}, 500), r = 0; r < n; ++r) (a = i[t[r].identifier]) && (xo(e), a("end", e, t[r]));
	}
	function b(e, t, r, a, c, l) {
		var u = o.copy(), d = at(l || r, t), f, m, h;
		if ((h = n.call(e, new Eo("beforestart", {
			sourceEvent: r,
			target: p,
			identifier: c,
			active: s,
			x: d[0],
			y: d[1],
			dx: 0,
			dy: 0,
			dispatch: u
		}), a)) != null) return f = h.x - d[0] || 0, m = h.y - d[1] || 0, function n(r, o, l) {
			var g = d, _;
			switch (r) {
				case "start":
					i[c] = n, _ = s++;
					break;
				case "end": delete i[c], --s;
				case "drag": d = at(l || o, t), _ = s;
			}
			u.call(r, e, new Eo(r, {
				sourceEvent: o,
				subject: h,
				target: p,
				identifier: c,
				active: _,
				x: d[0] + f,
				y: d[1] + m,
				dx: d[0] - g[0],
				dy: d[1] - g[1],
				dispatch: u
			}), a);
		};
	}
	return p.filter = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : To(!!t), p) : e;
	}, p.container = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : To(e), p) : t;
	}, p.subject = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : To(e), p) : n;
	}, p.touchable = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : To(!!e), p) : r;
	}, p.on = function() {
		var e = o.on.apply(o, arguments);
		return e === o ? p : e;
	}, p.clickDistance = function(e) {
		return arguments.length ? (f = (e = +e) * e, p) : Math.sqrt(f);
	}, p;
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/interactions/interaction.js
var Mo = {
	setExpand(e, t, n) {
		let r = this, { config: i, $el: { circle: a } } = r;
		a && i.point_focus_expand_enabled && r.expandCircles(e, t, n), r.expandBarTypeShapes(!0, e, t, n);
	},
	expandBarTypeShapes(e = !0, t, n, r) {
		let i = this;
		["bar", "candlestick"].filter((e) => i.$el[e]).forEach((a) => {
			r && i.$el[a].classed(V.EXPANDED, !1), i.getShapeByIndex(a, t, n).classed(V.EXPANDED, e);
		});
	},
	setOverOut(e, t) {
		let n = this, { config: r, state: { hasFunnel: i, hasRadar: o, hasTreemap: s }, $el: { main: c } } = n, l = R(t);
		if (l || t !== -1) {
			let u = r[e ? "data_onover" : "data_onout"].bind(n.api);
			if (r.color_onover && n.setOverColor(e, t, l), l) {
				let e = n.getTargetSelectorSuffix(t.id), r = i || s ? `${V.target + e} .${qi.shape}` : Ai.arc + e;
				u(t, c.select(`.${r}`).node());
			} else if (r.tooltip_grouped) e && (o && n.isPointFocusOnly() ? n.showCircleFocus(n.getAllValuesOnIndex(t, !0)) : n.setExpand(t, null, !0)), !n.isMultipleX() && c.selectAll(`.${qi.shape}-${t}`).each(function(e) {
				u(e, this);
			});
			else {
				let i = n.cache.get(W.setOverOut) || [], o = c.selectAll(`.${qi.shape}-${t}`).filter(function(e) {
					return n.isWithinShape(this, e);
				}), s = o.filter(function() {
					return i.every((e) => e !== this);
				});
				if (!e || o.empty() || i.length === s.size() && s.nodes().every((e, t) => e !== i[t])) for (; i.length;) {
					let e = i.pop();
					r.data_onout.bind(n.api)(a(e).datum(), e);
				}
				s.each(function() {
					e && (u(a(this).datum(), this), i.push(this));
				}), n.cache.add(W.setOverOut, i);
			}
		}
	},
	callOverOutForTouch(e) {
		let t = this, n = t.cache.get(W.callOverOutForTouch);
		(R(e) && n ? e.id !== n.id : e !== n) && ((n || P(n)) && t.setOverOut(!1, n), (e || P(e)) && t.setOverOut(!0, e), t.cache.add(W.callOverOutForTouch, e));
	},
	getDraggableSelection() {
		let e = this, { config: t, state: n } = e;
		return t.interaction_enabled && t.data_selection_draggable && e.drag ? jo().on("drag", function(t) {
			n.event = t, e.drag(va(t, this));
		}).on("start", function(t) {
			n.event = t, e.dragstart(va(t, this));
		}).on("end", (t) => {
			n.event = t, e.dragend();
		}) : () => {};
	},
	dispatchEvent(e, t, n) {
		let r = this, { config: i, state: { eventReceiver: a, hasAxis: o, hasFunnel: s, hasRadar: c, hasTreemap: l }, $el: { eventRect: u, funnel: d, radar: f, svg: p, treemap: m } } = r, h = ((s || l) && a.rect || c && f.axes.select(`.${Mi.axis}-${t} text`) || u || r.getArcElementByIdOrIndex?.(t))?.node?.();
		if (h) {
			let u = r.isMultipleX(), f = i.axis_rotated, { width: g, left: _, top: v } = ya(h);
			if (o && !c && !u) {
				let e = a.coords[t];
				e ? (g = e.w, _ += e.x, v += e.y) : (g = 0, _ = 0, v = 0);
			}
			let y = _ + (n ? n[0] : 0) + (u || f ? 0 : g / 2), b = v + (n ? n[1] : 0) + (f ? 4 : 0);
			if (Ea(p) && r.$el.eventRect) {
				let e = Ca(r.$el.eventRect.node(), y, b, !1);
				y = e.x, b = e.y;
			}
			let x = {
				screenX: y,
				screenY: b,
				clientX: y,
				clientY: b,
				bubbles: c
			};
			(s || l) && (h = (d ?? m).node()), Aa[/^(mouse|click)/.test(e) ? "mouse" : "touch"](h, e, x);
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
}, No = { categoryName(e) {
	let { axis_x_categories: t } = this.config;
	return t?.[e] ?? e;
} }, Po = /[\x00-\x20\x7F-\xA0\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\]/g, Fo = {
	generateClass(e, t) {
		let n = this.state.generateClassCache, r = `${e}\0${t}`, i = n.get(r);
		return i || (i = ` ${e} ${e + this.getTargetSelectorSuffix(t)}`, n.set(r, i)), i;
	},
	getClass(e, t) {
		let n = /s$/.test(e), r = /^(area|arc|line|funnel|treemap)s?$/.test(e), i = n ? "id" : "index";
		return (a) => {
			let o = a.data || a;
			return ((t ? this.generateClass($i[n ? "shapes" : "shape"], o[i]) : "") + this.generateClass($i[e], o[r ? "id" : i])).trim();
		};
	},
	getChartClass(e) {
		return (t) => $i[`chart${e}`] + this.classTarget((t.data ? t.data : t).id);
	},
	generateExtraLineClass() {
		let e = this.config.line_classes || [], t = [];
		return function(n) {
			let r = n.id || n.data?.id || n;
			return t.indexOf(r) < 0 && t.push(r), e[t.indexOf(r) % e.length];
		};
	},
	classRegion(e, t) {
		return `${this.generateClass($i.region, t)} ${"class" in e ? e.class : ""}`;
	},
	classTarget(e) {
		let t = this.config.data_classes[e], n = "";
		return t && (n = ` ${$i.target}-${t}`), this.generateClass($i.target, e) + n;
	},
	classFocus(e) {
		return this.classFocused(e) + this.classDefocused(e);
	},
	classFocused(e) {
		return ` ${this.state.focusedTargetIds.has(e.id) ? $i.focused : ""}`;
	},
	classDefocused(e) {
		return ` ${this.state.defocusedTargetIds.has(e.id) ? $i.defocused : ""}`;
	},
	getTargetSelectorSuffix(e) {
		return (e || e === 0 ? `-${e}` : "").replace(Po, "-");
	},
	selectorTarget(e, t = "", n = "") {
		let r = this.getTargetSelectorSuffix(e);
		return `${t}.${$i.target + r} ${n}, ${t}.${$i.circles + r} ${n}`;
	},
	selectorTargets(e, t) {
		let n = e || [];
		return n.length ? n.map((e) => this.selectorTarget(e, t)) : null;
	},
	selectorLegend(e) {
		return `.${$i.legendItem + this.getTargetSelectorSuffix(e)}`;
	},
	selectorLegends(e) {
		return e?.length ? e.map((e) => this.selectorLegend(e)) : null;
	}
};
//#endregion
//#region node_modules/d3-scale/src/init.js
function Io(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			this.range(e);
			break;
		default: this.range(t).domain(e);
	}
	return this;
}
function Lo(e, t) {
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
var Ro = Symbol("implicit");
function zo() {
	var e = new dn(), t = [], n = [], r = Ro;
	function i(i) {
		let a = e.get(i);
		if (a === void 0) {
			if (r !== Ro) return r;
			e.set(i, a = t.push(i) - 1);
		}
		return n[a % n.length];
	}
	return i.domain = function(n) {
		if (!arguments.length) return t.slice();
		t = [], e = new dn();
		for (let r of n) e.has(r) || e.set(r, t.push(r) - 1);
		return i;
	}, i.range = function(e) {
		return arguments.length ? (n = Array.from(e), i) : n.slice();
	}, i.unknown = function(e) {
		return arguments.length ? (r = e, i) : r;
	}, i.copy = function() {
		return zo(t, n).unknown(r);
	}, Io.apply(i, arguments), i;
}
//#endregion
//#region node_modules/d3-scale/src/band.js
function Bo() {
	var e = zo().unknown(void 0), t = e.domain, n = e.range, r = 0, i = 1, a, o, s = !1, c = 0, l = 0, u = .5;
	delete e.unknown;
	function d() {
		var e = t().length, d = i < r, f = d ? i : r, p = d ? r : i;
		a = (p - f) / Math.max(1, e - c + l * 2), s && (a = Math.floor(a)), f += (p - f - a * (e - c)) * u, o = a * (1 - c), s && (f = Math.round(f), o = Math.round(o));
		var m = Xn(e).map(function(e) {
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
		return Bo(t(), [r, i]).round(s).paddingInner(c).paddingOuter(l).align(u);
	}, Io.apply(d(), arguments);
}
function Vo(e) {
	var t = e.copy;
	return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
		return Vo(t());
	}, e;
}
function Ho() {
	return Vo(Bo.apply(null, arguments).paddingInner(1));
}
//#endregion
//#region node_modules/d3-color/src/define.js
function Uo(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function Wo(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region node_modules/d3-color/src/color.js
function Go() {}
var Ko = .7, qo = 1 / Ko, Jo = "\\s*([+-]?\\d+)\\s*", Yo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Xo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Zo = /^#([0-9a-f]{3,8})$/, Qo = RegExp(`^rgb\\(${Jo},${Jo},${Jo}\\)$`), $o = RegExp(`^rgb\\(${Xo},${Xo},${Xo}\\)$`), es = RegExp(`^rgba\\(${Jo},${Jo},${Jo},${Yo}\\)$`), ts = RegExp(`^rgba\\(${Xo},${Xo},${Xo},${Yo}\\)$`), ns = RegExp(`^hsl\\(${Yo},${Xo},${Xo}\\)$`), rs = RegExp(`^hsla\\(${Yo},${Xo},${Xo},${Yo}\\)$`), is = {
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
Uo(Go, ls, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: as,
	formatHex: as,
	formatHex8: os,
	formatHsl: ss,
	formatRgb: cs,
	toString: cs
});
function as() {
	return this.rgb().formatHex();
}
function os() {
	return this.rgb().formatHex8();
}
function ss() {
	return Ss(this).formatHsl();
}
function cs() {
	return this.rgb().formatRgb();
}
function ls(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = Zo.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? us(t) : n === 3 ? new ms(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ds(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ds(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Qo.exec(e)) ? new ms(t[1], t[2], t[3], 1) : (t = $o.exec(e)) ? new ms(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = es.exec(e)) ? ds(t[1], t[2], t[3], t[4]) : (t = ts.exec(e)) ? ds(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ns.exec(e)) ? xs(t[1], t[2] / 100, t[3] / 100, 1) : (t = rs.exec(e)) ? xs(t[1], t[2] / 100, t[3] / 100, t[4]) : is.hasOwnProperty(e) ? us(is[e]) : e === "transparent" ? new ms(NaN, NaN, NaN, 0) : null;
}
function us(e) {
	return new ms(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ds(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new ms(e, t, n, r);
}
function fs(e) {
	return e instanceof Go || (e = ls(e)), e ? (e = e.rgb(), new ms(e.r, e.g, e.b, e.opacity)) : new ms();
}
function ps(e, t, n, r) {
	return arguments.length === 1 ? fs(e) : new ms(e, t, n, r ?? 1);
}
function ms(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Uo(ms, ps, Wo(Go, {
	brighter(e) {
		return e = e == null ? qo : qo ** +e, new ms(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? Ko : Ko ** +e, new ms(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new ms(ys(this.r), ys(this.g), ys(this.b), vs(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: hs,
	formatHex: hs,
	formatHex8: gs,
	formatRgb: _s,
	toString: _s
}));
function hs() {
	return `#${bs(this.r)}${bs(this.g)}${bs(this.b)}`;
}
function gs() {
	return `#${bs(this.r)}${bs(this.g)}${bs(this.b)}${bs((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function _s() {
	let e = vs(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${ys(this.r)}, ${ys(this.g)}, ${ys(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function vs(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ys(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function bs(e) {
	return e = ys(e), (e < 16 ? "0" : "") + e.toString(16);
}
function xs(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ws(e, t, n, r);
}
function Ss(e) {
	if (e instanceof ws) return new ws(e.h, e.s, e.l, e.opacity);
	if (e instanceof Go || (e = ls(e)), !e) return new ws();
	if (e instanceof ws) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new ws(o, s, c, e.opacity);
}
function Cs(e, t, n, r) {
	return arguments.length === 1 ? Ss(e) : new ws(e, t, n, r ?? 1);
}
function ws(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Uo(ws, Cs, Wo(Go, {
	brighter(e) {
		return e = e == null ? qo : qo ** +e, new ws(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? Ko : Ko ** +e, new ws(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new ms(Ds(e >= 240 ? e - 240 : e + 120, i, r), Ds(e, i, r), Ds(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new ws(Ts(this.h), Es(this.s), Es(this.l), vs(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = vs(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${Ts(this.h)}, ${Es(this.s) * 100}%, ${Es(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function Ts(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Es(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function Ds(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region node_modules/d3-color/src/math.js
var Os = Math.PI / 180, ks = 180 / Math.PI, As = 18, js = .96422, Ms = 1, Ns = .82521, Ps = 4 / 29, Fs = 6 / 29, Is = 3 * Fs * Fs, Ls = Fs * Fs * Fs;
function Rs(e) {
	if (e instanceof Bs) return new Bs(e.l, e.a, e.b, e.opacity);
	if (e instanceof qs) return Js(e);
	e instanceof ms || (e = fs(e));
	var t = Ws(e.r), n = Ws(e.g), r = Ws(e.b), i = Vs((.2225045 * t + .7168786 * n + .0606169 * r) / Ms), a, o;
	return t === n && n === r ? a = o = i : (a = Vs((.4360747 * t + .3850649 * n + .1430804 * r) / js), o = Vs((.0139322 * t + .0971045 * n + .7141733 * r) / Ns)), new Bs(116 * i - 16, 500 * (a - i), 200 * (i - o), e.opacity);
}
function zs(e, t, n, r) {
	return arguments.length === 1 ? Rs(e) : new Bs(e, t, n, r ?? 1);
}
function Bs(e, t, n, r) {
	this.l = +e, this.a = +t, this.b = +n, this.opacity = +r;
}
Uo(Bs, zs, Wo(Go, {
	brighter(e) {
		return new Bs(this.l + As * (e ?? 1), this.a, this.b, this.opacity);
	},
	darker(e) {
		return new Bs(this.l - As * (e ?? 1), this.a, this.b, this.opacity);
	},
	rgb() {
		var e = (this.l + 16) / 116, t = isNaN(this.a) ? e : e + this.a / 500, n = isNaN(this.b) ? e : e - this.b / 200;
		return t = js * Hs(t), e = Ms * Hs(e), n = Ns * Hs(n), new ms(Us(3.1338561 * t - 1.6168667 * e - .4906146 * n), Us(-.9787684 * t + 1.9161415 * e + .033454 * n), Us(.0719453 * t - .2289914 * e + 1.4052427 * n), this.opacity);
	}
}));
function Vs(e) {
	return e > Ls ? e ** (1 / 3) : e / Is + Ps;
}
function Hs(e) {
	return e > Fs ? e * e * e : Is * (e - Ps);
}
function Us(e) {
	return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055);
}
function Ws(e) {
	return (e /= 255) <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;
}
function Gs(e) {
	if (e instanceof qs) return new qs(e.h, e.c, e.l, e.opacity);
	if (e instanceof Bs || (e = Rs(e)), e.a === 0 && e.b === 0) return new qs(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
	var t = Math.atan2(e.b, e.a) * ks;
	return new qs(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
}
function Ks(e, t, n, r) {
	return arguments.length === 1 ? Gs(e) : new qs(e, t, n, r ?? 1);
}
function qs(e, t, n, r) {
	this.h = +e, this.c = +t, this.l = +n, this.opacity = +r;
}
function Js(e) {
	if (isNaN(e.h)) return new Bs(e.l, 0, 0, e.opacity);
	var t = e.h * Os;
	return new Bs(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
}
Uo(qs, Ks, Wo(Go, {
	brighter(e) {
		return new qs(this.h, this.c, this.l + As * (e ?? 1), this.opacity);
	},
	darker(e) {
		return new qs(this.h, this.c, this.l - As * (e ?? 1), this.opacity);
	},
	rgb() {
		return Js(this).rgb();
	}
}));
//#endregion
//#region node_modules/d3-color/src/cubehelix.js
var Ys = -.14861, Xs = 1.78277, Zs = -.29227, Qs = -.90649, $s = 1.97294, ec = $s * Qs, tc = $s * Xs, nc = Xs * Zs - Qs * Ys;
function rc(e) {
	if (e instanceof ac) return new ac(e.h, e.s, e.l, e.opacity);
	e instanceof ms || (e = fs(e));
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = (nc * r + ec * t - tc * n) / (nc + ec - tc), a = r - i, o = ($s * (n - i) - Zs * a) / Qs, s = Math.sqrt(o * o + a * a) / ($s * i * (1 - i)), c = s ? Math.atan2(o, a) * ks - 120 : NaN;
	return new ac(c < 0 ? c + 360 : c, s, i, e.opacity);
}
function ic(e, t, n, r) {
	return arguments.length === 1 ? rc(e) : new ac(e, t, n, r ?? 1);
}
function ac(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Uo(ac, ic, Wo(Go, {
	brighter(e) {
		return e = e == null ? qo : qo ** +e, new ac(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? Ko : Ko ** +e, new ac(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = isNaN(this.h) ? 0 : (this.h + 120) * Os, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), r = Math.cos(e), i = Math.sin(e);
		return new ms(255 * (t + n * (Ys * r + Xs * i)), 255 * (t + n * (Zs * r + Qs * i)), 255 * (t + $s * r * n), this.opacity);
	}
}));
//#endregion
//#region node_modules/d3-interpolate/src/basis.js
function oc(e, t, n, r, i) {
	var a = e * e, o = a * e;
	return ((1 - 3 * e + 3 * a - o) * t + (4 - 6 * a + 3 * o) * n + (1 + 3 * e + 3 * a - 3 * o) * r + o * i) / 6;
}
function sc(e) {
	var t = e.length - 1;
	return function(n) {
		var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), i = e[r], a = e[r + 1], o = r > 0 ? e[r - 1] : 2 * i - a, s = r < t - 1 ? e[r + 2] : 2 * a - i;
		return oc((n - r / t) * t, o, i, a, s);
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/constant.js
var cc = (e) => () => e;
//#endregion
//#region node_modules/d3-interpolate/src/color.js
function lc(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function uc(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function dc(e, t) {
	var n = t - e;
	return n ? lc(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : cc(isNaN(e) ? t : e);
}
function fc(e) {
	return (e = +e) == 1 ? pc : function(t, n) {
		return n - t ? uc(t, n, e) : cc(isNaN(t) ? n : t);
	};
}
function pc(e, t) {
	var n = t - e;
	return n ? lc(e, n) : cc(isNaN(e) ? t : e);
}
//#endregion
//#region node_modules/d3-interpolate/src/rgb.js
var mc = (function e(t) {
	var n = fc(t);
	function r(e, t) {
		var r = n((e = ps(e)).r, (t = ps(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = pc(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
function hc(e) {
	return function(t) {
		var n = t.length, r = Array(n), i = Array(n), a = Array(n), o, s;
		for (o = 0; o < n; ++o) s = ps(t[o]), r[o] = s.r || 0, i[o] = s.g || 0, a[o] = s.b || 0;
		return r = e(r), i = e(i), a = e(a), s.opacity = 1, function(e) {
			return s.r = r(e), s.g = i(e), s.b = a(e), s + "";
		};
	};
}
var gc = hc(sc);
//#endregion
//#region node_modules/d3-interpolate/src/numberArray.js
function _c(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function vc(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region node_modules/d3-interpolate/src/array.js
function yc(e, t) {
	var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o;
	for (o = 0; o < r; ++o) i[o] = Oc(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/date.js
function bc(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/number.js
function xc(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/object.js
function Sc(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = Oc(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/string.js
var Cc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, wc = new RegExp(Cc.source, "g");
function Tc(e) {
	return function() {
		return e;
	};
}
function Ec(e) {
	return function(t) {
		return e(t) + "";
	};
}
function Dc(e, t) {
	var n = Cc.lastIndex = wc.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = Cc.exec(e)) && (i = wc.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: xc(r, i)
	})), n = wc.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Ec(c[0].x) : Tc(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region node_modules/d3-interpolate/src/value.js
function Oc(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? cc(t) : (n === "number" ? xc : n === "string" ? (r = ls(t)) ? (t = r, mc) : Dc : t instanceof ls ? mc : t instanceof Date ? bc : vc(t) ? _c : Array.isArray(t) ? yc : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Sc : xc)(e, t);
}
//#endregion
//#region node_modules/d3-interpolate/src/round.js
function kc(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/decompose.js
var Ac = 180 / Math.PI, jc = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function Mc(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * Ac,
		skewX: Math.atan(c) * Ac,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/parse.js
var Nc;
function Pc(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? jc : Mc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Fc(e) {
	return e == null || (Nc ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), Nc.setAttribute("transform", e), !(e = Nc.transform.baseVal.consolidate())) ? jc : (e = e.matrix, Mc(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/index.js
function Ic(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: xc(e, i)
			}, {
				i: c - 2,
				x: xc(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: xc(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: xc(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: xc(e, n)
			}, {
				i: s - 2,
				x: xc(t, r)
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
var Lc = Ic(Pc, "px, ", "px)", "deg)"), Rc = Ic(Fc, ", ", ")", ")"), zc = 1e-12;
function Bc(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Vc(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Hc(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var Uc = (function e(t, n, r) {
	function i(e, i) {
		var a = e[0], o = e[1], s = e[2], c = i[0], l = i[1], u = i[2], d = c - a, f = l - o, p = d * d + f * f, m, h;
		if (p < zc) h = Math.log(u / s) / t, m = function(e) {
			return [
				a + e * d,
				o + e * f,
				s * Math.exp(t * e * h)
			];
		};
		else {
			var g = Math.sqrt(p), _ = (u * u - s * s + r * p) / (2 * s * n * g), v = (u * u - s * s - r * p) / (2 * u * n * g), y = Math.log(Math.sqrt(_ * _ + 1) - _);
			h = (Math.log(Math.sqrt(v * v + 1) - v) - y) / t, m = function(e) {
				var r = e * h, i = Bc(y), c = s / (n * g) * (i * Hc(t * r + y) - Vc(y));
				return [
					a + c * d,
					o + c * f,
					s * i / Bc(t * r + y)
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
function Wc(e) {
	return function(t, n) {
		var r = e((t = Cs(t)).h, (n = Cs(n)).h), i = pc(t.s, n.s), a = pc(t.l, n.l), o = pc(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.s = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var Gc = Wc(dc);
//#endregion
//#region node_modules/d3-interpolate/src/lab.js
function Kc(e, t) {
	var n = pc((e = zs(e)).l, (t = zs(t)).l), r = pc(e.a, t.a), i = pc(e.b, t.b), a = pc(e.opacity, t.opacity);
	return function(t) {
		return e.l = n(t), e.a = r(t), e.b = i(t), e.opacity = a(t), e + "";
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/hcl.js
function qc(e) {
	return function(t, n) {
		var r = e((t = Ks(t)).h, (n = Ks(n)).h), i = pc(t.c, n.c), a = pc(t.l, n.l), o = pc(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.c = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var Jc = qc(dc);
//#endregion
//#region node_modules/d3-interpolate/src/cubehelix.js
function Yc(e) {
	return (function t(n) {
		n = +n;
		function r(t, r) {
			var i = e((t = ic(t)).h, (r = ic(r)).h), a = pc(t.s, r.s), o = pc(t.l, r.l), s = pc(t.opacity, r.opacity);
			return function(e) {
				return t.h = i(e), t.s = a(e), t.l = o(e ** +n), t.opacity = s(e), t + "";
			};
		}
		return r.gamma = t, r;
	})(1);
}
Yc(dc);
var Xc = Yc(pc);
//#endregion
//#region node_modules/d3-interpolate/src/piecewise.js
function Zc(e, t) {
	t === void 0 && (t = e, e = Oc);
	for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;) a[n] = e(i, i = t[++n]);
	return function(e) {
		var t = Math.max(0, Math.min(r - 1, Math.floor(e *= r)));
		return a[t](e - t);
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/quantize.js
function Qc(e, t) {
	for (var n = Array(t), r = 0; r < t; ++r) n[r] = e(r / (t - 1));
	return n;
}
//#endregion
//#region node_modules/d3-scale/src/constant.js
function $c(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-scale/src/number.js
function el(e) {
	return +e;
}
//#endregion
//#region node_modules/d3-scale/src/continuous.js
var tl = [0, 1];
function nl(e) {
	return e;
}
function rl(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : $c(isNaN(t) ? NaN : .5);
}
function il(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function al(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = rl(i, r), a = n(o, a)) : (r = rl(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function ol(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = rl(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = $t(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function sl(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function cl() {
	var e = tl, t = tl, n = Oc, r, i, a, o = nl, s, c, l;
	function u() {
		var n = Math.min(e.length, t.length);
		return o !== nl && (o = il(e[0], e[n - 1])), s = n > 2 ? ol : al, c = l = null, d;
	}
	function d(i) {
		return i == null || isNaN(i = +i) ? a : (c ||= s(e.map(r), t, n))(r(o(i)));
	}
	return d.invert = function(n) {
		return o(i((l ||= s(t, e.map(r), xc))(n)));
	}, d.domain = function(t) {
		return arguments.length ? (e = Array.from(t, el), u()) : e.slice();
	}, d.range = function(e) {
		return arguments.length ? (t = Array.from(e), u()) : t.slice();
	}, d.rangeRound = function(e) {
		return t = Array.from(e), n = kc, u();
	}, d.clamp = function(e) {
		return arguments.length ? (o = e ? !0 : nl, u()) : o !== nl;
	}, d.interpolate = function(e) {
		return arguments.length ? (n = e, u()) : n;
	}, d.unknown = function(e) {
		return arguments.length ? (a = e, d) : a;
	}, function(e, t) {
		return r = e, i = t, u();
	};
}
function ll() {
	return cl()(nl, nl);
}
//#endregion
//#region node_modules/d3-format/src/formatDecimal.js
function ul(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function dl(e, t) {
	if (!isFinite(e) || e === 0) return null;
	var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), r = e.slice(0, n);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
//#endregion
//#region node_modules/d3-format/src/exponent.js
function fl(e) {
	return e = dl(Math.abs(e)), e ? e[1] : NaN;
}
//#endregion
//#region node_modules/d3-format/src/formatGroup.js
function pl(e, t) {
	return function(n, r) {
		for (var i = n.length, a = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r));) s = e[o = (o + 1) % e.length];
		return a.reverse().join(t);
	};
}
//#endregion
//#region node_modules/d3-format/src/formatNumerals.js
function ml(e) {
	return function(t) {
		return t.replace(/[0-9]/g, function(t) {
			return e[+t];
		});
	};
}
//#endregion
//#region node_modules/d3-format/src/formatSpecifier.js
var hl = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function gl(e) {
	if (!(t = hl.exec(e))) throw Error("invalid format: " + e);
	var t;
	return new _l({
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
gl.prototype = _l.prototype;
function _l(e) {
	this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
_l.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
//#endregion
//#region node_modules/d3-format/src/formatTrim.js
function vl(e) {
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
var yl;
function bl(e, t) {
	var n = dl(e, t);
	if (!n) return yl = void 0, e.toPrecision(t);
	var r = n[0], i = n[1], a = i - (yl = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
	return a === o ? r : a > o ? r + Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + Array(1 - a).join("0") + dl(e, Math.max(0, t + a - 1))[0];
}
//#endregion
//#region node_modules/d3-format/src/formatRounded.js
function xl(e, t) {
	var n = dl(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1];
	return i < 0 ? "0." + Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + Array(i - r.length + 2).join("0");
}
//#endregion
//#region node_modules/d3-format/src/formatTypes.js
var Sl = {
	"%": (e, t) => (e * 100).toFixed(t),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + "",
	d: ul,
	e: (e, t) => e.toExponential(t),
	f: (e, t) => e.toFixed(t),
	g: (e, t) => e.toPrecision(t),
	o: (e) => Math.round(e).toString(8),
	p: (e, t) => xl(e * 100, t),
	r: xl,
	s: bl,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
};
//#endregion
//#region node_modules/d3-format/src/identity.js
function Cl(e) {
	return e;
}
//#endregion
//#region node_modules/d3-format/src/locale.js
var wl = Array.prototype.map, Tl = [
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
function El(e) {
	var t = e.grouping === void 0 || e.thousands === void 0 ? Cl : pl(wl.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Cl : ml(wl.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
	function l(e, l) {
		e = gl(e);
		var u = e.fill, d = e.align, f = e.sign, p = e.symbol, m = e.zero, h = e.width, g = e.comma, _ = e.precision, v = e.trim, y = e.type;
		y === "n" ? (g = !0, y = "g") : Sl[y] || (_ === void 0 && (_ = 12), v = !0, y = "g"), (m || u === "0" && d === "=") && (m = !0, u = "0", d = "=");
		var b = (l && l.prefix !== void 0 ? l.prefix : "") + (p === "$" ? n : p === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : ""), x = (p === "$" ? r : /[%p]/.test(y) ? o : "") + (l && l.suffix !== void 0 ? l.suffix : ""), S = Sl[y], C = /[defgprs%]/.test(y);
		_ = _ === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
		function w(e) {
			var n = b, r = x, o, l, p;
			if (y === "c") r = S(e) + r, e = "";
			else {
				e = +e;
				var w = e < 0 || 1 / e < 0;
				if (e = isNaN(e) ? c : S(Math.abs(e), _), v && (e = vl(e)), w && +e == 0 && f !== "+" && (w = !1), n = (w ? f === "(" ? f : s : f === "-" || f === "(" ? "" : f) + n, r = (y === "s" && !isNaN(e) && yl !== void 0 ? Tl[8 + yl / 3] : "") + r + (w && f === "(" ? ")" : ""), C) {
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
		var n = Math.max(-8, Math.min(8, Math.floor(fl(t) / 3))) * 3, r = 10 ** -n, i = l((e = gl(e), e.type = "f", e), { suffix: Tl[8 + n / 3] });
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
var Dl, Ol, kl;
Al({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function Al(e) {
	return Dl = El(e), Ol = Dl.format, kl = Dl.formatPrefix, Dl;
}
//#endregion
//#region node_modules/d3-format/src/precisionFixed.js
function jl(e) {
	return Math.max(0, -fl(Math.abs(e)));
}
//#endregion
//#region node_modules/d3-format/src/precisionPrefix.js
function Ml(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(fl(t) / 3))) * 3 - fl(Math.abs(e)));
}
//#endregion
//#region node_modules/d3-format/src/precisionRound.js
function Nl(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, fl(t) - fl(e)) + 1;
}
//#endregion
//#region node_modules/d3-scale/src/tickFormat.js
function Pl(e, t, n, r) {
	var i = Nn(e, t, n), a;
	switch (r = gl(r ?? ",f"), r.type) {
		case "s":
			var o = Math.max(Math.abs(e), Math.abs(t));
			return r.precision == null && !isNaN(a = Ml(i, o)) && (r.precision = a), kl(r, o);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			r.precision == null && !isNaN(a = Nl(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = a - (r.type === "e"));
			break;
		case "f":
		case "%": r.precision == null && !isNaN(a = jl(i)) && (r.precision = a - (r.type === "%") * 2);
	}
	return Ol(r);
}
//#endregion
//#region node_modules/d3-scale/src/linear.js
function Fl(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return jn(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return Pl(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = Mn(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
			if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
			else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
			else break;
			c = l;
		}
		return e;
	}, e;
}
function Il() {
	var e = ll();
	return e.copy = function() {
		return sl(e, Il());
	}, Io.apply(e, arguments), Fl(e);
}
//#endregion
//#region node_modules/d3-scale/src/identity.js
function Ll(e) {
	var t;
	function n(e) {
		return e == null || isNaN(e = +e) ? t : e;
	}
	return n.invert = n, n.domain = n.range = function(t) {
		return arguments.length ? (e = Array.from(t, el), n) : e.slice();
	}, n.unknown = function(e) {
		return arguments.length ? (t = e, n) : t;
	}, n.copy = function() {
		return Ll(e).unknown(t);
	}, e = arguments.length ? Array.from(e, el) : [0, 1], Fl(n);
}
//#endregion
//#region node_modules/d3-scale/src/nice.js
function Rl(e, t) {
	e = e.slice();
	var n = 0, r = e.length - 1, i = e[n], a = e[r], o;
	return a < i && (o = n, n = r, r = o, o = i, i = a, a = o), e[n] = t.floor(i), e[r] = t.ceil(a), e;
}
//#endregion
//#region node_modules/d3-scale/src/log.js
function zl(e) {
	return Math.log(e);
}
function Bl(e) {
	return Math.exp(e);
}
function Vl(e) {
	return -Math.log(-e);
}
function Hl(e) {
	return -Math.exp(-e);
}
function Ul(e) {
	return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function Wl(e) {
	return e === 10 ? Ul : e === Math.E ? Math.exp : (t) => e ** +t;
}
function Gl(e) {
	return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Kl(e) {
	return (t, n) => -e(-t, n);
}
function ql(e) {
	let t = e(zl, Bl), n = t.domain, r = 10, i, a;
	function o() {
		return i = Gl(r), a = Wl(r), n()[0] < 0 ? (i = Kl(i), a = Kl(a), e(Vl, Hl)) : e(zl, Bl), t;
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
			m.length * 2 < p && (m = jn(o, s, p));
		} else m = jn(l, u, Math.min(u - l, p)).map(a);
		return c ? m.reverse() : m;
	}, t.tickFormat = (e, n) => {
		if (e ??= 10, n ??= r === 10 ? "s" : ",", typeof n != "function" && (!(r % 1) && (n = gl(n)).precision == null && (n.trim = !0), n = Ol(n)), e === Infinity) return n;
		let o = Math.max(1, r * e / t.ticks().length);
		return (e) => {
			let t = e / a(Math.round(i(e)));
			return t * r < r - .5 && (t *= r), t <= o ? n(e) : "";
		};
	}, t.nice = () => n(Rl(n(), {
		floor: (e) => a(Math.floor(i(e))),
		ceil: (e) => a(Math.ceil(i(e)))
	})), t;
}
function Jl() {
	let e = ql(cl()).domain([1, 10]);
	return e.copy = () => sl(e, Jl()).base(e.base()), Io.apply(e, arguments), e;
}
//#endregion
//#region node_modules/d3-scale/src/symlog.js
function Yl(e) {
	return function(t) {
		return Math.sign(t) * Math.log1p(Math.abs(t / e));
	};
}
function Xl(e) {
	return function(t) {
		return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
	};
}
function Zl(e) {
	var t = 1, n = e(Yl(t), Xl(t));
	return n.constant = function(n) {
		return arguments.length ? e(Yl(t = +n), Xl(t)) : t;
	}, Fl(n);
}
function Ql() {
	var e = Zl(cl());
	return e.copy = function() {
		return sl(e, Ql()).constant(e.constant());
	}, Io.apply(e, arguments);
}
//#endregion
//#region node_modules/d3-scale/src/pow.js
function $l(e) {
	return function(t) {
		return t < 0 ? -((-t) ** +e) : t ** +e;
	};
}
function eu(e) {
	return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function tu(e) {
	return e < 0 ? -e * e : e * e;
}
function nu(e) {
	var t = e(nl, nl), n = 1;
	function r() {
		return n === 1 ? e(nl, nl) : n === .5 ? e(eu, tu) : e($l(n), $l(1 / n));
	}
	return t.exponent = function(e) {
		return arguments.length ? (n = +e, r()) : n;
	}, Fl(t);
}
function ru() {
	var e = nu(cl());
	return e.copy = function() {
		return sl(e, ru()).exponent(e.exponent());
	}, Io.apply(e, arguments), e;
}
//#endregion
//#region node_modules/d3-scale/src/quantile.js
function iu() {
	var e = [], t = [], n = [], r;
	function i() {
		var r = 0, i = Math.max(1, t.length);
		for (n = Array(i - 1); ++r < i;) n[r - 1] = Hn(e, r / i);
		return a;
	}
	function a(e) {
		return e == null || isNaN(e = +e) ? r : t[$t(n, e)];
	}
	return a.invertExtent = function(r) {
		var i = t.indexOf(r);
		return i < 0 ? [NaN, NaN] : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]];
	}, a.domain = function(t) {
		if (!arguments.length) return e.slice();
		e = [];
		for (let n of t) n != null && !isNaN(n = +n) && e.push(n);
		return e.sort(Kt), i();
	}, a.range = function(e) {
		return arguments.length ? (t = Array.from(e), i()) : t.slice();
	}, a.unknown = function(e) {
		return arguments.length ? (r = e, a) : r;
	}, a.quantiles = function() {
		return n.slice();
	}, a.copy = function() {
		return iu().domain(e).range(t).unknown(r);
	}, Io.apply(a, arguments);
}
//#endregion
//#region node_modules/d3-scale/src/threshold.js
function au() {
	var e = [.5], t = [0, 1], n, r = 1;
	function i(i) {
		return i != null && i <= i ? t[$t(e, i, 0, r)] : n;
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
		return au().domain(e).range(t).unknown(n);
	}, Io.apply(i, arguments);
}
//#endregion
//#region node_modules/d3-scale/src/time.js
function ou(e) {
	return new Date(e);
}
function su(e) {
	return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function cu(e, t, n, r, i, a, o, s, c, l) {
	var u = ll(), d = u.invert, f = u.domain, p = l(".%L"), m = l(":%S"), h = l("%I:%M"), g = l("%I %p"), _ = l("%a %d"), v = l("%b %d"), y = l("%B"), b = l("%Y");
	function x(e) {
		return (c(e) < e ? p : s(e) < e ? m : o(e) < e ? h : a(e) < e ? g : r(e) < e ? i(e) < e ? _ : v : n(e) < e ? y : b)(e);
	}
	return u.invert = function(e) {
		return new Date(d(e));
	}, u.domain = function(e) {
		return arguments.length ? f(Array.from(e, su)) : f().map(ou);
	}, u.ticks = function(t) {
		var n = f();
		return e(n[0], n[n.length - 1], t ?? 10);
	}, u.tickFormat = function(e, t) {
		return t == null ? x : l(t);
	}, u.nice = function(e) {
		var n = f();
		return (!e || typeof e.range != "function") && (e = t(n[0], n[n.length - 1], e ?? 10)), e ? f(Rl(n, e)) : u;
	}, u.copy = function() {
		return sl(u, cu(e, t, n, r, i, a, o, s, c, l));
	}, u;
}
function lu() {
	return Io.apply(cu(nr, rr, Wt, Ht, Dt, Ct, xt, yt, vt, Ti).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
//#endregion
//#region node_modules/d3-scale/src/utcTime.js
function uu() {
	return Io.apply(cu(er, tr, Gt, Ut, Ft, wt, St, bt, vt, Di).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
//#endregion
//#region node_modules/d3-scale/src/sequential.js
function du(e, t) {
	return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
//#endregion
//#region node_modules/d3-scale/src/diverging.js
function fu() {
	var e = 0, t = .5, n = 1, r = 1, i, a, o, s, c, l = nl, u, d = !1, f;
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
			return arguments.length ? ([n, r, i] = t, l = Zc(e, [
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
	return p.range = m(Oc), p.rangeRound = m(kc), p.unknown = function(e) {
		return arguments.length ? (f = e, p) : f;
	}, function(l) {
		return u = l, i = l(e), a = l(t), o = l(n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p;
	};
}
function pu() {
	var e = Fl(fu()(nl));
	return e.copy = function() {
		return du(e, pu());
	}, Lo.apply(e, arguments);
}
function mu() {
	var e = ql(fu()).domain([
		.1,
		1,
		10
	]);
	return e.copy = function() {
		return du(e, mu()).base(e.base());
	}, Lo.apply(e, arguments);
}
function hu() {
	var e = Zl(fu());
	return e.copy = function() {
		return du(e, hu()).constant(e.constant());
	}, Lo.apply(e, arguments);
}
function gu() {
	var e = nu(fu());
	return e.copy = function() {
		return du(e, gu()).exponent(e.exponent());
	}, Lo.apply(e, arguments);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/color.js
var _u = (e, t, n) => {
	let r = a(e.cloneNode(!0));
	return r.attr("id", n).insert("rect", ":first-child").attr("width", r.attr("width")).attr("height", r.attr("height")).style("fill", t), {
		id: n,
		node: r.node()
	};
};
function vu(e) {
	let t = W.colorPattern, { body: n } = E, r = n[t];
	if (!r) {
		let i = e.classed(Ii.colorPattern, !0).style("background-image");
		e.classed(Ii.colorPattern, !1), i.indexOf(";") > -1 && (r = i.replace(/url[^#]*|["'()]|(\s|%20)/g, "").split(";").map((e) => e.trim().replace(/[\"'\s]/g, "")).filter(Boolean), n[t] = r);
	}
	return r;
}
var yu = [
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
], bu = {
	generateColor() {
		let e = this, { $el: t, config: n } = e, r = [], i = n.area_linearGradient || n.bar_linearGradient || n.point_radialGradient, a = I(n.color_pattern) ? n.color_pattern : zo(vu(t.chart) || yu).range(), o = a;
		if (M(n.color_tiles)) {
			let t = n.color_tiles.bind(e.api)(), r = a.map((n, r) => {
				let i = n.replace(/[#\(\)\s,]/g, ""), a = `${e.state.datetimeId}-pattern-${i}-${r}`;
				return _u(t[r % t.length], n, a);
			});
			a = r.map((e) => `url(#${e.id})`), e.patterns = r;
		}
		return function(s) {
			let c = n.data_colors, l = n.data_color, u = s.id || s.data?.id || s, d = e.isTypeOf(u, [
				"line",
				"spline",
				"step"
			]) || !n.data_types[u], f;
			if (M(c[u])) f = c[u].bind(e.api)(s);
			else if (c[u]) f = c[u];
			else {
				let e = r.indexOf(u);
				e < 0 && (r.push(u), e = r.length - 1), f = d ? o[e % o.length] : a[e % a.length], c[u] = f;
			}
			if (f = M(l) ? l.call(e.api, f, s) : f, i && t.defs) {
				let t = e.$el.defs.selectAll(`[id$='-gradient${e.getTargetSelectorSuffix(u)}'] stop`), n;
				t.each(function(e, t) {
					n = t === 0 ? this.style.stopColor : this.style.stopColor === n;
				}), n === !0 && t.attr("stop-color", f);
			}
			return f;
		};
	},
	generateLevelColor() {
		let { config: e } = this, t = e.color_pattern, n = e.color_threshold, r = n.unit === "value", i = n.max || 100, a = n.values && n.values.length ? n.values : [];
		return I(n) ? function(e) {
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
			N(e) ? a.push("") : R(e) ? a = Object.keys(e) : M(e) && (a = n.mapToTargetIds()), a.forEach((a) => {
				let o = `${i.datetimeId}-labels-bg${n.getTargetSelectorSuffix(a)}${N(e) ? n.getTargetSelectorSuffix(e) : ""}`, s = Ae(a === "" ? e : e?.[a] || "");
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
					let [i, a, o] = t, s = M(a) ? a.bind(e.api)(n.id) : a;
					c.defs && c.defs.append("stop").attr("offset", i).attr("stop-color", s || r).attr("stop-opacity", o);
				});
			}
		});
	},
	setOverColor(e, t) {
		let n = this, { config: r, $el: { main: i } } = n, a = r.color_onover, o = e ? a : n.color;
		R(o) ? o = ({ id: e }) => e in a ? a[e] : n.color(e) : N(o) ? o = () => a : M(a) && (o = o.bind(n.api)), i.selectAll(R(t) ? `.${Ai.arc}${n.getTargetSelectorSuffix(t.id)}` : `.${qi.shape}-${t}`).style("fill", o);
	}
}, xu = 0, Su = 0, Cu = 0, wu = 1e3, Tu, Eu, Du = 0, Ou = 0, ku = 0, Au = typeof performance == "object" && performance.now ? performance : Date, ju = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function Mu() {
	return Ou ||= (ju(Nu), Au.now() + ku);
}
function Nu() {
	Ou = 0;
}
function Pu() {
	this._call = this._time = this._next = null;
}
Pu.prototype = Fu.prototype = {
	constructor: Pu,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? Mu() : +n) + (t == null ? 0 : +t), !this._next && Eu !== this && (Eu ? Eu._next = this : Tu = this, Eu = this), this._call = e, this._time = n, Bu();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, Bu());
	}
};
function Fu(e, t, n) {
	var r = new Pu();
	return r.restart(e, t, n), r;
}
function Iu() {
	Mu(), ++xu;
	for (var e = Tu, t; e;) (t = Ou - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--xu;
}
function Lu() {
	Ou = (Du = Au.now()) + ku, xu = Su = 0;
	try {
		Iu();
	} finally {
		xu = 0, zu(), Ou = 0;
	}
}
function Ru() {
	var e = Au.now(), t = e - Du;
	t > wu && (ku -= t, Du = e);
}
function zu() {
	for (var e, t = Tu, n, r = Infinity; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Tu = n);
	Eu = e, Bu(r);
}
function Bu(e) {
	xu || (Su &&= clearTimeout(Su), e - Ou > 24 ? (e < Infinity && (Su = setTimeout(Lu, e - Au.now() - ku)), Cu &&= clearInterval(Cu)) : (Cu ||= (Du = Au.now(), setInterval(Ru, wu)), xu = 1, ju(Lu)));
}
//#endregion
//#region node_modules/d3-timer/src/timeout.js
function Vu(e, t, n) {
	var r = new Pu();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
//#endregion
//#region node_modules/d3-transition/src/transition/schedule.js
var Hu = mo("start", "end", "cancel", "interrupt"), Uu = [];
function Wu(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	Ju(e, n, {
		name: t,
		index: r,
		group: i,
		on: Hu,
		tween: Uu,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: 0
	});
}
function Gu(e, t) {
	var n = qu(e, t);
	if (n.state > 0) throw Error("too late; already scheduled");
	return n;
}
function Ku(e, t) {
	var n = qu(e, t);
	if (n.state > 3) throw Error("too late; already running");
	return n;
}
function qu(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function Ju(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = Fu(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay);
	}
	function o(a) {
		var l, u, d, f;
		if (n.state !== 1) return c();
		for (l in r) if (f = r[l], f.name === n.name) {
			if (f.state === 3) return Vu(o);
			f.state === 4 ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = 6, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete r[l]);
		}
		if (Vu(function() {
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
function Yu(e, t) {
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
function Xu(e) {
	return this.each(function() {
		Yu(this, e);
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/tween.js
function Zu(e, t) {
	var n, r;
	return function() {
		var i = Ku(this, e), a = i.tween;
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
function Qu(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = Ku(this, e), o = a.tween;
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
function $u(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = qu(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? Zu : Qu)(n, e, t));
}
function ed(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = Ku(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return qu(e, r).value[t];
	};
}
//#endregion
//#region node_modules/d3-transition/src/transition/interpolate.js
function td(e, t) {
	var n;
	return (typeof t == "number" ? xc : t instanceof ls ? mc : (n = ls(t)) ? (t = n, mc) : Dc)(e, t);
}
//#endregion
//#region node_modules/d3-transition/src/transition/attr.js
function nd(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function rd(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function id(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function ad(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function od(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function sd(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function cd(e, t) {
	var n = v(e), r = n === "transform" ? Rc : td;
	return this.attrTween(e, typeof t == "function" ? (n.local ? sd : od)(n, r, ed(this, "attr." + e, t)) : t == null ? (n.local ? rd : nd)(n) : (n.local ? ad : id)(n, r, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/attrTween.js
function ld(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function ud(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function dd(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && ud(e, i)), n;
	}
	return i._value = t, i;
}
function fd(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && ld(e, i)), n;
	}
	return i._value = t, i;
}
function pd(e, t) {
	var n = "attr." + e;
	if (arguments.length < 2) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != "function") throw Error();
	var r = v(e);
	return this.tween(n, (r.local ? dd : fd)(r, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/delay.js
function md(e, t) {
	return function() {
		Gu(this, e).delay = +t.apply(this, arguments);
	};
}
function hd(e, t) {
	return t = +t, function() {
		Gu(this, e).delay = t;
	};
}
function gd(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? md : hd)(t, e)) : qu(this.node(), t).delay;
}
//#endregion
//#region node_modules/d3-transition/src/transition/duration.js
function _d(e, t) {
	return function() {
		Ku(this, e).duration = +t.apply(this, arguments);
	};
}
function vd(e, t) {
	return t = +t, function() {
		Ku(this, e).duration = t;
	};
}
function yd(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? _d : vd)(t, e)) : qu(this.node(), t).duration;
}
//#endregion
//#region node_modules/d3-transition/src/transition/ease.js
function bd(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		Ku(this, e).ease = t;
	};
}
function xd(e) {
	var t = this._id;
	return arguments.length ? this.each(bd(t, e)) : qu(this.node(), t).ease;
}
//#endregion
//#region node_modules/d3-transition/src/transition/easeVarying.js
function Sd(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		Ku(this, e).ease = n;
	};
}
function Cd(e) {
	if (typeof e != "function") throw Error();
	return this.each(Sd(this._id, e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/filter.js
function wd(e) {
	typeof e != "function" && (e = s(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, c = r[i] = [], l, u = 0; u < o; ++u) (l = a[u]) && e.call(l, l.__data__, u, a) && c.push(l);
	return new $d(r, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/merge.js
function Td(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new $d(o, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/on.js
function Ed(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function Dd(e, t, n) {
	var r, i, a = Ed(t) ? Gu : Ku;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function Od(e, t) {
	var n = this._id;
	return arguments.length < 2 ? qu(this.node(), n).on.on(e) : this.each(Dd(n, e, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/remove.js
function kd(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function Ad() {
	return this.on("end.remove", kd(this._id));
}
//#endregion
//#region node_modules/d3-transition/src/transition/select.js
function jd(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = y(e));
	for (var r = this._groups, i = r.length, a = Array(i), o = 0; o < i; ++o) for (var s = r[o], c = s.length, l = a[o] = Array(c), u, d, f = 0; f < c; ++f) (u = s[f]) && (d = e.call(u, u.__data__, f, s)) && ("__data__" in u && (d.__data__ = u.__data__), l[f] = d, Wu(l[f], t, n, f, l, qu(u, n)));
	return new $d(a, this._parents, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selectAll.js
function Md(e) {
	var n = this._name, r = this._id;
	typeof e != "function" && (e = t(e));
	for (var i = this._groups, a = i.length, o = [], s = [], c = 0; c < a; ++c) for (var l = i[c], u = l.length, d, f = 0; f < u; ++f) if (d = l[f]) {
		for (var p = e.call(d, d.__data__, f, l), m, h = qu(d, r), g = 0, _ = p.length; g < _; ++g) (m = p[g]) && Wu(m, n, r, g, p, h);
		o.push(p), s.push(d);
	}
	return new $d(o, s, n, r);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selection.js
var Nd = d.prototype.constructor;
function Pd() {
	return new Nd(this._groups, this._parents);
}
//#endregion
//#region node_modules/d3-transition/src/transition/style.js
function Fd(e, t) {
	var n, r, i;
	return function() {
		var a = c(this, e), o = (this.style.removeProperty(e), c(this, e));
		return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o);
	};
}
function Id(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function Ld(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = c(this, e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Rd(e, t, n) {
	var r, i, a;
	return function() {
		var o = c(this, e), s = n(this), l = s + "";
		return s ?? (l = s = (this.style.removeProperty(e), c(this, e))), o === l ? null : o === r && l === i ? a : (i = l, a = t(r = o, s));
	};
}
function zd(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = Ku(this, e), l = c.on, u = c.value[a] == null ? s ||= Id(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function Bd(e, t, n) {
	var r = (e += "") == "transform" ? Lc : td;
	return t == null ? this.styleTween(e, Fd(e, r)).on("end.style." + e, Id(e)) : typeof t == "function" ? this.styleTween(e, Rd(e, r, ed(this, "style." + e, t))).each(zd(this._id, e)) : this.styleTween(e, Ld(e, r, t), n).on("end.style." + e, null);
}
//#endregion
//#region node_modules/d3-transition/src/transition/styleTween.js
function Vd(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function Hd(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && Vd(e, a, n)), r;
	}
	return a._value = t, a;
}
function Ud(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, Hd(e, t, n ?? ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/text.js
function Wd(e) {
	return function() {
		this.textContent = e;
	};
}
function Gd(e) {
	return function() {
		var t = e(this);
		this.textContent = t ?? "";
	};
}
function Kd(e) {
	return this.tween("text", typeof e == "function" ? Gd(ed(this, "text", e)) : Wd(e == null ? "" : e + ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/textTween.js
function qd(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function Jd(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && qd(r)), t;
	}
	return r._value = e, r;
}
function Yd(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, Jd(e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/transition.js
function Xd() {
	for (var e = this._name, t = this._id, n = tf(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = qu(c, t);
		Wu(c, e, n, l, o, {
			time: u.time + u.delay + u.duration,
			delay: 0,
			duration: u.duration,
			ease: u.ease
		});
	}
	return new $d(r, this._parents, e, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/end.js
function Zd() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = Ku(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/index.js
var Qd = 0;
function $d(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function ef(e) {
	return d().transition(e);
}
function tf() {
	return ++Qd;
}
var nf = d.prototype;
$d.prototype = ef.prototype = {
	constructor: $d,
	select: jd,
	selectAll: Md,
	selectChild: nf.selectChild,
	selectChildren: nf.selectChildren,
	filter: wd,
	merge: Td,
	selection: Pd,
	transition: Xd,
	call: nf.call,
	nodes: nf.nodes,
	node: nf.node,
	size: nf.size,
	empty: nf.empty,
	each: nf.each,
	on: Od,
	attr: cd,
	attrTween: pd,
	style: Bd,
	styleTween: Ud,
	text: Kd,
	textTween: Yd,
	remove: Ad,
	tween: $u,
	delay: gd,
	duration: yd,
	ease: xd,
	easeVarying: Cd,
	end: Zd,
	[Symbol.iterator]: nf[Symbol.iterator]
};
//#endregion
//#region node_modules/d3-ease/src/cubic.js
function rf(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region node_modules/d3-transition/src/selection/transition.js
var af = {
	time: null,
	delay: 0,
	duration: 250,
	ease: rf
};
function of(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function sf(e) {
	var t, n;
	e instanceof $d ? (t = e._id, e = e._name) : (t = tf(), (n = af).time = Mu(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && Wu(c, e, t, l, o, n || of(c, t));
	return new $d(r, this._parents, e, t);
}
d.prototype.interrupt = Xu, d.prototype.transition = sf;
//#endregion
//#region node_modules/d3-brush/src/brush.js
var { abs: cf, max: lf, min: uf } = Math;
["w", "e"].map(df), ["n", "s"].map(df), [
	"n",
	"w",
	"e",
	"s",
	"nw",
	"ne",
	"sw",
	"se"
].map(df);
function df(e) {
	return { type: e };
}
function ff(e) {
	var t = e.__brush;
	return t ? t.dim.output(t.selection) : null;
}
//#endregion
//#region node_modules/billboard.js/dist-esm/module/util/brush.js
function pf(e) {
	let { event: t, $el: n } = e, r = n.subchart.main || n.main, i;
	return t && t.type === "brush" ? i = t.selection : r && (i = r.select(".bb-brush").node()) && (i = ff(i)), i;
}
function mf(e) {
	let t = pf(e);
	return !t || t[0] === t[1];
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/domain.js
function hf(e, t) {
	return t.map((t) => {
		let { values: n } = t, r = n[0], i = n[n.length - 1], a = r ? e.getXCacheKey?.(r.x) ?? r.x : "", o = i ? e.getXCacheKey?.(i.x) ?? i.x : "";
		return `${t.id}:${n.length}:${a}:${o}`;
	}).join("|");
}
function gf(e, t) {
	let n = e.data?.targets;
	if (!n) return !1;
	for (let e = 0; e < t.length; e++) {
		let r = t[e], i = n.find((e) => e.id === r.id);
		if (!i || i.values !== r.values) return !1;
	}
	return !0;
}
function _f(e, t) {
	I(t) && ((e.min === void 0 || t < e.min) && (e.min = t), (e.max === void 0 || t > e.max) && (e.max = t));
}
function vf(e, t) {
	for (let n = 0; n < t.length; n++) _f(e, t[n]);
}
function yf(e, t) {
	let n = {
		min: void 0,
		max: void 0
	}, r = e.state.hasAxis;
	for (let i = 0; i < t.length; i++) {
		let a = t[i], o = e.isCandlestickType?.(a), { values: s } = a;
		for (let t = 0; t < s.length; t++) {
			let i = s[t], a = i.value;
			(j(a) || a === null) && (a !== null && o && (a = Array.isArray(a) ? a.slice(0, 4) : [
				a.open,
				a.high,
				a.low,
				a.close
			]), Array.isArray(a) ? vf(n, a) : R(a) && "high" in a ? vf(n, Object.values(a)) : e.isBubbleZType?.(i) ? _f(n, r && e.getBubbleZData(a, "y")) : _f(n, a));
		}
	}
	return [n.min, n.max];
}
function bf(e, t) {
	let n;
	for (let r = 0; r < e.length; r++) {
		let { values: i } = e[r];
		for (let e = 0; e < i.length; e++) {
			let { x: r } = i[e];
			I(r) && (n === void 0 || (t === "min" ? r < n : r > n)) && (n = r);
		}
	}
	return n;
}
var xf = {
	getYDomainMinMaxBoth(e) {
		let t = this, { axis: n, cache: r, config: i, state: a } = t, o = gf(t, e) ? `${W.domainMinMax}_y_${hf(t, e)}` : null, s = o && r.get(o);
		if (s && s.generation === a.dataGeneration) return s.value;
		let c = i.data_groups, l = t.mapToIds(e), u = Qe(l), d;
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
			for (let e in s) p.push(We("min", s[e])), m.push(We("max", f[e]));
			d = [We("min", p), We("max", m)];
		} else d = yf(t, e);
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
	getYDomain(e, t, n) {
		let r = this, { axis: i, config: a, scale: o } = r, s = `axis_${t}`;
		if (r.isStackNormalized() && e.filter((e) => i.getId(e.id) === t).map((e) => e.id).some((e) => r.isGrouped(e))) return [0, 100];
		let c = o?.[t] && o[t].type === "log", l = e.filter((e) => i.getId(e.id) === t), u = n ? r.filterByXDomain(l, n) : l;
		if (u.length === 0) return r.isHiddenTargetWithYDomain(t) ? o[t].domain() : t === "y2" ? o.y.domain() : r.getYDomain(e, "y2", n);
		let d = a[`${s}_min`], f = a[`${s}_max`], p = a[`${s}_center`], m = a[`${s}_inverted`], h = r.hasDataLabel() && a.axis_rotated, g = r.hasDataLabel() && !a.axis_rotated, [_, v] = r.getYDomainMinMaxBoth(u), y = _, x = v, C = [
			b.BAR,
			b.BUBBLE,
			b.SCATTER,
			...S.Line
		].some((e) => {
			let t = e.indexOf("area") > -1 ? "area" : e;
			return r.hasType(e, u, !0) && a[`${t}_zerobased`];
		});
		y = j(d) ? d : j(f) ? y <= f ? y : f - 10 : y, x = j(f) ? f : j(d) ? d <= x ? x : d + 10 : x, isNaN(y) && (y = 0), isNaN(x) && (x = y), y === x && (y < 0 ? x = 0 : y = 0);
		let w = y >= 0 && x >= 0, T = y <= 0 && x <= 0;
		(j(d) && w || j(f) && T) && (C = !1), C && (w && (y = 0), T && (x = 0));
		let E = Math.abs(x - y), D = {
			top: E * .1,
			bottom: E * .1
		};
		if (F(p)) {
			let e = Math.max(Math.abs(y), Math.abs(x));
			x = p + e, y = p - e;
		}
		if (h) {
			let e = ie(o.y.range()), t = r.getDataLabelLength(y, x, "width").map((t) => {
				let n = t / e;
				return isFinite(n) ? n : 0;
			});
			["bottom", "top"].forEach((e, n) => {
				D[e] += E * (t[n] / (1 - t[0] - t[1]));
			});
		} else if (g) {
			let e = r.getDataLabelLength(y, x, "height");
			["bottom", "top"].forEach((t, n) => {
				D[t] += r.convertPixelToScale("y", e[n], E);
			});
		}
		D = r.getResettedPadding(D);
		let O = a[`${s}_padding`];
		I(O) && ["bottom", "top"].forEach((e) => {
			D[e] = i.getPadding(O, e, D[e], E);
		}), C && (w && (D.bottom = y), T && (D.top = -x));
		let k = c ? [y, x].map((e) => e < 0 ? 0 : e) : [y - D.bottom, x + D.top];
		return m ? k.reverse() : k;
	},
	getXDomainMinMax(e, t) {
		let n = this, { cache: r, state: i } = n, a = n.config[`axis_x_${t}`], o = gf(n, e) ? `${W.domainMinMax}_x_${t}_${hf(n, e)}` : null, s = o && r.get(o), c = s?.generation === i.dataGeneration ? s.value : void 0;
		c === void 0 && (c = bf(e, t), o && r.add(o, {
			generation: i.dataGeneration,
			value: c
		}));
		let l = R(a) ? a.value : a;
		return l = F(l) && n.axis?.isTimeSeries() ? Ye.bind(this)(l) : l, R(a) && a.fit && (t === "min" && l < c || t === "max" && l > c) && (l = void 0), F(l) ? l : c;
	},
	getXDomainPadding(e, t) {
		let n = this, { axis: r, config: i } = n, a = i.axis_x_padding, o = r.isTimeSeries() && t, s = ie(e), c;
		if (r.isCategorized() || o) c = 0;
		else if (n.hasType("bar")) {
			let e = n.getMaxDataCount();
			c = e > 1 ? s / (e - 1) / 2 : .5;
		} else c = n.getResettedPadding(s * .01);
		let { left: l = c, right: u = c } = P(a) ? {
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
		if (n && (c.domain(i || Ue(a.getXDomain(e), !o.axis_x_inverted)), s.xDomain = c.domain(), l.domain(c.domain()), a.brush?.scale(l)), t) {
			let e = i || !a.brush || mf(a) ? s.xDomain : pf(a).map(l.invert);
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
		return e === "zoom" && (F(n.zoom_x_min) && (a = We("min", [a, n.zoom_x_min])), F(n.zoom_x_max) && (o = We("max", [o, n.zoom_x_max]))), [a, o];
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
function Sf(e, t, n) {
	let { config: r } = e, i = `axis_${t}_tick_format`;
	return (r[i] ? r[i] : e.defaultValueFormat).call(e.api, n);
}
var Cf = {
	yFormat(e) {
		return Sf(this, "y", e);
	},
	y2Format(e) {
		return Sf(this, "y2", e);
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
		return L(e) ? e.join("~") : j(e) ? +e : "";
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
			return L(e) ? t = e.join("~") : R(e) && (t = Object.values(e).join("~")), t;
		}, i = r;
		return M(n.format) ? i = n.format : ae(n.format) && (i = n.format[e] ? n.format[e] === !0 ? r : n.format[e] : () => ""), i.bind(t.api);
	}
}, wf = 10, Tf = 750;
function Ef(e) {
	let t = this, n = t.getDataById(e);
	return t.levelColor ? t.levelColor(n.values[0].value) : t.color(n);
}
function Df(e, t = !0) {
	let { config: n } = this, r = n.data_names[e] ?? e;
	return t && M(n.legend_format) && (r = n.legend_format(r, e === r ? void 0 : e)), r;
}
function Of(e, t) {
	if (!t || t.empty()) return;
	let n = e.$el.legend?.selectAll(`.${H.legendItem}`);
	n && !n.empty() && (t = n);
	let r = [];
	t.each(function(e) {
		r.push({
			id: e,
			node: this
		});
	});
	let i = $e(r, (e) => e.id, (e) => e.node);
	e.cache.add(W.legendItemMap, i);
}
function kf(e) {
	return e.changedTouches?.[0] || e.touches?.[0];
}
function Af(e, t, n) {
	let r = kf(n);
	e.state.legendTouch = r ? {
		id: t,
		x: r.clientX,
		y: r.clientY,
		moved: !1
	} : null;
}
function jf(e, t) {
	let n = e.state.legendTouch, r = n && kf(t);
	r && (n.moved = n.moved || Math.abs(r.clientX - n.x) > wf || Math.abs(r.clientY - n.y) > wf);
}
function Mf(e, t, n) {
	jf(e, n);
	let r = e.state.legendTouch;
	return e.state.legendTouch = null, !!r && r.id === t && !r.moved;
}
function Nf(e, t) {
	e.state.legendLastTouchClickId = t, e.state.legendLastTouchClickTime = Date.now();
}
function Pf(e, t) {
	let { state: n } = e, r = n.legendLastTouchClickId === t && Date.now() - (n.legendLastTouchClickTime || 0) < Tf;
	return r && (n.legendLastTouchClickId = null, n.legendLastTouchClickTime = 0), r;
}
function Ff(e) {
	let t = e.config.interaction_inputType_touch?.preventDefault;
	return { passive: !(te(t) && t) && (!isNaN(t) && t || null) === null };
}
var If = {
	initLegend() {
		let e = this, { config: t, $el: n } = e;
		if (e.legendItemTextBox = {}, e.state.legendHasRendered = !1, e.state.isCanvasMode) {
			t.legend_show ? e.updateHtmlLegend?.() : e.state.hiddenLegendIds = new Set(e.mapToIds(e.data.targets));
			return;
		}
		t.legend_show ? (t.legend_contents_bindto || (n.legend = e.$el.svg.append("g").classed(H.legend, !0).attr("transform", e.getTranslate("legend"))), e.updateLegend()) : e.state.hiddenLegendIds = new Set(e.mapToIds(e.data.targets));
	},
	updateLegend(e, t, n) {
		let r = this, { config: i, state: a, scale: o, $el: s } = r, c = t || {
			withTransform: !1,
			withTransitionForTransform: !1,
			withTransition: !1
		};
		c.withTransition = Me(c, "withTransition", !0), c.withTransitionForTransform = Me(c, "withTransitionForTransform", !0), i.legend_contents_bindto && i.legend_contents_template ? r.updateLegendTemplate() : a.hasTreemap || r.updateLegendElement(e || r.mapToIds(r.data.targets), c), s.legend?.selectAll(`.${H.legendItem}`).classed(H.legendItemHidden, function(e) {
			let t = !r.isTargetToShow(e);
			return t && (this.style.opacity = null), t;
		}), r.updateScales(!1, !o.zoom), r.updateSvgSize(), r.transformAll(c.withTransitionForTransform, n), a.legendHasRendered = !0;
	},
	updateLegendTemplate() {
		let e = this, { config: t, $el: n } = e, r = a(t.legend_contents_bindto), i = t.legend_contents_template;
		if (!r.empty()) {
			let t = e.mapToIds(e.data.targets), a = [], o = "";
			t.forEach((t) => {
				let n = M(i) ? Ae(i.call(e.api, t, e.color(t), e.api.data(t)[0].values)) : Je(i, {
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
			r && a(r).select("line").style("stroke", t);
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
		return e.classed(H.legendItemHidden) ? null : "0.3";
	},
	toggleFocusLegend(e, t) {
		let n = this, { $el: { legend: r }, $T: i } = n, o = n.mapToTargetIds(e);
		r && i(r.selectAll(`.${H.legendItem}`).filter((e) => o.indexOf(e) >= 0).classed(U.legendItemFocused, t)).style("opacity", function() {
			return t ? null : n.opacityForUnfocusedLegend.call(n, a(this));
		});
	},
	revertLegend() {
		let { $el: { legend: e }, $T: t } = this;
		e && t(e.selectAll(`.${H.legendItem}`).classed(U.legendItemFocused, !1)).style("opacity", null);
	},
	showLegend(e) {
		let t = this, { config: n, $el: r, $T: i } = t;
		n.legend_show || (n.legend_show = !0, r.legend ? r.legend.style("visibility", null) : t.initLegend(), !t.state.legendHasRendered && t.updateLegend()), t.removeHiddenLegendIds(e), i(r.legend.selectAll(t.selectorLegends(e)).style("visibility", null)).style("opacity", null);
	},
	hideLegend(e) {
		let t = this, { config: n, $el: { legend: r } } = t;
		n.legend_show && se(e) && (n.legend_show = !1, r?.style("visibility", "hidden")), t.addHiddenLegendIds(e), r?.selectAll(t.selectorLegends(e)).style("opacity", "0").style("visibility", "hidden");
	},
	getLegendItemTextBox(e, t) {
		let n = this, { cache: r, state: i } = n, a, o = W.legendItemTextBox;
		return e && (a = !i.redrawing && r.get(o) || {}, a[e] || (a[e] = n.getTextRect(t, H.legendItem), r.add(o, a)), a = a[e]), a;
	},
	setLegendItem(e) {
		let t = this, { $el: n, api: r, config: i, state: o } = t, s = o.inputType === "touch", c = t.hasType("gauge"), l = i.boost_useCssRule, u = i.legend_item_interaction, d = u.dblclick ? "dblclick" : "click", f = u || M(i.legend_item_onclick), p = s ? Ff(t) : void 0, m = function(e, n) {
			if (!z(i.legend_item_onclick, r, n, !o.hiddenTargetIds.has(n))) {
				let { altKey: t, type: i } = e, s = a(this);
				i === "dblclick" || t ? o.hiddenTargetIds.size && !s.classed(H.legendItemHidden) ? r.show() : (r.hide(), r.show(n)) : (r.toggle(n), s.classed(U.legendItemFocused, !1));
			}
			s && (t.hideTooltip(), t.hideGridFocus?.(!0));
		};
		e.attr("class", function(e) {
			let n = a(this);
			return (!n.empty() && n.attr("class") || "") + t.generateClass(H.legendItem, e);
		}).style("visibility", (e) => t.isLegendToShow(e) ? null : "hidden"), i.interaction_enabled && (l && [
			[`.${H.legendItem}`, "cursor:pointer"],
			[`.${H.legendItem} text`, "pointer-events:none"],
			[`.${H.legendItemPoint} text`, "pointer-events:none"],
			[`.${H.legendItemTile}`, "pointer-events:none"],
			[`.${H.legendItemEvent}`, "fill-opacity:0"]
		].forEach((e) => {
			let [r, i] = e;
			t.setCssRule(!1, r, [i])(n.legend);
		}), e.on(d, f ? function(e, n) {
			s && e.type === "click" && Pf(t, n) || m.call(this, e, n);
		} : null), s && d === "click" && f && e.on("touchstart", function(e, n) {
			Af(t, n, e);
		}, p).on("touchmove", (e) => {
			jf(t, e);
		}, p).on("touchend", function(e, n) {
			Mf(t, n, e) && (Nf(t, n), m.call(this, e, n));
		}, p), !s && e.on("mouseout", u || M(i.legend_item_onout) ? function(e, n) {
			z(i.legend_item_onout, r, n, !o.hiddenTargetIds.has(n)) || (a(this).classed(U.legendItemFocused, !1), c && t.undoMarkOverlapped(t, `.${zi.gaugeValue}`), t.api.revert());
		} : null).on("mouseover", u || M(i.legend_item_onover) ? function(e, n) {
			z(i.legend_item_onover, r, n, !o.hiddenTargetIds.has(n)) || (a(this).classed(U.legendItemFocused, !0), c && t.markOverlapped(n, t, `.${zi.gaugeValue}`), !o.transiting && t.isTargetToShow(n) && r.focus(n));
		} : null), !e.empty() && e.on("click mouseout mouseover") && e.style("cursor", t.getStylePropValue("pointer"))), Of(t, e);
	},
	getLegendItemById(e) {
		let t = this, n = t.cache.get(W.legendItemMap);
		return n && n instanceof Map ? n.get(e) || null : (t.$el.legend?.selectAll(`.${H.legendItem}`).filter((t) => t === e))?.node() || null;
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
		}, f, p, m, h = e.filter((e) => !F(r.data_names[e]) || r.data_names[e] !== null), g = t.withTransition, _ = i.isLegendRight || i.isLegendInset, v = Df.bind(n), y = n.getUpdateLegendPositions(h, u, d, _);
		i.isLegendInset && (u.step = r.legend_inset_step ? r.legend_inset_step : h.length, i.legendStep = u.step), i.isLegendRight ? (f = (e) => u.max.width * d.steps[e], p = (e) => d.margins[d.steps[e]] + d.offsets[e]) : i.isLegendInset ? (f = (e) => u.max.width * d.steps[e] + 10, p = (e) => d.margins[d.steps[e]] + d.offsets[e]) : (f = (e) => d.margins[d.steps[e]] + d.offsets[e], p = (e) => u.max.height * d.steps[e]);
		let b = {
			xText: (e, t) => f(e, t) + 4 + l.width,
			xRect: (e, t) => f(e, t),
			x1Tile: (e, t) => f(e, t) - 2,
			x2Tile: (e, t) => f(e, t) - 2 + l.width,
			yText: (e, t) => p(e, t) + 9,
			yRect: (e, t) => p(e, t) - 5,
			yTile: (e, t) => p(e, t) + 4
		};
		n.generateLegendItem(h, l, y, b, _, v), m = a.select(`.${H.legendBackground} rect`), i.isLegendInset && u.max.width > 0 && m.size() === 0 && (m = a.insert("g", `.${H.legendItem}`).attr("class", H.legendBackground).append("rect")), r.legend_tooltip && a.selectAll("title").data(h).text((e) => v(e, !1)), o(a.selectAll("text").data(h).text((e) => v(e)).each(function(e, t) {
			y(this, e, t);
		}), g).attr("x", b.xText).attr("y", b.yText), o(a.selectAll(`rect.${H.legendItemEvent}`).data(h), g).attr("width", (e) => d.widths[e]).attr("height", (e) => d.heights[e]).attr("x", b.xRect).attr("y", b.yRect), n.updateLegendItemPos(h, g, b), m && o(m, g).attr("height", n.getLegendHeight() - 12).attr("width", u.max.width * (u.step + 1) + 10), i.legendItemWidth = u.max.width, i.legendItemHeight = u.max.height, i.legendStep = u.step;
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
	generateLegendItem(t, n, r, i, a, o) {
		let s = this, { config: c, state: l, $el: { legend: u } } = s, d = c.legend_usePoint, f = c.legend_item_tile_r, p = c.legend_item_tile_type, m = p !== "circle", h = -200, g = u.selectAll(`.${H.legendItem}`).data(t).enter().append("g");
		if (s.setLegendItem(g), c.legend_tooltip && g.append("title").text((e) => e), g.append("text").text((e) => o(e)).each(function(e, t) {
			r(this, e, t);
		}).style("pointer-events", s.getStylePropValue("none")).attr("x", a ? i.xText : h).attr("y", a ? h : i.yText), g.append("rect").attr("class", H.legendItemEvent).style("fill-opacity", s.getStylePropValue("0")).attr("x", a ? i.xRect : h).attr("y", a ? h : i.yRect), d) {
			let t = [], n = s.getValidPointPattern();
			g.append((r) => {
				t.indexOf(r) === -1 && t.push(r);
				let i = n[t.indexOf(r) % n.length];
				return i === "rectangle" && (i = "rect"), E.createElementNS(e.svg, "hasValidPointType" in s && s.hasValidPointType(i) ? i : "use");
			}).attr("class", H.legendItemPoint).style("fill", Ef.bind(s)).style("pointer-events", s.getStylePropValue("none")).attr("href", (e, t, n) => {
				let r = n[t].nodeName.toLowerCase(), i = s.getTargetSelectorSuffix(e);
				return r === "use" ? `#${l.datetimeId}-point${i}` : void 0;
			});
		} else g.append(m ? "line" : p).attr("class", H.legendItemTile).style("stroke", Ef.bind(s)).style("pointer-events", s.getStylePropValue("none")).call((e) => {
			p === "circle" ? e.attr("r", f).style("fill", Ef.bind(s)).attr("cx", a ? i.x2Tile : h).attr("cy", a ? h : i.yTile) : m && e.attr("stroke-width", n.height).attr("x1", a ? i.x1Tile : h).attr("y1", a ? h : i.yTile).attr("x2", a ? i.x2Tile : h).attr("y2", a ? h : i.yTile);
		});
	},
	updateLegendItemPos(e, t, n) {
		let r = this, { config: i, $el: { legend: o }, $T: s } = r, c = i.legend_usePoint, l = i.legend_item_tile_type, u = l !== "circle";
		if (c) {
			let r = o.selectAll(`.${H.legendItemPoint}`).data(e), c = i.legend_item_tile_type !== "circle", l = c ? i.legend_item_tile_width : i.legend_item_tile_r * 2, u = c ? i.legend_item_tile_height : i.legend_item_tile_r * 2, d = l * .75, f = u * .75, p = l / 8, m = u / 8;
			s(r, t).each(function() {
				let e = this.nodeName.toLowerCase(), t = "x", r = "y", i = null, o = null, s = null;
				e === "circle" ? (t = "cx", r = "cy", i = Math.min(d, f) / 2) : e === "rect" && (o = d, s = f);
				let c = a(this).attr("transform", null).attr("x", null).attr("y", null).attr("cx", null).attr("cy", null).attr("r", i).attr("width", o).attr("height", s);
				e === "use" ? c.attr("transform", (e) => `translate(${n.x1Tile(e)} ${n.yTile(e) - u / 2}) scale(${p} ${m})`) : c.attr(t, (e) => n.x1Tile(e) + (l - (o || 0)) / 2).attr(r, (e) => n.yTile(e) - (s || 0) / 2);
			});
		} else s(o.selectAll(`.${H.legendItemTile}`).data(e), t).style("stroke", Ef.bind(r)).call((e) => {
			l === "circle" ? e.attr("cx", (e) => {
				let t = n.x2Tile(e);
				return t - (t - n.x1Tile(e)) / 2;
			}).attr("cy", n.yTile) : u && e.attr("x1", n.x1Tile).attr("y1", n.yTile).attr("x2", n.x2Tile).attr("y2", n.yTile);
		});
	}
}, Lf = {
	redraw(e = {}) {
		let t = this, { config: n, state: r, $el: i } = t, { main: a, treemap: o } = i;
		r.redrawing = !0, r.redrawGeneration++, (r.dirty.data || r.dirty.visibility || e.initializing) && r.dataGeneration++, (e.initializing || r.dirty.size || r.dirty.data || !r.rendered) && t.cache.remove([W.svgLeft]);
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
			}), z(n.onrendered, t.api);
			return;
		}
		d.Legend && n.legend_show ? (e.withTransition = !!f, !o && t.updateLegend(t.mapToIds(t.data.targets), e, h)) : d.Dimension && t.updateDimension(!0), n.data_empty_label_text && a.select(`text.${Yi.text}.${V.empty}`).attr("x", r.width / 2).attr("y", r.height / 2).text(n.data_empty_label_text).style("display", s.length ? "none" : null), t.redrawTitle?.(), r.hasAxis ? (t.axis.redrawAxis(s, d, h, l, u), t.hasGrid?.() && t.updateGrid(), n.regions.length && t.updateRegion?.(), [
			"bar",
			"candlestick",
			"line",
			"area"
		].forEach((e) => {
			let n = Fe(e);
			(/^(line|area)$/.test(e) && t.hasTypeOf(n) || t.hasType(e)) && g && t[`update${n}`](d.TransitionForExit);
		}), i.text && a.selectAll(`.${Ki.selectedCircles}`).filter(t.isBarType.bind(t)).selectAll("circle").remove(), n.interaction_enabled && !l && d.EventRect && (t.redrawEventRect(), t.bindZoomEvent?.())) : (i.arcs && t.redrawArc(f, p, d.Transform), i.radar && t.redrawRadar(), i.polar && t.redrawPolar(), i.funnel && t.redrawFunnel(), o && t.updateTreemap(p)), !r.resizing && !o && (t.hasPointType() || r.hasRadar) ? g && t.updateCircle() : t.hasLegendDefsPoint?.() && t.data.targets.forEach(t.point("create", this)), t.hasDataLabel() && !t.hasArcType(null, ["radar"]) && g && t.updateText(), u && t.updateTypesElements(), t.generateRedrawList(s, l, f, d.Subchart, g), t.updateTooltipOnRedraw(), t.callPluginHook("$redraw", e, f);
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
		}), u = (n || l) && Oa(), d = a.getRedrawList(c, t, l, u), f = () => {
			l && l(), s.redrawing = !1, s._targetsToShow = null, s._cachedDrawShape = null, z(o.onrendered, a.api);
		};
		if (u && d.length) {
			let e = Pa();
			ef().duration(n).each(() => {
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
				let n = Fe(t), a = e.type[t];
				(/^(area|line)$/.test(t) && i.hasTypeOf(n) || i.hasType(t)) && m.push(i[`redraw${n}`](a, r));
			}
			!t && l.main && i.updateGridFocus && m.push(i.updateGridFocus());
		}
		return (!i.hasArcType() || s) && I(a.data_labels) && a.data_labels !== !1 && m.push(i.redrawText(f, p, t, r)), (i.hasPointType() || s) && !i.isPointFocusOnly() && i.redrawCircle && m.push(i.redrawCircle(u, d, r, n)), c && m.push(i.redrawTreemap(r)), m;
	},
	updateAndRedraw(e = {}) {
		let t = this, { config: n, state: r } = t, i;
		e.withTransition = Me(e, "withTransition", !0), e.withTransform = Me(e, "withTransform", !1), e.withLegend = Me(e, "withLegend", !1), e.withUpdateXDomain = !0, e.withUpdateOrgXDomain = !0, e.withTransitionForExit = !1, e.withTransitionForTransform = Me(e, "withTransitionForTransform", e.withTransition), e.withLegend && n.legend_show || (r.hasAxis && (i = t.axis.generateTransitions(e.withTransitionForAxis ? n.transition_duration : 0)), t.updateScales(), t.updateSvgSize(), t.transformAll(e.withTransitionForTransform, i)), t.redraw(e);
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/scale.js
function Rf(e = "linear", t, n) {
	let r = {
		linear: Il,
		log: Ql,
		_log: Jl,
		time: lu,
		utc: uu
	}[e]();
	return r.type = e, /_?log/.test(e) && r.clamp(!0), r.range([t ?? 0, n ?? 1]);
}
var zf = {
	getXScale(e, t, n, r) {
		let i = this, a = i.state.loading !== "append" && i.scale.zoom || Rf(i.axis.getAxisType("x"), e, t);
		return i.getCustomizedXScale(n ? a.domain(n) : a, r);
	},
	getYScale(e, t, n, r, i) {
		let a = this.axis.getAxisType(e);
		if (i && i.type === a) return i.range([t, n]), r && i.domain(r), i;
		let o = Rf(a, t, n);
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
			s.x = Il().rangeRound([e.left, c.width - e.right]), s.y = Il().rangeRound([e.top, c.height - e.bottom]);
		} else n.updateArc?.();
	},
	xx(e) {
		let { config: t, scale: { x: n, zoom: r } } = this, i = t.zoom_enabled && r ? r : n;
		return e ? i(j(e.x) ? e.x : e) : null;
	},
	xv(e) {
		let t = this, { axis: n, config: r, scale: { x: i, zoom: a } } = t, o = r.zoom_enabled && a ? a : i, s = t.getBaseValue(e);
		return n.isTimeSeries() ? s = Ye.call(t, s) : n.isCategorized() && N(s) && (s = r.axis_x_categories.indexOf(s)), o(s);
	},
	yv(e) {
		let t = this, { scale: { y: n, y2: r } } = t;
		return (e.axis && e.axis === "y2" ? r : n)(t.getBaseValue(e));
	},
	subxx(e) {
		return e ? this.scale.subX(e.x) : null;
	}
}, Bf = {
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
		let t = `offset${Fe(e)}`, n = this.$el.chart.node(), r = 0;
		for (; r < 30 && n && n.tagName !== "BODY";) {
			try {
				r = ya(n, !0)[e];
			} catch {
				t in n && (r = n[t]);
			}
			n = n.parentNode;
		}
		let i = E.body[t];
		return r > i && (r = i), r;
	},
	getParentHeight() {
		let e = this.$el.chart.style("height"), t = 0;
		return e && (t = /px$/.test(e) ? parseInt(e, 10) : this.getParentRectValue("height")), t;
	},
	getSvgLeft(e) {
		let t = this, { cache: n, config: r, state: { hasAxis: i }, $el: a } = t;
		if (e) {
			let e = n.get(W.svgLeft);
			if (e !== null) return e;
		}
		let o = r.axis_rotated, s = o || !o && !r.axis_y_inner, c = o ? Mi.axisX : Mi.axisY, l = a.main.select(`.${c}`).node(), u = i && r[`axis_${o ? "x" : "y"}_label`], d = i && (N(u) || N(u.text) || /^inner-/.test(u?.position)) ? a.main.select(`.${c}-label`) : null, f = d && !d.empty() ? d.node() : null, p = !e, m = {
			label: f ? ya(f, p) : null,
			leftAxis: l && s ? ya(l, p) : null,
			chart: ya(a.chart.node(), p)
		}, h = m.label?.left ?? 0, g = m.leftAxis ?? { right: 0 }, _ = m.chart.left + h, v = t.hasArcType(), y = g.right - _ - (v ? 0 : t.getCurrentPaddingByDirection("left", e)), b = y > 0 ? y : 0;
		return n.add(W.svgLeft, b), b;
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
			let t = s.select(`.${Ji.brush} .overlay`), r = {
				width: 0,
				height: 0
			};
			t.size() && (r.width = +t.attr("width"), r.height = +t.attr("height")), s.selectAll([`#${n.id}`, `#${n.idGrid}`]).select("rect").attr("width", a).attr("height", o), s.select(`#${n.idXAxis}`).select("rect").call(e.setXAxisClipPath.bind(e)), s.select(`#${n.idYAxis}`).select("rect").call(e.setYAxisClipPath.bind(e)), n.idSubchart && s.select(`#${n.idSubchart}`).select("rect").attr("width", a).attr("height", r.height);
		}
	},
	getCurrentPaddingByDirection(e, t = !1, n = !1) {
		let r = this, { config: i, $el: a, state: { hasAxis: o, isCanvasMode: s } } = r, c = i.axis_rotated, l = i.padding?.mode === "fit", u = P(i[`padding_${e}`]) ? i[`padding_${e}`] : void 0, d = o ? {
			top: c ? "y2" : null,
			bottom: c ? "y" : "x",
			left: c ? "x" : "y",
			right: c ? null : "y2"
		}[e] : null, f = /^(left|right)$/.test(e), p = d && i[`axis_${d}_inner`], m = d && i[`axis_${d}_show`], h = d ? i[`axis_${d}_axes`].length : 0, g = d ? f ? r.getAxisWidthByAxisId(d, t) : r.getHorizontalAxisHeight(d) : 0, _ = 0;
		!l && f && (g = ne(g));
		let v = o && f && (p || ee(u) && !m) ? 0 : l ? (m ? g : 0) + (u ?? 0) : ee(u) ? g : u;
		return f && o ? (d && (l || p) && i[`axis_${d}_label`].text && (v += r.axis.getAxisLabelPosition(d).isOuter ? 20 : 0), e === "right" ? (v += c ? !l && ee(u) ? 10 : 2 : !m || p ? l ? 2 : 1 : 0, v += n ? r.axis.getXAxisTickTextY2Overflow(20) : 0) : e === "left" && c && ee(u) && (v = i.axis_x_show ? l ? g : Math.max(g, 40) : 1)) : e === "top" ? ((a.title && a.title.node() || s && i.title_text) && (v += r.getTitlePadding()), _ = c && !p ? h : 0) : e === "bottom" && o && c && !m && (v += 1), v + g * h - _;
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
		let { config: t } = this, n = P(e), r = n ? 0 : {};
		return t.padding === !1 ? !n && Object.keys(e).forEach((n) => {
			r[n] = !se(t.data_labels) && t.data_labels !== !1 && n === "top" ? e[n] : 0;
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
			let e = t.hasType("gauge"), i = n.legend_show && r.isLegendRight, a = (r.hasRadar && t.cache.get(W.radarTextWidth)) ?? 0;
			r.arcWidth = r.width - (i ? u.width + 10 : 0) - a, r.arcHeight = r.height - (i && !e ? 0 : 10), n.arc_rangeText_values?.length && (e ? (r.arcWidth -= 25, r.arcHeight -= 10, r.margin.left += 10) : (r.arcHeight -= 20, r.margin.top += 10)), e && !n.gauge_fullCircle && (r.arcHeight += r.height - t.getPaddingBottomForGauge()), t.updateRadius?.();
		}
		r.isLegendRight && o && (r.margin3.left = r.arcWidth / 2 + r.radiusExpanded * 1.1);
	}
}, Vf = {
	setCssRule(e, t, n, r) {
		let i = this, { config: a, state: { cssRule: o, style: s } } = i;
		return a.boost_useCssRule ? (a) => {
			a.each((a) => {
				let c = r && r?.call(i, a), l = `${e ? `.${qi.shapes + i.getTargetSelectorSuffix(a.id)}` : ""}${t}`;
				t in o && s.sheet.deleteRule(o[l]), i.state.cssRule[l] = xa(s, l, n.filter(Boolean).map((e) => N(c) && e.indexOf(":") === -1 ? `${e}: ${c}` : e || ""));
			});
		} : () => {};
	},
	getStylePropValue(e) {
		let { config: { boost_useCssRule: t } } = this;
		return t ? null : M(e) ? e.bind(this) : e;
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/text.util.js
function Hf(e) {
	let t = "middle";
	return e > 0 && e <= 170 ? t = "end" : e > 190 && e <= 360 && (t = "start"), t;
}
function Uf(e, t, n, r, i) {
	let a = this, { value: o } = e, s = a.isCandlestickType(e), c = P(o) && o < 0 || s && !a.getCandlestickData(e)?._isUp, { x: l, y: u } = t;
	return r ? n === "start" ? (l += c ? 0 : 8, u += 4) : n === "middle" ? (l += 8, u -= 8) : n === "end" && (c && (l -= 8), u += 4) : (n === "start" ? (l += 4, c && (u += 16)) : n === "middle" ? u -= 8 : n === "end" && (l -= 4, c && (u += 16)), i && (u += c ? -17 : s ? 13 : 7)), {
		x: l,
		y: u
	};
}
function Wf(e, t) {
	let n = this.config.data_labels_position, { id: r, index: i, value: a } = e;
	return (M(n) ? n.bind(this.api)(t, a, r, i, this.$el.text) : (r in n ? n[r] : n)[t]) ?? 0;
}
function Gf(e, t, n) {
	let { config: r, $T: i } = this, o = r.axis_rotated, { border: { padding: s = "3 5", radius: c = 10, stroke: l = "#000", strokeWidth: u = 1, fill: d = "none" } } = r.data_labels, f = Xe(s), p = r.data_labels.border !== !0, m = ba(e), h = a(e.previousElementSibling);
	(h.empty() || h.node()?.tagName !== "rect" || !h.attr("class")?.includes(n)) && (h = a(e.parentNode).insert("rect", () => e).attr("class", `${Yi.textBorderRect} ${n}`).attr("width", m.width + (p ? f.left + f.right : 0)).attr("height", m.height + (p ? f.top + f.bottom : 0)), p && h.style("fill", d).style("stroke", l).style("stroke-width", `${u}px`).attr("rx", c).attr("ry", c)), i(h).attr("x", t.x - (p ? f.left : 0) - (o ? 0 : m.width / 2)).attr("y", t.y - (p ? f.top : 0) - m.height / 4 * 3.2);
}
function Kf(e = 0, t) {
	let { config: n } = this;
	return e >= (n[`${t}_label_threshold`] || 0);
}
function qf() {
	let e = this, { $el: { text: t }, config: n } = e;
	(e.state.arcWidth ? e.getArcLabelConfig("image") : n.data_labels.image) && t.filter(function() {
		let e = this.previousElementSibling;
		return !e || e.tagName !== "image" || !e.classList.contains(Yi.textLabelImage);
	}).each(function(t) {
		let n = Jf.call(e, t);
		if (!n) return;
		let { url: r, width: i, height: o, pos: s } = n;
		r && a(this.parentNode)?.insert("image", `${this.getAttribute("class")?.replace(/(?:^(.)|\s)/g, ".$1") ?? "text"}`).style("opacity", "0").attr("href", (e) => Je(r, { ID: "id" in e ? e.id : e.data.id })).attr("class", Yi.textLabelImage).style("pointer-events", "none").attr("width", i).attr("height", o).attr("transform", s ? `translate(${s.x ?? 0} ${s.y ?? 0})` : null);
	});
}
function Jf(e) {
	let t = this, { config: n, state: r } = t, i = r.arcWidth ? t.getArcLabelConfig("image") : n.data_labels.image;
	if (M(i)) return i.call(t.api, e.value, e.id, e.index) ?? {
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
function Yf(e, t, n) {
	let r = this, { config: i, state: { arcWidth: o, hasTreemap: s } } = r, c = i.axis_rotated, l = a(e.previousElementSibling), u = (e) => {
		let t = e.style.opacity !== "0" && e.style.fillOpacity !== "0";
		return (o ? e.textContent : t) && this.previousElementSibling?.tagName !== "image";
	};
	if (!l.empty() && l.node()?.tagName === "image") {
		let i = n || ya(e), a = l.attr("width") / 2, o = l.attr("height") / 2, d = t.x - a, f = t.y - o - i.height / 2;
		c ? t.x += a : (s && (d = -a, f = -(o * 2 + i.height)), r.hasType("pie") || r.hasType("polar") || (t.y += o)), r.$T(l).style("opacity", u(e) ? null : "0").attr("x", d).attr("y", f);
	}
}
function Xf(e) {
	return $e(e, (e) => e, (e) => ba(e, !0));
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/text.js
var Zf = {
	opacityForText(e) {
		let t = this;
		return t.isBarType(e) && !Kf.call(t, Math.abs(t.getRatio("bar", e)), "bar") ? "0" : t.hasDataLabel() ? null : "0";
	},
	initText() {
		let { $el: e } = this;
		e.main.select(`.${V.chart}`).append("g").attr("class", Yi.chartTexts).style("pointer-events", e.funnel || e.treemap ? "none" : null);
	},
	updateTargetsForText(e) {
		let t = this, n = t.getChartClass("Text"), r = t.getClass("texts", "id"), i = t.classFocus.bind(t);
		t.$el.main.select(`.${Yi.chartTexts}`).selectAll(`.${Yi.chartText}`).data(t.filterNullish(e)).attr("class", (e) => `${n(e)}${i(e)}`.trim()).enter().append("g").style("opacity", "0").attr("class", n).call(t.setCssRule(!0, ` .${Yi.text}`, ["fill", "pointer-events:none"], t.updateTextColor)).append("g").attr("class", r);
	},
	updateText() {
		let e = this, { $el: t, $T: n, config: r, axis: i } = e, o = e.getClass("text", "index"), s = r.data_labels.centered, c = t.main.selectAll(`.${Yi.texts}`).selectAll(`.${Yi.text}`).data(e.labelishData.bind(e));
		n(c.exit()).style("fill-opacity", "0").remove(), t.text = c.enter().append("text").merge(c).attr("class", o).attr("text-anchor", (t) => {
			let n = r[`axis_${i?.getId(t.id)}_inverted`] ? t.value > 0 : t.value < 0;
			if (e.isCandlestickType(t)) n = !e.getCandlestickData(t)?._isUp;
			else if (e.isTreemapType(t)) return s ? "middle" : "start";
			return r.axis_rotated ? n ? "end" : "start" : "middle";
		}).style("fill", e.getStylePropValue(e.updateTextColor)).style("fill-opacity", "0").each(function(t, n, r) {
			let i = a(this), { value: o } = t;
			if (e.isBubbleZType(t)) o = e.getBubbleZData(o, "z");
			else if (e.isCandlestickType(t)) {
				let n = e.getCandlestickData(t);
				n && (o = n.close);
			}
			o = e.isTreemapType(t) ? e.treemapDataLabelFormat(t)(i) : e.dataLabelFormat(t.id)(o, t.id, t.index, r), P(o) ? this.textContent = o : ga(i, o, void 0, !0);
		}), qf.call(e);
	},
	updateTextColor(e) {
		let t = this, { config: n } = t, r = n.data_labels_colors, i = t.isArcType(e) && !t.isRadarType(e) || t.isFunnelType(e) || t.isTreemapType(e) ? null : t.color(e), a;
		if (N(r)) a = r;
		else if (R(r)) {
			let { id: t } = e.data || e;
			a = r[t];
		} else M(r) && (a = r.bind(t.api)(i, e));
		if (t.isCandlestickType(e) && !M(r) && !t.getCandlestickData(e)?._isUp) {
			let t = n.candlestick_color_down;
			a = R(t) ? t[e.id] : t;
		}
		return a || i;
	},
	updateTextBGColor(e, t) {
		let n = this, { $el: { defs: r } } = n, i = "";
		if (t) {
			let a = N(t) ? "" : n.getTargetSelectorSuffix("id" in e ? e.id : e.data.id), o = r.select(["filter[id*='labels-bg", "']"].join(a));
			if (o.size() && (i = `url(#${o.attr("id")})`), M(t)) {
				n.generateTextBGColorFilter(t);
				let r = n.color(e), a = t.bind(n.api)(r, e);
				a ? o.select("feFlood").attr("flood-color", a) : i = "";
			}
		}
		return i || null;
	},
	redrawText(e, t, n, r) {
		let i = this, { $T: a, axis: o, config: s, state: { hasTreemap: c } } = i, l = Ke(!0), u = s.axis_rotated, d = s.data_labels.rotate, f = Hf(d), p = d ? `rotate(${d})` : "", m = i.$el.text.style("fill", i.getStylePropValue(i.updateTextColor)).attr("filter", (e) => i.updateTextBGColor.bind(i)(e, s.data_labels_backgroundColors)).style("fill-opacity", n ? 0 : i.opacityForText.bind(i)), h = /* @__PURE__ */ new Map(), g = [];
		return m.each(function(e) {
			let t = this;
			h.set(t, { rect: ya(t) }), s.data_labels.centered && (i.isBarType(e) || i.isTreemapType(e)) && g.push(t);
		}), g.length > 0 && Xf(g).forEach((e, t) => {
			let n = h.get(t);
			n && (n.bbox = e);
		}), m.each(function(n, m) {
			let g = h.get(this), _ = a(c && this.childElementCount ? this.parentNode : this, !!(r && (this.getAttribute("x") || this.getAttribute("transform"))), l), v = s[`axis_${o?.getId(n.id)}_inverted`], y = {
				x: e.call(this, n, m, g),
				y: t.call(this, n, m, g)
			};
			d && (y = Uf.bind(i)(n, y, f, u, v), _.attr("text-anchor", f)), Yf.call(i, this, y, g?.rect), this.childElementCount || d ? _.attr("transform", `translate(${y.x} ${y.y}) ${p}`) : _.attr("x", y.x).attr("y", y.y), s.data_labels.border && Gf.call(i, _.node(), y, `${Yi.textBorderRect}-${m}`);
		}), !0;
	},
	getTextRect(e, t) {
		let n = this, r, i, o;
		Array.isArray(e) ? r = `${W.textRect}-${e.join("_")}` : (i = e.node?.() ?? e, /text/i.test(i.tagName) || (i = i.querySelector("text")), o = i.textContent, r = `${W.textRect}-${o.replace(/\W/g, "_")}`);
		let s = n.cache.get(r) || [];
		return s.length === 0 && ((n.$el.svg || n.$el.chart.select("svg")).selectAll(`.${V.dummy}`).data(o ? [o] : e).enter().append("text").style("visibility", "hidden").style("font", i ? a(i).style("font") : null).classed(t || V.dummy, !0).text((e) => e).each(function(e, t) {
			s[t] = ya(this);
		}).remove(), n.cache.add(r, s)), s.length > 1 ? s : s[0];
	},
	generateXYForText(e, t) {
		let n = this, { state: { hasRadar: r, hasFunnel: i, hasTreemap: a } } = n, o = Object.keys(e), s = {}, c = t ? n.getXForText : n.getYForText;
		return i && o.push("funnel"), r && o.push("radar"), a && o.push("treemap"), o.forEach((t) => {
			s[t] = n[`generateGet${Fe(t)}Points`](e[t], !1);
		}), function(e, t, r) {
			let i = n.isAreaType(e) && "area" || n.isBarType(e) && "bar" || n.isCandlestickType(e) && "candlestick" || n.isFunnelType(e) && "funnel" || n.isRadarType(e) && "radar" || n.isTreemapType(e) && "treemap" || "line";
			return c.call(n, s[i](e, t), e, this, r);
		};
	},
	getCenteredTextPos(e, t, n, r, i) {
		let a = this, { config: o } = a, s = o.axis_rotated, c = a.isBarType(e), l = a.isTreemapType(e);
		if (o.data_labels.centered && (c || l)) {
			let o = i?.bbox || ba(n);
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
		else return Ta(n, "x");
		else if (c) l += a.data_labels.centered ? 0 : 5;
		else if (o) {
			let n = a[`axis_${i.axis.getId(t.id)}_inverted`], r = i.isBarType(t) ? 4 : 6, o = t.value;
			l = e[2][1], l += r * ((n ? o > 0 : o < 0) ? -1 : 1);
		} else l = i.hasType("bar") ? (e[2][0] + e[0][0]) / 2 : l;
		return (o || c || s) && (l += i.getCenteredTextPos(t, e, n, "x", r)), l + Wf.call(this, t, "x");
	},
	getYForText(e, t, n, r) {
		let i = this, { axis: a, config: o, state: s } = i, c = o.axis_rotated, l = o[`axis_${a?.getId(t.id)}_inverted`], u = i.isBarType(t), d = i.isFunnelType(t), f = i.isTreemapType(t), p = o.point_r, m = r?.rect || ya(n), { value: h } = t, g = 3, _;
		if (i.isCandlestickType(t)) h = i.getCandlestickData(t), c ? (_ = e[0][0], _ += (e[1][0] - _) / 2 + g) : (_ = h && h._isUp ? e[2][2] - g : e[2][1] + g * 4, l && (_ += 15 * (h._isUp ? 1 : -1)));
		else if (d) if (e) _ = (e[2]?.[1] ?? e[0][1]) + m.height / 2 - 3;
		else return Ta(n, "y");
		else if (f) _ = e[0][1] + (o.data_labels.centered ? 0 : m.height + 5);
		else if (c) _ = (e[0][0] + e[2][0] + m.height * .6) / 2;
		else if (_ = e[2][1], P(p) && p > 5 && (i.isLineType(t) || i.isScatterType(t)) && (g += o.point_r / 2.3), h < 0 || h === 0 && !s.hasPositiveValue && s.hasNegativeValue) _ += l ? u ? -3 : -5 : m.height + (u ? -g : g);
		else {
			let e = -g * 2;
			u ? e = -g : i.isBubbleType(t) && (e = g), l && (e = u ? 10 : 15), _ += e;
		}
		return (!c || f) && (_ += i.getCenteredTextPos(t, e, n, "y", r)), _ + Wf.call(this, t, "y");
	},
	markOverlapped(e, t, n) {
		let r = t.$el.arcs.selectAll(n), i = r.filter((t) => t.data.id !== e), o = r.filter((t) => t.data.id === e), s = wa(o.node()), c = (e, t) => Math.sqrt(e * e + t * t);
		o.node() && i.each(function() {
			let e = wa(this), t = a(this), n = c(s.e, s.f) > c(e.e, e.f) ? o : t, r = Math.ceil(Math.abs(s.e - e.e)) < Math.ceil(n.node().getComputedTextLength()), i = Math.ceil(Math.abs(s.f - e.f)) < parseInt(o.style("font-size"), 10);
			t.classed(Yi.TextOverlapping, r && i);
		});
	},
	undoMarkOverlapped(e, t) {
		e.$el.arcs.selectAll(t).each(function() {
			ot([this, this.previousSibling]).classed(Yi.TextOverlapping, !1);
		});
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/title.js
function Qf(e = "left", t) {
	let n = P(t);
	return e.includes("center") ? n ? t / 2 : "middle" : e.includes("right") ? n ? t : "end" : n ? 0 : "start";
}
function $f(e) {
	let { config: t, $el: n } = e, r = e.canvasTheme?.style?.title?.font || e.canvasTheme?.style?.label?.font || "14px sans-serif", i = n.chart?.node?.(), a = i?.ownerDocument;
	if (i && a && t.title_text) {
		let e = a.createElementNS("http://www.w3.org/2000/svg", "svg"), n = a.createElementNS("http://www.w3.org/2000/svg", "text");
		e.style.cssText = "position:absolute;visibility:hidden;left:-10000px;top:-10000px;", n.setAttribute("class", Yi.title), n.style.font = r, n.textContent = String(t.title_text), e.appendChild(n), i.appendChild(e);
		let o = ya(n).height;
		if (e.remove(), o) return o;
	}
	return t.title_text ? parseFloat(r) || 14 : 0;
}
var ep = {
	initTitle() {
		let { config: e, $el: t } = this;
		e.title_text && (t.title = t.svg.append("g"), ga(t.title.append("text").style("text-anchor", Qf(e.title_position)).attr("class", Yi.title), e.title_text, [.3, 1.5]));
	},
	redrawTitle() {
		let e = this, { config: t, state: { current: n }, $el: { title: r } } = e;
		if (r) {
			let i = Qf(t.title_position, n.width), a = (t.title_padding.top || 0) + e.getTextRect(e.$el.title, Yi.title).height;
			r.attr("transform", `translate(${i}, ${a})`);
		}
	},
	getCanvasTitleHeight() {
		return $f(this);
	},
	getTitlePadding() {
		let e = this, { $el: { title: t }, config: n, state: r } = e, i = n.title_padding.top || 0, a = n.title_padding.bottom || 0;
		if (r.isCanvasMode && n.title_text) return i + e.getCanvasTitleHeight() + a;
		if (!t?.node()) return i + a;
		let o = t.node(), s = Ta(o, "y");
		if (s) {
			let e = ba(o);
			return s + e.y + e.height + a;
		}
		return i + e.getTextRect(t, Yi.title).height + a;
	}
}, tp = /(\r?\n|\t)/g, np = /{{(.*)}}/, rp = {
	initTooltip() {
		let e = this, { config: t, $el: n } = e;
		n.tooltip = a(t.tooltip_contents.bindto), n.tooltip.empty() && (n.tooltip = n.chart.append("div").attr("class", Xi.tooltipContainer).style("position", "absolute").style("pointer-events", "none").style("display", "none")), e.bindTooltipResizePos();
	},
	initShowTooltip() {
		let e = this, { config: t, $el: n, state: { hasAxis: r, hasRadar: i } } = e;
		if (t.tooltip_init_show) {
			let a = !(r || i);
			e.axis?.isTimeSeries() && N(t.tooltip_init_x) && (t.tooltip_init_x = Ye.call(e, t.tooltip_init_x)), e.api.tooltip.show({ data: { [a ? "index" : "x"]: t.tooltip_init_x } });
			let o = t.tooltip_init_position;
			if (!t.tooltip_contents.bindto && !se(o)) {
				let { top: e = 0, left: t = 50 } = o;
				n.tooltip.style("top", N(e) ? e : `${e}px`).style("left", N(t) ? t : `${t}px`).style("display", null);
			}
		}
	},
	getTooltipHTML(...e) {
		let t = this, { api: n, config: r } = t;
		return Ae(M(r.tooltip_contents) ? r.tooltip_contents.bind(n)(...e) : t.getTooltipContent(...e));
	},
	getTooltipContent(e, t, n, r) {
		let i = this, { api: a, config: o, state: s, $el: c } = i, l = o.tooltip_format_title, u = o.tooltip_format_name, d = o.tooltip_format_value, f = M(l) ? l.bind(a) : t, p = M(u) ? u.bind(a) : ((e) => e), m = M(d) ? d.bind(a) : null, h = (e, t, r, a) => {
			let o = m;
			return o ||= s.hasTreemap || i.isStackNormalized() && (!i.isStackNormalizedPerGroup() || i.isGrouped(r)) ? (e, t) => `${(t * 100).toFixed(2)}%` : n, o(e, t, r, a);
		}, g = o.tooltip_order, _ = (e) => i.axis && i.isBubbleZType(e) ? i.getBubbleZData(e.value, "z") : i.getBaseValue(e), v = i.levelColor ? (e) => i.levelColor(e.value) : (e) => r(e), y = o.tooltip_contents, b = y.template, x = i.mapToTargetIds();
		if (g === null && o.data_groups.length) {
			let t = i.orderTargets(i.data.targets).map((e) => e.id).reverse();
			e.sort((e, n) => {
				let r = e ? e.value : null, i = n ? n.value : null;
				return r > 0 && i > 0 && (r = e.id ? t.indexOf(e.id) : null, i = n.id ? t.indexOf(n.id) : null), r - i;
			});
		} else if (/^(asc|desc)$/.test(g)) {
			let t = g === "asc";
			e.sort((e, n) => {
				let r = e ? _(e) : null, i = n ? _(n) : null;
				return t ? r - i : i - r;
			});
		} else M(g) && e.sort(g.bind(a));
		let S = i.getTooltipContentTemplate(b), C = e.length, w, T, E, D, O;
		for (O = 0; O < C; O++) {
			T = e[O];
			let t = T && _(T);
			if (!(!T || !(t || t === 0))) {
				if (ee(w)) {
					let e = (s.hasAxis || s.hasRadar) && f(T.x);
					w = Je(S[0], {
						CLASS_TOOLTIP: Xi.tooltip,
						TITLE: j(e) ? b ? e : `<tr><th colspan="2">${e}</th></tr>` : ""
					});
				}
				if (!T.ratio && c.arcs && (E = ["arc", i.$el.arcs.select(`path.${Ai.arc}-${T.id}`).data()[0]], T.ratio = i.getRatio(...E)), E = [
					T.ratio,
					T.id,
					T.index
				], i.isAreaRangeType(T)) {
					let [e, t] = ["high", "low"].map((e) => h(i.getRangedData(T, e), ...E));
					D = `<b>Mid:</b> ${h(_(T), ...E)} <b>High:</b> ${e} <b>Low:</b> ${t}`;
				} else if (i.isCandlestickType(T)) {
					let [e, t, n, r, a] = [
						"open",
						"high",
						"low",
						"close",
						"volume"
					].map((e) => i.getRangedData(T, e, "candlestick") ? h(i.getRangedData(T, e, "candlestick"), ...E) : void 0);
					D = `<b>Open:</b> ${e} <b>High:</b> ${t} <b>Low:</b> ${n} <b>Close:</b> ${r}${a ? ` <b>Volume:</b> ${a}` : ""}`;
				} else if (i.isBarRangeType(T)) {
					let { value: e, id: t, index: n } = T;
					D = `${h(e, void 0, t, n)}`;
				} else D = h(_(T), ...E);
				if (D !== void 0) {
					if (T.name === null) continue;
					let e = p(T.name ?? T.id, ...E), t = v(T), n = {
						CLASS_TOOLTIP_NAME: Xi.tooltipName + i.getTargetSelectorSuffix(T.id),
						COLOR: b || !i.patterns ? t : `<svg><rect style="fill:${t}" width="10" height="10"></rect></svg>`,
						NAME: e,
						VALUE: D
					};
					if (b && R(y.text)) {
						let e = x.indexOf(T.id);
						Object.keys(y.text).forEach((t) => {
							n[t] = y.text[t][e];
						});
					}
					w += Je(S[1], n);
				}
			}
		}
		return `${w}</table>`;
	},
	getTooltipContentTemplate(e) {
		return (e || `<table class="{=CLASS_TOOLTIP}"><tbody>
				{=TITLE}
				{{<tr class="{=CLASS_TOOLTIP_NAME}">
					<td class="name">${this.patterns ? "{=COLOR}" : "<span style=\"background-color:{=COLOR}\"></span>"}{=NAME}</td>
					<td class="value">{=VALUE}</td>
				</tr>}}
			</tbody></table>`).replace(tp, "").split(np);
	},
	setTooltipPosition(e, t) {
		let n = this, { config: r, scale: i, state: a, $el: { eventRect: o, tooltip: s, svg: c } } = n, { bindto: l } = r.tooltip_contents, u = r.axis_rotated, d = s?.datum();
		if (!l && d) {
			let l = e ?? d.data, [f, p] = va(a.event, t ?? o?.node()), m = {
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
			let { width: h = 0, height: g = 0 } = d, _ = r.tooltip_position?.bind(n.api)(l, h, g, o?.node(), m) ?? (c && Ea(c) ? n.getTooltipPositionViewBox.bind(n)(h, g, m) : n.getTooltipPosition.bind(n)(h, g, m));
			["top", "left"].forEach((e) => {
				let t = _[e];
				s.style(e, `${t}px`), e === "left" && !d.xPosInPercent && (d.xPosInPercent = t / a.current.width * 100);
			});
		}
	},
	getTooltipPositionViewBox(e, t, n) {
		let r = this, { $el: { eventRect: i, svg: a }, config: o, state: s } = r, c = o.axis_rotated, l = r.hasArcType() || s.hasFunnel || s.hasTreemap, u = (l ? a : i)?.node() ?? s.event.target, { x: d, y: f } = n;
		s.hasAxis && (d = c ? d : n.xAxis, f = c ? n.xAxis : f);
		let p = Ca(u, d, f, !1), m = ya(u), h = Ca(u, 20, 0, !1).x, g = p.y, _ = p.x + e / 2 + h;
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
			t > 0 && (s += ","), s += `${r?.index}|${r?.id}|${r?.value}`, !c && r && (c = r), r && j(n.getBaseValue(r)) ? (o++, a?.push(r)) : a ||= e.slice(0, t);
		}
		if (o === 0 || !c) return;
		let l = i.datum(), u = a;
		if (!l || l.current !== s) {
			let { index: t, x: a } = c;
			u ||= e.slice(), z(r.tooltip_onshow, n.api, e), i.html(n.getTooltipHTML(e, n.axis ? n.axis.getXAxisTickFormat() : n.categoryName.bind(n), n.getDefaultValueFormat(), n.color)).style("display", null).style("visibility", null), i.datum({
				index: t,
				x: a,
				current: s,
				data: e,
				width: i.property("offsetWidth"),
				height: i.property("offsetHeight")
			}), z(r.tooltip_onshown, n.api, e), n._handleLinkedCharts(!0, t);
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
			z(n.tooltip_onhide, t, e), r.style("display", "none").datum(null), z(n.tooltip_onhidden, t, e);
		}
	},
	_handleLinkedCharts(e, t) {
		let n = this, { charts: r, config: i, state: { event: a } } = n;
		if (a?.isTrusted && i.tooltip_linked && r.length > 1) {
			let a = i.tooltip_linked_name;
			r.filter((e) => e !== n.api).forEach((n) => {
				let { config: r, $el: i, state: o } = n.internal, s = r.tooltip_linked, c = r.tooltip_linked_name, l = E.body.contains(i.chart.node());
				if (s && a === c && l) {
					let r = t !== i.tooltip.data()[0]?.index;
					try {
						e && r && o.isCanvasMode ? n.internal.showCanvasLinkedTooltip?.(t) : n.tooltip[e && r ? "show" : "hide"]({ index: t });
					} catch {}
				}
			});
		}
	},
	updateTooltipOnRedraw(e, t) {
		let n = this, { config: r, $el: { eventRect: i, svg: o, tooltip: s }, state: { event: c, hasAxis: l, hasRadar: u, hasTreemap: d } } = n;
		if (!n.state.isCanvasMode && s?.style("display") === "block" && c) {
			let s = e ?? (u ? o : i)?.node();
			if (l || u) if (n.isMultipleX()) n.selectRectForMultipleXs(s, !1);
			else {
				let e = t ?? n.getDataIndexFromEvent(c);
				t === -1 ? n.api.tooltip.hide() : (n.selectRectForSingle(s, e), n.setExpand(e, null, !0));
			}
			else {
				let { clientX: e, clientY: t } = c;
				setTimeout(() => {
					let r = [e, t].every(Number.isFinite) && E.elementFromPoint(e, t), i = r && a(r).datum();
					if (i) {
						let e = n.hasArcType() ? n.convertToArcData(n.updateAngle(i)) : i?.data;
						d && (r = o.node()), e && n.showTooltip([e], r);
					} else n.api.tooltip.hide();
				}, r.transition_duration);
			}
		}
	}
}, ip = {
	getTranslate(e, t = 0) {
		let n = this, { config: r, state: i } = n, a = r.axis_rotated, o = 0, s, c;
		if (t && /^(x|y2?)$/.test(e) && (o = n.getAxisSize(e) * t), e === "main") s = re(i.margin.left), c = re(i.margin.top);
		else if (e === "context") s = re(i.margin2.left), c = re(i.margin2.top);
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
		let n = this, { $el: { main: r }, $T: i } = n, a = t?.axisX ? t.axisX : i(r.select(`.${Mi.axisX}`), e), o = t?.axisY ? t.axisY : i(r.select(`.${Mi.axisY}`), e), s = t?.axisY2 ? t.axisY2 : i(r.select(`.${Mi.axisY2}`), e);
		i(r, e).attr("transform", n.getTranslate("main")), a.attr("transform", n.getTranslate("x")), o.attr("transform", n.getTranslate("y")), s.attr("transform", n.getTranslate("y2")), r.select(`.${Ai.chartArcs}`).attr("transform", n.getTranslate("arc"));
	},
	transformAll(e, t) {
		let n = this, { config: r, state: { hasAxis: i, hasFunnel: a, hasTreemap: o, isCanvasMode: s }, $el: c } = n;
		s || (!a && !o && n.transformMain(e, t), i && r.subchart_show && n.transformContext(e, t), c.legend && n.transformLegend(e));
	}
}, ap = /* @__PURE__ */ new Set([
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
]), op = {
	isValidChartType(e) {
		return !!(e && Object.values(b).indexOf(e) > -1);
	},
	setTargetType(e, t) {
		let n = this, { config: r, state: { withoutFadeIn: i } } = n;
		n.mapToTargetIds(e).forEach((e) => {
			i[e] = t === r.data_types[e], r.data_types[e] = t;
		}), e || (r.data_type = t);
	},
	updateTypesElements() {
		let e = this, { state: { current: t } } = e;
		Object.keys(b).forEach((n) => {
			let r = b[n], i = e.hasType(r, null, !0), a = t.types.indexOf(r);
			a === -1 && i ? t.types.push(r) : a > -1 && !i && t.types.splice(a, 1);
		}), e.setChartElements();
	},
	hasType(e, t, n = !1) {
		let r = this, { config: i, state: { current: a } } = r, o = i.data_types, s = t || r.data.targets;
		return !n && a.types?.indexOf(e) > -1 ? !0 : s?.length ? s.some((t) => {
			let n = o[t.id];
			return n === e || !n && e === "line";
		}) : Object.keys(o).length ? Object.values(o).some((t) => t === e) : i.data_type === e;
	},
	hasTypeOf(e, t, n = []) {
		return e in S && !S[e].filter((e) => n.indexOf(e) === -1).every((e) => !this.hasType(e, t));
	},
	isTypeOf(e, t) {
		let n = N(e) ? e : e.id, r = this.config && (this.config.data_types?.[n] || this.config.data_type);
		return L(t) ? t.indexOf(r) >= 0 : r === t;
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
		let t = N(e) ? e : e.id;
		return !this.config.data_types[t] || this.isTypeOf(t, S.Line);
	},
	isStepType(e) {
		return this.isTypeOf(e, S.Step);
	},
	isSplineType(e) {
		return this.isTypeOf(e, S.Spline);
	},
	isAreaType(e) {
		return this.isTypeOf(e, S.Area);
	},
	isAreaRangeType(e) {
		return this.isTypeOf(e, S.AreaRange);
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
		return e?.tagName === "circle" || t.point_type === "circle" && (!n || L(n) && n.length === 0);
	},
	lineData(e) {
		return this.isLineType(e) ? [e] : [];
	},
	arcData(e) {
		return this.isArcType(e.data) ? [e] : [];
	},
	labelishData(e) {
		return this.isBarType(e) || this.isLineType(e) || this.isScatterType(e) || this.isBubbleType(e) || this.isCandlestickType(e) || this.isFunnelType(e) || this.isRadarType(e) || this.isTreemapType(e) ? e.values.filter((e) => P(e.value) || !!e.value) : [];
	},
	barLineBubbleData(e) {
		return this.isBarType(e) || this.isLineType(e) || this.isBubbleType(e) ? e.values : [];
	},
	isInterpolationType(e) {
		return ap.has(e);
	}
}, sp = Math.cos, cp = Math.min, lp = Math.sin, up = Math.sqrt, dp = Math.PI;
dp / 2;
var fp = 2 * dp;
//#endregion
//#region node_modules/d3-shape/src/link.js
function pp(e) {
	return e.source;
}
function mp(e) {
	return e.target;
}
function hp(e) {
	let t = pp, n = mp, r = p, a = l, o = null, s = null, c = i(u);
	function u() {
		let i, l = m.call(arguments), u = t.apply(this, l), d = n.apply(this, l);
		if (o ?? (s = e(i = c())), s.lineStart(), l[0] = u, s.point(+r.apply(this, l), +a.apply(this, l)), l[0] = d, s.point(+r.apply(this, l), +a.apply(this, l)), s.lineEnd(), i) return s = null, i + "" || null;
	}
	return u.source = function(e) {
		return arguments.length ? (t = e, u) : t;
	}, u.target = function(e) {
		return arguments.length ? (n = e, u) : n;
	}, u.x = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : g(+e), u) : r;
	}, u.y = function(e) {
		return arguments.length ? (a = typeof e == "function" ? e : g(+e), u) : a;
	}, u.context = function(t) {
		return arguments.length ? (t == null ? o = s = null : s = e(o = t), u) : o;
	}, u;
}
function gp() {
	return hp(h);
}
//#endregion
//#region node_modules/d3-shape/src/symbol/asterisk.js
var _p = up(3), vp = { draw(e, t) {
	let n = up(t + cp(t / 28, .75)) * .59436, r = n / 2, i = r * _p;
	e.moveTo(0, n), e.lineTo(0, -n), e.moveTo(-i, -r), e.lineTo(i, r), e.moveTo(-i, r), e.lineTo(i, -r);
} }, yp = { draw(e, t) {
	let n = up(t / dp);
	e.moveTo(n, 0), e.arc(0, 0, n, 0, fp);
} }, bp = { draw(e, t) {
	let n = up(t / 5) / 2;
	e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
} }, xp = up(1 / 3), Sp = xp * 2, Cp = { draw(e, t) {
	let n = up(t / Sp), r = n * xp;
	e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
} }, wp = { draw(e, t) {
	let n = up(t) * .62625;
	e.moveTo(0, -n), e.lineTo(n, 0), e.lineTo(0, n), e.lineTo(-n, 0), e.closePath();
} }, Tp = { draw(e, t) {
	let n = up(t - cp(t / 7, 2)) * .87559;
	e.moveTo(-n, 0), e.lineTo(n, 0), e.moveTo(0, n), e.lineTo(0, -n);
} }, Ep = { draw(e, t) {
	let n = up(t), r = -n / 2;
	e.rect(r, r, n, n);
} }, Dp = { draw(e, t) {
	let n = up(t) * .4431;
	e.moveTo(n, n), e.lineTo(n, -n), e.lineTo(-n, -n), e.lineTo(-n, n), e.closePath();
} }, Op = .8908130915292852, kp = lp(dp / 10) / lp(7 * dp / 10), Ap = lp(fp / 10) * kp, jp = -sp(fp / 10) * kp, Mp = { draw(e, t) {
	let n = up(t * Op), r = Ap * n, i = jp * n;
	e.moveTo(0, -n), e.lineTo(r, i);
	for (let t = 1; t < 5; ++t) {
		let a = fp * t / 5, o = sp(a), s = lp(a);
		e.lineTo(s * n, -o * n), e.lineTo(o * r - s * i, s * r + o * i);
	}
	e.closePath();
} }, Np = up(3), Pp = { draw(e, t) {
	let n = -up(t / (Np * 3));
	e.moveTo(0, n * 2), e.lineTo(-Np * n, -n), e.lineTo(Np * n, -n), e.closePath();
} }, Fp = up(3), Ip = { draw(e, t) {
	let n = up(t) * .6824, r = n / 2, i = n * Fp / 2;
	e.moveTo(0, -n), e.lineTo(i, r), e.lineTo(-i, r), e.closePath();
} }, Lp = -.5, Rp = up(3) / 2, zp = 1 / up(12), Bp = (zp / 2 + 1) * 3, Vp = { draw(e, t) {
	let n = up(t / Bp), r = n / 2, i = n * zp, a = r, o = n * zp + n, s = -a, c = o;
	e.moveTo(r, i), e.lineTo(a, o), e.lineTo(s, c), e.lineTo(Lp * r - Rp * i, Rp * r + Lp * i), e.lineTo(Lp * a - Rp * o, Rp * a + Lp * o), e.lineTo(Lp * s - Rp * c, Rp * s + Lp * c), e.lineTo(Lp * r + Rp * i, Lp * i - Rp * r), e.lineTo(Lp * a + Rp * o, Lp * o - Rp * a), e.lineTo(Lp * s + Rp * c, Lp * c - Rp * s), e.closePath();
} }, Hp = { draw(e, t) {
	let n = up(t - cp(t / 6, 1.7)) * .6189;
	e.moveTo(-n, -n), e.lineTo(n, n), e.moveTo(-n, n), e.lineTo(n, -n);
} }, Up = [
	yp,
	bp,
	Cp,
	Ep,
	Mp,
	Pp,
	Vp
], Wp = [
	yp,
	Tp,
	Hp,
	Ip,
	vp,
	Dp,
	wp
];
//#endregion
//#region node_modules/d3-shape/src/noop.js
function Gp() {}
//#endregion
//#region node_modules/d3-shape/src/curve/basis.js
function Kp(e, t, n) {
	e._context.bezierCurveTo((2 * e._x0 + e._x1) / 3, (2 * e._y0 + e._y1) / 3, (e._x0 + 2 * e._x1) / 3, (e._y0 + 2 * e._y1) / 3, (e._x0 + 4 * e._x1 + t) / 6, (e._y0 + 4 * e._y1 + n) / 6);
}
function qp(e) {
	this._context = e;
}
qp.prototype = {
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
			case 3: Kp(this, this._x1, this._y1);
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
			default: Kp(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function Jp(e) {
	return new qp(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/basisClosed.js
function Yp(e) {
	this._context = e;
}
Yp.prototype = {
	areaStart: Gp,
	areaEnd: Gp,
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
			default: Kp(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function Xp(e) {
	return new Yp(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/basisOpen.js
function Zp(e) {
	this._context = e;
}
Zp.prototype = {
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
			default: Kp(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function Qp(e) {
	return new Zp(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/bundle.js
function $p(e, t) {
	this._basis = new qp(e), this._beta = t;
}
$p.prototype = {
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
var em = (function e(t) {
	function n(e) {
		return t === 1 ? new qp(e) : new $p(e, t);
	}
	return n.beta = function(t) {
		return e(+t);
	}, n;
})(.85);
//#endregion
//#region node_modules/d3-shape/src/curve/cardinal.js
function tm(e, t, n) {
	e._context.bezierCurveTo(e._x1 + e._k * (e._x2 - e._x0), e._y1 + e._k * (e._y2 - e._y0), e._x2 + e._k * (e._x1 - t), e._y2 + e._k * (e._y1 - n), e._x2, e._y2);
}
function nm(e, t) {
	this._context = e, this._k = (1 - t) / 6;
}
nm.prototype = {
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
			case 3: tm(this, this._x1, this._y1);
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
			default: tm(this, e, t);
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var rm = (function e(t) {
	function n(e) {
		return new nm(e, t);
	}
	return n.tension = function(t) {
		return e(+t);
	}, n;
})(0);
//#endregion
//#region node_modules/d3-shape/src/curve/cardinalClosed.js
function im(e, t) {
	this._context = e, this._k = (1 - t) / 6;
}
im.prototype = {
	areaStart: Gp,
	areaEnd: Gp,
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
			default: tm(this, e, t);
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var am = (function e(t) {
	function n(e) {
		return new im(e, t);
	}
	return n.tension = function(t) {
		return e(+t);
	}, n;
})(0);
//#endregion
//#region node_modules/d3-shape/src/curve/cardinalOpen.js
function om(e, t) {
	this._context = e, this._k = (1 - t) / 6;
}
om.prototype = {
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
			default: tm(this, e, t);
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var sm = (function e(t) {
	function n(e) {
		return new om(e, t);
	}
	return n.tension = function(t) {
		return e(+t);
	}, n;
})(0);
//#endregion
//#region node_modules/d3-shape/src/curve/catmullRom.js
function cm(e, t, n) {
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
function lm(e, t) {
	this._context = e, this._alpha = t;
}
lm.prototype = {
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
			default: cm(this, e, t);
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var um = (function e(t) {
	function n(e) {
		return t ? new lm(e, t) : new nm(e, 0);
	}
	return n.alpha = function(t) {
		return e(+t);
	}, n;
})(.5);
//#endregion
//#region node_modules/d3-shape/src/curve/catmullRomClosed.js
function dm(e, t) {
	this._context = e, this._alpha = t;
}
dm.prototype = {
	areaStart: Gp,
	areaEnd: Gp,
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
			default: cm(this, e, t);
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var fm = (function e(t) {
	function n(e) {
		return t ? new dm(e, t) : new im(e, 0);
	}
	return n.alpha = function(t) {
		return e(+t);
	}, n;
})(.5);
//#endregion
//#region node_modules/d3-shape/src/curve/catmullRomOpen.js
function pm(e, t) {
	this._context = e, this._alpha = t;
}
pm.prototype = {
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
			default: cm(this, e, t);
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var mm = (function e(t) {
	function n(e) {
		return t ? new pm(e, t) : new om(e, 0);
	}
	return n.alpha = function(t) {
		return e(+t);
	}, n;
})(.5);
//#endregion
//#region node_modules/d3-shape/src/curve/linearClosed.js
function hm(e) {
	this._context = e;
}
hm.prototype = {
	areaStart: Gp,
	areaEnd: Gp,
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
function gm(e) {
	return new hm(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/monotone.js
function _m(e) {
	return e < 0 ? -1 : 1;
}
function vm(e, t, n) {
	var r = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (r || i < 0 && -0), o = (n - e._y1) / (i || r < 0 && -0), s = (a * i + o * r) / (r + i);
	return (_m(a) + _m(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(s)) || 0;
}
function ym(e, t) {
	var n = e._x1 - e._x0;
	return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function bm(e, t, n) {
	var r = e._x0, i = e._y0, a = e._x1, o = e._y1, s = (a - r) / 3;
	e._context.bezierCurveTo(r + s, i + s * t, a - s, o - s * n, a, o);
}
function xm(e) {
	this._context = e;
}
xm.prototype = {
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
			case 3: bm(this, this._t0, ym(this, this._t0));
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
					this._point = 3, bm(this, ym(this, n = vm(this, e, t)), n);
					break;
				default: bm(this, this._t0, n = vm(this, e, t));
			}
			this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
		}
	}
};
function Sm(e) {
	this._context = new Cm(e);
}
(Sm.prototype = Object.create(xm.prototype)).point = function(e, t) {
	xm.prototype.point.call(this, t, e);
};
function Cm(e) {
	this._context = e;
}
Cm.prototype = {
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
function wm(e) {
	return new xm(e);
}
function Tm(e) {
	return new Sm(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/natural.js
function Em(e) {
	this._context = e;
}
Em.prototype = {
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
		else for (var r = Dm(e), i = Dm(t), a = 0, o = 1; o < n; ++a, ++o) this._context.bezierCurveTo(r[0][a], i[0][a], r[1][a], i[1][a], e[o], t[o]);
		(this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
	},
	point: function(e, t) {
		this._x.push(+e), this._y.push(+t);
	}
};
function Dm(e) {
	var t, n = e.length - 1, r, i = Array(n), a = Array(n), o = Array(n);
	for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
	for (i[n - 1] = 2, a[n - 1] = 7, o[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t) r = i[t] / a[t - 1], a[t] -= r, o[t] -= r * o[t - 1];
	for (i[n - 1] = o[n - 1] / a[n - 1], t = n - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
	for (a[n - 1] = (e[n] + i[n - 1]) / 2, t = 0; t < n - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
	return [i, a];
}
function Om(e) {
	return new Em(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/step.js
function km(e, t) {
	this._context = e, this._t = t;
}
km.prototype = {
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
function Am(e) {
	return new km(e, .5);
}
function jm(e) {
	return new km(e, 0);
}
function Mm(e) {
	return new km(e, 1);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/shape/shape.js
var Nm = {
	basis: Jp,
	"basis-closed": Xp,
	"basis-open": Qp,
	bundle: em,
	cardinal: rm,
	"cardinal-closed": am,
	"cardinal-open": sm,
	"catmull-rom": um,
	"catmull-rom-closed": fm,
	"catmull-rom-open": mm,
	"monotone-x": wm,
	"monotone-y": Tm,
	natural: Om,
	"linear-closed": gm,
	linear: n,
	step: Am,
	"step-after": Mm,
	"step-before": jm
};
function Pm(e, t) {
	return e.isLineType(t) || e.isScatterType?.(t) || e.isBubbleType?.(t);
}
function Fm(e) {
	return (t) => Pm(e, t);
}
function Im(e, t) {
	return e.isCandlestickType?.(t) ? e.getCandlestickData?.(t)?.close : e.getBaseValue(t);
}
function Lm(e) {
	let t = this, n;
	if (Pm(t, e)) {
		let e = Fm(t);
		n = t.generateGetLinePoints(t.getShapeIndices(e), !1, e);
	} else t.isBarType(e) ? n = t.generateGetBarPoints(t.getShapeIndices(t.isBarType)) : t.isCandlestickType?.(e) && (n = t.generateGetCandlestickPoints?.(t.getShapeIndices(t.isCandlestickType)));
	return n;
}
function Rm(e, t, n) {
	return this.config[t] ? this.getGradienColortUrl(e.id) : n(e);
}
function zm(e, t) {
	let n = this, { $el: r } = n, { type: i, elKey: a, containerClass: o, itemClass: s, initFn: c, withFocus: l = !0, withStyles: u = !0 } = t;
	r[a] || c.call(n);
	let d = n.getChartClass(i), f = l ? n.classFocus.bind(n) : () => "", p = r.main.select(`.${o}`).selectAll(`.${s}`).data(n.filterNullish(e)).attr("class", (e) => d(e) + f(e)).enter().append("g").attr("class", d);
	return u && p.style("opacity", "0").style("pointer-events", n.getStylePropValue("none")), p;
}
var Bm = {
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
			let n = Fe(t);
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
		let t = this, { config: n } = t, r = n.data_xs, i = I(r), a = {}, o = i ? {} : 0;
		return i && Be(Object.keys(r).map((e) => r[e])).forEach((e) => {
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
			ee(i[e.id]) && (i[e.id] = t ? o[t]++ : o++, i.__max__ = (t ? o[t] : o) - 1);
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
		return I(i) ? e[i[o]] : e;
	},
	getIndicesMax(e) {
		if (!I(this.config.data_xs)) return e.__max__;
		let t = 0;
		for (let n in e) t += e[n].__max__ || 0;
		return t;
	},
	getShapeX(e, t, n) {
		let r = this, { config: i, scale: a } = r, o = n ? a.subX : a.zoom || a.x, s = i.bar_overlap, c = i.bar_padding, l = (e, t) => e + t, u = ae(e) && (e._$total.length ? e._$total.reduce(l) / 2 : 0), d = [];
		if (u && ae(e) && e._$total.length) {
			let t = 0;
			for (let n of e._$total) t += n, d.push(t);
		}
		return (n) => {
			let i = r.getIndices(t, n, "getShapeX"), a = n.id in i ? i[n.id] : 0, f = (i.__max__ || 0) + 1, p = 0;
			if (I(n.x)) {
				let t = o(n.x, !0);
				if (u) {
					let r = e[n.id] || e._$width;
					p = s ? t - r / 2 : t - r + (d[a] ?? e._$total.slice(0, a + 1).reduce(l)) - u;
				} else p = t - (P(e) ? e : e._$width) * (f / 2 - (s ? 1 : a));
			}
			return e && p && f > 1 && c && (a && (p += c * a), f > 2 ? p -= (f - 1) * c / 2 : f === 2 && (p -= c / 2)), p;
		};
	},
	getShapeY(e) {
		let t = this, n = t.isStackNormalized();
		return (r) => {
			let { value: i } = r;
			return P(r) ? i = r : t.isAreaRangeType(r) ? i = t.getBaseValue(r, "mid") : n ? i = t.getRatio("index", r, !0) : t.isBubbleZType(r) ? i = t.getBubbleZData(r.value, "y") : t.isBarRangeType(r) && (i = i[1]), t.getYScaleById(r.id, e)(i);
		};
	},
	getShapeYMin(e) {
		let t = this, n = t.axis.getId(e), [r] = t.scale[n].domain(), i = t.config[`axis_${n}_inverted`];
		return !t.isGrouped(e) && !i && r > 0 ? r : 0;
	},
	getShapeOffsetData(e) {
		let t = this, n = t.orderTargets(t.filterTargetsToShow(t.data.targets.filter(e, t))), r = t.state.dataGeneration, i = n.map((e) => e.id).join("_"), a = `${W.shapeOffset}_${i}`, o = t.cache.get(a);
		if (o?.generation === r) return o;
		let s = t.isStackNormalized(), c = n.map((e) => {
			let n = e.values, r = {};
			t.isStepType(e) && (n = t.convertValuesToStep(n));
			let i = n.reduce((e, n) => {
				let i = Number(n.x), a = Im(t, n);
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
			let { id: l, value: u, x: d } = e, f = Im(r, e), p = r.getIndices(t, e), m = r.getYScaleById(l, n);
			if (r.isBarRangeType(e)) return m(u[0]);
			let h = Number(d), g = m(o === "zero" ? 0 : r.getShapeYMin(l)), _ = g, v = s?.get(l) ?? i.filter((e) => e.id !== l && p[e.id] === p[l]);
			for (let e of v) {
				let { id: t, rowValueMapByXValue: n, rowValues: i, values: s } = e;
				if (a[t] < a[l]) {
					let e = s[h], t = i[c];
					(!t || Number(t.x) !== h) && (t = n[h]);
					let a = t && Im(r, t);
					P(a) && P(f) && a * f >= 0 && P(e) && (f !== 0 || o === "positive" && e > 0 || o === "negative" && e < 0) && (_ += m(e) - g);
				}
			}
			return _;
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
			let { y0: p, isInverted: m } = f, h = l(e, i) || p, g = P(o) ? o : o[e.id] || o._$width, _ = e.value, v = s(e), y = c(e);
			r.axis_rotated && !m && (_ > 0 && y < p || _ < 0 && p < y) && (y = p), n.isBarRangeType(e) || (y -= p - h);
			let b = v + g;
			return [
				[v, h],
				[v, y],
				[b, y],
				[b, h]
			];
		};
	},
	circleY(e, t) {
		let n = this, r = e.id, i;
		return n.isGrouped(r) && (i = Lm.bind(n)(e)), i ? i(e, t)[0][1] : n.getYScaleById(r)(n.getBaseValue(e));
	},
	circleX(e) {
		return this.xx(e);
	},
	updateCircleY(e = !1) {
		let t = this, n = Fm(t), r = t.generateGetLinePoints(t.getShapeIndices(n), e, n);
		return (n, i) => {
			let a = n.id;
			return t.isGrouped(a) && Pm(t, n) ? r(n, i)[0][1] : t.getYScaleById(a, e)(t.getBaseValue(n));
		};
	},
	pointR(e) {
		let t = this, { config: n } = t, r = n.point_r, i = r;
		return t.isBubbleType(e) ? i = t.getBubbleR(e) : M(r) && (i = r.bind(t.api)(e)), e.r = i, i;
	},
	pointExpandedR(e) {
		let t = this, { config: n } = t, r = t.isBubbleType(e) ? 1.15 : 1.75;
		return n.point_focus_expand_enabled ? n.point_focus_expand_r || t.pointR(e) * r : t.pointR(e);
	},
	pointSelectR(e) {
		let t = this, n = t.config.point_select_r;
		return M(n) ? n(e) : n || t.pointR(e) * 4;
	},
	isPointFocusOnly() {
		let e = this;
		return e.config.point_focus_only && !e.hasType("bubble") && !e.hasType("scatter") && !e.hasArcType(null, ["radar"]);
	},
	getPointSensitivity(e) {
		let t = this, n = t.config.point_sensitivity;
		if (e) M(n) ? n = n.call(t.api, e) : n === "radius" && (n = e.r);
		else return n;
		return n;
	},
	getBarW(e, t, n) {
		let r = this, { config: i, org: a, scale: o, state: s } = r, c = r.getMaxDataCount(), l = e === "bar" && i.data_groups?.length, u = `${e}_width`, { k: d } = r.getZoomTransform?.() ?? { k: 1 }, f = [i.axis_x_min ?? a.xDomain[0], i.axis_x_max ?? a.xDomain[1]].map((e) => r.axis.isTimeSeries() ? Ye.call(r, e) : Number(e)), p = t.tickInterval(c);
		if (o.zoom && !r.axis.isCategorized() && d > 1) {
			let e = f.every((e, t) => e === a.xDomain[t]);
			p = a.xDomain.map((t, n) => {
				let r = e ? t : t - Math.abs(f[n]);
				return o.zoom(r);
			}).reduce((e, t) => Math.abs(e) + t) / c;
		}
		let m = (e) => {
			let t = e ? i[u][e] : i[u], a = e ? t.ratio : i[`${u}_ratio`], o = e ? t.max : i[`${u}_max`], l = P(t) ? t : M(t) ? t.call(r, s.width, n, c) : n ? p * a / n : 0;
			return o && l > o ? o : l;
		}, h = m();
		return !l && ae(i[u]) && (h = {
			_$width: h,
			_$total: []
		}, r.getTargetsToShow().forEach((e) => {
			i[u][e.id] && (h[e.id] = m(e.id), h._$total.push(h[e.id] || h._$width));
		})), h;
	},
	getShapeByIndex(e, t, n) {
		let r = this, { $el: i } = r, a = j(t) ? `-${t}` : "", o = i[e];
		return o = o && !o.empty() ? o.filter((e) => !n || e.id === n).filter((e) => !j(t) || e.index === t) : (n ? i.main.selectAll(`.${$i[`${e}s`]}${r.getTargetSelectorSuffix(n)}`) : i.main).selectAll(`.${$i[e]}${a}`), o;
	},
	isWithinShape(e, t) {
		let n = this, r = a(e), i;
		return n.isTargetToShow(t.id) ? n.hasValidPointType?.(e.nodeName) ? i = n.isStepType(t) ? n.isWithinStep(e, n.getYScaleById(t.id)(n.getBaseValue(t))) : n.isWithinCircle(e, n.isBubbleType(t) ? n.pointSelectR(t) * 1.5 : 0) : e.nodeName === "path" && (i = !r.classed($i.bar) || n.isWithinBar(e)) : i = !1, i;
	},
	getInterpolate(e) {
		return Nm[this.getInterpolateType(e)];
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
		let t = va(this.state.event, e), [n, r, i] = _a(e), a = Math.min(n.x, r.x), o = Math.min(n.y, r.y), s = this.config.bar_sensitivity, c = Math.abs(i.x - r.x), l = Math.abs(n.y - r.y), u = a - s, d = a + c + s, f = o + l + s, p = o - s;
		return u < t[0] && t[0] < d && p < t[1] && t[1] < f;
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/ChartInternal.js
function Vm(e) {
	return e.hasArcType() ? "arc charts" : e.hasType("funnel") ? "funnel chart" : null;
}
function Hm(e) {
	let { config: t } = e, n = t.render_mode === "canvas" ? Vm(e) : null;
	n && (T.console?.warn?.(`[billboard.js] render.mode='canvas' is ignored for ${n}; falling back to SVG.`), t.render_mode = "svg");
}
var Um = class {
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
		t.api = e, t.config = new ca(), t.cache = new da();
		let n = new ua();
		t.$el = n.getStore("element"), t.state = n.getStore("state"), t.$T = t.$T.bind(t);
	}
	$T(e, t, n) {
		let { config: r, state: i } = this, o = r.transition_duration, s = r.subchart_show, c = e;
		return c &&= ("tagName" in c && (c = a(c)), (t !== !1 && o || t) && (!i.zooming || i.dragging) && !i.resizing && i.rendered && !s ? c.transition(n).duration(o) : c), c;
	}
	beforeInit() {
		let e = this;
		e.callPluginHook("$beforeInit"), z(e.config.onbeforeinit, e.api);
	}
	afterInit() {
		let e = this;
		e.callPluginHook("$afterInit"), z(e.config.onafterinit, e.api);
	}
	init() {
		let e = this, { config: t, state: n, $el: r } = e, { boost_useCssRule: i, bindto: o } = t;
		tt(e), Hm(e);
		let s = e.hasArcType();
		if (n.hasRadar = !n.hasAxis && e.hasType("radar"), n.hasFunnel = !n.hasAxis && e.hasType("funnel"), n.hasTreemap = !n.hasAxis && e.hasType("treemap"), n.hasAxis = !s && !n.hasFunnel && !n.hasTreemap, n.datetimeId = `bb-${+/* @__PURE__ */ new Date() * Ke()}`, i) {
			let e = E.createElement("style");
			e.type = "text/css", E.head.appendChild(e), n.style = {
				rootSelector: `.${n.datetimeId}`,
				sheet: e.sheet
			}, r.style = e;
		}
		let c = {
			element: o,
			classname: "bb"
		};
		R(o) && (c.element = o.element || "#chart", c.classname = o.classname || c.classname), r.chart = M(c.element.node) ? o.element : a(c.element || []), r.chart.empty() && (r.chart = a(E.body.appendChild(E.createElement("div")))), r.chart.html("").classed(c.classname, !0).classed(n.datetimeId, i).style("position", "relative"), e.initParams(), e.initToRender();
	}
	initToRender(e) {
		let t = this, { config: n, state: r, $el: { chart: i } } = t, a = () => Da(i, {
			display: "none",
			visibility: "hidden"
		}), o = n.render.lazy === !1 ? !1 : n.render.lazy || a(), s = T.MutationObserver;
		o && s && n.render.observe !== !1 && !e && new s((e, n) => {
			a() || (n.disconnect(), !r.rendered && t.initToRender(!0));
		}).observe(i.node(), {
			attributes: !0,
			attributeFilter: ["class", "style"]
		}), (!o || e) && t.convertData(n, (e) => {
			t.initWithData(e), t.afterInit();
		});
	}
	initParams() {
		let e = this, { config: t, format: n, state: r } = e;
		if (t.render_mode === "canvas" && e.prepareCanvasConfig?.(), e.color = e.generateColor(), e.levelColor = e.generateLevelColor(), t.padding === !1 && (t.axis_x_show = !1, t.axis_y_show = !1, t.axis_y2_show = !1, t.subchart_show = !1), t.render_mode !== "canvas" && (e.hasPointType() || e.hasLegendDefsPoint?.()) && (e.point = e.generatePoint()), r.hasAxis) {
			e.initClip(), n.extraLineClasses = e.generateExtraLineClass(), n.dataTime = t.data_xLocaltime ? Ei : Oi, n.axisTime = t.axis_x_localtime ? Ti : Di;
			let r = t.zoom_enabled && t.zoom_type === "drag";
			n.defaultAxisTime = (t) => {
				let { x: i, zoom: a } = e.scale, o = r ? a : a && i.orgDomain().toString() !== a.domain().toString(), s = t.getMilliseconds() && ".%L" || t.getSeconds() && ".:%S" || t.getMinutes() && "%I:%M" || t.getHours() && "%I %p" || t.getDate() !== 1 && "%b %d" || o && t.getDate() === 1 && "%b'%y" || t.getMonth() && "%-m/%-d" || "%Y";
				return n.axisTime(s)(t);
			};
		}
		let { legend_position: i, legend_inset_anchor: a, axis_rotated: o } = t;
		r.isLegendRight = i === "right", r.isLegendInset = i === "inset", r.isLegendTop = a === "top-left" || a === "top-right", r.isLegendLeft = a === "top-left" || a === "bottom-left", r.rotatedPadding.top = e.getResettedPadding(r.rotatedPadding.top), r.rotatedPadding.right = o && !t.axis_x_show ? 0 : 30, r.inputType = ka(t.interaction_inputType_mouse, t.interaction_inputType_touch);
	}
	initWithData(e) {
		let t = this, { config: n, scale: r, state: i, $el: a, org: o } = t, { hasAxis: s, hasFunnel: c, hasTreemap: l } = i, u = n.interaction_enabled, d = t.hasType("polar"), f = n.data_labels_backgroundColors;
		if (s && (t.axis = t.getAxisInstance(), n.zoom_enabled && t.initZoom()), t.data.xs = {}, t.data.targets = t.convertDataToTargets(e), n.data_filter && (t.data.targets = t.data.targets.filter(n.data_filter.bind(t.api))), n.data_hide && t.addHiddenTargetIds(n.data_hide === !0 ? t.mapToIds(t.data.targets) : n.data_hide), n.legend_hide && t.addHiddenLegendIds(n.legend_hide === !0 ? t.mapToIds(t.data.targets) : n.legend_hide), t.updateSizes(), t.updateScales(!0), s) {
			let { x: e, y: i, y2: a, subX: s, subY: c, subY2: l } = r;
			e && (e.domain(Ue(t.getXDomain(t.data.targets), !n.axis_x_inverted)), s.domain(e.domain()), o.xDomain = e.domain()), i && (i.domain(t.getYDomain(t.data.targets, "y")), c.domain(i.domain())), a && (a.domain(t.getYDomain(t.data.targets, "y2")), l && l.domain(a.domain()));
		}
		if (n.render_mode === "canvas") {
			if (!t.initCanvas) throw Error("[billboard.js] Please import and call canvas() to use render.mode='canvas'.");
			if (t.bindResize(), t.initCanvas(), n.tooltip_show && t.initTooltip(), t.callPluginHook("$init"), z(n.oninit, t.api), t.redraw({
				withTransition: !1,
				withTransform: !0,
				withUpdateXDomain: !0,
				withUpdateOrgXDomain: !0,
				withTransitionForAxis: !1,
				initializing: !0
			}), n.data_onmin || n.data_onmax) {
				let e = t.getMinMaxData();
				z(n.data_onmin, t.api, e.min), z(n.data_onmax, t.api, e.max);
			}
			i.rendered = !0;
			return;
		}
		if (a.svg = a.chart.append("svg").style("overflow", "hidden").style("display", "block"), u && i.inputType) {
			let e = i.inputType === "touch", { onclick: r, onover: o, onout: s } = n, c = n.interaction_inputType_touch?.preventDefault, l = te(c) && c || !1, u = e ? { passive: !l && (!isNaN(c) && c || null) === null } : void 0;
			a.svg.on("click", r?.bind(t.api) || null).on(e ? "touchstart" : "mouseenter", o?.bind(t.api) || null, u).on(e ? "touchend" : "mouseleave", s?.bind(t.api) || null);
		}
		n.svg_classname && a.svg.attr("class", n.svg_classname);
		let p = M(n.color_tiles) && t.patterns;
		(s || p || d || l || f || t.hasLegendDefsPoint?.()) && (a.defs = a.svg.append("defs"), s && [
			"id",
			"idXAxis",
			"idYAxis",
			"idGrid"
		].forEach((e) => {
			t.appendClip(a.defs, i.clip[e]);
		}), t.generateTextBGColorFilter(f), p && t.patterns.forEach((e) => a.defs.append(() => e.node))), t.updateSvgSize(), t.bindResize();
		let m = a.svg.append("g").classed(V.main, !0).attr("transform", c || l ? null : t.getTranslate("main"));
		if (a.main = m, n.subchart_show && t.initSubchart(), n.tooltip_show && t.initTooltip(), n.title_text && t.initTitle(), !l && n.legend_show && t.initLegend(), n.data_empty_label_text && m.append("text").attr("class", `${Yi.text} ${V.empty}`).attr("text-anchor", "middle").attr("dominant-baseline", "middle"), s && (n.regions.length && t.initRegion?.(), !n.clipPath && t.axis.init()), m.append("g").classed(V.chart, !0).attr("clip-path", s ? i.clip.path : null), t.callPluginHook("$init"), t.initChartElements(), s && (u && t.initEventRect?.(), t.initGrid?.(), n.clipPath && t.axis?.init()), t.updateTargets(t.data.targets), t.updateDimension(), z(n.oninit, t.api), t.setBackground(), t.redraw({
			withTransition: !1,
			withTransform: !0,
			withUpdateXDomain: !0,
			withUpdateOrgXDomain: !0,
			withTransitionForAxis: !1,
			initializing: !0
		}), n.data_onmin || n.data_onmax) {
			let e = t.getMinMaxData();
			z(n.data_onmin, t.api, e.min), z(n.data_onmax, t.api, e.max);
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
				let t = Fe(n);
				(n === "line" && e.hasTypeOf(t) || e.hasType(n)) && i.push(t);
			}
		} else if (r) i.push("Treemap");
		else if (e.hasType("funnel")) i.push("Funnel");
		else {
			let t = e.hasType("polar"), r = e.hasType("gauge");
			n || i.push("Arc", "Pie"), r ? i.push("Gauge") : n ? i.push("Radar") : t && i.push("Polar");
		}
		for (let t of i) e[`init${t}`]();
		I(e.config.data_labels) && !e.hasArcType(null, ["radar"]) && e.initText();
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
		if (I(e)) {
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
				let n = Fe(e);
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
		let t = this, { $el: { svg: n }, $T: r } = t, i = `.${V.target}`;
		e && (i += `, .${Fi.chartCircles} > .${Fi.circles}`), r(n.selectAll(i).filter((e) => t.isTargetToShow(e.id))).style("opacity", null);
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
			let i = N(r) ? t[r] : r;
			t[n] = Me(e, `with${n}`, i);
		}
		return t;
	}
	initialOpacity(e) {
		let t = this, { withoutFadeIn: n } = t.state;
		return t.getBaseValue(e) !== null && n[e.id] ? null : "0";
	}
	bindResize() {
		let e = this, { $el: t, config: n, state: r } = e, i = Na(n.resize_timer), { resize_auto: a } = n, o = [];
		o.push(() => z(n.onresize, e.api)), /^(true|parent)$/.test(a) && o.push(() => {
			let t = r.current.width, i = r.current.height;
			e.setContainerSize(), (t !== r.current.width || i !== r.current.height) && (r.resizing = !0, n.legend_show && (e.updateSizes(), r.isCanvasMode ? e.updateHtmlLegend?.() : e.updateLegend()), e.api.flush(!1));
		}), o.push(() => {
			z(n.onresized, e.api), r.resizing = !1;
		}), o.forEach((e) => i.add(e)), e.resizeFunction = i, a === "parent" && T.ResizeObserver ? (e.resizeFunction.resizeObserver = new T.ResizeObserver(e.resizeFunction.bind(e))).observe(t.chart.node().parentNode) : (a === "parent" && T.console?.warn?.("[billboard.js] resize.auto='parent' requires ResizeObserver; falling back to window resize."), T.addEventListener("resize", e.resizeFunction));
	}
	callPluginHook(e, ...t) {
		this.config.plugins.forEach((n) => {
			e === "$beforeInit" && (n.$$ = this, this.api.plugins.push(n)), n[e](...t);
		});
	}
};
ze(Um.prototype, [
	oo,
	lo,
	fo,
	No,
	Fo,
	bu,
	xf,
	Mo,
	Cf,
	If,
	Lf,
	zf,
	Bm,
	Bf,
	Vf,
	Zf,
	ep,
	rp,
	ip,
	op
]);
//#endregion
//#region node_modules/billboard.js/dist-esm/config/config.js
function Wm(e) {
	let t = this.config, n, r, i, a = () => {
		let e = r.shift();
		if (e && n && ae(n) && e in n) return n = n[e], a();
		if (!e) return n;
	};
	Object.keys(t).forEach((o) => {
		n = e, r = o.split("_"), i = a(), F(i) && (t[o] = i);
	}), this.api && (this.state.orgConfig = e);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/Chart/api/chart.js
var Gm = {
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
		if (I(e)) {
			e.callPluginHook("$willDestroy"), e.cache?.remove(["setOverOut", "callOverOutForTouch"]), e.charts.splice(e.charts.indexOf(this), 1), e.charts.length === 0 && Ba(), e.unbindAllEvents(), i?.select("*").interrupt(), t.canvasFlowFrame !== null && T.cancelAnimationFrame?.(t.canvasFlowFrame), t.canvasFlowFrame = null, t.canvasFlowFinish = null, t.pendingRaf !== null && T.cancelAnimationFrame?.(t.pendingRaf), t.pendingRaf = null, e.canvasRenderer?.destroy(), e.canvasEngine?.destroy(), e.resizeFunction?.clear(), e.resizeFunction?.resizeObserver?.disconnect(), e.resizeFunction && T.removeEventListener("resize", e.resizeFunction), n.classed("bb", !1).style("position", null), t.isCanvasMode && n.style("min-height", t.canvasInlineStyle.minHeight || null), n.selectChildren().remove(), r && r.parentNode.removeChild(r), Object.keys(this).forEach((t) => {
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
		return e && a in r ? F(t) ? (r[a] = t, o = t, n && this.flush()) : o = r[a] : (arguments.length === 0 || se(e)) && (o = i.orgConfig), o;
	}
}, Km = { color(e) {
	return this.internal.color(e);
} }, qm = function(e) {
	let { targets: t } = this.internal.data;
	if (!ee(e)) {
		let n = L(e) ? e : [e];
		return t.filter((e) => n.some((t) => t === e.id));
	}
	return t;
};
ze(qm, {
	shown: function(e) {
		return this.internal.filterTargetsToShow(this.data(e));
	},
	values: function(e, t = !0) {
		let n = null;
		if (e) {
			let r = this.data(e);
			L(r) && (n = [], r.forEach((e) => {
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
var Jm = { data: qm }, Ym = {
	focus(e) {
		let t = this.internal, { state: n } = t, r = t.mapToTargetIds(e);
		if (n.isCanvasMode) {
			let e = r.filter(t.isTargetToShow, t), i = new Set(e), a = t.mapToTargetIds().filter((e) => !i.has(e) && t.isTargetToShow(e));
			t.revertLegend(), t.toggleFocusLegend(a, !1), t.toggleFocusLegend(e, !0), n.focusedTargetIds = i, n.defocusedTargetIds = new Set(a), t.renderCanvasFrame?.(void 0, null, !1);
			return;
		}
		let i = t.$el.svg.selectAll(t.selectorTargets(r.filter(t.isTargetToShow, t)));
		this.revert(), this.defocus(), i.classed(U.focused, !0).classed(U.defocused, !1), t.hasArcType() && !n.hasRadar && (t.expandArc(r), t.hasType("gauge") && t.markOverlapped(e, t, `.${zi.gaugeValue}`)), t.toggleFocusLegend(r, !0), n.focusedTargetIds = new Set(r), r.forEach((e) => n.defocusedTargetIds.delete(e));
	},
	defocus(e) {
		let t = this.internal, { state: n } = t, r = t.mapToTargetIds(e);
		if (n.isCanvasMode) {
			let e = r.filter(t.isTargetToShow, t);
			t.toggleFocusLegend(e, !1), e.forEach((e) => n.focusedTargetIds.delete(e)), n.defocusedTargetIds = new Set(e), t.renderCanvasFrame?.(void 0, null, !1);
			return;
		}
		t.$el.svg.selectAll(t.selectorTargets(r.filter(t.isTargetToShow, t))).classed(U.focused, !1).classed(U.defocused, !0), t.hasArcType(null, ["polar"]) && (t.unexpandArc(r), t.hasType("gauge") && t.undoMarkOverlapped(t, `.${zi.gaugeValue}`)), t.toggleFocusLegend(r, !1), r.forEach((e) => n.focusedTargetIds.delete(e)), n.defocusedTargetIds = new Set(r);
	},
	revert(e) {
		let t = this.internal, { config: n, state: r, $el: i } = t, o = t.mapToTargetIds(e), s = () => {
			n.legend_show && (t.showLegend(o.filter(t.isLegendToShow.bind(t))), i.legend.selectAll(t.selectorLegends(o)).filter(function() {
				return a(this).classed(U.legendItemFocused);
			}).classed(U.legendItemFocused, !1));
		};
		if (r.isCanvasMode) {
			let e = !!r.focusedTargetIds?.size || !!r.defocusedTargetIds?.size;
			s(), r.focusedTargetIds = /* @__PURE__ */ new Set(), r.defocusedTargetIds = /* @__PURE__ */ new Set(), e && t.renderCanvasFrame?.(void 0, null, !1);
			return;
		}
		i.svg.selectAll(t.selectorTargets(o)).classed(U.focused, !1).classed(U.defocused, !1), t.hasArcType(null, ["polar"]) && t.unexpandArc(o), s(), r.focusedTargetIds = /* @__PURE__ */ new Set(), r.defocusedTargetIds = /* @__PURE__ */ new Set();
	}
}, Xm = { legend: {
	show: function(e) {
		let t = this.internal;
		t.showLegend(t.mapToTargetIds(e)), t.updateAndRedraw({ withLegend: !0 });
	},
	hide: function(e) {
		let t = this.internal;
		t.hideLegend(t.mapToTargetIds(e)), t.updateAndRedraw({ withLegend: !0 });
	}
} }, Zm = {
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
			}), uo.call(t, e.done, e.resizeAfter);
			return;
		}
		if (i) {
			let n = t.mapToTargetIds(e.unload === !0 ? null : e.unload);
			t.unload(n, () => {
				!t.config || !t.cache || (t.cache.remove(n), k(() => t.loadFromArgs(e)));
			});
		} else t.loadFromArgs(e);
	},
	unload(e) {
		let t = this.internal, n = e || {};
		se(n) && this.tooltip.hide(), L(n) ? n = { ids: n } : N(n) && (n = { ids: [n] });
		let r = t.mapToTargetIds(n.ids);
		t.state.dirty.data = !0, t.state._eventRectFingerprint = null, t.unload(r, () => {
			!t.config || !t.cache || (t.redraw({
				withUpdateOrgXDomain: !0,
				withUpdateXDomain: !0,
				withLegend: !0
			}), t.cache.remove(r), uo.call(t, n.done, n.resizeAfter));
		});
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/Chart/api/show.js
function Qm(e, t, n, r = !1) {
	let i = this.internal, a = i.mapToTargetIds(t), o = new Set(a), s = [...i.state.hiddenTargetIds].filter((e) => o.has(e));
	if (i.state.toggling = !0, i.state.dirty.visibility = !0, i[`${e ? "remove" : "add"}HiddenTargetIds`](a), i.state.isCanvasMode) {
		e && s.length ? z(i.config.data_onshown, this, s) : !e && s.length === 0 && z(i.config?.data_onhidden, this, a), r || i.redraw({
			withUpdateOrgXDomain: !0,
			withUpdateXDomain: !0,
			withLegend: !0
		}), i.state.toggling = !1;
		return;
	}
	let c = i.$el.svg.selectAll(i.selectorTargets(a)), l = e ? null : "0";
	e && s.length && (c.style("display", null), z(i.config.data_onshown, this, s)), i.$T(c).style("opacity", l, "important").call(Pe, () => {
		!e && s.length === 0 && (c.style("display", "none"), z(i.config?.data_onhidden, this, a)), c.style("opacity", l);
	}), n.withLegend && i[`${e ? "show" : "hide"}Legend`](a), r || i.redraw({
		withUpdateOrgXDomain: !0,
		withUpdateXDomain: !0,
		withLegend: !0
	}), i.state.toggling = !1;
}
var $m = {
	show(e, t = {}) {
		Qm.call(this, !0, e, t);
	},
	hide(e, t = {}) {
		Qm.call(this, !1, e, t);
	},
	toggle(e, t = {}) {
		let n = this.internal, r = {
			show: [],
			hide: []
		};
		n.mapToTargetIds(e).forEach((e) => r[n.isTargetToShow(e) ? "hide" : "show"].push(e)), r.show.length && r.hide.length ? (Qm.call(this, !0, r.show, t, !0), Qm.call(this, !1, r.hide, t)) : (r.show.length && this.show(r.show, t), r.hide.length && this.hide(r.hide, t));
	}
}, eh = { tooltip: {
	show: function(e) {
		let t = this.internal, { $el: n, config: r, state: { eventReceiver: i, hasFunnel: a, hasTreemap: o, inputType: s } } = t, c, l;
		if (e.mouse && (l = e.mouse), e.data) {
			let { data: s } = e, u = t.getYScaleById(s.id)?.(s.value);
			if ((a || o) && s.id) {
				let e = t.selectorTarget(s.id, void 0, `.${qi.shape}`);
				i.rect = n.main.select(e);
			} else t.isMultipleX() ? l = [t.xx(s), u] : (r.tooltip_grouped || (l = [0, u]), c = s.index ?? (t.hasArcType() && s.id ? t.getArcElementByIdOrIndex(s.id)?.datum().index : t.getIndexByX(s.x)));
		} else F(e.x) ? c = t.getIndexByX(e.x) : F(e.index) && (c = e.index);
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
} }, th = class e {
	plugins = [];
	internal;
	constructor(t) {
		let n = new Um(this);
		this.internal = n, (function e(t, n, r) {
			Object.keys(t).forEach((i) => {
				let a = M(t[i]), o = n !== r, s = I(t[i]), c = s && Object.keys(t[i]).length > 0;
				n[i] = a && (!o && c || o) ? t[i].bind(r) : s && !a ? {} : t[i], c && e(t[i], n[i], r);
			});
		})(e.prototype, this, this), Wm.call(n, t), n.beforeInit(), n.init();
	}
};
ze(th.prototype, [
	Gm,
	Km,
	Jm,
	Ym,
	Xm,
	Zm,
	$m,
	eh
]);
//#endregion
//#region node_modules/billboard.js/dist-esm/Chart/api/grid.js
function nh(e) {
	return Array.isArray(e) ? e : [e];
}
function rh(e) {
	e.state.canvasShape = null, e.renderCanvasFrame?.(void 0, null, !1);
}
function ih(e, t) {
	let n = this.internal, { config: r } = n, i = r.transition_duration && Oa(), a = `grid_${t}_lines`;
	return e ? (r[a] = nh(e), n.state.isCanvasMode ? (rh(n), r[a]) : (n.updateGrid(), n.redrawGrid(i), r[a])) : r[a];
}
function ah(e, t) {
	let n = `grid_${t}_lines`;
	return ih.bind(this)(this.internal.config[n].concat(e ? nh(e) : []), t);
}
function oh(e, t) {
	let n = this.internal;
	if (n.state.isCanvasMode) {
		let r = n.getGridFilterToRemove?.(e) || (() => !0), i = `grid_${t ? "x" : "y"}_lines`;
		n.config[i] = n.config[i].filter((e) => !r(e)), rh(n);
		return;
	}
	n.removeGridLines(e, t);
}
var sh = function(e) {
	return ih.bind(this)(e, "x");
};
ze(sh, {
	add(e) {
		return ah.bind(this)(e, "x");
	},
	remove(e) {
		return oh.bind(this)(e, !0);
	}
});
var ch = function(e) {
	return ih.bind(this)(e, "y");
};
ze(ch, {
	add(e) {
		return ah.bind(this)(e, "y");
	},
	remove(e) {
		return oh.bind(this)(e, !1);
	}
});
var lh = {
	xgrids: sh,
	ygrids: ch
}, uh = `line.${U.xgridFocus}, line.${U.ygridFocus}`, dh = (e) => j(e.position) || "end", fh = (e) => e.position === "start" ? 4 : e.position === "middle" ? 0 : -4;
function ph(e) {
	let { state: t, $el: { main: n } } = e, r = t._gridFocusEl, i = n.node(), a = r?.nodes?.() || [];
	return a.length && a.every((e) => i?.contains(e)) ? r : t._gridFocusEl = n.selectAll(uh);
}
function mh(e, t, n) {
	return (r) => {
		let i = e ? 0 : t;
		return r.position === "start" ? i = e ? -n : 0 : r.position === "middle" && (i = (e ? -n : t) / 2), i;
	};
}
function hh(e, t) {
	e.each(function() {
		let e = a(this);
		[
			"x1",
			"x2",
			"y1",
			"y2"
		].forEach((t) => e.attr(t, +e.attr(t)));
	});
}
var gh = {
	hasGrid() {
		let { config: e } = this;
		return ["x", "y"].some((t) => e[`grid_${t}_show`] || e[`grid_${t}_lines`].length);
	},
	initGrid() {
		let e = this;
		e.hasGrid() && e.initGridLines(), e.initFocusGrid();
	},
	initGridLines() {
		let { config: e, state: { clip: t }, $el: n } = this;
		(e.grid_x_lines.length || e.grid_y_lines.length) && (n.gridLines.main = n.main.insert("g", `.${V.chart}${e.grid_lines_front ? " + *" : ""}`).attr("clip-path", t.pathGrid).attr("class", `${Hi.grid} ${Hi.gridLines}`), n.gridLines.main.append("g").attr("class", Hi.xgridLines), n.gridLines.main.append("g").attr("class", Hi.ygridLines), n.gridLines.x = ot([]));
	},
	updateXGrid(e) {
		let t = this, { config: n, scale: r, state: i, $el: { main: o, grid: s } } = t, c = n.axis_rotated, l = t.generateGridData(n.grid_x_type, r.x), u = t.axis.isCategorized() ? t.axis.x.tickOffset() : 0, d = (e) => (r.zoom || r.x)(e) + u * (c ? -1 : 1);
		i.xgridAttr = c ? {
			x1: 0,
			x2: i.width,
			y1: d,
			y2: d
		} : {
			x1: d,
			x2: d,
			y1: 0,
			y2: i.height
		}, s.x = o.select(`.${Hi.xgrids}`).selectAll(`.${Hi.xgrid}`).data(l), s.x.exit().remove(), s.x = s.x.enter().append("line").attr("class", Hi.xgrid).merge(s.x), e || s.x.each(function() {
			let e = a(this);
			Object.keys(i.xgridAttr).forEach((t) => {
				e.attr(t, i.xgridAttr[t]);
			}), e.style("opacity", () => +e.attr(c ? "y1" : "x1") === (c ? i.height : 0) ? "0" : null);
		});
	},
	updateYGrid() {
		let e = this, { axis: t, config: n, scale: r, state: i, $el: { grid: a, main: o } } = e, s = n.axis_rotated, c = (e) => r.y(e), l = t.y.getGeneratedTicks(n.grid_y_ticks) || e.scale.y.ticks(n.grid_y_ticks);
		a.y = o.select(`.${Hi.ygrids}`).selectAll(`.${Hi.ygrid}`).data(l), a.y.exit().remove(), a.y = a.y.enter().append("line").attr("class", Hi.ygrid).merge(a.y), a.y.attr("x1", s ? c : 0).attr("x2", s ? c : i.width).attr("y1", s ? 0 : c).attr("y2", s ? i.height : c), hh(a.y);
	},
	updateGrid() {
		let e = this, { $el: { grid: t, gridLines: n } } = e;
		!n.main && e.initGridLines(), t.main.style("visibility", e.hasArcType() ? "hidden" : null), e.hideGridFocus(), e.updateGridLines("x"), e.updateGridLines("y");
	},
	updateGridLines(e) {
		let t = this, { config: n, $el: { gridLines: r, main: i }, $T: o } = t, s = n.axis_rotated, c = e === "x";
		n[`grid_${e}_show`] && t[`update${e.toUpperCase()}Grid`]();
		let l = i.select(`.${Hi[`${e}gridLines`]}`).selectAll(`.${Hi[`${e}gridLine`]}`).data(n[`grid_${e}_lines`]);
		o(l.exit()).style("opacity", "0").remove();
		let u = l.enter().append("g");
		u.append("line").style("opacity", "0"), l = u.merge(l), l.each(function(e) {
			let t = a(this);
			t.select("text").empty() && e.text && t.append("text").style("opacity", "0");
		}), o(l.attr("class", (t) => `${Hi[`${e}gridLine`]} ${t.class || ""}`.trim()).select("text").attr("text-anchor", dh).attr("transform", () => c ? s ? null : "rotate(-90)" : s ? "rotate(-90)" : null).attr("dx", fh).attr("dy", -5)).text(function(e) {
			return e.text ?? this.remove();
		}), r[e] = l;
	},
	redrawGrid(e) {
		let t = this, { config: { axis_rotated: n }, state: { width: r, height: i }, $el: { gridLines: a }, $T: o } = t, s = t.xv.bind(t), c = t.yv.bind(t), l = a.x.select("line"), u = a.x.select("text"), d = a.y.select("line"), f = a.y.select("text");
		return l = o(l, e).attr("x1", n ? 0 : s).attr("x2", n ? r : s).attr("y1", n ? s : 0).attr("y2", n ? s : i), u = o(u, e).attr("x", mh(!n, r, i)).attr("y", s), d = o(d, e).attr("x1", n ? c : 0).attr("x2", n ? c : r).attr("y1", n ? 0 : c).attr("y2", n ? i : c), f = o(f, e).attr("x", mh(n, r, i)).attr("y", c), [
			l.style("opacity", null),
			u.style("opacity", null),
			d.style("opacity", null),
			f.style("opacity", null)
		];
	},
	initFocusGrid() {
		let { config: e, state: t, state: { clip: n }, $el: r } = this;
		t._gridFocusEl = null;
		let i = e.grid_front, a = `.${i && r.gridLines.main ? Hi.gridLines : V.chart}${i ? " + *" : ""}`, o = r.main.insert("g", a).attr("clip-path", n.pathGrid).attr("class", Hi.grid);
		if (r.grid.main = o, e.grid_x_show && o.append("g").attr("class", Hi.xgrids), e.grid_y_show && o.append("g").attr("class", Hi.ygrids), e.axis_tooltip) {
			let e = o.append("g").attr("class", "bb-axis-tooltip");
			e.append("line").attr("class", "bb-axis-tooltip-x"), e.append("line").attr("class", "bb-axis-tooltip-y");
		}
		e.interaction_enabled && e.grid_focus_show && !e.axis_tooltip && (o.append("g").attr("class", U.xgridFocus).append("line").attr("class", U.xgridFocus), e.grid_focus_y && !e.tooltip_grouped && o.append("g").attr("class", U.ygridFocus).append("line").attr("class", U.ygridFocus));
	},
	showAxisGridFocus() {
		let e = this, { config: t, format: n, state: { event: r, width: i, height: o } } = e, s = t.axis_rotated, [c, l] = va(r, e.$el.eventRect?.node()), u = {
			x: c,
			y: l
		};
		for (let [t, r] of Object.entries(e.$el.axisTooltip)) {
			let i = t === "x" && !s || t !== "x" && s ? "x" : "y", a = u[i], o = e.scale[t]?.invert(a);
			o && (o = t === "x" && e.axis.isTimeSeries() ? n.xAxisTick(o) : o?.toFixed(2), r?.attr(i, a).text(o));
		}
		e.$el.main.selectAll("line.bb-axis-tooltip-x, line.bb-axis-tooltip-y").style("visibility", null).each(function(e, t) {
			let n = a(this);
			t === 0 ? n.attr("x1", c).attr("x2", c).attr("y1", t ? 0 : o).attr("y2", t ? o : 0) : n.attr("x1", t ? 0 : i).attr("x2", t ? i : 0).attr("y1", l).attr("y2", l);
		});
	},
	hideAxisGridFocus() {
		let e = this;
		e.$el.main.selectAll(`line.${Mi.axisTooltipX}, line.${Mi.axisTooltipY}`).style("visibility", "hidden"), Object.values(e.$el.axisTooltip).forEach((e) => e?.style("display", "none"));
	},
	showGridFocus(e) {
		let t = this, { config: n, state: { width: r, height: i } } = t, o = n.axis_rotated, s = ph(t), c = (e || [s.datum()]).filter((e) => e && j(t.getBaseValue(e)));
		if (!n.tooltip_show || c.length === 0 || !n.axis_x_forceAsSingle && t.hasType("bubble") || t.hasArcType()) return;
		let l = n.grid_focus_edge && !n.tooltip_grouped, u = t.xx.bind(t);
		s.style("visibility", null).data(c.concat(c)).each(function(e) {
			let n = a(this), s = {
				x: u(e),
				y: t.getYScaleById(e.id)(e.value)
			}, c;
			if (n.classed(U.xgridFocus)) c = o ? [
				null,
				s.x,
				l ? s.y : r,
				s.x
			] : [
				s.x,
				l ? s.y : null,
				s.x,
				i
			];
			else {
				let n = t.axis.getId(e.id) === "y2";
				c = o ? [
					s.y,
					l && !n ? s.x : null,
					s.y,
					l && n ? s.x : i
				] : [
					l && n ? s.x : null,
					s.y,
					l && !n ? s.x : r,
					s.y
				];
			}
			[
				"x1",
				"y1",
				"x2",
				"y2"
			].forEach((e, t) => n.attr(e, c[t]));
		}), hh(s), t.showCircleFocus?.(e);
	},
	hideGridFocus(e = !1) {
		let t = this, { state: { inputType: n, resizing: r } } = t;
		(e || n === "mouse" || !r) && (ph(t).style("visibility", "hidden"), t.hideCircleFocus?.());
	},
	updateGridFocus() {
		let e = this, { state: { inputType: t, width: n, height: r, resizing: i }, $el: { grid: a } } = e, o = a.main.select(`line.${U.xgridFocus}`);
		if (t === "touch") o.empty() ? i && e.showCircleFocus?.() : e.showGridFocus();
		else {
			let t = e.config.axis_rotated;
			o.attr("x1", t ? 0 : -10).attr("x2", t ? n : -10).attr("y1", t ? -10 : 0).attr("y2", t ? -10 : r);
		}
		return !0;
	},
	generateGridData(e, t) {
		let n = this, r = n.$el.main.select(`.${Mi.axisX}`).selectAll(".tick").size(), i = [];
		if (e === "year") {
			let [e, t] = n.getXDomain(n.data.targets).map((e) => e.getFullYear());
			for (let n = e; n <= t; n++) i.push(/* @__PURE__ */ new Date(`${n}-01-01 00:00:00`));
		} else i = t.ticks(10), i.length > r && (i = i.filter((e) => String(e).indexOf(".") < 0));
		return i;
	},
	getGridFilterToRemove(e) {
		return e ? (t) => {
			let n = !1;
			return (L(e) ? e.concat() : [e]).forEach((e) => {
				("value" in e && t.value === e.value || "class" in e && t.class === e.class) && (n = !0);
			}), n;
		} : () => !0;
	},
	removeGridLines(e, t) {
		let n = this, { config: r, $T: i } = n, a = n.getGridFilterToRemove(e), o = (e) => !a(e), s = t ? Hi.xgridLines : Hi.ygridLines, c = t ? Hi.xgridLine : Hi.ygridLine;
		i(n.$el.main.select(`.${s}`).selectAll(`.${c}`).filter(a)).style("opacity", "0").remove();
		let l = `grid_${t ? "x" : "y"}_lines`;
		r[l] = r[l].filter(o);
	}
}, _h = {
	grid_x_show: !1,
	grid_x_type: "tick",
	grid_x_lines: [],
	grid_y_show: !1,
	grid_y_lines: [],
	grid_y_ticks: void 0,
	grid_focus_edge: !1,
	grid_focus_show: !0,
	grid_focus_y: !1,
	grid_front: !1,
	grid_lines_front: !0
}, vh = () => (ze(Um.prototype, gh), th.prototype.xgrids = lh.xgrids, th.prototype.ygrids = lh.ygrids, ca.setOptions([_h]), (vh = () => ({}))()), yh = Object.create(null), bh = {
	version: "4.0.3",
	generate(e) {
		let t = new th(He(Object.create(null), yh, e));
		return t.internal.charts = this.instance, this.instance.push(t), t;
	},
	defaults(e) {
		return R(e) && (yh = e), yh;
	},
	instance: [],
	plugin: {}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/shape/core/point.js
function xh(e) {
	return ae(e) && M(e.create) && M(e.update);
}
function Sh(t, n) {
	let r = this, i = (e, t) => {
		let n = e.attributes;
		for (let r = 0, i; i = n[r]; r++) i = i.name, t.setAttribute(i, e.getAttribute(i));
	}, o = new DOMParser().parseFromString(Ae(t), "image/svg+xml").documentElement, s = E.createElementNS(e.svg, o.nodeName.toLowerCase());
	if (s.id = n, s.style.fill = "inherit", s.style.stroke = "inherit", i(o, s), o.childNodes?.length) {
		let e = a(s);
		"innerHTML" in s ? e.html(Ae(o.innerHTML)) : Le(o.childNodes).forEach((t) => {
			i(t, e.append(t.tagName).node());
		});
	}
	r.$el.defs.node().appendChild(s);
}
var Ch = {
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
		return I(e.point_pattern) ? e.point_pattern : [t];
	},
	generatePoint() {
		let e = this, { $el: t, config: n } = e, r = [], i = e.getValidPointPattern();
		return function(o, s, ...c) {
			return function(l) {
				let u = e.getTargetSelectorSuffix(l.id || l.data?.id || l), d = a(this);
				r.indexOf(u) < 0 && r.push(u);
				let f = i[r.indexOf(u) % i.length];
				if (e.hasValidPointType(f)) f = e[f];
				else if (!xh(f || n.point_type)) {
					let n = e.getDefsPointId(u);
					if (t.defs.select(`#${n}`).size() < 1 && Sh.call(e, f, n), o === "create") return e.custom?.create.bind(s)(d, n, ...c);
					if (o === "update") return e.custom?.update.bind(s)(d, ...c);
				}
				return f[o]?.bind(s)(d, ...c);
			};
		};
	}
}, wh = {
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
function Th(e, t, n) {
	let { config: r } = e, i = (e, n) => {
		let i = P(n) ? n : n === !1 ? void 0 : null;
		i !== null && (r[`axis_${e}_${t}`] = i);
	};
	F(n) && (ae(n) ? Object.keys(n).forEach((e) => {
		i(e, n[e]);
	}) : (P(n) || n === !1) && ["y", "y2"].forEach((e) => {
		i(e, n);
	}), e.state.dirty.data = !0, e.redraw({
		withUpdateOrgXDomain: !0,
		withUpdateXDomain: !0
	}));
}
function Eh(e, t) {
	let { config: n } = e;
	return {
		x: n[`axis_x_${t}`],
		y: n[`axis_y_${t}`],
		y2: n[`axis_y2_${t}`]
	};
}
var Dh = { axis: {
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
		return j(e) || e === !1 ? Th(t, "min", e) : Eh(t, "min");
	},
	max: function(e) {
		let t = this.internal;
		return j(e) || e === !1 ? Th(t, "max", e) : Eh(t, "max");
	},
	range: function(e) {
		let { axis: t } = this;
		if (arguments.length) {
			let { min: n, max: r } = e;
			F(r) && t.max(r), F(n) && t.min(n);
		} else return {
			max: t.max(),
			min: t.min()
		};
	}
} }, Oh = { groups(e) {
	let t = this.internal, { config: n } = t;
	return ee(e) ? n.data_groups : (n.data_groups = e, t.state.dirty.data = !0, t.redraw(), n.data_groups);
} }, kh = {
	x(e) {
		let t = this.internal, { axis: n, data: r } = t, i = n.isCustomX() && n.isCategorized();
		return L(e) && (i ? this.categories(e) : (t.updateTargetX(r.targets, e), t.state.dirty.data = !0, t.redraw({
			withUpdateOrgXDomain: !0,
			withUpdateXDomain: !0
		}))), i ? this.categories() : r.xs;
	},
	xs(e) {
		let t = this.internal;
		return R(e) && (t.updateTargetXs(t.data.targets, e), t.state.dirty.data = !0, t.redraw({
			withUpdateOrgXDomain: !0,
			withUpdateXDomain: !0
		})), t.data.xs;
	}
};
//#endregion
//#region node_modules/d3-axis/src/identity.js
function Ah(e) {
	return e;
}
//#endregion
//#region node_modules/d3-axis/src/axis.js
var jh = 1, Mh = 2, Nh = 3, Ph = 4, Fh = 1e-6;
function Ih(e) {
	return "translate(" + e + ",0)";
}
function Lh(e) {
	return "translate(0," + e + ")";
}
function Rh(e) {
	return (t) => +e(t);
}
function zh(e, t) {
	return t = Math.max(0, e.bandwidth() - t * 2) / 2, e.round() && (t = Math.round(t)), (n) => +e(n) + t;
}
function Bh() {
	return !this.__axis;
}
function Vh(e, t) {
	var n = [], r = null, i = null, a = 6, o = 6, s = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : .5, l = e === jh || e === Ph ? -1 : 1, u = e === Ph || e === Mh ? "x" : "y", d = e === jh || e === Nh ? Ih : Lh;
	function f(f) {
		var p = r ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()), m = i ?? (t.tickFormat ? t.tickFormat.apply(t, n) : Ah), h = Math.max(a, 0) + s, g = t.range(), _ = +g[0] + c, v = +g[g.length - 1] + c, y = (t.bandwidth ? zh : Rh)(t.copy(), c), b = f.selection ? f.selection() : f, x = b.selectAll(".domain").data([null]), S = b.selectAll(".tick").data(p, t).order(), C = S.exit(), w = S.enter().append("g").attr("class", "tick"), T = S.select("line"), E = S.select("text");
		x = x.merge(x.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), S = S.merge(w), T = T.merge(w.append("line").attr("stroke", "currentColor").attr(u + "2", l * a)), E = E.merge(w.append("text").attr("fill", "currentColor").attr(u, l * h).attr("dy", e === jh ? "0em" : e === Nh ? "0.71em" : "0.32em")), f !== b && (x = x.transition(f), S = S.transition(f), T = T.transition(f), E = E.transition(f), C = C.transition(f).attr("opacity", Fh).attr("transform", function(e) {
			return isFinite(e = y(e)) ? d(e + c) : this.getAttribute("transform");
		}), w.attr("opacity", Fh).attr("transform", function(e) {
			var t = this.parentNode.__axis;
			return d((t && isFinite(t = t(e)) ? t : y(e)) + c);
		})), C.remove(), x.attr("d", e === Ph || e === Mh ? o ? "M" + l * o + "," + _ + "H" + c + "V" + v + "H" + l * o : "M" + c + "," + _ + "V" + v : o ? "M" + _ + "," + l * o + "V" + c + "H" + v + "V" + l * o : "M" + _ + "," + c + "H" + v), S.attr("opacity", 1).attr("transform", function(e) {
			return d(y(e) + c);
		}), T.attr(u + "2", l * a), E.attr(u, l * h).text(m), b.filter(Bh).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === Mh ? "start" : e === Ph ? "end" : "middle"), b.each(function() {
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
function Hh(e) {
	return Vh(jh, e);
}
function Uh(e) {
	return Vh(Mh, e);
}
function Wh(e) {
	return Vh(Nh, e);
}
function Gh(e) {
	return Vh(Ph, e);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/Axis/AxisRendererHelper.js
var Kh = class {
	owner;
	config;
	scale;
	charSize = {};
	constructor(e) {
		let t = Rf(), { config: n, params: r } = e;
		this.owner = e, this.config = n, this.scale = t, (n.noTransition || !r.config.transition_duration) && (n.withoutTransition = !0), n.range = this.scaleExtent((r.orgXScale || t).range());
	}
	getSizeFor1Char(e, t, n = !0) {
		let r = {
			w: 5.5,
			h: 11.5
		};
		return this.charSize[e] && n ? this.charSize[e] : (!t.empty() && t.text("0").call((e) => {
			try {
				let { width: t, height: n } = ba(e.node(), !0);
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
				return j(e) ? n(r) : null;
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
				let t = Rf("_log").domain([r > 0 ? r : 1, i]).range(e.range());
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
		return F(r) ? r : "";
	}
	transitionise(e) {
		let { config: t } = this, n = e;
		if (t.withoutTransition) n = e.interrupt();
		else if (t.transition || !this.owner.params.noTransition) try {
			n = e.transition(t.transition);
		} catch {}
		return n;
	}
}, qh = class {
	helper;
	config;
	params;
	g;
	generatedTicks = [];
	canReuseTickTextOnResize(e) {
		let { config: t, params: n } = this, { config: r, id: i, owner: a } = n, o = /^(x|subX)$/.test(i), s = i === "subX" ? r.subchart_axis_x_tick_format || r.axis_x_tick_format : r[`axis_${i === "subX" ? "x" : i}_tick_format`], c = n.tickMultiline && n.isCategory && !e && !(n.tickWidth > 0);
		return !!(a.state.resizing && !a.state.flowing && !M(r.axis_evalTextSize) && !s && !n.tickTitle && !(o && r.axis_x_tick_autorotate) && !c && t.withoutTransition);
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
		t.tickLength = Math.max(t.innerTickSize, 0) + t.tickPadding, this.config = t, this.params = e, this.helper = new Kh(this);
	}
	create(e) {
		let t = this, { config: n, helper: r, params: i } = t, { scale: o } = r, { orient: s } = n, c = this.splitTickText.bind(t), l = /^(left|right)$/.test(s), u = /^(top|bottom)$/.test(s), d = r.getTickTransformSetter(u ? "x" : "y"), f = d === r.axisX ? "y" : "x", p = /^(top|left)$/.test(s) ? -1 : 1, m = i.tickTextRotate;
		this.config.range = o.rangeExtent ? o.rangeExtent() : r.scaleExtent((i.orgXScale || o).range());
		let { innerTickSize: h, tickLength: g, range: _ } = n, v = i.id, y = v && /^(x|y|y2)$/.test(v) ? i.config[`axis_${v}_tick_text_position`] : {
			x: 0,
			y: 0
		}, b = v === "subX" ? "subchart_axis_x" : `axis_${v}`, x = i.config[`${b}_show`], S = {
			tick: x ? i.config[`${b}_tick_show`] : !1,
			text: x ? i.config[`${b}_tick_text_show`] : !1
		}, C = i.config.axis_evalTextSize, w;
		e.each(function() {
			let e = a(this), b = this.__chart__ || o, x = r.copyScale();
			w = e, this.__chart__ = x, n.tickOffset = i.isCategory ? (x(1) - x(0)) / 2 : 0;
			let T = e.selectAll(".domain").data([0]);
			if (T.enter().append("path").attr("class", "domain").merge(T).attr("d", () => {
				let e = n.outerTickSize * p;
				return u ? `M${_[0]},${e}V0H${_[1]}V${e}` : `M${e},${_[0]}H0V${_[1]}H${e}`;
			}), S.tick || S.text) {
				let a = n.tickValues || r.generateTicks(x, l || i.config.axis_rotated);
				t.generatedTicks = a;
				let o = e.selectAll(".tick");
				if (t.canReuseTickNodesOnResize(o, a, l || i.config.axis_rotated, S)) d(o, x);
				else {
					o = o.data(a, x);
					let e = o.enter().insert("g", ".domain").attr("class", "tick"), n = o.exit().remove();
					o = e.merge(o), S.tick && e.append("line"), S.text && e.append("text");
					let _ = !e.empty() || !n.empty(), w = S.text && !_ && t.canReuseTickTextOnResize(l || i.config.axis_rotated), T = {
						w: 0,
						h: 0
					}, E = o.selectAll("text.__bb-empty");
					if (S.text && !w) {
						let e = o.select("text"), n = [];
						E = e, M(C) && (T = C.bind(t.params.owner.api)(e.node(), v), this.classList.contains(V.dummy) && (this.sizeFor1Char = T)), (!T || T.w === 0 || T.h === 0) && (T = t.helper.getSizeFor1Char(s, e, !!C));
						let d = e.selectAll("tspan").data((e, t) => {
							let o;
							if (i.tickMultiline) o = c(e, x, a, l, T.w);
							else {
								let t = r.textFormatted(e);
								o = L(t) ? t.concat() : [t];
							}
							return n[t] = o.length, o.map((e) => ({
								index: t,
								splitted: e
							}));
						});
						d.exit().remove(), d = d.enter().append("tspan").merge(d).text((e) => e.splitted), d.attr("x", u ? 0 : g * p).attr("dx", (() => {
							let e = 0;
							return /(top|bottom)/.test(s) && m && (e = 8 * Math.sin(m / 180 * Math.PI) * (s === "top" ? -1 : 1)), e + (y.x || 0);
						})()).attr("dy", (e, t) => {
							let r = ".71em", i = 0;
							return s !== "top" && (i = T.h, t === 0 && (i = l ? -((n[e.index] - 1) * (T.h / 2) - 3) : y.y === 0 ? r : 0)), P(i) && y.y ? i + y.y : i || r;
						});
					}
					let D = o.select("line");
					if (e.select("line").attr(`${f}2`, h * p), e.select("text").attr(f, g * p), t.setTickLineTextPosition(D, E, T), i.tickTitle) {
						let e = E.select("title"), t = i.tickTitle;
						(e.empty() ? E.append("title") : e).text((e) => t[Number(e)]);
					}
					if (x.bandwidth) {
						let e = x, t = e.bandwidth() / 2;
						b = (n) => e(n) + t, x = b;
					} else b.bandwidth ? b = x : d(n, x);
					o = i.owner.state.flowing ? r.transitionise(o) : i.owner.$T(o), d(e, b), d(o.style("opacity", null), x);
				}
			}
		}), this.g = w;
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
		let { params: a } = this, o = this.helper.textFormatted(e), s = N(o) && o.indexOf("\n") > -1 ? o.split("\n") : [];
		if (s.length) return s;
		if (L(o)) return o;
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
		return e.length ? (t.tickArguments = Le(e), this) : t.tickArguments;
	}
	tickCulling(e) {
		let { config: t } = this;
		return arguments.length ? (t.tickCulling = e, this) : t.tickCulling;
	}
	tickValues(e) {
		let { config: t } = this;
		if (M(e)) t.tickValues = () => e(this.helper.scale.domain());
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
function Jh(e) {
	let t = [e[0], e[e.length - 1]], n = 0, r = null;
	for (let t of e) {
		let e = t.textContent?.length ?? 0;
		e > n && (n = e, r = t);
	}
	r && !t.includes(r) && t.push(r);
	let i = e[Math.floor(e.length / 2)];
	return t.includes(i) || t.push(i), t;
}
var Yh = 50, Xh = Symbol("tickWidthFallback");
function Zh(e) {
	let t = e.select("line").node(), n = t?.ownerDocument?.defaultView?.getComputedStyle ? parseFloat(t.ownerDocument.defaultView.getComputedStyle(t).strokeWidth) : parseFloat(t?.getAttribute?.("stroke-width"));
	return Number.isFinite(n) && n > 0 ? n : 1;
}
function Qh(e, t, n) {
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
function $h(e, t) {
	if (e.length <= Yh) return e;
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
function eg(e) {
	return M(e) ? ug(e) : !Array.isArray(e) || e.length <= Yh ? e : {
		length: e.length,
		first: e[0],
		middle: e[Math.floor(e.length / 2)],
		last: e[e.length - 1]
	};
}
function tg(e) {
	return e[Xh];
}
function ng(e, t) {
	P(t) ? Object.defineProperty(e, Xh, {
		configurable: !0,
		value: t,
		writable: !0
	}) : delete e[Xh];
}
function rg(e) {
	e.length = 0, ng(e);
}
function ig(e, t, n) {
	rg(e), e.length = t, ng(e, n);
}
function ag(e) {
	let t = [];
	return t.length = e.length, Object.keys(e).forEach((n) => {
		let r = +n;
		t[r] = e[r];
	}), ng(t, tg(e)), t;
}
function og(e, t) {
	rg(e), e.length = t.length, Object.keys(t).forEach((n) => {
		let r = +n;
		e[r] = t[r];
	}), ng(e, tg(t));
}
function sg(e, t, n) {
	let r = e[t];
	if (P(r)) return r;
	let i = Number(r);
	return Number.isFinite(i) ? i : n;
}
var cg = /* @__PURE__ */ new WeakMap(), lg = 0;
function ug(e) {
	if (!e || !/^(function|object)$/.test(typeof e)) return `${typeof e}:${String(e)}`;
	let t = cg.get(e);
	return t || (t = ++lg, cg.set(e, t)), `${typeof e}:${t}`;
}
function dg(e) {
	return e instanceof Date ? `date:${+e}` : Array.isArray(e) ? `[${e.map((e) => dg(e)).join(",")}]` : e && typeof e == "object" ? `{${Object.keys(e).sort().map((t) => `${t}:${dg(e[t])}`).join(",")}}` : typeof e == "function" ? ug(e) : `${typeof e}:${String(e)}`;
}
function fg(e) {
	return e instanceof Date ? /* @__PURE__ */ new Date(+e) : Array.isArray(e) ? e.map((e) => fg(e)) : e;
}
function pg(e) {
	return {
		width: e.width,
		height: e.height,
		ticks: e.ticks && ag(e.ticks),
		clipPath: e.clipPath,
		domain: fg(e.domain)
	};
}
function mg(e, t) {
	return e.width = t.width, e.height = t.height, e.clipPath = t.clipPath, e.domain = fg(t.domain), e.ticks && t.ticks && og(e.ticks, t.ticks), e;
}
var hg = { getAxisInstance: function() {
	return this.axis || new gg(this);
} }, gg = class {
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
		return `${Mi.axis} ${Mi[`axis${Fe(e)}`]}`;
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
		return !this.isTimeSeries() && (e.data_x || I(e.data_xs));
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
			if (M(r)) r = r.bind(e.api)(e.getXDomain(e.data.targets), n.subX);
			else if (this.isTimeSeries() && r.every(isNaN)) {
				let t = Ye.bind(e);
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
		e === "x" ? o = a ? Gh : Wh : e === "y" ? o = a ? Wh : Gh : e === "y2" && (o = a ? Hh : Uh), i.length && i.forEach((n) => {
			let i = n.tick || {}, a = t.scale[e].copy();
			n.domain && a.domain(n.domain), r.push(o(a).ticks(i.count).tickFormat(M(i.format) ? i.format.bind(t.api) : ((e) => e)).tickValues(i.values).tickSizeOuter(i.outer === !1 ? 0 : 6));
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
		let a = this.owner, { config: o } = a, s = /^(x|subX)$/.test(e), c = s ? "x" : e, l = s && this.isCategorized(), u = this.orient[e], d = i ? 0 : a.getAxisTickRotate(c), f;
		if (s) f = e === "subX" ? a.format.subXAxisTick : a.format.xAxisTick;
		else {
			let t = o[`axis_${e}_tick_format`];
			M(t) && (f = t.bind(a.api));
		}
		let p = this.tick[c], m = He({
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
		s || (m.tickStepSize = o[`axis_${c}_tick_stepSize`]);
		let h = new qh(m).scale(s && a.scale.zoom || t).orient(u);
		if (s && this.isTimeSeries() && p && !M(p)) {
			let e = Ye.bind(a);
			p = p.map((t) => e(t));
		} else !s && this.isTimeSeriesY() && (h.ticks(o.axis_y_tick_time_value), p = null);
		p && h.tickValues(p), h.tickFormat(f || !s && a.isStackNormalized() && a.hasAxisGroupedData(e) && ((e) => `${e}%`)), l && (h.tickCentered(o.axis_x_tick_centered), se(o.axis_x_tick_culling) && (o.axis_x_tick_culling = !1));
		let g = o[`axis_${c}_tick_count`];
		return g && h.ticks(g), h;
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
		return i ? M(i) ? s = i.bind(t.api) : a && (s = (e) => e ? r.axisTime(i)(e) : "") : s = a ? r.defaultAxisTime : o ? t.categoryName : (e) => e < 0 ? e.toFixed(0) : e, M(s) ? (e) => s.apply(t, o ? [e, t.categoryName(e)] : [e]) : s;
	}
	getTickValues(e) {
		let t = this.owner, n = t.config[`axis_${e}_tick_values`], r = t[`${e}Axis`];
		return (M(n) ? n.call(t.api) : n) || (r ? r.tickValues() : void 0);
	}
	getLabelOptionByAxisId(e) {
		return this.owner.config[`axis_${e}_label`];
	}
	getLabelText(e) {
		let t = this.getLabelOptionByAxisId(e);
		return N(t) ? t : t ? t.text : null;
	}
	setLabelText(e, t) {
		let { config: n } = this.owner, r = this.getLabelOptionByAxisId(e);
		N(r) ? n[`axis_${e}_label`] = t : r && (r.text = t);
	}
	getLabelPosition(e, t) {
		let n = this.owner.config.axis_rotated, r = this.getLabelOptionByAxisId(e), i = ae(r) && r.position ? r.position : t[+!n], a = (e) => !!~i.indexOf(e);
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
		return dg({
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
				values: eg(u),
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
		let n = this.owner, { config: r, state: i, $el: { svg: a, chart: o } } = n, { current: s, resizing: c } = i, l = s.maxTickSize[e], u = `${W.maxTickSize}_${e}_${!!t}`, d = n.cache.get(u);
		if (d && d.generation === i.redrawGeneration) return l;
		let f = `axis_${e}`, p = {
			width: 0,
			height: 0
		}, m;
		if (c || t || !r[`${f}_show`] || l.width > 0 && n.filterTargetsToShow().length === 0) return l;
		if ((a || r.render_mode === "canvas") && n.scale[e]?.copy) {
			let a = /^y2?$/.test(e), s = n.getTargetsToShow(), c = n.scale[e].copy().domain(n[`get${a ? "Y" : "X"}Domain`](s, e)), h = c.domain(), g = h[0] === h[1] && h.every((e) => e > 0), _ = L(l.domain) && l.domain[0] === l.domain[1] && l.domain.every((e) => e > 0);
			if (g || _) return l;
			l.domain = h, a || rg(l.ticks);
			let v = this.getAxis(e, c, !1, !1, !0), y = r[`${f}_tick_rotate`], b = r[`${f}_tick_count`];
			if (!r[`${f}_tick_values`] && b && v.tickValues(this.generateTickValues(h, b, a ? this.isTimeSeriesY() : this.isTimeSeries())), !a && this.updateXAxisTickValues(s, v), m = this.getMaxTickSizeFingerprint(e, c, h, v, y, t), d?.fingerprint === m) return n.cache.add(u, {
				...d,
				generation: i.redrawGeneration
			}), mg(l, d.value);
			let x = v.tickValues(), S = !a && Array.isArray(x) && x.length > Yh;
			S && v.tickValues($h(x, v.tickFormat()));
			let C = o.append("svg").style("visibility", "hidden").style("position", "fixed").style("top", "0").style("left", "0"), w = C.append("g").attr("class", `${Mi[`axis${Fe(e)}`]} ${V.dummy}`);
			v.create(w);
			let { sizeFor1Char: T } = w.node(), E = C.selectAll("text").attr("transform", P(y) ? `rotate(${y})` : null), D = S ? x.length : E.size();
			if (T) E.each(function(e, t) {
				let n = this.textContent.length * T.w, r = T.h;
				p.width = Math.max(p.width, n), p.height = Math.max(p.height, r), a || (l.ticks[t] = n);
			});
			else {
				let e = [];
				if (E.each(function() {
					e.push(this);
				}), (e.length <= 5 ? e : Jh(e)).map((e) => ya(e, !0)).forEach((e) => {
					p.width = Math.max(p.width, e.width), p.height = Math.max(p.height, e.height);
				}), !a) for (let t = 0; t < e.length; t++) l.ticks[t] = p.width;
			}
			!a && S && ig(l.ticks, D, p.width), C.remove();
		}
		return Object.keys(p).forEach((e) => {
			p[e] > 0 && (l[e] = p[e]);
		}), n.cache.add(u, {
			fingerprint: m,
			generation: i.redrawGeneration,
			value: pg(l)
		}), l;
	}
	getXAxisTickTextY2Overflow(e) {
		let t = this.owner, { axis: n, config: r, state: { current: i, isLegendRight: a, legendItemWidth: o } } = t, s = t.getAxisTickRotate("x"), c = s > 0 && s < 90;
		if ((n.isCategorized() || n.isTimeSeries()) && r.axis_x_tick_fit && (!r.axis_x_tick_culling || se(r.axis_x_tick_culling)) && !r.axis_x_tick_multiline && c) {
			let n = r.axis_y2_show && i.maxTickSize.y2.width || 0, c = a && o || 0, l = i.width - t.getCurrentPaddingByDirection("left"), u = this.getXAxisTickMaxOverflow(s, l - e) - n - c, d = Math.max(0, u) + e;
			return Math.min(d, l / 2);
		}
		return 0;
	}
	getXAxisTickMaxOverflow(e, t) {
		let n = this.owner, { axis: r, config: i, state: a } = n, o = r.isTimeSeries(), s = a.current.maxTickSize.x.ticks, c = s.length, l = tg(s) ?? a.current.maxTickSize.x.width, { left: u, right: d } = a.axis.x.padding, f = 0, p = c - (o && i.axis_x_tick_fit ? .5 : 0);
		for (let n = 0; n < c; n++) {
			let r = n + 1, i = Math.cos(Math.PI * e / 180) * sg(s, n, l), a = r - (o ? 1 : .5) + u;
			if (a <= 0) continue;
			let c = (t - i) / a, m = p - r, h = d * c, g = m * c + h, _ = i - c / 2 - g;
			f = Math.max(f, _);
		}
		let m = n.getTargetsToShow(), h = 0;
		if (!o && i.axis_x_tick_count <= m.length && m[0].values.length) {
			let e = Rf(n.axis.getAxisType("x"), 0, t - f).domain([u * -1, n.getXDomainMax(n.data.targets) + 1 + d]);
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
			let a = this.getLabelText(t), o = `axis${Fe(t)}`, s = Mi[`${o}Label`];
			if (a) {
				let c = n.select(`text.${s}`);
				c.empty() && (c = n.select(`g.${Mi[o]}`).insert("text", ":first-child").attr("class", s).attr("transform", ["rotate(-90)", null][t === "x" ? +!i : +i]).style("text-anchor", () => this.textAnchorForAxisLabel(t))), r(c, e).attr("x", () => this.xForAxisLabel(t)).attr("dx", () => this.dxForAxisLabel(t)).attr("dy", () => this.dyForAxisLabel(t)).text(a);
			}
		});
	}
	getPadding(e, t, n, r) {
		let i = P(e) ? e : e[t];
		return j(i) ? this.owner.convertPixelToScale(/(bottom|top)/.test(t) ? "y" : "x", i, r) : n;
	}
	generateTickValues(e, t, n) {
		let r = e;
		if (t) {
			let i = M(t) ? t() : t;
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
			i && s && (!n && !r.transition_duration && (i.config.withoutTransition = !0), s.style("opacity", o), i.create(e[`axis${Fe(t)}`]));
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
				let s = a.selectAll(".tick"), c = Ue(s.data(), !e[`${o}_reverse`]), l = c.length, u = e[`${o}_max`], d = !e[`${o}_lines`] || Qh(this[i], c, Zh(s)), f;
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
					r.svg.selectAll(`.${Mi.axisX} .tick text`).attr("clip-path", e);
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
			if (N(a) || a[n]) if (i[n] = r[n]?.append("text").classed(Mi[`axis${n.toUpperCase()}Tooltip`], !0).attr("filter", e.updateTextBGColor({ id: n }, a)), t) {
				let e = n === "x" ? "x" : "y", t = n === "y" ? "1.15em" : n === "x" ? "-0.3em" : "-0.4em";
				i[n]?.attr(e, t).attr(`d${n === "x" ? "y" : "x"}`, n === "x" ? "0.4em" : "-1.3em").style("text-anchor", n === "x" ? "end" : null);
			} else {
				let e = n === "x" ? "y" : "x", t = n === "x" ? "1.15em" : `${n === "y" ? "-" : ""}0.4em`;
				i[n]?.attr(e, t).attr(`d${n === "x" ? "x" : "y"}`, n === "x" ? "-1em" : "0.3em").style("text-anchor", n === "y" ? "end" : null);
			}
		});
	}
}, _g = {
	initEventRect() {
		this.$el.main.select(`.${V.chart}`).append("g").attr("class", Vi.eventRects).style("fill-opacity", "0");
	},
	redrawEventRect() {
		let e = this, { config: t, state: n, $el: r } = e, i = e.isMultipleX(), a = t.axis_x_inverted;
		if (r.eventRect) e.updateEventRect(r.eventRect, !0);
		else if (e.data.targets.length) {
			let a = e.$el.main.select(`.${Vi.eventRects}`).style("cursor", t.zoom_enabled && t.zoom_type !== "drag" ? t.axis_rotated ? "ns-resize" : "ew-resize" : null).classed(Vi.eventRectsMultiple, i).classed(Vi.eventRectsSingle, !i).selectAll(`.${Vi.eventRect}`).data([0]).enter().append("rect");
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
		}, s = t.interaction_inputType_touch.preventDefault, c = te(s) && s || !1, l = !isNaN(s) && s || null, u, d = !c && l === null, f = (e) => {
			let n = e.type, r = e.changedTouches[0][`client${t.axis_rotated ? "Y" : "X"}`];
			n === "touchstart" ? c ? e.preventDefault() : l !== null && (u = r) : n === "touchmove" && (c || u === !0 || l !== null && Math.abs(u - r) >= l) && (u = !0, e.preventDefault());
		};
		r.on("touchstart", (t) => {
			n.event = t, e.updateEventRect();
		}, { passive: d }).on("touchstart.eventRect touchmove.eventRect", (t) => {
			if (n.event = t, !r.empty() && r.classed(Vi.eventRect)) {
				if (n.dragging || n.flowing || e.hasArcType() || t.touches.length > 1) return;
				f(t), a(r.node());
			} else o();
		}, { passive: d }).on("touchend.eventRect", (t) => {
			n.event = t, !r.empty() && r.classed(Vi.eventRect) && (e.hasArcType() || !e.toggleShape || n.cancelClick) && (n.cancelClick &&= !1);
		}, { passive: d }), i.on("touchstart", (e) => {
			n.event = e;
			let { target: t } = e;
			t && t !== r.node() && o();
		}, { passive: d });
	},
	updateEventRect(e, t = !1) {
		let { state: n, $el: r } = this, { eventReceiver: i, width: a, height: o, rendered: s, resizing: c } = n, l = e || r.eventRect;
		(!s || c || t) && (l.attr("x", 0).attr("y", 0).attr("width", a).attr("height", o), (!s || t) && l.classed(Vi.eventRect, !0)), (() => {
			if (i) {
				let e = Sa(r.chart.node());
				i.rect = ya(l.node(), !0).toJSON(), i.rect.top += e.y, i.rect.left += e.x;
			}
		})();
	},
	updateEventType(e) {
		let t = this, n = te(e), r = n ? t.$el.eventRect : e, i = n ? e !== r?.datum().multipleX : !1;
		r && (i && r?.on("mouseover mousemove mouseout click", null), t.isMultipleX() ? t.generateEventRectsForMultipleXs(r) : t.generateEventRectsForSingleX(r));
	},
	updateEventRectData() {
		let e = this, { config: t, scale: n, state: r } = e, i = n.zoom || n.x, a = t.axis_rotated, o = e.isMultipleX(), s = i?.domain(), c = s ? `${s[0]}_${s[1]}_${r.width}_${r.height}_${e.data.targets.length}_${r.dataGeneration}_${[...r.hiddenTargetIds].join(",")}` : null;
		if (c && c === r._eventRectFingerprint) return;
		r._eventRectFingerprint = c;
		let l, u, d, f;
		if (e.updateEventType(o), o) l = 0, u = 0, d = r.width, f = r.height;
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
			l = a ? 0 : n, u = a ? n : 0, d = a ? r.width : t, f = a ? t : r.height;
		}
		let { eventReceiver: p } = r, m = (e, t) => M(e) ? e(t) : e;
		p.coords.splice(p.data.length), p.data.forEach((e, t) => {
			p.coords[t] = {
				x: m(l, e),
				y: m(u, e),
				w: m(d, e),
				h: m(f, e)
			};
		});
	},
	selectRectForSingle(e, t) {
		let n = this, { config: r, state: i, $el: { main: a, circle: o } } = n, s = r.data_selection_enabled, c = r.data_selection_grouped, l = r.data_selection_isselectable, u = r.tooltip_grouped, d = n.getAllValuesOnIndex(t);
		if (u && (n.showTooltip(d, e), n.showGridFocus?.(d), !s || c)) return;
		!o && a.selectAll(`.${V.EXPANDED}:not(.${qi.shape}-${t})`).classed(V.EXPANDED, !1);
		let f = a.selectAll(`.${qi.shape}-${t}`).classed(V.EXPANDED, !0).style("cursor", l ? "pointer" : null).filter(function(e) {
			return n.isWithinShape(this, e);
		});
		if (f.call((r) => {
			let i = r.data();
			s && (c || l?.bind(n.api)(i)) && (e.style.cursor = "pointer"), u || (n.showTooltip(i, e), n.showGridFocus?.(i), n.unexpandCircles?.(), r.each((e) => n.setExpand(t, e.id)));
		}), !u && f.empty()) {
			let a = va(i.event, e), o = d.filter((e) => n.isTargetToShow(e.id) ? n.dist(e, a) < n.getPointSensitivity(e) : !1);
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
		let o = va(i.event, e), s = n.findClosestFromTargets(a, o);
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
					let e = t.scale.zoom || t.scale.x, n = t.axis.xs[s], r = e.invert(va(a, this)[0]);
					c === "step-after" && r < n ? --s : c === "step-before" && r > n && (s += 1);
				}
				t.showAxisGridFocus();
				let l = n.tooltip_grouped && s === i.currentIdx;
				if (r.dragging || r.flowing || t.hasArcType() || l) {
					if (n.tooltip_show && l) {
						let [e, n] = va(a, this), i = r._lastTooltipMouse;
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
		a.selectAll(`.${qi.shape}-${o}`).each(function(e) {
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
		let a = va(r.event, this), o = t.findClosestFromTargets(i, a);
		if (!o) return;
		let s = t.getPointSensitivity(o);
		(t.isBarType(o.id) || t.dist(o, a) < s) && t.$el.main.selectAll(`.${qi.shapes}${t.getTargetSelectorSuffix(o.id)}`).selectAll(`.${qi.shape}-${o.index}`).each(function() {
			(n.data_selection_grouped || t.isWithinShape(this, o)) && (t.toggleShape?.(this, o, o.index), n.data_onclick.bind(t.api)(o, this));
		});
	}
}, vg = {
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
}, yg = {
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
		if (e === "x" && P(n.axis_x_height)) return n.axis_x_height;
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
}, bg = {
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
}, xg = {
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
}, Sg = {
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
}, Cg = {
	axis_evalTextSize: !0,
	axis_rotated: !1,
	axis_tooltip: !1,
	...bg,
	...xg,
	...Sg
}, wg = {
	data_xs: {},
	data_xFormat: "%Y-%m-%d",
	data_xLocaltime: !0,
	data_xSort: !0,
	data_axes: {},
	data_regions: {},
	data_stack_normalize: !1
}, Tg = [
	Dh,
	Oh,
	kh
], Eg = {
	axis: hg,
	clip: vg,
	eventrect: _g,
	sizeAxis: yg
}, Dg = {
	optDataAxis: wg,
	optAxis: Cg
};
//#endregion
//#region node_modules/billboard.js/dist-esm/config/resolver/axis.core.js
function Og(e) {
	return Object.keys(e).map((t) => e[t]);
}
function kg(e = [], t = []) {
	ze(Um.prototype, Og(Eg).concat(e)), ze(th.prototype, Tg), ca.setOptions(Og(Dg).concat(t));
}
//#endregion
//#region node_modules/billboard.js/dist-esm/config/resolver/shape/axis.helpers.js
function Ag(e = [], t = []) {
	kg(e, t);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/shape/core/barRadius.js
function jg(e) {
	let { bar_radius: t, bar_radius_ratio: n } = e.config;
	return P(t) && t > 0 ? () => t : P(n) ? (e) => e * n : null;
}
function Mg(e) {
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
function Ng(e, t, n) {
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
function Pg(e, t, n, r) {
	let i = "";
	return n ? r && e[0] < t ? i = `0 ${t - e[0]}px 0 0` : !r && e[0] > t && (i = `0 0 0 ${e[0] - t}px`) : r && e[1] > t ? i = `${e[1] - t}px 0 0 0` : !r && e[1] < t && (i = `0 0 ${t - e[1]}px 0`), i ? `inset(${i})` : null;
}
function Fg(e, t, n, r, i, a) {
	let { config: o, state: s } = e, c = o.axis_rotated, l = +c, u = +!l, d = t.value < 0, f = o[`axis_${e.axis.getId(t.id)}_inverted`], p = !f && d || f && !d, m = e.isGrouped(t.id), h = r && m && t.value !== 0 ? s.hiddenTargetIds.has(t.id) && a ? a(t) : i.has(`${t.id}:${t.index}`) : !1, g = [n[0][l], n[0][u]], _ = 0;
	if (r) {
		let e = c ? u : l, t = Math.abs(n[2][e] - n[0][e]);
		_ = Math.max(0, !m || h ? r(t) : 0);
	}
	let v = c ? n[1][l] + (p ? _ : -_) : n[1][u] + (p ? -_ : _);
	return {
		radius: _,
		corners: Ng(c, p, _),
		clipPath: _ ? Pg(g, v, c, p) : null,
		indexX: l,
		indexY: u,
		isNegative: p,
		pos: v
	};
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/shape/bar.js
function Ig(e) {
	let t = this.config.bar_connectLine, n = t?.[e] || t;
	return /^(start|end)\-(start|end)$/.test(n) ? n : null;
}
var Lg = {
	initBar() {
		let { $el: e, config: t, state: { clip: n } } = this;
		e.bar = e.main.select(`.${V.chart}`), e.bar = t.bar_front ? e.bar.append("g") : e.bar.insert("g", ":first-child"), e.bar.attr("class", Ni.chartBars).call(this.setCssRule(!1, `.${Ni.chartBars}`, ["pointer-events:none"])), t.clipPath === !1 && (t.bar_radius || t.bar_radius_ratio) && e.bar.attr("clip-path", n.pathXAxis.replace(/#[^)]*/, `#${n.id}`));
	},
	updateTargetsForBar(e) {
		let t = this, { config: n } = t, r = t.getClass("bars", !0), i = n.interaction_enabled && n.data_selection_isselectable;
		zm.call(t, e, {
			type: "Bar",
			elKey: "bar",
			containerClass: Ni.chartBars,
			itemClass: Ni.chartBar,
			initFn: t.initBar
		}).append("g").attr("class", r).style("cursor", (e) => i?.bind?.(t.api)(e) ? "pointer" : null).call((e) => {
			t.setCssRule(!0, ` .${Ni.bar}`, ["fill"], t.color)(e), e.each(function(e) {
				Ig.call(t, e.id) && a(this).append("path").attr("class", Ni.barConnectLine);
			});
		});
	},
	updateBar(e, t = !1) {
		let n = this;
		if (n.state.isCanvasMode) return;
		let { config: r, $el: i, $T: a } = n, o = t ? i.subchart : i, s = n.getClass("bar", !0), c = n.initialOpacity.bind(n);
		r.bar_linearGradient && n.updateLinearGradient();
		let l = o.main.selectAll(`.${Ni.bars}`).selectAll(`.${Ni.bar}`).data(n.labelishData.bind(n));
		a(l.exit(), e).style("opacity", "0").remove(), o.bar = l.enter().append("path").attr("class", s).style("fill", n.generateUpdateBarColor()).merge(l).style("opacity", c), n.setRatioForGroupedData(o.bar.data());
	},
	generateUpdateBarColor() {
		let e = this, t = e.getStylePropValue(e.color) || (() => null);
		return (n) => Rm.call(e, n, "bar_linearGradient", t);
	},
	updateBarColor(e) {
		return this.generateUpdateBarColor()(e);
	},
	redrawBar(e, t, n = !1) {
		let r = this;
		if (r.state.isCanvasMode) return [];
		let { bar: i } = n ? r.$el.subchart : r.$el, o = [], s = /* @__PURE__ */ new Map();
		return [r.$T(i, t, Ke()).attr("d", function(n, i, c) {
			let l = (P(n.value) || r.isBarRangeType(n)) && e(n, i), u = s.get(n.id);
			if (u === void 0 && (u = Ig.call(r, n.id), s.set(n.id, u)), l.length > 1 && o.push(l[1]), i === c.length - 1 && o.length) {
				let e = r.$T(a(this.parentNode.querySelector(`.${Ni.barConnectLine}`)), t, Ke());
				r.updateConnectLine(e, u, o), o.splice(0);
			}
			return l[0];
		}).style("fill", r.generateUpdateBarColor()).style("clip-path", (e) => e.clipPath).style("opacity", null)];
	},
	generateDrawBar(e, t) {
		let n = this, { config: r } = n, i = n.generateGetBarPoints(e, t), a = jg(n), o = a ? Mg(n) : /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
		return (e, t) => {
			let c = i(e, t), { indexX: l, indexY: u, isNegative: d, pos: f, radius: p, clipPath: m } = Fg(n, e, c, a, o, n.isStackingRadiusData.bind(n)), h = ["", ""];
			if (e.clipPath = m, a) {
				let e = `a${p} ${p} ${d ? "1 0 0" : "0 0 1"} `;
				h[u] = `${e}${p},${p}`, h[l] = `${e}${[-p, p][r.axis_rotated ? "sort" : "reverse"]()}`, d && h.reverse();
			}
			let g = r.axis_rotated ? `H${f} ${h[0]}V${c[2][u] - p} ${h[1]}H${c[3][l]}` : `V${f} ${h[0]}H${c[2][l] - p} ${h[1]}V${c[3][u]}`, _ = [`M${c[0][l]},${c[0][u]}${g}z`], v = s.get(e.id);
			return v === void 0 && (v = Ig.call(n, e.id), s.set(e.id, v)), v && _.push(r.axis_rotated ? {
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
			if (t && (P(c) && c > 0 ? t.value > 0 : t.value < 0)) return t;
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
}, Rg = {
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
}, zg = () => (Ag([Lg, Ch], [Rg, wh]), (zg = () => b.BAR)());
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/count.js
function Bg(e) {
	var t = 0, n = e.children, r = n && n.length;
	if (!r) t = 1;
	else for (; --r >= 0;) t += n[r].value;
	e.value = t;
}
function Vg() {
	return this.eachAfter(Bg);
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/each.js
function Hg(e, t) {
	let n = -1;
	for (let r of this) e.call(t, r, ++n, this);
	return this;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
function Ug(e, t) {
	for (var n = this, r = [n], i, a, o = -1; n = r.pop();) if (e.call(t, n, ++o, this), i = n.children) for (a = i.length - 1; a >= 0; --a) r.push(i[a]);
	return this;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
function Wg(e, t) {
	for (var n = this, r = [n], i = [], a, o, s, c = -1; n = r.pop();) if (i.push(n), a = n.children) for (o = 0, s = a.length; o < s; ++o) r.push(a[o]);
	for (; n = i.pop();) e.call(t, n, ++c, this);
	return this;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/find.js
function Gg(e, t) {
	let n = -1;
	for (let r of this) if (e.call(t, r, ++n, this)) return r;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/sum.js
function Kg(e) {
	return this.eachAfter(function(t) {
		for (var n = +e(t.data) || 0, r = t.children, i = r && r.length; --i >= 0;) n += r[i].value;
		t.value = n;
	});
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/sort.js
function qg(e) {
	return this.eachBefore(function(t) {
		t.children && t.children.sort(e);
	});
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/path.js
function Jg(e) {
	for (var t = this, n = Yg(t, e), r = [t]; t !== n;) t = t.parent, r.push(t);
	for (var i = r.length; e !== n;) r.splice(i, 0, e), e = e.parent;
	return r;
}
function Yg(e, t) {
	if (e === t) return e;
	var n = e.ancestors(), r = t.ancestors(), i = null;
	for (e = n.pop(), t = r.pop(); e === t;) i = e, e = n.pop(), t = r.pop();
	return i;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/ancestors.js
function Xg() {
	for (var e = this, t = [e]; e = e.parent;) t.push(e);
	return t;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/descendants.js
function Zg() {
	return Array.from(this);
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/leaves.js
function Qg() {
	var e = [];
	return this.eachBefore(function(t) {
		t.children || e.push(t);
	}), e;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/links.js
function $g() {
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
function* e_() {
	var e = this, t, n = [e], r, i, a;
	do
		for (t = n.reverse(), n = []; e = t.pop();) if (yield e, r = e.children) for (i = 0, a = r.length; i < a; ++i) n.push(r[i]);
	while (n.length);
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/index.js
function t_(e, t) {
	e instanceof Map ? (e = [void 0, e], t === void 0 && (t = i_)) : t === void 0 && (t = r_);
	for (var n = new s_(e), r, i = [n], a, o, s, c; r = i.pop();) if ((o = t(r.data)) && (c = (o = Array.from(o)).length)) for (r.children = o, s = c - 1; s >= 0; --s) i.push(a = o[s] = new s_(o[s])), a.parent = r, a.depth = r.depth + 1;
	return n.eachBefore(o_);
}
function n_() {
	return t_(this).eachBefore(a_);
}
function r_(e) {
	return e.children;
}
function i_(e) {
	return Array.isArray(e) ? e[1] : null;
}
function a_(e) {
	e.data.value !== void 0 && (e.value = e.data.value), e.data = e.data.data;
}
function o_(e) {
	var t = 0;
	do
		e.height = t;
	while ((e = e.parent) && e.height < ++t);
}
function s_(e) {
	this.data = e, this.depth = this.height = 0, this.parent = null;
}
s_.prototype = t_.prototype = {
	constructor: s_,
	count: Vg,
	each: Hg,
	eachAfter: Wg,
	eachBefore: Ug,
	find: Gg,
	sum: Kg,
	sort: qg,
	path: Jg,
	ancestors: Xg,
	descendants: Zg,
	leaves: Qg,
	links: $g,
	copy: n_,
	[Symbol.iterator]: e_
};
//#endregion
//#region node_modules/d3-hierarchy/src/tree.js
function c_(e, t) {
	return e.parent === t.parent ? 1 : 2;
}
function l_(e) {
	var t = e.children;
	return t ? t[0] : e.t;
}
function u_(e) {
	var t = e.children;
	return t ? t[t.length - 1] : e.t;
}
function d_(e, t, n) {
	var r = n / (t.i - e.i);
	t.c -= r, t.s += n, e.c += r, t.z += n, t.m += n;
}
function f_(e) {
	for (var t = 0, n = 0, r = e.children, i = r.length, a; --i >= 0;) a = r[i], a.z += t, a.m += t, t += a.s + (n += a.c);
}
function p_(e, t, n) {
	return e.a.parent === t.parent ? e.a : n;
}
function m_(e, t) {
	this._ = e, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = t;
}
m_.prototype = Object.create(s_.prototype);
function h_(e) {
	for (var t = new m_(e, 0), n, r = [t], i, a, o, s; n = r.pop();) if (a = n._.children) for (n.children = Array(s = a.length), o = s - 1; o >= 0; --o) r.push(i = n.children[o] = new m_(a[o], o)), i.parent = n;
	return (t.parent = new m_(null, 0)).children = [t], t;
}
function g_() {
	var e = c_, t = 1, n = 1, r = null;
	function i(i) {
		var s = h_(i);
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
			f_(t);
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
			for (var i = t, a = t, o = n, s = i.parent.children[0], c = i.m, l = a.m, u = o.m, d = s.m, f; o = u_(o), i = l_(i), o && i;) s = l_(s), a = u_(a), a.a = t, f = o.z + u - i.z - c + e(o._, i._), f > 0 && (d_(p_(o, t, r), t, f), c += f, l += f), u += o.m, c += i.m, d += s.m, l += a.m;
			o && !u_(a) && (a.t = o, a.m += u - l), i && !l_(s) && (s.t = i, s.m += c - d, r = t);
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
var __ = (e) => () => e;
//#endregion
//#region node_modules/d3-zoom/src/event.js
function v_(e, { sourceEvent: t, target: n, transform: r, dispatch: i }) {
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
function y_(e, t, n) {
	this.k = e, this.x = t, this.y = n;
}
y_.prototype = {
	constructor: y_,
	scale: function(e) {
		return e === 1 ? this : new y_(this.k * e, this.x, this.y);
	},
	translate: function(e, t) {
		return e === 0 & t === 0 ? this : new y_(this.k, this.x + this.k * e, this.y + this.k * t);
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
var b_ = new y_(1, 0, 0);
x_.prototype = y_.prototype;
function x_(e) {
	for (; !e.__zoom;) if (!(e = e.parentNode)) return b_;
	return e.__zoom;
}
//#endregion
//#region node_modules/d3-zoom/src/noevent.js
function S_(e) {
	e.stopImmediatePropagation();
}
function C_(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region node_modules/d3-zoom/src/zoom.js
function w_(e) {
	return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function T_() {
	var e = this;
	return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function E_() {
	return this.__zoom || b_;
}
function D_(e) {
	return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * (e.ctrlKey ? 10 : 1);
}
function O_() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function k_(e, t, n) {
	var r = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], o = e.invertY(t[1][1]) - n[1][1];
	return e.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), o > a ? (a + o) / 2 : Math.min(0, a) || Math.max(0, o));
}
function A_() {
	var e = w_, t = T_, n = k_, r = D_, i = O_, o = [0, Infinity], s = [[-Infinity, -Infinity], [Infinity, Infinity]], c = 250, l = Uc, u = mo("start", "zoom", "end"), d, f, p, m = 500, h = 150, g = 0, _ = 10;
	function v(e) {
		e.property("__zoom", E_).on("wheel.zoom", T, { passive: !1 }).on("mousedown.zoom", E).on("dblclick.zoom", D).filter(i).on("touchstart.zoom", O).on("touchmove.zoom", k).on("touchend.zoom touchcancel.zoom", A).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	v.transform = function(e, t, n, r) {
		var i = e.selection ? e.selection() : e;
		i.property("__zoom", E_), e === i ? i.interrupt().each(function() {
			C(this, arguments).event(r).start().zoom(null, typeof t == "function" ? t.apply(this, arguments) : t).end();
		}) : S(e, t, n, r);
	}, v.scaleBy = function(e, t, n, r) {
		v.scaleTo(e, function() {
			return this.__zoom.k * (typeof t == "function" ? t.apply(this, arguments) : t);
		}, n, r);
	}, v.scaleTo = function(e, r, i, a) {
		v.transform(e, function() {
			var e = t.apply(this, arguments), a = this.__zoom, o = i == null ? x(e) : typeof i == "function" ? i.apply(this, arguments) : i, c = a.invert(o), l = typeof r == "function" ? r.apply(this, arguments) : r;
			return n(b(y(a, l), o, c), e, s);
		}, i, a);
	}, v.translateBy = function(e, r, i, a) {
		v.transform(e, function() {
			return n(this.__zoom.translate(typeof r == "function" ? r.apply(this, arguments) : r, typeof i == "function" ? i.apply(this, arguments) : i), t.apply(this, arguments), s);
		}, null, a);
	}, v.translateTo = function(e, r, i, a, o) {
		v.transform(e, function() {
			var e = t.apply(this, arguments), o = this.__zoom, c = a == null ? x(e) : typeof a == "function" ? a.apply(this, arguments) : a;
			return n(b_.translate(c[0], c[1]).scale(o.k).translate(typeof r == "function" ? -r.apply(this, arguments) : -r, typeof i == "function" ? -i.apply(this, arguments) : -i), e, s);
		}, a, o);
	};
	function y(e, t) {
		return t = Math.max(o[0], Math.min(o[1], t)), t === e.k ? e : new y_(t, e.x, e.y);
	}
	function b(e, t, n) {
		var r = t[0] - n[0] * e.k, i = t[1] - n[1] * e.k;
		return r === e.x && i === e.y ? e : new y_(e.k, r, i);
	}
	function x(e) {
		return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2];
	}
	function S(e, n, r, i) {
		e.on("start.zoom", function() {
			C(this, arguments).event(i).start();
		}).on("interrupt.zoom end.zoom", function() {
			C(this, arguments).event(i).end();
		}).tween("zoom", function() {
			var e = this, a = arguments, o = C(e, a).event(i), s = t.apply(e, a), c = r == null ? x(s) : typeof r == "function" ? r.apply(e, a) : r, u = Math.max(s[1][0] - s[0][0], s[1][1] - s[0][1]), d = e.__zoom, f = typeof n == "function" ? n.apply(e, a) : n, p = l(d.invert(c).concat(u / d.k), f.invert(c).concat(u / f.k));
			return function(e) {
				if (e === 1) e = f;
				else {
					var t = p(e), n = u / t[2];
					e = new y_(n, c[0] - t[0] * n, c[1] - t[1] * n);
				}
				o.zoom(null, e);
			};
		});
	}
	function C(e, t, n) {
		return !n && e.__zooming || new w(e, t);
	}
	function w(e, n) {
		this.that = e, this.args = n, this.active = 0, this.sourceEvent = null, this.extent = t.apply(e, n), this.taps = 0;
	}
	w.prototype = {
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
			var t = a(this.that).datum();
			u.call(e, this.that, new v_(e, {
				sourceEvent: this.sourceEvent,
				target: v,
				type: e,
				transform: this.that.__zoom,
				dispatch: u
			}), t);
		}
	};
	function T(t, ...i) {
		if (!e.apply(this, arguments)) return;
		var a = C(this, i).event(t), c = this.__zoom, l = Math.max(o[0], Math.min(o[1], c.k * 2 ** r.apply(this, arguments))), u = at(t);
		if (a.wheel) (a.mouse[0][0] !== u[0] || a.mouse[0][1] !== u[1]) && (a.mouse[1] = c.invert(a.mouse[0] = u)), clearTimeout(a.wheel);
		else if (c.k === l) return;
		else a.mouse = [u, c.invert(u)], Yu(this), a.start();
		C_(t), a.wheel = setTimeout(d, h), a.zoom("mouse", n(b(y(c, l), a.mouse[0], a.mouse[1]), a.extent, s));
		function d() {
			a.wheel = null, a.end();
		}
	}
	function E(t, ...r) {
		if (p || !e.apply(this, arguments)) return;
		var i = t.currentTarget, o = C(this, r, !0).event(t), c = a(t.view).on("mousemove.zoom", f, !0).on("mouseup.zoom", m, !0), l = at(t, i), u = t.clientX, d = t.clientY;
		Co(t.view), S_(t), o.mouse = [l, this.__zoom.invert(l)], Yu(this), o.start();
		function f(e) {
			if (C_(e), !o.moved) {
				var t = e.clientX - u, r = e.clientY - d;
				o.moved = t * t + r * r > g;
			}
			o.event(e).zoom("mouse", n(b(o.that.__zoom, o.mouse[0] = at(e, i), o.mouse[1]), o.extent, s));
		}
		function m(e) {
			c.on("mousemove.zoom mouseup.zoom", null), wo(e.view, o.moved), C_(e), o.event(e).end();
		}
	}
	function D(r, ...i) {
		if (e.apply(this, arguments)) {
			var o = this.__zoom, l = at(r.changedTouches ? r.changedTouches[0] : r, this), u = o.invert(l), d = o.k * (r.shiftKey ? .5 : 2), f = n(b(y(o, d), l, u), t.apply(this, i), s);
			C_(r), c > 0 ? a(this).transition().duration(c).call(S, f, l, r) : a(this).call(v.transform, f, l, r);
		}
	}
	function O(t, ...n) {
		if (e.apply(this, arguments)) {
			var r = t.touches, i = r.length, a = C(this, n, t.changedTouches.length === i).event(t), o, s, c, l;
			for (S_(t), s = 0; s < i; ++s) c = r[s], l = at(c, this), l = [
				l,
				this.__zoom.invert(l),
				c.identifier
			], a.touch0 ? !a.touch1 && a.touch0[2] !== l[2] && (a.touch1 = l, a.taps = 0) : (a.touch0 = l, o = !0, a.taps = 1 + !!d);
			d &&= clearTimeout(d), o && (a.taps < 2 && (f = l[0], d = setTimeout(function() {
				d = null;
			}, m)), Yu(this), a.start());
		}
	}
	function k(e, ...t) {
		if (this.__zooming) {
			var r = C(this, t).event(e), i = e.changedTouches, a = i.length, o, c, l, u;
			for (C_(e), o = 0; o < a; ++o) c = i[o], l = at(c, this), r.touch0 && r.touch0[2] === c.identifier ? r.touch0[0] = l : r.touch1 && r.touch1[2] === c.identifier && (r.touch1[0] = l);
			if (c = r.that.__zoom, r.touch1) {
				var d = r.touch0[0], f = r.touch0[1], p = r.touch1[0], m = r.touch1[1], h = (h = p[0] - d[0]) * h + (h = p[1] - d[1]) * h, g = (g = m[0] - f[0]) * g + (g = m[1] - f[1]) * g;
				c = y(c, Math.sqrt(h / g)), l = [(d[0] + p[0]) / 2, (d[1] + p[1]) / 2], u = [(f[0] + m[0]) / 2, (f[1] + m[1]) / 2];
			} else if (r.touch0) l = r.touch0[0], u = r.touch0[1];
			else return;
			r.zoom("touch", n(b(c, l, u), r.extent, s));
		}
	}
	function A(e, ...t) {
		if (this.__zooming) {
			var n = C(this, t).event(e), r = e.changedTouches, i = r.length, o, s;
			for (S_(e), p && clearTimeout(p), p = setTimeout(function() {
				p = null;
			}, m), o = 0; o < i; ++o) s = r[o], n.touch0 && n.touch0[2] === s.identifier ? delete n.touch0 : n.touch1 && n.touch1[2] === s.identifier && delete n.touch1;
			if (n.touch1 && !n.touch0 && (n.touch0 = n.touch1, delete n.touch1), n.touch0) n.touch0[1] = this.__zoom.invert(n.touch0[0]);
			else if (n.end(), n.taps === 2 && (s = at(s, this), Math.hypot(f[0] - s[0], f[1] - s[1]) < _)) {
				var c = a(this).on("dblclick.zoom");
				c && c.apply(this, arguments);
			}
		}
	}
	return v.wheelDelta = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : __(+e), v) : r;
	}, v.filter = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : __(!!t), v) : e;
	}, v.touchable = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : __(!!e), v) : i;
	}, v.extent = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : __([[+e[0][0], +e[0][1]], [+e[1][0], +e[1][1]]]), v) : t;
	}, v.scaleExtent = function(e) {
		return arguments.length ? (o[0] = +e[0], o[1] = +e[1], v) : [o[0], o[1]];
	}, v.translateExtent = function(e) {
		return arguments.length ? (s[0][0] = +e[0][0], s[1][0] = +e[1][0], s[0][1] = +e[0][1], s[1][1] = +e[1][1], v) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
	}, v.constrain = function(e) {
		return arguments.length ? (n = e, v) : n;
	}, v.duration = function(e) {
		return arguments.length ? (c = +e, v) : c;
	}, v.interpolate = function(e) {
		return arguments.length ? (l = e, v) : l;
	}, v.on = function() {
		var e = u.on.apply(u, arguments);
		return e === u ? v : e;
	}, v.clickDistance = function(e) {
		return arguments.length ? (g = (e = +e) * e, v) : Math.sqrt(g);
	}, v.tapDistance = function(e) {
		return arguments.length ? (_ = +e, v) : _;
	}, v;
}
//#endregion
//#region src/barChart.ts
function j_(e, t) {
	let n = e.series.map((e) => [e.name, ...e.values]), r = bh.generate({
		...vh(),
		axis: { x: {
			categories: e.categories,
			type: "category"
		} },
		bindto: t,
		data: {
			columns: n,
			type: zg()
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
//#region node_modules/d3-force/src/center.js
function M_(e, t) {
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
function N_(e) {
	let t = +this._x.call(null, e), n = +this._y.call(null, e);
	return P_(this.cover(t, n), t, n, e);
}
function P_(e, t, n, r) {
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
function F_(e) {
	var t, n, r = e.length, i, a, o = Array(r), s = Array(r), c = Infinity, l = Infinity, u = -Infinity, d = -Infinity;
	for (n = 0; n < r; ++n) isNaN(i = +this._x.call(null, t = e[n])) || isNaN(a = +this._y.call(null, t)) || (o[n] = i, s[n] = a, i < c && (c = i), i > u && (u = i), a < l && (l = a), a > d && (d = a));
	if (c > u || l > d) return this;
	for (this.cover(c, l).cover(u, d), n = 0; n < r; ++n) P_(this, o[n], s[n], e[n]);
	return this;
}
//#endregion
//#region node_modules/d3-quadtree/src/cover.js
function I_(e, t) {
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
function L_() {
	var e = [];
	return this.visit(function(t) {
		if (!t.length) do
			e.push(t.data);
		while (t = t.next);
	}), e;
}
//#endregion
//#region node_modules/d3-quadtree/src/extent.js
function R_(e) {
	return arguments.length ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
//#endregion
//#region node_modules/d3-quadtree/src/quad.js
function z_(e, t, n, r, i) {
	this.node = e, this.x0 = t, this.y0 = n, this.x1 = r, this.y1 = i;
}
//#endregion
//#region node_modules/d3-quadtree/src/find.js
function B_(e, t, n) {
	var r, i = this._x0, a = this._y0, o, s, c, l, u = this._x1, d = this._y1, f = [], p = this._root, m, h;
	for (p && f.push(new z_(p, i, a, u, d)), n == null ? n = Infinity : (i = e - n, a = t - n, u = e + n, d = t + n, n *= n); m = f.pop();) if (!(!(p = m.node) || (o = m.x0) > u || (s = m.y0) > d || (c = m.x1) < i || (l = m.y1) < a)) if (p.length) {
		var g = (o + c) / 2, _ = (s + l) / 2;
		f.push(new z_(p[3], g, _, c, l), new z_(p[2], o, _, g, l), new z_(p[1], g, s, c, _), new z_(p[0], o, s, g, _)), (h = (t >= _) << 1 | e >= g) && (m = f[f.length - 1], f[f.length - 1] = f[f.length - 1 - h], f[f.length - 1 - h] = m);
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
function V_(e) {
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
function H_(e) {
	for (var t = 0, n = e.length; t < n; ++t) this.remove(e[t]);
	return this;
}
//#endregion
//#region node_modules/d3-quadtree/src/root.js
function U_() {
	return this._root;
}
//#endregion
//#region node_modules/d3-quadtree/src/size.js
function W_() {
	var e = 0;
	return this.visit(function(t) {
		if (!t.length) do
			++e;
		while (t = t.next);
	}), e;
}
//#endregion
//#region node_modules/d3-quadtree/src/visit.js
function G_(e) {
	var t = [], n, r = this._root, i, a, o, s, c;
	for (r && t.push(new z_(r, this._x0, this._y0, this._x1, this._y1)); n = t.pop();) if (!e(r = n.node, a = n.x0, o = n.y0, s = n.x1, c = n.y1) && r.length) {
		var l = (a + s) / 2, u = (o + c) / 2;
		(i = r[3]) && t.push(new z_(i, l, u, s, c)), (i = r[2]) && t.push(new z_(i, a, u, l, c)), (i = r[1]) && t.push(new z_(i, l, o, s, u)), (i = r[0]) && t.push(new z_(i, a, o, l, u));
	}
	return this;
}
//#endregion
//#region node_modules/d3-quadtree/src/visitAfter.js
function K_(e) {
	var t = [], n = [], r;
	for (this._root && t.push(new z_(this._root, this._x0, this._y0, this._x1, this._y1)); r = t.pop();) {
		var i = r.node;
		if (i.length) {
			var a, o = r.x0, s = r.y0, c = r.x1, l = r.y1, u = (o + c) / 2, d = (s + l) / 2;
			(a = i[0]) && t.push(new z_(a, o, s, u, d)), (a = i[1]) && t.push(new z_(a, u, s, c, d)), (a = i[2]) && t.push(new z_(a, o, d, u, l)), (a = i[3]) && t.push(new z_(a, u, d, c, l));
		}
		n.push(r);
	}
	for (; r = n.pop();) e(r.node, r.x0, r.y0, r.x1, r.y1);
	return this;
}
//#endregion
//#region node_modules/d3-quadtree/src/x.js
function q_(e) {
	return e[0];
}
function J_(e) {
	return arguments.length ? (this._x = e, this) : this._x;
}
//#endregion
//#region node_modules/d3-quadtree/src/y.js
function Y_(e) {
	return e[1];
}
function X_(e) {
	return arguments.length ? (this._y = e, this) : this._y;
}
//#endregion
//#region node_modules/d3-quadtree/src/quadtree.js
function Z_(e, t, n) {
	var r = new Q_(t ?? q_, n ?? Y_, NaN, NaN, NaN, NaN);
	return e == null ? r : r.addAll(e);
}
function Q_(e, t, n, r, i, a) {
	this._x = e, this._y = t, this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = a, this._root = void 0;
}
function $_(e) {
	for (var t = { data: e.data }, n = t; e = e.next;) n = n.next = { data: e.data };
	return t;
}
var ev = Z_.prototype = Q_.prototype;
ev.copy = function() {
	var e = new Q_(this._x, this._y, this._x0, this._y0, this._x1, this._y1), t = this._root, n, r;
	if (!t) return e;
	if (!t.length) return e._root = $_(t), e;
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
	}) : t.target[i] = $_(r));
	return e;
}, ev.add = N_, ev.addAll = F_, ev.cover = I_, ev.data = L_, ev.extent = R_, ev.find = B_, ev.remove = V_, ev.removeAll = H_, ev.root = U_, ev.size = W_, ev.visit = G_, ev.visitAfter = K_, ev.x = J_, ev.y = X_;
//#endregion
//#region node_modules/d3-force/src/constant.js
function tv(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-force/src/jiggle.js
function nv(e) {
	return (e() - .5) * 1e-6;
}
//#endregion
//#region node_modules/d3-force/src/link.js
function rv(e) {
	return e.index;
}
function iv(e, t) {
	var n = e.get(t);
	if (!n) throw Error("node not found: " + t);
	return n;
}
function av(e) {
	var t = rv, n = d, r, i = tv(30), a, o, s, c, l, u = 1;
	e ??= [];
	function d(e) {
		return 1 / Math.min(s[e.source.index], s[e.target.index]);
	}
	function f(t) {
		for (var n = 0, i = e.length; n < u; ++n) for (var o = 0, s, d, f, p, m, h, g; o < i; ++o) s = e[o], d = s.source, f = s.target, p = f.x + f.vx - d.x - d.vx || nv(l), m = f.y + f.vy - d.y - d.vy || nv(l), h = Math.sqrt(p * p + m * m), h = (h - a[o]) / h * t * r[o], p *= h, m *= h, f.vx -= p * (g = c[o]), f.vy -= m * g, d.vx += p * (g = 1 - g), d.vy += m * g;
	}
	function p() {
		if (o) {
			var n, i = o.length, l = e.length, u = new Map(o.map((e, n) => [t(e, n, o), e])), d;
			for (n = 0, s = Array(i); n < l; ++n) d = e[n], d.index = n, typeof d.source != "object" && (d.source = iv(u, d.source)), typeof d.target != "object" && (d.target = iv(u, d.target)), s[d.source.index] = (s[d.source.index] || 0) + 1, s[d.target.index] = (s[d.target.index] || 0) + 1;
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
		return arguments.length ? (n = typeof e == "function" ? e : tv(+e), m(), f) : n;
	}, f.distance = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : tv(+e), h(), f) : i;
	}, f;
}
//#endregion
//#region node_modules/d3-force/src/lcg.js
var ov = 1664525, sv = 1013904223, cv = 4294967296;
function lv() {
	let e = 1;
	return () => (e = (ov * e + sv) % cv) / cv;
}
//#endregion
//#region node_modules/d3-force/src/simulation.js
function uv(e) {
	return e.x;
}
function dv(e) {
	return e.y;
}
var fv = 10, pv = Math.PI * (3 - Math.sqrt(5));
function mv(e) {
	var t, n = 1, r = .001, i = 1 - r ** (1 / 300), a = 0, o = .6, s = /* @__PURE__ */ new Map(), c = Fu(d), l = mo("tick", "end"), u = lv();
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
				var i = fv * Math.sqrt(.5 + t), a = t * pv;
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
function hv() {
	var e, t, n, r, i = tv(-30), a, o = 1, s = Infinity, c = .81;
	function l(n) {
		var i, a = e.length, o = Z_(e, uv, dv).visitAfter(d);
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
		if (p * p / c < m) return m < s && (d === 0 && (d = nv(n), m += d * d), f === 0 && (f = nv(n), m += f * f), m < o && (m = Math.sqrt(o * m)), t.vx += d * e.value * r / m, t.vy += f * e.value * r / m), !0;
		if (!(e.length || m >= s)) {
			(e.data !== t || e.next) && (d === 0 && (d = nv(n), m += d * d), f === 0 && (f = nv(n), m += f * f), m < o && (m = Math.sqrt(o * m)));
			do
				e.data !== t && (p = a[e.data.index] * r / m, t.vx += d * p, t.vy += f * p);
			while (e = e.next);
		}
	}
	return l.initialize = function(t, r) {
		e = t, n = r, u();
	}, l.strength = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : tv(+e), u(), l) : i;
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
var gv = -300, _v = 100, vv = 640, yv = 480, bv = 180, xv = 20, Sv = 22, Cv = {
	linkStroke: "#9ca3af",
	nodeFill: "#2563eb",
	nodeFillHovered: "#3b82f6",
	nodeFillSelected: "#f59e0b",
	nodeStroke: "#1e40af",
	nodeStrokeHovered: "#1d4ed8",
	nodeStrokeSelected: "#b45309",
	nodeText: "#ffffff"
};
function wv(e, t, n = {}) {
	let r = t.clientWidth || vv, i = t.clientHeight || yv, o = e.nodes.map((e) => ({ ...e })), s = e.links.map((e) => ({ ...e })), c = Math.min(r, i) * .22;
	for (let [e, t] of o.entries()) {
		let n = e / o.length * Math.PI * 2;
		t.x = r / 2 + Math.cos(n) * c, t.y = i / 2 + Math.sin(n) * c;
	}
	let l = mv(o).force("link", av(s).id((e) => e.id).distance(n.linkDistance ?? _v)).force("charge", hv().strength(n.chargeStrength ?? gv)).force("center", M_(r / 2, i / 2)), u = a(t).append("svg").attr("width", r).attr("height", i).attr("viewBox", `0 0 ${String(r)} ${String(i)}`).style("touch-action", "none"), d = u.append("g"), f = d.selectAll("line").data(s).join("line").attr("stroke", Cv.linkStroke).attr("stroke-width", 2), p = d.selectAll("g").data(o).join("g").style("cursor", "pointer");
	p.append("circle").attr("r", xv).attr("fill", Cv.nodeFill).attr("stroke", Cv.nodeStroke).attr("stroke-width", 2), p.append("text").text((e) => e.id).attr("text-anchor", "middle").attr("dy", 4).attr("fill", Cv.nodeText);
	let m = null, h = null, g = () => {
		p.selectAll("circle").attr("fill", (e) => e.id === m ? Cv.nodeFillSelected : e.id === h ? Cv.nodeFillHovered : Cv.nodeFill).attr("stroke", (e) => e.id === m ? Cv.nodeStrokeSelected : e.id === h ? Cv.nodeStrokeHovered : Cv.nodeStroke).attr("stroke-width", (e) => e.id === m ? 3 : 2).attr("r", (e) => e.id === m || e.id === h ? Sv : xv);
	};
	p.on("mouseenter", (e, t) => {
		h = t.id, g();
	}).on("mouseleave", (e, t) => {
		h === t.id && (h = null), g();
	}).on("click", (e, t) => {
		e.stopPropagation(), m = m === t.id ? null : t.id, g();
	}), u.on("click", () => {
		m = null, g();
	});
	let _ = A_().scaleExtent([.5, 4]).on("zoom", (e) => {
		d.attr("transform", e.transform.toString());
	});
	u.call(_).on("dblclick.zoom", null);
	let v = (e, t) => typeof e == "object" ? e[t] ?? 0 : 0, y = () => {
		f.attr("x1", (e) => v(e.source, "x")).attr("y1", (e) => v(e.source, "y")).attr("x2", (e) => v(e.target, "x")).attr("y2", (e) => v(e.target, "y")), p.attr("transform", (e) => `translate(${String(e.x ?? 0)},${String(e.y ?? 0)})`);
	};
	l.stop(), p.call(jo().on("start", (e, t) => {
		e.sourceEvent?.stopPropagation(), t.fx = t.x, t.fy = t.y;
	}).on("drag", (e, t) => {
		t.x = e.x, t.y = e.y, t.fx = e.x, t.fy = e.y, y();
	}).on("end", (e, t) => {
		t.fx = null, t.fy = null;
	})), y();
	let b = u.node();
	if (b == null) throw Error("Failed to create network diagram SVG element.");
	return {
		destroy: () => {
			l.stop(), u.remove();
		},
		resize: () => {
			let e = t.clientWidth || vv, n = t.clientHeight || yv;
			u.attr("width", e).attr("height", n).attr("viewBox", `0 0 ${String(e)} ${String(n)}`), l.force("center", M_(e / 2, n / 2));
		},
		svg: b,
		triggerAutoLayout: () => {
			l.alpha(1);
			for (let e = 0; e < bv; e += 1) l.tick();
			l.stop(), y();
		}
	};
}
//#endregion
//#region node_modules/d3-geo/src/math.js
var Tv = 1e-6, G = Math.PI, K = G / 2, Ev = G / 4, Dv = G * 2, Ov = 180 / G, q = G / 180, J = Math.abs, kv = Math.atan, Av = Math.atan2, Y = Math.cos, jv = Math.exp, Mv = Math.log, Nv = Math.pow, X = Math.sin, Pv = Math.sign || function(e) {
	return e > 0 ? 1 : e < 0 ? -1 : 0;
}, Fv = Math.sqrt, Iv = Math.tan;
function Lv(e) {
	return e > 1 ? 0 : e < -1 ? G : Math.acos(e);
}
function Rv(e) {
	return e > 1 ? K : e < -1 ? -K : Math.asin(e);
}
//#endregion
//#region node_modules/d3-geo/src/noop.js
function zv() {}
//#endregion
//#region node_modules/d3-geo/src/stream.js
function Bv(e, t) {
	e && Hv.hasOwnProperty(e.type) && Hv[e.type](e, t);
}
var Vv = {
	Feature: function(e, t) {
		Bv(e.geometry, t);
	},
	FeatureCollection: function(e, t) {
		for (var n = e.features, r = -1, i = n.length; ++r < i;) Bv(n[r].geometry, t);
	}
}, Hv = {
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
		Uv(e.coordinates, t, 0);
	},
	MultiLineString: function(e, t) {
		for (var n = e.coordinates, r = -1, i = n.length; ++r < i;) Uv(n[r], t, 0);
	},
	Polygon: function(e, t) {
		Wv(e.coordinates, t);
	},
	MultiPolygon: function(e, t) {
		for (var n = e.coordinates, r = -1, i = n.length; ++r < i;) Wv(n[r], t);
	},
	GeometryCollection: function(e, t) {
		for (var n = e.geometries, r = -1, i = n.length; ++r < i;) Bv(n[r], t);
	}
};
function Uv(e, t, n) {
	var r = -1, i = e.length - n, a;
	for (t.lineStart(); ++r < i;) a = e[r], t.point(a[0], a[1], a[2]);
	t.lineEnd();
}
function Wv(e, t) {
	var n = -1, r = e.length;
	for (t.polygonStart(); ++n < r;) Uv(e[n], t, 1);
	t.polygonEnd();
}
function Gv(e, t) {
	e && Vv.hasOwnProperty(e.type) ? Vv[e.type](e, t) : Bv(e, t);
}
//#endregion
//#region node_modules/d3-geo/src/cartesian.js
function Kv(e) {
	return [Av(e[1], e[0]), Rv(e[2])];
}
function qv(e) {
	var t = e[0], n = e[1], r = Y(n);
	return [
		r * Y(t),
		r * X(t),
		X(n)
	];
}
function Jv(e, t) {
	return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Yv(e, t) {
	return [
		e[1] * t[2] - e[2] * t[1],
		e[2] * t[0] - e[0] * t[2],
		e[0] * t[1] - e[1] * t[0]
	];
}
function Xv(e, t) {
	e[0] += t[0], e[1] += t[1], e[2] += t[2];
}
function Zv(e, t) {
	return [
		e[0] * t,
		e[1] * t,
		e[2] * t
	];
}
function Qv(e) {
	var t = Fv(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
	e[0] /= t, e[1] /= t, e[2] /= t;
}
//#endregion
//#region node_modules/d3-geo/src/compose.js
function $v(e, t) {
	function n(n, r) {
		return n = e(n, r), t(n[0], n[1]);
	}
	return e.invert && t.invert && (n.invert = function(n, r) {
		return n = t.invert(n, r), n && e.invert(n[0], n[1]);
	}), n;
}
//#endregion
//#region node_modules/d3-geo/src/rotation.js
function ey(e, t) {
	return J(e) > G && (e -= Math.round(e / Dv) * Dv), [e, t];
}
ey.invert = ey;
function ty(e, t, n) {
	return (e %= Dv) ? t || n ? $v(ry(e), iy(t, n)) : ry(e) : t || n ? iy(t, n) : ey;
}
function ny(e) {
	return function(t, n) {
		return t += e, J(t) > G && (t -= Math.round(t / Dv) * Dv), [t, n];
	};
}
function ry(e) {
	var t = ny(e);
	return t.invert = ny(-e), t;
}
function iy(e, t) {
	var n = Y(e), r = X(e), i = Y(t), a = X(t);
	function o(e, t) {
		var o = Y(t), s = Y(e) * o, c = X(e) * o, l = X(t), u = l * n + s * r;
		return [Av(c * i - u * a, s * n - l * r), Rv(u * i + c * a)];
	}
	return o.invert = function(e, t) {
		var o = Y(t), s = Y(e) * o, c = X(e) * o, l = X(t), u = l * i - c * a;
		return [Av(c * i + l * a, s * n + u * r), Rv(u * n - s * r)];
	}, o;
}
function ay(e) {
	e = ty(e[0] * q, e[1] * q, e.length > 2 ? e[2] * q : 0);
	function t(t) {
		return t = e(t[0] * q, t[1] * q), t[0] *= Ov, t[1] *= Ov, t;
	}
	return t.invert = function(t) {
		return t = e.invert(t[0] * q, t[1] * q), t[0] *= Ov, t[1] *= Ov, t;
	}, t;
}
//#endregion
//#region node_modules/d3-geo/src/circle.js
function oy(e, t, n, r, i, a) {
	if (n) {
		var o = Y(t), s = X(t), c = r * n;
		i == null ? (i = t + r * Dv, a = t - c / 2) : (i = sy(o, i), a = sy(o, a), (r > 0 ? i < a : i > a) && (i += r * Dv));
		for (var l, u = i; r > 0 ? u > a : u < a; u -= c) l = Kv([
			o,
			-s * Y(u),
			-s * X(u)
		]), e.point(l[0], l[1]);
	}
}
function sy(e, t) {
	t = qv(t), t[0] -= e, Qv(t);
	var n = Lv(-t[1]);
	return ((-t[2] < 0 ? -n : n) + Dv - Tv) % Dv;
}
//#endregion
//#region node_modules/d3-geo/src/clip/buffer.js
function cy() {
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
		lineEnd: zv,
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
function ly(e, t) {
	return J(e[0] - t[0]) < 1e-6 && J(e[1] - t[1]) < 1e-6;
}
//#endregion
//#region node_modules/d3-geo/src/clip/rejoin.js
function uy(e, t, n, r) {
	this.x = e, this.z = t, this.o = n, this.e = r, this.v = !1, this.n = this.p = null;
}
function dy(e, t, n, r, i) {
	var a = [], o = [], s, c;
	if (e.forEach(function(e) {
		if (!((t = e.length - 1) <= 0)) {
			var t, n = e[0], r = e[t], c;
			if (ly(n, r)) {
				if (!n[2] && !r[2]) {
					for (i.lineStart(), s = 0; s < t; ++s) i.point((n = e[s])[0], n[1]);
					i.lineEnd();
					return;
				}
				r[0] += 2 * Tv;
			}
			a.push(c = new uy(n, e, null, !0)), o.push(c.o = new uy(n, null, c, !1)), a.push(c = new uy(r, e, null, !1)), o.push(c.o = new uy(r, null, c, !0));
		}
	}), a.length) {
		for (o.sort(t), fy(a), fy(o), s = 0, c = o.length; s < c; ++s) o[s].e = n = !n;
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
function fy(e) {
	if (t = e.length) {
		for (var t, n = 0, r = e[0], i; ++n < t;) r.n = i = e[n], i.p = r, r = i;
		r.n = i = e[0], i.p = r;
	}
}
//#endregion
//#region node_modules/d3-geo/src/polygonContains.js
function py(e) {
	return J(e[0]) <= G ? e[0] : Pv(e[0]) * ((J(e[0]) + G) % Dv - G);
}
function my(e, t) {
	var n = py(t), r = t[1], i = X(r), a = [
		X(n),
		-Y(n),
		0
	], o = 0, s = 0, c = new un();
	i === 1 ? r = K + Tv : i === -1 && (r = -K - Tv);
	for (var l = 0, u = e.length; l < u; ++l) if (f = (d = e[l]).length) for (var d, f, p = d[f - 1], m = py(p), h = p[1] / 2 + Ev, g = X(h), _ = Y(h), v = 0; v < f; ++v, m = b, g = S, _ = C, p = y) {
		var y = d[v], b = py(y), x = y[1] / 2 + Ev, S = X(x), C = Y(x), w = b - m, T = w >= 0 ? 1 : -1, E = T * w, D = E > G, O = g * S;
		if (c.add(Av(O * T * X(E), _ * C + O * Y(E))), o += D ? w + T * Dv : w, D ^ m >= n ^ b >= n) {
			var k = Yv(qv(p), qv(y));
			Qv(k);
			var A = Yv(a, k);
			Qv(A);
			var j = (D ^ w >= 0 ? -1 : 1) * Rv(A[2]);
			(r > j || r === j && (k[0] || k[1])) && (s += D ^ w >= 0 ? 1 : -1);
		}
	}
	return (o < -1e-6 || o < 1e-6 && c < -1e-12) ^ s & 1;
}
//#endregion
//#region node_modules/d3-geo/src/clip/index.js
function hy(e, t, n, r) {
	return function(i) {
		var a = t(i), o = cy(), s = t(o), c = !1, l, u, d, f = {
			point: p,
			lineStart: h,
			lineEnd: g,
			polygonStart: function() {
				f.point = _, f.lineStart = v, f.lineEnd = y, u = [], l = [];
			},
			polygonEnd: function() {
				f.point = p, f.lineStart = h, f.lineEnd = g, u = Kn(u);
				var e = my(l, r);
				u.length ? (c ||= (i.polygonStart(), !0), dy(u, _y, e, n, i)) : e && (c ||= (i.polygonStart(), !0), i.lineStart(), n(null, null, 1, i), i.lineEnd()), c &&= (i.polygonEnd(), !1), u = l = null;
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
				r > 1 && e & 2 && t.push(t.pop().concat(t.shift())), u.push(t.filter(gy));
			}
		}
		return f;
	};
}
function gy(e) {
	return e.length > 1;
}
function _y(e, t) {
	return ((e = e.x)[0] < 0 ? e[1] - K - Tv : K - e[1]) - ((t = t.x)[0] < 0 ? t[1] - K - Tv : K - t[1]);
}
//#endregion
//#region node_modules/d3-geo/src/clip/antimeridian.js
var vy = hy(function() {
	return !0;
}, yy, xy, [-G, -K]);
function yy(e) {
	var t = NaN, n = NaN, r = NaN, i;
	return {
		lineStart: function() {
			e.lineStart(), i = 1;
		},
		point: function(a, o) {
			var s = a > 0 ? G : -G, c = J(a - t);
			J(c - G) < 1e-6 ? (e.point(t, n = (n + o) / 2 > 0 ? K : -K), e.point(r, n), e.lineEnd(), e.lineStart(), e.point(s, n), e.point(a, n), i = 0) : r !== s && c >= G && (J(t - r) < 1e-6 && (t -= r * Tv), J(a - s) < 1e-6 && (a -= s * Tv), n = by(t, n, a, o), e.point(r, n), e.lineEnd(), e.lineStart(), e.point(s, n), i = 0), e.point(t = a, n = o), r = s;
		},
		lineEnd: function() {
			e.lineEnd(), t = n = NaN;
		},
		clean: function() {
			return 2 - i;
		}
	};
}
function by(e, t, n, r) {
	var i, a, o = X(e - n);
	return J(o) > 1e-6 ? kv((X(t) * (a = Y(r)) * X(n) - X(r) * (i = Y(t)) * X(e)) / (i * a * o)) : (t + r) / 2;
}
function xy(e, t, n, r) {
	var i;
	if (e == null) i = n * K, r.point(-G, i), r.point(0, i), r.point(G, i), r.point(G, 0), r.point(G, -i), r.point(0, -i), r.point(-G, -i), r.point(-G, 0), r.point(-G, i);
	else if (J(e[0] - t[0]) > 1e-6) {
		var a = e[0] < t[0] ? G : -G;
		i = n * a / 2, r.point(-a, i), r.point(0, i), r.point(a, i);
	} else r.point(t[0], t[1]);
}
//#endregion
//#region node_modules/d3-geo/src/clip/circle.js
function Sy(e) {
	var t = Y(e), n = 2 * q, r = t > 0, i = J(t) > Tv;
	function a(t, r, i, a) {
		oy(a, e, n, i, t, r);
	}
	function o(e, n) {
		return Y(e) * Y(n) > t;
	}
	function s(e) {
		var t, n, a, s, u;
		return {
			lineStart: function() {
				s = a = !1, u = 1;
			},
			point: function(d, f) {
				var p = [d, f], m, h = o(d, f), g = r ? h ? 0 : l(d, f) : h ? l(d + (d < 0 ? G : -G), f) : 0;
				if (!t && (s = a = h) && e.lineStart(), h !== a && (m = c(t, p), (!m || ly(t, m) || ly(p, m)) && (p[2] = 1)), h !== a) u = 0, h ? (e.lineStart(), m = c(p, t), e.point(m[0], m[1])) : (m = c(t, p), e.point(m[0], m[1], 2), e.lineEnd()), t = m;
				else if (i && t && r ^ h) {
					var _;
					!(g & n) && (_ = c(p, t, !0)) && (u = 0, r ? (e.lineStart(), e.point(_[0][0], _[0][1]), e.point(_[1][0], _[1][1]), e.lineEnd()) : (e.point(_[1][0], _[1][1]), e.lineEnd(), e.lineStart(), e.point(_[0][0], _[0][1], 3)));
				}
				h && (!t || !ly(t, p)) && e.point(p[0], p[1]), t = p, a = h, n = g;
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
		var i = qv(e), a = qv(n), o = [
			1,
			0,
			0
		], s = Yv(i, a), c = Jv(s, s), l = s[0], u = c - l * l;
		if (!u) return !r && e;
		var d = t * c / u, f = -t * l / u, p = Yv(o, s), m = Zv(o, d);
		Xv(m, Zv(s, f));
		var h = p, g = Jv(m, h), _ = Jv(h, h), v = g * g - _ * (Jv(m, m) - 1);
		if (!(v < 0)) {
			var y = Fv(v), b = Zv(h, (-g - y) / _);
			if (Xv(b, m), b = Kv(b), !r) return b;
			var x = e[0], S = n[0], C = e[1], w = n[1], T;
			S < x && (T = x, x = S, S = T);
			var E = S - x, D = J(E - G) < Tv, O = D || E < 1e-6;
			if (!D && w < C && (T = C, C = w, w = T), O ? D ? C + w > 0 ^ b[1] < (J(b[0] - x) < 1e-6 ? C : w) : C <= b[1] && b[1] <= w : E > G ^ (x <= b[0] && b[0] <= S)) {
				var k = Zv(h, (-g + y) / _);
				return Xv(k, m), [b, Kv(k)];
			}
		}
	}
	function l(t, n) {
		var i = r ? e : G - e, a = 0;
		return t < -i ? a |= 1 : t > i && (a |= 2), n < -i ? a |= 4 : n > i && (a |= 8), a;
	}
	return hy(o, s, a, r ? [0, -e] : [-G, e - G]);
}
//#endregion
//#region node_modules/d3-geo/src/clip/line.js
function Cy(e, t, n, r, i, a) {
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
var wy = 1e9, Ty = -wy;
function Ey(e, t, n, r) {
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
		return J(r[0] - e) < 1e-6 ? i > 0 ? 0 : 3 : J(r[0] - n) < 1e-6 ? i > 0 ? 2 : 1 : J(r[1] - t) < 1e-6 ? +(i > 0) : i > 0 ? 3 : 2;
	}
	function s(e, t) {
		return c(e.x, t.x);
	}
	function c(e, t) {
		var n = o(e, 1), r = o(t, 1);
		return n === r ? n === 0 ? t[1] - e[1] : n === 1 ? e[0] - t[0] : n === 2 ? e[1] - t[1] : t[0] - e[0] : n - r;
	}
	return function(o) {
		var c = o, l = cy(), u, d, f, p, m, h, g, _, v, y, b, x = {
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
			var e = C(), t = b && e, n = (u = Kn(u)).length;
			(t || n) && (o.polygonStart(), t && (o.lineStart(), a(null, null, 1, o), o.lineEnd()), n && dy(u, s, e, a, o), o.polygonEnd()), c = o, u = d = f = null;
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
				var l = [g = Math.max(Ty, Math.min(wy, g)), _ = Math.max(Ty, Math.min(wy, _))], u = [a = Math.max(Ty, Math.min(wy, a)), o = Math.max(Ty, Math.min(wy, o))];
				Cy(l, u, e, t, n, r) ? (v || (c.lineStart(), c.point(l[0], l[1])), c.point(u[0], u[1]), s || c.lineEnd(), b = !1) : s && (c.lineStart(), c.point(a, o), b = !1);
			}
			g = a, _ = o, v = s;
		}
		return x;
	};
}
//#endregion
//#region node_modules/d3-geo/src/identity.js
var Dy = (e) => e, Oy = new un(), ky = new un(), Ay, jy, My, Ny, Py = {
	point: zv,
	lineStart: zv,
	lineEnd: zv,
	polygonStart: function() {
		Py.lineStart = Fy, Py.lineEnd = Ry;
	},
	polygonEnd: function() {
		Py.lineStart = Py.lineEnd = Py.point = zv, Oy.add(J(ky)), ky = new un();
	},
	result: function() {
		var e = Oy / 2;
		return Oy = new un(), e;
	}
};
function Fy() {
	Py.point = Iy;
}
function Iy(e, t) {
	Py.point = Ly, Ay = My = e, jy = Ny = t;
}
function Ly(e, t) {
	ky.add(Ny * e - My * t), My = e, Ny = t;
}
function Ry() {
	Ly(Ay, jy);
}
//#endregion
//#region node_modules/d3-geo/src/path/bounds.js
var zy = Infinity, By = zy, Vy = -zy, Hy = Vy, Uy = {
	point: Wy,
	lineStart: zv,
	lineEnd: zv,
	polygonStart: zv,
	polygonEnd: zv,
	result: function() {
		var e = [[zy, By], [Vy, Hy]];
		return Vy = Hy = -(By = zy = Infinity), e;
	}
};
function Wy(e, t) {
	e < zy && (zy = e), e > Vy && (Vy = e), t < By && (By = t), t > Hy && (Hy = t);
}
//#endregion
//#region node_modules/d3-geo/src/path/centroid.js
var Gy = 0, Ky = 0, qy = 0, Jy = 0, Yy = 0, Xy = 0, Zy = 0, Qy = 0, $y = 0, eb, tb, nb, rb, ib = {
	point: ab,
	lineStart: ob,
	lineEnd: lb,
	polygonStart: function() {
		ib.lineStart = ub, ib.lineEnd = db;
	},
	polygonEnd: function() {
		ib.point = ab, ib.lineStart = ob, ib.lineEnd = lb;
	},
	result: function() {
		var e = $y ? [Zy / $y, Qy / $y] : Xy ? [Jy / Xy, Yy / Xy] : qy ? [Gy / qy, Ky / qy] : [NaN, NaN];
		return Gy = Ky = qy = Jy = Yy = Xy = Zy = Qy = $y = 0, e;
	}
};
function ab(e, t) {
	Gy += e, Ky += t, ++qy;
}
function ob() {
	ib.point = sb;
}
function sb(e, t) {
	ib.point = cb, ab(nb = e, rb = t);
}
function cb(e, t) {
	var n = e - nb, r = t - rb, i = Fv(n * n + r * r);
	Jy += i * (nb + e) / 2, Yy += i * (rb + t) / 2, Xy += i, ab(nb = e, rb = t);
}
function lb() {
	ib.point = ab;
}
function ub() {
	ib.point = fb;
}
function db() {
	pb(eb, tb);
}
function fb(e, t) {
	ib.point = pb, ab(eb = nb = e, tb = rb = t);
}
function pb(e, t) {
	var n = e - nb, r = t - rb, i = Fv(n * n + r * r);
	Jy += i * (nb + e) / 2, Yy += i * (rb + t) / 2, Xy += i, i = rb * e - nb * t, Zy += i * (nb + e), Qy += i * (rb + t), $y += i * 3, ab(nb = e, rb = t);
}
//#endregion
//#region node_modules/d3-geo/src/path/context.js
function mb(e) {
	this._context = e;
}
mb.prototype = {
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
			default: this._context.moveTo(e + this._radius, t), this._context.arc(e, t, this._radius, 0, Dv);
		}
	},
	result: zv
};
//#endregion
//#region node_modules/d3-geo/src/path/measure.js
var hb = new un(), gb, _b, vb, yb, bb, xb = {
	point: zv,
	lineStart: function() {
		xb.point = Sb;
	},
	lineEnd: function() {
		gb && Cb(_b, vb), xb.point = zv;
	},
	polygonStart: function() {
		gb = !0;
	},
	polygonEnd: function() {
		gb = null;
	},
	result: function() {
		var e = +hb;
		return hb = new un(), e;
	}
};
function Sb(e, t) {
	xb.point = Cb, _b = yb = e, vb = bb = t;
}
function Cb(e, t) {
	yb -= e, bb -= t, hb.add(Fv(yb * yb + bb * bb)), yb = e, bb = t;
}
//#endregion
//#region node_modules/d3-geo/src/path/string.js
var wb, Tb, Eb, Db, Ob = class {
	constructor(e) {
		this._append = e == null ? kb : Ab(e), this._radius = 4.5, this._ = "";
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
				if (this._append`M${e},${t}`, this._radius !== Eb || this._append !== Tb) {
					let e = this._radius, t = this._;
					this._ = "", this._append`m0,${e}a${e},${e} 0 1,1 0,${-2 * e}a${e},${e} 0 1,1 0,${2 * e}z`, Eb = e, Tb = this._append, Db = this._, this._ = t;
				}
				this._ += Db;
		}
	}
	result() {
		let e = this._;
		return this._ = "", e.length ? e : null;
	}
};
function kb(e) {
	let t = 1;
	this._ += e[0];
	for (let n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function Ab(e) {
	let t = Math.floor(e);
	if (!(t >= 0)) throw RangeError(`invalid digits: ${e}`);
	if (t > 15) return kb;
	if (t !== wb) {
		let e = 10 ** t;
		wb = t, Tb = function(t) {
			let n = 1;
			this._ += t[0];
			for (let r = t.length; n < r; ++n) this._ += Math.round(arguments[n] * e) / e + t[n];
		};
	}
	return Tb;
}
//#endregion
//#region node_modules/d3-geo/src/path/index.js
function jb(e, t) {
	let n = 3, r = 4.5, i, a;
	function o(e) {
		return e && (typeof r == "function" && a.pointRadius(+r.apply(this, arguments)), Gv(e, i(a))), a.result();
	}
	return o.area = function(e) {
		return Gv(e, i(Py)), Py.result();
	}, o.measure = function(e) {
		return Gv(e, i(xb)), xb.result();
	}, o.bounds = function(e) {
		return Gv(e, i(Uy)), Uy.result();
	}, o.centroid = function(e) {
		return Gv(e, i(ib)), ib.result();
	}, o.projection = function(t) {
		return arguments.length ? (i = t == null ? (e = null, Dy) : (e = t).stream, o) : e;
	}, o.context = function(e) {
		return arguments.length ? (a = e == null ? (t = null, new Ob(n)) : new mb(t = e), typeof r != "function" && a.pointRadius(r), o) : t;
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
		return t === null && (a = new Ob(n)), o;
	}, o.projection(e).digits(n).context(t);
}
//#endregion
//#region node_modules/d3-geo/src/transform.js
function Mb(e) {
	return { stream: Nb(e) };
}
function Nb(e) {
	return function(t) {
		var n = new Pb();
		for (var r in e) n[r] = e[r];
		return n.stream = t, n;
	};
}
function Pb() {}
Pb.prototype = {
	constructor: Pb,
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
function Fb(e, t, n) {
	var r = e.clipExtent && e.clipExtent();
	return e.scale(150).translate([0, 0]), r != null && e.clipExtent(null), Gv(n, e.stream(Uy)), t(Uy.result()), r != null && e.clipExtent(r), e;
}
function Ib(e, t, n) {
	return Fb(e, function(n) {
		var r = t[1][0] - t[0][0], i = t[1][1] - t[0][1], a = Math.min(r / (n[1][0] - n[0][0]), i / (n[1][1] - n[0][1])), o = +t[0][0] + (r - a * (n[1][0] + n[0][0])) / 2, s = +t[0][1] + (i - a * (n[1][1] + n[0][1])) / 2;
		e.scale(150 * a).translate([o, s]);
	}, n);
}
function Lb(e, t, n) {
	return Ib(e, [[0, 0], t], n);
}
function Rb(e, t, n) {
	return Fb(e, function(n) {
		var r = +t, i = r / (n[1][0] - n[0][0]), a = (r - i * (n[1][0] + n[0][0])) / 2, o = -i * n[0][1];
		e.scale(150 * i).translate([a, o]);
	}, n);
}
function zb(e, t, n) {
	return Fb(e, function(n) {
		var r = +t, i = r / (n[1][1] - n[0][1]), a = -i * n[0][0], o = (r - i * (n[1][1] + n[0][1])) / 2;
		e.scale(150 * i).translate([a, o]);
	}, n);
}
//#endregion
//#region node_modules/d3-geo/src/projection/resample.js
var Bb = 16, Vb = Y(30 * q);
function Hb(e, t) {
	return +t ? Wb(e, t) : Ub(e);
}
function Ub(e) {
	return Nb({ point: function(t, n) {
		t = e(t, n), this.stream.point(t[0], t[1]);
	} });
}
function Wb(e, t) {
	function n(r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
		var _ = l - r, v = u - i, y = _ * _ + v * v;
		if (y > 4 * t && h--) {
			var b = o + f, x = s + p, S = c + m, C = Fv(b * b + x * x + S * S), w = Rv(S /= C), T = J(J(S) - 1) < 1e-6 || J(a - d) < 1e-6 ? (a + d) / 2 : Av(x, b), E = e(T, w), D = E[0], O = E[1], k = D - r, A = O - i, j = v * k - _ * A;
			(j * j / y > t || J((_ * k + v * A) / y - .5) > .3 || o * f + s * p + c * m < Vb) && (n(r, i, a, o, s, c, D, O, T, b /= C, x /= C, S, h, g), g.point(D, O), n(D, O, T, b, x, S, l, u, d, f, p, m, h, g));
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
			var a = qv([r, i]), o = e(r, i);
			n(u, d, l, f, p, m, u = o[0], d = o[1], l = r, f = a[0], p = a[1], m = a[2], Bb, t), t.point(u, d);
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
			n(u, d, l, f, p, m, i, a, r, o, s, c, Bb, t), h.lineEnd = y, y();
		}
		return h;
	};
}
//#endregion
//#region node_modules/d3-geo/src/projection/index.js
var Gb = Nb({ point: function(e, t) {
	this.stream.point(e * q, t * q);
} });
function Kb(e) {
	return Nb({ point: function(t, n) {
		var r = e(t, n);
		return this.stream.point(r[0], r[1]);
	} });
}
function qb(e, t, n, r, i) {
	function a(a, o) {
		return a *= r, o *= i, [t + e * a, n - e * o];
	}
	return a.invert = function(a, o) {
		return [(a - t) / e * r, (n - o) / e * i];
	}, a;
}
function Jb(e, t, n, r, i, a) {
	if (!a) return qb(e, t, n, r, i);
	var o = Y(a), s = X(a), c = o * e, l = s * e, u = o / e, d = s / e, f = (s * n - o * t) / e, p = (s * t + o * n) / e;
	function m(e, a) {
		return e *= r, a *= i, [c * e - l * a + t, n - l * e - c * a];
	}
	return m.invert = function(e, t) {
		return [r * (u * e - d * t + f), i * (p - d * e - u * t)];
	}, m;
}
function Yb(e) {
	return Xb(function() {
		return e;
	})();
}
function Xb(e) {
	var t, n = 150, r = 480, i = 250, a = 0, o = 0, s = 0, c = 0, l = 0, u, d = 0, f = 1, p = 1, m = null, h = vy, g = null, _, v, y, b = Dy, x = .5, S, C, w, T, E;
	function D(e) {
		return w(e[0] * q, e[1] * q);
	}
	function O(e) {
		return e = w.invert(e[0], e[1]), e && [e[0] * Ov, e[1] * Ov];
	}
	D.stream = function(e) {
		return T && E === e ? T : T = Gb(Kb(u)(h(S(b(E = e)))));
	}, D.preclip = function(e) {
		return arguments.length ? (h = e, m = void 0, A()) : h;
	}, D.postclip = function(e) {
		return arguments.length ? (b = e, g = _ = v = y = null, A()) : b;
	}, D.clipAngle = function(e) {
		return arguments.length ? (h = +e ? Sy(m = e * q) : (m = null, vy), A()) : m * Ov;
	}, D.clipExtent = function(e) {
		return arguments.length ? (b = e == null ? (g = _ = v = y = null, Dy) : Ey(g = +e[0][0], _ = +e[0][1], v = +e[1][0], y = +e[1][1]), A()) : g == null ? null : [[g, _], [v, y]];
	}, D.scale = function(e) {
		return arguments.length ? (n = +e, k()) : n;
	}, D.translate = function(e) {
		return arguments.length ? (r = +e[0], i = +e[1], k()) : [r, i];
	}, D.center = function(e) {
		return arguments.length ? (a = e[0] % 360 * q, o = e[1] % 360 * q, k()) : [a * Ov, o * Ov];
	}, D.rotate = function(e) {
		return arguments.length ? (s = e[0] % 360 * q, c = e[1] % 360 * q, l = e.length > 2 ? e[2] % 360 * q : 0, k()) : [
			s * Ov,
			c * Ov,
			l * Ov
		];
	}, D.angle = function(e) {
		return arguments.length ? (d = e % 360 * q, k()) : d * Ov;
	}, D.reflectX = function(e) {
		return arguments.length ? (f = e ? -1 : 1, k()) : f < 0;
	}, D.reflectY = function(e) {
		return arguments.length ? (p = e ? -1 : 1, k()) : p < 0;
	}, D.precision = function(e) {
		return arguments.length ? (S = Hb(C, x = e * e), A()) : Fv(x);
	}, D.fitExtent = function(e, t) {
		return Ib(D, e, t);
	}, D.fitSize = function(e, t) {
		return Lb(D, e, t);
	}, D.fitWidth = function(e, t) {
		return Rb(D, e, t);
	}, D.fitHeight = function(e, t) {
		return zb(D, e, t);
	};
	function k() {
		var e = Jb(n, 0, 0, f, p, d).apply(null, t(a, o)), m = Jb(n, r - e[0], i - e[1], f, p, d);
		return u = ty(s, c, l), C = $v(t, m), w = $v(u, C), S = Hb(C, x), A();
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
function Zb(e) {
	var t = 0, n = G / 3, r = Xb(e), i = r(t, n);
	return i.parallels = function(e) {
		return arguments.length ? r(t = e[0] * q, n = e[1] * q) : [t * Ov, n * Ov];
	}, i;
}
//#endregion
//#region node_modules/d3-geo/src/projection/cylindricalEqualArea.js
function Qb(e) {
	var t = Y(e);
	function n(e, n) {
		return [e * t, X(n) / t];
	}
	return n.invert = function(e, n) {
		return [e / t, Rv(n * t)];
	}, n;
}
//#endregion
//#region node_modules/d3-geo/src/projection/conicEqualArea.js
function $b(e, t) {
	var n = X(e), r = (n + X(t)) / 2;
	if (J(r) < 1e-6) return Qb(e);
	var i = 1 + n * (2 * r - n), a = Fv(i) / r;
	function o(e, t) {
		var n = Fv(i - 2 * r * X(t)) / r;
		return [n * X(e *= r), a - n * Y(e)];
	}
	return o.invert = function(e, t) {
		var n = a - t, o = Av(e, J(n)) * Pv(n);
		return n * r < 0 && (o -= G * Pv(e) * Pv(n)), [o / r, Rv((i - (e * e + n * n) * r * r) / (2 * r))];
	}, o;
}
function ex() {
	return Zb($b).scale(155.424).center([0, 33.6442]);
}
//#endregion
//#region node_modules/d3-geo/src/projection/albers.js
function tx() {
	return ex().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7]);
}
//#endregion
//#region node_modules/d3-geo/src/projection/albersUsa.js
function nx(e) {
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
function rx() {
	var e, t, n = tx(), r, i = ex().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), a, o = ex().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), s, c, l = { point: function(e, t) {
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
		return e && t === r ? e : e = nx([
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
		return r = n.translate(e).clipExtent([[c - .455 * t, u - .238 * t], [c + .455 * t, u + .238 * t]]).stream(l), a = i.translate([c - .307 * t, u + .201 * t]).clipExtent([[c - .425 * t + Tv, u + .12 * t + Tv], [c - .214 * t - Tv, u + .234 * t - Tv]]).stream(l), s = o.translate([c - .205 * t, u + .212 * t]).clipExtent([[c - .214 * t + Tv, u + .166 * t + Tv], [c - .115 * t - Tv, u + .234 * t - Tv]]).stream(l), d();
	}, u.fitExtent = function(e, t) {
		return Ib(u, e, t);
	}, u.fitSize = function(e, t) {
		return Lb(u, e, t);
	}, u.fitWidth = function(e, t) {
		return Rb(u, e, t);
	}, u.fitHeight = function(e, t) {
		return zb(u, e, t);
	};
	function d() {
		return e = t = null, u;
	}
	return u.scale(1070);
}
//#endregion
//#region node_modules/d3-geo/src/projection/azimuthal.js
function ix(e) {
	return function(t, n) {
		var r = Y(t), i = Y(n), a = e(r * i);
		return a === Infinity ? [2, 0] : [a * i * X(t), a * X(n)];
	};
}
function ax(e) {
	return function(t, n) {
		var r = Fv(t * t + n * n), i = e(r), a = X(i), o = Y(i);
		return [Av(t * a, r * o), Rv(r && n * a / r)];
	};
}
//#endregion
//#region node_modules/d3-geo/src/projection/azimuthalEqualArea.js
var ox = ix(function(e) {
	return Fv(2 / (1 + e));
});
ox.invert = ax(function(e) {
	return 2 * Rv(e / 2);
});
function sx() {
	return Yb(ox).scale(124.75).clipAngle(179.999);
}
//#endregion
//#region node_modules/d3-geo/src/projection/azimuthalEquidistant.js
var cx = ix(function(e) {
	return (e = Lv(e)) && e / X(e);
});
cx.invert = ax(function(e) {
	return e;
});
function lx() {
	return Yb(cx).scale(79.4188).clipAngle(179.999);
}
//#endregion
//#region node_modules/d3-geo/src/projection/mercator.js
function ux(e, t) {
	return [e, Mv(Iv((K + t) / 2))];
}
ux.invert = function(e, t) {
	return [e, 2 * kv(jv(t)) - K];
};
function dx() {
	return fx(ux).scale(961 / Dv);
}
function fx(e) {
	var t = Yb(e), n = t.center, r = t.scale, i = t.translate, a = t.clipExtent, o = null, s, c, l;
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
		var n = G * r(), i = t(ay(t.rotate()).invert([0, 0]));
		return a(o == null ? [[i[0] - n, i[1] - n], [i[0] + n, i[1] + n]] : e === ux ? [[Math.max(i[0] - n, o), s], [Math.min(i[0] + n, c), l]] : [[o, Math.max(i[1] - n, s)], [c, Math.min(i[1] + n, l)]]);
	}
	return u();
}
//#endregion
//#region node_modules/d3-geo/src/projection/conicConformal.js
function px(e) {
	return Iv((K + e) / 2);
}
function mx(e, t) {
	var n = Y(e), r = e === t ? X(e) : Mv(n / Y(t)) / Mv(px(t) / px(e)), i = n * Nv(px(e), r) / r;
	if (!r) return ux;
	function a(e, t) {
		i > 0 ? t < -K + 1e-6 && (t = -K + Tv) : t > K - 1e-6 && (t = K - Tv);
		var n = i / Nv(px(t), r);
		return [n * X(r * e), i - n * Y(r * e)];
	}
	return a.invert = function(e, t) {
		var n = i - t, a = Pv(r) * Fv(e * e + n * n), o = Av(e, J(n)) * Pv(n);
		return n * r < 0 && (o -= G * Pv(e) * Pv(n)), [o / r, 2 * kv(Nv(i / a, 1 / r)) - K];
	}, a;
}
function hx() {
	return Zb(mx).scale(109.5).parallels([30, 30]);
}
//#endregion
//#region node_modules/d3-geo/src/projection/equirectangular.js
function gx(e, t) {
	return [e, t];
}
gx.invert = gx;
function _x() {
	return Yb(gx).scale(152.63);
}
//#endregion
//#region node_modules/d3-geo/src/projection/conicEquidistant.js
function vx(e, t) {
	var n = Y(e), r = e === t ? X(e) : (n - Y(t)) / (t - e), i = n / r + e;
	if (J(r) < 1e-6) return gx;
	function a(e, t) {
		var n = i - t, a = r * e;
		return [n * X(a), i - n * Y(a)];
	}
	return a.invert = function(e, t) {
		var n = i - t, a = Av(e, J(n)) * Pv(n);
		return n * r < 0 && (a -= G * Pv(e) * Pv(n)), [a / r, i - Pv(r) * Fv(e * e + n * n)];
	}, a;
}
function yx() {
	return Zb(vx).scale(131.154).center([0, 13.9389]);
}
//#endregion
//#region node_modules/d3-geo/src/projection/equalEarth.js
var bx = 1.340264, xx = -.081106, Sx = 893e-6, Cx = .003796, wx = Fv(3) / 2, Tx = 12;
function Ex(e, t) {
	var n = Rv(wx * X(t)), r = n * n, i = r * r * r;
	return [e * Y(n) / (wx * (bx + 3 * xx * r + i * (7 * Sx + 9 * Cx * r))), n * (bx + xx * r + i * (Sx + Cx * r))];
}
Ex.invert = function(e, t) {
	for (var n = t, r = n * n, i = r * r * r, a = 0, o, s, c; a < Tx && (s = n * (bx + xx * r + i * (Sx + Cx * r)) - t, c = bx + 3 * xx * r + i * (7 * Sx + 9 * Cx * r), n -= o = s / c, r = n * n, i = r * r * r, !(J(o) < 1e-12)); ++a);
	return [wx * e * (bx + 3 * xx * r + i * (7 * Sx + 9 * Cx * r)) / Y(n), Rv(X(n) / wx)];
};
function Dx() {
	return Yb(Ex).scale(177.158);
}
//#endregion
//#region node_modules/d3-geo/src/projection/gnomonic.js
function Ox(e, t) {
	var n = Y(t), r = Y(e) * n;
	return [n * X(e) / r, X(t) / r];
}
Ox.invert = ax(kv);
function kx() {
	return Yb(Ox).scale(144.049).clipAngle(60);
}
//#endregion
//#region node_modules/d3-geo/src/projection/orthographic.js
function Ax(e, t) {
	return [Y(t) * X(e), X(t)];
}
Ax.invert = ax(Rv);
function jx() {
	return Yb(Ax).scale(249.5).clipAngle(90 + Tv);
}
//#endregion
//#region node_modules/d3-geo/src/projection/stereographic.js
function Mx(e, t) {
	var n = Y(t), r = 1 + Y(e) * n;
	return [n * X(e) / r, X(t) / r];
}
Mx.invert = ax(function(e) {
	return 2 * kv(e);
});
function Nx() {
	return Yb(Mx).scale(250).clipAngle(142);
}
//#endregion
//#region node_modules/d3-geo/src/projection/transverseMercator.js
function Px(e, t) {
	return [Mv(Iv((K + t) / 2)), -e];
}
Px.invert = function(e, t) {
	return [-t, 2 * kv(jv(e)) - K];
};
function Fx() {
	var e = fx(Px), t = e.center, n = e.rotate;
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
function Z(e) {
	for (var t = e.length / 6 | 0, n = Array(t), r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/categorical/category10.js
var Ix = Z("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Lx = Z("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), Rx = Z("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), zx = Z("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0"), Bx = Z("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), Vx = Z("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), Hx = Z("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), Ux = Z("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), Wx = Z("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), Gx = Z("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), Kx = Z("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"), Q = (e) => gc(e[e.length - 1]), qx = [
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
].map(Z), Jx = Q(qx), Yx = [
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
].map(Z), Xx = Q(Yx), Zx = [
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
].map(Z), Qx = Q(Zx), $x = [
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
].map(Z), eS = Q($x), tS = [
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
].map(Z), nS = Q(tS), rS = [
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
].map(Z), iS = Q(rS), aS = [
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
].map(Z), oS = Q(aS), sS = [
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
].map(Z), cS = Q(sS), lS = [
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
].map(Z), uS = Q(lS), dS = [
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
].map(Z), fS = Q(dS), pS = [
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
].map(Z), mS = Q(pS), hS = [
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
].map(Z), gS = Q(hS), _S = [
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
].map(Z), vS = Q(_S), yS = [
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
].map(Z), bS = Q(yS), xS = [
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
].map(Z), SS = Q(xS), CS = [
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
].map(Z), wS = Q(CS), TS = [
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
].map(Z), ES = Q(TS), DS = [
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
].map(Z), OS = Q(DS), kS = [
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
].map(Z), AS = Q(kS), jS = [
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
].map(Z), MS = Q(jS), NS = [
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
].map(Z), PS = Q(NS), FS = [
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
].map(Z), IS = Q(FS), LS = [
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
].map(Z), RS = Q(LS), zS = [
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
].map(Z), BS = Q(zS), VS = [
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
].map(Z), HS = Q(VS), US = [
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
].map(Z), WS = Q(US), GS = [
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
].map(Z), KS = Q(GS);
//#endregion
//#region node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js
function qS(e) {
	return e = Math.max(0, Math.min(1, e)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - e * (35.34 - e * (2381.73 - e * (6402.7 - e * (7024.72 - e * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + e * (170.73 + e * (52.82 - e * (131.46 - e * (176.58 - e * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + e * (442.36 - e * (2482.43 - e * (6167.24 - e * (6614.94 - e * 2475.67))))))) + ")";
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
var JS = Xc(ic(300, .5, 0), ic(-240, .5, 1)), YS = Xc(ic(-100, .75, .35), ic(80, 1.5, .8)), XS = Xc(ic(260, .75, .35), ic(80, 1.5, .8)), ZS = ic();
function QS(e) {
	(e < 0 || e > 1) && (e -= Math.floor(e));
	var t = Math.abs(e - .5);
	return ZS.h = 360 * e - 100, ZS.s = 1.5 - 1.5 * t, ZS.l = .8 - .9 * t, ZS + "";
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
var $S = ps(), eC = Math.PI / 3, tC = Math.PI * 2 / 3;
function nC(e) {
	var t;
	return e = (.5 - e) * Math.PI, $S.r = 255 * (t = Math.sin(e)) * t, $S.g = 255 * (t = Math.sin(e + eC)) * t, $S.b = 255 * (t = Math.sin(e + tC)) * t, $S + "";
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js
function rC(e) {
	return e = Math.max(0, Math.min(1, e)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + e * (1172.33 - e * (10793.56 - e * (33300.12 - e * (38394.49 - e * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + e * (557.33 + e * (1225.33 - e * (3574.96 - e * (1073.77 + e * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + e * (3211.1 - e * (15327.97 - e * (27814 - e * (22569.18 - e * 6838.66))))))) + ")";
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
function iC(e) {
	var t = e.length;
	return function(n) {
		return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
	};
}
var aC = iC(Z("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")), oC = iC(Z("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), sC = iC(Z("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), cC = iC(Z("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
//#endregion
//#region node_modules/@observablehq/plot/src/defined.js
function lC(e) {
	return e != null && !Number.isNaN(e);
}
function uC(e, t) {
	return lC(t) - +lC(e) || Kt(e, t);
}
function dC(e, t) {
	return lC(t) - +lC(e) || qt(e, t);
}
function fC(e) {
	return e != null && `${e}` != "";
}
function pC(e) {
	return isFinite(e) ? e : NaN;
}
function mC(e) {
	return e > 0 && isFinite(e) ? e : NaN;
}
function hC(e) {
	return e < 0 && isFinite(e) ? e : NaN;
}
//#endregion
//#region node_modules/isoformat/src/format.js
function gC(e, t) {
	if (e instanceof Date || (e = /* @__PURE__ */ new Date(+e)), isNaN(e)) return typeof t == "function" ? t(e) : t;
	let n = e.getUTCHours(), r = e.getUTCMinutes(), i = e.getUTCSeconds(), a = e.getUTCMilliseconds();
	return `${_C(e.getUTCFullYear(), 4)}-${vC(e.getUTCMonth() + 1, 2)}-${vC(e.getUTCDate(), 2)}${n || r || i || a ? `T${vC(n, 2)}:${vC(r, 2)}${i || a ? `:${vC(i, 2)}${a ? `.${vC(a, 3)}` : ""}` : ""}Z` : ""}`;
}
function _C(e) {
	return e < 0 ? `-${vC(-e, 6)}` : e > 9999 ? `+${vC(e, 6)}` : vC(e, 4);
}
function vC(e, t) {
	return `${e}`.padStart(t, "0");
}
//#endregion
//#region node_modules/isoformat/src/parse.js
var yC = /^(?:[-+]\d{2})?\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?(?:Z|[-+]\d{2}:?\d{2})?)?$/;
function bC(e, t) {
	return yC.test(e += "") ? new Date(e) : typeof t == "function" ? t(e) : t;
}
//#endregion
//#region node_modules/@observablehq/plot/src/order.js
function xC(e) {
	if (e == null) return;
	let t = e[0], n = e[e.length - 1];
	return qt(t, n);
}
//#endregion
//#region node_modules/@observablehq/plot/src/time.js
var SC = 1e3, CC = SC * 60, wC = CC * 60, TC = wC * 24, EC = TC * 7, DC = TC * 30, OC = TC * 365, kC = [
	["millisecond", 1],
	["2 milliseconds", 2],
	["5 milliseconds", 5],
	["10 milliseconds", 10],
	["20 milliseconds", 20],
	["50 milliseconds", 50],
	["100 milliseconds", 100],
	["200 milliseconds", 200],
	["500 milliseconds", 500],
	["second", SC],
	["5 seconds", 5 * SC],
	["15 seconds", 15 * SC],
	["30 seconds", 30 * SC],
	["minute", CC],
	["5 minutes", 5 * CC],
	["15 minutes", 15 * CC],
	["30 minutes", 30 * CC],
	["hour", wC],
	["3 hours", 3 * wC],
	["6 hours", 6 * wC],
	["12 hours", 12 * wC],
	["day", TC],
	["2 days", 2 * TC],
	["week", EC],
	["2 weeks", 2 * EC],
	["month", DC],
	["3 months", 3 * DC],
	["6 months", 6 * DC],
	["year", OC],
	["2 years", 2 * OC],
	["5 years", 5 * OC],
	["10 years", 10 * OC],
	["20 years", 20 * OC],
	["50 years", 50 * OC],
	["100 years", 100 * OC]
], AC = /* @__PURE__ */ new Map([
	["second", SC],
	["minute", CC],
	["hour", wC],
	["day", TC],
	["monday", EC],
	["tuesday", EC],
	["wednesday", EC],
	["thursday", EC],
	["friday", EC],
	["saturday", EC],
	["sunday", EC],
	["week", EC],
	["month", DC],
	["year", OC]
]), jC = /* @__PURE__ */ new Map([
	["second", vt],
	["minute", yt],
	["hour", xt],
	["day", Ct],
	["monday", Ot],
	["tuesday", kt],
	["wednesday", At],
	["thursday", jt],
	["friday", Mt],
	["saturday", Nt],
	["sunday", Dt],
	["week", Dt],
	["month", Ht],
	["year", Wt]
]), MC = /* @__PURE__ */ new Map([
	["second", vt],
	["minute", bt],
	["hour", St],
	["day", Tt],
	["monday", It],
	["tuesday", Lt],
	["wednesday", Rt],
	["thursday", zt],
	["friday", Bt],
	["saturday", Vt],
	["sunday", Ft],
	["week", Ft],
	["month", Ut],
	["year", Gt]
]), NC = Symbol("intervalDuration"), PC = Symbol("intervalType");
for (let [e, t] of jC) t[NC] = AC.get(e), t[PC] = "time";
for (let [e, t] of MC) t[NC] = AC.get(e), t[PC] = "utc";
var FC = [
	[
		"year",
		Gt,
		"utc"
	],
	[
		"month",
		Ut,
		"utc"
	],
	[
		"day",
		Tt,
		"utc",
		6 * DC
	],
	[
		"hour",
		St,
		"utc",
		3 * TC
	],
	[
		"minute",
		bt,
		"utc",
		6 * wC
	],
	[
		"second",
		vt,
		"utc",
		30 * CC
	]
], IC = [
	[
		"year",
		Wt,
		"time"
	],
	[
		"month",
		Ht,
		"time"
	],
	[
		"day",
		Ct,
		"time",
		6 * DC
	],
	[
		"hour",
		xt,
		"time",
		3 * TC
	],
	[
		"minute",
		yt,
		"time",
		6 * wC
	],
	[
		"second",
		vt,
		"time",
		30 * CC
	]
], LC = [
	FC[0],
	IC[0],
	FC[1],
	IC[1],
	FC[2],
	IC[2],
	...FC.slice(3)
];
function RC(e) {
	let t = `${e}`.toLowerCase();
	t.endsWith("s") && (t = t.slice(0, -1));
	let n = 1, r = /^(?:(\d+)\s+)/.exec(t);
	switch (r && (t = t.slice(r[0].length), n = +r[1]), t) {
		case "quarter":
			t = "month", n *= 3;
			break;
		case "half": t = "month", n *= 6;
	}
	let i = MC.get(t);
	if (!i) throw Error(`unknown interval: ${e}`);
	if (n > 1 && !i.every) throw Error(`non-periodic interval: ${t}`);
	return [t, n];
}
function zC(e) {
	return VC(RC(e), "time");
}
function BC(e) {
	return VC(RC(e), "utc");
}
function VC([e, t], n) {
	let r = (n === "time" ? jC : MC).get(e);
	return t > 1 && (r = r.every(t), r[NC] = AC.get(e) * t, r[PC] = n), r;
}
function HC(e, t) {
	if (!(t > 1)) return;
	let n = e[NC];
	if (!kC.some(([, e]) => e === n) || n % TC === 0 && TC < n && n < DC) return;
	let [r] = kC[Jt(([, e]) => Math.log(e)).center(kC, Math.log(n * t))];
	return (e[PC] === "time" ? zC : BC)(r);
}
function UC(e, t, n) {
	let r = t === "time" ? Ti : Di;
	if (n == null) return r(e === "year" ? "%Y" : e === "month" ? "%Y-%m" : e === "day" ? "%Y-%m-%d" : e === "hour" || e === "minute" ? "%Y-%m-%dT%H:%M" : e === "second" ? "%Y-%m-%dT%H:%M:%S" : "%Y-%m-%dT%H:%M:%S.%L");
	let i = WC(n);
	switch (e) {
		case "millisecond": return qC(r(".%L"), r(":%M:%S"), i);
		case "second": return qC(r(":%S"), r("%-I:%M"), i);
		case "minute": return qC(r("%-I:%M"), r("%p"), i);
		case "hour": return qC(r("%-I %p"), r("%b %-d"), i);
		case "day": return qC(r("%-d"), r("%b"), i);
		case "month": return qC(r("%b"), r("%Y"), i);
		case "year": return r("%Y");
	}
	throw Error("unable to format time ticks");
}
function WC(e) {
	return e === "left" || e === "right" ? (e, t) => `\n${e}\n${t}` : e === "top" ? (e, t) => `${t}\n${e}` : (e, t) => `${e}\n${t}`;
}
function GC(e) {
	return e === "time" ? IC : e === "utc" ? FC : LC;
}
function KC(e, t, n) {
	let r = Pn(Jn(t, (e, t) => Math.abs(t - e)));
	if (r < 1e3) return UC("millisecond", "utc", n);
	for (let [i, a, o, s] of GC(e)) {
		if (r > s || i === "hour" && !r) break;
		if (t.every((e) => a.floor(e) >= e)) return UC(i, o, n);
	}
}
function qC(e, t, n) {
	return (r, i, a) => {
		let o = e(r, i), s = t(r, i), c = i - xC(a);
		return i !== c && a[c] !== void 0 && s === t(a[c], c) ? o : n(o, s);
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/options.js
var JC = Object.getPrototypeOf(Uint8Array), YC = Object.prototype.toString;
function XC(e) {
	return e instanceof Array || e instanceof JC;
}
function ZC(e) {
	return e instanceof JC && !$C(e);
}
function QC(e) {
	return e?.prototype instanceof JC && !ew(e);
}
function $C(e) {
	return e instanceof BigInt64Array || e instanceof BigUint64Array;
}
function ew(e) {
	return e === BigInt64Array || e === BigUint64Array;
}
var tw = Symbol("reindex");
function nw(e, t, n) {
	let r = typeof t;
	return r === "string" ? DT(e) ? ow(e.getChild(t), n) : iw(e, lw(t), n) : r === "function" ? iw(e, t, n) : r === "number" || t instanceof Date || r === "boolean" ? jw(e, vw(t), n) : typeof t?.transform == "function" ? aw(t.transform(e), n) : rw(aw(t, n), e?.[tw]);
}
function rw(e, t) {
	return e != null && t ? Gw(e, t) : e;
}
function iw(e, t, n) {
	return jw(e, QC(n) ? (e, n) => xw(t(e, n)) : t, n);
}
function aw(e, t) {
	return t === void 0 ? kw(e) : OT(e) ? ow(e, t) : e instanceof t ? e : t.from(e, QC(t) && !ZC(e) ? xw : void 0);
}
function ow(e, t) {
	return e == null ? e : (t === void 0 || t === Array) && kT(e.type) ? Sw(sw(e)) : aw(sw(e), t);
}
function sw(e) {
	return e.nullCount ? e.toJSON() : e.toArray();
}
var cw = [null], lw = (e) => (t) => {
	let n = t[e];
	return n === void 0 && t.type === "Feature" ? t.properties?.[e] : n;
}, uw = { transform: Ww }, dw = { transform: (e) => e }, fw = () => 1, pw = () => !0, mw = (e) => e == null ? e : `${e}`, hw = (e) => e == null ? e : +e, gw = (e) => e ? e[0] : void 0, _w = (e) => e ? e[1] : void 0, vw = (e) => () => e;
function yw(e) {
	let t = `${e}`.slice(1) / 100;
	return (e, n) => Vn(e, t, n);
}
function bw(e) {
	return ZC(e) ? e : jw(e, xw, Float64Array);
}
function xw(e) {
	return e == null ? NaN : Number(e);
}
function Sw(e) {
	return jw(e, Cw);
}
function Cw(e) {
	return e instanceof Date && !isNaN(e) ? e : typeof e == "string" ? bC(e) : e == null || isNaN(e = Number(e)) ? void 0 : new Date(e);
}
function ww(e, t) {
	return e === void 0 && (e = t), e === null ? [void 0, "none"] : gT(e) ? [void 0, e] : [e, void 0];
}
function Tw(e, t) {
	return e === void 0 && (e = t), e === null || typeof e == "number" ? [void 0, e] : [e, void 0];
}
function Ew(e, t, n) {
	if (e != null) return Dw(e, t, n);
}
function Dw(e, t, n) {
	let r = `${e}`.toLowerCase();
	if (!n.includes(r)) throw Error(`invalid ${t}: ${e}`);
	return r;
}
function Ow(e) {
	return DT(e) ? e : kw(e);
}
function kw(e) {
	if (e == null || XC(e)) return e;
	if (OT(e)) return ow(e);
	if (Aw(e)) switch (e.type) {
		case "FeatureCollection": return e.features;
		case "GeometryCollection": return e.geometries;
		default: return [e];
	}
	return Array.from(e);
}
function Aw(e) {
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
function jw(e, t, n = Array) {
	return e == null ? e : e instanceof n ? e.map(t) : n.from(e, t);
}
function Mw(e, t = Array) {
	return e instanceof t ? e.slice() : t.from(e);
}
function Nw({ x: e, x1: t, x2: n }) {
	return e !== void 0 || t !== void 0 || n !== void 0;
}
function Pw({ y: e, y1: t, y2: n }) {
	return e !== void 0 || t !== void 0 || n !== void 0;
}
function Fw(e) {
	return Nw(e) || Pw(e) || e.interval !== void 0;
}
function Iw(e) {
	return e?.toString === YC;
}
function Lw(e) {
	return Iw(e) && (e.type !== void 0 || e.domain !== void 0);
}
function Rw(e) {
	return Iw(e) && typeof e.transform != "function";
}
function zw(e) {
	return Rw(e) && e.value === void 0 && e.channel === void 0;
}
function Bw(e, t, n, r = dw) {
	return t === void 0 && n === void 0 ? (t = 0, n = e === void 0 ? r : e) : t === void 0 ? t = e === void 0 ? 0 : e : n === void 0 && (n = e === void 0 ? 0 : e), [t, n];
}
function Vw(e, t) {
	return e === void 0 && t === void 0 ? [gw, _w] : [e, t];
}
function Hw({ z: e, fill: t, stroke: n } = {}) {
	return e === void 0 && ([e] = ww(t)), e === void 0 && ([e] = ww(n)), e;
}
function Uw(e) {
	return XC(e) ? e.length : e?.numRows;
}
function Ww(e) {
	let t = Uw(e), n = new Uint32Array(t);
	for (let e = 0; e < t; ++e) n[e] = e;
	return n;
}
function Gw(e, t) {
	return XC(e) ? jw(t, (t) => e[t], e.constructor) : jw(t, (t) => e.at(t));
}
function Kw(e, t, n) {
	return e.subarray ? e.subarray(t, n) : e.slice(t, n);
}
function qw(e) {
	return typeof e == "object" && e ? e.valueOf() : e;
}
function Jw(e) {
	let t;
	return [{
		transform: () => t,
		label: Xw(e)
	}, (e) => t = e];
}
function Yw(e) {
	return e == null ? [e] : Jw(e);
}
function Xw(e, t) {
	return typeof e == "string" ? e : e && e.label !== void 0 ? e.label : t;
}
function Zw(e, t) {
	return {
		transform(n) {
			let r = e.transform(n), i = t.transform(n);
			return uT(r) || uT(i) ? jw(r, (e, t) => /* @__PURE__ */ new Date((+r[t] + +i[t]) / 2)) : jw(r, (e, t) => (+r[t] + +i[t]) / 2, Float64Array);
		},
		label: e.label
	};
}
function Qw(e, t) {
	let n = $w(t?.interval, t?.type);
	return n ? jw(e, n) : e;
}
function $w(e, t) {
	let n = eT(e, t);
	return n && ((e) => lC(e) ? n.floor(e) : e);
}
function eT(e, t) {
	if (e != null) {
		if (typeof e == "number") return tT(e);
		if (typeof e == "string") return (t === "time" ? zC : BC)(e);
		if (typeof e.floor != "function") throw Error("invalid interval; missing floor method");
		if (typeof e.offset != "function") throw Error("invalid interval; missing offset method");
		return e;
	}
}
function tT(e) {
	e = +e, 0 < e && e < 1 && Number.isInteger(1 / e) && (e = -1 / e);
	let t = Math.abs(e);
	return e < 0 ? {
		floor: (e) => Math.floor(e * t) / t,
		offset: (e, n = 1) => (e * t + Math.floor(n)) / t,
		range: (e, n) => Xn(Math.ceil(e * t), n * t).map((e) => e / t)
	} : {
		floor: (e) => Math.floor(e / t) * t,
		offset: (e, n = 1) => e + t * Math.floor(n),
		range: (e, n) => Xn(Math.ceil(e / t), n / t).map((e) => e * t)
	};
}
function nT(e, t) {
	if (e = eT(e, t), e && typeof e.range != "function") throw Error("invalid interval: missing range method");
	return e;
}
function rT(e, t) {
	if (e = nT(e, t), e && typeof e.ceil != "function") throw Error("invalid interval: missing ceil method");
	return e;
}
function iT(e) {
	return typeof e?.range == "function";
}
function aT(e) {
	return e === void 0 || Rw(e) ? e : { value: e };
}
function oT(e) {
	return e == null ? null : {
		transform: (t) => nw(t, e, Float64Array),
		label: Xw(e)
	};
}
function sT(e) {
	return e && typeof e[Symbol.iterator] == "function";
}
function cT(e) {
	for (let t of e) if (t != null) return typeof t != "object" || t instanceof Date;
}
function lT(e) {
	for (let t of e) {
		if (t == null) continue;
		let e = typeof t;
		return e === "string" || e === "boolean";
	}
}
function uT(e) {
	for (let t of e) if (t != null) return t instanceof Date;
}
function dT(e) {
	for (let t of e) if (t != null) return typeof t == "string" && isNaN(t) && bC(t);
}
function fT(e) {
	for (let t of e) if (t != null) {
		if (typeof t != "string") return !1;
		if (t.trim()) return !isNaN(t);
	}
}
function pT(e) {
	for (let t of e) if (t != null) return typeof t == "number";
}
function mT(e, t) {
	let n;
	for (let r of e) if (r != null) {
		if (!t(r)) return !1;
		n = !0;
	}
	return n;
}
var hT = new Set("none,currentcolor,transparent,aliceblue,antiquewhite,aqua,aquamarine,azure,beige,bisque,black,blanchedalmond,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick,floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey,honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon,lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink,lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyellow,lime,limegreen,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple,mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue,mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid,palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue,purple,rebeccapurple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna,silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,tomato,turquoise,violet,wheat,white,whitesmoke,yellow".split(","));
function gT(e) {
	return typeof e == "string" && (e = e.toLowerCase().trim(), /^#[0-9a-f]{3,8}$/.test(e) || /^(?:url|var|rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color|color-mix)\(.*\)$/.test(e) || hT.has(e));
}
function _T(e) {
	return typeof e == "number" && (0 <= e && e <= 1 || isNaN(e));
}
function vT(e) {
	return e == null || yT(e);
}
function yT(e) {
	return /^\s*none\s*$/i.test(e);
}
function bT(e) {
	return /^\s*round\s*$/i.test(e);
}
function xT(e, t) {
	return Ew(e, t, [
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
function ST(e = "middle") {
	return xT(e, "frameAnchor");
}
function CT(e = {}, ...t) {
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
function wT(e) {
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
function TT(e) {
	return sT(e) ? wT(e) : e;
}
function ET(e) {
	return e === !0 ? e = "frame" : e === !1 ? e = null : !Aw(e) && e != null && (e = Dw(e, "clip", ["frame", "sphere"]), e === "sphere" && (e = { type: "Sphere" })), e;
}
function DT(e) {
	return e && typeof e.getChild == "function" && typeof e.toArray == "function" && e.schema && Array.isArray(e.schema.fields);
}
function OT(e) {
	return e && typeof e.toArray == "function" && e.type;
}
function kT(e) {
	return e && (e.typeId === 8 || e.typeId === 10) && e.unit === 1;
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/index.js
var AT = Symbol("position"), jT = Symbol("color"), MT = Symbol("radius"), NT = Symbol("length"), PT = Symbol("opacity"), FT = Symbol("symbol"), IT = Symbol("projection"), LT = /* @__PURE__ */ new Map([
	["x", AT],
	["y", AT],
	["fx", AT],
	["fy", AT],
	["r", MT],
	["color", jT],
	["opacity", PT],
	["symbol", FT],
	["length", NT],
	["projection", IT]
]);
function RT(e) {
	return e === AT || e === IT;
}
function zT(e) {
	return e === AT || e === MT || e === NT || e === PT;
}
var BT = 2 / Math.sqrt(3), VT = /* @__PURE__ */ new Map([
	["asterisk", vp],
	["circle", yp],
	["cross", bp],
	["diamond", Cp],
	["diamond2", wp],
	["hexagon", { draw(e, t) {
		let n = Math.sqrt(t / Math.PI), r = n * BT, i = r / 2;
		e.moveTo(0, r), e.lineTo(n, i), e.lineTo(n, -i), e.lineTo(0, -r), e.lineTo(-n, -i), e.lineTo(-n, i), e.closePath();
	} }],
	["plus", Tp],
	["square", Ep],
	["square2", Dp],
	["star", Mp],
	["times", Hp],
	["triangle", Pp],
	["triangle2", Ip],
	["wye", Vp]
]);
function HT(e) {
	return e && typeof e.draw == "function";
}
function UT(e) {
	return HT(e) ? !0 : typeof e == "string" && VT.has(e.toLowerCase());
}
function WT(e) {
	if (e == null || HT(e)) return e;
	let t = VT.get(`${e}`.toLowerCase());
	if (t) return t;
	throw Error(`invalid symbol: ${e}`);
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/basic.js
function GT({ filter: e, sort: t, reverse: n, transform: r, initializer: i, ...a } = {}, o) {
	if (r === void 0 && (e != null && (r = YT(e)), t != null && !zw(t) && (r = qT(r, ZT(t))), n && (r = qT(r, XT))), o != null && i != null) throw Error("transforms cannot be applied after initializers");
	return {
		...a,
		...(t === null || zw(t)) && { sort: t },
		transform: qT(r, o)
	};
}
function KT({ filter: e, sort: t, reverse: n, initializer: r, ...i } = {}, a) {
	return r === void 0 && (e != null && (r = YT(e)), t != null && !zw(t) && (r = JT(r, ZT(t))), n && (r = JT(r, XT))), {
		...i,
		...(t === null || zw(t)) && { sort: t },
		initializer: JT(r, a)
	};
}
function qT(e, t) {
	return e == null ? t === null ? void 0 : t : t == null ? e === null ? void 0 : e : function(n, r, i) {
		return {data: n, facets: r} = e.call(this, n, r, i), t.call(this, Ow(n), r, i);
	};
}
function JT(e, t) {
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
function YT(e) {
	return (t, n) => {
		let r = nw(t, e);
		return {
			data: t,
			facets: n.map((e) => e.filter((e) => r[e]))
		};
	};
}
function XT(e, t) {
	return {
		data: e,
		facets: t.map((e) => e.slice().reverse())
	};
}
function ZT(e) {
	return (typeof e == "function" && e.length !== 1 ? QT : $T)(e);
}
function QT(e) {
	return (t, n) => {
		let r = XC(t) ? (n, r) => e(t[n], t[r]) : (n, r) => e(t.get(n), t.get(r));
		return {
			data: t,
			facets: n.map((e) => e.slice().sort(r))
		};
	};
}
function $T(e) {
	let t, n;
	({channel: t, value: e, order: n} = { ...aT(e) });
	let r = t?.startsWith("-");
	if (r && (t = t.slice(1)), n === void 0 && (n = r ? dC : uC), typeof n != "function") switch (`${n}`.toLowerCase()) {
		case "ascending":
			n = uC;
			break;
		case "descending":
			n = dC;
			break;
		default: throw Error(`invalid order: ${n}`);
	}
	return (r, i, a) => {
		let o;
		if (t === void 0) o = nw(r, e);
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
function eE(e, t, n = tE) {
	if (e == null) return n(e);
	if (typeof e.reduceIndex == "function") return e;
	if (typeof e.reduce == "function" && Iw(e)) return nE(e);
	if (typeof e == "function") return rE(e);
	if (/^p\d{2}$/i.test(e)) return iE(yw(e));
	switch (`${e}`.toLowerCase()) {
		case "first": return sE;
		case "last": return cE;
		case "identity": return oE;
		case "count": return lE;
		case "distinct": return uE;
		case "sum": return t == null ? lE : dE;
		case "proportion": return fE(t, "data");
		case "proportion-facet": return fE(t, "facet");
		case "deviation": return iE(cn);
		case "min": return iE(In);
		case "min-index": return iE(Ln);
		case "max": return iE(Pn);
		case "max-index": return iE(Fn);
		case "mean": return aE(Un);
		case "median": return aE(Wn);
		case "variance": return iE(sn);
		case "mode": return iE(qn);
	}
	return n(e);
}
function tE(e) {
	throw Error(`invalid reduce: ${e}`);
}
function nE(e) {
	return console.warn("deprecated reduce interface; implement reduceIndex instead."), {
		...e,
		reduceIndex: e.reduce.bind(e)
	};
}
function rE(e) {
	return { reduceIndex(t, n, r) {
		return e(Gw(n, t), r);
	} };
}
function iE(e) {
	return { reduceIndex(t, n) {
		return e(t, (e) => n[e]);
	} };
}
function aE(e) {
	return { reduceIndex(t, n) {
		let r = e(t, (e) => n[e]);
		return uT(n) ? new Date(r) : r;
	} };
}
var oE = { reduceIndex(e, t) {
	return Gw(t, e);
} }, sE = { reduceIndex(e, t) {
	return t[e[0]];
} }, cE = { reduceIndex(e, t) {
	return t[e[e.length - 1]];
} }, lE = {
	label: "Frequency",
	reduceIndex(e) {
		return e.length;
	}
}, uE = {
	label: "Distinct",
	reduceIndex(e, t) {
		let n = new fn();
		for (let r of e) n.add(t[r]);
		return n.size;
	}
}, dE = iE(Zn);
function fE(e, t) {
	return e == null ? {
		scope: t,
		label: "Frequency",
		reduceIndex: (e, t, n = 1) => e.length / n
	} : {
		scope: t,
		reduceIndex: (e, t, n = 1) => Zn(e, (e) => t[e]) / n
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/channel.js
function pE(e, { scale: t, type: n, value: r, filter: i, hint: a, label: o = Xw(r) }, s) {
	return a === void 0 && typeof r?.transform == "function" && (a = r.hint), gE(s, {
		scale: t,
		type: n,
		value: nw(e, r),
		label: o,
		filter: i,
		hint: a
	});
}
function mE(e, t) {
	return Object.fromEntries(Object.entries(e).map(([e, n]) => [e, pE(t, n, e)]));
}
function hE(e, t) {
	let n = Object.fromEntries(Object.entries(e).map(([e, { scale: n, value: r }]) => {
		let i = n == null ? null : t[n];
		return [e, i == null ? r : jw(r, i)];
	}));
	return n.channels = e, n;
}
function gE(e, t) {
	let { scale: n, value: r } = t;
	if (n === !0 || n === "auto") switch (e) {
		case "fill":
		case "stroke":
		case "color":
			t.scale = n !== !0 && mT(r, gT) ? null : "color", t.defaultScale = "color";
			break;
		case "fillOpacity":
		case "strokeOpacity":
		case "opacity":
			t.scale = n !== !0 && mT(r, _T) ? null : "opacity", t.defaultScale = "opacity";
			break;
		case "symbol":
			n !== !0 && mT(r, UT) ? (t.scale = null, t.value = jw(r, WT)) : t.scale = "symbol", t.defaultScale = "symbol";
			break;
		default: t.scale = LT.has(e) ? e : null;
	}
	else if (n === !1) t.scale = null;
	else if (n != null && !LT.has(n)) throw Error(`unknown scale: ${n}`);
	return t;
}
function _E(e, t, n, r, i) {
	let { order: a, reverse: o, reduce: s = !0, limit: c } = i;
	for (let l in i) {
		if (!LT.has(l)) continue;
		let { value: u, order: d = a, reverse: f = o, reduce: p = s, limit: m = c } = aT(i[l]), h = u?.startsWith("-");
		if (h && (u = u.slice(1)), d = d === void 0 ? h === (u === "width" || u === "height") ? CE : wE : SE(d), p == null || p === !1) continue;
		let g = l === "fx" || l === "fy" ? yE(t, r[l]) : vE(n, l);
		if (!g) throw Error(`missing channel for scale: ${l}`);
		let _ = g.value, [v = 0, y = Infinity] = sT(m) ? m : m < 0 ? [m] : [0, m];
		if (u == null) g.domain = () => {
			let e = Array.from(new fn(_));
			return f && (e = e.reverse()), (v !== 0 || y !== Infinity) && (e = e.slice(v, y)), e;
		};
		else {
			let t = u === "data" ? e : u === "height" ? bE(n, "y1", "y2") : u === "width" ? bE(n, "x1", "x2") : xE(n, u, u === "y" ? "y2" : u === "x" ? "x2" : void 0), r = eE(p === !0 ? "max" : p, t);
			g.domain = () => {
				let e = bn(Ww(_), (e) => r.reduceIndex(e, t), (e) => _[e]);
				return d && e.sort(d), f && e.reverse(), (v !== 0 || y !== Infinity) && (e = e.slice(v, y)), e.map(gw);
			};
		}
	}
}
function vE(e, t) {
	for (let n in e) {
		let r = e[n];
		if (r.scale === t) return r;
	}
}
function yE(e, t) {
	let n = e.original;
	if (n === e) return t;
	let r = t.value, i = t.value = [];
	for (let t = 0; t < n.length; ++t) {
		let a = r[n[t][0]];
		for (let n of e[t]) i[n] = a;
	}
	return t;
}
function bE(e, t, n) {
	let r = xE(e, t);
	return jw(xE(e, n), (e, t) => Math.abs(e - r[t]), Float64Array);
}
function xE(e, t, n) {
	let r = e[t];
	if (!r && n !== void 0 && (r = e[n]), r) return r.value;
	throw Error(`missing channel: ${t}`);
}
function SE(e) {
	if (e == null || typeof e == "function") return e;
	switch (`${e}`.toLowerCase()) {
		case "ascending": return CE;
		case "descending": return wE;
	}
	throw Error(`invalid order: ${e}`);
}
function CE([e, t], [n, r]) {
	return uC(t, r) || uC(e, n);
}
function wE([e, t], [n, r]) {
	return dC(t, r) || uC(e, n);
}
function TE(e, t) {
	let n = e[t];
	if (n) {
		for (; n.source;) n = n.source;
		return n.source === null ? null : n;
	}
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/schemes.js
var EE = /* @__PURE__ */ new Map([
	["accent", Lx],
	["category10", Ix],
	["dark2", Rx],
	["observable10", zx],
	["paired", Bx],
	["pastel1", Vx],
	["pastel2", Hx],
	["set1", Ux],
	["set2", Wx],
	["set3", Gx],
	["tableau10", Kx]
]);
function DE(e) {
	return e != null && EE.has(`${e}`.toLowerCase());
}
var OE = new Map([
	...EE,
	["brbg", AE(qx, Jx)],
	["prgn", AE(Yx, Xx)],
	["piyg", AE(Zx, Qx)],
	["puor", AE($x, eS)],
	["rdbu", AE(tS, nS)],
	["rdgy", AE(rS, iS)],
	["rdylbu", AE(aS, oS)],
	["rdylgn", AE(sS, cS)],
	["spectral", AE(lS, uS)],
	["burd", jE(tS, nS)],
	["buylrd", jE(aS, oS)],
	["blues", kE(FS, IS)],
	["greens", kE(LS, RS)],
	["greys", kE(zS, BS)],
	["oranges", kE(GS, KS)],
	["purples", kE(VS, HS)],
	["reds", kE(US, WS)],
	["turbo", ME(rC)],
	["viridis", ME(aC)],
	["magma", ME(oC)],
	["inferno", ME(sC)],
	["plasma", ME(cC)],
	["cividis", ME(qS)],
	["cubehelix", ME(JS)],
	["warm", ME(YS)],
	["cool", ME(XS)],
	["bugn", kE(dS, fS)],
	["bupu", kE(pS, mS)],
	["gnbu", kE(hS, gS)],
	["orrd", kE(_S, vS)],
	["pubu", kE(xS, SS)],
	["pubugn", kE(yS, bS)],
	["purd", kE(CS, wS)],
	["rdpu", kE(TS, ES)],
	["ylgn", kE(kS, AS)],
	["ylgnbu", kE(DS, OS)],
	["ylorbr", kE(jS, MS)],
	["ylorrd", kE(NS, PS)],
	["rainbow", NE(QS)],
	["sinebow", NE(nC)]
]);
function kE(e, t) {
	return ({ length: n }) => n === 1 ? [e[3][1]] : n === 2 ? [e[3][1], e[3][2]] : (n = Math.max(3, Math.floor(n)), n > 9 ? Qc(t, n) : e[n]);
}
function AE(e, t) {
	return ({ length: n }) => n === 2 ? [e[3][0], e[3][2]] : (n = Math.max(3, Math.floor(n)), n > 11 ? Qc(t, n) : e[n]);
}
function jE(e, t) {
	return ({ length: n }) => n === 2 ? [e[3][2], e[3][0]] : (n = Math.max(3, Math.floor(n)), n > 11 ? Qc((e) => t(1 - e), n) : e[n].slice().reverse());
}
function ME(e) {
	return ({ length: t }) => Qc(e, Math.max(2, Math.floor(t)));
}
function NE(e) {
	return ({ length: t }) => Qc(e, Math.floor(t) + 1).slice(0, -1);
}
function PE(e) {
	let t = `${e}`.toLowerCase();
	if (!OE.has(t)) throw Error(`unknown ordinal scheme: ${t}`);
	return OE.get(t);
}
function FE(e, t) {
	let n = PE(e), r = typeof n == "function" ? n({ length: t }) : n;
	return r.length === t ? r : r.slice(0, t);
}
function IE(e, t = "greys") {
	let n = /* @__PURE__ */ new Set(), [r, i] = FE(t, 2);
	for (let t of e) if (t != null) if (t === !0) n.add(i);
	else if (t === !1) n.add(r);
	else return;
	return [...n];
}
var LE = /* @__PURE__ */ new Map([
	["brbg", Jx],
	["prgn", Xx],
	["piyg", Qx],
	["puor", eS],
	["rdbu", nS],
	["rdgy", iS],
	["rdylbu", oS],
	["rdylgn", cS],
	["spectral", uS],
	["burd", (e) => nS(1 - e)],
	["buylrd", (e) => oS(1 - e)],
	["blues", IS],
	["greens", RS],
	["greys", BS],
	["purples", HS],
	["reds", WS],
	["oranges", KS],
	["turbo", rC],
	["viridis", aC],
	["magma", oC],
	["inferno", sC],
	["plasma", cC],
	["cividis", qS],
	["cubehelix", JS],
	["warm", YS],
	["cool", XS],
	["bugn", fS],
	["bupu", mS],
	["gnbu", gS],
	["orrd", vS],
	["pubugn", bS],
	["pubu", SS],
	["purd", wS],
	["rdpu", ES],
	["ylgnbu", OS],
	["ylgn", AS],
	["ylorbr", MS],
	["ylorrd", PS],
	["rainbow", QS],
	["sinebow", nC]
]);
function RE(e) {
	let t = `${e}`.toLowerCase();
	if (!LE.has(t)) throw Error(`unknown quantitative scheme: ${t}`);
	return LE.get(t);
}
var zE = /* @__PURE__ */ new Set([
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
function BE(e) {
	return e != null && zE.has(`${e}`.toLowerCase());
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/quantitative.js
var VE = (e) => (t) => e(1 - t), HE = [0, 1], UE = /* @__PURE__ */ new Map([
	["number", xc],
	["rgb", mc],
	["hsl", Gc],
	["hcl", Jc],
	["lab", Kc]
]);
function WE(e) {
	let t = `${e}`.toLowerCase();
	if (!UE.has(t)) throw Error(`unknown interpolator: ${t}`);
	return UE.get(t);
}
function GE(e, t, n, { type: r, nice: i, clamp: a, zero: o, domain: s = aD(e, n), unknown: c, round: l, scheme: u, interval: d, range: f = LT.get(e) === MT ? sD(n, s) : LT.get(e) === NT ? cD(n, s) : LT.get(e) === PT ? HE : void 0, interpolate: p = LT.get(e) === jT ? u == null && f !== void 0 ? mc : RE(u === void 0 ? r === "cyclical" ? "rainbow" : "turbo" : u) : l ? kc : xc, reverse: m }) {
	if (s = KE(s), d = nT(d, r), (r === "cyclical" || r === "sequential") && (r = "linear"), typeof p != "function" && (p = WE(p)), m = !!m, f !== void 0 && s.length !== (f = KE(f)).length) {
		if (p.length === 1) throw Error("invalid piecewise interpolator");
		p = Zc(p, f), f = void 0;
	}
	if (p.length === 1 ? (m &&= (p = VE(p), !1), f === void 0 && (f = Float64Array.from(s, (e, t) => t / (s.length - 1)), f.length === 2 && (f = HE)), t.interpolate((f === HE ? vw : dD)(p))) : t.interpolate(p), o) {
		let [e, t] = ln(s);
		(e > 0 || t < 0) && (s = Mw(s), (xC(s) || 1) === Math.sign(e) ? s[0] = 0 : s[s.length - 1] = 0);
	}
	return m && (s = Qn(s)), t.domain(s).unknown(c), i && (t.nice(qE(i, r)), s = t.domain()), f !== void 0 && t.range(f), a && t.clamp(a), {
		type: r,
		domain: s,
		range: f,
		scale: t,
		interpolate: p,
		interval: d
	};
}
function KE(e) {
	return e = kw(e), e.length >= 2 ? e : [e[0], e[0]];
}
function qE(e, t) {
	return e === !0 ? void 0 : typeof e == "number" ? e : rT(e, t);
}
function JE(e, t, n) {
	return GE(e, Il(), t, n);
}
function YE(e, t, n) {
	return XE(e, t, {
		...n,
		exponent: .5
	});
}
function XE(e, t, { exponent: n = 1, ...r }) {
	return GE(e, ru().exponent(n), t, {
		...r,
		type: "pow"
	});
}
function ZE(e, t, { base: n = 10, domain: r = lD(t), ...i }) {
	return GE(e, Jl().base(n), t, {
		...i,
		domain: r
	});
}
function QE(e, t, { constant: n = 1, ...r }) {
	return GE(e, Ql().constant(n), t, r);
}
function $E(e, t, { range: n, quantiles: r = n === void 0 ? 5 : (n = [...n]).length, n: i = r, scheme: a = "rdylbu", domain: o = uD(t), unknown: s, interpolate: c, reverse: l }) {
	return n === void 0 && (n = c === void 0 ? LT.get(e) === jT ? FE(a, i) : void 0 : Qc(c, i)), o.length > 0 && (o = iu(o, n === void 0 ? { length: i } : n).quantiles()), tD(e, t, {
		domain: o,
		range: n,
		reverse: l,
		unknown: s
	});
}
function eD(e, t, { range: n, n: r = n === void 0 ? 5 : (n = [...n]).length, scheme: i = "rdylbu", domain: a = aD(e, t), unknown: o, interpolate: s, reverse: c }) {
	let [l, u] = ln(a), d;
	return n === void 0 ? (d = jn(l, u, r), d[0] <= l && d.splice(0, 1), d[d.length - 1] >= u && d.pop(), r = d.length + 1, n = s === void 0 ? LT.get(e) === jT ? FE(i, r) : void 0 : Qc(s, r)) : (d = Qc(xc(l, u), r + 1).slice(1, -1), l instanceof Date && (d = d.map((e) => new Date(e)))), xC(kw(a)) < 0 && d.reverse(), tD(e, t, {
		domain: d,
		range: n,
		reverse: c,
		unknown: o
	});
}
function tD(e, t, { domain: n = [0], unknown: r, scheme: i = "rdylbu", interpolate: a, range: o = a === void 0 ? LT.get(e) === jT ? FE(i, n.length + 1) : void 0 : Qc(a, n.length + 1), reverse: s }) {
	n = kw(n);
	let c = xC(n);
	if (!isNaN(c) && !nD(n, c)) throw Error(`the ${e} scale has a non-monotonic domain`);
	return s && (o = Qn(o)), {
		type: "threshold",
		scale: au(c < 0 ? Qn(n) : n, o === void 0 ? [] : o).unknown(r),
		domain: n,
		range: o
	};
}
function nD(e, t) {
	for (let n = 1, r = e.length, i = e[0]; n < r; ++n) {
		let r = qt(i, i = e[n]);
		if (r !== 0 && r !== t) return !1;
	}
	return !0;
}
function rD(e) {
	return {
		type: "identity",
		scale: zT(LT.get(e)) ? Ll() : (e) => e
	};
}
function iD(e, t = pC) {
	return e.length ? [In(e, ({ value: e }) => e === void 0 ? e : In(e, t)), Pn(e, ({ value: e }) => e === void 0 ? e : Pn(e, t))] : [0, 1];
}
function aD(e, t) {
	let n = LT.get(e);
	return (n === MT || n === PT || n === NT ? oD : iD)(t);
}
function oD(e) {
	return [0, e.length ? Pn(e, ({ value: e }) => e === void 0 ? e : Pn(e, pC)) : 1];
}
function sD(e, t) {
	let n = e.find(({ radius: e }) => e !== void 0);
	if (n !== void 0) return [0, n.radius];
	let r = Vn(e, .5, ({ value: e }) => e === void 0 ? NaN : Vn(e, .25, mC)), i = t.map((e) => 3 * Math.sqrt(e / r)), a = 30 / Pn(i);
	return a < 1 ? i.map((e) => e * a) : i;
}
function cD(e, t) {
	let n = Wn(e, ({ value: e }) => e === void 0 ? NaN : Wn(e, Math.abs)), r = t.map((e) => 12 * e / n), i = 60 / Pn(r);
	return i < 1 ? r.map((e) => e * i) : r;
}
function lD(e) {
	for (let { value: t } of e) if (t !== void 0) for (let n of t) {
		if (n > 0) return iD(e, mC);
		if (n < 0) return iD(e, hC);
	}
	return [1, 10];
}
function uD(e) {
	let t = [];
	for (let { value: n } of e) if (n !== void 0) for (let e of n) t.push(e);
	return t;
}
function dD(e) {
	return (t, n) => (r) => e(t + r * (n - t));
}
//#endregion
//#region node_modules/@observablehq/plot/src/warnings.js
var fD = 0, pD;
function mD() {
	let e = fD;
	return fD = 0, pD = void 0, e;
}
function hD(e) {
	e !== pD && (pD = e, console.warn(e), ++fD);
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/diverging.js
function gD(e, t, n, r, { type: i, nice: a, clamp: o, domain: s = iD(r), unknown: c, pivot: l = 0, scheme: u, range: d, symmetric: f = !0, interpolate: p = LT.get(e) === jT ? u == null && d !== void 0 ? mc : RE(u === void 0 ? "rdbu" : u) : xc, reverse: m }) {
	l = +l, s = kw(s);
	let [h, g] = s;
	if (s.length > 2 && hD(`Warning: the diverging ${e} scale domain contains extra elements.`), qt(h, g) < 0 && ([h, g] = [g, h], m = !m), h = Math.min(h, l), g = Math.max(g, l), typeof p != "function" && (p = WE(p)), d !== void 0 && (p = p.length === 1 ? dD(p)(...d) : Zc(p, d)), m && (p = VE(p)), f) {
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
function _D(e, t, n) {
	return gD(e, pu(), SD, t, n);
}
function vD(e, t, n) {
	return yD(e, t, {
		...n,
		exponent: .5
	});
}
function yD(e, t, { exponent: n = 1, ...r }) {
	return gD(e, gu().exponent(n = +n), TD(n), t, {
		...r,
		type: "diverging-pow"
	});
}
function bD(e, t, { base: n = 10, pivot: r = 1, domain: i = iD(t, r < 0 ? hC : mC), ...a }) {
	return gD(e, mu().base(n = +n), CD, t, {
		domain: i,
		pivot: r,
		...a
	});
}
function xD(e, t, { constant: n = 1, ...r }) {
	return gD(e, hu().constant(n = +n), ED(n), t, r);
}
var SD = {
	apply(e) {
		return e;
	},
	invert(e) {
		return e;
	}
}, CD = {
	apply: Math.log,
	invert: Math.exp
}, wD = {
	apply(e) {
		return Math.sign(e) * Math.sqrt(Math.abs(e));
	},
	invert(e) {
		return e * e * Math.sign(e);
	}
};
function TD(e) {
	return e === .5 ? wD : {
		apply(t) {
			return Math.sign(t) * Math.abs(t) ** +e;
		},
		invert(t) {
			return Math.sign(t) * Math.abs(t) ** (1 / e);
		}
	};
}
function ED(e) {
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
function DD(e, t, n, r) {
	return GE(e, t, n, r);
}
function OD(e, t, n) {
	return DD(e, lu(), t, n);
}
function kD(e, t, n) {
	return DD(e, uu(), t, n);
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/ordinal.js
var AD = Symbol("ordinal");
function jD(e, t, n, { type: r, interval: i, domain: a, range: o, reverse: s, hint: c }) {
	return i = nT(i, r), a === void 0 && (a = ID(n, i, e)), (r === "categorical" || r === AD) && (r = "ordinal"), s && (a = Qn(a)), a = t.domain(a).domain(), o !== void 0 && (typeof o == "function" && (o = o(a)), t.range(o)), {
		type: r,
		domain: a,
		range: o,
		scale: t,
		hint: c,
		interval: i
	};
}
function MD(e, t, { type: n, interval: r, domain: i, range: a, scheme: o, unknown: s, ...c }) {
	r = nT(r, n), i === void 0 && (i = ID(t, r, e));
	let l;
	if (LT.get(e) === FT) l = RD(t), a = a === void 0 ? zD(l) : jw(a, WT);
	else if (LT.get(e) === jT && (a === void 0 && (n === "ordinal" || n === AD) && (a = IE(i, o), a !== void 0 && (o = void 0)), o === void 0 && a === void 0 && (o = n === "ordinal" ? "turbo" : "observable10"), o !== void 0)) if (a !== void 0) {
		let e = RE(o), t = a[0], n = a[1] - a[0];
		a = ({ length: r }) => Qc((r) => e(t + n * r), r);
	} else a = PE(o);
	if (s === Ro) throw Error(`implicit unknown on ${e} scale is not supported`);
	return jD(e, zo().unknown(s), t, {
		...c,
		type: n,
		domain: i,
		range: a,
		hint: l
	});
}
function ND(e, t, { align: n = .5, padding: r = .5, ...i }) {
	return FD(Ho().align(n).padding(r), t, i, e);
}
function PD(e, t, { align: n = .5, padding: r = .1, paddingInner: i = r, paddingOuter: a = e === "fx" || e === "fy" ? 0 : r, ...o }) {
	return FD(Bo().align(n).paddingInner(i).paddingOuter(a), t, o, e);
}
function FD(e, t, n, r) {
	let { round: i } = n;
	return i !== void 0 && e.round(i = !!i), e = jD(r, e, t, n), e.round = i, e;
}
function ID(e, t, n) {
	let r = new fn();
	for (let { value: t, domain: n } of e) {
		if (n !== void 0) return n();
		if (t !== void 0) for (let e of t) r.add(e);
	}
	if (t !== void 0) {
		let [e, n] = ln(r).map(t.floor, t);
		return t.range(e, t.offset(n));
	}
	if (r.size > 1e4 && LT.get(n) === AT) throw Error(`implicit ordinal domain of ${n} scale has more than 10,000 values`);
	return Cn(r, uC);
}
function LD(e, t) {
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
function RD(e) {
	return {
		fill: LD(e, "fill"),
		stroke: LD(e, "stroke")
	};
}
function zD(e) {
	return vT(e.fill) ? Wp : Up;
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales.js
function BD(e, { label: t, inset: n = 0, insetTop: r = n, insetRight: i = n, insetBottom: a = n, insetLeft: o = n, round: s, nice: c, clamp: l, zero: u, align: d, padding: f, projection: p, facet: { label: m = t } = {}, ...h } = {}) {
	let g = {};
	for (let [n, _] of e) {
		let e = h[n], v = QD(n, _, {
			round: LT.get(n) === AT ? s : void 0,
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
			v.percent = !!c, v.label = s === void 0 ? UD(_, v) : s, v.transform = l, n === "x" || n === "fx" ? (v.insetLeft = +h, v.insetRight = +f) : (n === "y" || n === "fy") && (v.insetTop = +d, v.insetBottom = +p), g[n] = v;
		}
	}
	return g;
}
function VD(e) {
	let t = {}, n = { scales: t };
	for (let [r, i] of Object.entries(e)) {
		let { scale: e, type: a, interval: o, label: s } = i;
		t[r] = dO(i), n[r] = e, e.type = a, o != null && (e.interval = o), s != null && (e.label = s);
	}
	return n;
}
function HD(e, t) {
	let { x: n, y: r, fx: i, fy: a } = e, o = i || a ? GD(t) : t;
	i && qD(i, o), a && JD(a, o);
	let s = i || a ? KD(e, t) : t;
	n && qD(n, s), r && JD(r, s);
}
function UD(e = [], t) {
	let n;
	for (let { label: t } of e) if (t !== void 0) {
		if (n === void 0) n = t;
		else if (n !== t) return;
	}
	if (n !== void 0) return !iO(t) && t.percent && (n = `${n} (%)`), {
		inferred: !0,
		toString: () => n
	};
}
function WD(e) {
	return Math.sign(xC(e.domain())) * Math.sign(xC(e.range()));
}
function GD(e) {
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
function KD({ fx: e, fy: t }, n) {
	let { marginTop: r, marginRight: i, marginBottom: a, marginLeft: o, width: s, height: c } = GD(n);
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
function qD(e, t) {
	if (e.range === void 0) {
		let { insetLeft: n, insetRight: r } = e, { width: i, marginLeft: a = 0, marginRight: o = 0 } = t, s = a + n, c = i - o - r;
		e.range = [s, Math.max(s, c)], iO(e) || (e.range = ZD(e)), e.scale.range(e.range);
	}
	YD(e);
}
function JD(e, t) {
	if (e.range === void 0) {
		let { insetTop: n, insetBottom: r } = e, { height: i, marginTop: a = 0, marginBottom: o = 0 } = t, s = a + n, c = i - o - r;
		e.range = [Math.max(s, c), s], iO(e) ? e.range.reverse() : e.range = ZD(e), e.scale.range(e.range);
	}
	YD(e);
}
function YD(e) {
	e.round === void 0 && oO(e) && XD(e) <= 30 && e.scale.round(!0);
}
function XD({ scale: e }) {
	let t = e.domain().length, [n, r] = e.range(), i = e.paddingInner ? e.paddingInner() : 1, a = e.paddingOuter ? e.paddingOuter() : e.padding(), o = t - i, s = Math.abs(r - n) / Math.max(1, o + a * 2);
	return (s - Math.floor(s)) * o;
}
function ZD(e) {
	let t = e.scale.domain().length + aO(e);
	if (!(t > 2)) return e.range;
	let [n, r] = e.range;
	return Array.from({ length: t }, (e, i) => n + i / (t - 1) * (r - n));
}
function QD(e, t = [], n = {}) {
	let r = nO(e, t, n);
	if (n.type === void 0 && n.domain === void 0 && n.range === void 0 && n.interval == null && e !== "fx" && e !== "fy" && iO({ type: r })) {
		let n = t.map(({ value: e }) => e).filter((e) => e !== void 0);
		n.some(uT) ? hD(`Warning: some data associated with the ${e} scale are dates. Dates are typically associated with a "utc" or "time" scale rather than a "${$D(r)}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can specify the interval of the ${e} scale (e.g., d3.utcDay), or you can suppress this warning by setting the type of the ${e} scale to "${$D(r)}".`) : n.some(dT) ? hD(`Warning: some data associated with the ${e} scale are strings that appear to be dates (e.g., YYYY-MM-DD). If these strings represent dates, you should parse them to Date objects. Dates are typically associated with a "utc" or "time" scale rather than a "${$D(r)}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can suppress this warning by setting the type of the ${e} scale to "${$D(r)}".`) : n.some(fT) && hD(`Warning: some data associated with the ${e} scale are strings that appear to be numbers. If these strings represent numbers, you should parse or coerce them to numbers. Numbers are typically associated with a "linear" scale rather than a "${$D(r)}" scale. If you want to treat this data as ordinal, you can specify the interval of the ${e} scale (e.g., 1 for integers), or you can suppress this warning by setting the type of the ${e} scale to "${$D(r)}".`);
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
			n = cO(t, n, bw);
			break;
		case "identity":
			switch (LT.get(e)) {
				case AT:
					n = cO(t, n, bw);
					break;
				case FT: n = cO(t, n, lO);
			}
			break;
		case "utc":
		case "time": n = cO(t, n, Sw);
	}
	switch (r) {
		case "diverging": return _D(e, t, n);
		case "diverging-sqrt": return vD(e, t, n);
		case "diverging-pow": return yD(e, t, n);
		case "diverging-log": return bD(e, t, n);
		case "diverging-symlog": return xD(e, t, n);
		case "categorical":
		case "ordinal":
		case AD: return MD(e, t, n);
		case "cyclical":
		case "sequential":
		case "linear": return JE(e, t, n);
		case "sqrt": return YE(e, t, n);
		case "threshold": return tD(e, t, n);
		case "quantile": return $E(e, t, n);
		case "quantize": return eD(e, t, n);
		case "pow": return XE(e, t, n);
		case "log": return ZE(e, t, n);
		case "symlog": return QE(e, t, n);
		case "utc": return kD(e, t, n);
		case "time": return OD(e, t, n);
		case "point": return ND(e, t, n);
		case "band": return PD(e, t, n);
		case "identity": return rD(e);
		case void 0: return;
		default: throw Error(`unknown scale type: ${r}`);
	}
}
function $D(e) {
	return typeof e == "symbol" ? e.description : e;
}
function eO(e) {
	return typeof e == "string" ? `${e}`.toLowerCase() : e;
}
var tO = { toString: () => "projection" };
function nO(e, t, { type: n, domain: r, range: i, scheme: a, pivot: o, projection: s }) {
	if (n = eO(n), e === "fx" || e === "fy") return "band";
	(e === "x" || e === "y") && s != null && (n = tO);
	for (let e of t) {
		let t = eO(e.type);
		if (t !== void 0) {
			if (n === void 0) n = t;
			else if (n !== t) throw Error(`scale incompatible with channel: ${n} !== ${t}`);
		}
	}
	if (n === tO) return;
	if (n !== void 0) return n;
	if (r === void 0 && !t.some(({ value: e }) => e !== void 0)) return;
	let c = LT.get(e);
	if (c === MT) return "sqrt";
	if (c === PT || c === NT) return "linear";
	if (c === FT) return "ordinal";
	let l = (r ?? i)?.length;
	if (l < 2 || l > 2) return rO(c);
	if (r !== void 0) {
		if (lT(r)) return rO(c);
		if (uT(r)) return "utc";
	} else {
		let e = t.map(({ value: e }) => e).filter((e) => e !== void 0);
		if (e.some(lT)) return rO(c);
		if (e.some(uT)) return "utc";
	}
	if (c === jT) {
		if (o != null || BE(a)) return "diverging";
		if (DE(a)) return "categorical";
	}
	return "linear";
}
function rO(e) {
	switch (e) {
		case AT: return "point";
		case jT: return AD;
		default: return "ordinal";
	}
}
function iO({ type: e }) {
	return e === "ordinal" || e === "point" || e === "band" || e === AD;
}
function aO({ type: e }) {
	return e === "threshold";
}
function oO({ type: e }) {
	return e === "point" || e === "band";
}
function sO(e) {
	if (e === void 0) return !0;
	let t = e.domain(), n = e(t[0]);
	for (let r = 1, i = t.length; r < i; ++r) if (e(t[r]) - n) return !1;
	return !0;
}
function cO(e, { domain: t, ...n }, r) {
	for (let n of e) n.value !== void 0 && (t === void 0 && (t = n.value?.domain), n.value = r(n.value));
	return {
		domain: t === void 0 ? t : r(t),
		...n
	};
}
function lO(e) {
	return jw(e, WT);
}
function uO(e) {
	return (t) => {
		if (!LT.has(t = `${t}`)) throw Error(`unknown scale: ${t}`);
		return e[t];
	};
}
function dO({ scale: e, type: t, domain: n, range: r, interpolate: i, interval: a, transform: o, percent: s, pivot: c }) {
	if (t === "identity") return {
		type: "identity",
		apply: (e) => e,
		invert: (e) => e
	};
	let l = e.unknown ? e.unknown() : void 0;
	return {
		type: t,
		domain: Mw(n),
		...r !== void 0 && { range: Mw(r) },
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
function fO(e, t) {
	let { fx: n, fy: r } = BD(e, t), i = n?.scale.domain(), a = r?.scale.domain();
	return i && a ? an(i, a).map(([e, t], n) => ({
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
function pO(e, { x: t, y: n }) {
	return t &&= bO(t), n &&= bO(n), e.filter(t && n ? (e) => t.has(e.x) && n.has(e.y) : t ? (e) => t.has(e.x) : (e) => n.has(e.y)).sort(t && n ? (e, r) => t.get(e.x) - t.get(r.x) || n.get(e.y) - n.get(r.y) : t ? (e, n) => t.get(e.x) - t.get(n.x) : (e, t) => n.get(e.y) - n.get(t.y));
}
function mO(e, { fx: t, fy: n }) {
	let r = Ww(e), i = t?.value, a = n?.value;
	return t && n ? yn(r, (e) => (e.fx = i[e[0]], e.fy = a[e[0]], e), (e) => i[e], (e) => a[e]) : t ? yn(r, (e) => (e.fx = i[e[0]], e), (e) => i[e]) : yn(r, (e) => (e.fy = a[e[0]], e), (e) => a[e]);
}
function hO(e, t, { marginTop: n, marginLeft: r }) {
	let i = e ? ({ x: t }) => e(t) - r : () => 0, a = t ? ({ y: e }) => t(e) - n : () => 0;
	return function(e) {
		this.tagName === "svg" ? (this.setAttribute("x", i(e)), this.setAttribute("y", a(e))) : this.setAttribute("transform", `translate(${i(e)},${a(e)})`);
	};
}
function gO(e) {
	let t = [], n = new Uint32Array(Zn(e, (e) => e.length));
	for (let r of e) {
		let i = 0;
		for (let t of e) r !== t && (n.set(t, i), i += t.length);
		t.push(n.slice(0, i));
	}
	return t;
}
var _O = /* @__PURE__ */ new Map([
	["top", wO],
	["right", DO],
	["bottom", TO],
	["left", EO],
	["top-left", NO(wO, EO)],
	["top-right", NO(wO, DO)],
	["bottom-left", NO(TO, EO)],
	["bottom-right", NO(TO, DO)],
	["top-empty", OO],
	["right-empty", jO],
	["bottom-empty", kO],
	["left-empty", AO],
	["empty", MO]
]);
function vO(e) {
	if (e == null) return null;
	let t = _O.get(`${e}`.toLowerCase());
	if (t) return t;
	throw Error(`invalid facet anchor: ${e}`);
}
var yO = /* @__PURE__ */ new WeakMap();
function bO(e) {
	let t = yO.get(e);
	return t || yO.set(e, t = new dn(jw(e, (e, t) => [e, t]))), t;
}
function xO(e, t) {
	return bO(e).get(t);
}
function SO(e, t, n) {
	return t = qw(t), n = qw(n), e.find((e) => Object.is(qw(e.x), t) && Object.is(qw(e.y), n));
}
function CO(e, t, n) {
	return SO(e, t, n)?.empty;
}
function wO(e, { y: t }, { y: n }) {
	return !t || xO(t, n) === 0;
}
function TO(e, { y: t }, { y: n }) {
	return !t || xO(t, n) === t.length - 1;
}
function EO(e, { x: t }, { x: n }) {
	return !t || xO(t, n) === 0;
}
function DO(e, { x: t }, { x: n }) {
	return !t || xO(t, n) === t.length - 1;
}
function OO(e, { y: t }, { x: n, y: r, empty: i }) {
	if (i) return !1;
	if (!t) return;
	let a = xO(t, r);
	if (a > 0) return CO(e, n, t[a - 1]);
}
function kO(e, { y: t }, { x: n, y: r, empty: i }) {
	if (i) return !1;
	if (!t) return;
	let a = xO(t, r);
	if (a < t.length - 1) return CO(e, n, t[a + 1]);
}
function AO(e, { x: t }, { x: n, y: r, empty: i }) {
	if (i) return !1;
	if (!t) return;
	let a = xO(t, n);
	if (a > 0) return CO(e, t[a - 1], r);
}
function jO(e, { x: t }, { x: n, y: r, empty: i }) {
	if (i) return !1;
	if (!t) return;
	let a = xO(t, n);
	if (a < t.length - 1) return CO(e, t[a + 1], r);
}
function MO(e, t, { empty: n }) {
	return n;
}
function NO(e, t) {
	return function() {
		return e.apply(null, arguments) && t.apply(null, arguments);
	};
}
function PO(e, { channels: { fx: t, fy: n }, groups: r }) {
	return t && n ? e.map(({ x: e, y: t }) => r.get(e)?.get(t) ?? []) : t ? e.map(({ x: e }) => r.get(e) ?? []) : e.map(({ y: e }) => r.get(e) ?? []);
}
//#endregion
//#region node_modules/@observablehq/plot/src/projection.js
var FO = Math.PI, IO = 2 * FO, LO = .618;
function RO({ projection: e, inset: t = 0, insetTop: n = t, insetRight: r = t, insetBottom: i = t, insetLeft: a = t } = {}, o) {
	if (e == null) return;
	if (typeof e.stream == "function") return e;
	let s, c, l = "frame";
	if (Iw(e)) {
		let t;
		if ({type: e, domain: c, inset: t, insetTop: n = t === void 0 ? n : t, insetRight: r = t === void 0 ? r : t, insetBottom: i = t === void 0 ? i : t, insetLeft: a = t === void 0 ? a : t, clip: l = l, ...s} = e, e == null) return;
	}
	typeof e != "function" && ({type: e} = zO(e));
	let { width: u, height: d, marginLeft: f, marginRight: p, marginTop: m, marginBottom: h } = o, g = u - f - p - a - r, _ = d - m - h - n - i;
	if (e = e?.({
		width: g,
		height: _,
		clip: l,
		...s
	}), e == null) return;
	l = BO(l, f, m, u - p, d - h);
	let v = f + a, y = m + n, b;
	if (c != null) {
		let [[t, n], [r, i]] = jb(e).bounds(c), a = Math.min(g / (r - t), _ / (i - n));
		a > 0 ? (v -= (a * (t + r) - g) / 2, y -= (a * (n + i) - _) / 2, b = Mb({ point(e, t) {
			this.stream.point(e * a + v, t * a + y);
		} })) : hD("Warning: the projection could not be fit to the specified domain; using the default scale.");
	}
	return b ??= v === 0 && y === 0 ? UO() : Mb({ point(e, t) {
		this.stream.point(e + v, t + y);
	} }), { stream: (t) => e.stream(b.stream(l(t))) };
}
function zO(e) {
	switch (`${e}`.toLowerCase()) {
		case "albers-usa": return VO(rx, .7463, .4673);
		case "albers": return HO(tx, .7463, .4673);
		case "azimuthal-equal-area": return VO(sx, 4, 4);
		case "azimuthal-equidistant": return VO(lx, IO, IO);
		case "conic-conformal": return HO(hx, IO, IO);
		case "conic-equal-area": return HO(ex, 6.1702, 2.9781);
		case "conic-equidistant": return HO(yx, 7.312, 3.6282);
		case "equal-earth": return VO(Dx, 5.4133, 2.6347);
		case "equirectangular": return VO(_x, IO, FO);
		case "gnomonic": return VO(kx, 3.4641, 3.4641);
		case "identity": return { type: UO };
		case "reflect-y": return { type: WO };
		case "mercator": return VO(dx, IO, IO);
		case "orthographic": return VO(jx, 2, 2);
		case "stereographic": return VO(Nx, 2, 2);
		case "transverse-mercator": return VO(Fx, IO, IO);
		default: throw Error(`unknown projection type: ${e}`);
	}
}
function BO(e, t, n, r, i) {
	if (e === !1 || e == null || typeof e == "number") return (e) => e;
	switch (e === !0 && (e = "frame"), `${e}`.toLowerCase()) {
		case "frame": return Ey(t, n, r, i);
		default: throw Error(`unknown projection clip type: ${e}`);
	}
}
function VO(e, t, n) {
	return {
		type: ({ width: r, height: i, rotate: a, precision: o = .15, clip: s }) => {
			let c = e();
			return o != null && c.precision?.(o), a != null && c.rotate?.(a), typeof s == "number" && c.clipAngle?.(s), r != null && (c.scale(Math.min(r / t, i / n)), c.translate([r / 2, i / 2])), c;
		},
		aspectRatio: n / t
	};
}
function HO(e, t, n) {
	let { type: r, aspectRatio: i } = VO(e, t, n);
	return {
		type: (e) => {
			let { parallels: t, domain: n, width: i, height: a } = e, o = r(e);
			return t != null && (o.parallels(t), n === void 0 && i != null && o.fitSize([i, a], { type: "Sphere" })), o;
		},
		aspectRatio: i
	};
}
var UO = vw({ stream: (e) => e }), WO = vw(Mb({ point(e, t) {
	this.stream.point(e, -t);
} }));
function GO(e, t, n, r) {
	let i = n[e], a = n[t], o = i.length, s = n[e] = new Float64Array(o).fill(NaN), c = n[t] = new Float64Array(o).fill(NaN), l, u = r.stream({ point(e, t) {
		s[l] = e, c[l] = t;
	} });
	for (l = 0; l < o; ++l) u.point(i[l], a[l]);
}
function KO({ projection: e } = {}) {
	return e == null ? !1 : typeof e.stream == "function" || (Iw(e) && (e = e.type), e != null);
}
function qO(e) {
	if (typeof e?.stream == "function") return LO;
	if (Iw(e)) {
		let t, n;
		if ({domain: t, type: e, ...n} = e, t != null && e != null) {
			let [[r, i], [a, o]] = jb((typeof e == "string" ? zO(e).type : e)({
				...n,
				width: 100,
				height: 100
			})).bounds(t), s = (o - i) / (a - r);
			return s && isFinite(s) ? s < .2 ? .2 : s > 5 ? 5 : s : LO;
		}
	}
	if (e != null) {
		if (typeof e != "function") {
			let { aspectRatio: t } = zO(e);
			if (t) return t;
		}
		return LO;
	}
}
function JO(e) {
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
	for (let t of e.value) Gv(t, a);
	return [r, i];
}
function YO({ x: e, y: t }) {
	if (e || t) return e ??= (e) => e, t ??= (e) => e, Mb({ point(n, r) {
		this.stream.point(e(n), t(r));
	} });
}
//#endregion
//#region node_modules/@observablehq/plot/src/context.js
function XO(e = {}) {
	let { document: t = typeof window < "u" ? window.document : void 0, clip: n } = e;
	return {
		document: t,
		clip: ET(n)
	};
}
function ZO(e, { document: t }) {
	return a(r(e).call(t.documentElement));
}
//#endregion
//#region node_modules/@observablehq/plot/src/memoize.js
var QO = Symbol("unset");
function $O(e) {
	return (e.length === 1 ? ek : tk)(e);
}
function ek(e) {
	let t, n = QO;
	return (r) => (Object.is(n, r) || (n = r, t = e(r)), t);
}
function tk(e) {
	let t, n;
	return (...r) => ((n?.length !== r.length || n.some((e, t) => !Object.is(e, r[t]))) && (n = r, t = e(...r)), t);
}
//#endregion
//#region node_modules/@observablehq/plot/src/format.js
var nk = $O((e) => new Intl.NumberFormat(e));
$O((e, t) => new Intl.DateTimeFormat(e, {
	timeZone: "UTC",
	...t && { month: t }
})), $O((e, t) => new Intl.DateTimeFormat(e, {
	timeZone: "UTC",
	...t && { weekday: t }
}));
function rk(e = "en-US") {
	let t = nk(e);
	return (e) => e != null && !isNaN(e) ? t.format(e) : void 0;
}
function ik(e) {
	return gC(e, "Invalid Date");
}
function ak(e = "en-US") {
	let t = rk(e);
	return (e) => (e instanceof Date ? ik : typeof e == "number" ? t : mw)(e);
}
var ok = ak(), sk = (typeof window < "u" ? window.devicePixelRatio > 1 : typeof it > "u") ? 0 : .5, ck = 0;
function lk() {
	return `plot-clip-${++ck}`;
}
function uk(e, { title: t, href: n, ariaLabel: r, ariaDescription: i, ariaHidden: a, target: o, fill: s, fillOpacity: c, stroke: l, strokeWidth: u, strokeOpacity: d, strokeLinejoin: f, strokeLinecap: p, strokeMiterlimit: m, strokeDasharray: h, strokeDashoffset: g, opacity: _, mixBlendMode: v, imageFilter: y, paintOrder: b, pointerEvents: x, shapeRendering: S, channels: C }, { ariaLabel: w, fill: T = "currentColor", fillOpacity: E, stroke: D = "none", strokeOpacity: O, strokeWidth: k, strokeLinecap: A, strokeLinejoin: j, strokeMiterlimit: M, paintOrder: N }) {
	T === null && (s = null, c = null), D === null && (l = null, d = null), vT(T) ? !vT(D) && (!vT(s) || C?.fill) && (D = "none") : vT(D) && (!vT(l) || C?.stroke) && (T = "none");
	let [P, ee] = ww(s, T), [F, te] = Tw(c, E), [ne, re] = ww(l, D), [ie, ae] = Tw(d, O), [oe, se] = Tw(_);
	yT(re) || (u === void 0 && (u = k), p === void 0 && (p = A), f === void 0 && (f = j), m === void 0 && !bT(f) && (m = M), !yT(ee) && b === void 0 && (b = N));
	let [I, L] = Tw(u);
	return T !== null && (e.fill = Tk(ee, "currentColor"), e.fillOpacity = Ek(te, 1)), D !== null && (e.stroke = Tk(re, "none"), e.strokeWidth = Ek(L, 1), e.strokeOpacity = Ek(ae, 1), e.strokeLinejoin = Tk(f, "miter"), e.strokeLinecap = Tk(p, "butt"), e.strokeMiterlimit = Ek(m, 4), e.strokeDasharray = Tk(h, "none"), e.strokeDashoffset = Tk(g, "0")), e.target = mw(o), e.ariaLabel = mw(w), e.ariaDescription = mw(i), e.ariaHidden = mw(a), e.opacity = Ek(se, 1), e.mixBlendMode = Tk(v, "normal"), e.imageFilter = Tk(y, "none"), e.paintOrder = Tk(b, "normal"), e.pointerEvents = Tk(x, "auto"), e.shapeRendering = Tk(S, "auto"), {
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
			value: P,
			scale: "auto",
			optional: !0
		},
		fillOpacity: {
			value: F,
			scale: "auto",
			optional: !0
		},
		stroke: {
			value: ne,
			scale: "auto",
			optional: !0
		},
		strokeOpacity: {
			value: ie,
			scale: "auto",
			optional: !0
		},
		strokeWidth: {
			value: I,
			optional: !0
		},
		opacity: {
			value: oe,
			scale: "auto",
			optional: !0
		}
	};
}
function dk(e, t) {
	t && e.filter((e) => fC(t[e])).append("title").call(fk, t);
}
function fk(e, t) {
	t && e.text((e) => ok(t[e]));
}
function pk(e, { target: t, tip: n }, { ariaLabel: r, title: i, fill: a, fillOpacity: o, stroke: s, strokeOpacity: c, strokeWidth: l, opacity: u, href: d }) {
	r && $(e, "aria-label", (e) => r[e]), a && $(e, "fill", (e) => a[e]), o && $(e, "fill-opacity", (e) => o[e]), s && $(e, "stroke", (e) => s[e]), c && $(e, "stroke-opacity", (e) => c[e]), l && $(e, "stroke-width", (e) => l[e]), u && $(e, "opacity", (e) => u[e]), d && Sk(e, (e) => d[e], t), n || dk(e, i);
}
function mk(e, t, n, r) {
	let i, { clip: a = r.clip } = t;
	a === "frame" ? (e = ZO("svg:g", r).each(function() {
		this.appendChild(e.node()), e.node = () => this;
	}), i = gk(r, n)) : a && (i = yk(a, r)), $(e, "aria-label", t.ariaLabel), $(e, "aria-description", t.ariaDescription), $(e, "aria-hidden", t.ariaHidden), $(e, "clip-path", i);
}
function hk(e) {
	let t = /* @__PURE__ */ new WeakMap();
	return (n, r) => {
		let i = t.get(n);
		if (!i) {
			let o = lk();
			a(n.ownerSVGElement).append("clipPath").attr("id", o).call(e, n, r), t.set(n, i = `url(#${o})`);
		}
		return i;
	};
}
var gk = hk((e, t, n) => {
	let { width: r, height: i, marginLeft: a, marginRight: o, marginTop: s, marginBottom: c } = n;
	e.append("rect").attr("x", a).attr("y", s).attr("width", r - o - a).attr("height", i - s - c);
}), _k = /* @__PURE__ */ new WeakMap(), vk = { type: "Sphere" };
function yk(e, t) {
	let n, r;
	if ((n = _k.get(t)) || _k.set(t, n = /* @__PURE__ */ new WeakMap()), e.type === "Sphere" && (e = vk), !(r = n.get(e))) {
		let i = lk();
		a(t.ownerSVGElement).append("clipPath").attr("id", i).append("path").attr("d", t.path()(e)), n.set(e, r = `url(#${i})`);
	}
	return r;
}
function bk(e, t, n, r) {
	mk(e, t, n, r), $(e, "class", t.className), $(e, "fill", t.fill), $(e, "fill-opacity", t.fillOpacity), $(e, "stroke", t.stroke), $(e, "stroke-width", t.strokeWidth), $(e, "stroke-opacity", t.strokeOpacity), $(e, "stroke-linejoin", t.strokeLinejoin), $(e, "stroke-linecap", t.strokeLinecap), $(e, "stroke-miterlimit", t.strokeMiterlimit), $(e, "stroke-dasharray", t.strokeDasharray), $(e, "stroke-dashoffset", t.strokeDashoffset), $(e, "shape-rendering", t.shapeRendering), $(e, "filter", t.imageFilter), $(e, "paint-order", t.paintOrder);
	let { pointerEvents: i = r.pointerSticky === !1 ? "none" : void 0 } = t;
	$(e, "pointer-events", i);
}
function xk(e, t) {
	Ck(e, "mix-blend-mode", t.mixBlendMode), $(e, "opacity", t.opacity);
}
function Sk(t, n, r) {
	t.each(function(t) {
		let i = n(t);
		if (i != null) {
			let t = this.ownerDocument.createElementNS(e.svg, "a");
			t.setAttribute("fill", "inherit"), t.setAttributeNS(e.xlink, "href", i), r != null && t.setAttribute("target", r), this.parentNode.insertBefore(t, this).appendChild(this);
		}
	});
}
function $(e, t, n) {
	n != null && e.attr(t, n);
}
function Ck(e, t, n) {
	n != null && e.style(t, n);
}
function wk(e, t, { x: n, y: r }, i = sk, a = sk) {
	i += t.dx, a += t.dy, n?.bandwidth && (i += n.bandwidth() / 2), r?.bandwidth && (a += r.bandwidth() / 2), (i || a) && e.attr("transform", `translate(${i},${a})`);
}
function Tk(e, t) {
	if ((e = mw(e)) !== t) return e;
}
function Ek(e, t) {
	if ((e = hw(e)) !== t) return e;
}
var Dk = /^-?([_a-z]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])([_a-z0-9-]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])*$/i;
function Ok(e) {
	if (e === void 0) return "plot-d6a7b5";
	if (e = `${e}`, !Dk.test(e)) throw Error(`invalid class name: ${e}`);
	return e;
}
function kk(e, t) {
	if (typeof t == "string") e.property("style", t);
	else if (t != null) for (let n of e) Object.assign(n.style, t);
}
function Ak({ frameAnchor: e }, { width: t, height: n, marginTop: r, marginRight: i, marginBottom: a, marginLeft: o }) {
	return [/left$/.test(e) ? o : /right$/.test(e) ? t - i : (o + t - i) / 2, /^top/.test(e) ? r : /^bottom/.test(e) ? n - a : (r + n - a) / 2];
}
//#endregion
//#region node_modules/@observablehq/plot/src/mark.js
var jk = class {
	constructor(e, t = {}, n = {}, r) {
		let { facet: i = "auto", facetAnchor: a, fx: o, fy: s, sort: c, dx: l = 0, dy: u = 0, margin: d = 0, marginTop: f = d, marginRight: p = d, marginBottom: m = d, marginLeft: h = d, className: g, clip: _ = r?.clip, channels: v, tip: y, render: b } = n;
		if (this.data = e, this.sort = zw(c) ? c : null, this.initializer = KT(n).initializer, this.transform = this.initializer ? n.transform : GT(n).transform, i === null || i === !1 ? this.facet = null : (this.facet = Dw(i === !0 ? "include" : i, "facet", [
			"auto",
			"include",
			"exclude",
			"super"
		]), this.fx = e === cw && typeof o == "string" ? [o] : o, this.fy = e === cw && typeof s == "string" ? [s] : s), this.facetAnchor = vO(a), t = TT(t), v !== void 0 && (t = {
			...Pk(v),
			...t
		}), r !== void 0 && (t = {
			...uk(this, n, r),
			...t
		}), this.channels = Object.fromEntries(Object.entries(t).map(([t, n]) => {
			if (Rw(n.value)) {
				let { value: e, label: t = n.label, scale: r = n.scale } = n.value;
				n = {
					...n,
					label: t,
					scale: r,
					value: e
				};
			}
			if (e === cw && typeof n.value == "string") {
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
		})), this.dx = +l, this.dy = +u, this.marginTop = +f, this.marginRight = +p, this.marginBottom = +m, this.marginLeft = +h, this.clip = ET(_), this.tip = Fk(y), this.className = mw(g), this.facet === "super") {
			if (o || s) throw Error("super-faceting cannot use fx or fy");
			for (let e in this.channels) {
				let { scale: n } = t[e];
				if (n === "x" || n === "y") throw Error("super-faceting cannot use x or y");
			}
		}
		b != null && (this.render = Nk(b, this.render));
	}
	initialize(e, t, n) {
		let r = Ow(this.data);
		e === void 0 && r != null && (e = [Ww(r)]);
		let i = e;
		this.transform != null && ({facets: e, data: r} = this.transform(r, e, n), r = Ow(r)), e !== void 0 && (e.original = i);
		let a = mE(this.channels, r);
		return this.sort != null && _E(r, e, a, t, this.sort), {
			data: r,
			facets: e,
			channels: a
		};
	}
	filter(e, t, n) {
		for (let r in t) {
			let { filter: i = lC } = t[r];
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
			i in e && e[i].scale === "y" && GO(r, i, t, n.projection);
		}
	}
	scale(e, t, n) {
		let r = hE(e, t);
		return n.projection && this.project(e, r, n), r;
	}
};
function Mk(...e) {
	return e.plot = jk.prototype.plot, e;
}
function Nk(e, t) {
	if (e == null) return t === null ? void 0 : t;
	if (t == null) return e === null ? void 0 : e;
	if (typeof e != "function") throw TypeError(`invalid render transform: ${e}`);
	if (typeof t != "function") throw TypeError(`invalid render transform: ${t}`);
	return function(n, r, i, a, o, s) {
		return e.call(this, n, r, i, a, o, (e, n, r, i, a) => t.call(this, e, n, r, i, a, s));
	};
}
function Pk(e) {
	return Object.fromEntries(Object.entries(TT(e)).map(([e, t]) => (t = typeof t == "string" ? {
		value: t,
		label: e
	} : aT(t), t.filter === void 0 && t.scale == null && (t = {
		...t,
		filter: null
	}), [e, t])));
}
function Fk(e) {
	return e === !0 ? "xy" : e === !1 || e == null ? null : typeof e == "string" ? Dw(e, "tip", [
		"x",
		"y",
		"xy"
	]) : e;
}
function Ik(e, t) {
	return e?.tip === !0 ? {
		...e,
		tip: t
	} : Iw(e?.tip) && e.tip.pointer === void 0 ? {
		...e,
		tip: {
			...e.tip,
			pointer: t
		}
	} : e;
}
//#endregion
//#region node_modules/@observablehq/plot/src/dimensions.js
function Lk(e, t, n = {}) {
	let r = .5 - sk, i = .5 + sk, a = .5 + sk, o = .5 - sk;
	for (let { marginTop: e, marginRight: n, marginBottom: s, marginLeft: c } of t) e > r && (r = e), n > i && (i = n), s > a && (a = s), c > o && (o = c);
	let { margin: s, marginTop: c = s === void 0 ? r : s, marginRight: l = s === void 0 ? i : s, marginBottom: u = s === void 0 ? a : s, marginLeft: d = s === void 0 ? o : s } = n;
	c = +c, l = +l, u = +u, d = +d;
	let { width: f = 640, height: p = Rk(e, n, {
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
function Rk({ x: e, y: t, fy: n, fx: r }, { projection: i, aspectRatio: a }, { width: o, marginTopDefault: s, marginRightDefault: c, marginBottomDefault: l, marginLeftDefault: u }) {
	let d = n && n.scale.domain().length || 1, f = qO(i);
	if (f) {
		let e = r ? r.scale.domain().length : 1, t = (1.1 * d - .1) / (1.1 * e - .1) * f, n = Math.max(.1, Math.min(10, t));
		return Math.round((o - u - c) * n + s + l);
	}
	let p = t ? iO(t) ? t.scale.domain().length || 1 : Math.max(7, 17 / d) : 1;
	if (a != null) {
		if (a = +a, !(isFinite(a) && a > 0)) throw Error(`invalid aspectRatio: ${a}`);
		let i = zk("y", t) / (zk("x", e) * a), d = r ? r.scale.bandwidth() : 1, f = n ? n.scale.bandwidth() : 1;
		return (i * (d * (o - u - c) - e.insetLeft - e.insetRight) + t.insetTop + t.insetBottom) / f + s + l;
	}
	return !!(t || n) * Math.max(1, Math.min(60, p * d)) * 20 + !!r * 30 + 60;
}
function zk(e, t) {
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
	let [a, o] = ln(r);
	return Math.abs(i(o) - i(a));
}
//#endregion
//#region node_modules/@observablehq/plot/src/interactions/pointer.js
var Bk = /* @__PURE__ */ new WeakMap();
function Vk(e, t, { x: n, y: r, px: i, py: a, maxRadius: o = 40, channels: s, render: c, ...l } = {}) {
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
		render: Nk(function(n, r, i, a, s, c) {
			s = {
				...s,
				pointerSticky: !1
			};
			let l = s.ownerSVGElement, { data: u } = s.getMarkState(this), d = Bk.get(l);
			d || Bk.set(l, d = {
				sticky: !1,
				roots: [],
				renders: []
			});
			let f = d.renders.push(M) - 1, { x: p, y: m, fx: h, fy: g } = r, _ = h ? h(n.fx) - a.marginLeft : 0, v = g ? g(n.fy) - a.marginTop : 0;
			p?.bandwidth && (_ += p.bandwidth() / 2), m?.bandwidth && (v += m.bandwidth() / 2);
			let y = n.fi != null, b;
			if (y) {
				let e = d.facetStates;
				e || (d.facetStates = e = /* @__PURE__ */ new Map()), b = e.get(this), b || e.set(this, b = /* @__PURE__ */ new Map());
			}
			let [x, S] = Ak(this, a), { px: C, py: w } = i, T = C ? (e) => C[e] : Gk(i, x), E = w ? (e) => w[e] : Kk(i, S), D, O, k, A;
			function j(e, t) {
				if (y) if (A &&= cancelAnimationFrame(A), e == null) b.delete(n.fi);
				else {
					b.set(n.fi, t), A = requestAnimationFrame(() => {
						A = null;
						for (let [r, i] of b) if (i < t || i === t && r < n.fi) {
							e = null;
							break;
						}
						M(e);
					});
					return;
				}
				M(e);
			}
			function M(e) {
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
					let e = D == null ? null : XC(u) ? u[D] : u.get(D);
					s.dispatchValue(e);
				}
				return o;
			}
			function N(r) {
				if (d.sticky || r.pointerType === "mouse" && r.buttons === 1) return;
				let [i, s] = at(r);
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
			function P(e) {
				e.pointerType === "mouse" && D != null && (d.sticky && d.roots.some((t) => t?.contains(e.target)) || (d.sticky ? (d.sticky = !1, d.renders.forEach((e) => e(null))) : (d.sticky = !0, M(D)), e.stopImmediatePropagation()));
			}
			function ee(e) {
				e.pointerType === "mouse" && (d.sticky || j(null));
			}
			return l.addEventListener("pointerenter", N), l.addEventListener("pointermove", N), l.addEventListener("pointerdown", P), l.addEventListener("pointerleave", ee), M(null);
		}, c)
	};
}
function Hk(e) {
	return Vk(1, 1, e);
}
function Uk(e) {
	return Vk(1, .01, e);
}
function Wk(e) {
	return Vk(.01, 1, e);
}
function Gk({ x1: e, x2: t, x: n = e }, r) {
	return e && t ? (n) => (e[n] + t[n]) / 2 : n ? (e) => n[e] : () => r;
}
function Kk({ y1: e, y2: t, y: n = e }, r) {
	return e && t ? (n) => (e[n] + t[n]) / 2 : n ? (e) => n[e] : () => r;
}
//#endregion
//#region node_modules/@observablehq/plot/src/axes.js
function qk(e) {
	return iO(e) && e.interval === void 0 ? void 0 : "tabular-nums";
}
//#endregion
//#region node_modules/@observablehq/plot/src/legends/ramp.js
function Jk(e, t) {
	let { label: n = e.label, tickSize: r = 6, width: i = 240, height: a = 44 + r, marginTop: o = 18, marginRight: s = 0, marginBottom: c = 16 + r, marginLeft: l = 0, style: u, ticks: d = (i - l - s) / 64, tickFormat: f, fontVariant: p = qk(e), round: m = !0, opacity: h, className: g } = t, _ = XO(t);
	g = Ok(g), h = Tw(h)[1], f === null && (f = () => null);
	let v = ZO("svg", _).attr("class", `${g}-ramp`).attr("font-family", "system-ui, sans-serif").attr("font-size", 10).attr("width", i).attr("height", a).attr("viewBox", `0 0 ${i} ${a}`).call((e) => e.append("style").text(`:where(.${g}-ramp) {
  display: block;
  height: auto;
  height: intrinsic;
  max-width: 100%;
  overflow: visible;
}
:where(.${g}-ramp text) {
  white-space: pre;
}`)).call(kk, u), y = (e) => e.selectAll(".tick line").attr("y1", o + c - a), b, x = m ? (e, t) => e.rangeRound(t) : (e, t) => e.range(t), { type: S, domain: C, range: w, interpolate: T, scale: E, pivot: D } = e;
	if (T) {
		let e = w === void 0 ? T : Zc(T.length === 1 ? dD(T) : T, w);
		b = x(E.copy(), Qc(xc(l, i - s), Math.min(C.length + (D !== void 0), w === void 0 ? Infinity : w.length)));
		let t = _.document.createElement("canvas");
		t.width = 256, t.height = 1;
		let n = t.getContext("2d");
		for (let t = 0; t < 256; ++t) n.fillStyle = e(t / 255), n.fillRect(t, 0, 1, 1);
		v.append("image").attr("opacity", h).attr("x", l).attr("y", o).attr("width", i - l - s).attr("height", a - o - c).attr("preserveAspectRatio", "none").attr("xlink:href", t.toDataURL());
	} else if (S === "threshold") {
		let e = C, t = f === void 0 ? (e) => e : typeof f == "string" ? Ol(f) : f;
		b = x(Il().domain([-1, w.length - 1]), [l, i - s]), v.append("g").attr("fill-opacity", h).selectAll().data(w).enter().append("rect").attr("x", (e, t) => b(t - 1)).attr("y", o).attr("width", (e, t) => b(t) - b(t - 1)).attr("height", a - o - c).attr("fill", (e) => e), d = jw(e, (e, t) => t), f = (n) => t(e[n], n);
	} else b = x(Bo().domain(C), [l, i - s]), v.append("g").attr("fill-opacity", h).selectAll().data(C).enter().append("rect").attr("x", b).attr("y", o).attr("width", Math.max(0, b.bandwidth() - 1)).attr("height", a - o - c).attr("fill", E), y = () => {};
	return v.append("g").attr("transform", `translate(0,${a - c})`).call(Wh(b).ticks(Array.isArray(d) ? null : d, typeof f == "string" ? f : void 0).tickFormat(typeof f == "function" ? f : void 0).tickSize(r).tickValues(Array.isArray(d) ? d : null)).attr("font-size", null).attr("font-family", null).attr("font-variant", Tk(p, "normal")).call(y).call((e) => e.select(".domain").remove()), n !== void 0 && v.append("text").attr("x", l).attr("y", o - 6).attr("fill", "currentColor").attr("font-weight", "bold").text(n), v.node();
}
//#endregion
//#region node_modules/@observablehq/plot/src/math.js
var Yk = Math.PI / 180;
//#endregion
//#region node_modules/@observablehq/plot/src/marker.js
function Xk(e, { marker: t, markerStart: n = t, markerMid: r = t, markerEnd: i = t } = {}) {
	e.markerStart = Zk(n), e.markerMid = Zk(r), e.markerEnd = Zk(i);
}
function Zk(e) {
	if (e == null || e === !1) return null;
	if (e === !0) return eA;
	if (typeof e == "function") return e;
	switch (`${e}`.toLowerCase()) {
		case "none": return null;
		case "arrow": return Qk("auto");
		case "arrow-reverse": return Qk("auto-start-reverse");
		case "dot": return $k;
		case "circle":
		case "circle-fill": return eA;
		case "circle-stroke": return tA;
		case "tick": return nA("auto");
		case "tick-x": return nA(90);
		case "tick-y": return nA(0);
	}
	throw Error(`invalid marker: ${e}`);
}
function Qk(e) {
	return (t, n) => ZO("svg:marker", n).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("orient", e).attr("fill", "none").attr("stroke", t).attr("stroke-width", 1.5).attr("stroke-linecap", "round").attr("stroke-linejoin", "round").call((e) => e.append("path").attr("d", "M-1.5,-3l3,3l-3,3")).node();
}
function $k(e, t) {
	return ZO("svg:marker", t).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", e).attr("stroke", "none").call((e) => e.append("circle").attr("r", 2.5)).node();
}
function eA(e, t) {
	return ZO("svg:marker", t).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", e).attr("stroke", "var(--plot-background)").attr("stroke-width", 1.5).call((e) => e.append("circle").attr("r", 3)).node();
}
function tA(e, t) {
	return ZO("svg:marker", t).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", "var(--plot-background)").attr("stroke", e).attr("stroke-width", 1.5).call((e) => e.append("circle").attr("r", 3)).node();
}
function nA(e) {
	return (t, n) => ZO("svg:marker", n).attr("viewBox", "-3 -3 6 6").attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", e).attr("stroke", t).call((e) => e.append("path").attr("d", "M0,-3v6")).node();
}
var rA = 0;
function iA(e, t, { stroke: n }, r) {
	return cA(e, t, n && ((e) => n[e]), null, r);
}
var aA = 1, oA = 2;
function sA(e, t) {
	let n = new Uint8Array(t.length), r = e.data().filter((e) => e.length > 1), i = r.length;
	for (let e = 0, a = QO; e < i; ++e) {
		let i = r[e];
		if (i.length > 1) {
			let e = i[0];
			a !== (a = qw(t[e])) && (n[e] |= aA);
		}
	}
	for (let e = i - 1, a = QO; e >= 0; --e) {
		let i = r[e];
		if (i.length > 1) {
			let e = i[0];
			a !== (a = qw(t[e])) && (n[e] |= oA);
		}
	}
	return ([e]) => n[e];
}
function cA(e, { markerStart: t, markerMid: n, markerEnd: r, stroke: i }, a = () => i, o, s) {
	if (!t && !n && !r) return;
	let c = /* @__PURE__ */ new Map(), l = o && sA(e, o);
	function u(e, t, n) {
		return function(r) {
			if (n && !n(r)) return;
			let i = a(r), o = c.get(t);
			o || c.set(t, o = /* @__PURE__ */ new Map());
			let l = o.get(i);
			if (!l) {
				let e = this.parentNode.insertBefore(t(i, s), this), n = `plot-marker-${++rA}`;
				e.setAttribute("id", n), o.set(i, l = `url(#${n})`);
			}
			this.setAttribute(e, l);
		};
	}
	t && e.each(u("marker-start", t, l && ((e) => l(e) & aA))), n && l && e.each(u("marker-start", n, (e) => !(l(e) & aA))), n && e.each(u("marker-mid", n)), r && e.each(u("marker-end", r, l && ((e) => l(e) & oA)));
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/inset.js
function lA({ inset: e, insetLeft: t, insetRight: n, ...r } = {}) {
	return [t, n] = dA(e, t, n), {
		inset: e,
		insetLeft: t,
		insetRight: n,
		...r
	};
}
function uA({ inset: e, insetTop: t, insetBottom: n, ...r } = {}) {
	return [t, n] = dA(e, t, n), {
		inset: e,
		insetTop: t,
		insetBottom: n,
		...r
	};
}
function dA(e, t, n) {
	return e === void 0 && t === void 0 && n === void 0 ? sk ? [1, 0] : [.5, .5] : [t, n];
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/interval.js
function fA(e, { interval: t }) {
	return e = { ...aT(e) }, e.interval = eT(e.interval === void 0 ? t : e.interval), e;
}
function pA(e, t, n, r) {
	let { [e]: i, [`${e}1`]: a, [`${e}2`]: o } = n, { value: s, interval: c } = fA(i, n);
	if (s == null || c == null && !r) return n;
	let l = Xw(i);
	if (c == null) {
		let t, i = {
			transform: (e) => t ||= nw(e, s),
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
		return d !== void 0 && e === u ? d : d = jw(nw(u = e, s), (e) => c.floor(e));
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
function mA(e, t, n) {
	let { [e]: r } = n, { value: i, interval: a } = fA(r, n);
	return i == null || a == null ? n : t({
		...n,
		[e]: {
			label: Xw(r),
			transform: (e) => {
				let t = jw(nw(e, i), (e) => a.floor(e)), n = t.map((e) => a.offset(e));
				return t.map(uT(t) ? (e, t) => e == null || isNaN(e = +e) || (t = n[t], t == null) || isNaN(t = +t) ? void 0 : /* @__PURE__ */ new Date((e + t) / 2) : (e, t) => e == null || (t = n[t], t == null) ? NaN : (+e + +t) / 2);
			}
		}
	});
}
function hA(e = {}) {
	return pA("x", lA, e);
}
function gA(e = {}) {
	return pA("y", uA, e);
}
function _A(e = {}) {
	return mA("x", lA, e);
}
function vA(e = {}) {
	return mA("y", uA, e);
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/rule.js
var yA = {
	ariaLabel: "rule",
	fill: null,
	stroke: "currentColor"
}, bA = class extends jk {
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
		}, Ik(t, "x"), yA), this.insetTop = hw(o), this.insetBottom = hw(s), Xk(this, t);
	}
	render(e, t, n, r, i) {
		let { x: a, y: o } = t, { x: s, y1: c, y2: l } = n, { width: u, height: d, marginTop: f, marginRight: p, marginLeft: m, marginBottom: h } = r, { insetTop: g, insetBottom: _ } = this;
		return ZO("svg:g", i).call(bk, this, r, i).call(wk, this, { x: s && a }, sk, 0).call((t) => t.selectAll().data(e).enter().append("line").call(xk, this).attr("x1", s ? (e) => s[e] : (m + u - p) / 2).attr("x2", s ? (e) => s[e] : (m + u - p) / 2).attr("y1", c && !sO(o) ? (e) => c[e] + g : f + g).attr("y2", l && !sO(o) ? o.bandwidth ? (e) => l[e] + o.bandwidth() - _ : (e) => l[e] - _ : d - h - _).call(pk, this, n).call(iA, this, n, i)).node();
	}
}, xA = class extends jk {
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
		}, Ik(t, "y"), yA), this.insetRight = hw(o), this.insetLeft = hw(s), Xk(this, t);
	}
	render(e, t, n, r, i) {
		let { x: a, y: o } = t, { y: s, x1: c, x2: l } = n, { width: u, height: d, marginTop: f, marginRight: p, marginLeft: m, marginBottom: h } = r, { insetLeft: g, insetRight: _ } = this;
		return ZO("svg:g", i).call(bk, this, r, i).call(wk, this, { y: s && o }, 0, sk).call((t) => t.selectAll().data(e).enter().append("line").call(xk, this).attr("x1", c && !sO(a) ? (e) => c[e] + g : m + g).attr("x2", l && !sO(a) ? a.bandwidth ? (e) => l[e] + a.bandwidth() - _ : (e) => l[e] - _ : u - p - _).attr("y1", s ? (e) => s[e] : (f + d - h) / 2).attr("y2", s ? (e) => s[e] : (f + d - h) / 2).call(pk, this, n).call(iA, this, n, i)).node();
	}
};
function SA(e, t) {
	let { x: n = dw, y: r, y1: i, y2: a, ...o } = gA(t);
	return [i, a] = wA(r, i, a), new bA(e, {
		...o,
		x: n,
		y1: i,
		y2: a
	});
}
function CA(e, t) {
	let { y: n = dw, x: r, x1: i, x2: a, ...o } = hA(t);
	return [i, a] = wA(r, i, a), new xA(e, {
		...o,
		y: n,
		x1: i,
		x2: a
	});
}
function wA(e, t, n) {
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
function TA(e, ...t) {
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
var EA = {
	ariaLabel: "text",
	strokeLinejoin: "round",
	strokeWidth: 3,
	paintOrder: "stroke"
}, DA = "­", OA = class extends jk {
	constructor(e, t = {}) {
		let { x: n, y: r, text: i = sT(e) && cT(e) ? dw : uw, frameAnchor: a, textAnchor: o = /right$/i.test(a) ? "end" : /left$/i.test(a) ? "start" : "middle", lineAnchor: s = /^top/i.test(a) ? "top" : /^bottom/i.test(a) ? "bottom" : "middle", lineHeight: c = 1, lineWidth: l = Infinity, textOverflow: u, monospace: d, fontFamily: f = d ? "ui-monospace, monospace" : void 0, fontSize: p, fontStyle: m, fontVariant: h, fontWeight: g, rotate: _ } = t, [v, y] = Tw(_, 0), [b, x] = LA(p);
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
				value: oT(v),
				optional: !0
			},
			text: {
				value: i,
				filter: fC,
				optional: !0
			}
		}, t, EA), this.rotate = y, this.textAnchor = Tk(o, "middle"), this.lineAnchor = Dw(s, "lineAnchor", [
			"top",
			"middle",
			"bottom"
		]), this.lineHeight = +c, this.lineWidth = +l, this.textOverflow = kA(u), this.monospace = !!d, this.fontFamily = mw(f), this.fontSize = x, this.fontStyle = mw(m), this.fontVariant = mw(h), this.fontWeight = mw(g), this.frameAnchor = ST(a), !(this.lineWidth >= 0)) throw Error(`invalid lineWidth: ${l}`);
		this.splitLines = UA(this), this.clipLine = WA(this);
	}
	render(e, t, n, r, i) {
		let { x: a, y: o } = t, { x: s, y: c, rotate: l, text: u, title: d, fontSize: f } = n, { rotate: p } = this, [m, h] = Ak(this, r);
		return ZO("svg:g", i).call(bk, this, r, i).call(PA, this, u, r).call(wk, this, {
			x: s && a,
			y: c && o
		}).call((t) => t.selectAll().data(e).enter().append("text").call(xk, this).call(AA, this, u, d).attr("transform", TA`translate(${s ? (e) => s[e] : m},${c ? (e) => c[e] : h})${l ? (e) => ` rotate(${l[e]})` : p ? ` rotate(${p})` : ""}`).call($, "font-size", f && ((e) => f[e])).call(pk, this, n)).node();
	}
};
function kA(e) {
	return e == null ? null : Dw(e, "textOverflow", [
		"clip",
		"ellipsis",
		"clip-start",
		"clip-end",
		"ellipsis-start",
		"ellipsis-middle",
		"ellipsis-end"
	]).replace(/^(clip|ellipsis)$/, "$1-end");
}
function AA(t, n, r, i) {
	if (!r) return;
	let { lineAnchor: a, lineHeight: o, textOverflow: s, splitLines: c, clipLine: l } = n;
	t.each(function(t) {
		let n = c(ok(r[t]) ?? "").map(l), u = n.length, d = a === "top" ? .71 : a === "bottom" ? 1 - u : (164 - u * 100) / 200;
		if (u > 1) {
			let t = 0;
			for (let r = 0; r < u; ++r) {
				if (++t, !n[r]) continue;
				let i = this.ownerDocument.createElementNS(e.svg, "tspan");
				i.setAttribute("x", 0), r === t - 1 ? i.setAttribute("y", `${(d + r) * o}em`) : i.setAttribute("dy", `${t * o}em`), i.textContent = n[r], this.appendChild(i), t = 0;
			}
		} else d && this.setAttribute("y", `${d * o}em`), this.textContent = n[0];
		if (s && !i && n[0] !== r[t]) {
			let n = this.ownerDocument.createElementNS(e.svg, "title");
			n.textContent = r[t], this.appendChild(n);
		}
	});
}
function jA(e, { x: t, y: n, ...r } = {}) {
	return r.frameAnchor === void 0 && ([t, n] = Vw(t, n)), new OA(e, {
		...r,
		x: t,
		y: n
	});
}
function MA(e, { x: t = dw, ...n } = {}) {
	return new OA(e, vA({
		...n,
		x: t
	}));
}
function NA(e, { y: t = dw, ...n } = {}) {
	return new OA(e, _A({
		...n,
		y: t
	}));
}
function PA(e, t, n) {
	$(e, "text-anchor", t.textAnchor), $(e, "font-family", t.fontFamily), $(e, "font-size", t.fontSize), $(e, "font-style", t.fontStyle), $(e, "font-variant", t.fontVariant === void 0 ? FA(n) : t.fontVariant), $(e, "font-weight", t.fontWeight);
}
function FA(e) {
	return e && (pT(e) || uT(e)) ? "tabular-nums" : void 0;
}
var IA = /* @__PURE__ */ new Set([
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
function LA(e) {
	return e == null || typeof e == "number" ? [void 0, e] : typeof e == "string" ? (e = e.trim().toLowerCase(), IA.has(e) || /^[+-]?\d*\.?\d+(e[+-]?\d+)?(\w*|%)$/.test(e) ? [void 0, e] : [e, void 0]) : [e, void 0];
}
function RA(e, t, n) {
	let r = [], i, a = 0;
	for (let [o, s, c] of zA(e)) {
		if (i === void 0 && (i = o), a > i && n(e, i, s) > t && (r.push(e.slice(i, a) + (e[a - 1] === DA ? "-" : "")), i = o), c) {
			r.push(e.slice(i, s)), i = void 0;
			continue;
		}
		a = s;
	}
	return r;
}
function* zA(e) {
	let t = 0, n = 0, r = e.length;
	for (; n < r;) {
		let r = 1;
		switch (e[n]) {
			case DA:
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
var BA = {
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
function VA(e, t = 0, n = e.length) {
	let r = 0;
	for (let i = t; i < n; i = ZA(e, i)) r += BA[e[i]] ?? (nj(e, i) ? 120 : BA.e);
	return r;
}
function HA(e, t = 0, n = e.length) {
	let r = 0;
	for (let i = t; i < n; i = ZA(e, i)) r += nj(e, i) ? 126 : 63;
	return r;
}
function UA({ monospace: e, lineWidth: t, textOverflow: n }) {
	if (n != null || t == Infinity) return (e) => e.split(/\r\n?|\n/g);
	let r = e ? HA : VA, i = t * 100;
	return (e) => RA(e, i, r);
}
function WA({ monospace: e, lineWidth: t, textOverflow: n }) {
	if (n == null || t == Infinity) return (e) => e;
	let r = e ? HA : VA, i = t * 100;
	switch (n) {
		case "clip-start": return (e) => JA(e, i, r, "");
		case "clip-end": return (e) => KA(e, i, r, "");
		case "ellipsis-start": return (e) => JA(e, i, r, "…");
		case "ellipsis-middle": return (e) => qA(e, i, r, "…");
		case "ellipsis-end": return (e) => KA(e, i, r, "…");
	}
}
function GA(e, t, n, r) {
	let i = [], a = 0;
	for (let o = 0, s = 0, c = e.length; o < c; o = s) {
		s = ZA(e, o);
		let c = n(e, o, s);
		if (a + c > t) {
			for (a += r; a > t && o > 0;) s = o, o = i.pop(), a -= n(e, o, s);
			return [o, t - a];
		}
		a += c, i.push(o);
	}
	return [-1, 0];
}
function KA(e, t, n, r) {
	e = e.trim();
	let i = n(r), [a] = GA(e, t, n, i);
	return a < 0 ? e : e.slice(0, a).trimEnd() + r;
}
function qA(e, t, n, r) {
	e = e.trim();
	let i = n(e);
	if (i <= t) return e;
	let a = n(r) / 2, [o, s] = GA(e, t / 2, n, a), [c] = GA(e, i - t / 2 - s + a, n, -a);
	return c < 0 ? r : e.slice(0, o).trimEnd() + r + e.slice(ZA(e, c)).trimStart();
}
function JA(e, t, n, r) {
	e = e.trim();
	let i = n(e);
	if (i <= t) return e;
	let a = n(r), [o] = GA(e, i - t + a, n, -a);
	return o < 0 ? r : r + e.slice(ZA(e, o)).trimStart();
}
var YA = /[\p{Combining_Mark}\p{Emoji_Modifier}]+/uy, XA = /\p{Extended_Pictographic}/uy;
function ZA(e, t) {
	return t += $A(e, t) ? 2 : 1, tj(e, t) && (t = YA.lastIndex), ej(e, t) ? ZA(e, t + 1) : t;
}
function QA(e, t) {
	return e.charCodeAt(t) < 128;
}
function $A(e, t) {
	let n = e.charCodeAt(t);
	if (n >= 55296 && n < 56320) {
		let n = e.charCodeAt(t + 1);
		return n >= 56320 && n < 57344;
	}
	return !1;
}
function ej(e, t) {
	return e.charCodeAt(t) === 8205;
}
function tj(e, t) {
	return !QA(e, t) && (YA.lastIndex = t, YA.test(e));
}
function nj(e, t) {
	return !QA(e, t) && (XA.lastIndex = t, XA.test(e));
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/vector.js
var rj = {
	ariaLabel: "vector",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.5,
	strokeLinejoin: "round",
	strokeLinecap: "round"
}, ij = 3.5, aj = ij * 5, oj = { draw(e, t, n) {
	let r = t * n / aj;
	e.moveTo(0, 0), e.lineTo(0, -t), e.moveTo(-r, r - t), e.lineTo(0, -t), e.lineTo(r, r - t);
} }, sj = /* @__PURE__ */ new Map([["arrow", oj], ["spike", { draw(e, t, n) {
	e.moveTo(-n, 0), e.lineTo(0, -t), e.lineTo(n, 0);
} }]]);
function cj(e) {
	return e && typeof e.draw == "function";
}
function lj(e) {
	if (cj(e)) return e;
	let t = sj.get(`${e}`.toLowerCase());
	if (t) return t;
	throw Error(`invalid shape: ${e}`);
}
var uj = class extends jk {
	constructor(e, t = {}) {
		let { x: n, y: r, r: i = ij, length: a, rotate: o, shape: s = oj, anchor: c = "middle", frameAnchor: l } = t, [u, d] = Tw(a, 12), [f, p] = Tw(o, 0);
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
		}, t, rj), this.r = +i, this.length = d, this.rotate = p, this.shape = lj(s), this.anchor = Dw(c, "anchor", [
			"start",
			"middle",
			"end"
		]), this.frameAnchor = ST(l);
	}
	render(e, t, n, r, i) {
		let { x: a, y: o } = t, { x: s, y: c, length: l, rotate: d } = n, { length: f, rotate: p, anchor: m, shape: h, r: g } = this, [_, v] = Ak(this, r);
		return ZO("svg:g", i).call(bk, this, r, i).call(wk, this, {
			x: s && a,
			y: c && o
		}).call((t) => t.selectAll().data(e).enter().append("path").call(xk, this).attr("transform", TA`translate(${s ? (e) => s[e] : _},${c ? (e) => c[e] : v})${d ? (e) => ` rotate(${d[e]})` : p ? ` rotate(${p})` : ""}${m === "start" ? "" : m === "end" ? l ? (e) => ` translate(0,${l[e]})` : ` translate(0,${f})` : l ? (e) => ` translate(0,${l[e] / 2})` : ` translate(0,${f / 2})`}`).attr("d", l ? (e) => {
			let t = u();
			return h.draw(t, l[e], g), t;
		} : (() => {
			let e = u();
			return h.draw(e, f, g), e;
		})()).call(pk, this, n)).node();
	}
};
function dj(e, t = {}) {
	let { x: n = dw, ...r } = t;
	return new uj(e, {
		...r,
		x: n
	});
}
function fj(e, t = {}) {
	let { y: n = dw, ...r } = t;
	return new uj(e, {
		...r,
		y: n
	});
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/axis.js
function pj(e, t) {
	return arguments.length < 2 && !sT(e) && (t = e, e = null), t === void 0 && (t = {}), [e, t];
}
function mj({ anchor: e } = {}, t) {
	return e === void 0 ? t[0] : Dw(e, "anchor", t);
}
function hj(e) {
	return mj(e, ["left", "right"]);
}
function gj(e) {
	return mj(e, ["right", "left"]);
}
function _j(e) {
	return mj(e, ["bottom", "top"]);
}
function vj(e) {
	return mj(e, ["top", "bottom"]);
}
function yj() {
	let [e, t] = pj(...arguments);
	return Cj("y", hj(t), e, t);
}
function bj() {
	let [e, t] = pj(...arguments);
	return Cj("fy", gj(t), e, t);
}
function xj() {
	let [e, t] = pj(...arguments);
	return wj("x", _j(t), e, t);
}
function Sj() {
	let [e, t] = pj(...arguments);
	return wj("fx", vj(t), e, t);
}
function Cj(e, t, n, { color: r = "currentColor", opacity: i = 1, stroke: a = r, strokeOpacity: o = i, strokeWidth: s = 1, fill: c = r, fillOpacity: l = i, textAnchor: u, textStroke: d, textStrokeOpacity: f, textStrokeWidth: p, tickSize: m = e === "y" ? 6 : 0, tickPadding: h, tickRotate: g, x: _, margin: v, marginTop: y = v === void 0 ? 20 : v, marginRight: b = v === void 0 ? t === "right" ? 40 : 0 : v, marginBottom: x = v === void 0 ? 20 : v, marginLeft: S = v === void 0 ? t === "left" ? 40 : 0 : v, label: C, labelAnchor: w, labelArrow: T, labelOffset: E, ariaLabel: D = `${e}-axis`, ...O }) {
	return m = hw(m), h = hw(h), g = hw(g), w !== void 0 && (w = Dw(w, "labelAnchor", [
		"center",
		"top",
		"bottom"
	])), T = Jj(T), Mk(m && !vT(a) ? Tj(e, t, n, {
		stroke: a,
		strokeOpacity: o,
		strokeWidth: s,
		tickSize: m,
		tickPadding: h,
		tickRotate: g,
		x: _,
		ariaLabel: D,
		...O
	}) : null, vT(c) ? null : Dj(e, t, n, {
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
	}), !vT(c) && C !== null ? jA([], Ij({
		fill: c,
		fillOpacity: l,
		...O
	}, function(n, r, i, a, o) {
		let s = a[e], { marginTop: c, marginRight: l, marginBottom: u, marginLeft: d } = e === "y" && o.inset || o, f = w ?? (s.bandwidth ? "center" : "top"), p = E ?? (t === "right" ? l : d) - 3;
		return f === "center" ? (this.textAnchor = void 0, this.lineAnchor = t === "right" ? "bottom" : "top", this.frameAnchor = t, this.rotate = -90) : (this.textAnchor = t === "right" ? "end" : "start", this.lineAnchor = f, this.frameAnchor = `${f}-${t}`, this.rotate = 0), this.dy = f === "top" ? 3 - c : f === "bottom" ? u - 3 : 0, this.dx = t === "right" ? p : -p, this.ariaLabel = `${D} label`, {
			facets: [[0]],
			channels: { text: { value: [qj(e, s, {
				anchor: t,
				label: C,
				labelAnchor: f,
				labelArrow: T
			})] } }
		};
	})) : null);
}
function wj(e, t, n, { color: r = "currentColor", opacity: i = 1, stroke: a = r, strokeOpacity: o = i, strokeWidth: s = 1, fill: c = r, fillOpacity: l = i, textAnchor: u, textStroke: d, textStrokeOpacity: f, textStrokeWidth: p, tickSize: m = e === "x" ? 6 : 0, tickPadding: h, tickRotate: g, y: _, margin: v, marginTop: y = v === void 0 ? t === "top" ? 30 : 0 : v, marginRight: b = v === void 0 ? 20 : v, marginBottom: x = v === void 0 ? t === "bottom" ? 30 : 0 : v, marginLeft: S = v === void 0 ? 20 : v, label: C, labelAnchor: w, labelArrow: T, labelOffset: E, ariaLabel: D = `${e}-axis`, ...O }) {
	return m = hw(m), h = hw(h), g = hw(g), w !== void 0 && (w = Dw(w, "labelAnchor", [
		"center",
		"left",
		"right"
	])), T = Jj(T), Mk(m && !vT(a) ? Ej(e, t, n, {
		stroke: a,
		strokeOpacity: o,
		strokeWidth: s,
		tickSize: m,
		tickPadding: h,
		tickRotate: g,
		y: _,
		ariaLabel: D,
		...O
	}) : null, vT(c) ? null : Oj(e, t, n, {
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
	}), !vT(c) && C !== null ? jA([], Ij({
		fill: c,
		fillOpacity: l,
		...O
	}, function(n, r, i, a, o) {
		let s = a[e], { marginTop: c, marginRight: l, marginBottom: u, marginLeft: d } = e === "x" && o.inset || o, f = w ?? (s.bandwidth ? "center" : "right"), p = E ?? (t === "top" ? c : u) - 3;
		return f === "center" ? (this.frameAnchor = t, this.textAnchor = void 0) : (this.frameAnchor = `${t}-${f}`, this.textAnchor = f === "right" ? "end" : "start"), this.lineAnchor = t, this.dy = t === "top" ? -p : p, this.dx = f === "right" ? l - 3 : f === "left" ? 3 - d : 0, this.ariaLabel = `${D} label`, {
			facets: [[0]],
			channels: { text: { value: [qj(e, s, {
				anchor: t,
				label: C,
				labelAnchor: f,
				labelArrow: T
			})] } }
		};
	})) : null);
}
function Tj(e, t, n, { strokeWidth: r = 1, strokeLinecap: i = null, strokeLinejoin: a = null, facetAnchor: o = t + (e === "y" ? "-empty" : ""), frameAnchor: s = t, tickSize: c, inset: l = 0, insetLeft: u = l, insetRight: d = l, dx: f = 0, y: p = e === "y" ? void 0 : null, ariaLabel: m, ...h }) {
	return Lj(fj, e, n, {
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
		dx: t === "left" ? +f - sk + +u : +f + sk - d,
		anchor: "start",
		length: c,
		shape: t === "left" ? Wj : Gj
	});
}
function Ej(e, t, n, { strokeWidth: r = 1, strokeLinecap: i = null, strokeLinejoin: a = null, facetAnchor: o = t + (e === "x" ? "-empty" : ""), frameAnchor: s = t, tickSize: c, inset: l = 0, insetTop: u = l, insetBottom: d = l, dy: f = 0, x: p = e === "x" ? void 0 : null, ariaLabel: m, ...h }) {
	return Lj(dj, e, n, {
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
		dy: t === "bottom" ? +f - sk - d : +f + sk + +u,
		anchor: "start",
		length: c,
		shape: t === "bottom" ? Hj : Uj
	});
}
function Dj(e, t, n, { facetAnchor: r = t + (e === "y" ? "-empty" : ""), frameAnchor: i = t, tickSize: a, tickRotate: o = 0, tickPadding: s = Math.max(3, 9 - a) + (Math.abs(o) > 60 ? 4 * Math.cos(o * Yk) : 0), text: c, textAnchor: l = Math.abs(o) > 60 ? "middle" : t === "left" ? "end" : "start", lineAnchor: u = o > 60 ? "top" : o < -60 ? "bottom" : "middle", fontVariant: d, inset: f = 0, insetLeft: p = f, insetRight: m = f, dx: h = 0, ariaLabel: g, y: _ = e === "y" ? void 0 : null, ...v }) {
	return Lj(NA, e, n, { ariaLabel: `${g} tick label` }, {
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
		d === void 0 && (this.fontVariant = Kj(e)), c === void 0 && (a.text = zj(e, n, r, i, t));
	});
}
function Oj(e, t, n, { facetAnchor: r = t + (e === "x" ? "-empty" : ""), frameAnchor: i = t, tickSize: a, tickRotate: o = 0, tickPadding: s = Math.max(3, 9 - a) + (Math.abs(o) >= 10 ? 4 * Math.cos(o * Yk) : 0), text: c, textAnchor: l = Math.abs(o) >= 10 ? o < 0 ^ t === "bottom" ? "start" : "end" : "middle", lineAnchor: u = Math.abs(o) >= 10 ? "middle" : t === "bottom" ? "top" : "bottom", fontVariant: d, inset: f = 0, insetTop: p = f, insetBottom: m = f, dy: h = 0, x: g = e === "x" ? void 0 : null, ariaLabel: _, ...v }) {
	return Lj(MA, e, n, { ariaLabel: `${_} tick label` }, {
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
		d === void 0 && (this.fontVariant = Kj(e)), c === void 0 && (a.text = zj(e, n, r, i, t));
	});
}
function kj() {
	let [e, t] = pj(...arguments);
	return Nj("y", hj(t), e, t);
}
function Aj() {
	let [e, t] = pj(...arguments);
	return Nj("fy", gj(t), e, t);
}
function jj() {
	let [e, t] = pj(...arguments);
	return Pj("x", _j(t), e, t);
}
function Mj() {
	let [e, t] = pj(...arguments);
	return Pj("fx", vj(t), e, t);
}
function Nj(e, t, n, { y: r = e === "y" ? void 0 : null, x: i = null, x1: a = t === "left" ? i : null, x2: o = t === "right" ? i : null, ariaLabel: s = `${e}-grid`, ariaHidden: c = !0, ...l }) {
	return Lj(CA, e, n, {
		ariaLabel: s,
		ariaHidden: c
	}, {
		y: r,
		x1: a,
		x2: o,
		...Fj(l)
	});
}
function Pj(e, t, n, { x: r = e === "x" ? void 0 : null, y: i = null, y1: a = t === "top" ? i : null, y2: o = t === "bottom" ? i : null, ariaLabel: s = `${e}-grid`, ariaHidden: c = !0, ...l }) {
	return Lj(SA, e, n, {
		ariaLabel: s,
		ariaHidden: c
	}, {
		x: r,
		y1: a,
		y2: o,
		...Fj(l)
	});
}
function Fj({ color: e = "currentColor", opacity: t = .1, stroke: n = e, strokeOpacity: r = t, strokeWidth: i = 1, ...a }) {
	return {
		stroke: n,
		strokeOpacity: r,
		strokeWidth: i,
		...a
	};
}
function Ij({ fill: e, fillOpacity: t, fontFamily: n, fontSize: r, fontStyle: i, fontVariant: a, fontWeight: o, monospace: s, pointerEvents: c, shapeRendering: l, clip: u = !1 }, d) {
	return [, e] = ww(e), [, t] = Tw(t), {
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
function Lj(e, t, n, r, i, a) {
	let o;
	function s(e, n, r, s, c, l) {
		let u = e == null && (t === "fx" || t === "fy"), { [t]: d } = s;
		if (!d) throw Error(`missing scale: ${t}`);
		let f = d.domain(), { interval: p, ticks: m, tickFormat: h, tickSpacing: g = t === "x" ? 80 : 35 } = i;
		if (typeof m == "string" && Yj(d) && (p = m, m = void 0), m === void 0 && (m = nT(p, d.type) ?? Rj(d, g)), e == null) {
			if (sT(m)) e = kw(m);
			else if (iT(m)) e = Vj(m, ...ln(f));
			else if (d.interval) {
				let t = d.interval;
				if (d.ticks) {
					let [n, r] = ln(f), i = (r - n) / t[NC];
					t = HC(t, i / m) ?? t, e = Vj(t, n, r);
				} else {
					e = f;
					let n = e.length;
					t = HC(t, n / m) ?? t, t !== d.interval && (e = Vj(t, ...ln(e)));
				}
				if (t === d.interval) {
					let t = Math.round(e.length / m);
					t > 1 && (e = e.filter((e, n) => n % t === 0));
				}
			} else e = d.ticks ? d.ticks(m) : f;
			if (!d.ticks && e.length && e !== f) {
				let n = new fn(f);
				e = e.filter((e) => n.has(e)), e.length || hD(`Warning: the ${t}-axis ticks appear to not align with the scale domain, resulting in no ticks. Try different ticks?`);
			}
			t === "y" || t === "x" ? n = [Ww(e)] : o[t] = {
				scale: t,
				value: dw
			};
		}
		a?.call(this, d, e, m, h, o);
		let _ = Object.fromEntries(Object.entries(o).map(([t, n]) => [t, {
			...n,
			value: nw(e, n.value)
		}]));
		return u && (n = l.filterFacets(e, _)), {
			data: e,
			facets: n,
			channels: _
		};
	}
	let c = KT(i).initializer, l = e(n, KT({
		...i,
		initializer: s
	}, c));
	return n == null ? (o = l.channels, l.channels = {}) : o = {}, r !== void 0 && Object.assign(l, r), l.clip === void 0 && (l.clip = !1), l;
}
function Rj(e, t) {
	let [n, r] = ln(e.range());
	return (r - n) / t;
}
function zj(e, t, n, r, i) {
	return { value: Bj(e, t, n, r, i) };
}
function Bj(e, t, n, r, i) {
	return typeof r == "function" && !(e.type === "log" && e.tickFormat) ? r : r === void 0 && t && uT(t) ? KC(e.type, t, i) ?? ok : e.tickFormat ? e.tickFormat(typeof n == "number" ? n : null, r) : typeof r == "string" && e.domain().length > 0 ? (uT(e.domain()) ? Di : Ol)(r) : r === void 0 ? ok : vw(r);
}
function Vj(e, t, n) {
	return e.range(t, e.offset(e.floor(n)));
}
var Hj = { draw(e, t) {
	e.moveTo(0, 0), e.lineTo(0, t);
} }, Uj = { draw(e, t) {
	e.moveTo(0, 0), e.lineTo(0, -t);
} }, Wj = { draw(e, t) {
	e.moveTo(0, 0), e.lineTo(-t, 0);
} }, Gj = { draw(e, t) {
	e.moveTo(0, 0), e.lineTo(t, 0);
} };
function Kj(e) {
	return e.bandwidth && !e.interval ? void 0 : "tabular-nums";
}
function qj(e, t, { anchor: n, label: r = t.label, labelAnchor: i, labelArrow: a } = {}) {
	if (!(r == null || r.inferred && Yj(t) && /^(date|time|year)$/i.test(r))) {
		if (r = String(r), a === "auto" && (a = (!t.bandwidth || t.interval) && !/[↑↓→←]/.test(r)), !a) return r;
		if (a === !0) {
			let n = WD(t);
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
function Jj(e = "auto") {
	return vT(e) ? !1 : typeof e == "boolean" ? e : Dw(e, "labelArrow", [
		"auto",
		"up",
		"right",
		"down",
		"left"
	]);
}
function Yj(e) {
	return uT(e.domain());
}
//#endregion
//#region node_modules/@observablehq/plot/src/legends/swatches.js
function Xj(e, t) {
	if (t == null) return t;
	let n = e(t);
	if (!n) throw Error(`scale not found: ${t}`);
	return n;
}
function Zj(e, { opacity: t, ...n } = {}) {
	if (!iO(e) && !aO(e)) throw Error(`swatches legend requires ordinal or threshold color scale (not ${e.type})`);
	return $j(e, n, (e, n, r, i) => e.append("svg").attr("width", r).attr("height", i).attr("fill", n.scale).attr("fill-opacity", Tw(t)[1]).append("rect").attr("width", "100%").attr("height", "100%"));
}
function Qj(e, { fill: t = e.hint?.fill === void 0 ? "none" : e.hint.fill, fillOpacity: n = 1, stroke: r = e.hint?.stroke === void 0 ? vT(t) ? "currentColor" : "none" : e.hint.stroke, strokeOpacity: i = 1, strokeWidth: a = 1.5, r: o = 4.5, ...s } = {}, c) {
	let [l, d] = ww(t), [f, p] = ww(r), m = Xj(c, l), h = Xj(c, f), g = o * o * Math.PI;
	return n = Tw(n)[1], i = Tw(i)[1], a = Tw(a)[1], $j(e, s, (t, r, o, s) => t.append("svg").attr("viewBox", "-8 -8 16 16").attr("width", o).attr("height", s).attr("fill", l === "color" ? (e) => m.scale(e) : d).attr("fill-opacity", n).attr("stroke", f === "color" ? (e) => h.scale(e) : p).attr("stroke-opacity", i).attr("stroke-width", a).append("path").attr("d", (t) => {
		let n = u();
		return e.scale(t).draw(n, g), n;
	}));
}
function $j(e, t = {}, n) {
	let { columns: r, tickFormat: i, fontVariant: a = qk(e), swatchSize: o = 15, swatchWidth: s = o, swatchHeight: c = o, marginLeft: l = 0, className: u, style: d, width: f } = t, p = XO(t);
	u = Ok(u), i = Bj(e.scale, e.domain, void 0, i);
	let m = ZO("div", p).attr("class", `${u}-swatches ${u}-swatches-${r == null ? "wrap" : "columns"}`), h;
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
${h}`)).style("margin-left", l ? `${+l}px` : null).style("width", f === void 0 ? null : `${+f}px`).style("font-variant", Tk(a, "normal")).call(kk, d).node();
}
//#endregion
//#region node_modules/@observablehq/plot/src/legends.js
var eM = /* @__PURE__ */ new Map([
	["symbol", Qj],
	["color", rM],
	["opacity", iM]
]);
function tM(e, t, n = {}) {
	return (r, i) => {
		if (!eM.has(r)) throw Error(`unknown legend type: ${r}`);
		if (r in e) return eM.get(r)(e[r], nM(t, n[r], i), (t) => e[t]);
	};
}
function nM({ className: e, ...t }, { label: n, ticks: r, tickFormat: i } = {}, a) {
	return CT(a, {
		className: e,
		...t
	}, {
		label: n,
		ticks: r,
		tickFormat: i
	});
}
function rM(e, { legend: t = !0, ...n }) {
	if (t === !0 && (t = e.type === "ordinal" ? "swatches" : "ramp"), e.domain !== void 0) switch (`${t}`.toLowerCase()) {
		case "swatches": return Zj(e, n);
		case "ramp": return Jk(e, n);
		default: throw Error(`unknown legend type: ${t}`);
	}
}
function iM({ type: e, interpolate: t, ...n }, { legend: r = !0, color: i = ps(0, 0, 0), ...a }) {
	if (!t) throw Error(`${e} opacity scales are not supported`);
	if (r === !0 && (r = "ramp"), `${r}`.toLowerCase() !== "ramp") throw Error(`${r} opacity legends are not supported`);
	return rM({
		type: e,
		...n,
		interpolate: aM(i)
	}, {
		legend: r,
		...a
	});
}
function aM(e) {
	let { r: t, g: n, b: r } = ps(e) || ps(0, 0, 0);
	return (e) => `rgba(${t},${n},${r},${e})`;
}
function oM(e, t, n) {
	let r = [];
	for (let [i, a] of eM) {
		let o = n[i];
		if (o?.legend && i in e) {
			let n = a(e[i], nM(t, e[i], o), (t) => e[t]);
			n != null && r.push(n);
		}
	}
	return r;
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/identity.js
function sM(e = {}, t = "y") {
	return Pw(e) ? e : {
		...e,
		[t]: dw
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/exclusiveFacets.js
function cM(e, t) {
	if (t.length === 1) return {
		data: e,
		facets: t
	};
	let n = Uw(e), r = new Uint8Array(n), i = 0;
	for (let e of t) for (let t of e) r[t] && ++i, r[t] = 1;
	if (i === 0) return {
		data: e,
		facets: t
	};
	e = Mw(e);
	let a = e[tw] = new Uint32Array(n + i);
	t = t.map((e) => Mw(e, Uint32Array));
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
function lM(e = {}, t = {}) {
	arguments.length === 1 && ([e, t] = dM(e));
	let { x1: n, x: r = n, y: i, ...a } = t, [o, s, c, l] = pM(r, i, "x", "y", e, a);
	return {
		...o,
		x1: n,
		x: s,
		y1: c,
		y2: l,
		y: Zw(c, l)
	};
}
function uM({ y: e, y1: t, y2: n, ...r } = {}) {
	return r = Ik(r, "x"), t === void 0 && n === void 0 ? lM({
		y: e,
		...r
	}) : ([t, n] = Bw(e, t, n), {
		...r,
		y1: t,
		y2: n
	});
}
function dM(e) {
	let { offset: t, order: n, reverse: r, ...i } = e;
	return [{
		offset: t,
		order: n,
		reverse: r
	}, i];
}
var fM = { length: !0 };
function pM(e, t = fw, n, r, { offset: i, order: a, reverse: o }, s) {
	if (t === null) throw Error(`stack requires ${r}`);
	let c = Hw(s), [l, u] = Yw(e), [d, f] = Jw(t), [p, m] = Jw(t);
	return d.hint = p.hint = fM, i = mM(i), a = xM(a, i, r), [
		GT(s, (r, s, l) => {
			({data: r, facets: s} = cM(r, s));
			let d = e == null ? void 0 : u(Qw(nw(r, e), l?.[n])), p = nw(r, t, Float64Array), h = nw(r, c), g = a && a(r, d, p, h), _ = Uw(r), v = f(new Float64Array(_)), y = m(new Float64Array(_)), b = [];
			for (let e of s) {
				let t = d ? Array.from(vn(e, (e) => d[e]).values()) : [e];
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
function mM(e) {
	if (e != null) {
		if (typeof e == "function") return e;
		switch (`${e}`.toLowerCase()) {
			case "expand":
			case "normalize": return gM;
			case "center":
			case "silhouette": return _M;
			case "wiggle": return vM;
		}
		throw Error(`unknown offset: ${e}`);
	}
}
function hM(e, t) {
	let n = 0, r = 0;
	for (let i of e) {
		let e = t[i];
		e < n && (n = e), e > r && (r = e);
	}
	return [n, r];
}
function gM(e, t, n) {
	for (let r of e) for (let e of r) {
		let [r, i] = hM(e, n);
		for (let a of e) {
			let e = 1 / (i - r || 1);
			t[a] = e * (t[a] - r), n[a] = e * (n[a] - r);
		}
	}
}
function _M(e, t, n) {
	for (let r of e) {
		for (let e of r) {
			let [r, i] = hM(e, n);
			for (let a of e) {
				let e = (i + r) / 2;
				t[a] -= e, n[a] -= e;
			}
		}
		yM(r, t, n);
	}
	bM(e, t, n);
}
function vM(e, t, n, r) {
	for (let i of e) {
		let e = new dn(), a = 0;
		for (let o of i) {
			let i = -1, s = o.map((e) => Math.abs(n[e] - t[e])), c = o.map((a) => {
				i = r ? r[a] : ++i;
				let o = n[a] - t[a], s = e.has(i) ? o - e.get(i) : 0;
				return e.set(i, o), s;
			}), l = [0, ...on(c)];
			for (let e of o) t[e] += a, n[e] += a;
			let u = Zn(s);
			u && (a -= Zn(s, (e, t) => (c[t] / 2 + l[t]) * e) / u);
		}
		yM(i, t, n);
	}
	bM(e, t, n);
}
function yM(e, t, n) {
	let r = In(e, (e) => In(e, (e) => t[e]));
	for (let i of e) for (let e of i) t[e] -= r, n[e] -= r;
}
function bM(e, t, n) {
	let r = e.length;
	if (r === 1) return;
	let i = e.map((e) => e.flat()), a = i.map((e) => (In(e, (e) => t[e]) + Pn(e, (e) => n[e])) / 2), o = In(a);
	for (let e = 0; e < r; e++) {
		let r = o - a[e];
		for (let a of i[e]) t[a] += r, n[a] += r;
	}
}
function xM(e, t, n) {
	if (e === void 0 && t === vM) return EM(uC);
	if (e != null) {
		if (typeof e == "string") {
			let t = e.startsWith("-"), r = t ? dC : uC;
			switch ((t ? e.slice(1) : e).toLowerCase()) {
				case "value":
				case n: return SM(r);
				case "z": return CM(r);
				case "sum": return wM(r);
				case "appearance": return TM(r);
				case "inside-out": return EM(r);
			}
			return DM(lw(e));
		}
		if (typeof e == "function") return (e.length === 1 ? DM : OM)(e);
		if (XC(e)) return kM(e);
		throw Error(`invalid order: ${e}`);
	}
}
function SM(e) {
	return (t, n, r) => (t, n) => e(r[t], r[n]);
}
function CM(e) {
	return (t, n, r, i) => (t, n) => e(i[t], i[n]);
}
function wM(e) {
	return AM(e, (e, t, n, r) => En(Ww(e), (e) => Zn(e, (e) => n[e]), (e) => r[e]));
}
function TM(e) {
	return AM(e, (e, t, n, r) => En(Ww(e), (e) => t[Bn(e, (e) => n[e])], (e) => r[e]));
}
function EM(e) {
	return AM(e, (e, t, n, r) => {
		let i = Ww(e), a = En(i, (e) => t[Bn(e, (e) => n[e])], (e) => r[e]), o = yn(i, (e) => Zn(e, (e) => n[e]), (e) => r[e]), s = [], c = [], l = 0;
		for (let e of a) l < 0 ? (l += o.get(e), s.push(e)) : (l -= o.get(e), c.push(e));
		return c.reverse().concat(s);
	});
}
function DM(e) {
	return (t) => {
		let n = nw(t, e);
		return (e, t) => uC(n[e], n[t]);
	};
}
function OM(e) {
	return (t) => XC(t) ? (n, r) => e(t[n], t[r]) : (n, r) => e(t.get(n), t.get(r));
}
function kM(e) {
	return AM(uC, () => e);
}
function AM(e, t) {
	return (n, r, i, a) => {
		if (!a) throw Error("missing channel: z");
		let o = new dn(t(n, r, i, a).map((e, t) => [e, t]));
		return (t, n) => e(o.get(a[t]), o.get(a[n]));
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/rect.js
function jM(e, { inset: t = 0, insetTop: n = t, insetRight: r = t, insetBottom: i = t, insetLeft: a = t } = {}) {
	e.insetTop = hw(n), e.insetRight = hw(r), e.insetBottom = hw(i), e.insetLeft = hw(a);
}
function MM(e, { r: t, rx: n, ry: r, rx1: i = t, ry1: a = t, rx2: o = t, ry2: s = t, rx1y1: c = i === void 0 ? a === void 0 ? 0 : +a : +i, rx1y2: l = i === void 0 ? s === void 0 ? 0 : +s : +i, rx2y1: u = o === void 0 ? a === void 0 ? 0 : +a : +o, rx2y2: d = o === void 0 ? s === void 0 ? 0 : +s : +o } = {}) {
	c || l || u || d ? (e.rx1y1 = c, e.rx1y2 = l, e.rx2y1 = u, e.rx2y2 = d) : (e.rx = Tk(n, "auto"), e.ry = Tk(r, "auto"));
}
function NM(e, t, n, r, i, a) {
	let { rx1y1: o, rx1y2: s, rx2y1: c, rx2y2: l } = a;
	typeof t != "function" && (t = vw(t)), typeof n != "function" && (n = vw(n)), typeof r != "function" && (r = vw(r)), typeof i != "function" && (i = vw(i));
	let u = Math.max(Math.abs(o + c), Math.abs(s + l)), d = Math.max(Math.abs(o + s), Math.abs(c + l));
	e.attr("d", (e) => {
		let a = t(e), f = n(e), p = r(e), m = i(e), h = a > p, g = f > m, _ = h ? p : a, v = h ? a : p, y = g ? m : f, b = g ? f : m, x = Math.min(1, (v - _) / u, (b - y) / d), S = x * (h ? g ? l : c : g ? s : o), C = x * (h ? g ? s : o : g ? l : c), w = x * (h ? g ? o : s : g ? c : l), T = x * (h ? g ? c : l : g ? o : s);
		return `M${_},${y + FM(S, T)}A${S},${S} 0 0 ${S < 0 ? 0 : 1} ${_ + PM(S, T)},${y}H${v - PM(C, w)}A${C},${C} 0 0 ${C < 0 ? 0 : 1} ${v},${y + FM(C, w)}V${b - FM(w, C)}A${w},${w} 0 0 ${w < 0 ? 0 : 1} ${v - PM(w, C)},${b}H${_ + PM(T, S)}A${T},${T} 0 0 ${T < 0 ? 0 : 1} ${_},${b - FM(T, S)}Z`;
	});
}
function PM(e, t) {
	return t < 0 ? e : Math.abs(e);
}
function FM(e, t) {
	return t < 0 ? Math.abs(e) : e;
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/frame.js
var IM = {
	ariaLabel: "frame",
	fill: "none",
	stroke: "currentColor",
	clip: !1
}, LM = {
	ariaLabel: "frame",
	fill: null,
	stroke: "currentColor",
	strokeLinecap: "square",
	clip: !1
}, RM = class extends jk {
	constructor(e = {}) {
		let { anchor: t = null } = e;
		super(cw, void 0, e, t == null ? IM : LM), this.anchor = Ew(t, "anchor", [
			"top",
			"right",
			"bottom",
			"left"
		]), jM(this, e), t || MM(this, e);
	}
	render(e, t, n, r, i) {
		let { marginTop: a, marginRight: o, marginBottom: s, marginLeft: c, width: l, height: u } = r, { anchor: d, insetTop: f, insetRight: p, insetBottom: m, insetLeft: h } = this, { rx: g, ry: _, rx1y1: v, rx1y2: y, rx2y1: b, rx2y2: x } = this, S = c + h, C = l - o - p, w = a + f, T = u - s - m;
		return ZO(d ? "svg:line" : v || y || b || x ? "svg:path" : "svg:rect", i).datum(0).call(bk, this, r, i).call(xk, this).call(pk, this, n).call(wk, this, {}).call(d === "left" ? (e) => e.attr("x1", S).attr("x2", S).attr("y1", w).attr("y2", T) : d === "right" ? (e) => e.attr("x1", C).attr("x2", C).attr("y1", w).attr("y2", T) : d === "top" ? (e) => e.attr("x1", S).attr("x2", C).attr("y1", w).attr("y2", w) : d === "bottom" ? (e) => e.attr("x1", S).attr("x2", C).attr("y1", T).attr("y2", T) : v || y || b || x ? (e) => e.call(NM, S, w, C, T, this) : (e) => e.attr("x", S).attr("y", w).attr("width", C - S).attr("height", T - w).attr("rx", g).attr("ry", _)).node();
	}
};
function zM(e) {
	return new RM(e);
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/tip.js
var BM = {
	ariaLabel: "tip",
	fill: "var(--plot-background)",
	stroke: "currentColor"
}, VM = /* @__PURE__ */ new Set([
	"geometry",
	"href",
	"src",
	"ariaLabel",
	"scales"
]), HM = class extends jk {
	constructor(e, t = {}) {
		t.tip && (t = {
			...t,
			tip: !1
		}), t.title === void 0 && sT(e) && cT(e) && (t = {
			...t,
			title: dw
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
		}, t, BM), this.anchor = xT(c, "anchor"), this.preferredAnchor = xT(l, "preferredAnchor"), this.frameAnchor = ST(v), this.textAnchor = Tk(b, "middle"), this.textPadding = +S, this.pointerSize = +w, this.pathFilter = mw(T), this.lineHeight = +g, this.lineWidth = +_, this.textOverflow = kA(x), this.monospace = !!u, this.fontFamily = mw(d), this.fontSize = hw(f), this.fontStyle = mw(p), this.fontVariant = mw(m), this.fontWeight = mw(h);
		for (let e in BM) e in this.channels && (this[e] = BM[e]);
		this.splitLines = UA(this), this.clipLine = WA(this), this.format = typeof y == "string" || typeof y == "function" ? { title: y } : { ...y };
	}
	render(e, t, n, r, i) {
		let o = this, { x: s, y: c, fx: l, fy: u } = t, { ownerSVGElement: d, document: f } = i, { anchor: p, monospace: m, lineHeight: h, lineWidth: g } = this, { textPadding: _, pointerSize: v, pathFilter: y } = this, { marginTop: b, marginLeft: x } = r, { x1: S, y1: C, x2: w, y2: T, x: E = S ?? w, y: D = C ?? T } = n, O = l ? l(e.fx) - x : 0, k = u ? u(e.fy) - b : 0, [A, j] = Ak(this, r), M = Gk(n, A), N = Kk(n, j), P = m ? HA : VA, ee = P("…"), F, te;
		"title" in n ? (F = qM.call(this, { title: n.channels.title }, t), te = YM) : (F = qM.call(this, n.channels, t), te = XM);
		let ne = ZO("svg:g", i).call(bk, this, r, i).call(PA, this).call(wk, this, {
			x: E && s,
			y: D && c
		}).call((r) => r.selectAll().data(e).enter().append("g").attr("transform", (e) => `translate(${Math.round(M(e))},${Math.round(N(e))})`).call(xk, this).call((e) => e.append("path").attr("filter", y)).call((r) => r.append("text").each(function(r) {
			let i = a(this);
			this.setAttribute("fill", "currentColor"), this.setAttribute("fill-opacity", 1), this.setAttribute("stroke", "none");
			let s = te.call(o, r, e, F, t, n);
			if (typeof s == "string") for (let e of o.splitLines(s)) re(i, { value: o.clipLine(e) });
			else {
				let e = /* @__PURE__ */ new Set();
				for (let t of s) {
					let { label: n = "" } = t;
					n && e.has(n) || (e.add(n), re(i, t));
				}
			}
		})));
		function re(e, { label: t, value: n, color: r, opacity: i }) {
			t ??= "", n ??= "";
			let a = r != null || i != null, o, s = g * 100, [c] = GA(t, s, P, ee);
			if (c >= 0) t = t.slice(0, c).trimEnd() + "…", o = n.trim(), n = "";
			else {
				(t || !n && !a) && (n = " " + n);
				let [e] = GA(n, s - P(t), P, ee);
				e >= 0 && (o = n.trim(), n = n.slice(0, e).trimEnd() + "…");
			}
			let l = e.append("tspan").attr("x", 0).attr("dy", `${h}em`).text("​");
			t && l.append("tspan").attr("font-weight", "bold").text(t), n && l.append(() => f.createTextNode(n)), a && l.append("tspan").text(" ■").attr("fill", r).attr("fill-opacity", i).style("user-select", "none"), o && l.append("title").text(o);
		}
		function ie() {
			let { width: e, height: t } = r.facet ?? r;
			ne.selectChildren().each(function(n) {
				let { x: r, width: i, height: a } = this.getBBox();
				i = Math.round(i), a = Math.round(a);
				let s = p;
				if (s === void 0) {
					let r = M(n) + O, c = N(n) + k, l = r + i + v + _ * 2 < e, u = r - i - v - _ * 2 > 0, d = c + a + v + _ * 2 < t, f = c - a - v - _ * 2 > 0;
					s = l && u ? d && f ? o.preferredAnchor : f ? "bottom" : "top" : d && f ? l ? "left" : "right" : (l || u) && (d || f) ? `${f ? "bottom" : "top"}-${l ? "left" : "right"}` : o.preferredAnchor;
				}
				let c = this.firstChild, l = this.lastChild;
				if (c.setAttribute("d", KM(s, v, _, i, a)), r) for (let e of l.childNodes) e.setAttribute("x", -r);
				l.setAttribute("y", `${+WM(s, l.childNodes.length, h).toFixed(6)}em`), l.setAttribute("transform", `translate(${GM(s, v, _, i, a)})`);
			}), ne.attr("visibility", null);
		}
		return e.length && (ne.attr("visibility", "hidden"), d.isConnected ? Promise.resolve().then(ie) : typeof requestAnimationFrame < "u" && requestAnimationFrame(ie)), ne.node();
	}
};
function UM(e, { x: t, y: n, ...r } = {}) {
	return r.frameAnchor === void 0 && ([t, n] = Vw(t, n)), new HM(e, {
		...r,
		x: t,
		y: n
	});
}
function WM(e, t, n) {
	return /^top(?:-|$)/.test(e) ? .94 - n : -.29 - t * n;
}
function GM(e, t, n, r, i) {
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
function KM(e, t, n, r, i) {
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
function qM(e, t) {
	let n = {}, r = this.format;
	r = JM(r, e, "x"), r = JM(r, e, "y"), this.format = r;
	for (let t in r) {
		let i = r[t];
		if (i !== null && i !== !1) if (t === "fx" || t === "fy") n[t] = !0;
		else {
			let r = TE(e, t);
			r && (n[t] = r);
		}
	}
	for (let t in e) {
		if (t in n || t in r || VM.has(t) || (t === "x" || t === "y") && e.geometry) continue;
		let i = TE(e, t);
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
			this.format[e] = (uT(i) ? Di : Ol)(r);
		} else if (r === void 0 || r === !0) {
			let n = t[e];
			this.format[e] = n?.bandwidth ? Bj(n, n.domain()) : ok;
		}
	}
	return n;
}
function JM(e, t, n) {
	if (!(n in e)) return e;
	let r = `${n}1`, i = `${n}2`;
	if ((r in e || !(r in t)) && (i in e || !(i in t))) return e;
	let a = Object.entries(e), o = e[n];
	return a.splice(a.findIndex(([e]) => e === n) + 1, 0, [r, o], [i, o]), Object.fromEntries(a);
}
function YM(e, t, { title: n }) {
	return this.format.title(n.value[e], e);
}
function* XM(e, t, n, r, i) {
	for (let a in n) {
		if (a === "fx" || a === "fy") {
			yield {
				label: $M(r, n, a),
				value: this.format[a](t[a], e)
			};
			continue;
		}
		if (a === "x1" && "x2" in n || a === "y1" && "y2" in n) continue;
		let o = n[a];
		if (a === "x2" && "x1" in n) yield {
			label: QM(r, n, "x"),
			value: ZM(this.format.x2, n.x1, o, e)
		};
		else if (a === "y2" && "y1" in n) yield {
			label: QM(r, n, "y"),
			value: ZM(this.format.y2, n.y1, o, e)
		};
		else {
			let t = o.value[e], s = o.scale;
			if (!lC(t) && s == null) continue;
			yield {
				label: $M(r, n, a),
				value: this.format[a](t, e),
				color: s === "color" ? i[a][e] : null,
				opacity: s === "opacity" ? i[a][e] : null
			};
		}
	}
}
function ZM(e, t, n, r) {
	return n.hint?.length ? `${e(n.value[r] - t.value[r], r)}` : `${e(t.value[r], r)}–${e(n.value[r], r)}`;
}
function QM(e, t, n) {
	let r = $M(e, t, `${n}1`, n), i = $M(e, t, `${n}2`, n);
	return r === i ? r : `${r}–${i}`;
}
function $M(e, t, n, r = n) {
	let i = t[n], a = e[i?.scale ?? n];
	return String(a?.label ?? i?.label ?? r);
}
//#endregion
//#region node_modules/@observablehq/plot/src/plot.js
function eN(e = {}) {
	let { facet: t, style: n, title: i, subtitle: o, caption: s, ariaLabel: c, ariaDescription: l } = e, u = Ok(e.className), d = e.marks === void 0 ? [] : rN(e.marks);
	d.push(...mN(d));
	let f = dN(t, e), p = /* @__PURE__ */ new Map();
	for (let t of d) {
		let n = fN(t, f, e);
		n && p.set(t, n);
	}
	let m = /* @__PURE__ */ new Map();
	f && lN(m, [f], e), lN(m, p, e);
	let h = rN(hN(d, m, e));
	for (let t of h) {
		let n = fN(t, f, e);
		n && p.set(t, n);
	}
	d.unshift(...h);
	let g = fO(m, e);
	if (g !== void 0) {
		let e = f ? PO(g, f) : void 0;
		for (let t of d) {
			if (t.facet === null || t.facet === "super") continue;
			let n = p.get(t);
			n !== void 0 && (n.facetsIndex = t.fx != null || t.fy != null ? PO(g, n) : e);
		}
		let t = /* @__PURE__ */ new Set();
		for (let { facetsIndex: e } of p.values()) e?.forEach((e, n) => {
			e?.length > 0 && t.add(n);
		});
		g.forEach(0 < t.size && t.size < g.length ? (e, n) => e.empty = !t.has(n) : (e) => e.empty = !1);
		for (let e of d) if (e.facet === "exclude") {
			let t = p.get(e);
			t !== void 0 && (t.facetsIndex = gO(t.facetsIndex));
		}
	}
	for (let t of LT.keys()) Lw(e[t]) && t !== "fx" && t !== "fy" && m.set(t, []);
	let _ = /* @__PURE__ */ new Map();
	for (let t of d) {
		if (_.has(t)) throw Error("duplicate mark; each mark must be unique");
		let { facetsIndex: n, channels: r } = p.get(t) ?? {}, { data: i, facets: a, channels: o } = t.initialize(n, r, e);
		oN(o, e), _.set(t, {
			data: i,
			facets: a,
			channels: o
		});
	}
	let v = BD(lN(m, _, e), e), y = Lk(v, d, e);
	HD(v, y);
	let b = VD(v), { fx: x, fy: S } = b, C = x || S ? KD(v, y) : y, w = x || S ? EN(b, y) : y, T = XO(e), E = T.document, D = r("svg").call(E.documentElement), O = D;
	T.ownerSVGElement = D, T.className = u, T.projection = RO(e, C), T.path = function() {
		return jb(this.projection ?? YO(b));
	}, T.filterFacets = (e, t) => PO(g, {
		channels: t,
		groups: mO(e, t)
	}), T.getMarkState = (e) => {
		let t = _.get(e), n = p.get(e);
		return {
			...t,
			channels: {
				...t.channels,
				...n?.channels
			}
		};
	}, T.dispatchValue = (e) => {
		O.value !== e && (O.value = e, O.dispatchEvent(new T.document.defaultView.Event("input", { bubbles: !0 })));
	};
	let k = /* @__PURE__ */ new Set();
	for (let [t, n] of _) if (t.initializer != null) {
		let r = t.facet === "super" ? w : C, i = t.initializer(n.data, n.facets, n.channels, b, r, T);
		if (i.data !== void 0 && (n.data = i.data), i.facets !== void 0 && (n.facets = i.facets), i.channels !== void 0) {
			let { fx: r, fy: a, ...o } = i.channels;
			cN(o), Object.assign(n.channels, o);
			for (let t of Object.values(o)) {
				let { scale: n } = t;
				n != null && !RT(LT.get(n)) && (sN(t, e), k.add(n));
			}
			(r != null || a != null) && p.set(t, !0);
		}
	}
	if (k.size) {
		let t = /* @__PURE__ */ new Map();
		lN(t, _, e, (e) => k.has(e)), lN(m, _, e, (e) => k.has(e));
		let n = TN(BD(t, e), v), { scales: r, ...i } = VD(n);
		Object.assign(v, n), Object.assign(b, i), Object.assign(b.scales, r);
	}
	let A, j;
	g !== void 0 && (A = {
		x: x?.domain(),
		y: S?.domain()
	}, g = pO(g, A), j = hO(x, S, y));
	for (let [e, t] of _) t.values = e.scale(t.channels, b, T);
	let { width: M, height: N } = y;
	a(D).attr("class", u).attr("fill", "currentColor").attr("font-family", "system-ui, sans-serif").attr("font-size", 10).attr("text-anchor", "middle").attr("width", M).attr("height", N).attr("viewBox", `0 0 ${M} ${N}`).attr("aria-label", c).attr("aria-description", l).call((e) => e.append("style").text(`:where(.${u}) {
  --plot-background: white;
  display: block;
  height: auto;
  height: intrinsic;
  max-width: 100%;
}
:where(.${u} text),
:where(.${u} tspan) {
  white-space: pre;
}`)).call(kk, n);
	for (let e of d) {
		let { channels: t, values: n, facets: r } = _.get(e);
		if (g === void 0 || e.facet === "super") {
			let i = null;
			if (r && (i = r[0], i = e.filter(i, t, n), i.length === 0)) continue;
			let a = e.render(i, b, n, w, T);
			if (a == null) continue;
			D.appendChild(a);
		} else {
			let i;
			for (let o of g) {
				if (!(e.facetAnchor?.(g, A, o) ?? !o.empty)) continue;
				let s = null;
				if (r) {
					let i = p.has(e);
					if (s = r[i ? o.i : 0], s = e.filter(s, t, n), s.length === 0) continue;
					!i && s === r[0] && (s = Kw(s)), s.fx = o.x, s.fy = o.y, s.fi = o.i;
				}
				let c = e.render(s, b, n, C, T);
				if (c != null) {
					(i ??= a(D).append("g")).append(() => c).datum(o);
					for (let e of [
						"aria-label",
						"aria-description",
						"aria-hidden",
						"transform"
					]) c.hasAttribute(e) && (i.attr(e, c.getAttribute(e)), c.removeAttribute(e));
				}
			}
			i?.selectChildren().each(j);
		}
	}
	let P = oM(v, T, e), { figure: ee = i != null || o != null || s != null || P.length > 0 } = e;
	ee && (O = E.createElement("figure"), O.className = `${u}-figure`, O.style.maxWidth = "initial", i != null && O.append(tN(E, i, "h2")), o != null && O.append(tN(E, o, "h3")), O.append(...P, D), s != null && O.append(nN(E, s)), "value" in D && (O.value = D.value, delete D.value)), O.scale = uO(b.scales), O.legend = tM(v, T, e);
	let F = mD();
	return F > 0 && a(D).append("text").attr("x", M).attr("y", 20).attr("dy", "-1em").attr("text-anchor", "end").attr("font-family", "initial").text("⚠️").append("title").text(`${F.toLocaleString("en-US")} warning${F === 1 ? "" : "s"}. Please check the console.`), O;
}
function tN(e, t, n) {
	if (t.ownerDocument) return t;
	let r = e.createElement(n);
	return r.append(t), r;
}
function nN(e, t) {
	let n = e.createElement("figcaption");
	return n.append(t), n;
}
function rN(e) {
	return e.flat(Infinity).filter((e) => e != null).map(iN);
}
function iN(e) {
	return typeof e.render == "function" ? e : new aN(e);
}
var aN = class extends jk {
	constructor(e) {
		if (typeof e != "function") throw TypeError("invalid mark; missing render function");
		super(), this.render = e;
	}
	render() {}
};
function oN(e, t) {
	for (let n in e) sN(e[n], t);
	return e;
}
function sN(e, t) {
	let { scale: n, transform: r = !0 } = e;
	if (n == null || !r) return;
	let { type: i, percent: a, interval: o, transform: s = a ? (e) => e == null ? NaN : e * 100 : $w(o, i) } = t[n] ?? {};
	s != null && (e.value = jw(e.value, s), e.transform = !1);
}
function cN(e) {
	for (let t in e) gE(t, e[t]);
}
function lN(e, t, n, r = pw) {
	for (let { channels: i } of t.values()) for (let t in i) {
		let a = i[t], { scale: o } = a;
		if (o != null && r(o)) if (o === "projection") {
			if (!KO(n)) {
				let t = n.x?.domain === void 0, r = n.y?.domain === void 0;
				if (t || r) {
					let [n, i] = JO(a);
					t && uN(e, "x", n), r && uN(e, "y", i);
				}
			}
		} else uN(e, o, a);
	}
	return e;
}
function uN(e, t, n) {
	let r = e.get(t);
	r === void 0 ? e.set(t, [n]) : r.push(n);
}
function dN(e, t) {
	if (e == null) return;
	let { x: n, y: r } = e;
	if (n == null && r == null) return;
	let i = Ow(e.data);
	if (i == null) throw Error("missing facet data");
	let a = {};
	return n != null && (a.fx = pE(i, {
		value: n,
		scale: "fx"
	})), r != null && (a.fy = pE(i, {
		value: r,
		scale: "fy"
	})), oN(a, t), {
		channels: a,
		groups: mO(i, a),
		data: e.data
	};
}
function fN(e, t, n) {
	if (e.facet === null || e.facet === "super") return;
	let { fx: r, fy: i } = e;
	if (r != null || i != null) {
		let t = Ow(e.data ?? r ?? i);
		if (t === void 0) throw Error(`missing facet data in ${e.ariaLabel}`);
		if (t === null) return;
		let a = {};
		return r != null && (a.fx = pE(t, {
			value: r,
			scale: "fx"
		})), i != null && (a.fy = pE(t, {
			value: i,
			scale: "fy"
		})), oN(a, n), {
			channels: a,
			groups: mO(t, a)
		};
	}
	if (t === void 0) return;
	let { channels: a, groups: o, data: s } = t;
	if (e.facet !== "auto" || e.data === s) return {
		channels: a,
		groups: o
	};
	s.length > 0 && (o.size > 1 || o.size === 1 && a.fx && a.fy && [...o][0][1].size > 1) && Uw(Ow(e.data)) === Uw(s) && hD(`Warning: the ${e.ariaLabel} mark appears to use faceted data, but isn’t faceted. The mark data has the same length as the facet data and the mark facet option is "auto", but the mark data and facet data are distinct. If this mark should be faceted, set the mark facet option to true; otherwise, suppress this warning by setting the mark facet option to false.`);
}
function pN(e, t = {}) {
	return KT({
		...t,
		x: null,
		y: null
	}, (t, n, r, i, a, o) => o.getMarkState(e));
}
function mN(e) {
	let t = [];
	for (let n of e) {
		let e = n.tip;
		if (e) {
			e === !0 ? e = {} : typeof e == "string" && (e = { pointer: e });
			let { pointer: r, preferredAnchor: i } = e;
			r = /^x$/i.test(r) ? Uk : /^y$/i.test(r) ? Wk : Hk, e = r(pN(n, e)), e.title = null, i === void 0 && (e.preferredAnchor = r === Wk ? "left" : "bottom");
			let a = UM(n.data, e);
			a.facet = n.facet, a.facetAnchor = n.facetAnchor, t.push(a);
		}
	}
	return t;
}
function hN(e, t, n) {
	let { projection: r, x: i = {}, y: a = {}, fx: o = {}, fy: s = {}, axis: c, grid: l, facet: u = {}, facet: { axis: d = c, grid: f } = u, x: { axis: p = c, grid: m = p === null ? null : l } = i, y: { axis: h = c, grid: g = h === null ? null : l } = a, fx: { axis: _ = d, grid: v = _ === null ? null : f } = o, fy: { axis: y = d, grid: b = y === null ? null : f } = s } = n;
	(r || !Lw(i) && !wN("x", e)) && (p = m = null), (r || !Lw(a) && !wN("y", e)) && (h = g = null), t.has("fx") || (_ = v = null), t.has("fy") || (y = b = null), p === void 0 && (p = !CN(e, "x")), h === void 0 && (h = !CN(e, "y")), _ === void 0 && (_ = !CN(e, "fx")), y === void 0 && (y = !CN(e, "fy")), p === !0 && (p = "bottom"), h === !0 && (h = "left"), _ === !0 && (_ = p === "top" || p === null ? "bottom" : "top"), y === !0 && (y = h === "right" || h === null ? "left" : "right");
	let x = [];
	return _N(x, b, Aj, s), gN(x, y, bj, "right", "left", u, s), _N(x, v, Mj, o), gN(x, _, Sj, "top", "bottom", u, o), _N(x, g, kj, a), gN(x, h, yj, "left", "right", n, a), _N(x, m, jj, i), gN(x, p, xj, "bottom", "top", n, i), x;
}
function gN(e, t, n, r, i, a, o) {
	if (!t) return;
	let s = vN(t);
	o = yN(s ? r : t, a, o);
	let { line: c } = o;
	(n === yj || n === xj) && c && !yT(c) && e.push(zM(bN(o))), e.push(n(o)), s && e.push(n({
		...o,
		anchor: i,
		label: null
	}));
}
function _N(e, t, n, r) {
	!t || yT(t) || e.push(n(xN(t, r)));
}
function vN(e) {
	return /^\s*both\s*$/i.test(e);
}
function yN(e, t, { line: n = t.line, ticks: r, tickSize: i, tickSpacing: a, tickPadding: o, tickFormat: s, tickRotate: c, fontVariant: l, ariaLabel: u, ariaDescription: d, label: f = t.label, labelAnchor: p, labelArrow: m = t.labelArrow, labelOffset: h }) {
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
function bN(e) {
	let { anchor: t, line: n } = e;
	return {
		anchor: t,
		facetAnchor: t + "-empty",
		stroke: n === !0 ? void 0 : n
	};
}
function xN(e, { stroke: t = gT(e) ? e : void 0, ticks: n = SN(e) ? e : void 0, tickSpacing: r, ariaLabel: i, ariaDescription: a }) {
	return {
		stroke: t,
		ticks: n,
		tickSpacing: r,
		ariaLabel: i,
		ariaDescription: a
	};
}
function SN(e) {
	switch (typeof e) {
		case "number": return !0;
		case "string": return !gT(e);
	}
	return sT(e) || typeof e?.range == "function";
}
function CN(e, t) {
	let n = `${t}-axis `;
	return e.some((e) => e.ariaLabel?.startsWith(n));
}
function wN(e, t) {
	for (let n of t) for (let t in n.channels) {
		let { scale: r } = n.channels[t];
		if (r === e || r === "projection") return !0;
	}
	return !1;
}
function TN(e, t) {
	for (let n in e) {
		let r = e[n], i = t[n];
		r.label === void 0 && i && (r.label = i.label);
	}
	return e;
}
function EN({ fx: e, fy: t }, n) {
	let { marginTop: r, marginRight: i, marginBottom: a, marginLeft: o, width: s, height: c } = GD(n), l = e && DN(e), u = t && DN(t);
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
function DN(e) {
	let t = e.domain();
	if (t.length === 0) return [0, e.bandwidth()];
	let n = e(t[0]), r = e(t[t.length - 1]);
	return r < n && ([n, r] = [r, n]), [n, r + e.bandwidth()];
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/bar.js
var ON = { ariaLabel: "bar" }, kN = class extends jk {
	constructor(e, t, n = {}, r = ON) {
		super(e, t, n, r), jM(this, n), MM(this, n);
	}
	render(e, t, n, r, i) {
		let { rx: a, ry: o, rx1y1: s, rx1y2: c, rx2y1: l, rx2y2: u } = this, d = this._x(t, n, r), f = this._y(t, n, r), p = this._width(t, n, r), m = this._height(t, n, r);
		return ZO("svg:g", i).call(bk, this, r, i).call(this._transform, this, t).call((t) => t.selectAll().data(e).enter().call(s || c || l || u ? (e) => e.append("path").call(xk, this).call(NM, d, f, AN(d, p), AN(f, m), this).call(pk, this, n) : (e) => e.append("rect").call(xk, this).attr("x", d).attr("width", p).attr("y", f).attr("height", m).call($, "rx", a).call($, "ry", o).call(pk, this, n))).node();
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
function AN(e, t) {
	return typeof e == "function" && typeof t == "function" ? (n) => e(n) + t(n) : typeof e == "function" ? (n) => e(n) + t : typeof t == "function" ? (n) => e + t(n) : e + t;
}
var jN = class extends kN {
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
		e.call(wk, t, { y: n }, 0, 0);
	}
	_y({ y: e }, { y1: t, y2: n }, { marginTop: r }) {
		let { insetTop: i } = this;
		return sO(e) ? r + i : (e) => Math.min(t[e], n[e]) + i;
	}
	_height({ y: e }, { y1: t, y2: n }, { marginTop: r, marginBottom: i, height: a }) {
		let { insetTop: o, insetBottom: s } = this;
		return sO(e) ? a - r - i - o - s : (e) => Math.max(0, Math.abs(n[e] - t[e]) - o - s);
	}
};
function MN(e, t = {}) {
	return Fw(t) || (t = {
		...t,
		x: uw,
		y2: dw
	}), new jN(e, uM(gA(sM(t))));
}
//#endregion
//#region node_modules/@observablehq/plot/src/index.js
jk.prototype.plot = function({ marks: e = [], ...t } = {}) {
	return eN({
		...t,
		marks: [...e, this]
	});
};
//#endregion
//#region src/plotBarChart.ts
var NN = 640, PN = 400;
function FN(e, t) {
	let n = IN(e);
	function r() {
		t.replaceChildren();
		let e = t.clientWidth || NN, r = eN({
			fx: { label: null },
			height: t.clientHeight || PN,
			marks: [MN(n, {
				fx: "category",
				tip: !0,
				x: "seriesName",
				y: "value",
				fill: "seriesName"
			}), CA([0])],
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
function IN(e) {
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
function LN(e, t) {
	return e.sourceLinks.length ? e.depth : t - 1;
}
//#endregion
//#region node_modules/d3-sankey/src/constant.js
function RN(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-sankey/src/sankey.js
function zN(e, t) {
	return VN(e.source, t.source) || e.index - t.index;
}
function BN(e, t) {
	return VN(e.target, t.target) || e.index - t.index;
}
function VN(e, t) {
	return e.y0 - t.y0;
}
function HN(e) {
	return e.value;
}
function UN(e) {
	return e.index;
}
function WN(e) {
	return e.nodes;
}
function GN(e) {
	return e.links;
}
function KN(e, t) {
	let n = e.get(t);
	if (!n) throw Error("missing: " + t);
	return n;
}
function qN({ nodes: e }) {
	for (let t of e) {
		let e = t.y0, n = e;
		for (let n of t.sourceLinks) n.y0 = e + n.width / 2, e += n.width;
		for (let e of t.targetLinks) e.y1 = n + e.width / 2, n += e.width;
	}
}
function JN() {
	let e = 0, t = 0, n = 1, r = 1, i = 24, a = 8, o, s = UN, c = LN, l, u, d = WN, f = GN, p = 6;
	function m() {
		let e = {
			nodes: d.apply(null, arguments),
			links: f.apply(null, arguments)
		};
		return h(e), g(e), _(e), v(e), x(e), qN(e), e;
	}
	m.update = function(e) {
		return qN(e), e;
	}, m.nodeId = function(e) {
		return arguments.length ? (s = typeof e == "function" ? e : RN(e), m) : s;
	}, m.nodeAlign = function(e) {
		return arguments.length ? (c = typeof e == "function" ? e : RN(e), m) : c;
	}, m.nodeSort = function(e) {
		return arguments.length ? (l = e, m) : l;
	}, m.nodeWidth = function(e) {
		return arguments.length ? (i = +e, m) : i;
	}, m.nodePadding = function(e) {
		return arguments.length ? (a = o = +e, m) : a;
	}, m.nodes = function(e) {
		return arguments.length ? (d = typeof e == "function" ? e : RN(e), m) : d;
	}, m.links = function(e) {
		return arguments.length ? (f = typeof e == "function" ? e : RN(e), m) : f;
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
			typeof t != "object" && (t = r.source = KN(n, t)), typeof i != "object" && (i = r.target = KN(n, i)), t.sourceLinks.push(r), i.targetLinks.push(r);
		}
		if (u != null) for (let { sourceLinks: t, targetLinks: n } of e) t.sort(u), n.sort(u);
	}
	function g({ nodes: e }) {
		for (let t of e) t.value = t.fixedValue === void 0 ? Math.max(Zn(t.sourceLinks, HN), Zn(t.targetLinks, HN)) : t.fixedValue;
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
		let r = Pn(t, (e) => e.depth) + 1, a = (n - e - i) / (r - 1), o = Array(r);
		for (let n of t) {
			let t = Math.max(0, Math.min(r - 1, Math.floor(c.call(null, n, r))));
			n.layer = t, n.x0 = e + t * a, n.x1 = n.x0 + i, o[t] ? o[t].push(n) : o[t] = [n];
		}
		if (l) for (let e of o) e.sort(l);
		return o;
	}
	function b(e) {
		let n = In(e, (e) => (r - t - (e.length - 1) * o) / Zn(e, HN));
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
		o = Math.min(a, (r - t) / (Pn(n, (e) => e.length) - 1)), b(n);
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
			l === void 0 && i.sort(VN), w(i, n);
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
			l === void 0 && i.sort(VN), w(i, n);
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
			for (let { source: { sourceLinks: e } } of t) e.sort(BN);
			for (let { target: { targetLinks: t } } of e) t.sort(zN);
		}
	}
	function O(e) {
		if (u === void 0) for (let { sourceLinks: t, targetLinks: n } of e) t.sort(BN), n.sort(zN);
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
//#region node_modules/d3-sankey/src/sankeyLinkHorizontal.js
function YN(e) {
	return [e.source.x1, e.y0];
}
function XN(e) {
	return [e.target.x0, e.y1];
}
function ZN() {
	return gp().source(YN).target(XN);
}
//#endregion
//#region src/palette.ts
var QN = [
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
], $N = {
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
}, eP = {
	dark: {
		border: "rgba(255,255,255,0.10)",
		chart: "#1a1a19"
	},
	light: {
		border: "rgba(11,11,11,0.10)",
		chart: "#fcfcfb"
	}
};
function tP(e, t) {
	let n = QN[(e % QN.length + QN.length) % QN.length];
	if (n == null) throw Error("Categorical palette is empty.");
	return t === "dark" ? n.dark : n.light;
}
//#endregion
//#region src/sankeyDiagram.ts
var nP = 16, rP = 12, iP = 480, aP = 640, oP = 6;
function sP(e, t, n = {}) {
	let r = n.colorModeId ?? "light", i = $N[r], o = eP[r];
	getComputedStyle(t).position === "static" && (t.style.position = "relative");
	let s = a(t).append("div").attr("role", "tooltip").style("position", "absolute").style("pointer-events", "none").style("z-index", "1").style("opacity", "0").style("transition", "opacity 120ms ease").style("padding", "4px 8px").style("border-radius", "4px").style("font", "12px system-ui, -apple-system, \"Segoe UI\", sans-serif").style("white-space", "nowrap").style("background", o.chart).style("color", i.primary).style("border", `1px solid ${o.border}`).style("box-shadow", "0 2px 8px rgba(0,0,0,0.15)");
	function c(e, n) {
		let r = t.getBoundingClientRect();
		s.html(n).style("left", `${String(e.clientX - r.left + 12)}px`).style("top", `${String(e.clientY - r.top + 12)}px`).style("opacity", "1");
	}
	function l() {
		s.style("opacity", "0");
	}
	function u() {
		a(t).selectAll("svg").remove();
		let o = t.clientWidth || aP, s = t.clientHeight || iP, u = {
			links: e.links.map((e) => ({ ...e })),
			nodes: e.nodes.map((e) => ({ ...e }))
		}, { links: d, nodes: f } = JN().nodeId((e) => e.id).nodeWidth(n.nodeWidth ?? nP).nodePadding(n.nodePadding ?? rP).extent([[1, 1], [o - 1, s - 1]])(u), p = a(t).insert("svg", "div").attr("viewBox", `0 0 ${String(o)} ${String(s)}`).attr("width", "100%").attr("height", "100%").attr("font-family", "system-ui, -apple-system, \"Segoe UI\", sans-serif").attr("font-size", 12), m = ZN();
		p.append("g").attr("fill", "none").selectAll("path").data(d).join("path").attr("d", m).attr("stroke", (e) => tP(f.indexOf(e.source), r)).attr("stroke-opacity", .35).attr("stroke-width", (e) => Math.max(1, e.width ?? 1)).on("mouseenter", (e, t) => {
			a(e.currentTarget).attr("stroke-opacity", .6);
			let n = t.source, r = t.target;
			c(e, `${n.name} → ${r.name}<br>${t.value.toLocaleString()}`);
		}).on("mousemove", (e, t) => {
			let n = t.source, r = t.target;
			c(e, `${n.name} → ${r.name}<br>${t.value.toLocaleString()}`);
		}).on("mouseleave", (e) => {
			a(e.currentTarget).attr("stroke-opacity", .35), l();
		});
		let h = p.append("g").selectAll("g").data(f).join("g");
		h.append("rect").attr("x", (e) => e.x0 ?? 0).attr("y", (e) => e.y0 ?? 0).attr("width", (e) => (e.x1 ?? 0) - (e.x0 ?? 0)).attr("height", (e) => Math.max(1, (e.y1 ?? 0) - (e.y0 ?? 0))).attr("rx", 2).attr("fill", (e, t) => tP(t, r)).on("mouseenter", (e, t) => {
			c(e, `${t.name}<br>${(t.value ?? 0).toLocaleString()}`);
		}).on("mousemove", (e, t) => {
			c(e, `${t.name}<br>${(t.value ?? 0).toLocaleString()}`);
		}).on("mouseleave", l), h.append("text").attr("x", (e) => (e.x0 ?? 0) < o / 2 ? (e.x1 ?? 0) + oP : (e.x0 ?? 0) - oP).attr("y", (e) => ((e.y0 ?? 0) + (e.y1 ?? 0)) / 2).attr("dy", "0.35em").attr("text-anchor", (e) => (e.x0 ?? 0) < o / 2 ? "start" : "end").attr("fill", i.primary).text((e) => e.name);
		let g = p.node();
		if (g == null) throw Error("Failed to create Sankey diagram SVG element.");
		return g;
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
//#region src/treeDiagram.ts
var cP = 140, lP = 40, uP = 24, dP = 50, fP = 8, pP = {
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
function mP(e, t, n = {}) {
	let r = n.nodeWidth ?? cP, i = n.nodeHeight ?? lP, o = n.siblingGap ?? uP, s = n.levelGap ?? dP, c = n.padding ?? fP, l = n.nodeColors ?? pP;
	function u(e) {
		return e.depth === 0 ? "root" : e.children ? "branch" : "leaf";
	}
	function d() {
		a(t).selectAll("svg").remove();
		let n = t_(e, (e) => e.children), d = g_().nodeSize([i + o, r + s]).separation(() => 1)(n);
		d.eachAfter((e) => {
			let [t] = e.children ?? [];
			t && (e.x = t.x);
		});
		let f = d.descendants(), p = Math.min(...f.map((e) => e.y)) - r / 2, m = Math.max(...f.map((e) => e.y)) + r / 2, h = Math.min(...f.map((e) => e.x)) - i / 2, g = Math.max(...f.map((e) => e.x)) + i / 2, _ = m - p + c * 2, v = g - h + c * 2, y = a(t).append("svg").attr("viewBox", `0 0 ${String(_)} ${String(v)}`).attr("width", _).attr("height", v), b = y.append("g").attr("transform", `translate(${String(c - p)}, ${String(c - h)})`), x = gp().x((e) => e.y).y((e) => e.x);
		b.append("g").attr("fill", "none").attr("stroke", "#999999").attr("stroke-width", 1.5).selectAll("path").data(d.links()).join("path").attr("d", x);
		let S = b.append("g").selectAll("g").data(f).join("g").attr("transform", (e) => `translate(${String(e.y - r / 2)}, ${String(e.x - i / 2)})`);
		S.append("rect").attr("width", r).attr("height", i).attr("rx", 6).attr("fill", (e) => l[u(e)].fill).attr("stroke", (e) => l[u(e)].stroke), S.append("text").attr("x", r / 2).attr("y", i / 2).attr("text-anchor", "middle").attr("dominant-baseline", "middle").attr("font-family", "Helvetica, Arial, sans-serif").attr("font-size", 12).attr("fill", "#000000").text((e) => e.data.label);
		let C = y.node();
		if (C == null) throw Error("Failed to create tree diagram SVG element.");
		return C;
	}
	let f = d();
	return {
		resize: () => {
			f = d();
		},
		get svg() {
			return f;
		}
	};
}
//#endregion
//#region src/index.ts
var hP = "d3", gP = class {
	renderBarChart(e, t, n) {
		let r = j_(e, t);
		return n?.(), {
			chart: r.chart,
			destroy: r.destroy,
			resize: r.resize,
			vendorId: "billboard.js"
		};
	}
	renderPlotBarChart(e, t, n) {
		let r = FN(e, t);
		return n?.(), {
			resize: r.resize,
			get svg() {
				return r.svg;
			},
			vendorId: "observable-plot"
		};
	}
	async renderErdDiagram(e, t, n, r) {
		let { renderErdDiagram: i } = await import("./erdDiagram-DNEvMuIA.js"), a = i(e, t, n);
		return r?.(), {
			resize: a.resize,
			get svg() {
				return a.svg;
			},
			vendorId: hP
		};
	}
	renderNetworkDiagram(e, t, n, r) {
		let i = wv(e, t, n);
		return r?.(), {
			destroy: i.destroy,
			resize: i.resize,
			get svg() {
				return i.svg;
			},
			triggerAutoLayout: i.triggerAutoLayout,
			vendorId: hP
		};
	}
	renderSankeyDiagram(e, t, n, r) {
		let i = sP(e, t, n);
		return r?.(), {
			resize: i.resize,
			get svg() {
				return i.svg;
			},
			vendorId: hP
		};
	}
	renderTreeDiagram(e, t, n, r) {
		let i = mP(e, t, n);
		return r?.(), {
			resize: i.resize,
			get svg() {
				return i.svg;
			},
			vendorId: hP
		};
	}
};
//#endregion
export { gP as D3Tool };

//# sourceMappingURL=dpuse-tool-d3.es.js.map