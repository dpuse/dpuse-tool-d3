import { n as e, r as t } from "./array-Cv4-2llb.js";
import { t as n } from "./path-Bt1sPr2f.js";
//#region node_modules/d3-shape/src/path.js
function r(e) {
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
	}, () => new n(t);
}
//#endregion
//#region node_modules/d3-shape/src/point.js
function i(e) {
	return e[0];
}
function a(e) {
	return e[1];
}
//#endregion
//#region node_modules/d3-shape/src/curve/bump.js
var o = class {
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
function s(e) {
	return new o(e, !0);
}
//#endregion
//#region node_modules/d3-shape/src/link.js
function c(e) {
	return e.source;
}
function l(e) {
	return e.target;
}
function u(n) {
	let o = c, s = l, u = i, d = a, f = null, p = null, m = r(h);
	function h() {
		let t, r = e.call(arguments), i = o.apply(this, r), a = s.apply(this, r);
		if (f ?? (p = n(t = m())), p.lineStart(), r[0] = i, p.point(+u.apply(this, r), +d.apply(this, r)), r[0] = a, p.point(+u.apply(this, r), +d.apply(this, r)), p.lineEnd(), t) return p = null, t + "" || null;
	}
	return h.source = function(e) {
		return arguments.length ? (o = e, h) : o;
	}, h.target = function(e) {
		return arguments.length ? (s = e, h) : s;
	}, h.x = function(e) {
		return arguments.length ? (u = typeof e == "function" ? e : t(+e), h) : u;
	}, h.y = function(e) {
		return arguments.length ? (d = typeof e == "function" ? e : t(+e), h) : d;
	}, h.context = function(e) {
		return arguments.length ? (e == null ? f = p = null : p = n(f = e), h) : f;
	}, h;
}
function d() {
	return u(s);
}
//#endregion
export { d as t };

//# sourceMappingURL=link-DKK0Q0lG.js.map