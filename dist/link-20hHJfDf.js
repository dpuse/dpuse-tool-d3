import { a as e, i as t, n, o as r, t as i } from "./point-BwTGxj8U.js";
//#region node_modules/d3-shape/src/curve/bump.js
var a = class {
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
function o(e) {
	return new a(e, !0);
}
//#endregion
//#region node_modules/d3-shape/src/link.js
function s(e) {
	return e.source;
}
function c(e) {
	return e.target;
}
function l(a) {
	let o = s, l = c, u = i, d = n, f = null, p = null, m = e(h);
	function h() {
		let e, n = t.call(arguments), r = o.apply(this, n), i = l.apply(this, n);
		if (f ?? (p = a(e = m())), p.lineStart(), n[0] = r, p.point(+u.apply(this, n), +d.apply(this, n)), n[0] = i, p.point(+u.apply(this, n), +d.apply(this, n)), p.lineEnd(), e) return p = null, e + "" || null;
	}
	return h.source = function(e) {
		return arguments.length ? (o = e, h) : o;
	}, h.target = function(e) {
		return arguments.length ? (l = e, h) : l;
	}, h.x = function(e) {
		return arguments.length ? (u = typeof e == "function" ? e : r(+e), h) : u;
	}, h.y = function(e) {
		return arguments.length ? (d = typeof e == "function" ? e : r(+e), h) : d;
	}, h.context = function(e) {
		return arguments.length ? (e == null ? f = p = null : p = a(f = e), h) : f;
	}, h;
}
function u() {
	return l(o);
}
//#endregion
export { u as t };

//# sourceMappingURL=link-20hHJfDf.js.map