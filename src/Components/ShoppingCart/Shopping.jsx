import React from "react";
import "../ShoppingCart/Shopping.css";
import { FaChevronLeft } from "react-icons/fa";
import headp from "../../assets/headp.jpeg";
import { RxCross1 } from "react-icons/rx";
import { cartSlice } from "../Store/Cart/Cartslice";

const Shopping = () => {
  return (
    <div className="shopping-whole-under">
      <div className="shopping-whole">
        <div className="shopping-navbar">
          <div className="shopping-first">
            <FaChevronLeft className="left-arrow" />
            <h1 className="shopping-h1"> Shopping Cart</h1>
          </div>
          <div className="shopping-2nd">
            <img src={headp} alt className="shopping-img" />
            <p className="shopping-2nd-p">
              Top knotch grey headphone with high quality dolby sound.
            </p>
            <h4 className="shopping-price">40$</h4>
            <RxCross1 className="cross" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
