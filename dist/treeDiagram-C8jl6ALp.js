import { t as e } from "./select-BIuoFcZG.js";
import { t } from "./link-20hHJfDf.js";
//#region node_modules/d3-hierarchy/src/hierarchy/count.js
function n(e) {
	var t = 0, n = e.children, r = n && n.length;
	if (!r) t = 1;
	else for (; --r >= 0;) t += n[r].value;
	e.value = t;
}
function r() {
	return this.eachAfter(n);
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/each.js
function i(e, t) {
	let n = -1;
	for (let r of this) e.call(t, r, ++n, this);
	return this;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
function a(e, t) {
	for (var n = this, r = [n], i, a, o = -1; n = r.pop();) if (e.call(t, n, ++o, this), i = n.children) for (a = i.length - 1; a >= 0; --a) r.push(i[a]);
	return this;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
function o(e, t) {
	for (var n = this, r = [n], i = [], a, o, s, c = -1; n = r.pop();) if (i.push(n), a = n.children) for (o = 0, s = a.length; o < s; ++o) r.push(a[o]);
	for (; n = i.pop();) e.call(t, n, ++c, this);
	return this;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/find.js
function s(e, t) {
	let n = -1;
	for (let r of this) if (e.call(t, r, ++n, this)) return r;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/sum.js
function c(e) {
	return this.eachAfter(function(t) {
		for (var n = +e(t.data) || 0, r = t.children, i = r && r.length; --i >= 0;) n += r[i].value;
		t.value = n;
	});
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/sort.js
function l(e) {
	return this.eachBefore(function(t) {
		t.children && t.children.sort(e);
	});
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/path.js
function u(e) {
	for (var t = this, n = d(t, e), r = [t]; t !== n;) t = t.parent, r.push(t);
	for (var i = r.length; e !== n;) r.splice(i, 0, e), e = e.parent;
	return r;
}
function d(e, t) {
	if (e === t) return e;
	var n = e.ancestors(), r = t.ancestors(), i = null;
	for (e = n.pop(), t = r.pop(); e === t;) i = e, e = n.pop(), t = r.pop();
	return i;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/ancestors.js
function f() {
	for (var e = this, t = [e]; e = e.parent;) t.push(e);
	return t;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/descendants.js
function p() {
	return Array.from(this);
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/leaves.js
function m() {
	var e = [];
	return this.eachBefore(function(t) {
		t.children || e.push(t);
	}), e;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/links.js
function h() {
	var e = this, t = [];
	return e.each(function(n) {
		n !== e && t.push({
			source: n.parent,
			target: n
		});
	}), t;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/iterator.js
function* g() {
	var e = this, t, n = [e], r, i, a;
	do
		for (t = n.reverse(), n = []; e = t.pop();) if (yield e, r = e.children) for (i = 0, a = r.length; i < a; ++i) n.push(r[i]);
	while (n.length);
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/index.js
function _(e, t) {
	e instanceof Map ? (e = [void 0, e], t === void 0 && (t = b)) : t === void 0 && (t = y);
	for (var n = new C(e), r, i = [n], a, o, s, c; r = i.pop();) if ((o = t(r.data)) && (c = (o = Array.from(o)).length)) for (r.children = o, s = c - 1; s >= 0; --s) i.push(a = o[s] = new C(o[s])), a.parent = r, a.depth = r.depth + 1;
	return n.eachBefore(S);
}
function v() {
	return _(this).eachBefore(x);
}
function y(e) {
	return e.children;
}
function b(e) {
	return Array.isArray(e) ? e[1] : null;
}
function x(e) {
	e.data.value !== void 0 && (e.value = e.data.value), e.data = e.data.data;
}
function S(e) {
	var t = 0;
	do
		e.height = t;
	while ((e = e.parent) && e.height < ++t);
}
function C(e) {
	this.data = e, this.depth = this.height = 0, this.parent = null;
}
C.prototype = _.prototype = {
	constructor: C,
	count: r,
	each: i,
	eachAfter: o,
	eachBefore: a,
	find: s,
	sum: c,
	sort: l,
	path: u,
	ancestors: f,
	descendants: p,
	leaves: m,
	links: h,
	copy: v,
	[Symbol.iterator]: g
};
//#endregion
//#region node_modules/d3-hierarchy/src/tree.js
function w(e, t) {
	return e.parent === t.parent ? 1 : 2;
}
function T(e) {
	var t = e.children;
	return t ? t[0] : e.t;
}
function E(e) {
	var t = e.children;
	return t ? t[t.length - 1] : e.t;
}
function D(e, t, n) {
	var r = n / (t.i - e.i);
	t.c -= r, t.s += n, e.c += r, t.z += n, t.m += n;
}
function O(e) {
	for (var t = 0, n = 0, r = e.children, i = r.length, a; --i >= 0;) a = r[i], a.z += t, a.m += t, t += a.s + (n += a.c);
}
function k(e, t, n) {
	return e.a.parent === t.parent ? e.a : n;
}
function A(e, t) {
	this._ = e, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = t;
}
A.prototype = Object.create(C.prototype);
function j(e) {
	for (var t = new A(e, 0), n, r = [t], i, a, o, s; n = r.pop();) if (a = n._.children) for (n.children = Array(s = a.length), o = s - 1; o >= 0; --o) r.push(i = n.children[o] = new A(a[o], o)), i.parent = n;
	return (t.parent = new A(null, 0)).children = [t], t;
}
function M() {
	var e = w, t = 1, n = 1, r = null;
	function i(i) {
		var s = j(i);
		if (s.eachAfter(a), s.parent.m = -s.z, s.eachBefore(o), r) i.eachBefore(c);
		else {
			var l = i, u = i, d = i;
			i.eachBefore(function(e) {
				e.x < l.x && (l = e), e.x > u.x && (u = e), e.depth > d.depth && (d = e);
			});
			var f = l === u ? 1 : e(l, u) / 2, p = f - l.x, m = t / (u.x + f + p), h = n / (d.depth || 1);
			i.eachBefore(function(e) {
				e.x = (e.x + p) * m, e.y = e.depth * h;
			});
		}
		return i;
	}
	function a(t) {
		var n = t.children, r = t.parent.children, i = t.i ? r[t.i - 1] : null;
		if (n) {
			O(t);
			var a = (n[0].z + n[n.length - 1].z) / 2;
			i ? (t.z = i.z + e(t._, i._), t.m = t.z - a) : t.z = a;
		} else i && (t.z = i.z + e(t._, i._));
		t.parent.A = s(t, i, t.parent.A || r[0]);
	}
	function o(e) {
		e._.x = e.z + e.parent.m, e.m += e.parent.m;
	}
	function s(t, n, r) {
		if (n) {
			for (var i = t, a = t, o = n, s = i.parent.children[0], c = i.m, l = a.m, u = o.m, d = s.m, f; o = E(o), i = T(i), o && i;) s = T(s), a = E(a), a.a = t, f = o.z + u - i.z - c + e(o._, i._), f > 0 && (D(k(o, t, r), t, f), c += f, l += f), u += o.m, c += i.m, d += s.m, l += a.m;
			o && !E(a) && (a.t = o, a.m += u - l), i && !T(s) && (s.t = i, s.m += c - d, r = t);
		}
		return r;
	}
	function c(e) {
		e.x *= t, e.y = e.depth * n;
	}
	return i.separation = function(t) {
		return arguments.length ? (e = t, i) : e;
	}, i.size = function(e) {
		return arguments.length ? (r = !1, t = +e[0], n = +e[1], i) : r ? null : [t, n];
	}, i.nodeSize = function(e) {
		return arguments.length ? (r = !0, t = +e[0], n = +e[1], i) : r ? [t, n] : null;
	}, i;
}
//#endregion
//#region src/treeDiagram.ts
var N = 140, P = 40, F = 24, I = 50, L = 8, R = {
	branch: {
		fill: "#ffe6cc",
		stroke: "#d79b00"
	},
	leaf: {
		fill: "#dae8fc",
		stroke: "#6c8ebf"
	},
	root: {
		fill: "#d5e8d4",
		stroke: "#82b366"
	}
};
function z(n, r, i = {}) {
	let a = i.nodeWidth ?? N, o = i.nodeHeight ?? P, s = i.siblingGap ?? F, c = i.levelGap ?? I, l = i.padding ?? L, u = i.nodeColors ?? R;
	function d(e) {
		return e.depth === 0 ? "root" : e.children ? "branch" : "leaf";
	}
	function f() {
		e(r).selectAll("svg").remove();
		let i = _(n, (e) => e.children), f = M().nodeSize([o + s, a + c]).separation(() => 1)(i);
		f.eachAfter((e) => {
			let [t] = e.children ?? [];
			t && (e.x = t.x);
		});
		let p = f.descendants(), m = Math.min(...p.map((e) => e.y)) - a / 2, h = Math.max(...p.map((e) => e.y)) + a / 2, g = Math.min(...p.map((e) => e.x)) - o / 2, v = Math.max(...p.map((e) => e.x)) + o / 2, y = h - m + l * 2, b = v - g + l * 2, x = e(r).append("svg").attr("viewBox", `0 0 ${String(y)} ${String(b)}`).attr("width", y).attr("height", b), S = x.append("g").attr("transform", `translate(${String(l - m)}, ${String(l - g)})`), C = t().x((e) => e.y).y((e) => e.x);
		S.append("g").attr("fill", "none").attr("stroke", "#999999").attr("stroke-width", 1.5).selectAll("path").data(f.links()).join("path").attr("d", C);
		let w = S.append("g").selectAll("g").data(p).join("g").attr("transform", (e) => `translate(${String(e.y - a / 2)}, ${String(e.x - o / 2)})`);
		w.append("rect").attr("width", a).attr("height", o).attr("rx", 6).attr("fill", (e) => u[d(e)].fill).attr("stroke", (e) => u[d(e)].stroke), w.append("text").attr("x", a / 2).attr("y", o / 2).attr("text-anchor", "middle").attr("dominant-baseline", "middle").attr("font-family", "Helvetica, Arial, sans-serif").attr("font-size", 12).attr("fill", "#000000").text((e) => e.data.label);
		let T = x.node();
		if (T == null) throw Error("Failed to create tree diagram SVG element.");
		return T;
	}
	let p = f();
	return {
		resize: () => {
			p = f();
		},
		get svg() {
			return p;
		}
	};
}
//#endregion
export { z as renderTreeDiagram };

//# sourceMappingURL=treeDiagram-C8jl6ALp.js.map