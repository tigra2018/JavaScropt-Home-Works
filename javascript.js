
(function(){
	var email = prompt('Введите email', "test@gmail.com");
		
	var proverka = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z{2,5}]/i;	

	if (proverka.test(email) == false) {
		alert('Это не email');
	}else (alert('Это может быть email'))
})();