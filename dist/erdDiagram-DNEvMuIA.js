import { a as e, c as t, d as n, i as r, n as i, o as a, r as o, u as s } from "./bump-S1d-3Q8P.js";
//#region node_modules/d3-shape/src/line.js
function c(n, i) {
	var c = s(!0), l = null, u = e, d = null, f = t(p);
	n = typeof n == "function" ? n : n === void 0 ? o : s(n), i = typeof i == "function" ? i : i === void 0 ? r : s(i);
	function p(e) {
		var t, r = (e = a(e)).length, o, s = !1, p;
		for (l ?? (d = u(p = f())), t = 0; t <= r; ++t) !(t < r && c(o = e[t], t, e)) === s && ((s = !s) ? d.lineStart() : d.lineEnd()), s && d.point(+n(o, t, e), +i(o, t, e));
		if (p) return d = null, p + "" || null;
	}
	return p.x = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : s(+e), p) : n;
	}, p.y = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : s(+e), p) : i;
	}, p.defined = function(e) {
		return arguments.length ? (c = typeof e == "function" ? e : s(!!e), p) : c;
	}, p.curve = function(e) {
		return arguments.length ? (u = e, l != null && (d = u(l)), p) : u;
	}, p.context = function(e) {
		return arguments.length ? (e == null ? l = d = null : d = u(l = e), p) : l;
	}, p;
}
//#endregion
//#region node_modules/@dagrejs/dagre/dist/dagre.esm.js
var l = Object.defineProperty, u = (e, t, n) => t in e ? l(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, d = (e, t) => {
	for (var n in t) l(e, n, {
		get: t[n],
		enumerable: !0
	});
}, f = (e, t, n) => u(e, typeof t == "symbol" ? t : t + "", n), p = {};
d(p, {
	Graph: () => g,
	alg: () => S,
	json: () => te,
	version: () => ee
});
var m = Object.defineProperty, h = (e, t) => {
	for (var n in t) m(e, n, {
		get: t[n],
		enumerable: !0
	});
}, g = class {
	constructor(e) {
		this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, e && (this._isDirected = "directed" in e ? e.directed : !0, this._isMultigraph = "multigraph" in e && e.multigraph, this._isCompound = "compound" in e && e.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {});
	}
	isDirected() {
		return this._isDirected;
	}
	isMultigraph() {
		return this._isMultigraph;
	}
	isCompound() {
		return this._isCompound;
	}
	setGraph(e) {
		return this._label = e, this;
	}
	graph() {
		return this._label;
	}
	setDefaultNodeLabel(e) {
		return this._defaultNodeLabelFn = typeof e == "function" ? e : () => e, this;
	}
	nodeCount() {
		return this._nodeCount;
	}
	nodes() {
		return Object.keys(this._nodes);
	}
	sources() {
		return this.nodes().filter((e) => Object.keys(this._in[e]).length === 0);
	}
	sinks() {
		return this.nodes().filter((e) => Object.keys(this._out[e]).length === 0);
	}
	setNodes(e, t) {
		return e.forEach((e) => {
			t === void 0 ? this.setNode(e) : this.setNode(e, t);
		}), this;
	}
	setNode(e, t) {
		return e in this._nodes ? (arguments.length > 1 && (this._nodes[e] = t), this) : (this._nodes[e] = arguments.length > 1 ? t : this._defaultNodeLabelFn(e), this._isCompound && (this._parent[e] = "\0", this._children[e] = {}, this._children["\0"][e] = !0), this._in[e] = {}, this._preds[e] = {}, this._out[e] = {}, this._sucs[e] = {}, ++this._nodeCount, this);
	}
	node(e) {
		return this._nodes[e];
	}
	hasNode(e) {
		return e in this._nodes;
	}
	removeNode(e) {
		if (e in this._nodes) {
			let t = (e) => this.removeEdge(this._edgeObjs[e]);
			delete this._nodes[e], this._isCompound && (this._removeFromParentsChildList(e), delete this._parent[e], this.children(e).forEach((e) => {
				this.setParent(e);
			}), delete this._children[e]), Object.keys(this._in[e]).forEach(t), delete this._in[e], delete this._preds[e], Object.keys(this._out[e]).forEach(t), delete this._out[e], delete this._sucs[e], --this._nodeCount;
		}
		return this;
	}
	setParent(e, t) {
		if (!this._isCompound) throw Error("Cannot set parent in a non-compound graph");
		if (t === void 0) t = "\0";
		else {
			t += "";
			for (let n = t; n !== void 0; n = this.parent(n)) if (n === e) throw Error("Setting " + t + " as parent of " + e + " would create a cycle");
			this.setNode(t);
		}
		return this.setNode(e), this._removeFromParentsChildList(e), this._parent[e] = t, this._children[t][e] = !0, this;
	}
	parent(e) {
		if (this._isCompound) {
			let t = this._parent[e];
			if (t !== "\0") return t;
		}
	}
	children(e = "\0") {
		if (this._isCompound) {
			let t = this._children[e];
			if (t) return Object.keys(t);
		} else {
			if (e === "\0") return this.nodes();
			if (this.hasNode(e)) return [];
		}
		return [];
	}
	predecessors(e) {
		let t = this._preds[e];
		if (t) return Object.keys(t);
	}
	successors(e) {
		let t = this._sucs[e];
		if (t) return Object.keys(t);
	}
	neighbors(e) {
		let t = this.predecessors(e);
		if (t) {
			let n = new Set(t);
			for (let t of this.successors(e)) n.add(t);
			return Array.from(n.values());
		}
	}
	isLeaf(e) {
		let t;
		return t = this.isDirected() ? this.successors(e) : this.neighbors(e), t.length === 0;
	}
	filterNodes(e) {
		let t = new this.constructor({
			directed: this._isDirected,
			multigraph: this._isMultigraph,
			compound: this._isCompound
		});
		t.setGraph(this.graph()), Object.entries(this._nodes).forEach(([n, r]) => {
			e(n) && t.setNode(n, r);
		}), Object.values(this._edgeObjs).forEach((e) => {
			t.hasNode(e.v) && t.hasNode(e.w) && t.setEdge(e, this.edge(e));
		});
		let n = {}, r = (e) => {
			let i = this.parent(e);
			return !i || t.hasNode(i) ? (n[e] = i ?? void 0, i ?? void 0) : i in n ? n[i] : r(i);
		};
		return this._isCompound && t.nodes().forEach((e) => t.setParent(e, r(e))), t;
	}
	setDefaultEdgeLabel(e) {
		return this._defaultEdgeLabelFn = typeof e == "function" ? e : () => e, this;
	}
	edgeCount() {
		return this._edgeCount;
	}
	edges() {
		return Object.values(this._edgeObjs);
	}
	setPath(e, t) {
		return e.reduce((e, n) => (t === void 0 ? this.setEdge(e, n) : this.setEdge(e, n, t), n)), this;
	}
	setEdge(e, t, n, r) {
		let i, a, o, s, c = !1;
		typeof e == "object" && e && "v" in e ? (i = e.v, a = e.w, o = e.name, arguments.length === 2 && (s = t, c = !0)) : (i = e, a = t, o = r, arguments.length > 2 && (s = n, c = !0)), i = "" + i, a = "" + a, o !== void 0 && (o = "" + o);
		let l = y(this._isDirected, i, a, o);
		if (l in this._edgeLabels) return c && (this._edgeLabels[l] = s), this;
		if (o !== void 0 && !this._isMultigraph) throw Error("Cannot set a named edge when isMultigraph = false");
		this.setNode(i), this.setNode(a), this._edgeLabels[l] = c ? s : this._defaultEdgeLabelFn(i, a, o);
		let u = b(this._isDirected, i, a, o);
		return i = u.v, a = u.w, Object.freeze(u), this._edgeObjs[l] = u, _(this._preds[a], i), _(this._sucs[i], a), this._in[a][l] = u, this._out[i][l] = u, this._edgeCount++, this;
	}
	edge(e, t, n) {
		let r = arguments.length === 1 ? x(this._isDirected, e) : y(this._isDirected, e, t, n);
		return this._edgeLabels[r];
	}
	edgeAsObj(e, t, n) {
		let r = arguments.length === 1 ? this.edge(e) : this.edge(e, t, n);
		return typeof r == "object" ? r : { label: r };
	}
	hasEdge(e, t, n) {
		return (arguments.length === 1 ? x(this._isDirected, e) : y(this._isDirected, e, t, n)) in this._edgeLabels;
	}
	removeEdge(e, t, n) {
		let r = arguments.length === 1 ? x(this._isDirected, e) : y(this._isDirected, e, t, n), i = this._edgeObjs[r];
		if (i) {
			let e = i.v, t = i.w;
			delete this._edgeLabels[r], delete this._edgeObjs[r], v(this._preds[t], e), v(this._sucs[e], t), delete this._in[t][r], delete this._out[e][r], this._edgeCount--;
		}
		return this;
	}
	inEdges(e, t) {
		return this.isDirected() ? this.filterEdges(this._in[e], e, t) : this.nodeEdges(e, t);
	}
	outEdges(e, t) {
		return this.isDirected() ? this.filterEdges(this._out[e], e, t) : this.nodeEdges(e, t);
	}
	nodeEdges(e, t) {
		if (e in this._nodes) return this.filterEdges({
			...this._in[e],
			...this._out[e]
		}, e, t);
	}
	_removeFromParentsChildList(e) {
		delete this._children[this._parent[e]][e];
	}
	filterEdges(e, t, n) {
		if (!e) return;
		let r = Object.values(e);
		return n ? r.filter((e) => e.v === t && e.w === n || e.v === n && e.w === t) : r;
	}
};
function _(e, t) {
	e[t] ? e[t]++ : e[t] = 1;
}
function v(e, t) {
	e[t] !== void 0 && !--e[t] && delete e[t];
}
function y(e, t, n, r) {
	let i = "" + t, a = "" + n;
	if (!e && i > a) {
		let e = i;
		i = a, a = e;
	}
	return i + "" + a + "" + (r === void 0 ? "\0" : r);
}
function b(e, t, n, r) {
	let i = "" + t, a = "" + n;
	if (!e && i > a) {
		let e = i;
		i = a, a = e;
	}
	let o = {
		v: i,
		w: a
	};
	return r && (o.name = r), o;
}
function x(e, t) {
	return y(e, t.v, t.w, t.name);
}
var ee = "4.0.1", te = {};
h(te, {
	read: () => ae,
	write: () => ne
});
function ne(e) {
	let t = {
		options: {
			directed: e.isDirected(),
			multigraph: e.isMultigraph(),
			compound: e.isCompound()
		},
		nodes: re(e),
		edges: ie(e)
	}, n = e.graph();
	return n !== void 0 && (t.value = structuredClone(n)), t;
}
function re(e) {
	return e.nodes().map((t) => {
		let n = e.node(t), r = e.parent(t), i = { v: t };
		return n !== void 0 && (i.value = n), r !== void 0 && (i.parent = r), i;
	});
}
function ie(e) {
	return e.edges().map((t) => {
		let n = e.edge(t), r = {
			v: t.v,
			w: t.w
		};
		return t.name !== void 0 && (r.name = t.name), n !== void 0 && (r.value = n), r;
	});
}
function ae(e) {
	let t = new g(e.options);
	return e.value !== void 0 && t.setGraph(e.value), e.nodes.forEach((e) => {
		t.setNode(e.v, e.value), e.parent && t.setParent(e.v, e.parent);
	}), e.edges.forEach((e) => {
		t.setEdge({
			v: e.v,
			w: e.w,
			name: e.name
		}, e.value);
	}), t;
}
var S = {};
h(S, {
	CycleException: () => T,
	bellmanFord: () => C,
	components: () => ce,
	dijkstra: () => w,
	dijkstraAll: () => fe,
	findCycles: () => me,
	floydWarshall: () => ge,
	isAcyclic: () => ye,
	postorder: () => xe,
	preorder: () => Se,
	prim: () => Ce,
	shortestPaths: () => we,
	tarjan: () => pe,
	topsort: () => ve
});
var oe = () => 1;
function C(e, t, n, r) {
	return se(e, String(t), n || oe, r || function(t) {
		return e.outEdges(t);
	});
}
function se(e, t, n, r) {
	let i = {}, a, o = 0, s = e.nodes(), c = function(e) {
		let t = n(e);
		i[e.v].distance + t < i[e.w].distance && (i[e.w] = {
			distance: i[e.v].distance + t,
			predecessor: e.v
		}, a = !0);
	}, l = function() {
		s.forEach(function(e) {
			r(e).forEach(function(t) {
				let n = t.v === e ? t.v : t.w, r = n === t.v ? t.w : t.v;
				c({
					v: n,
					w: r
				});
			});
		});
	};
	s.forEach(function(e) {
		i[e] = {
			distance: e === t ? 0 : Infinity,
			predecessor: ""
		};
	});
	let u = s.length;
	for (let e = 1; e < u && (a = !1, o++, l(), a); e++);
	if (o === u - 1 && (a = !1, l(), a)) throw Error("The graph contains a negative weight cycle");
	return i;
}
function ce(e) {
	let t = {}, n = [], r;
	function i(n) {
		n in t || (t[n] = !0, r.push(n), e.successors(n).forEach(i), e.predecessors(n).forEach(i));
	}
	return e.nodes().forEach(function(e) {
		r = [], i(e), r.length && n.push(r);
	}), n;
}
var le = class {
	constructor() {
		this._arr = [], this._keyIndices = {};
	}
	size() {
		return this._arr.length;
	}
	keys() {
		return this._arr.map((e) => e.key);
	}
	has(e) {
		return e in this._keyIndices;
	}
	priority(e) {
		let t = this._keyIndices[e];
		if (t !== void 0) return this._arr[t].priority;
	}
	min() {
		if (this.size() === 0) throw Error("Queue underflow");
		return this._arr[0].key;
	}
	add(e, t) {
		let n = this._keyIndices, r = String(e);
		if (!(r in n)) {
			let e = this._arr, i = e.length;
			return n[r] = i, e.push({
				key: r,
				priority: t
			}), this._decrease(i), !0;
		}
		return !1;
	}
	removeMin() {
		this._swap(0, this._arr.length - 1);
		let e = this._arr.pop();
		return delete this._keyIndices[e.key], this._heapify(0), e.key;
	}
	decrease(e, t) {
		let n = this._keyIndices[e];
		if (n === void 0) throw Error(`Key not found: ${e}`);
		let r = this._arr[n].priority;
		if (t > r) throw Error(`New priority is greater than current priority. Key: ${e} Old: ${r} New: ${t}`);
		this._arr[n].priority = t, this._decrease(n);
	}
	_heapify(e) {
		let t = this._arr, n = 2 * e, r = n + 1, i = e;
		n < t.length && (i = t[n].priority < t[i].priority ? n : i, r < t.length && (i = t[r].priority < t[i].priority ? r : i), i !== e && (this._swap(e, i), this._heapify(i)));
	}
	_decrease(e) {
		let t = this._arr, n = t[e].priority, r;
		for (; e !== 0 && (r = e >> 1, !(t[r].priority < n));) this._swap(e, r), e = r;
	}
	_swap(e, t) {
		let n = this._arr, r = this._keyIndices, i = n[e], a = n[t];
		n[e] = a, n[t] = i, r[a.key] = e, r[i.key] = t;
	}
}, ue = () => 1;
function w(e, t, n, r) {
	return de(e, String(t), n || ue, r || function(t) {
		return e.outEdges(t);
	});
}
function de(e, t, n, r) {
	let i = {}, a = new le(), o, s, c = function(e) {
		let t = e.v === o ? e.w : e.v, r = i[t], c = n(e), l = s.distance + c;
		if (c < 0) throw Error("dijkstra does not allow negative edge weights. Bad edge: " + e + " Weight: " + c);
		l < r.distance && (r.distance = l, r.predecessor = o, a.decrease(t, l));
	};
	for (e.nodes().forEach(function(e) {
		let n = e === t ? 0 : Infinity;
		i[e] = {
			distance: n,
			predecessor: ""
		}, a.add(e, n);
	}); a.size() > 0 && (o = a.removeMin(), s = i[o], s.distance !== Infinity);) r(o).forEach(c);
	return i;
}
function fe(e, t, n) {
	return e.nodes().reduce(function(r, i) {
		return r[i] = w(e, i, t, n), r;
	}, {});
}
function pe(e) {
	let t = 0, n = [], r = {}, i = [];
	function a(o) {
		let s = r[o] = {
			onStack: !0,
			lowlink: t,
			index: t++
		};
		if (n.push(o), e.successors(o).forEach(function(e) {
			e in r ? r[e].onStack && (s.lowlink = Math.min(s.lowlink, r[e].index)) : (a(e), s.lowlink = Math.min(s.lowlink, r[e].lowlink));
		}), s.lowlink === s.index) {
			let e = [], t;
			do
				t = n.pop(), r[t].onStack = !1, e.push(t);
			while (o !== t);
			i.push(e);
		}
	}
	return e.nodes().forEach(function(e) {
		e in r || a(e);
	}), i;
}
function me(e) {
	return pe(e).filter(function(t) {
		return t.length > 1 || t.length === 1 && e.hasEdge(t[0], t[0]);
	});
}
var he = () => 1;
function ge(e, t, n) {
	return _e(e, t || he, n || function(t) {
		return e.outEdges(t);
	});
}
function _e(e, t, n) {
	let r = {}, i = e.nodes();
	return i.forEach(function(e) {
		r[e] = {}, r[e][e] = {
			distance: 0,
			predecessor: ""
		}, i.forEach(function(t) {
			e !== t && (r[e][t] = {
				distance: Infinity,
				predecessor: ""
			});
		}), n(e).forEach(function(n) {
			let i = n.v === e ? n.w : n.v, a = t(n);
			r[e][i] = {
				distance: a,
				predecessor: e
			};
		});
	}), i.forEach(function(e) {
		let t = r[e];
		i.forEach(function(n) {
			let a = r[n];
			i.forEach(function(n) {
				let r = a[e], i = t[n], o = a[n], s = r.distance + i.distance;
				s < o.distance && (o.distance = s, o.predecessor = i.predecessor);
			});
		});
	}), r;
}
var T = class extends Error {
	constructor(...e) {
		super(...e);
	}
};
function ve(e) {
	let t = {}, n = {}, r = [];
	function i(a) {
		if (a in n) throw new T();
		a in t || (n[a] = !0, t[a] = !0, e.predecessors(a).forEach(i), delete n[a], r.push(a));
	}
	if (e.sinks().forEach(i), Object.keys(t).length !== e.nodeCount()) throw new T();
	return r;
}
function ye(e) {
	try {
		ve(e);
	} catch (e) {
		if (e instanceof T) return !1;
		throw e;
	}
	return !0;
}
function be(e, t, n, r, i) {
	Array.isArray(t) || (t = [t]);
	let a = ((t) => (e.isDirected() ? e.successors(t) : e.neighbors(t)) ?? []), o = {};
	return t.forEach(function(t) {
		if (!e.hasNode(t)) throw Error("Graph does not have node: " + t);
		i = E(e, t, n === "post", o, a, r, i);
	}), i;
}
function E(e, t, n, r, i, a, o) {
	return t in r || (r[t] = !0, n || (o = a(o, t)), i(t).forEach(function(t) {
		o = E(e, t, n, r, i, a, o);
	}), n && (o = a(o, t))), o;
}
function D(e, t, n) {
	return be(e, t, n, function(e, t) {
		return e.push(t), e;
	}, []);
}
function xe(e, t) {
	return D(e, t, "post");
}
function Se(e, t) {
	return D(e, t, "pre");
}
function Ce(e, t) {
	let n = new g(), r = {}, i = new le(), a;
	function o(e) {
		let n = e.v === a ? e.w : e.v, o = i.priority(n);
		if (o !== void 0) {
			let s = t(e);
			s < o && (r[n] = a, i.decrease(n, s));
		}
	}
	if (e.nodeCount() === 0) return n;
	e.nodes().forEach(function(e) {
		i.add(e, Infinity), n.setNode(e);
	}), i.decrease(e.nodes()[0], 0);
	let s = !1;
	for (; i.size() > 0;) {
		if (a = i.removeMin(), a in r) n.setEdge(a, r[a]);
		else {
			if (s) throw Error("Input graph is not connected: " + e);
			s = !0;
		}
		e.nodeEdges(a).forEach(o);
	}
	return n;
}
function we(e, t, n, r) {
	return Te(e, t, n, r ?? ((t) => e.outEdges(t) ?? []));
}
function Te(e, t, n, r) {
	if (n === void 0) return w(e, t, n, r);
	let i = !1, a = e.nodes();
	for (let o = 0; o < a.length; o++) {
		let s = r(a[o]);
		for (let e = 0; e < s.length; e++) {
			let t = s[e], r = t.v === a[o] ? t.v : t.w;
			n({
				v: r,
				w: r === t.v ? t.w : t.v
			}) < 0 && (i = !0);
		}
		if (i) return C(e, t, n, r);
	}
	return w(e, t, n, r);
}
function O(e, t, n, r) {
	let i = r;
	for (; e.hasNode(i);) i = I(r);
	return n.dummy = t, e.setNode(i, n), i;
}
function Ee(e) {
	let t = new g().setGraph(e.graph());
	return e.nodes().forEach((n) => t.setNode(n, e.node(n))), e.edges().forEach((n) => {
		let r = t.edge(n.v, n.w) || {
			weight: 0,
			minlen: 1
		}, i = e.edge(n);
		t.setEdge(n.v, n.w, {
			weight: r.weight + i.weight,
			minlen: Math.max(r.minlen, i.minlen)
		});
	}), t;
}
function k(e) {
	let t = new g({ multigraph: e.isMultigraph() }).setGraph(e.graph());
	return e.nodes().forEach((n) => {
		e.children(n).length || t.setNode(n, e.node(n));
	}), e.edges().forEach((n) => {
		t.setEdge(n, e.edge(n));
	}), t;
}
function A(e, t) {
	let n = e.x, r = e.y, i = t.x - n, a = t.y - r, o = e.width / 2, s = e.height / 2;
	if (!i && !a) throw Error("Not possible to find intersection inside of the rectangle");
	let c, l;
	return Math.abs(a) * o > Math.abs(i) * s ? (a < 0 && (s = -s), c = s * i / a, l = s) : (i < 0 && (o = -o), c = o, l = o * a / i), {
		x: n + c,
		y: r + l
	};
}
function j(e) {
	let t = L(F(e) + 1).map(() => []);
	return e.nodes().forEach((n) => {
		let r = e.node(n), i = r.rank;
		i !== void 0 && (t[i] || (t[i] = []), t[i][r.order] = n);
	}), t;
}
function De(e) {
	let t = e.nodes().map((t) => {
		let n = e.node(t).rank;
		return n === void 0 ? Number.MAX_VALUE : n;
	}), n = P(Math.min, t);
	e.nodes().forEach((t) => {
		let r = e.node(t);
		Object.hasOwn(r, "rank") && (r.rank -= n);
	});
}
function Oe(e) {
	let t = e.nodes().map((t) => e.node(t).rank).filter((e) => e !== void 0), n = P(Math.min, t), r = [];
	e.nodes().forEach((t) => {
		let i = e.node(t).rank - n;
		r[i] || (r[i] = []), r[i].push(t);
	});
	let i = 0, a = e.graph().nodeRankFactor;
	Array.from(r).forEach((t, n) => {
		t === void 0 && n % a !== 0 ? --i : t !== void 0 && i && t.forEach((t) => e.node(t).rank += i);
	});
}
function M(e, t, n, r) {
	let i = {
		width: 0,
		height: 0
	};
	return arguments.length >= 4 && (i.rank = n, i.order = r), O(e, "border", i, t);
}
function ke(e, t = N) {
	let n = [];
	for (let r = 0; r < e.length; r += t) {
		let i = e.slice(r, r + t);
		n.push(i);
	}
	return n;
}
var N = 65535;
function P(e, t) {
	return t.length > N ? e(...ke(t).map((t) => e(...t))) : e(...t);
}
function F(e) {
	let t = e.nodes().map((t) => {
		let n = e.node(t).rank;
		return n === void 0 ? Number.MIN_VALUE : n;
	});
	return P(Math.max, t);
}
function Ae(e, t) {
	let n = {
		lhs: [],
		rhs: []
	};
	return e.forEach((e) => {
		t(e) ? n.lhs.push(e) : n.rhs.push(e);
	}), n;
}
function je(e, t) {
	let n = Date.now();
	try {
		return t();
	} finally {
		console.log(e + " time: " + (Date.now() - n) + "ms");
	}
}
function Me(e, t) {
	return t();
}
var Ne = 0;
function I(e) {
	return e + ("" + ++Ne);
}
function L(e, t, n = 1) {
	t ?? (t = e, e = 0);
	let r = (e) => e < t;
	n < 0 && (r = (e) => t < e);
	let i = [];
	for (let t = e; r(t); t += n) i.push(t);
	return i;
}
function R(e, t) {
	let n = {};
	for (let r of t) e[r] !== void 0 && (n[r] = e[r]);
	return n;
}
function z(e, t) {
	let n;
	return n = typeof t == "string" ? (e) => e[t] : t, Object.entries(e).reduce((e, [t, r]) => (e[t] = n(r, t), e), {});
}
function Pe(e, t) {
	return e.reduce((e, n, r) => (e[n] = t[r], e), {});
}
var B = "\0", Fe = class {
	constructor() {
		f(this, "_sentinel");
		let e = {};
		e._next = e._prev = e, this._sentinel = e;
	}
	dequeue() {
		let e = this._sentinel, t = e._prev;
		if (t !== e) return Ie(t), t;
	}
	enqueue(e) {
		let t = this._sentinel;
		e._prev && e._next && Ie(e), e._next = t._next, t._next._prev = e, t._next = e, e._prev = t;
	}
	toString() {
		let e = [], t = this._sentinel, n = t._prev;
		for (; n !== t;) e.push(JSON.stringify(n, Le)), n = n._prev;
		return "[" + e.join(", ") + "]";
	}
};
function Ie(e) {
	e._prev._next = e._next, e._next._prev = e._prev, delete e._next, delete e._prev;
}
function Le(e, t) {
	if (e !== "_next" && e !== "_prev") return t;
}
var Re = Fe, ze = () => 1;
function Be(e, t) {
	if (e.nodeCount() <= 1) return [];
	let n = He(e, t || ze);
	return Ve(n.graph, n.buckets, n.zeroIdx).flatMap((t) => e.outEdges(t.v, t.w) || []);
}
function Ve(e, t, n) {
	let r = [], i = t[t.length - 1], a = t[0], o;
	for (; e.nodeCount();) {
		for (; o = a.dequeue();) V(e, t, n, o);
		for (; o = i.dequeue();) V(e, t, n, o);
		if (e.nodeCount()) {
			for (let i = t.length - 2; i > 0; --i) if (o = t[i]?.dequeue(), o) {
				r = r.concat(V(e, t, n, o, !0) || []);
				break;
			}
		}
	}
	return r;
}
function V(e, t, n, r, i) {
	let a = [], o = i ? a : void 0;
	return (e.inEdges(r.v) || []).forEach((r) => {
		let o = e.edge(r), s = e.node(r.v);
		i && a.push({
			v: r.v,
			w: r.w
		}), s.out -= o, H(t, n, s);
	}), (e.outEdges(r.v) || []).forEach((r) => {
		let i = e.edge(r), a = r.w, o = e.node(a);
		o.in -= i, H(t, n, o);
	}), e.removeNode(r.v), o;
}
function He(e, t) {
	let n = new g(), r = 0, i = 0;
	e.nodes().forEach((e) => {
		n.setNode(e, {
			v: e,
			in: 0,
			out: 0
		});
	}), e.edges().forEach((e) => {
		let a = n.edge(e.v, e.w) || 0, o = t(e), s = a + o;
		n.setEdge(e.v, e.w, s);
		let c = n.node(e.v), l = n.node(e.w);
		i = Math.max(i, c.out += o), r = Math.max(r, l.in += o);
	});
	let a = Ue(i + r + 3).map(() => new Re()), o = r + 1;
	return n.nodes().forEach((e) => {
		H(a, o, n.node(e));
	}), {
		graph: n,
		buckets: a,
		zeroIdx: o
	};
}
function H(e, t, n) {
	var r, i, a;
	n.out ? n.in ? (a = e[n.out - n.in + t]) == null || a.enqueue(n) : (i = e[e.length - 1]) == null || i.enqueue(n) : (r = e[0]) == null || r.enqueue(n);
}
function Ue(e) {
	let t = [];
	for (let n = 0; n < e; n++) t.push(n);
	return t;
}
function We(e) {
	(e.graph().acyclicer === "greedy" ? Be(e, t(e)) : Ge(e)).forEach((t) => {
		let n = e.edge(t);
		e.removeEdge(t), n.forwardName = t.name, n.reversed = !0, e.setEdge(t.w, t.v, n, I("rev"));
	});
	function t(e) {
		return (t) => e.edge(t).weight;
	}
}
function Ge(e) {
	let t = [], n = {}, r = {};
	function i(a) {
		Object.hasOwn(r, a) || (r[a] = !0, n[a] = !0, e.outEdges(a).forEach((e) => {
			Object.hasOwn(n, e.w) ? t.push(e) : i(e.w);
		}), delete n[a]);
	}
	return e.nodes().forEach(i), t;
}
function Ke(e) {
	e.edges().forEach((t) => {
		let n = e.edge(t);
		if (n.reversed) {
			e.removeEdge(t);
			let r = n.forwardName;
			delete n.reversed, delete n.forwardName, e.setEdge(t.w, t.v, n, r);
		}
	});
}
function qe(e) {
	e.graph().dummyChains = [], e.edges().forEach((t) => Je(e, t));
}
function Je(e, t) {
	let n = t.v, r = e.node(n).rank, i = t.w, a = e.node(i).rank, o = t.name, s = e.edge(t), c = s.labelRank;
	if (a === r + 1) return;
	e.removeEdge(t);
	let l, u, d;
	for (d = 0, ++r; r < a; ++d, ++r) s.points = [], u = {
		width: 0,
		height: 0,
		edgeLabel: s,
		edgeObj: t,
		rank: r
	}, l = O(e, "edge", u, "_d"), r === c && (u.width = s.width, u.height = s.height, u.dummy = "edge-label", u.labelpos = s.labelpos), e.setEdge(n, l, { weight: s.weight }, o), d === 0 && e.graph().dummyChains.push(l), n = l;
	e.setEdge(n, i, { weight: s.weight }, o);
}
function Ye(e) {
	e.graph().dummyChains.forEach((t) => {
		let n = e.node(t), r = n.edgeLabel, i;
		for (e.setEdge(n.edgeObj, r); n.dummy;) i = e.successors(t)[0], e.removeNode(t), r.points.push({
			x: n.x,
			y: n.y
		}), n.dummy === "edge-label" && (r.x = n.x, r.y = n.y, r.width = n.width, r.height = n.height), t = i, n = e.node(t);
	});
}
function U(e) {
	let t = {};
	function n(r) {
		let i = e.node(r);
		if (Object.hasOwn(t, r)) return i.rank;
		t[r] = !0;
		let a = e.outEdges(r), o = a ? a.map((t) => t == null ? Infinity : n(t.w) - e.edge(t).minlen) : [], s = P(Math.min, o);
		return s === Infinity && (s = 0), i.rank = s;
	}
	e.sources().forEach(n);
}
function W(e, t) {
	return e.node(t.w).rank - e.node(t.v).rank - e.edge(t).minlen;
}
var Xe = Ze;
function Ze(e) {
	let t = new g({ directed: !1 }), n = e.nodes();
	if (n.length === 0) throw Error("Graph must have at least one node");
	let r = n[0], i = e.nodeCount();
	t.setNode(r, {});
	let a, o;
	for (; Qe(t, e) < i && (a = $e(t, e), a);) o = t.hasNode(a.v) ? W(e, a) : -W(e, a), et(t, e, o);
	return t;
}
function Qe(e, t) {
	function n(r) {
		let i = t.nodeEdges(r);
		i && i.forEach((i) => {
			let a = i.v, o = r === a ? i.w : a;
			!e.hasNode(o) && !W(t, i) && (e.setNode(o, {}), e.setEdge(r, o, {}), n(o));
		});
	}
	return e.nodes().forEach(n), e.nodeCount();
}
function $e(e, t) {
	return t.edges().reduce((n, r) => {
		let i = Infinity;
		return e.hasNode(r.v) !== e.hasNode(r.w) && (i = W(t, r)), i < n[0] ? [i, r] : n;
	}, [Infinity, null])[1];
}
function et(e, t, n) {
	e.nodes().forEach((e) => t.node(e).rank += n);
}
var { preorder: tt, postorder: nt } = S, rt = G;
G.initLowLimValues = q, G.initCutValues = K, G.calcCutValue = at, G.leaveEdge = st, G.enterEdge = ct, G.exchangeEdges = lt;
function G(e) {
	e = Ee(e), U(e);
	let t = Xe(e);
	q(t), K(t, e);
	let n, r;
	for (; n = st(t);) r = ct(t, e, n), lt(t, e, n, r);
}
function K(e, t) {
	let n = nt(e, e.nodes());
	n = n.slice(0, n.length - 1), n.forEach((n) => it(e, t, n));
}
function it(e, t, n) {
	let r = e.node(n).parent, i = e.edge(n, r);
	i.cutvalue = at(e, t, n);
}
function at(e, t, n) {
	let r = e.node(n).parent, i = !0, a = t.edge(n, r), o = 0;
	a ||= (i = !1, t.edge(r, n)), o = a.weight;
	let s = t.nodeEdges(n);
	return s && s.forEach((a) => {
		let s = a.v === n, c = s ? a.w : a.v;
		if (c !== r) {
			let r = s === i, l = t.edge(a).weight;
			if (o += r ? l : -l, dt(e, n, c)) {
				let t = e.edge(n, c).cutvalue;
				o += r ? -t : t;
			}
		}
	}), o;
}
function q(e, t) {
	arguments.length < 2 && (t = e.nodes()[0]), ot(e, {}, 1, t);
}
function ot(e, t, n, r, i) {
	let a = n, o = e.node(r);
	t[r] = !0;
	let s = e.neighbors(r);
	return s && s.forEach((i) => {
		Object.hasOwn(t, i) || (n = ot(e, t, n, i, r));
	}), o.low = a, o.lim = n++, i ? o.parent = i : delete o.parent, n;
}
function st(e) {
	return e.edges().find((t) => e.edge(t).cutvalue < 0);
}
function ct(e, t, n) {
	let r = n.v, i = n.w;
	t.hasEdge(r, i) || (r = n.w, i = n.v);
	let a = e.node(r), o = e.node(i), s = a, c = !1;
	return a.lim > o.lim && (s = o, c = !0), t.edges().filter((t) => c === ft(e, e.node(t.v), s) && c !== ft(e, e.node(t.w), s)).reduce((e, n) => W(t, n) < W(t, e) ? n : e);
}
function lt(e, t, n, r) {
	let i = n.v, a = n.w;
	e.removeEdge(i, a), e.setEdge(r.v, r.w, {}), q(e), K(e, t), ut(e, t);
}
function ut(e, t) {
	let n = e.nodes().find((t) => !e.node(t).parent);
	if (!n) return;
	let r = tt(e, [n]);
	r = r.slice(1), r.forEach((n) => {
		let r = e.node(n).parent, i = t.edge(n, r), a = !1;
		i || (i = t.edge(r, n), a = !0), t.node(n).rank = t.node(r).rank + (a ? i.minlen : -i.minlen);
	});
}
function dt(e, t, n) {
	return e.hasEdge(t, n);
}
function ft(e, t, n) {
	return n.low <= t.lim && t.lim <= n.lim;
}
var pt = mt;
function mt(e) {
	let t = e.graph().ranker;
	if (typeof t == "function") return t(e);
	switch (t) {
		case "network-simplex":
			_t(e);
			break;
		case "tight-tree":
			gt(e);
			break;
		case "longest-path":
			ht(e);
			break;
		case "none": break;
		default: _t(e);
	}
}
var ht = U;
function gt(e) {
	U(e), Xe(e);
}
function _t(e) {
	rt(e);
}
var vt = yt;
function yt(e) {
	let t = xt(e);
	e.graph().dummyChains.forEach((n) => {
		let r = e.node(n), i = r.edgeObj, a = bt(e, t, i.v, i.w), o = a.path, s = a.lca, c = 0, l = o[c], u = !0;
		for (; n !== i.w;) {
			if (r = e.node(n), u) {
				for (; (l = o[c]) !== s && e.node(l).maxRank < r.rank;) c++;
				l === s && (u = !1);
			}
			if (!u) {
				for (; c < o.length - 1 && e.node(o[c + 1]).minRank <= r.rank;) c++;
				l = o[c];
			}
			l !== void 0 && e.setParent(n, l), n = e.successors(n)[0];
		}
	});
}
function bt(e, t, n, r) {
	let i = [], a = [], o = Math.min(t[n].low, t[r].low), s = Math.max(t[n].lim, t[r].lim), c;
	c = n;
	do
		c = e.parent(c), i.push(c);
	while (c && (t[c].low > o || s > t[c].lim));
	let l = c, u = r;
	for (; (u = e.parent(u)) !== l;) a.push(u);
	return {
		path: i.concat(a.reverse()),
		lca: l
	};
}
function xt(e) {
	let t = {}, n = 0;
	function r(i) {
		let a = n;
		e.children(i).forEach(r), t[i] = {
			low: a,
			lim: n++
		};
	}
	return e.children(B).forEach(r), t;
}
function St(e) {
	let t = O(e, "root", {}, "_root"), n = Ct(e), r = Object.values(n), i = P(Math.max, r) - 1, a = 2 * i + 1;
	e.graph().nestingRoot = t, e.edges().forEach((t) => e.edge(t).minlen *= a);
	let o = wt(e) + 1;
	e.children(B).forEach((r) => J(e, t, a, o, i, n, r)), e.graph().nodeRankFactor = a;
}
function J(e, t, n, r, i, a, o) {
	let s = e.children(o);
	if (!s.length) {
		o !== t && e.setEdge(t, o, {
			weight: 0,
			minlen: n
		});
		return;
	}
	let c = M(e, "_bt"), l = M(e, "_bb"), u = e.node(o);
	e.setParent(c, o), u.borderTop = c, e.setParent(l, o), u.borderBottom = l, s.forEach((s) => {
		J(e, t, n, r, i, a, s);
		let u = e.node(s), d = u.borderTop ? u.borderTop : s, f = u.borderBottom ? u.borderBottom : s, p = u.borderTop ? r : 2 * r, m = d === f ? i - (a[o] ?? 0) + 1 : 1;
		e.setEdge(c, d, {
			weight: p,
			minlen: m,
			nestingEdge: !0
		}), e.setEdge(f, l, {
			weight: p,
			minlen: m,
			nestingEdge: !0
		});
	}), e.parent(o) || e.setEdge(t, c, {
		weight: 0,
		minlen: i + (a[o] ?? 0)
	});
}
function Ct(e) {
	let t = {};
	function n(r, i) {
		let a = e.children(r);
		a && a.length && a.forEach((e) => n(e, i + 1)), t[r] = i;
	}
	return e.children(B).forEach((e) => n(e, 1)), t;
}
function wt(e) {
	return e.edges().reduce((t, n) => t + e.edge(n).weight, 0);
}
function Tt(e) {
	let t = e.graph();
	e.removeNode(t.nestingRoot), delete t.nestingRoot, e.edges().forEach((t) => {
		e.edge(t).nestingEdge && e.removeEdge(t);
	});
}
var Et = Dt;
function Dt(e) {
	function t(n) {
		let r = e.children(n), i = e.node(n);
		if (r.length && r.forEach(t), Object.hasOwn(i, "minRank")) {
			i.borderLeft = [], i.borderRight = [];
			for (let t = i.minRank, r = i.maxRank + 1; t < r; ++t) Ot(e, "borderLeft", "_bl", n, i, t), Ot(e, "borderRight", "_br", n, i, t);
		}
	}
	e.children(B).forEach(t);
}
function Ot(e, t, n, r, i, a) {
	let o = {
		width: 0,
		height: 0,
		rank: a,
		borderType: t
	}, s = i[t][a - 1], c = O(e, "border", o, n);
	i[t][a] = c, e.setParent(c, r), s && e.setEdge(s, c, { weight: 1 });
}
function kt(e) {
	let t = e.graph().rankdir?.toLowerCase();
	(t === "lr" || t === "rl") && jt(e);
}
function At(e) {
	let t = e.graph().rankdir?.toLowerCase();
	(t === "bt" || t === "rl") && Nt(e), (t === "lr" || t === "rl") && (Pt(e), jt(e));
}
function jt(e) {
	e.nodes().forEach((t) => Mt(e.node(t))), e.edges().forEach((t) => Mt(e.edge(t)));
}
function Mt(e) {
	let t = e.width;
	e.width = e.height, e.height = t;
}
function Nt(e) {
	e.nodes().forEach((t) => Y(e.node(t))), e.edges().forEach((t) => {
		var n;
		let r = e.edge(t);
		(n = r.points) == null || n.forEach(Y), Object.hasOwn(r, "y") && Y(r);
	});
}
function Y(e) {
	e.y = -e.y;
}
function Pt(e) {
	e.nodes().forEach((t) => X(e.node(t))), e.edges().forEach((t) => {
		var n;
		let r = e.edge(t);
		(n = r.points) == null || n.forEach(X), Object.hasOwn(r, "x") && X(r);
	});
}
function X(e) {
	let t = e.x;
	e.x = e.y, e.y = t;
}
function Ft(e) {
	let t = {}, n = e.nodes().filter((t) => !e.children(t).length), r = n.map((t) => e.node(t).rank), i = L(P(Math.max, r) + 1).map(() => []);
	function a(n) {
		if (t[n]) return;
		t[n] = !0;
		let r = e.node(n);
		i[r.rank].push(n);
		let o = e.successors(n);
		o && o.forEach(a);
	}
	return n.sort((t, n) => e.node(t).rank - e.node(n).rank).forEach(a), i;
}
function It(e, t) {
	let n = 0;
	for (let r = 1; r < t.length; ++r) n += Lt(e, t[r - 1], t[r]);
	return n;
}
function Lt(e, t, n) {
	let r = Pe(n, n.map((e, t) => t)), i = t.flatMap((t) => {
		let n = e.outEdges(t);
		return n ? n.map((t) => ({
			pos: r[t.w],
			weight: e.edge(t).weight
		})).sort((e, t) => e.pos - t.pos) : [];
	}), a = 1;
	for (; a < n.length;) a <<= 1;
	let o = 2 * a - 1;
	--a;
	let s = Array(o).fill(0), c = 0;
	return i.forEach((e) => {
		let t = e.pos + a;
		s[t] += e.weight;
		let n = 0;
		for (; t > 0;) t % 2 && (n += s[t + 1]), t = t - 1 >> 1, s[t] += e.weight;
		c += e.weight * n;
	}), c;
}
function Rt(e, t = []) {
	return t.map((t) => {
		let n = e.inEdges(t);
		if (!n || !n.length) return { v: t };
		{
			let r = n.reduce((t, n) => {
				let r = e.edge(n), i = e.node(n.v);
				return {
					sum: t.sum + r.weight * i.order,
					weight: t.weight + r.weight
				};
			}, {
				sum: 0,
				weight: 0
			});
			return {
				v: t,
				barycenter: r.sum / r.weight,
				weight: r.weight
			};
		}
	});
}
function zt(e, t) {
	let n = {};
	return e.forEach((e, t) => {
		let r = {
			indegree: 0,
			in: [],
			out: [],
			vs: [e.v],
			i: t
		};
		e.barycenter !== void 0 && (r.barycenter = e.barycenter, r.weight = e.weight), n[e.v] = r;
	}), t.edges().forEach((e) => {
		let t = n[e.v], r = n[e.w];
		t !== void 0 && r !== void 0 && (r.indegree++, t.out.push(r));
	}), Bt(Object.values(n).filter((e) => !e.indegree));
}
function Bt(e) {
	let t = [];
	function n(e) {
		return (t) => {
			t.merged || (t.barycenter === void 0 || e.barycenter === void 0 || t.barycenter >= e.barycenter) && Vt(e, t);
		};
	}
	function r(t) {
		return (n) => {
			n.in.push(t), --n.indegree === 0 && e.push(n);
		};
	}
	for (; e.length;) {
		let i = e.pop();
		t.push(i), i.in.reverse().forEach(n(i)), i.out.forEach(r(i));
	}
	return t.filter((e) => !e.merged).map((e) => R(e, [
		"vs",
		"i",
		"barycenter",
		"weight"
	]));
}
function Vt(e, t) {
	let n = 0, r = 0;
	e.weight && (n += e.barycenter * e.weight, r += e.weight), t.weight && (n += t.barycenter * t.weight, r += t.weight), e.vs = t.vs.concat(e.vs), e.barycenter = n / r, e.weight = r, e.i = Math.min(t.i, e.i), t.merged = !0;
}
function Ht(e, t) {
	let n = Ae(e, (e) => Object.hasOwn(e, "barycenter")), r = n.lhs, i = n.rhs.sort((e, t) => t.i - e.i), a = [], o = 0, s = 0, c = 0;
	r.sort(Wt(!!t)), c = Ut(a, i, c), r.forEach((e) => {
		c += e.vs.length, a.push(e.vs), o += e.barycenter * e.weight, s += e.weight, c = Ut(a, i, c);
	});
	let l = { vs: a.flat(1) };
	return s && (l.barycenter = o / s, l.weight = s), l;
}
function Ut(e, t, n) {
	let r;
	for (; t.length && (r = t[t.length - 1]).i <= n;) t.pop(), e.push(r.vs), n++;
	return n;
}
function Wt(e) {
	return (t, n) => t.barycenter < n.barycenter ? -1 : t.barycenter > n.barycenter ? 1 : e ? n.i - t.i : t.i - n.i;
}
function Gt(e, t, n, r) {
	let i = e.children(t), a = e.node(t), o = a ? a.borderLeft : void 0, s = a ? a.borderRight : void 0, c = {};
	o && (i = i.filter((e) => e !== o && e !== s));
	let l = Rt(e, i);
	l.forEach((t) => {
		if (e.children(t.v).length) {
			let i = Gt(e, t.v, n, r);
			c[t.v] = i, Object.hasOwn(i, "barycenter") && qt(t, i);
		}
	});
	let u = zt(l, n);
	Kt(u, c);
	let d = Ht(u, r);
	if (o && s) {
		d.vs = [
			o,
			d.vs,
			s
		].flat(1);
		let t = e.predecessors(o);
		if (t && t.length) {
			let n = e.node(t[0]), r = e.predecessors(s), i = e.node(r[0]);
			Object.hasOwn(d, "barycenter") || (d.barycenter = 0, d.weight = 0), d.barycenter = (d.barycenter * d.weight + n.order + i.order) / (d.weight + 2), d.weight += 2;
		}
	}
	return d;
}
function Kt(e, t) {
	e.forEach((e) => {
		e.vs = e.vs.flatMap((e) => t[e] ? t[e].vs : e);
	});
}
function qt(e, t) {
	e.barycenter === void 0 ? (e.barycenter = t.barycenter, e.weight = t.weight) : (e.barycenter = (e.barycenter * e.weight + t.barycenter * t.weight) / (e.weight + t.weight), e.weight += t.weight);
}
function Jt(e, t, n, r) {
	r ||= e.nodes();
	let i = Yt(e), a = new g({ compound: !0 }).setGraph({ root: i }).setDefaultNodeLabel((t) => e.node(t));
	return r.forEach((r) => {
		let o = e.node(r), s = e.parent(r);
		if (o.rank === t || o.minRank <= t && t <= o.maxRank) {
			a.setNode(r), a.setParent(r, s || i);
			let c = e[n](r);
			c && c.forEach((t) => {
				let n = t.v === r ? t.w : t.v, i = a.edge(n, r), o = i === void 0 ? 0 : i.weight;
				a.setEdge(n, r, { weight: e.edge(t).weight + o });
			}), Object.hasOwn(o, "minRank") && a.setNode(r, {
				borderLeft: o.borderLeft[t],
				borderRight: o.borderRight[t]
			});
		}
	}), a;
}
function Yt(e) {
	let t;
	for (; e.hasNode(t = I("_root")););
	return t;
}
function Xt(e, t, n) {
	let r = {}, i;
	n.forEach((n) => {
		let a = e.parent(n), o, s;
		for (; a;) {
			if (o = e.parent(a), o ? (s = r[o], r[o] = a) : (s = i, i = a), s && s !== a) {
				t.setEdge(s, a);
				return;
			}
			a = o;
		}
	});
}
function Zt(e, t = {}) {
	if (typeof t.customOrder == "function") {
		t.customOrder(e, Zt);
		return;
	}
	let n = F(e), r = Qt(e, L(1, n + 1), "inEdges"), i = Qt(e, L(n - 1, -1, -1), "outEdges"), a = Ft(e);
	if (en(e, a), t.disableOptimalOrderHeuristic) return;
	let o = Infinity, s, c = t.constraints || [];
	for (let t = 0, n = 0; n < 4; ++t, ++n) {
		$t(t % 2 ? r : i, t % 4 >= 2, c), a = j(e);
		let l = It(e, a);
		l < o ? (n = 0, s = Object.assign({}, a), o = l) : l === o && (s = structuredClone(a));
	}
	en(e, s);
}
function Qt(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i = (e, t) => {
		r.has(e) || r.set(e, []), r.get(e).push(t);
	};
	for (let t of e.nodes()) {
		let n = e.node(t);
		if (typeof n.rank == "number" && i(n.rank, t), typeof n.minRank == "number" && typeof n.maxRank == "number") for (let e = n.minRank; e <= n.maxRank; e++) e !== n.rank && i(e, t);
	}
	return t.map(function(t) {
		return Jt(e, t, n, r.get(t) || []);
	});
}
function $t(e, t, n) {
	let r = new g();
	e.forEach(function(e) {
		n.forEach((e) => r.setEdge(e.left, e.right));
		let i = e.graph().root, a = Gt(e, i, r, t);
		a.vs.forEach((t, n) => e.node(t).order = n), Xt(e, r, a.vs);
	});
}
function en(e, t) {
	Object.values(t).forEach((t) => t.forEach((t, n) => e.node(t).order = n));
}
function tn(e, t) {
	let n = {};
	function r(t, r) {
		let i = 0, a = 0, o = t.length, s = r[r.length - 1];
		return r.forEach((t, c) => {
			let l = rn(e, t), u = l ? e.node(l).order : o;
			(l || t === s) && (r.slice(a, c + 1).forEach((t) => {
				let r = e.predecessors(t);
				r && r.forEach((r) => {
					let a = e.node(r), o = a.order;
					(o < i || u < o) && !(a.dummy && e.node(t).dummy) && an(n, r, t);
				});
			}), a = c + 1, i = u);
		}), r;
	}
	return t.length && t.reduce(r), n;
}
function nn(e, t) {
	let n = {};
	function r(t, r, i, a, o) {
		L(r, i).forEach((r) => {
			let i = t[r];
			if (i !== void 0 && e.node(i).dummy) {
				let t = e.predecessors(i);
				t && t.forEach((t) => {
					if (t === void 0) return;
					let r = e.node(t);
					r.dummy && (r.order < a || r.order > o) && an(n, t, i);
				});
			}
		});
	}
	function i(t, n) {
		let i = -1, a = -1, o = 0;
		return n.forEach((s, c) => {
			if (e.node(s).dummy === "border") {
				let t = e.predecessors(s);
				if (t && t.length) {
					let s = t[0];
					if (s === void 0) return;
					a = e.node(s).order, r(n, o, c, i, a), o = c, i = a;
				}
			}
			r(n, o, n.length, a, t.length);
		}), n;
	}
	return t.length && t.reduce(i), n;
}
function rn(e, t) {
	if (e.node(t).dummy) {
		let n = e.predecessors(t);
		if (n) return n.find((t) => e.node(t).dummy);
	}
}
function an(e, t, n) {
	if (t > n) {
		let e = t;
		t = n, n = e;
	}
	let r = e[t];
	r || (e[t] = r = {}), r[n] = !0;
}
function on(e, t, n) {
	if (t > n) {
		let e = t;
		t = n, n = e;
	}
	let r = e[t];
	return r !== void 0 && Object.hasOwn(r, n);
}
function sn(e, t, n, r) {
	let i = {}, a = {}, o = {};
	return t.forEach((e) => {
		e.forEach((e, t) => {
			i[e] = e, a[e] = e, o[e] = t;
		});
	}), t.forEach((e) => {
		let t = -1;
		e.forEach((e) => {
			let s = r(e);
			if (s && s.length) {
				let r = s.sort((e, t) => {
					let n = o[e], r = o[t];
					return (n === void 0 ? 0 : n) - (r === void 0 ? 0 : r);
				}), c = (r.length - 1) / 2;
				for (let s = Math.floor(c), l = Math.ceil(c); s <= l; ++s) {
					let c = r[s];
					if (c === void 0) continue;
					let l = o[c];
					if (l !== void 0 && a[e] === e && t < l && !on(n, e, c)) {
						let n = i[c];
						n !== void 0 && (a[c] = e, a[e] = i[e] = n, t = l);
					}
				}
			}
		});
	}), {
		root: i,
		align: a
	};
}
function cn(e, t, n, r, i = !1) {
	let a = {}, o = ln(e, t, n, i), s = i ? "borderLeft" : "borderRight";
	function c(e, t) {
		let n = o.nodes().slice(), r = {}, i = n.pop();
		for (; i;) {
			if (r[i]) e(i);
			else {
				r[i] = !0, n.push(i);
				for (let e of t(i)) n.push(e);
			}
			i = n.pop();
		}
	}
	function l(e) {
		let t = o.inEdges(e);
		t ? a[e] = t.reduce((e, t) => {
			let n = a[t.v] ?? 0, r = o.edge(t);
			return Math.max(e, n + (r === void 0 ? 0 : r));
		}, 0) : a[e] = 0;
	}
	function u(t) {
		let n = o.outEdges(t), r = Infinity;
		n && (r = n.reduce((e, t) => {
			let n = a[t.w], r = o.edge(t);
			return Math.min(e, (n === void 0 ? 0 : n) - (r === void 0 ? 0 : r));
		}, Infinity));
		let i = e.node(t);
		r !== Infinity && i.borderType !== s && (a[t] = Math.max(a[t] === void 0 ? 0 : a[t], r));
	}
	function d(e) {
		return o.predecessors(e) || [];
	}
	function f(e) {
		return o.successors(e) || [];
	}
	return c(l, d), c(u, f), Object.keys(r).forEach((e) => {
		let t = n[e];
		t !== void 0 && (a[e] = a[t] ?? 0);
	}), a;
}
function ln(e, t, n, r) {
	let i = new g(), a = e.graph(), o = mn(a.nodesep, a.edgesep, r);
	return t.forEach((t) => {
		let r;
		t.forEach((t) => {
			let a = n[t];
			if (a !== void 0) {
				if (i.setNode(a), r !== void 0) {
					let s = n[r];
					if (s !== void 0) {
						let n = i.edge(s, a);
						i.setEdge(s, a, Math.max(o(e, t, r), n || 0));
					}
				}
				r = t;
			}
		});
	}), i;
}
function un(e, t) {
	return Object.values(t).reduce((t, n) => {
		let r = -Infinity, i = Infinity;
		Object.entries(n).forEach(([t, n]) => {
			let a = hn(e, t) / 2;
			r = Math.max(n + a, r), i = Math.min(n - a, i);
		});
		let a = r - i;
		return a < t[0] && (t = [a, n]), t;
	}, [Infinity, null])[1];
}
function dn(e, t) {
	let n = Object.values(t), r = P(Math.min, n), i = P(Math.max, n);
	["u", "d"].forEach((n) => {
		["l", "r"].forEach((a) => {
			let o = n + a, s = e[o];
			if (!s || s === t) return;
			let c = Object.values(s), l = r - P(Math.min, c);
			a !== "l" && (l = i - P(Math.max, c)), l && (e[o] = z(s, (e) => e + l));
		});
	});
}
function fn(e, t = void 0) {
	let n = e.ul;
	return n ? z(n, (n, r) => {
		if (t) {
			let n = e[t.toLowerCase()];
			if (n && n[r] !== void 0) return n[r];
		}
		let i = Object.values(e).map((e) => {
			let t = e[r];
			return t === void 0 ? 0 : t;
		}).sort((e, t) => e - t);
		return ((i[1] ?? 0) + (i[2] ?? 0)) / 2;
	}) : {};
}
function pn(e) {
	let t = j(e), n = Object.assign(tn(e, t), nn(e, t)), r = {}, i;
	return ["u", "d"].forEach((a) => {
		i = a === "u" ? t : Object.values(t).reverse(), ["l", "r"].forEach((t) => {
			t === "r" && (i = i.map((e) => Object.values(e).reverse()));
			let o = sn(e, i, n, (t) => (a === "u" ? e.predecessors(t) : e.successors(t)) || []), s = cn(e, i, o.root, o.align, t === "r");
			t === "r" && (s = z(s, (e) => -e)), r[a + t] = s;
		});
	}), dn(r, un(e, r)), fn(r, e.graph().align);
}
function mn(e, t, n) {
	return (r, i, a) => {
		let o = r.node(i), s = r.node(a), c = 0, l;
		if (c += o.width / 2, Object.hasOwn(o, "labelpos")) switch (o.labelpos.toLowerCase()) {
			case "l":
				l = -o.width / 2;
				break;
			case "r":
				l = o.width / 2;
				break;
		}
		if (l && (c += n ? l : -l), l = void 0, c += (o.dummy ? t : e) / 2, c += (s.dummy ? t : e) / 2, c += s.width / 2, Object.hasOwn(s, "labelpos")) switch (s.labelpos.toLowerCase()) {
			case "l":
				l = s.width / 2;
				break;
			case "r":
				l = -s.width / 2;
				break;
		}
		return l && (c += n ? l : -l), c;
	};
}
function hn(e, t) {
	return e.node(t).width;
}
function gn(e) {
	e = k(e), _n(e), Object.entries(pn(e)).forEach(([t, n]) => e.node(t).x = n);
}
function _n(e) {
	let t = j(e), n = e.graph(), r = n.ranksep, i = n.rankalign, a = 0;
	t.forEach((t) => {
		let n = t.reduce((t, n) => {
			let r = e.node(n).height ?? 0;
			return t > r ? t : r;
		}, 0);
		t.forEach((t) => {
			let r = e.node(t);
			r.y = i === "top" ? a + r.height / 2 : i === "bottom" ? a + n - r.height / 2 : a + n / 2;
		}), a += n + r;
	});
}
function vn(e, t = {}) {
	let n = t.debugTiming ? je : Me;
	return n("layout", () => {
		let r = n("  buildLayoutGraph", () => kn(e));
		return n("  runLayout", () => yn(r, n, t)), n("  updateInputGraph", () => bn(e, r)), r;
	});
}
function yn(e, t, n) {
	t("    makeSpaceForEdgeLabels", () => An(e)), t("    removeSelfEdges", () => zn(e)), t("    acyclic", () => We(e)), t("    nestingGraph.run", () => St(e)), t("    rank", () => pt(k(e))), t("    injectEdgeLabelProxies", () => jn(e)), t("    removeEmptyRanks", () => Oe(e)), t("    nestingGraph.cleanup", () => Tt(e)), t("    normalizeRanks", () => De(e)), t("    assignRankMinMax", () => Mn(e)), t("    removeEdgeLabelProxies", () => Nn(e)), t("    normalize.run", () => qe(e)), t("    parentDummyChains", () => vt(e)), t("    addBorderSegments", () => Et(e)), t("    order", () => Zt(e, n)), t("    insertSelfEdges", () => Bn(e)), t("    adjustCoordinateSystem", () => kt(e)), t("    position", () => gn(e)), t("    positionSelfEdges", () => Vn(e)), t("    removeBorderNodes", () => Rn(e)), t("    normalize.undo", () => Ye(e)), t("    fixupEdgeLabelCoords", () => In(e)), t("    undoCoordinateSystem", () => At(e)), t("    translateGraph", () => Pn(e)), t("    assignNodeIntersects", () => Fn(e)), t("    reversePoints", () => Ln(e)), t("    acyclic.undo", () => Ke(e));
}
function bn(e, t) {
	e.nodes().forEach((n) => {
		let r = e.node(n), i = t.node(n);
		r && (r.x = i.x, r.y = i.y, r.order = i.order, r.rank = i.rank, t.children(n).length && (r.width = i.width, r.height = i.height));
	}), e.edges().forEach((n) => {
		let r = e.edge(n), i = t.edge(n);
		r.points = i.points, Object.hasOwn(i, "x") && (r.x = i.x, r.y = i.y);
	}), e.graph().width = t.graph().width, e.graph().height = t.graph().height;
}
var xn = [
	"nodesep",
	"edgesep",
	"ranksep",
	"marginx",
	"marginy"
], Sn = {
	ranksep: 50,
	edgesep: 20,
	nodesep: 50,
	rankdir: "TB",
	rankalign: "center"
}, Cn = [
	"acyclicer",
	"ranker",
	"rankdir",
	"align",
	"rankalign"
], wn = [
	"width",
	"height",
	"rank"
], Tn = {
	width: 0,
	height: 0
}, En = [
	"minlen",
	"weight",
	"width",
	"height",
	"labeloffset"
], Dn = {
	minlen: 1,
	weight: 1,
	width: 0,
	height: 0,
	labeloffset: 10,
	labelpos: "r"
}, On = ["labelpos"];
function kn(e) {
	let t = new g({
		multigraph: !0,
		compound: !0
	}), n = Q(e.graph());
	return t.setGraph(Object.assign({}, Sn, Z(n, xn), R(n, Cn))), e.nodes().forEach((n) => {
		let r = Z(Q(e.node(n)), wn);
		Object.keys(Tn).forEach((e) => {
			r[e] === void 0 && (r[e] = Tn[e]);
		}), t.setNode(n, r);
		let i = e.parent(n);
		i !== void 0 && t.setParent(n, i);
	}), e.edges().forEach((n) => {
		let r = Q(e.edge(n));
		t.setEdge(n, Object.assign({}, Dn, Z(r, En), R(r, On)));
	}), t;
}
function An(e) {
	let t = e.graph();
	t.ranksep /= 2, e.edges().forEach((n) => {
		let r = e.edge(n);
		r.minlen *= 2, r.labelpos.toLowerCase() !== "c" && (t.rankdir === "TB" || t.rankdir === "BT" ? r.width += r.labeloffset : r.height += r.labeloffset);
	});
}
function jn(e) {
	e.edges().forEach((t) => {
		let n = e.edge(t);
		if (n.width && n.height) {
			let n = e.node(t.v);
			O(e, "edge-proxy", {
				rank: (e.node(t.w).rank - n.rank) / 2 + n.rank,
				e: t
			}, "_ep");
		}
	});
}
function Mn(e) {
	let t = 0;
	e.nodes().forEach((n) => {
		let r = e.node(n);
		r.borderTop && (r.minRank = e.node(r.borderTop).rank, r.maxRank = e.node(r.borderBottom).rank, t = Math.max(t, r.maxRank));
	}), e.graph().maxRank = t;
}
function Nn(e) {
	e.nodes().forEach((t) => {
		let n = e.node(t);
		if (n.dummy === "edge-proxy") {
			let r = n;
			e.edge(r.e).labelRank = n.rank, e.removeNode(t);
		}
	});
}
function Pn(e) {
	let t = Infinity, n = 0, r = Infinity, i = 0, a = e.graph(), o = a.marginx || 0, s = a.marginy || 0;
	function c(e) {
		let a = e.x, o = e.y, s = e.width, c = e.height;
		t = Math.min(t, a - s / 2), n = Math.max(n, a + s / 2), r = Math.min(r, o - c / 2), i = Math.max(i, o + c / 2);
	}
	e.nodes().forEach((t) => c(e.node(t))), e.edges().forEach((t) => {
		let n = e.edge(t);
		Object.hasOwn(n, "x") && c(n);
	}), t -= o, r -= s, e.nodes().forEach((n) => {
		let i = e.node(n);
		i.x -= t, i.y -= r;
	}), e.edges().forEach((n) => {
		let i = e.edge(n);
		i.points.forEach((e) => {
			e.x -= t, e.y -= r;
		}), Object.hasOwn(i, "x") && (i.x -= t), Object.hasOwn(i, "y") && (i.y -= r);
	}), a.width = n - t + o, a.height = i - r + s;
}
function Fn(e) {
	e.edges().forEach((t) => {
		let n = e.edge(t), r = e.node(t.v), i = e.node(t.w), a, o;
		n.points ? (a = n.points[0], o = n.points[n.points.length - 1]) : (n.points = [], a = i, o = r), n.points.unshift(A(r, a)), n.points.push(A(i, o));
	});
}
function In(e) {
	e.edges().forEach((t) => {
		let n = e.edge(t);
		if (Object.hasOwn(n, "x")) switch ((n.labelpos === "l" || n.labelpos === "r") && (n.width -= n.labeloffset), n.labelpos) {
			case "l":
				n.x -= n.width / 2 + n.labeloffset;
				break;
			case "r":
				n.x += n.width / 2 + n.labeloffset;
				break;
		}
	});
}
function Ln(e) {
	e.edges().forEach((t) => {
		let n = e.edge(t);
		n.reversed && n.points.reverse();
	});
}
function Rn(e) {
	e.nodes().forEach((t) => {
		if (e.children(t).length) {
			let n = e.node(t), r = e.node(n.borderTop), i = e.node(n.borderBottom), a = e.node(n.borderLeft[n.borderLeft.length - 1]), o = e.node(n.borderRight[n.borderRight.length - 1]);
			n.width = Math.abs(o.x - a.x), n.height = Math.abs(i.y - r.y), n.x = a.x + n.width / 2, n.y = r.y + n.height / 2;
		}
	}), e.nodes().forEach((t) => {
		e.node(t).dummy === "border" && e.removeNode(t);
	});
}
function zn(e) {
	e.edges().forEach((t) => {
		if (t.v === t.w) {
			let n = e.node(t.v);
			n.selfEdges ||= [], n.selfEdges.push({
				e: t,
				label: e.edge(t)
			}), e.removeEdge(t);
		}
	});
}
function Bn(e) {
	j(e).forEach((t) => {
		let n = 0;
		t.forEach((t, r) => {
			let i = e.node(t);
			i.order = r + n, (i.selfEdges || []).forEach((t) => {
				O(e, "selfedge", {
					width: t.label.width,
					height: t.label.height,
					rank: i.rank,
					order: r + ++n,
					e: t.e,
					label: t.label
				}, "_se");
			}), delete i.selfEdges;
		});
	});
}
function Vn(e) {
	e.nodes().forEach((t) => {
		let n = e.node(t);
		if (n.dummy === "selfedge") {
			let r = n, i = e.node(r.e.v), a = i.x + i.width / 2, o = i.y, s = n.x - a, c = i.height / 2;
			e.setEdge(r.e, r.label), e.removeNode(t), r.label.points = [
				{
					x: a + 2 * s / 3,
					y: o - c
				},
				{
					x: a + 5 * s / 6,
					y: o - c
				},
				{
					x: a + s,
					y: o
				},
				{
					x: a + 5 * s / 6,
					y: o + c
				},
				{
					x: a + 2 * s / 3,
					y: o + c
				}
			], r.label.x = n.x, r.label.y = n.y;
		}
	});
}
function Z(e, t) {
	return z(R(e, t), Number);
}
function Q(e) {
	let t = {};
	return e && Object.entries(e).forEach(([e, n]) => {
		typeof e == "string" && (e = e.toLowerCase()), t[e] = n;
	}), t;
}
//#endregion
//#region src/erdDiagram.ts
var Hn = 160, Un = 50, Wn = 8, Gn = 24, Kn = {
	child: {
		fill: "#dae8fc",
		stroke: "#6c8ebf"
	},
	primary: {
		fill: "#d5e8d4",
		stroke: "#82b366"
	}
}, $ = "dpuse-tool-d3-erd-arrow";
function qn(e, t, r = {}) {
	let a = r.nodeWidth ?? Hn, o = r.nodeHeight ?? Un, s = r.padding ?? Wn, l = r.selfEdgeSize ?? Gn, u = r.nodeColors ?? Kn;
	function d() {
		n(t).selectAll("svg").remove();
		let r = new p.Graph();
		r.setGraph({
			rankdir: "TB",
			nodesep: 40,
			ranksep: 60
		}), r.setDefaultEdgeLabel(() => ({}));
		for (let t of e.nodes) r.setNode(t.id, {
			width: a,
			height: o,
			label: t.label,
			typeId: t.typeId
		});
		for (let t of e.edges) t.source === t.target ? r.setEdge(t.source, t.target, {
			width: l,
			height: l
		}) : r.setEdge(t.source, t.target);
		vn(r);
		let { width: d = 0, height: f = 0 } = r.graph(), m = d + s * 2, h = f + s * 2, g = n(t).append("svg").attr("viewBox", `0 0 ${String(m)} ${String(h)}`).attr("width", m).attr("height", h), _ = g.append("g").attr("transform", `translate(${String(s)}, ${String(s)})`);
		g.append("defs").append("marker").attr("id", $).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", "auto-start-reverse").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("fill", "#6c8ebf");
		let v = c().x((e) => e.x).y((e) => e.y).curve(i);
		_.append("g").attr("fill", "none").attr("stroke", "#6c8ebf").attr("stroke-width", 1.5).selectAll("path").data(r.edges()).join("path").attr("marker-end", `url(#${$})`).attr("d", (e) => e.v === e.w ? Jn(r.node(e.v), l) : v(r.edge(e).points ?? []) ?? "");
		let y = _.append("g").selectAll("g").data(r.nodes()).join("g").attr("transform", (e) => {
			let t = r.node(e);
			return `translate(${String((t.x ?? 0) - t.width / 2)}, ${String((t.y ?? 0) - t.height / 2)})`;
		});
		y.append("rect").attr("width", (e) => r.node(e).width).attr("height", (e) => r.node(e).height).attr("rx", 6).attr("fill", (e) => u[r.node(e).typeId].fill).attr("stroke", (e) => u[r.node(e).typeId].stroke), y.append("text").attr("x", (e) => r.node(e).width / 2).attr("y", (e) => r.node(e).height / 2).attr("text-anchor", "middle").attr("dominant-baseline", "middle").attr("font-family", "Helvetica, Arial, sans-serif").attr("font-size", 14).attr("fill", "#000000").text((e) => r.node(e).label ?? "");
		let b = g.node();
		if (b == null) throw Error("Failed to create ERD diagram SVG element.");
		return b;
	}
	let f = d();
	return {
		resize: () => {
			f = d();
		},
		get svg() {
			return f;
		}
	};
}
function Jn(e, t) {
	let n = (e.x ?? 0) + e.width / 2, r = n + t, i = (e.y ?? 0) - e.height / 4, a = (e.y ?? 0) + e.height / 4;
	return `M ${String(n)} ${String(i)} C ${String(r)} ${String(i)}, ${String(r)} ${String(a)}, ${String(n)} ${String(a)}`;
}
//#endregion
export { qn as renderErdDiagram };

//# sourceMappingURL=erdDiagram-DNEvMuIA.js.map