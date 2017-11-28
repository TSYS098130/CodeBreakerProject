let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    
    if(answer.vlaue == '' || attempt.value == ''){
    	setHiddenFields();
    }
    
    if(!validateInput(input.value)) {
	return;
	}
	attempt.value++;
	
	if(getResults(input.value)) {
		setMessage('You Win! :)');
		showMessage(true);
		showReplay();
	} else if(attempt.value >= 10) {
		setMessage('You Lose! :(');
		showAnswer(false);
		showReplay();
	}else{'Incorrect, try again.');
}

function getResults(input) {
	let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
	for(i = 0; i < input.length; i++) {
		if(input.charAt(i) == answer.value.charAt(i)) {
			html += '<span class="glyphicon glyphicon-transfer"></span>';
		} else if(answe.value.indexOf(input.charAt(I)) > -1) {
			html += '<span class="glyphicon glyphicon-remove"></span>';
		} else {
			html+='<span class="glyphicon glyphicon-remove"></span>';
		}
	}
	html += '</div></div>';
	document.getElementById('results').intterHTML += HTML;
	
	if(input == answer.value) {
		return true;
	}
	return false;
}

function setHiddenFields() {
	answer.value = Math.floor(Math.random() *10000).toString();
	while(answer.value.length < 4) {
		answer.value = "0" + answer.value;
	}
	attempt.value = "0";
}

function setMessage(message) {
	document.getElementById('message').innerHTML = message;
}

function showAnswer(success) {
	let code = document.getElementByID('code');
	if(success) {
		code.className += ' success';
	}else{ 
		code.className += ' failure';
	}
	code.innterHTML = answer.value;
	}

function showReplay() {
	document.getElementByID('guessing-div').style.display = "none";
	document.getElementByID('replay-div').style.display = "block";
}

function validateInput(input) {
	if(input.length != 4) {
		setMessage('Guesses must be exactly 4 characters long.');
		return false;
	}
	return true;
}