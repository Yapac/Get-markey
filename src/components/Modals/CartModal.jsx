import { useSelector } from "react-redux";
import { getCartTotalPrice, getProductsCart } from "../../app/shopSlice";
import { CartModalItem } from "./CartModal-item";

export const CartModal = () => {
  const cart = useSelector(getProductsCart);

  const totalPrice = getCartTotalPrice();

  return (
    <div
      className="modal fade"
      id="modalCart"
      tabIndex="-1"
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-fullscreen-md-down modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title fs-4">Shopping Cart</h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="shopping-cart">
              <div className="shopping-cart-content">
                {cart.length > 0 ? (
                  <>
                    {cart.map((item) => (
                      <CartModalItem {...item} key={item.productId} />
                    ))}
                    <div className="mini-cart-total d-flex justify-content-between py-4 px-3">
                      <span className="fs-6">Subtotal:</span>
                      <span className="special-price-code">
                        <span
                          className="price-amount amount fs-6"
                          style={{ opacity: "1" }}
                        >
                          <bdi>
                            <span className="price-currency-symbol">$</span>
                            {totalPrice || 0}{" "}
                          </bdi>
                        </span>
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="text-center">
                    <p>cart is empty</p>
                  </div>
                )}

                <div className="modal-footer my-4 justify-content-center">
                  <button
                    type="button"
                    className="btn btn-medium btn-black  hvr-sweep-to-right"
                  >
                    Checkout
                  </button>
                  <button
                    type="button"
                    className="btn btn-medium btn-red hvr-sweep-to-right dark-sweep"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Back to shoping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
