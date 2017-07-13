function showMessage(ageMin, ageMax) {

	var age = prompt( 'Сколько вам лет?', '');

	if (( age >= ageMin ) && ( age <= ageMax )) {
		alert('Добро пожаловать!');
	} else {
		alert('Увы, но нет!')
	}
};

showMessage(10,90);