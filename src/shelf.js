function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    if (book.genre === "sciFi") {
      shelf.unshift(book);
  } }
};

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      var indexOfBook = shelf.indexOf(shelf[i]);
      return shelf.splice(indexOfBook, 1); 
    }
  }
};

function listTitles(array) {
  for (var i = 0; i < array.length; i++) {
  }
};







module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};