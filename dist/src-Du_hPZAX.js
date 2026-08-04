import { a as e, d as t, i as n, l as r, o as i, s as a, t as o } from "./select-BIuoFcZG.js";
import { d as s, i as c, n as l, t as u } from "./string-CnCj7THX.js";
//#region node_modules/d3-selection/src/sourceEvent.js
function d(e) {
	let t;
	for (; t = e.sourceEvent;) e = t;
	return e;
}
//#endregion
//#region node_modules/d3-selection/src/pointer.js
function f(e, t) {
	if (e = d(e), t === void 0 && (t = e.currentTarget), t) {
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
var p = { value: () => {} };
function m() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new h(n);
}
function h(e) {
	this._ = e;
}
function g(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
h.prototype = m.prototype = {
	constructor: h,
	on: function(e, t) {
		var n = this._, r = g(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = ee(n[i], e.name))) return i;
			return;
		}
		if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
		for (; ++a < o;) if (i = (e = r[a]).type) n[i] = _(n[i], e.name, t);
		else if (t == null) for (i in n) n[i] = _(n[i], e.name, null);
		return this;
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new h(e);
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
function ee(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function _(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = p, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
//#endregion
//#region node_modules/d3-drag/src/noevent.js
var te = { passive: !1 }, v = {
	capture: !0,
	passive: !1
};
function ne(e) {
	e.stopImmediatePropagation();
}
function y(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region node_modules/d3-drag/src/nodrag.js
function re(e) {
	var t = e.document.documentElement, n = o(e).on("dragstart.drag", y, v);
	"onselectstart" in t ? n.on("selectstart.drag", y, v) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function ie(e, t) {
	var n = e.document.documentElement, r = o(e).on("dragstart.drag", null);
	t && (r.on("click.drag", y, v), setTimeout(function() {
		r.on("click.drag", null);
	}, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/decompose.js
var b = 180 / Math.PI, x = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function S(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * b,
		skewX: Math.atan(c) * b,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/parse.js
var C;
function ae(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? x : S(t.a, t.b, t.c, t.d, t.e, t.f);
}
function oe(e) {
	return e == null || (C ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), C.setAttribute("transform", e), !(e = C.transform.baseVal.consolidate())) ? x : (e = e.matrix, S(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/index.js
function w(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: l(e, i)
			}, {
				i: c - 2,
				x: l(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: l(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: l(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: l(e, n)
			}, {
				i: s - 2,
				x: l(t, r)
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
var se = w(ae, "px, ", "px)", "deg)"), ce = w(oe, ", ", ")", ")"), T = 0, E = 0, D = 0, O = 1e3, k, A, j = 0, M = 0, N = 0, P = typeof performance == "object" && performance.now ? performance : Date, F = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function I() {
	return M ||= (F(le), P.now() + N);
}
function le() {
	M = 0;
}
function L() {
	this._call = this._time = this._next = null;
}
L.prototype = R.prototype = {
	constructor: L,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? I() : +n) + (t == null ? 0 : +t), !this._next && A !== this && (A ? A._next = this : k = this, A = this), this._call = e, this._time = n, B();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, B());
	}
};
function R(e, t, n) {
	var r = new L();
	return r.restart(e, t, n), r;
}
function ue() {
	I(), ++T;
	for (var e = k, t; e;) (t = M - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--T;
}
function z() {
	M = (j = P.now()) + N, T = E = 0;
	try {
		ue();
	} finally {
		T = 0, fe(), M = 0;
	}
}
function de() {
	var e = P.now(), t = e - j;
	t > O && (N -= t, j = e);
}
function fe() {
	for (var e, t = k, n, r = Infinity; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : k = n);
	A = e, B(r);
}
function B(e) {
	T || (E &&= clearTimeout(E), e - M > 24 ? (e < Infinity && (E = setTimeout(z, e - P.now() - N)), D &&= clearInterval(D)) : (D ||= (j = P.now(), setInterval(de, O)), T = 1, F(z)));
}
//#endregion
//#region node_modules/d3-timer/src/timeout.js
function V(e, t, n) {
	var r = new L();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
//#endregion
//#region node_modules/d3-transition/src/transition/schedule.js
var pe = m("start", "end", "cancel", "interrupt"), me = [];
function H(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	he(e, n, {
		name: t,
		index: r,
		group: i,
		on: pe,
		tween: me,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: 0
	});
}
function U(e, t) {
	var n = G(e, t);
	if (n.state > 0) throw Error("too late; already scheduled");
	return n;
}
function W(e, t) {
	var n = G(e, t);
	if (n.state > 3) throw Error("too late; already running");
	return n;
}
function G(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function he(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = R(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay);
	}
	function o(a) {
		var l, u, d, f;
		if (n.state !== 1) return c();
		for (l in r) if (f = r[l], f.name === n.name) {
			if (f.state === 3) return V(o);
			f.state === 4 ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = 6, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete r[l]);
		}
		if (V(function() {
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
function K(e, t) {
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
function ge(e) {
	return this.each(function() {
		K(this, e);
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/tween.js
function _e(e, t) {
	var n, r;
	return function() {
		var i = W(this, e), a = i.tween;
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
function ve(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = W(this, e), o = a.tween;
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
function ye(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = G(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? _e : ve)(n, e, t));
}
function q(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = W(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return G(e, r).value[t];
	};
}
//#endregion
//#region node_modules/d3-transition/src/transition/interpolate.js
function J(e, t) {
	var n;
	return (typeof t == "number" ? l : t instanceof s ? c : (n = s(t)) ? (t = n, c) : u)(e, t);
}
//#endregion
//#region node_modules/d3-transition/src/transition/attr.js
function be(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function xe(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function Se(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Ce(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function we(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Te(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Ee(e, n) {
	var r = t(e), i = r === "transform" ? ce : J;
	return this.attrTween(e, typeof n == "function" ? (r.local ? Te : we)(r, i, q(this, "attr." + e, n)) : n == null ? (r.local ? xe : be)(r) : (r.local ? Ce : Se)(r, i, n));
}
//#endregion
//#region node_modules/d3-transition/src/transition/attrTween.js
function De(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function Oe(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function ke(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Oe(e, i)), n;
	}
	return i._value = t, i;
}
function Ae(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && De(e, i)), n;
	}
	return i._value = t, i;
}
function je(e, n) {
	var r = "attr." + e;
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (n == null) return this.tween(r, null);
	if (typeof n != "function") throw Error();
	var i = t(e);
	return this.tween(r, (i.local ? ke : Ae)(i, n));
}
//#endregion
//#region node_modules/d3-transition/src/transition/delay.js
function Me(e, t) {
	return function() {
		U(this, e).delay = +t.apply(this, arguments);
	};
}
function Ne(e, t) {
	return t = +t, function() {
		U(this, e).delay = t;
	};
}
function Pe(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? Me : Ne)(t, e)) : G(this.node(), t).delay;
}
//#endregion
//#region node_modules/d3-transition/src/transition/duration.js
function Fe(e, t) {
	return function() {
		W(this, e).duration = +t.apply(this, arguments);
	};
}
function Ie(e, t) {
	return t = +t, function() {
		W(this, e).duration = t;
	};
}
function Le(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? Fe : Ie)(t, e)) : G(this.node(), t).duration;
}
//#endregion
//#region node_modules/d3-transition/src/transition/ease.js
function Re(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		W(this, e).ease = t;
	};
}
function ze(e) {
	var t = this._id;
	return arguments.length ? this.each(Re(t, e)) : G(this.node(), t).ease;
}
//#endregion
//#region node_modules/d3-transition/src/transition/easeVarying.js
function Be(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		W(this, e).ease = n;
	};
}
function Ve(e) {
	if (typeof e != "function") throw Error();
	return this.each(Be(this._id, e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/filter.js
function He(e) {
	typeof e != "function" && (e = i(e));
	for (var t = this._groups, n = t.length, r = Array(n), a = 0; a < n; ++a) for (var o = t[a], s = o.length, c = r[a] = [], l, u = 0; u < s; ++u) (l = o[u]) && e.call(l, l.__data__, u, o) && c.push(l);
	return new X(r, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/merge.js
function Ue(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new X(o, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/on.js
function We(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function Ge(e, t, n) {
	var r, i, a = We(t) ? U : W;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function Ke(e, t) {
	var n = this._id;
	return arguments.length < 2 ? G(this.node(), n).on.on(e) : this.each(Ge(n, e, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/remove.js
function qe(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function Je() {
	return this.on("end.remove", qe(this._id));
}
//#endregion
//#region node_modules/d3-transition/src/transition/select.js
function Ye(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = r(e));
	for (var i = this._groups, a = i.length, o = Array(a), s = 0; s < a; ++s) for (var c = i[s], l = c.length, u = o[s] = Array(l), d, f, p = 0; p < l; ++p) (d = c[p]) && (f = e.call(d, d.__data__, p, c)) && ("__data__" in d && (f.__data__ = d.__data__), u[p] = f, H(u[p], t, n, p, u, G(d, n)));
	return new X(o, this._parents, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selectAll.js
function Xe(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = a(e));
	for (var r = this._groups, i = r.length, o = [], s = [], c = 0; c < i; ++c) for (var l = r[c], u = l.length, d, f = 0; f < u; ++f) if (d = l[f]) {
		for (var p = e.call(d, d.__data__, f, l), m, h = G(d, n), g = 0, ee = p.length; g < ee; ++g) (m = p[g]) && H(m, t, n, g, p, h);
		o.push(p), s.push(d);
	}
	return new X(o, s, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selection.js
var Ze = n.prototype.constructor;
function Qe() {
	return new Ze(this._groups, this._parents);
}
//#endregion
//#region node_modules/d3-transition/src/transition/style.js
function $e(t, n) {
	var r, i, a;
	return function() {
		var o = e(this, t), s = (this.style.removeProperty(t), e(this, t));
		return o === s ? null : o === r && s === i ? a : a = n(r = o, i = s);
	};
}
function Y(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function et(t, n, r) {
	var i, a = r + "", o;
	return function() {
		var s = e(this, t);
		return s === a ? null : s === i ? o : o = n(i = s, r);
	};
}
function tt(t, n, r) {
	var i, a, o;
	return function() {
		var s = e(this, t), c = r(this), l = c + "";
		return c ?? (l = c = (this.style.removeProperty(t), e(this, t))), s === l ? null : s === i && l === a ? o : (a = l, o = n(i = s, c));
	};
}
function nt(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = W(this, e), l = c.on, u = c.value[a] == null ? s ||= Y(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function rt(e, t, n) {
	var r = (e += "") == "transform" ? se : J;
	return t == null ? this.styleTween(e, $e(e, r)).on("end.style." + e, Y(e)) : typeof t == "function" ? this.styleTween(e, tt(e, r, q(this, "style." + e, t))).each(nt(this._id, e)) : this.styleTween(e, et(e, r, t), n).on("end.style." + e, null);
}
//#endregion
//#region node_modules/d3-transition/src/transition/styleTween.js
function it(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function at(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && it(e, a, n)), r;
	}
	return a._value = t, a;
}
function ot(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, at(e, t, n ?? ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/text.js
function st(e) {
	return function() {
		this.textContent = e;
	};
}
function ct(e) {
	return function() {
		var t = e(this);
		this.textContent = t ?? "";
	};
}
function lt(e) {
	return this.tween("text", typeof e == "function" ? ct(q(this, "text", e)) : st(e == null ? "" : e + ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/textTween.js
function ut(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function dt(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && ut(r)), t;
	}
	return r._value = e, r;
}
function ft(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, dt(e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/transition.js
function pt() {
	for (var e = this._name, t = this._id, n = Q(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = G(c, t);
		H(c, e, n, l, o, {
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
function mt() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = W(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/index.js
var ht = 0;
function X(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Z(e) {
	return n().transition(e);
}
function Q() {
	return ++ht;
}
var $ = n.prototype;
X.prototype = Z.prototype = {
	constructor: X,
	select: Ye,
	selectAll: Xe,
	selectChild: $.selectChild,
	selectChildren: $.selectChildren,
	filter: He,
	merge: Ue,
	selection: Qe,
	transition: pt,
	call: $.call,
	nodes: $.nodes,
	node: $.node,
	size: $.size,
	empty: $.empty,
	each: $.each,
	on: Ke,
	attr: Ee,
	attrTween: je,
	style: rt,
	styleTween: ot,
	text: lt,
	textTween: ft,
	remove: Je,
	tween: ye,
	delay: Pe,
	duration: Le,
	ease: ze,
	easeVarying: Ve,
	end: mt,
	[Symbol.iterator]: $[Symbol.iterator]
};
//#endregion
//#region node_modules/d3-ease/src/cubic.js
function gt(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region node_modules/d3-transition/src/selection/transition.js
var _t = {
	time: null,
	delay: 0,
	duration: 250,
	ease: gt
};
function vt(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function yt(e) {
	var t, n;
	e instanceof X ? (t = e._id, e = e._name) : (t = Q(), (n = _t).time = I(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && H(c, e, t, l, o, n || vt(c, t));
	return new X(r, this._parents, e, t);
}
n.prototype.interrupt = ge, n.prototype.transition = yt;
//#endregion
export { ie as a, v as c, f as d, re as i, ne as l, K as n, y as o, R as r, te as s, Z as t, m as u };

//# sourceMappingURL=src-Du_hPZAX.js.map