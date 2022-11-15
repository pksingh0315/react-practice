//import React, { useState } from "react";
import Header from './Header'
import { useSelector,useDispatch } from "react-redux";
import addItem from "../redux/action";
const Home = () => {
    // const [data,setData]=useState('')
    const selector=useSelector((state)=>
        //console.log(state)
        state.addReducers.length
        //setData(state.addReducers.length)
    )
console.log(selector)
    const dispatch=useDispatch()
    const addItemHandler=()=>{
        dispatch(addItem({pice: 1000, name: 'i phone 11'}))
        console.log("add Product")
    }
  return (
    <>
    <Header count={selector}></Header>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/I/41731yeqHDL.jpg"
            alt="Error"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button onClick={addItemHandler}> 
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};
export default Home;
