import products_data from "../../assets/Products_data";
import "../Products/Products.css";
import hoody from "../../assets/hoody.jpg";
import React, { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItemstoCart } from "../Store/Cart/Cartslice";

const Product = () => {
  const dispatch = useDispatch();

  const onAddToCart = (product) => {
    dispatch(addItemstoCart(product));
  };
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    Product_Data();
  }, []);
  async function Product_Data() {
    const url = "https://api.escuelajs.co/api/v1/products";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setProductData(response);
  }

  console.log(productData);

  return (
    <div className="product-whole">
      <div className="product">
        {productData &&
          productData.map((product, index) => {
            return (
              <div className="pdt" key={index}>
                <img className="img-pp" src={product.images} alt="" />
                <h1 className="h1-p">${product.price}</h1>
                <p className="name-p">
                  {product.title}
                  <FaCartPlus
                    className="cart-a"
                    onClick={() => onAddToCart(product)}
                  />
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Product;
