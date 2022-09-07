import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { addBook, editBook } from '../actions/bookActions';

const BookForm = ({ bookAuthor = "", callback, bookDescription = "", bookId, bookName=""}) => {

    const [authorInput, setAuthorInput] = useState(bookAuthor);
    const [titleInput, setTitleInput] = useState(bookName);
    const [descriptionInput, setDescriptionInput] = useState(bookDescription);

    const dispatch  = useDispatch()

    const handleChangeAuthor = e => setAuthorInput(e.target.value);
    const handleChangeTitle = e => setTitleInput(e.target.value);
    const handleChangedescription = e => setDescriptionInput(e.target.value);
    const handleOnSubmit = e => {
        e.preventDefault();

        if (!authorInput.length) {
            return;
        }

        const bookObject = {
            bookAuthor: authorInput,
            bookDescription: descriptionInput,
            bookId,
            bookName: titleInput,
        };

        console.log(bookObject)

        bookId ? dispatch(editBook(bookObject)) : dispatch(addBook(bookObject));
        
        if ( bookId) {
            callback()
        }

        setTitleInput("");
        setAuthorInput("")
        setDescriptionInput("")
    }
    
    return (
        <form onSubmit={handleOnSubmit}>
            <div>
                <label>
                    Author:
                    <input onChange={handleChangeAuthor} type="text" value={authorInput} />
                </label>
            </div>
            <div>
                <label>
                    Tytuł:
                    <input onChange={handleChangeTitle} type="text" value={titleInput} />
                </label>
            </div>
            <div>
                <label>
                    Opis:
                    <input onChange={handleChangedescription} type="text" value={descriptionInput} />
                </label>
            </div>
            <button type="submit">
                { bookId ? 'Edycja ksiazki' : 'Dodaj ksiazkę'}
            </button>
        </form>
    )
};

export default BookForm;