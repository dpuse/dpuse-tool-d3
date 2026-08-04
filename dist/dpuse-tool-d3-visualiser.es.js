//#region src/index.ts
var e = class {
	async renderBillboardJS(e, t, n) {
		let { renderBillboardJS: r } = await import("./billboardJs-DJFb72FS.js"), i = r(e, t);
		return n?.(), {
			chart: i.chart,
			destroy: i.destroy,
			resize: i.resize,
			vendorId: "billboard.js"
		};
	}
	async renderObservablePlot(e, t, n, r) {
		let { renderObservablePlot: i } = await import("./observablePlot-D7o8-dnK.js"), a = i(e, t, n);
		return r?.(), {
			resize: a.resize,
			get svg() {
				return a.svg;
			},
			vendorId: "observable-plot"
		};
	}
	async renderErdDiagram(e, t, n, r) {
		let { renderErdDiagram: i } = await import("./erdDiagram-BDV0xo6a.js"), a = i(e, t, n);
		return r?.(), {
			resize: a.resize,
			get svg() {
				return a.svg;
			},
			vendorId: "d3"
		};
	}
	async renderNetworkDiagram(e, t, n, r) {
		let { renderNetworkDiagram: i } = await import("./networkDiagram-QWVy8iRy.js"), a = i(e, t, n);
		return r?.(), {
			destroy: a.destroy,
			resize: a.resize,
			get svg() {
				return a.svg;
			},
			triggerAutoLayout: a.triggerAutoLayout,
			vendorId: "d3"
		};
	}
	async renderSankeyDiagram(e, t, n, r) {
		let { renderSankeyDiagram: i } = await import("./sankeyDiagram-DlIuwzOl.js"), a = i(e, t, n);
		return r?.(), {
			resize: a.resize,
			get svg() {
				return a.svg;
			},
			vendorId: "d3"
		};
	}
	async renderTreeDiagram(e, t, n, r) {
		let { renderTreeDiagram: i } = await import("./treeDiagram-Bi5VXDVy.js"), a = i(e, t, n);
		return r?.(), {
			resize: a.resize,
			get svg() {
				return a.svg;
			},
			vendorId: "d3"
		};
	}
};
//#endregion
export { e as D3Tool };

//# sourceMappingURL=dpuse-tool-d3-visualiser.es.js.map