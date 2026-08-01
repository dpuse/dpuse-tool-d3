import { c as e, i as t, o as n, r, s as i, t as a } from "./bump-znhpCF6A.js";
//#region node_modules/d3-shape/src/link.js
function o(e) {
	return e.source;
}
function s(e) {
	return e.target;
}
function c(a) {
	let c = o, l = s, u = r, d = t, f = null, p = null, m = i(h);
	function h() {
		let e, t = n.call(arguments), r = c.apply(this, t), i = l.apply(this, t);
		if (f ?? (p = a(e = m())), p.lineStart(), t[0] = r, p.point(+u.apply(this, t), +d.apply(this, t)), t[0] = i, p.point(+u.apply(this, t), +d.apply(this, t)), p.lineEnd(), e) return p = null, e + "" || null;
	}
	return h.source = function(e) {
		return arguments.length ? (c = e, h) : c;
	}, h.target = function(e) {
		return arguments.length ? (l = e, h) : l;
	}, h.x = function(t) {
		return arguments.length ? (u = typeof t == "function" ? t : e(+t), h) : u;
	}, h.y = function(t) {
		return arguments.length ? (d = typeof t == "function" ? t : e(+t), h) : d;
	}, h.context = function(e) {
		return arguments.length ? (e == null ? f = p = null : p = a(f = e), h) : f;
	}, h;
}
function l() {
	return c(a);
}
//#endregion
export { l as t };

//# sourceMappingURL=link-Dti9fi9g.js.map