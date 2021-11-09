import React, { useState, useEffect, useCallback, useRef } from "react";
import Helmet from "../components/Helmet";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import productData from "../assets/fake-data/products";
import category from "../assets/fake-data/category";
import CheckBox from "../components/CheckBox";
import colors from "../assets/fake-data/product-color";
import sizes from "../assets/fake-data/product-size";
import Button from "../components/Button";

const Catalog = () => {
  const initFilter = {
    category: [],
    color: [],
    size: [],
  };
  const productList = productData.getAllProducts();

  const [products, setProducts] = useState(productList);

  const [filter, setFilter] = useState(initFilter);

  const clearFilter = () => {
    console.log("click");
    setFilter(initFilter);
  };

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item.color] });
          break;
        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.size] });
          break;
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (e) => e !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;
        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.color);
          setFilter({ ...filter, color: newColor });
          break;
        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
        default:
      }
    }
  };

  const updateProduct = useCallback(() => {
    let temp = productList;
    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }
    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.color.includes(color));
        return check !== undefined;
      });
    }
    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.size.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }
    setProducts(temp);
  }, [filter, productList]);

  useEffect(() => {
    updateProduct();
  }, [updateProduct]);

  const filterRef = useRef(null);

  const handleFilter = () => {
    filterRef.current.classList.toggle("active");
  };
  return (
    <Helmet title="Sản Phẩm">
      <div className="catalog">
        <div
          className="catalog__filter__toggle"
          ref={filterRef}
          onClick={() => {
            handleFilter();
          }}
        >
          <Button size="Sm">Bộ lọc</Button>
        </div>
        <div className="catalog__filter">
          <div
            className="catalog__filter__close"
            onClick={() => {
              handleFilter();
            }}
          >
            <i className="bx bx-left-arrow-alt"></i>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              danh mục sản phẩm
            </div>
            <div className="catalog__filter__widget__content">
              {category.map((item, index) => (
                <div
                  className="catalog__filter__widget__content__item"
                  key={index}
                >
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("CATEGORY", input.checked, item)
                    }
                    checked={filter.category.includes(item.categorySlug)}
                  ></CheckBox>
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">Màu Sắc</div>
            <div className="catalog__filter__widget__content">
              {colors.map((item, index) => (
                <div
                  className="catalog__filter__widget__content__item"
                  key={index}
                >
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("COLOR", input.checked, item)
                    }
                    checked={filter.color.includes(item.color)}
                  ></CheckBox>
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">kích cỡ</div>
            <div className="catalog__filter__widget__content">
              {sizes.map((item, index) => (
                <div
                  className="catalog__filter__widget__content__item"
                  key={index}
                >
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("SIZE", input.checked, item)
                    }
                    checked={filter.size.includes(item.size)}
                  ></CheckBox>
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__content">
              <Button size="Sm" icon="" onclick={clearFilter}>
                Xóa bộ lọc
              </Button>
            </div>
          </div>
        </div>
        <div className="catalog__content">
          <Grid col={3} mdCol={2} smCol={1} gap={2}>
            {products.map((item, index) => (
              <ProductCard
                key={index}
                img1={item.image01}
                img2={item.image02}
                slug={item.slug}
                name={item.title}
                price={Number(item.price)}
              ></ProductCard>
            ))}
          </Grid>
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
