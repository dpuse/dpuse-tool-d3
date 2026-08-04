import { c as e, f as t, n, r, t as i } from "./select-BIuoFcZG.js";
import { O as a, t as o } from "./src-DnMaAyIP.js";
import { F as s, M as c, N as l, P as u, _ as d, f, h as p, i as m, k as h, m as g, n as _, p as v, r as y, t as b, y as x } from "./axis-B7xlWKkC.js";
import { t as S } from "./drag-B46QGUMq.js";
//#region node_modules/billboard.js/dist-esm/config/const.js
var C = {
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
}, w = {
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
}, T = {
	Area: [
		C.AREA,
		C.AREA_SPLINE,
		C.AREA_SPLINE_RANGE,
		C.AREA_LINE_RANGE,
		C.AREA_STEP,
		C.AREA_STEP_RANGE
	],
	AreaRange: [
		C.AREA_SPLINE_RANGE,
		C.AREA_LINE_RANGE,
		C.AREA_STEP_RANGE
	],
	Arc: [
		C.PIE,
		C.DONUT,
		C.GAUGE,
		C.POLAR,
		C.RADAR
	],
	Line: [
		C.LINE,
		C.SPLINE,
		C.AREA,
		C.AREA_SPLINE,
		C.AREA_SPLINE_RANGE,
		C.AREA_LINE_RANGE,
		C.STEP,
		C.AREA_STEP,
		C.AREA_STEP_RANGE
	],
	Step: [
		C.STEP,
		C.AREA_STEP,
		C.AREA_STEP_RANGE
	],
	Spline: [
		C.SPLINE,
		C.AREA_SPLINE,
		C.AREA_SPLINE_RANGE
	]
};
//#endregion
//#region node_modules/billboard.js/dist-esm/module/browser.js
function E() {
	return typeof globalThis == "object" && globalThis !== null && globalThis.Object === Object && globalThis || typeof self == "object" && self !== null && self.Object === Object && self || Function("return this")();
}
function D(e) {
	let t = typeof e?.requestAnimationFrame == "function" && typeof e?.cancelAnimationFrame == "function", n = typeof e?.requestIdleCallback == "function" && typeof e?.cancelIdleCallback == "function", r = (e) => setTimeout(e, 1), i = (e) => clearTimeout(e);
	return [
		t ? e.requestAnimationFrame : r,
		t ? e.cancelAnimationFrame : i,
		n ? e.requestIdleCallback : r,
		n ? e.cancelIdleCallback : i
	];
}
var O = E(), k = O?.document, [ee, te, ne, re] = D(O), A = (e) => e || e === 0, j = (e) => typeof e == "function", M = (e) => typeof e == "string", N = (e) => typeof e == "number", P = (e) => e === void 0, F = (e) => e !== void 0, ie = (e) => typeof e == "boolean", ae = (e) => Math.ceil(e / 10) * 10, oe = (e) => Math.ceil(e) + .5, se = (e) => e[1] - e[0], I = (e) => typeof e == "object", ce = (e) => {
	for (let t in e) return !1;
	return !0;
}, L = (e) => P(e) || e === null || M(e) && e.length === 0 || I(e) && !(e instanceof Date) && ce(e) || N(e) && isNaN(e), R = (e) => !L(e), z = (e) => Array.isArray(e), B = (e) => e && !e?.nodeType && I(e) && !z(e), le = /* @__PURE__ */ new Set(/* @__PURE__ */ "span.div.p.br.b.i.em.small.strong.mark.u.s.sub.sup.h1.h2.h3.h4.h5.h6.ul.ol.li.dl.dt.dd.table.thead.tbody.tfoot.tr.th.td.caption.colgroup.col.hr.pre.code.blockquote.abbr.ins.del.a.img.figure.figcaption.svg.g.path.circle.ellipse.rect.line.polyline.polygon.text.tspan.textPath.use.defs.symbol.clipPath.mask.linearGradient.radialGradient.stop.pattern.marker.title.desc".split(".")), ue = /* @__PURE__ */ new Set(/* @__PURE__ */ "class.id.style.title.lang.dir.href.src.alt.width.height.colspan.rowspan.scope.headers.d.points.x.y.x1.x2.y1.y2.cx.cy.r.rx.ry.dx.dy.viewBox.preserveAspectRatio.transform.fill.fill-opacity.fill-rule.stroke.stroke-width.stroke-opacity.stroke-linecap.stroke-linejoin.stroke-dasharray.stroke-dashoffset.opacity.clip-path.clip-rule.mask.font-family.font-size.font-weight.font-style.text-anchor.dominant-baseline.offset.stop-color.stop-opacity.gradientUnits.gradientTransform.spreadMethod.patternUnits.patternTransform.marker-start.marker-mid.marker-end.markerWidth.markerHeight.refX.refY.xlink:href".split(".")), de = /* @__PURE__ */ new Map();
le.forEach((e) => de.set(e.toLowerCase(), e));
var fe = /* @__PURE__ */ new Map();
ue.forEach((e) => fe.set(e.toLowerCase(), e));
var pe = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:"
]), me = /* @__PURE__ */ new Set([
	"href",
	"src",
	"xlink:href"
]), he = /^<\/?([a-zA-Z][a-zA-Z0-9]*)/, ge = /^<\/([a-zA-Z][a-zA-Z0-9]*)\s*>$/, _e = /^<([a-zA-Z][a-zA-Z0-9]*)([\s\S]*?)(\/?)>$/, ve = /([a-zA-Z][\w:-]*)\s*(?:=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g, ye = /url\s*\(\s*["']?([^"')]+)["']?\s*\)/gi, be = [
	"expression(",
	"behavior:",
	"binding:",
	"@import",
	"@charset",
	"-moz-binding:"
];
function xe(e) {
	return e.replace(/&colon;/gi, ":").replace(/&newline;/gi, "\n").replace(/&tab;/gi, "	").replace(/&nbsp;/gi, " ").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&").replace(/&quot;/gi, "\"").replace(/&apos;/gi, "'").replace(/&#(\d+);?/gi, (e, t) => String.fromCharCode(parseInt(t, 10))).replace(/&#x([0-9a-f]+);?/gi, (e, t) => String.fromCharCode(parseInt(t, 16)));
}
function Se(e) {
	let t = xe(e).trim().replace(/[\s\u0000-\u001f]/g, "").toLowerCase();
	if (!t || t.startsWith("#")) return !0;
	let n = t.match(/^[^/?#]*:/);
	return !n || pe.has(n[0]);
}
function Ce(e) {
	let t = xe(e).replace(/[\u0000-\u001f]/g, "");
	ye.lastIndex = 0;
	let n;
	for (; (n = ye.exec(t)) !== null;) if (!Se(n[1])) return null;
	let r = t.toLowerCase().replace(/\s/g, "");
	for (let e of be) if (r.includes(e)) return null;
	return e;
}
var we = {
	"\"": "&quot;",
	"'": "&#39;",
	"`": "&#96;"
}, Te = /["'`]/g;
function Ee(e) {
	return e.replace(Te, (e) => we[e]);
}
function De(e, t, n = !1) {
	if (me.has(e)) return Se(t) ? n ? Ee(t) : t : null;
	if (e === "style") {
		let e = Ce(t);
		return e === null ? null : n ? Ee(e) : e;
	}
	let r = xe(t).toLowerCase().replace(/\s/g, "");
	return /\bon\w+=/.test(r) ? null : n ? Ee(t) : t;
}
function Oe(e) {
	let t = e.match(he);
	return t ? t[1].toLowerCase() : null;
}
function ke(e) {
	let t = Oe(e);
	return t !== null && de.has(t);
}
function Ae(e) {
	let t = e.match(ge);
	if (t) {
		let e = t[1].toLowerCase();
		return `</${de.get(e) ?? e}>`;
	}
	let n = e.match(_e);
	if (!n) return "";
	let [, r, i, a] = n, o = r.toLowerCase(), s = de.get(o) ?? o, c = [];
	ve.lastIndex = 0;
	let l;
	for (; (l = ve.exec(i)) !== null;) {
		let e = l[1].toLowerCase(), t = l[2], n = l[3], r = l[4];
		if (e.startsWith("on")) continue;
		let i = fe.get(e) ?? e, a, o;
		if (t !== void 0) a = t, o = "\"";
		else if (n !== void 0) a = n, o = "'";
		else if (r !== void 0) a = r, o = "\"";
		else {
			fe.has(e) && c.push(i);
			continue;
		}
		if (fe.has(e)) {
			let t = De(e, a, r !== void 0);
			t !== null && c.push(`${i}=${o}${t}${o}`);
		}
	}
	return `<${s}${c.length > 0 ? ` ${c.join(" ")}` : ""}${a ? "/>" : ">"}`;
}
function je(e) {
	return typeof e != "string" || !e || e.indexOf("<") === -1 ? e : e.replace(/<\/?[^>]*>|[^<>\s]+>/g, (e) => e.startsWith("<!--") ? "" : e.startsWith("<") ? ke(e) ? Ae(e) : e.replace(/</g, "&lt;") : e.slice(0, -1) + "&gt;");
}
//#endregion
//#region node_modules/billboard.js/dist-esm/module/util/object.js
function Me(e, t) {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		r !== null && F(r) && t(r, n);
	}
}
function Ne(e, t, n) {
	return F(e[t]) ? e[t] : n;
}
function Pe(e, t) {
	for (let n in e) if (e[n] === t) return !0;
	return !1;
}
function V(e, t, ...n) {
	let r = j(e);
	return r && e.call(t, ...n), r;
}
function Fe(e, t) {
	let n = 0, r = function(...e) {
		!--n && t.apply(this, e);
	};
	"duration" in e ? e.each(() => ++n).on("end", r) : (++n, e.call(r));
}
var H = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function Ie(e, t = "-") {
	return e.split(t).map((e, t) => t ? e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() : e.toLowerCase()).join("");
}
var Le = (e) => [].slice.call(e);
function Re(...e) {
	let t = (e) => {
		if (z(e)) return e.map(t);
		if (B(e) && e.constructor) {
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
	z(t) && t.forEach((t) => ze(e, t));
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
	return B(e) && B(n) && Object.keys(n).forEach((t) => {
		if (!/^(__proto__|constructor|prototype)$/i.test(t)) {
			let r = n[t];
			r instanceof Date ? e[t] = new Date(r.getTime()) : B(r) ? (!e[t] && (e[t] = {}), e[t] = He(e[t], r)) : e[t] = z(r) ? r.concat() : r;
		}
	}), He(e, ...t);
}
function Ue(e, t = !0) {
	let n;
	return e[0] instanceof Date ? n = t ? (e, t) => e - t : (e, t) => t - e : t && !e.every(isNaN) ? n = (e, t) => e - t : t || (n = (e, t) => e > t && -1 || e < t && 1 || e === t && 0), e.concat().sort(n);
}
function We(e, t) {
	let n = t.filter((e) => R(e));
	if (n.length) if (N(n[0])) {
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
	return je(e.replace(/\{=([^}]+)\}/g, (e, n) => t[n] ?? ""));
}
function Ye(e) {
	let t;
	if (e instanceof Date) t = e;
	else if (M(e)) {
		let { config: n, format: r } = this;
		t = r.dataTime(n.data_xFormat)(e) ?? new Date(e);
	} else N(e) && !isNaN(e) && (t = /* @__PURE__ */ new Date(+e));
	return (!t || isNaN(+t)) && console && console.error && console.error(`Failed to parse x '${e}' to Date object`), t;
}
function Xe(e) {
	if (B(e) && !M(e)) {
		let t = e;
		return {
			top: t.top || 0,
			right: t.right || 0,
			bottom: t.bottom || 0,
			left: t.left || 0
		};
	}
	let [t, n = t, r = t, i = n] = (M(e) ? e.trim().split(/\s+/) : [e]).map((e) => +e || 0);
	return {
		top: t,
		right: n,
		bottom: r,
		left: i
	};
}
function Ze(e, t) {
	t() === !1 ? ee(() => Ze(e, t)) : e();
}
function Qe(e, t = ((e) => e)) {
	let n = /* @__PURE__ */ new Set();
	return Me(e, (e, r) => {
		n.add(t(e, r));
	}), n;
}
function $e(e, t, n = ((e) => e)) {
	let r = /* @__PURE__ */ new Map();
	return Me(e, (e, i) => {
		r.set(t(e, i), n(e, i));
	}), r;
}
//#endregion
//#region node_modules/billboard.js/dist-esm/module/error.js
var et = "https://github.com/naver/billboard.js/blob/master/MODULE_IMPORTS.md";
function tt(e) {
	let t = e, { config: n } = t, r = "";
	if (L(n.data_type || n.data_types) && !t[w.LINE]) r = "line";
	else for (let e in w) {
		let n = C[e];
		if (t.hasType(n) && !t[w[e]]) {
			r = n;
			break;
		}
	}
	r && nt(`Please, make sure if %c${Ie(r)}`, "module has been imported and specified correctly.", et);
}
function nt(e, t, n) {
	let r = "[billboard.js]";
	if (O.console?.error) {
		let i = ["background:red;color:white;display:block;font-size:15px", t];
		console.error(`❌ ${r} ${e}`, "background:red;color:white;display:block;font-size:15px", ...i), console.info("%cℹ️", "font-size:15px", n);
	}
	throw Error(`${r} ${e.replace(/\%c([a-z-]+)/i, "'$1' ")} ${t}`);
}
//#endregion
//#region node_modules/d3-selection/src/selectAll.js
function rt(t) {
	return typeof t == "string" ? new n([document.querySelectorAll(t)], [document.documentElement]) : new n([e(t)], r);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/config/classes.js
var U = {
	button: "bb-button",
	chart: "bb-chart",
	empty: "bb-empty",
	main: "bb-main",
	target: "bb-target",
	EXPANDED: "_expanded_",
	dummy: "_dummy_"
}, it = {
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
}, at = {
	area: "bb-area",
	areas: "bb-areas"
}, W = {
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
}, G = {
	bar: "bb-bar",
	bars: "bb-bars",
	chartBar: "bb-chart-bar",
	chartBars: "bb-chart-bars",
	barConnectLine: "bb-bar-connectLine"
}, ot = {
	candlestick: "bb-candlestick",
	candlesticks: "bb-candlesticks",
	chartCandlestick: "bb-chart-candlestick",
	chartCandlesticks: "bb-chart-candlesticks",
	valueDown: "bb-value-down",
	valueUp: "bb-value-up"
}, st = {
	chartCircles: "bb-chart-circles",
	circle: "bb-circle",
	circles: "bb-circles"
}, ct = {
	colorPattern: "bb-color-pattern",
	colorScale: "bb-colorscale"
}, lt = {
	dragarea: "bb-dragarea",
	INCLUDED: "_included_"
}, ut = {
	funnel: "bb-funnel",
	chartFunnel: "bb-chart-funnel",
	chartFunnels: "bb-chart-funnels",
	funnelBackground: "bb-funnel-background"
}, dt = {
	chartArcsGaugeMax: "bb-chart-arcs-gauge-max",
	chartArcsGaugeMin: "bb-chart-arcs-gauge-min",
	chartArcsGaugeUnit: "bb-chart-arcs-gauge-unit",
	chartArcsGaugeTitle: "bb-chart-arcs-gauge-title",
	gaugeValue: "bb-gauge-value"
}, K = {
	legend: "bb-legend",
	legendBackground: "bb-legend-background",
	legendItem: "bb-legend-item",
	legendItemEvent: "bb-legend-item-event",
	legendItemHidden: "bb-legend-item-hidden",
	legendItemPoint: "bb-legend-item-point",
	legendItemTile: "bb-legend-item-tile"
}, ft = {
	chartLine: "bb-chart-line",
	chartLines: "bb-chart-lines",
	line: "bb-line",
	lines: "bb-lines"
}, pt = {
	eventRect: "bb-event-rect",
	eventRects: "bb-event-rects",
	eventRectsMultiple: "bb-event-rects-multiple",
	eventRectsSingle: "bb-event-rects-single"
}, q = {
	focused: "bb-focused",
	defocused: "bb-defocused",
	legendItemFocused: "bb-legend-item-focused",
	xgridFocus: "bb-xgrid-focus",
	ygridFocus: "bb-ygrid-focus"
}, J = {
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
}, mt = {
	level: "bb-level",
	levels: "bb-levels"
}, ht = {
	chartRadar: "bb-chart-radar",
	chartRadars: "bb-chart-radars"
}, gt = {
	region: "bb-region",
	regions: "bb-regions"
}, _t = {
	selectedCircle: "bb-selected-circle",
	selectedCircles: "bb-selected-circles",
	SELECTED: "_selected_"
}, Y = {
	shape: "bb-shape",
	shapes: "bb-shapes"
}, vt = {
	brush: "bb-brush",
	subchart: "bb-subchart"
}, X = {
	chartText: "bb-chart-text",
	chartTexts: "bb-chart-texts",
	text: "bb-text",
	texts: "bb-texts",
	title: "bb-title",
	textBorderRect: "bb-text-border",
	textLabelImage: "bb-text-label-image",
	TextOverlapping: "text-overlapping"
}, yt = {
	tooltip: "bb-tooltip",
	tooltipContainer: "bb-tooltip-container",
	tooltipName: "bb-tooltip-name"
}, bt = {
	treemap: "bb-treemap",
	chartTreemap: "bb-chart-treemap",
	chartTreemaps: "bb-chart-treemaps"
}, xt = {
	buttonZoomReset: "bb-zoom-reset",
	zoomBrush: "bb-zoom-brush"
}, Z = {
	...U,
	...it,
	...at,
	...W,
	...G,
	...ot,
	...st,
	...ct,
	...lt,
	...dt,
	...K,
	...ft,
	...pt,
	...q,
	...ut,
	...J,
	...mt,
	...ht,
	...gt,
	..._t,
	...Y,
	...vt,
	...X,
	...yt,
	...bt,
	...xt
}, St = {
	boost_useCssRule: !1,
	boost_useWorker: !1
}, Ct = {
	color_pattern: [],
	color_tiles: void 0,
	color_threshold: {},
	color_onover: void 0
}, wt = {
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
}, Tt = {
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
}, Et = {
	title_text: void 0,
	title_padding: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	},
	title_position: "center"
}, Dt = {
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
}, Ot = {
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
}, kt = {
	interaction_enabled: !0,
	interaction_brighten: !0,
	interaction_inputType_mouse: !0,
	interaction_inputType_touch: {},
	interaction_onout: !0
}, At = class e {
	static data = {};
	static setOptions(e) {
		for (let t = 0; t < e.length; t++) Object.assign(this.data, e[t]);
	}
	constructor() {
		return Re(Tt, St, Ot, Ct, kt, wt, Et, Dt, e.data);
	}
}, jt = {
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
}, Mt = class {
	constructor() {
		Object.keys(jt).forEach((e) => {
			this[e] = new jt[e]();
		});
	}
	getStore(e) {
		return this[e];
	}
}, Q = {
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
}, Nt = class {
	cache = /* @__PURE__ */ new Map();
	add(e, t, n = !1) {
		let r = n ? this.cloneTarget(t) : t;
		return this.cache.set(e, r), r;
	}
	remove(e) {
		let t = M(e) ? [e] : e;
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
}, Pt = /\s?(bb-)/g, Ft = /\.+/g;
function It(e) {
	return e.replace(Pt, ".$1").replace(Ft, ".");
}
function Lt(e, t, n = !1) {
	let r = (t) => t[e ? "getBoundingClientRect" : "getBBox"](), i = e ? "rectClient" : "rectBBox";
	return n ? r(t) : !(i in t) || t.hasAttribute("width") && t[i].width !== +(t.getAttribute("width") || 0) ? t[i] = r(t) : t[i];
}
function Rt(e, t, n = [-1, 1], r = !1) {
	if (!(!e || !M(t))) if (t.indexOf("\n") === -1) e.text(t);
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
function zt(e) {
	let { x: t, y: n, width: r, height: i } = Vt(e, !0);
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
function Bt(e, t) {
	let n = e && (e.touches || e.sourceEvent && e.sourceEvent.touches)?.[0], r = [0, 0];
	try {
		r = a(n || e, t);
	} catch {}
	return r.map((e) => isNaN(e) ? 0 : e);
}
function $(e, t = !1) {
	return Lt(!0, e, t);
}
function Vt(e, t = !1) {
	return Lt(!1, e, t);
}
function Ht(e, t, n) {
	let { rootSelector: r = "", sheet: i } = e, a = `${r} ${It(t)} {${n.join(";")}}`;
	return i[i.insertRule ? "insertRule" : "addRule"](a, i.cssRules.length);
}
function Ut(e) {
	return {
		x: (O.pageXOffset ?? O.scrollX ?? 0) + (e.scrollLeft ?? 0),
		y: (O.pageYOffset ?? O.scrollY ?? 0) + (e.scrollTop ?? 0)
	};
}
function Wt(e, t = 0, n = 0, r = !0) {
	let i = new DOMPoint(t, n), a = e.getScreenCTM(), o = i.matrixTransform(r ? a?.inverse() : a);
	if (r === !1) {
		let t = $(e);
		o.x -= t.x, o.y -= t.y;
	}
	return o;
}
function Gt(e) {
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
function Kt(e, t) {
	let n = e?.getAttribute?.(t);
	if (n) return parseFloat(n);
	let r = Gt(e);
	return t === "x" ? r.e : r.f;
}
function qt(e) {
	let t = e.attr("viewBox");
	return t ? t.trim().split(/[\s,]+/).length === 4 : !1;
}
function Jt(e, t, n = !1) {
	let r = !!e.node, i = !1;
	for (let [a, o] of Object.entries(t)) if (i = r ? e.style(a) === o : e.style[a] === o, n ? !i : i) break;
	return i;
}
function Yt() {
	return k?.hidden === !1 || k?.visibilityState === "visible";
}
function Xt(e, t) {
	let { DocumentTouch: n, matchMedia: r, navigator: i } = O, a = r?.("(pointer:coarse)").matches, o = !1;
	if (t) if (i && "maxTouchPoints" in i) o = i.maxTouchPoints > 0;
	else if ("ontouchmove" in O || n && k instanceof n) o = !0;
	else if (a) o = !0;
	else {
		let e = i.userAgent;
		o = /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(e) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(e);
	}
	return e && !a && r?.("(pointer:fine)").matches && "mouse" || o && "touch" || "mouse";
}
var Zt = {
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
				let i = k.createEvent("MouseEvent");
				i.initMouseEvent(n, r.bubbles, r.cancelable, O, 0, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), t.dispatchEvent(i);
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
}, { setTimeout: Qt, clearTimeout: $t } = O;
function en(e) {
	let t = [], n, r = function() {
		r.clear(), n = e === !1 ? ne(() => {
			n = null, t.forEach((e) => e());
		}, { timeout: 200 }) : Qt(() => {
			n = null, t.forEach((e) => e());
		}, N(e) ? e : 200);
	};
	return r.clear = () => {
		n &&= ((e === !1 ? re : $t)(n), null);
	}, r.add = (e) => t.push(e), r.remove = (e) => {
		let n = t.indexOf(e);
		n !== -1 && t.splice(n, 1);
	}, r;
}
function tn() {
	let e = [], t = function(t, n) {
		function r() {
			let t = 0;
			for (let n = 0, r; r = e[n]; n++) {
				if (r === !0 || r.empty?.()) {
					t++;
					continue;
				}
				if (Yt() === !1) {
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
		z(t) ? e = e.concat(t) : e.push(t);
	}, t;
}
//#endregion
//#region node_modules/billboard.js/dist-esm/module/worker.js
var nn = {}, rn = 0;
function an(e, t) {
	let n = e.toString(), r = t?.map(String).join(";") ?? "", i = (n + r).replace(/(function|[\s\W\n])/g, "").substring(0, 30);
	if (!(i in nn)) try {
		let e = new O.Blob([`${r}

				self.onmessage=function({data}) {
					const result = (${n}).apply(null, data.args);
					self.postMessage({id: data.id, result});
				};`], { type: "text/javascript" });
		nn[i] = {
			src: O.URL.createObjectURL(e),
			worker: null
		};
	} catch {
		return null;
	}
	return {
		key: i,
		src: nn[i].src
	};
}
function on(e, t) {
	let n = nn[e];
	if (!n) return null;
	if (!n.worker) {
		try {
			n.worker = new O.Worker(t);
		} catch {
			return null;
		}
		n.worker && (n.worker.onerror = function(e) {
			console.error ? console.error(e) : console.log(e);
		});
	}
	return n.worker;
}
function sn(e = !0, t, n, r) {
	let i = function(...e) {
		n(t(...e));
	};
	if (O.Worker && e) {
		let e = an(t, r), a = e && on(e.key, e.src);
		a && (i = function(...e) {
			let t = ++rn, r = function(e) {
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
function cn() {
	for (let e in nn) {
		let t = nn[e];
		t.worker && t.worker.terminate(), t.src && O.URL.revokeObjectURL(t.src), delete nn[e];
	}
}
//#endregion
//#region node_modules/billboard.js/dist-esm/module/dsv.js
var ln = 34, un = 10, dn = 13;
function fn(e) {
	let t = e.charCodeAt(0);
	function n(e, n) {
		let r = [], i = e.length, a = 0, o = 0, s = i <= 0, c = !1;
		e.charCodeAt(0) === 65279 && a++, e.charCodeAt(i - 1) === un && --i, e.charCodeAt(i - 1) === dn && --i;
		function l() {
			if (s) return null;
			if (c) return c = !1, null;
			let n = a, r, o;
			if (e.charCodeAt(n) === ln) {
				for (; ++a < i;) if (e.charCodeAt(a) === ln) {
					if (e.charCodeAt(a + 1) !== ln) break;
					a++;
				}
				return (o = a++) >= i ? s = !0 : (r = e.charCodeAt(a++)) === un ? c = !0 : r === dn && (c = !0, e.charCodeAt(a) === un && ++a), e.slice(n + 1, o).replace(/""/g, "\"");
			}
			for (; a < i;) {
				if ((r = e.charCodeAt(o = a++)) === un) c = !0;
				else if (r === dn) c = !0, e.charCodeAt(a) === un && ++a;
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
var pn = fn(","), mn = fn("	"), hn = pn.parse, gn = pn.parseRows, _n = mn.parse, vn = mn.parseRows;
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/data/convert.helper.js
function yn(e) {
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
function bn(e) {
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
function xn(e, t) {
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
		}), i = bn(n);
	} else Object.keys(e).forEach(function(t) {
		let r = [].concat(e[t]);
		r.unshift?.(t), n.push(r);
	}), i = yn(n);
	return i;
}
function Sn(e, t = "csv", n, r, i) {
	let a = new XMLHttpRequest(), o = {
		csv: wn,
		tsv: Tn,
		json: xn
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
function Cn(e, t) {
	let n = e.rows(t), r;
	return n.length === 1 ? (r = [{}], n[0].forEach((e) => {
		r[0][e] = null;
	})) : r = e.parse(t), r;
}
function wn(e) {
	return Cn({
		rows: gn,
		parse: hn
	}, e);
}
function Tn(e) {
	return Cn({
		rows: vn,
		parse: _n
	}, e);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/data/convert.js
function En(e, t) {
	let n = e || t?.data_keys;
	return n?.x && (t.data_x = n.x), n;
}
function Dn(e, t, n) {
	let r = this, { config: i } = r, a;
	e.forEach((e) => {
		let o = r.getXKey(e);
		if (n.customX || n.timeSeries ? n.xs.indexOf(o) >= 0 ? a = (n.appendXs && r.data.xs[e] || []).concat(t.map((t, n) => {
			let i = t[o];
			return A(i) ? r.generateTargetX(i, e, n) : !1;
		}).filter((e) => e !== !1)) : i.data_x ? a = this.getOtherTargetXs() : R(i.data_xs) && (a = r.getXValuesOfXKey(o, r.data.targets)) : a = t.map((e, t) => t), a) r.data.xs[e] = a;
		else throw Error(`x is not defined for id = "${e}".`);
	});
}
var On = {
	convertData(e, t) {
		let { config: n } = this, r = (e) => e?.length && !L(e[0]) ? n.boost_useWorker : !1, i = e;
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
		})), i.url && t) Sn(i.url, i.mimeType, i.headers, En(i.keys, n), t);
		else if (i.json) sn(r(i.json), xn, t, [yn, bn])(i.json, En(i.keys, n));
		else if (i.rows) sn(r(i.rows), bn, t)(i.rows);
		else if (i.columns) sn(r(i.columns), yn, t)(i.columns);
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
		Dn.bind(n)(c, e, u);
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
					if (h = h !== null && !isNaN(h) && !B(h) ? +h : z(h) || B(h) ? h : null, (c || a.hasRadar) && r === 0 && !P(f)) {
						!l && u === 0 && !p && (i.axis_x_categories = [], d && d.clear());
						let e = String(f);
						g = d?.get(e) ?? -1, g === -1 && (g = i.axis_x_categories.length, i.axis_x_categories.push(f), d?.set(e, g));
					} else g = n.generateTargetX(f, t, m + u);
					return (P(h) || n.data.xs[t].length <= u) && (g = void 0), {
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
}, kn = {
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
function An(e) {
	return z(e) ? e : [e];
}
var jn = {
	isX(e) {
		let { config: t } = this, n = t.data_x && e === t.data_x, r = R(t.data_xs) && Pe(t.data_xs, e);
		return n || r;
	},
	isStackNormalized() {
		let { config: e } = this;
		return !!((e.data_stack_normalize === !0 || I(e.data_stack_normalize)) && e.data_groups.length);
	},
	isStackNormalizedPerGroup() {
		let { config: e } = this;
		return !!(I(e.data_stack_normalize) && e.data_stack_normalize?.perGroup && e.data_groups.length);
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
		return t.data_x ? t.data_x : R(t.data_xs) ? t.data_xs[e] : null;
	},
	getXValuesOfXKey(e, t) {
		let n = this, r = t && R(t) ? n.mapToIds(t) : [], i;
		return r.forEach((t) => {
			n.getXKey(t) === e && (i = n.data.xs[t]);
		}), i;
	},
	getIndexByX(e, t) {
		let n = this;
		return t ? t.indexOf(M(e) ? e : +e) : (n.filterByX(n.data.targets, e)[0] || { index: null }).index;
	},
	getXValue(e, t) {
		let n = this;
		return e in n.data.xs && n.data.xs[e] && A(n.data.xs[e][t]) ? n.data.xs[e][t] : t;
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
		return !this.config.axis_x_forceAsSingle && (R(this.config.data_xs) || this.hasType("bubble") || this.hasType("scatter"));
	},
	addName(e) {
		let { config: t } = this, n;
		return e && (n = t.data_names[e.id], e.name = n === void 0 ? e.id : n), e;
	},
	getAllValuesOnIndex(e, t = !1) {
		let n = this, r = n.filterTargetsToShow(n.data.targets).map((t) => n.addName(n.getValueOnIndex(t.values, e)));
		return t && (r = r.filter((e) => e && "value" in e && A(e.value))), r;
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
		return i?.isTimeSeries() ? a = Ye.bind(r)(e || r.getXValue(t, n)) : i?.isCustomX() && !i?.isCategorized() && (a = A(e) ? +e : r.getXValue(t, n)), a;
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
				N(i) && (i < n && (n = i), i > r && (r = i));
			}
		}
		return {
			min: n,
			max: r
		};
	},
	getMinMaxData() {
		let e = this, t = Q.dataMinMax, n = e.cache.get(t);
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
		let t = this, { config: n } = t, r = e ? `${Q.dataTotalPerIndex}-${e}` : Q.dataTotalPerIndex, i = t.cache.get(r);
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
					i[t] || (i[t] = 0), i[t] += N(e.value) ? e.value : 0;
				});
			}), t.cache.add(r, i);
		}
		return i;
	},
	getTotalDataSum(e) {
		let t = this, n = Q.dataTotalSum, r = t.cache.get(n);
		return N(r) || (r = t.data.targets.reduce((e, t) => e + t.values.reduce((e, t) => e + (t.value ?? 0), 0), 0), t.cache.add(n, r)), e && (r -= t.getHiddenTotalDataSum()), r;
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
		let e = this, { cache: t, state: n } = e, r = t.get(Q.maxDataCountTarget);
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
		return t.add(Q.maxDataCountTarget, {
			value: i,
			generation: n.dataGeneration
		}), i;
	},
	mapToIds(e) {
		return e.map((e) => e.id);
	},
	mapToTargetIds(e) {
		let t = this;
		return e ? z(e) ? e.concat() : [e] : t.mapToIds(t.data.targets);
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
			let { cache: e, data: n, state: r } = t, i = Q.filteredTargets, a = e.get(i);
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
		An(t).forEach((t) => n[e].add(t));
	},
	removeTargetIds(e, t) {
		let { state: n } = this;
		An(t).forEach((t) => n[e].delete(t));
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
			let e = t.cache.get(Q.valuesXIndexMap);
			if (e && e.generation === t.state.dataGeneration) a = e.value;
			else {
				let e = t.mapTargetsToUniqueXs(t.data.targets).map((e) => M(e) ? e : +e);
				a = new Map(e.map((e, t) => [e, t])), t.cache.add(Q.valuesXIndexMap, {
					value: a,
					generation: t.state.dataGeneration
				});
			}
		}
		return e.forEach((e) => {
			let o = [];
			e.values.filter(({ value: e }) => A(e) || e === null).forEach((e) => {
				let { value: r } = e;
				if (r !== null && t.isCandlestickType(e) && (r = z(r) ? r.slice(0, 4) : [
					r.open,
					r.high,
					r.low,
					r.close
				]), z(r)) o.push(...r);
				else if (B(r) && "high" in r) o.push(...Object.values(r));
				else if (t.isBubbleZType(e)) o.push(n && t.getBubbleZData(r, "y"));
				else if (i && a) {
					let t = M(e.x) ? e.x : +e.x, n = a.get(t);
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
			let t = (e, t) => e + Math.abs(t.value), n = (e) => N(e) ? e : "values" in e ? e.values.reduce(t, 0) : e.value;
			o = (t, r) => {
				let a = n(t), o = n(r);
				return e ? i ? a - o : o - a : i ? o - a : a - o;
			};
		} else j(r) && (o = r.bind(t.api));
		return o || null;
	},
	filterByX(e, t) {
		return this.getValuesByX(e).get(this.getXCacheKey(t)) || [];
	},
	filterNullish(e) {
		let t = (e) => A(e.value);
		return e && e.filter((e) => "value" in e ? t(e) : e.values.some(t));
	},
	filterRemoveNull(e) {
		return e.filter((e) => A(this.getBaseValue(e)));
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
		return ie(e) && e || I(e) && R(e);
	},
	hasNullDataValue(e) {
		return e.some(({ value: e }) => e === null);
	},
	getDataIndexFromEvent(e) {
		let { $el: t, config: n, state: { hasRadar: r, inputType: a, eventReceiver: { coords: o, rect: s } } } = this, c;
		if (r) {
			let t = e.target;
			/tspan/i.test(t.tagName) && (t = t.parentNode);
			let n = i(t).datum();
			c = n && Object.keys(n).length === 1 ? n.index : void 0;
		} else {
			let r = n.axis_rotated, i = Ut(t.chart.node()), l = a === "touch" && e.changedTouches ? e.changedTouches[0] : e, u = r ? l.clientY + i.y : l.clientX + i.x;
			if (qt(t.svg)) {
				let e = [u, 0];
				r && e.reverse(), u = Wt(t.eventRect.node(), ...e)[r ? "y" : "x"];
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
		return M(e) ? e : +e;
	},
	getValuesByX(e) {
		let t = this, { cache: n, state: r } = t, i = e.map((e) => {
			let { values: n } = e, r = n[0], i = n[n.length - 1];
			return `${e.id}:${n.length}:${r ? t.getXCacheKey(r.x) : ""}:${i ? t.getXCacheKey(i.x) : ""}`;
		}).join("|"), a = n.get(Q.valuesByX);
		if (a && a.generation === r.dataGeneration && a.targetKey === i) return a.value;
		let o = /* @__PURE__ */ new Map();
		for (let n = 0; n < e.length; n++) {
			let r = e[n].values;
			for (let e = 0; e < r.length; e++) {
				let n = r[e], i = t.getXCacheKey(n.x), a = o.get(i);
				a ? a.push(n) : o.set(i, [n]);
			}
		}
		return n.add(Q.valuesByX, {
			generation: r.dataGeneration,
			targetKey: i,
			value: o
		}), o;
	},
	getClosestCandidates(e, t, n = !0) {
		let r = this, { config: i, scale: a } = r, o = e.length, s = e[0];
		if (!n || o < 200 || !s || !i.data_xSort) return e;
		let c = r.isBarType(s.id), l = r.isCandlestickType(s.id), u = i.point_sensitivity;
		if (!(c || l) && !N(u)) return e;
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
			if (!n || !A(n.value)) continue;
			let c = r.isBarType(n.id), l = r.isCandlestickType(n.id);
			if (c || l) {
				let e = c ? `.${G.chartBar}.${U.target}${r.getTargetSelectorSuffix(n.id)} .${G.bar}-${n.index}` : `.${ot.chartCandlestick}.${U.target}${r.getTargetSelectorSuffix(n.id)} .${ot.candlestick}-${n.index} path`;
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
		let { axis: t, config: n } = this, r = n.line_step_type, i = t ? t.isCategorized() : !1, a = z(e) ? e.concat() : [e];
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
		let t = z(e) ? e.concat() : [e], n = [];
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
		return P(t) ? i : (Object.keys(t).forEach((e) => {
			i[e] = t[e];
		}), n.redraw({ withLegend: !0 }), i);
	},
	getRangedData(e, t = "", n = "areaRange") {
		let r = e?.value;
		if (z(r)) {
			if (n === "bar") return r.reduce((e, t) => t - e);
			{
				let e = kn[n]?.[t] ?? -1;
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
					t.length && (t = t.reduce((e, t) => e.map((e, n) => (N(e) ? e : 0) + t[n])), c = c.map((e, n) => e - t[n]));
				}
			}
			let l = c[t.index];
			t.ratio = N(t.value) && c && l ? t.value / l : 0, s = t.ratio;
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
		return this.isBubbleType(e) && (B(e.value) && ("z" in e.value || "y" in e.value) || z(e.value) && e.value.length >= 2);
	},
	isBarRangeType(e) {
		let t = this, { value: n } = e;
		return t.isBarType(e) && z(n) && n.length >= 2 && n.every(N);
	},
	getDataById(e) {
		let t = this.cache.get(e) || this.api.data(e);
		return t?.[0] ?? t;
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/data/load.js
function Mn(e, t = !1) {
	let n = this, { api: r } = n;
	t && n.api.flush(!0), e?.call(r);
}
var Nn = {
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
			}), n.updateTypesElements(), Mn.call(n, t.done, t.resizeAfter);
			return;
		}
		n.updateTargets(i.targets), o.zoom && (c.x = r.isCategorized() ? o.x.orgScale() : (a.xScale || o.x).copy(), c.domain = n.getXDomain(i.targets), c.x.domain(c.domain), c.currentDomain = n.zoom.getDomain(), n.withinRange(c.currentDomain, void 0, c.domain) || (o.x.domain(c.domain), o.zoom = null, n.$el.eventRect.property("__zoom", null))), n.redraw({
			withUpdateOrgXDomain: !0,
			withUpdateXDomain: !0,
			withLegend: !0
		}), o.zoom ? (a.xDomain = c.domain, a.xScale = c.x, r.isCategorized() && (c.currentDomain = n.getZoomDomainValue(c.currentDomain), a.xDomain = n.getZoomDomainValue(a.xDomain), a.xScale = c.x.domain(a.xDomain)), n.updateCurrentZoomTransform(c.x, c.currentDomain)) : a.xScale && a.xScale.domain(a.xDomain), n.updateTypesElements(), Mn.call(n, t.done, t.resizeAfter);
	},
	loadFromArgs(e) {
		let t = this;
		t.config && (t.cache.reset(!1, [
			Q.filteredTargets,
			Q.maxDataCountTarget,
			Q.valuesXIndexMap,
			Q.maxTickSize
		]), t.convertData(e, (n) => {
			let r = e.data || n;
			e.append && (r.__append__ = !0), r && t.load(t.convertDataToTargets.call(t, r), e);
		}));
	},
	unload(e, t) {
		let n = this, { state: r, $el: i, $T: a } = n, o = !!n.hasLegendDefsPoint?.(), s = t, c = e;
		if (n.cache.reset(!1, [
			Q.filteredTargets,
			Q.maxDataCountTarget,
			Q.valuesXIndexMap,
			Q.maxTickSize
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
			r.withoutFadeIn[e] = !1, i.legend && i.legend.selectAll(`.${K.legendItem}${t}`).remove(), o && i.defs?.select(`#${n.getDefsPointId(t)}`).remove();
		}), n.data.targets = n.data.targets.filter((e) => !l.has(e.id)), r.hasFunnel && n.updateFunnel(n.data.targets), r.hasTreemap && n.updateTargetsForTreemap(n.data.targets), n.updateTypesElements(), a(i.svg.selectAll(c.map((e) => n.selectorTarget(e)))).style("opacity", "0").remove().call(Fe, s);
	}
}, Pn = {
	setExpand(e, t, n) {
		let r = this, { config: i, $el: { circle: a } } = r;
		a && i.point_focus_expand_enabled && r.expandCircles(e, t, n), r.expandBarTypeShapes(!0, e, t, n);
	},
	expandBarTypeShapes(e = !0, t, n, r) {
		let i = this;
		["bar", "candlestick"].filter((e) => i.$el[e]).forEach((a) => {
			r && i.$el[a].classed(U.EXPANDED, !1), i.getShapeByIndex(a, t, n).classed(U.EXPANDED, e);
		});
	},
	setOverOut(e, t) {
		let n = this, { config: r, state: { hasFunnel: a, hasRadar: o, hasTreemap: s }, $el: { main: c } } = n, l = B(t);
		if (l || t !== -1) {
			let u = r[e ? "data_onover" : "data_onout"].bind(n.api);
			if (r.color_onover && n.setOverColor(e, t, l), l) {
				let e = n.getTargetSelectorSuffix(t.id), r = a || s ? `${U.target + e} .${Y.shape}` : it.arc + e;
				u(t, c.select(`.${r}`).node());
			} else if (r.tooltip_grouped) e && (o && n.isPointFocusOnly() ? n.showCircleFocus(n.getAllValuesOnIndex(t, !0)) : n.setExpand(t, null, !0)), !n.isMultipleX() && c.selectAll(`.${Y.shape}-${t}`).each(function(e) {
				u(e, this);
			});
			else {
				let a = n.cache.get(Q.setOverOut) || [], o = c.selectAll(`.${Y.shape}-${t}`).filter(function(e) {
					return n.isWithinShape(this, e);
				}), s = o.filter(function() {
					return a.every((e) => e !== this);
				});
				if (!e || o.empty() || a.length === s.size() && s.nodes().every((e, t) => e !== a[t])) for (; a.length;) {
					let e = a.pop();
					r.data_onout.bind(n.api)(i(e).datum(), e);
				}
				s.each(function() {
					e && (u(i(this).datum(), this), a.push(this));
				}), n.cache.add(Q.setOverOut, a);
			}
		}
	},
	callOverOutForTouch(e) {
		let t = this, n = t.cache.get(Q.callOverOutForTouch);
		(B(e) && n ? e.id !== n.id : e !== n) && ((n || N(n)) && t.setOverOut(!1, n), (e || N(e)) && t.setOverOut(!0, e), t.cache.add(Q.callOverOutForTouch, e));
	},
	getDraggableSelection() {
		let e = this, { config: t, state: n } = e;
		return t.interaction_enabled && t.data_selection_draggable && e.drag ? S().on("drag", function(t) {
			n.event = t, e.drag(Bt(t, this));
		}).on("start", function(t) {
			n.event = t, e.dragstart(Bt(t, this));
		}).on("end", (t) => {
			n.event = t, e.dragend();
		}) : () => {};
	},
	dispatchEvent(e, t, n) {
		let r = this, { config: i, state: { eventReceiver: a, hasAxis: o, hasFunnel: s, hasRadar: c, hasTreemap: l }, $el: { eventRect: u, funnel: d, radar: f, svg: p, treemap: m } } = r, h = ((s || l) && a.rect || c && f.axes.select(`.${W.axis}-${t} text`) || u || r.getArcElementByIdOrIndex?.(t))?.node?.();
		if (h) {
			let u = r.isMultipleX(), f = i.axis_rotated, { width: g, left: _, top: v } = $(h);
			if (o && !c && !u) {
				let e = a.coords[t];
				e ? (g = e.w, _ += e.x, v += e.y) : (g = 0, _ = 0, v = 0);
			}
			let y = _ + (n ? n[0] : 0) + (u || f ? 0 : g / 2), b = v + (n ? n[1] : 0) + (f ? 4 : 0);
			if (qt(p) && r.$el.eventRect) {
				let e = Wt(r.$el.eventRect.node(), y, b, !1);
				y = e.x, b = e.y;
			}
			let x = {
				screenX: y,
				screenY: b,
				clientX: y,
				clientY: b,
				bubbles: c
			};
			(s || l) && (h = (d ?? m).node()), Zt[/^(mouse|click)/.test(e) ? "mouse" : "touch"](h, e, x);
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
}, Fn = { categoryName(e) {
	let { axis_x_categories: t } = this.config;
	return t?.[e] ?? e;
} }, In = /[\x00-\x20\x7F-\xA0\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\]/g, Ln = {
	generateClass(e, t) {
		let n = this.state.generateClassCache, r = `${e}\0${t}`, i = n.get(r);
		return i || (i = ` ${e} ${e + this.getTargetSelectorSuffix(t)}`, n.set(r, i)), i;
	},
	getClass(e, t) {
		let n = /s$/.test(e), r = /^(area|arc|line|funnel|treemap)s?$/.test(e), i = n ? "id" : "index";
		return (a) => {
			let o = a.data || a;
			return ((t ? this.generateClass(Z[n ? "shapes" : "shape"], o[i]) : "") + this.generateClass(Z[e], o[r ? "id" : i])).trim();
		};
	},
	getChartClass(e) {
		return (t) => Z[`chart${e}`] + this.classTarget((t.data ? t.data : t).id);
	},
	generateExtraLineClass() {
		let e = this.config.line_classes || [], t = [];
		return function(n) {
			let r = n.id || n.data?.id || n;
			return t.indexOf(r) < 0 && t.push(r), e[t.indexOf(r) % e.length];
		};
	},
	classRegion(e, t) {
		return `${this.generateClass(Z.region, t)} ${"class" in e ? e.class : ""}`;
	},
	classTarget(e) {
		let t = this.config.data_classes[e], n = "";
		return t && (n = ` ${Z.target}-${t}`), this.generateClass(Z.target, e) + n;
	},
	classFocus(e) {
		return this.classFocused(e) + this.classDefocused(e);
	},
	classFocused(e) {
		return ` ${this.state.focusedTargetIds.has(e.id) ? Z.focused : ""}`;
	},
	classDefocused(e) {
		return ` ${this.state.defocusedTargetIds.has(e.id) ? Z.defocused : ""}`;
	},
	getTargetSelectorSuffix(e) {
		return (e || e === 0 ? `-${e}` : "").replace(In, "-");
	},
	selectorTarget(e, t = "", n = "") {
		let r = this.getTargetSelectorSuffix(e);
		return `${t}.${Z.target + r} ${n}, ${t}.${Z.circles + r} ${n}`;
	},
	selectorTargets(e, t) {
		let n = e || [];
		return n.length ? n.map((e) => this.selectorTarget(e, t)) : null;
	},
	selectorLegend(e) {
		return `.${Z.legendItem + this.getTargetSelectorSuffix(e)}`;
	},
	selectorLegends(e) {
		return e?.length ? e.map((e) => this.selectorLegend(e)) : null;
	}
}, Rn = (e, t, n) => {
	let r = i(e.cloneNode(!0));
	return r.attr("id", n).insert("rect", ":first-child").attr("width", r.attr("width")).attr("height", r.attr("height")).style("fill", t), {
		id: n,
		node: r.node()
	};
};
function zn(e) {
	let t = Q.colorPattern, { body: n } = k, r = n[t];
	if (!r) {
		let i = e.classed(ct.colorPattern, !0).style("background-image");
		e.classed(ct.colorPattern, !1), i.indexOf(";") > -1 && (r = i.replace(/url[^#]*|["'()]|(\s|%20)/g, "").split(";").map((e) => e.trim().replace(/[\"'\s]/g, "")).filter(Boolean), n[t] = r);
	}
	return r;
}
var Bn = [
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
], Vn = {
	generateColor() {
		let e = this, { $el: t, config: n } = e, r = [], i = n.area_linearGradient || n.bar_linearGradient || n.point_radialGradient, a = R(n.color_pattern) ? n.color_pattern : h(zn(t.chart) || Bn).range(), o = a;
		if (j(n.color_tiles)) {
			let t = n.color_tiles.bind(e.api)(), r = a.map((n, r) => {
				let i = n.replace(/[#\(\)\s,]/g, ""), a = `${e.state.datetimeId}-pattern-${i}-${r}`;
				return Rn(t[r % t.length], n, a);
			});
			a = r.map((e) => `url(#${e.id})`), e.patterns = r;
		}
		return function(s) {
			let c = n.data_colors, l = n.data_color, u = s.id || s.data?.id || s, d = e.isTypeOf(u, [
				"line",
				"spline",
				"step"
			]) || !n.data_types[u], f;
			if (j(c[u])) f = c[u].bind(e.api)(s);
			else if (c[u]) f = c[u];
			else {
				let e = r.indexOf(u);
				e < 0 && (r.push(u), e = r.length - 1), f = d ? o[e % o.length] : a[e % a.length], c[u] = f;
			}
			if (f = j(l) ? l.call(e.api, f, s) : f, i && t.defs) {
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
		return R(n) ? function(e) {
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
			M(e) ? a.push("") : B(e) ? a = Object.keys(e) : j(e) && (a = n.mapToTargetIds()), a.forEach((a) => {
				let o = `${i.datetimeId}-labels-bg${n.getTargetSelectorSuffix(a)}${M(e) ? n.getTargetSelectorSuffix(e) : ""}`, s = je(a === "" ? e : e?.[a] || "");
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
					let [i, a, o] = t, s = j(a) ? a.bind(e.api)(n.id) : a;
					c.defs && c.defs.append("stop").attr("offset", i).attr("stop-color", s || r).attr("stop-opacity", o);
				});
			}
		});
	},
	setOverColor(e, t) {
		let n = this, { config: r, $el: { main: i } } = n, a = r.color_onover, o = e ? a : n.color;
		B(o) ? o = ({ id: e }) => e in a ? a[e] : n.color(e) : M(o) ? o = () => a : j(a) && (o = o.bind(n.api)), i.selectAll(B(t) ? `.${it.arc}${n.getTargetSelectorSuffix(t.id)}` : `.${Y.shape}-${t}`).style("fill", o);
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/module/util/brush.js
function Hn(e) {
	let { event: t, $el: n } = e, r = n.subchart.main || n.main, i;
	return t && t.type === "brush" ? i = t.selection : r && (i = r.select(".bb-brush").node()) && (i = f(i)), i;
}
function Un(e) {
	let t = Hn(e);
	return !t || t[0] === t[1];
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/domain.js
function Wn(e, t) {
	return t.map((t) => {
		let { values: n } = t, r = n[0], i = n[n.length - 1], a = r ? e.getXCacheKey?.(r.x) ?? r.x : "", o = i ? e.getXCacheKey?.(i.x) ?? i.x : "";
		return `${t.id}:${n.length}:${a}:${o}`;
	}).join("|");
}
function Gn(e, t) {
	let n = e.data?.targets;
	if (!n) return !1;
	for (let e = 0; e < t.length; e++) {
		let r = t[e], i = n.find((e) => e.id === r.id);
		if (!i || i.values !== r.values) return !1;
	}
	return !0;
}
function Kn(e, t) {
	R(t) && ((e.min === void 0 || t < e.min) && (e.min = t), (e.max === void 0 || t > e.max) && (e.max = t));
}
function qn(e, t) {
	for (let n = 0; n < t.length; n++) Kn(e, t[n]);
}
function Jn(e, t) {
	let n = {
		min: void 0,
		max: void 0
	}, r = e.state.hasAxis;
	for (let i = 0; i < t.length; i++) {
		let a = t[i], o = e.isCandlestickType?.(a), { values: s } = a;
		for (let t = 0; t < s.length; t++) {
			let i = s[t], a = i.value;
			(A(a) || a === null) && (a !== null && o && (a = Array.isArray(a) ? a.slice(0, 4) : [
				a.open,
				a.high,
				a.low,
				a.close
			]), Array.isArray(a) ? qn(n, a) : B(a) && "high" in a ? qn(n, Object.values(a)) : e.isBubbleZType?.(i) ? Kn(n, r && e.getBubbleZData(a, "y")) : Kn(n, a));
		}
	}
	return [n.min, n.max];
}
function Yn(e, t) {
	let n;
	for (let r = 0; r < e.length; r++) {
		let { values: i } = e[r];
		for (let e = 0; e < i.length; e++) {
			let { x: r } = i[e];
			R(r) && (n === void 0 || (t === "min" ? r < n : r > n)) && (n = r);
		}
	}
	return n;
}
var Xn = {
	getYDomainMinMaxBoth(e) {
		let t = this, { axis: n, cache: r, config: i, state: a } = t, o = Gn(t, e) ? `${Q.domainMinMax}_y_${Wn(t, e)}` : null, s = o && r.get(o);
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
		} else d = Jn(t, e);
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
		let d = a[`${s}_min`], f = a[`${s}_max`], p = a[`${s}_center`], m = a[`${s}_inverted`], h = r.hasDataLabel() && a.axis_rotated, g = r.hasDataLabel() && !a.axis_rotated, [_, v] = r.getYDomainMinMaxBoth(u), y = _, b = v, x = [
			C.BAR,
			C.BUBBLE,
			C.SCATTER,
			...T.Line
		].some((e) => {
			let t = e.indexOf("area") > -1 ? "area" : e;
			return r.hasType(e, u, !0) && a[`${t}_zerobased`];
		});
		y = A(d) ? d : A(f) ? y <= f ? y : f - 10 : y, b = A(f) ? f : A(d) ? d <= b ? b : d + 10 : b, isNaN(y) && (y = 0), isNaN(b) && (b = y), y === b && (y < 0 ? b = 0 : y = 0);
		let S = y >= 0 && b >= 0, w = y <= 0 && b <= 0;
		(A(d) && S || A(f) && w) && (x = !1), x && (S && (y = 0), w && (b = 0));
		let E = Math.abs(b - y), D = {
			top: E * .1,
			bottom: E * .1
		};
		if (F(p)) {
			let e = Math.max(Math.abs(y), Math.abs(b));
			b = p + e, y = p - e;
		}
		if (h) {
			let e = se(o.y.range()), t = r.getDataLabelLength(y, b, "width").map((t) => {
				let n = t / e;
				return isFinite(n) ? n : 0;
			});
			["bottom", "top"].forEach((e, n) => {
				D[e] += E * (t[n] / (1 - t[0] - t[1]));
			});
		} else if (g) {
			let e = r.getDataLabelLength(y, b, "height");
			["bottom", "top"].forEach((t, n) => {
				D[t] += r.convertPixelToScale("y", e[n], E);
			});
		}
		D = r.getResettedPadding(D);
		let O = a[`${s}_padding`];
		R(O) && ["bottom", "top"].forEach((e) => {
			D[e] = i.getPadding(O, e, D[e], E);
		}), x && (S && (D.bottom = y), w && (D.top = -b));
		let k = c ? [y, b].map((e) => e < 0 ? 0 : e) : [y - D.bottom, b + D.top];
		return m ? k.reverse() : k;
	},
	getXDomainMinMax(e, t) {
		let n = this, { cache: r, state: i } = n, a = n.config[`axis_x_${t}`], o = Gn(n, e) ? `${Q.domainMinMax}_x_${t}_${Wn(n, e)}` : null, s = o && r.get(o), c = s?.generation === i.dataGeneration ? s.value : void 0;
		c === void 0 && (c = Yn(e, t), o && r.add(o, {
			generation: i.dataGeneration,
			value: c
		}));
		let l = B(a) ? a.value : a;
		return l = F(l) && n.axis?.isTimeSeries() ? Ye.bind(this)(l) : l, B(a) && a.fit && (t === "min" && l < c || t === "max" && l > c) && (l = void 0), F(l) ? l : c;
	},
	getXDomainPadding(e, t) {
		let n = this, { axis: r, config: i } = n, a = i.axis_x_padding, o = r.isTimeSeries() && t, s = se(e), c;
		if (r.isCategorized() || o) c = 0;
		else if (n.hasType("bar")) {
			let e = n.getMaxDataCount();
			c = e > 1 ? s / (e - 1) / 2 : .5;
		} else c = n.getResettedPadding(s * .01);
		let { left: l = c, right: u = c } = N(a) ? {
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
			let e = i || !a.brush || Un(a) ? s.xDomain : Hn(a).map(l.invert);
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
function Zn(e, t, n) {
	let { config: r } = e, i = `axis_${t}_tick_format`;
	return (r[i] ? r[i] : e.defaultValueFormat).call(e.api, n);
}
var Qn = {
	yFormat(e) {
		return Zn(this, "y", e);
	},
	y2Format(e) {
		return Zn(this, "y2", e);
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
		return z(e) ? e.join("~") : A(e) ? +e : "";
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
			return z(e) ? t = e.join("~") : B(e) && (t = Object.values(e).join("~")), t;
		}, i = r;
		return j(n.format) ? i = n.format : I(n.format) && (i = n.format[e] ? n.format[e] === !0 ? r : n.format[e] : () => ""), i.bind(t.api);
	}
}, $n = 10, er = 750;
function tr(e) {
	let t = this, n = t.getDataById(e);
	return t.levelColor ? t.levelColor(n.values[0].value) : t.color(n);
}
function nr(e, t = !0) {
	let { config: n } = this, r = n.data_names[e] ?? e;
	return t && j(n.legend_format) && (r = n.legend_format(r, e === r ? void 0 : e)), r;
}
function rr(e, t) {
	if (!t || t.empty()) return;
	let n = e.$el.legend?.selectAll(`.${K.legendItem}`);
	n && !n.empty() && (t = n);
	let r = [];
	t.each(function(e) {
		r.push({
			id: e,
			node: this
		});
	});
	let i = $e(r, (e) => e.id, (e) => e.node);
	e.cache.add(Q.legendItemMap, i);
}
function ir(e) {
	return e.changedTouches?.[0] || e.touches?.[0];
}
function ar(e, t, n) {
	let r = ir(n);
	e.state.legendTouch = r ? {
		id: t,
		x: r.clientX,
		y: r.clientY,
		moved: !1
	} : null;
}
function or(e, t) {
	let n = e.state.legendTouch, r = n && ir(t);
	r && (n.moved = n.moved || Math.abs(r.clientX - n.x) > $n || Math.abs(r.clientY - n.y) > $n);
}
function sr(e, t, n) {
	or(e, n);
	let r = e.state.legendTouch;
	return e.state.legendTouch = null, !!r && r.id === t && !r.moved;
}
function cr(e, t) {
	e.state.legendLastTouchClickId = t, e.state.legendLastTouchClickTime = Date.now();
}
function lr(e, t) {
	let { state: n } = e, r = n.legendLastTouchClickId === t && Date.now() - (n.legendLastTouchClickTime || 0) < er;
	return r && (n.legendLastTouchClickId = null, n.legendLastTouchClickTime = 0), r;
}
function ur(e) {
	let t = e.config.interaction_inputType_touch?.preventDefault;
	return { passive: !(ie(t) && t) && (!isNaN(t) && t || null) === null };
}
var dr = {
	initLegend() {
		let e = this, { config: t, $el: n } = e;
		if (e.legendItemTextBox = {}, e.state.legendHasRendered = !1, e.state.isCanvasMode) {
			t.legend_show ? e.updateHtmlLegend?.() : e.state.hiddenLegendIds = new Set(e.mapToIds(e.data.targets));
			return;
		}
		t.legend_show ? (t.legend_contents_bindto || (n.legend = e.$el.svg.append("g").classed(K.legend, !0).attr("transform", e.getTranslate("legend"))), e.updateLegend()) : e.state.hiddenLegendIds = new Set(e.mapToIds(e.data.targets));
	},
	updateLegend(e, t, n) {
		let r = this, { config: i, state: a, scale: o, $el: s } = r, c = t || {
			withTransform: !1,
			withTransitionForTransform: !1,
			withTransition: !1
		};
		c.withTransition = Ne(c, "withTransition", !0), c.withTransitionForTransform = Ne(c, "withTransitionForTransform", !0), i.legend_contents_bindto && i.legend_contents_template ? r.updateLegendTemplate() : a.hasTreemap || r.updateLegendElement(e || r.mapToIds(r.data.targets), c), s.legend?.selectAll(`.${K.legendItem}`).classed(K.legendItemHidden, function(e) {
			let t = !r.isTargetToShow(e);
			return t && (this.style.opacity = null), t;
		}), r.updateScales(!1, !o.zoom), r.updateSvgSize(), r.transformAll(c.withTransitionForTransform, n), a.legendHasRendered = !0;
	},
	updateLegendTemplate() {
		let e = this, { config: t, $el: n } = e, r = i(t.legend_contents_bindto), a = t.legend_contents_template;
		if (!r.empty()) {
			let t = e.mapToIds(e.data.targets), i = [], o = "";
			t.forEach((t) => {
				let n = j(a) ? je(a.call(e.api, t, e.color(t), e.api.data(t)[0].values)) : Je(a, {
					COLOR: e.color(t),
					TITLE: t
				});
				n && (i.push(t), o += n);
			});
			let s = r.html(o).selectAll(function() {
				return this.childNodes;
			}).data(i);
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
			r && i(r).select("line").style("stroke", t);
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
		return e.classed(K.legendItemHidden) ? null : "0.3";
	},
	toggleFocusLegend(e, t) {
		let n = this, { $el: { legend: r }, $T: a } = n, o = n.mapToTargetIds(e);
		r && a(r.selectAll(`.${K.legendItem}`).filter((e) => o.indexOf(e) >= 0).classed(q.legendItemFocused, t)).style("opacity", function() {
			return t ? null : n.opacityForUnfocusedLegend.call(n, i(this));
		});
	},
	revertLegend() {
		let { $el: { legend: e }, $T: t } = this;
		e && t(e.selectAll(`.${K.legendItem}`).classed(q.legendItemFocused, !1)).style("opacity", null);
	},
	showLegend(e) {
		let t = this, { config: n, $el: r, $T: i } = t;
		n.legend_show || (n.legend_show = !0, r.legend ? r.legend.style("visibility", null) : t.initLegend(), !t.state.legendHasRendered && t.updateLegend()), t.removeHiddenLegendIds(e), i(r.legend.selectAll(t.selectorLegends(e)).style("visibility", null)).style("opacity", null);
	},
	hideLegend(e) {
		let t = this, { config: n, $el: { legend: r } } = t;
		n.legend_show && L(e) && (n.legend_show = !1, r?.style("visibility", "hidden")), t.addHiddenLegendIds(e), r?.selectAll(t.selectorLegends(e)).style("opacity", "0").style("visibility", "hidden");
	},
	getLegendItemTextBox(e, t) {
		let n = this, { cache: r, state: i } = n, a, o = Q.legendItemTextBox;
		return e && (a = !i.redrawing && r.get(o) || {}, a[e] || (a[e] = n.getTextRect(t, K.legendItem), r.add(o, a)), a = a[e]), a;
	},
	setLegendItem(e) {
		let t = this, { $el: n, api: r, config: a, state: o } = t, s = o.inputType === "touch", c = t.hasType("gauge"), l = a.boost_useCssRule, u = a.legend_item_interaction, d = u.dblclick ? "dblclick" : "click", f = u || j(a.legend_item_onclick), p = s ? ur(t) : void 0, m = function(e, n) {
			if (!V(a.legend_item_onclick, r, n, !o.hiddenTargetIds.has(n))) {
				let { altKey: t, type: a } = e, s = i(this);
				a === "dblclick" || t ? o.hiddenTargetIds.size && !s.classed(K.legendItemHidden) ? r.show() : (r.hide(), r.show(n)) : (r.toggle(n), s.classed(q.legendItemFocused, !1));
			}
			s && (t.hideTooltip(), t.hideGridFocus?.(!0));
		};
		e.attr("class", function(e) {
			let n = i(this);
			return (!n.empty() && n.attr("class") || "") + t.generateClass(K.legendItem, e);
		}).style("visibility", (e) => t.isLegendToShow(e) ? null : "hidden"), a.interaction_enabled && (l && [
			[`.${K.legendItem}`, "cursor:pointer"],
			[`.${K.legendItem} text`, "pointer-events:none"],
			[`.${K.legendItemPoint} text`, "pointer-events:none"],
			[`.${K.legendItemTile}`, "pointer-events:none"],
			[`.${K.legendItemEvent}`, "fill-opacity:0"]
		].forEach((e) => {
			let [r, i] = e;
			t.setCssRule(!1, r, [i])(n.legend);
		}), e.on(d, f ? function(e, n) {
			s && e.type === "click" && lr(t, n) || m.call(this, e, n);
		} : null), s && d === "click" && f && e.on("touchstart", function(e, n) {
			ar(t, n, e);
		}, p).on("touchmove", (e) => {
			or(t, e);
		}, p).on("touchend", function(e, n) {
			sr(t, n, e) && (cr(t, n), m.call(this, e, n));
		}, p), !s && e.on("mouseout", u || j(a.legend_item_onout) ? function(e, n) {
			V(a.legend_item_onout, r, n, !o.hiddenTargetIds.has(n)) || (i(this).classed(q.legendItemFocused, !1), c && t.undoMarkOverlapped(t, `.${dt.gaugeValue}`), t.api.revert());
		} : null).on("mouseover", u || j(a.legend_item_onover) ? function(e, n) {
			V(a.legend_item_onover, r, n, !o.hiddenTargetIds.has(n)) || (i(this).classed(q.legendItemFocused, !0), c && t.markOverlapped(n, t, `.${dt.gaugeValue}`), !o.transiting && t.isTargetToShow(n) && r.focus(n));
		} : null), !e.empty() && e.on("click mouseout mouseover") && e.style("cursor", t.getStylePropValue("pointer"))), rr(t, e);
	},
	getLegendItemById(e) {
		let t = this, n = t.cache.get(Q.legendItemMap);
		return n && n instanceof Map ? n.get(e) || null : (t.$el.legend?.selectAll(`.${K.legendItem}`).filter((t) => t === e))?.node() || null;
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
		}, f, p, m, h = e.filter((e) => !F(r.data_names[e]) || r.data_names[e] !== null), g = t.withTransition, _ = i.isLegendRight || i.isLegendInset, v = nr.bind(n), y = n.getUpdateLegendPositions(h, u, d, _);
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
		n.generateLegendItem(h, l, y, b, _, v), m = a.select(`.${K.legendBackground} rect`), i.isLegendInset && u.max.width > 0 && m.size() === 0 && (m = a.insert("g", `.${K.legendItem}`).attr("class", K.legendBackground).append("rect")), r.legend_tooltip && a.selectAll("title").data(h).text((e) => v(e, !1)), o(a.selectAll("text").data(h).text((e) => v(e)).each(function(e, t) {
			y(this, e, t);
		}), g).attr("x", b.xText).attr("y", b.yText), o(a.selectAll(`rect.${K.legendItemEvent}`).data(h), g).attr("width", (e) => d.widths[e]).attr("height", (e) => d.heights[e]).attr("x", b.xRect).attr("y", b.yRect), n.updateLegendItemPos(h, g, b), m && o(m, g).attr("height", n.getLegendHeight() - 12).attr("width", u.max.width * (u.step + 1) + 10), i.legendItemWidth = u.max.width, i.legendItemHeight = u.max.height, i.legendStep = u.step;
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
	generateLegendItem(e, n, r, i, a, o) {
		let s = this, { config: c, state: l, $el: { legend: u } } = s, d = c.legend_usePoint, f = c.legend_item_tile_r, p = c.legend_item_tile_type, m = p !== "circle", h = -200, g = u.selectAll(`.${K.legendItem}`).data(e).enter().append("g");
		if (s.setLegendItem(g), c.legend_tooltip && g.append("title").text((e) => e), g.append("text").text((e) => o(e)).each(function(e, t) {
			r(this, e, t);
		}).style("pointer-events", s.getStylePropValue("none")).attr("x", a ? i.xText : h).attr("y", a ? h : i.yText), g.append("rect").attr("class", K.legendItemEvent).style("fill-opacity", s.getStylePropValue("0")).attr("x", a ? i.xRect : h).attr("y", a ? h : i.yRect), d) {
			let e = [], n = s.getValidPointPattern();
			g.append((r) => {
				e.indexOf(r) === -1 && e.push(r);
				let i = n[e.indexOf(r) % n.length];
				return i === "rectangle" && (i = "rect"), k.createElementNS(t.svg, "hasValidPointType" in s && s.hasValidPointType(i) ? i : "use");
			}).attr("class", K.legendItemPoint).style("fill", tr.bind(s)).style("pointer-events", s.getStylePropValue("none")).attr("href", (e, t, n) => {
				let r = n[t].nodeName.toLowerCase(), i = s.getTargetSelectorSuffix(e);
				return r === "use" ? `#${l.datetimeId}-point${i}` : void 0;
			});
		} else g.append(m ? "line" : p).attr("class", K.legendItemTile).style("stroke", tr.bind(s)).style("pointer-events", s.getStylePropValue("none")).call((e) => {
			p === "circle" ? e.attr("r", f).style("fill", tr.bind(s)).attr("cx", a ? i.x2Tile : h).attr("cy", a ? h : i.yTile) : m && e.attr("stroke-width", n.height).attr("x1", a ? i.x1Tile : h).attr("y1", a ? h : i.yTile).attr("x2", a ? i.x2Tile : h).attr("y2", a ? h : i.yTile);
		});
	},
	updateLegendItemPos(e, t, n) {
		let r = this, { config: a, $el: { legend: o }, $T: s } = r, c = a.legend_usePoint, l = a.legend_item_tile_type, u = l !== "circle";
		if (c) {
			let r = o.selectAll(`.${K.legendItemPoint}`).data(e), c = a.legend_item_tile_type !== "circle", l = c ? a.legend_item_tile_width : a.legend_item_tile_r * 2, u = c ? a.legend_item_tile_height : a.legend_item_tile_r * 2, d = l * .75, f = u * .75, p = l / 8, m = u / 8;
			s(r, t).each(function() {
				let e = this.nodeName.toLowerCase(), t = "x", r = "y", a = null, o = null, s = null;
				e === "circle" ? (t = "cx", r = "cy", a = Math.min(d, f) / 2) : e === "rect" && (o = d, s = f);
				let c = i(this).attr("transform", null).attr("x", null).attr("y", null).attr("cx", null).attr("cy", null).attr("r", a).attr("width", o).attr("height", s);
				e === "use" ? c.attr("transform", (e) => `translate(${n.x1Tile(e)} ${n.yTile(e) - u / 2}) scale(${p} ${m})`) : c.attr(t, (e) => n.x1Tile(e) + (l - (o || 0)) / 2).attr(r, (e) => n.yTile(e) - (s || 0) / 2);
			});
		} else s(o.selectAll(`.${K.legendItemTile}`).data(e), t).style("stroke", tr.bind(r)).call((e) => {
			l === "circle" ? e.attr("cx", (e) => {
				let t = n.x2Tile(e);
				return t - (t - n.x1Tile(e)) / 2;
			}).attr("cy", n.yTile) : u && e.attr("x1", n.x1Tile).attr("y1", n.yTile).attr("x2", n.x2Tile).attr("y2", n.yTile);
		});
	}
}, fr = {
	redraw(e = {}) {
		let t = this, { config: n, state: r, $el: i } = t, { main: a, treemap: o } = i;
		r.redrawing = !0, r.redrawGeneration++, (r.dirty.data || r.dirty.visibility || e.initializing) && r.dataGeneration++, (e.initializing || r.dirty.size || r.dirty.data || !r.rendered) && t.cache.remove([Q.svgLeft]);
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
			}), V(n.onrendered, t.api);
			return;
		}
		d.Legend && n.legend_show ? (e.withTransition = !!f, !o && t.updateLegend(t.mapToIds(t.data.targets), e, h)) : d.Dimension && t.updateDimension(!0), n.data_empty_label_text && a.select(`text.${X.text}.${U.empty}`).attr("x", r.width / 2).attr("y", r.height / 2).text(n.data_empty_label_text).style("display", s.length ? "none" : null), t.redrawTitle?.(), r.hasAxis ? (t.axis.redrawAxis(s, d, h, l, u), t.hasGrid?.() && t.updateGrid(), n.regions.length && t.updateRegion?.(), [
			"bar",
			"candlestick",
			"line",
			"area"
		].forEach((e) => {
			let n = H(e);
			(/^(line|area)$/.test(e) && t.hasTypeOf(n) || t.hasType(e)) && g && t[`update${n}`](d.TransitionForExit);
		}), i.text && a.selectAll(`.${_t.selectedCircles}`).filter(t.isBarType.bind(t)).selectAll("circle").remove(), n.interaction_enabled && !l && d.EventRect && (t.redrawEventRect(), t.bindZoomEvent?.())) : (i.arcs && t.redrawArc(f, p, d.Transform), i.radar && t.redrawRadar(), i.polar && t.redrawPolar(), i.funnel && t.redrawFunnel(), o && t.updateTreemap(p)), !r.resizing && !o && (t.hasPointType() || r.hasRadar) ? g && t.updateCircle() : t.hasLegendDefsPoint?.() && t.data.targets.forEach(t.point("create", this)), t.hasDataLabel() && !t.hasArcType(null, ["radar"]) && g && t.updateText(), u && t.updateTypesElements(), t.generateRedrawList(s, l, f, d.Subchart, g), t.updateTooltipOnRedraw(), t.callPluginHook("$redraw", e, f);
	},
	generateRedrawList(e, t, n, r, i = !0) {
		let a = this, { config: s, state: c } = a, l = i ? a.getDrawShape() : c._cachedDrawShape || a.getDrawShape();
		i && (c._cachedDrawShape = l), c.hasAxis && s.subchart_show && a.redrawSubchart(r, n, l);
		let u = t && a.generateFlow({
			targets: e,
			flow: t,
			duration: t.duration,
			shape: l,
			xv: a.xv.bind(a)
		}), d = (n || u) && Yt(), f = a.getRedrawList(l, t, u, d), p = () => {
			u && u(), c.redrawing = !1, c._targetsToShow = null, c._cachedDrawShape = null, V(s.onrendered, a.api);
		};
		if (d && f.length) {
			let e = tn();
			o().duration(n).each(() => {
				f.flatMap((e) => e).forEach((t) => e.add(t));
			}).call(e, p);
		} else c.transiting || p();
		a.mapToIds(a.data.targets).forEach((e) => {
			c.withoutFadeIn[e] = !0;
		});
	},
	getRedrawList(e, t, n, r) {
		let i = this, { config: a, state: { hasAxis: o, hasRadar: s, hasTreemap: c }, $el: { grid: l } } = i, { cx: u, cy: d, xForText: f, yForText: p } = e.pos, m = [];
		if (o) {
			i.redrawGrid && (a.grid_x_lines.length || a.grid_y_lines.length) && m.push(i.redrawGrid(r)), i.redrawRegion && a.regions.length && m.push(i.redrawRegion(r));
			for (let t in e.type) {
				let n = H(t), a = e.type[t];
				(/^(area|line)$/.test(t) && i.hasTypeOf(n) || i.hasType(t)) && m.push(i[`redraw${n}`](a, r));
			}
			!t && l.main && i.updateGridFocus && m.push(i.updateGridFocus());
		}
		return (!i.hasArcType() || s) && R(a.data_labels) && a.data_labels !== !1 && m.push(i.redrawText(f, p, t, r)), (i.hasPointType() || s) && !i.isPointFocusOnly() && i.redrawCircle && m.push(i.redrawCircle(u, d, r, n)), c && m.push(i.redrawTreemap(r)), m;
	},
	updateAndRedraw(e = {}) {
		let t = this, { config: n, state: r } = t, i;
		e.withTransition = Ne(e, "withTransition", !0), e.withTransform = Ne(e, "withTransform", !1), e.withLegend = Ne(e, "withLegend", !1), e.withUpdateXDomain = !0, e.withUpdateOrgXDomain = !0, e.withTransitionForExit = !1, e.withTransitionForTransform = Ne(e, "withTransitionForTransform", e.withTransition), e.withLegend && n.legend_show || (r.hasAxis && (i = t.axis.generateTransitions(e.withTransitionForAxis ? n.transition_duration : 0)), t.updateScales(), t.updateSvgSize(), t.transformAll(e.withTransitionForTransform, i)), t.redraw(e);
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/scale.js
function pr(e = "linear", t, n) {
	let r = {
		linear: x,
		log: p,
		_log: d,
		time: g,
		utc: v
	}[e]();
	return r.type = e, /_?log/.test(e) && r.clamp(!0), r.range([t ?? 0, n ?? 1]);
}
var mr = {
	getXScale(e, t, n, r) {
		let i = this, a = i.state.loading !== "append" && i.scale.zoom || pr(i.axis.getAxisType("x"), e, t);
		return i.getCustomizedXScale(n ? a.domain(n) : a, r);
	},
	getYScale(e, t, n, r, i) {
		let a = this.axis.getAxisType(e);
		if (i && i.type === a) return i.range([t, n]), r && i.domain(r), i;
		let o = pr(a, t, n);
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
			s.x = x().rangeRound([e.left, c.width - e.right]), s.y = x().rangeRound([e.top, c.height - e.bottom]);
		} else n.updateArc?.();
	},
	xx(e) {
		let { config: t, scale: { x: n, zoom: r } } = this, i = t.zoom_enabled && r ? r : n;
		return e ? i(A(e.x) ? e.x : e) : null;
	},
	xv(e) {
		let t = this, { axis: n, config: r, scale: { x: i, zoom: a } } = t, o = r.zoom_enabled && a ? a : i, s = t.getBaseValue(e);
		return n.isTimeSeries() ? s = Ye.call(t, s) : n.isCategorized() && M(s) && (s = r.axis_x_categories.indexOf(s)), o(s);
	},
	yv(e) {
		let t = this, { scale: { y: n, y2: r } } = t;
		return (e.axis && e.axis === "y2" ? r : n)(t.getBaseValue(e));
	},
	subxx(e) {
		return e ? this.scale.subX(e.x) : null;
	}
}, hr = {
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
		let t = `offset${H(e)}`, n = this.$el.chart.node(), r = 0;
		for (; r < 30 && n && n.tagName !== "BODY";) {
			try {
				r = $(n, !0)[e];
			} catch {
				t in n && (r = n[t]);
			}
			n = n.parentNode;
		}
		let i = k.body[t];
		return r > i && (r = i), r;
	},
	getParentHeight() {
		let e = this.$el.chart.style("height"), t = 0;
		return e && (t = /px$/.test(e) ? parseInt(e, 10) : this.getParentRectValue("height")), t;
	},
	getSvgLeft(e) {
		let t = this, { cache: n, config: r, state: { hasAxis: i }, $el: a } = t;
		if (e) {
			let e = n.get(Q.svgLeft);
			if (e !== null) return e;
		}
		let o = r.axis_rotated, s = o || !o && !r.axis_y_inner, c = o ? W.axisX : W.axisY, l = a.main.select(`.${c}`).node(), u = i && r[`axis_${o ? "x" : "y"}_label`], d = i && (M(u) || M(u.text) || /^inner-/.test(u?.position)) ? a.main.select(`.${c}-label`) : null, f = d && !d.empty() ? d.node() : null, p = !e, m = {
			label: f ? $(f, p) : null,
			leftAxis: l && s ? $(l, p) : null,
			chart: $(a.chart.node(), p)
		}, h = m.label?.left ?? 0, g = m.leftAxis ?? { right: 0 }, _ = m.chart.left + h, v = t.hasArcType(), y = g.right - _ - (v ? 0 : t.getCurrentPaddingByDirection("left", e)), b = y > 0 ? y : 0;
		return n.add(Q.svgLeft, b), b;
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
			let t = s.select(`.${vt.brush} .overlay`), r = {
				width: 0,
				height: 0
			};
			t.size() && (r.width = +t.attr("width"), r.height = +t.attr("height")), s.selectAll([`#${n.id}`, `#${n.idGrid}`]).select("rect").attr("width", a).attr("height", o), s.select(`#${n.idXAxis}`).select("rect").call(e.setXAxisClipPath.bind(e)), s.select(`#${n.idYAxis}`).select("rect").call(e.setYAxisClipPath.bind(e)), n.idSubchart && s.select(`#${n.idSubchart}`).select("rect").attr("width", a).attr("height", r.height);
		}
	},
	getCurrentPaddingByDirection(e, t = !1, n = !1) {
		let r = this, { config: i, $el: a, state: { hasAxis: o, isCanvasMode: s } } = r, c = i.axis_rotated, l = i.padding?.mode === "fit", u = N(i[`padding_${e}`]) ? i[`padding_${e}`] : void 0, d = o ? {
			top: c ? "y2" : null,
			bottom: c ? "y" : "x",
			left: c ? "x" : "y",
			right: c ? null : "y2"
		}[e] : null, f = /^(left|right)$/.test(e), p = d && i[`axis_${d}_inner`], m = d && i[`axis_${d}_show`], h = d ? i[`axis_${d}_axes`].length : 0, g = d ? f ? r.getAxisWidthByAxisId(d, t) : r.getHorizontalAxisHeight(d) : 0, _ = 0;
		!l && f && (g = ae(g));
		let v = o && f && (p || P(u) && !m) ? 0 : l ? (m ? g : 0) + (u ?? 0) : P(u) ? g : u;
		return f && o ? (d && (l || p) && i[`axis_${d}_label`].text && (v += r.axis.getAxisLabelPosition(d).isOuter ? 20 : 0), e === "right" ? (v += c ? !l && P(u) ? 10 : 2 : !m || p ? l ? 2 : 1 : 0, v += n ? r.axis.getXAxisTickTextY2Overflow(20) : 0) : e === "left" && c && P(u) && (v = i.axis_x_show ? l ? g : Math.max(g, 40) : 1)) : e === "top" ? ((a.title && a.title.node() || s && i.title_text) && (v += r.getTitlePadding()), _ = c && !p ? h : 0) : e === "bottom" && o && c && !m && (v += 1), v + g * h - _;
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
		let { config: t } = this, n = N(e), r = n ? 0 : {};
		return t.padding === !1 ? !n && Object.keys(e).forEach((n) => {
			r[n] = !L(t.data_labels) && t.data_labels !== !1 && n === "top" ? e[n] : 0;
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
			let e = t.hasType("gauge"), i = n.legend_show && r.isLegendRight, a = (r.hasRadar && t.cache.get(Q.radarTextWidth)) ?? 0;
			r.arcWidth = r.width - (i ? u.width + 10 : 0) - a, r.arcHeight = r.height - (i && !e ? 0 : 10), n.arc_rangeText_values?.length && (e ? (r.arcWidth -= 25, r.arcHeight -= 10, r.margin.left += 10) : (r.arcHeight -= 20, r.margin.top += 10)), e && !n.gauge_fullCircle && (r.arcHeight += r.height - t.getPaddingBottomForGauge()), t.updateRadius?.();
		}
		r.isLegendRight && o && (r.margin3.left = r.arcWidth / 2 + r.radiusExpanded * 1.1);
	}
}, gr = {
	setCssRule(e, t, n, r) {
		let i = this, { config: a, state: { cssRule: o, style: s } } = i;
		return a.boost_useCssRule ? (a) => {
			a.each((a) => {
				let c = r && r?.call(i, a), l = `${e ? `.${Y.shapes + i.getTargetSelectorSuffix(a.id)}` : ""}${t}`;
				t in o && s.sheet.deleteRule(o[l]), i.state.cssRule[l] = Ht(s, l, n.filter(Boolean).map((e) => M(c) && e.indexOf(":") === -1 ? `${e}: ${c}` : e || ""));
			});
		} : () => {};
	},
	getStylePropValue(e) {
		let { config: { boost_useCssRule: t } } = this;
		return t ? null : j(e) ? e.bind(this) : e;
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/text.util.js
function _r(e) {
	let t = "middle";
	return e > 0 && e <= 170 ? t = "end" : e > 190 && e <= 360 && (t = "start"), t;
}
function vr(e, t, n, r, i) {
	let a = this, { value: o } = e, s = a.isCandlestickType(e), c = N(o) && o < 0 || s && !a.getCandlestickData(e)?._isUp, { x: l, y: u } = t;
	return r ? n === "start" ? (l += c ? 0 : 8, u += 4) : n === "middle" ? (l += 8, u -= 8) : n === "end" && (c && (l -= 8), u += 4) : (n === "start" ? (l += 4, c && (u += 16)) : n === "middle" ? u -= 8 : n === "end" && (l -= 4, c && (u += 16)), i && (u += c ? -17 : s ? 13 : 7)), {
		x: l,
		y: u
	};
}
function yr(e, t) {
	let n = this.config.data_labels_position, { id: r, index: i, value: a } = e;
	return (j(n) ? n.bind(this.api)(t, a, r, i, this.$el.text) : (r in n ? n[r] : n)[t]) ?? 0;
}
function br(e, t, n) {
	let { config: r, $T: a } = this, o = r.axis_rotated, { border: { padding: s = "3 5", radius: c = 10, stroke: l = "#000", strokeWidth: u = 1, fill: d = "none" } } = r.data_labels, f = Xe(s), p = r.data_labels.border !== !0, m = Vt(e), h = i(e.previousElementSibling);
	(h.empty() || h.node()?.tagName !== "rect" || !h.attr("class")?.includes(n)) && (h = i(e.parentNode).insert("rect", () => e).attr("class", `${X.textBorderRect} ${n}`).attr("width", m.width + (p ? f.left + f.right : 0)).attr("height", m.height + (p ? f.top + f.bottom : 0)), p && h.style("fill", d).style("stroke", l).style("stroke-width", `${u}px`).attr("rx", c).attr("ry", c)), a(h).attr("x", t.x - (p ? f.left : 0) - (o ? 0 : m.width / 2)).attr("y", t.y - (p ? f.top : 0) - m.height / 4 * 3.2);
}
function xr(e = 0, t) {
	let { config: n } = this;
	return e >= (n[`${t}_label_threshold`] || 0);
}
function Sr() {
	let e = this, { $el: { text: t }, config: n } = e;
	(e.state.arcWidth ? e.getArcLabelConfig("image") : n.data_labels.image) && t.filter(function() {
		let e = this.previousElementSibling;
		return !e || e.tagName !== "image" || !e.classList.contains(X.textLabelImage);
	}).each(function(t) {
		let n = Cr.call(e, t);
		if (!n) return;
		let { url: r, width: a, height: o, pos: s } = n;
		r && i(this.parentNode)?.insert("image", `${this.getAttribute("class")?.replace(/(?:^(.)|\s)/g, ".$1") ?? "text"}`).style("opacity", "0").attr("href", (e) => Je(r, { ID: "id" in e ? e.id : e.data.id })).attr("class", X.textLabelImage).style("pointer-events", "none").attr("width", a).attr("height", o).attr("transform", s ? `translate(${s.x ?? 0} ${s.y ?? 0})` : null);
	});
}
function Cr(e) {
	let t = this, { config: n, state: r } = t, i = r.arcWidth ? t.getArcLabelConfig("image") : n.data_labels.image;
	if (j(i)) return i.call(t.api, e.value, e.id, e.index) ?? {
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
function wr(e, t, n) {
	let r = this, { config: a, state: { arcWidth: o, hasTreemap: s } } = r, c = a.axis_rotated, l = i(e.previousElementSibling), u = (e) => {
		let t = e.style.opacity !== "0" && e.style.fillOpacity !== "0";
		return (o ? e.textContent : t) && this.previousElementSibling?.tagName !== "image";
	};
	if (!l.empty() && l.node()?.tagName === "image") {
		let i = n || $(e), a = l.attr("width") / 2, o = l.attr("height") / 2, d = t.x - a, f = t.y - o - i.height / 2;
		c ? t.x += a : (s && (d = -a, f = -(o * 2 + i.height)), r.hasType("pie") || r.hasType("polar") || (t.y += o)), r.$T(l).style("opacity", u(e) ? null : "0").attr("x", d).attr("y", f);
	}
}
function Tr(e) {
	return $e(e, (e) => e, (e) => Vt(e, !0));
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/text.js
var Er = {
	opacityForText(e) {
		let t = this;
		return t.isBarType(e) && !xr.call(t, Math.abs(t.getRatio("bar", e)), "bar") ? "0" : t.hasDataLabel() ? null : "0";
	},
	initText() {
		let { $el: e } = this;
		e.main.select(`.${U.chart}`).append("g").attr("class", X.chartTexts).style("pointer-events", e.funnel || e.treemap ? "none" : null);
	},
	updateTargetsForText(e) {
		let t = this, n = t.getChartClass("Text"), r = t.getClass("texts", "id"), i = t.classFocus.bind(t);
		t.$el.main.select(`.${X.chartTexts}`).selectAll(`.${X.chartText}`).data(t.filterNullish(e)).attr("class", (e) => `${n(e)}${i(e)}`.trim()).enter().append("g").style("opacity", "0").attr("class", n).call(t.setCssRule(!0, ` .${X.text}`, ["fill", "pointer-events:none"], t.updateTextColor)).append("g").attr("class", r);
	},
	updateText() {
		let e = this, { $el: t, $T: n, config: r, axis: a } = e, o = e.getClass("text", "index"), s = r.data_labels.centered, c = t.main.selectAll(`.${X.texts}`).selectAll(`.${X.text}`).data(e.labelishData.bind(e));
		n(c.exit()).style("fill-opacity", "0").remove(), t.text = c.enter().append("text").merge(c).attr("class", o).attr("text-anchor", (t) => {
			let n = r[`axis_${a?.getId(t.id)}_inverted`] ? t.value > 0 : t.value < 0;
			if (e.isCandlestickType(t)) n = !e.getCandlestickData(t)?._isUp;
			else if (e.isTreemapType(t)) return s ? "middle" : "start";
			return r.axis_rotated ? n ? "end" : "start" : "middle";
		}).style("fill", e.getStylePropValue(e.updateTextColor)).style("fill-opacity", "0").each(function(t, n, r) {
			let a = i(this), { value: o } = t;
			if (e.isBubbleZType(t)) o = e.getBubbleZData(o, "z");
			else if (e.isCandlestickType(t)) {
				let n = e.getCandlestickData(t);
				n && (o = n.close);
			}
			o = e.isTreemapType(t) ? e.treemapDataLabelFormat(t)(a) : e.dataLabelFormat(t.id)(o, t.id, t.index, r), N(o) ? this.textContent = o : Rt(a, o, void 0, !0);
		}), Sr.call(e);
	},
	updateTextColor(e) {
		let t = this, { config: n } = t, r = n.data_labels_colors, i = t.isArcType(e) && !t.isRadarType(e) || t.isFunnelType(e) || t.isTreemapType(e) ? null : t.color(e), a;
		if (M(r)) a = r;
		else if (B(r)) {
			let { id: t } = e.data || e;
			a = r[t];
		} else j(r) && (a = r.bind(t.api)(i, e));
		if (t.isCandlestickType(e) && !j(r) && !t.getCandlestickData(e)?._isUp) {
			let t = n.candlestick_color_down;
			a = B(t) ? t[e.id] : t;
		}
		return a || i;
	},
	updateTextBGColor(e, t) {
		let n = this, { $el: { defs: r } } = n, i = "";
		if (t) {
			let a = M(t) ? "" : n.getTargetSelectorSuffix("id" in e ? e.id : e.data.id), o = r.select(["filter[id*='labels-bg", "']"].join(a));
			if (o.size() && (i = `url(#${o.attr("id")})`), j(t)) {
				n.generateTextBGColorFilter(t);
				let r = n.color(e), a = t.bind(n.api)(r, e);
				a ? o.select("feFlood").attr("flood-color", a) : i = "";
			}
		}
		return i || null;
	},
	redrawText(e, t, n, r) {
		let i = this, { $T: a, axis: o, config: s, state: { hasTreemap: c } } = i, l = Ke(!0), u = s.axis_rotated, d = s.data_labels.rotate, f = _r(d), p = d ? `rotate(${d})` : "", m = i.$el.text.style("fill", i.getStylePropValue(i.updateTextColor)).attr("filter", (e) => i.updateTextBGColor.bind(i)(e, s.data_labels_backgroundColors)).style("fill-opacity", n ? 0 : i.opacityForText.bind(i)), h = /* @__PURE__ */ new Map(), g = [];
		return m.each(function(e) {
			let t = this;
			h.set(t, { rect: $(t) }), s.data_labels.centered && (i.isBarType(e) || i.isTreemapType(e)) && g.push(t);
		}), g.length > 0 && Tr(g).forEach((e, t) => {
			let n = h.get(t);
			n && (n.bbox = e);
		}), m.each(function(n, m) {
			let g = h.get(this), _ = a(c && this.childElementCount ? this.parentNode : this, !!(r && (this.getAttribute("x") || this.getAttribute("transform"))), l), v = s[`axis_${o?.getId(n.id)}_inverted`], y = {
				x: e.call(this, n, m, g),
				y: t.call(this, n, m, g)
			};
			d && (y = vr.bind(i)(n, y, f, u, v), _.attr("text-anchor", f)), wr.call(i, this, y, g?.rect), this.childElementCount || d ? _.attr("transform", `translate(${y.x} ${y.y}) ${p}`) : _.attr("x", y.x).attr("y", y.y), s.data_labels.border && br.call(i, _.node(), y, `${X.textBorderRect}-${m}`);
		}), !0;
	},
	getTextRect(e, t) {
		let n = this, r, a, o;
		Array.isArray(e) ? r = `${Q.textRect}-${e.join("_")}` : (a = e.node?.() ?? e, /text/i.test(a.tagName) || (a = a.querySelector("text")), o = a.textContent, r = `${Q.textRect}-${o.replace(/\W/g, "_")}`);
		let s = n.cache.get(r) || [];
		return s.length === 0 && ((n.$el.svg || n.$el.chart.select("svg")).selectAll(`.${U.dummy}`).data(o ? [o] : e).enter().append("text").style("visibility", "hidden").style("font", a ? i(a).style("font") : null).classed(t || U.dummy, !0).text((e) => e).each(function(e, t) {
			s[t] = $(this);
		}).remove(), n.cache.add(r, s)), s.length > 1 ? s : s[0];
	},
	generateXYForText(e, t) {
		let n = this, { state: { hasRadar: r, hasFunnel: i, hasTreemap: a } } = n, o = Object.keys(e), s = {}, c = t ? n.getXForText : n.getYForText;
		return i && o.push("funnel"), r && o.push("radar"), a && o.push("treemap"), o.forEach((t) => {
			s[t] = n[`generateGet${H(t)}Points`](e[t], !1);
		}), function(e, t, r) {
			let i = n.isAreaType(e) && "area" || n.isBarType(e) && "bar" || n.isCandlestickType(e) && "candlestick" || n.isFunnelType(e) && "funnel" || n.isRadarType(e) && "radar" || n.isTreemapType(e) && "treemap" || "line";
			return c.call(n, s[i](e, t), e, this, r);
		};
	},
	getCenteredTextPos(e, t, n, r, i) {
		let a = this, { config: o } = a, s = o.axis_rotated, c = a.isBarType(e), l = a.isTreemapType(e);
		if (o.data_labels.centered && (c || l)) {
			let o = i?.bbox || Vt(n);
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
		else return Kt(n, "x");
		else if (c) l += a.data_labels.centered ? 0 : 5;
		else if (o) {
			let n = a[`axis_${i.axis.getId(t.id)}_inverted`], r = i.isBarType(t) ? 4 : 6, o = t.value;
			l = e[2][1], l += r * ((n ? o > 0 : o < 0) ? -1 : 1);
		} else l = i.hasType("bar") ? (e[2][0] + e[0][0]) / 2 : l;
		return (o || c || s) && (l += i.getCenteredTextPos(t, e, n, "x", r)), l + yr.call(this, t, "x");
	},
	getYForText(e, t, n, r) {
		let i = this, { axis: a, config: o, state: s } = i, c = o.axis_rotated, l = o[`axis_${a?.getId(t.id)}_inverted`], u = i.isBarType(t), d = i.isFunnelType(t), f = i.isTreemapType(t), p = o.point_r, m = r?.rect || $(n), { value: h } = t, g = 3, _;
		if (i.isCandlestickType(t)) h = i.getCandlestickData(t), c ? (_ = e[0][0], _ += (e[1][0] - _) / 2 + g) : (_ = h && h._isUp ? e[2][2] - g : e[2][1] + g * 4, l && (_ += 15 * (h._isUp ? 1 : -1)));
		else if (d) if (e) _ = (e[2]?.[1] ?? e[0][1]) + m.height / 2 - 3;
		else return Kt(n, "y");
		else if (f) _ = e[0][1] + (o.data_labels.centered ? 0 : m.height + 5);
		else if (c) _ = (e[0][0] + e[2][0] + m.height * .6) / 2;
		else if (_ = e[2][1], N(p) && p > 5 && (i.isLineType(t) || i.isScatterType(t)) && (g += o.point_r / 2.3), h < 0 || h === 0 && !s.hasPositiveValue && s.hasNegativeValue) _ += l ? u ? -3 : -5 : m.height + (u ? -g : g);
		else {
			let e = -g * 2;
			u ? e = -g : i.isBubbleType(t) && (e = g), l && (e = u ? 10 : 15), _ += e;
		}
		return (!c || f) && (_ += i.getCenteredTextPos(t, e, n, "y", r)), _ + yr.call(this, t, "y");
	},
	markOverlapped(e, t, n) {
		let r = t.$el.arcs.selectAll(n), a = r.filter((t) => t.data.id !== e), o = r.filter((t) => t.data.id === e), s = Gt(o.node()), c = (e, t) => Math.sqrt(e * e + t * t);
		o.node() && a.each(function() {
			let e = Gt(this), t = i(this), n = c(s.e, s.f) > c(e.e, e.f) ? o : t, r = Math.ceil(Math.abs(s.e - e.e)) < Math.ceil(n.node().getComputedTextLength()), a = Math.ceil(Math.abs(s.f - e.f)) < parseInt(o.style("font-size"), 10);
			t.classed(X.TextOverlapping, r && a);
		});
	},
	undoMarkOverlapped(e, t) {
		e.$el.arcs.selectAll(t).each(function() {
			rt([this, this.previousSibling]).classed(X.TextOverlapping, !1);
		});
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/internals/title.js
function Dr(e = "left", t) {
	let n = N(t);
	return e.includes("center") ? n ? t / 2 : "middle" : e.includes("right") ? n ? t : "end" : n ? 0 : "start";
}
function Or(e) {
	let { config: t, $el: n } = e, r = e.canvasTheme?.style?.title?.font || e.canvasTheme?.style?.label?.font || "14px sans-serif", i = n.chart?.node?.(), a = i?.ownerDocument;
	if (i && a && t.title_text) {
		let e = a.createElementNS("http://www.w3.org/2000/svg", "svg"), n = a.createElementNS("http://www.w3.org/2000/svg", "text");
		e.style.cssText = "position:absolute;visibility:hidden;left:-10000px;top:-10000px;", n.setAttribute("class", X.title), n.style.font = r, n.textContent = String(t.title_text), e.appendChild(n), i.appendChild(e);
		let o = $(n).height;
		if (e.remove(), o) return o;
	}
	return t.title_text ? parseFloat(r) || 14 : 0;
}
var kr = {
	initTitle() {
		let { config: e, $el: t } = this;
		e.title_text && (t.title = t.svg.append("g"), Rt(t.title.append("text").style("text-anchor", Dr(e.title_position)).attr("class", X.title), e.title_text, [.3, 1.5]));
	},
	redrawTitle() {
		let e = this, { config: t, state: { current: n }, $el: { title: r } } = e;
		if (r) {
			let i = Dr(t.title_position, n.width), a = (t.title_padding.top || 0) + e.getTextRect(e.$el.title, X.title).height;
			r.attr("transform", `translate(${i}, ${a})`);
		}
	},
	getCanvasTitleHeight() {
		return Or(this);
	},
	getTitlePadding() {
		let e = this, { $el: { title: t }, config: n, state: r } = e, i = n.title_padding.top || 0, a = n.title_padding.bottom || 0;
		if (r.isCanvasMode && n.title_text) return i + e.getCanvasTitleHeight() + a;
		if (!t?.node()) return i + a;
		let o = t.node(), s = Kt(o, "y");
		if (s) {
			let e = Vt(o);
			return s + e.y + e.height + a;
		}
		return i + e.getTextRect(t, X.title).height + a;
	}
}, Ar = /(\r?\n|\t)/g, jr = /{{(.*)}}/, Mr = {
	initTooltip() {
		let e = this, { config: t, $el: n } = e;
		n.tooltip = i(t.tooltip_contents.bindto), n.tooltip.empty() && (n.tooltip = n.chart.append("div").attr("class", yt.tooltipContainer).style("position", "absolute").style("pointer-events", "none").style("display", "none")), e.bindTooltipResizePos();
	},
	initShowTooltip() {
		let e = this, { config: t, $el: n, state: { hasAxis: r, hasRadar: i } } = e;
		if (t.tooltip_init_show) {
			let a = !(r || i);
			e.axis?.isTimeSeries() && M(t.tooltip_init_x) && (t.tooltip_init_x = Ye.call(e, t.tooltip_init_x)), e.api.tooltip.show({ data: { [a ? "index" : "x"]: t.tooltip_init_x } });
			let o = t.tooltip_init_position;
			if (!t.tooltip_contents.bindto && !L(o)) {
				let { top: e = 0, left: t = 50 } = o;
				n.tooltip.style("top", M(e) ? e : `${e}px`).style("left", M(t) ? t : `${t}px`).style("display", null);
			}
		}
	},
	getTooltipHTML(...e) {
		let t = this, { api: n, config: r } = t;
		return je(j(r.tooltip_contents) ? r.tooltip_contents.bind(n)(...e) : t.getTooltipContent(...e));
	},
	getTooltipContent(e, t, n, r) {
		let i = this, { api: a, config: o, state: s, $el: c } = i, l = o.tooltip_format_title, u = o.tooltip_format_name, d = o.tooltip_format_value, f = j(l) ? l.bind(a) : t, p = j(u) ? u.bind(a) : ((e) => e), m = j(d) ? d.bind(a) : null, h = (e, t, r, a) => {
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
		} else j(g) && e.sort(g.bind(a));
		let S = i.getTooltipContentTemplate(b), C = e.length, w, T, E, D, O;
		for (O = 0; O < C; O++) {
			T = e[O];
			let t = T && _(T);
			if (!(!T || !(t || t === 0))) {
				if (P(w)) {
					let e = (s.hasAxis || s.hasRadar) && f(T.x);
					w = Je(S[0], {
						CLASS_TOOLTIP: yt.tooltip,
						TITLE: A(e) ? b ? e : `<tr><th colspan="2">${e}</th></tr>` : ""
					});
				}
				if (!T.ratio && c.arcs && (E = ["arc", i.$el.arcs.select(`path.${it.arc}-${T.id}`).data()[0]], T.ratio = i.getRatio(...E)), E = [
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
						CLASS_TOOLTIP_NAME: yt.tooltipName + i.getTargetSelectorSuffix(T.id),
						COLOR: b || !i.patterns ? t : `<svg><rect style="fill:${t}" width="10" height="10"></rect></svg>`,
						NAME: e,
						VALUE: D
					};
					if (b && B(y.text)) {
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
			</tbody></table>`).replace(Ar, "").split(jr);
	},
	setTooltipPosition(e, t) {
		let n = this, { config: r, scale: i, state: a, $el: { eventRect: o, tooltip: s, svg: c } } = n, { bindto: l } = r.tooltip_contents, u = r.axis_rotated, d = s?.datum();
		if (!l && d) {
			let l = e ?? d.data, [f, p] = Bt(a.event, t ?? o?.node()), m = {
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
			let { width: h = 0, height: g = 0 } = d, _ = r.tooltip_position?.bind(n.api)(l, h, g, o?.node(), m) ?? (c && qt(c) ? n.getTooltipPositionViewBox.bind(n)(h, g, m) : n.getTooltipPosition.bind(n)(h, g, m));
			["top", "left"].forEach((e) => {
				let t = _[e];
				s.style(e, `${t}px`), e === "left" && !d.xPosInPercent && (d.xPosInPercent = t / a.current.width * 100);
			});
		}
	},
	getTooltipPositionViewBox(e, t, n) {
		let r = this, { $el: { eventRect: i, svg: a }, config: o, state: s } = r, c = o.axis_rotated, l = r.hasArcType() || s.hasFunnel || s.hasTreemap, u = (l ? a : i)?.node() ?? s.event.target, { x: d, y: f } = n;
		s.hasAxis && (d = c ? d : n.xAxis, f = c ? n.xAxis : f);
		let p = Wt(u, d, f, !1), m = $(u), h = Wt(u, 20, 0, !1).x, g = p.y, _ = p.x + e / 2 + h;
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
			t > 0 && (s += ","), s += `${r?.index}|${r?.id}|${r?.value}`, !c && r && (c = r), r && A(n.getBaseValue(r)) ? (o++, a?.push(r)) : a ||= e.slice(0, t);
		}
		if (o === 0 || !c) return;
		let l = i.datum(), u = a;
		if (!l || l.current !== s) {
			let { index: t, x: a } = c;
			u ||= e.slice(), V(r.tooltip_onshow, n.api, e), i.html(n.getTooltipHTML(e, n.axis ? n.axis.getXAxisTickFormat() : n.categoryName.bind(n), n.getDefaultValueFormat(), n.color)).style("display", null).style("visibility", null), i.datum({
				index: t,
				x: a,
				current: s,
				data: e,
				width: i.property("offsetWidth"),
				height: i.property("offsetHeight")
			}), V(r.tooltip_onshown, n.api, e), n._handleLinkedCharts(!0, t);
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
			V(n.tooltip_onhide, t, e), r.style("display", "none").datum(null), V(n.tooltip_onhidden, t, e);
		}
	},
	_handleLinkedCharts(e, t) {
		let n = this, { charts: r, config: i, state: { event: a } } = n;
		if (a?.isTrusted && i.tooltip_linked && r.length > 1) {
			let a = i.tooltip_linked_name;
			r.filter((e) => e !== n.api).forEach((n) => {
				let { config: r, $el: i, state: o } = n.internal, s = r.tooltip_linked, c = r.tooltip_linked_name, l = k.body.contains(i.chart.node());
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
		let n = this, { config: r, $el: { eventRect: a, svg: o, tooltip: s }, state: { event: c, hasAxis: l, hasRadar: u, hasTreemap: d } } = n;
		if (!n.state.isCanvasMode && s?.style("display") === "block" && c) {
			let s = e ?? (u ? o : a)?.node();
			if (l || u) if (n.isMultipleX()) n.selectRectForMultipleXs(s, !1);
			else {
				let e = t ?? n.getDataIndexFromEvent(c);
				t === -1 ? n.api.tooltip.hide() : (n.selectRectForSingle(s, e), n.setExpand(e, null, !0));
			}
			else {
				let { clientX: e, clientY: t } = c;
				setTimeout(() => {
					let r = [e, t].every(Number.isFinite) && k.elementFromPoint(e, t), a = r && i(r).datum();
					if (a) {
						let e = n.hasArcType() ? n.convertToArcData(n.updateAngle(a)) : a?.data;
						d && (r = o.node()), e && n.showTooltip([e], r);
					} else n.api.tooltip.hide();
				}, r.transition_duration);
			}
		}
	}
}, Nr = {
	getTranslate(e, t = 0) {
		let n = this, { config: r, state: i } = n, a = r.axis_rotated, o = 0, s, c;
		if (t && /^(x|y2?)$/.test(e) && (o = n.getAxisSize(e) * t), e === "main") s = oe(i.margin.left), c = oe(i.margin.top);
		else if (e === "context") s = oe(i.margin2.left), c = oe(i.margin2.top);
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
		let n = this, { $el: { main: r }, $T: i } = n, a = t?.axisX ? t.axisX : i(r.select(`.${W.axisX}`), e), o = t?.axisY ? t.axisY : i(r.select(`.${W.axisY}`), e), s = t?.axisY2 ? t.axisY2 : i(r.select(`.${W.axisY2}`), e);
		i(r, e).attr("transform", n.getTranslate("main")), a.attr("transform", n.getTranslate("x")), o.attr("transform", n.getTranslate("y")), s.attr("transform", n.getTranslate("y2")), r.select(`.${it.chartArcs}`).attr("transform", n.getTranslate("arc"));
	},
	transformAll(e, t) {
		let n = this, { config: r, state: { hasAxis: i, hasFunnel: a, hasTreemap: o, isCanvasMode: s }, $el: c } = n;
		s || (!a && !o && n.transformMain(e, t), i && r.subchart_show && n.transformContext(e, t), c.legend && n.transformLegend(e));
	}
}, Pr = /* @__PURE__ */ new Set([
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
]), Fr = {
	isValidChartType(e) {
		return !!(e && Object.values(C).indexOf(e) > -1);
	},
	setTargetType(e, t) {
		let n = this, { config: r, state: { withoutFadeIn: i } } = n;
		n.mapToTargetIds(e).forEach((e) => {
			i[e] = t === r.data_types[e], r.data_types[e] = t;
		}), e || (r.data_type = t);
	},
	updateTypesElements() {
		let e = this, { state: { current: t } } = e;
		Object.keys(C).forEach((n) => {
			let r = C[n], i = e.hasType(r, null, !0), a = t.types.indexOf(r);
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
		return e in T && !T[e].filter((e) => n.indexOf(e) === -1).every((e) => !this.hasType(e, t));
	},
	isTypeOf(e, t) {
		let n = M(e) ? e : e.id, r = this.config && (this.config.data_types?.[n] || this.config.data_type);
		return z(t) ? t.indexOf(r) >= 0 : r === t;
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
		let t = M(e) ? e : e.id;
		return !this.config.data_types[t] || this.isTypeOf(t, T.Line);
	},
	isStepType(e) {
		return this.isTypeOf(e, T.Step);
	},
	isSplineType(e) {
		return this.isTypeOf(e, T.Spline);
	},
	isAreaType(e) {
		return this.isTypeOf(e, T.Area);
	},
	isAreaRangeType(e) {
		return this.isTypeOf(e, T.AreaRange);
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
		return e?.tagName === "circle" || t.point_type === "circle" && (!n || z(n) && n.length === 0);
	},
	lineData(e) {
		return this.isLineType(e) ? [e] : [];
	},
	arcData(e) {
		return this.isArcType(e.data) ? [e] : [];
	},
	labelishData(e) {
		return this.isBarType(e) || this.isLineType(e) || this.isScatterType(e) || this.isBubbleType(e) || this.isCandlestickType(e) || this.isFunnelType(e) || this.isRadarType(e) || this.isTreemapType(e) ? e.values.filter((e) => N(e.value) || !!e.value) : [];
	},
	barLineBubbleData(e) {
		return this.isBarType(e) || this.isLineType(e) || this.isBubbleType(e) ? e.values : [];
	},
	isInterpolationType(e) {
		return Pr.has(e);
	}
};
//#endregion
//#region node_modules/d3-shape/src/curve/linear.js
function Ir(e) {
	this._context = e;
}
Ir.prototype = {
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
function Lr(e) {
	return new Ir(e);
}
//#endregion
//#region node_modules/d3-shape/src/noop.js
function Rr() {}
//#endregion
//#region node_modules/d3-shape/src/curve/basis.js
function zr(e, t, n) {
	e._context.bezierCurveTo((2 * e._x0 + e._x1) / 3, (2 * e._y0 + e._y1) / 3, (e._x0 + 2 * e._x1) / 3, (e._y0 + 2 * e._y1) / 3, (e._x0 + 4 * e._x1 + t) / 6, (e._y0 + 4 * e._y1 + n) / 6);
}
function Br(e) {
	this._context = e;
}
Br.prototype = {
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
			case 3: zr(this, this._x1, this._y1);
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
			default: zr(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function Vr(e) {
	return new Br(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/basisClosed.js
function Hr(e) {
	this._context = e;
}
Hr.prototype = {
	areaStart: Rr,
	areaEnd: Rr,
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
			default: zr(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function Ur(e) {
	return new Hr(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/basisOpen.js
function Wr(e) {
	this._context = e;
}
Wr.prototype = {
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
			default: zr(this, e, t);
		}
		this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
	}
};
function Gr(e) {
	return new Wr(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/bundle.js
function Kr(e, t) {
	this._basis = new Br(e), this._beta = t;
}
Kr.prototype = {
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
var qr = (function e(t) {
	function n(e) {
		return t === 1 ? new Br(e) : new Kr(e, t);
	}
	return n.beta = function(t) {
		return e(+t);
	}, n;
})(.85);
//#endregion
//#region node_modules/d3-shape/src/curve/cardinal.js
function Jr(e, t, n) {
	e._context.bezierCurveTo(e._x1 + e._k * (e._x2 - e._x0), e._y1 + e._k * (e._y2 - e._y0), e._x2 + e._k * (e._x1 - t), e._y2 + e._k * (e._y1 - n), e._x2, e._y2);
}
function Yr(e, t) {
	this._context = e, this._k = (1 - t) / 6;
}
Yr.prototype = {
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
			case 3: Jr(this, this._x1, this._y1);
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
			default: Jr(this, e, t);
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var Xr = (function e(t) {
	function n(e) {
		return new Yr(e, t);
	}
	return n.tension = function(t) {
		return e(+t);
	}, n;
})(0);
//#endregion
//#region node_modules/d3-shape/src/curve/cardinalClosed.js
function Zr(e, t) {
	this._context = e, this._k = (1 - t) / 6;
}
Zr.prototype = {
	areaStart: Rr,
	areaEnd: Rr,
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
			default: Jr(this, e, t);
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var Qr = (function e(t) {
	function n(e) {
		return new Zr(e, t);
	}
	return n.tension = function(t) {
		return e(+t);
	}, n;
})(0);
//#endregion
//#region node_modules/d3-shape/src/curve/cardinalOpen.js
function $r(e, t) {
	this._context = e, this._k = (1 - t) / 6;
}
$r.prototype = {
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
			default: Jr(this, e, t);
		}
		this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var ei = (function e(t) {
	function n(e) {
		return new $r(e, t);
	}
	return n.tension = function(t) {
		return e(+t);
	}, n;
})(0);
//#endregion
//#region node_modules/d3-shape/src/curve/catmullRom.js
function ti(e, t, n) {
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
function ni(e, t) {
	this._context = e, this._alpha = t;
}
ni.prototype = {
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
			default: ti(this, e, t);
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var ri = (function e(t) {
	function n(e) {
		return t ? new ni(e, t) : new Yr(e, 0);
	}
	return n.alpha = function(t) {
		return e(+t);
	}, n;
})(.5);
//#endregion
//#region node_modules/d3-shape/src/curve/catmullRomClosed.js
function ii(e, t) {
	this._context = e, this._alpha = t;
}
ii.prototype = {
	areaStart: Rr,
	areaEnd: Rr,
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
			default: ti(this, e, t);
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var ai = (function e(t) {
	function n(e) {
		return t ? new ii(e, t) : new Zr(e, 0);
	}
	return n.alpha = function(t) {
		return e(+t);
	}, n;
})(.5);
//#endregion
//#region node_modules/d3-shape/src/curve/catmullRomOpen.js
function oi(e, t) {
	this._context = e, this._alpha = t;
}
oi.prototype = {
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
			default: ti(this, e, t);
		}
		this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
	}
};
var si = (function e(t) {
	function n(e) {
		return t ? new oi(e, t) : new $r(e, 0);
	}
	return n.alpha = function(t) {
		return e(+t);
	}, n;
})(.5);
//#endregion
//#region node_modules/d3-shape/src/curve/linearClosed.js
function ci(e) {
	this._context = e;
}
ci.prototype = {
	areaStart: Rr,
	areaEnd: Rr,
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
function li(e) {
	return new ci(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/monotone.js
function ui(e) {
	return e < 0 ? -1 : 1;
}
function di(e, t, n) {
	var r = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (r || i < 0 && -0), o = (n - e._y1) / (i || r < 0 && -0), s = (a * i + o * r) / (r + i);
	return (ui(a) + ui(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(s)) || 0;
}
function fi(e, t) {
	var n = e._x1 - e._x0;
	return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function pi(e, t, n) {
	var r = e._x0, i = e._y0, a = e._x1, o = e._y1, s = (a - r) / 3;
	e._context.bezierCurveTo(r + s, i + s * t, a - s, o - s * n, a, o);
}
function mi(e) {
	this._context = e;
}
mi.prototype = {
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
			case 3: pi(this, this._t0, fi(this, this._t0));
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
					this._point = 3, pi(this, fi(this, n = di(this, e, t)), n);
					break;
				default: pi(this, this._t0, n = di(this, e, t));
			}
			this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
		}
	}
};
function hi(e) {
	this._context = new gi(e);
}
(hi.prototype = Object.create(mi.prototype)).point = function(e, t) {
	mi.prototype.point.call(this, t, e);
};
function gi(e) {
	this._context = e;
}
gi.prototype = {
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
function _i(e) {
	return new mi(e);
}
function vi(e) {
	return new hi(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/natural.js
function yi(e) {
	this._context = e;
}
yi.prototype = {
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
		else for (var r = bi(e), i = bi(t), a = 0, o = 1; o < n; ++a, ++o) this._context.bezierCurveTo(r[0][a], i[0][a], r[1][a], i[1][a], e[o], t[o]);
		(this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
	},
	point: function(e, t) {
		this._x.push(+e), this._y.push(+t);
	}
};
function bi(e) {
	var t, n = e.length - 1, r, i = Array(n), a = Array(n), o = Array(n);
	for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
	for (i[n - 1] = 2, a[n - 1] = 7, o[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t) r = i[t] / a[t - 1], a[t] -= r, o[t] -= r * o[t - 1];
	for (i[n - 1] = o[n - 1] / a[n - 1], t = n - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
	for (a[n - 1] = (e[n] + i[n - 1]) / 2, t = 0; t < n - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
	return [i, a];
}
function xi(e) {
	return new yi(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/step.js
function Si(e, t) {
	this._context = e, this._t = t;
}
Si.prototype = {
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
function Ci(e) {
	return new Si(e, .5);
}
function wi(e) {
	return new Si(e, 0);
}
function Ti(e) {
	return new Si(e, 1);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/shape/shape.js
var Ei = {
	basis: Vr,
	"basis-closed": Ur,
	"basis-open": Gr,
	bundle: qr,
	cardinal: Xr,
	"cardinal-closed": Qr,
	"cardinal-open": ei,
	"catmull-rom": ri,
	"catmull-rom-closed": ai,
	"catmull-rom-open": si,
	"monotone-x": _i,
	"monotone-y": vi,
	natural: xi,
	"linear-closed": li,
	linear: Lr,
	step: Ci,
	"step-after": Ti,
	"step-before": wi
};
function Di(e, t) {
	return e.isLineType(t) || e.isScatterType?.(t) || e.isBubbleType?.(t);
}
function Oi(e) {
	return (t) => Di(e, t);
}
function ki(e, t) {
	return e.isCandlestickType?.(t) ? e.getCandlestickData?.(t)?.close : e.getBaseValue(t);
}
function Ai(e) {
	let t = this, n;
	if (Di(t, e)) {
		let e = Oi(t);
		n = t.generateGetLinePoints(t.getShapeIndices(e), !1, e);
	} else t.isBarType(e) ? n = t.generateGetBarPoints(t.getShapeIndices(t.isBarType)) : t.isCandlestickType?.(e) && (n = t.generateGetCandlestickPoints?.(t.getShapeIndices(t.isCandlestickType)));
	return n;
}
function ji(e, t, n) {
	return this.config[t] ? this.getGradienColortUrl(e.id) : n(e);
}
function Mi(e, t) {
	let n = this, { $el: r } = n, { type: i, elKey: a, containerClass: o, itemClass: s, initFn: c, withFocus: l = !0, withStyles: u = !0 } = t;
	r[a] || c.call(n);
	let d = n.getChartClass(i), f = l ? n.classFocus.bind(n) : () => "", p = r.main.select(`.${o}`).selectAll(`.${s}`).data(n.filterNullish(e)).attr("class", (e) => d(e) + f(e)).enter().append("g").attr("class", d);
	return u && p.style("opacity", "0").style("pointer-events", n.getStylePropValue("none")), p;
}
var Ni = {
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
			let n = H(t);
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
		let t = this, { config: n } = t, r = n.data_xs, i = R(r), a = {}, o = i ? {} : 0;
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
			P(i[e.id]) && (i[e.id] = t ? o[t]++ : o++, i.__max__ = (t ? o[t] : o) - 1);
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
		return R(i) ? e[i[o]] : e;
	},
	getIndicesMax(e) {
		if (!R(this.config.data_xs)) return e.__max__;
		let t = 0;
		for (let n in e) t += e[n].__max__ || 0;
		return t;
	},
	getShapeX(e, t, n) {
		let r = this, { config: i, scale: a } = r, o = n ? a.subX : a.zoom || a.x, s = i.bar_overlap, c = i.bar_padding, l = (e, t) => e + t, u = I(e) && (e._$total.length ? e._$total.reduce(l) / 2 : 0), d = [];
		if (u && I(e) && e._$total.length) {
			let t = 0;
			for (let n of e._$total) t += n, d.push(t);
		}
		return (n) => {
			let i = r.getIndices(t, n, "getShapeX"), a = n.id in i ? i[n.id] : 0, f = (i.__max__ || 0) + 1, p = 0;
			if (R(n.x)) {
				let t = o(n.x, !0);
				if (u) {
					let r = e[n.id] || e._$width;
					p = s ? t - r / 2 : t - r + (d[a] ?? e._$total.slice(0, a + 1).reduce(l)) - u;
				} else p = t - (N(e) ? e : e._$width) * (f / 2 - (s ? 1 : a));
			}
			return e && p && f > 1 && c && (a && (p += c * a), f > 2 ? p -= (f - 1) * c / 2 : f === 2 && (p -= c / 2)), p;
		};
	},
	getShapeY(e) {
		let t = this, n = t.isStackNormalized();
		return (r) => {
			let { value: i } = r;
			return N(r) ? i = r : t.isAreaRangeType(r) ? i = t.getBaseValue(r, "mid") : n ? i = t.getRatio("index", r, !0) : t.isBubbleZType(r) ? i = t.getBubbleZData(r.value, "y") : t.isBarRangeType(r) && (i = i[1]), t.getYScaleById(r.id, e)(i);
		};
	},
	getShapeYMin(e) {
		let t = this, n = t.axis.getId(e), [r] = t.scale[n].domain(), i = t.config[`axis_${n}_inverted`];
		return !t.isGrouped(e) && !i && r > 0 ? r : 0;
	},
	getShapeOffsetData(e) {
		let t = this, n = t.orderTargets(t.filterTargetsToShow(t.data.targets.filter(e, t))), r = t.state.dataGeneration, i = n.map((e) => e.id).join("_"), a = `${Q.shapeOffset}_${i}`, o = t.cache.get(a);
		if (o?.generation === r) return o;
		let s = t.isStackNormalized(), c = n.map((e) => {
			let n = e.values, r = {};
			t.isStepType(e) && (n = t.convertValuesToStep(n));
			let i = n.reduce((e, n) => {
				let i = Number(n.x), a = ki(t, n);
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
			let { id: l, value: u, x: d } = e, f = ki(r, e), p = r.getIndices(t, e), m = r.getYScaleById(l, n);
			if (r.isBarRangeType(e)) return m(u[0]);
			let h = Number(d), g = m(o === "zero" ? 0 : r.getShapeYMin(l)), _ = g, v = s?.get(l) ?? i.filter((e) => e.id !== l && p[e.id] === p[l]);
			for (let e of v) {
				let { id: t, rowValueMapByXValue: n, rowValues: i, values: s } = e;
				if (a[t] < a[l]) {
					let e = s[h], t = i[c];
					(!t || Number(t.x) !== h) && (t = n[h]);
					let a = t && ki(r, t);
					N(a) && N(f) && a * f >= 0 && N(e) && (f !== 0 || o === "positive" && e > 0 || o === "negative" && e < 0) && (_ += m(e) - g);
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
			let { y0: p, isInverted: m } = f, h = l(e, i) || p, g = N(o) ? o : o[e.id] || o._$width, _ = e.value, v = s(e), y = c(e);
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
		return n.isGrouped(r) && (i = Ai.bind(n)(e)), i ? i(e, t)[0][1] : n.getYScaleById(r)(n.getBaseValue(e));
	},
	circleX(e) {
		return this.xx(e);
	},
	updateCircleY(e = !1) {
		let t = this, n = Oi(t), r = t.generateGetLinePoints(t.getShapeIndices(n), e, n);
		return (n, i) => {
			let a = n.id;
			return t.isGrouped(a) && Di(t, n) ? r(n, i)[0][1] : t.getYScaleById(a, e)(t.getBaseValue(n));
		};
	},
	pointR(e) {
		let t = this, { config: n } = t, r = n.point_r, i = r;
		return t.isBubbleType(e) ? i = t.getBubbleR(e) : j(r) && (i = r.bind(t.api)(e)), e.r = i, i;
	},
	pointExpandedR(e) {
		let t = this, { config: n } = t, r = t.isBubbleType(e) ? 1.15 : 1.75;
		return n.point_focus_expand_enabled ? n.point_focus_expand_r || t.pointR(e) * r : t.pointR(e);
	},
	pointSelectR(e) {
		let t = this, n = t.config.point_select_r;
		return j(n) ? n(e) : n || t.pointR(e) * 4;
	},
	isPointFocusOnly() {
		let e = this;
		return e.config.point_focus_only && !e.hasType("bubble") && !e.hasType("scatter") && !e.hasArcType(null, ["radar"]);
	},
	getPointSensitivity(e) {
		let t = this, n = t.config.point_sensitivity;
		if (e) j(n) ? n = n.call(t.api, e) : n === "radius" && (n = e.r);
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
			let t = e ? i[u][e] : i[u], a = e ? t.ratio : i[`${u}_ratio`], o = e ? t.max : i[`${u}_max`], l = N(t) ? t : j(t) ? t.call(r, s.width, n, c) : n ? p * a / n : 0;
			return o && l > o ? o : l;
		}, h = m();
		return !l && I(i[u]) && (h = {
			_$width: h,
			_$total: []
		}, r.getTargetsToShow().forEach((e) => {
			i[u][e.id] && (h[e.id] = m(e.id), h._$total.push(h[e.id] || h._$width));
		})), h;
	},
	getShapeByIndex(e, t, n) {
		let r = this, { $el: i } = r, a = A(t) ? `-${t}` : "", o = i[e];
		return o = o && !o.empty() ? o.filter((e) => !n || e.id === n).filter((e) => !A(t) || e.index === t) : (n ? i.main.selectAll(`.${Z[`${e}s`]}${r.getTargetSelectorSuffix(n)}`) : i.main).selectAll(`.${Z[e]}${a}`), o;
	},
	isWithinShape(e, t) {
		let n = this, r = i(e), a;
		return n.isTargetToShow(t.id) ? n.hasValidPointType?.(e.nodeName) ? a = n.isStepType(t) ? n.isWithinStep(e, n.getYScaleById(t.id)(n.getBaseValue(t))) : n.isWithinCircle(e, n.isBubbleType(t) ? n.pointSelectR(t) * 1.5 : 0) : e.nodeName === "path" && (a = !r.classed(Z.bar) || n.isWithinBar(e)) : a = !1, a;
	},
	getInterpolate(e) {
		return Ei[this.getInterpolateType(e)];
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
		let t = Bt(this.state.event, e), [n, r, i] = zt(e), a = Math.min(n.x, r.x), o = Math.min(n.y, r.y), s = this.config.bar_sensitivity, c = Math.abs(i.x - r.x), l = Math.abs(n.y - r.y), u = a - s, d = a + c + s, f = o + l + s, p = o - s;
		return u < t[0] && t[0] < d && p < t[1] && t[1] < f;
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/ChartInternal.js
function Pi(e) {
	return e.hasArcType() ? "arc charts" : e.hasType("funnel") ? "funnel chart" : null;
}
function Fi(e) {
	let { config: t } = e, n = t.render_mode === "canvas" ? Pi(e) : null;
	n && (O.console?.warn?.(`[billboard.js] render.mode='canvas' is ignored for ${n}; falling back to SVG.`), t.render_mode = "svg");
}
var Ii = class {
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
		t.api = e, t.config = new At(), t.cache = new Nt();
		let n = new Mt();
		t.$el = n.getStore("element"), t.state = n.getStore("state"), t.$T = t.$T.bind(t);
	}
	$T(e, t, n) {
		let { config: r, state: a } = this, o = r.transition_duration, s = r.subchart_show, c = e;
		return c &&= ("tagName" in c && (c = i(c)), (t !== !1 && o || t) && (!a.zooming || a.dragging) && !a.resizing && a.rendered && !s ? c.transition(n).duration(o) : c), c;
	}
	beforeInit() {
		let e = this;
		e.callPluginHook("$beforeInit"), V(e.config.onbeforeinit, e.api);
	}
	afterInit() {
		let e = this;
		e.callPluginHook("$afterInit"), V(e.config.onafterinit, e.api);
	}
	init() {
		let e = this, { config: t, state: n, $el: r } = e, { boost_useCssRule: a, bindto: o } = t;
		tt(e), Fi(e);
		let s = e.hasArcType();
		if (n.hasRadar = !n.hasAxis && e.hasType("radar"), n.hasFunnel = !n.hasAxis && e.hasType("funnel"), n.hasTreemap = !n.hasAxis && e.hasType("treemap"), n.hasAxis = !s && !n.hasFunnel && !n.hasTreemap, n.datetimeId = `bb-${+/* @__PURE__ */ new Date() * Ke()}`, a) {
			let e = k.createElement("style");
			e.type = "text/css", k.head.appendChild(e), n.style = {
				rootSelector: `.${n.datetimeId}`,
				sheet: e.sheet
			}, r.style = e;
		}
		let c = {
			element: o,
			classname: "bb"
		};
		B(o) && (c.element = o.element || "#chart", c.classname = o.classname || c.classname), r.chart = j(c.element.node) ? o.element : i(c.element || []), r.chart.empty() && (r.chart = i(k.body.appendChild(k.createElement("div")))), r.chart.html("").classed(c.classname, !0).classed(n.datetimeId, a).style("position", "relative"), e.initParams(), e.initToRender();
	}
	initToRender(e) {
		let t = this, { config: n, state: r, $el: { chart: i } } = t, a = () => Jt(i, {
			display: "none",
			visibility: "hidden"
		}), o = n.render.lazy === !1 ? !1 : n.render.lazy || a(), s = O.MutationObserver;
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
			e.initClip(), n.extraLineClasses = e.generateExtraLineClass(), n.dataTime = t.data_xLocaltime ? l : s, n.axisTime = t.axis_x_localtime ? c : u;
			let r = t.zoom_enabled && t.zoom_type === "drag";
			n.defaultAxisTime = (t) => {
				let { x: i, zoom: a } = e.scale, o = r ? a : a && i.orgDomain().toString() !== a.domain().toString(), s = t.getMilliseconds() && ".%L" || t.getSeconds() && ".:%S" || t.getMinutes() && "%I:%M" || t.getHours() && "%I %p" || t.getDate() !== 1 && "%b %d" || o && t.getDate() === 1 && "%b'%y" || t.getMonth() && "%-m/%-d" || "%Y";
				return n.axisTime(s)(t);
			};
		}
		let { legend_position: i, legend_inset_anchor: a, axis_rotated: o } = t;
		r.isLegendRight = i === "right", r.isLegendInset = i === "inset", r.isLegendTop = a === "top-left" || a === "top-right", r.isLegendLeft = a === "top-left" || a === "bottom-left", r.rotatedPadding.top = e.getResettedPadding(r.rotatedPadding.top), r.rotatedPadding.right = o && !t.axis_x_show ? 0 : 30, r.inputType = Xt(t.interaction_inputType_mouse, t.interaction_inputType_touch);
	}
	initWithData(e) {
		let t = this, { config: n, scale: r, state: i, $el: a, org: o } = t, { hasAxis: s, hasFunnel: c, hasTreemap: l } = i, u = n.interaction_enabled, d = t.hasType("polar"), f = n.data_labels_backgroundColors;
		if (s && (t.axis = t.getAxisInstance(), n.zoom_enabled && t.initZoom()), t.data.xs = {}, t.data.targets = t.convertDataToTargets(e), n.data_filter && (t.data.targets = t.data.targets.filter(n.data_filter.bind(t.api))), n.data_hide && t.addHiddenTargetIds(n.data_hide === !0 ? t.mapToIds(t.data.targets) : n.data_hide), n.legend_hide && t.addHiddenLegendIds(n.legend_hide === !0 ? t.mapToIds(t.data.targets) : n.legend_hide), t.updateSizes(), t.updateScales(!0), s) {
			let { x: e, y: i, y2: a, subX: s, subY: c, subY2: l } = r;
			e && (e.domain(Ue(t.getXDomain(t.data.targets), !n.axis_x_inverted)), s.domain(e.domain()), o.xDomain = e.domain()), i && (i.domain(t.getYDomain(t.data.targets, "y")), c.domain(i.domain())), a && (a.domain(t.getYDomain(t.data.targets, "y2")), l && l.domain(a.domain()));
		}
		if (n.render_mode === "canvas") {
			if (!t.initCanvas) throw Error("[billboard.js] Please import and call canvas() to use render.mode='canvas'.");
			if (t.bindResize(), t.initCanvas(), n.tooltip_show && t.initTooltip(), t.callPluginHook("$init"), V(n.oninit, t.api), t.redraw({
				withTransition: !1,
				withTransform: !0,
				withUpdateXDomain: !0,
				withUpdateOrgXDomain: !0,
				withTransitionForAxis: !1,
				initializing: !0
			}), n.data_onmin || n.data_onmax) {
				let e = t.getMinMaxData();
				V(n.data_onmin, t.api, e.min), V(n.data_onmax, t.api, e.max);
			}
			i.rendered = !0;
			return;
		}
		if (a.svg = a.chart.append("svg").style("overflow", "hidden").style("display", "block"), u && i.inputType) {
			let e = i.inputType === "touch", { onclick: r, onover: o, onout: s } = n, c = n.interaction_inputType_touch?.preventDefault, l = ie(c) && c || !1, u = e ? { passive: !l && (!isNaN(c) && c || null) === null } : void 0;
			a.svg.on("click", r?.bind(t.api) || null).on(e ? "touchstart" : "mouseenter", o?.bind(t.api) || null, u).on(e ? "touchend" : "mouseleave", s?.bind(t.api) || null);
		}
		n.svg_classname && a.svg.attr("class", n.svg_classname);
		let p = j(n.color_tiles) && t.patterns;
		(s || p || d || l || f || t.hasLegendDefsPoint?.()) && (a.defs = a.svg.append("defs"), s && [
			"id",
			"idXAxis",
			"idYAxis",
			"idGrid"
		].forEach((e) => {
			t.appendClip(a.defs, i.clip[e]);
		}), t.generateTextBGColorFilter(f), p && t.patterns.forEach((e) => a.defs.append(() => e.node))), t.updateSvgSize(), t.bindResize();
		let m = a.svg.append("g").classed(U.main, !0).attr("transform", c || l ? null : t.getTranslate("main"));
		if (a.main = m, n.subchart_show && t.initSubchart(), n.tooltip_show && t.initTooltip(), n.title_text && t.initTitle(), !l && n.legend_show && t.initLegend(), n.data_empty_label_text && m.append("text").attr("class", `${X.text} ${U.empty}`).attr("text-anchor", "middle").attr("dominant-baseline", "middle"), s && (n.regions.length && t.initRegion?.(), !n.clipPath && t.axis.init()), m.append("g").classed(U.chart, !0).attr("clip-path", s ? i.clip.path : null), t.callPluginHook("$init"), t.initChartElements(), s && (u && t.initEventRect?.(), t.initGrid?.(), n.clipPath && t.axis?.init()), t.updateTargets(t.data.targets), t.updateDimension(), V(n.oninit, t.api), t.setBackground(), t.redraw({
			withTransition: !1,
			withTransform: !0,
			withUpdateXDomain: !0,
			withUpdateOrgXDomain: !0,
			withTransitionForAxis: !1,
			initializing: !0
		}), n.data_onmin || n.data_onmax) {
			let e = t.getMinMaxData();
			V(n.data_onmin, t.api, e.min), V(n.data_onmax, t.api, e.max);
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
				let t = H(n);
				(n === "line" && e.hasTypeOf(t) || e.hasType(n)) && i.push(t);
			}
		} else if (r) i.push("Treemap");
		else if (e.hasType("funnel")) i.push("Funnel");
		else {
			let t = e.hasType("polar"), r = e.hasType("gauge");
			n || i.push("Arc", "Pie"), r ? i.push("Gauge") : n ? i.push("Radar") : t && i.push("Polar");
		}
		for (let t of i) e[`init${t}`]();
		R(e.config.data_labels) && !e.hasArcType(null, ["radar"]) && e.initText();
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
		if (R(e)) {
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
				let n = H(e);
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
		let t = this, { $el: { svg: n }, $T: r } = t, i = `.${U.target}`;
		e && (i += `, .${st.chartCircles} > .${st.circles}`), r(n.selectAll(i).filter((e) => t.isTargetToShow(e.id))).style("opacity", null);
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
			let i = M(r) ? t[r] : r;
			t[n] = Ne(e, `with${n}`, i);
		}
		return t;
	}
	initialOpacity(e) {
		let t = this, { withoutFadeIn: n } = t.state;
		return t.getBaseValue(e) !== null && n[e.id] ? null : "0";
	}
	bindResize() {
		let e = this, { $el: t, config: n, state: r } = e, i = en(n.resize_timer), { resize_auto: a } = n, o = [];
		o.push(() => V(n.onresize, e.api)), /^(true|parent)$/.test(a) && o.push(() => {
			let t = r.current.width, i = r.current.height;
			e.setContainerSize(), (t !== r.current.width || i !== r.current.height) && (r.resizing = !0, n.legend_show && (e.updateSizes(), r.isCanvasMode ? e.updateHtmlLegend?.() : e.updateLegend()), e.api.flush(!1));
		}), o.push(() => {
			V(n.onresized, e.api), r.resizing = !1;
		}), o.forEach((e) => i.add(e)), e.resizeFunction = i, a === "parent" && O.ResizeObserver ? (e.resizeFunction.resizeObserver = new O.ResizeObserver(e.resizeFunction.bind(e))).observe(t.chart.node().parentNode) : (a === "parent" && O.console?.warn?.("[billboard.js] resize.auto='parent' requires ResizeObserver; falling back to window resize."), O.addEventListener("resize", e.resizeFunction));
	}
	callPluginHook(e, ...t) {
		this.config.plugins.forEach((n) => {
			e === "$beforeInit" && (n.$$ = this, this.api.plugins.push(n)), n[e](...t);
		});
	}
};
ze(Ii.prototype, [
	On,
	jn,
	Nn,
	Fn,
	Ln,
	Vn,
	Xn,
	Pn,
	Qn,
	dr,
	fr,
	mr,
	Ni,
	hr,
	gr,
	Er,
	kr,
	Mr,
	Nr,
	Fr
]);
//#endregion
//#region node_modules/billboard.js/dist-esm/config/config.js
function Li(e) {
	let t = this.config, n, r, i, a = () => {
		let e = r.shift();
		if (e && n && I(n) && e in n) return n = n[e], a();
		if (!e) return n;
	};
	Object.keys(t).forEach((o) => {
		n = e, r = o.split("_"), i = a(), F(i) && (t[o] = i);
	}), this.api && (this.state.orgConfig = e);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/Chart/api/chart.js
var Ri = {
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
		if (R(e)) {
			e.callPluginHook("$willDestroy"), e.cache?.remove(["setOverOut", "callOverOutForTouch"]), e.charts.splice(e.charts.indexOf(this), 1), e.charts.length === 0 && cn(), e.unbindAllEvents(), i?.select("*").interrupt(), t.canvasFlowFrame !== null && O.cancelAnimationFrame?.(t.canvasFlowFrame), t.canvasFlowFrame = null, t.canvasFlowFinish = null, t.pendingRaf !== null && O.cancelAnimationFrame?.(t.pendingRaf), t.pendingRaf = null, e.canvasRenderer?.destroy(), e.canvasEngine?.destroy(), e.resizeFunction?.clear(), e.resizeFunction?.resizeObserver?.disconnect(), e.resizeFunction && O.removeEventListener("resize", e.resizeFunction), n.classed("bb", !1).style("position", null), t.isCanvasMode && n.style("min-height", t.canvasInlineStyle.minHeight || null), n.selectChildren().remove(), r && r.parentNode.removeChild(r), Object.keys(this).forEach((t) => {
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
		return e && a in r ? F(t) ? (r[a] = t, o = t, n && this.flush()) : o = r[a] : (arguments.length === 0 || L(e)) && (o = i.orgConfig), o;
	}
}, zi = { color(e) {
	return this.internal.color(e);
} }, Bi = function(e) {
	let { targets: t } = this.internal.data;
	if (!P(e)) {
		let n = z(e) ? e : [e];
		return t.filter((e) => n.some((t) => t === e.id));
	}
	return t;
};
ze(Bi, {
	shown: function(e) {
		return this.internal.filterTargetsToShow(this.data(e));
	},
	values: function(e, t = !0) {
		let n = null;
		if (e) {
			let r = this.data(e);
			z(r) && (n = [], r.forEach((e) => {
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
var Vi = { data: Bi }, Hi = {
	focus(e) {
		let t = this.internal, { state: n } = t, r = t.mapToTargetIds(e);
		if (n.isCanvasMode) {
			let e = r.filter(t.isTargetToShow, t), i = new Set(e), a = t.mapToTargetIds().filter((e) => !i.has(e) && t.isTargetToShow(e));
			t.revertLegend(), t.toggleFocusLegend(a, !1), t.toggleFocusLegend(e, !0), n.focusedTargetIds = i, n.defocusedTargetIds = new Set(a), t.renderCanvasFrame?.(void 0, null, !1);
			return;
		}
		let i = t.$el.svg.selectAll(t.selectorTargets(r.filter(t.isTargetToShow, t)));
		this.revert(), this.defocus(), i.classed(q.focused, !0).classed(q.defocused, !1), t.hasArcType() && !n.hasRadar && (t.expandArc(r), t.hasType("gauge") && t.markOverlapped(e, t, `.${dt.gaugeValue}`)), t.toggleFocusLegend(r, !0), n.focusedTargetIds = new Set(r), r.forEach((e) => n.defocusedTargetIds.delete(e));
	},
	defocus(e) {
		let t = this.internal, { state: n } = t, r = t.mapToTargetIds(e);
		if (n.isCanvasMode) {
			let e = r.filter(t.isTargetToShow, t);
			t.toggleFocusLegend(e, !1), e.forEach((e) => n.focusedTargetIds.delete(e)), n.defocusedTargetIds = new Set(e), t.renderCanvasFrame?.(void 0, null, !1);
			return;
		}
		t.$el.svg.selectAll(t.selectorTargets(r.filter(t.isTargetToShow, t))).classed(q.focused, !1).classed(q.defocused, !0), t.hasArcType(null, ["polar"]) && (t.unexpandArc(r), t.hasType("gauge") && t.undoMarkOverlapped(t, `.${dt.gaugeValue}`)), t.toggleFocusLegend(r, !1), r.forEach((e) => n.focusedTargetIds.delete(e)), n.defocusedTargetIds = new Set(r);
	},
	revert(e) {
		let t = this.internal, { config: n, state: r, $el: a } = t, o = t.mapToTargetIds(e), s = () => {
			n.legend_show && (t.showLegend(o.filter(t.isLegendToShow.bind(t))), a.legend.selectAll(t.selectorLegends(o)).filter(function() {
				return i(this).classed(q.legendItemFocused);
			}).classed(q.legendItemFocused, !1));
		};
		if (r.isCanvasMode) {
			let e = !!r.focusedTargetIds?.size || !!r.defocusedTargetIds?.size;
			s(), r.focusedTargetIds = /* @__PURE__ */ new Set(), r.defocusedTargetIds = /* @__PURE__ */ new Set(), e && t.renderCanvasFrame?.(void 0, null, !1);
			return;
		}
		a.svg.selectAll(t.selectorTargets(o)).classed(q.focused, !1).classed(q.defocused, !1), t.hasArcType(null, ["polar"]) && t.unexpandArc(o), s(), r.focusedTargetIds = /* @__PURE__ */ new Set(), r.defocusedTargetIds = /* @__PURE__ */ new Set();
	}
}, Ui = { legend: {
	show: function(e) {
		let t = this.internal;
		t.showLegend(t.mapToTargetIds(e)), t.updateAndRedraw({ withLegend: !0 });
	},
	hide: function(e) {
		let t = this.internal;
		t.hideLegend(t.mapToTargetIds(e)), t.updateAndRedraw({ withLegend: !0 });
	}
} }, Wi = {
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
			}), Mn.call(t, e.done, e.resizeAfter);
			return;
		}
		if (i) {
			let n = t.mapToTargetIds(e.unload === !0 ? null : e.unload);
			t.unload(n, () => {
				!t.config || !t.cache || (t.cache.remove(n), ne(() => t.loadFromArgs(e)));
			});
		} else t.loadFromArgs(e);
	},
	unload(e) {
		let t = this.internal, n = e || {};
		L(n) && this.tooltip.hide(), z(n) ? n = { ids: n } : M(n) && (n = { ids: [n] });
		let r = t.mapToTargetIds(n.ids);
		t.state.dirty.data = !0, t.state._eventRectFingerprint = null, t.unload(r, () => {
			!t.config || !t.cache || (t.redraw({
				withUpdateOrgXDomain: !0,
				withUpdateXDomain: !0,
				withLegend: !0
			}), t.cache.remove(r), Mn.call(t, n.done, n.resizeAfter));
		});
	}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/Chart/api/show.js
function Gi(e, t, n, r = !1) {
	let i = this.internal, a = i.mapToTargetIds(t), o = new Set(a), s = [...i.state.hiddenTargetIds].filter((e) => o.has(e));
	if (i.state.toggling = !0, i.state.dirty.visibility = !0, i[`${e ? "remove" : "add"}HiddenTargetIds`](a), i.state.isCanvasMode) {
		e && s.length ? V(i.config.data_onshown, this, s) : !e && s.length === 0 && V(i.config?.data_onhidden, this, a), r || i.redraw({
			withUpdateOrgXDomain: !0,
			withUpdateXDomain: !0,
			withLegend: !0
		}), i.state.toggling = !1;
		return;
	}
	let c = i.$el.svg.selectAll(i.selectorTargets(a)), l = e ? null : "0";
	e && s.length && (c.style("display", null), V(i.config.data_onshown, this, s)), i.$T(c).style("opacity", l, "important").call(Fe, () => {
		!e && s.length === 0 && (c.style("display", "none"), V(i.config?.data_onhidden, this, a)), c.style("opacity", l);
	}), n.withLegend && i[`${e ? "show" : "hide"}Legend`](a), r || i.redraw({
		withUpdateOrgXDomain: !0,
		withUpdateXDomain: !0,
		withLegend: !0
	}), i.state.toggling = !1;
}
var Ki = {
	show(e, t = {}) {
		Gi.call(this, !0, e, t);
	},
	hide(e, t = {}) {
		Gi.call(this, !1, e, t);
	},
	toggle(e, t = {}) {
		let n = this.internal, r = {
			show: [],
			hide: []
		};
		n.mapToTargetIds(e).forEach((e) => r[n.isTargetToShow(e) ? "hide" : "show"].push(e)), r.show.length && r.hide.length ? (Gi.call(this, !0, r.show, t, !0), Gi.call(this, !1, r.hide, t)) : (r.show.length && this.show(r.show, t), r.hide.length && this.hide(r.hide, t));
	}
}, qi = { tooltip: {
	show: function(e) {
		let t = this.internal, { $el: n, config: r, state: { eventReceiver: i, hasFunnel: a, hasTreemap: o, inputType: s } } = t, c, l;
		if (e.mouse && (l = e.mouse), e.data) {
			let { data: s } = e, u = t.getYScaleById(s.id)?.(s.value);
			if ((a || o) && s.id) {
				let e = t.selectorTarget(s.id, void 0, `.${Y.shape}`);
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
} }, Ji = class e {
	plugins = [];
	internal;
	constructor(t) {
		let n = new Ii(this);
		this.internal = n, (function e(t, n, r) {
			Object.keys(t).forEach((i) => {
				let a = j(t[i]), o = n !== r, s = R(t[i]), c = s && Object.keys(t[i]).length > 0;
				n[i] = a && (!o && c || o) ? t[i].bind(r) : s && !a ? {} : t[i], c && e(t[i], n[i], r);
			});
		})(e.prototype, this, this), Li.call(n, t), n.beforeInit(), n.init();
	}
};
ze(Ji.prototype, [
	Ri,
	zi,
	Vi,
	Hi,
	Ui,
	Wi,
	Ki,
	qi
]);
//#endregion
//#region node_modules/billboard.js/dist-esm/Chart/api/grid.js
function Yi(e) {
	return Array.isArray(e) ? e : [e];
}
function Xi(e) {
	e.state.canvasShape = null, e.renderCanvasFrame?.(void 0, null, !1);
}
function Zi(e, t) {
	let n = this.internal, { config: r } = n, i = r.transition_duration && Yt(), a = `grid_${t}_lines`;
	return e ? (r[a] = Yi(e), n.state.isCanvasMode ? (Xi(n), r[a]) : (n.updateGrid(), n.redrawGrid(i), r[a])) : r[a];
}
function Qi(e, t) {
	let n = `grid_${t}_lines`;
	return Zi.bind(this)(this.internal.config[n].concat(e ? Yi(e) : []), t);
}
function $i(e, t) {
	let n = this.internal;
	if (n.state.isCanvasMode) {
		let r = n.getGridFilterToRemove?.(e) || (() => !0), i = `grid_${t ? "x" : "y"}_lines`;
		n.config[i] = n.config[i].filter((e) => !r(e)), Xi(n);
		return;
	}
	n.removeGridLines(e, t);
}
var ea = function(e) {
	return Zi.bind(this)(e, "x");
};
ze(ea, {
	add(e) {
		return Qi.bind(this)(e, "x");
	},
	remove(e) {
		return $i.bind(this)(e, !0);
	}
});
var ta = function(e) {
	return Zi.bind(this)(e, "y");
};
ze(ta, {
	add(e) {
		return Qi.bind(this)(e, "y");
	},
	remove(e) {
		return $i.bind(this)(e, !1);
	}
});
var na = {
	xgrids: ea,
	ygrids: ta
}, ra = `line.${q.xgridFocus}, line.${q.ygridFocus}`, ia = (e) => A(e.position) || "end", aa = (e) => e.position === "start" ? 4 : e.position === "middle" ? 0 : -4;
function oa(e) {
	let { state: t, $el: { main: n } } = e, r = t._gridFocusEl, i = n.node(), a = r?.nodes?.() || [];
	return a.length && a.every((e) => i?.contains(e)) ? r : t._gridFocusEl = n.selectAll(ra);
}
function sa(e, t, n) {
	return (r) => {
		let i = e ? 0 : t;
		return r.position === "start" ? i = e ? -n : 0 : r.position === "middle" && (i = (e ? -n : t) / 2), i;
	};
}
function ca(e, t) {
	e.each(function() {
		let e = i(this);
		[
			"x1",
			"x2",
			"y1",
			"y2"
		].forEach((t) => e.attr(t, +e.attr(t)));
	});
}
var la = {
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
		(e.grid_x_lines.length || e.grid_y_lines.length) && (n.gridLines.main = n.main.insert("g", `.${U.chart}${e.grid_lines_front ? " + *" : ""}`).attr("clip-path", t.pathGrid).attr("class", `${J.grid} ${J.gridLines}`), n.gridLines.main.append("g").attr("class", J.xgridLines), n.gridLines.main.append("g").attr("class", J.ygridLines), n.gridLines.x = rt([]));
	},
	updateXGrid(e) {
		let t = this, { config: n, scale: r, state: a, $el: { main: o, grid: s } } = t, c = n.axis_rotated, l = t.generateGridData(n.grid_x_type, r.x), u = t.axis.isCategorized() ? t.axis.x.tickOffset() : 0, d = (e) => (r.zoom || r.x)(e) + u * (c ? -1 : 1);
		a.xgridAttr = c ? {
			x1: 0,
			x2: a.width,
			y1: d,
			y2: d
		} : {
			x1: d,
			x2: d,
			y1: 0,
			y2: a.height
		}, s.x = o.select(`.${J.xgrids}`).selectAll(`.${J.xgrid}`).data(l), s.x.exit().remove(), s.x = s.x.enter().append("line").attr("class", J.xgrid).merge(s.x), e || s.x.each(function() {
			let e = i(this);
			Object.keys(a.xgridAttr).forEach((t) => {
				e.attr(t, a.xgridAttr[t]);
			}), e.style("opacity", () => +e.attr(c ? "y1" : "x1") === (c ? a.height : 0) ? "0" : null);
		});
	},
	updateYGrid() {
		let e = this, { axis: t, config: n, scale: r, state: i, $el: { grid: a, main: o } } = e, s = n.axis_rotated, c = (e) => r.y(e), l = t.y.getGeneratedTicks(n.grid_y_ticks) || e.scale.y.ticks(n.grid_y_ticks);
		a.y = o.select(`.${J.ygrids}`).selectAll(`.${J.ygrid}`).data(l), a.y.exit().remove(), a.y = a.y.enter().append("line").attr("class", J.ygrid).merge(a.y), a.y.attr("x1", s ? c : 0).attr("x2", s ? c : i.width).attr("y1", s ? 0 : c).attr("y2", s ? i.height : c), ca(a.y);
	},
	updateGrid() {
		let e = this, { $el: { grid: t, gridLines: n } } = e;
		!n.main && e.initGridLines(), t.main.style("visibility", e.hasArcType() ? "hidden" : null), e.hideGridFocus(), e.updateGridLines("x"), e.updateGridLines("y");
	},
	updateGridLines(e) {
		let t = this, { config: n, $el: { gridLines: r, main: a }, $T: o } = t, s = n.axis_rotated, c = e === "x";
		n[`grid_${e}_show`] && t[`update${e.toUpperCase()}Grid`]();
		let l = a.select(`.${J[`${e}gridLines`]}`).selectAll(`.${J[`${e}gridLine`]}`).data(n[`grid_${e}_lines`]);
		o(l.exit()).style("opacity", "0").remove();
		let u = l.enter().append("g");
		u.append("line").style("opacity", "0"), l = u.merge(l), l.each(function(e) {
			let t = i(this);
			t.select("text").empty() && e.text && t.append("text").style("opacity", "0");
		}), o(l.attr("class", (t) => `${J[`${e}gridLine`]} ${t.class || ""}`.trim()).select("text").attr("text-anchor", ia).attr("transform", () => c ? s ? null : "rotate(-90)" : s ? "rotate(-90)" : null).attr("dx", aa).attr("dy", -5)).text(function(e) {
			return e.text ?? this.remove();
		}), r[e] = l;
	},
	redrawGrid(e) {
		let t = this, { config: { axis_rotated: n }, state: { width: r, height: i }, $el: { gridLines: a }, $T: o } = t, s = t.xv.bind(t), c = t.yv.bind(t), l = a.x.select("line"), u = a.x.select("text"), d = a.y.select("line"), f = a.y.select("text");
		return l = o(l, e).attr("x1", n ? 0 : s).attr("x2", n ? r : s).attr("y1", n ? s : 0).attr("y2", n ? s : i), u = o(u, e).attr("x", sa(!n, r, i)).attr("y", s), d = o(d, e).attr("x1", n ? c : 0).attr("x2", n ? c : r).attr("y1", n ? 0 : c).attr("y2", n ? i : c), f = o(f, e).attr("x", sa(n, r, i)).attr("y", c), [
			l.style("opacity", null),
			u.style("opacity", null),
			d.style("opacity", null),
			f.style("opacity", null)
		];
	},
	initFocusGrid() {
		let { config: e, state: t, state: { clip: n }, $el: r } = this;
		t._gridFocusEl = null;
		let i = e.grid_front, a = `.${i && r.gridLines.main ? J.gridLines : U.chart}${i ? " + *" : ""}`, o = r.main.insert("g", a).attr("clip-path", n.pathGrid).attr("class", J.grid);
		if (r.grid.main = o, e.grid_x_show && o.append("g").attr("class", J.xgrids), e.grid_y_show && o.append("g").attr("class", J.ygrids), e.axis_tooltip) {
			let e = o.append("g").attr("class", "bb-axis-tooltip");
			e.append("line").attr("class", "bb-axis-tooltip-x"), e.append("line").attr("class", "bb-axis-tooltip-y");
		}
		e.interaction_enabled && e.grid_focus_show && !e.axis_tooltip && (o.append("g").attr("class", q.xgridFocus).append("line").attr("class", q.xgridFocus), e.grid_focus_y && !e.tooltip_grouped && o.append("g").attr("class", q.ygridFocus).append("line").attr("class", q.ygridFocus));
	},
	showAxisGridFocus() {
		let e = this, { config: t, format: n, state: { event: r, width: a, height: o } } = e, s = t.axis_rotated, [c, l] = Bt(r, e.$el.eventRect?.node()), u = {
			x: c,
			y: l
		};
		for (let [t, r] of Object.entries(e.$el.axisTooltip)) {
			let i = t === "x" && !s || t !== "x" && s ? "x" : "y", a = u[i], o = e.scale[t]?.invert(a);
			o && (o = t === "x" && e.axis.isTimeSeries() ? n.xAxisTick(o) : o?.toFixed(2), r?.attr(i, a).text(o));
		}
		e.$el.main.selectAll("line.bb-axis-tooltip-x, line.bb-axis-tooltip-y").style("visibility", null).each(function(e, t) {
			let n = i(this);
			t === 0 ? n.attr("x1", c).attr("x2", c).attr("y1", t ? 0 : o).attr("y2", t ? o : 0) : n.attr("x1", t ? 0 : a).attr("x2", t ? a : 0).attr("y1", l).attr("y2", l);
		});
	},
	hideAxisGridFocus() {
		let e = this;
		e.$el.main.selectAll(`line.${W.axisTooltipX}, line.${W.axisTooltipY}`).style("visibility", "hidden"), Object.values(e.$el.axisTooltip).forEach((e) => e?.style("display", "none"));
	},
	showGridFocus(e) {
		let t = this, { config: n, state: { width: r, height: a } } = t, o = n.axis_rotated, s = oa(t), c = (e || [s.datum()]).filter((e) => e && A(t.getBaseValue(e)));
		if (!n.tooltip_show || c.length === 0 || !n.axis_x_forceAsSingle && t.hasType("bubble") || t.hasArcType()) return;
		let l = n.grid_focus_edge && !n.tooltip_grouped, u = t.xx.bind(t);
		s.style("visibility", null).data(c.concat(c)).each(function(e) {
			let n = i(this), s = {
				x: u(e),
				y: t.getYScaleById(e.id)(e.value)
			}, c;
			if (n.classed(q.xgridFocus)) c = o ? [
				null,
				s.x,
				l ? s.y : r,
				s.x
			] : [
				s.x,
				l ? s.y : null,
				s.x,
				a
			];
			else {
				let n = t.axis.getId(e.id) === "y2";
				c = o ? [
					s.y,
					l && !n ? s.x : null,
					s.y,
					l && n ? s.x : a
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
		}), ca(s), t.showCircleFocus?.(e);
	},
	hideGridFocus(e = !1) {
		let t = this, { state: { inputType: n, resizing: r } } = t;
		(e || n === "mouse" || !r) && (oa(t).style("visibility", "hidden"), t.hideCircleFocus?.());
	},
	updateGridFocus() {
		let e = this, { state: { inputType: t, width: n, height: r, resizing: i }, $el: { grid: a } } = e, o = a.main.select(`line.${q.xgridFocus}`);
		if (t === "touch") o.empty() ? i && e.showCircleFocus?.() : e.showGridFocus();
		else {
			let t = e.config.axis_rotated;
			o.attr("x1", t ? 0 : -10).attr("x2", t ? n : -10).attr("y1", t ? -10 : 0).attr("y2", t ? -10 : r);
		}
		return !0;
	},
	generateGridData(e, t) {
		let n = this, r = n.$el.main.select(`.${W.axisX}`).selectAll(".tick").size(), i = [];
		if (e === "year") {
			let [e, t] = n.getXDomain(n.data.targets).map((e) => e.getFullYear());
			for (let n = e; n <= t; n++) i.push(/* @__PURE__ */ new Date(`${n}-01-01 00:00:00`));
		} else i = t.ticks(10), i.length > r && (i = i.filter((e) => String(e).indexOf(".") < 0));
		return i;
	},
	getGridFilterToRemove(e) {
		return e ? (t) => {
			let n = !1;
			return (z(e) ? e.concat() : [e]).forEach((e) => {
				("value" in e && t.value === e.value || "class" in e && t.class === e.class) && (n = !0);
			}), n;
		} : () => !0;
	},
	removeGridLines(e, t) {
		let n = this, { config: r, $T: i } = n, a = n.getGridFilterToRemove(e), o = (e) => !a(e), s = t ? J.xgridLines : J.ygridLines, c = t ? J.xgridLine : J.ygridLine;
		i(n.$el.main.select(`.${s}`).selectAll(`.${c}`).filter(a)).style("opacity", "0").remove();
		let l = `grid_${t ? "x" : "y"}_lines`;
		r[l] = r[l].filter(o);
	}
}, ua = {
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
}, da = () => (ze(Ii.prototype, la), Ji.prototype.xgrids = na.xgrids, Ji.prototype.ygrids = na.ygrids, At.setOptions([ua]), (da = () => ({}))()), fa = Object.create(null), pa = {
	version: "4.0.3",
	generate(e) {
		let t = new Ji(He(Object.create(null), fa, e));
		return t.internal.charts = this.instance, this.instance.push(t), t;
	},
	defaults(e) {
		return B(e) && (fa = e), fa;
	},
	instance: [],
	plugin: {}
};
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/shape/core/point.js
function ma(e) {
	return I(e) && j(e.create) && j(e.update);
}
function ha(e, n) {
	let r = this, a = (e, t) => {
		let n = e.attributes;
		for (let r = 0, i; i = n[r]; r++) i = i.name, t.setAttribute(i, e.getAttribute(i));
	}, o = new DOMParser().parseFromString(je(e), "image/svg+xml").documentElement, s = k.createElementNS(t.svg, o.nodeName.toLowerCase());
	if (s.id = n, s.style.fill = "inherit", s.style.stroke = "inherit", a(o, s), o.childNodes?.length) {
		let e = i(s);
		"innerHTML" in s ? e.html(je(o.innerHTML)) : Le(o.childNodes).forEach((t) => {
			a(t, e.append(t.tagName).node());
		});
	}
	r.$el.defs.node().appendChild(s);
}
var ga = {
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
		return R(e.point_pattern) ? e.point_pattern : [t];
	},
	generatePoint() {
		let e = this, { $el: t, config: n } = e, r = [], a = e.getValidPointPattern();
		return function(o, s, ...c) {
			return function(l) {
				let u = e.getTargetSelectorSuffix(l.id || l.data?.id || l), d = i(this);
				r.indexOf(u) < 0 && r.push(u);
				let f = a[r.indexOf(u) % a.length];
				if (e.hasValidPointType(f)) f = e[f];
				else if (!ma(f || n.point_type)) {
					let n = e.getDefsPointId(u);
					if (t.defs.select(`#${n}`).size() < 1 && ha.call(e, f, n), o === "create") return e.custom?.create.bind(s)(d, n, ...c);
					if (o === "update") return e.custom?.update.bind(s)(d, ...c);
				}
				return f[o]?.bind(s)(d, ...c);
			};
		};
	}
}, _a = {
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
function va(e, t, n) {
	let { config: r } = e, i = (e, n) => {
		let i = N(n) ? n : n === !1 ? void 0 : null;
		i !== null && (r[`axis_${e}_${t}`] = i);
	};
	F(n) && (I(n) ? Object.keys(n).forEach((e) => {
		i(e, n[e]);
	}) : (N(n) || n === !1) && ["y", "y2"].forEach((e) => {
		i(e, n);
	}), e.state.dirty.data = !0, e.redraw({
		withUpdateOrgXDomain: !0,
		withUpdateXDomain: !0
	}));
}
function ya(e, t) {
	let { config: n } = e;
	return {
		x: n[`axis_x_${t}`],
		y: n[`axis_y_${t}`],
		y2: n[`axis_y2_${t}`]
	};
}
var ba = { axis: {
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
		return A(e) || e === !1 ? va(t, "min", e) : ya(t, "min");
	},
	max: function(e) {
		let t = this.internal;
		return A(e) || e === !1 ? va(t, "max", e) : ya(t, "max");
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
} }, xa = { groups(e) {
	let t = this.internal, { config: n } = t;
	return P(e) ? n.data_groups : (n.data_groups = e, t.state.dirty.data = !0, t.redraw(), n.data_groups);
} }, Sa = {
	x(e) {
		let t = this.internal, { axis: n, data: r } = t, i = n.isCustomX() && n.isCategorized();
		return z(e) && (i ? this.categories(e) : (t.updateTargetX(r.targets, e), t.state.dirty.data = !0, t.redraw({
			withUpdateOrgXDomain: !0,
			withUpdateXDomain: !0
		}))), i ? this.categories() : r.xs;
	},
	xs(e) {
		let t = this.internal;
		return B(e) && (t.updateTargetXs(t.data.targets, e), t.state.dirty.data = !0, t.redraw({
			withUpdateOrgXDomain: !0,
			withUpdateXDomain: !0
		})), t.data.xs;
	}
}, Ca = class {
	owner;
	config;
	scale;
	charSize = {};
	constructor(e) {
		let t = pr(), { config: n, params: r } = e;
		this.owner = e, this.config = n, this.scale = t, (n.noTransition || !r.config.transition_duration) && (n.withoutTransition = !0), n.range = this.scaleExtent((r.orgXScale || t).range());
	}
	getSizeFor1Char(e, t, n = !0) {
		let r = {
			w: 5.5,
			h: 11.5
		};
		return this.charSize[e] && n ? this.charSize[e] : (!t.empty() && t.text("0").call((e) => {
			try {
				let { width: t, height: n } = Vt(e.node(), !0);
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
				return A(e) ? n(r) : null;
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
				let t = pr("_log").domain([r > 0 ? r : 1, i]).range(e.range());
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
}, wa = class {
	helper;
	config;
	params;
	g;
	generatedTicks = [];
	canReuseTickTextOnResize(e) {
		let { config: t, params: n } = this, { config: r, id: i, owner: a } = n, o = /^(x|subX)$/.test(i), s = i === "subX" ? r.subchart_axis_x_tick_format || r.axis_x_tick_format : r[`axis_${i === "subX" ? "x" : i}_tick_format`], c = n.tickMultiline && n.isCategory && !e && !(n.tickWidth > 0);
		return !!(a.state.resizing && !a.state.flowing && !j(r.axis_evalTextSize) && !s && !n.tickTitle && !(o && r.axis_x_tick_autorotate) && !c && t.withoutTransition);
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
		t.tickLength = Math.max(t.innerTickSize, 0) + t.tickPadding, this.config = t, this.params = e, this.helper = new Ca(this);
	}
	create(e) {
		let t = this, { config: n, helper: r, params: a } = t, { scale: o } = r, { orient: s } = n, c = this.splitTickText.bind(t), l = /^(left|right)$/.test(s), u = /^(top|bottom)$/.test(s), d = r.getTickTransformSetter(u ? "x" : "y"), f = d === r.axisX ? "y" : "x", p = /^(top|left)$/.test(s) ? -1 : 1, m = a.tickTextRotate;
		this.config.range = o.rangeExtent ? o.rangeExtent() : r.scaleExtent((a.orgXScale || o).range());
		let { innerTickSize: h, tickLength: g, range: _ } = n, v = a.id, y = v && /^(x|y|y2)$/.test(v) ? a.config[`axis_${v}_tick_text_position`] : {
			x: 0,
			y: 0
		}, b = v === "subX" ? "subchart_axis_x" : `axis_${v}`, x = a.config[`${b}_show`], S = {
			tick: x ? a.config[`${b}_tick_show`] : !1,
			text: x ? a.config[`${b}_tick_text_show`] : !1
		}, C = a.config.axis_evalTextSize, w;
		e.each(function() {
			let e = i(this), b = this.__chart__ || o, x = r.copyScale();
			w = e, this.__chart__ = x, n.tickOffset = a.isCategory ? (x(1) - x(0)) / 2 : 0;
			let T = e.selectAll(".domain").data([0]);
			if (T.enter().append("path").attr("class", "domain").merge(T).attr("d", () => {
				let e = n.outerTickSize * p;
				return u ? `M${_[0]},${e}V0H${_[1]}V${e}` : `M${e},${_[0]}H0V${_[1]}H${e}`;
			}), S.tick || S.text) {
				let i = n.tickValues || r.generateTicks(x, l || a.config.axis_rotated);
				t.generatedTicks = i;
				let o = e.selectAll(".tick");
				if (t.canReuseTickNodesOnResize(o, i, l || a.config.axis_rotated, S)) d(o, x);
				else {
					o = o.data(i, x);
					let e = o.enter().insert("g", ".domain").attr("class", "tick"), n = o.exit().remove();
					o = e.merge(o), S.tick && e.append("line"), S.text && e.append("text");
					let _ = !e.empty() || !n.empty(), w = S.text && !_ && t.canReuseTickTextOnResize(l || a.config.axis_rotated), T = {
						w: 0,
						h: 0
					}, E = o.selectAll("text.__bb-empty");
					if (S.text && !w) {
						let e = o.select("text"), n = [];
						E = e, j(C) && (T = C.bind(t.params.owner.api)(e.node(), v), this.classList.contains(U.dummy) && (this.sizeFor1Char = T)), (!T || T.w === 0 || T.h === 0) && (T = t.helper.getSizeFor1Char(s, e, !!C));
						let d = e.selectAll("tspan").data((e, t) => {
							let o;
							if (a.tickMultiline) o = c(e, x, i, l, T.w);
							else {
								let t = r.textFormatted(e);
								o = z(t) ? t.concat() : [t];
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
							return s !== "top" && (i = T.h, t === 0 && (i = l ? -((n[e.index] - 1) * (T.h / 2) - 3) : y.y === 0 ? r : 0)), N(i) && y.y ? i + y.y : i || r;
						});
					}
					let D = o.select("line");
					if (e.select("line").attr(`${f}2`, h * p), e.select("text").attr(f, g * p), t.setTickLineTextPosition(D, E, T), a.tickTitle) {
						let e = E.select("title"), t = a.tickTitle;
						(e.empty() ? E.append("title") : e).text((e) => t[Number(e)]);
					}
					if (x.bandwidth) {
						let e = x, t = e.bandwidth() / 2;
						b = (n) => e(n) + t, x = b;
					} else b.bandwidth ? b = x : d(n, x);
					o = a.owner.state.flowing ? r.transitionise(o) : a.owner.$T(o), d(e, b), d(o.style("opacity", null), x);
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
		let { params: a } = this, o = this.helper.textFormatted(e), s = M(o) && o.indexOf("\n") > -1 ? o.split("\n") : [];
		if (s.length) return s;
		if (z(o)) return o;
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
		if (j(e)) t.tickValues = () => e(this.helper.scale.domain());
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
function Ta(e) {
	let t = [e[0], e[e.length - 1]], n = 0, r = null;
	for (let t of e) {
		let e = t.textContent?.length ?? 0;
		e > n && (n = e, r = t);
	}
	r && !t.includes(r) && t.push(r);
	let i = e[Math.floor(e.length / 2)];
	return t.includes(i) || t.push(i), t;
}
var Ea = 50, Da = Symbol("tickWidthFallback");
function Oa(e) {
	let t = e.select("line").node(), n = t?.ownerDocument?.defaultView?.getComputedStyle ? parseFloat(t.ownerDocument.defaultView.getComputedStyle(t).strokeWidth) : parseFloat(t?.getAttribute?.("stroke-width"));
	return Number.isFinite(n) && n > 0 ? n : 1;
}
function ka(e, t, n) {
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
function Aa(e, t) {
	if (e.length <= Ea) return e;
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
function ja(e) {
	return j(e) ? Va(e) : !Array.isArray(e) || e.length <= Ea ? e : {
		length: e.length,
		first: e[0],
		middle: e[Math.floor(e.length / 2)],
		last: e[e.length - 1]
	};
}
function Ma(e) {
	return e[Da];
}
function Na(e, t) {
	N(t) ? Object.defineProperty(e, Da, {
		configurable: !0,
		value: t,
		writable: !0
	}) : delete e[Da];
}
function Pa(e) {
	e.length = 0, Na(e);
}
function Fa(e, t, n) {
	Pa(e), e.length = t, Na(e, n);
}
function Ia(e) {
	let t = [];
	return t.length = e.length, Object.keys(e).forEach((n) => {
		let r = +n;
		t[r] = e[r];
	}), Na(t, Ma(e)), t;
}
function La(e, t) {
	Pa(e), e.length = t.length, Object.keys(t).forEach((n) => {
		let r = +n;
		e[r] = t[r];
	}), Na(e, Ma(t));
}
function Ra(e, t, n) {
	let r = e[t];
	if (N(r)) return r;
	let i = Number(r);
	return Number.isFinite(i) ? i : n;
}
var za = /* @__PURE__ */ new WeakMap(), Ba = 0;
function Va(e) {
	if (!e || !/^(function|object)$/.test(typeof e)) return `${typeof e}:${String(e)}`;
	let t = za.get(e);
	return t || (t = ++Ba, za.set(e, t)), `${typeof e}:${t}`;
}
function Ha(e) {
	return e instanceof Date ? `date:${+e}` : Array.isArray(e) ? `[${e.map((e) => Ha(e)).join(",")}]` : e && typeof e == "object" ? `{${Object.keys(e).sort().map((t) => `${t}:${Ha(e[t])}`).join(",")}}` : typeof e == "function" ? Va(e) : `${typeof e}:${String(e)}`;
}
function Ua(e) {
	return e instanceof Date ? /* @__PURE__ */ new Date(+e) : Array.isArray(e) ? e.map((e) => Ua(e)) : e;
}
function Wa(e) {
	return {
		width: e.width,
		height: e.height,
		ticks: e.ticks && Ia(e.ticks),
		clipPath: e.clipPath,
		domain: Ua(e.domain)
	};
}
function Ga(e, t) {
	return e.width = t.width, e.height = t.height, e.clipPath = t.clipPath, e.domain = Ua(t.domain), e.ticks && t.ticks && La(e.ticks, t.ticks), e;
}
var Ka = { getAxisInstance: function() {
	return this.axis || new qa(this);
} }, qa = class {
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
		return `${W.axis} ${W[`axis${H(e)}`]}`;
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
		return !this.isTimeSeries() && (e.data_x || R(e.data_xs));
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
			if (j(r)) r = r.bind(e.api)(e.getXDomain(e.data.targets), n.subX);
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
		e === "x" ? o = a ? _ : b : e === "y" ? o = a ? b : _ : e === "y2" && (o = a ? m : y), i.length && i.forEach((n) => {
			let i = n.tick || {}, a = t.scale[e].copy();
			n.domain && a.domain(n.domain), r.push(o(a).ticks(i.count).tickFormat(j(i.format) ? i.format.bind(t.api) : ((e) => e)).tickValues(i.values).tickSizeOuter(i.outer === !1 ? 0 : 6));
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
			j(t) && (f = t.bind(a.api));
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
		let h = new wa(m).scale(s && a.scale.zoom || t).orient(u);
		if (s && this.isTimeSeries() && p && !j(p)) {
			let e = Ye.bind(a);
			p = p.map((t) => e(t));
		} else !s && this.isTimeSeriesY() && (h.ticks(o.axis_y_tick_time_value), p = null);
		p && h.tickValues(p), h.tickFormat(f || !s && a.isStackNormalized() && a.hasAxisGroupedData(e) && ((e) => `${e}%`)), l && (h.tickCentered(o.axis_x_tick_centered), L(o.axis_x_tick_culling) && (o.axis_x_tick_culling = !1));
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
		return i ? j(i) ? s = i.bind(t.api) : a && (s = (e) => e ? r.axisTime(i)(e) : "") : s = a ? r.defaultAxisTime : o ? t.categoryName : (e) => e < 0 ? e.toFixed(0) : e, j(s) ? (e) => s.apply(t, o ? [e, t.categoryName(e)] : [e]) : s;
	}
	getTickValues(e) {
		let t = this.owner, n = t.config[`axis_${e}_tick_values`], r = t[`${e}Axis`];
		return (j(n) ? n.call(t.api) : n) || (r ? r.tickValues() : void 0);
	}
	getLabelOptionByAxisId(e) {
		return this.owner.config[`axis_${e}_label`];
	}
	getLabelText(e) {
		let t = this.getLabelOptionByAxisId(e);
		return M(t) ? t : t ? t.text : null;
	}
	setLabelText(e, t) {
		let { config: n } = this.owner, r = this.getLabelOptionByAxisId(e);
		M(r) ? n[`axis_${e}_label`] = t : r && (r.text = t);
	}
	getLabelPosition(e, t) {
		let n = this.owner.config.axis_rotated, r = this.getLabelOptionByAxisId(e), i = I(r) && r.position ? r.position : t[+!n], a = (e) => !!~i.indexOf(e);
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
		return Ha({
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
				values: ja(u),
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
		let n = this.owner, { config: r, state: i, $el: { svg: a, chart: o } } = n, { current: s, resizing: c } = i, l = s.maxTickSize[e], u = `${Q.maxTickSize}_${e}_${!!t}`, d = n.cache.get(u);
		if (d && d.generation === i.redrawGeneration) return l;
		let f = `axis_${e}`, p = {
			width: 0,
			height: 0
		}, m;
		if (c || t || !r[`${f}_show`] || l.width > 0 && n.filterTargetsToShow().length === 0) return l;
		if ((a || r.render_mode === "canvas") && n.scale[e]?.copy) {
			let a = /^y2?$/.test(e), s = n.getTargetsToShow(), c = n.scale[e].copy().domain(n[`get${a ? "Y" : "X"}Domain`](s, e)), h = c.domain(), g = h[0] === h[1] && h.every((e) => e > 0), _ = z(l.domain) && l.domain[0] === l.domain[1] && l.domain.every((e) => e > 0);
			if (g || _) return l;
			l.domain = h, a || Pa(l.ticks);
			let v = this.getAxis(e, c, !1, !1, !0), y = r[`${f}_tick_rotate`], b = r[`${f}_tick_count`];
			if (!r[`${f}_tick_values`] && b && v.tickValues(this.generateTickValues(h, b, a ? this.isTimeSeriesY() : this.isTimeSeries())), !a && this.updateXAxisTickValues(s, v), m = this.getMaxTickSizeFingerprint(e, c, h, v, y, t), d?.fingerprint === m) return n.cache.add(u, {
				...d,
				generation: i.redrawGeneration
			}), Ga(l, d.value);
			let x = v.tickValues(), S = !a && Array.isArray(x) && x.length > Ea;
			S && v.tickValues(Aa(x, v.tickFormat()));
			let C = o.append("svg").style("visibility", "hidden").style("position", "fixed").style("top", "0").style("left", "0"), w = C.append("g").attr("class", `${W[`axis${H(e)}`]} ${U.dummy}`);
			v.create(w);
			let { sizeFor1Char: T } = w.node(), E = C.selectAll("text").attr("transform", N(y) ? `rotate(${y})` : null), D = S ? x.length : E.size();
			if (T) E.each(function(e, t) {
				let n = this.textContent.length * T.w, r = T.h;
				p.width = Math.max(p.width, n), p.height = Math.max(p.height, r), a || (l.ticks[t] = n);
			});
			else {
				let e = [];
				if (E.each(function() {
					e.push(this);
				}), (e.length <= 5 ? e : Ta(e)).map((e) => $(e, !0)).forEach((e) => {
					p.width = Math.max(p.width, e.width), p.height = Math.max(p.height, e.height);
				}), !a) for (let t = 0; t < e.length; t++) l.ticks[t] = p.width;
			}
			!a && S && Fa(l.ticks, D, p.width), C.remove();
		}
		return Object.keys(p).forEach((e) => {
			p[e] > 0 && (l[e] = p[e]);
		}), n.cache.add(u, {
			fingerprint: m,
			generation: i.redrawGeneration,
			value: Wa(l)
		}), l;
	}
	getXAxisTickTextY2Overflow(e) {
		let t = this.owner, { axis: n, config: r, state: { current: i, isLegendRight: a, legendItemWidth: o } } = t, s = t.getAxisTickRotate("x"), c = s > 0 && s < 90;
		if ((n.isCategorized() || n.isTimeSeries()) && r.axis_x_tick_fit && (!r.axis_x_tick_culling || L(r.axis_x_tick_culling)) && !r.axis_x_tick_multiline && c) {
			let n = r.axis_y2_show && i.maxTickSize.y2.width || 0, c = a && o || 0, l = i.width - t.getCurrentPaddingByDirection("left"), u = this.getXAxisTickMaxOverflow(s, l - e) - n - c, d = Math.max(0, u) + e;
			return Math.min(d, l / 2);
		}
		return 0;
	}
	getXAxisTickMaxOverflow(e, t) {
		let n = this.owner, { axis: r, config: i, state: a } = n, o = r.isTimeSeries(), s = a.current.maxTickSize.x.ticks, c = s.length, l = Ma(s) ?? a.current.maxTickSize.x.width, { left: u, right: d } = a.axis.x.padding, f = 0, p = c - (o && i.axis_x_tick_fit ? .5 : 0);
		for (let n = 0; n < c; n++) {
			let r = n + 1, i = Math.cos(Math.PI * e / 180) * Ra(s, n, l), a = r - (o ? 1 : .5) + u;
			if (a <= 0) continue;
			let c = (t - i) / a, m = p - r, h = d * c, g = m * c + h, _ = i - c / 2 - g;
			f = Math.max(f, _);
		}
		let m = n.getTargetsToShow(), h = 0;
		if (!o && i.axis_x_tick_count <= m.length && m[0].values.length) {
			let e = pr(n.axis.getAxisType("x"), 0, t - f).domain([u * -1, n.getXDomainMax(n.data.targets) + 1 + d]);
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
			let a = this.getLabelText(t), o = `axis${H(t)}`, s = W[`${o}Label`];
			if (a) {
				let c = n.select(`text.${s}`);
				c.empty() && (c = n.select(`g.${W[o]}`).insert("text", ":first-child").attr("class", s).attr("transform", ["rotate(-90)", null][t === "x" ? +!i : +i]).style("text-anchor", () => this.textAnchorForAxisLabel(t))), r(c, e).attr("x", () => this.xForAxisLabel(t)).attr("dx", () => this.dxForAxisLabel(t)).attr("dy", () => this.dyForAxisLabel(t)).text(a);
			}
		});
	}
	getPadding(e, t, n, r) {
		let i = N(e) ? e : e[t];
		return A(i) ? this.owner.convertPixelToScale(/(bottom|top)/.test(t) ? "y" : "x", i, r) : n;
	}
	generateTickValues(e, t, n) {
		let r = e;
		if (t) {
			let i = j(t) ? t() : t;
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
			i && s && (!n && !r.transition_duration && (i.config.withoutTransition = !0), s.style("opacity", o), i.create(e[`axis${H(t)}`]));
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
				let s = a.selectAll(".tick"), c = Ue(s.data(), !e[`${o}_reverse`]), l = c.length, u = e[`${o}_max`], d = !e[`${o}_lines`] || ka(this[i], c, Oa(s)), f;
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
					r.svg.selectAll(`.${W.axisX} .tick text`).attr("clip-path", e);
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
			if (M(a) || a[n]) if (i[n] = r[n]?.append("text").classed(W[`axis${n.toUpperCase()}Tooltip`], !0).attr("filter", e.updateTextBGColor({ id: n }, a)), t) {
				let e = n === "x" ? "x" : "y", t = n === "y" ? "1.15em" : n === "x" ? "-0.3em" : "-0.4em";
				i[n]?.attr(e, t).attr(`d${n === "x" ? "y" : "x"}`, n === "x" ? "0.4em" : "-1.3em").style("text-anchor", n === "x" ? "end" : null);
			} else {
				let e = n === "x" ? "y" : "x", t = n === "x" ? "1.15em" : `${n === "y" ? "-" : ""}0.4em`;
				i[n]?.attr(e, t).attr(`d${n === "x" ? "x" : "y"}`, n === "x" ? "-1em" : "0.3em").style("text-anchor", n === "y" ? "end" : null);
			}
		});
	}
}, Ja = {
	initEventRect() {
		this.$el.main.select(`.${U.chart}`).append("g").attr("class", pt.eventRects).style("fill-opacity", "0");
	},
	redrawEventRect() {
		let e = this, { config: t, state: n, $el: r } = e, i = e.isMultipleX(), a = t.axis_x_inverted;
		if (r.eventRect) e.updateEventRect(r.eventRect, !0);
		else if (e.data.targets.length) {
			let a = e.$el.main.select(`.${pt.eventRects}`).style("cursor", t.zoom_enabled && t.zoom_type !== "drag" ? t.axis_rotated ? "ns-resize" : "ew-resize" : null).classed(pt.eventRectsMultiple, i).classed(pt.eventRectsSingle, !i).selectAll(`.${pt.eventRect}`).data([0]).enter().append("rect");
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
		}, s = t.interaction_inputType_touch.preventDefault, c = ie(s) && s || !1, l = !isNaN(s) && s || null, u, d = !c && l === null, f = (e) => {
			let n = e.type, r = e.changedTouches[0][`client${t.axis_rotated ? "Y" : "X"}`];
			n === "touchstart" ? c ? e.preventDefault() : l !== null && (u = r) : n === "touchmove" && (c || u === !0 || l !== null && Math.abs(u - r) >= l) && (u = !0, e.preventDefault());
		};
		r.on("touchstart", (t) => {
			n.event = t, e.updateEventRect();
		}, { passive: d }).on("touchstart.eventRect touchmove.eventRect", (t) => {
			if (n.event = t, !r.empty() && r.classed(pt.eventRect)) {
				if (n.dragging || n.flowing || e.hasArcType() || t.touches.length > 1) return;
				f(t), a(r.node());
			} else o();
		}, { passive: d }).on("touchend.eventRect", (t) => {
			n.event = t, !r.empty() && r.classed(pt.eventRect) && (e.hasArcType() || !e.toggleShape || n.cancelClick) && (n.cancelClick &&= !1);
		}, { passive: d }), i.on("touchstart", (e) => {
			n.event = e;
			let { target: t } = e;
			t && t !== r.node() && o();
		}, { passive: d });
	},
	updateEventRect(e, t = !1) {
		let { state: n, $el: r } = this, { eventReceiver: i, width: a, height: o, rendered: s, resizing: c } = n, l = e || r.eventRect;
		(!s || c || t) && (l.attr("x", 0).attr("y", 0).attr("width", a).attr("height", o), (!s || t) && l.classed(pt.eventRect, !0)), (() => {
			if (i) {
				let e = Ut(r.chart.node());
				i.rect = $(l.node(), !0).toJSON(), i.rect.top += e.y, i.rect.left += e.x;
			}
		})();
	},
	updateEventType(e) {
		let t = this, n = ie(e), r = n ? t.$el.eventRect : e, i = n ? e !== r?.datum().multipleX : !1;
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
		let { eventReceiver: p } = r, m = (e, t) => j(e) ? e(t) : e;
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
		!o && a.selectAll(`.${U.EXPANDED}:not(.${Y.shape}-${t})`).classed(U.EXPANDED, !1);
		let f = a.selectAll(`.${Y.shape}-${t}`).classed(U.EXPANDED, !0).style("cursor", l ? "pointer" : null).filter(function(e) {
			return n.isWithinShape(this, e);
		});
		if (f.call((r) => {
			let i = r.data();
			s && (c || l?.bind(n.api)(i)) && (e.style.cursor = "pointer"), u || (n.showTooltip(i, e), n.showGridFocus?.(i), n.unexpandCircles?.(), r.each((e) => n.setExpand(t, e.id)));
		}), !u && f.empty()) {
			let a = Bt(i.event, e), o = d.filter((e) => n.isTargetToShow(e.id) ? n.dist(e, a) < n.getPointSensitivity(e) : !1);
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
		let o = Bt(i.event, e), s = n.findClosestFromTargets(a, o);
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
					let e = t.scale.zoom || t.scale.x, n = t.axis.xs[s], r = e.invert(Bt(a, this)[0]);
					c === "step-after" && r < n ? --s : c === "step-before" && r > n && (s += 1);
				}
				t.showAxisGridFocus();
				let l = n.tooltip_grouped && s === i.currentIdx;
				if (r.dragging || r.flowing || t.hasArcType() || l) {
					if (n.tooltip_show && l) {
						let [e, n] = Bt(a, this), i = r._lastTooltipMouse;
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
		a.selectAll(`.${Y.shape}-${o}`).each(function(e) {
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
		let a = Bt(r.event, this), o = t.findClosestFromTargets(i, a);
		if (!o) return;
		let s = t.getPointSensitivity(o);
		(t.isBarType(o.id) || t.dist(o, a) < s) && t.$el.main.selectAll(`.${Y.shapes}${t.getTargetSelectorSuffix(o.id)}`).selectAll(`.${Y.shape}-${o.index}`).each(function() {
			(n.data_selection_grouped || t.isWithinShape(this, o)) && (t.toggleShape?.(this, o, o.index), n.data_onclick.bind(t.api)(o, this));
		});
	}
}, Ya = {
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
}, Xa = {
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
		if (e === "x" && N(n.axis_x_height)) return n.axis_x_height;
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
}, Za = {
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
}, Qa = {
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
}, $a = {
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
}, eo = {
	axis_evalTextSize: !0,
	axis_rotated: !1,
	axis_tooltip: !1,
	...Za,
	...Qa,
	...$a
}, to = {
	data_xs: {},
	data_xFormat: "%Y-%m-%d",
	data_xLocaltime: !0,
	data_xSort: !0,
	data_axes: {},
	data_regions: {},
	data_stack_normalize: !1
}, no = [
	ba,
	xa,
	Sa
], ro = {
	axis: Ka,
	clip: Ya,
	eventrect: Ja,
	sizeAxis: Xa
}, io = {
	optDataAxis: to,
	optAxis: eo
};
//#endregion
//#region node_modules/billboard.js/dist-esm/config/resolver/axis.core.js
function ao(e) {
	return Object.keys(e).map((t) => e[t]);
}
function oo(e = [], t = []) {
	ze(Ii.prototype, ao(ro).concat(e)), ze(Ji.prototype, no), At.setOptions(ao(io).concat(t));
}
//#endregion
//#region node_modules/billboard.js/dist-esm/config/resolver/shape/axis.helpers.js
function so(e = [], t = []) {
	oo(e, t);
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/shape/core/barRadius.js
function co(e) {
	let { bar_radius: t, bar_radius_ratio: n } = e.config;
	return N(t) && t > 0 ? () => t : N(n) ? (e) => e * n : null;
}
function lo(e) {
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
function uo(e, t, n) {
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
function fo(e, t, n, r) {
	let i = "";
	return n ? r && e[0] < t ? i = `0 ${t - e[0]}px 0 0` : !r && e[0] > t && (i = `0 0 0 ${e[0] - t}px`) : r && e[1] > t ? i = `${e[1] - t}px 0 0 0` : !r && e[1] < t && (i = `0 0 ${t - e[1]}px 0`), i ? `inset(${i})` : null;
}
function po(e, t, n, r, i, a) {
	let { config: o, state: s } = e, c = o.axis_rotated, l = +c, u = +!l, d = t.value < 0, f = o[`axis_${e.axis.getId(t.id)}_inverted`], p = !f && d || f && !d, m = e.isGrouped(t.id), h = r && m && t.value !== 0 ? s.hiddenTargetIds.has(t.id) && a ? a(t) : i.has(`${t.id}:${t.index}`) : !1, g = [n[0][l], n[0][u]], _ = 0;
	if (r) {
		let e = c ? u : l, t = Math.abs(n[2][e] - n[0][e]);
		_ = Math.max(0, !m || h ? r(t) : 0);
	}
	let v = c ? n[1][l] + (p ? _ : -_) : n[1][u] + (p ? -_ : _);
	return {
		radius: _,
		corners: uo(c, p, _),
		clipPath: _ ? fo(g, v, c, p) : null,
		indexX: l,
		indexY: u,
		isNegative: p,
		pos: v
	};
}
//#endregion
//#region node_modules/billboard.js/dist-esm/ChartInternal/shape/bar.js
function mo(e) {
	let t = this.config.bar_connectLine, n = t?.[e] || t;
	return /^(start|end)\-(start|end)$/.test(n) ? n : null;
}
var ho = {
	initBar() {
		let { $el: e, config: t, state: { clip: n } } = this;
		e.bar = e.main.select(`.${U.chart}`), e.bar = t.bar_front ? e.bar.append("g") : e.bar.insert("g", ":first-child"), e.bar.attr("class", G.chartBars).call(this.setCssRule(!1, `.${G.chartBars}`, ["pointer-events:none"])), t.clipPath === !1 && (t.bar_radius || t.bar_radius_ratio) && e.bar.attr("clip-path", n.pathXAxis.replace(/#[^)]*/, `#${n.id}`));
	},
	updateTargetsForBar(e) {
		let t = this, { config: n } = t, r = t.getClass("bars", !0), a = n.interaction_enabled && n.data_selection_isselectable;
		Mi.call(t, e, {
			type: "Bar",
			elKey: "bar",
			containerClass: G.chartBars,
			itemClass: G.chartBar,
			initFn: t.initBar
		}).append("g").attr("class", r).style("cursor", (e) => a?.bind?.(t.api)(e) ? "pointer" : null).call((e) => {
			t.setCssRule(!0, ` .${G.bar}`, ["fill"], t.color)(e), e.each(function(e) {
				mo.call(t, e.id) && i(this).append("path").attr("class", G.barConnectLine);
			});
		});
	},
	updateBar(e, t = !1) {
		let n = this;
		if (n.state.isCanvasMode) return;
		let { config: r, $el: i, $T: a } = n, o = t ? i.subchart : i, s = n.getClass("bar", !0), c = n.initialOpacity.bind(n);
		r.bar_linearGradient && n.updateLinearGradient();
		let l = o.main.selectAll(`.${G.bars}`).selectAll(`.${G.bar}`).data(n.labelishData.bind(n));
		a(l.exit(), e).style("opacity", "0").remove(), o.bar = l.enter().append("path").attr("class", s).style("fill", n.generateUpdateBarColor()).merge(l).style("opacity", c), n.setRatioForGroupedData(o.bar.data());
	},
	generateUpdateBarColor() {
		let e = this, t = e.getStylePropValue(e.color) || (() => null);
		return (n) => ji.call(e, n, "bar_linearGradient", t);
	},
	updateBarColor(e) {
		return this.generateUpdateBarColor()(e);
	},
	redrawBar(e, t, n = !1) {
		let r = this;
		if (r.state.isCanvasMode) return [];
		let { bar: a } = n ? r.$el.subchart : r.$el, o = [], s = /* @__PURE__ */ new Map();
		return [r.$T(a, t, Ke()).attr("d", function(n, a, c) {
			let l = (N(n.value) || r.isBarRangeType(n)) && e(n, a), u = s.get(n.id);
			if (u === void 0 && (u = mo.call(r, n.id), s.set(n.id, u)), l.length > 1 && o.push(l[1]), a === c.length - 1 && o.length) {
				let e = r.$T(i(this.parentNode.querySelector(`.${G.barConnectLine}`)), t, Ke());
				r.updateConnectLine(e, u, o), o.splice(0);
			}
			return l[0];
		}).style("fill", r.generateUpdateBarColor()).style("clip-path", (e) => e.clipPath).style("opacity", null)];
	},
	generateDrawBar(e, t) {
		let n = this, { config: r } = n, i = n.generateGetBarPoints(e, t), a = co(n), o = a ? lo(n) : /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map();
		return (e, t) => {
			let c = i(e, t), { indexX: l, indexY: u, isNegative: d, pos: f, radius: p, clipPath: m } = po(n, e, c, a, o, n.isStackingRadiusData.bind(n)), h = ["", ""];
			if (e.clipPath = m, a) {
				let e = `a${p} ${p} ${d ? "1 0 0" : "0 0 1"} `;
				h[u] = `${e}${p},${p}`, h[l] = `${e}${[-p, p][r.axis_rotated ? "sort" : "reverse"]()}`, d && h.reverse();
			}
			let g = r.axis_rotated ? `H${f} ${h[0]}V${c[2][u] - p} ${h[1]}H${c[3][l]}` : `V${f} ${h[0]}H${c[2][l] - p} ${h[1]}V${c[3][u]}`, _ = [`M${c[0][l]},${c[0][u]}${g}z`], v = s.get(e.id);
			return v === void 0 && (v = mo.call(n, e.id), s.set(e.id, v)), v && _.push(r.axis_rotated ? {
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
			if (t && (N(c) && c > 0 ? t.value > 0 : t.value < 0)) return t;
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
}, go = {
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
}, _o = () => (so([ho, ga], [go, _a]), (_o = () => C.BAR)());
//#endregion
//#region src/billboardJs.ts
function vo(e, t) {
	let n = e.series.map((e) => [e.name, ...e.values]), r = pa.generate({
		...da(),
		axis: { x: {
			categories: e.categories,
			type: "category"
		} },
		bindto: t,
		data: {
			columns: n,
			type: _o()
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
export { vo as renderBillboardJS };

//# sourceMappingURL=billboardJs-DJFb72FS.js.map