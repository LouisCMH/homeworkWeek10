var spec1 = "homework9.vg.json";
var spec2 = "homework10_pop.vg.json";
vegaEmbed('#choropleth_map', spec1).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed('#plot_1', spec2).then(function(result) {
  // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);