var todoData = JSON.parse(localStorage.getItem('datainfo')) || [];
var addItem =document.querySelector('.addtodo');
var ulListItem = document.querySelector('ul');
var selectToggle =document.querySelector('.container input')
var timeHour =document.querySelector('.watch');
var tag =document.querySelector('.tagline');

//function to add new data to array
function addTodo(){
	var value =addItem.value;
	var todoObject ={name: value, done: false};
	todoData.push(todoObject);
	addItem.value = "";
	displayTodo();
	localStorage.setItem('datainfo',JSON.stringify(todoData));
}

//function to daisplay the data
function displayTodo(){
	ulListItem.innerHTML = todoData.map((value, i) => {
		return(
			`<li><label class="container">
			 <input type="checkbox" ${value.done ? "checked" : ""} data-id=${i} >${value.name} 
			 <span class ="deleteBtn" data-id=${i}> X </span > 
			</label></li>`
		)
	})
	.join("") ;  	
}
//function to delete the todoList items
function deleteTodo(e){
	if(e.target.className !== "deleteBtn") return;
	var remove = e.target.dataset.id;
	todoData.splice(remove,2);
	displayTodo();
	localStorage.setItem('datainfo',JSON.stringify(todoData));
}
//function to toggle items
function toggle(e){
	if(e.target.tagName!=="INPUT" && e.target.type!=="checkbox") return; 
	var id = e.target.dataset.id;
	todoData[id].done = !todoData[id].done;
	localStorage.setItem('datainfo',JSON.stringify(todoData));
}
//fumction to create a watch
function setTime () {
	var time = new Date();
		var second = time.getSeconds();
		var minutes = time.getMinutes();
		var hour = time.getHours();
timeHour.innerHTML = hour + ":" + minutes + ":" + second;
wish(hour);
}
//function to create a tagline
function wish(hour){
if(hour>=1 && hour<=12);
tag.innerHTML = "good Morning";
if(hour>=12 && hour<=16);
tag.innerHTML ="good AfterNoon"
if(hour>=16 && hour<=24);
tag.innerHTML ="good Evening"
}
setInterval(setTime, 1000);
displayTodo();
var button =document.getElementById('btn');
button.addEventListener('click',addTodo);
ulListItem.addEventListener('click',deleteTodo);
ulListItem.addEventListener('click',toggle)