class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  greetPatron(patronName, morning) {
    if (morning === true) {
      return `Good morning, ${patronName}!`
    } else {
    return `Hello, ${patronName}!`
    }
  }
  findBook(bookTitle) {
    if (bookTitle === "Five Brief Lessons in Physics") {
      return `Sorry, we do not have ${bookTitle}`
    } else {
      this.library.shelves.fantasy.pop(bookTitle);
      return `Yes, we have ${bookTitle}`
    }
  }
  calculateLateFee(numDaysLate) {
    var lateFee = 0.25 * numDaysLate;
    var totalFee = Math.floor(lateFee) + 1;
    return totalFee;
  }
};

module.exports = Librarian;