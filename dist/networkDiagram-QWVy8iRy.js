import { t as e } from "./select-BIuoFcZG.js";
import { D as t, r as n } from "./src-DnMaAyIP.js";
import { t as r } from "./drag-B46QGUMq.js";
import { t as i } from "./src-B7SGbtRQ.js";
//#region node_modules/d3-force/src/center.js
function a(e, t) {
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
function o(e) {
	let t = +this._x.call(null, e), n = +this._y.call(null, e);
	return s(this.cover(t, n), t, n, e);
}
function s(e, t, n, r) {
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
function c(e) {
	var t, n, r = e.length, i, a, o = Array(r), c = Array(r), l = Infinity, u = Infinity, d = -Infinity, f = -Infinity;
	for (n = 0; n < r; ++n) isNaN(i = +this._x.call(null, t = e[n])) || isNaN(a = +this._y.call(null, t)) || (o[n] = i, c[n] = a, i < l && (l = i), i > d && (d = i), a < u && (u = a), a > f && (f = a));
	if (l > d || u > f) return this;
	for (this.cover(l, u).cover(d, f), n = 0; n < r; ++n) s(this, o[n], c[n], e[n]);
	return this;
}
//#endregion
//#region node_modules/d3-quadtree/src/cover.js
function l(e, t) {
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
function u() {
	var e = [];
	return this.visit(function(t) {
		if (!t.length) do
			e.push(t.data);
		while (t = t.next);
	}), e;
}
//#endregion
//#region node_modules/d3-quadtree/src/extent.js
function d(e) {
	return arguments.length ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
//#endregion
//#region node_modules/d3-quadtree/src/quad.js
function f(e, t, n, r, i) {
	this.node = e, this.x0 = t, this.y0 = n, this.x1 = r, this.y1 = i;
}
//#endregion
//#region node_modules/d3-quadtree/src/find.js
function p(e, t, n) {
	var r, i = this._x0, a = this._y0, o, s, c, l, u = this._x1, d = this._y1, p = [], m = this._root, h, g;
	for (m && p.push(new f(m, i, a, u, d)), n == null ? n = Infinity : (i = e - n, a = t - n, u = e + n, d = t + n, n *= n); h = p.pop();) if (!(!(m = h.node) || (o = h.x0) > u || (s = h.y0) > d || (c = h.x1) < i || (l = h.y1) < a)) if (m.length) {
		var _ = (o + c) / 2, v = (s + l) / 2;
		p.push(new f(m[3], _, v, c, l), new f(m[2], o, v, _, l), new f(m[1], _, s, c, v), new f(m[0], o, s, _, v)), (g = (t >= v) << 1 | e >= _) && (h = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - g], p[p.length - 1 - g] = h);
	} else {
		var y = e - +this._x.call(null, m.data), b = t - +this._y.call(null, m.data), x = y * y + b * b;
		if (x < n) {
			var S = Math.sqrt(n = x);
			i = e - S, a = t - S, u = e + S, d = t + S, r = m.data;
		}
	}
	return r;
}
//#endregion
//#region node_modules/d3-quadtree/src/remove.js
function m(e) {
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
function h(e) {
	for (var t = 0, n = e.length; t < n; ++t) this.remove(e[t]);
	return this;
}
//#endregion
//#region node_modules/d3-quadtree/src/root.js
function g() {
	return this._root;
}
//#endregion
//#region node_modules/d3-quadtree/src/size.js
function _() {
	var e = 0;
	return this.visit(function(t) {
		if (!t.length) do
			++e;
		while (t = t.next);
	}), e;
}
//#endregion
//#region node_modules/d3-quadtree/src/visit.js
function v(e) {
	var t = [], n, r = this._root, i, a, o, s, c;
	for (r && t.push(new f(r, this._x0, this._y0, this._x1, this._y1)); n = t.pop();) if (!e(r = n.node, a = n.x0, o = n.y0, s = n.x1, c = n.y1) && r.length) {
		var l = (a + s) / 2, u = (o + c) / 2;
		(i = r[3]) && t.push(new f(i, l, u, s, c)), (i = r[2]) && t.push(new f(i, a, u, l, c)), (i = r[1]) && t.push(new f(i, l, o, s, u)), (i = r[0]) && t.push(new f(i, a, o, l, u));
	}
	return this;
}
//#endregion
//#region node_modules/d3-quadtree/src/visitAfter.js
function y(e) {
	var t = [], n = [], r;
	for (this._root && t.push(new f(this._root, this._x0, this._y0, this._x1, this._y1)); r = t.pop();) {
		var i = r.node;
		if (i.length) {
			var a, o = r.x0, s = r.y0, c = r.x1, l = r.y1, u = (o + c) / 2, d = (s + l) / 2;
			(a = i[0]) && t.push(new f(a, o, s, u, d)), (a = i[1]) && t.push(new f(a, u, s, c, d)), (a = i[2]) && t.push(new f(a, o, d, u, l)), (a = i[3]) && t.push(new f(a, u, d, c, l));
		}
		n.push(r);
	}
	for (; r = n.pop();) e(r.node, r.x0, r.y0, r.x1, r.y1);
	return this;
}
//#endregion
//#region node_modules/d3-quadtree/src/x.js
function b(e) {
	return e[0];
}
function x(e) {
	return arguments.length ? (this._x = e, this) : this._x;
}
//#endregion
//#region node_modules/d3-quadtree/src/y.js
function S(e) {
	return e[1];
}
function C(e) {
	return arguments.length ? (this._y = e, this) : this._y;
}
//#endregion
//#region node_modules/d3-quadtree/src/quadtree.js
function w(e, t, n) {
	var r = new T(t ?? b, n ?? S, NaN, NaN, NaN, NaN);
	return e == null ? r : r.addAll(e);
}
function T(e, t, n, r, i, a) {
	this._x = e, this._y = t, this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = a, this._root = void 0;
}
function E(e) {
	for (var t = { data: e.data }, n = t; e = e.next;) n = n.next = { data: e.data };
	return t;
}
var D = w.prototype = T.prototype;
D.copy = function() {
	var e = new T(this._x, this._y, this._x0, this._y0, this._x1, this._y1), t = this._root, n, r;
	if (!t) return e;
	if (!t.length) return e._root = E(t), e;
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
	}) : t.target[i] = E(r));
	return e;
}, D.add = o, D.addAll = c, D.cover = l, D.data = u, D.extent = d, D.find = p, D.remove = m, D.removeAll = h, D.root = g, D.size = _, D.visit = v, D.visitAfter = y, D.x = x, D.y = C;
//#endregion
//#region node_modules/d3-force/src/constant.js
function O(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-force/src/jiggle.js
function k(e) {
	return (e() - .5) * 1e-6;
}
//#endregion
//#region node_modules/d3-force/src/link.js
function A(e) {
	return e.index;
}
function j(e, t) {
	var n = e.get(t);
	if (!n) throw Error("node not found: " + t);
	return n;
}
function M(e) {
	var t = A, n = d, r, i = O(30), a, o, s, c, l, u = 1;
	e ??= [];
	function d(e) {
		return 1 / Math.min(s[e.source.index], s[e.target.index]);
	}
	function f(t) {
		for (var n = 0, i = e.length; n < u; ++n) for (var o = 0, s, d, f, p, m, h, g; o < i; ++o) s = e[o], d = s.source, f = s.target, p = f.x + f.vx - d.x - d.vx || k(l), m = f.y + f.vy - d.y - d.vy || k(l), h = Math.sqrt(p * p + m * m), h = (h - a[o]) / h * t * r[o], p *= h, m *= h, f.vx -= p * (g = c[o]), f.vy -= m * g, d.vx += p * (g = 1 - g), d.vy += m * g;
	}
	function p() {
		if (o) {
			var n, i = o.length, l = e.length, u = new Map(o.map((e, n) => [t(e, n, o), e])), d;
			for (n = 0, s = Array(i); n < l; ++n) d = e[n], d.index = n, typeof d.source != "object" && (d.source = j(u, d.source)), typeof d.target != "object" && (d.target = j(u, d.target)), s[d.source.index] = (s[d.source.index] || 0) + 1, s[d.target.index] = (s[d.target.index] || 0) + 1;
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
		return arguments.length ? (n = typeof e == "function" ? e : O(+e), m(), f) : n;
	}, f.distance = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : O(+e), h(), f) : i;
	}, f;
}
//#endregion
//#region node_modules/d3-force/src/lcg.js
var N = 1664525, P = 1013904223, F = 4294967296;
function I() {
	let e = 1;
	return () => (e = (N * e + P) % F) / F;
}
//#endregion
//#region node_modules/d3-force/src/simulation.js
function L(e) {
	return e.x;
}
function R(e) {
	return e.y;
}
var z = 10, B = Math.PI * (3 - Math.sqrt(5));
function V(e) {
	var r, i = 1, a = .001, o = 1 - a ** (1 / 300), s = 0, c = .6, l = /* @__PURE__ */ new Map(), u = n(p), d = t("tick", "end"), f = I();
	e ??= [];
	function p() {
		m(), d.call("tick", r), i < a && (u.stop(), d.call("end", r));
	}
	function m(t) {
		var n, a = e.length, u;
		t === void 0 && (t = 1);
		for (var d = 0; d < t; ++d) for (i += (s - i) * o, l.forEach(function(e) {
			e(i);
		}), n = 0; n < a; ++n) u = e[n], u.fx == null ? u.x += u.vx *= c : (u.x = u.fx, u.vx = 0), u.fy == null ? u.y += u.vy *= c : (u.y = u.fy, u.vy = 0);
		return r;
	}
	function h() {
		for (var t = 0, n = e.length, r; t < n; ++t) {
			if (r = e[t], r.index = t, r.fx != null && (r.x = r.fx), r.fy != null && (r.y = r.fy), isNaN(r.x) || isNaN(r.y)) {
				var i = z * Math.sqrt(.5 + t), a = t * B;
				r.x = i * Math.cos(a), r.y = i * Math.sin(a);
			}
			(isNaN(r.vx) || isNaN(r.vy)) && (r.vx = r.vy = 0);
		}
	}
	function g(t) {
		return t.initialize && t.initialize(e, f), t;
	}
	return h(), r = {
		tick: m,
		restart: function() {
			return u.restart(p), r;
		},
		stop: function() {
			return u.stop(), r;
		},
		nodes: function(t) {
			return arguments.length ? (e = t, h(), l.forEach(g), r) : e;
		},
		alpha: function(e) {
			return arguments.length ? (i = +e, r) : i;
		},
		alphaMin: function(e) {
			return arguments.length ? (a = +e, r) : a;
		},
		alphaDecay: function(e) {
			return arguments.length ? (o = +e, r) : +o;
		},
		alphaTarget: function(e) {
			return arguments.length ? (s = +e, r) : s;
		},
		velocityDecay: function(e) {
			return arguments.length ? (c = 1 - e, r) : 1 - c;
		},
		randomSource: function(e) {
			return arguments.length ? (f = e, l.forEach(g), r) : f;
		},
		force: function(e, t) {
			return arguments.length > 1 ? (t == null ? l.delete(e) : l.set(e, g(t)), r) : l.get(e);
		},
		find: function(t, n, r) {
			var i = 0, a = e.length, o, s, c, l, u;
			for (r == null ? r = Infinity : r *= r, i = 0; i < a; ++i) l = e[i], o = t - l.x, s = n - l.y, c = o * o + s * s, c < r && (u = l, r = c);
			return u;
		},
		on: function(e, t) {
			return arguments.length > 1 ? (d.on(e, t), r) : d.on(e);
		}
	};
}
//#endregion
//#region node_modules/d3-force/src/manyBody.js
function H() {
	var e, t, n, r, i = O(-30), a, o = 1, s = Infinity, c = .81;
	function l(n) {
		var i, a = e.length, o = w(e, L, R).visitAfter(d);
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
		if (p * p / c < m) return m < s && (d === 0 && (d = k(n), m += d * d), f === 0 && (f = k(n), m += f * f), m < o && (m = Math.sqrt(o * m)), t.vx += d * e.value * r / m, t.vy += f * e.value * r / m), !0;
		if (!(e.length || m >= s)) {
			(e.data !== t || e.next) && (d === 0 && (d = k(n), m += d * d), f === 0 && (f = k(n), m += f * f), m < o && (m = Math.sqrt(o * m)));
			do
				e.data !== t && (p = a[e.data.index] * r / m, t.vx += d * p, t.vy += f * p);
			while (e = e.next);
		}
	}
	return l.initialize = function(t, r) {
		e = t, n = r, u();
	}, l.strength = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : O(+e), u(), l) : i;
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
var U = -300, W = 100, G = 640, K = 480, q = 180, J = 20, Y = 22, X = {
	linkStroke: "#9ca3af",
	nodeFill: "#2563eb",
	nodeFillHovered: "#3b82f6",
	nodeFillSelected: "#f59e0b",
	nodeStroke: "#1e40af",
	nodeStrokeHovered: "#1d4ed8",
	nodeStrokeSelected: "#b45309",
	nodeText: "#ffffff"
};
function Z(t, n, o = {}) {
	let s = n.clientWidth || G, c = n.clientHeight || K, l = t.nodes.map((e) => ({ ...e })), u = t.links.map((e) => ({ ...e })), d = Math.min(s, c) * .22;
	for (let [e, t] of l.entries()) {
		let n = e / l.length * Math.PI * 2;
		t.x = s / 2 + Math.cos(n) * d, t.y = c / 2 + Math.sin(n) * d;
	}
	let f = V(l).force("link", M(u).id((e) => e.id).distance(o.linkDistance ?? W)).force("charge", H().strength(o.chargeStrength ?? U)).force("center", a(s / 2, c / 2)), p = e(n).append("svg").attr("width", s).attr("height", c).attr("viewBox", `0 0 ${String(s)} ${String(c)}`).style("touch-action", "none"), m = p.append("g"), h = m.selectAll("line").data(u).join("line").attr("stroke", X.linkStroke).attr("stroke-width", 2), g = m.selectAll("g").data(l).join("g").style("cursor", "pointer");
	g.append("circle").attr("r", J).attr("fill", X.nodeFill).attr("stroke", X.nodeStroke).attr("stroke-width", 2), g.append("text").text((e) => e.id).attr("text-anchor", "middle").attr("dy", 4).attr("fill", X.nodeText);
	let _ = null, v = null, y = () => {
		g.selectAll("circle").attr("fill", (e) => e.id === _ ? X.nodeFillSelected : e.id === v ? X.nodeFillHovered : X.nodeFill).attr("stroke", (e) => e.id === _ ? X.nodeStrokeSelected : e.id === v ? X.nodeStrokeHovered : X.nodeStroke).attr("stroke-width", (e) => e.id === _ ? 3 : 2).attr("r", (e) => e.id === _ || e.id === v ? Y : J);
	};
	g.on("mouseenter", (e, t) => {
		v = t.id, y();
	}).on("mouseleave", (e, t) => {
		v === t.id && (v = null), y();
	}).on("click", (e, t) => {
		e.stopPropagation(), _ = _ === t.id ? null : t.id, y();
	}), p.on("click", () => {
		_ = null, y();
	});
	let b = i().scaleExtent([.5, 4]).on("zoom", (e) => {
		m.attr("transform", e.transform.toString());
	});
	p.call(b).on("dblclick.zoom", null);
	let x = (e, t) => typeof e == "object" ? e[t] ?? 0 : 0, S = () => {
		h.attr("x1", (e) => x(e.source, "x")).attr("y1", (e) => x(e.source, "y")).attr("x2", (e) => x(e.target, "x")).attr("y2", (e) => x(e.target, "y")), g.attr("transform", (e) => `translate(${String(e.x ?? 0)},${String(e.y ?? 0)})`);
	};
	f.stop(), g.call(r().on("start", (e, t) => {
		e.sourceEvent?.stopPropagation(), t.fx = t.x, t.fy = t.y;
	}).on("drag", (e, t) => {
		t.x = e.x, t.y = e.y, t.fx = e.x, t.fy = e.y, S();
	}).on("end", (e, t) => {
		t.fx = null, t.fy = null;
	})), S();
	let C = p.node();
	if (C == null) throw Error("Failed to create network diagram SVG element.");
	return {
		destroy: () => {
			f.stop(), p.remove();
		},
		resize: () => {
			let e = n.clientWidth || G, t = n.clientHeight || K;
			p.attr("width", e).attr("height", t).attr("viewBox", `0 0 ${String(e)} ${String(t)}`), f.force("center", a(e / 2, t / 2));
		},
		svg: C,
		triggerAutoLayout: () => {
			f.alpha(1);
			for (let e = 0; e < q; e += 1) f.tick();
			f.stop(), S();
		}
	};
}
//#endregion
export { Z as renderNetworkDiagram };

//# sourceMappingURL=networkDiagram-QWVy8iRy.js.map