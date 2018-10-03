var button = document.querySelector(".btn");
button.addEventListener("click",booksearch);
var findbook = document.querySelector(".search-box");
var bookDetail = document.querySelector(".book_list");

function booksearch(){
	var value = findbook.value;
	var link = `https://www.googleapis.com/books/v1/volumes?q=${value}`;
	fetch(link).then(response => response.json()).then(
		data =>{
			bookList = data;
		displayBooks();
	});
findbook.value ="";
}
function displayBooks() {
	var newItems = bookList.items.map(book => {
		return (
			`<li><img src=${book.volumeInfo.imageLinks.smallThumbnail}" class="bookimage">
			<div class="title">Title - ${book.volumeInfo.title}</div>
			<div class="authors">Author - ${book.volumeInfo.authors}</div>
			<div class="page">Pages - ${book.volumeInfo.pageCount}</div>
			</li>
			`
		);
	});
	bookDetail.innerHTML = newItems.join("");
}
