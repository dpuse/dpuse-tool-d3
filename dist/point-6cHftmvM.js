import { t as e } from "./path-6kmCrmEz.js";
//#region node_modules/d3-shape/src/path.js
function t(t) {
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
//#region node_modules/d3-shape/src/point.js
function n(e) {
	return e[0];
}
function r(e) {
	return e[1];
}
//#endregion
export { r as n, t as r, n as t };

//# sourceMappingURL=point-6cHftmvM.js.map