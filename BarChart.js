function barChart(data){
	// select body, append div, with class "bar"
	d3.select("body").selectAll("div")
	// iterate over data
	.data(data)
	// create new element if data.count > dom.elms
	.enter()
	// type of elm to be created for each data value
	.append("div")
	// class to be added to each elm
	.attr("class", "bar")
	// adjust the height of each elm based on the val
	// passed into the callback
	// .style("height","25px") -> first val in array d*5 = "5*5+px"
	.style("height", function(d) {
		return (d * 5) + "px";
	});

	// Additioanlly to toggle classes you can use
	// .classed("bar",true) -> Toggles bar class on elm
	// .classed("bar",false)

}
function makeChart(){
	var data = [ 5, 10, 15, 20, 25 ];
	barChart(data);
}