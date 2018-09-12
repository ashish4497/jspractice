var item=document.getElementById('btn');
var lists = document.getElementById("lists");
var todoLists = [];
function addItem(){
	var newTodoText = document.getElementById('.addtodo');
	let	item = newTodoText.value;
	// var newTodo = {name: newTodoText,done:false};
	todoLists.push(newTodo);
	displayItem(newTodoText,lists);                                                                                      
	console.log(todoLists);
	}
// function displayItems () {
//   elm.innerHTML =todoLists.map((item, i) => {
//     return (
//       `<li>
//           <span class="name" data-id=${i}>${newTodoText}</span>
//         </li>`
//         )

//      }


var addbutton =document.getElementById('btn');
addbutton.addEventListener('click',addItem);
 // displayItems();

