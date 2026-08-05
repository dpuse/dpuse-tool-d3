import { c as e, g as t, n, o as r, p as i, s as a } from "./linear-BnhqTvdX.js";
//#region \0rolldown/runtime.js
var o = Object.create, s = Object.defineProperty, c = Object.getOwnPropertyDescriptor, l = Object.getOwnPropertyNames, u = Object.getPrototypeOf, d = Object.prototype.hasOwnProperty, f = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), p = (e, t) => {
	let n = {};
	for (var r in e) s(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || s(n, Symbol.toStringTag, { value: "Module" }), n;
}, m = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = l(t), a = 0, o = i.length, u; a < o; a++) u = i[a], !d.call(e, u) && u !== n && s(e, u, {
		get: ((e) => t[e]).bind(null, u),
		enumerable: !(r = c(t, u)) || r.enumerable
	});
	return e;
}, h = (e, t, n) => (n = e == null ? {} : o(u(e)), m(t || !e || !e.__esModule || !d.call(e, "default") ? s(n, "default", {
	value: e,
	enumerable: !0
}) : n, e));
//#endregion
//#region node_modules/d3-array/src/identity.js
function g(e) {
	return e;
}
//#endregion
//#region node_modules/d3-array/src/group.js
function _(e, ...t) {
	return S(e, g, g, t);
}
function v(e, t, ...n) {
	return S(e, g, t, n);
}
function y(e, t, ...n) {
	return S(e, Array.from, t, n);
}
function b(e, ...t) {
	return S(e, g, x, t);
}
function x(e) {
	if (e.length !== 1) throw Error("duplicate key");
	return e[0];
}
function S(e, n, r, i) {
	return (function e(a, o) {
		if (o >= i.length) return r(a);
		let s = new t(), c = i[o++], l = -1;
		for (let e of a) {
			let t = c(e, ++l, a), n = s.get(t);
			n ? n.push(e) : s.set(t, [e]);
		}
		for (let [t, n] of s) s.set(t, e(n, o));
		return n(s);
	})(e, 0);
}
//#endregion
//#region node_modules/d3-scale/src/pow.js
function C(e) {
	return function(t) {
		return t < 0 ? -((-t) ** +e) : t ** +e;
	};
}
function w(e) {
	return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function T(e) {
	return e < 0 ? -e * e : e * e;
}
function E(e) {
	var t = e(a, a), r = 1;
	function i() {
		return r === 1 ? e(a, a) : r === .5 ? e(w, T) : e(C(r), C(1 / r));
	}
	return t.exponent = function(e) {
		return arguments.length ? (r = +e, i()) : r;
	}, n(t);
}
function D() {
	var t = E(e());
	return t.copy = function() {
		return r(t, D()).exponent(t.exponent());
	}, i.apply(t, arguments), t;
}
//#endregion
export { v as a, p as c, b as i, h as l, E as n, y as o, _ as r, f as s, D as t };

//# sourceMappingURL=pow-BFDPqS3s.js.map