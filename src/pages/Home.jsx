import React from "react";
import heroSliderData from "../assets/fake-data/hero-slider";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import policy from "../assets/fake-data/policy";
import PolicyCard from "../components/PolicyCard";
import Grid from "../components/Grid";
import { Link } from "react-router-dom";
import products from "../assets/fake-data/products";
import ProductCard from "../components/ProductCard";
import banner from "../assets/images/banner.png";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* Heroslider start */}
      <HeroSlider data={heroSliderData} control={true} auto timeOut={5000} />
      {/* Heroslider end */}

      {/* Policy section start */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={4}>
            {policy.map((item, index) => (
              <Link to="/policy" key={index}>
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                ></PolicyCard>
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* Policy section end */}

      {/* best selling section start */}
      <Section>
        <SectionTitle>top sản phẩm bán chạy nhất</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={2} animate>
            {products.getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                img1={item.image01}
                img2={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              ></ProductCard>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* best selling section start */}

      {/* new arrival section start */}
      <Section>
        <SectionTitle>sản phẩm mới</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={2} animate>
            {products.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img1={item.image01}
                img2={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              ></ProductCard>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* new arrival section start */}

      {/* banner start */}
      <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner} alt="" />
          </Link>
        </SectionBody>
      </Section>
      {/* banner end */}

      {/* popular product section start  */}

      <Section>
        <SectionTitle>phổ biến</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={2} animate>
            {products.getProducts(12).map((item, index) => (
              <ProductCard
                key={index}
                img1={item.image01}
                img2={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              ></ProductCard>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* popular product section end  */}
    </Helmet>
  );
};

export default Home;
