import { t as e } from "./path-Bt1sPr2f.js";
//#region node_modules/d3-shape/src/constant.js
function t(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-shape/src/path.js
function n(t) {
	let n = 3;
	return t.digits = function(e) {
		if (!arguments.length) return n;
		if (e == null) n = null;
		else {
			let t = Math.floor(e);
			if (!(t >= 0)) throw RangeError(`invalid digits: ${e}`);
			n = t;
		}
		return t;
	}, () => new e(n);
}
//#endregion
//#region node_modules/d3-shape/src/array.js
var r = Array.prototype.slice;
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
function u(e) {
	let o = c, s = l, u = i, d = a, f = null, p = null, m = n(h);
	function h() {
		let t, n = r.call(arguments), i = o.apply(this, n), a = s.apply(this, n);
		if (f ?? (p = e(t = m())), p.lineStart(), n[0] = i, p.point(+u.apply(this, n), +d.apply(this, n)), n[0] = a, p.point(+u.apply(this, n), +d.apply(this, n)), p.lineEnd(), t) return p = null, t + "" || null;
	}
	return h.source = function(e) {
		return arguments.length ? (o = e, h) : o;
	}, h.target = function(e) {
		return arguments.length ? (s = e, h) : s;
	}, h.x = function(e) {
		return arguments.length ? (u = typeof e == "function" ? e : t(+e), h) : u;
	}, h.y = function(e) {
		return arguments.length ? (d = typeof e == "function" ? e : t(+e), h) : d;
	}, h.context = function(t) {
		return arguments.length ? (t == null ? f = p = null : p = e(f = t), h) : f;
	}, h;
}
function d() {
	return u(s);
}
//#endregion
export { d as t };

//# sourceMappingURL=link-RZgae8Z2.js.map