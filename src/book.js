function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return character;
};

function saveReview(review, array) {
  var reviews = array;
  if (reviews.includes(review) === false) {
    reviews.push(review);
  }
};

function calculatePageCount(bookTitle) {
  var letterCount = bookTitle.length;
  return letterCount * 20;
}

function writeBook(bookTitle, bookCharacter, bookGenre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: bookGenre
  }
  return book;
};

function editBook(book) {
  book.pageCount = book.pageCount * 0.75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}

