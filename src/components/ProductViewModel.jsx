import React, { useEffect, useState } from "react";
import productData from "../assets/fake-data/products";
import ProductView from "./ProductView";
import Button from "./Button";
import { remove } from "../redux/product-modal/productModalSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductViewModel = () => {
  const productSlug = useSelector((state) => state.productModal.value);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    setProduct(productData.getProductSlug(productSlug));
  }, [productSlug]);
  return (
    <div
      className={`product-view__model ${
        product === undefined ? "" : "active"
      } `}
    >
      <div className="product-view__model__content">
        <ProductView product={product}></ProductView>
        <div className="product-view__model__content__close">
          <Button
            size="Sm"
            onclick={() => {
              dispatch(remove());
            }}
          >
            Đóng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModel;
