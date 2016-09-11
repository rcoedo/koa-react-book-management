import { asyncMap } from 'src/utils';

const emptyBook = {
  title: "Unnamed",
  isbn: "",
  author: "Unnamed",
  publisher: "Unnamed",
  thumbnail: "http://www.creativedocumentsystems.com/wp-content/uploads/2011/09/Pro-Bind-Blank-Hard-cover-218x300.jpg",
  description: "No desription"
};

export async function deleteBook(model, id) {
  return model.destroy({ id });
}

export async function deleteAllBooks(model) {
  return model.destroy({});
};

export async function createBook(model, book) {
  const newBook = await model.create(book);
  await newBook.save();
  return newBook;
};

export async function createBooks(model, books) {
  return asyncMap(books, book => createBook(model, book));
};

export async function getBooks(model) {
  return model.find();
}

export async function createEmptyBook(model) {
  return createBook(model, emptyBook);
}

export async function updateBook(model, book) {
  const book = await model.find()
}
