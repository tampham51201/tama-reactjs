import React from "react";
import PropTypes from "prop-types";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import numberWithCommas from "../utils/numberWithCommas";
import { set } from "../redux/product-modal/productModalSlice";
import { useDispatch } from "react-redux";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <Link to={`/catalog/${props.slug}`}>
        <div className="product-card__img">
          <img src={props.img1} alt="" />
          <img src={props.img2} alt="" />
        </div>
        <h3 className="product-card__name">{props.name}</h3>
        <div className="product-card__price">
          {numberWithCommas(props.price)}
          <span className="product-card__price__old">
            <del> {numberWithCommas(399999)}</del>
          </span>
        </div>
      </Link>
      <Button
        backgroundColor="blue"
        animate
        icon="bx bx-cart"
        size="Sm"
        onclick={() => {
          dispatch(set(props.slug));
        }}
      >
        Chọn Mua
      </Button>
    </div>
  );
};

ProductCard.propTypes = {
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCard;
