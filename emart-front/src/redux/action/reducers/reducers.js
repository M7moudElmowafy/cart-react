// import handleCart from "./handleCart";
// import { combineReducers } from "redux";


// const rootReducer = combineReducers({
//     handleCart,
// })

// export default rootReducer;
import { combineReducers } from 'redux';
import handleCart from './handleCart';

const rootReducer = combineReducers({
    handleCart,
});

export default rootReducer;
