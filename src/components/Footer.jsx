export const Footer = () => {
  return (
    <footer
      id="footer"
      className="py-5 text-white"
      style={{ backgroundColor: "#0c0c0c" }}
    >
      <div className="container-lg pt-5 mt-5 border-top small">
        <div className="row justify-content-center ">
          <div className="col-lg-2 pb-3">
            <div className="footer-menu">
              <h5 className="widget-title pb-2">Info</h5>
              <ul className="menu-list list-unstyled">
                <li className="pb-2">
                  <a href="#">Track Your Order</a>
                </li>
                <li className="pb-2">
                  <a href="#">Our Blog</a>
                </li>
                <li className="pb-2">
                  <a href="#">Privacy policy</a>
                </li>
                <li className="pb-2">
                  <a href="#">Shipping</a>
                </li>
                <li className="pb-2">
                  <a href="#">Contact Us</a>
                </li>
                <li className="pb-2">
                  <a href="#">Help</a>
                </li>
                <li className="pb-2">
                  <a href="#">Community</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 pb-3">
            <div className="footer-menu">
              <h5 className="widget-title pb-2">About</h5>
              <ul className="menu-list list-unstyled">
                <li className="pb-2">
                  <a href="#">History</a>
                </li>
                <li className="pb-2">
                  <a href="#">Our Team</a>
                </li>
                <li className="pb-2">
                  <a href="#">Services</a>
                </li>
                <li className="pb-2">
                  <a href="#">Company</a>
                </li>
                <li className="pb-2">
                  <a href="#">Manufacture</a>
                </li>
                <li className="pb-2">
                  <a href="#">Wholesale</a>
                </li>
                <li className="pb-2">
                  <a href="#">Retail</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 pb-3">
            <div className="footer-menu">
              <h5 className="widget-title pb-2">Popular</h5>
              <ul className="menu-list list-unstyled">
                <li className="pb-2">
                  <a href="#">Prices Drop</a>
                </li>
                <li className="pb-2">
                  <a href="#">New Products</a>
                </li>
                <li className="pb-2">
                  <a href="#">Best Sales</a>
                </li>
                <li className="pb-2">
                  <a href="#">Stores</a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#modallogin"
                  >
                    Login
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#modalCart"
                  >
                    Cart
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 pb-3">
            <div className="footer-menu">
              <h5 className="widget-title pb-3">Get In Touch</h5>
              <div className="footer-contact-text">
                <span>Made by Yapacdev. </span>
                <span>
                  Made using React.js, Redux Toolkit, Axios, Fake store API.
                </span>
                <span className="text-hover fw-bold light-border">
                  <a href="https://github.com/Yapac" target="_blank">
                    Github.com/Yapac
                  </a>
                </span>
                <span className="text-hover fw-bold light-border">
                  <a href="https://yapacdev.com" target="_blank">
                    Yapacdev.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center justify-content-center">
          <div className="col-md-6">
            <p>Copyright © Get Markey.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
