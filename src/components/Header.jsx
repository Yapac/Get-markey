import { useSelector } from "react-redux";
import { getProductsCart } from "../app/shopSlice";

export const Header = () => {
  const card = useSelector(getProductsCart);
  return (
    <header id="header" className="site-header text-black">
      <nav id="header-nav" className="navbar my-md-4 navbar-expand-lg">
        <div className="container-lg">
          <a className="navbar-brand" href="#">
            <img src="./images/main-logo.png" className="logo" alt="logo" />
          </a>
          <button
            className="navbar-toggler d-flex d-lg-none order-3 border-0 p-1 ms-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#bdNavbar"
            aria-controls="bdNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg className="navbar-icon">
              <use xlinkHref="#navbar-icon"></use>
            </svg>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="bdNavbar">
            <div className="offcanvas-header px-4 pb-0">
              <a className="navbar-brand ps-3" href="#">
                <img src="./images/main-logo.png" className="logo" alt="logo" />
              </a>
              <button
                type="button"
                className="btn-close btn-close-black p-5"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                data-bs-target="#bdNavbar"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul
                id="navbar"
                className="navbar-nav fw-bold justify-content-end align-items-center flex-grow-1"
              >
                <li className="nav-item">
                  <a className="nav-link text-hover text-active" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-hover " href="#">
                    Trends
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-hover " href="#">
                    Collections
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-hover " href="#">
                    Sale
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-hover " href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="user-items ps-0 ps-md-2">
            <ul className="d-flex justify-content-end list-unstyled align-item-center m-0">
              <li className="pe-3">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modallogin"
                  className="border-0"
                >
                  <svg className="user" width="24" height="24">
                    <use xlinkHref="#user"></use>
                  </svg>
                </a>
              </li>
              <li className="pe-3">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#modalCart"
                  data-card-count={card.length}
                  className={
                    card.length
                      ? "border-0 shopping-cart-btn cart-full"
                      : "border-0 shopping-cart-btn"
                  }
                >
                  <svg width="24" height="24">
                    <use xlinkHref="#shopping-cart"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
