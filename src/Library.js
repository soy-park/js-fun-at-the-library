function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };
};

function addBook(object1, object2) {
  object1.shelves[object2.genre].push(object2);
};

function checkoutBook(name, title, genre) {
  if (name.shelves[genre].length > 0) {
    name.shelves[genre].pop();
    return `You have now checked out ${title} from the ${name.name}`
  } else {
    return `Sorry, there are currently no copies of ${title} available at the ${name.name}`
  }
};


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};