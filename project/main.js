var addButton = document.querySelector(".addicon");
var ulitem = document.querySelector(".trellolist");
var getValue =document.querySelector(".trellolist");

var boards =[];
 class Board {
    constructor (name){
    this.name = name;
    }
    addBoard() {
        let id;
        if(boards.length == 0){
            id = 0;
        }
    else{}    
    }
 }





//Function to create a board

function createBoard() {
    let board = document.querySelector(".board1");
    ulitem.innerHTML = `<li class= "addBoarddName">
             <input type="text" name ="board" placeholder="Add new board" class ="inputbox">
            <input type="submit" value="Create board" class = "btn"></li>`
}
//function to newboard

function listItems(e) {
    console.log(e)
 if(e.target.classList.contains('btn')){
    ulitem.innerHTML = `<li class= "enterListTitle">
    <input type="text" name ="board" placeholder="Enter list Title" class ="inputbox">
   <input type="submit" value="Add list" class = "deletebtn">
<span class="deleteicon">X</span> </li>`
};
}
//function to take a value
function usevalue(e){
    console.log(e)
    if(e.target.className !=='inputbox')return;
    var value = getValue.value
    boards.push(value);

}
addButton.addEventListener('click',createBoard);
ulitem.addEventListener('click',listItems);
ulitem.addEventListener('click',usevalue);