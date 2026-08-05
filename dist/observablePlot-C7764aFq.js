import { a as e, n as t, o as n, r, t as i } from "./pow-BFDPqS3s.js";
import { C as a, S as o, _ as s, b as c, d as l, f as u, g as d, h as f, l as p, n as m, p as h, r as g, s as _, t as v, u as y, v as b, x, y as S } from "./linear-BnhqTvdX.js";
import { t as C } from "./max-CPVNm4tn.js";
import { n as w, t as T } from "./sum-CNP0Xric.js";
import { n as E, r as D, t as O } from "./band-C1twWuW2.js";
import "./src-yL3ZdoR1.js";
import { f as k, t as A, u as ee } from "./select-BIuoFcZG.js";
import { s as te } from "./nodrag-Dq2tlBbe.js";
import { A as ne, C as re, D as ie, E as ae, F as oe, I as se, M as ce, N as le, O as ue, P as de, S as fe, T as pe, _ as me, a as he, b as ge, c as _e, f as ve, g as ye, h as be, i as xe, j as Se, k as Ce, m as we, n as Te, o as Ee, p as De, r as Oe, s as ke, u as Ae, v as je, w as Me, x as Ne, y as Pe } from "./src-Xlr4CcSw.js";
import { n as Fe, t as Ie } from "./ordinal-uZdoVxAx.js";
import { _ as Le, a as Re, c as ze, f as Be, g as Ve, h as He, i as Ue, l as We, m as Ge, n as Ke, o as j, p as qe, r as Je, u as Ye } from "./string-CnCj7THX.js";
import "./src-WDualLFV.js";
import { a as Xe, d as Ze, f as M, l as Qe, p as $e, u as et } from "./math-C5EhTgJw.js";
import { r as tt } from "./path-6kmCrmEz.js";
import { t as nt } from "./axis-DjmZ9QYe.js";
//#region node_modules/d3-array/src/cross.js
function rt(e) {
	return e.length | 0;
}
function at(e) {
	return !(e > 0);
}
function ot(e) {
	return typeof e != "object" || "length" in e ? e : Array.from(e);
}
function st(e) {
	return (t) => e(...t);
}
function ct(...e) {
	let t = typeof e[e.length - 1] == "function" && st(e.pop());
	e = e.map(ot);
	let n = e.map(rt), r = e.length - 1, i = Array(r + 1).fill(0), a = [];
	if (r < 0 || n.some(at)) return a;
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
function lt(e, t) {
	var n = 0, r = 0;
	return Float64Array.from(e, t === void 0 ? (e) => n += +e || 0 : (i) => n += +t(i, r++, e) || 0);
}
//#endregion
//#region node_modules/d3-array/src/variance.js
function ut(e, t) {
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
function dt(e, t) {
	let n = ut(e, t);
	return n && Math.sqrt(n);
}
//#endregion
//#region node_modules/d3-array/src/extent.js
function ft(e, t) {
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
var pt = class {
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
};
//#endregion
//#region node_modules/d3-array/src/permute.js
function mt(e, t) {
	return Array.from(t, (t) => e[t]);
}
//#endregion
//#region node_modules/d3-array/src/sort.js
function ht(e, ...t) {
	if (typeof e[Symbol.iterator] != "function") throw TypeError("values is not iterable");
	e = Array.from(e);
	let [n] = t;
	if (n && n.length !== 2 || t.length > 1) {
		let r = Uint32Array.from(e, (e, t) => t);
		return t.length > 1 ? (t = t.map((t) => e.map(t)), r.sort((e, n) => {
			for (let r of t) {
				let t = _t(r[e], r[n]);
				if (t) return t;
			}
		})) : (n = e.map(n), r.sort((e, t) => _t(n[e], n[t]))), mt(e, r);
	}
	return e.sort(gt(n));
}
function gt(e = a) {
	if (e === a) return _t;
	if (typeof e != "function") throw TypeError("compare is not a function");
	return (t, n) => {
		let r = e(t, n);
		return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
	};
}
function _t(e, t) {
	return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : +(e > t));
}
//#endregion
//#region node_modules/d3-array/src/groupSort.js
function vt(t, n, i) {
	return (n.length === 2 ? ht(r(t, i), (([e, t], [r, i]) => n(t, i) || a(e, r))) : ht(e(t, n, i), (([e, t], [n, r]) => a(t, r) || a(e, n)))).map(([e]) => e);
}
//#endregion
//#region node_modules/d3-array/src/maxIndex.js
function yt(e, t) {
	let n, r = -1, i = -1;
	if (t === void 0) for (let t of e) ++i, t != null && (n < t || n === void 0 && t >= t) && (n = t, r = i);
	else for (let a of e) (a = t(a, ++i, e)) != null && (n < a || n === void 0 && a >= a) && (n = a, r = i);
	return r;
}
//#endregion
//#region node_modules/d3-array/src/minIndex.js
function bt(e, t) {
	let n, r = -1, i = -1;
	if (t === void 0) for (let t of e) ++i, t != null && (n > t || n === void 0 && t >= t) && (n = t, r = i);
	else for (let a of e) (a = t(a, ++i, e)) != null && (n > a || n === void 0 && a >= a) && (n = a, r = i);
	return r;
}
//#endregion
//#region node_modules/d3-array/src/quickselect.js
function xt(e, t, n = 0, r = Infinity, i) {
	if (t = Math.floor(t), n = Math.floor(Math.max(0, n)), r = Math.floor(Math.min(e.length - 1, r)), !(n <= t && t <= r)) return e;
	for (i = i === void 0 ? _t : gt(i); r > n;) {
		if (r - n > 600) {
			let a = r - n + 1, o = t - n + 1, s = Math.log(a), c = .5 * Math.exp(2 * s / 3), l = .5 * Math.sqrt(s * c * (a - c) / a) * (o - a / 2 < 0 ? -1 : 1), u = Math.max(n, Math.floor(t - o * c / a + l)), d = Math.min(r, Math.floor(t + (a - o) * c / a + l));
			xt(e, t, u, d, i);
		}
		let a = e[t], o = n, s = r;
		for (St(e, n, t), i(e[r], a) > 0 && St(e, n, r); o < s;) {
			for (St(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
			for (; i(e[s], a) > 0;) --s;
		}
		i(e[n], a) === 0 ? St(e, n, s) : (++s, St(e, s, r)), s <= t && (n = s + 1), t <= s && (r = s - 1);
	}
	return e;
}
function St(e, t, n) {
	let r = e[t];
	e[t] = e[n], e[n] = r;
}
//#endregion
//#region node_modules/d3-array/src/greatest.js
function Ct(e, t = a) {
	let n, r = !1;
	if (t.length === 1) {
		let i;
		for (let o of e) {
			let e = t(o);
			(r ? a(e, i) > 0 : a(e, e) === 0) && (n = o, i = e, r = !0);
		}
	} else for (let i of e) (r ? t(i, n) > 0 : t(i, i) === 0) && (n = i, r = !0);
	return n;
}
//#endregion
//#region node_modules/d3-array/src/quantile.js
function wt(e, t, n) {
	if (e = Float64Array.from(c(e, n)), !(!(r = e.length) || isNaN(t = +t))) {
		if (t <= 0 || r < 2) return w(e);
		if (t >= 1) return C(e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = C(xt(e, a).subarray(0, a + 1));
		return o + (w(e.subarray(a + 1)) - o) * (i - a);
	}
}
function Tt(e, t, n = S) {
	if (!(!(r = e.length) || isNaN(t = +t))) {
		if (t <= 0 || r < 2) return +n(e[0], 0, e);
		if (t >= 1) return +n(e[r - 1], r - 1, e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = +n(e[a], a, e);
		return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
	}
}
//#endregion
//#region node_modules/d3-array/src/mean.js
function Et(e, t) {
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
function Dt(e, t) {
	return wt(e, .5, t);
}
//#endregion
//#region node_modules/d3-array/src/merge.js
function* Ot(e) {
	for (let t of e) yield* t;
}
function kt(e) {
	return Array.from(Ot(e));
}
//#endregion
//#region node_modules/d3-array/src/mode.js
function At(e, t) {
	let n = new d();
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
function jt(e, t = Mt) {
	let n = [], r, i = !1;
	for (let a of e) i && n.push(t(r, a)), r = a, i = !0;
	return n;
}
function Mt(e, t) {
	return [e, t];
}
//#endregion
//#region node_modules/d3-array/src/reverse.js
function Nt(e) {
	if (typeof e[Symbol.iterator] != "function") throw TypeError("values is not iterable");
	return Array.from(e).reverse();
}
//#endregion
//#region node_modules/d3-color/src/math.js
var Pt = Math.PI / 180, Ft = 180 / Math.PI, It = 18, Lt = .96422, Rt = 1, zt = .82521, Bt = 4 / 29, Vt = 6 / 29, Ht = 3 * Vt * Vt, Ut = Vt * Vt * Vt;
function Wt(e) {
	if (e instanceof Kt) return new Kt(e.l, e.a, e.b, e.opacity);
	if (e instanceof $t) return en(e);
	e instanceof We || (e = He(e));
	var t = Xt(e.r), n = Xt(e.g), r = Xt(e.b), i = qt((.2225045 * t + .7168786 * n + .0606169 * r) / Rt), a, o;
	return t === n && n === r ? a = o = i : (a = qt((.4360747 * t + .3850649 * n + .1430804 * r) / Lt), o = qt((.0139322 * t + .0971045 * n + .7141733 * r) / zt)), new Kt(116 * i - 16, 500 * (a - i), 200 * (i - o), e.opacity);
}
function Gt(e, t, n, r) {
	return arguments.length === 1 ? Wt(e) : new Kt(e, t, n, r ?? 1);
}
function Kt(e, t, n, r) {
	this.l = +e, this.a = +t, this.b = +n, this.opacity = +r;
}
Ve(Kt, Gt, Le(ze, {
	brighter(e) {
		return new Kt(this.l + It * (e ?? 1), this.a, this.b, this.opacity);
	},
	darker(e) {
		return new Kt(this.l - It * (e ?? 1), this.a, this.b, this.opacity);
	},
	rgb() {
		var e = (this.l + 16) / 116, t = isNaN(this.a) ? e : e + this.a / 500, n = isNaN(this.b) ? e : e - this.b / 200;
		return t = Lt * Jt(t), e = Rt * Jt(e), n = zt * Jt(n), new We(Yt(3.1338561 * t - 1.6168667 * e - .4906146 * n), Yt(-.9787684 * t + 1.9161415 * e + .033454 * n), Yt(.0719453 * t - .2289914 * e + 1.4052427 * n), this.opacity);
	}
}));
function qt(e) {
	return e > Ut ? e ** (1 / 3) : e / Ht + Bt;
}
function Jt(e) {
	return e > Vt ? e * e * e : Ht * (e - Bt);
}
function Yt(e) {
	return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055);
}
function Xt(e) {
	return (e /= 255) <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;
}
function Zt(e) {
	if (e instanceof $t) return new $t(e.h, e.c, e.l, e.opacity);
	if (e instanceof Kt || (e = Wt(e)), e.a === 0 && e.b === 0) return new $t(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
	var t = Math.atan2(e.b, e.a) * Ft;
	return new $t(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
}
function Qt(e, t, n, r) {
	return arguments.length === 1 ? Zt(e) : new $t(e, t, n, r ?? 1);
}
function $t(e, t, n, r) {
	this.h = +e, this.c = +t, this.l = +n, this.opacity = +r;
}
function en(e) {
	if (isNaN(e.h)) return new Kt(e.l, 0, 0, e.opacity);
	var t = e.h * Pt;
	return new Kt(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
}
Ve($t, Qt, Le(ze, {
	brighter(e) {
		return new $t(this.h, this.c, this.l + It * (e ?? 1), this.opacity);
	},
	darker(e) {
		return new $t(this.h, this.c, this.l - It * (e ?? 1), this.opacity);
	},
	rgb() {
		return en(this).rgb();
	}
}));
//#endregion
//#region node_modules/d3-color/src/cubehelix.js
var tn = -.14861, nn = 1.78277, rn = -.29227, an = -.90649, on = 1.97294, sn = on * an, cn = on * nn, ln = nn * rn - an * tn;
function un(e) {
	if (e instanceof fn) return new fn(e.h, e.s, e.l, e.opacity);
	e instanceof We || (e = He(e));
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = (ln * r + sn * t - cn * n) / (ln + sn - cn), a = r - i, o = (on * (n - i) - rn * a) / an, s = Math.sqrt(o * o + a * a) / (on * i * (1 - i)), c = s ? Math.atan2(o, a) * Ft - 120 : NaN;
	return new fn(c < 0 ? c + 360 : c, s, i, e.opacity);
}
function dn(e, t, n, r) {
	return arguments.length === 1 ? un(e) : new fn(e, t, n, r ?? 1);
}
function fn(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ve(fn, dn, Le(ze, {
	brighter(e) {
		return e = e == null ? Ye : Ye ** +e, new fn(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? Be : Be ** +e, new fn(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = isNaN(this.h) ? 0 : (this.h + 120) * Pt, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), r = Math.cos(e), i = Math.sin(e);
		return new We(255 * (t + n * (tn * r + nn * i)), 255 * (t + n * (rn * r + an * i)), 255 * (t + on * r * n), this.opacity);
	}
}));
//#endregion
//#region node_modules/d3-interpolate/src/hsl.js
function pn(e) {
	return function(t, n) {
		var r = e((t = qe(t)).h, (n = qe(n)).h), i = j(t.s, n.s), a = j(t.l, n.l), o = j(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.s = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var mn = pn(Re);
//#endregion
//#region node_modules/d3-interpolate/src/lab.js
function hn(e, t) {
	var n = j((e = Gt(e)).l, (t = Gt(t)).l), r = j(e.a, t.a), i = j(e.b, t.b), a = j(e.opacity, t.opacity);
	return function(t) {
		return e.l = n(t), e.a = r(t), e.b = i(t), e.opacity = a(t), e + "";
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/hcl.js
function gn(e) {
	return function(t, n) {
		var r = e((t = Qt(t)).h, (n = Qt(n)).h), i = j(t.c, n.c), a = j(t.l, n.l), o = j(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.c = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var _n = gn(Re);
//#endregion
//#region node_modules/d3-interpolate/src/cubehelix.js
function vn(e) {
	return (function t(n) {
		n = +n;
		function r(t, r) {
			var i = e((t = dn(t)).h, (r = dn(r)).h), a = j(t.s, r.s), o = j(t.l, r.l), s = j(t.opacity, r.opacity);
			return function(e) {
				return t.h = i(e), t.s = a(e), t.l = o(e ** +n), t.opacity = s(e), t + "";
			};
		}
		return r.gamma = t, r;
	})(1);
}
vn(Re);
var yn = vn(j);
//#endregion
//#region node_modules/d3-interpolate/src/piecewise.js
function bn(e, t) {
	t === void 0 && (t = e, e = l);
	for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;) a[n] = e(i, i = t[++n]);
	return function(e) {
		var t = Math.max(0, Math.min(r - 1, Math.floor(e *= r)));
		return a[t](e - t);
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/quantize.js
function xn(e, t) {
	for (var n = Array(t), r = 0; r < t; ++r) n[r] = e(r / (t - 1));
	return n;
}
//#endregion
//#region node_modules/d3-scale/src/identity.js
function Sn(e) {
	var t;
	function n(e) {
		return e == null || isNaN(e = +e) ? t : e;
	}
	return n.invert = n, n.domain = n.range = function(t) {
		return arguments.length ? (e = Array.from(t, p), n) : e.slice();
	}, n.unknown = function(e) {
		return arguments.length ? (t = e, n) : t;
	}, n.copy = function() {
		return Sn(e).unknown(t);
	}, e = arguments.length ? Array.from(e, p) : [0, 1], m(n);
}
//#endregion
//#region node_modules/d3-scale/src/quantile.js
function Cn() {
	var e = [], t = [], n = [], r;
	function i() {
		var r = 0, i = Math.max(1, t.length);
		for (n = Array(i - 1); ++r < i;) n[r - 1] = Tt(e, r / i);
		return o;
	}
	function o(e) {
		return e == null || isNaN(e = +e) ? r : t[b(n, e)];
	}
	return o.invertExtent = function(r) {
		var i = t.indexOf(r);
		return i < 0 ? [NaN, NaN] : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]];
	}, o.domain = function(t) {
		if (!arguments.length) return e.slice();
		e = [];
		for (let n of t) n != null && !isNaN(n = +n) && e.push(n);
		return e.sort(a), i();
	}, o.range = function(e) {
		return arguments.length ? (t = Array.from(e), i()) : t.slice();
	}, o.unknown = function(e) {
		return arguments.length ? (r = e, o) : r;
	}, o.quantiles = function() {
		return n.slice();
	}, o.copy = function() {
		return Cn().domain(e).range(t).unknown(r);
	}, h.apply(o, arguments);
}
//#endregion
//#region node_modules/d3-scale/src/threshold.js
function wn() {
	var e = [.5], t = [0, 1], n, r = 1;
	function i(i) {
		return i != null && i <= i ? t[b(e, i, 0, r)] : n;
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
		return wn().domain(e).range(t).unknown(n);
	}, h.apply(i, arguments);
}
//#endregion
//#region node_modules/d3-scale/src/sequential.js
function Tn(e, t) {
	return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
//#endregion
//#region node_modules/d3-scale/src/diverging.js
function En() {
	var e = 0, t = .5, n = 1, r = 1, i, a, o, s, c, u = _, d, f = !1, p;
	function m(e) {
		return isNaN(e = +e) ? p : (e = .5 + ((e = +d(e)) - a) * (r * e < r * a ? s : c), u(f ? Math.max(0, Math.min(1, e)) : e));
	}
	m.domain = function(l) {
		return arguments.length ? ([e, t, n] = l, i = d(e = +e), a = d(t = +t), o = d(n = +n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, m) : [
			e,
			t,
			n
		];
	}, m.clamp = function(e) {
		return arguments.length ? (f = !!e, m) : f;
	}, m.interpolator = function(e) {
		return arguments.length ? (u = e, m) : u;
	};
	function h(e) {
		return function(t) {
			var n, r, i;
			return arguments.length ? ([n, r, i] = t, u = bn(e, [
				n,
				r,
				i
			]), m) : [
				u(0),
				u(.5),
				u(1)
			];
		};
	}
	return m.range = h(l), m.rangeRound = h(y), m.unknown = function(e) {
		return arguments.length ? (p = e, m) : p;
	}, function(l) {
		return d = l, i = l(e), a = l(t), o = l(n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, m;
	};
}
function Dn() {
	var e = m(En()(_));
	return e.copy = function() {
		return Tn(e, Dn());
	}, u.apply(e, arguments);
}
function On() {
	var e = ke(En()).domain([
		.1,
		1,
		10
	]);
	return e.copy = function() {
		return Tn(e, On()).base(e.base());
	}, u.apply(e, arguments);
}
function kn() {
	var e = he(En());
	return e.copy = function() {
		return Tn(e, kn()).constant(e.constant());
	}, u.apply(e, arguments);
}
function An() {
	var e = t(En());
	return e.copy = function() {
		return Tn(e, An()).exponent(e.exponent());
	}, u.apply(e, arguments);
}
//#endregion
//#region node_modules/d3-shape/src/symbol/asterisk.js
var jn = M(3), Mn = { draw(e, t) {
	let n = M(t + Qe(t / 28, .75)) * .59436, r = n / 2, i = r * jn;
	e.moveTo(0, n), e.lineTo(0, -n), e.moveTo(-i, -r), e.lineTo(i, r), e.moveTo(-i, r), e.lineTo(i, -r);
} }, Nn = { draw(e, t) {
	let n = M(t / et);
	e.moveTo(n, 0), e.arc(0, 0, n, 0, $e);
} }, Pn = { draw(e, t) {
	let n = M(t / 5) / 2;
	e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
} }, Fn = M(1 / 3), In = Fn * 2, Ln = { draw(e, t) {
	let n = M(t / In), r = n * Fn;
	e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
} }, Rn = { draw(e, t) {
	let n = M(t) * .62625;
	e.moveTo(0, -n), e.lineTo(n, 0), e.lineTo(0, n), e.lineTo(-n, 0), e.closePath();
} }, zn = { draw(e, t) {
	let n = M(t - Qe(t / 7, 2)) * .87559;
	e.moveTo(-n, 0), e.lineTo(n, 0), e.moveTo(0, n), e.lineTo(0, -n);
} }, Bn = { draw(e, t) {
	let n = M(t), r = -n / 2;
	e.rect(r, r, n, n);
} }, Vn = { draw(e, t) {
	let n = M(t) * .4431;
	e.moveTo(n, n), e.lineTo(n, -n), e.lineTo(-n, -n), e.lineTo(-n, n), e.closePath();
} }, Hn = .8908130915292852, Un = Ze(et / 10) / Ze(7 * et / 10), Wn = Ze($e / 10) * Un, Gn = -Xe($e / 10) * Un, Kn = { draw(e, t) {
	let n = M(t * Hn), r = Wn * n, i = Gn * n;
	e.moveTo(0, -n), e.lineTo(r, i);
	for (let t = 1; t < 5; ++t) {
		let a = $e * t / 5, o = Xe(a), s = Ze(a);
		e.lineTo(s * n, -o * n), e.lineTo(o * r - s * i, s * r + o * i);
	}
	e.closePath();
} }, qn = M(3), Jn = { draw(e, t) {
	let n = -M(t / (qn * 3));
	e.moveTo(0, n * 2), e.lineTo(-qn * n, -n), e.lineTo(qn * n, -n), e.closePath();
} }, Yn = M(3), Xn = { draw(e, t) {
	let n = M(t) * .6824, r = n / 2, i = n * Yn / 2;
	e.moveTo(0, -n), e.lineTo(i, r), e.lineTo(-i, r), e.closePath();
} }, Zn = -.5, Qn = M(3) / 2, $n = 1 / M(12), er = ($n / 2 + 1) * 3, tr = { draw(e, t) {
	let n = M(t / er), r = n / 2, i = n * $n, a = r, o = n * $n + n, s = -a, c = o;
	e.moveTo(r, i), e.lineTo(a, o), e.lineTo(s, c), e.lineTo(Zn * r - Qn * i, Qn * r + Zn * i), e.lineTo(Zn * a - Qn * o, Qn * a + Zn * o), e.lineTo(Zn * s - Qn * c, Qn * s + Zn * c), e.lineTo(Zn * r + Qn * i, Zn * i - Qn * r), e.lineTo(Zn * a + Qn * o, Zn * o - Qn * a), e.lineTo(Zn * s + Qn * c, Zn * c - Qn * s), e.closePath();
} }, nr = { draw(e, t) {
	let n = M(t - Qe(t / 6, 1.7)) * .6189;
	e.moveTo(-n, -n), e.lineTo(n, n), e.moveTo(-n, n), e.lineTo(n, -n);
} }, rr = [
	Nn,
	Pn,
	Ln,
	Bn,
	Kn,
	Jn,
	tr
], ir = [
	Nn,
	zn,
	nr,
	Xn,
	Mn,
	Vn,
	Rn
], N = 1e-6, P = Math.PI, F = P / 2, ar = P / 4, or = P * 2, I = 180 / P, L = P / 180, R = Math.abs, sr = Math.atan, cr = Math.atan2, z = Math.cos, lr = Math.exp, ur = Math.log, dr = Math.pow, B = Math.sin, fr = Math.sign || function(e) {
	return e > 0 ? 1 : e < 0 ? -1 : 0;
}, V = Math.sqrt, pr = Math.tan;
function mr(e) {
	return e > 1 ? 0 : e < -1 ? P : Math.acos(e);
}
function hr(e) {
	return e > 1 ? F : e < -1 ? -F : Math.asin(e);
}
//#endregion
//#region node_modules/d3-geo/src/noop.js
function gr() {}
//#endregion
//#region node_modules/d3-geo/src/stream.js
function _r(e, t) {
	e && yr.hasOwnProperty(e.type) && yr[e.type](e, t);
}
var vr = {
	Feature: function(e, t) {
		_r(e.geometry, t);
	},
	FeatureCollection: function(e, t) {
		for (var n = e.features, r = -1, i = n.length; ++r < i;) _r(n[r].geometry, t);
	}
}, yr = {
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
		br(e.coordinates, t, 0);
	},
	MultiLineString: function(e, t) {
		for (var n = e.coordinates, r = -1, i = n.length; ++r < i;) br(n[r], t, 0);
	},
	Polygon: function(e, t) {
		xr(e.coordinates, t);
	},
	MultiPolygon: function(e, t) {
		for (var n = e.coordinates, r = -1, i = n.length; ++r < i;) xr(n[r], t);
	},
	GeometryCollection: function(e, t) {
		for (var n = e.geometries, r = -1, i = n.length; ++r < i;) _r(n[r], t);
	}
};
function br(e, t, n) {
	var r = -1, i = e.length - n, a;
	for (t.lineStart(); ++r < i;) a = e[r], t.point(a[0], a[1], a[2]);
	t.lineEnd();
}
function xr(e, t) {
	var n = -1, r = e.length;
	for (t.polygonStart(); ++n < r;) br(e[n], t, 1);
	t.polygonEnd();
}
function Sr(e, t) {
	e && vr.hasOwnProperty(e.type) ? vr[e.type](e, t) : _r(e, t);
}
//#endregion
//#region node_modules/d3-geo/src/cartesian.js
function Cr(e) {
	return [cr(e[1], e[0]), hr(e[2])];
}
function wr(e) {
	var t = e[0], n = e[1], r = z(n);
	return [
		r * z(t),
		r * B(t),
		B(n)
	];
}
function Tr(e, t) {
	return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Er(e, t) {
	return [
		e[1] * t[2] - e[2] * t[1],
		e[2] * t[0] - e[0] * t[2],
		e[0] * t[1] - e[1] * t[0]
	];
}
function Dr(e, t) {
	e[0] += t[0], e[1] += t[1], e[2] += t[2];
}
function Or(e, t) {
	return [
		e[0] * t,
		e[1] * t,
		e[2] * t
	];
}
function kr(e) {
	var t = V(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
	e[0] /= t, e[1] /= t, e[2] /= t;
}
//#endregion
//#region node_modules/d3-geo/src/compose.js
function Ar(e, t) {
	function n(n, r) {
		return n = e(n, r), t(n[0], n[1]);
	}
	return e.invert && t.invert && (n.invert = function(n, r) {
		return n = t.invert(n, r), n && e.invert(n[0], n[1]);
	}), n;
}
//#endregion
//#region node_modules/d3-geo/src/rotation.js
function jr(e, t) {
	return R(e) > P && (e -= Math.round(e / or) * or), [e, t];
}
jr.invert = jr;
function Mr(e, t, n) {
	return (e %= or) ? t || n ? Ar(Pr(e), Fr(t, n)) : Pr(e) : t || n ? Fr(t, n) : jr;
}
function Nr(e) {
	return function(t, n) {
		return t += e, R(t) > P && (t -= Math.round(t / or) * or), [t, n];
	};
}
function Pr(e) {
	var t = Nr(e);
	return t.invert = Nr(-e), t;
}
function Fr(e, t) {
	var n = z(e), r = B(e), i = z(t), a = B(t);
	function o(e, t) {
		var o = z(t), s = z(e) * o, c = B(e) * o, l = B(t), u = l * n + s * r;
		return [cr(c * i - u * a, s * n - l * r), hr(u * i + c * a)];
	}
	return o.invert = function(e, t) {
		var o = z(t), s = z(e) * o, c = B(e) * o, l = B(t), u = l * i - c * a;
		return [cr(c * i + l * a, s * n + u * r), hr(u * n - s * r)];
	}, o;
}
function Ir(e) {
	e = Mr(e[0] * L, e[1] * L, e.length > 2 ? e[2] * L : 0);
	function t(t) {
		return t = e(t[0] * L, t[1] * L), t[0] *= I, t[1] *= I, t;
	}
	return t.invert = function(t) {
		return t = e.invert(t[0] * L, t[1] * L), t[0] *= I, t[1] *= I, t;
	}, t;
}
//#endregion
//#region node_modules/d3-geo/src/circle.js
function Lr(e, t, n, r, i, a) {
	if (n) {
		var o = z(t), s = B(t), c = r * n;
		i == null ? (i = t + r * or, a = t - c / 2) : (i = Rr(o, i), a = Rr(o, a), (r > 0 ? i < a : i > a) && (i += r * or));
		for (var l, u = i; r > 0 ? u > a : u < a; u -= c) l = Cr([
			o,
			-s * z(u),
			-s * B(u)
		]), e.point(l[0], l[1]);
	}
}
function Rr(e, t) {
	t = wr(t), t[0] -= e, kr(t);
	var n = mr(-t[1]);
	return ((-t[2] < 0 ? -n : n) + or - N) % or;
}
//#endregion
//#region node_modules/d3-geo/src/clip/buffer.js
function zr() {
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
		lineEnd: gr,
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
function Br(e, t) {
	return R(e[0] - t[0]) < 1e-6 && R(e[1] - t[1]) < 1e-6;
}
//#endregion
//#region node_modules/d3-geo/src/clip/rejoin.js
function Vr(e, t, n, r) {
	this.x = e, this.z = t, this.o = n, this.e = r, this.v = !1, this.n = this.p = null;
}
function Hr(e, t, n, r, i) {
	var a = [], o = [], s, c;
	if (e.forEach(function(e) {
		if (!((t = e.length - 1) <= 0)) {
			var t, n = e[0], r = e[t], c;
			if (Br(n, r)) {
				if (!n[2] && !r[2]) {
					for (i.lineStart(), s = 0; s < t; ++s) i.point((n = e[s])[0], n[1]);
					i.lineEnd();
					return;
				}
				r[0] += 2 * N;
			}
			a.push(c = new Vr(n, e, null, !0)), o.push(c.o = new Vr(n, null, c, !1)), a.push(c = new Vr(r, e, null, !1)), o.push(c.o = new Vr(r, null, c, !0));
		}
	}), a.length) {
		for (o.sort(t), Ur(a), Ur(o), s = 0, c = o.length; s < c; ++s) o[s].e = n = !n;
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
function Ur(e) {
	if (t = e.length) {
		for (var t, n = 0, r = e[0], i; ++n < t;) r.n = i = e[n], i.p = r, r = i;
		r.n = i = e[0], i.p = r;
	}
}
//#endregion
//#region node_modules/d3-geo/src/polygonContains.js
function Wr(e) {
	return R(e[0]) <= P ? e[0] : fr(e[0]) * ((R(e[0]) + P) % or - P);
}
function Gr(e, t) {
	var n = Wr(t), r = t[1], i = B(r), a = [
		B(n),
		-z(n),
		0
	], o = 0, s = 0, c = new pt();
	i === 1 ? r = F + N : i === -1 && (r = -F - N);
	for (var l = 0, u = e.length; l < u; ++l) if (f = (d = e[l]).length) for (var d, f, p = d[f - 1], m = Wr(p), h = p[1] / 2 + ar, g = B(h), _ = z(h), v = 0; v < f; ++v, m = b, g = S, _ = C, p = y) {
		var y = d[v], b = Wr(y), x = y[1] / 2 + ar, S = B(x), C = z(x), w = b - m, T = w >= 0 ? 1 : -1, E = T * w, D = E > P, O = g * S;
		if (c.add(cr(O * T * B(E), _ * C + O * z(E))), o += D ? w + T * or : w, D ^ m >= n ^ b >= n) {
			var k = Er(wr(p), wr(y));
			kr(k);
			var A = Er(a, k);
			kr(A);
			var ee = (D ^ w >= 0 ? -1 : 1) * hr(A[2]);
			(r > ee || r === ee && (k[0] || k[1])) && (s += D ^ w >= 0 ? 1 : -1);
		}
	}
	return (o < -1e-6 || o < 1e-6 && c < -1e-12) ^ s & 1;
}
//#endregion
//#region node_modules/d3-geo/src/clip/index.js
function Kr(e, t, n, r) {
	return function(i) {
		var a = t(i), o = zr(), s = t(o), c = !1, l, u, d, f = {
			point: p,
			lineStart: h,
			lineEnd: g,
			polygonStart: function() {
				f.point = _, f.lineStart = v, f.lineEnd = y, u = [], l = [];
			},
			polygonEnd: function() {
				f.point = p, f.lineStart = h, f.lineEnd = g, u = kt(u);
				var e = Gr(l, r);
				u.length ? (c ||= (i.polygonStart(), !0), Hr(u, Jr, e, n, i)) : e && (c ||= (i.polygonStart(), !0), i.lineStart(), n(null, null, 1, i), i.lineEnd()), c &&= (i.polygonEnd(), !1), u = l = null;
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
				r > 1 && e & 2 && t.push(t.pop().concat(t.shift())), u.push(t.filter(qr));
			}
		}
		return f;
	};
}
function qr(e) {
	return e.length > 1;
}
function Jr(e, t) {
	return ((e = e.x)[0] < 0 ? e[1] - F - N : F - e[1]) - ((t = t.x)[0] < 0 ? t[1] - F - N : F - t[1]);
}
//#endregion
//#region node_modules/d3-geo/src/clip/antimeridian.js
var Yr = Kr(function() {
	return !0;
}, Xr, Qr, [-P, -F]);
function Xr(e) {
	var t = NaN, n = NaN, r = NaN, i;
	return {
		lineStart: function() {
			e.lineStart(), i = 1;
		},
		point: function(a, o) {
			var s = a > 0 ? P : -P, c = R(a - t);
			R(c - P) < 1e-6 ? (e.point(t, n = (n + o) / 2 > 0 ? F : -F), e.point(r, n), e.lineEnd(), e.lineStart(), e.point(s, n), e.point(a, n), i = 0) : r !== s && c >= P && (R(t - r) < 1e-6 && (t -= r * N), R(a - s) < 1e-6 && (a -= s * N), n = Zr(t, n, a, o), e.point(r, n), e.lineEnd(), e.lineStart(), e.point(s, n), i = 0), e.point(t = a, n = o), r = s;
		},
		lineEnd: function() {
			e.lineEnd(), t = n = NaN;
		},
		clean: function() {
			return 2 - i;
		}
	};
}
function Zr(e, t, n, r) {
	var i, a, o = B(e - n);
	return R(o) > 1e-6 ? sr((B(t) * (a = z(r)) * B(n) - B(r) * (i = z(t)) * B(e)) / (i * a * o)) : (t + r) / 2;
}
function Qr(e, t, n, r) {
	var i;
	if (e == null) i = n * F, r.point(-P, i), r.point(0, i), r.point(P, i), r.point(P, 0), r.point(P, -i), r.point(0, -i), r.point(-P, -i), r.point(-P, 0), r.point(-P, i);
	else if (R(e[0] - t[0]) > 1e-6) {
		var a = e[0] < t[0] ? P : -P;
		i = n * a / 2, r.point(-a, i), r.point(0, i), r.point(a, i);
	} else r.point(t[0], t[1]);
}
//#endregion
//#region node_modules/d3-geo/src/clip/circle.js
function $r(e) {
	var t = z(e), n = 2 * L, r = t > 0, i = R(t) > N;
	function a(t, r, i, a) {
		Lr(a, e, n, i, t, r);
	}
	function o(e, n) {
		return z(e) * z(n) > t;
	}
	function s(e) {
		var t, n, a, s, u;
		return {
			lineStart: function() {
				s = a = !1, u = 1;
			},
			point: function(d, f) {
				var p = [d, f], m, h = o(d, f), g = r ? h ? 0 : l(d, f) : h ? l(d + (d < 0 ? P : -P), f) : 0;
				if (!t && (s = a = h) && e.lineStart(), h !== a && (m = c(t, p), (!m || Br(t, m) || Br(p, m)) && (p[2] = 1)), h !== a) u = 0, h ? (e.lineStart(), m = c(p, t), e.point(m[0], m[1])) : (m = c(t, p), e.point(m[0], m[1], 2), e.lineEnd()), t = m;
				else if (i && t && r ^ h) {
					var _;
					!(g & n) && (_ = c(p, t, !0)) && (u = 0, r ? (e.lineStart(), e.point(_[0][0], _[0][1]), e.point(_[1][0], _[1][1]), e.lineEnd()) : (e.point(_[1][0], _[1][1]), e.lineEnd(), e.lineStart(), e.point(_[0][0], _[0][1], 3)));
				}
				h && (!t || !Br(t, p)) && e.point(p[0], p[1]), t = p, a = h, n = g;
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
		var i = wr(e), a = wr(n), o = [
			1,
			0,
			0
		], s = Er(i, a), c = Tr(s, s), l = s[0], u = c - l * l;
		if (!u) return !r && e;
		var d = t * c / u, f = -t * l / u, p = Er(o, s), m = Or(o, d);
		Dr(m, Or(s, f));
		var h = p, g = Tr(m, h), _ = Tr(h, h), v = g * g - _ * (Tr(m, m) - 1);
		if (!(v < 0)) {
			var y = V(v), b = Or(h, (-g - y) / _);
			if (Dr(b, m), b = Cr(b), !r) return b;
			var x = e[0], S = n[0], C = e[1], w = n[1], T;
			S < x && (T = x, x = S, S = T);
			var E = S - x, D = R(E - P) < N, O = D || E < 1e-6;
			if (!D && w < C && (T = C, C = w, w = T), O ? D ? C + w > 0 ^ b[1] < (R(b[0] - x) < 1e-6 ? C : w) : C <= b[1] && b[1] <= w : E > P ^ (x <= b[0] && b[0] <= S)) {
				var k = Or(h, (-g + y) / _);
				return Dr(k, m), [b, Cr(k)];
			}
		}
	}
	function l(t, n) {
		var i = r ? e : P - e, a = 0;
		return t < -i ? a |= 1 : t > i && (a |= 2), n < -i ? a |= 4 : n > i && (a |= 8), a;
	}
	return Kr(o, s, a, r ? [0, -e] : [-P, e - P]);
}
//#endregion
//#region node_modules/d3-geo/src/clip/line.js
function ei(e, t, n, r, i, a) {
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
var ti = 1e9, ni = -ti;
function ri(e, t, n, r) {
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
		return R(r[0] - e) < 1e-6 ? i > 0 ? 0 : 3 : R(r[0] - n) < 1e-6 ? i > 0 ? 2 : 1 : R(r[1] - t) < 1e-6 ? +(i > 0) : i > 0 ? 3 : 2;
	}
	function s(e, t) {
		return c(e.x, t.x);
	}
	function c(e, t) {
		var n = o(e, 1), r = o(t, 1);
		return n === r ? n === 0 ? t[1] - e[1] : n === 1 ? e[0] - t[0] : n === 2 ? e[1] - t[1] : t[0] - e[0] : n - r;
	}
	return function(o) {
		var c = o, l = zr(), u, d, f, p, m, h, g, _, v, y, b, x = {
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
			var e = C(), t = b && e, n = (u = kt(u)).length;
			(t || n) && (o.polygonStart(), t && (o.lineStart(), a(null, null, 1, o), o.lineEnd()), n && Hr(u, s, e, a, o), o.polygonEnd()), c = o, u = d = f = null;
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
				var l = [g = Math.max(ni, Math.min(ti, g)), _ = Math.max(ni, Math.min(ti, _))], u = [a = Math.max(ni, Math.min(ti, a)), o = Math.max(ni, Math.min(ti, o))];
				ei(l, u, e, t, n, r) ? (v || (c.lineStart(), c.point(l[0], l[1])), c.point(u[0], u[1]), s || c.lineEnd(), b = !1) : s && (c.lineStart(), c.point(a, o), b = !1);
			}
			g = a, _ = o, v = s;
		}
		return x;
	};
}
//#endregion
//#region node_modules/d3-geo/src/identity.js
var ii = (e) => e, ai = new pt(), oi = new pt(), si, ci, li, ui, di = {
	point: gr,
	lineStart: gr,
	lineEnd: gr,
	polygonStart: function() {
		di.lineStart = fi, di.lineEnd = hi;
	},
	polygonEnd: function() {
		di.lineStart = di.lineEnd = di.point = gr, ai.add(R(oi)), oi = new pt();
	},
	result: function() {
		var e = ai / 2;
		return ai = new pt(), e;
	}
};
function fi() {
	di.point = pi;
}
function pi(e, t) {
	di.point = mi, si = li = e, ci = ui = t;
}
function mi(e, t) {
	oi.add(ui * e - li * t), li = e, ui = t;
}
function hi() {
	mi(si, ci);
}
//#endregion
//#region node_modules/d3-geo/src/path/bounds.js
var gi = Infinity, _i = gi, vi = -gi, yi = vi, bi = {
	point: xi,
	lineStart: gr,
	lineEnd: gr,
	polygonStart: gr,
	polygonEnd: gr,
	result: function() {
		var e = [[gi, _i], [vi, yi]];
		return vi = yi = -(_i = gi = Infinity), e;
	}
};
function xi(e, t) {
	e < gi && (gi = e), e > vi && (vi = e), t < _i && (_i = t), t > yi && (yi = t);
}
//#endregion
//#region node_modules/d3-geo/src/path/centroid.js
var Si = 0, Ci = 0, wi = 0, Ti = 0, Ei = 0, Di = 0, Oi = 0, ki = 0, Ai = 0, ji, Mi, Ni, Pi, Fi = {
	point: Ii,
	lineStart: Li,
	lineEnd: Bi,
	polygonStart: function() {
		Fi.lineStart = Vi, Fi.lineEnd = Hi;
	},
	polygonEnd: function() {
		Fi.point = Ii, Fi.lineStart = Li, Fi.lineEnd = Bi;
	},
	result: function() {
		var e = Ai ? [Oi / Ai, ki / Ai] : Di ? [Ti / Di, Ei / Di] : wi ? [Si / wi, Ci / wi] : [NaN, NaN];
		return Si = Ci = wi = Ti = Ei = Di = Oi = ki = Ai = 0, e;
	}
};
function Ii(e, t) {
	Si += e, Ci += t, ++wi;
}
function Li() {
	Fi.point = Ri;
}
function Ri(e, t) {
	Fi.point = zi, Ii(Ni = e, Pi = t);
}
function zi(e, t) {
	var n = e - Ni, r = t - Pi, i = V(n * n + r * r);
	Ti += i * (Ni + e) / 2, Ei += i * (Pi + t) / 2, Di += i, Ii(Ni = e, Pi = t);
}
function Bi() {
	Fi.point = Ii;
}
function Vi() {
	Fi.point = Ui;
}
function Hi() {
	Wi(ji, Mi);
}
function Ui(e, t) {
	Fi.point = Wi, Ii(ji = Ni = e, Mi = Pi = t);
}
function Wi(e, t) {
	var n = e - Ni, r = t - Pi, i = V(n * n + r * r);
	Ti += i * (Ni + e) / 2, Ei += i * (Pi + t) / 2, Di += i, i = Pi * e - Ni * t, Oi += i * (Ni + e), ki += i * (Pi + t), Ai += i * 3, Ii(Ni = e, Pi = t);
}
//#endregion
//#region node_modules/d3-geo/src/path/context.js
function Gi(e) {
	this._context = e;
}
Gi.prototype = {
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
			default: this._context.moveTo(e + this._radius, t), this._context.arc(e, t, this._radius, 0, or);
		}
	},
	result: gr
};
//#endregion
//#region node_modules/d3-geo/src/path/measure.js
var Ki = new pt(), qi, Ji, Yi, Xi, Zi, Qi = {
	point: gr,
	lineStart: function() {
		Qi.point = $i;
	},
	lineEnd: function() {
		qi && ea(Ji, Yi), Qi.point = gr;
	},
	polygonStart: function() {
		qi = !0;
	},
	polygonEnd: function() {
		qi = null;
	},
	result: function() {
		var e = +Ki;
		return Ki = new pt(), e;
	}
};
function $i(e, t) {
	Qi.point = ea, Ji = Xi = e, Yi = Zi = t;
}
function ea(e, t) {
	Xi -= e, Zi -= t, Ki.add(V(Xi * Xi + Zi * Zi)), Xi = e, Zi = t;
}
//#endregion
//#region node_modules/d3-geo/src/path/string.js
var ta, na, ra, ia, aa = class {
	constructor(e) {
		this._append = e == null ? oa : sa(e), this._radius = 4.5, this._ = "";
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
				if (this._append`M${e},${t}`, this._radius !== ra || this._append !== na) {
					let e = this._radius, t = this._;
					this._ = "", this._append`m0,${e}a${e},${e} 0 1,1 0,${-2 * e}a${e},${e} 0 1,1 0,${2 * e}z`, ra = e, na = this._append, ia = this._, this._ = t;
				}
				this._ += ia;
		}
	}
	result() {
		let e = this._;
		return this._ = "", e.length ? e : null;
	}
};
function oa(e) {
	let t = 1;
	this._ += e[0];
	for (let n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function sa(e) {
	let t = Math.floor(e);
	if (!(t >= 0)) throw RangeError(`invalid digits: ${e}`);
	if (t > 15) return oa;
	if (t !== ta) {
		let e = 10 ** t;
		ta = t, na = function(t) {
			let n = 1;
			this._ += t[0];
			for (let r = t.length; n < r; ++n) this._ += Math.round(arguments[n] * e) / e + t[n];
		};
	}
	return na;
}
//#endregion
//#region node_modules/d3-geo/src/path/index.js
function ca(e, t) {
	let n = 3, r = 4.5, i, a;
	function o(e) {
		return e && (typeof r == "function" && a.pointRadius(+r.apply(this, arguments)), Sr(e, i(a))), a.result();
	}
	return o.area = function(e) {
		return Sr(e, i(di)), di.result();
	}, o.measure = function(e) {
		return Sr(e, i(Qi)), Qi.result();
	}, o.bounds = function(e) {
		return Sr(e, i(bi)), bi.result();
	}, o.centroid = function(e) {
		return Sr(e, i(Fi)), Fi.result();
	}, o.projection = function(t) {
		return arguments.length ? (i = t == null ? (e = null, ii) : (e = t).stream, o) : e;
	}, o.context = function(e) {
		return arguments.length ? (a = e == null ? (t = null, new aa(n)) : new Gi(t = e), typeof r != "function" && a.pointRadius(r), o) : t;
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
		return t === null && (a = new aa(n)), o;
	}, o.projection(e).digits(n).context(t);
}
//#endregion
//#region node_modules/d3-geo/src/transform.js
function la(e) {
	return { stream: ua(e) };
}
function ua(e) {
	return function(t) {
		var n = new da();
		for (var r in e) n[r] = e[r];
		return n.stream = t, n;
	};
}
function da() {}
da.prototype = {
	constructor: da,
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
function fa(e, t, n) {
	var r = e.clipExtent && e.clipExtent();
	return e.scale(150).translate([0, 0]), r != null && e.clipExtent(null), Sr(n, e.stream(bi)), t(bi.result()), r != null && e.clipExtent(r), e;
}
function pa(e, t, n) {
	return fa(e, function(n) {
		var r = t[1][0] - t[0][0], i = t[1][1] - t[0][1], a = Math.min(r / (n[1][0] - n[0][0]), i / (n[1][1] - n[0][1])), o = +t[0][0] + (r - a * (n[1][0] + n[0][0])) / 2, s = +t[0][1] + (i - a * (n[1][1] + n[0][1])) / 2;
		e.scale(150 * a).translate([o, s]);
	}, n);
}
function ma(e, t, n) {
	return pa(e, [[0, 0], t], n);
}
function ha(e, t, n) {
	return fa(e, function(n) {
		var r = +t, i = r / (n[1][0] - n[0][0]), a = (r - i * (n[1][0] + n[0][0])) / 2, o = -i * n[0][1];
		e.scale(150 * i).translate([a, o]);
	}, n);
}
function ga(e, t, n) {
	return fa(e, function(n) {
		var r = +t, i = r / (n[1][1] - n[0][1]), a = -i * n[0][0], o = (r - i * (n[1][1] + n[0][1])) / 2;
		e.scale(150 * i).translate([a, o]);
	}, n);
}
//#endregion
//#region node_modules/d3-geo/src/projection/resample.js
var _a = 16, va = z(30 * L);
function ya(e, t) {
	return +t ? xa(e, t) : ba(e);
}
function ba(e) {
	return ua({ point: function(t, n) {
		t = e(t, n), this.stream.point(t[0], t[1]);
	} });
}
function xa(e, t) {
	function n(r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
		var _ = l - r, v = u - i, y = _ * _ + v * v;
		if (y > 4 * t && h--) {
			var b = o + f, x = s + p, S = c + m, C = V(b * b + x * x + S * S), w = hr(S /= C), T = R(R(S) - 1) < 1e-6 || R(a - d) < 1e-6 ? (a + d) / 2 : cr(x, b), E = e(T, w), D = E[0], O = E[1], k = D - r, A = O - i, ee = v * k - _ * A;
			(ee * ee / y > t || R((_ * k + v * A) / y - .5) > .3 || o * f + s * p + c * m < va) && (n(r, i, a, o, s, c, D, O, T, b /= C, x /= C, S, h, g), g.point(D, O), n(D, O, T, b, x, S, l, u, d, f, p, m, h, g));
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
			var a = wr([r, i]), o = e(r, i);
			n(u, d, l, f, p, m, u = o[0], d = o[1], l = r, f = a[0], p = a[1], m = a[2], _a, t), t.point(u, d);
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
			n(u, d, l, f, p, m, i, a, r, o, s, c, _a, t), h.lineEnd = y, y();
		}
		return h;
	};
}
//#endregion
//#region node_modules/d3-geo/src/projection/index.js
var Sa = ua({ point: function(e, t) {
	this.stream.point(e * L, t * L);
} });
function Ca(e) {
	return ua({ point: function(t, n) {
		var r = e(t, n);
		return this.stream.point(r[0], r[1]);
	} });
}
function wa(e, t, n, r, i) {
	function a(a, o) {
		return a *= r, o *= i, [t + e * a, n - e * o];
	}
	return a.invert = function(a, o) {
		return [(a - t) / e * r, (n - o) / e * i];
	}, a;
}
function Ta(e, t, n, r, i, a) {
	if (!a) return wa(e, t, n, r, i);
	var o = z(a), s = B(a), c = o * e, l = s * e, u = o / e, d = s / e, f = (s * n - o * t) / e, p = (s * t + o * n) / e;
	function m(e, a) {
		return e *= r, a *= i, [c * e - l * a + t, n - l * e - c * a];
	}
	return m.invert = function(e, t) {
		return [r * (u * e - d * t + f), i * (p - d * e - u * t)];
	}, m;
}
function Ea(e) {
	return Da(function() {
		return e;
	})();
}
function Da(e) {
	var t, n = 150, r = 480, i = 250, a = 0, o = 0, s = 0, c = 0, l = 0, u, d = 0, f = 1, p = 1, m = null, h = Yr, g = null, _, v, y, b = ii, x = .5, S, C, w, T, E;
	function D(e) {
		return w(e[0] * L, e[1] * L);
	}
	function O(e) {
		return e = w.invert(e[0], e[1]), e && [e[0] * I, e[1] * I];
	}
	D.stream = function(e) {
		return T && E === e ? T : T = Sa(Ca(u)(h(S(b(E = e)))));
	}, D.preclip = function(e) {
		return arguments.length ? (h = e, m = void 0, A()) : h;
	}, D.postclip = function(e) {
		return arguments.length ? (b = e, g = _ = v = y = null, A()) : b;
	}, D.clipAngle = function(e) {
		return arguments.length ? (h = +e ? $r(m = e * L) : (m = null, Yr), A()) : m * I;
	}, D.clipExtent = function(e) {
		return arguments.length ? (b = e == null ? (g = _ = v = y = null, ii) : ri(g = +e[0][0], _ = +e[0][1], v = +e[1][0], y = +e[1][1]), A()) : g == null ? null : [[g, _], [v, y]];
	}, D.scale = function(e) {
		return arguments.length ? (n = +e, k()) : n;
	}, D.translate = function(e) {
		return arguments.length ? (r = +e[0], i = +e[1], k()) : [r, i];
	}, D.center = function(e) {
		return arguments.length ? (a = e[0] % 360 * L, o = e[1] % 360 * L, k()) : [a * I, o * I];
	}, D.rotate = function(e) {
		return arguments.length ? (s = e[0] % 360 * L, c = e[1] % 360 * L, l = e.length > 2 ? e[2] % 360 * L : 0, k()) : [
			s * I,
			c * I,
			l * I
		];
	}, D.angle = function(e) {
		return arguments.length ? (d = e % 360 * L, k()) : d * I;
	}, D.reflectX = function(e) {
		return arguments.length ? (f = e ? -1 : 1, k()) : f < 0;
	}, D.reflectY = function(e) {
		return arguments.length ? (p = e ? -1 : 1, k()) : p < 0;
	}, D.precision = function(e) {
		return arguments.length ? (S = ya(C, x = e * e), A()) : V(x);
	}, D.fitExtent = function(e, t) {
		return pa(D, e, t);
	}, D.fitSize = function(e, t) {
		return ma(D, e, t);
	}, D.fitWidth = function(e, t) {
		return ha(D, e, t);
	}, D.fitHeight = function(e, t) {
		return ga(D, e, t);
	};
	function k() {
		var e = Ta(n, 0, 0, f, p, d).apply(null, t(a, o)), m = Ta(n, r - e[0], i - e[1], f, p, d);
		return u = Mr(s, c, l), C = Ar(t, m), w = Ar(u, C), S = ya(C, x), A();
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
function Oa(e) {
	var t = 0, n = P / 3, r = Da(e), i = r(t, n);
	return i.parallels = function(e) {
		return arguments.length ? r(t = e[0] * L, n = e[1] * L) : [t * I, n * I];
	}, i;
}
//#endregion
//#region node_modules/d3-geo/src/projection/cylindricalEqualArea.js
function ka(e) {
	var t = z(e);
	function n(e, n) {
		return [e * t, B(n) / t];
	}
	return n.invert = function(e, n) {
		return [e / t, hr(n * t)];
	}, n;
}
//#endregion
//#region node_modules/d3-geo/src/projection/conicEqualArea.js
function Aa(e, t) {
	var n = B(e), r = (n + B(t)) / 2;
	if (R(r) < 1e-6) return ka(e);
	var i = 1 + n * (2 * r - n), a = V(i) / r;
	function o(e, t) {
		var n = V(i - 2 * r * B(t)) / r;
		return [n * B(e *= r), a - n * z(e)];
	}
	return o.invert = function(e, t) {
		var n = a - t, o = cr(e, R(n)) * fr(n);
		return n * r < 0 && (o -= P * fr(e) * fr(n)), [o / r, hr((i - (e * e + n * n) * r * r) / (2 * r))];
	}, o;
}
function ja() {
	return Oa(Aa).scale(155.424).center([0, 33.6442]);
}
//#endregion
//#region node_modules/d3-geo/src/projection/albers.js
function Ma() {
	return ja().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7]);
}
//#endregion
//#region node_modules/d3-geo/src/projection/albersUsa.js
function Na(e) {
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
function Pa() {
	var e, t, n = Ma(), r, i = ja().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), a, o = ja().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), s, c, l = { point: function(e, t) {
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
		return e && t === r ? e : e = Na([
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
		return r = n.translate(e).clipExtent([[c - .455 * t, u - .238 * t], [c + .455 * t, u + .238 * t]]).stream(l), a = i.translate([c - .307 * t, u + .201 * t]).clipExtent([[c - .425 * t + N, u + .12 * t + N], [c - .214 * t - N, u + .234 * t - N]]).stream(l), s = o.translate([c - .205 * t, u + .212 * t]).clipExtent([[c - .214 * t + N, u + .166 * t + N], [c - .115 * t - N, u + .234 * t - N]]).stream(l), d();
	}, u.fitExtent = function(e, t) {
		return pa(u, e, t);
	}, u.fitSize = function(e, t) {
		return ma(u, e, t);
	}, u.fitWidth = function(e, t) {
		return ha(u, e, t);
	}, u.fitHeight = function(e, t) {
		return ga(u, e, t);
	};
	function d() {
		return e = t = null, u;
	}
	return u.scale(1070);
}
//#endregion
//#region node_modules/d3-geo/src/projection/azimuthal.js
function Fa(e) {
	return function(t, n) {
		var r = z(t), i = z(n), a = e(r * i);
		return a === Infinity ? [2, 0] : [a * i * B(t), a * B(n)];
	};
}
function Ia(e) {
	return function(t, n) {
		var r = V(t * t + n * n), i = e(r), a = B(i), o = z(i);
		return [cr(t * a, r * o), hr(r && n * a / r)];
	};
}
//#endregion
//#region node_modules/d3-geo/src/projection/azimuthalEqualArea.js
var La = Fa(function(e) {
	return V(2 / (1 + e));
});
La.invert = Ia(function(e) {
	return 2 * hr(e / 2);
});
function Ra() {
	return Ea(La).scale(124.75).clipAngle(179.999);
}
//#endregion
//#region node_modules/d3-geo/src/projection/azimuthalEquidistant.js
var za = Fa(function(e) {
	return (e = mr(e)) && e / B(e);
});
za.invert = Ia(function(e) {
	return e;
});
function Ba() {
	return Ea(za).scale(79.4188).clipAngle(179.999);
}
//#endregion
//#region node_modules/d3-geo/src/projection/mercator.js
function Va(e, t) {
	return [e, ur(pr((F + t) / 2))];
}
Va.invert = function(e, t) {
	return [e, 2 * sr(lr(t)) - F];
};
function Ha() {
	return Ua(Va).scale(961 / or);
}
function Ua(e) {
	var t = Ea(e), n = t.center, r = t.scale, i = t.translate, a = t.clipExtent, o = null, s, c, l;
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
		var n = P * r(), i = t(Ir(t.rotate()).invert([0, 0]));
		return a(o == null ? [[i[0] - n, i[1] - n], [i[0] + n, i[1] + n]] : e === Va ? [[Math.max(i[0] - n, o), s], [Math.min(i[0] + n, c), l]] : [[o, Math.max(i[1] - n, s)], [c, Math.min(i[1] + n, l)]]);
	}
	return u();
}
//#endregion
//#region node_modules/d3-geo/src/projection/conicConformal.js
function Wa(e) {
	return pr((F + e) / 2);
}
function Ga(e, t) {
	var n = z(e), r = e === t ? B(e) : ur(n / z(t)) / ur(Wa(t) / Wa(e)), i = n * dr(Wa(e), r) / r;
	if (!r) return Va;
	function a(e, t) {
		i > 0 ? t < -F + 1e-6 && (t = -F + N) : t > F - 1e-6 && (t = F - N);
		var n = i / dr(Wa(t), r);
		return [n * B(r * e), i - n * z(r * e)];
	}
	return a.invert = function(e, t) {
		var n = i - t, a = fr(r) * V(e * e + n * n), o = cr(e, R(n)) * fr(n);
		return n * r < 0 && (o -= P * fr(e) * fr(n)), [o / r, 2 * sr(dr(i / a, 1 / r)) - F];
	}, a;
}
function Ka() {
	return Oa(Ga).scale(109.5).parallels([30, 30]);
}
//#endregion
//#region node_modules/d3-geo/src/projection/equirectangular.js
function qa(e, t) {
	return [e, t];
}
qa.invert = qa;
function Ja() {
	return Ea(qa).scale(152.63);
}
//#endregion
//#region node_modules/d3-geo/src/projection/conicEquidistant.js
function Ya(e, t) {
	var n = z(e), r = e === t ? B(e) : (n - z(t)) / (t - e), i = n / r + e;
	if (R(r) < 1e-6) return qa;
	function a(e, t) {
		var n = i - t, a = r * e;
		return [n * B(a), i - n * z(a)];
	}
	return a.invert = function(e, t) {
		var n = i - t, a = cr(e, R(n)) * fr(n);
		return n * r < 0 && (a -= P * fr(e) * fr(n)), [a / r, i - fr(r) * V(e * e + n * n)];
	}, a;
}
function Xa() {
	return Oa(Ya).scale(131.154).center([0, 13.9389]);
}
//#endregion
//#region node_modules/d3-geo/src/projection/equalEarth.js
var Za = 1.340264, Qa = -.081106, $a = 893e-6, eo = .003796, to = V(3) / 2, no = 12;
function ro(e, t) {
	var n = hr(to * B(t)), r = n * n, i = r * r * r;
	return [e * z(n) / (to * (Za + 3 * Qa * r + i * (7 * $a + 9 * eo * r))), n * (Za + Qa * r + i * ($a + eo * r))];
}
ro.invert = function(e, t) {
	for (var n = t, r = n * n, i = r * r * r, a = 0, o, s, c; a < no && (s = n * (Za + Qa * r + i * ($a + eo * r)) - t, c = Za + 3 * Qa * r + i * (7 * $a + 9 * eo * r), n -= o = s / c, r = n * n, i = r * r * r, !(R(o) < 1e-12)); ++a);
	return [to * e * (Za + 3 * Qa * r + i * (7 * $a + 9 * eo * r)) / z(n), hr(B(n) / to)];
};
function io() {
	return Ea(ro).scale(177.158);
}
//#endregion
//#region node_modules/d3-geo/src/projection/gnomonic.js
function ao(e, t) {
	var n = z(t), r = z(e) * n;
	return [n * B(e) / r, B(t) / r];
}
ao.invert = Ia(sr);
function oo() {
	return Ea(ao).scale(144.049).clipAngle(60);
}
//#endregion
//#region node_modules/d3-geo/src/projection/orthographic.js
function so(e, t) {
	return [z(t) * B(e), B(t)];
}
so.invert = Ia(hr);
function co() {
	return Ea(so).scale(249.5).clipAngle(90 + N);
}
//#endregion
//#region node_modules/d3-geo/src/projection/stereographic.js
function lo(e, t) {
	var n = z(t), r = 1 + z(e) * n;
	return [n * B(e) / r, B(t) / r];
}
lo.invert = Ia(function(e) {
	return 2 * sr(e);
});
function uo() {
	return Ea(lo).scale(250).clipAngle(142);
}
//#endregion
//#region node_modules/d3-geo/src/projection/transverseMercator.js
function fo(e, t) {
	return [ur(pr((F + t) / 2)), -e];
}
fo.invert = function(e, t) {
	return [-t, 2 * sr(lr(e)) - F];
};
function po() {
	var e = Ua(fo), t = e.center, n = e.rotate;
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
function H(e) {
	for (var t = e.length / 6 | 0, n = Array(t), r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/categorical/category10.js
var mo = H("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), ho = H("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), go = H("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), _o = H("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0"), vo = H("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), yo = H("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), bo = H("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), xo = H("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), So = H("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), Co = H("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), wo = H("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"), U = (e) => Je(e[e.length - 1]), To = [
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
].map(H), Eo = U(To), Do = [
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
].map(H), Oo = U(Do), ko = [
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
].map(H), Ao = U(ko), jo = [
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
].map(H), Mo = U(jo), No = [
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
].map(H), Po = U(No), Fo = [
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
].map(H), Io = U(Fo), Lo = [
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
].map(H), Ro = U(Lo), zo = [
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
].map(H), Bo = U(zo), Vo = [
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
].map(H), Ho = U(Vo), Uo = [
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
].map(H), Wo = U(Uo), Go = [
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
].map(H), Ko = U(Go), qo = [
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
].map(H), Jo = U(qo), Yo = [
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
].map(H), Xo = U(Yo), Zo = [
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
].map(H), Qo = U(Zo), $o = [
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
].map(H), es = U($o), ts = [
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
].map(H), ns = U(ts), rs = [
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
].map(H), is = U(rs), as = [
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
].map(H), os = U(as), ss = [
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
].map(H), cs = U(ss), ls = [
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
].map(H), us = U(ls), ds = [
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
].map(H), fs = U(ds), ps = [
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
].map(H), ms = U(ps), hs = [
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
].map(H), gs = U(hs), _s = [
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
].map(H), vs = U(_s), ys = [
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
].map(H), bs = U(ys), xs = [
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
].map(H), Ss = U(xs), Cs = [
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
].map(H), ws = U(Cs);
//#endregion
//#region node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js
function Ts(e) {
	return e = Math.max(0, Math.min(1, e)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - e * (35.34 - e * (2381.73 - e * (6402.7 - e * (7024.72 - e * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + e * (170.73 + e * (52.82 - e * (131.46 - e * (176.58 - e * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + e * (442.36 - e * (2482.43 - e * (6167.24 - e * (6614.94 - e * 2475.67))))))) + ")";
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
var Es = yn(dn(300, .5, 0), dn(-240, .5, 1)), Ds = yn(dn(-100, .75, .35), dn(80, 1.5, .8)), Os = yn(dn(260, .75, .35), dn(80, 1.5, .8)), ks = dn();
function As(e) {
	(e < 0 || e > 1) && (e -= Math.floor(e));
	var t = Math.abs(e - .5);
	return ks.h = 360 * e - 100, ks.s = 1.5 - 1.5 * t, ks.l = .8 - .9 * t, ks + "";
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
var js = Ge(), Ms = Math.PI / 3, Ns = Math.PI * 2 / 3;
function Ps(e) {
	var t;
	return e = (.5 - e) * Math.PI, js.r = 255 * (t = Math.sin(e)) * t, js.g = 255 * (t = Math.sin(e + Ms)) * t, js.b = 255 * (t = Math.sin(e + Ns)) * t, js + "";
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js
function Fs(e) {
	return e = Math.max(0, Math.min(1, e)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + e * (1172.33 - e * (10793.56 - e * (33300.12 - e * (38394.49 - e * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + e * (557.33 + e * (1225.33 - e * (3574.96 - e * (1073.77 + e * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + e * (3211.1 - e * (15327.97 - e * (27814 - e * (22569.18 - e * 6838.66))))))) + ")";
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
function Is(e) {
	var t = e.length;
	return function(n) {
		return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
	};
}
var Ls = Is(H("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")), Rs = Is(H("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), zs = Is(H("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), Bs = Is(H("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
//#endregion
//#region node_modules/@observablehq/plot/src/defined.js
function Vs(e) {
	return e != null && !Number.isNaN(e);
}
function Hs(e, t) {
	return Vs(t) - +Vs(e) || a(e, t);
}
function Us(e, t) {
	return Vs(t) - +Vs(e) || o(e, t);
}
function Ws(e) {
	return e != null && `${e}` != "";
}
function Gs(e) {
	return isFinite(e) ? e : NaN;
}
function Ks(e) {
	return e > 0 && isFinite(e) ? e : NaN;
}
function qs(e) {
	return e < 0 && isFinite(e) ? e : NaN;
}
//#endregion
//#region node_modules/isoformat/src/format.js
function Js(e, t) {
	if (e instanceof Date || (e = /* @__PURE__ */ new Date(+e)), isNaN(e)) return typeof t == "function" ? t(e) : t;
	let n = e.getUTCHours(), r = e.getUTCMinutes(), i = e.getUTCSeconds(), a = e.getUTCMilliseconds();
	return `${Ys(e.getUTCFullYear(), 4)}-${Xs(e.getUTCMonth() + 1, 2)}-${Xs(e.getUTCDate(), 2)}${n || r || i || a ? `T${Xs(n, 2)}:${Xs(r, 2)}${i || a ? `:${Xs(i, 2)}${a ? `.${Xs(a, 3)}` : ""}` : ""}Z` : ""}`;
}
function Ys(e) {
	return e < 0 ? `-${Xs(-e, 6)}` : e > 9999 ? `+${Xs(e, 6)}` : Xs(e, 4);
}
function Xs(e, t) {
	return `${e}`.padStart(t, "0");
}
//#endregion
//#region node_modules/isoformat/src/parse.js
var Zs = /^(?:[-+]\d{2})?\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?(?:Z|[-+]\d{2}:?\d{2})?)?$/;
function Qs(e, t) {
	return Zs.test(e += "") ? new Date(e) : typeof t == "function" ? t(e) : t;
}
//#endregion
//#region node_modules/@observablehq/plot/src/order.js
function $s(e) {
	if (e == null) return;
	let t = e[0], n = e[e.length - 1];
	return o(t, n);
}
//#endregion
//#region node_modules/@observablehq/plot/src/time.js
var ec = 1e3, tc = ec * 60, nc = tc * 60, rc = nc * 24, ic = rc * 7, ac = rc * 30, oc = rc * 365, sc = [
	["millisecond", 1],
	["2 milliseconds", 2],
	["5 milliseconds", 5],
	["10 milliseconds", 10],
	["20 milliseconds", 20],
	["50 milliseconds", 50],
	["100 milliseconds", 100],
	["200 milliseconds", 200],
	["500 milliseconds", 500],
	["second", ec],
	["5 seconds", 5 * ec],
	["15 seconds", 15 * ec],
	["30 seconds", 30 * ec],
	["minute", tc],
	["5 minutes", 5 * tc],
	["15 minutes", 15 * tc],
	["30 minutes", 30 * tc],
	["hour", nc],
	["3 hours", 3 * nc],
	["6 hours", 6 * nc],
	["12 hours", 12 * nc],
	["day", rc],
	["2 days", 2 * rc],
	["week", ic],
	["2 weeks", 2 * ic],
	["month", ac],
	["3 months", 3 * ac],
	["6 months", 6 * ac],
	["year", oc],
	["2 years", 2 * oc],
	["5 years", 5 * oc],
	["10 years", 10 * oc],
	["20 years", 20 * oc],
	["50 years", 50 * oc],
	["100 years", 100 * oc]
], cc = /* @__PURE__ */ new Map([
	["second", ec],
	["minute", tc],
	["hour", nc],
	["day", rc],
	["monday", ic],
	["tuesday", ic],
	["wednesday", ic],
	["thursday", ic],
	["friday", ic],
	["saturday", ic],
	["sunday", ic],
	["week", ic],
	["month", ac],
	["year", oc]
]), lc = /* @__PURE__ */ new Map([
	["second", se],
	["minute", de],
	["hour", ce],
	["day", ne],
	["monday", me],
	["tuesday", Ne],
	["wednesday", fe],
	["thursday", ge],
	["friday", ye],
	["saturday", je],
	["sunday", Pe],
	["week", Pe],
	["month", we],
	["year", ve]
]), uc = /* @__PURE__ */ new Map([
	["second", se],
	["minute", oe],
	["hour", le],
	["day", Se],
	["monday", Me],
	["tuesday", ue],
	["wednesday", Ce],
	["thursday", ie],
	["friday", re],
	["saturday", pe],
	["sunday", ae],
	["week", ae],
	["month", be],
	["year", De]
]), dc = Symbol("intervalDuration"), fc = Symbol("intervalType");
for (let [e, t] of lc) t[dc] = cc.get(e), t[fc] = "time";
for (let [e, t] of uc) t[dc] = cc.get(e), t[fc] = "utc";
var pc = [
	[
		"year",
		De,
		"utc"
	],
	[
		"month",
		be,
		"utc"
	],
	[
		"day",
		Se,
		"utc",
		6 * ac
	],
	[
		"hour",
		le,
		"utc",
		3 * rc
	],
	[
		"minute",
		oe,
		"utc",
		6 * nc
	],
	[
		"second",
		se,
		"utc",
		30 * tc
	]
], mc = [
	[
		"year",
		ve,
		"time"
	],
	[
		"month",
		we,
		"time"
	],
	[
		"day",
		ne,
		"time",
		6 * ac
	],
	[
		"hour",
		ce,
		"time",
		3 * rc
	],
	[
		"minute",
		de,
		"time",
		6 * nc
	],
	[
		"second",
		se,
		"time",
		30 * tc
	]
], hc = [
	pc[0],
	mc[0],
	pc[1],
	mc[1],
	pc[2],
	mc[2],
	...pc.slice(3)
];
function gc(e) {
	let t = `${e}`.toLowerCase();
	t.endsWith("s") && (t = t.slice(0, -1));
	let n = 1, r = /^(?:(\d+)\s+)/.exec(t);
	switch (r && (t = t.slice(r[0].length), n = +r[1]), t) {
		case "quarter":
			t = "month", n *= 3;
			break;
		case "half": t = "month", n *= 6;
	}
	let i = uc.get(t);
	if (!i) throw Error(`unknown interval: ${e}`);
	if (n > 1 && !i.every) throw Error(`non-periodic interval: ${t}`);
	return [t, n];
}
function _c(e) {
	return yc(gc(e), "time");
}
function vc(e) {
	return yc(gc(e), "utc");
}
function yc([e, t], n) {
	let r = (n === "time" ? lc : uc).get(e);
	return t > 1 && (r = r.every(t), r[dc] = cc.get(e) * t, r[fc] = n), r;
}
function bc(e, t) {
	if (!(t > 1)) return;
	let n = e[dc];
	if (!sc.some(([, e]) => e === n) || n % rc === 0 && rc < n && n < ac) return;
	let [r] = sc[x(([, e]) => Math.log(e)).center(sc, Math.log(n * t))];
	return (e[fc] === "time" ? _c : vc)(r);
}
function xc(e, t, n) {
	let r = t === "time" ? _e : Ae;
	if (n == null) return r(e === "year" ? "%Y" : e === "month" ? "%Y-%m" : e === "day" ? "%Y-%m-%d" : e === "hour" || e === "minute" ? "%Y-%m-%dT%H:%M" : e === "second" ? "%Y-%m-%dT%H:%M:%S" : "%Y-%m-%dT%H:%M:%S.%L");
	let i = Sc(n);
	switch (e) {
		case "millisecond": return Tc(r(".%L"), r(":%M:%S"), i);
		case "second": return Tc(r(":%S"), r("%-I:%M"), i);
		case "minute": return Tc(r("%-I:%M"), r("%p"), i);
		case "hour": return Tc(r("%-I %p"), r("%b %-d"), i);
		case "day": return Tc(r("%-d"), r("%b"), i);
		case "month": return Tc(r("%b"), r("%Y"), i);
		case "year": return r("%Y");
	}
	throw Error("unable to format time ticks");
}
function Sc(e) {
	return e === "left" || e === "right" ? (e, t) => `\n${e}\n${t}` : e === "top" ? (e, t) => `${t}\n${e}` : (e, t) => `${e}\n${t}`;
}
function Cc(e) {
	return e === "time" ? mc : e === "utc" ? pc : hc;
}
function wc(e, t, n) {
	let r = C(jt(t, (e, t) => Math.abs(t - e)));
	if (r < 1e3) return xc("millisecond", "utc", n);
	for (let [i, a, o, s] of Cc(e)) {
		if (r > s || i === "hour" && !r) break;
		if (t.every((e) => a.floor(e) >= e)) return xc(i, o, n);
	}
}
function Tc(e, t, n) {
	return (r, i, a) => {
		let o = e(r, i), s = t(r, i), c = i - $s(a);
		return i !== c && a[c] !== void 0 && s === t(a[c], c) ? o : n(o, s);
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/options.js
var Ec = Object.getPrototypeOf(Uint8Array), Dc = Object.prototype.toString;
function Oc(e) {
	return e instanceof Array || e instanceof Ec;
}
function kc(e) {
	return e instanceof Ec && !jc(e);
}
function Ac(e) {
	return e?.prototype instanceof Ec && !Mc(e);
}
function jc(e) {
	return e instanceof BigInt64Array || e instanceof BigUint64Array;
}
function Mc(e) {
	return e === BigInt64Array || e === BigUint64Array;
}
var Nc = Symbol("reindex");
function Pc(e, t, n) {
	let r = typeof t;
	return r === "string" ? eu(e) ? Rc(e.getChild(t), n) : Ic(e, Vc(t), n) : r === "function" ? Ic(e, t, n) : r === "number" || t instanceof Date || r === "boolean" ? q(e, Jc(t), n) : typeof t?.transform == "function" ? Lc(t.transform(e), n) : Fc(Lc(t, n), e?.[Nc]);
}
function Fc(e, t) {
	return e != null && t ? yl(e, t) : e;
}
function Ic(e, t, n) {
	return q(e, Ac(n) ? (e, n) => Zc(t(e, n)) : t, n);
}
function Lc(e, t) {
	return t === void 0 ? il(e) : tu(e) ? Rc(e, t) : e instanceof t ? e : t.from(e, Ac(t) && !kc(e) ? Zc : void 0);
}
function Rc(e, t) {
	return e == null ? e : (t === void 0 || t === Array) && nu(e.type) ? Qc(zc(e)) : Lc(zc(e), t);
}
function zc(e) {
	return e.nullCount ? e.toJSON() : e.toArray();
}
var Bc = [null], Vc = (e) => (t) => {
	let n = t[e];
	return n === void 0 && t.type === "Feature" ? t.properties?.[e] : n;
}, Hc = { transform: vl }, Uc = { transform: (e) => e }, Wc = () => 1, Gc = () => !0, W = (e) => e == null ? e : `${e}`, G = (e) => e == null ? e : +e, Kc = (e) => e ? e[0] : void 0, qc = (e) => e ? e[1] : void 0, Jc = (e) => () => e;
function Yc(e) {
	let t = `${e}`.slice(1) / 100;
	return (e, n) => wt(e, t, n);
}
function Xc(e) {
	return kc(e) ? e : q(e, Zc, Float64Array);
}
function Zc(e) {
	return e == null ? NaN : Number(e);
}
function Qc(e) {
	return q(e, $c);
}
function $c(e) {
	return e instanceof Date && !isNaN(e) ? e : typeof e == "string" ? Qs(e) : e == null || isNaN(e = Number(e)) ? void 0 : new Date(e);
}
function el(e, t) {
	return e === void 0 && (e = t), e === null ? [void 0, "none"] : Wl(e) ? [void 0, e] : [e, void 0];
}
function K(e, t) {
	return e === void 0 && (e = t), e === null || typeof e == "number" ? [void 0, e] : [e, void 0];
}
function tl(e, t, n) {
	if (e != null) return nl(e, t, n);
}
function nl(e, t, n) {
	let r = `${e}`.toLowerCase();
	if (!n.includes(r)) throw Error(`invalid ${t}: ${e}`);
	return r;
}
function rl(e) {
	return eu(e) ? e : il(e);
}
function il(e) {
	if (e == null || Oc(e)) return e;
	if (tu(e)) return Rc(e);
	if (al(e)) switch (e.type) {
		case "FeatureCollection": return e.features;
		case "GeometryCollection": return e.geometries;
		default: return [e];
	}
	return Array.from(e);
}
function al(e) {
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
function q(e, t, n = Array) {
	return e == null ? e : e instanceof n ? e.map(t) : n.from(e, t);
}
function ol(e, t = Array) {
	return e instanceof t ? e.slice() : t.from(e);
}
function sl({ x: e, x1: t, x2: n }) {
	return e !== void 0 || t !== void 0 || n !== void 0;
}
function cl({ y: e, y1: t, y2: n }) {
	return e !== void 0 || t !== void 0 || n !== void 0;
}
function ll(e) {
	return sl(e) || cl(e) || e.interval !== void 0;
}
function ul(e) {
	return e?.toString === Dc;
}
function dl(e) {
	return ul(e) && (e.type !== void 0 || e.domain !== void 0);
}
function fl(e) {
	return ul(e) && typeof e.transform != "function";
}
function pl(e) {
	return fl(e) && e.value === void 0 && e.channel === void 0;
}
function ml(e, t, n, r = Uc) {
	return t === void 0 && n === void 0 ? (t = 0, n = e === void 0 ? r : e) : t === void 0 ? t = e === void 0 ? 0 : e : n === void 0 && (n = e === void 0 ? 0 : e), [t, n];
}
function hl(e, t) {
	return e === void 0 && t === void 0 ? [Kc, qc] : [e, t];
}
function gl({ z: e, fill: t, stroke: n } = {}) {
	return e === void 0 && ([e] = el(t)), e === void 0 && ([e] = el(n)), e;
}
function _l(e) {
	return Oc(e) ? e.length : e?.numRows;
}
function vl(e) {
	let t = _l(e), n = new Uint32Array(t);
	for (let e = 0; e < t; ++e) n[e] = e;
	return n;
}
function yl(e, t) {
	return Oc(e) ? q(t, (t) => e[t], e.constructor) : q(t, (t) => e.at(t));
}
function bl(e, t, n) {
	return e.subarray ? e.subarray(t, n) : e.slice(t, n);
}
function xl(e) {
	return typeof e == "object" && e ? e.valueOf() : e;
}
function Sl(e) {
	let t;
	return [{
		transform: () => t,
		label: wl(e)
	}, (e) => t = e];
}
function Cl(e) {
	return e == null ? [e] : Sl(e);
}
function wl(e, t) {
	return typeof e == "string" ? e : e && e.label !== void 0 ? e.label : t;
}
function Tl(e, t) {
	return {
		transform(n) {
			let r = e.transform(n), i = t.transform(n);
			return Rl(r) || Rl(i) ? q(r, (e, t) => /* @__PURE__ */ new Date((+r[t] + +i[t]) / 2)) : q(r, (e, t) => (+r[t] + +i[t]) / 2, Float64Array);
		},
		label: e.label
	};
}
function El(e, t) {
	let n = Dl(t?.interval, t?.type);
	return n ? q(e, n) : e;
}
function Dl(e, t) {
	let n = Ol(e, t);
	return n && ((e) => Vs(e) ? n.floor(e) : e);
}
function Ol(e, t) {
	if (e != null) {
		if (typeof e == "number") return kl(e);
		if (typeof e == "string") return (t === "time" ? _c : vc)(e);
		if (typeof e.floor != "function") throw Error("invalid interval; missing floor method");
		if (typeof e.offset != "function") throw Error("invalid interval; missing offset method");
		return e;
	}
}
function kl(e) {
	e = +e, 0 < e && e < 1 && Number.isInteger(1 / e) && (e = -1 / e);
	let t = Math.abs(e);
	return e < 0 ? {
		floor: (e) => Math.floor(e * t) / t,
		offset: (e, n = 1) => (e * t + Math.floor(n)) / t,
		range: (e, n) => D(Math.ceil(e * t), n * t).map((e) => e / t)
	} : {
		floor: (e) => Math.floor(e / t) * t,
		offset: (e, n = 1) => e + t * Math.floor(n),
		range: (e, n) => D(Math.ceil(e / t), n / t).map((e) => e * t)
	};
}
function Al(e, t) {
	if (e = Ol(e, t), e && typeof e.range != "function") throw Error("invalid interval: missing range method");
	return e;
}
function jl(e, t) {
	if (e = Al(e, t), e && typeof e.ceil != "function") throw Error("invalid interval: missing ceil method");
	return e;
}
function Ml(e) {
	return typeof e?.range == "function";
}
function Nl(e) {
	return e === void 0 || fl(e) ? e : { value: e };
}
function Pl(e) {
	return e == null ? null : {
		transform: (t) => Pc(t, e, Float64Array),
		label: wl(e)
	};
}
function Fl(e) {
	return e && typeof e[Symbol.iterator] == "function";
}
function Il(e) {
	for (let t of e) if (t != null) return typeof t != "object" || t instanceof Date;
}
function Ll(e) {
	for (let t of e) {
		if (t == null) continue;
		let e = typeof t;
		return e === "string" || e === "boolean";
	}
}
function Rl(e) {
	for (let t of e) if (t != null) return t instanceof Date;
}
function zl(e) {
	for (let t of e) if (t != null) return typeof t == "string" && isNaN(t) && Qs(t);
}
function Bl(e) {
	for (let t of e) if (t != null) {
		if (typeof t != "string") return !1;
		if (t.trim()) return !isNaN(t);
	}
}
function Vl(e) {
	for (let t of e) if (t != null) return typeof t == "number";
}
function Hl(e, t) {
	let n;
	for (let r of e) if (r != null) {
		if (!t(r)) return !1;
		n = !0;
	}
	return n;
}
var Ul = new Set("none,currentcolor,transparent,aliceblue,antiquewhite,aqua,aquamarine,azure,beige,bisque,black,blanchedalmond,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick,floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey,honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon,lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink,lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyellow,lime,limegreen,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple,mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue,mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid,palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue,purple,rebeccapurple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna,silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,tomato,turquoise,violet,wheat,white,whitesmoke,yellow".split(","));
function Wl(e) {
	return typeof e == "string" && (e = e.toLowerCase().trim(), /^#[0-9a-f]{3,8}$/.test(e) || /^(?:url|var|rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color|color-mix)\(.*\)$/.test(e) || Ul.has(e));
}
function Gl(e) {
	return typeof e == "number" && (0 <= e && e <= 1 || isNaN(e));
}
function J(e) {
	return e == null || Kl(e);
}
function Kl(e) {
	return /^\s*none\s*$/i.test(e);
}
function ql(e) {
	return /^\s*round\s*$/i.test(e);
}
function Jl(e, t) {
	return tl(e, t, [
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
function Yl(e = "middle") {
	return Jl(e, "frameAnchor");
}
function Xl(e = {}, ...t) {
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
function Zl(e) {
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
function Ql(e) {
	return Fl(e) ? Zl(e) : e;
}
function $l(e) {
	return e === !0 ? e = "frame" : e === !1 ? e = null : !al(e) && e != null && (e = nl(e, "clip", ["frame", "sphere"]), e === "sphere" && (e = { type: "Sphere" })), e;
}
function eu(e) {
	return e && typeof e.getChild == "function" && typeof e.toArray == "function" && e.schema && Array.isArray(e.schema.fields);
}
function tu(e) {
	return e && typeof e.toArray == "function" && e.type;
}
function nu(e) {
	return e && (e.typeId === 8 || e.typeId === 10) && e.unit === 1;
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/index.js
var ru = Symbol("position"), iu = Symbol("color"), au = Symbol("radius"), ou = Symbol("length"), su = Symbol("opacity"), cu = Symbol("symbol"), lu = Symbol("projection"), Y = /* @__PURE__ */ new Map([
	["x", ru],
	["y", ru],
	["fx", ru],
	["fy", ru],
	["r", au],
	["color", iu],
	["opacity", su],
	["symbol", cu],
	["length", ou],
	["projection", lu]
]);
function uu(e) {
	return e === ru || e === lu;
}
function du(e) {
	return e === ru || e === au || e === ou || e === su;
}
var fu = 2 / Math.sqrt(3), pu = /* @__PURE__ */ new Map([
	["asterisk", Mn],
	["circle", Nn],
	["cross", Pn],
	["diamond", Ln],
	["diamond2", Rn],
	["hexagon", { draw(e, t) {
		let n = Math.sqrt(t / Math.PI), r = n * fu, i = r / 2;
		e.moveTo(0, r), e.lineTo(n, i), e.lineTo(n, -i), e.lineTo(0, -r), e.lineTo(-n, -i), e.lineTo(-n, i), e.closePath();
	} }],
	["plus", zn],
	["square", Bn],
	["square2", Vn],
	["star", Kn],
	["times", nr],
	["triangle", Jn],
	["triangle2", Xn],
	["wye", tr]
]);
function mu(e) {
	return e && typeof e.draw == "function";
}
function hu(e) {
	return mu(e) ? !0 : typeof e == "string" && pu.has(e.toLowerCase());
}
function gu(e) {
	if (e == null || mu(e)) return e;
	let t = pu.get(`${e}`.toLowerCase());
	if (t) return t;
	throw Error(`invalid symbol: ${e}`);
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/basic.js
function _u({ filter: e, sort: t, reverse: n, transform: r, initializer: i, ...a } = {}, o) {
	if (r === void 0 && (e != null && (r = xu(e)), t != null && !pl(t) && (r = yu(r, Cu(t))), n && (r = yu(r, Su))), o != null && i != null) throw Error("transforms cannot be applied after initializers");
	return {
		...a,
		...(t === null || pl(t)) && { sort: t },
		transform: yu(r, o)
	};
}
function vu({ filter: e, sort: t, reverse: n, initializer: r, ...i } = {}, a) {
	return r === void 0 && (e != null && (r = xu(e)), t != null && !pl(t) && (r = bu(r, Cu(t))), n && (r = bu(r, Su))), {
		...i,
		...(t === null || pl(t)) && { sort: t },
		initializer: bu(r, a)
	};
}
function yu(e, t) {
	return e == null ? t === null ? void 0 : t : t == null ? e === null ? void 0 : e : function(n, r, i) {
		return {data: n, facets: r} = e.call(this, n, r, i), t.call(this, rl(n), r, i);
	};
}
function bu(e, t) {
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
function xu(e) {
	return (t, n) => {
		let r = Pc(t, e);
		return {
			data: t,
			facets: n.map((e) => e.filter((e) => r[e]))
		};
	};
}
function Su(e, t) {
	return {
		data: e,
		facets: t.map((e) => e.slice().reverse())
	};
}
function Cu(e) {
	return (typeof e == "function" && e.length !== 1 ? wu : Tu)(e);
}
function wu(e) {
	return (t, n) => {
		let r = Oc(t) ? (n, r) => e(t[n], t[r]) : (n, r) => e(t.get(n), t.get(r));
		return {
			data: t,
			facets: n.map((e) => e.slice().sort(r))
		};
	};
}
function Tu(e) {
	let t, n;
	({channel: t, value: e, order: n} = { ...Nl(e) });
	let r = t?.startsWith("-");
	if (r && (t = t.slice(1)), n === void 0 && (n = r ? Us : Hs), typeof n != "function") switch (`${n}`.toLowerCase()) {
		case "ascending":
			n = Hs;
			break;
		case "descending":
			n = Us;
			break;
		default: throw Error(`invalid order: ${n}`);
	}
	return (r, i, a) => {
		let o;
		if (t === void 0) o = Pc(r, e);
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
function Eu(e, t, n = Du) {
	if (e == null) return n(e);
	if (typeof e.reduceIndex == "function") return e;
	if (typeof e.reduce == "function" && ul(e)) return Ou(e);
	if (typeof e == "function") return ku(e);
	if (/^p\d{2}$/i.test(e)) return Au(Yc(e));
	switch (`${e}`.toLowerCase()) {
		case "first": return Nu;
		case "last": return Pu;
		case "identity": return Mu;
		case "count": return Fu;
		case "distinct": return Iu;
		case "sum": return t == null ? Fu : Lu;
		case "proportion": return Ru(t, "data");
		case "proportion-facet": return Ru(t, "facet");
		case "deviation": return Au(dt);
		case "min": return Au(w);
		case "min-index": return Au(bt);
		case "max": return Au(C);
		case "max-index": return Au(yt);
		case "mean": return ju(Et);
		case "median": return ju(Dt);
		case "variance": return Au(ut);
		case "mode": return Au(At);
	}
	return n(e);
}
function Du(e) {
	throw Error(`invalid reduce: ${e}`);
}
function Ou(e) {
	return console.warn("deprecated reduce interface; implement reduceIndex instead."), {
		...e,
		reduceIndex: e.reduce.bind(e)
	};
}
function ku(e) {
	return { reduceIndex(t, n, r) {
		return e(yl(n, t), r);
	} };
}
function Au(e) {
	return { reduceIndex(t, n) {
		return e(t, (e) => n[e]);
	} };
}
function ju(e) {
	return { reduceIndex(t, n) {
		let r = e(t, (e) => n[e]);
		return Rl(n) ? new Date(r) : r;
	} };
}
var Mu = { reduceIndex(e, t) {
	return yl(t, e);
} }, Nu = { reduceIndex(e, t) {
	return t[e[0]];
} }, Pu = { reduceIndex(e, t) {
	return t[e[e.length - 1]];
} }, Fu = {
	label: "Frequency",
	reduceIndex(e) {
		return e.length;
	}
}, Iu = {
	label: "Distinct",
	reduceIndex(e, t) {
		let n = new s();
		for (let r of e) n.add(t[r]);
		return n.size;
	}
}, Lu = Au(T);
function Ru(e, t) {
	return e == null ? {
		scope: t,
		label: "Frequency",
		reduceIndex: (e, t, n = 1) => e.length / n
	} : {
		scope: t,
		reduceIndex: (e, t, n = 1) => T(e, (e) => t[e]) / n
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/channel.js
function zu(e, { scale: t, type: n, value: r, filter: i, hint: a, label: o = wl(r) }, s) {
	return a === void 0 && typeof r?.transform == "function" && (a = r.hint), Hu(s, {
		scale: t,
		type: n,
		value: Pc(e, r),
		label: o,
		filter: i,
		hint: a
	});
}
function Bu(e, t) {
	return Object.fromEntries(Object.entries(e).map(([e, n]) => [e, zu(t, n, e)]));
}
function Vu(e, t) {
	let n = Object.fromEntries(Object.entries(e).map(([e, { scale: n, value: r }]) => {
		let i = n == null ? null : t[n];
		return [e, i == null ? r : q(r, i)];
	}));
	return n.channels = e, n;
}
function Hu(e, t) {
	let { scale: n, value: r } = t;
	if (n === !0 || n === "auto") switch (e) {
		case "fill":
		case "stroke":
		case "color":
			t.scale = n !== !0 && Hl(r, Wl) ? null : "color", t.defaultScale = "color";
			break;
		case "fillOpacity":
		case "strokeOpacity":
		case "opacity":
			t.scale = n !== !0 && Hl(r, Gl) ? null : "opacity", t.defaultScale = "opacity";
			break;
		case "symbol":
			n !== !0 && Hl(r, hu) ? (t.scale = null, t.value = q(r, gu)) : t.scale = "symbol", t.defaultScale = "symbol";
			break;
		default: t.scale = Y.has(e) ? e : null;
	}
	else if (n === !1) t.scale = null;
	else if (n != null && !Y.has(n)) throw Error(`unknown scale: ${n}`);
	return t;
}
function Uu(e, t, r, i, a) {
	let { order: o, reverse: c, reduce: l = !0, limit: u } = a;
	for (let d in a) {
		if (!Y.has(d)) continue;
		let { value: f, order: p = o, reverse: m = c, reduce: h = l, limit: g = u } = Nl(a[d]), _ = f?.startsWith("-");
		if (_ && (f = f.slice(1)), p = p === void 0 ? _ === (f === "width" || f === "height") ? Yu : Xu : Ju(p), h == null || h === !1) continue;
		let v = d === "fx" || d === "fy" ? Gu(t, i[d]) : Wu(r, d);
		if (!v) throw Error(`missing channel for scale: ${d}`);
		let y = v.value, [b = 0, x = Infinity] = Fl(g) ? g : g < 0 ? [g] : [0, g];
		if (f == null) v.domain = () => {
			let e = Array.from(new s(y));
			return m && (e = e.reverse()), (b !== 0 || x !== Infinity) && (e = e.slice(b, x)), e;
		};
		else {
			let t = f === "data" ? e : f === "height" ? Ku(r, "y1", "y2") : f === "width" ? Ku(r, "x1", "x2") : qu(r, f, f === "y" ? "y2" : f === "x" ? "x2" : void 0), i = Eu(h === !0 ? "max" : h, t);
			v.domain = () => {
				let e = n(vl(y), (e) => i.reduceIndex(e, t), (e) => y[e]);
				return p && e.sort(p), m && e.reverse(), (b !== 0 || x !== Infinity) && (e = e.slice(b, x)), e.map(Kc);
			};
		}
	}
}
function Wu(e, t) {
	for (let n in e) {
		let r = e[n];
		if (r.scale === t) return r;
	}
}
function Gu(e, t) {
	let n = e.original;
	if (n === e) return t;
	let r = t.value, i = t.value = [];
	for (let t = 0; t < n.length; ++t) {
		let a = r[n[t][0]];
		for (let n of e[t]) i[n] = a;
	}
	return t;
}
function Ku(e, t, n) {
	let r = qu(e, t);
	return q(qu(e, n), (e, t) => Math.abs(e - r[t]), Float64Array);
}
function qu(e, t, n) {
	let r = e[t];
	if (!r && n !== void 0 && (r = e[n]), r) return r.value;
	throw Error(`missing channel: ${t}`);
}
function Ju(e) {
	if (e == null || typeof e == "function") return e;
	switch (`${e}`.toLowerCase()) {
		case "ascending": return Yu;
		case "descending": return Xu;
	}
	throw Error(`invalid order: ${e}`);
}
function Yu([e, t], [n, r]) {
	return Hs(t, r) || Hs(e, n);
}
function Xu([e, t], [n, r]) {
	return Us(t, r) || Hs(e, n);
}
function Zu(e, t) {
	let n = e[t];
	if (n) {
		for (; n.source;) n = n.source;
		return n.source === null ? null : n;
	}
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/schemes.js
var Qu = /* @__PURE__ */ new Map([
	["accent", ho],
	["category10", mo],
	["dark2", go],
	["observable10", _o],
	["paired", vo],
	["pastel1", yo],
	["pastel2", bo],
	["set1", xo],
	["set2", So],
	["set3", Co],
	["tableau10", wo]
]);
function $u(e) {
	return e != null && Qu.has(`${e}`.toLowerCase());
}
var ed = new Map([
	...Qu,
	["brbg", td(To, Eo)],
	["prgn", td(Do, Oo)],
	["piyg", td(ko, Ao)],
	["puor", td(jo, Mo)],
	["rdbu", td(No, Po)],
	["rdgy", td(Fo, Io)],
	["rdylbu", td(Lo, Ro)],
	["rdylgn", td(zo, Bo)],
	["spectral", td(Vo, Ho)],
	["burd", nd(No, Po)],
	["buylrd", nd(Lo, Ro)],
	["blues", X(ps, ms)],
	["greens", X(hs, gs)],
	["greys", X(_s, vs)],
	["oranges", X(Cs, ws)],
	["purples", X(ys, bs)],
	["reds", X(xs, Ss)],
	["turbo", rd(Fs)],
	["viridis", rd(Ls)],
	["magma", rd(Rs)],
	["inferno", rd(zs)],
	["plasma", rd(Bs)],
	["cividis", rd(Ts)],
	["cubehelix", rd(Es)],
	["warm", rd(Ds)],
	["cool", rd(Os)],
	["bugn", X(Uo, Wo)],
	["bupu", X(Go, Ko)],
	["gnbu", X(qo, Jo)],
	["orrd", X(Yo, Xo)],
	["pubu", X($o, es)],
	["pubugn", X(Zo, Qo)],
	["purd", X(ts, ns)],
	["rdpu", X(rs, is)],
	["ylgn", X(ss, cs)],
	["ylgnbu", X(as, os)],
	["ylorbr", X(ls, us)],
	["ylorrd", X(ds, fs)],
	["rainbow", id(As)],
	["sinebow", id(Ps)]
]);
function X(e, t) {
	return ({ length: n }) => n === 1 ? [e[3][1]] : n === 2 ? [e[3][1], e[3][2]] : (n = Math.max(3, Math.floor(n)), n > 9 ? xn(t, n) : e[n]);
}
function td(e, t) {
	return ({ length: n }) => n === 2 ? [e[3][0], e[3][2]] : (n = Math.max(3, Math.floor(n)), n > 11 ? xn(t, n) : e[n]);
}
function nd(e, t) {
	return ({ length: n }) => n === 2 ? [e[3][2], e[3][0]] : (n = Math.max(3, Math.floor(n)), n > 11 ? xn((e) => t(1 - e), n) : e[n].slice().reverse());
}
function rd(e) {
	return ({ length: t }) => xn(e, Math.max(2, Math.floor(t)));
}
function id(e) {
	return ({ length: t }) => xn(e, Math.floor(t) + 1).slice(0, -1);
}
function ad(e) {
	let t = `${e}`.toLowerCase();
	if (!ed.has(t)) throw Error(`unknown ordinal scheme: ${t}`);
	return ed.get(t);
}
function od(e, t) {
	let n = ad(e), r = typeof n == "function" ? n({ length: t }) : n;
	return r.length === t ? r : r.slice(0, t);
}
function sd(e, t = "greys") {
	let n = /* @__PURE__ */ new Set(), [r, i] = od(t, 2);
	for (let t of e) if (t != null) if (t === !0) n.add(i);
	else if (t === !1) n.add(r);
	else return;
	return [...n];
}
var cd = /* @__PURE__ */ new Map([
	["brbg", Eo],
	["prgn", Oo],
	["piyg", Ao],
	["puor", Mo],
	["rdbu", Po],
	["rdgy", Io],
	["rdylbu", Ro],
	["rdylgn", Bo],
	["spectral", Ho],
	["burd", (e) => Po(1 - e)],
	["buylrd", (e) => Ro(1 - e)],
	["blues", ms],
	["greens", gs],
	["greys", vs],
	["purples", bs],
	["reds", Ss],
	["oranges", ws],
	["turbo", Fs],
	["viridis", Ls],
	["magma", Rs],
	["inferno", zs],
	["plasma", Bs],
	["cividis", Ts],
	["cubehelix", Es],
	["warm", Ds],
	["cool", Os],
	["bugn", Wo],
	["bupu", Ko],
	["gnbu", Jo],
	["orrd", Xo],
	["pubugn", Qo],
	["pubu", es],
	["purd", ns],
	["rdpu", is],
	["ylgnbu", os],
	["ylgn", cs],
	["ylorbr", us],
	["ylorrd", fs],
	["rainbow", As],
	["sinebow", Ps]
]);
function ld(e) {
	let t = `${e}`.toLowerCase();
	if (!cd.has(t)) throw Error(`unknown quantitative scheme: ${t}`);
	return cd.get(t);
}
var ud = /* @__PURE__ */ new Set([
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
function dd(e) {
	return e != null && ud.has(`${e}`.toLowerCase());
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/quantitative.js
var fd = (e) => (t) => e(1 - t), pd = [0, 1], md = /* @__PURE__ */ new Map([
	["number", Ke],
	["rgb", Ue],
	["hsl", mn],
	["hcl", _n],
	["lab", hn]
]);
function hd(e) {
	let t = `${e}`.toLowerCase();
	if (!md.has(t)) throw Error(`unknown interpolator: ${t}`);
	return md.get(t);
}
function gd(e, t, n, { type: r, nice: i, clamp: a, zero: o, domain: s = Ad(e, n), unknown: c, round: l, scheme: u, interval: d, range: f = Y.get(e) === au ? Md(n, s) : Y.get(e) === ou ? Nd(n, s) : Y.get(e) === su ? pd : void 0, interpolate: p = Y.get(e) === iu ? u == null && f !== void 0 ? Ue : ld(u === void 0 ? r === "cyclical" ? "rainbow" : "turbo" : u) : l ? y : Ke, reverse: m }) {
	if (s = _d(s), d = Al(d, r), (r === "cyclical" || r === "sequential") && (r = "linear"), typeof p != "function" && (p = hd(p)), m = !!m, f !== void 0 && s.length !== (f = _d(f)).length) {
		if (p.length === 1) throw Error("invalid piecewise interpolator");
		p = bn(p, f), f = void 0;
	}
	if (p.length === 1 ? (m &&= (p = fd(p), !1), f === void 0 && (f = Float64Array.from(s, (e, t) => t / (s.length - 1)), f.length === 2 && (f = pd)), t.interpolate((f === pd ? Jc : Id)(p))) : t.interpolate(p), o) {
		let [e, t] = ft(s);
		(e > 0 || t < 0) && (s = ol(s), ($s(s) || 1) === Math.sign(e) ? s[0] = 0 : s[s.length - 1] = 0);
	}
	return m && (s = Nt(s)), t.domain(s).unknown(c), i && (t.nice(vd(i, r)), s = t.domain()), f !== void 0 && t.range(f), a && t.clamp(a), {
		type: r,
		domain: s,
		range: f,
		scale: t,
		interpolate: p,
		interval: d
	};
}
function _d(e) {
	return e = il(e), e.length >= 2 ? e : [e[0], e[0]];
}
function vd(e, t) {
	return e === !0 ? void 0 : typeof e == "number" ? e : jl(e, t);
}
function yd(e, t, n) {
	return gd(e, v(), t, n);
}
function bd(e, t, n) {
	return xd(e, t, {
		...n,
		exponent: .5
	});
}
function xd(e, t, { exponent: n = 1, ...r }) {
	return gd(e, i().exponent(n), t, {
		...r,
		type: "pow"
	});
}
function Sd(e, t, { base: n = 10, domain: r = Pd(t), ...i }) {
	return gd(e, Ee().base(n), t, {
		...i,
		domain: r
	});
}
function Cd(e, t, { constant: n = 1, ...r }) {
	return gd(e, xe().constant(n), t, r);
}
function wd(e, t, { range: n, quantiles: r = n === void 0 ? 5 : (n = [...n]).length, n: i = r, scheme: a = "rdylbu", domain: o = Fd(t), unknown: s, interpolate: c, reverse: l }) {
	return n === void 0 && (n = c === void 0 ? Y.get(e) === iu ? od(a, i) : void 0 : xn(c, i)), o.length > 0 && (o = Cn(o, n === void 0 ? { length: i } : n).quantiles()), Ed(e, t, {
		domain: o,
		range: n,
		reverse: l,
		unknown: s
	});
}
function Td(e, t, { range: n, n: r = n === void 0 ? 5 : (n = [...n]).length, scheme: i = "rdylbu", domain: a = Ad(e, t), unknown: o, interpolate: s, reverse: c }) {
	let [l, u] = ft(a), d;
	return n === void 0 ? (d = f(l, u, r), d[0] <= l && d.splice(0, 1), d[d.length - 1] >= u && d.pop(), r = d.length + 1, n = s === void 0 ? Y.get(e) === iu ? od(i, r) : void 0 : xn(s, r)) : (d = xn(Ke(l, u), r + 1).slice(1, -1), l instanceof Date && (d = d.map((e) => new Date(e)))), $s(il(a)) < 0 && d.reverse(), Ed(e, t, {
		domain: d,
		range: n,
		reverse: c,
		unknown: o
	});
}
function Ed(e, t, { domain: n = [0], unknown: r, scheme: i = "rdylbu", interpolate: a, range: o = a === void 0 ? Y.get(e) === iu ? od(i, n.length + 1) : void 0 : xn(a, n.length + 1), reverse: s }) {
	n = il(n);
	let c = $s(n);
	if (!isNaN(c) && !Dd(n, c)) throw Error(`the ${e} scale has a non-monotonic domain`);
	return s && (o = Nt(o)), {
		type: "threshold",
		scale: wn(c < 0 ? Nt(n) : n, o === void 0 ? [] : o).unknown(r),
		domain: n,
		range: o
	};
}
function Dd(e, t) {
	for (let n = 1, r = e.length, i = e[0]; n < r; ++n) {
		let r = o(i, i = e[n]);
		if (r !== 0 && r !== t) return !1;
	}
	return !0;
}
function Od(e) {
	return {
		type: "identity",
		scale: du(Y.get(e)) ? Sn() : (e) => e
	};
}
function kd(e, t = Gs) {
	return e.length ? [w(e, ({ value: e }) => e === void 0 ? e : w(e, t)), C(e, ({ value: e }) => e === void 0 ? e : C(e, t))] : [0, 1];
}
function Ad(e, t) {
	let n = Y.get(e);
	return (n === au || n === su || n === ou ? jd : kd)(t);
}
function jd(e) {
	return [0, e.length ? C(e, ({ value: e }) => e === void 0 ? e : C(e, Gs)) : 1];
}
function Md(e, t) {
	let n = e.find(({ radius: e }) => e !== void 0);
	if (n !== void 0) return [0, n.radius];
	let r = wt(e, .5, ({ value: e }) => e === void 0 ? NaN : wt(e, .25, Ks)), i = t.map((e) => 3 * Math.sqrt(e / r)), a = 30 / C(i);
	return a < 1 ? i.map((e) => e * a) : i;
}
function Nd(e, t) {
	let n = Dt(e, ({ value: e }) => e === void 0 ? NaN : Dt(e, Math.abs)), r = t.map((e) => 12 * e / n), i = 60 / C(r);
	return i < 1 ? r.map((e) => e * i) : r;
}
function Pd(e) {
	for (let { value: t } of e) if (t !== void 0) for (let n of t) {
		if (n > 0) return kd(e, Ks);
		if (n < 0) return kd(e, qs);
	}
	return [1, 10];
}
function Fd(e) {
	let t = [];
	for (let { value: n } of e) if (n !== void 0) for (let e of n) t.push(e);
	return t;
}
function Id(e) {
	return (t, n) => (r) => e(t + r * (n - t));
}
//#endregion
//#region node_modules/@observablehq/plot/src/warnings.js
var Ld = 0, Rd;
function zd() {
	let e = Ld;
	return Ld = 0, Rd = void 0, e;
}
function Bd(e) {
	e !== Rd && (Rd = e, console.warn(e), ++Ld);
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/diverging.js
function Vd(e, t, n, r, { type: i, nice: a, clamp: s, domain: c = kd(r), unknown: l, pivot: u = 0, scheme: d, range: f, symmetric: p = !0, interpolate: m = Y.get(e) === iu ? d == null && f !== void 0 ? Ue : ld(d === void 0 ? "rdbu" : d) : Ke, reverse: h }) {
	u = +u, c = il(c);
	let [g, _] = c;
	if (c.length > 2 && Bd(`Warning: the diverging ${e} scale domain contains extra elements.`), o(g, _) < 0 && ([g, _] = [_, g], h = !h), g = Math.min(g, u), _ = Math.max(_, u), typeof m != "function" && (m = hd(m)), f !== void 0 && (m = m.length === 1 ? Id(m)(...f) : bn(m, f)), h && (m = fd(m)), p) {
		let e = n.apply(u), t = e - n.apply(g), r = n.apply(_) - e;
		t < r ? g = n.invert(e - r) : t > r && (_ = n.invert(e + t));
	}
	return t.domain([
		g,
		u,
		_
	]).unknown(l).interpolator(m), s && t.clamp(s), a && t.nice(a), {
		type: i,
		domain: [g, _],
		pivot: u,
		interpolate: m,
		scale: t
	};
}
function Hd(e, t, n) {
	return Vd(e, Dn(), qd, t, n);
}
function Ud(e, t, n) {
	return Wd(e, t, {
		...n,
		exponent: .5
	});
}
function Wd(e, t, { exponent: n = 1, ...r }) {
	return Vd(e, An().exponent(n = +n), Xd(n), t, {
		...r,
		type: "diverging-pow"
	});
}
function Gd(e, t, { base: n = 10, pivot: r = 1, domain: i = kd(t, r < 0 ? qs : Ks), ...a }) {
	return Vd(e, On().base(n = +n), Jd, t, {
		domain: i,
		pivot: r,
		...a
	});
}
function Kd(e, t, { constant: n = 1, ...r }) {
	return Vd(e, kn().constant(n = +n), Zd(n), t, r);
}
var qd = {
	apply(e) {
		return e;
	},
	invert(e) {
		return e;
	}
}, Jd = {
	apply: Math.log,
	invert: Math.exp
}, Yd = {
	apply(e) {
		return Math.sign(e) * Math.sqrt(Math.abs(e));
	},
	invert(e) {
		return e * e * Math.sign(e);
	}
};
function Xd(e) {
	return e === .5 ? Yd : {
		apply(t) {
			return Math.sign(t) * Math.abs(t) ** +e;
		},
		invert(t) {
			return Math.sign(t) * Math.abs(t) ** (1 / e);
		}
	};
}
function Zd(e) {
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
function Qd(e, t, n, r) {
	return gd(e, t, n, r);
}
function $d(e, t, n) {
	return Qd(e, Oe(), t, n);
}
function ef(e, t, n) {
	return Qd(e, Te(), t, n);
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/ordinal.js
var tf = Symbol("ordinal");
function nf(e, t, n, { type: r, interval: i, domain: a, range: o, reverse: s, hint: c }) {
	return i = Al(i, r), a === void 0 && (a = cf(n, i, e)), (r === "categorical" || r === tf) && (r = "ordinal"), s && (a = Nt(a)), a = t.domain(a).domain(), o !== void 0 && (typeof o == "function" && (o = o(a)), t.range(o)), {
		type: r,
		domain: a,
		range: o,
		scale: t,
		hint: c,
		interval: i
	};
}
function rf(e, t, { type: n, interval: r, domain: i, range: a, scheme: o, unknown: s, ...c }) {
	r = Al(r, n), i === void 0 && (i = cf(t, r, e));
	let l;
	if (Y.get(e) === cu) l = uf(t), a = a === void 0 ? df(l) : q(a, gu);
	else if (Y.get(e) === iu && (a === void 0 && (n === "ordinal" || n === tf) && (a = sd(i, o), a !== void 0 && (o = void 0)), o === void 0 && a === void 0 && (o = n === "ordinal" ? "turbo" : "observable10"), o !== void 0)) if (a !== void 0) {
		let e = ld(o), t = a[0], n = a[1] - a[0];
		a = ({ length: r }) => xn((r) => e(t + n * r), r);
	} else a = ad(o);
	if (s === Ie) throw Error(`implicit unknown on ${e} scale is not supported`);
	return nf(e, Fe().unknown(s), t, {
		...c,
		type: n,
		domain: i,
		range: a,
		hint: l
	});
}
function af(e, t, { align: n = .5, padding: r = .5, ...i }) {
	return sf(E().align(n).padding(r), t, i, e);
}
function of(e, t, { align: n = .5, padding: r = .1, paddingInner: i = r, paddingOuter: a = e === "fx" || e === "fy" ? 0 : r, ...o }) {
	return sf(O().align(n).paddingInner(i).paddingOuter(a), t, o, e);
}
function sf(e, t, n, r) {
	let { round: i } = n;
	return i !== void 0 && e.round(i = !!i), e = nf(r, e, t, n), e.round = i, e;
}
function cf(e, t, n) {
	let r = new s();
	for (let { value: t, domain: n } of e) {
		if (n !== void 0) return n();
		if (t !== void 0) for (let e of t) r.add(e);
	}
	if (t !== void 0) {
		let [e, n] = ft(r).map(t.floor, t);
		return t.range(e, t.offset(n));
	}
	if (r.size > 1e4 && Y.get(n) === ru) throw Error(`implicit ordinal domain of ${n} scale has more than 10,000 values`);
	return ht(r, Hs);
}
function lf(e, t) {
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
function uf(e) {
	return {
		fill: lf(e, "fill"),
		stroke: lf(e, "stroke")
	};
}
function df(e) {
	return J(e.fill) ? ir : rr;
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales.js
function ff(e, { label: t, inset: n = 0, insetTop: r = n, insetRight: i = n, insetBottom: a = n, insetLeft: o = n, round: s, nice: c, clamp: l, zero: u, align: d, padding: f, projection: p, facet: { label: m = t } = {}, ...h } = {}) {
	let g = {};
	for (let [n, _] of e) {
		let e = h[n], v = wf(n, _, {
			round: Y.get(n) === ru ? s : void 0,
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
			v.percent = !!c, v.label = s === void 0 ? hf(_, v) : s, v.transform = l, n === "x" || n === "fx" ? (v.insetLeft = +h, v.insetRight = +f) : (n === "y" || n === "fy") && (v.insetTop = +d, v.insetBottom = +p), g[n] = v;
		}
	}
	return g;
}
function pf(e) {
	let t = {}, n = { scales: t };
	for (let [r, i] of Object.entries(e)) {
		let { scale: e, type: a, interval: o, label: s } = i;
		t[r] = Lf(i), n[r] = e, e.type = a, o != null && (e.interval = o), s != null && (e.label = s);
	}
	return n;
}
function mf(e, t) {
	let { x: n, y: r, fx: i, fy: a } = e, o = i || a ? _f(t) : t;
	i && yf(i, o), a && bf(a, o);
	let s = i || a ? vf(e, t) : t;
	n && yf(n, s), r && bf(r, s);
}
function hf(e = [], t) {
	let n;
	for (let { label: t } of e) if (t !== void 0) {
		if (n === void 0) n = t;
		else if (n !== t) return;
	}
	if (n !== void 0) return !Af(t) && t.percent && (n = `${n} (%)`), {
		inferred: !0,
		toString: () => n
	};
}
function gf(e) {
	return Math.sign($s(e.domain())) * Math.sign($s(e.range()));
}
function _f(e) {
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
function vf({ fx: e, fy: t }, n) {
	let { marginTop: r, marginRight: i, marginBottom: a, marginLeft: o, width: s, height: c } = _f(n);
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
function yf(e, t) {
	if (e.range === void 0) {
		let { insetLeft: n, insetRight: r } = e, { width: i, marginLeft: a = 0, marginRight: o = 0 } = t, s = a + n, c = i - o - r;
		e.range = [s, Math.max(s, c)], Af(e) || (e.range = Cf(e)), e.scale.range(e.range);
	}
	xf(e);
}
function bf(e, t) {
	if (e.range === void 0) {
		let { insetTop: n, insetBottom: r } = e, { height: i, marginTop: a = 0, marginBottom: o = 0 } = t, s = a + n, c = i - o - r;
		e.range = [Math.max(s, c), s], Af(e) ? e.range.reverse() : e.range = Cf(e), e.scale.range(e.range);
	}
	xf(e);
}
function xf(e) {
	e.round === void 0 && Mf(e) && Sf(e) <= 30 && e.scale.round(!0);
}
function Sf({ scale: e }) {
	let t = e.domain().length, [n, r] = e.range(), i = e.paddingInner ? e.paddingInner() : 1, a = e.paddingOuter ? e.paddingOuter() : e.padding(), o = t - i, s = Math.abs(r - n) / Math.max(1, o + a * 2);
	return (s - Math.floor(s)) * o;
}
function Cf(e) {
	let t = e.scale.domain().length + jf(e);
	if (!(t > 2)) return e.range;
	let [n, r] = e.range;
	return Array.from({ length: t }, (e, i) => n + i / (t - 1) * (r - n));
}
function wf(e, t = [], n = {}) {
	let r = Of(e, t, n);
	if (n.type === void 0 && n.domain === void 0 && n.range === void 0 && n.interval == null && e !== "fx" && e !== "fy" && Af({ type: r })) {
		let n = t.map(({ value: e }) => e).filter((e) => e !== void 0);
		n.some(Rl) ? Bd(`Warning: some data associated with the ${e} scale are dates. Dates are typically associated with a "utc" or "time" scale rather than a "${Tf(r)}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can specify the interval of the ${e} scale (e.g., d3.utcDay), or you can suppress this warning by setting the type of the ${e} scale to "${Tf(r)}".`) : n.some(zl) ? Bd(`Warning: some data associated with the ${e} scale are strings that appear to be dates (e.g., YYYY-MM-DD). If these strings represent dates, you should parse them to Date objects. Dates are typically associated with a "utc" or "time" scale rather than a "${Tf(r)}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can suppress this warning by setting the type of the ${e} scale to "${Tf(r)}".`) : n.some(Bl) && Bd(`Warning: some data associated with the ${e} scale are strings that appear to be numbers. If these strings represent numbers, you should parse or coerce them to numbers. Numbers are typically associated with a "linear" scale rather than a "${Tf(r)}" scale. If you want to treat this data as ordinal, you can specify the interval of the ${e} scale (e.g., 1 for integers), or you can suppress this warning by setting the type of the ${e} scale to "${Tf(r)}".`);
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
			n = Pf(t, n, Xc);
			break;
		case "identity":
			switch (Y.get(e)) {
				case ru:
					n = Pf(t, n, Xc);
					break;
				case cu: n = Pf(t, n, Ff);
			}
			break;
		case "utc":
		case "time": n = Pf(t, n, Qc);
	}
	switch (r) {
		case "diverging": return Hd(e, t, n);
		case "diverging-sqrt": return Ud(e, t, n);
		case "diverging-pow": return Wd(e, t, n);
		case "diverging-log": return Gd(e, t, n);
		case "diverging-symlog": return Kd(e, t, n);
		case "categorical":
		case "ordinal":
		case tf: return rf(e, t, n);
		case "cyclical":
		case "sequential":
		case "linear": return yd(e, t, n);
		case "sqrt": return bd(e, t, n);
		case "threshold": return Ed(e, t, n);
		case "quantile": return wd(e, t, n);
		case "quantize": return Td(e, t, n);
		case "pow": return xd(e, t, n);
		case "log": return Sd(e, t, n);
		case "symlog": return Cd(e, t, n);
		case "utc": return ef(e, t, n);
		case "time": return $d(e, t, n);
		case "point": return af(e, t, n);
		case "band": return of(e, t, n);
		case "identity": return Od(e);
		case void 0: return;
		default: throw Error(`unknown scale type: ${r}`);
	}
}
function Tf(e) {
	return typeof e == "symbol" ? e.description : e;
}
function Ef(e) {
	return typeof e == "string" ? `${e}`.toLowerCase() : e;
}
var Df = { toString: () => "projection" };
function Of(e, t, { type: n, domain: r, range: i, scheme: a, pivot: o, projection: s }) {
	if (n = Ef(n), e === "fx" || e === "fy") return "band";
	(e === "x" || e === "y") && s != null && (n = Df);
	for (let e of t) {
		let t = Ef(e.type);
		if (t !== void 0) {
			if (n === void 0) n = t;
			else if (n !== t) throw Error(`scale incompatible with channel: ${n} !== ${t}`);
		}
	}
	if (n === Df) return;
	if (n !== void 0) return n;
	if (r === void 0 && !t.some(({ value: e }) => e !== void 0)) return;
	let c = Y.get(e);
	if (c === au) return "sqrt";
	if (c === su || c === ou) return "linear";
	if (c === cu) return "ordinal";
	let l = (r ?? i)?.length;
	if (l < 2 || l > 2) return kf(c);
	if (r !== void 0) {
		if (Ll(r)) return kf(c);
		if (Rl(r)) return "utc";
	} else {
		let e = t.map(({ value: e }) => e).filter((e) => e !== void 0);
		if (e.some(Ll)) return kf(c);
		if (e.some(Rl)) return "utc";
	}
	if (c === iu) {
		if (o != null || dd(a)) return "diverging";
		if ($u(a)) return "categorical";
	}
	return "linear";
}
function kf(e) {
	switch (e) {
		case ru: return "point";
		case iu: return tf;
		default: return "ordinal";
	}
}
function Af({ type: e }) {
	return e === "ordinal" || e === "point" || e === "band" || e === tf;
}
function jf({ type: e }) {
	return e === "threshold";
}
function Mf({ type: e }) {
	return e === "point" || e === "band";
}
function Nf(e) {
	if (e === void 0) return !0;
	let t = e.domain(), n = e(t[0]);
	for (let r = 1, i = t.length; r < i; ++r) if (e(t[r]) - n) return !1;
	return !0;
}
function Pf(e, { domain: t, ...n }, r) {
	for (let n of e) n.value !== void 0 && (t === void 0 && (t = n.value?.domain), n.value = r(n.value));
	return {
		domain: t === void 0 ? t : r(t),
		...n
	};
}
function Ff(e) {
	return q(e, gu);
}
function If(e) {
	return (t) => {
		if (!Y.has(t = `${t}`)) throw Error(`unknown scale: ${t}`);
		return e[t];
	};
}
function Lf({ scale: e, type: t, domain: n, range: r, interpolate: i, interval: a, transform: o, percent: s, pivot: c }) {
	if (t === "identity") return {
		type: "identity",
		apply: (e) => e,
		invert: (e) => e
	};
	let l = e.unknown ? e.unknown() : void 0;
	return {
		type: t,
		domain: ol(n),
		...r !== void 0 && { range: ol(r) },
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
function Rf(e, t) {
	let { fx: n, fy: r } = ff(e, t), i = n?.scale.domain(), a = r?.scale.domain();
	return i && a ? ct(i, a).map(([e, t], n) => ({
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
function zf(e, { x: t, y: n }) {
	return t &&= Kf(t), n &&= Kf(n), e.filter(t && n ? (e) => t.has(e.x) && n.has(e.y) : t ? (e) => t.has(e.x) : (e) => n.has(e.y)).sort(t && n ? (e, r) => t.get(e.x) - t.get(r.x) || n.get(e.y) - n.get(r.y) : t ? (e, n) => t.get(e.x) - t.get(n.x) : (e, t) => n.get(e.y) - n.get(t.y));
}
function Bf(t, { fx: n, fy: r }) {
	let i = vl(t), a = n?.value, o = r?.value;
	return n && r ? e(i, (e) => (e.fx = a[e[0]], e.fy = o[e[0]], e), (e) => a[e], (e) => o[e]) : n ? e(i, (e) => (e.fx = a[e[0]], e), (e) => a[e]) : e(i, (e) => (e.fy = o[e[0]], e), (e) => o[e]);
}
function Vf(e, t, { marginTop: n, marginLeft: r }) {
	let i = e ? ({ x: t }) => e(t) - r : () => 0, a = t ? ({ y: e }) => t(e) - n : () => 0;
	return function(e) {
		this.tagName === "svg" ? (this.setAttribute("x", i(e)), this.setAttribute("y", a(e))) : this.setAttribute("transform", `translate(${i(e)},${a(e)})`);
	};
}
function Hf(e) {
	let t = [], n = new Uint32Array(T(e, (e) => e.length));
	for (let r of e) {
		let i = 0;
		for (let t of e) r !== t && (n.set(t, i), i += t.length);
		t.push(n.slice(0, i));
	}
	return t;
}
var Uf = /* @__PURE__ */ new Map([
	["top", Xf],
	["right", $f],
	["bottom", Zf],
	["left", Qf],
	["top-left", ap(Xf, Qf)],
	["top-right", ap(Xf, $f)],
	["bottom-left", ap(Zf, Qf)],
	["bottom-right", ap(Zf, $f)],
	["top-empty", ep],
	["right-empty", rp],
	["bottom-empty", tp],
	["left-empty", np],
	["empty", ip]
]);
function Wf(e) {
	if (e == null) return null;
	let t = Uf.get(`${e}`.toLowerCase());
	if (t) return t;
	throw Error(`invalid facet anchor: ${e}`);
}
var Gf = /* @__PURE__ */ new WeakMap();
function Kf(e) {
	let t = Gf.get(e);
	return t || Gf.set(e, t = new d(q(e, (e, t) => [e, t]))), t;
}
function qf(e, t) {
	return Kf(e).get(t);
}
function Jf(e, t, n) {
	return t = xl(t), n = xl(n), e.find((e) => Object.is(xl(e.x), t) && Object.is(xl(e.y), n));
}
function Yf(e, t, n) {
	return Jf(e, t, n)?.empty;
}
function Xf(e, { y: t }, { y: n }) {
	return !t || qf(t, n) === 0;
}
function Zf(e, { y: t }, { y: n }) {
	return !t || qf(t, n) === t.length - 1;
}
function Qf(e, { x: t }, { x: n }) {
	return !t || qf(t, n) === 0;
}
function $f(e, { x: t }, { x: n }) {
	return !t || qf(t, n) === t.length - 1;
}
function ep(e, { y: t }, { x: n, y: r, empty: i }) {
	if (i) return !1;
	if (!t) return;
	let a = qf(t, r);
	if (a > 0) return Yf(e, n, t[a - 1]);
}
function tp(e, { y: t }, { x: n, y: r, empty: i }) {
	if (i) return !1;
	if (!t) return;
	let a = qf(t, r);
	if (a < t.length - 1) return Yf(e, n, t[a + 1]);
}
function np(e, { x: t }, { x: n, y: r, empty: i }) {
	if (i) return !1;
	if (!t) return;
	let a = qf(t, n);
	if (a > 0) return Yf(e, t[a - 1], r);
}
function rp(e, { x: t }, { x: n, y: r, empty: i }) {
	if (i) return !1;
	if (!t) return;
	let a = qf(t, n);
	if (a < t.length - 1) return Yf(e, t[a + 1], r);
}
function ip(e, t, { empty: n }) {
	return n;
}
function ap(e, t) {
	return function() {
		return e.apply(null, arguments) && t.apply(null, arguments);
	};
}
function op(e, { channels: { fx: t, fy: n }, groups: r }) {
	return t && n ? e.map(({ x: e, y: t }) => r.get(e)?.get(t) ?? []) : t ? e.map(({ x: e }) => r.get(e) ?? []) : e.map(({ y: e }) => r.get(e) ?? []);
}
//#endregion
//#region node_modules/@observablehq/plot/src/projection.js
var sp = Math.PI, cp = 2 * sp, lp = .618;
function up({ projection: e, inset: t = 0, insetTop: n = t, insetRight: r = t, insetBottom: i = t, insetLeft: a = t } = {}, o) {
	if (e == null) return;
	if (typeof e.stream == "function") return e;
	let s, c, l = "frame";
	if (ul(e)) {
		let t;
		if ({type: e, domain: c, inset: t, insetTop: n = t === void 0 ? n : t, insetRight: r = t === void 0 ? r : t, insetBottom: i = t === void 0 ? i : t, insetLeft: a = t === void 0 ? a : t, clip: l = l, ...s} = e, e == null) return;
	}
	typeof e != "function" && ({type: e} = dp(e));
	let { width: u, height: d, marginLeft: f, marginRight: p, marginTop: m, marginBottom: h } = o, g = u - f - p - a - r, _ = d - m - h - n - i;
	if (e = e?.({
		width: g,
		height: _,
		clip: l,
		...s
	}), e == null) return;
	l = fp(l, f, m, u - p, d - h);
	let v = f + a, y = m + n, b;
	if (c != null) {
		let [[t, n], [r, i]] = ca(e).bounds(c), a = Math.min(g / (r - t), _ / (i - n));
		a > 0 ? (v -= (a * (t + r) - g) / 2, y -= (a * (n + i) - _) / 2, b = la({ point(e, t) {
			this.stream.point(e * a + v, t * a + y);
		} })) : Bd("Warning: the projection could not be fit to the specified domain; using the default scale.");
	}
	return b ??= v === 0 && y === 0 ? hp() : la({ point(e, t) {
		this.stream.point(e + v, t + y);
	} }), { stream: (t) => e.stream(b.stream(l(t))) };
}
function dp(e) {
	switch (`${e}`.toLowerCase()) {
		case "albers-usa": return pp(Pa, .7463, .4673);
		case "albers": return mp(Ma, .7463, .4673);
		case "azimuthal-equal-area": return pp(Ra, 4, 4);
		case "azimuthal-equidistant": return pp(Ba, cp, cp);
		case "conic-conformal": return mp(Ka, cp, cp);
		case "conic-equal-area": return mp(ja, 6.1702, 2.9781);
		case "conic-equidistant": return mp(Xa, 7.312, 3.6282);
		case "equal-earth": return pp(io, 5.4133, 2.6347);
		case "equirectangular": return pp(Ja, cp, sp);
		case "gnomonic": return pp(oo, 3.4641, 3.4641);
		case "identity": return { type: hp };
		case "reflect-y": return { type: gp };
		case "mercator": return pp(Ha, cp, cp);
		case "orthographic": return pp(co, 2, 2);
		case "stereographic": return pp(uo, 2, 2);
		case "transverse-mercator": return pp(po, cp, cp);
		default: throw Error(`unknown projection type: ${e}`);
	}
}
function fp(e, t, n, r, i) {
	if (e === !1 || e == null || typeof e == "number") return (e) => e;
	switch (e === !0 && (e = "frame"), `${e}`.toLowerCase()) {
		case "frame": return ri(t, n, r, i);
		default: throw Error(`unknown projection clip type: ${e}`);
	}
}
function pp(e, t, n) {
	return {
		type: ({ width: r, height: i, rotate: a, precision: o = .15, clip: s }) => {
			let c = e();
			return o != null && c.precision?.(o), a != null && c.rotate?.(a), typeof s == "number" && c.clipAngle?.(s), r != null && (c.scale(Math.min(r / t, i / n)), c.translate([r / 2, i / 2])), c;
		},
		aspectRatio: n / t
	};
}
function mp(e, t, n) {
	let { type: r, aspectRatio: i } = pp(e, t, n);
	return {
		type: (e) => {
			let { parallels: t, domain: n, width: i, height: a } = e, o = r(e);
			return t != null && (o.parallels(t), n === void 0 && i != null && o.fitSize([i, a], { type: "Sphere" })), o;
		},
		aspectRatio: i
	};
}
var hp = Jc({ stream: (e) => e }), gp = Jc(la({ point(e, t) {
	this.stream.point(e, -t);
} }));
function _p(e, t, n, r) {
	let i = n[e], a = n[t], o = i.length, s = n[e] = new Float64Array(o).fill(NaN), c = n[t] = new Float64Array(o).fill(NaN), l, u = r.stream({ point(e, t) {
		s[l] = e, c[l] = t;
	} });
	for (l = 0; l < o; ++l) u.point(i[l], a[l]);
}
function vp({ projection: e } = {}) {
	return e == null ? !1 : typeof e.stream == "function" || (ul(e) && (e = e.type), e != null);
}
function yp(e) {
	if (typeof e?.stream == "function") return lp;
	if (ul(e)) {
		let t, n;
		if ({domain: t, type: e, ...n} = e, t != null && e != null) {
			let [[r, i], [a, o]] = ca((typeof e == "string" ? dp(e).type : e)({
				...n,
				width: 100,
				height: 100
			})).bounds(t), s = (o - i) / (a - r);
			return s && isFinite(s) ? s < .2 ? .2 : s > 5 ? 5 : s : lp;
		}
	}
	if (e != null) {
		if (typeof e != "function") {
			let { aspectRatio: t } = dp(e);
			if (t) return t;
		}
		return lp;
	}
}
function bp(e) {
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
	for (let t of e.value) Sr(t, a);
	return [r, i];
}
function xp({ x: e, y: t }) {
	if (e || t) return e ??= (e) => e, t ??= (e) => e, la({ point(n, r) {
		this.stream.point(e(n), t(r));
	} });
}
//#endregion
//#region node_modules/@observablehq/plot/src/context.js
function Sp(e = {}) {
	let { document: t = typeof window < "u" ? window.document : void 0, clip: n } = e;
	return {
		document: t,
		clip: $l(n)
	};
}
function Z(e, { document: t }) {
	return A(ee(e).call(t.documentElement));
}
//#endregion
//#region node_modules/@observablehq/plot/src/memoize.js
var Cp = Symbol("unset");
function wp(e) {
	return (e.length === 1 ? Tp : Ep)(e);
}
function Tp(e) {
	let t, n = Cp;
	return (r) => (Object.is(n, r) || (n = r, t = e(r)), t);
}
function Ep(e) {
	let t, n;
	return (...r) => ((n?.length !== r.length || n.some((e, t) => !Object.is(e, r[t]))) && (n = r, t = e(...r)), t);
}
//#endregion
//#region node_modules/@observablehq/plot/src/format.js
var Dp = wp((e) => new Intl.NumberFormat(e));
wp((e, t) => new Intl.DateTimeFormat(e, {
	timeZone: "UTC",
	...t && { month: t }
})), wp((e, t) => new Intl.DateTimeFormat(e, {
	timeZone: "UTC",
	...t && { weekday: t }
}));
function Op(e = "en-US") {
	let t = Dp(e);
	return (e) => e != null && !isNaN(e) ? t.format(e) : void 0;
}
function kp(e) {
	return Js(e, "Invalid Date");
}
function Ap(e = "en-US") {
	let t = Op(e);
	return (e) => (e instanceof Date ? kp : typeof e == "number" ? t : W)(e);
}
var jp = Ap(), Mp = (typeof window < "u" ? window.devicePixelRatio > 1 : typeof it > "u") ? 0 : .5, Np = 0;
function Pp() {
	return `plot-clip-${++Np}`;
}
function Fp(e, { title: t, href: n, ariaLabel: r, ariaDescription: i, ariaHidden: a, target: o, fill: s, fillOpacity: c, stroke: l, strokeWidth: u, strokeOpacity: d, strokeLinejoin: f, strokeLinecap: p, strokeMiterlimit: m, strokeDasharray: h, strokeDashoffset: g, opacity: _, mixBlendMode: v, imageFilter: y, paintOrder: b, pointerEvents: x, shapeRendering: S, channels: C }, { ariaLabel: w, fill: T = "currentColor", fillOpacity: E, stroke: D = "none", strokeOpacity: O, strokeWidth: k, strokeLinecap: A, strokeLinejoin: ee, strokeMiterlimit: te, paintOrder: ne }) {
	T === null && (s = null, c = null), D === null && (l = null, d = null), J(T) ? !J(D) && (!J(s) || C?.fill) && (D = "none") : J(D) && (!J(l) || C?.stroke) && (T = "none");
	let [re, ie] = el(s, T), [ae, oe] = K(c, E), [se, ce] = el(l, D), [le, ue] = K(d, O), [de, fe] = K(_);
	Kl(ce) || (u === void 0 && (u = k), p === void 0 && (p = A), f === void 0 && (f = ee), m === void 0 && !ql(f) && (m = te), !Kl(ie) && b === void 0 && (b = ne));
	let [pe, me] = K(u);
	return T !== null && (e.fill = $(ie, "currentColor"), e.fillOpacity = Xp(oe, 1)), D !== null && (e.stroke = $(ce, "none"), e.strokeWidth = Xp(me, 1), e.strokeOpacity = Xp(ue, 1), e.strokeLinejoin = $(f, "miter"), e.strokeLinecap = $(p, "butt"), e.strokeMiterlimit = Xp(m, 4), e.strokeDasharray = $(h, "none"), e.strokeDashoffset = $(g, "0")), e.target = W(o), e.ariaLabel = W(w), e.ariaDescription = W(i), e.ariaHidden = W(a), e.opacity = Xp(fe, 1), e.mixBlendMode = $(v, "normal"), e.imageFilter = $(y, "none"), e.paintOrder = $(b, "normal"), e.pointerEvents = $(x, "auto"), e.shapeRendering = $(S, "auto"), {
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
			value: re,
			scale: "auto",
			optional: !0
		},
		fillOpacity: {
			value: ae,
			scale: "auto",
			optional: !0
		},
		stroke: {
			value: se,
			scale: "auto",
			optional: !0
		},
		strokeOpacity: {
			value: le,
			scale: "auto",
			optional: !0
		},
		strokeWidth: {
			value: pe,
			optional: !0
		},
		opacity: {
			value: de,
			scale: "auto",
			optional: !0
		}
	};
}
function Ip(e, t) {
	t && e.filter((e) => Ws(t[e])).append("title").call(Lp, t);
}
function Lp(e, t) {
	t && e.text((e) => jp(t[e]));
}
function Rp(e, { target: t, tip: n }, { ariaLabel: r, title: i, fill: a, fillOpacity: o, stroke: s, strokeOpacity: c, strokeWidth: l, opacity: u, href: d }) {
	r && Q(e, "aria-label", (e) => r[e]), a && Q(e, "fill", (e) => a[e]), o && Q(e, "fill-opacity", (e) => o[e]), s && Q(e, "stroke", (e) => s[e]), c && Q(e, "stroke-opacity", (e) => c[e]), l && Q(e, "stroke-width", (e) => l[e]), u && Q(e, "opacity", (e) => u[e]), d && qp(e, (e) => d[e], t), n || Ip(e, i);
}
function zp(e, t, n, r) {
	let i, { clip: a = r.clip } = t;
	a === "frame" ? (e = Z("svg:g", r).each(function() {
		this.appendChild(e.node()), e.node = () => this;
	}), i = Vp(r, n)) : a && (i = Wp(a, r)), Q(e, "aria-label", t.ariaLabel), Q(e, "aria-description", t.ariaDescription), Q(e, "aria-hidden", t.ariaHidden), Q(e, "clip-path", i);
}
function Bp(e) {
	let t = /* @__PURE__ */ new WeakMap();
	return (n, r) => {
		let i = t.get(n);
		if (!i) {
			let a = Pp();
			A(n.ownerSVGElement).append("clipPath").attr("id", a).call(e, n, r), t.set(n, i = `url(#${a})`);
		}
		return i;
	};
}
var Vp = Bp((e, t, n) => {
	let { width: r, height: i, marginLeft: a, marginRight: o, marginTop: s, marginBottom: c } = n;
	e.append("rect").attr("x", a).attr("y", s).attr("width", r - o - a).attr("height", i - s - c);
}), Hp = /* @__PURE__ */ new WeakMap(), Up = { type: "Sphere" };
function Wp(e, t) {
	let n, r;
	if ((n = Hp.get(t)) || Hp.set(t, n = /* @__PURE__ */ new WeakMap()), e.type === "Sphere" && (e = Up), !(r = n.get(e))) {
		let i = Pp();
		A(t.ownerSVGElement).append("clipPath").attr("id", i).append("path").attr("d", t.path()(e)), n.set(e, r = `url(#${i})`);
	}
	return r;
}
function Gp(e, t, n, r) {
	zp(e, t, n, r), Q(e, "class", t.className), Q(e, "fill", t.fill), Q(e, "fill-opacity", t.fillOpacity), Q(e, "stroke", t.stroke), Q(e, "stroke-width", t.strokeWidth), Q(e, "stroke-opacity", t.strokeOpacity), Q(e, "stroke-linejoin", t.strokeLinejoin), Q(e, "stroke-linecap", t.strokeLinecap), Q(e, "stroke-miterlimit", t.strokeMiterlimit), Q(e, "stroke-dasharray", t.strokeDasharray), Q(e, "stroke-dashoffset", t.strokeDashoffset), Q(e, "shape-rendering", t.shapeRendering), Q(e, "filter", t.imageFilter), Q(e, "paint-order", t.paintOrder);
	let { pointerEvents: i = r.pointerSticky === !1 ? "none" : void 0 } = t;
	Q(e, "pointer-events", i);
}
function Kp(e, t) {
	Jp(e, "mix-blend-mode", t.mixBlendMode), Q(e, "opacity", t.opacity);
}
function qp(e, t, n) {
	e.each(function(e) {
		let r = t(e);
		if (r != null) {
			let e = this.ownerDocument.createElementNS(k.svg, "a");
			e.setAttribute("fill", "inherit"), e.setAttributeNS(k.xlink, "href", r), n != null && e.setAttribute("target", n), this.parentNode.insertBefore(e, this).appendChild(this);
		}
	});
}
function Q(e, t, n) {
	n != null && e.attr(t, n);
}
function Jp(e, t, n) {
	n != null && e.style(t, n);
}
function Yp(e, t, { x: n, y: r }, i = Mp, a = Mp) {
	i += t.dx, a += t.dy, n?.bandwidth && (i += n.bandwidth() / 2), r?.bandwidth && (a += r.bandwidth() / 2), (i || a) && e.attr("transform", `translate(${i},${a})`);
}
function $(e, t) {
	if ((e = W(e)) !== t) return e;
}
function Xp(e, t) {
	if ((e = G(e)) !== t) return e;
}
var Zp = /^-?([_a-z]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])([_a-z0-9-]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])*$/i;
function Qp(e) {
	if (e === void 0) return "plot-d6a7b5";
	if (e = `${e}`, !Zp.test(e)) throw Error(`invalid class name: ${e}`);
	return e;
}
function $p(e, t) {
	if (typeof t == "string") e.property("style", t);
	else if (t != null) for (let n of e) Object.assign(n.style, t);
}
function em({ frameAnchor: e }, { width: t, height: n, marginTop: r, marginRight: i, marginBottom: a, marginLeft: o }) {
	return [/left$/.test(e) ? o : /right$/.test(e) ? t - i : (o + t - i) / 2, /^top/.test(e) ? r : /^bottom/.test(e) ? n - a : (r + n - a) / 2];
}
//#endregion
//#region node_modules/@observablehq/plot/src/mark.js
var tm = class {
	constructor(e, t = {}, n = {}, r) {
		let { facet: i = "auto", facetAnchor: a, fx: o, fy: s, sort: c, dx: l = 0, dy: u = 0, margin: d = 0, marginTop: f = d, marginRight: p = d, marginBottom: m = d, marginLeft: h = d, className: g, clip: _ = r?.clip, channels: v, tip: y, render: b } = n;
		if (this.data = e, this.sort = pl(c) ? c : null, this.initializer = vu(n).initializer, this.transform = this.initializer ? n.transform : _u(n).transform, i === null || i === !1 ? this.facet = null : (this.facet = nl(i === !0 ? "include" : i, "facet", [
			"auto",
			"include",
			"exclude",
			"super"
		]), this.fx = e === Bc && typeof o == "string" ? [o] : o, this.fy = e === Bc && typeof s == "string" ? [s] : s), this.facetAnchor = Wf(a), t = Ql(t), v !== void 0 && (t = {
			...im(v),
			...t
		}), r !== void 0 && (t = {
			...Fp(this, n, r),
			...t
		}), this.channels = Object.fromEntries(Object.entries(t).map(([t, n]) => {
			if (fl(n.value)) {
				let { value: e, label: t = n.label, scale: r = n.scale } = n.value;
				n = {
					...n,
					label: t,
					scale: r,
					value: e
				};
			}
			if (e === Bc && typeof n.value == "string") {
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
		})), this.dx = +l, this.dy = +u, this.marginTop = +f, this.marginRight = +p, this.marginBottom = +m, this.marginLeft = +h, this.clip = $l(_), this.tip = am(y), this.className = W(g), this.facet === "super") {
			if (o || s) throw Error("super-faceting cannot use fx or fy");
			for (let e in this.channels) {
				let { scale: n } = t[e];
				if (n === "x" || n === "y") throw Error("super-faceting cannot use x or y");
			}
		}
		b != null && (this.render = rm(b, this.render));
	}
	initialize(e, t, n) {
		let r = rl(this.data);
		e === void 0 && r != null && (e = [vl(r)]);
		let i = e;
		this.transform != null && ({facets: e, data: r} = this.transform(r, e, n), r = rl(r)), e !== void 0 && (e.original = i);
		let a = Bu(this.channels, r);
		return this.sort != null && Uu(r, e, a, t, this.sort), {
			data: r,
			facets: e,
			channels: a
		};
	}
	filter(e, t, n) {
		for (let r in t) {
			let { filter: i = Vs } = t[r];
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
			i in e && e[i].scale === "y" && _p(r, i, t, n.projection);
		}
	}
	scale(e, t, n) {
		let r = Vu(e, t);
		return n.projection && this.project(e, r, n), r;
	}
};
function nm(...e) {
	return e.plot = tm.prototype.plot, e;
}
function rm(e, t) {
	if (e == null) return t === null ? void 0 : t;
	if (t == null) return e === null ? void 0 : e;
	if (typeof e != "function") throw TypeError(`invalid render transform: ${e}`);
	if (typeof t != "function") throw TypeError(`invalid render transform: ${t}`);
	return function(n, r, i, a, o, s) {
		return e.call(this, n, r, i, a, o, (e, n, r, i, a) => t.call(this, e, n, r, i, a, s));
	};
}
function im(e) {
	return Object.fromEntries(Object.entries(Ql(e)).map(([e, t]) => (t = typeof t == "string" ? {
		value: t,
		label: e
	} : Nl(t), t.filter === void 0 && t.scale == null && (t = {
		...t,
		filter: null
	}), [e, t])));
}
function am(e) {
	return e === !0 ? "xy" : e === !1 || e == null ? null : typeof e == "string" ? nl(e, "tip", [
		"x",
		"y",
		"xy"
	]) : e;
}
function om(e, t) {
	return e?.tip === !0 ? {
		...e,
		tip: t
	} : ul(e?.tip) && e.tip.pointer === void 0 ? {
		...e,
		tip: {
			...e.tip,
			pointer: t
		}
	} : e;
}
//#endregion
//#region node_modules/@observablehq/plot/src/dimensions.js
function sm(e, t, n = {}) {
	let r = .5 - Mp, i = .5 + Mp, a = .5 + Mp, o = .5 - Mp;
	for (let { marginTop: e, marginRight: n, marginBottom: s, marginLeft: c } of t) e > r && (r = e), n > i && (i = n), s > a && (a = s), c > o && (o = c);
	let { margin: s, marginTop: c = s === void 0 ? r : s, marginRight: l = s === void 0 ? i : s, marginBottom: u = s === void 0 ? a : s, marginLeft: d = s === void 0 ? o : s } = n;
	c = +c, l = +l, u = +u, d = +d;
	let { width: f = 640, height: p = cm(e, n, {
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
function cm({ x: e, y: t, fy: n, fx: r }, { projection: i, aspectRatio: a }, { width: o, marginTopDefault: s, marginRightDefault: c, marginBottomDefault: l, marginLeftDefault: u }) {
	let d = n && n.scale.domain().length || 1, f = yp(i);
	if (f) {
		let e = r ? r.scale.domain().length : 1, t = (1.1 * d - .1) / (1.1 * e - .1) * f, n = Math.max(.1, Math.min(10, t));
		return Math.round((o - u - c) * n + s + l);
	}
	let p = t ? Af(t) ? t.scale.domain().length || 1 : Math.max(7, 17 / d) : 1;
	if (a != null) {
		if (a = +a, !(isFinite(a) && a > 0)) throw Error(`invalid aspectRatio: ${a}`);
		let i = lm("y", t) / (lm("x", e) * a), d = r ? r.scale.bandwidth() : 1, f = n ? n.scale.bandwidth() : 1;
		return (i * (d * (o - u - c) - e.insetLeft - e.insetRight) + t.insetTop + t.insetBottom) / f + s + l;
	}
	return !!(t || n) * Math.max(1, Math.min(60, p * d)) * 20 + !!r * 30 + 60;
}
function lm(e, t) {
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
	let [a, o] = ft(r);
	return Math.abs(i(o) - i(a));
}
//#endregion
//#region node_modules/@observablehq/plot/src/interactions/pointer.js
var um = /* @__PURE__ */ new WeakMap();
function dm(e, t, { x: n, y: r, px: i, py: a, maxRadius: o = 40, channels: s, render: c, ...l } = {}) {
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
		render: rm(function(n, r, i, a, s, c) {
			s = {
				...s,
				pointerSticky: !1
			};
			let l = s.ownerSVGElement, { data: u } = s.getMarkState(this), d = um.get(l);
			d || um.set(l, d = {
				sticky: !1,
				roots: [],
				renders: []
			});
			let f = d.renders.push(ne) - 1, { x: p, y: m, fx: h, fy: g } = r, _ = h ? h(n.fx) - a.marginLeft : 0, v = g ? g(n.fy) - a.marginTop : 0;
			p?.bandwidth && (_ += p.bandwidth() / 2), m?.bandwidth && (v += m.bandwidth() / 2);
			let y = n.fi != null, b;
			if (y) {
				let e = d.facetStates;
				e || (d.facetStates = e = /* @__PURE__ */ new Map()), b = e.get(this), b || e.set(this, b = /* @__PURE__ */ new Map());
			}
			let [x, S] = em(this, a), { px: C, py: w } = i, T = C ? (e) => C[e] : hm(i, x), E = w ? (e) => w[e] : gm(i, S), D, O, k, A;
			function ee(e, t) {
				if (y) if (A &&= cancelAnimationFrame(A), e == null) b.delete(n.fi);
				else {
					b.set(n.fi, t), A = requestAnimationFrame(() => {
						A = null;
						for (let [r, i] of b) if (i < t || i === t && r < n.fi) {
							e = null;
							break;
						}
						ne(e);
					});
					return;
				}
				ne(e);
			}
			function ne(e) {
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
					let e = D == null ? null : Oc(u) ? u[D] : u.get(D);
					s.dispatchValue(e);
				}
				return o;
			}
			function re(r) {
				if (d.sticky || r.pointerType === "mouse" && r.buttons === 1) return;
				let [i, s] = te(r);
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
				ee(u, f);
			}
			function ie(e) {
				e.pointerType === "mouse" && D != null && (d.sticky && d.roots.some((t) => t?.contains(e.target)) || (d.sticky ? (d.sticky = !1, d.renders.forEach((e) => e(null))) : (d.sticky = !0, ne(D)), e.stopImmediatePropagation()));
			}
			function ae(e) {
				e.pointerType === "mouse" && (d.sticky || ee(null));
			}
			return l.addEventListener("pointerenter", re), l.addEventListener("pointermove", re), l.addEventListener("pointerdown", ie), l.addEventListener("pointerleave", ae), ne(null);
		}, c)
	};
}
function fm(e) {
	return dm(1, 1, e);
}
function pm(e) {
	return dm(1, .01, e);
}
function mm(e) {
	return dm(.01, 1, e);
}
function hm({ x1: e, x2: t, x: n = e }, r) {
	return e && t ? (n) => (e[n] + t[n]) / 2 : n ? (e) => n[e] : () => r;
}
function gm({ y1: e, y2: t, y: n = e }, r) {
	return e && t ? (n) => (e[n] + t[n]) / 2 : n ? (e) => n[e] : () => r;
}
//#endregion
//#region node_modules/@observablehq/plot/src/axes.js
function _m(e) {
	return Af(e) && e.interval === void 0 ? void 0 : "tabular-nums";
}
//#endregion
//#region node_modules/@observablehq/plot/src/legends/ramp.js
function vm(e, t) {
	let { label: n = e.label, tickSize: r = 6, width: i = 240, height: a = 44 + r, marginTop: o = 18, marginRight: s = 0, marginBottom: c = 16 + r, marginLeft: l = 0, style: u, ticks: d = (i - l - s) / 64, tickFormat: f, fontVariant: p = _m(e), round: m = !0, opacity: h, className: _ } = t, y = Sp(t);
	_ = Qp(_), h = K(h)[1], f === null && (f = () => null);
	let b = Z("svg", y).attr("class", `${_}-ramp`).attr("font-family", "system-ui, sans-serif").attr("font-size", 10).attr("width", i).attr("height", a).attr("viewBox", `0 0 ${i} ${a}`).call((e) => e.append("style").text(`:where(.${_}-ramp) {
  display: block;
  height: auto;
  height: intrinsic;
  max-width: 100%;
  overflow: visible;
}
:where(.${_}-ramp text) {
  white-space: pre;
}`)).call($p, u), x = (e) => e.selectAll(".tick line").attr("y1", o + c - a), S, C = m ? (e, t) => e.rangeRound(t) : (e, t) => e.range(t), { type: w, domain: T, range: E, interpolate: D, scale: k, pivot: A } = e;
	if (D) {
		let e = E === void 0 ? D : bn(D.length === 1 ? Id(D) : D, E);
		S = C(k.copy(), xn(Ke(l, i - s), Math.min(T.length + (A !== void 0), E === void 0 ? Infinity : E.length)));
		let t = y.document.createElement("canvas");
		t.width = 256, t.height = 1;
		let n = t.getContext("2d");
		for (let t = 0; t < 256; ++t) n.fillStyle = e(t / 255), n.fillRect(t, 0, 1, 1);
		b.append("image").attr("opacity", h).attr("x", l).attr("y", o).attr("width", i - l - s).attr("height", a - o - c).attr("preserveAspectRatio", "none").attr("xlink:href", t.toDataURL());
	} else if (w === "threshold") {
		let e = T, t = f === void 0 ? (e) => e : typeof f == "string" ? g(f) : f;
		S = C(v().domain([-1, E.length - 1]), [l, i - s]), b.append("g").attr("fill-opacity", h).selectAll().data(E).enter().append("rect").attr("x", (e, t) => S(t - 1)).attr("y", o).attr("width", (e, t) => S(t) - S(t - 1)).attr("height", a - o - c).attr("fill", (e) => e), d = q(e, (e, t) => t), f = (n) => t(e[n], n);
	} else S = C(O().domain(T), [l, i - s]), b.append("g").attr("fill-opacity", h).selectAll().data(T).enter().append("rect").attr("x", S).attr("y", o).attr("width", Math.max(0, S.bandwidth() - 1)).attr("height", a - o - c).attr("fill", k), x = () => {};
	return b.append("g").attr("transform", `translate(0,${a - c})`).call(nt(S).ticks(Array.isArray(d) ? null : d, typeof f == "string" ? f : void 0).tickFormat(typeof f == "function" ? f : void 0).tickSize(r).tickValues(Array.isArray(d) ? d : null)).attr("font-size", null).attr("font-family", null).attr("font-variant", $(p, "normal")).call(x).call((e) => e.select(".domain").remove()), n !== void 0 && b.append("text").attr("x", l).attr("y", o - 6).attr("fill", "currentColor").attr("font-weight", "bold").text(n), b.node();
}
//#endregion
//#region node_modules/@observablehq/plot/src/math.js
var ym = Math.PI / 180;
//#endregion
//#region node_modules/@observablehq/plot/src/marker.js
function bm(e, { marker: t, markerStart: n = t, markerMid: r = t, markerEnd: i = t } = {}) {
	e.markerStart = xm(n), e.markerMid = xm(r), e.markerEnd = xm(i);
}
function xm(e) {
	if (e == null || e === !1) return null;
	if (e === !0) return wm;
	if (typeof e == "function") return e;
	switch (`${e}`.toLowerCase()) {
		case "none": return null;
		case "arrow": return Sm("auto");
		case "arrow-reverse": return Sm("auto-start-reverse");
		case "dot": return Cm;
		case "circle":
		case "circle-fill": return wm;
		case "circle-stroke": return Tm;
		case "tick": return Em("auto");
		case "tick-x": return Em(90);
		case "tick-y": return Em(0);
	}
	throw Error(`invalid marker: ${e}`);
}
function Sm(e) {
	return (t, n) => Z("svg:marker", n).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("orient", e).attr("fill", "none").attr("stroke", t).attr("stroke-width", 1.5).attr("stroke-linecap", "round").attr("stroke-linejoin", "round").call((e) => e.append("path").attr("d", "M-1.5,-3l3,3l-3,3")).node();
}
function Cm(e, t) {
	return Z("svg:marker", t).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", e).attr("stroke", "none").call((e) => e.append("circle").attr("r", 2.5)).node();
}
function wm(e, t) {
	return Z("svg:marker", t).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", e).attr("stroke", "var(--plot-background)").attr("stroke-width", 1.5).call((e) => e.append("circle").attr("r", 3)).node();
}
function Tm(e, t) {
	return Z("svg:marker", t).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", "var(--plot-background)").attr("stroke", e).attr("stroke-width", 1.5).call((e) => e.append("circle").attr("r", 3)).node();
}
function Em(e) {
	return (t, n) => Z("svg:marker", n).attr("viewBox", "-3 -3 6 6").attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", e).attr("stroke", t).call((e) => e.append("path").attr("d", "M0,-3v6")).node();
}
var Dm = 0;
function Om(e, t, { stroke: n }, r) {
	return Mm(e, t, n && ((e) => n[e]), null, r);
}
var km = 1, Am = 2;
function jm(e, t) {
	let n = new Uint8Array(t.length), r = e.data().filter((e) => e.length > 1), i = r.length;
	for (let e = 0, a = Cp; e < i; ++e) {
		let i = r[e];
		if (i.length > 1) {
			let e = i[0];
			a !== (a = xl(t[e])) && (n[e] |= km);
		}
	}
	for (let e = i - 1, a = Cp; e >= 0; --e) {
		let i = r[e];
		if (i.length > 1) {
			let e = i[0];
			a !== (a = xl(t[e])) && (n[e] |= Am);
		}
	}
	return ([e]) => n[e];
}
function Mm(e, { markerStart: t, markerMid: n, markerEnd: r, stroke: i }, a = () => i, o, s) {
	if (!t && !n && !r) return;
	let c = /* @__PURE__ */ new Map(), l = o && jm(e, o);
	function u(e, t, n) {
		return function(r) {
			if (n && !n(r)) return;
			let i = a(r), o = c.get(t);
			o || c.set(t, o = /* @__PURE__ */ new Map());
			let l = o.get(i);
			if (!l) {
				let e = this.parentNode.insertBefore(t(i, s), this), n = `plot-marker-${++Dm}`;
				e.setAttribute("id", n), o.set(i, l = `url(#${n})`);
			}
			this.setAttribute(e, l);
		};
	}
	t && e.each(u("marker-start", t, l && ((e) => l(e) & km))), n && l && e.each(u("marker-start", n, (e) => !(l(e) & km))), n && e.each(u("marker-mid", n)), r && e.each(u("marker-end", r, l && ((e) => l(e) & Am)));
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/inset.js
function Nm({ inset: e, insetLeft: t, insetRight: n, ...r } = {}) {
	return [t, n] = Fm(e, t, n), {
		inset: e,
		insetLeft: t,
		insetRight: n,
		...r
	};
}
function Pm({ inset: e, insetTop: t, insetBottom: n, ...r } = {}) {
	return [t, n] = Fm(e, t, n), {
		inset: e,
		insetTop: t,
		insetBottom: n,
		...r
	};
}
function Fm(e, t, n) {
	return e === void 0 && t === void 0 && n === void 0 ? Mp ? [1, 0] : [.5, .5] : [t, n];
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/interval.js
function Im(e, { interval: t }) {
	return e = { ...Nl(e) }, e.interval = Ol(e.interval === void 0 ? t : e.interval), e;
}
function Lm(e, t, n, r) {
	let { [e]: i, [`${e}1`]: a, [`${e}2`]: o } = n, { value: s, interval: c } = Im(i, n);
	if (s == null || c == null && !r) return n;
	let l = wl(i);
	if (c == null) {
		let t, i = {
			transform: (e) => t ||= Pc(e, s),
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
		return d !== void 0 && e === u ? d : d = q(Pc(u = e, s), (e) => c.floor(e));
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
function Rm(e, t, n) {
	let { [e]: r } = n, { value: i, interval: a } = Im(r, n);
	return i == null || a == null ? n : t({
		...n,
		[e]: {
			label: wl(r),
			transform: (e) => {
				let t = q(Pc(e, i), (e) => a.floor(e)), n = t.map((e) => a.offset(e));
				return t.map(Rl(t) ? (e, t) => e == null || isNaN(e = +e) || (t = n[t], t == null) || isNaN(t = +t) ? void 0 : /* @__PURE__ */ new Date((e + t) / 2) : (e, t) => e == null || (t = n[t], t == null) ? NaN : (+e + +t) / 2);
			}
		}
	});
}
function zm(e = {}) {
	return Lm("x", Nm, e);
}
function Bm(e = {}) {
	return Lm("y", Pm, e);
}
function Vm(e = {}) {
	return Rm("x", Nm, e);
}
function Hm(e = {}) {
	return Rm("y", Pm, e);
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/rule.js
var Um = {
	ariaLabel: "rule",
	fill: null,
	stroke: "currentColor"
}, Wm = class extends tm {
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
		}, om(t, "x"), Um), this.insetTop = G(o), this.insetBottom = G(s), bm(this, t);
	}
	render(e, t, n, r, i) {
		let { x: a, y: o } = t, { x: s, y1: c, y2: l } = n, { width: u, height: d, marginTop: f, marginRight: p, marginLeft: m, marginBottom: h } = r, { insetTop: g, insetBottom: _ } = this;
		return Z("svg:g", i).call(Gp, this, r, i).call(Yp, this, { x: s && a }, Mp, 0).call((t) => t.selectAll().data(e).enter().append("line").call(Kp, this).attr("x1", s ? (e) => s[e] : (m + u - p) / 2).attr("x2", s ? (e) => s[e] : (m + u - p) / 2).attr("y1", c && !Nf(o) ? (e) => c[e] + g : f + g).attr("y2", l && !Nf(o) ? o.bandwidth ? (e) => l[e] + o.bandwidth() - _ : (e) => l[e] - _ : d - h - _).call(Rp, this, n).call(Om, this, n, i)).node();
	}
}, Gm = class extends tm {
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
		}, om(t, "y"), Um), this.insetRight = G(o), this.insetLeft = G(s), bm(this, t);
	}
	render(e, t, n, r, i) {
		let { x: a, y: o } = t, { y: s, x1: c, x2: l } = n, { width: u, height: d, marginTop: f, marginRight: p, marginLeft: m, marginBottom: h } = r, { insetLeft: g, insetRight: _ } = this;
		return Z("svg:g", i).call(Gp, this, r, i).call(Yp, this, { y: s && o }, 0, Mp).call((t) => t.selectAll().data(e).enter().append("line").call(Kp, this).attr("x1", c && !Nf(a) ? (e) => c[e] + g : m + g).attr("x2", l && !Nf(a) ? a.bandwidth ? (e) => l[e] + a.bandwidth() - _ : (e) => l[e] - _ : u - p - _).attr("y1", s ? (e) => s[e] : (f + d - h) / 2).attr("y2", s ? (e) => s[e] : (f + d - h) / 2).call(Rp, this, n).call(Om, this, n, i)).node();
	}
};
function Km(e, t) {
	let { x: n = Uc, y: r, y1: i, y2: a, ...o } = Bm(t);
	return [i, a] = Jm(r, i, a), new Wm(e, {
		...o,
		x: n,
		y1: i,
		y2: a
	});
}
function qm(e, t) {
	let { y: n = Uc, x: r, x1: i, x2: a, ...o } = zm(t);
	return [i, a] = Jm(r, i, a), new Gm(e, {
		...o,
		y: n,
		x1: i,
		x2: a
	});
}
function Jm(e, t, n) {
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
function Ym(e, ...t) {
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
var Xm = {
	ariaLabel: "text",
	strokeLinejoin: "round",
	strokeWidth: 3,
	paintOrder: "stroke"
}, Zm = "­", Qm = class extends tm {
	constructor(e, t = {}) {
		let { x: n, y: r, text: i = Fl(e) && Il(e) ? Uc : Hc, frameAnchor: a, textAnchor: o = /right$/i.test(a) ? "end" : /left$/i.test(a) ? "start" : "middle", lineAnchor: s = /^top/i.test(a) ? "top" : /^bottom/i.test(a) ? "bottom" : "middle", lineHeight: c = 1, lineWidth: l = Infinity, textOverflow: u, monospace: d, fontFamily: f = d ? "ui-monospace, monospace" : void 0, fontSize: p, fontStyle: m, fontVariant: h, fontWeight: g, rotate: _ } = t, [v, y] = K(_, 0), [b, x] = sh(p);
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
				value: Pl(v),
				optional: !0
			},
			text: {
				value: i,
				filter: Ws,
				optional: !0
			}
		}, t, Xm), this.rotate = y, this.textAnchor = $(o, "middle"), this.lineAnchor = nl(s, "lineAnchor", [
			"top",
			"middle",
			"bottom"
		]), this.lineHeight = +c, this.lineWidth = +l, this.textOverflow = $m(u), this.monospace = !!d, this.fontFamily = W(f), this.fontSize = x, this.fontStyle = W(m), this.fontVariant = W(h), this.fontWeight = W(g), this.frameAnchor = Yl(a), !(this.lineWidth >= 0)) throw Error(`invalid lineWidth: ${l}`);
		this.splitLines = ph(this), this.clipLine = mh(this);
	}
	render(e, t, n, r, i) {
		let { x: a, y: o } = t, { x: s, y: c, rotate: l, text: u, title: d, fontSize: f } = n, { rotate: p } = this, [m, h] = em(this, r);
		return Z("svg:g", i).call(Gp, this, r, i).call(ih, this, u, r).call(Yp, this, {
			x: s && a,
			y: c && o
		}).call((t) => t.selectAll().data(e).enter().append("text").call(Kp, this).call(eh, this, u, d).attr("transform", Ym`translate(${s ? (e) => s[e] : m},${c ? (e) => c[e] : h})${l ? (e) => ` rotate(${l[e]})` : p ? ` rotate(${p})` : ""}`).call(Q, "font-size", f && ((e) => f[e])).call(Rp, this, n)).node();
	}
};
function $m(e) {
	return e == null ? null : nl(e, "textOverflow", [
		"clip",
		"ellipsis",
		"clip-start",
		"clip-end",
		"ellipsis-start",
		"ellipsis-middle",
		"ellipsis-end"
	]).replace(/^(clip|ellipsis)$/, "$1-end");
}
function eh(e, t, n, r) {
	if (!n) return;
	let { lineAnchor: i, lineHeight: a, textOverflow: o, splitLines: s, clipLine: c } = t;
	e.each(function(e) {
		let t = s(jp(n[e]) ?? "").map(c), l = t.length, u = i === "top" ? .71 : i === "bottom" ? 1 - l : (164 - l * 100) / 200;
		if (l > 1) {
			let e = 0;
			for (let n = 0; n < l; ++n) {
				if (++e, !t[n]) continue;
				let r = this.ownerDocument.createElementNS(k.svg, "tspan");
				r.setAttribute("x", 0), n === e - 1 ? r.setAttribute("y", `${(u + n) * a}em`) : r.setAttribute("dy", `${e * a}em`), r.textContent = t[n], this.appendChild(r), e = 0;
			}
		} else u && this.setAttribute("y", `${u * a}em`), this.textContent = t[0];
		if (o && !r && t[0] !== n[e]) {
			let t = this.ownerDocument.createElementNS(k.svg, "title");
			t.textContent = n[e], this.appendChild(t);
		}
	});
}
function th(e, { x: t, y: n, ...r } = {}) {
	return r.frameAnchor === void 0 && ([t, n] = hl(t, n)), new Qm(e, {
		...r,
		x: t,
		y: n
	});
}
function nh(e, { x: t = Uc, ...n } = {}) {
	return new Qm(e, Hm({
		...n,
		x: t
	}));
}
function rh(e, { y: t = Uc, ...n } = {}) {
	return new Qm(e, Vm({
		...n,
		y: t
	}));
}
function ih(e, t, n) {
	Q(e, "text-anchor", t.textAnchor), Q(e, "font-family", t.fontFamily), Q(e, "font-size", t.fontSize), Q(e, "font-style", t.fontStyle), Q(e, "font-variant", t.fontVariant === void 0 ? ah(n) : t.fontVariant), Q(e, "font-weight", t.fontWeight);
}
function ah(e) {
	return e && (Vl(e) || Rl(e)) ? "tabular-nums" : void 0;
}
var oh = /* @__PURE__ */ new Set([
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
function sh(e) {
	return e == null || typeof e == "number" ? [void 0, e] : typeof e == "string" ? (e = e.trim().toLowerCase(), oh.has(e) || /^[+-]?\d*\.?\d+(e[+-]?\d+)?(\w*|%)$/.test(e) ? [void 0, e] : [e, void 0]) : [e, void 0];
}
function ch(e, t, n) {
	let r = [], i, a = 0;
	for (let [o, s, c] of lh(e)) {
		if (i === void 0 && (i = o), a > i && n(e, i, s) > t && (r.push(e.slice(i, a) + (e[a - 1] === Zm ? "-" : "")), i = o), c) {
			r.push(e.slice(i, s)), i = void 0;
			continue;
		}
		a = s;
	}
	return r;
}
function* lh(e) {
	let t = 0, n = 0, r = e.length;
	for (; n < r;) {
		let r = 1;
		switch (e[n]) {
			case Zm:
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
var uh = {
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
function dh(e, t = 0, n = e.length) {
	let r = 0;
	for (let i = t; i < n; i = xh(e, i)) r += uh[e[i]] ?? (Eh(e, i) ? 120 : uh.e);
	return r;
}
function fh(e, t = 0, n = e.length) {
	let r = 0;
	for (let i = t; i < n; i = xh(e, i)) r += Eh(e, i) ? 126 : 63;
	return r;
}
function ph({ monospace: e, lineWidth: t, textOverflow: n }) {
	if (n != null || t == Infinity) return (e) => e.split(/\r\n?|\n/g);
	let r = e ? fh : dh, i = t * 100;
	return (e) => ch(e, i, r);
}
function mh({ monospace: e, lineWidth: t, textOverflow: n }) {
	if (n == null || t == Infinity) return (e) => e;
	let r = e ? fh : dh, i = t * 100;
	switch (n) {
		case "clip-start": return (e) => vh(e, i, r, "");
		case "clip-end": return (e) => gh(e, i, r, "");
		case "ellipsis-start": return (e) => vh(e, i, r, "…");
		case "ellipsis-middle": return (e) => _h(e, i, r, "…");
		case "ellipsis-end": return (e) => gh(e, i, r, "…");
	}
}
function hh(e, t, n, r) {
	let i = [], a = 0;
	for (let o = 0, s = 0, c = e.length; o < c; o = s) {
		s = xh(e, o);
		let c = n(e, o, s);
		if (a + c > t) {
			for (a += r; a > t && o > 0;) s = o, o = i.pop(), a -= n(e, o, s);
			return [o, t - a];
		}
		a += c, i.push(o);
	}
	return [-1, 0];
}
function gh(e, t, n, r) {
	e = e.trim();
	let i = n(r), [a] = hh(e, t, n, i);
	return a < 0 ? e : e.slice(0, a).trimEnd() + r;
}
function _h(e, t, n, r) {
	e = e.trim();
	let i = n(e);
	if (i <= t) return e;
	let a = n(r) / 2, [o, s] = hh(e, t / 2, n, a), [c] = hh(e, i - t / 2 - s + a, n, -a);
	return c < 0 ? r : e.slice(0, o).trimEnd() + r + e.slice(xh(e, c)).trimStart();
}
function vh(e, t, n, r) {
	e = e.trim();
	let i = n(e);
	if (i <= t) return e;
	let a = n(r), [o] = hh(e, i - t + a, n, -a);
	return o < 0 ? r : r + e.slice(xh(e, o)).trimStart();
}
var yh = /[\p{Combining_Mark}\p{Emoji_Modifier}]+/uy, bh = /\p{Extended_Pictographic}/uy;
function xh(e, t) {
	return t += Ch(e, t) ? 2 : 1, Th(e, t) && (t = yh.lastIndex), wh(e, t) ? xh(e, t + 1) : t;
}
function Sh(e, t) {
	return e.charCodeAt(t) < 128;
}
function Ch(e, t) {
	let n = e.charCodeAt(t);
	if (n >= 55296 && n < 56320) {
		let n = e.charCodeAt(t + 1);
		return n >= 56320 && n < 57344;
	}
	return !1;
}
function wh(e, t) {
	return e.charCodeAt(t) === 8205;
}
function Th(e, t) {
	return !Sh(e, t) && (yh.lastIndex = t, yh.test(e));
}
function Eh(e, t) {
	return !Sh(e, t) && (bh.lastIndex = t, bh.test(e));
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/vector.js
var Dh = {
	ariaLabel: "vector",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.5,
	strokeLinejoin: "round",
	strokeLinecap: "round"
}, Oh = 3.5, kh = Oh * 5, Ah = { draw(e, t, n) {
	let r = t * n / kh;
	e.moveTo(0, 0), e.lineTo(0, -t), e.moveTo(-r, r - t), e.lineTo(0, -t), e.lineTo(r, r - t);
} }, jh = /* @__PURE__ */ new Map([["arrow", Ah], ["spike", { draw(e, t, n) {
	e.moveTo(-n, 0), e.lineTo(0, -t), e.lineTo(n, 0);
} }]]);
function Mh(e) {
	return e && typeof e.draw == "function";
}
function Nh(e) {
	if (Mh(e)) return e;
	let t = jh.get(`${e}`.toLowerCase());
	if (t) return t;
	throw Error(`invalid shape: ${e}`);
}
var Ph = class extends tm {
	constructor(e, t = {}) {
		let { x: n, y: r, r: i = Oh, length: a, rotate: o, shape: s = Ah, anchor: c = "middle", frameAnchor: l } = t, [u, d] = K(a, 12), [f, p] = K(o, 0);
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
		}, t, Dh), this.r = +i, this.length = d, this.rotate = p, this.shape = Nh(s), this.anchor = nl(c, "anchor", [
			"start",
			"middle",
			"end"
		]), this.frameAnchor = Yl(l);
	}
	render(e, t, n, r, i) {
		let { x: a, y: o } = t, { x: s, y: c, length: l, rotate: u } = n, { length: d, rotate: f, anchor: p, shape: m, r: h } = this, [g, _] = em(this, r);
		return Z("svg:g", i).call(Gp, this, r, i).call(Yp, this, {
			x: s && a,
			y: c && o
		}).call((t) => t.selectAll().data(e).enter().append("path").call(Kp, this).attr("transform", Ym`translate(${s ? (e) => s[e] : g},${c ? (e) => c[e] : _})${u ? (e) => ` rotate(${u[e]})` : f ? ` rotate(${f})` : ""}${p === "start" ? "" : p === "end" ? l ? (e) => ` translate(0,${l[e]})` : ` translate(0,${d})` : l ? (e) => ` translate(0,${l[e] / 2})` : ` translate(0,${d / 2})`}`).attr("d", l ? (e) => {
			let t = tt();
			return m.draw(t, l[e], h), t;
		} : (() => {
			let e = tt();
			return m.draw(e, d, h), e;
		})()).call(Rp, this, n)).node();
	}
};
function Fh(e, t = {}) {
	let { x: n = Uc, ...r } = t;
	return new Ph(e, {
		...r,
		x: n
	});
}
function Ih(e, t = {}) {
	let { y: n = Uc, ...r } = t;
	return new Ph(e, {
		...r,
		y: n
	});
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/axis.js
function Lh(e, t) {
	return arguments.length < 2 && !Fl(e) && (t = e, e = null), t === void 0 && (t = {}), [e, t];
}
function Rh({ anchor: e } = {}, t) {
	return e === void 0 ? t[0] : nl(e, "anchor", t);
}
function zh(e) {
	return Rh(e, ["left", "right"]);
}
function Bh(e) {
	return Rh(e, ["right", "left"]);
}
function Vh(e) {
	return Rh(e, ["bottom", "top"]);
}
function Hh(e) {
	return Rh(e, ["top", "bottom"]);
}
function Uh() {
	let [e, t] = Lh(...arguments);
	return qh("y", zh(t), e, t);
}
function Wh() {
	let [e, t] = Lh(...arguments);
	return qh("fy", Bh(t), e, t);
}
function Gh() {
	let [e, t] = Lh(...arguments);
	return Jh("x", Vh(t), e, t);
}
function Kh() {
	let [e, t] = Lh(...arguments);
	return Jh("fx", Hh(t), e, t);
}
function qh(e, t, n, { color: r = "currentColor", opacity: i = 1, stroke: a = r, strokeOpacity: o = i, strokeWidth: s = 1, fill: c = r, fillOpacity: l = i, textAnchor: u, textStroke: d, textStrokeOpacity: f, textStrokeWidth: p, tickSize: m = e === "y" ? 6 : 0, tickPadding: h, tickRotate: g, x: _, margin: v, marginTop: y = v === void 0 ? 20 : v, marginRight: b = v === void 0 ? t === "right" ? 40 : 0 : v, marginBottom: x = v === void 0 ? 20 : v, marginLeft: S = v === void 0 ? t === "left" ? 40 : 0 : v, label: C, labelAnchor: w, labelArrow: T, labelOffset: E, ariaLabel: D = `${e}-axis`, ...O }) {
	return m = G(m), h = G(h), g = G(g), w !== void 0 && (w = nl(w, "labelAnchor", [
		"center",
		"top",
		"bottom"
	])), T = vg(T), nm(m && !J(a) ? Yh(e, t, n, {
		stroke: a,
		strokeOpacity: o,
		strokeWidth: s,
		tickSize: m,
		tickPadding: h,
		tickRotate: g,
		x: _,
		ariaLabel: D,
		...O
	}) : null, J(c) ? null : Zh(e, t, n, {
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
	}), !J(c) && C !== null ? th([], og({
		fill: c,
		fillOpacity: l,
		...O
	}, function(n, r, i, a, o) {
		let s = a[e], { marginTop: c, marginRight: l, marginBottom: u, marginLeft: d } = e === "y" && o.inset || o, f = w ?? (s.bandwidth ? "center" : "top"), p = E ?? (t === "right" ? l : d) - 3;
		return f === "center" ? (this.textAnchor = void 0, this.lineAnchor = t === "right" ? "bottom" : "top", this.frameAnchor = t, this.rotate = -90) : (this.textAnchor = t === "right" ? "end" : "start", this.lineAnchor = f, this.frameAnchor = `${f}-${t}`, this.rotate = 0), this.dy = f === "top" ? 3 - c : f === "bottom" ? u - 3 : 0, this.dx = t === "right" ? p : -p, this.ariaLabel = `${D} label`, {
			facets: [[0]],
			channels: { text: { value: [_g(e, s, {
				anchor: t,
				label: C,
				labelAnchor: f,
				labelArrow: T
			})] } }
		};
	})) : null);
}
function Jh(e, t, n, { color: r = "currentColor", opacity: i = 1, stroke: a = r, strokeOpacity: o = i, strokeWidth: s = 1, fill: c = r, fillOpacity: l = i, textAnchor: u, textStroke: d, textStrokeOpacity: f, textStrokeWidth: p, tickSize: m = e === "x" ? 6 : 0, tickPadding: h, tickRotate: g, y: _, margin: v, marginTop: y = v === void 0 ? t === "top" ? 30 : 0 : v, marginRight: b = v === void 0 ? 20 : v, marginBottom: x = v === void 0 ? t === "bottom" ? 30 : 0 : v, marginLeft: S = v === void 0 ? 20 : v, label: C, labelAnchor: w, labelArrow: T, labelOffset: E, ariaLabel: D = `${e}-axis`, ...O }) {
	return m = G(m), h = G(h), g = G(g), w !== void 0 && (w = nl(w, "labelAnchor", [
		"center",
		"left",
		"right"
	])), T = vg(T), nm(m && !J(a) ? Xh(e, t, n, {
		stroke: a,
		strokeOpacity: o,
		strokeWidth: s,
		tickSize: m,
		tickPadding: h,
		tickRotate: g,
		y: _,
		ariaLabel: D,
		...O
	}) : null, J(c) ? null : Qh(e, t, n, {
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
	}), !J(c) && C !== null ? th([], og({
		fill: c,
		fillOpacity: l,
		...O
	}, function(n, r, i, a, o) {
		let s = a[e], { marginTop: c, marginRight: l, marginBottom: u, marginLeft: d } = e === "x" && o.inset || o, f = w ?? (s.bandwidth ? "center" : "right"), p = E ?? (t === "top" ? c : u) - 3;
		return f === "center" ? (this.frameAnchor = t, this.textAnchor = void 0) : (this.frameAnchor = `${t}-${f}`, this.textAnchor = f === "right" ? "end" : "start"), this.lineAnchor = t, this.dy = t === "top" ? -p : p, this.dx = f === "right" ? l - 3 : f === "left" ? 3 - d : 0, this.ariaLabel = `${D} label`, {
			facets: [[0]],
			channels: { text: { value: [_g(e, s, {
				anchor: t,
				label: C,
				labelAnchor: f,
				labelArrow: T
			})] } }
		};
	})) : null);
}
function Yh(e, t, n, { strokeWidth: r = 1, strokeLinecap: i = null, strokeLinejoin: a = null, facetAnchor: o = t + (e === "y" ? "-empty" : ""), frameAnchor: s = t, tickSize: c, inset: l = 0, insetLeft: u = l, insetRight: d = l, dx: f = 0, y: p = e === "y" ? void 0 : null, ariaLabel: m, ...h }) {
	return sg(Ih, e, n, {
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
		dx: t === "left" ? +f - Mp + +u : +f + Mp - d,
		anchor: "start",
		length: c,
		shape: t === "left" ? mg : hg
	});
}
function Xh(e, t, n, { strokeWidth: r = 1, strokeLinecap: i = null, strokeLinejoin: a = null, facetAnchor: o = t + (e === "x" ? "-empty" : ""), frameAnchor: s = t, tickSize: c, inset: l = 0, insetTop: u = l, insetBottom: d = l, dy: f = 0, x: p = e === "x" ? void 0 : null, ariaLabel: m, ...h }) {
	return sg(Fh, e, n, {
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
		dy: t === "bottom" ? +f - Mp - d : +f + Mp + +u,
		anchor: "start",
		length: c,
		shape: t === "bottom" ? fg : pg
	});
}
function Zh(e, t, n, { facetAnchor: r = t + (e === "y" ? "-empty" : ""), frameAnchor: i = t, tickSize: a, tickRotate: o = 0, tickPadding: s = Math.max(3, 9 - a) + (Math.abs(o) > 60 ? 4 * Math.cos(o * ym) : 0), text: c, textAnchor: l = Math.abs(o) > 60 ? "middle" : t === "left" ? "end" : "start", lineAnchor: u = o > 60 ? "top" : o < -60 ? "bottom" : "middle", fontVariant: d, inset: f = 0, insetLeft: p = f, insetRight: m = f, dx: h = 0, ariaLabel: g, y: _ = e === "y" ? void 0 : null, ...v }) {
	return sg(rh, e, n, { ariaLabel: `${g} tick label` }, {
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
		d === void 0 && (this.fontVariant = gg(e)), c === void 0 && (a.text = lg(e, n, r, i, t));
	});
}
function Qh(e, t, n, { facetAnchor: r = t + (e === "x" ? "-empty" : ""), frameAnchor: i = t, tickSize: a, tickRotate: o = 0, tickPadding: s = Math.max(3, 9 - a) + (Math.abs(o) >= 10 ? 4 * Math.cos(o * ym) : 0), text: c, textAnchor: l = Math.abs(o) >= 10 ? o < 0 ^ t === "bottom" ? "start" : "end" : "middle", lineAnchor: u = Math.abs(o) >= 10 ? "middle" : t === "bottom" ? "top" : "bottom", fontVariant: d, inset: f = 0, insetTop: p = f, insetBottom: m = f, dy: h = 0, x: g = e === "x" ? void 0 : null, ariaLabel: _, ...v }) {
	return sg(nh, e, n, { ariaLabel: `${_} tick label` }, {
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
		d === void 0 && (this.fontVariant = gg(e)), c === void 0 && (a.text = lg(e, n, r, i, t));
	});
}
function $h() {
	let [e, t] = Lh(...arguments);
	return rg("y", zh(t), e, t);
}
function eg() {
	let [e, t] = Lh(...arguments);
	return rg("fy", Bh(t), e, t);
}
function tg() {
	let [e, t] = Lh(...arguments);
	return ig("x", Vh(t), e, t);
}
function ng() {
	let [e, t] = Lh(...arguments);
	return ig("fx", Hh(t), e, t);
}
function rg(e, t, n, { y: r = e === "y" ? void 0 : null, x: i = null, x1: a = t === "left" ? i : null, x2: o = t === "right" ? i : null, ariaLabel: s = `${e}-grid`, ariaHidden: c = !0, ...l }) {
	return sg(qm, e, n, {
		ariaLabel: s,
		ariaHidden: c
	}, {
		y: r,
		x1: a,
		x2: o,
		...ag(l)
	});
}
function ig(e, t, n, { x: r = e === "x" ? void 0 : null, y: i = null, y1: a = t === "top" ? i : null, y2: o = t === "bottom" ? i : null, ariaLabel: s = `${e}-grid`, ariaHidden: c = !0, ...l }) {
	return sg(Km, e, n, {
		ariaLabel: s,
		ariaHidden: c
	}, {
		x: r,
		y1: a,
		y2: o,
		...ag(l)
	});
}
function ag({ color: e = "currentColor", opacity: t = .1, stroke: n = e, strokeOpacity: r = t, strokeWidth: i = 1, ...a }) {
	return {
		stroke: n,
		strokeOpacity: r,
		strokeWidth: i,
		...a
	};
}
function og({ fill: e, fillOpacity: t, fontFamily: n, fontSize: r, fontStyle: i, fontVariant: a, fontWeight: o, monospace: s, pointerEvents: c, shapeRendering: l, clip: u = !1 }, d) {
	return [, e] = el(e), [, t] = K(t), {
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
function sg(e, t, n, r, i, a) {
	let o;
	function c(e, n, r, c, l, u) {
		let d = e == null && (t === "fx" || t === "fy"), { [t]: f } = c;
		if (!f) throw Error(`missing scale: ${t}`);
		let p = f.domain(), { interval: m, ticks: h, tickFormat: g, tickSpacing: _ = t === "x" ? 80 : 35 } = i;
		if (typeof h == "string" && yg(f) && (m = h, h = void 0), h === void 0 && (h = Al(m, f.type) ?? cg(f, _)), e == null) {
			if (Fl(h)) e = il(h);
			else if (Ml(h)) e = dg(h, ...ft(p));
			else if (f.interval) {
				let t = f.interval;
				if (f.ticks) {
					let [n, r] = ft(p), i = (r - n) / t[dc];
					t = bc(t, i / h) ?? t, e = dg(t, n, r);
				} else {
					e = p;
					let n = e.length;
					t = bc(t, n / h) ?? t, t !== f.interval && (e = dg(t, ...ft(e)));
				}
				if (t === f.interval) {
					let t = Math.round(e.length / h);
					t > 1 && (e = e.filter((e, n) => n % t === 0));
				}
			} else e = f.ticks ? f.ticks(h) : p;
			if (!f.ticks && e.length && e !== p) {
				let n = new s(p);
				e = e.filter((e) => n.has(e)), e.length || Bd(`Warning: the ${t}-axis ticks appear to not align with the scale domain, resulting in no ticks. Try different ticks?`);
			}
			t === "y" || t === "x" ? n = [vl(e)] : o[t] = {
				scale: t,
				value: Uc
			};
		}
		a?.call(this, f, e, h, g, o);
		let v = Object.fromEntries(Object.entries(o).map(([t, n]) => [t, {
			...n,
			value: Pc(e, n.value)
		}]));
		return d && (n = u.filterFacets(e, v)), {
			data: e,
			facets: n,
			channels: v
		};
	}
	let l = vu(i).initializer, u = e(n, vu({
		...i,
		initializer: c
	}, l));
	return n == null ? (o = u.channels, u.channels = {}) : o = {}, r !== void 0 && Object.assign(u, r), u.clip === void 0 && (u.clip = !1), u;
}
function cg(e, t) {
	let [n, r] = ft(e.range());
	return (r - n) / t;
}
function lg(e, t, n, r, i) {
	return { value: ug(e, t, n, r, i) };
}
function ug(e, t, n, r, i) {
	return typeof r == "function" && !(e.type === "log" && e.tickFormat) ? r : r === void 0 && t && Rl(t) ? wc(e.type, t, i) ?? jp : e.tickFormat ? e.tickFormat(typeof n == "number" ? n : null, r) : typeof r == "string" && e.domain().length > 0 ? (Rl(e.domain()) ? Ae : g)(r) : r === void 0 ? jp : Jc(r);
}
function dg(e, t, n) {
	return e.range(t, e.offset(e.floor(n)));
}
var fg = { draw(e, t) {
	e.moveTo(0, 0), e.lineTo(0, t);
} }, pg = { draw(e, t) {
	e.moveTo(0, 0), e.lineTo(0, -t);
} }, mg = { draw(e, t) {
	e.moveTo(0, 0), e.lineTo(-t, 0);
} }, hg = { draw(e, t) {
	e.moveTo(0, 0), e.lineTo(t, 0);
} };
function gg(e) {
	return e.bandwidth && !e.interval ? void 0 : "tabular-nums";
}
function _g(e, t, { anchor: n, label: r = t.label, labelAnchor: i, labelArrow: a } = {}) {
	if (!(r == null || r.inferred && yg(t) && /^(date|time|year)$/i.test(r))) {
		if (r = String(r), a === "auto" && (a = (!t.bandwidth || t.interval) && !/[↑↓→←]/.test(r)), !a) return r;
		if (a === !0) {
			let n = gf(t);
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
function vg(e = "auto") {
	return J(e) ? !1 : typeof e == "boolean" ? e : nl(e, "labelArrow", [
		"auto",
		"up",
		"right",
		"down",
		"left"
	]);
}
function yg(e) {
	return Rl(e.domain());
}
//#endregion
//#region node_modules/@observablehq/plot/src/legends/swatches.js
function bg(e, t) {
	if (t == null) return t;
	let n = e(t);
	if (!n) throw Error(`scale not found: ${t}`);
	return n;
}
function xg(e, { opacity: t, ...n } = {}) {
	if (!Af(e) && !jf(e)) throw Error(`swatches legend requires ordinal or threshold color scale (not ${e.type})`);
	return Cg(e, n, (e, n, r, i) => e.append("svg").attr("width", r).attr("height", i).attr("fill", n.scale).attr("fill-opacity", K(t)[1]).append("rect").attr("width", "100%").attr("height", "100%"));
}
function Sg(e, { fill: t = e.hint?.fill === void 0 ? "none" : e.hint.fill, fillOpacity: n = 1, stroke: r = e.hint?.stroke === void 0 ? J(t) ? "currentColor" : "none" : e.hint.stroke, strokeOpacity: i = 1, strokeWidth: a = 1.5, r: o = 4.5, ...s } = {}, c) {
	let [l, u] = el(t), [d, f] = el(r), p = bg(c, l), m = bg(c, d), h = o * o * Math.PI;
	return n = K(n)[1], i = K(i)[1], a = K(a)[1], Cg(e, s, (t, r, o, s) => t.append("svg").attr("viewBox", "-8 -8 16 16").attr("width", o).attr("height", s).attr("fill", l === "color" ? (e) => p.scale(e) : u).attr("fill-opacity", n).attr("stroke", d === "color" ? (e) => m.scale(e) : f).attr("stroke-opacity", i).attr("stroke-width", a).append("path").attr("d", (t) => {
		let n = tt();
		return e.scale(t).draw(n, h), n;
	}));
}
function Cg(e, t = {}, n) {
	let { columns: r, tickFormat: i, fontVariant: a = _m(e), swatchSize: o = 15, swatchWidth: s = o, swatchHeight: c = o, marginLeft: l = 0, className: u, style: d, width: f } = t, p = Sp(t);
	u = Qp(u), i = ug(e.scale, e.domain, void 0, i);
	let m = Z("div", p).attr("class", `${u}-swatches ${u}-swatches-${r == null ? "wrap" : "columns"}`), h;
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
${h}`)).style("margin-left", l ? `${+l}px` : null).style("width", f === void 0 ? null : `${+f}px`).style("font-variant", $(a, "normal")).call($p, d).node();
}
//#endregion
//#region node_modules/@observablehq/plot/src/legends.js
var wg = /* @__PURE__ */ new Map([
	["symbol", Sg],
	["color", Dg],
	["opacity", Og]
]);
function Tg(e, t, n = {}) {
	return (r, i) => {
		if (!wg.has(r)) throw Error(`unknown legend type: ${r}`);
		if (r in e) return wg.get(r)(e[r], Eg(t, n[r], i), (t) => e[t]);
	};
}
function Eg({ className: e, ...t }, { label: n, ticks: r, tickFormat: i } = {}, a) {
	return Xl(a, {
		className: e,
		...t
	}, {
		label: n,
		ticks: r,
		tickFormat: i
	});
}
function Dg(e, { legend: t = !0, ...n }) {
	if (t === !0 && (t = e.type === "ordinal" ? "swatches" : "ramp"), e.domain !== void 0) switch (`${t}`.toLowerCase()) {
		case "swatches": return xg(e, n);
		case "ramp": return vm(e, n);
		default: throw Error(`unknown legend type: ${t}`);
	}
}
function Og({ type: e, interpolate: t, ...n }, { legend: r = !0, color: i = Ge(0, 0, 0), ...a }) {
	if (!t) throw Error(`${e} opacity scales are not supported`);
	if (r === !0 && (r = "ramp"), `${r}`.toLowerCase() !== "ramp") throw Error(`${r} opacity legends are not supported`);
	return Dg({
		type: e,
		...n,
		interpolate: kg(i)
	}, {
		legend: r,
		...a
	});
}
function kg(e) {
	let { r: t, g: n, b: r } = Ge(e) || Ge(0, 0, 0);
	return (e) => `rgba(${t},${n},${r},${e})`;
}
function Ag(e, t, n) {
	let r = [];
	for (let [i, a] of wg) {
		let o = n[i];
		if (o?.legend && i in e) {
			let n = a(e[i], Eg(t, e[i], o), (t) => e[t]);
			n != null && r.push(n);
		}
	}
	return r;
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/identity.js
function jg(e = {}, t = "y") {
	return cl(e) ? e : {
		...e,
		[t]: Uc
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/exclusiveFacets.js
function Mg(e, t) {
	if (t.length === 1) return {
		data: e,
		facets: t
	};
	let n = _l(e), r = new Uint8Array(n), i = 0;
	for (let e of t) for (let t of e) r[t] && ++i, r[t] = 1;
	if (i === 0) return {
		data: e,
		facets: t
	};
	e = ol(e);
	let a = e[Nc] = new Uint32Array(n + i);
	t = t.map((e) => ol(e, Uint32Array));
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
function Ng(e = {}, t = {}) {
	arguments.length === 1 && ([e, t] = Fg(e));
	let { x1: n, x: r = n, y: i, ...a } = t, [o, s, c, l] = Lg(r, i, "x", "y", e, a);
	return {
		...o,
		x1: n,
		x: s,
		y1: c,
		y2: l,
		y: Tl(c, l)
	};
}
function Pg({ y: e, y1: t, y2: n, ...r } = {}) {
	return r = om(r, "x"), t === void 0 && n === void 0 ? Ng({
		y: e,
		...r
	}) : ([t, n] = ml(e, t, n), {
		...r,
		y1: t,
		y2: n
	});
}
function Fg(e) {
	let { offset: t, order: n, reverse: r, ...i } = e;
	return [{
		offset: t,
		order: n,
		reverse: r
	}, i];
}
var Ig = { length: !0 };
function Lg(e, t = Wc, n, i, { offset: a, order: o, reverse: s }, c) {
	if (t === null) throw Error(`stack requires ${i}`);
	let l = gl(c), [u, d] = Cl(e), [f, p] = Sl(t), [m, h] = Sl(t);
	return f.hint = m.hint = Ig, a = Rg(a), o = Gg(o, a, i), [
		_u(c, (i, c, u) => {
			({data: i, facets: c} = Mg(i, c));
			let f = e == null ? void 0 : d(El(Pc(i, e), u?.[n])), m = Pc(i, t, Float64Array), g = Pc(i, l), _ = o && o(i, f, m, g), v = _l(i), y = p(new Float64Array(v)), b = h(new Float64Array(v)), x = [];
			for (let e of c) {
				let t = f ? Array.from(r(e, (e) => f[e]).values()) : [e];
				if (_) for (let e of t) e.sort(_);
				for (let e of t) {
					let t = 0, n = 0;
					s && e.reverse();
					for (let r of e) {
						let e = m[r];
						e < 0 ? t = b[r] = (y[r] = t) + e : e > 0 ? n = b[r] = (y[r] = n) + e : b[r] = y[r] = n;
					}
				}
				x.push(t);
			}
			return a && a(x, y, b, g), {
				data: i,
				facets: c
			};
		}),
		u,
		f,
		m
	];
}
function Rg(e) {
	if (e != null) {
		if (typeof e == "function") return e;
		switch (`${e}`.toLowerCase()) {
			case "expand":
			case "normalize": return Bg;
			case "center":
			case "silhouette": return Vg;
			case "wiggle": return Hg;
		}
		throw Error(`unknown offset: ${e}`);
	}
}
function zg(e, t) {
	let n = 0, r = 0;
	for (let i of e) {
		let e = t[i];
		e < n && (n = e), e > r && (r = e);
	}
	return [n, r];
}
function Bg(e, t, n) {
	for (let r of e) for (let e of r) {
		let [r, i] = zg(e, n);
		for (let a of e) {
			let e = 1 / (i - r || 1);
			t[a] = e * (t[a] - r), n[a] = e * (n[a] - r);
		}
	}
}
function Vg(e, t, n) {
	for (let r of e) {
		for (let e of r) {
			let [r, i] = zg(e, n);
			for (let a of e) {
				let e = (i + r) / 2;
				t[a] -= e, n[a] -= e;
			}
		}
		Ug(r, t, n);
	}
	Wg(e, t, n);
}
function Hg(e, t, n, r) {
	for (let i of e) {
		let e = new d(), a = 0;
		for (let o of i) {
			let i = -1, s = o.map((e) => Math.abs(n[e] - t[e])), c = o.map((a) => {
				i = r ? r[a] : ++i;
				let o = n[a] - t[a], s = e.has(i) ? o - e.get(i) : 0;
				return e.set(i, o), s;
			}), l = [0, ...lt(c)];
			for (let e of o) t[e] += a, n[e] += a;
			let u = T(s);
			u && (a -= T(s, (e, t) => (c[t] / 2 + l[t]) * e) / u);
		}
		Ug(i, t, n);
	}
	Wg(e, t, n);
}
function Ug(e, t, n) {
	let r = w(e, (e) => w(e, (e) => t[e]));
	for (let i of e) for (let e of i) t[e] -= r, n[e] -= r;
}
function Wg(e, t, n) {
	let r = e.length;
	if (r === 1) return;
	let i = e.map((e) => e.flat()), a = i.map((e) => (w(e, (e) => t[e]) + C(e, (e) => n[e])) / 2), o = w(a);
	for (let e = 0; e < r; e++) {
		let r = o - a[e];
		for (let a of i[e]) t[a] += r, n[a] += r;
	}
}
function Gg(e, t, n) {
	if (e === void 0 && t === Hg) return Xg(Hs);
	if (e != null) {
		if (typeof e == "string") {
			let t = e.startsWith("-"), r = t ? Us : Hs;
			switch ((t ? e.slice(1) : e).toLowerCase()) {
				case "value":
				case n: return Kg(r);
				case "z": return qg(r);
				case "sum": return Jg(r);
				case "appearance": return Yg(r);
				case "inside-out": return Xg(r);
			}
			return Zg(Vc(e));
		}
		if (typeof e == "function") return (e.length === 1 ? Zg : Qg)(e);
		if (Oc(e)) return $g(e);
		throw Error(`invalid order: ${e}`);
	}
}
function Kg(e) {
	return (t, n, r) => (t, n) => e(r[t], r[n]);
}
function qg(e) {
	return (t, n, r, i) => (t, n) => e(i[t], i[n]);
}
function Jg(e) {
	return e_(e, (e, t, n, r) => vt(vl(e), (e) => T(e, (e) => n[e]), (e) => r[e]));
}
function Yg(e) {
	return e_(e, (e, t, n, r) => vt(vl(e), (e) => t[Ct(e, (e) => n[e])], (e) => r[e]));
}
function Xg(t) {
	return e_(t, (t, n, r, i) => {
		let a = vl(t), o = vt(a, (e) => n[Ct(e, (e) => r[e])], (e) => i[e]), s = e(a, (e) => T(e, (e) => r[e]), (e) => i[e]), c = [], l = [], u = 0;
		for (let e of o) u < 0 ? (u += s.get(e), c.push(e)) : (u -= s.get(e), l.push(e));
		return l.reverse().concat(c);
	});
}
function Zg(e) {
	return (t) => {
		let n = Pc(t, e);
		return (e, t) => Hs(n[e], n[t]);
	};
}
function Qg(e) {
	return (t) => Oc(t) ? (n, r) => e(t[n], t[r]) : (n, r) => e(t.get(n), t.get(r));
}
function $g(e) {
	return e_(Hs, () => e);
}
function e_(e, t) {
	return (n, r, i, a) => {
		if (!a) throw Error("missing channel: z");
		let o = new d(t(n, r, i, a).map((e, t) => [e, t]));
		return (t, n) => e(o.get(a[t]), o.get(a[n]));
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/rect.js
function t_(e, { inset: t = 0, insetTop: n = t, insetRight: r = t, insetBottom: i = t, insetLeft: a = t } = {}) {
	e.insetTop = G(n), e.insetRight = G(r), e.insetBottom = G(i), e.insetLeft = G(a);
}
function n_(e, { r: t, rx: n, ry: r, rx1: i = t, ry1: a = t, rx2: o = t, ry2: s = t, rx1y1: c = i === void 0 ? a === void 0 ? 0 : +a : +i, rx1y2: l = i === void 0 ? s === void 0 ? 0 : +s : +i, rx2y1: u = o === void 0 ? a === void 0 ? 0 : +a : +o, rx2y2: d = o === void 0 ? s === void 0 ? 0 : +s : +o } = {}) {
	c || l || u || d ? (e.rx1y1 = c, e.rx1y2 = l, e.rx2y1 = u, e.rx2y2 = d) : (e.rx = $(n, "auto"), e.ry = $(r, "auto"));
}
function r_(e, t, n, r, i, a) {
	let { rx1y1: o, rx1y2: s, rx2y1: c, rx2y2: l } = a;
	typeof t != "function" && (t = Jc(t)), typeof n != "function" && (n = Jc(n)), typeof r != "function" && (r = Jc(r)), typeof i != "function" && (i = Jc(i));
	let u = Math.max(Math.abs(o + c), Math.abs(s + l)), d = Math.max(Math.abs(o + s), Math.abs(c + l));
	e.attr("d", (e) => {
		let a = t(e), f = n(e), p = r(e), m = i(e), h = a > p, g = f > m, _ = h ? p : a, v = h ? a : p, y = g ? m : f, b = g ? f : m, x = Math.min(1, (v - _) / u, (b - y) / d), S = x * (h ? g ? l : c : g ? s : o), C = x * (h ? g ? s : o : g ? l : c), w = x * (h ? g ? o : s : g ? c : l), T = x * (h ? g ? c : l : g ? o : s);
		return `M${_},${y + a_(S, T)}A${S},${S} 0 0 ${S < 0 ? 0 : 1} ${_ + i_(S, T)},${y}H${v - i_(C, w)}A${C},${C} 0 0 ${C < 0 ? 0 : 1} ${v},${y + a_(C, w)}V${b - a_(w, C)}A${w},${w} 0 0 ${w < 0 ? 0 : 1} ${v - i_(w, C)},${b}H${_ + i_(T, S)}A${T},${T} 0 0 ${T < 0 ? 0 : 1} ${_},${b - a_(T, S)}Z`;
	});
}
function i_(e, t) {
	return t < 0 ? e : Math.abs(e);
}
function a_(e, t) {
	return t < 0 ? Math.abs(e) : e;
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/frame.js
var o_ = {
	ariaLabel: "frame",
	fill: "none",
	stroke: "currentColor",
	clip: !1
}, s_ = {
	ariaLabel: "frame",
	fill: null,
	stroke: "currentColor",
	strokeLinecap: "square",
	clip: !1
}, c_ = class extends tm {
	constructor(e = {}) {
		let { anchor: t = null } = e;
		super(Bc, void 0, e, t == null ? o_ : s_), this.anchor = tl(t, "anchor", [
			"top",
			"right",
			"bottom",
			"left"
		]), t_(this, e), t || n_(this, e);
	}
	render(e, t, n, r, i) {
		let { marginTop: a, marginRight: o, marginBottom: s, marginLeft: c, width: l, height: u } = r, { anchor: d, insetTop: f, insetRight: p, insetBottom: m, insetLeft: h } = this, { rx: g, ry: _, rx1y1: v, rx1y2: y, rx2y1: b, rx2y2: x } = this, S = c + h, C = l - o - p, w = a + f, T = u - s - m;
		return Z(d ? "svg:line" : v || y || b || x ? "svg:path" : "svg:rect", i).datum(0).call(Gp, this, r, i).call(Kp, this).call(Rp, this, n).call(Yp, this, {}).call(d === "left" ? (e) => e.attr("x1", S).attr("x2", S).attr("y1", w).attr("y2", T) : d === "right" ? (e) => e.attr("x1", C).attr("x2", C).attr("y1", w).attr("y2", T) : d === "top" ? (e) => e.attr("x1", S).attr("x2", C).attr("y1", w).attr("y2", w) : d === "bottom" ? (e) => e.attr("x1", S).attr("x2", C).attr("y1", T).attr("y2", T) : v || y || b || x ? (e) => e.call(r_, S, w, C, T, this) : (e) => e.attr("x", S).attr("y", w).attr("width", C - S).attr("height", T - w).attr("rx", g).attr("ry", _)).node();
	}
};
function l_(e) {
	return new c_(e);
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/tip.js
var u_ = {
	ariaLabel: "tip",
	fill: "var(--plot-background)",
	stroke: "currentColor"
}, d_ = /* @__PURE__ */ new Set([
	"geometry",
	"href",
	"src",
	"ariaLabel",
	"scales"
]), f_ = class extends tm {
	constructor(e, t = {}) {
		t.tip && (t = {
			...t,
			tip: !1
		}), t.title === void 0 && Fl(e) && Il(e) && (t = {
			...t,
			title: Uc
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
		}, t, u_), this.anchor = Jl(c, "anchor"), this.preferredAnchor = Jl(l, "preferredAnchor"), this.frameAnchor = Yl(v), this.textAnchor = $(b, "middle"), this.textPadding = +S, this.pointerSize = +w, this.pathFilter = W(T), this.lineHeight = +g, this.lineWidth = +_, this.textOverflow = $m(x), this.monospace = !!u, this.fontFamily = W(d), this.fontSize = G(f), this.fontStyle = W(p), this.fontVariant = W(m), this.fontWeight = W(h);
		for (let e in u_) e in this.channels && (this[e] = u_[e]);
		this.splitLines = ph(this), this.clipLine = mh(this), this.format = typeof y == "string" || typeof y == "function" ? { title: y } : { ...y };
	}
	render(e, t, n, r, i) {
		let a = this, { x: o, y: s, fx: c, fy: l } = t, { ownerSVGElement: u, document: d } = i, { anchor: f, monospace: p, lineHeight: m, lineWidth: h } = this, { textPadding: g, pointerSize: _, pathFilter: v } = this, { marginTop: y, marginLeft: b } = r, { x1: x, y1: S, x2: C, y2: w, x: T = x ?? C, y: E = S ?? w } = n, D = c ? c(e.fx) - b : 0, O = l ? l(e.fy) - y : 0, [k, ee] = em(this, r), te = hm(n, k), ne = gm(n, ee), re = p ? fh : dh, ie = re("…"), ae, oe;
		"title" in n ? (ae = __.call(this, { title: n.channels.title }, t), oe = y_) : (ae = __.call(this, n.channels, t), oe = b_);
		let se = Z("svg:g", i).call(Gp, this, r, i).call(ih, this).call(Yp, this, {
			x: T && o,
			y: E && s
		}).call((r) => r.selectAll().data(e).enter().append("g").attr("transform", (e) => `translate(${Math.round(te(e))},${Math.round(ne(e))})`).call(Kp, this).call((e) => e.append("path").attr("filter", v)).call((r) => r.append("text").each(function(r) {
			let i = A(this);
			this.setAttribute("fill", "currentColor"), this.setAttribute("fill-opacity", 1), this.setAttribute("stroke", "none");
			let o = oe.call(a, r, e, ae, t, n);
			if (typeof o == "string") for (let e of a.splitLines(o)) ce(i, { value: a.clipLine(e) });
			else {
				let e = /* @__PURE__ */ new Set();
				for (let t of o) {
					let { label: n = "" } = t;
					n && e.has(n) || (e.add(n), ce(i, t));
				}
			}
		})));
		function ce(e, { label: t, value: n, color: r, opacity: i }) {
			t ??= "", n ??= "";
			let a = r != null || i != null, o, s = h * 100, [c] = hh(t, s, re, ie);
			if (c >= 0) t = t.slice(0, c).trimEnd() + "…", o = n.trim(), n = "";
			else {
				(t || !n && !a) && (n = " " + n);
				let [e] = hh(n, s - re(t), re, ie);
				e >= 0 && (o = n.trim(), n = n.slice(0, e).trimEnd() + "…");
			}
			let l = e.append("tspan").attr("x", 0).attr("dy", `${m}em`).text("​");
			t && l.append("tspan").attr("font-weight", "bold").text(t), n && l.append(() => d.createTextNode(n)), a && l.append("tspan").text(" ■").attr("fill", r).attr("fill-opacity", i).style("user-select", "none"), o && l.append("title").text(o);
		}
		function le() {
			let { width: e, height: t } = r.facet ?? r;
			se.selectChildren().each(function(n) {
				let { x: r, width: i, height: o } = this.getBBox();
				i = Math.round(i), o = Math.round(o);
				let s = f;
				if (s === void 0) {
					let r = te(n) + D, c = ne(n) + O, l = r + i + _ + g * 2 < e, u = r - i - _ - g * 2 > 0, d = c + o + _ + g * 2 < t, f = c - o - _ - g * 2 > 0;
					s = l && u ? d && f ? a.preferredAnchor : f ? "bottom" : "top" : d && f ? l ? "left" : "right" : (l || u) && (d || f) ? `${f ? "bottom" : "top"}-${l ? "left" : "right"}` : a.preferredAnchor;
				}
				let c = this.firstChild, l = this.lastChild;
				if (c.setAttribute("d", g_(s, _, g, i, o)), r) for (let e of l.childNodes) e.setAttribute("x", -r);
				l.setAttribute("y", `${+m_(s, l.childNodes.length, m).toFixed(6)}em`), l.setAttribute("transform", `translate(${h_(s, _, g, i, o)})`);
			}), se.attr("visibility", null);
		}
		return e.length && (se.attr("visibility", "hidden"), u.isConnected ? Promise.resolve().then(le) : typeof requestAnimationFrame < "u" && requestAnimationFrame(le)), se.node();
	}
};
function p_(e, { x: t, y: n, ...r } = {}) {
	return r.frameAnchor === void 0 && ([t, n] = hl(t, n)), new f_(e, {
		...r,
		x: t,
		y: n
	});
}
function m_(e, t, n) {
	return /^top(?:-|$)/.test(e) ? .94 - n : -.29 - t * n;
}
function h_(e, t, n, r, i) {
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
function g_(e, t, n, r, i) {
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
function __(e, t) {
	let n = {}, r = this.format;
	r = v_(r, e, "x"), r = v_(r, e, "y"), this.format = r;
	for (let t in r) {
		let i = r[t];
		if (i !== null && i !== !1) if (t === "fx" || t === "fy") n[t] = !0;
		else {
			let r = Zu(e, t);
			r && (n[t] = r);
		}
	}
	for (let t in e) {
		if (t in n || t in r || d_.has(t) || (t === "x" || t === "y") && e.geometry) continue;
		let i = Zu(e, t);
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
			this.format[e] = (Rl(i) ? Ae : g)(r);
		} else if (r === void 0 || r === !0) {
			let n = t[e];
			this.format[e] = n?.bandwidth ? ug(n, n.domain()) : jp;
		}
	}
	return n;
}
function v_(e, t, n) {
	if (!(n in e)) return e;
	let r = `${n}1`, i = `${n}2`;
	if ((r in e || !(r in t)) && (i in e || !(i in t))) return e;
	let a = Object.entries(e), o = e[n];
	return a.splice(a.findIndex(([e]) => e === n) + 1, 0, [r, o], [i, o]), Object.fromEntries(a);
}
function y_(e, t, { title: n }) {
	return this.format.title(n.value[e], e);
}
function* b_(e, t, n, r, i) {
	for (let a in n) {
		if (a === "fx" || a === "fy") {
			yield {
				label: C_(r, n, a),
				value: this.format[a](t[a], e)
			};
			continue;
		}
		if (a === "x1" && "x2" in n || a === "y1" && "y2" in n) continue;
		let o = n[a];
		if (a === "x2" && "x1" in n) yield {
			label: S_(r, n, "x"),
			value: x_(this.format.x2, n.x1, o, e)
		};
		else if (a === "y2" && "y1" in n) yield {
			label: S_(r, n, "y"),
			value: x_(this.format.y2, n.y1, o, e)
		};
		else {
			let t = o.value[e], s = o.scale;
			if (!Vs(t) && s == null) continue;
			yield {
				label: C_(r, n, a),
				value: this.format[a](t, e),
				color: s === "color" ? i[a][e] : null,
				opacity: s === "opacity" ? i[a][e] : null
			};
		}
	}
}
function x_(e, t, n, r) {
	return n.hint?.length ? `${e(n.value[r] - t.value[r], r)}` : `${e(t.value[r], r)}–${e(n.value[r], r)}`;
}
function S_(e, t, n) {
	let r = C_(e, t, `${n}1`, n), i = C_(e, t, `${n}2`, n);
	return r === i ? r : `${r}–${i}`;
}
function C_(e, t, n, r = n) {
	let i = t[n], a = e[i?.scale ?? n];
	return String(a?.label ?? i?.label ?? r);
}
//#endregion
//#region node_modules/@observablehq/plot/src/plot.js
function w_(e = {}) {
	let { facet: t, style: n, title: r, subtitle: i, caption: a, ariaLabel: o, ariaDescription: s } = e, c = Qp(e.className), l = e.marks === void 0 ? [] : D_(e.marks);
	l.push(...R_(l));
	let u = F_(t, e), d = /* @__PURE__ */ new Map();
	for (let t of l) {
		let n = I_(t, u, e);
		n && d.set(t, n);
	}
	let f = /* @__PURE__ */ new Map();
	u && N_(f, [u], e), N_(f, d, e);
	let p = D_(z_(l, f, e));
	for (let t of p) {
		let n = I_(t, u, e);
		n && d.set(t, n);
	}
	l.unshift(...p);
	let m = Rf(f, e);
	if (m !== void 0) {
		let e = u ? op(m, u) : void 0;
		for (let t of l) {
			if (t.facet === null || t.facet === "super") continue;
			let n = d.get(t);
			n !== void 0 && (n.facetsIndex = t.fx != null || t.fy != null ? op(m, n) : e);
		}
		let t = /* @__PURE__ */ new Set();
		for (let { facetsIndex: e } of d.values()) e?.forEach((e, n) => {
			e?.length > 0 && t.add(n);
		});
		m.forEach(0 < t.size && t.size < m.length ? (e, n) => e.empty = !t.has(n) : (e) => e.empty = !1);
		for (let e of l) if (e.facet === "exclude") {
			let t = d.get(e);
			t !== void 0 && (t.facetsIndex = Hf(t.facetsIndex));
		}
	}
	for (let t of Y.keys()) dl(e[t]) && t !== "fx" && t !== "fy" && f.set(t, []);
	let h = /* @__PURE__ */ new Map();
	for (let t of l) {
		if (h.has(t)) throw Error("duplicate mark; each mark must be unique");
		let { facetsIndex: n, channels: r } = d.get(t) ?? {}, { data: i, facets: a, channels: o } = t.initialize(n, r, e);
		A_(o, e), h.set(t, {
			data: i,
			facets: a,
			channels: o
		});
	}
	let g = ff(N_(f, h, e), e), _ = sm(g, l, e);
	mf(g, _);
	let v = pf(g), { fx: y, fy: b } = v, x = y || b ? vf(g, _) : _, S = y || b ? X_(v, _) : _, C = Sp(e), w = C.document, T = ee("svg").call(w.documentElement), E = T;
	C.ownerSVGElement = T, C.className = c, C.projection = up(e, x), C.path = function() {
		return ca(this.projection ?? xp(v));
	}, C.filterFacets = (e, t) => op(m, {
		channels: t,
		groups: Bf(e, t)
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
			M_(o), Object.assign(n.channels, o);
			for (let t of Object.values(o)) {
				let { scale: n } = t;
				n != null && !uu(Y.get(n)) && (j_(t, e), D.add(n));
			}
			(r != null || a != null) && d.set(t, !0);
		}
	}
	if (D.size) {
		let t = /* @__PURE__ */ new Map();
		N_(t, h, e, (e) => D.has(e)), N_(f, h, e, (e) => D.has(e));
		let n = Y_(ff(t, e), g), { scales: r, ...i } = pf(n);
		Object.assign(g, n), Object.assign(v, i), Object.assign(v.scales, r);
	}
	let O, k;
	m !== void 0 && (O = {
		x: y?.domain(),
		y: b?.domain()
	}, m = zf(m, O), k = Vf(y, b, _));
	for (let [e, t] of h) t.values = e.scale(t.channels, v, C);
	let { width: te, height: ne } = _;
	A(T).attr("class", c).attr("fill", "currentColor").attr("font-family", "system-ui, sans-serif").attr("font-size", 10).attr("text-anchor", "middle").attr("width", te).attr("height", ne).attr("viewBox", `0 0 ${te} ${ne}`).attr("aria-label", o).attr("aria-description", s).call((e) => e.append("style").text(`:where(.${c}) {
  --plot-background: white;
  display: block;
  height: auto;
  height: intrinsic;
  max-width: 100%;
}
:where(.${c} text),
:where(.${c} tspan) {
  white-space: pre;
}`)).call($p, n);
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
					!i && o === r[0] && (o = bl(o)), o.fx = a.x, o.fy = a.y, o.fi = a.i;
				}
				let s = e.render(o, v, n, x, C);
				if (s != null) {
					(i ??= A(T).append("g")).append(() => s).datum(a);
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
	let re = Ag(g, C, e), { figure: ie = r != null || i != null || a != null || re.length > 0 } = e;
	ie && (E = w.createElement("figure"), E.className = `${c}-figure`, E.style.maxWidth = "initial", r != null && E.append(T_(w, r, "h2")), i != null && E.append(T_(w, i, "h3")), E.append(...re, T), a != null && E.append(E_(w, a)), "value" in T && (E.value = T.value, delete T.value)), E.scale = If(v.scales), E.legend = Tg(g, C, e);
	let ae = zd();
	return ae > 0 && A(T).append("text").attr("x", te).attr("y", 20).attr("dy", "-1em").attr("text-anchor", "end").attr("font-family", "initial").text("⚠️").append("title").text(`${ae.toLocaleString("en-US")} warning${ae === 1 ? "" : "s"}. Please check the console.`), E;
}
function T_(e, t, n) {
	if (t.ownerDocument) return t;
	let r = e.createElement(n);
	return r.append(t), r;
}
function E_(e, t) {
	let n = e.createElement("figcaption");
	return n.append(t), n;
}
function D_(e) {
	return e.flat(Infinity).filter((e) => e != null).map(O_);
}
function O_(e) {
	return typeof e.render == "function" ? e : new k_(e);
}
var k_ = class extends tm {
	constructor(e) {
		if (typeof e != "function") throw TypeError("invalid mark; missing render function");
		super(), this.render = e;
	}
	render() {}
};
function A_(e, t) {
	for (let n in e) j_(e[n], t);
	return e;
}
function j_(e, t) {
	let { scale: n, transform: r = !0 } = e;
	if (n == null || !r) return;
	let { type: i, percent: a, interval: o, transform: s = a ? (e) => e == null ? NaN : e * 100 : Dl(o, i) } = t[n] ?? {};
	s != null && (e.value = q(e.value, s), e.transform = !1);
}
function M_(e) {
	for (let t in e) Hu(t, e[t]);
}
function N_(e, t, n, r = Gc) {
	for (let { channels: i } of t.values()) for (let t in i) {
		let a = i[t], { scale: o } = a;
		if (o != null && r(o)) if (o === "projection") {
			if (!vp(n)) {
				let t = n.x?.domain === void 0, r = n.y?.domain === void 0;
				if (t || r) {
					let [n, i] = bp(a);
					t && P_(e, "x", n), r && P_(e, "y", i);
				}
			}
		} else P_(e, o, a);
	}
	return e;
}
function P_(e, t, n) {
	let r = e.get(t);
	r === void 0 ? e.set(t, [n]) : r.push(n);
}
function F_(e, t) {
	if (e == null) return;
	let { x: n, y: r } = e;
	if (n == null && r == null) return;
	let i = rl(e.data);
	if (i == null) throw Error("missing facet data");
	let a = {};
	return n != null && (a.fx = zu(i, {
		value: n,
		scale: "fx"
	})), r != null && (a.fy = zu(i, {
		value: r,
		scale: "fy"
	})), A_(a, t), {
		channels: a,
		groups: Bf(i, a),
		data: e.data
	};
}
function I_(e, t, n) {
	if (e.facet === null || e.facet === "super") return;
	let { fx: r, fy: i } = e;
	if (r != null || i != null) {
		let t = rl(e.data ?? r ?? i);
		if (t === void 0) throw Error(`missing facet data in ${e.ariaLabel}`);
		if (t === null) return;
		let a = {};
		return r != null && (a.fx = zu(t, {
			value: r,
			scale: "fx"
		})), i != null && (a.fy = zu(t, {
			value: i,
			scale: "fy"
		})), A_(a, n), {
			channels: a,
			groups: Bf(t, a)
		};
	}
	if (t === void 0) return;
	let { channels: a, groups: o, data: s } = t;
	if (e.facet !== "auto" || e.data === s) return {
		channels: a,
		groups: o
	};
	s.length > 0 && (o.size > 1 || o.size === 1 && a.fx && a.fy && [...o][0][1].size > 1) && _l(rl(e.data)) === _l(s) && Bd(`Warning: the ${e.ariaLabel} mark appears to use faceted data, but isn’t faceted. The mark data has the same length as the facet data and the mark facet option is "auto", but the mark data and facet data are distinct. If this mark should be faceted, set the mark facet option to true; otherwise, suppress this warning by setting the mark facet option to false.`);
}
function L_(e, t = {}) {
	return vu({
		...t,
		x: null,
		y: null
	}, (t, n, r, i, a, o) => o.getMarkState(e));
}
function R_(e) {
	let t = [];
	for (let n of e) {
		let e = n.tip;
		if (e) {
			e === !0 ? e = {} : typeof e == "string" && (e = { pointer: e });
			let { pointer: r, preferredAnchor: i } = e;
			r = /^x$/i.test(r) ? pm : /^y$/i.test(r) ? mm : fm, e = r(L_(n, e)), e.title = null, i === void 0 && (e.preferredAnchor = r === mm ? "left" : "bottom");
			let a = p_(n.data, e);
			a.facet = n.facet, a.facetAnchor = n.facetAnchor, t.push(a);
		}
	}
	return t;
}
function z_(e, t, n) {
	let { projection: r, x: i = {}, y: a = {}, fx: o = {}, fy: s = {}, axis: c, grid: l, facet: u = {}, facet: { axis: d = c, grid: f } = u, x: { axis: p = c, grid: m = p === null ? null : l } = i, y: { axis: h = c, grid: g = h === null ? null : l } = a, fx: { axis: _ = d, grid: v = _ === null ? null : f } = o, fy: { axis: y = d, grid: b = y === null ? null : f } = s } = n;
	(r || !dl(i) && !J_("x", e)) && (p = m = null), (r || !dl(a) && !J_("y", e)) && (h = g = null), t.has("fx") || (_ = v = null), t.has("fy") || (y = b = null), p === void 0 && (p = !q_(e, "x")), h === void 0 && (h = !q_(e, "y")), _ === void 0 && (_ = !q_(e, "fx")), y === void 0 && (y = !q_(e, "fy")), p === !0 && (p = "bottom"), h === !0 && (h = "left"), _ === !0 && (_ = p === "top" || p === null ? "bottom" : "top"), y === !0 && (y = h === "right" || h === null ? "left" : "right");
	let x = [];
	return V_(x, b, eg, s), B_(x, y, Wh, "right", "left", u, s), V_(x, v, ng, o), B_(x, _, Kh, "top", "bottom", u, o), V_(x, g, $h, a), B_(x, h, Uh, "left", "right", n, a), V_(x, m, tg, i), B_(x, p, Gh, "bottom", "top", n, i), x;
}
function B_(e, t, n, r, i, a, o) {
	if (!t) return;
	let s = H_(t);
	o = U_(s ? r : t, a, o);
	let { line: c } = o;
	(n === Uh || n === Gh) && c && !Kl(c) && e.push(l_(W_(o))), e.push(n(o)), s && e.push(n({
		...o,
		anchor: i,
		label: null
	}));
}
function V_(e, t, n, r) {
	!t || Kl(t) || e.push(n(G_(t, r)));
}
function H_(e) {
	return /^\s*both\s*$/i.test(e);
}
function U_(e, t, { line: n = t.line, ticks: r, tickSize: i, tickSpacing: a, tickPadding: o, tickFormat: s, tickRotate: c, fontVariant: l, ariaLabel: u, ariaDescription: d, label: f = t.label, labelAnchor: p, labelArrow: m = t.labelArrow, labelOffset: h }) {
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
function W_(e) {
	let { anchor: t, line: n } = e;
	return {
		anchor: t,
		facetAnchor: t + "-empty",
		stroke: n === !0 ? void 0 : n
	};
}
function G_(e, { stroke: t = Wl(e) ? e : void 0, ticks: n = K_(e) ? e : void 0, tickSpacing: r, ariaLabel: i, ariaDescription: a }) {
	return {
		stroke: t,
		ticks: n,
		tickSpacing: r,
		ariaLabel: i,
		ariaDescription: a
	};
}
function K_(e) {
	switch (typeof e) {
		case "number": return !0;
		case "string": return !Wl(e);
	}
	return Fl(e) || typeof e?.range == "function";
}
function q_(e, t) {
	let n = `${t}-axis `;
	return e.some((e) => e.ariaLabel?.startsWith(n));
}
function J_(e, t) {
	for (let n of t) for (let t in n.channels) {
		let { scale: r } = n.channels[t];
		if (r === e || r === "projection") return !0;
	}
	return !1;
}
function Y_(e, t) {
	for (let n in e) {
		let r = e[n], i = t[n];
		r.label === void 0 && i && (r.label = i.label);
	}
	return e;
}
function X_({ fx: e, fy: t }, n) {
	let { marginTop: r, marginRight: i, marginBottom: a, marginLeft: o, width: s, height: c } = _f(n), l = e && Z_(e), u = t && Z_(t);
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
function Z_(e) {
	let t = e.domain();
	if (t.length === 0) return [0, e.bandwidth()];
	let n = e(t[0]), r = e(t[t.length - 1]);
	return r < n && ([n, r] = [r, n]), [n, r + e.bandwidth()];
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/bar.js
var Q_ = { ariaLabel: "bar" }, $_ = class extends tm {
	constructor(e, t, n = {}, r = Q_) {
		super(e, t, n, r), t_(this, n), n_(this, n);
	}
	render(e, t, n, r, i) {
		let { rx: a, ry: o, rx1y1: s, rx1y2: c, rx2y1: l, rx2y2: u } = this, d = this._x(t, n, r), f = this._y(t, n, r), p = this._width(t, n, r), m = this._height(t, n, r);
		return Z("svg:g", i).call(Gp, this, r, i).call(this._transform, this, t).call((t) => t.selectAll().data(e).enter().call(s || c || l || u ? (e) => e.append("path").call(Kp, this).call(r_, d, f, ev(d, p), ev(f, m), this).call(Rp, this, n) : (e) => e.append("rect").call(Kp, this).attr("x", d).attr("width", p).attr("y", f).attr("height", m).call(Q, "rx", a).call(Q, "ry", o).call(Rp, this, n))).node();
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
function ev(e, t) {
	return typeof e == "function" && typeof t == "function" ? (n) => e(n) + t(n) : typeof e == "function" ? (n) => e(n) + t : typeof t == "function" ? (n) => e + t(n) : e + t;
}
var tv = class extends $_ {
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
		e.call(Yp, t, { y: n }, 0, 0);
	}
	_y({ y: e }, { y1: t, y2: n }, { marginTop: r }) {
		let { insetTop: i } = this;
		return Nf(e) ? r + i : (e) => Math.min(t[e], n[e]) + i;
	}
	_height({ y: e }, { y1: t, y2: n }, { marginTop: r, marginBottom: i, height: a }) {
		let { insetTop: o, insetBottom: s } = this;
		return Nf(e) ? a - r - i - o - s : (e) => Math.max(0, Math.abs(n[e] - t[e]) - o - s);
	}
};
function nv(e, t = {}) {
	return ll(t) || (t = {
		...t,
		x: Hc,
		y2: Uc
	}), new tv(e, Pg(Bm(jg(t))));
}
//#endregion
//#region node_modules/@observablehq/plot/src/index.js
tm.prototype.plot = function({ marks: e = [], ...t } = {}) {
	return w_({
		...t,
		marks: [...e, this]
	});
};
//#endregion
//#region src/observablePlot.ts
var rv = 640, iv = 400;
function av(e, t, n) {
	function r() {
		n.replaceChildren();
		let r = n.clientWidth || rv, i = n.clientHeight || iv, a;
		if (e === "bar" && (a = w_({
			fx: { label: null },
			height: i,
			marks: [nv(ov(t), {
				fx: "category",
				tip: !0,
				x: "seriesName",
				y: "value",
				fill: "seriesName"
			}), qm([0])],
			width: r,
			x: { axis: null },
			y: { grid: !0 }
		})), n.append(a), !(a instanceof SVGSVGElement)) throw Error("Expected Observable Plot to render an SVG element.");
		return a;
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
function ov(e) {
	let t = [];
	for (let n of e.series) for (let [r, i] of e.categories.entries()) t.push({
		category: i,
		seriesName: n.name,
		value: n.values[r] ?? 0
	});
	return t;
}
//#endregion
export { av as renderObservablePlot };

//# sourceMappingURL=observablePlot-C7764aFq.js.map