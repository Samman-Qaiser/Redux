import { purchasereducer, selectReducer } from "./reducers";
import { setReducer } from "./reducers";
import { combineReducers } from "redux";
 const reducer=combineReducers({
    allProducts:setReducer,
    product:selectReducer,
    purchased:purchasereducer
})


  export default reducer