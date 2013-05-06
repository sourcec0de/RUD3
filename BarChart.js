function barChart(data){
	// select body, append div, with class "bar"
	d3.select("body").append("div").attr("class", "bar");

	// Additioanlly to toggle classes you can use
	// .classed("bar",true) -> Toggles bar class on elm
	// .classed("bar",false)

}
function makeChart(){
	var data = [ 5, 10, 15, 20, 25 ];
	barChart(data);
}