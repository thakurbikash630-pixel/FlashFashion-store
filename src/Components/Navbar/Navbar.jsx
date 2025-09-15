import React from "react";
import "../Navbar/Navbar.css";
import { BsShop } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleModel } from "../Store/ModelToggler/ModelTogglerSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.value);
  return (
    <div className="navbar-under">
      <div className="navbar-whole">
        <div className="navbar">
          <BsShop className="navbar-icn1" />
          <div className="navbar-flash-fsn">
            <p className="flash">Flash</p>
            <p className="fashion">Fashion</p>
          </div>
        </div>
        <div className="navbar-lst">
          <p className="navbar-p">flash@fashion.com</p>
          <IoCartOutline
            className="navbar-icn2"
            onClick={() => dispatch(toggleModel())}
          />
          <p className="navbar-no">{cartItems.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
