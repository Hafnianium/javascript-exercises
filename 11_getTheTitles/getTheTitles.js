const getTheTitles = function(books) {
  let bookList = []
  for (i = 0; i < (books.length); i++) {
    bookList[i] = books[i].title
  }
  return bookList
};

// Do not edit below this line
module.exports = getTheTitles;
