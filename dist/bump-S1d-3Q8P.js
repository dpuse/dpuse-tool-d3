var e = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
//#endregion
//#region node_modules/d3-selection/src/namespace.js
function t(t) {
	var n = t += "", r = n.indexOf(":");
	return r >= 0 && (n = t.slice(0, r)) !== "xmlns" && (t = t.slice(r + 1)), e.hasOwnProperty(n) ? {
		space: e[n],
		local: t
	} : t;
}
//#endregion
//#region node_modules/d3-selection/src/creator.js
function n(e) {
	return function() {
		var t = this.ownerDocument, n = this.namespaceURI;
		return n === "http://www.w3.org/1999/xhtml" && t.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? t.createElement(e) : t.createElementNS(n, e);
	};
}
function r(e) {
	return function() {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function i(e) {
	var i = t(e);
	return (i.local ? r : n)(i);
}
//#endregion
//#region node_modules/d3-selection/src/selector.js
function a() {}
function o(e) {
	return e == null ? a : function() {
		return this.querySelector(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/select.js
function s(e) {
	typeof e != "function" && (e = o(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], s = a.length, c = r[i] = Array(s), l, u, d = 0; d < s; ++d) (l = a[d]) && (u = e.call(l, l.__data__, d, a)) && ("__data__" in l && (u.__data__ = l.__data__), c[d] = u);
	return new G(r, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/array.js
function c(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-selection/src/selectorAll.js
function l() {
	return [];
}
function u(e) {
	return e == null ? l : function() {
		return this.querySelectorAll(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectAll.js
function d(e) {
	return function() {
		return c(e.apply(this, arguments));
	};
}
function f(e) {
	e = typeof e == "function" ? d(e) : u(e);
	for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a) for (var o = t[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && (r.push(e.call(c, c.__data__, l, o)), i.push(c));
	return new G(r, i);
}
//#endregion
//#region node_modules/d3-selection/src/matcher.js
function p(e) {
	return function() {
		return this.matches(e);
	};
}
function m(e) {
	return function(t) {
		return t.matches(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectChild.js
var h = Array.prototype.find;
function g(e) {
	return function() {
		return h.call(this.children, e);
	};
}
function _() {
	return this.firstElementChild;
}
function v(e) {
	return this.select(e == null ? _ : g(typeof e == "function" ? e : m(e)));
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectChildren.js
var y = Array.prototype.filter;
function b() {
	return Array.from(this.children);
}
function ee(e) {
	return function() {
		return y.call(this.children, e);
	};
}
function te(e) {
	return this.selectAll(e == null ? b : ee(typeof e == "function" ? e : m(e)));
}
//#endregion
//#region node_modules/d3-selection/src/selection/filter.js
function ne(e) {
	typeof e != "function" && (e = p(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new G(r, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/sparse.js
function x(e) {
	return Array(e.length);
}
//#endregion
//#region node_modules/d3-selection/src/selection/enter.js
function re() {
	return new G(this._enter || this._groups.map(x), this._parents);
}
function S(e, t) {
	this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
S.prototype = {
	constructor: S,
	appendChild: function(e) {
		return this._parent.insertBefore(e, this._next);
	},
	insertBefore: function(e, t) {
		return this._parent.insertBefore(e, t);
	},
	querySelector: function(e) {
		return this._parent.querySelector(e);
	},
	querySelectorAll: function(e) {
		return this._parent.querySelectorAll(e);
	}
};
//#endregion
//#region node_modules/d3-selection/src/constant.js
function ie(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/data.js
function ae(e, t, n, r, i, a) {
	for (var o = 0, s, c = t.length, l = a.length; o < l; ++o) (s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new S(e, a[o]);
	for (; o < c; ++o) (s = t[o]) && (i[o] = s);
}
function oe(e, t, n, r, i, a, o) {
	var s, c, l = /* @__PURE__ */ new Map(), u = t.length, d = a.length, f = Array(u), p;
	for (s = 0; s < u; ++s) (c = t[s]) && (f[s] = p = o.call(c, c.__data__, s, t) + "", l.has(p) ? i[s] = c : l.set(p, c));
	for (s = 0; s < d; ++s) p = o.call(e, a[s], s, a) + "", (c = l.get(p)) ? (r[s] = c, c.__data__ = a[s], l.delete(p)) : n[s] = new S(e, a[s]);
	for (s = 0; s < u; ++s) (c = t[s]) && l.get(f[s]) === c && (i[s] = c);
}
function se(e) {
	return e.__data__;
}
function ce(e, t) {
	if (!arguments.length) return Array.from(this, se);
	var n = t ? oe : ae, r = this._parents, i = this._groups;
	typeof e != "function" && (e = ie(e));
	for (var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0; l < a; ++l) {
		var u = r[l], d = i[l], f = d.length, p = C(e.call(u, u && u.__data__, l, r)), m = p.length, h = s[l] = Array(m), g = o[l] = Array(m);
		n(u, d, h, g, c[l] = Array(f), p, t);
		for (var _ = 0, v = 0, y, b; _ < m; ++_) if (y = h[_]) {
			for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
			y._next = b || null;
		}
	}
	return o = new G(o, r), o._enter = s, o._exit = c, o;
}
function C(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-selection/src/selection/exit.js
function le() {
	return new G(this._exit || this._groups.map(x), this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/join.js
function ue(e, t, n) {
	var r = this.enter(), i = this, a = this.exit();
	return typeof e == "function" ? (r = e(r), r &&= r.selection()) : r = r.append(e + ""), t != null && (i = t(i), i &&= i.selection()), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
//#endregion
//#region node_modules/d3-selection/src/selection/merge.js
function de(e) {
	for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, a = r.length, o = Math.min(i, a), s = Array(i), c = 0; c < o; ++c) for (var l = n[c], u = r[c], d = l.length, f = s[c] = Array(d), p, m = 0; m < d; ++m) (p = l[m] || u[m]) && (f[m] = p);
	for (; c < i; ++c) s[c] = n[c];
	return new G(s, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/order.js
function fe() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n;) for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;) (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/sort.js
function pe(e) {
	e ||= me;
	function t(t, n) {
		return t && n ? e(t.__data__, n.__data__) : !t - !n;
	}
	for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
		for (var o = n[a], s = o.length, c = i[a] = Array(s), l, u = 0; u < s; ++u) (l = o[u]) && (c[u] = l);
		c.sort(t);
	}
	return new G(i, this._parents).order();
}
function me(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-selection/src/selection/call.js
function he() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/nodes.js
function ge() {
	return Array.from(this);
}
//#endregion
//#region node_modules/d3-selection/src/selection/node.js
function _e() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
		var o = r[i];
		if (o) return o;
	}
	return null;
}
//#endregion
//#region node_modules/d3-selection/src/selection/size.js
function ve() {
	let e = 0;
	for (let t of this) ++e;
	return e;
}
//#endregion
//#region node_modules/d3-selection/src/selection/empty.js
function w() {
	return !this.node();
}
//#endregion
//#region node_modules/d3-selection/src/selection/each.js
function T(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n) for (var i = t[n], a = 0, o = i.length, s; a < o; ++a) (s = i[a]) && e.call(s, s.__data__, a, i);
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/attr.js
function E(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function D(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function O(e, t) {
	return function() {
		this.setAttribute(e, t);
	};
}
function k(e, t) {
	return function() {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function A(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function j(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function M(e, n) {
	var r = t(e);
	if (arguments.length < 2) {
		var i = this.node();
		return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
	}
	return this.each((n == null ? r.local ? D : E : typeof n == "function" ? r.local ? j : A : r.local ? k : O)(r, n));
}
//#endregion
//#region node_modules/d3-selection/src/window.js
function N(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
//#endregion
//#region node_modules/d3-selection/src/selection/style.js
function P(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function F(e, t, n) {
	return function() {
		this.style.setProperty(e, t, n);
	};
}
function ye(e, t, n) {
	return function() {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function be(e, t, n) {
	return arguments.length > 1 ? this.each((t == null ? P : typeof t == "function" ? ye : F)(e, t, n ?? "")) : I(this.node(), e);
}
function I(e, t) {
	return e.style.getPropertyValue(t) || N(e).getComputedStyle(e, null).getPropertyValue(t);
}
//#endregion
//#region node_modules/d3-selection/src/selection/property.js
function xe(e) {
	return function() {
		delete this[e];
	};
}
function Se(e, t) {
	return function() {
		this[e] = t;
	};
}
function Ce(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : this[e] = n;
	};
}
function we(e, t) {
	return arguments.length > 1 ? this.each((t == null ? xe : typeof t == "function" ? Ce : Se)(e, t)) : this.node()[e];
}
//#endregion
//#region node_modules/d3-selection/src/selection/classed.js
function L(e) {
	return e.trim().split(/^|\s+/);
}
function R(e) {
	return e.classList || new z(e);
}
function z(e) {
	this._node = e, this._names = L(e.getAttribute("class") || "");
}
z.prototype = {
	add: function(e) {
		this._names.indexOf(e) < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
	},
	remove: function(e) {
		var t = this._names.indexOf(e);
		t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
	},
	contains: function(e) {
		return this._names.indexOf(e) >= 0;
	}
};
function B(e, t) {
	for (var n = R(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function V(e, t) {
	for (var n = R(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function Te(e) {
	return function() {
		B(this, e);
	};
}
function Ee(e) {
	return function() {
		V(this, e);
	};
}
function De(e, t) {
	return function() {
		(t.apply(this, arguments) ? B : V)(this, e);
	};
}
function Oe(e, t) {
	var n = L(e + "");
	if (arguments.length < 2) {
		for (var r = R(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
		return !0;
	}
	return this.each((typeof t == "function" ? De : t ? Te : Ee)(n, t));
}
//#endregion
//#region node_modules/d3-selection/src/selection/text.js
function ke() {
	this.textContent = "";
}
function Ae(e) {
	return function() {
		this.textContent = e;
	};
}
function je(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.textContent = t ?? "";
	};
}
function Me(e) {
	return arguments.length ? this.each(e == null ? ke : (typeof e == "function" ? je : Ae)(e)) : this.node().textContent;
}
//#endregion
//#region node_modules/d3-selection/src/selection/html.js
function Ne() {
	this.innerHTML = "";
}
function Pe(e) {
	return function() {
		this.innerHTML = e;
	};
}
function Fe(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? "";
	};
}
function Ie(e) {
	return arguments.length ? this.each(e == null ? Ne : (typeof e == "function" ? Fe : Pe)(e)) : this.node().innerHTML;
}
//#endregion
//#region node_modules/d3-selection/src/selection/raise.js
function Le() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function Re() {
	return this.each(Le);
}
//#endregion
//#region node_modules/d3-selection/src/selection/lower.js
function ze() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function H() {
	return this.each(ze);
}
//#endregion
//#region node_modules/d3-selection/src/selection/append.js
function Be(e) {
	var t = typeof e == "function" ? e : i(e);
	return this.select(function() {
		return this.appendChild(t.apply(this, arguments));
	});
}
//#endregion
//#region node_modules/d3-selection/src/selection/insert.js
function Ve() {
	return null;
}
function He(e, t) {
	var n = typeof e == "function" ? e : i(e), r = t == null ? Ve : typeof t == "function" ? t : o(t);
	return this.select(function() {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
//#endregion
//#region node_modules/d3-selection/src/selection/remove.js
function Ue() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function We() {
	return this.each(Ue);
}
//#endregion
//#region node_modules/d3-selection/src/selection/clone.js
function Ge() {
	var e = this.cloneNode(!1), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Ke() {
	var e = this.cloneNode(!0), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function qe(e) {
	return this.select(e ? Ke : Ge);
}
//#endregion
//#region node_modules/d3-selection/src/selection/datum.js
function Je(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
//#endregion
//#region node_modules/d3-selection/src/selection/on.js
function Ye(e) {
	return function(t) {
		e.call(this, t, this.__data__);
	};
}
function Xe(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var t = "", n = e.indexOf(".");
		return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
			type: e,
			name: t
		};
	});
}
function Ze(e) {
	return function() {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, i = t.length, a; n < i; ++n) a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
			++r ? t.length = r : delete this.__on;
		}
	};
}
function Qe(e, t, n) {
	return function() {
		var r = this.__on, i, a = Ye(t);
		if (r) {
			for (var o = 0, s = r.length; o < s; ++o) if ((i = r[o]).type === e.type && i.name === e.name) {
				this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = t;
				return;
			}
		}
		this.addEventListener(e.type, a, n), i = {
			type: e.type,
			name: e.name,
			value: t,
			listener: a,
			options: n
		}, r ? r.push(i) : this.__on = [i];
	};
}
function $e(e, t, n) {
	var r = Xe(e + ""), i, a = r.length, o;
	if (arguments.length < 2) {
		var s = this.node().__on;
		if (s) {
			for (var c = 0, l = s.length, u; c < l; ++c) for (i = 0, u = s[c]; i < a; ++i) if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
		}
		return;
	}
	for (s = t ? Qe : Ze, i = 0; i < a; ++i) this.each(s(r[i], t, n));
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/dispatch.js
function U(e, t, n) {
	var r = N(e), i = r.CustomEvent;
	typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function et(e, t) {
	return function() {
		return U(this, e, t);
	};
}
function tt(e, t) {
	return function() {
		return U(this, e, t.apply(this, arguments));
	};
}
function nt(e, t) {
	return this.each((typeof t == "function" ? tt : et)(e, t));
}
//#endregion
//#region node_modules/d3-selection/src/selection/iterator.js
function* rt() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length, o; i < a; ++i) (o = r[i]) && (yield o);
}
//#endregion
//#region node_modules/d3-selection/src/selection/index.js
var W = [null];
function G(e, t) {
	this._groups = e, this._parents = t;
}
function K() {
	return new G([[document.documentElement]], W);
}
function it() {
	return this;
}
G.prototype = K.prototype = {
	constructor: G,
	select: s,
	selectAll: f,
	selectChild: v,
	selectChildren: te,
	filter: ne,
	data: ce,
	enter: re,
	exit: le,
	join: ue,
	merge: de,
	selection: it,
	order: fe,
	sort: pe,
	call: he,
	nodes: ge,
	node: _e,
	size: ve,
	empty: w,
	each: T,
	attr: M,
	style: be,
	property: we,
	classed: Oe,
	text: Me,
	html: Ie,
	raise: Re,
	lower: H,
	append: Be,
	insert: He,
	remove: We,
	clone: qe,
	datum: Je,
	on: $e,
	dispatch: nt,
	[Symbol.iterator]: rt
};
//#endregion
//#region node_modules/d3-selection/src/select.js
function at(e) {
	return typeof e == "string" ? new G([[document.querySelector(e)]], [document.documentElement]) : new G([[e]], W);
}
//#endregion
//#region node_modules/d3-shape/src/constant.js
function ot(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-path/src/path.js
var q = Math.PI, J = 2 * q, Y = 1e-6, st = J - Y;
function X(e) {
	this._ += e[0];
	for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function ct(e) {
	let t = Math.floor(e);
	if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
	if (t > 15) return X;
	let n = 10 ** t;
	return function(e) {
		this._ += e[0];
		for (let t = 1, r = e.length; t < r; ++t) this._ += Math.round(arguments[t] * n) / n + e[t];
	};
}
var Z = class {
	constructor(e) {
		this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = e == null ? X : ct(e);
	}
	moveTo(e, t) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}`;
	}
	closePath() {
		this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
	}
	lineTo(e, t) {
		this._append`L${this._x1 = +e},${this._y1 = +t}`;
	}
	quadraticCurveTo(e, t, n, r) {
		this._append`Q${+e},${+t},${this._x1 = +n},${this._y1 = +r}`;
	}
	bezierCurveTo(e, t, n, r, i, a) {
		this._append`C${+e},${+t},${+n},${+r},${this._x1 = +i},${this._y1 = +a}`;
	}
	arcTo(e, t, n, r, i) {
		if (e = +e, t = +t, n = +n, r = +r, i = +i, i < 0) throw Error(`negative radius: ${i}`);
		let a = this._x1, o = this._y1, s = n - e, c = r - t, l = a - e, u = o - t, d = l * l + u * u;
		if (this._x1 === null) this._append`M${this._x1 = e},${this._y1 = t}`;
		else if (d > Y) if (!(Math.abs(u * s - c * l) > Y) || !i) this._append`L${this._x1 = e},${this._y1 = t}`;
		else {
			let f = n - a, p = r - o, m = s * s + c * c, h = f * f + p * p, g = Math.sqrt(m), _ = Math.sqrt(d), v = i * Math.tan((q - Math.acos((m + d - h) / (2 * g * _))) / 2), y = v / _, b = v / g;
			Math.abs(y - 1) > Y && this._append`L${e + y * l},${t + y * u}`, this._append`A${i},${i},0,0,${+(u * f > l * p)},${this._x1 = e + b * s},${this._y1 = t + b * c}`;
		}
	}
	arc(e, t, n, r, i, a) {
		if (e = +e, t = +t, n = +n, a = !!a, n < 0) throw Error(`negative radius: ${n}`);
		let o = n * Math.cos(r), s = n * Math.sin(r), c = e + o, l = t + s, u = 1 ^ a, d = a ? r - i : i - r;
		this._x1 === null ? this._append`M${c},${l}` : (Math.abs(this._x1 - c) > Y || Math.abs(this._y1 - l) > Y) && this._append`L${c},${l}`, n && (d < 0 && (d = d % J + J), d > st ? this._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${this._x1 = c},${this._y1 = l}` : d > Y && this._append`A${n},${n},0,${+(d >= q)},${u},${this._x1 = e + n * Math.cos(i)},${this._y1 = t + n * Math.sin(i)}`);
	}
	rect(e, t, n, r) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}h${n = +n}v${+r}h${-n}Z`;
	}
	toString() {
		return this._;
	}
};
Z.prototype;
function lt(e = 3) {
	return new Z(+e);
}
//#endregion
//#region node_modules/d3-shape/src/path.js
function ut(e) {
	let t = 3;
	return e.digits = function(n) {
		if (!arguments.length) return t;
		if (n == null) t = null;
		else {
			let e = Math.floor(n);
			if (!(e >= 0)) throw RangeError(`invalid digits: ${n}`);
			t = e;
		}
		return e;
	}, () => new Z(t);
}
//#endregion
//#region node_modules/d3-shape/src/array.js
var dt = Array.prototype.slice;
function ft(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/linear.js
function Q(e) {
	this._context = e;
}
Q.prototype = {
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
function pt(e) {
	return new Q(e);
}
//#endregion
//#region node_modules/d3-shape/src/point.js
function mt(e) {
	return e[0];
}
function ht(e) {
	return e[1];
}
//#endregion
//#region node_modules/d3-shape/src/curve/bump.js
var $ = class {
	constructor(e, t) {
		this._context = e, this._x = t;
	}
	areaStart() {
		this._line = 0;
	}
	areaEnd() {
		this._line = NaN;
	}
	lineStart() {
		this._point = 0;
	}
	lineEnd() {
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	}
	point(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1: this._point = 2;
			default: this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, t, e, t) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + t) / 2, e, this._y0, e, t);
		}
		this._x0 = e, this._y0 = t;
	}
};
function gt(e) {
	return new $(e, !0);
}
function _t(e) {
	return new $(e, !1);
}
//#endregion
export { e as S, u as _, pt as a, i as b, ut as c, at as d, G as f, p as g, I as h, ht as i, lt as l, K as m, _t as n, ft as o, W as p, mt as r, dt as s, gt as t, ot as u, c as v, t as x, o as y };

//# sourceMappingURL=bump-S1d-3Q8P.js.map