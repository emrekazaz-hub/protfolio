import React from "react";

const Footer = () => {
  return (
    <div style={{backgroundColor: "#1a0b36"}}>
      <footer id="toContact" className="text-center mt-0" style={{ color: "white" }}>
        <section>
          <div className="container text-center text-md-start">
            <div className="row mt-0">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>WooX
                </h6>
                <p>Thanks for visiting my protfolio.</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                {/*<p>
                  <a href="#" className="text-reset">
                    Apple Watch
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    iPhone
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    iPad
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    MacBoox
                  </a>
                </p>*/}
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Prizren, PZ 20000, KS
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  emrekzz@outlook.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 90 552 655 75 82
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 377 48 155 671
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023
          <a
            className="text-reset fw-bold"
            href="https://emrekazaz-hub.github.io/protfolio/"
          >
            MyProtfolio.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
