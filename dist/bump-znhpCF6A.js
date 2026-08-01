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
function i(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-shape/src/point.js
function a(e) {
	return e[0];
}
function o(e) {
	return e[1];
}
//#endregion
//#region node_modules/d3-shape/src/curve/bump.js
var s = class {
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
function c(e) {
	return new s(e, !0);
}
function l(e) {
	return new s(e, !1);
}
//#endregion
export { i as a, t as c, o as i, l as n, r as o, a as r, n as s, c as t };

//# sourceMappingURL=bump-znhpCF6A.js.map