import {  configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{item:[]},
    reducers:{
        addItem(state,action){
            // console.log(action)
            state.item.push({...action.payload,id:Math.random()})
        },
        deleteItem(state,action){
            const remove=state.item.filter((item)=>item.id!==action.payload.id)
            state.item=remove
        },
        editItem(state,action){
            
            const edit = state.item.map((item) => 
              item.id === action.payload.id )
              state.item=edit
          }
        
    }
})
// console.log(todoSlice)
const store=configureStore({
    reducer:todoSlice.reducer
})
export default store;
export const todoAction=todoSlice.actions