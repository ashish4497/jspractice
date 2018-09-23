var col = 20;
	var row = 20;
	var mainContainer = document.querySelector(".container");
	for(var i = 1; i <= 20; i++){
		for(var j = 1; j <= 20; j++){
		mainContainer.innerHTML += `<div class="cell" data-row = ${i} data-col = ${j}></div>`;
				
	}
}