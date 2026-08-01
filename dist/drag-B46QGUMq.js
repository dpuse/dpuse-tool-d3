import { t as e } from "./select-BIuoFcZG.js";
import { C as t, D as n, E as r, O as i, S as a, T as o, w as s, x as c } from "./src-DnMaAyIP.js";
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
	var h = d, g = f, _ = p, v = m, y = {}, b = n("start", "drag", "end"), x = 0, S, C, w, T, E = 0;
	function D(e) {
		e.on("mousedown.drag", O).filter(v).on("touchstart.drag", j).on("touchmove.drag", M, s).on("touchend.drag touchcancel.drag", N).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	function O(t, n) {
		if (!(T || !h.call(this, t, n))) {
			var i = P(this, g.call(this, t, n), t, n, "mouse");
			i && (e(t.view).on("mousemove.drag", k, o).on("mouseup.drag", A, o), c(t.view), r(t), w = !1, S = t.clientX, C = t.clientY, i("start", t));
		}
	}
	function k(e) {
		if (t(e), !w) {
			var n = e.clientX - S, r = e.clientY - C;
			w = n * n + r * r > E;
		}
		y.mouse("drag", e);
	}
	function A(n) {
		e(n.view).on("mousemove.drag mouseup.drag", null), a(n.view, w), t(n), y.mouse("end", n);
	}
	function j(e, t) {
		if (h.call(this, e, t)) {
			var n = e.changedTouches, i = g.call(this, e, t), a = n.length, o, s;
			for (o = 0; o < a; ++o) (s = P(this, i, e, t, n[o].identifier, n[o])) && (r(e), s("start", e, n[o]));
		}
	}
	function M(e) {
		var n = e.changedTouches, r = n.length, i, a;
		for (i = 0; i < r; ++i) (a = y[n[i].identifier]) && (t(e), a("drag", e, n[i]));
	}
	function N(e) {
		var t = e.changedTouches, n = t.length, i, a;
		for (T && clearTimeout(T), T = setTimeout(function() {
			T = null;
		}, 500), i = 0; i < n; ++i) (a = y[t[i].identifier]) && (r(e), a("end", e, t[i]));
	}
	function P(e, t, n, r, a, o) {
		var s = b.copy(), c = i(o || n, t), l, d, f;
		if ((f = _.call(e, new u("beforestart", {
			sourceEvent: n,
			target: D,
			identifier: a,
			active: x,
			x: c[0],
			y: c[1],
			dx: 0,
			dy: 0,
			dispatch: s
		}), r)) != null) return l = f.x - c[0] || 0, d = f.y - c[1] || 0, function n(o, p, m) {
			var h = c, g;
			switch (o) {
				case "start":
					y[a] = n, g = x++;
					break;
				case "end": delete y[a], --x;
				case "drag": c = i(m || p, t), g = x;
			}
			s.call(o, e, new u(o, {
				sourceEvent: p,
				subject: f,
				target: D,
				identifier: a,
				active: g,
				x: c[0] + l,
				y: c[1] + d,
				dx: c[0] - h[0],
				dy: c[1] - h[1],
				dispatch: s
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

//# sourceMappingURL=drag-B46QGUMq.js.map