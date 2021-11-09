import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import numberWithCommas from "../utils/numberWithCommas";
import { updateItems, removeItem } from "../redux/shopping-cart/cartItemsSlice";
const CartItem = (props) => {
  const dispatch1 = useDispatch();

  const [item, setItem] = useState(props.item);

  const [quantity, setQuantity] = useState(props.item.quantity);

  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);

  const updateQuantity = (type) => {
    if (type === "-") {
      dispatch1(
        updateItems({
          ...item,
          quantity: quantity - 1 === 0 ? 1 : quantity - 1,
        })
      );
    }
    if (type === "+") {
      dispatch1(
        updateItems({
          ...item,
          quantity: quantity + 1,
        })
      );
    }
  };
  const removeCartItem = () => {
    dispatch1(removeItem(item));
  };

  return (
    <div className="cart__item">
      <div className="cart__item__img">
        <img src={item.product.image01} />
      </div>
      <div className="cart__item__info">
        <div className="cart__item__info__name">
          <Link to={`/catalog/${item.slug}`}>
            {`${item.product.title} - ${item.color} - ${item.size}`}
          </Link>
        </div>
        <div className="cart__item__info__price">
          {numberWithCommas(item.product.price)}
        </div>
        <div className="cart__item__info__quantity">
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => {
                updateQuantity("-");
              }}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => {
                updateQuantity("+");
              }}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="cart__item__info__del" onClick={removeCartItem}>
          <i className="bx bx-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
