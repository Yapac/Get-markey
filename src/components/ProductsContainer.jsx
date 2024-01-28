import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  getProducts,
  getProductsError,
  getProductsStatus,
} from "../app/shopSlice";
import { Product } from "./Product";
import { LoadingIcon } from "./LoadingIcon";
import { useState } from "react";

export const ProductsContainer = () => {
  const [hidden, setHidden] = useState(true);

  const products = useSelector(getProducts);
  const productsStatus = useSelector(getProductsStatus);
  const productsError = useSelector(getProductsError);

  const handleClick = () => {
    setHidden(false);
  };

  let productsContent = "";

  if (productsStatus === "loading") {
    productsContent = (
      <div>
        <LoadingIcon />
      </div>
    );
  } else if (productsStatus === "succeeded") {
    productsContent = hidden
      ? products
          .slice(0, 5)
          .map((product) => <Product {...product} key={product.id} />)
      : products.map((product) => <Product {...product} key={product.id} />);
  } else if (productsStatus === "failed") {
    productsContent = (
      <div class="text-center bg-gray p-4 w-100">
        <p class="text-uppercase fs-4 m-0 fw-bold">
          Error in loading the products
        </p>
        <small class="text-gray">"{productsError}"</small>
      </div>
    );
  } else {
    productsContent = <div></div>;
  }

  return (
    <section id="featured-products" className="product-store pt-5">
      <div className="container-md">
        <div className="display-header d-flex align-items-center justify-content-between">
          <h2 className="section-title text-uppercase">Featured Products</h2>
          <div className="btn-right">
            <a
              className="d-inline-block text-uppercase text-hover fw-bold"
              onClick={handleClick}
            >
              View all
            </a>
          </div>
        </div>
        <div className="product-content padding-small">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
            {productsContent}
          </div>
        </div>
      </div>
    </section>
  );
};
