import '../css/books.scss';


var button = document.querySelector("#btn");
var searchinput = document.querySelector(".find-book")
var booksdata;

//function to dispaly book list
function displaybook() {
    var books = document.querySelector(".book-list");
    books.innerHTML = `<li>
    <h1>${booksdata.volumeInfo.title}</h1>
    </li>`
}
displaybook()


//function to searching books

function searchbooks(e) {
    e.preventDefault();
    console.log(e)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=search+terms${searchinput.value}`)
        .then((res) => res.json())
        .then((data) => {
            booksdata = data;
            console.log(booksdata)
        })
}

button.addEventListener('click', searchbooks)