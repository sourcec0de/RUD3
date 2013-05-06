function barChart(opts){

	// additioanlly for typeSafety you may want to check if the users
	// passed values match what they are suppoed to be
	// --------------------------------------------------------------
	// var validityTestPassed = false
	// ,	errorMessage = null;

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
	var svgHeight = opts.svgHeight || "50"
	,	svgWidth = opts.svgWidth || "500"
	;

	// if you want typeSafety then wrape everything else in the following line
	// if true it will evaluate, otherwise nothing.
	// if(validityTestPassed){}
	var svg = d3.select("body")
				.append("svg")
				.attr("width",svgWidth)
				.attr("height",svgHeight);
}
function makeChart(){
	// var data = [ 5, 10, 15, 20, 25 ];
	// Added larger dataset for testing
	// Set everything into an options object
	// so the user can set sensable defaults
	// So you can get an A++ lol
	var options = {
		// Required
		data:[25, 7, 5, 26, 11, 8, 25, 14, 23, 19,14, 11, 22, 29, 11, 13, 12, 17, 18, 10,24, 18, 25, 9, 3]
		// Optional Params
		svgHeight:"50",
		svgWidth:"500"
	};

	// Call it
	barChart(options);
}