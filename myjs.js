let i = 0;

let timer = setInterval(function(){

let elem = document.getElementById('gifka');

left = elem.offsetLeft;

i++;

if (i < 50) {

	console.log(i+1);

	elem.style.left = left + 20 + 'px';
} else{
	claerInterval(timer);
}
	 
}, 200);