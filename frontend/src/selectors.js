export default function getBook(state, bookId) {
  return state.books.filter(book => book.id === bookId)[0];
}
