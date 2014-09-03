$(document).ready( function() {
	
//TOP ANSWERERS FEATURE
/*
	$('.inspiration-getter').submit( function(event){
		$(".results").empty();
		$('.userAnswers').empty();
		event.preventDefault();
		$.ajax({
			type: "GET",
			url: "https://coolrom-api.herokuapp.com/v1/platforms/" ,
			//url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=cruise&key=AIzaSyAwY36uWet2LCwU9bSEnZTnBiTw8eWVPMo",
			//url: "http://api.stackexchange.com/2.2/tags/html/top-answerers/all_time?site=stackoverflow",
			dataType: "jsonp",
			success: function(jsonp) {
				console.log("Online");
			},
		});
		console.log("How bout this?");
		console.log(jsonp[1]);
	});
});
*/

/*
//TOP ANSWERERS FEATURE
	$('.inspiration-getter').submit( function(event){
		$(".results").empty();
		$('.userAnswers').empty();
		$.ajax({
			type: "GET",
			url: "https://coolrom-api.herokuapp.com/v1/platforms/" ,
			dataType: "jsonp",
			success: function(){
				console.log("work damnit");
			},
		});
	});
});
*/


//TOP ANSWERERS FEATURE
	$('.inspiration-getter').submit( function(event){
		$.ajax({
			url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=cruise",
			type: "GET",
			crossDomain: true,
			dataType: "jsonp",
			success: function(jsonp){
				console.log("Success");
			},
		});
	});
});


