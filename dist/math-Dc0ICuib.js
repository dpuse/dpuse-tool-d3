import "./src-Du_hPZAX.js";
import { C as e, _ as t, a as n, c as r, g as i, h as a, i as o, n as s, o as c, r as l } from "./linear-D3BD7E1p.js";
//#region node_modules/d3-time/src/interval.js
var u = /* @__PURE__ */ new Date(), d = /* @__PURE__ */ new Date();
function f(e, t, n, r) {
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
	}, i.filter = (n) => f((t) => {
		if (t >= t) for (; e(t), !n(t);) t.setTime(t - 1);
	}, (e, r) => {
		if (e >= e) if (r < 0) for (; ++r <= 0;) for (; t(e, -1), !n(e););
		else for (; --r >= 0;) for (; t(e, 1), !n(e););
	}), n && (i.count = (t, r) => (u.setTime(+t), d.setTime(+r), e(u), e(d), Math.floor(n(u, d))), i.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? i.filter(r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0) : i)), i;
}
//#endregion
//#region node_modules/d3-time/src/millisecond.js
var p = f(() => {}, (e, t) => {
	e.setTime(+e + t);
}, (e, t) => t - e);
p.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? f((t) => {
	t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
	t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : p), p.range;
//#endregion
//#region node_modules/d3-time/src/duration.js
var m = 1e3, h = m * 60, g = h * 60, _ = g * 24, v = _ * 7, y = _ * 30, b = _ * 365, x = f((e) => {
	e.setTime(e - e.getMilliseconds());
}, (e, t) => {
	e.setTime(+e + t * m);
}, (e, t) => (t - e) / m, (e) => e.getUTCSeconds());
x.range;
//#endregion
//#region node_modules/d3-time/src/minute.js
var S = f((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * m);
}, (e, t) => {
	e.setTime(+e + t * h);
}, (e, t) => (t - e) / h, (e) => e.getMinutes());
S.range;
var C = f((e) => {
	e.setUTCSeconds(0, 0);
}, (e, t) => {
	e.setTime(+e + t * h);
}, (e, t) => (t - e) / h, (e) => e.getUTCMinutes());
C.range;
//#endregion
//#region node_modules/d3-time/src/hour.js
var w = f((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * m - e.getMinutes() * h);
}, (e, t) => {
	e.setTime(+e + t * g);
}, (e, t) => (t - e) / g, (e) => e.getHours());
w.range;
var T = f((e) => {
	e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
	e.setTime(+e + t * g);
}, (e, t) => (t - e) / g, (e) => e.getUTCHours());
T.range;
//#endregion
//#region node_modules/d3-time/src/day.js
var E = f((e) => e.setHours(0, 0, 0, 0), (e, t) => e.setDate(e.getDate() + t), (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * h) / _, (e) => e.getDate() - 1);
E.range;
var D = f((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / _, (e) => e.getUTCDate() - 1);
D.range;
var O = f((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / _, (e) => Math.floor(e / _));
O.range;
//#endregion
//#region node_modules/d3-time/src/week.js
function k(e) {
	return f((t) => {
		t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setDate(e.getDate() + t * 7);
	}, (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * h) / v);
}
var A = k(0), j = k(1), M = k(2), N = k(3), P = k(4), ee = k(5), te = k(6);
A.range, j.range, M.range, N.range, P.range, ee.range, te.range;
function F(e) {
	return f((t) => {
		t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setUTCDate(e.getUTCDate() + t * 7);
	}, (e, t) => (t - e) / v);
}
var I = F(0), L = F(1), R = F(2), z = F(3), B = F(4), V = F(5), H = F(6);
I.range, L.range, R.range, z.range, B.range, V.range, H.range;
//#endregion
//#region node_modules/d3-time/src/month.js
var U = f((e) => {
	e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
U.range;
var W = f((e) => {
	e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
W.range;
//#endregion
//#region node_modules/d3-time/src/year.js
var G = f((e) => {
	e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
G.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : f((t) => {
	t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
	t.setFullYear(t.getFullYear() + n * e);
}), G.range;
var K = f((e) => {
	e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
K.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : f((t) => {
	t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
	t.setUTCFullYear(t.getUTCFullYear() + n * e);
}), K.range;
//#endregion
//#region node_modules/d3-time/src/ticks.js
function ne(t, n, r, a, o, s) {
	let c = [
		[
			x,
			1,
			m
		],
		[
			x,
			5,
			5 * m
		],
		[
			x,
			15,
			15 * m
		],
		[
			x,
			30,
			30 * m
		],
		[
			s,
			1,
			h
		],
		[
			s,
			5,
			5 * h
		],
		[
			s,
			15,
			15 * h
		],
		[
			s,
			30,
			30 * h
		],
		[
			o,
			1,
			g
		],
		[
			o,
			3,
			3 * g
		],
		[
			o,
			6,
			6 * g
		],
		[
			o,
			12,
			12 * g
		],
		[
			a,
			1,
			_
		],
		[
			a,
			2,
			2 * _
		],
		[
			r,
			1,
			v
		],
		[
			n,
			1,
			y
		],
		[
			n,
			3,
			3 * y
		],
		[
			t,
			1,
			b
		]
	];
	function l(e, t, n) {
		let r = t < e;
		r && ([e, t] = [t, e]);
		let i = n && typeof n.range == "function" ? n : u(e, t, n), a = i ? i.range(e, +t + 1) : [];
		return r ? a.reverse() : a;
	}
	function u(n, r, a) {
		let o = Math.abs(r - n) / a, s = e(([, , e]) => e).right(c, o);
		if (s === c.length) return t.every(i(n / b, r / b, a));
		if (s === 0) return p.every(Math.max(i(n, r, a), 1));
		let [l, u] = c[o / c[s - 1][2] < c[s][2] / o ? s - 1 : s];
		return l.every(u);
	}
	return [l, u];
}
var [re, ie] = ne(K, W, I, O, T, C), [ae, oe] = ne(G, U, A, E, w, S);
//#endregion
//#region node_modules/d3-time-format/src/locale.js
function q(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
		return t.setFullYear(e.y), t;
	}
	return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function se(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
		return t.setUTCFullYear(e.y), t;
	}
	return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function J(e, t, n) {
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
function ce(e) {
	var t = e.dateTime, n = e.date, r = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, l = Z(i), u = Q(i), d = Z(a), f = Q(a), p = Z(o), m = Q(o), h = Z(s), g = Q(s), _ = Z(c), v = Q(c), y = {
		a: te,
		A: F,
		b: I,
		B: R,
		c: null,
		d: Ne,
		e: Ne,
		f: Re,
		g: Ye,
		G: Ze,
		H: Pe,
		I: Fe,
		j: Ie,
		L: Le,
		m: ze,
		M: Be,
		p: z,
		q: B,
		Q: bt,
		s: xt,
		S: Ve,
		u: He,
		U: Ue,
		V: Ge,
		w: Ke,
		W: qe,
		x: null,
		X: null,
		y: Je,
		Y: Xe,
		Z: Qe,
		"%": yt
	}, b = {
		a: V,
		A: H,
		b: U,
		B: W,
		c: null,
		d: $e,
		e: $e,
		f: it,
		g: ht,
		G: _t,
		H: et,
		I: tt,
		j: nt,
		L: rt,
		m: at,
		M: ot,
		p: G,
		q: K,
		Q: bt,
		s: xt,
		S: st,
		u: ct,
		U: lt,
		V: dt,
		w: ft,
		W: pt,
		x: null,
		X: null,
		y: mt,
		Y: gt,
		Z: vt,
		"%": yt
	}, x = {
		a: O,
		A: k,
		b: A,
		B: M,
		c: N,
		d: Ce,
		e: Ce,
		f: ke,
		g: ye,
		G: ve,
		H: Te,
		I: Te,
		j: we,
		L: Oe,
		m: Se,
		M: Ee,
		p: T,
		q: xe,
		Q: je,
		s: Me,
		S: De,
		u: me,
		U: he,
		V: ge,
		w: pe,
		W: _e,
		x: P,
		X: ee,
		y: ye,
		Y: ve,
		Z: be,
		"%": Ae
	};
	y.x = S(n, y), y.X = S(r, y), y.c = S(t, y), b.x = S(n, b), b.X = S(r, b), b.c = S(t, b);
	function S(e, t) {
		return function(n) {
			var r = [], i = -1, a = 0, o = e.length, s, c, l;
			for (n instanceof Date || (n = /* @__PURE__ */ new Date(+n)); ++i < o;) e.charCodeAt(i) === 37 && (r.push(e.slice(a, i)), (c = le[s = e.charAt(++i)]) == null ? c = s === "e" ? " " : "0" : s = e.charAt(++i), (l = t[s]) && (s = l(n, c)), r.push(s), a = i + 1);
			return r.push(e.slice(a, i)), r.join("");
		};
	}
	function C(e, t) {
		return function(n) {
			var r = J(1900, void 0, 1), i = w(r, e, n += "", 0), a, o;
			if (i != n.length) return null;
			if ("Q" in r) return new Date(r.Q);
			if ("s" in r) return new Date(r.s * 1e3 + ("L" in r ? r.L : 0));
			if (t && !("Z" in r) && (r.Z = 0), "p" in r && (r.H = r.H % 12 + r.p * 12), r.m === void 0 && (r.m = "q" in r ? r.q : 0), "V" in r) {
				if (r.V < 1 || r.V > 53) return null;
				"w" in r || (r.w = 1), "Z" in r ? (a = se(J(r.y, 0, 1)), o = a.getUTCDay(), a = o > 4 || o === 0 ? L.ceil(a) : L(a), a = D.offset(a, (r.V - 1) * 7), r.y = a.getUTCFullYear(), r.m = a.getUTCMonth(), r.d = a.getUTCDate() + (r.w + 6) % 7) : (a = q(J(r.y, 0, 1)), o = a.getDay(), a = o > 4 || o === 0 ? j.ceil(a) : j(a), a = E.offset(a, (r.V - 1) * 7), r.y = a.getFullYear(), r.m = a.getMonth(), r.d = a.getDate() + (r.w + 6) % 7);
			} else ("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : +("W" in r)), o = "Z" in r ? se(J(r.y, 0, 1)).getUTCDay() : q(J(r.y, 0, 1)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + r.W * 7 - (o + 5) % 7 : r.w + r.U * 7 - (o + 6) % 7);
			return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, se(r)) : q(r);
		};
	}
	function w(e, t, n, r) {
		for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
			if (r >= o) return -1;
			if (s = t.charCodeAt(i++), s === 37) {
				if (s = t.charAt(i++), c = x[s in le ? t.charAt(i++) : s], !c || (r = c(e, n, r)) < 0) return -1;
			} else if (s != n.charCodeAt(r++)) return -1;
		}
		return r;
	}
	function T(e, t, n) {
		var r = l.exec(t.slice(n));
		return r ? (e.p = u.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function O(e, t, n) {
		var r = p.exec(t.slice(n));
		return r ? (e.w = m.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function k(e, t, n) {
		var r = d.exec(t.slice(n));
		return r ? (e.w = f.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function A(e, t, n) {
		var r = _.exec(t.slice(n));
		return r ? (e.m = v.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function M(e, t, n) {
		var r = h.exec(t.slice(n));
		return r ? (e.m = g.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function N(e, n, r) {
		return w(e, t, n, r);
	}
	function P(e, t, r) {
		return w(e, n, t, r);
	}
	function ee(e, t, n) {
		return w(e, r, t, n);
	}
	function te(e) {
		return o[e.getDay()];
	}
	function F(e) {
		return a[e.getDay()];
	}
	function I(e) {
		return c[e.getMonth()];
	}
	function R(e) {
		return s[e.getMonth()];
	}
	function z(e) {
		return i[+(e.getHours() >= 12)];
	}
	function B(e) {
		return 1 + ~~(e.getMonth() / 3);
	}
	function V(e) {
		return o[e.getUTCDay()];
	}
	function H(e) {
		return a[e.getUTCDay()];
	}
	function U(e) {
		return c[e.getUTCMonth()];
	}
	function W(e) {
		return s[e.getUTCMonth()];
	}
	function G(e) {
		return i[+(e.getUTCHours() >= 12)];
	}
	function K(e) {
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
var le = {
	"-": "",
	_: " ",
	0: "0"
}, Y = /^\s*\d+/, ue = /^%/, de = /[\\^$*+?|[\]().{}]/g;
function X(e, t, n) {
	var r = e < 0 ? "-" : "", i = (r ? -e : e) + "", a = i.length;
	return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function fe(e) {
	return e.replace(de, "\\$&");
}
function Z(e) {
	return RegExp("^(?:" + e.map(fe).join("|") + ")", "i");
}
function Q(e) {
	return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function pe(e, t, n) {
	var r = Y.exec(t.slice(n, n + 1));
	return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function me(e, t, n) {
	var r = Y.exec(t.slice(n, n + 1));
	return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function he(e, t, n) {
	var r = Y.exec(t.slice(n, n + 2));
	return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function ge(e, t, n) {
	var r = Y.exec(t.slice(n, n + 2));
	return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function _e(e, t, n) {
	var r = Y.exec(t.slice(n, n + 2));
	return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function ve(e, t, n) {
	var r = Y.exec(t.slice(n, n + 4));
	return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function ye(e, t, n) {
	var r = Y.exec(t.slice(n, n + 2));
	return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function be(e, t, n) {
	var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
	return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function xe(e, t, n) {
	var r = Y.exec(t.slice(n, n + 1));
	return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Se(e, t, n) {
	var r = Y.exec(t.slice(n, n + 2));
	return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function Ce(e, t, n) {
	var r = Y.exec(t.slice(n, n + 2));
	return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function we(e, t, n) {
	var r = Y.exec(t.slice(n, n + 3));
	return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function Te(e, t, n) {
	var r = Y.exec(t.slice(n, n + 2));
	return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function Ee(e, t, n) {
	var r = Y.exec(t.slice(n, n + 2));
	return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function De(e, t, n) {
	var r = Y.exec(t.slice(n, n + 2));
	return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function Oe(e, t, n) {
	var r = Y.exec(t.slice(n, n + 3));
	return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function ke(e, t, n) {
	var r = Y.exec(t.slice(n, n + 6));
	return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Ae(e, t, n) {
	var r = ue.exec(t.slice(n, n + 1));
	return r ? n + r[0].length : -1;
}
function je(e, t, n) {
	var r = Y.exec(t.slice(n));
	return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function Me(e, t, n) {
	var r = Y.exec(t.slice(n));
	return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function Ne(e, t) {
	return X(e.getDate(), t, 2);
}
function Pe(e, t) {
	return X(e.getHours(), t, 2);
}
function Fe(e, t) {
	return X(e.getHours() % 12 || 12, t, 2);
}
function Ie(e, t) {
	return X(1 + E.count(G(e), e), t, 3);
}
function Le(e, t) {
	return X(e.getMilliseconds(), t, 3);
}
function Re(e, t) {
	return Le(e, t) + "000";
}
function ze(e, t) {
	return X(e.getMonth() + 1, t, 2);
}
function Be(e, t) {
	return X(e.getMinutes(), t, 2);
}
function Ve(e, t) {
	return X(e.getSeconds(), t, 2);
}
function He(e) {
	var t = e.getDay();
	return t === 0 ? 7 : t;
}
function Ue(e, t) {
	return X(A.count(G(e) - 1, e), t, 2);
}
function We(e) {
	var t = e.getDay();
	return t >= 4 || t === 0 ? P(e) : P.ceil(e);
}
function Ge(e, t) {
	return e = We(e), X(P.count(G(e), e) + (G(e).getDay() === 4), t, 2);
}
function Ke(e) {
	return e.getDay();
}
function qe(e, t) {
	return X(j.count(G(e) - 1, e), t, 2);
}
function Je(e, t) {
	return X(e.getFullYear() % 100, t, 2);
}
function Ye(e, t) {
	return e = We(e), X(e.getFullYear() % 100, t, 2);
}
function Xe(e, t) {
	return X(e.getFullYear() % 1e4, t, 4);
}
function Ze(e, t) {
	var n = e.getDay();
	return e = n >= 4 || n === 0 ? P(e) : P.ceil(e), X(e.getFullYear() % 1e4, t, 4);
}
function Qe(e) {
	var t = e.getTimezoneOffset();
	return (t > 0 ? "-" : (t *= -1, "+")) + X(t / 60 | 0, "0", 2) + X(t % 60, "0", 2);
}
function $e(e, t) {
	return X(e.getUTCDate(), t, 2);
}
function et(e, t) {
	return X(e.getUTCHours(), t, 2);
}
function tt(e, t) {
	return X(e.getUTCHours() % 12 || 12, t, 2);
}
function nt(e, t) {
	return X(1 + D.count(K(e), e), t, 3);
}
function rt(e, t) {
	return X(e.getUTCMilliseconds(), t, 3);
}
function it(e, t) {
	return rt(e, t) + "000";
}
function at(e, t) {
	return X(e.getUTCMonth() + 1, t, 2);
}
function ot(e, t) {
	return X(e.getUTCMinutes(), t, 2);
}
function st(e, t) {
	return X(e.getUTCSeconds(), t, 2);
}
function ct(e) {
	var t = e.getUTCDay();
	return t === 0 ? 7 : t;
}
function lt(e, t) {
	return X(I.count(K(e) - 1, e), t, 2);
}
function ut(e) {
	var t = e.getUTCDay();
	return t >= 4 || t === 0 ? B(e) : B.ceil(e);
}
function dt(e, t) {
	return e = ut(e), X(B.count(K(e), e) + (K(e).getUTCDay() === 4), t, 2);
}
function ft(e) {
	return e.getUTCDay();
}
function pt(e, t) {
	return X(L.count(K(e) - 1, e), t, 2);
}
function mt(e, t) {
	return X(e.getUTCFullYear() % 100, t, 2);
}
function ht(e, t) {
	return e = ut(e), X(e.getUTCFullYear() % 100, t, 2);
}
function gt(e, t) {
	return X(e.getUTCFullYear() % 1e4, t, 4);
}
function _t(e, t) {
	var n = e.getUTCDay();
	return e = n >= 4 || n === 0 ? B(e) : B.ceil(e), X(e.getUTCFullYear() % 1e4, t, 4);
}
function vt() {
	return "+0000";
}
function yt() {
	return "%";
}
function bt(e) {
	return +e;
}
function xt(e) {
	return Math.floor(e / 1e3);
}
//#endregion
//#region node_modules/d3-time-format/src/defaultLocale.js
var $, St, Ct, wt, Tt;
Et({
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
function Et(e) {
	return $ = ce(e), St = $.format, Ct = $.parse, wt = $.utcFormat, Tt = $.utcParse, $;
}
//#endregion
//#region node_modules/d3-scale/src/nice.js
function Dt(e, t) {
	e = e.slice();
	var n = 0, r = e.length - 1, i = e[n], a = e[r], o;
	return a < i && (o = n, n = r, r = o, o = i, i = a, a = o), e[n] = t.floor(i), e[r] = t.ceil(a), e;
}
//#endregion
//#region node_modules/d3-scale/src/log.js
function Ot(e) {
	return Math.log(e);
}
function kt(e) {
	return Math.exp(e);
}
function At(e) {
	return -Math.log(-e);
}
function jt(e) {
	return -Math.exp(-e);
}
function Mt(e) {
	return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function Nt(e) {
	return e === 10 ? Mt : e === Math.E ? Math.exp : (t) => e ** +t;
}
function Pt(e) {
	return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Ft(e) {
	return (t, n) => -e(-t, n);
}
function It(e) {
	let n = e(Ot, kt), r = n.domain, i = 10, a, s;
	function c() {
		return a = Pt(i), s = Nt(i), r()[0] < 0 ? (a = Ft(a), s = Ft(s), e(At, jt)) : e(Ot, kt), n;
	}
	return n.base = function(e) {
		return arguments.length ? (i = +e, c()) : i;
	}, n.domain = function(e) {
		return arguments.length ? (r(e), c()) : r();
	}, n.ticks = (e) => {
		let n = r(), o = n[0], c = n[n.length - 1], l = c < o;
		l && ([o, c] = [c, o]);
		let u = a(o), d = a(c), f, p, m = e == null ? 10 : +e, h = [];
		if (!(i % 1) && d - u < m) {
			if (u = Math.floor(u), d = Math.ceil(d), o > 0) {
				for (; u <= d; ++u) for (f = 1; f < i; ++f) if (p = u < 0 ? f / s(-u) : f * s(u), !(p < o)) {
					if (p > c) break;
					h.push(p);
				}
			} else for (; u <= d; ++u) for (f = i - 1; f >= 1; --f) if (p = u > 0 ? f / s(-u) : f * s(u), !(p < o)) {
				if (p > c) break;
				h.push(p);
			}
			h.length * 2 < m && (h = t(o, c, m));
		} else h = t(u, d, Math.min(d - u, m)).map(s);
		return l ? h.reverse() : h;
	}, n.tickFormat = (e, t) => {
		if (e ??= 10, t ??= i === 10 ? "s" : ",", typeof t != "function" && (!(i % 1) && (t = o(t)).precision == null && (t.trim = !0), t = l(t)), e === Infinity) return t;
		let r = Math.max(1, i * e / n.ticks().length);
		return (e) => {
			let n = e / s(Math.round(a(e)));
			return n * i < i - .5 && (n *= i), n <= r ? t(e) : "";
		};
	}, n.nice = () => r(Dt(r(), {
		floor: (e) => s(Math.floor(a(e))),
		ceil: (e) => s(Math.ceil(a(e)))
	})), n;
}
function Lt() {
	let e = It(r()).domain([1, 10]);
	return e.copy = () => c(e, Lt()).base(e.base()), a.apply(e, arguments), e;
}
//#endregion
//#region node_modules/d3-scale/src/symlog.js
function Rt(e) {
	return function(t) {
		return Math.sign(t) * Math.log1p(Math.abs(t / e));
	};
}
function zt(e) {
	return function(t) {
		return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
	};
}
function Bt(e) {
	var t = 1, n = e(Rt(t), zt(t));
	return n.constant = function(n) {
		return arguments.length ? e(Rt(t = +n), zt(t)) : t;
	}, s(n);
}
function Vt() {
	var e = Bt(r());
	return e.copy = function() {
		return c(e, Vt()).constant(e.constant());
	}, a.apply(e, arguments);
}
//#endregion
//#region node_modules/d3-scale/src/time.js
function Ht(e) {
	return new Date(e);
}
function Ut(e) {
	return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Wt(e, t, r, i, a, o, s, l, u, d) {
	var f = n(), p = f.invert, m = f.domain, h = d(".%L"), g = d(":%S"), _ = d("%I:%M"), v = d("%I %p"), y = d("%a %d"), b = d("%b %d"), x = d("%B"), S = d("%Y");
	function C(e) {
		return (u(e) < e ? h : l(e) < e ? g : s(e) < e ? _ : o(e) < e ? v : i(e) < e ? a(e) < e ? y : b : r(e) < e ? x : S)(e);
	}
	return f.invert = function(e) {
		return new Date(p(e));
	}, f.domain = function(e) {
		return arguments.length ? m(Array.from(e, Ut)) : m().map(Ht);
	}, f.ticks = function(t) {
		var n = m();
		return e(n[0], n[n.length - 1], t ?? 10);
	}, f.tickFormat = function(e, t) {
		return t == null ? C : d(t);
	}, f.nice = function(e) {
		var n = m();
		return (!e || typeof e.range != "function") && (e = t(n[0], n[n.length - 1], e ?? 10)), e ? m(Dt(n, e)) : f;
	}, f.copy = function() {
		return c(f, Wt(e, t, r, i, a, o, s, l, u, d));
	}, f;
}
function Gt() {
	return a.apply(Wt(ae, oe, G, U, A, E, w, S, x, St).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
//#endregion
//#region node_modules/d3-scale/src/utcTime.js
function Kt() {
	return a.apply(Wt(re, ie, K, W, I, D, T, C, x, wt).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
//#endregion
//#region node_modules/d3-brush/src/brush.js
var { abs: qt, max: Jt, min: Yt } = Math;
["w", "e"].map(Xt), ["n", "s"].map(Xt), [
	"n",
	"w",
	"e",
	"s",
	"nw",
	"ne",
	"sw",
	"se"
].map(Xt);
function Xt(e) {
	return { type: e };
}
function Zt(e) {
	var t = e.__brush;
	return t ? t.dim.output(t.selection) : null;
}
//#endregion
//#region node_modules/d3-shape/src/math.js
var Qt = Math.cos, $t = Math.min, en = Math.sin, tn = Math.sqrt, nn = 1e-12, rn = Math.PI;
rn / 2;
var an = 2 * rn;
//#endregion
export { V as A, T as B, ee as C, P as D, A as E, R as F, C as H, z as I, E as L, H as M, I as N, M as O, B as P, O as R, W as S, te as T, x as U, S as V, wt as _, en as a, K as b, Zt as c, Vt as d, Bt as f, Ct as g, St as h, rn as i, L as j, N as k, Kt as l, It as m, nn as n, tn as o, Lt as p, $t as r, an as s, Qt as t, Gt as u, Tt as v, j as w, U as x, G as y, w as z };

//# sourceMappingURL=math-Dc0ICuib.js.map