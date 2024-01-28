import { useEffect } from "react";

export const Hero = () => {
  // init jarallax parallax
  var initJarallax = function () {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-img"), {
      keepImg: true,
    });

    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  };

  useEffect(() => {
    initJarallax();
    var breakpoint = window.matchMedia("(max-width:61.93rem)");

    if (breakpoint.matches === false) {
      var swiper = new Swiper(".main-swiper", {
        slidesPerView: 1,
        spaceBetween: 48,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          900: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        },
      });

      // homepage 2 slider
      var swiper = new Swiper(".thumb-swiper", {
        direction: "horizontal",
        slidesPerView: 6,
        spaceBetween: 6,
        breakpoints: {
          900: {
            direction: "vertical",
            spaceBetween: 6,
          },
        },
      });
      var swiper2 = new Swiper(".large-swiper", {
        spaceBetween: 48,
        effect: "fade",
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        thumbs: {
          swiper: swiper,
        },
      });
    }
  }, []);
  return (
    <section id="hero" className="position-relative pt-5">
      <div className="container-lg">
        <div className="swiper main-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="card d-flex flex-row align-items-end border-0 large jarallax-keep-img">
                <img
                  src="./images/3.jpg"
                  alt="shoes"
                  className="img-fluid jarallax-img"
                />
                <div className="cart-concern p-3 m-3 p-lg-5 m-lg-5">
                  <h2 className="card-title display-3 light">
                    Stylish wear for Women
                  </h2>
                  <a
                    href="#featured-products"
                    className="text-uppercase light mt-3 d-inline-block text-hover fw-bold light-border"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="row g-4">
                <div className="col-lg-12 mb-4">
                  <div className="card d-flex flex-row align-items-end border-0 jarallax-keep-img">
                    <img
                      src="./images/2.jpg"
                      alt="shoes"
                      className="img-fluid jarallax-img"
                    />
                    <div className="cart-concern p-3 m-3 p-lg-5 m-lg-5">
                      <h2 className="card-title style-2 display-4 light">
                        Sports Wear
                      </h2>
                      <a
                        href="#featured-products"
                        className="text-uppercase light mt-3 d-inline-block text-hover fw-bold light-border"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="card d-flex flex-row align-items-end border-0 jarallax-keep-img">
                    <img
                      src="./images/1.jpg"
                      alt="shoes"
                      className="img-fluid jarallax-img"
                    />
                    <div className="cart-concern p-3 m-3 p-lg-5 m-lg-5">
                      <h2 className="card-title style-2 display-4 light">
                        Silver Jewelery
                      </h2>
                      <a
                        href="#featured-products"
                        className="text-uppercase light mt-3 d-inline-block text-hover fw-bold light-border"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="card d-flex flex-row align-items-end border-0 large jarallax-keep-img">
                <img
                  src="./images/4.jpg"
                  alt="shoes"
                  className="img-fluid jarallax-img"
                />
                <div className="cart-concern p-3 m-3 p-lg-5 m-lg-5">
                  <h2 className="card-title display-3 dark">
                    Stylish wear for men
                  </h2>
                  <a
                    href="#featured-products"
                    className="text-uppercase dark mt-3 d-inline-block text-hover fw-bold dark-border"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="row g-4">
                <div className="col-lg-12 mb-4">
                  <div className="card d-flex flex-row align-items-end border-0 jarallax-keep-img">
                    <img
                      src="./images/5.jpg"
                      alt="shoes"
                      className="img-fluid jarallax-img"
                    />
                    <div className="cart-concern p-3 m-3 p-lg-5 m-lg-5">
                      <h2 className="card-title style-2 display-4 dark">
                        Electronics
                      </h2>
                      <a
                        href="#featured-products"
                        className="text-uppercase dark mt-3 d-inline-block text-hover fw-bold dark-border"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="card d-flex flex-row align-items-end border-0 jarallax-keep-img">
                    <img
                      src="./images/6.jpg"
                      alt="shoes"
                      className="img-fluid jarallax-img"
                    />
                    <div className="cart-concern p-3 m-3 p-lg-5 m-lg-5">
                      <h2 className="card-title style-2 display-4 light">
                        HD Screens
                      </h2>
                      <a
                        href="#featured-products"
                        className="text-uppercase light mt-3 d-inline-block text-hover fw-bold light-border"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};
