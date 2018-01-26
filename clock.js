
document.addEventListener('DOMContentLoaded', function () {

	//initialize some variables to grab the elements
	//that are to be manipulated in this project.
	//in this case, all the clock hands
	var secHand = document.getElementById('second');
	var minHand = document.getElementById('minute');
	var hourHand = document.getElementById('hour');

	//write some iterators / functions that give the updated degrees
	//for each clock hand for real time

	var timer = new Date;
	
	var currentSec = timer.getSeconds();
	var currentMin = timer.getMinutes();
	var currentHour = timer.getHours();

	var secToDegrees = function(seconds) {
		secDegrees = (seconds / 360) * 360;
		return secDegrees;
	}

	var minToDegrees = function(minutes) {
		minDegrees = (minutes / 60) * 360;
		return minDegrees;
	}

	var hoursToDegrees = function(hours) {
		hourDegrees = (hours / 12) * 360;
		return hourDegrees;
	}

	var myInterval = setInterval(function () {
		secHand.style.transform = "rotate(" + secToDegrees(currentSec) +  "deg)";
		minHand.style.transform = "rotate(" + minToDegrees(currentMin) + "deg)";
		hourHand.style.transform = "rotate(" + hoursToDegrees(currentHour) + "deg)"; 
		console.log("TICK");
	}, 1000);


	// minHand.style.transform = "rotate(" + minToDegrees(currentMin) + "deg)";
	// hourHand.style.transform = "rotate(" + hoursToDegrees(currentHour) + "deg)"; 

});