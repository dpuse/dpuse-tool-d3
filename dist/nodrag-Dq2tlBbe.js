import { t as e } from "./select-BIuoFcZG.js";
//#region node_modules/d3-selection/src/sourceEvent.js
function t(e) {
	let t;
	for (; t = e.sourceEvent;) e = t;
	return e;
}
//#endregion
//#region node_modules/d3-selection/src/pointer.js
function n(e, n) {
	if (e = t(e), n === void 0 && (n = e.currentTarget), n) {
		var r = n.ownerSVGElement || n;
		if (r.createSVGPoint) {
			var i = r.createSVGPoint();
			return i.x = e.clientX, i.y = e.clientY, i = i.matrixTransform(n.getScreenCTM().inverse()), [i.x, i.y];
		}
		if (n.getBoundingClientRect) {
			var a = n.getBoundingClientRect();
			return [e.clientX - a.left - n.clientLeft, e.clientY - a.top - n.clientTop];
		}
	}
	return [e.pageX, e.pageY];
}
//#endregion
//#region node_modules/d3-drag/src/noevent.js
var r = { passive: !1 }, i = {
	capture: !0,
	passive: !1
};
function a(e) {
	e.stopImmediatePropagation();
}
function o(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region node_modules/d3-drag/src/nodrag.js
function s(t) {
	var n = t.document.documentElement, r = e(t).on("dragstart.drag", o, i);
	"onselectstart" in n ? r.on("selectstart.drag", o, i) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function c(t, n) {
	var r = t.document.documentElement, a = e(t).on("dragstart.drag", null);
	n && (a.on("click.drag", o, i), setTimeout(function() {
		a.on("click.drag", null);
	}, 0)), "onselectstart" in r ? a.on("selectstart.drag", null) : (r.style.MozUserSelect = r.__noselect, delete r.__noselect);
}
//#endregion
export { i as a, r as i, c as n, a as o, o as r, n as s, s as t };

//# sourceMappingURL=nodrag-Dq2tlBbe.js.map