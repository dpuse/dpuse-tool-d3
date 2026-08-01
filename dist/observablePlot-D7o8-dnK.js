import { f as e, t, u as n } from "./select-BIuoFcZG.js";
import { O as r, _ as i, a, b as o, c as s, d as c, f as l, g as u, h as d, l as f, o as p, p as m, s as h, v as g, y as _ } from "./src-DnMaAyIP.js";
import { $ as v, A as y, B as b, C as x, D as S, E as C, G as w, H as T, I as E, J as D, K as O, L as k, M as A, O as j, P as ee, Q as te, R as ne, S as re, T as ie, U as ae, V as oe, W as M, X as se, Y as ce, Z as le, _ as ue, a as de, at as fe, b as pe, c as me, ct as he, d as ge, dt as _e, et as ve, ft as ye, g as be, h as xe, ht as Se, it as Ce, j as we, k as Te, l as Ee, lt as De, m as Oe, mt as ke, nt as Ae, ot as je, p as Me, pt as Ne, q as Pe, rt as Fe, s as Ie, st as Le, t as Re, tt as ze, u as N, ut as Be, v as Ve, w as He, x as Ue, y as We, z as Ge } from "./axis-B7xlWKkC.js";
import { n as Ke, r as qe, t as Je } from "./sum-BAZU479z.js";
import "./src-B7SGbtRQ.js";
import { n as Ye } from "./path-Bt1sPr2f.js";
//#region node_modules/d3-array/src/cross.js
function Xe(e) {
	return e.length | 0;
}
function Ze(e) {
	return !(e > 0);
}
function Qe(e) {
	return typeof e != "object" || "length" in e ? e : Array.from(e);
}
function $e(e) {
	return (t) => e(...t);
}
function et(...e) {
	let t = typeof e[e.length - 1] == "function" && $e(e.pop());
	e = e.map(Qe);
	let n = e.map(Xe), r = e.length - 1, i = Array(r + 1).fill(0), a = [];
	if (r < 0 || n.some(Ze)) return a;
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
function tt(e, t) {
	var n = 0, r = 0;
	return Float64Array.from(e, t === void 0 ? (e) => n += +e || 0 : (i) => n += +t(i, r++, e) || 0);
}
//#endregion
//#region node_modules/d3-array/src/variance.js
function nt(e, t) {
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
function rt(e, t) {
	let n = nt(e, t);
	return n && Math.sqrt(n);
}
//#endregion
//#region node_modules/d3-array/src/extent.js
function at(e, t) {
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
var ot = class {
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
//#region node_modules/d3-array/src/identity.js
function st(e) {
	return e;
}
//#endregion
//#region node_modules/d3-array/src/group.js
function ct(e, ...t) {
	return dt(e, st, st, t);
}
function lt(e, t, ...n) {
	return dt(e, st, t, n);
}
function ut(e, t, ...n) {
	return dt(e, Array.from, t, n);
}
function dt(e, t, n, r) {
	return (function e(i, a) {
		if (a >= r.length) return n(i);
		let o = new k(), s = r[a++], c = -1;
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
function ft(e, t) {
	return Array.from(t, (t) => e[t]);
}
//#endregion
//#region node_modules/d3-array/src/sort.js
function pt(e, ...t) {
	if (typeof e[Symbol.iterator] != "function") throw TypeError("values is not iterable");
	e = Array.from(e);
	let [n] = t;
	if (n && n.length !== 2 || t.length > 1) {
		let r = Uint32Array.from(e, (e, t) => t);
		return t.length > 1 ? (t = t.map((t) => e.map(t)), r.sort((e, n) => {
			for (let r of t) {
				let t = ht(r[e], r[n]);
				if (t) return t;
			}
		})) : (n = e.map(n), r.sort((e, t) => ht(n[e], n[t]))), ft(e, r);
	}
	return e.sort(mt(n));
}
function mt(e = M) {
	if (e === M) return ht;
	if (typeof e != "function") throw TypeError("compare is not a function");
	return (t, n) => {
		let r = e(t, n);
		return r || r === 0 ? r : (e(n, n) === 0) - (e(t, t) === 0);
	};
}
function ht(e, t) {
	return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : +(e > t));
}
//#endregion
//#region node_modules/d3-array/src/groupSort.js
function gt(e, t, n) {
	return (t.length === 2 ? pt(ct(e, n), (([e, n], [r, i]) => t(n, i) || M(e, r))) : pt(lt(e, t, n), (([e, t], [n, r]) => M(t, r) || M(e, n)))).map(([e]) => e);
}
//#endregion
//#region node_modules/d3-array/src/maxIndex.js
function _t(e, t) {
	let n, r = -1, i = -1;
	if (t === void 0) for (let t of e) ++i, t != null && (n < t || n === void 0 && t >= t) && (n = t, r = i);
	else for (let a of e) (a = t(a, ++i, e)) != null && (n < a || n === void 0 && a >= a) && (n = a, r = i);
	return r;
}
//#endregion
//#region node_modules/d3-array/src/minIndex.js
function vt(e, t) {
	let n, r = -1, i = -1;
	if (t === void 0) for (let t of e) ++i, t != null && (n > t || n === void 0 && t >= t) && (n = t, r = i);
	else for (let a of e) (a = t(a, ++i, e)) != null && (n > a || n === void 0 && a >= a) && (n = a, r = i);
	return r;
}
//#endregion
//#region node_modules/d3-array/src/quickselect.js
function yt(e, t, n = 0, r = Infinity, i) {
	if (t = Math.floor(t), n = Math.floor(Math.max(0, n)), r = Math.floor(Math.min(e.length - 1, r)), !(n <= t && t <= r)) return e;
	for (i = i === void 0 ? ht : mt(i); r > n;) {
		if (r - n > 600) {
			let a = r - n + 1, o = t - n + 1, s = Math.log(a), c = .5 * Math.exp(2 * s / 3), l = .5 * Math.sqrt(s * c * (a - c) / a) * (o - a / 2 < 0 ? -1 : 1), u = Math.max(n, Math.floor(t - o * c / a + l)), d = Math.min(r, Math.floor(t + (a - o) * c / a + l));
			yt(e, t, u, d, i);
		}
		let a = e[t], o = n, s = r;
		for (bt(e, n, t), i(e[r], a) > 0 && bt(e, n, r); o < s;) {
			for (bt(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
			for (; i(e[s], a) > 0;) --s;
		}
		i(e[n], a) === 0 ? bt(e, n, s) : (++s, bt(e, s, r)), s <= t && (n = s + 1), t <= s && (r = s - 1);
	}
	return e;
}
function bt(e, t, n) {
	let r = e[t];
	e[t] = e[n], e[n] = r;
}
//#endregion
//#region node_modules/d3-array/src/greatest.js
function xt(e, t = M) {
	let n, r = !1;
	if (t.length === 1) {
		let i;
		for (let a of e) {
			let e = t(a);
			(r ? M(e, i) > 0 : M(e, e) === 0) && (n = a, i = e, r = !0);
		}
	} else for (let i of e) (r ? t(i, n) > 0 : t(i, i) === 0) && (n = i, r = !0);
	return n;
}
//#endregion
//#region node_modules/d3-array/src/quantile.js
function St(e, t, n) {
	if (e = Float64Array.from(oe(e, n)), !(!(r = e.length) || isNaN(t = +t))) {
		if (t <= 0 || r < 2) return Ke(e);
		if (t >= 1) return qe(e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = qe(yt(e, a).subarray(0, a + 1));
		return o + (Ke(e.subarray(a + 1)) - o) * (i - a);
	}
}
function Ct(e, t, n = b) {
	if (!(!(r = e.length) || isNaN(t = +t))) {
		if (t <= 0 || r < 2) return +n(e[0], 0, e);
		if (t >= 1) return +n(e[r - 1], r - 1, e);
		var r, i = (r - 1) * t, a = Math.floor(i), o = +n(e[a], a, e);
		return o + (+n(e[a + 1], a + 1, e) - o) * (i - a);
	}
}
//#endregion
//#region node_modules/d3-array/src/mean.js
function wt(e, t) {
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
function Tt(e, t) {
	return St(e, .5, t);
}
//#endregion
//#region node_modules/d3-array/src/merge.js
function* Et(e) {
	for (let t of e) yield* t;
}
function Dt(e) {
	return Array.from(Et(e));
}
//#endregion
//#region node_modules/d3-array/src/mode.js
function Ot(e, t) {
	let n = new k();
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
function kt(e, t = At) {
	let n = [], r, i = !1;
	for (let a of e) i && n.push(t(r, a)), r = a, i = !0;
	return n;
}
function At(e, t) {
	return [e, t];
}
//#endregion
//#region node_modules/d3-array/src/range.js
function jt(e, t, n) {
	e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
	for (var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, a = Array(i); ++r < i;) a[r] = e + r * n;
	return a;
}
//#endregion
//#region node_modules/d3-array/src/reverse.js
function Mt(e) {
	if (typeof e[Symbol.iterator] != "function") throw TypeError("values is not iterable");
	return Array.from(e).reverse();
}
//#endregion
//#region node_modules/d3-scale/src/band.js
function Nt() {
	var e = Te().unknown(void 0), t = e.domain, n = e.range, r = 0, i = 1, a, o, s = !1, c = 0, l = 0, u = .5;
	delete e.unknown;
	function d() {
		var e = t().length, d = i < r, f = d ? i : r, p = d ? r : i;
		a = (p - f) / Math.max(1, e - c + l * 2), s && (a = Math.floor(a)), f += (p - f - a * (e - c)) * u, o = a * (1 - c), s && (f = Math.round(f), o = Math.round(o));
		var m = jt(e).map(function(e) {
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
		return Nt(t(), [r, i]).round(s).paddingInner(c).paddingOuter(l).align(u);
	}, we.apply(d(), arguments);
}
function Pt(e) {
	var t = e.copy;
	return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
		return Pt(t());
	}, e;
}
function Ft() {
	return Pt(Nt.apply(null, arguments).paddingInner(1));
}
//#endregion
//#region node_modules/d3-color/src/math.js
var It = Math.PI / 180, Lt = 180 / Math.PI, Rt = 18, zt = .96422, Bt = 1, Vt = .82521, Ht = 4 / 29, Ut = 6 / 29, Wt = 3 * Ut * Ut, Gt = Ut * Ut * Ut;
function Kt(e) {
	if (e instanceof Jt) return new Jt(e.l, e.a, e.b, e.opacity);
	if (e instanceof tn) return nn(e);
	e instanceof l || (e = g(e));
	var t = Qt(e.r), n = Qt(e.g), r = Qt(e.b), i = Yt((.2225045 * t + .7168786 * n + .0606169 * r) / Bt), a, o;
	return t === n && n === r ? a = o = i : (a = Yt((.4360747 * t + .3850649 * n + .1430804 * r) / zt), o = Yt((.0139322 * t + .0971045 * n + .7141733 * r) / Vt)), new Jt(116 * i - 16, 500 * (a - i), 200 * (i - o), e.opacity);
}
function qt(e, t, n, r) {
	return arguments.length === 1 ? Kt(e) : new Jt(e, t, n, r ?? 1);
}
function Jt(e, t, n, r) {
	this.l = +e, this.a = +t, this.b = +n, this.opacity = +r;
}
_(Jt, qt, o(c, {
	brighter(e) {
		return new Jt(this.l + Rt * (e ?? 1), this.a, this.b, this.opacity);
	},
	darker(e) {
		return new Jt(this.l - Rt * (e ?? 1), this.a, this.b, this.opacity);
	},
	rgb() {
		var e = (this.l + 16) / 116, t = isNaN(this.a) ? e : e + this.a / 500, n = isNaN(this.b) ? e : e - this.b / 200;
		return t = zt * Xt(t), e = Bt * Xt(e), n = Vt * Xt(n), new l(Zt(3.1338561 * t - 1.6168667 * e - .4906146 * n), Zt(-.9787684 * t + 1.9161415 * e + .033454 * n), Zt(.0719453 * t - .2289914 * e + 1.4052427 * n), this.opacity);
	}
}));
function Yt(e) {
	return e > Gt ? e ** (1 / 3) : e / Wt + Ht;
}
function Xt(e) {
	return e > Ut ? e * e * e : Wt * (e - Ht);
}
function Zt(e) {
	return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055);
}
function Qt(e) {
	return (e /= 255) <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;
}
function $t(e) {
	if (e instanceof tn) return new tn(e.h, e.c, e.l, e.opacity);
	if (e instanceof Jt || (e = Kt(e)), e.a === 0 && e.b === 0) return new tn(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
	var t = Math.atan2(e.b, e.a) * Lt;
	return new tn(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
}
function en(e, t, n, r) {
	return arguments.length === 1 ? $t(e) : new tn(e, t, n, r ?? 1);
}
function tn(e, t, n, r) {
	this.h = +e, this.c = +t, this.l = +n, this.opacity = +r;
}
function nn(e) {
	if (isNaN(e.h)) return new Jt(e.l, 0, 0, e.opacity);
	var t = e.h * It;
	return new Jt(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
}
_(tn, en, o(c, {
	brighter(e) {
		return new tn(this.h, this.c, this.l + Rt * (e ?? 1), this.opacity);
	},
	darker(e) {
		return new tn(this.h, this.c, this.l - Rt * (e ?? 1), this.opacity);
	},
	rgb() {
		return nn(this).rgb();
	}
}));
//#endregion
//#region node_modules/d3-color/src/cubehelix.js
var rn = -.14861, an = 1.78277, on = -.29227, sn = -.90649, cn = 1.97294, ln = cn * sn, un = cn * an, dn = an * on - sn * rn;
function fn(e) {
	if (e instanceof mn) return new mn(e.h, e.s, e.l, e.opacity);
	e instanceof l || (e = g(e));
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = (dn * r + ln * t - un * n) / (dn + ln - un), a = r - i, o = (cn * (n - i) - on * a) / sn, s = Math.sqrt(o * o + a * a) / (cn * i * (1 - i)), c = s ? Math.atan2(o, a) * Lt - 120 : NaN;
	return new mn(c < 0 ? c + 360 : c, s, i, e.opacity);
}
function pn(e, t, n, r) {
	return arguments.length === 1 ? fn(e) : new mn(e, t, n, r ?? 1);
}
function mn(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
_(mn, pn, o(c, {
	brighter(e) {
		return e = e == null ? m : m ** +e, new mn(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? d : d ** +e, new mn(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = isNaN(this.h) ? 0 : (this.h + 120) * It, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), r = Math.cos(e), i = Math.sin(e);
		return new l(255 * (t + n * (rn * r + an * i)), 255 * (t + n * (on * r + sn * i)), 255 * (t + cn * r * n), this.opacity);
	}
}));
//#endregion
//#region node_modules/d3-interpolate/src/hsl.js
function hn(e) {
	return function(t, n) {
		var r = e((t = u(t)).h, (n = u(n)).h), i = f(t.s, n.s), a = f(t.l, n.l), o = f(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.s = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var gn = hn(s);
//#endregion
//#region node_modules/d3-interpolate/src/lab.js
function _n(e, t) {
	var n = f((e = qt(e)).l, (t = qt(t)).l), r = f(e.a, t.a), i = f(e.b, t.b), a = f(e.opacity, t.opacity);
	return function(t) {
		return e.l = n(t), e.a = r(t), e.b = i(t), e.opacity = a(t), e + "";
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/hcl.js
function vn(e) {
	return function(t, n) {
		var r = e((t = en(t)).h, (n = en(n)).h), i = f(t.c, n.c), a = f(t.l, n.l), o = f(t.opacity, n.opacity);
		return function(e) {
			return t.h = r(e), t.c = i(e), t.l = a(e), t.opacity = o(e), t + "";
		};
	};
}
var yn = vn(s);
//#endregion
//#region node_modules/d3-interpolate/src/cubehelix.js
function bn(e) {
	return (function t(n) {
		n = +n;
		function r(t, r) {
			var i = e((t = pn(t)).h, (r = pn(r)).h), a = f(t.s, r.s), o = f(t.l, r.l), s = f(t.opacity, r.opacity);
			return function(e) {
				return t.h = i(e), t.s = a(e), t.l = o(e ** +n), t.opacity = s(e), t + "";
			};
		}
		return r.gamma = t, r;
	})(1);
}
bn(s);
var xn = bn(f);
//#endregion
//#region node_modules/d3-interpolate/src/piecewise.js
function Sn(e, t) {
	t === void 0 && (t = e, e = S);
	for (var n = 0, r = t.length - 1, i = t[0], a = Array(r < 0 ? 0 : r); n < r;) a[n] = e(i, i = t[++n]);
	return function(e) {
		var t = Math.max(0, Math.min(r - 1, Math.floor(e *= r)));
		return a[t](e - t);
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/quantize.js
function Cn(e, t) {
	for (var n = Array(t), r = 0; r < t; ++r) n[r] = e(r / (t - 1));
	return n;
}
//#endregion
//#region node_modules/d3-scale/src/identity.js
function wn(e) {
	var t;
	function n(e) {
		return e == null || isNaN(e = +e) ? t : e;
	}
	return n.invert = n, n.domain = n.range = function(t) {
		return arguments.length ? (e = Array.from(t, ie), n) : e.slice();
	}, n.unknown = function(e) {
		return arguments.length ? (t = e, n) : t;
	}, n.copy = function() {
		return wn(e).unknown(t);
	}, e = arguments.length ? Array.from(e, ie) : [0, 1], pe(n);
}
//#endregion
//#region node_modules/d3-scale/src/pow.js
function Tn(e) {
	return function(t) {
		return t < 0 ? -((-t) ** +e) : t ** +e;
	};
}
function En(e) {
	return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Dn(e) {
	return e < 0 ? -e * e : e * e;
}
function On(e) {
	var t = e(x, x), n = 1;
	function r() {
		return n === 1 ? e(x, x) : n === .5 ? e(En, Dn) : e(Tn(n), Tn(1 / n));
	}
	return t.exponent = function(e) {
		return arguments.length ? (n = +e, r()) : n;
	}, pe(t);
}
function kn() {
	var e = On(He());
	return e.copy = function() {
		return re(e, kn()).exponent(e.exponent());
	}, we.apply(e, arguments), e;
}
//#endregion
//#region node_modules/d3-scale/src/quantile.js
function An() {
	var e = [], t = [], n = [], r;
	function i() {
		var r = 0, i = Math.max(1, t.length);
		for (n = Array(i - 1); ++r < i;) n[r - 1] = Ct(e, r / i);
		return a;
	}
	function a(e) {
		return e == null || isNaN(e = +e) ? r : t[Ge(n, e)];
	}
	return a.invertExtent = function(r) {
		var i = t.indexOf(r);
		return i < 0 ? [NaN, NaN] : [i > 0 ? n[i - 1] : e[0], i < n.length ? n[i] : e[e.length - 1]];
	}, a.domain = function(t) {
		if (!arguments.length) return e.slice();
		e = [];
		for (let n of t) n != null && !isNaN(n = +n) && e.push(n);
		return e.sort(M), i();
	}, a.range = function(e) {
		return arguments.length ? (t = Array.from(e), i()) : t.slice();
	}, a.unknown = function(e) {
		return arguments.length ? (r = e, a) : r;
	}, a.quantiles = function() {
		return n.slice();
	}, a.copy = function() {
		return An().domain(e).range(t).unknown(r);
	}, we.apply(a, arguments);
}
//#endregion
//#region node_modules/d3-scale/src/threshold.js
function jn() {
	var e = [.5], t = [0, 1], n, r = 1;
	function i(i) {
		return i != null && i <= i ? t[Ge(e, i, 0, r)] : n;
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
		return jn().domain(e).range(t).unknown(n);
	}, we.apply(i, arguments);
}
//#endregion
//#region node_modules/d3-scale/src/sequential.js
function Mn(e, t) {
	return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
//#endregion
//#region node_modules/d3-scale/src/diverging.js
function Nn() {
	var e = 0, t = .5, n = 1, r = 1, i, a, o, s, c, l = x, u, d = !1, f;
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
			return arguments.length ? ([n, r, i] = t, l = Sn(e, [
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
	return p.range = m(S), p.rangeRound = m(C), p.unknown = function(e) {
		return arguments.length ? (f = e, p) : f;
	}, function(l) {
		return u = l, i = l(e), a = l(t), o = l(n), s = i === a ? 0 : .5 / (a - i), c = a === o ? 0 : .5 / (o - a), r = a < i ? -1 : 1, p;
	};
}
function Pn() {
	var e = pe(Nn()(x));
	return e.copy = function() {
		return Mn(e, Pn());
	}, y.apply(e, arguments);
}
function Fn() {
	var e = Ve(Nn()).domain([
		.1,
		1,
		10
	]);
	return e.copy = function() {
		return Mn(e, Fn()).base(e.base());
	}, y.apply(e, arguments);
}
function In() {
	var e = be(Nn());
	return e.copy = function() {
		return Mn(e, In()).constant(e.constant());
	}, y.apply(e, arguments);
}
function Ln() {
	var e = On(Nn());
	return e.copy = function() {
		return Mn(e, Ln()).exponent(e.exponent());
	}, y.apply(e, arguments);
}
//#endregion
//#region node_modules/d3-shape/src/symbol/asterisk.js
var Rn = N(3), zn = { draw(e, t) {
	let n = N(t + Ie(t / 28, .75)) * .59436, r = n / 2, i = r * Rn;
	e.moveTo(0, n), e.lineTo(0, -n), e.moveTo(-i, -r), e.lineTo(i, r), e.moveTo(-i, r), e.lineTo(i, -r);
} }, Bn = { draw(e, t) {
	let n = N(t / me);
	e.moveTo(n, 0), e.arc(0, 0, n, 0, ge);
} }, Vn = { draw(e, t) {
	let n = N(t / 5) / 2;
	e.moveTo(-3 * n, -n), e.lineTo(-n, -n), e.lineTo(-n, -3 * n), e.lineTo(n, -3 * n), e.lineTo(n, -n), e.lineTo(3 * n, -n), e.lineTo(3 * n, n), e.lineTo(n, n), e.lineTo(n, 3 * n), e.lineTo(-n, 3 * n), e.lineTo(-n, n), e.lineTo(-3 * n, n), e.closePath();
} }, Hn = N(1 / 3), Un = Hn * 2, Wn = { draw(e, t) {
	let n = N(t / Un), r = n * Hn;
	e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
} }, Gn = { draw(e, t) {
	let n = N(t) * .62625;
	e.moveTo(0, -n), e.lineTo(n, 0), e.lineTo(0, n), e.lineTo(-n, 0), e.closePath();
} }, Kn = { draw(e, t) {
	let n = N(t - Ie(t / 7, 2)) * .87559;
	e.moveTo(-n, 0), e.lineTo(n, 0), e.moveTo(0, n), e.lineTo(0, -n);
} }, qn = { draw(e, t) {
	let n = N(t), r = -n / 2;
	e.rect(r, r, n, n);
} }, Jn = { draw(e, t) {
	let n = N(t) * .4431;
	e.moveTo(n, n), e.lineTo(n, -n), e.lineTo(-n, -n), e.lineTo(-n, n), e.closePath();
} }, Yn = .8908130915292852, Xn = Ee(me / 10) / Ee(7 * me / 10), Zn = Ee(ge / 10) * Xn, Qn = -de(ge / 10) * Xn, $n = { draw(e, t) {
	let n = N(t * Yn), r = Zn * n, i = Qn * n;
	e.moveTo(0, -n), e.lineTo(r, i);
	for (let t = 1; t < 5; ++t) {
		let a = ge * t / 5, o = de(a), s = Ee(a);
		e.lineTo(s * n, -o * n), e.lineTo(o * r - s * i, s * r + o * i);
	}
	e.closePath();
} }, er = N(3), tr = { draw(e, t) {
	let n = -N(t / (er * 3));
	e.moveTo(0, n * 2), e.lineTo(-er * n, -n), e.lineTo(er * n, -n), e.closePath();
} }, nr = N(3), rr = { draw(e, t) {
	let n = N(t) * .6824, r = n / 2, i = n * nr / 2;
	e.moveTo(0, -n), e.lineTo(i, r), e.lineTo(-i, r), e.closePath();
} }, ir = -.5, ar = N(3) / 2, or = 1 / N(12), sr = (or / 2 + 1) * 3, cr = { draw(e, t) {
	let n = N(t / sr), r = n / 2, i = n * or, a = r, o = n * or + n, s = -a, c = o;
	e.moveTo(r, i), e.lineTo(a, o), e.lineTo(s, c), e.lineTo(ir * r - ar * i, ar * r + ir * i), e.lineTo(ir * a - ar * o, ar * a + ir * o), e.lineTo(ir * s - ar * c, ar * s + ir * c), e.lineTo(ir * r + ar * i, ir * i - ar * r), e.lineTo(ir * a + ar * o, ir * o - ar * a), e.lineTo(ir * s + ar * c, ir * c - ar * s), e.closePath();
} }, lr = { draw(e, t) {
	let n = N(t - Ie(t / 6, 1.7)) * .6189;
	e.moveTo(-n, -n), e.lineTo(n, n), e.moveTo(-n, n), e.lineTo(n, -n);
} }, ur = [
	Bn,
	Vn,
	Wn,
	qn,
	$n,
	tr,
	cr
], dr = [
	Bn,
	Kn,
	lr,
	rr,
	zn,
	Jn,
	Gn
], P = 1e-6, F = Math.PI, I = F / 2, fr = F / 4, pr = F * 2, L = 180 / F, R = F / 180, z = Math.abs, mr = Math.atan, hr = Math.atan2, B = Math.cos, gr = Math.exp, _r = Math.log, vr = Math.pow, V = Math.sin, yr = Math.sign || function(e) {
	return e > 0 ? 1 : e < 0 ? -1 : 0;
}, H = Math.sqrt, br = Math.tan;
function xr(e) {
	return e > 1 ? 0 : e < -1 ? F : Math.acos(e);
}
function Sr(e) {
	return e > 1 ? I : e < -1 ? -I : Math.asin(e);
}
//#endregion
//#region node_modules/d3-geo/src/noop.js
function Cr() {}
//#endregion
//#region node_modules/d3-geo/src/stream.js
function wr(e, t) {
	e && Er.hasOwnProperty(e.type) && Er[e.type](e, t);
}
var Tr = {
	Feature: function(e, t) {
		wr(e.geometry, t);
	},
	FeatureCollection: function(e, t) {
		for (var n = e.features, r = -1, i = n.length; ++r < i;) wr(n[r].geometry, t);
	}
}, Er = {
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
		Dr(e.coordinates, t, 0);
	},
	MultiLineString: function(e, t) {
		for (var n = e.coordinates, r = -1, i = n.length; ++r < i;) Dr(n[r], t, 0);
	},
	Polygon: function(e, t) {
		Or(e.coordinates, t);
	},
	MultiPolygon: function(e, t) {
		for (var n = e.coordinates, r = -1, i = n.length; ++r < i;) Or(n[r], t);
	},
	GeometryCollection: function(e, t) {
		for (var n = e.geometries, r = -1, i = n.length; ++r < i;) wr(n[r], t);
	}
};
function Dr(e, t, n) {
	var r = -1, i = e.length - n, a;
	for (t.lineStart(); ++r < i;) a = e[r], t.point(a[0], a[1], a[2]);
	t.lineEnd();
}
function Or(e, t) {
	var n = -1, r = e.length;
	for (t.polygonStart(); ++n < r;) Dr(e[n], t, 1);
	t.polygonEnd();
}
function kr(e, t) {
	e && Tr.hasOwnProperty(e.type) ? Tr[e.type](e, t) : wr(e, t);
}
//#endregion
//#region node_modules/d3-geo/src/cartesian.js
function Ar(e) {
	return [hr(e[1], e[0]), Sr(e[2])];
}
function jr(e) {
	var t = e[0], n = e[1], r = B(n);
	return [
		r * B(t),
		r * V(t),
		V(n)
	];
}
function Mr(e, t) {
	return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Nr(e, t) {
	return [
		e[1] * t[2] - e[2] * t[1],
		e[2] * t[0] - e[0] * t[2],
		e[0] * t[1] - e[1] * t[0]
	];
}
function Pr(e, t) {
	e[0] += t[0], e[1] += t[1], e[2] += t[2];
}
function Fr(e, t) {
	return [
		e[0] * t,
		e[1] * t,
		e[2] * t
	];
}
function Ir(e) {
	var t = H(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
	e[0] /= t, e[1] /= t, e[2] /= t;
}
//#endregion
//#region node_modules/d3-geo/src/compose.js
function Lr(e, t) {
	function n(n, r) {
		return n = e(n, r), t(n[0], n[1]);
	}
	return e.invert && t.invert && (n.invert = function(n, r) {
		return n = t.invert(n, r), n && e.invert(n[0], n[1]);
	}), n;
}
//#endregion
//#region node_modules/d3-geo/src/rotation.js
function Rr(e, t) {
	return z(e) > F && (e -= Math.round(e / pr) * pr), [e, t];
}
Rr.invert = Rr;
function zr(e, t, n) {
	return (e %= pr) ? t || n ? Lr(Vr(e), Hr(t, n)) : Vr(e) : t || n ? Hr(t, n) : Rr;
}
function Br(e) {
	return function(t, n) {
		return t += e, z(t) > F && (t -= Math.round(t / pr) * pr), [t, n];
	};
}
function Vr(e) {
	var t = Br(e);
	return t.invert = Br(-e), t;
}
function Hr(e, t) {
	var n = B(e), r = V(e), i = B(t), a = V(t);
	function o(e, t) {
		var o = B(t), s = B(e) * o, c = V(e) * o, l = V(t), u = l * n + s * r;
		return [hr(c * i - u * a, s * n - l * r), Sr(u * i + c * a)];
	}
	return o.invert = function(e, t) {
		var o = B(t), s = B(e) * o, c = V(e) * o, l = V(t), u = l * i - c * a;
		return [hr(c * i + l * a, s * n + u * r), Sr(u * n - s * r)];
	}, o;
}
function Ur(e) {
	e = zr(e[0] * R, e[1] * R, e.length > 2 ? e[2] * R : 0);
	function t(t) {
		return t = e(t[0] * R, t[1] * R), t[0] *= L, t[1] *= L, t;
	}
	return t.invert = function(t) {
		return t = e.invert(t[0] * R, t[1] * R), t[0] *= L, t[1] *= L, t;
	}, t;
}
//#endregion
//#region node_modules/d3-geo/src/circle.js
function Wr(e, t, n, r, i, a) {
	if (n) {
		var o = B(t), s = V(t), c = r * n;
		i == null ? (i = t + r * pr, a = t - c / 2) : (i = Gr(o, i), a = Gr(o, a), (r > 0 ? i < a : i > a) && (i += r * pr));
		for (var l, u = i; r > 0 ? u > a : u < a; u -= c) l = Ar([
			o,
			-s * B(u),
			-s * V(u)
		]), e.point(l[0], l[1]);
	}
}
function Gr(e, t) {
	t = jr(t), t[0] -= e, Ir(t);
	var n = xr(-t[1]);
	return ((-t[2] < 0 ? -n : n) + pr - P) % pr;
}
//#endregion
//#region node_modules/d3-geo/src/clip/buffer.js
function Kr() {
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
		lineEnd: Cr,
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
function qr(e, t) {
	return z(e[0] - t[0]) < 1e-6 && z(e[1] - t[1]) < 1e-6;
}
//#endregion
//#region node_modules/d3-geo/src/clip/rejoin.js
function Jr(e, t, n, r) {
	this.x = e, this.z = t, this.o = n, this.e = r, this.v = !1, this.n = this.p = null;
}
function Yr(e, t, n, r, i) {
	var a = [], o = [], s, c;
	if (e.forEach(function(e) {
		if (!((t = e.length - 1) <= 0)) {
			var t, n = e[0], r = e[t], c;
			if (qr(n, r)) {
				if (!n[2] && !r[2]) {
					for (i.lineStart(), s = 0; s < t; ++s) i.point((n = e[s])[0], n[1]);
					i.lineEnd();
					return;
				}
				r[0] += 2 * P;
			}
			a.push(c = new Jr(n, e, null, !0)), o.push(c.o = new Jr(n, null, c, !1)), a.push(c = new Jr(r, e, null, !1)), o.push(c.o = new Jr(r, null, c, !0));
		}
	}), a.length) {
		for (o.sort(t), Xr(a), Xr(o), s = 0, c = o.length; s < c; ++s) o[s].e = n = !n;
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
function Xr(e) {
	if (t = e.length) {
		for (var t, n = 0, r = e[0], i; ++n < t;) r.n = i = e[n], i.p = r, r = i;
		r.n = i = e[0], i.p = r;
	}
}
//#endregion
//#region node_modules/d3-geo/src/polygonContains.js
function Zr(e) {
	return z(e[0]) <= F ? e[0] : yr(e[0]) * ((z(e[0]) + F) % pr - F);
}
function Qr(e, t) {
	var n = Zr(t), r = t[1], i = V(r), a = [
		V(n),
		-B(n),
		0
	], o = 0, s = 0, c = new ot();
	i === 1 ? r = I + P : i === -1 && (r = -I - P);
	for (var l = 0, u = e.length; l < u; ++l) if (f = (d = e[l]).length) for (var d, f, p = d[f - 1], m = Zr(p), h = p[1] / 2 + fr, g = V(h), _ = B(h), v = 0; v < f; ++v, m = b, g = S, _ = C, p = y) {
		var y = d[v], b = Zr(y), x = y[1] / 2 + fr, S = V(x), C = B(x), w = b - m, T = w >= 0 ? 1 : -1, E = T * w, D = E > F, O = g * S;
		if (c.add(hr(O * T * V(E), _ * C + O * B(E))), o += D ? w + T * pr : w, D ^ m >= n ^ b >= n) {
			var k = Nr(jr(p), jr(y));
			Ir(k);
			var A = Nr(a, k);
			Ir(A);
			var j = (D ^ w >= 0 ? -1 : 1) * Sr(A[2]);
			(r > j || r === j && (k[0] || k[1])) && (s += D ^ w >= 0 ? 1 : -1);
		}
	}
	return (o < -1e-6 || o < 1e-6 && c < -1e-12) ^ s & 1;
}
//#endregion
//#region node_modules/d3-geo/src/clip/index.js
function $r(e, t, n, r) {
	return function(i) {
		var a = t(i), o = Kr(), s = t(o), c = !1, l, u, d, f = {
			point: p,
			lineStart: h,
			lineEnd: g,
			polygonStart: function() {
				f.point = _, f.lineStart = v, f.lineEnd = y, u = [], l = [];
			},
			polygonEnd: function() {
				f.point = p, f.lineStart = h, f.lineEnd = g, u = Dt(u);
				var e = Qr(l, r);
				u.length ? (c ||= (i.polygonStart(), !0), Yr(u, ti, e, n, i)) : e && (c ||= (i.polygonStart(), !0), i.lineStart(), n(null, null, 1, i), i.lineEnd()), c &&= (i.polygonEnd(), !1), u = l = null;
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
				r > 1 && e & 2 && t.push(t.pop().concat(t.shift())), u.push(t.filter(ei));
			}
		}
		return f;
	};
}
function ei(e) {
	return e.length > 1;
}
function ti(e, t) {
	return ((e = e.x)[0] < 0 ? e[1] - I - P : I - e[1]) - ((t = t.x)[0] < 0 ? t[1] - I - P : I - t[1]);
}
//#endregion
//#region node_modules/d3-geo/src/clip/antimeridian.js
var ni = $r(function() {
	return !0;
}, ri, ai, [-F, -I]);
function ri(e) {
	var t = NaN, n = NaN, r = NaN, i;
	return {
		lineStart: function() {
			e.lineStart(), i = 1;
		},
		point: function(a, o) {
			var s = a > 0 ? F : -F, c = z(a - t);
			z(c - F) < 1e-6 ? (e.point(t, n = (n + o) / 2 > 0 ? I : -I), e.point(r, n), e.lineEnd(), e.lineStart(), e.point(s, n), e.point(a, n), i = 0) : r !== s && c >= F && (z(t - r) < 1e-6 && (t -= r * P), z(a - s) < 1e-6 && (a -= s * P), n = ii(t, n, a, o), e.point(r, n), e.lineEnd(), e.lineStart(), e.point(s, n), i = 0), e.point(t = a, n = o), r = s;
		},
		lineEnd: function() {
			e.lineEnd(), t = n = NaN;
		},
		clean: function() {
			return 2 - i;
		}
	};
}
function ii(e, t, n, r) {
	var i, a, o = V(e - n);
	return z(o) > 1e-6 ? mr((V(t) * (a = B(r)) * V(n) - V(r) * (i = B(t)) * V(e)) / (i * a * o)) : (t + r) / 2;
}
function ai(e, t, n, r) {
	var i;
	if (e == null) i = n * I, r.point(-F, i), r.point(0, i), r.point(F, i), r.point(F, 0), r.point(F, -i), r.point(0, -i), r.point(-F, -i), r.point(-F, 0), r.point(-F, i);
	else if (z(e[0] - t[0]) > 1e-6) {
		var a = e[0] < t[0] ? F : -F;
		i = n * a / 2, r.point(-a, i), r.point(0, i), r.point(a, i);
	} else r.point(t[0], t[1]);
}
//#endregion
//#region node_modules/d3-geo/src/clip/circle.js
function oi(e) {
	var t = B(e), n = 2 * R, r = t > 0, i = z(t) > P;
	function a(t, r, i, a) {
		Wr(a, e, n, i, t, r);
	}
	function o(e, n) {
		return B(e) * B(n) > t;
	}
	function s(e) {
		var t, n, a, s, u;
		return {
			lineStart: function() {
				s = a = !1, u = 1;
			},
			point: function(d, f) {
				var p = [d, f], m, h = o(d, f), g = r ? h ? 0 : l(d, f) : h ? l(d + (d < 0 ? F : -F), f) : 0;
				if (!t && (s = a = h) && e.lineStart(), h !== a && (m = c(t, p), (!m || qr(t, m) || qr(p, m)) && (p[2] = 1)), h !== a) u = 0, h ? (e.lineStart(), m = c(p, t), e.point(m[0], m[1])) : (m = c(t, p), e.point(m[0], m[1], 2), e.lineEnd()), t = m;
				else if (i && t && r ^ h) {
					var _;
					!(g & n) && (_ = c(p, t, !0)) && (u = 0, r ? (e.lineStart(), e.point(_[0][0], _[0][1]), e.point(_[1][0], _[1][1]), e.lineEnd()) : (e.point(_[1][0], _[1][1]), e.lineEnd(), e.lineStart(), e.point(_[0][0], _[0][1], 3)));
				}
				h && (!t || !qr(t, p)) && e.point(p[0], p[1]), t = p, a = h, n = g;
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
		var i = jr(e), a = jr(n), o = [
			1,
			0,
			0
		], s = Nr(i, a), c = Mr(s, s), l = s[0], u = c - l * l;
		if (!u) return !r && e;
		var d = t * c / u, f = -t * l / u, p = Nr(o, s), m = Fr(o, d);
		Pr(m, Fr(s, f));
		var h = p, g = Mr(m, h), _ = Mr(h, h), v = g * g - _ * (Mr(m, m) - 1);
		if (!(v < 0)) {
			var y = H(v), b = Fr(h, (-g - y) / _);
			if (Pr(b, m), b = Ar(b), !r) return b;
			var x = e[0], S = n[0], C = e[1], w = n[1], T;
			S < x && (T = x, x = S, S = T);
			var E = S - x, D = z(E - F) < P, O = D || E < 1e-6;
			if (!D && w < C && (T = C, C = w, w = T), O ? D ? C + w > 0 ^ b[1] < (z(b[0] - x) < 1e-6 ? C : w) : C <= b[1] && b[1] <= w : E > F ^ (x <= b[0] && b[0] <= S)) {
				var k = Fr(h, (-g + y) / _);
				return Pr(k, m), [b, Ar(k)];
			}
		}
	}
	function l(t, n) {
		var i = r ? e : F - e, a = 0;
		return t < -i ? a |= 1 : t > i && (a |= 2), n < -i ? a |= 4 : n > i && (a |= 8), a;
	}
	return $r(o, s, a, r ? [0, -e] : [-F, e - F]);
}
//#endregion
//#region node_modules/d3-geo/src/clip/line.js
function si(e, t, n, r, i, a) {
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
var ci = 1e9, li = -ci;
function ui(e, t, n, r) {
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
		return z(r[0] - e) < 1e-6 ? i > 0 ? 0 : 3 : z(r[0] - n) < 1e-6 ? i > 0 ? 2 : 1 : z(r[1] - t) < 1e-6 ? +(i > 0) : i > 0 ? 3 : 2;
	}
	function s(e, t) {
		return c(e.x, t.x);
	}
	function c(e, t) {
		var n = o(e, 1), r = o(t, 1);
		return n === r ? n === 0 ? t[1] - e[1] : n === 1 ? e[0] - t[0] : n === 2 ? e[1] - t[1] : t[0] - e[0] : n - r;
	}
	return function(o) {
		var c = o, l = Kr(), u, d, f, p, m, h, g, _, v, y, b, x = {
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
			var e = C(), t = b && e, n = (u = Dt(u)).length;
			(t || n) && (o.polygonStart(), t && (o.lineStart(), a(null, null, 1, o), o.lineEnd()), n && Yr(u, s, e, a, o), o.polygonEnd()), c = o, u = d = f = null;
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
				var l = [g = Math.max(li, Math.min(ci, g)), _ = Math.max(li, Math.min(ci, _))], u = [a = Math.max(li, Math.min(ci, a)), o = Math.max(li, Math.min(ci, o))];
				si(l, u, e, t, n, r) ? (v || (c.lineStart(), c.point(l[0], l[1])), c.point(u[0], u[1]), s || c.lineEnd(), b = !1) : s && (c.lineStart(), c.point(a, o), b = !1);
			}
			g = a, _ = o, v = s;
		}
		return x;
	};
}
//#endregion
//#region node_modules/d3-geo/src/identity.js
var di = (e) => e, fi = new ot(), pi = new ot(), mi, hi, gi, _i, vi = {
	point: Cr,
	lineStart: Cr,
	lineEnd: Cr,
	polygonStart: function() {
		vi.lineStart = yi, vi.lineEnd = Si;
	},
	polygonEnd: function() {
		vi.lineStart = vi.lineEnd = vi.point = Cr, fi.add(z(pi)), pi = new ot();
	},
	result: function() {
		var e = fi / 2;
		return fi = new ot(), e;
	}
};
function yi() {
	vi.point = bi;
}
function bi(e, t) {
	vi.point = xi, mi = gi = e, hi = _i = t;
}
function xi(e, t) {
	pi.add(_i * e - gi * t), gi = e, _i = t;
}
function Si() {
	xi(mi, hi);
}
//#endregion
//#region node_modules/d3-geo/src/path/bounds.js
var Ci = Infinity, wi = Ci, Ti = -Ci, Ei = Ti, Di = {
	point: Oi,
	lineStart: Cr,
	lineEnd: Cr,
	polygonStart: Cr,
	polygonEnd: Cr,
	result: function() {
		var e = [[Ci, wi], [Ti, Ei]];
		return Ti = Ei = -(wi = Ci = Infinity), e;
	}
};
function Oi(e, t) {
	e < Ci && (Ci = e), e > Ti && (Ti = e), t < wi && (wi = t), t > Ei && (Ei = t);
}
//#endregion
//#region node_modules/d3-geo/src/path/centroid.js
var ki = 0, Ai = 0, ji = 0, Mi = 0, Ni = 0, Pi = 0, Fi = 0, Ii = 0, Li = 0, Ri, zi, Bi, Vi, Hi = {
	point: Ui,
	lineStart: Wi,
	lineEnd: qi,
	polygonStart: function() {
		Hi.lineStart = Ji, Hi.lineEnd = Yi;
	},
	polygonEnd: function() {
		Hi.point = Ui, Hi.lineStart = Wi, Hi.lineEnd = qi;
	},
	result: function() {
		var e = Li ? [Fi / Li, Ii / Li] : Pi ? [Mi / Pi, Ni / Pi] : ji ? [ki / ji, Ai / ji] : [NaN, NaN];
		return ki = Ai = ji = Mi = Ni = Pi = Fi = Ii = Li = 0, e;
	}
};
function Ui(e, t) {
	ki += e, Ai += t, ++ji;
}
function Wi() {
	Hi.point = Gi;
}
function Gi(e, t) {
	Hi.point = Ki, Ui(Bi = e, Vi = t);
}
function Ki(e, t) {
	var n = e - Bi, r = t - Vi, i = H(n * n + r * r);
	Mi += i * (Bi + e) / 2, Ni += i * (Vi + t) / 2, Pi += i, Ui(Bi = e, Vi = t);
}
function qi() {
	Hi.point = Ui;
}
function Ji() {
	Hi.point = Xi;
}
function Yi() {
	Zi(Ri, zi);
}
function Xi(e, t) {
	Hi.point = Zi, Ui(Ri = Bi = e, zi = Vi = t);
}
function Zi(e, t) {
	var n = e - Bi, r = t - Vi, i = H(n * n + r * r);
	Mi += i * (Bi + e) / 2, Ni += i * (Vi + t) / 2, Pi += i, i = Vi * e - Bi * t, Fi += i * (Bi + e), Ii += i * (Vi + t), Li += i * 3, Ui(Bi = e, Vi = t);
}
//#endregion
//#region node_modules/d3-geo/src/path/context.js
function Qi(e) {
	this._context = e;
}
Qi.prototype = {
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
			default: this._context.moveTo(e + this._radius, t), this._context.arc(e, t, this._radius, 0, pr);
		}
	},
	result: Cr
};
//#endregion
//#region node_modules/d3-geo/src/path/measure.js
var $i = new ot(), ea, ta, na, ra, ia, aa = {
	point: Cr,
	lineStart: function() {
		aa.point = oa;
	},
	lineEnd: function() {
		ea && sa(ta, na), aa.point = Cr;
	},
	polygonStart: function() {
		ea = !0;
	},
	polygonEnd: function() {
		ea = null;
	},
	result: function() {
		var e = +$i;
		return $i = new ot(), e;
	}
};
function oa(e, t) {
	aa.point = sa, ta = ra = e, na = ia = t;
}
function sa(e, t) {
	ra -= e, ia -= t, $i.add(H(ra * ra + ia * ia)), ra = e, ia = t;
}
//#endregion
//#region node_modules/d3-geo/src/path/string.js
var ca, la, ua, da, fa = class {
	constructor(e) {
		this._append = e == null ? pa : ma(e), this._radius = 4.5, this._ = "";
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
				if (this._append`M${e},${t}`, this._radius !== ua || this._append !== la) {
					let e = this._radius, t = this._;
					this._ = "", this._append`m0,${e}a${e},${e} 0 1,1 0,${-2 * e}a${e},${e} 0 1,1 0,${2 * e}z`, ua = e, la = this._append, da = this._, this._ = t;
				}
				this._ += da;
		}
	}
	result() {
		let e = this._;
		return this._ = "", e.length ? e : null;
	}
};
function pa(e) {
	let t = 1;
	this._ += e[0];
	for (let n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function ma(e) {
	let t = Math.floor(e);
	if (!(t >= 0)) throw RangeError(`invalid digits: ${e}`);
	if (t > 15) return pa;
	if (t !== ca) {
		let e = 10 ** t;
		ca = t, la = function(t) {
			let n = 1;
			this._ += t[0];
			for (let r = t.length; n < r; ++n) this._ += Math.round(arguments[n] * e) / e + t[n];
		};
	}
	return la;
}
//#endregion
//#region node_modules/d3-geo/src/path/index.js
function ha(e, t) {
	let n = 3, r = 4.5, i, a;
	function o(e) {
		return e && (typeof r == "function" && a.pointRadius(+r.apply(this, arguments)), kr(e, i(a))), a.result();
	}
	return o.area = function(e) {
		return kr(e, i(vi)), vi.result();
	}, o.measure = function(e) {
		return kr(e, i(aa)), aa.result();
	}, o.bounds = function(e) {
		return kr(e, i(Di)), Di.result();
	}, o.centroid = function(e) {
		return kr(e, i(Hi)), Hi.result();
	}, o.projection = function(t) {
		return arguments.length ? (i = t == null ? (e = null, di) : (e = t).stream, o) : e;
	}, o.context = function(e) {
		return arguments.length ? (a = e == null ? (t = null, new fa(n)) : new Qi(t = e), typeof r != "function" && a.pointRadius(r), o) : t;
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
		return t === null && (a = new fa(n)), o;
	}, o.projection(e).digits(n).context(t);
}
//#endregion
//#region node_modules/d3-geo/src/transform.js
function ga(e) {
	return { stream: _a(e) };
}
function _a(e) {
	return function(t) {
		var n = new va();
		for (var r in e) n[r] = e[r];
		return n.stream = t, n;
	};
}
function va() {}
va.prototype = {
	constructor: va,
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
function ya(e, t, n) {
	var r = e.clipExtent && e.clipExtent();
	return e.scale(150).translate([0, 0]), r != null && e.clipExtent(null), kr(n, e.stream(Di)), t(Di.result()), r != null && e.clipExtent(r), e;
}
function ba(e, t, n) {
	return ya(e, function(n) {
		var r = t[1][0] - t[0][0], i = t[1][1] - t[0][1], a = Math.min(r / (n[1][0] - n[0][0]), i / (n[1][1] - n[0][1])), o = +t[0][0] + (r - a * (n[1][0] + n[0][0])) / 2, s = +t[0][1] + (i - a * (n[1][1] + n[0][1])) / 2;
		e.scale(150 * a).translate([o, s]);
	}, n);
}
function xa(e, t, n) {
	return ba(e, [[0, 0], t], n);
}
function Sa(e, t, n) {
	return ya(e, function(n) {
		var r = +t, i = r / (n[1][0] - n[0][0]), a = (r - i * (n[1][0] + n[0][0])) / 2, o = -i * n[0][1];
		e.scale(150 * i).translate([a, o]);
	}, n);
}
function Ca(e, t, n) {
	return ya(e, function(n) {
		var r = +t, i = r / (n[1][1] - n[0][1]), a = -i * n[0][0], o = (r - i * (n[1][1] + n[0][1])) / 2;
		e.scale(150 * i).translate([a, o]);
	}, n);
}
//#endregion
//#region node_modules/d3-geo/src/projection/resample.js
var wa = 16, Ta = B(30 * R);
function Ea(e, t) {
	return +t ? Oa(e, t) : Da(e);
}
function Da(e) {
	return _a({ point: function(t, n) {
		t = e(t, n), this.stream.point(t[0], t[1]);
	} });
}
function Oa(e, t) {
	function n(r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
		var _ = l - r, v = u - i, y = _ * _ + v * v;
		if (y > 4 * t && h--) {
			var b = o + f, x = s + p, S = c + m, C = H(b * b + x * x + S * S), w = Sr(S /= C), T = z(z(S) - 1) < 1e-6 || z(a - d) < 1e-6 ? (a + d) / 2 : hr(x, b), E = e(T, w), D = E[0], O = E[1], k = D - r, A = O - i, j = v * k - _ * A;
			(j * j / y > t || z((_ * k + v * A) / y - .5) > .3 || o * f + s * p + c * m < Ta) && (n(r, i, a, o, s, c, D, O, T, b /= C, x /= C, S, h, g), g.point(D, O), n(D, O, T, b, x, S, l, u, d, f, p, m, h, g));
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
			var a = jr([r, i]), o = e(r, i);
			n(u, d, l, f, p, m, u = o[0], d = o[1], l = r, f = a[0], p = a[1], m = a[2], wa, t), t.point(u, d);
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
			n(u, d, l, f, p, m, i, a, r, o, s, c, wa, t), h.lineEnd = y, y();
		}
		return h;
	};
}
//#endregion
//#region node_modules/d3-geo/src/projection/index.js
var ka = _a({ point: function(e, t) {
	this.stream.point(e * R, t * R);
} });
function Aa(e) {
	return _a({ point: function(t, n) {
		var r = e(t, n);
		return this.stream.point(r[0], r[1]);
	} });
}
function ja(e, t, n, r, i) {
	function a(a, o) {
		return a *= r, o *= i, [t + e * a, n - e * o];
	}
	return a.invert = function(a, o) {
		return [(a - t) / e * r, (n - o) / e * i];
	}, a;
}
function Ma(e, t, n, r, i, a) {
	if (!a) return ja(e, t, n, r, i);
	var o = B(a), s = V(a), c = o * e, l = s * e, u = o / e, d = s / e, f = (s * n - o * t) / e, p = (s * t + o * n) / e;
	function m(e, a) {
		return e *= r, a *= i, [c * e - l * a + t, n - l * e - c * a];
	}
	return m.invert = function(e, t) {
		return [r * (u * e - d * t + f), i * (p - d * e - u * t)];
	}, m;
}
function Na(e) {
	return Pa(function() {
		return e;
	})();
}
function Pa(e) {
	var t, n = 150, r = 480, i = 250, a = 0, o = 0, s = 0, c = 0, l = 0, u, d = 0, f = 1, p = 1, m = null, h = ni, g = null, _, v, y, b = di, x = .5, S, C, w, T, E;
	function D(e) {
		return w(e[0] * R, e[1] * R);
	}
	function O(e) {
		return e = w.invert(e[0], e[1]), e && [e[0] * L, e[1] * L];
	}
	D.stream = function(e) {
		return T && E === e ? T : T = ka(Aa(u)(h(S(b(E = e)))));
	}, D.preclip = function(e) {
		return arguments.length ? (h = e, m = void 0, A()) : h;
	}, D.postclip = function(e) {
		return arguments.length ? (b = e, g = _ = v = y = null, A()) : b;
	}, D.clipAngle = function(e) {
		return arguments.length ? (h = +e ? oi(m = e * R) : (m = null, ni), A()) : m * L;
	}, D.clipExtent = function(e) {
		return arguments.length ? (b = e == null ? (g = _ = v = y = null, di) : ui(g = +e[0][0], _ = +e[0][1], v = +e[1][0], y = +e[1][1]), A()) : g == null ? null : [[g, _], [v, y]];
	}, D.scale = function(e) {
		return arguments.length ? (n = +e, k()) : n;
	}, D.translate = function(e) {
		return arguments.length ? (r = +e[0], i = +e[1], k()) : [r, i];
	}, D.center = function(e) {
		return arguments.length ? (a = e[0] % 360 * R, o = e[1] % 360 * R, k()) : [a * L, o * L];
	}, D.rotate = function(e) {
		return arguments.length ? (s = e[0] % 360 * R, c = e[1] % 360 * R, l = e.length > 2 ? e[2] % 360 * R : 0, k()) : [
			s * L,
			c * L,
			l * L
		];
	}, D.angle = function(e) {
		return arguments.length ? (d = e % 360 * R, k()) : d * L;
	}, D.reflectX = function(e) {
		return arguments.length ? (f = e ? -1 : 1, k()) : f < 0;
	}, D.reflectY = function(e) {
		return arguments.length ? (p = e ? -1 : 1, k()) : p < 0;
	}, D.precision = function(e) {
		return arguments.length ? (S = Ea(C, x = e * e), A()) : H(x);
	}, D.fitExtent = function(e, t) {
		return ba(D, e, t);
	}, D.fitSize = function(e, t) {
		return xa(D, e, t);
	}, D.fitWidth = function(e, t) {
		return Sa(D, e, t);
	}, D.fitHeight = function(e, t) {
		return Ca(D, e, t);
	};
	function k() {
		var e = Ma(n, 0, 0, f, p, d).apply(null, t(a, o)), m = Ma(n, r - e[0], i - e[1], f, p, d);
		return u = zr(s, c, l), C = Lr(t, m), w = Lr(u, C), S = Ea(C, x), A();
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
function Fa(e) {
	var t = 0, n = F / 3, r = Pa(e), i = r(t, n);
	return i.parallels = function(e) {
		return arguments.length ? r(t = e[0] * R, n = e[1] * R) : [t * L, n * L];
	}, i;
}
//#endregion
//#region node_modules/d3-geo/src/projection/cylindricalEqualArea.js
function Ia(e) {
	var t = B(e);
	function n(e, n) {
		return [e * t, V(n) / t];
	}
	return n.invert = function(e, n) {
		return [e / t, Sr(n * t)];
	}, n;
}
//#endregion
//#region node_modules/d3-geo/src/projection/conicEqualArea.js
function La(e, t) {
	var n = V(e), r = (n + V(t)) / 2;
	if (z(r) < 1e-6) return Ia(e);
	var i = 1 + n * (2 * r - n), a = H(i) / r;
	function o(e, t) {
		var n = H(i - 2 * r * V(t)) / r;
		return [n * V(e *= r), a - n * B(e)];
	}
	return o.invert = function(e, t) {
		var n = a - t, o = hr(e, z(n)) * yr(n);
		return n * r < 0 && (o -= F * yr(e) * yr(n)), [o / r, Sr((i - (e * e + n * n) * r * r) / (2 * r))];
	}, o;
}
function Ra() {
	return Fa(La).scale(155.424).center([0, 33.6442]);
}
//#endregion
//#region node_modules/d3-geo/src/projection/albers.js
function za() {
	return Ra().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7]);
}
//#endregion
//#region node_modules/d3-geo/src/projection/albersUsa.js
function Ba(e) {
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
function Va() {
	var e, t, n = za(), r, i = Ra().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), a, o = Ra().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), s, c, l = { point: function(e, t) {
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
		return e && t === r ? e : e = Ba([
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
		return r = n.translate(e).clipExtent([[c - .455 * t, u - .238 * t], [c + .455 * t, u + .238 * t]]).stream(l), a = i.translate([c - .307 * t, u + .201 * t]).clipExtent([[c - .425 * t + P, u + .12 * t + P], [c - .214 * t - P, u + .234 * t - P]]).stream(l), s = o.translate([c - .205 * t, u + .212 * t]).clipExtent([[c - .214 * t + P, u + .166 * t + P], [c - .115 * t - P, u + .234 * t - P]]).stream(l), d();
	}, u.fitExtent = function(e, t) {
		return ba(u, e, t);
	}, u.fitSize = function(e, t) {
		return xa(u, e, t);
	}, u.fitWidth = function(e, t) {
		return Sa(u, e, t);
	}, u.fitHeight = function(e, t) {
		return Ca(u, e, t);
	};
	function d() {
		return e = t = null, u;
	}
	return u.scale(1070);
}
//#endregion
//#region node_modules/d3-geo/src/projection/azimuthal.js
function Ha(e) {
	return function(t, n) {
		var r = B(t), i = B(n), a = e(r * i);
		return a === Infinity ? [2, 0] : [a * i * V(t), a * V(n)];
	};
}
function Ua(e) {
	return function(t, n) {
		var r = H(t * t + n * n), i = e(r), a = V(i), o = B(i);
		return [hr(t * a, r * o), Sr(r && n * a / r)];
	};
}
//#endregion
//#region node_modules/d3-geo/src/projection/azimuthalEqualArea.js
var Wa = Ha(function(e) {
	return H(2 / (1 + e));
});
Wa.invert = Ua(function(e) {
	return 2 * Sr(e / 2);
});
function Ga() {
	return Na(Wa).scale(124.75).clipAngle(179.999);
}
//#endregion
//#region node_modules/d3-geo/src/projection/azimuthalEquidistant.js
var Ka = Ha(function(e) {
	return (e = xr(e)) && e / V(e);
});
Ka.invert = Ua(function(e) {
	return e;
});
function qa() {
	return Na(Ka).scale(79.4188).clipAngle(179.999);
}
//#endregion
//#region node_modules/d3-geo/src/projection/mercator.js
function Ja(e, t) {
	return [e, _r(br((I + t) / 2))];
}
Ja.invert = function(e, t) {
	return [e, 2 * mr(gr(t)) - I];
};
function Ya() {
	return Xa(Ja).scale(961 / pr);
}
function Xa(e) {
	var t = Na(e), n = t.center, r = t.scale, i = t.translate, a = t.clipExtent, o = null, s, c, l;
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
		var n = F * r(), i = t(Ur(t.rotate()).invert([0, 0]));
		return a(o == null ? [[i[0] - n, i[1] - n], [i[0] + n, i[1] + n]] : e === Ja ? [[Math.max(i[0] - n, o), s], [Math.min(i[0] + n, c), l]] : [[o, Math.max(i[1] - n, s)], [c, Math.min(i[1] + n, l)]]);
	}
	return u();
}
//#endregion
//#region node_modules/d3-geo/src/projection/conicConformal.js
function Za(e) {
	return br((I + e) / 2);
}
function Qa(e, t) {
	var n = B(e), r = e === t ? V(e) : _r(n / B(t)) / _r(Za(t) / Za(e)), i = n * vr(Za(e), r) / r;
	if (!r) return Ja;
	function a(e, t) {
		i > 0 ? t < -I + 1e-6 && (t = -I + P) : t > I - 1e-6 && (t = I - P);
		var n = i / vr(Za(t), r);
		return [n * V(r * e), i - n * B(r * e)];
	}
	return a.invert = function(e, t) {
		var n = i - t, a = yr(r) * H(e * e + n * n), o = hr(e, z(n)) * yr(n);
		return n * r < 0 && (o -= F * yr(e) * yr(n)), [o / r, 2 * mr(vr(i / a, 1 / r)) - I];
	}, a;
}
function $a() {
	return Fa(Qa).scale(109.5).parallels([30, 30]);
}
//#endregion
//#region node_modules/d3-geo/src/projection/equirectangular.js
function eo(e, t) {
	return [e, t];
}
eo.invert = eo;
function to() {
	return Na(eo).scale(152.63);
}
//#endregion
//#region node_modules/d3-geo/src/projection/conicEquidistant.js
function no(e, t) {
	var n = B(e), r = e === t ? V(e) : (n - B(t)) / (t - e), i = n / r + e;
	if (z(r) < 1e-6) return eo;
	function a(e, t) {
		var n = i - t, a = r * e;
		return [n * V(a), i - n * B(a)];
	}
	return a.invert = function(e, t) {
		var n = i - t, a = hr(e, z(n)) * yr(n);
		return n * r < 0 && (a -= F * yr(e) * yr(n)), [a / r, i - yr(r) * H(e * e + n * n)];
	}, a;
}
function ro() {
	return Fa(no).scale(131.154).center([0, 13.9389]);
}
//#endregion
//#region node_modules/d3-geo/src/projection/equalEarth.js
var io = 1.340264, ao = -.081106, oo = 893e-6, so = .003796, co = H(3) / 2, lo = 12;
function uo(e, t) {
	var n = Sr(co * V(t)), r = n * n, i = r * r * r;
	return [e * B(n) / (co * (io + 3 * ao * r + i * (7 * oo + 9 * so * r))), n * (io + ao * r + i * (oo + so * r))];
}
uo.invert = function(e, t) {
	for (var n = t, r = n * n, i = r * r * r, a = 0, o, s, c; a < lo && (s = n * (io + ao * r + i * (oo + so * r)) - t, c = io + 3 * ao * r + i * (7 * oo + 9 * so * r), n -= o = s / c, r = n * n, i = r * r * r, !(z(o) < 1e-12)); ++a);
	return [co * e * (io + 3 * ao * r + i * (7 * oo + 9 * so * r)) / B(n), Sr(V(n) / co)];
};
function fo() {
	return Na(uo).scale(177.158);
}
//#endregion
//#region node_modules/d3-geo/src/projection/gnomonic.js
function po(e, t) {
	var n = B(t), r = B(e) * n;
	return [n * V(e) / r, V(t) / r];
}
po.invert = Ua(mr);
function mo() {
	return Na(po).scale(144.049).clipAngle(60);
}
//#endregion
//#region node_modules/d3-geo/src/projection/orthographic.js
function ho(e, t) {
	return [B(t) * V(e), V(t)];
}
ho.invert = Ua(Sr);
function go() {
	return Na(ho).scale(249.5).clipAngle(90 + P);
}
//#endregion
//#region node_modules/d3-geo/src/projection/stereographic.js
function _o(e, t) {
	var n = B(t), r = 1 + B(e) * n;
	return [n * V(e) / r, V(t) / r];
}
_o.invert = Ua(function(e) {
	return 2 * mr(e);
});
function vo() {
	return Na(_o).scale(250).clipAngle(142);
}
//#endregion
//#region node_modules/d3-geo/src/projection/transverseMercator.js
function yo(e, t) {
	return [_r(br((I + t) / 2)), -e];
}
yo.invert = function(e, t) {
	return [-t, 2 * mr(gr(e)) - I];
};
function bo() {
	var e = Xa(yo), t = e.center, n = e.rotate;
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
function U(e) {
	for (var t = e.length / 6 | 0, n = Array(t), r = 0; r < t;) n[r] = "#" + e.slice(r * 6, ++r * 6);
	return n;
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/categorical/category10.js
var xo = U("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), So = U("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), Co = U("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), wo = U("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0"), To = U("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), Eo = U("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), Do = U("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), Oo = U("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), ko = U("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), Ao = U("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), jo = U("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"), W = (e) => p(e[e.length - 1]), Mo = [
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
].map(U), No = W(Mo), Po = [
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
].map(U), Fo = W(Po), Io = [
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
].map(U), Lo = W(Io), Ro = [
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
].map(U), zo = W(Ro), Bo = [
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
].map(U), Vo = W(Bo), Ho = [
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
].map(U), Uo = W(Ho), Wo = [
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
].map(U), Go = W(Wo), Ko = [
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
].map(U), qo = W(Ko), Jo = [
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
].map(U), Yo = W(Jo), Xo = [
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
].map(U), Zo = W(Xo), Qo = [
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
].map(U), $o = W(Qo), es = [
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
].map(U), ts = W(es), ns = [
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
].map(U), rs = W(ns), is = [
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
].map(U), as = W(is), os = [
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
].map(U), ss = W(os), cs = [
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
].map(U), ls = W(cs), us = [
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
].map(U), ds = W(us), fs = [
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
].map(U), ps = W(fs), ms = [
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
].map(U), hs = W(ms), gs = [
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
].map(U), _s = W(gs), vs = [
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
].map(U), ys = W(vs), bs = [
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
].map(U), xs = W(bs), Ss = [
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
].map(U), Cs = W(Ss), ws = [
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
].map(U), Ts = W(ws), Es = [
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
].map(U), Ds = W(Es), Os = [
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
].map(U), ks = W(Os), As = [
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
].map(U), js = W(As);
//#endregion
//#region node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js
function Ms(e) {
	return e = Math.max(0, Math.min(1, e)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - e * (35.34 - e * (2381.73 - e * (6402.7 - e * (7024.72 - e * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + e * (170.73 + e * (52.82 - e * (131.46 - e * (176.58 - e * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + e * (442.36 - e * (2482.43 - e * (6167.24 - e * (6614.94 - e * 2475.67))))))) + ")";
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
var Ns = xn(pn(300, .5, 0), pn(-240, .5, 1)), Ps = xn(pn(-100, .75, .35), pn(80, 1.5, .8)), Fs = xn(pn(260, .75, .35), pn(80, 1.5, .8)), Is = pn();
function Ls(e) {
	(e < 0 || e > 1) && (e -= Math.floor(e));
	var t = Math.abs(e - .5);
	return Is.h = 360 * e - 100, Is.s = 1.5 - 1.5 * t, Is.l = .8 - .9 * t, Is + "";
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
var Rs = i(), zs = Math.PI / 3, Bs = Math.PI * 2 / 3;
function Vs(e) {
	var t;
	return e = (.5 - e) * Math.PI, Rs.r = 255 * (t = Math.sin(e)) * t, Rs.g = 255 * (t = Math.sin(e + zs)) * t, Rs.b = 255 * (t = Math.sin(e + Bs)) * t, Rs + "";
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js
function Hs(e) {
	return e = Math.max(0, Math.min(1, e)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + e * (1172.33 - e * (10793.56 - e * (33300.12 - e * (38394.49 - e * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + e * (557.33 + e * (1225.33 - e * (3574.96 - e * (1073.77 + e * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + e * (3211.1 - e * (15327.97 - e * (27814 - e * (22569.18 - e * 6838.66))))))) + ")";
}
//#endregion
//#region node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
function Us(e) {
	var t = e.length;
	return function(n) {
		return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
	};
}
var Ws = Us(U("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")), Gs = Us(U("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), Ks = Us(U("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), qs = Us(U("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
//#endregion
//#region node_modules/@observablehq/plot/src/defined.js
function Js(e) {
	return e != null && !Number.isNaN(e);
}
function Ys(e, t) {
	return Js(t) - +Js(e) || M(e, t);
}
function Xs(e, t) {
	return Js(t) - +Js(e) || ae(e, t);
}
function Zs(e) {
	return e != null && `${e}` != "";
}
function Qs(e) {
	return isFinite(e) ? e : NaN;
}
function $s(e) {
	return e > 0 && isFinite(e) ? e : NaN;
}
function ec(e) {
	return e < 0 && isFinite(e) ? e : NaN;
}
//#endregion
//#region node_modules/isoformat/src/format.js
function tc(e, t) {
	if (e instanceof Date || (e = /* @__PURE__ */ new Date(+e)), isNaN(e)) return typeof t == "function" ? t(e) : t;
	let n = e.getUTCHours(), r = e.getUTCMinutes(), i = e.getUTCSeconds(), a = e.getUTCMilliseconds();
	return `${nc(e.getUTCFullYear(), 4)}-${rc(e.getUTCMonth() + 1, 2)}-${rc(e.getUTCDate(), 2)}${n || r || i || a ? `T${rc(n, 2)}:${rc(r, 2)}${i || a ? `:${rc(i, 2)}${a ? `.${rc(a, 3)}` : ""}` : ""}Z` : ""}`;
}
function nc(e) {
	return e < 0 ? `-${rc(-e, 6)}` : e > 9999 ? `+${rc(e, 6)}` : rc(e, 4);
}
function rc(e, t) {
	return `${e}`.padStart(t, "0");
}
//#endregion
//#region node_modules/isoformat/src/parse.js
var ic = /^(?:[-+]\d{2})?\d{4}(?:-\d{2}(?:-\d{2})?)?(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?(?:Z|[-+]\d{2}:?\d{2})?)?$/;
function ac(e, t) {
	return ic.test(e += "") ? new Date(e) : typeof t == "function" ? t(e) : t;
}
//#endregion
//#region node_modules/@observablehq/plot/src/order.js
function oc(e) {
	if (e == null) return;
	let t = e[0], n = e[e.length - 1];
	return ae(t, n);
}
//#endregion
//#region node_modules/@observablehq/plot/src/time.js
var sc = 1e3, cc = sc * 60, lc = cc * 60, uc = lc * 24, dc = uc * 7, fc = uc * 30, pc = uc * 365, mc = [
	["millisecond", 1],
	["2 milliseconds", 2],
	["5 milliseconds", 5],
	["10 milliseconds", 10],
	["20 milliseconds", 20],
	["50 milliseconds", 50],
	["100 milliseconds", 100],
	["200 milliseconds", 200],
	["500 milliseconds", 500],
	["second", sc],
	["5 seconds", 5 * sc],
	["15 seconds", 15 * sc],
	["30 seconds", 30 * sc],
	["minute", cc],
	["5 minutes", 5 * cc],
	["15 minutes", 15 * cc],
	["30 minutes", 30 * cc],
	["hour", lc],
	["3 hours", 3 * lc],
	["6 hours", 6 * lc],
	["12 hours", 12 * lc],
	["day", uc],
	["2 days", 2 * uc],
	["week", dc],
	["2 weeks", 2 * dc],
	["month", fc],
	["3 months", 3 * fc],
	["6 months", 6 * fc],
	["year", pc],
	["2 years", 2 * pc],
	["5 years", 5 * pc],
	["10 years", 10 * pc],
	["20 years", 20 * pc],
	["50 years", 50 * pc],
	["100 years", 100 * pc]
], hc = /* @__PURE__ */ new Map([
	["second", sc],
	["minute", cc],
	["hour", lc],
	["day", uc],
	["monday", dc],
	["tuesday", dc],
	["wednesday", dc],
	["thursday", dc],
	["friday", dc],
	["saturday", dc],
	["sunday", dc],
	["week", dc],
	["month", fc],
	["year", pc]
]), gc = /* @__PURE__ */ new Map([
	["second", Se],
	["minute", Ne],
	["hour", _e],
	["day", De],
	["monday", se],
	["tuesday", ve],
	["wednesday", ze],
	["thursday", v],
	["friday", ce],
	["saturday", le],
	["sunday", te],
	["week", te],
	["month", Pe],
	["year", w]
]), _c = /* @__PURE__ */ new Map([
	["second", Se],
	["minute", ke],
	["hour", ye],
	["day", Be],
	["monday", Fe],
	["tuesday", Le],
	["wednesday", he],
	["thursday", je],
	["friday", Ae],
	["saturday", Ce],
	["sunday", fe],
	["week", fe],
	["month", D],
	["year", O]
]), vc = Symbol("intervalDuration"), yc = Symbol("intervalType");
for (let [e, t] of gc) t[vc] = hc.get(e), t[yc] = "time";
for (let [e, t] of _c) t[vc] = hc.get(e), t[yc] = "utc";
var bc = [
	[
		"year",
		O,
		"utc"
	],
	[
		"month",
		D,
		"utc"
	],
	[
		"day",
		Be,
		"utc",
		6 * fc
	],
	[
		"hour",
		ye,
		"utc",
		3 * uc
	],
	[
		"minute",
		ke,
		"utc",
		6 * lc
	],
	[
		"second",
		Se,
		"utc",
		30 * cc
	]
], xc = [
	[
		"year",
		w,
		"time"
	],
	[
		"month",
		Pe,
		"time"
	],
	[
		"day",
		De,
		"time",
		6 * fc
	],
	[
		"hour",
		_e,
		"time",
		3 * uc
	],
	[
		"minute",
		Ne,
		"time",
		6 * lc
	],
	[
		"second",
		Se,
		"time",
		30 * cc
	]
], Sc = [
	bc[0],
	xc[0],
	bc[1],
	xc[1],
	bc[2],
	xc[2],
	...bc.slice(3)
];
function Cc(e) {
	let t = `${e}`.toLowerCase();
	t.endsWith("s") && (t = t.slice(0, -1));
	let n = 1, r = /^(?:(\d+)\s+)/.exec(t);
	switch (r && (t = t.slice(r[0].length), n = +r[1]), t) {
		case "quarter":
			t = "month", n *= 3;
			break;
		case "half": t = "month", n *= 6;
	}
	let i = _c.get(t);
	if (!i) throw Error(`unknown interval: ${e}`);
	if (n > 1 && !i.every) throw Error(`non-periodic interval: ${t}`);
	return [t, n];
}
function wc(e) {
	return Ec(Cc(e), "time");
}
function Tc(e) {
	return Ec(Cc(e), "utc");
}
function Ec([e, t], n) {
	let r = (n === "time" ? gc : _c).get(e);
	return t > 1 && (r = r.every(t), r[vc] = hc.get(e) * t, r[yc] = n), r;
}
function Dc(e, t) {
	if (!(t > 1)) return;
	let n = e[vc];
	if (!mc.some(([, e]) => e === n) || n % uc === 0 && uc < n && n < fc) return;
	let [r] = mc[T(([, e]) => Math.log(e)).center(mc, Math.log(n * t))];
	return (e[yc] === "time" ? wc : Tc)(r);
}
function Oc(e, t, n) {
	let r = t === "time" ? A : ee;
	if (n == null) return r(e === "year" ? "%Y" : e === "month" ? "%Y-%m" : e === "day" ? "%Y-%m-%d" : e === "hour" || e === "minute" ? "%Y-%m-%dT%H:%M" : e === "second" ? "%Y-%m-%dT%H:%M:%S" : "%Y-%m-%dT%H:%M:%S.%L");
	let i = kc(n);
	switch (e) {
		case "millisecond": return Mc(r(".%L"), r(":%M:%S"), i);
		case "second": return Mc(r(":%S"), r("%-I:%M"), i);
		case "minute": return Mc(r("%-I:%M"), r("%p"), i);
		case "hour": return Mc(r("%-I %p"), r("%b %-d"), i);
		case "day": return Mc(r("%-d"), r("%b"), i);
		case "month": return Mc(r("%b"), r("%Y"), i);
		case "year": return r("%Y");
	}
	throw Error("unable to format time ticks");
}
function kc(e) {
	return e === "left" || e === "right" ? (e, t) => `\n${e}\n${t}` : e === "top" ? (e, t) => `${t}\n${e}` : (e, t) => `${e}\n${t}`;
}
function Ac(e) {
	return e === "time" ? xc : e === "utc" ? bc : Sc;
}
function jc(e, t, n) {
	let r = qe(kt(t, (e, t) => Math.abs(t - e)));
	if (r < 1e3) return Oc("millisecond", "utc", n);
	for (let [i, a, o, s] of Ac(e)) {
		if (r > s || i === "hour" && !r) break;
		if (t.every((e) => a.floor(e) >= e)) return Oc(i, o, n);
	}
}
function Mc(e, t, n) {
	return (r, i, a) => {
		let o = e(r, i), s = t(r, i), c = i - oc(a);
		return i !== c && a[c] !== void 0 && s === t(a[c], c) ? o : n(o, s);
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/options.js
var Nc = Object.getPrototypeOf(Uint8Array), Pc = Object.prototype.toString;
function Fc(e) {
	return e instanceof Array || e instanceof Nc;
}
function Ic(e) {
	return e instanceof Nc && !Rc(e);
}
function Lc(e) {
	return e?.prototype instanceof Nc && !zc(e);
}
function Rc(e) {
	return e instanceof BigInt64Array || e instanceof BigUint64Array;
}
function zc(e) {
	return e === BigInt64Array || e === BigUint64Array;
}
var Bc = Symbol("reindex");
function Vc(e, t, n) {
	let r = typeof t;
	return r === "string" ? cu(e) ? Gc(e.getChild(t), n) : Uc(e, Jc(t), n) : r === "function" ? Uc(e, t, n) : r === "number" || t instanceof Date || r === "boolean" ? q(e, tl(t), n) : typeof t?.transform == "function" ? Wc(t.transform(e), n) : Hc(Wc(t, n), e?.[Bc]);
}
function Hc(e, t) {
	return e != null && t ? Dl(e, t) : e;
}
function Uc(e, t, n) {
	return q(e, Lc(n) ? (e, n) => il(t(e, n)) : t, n);
}
function Wc(e, t) {
	return t === void 0 ? fl(e) : lu(e) ? Gc(e, t) : e instanceof t ? e : t.from(e, Lc(t) && !Ic(e) ? il : void 0);
}
function Gc(e, t) {
	return e == null ? e : (t === void 0 || t === Array) && uu(e.type) ? al(Kc(e)) : Wc(Kc(e), t);
}
function Kc(e) {
	return e.nullCount ? e.toJSON() : e.toArray();
}
var qc = [null], Jc = (e) => (t) => {
	let n = t[e];
	return n === void 0 && t.type === "Feature" ? t.properties?.[e] : n;
}, Yc = { transform: El }, Xc = { transform: (e) => e }, Zc = () => 1, Qc = () => !0, G = (e) => e == null ? e : `${e}`, K = (e) => e == null ? e : +e, $c = (e) => e ? e[0] : void 0, el = (e) => e ? e[1] : void 0, tl = (e) => () => e;
function nl(e) {
	let t = `${e}`.slice(1) / 100;
	return (e, n) => St(e, t, n);
}
function rl(e) {
	return Ic(e) ? e : q(e, il, Float64Array);
}
function il(e) {
	return e == null ? NaN : Number(e);
}
function al(e) {
	return q(e, ol);
}
function ol(e) {
	return e instanceof Date && !isNaN(e) ? e : typeof e == "string" ? ac(e) : e == null || isNaN(e = Number(e)) ? void 0 : new Date(e);
}
function sl(e, t) {
	return e === void 0 && (e = t), e === null ? [void 0, "none"] : Ql(e) ? [void 0, e] : [e, void 0];
}
function cl(e, t) {
	return e === void 0 && (e = t), e === null || typeof e == "number" ? [void 0, e] : [e, void 0];
}
function ll(e, t, n) {
	if (e != null) return ul(e, t, n);
}
function ul(e, t, n) {
	let r = `${e}`.toLowerCase();
	if (!n.includes(r)) throw Error(`invalid ${t}: ${e}`);
	return r;
}
function dl(e) {
	return cu(e) ? e : fl(e);
}
function fl(e) {
	if (e == null || Fc(e)) return e;
	if (lu(e)) return Gc(e);
	if (pl(e)) switch (e.type) {
		case "FeatureCollection": return e.features;
		case "GeometryCollection": return e.geometries;
		default: return [e];
	}
	return Array.from(e);
}
function pl(e) {
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
function ml(e, t = Array) {
	return e instanceof t ? e.slice() : t.from(e);
}
function hl({ x: e, x1: t, x2: n }) {
	return e !== void 0 || t !== void 0 || n !== void 0;
}
function gl({ y: e, y1: t, y2: n }) {
	return e !== void 0 || t !== void 0 || n !== void 0;
}
function _l(e) {
	return hl(e) || gl(e) || e.interval !== void 0;
}
function vl(e) {
	return e?.toString === Pc;
}
function yl(e) {
	return vl(e) && (e.type !== void 0 || e.domain !== void 0);
}
function bl(e) {
	return vl(e) && typeof e.transform != "function";
}
function xl(e) {
	return bl(e) && e.value === void 0 && e.channel === void 0;
}
function Sl(e, t, n, r = Xc) {
	return t === void 0 && n === void 0 ? (t = 0, n = e === void 0 ? r : e) : t === void 0 ? t = e === void 0 ? 0 : e : n === void 0 && (n = e === void 0 ? 0 : e), [t, n];
}
function Cl(e, t) {
	return e === void 0 && t === void 0 ? [$c, el] : [e, t];
}
function wl({ z: e, fill: t, stroke: n } = {}) {
	return e === void 0 && ([e] = sl(t)), e === void 0 && ([e] = sl(n)), e;
}
function Tl(e) {
	return Fc(e) ? e.length : e?.numRows;
}
function El(e) {
	let t = Tl(e), n = new Uint32Array(t);
	for (let e = 0; e < t; ++e) n[e] = e;
	return n;
}
function Dl(e, t) {
	return Fc(e) ? q(t, (t) => e[t], e.constructor) : q(t, (t) => e.at(t));
}
function Ol(e, t, n) {
	return e.subarray ? e.subarray(t, n) : e.slice(t, n);
}
function kl(e) {
	return typeof e == "object" && e ? e.valueOf() : e;
}
function Al(e) {
	let t;
	return [{
		transform: () => t,
		label: Ml(e)
	}, (e) => t = e];
}
function jl(e) {
	return e == null ? [e] : Al(e);
}
function Ml(e, t) {
	return typeof e == "string" ? e : e && e.label !== void 0 ? e.label : t;
}
function Nl(e, t) {
	return {
		transform(n) {
			let r = e.transform(n), i = t.transform(n);
			return Kl(r) || Kl(i) ? q(r, (e, t) => /* @__PURE__ */ new Date((+r[t] + +i[t]) / 2)) : q(r, (e, t) => (+r[t] + +i[t]) / 2, Float64Array);
		},
		label: e.label
	};
}
function Pl(e, t) {
	let n = Fl(t?.interval, t?.type);
	return n ? q(e, n) : e;
}
function Fl(e, t) {
	let n = Il(e, t);
	return n && ((e) => Js(e) ? n.floor(e) : e);
}
function Il(e, t) {
	if (e != null) {
		if (typeof e == "number") return Ll(e);
		if (typeof e == "string") return (t === "time" ? wc : Tc)(e);
		if (typeof e.floor != "function") throw Error("invalid interval; missing floor method");
		if (typeof e.offset != "function") throw Error("invalid interval; missing offset method");
		return e;
	}
}
function Ll(e) {
	e = +e, 0 < e && e < 1 && Number.isInteger(1 / e) && (e = -1 / e);
	let t = Math.abs(e);
	return e < 0 ? {
		floor: (e) => Math.floor(e * t) / t,
		offset: (e, n = 1) => (e * t + Math.floor(n)) / t,
		range: (e, n) => jt(Math.ceil(e * t), n * t).map((e) => e / t)
	} : {
		floor: (e) => Math.floor(e / t) * t,
		offset: (e, n = 1) => e + t * Math.floor(n),
		range: (e, n) => jt(Math.ceil(e / t), n / t).map((e) => e * t)
	};
}
function Rl(e, t) {
	if (e = Il(e, t), e && typeof e.range != "function") throw Error("invalid interval: missing range method");
	return e;
}
function zl(e, t) {
	if (e = Rl(e, t), e && typeof e.ceil != "function") throw Error("invalid interval: missing ceil method");
	return e;
}
function Bl(e) {
	return typeof e?.range == "function";
}
function Vl(e) {
	return e === void 0 || bl(e) ? e : { value: e };
}
function Hl(e) {
	return e == null ? null : {
		transform: (t) => Vc(t, e, Float64Array),
		label: Ml(e)
	};
}
function Ul(e) {
	return e && typeof e[Symbol.iterator] == "function";
}
function Wl(e) {
	for (let t of e) if (t != null) return typeof t != "object" || t instanceof Date;
}
function Gl(e) {
	for (let t of e) {
		if (t == null) continue;
		let e = typeof t;
		return e === "string" || e === "boolean";
	}
}
function Kl(e) {
	for (let t of e) if (t != null) return t instanceof Date;
}
function ql(e) {
	for (let t of e) if (t != null) return typeof t == "string" && isNaN(t) && ac(t);
}
function Jl(e) {
	for (let t of e) if (t != null) {
		if (typeof t != "string") return !1;
		if (t.trim()) return !isNaN(t);
	}
}
function Yl(e) {
	for (let t of e) if (t != null) return typeof t == "number";
}
function Xl(e, t) {
	let n;
	for (let r of e) if (r != null) {
		if (!t(r)) return !1;
		n = !0;
	}
	return n;
}
var Zl = new Set("none,currentcolor,transparent,aliceblue,antiquewhite,aqua,aquamarine,azure,beige,bisque,black,blanchedalmond,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick,floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey,honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon,lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink,lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyellow,lime,limegreen,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple,mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue,mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid,palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue,purple,rebeccapurple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna,silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,tomato,turquoise,violet,wheat,white,whitesmoke,yellow".split(","));
function Ql(e) {
	return typeof e == "string" && (e = e.toLowerCase().trim(), /^#[0-9a-f]{3,8}$/.test(e) || /^(?:url|var|rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color|color-mix)\(.*\)$/.test(e) || Zl.has(e));
}
function $l(e) {
	return typeof e == "number" && (0 <= e && e <= 1 || isNaN(e));
}
function J(e) {
	return e == null || eu(e);
}
function eu(e) {
	return /^\s*none\s*$/i.test(e);
}
function tu(e) {
	return /^\s*round\s*$/i.test(e);
}
function nu(e, t) {
	return ll(e, t, [
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
function ru(e = "middle") {
	return nu(e, "frameAnchor");
}
function iu(e = {}, ...t) {
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
function au(e) {
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
function ou(e) {
	return Ul(e) ? au(e) : e;
}
function su(e) {
	return e === !0 ? e = "frame" : e === !1 ? e = null : !pl(e) && e != null && (e = ul(e, "clip", ["frame", "sphere"]), e === "sphere" && (e = { type: "Sphere" })), e;
}
function cu(e) {
	return e && typeof e.getChild == "function" && typeof e.toArray == "function" && e.schema && Array.isArray(e.schema.fields);
}
function lu(e) {
	return e && typeof e.toArray == "function" && e.type;
}
function uu(e) {
	return e && (e.typeId === 8 || e.typeId === 10) && e.unit === 1;
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/index.js
var du = Symbol("position"), fu = Symbol("color"), pu = Symbol("radius"), mu = Symbol("length"), hu = Symbol("opacity"), gu = Symbol("symbol"), _u = Symbol("projection"), Y = /* @__PURE__ */ new Map([
	["x", du],
	["y", du],
	["fx", du],
	["fy", du],
	["r", pu],
	["color", fu],
	["opacity", hu],
	["symbol", gu],
	["length", mu],
	["projection", _u]
]);
function vu(e) {
	return e === du || e === _u;
}
function yu(e) {
	return e === du || e === pu || e === mu || e === hu;
}
var bu = 2 / Math.sqrt(3), xu = /* @__PURE__ */ new Map([
	["asterisk", zn],
	["circle", Bn],
	["cross", Vn],
	["diamond", Wn],
	["diamond2", Gn],
	["hexagon", { draw(e, t) {
		let n = Math.sqrt(t / Math.PI), r = n * bu, i = r / 2;
		e.moveTo(0, r), e.lineTo(n, i), e.lineTo(n, -i), e.lineTo(0, -r), e.lineTo(-n, -i), e.lineTo(-n, i), e.closePath();
	} }],
	["plus", Kn],
	["square", qn],
	["square2", Jn],
	["star", $n],
	["times", lr],
	["triangle", tr],
	["triangle2", rr],
	["wye", cr]
]);
function Su(e) {
	return e && typeof e.draw == "function";
}
function Cu(e) {
	return Su(e) ? !0 : typeof e == "string" && xu.has(e.toLowerCase());
}
function wu(e) {
	if (e == null || Su(e)) return e;
	let t = xu.get(`${e}`.toLowerCase());
	if (t) return t;
	throw Error(`invalid symbol: ${e}`);
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/basic.js
function Tu({ filter: e, sort: t, reverse: n, transform: r, initializer: i, ...a } = {}, o) {
	if (r === void 0 && (e != null && (r = ku(e)), t != null && !xl(t) && (r = Du(r, ju(t))), n && (r = Du(r, Au))), o != null && i != null) throw Error("transforms cannot be applied after initializers");
	return {
		...a,
		...(t === null || xl(t)) && { sort: t },
		transform: Du(r, o)
	};
}
function Eu({ filter: e, sort: t, reverse: n, initializer: r, ...i } = {}, a) {
	return r === void 0 && (e != null && (r = ku(e)), t != null && !xl(t) && (r = Ou(r, ju(t))), n && (r = Ou(r, Au))), {
		...i,
		...(t === null || xl(t)) && { sort: t },
		initializer: Ou(r, a)
	};
}
function Du(e, t) {
	return e == null ? t === null ? void 0 : t : t == null ? e === null ? void 0 : e : function(n, r, i) {
		return {data: n, facets: r} = e.call(this, n, r, i), t.call(this, dl(n), r, i);
	};
}
function Ou(e, t) {
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
function ku(e) {
	return (t, n) => {
		let r = Vc(t, e);
		return {
			data: t,
			facets: n.map((e) => e.filter((e) => r[e]))
		};
	};
}
function Au(e, t) {
	return {
		data: e,
		facets: t.map((e) => e.slice().reverse())
	};
}
function ju(e) {
	return (typeof e == "function" && e.length !== 1 ? Mu : Nu)(e);
}
function Mu(e) {
	return (t, n) => {
		let r = Fc(t) ? (n, r) => e(t[n], t[r]) : (n, r) => e(t.get(n), t.get(r));
		return {
			data: t,
			facets: n.map((e) => e.slice().sort(r))
		};
	};
}
function Nu(e) {
	let t, n;
	({channel: t, value: e, order: n} = { ...Vl(e) });
	let r = t?.startsWith("-");
	if (r && (t = t.slice(1)), n === void 0 && (n = r ? Xs : Ys), typeof n != "function") switch (`${n}`.toLowerCase()) {
		case "ascending":
			n = Ys;
			break;
		case "descending":
			n = Xs;
			break;
		default: throw Error(`invalid order: ${n}`);
	}
	return (r, i, a) => {
		let o;
		if (t === void 0) o = Vc(r, e);
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
function Pu(e, t, n = Fu) {
	if (e == null) return n(e);
	if (typeof e.reduceIndex == "function") return e;
	if (typeof e.reduce == "function" && vl(e)) return Iu(e);
	if (typeof e == "function") return Lu(e);
	if (/^p\d{2}$/i.test(e)) return Ru(nl(e));
	switch (`${e}`.toLowerCase()) {
		case "first": return Vu;
		case "last": return Hu;
		case "identity": return Bu;
		case "count": return Uu;
		case "distinct": return Wu;
		case "sum": return t == null ? Uu : Gu;
		case "proportion": return Ku(t, "data");
		case "proportion-facet": return Ku(t, "facet");
		case "deviation": return Ru(rt);
		case "min": return Ru(Ke);
		case "min-index": return Ru(vt);
		case "max": return Ru(qe);
		case "max-index": return Ru(_t);
		case "mean": return zu(wt);
		case "median": return zu(Tt);
		case "variance": return Ru(nt);
		case "mode": return Ru(Ot);
	}
	return n(e);
}
function Fu(e) {
	throw Error(`invalid reduce: ${e}`);
}
function Iu(e) {
	return console.warn("deprecated reduce interface; implement reduceIndex instead."), {
		...e,
		reduceIndex: e.reduce.bind(e)
	};
}
function Lu(e) {
	return { reduceIndex(t, n, r) {
		return e(Dl(n, t), r);
	} };
}
function Ru(e) {
	return { reduceIndex(t, n) {
		return e(t, (e) => n[e]);
	} };
}
function zu(e) {
	return { reduceIndex(t, n) {
		let r = e(t, (e) => n[e]);
		return Kl(n) ? new Date(r) : r;
	} };
}
var Bu = { reduceIndex(e, t) {
	return Dl(t, e);
} }, Vu = { reduceIndex(e, t) {
	return t[e[0]];
} }, Hu = { reduceIndex(e, t) {
	return t[e[e.length - 1]];
} }, Uu = {
	label: "Frequency",
	reduceIndex(e) {
		return e.length;
	}
}, Wu = {
	label: "Distinct",
	reduceIndex(e, t) {
		let n = new ne();
		for (let r of e) n.add(t[r]);
		return n.size;
	}
}, Gu = Ru(Je);
function Ku(e, t) {
	return e == null ? {
		scope: t,
		label: "Frequency",
		reduceIndex: (e, t, n = 1) => e.length / n
	} : {
		scope: t,
		reduceIndex: (e, t, n = 1) => Je(e, (e) => t[e]) / n
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/channel.js
function qu(e, { scale: t, type: n, value: r, filter: i, hint: a, label: o = Ml(r) }, s) {
	return a === void 0 && typeof r?.transform == "function" && (a = r.hint), Xu(s, {
		scale: t,
		type: n,
		value: Vc(e, r),
		label: o,
		filter: i,
		hint: a
	});
}
function Ju(e, t) {
	return Object.fromEntries(Object.entries(e).map(([e, n]) => [e, qu(t, n, e)]));
}
function Yu(e, t) {
	let n = Object.fromEntries(Object.entries(e).map(([e, { scale: n, value: r }]) => {
		let i = n == null ? null : t[n];
		return [e, i == null ? r : q(r, i)];
	}));
	return n.channels = e, n;
}
function Xu(e, t) {
	let { scale: n, value: r } = t;
	if (n === !0 || n === "auto") switch (e) {
		case "fill":
		case "stroke":
		case "color":
			t.scale = n !== !0 && Xl(r, Ql) ? null : "color", t.defaultScale = "color";
			break;
		case "fillOpacity":
		case "strokeOpacity":
		case "opacity":
			t.scale = n !== !0 && Xl(r, $l) ? null : "opacity", t.defaultScale = "opacity";
			break;
		case "symbol":
			n !== !0 && Xl(r, Cu) ? (t.scale = null, t.value = q(r, wu)) : t.scale = "symbol", t.defaultScale = "symbol";
			break;
		default: t.scale = Y.has(e) ? e : null;
	}
	else if (n === !1) t.scale = null;
	else if (n != null && !Y.has(n)) throw Error(`unknown scale: ${n}`);
	return t;
}
function Zu(e, t, n, r, i) {
	let { order: a, reverse: o, reduce: s = !0, limit: c } = i;
	for (let l in i) {
		if (!Y.has(l)) continue;
		let { value: u, order: d = a, reverse: f = o, reduce: p = s, limit: m = c } = Vl(i[l]), h = u?.startsWith("-");
		if (h && (u = u.slice(1)), d = d === void 0 ? h === (u === "width" || u === "height") ? rd : id : nd(d), p == null || p === !1) continue;
		let g = l === "fx" || l === "fy" ? $u(t, r[l]) : Qu(n, l);
		if (!g) throw Error(`missing channel for scale: ${l}`);
		let _ = g.value, [v = 0, y = Infinity] = Ul(m) ? m : m < 0 ? [m] : [0, m];
		if (u == null) g.domain = () => {
			let e = Array.from(new ne(_));
			return f && (e = e.reverse()), (v !== 0 || y !== Infinity) && (e = e.slice(v, y)), e;
		};
		else {
			let t = u === "data" ? e : u === "height" ? ed(n, "y1", "y2") : u === "width" ? ed(n, "x1", "x2") : td(n, u, u === "y" ? "y2" : u === "x" ? "x2" : void 0), r = Pu(p === !0 ? "max" : p, t);
			g.domain = () => {
				let e = ut(El(_), (e) => r.reduceIndex(e, t), (e) => _[e]);
				return d && e.sort(d), f && e.reverse(), (v !== 0 || y !== Infinity) && (e = e.slice(v, y)), e.map($c);
			};
		}
	}
}
function Qu(e, t) {
	for (let n in e) {
		let r = e[n];
		if (r.scale === t) return r;
	}
}
function $u(e, t) {
	let n = e.original;
	if (n === e) return t;
	let r = t.value, i = t.value = [];
	for (let t = 0; t < n.length; ++t) {
		let a = r[n[t][0]];
		for (let n of e[t]) i[n] = a;
	}
	return t;
}
function ed(e, t, n) {
	let r = td(e, t);
	return q(td(e, n), (e, t) => Math.abs(e - r[t]), Float64Array);
}
function td(e, t, n) {
	let r = e[t];
	if (!r && n !== void 0 && (r = e[n]), r) return r.value;
	throw Error(`missing channel: ${t}`);
}
function nd(e) {
	if (e == null || typeof e == "function") return e;
	switch (`${e}`.toLowerCase()) {
		case "ascending": return rd;
		case "descending": return id;
	}
	throw Error(`invalid order: ${e}`);
}
function rd([e, t], [n, r]) {
	return Ys(t, r) || Ys(e, n);
}
function id([e, t], [n, r]) {
	return Xs(t, r) || Ys(e, n);
}
function ad(e, t) {
	let n = e[t];
	if (n) {
		for (; n.source;) n = n.source;
		return n.source === null ? null : n;
	}
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/schemes.js
var od = /* @__PURE__ */ new Map([
	["accent", So],
	["category10", xo],
	["dark2", Co],
	["observable10", wo],
	["paired", To],
	["pastel1", Eo],
	["pastel2", Do],
	["set1", Oo],
	["set2", ko],
	["set3", Ao],
	["tableau10", jo]
]);
function sd(e) {
	return e != null && od.has(`${e}`.toLowerCase());
}
var cd = new Map([
	...od,
	["brbg", ld(Mo, No)],
	["prgn", ld(Po, Fo)],
	["piyg", ld(Io, Lo)],
	["puor", ld(Ro, zo)],
	["rdbu", ld(Bo, Vo)],
	["rdgy", ld(Ho, Uo)],
	["rdylbu", ld(Wo, Go)],
	["rdylgn", ld(Ko, qo)],
	["spectral", ld(Jo, Yo)],
	["burd", ud(Bo, Vo)],
	["buylrd", ud(Wo, Go)],
	["blues", X(bs, xs)],
	["greens", X(Ss, Cs)],
	["greys", X(ws, Ts)],
	["oranges", X(As, js)],
	["purples", X(Es, Ds)],
	["reds", X(Os, ks)],
	["turbo", dd(Hs)],
	["viridis", dd(Ws)],
	["magma", dd(Gs)],
	["inferno", dd(Ks)],
	["plasma", dd(qs)],
	["cividis", dd(Ms)],
	["cubehelix", dd(Ns)],
	["warm", dd(Ps)],
	["cool", dd(Fs)],
	["bugn", X(Xo, Zo)],
	["bupu", X(Qo, $o)],
	["gnbu", X(es, ts)],
	["orrd", X(ns, rs)],
	["pubu", X(os, ss)],
	["pubugn", X(is, as)],
	["purd", X(cs, ls)],
	["rdpu", X(us, ds)],
	["ylgn", X(ms, hs)],
	["ylgnbu", X(fs, ps)],
	["ylorbr", X(gs, _s)],
	["ylorrd", X(vs, ys)],
	["rainbow", fd(Ls)],
	["sinebow", fd(Vs)]
]);
function X(e, t) {
	return ({ length: n }) => n === 1 ? [e[3][1]] : n === 2 ? [e[3][1], e[3][2]] : (n = Math.max(3, Math.floor(n)), n > 9 ? Cn(t, n) : e[n]);
}
function ld(e, t) {
	return ({ length: n }) => n === 2 ? [e[3][0], e[3][2]] : (n = Math.max(3, Math.floor(n)), n > 11 ? Cn(t, n) : e[n]);
}
function ud(e, t) {
	return ({ length: n }) => n === 2 ? [e[3][2], e[3][0]] : (n = Math.max(3, Math.floor(n)), n > 11 ? Cn((e) => t(1 - e), n) : e[n].slice().reverse());
}
function dd(e) {
	return ({ length: t }) => Cn(e, Math.max(2, Math.floor(t)));
}
function fd(e) {
	return ({ length: t }) => Cn(e, Math.floor(t) + 1).slice(0, -1);
}
function pd(e) {
	let t = `${e}`.toLowerCase();
	if (!cd.has(t)) throw Error(`unknown ordinal scheme: ${t}`);
	return cd.get(t);
}
function md(e, t) {
	let n = pd(e), r = typeof n == "function" ? n({ length: t }) : n;
	return r.length === t ? r : r.slice(0, t);
}
function hd(e, t = "greys") {
	let n = /* @__PURE__ */ new Set(), [r, i] = md(t, 2);
	for (let t of e) if (t != null) if (t === !0) n.add(i);
	else if (t === !1) n.add(r);
	else return;
	return [...n];
}
var gd = /* @__PURE__ */ new Map([
	["brbg", No],
	["prgn", Fo],
	["piyg", Lo],
	["puor", zo],
	["rdbu", Vo],
	["rdgy", Uo],
	["rdylbu", Go],
	["rdylgn", qo],
	["spectral", Yo],
	["burd", (e) => Vo(1 - e)],
	["buylrd", (e) => Go(1 - e)],
	["blues", xs],
	["greens", Cs],
	["greys", Ts],
	["purples", Ds],
	["reds", ks],
	["oranges", js],
	["turbo", Hs],
	["viridis", Ws],
	["magma", Gs],
	["inferno", Ks],
	["plasma", qs],
	["cividis", Ms],
	["cubehelix", Ns],
	["warm", Ps],
	["cool", Fs],
	["bugn", Zo],
	["bupu", $o],
	["gnbu", ts],
	["orrd", rs],
	["pubugn", as],
	["pubu", ss],
	["purd", ls],
	["rdpu", ds],
	["ylgnbu", ps],
	["ylgn", hs],
	["ylorbr", _s],
	["ylorrd", ys],
	["rainbow", Ls],
	["sinebow", Vs]
]);
function _d(e) {
	let t = `${e}`.toLowerCase();
	if (!gd.has(t)) throw Error(`unknown quantitative scheme: ${t}`);
	return gd.get(t);
}
var vd = /* @__PURE__ */ new Set([
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
function yd(e) {
	return e != null && vd.has(`${e}`.toLowerCase());
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/quantitative.js
var bd = (e) => (t) => e(1 - t), xd = [0, 1], Sd = /* @__PURE__ */ new Map([
	["number", a],
	["rgb", h],
	["hsl", gn],
	["hcl", yn],
	["lab", _n]
]);
function Cd(e) {
	let t = `${e}`.toLowerCase();
	if (!Sd.has(t)) throw Error(`unknown interpolator: ${t}`);
	return Sd.get(t);
}
function wd(e, t, n, { type: r, nice: i, clamp: o, zero: s, domain: c = Rd(e, n), unknown: l, round: u, scheme: d, interval: f, range: p = Y.get(e) === pu ? Bd(n, c) : Y.get(e) === mu ? Vd(n, c) : Y.get(e) === hu ? xd : void 0, interpolate: m = Y.get(e) === fu ? d == null && p !== void 0 ? h : _d(d === void 0 ? r === "cyclical" ? "rainbow" : "turbo" : d) : u ? C : a, reverse: g }) {
	if (c = Td(c), f = Rl(f, r), (r === "cyclical" || r === "sequential") && (r = "linear"), typeof m != "function" && (m = Cd(m)), g = !!g, p !== void 0 && c.length !== (p = Td(p)).length) {
		if (m.length === 1) throw Error("invalid piecewise interpolator");
		m = Sn(m, p), p = void 0;
	}
	if (m.length === 1 ? (g &&= (m = bd(m), !1), p === void 0 && (p = Float64Array.from(c, (e, t) => t / (c.length - 1)), p.length === 2 && (p = xd)), t.interpolate((p === xd ? tl : Wd)(m))) : t.interpolate(m), s) {
		let [e, t] = at(c);
		(e > 0 || t < 0) && (c = ml(c), (oc(c) || 1) === Math.sign(e) ? c[0] = 0 : c[c.length - 1] = 0);
	}
	return g && (c = Mt(c)), t.domain(c).unknown(l), i && (t.nice(Ed(i, r)), c = t.domain()), p !== void 0 && t.range(p), o && t.clamp(o), {
		type: r,
		domain: c,
		range: p,
		scale: t,
		interpolate: m,
		interval: f
	};
}
function Td(e) {
	return e = fl(e), e.length >= 2 ? e : [e[0], e[0]];
}
function Ed(e, t) {
	return e === !0 ? void 0 : typeof e == "number" ? e : zl(e, t);
}
function Dd(e, t, n) {
	return wd(e, We(), t, n);
}
function Od(e, t, n) {
	return kd(e, t, {
		...n,
		exponent: .5
	});
}
function kd(e, t, { exponent: n = 1, ...r }) {
	return wd(e, kn().exponent(n), t, {
		...r,
		type: "pow"
	});
}
function Ad(e, t, { base: n = 10, domain: r = Hd(t), ...i }) {
	return wd(e, ue().base(n), t, {
		...i,
		domain: r
	});
}
function jd(e, t, { constant: n = 1, ...r }) {
	return wd(e, xe().constant(n), t, r);
}
function Md(e, t, { range: n, quantiles: r = n === void 0 ? 5 : (n = [...n]).length, n: i = r, scheme: a = "rdylbu", domain: o = Ud(t), unknown: s, interpolate: c, reverse: l }) {
	return n === void 0 && (n = c === void 0 ? Y.get(e) === fu ? md(a, i) : void 0 : Cn(c, i)), o.length > 0 && (o = An(o, n === void 0 ? { length: i } : n).quantiles()), Pd(e, t, {
		domain: o,
		range: n,
		reverse: l,
		unknown: s
	});
}
function Nd(e, t, { range: n, n: r = n === void 0 ? 5 : (n = [...n]).length, scheme: i = "rdylbu", domain: o = Rd(e, t), unknown: s, interpolate: c, reverse: l }) {
	let [u, d] = at(o), f;
	return n === void 0 ? (f = E(u, d, r), f[0] <= u && f.splice(0, 1), f[f.length - 1] >= d && f.pop(), r = f.length + 1, n = c === void 0 ? Y.get(e) === fu ? md(i, r) : void 0 : Cn(c, r)) : (f = Cn(a(u, d), r + 1).slice(1, -1), u instanceof Date && (f = f.map((e) => new Date(e)))), oc(fl(o)) < 0 && f.reverse(), Pd(e, t, {
		domain: f,
		range: n,
		reverse: l,
		unknown: s
	});
}
function Pd(e, t, { domain: n = [0], unknown: r, scheme: i = "rdylbu", interpolate: a, range: o = a === void 0 ? Y.get(e) === fu ? md(i, n.length + 1) : void 0 : Cn(a, n.length + 1), reverse: s }) {
	n = fl(n);
	let c = oc(n);
	if (!isNaN(c) && !Fd(n, c)) throw Error(`the ${e} scale has a non-monotonic domain`);
	return s && (o = Mt(o)), {
		type: "threshold",
		scale: jn(c < 0 ? Mt(n) : n, o === void 0 ? [] : o).unknown(r),
		domain: n,
		range: o
	};
}
function Fd(e, t) {
	for (let n = 1, r = e.length, i = e[0]; n < r; ++n) {
		let r = ae(i, i = e[n]);
		if (r !== 0 && r !== t) return !1;
	}
	return !0;
}
function Id(e) {
	return {
		type: "identity",
		scale: yu(Y.get(e)) ? wn() : (e) => e
	};
}
function Ld(e, t = Qs) {
	return e.length ? [Ke(e, ({ value: e }) => e === void 0 ? e : Ke(e, t)), qe(e, ({ value: e }) => e === void 0 ? e : qe(e, t))] : [0, 1];
}
function Rd(e, t) {
	let n = Y.get(e);
	return (n === pu || n === hu || n === mu ? zd : Ld)(t);
}
function zd(e) {
	return [0, e.length ? qe(e, ({ value: e }) => e === void 0 ? e : qe(e, Qs)) : 1];
}
function Bd(e, t) {
	let n = e.find(({ radius: e }) => e !== void 0);
	if (n !== void 0) return [0, n.radius];
	let r = St(e, .5, ({ value: e }) => e === void 0 ? NaN : St(e, .25, $s)), i = t.map((e) => 3 * Math.sqrt(e / r)), a = 30 / qe(i);
	return a < 1 ? i.map((e) => e * a) : i;
}
function Vd(e, t) {
	let n = Tt(e, ({ value: e }) => e === void 0 ? NaN : Tt(e, Math.abs)), r = t.map((e) => 12 * e / n), i = 60 / qe(r);
	return i < 1 ? r.map((e) => e * i) : r;
}
function Hd(e) {
	for (let { value: t } of e) if (t !== void 0) for (let n of t) {
		if (n > 0) return Ld(e, $s);
		if (n < 0) return Ld(e, ec);
	}
	return [1, 10];
}
function Ud(e) {
	let t = [];
	for (let { value: n } of e) if (n !== void 0) for (let e of n) t.push(e);
	return t;
}
function Wd(e) {
	return (t, n) => (r) => e(t + r * (n - t));
}
//#endregion
//#region node_modules/@observablehq/plot/src/warnings.js
var Gd = 0, Kd;
function qd() {
	let e = Gd;
	return Gd = 0, Kd = void 0, e;
}
function Jd(e) {
	e !== Kd && (Kd = e, console.warn(e), ++Gd);
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/diverging.js
function Yd(e, t, n, r, { type: i, nice: o, clamp: s, domain: c = Ld(r), unknown: l, pivot: u = 0, scheme: d, range: f, symmetric: p = !0, interpolate: m = Y.get(e) === fu ? d == null && f !== void 0 ? h : _d(d === void 0 ? "rdbu" : d) : a, reverse: g }) {
	u = +u, c = fl(c);
	let [_, v] = c;
	if (c.length > 2 && Jd(`Warning: the diverging ${e} scale domain contains extra elements.`), ae(_, v) < 0 && ([_, v] = [v, _], g = !g), _ = Math.min(_, u), v = Math.max(v, u), typeof m != "function" && (m = Cd(m)), f !== void 0 && (m = m.length === 1 ? Wd(m)(...f) : Sn(m, f)), g && (m = bd(m)), p) {
		let e = n.apply(u), t = e - n.apply(_), r = n.apply(v) - e;
		t < r ? _ = n.invert(e - r) : t > r && (v = n.invert(e + t));
	}
	return t.domain([
		_,
		u,
		v
	]).unknown(l).interpolator(m), s && t.clamp(s), o && t.nice(o), {
		type: i,
		domain: [_, v],
		pivot: u,
		interpolate: m,
		scale: t
	};
}
function Xd(e, t, n) {
	return Yd(e, Pn(), tf, t, n);
}
function Zd(e, t, n) {
	return Qd(e, t, {
		...n,
		exponent: .5
	});
}
function Qd(e, t, { exponent: n = 1, ...r }) {
	return Yd(e, Ln().exponent(n = +n), af(n), t, {
		...r,
		type: "diverging-pow"
	});
}
function $d(e, t, { base: n = 10, pivot: r = 1, domain: i = Ld(t, r < 0 ? ec : $s), ...a }) {
	return Yd(e, Fn().base(n = +n), nf, t, {
		domain: i,
		pivot: r,
		...a
	});
}
function ef(e, t, { constant: n = 1, ...r }) {
	return Yd(e, In().constant(n = +n), of(n), t, r);
}
var tf = {
	apply(e) {
		return e;
	},
	invert(e) {
		return e;
	}
}, nf = {
	apply: Math.log,
	invert: Math.exp
}, rf = {
	apply(e) {
		return Math.sign(e) * Math.sqrt(Math.abs(e));
	},
	invert(e) {
		return e * e * Math.sign(e);
	}
};
function af(e) {
	return e === .5 ? rf : {
		apply(t) {
			return Math.sign(t) * Math.abs(t) ** +e;
		},
		invert(t) {
			return Math.sign(t) * Math.abs(t) ** (1 / e);
		}
	};
}
function of(e) {
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
function sf(e, t, n, r) {
	return wd(e, t, n, r);
}
function cf(e, t, n) {
	return sf(e, Oe(), t, n);
}
function lf(e, t, n) {
	return sf(e, Me(), t, n);
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales/ordinal.js
var uf = Symbol("ordinal");
function df(e, t, n, { type: r, interval: i, domain: a, range: o, reverse: s, hint: c }) {
	return i = Rl(i, r), a === void 0 && (a = gf(n, i, e)), (r === "categorical" || r === uf) && (r = "ordinal"), s && (a = Mt(a)), a = t.domain(a).domain(), o !== void 0 && (typeof o == "function" && (o = o(a)), t.range(o)), {
		type: r,
		domain: a,
		range: o,
		scale: t,
		hint: c,
		interval: i
	};
}
function ff(e, t, { type: n, interval: r, domain: i, range: a, scheme: o, unknown: s, ...c }) {
	r = Rl(r, n), i === void 0 && (i = gf(t, r, e));
	let l;
	if (Y.get(e) === gu) l = vf(t), a = a === void 0 ? yf(l) : q(a, wu);
	else if (Y.get(e) === fu && (a === void 0 && (n === "ordinal" || n === uf) && (a = hd(i, o), a !== void 0 && (o = void 0)), o === void 0 && a === void 0 && (o = n === "ordinal" ? "turbo" : "observable10"), o !== void 0)) if (a !== void 0) {
		let e = _d(o), t = a[0], n = a[1] - a[0];
		a = ({ length: r }) => Cn((r) => e(t + n * r), r);
	} else a = pd(o);
	if (s === j) throw Error(`implicit unknown on ${e} scale is not supported`);
	return df(e, Te().unknown(s), t, {
		...c,
		type: n,
		domain: i,
		range: a,
		hint: l
	});
}
function pf(e, t, { align: n = .5, padding: r = .5, ...i }) {
	return hf(Ft().align(n).padding(r), t, i, e);
}
function mf(e, t, { align: n = .5, padding: r = .1, paddingInner: i = r, paddingOuter: a = e === "fx" || e === "fy" ? 0 : r, ...o }) {
	return hf(Nt().align(n).paddingInner(i).paddingOuter(a), t, o, e);
}
function hf(e, t, n, r) {
	let { round: i } = n;
	return i !== void 0 && e.round(i = !!i), e = df(r, e, t, n), e.round = i, e;
}
function gf(e, t, n) {
	let r = new ne();
	for (let { value: t, domain: n } of e) {
		if (n !== void 0) return n();
		if (t !== void 0) for (let e of t) r.add(e);
	}
	if (t !== void 0) {
		let [e, n] = at(r).map(t.floor, t);
		return t.range(e, t.offset(n));
	}
	if (r.size > 1e4 && Y.get(n) === du) throw Error(`implicit ordinal domain of ${n} scale has more than 10,000 values`);
	return pt(r, Ys);
}
function _f(e, t) {
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
function vf(e) {
	return {
		fill: _f(e, "fill"),
		stroke: _f(e, "stroke")
	};
}
function yf(e) {
	return J(e.fill) ? dr : ur;
}
//#endregion
//#region node_modules/@observablehq/plot/src/scales.js
function bf(e, { label: t, inset: n = 0, insetTop: r = n, insetRight: i = n, insetBottom: a = n, insetLeft: o = n, round: s, nice: c, clamp: l, zero: u, align: d, padding: f, projection: p, facet: { label: m = t } = {}, ...h } = {}) {
	let g = {};
	for (let [n, _] of e) {
		let e = h[n], v = Mf(n, _, {
			round: Y.get(n) === du ? s : void 0,
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
			v.percent = !!c, v.label = s === void 0 ? Cf(_, v) : s, v.transform = l, n === "x" || n === "fx" ? (v.insetLeft = +h, v.insetRight = +f) : (n === "y" || n === "fy") && (v.insetTop = +d, v.insetBottom = +p), g[n] = v;
		}
	}
	return g;
}
function xf(e) {
	let t = {}, n = { scales: t };
	for (let [r, i] of Object.entries(e)) {
		let { scale: e, type: a, interval: o, label: s } = i;
		t[r] = Gf(i), n[r] = e, e.type = a, o != null && (e.interval = o), s != null && (e.label = s);
	}
	return n;
}
function Sf(e, t) {
	let { x: n, y: r, fx: i, fy: a } = e, o = i || a ? Tf(t) : t;
	i && Df(i, o), a && Of(a, o);
	let s = i || a ? Ef(e, t) : t;
	n && Df(n, s), r && Of(r, s);
}
function Cf(e = [], t) {
	let n;
	for (let { label: t } of e) if (t !== void 0) {
		if (n === void 0) n = t;
		else if (n !== t) return;
	}
	if (n !== void 0) return !Rf(t) && t.percent && (n = `${n} (%)`), {
		inferred: !0,
		toString: () => n
	};
}
function wf(e) {
	return Math.sign(oc(e.domain())) * Math.sign(oc(e.range()));
}
function Tf(e) {
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
function Ef({ fx: e, fy: t }, n) {
	let { marginTop: r, marginRight: i, marginBottom: a, marginLeft: o, width: s, height: c } = Tf(n);
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
function Df(e, t) {
	if (e.range === void 0) {
		let { insetLeft: n, insetRight: r } = e, { width: i, marginLeft: a = 0, marginRight: o = 0 } = t, s = a + n, c = i - o - r;
		e.range = [s, Math.max(s, c)], Rf(e) || (e.range = jf(e)), e.scale.range(e.range);
	}
	kf(e);
}
function Of(e, t) {
	if (e.range === void 0) {
		let { insetTop: n, insetBottom: r } = e, { height: i, marginTop: a = 0, marginBottom: o = 0 } = t, s = a + n, c = i - o - r;
		e.range = [Math.max(s, c), s], Rf(e) ? e.range.reverse() : e.range = jf(e), e.scale.range(e.range);
	}
	kf(e);
}
function kf(e) {
	e.round === void 0 && Bf(e) && Af(e) <= 30 && e.scale.round(!0);
}
function Af({ scale: e }) {
	let t = e.domain().length, [n, r] = e.range(), i = e.paddingInner ? e.paddingInner() : 1, a = e.paddingOuter ? e.paddingOuter() : e.padding(), o = t - i, s = Math.abs(r - n) / Math.max(1, o + a * 2);
	return (s - Math.floor(s)) * o;
}
function jf(e) {
	let t = e.scale.domain().length + zf(e);
	if (!(t > 2)) return e.range;
	let [n, r] = e.range;
	return Array.from({ length: t }, (e, i) => n + i / (t - 1) * (r - n));
}
function Mf(e, t = [], n = {}) {
	let r = If(e, t, n);
	if (n.type === void 0 && n.domain === void 0 && n.range === void 0 && n.interval == null && e !== "fx" && e !== "fy" && Rf({ type: r })) {
		let n = t.map(({ value: e }) => e).filter((e) => e !== void 0);
		n.some(Kl) ? Jd(`Warning: some data associated with the ${e} scale are dates. Dates are typically associated with a "utc" or "time" scale rather than a "${Nf(r)}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can specify the interval of the ${e} scale (e.g., d3.utcDay), or you can suppress this warning by setting the type of the ${e} scale to "${Nf(r)}".`) : n.some(ql) ? Jd(`Warning: some data associated with the ${e} scale are strings that appear to be dates (e.g., YYYY-MM-DD). If these strings represent dates, you should parse them to Date objects. Dates are typically associated with a "utc" or "time" scale rather than a "${Nf(r)}" scale. If you are using a bar mark, you probably want a rect mark with the interval option instead; if you are using a group transform, you probably want a bin transform instead. If you want to treat this data as ordinal, you can suppress this warning by setting the type of the ${e} scale to "${Nf(r)}".`) : n.some(Jl) && Jd(`Warning: some data associated with the ${e} scale are strings that appear to be numbers. If these strings represent numbers, you should parse or coerce them to numbers. Numbers are typically associated with a "linear" scale rather than a "${Nf(r)}" scale. If you want to treat this data as ordinal, you can specify the interval of the ${e} scale (e.g., 1 for integers), or you can suppress this warning by setting the type of the ${e} scale to "${Nf(r)}".`);
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
			n = Hf(t, n, rl);
			break;
		case "identity":
			switch (Y.get(e)) {
				case du:
					n = Hf(t, n, rl);
					break;
				case gu: n = Hf(t, n, Uf);
			}
			break;
		case "utc":
		case "time": n = Hf(t, n, al);
	}
	switch (r) {
		case "diverging": return Xd(e, t, n);
		case "diverging-sqrt": return Zd(e, t, n);
		case "diverging-pow": return Qd(e, t, n);
		case "diverging-log": return $d(e, t, n);
		case "diverging-symlog": return ef(e, t, n);
		case "categorical":
		case "ordinal":
		case uf: return ff(e, t, n);
		case "cyclical":
		case "sequential":
		case "linear": return Dd(e, t, n);
		case "sqrt": return Od(e, t, n);
		case "threshold": return Pd(e, t, n);
		case "quantile": return Md(e, t, n);
		case "quantize": return Nd(e, t, n);
		case "pow": return kd(e, t, n);
		case "log": return Ad(e, t, n);
		case "symlog": return jd(e, t, n);
		case "utc": return lf(e, t, n);
		case "time": return cf(e, t, n);
		case "point": return pf(e, t, n);
		case "band": return mf(e, t, n);
		case "identity": return Id(e);
		case void 0: return;
		default: throw Error(`unknown scale type: ${r}`);
	}
}
function Nf(e) {
	return typeof e == "symbol" ? e.description : e;
}
function Pf(e) {
	return typeof e == "string" ? `${e}`.toLowerCase() : e;
}
var Ff = { toString: () => "projection" };
function If(e, t, { type: n, domain: r, range: i, scheme: a, pivot: o, projection: s }) {
	if (n = Pf(n), e === "fx" || e === "fy") return "band";
	(e === "x" || e === "y") && s != null && (n = Ff);
	for (let e of t) {
		let t = Pf(e.type);
		if (t !== void 0) {
			if (n === void 0) n = t;
			else if (n !== t) throw Error(`scale incompatible with channel: ${n} !== ${t}`);
		}
	}
	if (n === Ff) return;
	if (n !== void 0) return n;
	if (r === void 0 && !t.some(({ value: e }) => e !== void 0)) return;
	let c = Y.get(e);
	if (c === pu) return "sqrt";
	if (c === hu || c === mu) return "linear";
	if (c === gu) return "ordinal";
	let l = (r ?? i)?.length;
	if (l < 2 || l > 2) return Lf(c);
	if (r !== void 0) {
		if (Gl(r)) return Lf(c);
		if (Kl(r)) return "utc";
	} else {
		let e = t.map(({ value: e }) => e).filter((e) => e !== void 0);
		if (e.some(Gl)) return Lf(c);
		if (e.some(Kl)) return "utc";
	}
	if (c === fu) {
		if (o != null || yd(a)) return "diverging";
		if (sd(a)) return "categorical";
	}
	return "linear";
}
function Lf(e) {
	switch (e) {
		case du: return "point";
		case fu: return uf;
		default: return "ordinal";
	}
}
function Rf({ type: e }) {
	return e === "ordinal" || e === "point" || e === "band" || e === uf;
}
function zf({ type: e }) {
	return e === "threshold";
}
function Bf({ type: e }) {
	return e === "point" || e === "band";
}
function Vf(e) {
	if (e === void 0) return !0;
	let t = e.domain(), n = e(t[0]);
	for (let r = 1, i = t.length; r < i; ++r) if (e(t[r]) - n) return !1;
	return !0;
}
function Hf(e, { domain: t, ...n }, r) {
	for (let n of e) n.value !== void 0 && (t === void 0 && (t = n.value?.domain), n.value = r(n.value));
	return {
		domain: t === void 0 ? t : r(t),
		...n
	};
}
function Uf(e) {
	return q(e, wu);
}
function Wf(e) {
	return (t) => {
		if (!Y.has(t = `${t}`)) throw Error(`unknown scale: ${t}`);
		return e[t];
	};
}
function Gf({ scale: e, type: t, domain: n, range: r, interpolate: i, interval: a, transform: o, percent: s, pivot: c }) {
	if (t === "identity") return {
		type: "identity",
		apply: (e) => e,
		invert: (e) => e
	};
	let l = e.unknown ? e.unknown() : void 0;
	return {
		type: t,
		domain: ml(n),
		...r !== void 0 && { range: ml(r) },
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
function Kf(e, t) {
	let { fx: n, fy: r } = bf(e, t), i = n?.scale.domain(), a = r?.scale.domain();
	return i && a ? et(i, a).map(([e, t], n) => ({
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
function qf(e, { x: t, y: n }) {
	return t &&= ep(t), n &&= ep(n), e.filter(t && n ? (e) => t.has(e.x) && n.has(e.y) : t ? (e) => t.has(e.x) : (e) => n.has(e.y)).sort(t && n ? (e, r) => t.get(e.x) - t.get(r.x) || n.get(e.y) - n.get(r.y) : t ? (e, n) => t.get(e.x) - t.get(n.x) : (e, t) => n.get(e.y) - n.get(t.y));
}
function Jf(e, { fx: t, fy: n }) {
	let r = El(e), i = t?.value, a = n?.value;
	return t && n ? lt(r, (e) => (e.fx = i[e[0]], e.fy = a[e[0]], e), (e) => i[e], (e) => a[e]) : t ? lt(r, (e) => (e.fx = i[e[0]], e), (e) => i[e]) : lt(r, (e) => (e.fy = a[e[0]], e), (e) => a[e]);
}
function Yf(e, t, { marginTop: n, marginLeft: r }) {
	let i = e ? ({ x: t }) => e(t) - r : () => 0, a = t ? ({ y: e }) => t(e) - n : () => 0;
	return function(e) {
		this.tagName === "svg" ? (this.setAttribute("x", i(e)), this.setAttribute("y", a(e))) : this.setAttribute("transform", `translate(${i(e)},${a(e)})`);
	};
}
function Xf(e) {
	let t = [], n = new Uint32Array(Je(e, (e) => e.length));
	for (let r of e) {
		let i = 0;
		for (let t of e) r !== t && (n.set(t, i), i += t.length);
		t.push(n.slice(0, i));
	}
	return t;
}
var Zf = /* @__PURE__ */ new Map([
	["top", ip],
	["right", sp],
	["bottom", ap],
	["left", op],
	["top-left", pp(ip, op)],
	["top-right", pp(ip, sp)],
	["bottom-left", pp(ap, op)],
	["bottom-right", pp(ap, sp)],
	["top-empty", cp],
	["right-empty", dp],
	["bottom-empty", lp],
	["left-empty", up],
	["empty", fp]
]);
function Qf(e) {
	if (e == null) return null;
	let t = Zf.get(`${e}`.toLowerCase());
	if (t) return t;
	throw Error(`invalid facet anchor: ${e}`);
}
var $f = /* @__PURE__ */ new WeakMap();
function ep(e) {
	let t = $f.get(e);
	return t || $f.set(e, t = new k(q(e, (e, t) => [e, t]))), t;
}
function tp(e, t) {
	return ep(e).get(t);
}
function np(e, t, n) {
	return t = kl(t), n = kl(n), e.find((e) => Object.is(kl(e.x), t) && Object.is(kl(e.y), n));
}
function rp(e, t, n) {
	return np(e, t, n)?.empty;
}
function ip(e, { y: t }, { y: n }) {
	return !t || tp(t, n) === 0;
}
function ap(e, { y: t }, { y: n }) {
	return !t || tp(t, n) === t.length - 1;
}
function op(e, { x: t }, { x: n }) {
	return !t || tp(t, n) === 0;
}
function sp(e, { x: t }, { x: n }) {
	return !t || tp(t, n) === t.length - 1;
}
function cp(e, { y: t }, { x: n, y: r, empty: i }) {
	if (i) return !1;
	if (!t) return;
	let a = tp(t, r);
	if (a > 0) return rp(e, n, t[a - 1]);
}
function lp(e, { y: t }, { x: n, y: r, empty: i }) {
	if (i) return !1;
	if (!t) return;
	let a = tp(t, r);
	if (a < t.length - 1) return rp(e, n, t[a + 1]);
}
function up(e, { x: t }, { x: n, y: r, empty: i }) {
	if (i) return !1;
	if (!t) return;
	let a = tp(t, n);
	if (a > 0) return rp(e, t[a - 1], r);
}
function dp(e, { x: t }, { x: n, y: r, empty: i }) {
	if (i) return !1;
	if (!t) return;
	let a = tp(t, n);
	if (a < t.length - 1) return rp(e, t[a + 1], r);
}
function fp(e, t, { empty: n }) {
	return n;
}
function pp(e, t) {
	return function() {
		return e.apply(null, arguments) && t.apply(null, arguments);
	};
}
function mp(e, { channels: { fx: t, fy: n }, groups: r }) {
	return t && n ? e.map(({ x: e, y: t }) => r.get(e)?.get(t) ?? []) : t ? e.map(({ x: e }) => r.get(e) ?? []) : e.map(({ y: e }) => r.get(e) ?? []);
}
//#endregion
//#region node_modules/@observablehq/plot/src/projection.js
var hp = Math.PI, gp = 2 * hp, _p = .618;
function vp({ projection: e, inset: t = 0, insetTop: n = t, insetRight: r = t, insetBottom: i = t, insetLeft: a = t } = {}, o) {
	if (e == null) return;
	if (typeof e.stream == "function") return e;
	let s, c, l = "frame";
	if (vl(e)) {
		let t;
		if ({type: e, domain: c, inset: t, insetTop: n = t === void 0 ? n : t, insetRight: r = t === void 0 ? r : t, insetBottom: i = t === void 0 ? i : t, insetLeft: a = t === void 0 ? a : t, clip: l = l, ...s} = e, e == null) return;
	}
	typeof e != "function" && ({type: e} = yp(e));
	let { width: u, height: d, marginLeft: f, marginRight: p, marginTop: m, marginBottom: h } = o, g = u - f - p - a - r, _ = d - m - h - n - i;
	if (e = e?.({
		width: g,
		height: _,
		clip: l,
		...s
	}), e == null) return;
	l = bp(l, f, m, u - p, d - h);
	let v = f + a, y = m + n, b;
	if (c != null) {
		let [[t, n], [r, i]] = ha(e).bounds(c), a = Math.min(g / (r - t), _ / (i - n));
		a > 0 ? (v -= (a * (t + r) - g) / 2, y -= (a * (n + i) - _) / 2, b = ga({ point(e, t) {
			this.stream.point(e * a + v, t * a + y);
		} })) : Jd("Warning: the projection could not be fit to the specified domain; using the default scale.");
	}
	return b ??= v === 0 && y === 0 ? Cp() : ga({ point(e, t) {
		this.stream.point(e + v, t + y);
	} }), { stream: (t) => e.stream(b.stream(l(t))) };
}
function yp(e) {
	switch (`${e}`.toLowerCase()) {
		case "albers-usa": return xp(Va, .7463, .4673);
		case "albers": return Sp(za, .7463, .4673);
		case "azimuthal-equal-area": return xp(Ga, 4, 4);
		case "azimuthal-equidistant": return xp(qa, gp, gp);
		case "conic-conformal": return Sp($a, gp, gp);
		case "conic-equal-area": return Sp(Ra, 6.1702, 2.9781);
		case "conic-equidistant": return Sp(ro, 7.312, 3.6282);
		case "equal-earth": return xp(fo, 5.4133, 2.6347);
		case "equirectangular": return xp(to, gp, hp);
		case "gnomonic": return xp(mo, 3.4641, 3.4641);
		case "identity": return { type: Cp };
		case "reflect-y": return { type: wp };
		case "mercator": return xp(Ya, gp, gp);
		case "orthographic": return xp(go, 2, 2);
		case "stereographic": return xp(vo, 2, 2);
		case "transverse-mercator": return xp(bo, gp, gp);
		default: throw Error(`unknown projection type: ${e}`);
	}
}
function bp(e, t, n, r, i) {
	if (e === !1 || e == null || typeof e == "number") return (e) => e;
	switch (e === !0 && (e = "frame"), `${e}`.toLowerCase()) {
		case "frame": return ui(t, n, r, i);
		default: throw Error(`unknown projection clip type: ${e}`);
	}
}
function xp(e, t, n) {
	return {
		type: ({ width: r, height: i, rotate: a, precision: o = .15, clip: s }) => {
			let c = e();
			return o != null && c.precision?.(o), a != null && c.rotate?.(a), typeof s == "number" && c.clipAngle?.(s), r != null && (c.scale(Math.min(r / t, i / n)), c.translate([r / 2, i / 2])), c;
		},
		aspectRatio: n / t
	};
}
function Sp(e, t, n) {
	let { type: r, aspectRatio: i } = xp(e, t, n);
	return {
		type: (e) => {
			let { parallels: t, domain: n, width: i, height: a } = e, o = r(e);
			return t != null && (o.parallels(t), n === void 0 && i != null && o.fitSize([i, a], { type: "Sphere" })), o;
		},
		aspectRatio: i
	};
}
var Cp = tl({ stream: (e) => e }), wp = tl(ga({ point(e, t) {
	this.stream.point(e, -t);
} }));
function Tp(e, t, n, r) {
	let i = n[e], a = n[t], o = i.length, s = n[e] = new Float64Array(o).fill(NaN), c = n[t] = new Float64Array(o).fill(NaN), l, u = r.stream({ point(e, t) {
		s[l] = e, c[l] = t;
	} });
	for (l = 0; l < o; ++l) u.point(i[l], a[l]);
}
function Ep({ projection: e } = {}) {
	return e == null ? !1 : typeof e.stream == "function" || (vl(e) && (e = e.type), e != null);
}
function Dp(e) {
	if (typeof e?.stream == "function") return _p;
	if (vl(e)) {
		let t, n;
		if ({domain: t, type: e, ...n} = e, t != null && e != null) {
			let [[r, i], [a, o]] = ha((typeof e == "string" ? yp(e).type : e)({
				...n,
				width: 100,
				height: 100
			})).bounds(t), s = (o - i) / (a - r);
			return s && isFinite(s) ? s < .2 ? .2 : s > 5 ? 5 : s : _p;
		}
	}
	if (e != null) {
		if (typeof e != "function") {
			let { aspectRatio: t } = yp(e);
			if (t) return t;
		}
		return _p;
	}
}
function Op(e) {
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
	for (let t of e.value) kr(t, a);
	return [r, i];
}
function kp({ x: e, y: t }) {
	if (e || t) return e ??= (e) => e, t ??= (e) => e, ga({ point(n, r) {
		this.stream.point(e(n), t(r));
	} });
}
//#endregion
//#region node_modules/@observablehq/plot/src/context.js
function Ap(e = {}) {
	let { document: t = typeof window < "u" ? window.document : void 0, clip: n } = e;
	return {
		document: t,
		clip: su(n)
	};
}
function Z(e, { document: r }) {
	return t(n(e).call(r.documentElement));
}
//#endregion
//#region node_modules/@observablehq/plot/src/memoize.js
var jp = Symbol("unset");
function Mp(e) {
	return (e.length === 1 ? Np : Pp)(e);
}
function Np(e) {
	let t, n = jp;
	return (r) => (Object.is(n, r) || (n = r, t = e(r)), t);
}
function Pp(e) {
	let t, n;
	return (...r) => ((n?.length !== r.length || n.some((e, t) => !Object.is(e, r[t]))) && (n = r, t = e(...r)), t);
}
//#endregion
//#region node_modules/@observablehq/plot/src/format.js
var Fp = Mp((e) => new Intl.NumberFormat(e));
Mp((e, t) => new Intl.DateTimeFormat(e, {
	timeZone: "UTC",
	...t && { month: t }
})), Mp((e, t) => new Intl.DateTimeFormat(e, {
	timeZone: "UTC",
	...t && { weekday: t }
}));
function Ip(e = "en-US") {
	let t = Fp(e);
	return (e) => e != null && !isNaN(e) ? t.format(e) : void 0;
}
function Lp(e) {
	return tc(e, "Invalid Date");
}
function Rp(e = "en-US") {
	let t = Ip(e);
	return (e) => (e instanceof Date ? Lp : typeof e == "number" ? t : G)(e);
}
var zp = Rp(), Bp = (typeof window < "u" ? window.devicePixelRatio > 1 : typeof it > "u") ? 0 : .5, Vp = 0;
function Hp() {
	return `plot-clip-${++Vp}`;
}
function Up(e, { title: t, href: n, ariaLabel: r, ariaDescription: i, ariaHidden: a, target: o, fill: s, fillOpacity: c, stroke: l, strokeWidth: u, strokeOpacity: d, strokeLinejoin: f, strokeLinecap: p, strokeMiterlimit: m, strokeDasharray: h, strokeDashoffset: g, opacity: _, mixBlendMode: v, imageFilter: y, paintOrder: b, pointerEvents: x, shapeRendering: S, channels: C }, { ariaLabel: w, fill: T = "currentColor", fillOpacity: E, stroke: D = "none", strokeOpacity: O, strokeWidth: k, strokeLinecap: A, strokeLinejoin: j, strokeMiterlimit: ee, paintOrder: te }) {
	T === null && (s = null, c = null), D === null && (l = null, d = null), J(T) ? !J(D) && (!J(s) || C?.fill) && (D = "none") : J(D) && (!J(l) || C?.stroke) && (T = "none");
	let [ne, re] = sl(s, T), [ie, ae] = cl(c, E), [oe, M] = sl(l, D), [se, ce] = cl(d, O), [le, ue] = cl(_);
	eu(M) || (u === void 0 && (u = k), p === void 0 && (p = A), f === void 0 && (f = j), m === void 0 && !tu(f) && (m = ee), !eu(re) && b === void 0 && (b = te));
	let [de, fe] = cl(u);
	return T !== null && (e.fill = $(re, "currentColor"), e.fillOpacity = im(ae, 1)), D !== null && (e.stroke = $(M, "none"), e.strokeWidth = im(fe, 1), e.strokeOpacity = im(ce, 1), e.strokeLinejoin = $(f, "miter"), e.strokeLinecap = $(p, "butt"), e.strokeMiterlimit = im(m, 4), e.strokeDasharray = $(h, "none"), e.strokeDashoffset = $(g, "0")), e.target = G(o), e.ariaLabel = G(w), e.ariaDescription = G(i), e.ariaHidden = G(a), e.opacity = im(ue, 1), e.mixBlendMode = $(v, "normal"), e.imageFilter = $(y, "none"), e.paintOrder = $(b, "normal"), e.pointerEvents = $(x, "auto"), e.shapeRendering = $(S, "auto"), {
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
			value: se,
			scale: "auto",
			optional: !0
		},
		strokeWidth: {
			value: de,
			optional: !0
		},
		opacity: {
			value: le,
			scale: "auto",
			optional: !0
		}
	};
}
function Wp(e, t) {
	t && e.filter((e) => Zs(t[e])).append("title").call(Gp, t);
}
function Gp(e, t) {
	t && e.text((e) => zp(t[e]));
}
function Kp(e, { target: t, tip: n }, { ariaLabel: r, title: i, fill: a, fillOpacity: o, stroke: s, strokeOpacity: c, strokeWidth: l, opacity: u, href: d }) {
	r && Q(e, "aria-label", (e) => r[e]), a && Q(e, "fill", (e) => a[e]), o && Q(e, "fill-opacity", (e) => o[e]), s && Q(e, "stroke", (e) => s[e]), c && Q(e, "stroke-opacity", (e) => c[e]), l && Q(e, "stroke-width", (e) => l[e]), u && Q(e, "opacity", (e) => u[e]), d && tm(e, (e) => d[e], t), n || Wp(e, i);
}
function qp(e, t, n, r) {
	let i, { clip: a = r.clip } = t;
	a === "frame" ? (e = Z("svg:g", r).each(function() {
		this.appendChild(e.node()), e.node = () => this;
	}), i = Yp(r, n)) : a && (i = Qp(a, r)), Q(e, "aria-label", t.ariaLabel), Q(e, "aria-description", t.ariaDescription), Q(e, "aria-hidden", t.ariaHidden), Q(e, "clip-path", i);
}
function Jp(e) {
	let n = /* @__PURE__ */ new WeakMap();
	return (r, i) => {
		let a = n.get(r);
		if (!a) {
			let o = Hp();
			t(r.ownerSVGElement).append("clipPath").attr("id", o).call(e, r, i), n.set(r, a = `url(#${o})`);
		}
		return a;
	};
}
var Yp = Jp((e, t, n) => {
	let { width: r, height: i, marginLeft: a, marginRight: o, marginTop: s, marginBottom: c } = n;
	e.append("rect").attr("x", a).attr("y", s).attr("width", r - o - a).attr("height", i - s - c);
}), Xp = /* @__PURE__ */ new WeakMap(), Zp = { type: "Sphere" };
function Qp(e, n) {
	let r, i;
	if ((r = Xp.get(n)) || Xp.set(n, r = /* @__PURE__ */ new WeakMap()), e.type === "Sphere" && (e = Zp), !(i = r.get(e))) {
		let a = Hp();
		t(n.ownerSVGElement).append("clipPath").attr("id", a).append("path").attr("d", n.path()(e)), r.set(e, i = `url(#${a})`);
	}
	return i;
}
function $p(e, t, n, r) {
	qp(e, t, n, r), Q(e, "class", t.className), Q(e, "fill", t.fill), Q(e, "fill-opacity", t.fillOpacity), Q(e, "stroke", t.stroke), Q(e, "stroke-width", t.strokeWidth), Q(e, "stroke-opacity", t.strokeOpacity), Q(e, "stroke-linejoin", t.strokeLinejoin), Q(e, "stroke-linecap", t.strokeLinecap), Q(e, "stroke-miterlimit", t.strokeMiterlimit), Q(e, "stroke-dasharray", t.strokeDasharray), Q(e, "stroke-dashoffset", t.strokeDashoffset), Q(e, "shape-rendering", t.shapeRendering), Q(e, "filter", t.imageFilter), Q(e, "paint-order", t.paintOrder);
	let { pointerEvents: i = r.pointerSticky === !1 ? "none" : void 0 } = t;
	Q(e, "pointer-events", i);
}
function em(e, t) {
	nm(e, "mix-blend-mode", t.mixBlendMode), Q(e, "opacity", t.opacity);
}
function tm(t, n, r) {
	t.each(function(t) {
		let i = n(t);
		if (i != null) {
			let t = this.ownerDocument.createElementNS(e.svg, "a");
			t.setAttribute("fill", "inherit"), t.setAttributeNS(e.xlink, "href", i), r != null && t.setAttribute("target", r), this.parentNode.insertBefore(t, this).appendChild(this);
		}
	});
}
function Q(e, t, n) {
	n != null && e.attr(t, n);
}
function nm(e, t, n) {
	n != null && e.style(t, n);
}
function rm(e, t, { x: n, y: r }, i = Bp, a = Bp) {
	i += t.dx, a += t.dy, n?.bandwidth && (i += n.bandwidth() / 2), r?.bandwidth && (a += r.bandwidth() / 2), (i || a) && e.attr("transform", `translate(${i},${a})`);
}
function $(e, t) {
	if ((e = G(e)) !== t) return e;
}
function im(e, t) {
	if ((e = K(e)) !== t) return e;
}
var am = /^-?([_a-z]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])([_a-z0-9-]|[\240-\377]|\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])*$/i;
function om(e) {
	if (e === void 0) return "plot-d6a7b5";
	if (e = `${e}`, !am.test(e)) throw Error(`invalid class name: ${e}`);
	return e;
}
function sm(e, t) {
	if (typeof t == "string") e.property("style", t);
	else if (t != null) for (let n of e) Object.assign(n.style, t);
}
function cm({ frameAnchor: e }, { width: t, height: n, marginTop: r, marginRight: i, marginBottom: a, marginLeft: o }) {
	return [/left$/.test(e) ? o : /right$/.test(e) ? t - i : (o + t - i) / 2, /^top/.test(e) ? r : /^bottom/.test(e) ? n - a : (r + n - a) / 2];
}
//#endregion
//#region node_modules/@observablehq/plot/src/mark.js
var lm = class {
	constructor(e, t = {}, n = {}, r) {
		let { facet: i = "auto", facetAnchor: a, fx: o, fy: s, sort: c, dx: l = 0, dy: u = 0, margin: d = 0, marginTop: f = d, marginRight: p = d, marginBottom: m = d, marginLeft: h = d, className: g, clip: _ = r?.clip, channels: v, tip: y, render: b } = n;
		if (this.data = e, this.sort = xl(c) ? c : null, this.initializer = Eu(n).initializer, this.transform = this.initializer ? n.transform : Tu(n).transform, i === null || i === !1 ? this.facet = null : (this.facet = ul(i === !0 ? "include" : i, "facet", [
			"auto",
			"include",
			"exclude",
			"super"
		]), this.fx = e === qc && typeof o == "string" ? [o] : o, this.fy = e === qc && typeof s == "string" ? [s] : s), this.facetAnchor = Qf(a), t = ou(t), v !== void 0 && (t = {
			...fm(v),
			...t
		}), r !== void 0 && (t = {
			...Up(this, n, r),
			...t
		}), this.channels = Object.fromEntries(Object.entries(t).map(([t, n]) => {
			if (bl(n.value)) {
				let { value: e, label: t = n.label, scale: r = n.scale } = n.value;
				n = {
					...n,
					label: t,
					scale: r,
					value: e
				};
			}
			if (e === qc && typeof n.value == "string") {
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
		})), this.dx = +l, this.dy = +u, this.marginTop = +f, this.marginRight = +p, this.marginBottom = +m, this.marginLeft = +h, this.clip = su(_), this.tip = pm(y), this.className = G(g), this.facet === "super") {
			if (o || s) throw Error("super-faceting cannot use fx or fy");
			for (let e in this.channels) {
				let { scale: n } = t[e];
				if (n === "x" || n === "y") throw Error("super-faceting cannot use x or y");
			}
		}
		b != null && (this.render = dm(b, this.render));
	}
	initialize(e, t, n) {
		let r = dl(this.data);
		e === void 0 && r != null && (e = [El(r)]);
		let i = e;
		this.transform != null && ({facets: e, data: r} = this.transform(r, e, n), r = dl(r)), e !== void 0 && (e.original = i);
		let a = Ju(this.channels, r);
		return this.sort != null && Zu(r, e, a, t, this.sort), {
			data: r,
			facets: e,
			channels: a
		};
	}
	filter(e, t, n) {
		for (let r in t) {
			let { filter: i = Js } = t[r];
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
			i in e && e[i].scale === "y" && Tp(r, i, t, n.projection);
		}
	}
	scale(e, t, n) {
		let r = Yu(e, t);
		return n.projection && this.project(e, r, n), r;
	}
};
function um(...e) {
	return e.plot = lm.prototype.plot, e;
}
function dm(e, t) {
	if (e == null) return t === null ? void 0 : t;
	if (t == null) return e === null ? void 0 : e;
	if (typeof e != "function") throw TypeError(`invalid render transform: ${e}`);
	if (typeof t != "function") throw TypeError(`invalid render transform: ${t}`);
	return function(n, r, i, a, o, s) {
		return e.call(this, n, r, i, a, o, (e, n, r, i, a) => t.call(this, e, n, r, i, a, s));
	};
}
function fm(e) {
	return Object.fromEntries(Object.entries(ou(e)).map(([e, t]) => (t = typeof t == "string" ? {
		value: t,
		label: e
	} : Vl(t), t.filter === void 0 && t.scale == null && (t = {
		...t,
		filter: null
	}), [e, t])));
}
function pm(e) {
	return e === !0 ? "xy" : e === !1 || e == null ? null : typeof e == "string" ? ul(e, "tip", [
		"x",
		"y",
		"xy"
	]) : e;
}
function mm(e, t) {
	return e?.tip === !0 ? {
		...e,
		tip: t
	} : vl(e?.tip) && e.tip.pointer === void 0 ? {
		...e,
		tip: {
			...e.tip,
			pointer: t
		}
	} : e;
}
//#endregion
//#region node_modules/@observablehq/plot/src/dimensions.js
function hm(e, t, n = {}) {
	let r = .5 - Bp, i = .5 + Bp, a = .5 + Bp, o = .5 - Bp;
	for (let { marginTop: e, marginRight: n, marginBottom: s, marginLeft: c } of t) e > r && (r = e), n > i && (i = n), s > a && (a = s), c > o && (o = c);
	let { margin: s, marginTop: c = s === void 0 ? r : s, marginRight: l = s === void 0 ? i : s, marginBottom: u = s === void 0 ? a : s, marginLeft: d = s === void 0 ? o : s } = n;
	c = +c, l = +l, u = +u, d = +d;
	let { width: f = 640, height: p = gm(e, n, {
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
function gm({ x: e, y: t, fy: n, fx: r }, { projection: i, aspectRatio: a }, { width: o, marginTopDefault: s, marginRightDefault: c, marginBottomDefault: l, marginLeftDefault: u }) {
	let d = n && n.scale.domain().length || 1, f = Dp(i);
	if (f) {
		let e = r ? r.scale.domain().length : 1, t = (1.1 * d - .1) / (1.1 * e - .1) * f, n = Math.max(.1, Math.min(10, t));
		return Math.round((o - u - c) * n + s + l);
	}
	let p = t ? Rf(t) ? t.scale.domain().length || 1 : Math.max(7, 17 / d) : 1;
	if (a != null) {
		if (a = +a, !(isFinite(a) && a > 0)) throw Error(`invalid aspectRatio: ${a}`);
		let i = _m("y", t) / (_m("x", e) * a), d = r ? r.scale.bandwidth() : 1, f = n ? n.scale.bandwidth() : 1;
		return (i * (d * (o - u - c) - e.insetLeft - e.insetRight) + t.insetTop + t.insetBottom) / f + s + l;
	}
	return !!(t || n) * Math.max(1, Math.min(60, p * d)) * 20 + !!r * 30 + 60;
}
function _m(e, t) {
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
	let [a, o] = at(r);
	return Math.abs(i(o) - i(a));
}
//#endregion
//#region node_modules/@observablehq/plot/src/interactions/pointer.js
var vm = /* @__PURE__ */ new WeakMap();
function ym(e, t, { x: n, y: i, px: a, py: o, maxRadius: s = 40, channels: c, render: l, ...u } = {}) {
	return s = +s, a != null && (n ??= null, c = {
		...c,
		px: {
			value: a,
			scale: "x"
		}
	}), o != null && (i ??= null, c = {
		...c,
		py: {
			value: o,
			scale: "y"
		}
	}), {
		x: n,
		y: i,
		channels: c,
		...u,
		render: dm(function(n, i, a, o, c, l) {
			c = {
				...c,
				pointerSticky: !1
			};
			let u = c.ownerSVGElement, { data: d } = c.getMarkState(this), f = vm.get(u);
			f || vm.set(u, f = {
				sticky: !1,
				roots: [],
				renders: []
			});
			let p = f.renders.push(te) - 1, { x: m, y: h, fx: g, fy: _ } = i, v = g ? g(n.fx) - o.marginLeft : 0, y = _ ? _(n.fy) - o.marginTop : 0;
			m?.bandwidth && (v += m.bandwidth() / 2), h?.bandwidth && (y += h.bandwidth() / 2);
			let b = n.fi != null, x;
			if (b) {
				let e = f.facetStates;
				e || (f.facetStates = e = /* @__PURE__ */ new Map()), x = e.get(this), x || e.set(this, x = /* @__PURE__ */ new Map());
			}
			let [S, C] = cm(this, o), { px: w, py: T } = a, E = w ? (e) => w[e] : Cm(a, S), D = T ? (e) => T[e] : wm(a, C), O, k, A, j;
			function ee(e, t) {
				if (b) if (j &&= cancelAnimationFrame(j), e == null) x.delete(n.fi);
				else {
					x.set(n.fi, t), j = requestAnimationFrame(() => {
						j = null;
						for (let [r, i] of x) if (i < t || i === t && r < n.fi) {
							e = null;
							break;
						}
						te(e);
					});
					return;
				}
				te(e);
			}
			function te(e) {
				if (O === e && A === f.sticky) return;
				O = e, A = c.pointerSticky = f.sticky;
				let t = O == null ? [] : [O];
				b && (t.fx = n.fx, t.fy = n.fy, t.fi = n.fi);
				let r = l(t, i, a, o, c);
				if (k) {
					if (b) {
						let e = k.parentNode, t = k.getAttribute("transform"), n = r.getAttribute("transform");
						t ? r.setAttribute("transform", t) : r.removeAttribute("transform"), n ? e.setAttribute("transform", n) : e.removeAttribute("transform"), r.removeAttribute("aria-label"), r.removeAttribute("aria-description"), r.removeAttribute("aria-hidden");
					}
					k.replaceWith(r);
				}
				if (f.roots[p] = k = r, !(O == null && x?.size > 1)) {
					let e = O == null ? null : Fc(d) ? d[O] : d.get(O);
					c.dispatchValue(e);
				}
				return r;
			}
			function ne(i) {
				if (f.sticky || i.pointerType === "mouse" && i.buttons === 1) return;
				let [a, c] = r(i);
				a -= v, c -= y;
				let l = a < o.marginLeft || a > o.width - o.marginRight ? 1 : e, u = c < o.marginTop || c > o.height - o.marginBottom ? 1 : t, d = null, p = s * s;
				for (let e of n) {
					let t = l * (E(e) - a), n = u * (D(e) - c), r = t * t + n * n;
					r <= p && (d = e, p = r);
				}
				if (d != null && (e !== 1 || t !== 1)) {
					let e = E(d) - a, t = D(d) - c;
					p = e * e + t * t;
				}
				ee(d, p);
			}
			function re(e) {
				e.pointerType === "mouse" && O != null && (f.sticky && f.roots.some((t) => t?.contains(e.target)) || (f.sticky ? (f.sticky = !1, f.renders.forEach((e) => e(null))) : (f.sticky = !0, te(O)), e.stopImmediatePropagation()));
			}
			function ie(e) {
				e.pointerType === "mouse" && (f.sticky || ee(null));
			}
			return u.addEventListener("pointerenter", ne), u.addEventListener("pointermove", ne), u.addEventListener("pointerdown", re), u.addEventListener("pointerleave", ie), te(null);
		}, l)
	};
}
function bm(e) {
	return ym(1, 1, e);
}
function xm(e) {
	return ym(1, .01, e);
}
function Sm(e) {
	return ym(.01, 1, e);
}
function Cm({ x1: e, x2: t, x: n = e }, r) {
	return e && t ? (n) => (e[n] + t[n]) / 2 : n ? (e) => n[e] : () => r;
}
function wm({ y1: e, y2: t, y: n = e }, r) {
	return e && t ? (n) => (e[n] + t[n]) / 2 : n ? (e) => n[e] : () => r;
}
//#endregion
//#region node_modules/@observablehq/plot/src/axes.js
function Tm(e) {
	return Rf(e) && e.interval === void 0 ? void 0 : "tabular-nums";
}
//#endregion
//#region node_modules/@observablehq/plot/src/legends/ramp.js
function Em(e, t) {
	let { label: n = e.label, tickSize: r = 6, width: i = 240, height: o = 44 + r, marginTop: s = 18, marginRight: c = 0, marginBottom: l = 16 + r, marginLeft: u = 0, style: d, ticks: f = (i - u - c) / 64, tickFormat: p, fontVariant: m = Tm(e), round: h = !0, opacity: g, className: _ } = t, v = Ap(t);
	_ = om(_), g = cl(g)[1], p === null && (p = () => null);
	let y = Z("svg", v).attr("class", `${_}-ramp`).attr("font-family", "system-ui, sans-serif").attr("font-size", 10).attr("width", i).attr("height", o).attr("viewBox", `0 0 ${i} ${o}`).call((e) => e.append("style").text(`:where(.${_}-ramp) {
  display: block;
  height: auto;
  height: intrinsic;
  max-width: 100%;
  overflow: visible;
}
:where(.${_}-ramp text) {
  white-space: pre;
}`)).call(sm, d), b = (e) => e.selectAll(".tick line").attr("y1", s + l - o), x, S = h ? (e, t) => e.rangeRound(t) : (e, t) => e.range(t), { type: C, domain: w, range: T, interpolate: E, scale: D, pivot: O } = e;
	if (E) {
		let e = T === void 0 ? E : Sn(E.length === 1 ? Wd(E) : E, T);
		x = S(D.copy(), Cn(a(u, i - c), Math.min(w.length + (O !== void 0), T === void 0 ? Infinity : T.length)));
		let t = v.document.createElement("canvas");
		t.width = 256, t.height = 1;
		let n = t.getContext("2d");
		for (let t = 0; t < 256; ++t) n.fillStyle = e(t / 255), n.fillRect(t, 0, 1, 1);
		y.append("image").attr("opacity", g).attr("x", u).attr("y", s).attr("width", i - u - c).attr("height", o - s - l).attr("preserveAspectRatio", "none").attr("xlink:href", t.toDataURL());
	} else if (C === "threshold") {
		let e = w, t = p === void 0 ? (e) => e : typeof p == "string" ? Ue(p) : p;
		x = S(We().domain([-1, T.length - 1]), [u, i - c]), y.append("g").attr("fill-opacity", g).selectAll().data(T).enter().append("rect").attr("x", (e, t) => x(t - 1)).attr("y", s).attr("width", (e, t) => x(t) - x(t - 1)).attr("height", o - s - l).attr("fill", (e) => e), f = q(e, (e, t) => t), p = (n) => t(e[n], n);
	} else x = S(Nt().domain(w), [u, i - c]), y.append("g").attr("fill-opacity", g).selectAll().data(w).enter().append("rect").attr("x", x).attr("y", s).attr("width", Math.max(0, x.bandwidth() - 1)).attr("height", o - s - l).attr("fill", D), b = () => {};
	return y.append("g").attr("transform", `translate(0,${o - l})`).call(Re(x).ticks(Array.isArray(f) ? null : f, typeof p == "string" ? p : void 0).tickFormat(typeof p == "function" ? p : void 0).tickSize(r).tickValues(Array.isArray(f) ? f : null)).attr("font-size", null).attr("font-family", null).attr("font-variant", $(m, "normal")).call(b).call((e) => e.select(".domain").remove()), n !== void 0 && y.append("text").attr("x", u).attr("y", s - 6).attr("fill", "currentColor").attr("font-weight", "bold").text(n), y.node();
}
//#endregion
//#region node_modules/@observablehq/plot/src/math.js
var Dm = Math.PI / 180;
//#endregion
//#region node_modules/@observablehq/plot/src/marker.js
function Om(e, { marker: t, markerStart: n = t, markerMid: r = t, markerEnd: i = t } = {}) {
	e.markerStart = km(n), e.markerMid = km(r), e.markerEnd = km(i);
}
function km(e) {
	if (e == null || e === !1) return null;
	if (e === !0) return Mm;
	if (typeof e == "function") return e;
	switch (`${e}`.toLowerCase()) {
		case "none": return null;
		case "arrow": return Am("auto");
		case "arrow-reverse": return Am("auto-start-reverse");
		case "dot": return jm;
		case "circle":
		case "circle-fill": return Mm;
		case "circle-stroke": return Nm;
		case "tick": return Pm("auto");
		case "tick-x": return Pm(90);
		case "tick-y": return Pm(0);
	}
	throw Error(`invalid marker: ${e}`);
}
function Am(e) {
	return (t, n) => Z("svg:marker", n).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("orient", e).attr("fill", "none").attr("stroke", t).attr("stroke-width", 1.5).attr("stroke-linecap", "round").attr("stroke-linejoin", "round").call((e) => e.append("path").attr("d", "M-1.5,-3l3,3l-3,3")).node();
}
function jm(e, t) {
	return Z("svg:marker", t).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", e).attr("stroke", "none").call((e) => e.append("circle").attr("r", 2.5)).node();
}
function Mm(e, t) {
	return Z("svg:marker", t).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", e).attr("stroke", "var(--plot-background)").attr("stroke-width", 1.5).call((e) => e.append("circle").attr("r", 3)).node();
}
function Nm(e, t) {
	return Z("svg:marker", t).attr("viewBox", "-5 -5 10 10").attr("markerWidth", 6.67).attr("markerHeight", 6.67).attr("fill", "var(--plot-background)").attr("stroke", e).attr("stroke-width", 1.5).call((e) => e.append("circle").attr("r", 3)).node();
}
function Pm(e) {
	return (t, n) => Z("svg:marker", n).attr("viewBox", "-3 -3 6 6").attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", e).attr("stroke", t).call((e) => e.append("path").attr("d", "M0,-3v6")).node();
}
var Fm = 0;
function Im(e, t, { stroke: n }, r) {
	return Bm(e, t, n && ((e) => n[e]), null, r);
}
var Lm = 1, Rm = 2;
function zm(e, t) {
	let n = new Uint8Array(t.length), r = e.data().filter((e) => e.length > 1), i = r.length;
	for (let e = 0, a = jp; e < i; ++e) {
		let i = r[e];
		if (i.length > 1) {
			let e = i[0];
			a !== (a = kl(t[e])) && (n[e] |= Lm);
		}
	}
	for (let e = i - 1, a = jp; e >= 0; --e) {
		let i = r[e];
		if (i.length > 1) {
			let e = i[0];
			a !== (a = kl(t[e])) && (n[e] |= Rm);
		}
	}
	return ([e]) => n[e];
}
function Bm(e, { markerStart: t, markerMid: n, markerEnd: r, stroke: i }, a = () => i, o, s) {
	if (!t && !n && !r) return;
	let c = /* @__PURE__ */ new Map(), l = o && zm(e, o);
	function u(e, t, n) {
		return function(r) {
			if (n && !n(r)) return;
			let i = a(r), o = c.get(t);
			o || c.set(t, o = /* @__PURE__ */ new Map());
			let l = o.get(i);
			if (!l) {
				let e = this.parentNode.insertBefore(t(i, s), this), n = `plot-marker-${++Fm}`;
				e.setAttribute("id", n), o.set(i, l = `url(#${n})`);
			}
			this.setAttribute(e, l);
		};
	}
	t && e.each(u("marker-start", t, l && ((e) => l(e) & Lm))), n && l && e.each(u("marker-start", n, (e) => !(l(e) & Lm))), n && e.each(u("marker-mid", n)), r && e.each(u("marker-end", r, l && ((e) => l(e) & Rm)));
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/inset.js
function Vm({ inset: e, insetLeft: t, insetRight: n, ...r } = {}) {
	return [t, n] = Um(e, t, n), {
		inset: e,
		insetLeft: t,
		insetRight: n,
		...r
	};
}
function Hm({ inset: e, insetTop: t, insetBottom: n, ...r } = {}) {
	return [t, n] = Um(e, t, n), {
		inset: e,
		insetTop: t,
		insetBottom: n,
		...r
	};
}
function Um(e, t, n) {
	return e === void 0 && t === void 0 && n === void 0 ? Bp ? [1, 0] : [.5, .5] : [t, n];
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/interval.js
function Wm(e, { interval: t }) {
	return e = { ...Vl(e) }, e.interval = Il(e.interval === void 0 ? t : e.interval), e;
}
function Gm(e, t, n, r) {
	let { [e]: i, [`${e}1`]: a, [`${e}2`]: o } = n, { value: s, interval: c } = Wm(i, n);
	if (s == null || c == null && !r) return n;
	let l = Ml(i);
	if (c == null) {
		let t, i = {
			transform: (e) => t ||= Vc(e, s),
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
		return d !== void 0 && e === u ? d : d = q(Vc(u = e, s), (e) => c.floor(e));
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
function Km(e, t, n) {
	let { [e]: r } = n, { value: i, interval: a } = Wm(r, n);
	return i == null || a == null ? n : t({
		...n,
		[e]: {
			label: Ml(r),
			transform: (e) => {
				let t = q(Vc(e, i), (e) => a.floor(e)), n = t.map((e) => a.offset(e));
				return t.map(Kl(t) ? (e, t) => e == null || isNaN(e = +e) || (t = n[t], t == null) || isNaN(t = +t) ? void 0 : /* @__PURE__ */ new Date((e + t) / 2) : (e, t) => e == null || (t = n[t], t == null) ? NaN : (+e + +t) / 2);
			}
		}
	});
}
function qm(e = {}) {
	return Gm("x", Vm, e);
}
function Jm(e = {}) {
	return Gm("y", Hm, e);
}
function Ym(e = {}) {
	return Km("x", Vm, e);
}
function Xm(e = {}) {
	return Km("y", Hm, e);
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/rule.js
var Zm = {
	ariaLabel: "rule",
	fill: null,
	stroke: "currentColor"
}, Qm = class extends lm {
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
		}, mm(t, "x"), Zm), this.insetTop = K(o), this.insetBottom = K(s), Om(this, t);
	}
	render(e, t, n, r, i) {
		let { x: a, y: o } = t, { x: s, y1: c, y2: l } = n, { width: u, height: d, marginTop: f, marginRight: p, marginLeft: m, marginBottom: h } = r, { insetTop: g, insetBottom: _ } = this;
		return Z("svg:g", i).call($p, this, r, i).call(rm, this, { x: s && a }, Bp, 0).call((t) => t.selectAll().data(e).enter().append("line").call(em, this).attr("x1", s ? (e) => s[e] : (m + u - p) / 2).attr("x2", s ? (e) => s[e] : (m + u - p) / 2).attr("y1", c && !Vf(o) ? (e) => c[e] + g : f + g).attr("y2", l && !Vf(o) ? o.bandwidth ? (e) => l[e] + o.bandwidth() - _ : (e) => l[e] - _ : d - h - _).call(Kp, this, n).call(Im, this, n, i)).node();
	}
}, $m = class extends lm {
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
		}, mm(t, "y"), Zm), this.insetRight = K(o), this.insetLeft = K(s), Om(this, t);
	}
	render(e, t, n, r, i) {
		let { x: a, y: o } = t, { y: s, x1: c, x2: l } = n, { width: u, height: d, marginTop: f, marginRight: p, marginLeft: m, marginBottom: h } = r, { insetLeft: g, insetRight: _ } = this;
		return Z("svg:g", i).call($p, this, r, i).call(rm, this, { y: s && o }, 0, Bp).call((t) => t.selectAll().data(e).enter().append("line").call(em, this).attr("x1", c && !Vf(a) ? (e) => c[e] + g : m + g).attr("x2", l && !Vf(a) ? a.bandwidth ? (e) => l[e] + a.bandwidth() - _ : (e) => l[e] - _ : u - p - _).attr("y1", s ? (e) => s[e] : (f + d - h) / 2).attr("y2", s ? (e) => s[e] : (f + d - h) / 2).call(Kp, this, n).call(Im, this, n, i)).node();
	}
};
function eh(e, t) {
	let { x: n = Xc, y: r, y1: i, y2: a, ...o } = Jm(t);
	return [i, a] = nh(r, i, a), new Qm(e, {
		...o,
		x: n,
		y1: i,
		y2: a
	});
}
function th(e, t) {
	let { y: n = Xc, x: r, x1: i, x2: a, ...o } = qm(t);
	return [i, a] = nh(r, i, a), new $m(e, {
		...o,
		y: n,
		x1: i,
		x2: a
	});
}
function nh(e, t, n) {
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
function rh(e, ...t) {
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
var ih = {
	ariaLabel: "text",
	strokeLinejoin: "round",
	strokeWidth: 3,
	paintOrder: "stroke"
}, ah = "­", oh = class extends lm {
	constructor(e, t = {}) {
		let { x: n, y: r, text: i = Ul(e) && Wl(e) ? Xc : Yc, frameAnchor: a, textAnchor: o = /right$/i.test(a) ? "end" : /left$/i.test(a) ? "start" : "middle", lineAnchor: s = /^top/i.test(a) ? "top" : /^bottom/i.test(a) ? "bottom" : "middle", lineHeight: c = 1, lineWidth: l = Infinity, textOverflow: u, monospace: d, fontFamily: f = d ? "ui-monospace, monospace" : void 0, fontSize: p, fontStyle: m, fontVariant: h, fontWeight: g, rotate: _ } = t, [v, y] = cl(_, 0), [b, x] = hh(p);
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
				value: Hl(v),
				optional: !0
			},
			text: {
				value: i,
				filter: Zs,
				optional: !0
			}
		}, t, ih), this.rotate = y, this.textAnchor = $(o, "middle"), this.lineAnchor = ul(s, "lineAnchor", [
			"top",
			"middle",
			"bottom"
		]), this.lineHeight = +c, this.lineWidth = +l, this.textOverflow = sh(u), this.monospace = !!d, this.fontFamily = G(f), this.fontSize = x, this.fontStyle = G(m), this.fontVariant = G(h), this.fontWeight = G(g), this.frameAnchor = ru(a), !(this.lineWidth >= 0)) throw Error(`invalid lineWidth: ${l}`);
		this.splitLines = xh(this), this.clipLine = Sh(this);
	}
	render(e, t, n, r, i) {
		let { x: a, y: o } = t, { x: s, y: c, rotate: l, text: u, title: d, fontSize: f } = n, { rotate: p } = this, [m, h] = cm(this, r);
		return Z("svg:g", i).call($p, this, r, i).call(fh, this, u, r).call(rm, this, {
			x: s && a,
			y: c && o
		}).call((t) => t.selectAll().data(e).enter().append("text").call(em, this).call(ch, this, u, d).attr("transform", rh`translate(${s ? (e) => s[e] : m},${c ? (e) => c[e] : h})${l ? (e) => ` rotate(${l[e]})` : p ? ` rotate(${p})` : ""}`).call(Q, "font-size", f && ((e) => f[e])).call(Kp, this, n)).node();
	}
};
function sh(e) {
	return e == null ? null : ul(e, "textOverflow", [
		"clip",
		"ellipsis",
		"clip-start",
		"clip-end",
		"ellipsis-start",
		"ellipsis-middle",
		"ellipsis-end"
	]).replace(/^(clip|ellipsis)$/, "$1-end");
}
function ch(t, n, r, i) {
	if (!r) return;
	let { lineAnchor: a, lineHeight: o, textOverflow: s, splitLines: c, clipLine: l } = n;
	t.each(function(t) {
		let n = c(zp(r[t]) ?? "").map(l), u = n.length, d = a === "top" ? .71 : a === "bottom" ? 1 - u : (164 - u * 100) / 200;
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
function lh(e, { x: t, y: n, ...r } = {}) {
	return r.frameAnchor === void 0 && ([t, n] = Cl(t, n)), new oh(e, {
		...r,
		x: t,
		y: n
	});
}
function uh(e, { x: t = Xc, ...n } = {}) {
	return new oh(e, Xm({
		...n,
		x: t
	}));
}
function dh(e, { y: t = Xc, ...n } = {}) {
	return new oh(e, Ym({
		...n,
		y: t
	}));
}
function fh(e, t, n) {
	Q(e, "text-anchor", t.textAnchor), Q(e, "font-family", t.fontFamily), Q(e, "font-size", t.fontSize), Q(e, "font-style", t.fontStyle), Q(e, "font-variant", t.fontVariant === void 0 ? ph(n) : t.fontVariant), Q(e, "font-weight", t.fontWeight);
}
function ph(e) {
	return e && (Yl(e) || Kl(e)) ? "tabular-nums" : void 0;
}
var mh = /* @__PURE__ */ new Set([
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
function hh(e) {
	return e == null || typeof e == "number" ? [void 0, e] : typeof e == "string" ? (e = e.trim().toLowerCase(), mh.has(e) || /^[+-]?\d*\.?\d+(e[+-]?\d+)?(\w*|%)$/.test(e) ? [void 0, e] : [e, void 0]) : [e, void 0];
}
function gh(e, t, n) {
	let r = [], i, a = 0;
	for (let [o, s, c] of _h(e)) {
		if (i === void 0 && (i = o), a > i && n(e, i, s) > t && (r.push(e.slice(i, a) + (e[a - 1] === ah ? "-" : "")), i = o), c) {
			r.push(e.slice(i, s)), i = void 0;
			continue;
		}
		a = s;
	}
	return r;
}
function* _h(e) {
	let t = 0, n = 0, r = e.length;
	for (; n < r;) {
		let r = 1;
		switch (e[n]) {
			case ah:
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
var vh = {
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
function yh(e, t = 0, n = e.length) {
	let r = 0;
	for (let i = t; i < n; i = kh(e, i)) r += vh[e[i]] ?? (Ph(e, i) ? 120 : vh.e);
	return r;
}
function bh(e, t = 0, n = e.length) {
	let r = 0;
	for (let i = t; i < n; i = kh(e, i)) r += Ph(e, i) ? 126 : 63;
	return r;
}
function xh({ monospace: e, lineWidth: t, textOverflow: n }) {
	if (n != null || t == Infinity) return (e) => e.split(/\r\n?|\n/g);
	let r = e ? bh : yh, i = t * 100;
	return (e) => gh(e, i, r);
}
function Sh({ monospace: e, lineWidth: t, textOverflow: n }) {
	if (n == null || t == Infinity) return (e) => e;
	let r = e ? bh : yh, i = t * 100;
	switch (n) {
		case "clip-start": return (e) => Eh(e, i, r, "");
		case "clip-end": return (e) => wh(e, i, r, "");
		case "ellipsis-start": return (e) => Eh(e, i, r, "…");
		case "ellipsis-middle": return (e) => Th(e, i, r, "…");
		case "ellipsis-end": return (e) => wh(e, i, r, "…");
	}
}
function Ch(e, t, n, r) {
	let i = [], a = 0;
	for (let o = 0, s = 0, c = e.length; o < c; o = s) {
		s = kh(e, o);
		let c = n(e, o, s);
		if (a + c > t) {
			for (a += r; a > t && o > 0;) s = o, o = i.pop(), a -= n(e, o, s);
			return [o, t - a];
		}
		a += c, i.push(o);
	}
	return [-1, 0];
}
function wh(e, t, n, r) {
	e = e.trim();
	let i = n(r), [a] = Ch(e, t, n, i);
	return a < 0 ? e : e.slice(0, a).trimEnd() + r;
}
function Th(e, t, n, r) {
	e = e.trim();
	let i = n(e);
	if (i <= t) return e;
	let a = n(r) / 2, [o, s] = Ch(e, t / 2, n, a), [c] = Ch(e, i - t / 2 - s + a, n, -a);
	return c < 0 ? r : e.slice(0, o).trimEnd() + r + e.slice(kh(e, c)).trimStart();
}
function Eh(e, t, n, r) {
	e = e.trim();
	let i = n(e);
	if (i <= t) return e;
	let a = n(r), [o] = Ch(e, i - t + a, n, -a);
	return o < 0 ? r : r + e.slice(kh(e, o)).trimStart();
}
var Dh = /[\p{Combining_Mark}\p{Emoji_Modifier}]+/uy, Oh = /\p{Extended_Pictographic}/uy;
function kh(e, t) {
	return t += jh(e, t) ? 2 : 1, Nh(e, t) && (t = Dh.lastIndex), Mh(e, t) ? kh(e, t + 1) : t;
}
function Ah(e, t) {
	return e.charCodeAt(t) < 128;
}
function jh(e, t) {
	let n = e.charCodeAt(t);
	if (n >= 55296 && n < 56320) {
		let n = e.charCodeAt(t + 1);
		return n >= 56320 && n < 57344;
	}
	return !1;
}
function Mh(e, t) {
	return e.charCodeAt(t) === 8205;
}
function Nh(e, t) {
	return !Ah(e, t) && (Dh.lastIndex = t, Dh.test(e));
}
function Ph(e, t) {
	return !Ah(e, t) && (Oh.lastIndex = t, Oh.test(e));
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/vector.js
var Fh = {
	ariaLabel: "vector",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.5,
	strokeLinejoin: "round",
	strokeLinecap: "round"
}, Ih = 3.5, Lh = Ih * 5, Rh = { draw(e, t, n) {
	let r = t * n / Lh;
	e.moveTo(0, 0), e.lineTo(0, -t), e.moveTo(-r, r - t), e.lineTo(0, -t), e.lineTo(r, r - t);
} }, zh = /* @__PURE__ */ new Map([["arrow", Rh], ["spike", { draw(e, t, n) {
	e.moveTo(-n, 0), e.lineTo(0, -t), e.lineTo(n, 0);
} }]]);
function Bh(e) {
	return e && typeof e.draw == "function";
}
function Vh(e) {
	if (Bh(e)) return e;
	let t = zh.get(`${e}`.toLowerCase());
	if (t) return t;
	throw Error(`invalid shape: ${e}`);
}
var Hh = class extends lm {
	constructor(e, t = {}) {
		let { x: n, y: r, r: i = Ih, length: a, rotate: o, shape: s = Rh, anchor: c = "middle", frameAnchor: l } = t, [u, d] = cl(a, 12), [f, p] = cl(o, 0);
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
		}, t, Fh), this.r = +i, this.length = d, this.rotate = p, this.shape = Vh(s), this.anchor = ul(c, "anchor", [
			"start",
			"middle",
			"end"
		]), this.frameAnchor = ru(l);
	}
	render(e, t, n, r, i) {
		let { x: a, y: o } = t, { x: s, y: c, length: l, rotate: u } = n, { length: d, rotate: f, anchor: p, shape: m, r: h } = this, [g, _] = cm(this, r);
		return Z("svg:g", i).call($p, this, r, i).call(rm, this, {
			x: s && a,
			y: c && o
		}).call((t) => t.selectAll().data(e).enter().append("path").call(em, this).attr("transform", rh`translate(${s ? (e) => s[e] : g},${c ? (e) => c[e] : _})${u ? (e) => ` rotate(${u[e]})` : f ? ` rotate(${f})` : ""}${p === "start" ? "" : p === "end" ? l ? (e) => ` translate(0,${l[e]})` : ` translate(0,${d})` : l ? (e) => ` translate(0,${l[e] / 2})` : ` translate(0,${d / 2})`}`).attr("d", l ? (e) => {
			let t = Ye();
			return m.draw(t, l[e], h), t;
		} : (() => {
			let e = Ye();
			return m.draw(e, d, h), e;
		})()).call(Kp, this, n)).node();
	}
};
function Uh(e, t = {}) {
	let { x: n = Xc, ...r } = t;
	return new Hh(e, {
		...r,
		x: n
	});
}
function Wh(e, t = {}) {
	let { y: n = Xc, ...r } = t;
	return new Hh(e, {
		...r,
		y: n
	});
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/axis.js
function Gh(e, t) {
	return arguments.length < 2 && !Ul(e) && (t = e, e = null), t === void 0 && (t = {}), [e, t];
}
function Kh({ anchor: e } = {}, t) {
	return e === void 0 ? t[0] : ul(e, "anchor", t);
}
function qh(e) {
	return Kh(e, ["left", "right"]);
}
function Jh(e) {
	return Kh(e, ["right", "left"]);
}
function Yh(e) {
	return Kh(e, ["bottom", "top"]);
}
function Xh(e) {
	return Kh(e, ["top", "bottom"]);
}
function Zh() {
	let [e, t] = Gh(...arguments);
	return tg("y", qh(t), e, t);
}
function Qh() {
	let [e, t] = Gh(...arguments);
	return tg("fy", Jh(t), e, t);
}
function $h() {
	let [e, t] = Gh(...arguments);
	return ng("x", Yh(t), e, t);
}
function eg() {
	let [e, t] = Gh(...arguments);
	return ng("fx", Xh(t), e, t);
}
function tg(e, t, n, { color: r = "currentColor", opacity: i = 1, stroke: a = r, strokeOpacity: o = i, strokeWidth: s = 1, fill: c = r, fillOpacity: l = i, textAnchor: u, textStroke: d, textStrokeOpacity: f, textStrokeWidth: p, tickSize: m = e === "y" ? 6 : 0, tickPadding: h, tickRotate: g, x: _, margin: v, marginTop: y = v === void 0 ? 20 : v, marginRight: b = v === void 0 ? t === "right" ? 40 : 0 : v, marginBottom: x = v === void 0 ? 20 : v, marginLeft: S = v === void 0 ? t === "left" ? 40 : 0 : v, label: C, labelAnchor: w, labelArrow: T, labelOffset: E, ariaLabel: D = `${e}-axis`, ...O }) {
	return m = K(m), h = K(h), g = K(g), w !== void 0 && (w = ul(w, "labelAnchor", [
		"center",
		"top",
		"bottom"
	])), T = Eg(T), um(m && !J(a) ? rg(e, t, n, {
		stroke: a,
		strokeOpacity: o,
		strokeWidth: s,
		tickSize: m,
		tickPadding: h,
		tickRotate: g,
		x: _,
		ariaLabel: D,
		...O
	}) : null, J(c) ? null : ag(e, t, n, {
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
	}), !J(c) && C !== null ? lh([], mg({
		fill: c,
		fillOpacity: l,
		...O
	}, function(n, r, i, a, o) {
		let s = a[e], { marginTop: c, marginRight: l, marginBottom: u, marginLeft: d } = e === "y" && o.inset || o, f = w ?? (s.bandwidth ? "center" : "top"), p = E ?? (t === "right" ? l : d) - 3;
		return f === "center" ? (this.textAnchor = void 0, this.lineAnchor = t === "right" ? "bottom" : "top", this.frameAnchor = t, this.rotate = -90) : (this.textAnchor = t === "right" ? "end" : "start", this.lineAnchor = f, this.frameAnchor = `${f}-${t}`, this.rotate = 0), this.dy = f === "top" ? 3 - c : f === "bottom" ? u - 3 : 0, this.dx = t === "right" ? p : -p, this.ariaLabel = `${D} label`, {
			facets: [[0]],
			channels: { text: { value: [Tg(e, s, {
				anchor: t,
				label: C,
				labelAnchor: f,
				labelArrow: T
			})] } }
		};
	})) : null);
}
function ng(e, t, n, { color: r = "currentColor", opacity: i = 1, stroke: a = r, strokeOpacity: o = i, strokeWidth: s = 1, fill: c = r, fillOpacity: l = i, textAnchor: u, textStroke: d, textStrokeOpacity: f, textStrokeWidth: p, tickSize: m = e === "x" ? 6 : 0, tickPadding: h, tickRotate: g, y: _, margin: v, marginTop: y = v === void 0 ? t === "top" ? 30 : 0 : v, marginRight: b = v === void 0 ? 20 : v, marginBottom: x = v === void 0 ? t === "bottom" ? 30 : 0 : v, marginLeft: S = v === void 0 ? 20 : v, label: C, labelAnchor: w, labelArrow: T, labelOffset: E, ariaLabel: D = `${e}-axis`, ...O }) {
	return m = K(m), h = K(h), g = K(g), w !== void 0 && (w = ul(w, "labelAnchor", [
		"center",
		"left",
		"right"
	])), T = Eg(T), um(m && !J(a) ? ig(e, t, n, {
		stroke: a,
		strokeOpacity: o,
		strokeWidth: s,
		tickSize: m,
		tickPadding: h,
		tickRotate: g,
		y: _,
		ariaLabel: D,
		...O
	}) : null, J(c) ? null : og(e, t, n, {
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
	}), !J(c) && C !== null ? lh([], mg({
		fill: c,
		fillOpacity: l,
		...O
	}, function(n, r, i, a, o) {
		let s = a[e], { marginTop: c, marginRight: l, marginBottom: u, marginLeft: d } = e === "x" && o.inset || o, f = w ?? (s.bandwidth ? "center" : "right"), p = E ?? (t === "top" ? c : u) - 3;
		return f === "center" ? (this.frameAnchor = t, this.textAnchor = void 0) : (this.frameAnchor = `${t}-${f}`, this.textAnchor = f === "right" ? "end" : "start"), this.lineAnchor = t, this.dy = t === "top" ? -p : p, this.dx = f === "right" ? l - 3 : f === "left" ? 3 - d : 0, this.ariaLabel = `${D} label`, {
			facets: [[0]],
			channels: { text: { value: [Tg(e, s, {
				anchor: t,
				label: C,
				labelAnchor: f,
				labelArrow: T
			})] } }
		};
	})) : null);
}
function rg(e, t, n, { strokeWidth: r = 1, strokeLinecap: i = null, strokeLinejoin: a = null, facetAnchor: o = t + (e === "y" ? "-empty" : ""), frameAnchor: s = t, tickSize: c, inset: l = 0, insetLeft: u = l, insetRight: d = l, dx: f = 0, y: p = e === "y" ? void 0 : null, ariaLabel: m, ...h }) {
	return hg(Wh, e, n, {
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
		dx: t === "left" ? +f - Bp + +u : +f + Bp - d,
		anchor: "start",
		length: c,
		shape: t === "left" ? Sg : Cg
	});
}
function ig(e, t, n, { strokeWidth: r = 1, strokeLinecap: i = null, strokeLinejoin: a = null, facetAnchor: o = t + (e === "x" ? "-empty" : ""), frameAnchor: s = t, tickSize: c, inset: l = 0, insetTop: u = l, insetBottom: d = l, dy: f = 0, x: p = e === "x" ? void 0 : null, ariaLabel: m, ...h }) {
	return hg(Uh, e, n, {
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
		dy: t === "bottom" ? +f - Bp - d : +f + Bp + +u,
		anchor: "start",
		length: c,
		shape: t === "bottom" ? bg : xg
	});
}
function ag(e, t, n, { facetAnchor: r = t + (e === "y" ? "-empty" : ""), frameAnchor: i = t, tickSize: a, tickRotate: o = 0, tickPadding: s = Math.max(3, 9 - a) + (Math.abs(o) > 60 ? 4 * Math.cos(o * Dm) : 0), text: c, textAnchor: l = Math.abs(o) > 60 ? "middle" : t === "left" ? "end" : "start", lineAnchor: u = o > 60 ? "top" : o < -60 ? "bottom" : "middle", fontVariant: d, inset: f = 0, insetLeft: p = f, insetRight: m = f, dx: h = 0, ariaLabel: g, y: _ = e === "y" ? void 0 : null, ...v }) {
	return hg(dh, e, n, { ariaLabel: `${g} tick label` }, {
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
		d === void 0 && (this.fontVariant = wg(e)), c === void 0 && (a.text = _g(e, n, r, i, t));
	});
}
function og(e, t, n, { facetAnchor: r = t + (e === "x" ? "-empty" : ""), frameAnchor: i = t, tickSize: a, tickRotate: o = 0, tickPadding: s = Math.max(3, 9 - a) + (Math.abs(o) >= 10 ? 4 * Math.cos(o * Dm) : 0), text: c, textAnchor: l = Math.abs(o) >= 10 ? o < 0 ^ t === "bottom" ? "start" : "end" : "middle", lineAnchor: u = Math.abs(o) >= 10 ? "middle" : t === "bottom" ? "top" : "bottom", fontVariant: d, inset: f = 0, insetTop: p = f, insetBottom: m = f, dy: h = 0, x: g = e === "x" ? void 0 : null, ariaLabel: _, ...v }) {
	return hg(uh, e, n, { ariaLabel: `${_} tick label` }, {
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
		d === void 0 && (this.fontVariant = wg(e)), c === void 0 && (a.text = _g(e, n, r, i, t));
	});
}
function sg() {
	let [e, t] = Gh(...arguments);
	return dg("y", qh(t), e, t);
}
function cg() {
	let [e, t] = Gh(...arguments);
	return dg("fy", Jh(t), e, t);
}
function lg() {
	let [e, t] = Gh(...arguments);
	return fg("x", Yh(t), e, t);
}
function ug() {
	let [e, t] = Gh(...arguments);
	return fg("fx", Xh(t), e, t);
}
function dg(e, t, n, { y: r = e === "y" ? void 0 : null, x: i = null, x1: a = t === "left" ? i : null, x2: o = t === "right" ? i : null, ariaLabel: s = `${e}-grid`, ariaHidden: c = !0, ...l }) {
	return hg(th, e, n, {
		ariaLabel: s,
		ariaHidden: c
	}, {
		y: r,
		x1: a,
		x2: o,
		...pg(l)
	});
}
function fg(e, t, n, { x: r = e === "x" ? void 0 : null, y: i = null, y1: a = t === "top" ? i : null, y2: o = t === "bottom" ? i : null, ariaLabel: s = `${e}-grid`, ariaHidden: c = !0, ...l }) {
	return hg(eh, e, n, {
		ariaLabel: s,
		ariaHidden: c
	}, {
		x: r,
		y1: a,
		y2: o,
		...pg(l)
	});
}
function pg({ color: e = "currentColor", opacity: t = .1, stroke: n = e, strokeOpacity: r = t, strokeWidth: i = 1, ...a }) {
	return {
		stroke: n,
		strokeOpacity: r,
		strokeWidth: i,
		...a
	};
}
function mg({ fill: e, fillOpacity: t, fontFamily: n, fontSize: r, fontStyle: i, fontVariant: a, fontWeight: o, monospace: s, pointerEvents: c, shapeRendering: l, clip: u = !1 }, d) {
	return [, e] = sl(e), [, t] = cl(t), {
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
function hg(e, t, n, r, i, a) {
	let o;
	function s(e, n, r, s, c, l) {
		let u = e == null && (t === "fx" || t === "fy"), { [t]: d } = s;
		if (!d) throw Error(`missing scale: ${t}`);
		let f = d.domain(), { interval: p, ticks: m, tickFormat: h, tickSpacing: g = t === "x" ? 80 : 35 } = i;
		if (typeof m == "string" && Dg(d) && (p = m, m = void 0), m === void 0 && (m = Rl(p, d.type) ?? gg(d, g)), e == null) {
			if (Ul(m)) e = fl(m);
			else if (Bl(m)) e = yg(m, ...at(f));
			else if (d.interval) {
				let t = d.interval;
				if (d.ticks) {
					let [n, r] = at(f), i = (r - n) / t[vc];
					t = Dc(t, i / m) ?? t, e = yg(t, n, r);
				} else {
					e = f;
					let n = e.length;
					t = Dc(t, n / m) ?? t, t !== d.interval && (e = yg(t, ...at(e)));
				}
				if (t === d.interval) {
					let t = Math.round(e.length / m);
					t > 1 && (e = e.filter((e, n) => n % t === 0));
				}
			} else e = d.ticks ? d.ticks(m) : f;
			if (!d.ticks && e.length && e !== f) {
				let n = new ne(f);
				e = e.filter((e) => n.has(e)), e.length || Jd(`Warning: the ${t}-axis ticks appear to not align with the scale domain, resulting in no ticks. Try different ticks?`);
			}
			t === "y" || t === "x" ? n = [El(e)] : o[t] = {
				scale: t,
				value: Xc
			};
		}
		a?.call(this, d, e, m, h, o);
		let _ = Object.fromEntries(Object.entries(o).map(([t, n]) => [t, {
			...n,
			value: Vc(e, n.value)
		}]));
		return u && (n = l.filterFacets(e, _)), {
			data: e,
			facets: n,
			channels: _
		};
	}
	let c = Eu(i).initializer, l = e(n, Eu({
		...i,
		initializer: s
	}, c));
	return n == null ? (o = l.channels, l.channels = {}) : o = {}, r !== void 0 && Object.assign(l, r), l.clip === void 0 && (l.clip = !1), l;
}
function gg(e, t) {
	let [n, r] = at(e.range());
	return (r - n) / t;
}
function _g(e, t, n, r, i) {
	return { value: vg(e, t, n, r, i) };
}
function vg(e, t, n, r, i) {
	return typeof r == "function" && !(e.type === "log" && e.tickFormat) ? r : r === void 0 && t && Kl(t) ? jc(e.type, t, i) ?? zp : e.tickFormat ? e.tickFormat(typeof n == "number" ? n : null, r) : typeof r == "string" && e.domain().length > 0 ? (Kl(e.domain()) ? ee : Ue)(r) : r === void 0 ? zp : tl(r);
}
function yg(e, t, n) {
	return e.range(t, e.offset(e.floor(n)));
}
var bg = { draw(e, t) {
	e.moveTo(0, 0), e.lineTo(0, t);
} }, xg = { draw(e, t) {
	e.moveTo(0, 0), e.lineTo(0, -t);
} }, Sg = { draw(e, t) {
	e.moveTo(0, 0), e.lineTo(-t, 0);
} }, Cg = { draw(e, t) {
	e.moveTo(0, 0), e.lineTo(t, 0);
} };
function wg(e) {
	return e.bandwidth && !e.interval ? void 0 : "tabular-nums";
}
function Tg(e, t, { anchor: n, label: r = t.label, labelAnchor: i, labelArrow: a } = {}) {
	if (!(r == null || r.inferred && Dg(t) && /^(date|time|year)$/i.test(r))) {
		if (r = String(r), a === "auto" && (a = (!t.bandwidth || t.interval) && !/[↑↓→←]/.test(r)), !a) return r;
		if (a === !0) {
			let n = wf(t);
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
function Eg(e = "auto") {
	return J(e) ? !1 : typeof e == "boolean" ? e : ul(e, "labelArrow", [
		"auto",
		"up",
		"right",
		"down",
		"left"
	]);
}
function Dg(e) {
	return Kl(e.domain());
}
//#endregion
//#region node_modules/@observablehq/plot/src/legends/swatches.js
function Og(e, t) {
	if (t == null) return t;
	let n = e(t);
	if (!n) throw Error(`scale not found: ${t}`);
	return n;
}
function kg(e, { opacity: t, ...n } = {}) {
	if (!Rf(e) && !zf(e)) throw Error(`swatches legend requires ordinal or threshold color scale (not ${e.type})`);
	return jg(e, n, (e, n, r, i) => e.append("svg").attr("width", r).attr("height", i).attr("fill", n.scale).attr("fill-opacity", cl(t)[1]).append("rect").attr("width", "100%").attr("height", "100%"));
}
function Ag(e, { fill: t = e.hint?.fill === void 0 ? "none" : e.hint.fill, fillOpacity: n = 1, stroke: r = e.hint?.stroke === void 0 ? J(t) ? "currentColor" : "none" : e.hint.stroke, strokeOpacity: i = 1, strokeWidth: a = 1.5, r: o = 4.5, ...s } = {}, c) {
	let [l, u] = sl(t), [d, f] = sl(r), p = Og(c, l), m = Og(c, d), h = o * o * Math.PI;
	return n = cl(n)[1], i = cl(i)[1], a = cl(a)[1], jg(e, s, (t, r, o, s) => t.append("svg").attr("viewBox", "-8 -8 16 16").attr("width", o).attr("height", s).attr("fill", l === "color" ? (e) => p.scale(e) : u).attr("fill-opacity", n).attr("stroke", d === "color" ? (e) => m.scale(e) : f).attr("stroke-opacity", i).attr("stroke-width", a).append("path").attr("d", (t) => {
		let n = Ye();
		return e.scale(t).draw(n, h), n;
	}));
}
function jg(e, t = {}, n) {
	let { columns: r, tickFormat: i, fontVariant: a = Tm(e), swatchSize: o = 15, swatchWidth: s = o, swatchHeight: c = o, marginLeft: l = 0, className: u, style: d, width: f } = t, p = Ap(t);
	u = om(u), i = vg(e.scale, e.domain, void 0, i);
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
${h}`)).style("margin-left", l ? `${+l}px` : null).style("width", f === void 0 ? null : `${+f}px`).style("font-variant", $(a, "normal")).call(sm, d).node();
}
//#endregion
//#region node_modules/@observablehq/plot/src/legends.js
var Mg = /* @__PURE__ */ new Map([
	["symbol", Ag],
	["color", Fg],
	["opacity", Ig]
]);
function Ng(e, t, n = {}) {
	return (r, i) => {
		if (!Mg.has(r)) throw Error(`unknown legend type: ${r}`);
		if (r in e) return Mg.get(r)(e[r], Pg(t, n[r], i), (t) => e[t]);
	};
}
function Pg({ className: e, ...t }, { label: n, ticks: r, tickFormat: i } = {}, a) {
	return iu(a, {
		className: e,
		...t
	}, {
		label: n,
		ticks: r,
		tickFormat: i
	});
}
function Fg(e, { legend: t = !0, ...n }) {
	if (t === !0 && (t = e.type === "ordinal" ? "swatches" : "ramp"), e.domain !== void 0) switch (`${t}`.toLowerCase()) {
		case "swatches": return kg(e, n);
		case "ramp": return Em(e, n);
		default: throw Error(`unknown legend type: ${t}`);
	}
}
function Ig({ type: e, interpolate: t, ...n }, { legend: r = !0, color: a = i(0, 0, 0), ...o }) {
	if (!t) throw Error(`${e} opacity scales are not supported`);
	if (r === !0 && (r = "ramp"), `${r}`.toLowerCase() !== "ramp") throw Error(`${r} opacity legends are not supported`);
	return Fg({
		type: e,
		...n,
		interpolate: Lg(a)
	}, {
		legend: r,
		...o
	});
}
function Lg(e) {
	let { r: t, g: n, b: r } = i(e) || i(0, 0, 0);
	return (e) => `rgba(${t},${n},${r},${e})`;
}
function Rg(e, t, n) {
	let r = [];
	for (let [i, a] of Mg) {
		let o = n[i];
		if (o?.legend && i in e) {
			let n = a(e[i], Pg(t, e[i], o), (t) => e[t]);
			n != null && r.push(n);
		}
	}
	return r;
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/identity.js
function zg(e = {}, t = "y") {
	return gl(e) ? e : {
		...e,
		[t]: Xc
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/transforms/exclusiveFacets.js
function Bg(e, t) {
	if (t.length === 1) return {
		data: e,
		facets: t
	};
	let n = Tl(e), r = new Uint8Array(n), i = 0;
	for (let e of t) for (let t of e) r[t] && ++i, r[t] = 1;
	if (i === 0) return {
		data: e,
		facets: t
	};
	e = ml(e);
	let a = e[Bc] = new Uint32Array(n + i);
	t = t.map((e) => ml(e, Uint32Array));
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
function Vg(e = {}, t = {}) {
	arguments.length === 1 && ([e, t] = Ug(e));
	let { x1: n, x: r = n, y: i, ...a } = t, [o, s, c, l] = Gg(r, i, "x", "y", e, a);
	return {
		...o,
		x1: n,
		x: s,
		y1: c,
		y2: l,
		y: Nl(c, l)
	};
}
function Hg({ y: e, y1: t, y2: n, ...r } = {}) {
	return r = mm(r, "x"), t === void 0 && n === void 0 ? Vg({
		y: e,
		...r
	}) : ([t, n] = Sl(e, t, n), {
		...r,
		y1: t,
		y2: n
	});
}
function Ug(e) {
	let { offset: t, order: n, reverse: r, ...i } = e;
	return [{
		offset: t,
		order: n,
		reverse: r
	}, i];
}
var Wg = { length: !0 };
function Gg(e, t = Zc, n, r, { offset: i, order: a, reverse: o }, s) {
	if (t === null) throw Error(`stack requires ${r}`);
	let c = wl(s), [l, u] = jl(e), [d, f] = Al(t), [p, m] = Al(t);
	return d.hint = p.hint = Wg, i = Kg(i), a = $g(a, i, r), [
		Tu(s, (r, s, l) => {
			({data: r, facets: s} = Bg(r, s));
			let d = e == null ? void 0 : u(Pl(Vc(r, e), l?.[n])), p = Vc(r, t, Float64Array), h = Vc(r, c), g = a && a(r, d, p, h), _ = Tl(r), v = f(new Float64Array(_)), y = m(new Float64Array(_)), b = [];
			for (let e of s) {
				let t = d ? Array.from(ct(e, (e) => d[e]).values()) : [e];
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
function Kg(e) {
	if (e != null) {
		if (typeof e == "function") return e;
		switch (`${e}`.toLowerCase()) {
			case "expand":
			case "normalize": return Jg;
			case "center":
			case "silhouette": return Yg;
			case "wiggle": return Xg;
		}
		throw Error(`unknown offset: ${e}`);
	}
}
function qg(e, t) {
	let n = 0, r = 0;
	for (let i of e) {
		let e = t[i];
		e < n && (n = e), e > r && (r = e);
	}
	return [n, r];
}
function Jg(e, t, n) {
	for (let r of e) for (let e of r) {
		let [r, i] = qg(e, n);
		for (let a of e) {
			let e = 1 / (i - r || 1);
			t[a] = e * (t[a] - r), n[a] = e * (n[a] - r);
		}
	}
}
function Yg(e, t, n) {
	for (let r of e) {
		for (let e of r) {
			let [r, i] = qg(e, n);
			for (let a of e) {
				let e = (i + r) / 2;
				t[a] -= e, n[a] -= e;
			}
		}
		Zg(r, t, n);
	}
	Qg(e, t, n);
}
function Xg(e, t, n, r) {
	for (let i of e) {
		let e = new k(), a = 0;
		for (let o of i) {
			let i = -1, s = o.map((e) => Math.abs(n[e] - t[e])), c = o.map((a) => {
				i = r ? r[a] : ++i;
				let o = n[a] - t[a], s = e.has(i) ? o - e.get(i) : 0;
				return e.set(i, o), s;
			}), l = [0, ...tt(c)];
			for (let e of o) t[e] += a, n[e] += a;
			let u = Je(s);
			u && (a -= Je(s, (e, t) => (c[t] / 2 + l[t]) * e) / u);
		}
		Zg(i, t, n);
	}
	Qg(e, t, n);
}
function Zg(e, t, n) {
	let r = Ke(e, (e) => Ke(e, (e) => t[e]));
	for (let i of e) for (let e of i) t[e] -= r, n[e] -= r;
}
function Qg(e, t, n) {
	let r = e.length;
	if (r === 1) return;
	let i = e.map((e) => e.flat()), a = i.map((e) => (Ke(e, (e) => t[e]) + qe(e, (e) => n[e])) / 2), o = Ke(a);
	for (let e = 0; e < r; e++) {
		let r = o - a[e];
		for (let a of i[e]) t[a] += r, n[a] += r;
	}
}
function $g(e, t, n) {
	if (e === void 0 && t === Xg) return i_(Ys);
	if (e != null) {
		if (typeof e == "string") {
			let t = e.startsWith("-"), r = t ? Xs : Ys;
			switch ((t ? e.slice(1) : e).toLowerCase()) {
				case "value":
				case n: return e_(r);
				case "z": return t_(r);
				case "sum": return n_(r);
				case "appearance": return r_(r);
				case "inside-out": return i_(r);
			}
			return a_(Jc(e));
		}
		if (typeof e == "function") return (e.length === 1 ? a_ : o_)(e);
		if (Fc(e)) return s_(e);
		throw Error(`invalid order: ${e}`);
	}
}
function e_(e) {
	return (t, n, r) => (t, n) => e(r[t], r[n]);
}
function t_(e) {
	return (t, n, r, i) => (t, n) => e(i[t], i[n]);
}
function n_(e) {
	return c_(e, (e, t, n, r) => gt(El(e), (e) => Je(e, (e) => n[e]), (e) => r[e]));
}
function r_(e) {
	return c_(e, (e, t, n, r) => gt(El(e), (e) => t[xt(e, (e) => n[e])], (e) => r[e]));
}
function i_(e) {
	return c_(e, (e, t, n, r) => {
		let i = El(e), a = gt(i, (e) => t[xt(e, (e) => n[e])], (e) => r[e]), o = lt(i, (e) => Je(e, (e) => n[e]), (e) => r[e]), s = [], c = [], l = 0;
		for (let e of a) l < 0 ? (l += o.get(e), s.push(e)) : (l -= o.get(e), c.push(e));
		return c.reverse().concat(s);
	});
}
function a_(e) {
	return (t) => {
		let n = Vc(t, e);
		return (e, t) => Ys(n[e], n[t]);
	};
}
function o_(e) {
	return (t) => Fc(t) ? (n, r) => e(t[n], t[r]) : (n, r) => e(t.get(n), t.get(r));
}
function s_(e) {
	return c_(Ys, () => e);
}
function c_(e, t) {
	return (n, r, i, a) => {
		if (!a) throw Error("missing channel: z");
		let o = new k(t(n, r, i, a).map((e, t) => [e, t]));
		return (t, n) => e(o.get(a[t]), o.get(a[n]));
	};
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/rect.js
function l_(e, { inset: t = 0, insetTop: n = t, insetRight: r = t, insetBottom: i = t, insetLeft: a = t } = {}) {
	e.insetTop = K(n), e.insetRight = K(r), e.insetBottom = K(i), e.insetLeft = K(a);
}
function u_(e, { r: t, rx: n, ry: r, rx1: i = t, ry1: a = t, rx2: o = t, ry2: s = t, rx1y1: c = i === void 0 ? a === void 0 ? 0 : +a : +i, rx1y2: l = i === void 0 ? s === void 0 ? 0 : +s : +i, rx2y1: u = o === void 0 ? a === void 0 ? 0 : +a : +o, rx2y2: d = o === void 0 ? s === void 0 ? 0 : +s : +o } = {}) {
	c || l || u || d ? (e.rx1y1 = c, e.rx1y2 = l, e.rx2y1 = u, e.rx2y2 = d) : (e.rx = $(n, "auto"), e.ry = $(r, "auto"));
}
function d_(e, t, n, r, i, a) {
	let { rx1y1: o, rx1y2: s, rx2y1: c, rx2y2: l } = a;
	typeof t != "function" && (t = tl(t)), typeof n != "function" && (n = tl(n)), typeof r != "function" && (r = tl(r)), typeof i != "function" && (i = tl(i));
	let u = Math.max(Math.abs(o + c), Math.abs(s + l)), d = Math.max(Math.abs(o + s), Math.abs(c + l));
	e.attr("d", (e) => {
		let a = t(e), f = n(e), p = r(e), m = i(e), h = a > p, g = f > m, _ = h ? p : a, v = h ? a : p, y = g ? m : f, b = g ? f : m, x = Math.min(1, (v - _) / u, (b - y) / d), S = x * (h ? g ? l : c : g ? s : o), C = x * (h ? g ? s : o : g ? l : c), w = x * (h ? g ? o : s : g ? c : l), T = x * (h ? g ? c : l : g ? o : s);
		return `M${_},${y + p_(S, T)}A${S},${S} 0 0 ${S < 0 ? 0 : 1} ${_ + f_(S, T)},${y}H${v - f_(C, w)}A${C},${C} 0 0 ${C < 0 ? 0 : 1} ${v},${y + p_(C, w)}V${b - p_(w, C)}A${w},${w} 0 0 ${w < 0 ? 0 : 1} ${v - f_(w, C)},${b}H${_ + f_(T, S)}A${T},${T} 0 0 ${T < 0 ? 0 : 1} ${_},${b - p_(T, S)}Z`;
	});
}
function f_(e, t) {
	return t < 0 ? e : Math.abs(e);
}
function p_(e, t) {
	return t < 0 ? Math.abs(e) : e;
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/frame.js
var m_ = {
	ariaLabel: "frame",
	fill: "none",
	stroke: "currentColor",
	clip: !1
}, h_ = {
	ariaLabel: "frame",
	fill: null,
	stroke: "currentColor",
	strokeLinecap: "square",
	clip: !1
}, g_ = class extends lm {
	constructor(e = {}) {
		let { anchor: t = null } = e;
		super(qc, void 0, e, t == null ? m_ : h_), this.anchor = ll(t, "anchor", [
			"top",
			"right",
			"bottom",
			"left"
		]), l_(this, e), t || u_(this, e);
	}
	render(e, t, n, r, i) {
		let { marginTop: a, marginRight: o, marginBottom: s, marginLeft: c, width: l, height: u } = r, { anchor: d, insetTop: f, insetRight: p, insetBottom: m, insetLeft: h } = this, { rx: g, ry: _, rx1y1: v, rx1y2: y, rx2y1: b, rx2y2: x } = this, S = c + h, C = l - o - p, w = a + f, T = u - s - m;
		return Z(d ? "svg:line" : v || y || b || x ? "svg:path" : "svg:rect", i).datum(0).call($p, this, r, i).call(em, this).call(Kp, this, n).call(rm, this, {}).call(d === "left" ? (e) => e.attr("x1", S).attr("x2", S).attr("y1", w).attr("y2", T) : d === "right" ? (e) => e.attr("x1", C).attr("x2", C).attr("y1", w).attr("y2", T) : d === "top" ? (e) => e.attr("x1", S).attr("x2", C).attr("y1", w).attr("y2", w) : d === "bottom" ? (e) => e.attr("x1", S).attr("x2", C).attr("y1", T).attr("y2", T) : v || y || b || x ? (e) => e.call(d_, S, w, C, T, this) : (e) => e.attr("x", S).attr("y", w).attr("width", C - S).attr("height", T - w).attr("rx", g).attr("ry", _)).node();
	}
};
function __(e) {
	return new g_(e);
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/tip.js
var v_ = {
	ariaLabel: "tip",
	fill: "var(--plot-background)",
	stroke: "currentColor"
}, y_ = /* @__PURE__ */ new Set([
	"geometry",
	"href",
	"src",
	"ariaLabel",
	"scales"
]), b_ = class extends lm {
	constructor(e, t = {}) {
		t.tip && (t = {
			...t,
			tip: !1
		}), t.title === void 0 && Ul(e) && Wl(e) && (t = {
			...t,
			title: Xc
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
		}, t, v_), this.anchor = nu(c, "anchor"), this.preferredAnchor = nu(l, "preferredAnchor"), this.frameAnchor = ru(v), this.textAnchor = $(b, "middle"), this.textPadding = +S, this.pointerSize = +w, this.pathFilter = G(T), this.lineHeight = +g, this.lineWidth = +_, this.textOverflow = sh(x), this.monospace = !!u, this.fontFamily = G(d), this.fontSize = K(f), this.fontStyle = G(p), this.fontVariant = G(m), this.fontWeight = G(h);
		for (let e in v_) e in this.channels && (this[e] = v_[e]);
		this.splitLines = xh(this), this.clipLine = Sh(this), this.format = typeof y == "string" || typeof y == "function" ? { title: y } : { ...y };
	}
	render(e, n, r, i, a) {
		let o = this, { x: s, y: c, fx: l, fy: u } = n, { ownerSVGElement: d, document: f } = a, { anchor: p, monospace: m, lineHeight: h, lineWidth: g } = this, { textPadding: _, pointerSize: v, pathFilter: y } = this, { marginTop: b, marginLeft: x } = i, { x1: S, y1: C, x2: w, y2: T, x: E = S ?? w, y: D = C ?? T } = r, O = l ? l(e.fx) - x : 0, k = u ? u(e.fy) - b : 0, [A, j] = cm(this, i), ee = Cm(r, A), te = wm(r, j), ne = m ? bh : yh, re = ne("…"), ie, ae;
		"title" in r ? (ie = T_.call(this, { title: r.channels.title }, n), ae = D_) : (ie = T_.call(this, r.channels, n), ae = O_);
		let oe = Z("svg:g", a).call($p, this, i, a).call(fh, this).call(rm, this, {
			x: E && s,
			y: D && c
		}).call((i) => i.selectAll().data(e).enter().append("g").attr("transform", (e) => `translate(${Math.round(ee(e))},${Math.round(te(e))})`).call(em, this).call((e) => e.append("path").attr("filter", y)).call((i) => i.append("text").each(function(i) {
			let a = t(this);
			this.setAttribute("fill", "currentColor"), this.setAttribute("fill-opacity", 1), this.setAttribute("stroke", "none");
			let s = ae.call(o, i, e, ie, n, r);
			if (typeof s == "string") for (let e of o.splitLines(s)) M(a, { value: o.clipLine(e) });
			else {
				let e = /* @__PURE__ */ new Set();
				for (let t of s) {
					let { label: n = "" } = t;
					n && e.has(n) || (e.add(n), M(a, t));
				}
			}
		})));
		function M(e, { label: t, value: n, color: r, opacity: i }) {
			t ??= "", n ??= "";
			let a = r != null || i != null, o, s = g * 100, [c] = Ch(t, s, ne, re);
			if (c >= 0) t = t.slice(0, c).trimEnd() + "…", o = n.trim(), n = "";
			else {
				(t || !n && !a) && (n = " " + n);
				let [e] = Ch(n, s - ne(t), ne, re);
				e >= 0 && (o = n.trim(), n = n.slice(0, e).trimEnd() + "…");
			}
			let l = e.append("tspan").attr("x", 0).attr("dy", `${h}em`).text("​");
			t && l.append("tspan").attr("font-weight", "bold").text(t), n && l.append(() => f.createTextNode(n)), a && l.append("tspan").text(" ■").attr("fill", r).attr("fill-opacity", i).style("user-select", "none"), o && l.append("title").text(o);
		}
		function se() {
			let { width: e, height: t } = i.facet ?? i;
			oe.selectChildren().each(function(n) {
				let { x: r, width: i, height: a } = this.getBBox();
				i = Math.round(i), a = Math.round(a);
				let s = p;
				if (s === void 0) {
					let r = ee(n) + O, c = te(n) + k, l = r + i + v + _ * 2 < e, u = r - i - v - _ * 2 > 0, d = c + a + v + _ * 2 < t, f = c - a - v - _ * 2 > 0;
					s = l && u ? d && f ? o.preferredAnchor : f ? "bottom" : "top" : d && f ? l ? "left" : "right" : (l || u) && (d || f) ? `${f ? "bottom" : "top"}-${l ? "left" : "right"}` : o.preferredAnchor;
				}
				let c = this.firstChild, l = this.lastChild;
				if (c.setAttribute("d", w_(s, v, _, i, a)), r) for (let e of l.childNodes) e.setAttribute("x", -r);
				l.setAttribute("y", `${+S_(s, l.childNodes.length, h).toFixed(6)}em`), l.setAttribute("transform", `translate(${C_(s, v, _, i, a)})`);
			}), oe.attr("visibility", null);
		}
		return e.length && (oe.attr("visibility", "hidden"), d.isConnected ? Promise.resolve().then(se) : typeof requestAnimationFrame < "u" && requestAnimationFrame(se)), oe.node();
	}
};
function x_(e, { x: t, y: n, ...r } = {}) {
	return r.frameAnchor === void 0 && ([t, n] = Cl(t, n)), new b_(e, {
		...r,
		x: t,
		y: n
	});
}
function S_(e, t, n) {
	return /^top(?:-|$)/.test(e) ? .94 - n : -.29 - t * n;
}
function C_(e, t, n, r, i) {
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
function w_(e, t, n, r, i) {
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
function T_(e, t) {
	let n = {}, r = this.format;
	r = E_(r, e, "x"), r = E_(r, e, "y"), this.format = r;
	for (let t in r) {
		let i = r[t];
		if (i !== null && i !== !1) if (t === "fx" || t === "fy") n[t] = !0;
		else {
			let r = ad(e, t);
			r && (n[t] = r);
		}
	}
	for (let t in e) {
		if (t in n || t in r || y_.has(t) || (t === "x" || t === "y") && e.geometry) continue;
		let i = ad(e, t);
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
			this.format[e] = (Kl(i) ? ee : Ue)(r);
		} else if (r === void 0 || r === !0) {
			let n = t[e];
			this.format[e] = n?.bandwidth ? vg(n, n.domain()) : zp;
		}
	}
	return n;
}
function E_(e, t, n) {
	if (!(n in e)) return e;
	let r = `${n}1`, i = `${n}2`;
	if ((r in e || !(r in t)) && (i in e || !(i in t))) return e;
	let a = Object.entries(e), o = e[n];
	return a.splice(a.findIndex(([e]) => e === n) + 1, 0, [r, o], [i, o]), Object.fromEntries(a);
}
function D_(e, t, { title: n }) {
	return this.format.title(n.value[e], e);
}
function* O_(e, t, n, r, i) {
	for (let a in n) {
		if (a === "fx" || a === "fy") {
			yield {
				label: j_(r, n, a),
				value: this.format[a](t[a], e)
			};
			continue;
		}
		if (a === "x1" && "x2" in n || a === "y1" && "y2" in n) continue;
		let o = n[a];
		if (a === "x2" && "x1" in n) yield {
			label: A_(r, n, "x"),
			value: k_(this.format.x2, n.x1, o, e)
		};
		else if (a === "y2" && "y1" in n) yield {
			label: A_(r, n, "y"),
			value: k_(this.format.y2, n.y1, o, e)
		};
		else {
			let t = o.value[e], s = o.scale;
			if (!Js(t) && s == null) continue;
			yield {
				label: j_(r, n, a),
				value: this.format[a](t, e),
				color: s === "color" ? i[a][e] : null,
				opacity: s === "opacity" ? i[a][e] : null
			};
		}
	}
}
function k_(e, t, n, r) {
	return n.hint?.length ? `${e(n.value[r] - t.value[r], r)}` : `${e(t.value[r], r)}–${e(n.value[r], r)}`;
}
function A_(e, t, n) {
	let r = j_(e, t, `${n}1`, n), i = j_(e, t, `${n}2`, n);
	return r === i ? r : `${r}–${i}`;
}
function j_(e, t, n, r = n) {
	let i = t[n], a = e[i?.scale ?? n];
	return String(a?.label ?? i?.label ?? r);
}
//#endregion
//#region node_modules/@observablehq/plot/src/plot.js
function M_(e = {}) {
	let { facet: r, style: i, title: a, subtitle: o, caption: s, ariaLabel: c, ariaDescription: l } = e, u = om(e.className), d = e.marks === void 0 ? [] : F_(e.marks);
	d.push(...K_(d));
	let f = U_(r, e), p = /* @__PURE__ */ new Map();
	for (let t of d) {
		let n = W_(t, f, e);
		n && p.set(t, n);
	}
	let m = /* @__PURE__ */ new Map();
	f && V_(m, [f], e), V_(m, p, e);
	let h = F_(q_(d, m, e));
	for (let t of h) {
		let n = W_(t, f, e);
		n && p.set(t, n);
	}
	d.unshift(...h);
	let g = Kf(m, e);
	if (g !== void 0) {
		let e = f ? mp(g, f) : void 0;
		for (let t of d) {
			if (t.facet === null || t.facet === "super") continue;
			let n = p.get(t);
			n !== void 0 && (n.facetsIndex = t.fx != null || t.fy != null ? mp(g, n) : e);
		}
		let t = /* @__PURE__ */ new Set();
		for (let { facetsIndex: e } of p.values()) e?.forEach((e, n) => {
			e?.length > 0 && t.add(n);
		});
		g.forEach(0 < t.size && t.size < g.length ? (e, n) => e.empty = !t.has(n) : (e) => e.empty = !1);
		for (let e of d) if (e.facet === "exclude") {
			let t = p.get(e);
			t !== void 0 && (t.facetsIndex = Xf(t.facetsIndex));
		}
	}
	for (let t of Y.keys()) yl(e[t]) && t !== "fx" && t !== "fy" && m.set(t, []);
	let _ = /* @__PURE__ */ new Map();
	for (let t of d) {
		if (_.has(t)) throw Error("duplicate mark; each mark must be unique");
		let { facetsIndex: n, channels: r } = p.get(t) ?? {}, { data: i, facets: a, channels: o } = t.initialize(n, r, e);
		R_(o, e), _.set(t, {
			data: i,
			facets: a,
			channels: o
		});
	}
	let v = bf(V_(m, _, e), e), y = hm(v, d, e);
	Sf(v, y);
	let b = xf(v), { fx: x, fy: S } = b, C = x || S ? Ef(v, y) : y, w = x || S ? iv(b, y) : y, T = Ap(e), E = T.document, D = n("svg").call(E.documentElement), O = D;
	T.ownerSVGElement = D, T.className = u, T.projection = vp(e, C), T.path = function() {
		return ha(this.projection ?? kp(b));
	}, T.filterFacets = (e, t) => mp(g, {
		channels: t,
		groups: Jf(e, t)
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
			B_(o), Object.assign(n.channels, o);
			for (let t of Object.values(o)) {
				let { scale: n } = t;
				n != null && !vu(Y.get(n)) && (z_(t, e), k.add(n));
			}
			(r != null || a != null) && p.set(t, !0);
		}
	}
	if (k.size) {
		let t = /* @__PURE__ */ new Map();
		V_(t, _, e, (e) => k.has(e)), V_(m, _, e, (e) => k.has(e));
		let n = rv(bf(t, e), v), { scales: r, ...i } = xf(n);
		Object.assign(v, n), Object.assign(b, i), Object.assign(b.scales, r);
	}
	let A, j;
	g !== void 0 && (A = {
		x: x?.domain(),
		y: S?.domain()
	}, g = qf(g, A), j = Yf(x, S, y));
	for (let [e, t] of _) t.values = e.scale(t.channels, b, T);
	let { width: ee, height: te } = y;
	t(D).attr("class", u).attr("fill", "currentColor").attr("font-family", "system-ui, sans-serif").attr("font-size", 10).attr("text-anchor", "middle").attr("width", ee).attr("height", te).attr("viewBox", `0 0 ${ee} ${te}`).attr("aria-label", c).attr("aria-description", l).call((e) => e.append("style").text(`:where(.${u}) {
  --plot-background: white;
  display: block;
  height: auto;
  height: intrinsic;
  max-width: 100%;
}
:where(.${u} text),
:where(.${u} tspan) {
  white-space: pre;
}`)).call(sm, i);
	for (let e of d) {
		let { channels: n, values: r, facets: i } = _.get(e);
		if (g === void 0 || e.facet === "super") {
			let t = null;
			if (i && (t = i[0], t = e.filter(t, n, r), t.length === 0)) continue;
			let a = e.render(t, b, r, w, T);
			if (a == null) continue;
			D.appendChild(a);
		} else {
			let a;
			for (let o of g) {
				if (!(e.facetAnchor?.(g, A, o) ?? !o.empty)) continue;
				let s = null;
				if (i) {
					let t = p.has(e);
					if (s = i[t ? o.i : 0], s = e.filter(s, n, r), s.length === 0) continue;
					!t && s === i[0] && (s = Ol(s)), s.fx = o.x, s.fy = o.y, s.fi = o.i;
				}
				let c = e.render(s, b, r, C, T);
				if (c != null) {
					(a ??= t(D).append("g")).append(() => c).datum(o);
					for (let e of [
						"aria-label",
						"aria-description",
						"aria-hidden",
						"transform"
					]) c.hasAttribute(e) && (a.attr(e, c.getAttribute(e)), c.removeAttribute(e));
				}
			}
			a?.selectChildren().each(j);
		}
	}
	let ne = Rg(v, T, e), { figure: re = a != null || o != null || s != null || ne.length > 0 } = e;
	re && (O = E.createElement("figure"), O.className = `${u}-figure`, O.style.maxWidth = "initial", a != null && O.append(N_(E, a, "h2")), o != null && O.append(N_(E, o, "h3")), O.append(...ne, D), s != null && O.append(P_(E, s)), "value" in D && (O.value = D.value, delete D.value)), O.scale = Wf(b.scales), O.legend = Ng(v, T, e);
	let ie = qd();
	return ie > 0 && t(D).append("text").attr("x", ee).attr("y", 20).attr("dy", "-1em").attr("text-anchor", "end").attr("font-family", "initial").text("⚠️").append("title").text(`${ie.toLocaleString("en-US")} warning${ie === 1 ? "" : "s"}. Please check the console.`), O;
}
function N_(e, t, n) {
	if (t.ownerDocument) return t;
	let r = e.createElement(n);
	return r.append(t), r;
}
function P_(e, t) {
	let n = e.createElement("figcaption");
	return n.append(t), n;
}
function F_(e) {
	return e.flat(Infinity).filter((e) => e != null).map(I_);
}
function I_(e) {
	return typeof e.render == "function" ? e : new L_(e);
}
var L_ = class extends lm {
	constructor(e) {
		if (typeof e != "function") throw TypeError("invalid mark; missing render function");
		super(), this.render = e;
	}
	render() {}
};
function R_(e, t) {
	for (let n in e) z_(e[n], t);
	return e;
}
function z_(e, t) {
	let { scale: n, transform: r = !0 } = e;
	if (n == null || !r) return;
	let { type: i, percent: a, interval: o, transform: s = a ? (e) => e == null ? NaN : e * 100 : Fl(o, i) } = t[n] ?? {};
	s != null && (e.value = q(e.value, s), e.transform = !1);
}
function B_(e) {
	for (let t in e) Xu(t, e[t]);
}
function V_(e, t, n, r = Qc) {
	for (let { channels: i } of t.values()) for (let t in i) {
		let a = i[t], { scale: o } = a;
		if (o != null && r(o)) if (o === "projection") {
			if (!Ep(n)) {
				let t = n.x?.domain === void 0, r = n.y?.domain === void 0;
				if (t || r) {
					let [n, i] = Op(a);
					t && H_(e, "x", n), r && H_(e, "y", i);
				}
			}
		} else H_(e, o, a);
	}
	return e;
}
function H_(e, t, n) {
	let r = e.get(t);
	r === void 0 ? e.set(t, [n]) : r.push(n);
}
function U_(e, t) {
	if (e == null) return;
	let { x: n, y: r } = e;
	if (n == null && r == null) return;
	let i = dl(e.data);
	if (i == null) throw Error("missing facet data");
	let a = {};
	return n != null && (a.fx = qu(i, {
		value: n,
		scale: "fx"
	})), r != null && (a.fy = qu(i, {
		value: r,
		scale: "fy"
	})), R_(a, t), {
		channels: a,
		groups: Jf(i, a),
		data: e.data
	};
}
function W_(e, t, n) {
	if (e.facet === null || e.facet === "super") return;
	let { fx: r, fy: i } = e;
	if (r != null || i != null) {
		let t = dl(e.data ?? r ?? i);
		if (t === void 0) throw Error(`missing facet data in ${e.ariaLabel}`);
		if (t === null) return;
		let a = {};
		return r != null && (a.fx = qu(t, {
			value: r,
			scale: "fx"
		})), i != null && (a.fy = qu(t, {
			value: i,
			scale: "fy"
		})), R_(a, n), {
			channels: a,
			groups: Jf(t, a)
		};
	}
	if (t === void 0) return;
	let { channels: a, groups: o, data: s } = t;
	if (e.facet !== "auto" || e.data === s) return {
		channels: a,
		groups: o
	};
	s.length > 0 && (o.size > 1 || o.size === 1 && a.fx && a.fy && [...o][0][1].size > 1) && Tl(dl(e.data)) === Tl(s) && Jd(`Warning: the ${e.ariaLabel} mark appears to use faceted data, but isn’t faceted. The mark data has the same length as the facet data and the mark facet option is "auto", but the mark data and facet data are distinct. If this mark should be faceted, set the mark facet option to true; otherwise, suppress this warning by setting the mark facet option to false.`);
}
function G_(e, t = {}) {
	return Eu({
		...t,
		x: null,
		y: null
	}, (t, n, r, i, a, o) => o.getMarkState(e));
}
function K_(e) {
	let t = [];
	for (let n of e) {
		let e = n.tip;
		if (e) {
			e === !0 ? e = {} : typeof e == "string" && (e = { pointer: e });
			let { pointer: r, preferredAnchor: i } = e;
			r = /^x$/i.test(r) ? xm : /^y$/i.test(r) ? Sm : bm, e = r(G_(n, e)), e.title = null, i === void 0 && (e.preferredAnchor = r === Sm ? "left" : "bottom");
			let a = x_(n.data, e);
			a.facet = n.facet, a.facetAnchor = n.facetAnchor, t.push(a);
		}
	}
	return t;
}
function q_(e, t, n) {
	let { projection: r, x: i = {}, y: a = {}, fx: o = {}, fy: s = {}, axis: c, grid: l, facet: u = {}, facet: { axis: d = c, grid: f } = u, x: { axis: p = c, grid: m = p === null ? null : l } = i, y: { axis: h = c, grid: g = h === null ? null : l } = a, fx: { axis: _ = d, grid: v = _ === null ? null : f } = o, fy: { axis: y = d, grid: b = y === null ? null : f } = s } = n;
	(r || !yl(i) && !nv("x", e)) && (p = m = null), (r || !yl(a) && !nv("y", e)) && (h = g = null), t.has("fx") || (_ = v = null), t.has("fy") || (y = b = null), p === void 0 && (p = !tv(e, "x")), h === void 0 && (h = !tv(e, "y")), _ === void 0 && (_ = !tv(e, "fx")), y === void 0 && (y = !tv(e, "fy")), p === !0 && (p = "bottom"), h === !0 && (h = "left"), _ === !0 && (_ = p === "top" || p === null ? "bottom" : "top"), y === !0 && (y = h === "right" || h === null ? "left" : "right");
	let x = [];
	return Y_(x, b, cg, s), J_(x, y, Qh, "right", "left", u, s), Y_(x, v, ug, o), J_(x, _, eg, "top", "bottom", u, o), Y_(x, g, sg, a), J_(x, h, Zh, "left", "right", n, a), Y_(x, m, lg, i), J_(x, p, $h, "bottom", "top", n, i), x;
}
function J_(e, t, n, r, i, a, o) {
	if (!t) return;
	let s = X_(t);
	o = Z_(s ? r : t, a, o);
	let { line: c } = o;
	(n === Zh || n === $h) && c && !eu(c) && e.push(__(Q_(o))), e.push(n(o)), s && e.push(n({
		...o,
		anchor: i,
		label: null
	}));
}
function Y_(e, t, n, r) {
	!t || eu(t) || e.push(n($_(t, r)));
}
function X_(e) {
	return /^\s*both\s*$/i.test(e);
}
function Z_(e, t, { line: n = t.line, ticks: r, tickSize: i, tickSpacing: a, tickPadding: o, tickFormat: s, tickRotate: c, fontVariant: l, ariaLabel: u, ariaDescription: d, label: f = t.label, labelAnchor: p, labelArrow: m = t.labelArrow, labelOffset: h }) {
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
function Q_(e) {
	let { anchor: t, line: n } = e;
	return {
		anchor: t,
		facetAnchor: t + "-empty",
		stroke: n === !0 ? void 0 : n
	};
}
function $_(e, { stroke: t = Ql(e) ? e : void 0, ticks: n = ev(e) ? e : void 0, tickSpacing: r, ariaLabel: i, ariaDescription: a }) {
	return {
		stroke: t,
		ticks: n,
		tickSpacing: r,
		ariaLabel: i,
		ariaDescription: a
	};
}
function ev(e) {
	switch (typeof e) {
		case "number": return !0;
		case "string": return !Ql(e);
	}
	return Ul(e) || typeof e?.range == "function";
}
function tv(e, t) {
	let n = `${t}-axis `;
	return e.some((e) => e.ariaLabel?.startsWith(n));
}
function nv(e, t) {
	for (let n of t) for (let t in n.channels) {
		let { scale: r } = n.channels[t];
		if (r === e || r === "projection") return !0;
	}
	return !1;
}
function rv(e, t) {
	for (let n in e) {
		let r = e[n], i = t[n];
		r.label === void 0 && i && (r.label = i.label);
	}
	return e;
}
function iv({ fx: e, fy: t }, n) {
	let { marginTop: r, marginRight: i, marginBottom: a, marginLeft: o, width: s, height: c } = Tf(n), l = e && av(e), u = t && av(t);
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
function av(e) {
	let t = e.domain();
	if (t.length === 0) return [0, e.bandwidth()];
	let n = e(t[0]), r = e(t[t.length - 1]);
	return r < n && ([n, r] = [r, n]), [n, r + e.bandwidth()];
}
//#endregion
//#region node_modules/@observablehq/plot/src/marks/bar.js
var ov = { ariaLabel: "bar" }, sv = class extends lm {
	constructor(e, t, n = {}, r = ov) {
		super(e, t, n, r), l_(this, n), u_(this, n);
	}
	render(e, t, n, r, i) {
		let { rx: a, ry: o, rx1y1: s, rx1y2: c, rx2y1: l, rx2y2: u } = this, d = this._x(t, n, r), f = this._y(t, n, r), p = this._width(t, n, r), m = this._height(t, n, r);
		return Z("svg:g", i).call($p, this, r, i).call(this._transform, this, t).call((t) => t.selectAll().data(e).enter().call(s || c || l || u ? (e) => e.append("path").call(em, this).call(d_, d, f, cv(d, p), cv(f, m), this).call(Kp, this, n) : (e) => e.append("rect").call(em, this).attr("x", d).attr("width", p).attr("y", f).attr("height", m).call(Q, "rx", a).call(Q, "ry", o).call(Kp, this, n))).node();
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
function cv(e, t) {
	return typeof e == "function" && typeof t == "function" ? (n) => e(n) + t(n) : typeof e == "function" ? (n) => e(n) + t : typeof t == "function" ? (n) => e + t(n) : e + t;
}
var lv = class extends sv {
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
		e.call(rm, t, { y: n }, 0, 0);
	}
	_y({ y: e }, { y1: t, y2: n }, { marginTop: r }) {
		let { insetTop: i } = this;
		return Vf(e) ? r + i : (e) => Math.min(t[e], n[e]) + i;
	}
	_height({ y: e }, { y1: t, y2: n }, { marginTop: r, marginBottom: i, height: a }) {
		let { insetTop: o, insetBottom: s } = this;
		return Vf(e) ? a - r - i - o - s : (e) => Math.max(0, Math.abs(n[e] - t[e]) - o - s);
	}
};
function uv(e, t = {}) {
	return _l(t) || (t = {
		...t,
		x: Yc,
		y2: Xc
	}), new lv(e, Hg(Jm(zg(t))));
}
//#endregion
//#region node_modules/@observablehq/plot/src/index.js
lm.prototype.plot = function({ marks: e = [], ...t } = {}) {
	return M_({
		...t,
		marks: [...e, this]
	});
};
//#endregion
//#region src/observablePlot.ts
var dv = 640, fv = 400;
function pv(e, t, n) {
	function r() {
		n.replaceChildren();
		let r = n.clientWidth || dv, i = n.clientHeight || fv, a;
		if (e === "bar" && (a = M_({
			fx: { label: null },
			height: i,
			marks: [uv(mv(t), {
				fx: "category",
				tip: !0,
				x: "seriesName",
				y: "value",
				fill: "seriesName"
			}), th([0])],
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
function mv(e) {
	let t = [];
	for (let n of e.series) for (let [r, i] of e.categories.entries()) t.push({
		category: i,
		seriesName: n.name,
		value: n.values[r] ?? 0
	});
	return t;
}
//#endregion
export { pv as renderObservablePlot };

//# sourceMappingURL=observablePlot-D7o8-dnK.js.map