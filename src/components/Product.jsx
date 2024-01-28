import { useDispatch } from "react-redux";
import { toggleProduct } from "../app/shopSlice";

export const Product = ({ id, title, price, image }) => {
  const dispatch = useDispatch();

  return (
    <div className="col mb-4">
      <div className="product-card position-relative">
        <div className="card-img text-center border shadow-sm">
          <img
            src={image}
            alt="product-item"
            className="product-image img-fluid"
          />
          <div className="cart-concern position-absolute d-flex justify-content-center">
            <div className="cart-button d-flex gap-2 justify-content-center align-items-center">
              <button
                type="button"
                className="btn btn-light"
                data-bs-toggle="modal"
                data-bs-target="#modalCart"
              >
                <svg className="shopping-carriage">
                  <use xlinkHref="#shopping-carriage"></use>
                </svg>
              </button>
              <button
                type="button"
                className="btn btn-light"
                data-bs-target="#modaltoggle"
                data-bs-toggle="modal"
                onClick={() => dispatch(toggleProduct(id))}
              >
                <svg className="quick-view">
                  <use xlinkHref="#quick-view"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="card-detail d-flex justify-content-between align-items-center mt-3">
          <h3 className="card-title text-truncate fs-6 fw-normal m-0">
            <a href="#">{title}</a>
          </h3>
          <span className="card-price fw-bold">${price}</span>
        </div>
      </div>
    </div>
  );
};
