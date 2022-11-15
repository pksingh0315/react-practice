 import { ADD_TO_CART } from "../Type";
 const addReducers=(state=[],action)=>{
    //console.log(action)
    switch(action.type){
        case ADD_TO_CART:return [...state,{ads:action.productData}];
        default :return state
    }
 }
 export default  addReducers