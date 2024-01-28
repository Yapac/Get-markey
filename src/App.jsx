import { useEffect, useState } from "react";
import {
  Icons,
  Modals,
  Header,
  Hero,
  Footer,
  DiscountContainer,
  Collections,
  ProductsContainer,
  TopProducts,
  LoadingIcon,
} from "./components";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./app/shopSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());

    $(".preloader").fadeOut();
  }, []);

  return (
    <div className="app">
      <Icons />

      <div
        className="preloader justify-content-center align-items-center"
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          display: "flex",
          zIndex: 20,
        }}
      >
        <LoadingIcon />
      </div>

      <Modals />

      <Header />

      <Hero />

      <DiscountContainer />

      <ProductsContainer />

      <Collections />

      <TopProducts />

      <Footer />
    </div>
  );
}

export default App;
