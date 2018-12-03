import '../css/books.scss';


var button = document.querySelector("#btn");
var searchinput = document.querySelector(".find-book")
const bookList = document.querySelector('.book-list');
var booksdata;

//function to dispaly book list
function displaybook(arr) {
	var books = document.querySelector(".book-list");
	books.innerHTML = "";
	arr.forEach((element, i) => {
		books.innerHTML += `<li data-id="${i}">
		<img src="${element.volumeInfo.imageLinks.smallThumbnail}">
		  <P> TITLE: <span> ${element.volumeInfo.title}</span></P>
		  <P> publisher:<span> ${element.volumeInfo.publisher}<span> </P>
		  <P> author:<span>${element.volumeInfo.authors}</span></P>
		  <input type="button" value="Remove Item" class="remove-list" data-id="${i}" >
		  </li>`
	});
}


//function to remove the list item
function removeBook(e)  {
	e.preventDefault();
	if(e.target.classList.contains('remove-list')) {
		let id = e.target.dataset.id;
		booksdata.items.splice(id, 1);	
		console.log(booksdata);
		displaybook(booksdata.items)
	}
}



//function to searching books

function searchbooks(e) {
	e.preventDefault();
	console.log(e)
	fetch(`https://www.googleapis.com/books/v1/volumes?q=search+terms${searchinput.value}`)
		.then((res) => res.json())
		.then((data) => {
			booksdata = data;
			console.log(booksdata);
			displaybook(booksdata.items)
		})
}

button.addEventListener('click', searchbooks);
bookList.addEventListener('click', removeBook);