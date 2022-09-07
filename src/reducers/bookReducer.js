import {
  ADDBOOK, EDITBOOK, DELETEBOOK
} from '../actions/bookActions';

export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADDBOOK: {
      console.log(action.payload)
      return [ ...state, action.payload];
    }
    case EDITBOOK:
      return state.map(currentStateElement => {
        if (currentStateElement.bookId !== action.payload.bookId) {
          return currentStateElement;
        }

        const { author, comment, title } = action.payload;  

        return ({
          author,
          comment,
          bookId: currentStateElement.bookId,
          title,
        });
      });
    case DELETEBOOK:
      return state.filter(currentStateElement => currentStateElement.bookId !== action.payload.bookId);
    
    default:
      console.warn(`Nie mamy akcji typu: ${action.type}`);
      return state;
  }
}








// import {
//   ADD, EDIT, DELETE
// } from '../actions/appActions';

// export const appReducer = (state = [], action) => {
//   console.log('Będziemy tworzyć nowy stan aplikacji :)')
//   switch (action.type) {
//     case ADD:
//       return [ ...state, action.payload];
//     case EDIT:
//       return state.map(currentStateElement => {
//         if (currentStateElement.id !== action.payload.id) {
//           return currentStateElement;
//         }

//         const { author, comment, rate } = action.payload;  

//         return ({
//           author,
//           comment,
//           id: currentStateElement.id,
//           rate,
//         });
//       });
//     case DELETE:
//       return state.filter(currentStateElement => currentStateElement.id !== action.payload.id);
    
//     default:
//       console.warn(`Nie mamy akcji typu: ${action.type}`);
//       return state;
//   }
// }