import { PURCHASED_PRODUCT, SELECTED_PRODUCT } from "../constants/constant";
import { REMOVE_SELECTED_PRODUCT } from "../constants/constant";
import { SET_PRODUCT } from "../constants/constant";
export const setproducts=(data)=>{
    return{
        type:SET_PRODUCT,
        data: data
    }

}
export const selectedproduct=(data)=>{
    return{
        type:SELECTED_PRODUCT,
        data:data
    }
  
}
export const removeproduct=()=>{
    return{
        type:REMOVE_SELECTED_PRODUCT
    }
  
}
export const purchaseproduct=(item)=>{
    return{
        type:PURCHASED_PRODUCT,
        id:item
    }
}