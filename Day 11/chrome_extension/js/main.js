var item=document.getElementById('btn');
var lists = document.getElementById("lists");
var todoLists = [];
function addItem(){
	var newTodoText = document.getElementById('addtodo').value;
	var newTodo = {name: newTodoText,done:false};
	todoLists.push(newTodo);
	displayItem(newTodoText,lists);                                                                                      
	console.log(todoLists);
}
var addbutton =document.getElementById('btn');
addbutton.addEventListener('click',addItem);