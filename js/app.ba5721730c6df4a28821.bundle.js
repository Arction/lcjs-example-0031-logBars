(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const r=a(89),{lightningChart:s,BarChartSorting:o,LegendBoxBuilders:u,Themes:d}=r,i=s().BarChart({valueAxis:{type:"logarithmic"},theme:d[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Grouped Bars Chart with Logarithmic Y Axis").setValueLabels(void 0).setCursorResultTableFormatter(((e,t,a,r)=>(e.addRow("Department:",r.subCategory).addRow("# of employees:",String(a)),e)));i.setDataGrouped(["Quarter 1","Quarter 2","Quarter 3","Quarter 4"],[{subCategory:"Product 1",values:[152e3,218e3,526900,726500]},{subCategory:"Product 2",values:[28300,32600,18e3,54600]},{subCategory:"Product 3",values:[12e4,105600,98500,13400]}]).setSorting(o.Alphabetical),i.valueAxis.setTitle("Product sales (€)"),i.addLegendBox(u.VerticalLegendBox).setAutoDispose({type:"max-width",maxWidth:.3}).add(i)}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);