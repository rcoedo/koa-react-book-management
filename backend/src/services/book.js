import { asyncMap } from 'src/utils';

export async function deleteAllBooks(model) {
  return model.destroy({});
};

export async function createBook(model, book) {
  const newBook = await model.create(book);
  return newBook.save();
};

export async function createBooks(model, books) {
  return asyncMap(books, book => createBook(model, book));
};

export async function getBooks(model) {
  return model.find();
}
