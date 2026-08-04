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
export { n as a, r as i, o as n, t as o, i as r, a as t };

//# sourceMappingURL=point-BwTGxj8U.js.map