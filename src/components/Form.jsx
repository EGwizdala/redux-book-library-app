import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { addRate, editRate } from '../actions/appActions';

const Form = ({ author = "", callback, comment = "", id, rate = 0}) => {

    const [authorInput, setAuthorInput] = useState(author);
    const [rateInput, setRateInput] = useState(rate);
    const [commentInput, setCommentInput] = useState(comment);

    const dispatch  = useDispatch()

    const handleChangeAuthor = e => setAuthorInput(e.target.value);
    const handleChangeRate = e => setRateInput(e.target.value);
    const handleChangeComment = e => setCommentInput(e.target.value);
    const handleOnSubmit = e => {
        e.preventDefault();

        if (!authorInput.length) {
            return;
        }

        const rateObject = {
            author: authorInput,
            comment: commentInput,
            id,
            rate: Number(rateInput),
        };

        console.log(rateObject)

        id ? dispatch(editRate(rateObject)) : dispatch(addRate(rateObject));
        
        if (id) {
            callback()
        }

        setAuthorInput("");
        setRateInput("");
        setCommentInput("")
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
                    Ocena
                    <input onChange={handleChangeRate} type="number" value={rateInput} />
                </label>
            </div>
            <div>
                <label>
                    Komentarz:
                    <input onChange={handleChangeComment} type="text" value={commentInput} />
                </label>
            </div>
            <button type="submit">
                {id ? 'Edycja oceny' : 'Dodaj ocenę'}
            </button>
        </form>
    )
};

export default Form;






// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

// import { addRate, editRate } from './actions/appActions';

// const Form = ({
//   author = '',
//   callback,
//   comment = '',
//   id,
//   rate = 0,
// }) => {
//   const [authorInput, setAuthorInput] = useState(author);
//   const [rateInput, setRateInput] = useState(rate);
//   const [commentInput, setCommentInput] = useState(comment);

//   const dispatch = useDispatch();

//   const handleChangeAuthor = event =>
//     setAuthorInput(event.target.value);

//   const handleChangeRate = event =>
//     setRateInput(event.target.value);

//   const handleCommentChange = event =>
//     setCommentInput(event.target.value);

//   const handleOnSubmit = event => {
//     event.preventDefault();

//     const rateObject = {
//       author: authorInput,
//       comment: commentInput,
//       id,
//       rate: Number(rateInput),
//     };

//     id 
//       ? dispatch(editRate(rateObject))
//       : dispatch(addRate(rateObject));

//     if (id) {
//       callback();
//     }
//   }

//   return (
//     <form onSubmit={handleOnSubmit}>
//       <div>
//         <label>
//           Autor:
//           <input
//             onChange={handleChangeAuthor}
//             type="text"
//             value={authorInput} 
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           ocena:
//           <input
//             onChange={handleChangeRate}
//             type="number"
//             value={rateInput} 
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Komentarz:
//           <input
//             onChange={handleCommentChange}
//             type="text"
//             value={commentInput} 
//           />
//         </label>
//       </div>
//       <button type="submit">
//         {id ? 'Edycja oceny' : 'Dodaj ocenę'}
//       </button>
//     </form>
//   );
// };

// export default Form;