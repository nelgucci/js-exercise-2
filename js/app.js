

var userSubmit = document.querySelector('#user-submit');

// 	var userInput = document.querySelector('#user-input');
// 	var toDoList = document.querySelector('#to-do-list');
	


// function myFunction() {
//     var newItem = document.createElement("LI");
//     var textnode = document.createTextNode("userInput");
//     newItem.appendChild(textnode);

//     var list = document.getElementById("toDoList");
//     list.insertBefore(newItem, list.childNodes[0]);
// }

function addToDo(event){
	event.preventDefault();
	// console.log(event);
	//---------------------------------------------
	// var myNodelist = document.getElementsByTagName("LI");
	// var i;
	// for (i = 0; i < myNodelist.length; i++) {
 //  		var span = document.createElement("#user-submit");
 //  		var txt = document.createTextNode("\u00D7");
 //  		span.className = "close";
 //  		span.appendChild(txt);
 //  		myNodelist[i].appendChild(span);
	// }


	//----------------------------------------------

	var userInput = document.querySelector('#user-input');
	var toDoList = document.querySelector('#to-do-list');

	// console.log(userInput.value);
	// console.log(toDoList);

	// var newItem = document.createElement("LI"); 
	// var textnode = document.createTextNode(userInput.value);
	// newItem.appendChild(textnode); 
	// var list = document.getElementById("to-do-list");

	if(userInput.value === ''){
		return false; //return stops executing other codes underneath
	}

	

toDoList.innerHTML = '<li>' + userInput.value + '<span class ="close">' +  "\u00D7" + '</span>' + '</li>' + toDoList.innerHTML;
	//toDoList.innerHTML = '<li>' + userInput.value +  "\u00D7" + '</li>' + toDoList.innerHTML;

	userInput.value = '';


//----------------------------------------------------
	var close = document.getElementsByClassName("close");
}



userSubmit.addEventListener('click', addToDo, false);

