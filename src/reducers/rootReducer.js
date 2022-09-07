import { combineReducers } from "redux";

import { appReducer } from "./appReducer";
import { bookReducer } from "./bookReducer";

export const rootReducer = combineReducers({
    rates: appReducer,
    books: bookReducer,
})


// import { combineReducers } from 'redux';

// import { appReducer } from './appReducer';

// export const rootReducer = combineReducers({
//   rates: appReducer,
// });