function barChart(data){
	
	
	//var dataSet = data;
	var barPadding = 1
	,	dataset = data
	,	svg = d3.select("body").append("svg").attr("width", "400").attr("height", "400").attr("x","50").attr("y","50")
	,	height = 380
	,	width = 400
	;
		
	if(dataset == null){
		alert("Data read didn't work wtfbbq");
	}

	function chart(){
	
		var yScale = d3.scale.linear().domain([0, d3.max(dataset, function(d) { return d; })]).range([height,0]); //domain is min/max of data, range = min and max of part of screen
		var xScale = d3.scale.ordinal().domain([function(d, i){return i;}]);
		
		var myMouseOverFunc = function() {
			var rect = d3.select(this);  //Create a selection for this - the mark the event occured on
			rect.attr("fill", "red" ); 
			rect.attr("opacity", "100%");
			svg.selectAll("text").attr("fill", "blue");// set it's fillcolor to red
		}
		var myMouseOutFunc = function(d) {
			var rect = d3.select(this);
			rect.attr("fill", "rgb(0,0,128)");
			rect.attr("opacity",  function (d) {
				var maxVal = Math.max.apply(null, dataset);
				return d/maxVal;
           });
		svg.selectAll("text").attr("fill", "red");
        }
		var myMouseClick = function(d){
			var rect = svg.select(this);
			rect.text(function(d){return d;});
		}
		svg.selectAll("rect").data(dataset).enter().append("rect")
		.attr("x", function(d, i){ return i * ((width) / dataset.length); } )
		.attr("y", function(d) { return yScale(d); } )
		.attr("width", width / dataset.length - barPadding)
		.attr("height", function(d) { return height - yScale(d); }).attr("fill", "rgb(0,0,128)")
		.attr("opacity", function (d) { var maxVal = Math.max.apply(null, dataset); return d/maxVal;}).on("mouseover", myMouseOverFunc)
        .on("mouseout", myMouseOutFunc).on("mouseclick", myMouseClick);
			
			
		svg.selectAll("text")  // select all text elements
		.data(dataset)     // bind data to the DOM
		.enter()           // create the placeholders and return them
		.append("text")    // fill placeholders with 'text' elements
		.text(function(d) {  //set text value to the data values ..as text
			return d;
		})
		.attr("text-anchor", "middle") //center align the labels
		.attr("x", function(d, i) {    // position the text just as positioned the bars + 1/2 barwidth -  padding
			return i * ((width-30) / dataset.length) + (width / dataset.length - barPadding) / 2 + 30;
		})
		.attr("y", function(d) {       // Set y same as we computed y for rects, except, slide down 14 pixels
			return yScale(d) + 40;     //(d * 4) + 14;
		})
		.attr("font-family", "sans-serif") //Choose font family, size, and fill
		.attr("font-size", "11px")
		.attr("fill", "red");
		
		var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left")
            .ticks(5);
		var xAxis = d3.svg.axis()
			.orient("bottom")
			.ticks(0);

        svg.append("g").attr("class", "axis").call(yAxis).attr("y", height).attr("transform", "translate(30,0)")
		svg.append("g").attr("class", "axis").call(xAxis).attr("x", width).attr("transform", "translate(40,300)")
		

		chart.w = function(value) {
			if (!arguments.length) return width; 
			width = value;  
			return chart; 
		};

		chart.h = function(value) {
			if (!arguments.length) return height;
			height = value;
			return chart;
		};

	}
	return chart;	
		 
}

function makeChart(){
	var data = [30, 20, 34, 24, 40];
	var test = barChart(data);
	test();
}