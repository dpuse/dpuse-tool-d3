import { a as e, d as t, i as n, l as r, o as i, s as a, t as o } from "./select-BIuoFcZG.js";
//#region node_modules/d3-selection/src/sourceEvent.js
function s(e) {
	let t;
	for (; t = e.sourceEvent;) e = t;
	return e;
}
//#endregion
//#region node_modules/d3-selection/src/pointer.js
function c(e, t) {
	if (e = s(e), t === void 0 && (t = e.currentTarget), t) {
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
//#region node_modules/d3-dispatch/src/dispatch.js
var l = { value: () => {} };
function u() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new d(n);
}
function d(e) {
	this._ = e;
}
function f(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
d.prototype = u.prototype = {
	constructor: d,
	on: function(e, t) {
		var n = this._, r = f(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = p(n[i], e.name))) return i;
			return;
		}
		if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
		for (; ++a < o;) if (i = (e = r[a]).type) n[i] = m(n[i], e.name, t);
		else if (t == null) for (i in n) n[i] = m(n[i], e.name, null);
		return this;
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new d(e);
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
function p(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function m(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = l, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
//#endregion
//#region node_modules/d3-drag/src/noevent.js
var ee = { passive: !1 }, h = {
	capture: !0,
	passive: !1
};
function te(e) {
	e.stopImmediatePropagation();
}
function g(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region node_modules/d3-drag/src/nodrag.js
function ne(e) {
	var t = e.document.documentElement, n = o(e).on("dragstart.drag", g, h);
	"onselectstart" in t ? n.on("selectstart.drag", g, h) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function re(e, t) {
	var n = e.document.documentElement, r = o(e).on("dragstart.drag", null);
	t && (r.on("click.drag", g, h), setTimeout(function() {
		r.on("click.drag", null);
	}, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
//#endregion
//#region node_modules/d3-color/src/define.js
function _(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function v(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region node_modules/d3-color/src/color.js
function y() {}
var b = .7, x = 1 / b, S = "\\s*([+-]?\\d+)\\s*", C = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", w = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ie = /^#([0-9a-f]{3,8})$/, ae = RegExp(`^rgb\\(${S},${S},${S}\\)$`), oe = RegExp(`^rgb\\(${w},${w},${w}\\)$`), se = RegExp(`^rgba\\(${S},${S},${S},${C}\\)$`), ce = RegExp(`^rgba\\(${w},${w},${w},${C}\\)$`), le = RegExp(`^hsl\\(${C},${w},${w}\\)$`), ue = RegExp(`^hsla\\(${C},${w},${w},${C}\\)$`), de = {
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
_(y, T, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: fe,
	formatHex: fe,
	formatHex8: pe,
	formatHsl: me,
	formatRgb: he,
	toString: he
});
function fe() {
	return this.rgb().formatHex();
}
function pe() {
	return this.rgb().formatHex8();
}
function me() {
	return Se(this).formatHsl();
}
function he() {
	return this.rgb().formatRgb();
}
function T(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = ie.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ge(t) : n === 3 ? new O(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? E(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? E(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ae.exec(e)) ? new O(t[1], t[2], t[3], 1) : (t = oe.exec(e)) ? new O(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = se.exec(e)) ? E(t[1], t[2], t[3], t[4]) : (t = ce.exec(e)) ? E(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = le.exec(e)) ? xe(t[1], t[2] / 100, t[3] / 100, 1) : (t = ue.exec(e)) ? xe(t[1], t[2] / 100, t[3] / 100, t[4]) : de.hasOwnProperty(e) ? ge(de[e]) : e === "transparent" ? new O(NaN, NaN, NaN, 0) : null;
}
function ge(e) {
	return new O(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function E(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new O(e, t, n, r);
}
function _e(e) {
	return e instanceof y || (e = T(e)), e ? (e = e.rgb(), new O(e.r, e.g, e.b, e.opacity)) : new O();
}
function D(e, t, n, r) {
	return arguments.length === 1 ? _e(e) : new O(e, t, n, r ?? 1);
}
function O(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
_(O, D, v(y, {
	brighter(e) {
		return e = e == null ? x : x ** +e, new O(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? b : b ** +e, new O(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new O(A(this.r), A(this.g), A(this.b), k(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: ve,
	formatHex: ve,
	formatHex8: ye,
	formatRgb: be,
	toString: be
}));
function ve() {
	return `#${j(this.r)}${j(this.g)}${j(this.b)}`;
}
function ye() {
	return `#${j(this.r)}${j(this.g)}${j(this.b)}${j((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function be() {
	let e = k(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${A(this.r)}, ${A(this.g)}, ${A(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function k(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function A(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function j(e) {
	return e = A(e), (e < 16 ? "0" : "") + e.toString(16);
}
function xe(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new M(e, t, n, r);
}
function Se(e) {
	if (e instanceof M) return new M(e.h, e.s, e.l, e.opacity);
	if (e instanceof y || (e = T(e)), !e) return new M();
	if (e instanceof M) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new M(o, s, c, e.opacity);
}
function Ce(e, t, n, r) {
	return arguments.length === 1 ? Se(e) : new M(e, t, n, r ?? 1);
}
function M(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
_(M, Ce, v(y, {
	brighter(e) {
		return e = e == null ? x : x ** +e, new M(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? b : b ** +e, new M(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new O(P(e >= 240 ? e - 240 : e + 120, i, r), P(e, i, r), P(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new M(we(this.h), N(this.s), N(this.l), k(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = k(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${we(this.h)}, ${N(this.s) * 100}%, ${N(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function we(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function N(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function P(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region node_modules/d3-interpolate/src/basis.js
function Te(e, t, n, r, i) {
	var a = e * e, o = a * e;
	return ((1 - 3 * e + 3 * a - o) * t + (4 - 6 * a + 3 * o) * n + (1 + 3 * e + 3 * a - 3 * o) * r + o * i) / 6;
}
function Ee(e) {
	var t = e.length - 1;
	return function(n) {
		var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), i = e[r], a = e[r + 1], o = r > 0 ? e[r - 1] : 2 * i - a, s = r < t - 1 ? e[r + 2] : 2 * a - i;
		return Te((n - r / t) * t, o, i, a, s);
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/constant.js
var F = (e) => () => e;
//#endregion
//#region node_modules/d3-interpolate/src/color.js
function De(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function Oe(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function ke(e, t) {
	var n = t - e;
	return n ? De(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : F(isNaN(e) ? t : e);
}
function Ae(e) {
	return (e = +e) == 1 ? I : function(t, n) {
		return n - t ? Oe(t, n, e) : F(isNaN(t) ? n : t);
	};
}
function I(e, t) {
	var n = t - e;
	return n ? De(e, n) : F(isNaN(e) ? t : e);
}
//#endregion
//#region node_modules/d3-interpolate/src/rgb.js
var L = (function e(t) {
	var n = Ae(t);
	function r(e, t) {
		var r = n((e = D(e)).r, (t = D(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = I(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
function je(e) {
	return function(t) {
		var n = t.length, r = Array(n), i = Array(n), a = Array(n), o, s;
		for (o = 0; o < n; ++o) s = D(t[o]), r[o] = s.r || 0, i[o] = s.g || 0, a[o] = s.b || 0;
		return r = e(r), i = e(i), a = e(a), s.opacity = 1, function(e) {
			return s.r = r(e), s.g = i(e), s.b = a(e), s + "";
		};
	};
}
var Me = je(Ee);
//#endregion
//#region node_modules/d3-interpolate/src/number.js
function R(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/string.js
var z = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ne = new RegExp(z.source, "g");
function Pe(e) {
	return function() {
		return e;
	};
}
function Fe(e) {
	return function(t) {
		return e(t) + "";
	};
}
function Ie(e, t) {
	var n = z.lastIndex = Ne.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = z.exec(e)) && (i = Ne.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: R(r, i)
	})), n = Ne.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Fe(c[0].x) : Pe(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/decompose.js
var Le = 180 / Math.PI, Re = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function ze(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * Le,
		skewX: Math.atan(c) * Le,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/parse.js
var Be;
function Ve(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? Re : ze(t.a, t.b, t.c, t.d, t.e, t.f);
}
function He(e) {
	return e == null || (Be ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), Be.setAttribute("transform", e), !(e = Be.transform.baseVal.consolidate())) ? Re : (e = e.matrix, ze(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/index.js
function Ue(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: R(e, i)
			}, {
				i: c - 2,
				x: R(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: R(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: R(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: R(e, n)
			}, {
				i: s - 2,
				x: R(t, r)
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
var We = Ue(Ve, "px, ", "px)", "deg)"), Ge = Ue(He, ", ", ")", ")"), B = 0, V = 0, Ke = 0, qe = 1e3, H, U, W = 0, G = 0, K = 0, q = typeof performance == "object" && performance.now ? performance : Date, Je = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function Ye() {
	return G ||= (Je(Xe), q.now() + K);
}
function Xe() {
	G = 0;
}
function J() {
	this._call = this._time = this._next = null;
}
J.prototype = Ze.prototype = {
	constructor: J,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? Ye() : +n) + (t == null ? 0 : +t), !this._next && U !== this && (U ? U._next = this : H = this, U = this), this._call = e, this._time = n, nt();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, nt());
	}
};
function Ze(e, t, n) {
	var r = new J();
	return r.restart(e, t, n), r;
}
function Qe() {
	Ye(), ++B;
	for (var e = H, t; e;) (t = G - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--B;
}
function $e() {
	G = (W = q.now()) + K, B = V = 0;
	try {
		Qe();
	} finally {
		B = 0, tt(), G = 0;
	}
}
function et() {
	var e = q.now(), t = e - W;
	t > qe && (K -= t, W = e);
}
function tt() {
	for (var e, t = H, n, r = Infinity; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : H = n);
	U = e, nt(r);
}
function nt(e) {
	B || (V &&= clearTimeout(V), e - G > 24 ? (e < Infinity && (V = setTimeout($e, e - q.now() - K)), Ke &&= clearInterval(Ke)) : (Ke ||= (W = q.now(), setInterval(et, qe)), B = 1, Je($e)));
}
//#endregion
//#region node_modules/d3-timer/src/timeout.js
function rt(e, t, n) {
	var r = new J();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
//#endregion
//#region node_modules/d3-transition/src/transition/schedule.js
var it = u("start", "end", "cancel", "interrupt"), at = [];
function Y(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	st(e, n, {
		name: t,
		index: r,
		group: i,
		on: it,
		tween: at,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: 0
	});
}
function ot(e, t) {
	var n = Z(e, t);
	if (n.state > 0) throw Error("too late; already scheduled");
	return n;
}
function X(e, t) {
	var n = Z(e, t);
	if (n.state > 3) throw Error("too late; already running");
	return n;
}
function Z(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function st(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = Ze(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay);
	}
	function o(a) {
		var l, u, d, f;
		if (n.state !== 1) return c();
		for (l in r) if (f = r[l], f.name === n.name) {
			if (f.state === 3) return rt(o);
			f.state === 4 ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = 6, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete r[l]);
		}
		if (rt(function() {
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
function ct(e, t) {
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
function lt(e) {
	return this.each(function() {
		ct(this, e);
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/tween.js
function ut(e, t) {
	var n, r;
	return function() {
		var i = X(this, e), a = i.tween;
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
function dt(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = X(this, e), o = a.tween;
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
function ft(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = Z(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? ut : dt)(n, e, t));
}
function pt(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = X(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return Z(e, r).value[t];
	};
}
//#endregion
//#region node_modules/d3-transition/src/transition/interpolate.js
function mt(e, t) {
	var n;
	return (typeof t == "number" ? R : t instanceof T ? L : (n = T(t)) ? (t = n, L) : Ie)(e, t);
}
//#endregion
//#region node_modules/d3-transition/src/transition/attr.js
function ht(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function gt(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function _t(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function vt(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function yt(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function bt(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function xt(e, n) {
	var r = t(e), i = r === "transform" ? Ge : mt;
	return this.attrTween(e, typeof n == "function" ? (r.local ? bt : yt)(r, i, pt(this, "attr." + e, n)) : n == null ? (r.local ? gt : ht)(r) : (r.local ? vt : _t)(r, i, n));
}
//#endregion
//#region node_modules/d3-transition/src/transition/attrTween.js
function St(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function Ct(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function wt(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Ct(e, i)), n;
	}
	return i._value = t, i;
}
function Tt(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && St(e, i)), n;
	}
	return i._value = t, i;
}
function Et(e, n) {
	var r = "attr." + e;
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (n == null) return this.tween(r, null);
	if (typeof n != "function") throw Error();
	var i = t(e);
	return this.tween(r, (i.local ? wt : Tt)(i, n));
}
//#endregion
//#region node_modules/d3-transition/src/transition/delay.js
function Dt(e, t) {
	return function() {
		ot(this, e).delay = +t.apply(this, arguments);
	};
}
function Ot(e, t) {
	return t = +t, function() {
		ot(this, e).delay = t;
	};
}
function kt(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? Dt : Ot)(t, e)) : Z(this.node(), t).delay;
}
//#endregion
//#region node_modules/d3-transition/src/transition/duration.js
function At(e, t) {
	return function() {
		X(this, e).duration = +t.apply(this, arguments);
	};
}
function jt(e, t) {
	return t = +t, function() {
		X(this, e).duration = t;
	};
}
function Mt(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? At : jt)(t, e)) : Z(this.node(), t).duration;
}
//#endregion
//#region node_modules/d3-transition/src/transition/ease.js
function Nt(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		X(this, e).ease = t;
	};
}
function Pt(e) {
	var t = this._id;
	return arguments.length ? this.each(Nt(t, e)) : Z(this.node(), t).ease;
}
//#endregion
//#region node_modules/d3-transition/src/transition/easeVarying.js
function Ft(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		X(this, e).ease = n;
	};
}
function It(e) {
	if (typeof e != "function") throw Error();
	return this.each(Ft(this._id, e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/filter.js
function Lt(e) {
	typeof e != "function" && (e = i(e));
	for (var t = this._groups, n = t.length, r = Array(n), a = 0; a < n; ++a) for (var o = t[a], s = o.length, c = r[a] = [], l, u = 0; u < s; ++u) (l = o[u]) && e.call(l, l.__data__, u, o) && c.push(l);
	return new Q(r, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/merge.js
function Rt(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new Q(o, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/on.js
function zt(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function Bt(e, t, n) {
	var r, i, a = zt(t) ? ot : X;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function Vt(e, t) {
	var n = this._id;
	return arguments.length < 2 ? Z(this.node(), n).on.on(e) : this.each(Bt(n, e, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/remove.js
function Ht(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function Ut() {
	return this.on("end.remove", Ht(this._id));
}
//#endregion
//#region node_modules/d3-transition/src/transition/select.js
function Wt(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = r(e));
	for (var i = this._groups, a = i.length, o = Array(a), s = 0; s < a; ++s) for (var c = i[s], l = c.length, u = o[s] = Array(l), d, f, p = 0; p < l; ++p) (d = c[p]) && (f = e.call(d, d.__data__, p, c)) && ("__data__" in d && (f.__data__ = d.__data__), u[p] = f, Y(u[p], t, n, p, u, Z(d, n)));
	return new Q(o, this._parents, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selectAll.js
function Gt(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = a(e));
	for (var r = this._groups, i = r.length, o = [], s = [], c = 0; c < i; ++c) for (var l = r[c], u = l.length, d, f = 0; f < u; ++f) if (d = l[f]) {
		for (var p = e.call(d, d.__data__, f, l), m, ee = Z(d, n), h = 0, te = p.length; h < te; ++h) (m = p[h]) && Y(m, t, n, h, p, ee);
		o.push(p), s.push(d);
	}
	return new Q(o, s, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selection.js
var Kt = n.prototype.constructor;
function qt() {
	return new Kt(this._groups, this._parents);
}
//#endregion
//#region node_modules/d3-transition/src/transition/style.js
function Jt(t, n) {
	var r, i, a;
	return function() {
		var o = e(this, t), s = (this.style.removeProperty(t), e(this, t));
		return o === s ? null : o === r && s === i ? a : a = n(r = o, i = s);
	};
}
function Yt(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function Xt(t, n, r) {
	var i, a = r + "", o;
	return function() {
		var s = e(this, t);
		return s === a ? null : s === i ? o : o = n(i = s, r);
	};
}
function Zt(t, n, r) {
	var i, a, o;
	return function() {
		var s = e(this, t), c = r(this), l = c + "";
		return c ?? (l = c = (this.style.removeProperty(t), e(this, t))), s === l ? null : s === i && l === a ? o : (a = l, o = n(i = s, c));
	};
}
function Qt(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = X(this, e), l = c.on, u = c.value[a] == null ? s ||= Yt(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function $t(e, t, n) {
	var r = (e += "") == "transform" ? We : mt;
	return t == null ? this.styleTween(e, Jt(e, r)).on("end.style." + e, Yt(e)) : typeof t == "function" ? this.styleTween(e, Zt(e, r, pt(this, "style." + e, t))).each(Qt(this._id, e)) : this.styleTween(e, Xt(e, r, t), n).on("end.style." + e, null);
}
//#endregion
//#region node_modules/d3-transition/src/transition/styleTween.js
function en(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function tn(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && en(e, a, n)), r;
	}
	return a._value = t, a;
}
function nn(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, tn(e, t, n ?? ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/text.js
function rn(e) {
	return function() {
		this.textContent = e;
	};
}
function an(e) {
	return function() {
		var t = e(this);
		this.textContent = t ?? "";
	};
}
function on(e) {
	return this.tween("text", typeof e == "function" ? an(pt(this, "text", e)) : rn(e == null ? "" : e + ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/textTween.js
function sn(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function cn(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && sn(r)), t;
	}
	return r._value = e, r;
}
function ln(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, cn(e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/transition.js
function un() {
	for (var e = this._name, t = this._id, n = mn(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = Z(c, t);
		Y(c, e, n, l, o, {
			time: u.time + u.delay + u.duration,
			delay: 0,
			duration: u.duration,
			ease: u.ease
		});
	}
	return new Q(r, this._parents, e, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/end.js
function dn() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = X(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/index.js
var fn = 0;
function Q(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function pn(e) {
	return n().transition(e);
}
function mn() {
	return ++fn;
}
var $ = n.prototype;
Q.prototype = pn.prototype = {
	constructor: Q,
	select: Wt,
	selectAll: Gt,
	selectChild: $.selectChild,
	selectChildren: $.selectChildren,
	filter: Lt,
	merge: Rt,
	selection: qt,
	transition: un,
	call: $.call,
	nodes: $.nodes,
	node: $.node,
	size: $.size,
	empty: $.empty,
	each: $.each,
	on: Vt,
	attr: xt,
	attrTween: Et,
	style: $t,
	styleTween: nn,
	text: on,
	textTween: ln,
	remove: Ut,
	tween: ft,
	delay: kt,
	duration: Mt,
	ease: Pt,
	easeVarying: It,
	end: dn,
	[Symbol.iterator]: $[Symbol.iterator]
};
//#endregion
//#region node_modules/d3-ease/src/cubic.js
function hn(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region node_modules/d3-transition/src/selection/transition.js
var gn = {
	time: null,
	delay: 0,
	duration: 250,
	ease: hn
};
function _n(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function vn(e) {
	var t, n;
	e instanceof Q ? (t = e._id, e = e._name) : (t = mn(), (n = gn).time = Ye(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && Y(c, e, t, l, o, n || _n(c, t));
	return new Q(r, this._parents, e, t);
}
n.prototype.interrupt = lt, n.prototype.transition = vn;
//#endregion
export { g as C, u as D, te as E, c as O, re as S, h as T, D as _, R as a, v as b, ke as c, y as d, O as f, Ce as g, b as h, Ie as i, I as l, T as m, ct as n, Me as o, x as p, Ze as r, L as s, pn as t, F as u, _e as v, ee as w, ne as x, _ as y };

//# sourceMappingURL=src-DnMaAyIP.js.map