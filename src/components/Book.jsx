import React, {useState} from "react";
import BookComments from "./BookComments"
import BookForm from "./BookForm"

const Book = ({ bookName, bookAuthor, bookDescription, bookId }) => {
    const [isVisibleForm, setIsVisibleForm] = useState(false);

    const toggleElements = () => setIsVisibleForm (prev => !prev)
    
    const formOrButtonElement = isVisibleForm ? (
        <BookForm callback={toggleElements} bookAuthor={bookAuthor} bookDescription={bookDescription} bookId={bookId} bookName={bookName} />
    ) : (
        <button onClick = {toggleElements}>Edytuj książkę</button>

    );


    console.log(bookName, bookAuthor, bookDescription, bookId)
    return (
        <div>
            <div>Nazwa ksiąki: {bookName}</div>
            <div>Autor ksiąki: {bookAuthor}</div>
            <div>Opis ksiąki: {bookDescription}</div>
            {formOrButtonElement}
            <BookComments />
        </div>
    )
}

export default Book