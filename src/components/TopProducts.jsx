import { useSelector } from "react-redux";
import { getFamousProducts, getProducts } from "../app/shopSlice";
import { Product } from "./Product";
import { LoadingIcon } from "./LoadingIcon";

export const TopProducts = () => {
  const famousProduct = getFamousProducts();

  return (
    <section
      id="latest-products"
      className="product-store py-2 my-2 py-md-5 my-md-5 pt-0"
    >
      <div className="container-md">
        <div className="display-header d-flex align-items-center justify-content-between">
          <h2 className="section-title text-uppercase">Top Products</h2>
        </div>
        <div className="product-content padding-small">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
            {famousProduct.length > 0 ? (
              famousProduct.map((product) => (
                <Product {...product} key={product.id} />
              ))
            ) : (
              <LoadingIcon />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
