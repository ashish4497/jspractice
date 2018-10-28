var lists = document.querySelectorAll("li");

var dragValue;
var dropValue;


lists.forEach(list => {
  list.addEventListener('dragstart',dragStart);
  list.addEventListener('dragover',dragOver);
  list.addEventListener('drop',dragEnd);
});


function dragStart(e) {
	dragValue = this;
	console.log(dragValue);
	e.dataTransfer.dropEffect = "move";
   
}

function dragOver(e) {
	e.preventDefault();
	e.dataTransfer.dropEffect = "move";
}

function dragEnd(e) {
	e.preventDefault();
	if(dragValue !== this) {
	dropValue = this.innerHTML;
	this.innerHTML = dragValue.innerHTML;
	dragValue.innerHTML = dropValue;
  }
}
