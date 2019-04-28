(function (){

var dalay = 200,
	i = 0,
	startTimer = function (pixels) {

	var elem = document.getElementById('gifka'),
		left = elem.offsetLeft;

	if (i < 50) {
		console.log(i+1);

		elem.style.left = left + pixels +'px';
	} else{
		claerInterval(timer);
	}
	i++; 
};

var timer = setInterval(function(){
	startTimer(20);
}, dalay);

})();