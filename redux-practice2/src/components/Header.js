import React from "react";
const Header = (props) => {
    console.log(props)
  return (
    <>
      <div className="add-to-cart">
        <span className="cart-count">{props.count}</span>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="" />
      </div>
    </>
  );
};
export default Header;
