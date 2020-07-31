//Book Constructor

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
//UI constructor
function UI() {}
//Add Book to List
UI.prototype.addBookToList = function (book) {
  //new function in prototype
  const list = document.getElementById("book-list");
  //create a tr element
  const row = document.createElement("tr");
  //insert cols
  row.innerHTML = `
  <td>${book.title}</td>                 
  <td>${book.author}</td>                 
  <td>${book.isbn}</td>           
  <td><a href='#' class='delete'>X</a></td>                       
    `; //<tr><tr/> bhetore arki
  list.appendChild(row);
};
//Clear fields
UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

//Event Listeners
document.getElementById("book-form").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value, //input.value
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;
  console.log(typeof title, author, isbn);

  const book = new Book(title, author, isbn); //new object
  const ui = new UI();
  //Add book to list
  ui.addBookToList(book); //jeta amra pore prototype e add korbo
  //we passed in the object to the other side
  ui.clearFields();
  e.preventDefault();
});
