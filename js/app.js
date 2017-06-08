var userSubmit = document.querySelector('#user-submit');

function addToDo(event){
	event.preventDefault();
	// console.log(event);
	var userInput = document.querySelector('#user-input');
	var toDoList = document.querySelector('#to-do-list');
	// console.log(userInput.value);
	// console.log(toDoList);
	if(userInput.value === ''){
		return false; //return stops executing other codes underneath
	}

	toDoList.innerHTML += '<li>' + userInput.value + '</li>';

	userInput.value = '';

}

userSubmit.addEventListener('click', addToDo, false);

