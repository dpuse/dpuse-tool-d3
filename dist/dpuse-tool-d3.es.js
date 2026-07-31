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
	return new L(r, this._parents);
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
	return new L(r, i);
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
function x(e) {
	return function() {
		return y.call(this.children, e);
	};
}
function S(e) {
	return this.selectAll(e == null ? b : x(typeof e == "function" ? e : m(e)));
}
//#endregion
//#region node_modules/d3-selection/src/selection/filter.js
function C(e) {
	typeof e != "function" && (e = p(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new L(r, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/sparse.js
function w(e) {
	return Array(e.length);
}
//#endregion
//#region node_modules/d3-selection/src/selection/enter.js
function T() {
	return new L(this._enter || this._groups.map(w), this._parents);
}
function E(e, t) {
	this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
E.prototype = {
	constructor: E,
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
function D(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/data.js
function O(e, t, n, r, i, a) {
	for (var o = 0, s, c = t.length, l = a.length; o < l; ++o) (s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new E(e, a[o]);
	for (; o < c; ++o) (s = t[o]) && (i[o] = s);
}
function ee(e, t, n, r, i, a, o) {
	var s, c, l = /* @__PURE__ */ new Map(), u = t.length, d = a.length, f = Array(u), p;
	for (s = 0; s < u; ++s) (c = t[s]) && (f[s] = p = o.call(c, c.__data__, s, t) + "", l.has(p) ? i[s] = c : l.set(p, c));
	for (s = 0; s < d; ++s) p = o.call(e, a[s], s, a) + "", (c = l.get(p)) ? (r[s] = c, c.__data__ = a[s], l.delete(p)) : n[s] = new E(e, a[s]);
	for (s = 0; s < u; ++s) (c = t[s]) && l.get(f[s]) === c && (i[s] = c);
}
function te(e) {
	return e.__data__;
}
function ne(e, t) {
	if (!arguments.length) return Array.from(this, te);
	var n = t ? ee : O, r = this._parents, i = this._groups;
	typeof e != "function" && (e = D(e));
	for (var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0; l < a; ++l) {
		var u = r[l], d = i[l], f = d.length, p = re(e.call(u, u && u.__data__, l, r)), m = p.length, h = s[l] = Array(m), g = o[l] = Array(m);
		n(u, d, h, g, c[l] = Array(f), p, t);
		for (var _ = 0, v = 0, y, b; _ < m; ++_) if (y = h[_]) {
			for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
			y._next = b || null;
		}
	}
	return o = new L(o, r), o._enter = s, o._exit = c, o;
}
function re(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-selection/src/selection/exit.js
function ie() {
	return new L(this._exit || this._groups.map(w), this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/join.js
function ae(e, t, n) {
	var r = this.enter(), i = this, a = this.exit();
	return typeof e == "function" ? (r = e(r), r &&= r.selection()) : r = r.append(e + ""), t != null && (i = t(i), i &&= i.selection()), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
//#endregion
//#region node_modules/d3-selection/src/selection/merge.js
function oe(e) {
	for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, a = r.length, o = Math.min(i, a), s = Array(i), c = 0; c < o; ++c) for (var l = n[c], u = r[c], d = l.length, f = s[c] = Array(d), p, m = 0; m < d; ++m) (p = l[m] || u[m]) && (f[m] = p);
	for (; c < i; ++c) s[c] = n[c];
	return new L(s, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/order.js
function se() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n;) for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;) (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/sort.js
function ce(e) {
	e ||= le;
	function t(t, n) {
		return t && n ? e(t.__data__, n.__data__) : !t - !n;
	}
	for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
		for (var o = n[a], s = o.length, c = i[a] = Array(s), l, u = 0; u < s; ++u) (l = o[u]) && (c[u] = l);
		c.sort(t);
	}
	return new L(i, this._parents).order();
}
function le(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-selection/src/selection/call.js
function ue() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/nodes.js
function de() {
	return Array.from(this);
}
//#endregion
//#region node_modules/d3-selection/src/selection/node.js
function fe() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
		var o = r[i];
		if (o) return o;
	}
	return null;
}
//#endregion
//#region node_modules/d3-selection/src/selection/size.js
function pe() {
	let e = 0;
	for (let t of this) ++e;
	return e;
}
//#endregion
//#region node_modules/d3-selection/src/selection/empty.js
function me() {
	return !this.node();
}
//#endregion
//#region node_modules/d3-selection/src/selection/each.js
function he(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n) for (var i = t[n], a = 0, o = i.length, s; a < o; ++a) (s = i[a]) && e.call(s, s.__data__, a, i);
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/attr.js
function ge(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function _e(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function ve(e, t) {
	return function() {
		this.setAttribute(e, t);
	};
}
function ye(e, t) {
	return function() {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function be(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function xe(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function Se(e, n) {
	var r = t(e);
	if (arguments.length < 2) {
		var i = this.node();
		return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
	}
	return this.each((n == null ? r.local ? _e : ge : typeof n == "function" ? r.local ? xe : be : r.local ? ye : ve)(r, n));
}
//#endregion
//#region node_modules/d3-selection/src/window.js
function k(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
//#endregion
//#region node_modules/d3-selection/src/selection/style.js
function Ce(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function we(e, t, n) {
	return function() {
		this.style.setProperty(e, t, n);
	};
}
function Te(e, t, n) {
	return function() {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function Ee(e, t, n) {
	return arguments.length > 1 ? this.each((t == null ? Ce : typeof t == "function" ? Te : we)(e, t, n ?? "")) : De(this.node(), e);
}
function De(e, t) {
	return e.style.getPropertyValue(t) || k(e).getComputedStyle(e, null).getPropertyValue(t);
}
//#endregion
//#region node_modules/d3-selection/src/selection/property.js
function Oe(e) {
	return function() {
		delete this[e];
	};
}
function ke(e, t) {
	return function() {
		this[e] = t;
	};
}
function Ae(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : this[e] = n;
	};
}
function je(e, t) {
	return arguments.length > 1 ? this.each((t == null ? Oe : typeof t == "function" ? Ae : ke)(e, t)) : this.node()[e];
}
//#endregion
//#region node_modules/d3-selection/src/selection/classed.js
function A(e) {
	return e.trim().split(/^|\s+/);
}
function j(e) {
	return e.classList || new M(e);
}
function M(e) {
	this._node = e, this._names = A(e.getAttribute("class") || "");
}
M.prototype = {
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
function N(e, t) {
	for (var n = j(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function P(e, t) {
	for (var n = j(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function Me(e) {
	return function() {
		N(this, e);
	};
}
function Ne(e) {
	return function() {
		P(this, e);
	};
}
function Pe(e, t) {
	return function() {
		(t.apply(this, arguments) ? N : P)(this, e);
	};
}
function Fe(e, t) {
	var n = A(e + "");
	if (arguments.length < 2) {
		for (var r = j(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
		return !0;
	}
	return this.each((typeof t == "function" ? Pe : t ? Me : Ne)(n, t));
}
//#endregion
//#region node_modules/d3-selection/src/selection/text.js
function Ie() {
	this.textContent = "";
}
function Le(e) {
	return function() {
		this.textContent = e;
	};
}
function Re(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.textContent = t ?? "";
	};
}
function ze(e) {
	return arguments.length ? this.each(e == null ? Ie : (typeof e == "function" ? Re : Le)(e)) : this.node().textContent;
}
//#endregion
//#region node_modules/d3-selection/src/selection/html.js
function Be() {
	this.innerHTML = "";
}
function Ve(e) {
	return function() {
		this.innerHTML = e;
	};
}
function He(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? "";
	};
}
function Ue(e) {
	return arguments.length ? this.each(e == null ? Be : (typeof e == "function" ? He : Ve)(e)) : this.node().innerHTML;
}
//#endregion
//#region node_modules/d3-selection/src/selection/raise.js
function We() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function Ge() {
	return this.each(We);
}
//#endregion
//#region node_modules/d3-selection/src/selection/lower.js
function Ke() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function qe() {
	return this.each(Ke);
}
//#endregion
//#region node_modules/d3-selection/src/selection/append.js
function Je(e) {
	var t = typeof e == "function" ? e : i(e);
	return this.select(function() {
		return this.appendChild(t.apply(this, arguments));
	});
}
//#endregion
//#region node_modules/d3-selection/src/selection/insert.js
function Ye() {
	return null;
}
function Xe(e, t) {
	var n = typeof e == "function" ? e : i(e), r = t == null ? Ye : typeof t == "function" ? t : o(t);
	return this.select(function() {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
//#endregion
//#region node_modules/d3-selection/src/selection/remove.js
function Ze() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function Qe() {
	return this.each(Ze);
}
//#endregion
//#region node_modules/d3-selection/src/selection/clone.js
function $e() {
	var e = this.cloneNode(!1), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function et() {
	var e = this.cloneNode(!0), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function tt(e) {
	return this.select(e ? et : $e);
}
//#endregion
//#region node_modules/d3-selection/src/selection/datum.js
function nt(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
//#endregion
//#region node_modules/d3-selection/src/selection/on.js
function rt(e) {
	return function(t) {
		e.call(this, t, this.__data__);
	};
}
function it(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var t = "", n = e.indexOf(".");
		return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
			type: e,
			name: t
		};
	});
}
function at(e) {
	return function() {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, i = t.length, a; n < i; ++n) a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
			++r ? t.length = r : delete this.__on;
		}
	};
}
function ot(e, t, n) {
	return function() {
		var r = this.__on, i, a = rt(t);
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
function st(e, t, n) {
	var r = it(e + ""), i, a = r.length, o;
	if (arguments.length < 2) {
		var s = this.node().__on;
		if (s) {
			for (var c = 0, l = s.length, u; c < l; ++c) for (i = 0, u = s[c]; i < a; ++i) if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
		}
		return;
	}
	for (s = t ? ot : at, i = 0; i < a; ++i) this.each(s(r[i], t, n));
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/dispatch.js
function F(e, t, n) {
	var r = k(e), i = r.CustomEvent;
	typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function ct(e, t) {
	return function() {
		return F(this, e, t);
	};
}
function lt(e, t) {
	return function() {
		return F(this, e, t.apply(this, arguments));
	};
}
function ut(e, t) {
	return this.each((typeof t == "function" ? lt : ct)(e, t));
}
//#endregion
//#region node_modules/d3-selection/src/selection/iterator.js
function* dt() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length, o; i < a; ++i) (o = r[i]) && (yield o);
}
//#endregion
//#region node_modules/d3-selection/src/selection/index.js
var I = [null];
function L(e, t) {
	this._groups = e, this._parents = t;
}
function ft() {
	return new L([[document.documentElement]], I);
}
function pt() {
	return this;
}
L.prototype = ft.prototype = {
	constructor: L,
	select: s,
	selectAll: f,
	selectChild: v,
	selectChildren: S,
	filter: C,
	data: ne,
	enter: T,
	exit: ie,
	join: ae,
	merge: oe,
	selection: pt,
	order: se,
	sort: ce,
	call: ue,
	nodes: de,
	node: fe,
	size: pe,
	empty: me,
	each: he,
	attr: Se,
	style: Ee,
	property: je,
	classed: Fe,
	text: ze,
	html: Ue,
	raise: Ge,
	lower: qe,
	append: Je,
	insert: Xe,
	remove: Qe,
	clone: tt,
	datum: nt,
	on: st,
	dispatch: ut,
	[Symbol.iterator]: dt
};
//#endregion
//#region node_modules/d3-selection/src/select.js
function R(e) {
	return typeof e == "string" ? new L([[document.querySelector(e)]], [document.documentElement]) : new L([[e]], I);
}
//#endregion
//#region node_modules/d3-array/src/max.js
function z(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n < t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n < i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/d3-array/src/min.js
function mt(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n > t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n > i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/d3-array/src/sum.js
function B(e, t) {
	let n = 0;
	if (t === void 0) for (let t of e) (t = +t) && (n += t);
	else {
		let r = -1;
		for (let i of e) (i = +t(i, ++r, e)) && (n += i);
	}
	return n;
}
//#endregion
//#region node_modules/d3-sankey/src/align.js
function ht(e, t) {
	return e.sourceLinks.length ? e.depth : t - 1;
}
//#endregion
//#region node_modules/d3-sankey/src/constant.js
function V(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-sankey/src/sankey.js
function H(e, t) {
	return W(e.source, t.source) || e.index - t.index;
}
function U(e, t) {
	return W(e.target, t.target) || e.index - t.index;
}
function W(e, t) {
	return e.y0 - t.y0;
}
function G(e) {
	return e.value;
}
function gt(e) {
	return e.index;
}
function _t(e) {
	return e.nodes;
}
function vt(e) {
	return e.links;
}
function K(e, t) {
	let n = e.get(t);
	if (!n) throw Error("missing: " + t);
	return n;
}
function q({ nodes: e }) {
	for (let t of e) {
		let e = t.y0, n = e;
		for (let n of t.sourceLinks) n.y0 = e + n.width / 2, e += n.width;
		for (let e of t.targetLinks) e.y1 = n + e.width / 2, n += e.width;
	}
}
function yt() {
	let e = 0, t = 0, n = 1, r = 1, i = 24, a = 8, o, s = gt, c = ht, l, u, d = _t, f = vt, p = 6;
	function m() {
		let e = {
			nodes: d.apply(null, arguments),
			links: f.apply(null, arguments)
		};
		return h(e), g(e), _(e), v(e), x(e), q(e), e;
	}
	m.update = function(e) {
		return q(e), e;
	}, m.nodeId = function(e) {
		return arguments.length ? (s = typeof e == "function" ? e : V(e), m) : s;
	}, m.nodeAlign = function(e) {
		return arguments.length ? (c = typeof e == "function" ? e : V(e), m) : c;
	}, m.nodeSort = function(e) {
		return arguments.length ? (l = e, m) : l;
	}, m.nodeWidth = function(e) {
		return arguments.length ? (i = +e, m) : i;
	}, m.nodePadding = function(e) {
		return arguments.length ? (a = o = +e, m) : a;
	}, m.nodes = function(e) {
		return arguments.length ? (d = typeof e == "function" ? e : V(e), m) : d;
	}, m.links = function(e) {
		return arguments.length ? (f = typeof e == "function" ? e : V(e), m) : f;
	}, m.linkSort = function(e) {
		return arguments.length ? (u = e, m) : u;
	}, m.size = function(i) {
		return arguments.length ? (e = t = 0, n = +i[0], r = +i[1], m) : [n - e, r - t];
	}, m.extent = function(i) {
		return arguments.length ? (e = +i[0][0], n = +i[1][0], t = +i[0][1], r = +i[1][1], m) : [[e, t], [n, r]];
	}, m.iterations = function(e) {
		return arguments.length ? (p = +e, m) : p;
	};
	function h({ nodes: e, links: t }) {
		for (let [t, n] of e.entries()) n.index = t, n.sourceLinks = [], n.targetLinks = [];
		let n = new Map(e.map((t, n) => [s(t, n, e), t]));
		for (let [e, r] of t.entries()) {
			r.index = e;
			let { source: t, target: i } = r;
			typeof t != "object" && (t = r.source = K(n, t)), typeof i != "object" && (i = r.target = K(n, i)), t.sourceLinks.push(r), i.targetLinks.push(r);
		}
		if (u != null) for (let { sourceLinks: t, targetLinks: n } of e) t.sort(u), n.sort(u);
	}
	function g({ nodes: e }) {
		for (let t of e) t.value = t.fixedValue === void 0 ? Math.max(B(t.sourceLinks, G), B(t.targetLinks, G)) : t.fixedValue;
	}
	function _({ nodes: e }) {
		let t = e.length, n = new Set(e), r = /* @__PURE__ */ new Set(), i = 0;
		for (; n.size;) {
			for (let e of n) {
				e.depth = i;
				for (let { target: t } of e.sourceLinks) r.add(t);
			}
			if (++i > t) throw Error("circular link");
			n = r, r = /* @__PURE__ */ new Set();
		}
	}
	function v({ nodes: e }) {
		let t = e.length, n = new Set(e), r = /* @__PURE__ */ new Set(), i = 0;
		for (; n.size;) {
			for (let e of n) {
				e.height = i;
				for (let { source: t } of e.targetLinks) r.add(t);
			}
			if (++i > t) throw Error("circular link");
			n = r, r = /* @__PURE__ */ new Set();
		}
	}
	function y({ nodes: t }) {
		let r = z(t, (e) => e.depth) + 1, a = (n - e - i) / (r - 1), o = Array(r);
		for (let n of t) {
			let t = Math.max(0, Math.min(r - 1, Math.floor(c.call(null, n, r))));
			n.layer = t, n.x0 = e + t * a, n.x1 = n.x0 + i, o[t] ? o[t].push(n) : o[t] = [n];
		}
		if (l) for (let e of o) e.sort(l);
		return o;
	}
	function b(e) {
		let n = mt(e, (e) => (r - t - (e.length - 1) * o) / B(e, G));
		for (let i of e) {
			let e = t;
			for (let t of i) {
				t.y0 = e, t.y1 = e + t.value * n, e = t.y1 + o;
				for (let e of t.sourceLinks) e.width = e.value * n;
			}
			e = (r - e + o) / (i.length + 1);
			for (let t = 0; t < i.length; ++t) {
				let n = i[t];
				n.y0 += e * (t + 1), n.y1 += e * (t + 1);
			}
			O(i);
		}
	}
	function x(e) {
		let n = y(e);
		o = Math.min(a, (r - t) / (z(n, (e) => e.length) - 1)), b(n);
		for (let e = 0; e < p; ++e) {
			let t = .99 ** e, r = Math.max(1 - t, (e + 1) / p);
			C(n, t, r), S(n, t, r);
		}
	}
	function S(e, t, n) {
		for (let r = 1, i = e.length; r < i; ++r) {
			let i = e[r];
			for (let e of i) {
				let n = 0, r = 0;
				for (let { source: t, value: i } of e.targetLinks) {
					let a = i * (e.layer - t.layer);
					n += ee(t, e) * a, r += a;
				}
				if (!(r > 0)) continue;
				let i = (n / r - e.y0) * t;
				e.y0 += i, e.y1 += i, D(e);
			}
			l === void 0 && i.sort(W), w(i, n);
		}
	}
	function C(e, t, n) {
		for (let r = e.length - 2; r >= 0; --r) {
			let i = e[r];
			for (let e of i) {
				let n = 0, r = 0;
				for (let { target: t, value: i } of e.sourceLinks) {
					let a = i * (t.layer - e.layer);
					n += te(e, t) * a, r += a;
				}
				if (!(r > 0)) continue;
				let i = (n / r - e.y0) * t;
				e.y0 += i, e.y1 += i, D(e);
			}
			l === void 0 && i.sort(W), w(i, n);
		}
	}
	function w(e, n) {
		let i = e.length >> 1, a = e[i];
		E(e, a.y0 - o, i - 1, n), T(e, a.y1 + o, i + 1, n), E(e, r, e.length - 1, n), T(e, t, 0, n);
	}
	function T(e, t, n, r) {
		for (; n < e.length; ++n) {
			let i = e[n], a = (t - i.y0) * r;
			a > 1e-6 && (i.y0 += a, i.y1 += a), t = i.y1 + o;
		}
	}
	function E(e, t, n, r) {
		for (; n >= 0; --n) {
			let i = e[n], a = (i.y1 - t) * r;
			a > 1e-6 && (i.y0 -= a, i.y1 -= a), t = i.y0 - o;
		}
	}
	function D({ sourceLinks: e, targetLinks: t }) {
		if (u === void 0) {
			for (let { source: { sourceLinks: e } } of t) e.sort(U);
			for (let { target: { targetLinks: t } } of e) t.sort(H);
		}
	}
	function O(e) {
		if (u === void 0) for (let { sourceLinks: t, targetLinks: n } of e) t.sort(U), n.sort(H);
	}
	function ee(e, t) {
		let n = e.y0 - (e.sourceLinks.length - 1) * o / 2;
		for (let { target: r, width: i } of e.sourceLinks) {
			if (r === t) break;
			n += i + o;
		}
		for (let { source: r, width: i } of t.targetLinks) {
			if (r === e) break;
			n -= i;
		}
		return n;
	}
	function te(e, t) {
		let n = t.y0 - (t.targetLinks.length - 1) * o / 2;
		for (let { source: r, width: i } of t.targetLinks) {
			if (r === e) break;
			n += i + o;
		}
		for (let { target: r, width: i } of e.sourceLinks) {
			if (r === t) break;
			n -= i;
		}
		return n;
	}
	return m;
}
//#endregion
//#region node_modules/d3-path/src/path.js
var J = Math.PI, Y = 2 * J, X = 1e-6, bt = Y - X;
function Z() {
	this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
}
function Q() {
	return new Z();
}
Z.prototype = Q.prototype = {
	constructor: Z,
	moveTo: function(e, t) {
		this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
	},
	closePath: function() {
		this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
	},
	lineTo: function(e, t) {
		this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
	},
	quadraticCurveTo: function(e, t, n, r) {
		this._ += "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +r);
	},
	bezierCurveTo: function(e, t, n, r, i, a) {
		this._ += "C" + +e + "," + +t + "," + +n + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +a);
	},
	arcTo: function(e, t, n, r, i) {
		e = +e, t = +t, n = +n, r = +r, i = +i;
		var a = this._x1, o = this._y1, s = n - e, c = r - t, l = a - e, u = o - t, d = l * l + u * u;
		if (i < 0) throw Error("negative radius: " + i);
		if (this._x1 === null) this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
		else if (d > X) if (!(Math.abs(u * s - c * l) > X) || !i) this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
		else {
			var f = n - a, p = r - o, m = s * s + c * c, h = f * f + p * p, g = Math.sqrt(m), _ = Math.sqrt(d), v = i * Math.tan((J - Math.acos((m + d - h) / (2 * g * _))) / 2), y = v / _, b = v / g;
			Math.abs(y - 1) > X && (this._ += "L" + (e + y * l) + "," + (t + y * u)), this._ += "A" + i + "," + i + ",0,0," + +(u * f > l * p) + "," + (this._x1 = e + b * s) + "," + (this._y1 = t + b * c);
		}
	},
	arc: function(e, t, n, r, i, a) {
		e = +e, t = +t, n = +n, a = !!a;
		var o = n * Math.cos(r), s = n * Math.sin(r), c = e + o, l = t + s, u = 1 ^ a, d = a ? r - i : i - r;
		if (n < 0) throw Error("negative radius: " + n);
		this._x1 === null ? this._ += "M" + c + "," + l : (Math.abs(this._x1 - c) > X || Math.abs(this._y1 - l) > X) && (this._ += "L" + c + "," + l), n && (d < 0 && (d = d % Y + Y), d > bt ? this._ += "A" + n + "," + n + ",0,1," + u + "," + (e - o) + "," + (t - s) + "A" + n + "," + n + ",0,1," + u + "," + (this._x1 = c) + "," + (this._y1 = l) : d > X && (this._ += "A" + n + "," + n + ",0," + +(d >= J) + "," + u + "," + (this._x1 = e + n * Math.cos(i)) + "," + (this._y1 = t + n * Math.sin(i))));
	},
	rect: function(e, t, n, r) {
		this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +r + "h" + -n + "Z";
	},
	toString: function() {
		return this._;
	}
};
//#endregion
//#region node_modules/d3-shape/src/constant.js
function xt(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-shape/src/point.js
function St(e) {
	return e[0];
}
function Ct(e) {
	return e[1];
}
//#endregion
//#region node_modules/d3-shape/src/array.js
var wt = Array.prototype.slice;
//#endregion
//#region node_modules/d3-shape/src/link/index.js
function Tt(e) {
	return e.source;
}
function Et(e) {
	return e.target;
}
function Dt(e) {
	var t = Tt, n = Et, r = St, i = Ct, a = null;
	function o() {
		var o, s = wt.call(arguments), c = t.apply(this, s), l = n.apply(this, s);
		if (a ||= o = Q(), e(a, +r.apply(this, (s[0] = c, s)), +i.apply(this, s), +r.apply(this, (s[0] = l, s)), +i.apply(this, s)), o) return a = null, o + "" || null;
	}
	return o.source = function(e) {
		return arguments.length ? (t = e, o) : t;
	}, o.target = function(e) {
		return arguments.length ? (n = e, o) : n;
	}, o.x = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : xt(+e), o) : r;
	}, o.y = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : xt(+e), o) : i;
	}, o.context = function(e) {
		return arguments.length ? (a = e ?? null, o) : a;
	}, o;
}
function Ot(e, t, n, r, i) {
	e.moveTo(t, n), e.bezierCurveTo(t = (t + r) / 2, n, t, i, r, i);
}
function kt() {
	return Dt(Ot);
}
//#endregion
//#region node_modules/d3-sankey/src/sankeyLinkHorizontal.js
function At(e) {
	return [e.source.x1, e.y0];
}
function jt(e) {
	return [e.target.x0, e.y1];
}
function Mt() {
	return kt().source(At).target(jt);
}
//#endregion
//#region src/palette.ts
var $ = [
	{
		dark: "#3987e5",
		light: "#2a78d6"
	},
	{
		dark: "#d95926",
		light: "#eb6834"
	},
	{
		dark: "#199e70",
		light: "#1baf7a"
	},
	{
		dark: "#c98500",
		light: "#eda100"
	},
	{
		dark: "#d55181",
		light: "#e87ba4"
	},
	{
		dark: "#008300",
		light: "#008300"
	},
	{
		dark: "#9085e9",
		light: "#4a3aa7"
	},
	{
		dark: "#e66767",
		light: "#e34948"
	}
], Nt = {
	dark: {
		muted: "#898781",
		primary: "#ffffff",
		secondary: "#c3c2b7"
	},
	light: {
		muted: "#898781",
		primary: "#0b0b0b",
		secondary: "#52514e"
	}
}, Pt = {
	dark: {
		border: "rgba(255,255,255,0.10)",
		chart: "#1a1a19"
	},
	light: {
		border: "rgba(11,11,11,0.10)",
		chart: "#fcfcfb"
	}
};
function Ft(e, t) {
	let n = $[(e % $.length + $.length) % $.length];
	if (n == null) throw Error("Categorical palette is empty.");
	return t === "dark" ? n.dark : n.light;
}
//#endregion
//#region src/sankeyDiagram.ts
var It = 16, Lt = 12, Rt = 480, zt = 640, Bt = 6;
function Vt(e, t, n = {}) {
	let r = n.colorModeId ?? "light", i = Nt[r], a = Pt[r];
	getComputedStyle(t).position === "static" && (t.style.position = "relative");
	let o = R(t).append("div").attr("role", "tooltip").style("position", "absolute").style("pointer-events", "none").style("z-index", "1").style("opacity", "0").style("transition", "opacity 120ms ease").style("padding", "4px 8px").style("border-radius", "4px").style("font", "12px system-ui, -apple-system, \"Segoe UI\", sans-serif").style("white-space", "nowrap").style("background", a.chart).style("color", i.primary).style("border", `1px solid ${a.border}`).style("box-shadow", "0 2px 8px rgba(0,0,0,0.15)");
	function s(e, n) {
		let r = t.getBoundingClientRect();
		o.html(n).style("left", `${String(e.clientX - r.left + 12)}px`).style("top", `${String(e.clientY - r.top + 12)}px`).style("opacity", "1");
	}
	function c() {
		o.style("opacity", "0");
	}
	function l() {
		R(t).selectAll("svg").remove();
		let a = t.clientWidth || zt, o = t.clientHeight || Rt, l = {
			links: e.links.map((e) => ({ ...e })),
			nodes: e.nodes.map((e) => ({ ...e }))
		}, { links: u, nodes: d } = yt().nodeId((e) => e.id).nodeWidth(n.nodeWidth ?? It).nodePadding(n.nodePadding ?? Lt).extent([[1, 1], [a - 1, o - 1]])(l), f = R(t).insert("svg", "div").attr("viewBox", `0 0 ${String(a)} ${String(o)}`).attr("width", "100%").attr("height", "100%").attr("font-family", "system-ui, -apple-system, \"Segoe UI\", sans-serif").attr("font-size", 12), p = Mt();
		f.append("g").attr("fill", "none").selectAll("path").data(u).join("path").attr("d", p).attr("stroke", (e) => Ft(d.indexOf(e.source), r)).attr("stroke-opacity", .35).attr("stroke-width", (e) => Math.max(1, e.width ?? 1)).on("mouseenter", (e, t) => {
			R(e.currentTarget).attr("stroke-opacity", .6);
			let n = t.source, r = t.target;
			s(e, `${n.name} → ${r.name}<br>${t.value.toLocaleString()}`);
		}).on("mousemove", (e, t) => {
			let n = t.source, r = t.target;
			s(e, `${n.name} → ${r.name}<br>${t.value.toLocaleString()}`);
		}).on("mouseleave", (e) => {
			R(e.currentTarget).attr("stroke-opacity", .35), c();
		});
		let m = f.append("g").selectAll("g").data(d).join("g");
		m.append("rect").attr("x", (e) => e.x0 ?? 0).attr("y", (e) => e.y0 ?? 0).attr("width", (e) => (e.x1 ?? 0) - (e.x0 ?? 0)).attr("height", (e) => Math.max(1, (e.y1 ?? 0) - (e.y0 ?? 0))).attr("rx", 2).attr("fill", (e, t) => Ft(t, r)).on("mouseenter", (e, t) => {
			s(e, `${t.name}<br>${(t.value ?? 0).toLocaleString()}`);
		}).on("mousemove", (e, t) => {
			s(e, `${t.name}<br>${(t.value ?? 0).toLocaleString()}`);
		}).on("mouseleave", c), m.append("text").attr("x", (e) => (e.x0 ?? 0) < a / 2 ? (e.x1 ?? 0) + Bt : (e.x0 ?? 0) - Bt).attr("y", (e) => ((e.y0 ?? 0) + (e.y1 ?? 0)) / 2).attr("dy", "0.35em").attr("text-anchor", (e) => (e.x0 ?? 0) < a / 2 ? "start" : "end").attr("fill", i.primary).text((e) => e.name);
		let h = f.node();
		if (h == null) throw Error("Failed to create Sankey diagram SVG element.");
		return h;
	}
	let u = l();
	return {
		resize: () => {
			u = l();
		},
		get svg() {
			return u;
		}
	};
}
//#endregion
//#region src/index.ts
var Ht = "d3", Ut = class {
	renderSankeyDiagram(e, t, n, r) {
		let i = Vt(e, t, n);
		return r?.(), {
			resize: i.resize,
			get svg() {
				return i.svg;
			},
			vendorId: Ht
		};
	}
};
//#endregion
export { Ut as D3Tool };

//# sourceMappingURL=dpuse-tool-d3.es.js.map