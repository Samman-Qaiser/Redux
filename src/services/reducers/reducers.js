import { PURCHASED_PRODUCT, SELECTED_PRODUCT } from "../constants/constant";
import { SET_PRODUCT } from "../constants/constant";
import { REMOVE_SELECTED_PRODUCT } from "../constants/constant";

const initialState = {
    cardItems: []
  };
const initial={
  array:[]
}
export const setReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:

        return { ...state, cardItems: action.data };
      
    default:
      return state; 
  }
};


export const selectReducer=(state=initialState,action)=>{
    switch(action.type)
    {
     case SELECTED_PRODUCT:
         return{
             ...state,
            ...action.data
         }
         case REMOVE_SELECTED_PRODUCT:
          return {}
         default:
             return state;
    }
 }
export const purchasereducer=(state=initial,action)=>{
  switch(action.type)
  {
    case PURCHASED_PRODUCT:
     
        return {  ...state,
          array: [...state.array, action.id]}
      
    default:
             return state;
  }
}