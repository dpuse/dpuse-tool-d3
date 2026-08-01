import { a as e, i as t, m as n, s as r, u as i } from "./src-DnMaAyIP.js";
//#region node_modules/d3-time/src/interval.js
var a = /* @__PURE__ */ new Date(), o = /* @__PURE__ */ new Date();
function s(e, t, n, r) {
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
	}, i.filter = (n) => s((t) => {
		if (t >= t) for (; e(t), !n(t);) t.setTime(t - 1);
	}, (e, r) => {
		if (e >= e) if (r < 0) for (; ++r <= 0;) for (; t(e, -1), !n(e););
		else for (; --r >= 0;) for (; t(e, 1), !n(e););
	}), n && (i.count = (t, r) => (a.setTime(+t), o.setTime(+r), e(a), e(o), Math.floor(n(a, o))), i.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? i.filter(r ? (t) => r(t) % e === 0 : (t) => i.count(0, t) % e === 0) : i)), i;
}
//#endregion
//#region node_modules/d3-time/src/millisecond.js
var c = s(() => {}, (e, t) => {
	e.setTime(+e + t);
}, (e, t) => t - e);
c.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? s((t) => {
	t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
	t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : c), c.range;
//#endregion
//#region node_modules/d3-time/src/duration.js
var l = 1e3, u = l * 60, d = u * 60, f = d * 24, p = f * 7, m = f * 30, h = f * 365, g = s((e) => {
	e.setTime(e - e.getMilliseconds());
}, (e, t) => {
	e.setTime(+e + t * l);
}, (e, t) => (t - e) / l, (e) => e.getUTCSeconds());
g.range;
//#endregion
//#region node_modules/d3-time/src/minute.js
var _ = s((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * l);
}, (e, t) => {
	e.setTime(+e + t * u);
}, (e, t) => (t - e) / u, (e) => e.getMinutes());
_.range;
var v = s((e) => {
	e.setUTCSeconds(0, 0);
}, (e, t) => {
	e.setTime(+e + t * u);
}, (e, t) => (t - e) / u, (e) => e.getUTCMinutes());
v.range;
//#endregion
//#region node_modules/d3-time/src/hour.js
var y = s((e) => {
	e.setTime(e - e.getMilliseconds() - e.getSeconds() * l - e.getMinutes() * u);
}, (e, t) => {
	e.setTime(+e + t * d);
}, (e, t) => (t - e) / d, (e) => e.getHours());
y.range;
var b = s((e) => {
	e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
	e.setTime(+e + t * d);
}, (e, t) => (t - e) / d, (e) => e.getUTCHours());
b.range;
//#endregion
//#region node_modules/d3-time/src/day.js
var x = s((e) => e.setHours(0, 0, 0, 0), (e, t) => e.setDate(e.getDate() + t), (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * u) / f, (e) => e.getDate() - 1);
x.range;
var S = s((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / f, (e) => e.getUTCDate() - 1);
S.range;
var C = s((e) => {
	e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / f, (e) => Math.floor(e / f));
C.range;
//#endregion
//#region node_modules/d3-time/src/week.js
function w(e) {
	return s((t) => {
		t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setDate(e.getDate() + t * 7);
	}, (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * u) / p);
}
var T = w(0), E = w(1), D = w(2), ee = w(3), O = w(4), te = w(5), ne = w(6);
T.range, E.range, D.range, ee.range, O.range, te.range, ne.range;
function k(e) {
	return s((t) => {
		t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
	}, (e, t) => {
		e.setUTCDate(e.getUTCDate() + t * 7);
	}, (e, t) => (t - e) / p);
}
var A = k(0), j = k(1), re = k(2), ie = k(3), M = k(4), ae = k(5), oe = k(6);
A.range, j.range, re.range, ie.range, M.range, ae.range, oe.range;
//#endregion
//#region node_modules/d3-time/src/month.js
var N = s((e) => {
	e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
N.range;
var P = s((e) => {
	e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
P.range;
//#endregion
//#region node_modules/d3-time/src/year.js
var F = s((e) => {
	e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
	e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
F.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : s((t) => {
	t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
	t.setFullYear(t.getFullYear() + n * e);
}), F.range;
var I = s((e) => {
	e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
	e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
I.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : s((t) => {
	t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
	t.setUTCFullYear(t.getUTCFullYear() + n * e);
}), I.range;
//#endregion
//#region node_modules/d3-array/src/ascending.js
function L(e, t) {
	return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-array/src/descending.js
function se(e, t) {
	return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-array/src/bisector.js
function R(e) {
	let t, n, r;
	e.length === 2 ? (t = e === L || e === se ? e : ce, n = e, r = e) : (t = L, n = (t, n) => L(e(t), n), r = (t, n) => e(t) - n);
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
function ce() {
	return 0;
}
//#endregion
//#region node_modules/d3-array/src/number.js
function le(e) {
	return e === null ? NaN : +e;
}
function* ue(e, t) {
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && (yield t);
	else {
		let n = -1;
		for (let r of e) (r = t(r, ++n, e)) != null && (r = +r) >= r && (yield r);
	}
}
//#endregion
//#region node_modules/d3-array/src/bisect.js
var de = R(L), fe = de.right;
de.left, R(le).center;
//#endregion
//#region node_modules/internmap/src/index.js
var pe = class extends Map {
	constructor(e, t = ve) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: t }
		}), e != null) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		return super.get(he(this, e));
	}
	has(e) {
		return super.has(he(this, e));
	}
	set(e, t) {
		return super.set(ge(this, e), t);
	}
	delete(e) {
		return super.delete(_e(this, e));
	}
}, me = class extends Set {
	constructor(e, t = ve) {
		if (super(), Object.defineProperties(this, {
			_intern: { value: /* @__PURE__ */ new Map() },
			_key: { value: t }
		}), e != null) for (let t of e) this.add(t);
	}
	has(e) {
		return super.has(he(this, e));
	}
	add(e) {
		return super.add(ge(this, e));
	}
	delete(e) {
		return super.delete(_e(this, e));
	}
};
function he({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : n;
}
function ge({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function _e({ _intern: e, _key: t }, n) {
	let r = t(n);
	return e.has(r) && (n = e.get(n), e.delete(r)), n;
}
function ve(e) {
	return typeof e == "object" && e ? e.valueOf() : e;
}
//#endregion
//#region node_modules/d3-array/src/ticks.js
var ye = Math.sqrt(50), be = Math.sqrt(10), xe = Math.sqrt(2);
function z(e, t, n) {
	let r = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / 10 ** i, o = a >= ye ? 10 : a >= be ? 5 : a >= xe ? 2 : 1, s, c, l;
	return i < 0 ? (l = 10 ** -i / o, s = Math.round(e * l), c = Math.round(t * l), s / l < e && ++s, c / l > t && --c, l = -l) : (l = 10 ** i * o, s = Math.round(e / l), c = Math.round(t / l), s * l < e && ++s, c * l > t && --c), c < s && .5 <= n && n < 2 ? z(e, t, n * 2) : [
		s,
		c,
		l
	];
}
function B(e, t, n) {
	if (t = +t, e = +e, n = +n, !(n > 0)) return [];
	if (e === t) return [e];
	let r = t < e, [i, a, o] = r ? z(t, e, n) : z(e, t, n);
	if (!(a >= i)) return [];
	let s = a - i + 1, c = Array(s);
	if (r) if (o < 0) for (let e = 0; e < s; ++e) c[e] = (a - e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (a - e) * o;
	else if (o < 0) for (let e = 0; e < s; ++e) c[e] = (i + e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (i + e) * o;
	return c;
}
function Se(e, t, n) {
	return t = +t, e = +e, n = +n, z(e, t, n)[2];
}
function Ce(e, t, n) {
	t = +t, e = +e, n = +n;
	let r = t < e, i = r ? Se(t, e, n) : Se(e, t, n);
	return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
//#endregion
//#region node_modules/d3-time/src/ticks.js
function we(e, t, n, r, i, a) {
	let o = [
		[
			g,
			1,
			l
		],
		[
			g,
			5,
			5 * l
		],
		[
			g,
			15,
			15 * l
		],
		[
			g,
			30,
			30 * l
		],
		[
			a,
			1,
			u
		],
		[
			a,
			5,
			5 * u
		],
		[
			a,
			15,
			15 * u
		],
		[
			a,
			30,
			30 * u
		],
		[
			i,
			1,
			d
		],
		[
			i,
			3,
			3 * d
		],
		[
			i,
			6,
			6 * d
		],
		[
			i,
			12,
			12 * d
		],
		[
			r,
			1,
			f
		],
		[
			r,
			2,
			2 * f
		],
		[
			n,
			1,
			p
		],
		[
			t,
			1,
			m
		],
		[
			t,
			3,
			3 * m
		],
		[
			e,
			1,
			h
		]
	];
	function s(e, t, n) {
		let r = t < e;
		r && ([e, t] = [t, e]);
		let i = n && typeof n.range == "function" ? n : _(e, t, n), a = i ? i.range(e, +t + 1) : [];
		return r ? a.reverse() : a;
	}
	function _(t, n, r) {
		let i = Math.abs(n - t) / r, a = R(([, , e]) => e).right(o, i);
		if (a === o.length) return e.every(Ce(t / h, n / h, r));
		if (a === 0) return c.every(Math.max(Ce(t, n, r), 1));
		let [s, l] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
		return s.every(l);
	}
	return [s, _];
}
var [Te, Ee] = we(I, P, A, C, b, v), [De, Oe] = we(F, N, T, x, y, _);
//#endregion
//#region node_modules/d3-time-format/src/locale.js
function ke(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
		return t.setFullYear(e.y), t;
	}
	return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ae(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
		return t.setUTCFullYear(e.y), t;
	}
	return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function V(e, t, n) {
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
function je(e) {
	var t = e.dateTime, n = e.date, r = e.time, i = e.periods, a = e.days, o = e.shortDays, s = e.months, c = e.shortMonths, l = W(i), u = G(i), d = W(a), f = G(a), p = W(o), m = G(o), h = W(s), g = G(s), _ = W(c), v = G(c), y = {
		a: M,
		A: ae,
		b: oe,
		B: N,
		c: null,
		d: nt,
		e: nt,
		f: st,
		g: vt,
		G: bt,
		H: rt,
		I: it,
		j: at,
		L: ot,
		m: ct,
		M: lt,
		p: P,
		q: F,
		Q: Ut,
		s: Wt,
		S: ut,
		u: dt,
		U: ft,
		V: mt,
		w: ht,
		W: gt,
		x: null,
		X: null,
		y: _t,
		Y: yt,
		Z: xt,
		"%": Ht
	}, b = {
		a: I,
		A: L,
		b: se,
		B: R,
		c: null,
		d: St,
		e: St,
		f: Dt,
		g: Rt,
		G: Bt,
		H: Ct,
		I: wt,
		j: Tt,
		L: Et,
		m: Ot,
		M: kt,
		p: ce,
		q: le,
		Q: Ut,
		s: Wt,
		S: At,
		u: jt,
		U: Mt,
		V: Pt,
		w: Ft,
		W: It,
		x: null,
		X: null,
		y: Lt,
		Y: zt,
		Z: Vt,
		"%": Ht
	}, C = {
		a: O,
		A: te,
		b: ne,
		B: k,
		c: A,
		d: Ke,
		e: Ke,
		f: Qe,
		g: He,
		G: Ve,
		H: Je,
		I: Je,
		j: qe,
		L: Ze,
		m: Ge,
		M: Ye,
		p: ee,
		q: We,
		Q: et,
		s: tt,
		S: Xe,
		u: Le,
		U: Re,
		V: ze,
		w: Ie,
		W: Be,
		x: re,
		X: ie,
		y: He,
		Y: Ve,
		Z: Ue,
		"%": $e
	};
	y.x = w(n, y), y.X = w(r, y), y.c = w(t, y), b.x = w(n, b), b.X = w(r, b), b.c = w(t, b);
	function w(e, t) {
		return function(n) {
			var r = [], i = -1, a = 0, o = e.length, s, c, l;
			for (n instanceof Date || (n = /* @__PURE__ */ new Date(+n)); ++i < o;) e.charCodeAt(i) === 37 && (r.push(e.slice(a, i)), (c = Me[s = e.charAt(++i)]) == null ? c = s === "e" ? " " : "0" : s = e.charAt(++i), (l = t[s]) && (s = l(n, c)), r.push(s), a = i + 1);
			return r.push(e.slice(a, i)), r.join("");
		};
	}
	function T(e, t) {
		return function(n) {
			var r = V(1900, void 0, 1), i = D(r, e, n += "", 0), a, o;
			if (i != n.length) return null;
			if ("Q" in r) return new Date(r.Q);
			if ("s" in r) return new Date(r.s * 1e3 + ("L" in r ? r.L : 0));
			if (t && !("Z" in r) && (r.Z = 0), "p" in r && (r.H = r.H % 12 + r.p * 12), r.m === void 0 && (r.m = "q" in r ? r.q : 0), "V" in r) {
				if (r.V < 1 || r.V > 53) return null;
				"w" in r || (r.w = 1), "Z" in r ? (a = Ae(V(r.y, 0, 1)), o = a.getUTCDay(), a = o > 4 || o === 0 ? j.ceil(a) : j(a), a = S.offset(a, (r.V - 1) * 7), r.y = a.getUTCFullYear(), r.m = a.getUTCMonth(), r.d = a.getUTCDate() + (r.w + 6) % 7) : (a = ke(V(r.y, 0, 1)), o = a.getDay(), a = o > 4 || o === 0 ? E.ceil(a) : E(a), a = x.offset(a, (r.V - 1) * 7), r.y = a.getFullYear(), r.m = a.getMonth(), r.d = a.getDate() + (r.w + 6) % 7);
			} else ("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : +("W" in r)), o = "Z" in r ? Ae(V(r.y, 0, 1)).getUTCDay() : ke(V(r.y, 0, 1)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + r.W * 7 - (o + 5) % 7 : r.w + r.U * 7 - (o + 6) % 7);
			return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, Ae(r)) : ke(r);
		};
	}
	function D(e, t, n, r) {
		for (var i = 0, a = t.length, o = n.length, s, c; i < a;) {
			if (r >= o) return -1;
			if (s = t.charCodeAt(i++), s === 37) {
				if (s = t.charAt(i++), c = C[s in Me ? t.charAt(i++) : s], !c || (r = c(e, n, r)) < 0) return -1;
			} else if (s != n.charCodeAt(r++)) return -1;
		}
		return r;
	}
	function ee(e, t, n) {
		var r = l.exec(t.slice(n));
		return r ? (e.p = u.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function O(e, t, n) {
		var r = p.exec(t.slice(n));
		return r ? (e.w = m.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function te(e, t, n) {
		var r = d.exec(t.slice(n));
		return r ? (e.w = f.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function ne(e, t, n) {
		var r = _.exec(t.slice(n));
		return r ? (e.m = v.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function k(e, t, n) {
		var r = h.exec(t.slice(n));
		return r ? (e.m = g.get(r[0].toLowerCase()), n + r[0].length) : -1;
	}
	function A(e, n, r) {
		return D(e, t, n, r);
	}
	function re(e, t, r) {
		return D(e, n, t, r);
	}
	function ie(e, t, n) {
		return D(e, r, t, n);
	}
	function M(e) {
		return o[e.getDay()];
	}
	function ae(e) {
		return a[e.getDay()];
	}
	function oe(e) {
		return c[e.getMonth()];
	}
	function N(e) {
		return s[e.getMonth()];
	}
	function P(e) {
		return i[+(e.getHours() >= 12)];
	}
	function F(e) {
		return 1 + ~~(e.getMonth() / 3);
	}
	function I(e) {
		return o[e.getUTCDay()];
	}
	function L(e) {
		return a[e.getUTCDay()];
	}
	function se(e) {
		return c[e.getUTCMonth()];
	}
	function R(e) {
		return s[e.getUTCMonth()];
	}
	function ce(e) {
		return i[+(e.getUTCHours() >= 12)];
	}
	function le(e) {
		return 1 + ~~(e.getUTCMonth() / 3);
	}
	return {
		format: function(e) {
			var t = w(e += "", y);
			return t.toString = function() {
				return e;
			}, t;
		},
		parse: function(e) {
			var t = T(e += "", !1);
			return t.toString = function() {
				return e;
			}, t;
		},
		utcFormat: function(e) {
			var t = w(e += "", b);
			return t.toString = function() {
				return e;
			}, t;
		},
		utcParse: function(e) {
			var t = T(e += "", !0);
			return t.toString = function() {
				return e;
			}, t;
		}
	};
}
var Me = {
	"-": "",
	_: " ",
	0: "0"
}, H = /^\s*\d+/, Ne = /^%/, Pe = /[\\^$*+?|[\]().{}]/g;
function U(e, t, n) {
	var r = e < 0 ? "-" : "", i = (r ? -e : e) + "", a = i.length;
	return r + (a < n ? Array(n - a + 1).join(t) + i : i);
}
function Fe(e) {
	return e.replace(Pe, "\\$&");
}
function W(e) {
	return RegExp("^(?:" + e.map(Fe).join("|") + ")", "i");
}
function G(e) {
	return new Map(e.map((e, t) => [e.toLowerCase(), t]));
}
function Ie(e, t, n) {
	var r = H.exec(t.slice(n, n + 1));
	return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function Le(e, t, n) {
	var r = H.exec(t.slice(n, n + 1));
	return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function Re(e, t, n) {
	var r = H.exec(t.slice(n, n + 2));
	return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function ze(e, t, n) {
	var r = H.exec(t.slice(n, n + 2));
	return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function Be(e, t, n) {
	var r = H.exec(t.slice(n, n + 2));
	return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function Ve(e, t, n) {
	var r = H.exec(t.slice(n, n + 4));
	return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function He(e, t, n) {
	var r = H.exec(t.slice(n, n + 2));
	return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Ue(e, t, n) {
	var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
	return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function We(e, t, n) {
	var r = H.exec(t.slice(n, n + 1));
	return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Ge(e, t, n) {
	var r = H.exec(t.slice(n, n + 2));
	return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function Ke(e, t, n) {
	var r = H.exec(t.slice(n, n + 2));
	return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function qe(e, t, n) {
	var r = H.exec(t.slice(n, n + 3));
	return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function Je(e, t, n) {
	var r = H.exec(t.slice(n, n + 2));
	return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function Ye(e, t, n) {
	var r = H.exec(t.slice(n, n + 2));
	return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function Xe(e, t, n) {
	var r = H.exec(t.slice(n, n + 2));
	return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function Ze(e, t, n) {
	var r = H.exec(t.slice(n, n + 3));
	return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function Qe(e, t, n) {
	var r = H.exec(t.slice(n, n + 6));
	return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function $e(e, t, n) {
	var r = Ne.exec(t.slice(n, n + 1));
	return r ? n + r[0].length : -1;
}
function et(e, t, n) {
	var r = H.exec(t.slice(n));
	return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function tt(e, t, n) {
	var r = H.exec(t.slice(n));
	return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function nt(e, t) {
	return U(e.getDate(), t, 2);
}
function rt(e, t) {
	return U(e.getHours(), t, 2);
}
function it(e, t) {
	return U(e.getHours() % 12 || 12, t, 2);
}
function at(e, t) {
	return U(1 + x.count(F(e), e), t, 3);
}
function ot(e, t) {
	return U(e.getMilliseconds(), t, 3);
}
function st(e, t) {
	return ot(e, t) + "000";
}
function ct(e, t) {
	return U(e.getMonth() + 1, t, 2);
}
function lt(e, t) {
	return U(e.getMinutes(), t, 2);
}
function ut(e, t) {
	return U(e.getSeconds(), t, 2);
}
function dt(e) {
	var t = e.getDay();
	return t === 0 ? 7 : t;
}
function ft(e, t) {
	return U(T.count(F(e) - 1, e), t, 2);
}
function pt(e) {
	var t = e.getDay();
	return t >= 4 || t === 0 ? O(e) : O.ceil(e);
}
function mt(e, t) {
	return e = pt(e), U(O.count(F(e), e) + (F(e).getDay() === 4), t, 2);
}
function ht(e) {
	return e.getDay();
}
function gt(e, t) {
	return U(E.count(F(e) - 1, e), t, 2);
}
function _t(e, t) {
	return U(e.getFullYear() % 100, t, 2);
}
function vt(e, t) {
	return e = pt(e), U(e.getFullYear() % 100, t, 2);
}
function yt(e, t) {
	return U(e.getFullYear() % 1e4, t, 4);
}
function bt(e, t) {
	var n = e.getDay();
	return e = n >= 4 || n === 0 ? O(e) : O.ceil(e), U(e.getFullYear() % 1e4, t, 4);
}
function xt(e) {
	var t = e.getTimezoneOffset();
	return (t > 0 ? "-" : (t *= -1, "+")) + U(t / 60 | 0, "0", 2) + U(t % 60, "0", 2);
}
function St(e, t) {
	return U(e.getUTCDate(), t, 2);
}
function Ct(e, t) {
	return U(e.getUTCHours(), t, 2);
}
function wt(e, t) {
	return U(e.getUTCHours() % 12 || 12, t, 2);
}
function Tt(e, t) {
	return U(1 + S.count(I(e), e), t, 3);
}
function Et(e, t) {
	return U(e.getUTCMilliseconds(), t, 3);
}
function Dt(e, t) {
	return Et(e, t) + "000";
}
function Ot(e, t) {
	return U(e.getUTCMonth() + 1, t, 2);
}
function kt(e, t) {
	return U(e.getUTCMinutes(), t, 2);
}
function At(e, t) {
	return U(e.getUTCSeconds(), t, 2);
}
function jt(e) {
	var t = e.getUTCDay();
	return t === 0 ? 7 : t;
}
function Mt(e, t) {
	return U(A.count(I(e) - 1, e), t, 2);
}
function Nt(e) {
	var t = e.getUTCDay();
	return t >= 4 || t === 0 ? M(e) : M.ceil(e);
}
function Pt(e, t) {
	return e = Nt(e), U(M.count(I(e), e) + (I(e).getUTCDay() === 4), t, 2);
}
function Ft(e) {
	return e.getUTCDay();
}
function It(e, t) {
	return U(j.count(I(e) - 1, e), t, 2);
}
function Lt(e, t) {
	return U(e.getUTCFullYear() % 100, t, 2);
}
function Rt(e, t) {
	return e = Nt(e), U(e.getUTCFullYear() % 100, t, 2);
}
function zt(e, t) {
	return U(e.getUTCFullYear() % 1e4, t, 4);
}
function Bt(e, t) {
	var n = e.getUTCDay();
	return e = n >= 4 || n === 0 ? M(e) : M.ceil(e), U(e.getUTCFullYear() % 1e4, t, 4);
}
function Vt() {
	return "+0000";
}
function Ht() {
	return "%";
}
function Ut(e) {
	return +e;
}
function Wt(e) {
	return Math.floor(e / 1e3);
}
//#endregion
//#region node_modules/d3-time-format/src/defaultLocale.js
var K, Gt, Kt, qt, Jt;
Yt({
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
function Yt(e) {
	return K = je(e), Gt = K.format, Kt = K.parse, qt = K.utcFormat, Jt = K.utcParse, K;
}
//#endregion
//#region node_modules/d3-scale/src/init.js
function q(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			this.range(e);
			break;
		default: this.range(t).domain(e);
	}
	return this;
}
function Xt(e, t) {
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
var Zt = Symbol("implicit");
function Qt() {
	var e = new pe(), t = [], n = [], r = Zt;
	function i(i) {
		let a = e.get(i);
		if (a === void 0) {
			if (r !== Zt) return r;
			e.set(i, a = t.push(i) - 1);
		}
		return n[a % n.length];
	}
	return i.domain = function(n) {
		if (!arguments.length) return t.slice();
		t = [], e = new pe();
		for (let r of n) e.has(r) || e.set(r, t.push(r) - 1);
		return i;
	}, i.range = function(e) {
		return arguments.length ? (n = Array.from(e), i) : n.slice();
	}, i.unknown = function(e) {
		return arguments.length ? (r = e, i) : r;
	}, i.copy = function() {
		return Qt(t, n).unknown(r);
	}, q.apply(i, arguments), i;
}
//#endregion
//#region node_modules/d3-interpolate/src/numberArray.js
function $t(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function en(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region node_modules/d3-interpolate/src/array.js
function tn(e, t) {
	var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o;
	for (o = 0; o < r; ++o) i[o] = J(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/date.js
function nn(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/object.js
function rn(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = J(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/value.js
function J(a, o) {
	var s = typeof o, c;
	return o == null || s === "boolean" ? i(o) : (s === "number" ? e : s === "string" ? (c = n(o)) ? (o = c, r) : t : o instanceof n ? r : o instanceof Date ? nn : en(o) ? $t : Array.isArray(o) ? tn : typeof o.valueOf != "function" && typeof o.toString != "function" || isNaN(o) ? rn : e)(a, o);
}
//#endregion
//#region node_modules/d3-interpolate/src/round.js
function an(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
//#endregion
//#region node_modules/d3-scale/src/constant.js
function on(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-scale/src/number.js
function sn(e) {
	return +e;
}
//#endregion
//#region node_modules/d3-scale/src/continuous.js
var cn = [0, 1];
function Y(e) {
	return e;
}
function ln(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : on(isNaN(t) ? NaN : .5);
}
function un(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function dn(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = ln(i, r), a = n(o, a)) : (r = ln(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function fn(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = ln(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = fe(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function X(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function pn() {
	var t = cn, n = cn, r = J, i, a, o, s = Y, c, l, u;
	function d() {
		var e = Math.min(t.length, n.length);
		return s !== Y && (s = un(t[0], t[e - 1])), c = e > 2 ? fn : dn, l = u = null, f;
	}
	function f(e) {
		return e == null || isNaN(e = +e) ? o : (l ||= c(t.map(i), n, r))(i(s(e)));
	}
	return f.invert = function(r) {
		return s(a((u ||= c(n, t.map(i), e))(r)));
	}, f.domain = function(e) {
		return arguments.length ? (t = Array.from(e, sn), d()) : t.slice();
	}, f.range = function(e) {
		return arguments.length ? (n = Array.from(e), d()) : n.slice();
	}, f.rangeRound = function(e) {
		return n = Array.from(e), r = an, d();
	}, f.clamp = function(e) {
		return arguments.length ? (s = e ? !0 : Y, d()) : s !== Y;
	}, f.interpolate = function(e) {
		return arguments.length ? (r = e, d()) : r;
	}, f.unknown = function(e) {
		return arguments.length ? (o = e, f) : o;
	}, function(e, t) {
		return i = e, a = t, d();
	};
}
function mn() {
	return pn()(Y, Y);
}
//#endregion
//#region node_modules/d3-format/src/formatDecimal.js
function hn(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function gn(e, t) {
	if (!isFinite(e) || e === 0) return null;
	var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), r = e.slice(0, n);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
//#endregion
//#region node_modules/d3-format/src/exponent.js
function Z(e) {
	return e = gn(Math.abs(e)), e ? e[1] : NaN;
}
//#endregion
//#region node_modules/d3-format/src/formatGroup.js
function _n(e, t) {
	return function(n, r) {
		for (var i = n.length, a = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r));) s = e[o = (o + 1) % e.length];
		return a.reverse().join(t);
	};
}
//#endregion
//#region node_modules/d3-format/src/formatNumerals.js
function vn(e) {
	return function(t) {
		return t.replace(/[0-9]/g, function(t) {
			return e[+t];
		});
	};
}
//#endregion
//#region node_modules/d3-format/src/formatSpecifier.js
var yn = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Q(e) {
	if (!(t = yn.exec(e))) throw Error("invalid format: " + e);
	var t;
	return new bn({
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
Q.prototype = bn.prototype;
function bn(e) {
	this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
bn.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
//#endregion
//#region node_modules/d3-format/src/formatTrim.js
function xn(e) {
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
var Sn;
function Cn(e, t) {
	var n = gn(e, t);
	if (!n) return Sn = void 0, e.toPrecision(t);
	var r = n[0], i = n[1], a = i - (Sn = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
	return a === o ? r : a > o ? r + Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + Array(1 - a).join("0") + gn(e, Math.max(0, t + a - 1))[0];
}
//#endregion
//#region node_modules/d3-format/src/formatRounded.js
function wn(e, t) {
	var n = gn(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1];
	return i < 0 ? "0." + Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + Array(i - r.length + 2).join("0");
}
//#endregion
//#region node_modules/d3-format/src/formatTypes.js
var Tn = {
	"%": (e, t) => (e * 100).toFixed(t),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + "",
	d: hn,
	e: (e, t) => e.toExponential(t),
	f: (e, t) => e.toFixed(t),
	g: (e, t) => e.toPrecision(t),
	o: (e) => Math.round(e).toString(8),
	p: (e, t) => wn(e * 100, t),
	r: wn,
	s: Cn,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
};
//#endregion
//#region node_modules/d3-format/src/identity.js
function En(e) {
	return e;
}
//#endregion
//#region node_modules/d3-format/src/locale.js
var Dn = Array.prototype.map, On = [
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
function kn(e) {
	var t = e.grouping === void 0 || e.thousands === void 0 ? En : _n(Dn.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? En : vn(Dn.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
	function l(e, l) {
		e = Q(e);
		var u = e.fill, d = e.align, f = e.sign, p = e.symbol, m = e.zero, h = e.width, g = e.comma, _ = e.precision, v = e.trim, y = e.type;
		y === "n" ? (g = !0, y = "g") : Tn[y] || (_ === void 0 && (_ = 12), v = !0, y = "g"), (m || u === "0" && d === "=") && (m = !0, u = "0", d = "=");
		var b = (l && l.prefix !== void 0 ? l.prefix : "") + (p === "$" ? n : p === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : ""), x = (p === "$" ? r : /[%p]/.test(y) ? o : "") + (l && l.suffix !== void 0 ? l.suffix : ""), S = Tn[y], C = /[defgprs%]/.test(y);
		_ = _ === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, _)) : Math.max(0, Math.min(20, _));
		function w(e) {
			var n = b, r = x, o, l, p;
			if (y === "c") r = S(e) + r, e = "";
			else {
				e = +e;
				var w = e < 0 || 1 / e < 0;
				if (e = isNaN(e) ? c : S(Math.abs(e), _), v && (e = xn(e)), w && +e == 0 && f !== "+" && (w = !1), n = (w ? f === "(" ? f : s : f === "-" || f === "(" ? "" : f) + n, r = (y === "s" && !isNaN(e) && Sn !== void 0 ? On[8 + Sn / 3] : "") + r + (w && f === "(" ? ")" : ""), C) {
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
		var n = Math.max(-8, Math.min(8, Math.floor(Z(t) / 3))) * 3, r = 10 ** -n, i = l((e = Q(e), e.type = "f", e), { suffix: On[8 + n / 3] });
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
var An, jn, Mn;
Nn({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function Nn(e) {
	return An = kn(e), jn = An.format, Mn = An.formatPrefix, An;
}
//#endregion
//#region node_modules/d3-format/src/precisionFixed.js
function Pn(e) {
	return Math.max(0, -Z(Math.abs(e)));
}
//#endregion
//#region node_modules/d3-format/src/precisionPrefix.js
function Fn(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Z(t) / 3))) * 3 - Z(Math.abs(e)));
}
//#endregion
//#region node_modules/d3-format/src/precisionRound.js
function In(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Z(t) - Z(e)) + 1;
}
//#endregion
//#region node_modules/d3-scale/src/tickFormat.js
function Ln(e, t, n, r) {
	var i = Ce(e, t, n), a;
	switch (r = Q(r ?? ",f"), r.type) {
		case "s":
			var o = Math.max(Math.abs(e), Math.abs(t));
			return r.precision == null && !isNaN(a = Fn(i, o)) && (r.precision = a), Mn(r, o);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			r.precision == null && !isNaN(a = In(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = a - (r.type === "e"));
			break;
		case "f":
		case "%": r.precision == null && !isNaN(a = Pn(i)) && (r.precision = a - (r.type === "%") * 2);
	}
	return jn(r);
}
//#endregion
//#region node_modules/d3-scale/src/linear.js
function Rn(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return B(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return Ln(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = Se(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
			if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
			else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
			else break;
			c = l;
		}
		return e;
	}, e;
}
function zn() {
	var e = mn();
	return e.copy = function() {
		return X(e, zn());
	}, q.apply(e, arguments), Rn(e);
}
//#endregion
//#region node_modules/d3-scale/src/nice.js
function Bn(e, t) {
	e = e.slice();
	var n = 0, r = e.length - 1, i = e[n], a = e[r], o;
	return a < i && (o = n, n = r, r = o, o = i, i = a, a = o), e[n] = t.floor(i), e[r] = t.ceil(a), e;
}
//#endregion
//#region node_modules/d3-scale/src/log.js
function Vn(e) {
	return Math.log(e);
}
function Hn(e) {
	return Math.exp(e);
}
function Un(e) {
	return -Math.log(-e);
}
function Wn(e) {
	return -Math.exp(-e);
}
function Gn(e) {
	return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function Kn(e) {
	return e === 10 ? Gn : e === Math.E ? Math.exp : (t) => e ** +t;
}
function qn(e) {
	return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Jn(e) {
	return (t, n) => -e(-t, n);
}
function Yn(e) {
	let t = e(Vn, Hn), n = t.domain, r = 10, i, a;
	function o() {
		return i = qn(r), a = Kn(r), n()[0] < 0 ? (i = Jn(i), a = Jn(a), e(Un, Wn)) : e(Vn, Hn), t;
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
			m.length * 2 < p && (m = B(o, s, p));
		} else m = B(l, u, Math.min(u - l, p)).map(a);
		return c ? m.reverse() : m;
	}, t.tickFormat = (e, n) => {
		if (e ??= 10, n ??= r === 10 ? "s" : ",", typeof n != "function" && (!(r % 1) && (n = Q(n)).precision == null && (n.trim = !0), n = jn(n)), e === Infinity) return n;
		let o = Math.max(1, r * e / t.ticks().length);
		return (e) => {
			let t = e / a(Math.round(i(e)));
			return t * r < r - .5 && (t *= r), t <= o ? n(e) : "";
		};
	}, t.nice = () => n(Bn(n(), {
		floor: (e) => a(Math.floor(i(e))),
		ceil: (e) => a(Math.ceil(i(e)))
	})), t;
}
function Xn() {
	let e = Yn(pn()).domain([1, 10]);
	return e.copy = () => X(e, Xn()).base(e.base()), q.apply(e, arguments), e;
}
//#endregion
//#region node_modules/d3-scale/src/symlog.js
function Zn(e) {
	return function(t) {
		return Math.sign(t) * Math.log1p(Math.abs(t / e));
	};
}
function Qn(e) {
	return function(t) {
		return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
	};
}
function $n(e) {
	var t = 1, n = e(Zn(t), Qn(t));
	return n.constant = function(n) {
		return arguments.length ? e(Zn(t = +n), Qn(t)) : t;
	}, Rn(n);
}
function er() {
	var e = $n(pn());
	return e.copy = function() {
		return X(e, er()).constant(e.constant());
	}, q.apply(e, arguments);
}
//#endregion
//#region node_modules/d3-scale/src/time.js
function tr(e) {
	return new Date(e);
}
function nr(e) {
	return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function rr(e, t, n, r, i, a, o, s, c, l) {
	var u = mn(), d = u.invert, f = u.domain, p = l(".%L"), m = l(":%S"), h = l("%I:%M"), g = l("%I %p"), _ = l("%a %d"), v = l("%b %d"), y = l("%B"), b = l("%Y");
	function x(e) {
		return (c(e) < e ? p : s(e) < e ? m : o(e) < e ? h : a(e) < e ? g : r(e) < e ? i(e) < e ? _ : v : n(e) < e ? y : b)(e);
	}
	return u.invert = function(e) {
		return new Date(d(e));
	}, u.domain = function(e) {
		return arguments.length ? f(Array.from(e, nr)) : f().map(tr);
	}, u.ticks = function(t) {
		var n = f();
		return e(n[0], n[n.length - 1], t ?? 10);
	}, u.tickFormat = function(e, t) {
		return t == null ? x : l(t);
	}, u.nice = function(e) {
		var n = f();
		return (!e || typeof e.range != "function") && (e = t(n[0], n[n.length - 1], e ?? 10)), e ? f(Bn(n, e)) : u;
	}, u.copy = function() {
		return X(u, rr(e, t, n, r, i, a, o, s, c, l));
	}, u;
}
function ir() {
	return q.apply(rr(De, Oe, F, N, T, x, y, _, g, Gt).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
//#endregion
//#region node_modules/d3-scale/src/utcTime.js
function ar() {
	return q.apply(rr(Te, Ee, I, P, A, S, b, v, g, qt).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
//#endregion
//#region node_modules/d3-brush/src/brush.js
var { abs: or, max: sr, min: cr } = Math;
["w", "e"].map(lr), ["n", "s"].map(lr), [
	"n",
	"w",
	"e",
	"s",
	"nw",
	"ne",
	"sw",
	"se"
].map(lr);
function lr(e) {
	return { type: e };
}
function ur(e) {
	var t = e.__brush;
	return t ? t.dim.output(t.selection) : null;
}
//#endregion
//#region node_modules/d3-shape/src/math.js
var dr = Math.cos, fr = Math.min, pr = Math.sin, mr = Math.sqrt, hr = 1e-12, gr = Math.PI;
gr / 2;
var _r = 2 * gr;
//#endregion
//#region node_modules/d3-axis/src/identity.js
function vr(e) {
	return e;
}
//#endregion
//#region node_modules/d3-axis/src/axis.js
var yr = 1, br = 2, xr = 3, $ = 4, Sr = 1e-6;
function Cr(e) {
	return "translate(" + e + ",0)";
}
function wr(e) {
	return "translate(0," + e + ")";
}
function Tr(e) {
	return (t) => +e(t);
}
function Er(e, t) {
	return t = Math.max(0, e.bandwidth() - t * 2) / 2, e.round() && (t = Math.round(t)), (n) => +e(n) + t;
}
function Dr() {
	return !this.__axis;
}
function Or(e, t) {
	var n = [], r = null, i = null, a = 6, o = 6, s = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : .5, l = e === yr || e === $ ? -1 : 1, u = e === $ || e === br ? "x" : "y", d = e === yr || e === xr ? Cr : wr;
	function f(f) {
		var p = r ?? (t.ticks ? t.ticks.apply(t, n) : t.domain()), m = i ?? (t.tickFormat ? t.tickFormat.apply(t, n) : vr), h = Math.max(a, 0) + s, g = t.range(), _ = +g[0] + c, v = +g[g.length - 1] + c, y = (t.bandwidth ? Er : Tr)(t.copy(), c), b = f.selection ? f.selection() : f, x = b.selectAll(".domain").data([null]), S = b.selectAll(".tick").data(p, t).order(), C = S.exit(), w = S.enter().append("g").attr("class", "tick"), T = S.select("line"), E = S.select("text");
		x = x.merge(x.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), S = S.merge(w), T = T.merge(w.append("line").attr("stroke", "currentColor").attr(u + "2", l * a)), E = E.merge(w.append("text").attr("fill", "currentColor").attr(u, l * h).attr("dy", e === yr ? "0em" : e === xr ? "0.71em" : "0.32em")), f !== b && (x = x.transition(f), S = S.transition(f), T = T.transition(f), E = E.transition(f), C = C.transition(f).attr("opacity", Sr).attr("transform", function(e) {
			return isFinite(e = y(e)) ? d(e + c) : this.getAttribute("transform");
		}), w.attr("opacity", Sr).attr("transform", function(e) {
			var t = this.parentNode.__axis;
			return d((t && isFinite(t = t(e)) ? t : y(e)) + c);
		})), C.remove(), x.attr("d", e === $ || e === br ? o ? "M" + l * o + "," + _ + "H" + c + "V" + v + "H" + l * o : "M" + c + "," + _ + "V" + v : o ? "M" + _ + "," + l * o + "V" + c + "H" + v + "V" + l * o : "M" + _ + "," + c + "H" + v), S.attr("opacity", 1).attr("transform", function(e) {
			return d(y(e) + c);
		}), T.attr(u + "2", l * a), E.attr(u, l * h).text(m), b.filter(Dr).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === br ? "start" : e === $ ? "end" : "middle"), b.each(function() {
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
function kr(e) {
	return Or(yr, e);
}
function Ar(e) {
	return Or(br, e);
}
function jr(e) {
	return Or(xr, e);
}
function Mr(e) {
	return Or($, e);
}
//#endregion
export { O as $, Xt as A, le as B, Y as C, J as D, an as E, Jt as F, F as G, R as H, B as I, P as J, I as K, pe as L, Gt as M, Kt as N, Zt as O, qt as P, T as Q, me as R, X as S, sn as T, se as U, ue as V, L as W, E as X, te as Y, ne as Z, Xn as _, dr as a, A as at, Rn as b, gr as c, ie as ct, _r as d, y as dt, D as et, ur as f, b as ft, $n as g, er as h, g as ht, kr as i, oe as it, q as j, Qt as k, pr as l, x as lt, ir as m, v as mt, Mr as n, ae as nt, hr as o, M as ot, ar as p, _ as pt, N as q, Ar as r, j as rt, fr as s, re as st, jr as t, ee as tt, mr as u, C as ut, Yn as v, pn as w, jn as x, zn as y, fe as z };

//# sourceMappingURL=axis-DbjL_93j.js.map