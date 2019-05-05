function imgclick(gifka){
let elem = document.getElementById('gifka');
let i = 0;
let timer = setInterval(function(){
left = elem.offsetLeft;
i++;
if (i < 50) {
	elem.style.left = left - 30 + 'px';
}  
}, 100);
}

function blockclick(big_Block){
let elem = document.getElementById('gifka');
let i = 0;
let timer = setInterval(function(){
left = elem.offsetLeft;
i++;
if (i < 50) {
	elem.style.left = left + 10 + 'px';
} 
}, 100);
}