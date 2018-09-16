var booksDetail = JSON.parse(localStorage.getItem('itemdetail')) || [
"The Lord of the Rings Trilogy",
"A Game of Thrones",
"To Kill a Mockingbird"
];

var addItem =document.querySelector('#add-books');
var ulItem = document.querySelector('ul');var addItem =document.querySelector('#add-books');
var searchBooks = document.querySelector('#search-books input');

function addBookValue (){
	var bookName = addItem.value;
	booksDetail.push(bookName);
	displayBook(booksDetail);
	addItem.value = "";
	localStorage.setItem('itemdetail', JSON.stringify(booksDetail));
}

function displayBook(books = []){
	ulItem.innerHTML = books.map((item, i) => {
	return (
		`<li>
	    	<span class="name" data-id=${i}>${item}</span>
	    	<span class="delete" data-id=${i}>delete</span>
	    </li>`)
	})
	.join(" ");
}

function hideAll(){
	displayBook([]);
}

function deleteBook(e){
	if (e.target.className !== 'delete') {
		return;
	}
	var delId = e.target.dataset.id;
	booksDetail.splice(delId, 1);
	displayBook(booksDetail)
	localStorage.setItem('itemdetail',JSON.stringify(booksDetail))
}

function searchBooksItem(e){
	var item = e.target.value.toLowerCase();
	var filteredArray = booksDetail.filter(book => book.toLowerCase().includes(item));
	displayBook(filteredArray);
}

var addButton =document.querySelector('#add-btn')
addButton.addEventListener('click', addBookValue);
ulItem.addEventListener('click', deleteBook);
var hideBooks = document.getElementById('hide').addEventListener('click', hideAll)
searchBooks.addEventListener('keydown', searchBooksItem);
displayBook(booksDetail);