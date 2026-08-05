import { i as e } from "./src-yL3ZdoR1.js";
import { t } from "./select-BIuoFcZG.js";
import { a as n, i as r, n as i, o as a, r as o, s, t as c } from "./nodrag-Dq2tlBbe.js";
//#region node_modules/d3-drag/src/constant.js
var l = (e) => () => e;
//#endregion
//#region node_modules/d3-drag/src/event.js
function u(e, { sourceEvent: t, subject: n, target: r, identifier: i, active: a, x: o, y: s, dx: c, dy: l, dispatch: u }) {
	Object.defineProperties(this, {
		type: {
			value: e,
			enumerable: !0,
			configurable: !0
		},
		sourceEvent: {
			value: t,
			enumerable: !0,
			configurable: !0
		},
		subject: {
			value: n,
			enumerable: !0,
			configurable: !0
		},
		target: {
			value: r,
			enumerable: !0,
			configurable: !0
		},
		identifier: {
			value: i,
			enumerable: !0,
			configurable: !0
		},
		active: {
			value: a,
			enumerable: !0,
			configurable: !0
		},
		x: {
			value: o,
			enumerable: !0,
			configurable: !0
		},
		y: {
			value: s,
			enumerable: !0,
			configurable: !0
		},
		dx: {
			value: c,
			enumerable: !0,
			configurable: !0
		},
		dy: {
			value: l,
			enumerable: !0,
			configurable: !0
		},
		_: { value: u }
	});
}
u.prototype.on = function() {
	var e = this._.on.apply(this._, arguments);
	return e === this._ ? this : e;
};
//#endregion
//#region node_modules/d3-drag/src/drag.js
function d(e) {
	return !e.ctrlKey && !e.button;
}
function f() {
	return this.parentNode;
}
function p(e, t) {
	return t ?? {
		x: e.x,
		y: e.y
	};
}
function m() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function h() {
	var h = d, g = f, _ = p, v = m, y = {}, b = e("start", "drag", "end"), x = 0, S, C, w, T, E = 0;
	function D(e) {
		e.on("mousedown.drag", O).filter(v).on("touchstart.drag", j).on("touchmove.drag", M, r).on("touchend.drag touchcancel.drag", N).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	function O(e, r) {
		if (!(T || !h.call(this, e, r))) {
			var i = P(this, g.call(this, e, r), e, r, "mouse");
			i && (t(e.view).on("mousemove.drag", k, n).on("mouseup.drag", A, n), c(e.view), a(e), w = !1, S = e.clientX, C = e.clientY, i("start", e));
		}
	}
	function k(e) {
		if (o(e), !w) {
			var t = e.clientX - S, n = e.clientY - C;
			w = t * t + n * n > E;
		}
		y.mouse("drag", e);
	}
	function A(e) {
		t(e.view).on("mousemove.drag mouseup.drag", null), i(e.view, w), o(e), y.mouse("end", e);
	}
	function j(e, t) {
		if (h.call(this, e, t)) {
			var n = e.changedTouches, r = g.call(this, e, t), i = n.length, o, s;
			for (o = 0; o < i; ++o) (s = P(this, r, e, t, n[o].identifier, n[o])) && (a(e), s("start", e, n[o]));
		}
	}
	function M(e) {
		var t = e.changedTouches, n = t.length, r, i;
		for (r = 0; r < n; ++r) (i = y[t[r].identifier]) && (o(e), i("drag", e, t[r]));
	}
	function N(e) {
		var t = e.changedTouches, n = t.length, r, i;
		for (T && clearTimeout(T), T = setTimeout(function() {
			T = null;
		}, 500), r = 0; r < n; ++r) (i = y[t[r].identifier]) && (a(e), i("end", e, t[r]));
	}
	function P(e, t, n, r, i, a) {
		var o = b.copy(), c = s(a || n, t), l, d, f;
		if ((f = _.call(e, new u("beforestart", {
			sourceEvent: n,
			target: D,
			identifier: i,
			active: x,
			x: c[0],
			y: c[1],
			dx: 0,
			dy: 0,
			dispatch: o
		}), r)) != null) return l = f.x - c[0] || 0, d = f.y - c[1] || 0, function n(a, p, m) {
			var h = c, g;
			switch (a) {
				case "start":
					y[i] = n, g = x++;
					break;
				case "end": delete y[i], --x;
				case "drag": c = s(m || p, t), g = x;
			}
			o.call(a, e, new u(a, {
				sourceEvent: p,
				subject: f,
				target: D,
				identifier: i,
				active: g,
				x: c[0] + l,
				y: c[1] + d,
				dx: c[0] - h[0],
				dy: c[1] - h[1],
				dispatch: o
			}), r);
		};
	}
	return D.filter = function(e) {
		return arguments.length ? (h = typeof e == "function" ? e : l(!!e), D) : h;
	}, D.container = function(e) {
		return arguments.length ? (g = typeof e == "function" ? e : l(e), D) : g;
	}, D.subject = function(e) {
		return arguments.length ? (_ = typeof e == "function" ? e : l(e), D) : _;
	}, D.touchable = function(e) {
		return arguments.length ? (v = typeof e == "function" ? e : l(!!e), D) : v;
	}, D.on = function() {
		var e = b.on.apply(b, arguments);
		return e === b ? D : e;
	}, D.clickDistance = function(e) {
		return arguments.length ? (E = (e = +e) * e, D) : Math.sqrt(E);
	}, D;
}
//#endregion
export { h as t };

//# sourceMappingURL=drag-DfL4uwqz.js.map