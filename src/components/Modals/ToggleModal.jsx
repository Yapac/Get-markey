import { useDispatch, useSelector } from "react-redux";
import {
  addToCard,
  getProductById,
  getProducts,
  getToggledProductId,
} from "../../app/shopSlice";

import { useState } from "react";

export const ToggleModal = () => {
  const dispatch = useDispatch();

  const productId = useSelector(getToggledProductId);
  const [count, setCount] = useState(1);

  const product = getProductById(productId);

  const handleAddToCart = () => {
    dispatch(addToCard({ productId, count, price: product.price }));
    setCount(1);
  };

  return (
    <div
      className="modal fade"
      id="modaltoggle"
      aria-hidden="true"
      tabIndex="-1"
    >
      {product && (
        <div className="modal-dialog modal-fullscreen-md-down modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="col-lg-12 col-md-12 me-3">
                <div className="image-holder">
                  <img src={product.image} alt="Shoes" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="summary">
                  <div className="summary-content fs-6">
                    <div className="product-header d-flex justify-content-between mt-4">
                      <h3 className="display-7">{product.title}</h3>
                      <div className="modal-close-btn">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                    </div>
                    <span className="product-price fw-medium fs-3">
                      ${product.price}
                    </span>
                    <div className="product-details">
                      <p className="fs-7 text-capitalize">
                        {product.description}
                      </p>
                    </div>
                    <ul className="select">
                      <li>
                        <strong>Rating:</strong> {product.rating.rate} ({" "}
                        {product.rating.count} ratings )
                      </li>
                      <li>
                        <strong>Type:</strong> {product.category}
                      </li>
                    </ul>
                    <div className="variations-form shopify-cart">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="quantity d-flex justify-content-center pb-4">
                            <button
                              onClick={() => setCount(count + 1)}
                              className="qty-number align-top qty-number-plus d-flex justify-content-center align-items-center text-center"
                            >
                              <span className="increase-qty plus">
                                <svg className="plus">
                                  <use xlinkHref="#plus"></use>
                                </svg>
                              </span>
                            </button>
                            <input
                              type="number"
                              className="input-text text-center"
                              step="1"
                              min="1"
                              name="quantity"
                              value={count}
                              title="Qty"
                              readOnly={true}
                            />
                            <button
                              onClick={() =>
                                count > 1
                                  ? setCount(count - 1)
                                  : setCount(count)
                              }
                              className="qty-number qty-number-minus d-flex justify-content-center align-items-center text-center"
                            >
                              <span className="increase-qty minus">
                                <svg className="minus">
                                  <use xlinkHref="#minus"></use>
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="col-md-6 text-center">
                          <a
                            rel="nofollow"
                            data-no-instant=""
                            href="#"
                            className="out-stock button"
                          >
                            Out of stock
                          </a>
                          <button
                            type="submit"
                            onClick={handleAddToCart}
                            className="btn btn-medium btn-black hvr-sweep-to-right"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
