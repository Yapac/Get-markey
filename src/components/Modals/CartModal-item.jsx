import { useDispatch } from "react-redux";
import {
  getProductById,
  getProductFromCart,
  removeFromCart,
  updateCartCount,
} from "../../app/shopSlice";

export const CartModalItem = ({ productId }) => {
  const dispatch = useDispatch();

  const product = getProductById(productId);

  const productCard = getProductFromCart(productId);

  return (
    <div className="mini-cart cart-list p-0 mt-3">
      <div className="mini-cart-item d-flex justify-content-around border-bottom pb-3">
        <div className="col-lg-2 col-md-3 col-sm-2 me-4">
          <a href="#" title="product-image">
            <img
              src={product.image}
              className="img-fluid"
              alt="single-product-item"
            />
          </a>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-8">
          <div className="product-header d-flex justify-content-between align-items-center mb-3">
            <h4 className="product-title fs-6 me-5">{product.title}</h4>
            <button
              type="button"
              className="remove btn-close"
              aria-label="Remove this item"
              onClick={() => dispatch(removeFromCart(productId))}
            ></button>
          </div>
          <div className="quantity-price d-flex justify-content-between align-items-center">
            <div className="input-group product-qty">
              <button
                type="button"
                className="quantity-left-minus btn btn-light rounded-0 rounded-start btn-number"
                onClick={() => {
                  productCard.count > 1
                    ? dispatch(
                        updateCartCount({
                          productId,
                          count: productCard.count - 1,
                        })
                      )
                    : "";
                }}
              >
                <svg width="16" height="16">
                  <use xlinkHref="#minus"></use>
                </svg>
              </button>
              <input
                type="text"
                name="quantity"
                className="form-control input-number quantity"
                value={productCard.count}
                readOnly={true}
              />
              <button
                type="button"
                className="quantity-right-plus btn btn-light rounded-0 rounded-end btn-number"
                onClick={() =>
                  dispatch(
                    updateCartCount({
                      productId,
                      count: productCard.count + 1,
                    })
                  )
                }
              >
                <svg width="16" height="16">
                  <use xlinkHref="#plus"></use>
                </svg>
              </button>
            </div>
            <div className="price-code">
              <span className="product-price fs-6">
                ${product.price * productCard.count}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
