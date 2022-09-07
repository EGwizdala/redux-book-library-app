
import { ADD } from '../actions/appActions'

export const validateAuthorMiddleware = ({dispatch}) => next => (action) => {
    console.log(action)
    if (action.type === ADD && !action.payload.author.length) {
        console.log("autor nie ma imienia i nazwiska");
        return;
    }
    next(action);
}


// import { ADD } from '../actions/appActions';

// export const validateAuthorMiddleware = ({dispatch}) => next => (action) => {
//   if (action.type === ADD && !action.payload.author.length) {
//     console.warn('Autor nie ma imienia i nazwiska');
//     return;
//   }

//   next(action);
// };