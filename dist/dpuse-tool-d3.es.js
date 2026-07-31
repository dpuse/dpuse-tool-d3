//#region node_modules/@dagrejs/dagre/dist/dagre.esm.js
var e = Object.defineProperty, t = (t, n, r) => n in t ? e(t, n, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: r
}) : t[n] = r, n = (t, n) => {
	for (var r in n) e(t, r, {
		get: n[r],
		enumerable: !0
	});
}, r = (e, n, r) => t(e, typeof n == "symbol" ? n : n + "", r), i = {};
n(i, {
	Graph: () => s,
	alg: () => y,
	json: () => m,
	version: () => p
});
var a = Object.defineProperty, o = (e, t) => {
	for (var n in t) a(e, n, {
		get: t[n],
		enumerable: !0
	});
}, s = class {
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
		let i, a, o, s, l = !1;
		typeof e == "object" && e && "v" in e ? (i = e.v, a = e.w, o = e.name, arguments.length === 2 && (s = t, l = !0)) : (i = e, a = t, o = r, arguments.length > 2 && (s = n, l = !0)), i = "" + i, a = "" + a, o !== void 0 && (o = "" + o);
		let f = u(this._isDirected, i, a, o);
		if (f in this._edgeLabels) return l && (this._edgeLabels[f] = s), this;
		if (o !== void 0 && !this._isMultigraph) throw Error("Cannot set a named edge when isMultigraph = false");
		this.setNode(i), this.setNode(a), this._edgeLabels[f] = l ? s : this._defaultEdgeLabelFn(i, a, o);
		let p = d(this._isDirected, i, a, o);
		return i = p.v, a = p.w, Object.freeze(p), this._edgeObjs[f] = p, c(this._preds[a], i), c(this._sucs[i], a), this._in[a][f] = p, this._out[i][f] = p, this._edgeCount++, this;
	}
	edge(e, t, n) {
		let r = arguments.length === 1 ? f(this._isDirected, e) : u(this._isDirected, e, t, n);
		return this._edgeLabels[r];
	}
	edgeAsObj(e, t, n) {
		let r = arguments.length === 1 ? this.edge(e) : this.edge(e, t, n);
		return typeof r == "object" ? r : { label: r };
	}
	hasEdge(e, t, n) {
		return (arguments.length === 1 ? f(this._isDirected, e) : u(this._isDirected, e, t, n)) in this._edgeLabels;
	}
	removeEdge(e, t, n) {
		let r = arguments.length === 1 ? f(this._isDirected, e) : u(this._isDirected, e, t, n), i = this._edgeObjs[r];
		if (i) {
			let e = i.v, t = i.w;
			delete this._edgeLabels[r], delete this._edgeObjs[r], l(this._preds[t], e), l(this._sucs[e], t), delete this._in[t][r], delete this._out[e][r], this._edgeCount--;
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
function c(e, t) {
	e[t] ? e[t]++ : e[t] = 1;
}
function l(e, t) {
	e[t] !== void 0 && !--e[t] && delete e[t];
}
function u(e, t, n, r) {
	let i = "" + t, a = "" + n;
	if (!e && i > a) {
		let e = i;
		i = a, a = e;
	}
	return i + "" + a + "" + (r === void 0 ? "\0" : r);
}
function d(e, t, n, r) {
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
function f(e, t) {
	return u(e, t.v, t.w, t.name);
}
var p = "4.0.1", m = {};
o(m, {
	read: () => v,
	write: () => h
});
function h(e) {
	let t = {
		options: {
			directed: e.isDirected(),
			multigraph: e.isMultigraph(),
			compound: e.isCompound()
		},
		nodes: g(e),
		edges: _(e)
	}, n = e.graph();
	return n !== void 0 && (t.value = structuredClone(n)), t;
}
function g(e) {
	return e.nodes().map((t) => {
		let n = e.node(t), r = e.parent(t), i = { v: t };
		return n !== void 0 && (i.value = n), r !== void 0 && (i.parent = r), i;
	});
}
function _(e) {
	return e.edges().map((t) => {
		let n = e.edge(t), r = {
			v: t.v,
			w: t.w
		};
		return t.name !== void 0 && (r.name = t.name), n !== void 0 && (r.value = n), r;
	});
}
function v(e) {
	let t = new s(e.options);
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
var y = {};
o(y, {
	CycleException: () => ue,
	bellmanFord: () => x,
	components: () => ee,
	dijkstra: () => C,
	dijkstraAll: () => ie,
	findCycles: () => oe,
	floydWarshall: () => ce,
	isAcyclic: () => fe,
	postorder: () => ge,
	preorder: () => _e,
	prim: () => ve,
	shortestPaths: () => ye,
	tarjan: () => ae,
	topsort: () => de
});
var b = () => 1;
function x(e, t, n, r) {
	return S(e, String(t), n || b, r || function(t) {
		return e.outEdges(t);
	});
}
function S(e, t, n, r) {
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
function ee(e) {
	let t = {}, n = [], r;
	function i(n) {
		n in t || (t[n] = !0, r.push(n), e.successors(n).forEach(i), e.predecessors(n).forEach(i));
	}
	return e.nodes().forEach(function(e) {
		r = [], i(e), r.length && n.push(r);
	}), n;
}
var te = class {
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
}, ne = () => 1;
function C(e, t, n, r) {
	return re(e, String(t), n || ne, r || function(t) {
		return e.outEdges(t);
	});
}
function re(e, t, n, r) {
	let i = {}, a = new te(), o, s, c = function(e) {
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
function ie(e, t, n) {
	return e.nodes().reduce(function(r, i) {
		return r[i] = C(e, i, t, n), r;
	}, {});
}
function ae(e) {
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
function oe(e) {
	return ae(e).filter(function(t) {
		return t.length > 1 || t.length === 1 && e.hasEdge(t[0], t[0]);
	});
}
var se = () => 1;
function ce(e, t, n) {
	return le(e, t || se, n || function(t) {
		return e.outEdges(t);
	});
}
function le(e, t, n) {
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
var ue = class extends Error {
	constructor(...e) {
		super(...e);
	}
};
function de(e) {
	let t = {}, n = {}, r = [];
	function i(a) {
		if (a in n) throw new ue();
		a in t || (n[a] = !0, t[a] = !0, e.predecessors(a).forEach(i), delete n[a], r.push(a));
	}
	if (e.sinks().forEach(i), Object.keys(t).length !== e.nodeCount()) throw new ue();
	return r;
}
function fe(e) {
	try {
		de(e);
	} catch (e) {
		if (e instanceof ue) return !1;
		throw e;
	}
	return !0;
}
function pe(e, t, n, r, i) {
	Array.isArray(t) || (t = [t]);
	let a = ((t) => (e.isDirected() ? e.successors(t) : e.neighbors(t)) ?? []), o = {};
	return t.forEach(function(t) {
		if (!e.hasNode(t)) throw Error("Graph does not have node: " + t);
		i = me(e, t, n === "post", o, a, r, i);
	}), i;
}
function me(e, t, n, r, i, a, o) {
	return t in r || (r[t] = !0, n || (o = a(o, t)), i(t).forEach(function(t) {
		o = me(e, t, n, r, i, a, o);
	}), n && (o = a(o, t))), o;
}
function he(e, t, n) {
	return pe(e, t, n, function(e, t) {
		return e.push(t), e;
	}, []);
}
function ge(e, t) {
	return he(e, t, "post");
}
function _e(e, t) {
	return he(e, t, "pre");
}
function ve(e, t) {
	let n = new s(), r = {}, i = new te(), a;
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
	let c = !1;
	for (; i.size() > 0;) {
		if (a = i.removeMin(), a in r) n.setEdge(a, r[a]);
		else {
			if (c) throw Error("Input graph is not connected: " + e);
			c = !0;
		}
		e.nodeEdges(a).forEach(o);
	}
	return n;
}
function ye(e, t, n, r) {
	return be(e, t, n, r ?? ((t) => e.outEdges(t) ?? []));
}
function be(e, t, n, r) {
	if (n === void 0) return C(e, t, n, r);
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
		if (i) return x(e, t, n, r);
	}
	return C(e, t, n, r);
}
function w(e, t, n, r) {
	let i = r;
	for (; e.hasNode(i);) i = Fe(r);
	return n.dummy = t, e.setNode(i, n), i;
}
function xe(e) {
	let t = new s().setGraph(e.graph());
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
function Se(e) {
	let t = new s({ multigraph: e.isMultigraph() }).setGraph(e.graph());
	return e.nodes().forEach((n) => {
		e.children(n).length || t.setNode(n, e.node(n));
	}), e.edges().forEach((n) => {
		t.setEdge(n, e.edge(n));
	}), t;
}
function Ce(e, t) {
	let n = e.x, r = e.y, i = t.x - n, a = t.y - r, o = e.width / 2, s = e.height / 2;
	if (!i && !a) throw Error("Not possible to find intersection inside of the rectangle");
	let c, l;
	return Math.abs(a) * o > Math.abs(i) * s ? (a < 0 && (s = -s), c = s * i / a, l = s) : (i < 0 && (o = -o), c = o, l = o * a / i), {
		x: n + c,
		y: r + l
	};
}
function we(e) {
	let t = Ie(Ae(e) + 1).map(() => []);
	return e.nodes().forEach((n) => {
		let r = e.node(n), i = r.rank;
		i !== void 0 && (t[i] || (t[i] = []), t[i][r.order] = n);
	}), t;
}
function Te(e) {
	let t = e.nodes().map((t) => {
		let n = e.node(t).rank;
		return n === void 0 ? Number.MAX_VALUE : n;
	}), n = T(Math.min, t);
	e.nodes().forEach((t) => {
		let r = e.node(t);
		Object.hasOwn(r, "rank") && (r.rank -= n);
	});
}
function Ee(e) {
	let t = e.nodes().map((t) => e.node(t).rank).filter((e) => e !== void 0), n = T(Math.min, t), r = [];
	e.nodes().forEach((t) => {
		let i = e.node(t).rank - n;
		r[i] || (r[i] = []), r[i].push(t);
	});
	let i = 0, a = e.graph().nodeRankFactor;
	Array.from(r).forEach((t, n) => {
		t === void 0 && n % a !== 0 ? --i : t !== void 0 && i && t.forEach((t) => e.node(t).rank += i);
	});
}
function De(e, t, n, r) {
	let i = {
		width: 0,
		height: 0
	};
	return arguments.length >= 4 && (i.rank = n, i.order = r), w(e, "border", i, t);
}
function Oe(e, t = ke) {
	let n = [];
	for (let r = 0; r < e.length; r += t) {
		let i = e.slice(r, r + t);
		n.push(i);
	}
	return n;
}
var ke = 65535;
function T(e, t) {
	return t.length > ke ? e(...Oe(t).map((t) => e(...t))) : e(...t);
}
function Ae(e) {
	let t = e.nodes().map((t) => {
		let n = e.node(t).rank;
		return n === void 0 ? Number.MIN_VALUE : n;
	});
	return T(Math.max, t);
}
function je(e, t) {
	let n = {
		lhs: [],
		rhs: []
	};
	return e.forEach((e) => {
		t(e) ? n.lhs.push(e) : n.rhs.push(e);
	}), n;
}
function Me(e, t) {
	let n = Date.now();
	try {
		return t();
	} finally {
		console.log(e + " time: " + (Date.now() - n) + "ms");
	}
}
function Ne(e, t) {
	return t();
}
var Pe = 0;
function Fe(e) {
	return e + ("" + ++Pe);
}
function Ie(e, t, n = 1) {
	t ?? (t = e, e = 0);
	let r = (e) => e < t;
	n < 0 && (r = (e) => t < e);
	let i = [];
	for (let t = e; r(t); t += n) i.push(t);
	return i;
}
function Le(e, t) {
	let n = {};
	for (let r of t) e[r] !== void 0 && (n[r] = e[r]);
	return n;
}
function Re(e, t) {
	let n;
	return n = typeof t == "string" ? (e) => e[t] : t, Object.entries(e).reduce((e, [t, r]) => (e[t] = n(r, t), e), {});
}
function ze(e, t) {
	return e.reduce((e, n, r) => (e[n] = t[r], e), {});
}
var Be = "\0", Ve = class {
	constructor() {
		r(this, "_sentinel");
		let e = {};
		e._next = e._prev = e, this._sentinel = e;
	}
	dequeue() {
		let e = this._sentinel, t = e._prev;
		if (t !== e) return He(t), t;
	}
	enqueue(e) {
		let t = this._sentinel;
		e._prev && e._next && He(e), e._next = t._next, t._next._prev = e, t._next = e, e._prev = t;
	}
	toString() {
		let e = [], t = this._sentinel, n = t._prev;
		for (; n !== t;) e.push(JSON.stringify(n, Ue)), n = n._prev;
		return "[" + e.join(", ") + "]";
	}
};
function He(e) {
	e._prev._next = e._next, e._next._prev = e._prev, delete e._next, delete e._prev;
}
function Ue(e, t) {
	if (e !== "_next" && e !== "_prev") return t;
}
var We = Ve, Ge = () => 1;
function Ke(e, t) {
	if (e.nodeCount() <= 1) return [];
	let n = Ye(e, t || Ge);
	return qe(n.graph, n.buckets, n.zeroIdx).flatMap((t) => e.outEdges(t.v, t.w) || []);
}
function qe(e, t, n) {
	let r = [], i = t[t.length - 1], a = t[0], o;
	for (; e.nodeCount();) {
		for (; o = a.dequeue();) Je(e, t, n, o);
		for (; o = i.dequeue();) Je(e, t, n, o);
		if (e.nodeCount()) {
			for (let i = t.length - 2; i > 0; --i) if (o = t[i]?.dequeue(), o) {
				r = r.concat(Je(e, t, n, o, !0) || []);
				break;
			}
		}
	}
	return r;
}
function Je(e, t, n, r, i) {
	let a = [], o = i ? a : void 0;
	return (e.inEdges(r.v) || []).forEach((r) => {
		let o = e.edge(r), s = e.node(r.v);
		i && a.push({
			v: r.v,
			w: r.w
		}), s.out -= o, Xe(t, n, s);
	}), (e.outEdges(r.v) || []).forEach((r) => {
		let i = e.edge(r), a = r.w, o = e.node(a);
		o.in -= i, Xe(t, n, o);
	}), e.removeNode(r.v), o;
}
function Ye(e, t) {
	let n = new s(), r = 0, i = 0;
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
	let a = Ze(i + r + 3).map(() => new We()), o = r + 1;
	return n.nodes().forEach((e) => {
		Xe(a, o, n.node(e));
	}), {
		graph: n,
		buckets: a,
		zeroIdx: o
	};
}
function Xe(e, t, n) {
	var r, i, a;
	n.out ? n.in ? (a = e[n.out - n.in + t]) == null || a.enqueue(n) : (i = e[e.length - 1]) == null || i.enqueue(n) : (r = e[0]) == null || r.enqueue(n);
}
function Ze(e) {
	let t = [];
	for (let n = 0; n < e; n++) t.push(n);
	return t;
}
function Qe(e) {
	(e.graph().acyclicer === "greedy" ? Ke(e, t(e)) : $e(e)).forEach((t) => {
		let n = e.edge(t);
		e.removeEdge(t), n.forwardName = t.name, n.reversed = !0, e.setEdge(t.w, t.v, n, Fe("rev"));
	});
	function t(e) {
		return (t) => e.edge(t).weight;
	}
}
function $e(e) {
	let t = [], n = {}, r = {};
	function i(a) {
		Object.hasOwn(r, a) || (r[a] = !0, n[a] = !0, e.outEdges(a).forEach((e) => {
			Object.hasOwn(n, e.w) ? t.push(e) : i(e.w);
		}), delete n[a]);
	}
	return e.nodes().forEach(i), t;
}
function et(e) {
	e.edges().forEach((t) => {
		let n = e.edge(t);
		if (n.reversed) {
			e.removeEdge(t);
			let r = n.forwardName;
			delete n.reversed, delete n.forwardName, e.setEdge(t.w, t.v, n, r);
		}
	});
}
function tt(e) {
	e.graph().dummyChains = [], e.edges().forEach((t) => nt(e, t));
}
function nt(e, t) {
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
	}, l = w(e, "edge", u, "_d"), r === c && (u.width = s.width, u.height = s.height, u.dummy = "edge-label", u.labelpos = s.labelpos), e.setEdge(n, l, { weight: s.weight }, o), d === 0 && e.graph().dummyChains.push(l), n = l;
	e.setEdge(n, i, { weight: s.weight }, o);
}
function rt(e) {
	e.graph().dummyChains.forEach((t) => {
		let n = e.node(t), r = n.edgeLabel, i;
		for (e.setEdge(n.edgeObj, r); n.dummy;) i = e.successors(t)[0], e.removeNode(t), r.points.push({
			x: n.x,
			y: n.y
		}), n.dummy === "edge-label" && (r.x = n.x, r.y = n.y, r.width = n.width, r.height = n.height), t = i, n = e.node(t);
	});
}
function it(e) {
	let t = {};
	function n(r) {
		let i = e.node(r);
		if (Object.hasOwn(t, r)) return i.rank;
		t[r] = !0;
		let a = e.outEdges(r), o = a ? a.map((t) => t == null ? Infinity : n(t.w) - e.edge(t).minlen) : [], s = T(Math.min, o);
		return s === Infinity && (s = 0), i.rank = s;
	}
	e.sources().forEach(n);
}
function E(e, t) {
	return e.node(t.w).rank - e.node(t.v).rank - e.edge(t).minlen;
}
var at = ot;
function ot(e) {
	let t = new s({ directed: !1 }), n = e.nodes();
	if (n.length === 0) throw Error("Graph must have at least one node");
	let r = n[0], i = e.nodeCount();
	t.setNode(r, {});
	let a, o;
	for (; st(t, e) < i && (a = ct(t, e), a);) o = t.hasNode(a.v) ? E(e, a) : -E(e, a), lt(t, e, o);
	return t;
}
function st(e, t) {
	function n(r) {
		let i = t.nodeEdges(r);
		i && i.forEach((i) => {
			let a = i.v, o = r === a ? i.w : a;
			!e.hasNode(o) && !E(t, i) && (e.setNode(o, {}), e.setEdge(r, o, {}), n(o));
		});
	}
	return e.nodes().forEach(n), e.nodeCount();
}
function ct(e, t) {
	return t.edges().reduce((n, r) => {
		let i = Infinity;
		return e.hasNode(r.v) !== e.hasNode(r.w) && (i = E(t, r)), i < n[0] ? [i, r] : n;
	}, [Infinity, null])[1];
}
function lt(e, t, n) {
	e.nodes().forEach((e) => t.node(e).rank += n);
}
var { preorder: ut, postorder: dt } = y, ft = D;
D.initLowLimValues = gt, D.initCutValues = pt, D.calcCutValue = ht, D.leaveEdge = vt, D.enterEdge = yt, D.exchangeEdges = bt;
function D(e) {
	e = xe(e), it(e);
	let t = at(e);
	gt(t), pt(t, e);
	let n, r;
	for (; n = vt(t);) r = yt(t, e, n), bt(t, e, n, r);
}
function pt(e, t) {
	let n = dt(e, e.nodes());
	n = n.slice(0, n.length - 1), n.forEach((n) => mt(e, t, n));
}
function mt(e, t, n) {
	let r = e.node(n).parent, i = e.edge(n, r);
	i.cutvalue = ht(e, t, n);
}
function ht(e, t, n) {
	let r = e.node(n).parent, i = !0, a = t.edge(n, r), o = 0;
	a ||= (i = !1, t.edge(r, n)), o = a.weight;
	let s = t.nodeEdges(n);
	return s && s.forEach((a) => {
		let s = a.v === n, c = s ? a.w : a.v;
		if (c !== r) {
			let r = s === i, l = t.edge(a).weight;
			if (o += r ? l : -l, St(e, n, c)) {
				let t = e.edge(n, c).cutvalue;
				o += r ? -t : t;
			}
		}
	}), o;
}
function gt(e, t) {
	arguments.length < 2 && (t = e.nodes()[0]), _t(e, {}, 1, t);
}
function _t(e, t, n, r, i) {
	let a = n, o = e.node(r);
	t[r] = !0;
	let s = e.neighbors(r);
	return s && s.forEach((i) => {
		Object.hasOwn(t, i) || (n = _t(e, t, n, i, r));
	}), o.low = a, o.lim = n++, i ? o.parent = i : delete o.parent, n;
}
function vt(e) {
	return e.edges().find((t) => e.edge(t).cutvalue < 0);
}
function yt(e, t, n) {
	let r = n.v, i = n.w;
	t.hasEdge(r, i) || (r = n.w, i = n.v);
	let a = e.node(r), o = e.node(i), s = a, c = !1;
	return a.lim > o.lim && (s = o, c = !0), t.edges().filter((t) => c === Ct(e, e.node(t.v), s) && c !== Ct(e, e.node(t.w), s)).reduce((e, n) => E(t, n) < E(t, e) ? n : e);
}
function bt(e, t, n, r) {
	let i = n.v, a = n.w;
	e.removeEdge(i, a), e.setEdge(r.v, r.w, {}), gt(e), pt(e, t), xt(e, t);
}
function xt(e, t) {
	let n = e.nodes().find((t) => !e.node(t).parent);
	if (!n) return;
	let r = ut(e, [n]);
	r = r.slice(1), r.forEach((n) => {
		let r = e.node(n).parent, i = t.edge(n, r), a = !1;
		i || (i = t.edge(r, n), a = !0), t.node(n).rank = t.node(r).rank + (a ? i.minlen : -i.minlen);
	});
}
function St(e, t, n) {
	return e.hasEdge(t, n);
}
function Ct(e, t, n) {
	return n.low <= t.lim && t.lim <= n.lim;
}
var wt = Tt;
function Tt(e) {
	let t = e.graph().ranker;
	if (typeof t == "function") return t(e);
	switch (t) {
		case "network-simplex":
			Ot(e);
			break;
		case "tight-tree":
			Dt(e);
			break;
		case "longest-path":
			Et(e);
			break;
		case "none": break;
		default: Ot(e);
	}
}
var Et = it;
function Dt(e) {
	it(e), at(e);
}
function Ot(e) {
	ft(e);
}
var kt = At;
function At(e) {
	let t = Mt(e);
	e.graph().dummyChains.forEach((n) => {
		let r = e.node(n), i = r.edgeObj, a = jt(e, t, i.v, i.w), o = a.path, s = a.lca, c = 0, l = o[c], u = !0;
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
function jt(e, t, n, r) {
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
function Mt(e) {
	let t = {}, n = 0;
	function r(i) {
		let a = n;
		e.children(i).forEach(r), t[i] = {
			low: a,
			lim: n++
		};
	}
	return e.children(Be).forEach(r), t;
}
function Nt(e) {
	let t = w(e, "root", {}, "_root"), n = Ft(e), r = Object.values(n), i = T(Math.max, r) - 1, a = 2 * i + 1;
	e.graph().nestingRoot = t, e.edges().forEach((t) => e.edge(t).minlen *= a);
	let o = It(e) + 1;
	e.children(Be).forEach((r) => Pt(e, t, a, o, i, n, r)), e.graph().nodeRankFactor = a;
}
function Pt(e, t, n, r, i, a, o) {
	let s = e.children(o);
	if (!s.length) {
		o !== t && e.setEdge(t, o, {
			weight: 0,
			minlen: n
		});
		return;
	}
	let c = De(e, "_bt"), l = De(e, "_bb"), u = e.node(o);
	e.setParent(c, o), u.borderTop = c, e.setParent(l, o), u.borderBottom = l, s.forEach((s) => {
		Pt(e, t, n, r, i, a, s);
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
function Ft(e) {
	let t = {};
	function n(r, i) {
		let a = e.children(r);
		a && a.length && a.forEach((e) => n(e, i + 1)), t[r] = i;
	}
	return e.children(Be).forEach((e) => n(e, 1)), t;
}
function It(e) {
	return e.edges().reduce((t, n) => t + e.edge(n).weight, 0);
}
function Lt(e) {
	let t = e.graph();
	e.removeNode(t.nestingRoot), delete t.nestingRoot, e.edges().forEach((t) => {
		e.edge(t).nestingEdge && e.removeEdge(t);
	});
}
var Rt = zt;
function zt(e) {
	function t(n) {
		let r = e.children(n), i = e.node(n);
		if (r.length && r.forEach(t), Object.hasOwn(i, "minRank")) {
			i.borderLeft = [], i.borderRight = [];
			for (let t = i.minRank, r = i.maxRank + 1; t < r; ++t) Bt(e, "borderLeft", "_bl", n, i, t), Bt(e, "borderRight", "_br", n, i, t);
		}
	}
	e.children(Be).forEach(t);
}
function Bt(e, t, n, r, i, a) {
	let o = {
		width: 0,
		height: 0,
		rank: a,
		borderType: t
	}, s = i[t][a - 1], c = w(e, "border", o, n);
	i[t][a] = c, e.setParent(c, r), s && e.setEdge(s, c, { weight: 1 });
}
function Vt(e) {
	let t = e.graph().rankdir?.toLowerCase();
	(t === "lr" || t === "rl") && Ut(e);
}
function Ht(e) {
	let t = e.graph().rankdir?.toLowerCase();
	(t === "bt" || t === "rl") && Gt(e), (t === "lr" || t === "rl") && (qt(e), Ut(e));
}
function Ut(e) {
	e.nodes().forEach((t) => Wt(e.node(t))), e.edges().forEach((t) => Wt(e.edge(t)));
}
function Wt(e) {
	let t = e.width;
	e.width = e.height, e.height = t;
}
function Gt(e) {
	e.nodes().forEach((t) => Kt(e.node(t))), e.edges().forEach((t) => {
		var n;
		let r = e.edge(t);
		(n = r.points) == null || n.forEach(Kt), Object.hasOwn(r, "y") && Kt(r);
	});
}
function Kt(e) {
	e.y = -e.y;
}
function qt(e) {
	e.nodes().forEach((t) => Jt(e.node(t))), e.edges().forEach((t) => {
		var n;
		let r = e.edge(t);
		(n = r.points) == null || n.forEach(Jt), Object.hasOwn(r, "x") && Jt(r);
	});
}
function Jt(e) {
	let t = e.x;
	e.x = e.y, e.y = t;
}
function Yt(e) {
	let t = {}, n = e.nodes().filter((t) => !e.children(t).length), r = n.map((t) => e.node(t).rank), i = Ie(T(Math.max, r) + 1).map(() => []);
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
function Xt(e, t) {
	let n = 0;
	for (let r = 1; r < t.length; ++r) n += Zt(e, t[r - 1], t[r]);
	return n;
}
function Zt(e, t, n) {
	let r = ze(n, n.map((e, t) => t)), i = t.flatMap((t) => {
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
function Qt(e, t = []) {
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
function $t(e, t) {
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
	}), en(Object.values(n).filter((e) => !e.indegree));
}
function en(e) {
	let t = [];
	function n(e) {
		return (t) => {
			t.merged || (t.barycenter === void 0 || e.barycenter === void 0 || t.barycenter >= e.barycenter) && tn(e, t);
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
	return t.filter((e) => !e.merged).map((e) => Le(e, [
		"vs",
		"i",
		"barycenter",
		"weight"
	]));
}
function tn(e, t) {
	let n = 0, r = 0;
	e.weight && (n += e.barycenter * e.weight, r += e.weight), t.weight && (n += t.barycenter * t.weight, r += t.weight), e.vs = t.vs.concat(e.vs), e.barycenter = n / r, e.weight = r, e.i = Math.min(t.i, e.i), t.merged = !0;
}
function nn(e, t) {
	let n = je(e, (e) => Object.hasOwn(e, "barycenter")), r = n.lhs, i = n.rhs.sort((e, t) => t.i - e.i), a = [], o = 0, s = 0, c = 0;
	r.sort(an(!!t)), c = rn(a, i, c), r.forEach((e) => {
		c += e.vs.length, a.push(e.vs), o += e.barycenter * e.weight, s += e.weight, c = rn(a, i, c);
	});
	let l = { vs: a.flat(1) };
	return s && (l.barycenter = o / s, l.weight = s), l;
}
function rn(e, t, n) {
	let r;
	for (; t.length && (r = t[t.length - 1]).i <= n;) t.pop(), e.push(r.vs), n++;
	return n;
}
function an(e) {
	return (t, n) => t.barycenter < n.barycenter ? -1 : t.barycenter > n.barycenter ? 1 : e ? n.i - t.i : t.i - n.i;
}
function on(e, t, n, r) {
	let i = e.children(t), a = e.node(t), o = a ? a.borderLeft : void 0, s = a ? a.borderRight : void 0, c = {};
	o && (i = i.filter((e) => e !== o && e !== s));
	let l = Qt(e, i);
	l.forEach((t) => {
		if (e.children(t.v).length) {
			let i = on(e, t.v, n, r);
			c[t.v] = i, Object.hasOwn(i, "barycenter") && cn(t, i);
		}
	});
	let u = $t(l, n);
	sn(u, c);
	let d = nn(u, r);
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
function sn(e, t) {
	e.forEach((e) => {
		e.vs = e.vs.flatMap((e) => t[e] ? t[e].vs : e);
	});
}
function cn(e, t) {
	e.barycenter === void 0 ? (e.barycenter = t.barycenter, e.weight = t.weight) : (e.barycenter = (e.barycenter * e.weight + t.barycenter * t.weight) / (e.weight + t.weight), e.weight += t.weight);
}
function ln(e, t, n, r) {
	r ||= e.nodes();
	let i = un(e), a = new s({ compound: !0 }).setGraph({ root: i }).setDefaultNodeLabel((t) => e.node(t));
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
function un(e) {
	let t;
	for (; e.hasNode(t = Fe("_root")););
	return t;
}
function dn(e, t, n) {
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
function fn(e, t = {}) {
	if (typeof t.customOrder == "function") {
		t.customOrder(e, fn);
		return;
	}
	let n = Ae(e), r = pn(e, Ie(1, n + 1), "inEdges"), i = pn(e, Ie(n - 1, -1, -1), "outEdges"), a = Yt(e);
	if (hn(e, a), t.disableOptimalOrderHeuristic) return;
	let o = Infinity, s, c = t.constraints || [];
	for (let t = 0, n = 0; n < 4; ++t, ++n) {
		mn(t % 2 ? r : i, t % 4 >= 2, c), a = we(e);
		let l = Xt(e, a);
		l < o ? (n = 0, s = Object.assign({}, a), o = l) : l === o && (s = structuredClone(a));
	}
	hn(e, s);
}
function pn(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i = (e, t) => {
		r.has(e) || r.set(e, []), r.get(e).push(t);
	};
	for (let t of e.nodes()) {
		let n = e.node(t);
		if (typeof n.rank == "number" && i(n.rank, t), typeof n.minRank == "number" && typeof n.maxRank == "number") for (let e = n.minRank; e <= n.maxRank; e++) e !== n.rank && i(e, t);
	}
	return t.map(function(t) {
		return ln(e, t, n, r.get(t) || []);
	});
}
function mn(e, t, n) {
	let r = new s();
	e.forEach(function(e) {
		n.forEach((e) => r.setEdge(e.left, e.right));
		let i = e.graph().root, a = on(e, i, r, t);
		a.vs.forEach((t, n) => e.node(t).order = n), dn(e, r, a.vs);
	});
}
function hn(e, t) {
	Object.values(t).forEach((t) => t.forEach((t, n) => e.node(t).order = n));
}
function gn(e, t) {
	let n = {};
	function r(t, r) {
		let i = 0, a = 0, o = t.length, s = r[r.length - 1];
		return r.forEach((t, c) => {
			let l = vn(e, t), u = l ? e.node(l).order : o;
			(l || t === s) && (r.slice(a, c + 1).forEach((t) => {
				let r = e.predecessors(t);
				r && r.forEach((r) => {
					let a = e.node(r), o = a.order;
					(o < i || u < o) && !(a.dummy && e.node(t).dummy) && yn(n, r, t);
				});
			}), a = c + 1, i = u);
		}), r;
	}
	return t.length && t.reduce(r), n;
}
function _n(e, t) {
	let n = {};
	function r(t, r, i, a, o) {
		Ie(r, i).forEach((r) => {
			let i = t[r];
			if (i !== void 0 && e.node(i).dummy) {
				let t = e.predecessors(i);
				t && t.forEach((t) => {
					if (t === void 0) return;
					let r = e.node(t);
					r.dummy && (r.order < a || r.order > o) && yn(n, t, i);
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
function vn(e, t) {
	if (e.node(t).dummy) {
		let n = e.predecessors(t);
		if (n) return n.find((t) => e.node(t).dummy);
	}
}
function yn(e, t, n) {
	if (t > n) {
		let e = t;
		t = n, n = e;
	}
	let r = e[t];
	r || (e[t] = r = {}), r[n] = !0;
}
function bn(e, t, n) {
	if (t > n) {
		let e = t;
		t = n, n = e;
	}
	let r = e[t];
	return r !== void 0 && Object.hasOwn(r, n);
}
function xn(e, t, n, r) {
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
					if (l !== void 0 && a[e] === e && t < l && !bn(n, e, c)) {
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
function Sn(e, t, n, r, i = !1) {
	let a = {}, o = Cn(e, t, n, i), s = i ? "borderLeft" : "borderRight";
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
function Cn(e, t, n, r) {
	let i = new s(), a = e.graph(), o = On(a.nodesep, a.edgesep, r);
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
function wn(e, t) {
	return Object.values(t).reduce((t, n) => {
		let r = -Infinity, i = Infinity;
		Object.entries(n).forEach(([t, n]) => {
			let a = kn(e, t) / 2;
			r = Math.max(n + a, r), i = Math.min(n - a, i);
		});
		let a = r - i;
		return a < t[0] && (t = [a, n]), t;
	}, [Infinity, null])[1];
}
function Tn(e, t) {
	let n = Object.values(t), r = T(Math.min, n), i = T(Math.max, n);
	["u", "d"].forEach((n) => {
		["l", "r"].forEach((a) => {
			let o = n + a, s = e[o];
			if (!s || s === t) return;
			let c = Object.values(s), l = r - T(Math.min, c);
			a !== "l" && (l = i - T(Math.max, c)), l && (e[o] = Re(s, (e) => e + l));
		});
	});
}
function En(e, t = void 0) {
	let n = e.ul;
	return n ? Re(n, (n, r) => {
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
function Dn(e) {
	let t = we(e), n = Object.assign(gn(e, t), _n(e, t)), r = {}, i;
	return ["u", "d"].forEach((a) => {
		i = a === "u" ? t : Object.values(t).reverse(), ["l", "r"].forEach((t) => {
			t === "r" && (i = i.map((e) => Object.values(e).reverse()));
			let o = xn(e, i, n, (t) => (a === "u" ? e.predecessors(t) : e.successors(t)) || []), s = Sn(e, i, o.root, o.align, t === "r");
			t === "r" && (s = Re(s, (e) => -e)), r[a + t] = s;
		});
	}), Tn(r, wn(e, r)), En(r, e.graph().align);
}
function On(e, t, n) {
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
function kn(e, t) {
	return e.node(t).width;
}
function An(e) {
	e = Se(e), jn(e), Object.entries(Dn(e)).forEach(([t, n]) => e.node(t).x = n);
}
function jn(e) {
	let t = we(e), n = e.graph(), r = n.ranksep, i = n.rankalign, a = 0;
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
function Mn(e, t = {}) {
	let n = t.debugTiming ? Me : Ne;
	return n("layout", () => {
		let r = n("  buildLayoutGraph", () => Un(e));
		return n("  runLayout", () => Nn(r, n, t)), n("  updateInputGraph", () => Pn(e, r)), r;
	});
}
function Nn(e, t, n) {
	t("    makeSpaceForEdgeLabels", () => Wn(e)), t("    removeSelfEdges", () => $n(e)), t("    acyclic", () => Qe(e)), t("    nestingGraph.run", () => Nt(e)), t("    rank", () => wt(Se(e))), t("    injectEdgeLabelProxies", () => Gn(e)), t("    removeEmptyRanks", () => Ee(e)), t("    nestingGraph.cleanup", () => Lt(e)), t("    normalizeRanks", () => Te(e)), t("    assignRankMinMax", () => Kn(e)), t("    removeEdgeLabelProxies", () => qn(e)), t("    normalize.run", () => tt(e)), t("    parentDummyChains", () => kt(e)), t("    addBorderSegments", () => Rt(e)), t("    order", () => fn(e, n)), t("    insertSelfEdges", () => er(e)), t("    adjustCoordinateSystem", () => Vt(e)), t("    position", () => An(e)), t("    positionSelfEdges", () => tr(e)), t("    removeBorderNodes", () => Qn(e)), t("    normalize.undo", () => rt(e)), t("    fixupEdgeLabelCoords", () => Xn(e)), t("    undoCoordinateSystem", () => Ht(e)), t("    translateGraph", () => Jn(e)), t("    assignNodeIntersects", () => Yn(e)), t("    reversePoints", () => Zn(e)), t("    acyclic.undo", () => et(e));
}
function Pn(e, t) {
	e.nodes().forEach((n) => {
		let r = e.node(n), i = t.node(n);
		r && (r.x = i.x, r.y = i.y, r.order = i.order, r.rank = i.rank, t.children(n).length && (r.width = i.width, r.height = i.height));
	}), e.edges().forEach((n) => {
		let r = e.edge(n), i = t.edge(n);
		r.points = i.points, Object.hasOwn(i, "x") && (r.x = i.x, r.y = i.y);
	}), e.graph().width = t.graph().width, e.graph().height = t.graph().height;
}
var Fn = [
	"nodesep",
	"edgesep",
	"ranksep",
	"marginx",
	"marginy"
], In = {
	ranksep: 50,
	edgesep: 20,
	nodesep: 50,
	rankdir: "TB",
	rankalign: "center"
}, Ln = [
	"acyclicer",
	"ranker",
	"rankdir",
	"align",
	"rankalign"
], Rn = [
	"width",
	"height",
	"rank"
], zn = {
	width: 0,
	height: 0
}, Bn = [
	"minlen",
	"weight",
	"width",
	"height",
	"labeloffset"
], Vn = {
	minlen: 1,
	weight: 1,
	width: 0,
	height: 0,
	labeloffset: 10,
	labelpos: "r"
}, Hn = ["labelpos"];
function Un(e) {
	let t = new s({
		multigraph: !0,
		compound: !0
	}), n = rr(e.graph());
	return t.setGraph(Object.assign({}, In, nr(n, Fn), Le(n, Ln))), e.nodes().forEach((n) => {
		let r = nr(rr(e.node(n)), Rn);
		Object.keys(zn).forEach((e) => {
			r[e] === void 0 && (r[e] = zn[e]);
		}), t.setNode(n, r);
		let i = e.parent(n);
		i !== void 0 && t.setParent(n, i);
	}), e.edges().forEach((n) => {
		let r = rr(e.edge(n));
		t.setEdge(n, Object.assign({}, Vn, nr(r, Bn), Le(r, Hn)));
	}), t;
}
function Wn(e) {
	let t = e.graph();
	t.ranksep /= 2, e.edges().forEach((n) => {
		let r = e.edge(n);
		r.minlen *= 2, r.labelpos.toLowerCase() !== "c" && (t.rankdir === "TB" || t.rankdir === "BT" ? r.width += r.labeloffset : r.height += r.labeloffset);
	});
}
function Gn(e) {
	e.edges().forEach((t) => {
		let n = e.edge(t);
		if (n.width && n.height) {
			let n = e.node(t.v);
			w(e, "edge-proxy", {
				rank: (e.node(t.w).rank - n.rank) / 2 + n.rank,
				e: t
			}, "_ep");
		}
	});
}
function Kn(e) {
	let t = 0;
	e.nodes().forEach((n) => {
		let r = e.node(n);
		r.borderTop && (r.minRank = e.node(r.borderTop).rank, r.maxRank = e.node(r.borderBottom).rank, t = Math.max(t, r.maxRank));
	}), e.graph().maxRank = t;
}
function qn(e) {
	e.nodes().forEach((t) => {
		let n = e.node(t);
		if (n.dummy === "edge-proxy") {
			let r = n;
			e.edge(r.e).labelRank = n.rank, e.removeNode(t);
		}
	});
}
function Jn(e) {
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
function Yn(e) {
	e.edges().forEach((t) => {
		let n = e.edge(t), r = e.node(t.v), i = e.node(t.w), a, o;
		n.points ? (a = n.points[0], o = n.points[n.points.length - 1]) : (n.points = [], a = i, o = r), n.points.unshift(Ce(r, a)), n.points.push(Ce(i, o));
	});
}
function Xn(e) {
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
function Zn(e) {
	e.edges().forEach((t) => {
		let n = e.edge(t);
		n.reversed && n.points.reverse();
	});
}
function Qn(e) {
	e.nodes().forEach((t) => {
		if (e.children(t).length) {
			let n = e.node(t), r = e.node(n.borderTop), i = e.node(n.borderBottom), a = e.node(n.borderLeft[n.borderLeft.length - 1]), o = e.node(n.borderRight[n.borderRight.length - 1]);
			n.width = Math.abs(o.x - a.x), n.height = Math.abs(i.y - r.y), n.x = a.x + n.width / 2, n.y = r.y + n.height / 2;
		}
	}), e.nodes().forEach((t) => {
		e.node(t).dummy === "border" && e.removeNode(t);
	});
}
function $n(e) {
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
function er(e) {
	we(e).forEach((t) => {
		let n = 0;
		t.forEach((t, r) => {
			let i = e.node(t);
			i.order = r + n, (i.selfEdges || []).forEach((t) => {
				w(e, "selfedge", {
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
function tr(e) {
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
function nr(e, t) {
	return Re(Le(e, t), Number);
}
function rr(e) {
	let t = {};
	return e && Object.entries(e).forEach(([e, n]) => {
		typeof e == "string" && (e = e.toLowerCase()), t[e] = n;
	}), t;
}
var ir = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
//#endregion
//#region node_modules/d3-selection/src/namespace.js
function ar(e) {
	var t = e += "", n = t.indexOf(":");
	return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), ir.hasOwnProperty(t) ? {
		space: ir[t],
		local: e
	} : e;
}
//#endregion
//#region node_modules/d3-selection/src/creator.js
function or(e) {
	return function() {
		var t = this.ownerDocument, n = this.namespaceURI;
		return n === "http://www.w3.org/1999/xhtml" && t.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? t.createElement(e) : t.createElementNS(n, e);
	};
}
function sr(e) {
	return function() {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function cr(e) {
	var t = ar(e);
	return (t.local ? sr : or)(t);
}
//#endregion
//#region node_modules/d3-selection/src/selector.js
function lr() {}
function ur(e) {
	return e == null ? lr : function() {
		return this.querySelector(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/select.js
function dr(e) {
	typeof e != "function" && (e = ur(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = Array(o), c, l, u = 0; u < o; ++u) (c = a[u]) && (l = e.call(c, c.__data__, u, a)) && ("__data__" in c && (l.__data__ = c.__data__), s[u] = l);
	return new k(r, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/array.js
function fr(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-selection/src/selectorAll.js
function pr() {
	return [];
}
function mr(e) {
	return e == null ? pr : function() {
		return this.querySelectorAll(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectAll.js
function hr(e) {
	return function() {
		return fr(e.apply(this, arguments));
	};
}
function gr(e) {
	e = typeof e == "function" ? hr(e) : mr(e);
	for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a) for (var o = t[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && (r.push(e.call(c, c.__data__, l, o)), i.push(c));
	return new k(r, i);
}
//#endregion
//#region node_modules/d3-selection/src/matcher.js
function _r(e) {
	return function() {
		return this.matches(e);
	};
}
function vr(e) {
	return function(t) {
		return t.matches(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectChild.js
var yr = Array.prototype.find;
function br(e) {
	return function() {
		return yr.call(this.children, e);
	};
}
function xr() {
	return this.firstElementChild;
}
function Sr(e) {
	return this.select(e == null ? xr : br(typeof e == "function" ? e : vr(e)));
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectChildren.js
var Cr = Array.prototype.filter;
function wr() {
	return Array.from(this.children);
}
function Tr(e) {
	return function() {
		return Cr.call(this.children, e);
	};
}
function Er(e) {
	return this.selectAll(e == null ? wr : Tr(typeof e == "function" ? e : vr(e)));
}
//#endregion
//#region node_modules/d3-selection/src/selection/filter.js
function Dr(e) {
	typeof e != "function" && (e = _r(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new k(r, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/sparse.js
function Or(e) {
	return Array(e.length);
}
//#endregion
//#region node_modules/d3-selection/src/selection/enter.js
function kr() {
	return new k(this._enter || this._groups.map(Or), this._parents);
}
function Ar(e, t) {
	this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Ar.prototype = {
	constructor: Ar,
	appendChild: function(e) {
		return this._parent.insertBefore(e, this._next);
	},
	insertBefore: function(e, t) {
		return this._parent.insertBefore(e, t);
	},
	querySelector: function(e) {
		return this._parent.querySelector(e);
	},
	querySelectorAll: function(e) {
		return this._parent.querySelectorAll(e);
	}
};
//#endregion
//#region node_modules/d3-selection/src/constant.js
function jr(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/data.js
function Mr(e, t, n, r, i, a) {
	for (var o = 0, s, c = t.length, l = a.length; o < l; ++o) (s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new Ar(e, a[o]);
	for (; o < c; ++o) (s = t[o]) && (i[o] = s);
}
function Nr(e, t, n, r, i, a, o) {
	var s, c, l = /* @__PURE__ */ new Map(), u = t.length, d = a.length, f = Array(u), p;
	for (s = 0; s < u; ++s) (c = t[s]) && (f[s] = p = o.call(c, c.__data__, s, t) + "", l.has(p) ? i[s] = c : l.set(p, c));
	for (s = 0; s < d; ++s) p = o.call(e, a[s], s, a) + "", (c = l.get(p)) ? (r[s] = c, c.__data__ = a[s], l.delete(p)) : n[s] = new Ar(e, a[s]);
	for (s = 0; s < u; ++s) (c = t[s]) && l.get(f[s]) === c && (i[s] = c);
}
function Pr(e) {
	return e.__data__;
}
function Fr(e, t) {
	if (!arguments.length) return Array.from(this, Pr);
	var n = t ? Nr : Mr, r = this._parents, i = this._groups;
	typeof e != "function" && (e = jr(e));
	for (var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0; l < a; ++l) {
		var u = r[l], d = i[l], f = d.length, p = Ir(e.call(u, u && u.__data__, l, r)), m = p.length, h = s[l] = Array(m), g = o[l] = Array(m);
		n(u, d, h, g, c[l] = Array(f), p, t);
		for (var _ = 0, v = 0, y, b; _ < m; ++_) if (y = h[_]) {
			for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
			y._next = b || null;
		}
	}
	return o = new k(o, r), o._enter = s, o._exit = c, o;
}
function Ir(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-selection/src/selection/exit.js
function Lr() {
	return new k(this._exit || this._groups.map(Or), this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/join.js
function Rr(e, t, n) {
	var r = this.enter(), i = this, a = this.exit();
	return typeof e == "function" ? (r = e(r), r &&= r.selection()) : r = r.append(e + ""), t != null && (i = t(i), i &&= i.selection()), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
//#endregion
//#region node_modules/d3-selection/src/selection/merge.js
function zr(e) {
	for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, a = r.length, o = Math.min(i, a), s = Array(i), c = 0; c < o; ++c) for (var l = n[c], u = r[c], d = l.length, f = s[c] = Array(d), p, m = 0; m < d; ++m) (p = l[m] || u[m]) && (f[m] = p);
	for (; c < i; ++c) s[c] = n[c];
	return new k(s, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/order.js
function Br() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n;) for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;) (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/sort.js
function Vr(e) {
	e ||= Hr;
	function t(t, n) {
		return t && n ? e(t.__data__, n.__data__) : !t - !n;
	}
	for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
		for (var o = n[a], s = o.length, c = i[a] = Array(s), l, u = 0; u < s; ++u) (l = o[u]) && (c[u] = l);
		c.sort(t);
	}
	return new k(i, this._parents).order();
}
function Hr(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-selection/src/selection/call.js
function Ur() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/nodes.js
function Wr() {
	return Array.from(this);
}
//#endregion
//#region node_modules/d3-selection/src/selection/node.js
function Gr() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
		var o = r[i];
		if (o) return o;
	}
	return null;
}
//#endregion
//#region node_modules/d3-selection/src/selection/size.js
function Kr() {
	let e = 0;
	for (let t of this) ++e;
	return e;
}
//#endregion
//#region node_modules/d3-selection/src/selection/empty.js
function qr() {
	return !this.node();
}
//#endregion
//#region node_modules/d3-selection/src/selection/each.js
function Jr(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n) for (var i = t[n], a = 0, o = i.length, s; a < o; ++a) (s = i[a]) && e.call(s, s.__data__, a, i);
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/attr.js
function Yr(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function Xr(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function Zr(e, t) {
	return function() {
		this.setAttribute(e, t);
	};
}
function Qr(e, t) {
	return function() {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function $r(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function ei(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function ti(e, t) {
	var n = ar(e);
	if (arguments.length < 2) {
		var r = this.node();
		return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
	}
	return this.each((t == null ? n.local ? Xr : Yr : typeof t == "function" ? n.local ? ei : $r : n.local ? Qr : Zr)(n, t));
}
//#endregion
//#region node_modules/d3-selection/src/window.js
function ni(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
//#endregion
//#region node_modules/d3-selection/src/selection/style.js
function ri(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function ii(e, t, n) {
	return function() {
		this.style.setProperty(e, t, n);
	};
}
function ai(e, t, n) {
	return function() {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function oi(e, t, n) {
	return arguments.length > 1 ? this.each((t == null ? ri : typeof t == "function" ? ai : ii)(e, t, n ?? "")) : O(this.node(), e);
}
function O(e, t) {
	return e.style.getPropertyValue(t) || ni(e).getComputedStyle(e, null).getPropertyValue(t);
}
//#endregion
//#region node_modules/d3-selection/src/selection/property.js
function si(e) {
	return function() {
		delete this[e];
	};
}
function ci(e, t) {
	return function() {
		this[e] = t;
	};
}
function li(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : this[e] = n;
	};
}
function ui(e, t) {
	return arguments.length > 1 ? this.each((t == null ? si : typeof t == "function" ? li : ci)(e, t)) : this.node()[e];
}
//#endregion
//#region node_modules/d3-selection/src/selection/classed.js
function di(e) {
	return e.trim().split(/^|\s+/);
}
function fi(e) {
	return e.classList || new pi(e);
}
function pi(e) {
	this._node = e, this._names = di(e.getAttribute("class") || "");
}
pi.prototype = {
	add: function(e) {
		this._names.indexOf(e) < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
	},
	remove: function(e) {
		var t = this._names.indexOf(e);
		t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
	},
	contains: function(e) {
		return this._names.indexOf(e) >= 0;
	}
};
function mi(e, t) {
	for (var n = fi(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function hi(e, t) {
	for (var n = fi(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function gi(e) {
	return function() {
		mi(this, e);
	};
}
function _i(e) {
	return function() {
		hi(this, e);
	};
}
function vi(e, t) {
	return function() {
		(t.apply(this, arguments) ? mi : hi)(this, e);
	};
}
function yi(e, t) {
	var n = di(e + "");
	if (arguments.length < 2) {
		for (var r = fi(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
		return !0;
	}
	return this.each((typeof t == "function" ? vi : t ? gi : _i)(n, t));
}
//#endregion
//#region node_modules/d3-selection/src/selection/text.js
function bi() {
	this.textContent = "";
}
function xi(e) {
	return function() {
		this.textContent = e;
	};
}
function Si(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.textContent = t ?? "";
	};
}
function Ci(e) {
	return arguments.length ? this.each(e == null ? bi : (typeof e == "function" ? Si : xi)(e)) : this.node().textContent;
}
//#endregion
//#region node_modules/d3-selection/src/selection/html.js
function wi() {
	this.innerHTML = "";
}
function Ti(e) {
	return function() {
		this.innerHTML = e;
	};
}
function Ei(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? "";
	};
}
function Di(e) {
	return arguments.length ? this.each(e == null ? wi : (typeof e == "function" ? Ei : Ti)(e)) : this.node().innerHTML;
}
//#endregion
//#region node_modules/d3-selection/src/selection/raise.js
function Oi() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function ki() {
	return this.each(Oi);
}
//#endregion
//#region node_modules/d3-selection/src/selection/lower.js
function Ai() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ji() {
	return this.each(Ai);
}
//#endregion
//#region node_modules/d3-selection/src/selection/append.js
function Mi(e) {
	var t = typeof e == "function" ? e : cr(e);
	return this.select(function() {
		return this.appendChild(t.apply(this, arguments));
	});
}
//#endregion
//#region node_modules/d3-selection/src/selection/insert.js
function Ni() {
	return null;
}
function Pi(e, t) {
	var n = typeof e == "function" ? e : cr(e), r = t == null ? Ni : typeof t == "function" ? t : ur(t);
	return this.select(function() {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
//#endregion
//#region node_modules/d3-selection/src/selection/remove.js
function Fi() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function Ii() {
	return this.each(Fi);
}
//#endregion
//#region node_modules/d3-selection/src/selection/clone.js
function Li() {
	var e = this.cloneNode(!1), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Ri() {
	var e = this.cloneNode(!0), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function zi(e) {
	return this.select(e ? Ri : Li);
}
//#endregion
//#region node_modules/d3-selection/src/selection/datum.js
function Bi(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
//#endregion
//#region node_modules/d3-selection/src/selection/on.js
function Vi(e) {
	return function(t) {
		e.call(this, t, this.__data__);
	};
}
function Hi(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var t = "", n = e.indexOf(".");
		return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
			type: e,
			name: t
		};
	});
}
function Ui(e) {
	return function() {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, i = t.length, a; n < i; ++n) a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
			++r ? t.length = r : delete this.__on;
		}
	};
}
function Wi(e, t, n) {
	return function() {
		var r = this.__on, i, a = Vi(t);
		if (r) {
			for (var o = 0, s = r.length; o < s; ++o) if ((i = r[o]).type === e.type && i.name === e.name) {
				this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = t;
				return;
			}
		}
		this.addEventListener(e.type, a, n), i = {
			type: e.type,
			name: e.name,
			value: t,
			listener: a,
			options: n
		}, r ? r.push(i) : this.__on = [i];
	};
}
function Gi(e, t, n) {
	var r = Hi(e + ""), i, a = r.length, o;
	if (arguments.length < 2) {
		var s = this.node().__on;
		if (s) {
			for (var c = 0, l = s.length, u; c < l; ++c) for (i = 0, u = s[c]; i < a; ++i) if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
		}
		return;
	}
	for (s = t ? Wi : Ui, i = 0; i < a; ++i) this.each(s(r[i], t, n));
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/dispatch.js
function Ki(e, t, n) {
	var r = ni(e), i = r.CustomEvent;
	typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function qi(e, t) {
	return function() {
		return Ki(this, e, t);
	};
}
function Ji(e, t) {
	return function() {
		return Ki(this, e, t.apply(this, arguments));
	};
}
function Yi(e, t) {
	return this.each((typeof t == "function" ? Ji : qi)(e, t));
}
//#endregion
//#region node_modules/d3-selection/src/selection/iterator.js
function* Xi() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length, o; i < a; ++i) (o = r[i]) && (yield o);
}
//#endregion
//#region node_modules/d3-selection/src/selection/index.js
var Zi = [null];
function k(e, t) {
	this._groups = e, this._parents = t;
}
function Qi() {
	return new k([[document.documentElement]], Zi);
}
function $i() {
	return this;
}
k.prototype = Qi.prototype = {
	constructor: k,
	select: dr,
	selectAll: gr,
	selectChild: Sr,
	selectChildren: Er,
	filter: Dr,
	data: Fr,
	enter: kr,
	exit: Lr,
	join: Rr,
	merge: zr,
	selection: $i,
	order: Br,
	sort: Vr,
	call: Ur,
	nodes: Wr,
	node: Gr,
	size: Kr,
	empty: qr,
	each: Jr,
	attr: ti,
	style: oi,
	property: ui,
	classed: yi,
	text: Ci,
	html: Di,
	raise: ki,
	lower: ji,
	append: Mi,
	insert: Pi,
	remove: Ii,
	clone: zi,
	datum: Bi,
	on: Gi,
	dispatch: Yi,
	[Symbol.iterator]: Xi
};
//#endregion
//#region node_modules/d3-selection/src/select.js
function A(e) {
	return typeof e == "string" ? new k([[document.querySelector(e)]], [document.documentElement]) : new k([[e]], Zi);
}
//#endregion
//#region node_modules/d3-selection/src/sourceEvent.js
function ea(e) {
	let t;
	for (; t = e.sourceEvent;) e = t;
	return e;
}
//#endregion
//#region node_modules/d3-selection/src/pointer.js
function j(e, t) {
	if (e = ea(e), t === void 0 && (t = e.currentTarget), t) {
		var n = t.ownerSVGElement || t;
		if (n.createSVGPoint) {
			var r = n.createSVGPoint();
			return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
		}
		if (t.getBoundingClientRect) {
			var i = t.getBoundingClientRect();
			return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
		}
	}
	return [e.pageX, e.pageY];
}
//#endregion
//#region node_modules/d3-shape/src/constant.js
function M(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-path/src/path.js
var ta = Math.PI, na = 2 * ta, N = 1e-6, ra = na - N;
function ia(e) {
	this._ += e[0];
	for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function aa(e) {
	let t = Math.floor(e);
	if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
	if (t > 15) return ia;
	let n = 10 ** t;
	return function(e) {
		this._ += e[0];
		for (let t = 1, r = e.length; t < r; ++t) this._ += Math.round(arguments[t] * n) / n + e[t];
	};
}
var oa = class {
	constructor(e) {
		this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = e == null ? ia : aa(e);
	}
	moveTo(e, t) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}`;
	}
	closePath() {
		this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
	}
	lineTo(e, t) {
		this._append`L${this._x1 = +e},${this._y1 = +t}`;
	}
	quadraticCurveTo(e, t, n, r) {
		this._append`Q${+e},${+t},${this._x1 = +n},${this._y1 = +r}`;
	}
	bezierCurveTo(e, t, n, r, i, a) {
		this._append`C${+e},${+t},${+n},${+r},${this._x1 = +i},${this._y1 = +a}`;
	}
	arcTo(e, t, n, r, i) {
		if (e = +e, t = +t, n = +n, r = +r, i = +i, i < 0) throw Error(`negative radius: ${i}`);
		let a = this._x1, o = this._y1, s = n - e, c = r - t, l = a - e, u = o - t, d = l * l + u * u;
		if (this._x1 === null) this._append`M${this._x1 = e},${this._y1 = t}`;
		else if (d > N) if (!(Math.abs(u * s - c * l) > N) || !i) this._append`L${this._x1 = e},${this._y1 = t}`;
		else {
			let f = n - a, p = r - o, m = s * s + c * c, h = f * f + p * p, g = Math.sqrt(m), _ = Math.sqrt(d), v = i * Math.tan((ta - Math.acos((m + d - h) / (2 * g * _))) / 2), y = v / _, b = v / g;
			Math.abs(y - 1) > N && this._append`L${e + y * l},${t + y * u}`, this._append`A${i},${i},0,0,${+(u * f > l * p)},${this._x1 = e + b * s},${this._y1 = t + b * c}`;
		}
	}
	arc(e, t, n, r, i, a) {
		if (e = +e, t = +t, n = +n, a = !!a, n < 0) throw Error(`negative radius: ${n}`);
		let o = n * Math.cos(r), s = n * Math.sin(r), c = e + o, l = t + s, u = 1 ^ a, d = a ? r - i : i - r;
		this._x1 === null ? this._append`M${c},${l}` : (Math.abs(this._x1 - c) > N || Math.abs(this._y1 - l) > N) && this._append`L${c},${l}`, n && (d < 0 && (d = d % na + na), d > ra ? this._append`A${n},${n},0,1,${u},${e - o},${t - s}A${n},${n},0,1,${u},${this._x1 = c},${this._y1 = l}` : d > N && this._append`A${n},${n},0,${+(d >= ta)},${u},${this._x1 = e + n * Math.cos(i)},${this._y1 = t + n * Math.sin(i)}`);
	}
	rect(e, t, n, r) {
		this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}h${n = +n}v${+r}h${-n}Z`;
	}
	toString() {
		return this._;
	}
};
oa.prototype;
//#endregion
//#region node_modules/d3-shape/src/path.js
function sa(e) {
	let t = 3;
	return e.digits = function(n) {
		if (!arguments.length) return t;
		if (n == null) t = null;
		else {
			let e = Math.floor(n);
			if (!(e >= 0)) throw RangeError(`invalid digits: ${n}`);
			t = e;
		}
		return e;
	}, () => new oa(t);
}
//#endregion
//#region node_modules/d3-shape/src/array.js
var ca = Array.prototype.slice;
function la(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-shape/src/curve/linear.js
function ua(e) {
	this._context = e;
}
ua.prototype = {
	areaStart: function() {
		this._line = 0;
	},
	areaEnd: function() {
		this._line = NaN;
	},
	lineStart: function() {
		this._point = 0;
	},
	lineEnd: function() {
		(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
	},
	point: function(e, t) {
		switch (e = +e, t = +t, this._point) {
			case 0:
				this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
				break;
			case 1: this._point = 2;
			default: this._context.lineTo(e, t);
		}
	}
};
function da(e) {
	return new ua(e);
}
//#endregion
//#region node_modules/d3-shape/src/point.js
function fa(e) {
	return e[0];
}
function pa(e) {
	return e[1];
}
//#endregion
//#region node_modules/d3-shape/src/line.js
function ma(e, t) {
	var n = M(!0), r = null, i = da, a = null, o = sa(s);
	e = typeof e == "function" ? e : e === void 0 ? fa : M(e), t = typeof t == "function" ? t : t === void 0 ? pa : M(t);
	function s(s) {
		var c, l = (s = la(s)).length, u, d = !1, f;
		for (r ?? (a = i(f = o())), c = 0; c <= l; ++c) !(c < l && n(u = s[c], c, s)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(u, c, s), +t(u, c, s));
		if (f) return a = null, f + "" || null;
	}
	return s.x = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : M(+t), s) : e;
	}, s.y = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : M(+e), s) : t;
	}, s.defined = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : M(!!e), s) : n;
	}, s.curve = function(e) {
		return arguments.length ? (i = e, r != null && (a = i(r)), s) : i;
	}, s.context = function(e) {
		return arguments.length ? (e == null ? r = a = null : a = i(r = e), s) : r;
	}, s;
}
//#endregion
//#region node_modules/d3-shape/src/curve/bump.js
var ha = class {
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
function ga(e) {
	return new ha(e, !0);
}
function _a(e) {
	return new ha(e, !1);
}
//#endregion
//#region node_modules/d3-shape/src/link.js
function va(e) {
	return e.source;
}
function ya(e) {
	return e.target;
}
function ba(e) {
	let t = va, n = ya, r = fa, i = pa, a = null, o = null, s = sa(c);
	function c() {
		let c, l = ca.call(arguments), u = t.apply(this, l), d = n.apply(this, l);
		if (a ?? (o = e(c = s())), o.lineStart(), l[0] = u, o.point(+r.apply(this, l), +i.apply(this, l)), l[0] = d, o.point(+r.apply(this, l), +i.apply(this, l)), o.lineEnd(), c) return o = null, c + "" || null;
	}
	return c.source = function(e) {
		return arguments.length ? (t = e, c) : t;
	}, c.target = function(e) {
		return arguments.length ? (n = e, c) : n;
	}, c.x = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : M(+e), c) : r;
	}, c.y = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : M(+e), c) : i;
	}, c.context = function(t) {
		return arguments.length ? (t == null ? a = o = null : o = e(a = t), c) : a;
	}, c;
}
function xa() {
	return ba(ga);
}
//#endregion
//#region src/erdDiagram.ts
var Sa = 160, Ca = 50, wa = 8, Ta = 24, Ea = {
	child: {
		fill: "#dae8fc",
		stroke: "#6c8ebf"
	},
	primary: {
		fill: "#d5e8d4",
		stroke: "#82b366"
	}
}, Da = "dpuse-tool-d3-erd-arrow";
function Oa(e, t, n = {}) {
	let r = n.nodeWidth ?? Sa, a = n.nodeHeight ?? Ca, o = n.padding ?? wa, s = n.selfEdgeSize ?? Ta, c = n.nodeColors ?? Ea;
	function l() {
		A(t).selectAll("svg").remove();
		let n = new i.Graph();
		n.setGraph({
			rankdir: "TB",
			nodesep: 40,
			ranksep: 60
		}), n.setDefaultEdgeLabel(() => ({}));
		for (let t of e.nodes) n.setNode(t.id, {
			width: r,
			height: a,
			label: t.label,
			typeId: t.typeId
		});
		for (let t of e.edges) t.source === t.target ? n.setEdge(t.source, t.target, {
			width: s,
			height: s
		}) : n.setEdge(t.source, t.target);
		Mn(n);
		let { width: l = 0, height: u = 0 } = n.graph(), d = l + o * 2, f = u + o * 2, p = A(t).append("svg").attr("viewBox", `0 0 ${String(d)} ${String(f)}`).attr("width", d).attr("height", f), m = p.append("g").attr("transform", `translate(${String(o)}, ${String(o)})`);
		p.append("defs").append("marker").attr("id", Da).attr("viewBox", "0 0 10 10").attr("refX", 9).attr("refY", 5).attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", "auto-start-reverse").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("fill", "#6c8ebf");
		let h = ma().x((e) => e.x).y((e) => e.y).curve(_a);
		m.append("g").attr("fill", "none").attr("stroke", "#6c8ebf").attr("stroke-width", 1.5).selectAll("path").data(n.edges()).join("path").attr("marker-end", `url(#${Da})`).attr("d", (e) => e.v === e.w ? ka(n.node(e.v), s) : h(n.edge(e).points ?? []) ?? "");
		let g = m.append("g").selectAll("g").data(n.nodes()).join("g").attr("transform", (e) => {
			let t = n.node(e);
			return `translate(${String((t.x ?? 0) - t.width / 2)}, ${String((t.y ?? 0) - t.height / 2)})`;
		});
		g.append("rect").attr("width", (e) => n.node(e).width).attr("height", (e) => n.node(e).height).attr("rx", 6).attr("fill", (e) => c[n.node(e).typeId].fill).attr("stroke", (e) => c[n.node(e).typeId].stroke), g.append("text").attr("x", (e) => n.node(e).width / 2).attr("y", (e) => n.node(e).height / 2).attr("text-anchor", "middle").attr("dominant-baseline", "middle").attr("font-family", "Helvetica, Arial, sans-serif").attr("font-size", 14).attr("fill", "#000000").text((e) => n.node(e).label ?? "");
		let _ = p.node();
		if (_ == null) throw Error("Failed to create ERD diagram SVG element.");
		return _;
	}
	let u = l();
	return {
		resize: () => {
			u = l();
		},
		get svg() {
			return u;
		}
	};
}
function ka(e, t) {
	let n = (e.x ?? 0) + e.width / 2, r = n + t, i = (e.y ?? 0) - e.height / 4, a = (e.y ?? 0) + e.height / 4;
	return `M ${String(n)} ${String(i)} C ${String(r)} ${String(i)}, ${String(r)} ${String(a)}, ${String(n)} ${String(a)}`;
}
//#endregion
//#region node_modules/d3-dispatch/src/dispatch.js
var Aa = { value: () => {} };
function ja() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new Ma(n);
}
function Ma(e) {
	this._ = e;
}
function Na(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
Ma.prototype = ja.prototype = {
	constructor: Ma,
	on: function(e, t) {
		var n = this._, r = Na(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = Pa(n[i], e.name))) return i;
			return;
		}
		if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
		for (; ++a < o;) if (i = (e = r[a]).type) n[i] = Fa(n[i], e.name, t);
		else if (t == null) for (i in n) n[i] = Fa(n[i], e.name, null);
		return this;
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new Ma(e);
	},
	call: function(e, t) {
		if ((i = arguments.length - 2) > 0) for (var n = Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (a = this._[e], r = 0, i = a.length; r < i; ++r) a[r].value.apply(t, n);
	},
	apply: function(e, t, n) {
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (var r = this._[e], i = 0, a = r.length; i < a; ++i) r[i].value.apply(t, n);
	}
};
function Pa(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function Fa(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = Aa, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
//#endregion
//#region node_modules/d3-drag/src/noevent.js
var Ia = { passive: !1 }, La = {
	capture: !0,
	passive: !1
};
function Ra(e) {
	e.stopImmediatePropagation();
}
function P(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region node_modules/d3-drag/src/nodrag.js
function za(e) {
	var t = e.document.documentElement, n = A(e).on("dragstart.drag", P, La);
	"onselectstart" in t ? n.on("selectstart.drag", P, La) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ba(e, t) {
	var n = e.document.documentElement, r = A(e).on("dragstart.drag", null);
	t && (r.on("click.drag", P, La), setTimeout(function() {
		r.on("click.drag", null);
	}, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
//#endregion
//#region node_modules/d3-drag/src/constant.js
var Va = (e) => () => e;
//#endregion
//#region node_modules/d3-drag/src/event.js
function Ha(e, { sourceEvent: t, subject: n, target: r, identifier: i, active: a, x: o, y: s, dx: c, dy: l, dispatch: u }) {
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
Ha.prototype.on = function() {
	var e = this._.on.apply(this._, arguments);
	return e === this._ ? this : e;
};
//#endregion
//#region node_modules/d3-drag/src/drag.js
function Ua(e) {
	return !e.ctrlKey && !e.button;
}
function Wa() {
	return this.parentNode;
}
function Ga(e, t) {
	return t ?? {
		x: e.x,
		y: e.y
	};
}
function Ka() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function qa() {
	var e = Ua, t = Wa, n = Ga, r = Ka, i = {}, a = ja("start", "drag", "end"), o = 0, s, c, l, u, d = 0;
	function f(e) {
		e.on("mousedown.drag", p).filter(r).on("touchstart.drag", g).on("touchmove.drag", _, Ia).on("touchend.drag touchcancel.drag", v).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	function p(n, r) {
		if (!(u || !e.call(this, n, r))) {
			var i = y(this, t.call(this, n, r), n, r, "mouse");
			i && (A(n.view).on("mousemove.drag", m, La).on("mouseup.drag", h, La), za(n.view), Ra(n), l = !1, s = n.clientX, c = n.clientY, i("start", n));
		}
	}
	function m(e) {
		if (P(e), !l) {
			var t = e.clientX - s, n = e.clientY - c;
			l = t * t + n * n > d;
		}
		i.mouse("drag", e);
	}
	function h(e) {
		A(e.view).on("mousemove.drag mouseup.drag", null), Ba(e.view, l), P(e), i.mouse("end", e);
	}
	function g(n, r) {
		if (e.call(this, n, r)) {
			var i = n.changedTouches, a = t.call(this, n, r), o = i.length, s, c;
			for (s = 0; s < o; ++s) (c = y(this, a, n, r, i[s].identifier, i[s])) && (Ra(n), c("start", n, i[s]));
		}
	}
	function _(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (r = 0; r < n; ++r) (a = i[t[r].identifier]) && (P(e), a("drag", e, t[r]));
	}
	function v(e) {
		var t = e.changedTouches, n = t.length, r, a;
		for (u && clearTimeout(u), u = setTimeout(function() {
			u = null;
		}, 500), r = 0; r < n; ++r) (a = i[t[r].identifier]) && (Ra(e), a("end", e, t[r]));
	}
	function y(e, t, r, s, c, l) {
		var u = a.copy(), d = j(l || r, t), p, m, h;
		if ((h = n.call(e, new Ha("beforestart", {
			sourceEvent: r,
			target: f,
			identifier: c,
			active: o,
			x: d[0],
			y: d[1],
			dx: 0,
			dy: 0,
			dispatch: u
		}), s)) != null) return p = h.x - d[0] || 0, m = h.y - d[1] || 0, function n(r, a, l) {
			var g = d, _;
			switch (r) {
				case "start":
					i[c] = n, _ = o++;
					break;
				case "end": delete i[c], --o;
				case "drag": d = j(l || a, t), _ = o;
			}
			u.call(r, e, new Ha(r, {
				sourceEvent: a,
				subject: h,
				target: f,
				identifier: c,
				active: _,
				x: d[0] + p,
				y: d[1] + m,
				dx: d[0] - g[0],
				dy: d[1] - g[1],
				dispatch: u
			}), s);
		};
	}
	return f.filter = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : Va(!!t), f) : e;
	}, f.container = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : Va(e), f) : t;
	}, f.subject = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : Va(e), f) : n;
	}, f.touchable = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : Va(!!e), f) : r;
	}, f.on = function() {
		var e = a.on.apply(a, arguments);
		return e === a ? f : e;
	}, f.clickDistance = function(e) {
		return arguments.length ? (d = (e = +e) * e, f) : Math.sqrt(d);
	}, f;
}
//#endregion
//#region node_modules/d3-color/src/define.js
function Ja(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function Ya(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region node_modules/d3-color/src/color.js
function Xa() {}
var Za = .7, Qa = 1 / Za, F = "\\s*([+-]?\\d+)\\s*", $a = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", I = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", eo = /^#([0-9a-f]{3,8})$/, to = RegExp(`^rgb\\(${F},${F},${F}\\)$`), no = RegExp(`^rgb\\(${I},${I},${I}\\)$`), ro = RegExp(`^rgba\\(${F},${F},${F},${$a}\\)$`), io = RegExp(`^rgba\\(${I},${I},${I},${$a}\\)$`), ao = RegExp(`^hsl\\(${$a},${I},${I}\\)$`), oo = RegExp(`^hsla\\(${$a},${I},${I},${$a}\\)$`), so = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
};
Ja(Xa, po, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: co,
	formatHex: co,
	formatHex8: lo,
	formatHsl: uo,
	formatRgb: fo,
	toString: fo
});
function co() {
	return this.rgb().formatHex();
}
function lo() {
	return this.rgb().formatHex8();
}
function uo() {
	return Co(this).formatHsl();
}
function fo() {
	return this.rgb().formatRgb();
}
function po(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = eo.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? mo(t) : n === 3 ? new L(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ho(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ho(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = to.exec(e)) ? new L(t[1], t[2], t[3], 1) : (t = no.exec(e)) ? new L(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ro.exec(e)) ? ho(t[1], t[2], t[3], t[4]) : (t = io.exec(e)) ? ho(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ao.exec(e)) ? So(t[1], t[2] / 100, t[3] / 100, 1) : (t = oo.exec(e)) ? So(t[1], t[2] / 100, t[3] / 100, t[4]) : so.hasOwnProperty(e) ? mo(so[e]) : e === "transparent" ? new L(NaN, NaN, NaN, 0) : null;
}
function mo(e) {
	return new L(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ho(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new L(e, t, n, r);
}
function go(e) {
	return e instanceof Xa || (e = po(e)), e ? (e = e.rgb(), new L(e.r, e.g, e.b, e.opacity)) : new L();
}
function _o(e, t, n, r) {
	return arguments.length === 1 ? go(e) : new L(e, t, n, r ?? 1);
}
function L(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ja(L, _o, Ya(Xa, {
	brighter(e) {
		return e = e == null ? Qa : Qa ** +e, new L(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? Za : Za ** +e, new L(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new L(R(this.r), R(this.g), R(this.b), xo(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: vo,
	formatHex: vo,
	formatHex8: yo,
	formatRgb: bo,
	toString: bo
}));
function vo() {
	return `#${z(this.r)}${z(this.g)}${z(this.b)}`;
}
function yo() {
	return `#${z(this.r)}${z(this.g)}${z(this.b)}${z((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function bo() {
	let e = xo(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${R(this.r)}, ${R(this.g)}, ${R(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function xo(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function R(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function z(e) {
	return e = R(e), (e < 16 ? "0" : "") + e.toString(16);
}
function So(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new B(e, t, n, r);
}
function Co(e) {
	if (e instanceof B) return new B(e.h, e.s, e.l, e.opacity);
	if (e instanceof Xa || (e = po(e)), !e) return new B();
	if (e instanceof B) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new B(o, s, c, e.opacity);
}
function wo(e, t, n, r) {
	return arguments.length === 1 ? Co(e) : new B(e, t, n, r ?? 1);
}
function B(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ja(B, wo, Ya(Xa, {
	brighter(e) {
		return e = e == null ? Qa : Qa ** +e, new B(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? Za : Za ** +e, new B(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new L(Do(e >= 240 ? e - 240 : e + 120, i, r), Do(e, i, r), Do(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new B(To(this.h), Eo(this.s), Eo(this.l), xo(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = xo(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${To(this.h)}, ${Eo(this.s) * 100}%, ${Eo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function To(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Eo(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function Do(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region node_modules/d3-interpolate/src/constant.js
var Oo = (e) => () => e;
//#endregion
//#region node_modules/d3-interpolate/src/color.js
function ko(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function Ao(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function jo(e) {
	return (e = +e) == 1 ? Mo : function(t, n) {
		return n - t ? Ao(t, n, e) : Oo(isNaN(t) ? n : t);
	};
}
function Mo(e, t) {
	var n = t - e;
	return n ? ko(e, n) : Oo(isNaN(e) ? t : e);
}
//#endregion
//#region node_modules/d3-interpolate/src/rgb.js
var No = (function e(t) {
	var n = jo(t);
	function r(e, t) {
		var r = n((e = _o(e)).r, (t = _o(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = Mo(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
//#endregion
//#region node_modules/d3-interpolate/src/number.js
function V(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/string.js
var Po = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Fo = new RegExp(Po.source, "g");
function Io(e) {
	return function() {
		return e;
	};
}
function Lo(e) {
	return function(t) {
		return e(t) + "";
	};
}
function Ro(e, t) {
	var n = Po.lastIndex = Fo.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = Po.exec(e)) && (i = Fo.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: V(r, i)
	})), n = Fo.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Lo(c[0].x) : Io(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/decompose.js
var zo = 180 / Math.PI, Bo = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function Vo(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * zo,
		skewX: Math.atan(c) * zo,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/parse.js
var Ho;
function Uo(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? Bo : Vo(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Wo(e) {
	return e == null || (Ho ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), Ho.setAttribute("transform", e), !(e = Ho.transform.baseVal.consolidate())) ? Bo : (e = e.matrix, Vo(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/index.js
function Go(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: V(e, i)
			}, {
				i: c - 2,
				x: V(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: V(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: V(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: V(e, n)
			}, {
				i: s - 2,
				x: V(t, r)
			});
		} else (n !== 1 || r !== 1) && a.push(i(a) + "scale(" + n + "," + r + ")");
	}
	return function(t, n) {
		var r = [], i = [];
		return t = e(t), n = e(n), a(t.translateX, t.translateY, n.translateX, n.translateY, r, i), o(t.rotate, n.rotate, r, i), s(t.skewX, n.skewX, r, i), c(t.scaleX, t.scaleY, n.scaleX, n.scaleY, r, i), t = n = null, function(e) {
			for (var t = -1, n = i.length, a; ++t < n;) r[(a = i[t]).i] = a.x(e);
			return r.join("");
		};
	};
}
var Ko = Go(Uo, "px, ", "px)", "deg)"), qo = Go(Wo, ", ", ")", ")"), Jo = 1e-12;
function Yo(e) {
	return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Xo(e) {
	return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Zo(e) {
	return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
var Qo = (function e(t, n, r) {
	function i(e, i) {
		var a = e[0], o = e[1], s = e[2], c = i[0], l = i[1], u = i[2], d = c - a, f = l - o, p = d * d + f * f, m, h;
		if (p < Jo) h = Math.log(u / s) / t, m = function(e) {
			return [
				a + e * d,
				o + e * f,
				s * Math.exp(t * e * h)
			];
		};
		else {
			var g = Math.sqrt(p), _ = (u * u - s * s + r * p) / (2 * s * n * g), v = (u * u - s * s - r * p) / (2 * u * n * g), y = Math.log(Math.sqrt(_ * _ + 1) - _);
			h = (Math.log(Math.sqrt(v * v + 1) - v) - y) / t, m = function(e) {
				var r = e * h, i = Yo(y), c = s / (n * g) * (i * Zo(t * r + y) - Xo(y));
				return [
					a + c * d,
					o + c * f,
					s * i / Yo(t * r + y)
				];
			};
		}
		return m.duration = h * 1e3 * t / Math.SQRT2, m;
	}
	return i.rho = function(t) {
		var n = Math.max(.001, +t), r = n * n;
		return e(n, r, r * r);
	}, i;
})(Math.SQRT2, 2, 4), H = 0, $o = 0, es = 0, ts = 1e3, ns, rs, is = 0, U = 0, as = 0, os = typeof performance == "object" && performance.now ? performance : Date, ss = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function cs() {
	return U ||= (ss(ls), os.now() + as);
}
function ls() {
	U = 0;
}
function us() {
	this._call = this._time = this._next = null;
}
us.prototype = ds.prototype = {
	constructor: us,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? cs() : +n) + (t == null ? 0 : +t), !this._next && rs !== this && (rs ? rs._next = this : ns = this, rs = this), this._call = e, this._time = n, gs();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, gs());
	}
};
function ds(e, t, n) {
	var r = new us();
	return r.restart(e, t, n), r;
}
function fs() {
	cs(), ++H;
	for (var e = ns, t; e;) (t = U - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--H;
}
function ps() {
	U = (is = os.now()) + as, H = $o = 0;
	try {
		fs();
	} finally {
		H = 0, hs(), U = 0;
	}
}
function ms() {
	var e = os.now(), t = e - is;
	t > ts && (as -= t, is = e);
}
function hs() {
	for (var e, t = ns, n, r = Infinity; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ns = n);
	rs = e, gs(r);
}
function gs(e) {
	H || ($o &&= clearTimeout($o), e - U > 24 ? (e < Infinity && ($o = setTimeout(ps, e - os.now() - as)), es &&= clearInterval(es)) : (es ||= (is = os.now(), setInterval(ms, ts)), H = 1, ss(ps)));
}
//#endregion
//#region node_modules/d3-timer/src/timeout.js
function _s(e, t, n) {
	var r = new us();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
//#endregion
//#region node_modules/d3-transition/src/transition/schedule.js
var vs = ja("start", "end", "cancel", "interrupt"), ys = [];
function bs(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	Ss(e, n, {
		name: t,
		index: r,
		group: i,
		on: vs,
		tween: ys,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: 0
	});
}
function xs(e, t) {
	var n = G(e, t);
	if (n.state > 0) throw Error("too late; already scheduled");
	return n;
}
function W(e, t) {
	var n = G(e, t);
	if (n.state > 3) throw Error("too late; already running");
	return n;
}
function G(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function Ss(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = ds(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay);
	}
	function o(a) {
		var l, u, d, f;
		if (n.state !== 1) return c();
		for (l in r) if (f = r[l], f.name === n.name) {
			if (f.state === 3) return _s(o);
			f.state === 4 ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = 6, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete r[l]);
		}
		if (_s(function() {
			n.state === 3 && (n.state = 4, n.timer.restart(s, n.delay, n.time), s(a));
		}), n.state = 2, n.on.call("start", e, e.__data__, n.index, n.group), n.state === 2) {
			for (n.state = 3, i = Array(d = n.tween.length), l = 0, u = -1; l < d; ++l) (f = n.tween[l].value.call(e, e.__data__, n.index, n.group)) && (i[++u] = f);
			i.length = u + 1;
		}
	}
	function s(t) {
		for (var r = t < n.duration ? n.ease.call(null, t / n.duration) : (n.timer.restart(c), n.state = 5, 1), a = -1, o = i.length; ++a < o;) i[a].call(e, r);
		n.state === 5 && (n.on.call("end", e, e.__data__, n.index, n.group), c());
	}
	function c() {
		for (var i in n.state = 6, n.timer.stop(), delete r[t], r) return;
		delete e.__transition;
	}
}
//#endregion
//#region node_modules/d3-transition/src/interrupt.js
function Cs(e, t) {
	var n = e.__transition, r, i, a = !0, o;
	if (n) {
		for (o in t = t == null ? null : t + "", n) {
			if ((r = n[o]).name !== t) {
				a = !1;
				continue;
			}
			i = r.state > 2 && r.state < 5, r.state = 6, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[o];
		}
		a && delete e.__transition;
	}
}
//#endregion
//#region node_modules/d3-transition/src/selection/interrupt.js
function ws(e) {
	return this.each(function() {
		Cs(this, e);
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/tween.js
function Ts(e, t) {
	var n, r;
	return function() {
		var i = W(this, e), a = i.tween;
		if (a !== n) {
			r = n = a;
			for (var o = 0, s = r.length; o < s; ++o) if (r[o].name === t) {
				r = r.slice(), r.splice(o, 1);
				break;
			}
		}
		i.tween = r;
	};
}
function Es(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = W(this, e), o = a.tween;
		if (o !== r) {
			i = (r = o).slice();
			for (var s = {
				name: t,
				value: n
			}, c = 0, l = i.length; c < l; ++c) if (i[c].name === t) {
				i[c] = s;
				break;
			}
			c === l && i.push(s);
		}
		a.tween = i;
	};
}
function Ds(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = G(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? Ts : Es)(n, e, t));
}
function Os(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = W(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return G(e, r).value[t];
	};
}
//#endregion
//#region node_modules/d3-transition/src/transition/interpolate.js
function ks(e, t) {
	var n;
	return (typeof t == "number" ? V : t instanceof po ? No : (n = po(t)) ? (t = n, No) : Ro)(e, t);
}
//#endregion
//#region node_modules/d3-transition/src/transition/attr.js
function As(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function js(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function Ms(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Ns(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Ps(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Fs(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Is(e, t) {
	var n = ar(e), r = n === "transform" ? qo : ks;
	return this.attrTween(e, typeof t == "function" ? (n.local ? Fs : Ps)(n, r, Os(this, "attr." + e, t)) : t == null ? (n.local ? js : As)(n) : (n.local ? Ns : Ms)(n, r, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/attrTween.js
function Ls(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function Rs(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function zs(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Rs(e, i)), n;
	}
	return i._value = t, i;
}
function Bs(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Ls(e, i)), n;
	}
	return i._value = t, i;
}
function Vs(e, t) {
	var n = "attr." + e;
	if (arguments.length < 2) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != "function") throw Error();
	var r = ar(e);
	return this.tween(n, (r.local ? zs : Bs)(r, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/delay.js
function Hs(e, t) {
	return function() {
		xs(this, e).delay = +t.apply(this, arguments);
	};
}
function Us(e, t) {
	return t = +t, function() {
		xs(this, e).delay = t;
	};
}
function Ws(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? Hs : Us)(t, e)) : G(this.node(), t).delay;
}
//#endregion
//#region node_modules/d3-transition/src/transition/duration.js
function Gs(e, t) {
	return function() {
		W(this, e).duration = +t.apply(this, arguments);
	};
}
function Ks(e, t) {
	return t = +t, function() {
		W(this, e).duration = t;
	};
}
function qs(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? Gs : Ks)(t, e)) : G(this.node(), t).duration;
}
//#endregion
//#region node_modules/d3-transition/src/transition/ease.js
function Js(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		W(this, e).ease = t;
	};
}
function Ys(e) {
	var t = this._id;
	return arguments.length ? this.each(Js(t, e)) : G(this.node(), t).ease;
}
//#endregion
//#region node_modules/d3-transition/src/transition/easeVarying.js
function Xs(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		W(this, e).ease = n;
	};
}
function Zs(e) {
	if (typeof e != "function") throw Error();
	return this.each(Xs(this._id, e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/filter.js
function Qs(e) {
	typeof e != "function" && (e = _r(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new K(r, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/merge.js
function $s(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new K(o, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/on.js
function ec(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function tc(e, t, n) {
	var r, i, a = ec(t) ? xs : W;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function nc(e, t) {
	var n = this._id;
	return arguments.length < 2 ? G(this.node(), n).on.on(e) : this.each(tc(n, e, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/remove.js
function rc(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function ic() {
	return this.on("end.remove", rc(this._id));
}
//#endregion
//#region node_modules/d3-transition/src/transition/select.js
function ac(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = ur(e));
	for (var r = this._groups, i = r.length, a = Array(i), o = 0; o < i; ++o) for (var s = r[o], c = s.length, l = a[o] = Array(c), u, d, f = 0; f < c; ++f) (u = s[f]) && (d = e.call(u, u.__data__, f, s)) && ("__data__" in u && (d.__data__ = u.__data__), l[f] = d, bs(l[f], t, n, f, l, G(u, n)));
	return new K(a, this._parents, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selectAll.js
function oc(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = mr(e));
	for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s) for (var c = r[s], l = c.length, u, d = 0; d < l; ++d) if (u = c[d]) {
		for (var f = e.call(u, u.__data__, d, c), p, m = G(u, n), h = 0, g = f.length; h < g; ++h) (p = f[h]) && bs(p, t, n, h, f, m);
		a.push(f), o.push(u);
	}
	return new K(a, o, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selection.js
var sc = Qi.prototype.constructor;
function cc() {
	return new sc(this._groups, this._parents);
}
//#endregion
//#region node_modules/d3-transition/src/transition/style.js
function lc(e, t) {
	var n, r, i;
	return function() {
		var a = O(this, e), o = (this.style.removeProperty(e), O(this, e));
		return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o);
	};
}
function uc(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function dc(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = O(this, e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function fc(e, t, n) {
	var r, i, a;
	return function() {
		var o = O(this, e), s = n(this), c = s + "";
		return s ?? (c = s = (this.style.removeProperty(e), O(this, e))), o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s));
	};
}
function pc(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = W(this, e), l = c.on, u = c.value[a] == null ? s ||= uc(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function mc(e, t, n) {
	var r = (e += "") == "transform" ? Ko : ks;
	return t == null ? this.styleTween(e, lc(e, r)).on("end.style." + e, uc(e)) : typeof t == "function" ? this.styleTween(e, fc(e, r, Os(this, "style." + e, t))).each(pc(this._id, e)) : this.styleTween(e, dc(e, r, t), n).on("end.style." + e, null);
}
//#endregion
//#region node_modules/d3-transition/src/transition/styleTween.js
function hc(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function gc(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && hc(e, a, n)), r;
	}
	return a._value = t, a;
}
function _c(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, gc(e, t, n ?? ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/text.js
function vc(e) {
	return function() {
		this.textContent = e;
	};
}
function yc(e) {
	return function() {
		var t = e(this);
		this.textContent = t ?? "";
	};
}
function bc(e) {
	return this.tween("text", typeof e == "function" ? yc(Os(this, "text", e)) : vc(e == null ? "" : e + ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/textTween.js
function xc(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function Sc(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && xc(r)), t;
	}
	return r._value = e, r;
}
function Cc(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, Sc(e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/transition.js
function wc() {
	for (var e = this._name, t = this._id, n = Dc(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = G(c, t);
		bs(c, e, n, l, o, {
			time: u.time + u.delay + u.duration,
			delay: 0,
			duration: u.duration,
			ease: u.ease
		});
	}
	return new K(r, this._parents, e, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/end.js
function Tc() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = W(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/index.js
var Ec = 0;
function K(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Dc() {
	return ++Ec;
}
var q = Qi.prototype;
K.prototype = {
	constructor: K,
	select: ac,
	selectAll: oc,
	selectChild: q.selectChild,
	selectChildren: q.selectChildren,
	filter: Qs,
	merge: $s,
	selection: cc,
	transition: wc,
	call: q.call,
	nodes: q.nodes,
	node: q.node,
	size: q.size,
	empty: q.empty,
	each: q.each,
	on: nc,
	attr: Is,
	attrTween: Vs,
	style: mc,
	styleTween: _c,
	text: bc,
	textTween: Cc,
	remove: ic,
	tween: Ds,
	delay: Ws,
	duration: qs,
	ease: Ys,
	easeVarying: Zs,
	end: Tc,
	[Symbol.iterator]: q[Symbol.iterator]
};
//#endregion
//#region node_modules/d3-ease/src/cubic.js
function Oc(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region node_modules/d3-transition/src/selection/transition.js
var kc = {
	time: null,
	delay: 0,
	duration: 250,
	ease: Oc
};
function Ac(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function jc(e) {
	var t, n;
	e instanceof K ? (t = e._id, e = e._name) : (t = Dc(), (n = kc).time = cs(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && bs(c, e, t, l, o, n || Ac(c, t));
	return new K(r, this._parents, e, t);
}
Qi.prototype.interrupt = ws, Qi.prototype.transition = jc;
//#endregion
//#region node_modules/d3-zoom/src/constant.js
var Mc = (e) => () => e;
//#endregion
//#region node_modules/d3-zoom/src/event.js
function Nc(e, { sourceEvent: t, target: n, transform: r, dispatch: i }) {
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
		target: {
			value: n,
			enumerable: !0,
			configurable: !0
		},
		transform: {
			value: r,
			enumerable: !0,
			configurable: !0
		},
		_: { value: i }
	});
}
//#endregion
//#region node_modules/d3-zoom/src/transform.js
function J(e, t, n) {
	this.k = e, this.x = t, this.y = n;
}
J.prototype = {
	constructor: J,
	scale: function(e) {
		return e === 1 ? this : new J(this.k * e, this.x, this.y);
	},
	translate: function(e, t) {
		return e === 0 & t === 0 ? this : new J(this.k, this.x + this.k * e, this.y + this.k * t);
	},
	apply: function(e) {
		return [e[0] * this.k + this.x, e[1] * this.k + this.y];
	},
	applyX: function(e) {
		return e * this.k + this.x;
	},
	applyY: function(e) {
		return e * this.k + this.y;
	},
	invert: function(e) {
		return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
	},
	invertX: function(e) {
		return (e - this.x) / this.k;
	},
	invertY: function(e) {
		return (e - this.y) / this.k;
	},
	rescaleX: function(e) {
		return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
	},
	rescaleY: function(e) {
		return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
	},
	toString: function() {
		return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
	}
};
var Pc = new J(1, 0, 0);
Fc.prototype = J.prototype;
function Fc(e) {
	for (; !e.__zoom;) if (!(e = e.parentNode)) return Pc;
	return e.__zoom;
}
//#endregion
//#region node_modules/d3-zoom/src/noevent.js
function Ic(e) {
	e.stopImmediatePropagation();
}
function Lc(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region node_modules/d3-zoom/src/zoom.js
function Rc(e) {
	return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function zc() {
	var e = this;
	return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function Bc() {
	return this.__zoom || Pc;
}
function Vc(e) {
	return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * (e.ctrlKey ? 10 : 1);
}
function Hc() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Uc(e, t, n) {
	var r = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], a = e.invertY(t[0][1]) - n[0][1], o = e.invertY(t[1][1]) - n[1][1];
	return e.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), o > a ? (a + o) / 2 : Math.min(0, a) || Math.max(0, o));
}
function Wc() {
	var e = Rc, t = zc, n = Uc, r = Vc, i = Hc, a = [0, Infinity], o = [[-Infinity, -Infinity], [Infinity, Infinity]], s = 250, c = Qo, l = ja("start", "zoom", "end"), u, d, f, p = 500, m = 150, h = 0, g = 10;
	function _(e) {
		e.property("__zoom", Bc).on("wheel.zoom", te, { passive: !1 }).on("mousedown.zoom", ne).on("dblclick.zoom", C).filter(i).on("touchstart.zoom", re).on("touchmove.zoom", ie).on("touchend.zoom touchcancel.zoom", ae).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	_.transform = function(e, t, n, r) {
		var i = e.selection ? e.selection() : e;
		i.property("__zoom", Bc), e === i ? i.interrupt().each(function() {
			S(this, arguments).event(r).start().zoom(null, typeof t == "function" ? t.apply(this, arguments) : t).end();
		}) : x(e, t, n, r);
	}, _.scaleBy = function(e, t, n, r) {
		_.scaleTo(e, function() {
			return this.__zoom.k * (typeof t == "function" ? t.apply(this, arguments) : t);
		}, n, r);
	}, _.scaleTo = function(e, r, i, a) {
		_.transform(e, function() {
			var e = t.apply(this, arguments), a = this.__zoom, s = i == null ? b(e) : typeof i == "function" ? i.apply(this, arguments) : i, c = a.invert(s), l = typeof r == "function" ? r.apply(this, arguments) : r;
			return n(y(v(a, l), s, c), e, o);
		}, i, a);
	}, _.translateBy = function(e, r, i, a) {
		_.transform(e, function() {
			return n(this.__zoom.translate(typeof r == "function" ? r.apply(this, arguments) : r, typeof i == "function" ? i.apply(this, arguments) : i), t.apply(this, arguments), o);
		}, null, a);
	}, _.translateTo = function(e, r, i, a, s) {
		_.transform(e, function() {
			var e = t.apply(this, arguments), s = this.__zoom, c = a == null ? b(e) : typeof a == "function" ? a.apply(this, arguments) : a;
			return n(Pc.translate(c[0], c[1]).scale(s.k).translate(typeof r == "function" ? -r.apply(this, arguments) : -r, typeof i == "function" ? -i.apply(this, arguments) : -i), e, o);
		}, a, s);
	};
	function v(e, t) {
		return t = Math.max(a[0], Math.min(a[1], t)), t === e.k ? e : new J(t, e.x, e.y);
	}
	function y(e, t, n) {
		var r = t[0] - n[0] * e.k, i = t[1] - n[1] * e.k;
		return r === e.x && i === e.y ? e : new J(e.k, r, i);
	}
	function b(e) {
		return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2];
	}
	function x(e, n, r, i) {
		e.on("start.zoom", function() {
			S(this, arguments).event(i).start();
		}).on("interrupt.zoom end.zoom", function() {
			S(this, arguments).event(i).end();
		}).tween("zoom", function() {
			var e = this, a = arguments, o = S(e, a).event(i), s = t.apply(e, a), l = r == null ? b(s) : typeof r == "function" ? r.apply(e, a) : r, u = Math.max(s[1][0] - s[0][0], s[1][1] - s[0][1]), d = e.__zoom, f = typeof n == "function" ? n.apply(e, a) : n, p = c(d.invert(l).concat(u / d.k), f.invert(l).concat(u / f.k));
			return function(e) {
				if (e === 1) e = f;
				else {
					var t = p(e), n = u / t[2];
					e = new J(n, l[0] - t[0] * n, l[1] - t[1] * n);
				}
				o.zoom(null, e);
			};
		});
	}
	function S(e, t, n) {
		return !n && e.__zooming || new ee(e, t);
	}
	function ee(e, n) {
		this.that = e, this.args = n, this.active = 0, this.sourceEvent = null, this.extent = t.apply(e, n), this.taps = 0;
	}
	ee.prototype = {
		event: function(e) {
			return e && (this.sourceEvent = e), this;
		},
		start: function() {
			return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
		},
		zoom: function(e, t) {
			return this.mouse && e !== "mouse" && (this.mouse[1] = t.invert(this.mouse[0])), this.touch0 && e !== "touch" && (this.touch0[1] = t.invert(this.touch0[0])), this.touch1 && e !== "touch" && (this.touch1[1] = t.invert(this.touch1[0])), this.that.__zoom = t, this.emit("zoom"), this;
		},
		end: function() {
			return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
		},
		emit: function(e) {
			var t = A(this.that).datum();
			l.call(e, this.that, new Nc(e, {
				sourceEvent: this.sourceEvent,
				target: _,
				type: e,
				transform: this.that.__zoom,
				dispatch: l
			}), t);
		}
	};
	function te(t, ...i) {
		if (!e.apply(this, arguments)) return;
		var s = S(this, i).event(t), c = this.__zoom, l = Math.max(a[0], Math.min(a[1], c.k * 2 ** r.apply(this, arguments))), u = j(t);
		if (s.wheel) (s.mouse[0][0] !== u[0] || s.mouse[0][1] !== u[1]) && (s.mouse[1] = c.invert(s.mouse[0] = u)), clearTimeout(s.wheel);
		else if (c.k === l) return;
		else s.mouse = [u, c.invert(u)], Cs(this), s.start();
		Lc(t), s.wheel = setTimeout(d, m), s.zoom("mouse", n(y(v(c, l), s.mouse[0], s.mouse[1]), s.extent, o));
		function d() {
			s.wheel = null, s.end();
		}
	}
	function ne(t, ...r) {
		if (f || !e.apply(this, arguments)) return;
		var i = t.currentTarget, a = S(this, r, !0).event(t), s = A(t.view).on("mousemove.zoom", d, !0).on("mouseup.zoom", p, !0), c = j(t, i), l = t.clientX, u = t.clientY;
		za(t.view), Ic(t), a.mouse = [c, this.__zoom.invert(c)], Cs(this), a.start();
		function d(e) {
			if (Lc(e), !a.moved) {
				var t = e.clientX - l, r = e.clientY - u;
				a.moved = t * t + r * r > h;
			}
			a.event(e).zoom("mouse", n(y(a.that.__zoom, a.mouse[0] = j(e, i), a.mouse[1]), a.extent, o));
		}
		function p(e) {
			s.on("mousemove.zoom mouseup.zoom", null), Ba(e.view, a.moved), Lc(e), a.event(e).end();
		}
	}
	function C(r, ...i) {
		if (e.apply(this, arguments)) {
			var a = this.__zoom, c = j(r.changedTouches ? r.changedTouches[0] : r, this), l = a.invert(c), u = a.k * (r.shiftKey ? .5 : 2), d = n(y(v(a, u), c, l), t.apply(this, i), o);
			Lc(r), s > 0 ? A(this).transition().duration(s).call(x, d, c, r) : A(this).call(_.transform, d, c, r);
		}
	}
	function re(t, ...n) {
		if (e.apply(this, arguments)) {
			var r = t.touches, i = r.length, a = S(this, n, t.changedTouches.length === i).event(t), o, s, c, l;
			for (Ic(t), s = 0; s < i; ++s) c = r[s], l = j(c, this), l = [
				l,
				this.__zoom.invert(l),
				c.identifier
			], a.touch0 ? !a.touch1 && a.touch0[2] !== l[2] && (a.touch1 = l, a.taps = 0) : (a.touch0 = l, o = !0, a.taps = 1 + !!u);
			u &&= clearTimeout(u), o && (a.taps < 2 && (d = l[0], u = setTimeout(function() {
				u = null;
			}, p)), Cs(this), a.start());
		}
	}
	function ie(e, ...t) {
		if (this.__zooming) {
			var r = S(this, t).event(e), i = e.changedTouches, a = i.length, s, c, l, u;
			for (Lc(e), s = 0; s < a; ++s) c = i[s], l = j(c, this), r.touch0 && r.touch0[2] === c.identifier ? r.touch0[0] = l : r.touch1 && r.touch1[2] === c.identifier && (r.touch1[0] = l);
			if (c = r.that.__zoom, r.touch1) {
				var d = r.touch0[0], f = r.touch0[1], p = r.touch1[0], m = r.touch1[1], h = (h = p[0] - d[0]) * h + (h = p[1] - d[1]) * h, g = (g = m[0] - f[0]) * g + (g = m[1] - f[1]) * g;
				c = v(c, Math.sqrt(h / g)), l = [(d[0] + p[0]) / 2, (d[1] + p[1]) / 2], u = [(f[0] + m[0]) / 2, (f[1] + m[1]) / 2];
			} else if (r.touch0) l = r.touch0[0], u = r.touch0[1];
			else return;
			r.zoom("touch", n(y(c, l, u), r.extent, o));
		}
	}
	function ae(e, ...t) {
		if (this.__zooming) {
			var n = S(this, t).event(e), r = e.changedTouches, i = r.length, a, o;
			for (Ic(e), f && clearTimeout(f), f = setTimeout(function() {
				f = null;
			}, p), a = 0; a < i; ++a) o = r[a], n.touch0 && n.touch0[2] === o.identifier ? delete n.touch0 : n.touch1 && n.touch1[2] === o.identifier && delete n.touch1;
			if (n.touch1 && !n.touch0 && (n.touch0 = n.touch1, delete n.touch1), n.touch0) n.touch0[1] = this.__zoom.invert(n.touch0[0]);
			else if (n.end(), n.taps === 2 && (o = j(o, this), Math.hypot(d[0] - o[0], d[1] - o[1]) < g)) {
				var s = A(this).on("dblclick.zoom");
				s && s.apply(this, arguments);
			}
		}
	}
	return _.wheelDelta = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : Mc(+e), _) : r;
	}, _.filter = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : Mc(!!t), _) : e;
	}, _.touchable = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : Mc(!!e), _) : i;
	}, _.extent = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : Mc([[+e[0][0], +e[0][1]], [+e[1][0], +e[1][1]]]), _) : t;
	}, _.scaleExtent = function(e) {
		return arguments.length ? (a[0] = +e[0], a[1] = +e[1], _) : [a[0], a[1]];
	}, _.translateExtent = function(e) {
		return arguments.length ? (o[0][0] = +e[0][0], o[1][0] = +e[1][0], o[0][1] = +e[0][1], o[1][1] = +e[1][1], _) : [[o[0][0], o[0][1]], [o[1][0], o[1][1]]];
	}, _.constrain = function(e) {
		return arguments.length ? (n = e, _) : n;
	}, _.duration = function(e) {
		return arguments.length ? (s = +e, _) : s;
	}, _.interpolate = function(e) {
		return arguments.length ? (c = e, _) : c;
	}, _.on = function() {
		var e = l.on.apply(l, arguments);
		return e === l ? _ : e;
	}, _.clickDistance = function(e) {
		return arguments.length ? (h = (e = +e) * e, _) : Math.sqrt(h);
	}, _.tapDistance = function(e) {
		return arguments.length ? (g = +e, _) : g;
	}, _;
}
//#endregion
//#region node_modules/d3-force/src/center.js
function Gc(e, t) {
	var n, r = 1;
	e ??= 0, t ??= 0;
	function i() {
		var i, a = n.length, o, s = 0, c = 0;
		for (i = 0; i < a; ++i) o = n[i], s += o.x, c += o.y;
		for (s = (s / a - e) * r, c = (c / a - t) * r, i = 0; i < a; ++i) o = n[i], o.x -= s, o.y -= c;
	}
	return i.initialize = function(e) {
		n = e;
	}, i.x = function(t) {
		return arguments.length ? (e = +t, i) : e;
	}, i.y = function(e) {
		return arguments.length ? (t = +e, i) : t;
	}, i.strength = function(e) {
		return arguments.length ? (r = +e, i) : r;
	}, i;
}
//#endregion
//#region node_modules/d3-quadtree/src/add.js
function Kc(e) {
	let t = +this._x.call(null, e), n = +this._y.call(null, e);
	return qc(this.cover(t, n), t, n, e);
}
function qc(e, t, n, r) {
	if (isNaN(t) || isNaN(n)) return e;
	var i, a = e._root, o = { data: r }, s = e._x0, c = e._y0, l = e._x1, u = e._y1, d, f, p, m, h, g, _, v;
	if (!a) return e._root = o, e;
	for (; a.length;) if ((h = t >= (d = (s + l) / 2)) ? s = d : l = d, (g = n >= (f = (c + u) / 2)) ? c = f : u = f, i = a, !(a = a[_ = g << 1 | h])) return i[_] = o, e;
	if (p = +e._x.call(null, a.data), m = +e._y.call(null, a.data), t === p && n === m) return o.next = a, i ? i[_] = o : e._root = o, e;
	do
		i = i ? i[_] = [
			,
			,
			,
			,
		] : e._root = [
			,
			,
			,
			,
		], (h = t >= (d = (s + l) / 2)) ? s = d : l = d, (g = n >= (f = (c + u) / 2)) ? c = f : u = f;
	while ((_ = g << 1 | h) == (v = (m >= f) << 1 | p >= d));
	return i[v] = a, i[_] = o, e;
}
function Jc(e) {
	var t, n, r = e.length, i, a, o = Array(r), s = Array(r), c = Infinity, l = Infinity, u = -Infinity, d = -Infinity;
	for (n = 0; n < r; ++n) isNaN(i = +this._x.call(null, t = e[n])) || isNaN(a = +this._y.call(null, t)) || (o[n] = i, s[n] = a, i < c && (c = i), i > u && (u = i), a < l && (l = a), a > d && (d = a));
	if (c > u || l > d) return this;
	for (this.cover(c, l).cover(u, d), n = 0; n < r; ++n) qc(this, o[n], s[n], e[n]);
	return this;
}
//#endregion
//#region node_modules/d3-quadtree/src/cover.js
function Yc(e, t) {
	if (isNaN(e = +e) || isNaN(t = +t)) return this;
	var n = this._x0, r = this._y0, i = this._x1, a = this._y1;
	if (isNaN(n)) i = (n = Math.floor(e)) + 1, a = (r = Math.floor(t)) + 1;
	else {
		for (var o = i - n || 1, s = this._root, c, l; n > e || e >= i || r > t || t >= a;) switch (l = (t < r) << 1 | e < n, c = [
			,
			,
			,
			,
		], c[l] = s, s = c, o *= 2, l) {
			case 0:
				i = n + o, a = r + o;
				break;
			case 1:
				n = i - o, a = r + o;
				break;
			case 2:
				i = n + o, r = a - o;
				break;
			case 3: n = i - o, r = a - o;
		}
		this._root && this._root.length && (this._root = s);
	}
	return this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = a, this;
}
//#endregion
//#region node_modules/d3-quadtree/src/data.js
function Xc() {
	var e = [];
	return this.visit(function(t) {
		if (!t.length) do
			e.push(t.data);
		while (t = t.next);
	}), e;
}
//#endregion
//#region node_modules/d3-quadtree/src/extent.js
function Zc(e) {
	return arguments.length ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
//#endregion
//#region node_modules/d3-quadtree/src/quad.js
function Y(e, t, n, r, i) {
	this.node = e, this.x0 = t, this.y0 = n, this.x1 = r, this.y1 = i;
}
//#endregion
//#region node_modules/d3-quadtree/src/find.js
function Qc(e, t, n) {
	var r, i = this._x0, a = this._y0, o, s, c, l, u = this._x1, d = this._y1, f = [], p = this._root, m, h;
	for (p && f.push(new Y(p, i, a, u, d)), n == null ? n = Infinity : (i = e - n, a = t - n, u = e + n, d = t + n, n *= n); m = f.pop();) if (!(!(p = m.node) || (o = m.x0) > u || (s = m.y0) > d || (c = m.x1) < i || (l = m.y1) < a)) if (p.length) {
		var g = (o + c) / 2, _ = (s + l) / 2;
		f.push(new Y(p[3], g, _, c, l), new Y(p[2], o, _, g, l), new Y(p[1], g, s, c, _), new Y(p[0], o, s, g, _)), (h = (t >= _) << 1 | e >= g) && (m = f[f.length - 1], f[f.length - 1] = f[f.length - 1 - h], f[f.length - 1 - h] = m);
	} else {
		var v = e - +this._x.call(null, p.data), y = t - +this._y.call(null, p.data), b = v * v + y * y;
		if (b < n) {
			var x = Math.sqrt(n = b);
			i = e - x, a = t - x, u = e + x, d = t + x, r = p.data;
		}
	}
	return r;
}
//#endregion
//#region node_modules/d3-quadtree/src/remove.js
function $c(e) {
	if (isNaN(u = +this._x.call(null, e)) || isNaN(d = +this._y.call(null, e))) return this;
	var t, n = this._root, r, i, a, o = this._x0, s = this._y0, c = this._x1, l = this._y1, u, d, f, p, m, h, g, _;
	if (!n) return this;
	if (n.length) for (;;) {
		if ((m = u >= (f = (o + c) / 2)) ? o = f : c = f, (h = d >= (p = (s + l) / 2)) ? s = p : l = p, t = n, !(n = n[g = h << 1 | m])) return this;
		if (!n.length) break;
		(t[g + 1 & 3] || t[g + 2 & 3] || t[g + 3 & 3]) && (r = t, _ = g);
	}
	for (; n.data !== e;) if (i = n, !(n = n.next)) return this;
	return (a = n.next) && delete n.next, i ? (a ? i.next = a : delete i.next, this) : t ? (a ? t[g] = a : delete t[g], (n = t[0] || t[1] || t[2] || t[3]) && n === (t[3] || t[2] || t[1] || t[0]) && !n.length && (r ? r[_] = n : this._root = n), this) : (this._root = a, this);
}
function el(e) {
	for (var t = 0, n = e.length; t < n; ++t) this.remove(e[t]);
	return this;
}
//#endregion
//#region node_modules/d3-quadtree/src/root.js
function tl() {
	return this._root;
}
//#endregion
//#region node_modules/d3-quadtree/src/size.js
function nl() {
	var e = 0;
	return this.visit(function(t) {
		if (!t.length) do
			++e;
		while (t = t.next);
	}), e;
}
//#endregion
//#region node_modules/d3-quadtree/src/visit.js
function rl(e) {
	var t = [], n, r = this._root, i, a, o, s, c;
	for (r && t.push(new Y(r, this._x0, this._y0, this._x1, this._y1)); n = t.pop();) if (!e(r = n.node, a = n.x0, o = n.y0, s = n.x1, c = n.y1) && r.length) {
		var l = (a + s) / 2, u = (o + c) / 2;
		(i = r[3]) && t.push(new Y(i, l, u, s, c)), (i = r[2]) && t.push(new Y(i, a, u, l, c)), (i = r[1]) && t.push(new Y(i, l, o, s, u)), (i = r[0]) && t.push(new Y(i, a, o, l, u));
	}
	return this;
}
//#endregion
//#region node_modules/d3-quadtree/src/visitAfter.js
function il(e) {
	var t = [], n = [], r;
	for (this._root && t.push(new Y(this._root, this._x0, this._y0, this._x1, this._y1)); r = t.pop();) {
		var i = r.node;
		if (i.length) {
			var a, o = r.x0, s = r.y0, c = r.x1, l = r.y1, u = (o + c) / 2, d = (s + l) / 2;
			(a = i[0]) && t.push(new Y(a, o, s, u, d)), (a = i[1]) && t.push(new Y(a, u, s, c, d)), (a = i[2]) && t.push(new Y(a, o, d, u, l)), (a = i[3]) && t.push(new Y(a, u, d, c, l));
		}
		n.push(r);
	}
	for (; r = n.pop();) e(r.node, r.x0, r.y0, r.x1, r.y1);
	return this;
}
//#endregion
//#region node_modules/d3-quadtree/src/x.js
function al(e) {
	return e[0];
}
function ol(e) {
	return arguments.length ? (this._x = e, this) : this._x;
}
//#endregion
//#region node_modules/d3-quadtree/src/y.js
function sl(e) {
	return e[1];
}
function cl(e) {
	return arguments.length ? (this._y = e, this) : this._y;
}
//#endregion
//#region node_modules/d3-quadtree/src/quadtree.js
function ll(e, t, n) {
	var r = new ul(t ?? al, n ?? sl, NaN, NaN, NaN, NaN);
	return e == null ? r : r.addAll(e);
}
function ul(e, t, n, r, i, a) {
	this._x = e, this._y = t, this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = a, this._root = void 0;
}
function dl(e) {
	for (var t = { data: e.data }, n = t; e = e.next;) n = n.next = { data: e.data };
	return t;
}
var X = ll.prototype = ul.prototype;
X.copy = function() {
	var e = new ul(this._x, this._y, this._x0, this._y0, this._x1, this._y1), t = this._root, n, r;
	if (!t) return e;
	if (!t.length) return e._root = dl(t), e;
	for (n = [{
		source: t,
		target: e._root = [
			,
			,
			,
			,
		]
	}]; t = n.pop();) for (var i = 0; i < 4; ++i) (r = t.source[i]) && (r.length ? n.push({
		source: r,
		target: t.target[i] = [
			,
			,
			,
			,
		]
	}) : t.target[i] = dl(r));
	return e;
}, X.add = Kc, X.addAll = Jc, X.cover = Yc, X.data = Xc, X.extent = Zc, X.find = Qc, X.remove = $c, X.removeAll = el, X.root = tl, X.size = nl, X.visit = rl, X.visitAfter = il, X.x = ol, X.y = cl;
//#endregion
//#region node_modules/d3-force/src/constant.js
function fl(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-force/src/jiggle.js
function Z(e) {
	return (e() - .5) * 1e-6;
}
//#endregion
//#region node_modules/d3-force/src/link.js
function pl(e) {
	return e.index;
}
function ml(e, t) {
	var n = e.get(t);
	if (!n) throw Error("node not found: " + t);
	return n;
}
function hl(e) {
	var t = pl, n = d, r, i = fl(30), a, o, s, c, l, u = 1;
	e ??= [];
	function d(e) {
		return 1 / Math.min(s[e.source.index], s[e.target.index]);
	}
	function f(t) {
		for (var n = 0, i = e.length; n < u; ++n) for (var o = 0, s, d, f, p, m, h, g; o < i; ++o) s = e[o], d = s.source, f = s.target, p = f.x + f.vx - d.x - d.vx || Z(l), m = f.y + f.vy - d.y - d.vy || Z(l), h = Math.sqrt(p * p + m * m), h = (h - a[o]) / h * t * r[o], p *= h, m *= h, f.vx -= p * (g = c[o]), f.vy -= m * g, d.vx += p * (g = 1 - g), d.vy += m * g;
	}
	function p() {
		if (o) {
			var n, i = o.length, l = e.length, u = new Map(o.map((e, n) => [t(e, n, o), e])), d;
			for (n = 0, s = Array(i); n < l; ++n) d = e[n], d.index = n, typeof d.source != "object" && (d.source = ml(u, d.source)), typeof d.target != "object" && (d.target = ml(u, d.target)), s[d.source.index] = (s[d.source.index] || 0) + 1, s[d.target.index] = (s[d.target.index] || 0) + 1;
			for (n = 0, c = Array(l); n < l; ++n) d = e[n], c[n] = s[d.source.index] / (s[d.source.index] + s[d.target.index]);
			r = Array(l), m(), a = Array(l), h();
		}
	}
	function m() {
		if (o) for (var t = 0, i = e.length; t < i; ++t) r[t] = +n(e[t], t, e);
	}
	function h() {
		if (o) for (var t = 0, n = e.length; t < n; ++t) a[t] = +i(e[t], t, e);
	}
	return f.initialize = function(e, t) {
		o = e, l = t, p();
	}, f.links = function(t) {
		return arguments.length ? (e = t, p(), f) : e;
	}, f.id = function(e) {
		return arguments.length ? (t = e, f) : t;
	}, f.iterations = function(e) {
		return arguments.length ? (u = +e, f) : u;
	}, f.strength = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : fl(+e), m(), f) : n;
	}, f.distance = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : fl(+e), h(), f) : i;
	}, f;
}
//#endregion
//#region node_modules/d3-force/src/lcg.js
var gl = 1664525, _l = 1013904223, vl = 4294967296;
function yl() {
	let e = 1;
	return () => (e = (gl * e + _l) % vl) / vl;
}
//#endregion
//#region node_modules/d3-force/src/simulation.js
function bl(e) {
	return e.x;
}
function xl(e) {
	return e.y;
}
var Sl = 10, Cl = Math.PI * (3 - Math.sqrt(5));
function wl(e) {
	var t, n = 1, r = .001, i = 1 - r ** (1 / 300), a = 0, o = .6, s = /* @__PURE__ */ new Map(), c = ds(d), l = ja("tick", "end"), u = yl();
	e ??= [];
	function d() {
		f(), l.call("tick", t), n < r && (c.stop(), l.call("end", t));
	}
	function f(r) {
		var c, l = e.length, u;
		r === void 0 && (r = 1);
		for (var d = 0; d < r; ++d) for (n += (a - n) * i, s.forEach(function(e) {
			e(n);
		}), c = 0; c < l; ++c) u = e[c], u.fx == null ? u.x += u.vx *= o : (u.x = u.fx, u.vx = 0), u.fy == null ? u.y += u.vy *= o : (u.y = u.fy, u.vy = 0);
		return t;
	}
	function p() {
		for (var t = 0, n = e.length, r; t < n; ++t) {
			if (r = e[t], r.index = t, r.fx != null && (r.x = r.fx), r.fy != null && (r.y = r.fy), isNaN(r.x) || isNaN(r.y)) {
				var i = Sl * Math.sqrt(.5 + t), a = t * Cl;
				r.x = i * Math.cos(a), r.y = i * Math.sin(a);
			}
			(isNaN(r.vx) || isNaN(r.vy)) && (r.vx = r.vy = 0);
		}
	}
	function m(t) {
		return t.initialize && t.initialize(e, u), t;
	}
	return p(), t = {
		tick: f,
		restart: function() {
			return c.restart(d), t;
		},
		stop: function() {
			return c.stop(), t;
		},
		nodes: function(n) {
			return arguments.length ? (e = n, p(), s.forEach(m), t) : e;
		},
		alpha: function(e) {
			return arguments.length ? (n = +e, t) : n;
		},
		alphaMin: function(e) {
			return arguments.length ? (r = +e, t) : r;
		},
		alphaDecay: function(e) {
			return arguments.length ? (i = +e, t) : +i;
		},
		alphaTarget: function(e) {
			return arguments.length ? (a = +e, t) : a;
		},
		velocityDecay: function(e) {
			return arguments.length ? (o = 1 - e, t) : 1 - o;
		},
		randomSource: function(e) {
			return arguments.length ? (u = e, s.forEach(m), t) : u;
		},
		force: function(e, n) {
			return arguments.length > 1 ? (n == null ? s.delete(e) : s.set(e, m(n)), t) : s.get(e);
		},
		find: function(t, n, r) {
			var i = 0, a = e.length, o, s, c, l, u;
			for (r == null ? r = Infinity : r *= r, i = 0; i < a; ++i) l = e[i], o = t - l.x, s = n - l.y, c = o * o + s * s, c < r && (u = l, r = c);
			return u;
		},
		on: function(e, n) {
			return arguments.length > 1 ? (l.on(e, n), t) : l.on(e);
		}
	};
}
//#endregion
//#region node_modules/d3-force/src/manyBody.js
function Tl() {
	var e, t, n, r, i = fl(-30), a, o = 1, s = Infinity, c = .81;
	function l(n) {
		var i, a = e.length, o = ll(e, bl, xl).visitAfter(d);
		for (r = n, i = 0; i < a; ++i) t = e[i], o.visit(f);
	}
	function u() {
		if (e) {
			var t, n = e.length, r;
			for (a = Array(n), t = 0; t < n; ++t) r = e[t], a[r.index] = +i(r, t, e);
		}
	}
	function d(e) {
		var t = 0, n, r, i = 0, o, s, c;
		if (e.length) {
			for (o = s = c = 0; c < 4; ++c) (n = e[c]) && (r = Math.abs(n.value)) && (t += n.value, i += r, o += r * n.x, s += r * n.y);
			e.x = o / i, e.y = s / i;
		} else {
			n = e, n.x = n.data.x, n.y = n.data.y;
			do
				t += a[n.data.index];
			while (n = n.next);
		}
		e.value = t;
	}
	function f(e, i, l, u) {
		if (!e.value) return !0;
		var d = e.x - t.x, f = e.y - t.y, p = u - i, m = d * d + f * f;
		if (p * p / c < m) return m < s && (d === 0 && (d = Z(n), m += d * d), f === 0 && (f = Z(n), m += f * f), m < o && (m = Math.sqrt(o * m)), t.vx += d * e.value * r / m, t.vy += f * e.value * r / m), !0;
		if (!(e.length || m >= s)) {
			(e.data !== t || e.next) && (d === 0 && (d = Z(n), m += d * d), f === 0 && (f = Z(n), m += f * f), m < o && (m = Math.sqrt(o * m)));
			do
				e.data !== t && (p = a[e.data.index] * r / m, t.vx += d * p, t.vy += f * p);
			while (e = e.next);
		}
	}
	return l.initialize = function(t, r) {
		e = t, n = r, u();
	}, l.strength = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : fl(+e), u(), l) : i;
	}, l.distanceMin = function(e) {
		return arguments.length ? (o = e * e, l) : Math.sqrt(o);
	}, l.distanceMax = function(e) {
		return arguments.length ? (s = e * e, l) : Math.sqrt(s);
	}, l.theta = function(e) {
		return arguments.length ? (c = e * e, l) : Math.sqrt(c);
	}, l;
}
//#endregion
//#region src/networkDiagram.ts
var El = -300, Dl = 100, Ol = 640, kl = 480, Al = 180, jl = 20, Ml = 22, Q = {
	linkStroke: "#9ca3af",
	nodeFill: "#2563eb",
	nodeFillHovered: "#3b82f6",
	nodeFillSelected: "#f59e0b",
	nodeStroke: "#1e40af",
	nodeStrokeHovered: "#1d4ed8",
	nodeStrokeSelected: "#b45309",
	nodeText: "#ffffff"
};
function Nl(e, t, n = {}) {
	let r = t.clientWidth || Ol, i = t.clientHeight || kl, a = e.nodes.map((e) => ({ ...e })), o = e.links.map((e) => ({ ...e })), s = Math.min(r, i) * .22;
	for (let [e, t] of a.entries()) {
		let n = e / a.length * Math.PI * 2;
		t.x = r / 2 + Math.cos(n) * s, t.y = i / 2 + Math.sin(n) * s;
	}
	let c = wl(a).force("link", hl(o).id((e) => e.id).distance(n.linkDistance ?? Dl)).force("charge", Tl().strength(n.chargeStrength ?? El)).force("center", Gc(r / 2, i / 2)), l = A(t).append("svg").attr("width", r).attr("height", i).attr("viewBox", `0 0 ${String(r)} ${String(i)}`).style("touch-action", "none"), u = l.append("g"), d = u.selectAll("line").data(o).join("line").attr("stroke", Q.linkStroke).attr("stroke-width", 2), f = u.selectAll("g").data(a).join("g").style("cursor", "pointer");
	f.append("circle").attr("r", jl).attr("fill", Q.nodeFill).attr("stroke", Q.nodeStroke).attr("stroke-width", 2), f.append("text").text((e) => e.id).attr("text-anchor", "middle").attr("dy", 4).attr("fill", Q.nodeText);
	let p = null, m = null, h = () => {
		f.selectAll("circle").attr("fill", (e) => e.id === p ? Q.nodeFillSelected : e.id === m ? Q.nodeFillHovered : Q.nodeFill).attr("stroke", (e) => e.id === p ? Q.nodeStrokeSelected : e.id === m ? Q.nodeStrokeHovered : Q.nodeStroke).attr("stroke-width", (e) => e.id === p ? 3 : 2).attr("r", (e) => e.id === p || e.id === m ? Ml : jl);
	};
	f.on("mouseenter", (e, t) => {
		m = t.id, h();
	}).on("mouseleave", (e, t) => {
		m === t.id && (m = null), h();
	}).on("click", (e, t) => {
		e.stopPropagation(), p = p === t.id ? null : t.id, h();
	}), l.on("click", () => {
		p = null, h();
	});
	let g = Wc().scaleExtent([.5, 4]).on("zoom", (e) => {
		u.attr("transform", e.transform.toString());
	});
	l.call(g).on("dblclick.zoom", null);
	let _ = (e, t) => typeof e == "object" ? e[t] ?? 0 : 0, v = () => {
		d.attr("x1", (e) => _(e.source, "x")).attr("y1", (e) => _(e.source, "y")).attr("x2", (e) => _(e.target, "x")).attr("y2", (e) => _(e.target, "y")), f.attr("transform", (e) => `translate(${String(e.x ?? 0)},${String(e.y ?? 0)})`);
	};
	c.stop(), f.call(qa().on("start", (e, t) => {
		e.sourceEvent?.stopPropagation(), t.fx = t.x, t.fy = t.y;
	}).on("drag", (e, t) => {
		t.x = e.x, t.y = e.y, t.fx = e.x, t.fy = e.y, v();
	}).on("end", (e, t) => {
		t.fx = null, t.fy = null;
	})), v();
	let y = l.node();
	if (y == null) throw Error("Failed to create network diagram SVG element.");
	return {
		destroy: () => {
			c.stop(), l.remove();
		},
		resize: () => {
			let e = t.clientWidth || Ol, n = t.clientHeight || kl;
			l.attr("width", e).attr("height", n).attr("viewBox", `0 0 ${String(e)} ${String(n)}`), c.force("center", Gc(e / 2, n / 2));
		},
		svg: y,
		triggerAutoLayout: () => {
			c.alpha(1);
			for (let e = 0; e < Al; e += 1) c.tick();
			c.stop(), v();
		}
	};
}
//#endregion
//#region node_modules/d3-array/src/max.js
function Pl(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n < t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n < i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/d3-array/src/min.js
function Fl(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n > t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n > i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/d3-array/src/sum.js
function Il(e, t) {
	let n = 0;
	if (t === void 0) for (let t of e) (t = +t) && (n += t);
	else {
		let r = -1;
		for (let i of e) (i = +t(i, ++r, e)) && (n += i);
	}
	return n;
}
//#endregion
//#region node_modules/d3-sankey/src/align.js
function Ll(e, t) {
	return e.sourceLinks.length ? e.depth : t - 1;
}
//#endregion
//#region node_modules/d3-sankey/src/constant.js
function Rl(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-sankey/src/sankey.js
function zl(e, t) {
	return Vl(e.source, t.source) || e.index - t.index;
}
function Bl(e, t) {
	return Vl(e.target, t.target) || e.index - t.index;
}
function Vl(e, t) {
	return e.y0 - t.y0;
}
function Hl(e) {
	return e.value;
}
function Ul(e) {
	return e.index;
}
function Wl(e) {
	return e.nodes;
}
function Gl(e) {
	return e.links;
}
function Kl(e, t) {
	let n = e.get(t);
	if (!n) throw Error("missing: " + t);
	return n;
}
function ql({ nodes: e }) {
	for (let t of e) {
		let e = t.y0, n = e;
		for (let n of t.sourceLinks) n.y0 = e + n.width / 2, e += n.width;
		for (let e of t.targetLinks) e.y1 = n + e.width / 2, n += e.width;
	}
}
function Jl() {
	let e = 0, t = 0, n = 1, r = 1, i = 24, a = 8, o, s = Ul, c = Ll, l, u, d = Wl, f = Gl, p = 6;
	function m() {
		let e = {
			nodes: d.apply(null, arguments),
			links: f.apply(null, arguments)
		};
		return h(e), g(e), _(e), v(e), x(e), ql(e), e;
	}
	m.update = function(e) {
		return ql(e), e;
	}, m.nodeId = function(e) {
		return arguments.length ? (s = typeof e == "function" ? e : Rl(e), m) : s;
	}, m.nodeAlign = function(e) {
		return arguments.length ? (c = typeof e == "function" ? e : Rl(e), m) : c;
	}, m.nodeSort = function(e) {
		return arguments.length ? (l = e, m) : l;
	}, m.nodeWidth = function(e) {
		return arguments.length ? (i = +e, m) : i;
	}, m.nodePadding = function(e) {
		return arguments.length ? (a = o = +e, m) : a;
	}, m.nodes = function(e) {
		return arguments.length ? (d = typeof e == "function" ? e : Rl(e), m) : d;
	}, m.links = function(e) {
		return arguments.length ? (f = typeof e == "function" ? e : Rl(e), m) : f;
	}, m.linkSort = function(e) {
		return arguments.length ? (u = e, m) : u;
	}, m.size = function(i) {
		return arguments.length ? (e = t = 0, n = +i[0], r = +i[1], m) : [n - e, r - t];
	}, m.extent = function(i) {
		return arguments.length ? (e = +i[0][0], n = +i[1][0], t = +i[0][1], r = +i[1][1], m) : [[e, t], [n, r]];
	}, m.iterations = function(e) {
		return arguments.length ? (p = +e, m) : p;
	};
	function h({ nodes: e, links: t }) {
		for (let [t, n] of e.entries()) n.index = t, n.sourceLinks = [], n.targetLinks = [];
		let n = new Map(e.map((t, n) => [s(t, n, e), t]));
		for (let [e, r] of t.entries()) {
			r.index = e;
			let { source: t, target: i } = r;
			typeof t != "object" && (t = r.source = Kl(n, t)), typeof i != "object" && (i = r.target = Kl(n, i)), t.sourceLinks.push(r), i.targetLinks.push(r);
		}
		if (u != null) for (let { sourceLinks: t, targetLinks: n } of e) t.sort(u), n.sort(u);
	}
	function g({ nodes: e }) {
		for (let t of e) t.value = t.fixedValue === void 0 ? Math.max(Il(t.sourceLinks, Hl), Il(t.targetLinks, Hl)) : t.fixedValue;
	}
	function _({ nodes: e }) {
		let t = e.length, n = new Set(e), r = /* @__PURE__ */ new Set(), i = 0;
		for (; n.size;) {
			for (let e of n) {
				e.depth = i;
				for (let { target: t } of e.sourceLinks) r.add(t);
			}
			if (++i > t) throw Error("circular link");
			n = r, r = /* @__PURE__ */ new Set();
		}
	}
	function v({ nodes: e }) {
		let t = e.length, n = new Set(e), r = /* @__PURE__ */ new Set(), i = 0;
		for (; n.size;) {
			for (let e of n) {
				e.height = i;
				for (let { source: t } of e.targetLinks) r.add(t);
			}
			if (++i > t) throw Error("circular link");
			n = r, r = /* @__PURE__ */ new Set();
		}
	}
	function y({ nodes: t }) {
		let r = Pl(t, (e) => e.depth) + 1, a = (n - e - i) / (r - 1), o = Array(r);
		for (let n of t) {
			let t = Math.max(0, Math.min(r - 1, Math.floor(c.call(null, n, r))));
			n.layer = t, n.x0 = e + t * a, n.x1 = n.x0 + i, o[t] ? o[t].push(n) : o[t] = [n];
		}
		if (l) for (let e of o) e.sort(l);
		return o;
	}
	function b(e) {
		let n = Fl(e, (e) => (r - t - (e.length - 1) * o) / Il(e, Hl));
		for (let i of e) {
			let e = t;
			for (let t of i) {
				t.y0 = e, t.y1 = e + t.value * n, e = t.y1 + o;
				for (let e of t.sourceLinks) e.width = e.value * n;
			}
			e = (r - e + o) / (i.length + 1);
			for (let t = 0; t < i.length; ++t) {
				let n = i[t];
				n.y0 += e * (t + 1), n.y1 += e * (t + 1);
			}
			ie(i);
		}
	}
	function x(e) {
		let n = y(e);
		o = Math.min(a, (r - t) / (Pl(n, (e) => e.length) - 1)), b(n);
		for (let e = 0; e < p; ++e) {
			let t = .99 ** e, r = Math.max(1 - t, (e + 1) / p);
			ee(n, t, r), S(n, t, r);
		}
	}
	function S(e, t, n) {
		for (let r = 1, i = e.length; r < i; ++r) {
			let i = e[r];
			for (let e of i) {
				let n = 0, r = 0;
				for (let { source: t, value: i } of e.targetLinks) {
					let a = i * (e.layer - t.layer);
					n += ae(t, e) * a, r += a;
				}
				if (!(r > 0)) continue;
				let i = (n / r - e.y0) * t;
				e.y0 += i, e.y1 += i, re(e);
			}
			l === void 0 && i.sort(Vl), te(i, n);
		}
	}
	function ee(e, t, n) {
		for (let r = e.length - 2; r >= 0; --r) {
			let i = e[r];
			for (let e of i) {
				let n = 0, r = 0;
				for (let { target: t, value: i } of e.sourceLinks) {
					let a = i * (t.layer - e.layer);
					n += oe(e, t) * a, r += a;
				}
				if (!(r > 0)) continue;
				let i = (n / r - e.y0) * t;
				e.y0 += i, e.y1 += i, re(e);
			}
			l === void 0 && i.sort(Vl), te(i, n);
		}
	}
	function te(e, n) {
		let i = e.length >> 1, a = e[i];
		C(e, a.y0 - o, i - 1, n), ne(e, a.y1 + o, i + 1, n), C(e, r, e.length - 1, n), ne(e, t, 0, n);
	}
	function ne(e, t, n, r) {
		for (; n < e.length; ++n) {
			let i = e[n], a = (t - i.y0) * r;
			a > 1e-6 && (i.y0 += a, i.y1 += a), t = i.y1 + o;
		}
	}
	function C(e, t, n, r) {
		for (; n >= 0; --n) {
			let i = e[n], a = (i.y1 - t) * r;
			a > 1e-6 && (i.y0 -= a, i.y1 -= a), t = i.y0 - o;
		}
	}
	function re({ sourceLinks: e, targetLinks: t }) {
		if (u === void 0) {
			for (let { source: { sourceLinks: e } } of t) e.sort(Bl);
			for (let { target: { targetLinks: t } } of e) t.sort(zl);
		}
	}
	function ie(e) {
		if (u === void 0) for (let { sourceLinks: t, targetLinks: n } of e) t.sort(Bl), n.sort(zl);
	}
	function ae(e, t) {
		let n = e.y0 - (e.sourceLinks.length - 1) * o / 2;
		for (let { target: r, width: i } of e.sourceLinks) {
			if (r === t) break;
			n += i + o;
		}
		for (let { source: r, width: i } of t.targetLinks) {
			if (r === e) break;
			n -= i;
		}
		return n;
	}
	function oe(e, t) {
		let n = t.y0 - (t.targetLinks.length - 1) * o / 2;
		for (let { source: r, width: i } of t.targetLinks) {
			if (r === e) break;
			n += i + o;
		}
		for (let { target: r, width: i } of e.sourceLinks) {
			if (r === t) break;
			n -= i;
		}
		return n;
	}
	return m;
}
//#endregion
//#region node_modules/d3-sankey/node_modules/d3-path/src/path.js
var Yl = Math.PI, Xl = 2 * Yl, $ = 1e-6, Zl = Xl - $;
function Ql() {
	this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
}
function $l() {
	return new Ql();
}
Ql.prototype = $l.prototype = {
	constructor: Ql,
	moveTo: function(e, t) {
		this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
	},
	closePath: function() {
		this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
	},
	lineTo: function(e, t) {
		this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
	},
	quadraticCurveTo: function(e, t, n, r) {
		this._ += "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +r);
	},
	bezierCurveTo: function(e, t, n, r, i, a) {
		this._ += "C" + +e + "," + +t + "," + +n + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +a);
	},
	arcTo: function(e, t, n, r, i) {
		e = +e, t = +t, n = +n, r = +r, i = +i;
		var a = this._x1, o = this._y1, s = n - e, c = r - t, l = a - e, u = o - t, d = l * l + u * u;
		if (i < 0) throw Error("negative radius: " + i);
		if (this._x1 === null) this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
		else if (d > $) if (!(Math.abs(u * s - c * l) > $) || !i) this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
		else {
			var f = n - a, p = r - o, m = s * s + c * c, h = f * f + p * p, g = Math.sqrt(m), _ = Math.sqrt(d), v = i * Math.tan((Yl - Math.acos((m + d - h) / (2 * g * _))) / 2), y = v / _, b = v / g;
			Math.abs(y - 1) > $ && (this._ += "L" + (e + y * l) + "," + (t + y * u)), this._ += "A" + i + "," + i + ",0,0," + +(u * f > l * p) + "," + (this._x1 = e + b * s) + "," + (this._y1 = t + b * c);
		}
	},
	arc: function(e, t, n, r, i, a) {
		e = +e, t = +t, n = +n, a = !!a;
		var o = n * Math.cos(r), s = n * Math.sin(r), c = e + o, l = t + s, u = 1 ^ a, d = a ? r - i : i - r;
		if (n < 0) throw Error("negative radius: " + n);
		this._x1 === null ? this._ += "M" + c + "," + l : (Math.abs(this._x1 - c) > $ || Math.abs(this._y1 - l) > $) && (this._ += "L" + c + "," + l), n && (d < 0 && (d = d % Xl + Xl), d > Zl ? this._ += "A" + n + "," + n + ",0,1," + u + "," + (e - o) + "," + (t - s) + "A" + n + "," + n + ",0,1," + u + "," + (this._x1 = c) + "," + (this._y1 = l) : d > $ && (this._ += "A" + n + "," + n + ",0," + +(d >= Yl) + "," + u + "," + (this._x1 = e + n * Math.cos(i)) + "," + (this._y1 = t + n * Math.sin(i))));
	},
	rect: function(e, t, n, r) {
		this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +r + "h" + -n + "Z";
	},
	toString: function() {
		return this._;
	}
};
//#endregion
//#region node_modules/d3-sankey/node_modules/d3-shape/src/constant.js
function eu(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-sankey/node_modules/d3-shape/src/point.js
function tu(e) {
	return e[0];
}
function nu(e) {
	return e[1];
}
//#endregion
//#region node_modules/d3-sankey/node_modules/d3-shape/src/array.js
var ru = Array.prototype.slice;
//#endregion
//#region node_modules/d3-sankey/node_modules/d3-shape/src/link/index.js
function iu(e) {
	return e.source;
}
function au(e) {
	return e.target;
}
function ou(e) {
	var t = iu, n = au, r = tu, i = nu, a = null;
	function o() {
		var o, s = ru.call(arguments), c = t.apply(this, s), l = n.apply(this, s);
		if (a ||= o = $l(), e(a, +r.apply(this, (s[0] = c, s)), +i.apply(this, s), +r.apply(this, (s[0] = l, s)), +i.apply(this, s)), o) return a = null, o + "" || null;
	}
	return o.source = function(e) {
		return arguments.length ? (t = e, o) : t;
	}, o.target = function(e) {
		return arguments.length ? (n = e, o) : n;
	}, o.x = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : eu(+e), o) : r;
	}, o.y = function(e) {
		return arguments.length ? (i = typeof e == "function" ? e : eu(+e), o) : i;
	}, o.context = function(e) {
		return arguments.length ? (a = e ?? null, o) : a;
	}, o;
}
function su(e, t, n, r, i) {
	e.moveTo(t, n), e.bezierCurveTo(t = (t + r) / 2, n, t, i, r, i);
}
function cu() {
	return ou(su);
}
//#endregion
//#region node_modules/d3-sankey/src/sankeyLinkHorizontal.js
function lu(e) {
	return [e.source.x1, e.y0];
}
function uu(e) {
	return [e.target.x0, e.y1];
}
function du() {
	return cu().source(lu).target(uu);
}
//#endregion
//#region src/palette.ts
var fu = [
	{
		dark: "#3987e5",
		light: "#2a78d6"
	},
	{
		dark: "#d95926",
		light: "#eb6834"
	},
	{
		dark: "#199e70",
		light: "#1baf7a"
	},
	{
		dark: "#c98500",
		light: "#eda100"
	},
	{
		dark: "#d55181",
		light: "#e87ba4"
	},
	{
		dark: "#008300",
		light: "#008300"
	},
	{
		dark: "#9085e9",
		light: "#4a3aa7"
	},
	{
		dark: "#e66767",
		light: "#e34948"
	}
], pu = {
	dark: {
		muted: "#898781",
		primary: "#ffffff",
		secondary: "#c3c2b7"
	},
	light: {
		muted: "#898781",
		primary: "#0b0b0b",
		secondary: "#52514e"
	}
}, mu = {
	dark: {
		border: "rgba(255,255,255,0.10)",
		chart: "#1a1a19"
	},
	light: {
		border: "rgba(11,11,11,0.10)",
		chart: "#fcfcfb"
	}
};
function hu(e, t) {
	let n = fu[(e % fu.length + fu.length) % fu.length];
	if (n == null) throw Error("Categorical palette is empty.");
	return t === "dark" ? n.dark : n.light;
}
//#endregion
//#region src/sankeyDiagram.ts
var gu = 16, _u = 12, vu = 480, yu = 640, bu = 6;
function xu(e, t, n = {}) {
	let r = n.colorModeId ?? "light", i = pu[r], a = mu[r];
	getComputedStyle(t).position === "static" && (t.style.position = "relative");
	let o = A(t).append("div").attr("role", "tooltip").style("position", "absolute").style("pointer-events", "none").style("z-index", "1").style("opacity", "0").style("transition", "opacity 120ms ease").style("padding", "4px 8px").style("border-radius", "4px").style("font", "12px system-ui, -apple-system, \"Segoe UI\", sans-serif").style("white-space", "nowrap").style("background", a.chart).style("color", i.primary).style("border", `1px solid ${a.border}`).style("box-shadow", "0 2px 8px rgba(0,0,0,0.15)");
	function s(e, n) {
		let r = t.getBoundingClientRect();
		o.html(n).style("left", `${String(e.clientX - r.left + 12)}px`).style("top", `${String(e.clientY - r.top + 12)}px`).style("opacity", "1");
	}
	function c() {
		o.style("opacity", "0");
	}
	function l() {
		A(t).selectAll("svg").remove();
		let a = t.clientWidth || yu, o = t.clientHeight || vu, l = {
			links: e.links.map((e) => ({ ...e })),
			nodes: e.nodes.map((e) => ({ ...e }))
		}, { links: u, nodes: d } = Jl().nodeId((e) => e.id).nodeWidth(n.nodeWidth ?? gu).nodePadding(n.nodePadding ?? _u).extent([[1, 1], [a - 1, o - 1]])(l), f = A(t).insert("svg", "div").attr("viewBox", `0 0 ${String(a)} ${String(o)}`).attr("width", "100%").attr("height", "100%").attr("font-family", "system-ui, -apple-system, \"Segoe UI\", sans-serif").attr("font-size", 12), p = du();
		f.append("g").attr("fill", "none").selectAll("path").data(u).join("path").attr("d", p).attr("stroke", (e) => hu(d.indexOf(e.source), r)).attr("stroke-opacity", .35).attr("stroke-width", (e) => Math.max(1, e.width ?? 1)).on("mouseenter", (e, t) => {
			A(e.currentTarget).attr("stroke-opacity", .6);
			let n = t.source, r = t.target;
			s(e, `${n.name} → ${r.name}<br>${t.value.toLocaleString()}`);
		}).on("mousemove", (e, t) => {
			let n = t.source, r = t.target;
			s(e, `${n.name} → ${r.name}<br>${t.value.toLocaleString()}`);
		}).on("mouseleave", (e) => {
			A(e.currentTarget).attr("stroke-opacity", .35), c();
		});
		let m = f.append("g").selectAll("g").data(d).join("g");
		m.append("rect").attr("x", (e) => e.x0 ?? 0).attr("y", (e) => e.y0 ?? 0).attr("width", (e) => (e.x1 ?? 0) - (e.x0 ?? 0)).attr("height", (e) => Math.max(1, (e.y1 ?? 0) - (e.y0 ?? 0))).attr("rx", 2).attr("fill", (e, t) => hu(t, r)).on("mouseenter", (e, t) => {
			s(e, `${t.name}<br>${(t.value ?? 0).toLocaleString()}`);
		}).on("mousemove", (e, t) => {
			s(e, `${t.name}<br>${(t.value ?? 0).toLocaleString()}`);
		}).on("mouseleave", c), m.append("text").attr("x", (e) => (e.x0 ?? 0) < a / 2 ? (e.x1 ?? 0) + bu : (e.x0 ?? 0) - bu).attr("y", (e) => ((e.y0 ?? 0) + (e.y1 ?? 0)) / 2).attr("dy", "0.35em").attr("text-anchor", (e) => (e.x0 ?? 0) < a / 2 ? "start" : "end").attr("fill", i.primary).text((e) => e.name);
		let h = f.node();
		if (h == null) throw Error("Failed to create Sankey diagram SVG element.");
		return h;
	}
	let u = l();
	return {
		resize: () => {
			u = l();
		},
		get svg() {
			return u;
		}
	};
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/count.js
function Su(e) {
	var t = 0, n = e.children, r = n && n.length;
	if (!r) t = 1;
	else for (; --r >= 0;) t += n[r].value;
	e.value = t;
}
function Cu() {
	return this.eachAfter(Su);
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/each.js
function wu(e, t) {
	let n = -1;
	for (let r of this) e.call(t, r, ++n, this);
	return this;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
function Tu(e, t) {
	for (var n = this, r = [n], i, a, o = -1; n = r.pop();) if (e.call(t, n, ++o, this), i = n.children) for (a = i.length - 1; a >= 0; --a) r.push(i[a]);
	return this;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
function Eu(e, t) {
	for (var n = this, r = [n], i = [], a, o, s, c = -1; n = r.pop();) if (i.push(n), a = n.children) for (o = 0, s = a.length; o < s; ++o) r.push(a[o]);
	for (; n = i.pop();) e.call(t, n, ++c, this);
	return this;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/find.js
function Du(e, t) {
	let n = -1;
	for (let r of this) if (e.call(t, r, ++n, this)) return r;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/sum.js
function Ou(e) {
	return this.eachAfter(function(t) {
		for (var n = +e(t.data) || 0, r = t.children, i = r && r.length; --i >= 0;) n += r[i].value;
		t.value = n;
	});
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/sort.js
function ku(e) {
	return this.eachBefore(function(t) {
		t.children && t.children.sort(e);
	});
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/path.js
function Au(e) {
	for (var t = this, n = ju(t, e), r = [t]; t !== n;) t = t.parent, r.push(t);
	for (var i = r.length; e !== n;) r.splice(i, 0, e), e = e.parent;
	return r;
}
function ju(e, t) {
	if (e === t) return e;
	var n = e.ancestors(), r = t.ancestors(), i = null;
	for (e = n.pop(), t = r.pop(); e === t;) i = e, e = n.pop(), t = r.pop();
	return i;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/ancestors.js
function Mu() {
	for (var e = this, t = [e]; e = e.parent;) t.push(e);
	return t;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/descendants.js
function Nu() {
	return Array.from(this);
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/leaves.js
function Pu() {
	var e = [];
	return this.eachBefore(function(t) {
		t.children || e.push(t);
	}), e;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/links.js
function Fu() {
	var e = this, t = [];
	return e.each(function(n) {
		n !== e && t.push({
			source: n.parent,
			target: n
		});
	}), t;
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/iterator.js
function* Iu() {
	var e = this, t, n = [e], r, i, a;
	do
		for (t = n.reverse(), n = []; e = t.pop();) if (yield e, r = e.children) for (i = 0, a = r.length; i < a; ++i) n.push(r[i]);
	while (n.length);
}
//#endregion
//#region node_modules/d3-hierarchy/src/hierarchy/index.js
function Lu(e, t) {
	e instanceof Map ? (e = [void 0, e], t === void 0 && (t = Bu)) : t === void 0 && (t = zu);
	for (var n = new Uu(e), r, i = [n], a, o, s, c; r = i.pop();) if ((o = t(r.data)) && (c = (o = Array.from(o)).length)) for (r.children = o, s = c - 1; s >= 0; --s) i.push(a = o[s] = new Uu(o[s])), a.parent = r, a.depth = r.depth + 1;
	return n.eachBefore(Hu);
}
function Ru() {
	return Lu(this).eachBefore(Vu);
}
function zu(e) {
	return e.children;
}
function Bu(e) {
	return Array.isArray(e) ? e[1] : null;
}
function Vu(e) {
	e.data.value !== void 0 && (e.value = e.data.value), e.data = e.data.data;
}
function Hu(e) {
	var t = 0;
	do
		e.height = t;
	while ((e = e.parent) && e.height < ++t);
}
function Uu(e) {
	this.data = e, this.depth = this.height = 0, this.parent = null;
}
Uu.prototype = Lu.prototype = {
	constructor: Uu,
	count: Cu,
	each: wu,
	eachAfter: Eu,
	eachBefore: Tu,
	find: Du,
	sum: Ou,
	sort: ku,
	path: Au,
	ancestors: Mu,
	descendants: Nu,
	leaves: Pu,
	links: Fu,
	copy: Ru,
	[Symbol.iterator]: Iu
};
//#endregion
//#region node_modules/d3-hierarchy/src/tree.js
function Wu(e, t) {
	return e.parent === t.parent ? 1 : 2;
}
function Gu(e) {
	var t = e.children;
	return t ? t[0] : e.t;
}
function Ku(e) {
	var t = e.children;
	return t ? t[t.length - 1] : e.t;
}
function qu(e, t, n) {
	var r = n / (t.i - e.i);
	t.c -= r, t.s += n, e.c += r, t.z += n, t.m += n;
}
function Ju(e) {
	for (var t = 0, n = 0, r = e.children, i = r.length, a; --i >= 0;) a = r[i], a.z += t, a.m += t, t += a.s + (n += a.c);
}
function Yu(e, t, n) {
	return e.a.parent === t.parent ? e.a : n;
}
function Xu(e, t) {
	this._ = e, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = t;
}
Xu.prototype = Object.create(Uu.prototype);
function Zu(e) {
	for (var t = new Xu(e, 0), n, r = [t], i, a, o, s; n = r.pop();) if (a = n._.children) for (n.children = Array(s = a.length), o = s - 1; o >= 0; --o) r.push(i = n.children[o] = new Xu(a[o], o)), i.parent = n;
	return (t.parent = new Xu(null, 0)).children = [t], t;
}
function Qu() {
	var e = Wu, t = 1, n = 1, r = null;
	function i(i) {
		var s = Zu(i);
		if (s.eachAfter(a), s.parent.m = -s.z, s.eachBefore(o), r) i.eachBefore(c);
		else {
			var l = i, u = i, d = i;
			i.eachBefore(function(e) {
				e.x < l.x && (l = e), e.x > u.x && (u = e), e.depth > d.depth && (d = e);
			});
			var f = l === u ? 1 : e(l, u) / 2, p = f - l.x, m = t / (u.x + f + p), h = n / (d.depth || 1);
			i.eachBefore(function(e) {
				e.x = (e.x + p) * m, e.y = e.depth * h;
			});
		}
		return i;
	}
	function a(t) {
		var n = t.children, r = t.parent.children, i = t.i ? r[t.i - 1] : null;
		if (n) {
			Ju(t);
			var a = (n[0].z + n[n.length - 1].z) / 2;
			i ? (t.z = i.z + e(t._, i._), t.m = t.z - a) : t.z = a;
		} else i && (t.z = i.z + e(t._, i._));
		t.parent.A = s(t, i, t.parent.A || r[0]);
	}
	function o(e) {
		e._.x = e.z + e.parent.m, e.m += e.parent.m;
	}
	function s(t, n, r) {
		if (n) {
			for (var i = t, a = t, o = n, s = i.parent.children[0], c = i.m, l = a.m, u = o.m, d = s.m, f; o = Ku(o), i = Gu(i), o && i;) s = Gu(s), a = Ku(a), a.a = t, f = o.z + u - i.z - c + e(o._, i._), f > 0 && (qu(Yu(o, t, r), t, f), c += f, l += f), u += o.m, c += i.m, d += s.m, l += a.m;
			o && !Ku(a) && (a.t = o, a.m += u - l), i && !Gu(s) && (s.t = i, s.m += c - d, r = t);
		}
		return r;
	}
	function c(e) {
		e.x *= t, e.y = e.depth * n;
	}
	return i.separation = function(t) {
		return arguments.length ? (e = t, i) : e;
	}, i.size = function(e) {
		return arguments.length ? (r = !1, t = +e[0], n = +e[1], i) : r ? null : [t, n];
	}, i.nodeSize = function(e) {
		return arguments.length ? (r = !0, t = +e[0], n = +e[1], i) : r ? [t, n] : null;
	}, i;
}
//#endregion
//#region src/treeDiagram.ts
var $u = 140, ed = 40, td = 24, nd = 50, rd = 8, id = {
	branch: {
		fill: "#ffe6cc",
		stroke: "#d79b00"
	},
	leaf: {
		fill: "#dae8fc",
		stroke: "#6c8ebf"
	},
	root: {
		fill: "#d5e8d4",
		stroke: "#82b366"
	}
};
function ad(e, t, n = {}) {
	let r = n.nodeWidth ?? $u, i = n.nodeHeight ?? ed, a = n.siblingGap ?? td, o = n.levelGap ?? nd, s = n.padding ?? rd, c = n.nodeColors ?? id;
	function l(e) {
		return e.depth === 0 ? "root" : e.children ? "branch" : "leaf";
	}
	function u() {
		A(t).selectAll("svg").remove();
		let n = Lu(e, (e) => e.children), u = Qu().nodeSize([i + a, r + o]).separation(() => 1)(n);
		u.eachAfter((e) => {
			let [t] = e.children ?? [];
			t && (e.x = t.x);
		});
		let d = u.descendants(), f = Math.min(...d.map((e) => e.y)) - r / 2, p = Math.max(...d.map((e) => e.y)) + r / 2, m = Math.min(...d.map((e) => e.x)) - i / 2, h = Math.max(...d.map((e) => e.x)) + i / 2, g = p - f + s * 2, _ = h - m + s * 2, v = A(t).append("svg").attr("viewBox", `0 0 ${String(g)} ${String(_)}`).attr("width", g).attr("height", _), y = v.append("g").attr("transform", `translate(${String(s - f)}, ${String(s - m)})`), b = xa().x((e) => e.y).y((e) => e.x);
		y.append("g").attr("fill", "none").attr("stroke", "#999999").attr("stroke-width", 1.5).selectAll("path").data(u.links()).join("path").attr("d", b);
		let x = y.append("g").selectAll("g").data(d).join("g").attr("transform", (e) => `translate(${String(e.y - r / 2)}, ${String(e.x - i / 2)})`);
		x.append("rect").attr("width", r).attr("height", i).attr("rx", 6).attr("fill", (e) => c[l(e)].fill).attr("stroke", (e) => c[l(e)].stroke), x.append("text").attr("x", r / 2).attr("y", i / 2).attr("text-anchor", "middle").attr("dominant-baseline", "middle").attr("font-family", "Helvetica, Arial, sans-serif").attr("font-size", 12).attr("fill", "#000000").text((e) => e.data.label);
		let S = v.node();
		if (S == null) throw Error("Failed to create tree diagram SVG element.");
		return S;
	}
	let d = u();
	return {
		resize: () => {
			d = u();
		},
		get svg() {
			return d;
		}
	};
}
//#endregion
//#region src/index.ts
var od = "d3", sd = class {
	renderErdDiagram(e, t, n, r) {
		let i = Oa(e, t, n);
		return r?.(), {
			resize: i.resize,
			get svg() {
				return i.svg;
			},
			vendorId: od
		};
	}
	renderNetworkDiagram(e, t, n, r) {
		let i = Nl(e, t, n);
		return r?.(), {
			destroy: i.destroy,
			resize: i.resize,
			get svg() {
				return i.svg;
			},
			triggerAutoLayout: i.triggerAutoLayout,
			vendorId: od
		};
	}
	renderSankeyDiagram(e, t, n, r) {
		let i = xu(e, t, n);
		return r?.(), {
			resize: i.resize,
			get svg() {
				return i.svg;
			},
			vendorId: od
		};
	}
	renderTreeDiagram(e, t, n, r) {
		let i = ad(e, t, n);
		return r?.(), {
			resize: i.resize,
			get svg() {
				return i.svg;
			},
			vendorId: od
		};
	}
};
//#endregion
export { sd as D3Tool };

//# sourceMappingURL=dpuse-tool-d3.es.js.map