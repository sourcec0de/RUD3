function barChart(opts){

	// additioanlly for typeSafety you may want to check if the users
	// passed values match what they are suppoed to be
	// --------------------------------------------------------------
	// var validityTestPassed = false
	// ,	errorMessage = null;
	// NOTE* THIS ONLY WORKS IF CHECKING FOR ALL NUMBER VALUES OR OBJECTS
	// adapt to test for strings
	// for(var key in opts){
	// 	var type = typeof parseInt(opts[key]);
	// 	if(type != "number" || type != "object"){
	// 		errorMessage = "One of more Data Attrs was not an object or string containing a number";
	// 		return errorMessage;
	// 	}
	// }

	// Here we will set conditional defaints
	// if opts.svgHeight is not provided it will return undefined
	// and will default to the OR value
	var svgWidth = opts.svgWidth || 500
	,	svgHeight = opts.svgHeight || 100
	,	svgPadding = opts.svgPadding || 20
	,	barPadding = opts.barPadding || 1
	,	fontFamily = opts.fontFamily || "sans-serif"
	,	fontSize = opts.fontSize || "11px"
	,	fontColor = opts.fontColor || "white"
	,	dataset = opts.data || opts.dataset // This is a required value. Allows a data, or dataset attr
	,	rtnD = function(d) {return d;}
	;


	//Create scale functions
	var xScale = d3.scale.ordinal()
					.domain(d3.range(dataset.length))
					.rangeRoundBands([0, svgWidth], 0.05);

	var yScale = d3.scale.linear()
					.domain([0, d3.max(dataset)])
					.range([0, svgHeight]);

	//Define X axis
	var xAxis = d3.svg.axis()
				  .scale(xScale)
				  .orient("bottom")
				  .ticks(5);

	//Define Y axis
	var yAxis = d3.svg.axis()
				  .scale(yScale)
				  .orient("left")
				  .ticks(5);

	

	// if you want typeSafety then wrape everything else in the following line
	// if true it will evaluate, otherwise nothing.
	// if(validityTestPassed){}
	var svg = d3.select("body")
				.append("svg")
				.attr("width",svgWidth)
				.attr("height",svgHeight);

	// DRAW BARS 
	svg.selectAll("rect")
	   .data(dataset)
	   .enter()
	   .append("rect")
	   	// We call all the ATTRS in one object to make things a little cleaner
	   .attr({
			// this will ensure that your bars are evenly
			// spaced no matter what dataset you use or the size of the SVG
			x: function(d,i) { return xScale(i) },
			// We want our bars to grow from bottom to top
			// SVG spcifies coordinates so we need to invert
			// where the y axis is to make the bars start at the bottom.
			y: function(d) { return svgHeight - yScale(d); },
			width: xScale.rangeBand(),
			height: function(d) {return yScale(d);},	// this will scale height
			fill: function(d) {return "rgb(0, 0, " + (d * 10) + ")";}	// return color, or RBG
		});


	// LABELS
	svg.selectAll("text")
	   .data(dataset)
	   .enter()
	   .append("text")
	   .text(function(d){return d;})
	   .attr({
	   	"text-anchor":"middle",		// anchor the text in the middle of the bar
	   	// These values are the same as the bar chart x,y
	   	// Same function as bar x + itself to move text inside bar
	   	x: function(d, i) {
	   		return xScale(i) + xScale.rangeBand() / 2;
	   	},
	   	y: function(d) {return svgHeight - yScale(d) + 14;},	// Same function as bar y +14 to move text inside bar
	   	// Set font fam, size, and text fill color of text
		"font-family": fontFamily,
		"font-size": fontSize,
		fill: fontColor
	   })


	//Create X axis
	svg.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(0," + (svgHeight - svgPadding) + ")")
		.call(xAxis);

	//Create Y axis
	svg.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(" + svgPadding + ",0)")
		.call(yAxis);
}

function makeChart(){
	// Set everything into an options object
	// so the user can set sensable defaults
	// So you can get an A++ lol
	var options = {
		// Required
		data:[25, 7, 5, 26, 11, 8, 25, 14, 23, 19,14, 11, 22, 25, 11, 13, 12, 17, 18, 10,24, 18, 25, 9, 30],
		// Optional Params
		svgWidth:600,
		svgHeight:250,
		svgPadding:20,
		barPadding:1,
		fontFamily:"sans-serif",
		fontSize:"11px",
		fontColor:"white"
	};

	// Call it
	barChart(options);
}