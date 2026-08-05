import { t as e } from "./select-BIuoFcZG.js";
import { t } from "./link-D-9z7kEr.js";
import { n, t as r } from "./hierarchy-CDFAetye.js";
//#region node_modules/d3-hierarchy/src/tree.js
function i(e, t) {
	return e.parent === t.parent ? 1 : 2;
}
function a(e) {
	var t = e.children;
	return t ? t[0] : e.t;
}
function o(e) {
	var t = e.children;
	return t ? t[t.length - 1] : e.t;
}
function s(e, t, n) {
	var r = n / (t.i - e.i);
	t.c -= r, t.s += n, e.c += r, t.z += n, t.m += n;
}
function c(e) {
	for (var t = 0, n = 0, r = e.children, i = r.length, a; --i >= 0;) a = r[i], a.z += t, a.m += t, t += a.s + (n += a.c);
}
function l(e, t, n) {
	return e.a.parent === t.parent ? e.a : n;
}
function u(e, t) {
	this._ = e, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = t;
}
u.prototype = Object.create(r.prototype);
function d(e) {
	for (var t = new u(e, 0), n, r = [t], i, a, o, s; n = r.pop();) if (a = n._.children) for (n.children = Array(s = a.length), o = s - 1; o >= 0; --o) r.push(i = n.children[o] = new u(a[o], o)), i.parent = n;
	return (t.parent = new u(null, 0)).children = [t], t;
}
function f() {
	var e = i, t = 1, n = 1, r = null;
	function u(i) {
		var a = d(i);
		if (a.eachAfter(f), a.parent.m = -a.z, a.eachBefore(p), r) i.eachBefore(h);
		else {
			var o = i, s = i, c = i;
			i.eachBefore(function(e) {
				e.x < o.x && (o = e), e.x > s.x && (s = e), e.depth > c.depth && (c = e);
			});
			var l = o === s ? 1 : e(o, s) / 2, u = l - o.x, m = t / (s.x + l + u), g = n / (c.depth || 1);
			i.eachBefore(function(e) {
				e.x = (e.x + u) * m, e.y = e.depth * g;
			});
		}
		return i;
	}
	function f(t) {
		var n = t.children, r = t.parent.children, i = t.i ? r[t.i - 1] : null;
		if (n) {
			c(t);
			var a = (n[0].z + n[n.length - 1].z) / 2;
			i ? (t.z = i.z + e(t._, i._), t.m = t.z - a) : t.z = a;
		} else i && (t.z = i.z + e(t._, i._));
		t.parent.A = m(t, i, t.parent.A || r[0]);
	}
	function p(e) {
		e._.x = e.z + e.parent.m, e.m += e.parent.m;
	}
	function m(t, n, r) {
		if (n) {
			for (var i = t, c = t, u = n, d = i.parent.children[0], f = i.m, p = c.m, m = u.m, h = d.m, g; u = o(u), i = a(i), u && i;) d = a(d), c = o(c), c.a = t, g = u.z + m - i.z - f + e(u._, i._), g > 0 && (s(l(u, t, r), t, g), f += g, p += g), m += u.m, f += i.m, h += d.m, p += c.m;
			u && !o(c) && (c.t = u, c.m += m - p), i && !a(d) && (d.t = i, d.m += f - h, r = t);
		}
		return r;
	}
	function h(e) {
		e.x *= t, e.y = e.depth * n;
	}
	return u.separation = function(t) {
		return arguments.length ? (e = t, u) : e;
	}, u.size = function(e) {
		return arguments.length ? (r = !1, t = +e[0], n = +e[1], u) : r ? null : [t, n];
	}, u.nodeSize = function(e) {
		return arguments.length ? (r = !0, t = +e[0], n = +e[1], u) : r ? [t, n] : null;
	}, u;
}
//#endregion
//#region src/treeDiagram.ts
var p = 140, m = 40, h = 24, g = 50, _ = 8, v = {
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
function y(r, i, a = {}) {
	let o = a.nodeWidth ?? p, s = a.nodeHeight ?? m, c = a.siblingGap ?? h, l = a.levelGap ?? g, u = a.padding ?? _, d = a.nodeColors ?? v;
	function y(e) {
		return e.depth === 0 ? "root" : e.children ? "branch" : "leaf";
	}
	function b() {
		e(i).selectAll("svg").remove();
		let a = n(r, (e) => e.children), p = f().nodeSize([s + c, o + l]).separation(() => 1)(a);
		p.eachAfter((e) => {
			let [t] = e.children ?? [];
			t && (e.x = t.x);
		});
		let m = p.descendants(), h = Math.min(...m.map((e) => e.y)) - o / 2, g = Math.max(...m.map((e) => e.y)) + o / 2, _ = Math.min(...m.map((e) => e.x)) - s / 2, v = Math.max(...m.map((e) => e.x)) + s / 2, b = g - h + u * 2, x = v - _ + u * 2, S = e(i).append("svg").attr("viewBox", `0 0 ${String(b)} ${String(x)}`).attr("width", b).attr("height", x), C = S.append("g").attr("transform", `translate(${String(u - h)}, ${String(u - _)})`), w = t().x((e) => e.y).y((e) => e.x);
		C.append("g").attr("fill", "none").attr("stroke", "#999999").attr("stroke-width", 1.5).selectAll("path").data(p.links()).join("path").attr("d", w);
		let T = C.append("g").selectAll("g").data(m).join("g").attr("transform", (e) => `translate(${String(e.y - o / 2)}, ${String(e.x - s / 2)})`);
		T.append("rect").attr("width", o).attr("height", s).attr("rx", 6).attr("fill", (e) => d[y(e)].fill).attr("stroke", (e) => d[y(e)].stroke), T.append("text").attr("x", o / 2).attr("y", s / 2).attr("text-anchor", "middle").attr("dominant-baseline", "middle").attr("font-family", "Helvetica, Arial, sans-serif").attr("font-size", 12).attr("fill", "#000000").text((e) => e.data.label);
		let E = S.node();
		if (E == null) throw Error("Failed to create tree diagram SVG element.");
		return E;
	}
	let x = b();
	return {
		resize: () => {
			x = b();
		},
		get svg() {
			return x;
		}
	};
}
//#endregion
export { y as renderTreeDiagram };

//# sourceMappingURL=treeDiagram-DsHUD8ou.js.map