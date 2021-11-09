import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet";

import { useSelector } from "react-redux";

import productData from "../assets/fake-data/products";
import numberWithCommas from "../utils/numberWithCommas";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.shoppingCart.value);

  const [cartProduct, setCartProduct] = useState([]);

  const [totalProduct, setTotalProduct] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProduct(productData.getCartItemsDetails(cartItems));
    setTotalProduct(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
  }, [cartItems]);
  return (
    <Helmet title="Giỏ Hàng">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn đang có {totalProduct} sản phẩm trong giỏ hàng</p>
            <div className="cart__info__txt__price">
              <span>Thành Tiền</span>
              <span>{numberWithCommas(totalPrice)}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button>đặt hàng</Button>
            <Link to="/catalog">
              <Button>tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cartProduct.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
