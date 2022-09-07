import React from 'react';
import Book from './Book';
import { useSelector } from 'react-redux';

const BookList = () => {
  const books = useSelector(store => store.books)
  const bookList = books?.map(book => (
        <Book key={book.bookId} {...book}/>
  ));
    
  console.log(books)

  return (
    <ul>
      {bookList}
    </ul>
  )
}

export default BookList