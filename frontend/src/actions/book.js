import { PROMISE_CALL } from 'fredux';
import { del, post } from 'app/api';

export const DELETE_BOOK = 'DELETE_BOOK';
export const deleteBook = (bookId, router) => ({
  [PROMISE_CALL]: () => del({ url: `/books/${bookId}` }).then(() => router.push('/')),
  payload: { bookId },
  type: DELETE_BOOK,
});

export const CREATE_BOOK = 'CREATE_BOOK';
export const createBook = router => ({
  [PROMISE_CALL]: () => post({ url: '/books' })
    .then((res) => {
      router.push(`/books/${res.book.id}/edit`);
      return res;
    }),
  type: CREATE_BOOK,
});
