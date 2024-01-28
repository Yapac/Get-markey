import { CartModal } from "./Modals/CartModal";
import { ToggleModal } from "./Modals/ToggleModal";

export const Modals = () => {
  return (
    <>
      <ToggleModal />

      <CartModal />

      <div
        className="modal fade"
        id="modallogin"
        tabIndex="-1"
        aria-modal="true"
        role="dialog"
      >
        <div
          className="modal-dialog modal-fullscreen-md-down modal-md modal-dialog-centered"
          role="document"
        >
          <div className="modal-content p-4">
            <div className="modal-header mx-auto border-0">
              <h2 className="modal-title fs-">Login</h2>
            </div>
            <div className="modal-body">
              <div className="login-detail">
                <div className="login-form p-0">
                  <div className="col-lg-12 mx-auto">
                    <form id="login-form">
                      <input
                        type="text"
                        name="username"
                        autoComplete="username"
                        placeholder="Username or Email Address *"
                        className="mb-3 ps-3 text-input border-top-0 border-start-0 border-end-0"
                      />
                      <input
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        placeholder="Password"
                        className="ps-3 text-input border-top-0 border-start-0 border-end-0"
                      />
                      <div className="checkbox d-flex justify-content-between mt-4">
                        <p className="checkbox-form">
                          <label className="">
                            <input
                              name="rememberme"
                              type="checkbox"
                              id="remember-me"
                              value="forever"
                              onChange={() => {}}
                            />{" "}
                            Remember me{" "}
                          </label>
                        </p>
                        <p className="lost-password">
                          <a href="#">Forgot your password?</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="modal-footer mt-5 d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-medium btn-red hvr-sweep-to-right dark-sweep"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="btn btn-medium btn-black hvr-sweep-to-right sweep"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
