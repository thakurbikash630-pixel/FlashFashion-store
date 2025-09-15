import React, { useState } from "react";
import "../HeroSection/hero.css";
import hd from "../../assets/hp.png";
import Shopping from "../ShoppingCart/Shopping";
import { useSelector } from "react-redux";

const Hero = () => {
  const showCartModal = useSelector((state) => state.modelTogger.value);
  console.log(showCartModal);

  return (
    <div className="hero-whole">
      <img className="hd-img" src={hd} alt=""></img>
      <div className="hero1st">
        <h1 className="heroh1">Flash Fashion Store</h1>
      </div>
      <div className="hero-down">
        <ul className="hero-ul">
          <li className="hero-li1">All</li>
          <li className="hero-li2">Clothes</li>
          <li className="hero-li3">Electronics</li>
          <li className="hero-li4">Furniture</li>
          <li className="hero-li5">Shoes</li>
          <li className="hero-li6">Others</li>
        </ul>

        {showCartModal == true ? <Shopping /> : null}
      </div>
    </div>
  );
};

export default Hero;
