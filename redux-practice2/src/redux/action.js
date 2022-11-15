import { ADD_TO_CART } from "./Type"

const addItem=(data)=>{
    return{
        type:ADD_TO_CART,
        productData:data
    }
}
export default addItem