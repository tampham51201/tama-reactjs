import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import numberWithCommas from "../utils/numberWithCommas";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/shopping-cart/cartItemsSlice";

const ProductView = (props) => {
  let product = props.product;
  if (product === undefined)
    product = {
      image01: "",
      image02: "",
      title: "",
      price: 0,
      colors: [],
      size: [],
      description: "",
    };

  const [preview, setPreview] = useState(product.image01);

  const [descriptionToggle, setDescriptionToggle] = useState(false);

  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [quantity, setQuatity] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    setColor(undefined);
    setQuatity(1);
    setSize(undefined);
    setPreview(product.image01);
  }, [product]);
  const updateQuantity = (type) => {
    const newQuantity =
      type === "plus" ? quantity + 1 : quantity - 1 < 1 ? 1 : quantity - 1;
    setQuatity(newQuantity);
  };
  const check = () => {
    if (color === undefined) {
      alert("Vui lòng chọn màu!");
      return false;
    }
    if (size === undefined) {
      alert("Vui lòng chọn kích cỡ!");
      return false;
    }
    return true;
  };
  const addCart = () => {
    if (check()) {
      dispatch(
        addItems({
          color: color,
          size: size,
          quantity: quantity,
          slug: product.slug,
          price: product.price,
        })
      );
      alert("Đã thêm vào giỏ hàng!");
    }
  };
  const goToCart = () => {
    if (check()) {
      dispatch(
        addItems({
          color: color,
          size: size,
          quantity: quantity,
          slug: product.slug,
          price: product.price,
        })
      );
      props.history.push("/cart");
    }
  };

  return (
    <div className="product">
      <div className="product__img">
        <div className="product__img__list">
          <div className="product__img__list__item">
            <img src={product.image01} alt="" />
          </div>
          <div className="product__img__list__item">
            <img src={product.image02} alt="" />
          </div>
        </div>
        <div className="product__img__preview">
          <img src={preview} alt="" />
        </div>
        <div
          className={`product-description ${descriptionToggle ? "active" : ""}`}
        >
          <div className="product-description__title">Chi tiết sản phẩm</div>
          <div className="product-description__content">
            {product.description}
          </div>
          <div className="product-description__toggle">
            <Button
              size="Sm"
              onclick={() => {
                setDescriptionToggle(!descriptionToggle);
              }}
            >
              {descriptionToggle ? "Thu gọn" : "Xem thêm"}
            </Button>
          </div>
        </div>
      </div>
      <div className="product__info">
        <div className="product__info__item">
          <h1 className="product__info__item__name">{product.title}</h1>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__price">
            {numberWithCommas(product.price)}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Màu sắc</div>
          <div className="product__info__item__list">
            {product.colors.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${
                  color === item ? "active" : ""
                }`}
                onClick={() => {
                  setColor(item);
                }}
              >
                <div className={`circle bg-${item}`}></div>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Kích cỡ</div>
          <div className="product__info__item__list">
            {product.size.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${
                  size === item ? "active" : ""
                }`}
                onClick={() => {
                  setSize(item);
                }}
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Số lượng</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => {
                updateQuantity("minus");
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
                updateQuantity("plus");
              }}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <Button onclick={addCart}>Thêm vào giỏ</Button>
          <Button onclick={goToCart}>Mua Hàng</Button>
        </div>
      </div>
      <div
        className={`product-description mobile ${
          descriptionToggle ? "active" : ""
        }`}
      >
        <div className="product-description__title">Chi tiết sản phẩm</div>
        <div className="product-description__content">
          {product.description}
        </div>
        <div className="product-description__toggle">
          <Button
            size="Sm"
            onclick={() => {
              setDescriptionToggle(!descriptionToggle);
            }}
          >
            {descriptionToggle ? "Thu gọn" : "Xem thêm"}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object,
};

export default withRouter(ProductView);
