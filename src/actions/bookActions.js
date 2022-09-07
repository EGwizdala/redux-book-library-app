export const ADDBOOK = "ADDBOOK";
export const DELETEBOOK = "DELETEBOOK";
export const EDITBOOK = "EDITBOOK";


export const addBook = ({ bookAuthor, bookDescription, bookName }) => ({
    type: ADDBOOK,
    payload: {
        bookAuthor,
        bookDescription,
        bookId: Math.floor(Math.random() * 1234),
        bookName,
    }
});

export const deleteBook = bookId => ({
    type: DELETEBOOK,
    payload: {
        bookId,
    }
});

export const editBook = ({ bookAuthor, bookDescription, bookId, bookName }) => ({
    type: EDITBOOK,
    payload: {
        bookAuthor,
        bookDescription,
        bookId,
        bookName,
    }
})

// export const ADD-BOOK = 'ADD-BOOK';
// export const DELETE = 'DELETE';
// export const EDIT = 'EDIT';

// export const ADD-BOOKbookName = ({bookAuthor, bookDescription, bookName}) => ({
//   type: ADD-BOOK,
//   payload: {
//     bookAuthor,
//     bookDescription,
//     bookId: Math.floor(Math.random() * 1234),
//     bookName,
//   }
// });

// export const deletebookName = bookId => ({
//   type: DELETE,
//   payload: {
//     bookId,
//   }
// });

// export const editbookName = ({bookAuthor, bookDescription, bookId, bookName}) => ({
//   type: EDIT,
//   payload: {
//     bookAuthor,
//     bookDescription,
//     bookId,
//     bookName,
//   }
// });
