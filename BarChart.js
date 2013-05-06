function barChart(data){
	// Select body element and all its paragraphs
	d3.select("body").selectAll("p")
	// Count all elemnts in the data array
	.data(data)
	// look at all dom elements and data values
	// if data.count > dom.elemnts create new element
	// to bind the data to
	.enter()
	// Create a new paragraph element for everyone that enter returns
	.append("p")
	// The text for each element is to be set here
	// We use a callBack function as the first arg
	// so that it will return the data value for the
	// value of the paragraph elements
	.text(function(d){return "Strings with dynamic numbers "+d;})
	// Here we can set a style on each elm
	.style("color","red");
}
function makeChart(){
	var data = [ 5, 10, 15, 20, 25 ];
	barChart(data);
}