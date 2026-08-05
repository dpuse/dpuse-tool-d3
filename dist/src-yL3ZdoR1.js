import { a as e, d as t, i as n, l as r, o as i, s as a } from "./select-BIuoFcZG.js";
import { d as o, i as s, n as c, t as l } from "./string-CnCj7THX.js";
//#region node_modules/d3-dispatch/src/dispatch.js
var u = { value: () => {} };
function d() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new f(n);
}
function f(e) {
	this._ = e;
}
function p(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
f.prototype = d.prototype = {
	constructor: f,
	on: function(e, t) {
		var n = this._, r = p(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = m(n[i], e.name))) return i;
			return;
		}
		if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
		for (; ++a < o;) if (i = (e = r[a]).type) n[i] = h(n[i], e.name, t);
		else if (t == null) for (i in n) n[i] = h(n[i], e.name, null);
		return this;
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new f(e);
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
function m(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function h(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = u, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
//#endregion
//#region node_modules/d3-timer/src/timer.js
var g = 0, _ = 0, v = 0, y = 1e3, b, x, S = 0, C = 0, w = 0, T = typeof performance == "object" && performance.now ? performance : Date, E = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function D() {
	return C ||= (E(ee), T.now() + w);
}
function ee() {
	C = 0;
}
function O() {
	this._call = this._time = this._next = null;
}
O.prototype = k.prototype = {
	constructor: O,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? D() : +n) + (t == null ? 0 : +t), !this._next && x !== this && (x ? x._next = this : b = this, x = this), this._call = e, this._time = n, j();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, j());
	}
};
function k(e, t, n) {
	var r = new O();
	return r.restart(e, t, n), r;
}
function te() {
	D(), ++g;
	for (var e = b, t; e;) (t = C - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--g;
}
function A() {
	C = (S = T.now()) + w, g = _ = 0;
	try {
		te();
	} finally {
		g = 0, re(), C = 0;
	}
}
function ne() {
	var e = T.now(), t = e - S;
	t > y && (w -= t, S = e);
}
function re() {
	for (var e, t = b, n, r = Infinity; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : b = n);
	x = e, j(r);
}
function j(e) {
	g || (_ &&= clearTimeout(_), e - C > 24 ? (e < Infinity && (_ = setTimeout(A, e - T.now() - w)), v &&= clearInterval(v)) : (v ||= (S = T.now(), setInterval(ne, y)), g = 1, E(A)));
}
//#endregion
//#region node_modules/d3-timer/src/timeout.js
function M(e, t, n) {
	var r = new O();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/decompose.js
var N = 180 / Math.PI, P = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function F(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * N,
		skewX: Math.atan(c) * N,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/parse.js
var I;
function ie(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? P : F(t.a, t.b, t.c, t.d, t.e, t.f);
}
function L(e) {
	return e == null || (I ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), I.setAttribute("transform", e), !(e = I.transform.baseVal.consolidate())) ? P : (e = e.matrix, F(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/index.js
function R(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var l = o.push("translate(", null, t, null, n);
			s.push({
				i: l - 4,
				x: c(e, i)
			}, {
				i: l - 2,
				x: c(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: c(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: c(e, t)
		});
	}
	function l(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: c(e, n)
			}, {
				i: s - 2,
				x: c(t, r)
			});
		} else (n !== 1 || r !== 1) && a.push(i(a) + "scale(" + n + "," + r + ")");
	}
	return function(t, n) {
		var r = [], i = [];
		return t = e(t), n = e(n), a(t.translateX, t.translateY, n.translateX, n.translateY, r, i), o(t.rotate, n.rotate, r, i), s(t.skewX, n.skewX, r, i), l(t.scaleX, t.scaleY, n.scaleX, n.scaleY, r, i), t = n = null, function(e) {
			for (var t = -1, n = i.length, a; ++t < n;) r[(a = i[t]).i] = a.x(e);
			return r.join("");
		};
	};
}
var ae = R(ie, "px, ", "px)", "deg)"), oe = R(L, ", ", ")", ")"), se = d("start", "end", "cancel", "interrupt"), ce = [];
function z(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	U(e, n, {
		name: t,
		index: r,
		group: i,
		on: se,
		tween: ce,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: 0
	});
}
function B(e, t) {
	var n = H(e, t);
	if (n.state > 0) throw Error("too late; already scheduled");
	return n;
}
function V(e, t) {
	var n = H(e, t);
	if (n.state > 3) throw Error("too late; already running");
	return n;
}
function H(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function U(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = k(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay);
	}
	function o(a) {
		var l, u, d, f;
		if (n.state !== 1) return c();
		for (l in r) if (f = r[l], f.name === n.name) {
			if (f.state === 3) return M(o);
			f.state === 4 ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = 6, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete r[l]);
		}
		if (M(function() {
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
function W(e, t) {
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
function G(e) {
	return this.each(function() {
		W(this, e);
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/tween.js
function le(e, t) {
	var n, r;
	return function() {
		var i = V(this, e), a = i.tween;
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
function ue(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = V(this, e), o = a.tween;
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
function de(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = H(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? le : ue)(n, e, t));
}
function K(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = V(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return H(e, r).value[t];
	};
}
//#endregion
//#region node_modules/d3-transition/src/transition/interpolate.js
function q(e, t) {
	var n;
	return (typeof t == "number" ? c : t instanceof o ? s : (n = o(t)) ? (t = n, s) : l)(e, t);
}
//#endregion
//#region node_modules/d3-transition/src/transition/attr.js
function fe(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function pe(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function me(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function he(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function ge(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function _e(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function ve(e, n) {
	var r = t(e), i = r === "transform" ? oe : q;
	return this.attrTween(e, typeof n == "function" ? (r.local ? _e : ge)(r, i, K(this, "attr." + e, n)) : n == null ? (r.local ? pe : fe)(r) : (r.local ? he : me)(r, i, n));
}
//#endregion
//#region node_modules/d3-transition/src/transition/attrTween.js
function ye(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function be(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function xe(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && be(e, i)), n;
	}
	return i._value = t, i;
}
function Se(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && ye(e, i)), n;
	}
	return i._value = t, i;
}
function Ce(e, n) {
	var r = "attr." + e;
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (n == null) return this.tween(r, null);
	if (typeof n != "function") throw Error();
	var i = t(e);
	return this.tween(r, (i.local ? xe : Se)(i, n));
}
//#endregion
//#region node_modules/d3-transition/src/transition/delay.js
function we(e, t) {
	return function() {
		B(this, e).delay = +t.apply(this, arguments);
	};
}
function Te(e, t) {
	return t = +t, function() {
		B(this, e).delay = t;
	};
}
function Ee(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? we : Te)(t, e)) : H(this.node(), t).delay;
}
//#endregion
//#region node_modules/d3-transition/src/transition/duration.js
function De(e, t) {
	return function() {
		V(this, e).duration = +t.apply(this, arguments);
	};
}
function Oe(e, t) {
	return t = +t, function() {
		V(this, e).duration = t;
	};
}
function ke(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? De : Oe)(t, e)) : H(this.node(), t).duration;
}
//#endregion
//#region node_modules/d3-transition/src/transition/ease.js
function Ae(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		V(this, e).ease = t;
	};
}
function je(e) {
	var t = this._id;
	return arguments.length ? this.each(Ae(t, e)) : H(this.node(), t).ease;
}
//#endregion
//#region node_modules/d3-transition/src/transition/easeVarying.js
function Me(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		V(this, e).ease = n;
	};
}
function Ne(e) {
	if (typeof e != "function") throw Error();
	return this.each(Me(this._id, e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/filter.js
function Pe(e) {
	typeof e != "function" && (e = i(e));
	for (var t = this._groups, n = t.length, r = Array(n), a = 0; a < n; ++a) for (var o = t[a], s = o.length, c = r[a] = [], l, u = 0; u < s; ++u) (l = o[u]) && e.call(l, l.__data__, u, o) && c.push(l);
	return new X(r, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/merge.js
function Fe(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new X(o, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/on.js
function Ie(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function Le(e, t, n) {
	var r, i, a = Ie(t) ? B : V;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function Re(e, t) {
	var n = this._id;
	return arguments.length < 2 ? H(this.node(), n).on.on(e) : this.each(Le(n, e, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/remove.js
function ze(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function Be() {
	return this.on("end.remove", ze(this._id));
}
//#endregion
//#region node_modules/d3-transition/src/transition/select.js
function Ve(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = r(e));
	for (var i = this._groups, a = i.length, o = Array(a), s = 0; s < a; ++s) for (var c = i[s], l = c.length, u = o[s] = Array(l), d, f, p = 0; p < l; ++p) (d = c[p]) && (f = e.call(d, d.__data__, p, c)) && ("__data__" in d && (f.__data__ = d.__data__), u[p] = f, z(u[p], t, n, p, u, H(d, n)));
	return new X(o, this._parents, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selectAll.js
function He(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = a(e));
	for (var r = this._groups, i = r.length, o = [], s = [], c = 0; c < i; ++c) for (var l = r[c], u = l.length, d, f = 0; f < u; ++f) if (d = l[f]) {
		for (var p = e.call(d, d.__data__, f, l), m, h = H(d, n), g = 0, _ = p.length; g < _; ++g) (m = p[g]) && z(m, t, n, g, p, h);
		o.push(p), s.push(d);
	}
	return new X(o, s, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selection.js
var Ue = n.prototype.constructor;
function We() {
	return new Ue(this._groups, this._parents);
}
//#endregion
//#region node_modules/d3-transition/src/transition/style.js
function Ge(t, n) {
	var r, i, a;
	return function() {
		var o = e(this, t), s = (this.style.removeProperty(t), e(this, t));
		return o === s ? null : o === r && s === i ? a : a = n(r = o, i = s);
	};
}
function J(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function Ke(t, n, r) {
	var i, a = r + "", o;
	return function() {
		var s = e(this, t);
		return s === a ? null : s === i ? o : o = n(i = s, r);
	};
}
function qe(t, n, r) {
	var i, a, o;
	return function() {
		var s = e(this, t), c = r(this), l = c + "";
		return c ?? (l = c = (this.style.removeProperty(t), e(this, t))), s === l ? null : s === i && l === a ? o : (a = l, o = n(i = s, c));
	};
}
function Je(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = V(this, e), l = c.on, u = c.value[a] == null ? s ||= J(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function Ye(e, t, n) {
	var r = (e += "") == "transform" ? ae : q;
	return t == null ? this.styleTween(e, Ge(e, r)).on("end.style." + e, J(e)) : typeof t == "function" ? this.styleTween(e, qe(e, r, K(this, "style." + e, t))).each(Je(this._id, e)) : this.styleTween(e, Ke(e, r, t), n).on("end.style." + e, null);
}
//#endregion
//#region node_modules/d3-transition/src/transition/styleTween.js
function Xe(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function Ze(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && Xe(e, a, n)), r;
	}
	return a._value = t, a;
}
function Qe(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, Ze(e, t, n ?? ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/text.js
function Y(e) {
	return function() {
		this.textContent = e;
	};
}
function $e(e) {
	return function() {
		var t = e(this);
		this.textContent = t ?? "";
	};
}
function et(e) {
	return this.tween("text", typeof e == "function" ? $e(K(this, "text", e)) : Y(e == null ? "" : e + ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/textTween.js
function tt(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function nt(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && tt(r)), t;
	}
	return r._value = e, r;
}
function rt(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, nt(e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/transition.js
function it() {
	for (var e = this._name, t = this._id, n = Q(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = H(c, t);
		z(c, e, n, l, o, {
			time: u.time + u.delay + u.duration,
			delay: 0,
			duration: u.duration,
			ease: u.ease
		});
	}
	return new X(r, this._parents, e, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/end.js
function at() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = V(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/index.js
var ot = 0;
function X(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Z(e) {
	return n().transition(e);
}
function Q() {
	return ++ot;
}
var $ = n.prototype;
X.prototype = Z.prototype = {
	constructor: X,
	select: Ve,
	selectAll: He,
	selectChild: $.selectChild,
	selectChildren: $.selectChildren,
	filter: Pe,
	merge: Fe,
	selection: We,
	transition: it,
	call: $.call,
	nodes: $.nodes,
	node: $.node,
	size: $.size,
	empty: $.empty,
	each: $.each,
	on: Re,
	attr: ve,
	attrTween: Ce,
	style: Ye,
	styleTween: Qe,
	text: et,
	textTween: rt,
	remove: Be,
	tween: de,
	delay: Ee,
	duration: ke,
	ease: je,
	easeVarying: Ne,
	end: at,
	[Symbol.iterator]: $[Symbol.iterator]
};
//#endregion
//#region node_modules/d3-ease/src/cubic.js
function st(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region node_modules/d3-transition/src/selection/transition.js
var ct = {
	time: null,
	delay: 0,
	duration: 250,
	ease: st
};
function lt(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function ut(e) {
	var t, n;
	e instanceof X ? (t = e._id, e = e._name) : (t = Q(), (n = ct).time = D(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && z(c, e, t, l, o, n || lt(c, t));
	return new X(r, this._parents, e, t);
}
n.prototype.interrupt = G, n.prototype.transition = ut;
//#endregion
export { d as i, W as n, k as r, Z as t };

//# sourceMappingURL=src-yL3ZdoR1.js.map