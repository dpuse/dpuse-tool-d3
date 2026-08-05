import { c as e, i as t, r as n, s as r, t as i } from "./pow-BFDPqS3s.js";
import { d as a } from "./linear-BnhqTvdX.js";
import { t as o } from "./max-CPVNm4tn.js";
import { n as s } from "./src-yL3ZdoR1.js";
import { t as c } from "./select-BIuoFcZG.js";
import { d as l, p as u } from "./string-CnCj7THX.js";
import { r as d, t as f } from "./array-Cv4-2llb.js";
import { a as p, c as m, d as h, f as g, i as _, l as v, n as y, p as b, r as x, s as S, t as C, u as w } from "./math-C5EhTgJw.js";
import { n as T } from "./path-6kmCrmEz.js";
import { n as E, r as D, t as O } from "./point-6cHftmvM.js";
import { _ as ee, a as te, c as ne, d as re, f as ie, g as ae, h as oe, i as se, l as k, m as A, n as j, o as M, p as ce, r as le, s as ue, t as de, u as fe, v as N } from "./step-DgCcZZ3W.js";
import { n as pe } from "./hierarchy-CDFAetye.js";
import { r as me, t as he } from "./palette-BuTjISrV.js";
//#region node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
function ge(e) {
	if (e.sheet) return e.sheet;
	/* istanbul ignore next */
	for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function P(e) {
	var t = document.createElement("style");
	return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var _e = /*#__PURE__*/ function() {
	function e(e) {
		var t = this;
		this._insertTag = function(e) {
			var n = t.tags.length === 0 ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling;
			t.container.insertBefore(e, n), t.tags.push(e);
		}, this.isSpeedy = e.speedy === void 0 || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null;
	}
	var t = e.prototype;
	return t.hydrate = function(e) {
		e.forEach(this._insertTag);
	}, t.insert = function(e) {
		this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(P(this));
		var t = this.tags[this.tags.length - 1];
		if (this.isSpeedy) {
			var n = ge(t);
			try {
				n.insertRule(e, n.cssRules.length);
			} catch {}
		} else t.appendChild(document.createTextNode(e));
		this.ctr++;
	}, t.flush = function() {
		this.tags.forEach(function(e) {
			return e.parentNode?.removeChild(e);
		}), this.tags = [], this.ctr = 0;
	}, e;
}(), F = "-ms-", ve = "-moz-", I = "-webkit-", ye = "comm", be = "rule", xe = "decl", Se = "@import", Ce = "@keyframes", we = "@layer", Te = Math.abs, Ee = String.fromCharCode, De = Object.assign;
function Oe(e, t) {
	return R(e, 0) ^ 45 ? (((t << 2 ^ R(e, 0)) << 2 ^ R(e, 1)) << 2 ^ R(e, 2)) << 2 ^ R(e, 3) : 0;
}
function ke(e) {
	return e.trim();
}
function Ae(e, t) {
	return (e = t.exec(e)) ? e[0] : e;
}
function L(e, t, n) {
	return e.replace(t, n);
}
function je(e, t) {
	return e.indexOf(t);
}
function R(e, t) {
	return e.charCodeAt(t) | 0;
}
function Me(e, t, n) {
	return e.slice(t, n);
}
function z(e) {
	return e.length;
}
function Ne(e) {
	return e.length;
}
function Pe(e, t) {
	return t.push(e), e;
}
function Fe(e, t) {
	return e.map(t).join("");
}
//#endregion
//#region node_modules/stylis/src/Tokenizer.js
var Ie = 1, Le = 1, Re = 0, B = 0, V = 0, ze = "";
function Be(e, t, n, r, i, a, o) {
	return {
		value: e,
		root: t,
		parent: n,
		type: r,
		props: i,
		children: a,
		line: Ie,
		column: Le,
		length: o,
		return: ""
	};
}
function Ve(e, t) {
	return De(Be("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function He() {
	return V;
}
function Ue() {
	return V = B > 0 ? R(ze, --B) : 0, Le--, V === 10 && (Le = 1, Ie--), V;
}
function H() {
	return V = B < Re ? R(ze, B++) : 0, Le++, V === 10 && (Le = 1, Ie++), V;
}
function U() {
	return R(ze, B);
}
function We() {
	return B;
}
function Ge(e, t) {
	return Me(ze, e, t);
}
function Ke(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function qe(e) {
	return Ie = Le = 1, Re = z(ze = e), B = 0, [];
}
function Je(e) {
	return ze = "", e;
}
function Ye(e) {
	return ke(Ge(B - 1, Qe(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Xe(e) {
	for (; (V = U()) && V < 33;) H();
	return Ke(e) > 2 || Ke(V) > 3 ? "" : " ";
}
function Ze(e, t) {
	for (; --t && H() && !(V < 48 || V > 102 || V > 57 && V < 65 || V > 70 && V < 97););
	return Ge(e, We() + (t < 6 && U() == 32 && H() == 32));
}
function Qe(e) {
	for (; H();) switch (V) {
		case e: return B;
		case 34:
		case 39:
			e !== 34 && e !== 39 && Qe(V);
			break;
		case 40:
			e === 41 && Qe(e);
			break;
		case 92:
			H();
			break;
	}
	return B;
}
function $e(e, t) {
	for (; H() && e + V !== 57 && (e + V !== 84 || U() !== 47););
	return "/*" + Ge(t, B - 1) + "*" + Ee(e === 47 ? e : H());
}
function et(e) {
	for (; !Ke(U());) H();
	return Ge(e, B);
}
//#endregion
//#region node_modules/stylis/src/Parser.js
function tt(e) {
	return Je(nt("", null, null, null, [""], e = qe(e), 0, [0], e));
}
function nt(e, t, n, r, i, a, o, s, c) {
	for (var l = 0, u = 0, d = o, f = 0, p = 0, m = 0, h = 1, g = 1, _ = 1, v = 0, y = "", b = i, x = a, S = r, C = y; g;) switch (m = v, v = H()) {
		case 40: if (m != 108 && R(C, d - 1) == 58) {
			je(C += L(Ye(v), "&", "&\f"), "&\f") != -1 && (_ = -1);
			break;
		}
		case 34:
		case 39:
		case 91:
			C += Ye(v);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			C += Xe(m);
			break;
		case 92:
			C += Ze(We() - 1, 7);
			continue;
		case 47:
			switch (U()) {
				case 42:
				case 47:
					Pe(it($e(H(), We()), t, n), c);
					break;
				default: C += "/";
			}
			break;
		case 123 * h: s[l++] = z(C) * _;
		case 125 * h:
		case 59:
		case 0:
			switch (v) {
				case 0:
				case 125: g = 0;
				case 59 + u:
					_ == -1 && (C = L(C, /\f/g, "")), p > 0 && z(C) - d && Pe(p > 32 ? at(C + ";", r, n, d - 1) : at(L(C, " ", "") + ";", r, n, d - 2), c);
					break;
				case 59: C += ";";
				default: if (Pe(S = rt(C, t, n, l, u, i, s, y, b = [], x = [], d), a), v === 123) if (u === 0) nt(C, t, S, S, b, a, d, s, x);
				else switch (f === 99 && R(C, 3) === 110 ? 100 : f) {
					case 100:
					case 108:
					case 109:
					case 115:
						nt(e, S, S, r && Pe(rt(e, S, S, 0, 0, i, s, y, i, b = [], d), x), i, x, d, s, r ? b : x);
						break;
					default: nt(C, S, S, S, [""], x, 0, s, x);
				}
			}
			l = u = p = 0, h = _ = 1, y = C = "", d = o;
			break;
		case 58: d = 1 + z(C), p = m;
		default:
			if (h < 1) {
				if (v == 123) --h;
				else if (v == 125 && h++ == 0 && Ue() == 125) continue;
			}
			switch (C += Ee(v), v * h) {
				case 38:
					_ = u > 0 ? 1 : (C += "\f", -1);
					break;
				case 44:
					s[l++] = (z(C) - 1) * _, _ = 1;
					break;
				case 64:
					U() === 45 && (C += Ye(H())), f = U(), u = d = z(y = C += et(We())), v++;
					break;
				case 45: m === 45 && z(C) == 2 && (h = 0);
			}
	}
	return a;
}
function rt(e, t, n, r, i, a, o, s, c, l, u) {
	for (var d = i - 1, f = i === 0 ? a : [""], p = Ne(f), m = 0, h = 0, g = 0; m < r; ++m) for (var _ = 0, v = Me(e, d + 1, d = Te(h = o[m])), y = e; _ < p; ++_) (y = ke(h > 0 ? f[_] + " " + v : L(v, /&\f/g, f[_]))) && (c[g++] = y);
	return Be(e, t, n, i === 0 ? be : s, c, l, u);
}
function it(e, t, n) {
	return Be(e, t, n, ye, Ee(He()), Me(e, 2, -2), 0);
}
function at(e, t, n, r) {
	return Be(e, t, n, xe, Me(e, 0, r), Me(e, r + 1, -1), r);
}
//#endregion
//#region node_modules/stylis/src/Serializer.js
function ot(e, t) {
	for (var n = "", r = Ne(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
	return n;
}
function st(e, t, n, r) {
	switch (e.type) {
		case we: if (e.children.length) break;
		case Se:
		case xe: return e.return = e.return || e.value;
		case ye: return "";
		case Ce: return e.return = e.value + "{" + ot(e.children, r) + "}";
		case be: e.value = e.props.join(",");
	}
	return z(n = ot(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
//#endregion
//#region node_modules/stylis/src/Middleware.js
function ct(e) {
	var t = Ne(e);
	return function(n, r, i, a) {
		for (var o = "", s = 0; s < t; s++) o += e[s](n, r, i, a) || "";
		return o;
	};
}
function lt(e) {
	return function(t) {
		t.root || (t = t.return) && e(t);
	};
}
//#endregion
//#region node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function ut(e) {
	var t = Object.create(null);
	return function(n) {
		return t[n] === void 0 && (t[n] = e(n)), t[n];
	};
}
//#endregion
//#region node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var dt = function(e, t, n) {
	for (var r = 0, i = 0; r = i, i = U(), r === 38 && i === 12 && (t[n] = 1), !Ke(i);) H();
	return Ge(e, B);
}, ft = function(e, t) {
	var n = -1, r = 44;
	do
		switch (Ke(r)) {
			case 0:
				r === 38 && U() === 12 && (t[n] = 1), e[n] += dt(B - 1, t, n);
				break;
			case 2:
				e[n] += Ye(r);
				break;
			case 4: if (r === 44) {
				e[++n] = U() === 58 ? "&\f" : "", t[n] = e[n].length;
				break;
			}
			default: e[n] += Ee(r);
		}
	while (r = H());
	return e;
}, pt = function(e, t) {
	return Je(ft(qe(e), t));
}, mt = /* #__PURE__ */ new WeakMap(), ht = function(e) {
	if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
		for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; n.type !== "rule";) if (n = n.parent, !n) return;
		if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !mt.get(n)) && !r) {
			mt.set(e, !0);
			for (var i = [], a = pt(t, i), o = n.props, s = 0, c = 0; s < a.length; s++) for (var l = 0; l < o.length; l++, c++) e.props[c] = i[s] ? a[s].replace(/&\f/g, o[l]) : o[l] + " " + a[s];
		}
	}
}, gt = function(e) {
	if (e.type === "decl") {
		var t = e.value;
		t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
	}
};
function _t(e, t) {
	switch (Oe(e, t)) {
		case 5103: return I + "print-" + e + e;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
		case 4855:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829: return I + e + e;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756: return I + e + ve + e + F + e + e;
		case 6828:
		case 4268: return I + e + F + e + e;
		case 6165: return I + e + F + "flex-" + e + e;
		case 5187: return I + e + L(e, /(\w+).+(:[^]+)/, I + "box-$1$2" + F + "flex-$1$2") + e;
		case 5443: return I + e + F + "flex-item-" + L(e, /flex-|-self/, "") + e;
		case 4675: return I + e + F + "flex-line-pack" + L(e, /align-content|flex-|-self/, "") + e;
		case 5548: return I + e + F + L(e, "shrink", "negative") + e;
		case 5292: return I + e + F + L(e, "basis", "preferred-size") + e;
		case 6060: return I + "box-" + L(e, "-grow", "") + I + e + F + L(e, "grow", "positive") + e;
		case 4554: return I + L(e, /([^-])(transform)/g, "$1" + I + "$2") + e;
		case 6187: return L(L(L(e, /(zoom-|grab)/, I + "$1"), /(image-set)/, I + "$1"), e, "") + e;
		case 5495:
		case 3959: return L(e, /(image-set\([^]*)/, I + "$1$`$1");
		case 4968: return L(L(e, /(.+:)(flex-)?(.*)/, I + "box-pack:$3" + F + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + I + e + e;
		case 4095:
		case 3583:
		case 4068:
		case 2532: return L(e, /(.+)-inline(.+)/, I + "$1$2") + e;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (z(e) - 1 - t > 6) switch (R(e, t + 1)) {
				case 109: if (R(e, t + 4) !== 45) break;
				case 102: return L(e, /(.+:)(.+)-([^]+)/, "$1" + I + "$2-$3$1" + ve + (R(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
				case 115: return ~je(e, "stretch") ? _t(L(e, "stretch", "fill-available"), t) + e : e;
			}
			break;
		case 4949: if (R(e, t + 1) !== 115) break;
		case 6444:
			switch (R(e, z(e) - 3 - (~je(e, "!important") && 10))) {
				case 107: return L(e, ":", ":" + I) + e;
				case 101: return L(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + I + (R(e, 14) === 45 ? "inline-" : "") + "box$3$1" + I + "$2$3$1" + F + "$2box$3") + e;
			}
			break;
		case 5936:
			switch (R(e, t + 11)) {
				case 114: return I + e + F + L(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
				case 108: return I + e + F + L(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
				case 45: return I + e + F + L(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
			}
			return I + e + F + e + e;
	}
	return e;
}
var vt = [function(e, t, n, r) {
	if (e.length > -1 && !e.return) switch (e.type) {
		case xe:
			e.return = _t(e.value, e.length);
			break;
		case Ce: return ot([Ve(e, { value: L(e.value, "@", "@" + I) })], r);
		case be: if (e.length) return Fe(e.props, function(t) {
			switch (Ae(t, /(::plac\w+|:read-\w+)/)) {
				case ":read-only":
				case ":read-write": return ot([Ve(e, { props: [L(t, /:(read-\w+)/, ":" + ve + "$1")] })], r);
				case "::placeholder": return ot([
					Ve(e, { props: [L(t, /:(plac\w+)/, ":" + I + "input-$1")] }),
					Ve(e, { props: [L(t, /:(plac\w+)/, ":" + ve + "$1")] }),
					Ve(e, { props: [L(t, /:(plac\w+)/, F + "input-$1")] })
				], r);
			}
			return "";
		});
	}
}], yt = function(e) {
	var t = e.key;
	if (t === "css") {
		var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(n, function(e) {
			e.getAttribute("data-emotion").indexOf(" ") !== -1 && (document.head.appendChild(e), e.setAttribute("data-s", ""));
		});
	}
	var r = e.stylisPlugins || vt, i = {}, a, o = [];
	a = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + t + " \"]"), function(e) {
		for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) i[t[n]] = !0;
		o.push(e);
	});
	var s, c = [ht, gt], l, u = [st, lt(function(e) {
		l.insert(e);
	})], d = ct(c.concat(r, u)), f = function(e) {
		return ot(tt(e), d);
	};
	s = function(e, t, n, r) {
		l = n, f(e ? e + "{" + t.styles + "}" : t.styles), r && (p.inserted[t.name] = !0);
	};
	var p = {
		key: t,
		sheet: new _e({
			key: t,
			container: a,
			nonce: e.nonce,
			speedy: e.speedy,
			prepend: e.prepend,
			insertionPoint: e.insertionPoint
		}),
		nonce: e.nonce,
		inserted: i,
		registered: {},
		insert: s
	};
	return p.sheet.hydrate(o), p;
};
//#endregion
//#region node_modules/@emotion/hash/dist/emotion-hash.esm.js
function bt(e) {
	for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4) n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	switch (i) {
		case 3: t ^= (e.charCodeAt(r + 2) & 255) << 16;
		case 2: t ^= (e.charCodeAt(r + 1) & 255) << 8;
		case 1: t ^= e.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	}
	return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
//#endregion
//#region node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var xt = {
	animationIterationCount: 1,
	aspectRatio: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	boxFlex: 1,
	boxFlexGroup: 1,
	boxOrdinalGroup: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexPositive: 1,
	flexShrink: 1,
	flexNegative: 1,
	flexOrder: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	msGridRow: 1,
	msGridRowSpan: 1,
	msGridColumn: 1,
	msGridColumnSpan: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	scale: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
}, St = /[A-Z]|^ms/g, Ct = /_EMO_([^_]+?)_([^]*?)_EMO_/g, wt = function(e) {
	return e.charCodeAt(1) === 45;
}, Tt = function(e) {
	return e != null && typeof e != "boolean";
}, Et = /* #__PURE__ */ ut(function(e) {
	return wt(e) ? e : e.replace(St, "-$&").toLowerCase();
}), Dt = function(e, t) {
	switch (e) {
		case "animation":
		case "animationName": if (typeof t == "string") return t.replace(Ct, function(e, t, n) {
			return W = {
				name: t,
				styles: n,
				next: W
			}, t;
		});
	}
	return xt[e] !== 1 && !wt(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
function Ot(e, t, n) {
	if (n == null) return "";
	var r = n;
	if (r.__emotion_styles !== void 0) return r;
	switch (typeof n) {
		case "boolean": return "";
		case "object":
			var i = n;
			if (i.anim === 1) return W = {
				name: i.name,
				styles: i.styles,
				next: W
			}, i.name;
			var a = n;
			if (a.styles !== void 0) {
				var o = a.next;
				if (o !== void 0) for (; o !== void 0;) W = {
					name: o.name,
					styles: o.styles,
					next: W
				}, o = o.next;
				return a.styles + ";";
			}
			return kt(e, t, n);
		case "function": if (e !== void 0) {
			var s = W, c = n(e);
			return W = s, Ot(e, t, c);
		}
	}
	var l = n;
	if (t == null) return l;
	var u = t[l];
	return u === void 0 ? l : u;
}
function kt(e, t, n) {
	var r = "";
	if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r += Ot(e, t, n[i]) + ";";
	else for (var a in n) {
		var o = n[a];
		if (typeof o != "object") {
			var s = o;
			t != null && t[s] !== void 0 ? r += a + "{" + t[s] + "}" : Tt(s) && (r += Et(a) + ":" + Dt(a, s) + ";");
		} else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0)) for (var c = 0; c < o.length; c++) Tt(o[c]) && (r += Et(a) + ":" + Dt(a, o[c]) + ";");
		else {
			var l = Ot(e, t, o);
			switch (a) {
				case "animation":
				case "animationName":
					r += Et(a) + ":" + l + ";";
					break;
				default: r += a + "{" + l + "}";
			}
		}
	}
	return r;
}
var At = /label:\s*([^\s;{]+)\s*(;|$)/g, W;
function jt(e, t, n) {
	if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
	var r = !0, i = "";
	W = void 0;
	var a = e[0];
	a == null || a.raw === void 0 ? (r = !1, i += Ot(n, t, a)) : i += a[0];
	for (var o = 1; o < e.length; o++) i += Ot(n, t, e[o]), r && (i += a[o]);
	At.lastIndex = 0;
	for (var s = "", c; (c = At.exec(i)) !== null;) s += "-" + c[1];
	return {
		name: bt(i) + s,
		styles: i,
		next: W
	};
}
//#endregion
//#region node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
function Mt(e, t, n) {
	var r = "";
	return n.split(" ").forEach(function(n) {
		e[n] === void 0 ? n && (r += n + " ") : t.push(e[n] + ";");
	}), r;
}
var Nt = function(e, t, n) {
	var r = e.key + "-" + t.name;
	n === !1 && e.registered[r] === void 0 && (e.registered[r] = t.styles);
}, Pt = function(e, t, n) {
	Nt(e, t, n);
	var r = e.key + "-" + t.name;
	if (e.inserted[t.name] === void 0) {
		var i = t;
		do
			e.insert(t === i ? "." + r : "", i, e.sheet, !0), i = i.next;
		while (i !== void 0);
	}
};
//#endregion
//#region node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.esm.js
function Ft(e, t) {
	if (e.inserted[t.name] === void 0) return e.insert("", t, e.sheet, !0);
}
function It(e, t, n) {
	var r = [], i = Mt(e, r, n);
	return r.length < 2 ? n : i + t(r);
}
var Lt = function(e) {
	var t = yt(e);
	t.sheet.speedy = function(e) {
		this.isSpeedy = e;
	}, t.compat = !0;
	var n = function() {
		var e = jt([...arguments], t.registered, void 0);
		return Pt(t, e, !1), t.key + "-" + e.name;
	};
	return {
		css: n,
		cx: function() {
			var e = [...arguments];
			return It(t.registered, n, Rt(e));
		},
		injectGlobal: function() {
			Ft(t, jt([...arguments], t.registered));
		},
		keyframes: function() {
			var e = jt([...arguments], t.registered), n = "animation-" + e.name;
			return Ft(t, {
				name: e.name,
				styles: "@keyframes " + n + "{" + e.styles + "}"
			}), n;
		},
		hydrate: function(e) {
			e.forEach(function(e) {
				t.inserted[e] = !0;
			});
		},
		flush: function() {
			t.registered = {}, t.inserted = {}, t.sheet.flush();
		},
		sheet: t.sheet,
		cache: t,
		getRegisteredStyles: Mt.bind(null, t.registered),
		merge: It.bind(null, t.registered, n)
	};
}, Rt = function e(t) {
	for (var n = "", r = 0; r < t.length; r++) {
		var i = t[r];
		if (i != null) {
			var a = void 0;
			switch (typeof i) {
				case "boolean": break;
				case "object":
					if (Array.isArray(i)) a = e(i);
					else for (var o in a = "", i) i[o] && o && (a && (a += " "), a += o);
					break;
				default: a = i;
			}
			a && (n && (n += " "), n += a);
		}
	}
	return n;
}, G = Lt({ key: "css" });
G.flush, G.hydrate, G.cx, G.merge, G.getRegisteredStyles;
var zt = G.injectGlobal;
G.keyframes;
var K = G.css;
G.sheet, G.cache;
//#endregion
//#region node_modules/throttle-debounce/esm/index.js
function Bt(e, t, n) {
	var r = n || {}, i = r.noTrailing, a = i !== void 0 && i, o = r.noLeading, s = o !== void 0 && o, c = r.debounceMode, l = c === void 0 ? void 0 : c, u, d = !1, f = 0;
	function p() {
		u && clearTimeout(u);
	}
	function m(e) {
		var t = (e || {}).upcomingOnly, n = t !== void 0 && t;
		p(), d = !n;
	}
	function h() {
		var n = [...arguments], r = this, i = Date.now() - f;
		if (d) return;
		function o() {
			f = Date.now(), t.apply(r, n);
		}
		function c() {
			u = void 0;
		}
		!s && l && !u && o(), p(), l === void 0 && i > e ? s ? (f = Date.now(), a || (u = setTimeout(l ? c : o, e))) : o() : a !== !0 && (u = setTimeout(l ? c : o, l === void 0 ? e - i : e));
	}
	return h.cancel = m, h;
}
//#endregion
//#region node_modules/@unovis/ts/utils/data.js
var Vt = (e) => typeof e == "number", Ht = (e) => typeof e == "function", Ut = (e) => e === void 0, Wt = (e) => typeof e == "string", Gt = (e) => Array.isArray(e), Kt = (e) => e instanceof Object, qt = (e) => e.constructor.name !== "Function" && e.constructor.name !== "Object", Jt = (e) => Kt(e) && !Gt(e) && !Ht(e) && !qt(e), Yt = (e, t, n = [], r = /* @__PURE__ */ new Set()) => {
	if (Array.isArray(e)) {
		if (!Array.isArray(t) || e.length !== t.length) return !1;
		if (r.has(e)) return !0;
		r.add(e);
		for (let i = 0; i < e.length; i++) if (!Yt(e[i], t[i], n, r)) return !1;
		return !0;
	}
	if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
	if (typeof e == "object" && e && t !== null) {
		if (typeof t != "object") return !1;
		if (e === t) return !0;
		let i = Object.keys(e).filter((e) => !n.includes(e)), a = Object.keys(t).filter((e) => !n.includes(e));
		if (i.length !== a.length) return !1;
		if (r.has(e)) return !0;
		r.add(e);
		for (let a of i) if (!Yt(e[a], t[a], n, r)) return !1;
		return !0;
	}
	return e === t;
}, Xt = (e, ...t) => e.filter((e) => !t.includes(e)), Zt = (e, t = /* @__PURE__ */ new Map()) => {
	if (typeof e != "object" || !e) return e;
	if (e instanceof Date) return new Date(e.getTime());
	if (e instanceof Array) {
		let n = [];
		t.set(e, n);
		for (let r of e) n.push(t.has(r) ? t.get(r) : Zt(r, t));
		return n;
	}
	if (qt(e)) return e;
	if (e instanceof Object) {
		let n = {};
		t.set(e, n);
		let r = e;
		return Object.keys(e).reduce((e, n) => (e[n] = t.has(r[n]) ? t.get(r[n]) : Zt(r[n], t), e), n), n;
	}
	return e;
}, Qt = (e, t, n = /* @__PURE__ */ new Map()) => {
	if (!e || !t || e === t) return e;
	let r = qt(e) ? e : Zt(e);
	return n.has(t) ? n.get(t) : (n.set(t, r), Object.keys(t).forEach((i) => {
		i !== "__proto__" && i !== "constructor" && (Jt(e[i]) && Jt(t[i]) ? r[i] = Qt(e[i], t[i], n) : qt(t) ? r[i] = t : r[i] = Zt(t[i]));
	}), r);
}, $t = (e, t) => e.reduce((e, n, r, i, a = t(n, r)) => ((e[a] || (e[a] = [])).push(n), e), {}), en = (e, t, n) => Bt(t, e, n);
function tn(e, t, n) {
	return Ht(t) ? t(e, n) : t;
}
function nn(e, t, n) {
	return tn(e, t, n);
}
function q(e, t, n) {
	return tn(e, t, n);
}
function rn(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
//#endregion
//#region node_modules/d3-shape/src/arc.js
function an(e) {
	return e.innerRadius;
}
function on(e) {
	return e.outerRadius;
}
function sn(e) {
	return e.startAngle;
}
function cn(e) {
	return e.endAngle;
}
function ln(e) {
	return e && e.padAngle;
}
function un(e, t, n, r, i, a, o, s) {
	var c = n - e, l = r - t, u = o - i, d = s - a, f = d * c - u * l;
	if (!(f * f < 1e-12)) return f = (u * (t - a) - d * (e - i)) / f, [e + f * c, t + f * l];
}
function dn(e, t, n, r, i, a, o) {
	var s = e - n, c = t - r, l = (o ? a : -a) / g(s * s + c * c), u = l * c, d = -l * s, f = e + u, p = t + d, h = n + u, _ = r + d, v = (f + h) / 2, y = (p + _) / 2, b = h - f, x = _ - p, S = b * b + x * x, C = i - a, w = f * _ - h * p, T = (x < 0 ? -1 : 1) * g(m(0, C * C * S - w * w)), E = (w * x - b * T) / S, D = (-w * b - x * T) / S, O = (w * x + b * T) / S, ee = (-w * b + x * T) / S, te = E - v, ne = D - y, re = O - v, ie = ee - y;
	return te * te + ne * ne > re * re + ie * ie && (E = O, D = ee), {
		cx: E,
		cy: D,
		x01: -u,
		y01: -d,
		x11: E * (i / C - 1),
		y11: D * (i / C - 1)
	};
}
function fn() {
	var e = an, t = on, n = d(0), r = null, i = sn, a = cn, o = ln, s = null, c = D(l);
	function l() {
		var l, u, d = +e.apply(this, arguments), f = +t.apply(this, arguments), m = i.apply(this, arguments) - S, T = a.apply(this, arguments) - S, E = C(T - m), D = T > m;
		if (s ||= l = c(), f < d && (u = f, f = d, d = u), !(f > 1e-12)) s.moveTo(0, 0);
		else if (E > b - 1e-12) s.moveTo(f * p(m), f * h(m)), s.arc(0, 0, f, m, T, !D), d > 1e-12 && (s.moveTo(d * p(T), d * h(T)), s.arc(0, 0, d, T, m, D));
		else {
			var O = m, ee = T, te = m, ne = T, re = E, ie = E, ae = o.apply(this, arguments) / 2, oe = ae > 1e-12 && (r ? +r.apply(this, arguments) : g(d * d + f * f)), se = v(C(f - d) / 2, +n.apply(this, arguments)), k = se, A = se, j, M;
			if (oe > 1e-12) {
				var ce = x(oe / d * h(ae)), le = x(oe / f * h(ae));
				(re -= ce * 2) > 1e-12 ? (ce *= D ? 1 : -1, te += ce, ne -= ce) : (re = 0, te = ne = (m + T) / 2), (ie -= le * 2) > 1e-12 ? (le *= D ? 1 : -1, O += le, ee -= le) : (ie = 0, O = ee = (m + T) / 2);
			}
			var ue = f * p(O), de = f * h(O), fe = d * p(ne), N = d * h(ne);
			if (se > 1e-12) {
				var pe = f * p(ee), me = f * h(ee), he = d * p(te), ge = d * h(te), P;
				if (E < w) if (P = un(ue, de, he, ge, pe, me, fe, N)) {
					var _e = ue - P[0], F = de - P[1], ve = pe - P[0], I = me - P[1], ye = 1 / h(y((_e * ve + F * I) / (g(_e * _e + F * F) * g(ve * ve + I * I))) / 2), be = g(P[0] * P[0] + P[1] * P[1]);
					k = v(se, (d - be) / (ye - 1)), A = v(se, (f - be) / (ye + 1));
				} else k = A = 0;
			}
			ie > 1e-12 ? A > 1e-12 ? (j = dn(he, ge, ue, de, f, A, D), M = dn(pe, me, fe, N, f, A, D), s.moveTo(j.cx + j.x01, j.cy + j.y01), A < se ? s.arc(j.cx, j.cy, A, _(j.y01, j.x01), _(M.y01, M.x01), !D) : (s.arc(j.cx, j.cy, A, _(j.y01, j.x01), _(j.y11, j.x11), !D), s.arc(0, 0, f, _(j.cy + j.y11, j.cx + j.x11), _(M.cy + M.y11, M.cx + M.x11), !D), s.arc(M.cx, M.cy, A, _(M.y11, M.x11), _(M.y01, M.x01), !D))) : (s.moveTo(ue, de), s.arc(0, 0, f, O, ee, !D)) : s.moveTo(ue, de), !(d > 1e-12) || !(re > 1e-12) ? s.lineTo(fe, N) : k > 1e-12 ? (j = dn(fe, N, pe, me, d, -k, D), M = dn(ue, de, he, ge, d, -k, D), s.lineTo(j.cx + j.x01, j.cy + j.y01), k < se ? s.arc(j.cx, j.cy, k, _(j.y01, j.x01), _(M.y01, M.x01), !D) : (s.arc(j.cx, j.cy, k, _(j.y01, j.x01), _(j.y11, j.x11), !D), s.arc(0, 0, d, _(j.cy + j.y11, j.cx + j.x11), _(M.cy + M.y11, M.cx + M.x11), D), s.arc(M.cx, M.cy, k, _(M.y11, M.x11), _(M.y01, M.x01), !D))) : s.arc(0, 0, d, ne, te, D);
		}
		if (s.closePath(), l) return s = null, l + "" || null;
	}
	return l.centroid = function() {
		var n = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, r = (+i.apply(this, arguments) + +a.apply(this, arguments)) / 2 - w / 2;
		return [p(r) * n, h(r) * n];
	}, l.innerRadius = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : d(+t), l) : e;
	}, l.outerRadius = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : d(+e), l) : t;
	}, l.cornerRadius = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : d(+e), l) : n;
	}, l.padRadius = function(e) {
		return arguments.length ? (r = e == null ? null : typeof e == "function" ? e : d(+e), l) : r;
	}, l.startAngle = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : d(+e), l) : i;
	}, l.endAngle = function(e) {
		return arguments.length ? (a = typeof e == "function" ? e : d(+e), l) : a;
	}, l.padAngle = function(e) {
		return arguments.length ? (o = typeof e == "function" ? e : d(+e), l) : o;
	}, l.context = function(e) {
		return arguments.length ? (s = e ?? null, l) : s;
	}, l;
}
//#endregion
//#region node_modules/d3-shape/src/line.js
function pn(e, t) {
	var n = d(!0), r = null, i = N, a = null, o = D(s);
	e = typeof e == "function" ? e : e === void 0 ? O : d(e), t = typeof t == "function" ? t : t === void 0 ? E : d(t);
	function s(s) {
		var c, l = (s = f(s)).length, u, d = !1, p;
		for (r ?? (a = i(p = o())), c = 0; c <= l; ++c) !(c < l && n(u = s[c], c, s)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(u, c, s), +t(u, c, s));
		if (p) return a = null, p + "" || null;
	}
	return s.x = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : d(+t), s) : e;
	}, s.y = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : d(+e), s) : t;
	}, s.defined = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : d(!!e), s) : n;
	}, s.curve = function(e) {
		return arguments.length ? (i = e, r != null && (a = i(r)), s) : i;
	}, s.context = function(e) {
		return arguments.length ? (e == null ? r = a = null : a = i(r = e), s) : r;
	}, s;
}
//#endregion
//#region node_modules/d3-shape/src/area.js
function mn(e, t, n) {
	var r = null, i = d(!0), a = null, o = N, s = null, c = D(l);
	e = typeof e == "function" ? e : e === void 0 ? O : d(+e), t = typeof t == "function" ? t : d(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? E : d(+n);
	function l(l) {
		var u, d, p, m = (l = f(l)).length, h, g = !1, _, v = Array(m), y = Array(m);
		for (a ?? (s = o(_ = c())), u = 0; u <= m; ++u) {
			if (!(u < m && i(h = l[u], u, l)) === g) if (g = !g) d = u, s.areaStart(), s.lineStart();
			else {
				for (s.lineEnd(), s.lineStart(), p = u - 1; p >= d; --p) s.point(v[p], y[p]);
				s.lineEnd(), s.areaEnd();
			}
			g && (v[u] = +e(h, u, l), y[u] = +t(h, u, l), s.point(r ? +r(h, u, l) : v[u], n ? +n(h, u, l) : y[u]));
		}
		if (_) return s = null, _ + "" || null;
	}
	function u() {
		return pn().defined(i).curve(o).context(a);
	}
	return l.x = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : d(+t), r = null, l) : e;
	}, l.x0 = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : d(+t), l) : e;
	}, l.x1 = function(e) {
		return arguments.length ? (r = e == null ? null : typeof e == "function" ? e : d(+e), l) : r;
	}, l.y = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : d(+e), n = null, l) : t;
	}, l.y0 = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : d(+e), l) : t;
	}, l.y1 = function(e) {
		return arguments.length ? (n = e == null ? null : typeof e == "function" ? e : d(+e), l) : n;
	}, l.lineX0 = l.lineY0 = function() {
		return u().x(e).y(t);
	}, l.lineY1 = function() {
		return u().x(e).y(n);
	}, l.lineX1 = function() {
		return u().x(r).y(t);
	}, l.defined = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : d(!!e), l) : i;
	}, l.curve = function(e) {
		return arguments.length ? (o = e, a != null && (s = o(a)), l) : o;
	}, l.context = function(e) {
		return arguments.length ? (e == null ? a = s = null : s = o(a = e), l) : a;
	}, l;
}
//#endregion
//#region node_modules/d3-shape/src/descending.js
function hn(e, t) {
	return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-shape/src/identity.js
function gn(e) {
	return e;
}
//#endregion
//#region node_modules/d3-shape/src/pie.js
function _n() {
	var e = gn, t = hn, n = null, r = d(0), i = d(b), a = d(0);
	function o(o) {
		var s, c = (o = f(o)).length, l, u, d = 0, p = Array(c), m = Array(c), h = +r.apply(this, arguments), g = Math.min(b, Math.max(-b, i.apply(this, arguments) - h)), _, v = Math.min(Math.abs(g) / c, a.apply(this, arguments)), y = v * (g < 0 ? -1 : 1), x;
		for (s = 0; s < c; ++s) (x = m[p[s] = s] = +e(o[s], s, o)) > 0 && (d += x);
		for (t == null ? n != null && p.sort(function(e, t) {
			return n(o[e], o[t]);
		}) : p.sort(function(e, n) {
			return t(m[e], m[n]);
		}), s = 0, u = d ? (g - c * y) / d : 0; s < c; ++s, h = _) l = p[s], x = m[l], _ = h + (x > 0 ? x * u : 0) + y, m[l] = {
			data: o[l],
			index: s,
			value: x,
			startAngle: h,
			endAngle: _,
			padAngle: v
		};
		return m;
	}
	return o.value = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : d(+t), o) : e;
	}, o.sortValues = function(e) {
		return arguments.length ? (t = e, n = null, o) : t;
	}, o.sort = function(e) {
		return arguments.length ? (n = e, t = null, o) : n;
	}, o.startAngle = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : d(+e), o) : r;
	}, o.endAngle = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : d(+e), o) : i;
	}, o.padAngle = function(e) {
		return arguments.length ? (a = typeof e == "function" ? e : d(+e), o) : a;
	}, o;
}
//#endregion
//#region node_modules/d3-shape/src/curve/radial.js
var vn = bn(N);
function yn(e) {
	this._curve = e;
}
yn.prototype = {
	areaStart: function() {
		this._curve.areaStart();
	},
	areaEnd: function() {
		this._curve.areaEnd();
	},
	lineStart: function() {
		this._curve.lineStart();
	},
	lineEnd: function() {
		this._curve.lineEnd();
	},
	point: function(e, t) {
		this._curve.point(t * Math.sin(e), t * -Math.cos(e));
	}
};
function bn(e) {
	function t(t) {
		return new yn(e(t));
	}
	return t._curve = e, t;
}
//#endregion
//#region node_modules/d3-shape/src/lineRadial.js
function xn(e) {
	var t = e.curve;
	return e.angle = e.x, delete e.x, e.radius = e.y, delete e.y, e.curve = function(e) {
		return arguments.length ? t(bn(e)) : t()._curve;
	}, e;
}
//#endregion
//#region node_modules/d3-shape/src/areaRadial.js
function Sn() {
	var e = mn().curve(vn), t = e.curve, n = e.lineX0, r = e.lineX1, i = e.lineY0, a = e.lineY1;
	return e.angle = e.x, delete e.x, e.startAngle = e.x0, delete e.x0, e.endAngle = e.x1, delete e.x1, e.radius = e.y, delete e.y, e.innerRadius = e.y0, delete e.y0, e.outerRadius = e.y1, delete e.y1, e.lineStartAngle = function() {
		return xn(n());
	}, delete e.lineX0, e.lineEndAngle = function() {
		return xn(r());
	}, delete e.lineX1, e.lineInnerRadius = function() {
		return xn(i());
	}, delete e.lineY0, e.lineOuterRadius = function() {
		return xn(a());
	}, delete e.lineY1, e.curve = function(e) {
		return arguments.length ? t(bn(e)) : t()._curve;
	}, e;
}
//#endregion
//#region node_modules/d3-hierarchy/src/treemap/round.js
function Cn(e) {
	e.x0 = Math.round(e.x0), e.y0 = Math.round(e.y0), e.x1 = Math.round(e.x1), e.y1 = Math.round(e.y1);
}
//#endregion
//#region node_modules/d3-hierarchy/src/treemap/dice.js
function wn(e, t, n, r, i) {
	for (var a = e.children, o, s = -1, c = a.length, l = e.value && (r - t) / e.value; ++s < c;) o = a[s], o.y0 = n, o.y1 = i, o.x0 = t, o.x1 = t += o.value * l;
}
//#endregion
//#region node_modules/d3-hierarchy/src/partition.js
function Tn() {
	var e = 1, t = 1, n = 0, r = !1;
	function i(i) {
		var o = i.height + 1;
		return i.x0 = i.y0 = n, i.x1 = e, i.y1 = t / o, i.eachBefore(a(t, o)), r && i.eachBefore(Cn), i;
	}
	function a(e, t) {
		return function(r) {
			r.children && wn(r, r.x0, e * (r.depth + 1) / t, r.x1, e * (r.depth + 2) / t);
			var i = r.x0, a = r.y0, o = r.x1 - n, s = r.y1 - n;
			o < i && (i = o = (i + o) / 2), s < a && (a = s = (a + s) / 2), r.x0 = i, r.y0 = a, r.x1 = o, r.y1 = s;
		};
	}
	return i.round = function(e) {
		return arguments.length ? (r = !!e, i) : r;
	}, i.size = function(n) {
		return arguments.length ? (e = +n[0], t = +n[1], i) : [e, t];
	}, i.padding = function(e) {
		return arguments.length ? (n = +e, i) : n;
	}, i;
}
//#endregion
//#region node_modules/@unovis/ts/types/component.js
var En;
(function(e) {
	e[e.SVG = 0] = "SVG", e[e.HTML = 1] = "HTML";
})(En ||= {});
var J;
(function(e) {
	e.Fit = "fit", e.Extend = "extend", e.FitWidth = "fit_width";
})(J ||= {});
//#endregion
//#region node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js
var Dn = [], On = function() {
	return Dn.some(function(e) {
		return e.activeTargets.length > 0;
	});
}, kn = function() {
	return Dn.some(function(e) {
		return e.skippedTargets.length > 0;
	});
}, An = "ResizeObserver loop completed with undelivered notifications.", jn = function() {
	var e;
	typeof ErrorEvent == "function" ? e = new ErrorEvent("error", { message: An }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = An), window.dispatchEvent(e);
}, Mn;
(function(e) {
	e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Mn ||= {});
//#endregion
//#region node_modules/@juggle/resize-observer/lib/utils/freeze.js
var Nn = function(e) {
	return Object.freeze(e);
}, Pn = function() {
	function e(e, t) {
		this.inlineSize = e, this.blockSize = t, Nn(this);
	}
	return e;
}(), Fn = function() {
	function e(e, t, n, r) {
		return this.x = e, this.y = t, this.width = n, this.height = r, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Nn(this);
	}
	return e.prototype.toJSON = function() {
		var e = this;
		return {
			x: e.x,
			y: e.y,
			top: e.top,
			right: e.right,
			bottom: e.bottom,
			left: e.left,
			width: e.width,
			height: e.height
		};
	}, e.fromRect = function(t) {
		return new e(t.x, t.y, t.width, t.height);
	}, e;
}(), In = function(e) {
	return e instanceof SVGElement && "getBBox" in e;
}, Ln = function(e) {
	if (In(e)) {
		var t = e.getBBox(), n = t.width, r = t.height;
		return !n && !r;
	}
	var i = e, a = i.offsetWidth, o = i.offsetHeight;
	return !(a || o || e.getClientRects().length);
}, Rn = function(e) {
	if (e instanceof Element) return !0;
	var t = e?.ownerDocument?.defaultView;
	return !!(t && e instanceof t.Element);
}, zn = function(e) {
	switch (e.tagName) {
		case "INPUT": if (e.type !== "image") break;
		case "VIDEO":
		case "AUDIO":
		case "EMBED":
		case "OBJECT":
		case "CANVAS":
		case "IFRAME":
		case "IMG": return !0;
	}
	return !1;
}, Bn = typeof window < "u" ? window : {}, Vn = /* @__PURE__ */ new WeakMap(), Hn = /auto|scroll/, Un = /^tb|vertical/, Wn = /msie|trident/i.test(Bn.navigator && Bn.navigator.userAgent), Y = function(e) {
	return parseFloat(e || "0");
}, Gn = function(e, t, n) {
	return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new Pn((n ? t : e) || 0, (n ? e : t) || 0);
}, Kn = Nn({
	devicePixelContentBoxSize: Gn(),
	borderBoxSize: Gn(),
	contentBoxSize: Gn(),
	contentRect: new Fn(0, 0, 0, 0)
}), qn = function(e, t) {
	if (t === void 0 && (t = !1), Vn.has(e) && !t) return Vn.get(e);
	if (Ln(e)) return Vn.set(e, Kn), Kn;
	var n = getComputedStyle(e), r = In(e) && e.ownerSVGElement && e.getBBox(), i = !Wn && n.boxSizing === "border-box", a = Un.test(n.writingMode || ""), o = !r && Hn.test(n.overflowY || ""), s = !r && Hn.test(n.overflowX || ""), c = r ? 0 : Y(n.paddingTop), l = r ? 0 : Y(n.paddingRight), u = r ? 0 : Y(n.paddingBottom), d = r ? 0 : Y(n.paddingLeft), f = r ? 0 : Y(n.borderTopWidth), p = r ? 0 : Y(n.borderRightWidth), m = r ? 0 : Y(n.borderBottomWidth), h = r ? 0 : Y(n.borderLeftWidth), g = d + l, _ = c + u, v = h + p, y = f + m, b = s ? e.offsetHeight - y - e.clientHeight : 0, x = o ? e.offsetWidth - v - e.clientWidth : 0, S = i ? g + v : 0, C = i ? _ + y : 0, w = r ? r.width : Y(n.width) - S - x, T = r ? r.height : Y(n.height) - C - b, E = w + g + x + v, D = T + _ + b + y, O = Nn({
		devicePixelContentBoxSize: Gn(Math.round(w * devicePixelRatio), Math.round(T * devicePixelRatio), a),
		borderBoxSize: Gn(E, D, a),
		contentBoxSize: Gn(w, T, a),
		contentRect: new Fn(d, c, w, T)
	});
	return Vn.set(e, O), O;
}, Jn = function(e, t, n) {
	var r = qn(e, n), i = r.borderBoxSize, a = r.contentBoxSize, o = r.devicePixelContentBoxSize;
	switch (t) {
		case Mn.DEVICE_PIXEL_CONTENT_BOX: return o;
		case Mn.BORDER_BOX: return i;
		default: return a;
	}
}, Yn = function() {
	function e(e) {
		var t = qn(e);
		this.target = e, this.contentRect = t.contentRect, this.borderBoxSize = Nn([t.borderBoxSize]), this.contentBoxSize = Nn([t.contentBoxSize]), this.devicePixelContentBoxSize = Nn([t.devicePixelContentBoxSize]);
	}
	return e;
}(), Xn = function(e) {
	if (Ln(e)) return Infinity;
	for (var t = 0, n = e.parentNode; n;) t += 1, n = n.parentNode;
	return t;
}, Zn = function() {
	var e = Infinity, t = [];
	Dn.forEach(function(n) {
		if (n.activeTargets.length !== 0) {
			var r = [];
			n.activeTargets.forEach(function(t) {
				var n = new Yn(t.target), i = Xn(t.target);
				r.push(n), t.lastReportedSize = Jn(t.target, t.observedBox), i < e && (e = i);
			}), t.push(function() {
				n.callback.call(n.observer, r, n.observer);
			}), n.activeTargets.splice(0, n.activeTargets.length);
		}
	});
	for (var n = 0, r = t; n < r.length; n++) {
		var i = r[n];
		i();
	}
	return e;
}, Qn = function(e) {
	Dn.forEach(function(t) {
		t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(n) {
			n.isActive() && (Xn(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n));
		});
	});
}, $n = function() {
	var e = 0;
	for (Qn(e); On();) e = Zn(), Qn(e);
	return kn() && jn(), e > 0;
}, er, tr = [], nr = function() {
	return tr.splice(0).forEach(function(e) {
		return e();
	});
}, rr = function(e) {
	if (!er) {
		var t = 0, n = document.createTextNode("");
		new MutationObserver(function() {
			return nr();
		}).observe(n, { characterData: !0 }), er = function() {
			n.textContent = `${t ? t-- : t++}`;
		};
	}
	tr.push(e), er();
}, ir = function(e) {
	rr(function() {
		requestAnimationFrame(e);
	});
}, ar = 0, or = function() {
	return !!ar;
}, sr = 250, cr = {
	attributes: !0,
	characterData: !0,
	childList: !0,
	subtree: !0
}, lr = [
	"resize",
	"load",
	"transitionend",
	"animationend",
	"animationstart",
	"animationiteration",
	"keyup",
	"keydown",
	"mouseup",
	"mousedown",
	"mouseover",
	"mouseout",
	"blur",
	"focus"
], ur = function(e) {
	return e === void 0 && (e = 0), Date.now() + e;
}, dr = !1, fr = new (function() {
	function e() {
		var e = this;
		this.stopped = !0, this.listener = function() {
			return e.schedule();
		};
	}
	return e.prototype.run = function(e) {
		var t = this;
		if (e === void 0 && (e = sr), !dr) {
			dr = !0;
			var n = ur(e);
			ir(function() {
				var r = !1;
				try {
					r = $n();
				} finally {
					if (dr = !1, e = n - ur(), !or()) return;
					r ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
				}
			});
		}
	}, e.prototype.schedule = function() {
		this.stop(), this.run();
	}, e.prototype.observe = function() {
		var e = this, t = function() {
			return e.observer && e.observer.observe(document.body, cr);
		};
		document.body ? t() : Bn.addEventListener("DOMContentLoaded", t);
	}, e.prototype.start = function() {
		var e = this;
		this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), lr.forEach(function(t) {
			return Bn.addEventListener(t, e.listener, !0);
		}));
	}, e.prototype.stop = function() {
		var e = this;
		this.stopped ||= (this.observer && this.observer.disconnect(), lr.forEach(function(t) {
			return Bn.removeEventListener(t, e.listener, !0);
		}), !0);
	}, e;
}())(), pr = function(e) {
	!ar && e > 0 && fr.start(), ar += e, !ar && fr.stop();
}, mr = function(e) {
	return !In(e) && !zn(e) && getComputedStyle(e).display === "inline";
}, hr = function() {
	function e(e, t) {
		this.target = e, this.observedBox = t || Mn.CONTENT_BOX, this.lastReportedSize = {
			inlineSize: 0,
			blockSize: 0
		};
	}
	return e.prototype.isActive = function() {
		var e = Jn(this.target, this.observedBox, !0);
		return mr(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize;
	}, e;
}(), gr = function() {
	function e(e, t) {
		this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e, this.callback = t;
	}
	return e;
}(), _r = /* @__PURE__ */ new WeakMap(), vr = function(e, t) {
	for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
	return -1;
}, yr = function() {
	function e() {}
	return e.connect = function(e, t) {
		var n = new gr(e, t);
		_r.set(e, n);
	}, e.observe = function(e, t, n) {
		var r = _r.get(e), i = r.observationTargets.length === 0;
		vr(r.observationTargets, t) < 0 && (i && Dn.push(r), r.observationTargets.push(new hr(t, n && n.box)), pr(1), fr.schedule());
	}, e.unobserve = function(e, t) {
		var n = _r.get(e), r = vr(n.observationTargets, t), i = n.observationTargets.length === 1;
		r >= 0 && (i && Dn.splice(Dn.indexOf(n), 1), n.observationTargets.splice(r, 1), pr(-1));
	}, e.disconnect = function(e) {
		var t = this, n = _r.get(e);
		n.observationTargets.slice().forEach(function(n) {
			return t.unobserve(e, n.target);
		}), n.activeTargets.splice(0, n.activeTargets.length);
	}, e;
}(), br = function() {
	function e(e) {
		if (arguments.length === 0) throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
		if (typeof e != "function") throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
		yr.connect(this, e);
	}
	return e.prototype.observe = function(e, t) {
		if (arguments.length === 0) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
		if (!Rn(e)) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
		yr.observe(this, e, t);
	}, e.prototype.unobserve = function(e) {
		if (arguments.length === 0) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
		if (!Rn(e)) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
		yr.unobserve(this, e);
	}, e.prototype.disconnect = function() {
		yr.disconnect(this);
	}, e.toString = function() {
		return "function ResizeObserver () { [polyfill code] }";
	}, e;
}(), xr = globalThis.ResizeObserver || br, Sr = {
	duration: void 0,
	margin: {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	},
	padding: {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	},
	sizing: J.Fit,
	width: void 0,
	height: void 0,
	svgDefs: void 0,
	ariaLabel: void 0
}, Cr = class e {
	constructor(t) {
		this._defaultConfig = Sr, this._isFirstRender = !0, this._renderAnimationFrameId = null, this._container = t;
		let n = c(this._container);
		n.attr("role", "figure"), this.svg = n.append("svg").style("display", "block").attr("xmlns", "http://www.w3.org/2000/svg").attr("height", e.DEFAULT_CONTAINER_HEIGHT).attr("aria-hidden", !0), this._svgDefs = this.svg.append("defs"), this._svgDefsExternal = this.svg.append("defs"), this.element = this.svg.node();
	}
	updateContainer(e) {
		this.prevConfig = this.config, this.config = Qt(this._defaultConfig, e), e?.svgDefs !== this.prevConfig?.svgDefs && (this._svgDefsExternal.selectAll("*").remove(), this._svgDefsExternal.html(e.svgDefs));
	}
	_preRender() {}
	_render(e) {
		let { config: t } = this;
		c(this._container).attr("aria-label", t.ariaLabel), this._isFirstRender = !1;
	}
	render(e = this.config.duration) {
		let t = this.config.width || this.containerWidth, n = this.config.height || this.containerHeight;
		this.svg.attr("width", t).attr("height", n), this._resizeObserver || this._setUpResizeObserver(), cancelAnimationFrame(this._renderAnimationFrameId), this._renderAnimationFrameId = requestAnimationFrame(() => {
			this._preRender(), this._render(e);
		});
	}
	get containerWidth() {
		return this.config.width ? this.element.clientWidth : this._container.clientWidth || this._container.getBoundingClientRect().width;
	}
	get containerHeight() {
		return this.config.height ? this.element.clientHeight : this._container.clientHeight || this._container.getBoundingClientRect().height || e.DEFAULT_CONTAINER_HEIGHT;
	}
	get width() {
		return rn(this.containerWidth - this.config.margin.left - this.config.margin.right, 0, Infinity);
	}
	get height() {
		return rn(this.containerHeight - this.config.margin.top - this.config.margin.bottom, 0, Infinity);
	}
	_removeAllChildren() {
		for (; this.element.firstChild;) this.element.removeChild(this.element.firstChild);
	}
	_onResize() {
		let { config: e } = this;
		(e.sizing === J.Fit || e.sizing === J.FitWidth) && this.render(0);
	}
	_setUpResizeObserver() {
		if (this._resizeObserver) return;
		let e = this._container.getBoundingClientRect();
		this._containerSize = {
			width: e.width,
			height: e.height
		}, this._resizeObserver = new xr((e, t) => {
			cancelAnimationFrame(this._resizeObserverAnimationFrameId), this._resizeObserverAnimationFrameId = requestAnimationFrame(() => {
				let e = this._container.getBoundingClientRect(), t = {
					width: e.width,
					height: e.height
				};
				!Yt(this._containerSize, t) && t.width && t.height && (this._containerSize = t, this._onResize());
			});
		}), this._resizeObserver.observe(this._container);
	}
	destroy() {
		var e;
		cancelAnimationFrame(this._renderAnimationFrameId), cancelAnimationFrame(this._resizeObserverAnimationFrameId), (e = this._resizeObserver) == null || e.disconnect(), this.svg.remove();
	}
};
Cr.DEFAULT_CONTAINER_HEIGHT = 300;
//#endregion
//#region node_modules/@unovis/ts/utils/to-px.js
function wr(e) {
	return e = String(e), [parseFloat(e), e.match(/[\d.\-+]*\s*(.*)/)?.[1] || ""];
}
function Tr() {
	return typeof window < "u" && typeof document < "u";
}
function Er(e, t) {
	let n = wr(getComputedStyle(e).getPropertyValue(t));
	return n[0] * (Ar(n[1], e) ?? 1);
}
function Dr(e, t) {
	let n = document.createElement("div");
	n.style.height = `128${e}`, t.appendChild(n);
	let r = Er(n, "height") / 128;
	return t.removeChild(n), r;
}
var Or = null;
function kr() {
	return Tr() ? (Or === null && (Or = Dr("in", document.body)), Or) : 96;
}
function Ar(e, t) {
	if (!e && e !== 0) return null;
	if (!Tr()) {
		let t = wr(String(e));
		if (!isNaN(t[0])) {
			let e = t[1]?.toLowerCase() || "px";
			if (e === "px" || e === "") return t[0];
			if (e === "em" || e === "rem") return t[0] * 16;
			if (e === "in") return t[0] * 96;
			if (e === "cm") return t[0] * (96 / 2.54);
			if (e === "mm") return t[0] * (96 / 25.4);
			if (e === "pt") return t[0] * (96 / 72);
			if (e === "pc") return t[0] * (96 / 6);
		}
		return null;
	}
	let n = document.body;
	t && t !== window && t !== document && (n = t);
	let r = (String(e) || "px").trim().toLowerCase();
	switch (r) {
		case "%": return n.clientHeight / 100;
		case "ch":
		case "ex": return Dr(r, n);
		case "em": return Er(n, "font-size");
		case "rem": return Er(document.body, "font-size");
		case "vw": return window.innerWidth / 100;
		case "vh": return window.innerHeight / 100;
		case "vmin": return Math.min(window.innerWidth, window.innerHeight) / 100;
		case "vmax": return Math.max(window.innerWidth, window.innerHeight) / 100;
		case "in": return kr();
		case "cm": return kr() / 2.54;
		case "mm": return kr() / 25.4;
		case "pt": return kr() / 72;
		case "pc": return kr() / 6;
		case "px": return 1;
	}
	let i = wr(r);
	if (!isNaN(i[0])) {
		if (i[1]) {
			let e = Ar(i[1], n);
			return typeof e == "number" ? i[0] * e : null;
		}
		return i[0];
	}
	return null;
}
//#endregion
//#region node_modules/@unovis/ts/utils/misc.js
function jr() {
	let e = () => Math.floor((1 + crypto.getRandomValues(/* @__PURE__ */ new Uint32Array(1))[0]) * 65536).toString(16).substring(1);
	return `${e() + e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`;
}
var Mr = /* @__PURE__ */ new WeakMap();
function Nr(e, t) {
	if (!Wt(e)) return "";
	let n = e.substr(4, e.length - 5), r = Mr.get(t);
	if (r || (r = /* @__PURE__ */ new Map(), Mr.set(t, r)), r.has(n)) return r.get(n);
	let i = getComputedStyle(t).getPropertyValue(n);
	return r.set(n, i), i;
}
function Pr(e, t) {
	return Ar(Nr(e, t));
}
//#endregion
//#region node_modules/@unovis/ts/utils/theme.js
var Fr = "html[data-theme=\"dark\"],html.dark-theme,body.dark-theme,html.theme-dark,body.theme-dark", Ir = (globalThis == null ? void 0 : globalThis.UNOVIS_COLORS) || [
	"#4D8CFD",
	"#FF6B7E",
	"#F4B83E",
	"#A6CC74",
	"#00C19A",
	"#6859BE"
], Lr = (globalThis == null ? void 0 : globalThis.UNOVIS_COLORS_DARK) || [
	"#4D8CFD",
	"#FF6B7E",
	"#FFC16D",
	"#A6CC74",
	"#00C19A",
	"#7887E0"
], X = (e) => `--vis-${Vt(e) ? `color${e % Ir.length}` : e}`;
function Rr(e, t = .4) {
	let n = u(e);
	return n.l *= 1 + t, n.formatHex();
}
function zr(e, t = .4, n = .6) {
	let r = u(e);
	return r.s *= 1 - n, r.l *= 1 - t, r.formatHex();
}
var Br = [
	{
		id: "stripes-diagonal",
		svg: "<path d=\"M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2\" stroke=\"#000\"/>"
	},
	{
		id: "dots",
		svg: "<path d=\"m0-1.5a1 1 0 010 3m10-3a1 1 0 000 3M5 3.5a1 1 0 010 3 1 1 0 010-3M0 8.5 a1 1 0 010 3m10-3a1 1 0 000 3\" fill\"#000\"/>"
	},
	{
		id: "stripes-vertical",
		svg: "<path d=\"M 5,-1 L5,11\" stroke=\"#000\"/>"
	},
	{
		id: "crosshatch",
		svg: "<path d=\"M0 0L10 10ZM10 0L0 10Z\" stroke=\"#000\"/>"
	},
	{
		id: "waves",
		svg: "<path d=\"M0 4Q2.5 1 5 4 7.5 7 10 4v2Q7.5 9 5 6 2.5 3 0 6Z\" fill=\"#000\"/>"
	},
	{
		id: "circles",
		svg: "<circle cx=\"5\" cy=\"5\" r=\"3\" stroke=\"#000\" fill=\"#fff\"/>"
	}
], Vr = [
	{
		id: "circle",
		marker: "<circle cx=\"5\" cy=\"5\" r=\"5\"/>",
		dashArray: []
	},
	{
		id: "triangle",
		marker: "<path d=\"M5,0 L10,9 L0,9Z\">",
		dashArray: [9, 1]
	},
	{
		id: "diamond",
		marker: "<path d=\"M 0 5 L5 0 L 10 5 L 5 10 L 0 5Z\">",
		dashArray: [2]
	},
	{
		id: "arrow",
		marker: "<path d=\"M4 0 0 0 6 5 0 10 4 10 10 5Z\">",
		dashArray: [
			2,
			3,
			8,
			3
		]
	},
	{
		id: "square",
		marker: "<rect x=\"1\" y=\"1\" width=\"8\" height=\"8\"/>",
		dashArray: [6]
	},
	{
		id: "star",
		marker: "<path d=\"m2 9 3-9 3 9L0 3h10Z\"/>",
		dashArray: [1, 6]
	}
];
function Z(e) {
	return `vis-${`pattern-${e.svg ? "fill" : "marker"}`}-${e.id}`;
}
var Hr = (e) => `<mask id="${Z(e)}">
    <pattern id="${e.id}" viewBox="0 0 10 10" width="10" height="10" patternUnits="userSpaceOnUse">
      <rect width="100%" height="100%" fill="#fff"/>
      ${e.svg}
    </pattern>
    <rect x="-50%" y="-50%" width="200%" height="200%" fill="url(#${e.id})"/>
  </mask>`, Ur = (e, t) => `<marker id="${Z(e)}"
    fill="var(${X(t)})"
    markerUnits="userSpaceOnUse"
    refX="5"
    refY="5"
    markerWidth="10"
    markerHeight="10">
    ${e.marker}
  </marker>`;
function Wr() {
	let e = Br.map(Hr).concat(Vr.map(Ur)).join(""), t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	t.setAttribute("height", "100%"), t.setAttribute("width", "100%"), t.style.position = "fixed", t.style.zIndex = "-99999999", t.innerHTML = `<defs>${e}</defs>`, document.body.appendChild(t);
}
typeof window < "u" && Wr(), globalThis != null && globalThis.UNOVIS_ICON_FONT_FAMILY;
var Gr = (globalThis == null ? void 0 : globalThis.UNOVIS_FONT_W2H_RATIO_DEFAULT) || .5;
globalThis != null && globalThis.UNOVIS_TEXT_SEPARATOR_DEFAULT, globalThis != null && globalThis.UNOVIS_TEXT_HYPHEN_CHARACTER_DEFAULT;
var Kr = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_DEFAULT) || {
	text: "",
	fontSize: 12,
	fontFamily: "var(--vis-font-family)",
	lineHeight: 1.25,
	marginTop: 0,
	marginBottom: 0
};
zt`
  :root {
    label: vis-root-styles;
    --vis-font-family: Inter, Arial, "Helvetica Neue", Helvetica, sans-serif;
    --vis-font-wh-ratio: ${Gr};
    --vis-color-main: var(${X(0)});
    --vis-color-main-light: ${Rr(Ir[0])};
    --vis-color-main-dark: ${zr(Ir[0])};
    --vis-color-grey: #2a2a2a;
    ${Ir.map((e, t) => `${X(t)}: ${e};`)}
    ${Lr.map((e, t) => `--vis-dark-color${t}: ${e};`)}
    ${Br.map((e, t) => `
      --${Z(e)}: url(#${Z(e)});
      --vis-pattern-fill${t}: var(--${Z(e)});
    `)}
    ${Vr.map((e, t) => `
      --${Z(e)}: url(#${Z(e)});
      --vis-pattern-marker${t}: var(--${Z(e)});
      --vis-pattern-dasharray${t}: ${e.dashArray?.join(" ")};
    `)}

    ${Fr} {
      ${Ir.map((e, t) => `${X(t)}: var(--vis-dark-color${t});`)}
    }

    body.theme-patterns {
      ${Br.map((e, t) => `path[style*="fill: var(${X(t)})"]  {
        mask: var(--vis-pattern-fill${t});
      }`)}
      ${Vr.map((e, t) => `
      path[stroke="var(${X(t)})"]:not([style*="fill"]),
      path[style*="stroke: var(${X(t)})"]:not([style*="fill"]) {
        marker: var(--vis-pattern-marker${t});
        stroke-dasharray: var(--vis-pattern-dasharray${t});
      }
    `)}
}
`;
function qr(e = window == null ? void 0 : window.document.body) {
	return e ? +Nr("var(--vis-font-wh-ratio)", e) : Gr;
}
//#endregion
//#region node_modules/@unovis/ts/utils/d3.js
function Jr(e, t, n) {
	if (e.nodes().forEach((e) => s(e)), t) {
		let r = e.transition().duration(t);
		return n && r.ease(n), r;
	}
	return e;
}
//#endregion
//#region node_modules/@unovis/ts/containers/single-container/config.js
var Yr = Object.assign(Object.assign({}, Sr), {
	tooltip: void 0,
	annotations: void 0
}), Xr = class extends Cr {
	constructor(e, t, n) {
		super(e), this._defaultConfig = Yr, this.config = this._defaultConfig, t && (this.updateContainer(t, !0), this.component = t.component), n && this.setData(n, !0), this.component?.datamodel.data && this.render();
	}
	setData(e, t) {
		var n;
		let { config: r } = this;
		this.component && this.component.setData(e), t || this.render(), (n = r.tooltip) == null || n.hide();
	}
	updateContainer(e, t) {
		super.updateContainer(e), this._removeAllChildren(), this.component = e.component, e.sizing && (this.component.sizing = e.sizing), this.element.appendChild(this.component.element);
		let n = e.tooltip;
		n && (n.hasContainer() || n.setContainer(this._container), n.setComponents([this.component]));
		let r = e.annotations;
		r && this.element.appendChild(r.element), this.element.appendChild(this._svgDefs.node()), this.element.appendChild(this._svgDefsExternal.node()), t || this.render();
	}
	updateComponent(e, t) {
		this.component.setConfig(e), t || this.render();
	}
	update(e, t, n) {
		e && this.updateContainer(e, !0), t && this.updateComponent(t, !0), n && this.setData(n, !0), this.render();
	}
	getFitWidthScale() {
		let { config: e, component: t } = this, n = t;
		if (!n.getWidth) return 1;
		let r = n.getWidth() + e.margin.left + e.margin.right;
		return this.width / r;
	}
	_preRender() {
		var e, t;
		super._preRender(), this.component.setSize(this.width, this.height, this.containerWidth, this.containerHeight), this.component.setContainerMargin(this.config.margin), (e = this.config.annotations) == null || e.setSize(this.width, this.height, this.containerWidth, this.containerHeight), (t = this.config.annotations) == null || t.setContainerMargin(this.config.margin);
	}
	_render(e) {
		var t, n;
		let { config: r, component: i } = this;
		super._render(e), i.g.attr("transform", `translate(${r.margin.left},${r.margin.top})`), i.render(e), (t = r.annotations) == null || t.render(e), r.tooltip && r.tooltip.update(), (n = r.onRenderComplete) == null || n.call(r, this.svg.node(), r.margin, this.containerWidth, this.containerHeight, this.width, this.height);
	}
	render(e = this.config.duration) {
		let { config: t, component: n } = this;
		if (t.sizing === J.Extend || t.sizing === J.FitWidth) {
			let r = t.sizing === J.FitWidth, i = n, a = i.getWidth() + t.margin.left + t.margin.right, o = i.getHeight() + t.margin.top + t.margin.bottom, s = r ? this.getFitWidthScale() : 1, c = this.svg.attr("width"), l = this.svg.attr("height"), u = a * s, d = o * s, f = c || l;
			Jr(this.svg, f ? e : 0).attr("width", u).attr("height", d).attr("viewBox", `0 0 ${a} ${r ? d : o}`).attr("preserveAspectRatio", "xMinYMin");
		} else this.svg.attr("width", this.config.width || this.containerWidth).attr("height", this.config.height || this.containerHeight);
		this._resizeObserver || this._setUpResizeObserver(), cancelAnimationFrame(this._renderAnimationFrameId), this._renderAnimationFrameId = requestAnimationFrame(() => {
			this._preRender(), this._render(e);
		});
	}
	_onResize() {
		var e;
		let { config: t } = this;
		super._onResize(), (e = t.tooltip) == null || e.hide();
	}
	destroy() {
		var e, t;
		let { component: n, config: r } = this;
		super.destroy(), n?.destroy(), (e = r.tooltip) == null || e.destroy(), (t = r.annotations) == null || t.destroy();
	}
}, Zr = class {
	constructor(e) {
		this.data = e;
	}
	get data() {
		return this._data;
	}
	set data(e) {
		this._data = e;
	}
}, Qr = {
	duration: 600,
	events: {},
	attributes: {}
}, $r = class {
	constructor(e = En.SVG) {
		this.type = En.SVG, this.datamodel = new Zr(), this.sizing = J.Fit, this.events = {}, this._defaultConfig = Qr, this._width = 400, this._height = 200, this._containerWidth = void 0, this._containerHeight = void 0, this._containerMargin = {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		}, this._setUpComponentEventsThrottled = en(this._setUpComponentEvents, 500), this._setCustomAttributesThrottled = en(this._setCustomAttributes, 500), this.element = e === En.SVG ? document.createElementNS("http://www.w3.org/2000/svg", "g") : document.createElement("div"), this.uid = jr(), this.g = c(this.element);
		let t = this.constructor?.selectors?.root;
		t && this.g.attr("class", t);
	}
	setContainerMargin(e) {
		this._containerMargin = e;
	}
	setConfig(e) {
		this.prevConfig = this.config, this.config = Qt(this._defaultConfig, e);
	}
	setData(e) {
		this.datamodel.data = e;
	}
	setSize(e, t, n, r) {
		isFinite(e) && (this._width = e), isFinite(t) && (this._height = t), isFinite(n) && (this._containerWidth = n), isFinite(r) && (this._containerHeight = r);
	}
	render(e = this.config.duration) {
		this._render(e);
		let t = "animating";
		e && (this.g.attr(t, ""), this.g.transition(t).duration(e).on("end interrupt", () => {
			this.g.attr(t, null);
		})), this._setUpComponentEventsThrottled(), this._setCustomAttributesThrottled();
	}
	get bleed() {
		return {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		};
	}
	_render(e = this.config.duration) {}
	_setCustomAttributes() {
		let e = this.config.attributes;
		Object.keys(e).forEach((t) => {
			Object.keys(e[t]).forEach((n) => {
				this.g.selectAll(`.${t}`).attr(n, e[t][n]);
			});
		});
	}
	_setUpComponentEvents() {
		this._bindEvents(this.events), this._bindEvents(this.config.events, ".user");
	}
	_mapEventDatum(e, t) {
		return {
			datum: e,
			index: t
		};
	}
	_bindEvents(e = this.events, t = "") {
		Object.keys(e).forEach((n) => {
			Object.keys(e[n]).forEach((r) => {
				let i = this.g.selectAll(`.${n}`);
				i.on(r + t, (t, a) => {
					let o = i.nodes(), s = o.indexOf(t.currentTarget), c = e[n][r], { datum: l, index: u } = this._mapEventDatum(a, s);
					return c?.(l, t, u, o);
				});
			});
		});
	}
	destroy() {
		var e;
		(e = this.g) == null || e.remove(), this.element = void 0;
	}
	isDestroyed() {
		return !this.element;
	}
};
//#endregion
//#region node_modules/d3-interpolate-path/build/d3-interpolate-path.mjs
function ei(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function ti(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ei(Object(n), !0).forEach(function(t) {
			ri(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ei(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function ni(e) {
	"@babel/helpers - typeof";
	return ni = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, ni(e);
}
function ri(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ii() {
	return ii = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, ii.apply(this, arguments);
}
function ai(e, t) {
	if (e) {
		if (typeof e == "string") return oi(e, t);
		var n = Object.prototype.toString.call(e).slice(8, -1);
		if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
		if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return oi(e, t);
	}
}
function oi(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function si(e, t) {
	var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (!n) {
		if (Array.isArray(e) || (n = ai(e)) || t && e && typeof e.length == "number") {
			n && (e = n);
			var r = 0, i = function() {};
			return {
				s: i,
				n: function() {
					return r >= e.length ? { done: !0 } : {
						done: !1,
						value: e[r++]
					};
				},
				e: function(e) {
					throw e;
				},
				f: i
			};
		}
		throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	var a = !0, o = !1, s;
	return {
		s: function() {
			n = n.call(e);
		},
		n: function() {
			var e = n.next();
			return a = e.done, e;
		},
		e: function(e) {
			o = !0, s = e;
		},
		f: function() {
			try {
				!a && n.return != null && n.return();
			} finally {
				if (o) throw s;
			}
		}
	};
}
function ci(e, t) {
	var n = [], r = [];
	function i(e, t) {
		if (e.length === 1) n.push(e[0]), r.push(e[0]);
		else {
			for (var a = Array(e.length - 1), o = 0; o < a.length; o++) o === 0 && n.push(e[0]), o === a.length - 1 && r.push(e[o + 1]), a[o] = [(1 - t) * e[o][0] + t * e[o + 1][0], (1 - t) * e[o][1] + t * e[o + 1][1]];
			i(a, t);
		}
	}
	return e.length && i(e, t), {
		left: n,
		right: r.reverse()
	};
}
function li(e) {
	var t = {};
	return e.length === 4 && (t.x2 = e[2][0], t.y2 = e[2][1]), e.length >= 3 && (t.x1 = e[1][0], t.y1 = e[1][1]), t.x = e[e.length - 1][0], t.y = e[e.length - 1][1], t.type = e.length === 4 ? "C" : e.length === 3 ? "Q" : "L", t;
}
function ui(e, t) {
	t ||= 2;
	for (var n = [], r = e, i = 1 / t, a = 0; a < t - 1; a++) {
		var o = i / (1 - i * a), s = ci(r, o);
		n.push(s.left), r = s.right;
	}
	return n.push(r), n;
}
function di(e, t, n) {
	var r = [[e.x, e.y]];
	return t.x1 != null && r.push([t.x1, t.y1]), t.x2 != null && r.push([t.x2, t.y2]), r.push([t.x, t.y]), ui(r, n).map(li);
}
var fi = /[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g, pi = {
	M: ["x", "y"],
	L: ["x", "y"],
	H: ["x"],
	V: ["y"],
	C: [
		"x1",
		"y1",
		"x2",
		"y2",
		"x",
		"y"
	],
	S: [
		"x2",
		"y2",
		"x",
		"y"
	],
	Q: [
		"x1",
		"y1",
		"x",
		"y"
	],
	T: ["x", "y"],
	A: [
		"rx",
		"ry",
		"xAxisRotation",
		"largeArcFlag",
		"sweepFlag",
		"x",
		"y"
	],
	Z: []
};
Object.keys(pi).forEach(function(e) {
	pi[e.toLowerCase()] = pi[e];
});
function mi(e, t) {
	for (var n = Array(e), r = 0; r < e; r++) n[r] = t;
	return n;
}
function hi(e) {
	return `${e.type}${pi[e.type].map(function(t) {
		return e[t];
	}).join(",")}`;
}
function gi(e, t) {
	var n = {
		x1: "x",
		y1: "y",
		x2: "x",
		y2: "y"
	}, r = [
		"xAxisRotation",
		"largeArcFlag",
		"sweepFlag"
	];
	if (e.type !== t.type && t.type.toUpperCase() !== "M") {
		var i = {};
		Object.keys(t).forEach(function(a) {
			var o = t[a], s = e[a];
			s === void 0 && (r.includes(a) ? s = o : (s === void 0 && n[a] && (s = e[n[a]]), s === void 0 && (s = 0))), i[a] = s;
		}), i.type = t.type, e = i;
	}
	return e;
}
function _i(e, t, n) {
	var r = [];
	if (t.type === "L" || t.type === "Q" || t.type === "C") r = r.concat(di(e, t, n));
	else {
		var i = ii({}, e);
		i.type === "M" && (i.type = "L"), r = r.concat(mi(n - 1).map(function() {
			return i;
		})), r.push(t);
	}
	return r;
}
function vi(e, t, n) {
	var r = e.length - 1, i = t.length - 1, a = r / i, o = mi(i).reduce(function(t, r, i) {
		var o = Math.floor(a * i);
		if (n && o < e.length - 1 && n(e[o], e[o + 1])) {
			var s = a * i % 1 < .5;
			t[o] && (s ? o > 0 ? --o : o < e.length - 1 && (o += 1) : o < e.length - 1 ? o += 1 : o > 0 && --o);
		}
		return t[o] = (t[o] || 0) + 1, t;
	}, []).reduce(function(t, n, r) {
		if (r === e.length - 1) {
			var i = mi(n, ii({}, e[e.length - 1]));
			return i[0].type === "M" && i.forEach(function(e) {
				e.type = "L";
			}), t.concat(i);
		}
		return t.concat(_i(e[r], e[r + 1], n));
	}, []);
	return o.unshift(e[0]), o;
}
function yi(e) {
	for (var t = (e || "").match(fi) || [], n = [], r, i, a = 0; a < t.length; ++a) if (r = pi[t[a]], r) {
		i = { type: t[a] };
		for (var o = 0; o < r.length; ++o) i[r[o]] = +t[a + o + 1];
		a += r.length, n.push(i);
	}
	return n;
}
function bi(e, t, n) {
	var r = e == null ? [] : e.slice(), i = t == null ? [] : t.slice(), a = ni(n) === "object" ? n : {
		excludeSegment: n,
		snapEndsToInput: !0
	}, o = a.excludeSegment, s = a.snapEndsToInput;
	if (!r.length && !i.length) return function() {
		return [];
	};
	var c = (r.length === 0 || r[r.length - 1].type === "Z") && (i.length === 0 || i[i.length - 1].type === "Z");
	r.length > 0 && r[r.length - 1].type === "Z" && r.pop(), i.length > 0 && i[i.length - 1].type === "Z" && i.pop(), r.length ? i.length || i.push(r[0]) : r.push(i[0]), Math.abs(i.length - r.length) !== 0 && (i.length > r.length ? r = vi(r, i, o) : i.length < r.length && (i = vi(i, r, o))), r = r.map(function(e, t) {
		return gi(e, i[t]);
	});
	var l = r.map(function(e) {
		return ti({}, e);
	});
	return c && (l.push({ type: "Z" }), r.push({ type: "Z" })), function(e) {
		if (e === 1 && s) return t ?? [];
		if (e === 0) return r;
		for (var n = 0; n < l.length; ++n) {
			var a = r[n], o = i[n], c = l[n], u = si(pi[c.type]), d;
			try {
				for (u.s(); !(d = u.n()).done;) {
					var f = d.value;
					c[f] = (1 - e) * a[f] + e * o[f], (f === "largeArcFlag" || f === "sweepFlag") && (c[f] = Math.round(c[f]));
				}
			} catch (e) {
				u.e(e);
			} finally {
				u.f();
			}
		}
		return l;
	};
}
function xi(e, t, n) {
	var r = yi(e), i = yi(t), a = ni(n) === "object" ? n : {
		excludeSegment: n,
		snapEndsToInput: !0
	}, o = a.excludeSegment, s = a.snapEndsToInput;
	if (!r.length && !i.length) return function() {
		return "";
	};
	var c = bi(r, i, {
		excludeSegment: o,
		snapEndsToInput: s
	});
	return function(e) {
		if (e === 1 && s) return t ?? "";
		var n = c(e), r = "", i = si(n), a;
		try {
			for (i.s(); !(a = i.n()).done;) {
				var o = a.value;
				r += hi(o);
			}
		} catch (e) {
			i.e(e);
		} finally {
			i.f();
		}
		return r;
	};
}
//#endregion
//#region node_modules/@unovis/ts/utils/color.js
function Si(e, t, n, r) {
	return Array.isArray(t) && isFinite(n) ? t[n % t.length] : nn(e, t, n) || (Vt(n) && !r ? `var(${X(n)})` : null);
}
function Ci(e) {
	let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
	return t ? {
		r: parseInt(t[1], 16),
		g: parseInt(t[2], 16),
		b: parseInt(t[3], 16)
	} : {
		r: 0,
		g: 0,
		b: 0
	};
}
function wi(e) {
	return (.2126 * e.r + .7152 * e.g + .0722 * e.b) / 255;
}
function Ti(e) {
	return wi(Ci(e));
}
//#endregion
//#region node_modules/@unovis/ts/types/curve.js
var Q;
(function(e) {
	e.Basis = "basis", e.BasisClosed = "basisClosed", e.BasisOpen = "basisOpen", e.Bundle = "bundle", e.Cardinal = "cardinal", e.CardinalClosed = "cardinalClosed", e.CardinalOpen = "cardinalOpen", e.CatmullRom = "catmullRom", e.CatmullRomClosed = "catmullRomClosed", e.CatmullRomOpen = "catmullRomOpen", e.Linear = "linear", e.LinearClosed = "linearClosed", e.MonotoneX = "monotoneX", e.MonotoneY = "monotoneY", e.Natural = "natural", e.Step = "step", e.StepAfter = "stepAfter", e.StepBefore = "stepBefore";
})(Q ||= {});
var Ei = {
	[Q.Basis]: ee,
	[Q.BasisClosed]: ae,
	[Q.BasisOpen]: oe,
	[Q.Bundle]: A,
	[Q.Cardinal]: ce,
	[Q.CardinalClosed]: ie,
	[Q.CardinalOpen]: re,
	[Q.CatmullRom]: fe,
	[Q.CatmullRomClosed]: k,
	[Q.CatmullRomOpen]: ne,
	[Q.Linear]: N,
	[Q.LinearClosed]: ue,
	[Q.MonotoneX]: te,
	[Q.MonotoneY]: M,
	[Q.Natural]: se,
	[Q.Step]: le,
	[Q.StepAfter]: de,
	[Q.StepBefore]: j
};
//#endregion
//#region node_modules/@unovis/ts/utils/path.js
function Di(e, t) {
	return e.toString().replace(/L(?<x>-?\d*\.?\d*),(?<y>-?\d+\.?\d*)/gm, (e, n, r) => `A ${t} ${t} 0 0 0 ${n} ${r}`);
}
//#endregion
//#region node_modules/@unovis/ts/types/text.js
var Oi;
(function(e) {
	e.Start = "start", e.Middle = "middle", e.End = "end";
})(Oi ||= {});
var ki;
(function(e) {
	e.Top = "top", e.Middle = "middle", e.Bottom = "bottom";
})(ki ||= {});
var Ai;
(function(e) {
	e.Wrap = "wrap", e.Trim = "trim";
})(Ai ||= {});
var ji;
(function(e) {
	e.Left = "left", e.Center = "center", e.Right = "right";
})(ji ||= {}), (/* @__PURE__ */ r(((e, t) => {
	(function(e) {
		if (typeof n != "function") {
			var n = function(e) {
				return e;
			};
			n.nonNative = !0;
		}
		let r = n("plaintext"), i = n("html"), a = n("comment"), o = /<(\w*)>/g, s = /<\/?([^\s\/>]+)/;
		function c(e, t, n) {
			e ||= "", t ||= [], n ||= "";
			let r = u(t, n);
			return d(e, r);
		}
		function l(e, t) {
			e ||= [], t ||= "";
			let n = u(e, t);
			return function(e) {
				return d(e || "", n);
			};
		}
		c.init_streaming_mode = l;
		function u(e, t) {
			return e = f(e), {
				allowable_tags: e,
				tag_replacement: t,
				state: r,
				tag_buffer: "",
				depth: 0,
				in_quote_char: ""
			};
		}
		function d(e, t) {
			if (typeof e != "string") throw TypeError("'html' parameter must be a string");
			let n = t.allowable_tags, o = t.tag_replacement, s = t.state, c = t.tag_buffer, l = t.depth, u = t.in_quote_char, d = "";
			for (let t = 0, f = e.length; t < f; t++) {
				let f = e[t];
				if (s === r) switch (f) {
					case "<":
						s = i, c += f;
						break;
					default: d += f;
				}
				else if (s === i) switch (f) {
					case "<":
						if (u) break;
						l++;
						break;
					case ">":
						if (u) break;
						if (l) {
							l--;
							break;
						}
						u = "", s = r, c += ">", n.has(p(c)) ? d += c : d += o, c = "";
						break;
					case "\"":
					case "'":
						f === u ? u = "" : u ||= f, c += f;
						break;
					case "-":
						c === "<!-" && (s = a), c += f;
						break;
					case " ":
					case "\n":
						if (c === "<") {
							s = r, d += "< ", c = "";
							break;
						}
						c += f;
						break;
					default: c += f;
				}
				else if (s === a) switch (f) {
					case ">":
						c.slice(-2) == "--" && (s = r), c = "";
						break;
					default: c += f;
				}
			}
			return t.state = s, t.tag_buffer = c, t.depth = l, t.in_quote_char = u, d;
		}
		function f(e) {
			let t = /* @__PURE__ */ new Set();
			if (typeof e == "string") {
				let n;
				for (; n = o.exec(e);) t.add(n[1]);
			} else !n.nonNative && typeof e[n.iterator] == "function" ? t = new Set(e) : typeof e.forEach == "function" && e.forEach(t.add, t);
			return t;
		}
		function p(e) {
			let t = s.exec(e);
			return t ? t[1].toLowerCase() : null;
		}
		typeof define == "function" && define.amd ? define(function() {
			return c;
		}) : typeof t == "object" && t.exports ? t.exports = c : e.striptags = c;
	})(e);
})))();
function Mi(e, t = 15) {
	return e ? e.length > t ? `…${e.substr(e.length - t, t)}` : e : "";
}
function Ni(e, t = 15) {
	if (!e) return "";
	let n = Math.floor((t - 3) / 2);
	return e.length > t ? `${e.substr(0, n)}…${e.substr(-n, n)}` : e;
}
function Pi(e, t = 15) {
	return e ? e.length > t ? `${e.substr(0, t)}…` : e : "";
}
function Fi(e, t = 15, n = Oi.Middle) {
	if (!e) return "";
	let r = Pi(e, t);
	return n === Oi.Start ? r = Mi(e, t) : n === Oi.Middle && (r = Ni(e, t)), r;
}
function Ii(e, t, n, r, i, a) {
	t === void 0 && (t = 50), n === void 0 && (n = Oi.Middle), r === void 0 && (r = !0), i === void 0 && (i = Ar(window.getComputedStyle(e.node())?.fontSize || Kr.fontSize)), a === void 0 && (a = qr());
	let o = e.text() || "", s = o.length, c = r ? i * s * a : e.node().getComputedTextLength(), l = Math.ceil(s * t / (1.1 * c));
	return l < s && (e.text(Fi(o, l, n)), !0);
}
function Li(e, t, n = qr()) {
	return e.length * t * n || 0;
}
//#endregion
//#region node_modules/@unovis/ts/components/chord-diagram/types.js
var $;
(function(e) {
	e.Along = "along", e.Perpendicular = "perpendicular";
})($ ||= {});
//#endregion
//#region node_modules/@unovis/ts/data-models/graph.js
var Ri = class extends Zr {
	constructor() {
		super(...arguments), this._nodes = [], this._links = [], this._inputNodesMap = /* @__PURE__ */ new Map(), this._nodesMap = /* @__PURE__ */ new Map(), this.nodeId = (e) => Wt(e.id) || isFinite(e.id) ? `${e.id}` : void 0, this.linkId = (e) => Wt(e.id) || isFinite(e.id) ? `${e.id}` : void 0;
	}
	getNodeById(e) {
		return this._nodesMap.get(e);
	}
	get data() {
		return this._data;
	}
	set data(e) {
		if (!e) return;
		this._data = e;
		let t = this.nodes, n = this.links;
		this._inputNodesMap.clear(), this._nodesMap.clear();
		let r = Zt(e?.nodes ?? []), i = Zt(e?.links ?? []);
		this.transferState(r, t, this.nodeId), this.transferState(i, n, this.linkId), r.forEach((t, n) => {
			t._index = n, t._id = this.nodeId(t) || `${n}`, this._inputNodesMap.set(t, e.nodes[n]), this._nodesMap.set(t._id, t);
		}), Ht(this.nodeSort) && r.sort(this.nodeSort), i.forEach((e, t) => {
			e._indexGlobal = t, e.source = this.findNode(r, e.source), e.target = this.findNode(r, e.target);
		}), i.forEach((e, t) => {
			if (!Ut(e._index) && !Ut(e._neighbours)) return;
			let n = i.filter((t) => e.source === t.source && e.target === t.target || e.source === t.target && e.target === t.source);
			n.forEach((t, r) => {
				t._index = r, t._id = this.linkId(t) || `${t.source?._id}-${t.target?._id}-${r}`, t._neighbours = n.length, t._direction = e.source === t.source && e.target === t.target ? 1 : -1;
			});
		}), r.forEach((e) => {
			e.links = i.filter((t) => t.source === e || t.target === e), e._isConnected = e.links.length !== 0;
		}), this._nonConnectedNodes = r.filter((e) => !e._isConnected), this._connectedNodes = Xt(r, ...this._nonConnectedNodes), this._nodes = r, this._links = i.filter((e) => e.source === e.target ? (console.warn(`Unovis | Graph Data Model: Skipping link ${e._id} because it has the same source and target`), !1) : e.source && e.target);
	}
	get nodes() {
		return this._nodes;
	}
	get links() {
		return this._links;
	}
	get connectedNodes() {
		return this._connectedNodes;
	}
	get nonConnectedNodes() {
		return this._nonConnectedNodes;
	}
	findNode(e, t) {
		let n;
		return Vt(t) ? n = e[t] : Wt(t) ? n = e.find((e) => this.nodeId(e) === t) : Kt(t) && (n = e.find((e) => Yt(this._inputNodesMap.get(e), t))), n || console.warn(`Unovis | Graph Data Model: Node ${t} is missing from the nodes list`), n;
	}
	transferState(e, t, n) {
		for (let r of e) {
			let e = t.find((e) => n(e) === n(r));
			r._state = e ? Object.assign({}, e._state) : {};
		}
	}
	setNodeStateById(e, t) {
		let n = this.getNodeById(e);
		if (!n) {
			console.warn(`Unovis | Graph Data Model: Node ${e} not found`);
			return;
		}
		n._state = t;
	}
}, zi = Object.assign(Object.assign({}, Qr), {
	duration: 800,
	highlightedNodeId: void 0,
	highlightedLinkIds: [],
	linkColor: void 0,
	linkValue: (e) => e.value,
	nodeLevels: [],
	nodeWidth: 15,
	nodeColor: (e) => e.color,
	nodeLabel: (e) => e.label ?? e.key,
	nodeLabelColor: void 0,
	nodeLabelAlignment: $.Along,
	padAngle: .02,
	cornerRadius: 2,
	angleRange: [0, 2 * Math.PI],
	radiusScaleExponent: 2
});
//#endregion
//#region node_modules/@unovis/ts/components/chord-diagram/modules/node.js
function Bi(e) {
	e.style("opacity", 0).each((e, t, n) => {
		let r = n[t], i = (e.x0 + e.x1) / 2, a = (e.x1 - e.x0) / 2;
		r._animState = {
			x0: i - a * .8,
			x1: i + a * .8,
			y0: e.y0,
			y1: e.y1
		};
	});
}
function Vi(e, t, n, r) {
	let i = (e) => Si(e.data, t.nodeColor, e.height);
	e.attr("id", (e) => e.uid).style("transition", `fill ${r}ms`).style("fill", i).style("stroke", i), r ? Jr(e, r).style("opacity", 1).attrTween("d", (e, t, r) => {
		let i = r[t], o = {
			x0: e.x0,
			x1: e.x1,
			y0: e.y0,
			y1: e.y1
		}, s = a(i._animState, o);
		return (e) => (i._animState = s(e), n(i._animState));
	}) : e.attr("d", (e) => n(e)).style("opacity", 1);
}
function Hi(e, t) {
	Jr(e, t).style("opacity", 0).remove();
}
//#endregion
//#region node_modules/@unovis/ts/components/chord-diagram/style.js
var Ui = /* @__PURE__ */ e({
	background: () => Ki,
	highlightedLink: () => na,
	highlightedNode: () => Zi,
	label: () => Qi,
	labelExit: () => ea,
	labelText: () => $i,
	labels: () => Yi,
	link: () => ta,
	links: () => Ji,
	node: () => Xi,
	nodes: () => qi,
	root: () => Wi,
	transparent: () => ra,
	variables: () => Gi
}), Wi = K`
  label: chord-diagram-component;
`, Gi = zt`
  :root {
    --vis-chord-diagram-link-fill-color: #cad5f6;
    --vis-chord-diagram-link-stroke-color: #777777;
    --vis-chord-diagram-link-opacity: 0.5;
    --vis-chord-diagram-link-stroke-opacity: 0.15;
    --vis-chord-diagram-link-highlighted-opacity: 0.9;
    --vis-chord-diagram-link-dimmed-opacity: 0.25;

    --vis-chord-diagram-node-highlighted-opacity: 0.9;
    --vis-chord-diagram-node-dimmed-opacity: 0.25;

    --vis-chord-diagram-label-text-fill-color-bright: #ffffff;
    --vis-chord-diagram-label-text-fill-color-dark: #a5abb2;
    --vis-chord-diagram-label-text-font-size: 1em;

    --vis-dark-chord-diagram-link-fill-color: #575c65;
  }

  ${Fr} ${`.${Wi}`} {
    --vis-chord-diagram-link-fill-color: var(--vis-dark-chord-diagram-link-fill-color);
  }
`, Ki = K`
  label: background;
`, qi = K`
  label: nodes;
`, Ji = K`
  label: links;
`, Yi = K`
  label: labels;
`, Xi = K`
  label: node;
  stroke-width: 0;
  fill: var(--vis-color-main);
  stroke: var(--vis-color-main);
  transition: .1s fill-opacity;
`, Zi = K`
  label: highlighted;
  fill-opacity: var(--vis-chord-diagram-node-highlighted-opacity);
  stroke-width: 1.5;
`, Qi = K`
  label: label;
`, $i = K`
  label: label-text;

  dominant-baseline: middle;
  user-select: none;
  font-size: var(--vis-chord-diagram-label-text-font-size);

  > textPath {
    dominant-baseline: central;
  }
`, ea = K`
  label: label-exit;
`, ta = K`
  label: link;

  fill: var(--vis-chord-diagram-link-fill-color);
  fill-opacity: var(--vis-chord-diagram-link-opacity);
  stroke: var(--vis-chord-diagram-link-stroke-color);
  stroke-opacity:  var(--vis-chord-diagram-link-stroke-opacity);
  transition: .1s fill-opacity;
`, na = K`
  label: highlighted;
  fill-opacity: var(--vis-chord-diagram-link-highlighted-opacity);
`, ra = K`
  label: transparent;

  ${`.${ta}`}:not(${`.${na}`}) {
    fill-opacity: var(--vis-chord-diagram-link-dimmed-opacity);
  }

  ${`.${Xi}`}:not(${`.${Zi}`}) {
    fill-opacity: var(--vis-chord-diagram-node-dimmed-opacity);
  }
`;
function ia(e, t) {
	switch (tn(e.data, t.nodeLabelAlignment) ?? $.Along) {
		case $.Perpendicular: return Si(e.data, t.nodeColor, e.height);
		case $.Along: {
			let n = Si(e.data, t.nodeColor, e.height), r = l(n);
			return (r ? Ti(r.hex()) : 0) > .65 ? "var(--vis-chord-diagram-label-text-fill-color-dark)" : "var(--vis-chord-diagram-label-text-fill-color-bright)";
		}
	}
}
function aa(e, t) {
	switch (tn(e.data, t.nodeLabelAlignment) ?? $.Along) {
		case $.Perpendicular: return (e.x0 + e.x1) / 2 * 180 / Math.PI < 180 ? "start" : "end";
		case $.Along: return null;
	}
}
function oa(e, t, n) {
	switch (tn(e.data, t.nodeLabelAlignment) ?? $.Along) {
		case $.Perpendicular: {
			let t = n(e.y1) + 3, r = (e.x0 + e.x1) / 2 - Math.PI / 2;
			return `translate(${t * Math.cos(r)}, ${t * Math.sin(r)})`;
		}
		case $.Along: return null;
	}
}
function sa(e, t, n) {
	e.style("opacity", 0).attr("transform", (e) => oa(e, t, n)), e.append("text").attr("class", $i).style("fill", (e) => Si(e.data, t.nodeColor, e.height));
}
function ca(e, t, n, r, i) {
	let { nodeLabel: a, nodeLabelColor: o, nodeWidth: s } = t;
	Jr(e, i).attr("transform", (e) => oa(e, t, r)).style("opacity", 1);
	let l = e.select(`.${$i}`);
	l.selectAll("textPath").remove(), l.text((e) => nn(e.data, a)).style("transition", `fill ${i}ms`).style("fill", (e) => Si(e.data, o) ?? ia(e, t)).style("text-anchor", (e) => aa(e, t)).each((e, i, a) => {
		let o = tn(e.data, t.nodeLabelAlignment) ?? $.Along, l = e.x1 - e.x0 - q(e.data, t.padAngle) * 2, u = (r(e.y1) - q(e, t.nodeWidth) / 2) * l, d = o === $.Along ? u : n - 6, f = c(a[i]).call(Ii, d).attr("dx", o === $.Along ? 3 : null).attr("dy", o === $.Along ? q(e.data, s) / 2 : null), p = f.node().getComputedTextLength(), m = f.text();
		o === $.Along && (f.text(""), p <= d && f.append("textPath").attr("href", `#${e.uid}`).text(m));
	}), Jr(l, i).attr("transform", (e) => {
		if (tn(e.data, t.nodeLabelAlignment) !== $.Perpendicular) return null;
		let n = (e.x0 + e.x1) / 2 * 180 / Math.PI;
		return `rotate(${n < 180 ? n - 90 : n + 90})`;
	});
}
function la(e, t) {
	Jr(e, t).style("opacity", 0).remove();
}
//#endregion
//#region node_modules/@unovis/ts/components/chord-diagram/modules/layout.js
function ua(e) {
	let { height: t, depth: n } = e;
	if (t > 0) {
		let r = e.data, i = e;
		i.data = {
			key: r[0],
			values: r[1],
			depth: n,
			height: t,
			ancestors: i.ancestors().map((e) => e.data.key)
		};
	}
}
function da(e, t, r = []) {
	let i = r.map((e) => (t) => t[e]), a = r.length ? n(e, ...i) : {
		key: "root",
		children: e
	};
	return pe(a).sum((e) => q(e, t)).each(ua);
}
function fa(e, t, n = .95) {
	if (!e.children) return;
	let r = e.value > 0, i = e.x1 - e.x0, a = i * (e.y0 === 0 ? 1 : n), o = i - a, s = r ? t : a / e.children.length, c = _n().startAngle(e.x0 + o / 2).endAngle(e.x1 - o / 2).padAngle(s).value((e) => r ? e.value : 1).sort((t, n) => e.children.indexOf(t) - e.children.indexOf(n))(e.children);
	e.children.forEach((e, i) => {
		let a = c[i].startAngle, o = c[i].endAngle, s = (o - a) * (1 - n), l = (a + o) / 2;
		e.x0 = r ? a + s / 2 : l - t / 2, e.x1 = r ? o - s / 2 : l + t / 2;
	});
}
function pa(e, n, r) {
	let i = $t(n, (e) => e.source._id), a = $t(n, (e) => e.target._id), o = e.leaves(), s = t(o, (e) => e.data._id), c = (e, t, n, r = []) => (r[e.height] = e, r[n * 2 - t.height] = t, e.parent && t.parent && c(e.parent, t.parent, n, r), r), l = (e, t, n, i) => {
		e.forEach((e) => {
			e._state.points || (e._state.points = []);
			let a = s.get(e.source._id), o = s.get(e.target._id), l = c(t === "out" ? a : o, t === "out" ? o : a, i)[n], u = l.x1 - l.x0 - r, d = l._prevX1 ?? l.x0 + r / 2, f = d + u * e._state.value / l.value;
			l._prevX1 = f;
			let p = t === "out" ? n : i * 2 - 1 - n;
			e._state.points[p] = {
				a0: d,
				a1: f,
				r: l.y1
			};
		});
	};
	return o.forEach((e) => {
		let t = i[e.data._id] || [], n = a[e.data._id] || [];
		for (let r = 0; r < e.depth; r += 1) l(t, "out", r, e.depth), l(n, "in", r, e.depth);
	}), n.map((e) => ({
		source: s.get(e.source._id),
		target: s.get(e.target._id),
		data: e,
		points: e._state.points,
		_state: {}
	}));
}
//#endregion
//#region node_modules/d3-chord/src/math.js
var ma = Math.abs, ha = Math.cos, ga = Math.sin, _a = Math.PI, va = _a / 2;
_a * 2;
//#endregion
//#region node_modules/d3-chord/src/array.js
var ya = Array.prototype.slice;
//#endregion
//#region node_modules/d3-chord/src/constant.js
function ba(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-chord/src/ribbon.js
function xa(e) {
	return e.source;
}
function Sa(e) {
	return e.target;
}
function Ca(e) {
	return e.radius;
}
function wa(e) {
	return e.startAngle;
}
function Ta(e) {
	return e.endAngle;
}
function Ea() {
	return 0;
}
function Da(e) {
	var t = xa, n = Sa, r = Ca, i = Ca, a = wa, o = Ta, s = Ea, c = null;
	function l() {
		var l, u = t.apply(this, arguments), d = n.apply(this, arguments), f = s.apply(this, arguments) / 2, p = ya.call(arguments), m = +r.apply(this, (p[0] = u, p)), h = a.apply(this, p) - va, g = o.apply(this, p) - va, _ = +i.apply(this, (p[0] = d, p)), v = a.apply(this, p) - va, y = o.apply(this, p) - va;
		if (c ||= l = T(), f > 1e-12 && (ma(g - h) > f * 2 + 1e-12 ? g > h ? (h += f, g -= f) : (h -= f, g += f) : h = g = (h + g) / 2, ma(y - v) > f * 2 + 1e-12 ? y > v ? (v += f, y -= f) : (v -= f, y += f) : v = y = (v + y) / 2), c.moveTo(m * ha(h), m * ga(h)), c.arc(0, 0, m, h, g), h !== v || g !== y) if (e) {
			var b = _ - +e.apply(this, arguments), x = (v + y) / 2;
			c.quadraticCurveTo(0, 0, b * ha(v), b * ga(v)), c.lineTo(_ * ha(x), _ * ga(x)), c.lineTo(b * ha(y), b * ga(y));
		} else c.quadraticCurveTo(0, 0, _ * ha(v), _ * ga(v)), c.arc(0, 0, _, v, y);
		if (c.quadraticCurveTo(0, 0, m * ha(h), m * ga(h)), c.closePath(), l) return c = null, l + "" || null;
	}
	return e && (l.headRadius = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : ba(+t), l) : e;
	}), l.radius = function(e) {
		return arguments.length ? (r = i = typeof e == "function" ? e : ba(+e), l) : r;
	}, l.sourceRadius = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : ba(+e), l) : r;
	}, l.targetRadius = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : ba(+e), l) : i;
	}, l.startAngle = function(e) {
		return arguments.length ? (a = typeof e == "function" ? e : ba(+e), l) : a;
	}, l.endAngle = function(e) {
		return arguments.length ? (o = typeof e == "function" ? e : ba(+e), l) : o;
	}, l.padAngle = function(e) {
		return arguments.length ? (s = typeof e == "function" ? e : ba(+e), l) : s;
	}, l.source = function(e) {
		return arguments.length ? (t = e, l) : t;
	}, l.target = function(e) {
		return arguments.length ? (n = e, l) : n;
	}, l.context = function(e) {
		return arguments.length ? (c = e ?? null, l) : c;
	}, l;
}
function Oa() {
	return Da();
}
//#endregion
//#region node_modules/@unovis/ts/components/chord-diagram/modules/link.js
function ka() {
	return "M0,0 L0,0";
}
var Aa = Oa().source((e) => e[0]).target((e) => e[e.length - 1]).startAngle((e) => e.a0).endAngle((e) => e.a1), ja = Sn().curve(Ei.catmullRom.alpha(.5)).startAngle((e, t, n) => t < n.length / 2 ? e.a1 : e.a0).endAngle((e, t, n) => t < n.length / 2 ? e.a0 : e.a1);
function Ma(e, t) {
	let n = e.length === 2 ? Aa : ja;
	n.radius((e) => t(e.r));
	let r = n(e);
	if (e.length === 2) return r;
	let i = r.slice(0, -1);
	return Di(i.concat(`L${i.match(/M-?\d*\.?\d*[,\s*]-?\d*\.?\d*/)?.[0].slice(1)}`), Math.max(t(e[0].r), 0));
}
function Na(e, t) {
	e.attr("d", (e) => Ma(e.points, t) || ka()).style("opacity", 0);
}
function Pa(e, t, n, r) {
	e.style("transition", `fill ${r}ms`).style("fill", (e) => Si(e.data, t.linkColor)).style("stroke", (e) => Si(e.data, t.linkColor));
	let i = Jr(e, r).style("opacity", 1);
	r ? i.attrTween("d", (e, t, r) => xi(c(r[t]).attr("d"), Ma(e.points, n) || ka())) : i.attr("d", (e) => Ma(e.points, n) || ka());
}
function Fa(e, t) {
	Jr(e, t).style("opacity", 0).remove();
}
//#endregion
//#region node_modules/@unovis/ts/components/chord-diagram/index.js
var Ia = class e extends $r {
	constructor(t) {
		super(), this._defaultConfig = zi, this.config = this._defaultConfig, this.datamodel = new Ri(), this.arcGen = fn(), this.radiusScale = i(), this.events = {
			[e.selectors.node]: {
				mouseover: this._onNodeMouseOver.bind(this),
				mouseout: this._onNodeMouseOut.bind(this)
			},
			[e.selectors.link]: {
				mouseover: this._onLinkMouseOver.bind(this),
				mouseout: this._onLinkMouseOut.bind(this)
			},
			[e.selectors.label]: {
				mouseover: this._onNodeMouseOver.bind(this),
				mouseout: this._onNodeMouseOut.bind(this)
			}
		}, this._nodes = [], this._links = [], t && this.setConfig(t), this.background = this.g.append("rect").attr("class", Ki), this.linkGroup = this.g.append("g").attr("class", Ji), this.nodeGroup = this.g.append("g").attr("class", qi), this.labelGroup = this.g.append("g").attr("class", Yi);
	}
	get _forceHighlight() {
		return this.config.highlightedNodeId !== void 0 || this.config.highlightedLinkIds?.length > 0;
	}
	get bleed() {
		let { config: e } = this, t = 0, n = 0, r = 0, i = 0;
		return this._nodes.forEach((a) => {
			let o = tn(a.data, e.nodeLabelAlignment);
			if (a.height === 0 && o === $.Perpendicular) {
				let o = Li(nn(a.data, e.nodeLabel) ?? "", Pr("var(--vis-chord-diagram-label-text-font-size)", this.element)), [s, c] = this.arcGen.centroid(a);
				s < 0 ? i = Math.max(i, o) : r = Math.max(r, o), c < 0 ? t = Math.max(t, o) : n = Math.max(n, o);
			}
		}), i += 6, r += 6, n += 6, t += 6, {
			top: t,
			bottom: n,
			left: i,
			right: r
		};
	}
	setSize(e, t, n, r) {
		super.setSize(e, t, n, r), this.radiusScale.exponent(this.config.radiusScaleExponent).range([0, Math.min(e, t) / 2]);
	}
	setData(e) {
		super.setData(e), this._layoutData();
	}
	_layoutData() {
		let { nodes: e } = this.datamodel, { links: t } = this.datamodel, { padAngle: n, linkValue: r, nodeLevels: i } = this.config;
		e.forEach((e) => {
			delete e._state.value;
		}), t.forEach((e) => {
			delete e._state.points, e._state.value = q(e, r), e.source._state.value = (e.source._state.value || 0) + q(e, r), e.target._state.value = (e.target._state.value || 0) + q(e, r);
		}), t = t.filter((e) => e._state.value);
		let a = da(e, (e) => e._state?.value, i), o = Tn().size([this.config.angleRange[1], 1])(a);
		o.each((e, t) => {
			fa(e, n), e.uid = `${this.uid.substr(0, 4)}-${t}`, e.x0 = Number.isNaN(e.x0) ? 0 : e.x0, e.x1 = Number.isNaN(e.x1) ? 0 : e.x1, e._state = {};
		});
		let s = o.descendants();
		this._rootNode = s.find((e) => e.depth === 0), this._nodes = s.filter((e) => e.depth !== 0), this._links = pa(o, t, n);
	}
	_render(e) {
		super._render(e);
		let { config: t, bleed: n } = this;
		this._layoutData();
		let r = Vt(e) ? e : t.duration, i = Math.min(this._width, this._height), a = i / 2 - o([
			n.top,
			n.bottom,
			n.left,
			n.right
		]), s = 1 + t.nodeLevels?.length, c = a > t.nodeWidth * s ? t.nodeWidth : Math.max(a / s, 0);
		this.radiusScale.range([0, Math.max(a, 0)]), this.arcGen.startAngle((e) => e.x0 + t.padAngle / 2 - (e.value ? 0 : Math.PI / 360)).endAngle((e) => e.x1 - t.padAngle / 2 + (e.value ? 0 : Math.PI / 360)).cornerRadius((e) => q(e.data, t.cornerRadius)).innerRadius((e) => Math.max(this.radiusScale(e.y1) - c, 0)).outerRadius((e) => this.radiusScale(e.y1)), this.g.classed(ra, this._forceHighlight), this.background.attr("width", this._width).attr("height", this._height).style("opacity", 0), this.nodeGroup.attr("transform", `translate(${this._width / 2},${this._height / 2})`), this.labelGroup.attr("transform", `translate(${this._width / 2},${this._height / 2})`), this.linkGroup.attr("transform", `translate(${this._width / 2},${this._height / 2})`);
		let l = this.linkGroup.selectAll(`.${ta}`).data(this._links, (e) => String(e.data._id)), u = l.enter().append("path").attr("class", ta).call(Na, this.radiusScale);
		l.merge(u).classed(na, (e) => {
			let n = e.data.id ?? e.data._indexGlobal;
			return t.highlightedLinkIds?.includes(n);
		}).call(Pa, t, this.radiusScale, r), l.exit().call(Fa, r);
		let d = this.nodeGroup.selectAll(`.${Xi}`).data(this._nodes, (e) => String(e.uid)), f = d.enter().append("path").attr("class", Xi).call(Bi, t);
		d.merge(f).classed(Zi, (e) => t.highlightedNodeId === e.data._id).call(Vi, t, this.arcGen, r, this.bleed), d.exit().call(Hi, r);
		let p = i - a, m = this.labelGroup.selectAll(`.${Qi}`).data(this._nodes, (e) => String(e.uid)), h = m.enter().append("g").attr("class", Qi).call(sa, t, this.radiusScale);
		m.merge(h).call(ca, t, p, this.radiusScale, r), m.exit().attr("class", ea).call(la, r);
	}
	_onNodeMouseOver(e) {
		let t;
		if (e.children) {
			let n = e.leaves();
			t = this._links.filter((e) => n.find((t) => e.source.data.id === t.data.id || e.target.data.id === t.data.id));
		} else {
			let n = e;
			t = this._links.filter((e) => e.source.data.id === n.data.id || e.target.data.id === n.data.id);
		}
		t.length || (e._state.hovered = !0), this._highlightOnHover(t);
	}
	_onNodeMouseOut() {
		this._highlightOnHover();
	}
	_onLinkMouseOver(e) {
		this._highlightOnHover([e]);
	}
	_onLinkMouseOut() {
		this._highlightOnHover();
	}
	_highlightOnHover(e) {
		this._forceHighlight || (e ? e.forEach((e) => {
			e._state.hovered = !0;
			let t = e.source.path(this._rootNode), n = e.target.path(this._rootNode);
			t.forEach((e) => {
				e.depth && (e._state.hovered = !0);
			}), n.forEach((e) => {
				e.depth && (e._state.hovered = !0);
			});
		}) : (this._nodes.forEach((e) => {
			delete e._state.hovered;
		}), this._links.forEach((e) => {
			delete e._state.hovered;
		})), this.nodeGroup.selectAll(`.${Xi}`).classed(Zi, (e) => e._state.hovered), this.linkGroup.selectAll(`.${ta}`).classed(na, (e) => e._state.hovered), this.g.classed(ra, !!e));
	}
};
Ia.selectors = Ui;
//#endregion
//#region src/chordDiagram.ts
var La = 16, Ra = .02;
function za(e, t, n = {}) {
	let r = n.colorModeId ?? "light", i = he[r], a = new Ia({
		linkColor: (t) => me(e.nodes.findIndex((e) => e.id === t.source), r),
		nodeColor: (e, t) => me(t, r),
		nodeLabel: (e) => "label" in e ? e.label : e.key,
		nodeLabelColor: i.primary,
		nodeWidth: n.nodeWidth ?? La,
		padAngle: n.padAngle ?? Ra
	}), o = {
		links: e.links,
		nodes: e.nodes
	}, s = new Xr(t, { component: a }, o);
	return {
		resize: () => {
			s.render();
		},
		get svg() {
			return s.element;
		}
	};
}
//#endregion
export { za as renderChordDiagram };

//# sourceMappingURL=chordDiagram-Cz0sVVgD.js.map