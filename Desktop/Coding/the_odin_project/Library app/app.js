let myLibrary = [];

// targeted elements
const list = document.getElementById("book-list");
const submission = document.getElementById("submit");
const addBookBtn = document.getElementById("add-book");
const inputContainer = document.getElementById("inputContainer");
const deleteBook = document.getElementsByClassName("delete-book");

// displaying submmision form by clicking Add Book
let displayForm = (e) => {
	e.preventDefault();
	inputContainer.style.display = "block";
};

addBookBtn.addEventListener("click", displayForm);

// Deletetion of book entry
let deleteBookEntry = (e) => {
	e.preventDefault();

	let titleTarget = e.target.parentElement.parentElement.childNodes[0];

	// removing item from my library array and updating locale Storage
	for (i = 0; i < myLibrary.length; i++) {
		if (myLibrary[i].title === titleTarget.innerHTML) {
			myLibrary.splice(i, 1);
			removeLocaleStorage();
			setLocaleStorage(myLibrary);
		}
	}

	let target = e.target.parentElement.parentElement;
	target.remove();
};

// adding event listeners
let addDeletionEventListener = () => {
	for (var i = 0; i < deleteBook.length; i++) {
		deleteBook[i].addEventListener("click", deleteBookEntry);
	}
};

// adding event listeners for current stock
addDeletionEventListener();

// Constructor for new Books
function Book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
}

//  adding book to library
function addBookToLibrary(Book) {
	myLibrary.push(Book);

	createChildListNode(Book);

	// setLocaleStorage(Book);
	setLocaleStorage(myLibrary);
}

// creating child node

let createChildListNode = (Book) => {
	let newBook = document.createElement("li");
	newBook.setAttribute("class", "book-item");
	newBook.innerHTML = `<h4 class='title'>${Book.title}</h4>
	 		<p>Author: ${Book.author}</p>
	 		<p>Pages: ${Book.pages}</p>
	 		<div>
	 			<label for="haveRead">Have read?</label>
	 			<input type="checkbox" name="haveRead" id="read" checked>
	 			<input class='btn delete-book' type="button" value="Delete">
			</div>`;

	list.appendChild(newBook);
	addDeletionEventListener();
};

// log submission function
let logSubmit = (e) => {
	e.preventDefault();
	let title = e.target[0].value;
	let author = e.target[1].value;
	let pages = e.target[2].value;

	let newBook = new Book(title, author, pages);
	addBookToLibrary(newBook);

	submission.reset();
};

// form submission
submission.addEventListener("submit", logSubmit);

// send to localeStorage
let setLocaleStorage = (items) => {
	let myObj_serialized = JSON.stringify(items);

	localStorage.setItem("Books", myObj_serialized);
};

// Removing Locale Storage
let removeLocaleStorage = () => {
	localStorage.removeItem("Books");
};

// check locale storage
let checkingForLocaleStorage = () => {
	let myObj_deserialized = JSON.parse(localStorage.getItem("Books"));

	for (i = 0; i < myObj_deserialized.length; i++) {
		createChildListNode(myObj_deserialized[i]);
		myLibrary.push(myObj_deserialized[i]);
	}
};
if (localStorage.length > 0) {
	checkingForLocaleStorage();
}
