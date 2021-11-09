import React from "react";
import productData from "../assets/fake-data/products";
import Helmet from "../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";

const Product = (props) => {
  const product = productData.getProductSlug(props.match.params.slug);
  const relatedProduct = productData.getProducts(8);
  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product}></ProductView>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={2} gap={2}>
            {relatedProduct.map((item, index) => (
              <ProductCard
                key={index}
                img1={item.image01}
                img2={item.image02}
                name={item.title}
                slug={item.slug}
                price={Number(item.price)}
              ></ProductCard>
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
