import windowsImage from "../Images/wallpaperflare.com_wallpaper (6).jpg";
import "./Card.css";
import wooxImage from "../Images/woox-low-resolution-color-logo.png";
import abcImage from "../Images/abc-low-resolution-logo-black-on-white-background.png";
import flamingoImage from "../Images/flamingoLogo.png";
import wooxchatImage from "../Images/woox-low-resolution-color-logo (1).png";
import stockcardImage from "../Images/stock-card-low-resolution-color-logo.png";
import wooxMarketing from "../Images/marketingLowRez.png";
import robofriendsImage from "../Images/robofrinedsimage.png";
import protfolioGif from "../Images/ezgif-3-5370643a50.gif";

const Card2 = () => {
  return (
    <section style={{ paddingTop: "10%" }} className="container">
      <header className="card-header">My Projects</header>
      <div className="row row-cols-1 row-cols-md-3 g-4 ">
        <div id="toMyProjects" className="col">
          {/* Full Stack Face Detection Web Application */}
          <div className="card h-100">
            <img src={wooxImage} className="card-img-top" alt="wooxImage" />
            <div className="card-body card-color">
              <h5 className="card-title">
                Full Stack Face Detection Web Application
              </h5>
              <div>
                <span className="badge rounded-pill text-bg-primary">
                  React
                </span>
                <span className="badge rounded-pill text-bg-primary">
                  Node.js
                </span>
              </div>
              <p className="card-text">
                The application is designed by using React.js for the frontend
                and Node.js with Express for the backend. It enables users to
                upload images and performs face detection using an AI model. The
                backend communicates with the Clarifai service to process the
                image and send back the results to the frontend. User logins are
                recorded and filtered when logged in again.
              </p>
              <div
                style={{ paddingTop: "5%" }}
                className="d-flex justify-content-center gap-2 card-position"
              >
                <a
                  className="btn btn-color"
                  href="https://emrekazaz-hub.github.io/smartbrain-face-detection-full-stack/"
                >
                  Live Page
                </a>
                <a
                  className="btn btn-color"
                  href="https://github.com/emrekazaz-hub/smartbrain-face-detection-full-stack"
                >
                  Github Frontend Code
                </a>
                <a
                  className="btn btn-color"
                  href="https://github.com/emrekazaz-hub/smartbrainAPI"
                >
                  Github Backend Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Electronic Banking Application Frontend */}
        <div className="col">
          <div className="card h-100">
            <img src={abcImage} className="card-img-top" alt="abcImage" />
            <div className="card-body card-color">
              <h5 className="card-title">
                Electronic Banking Application Frontend
              </h5>
              <div>
                <span class="badge rounded-pill text-bg-primary">React</span>
              </div>
              <p className="card-text">
                The "frontend-mini-banking-app" project is focused on the
                frontend (client-side) development of a mini banking
                application. It leverages HTML, CSS, and JavaScript to build the
                user interface and incorporates various features necessary for
                conducting banking transactions. The project encompasses the
                creation of interactive components, styling elements using CSS,
                and implementing functionality with JavaScript to enable tasks
                such as balance inquiries, fund transfers, and bill payments.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <a
                  className="btn btn-color"
                  href="https://emrekazaz-hub.github.io/ebank/"
                >
                  Live Page
                </a>
                <a
                  className="btn btn-color"
                  href="https://github.com/emrekazaz-hub/frontend-mini-banking-app"
                >
                  Github Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Client-Serever Application */}
        <div className="col">
          <div className="card h-100">
            <img
              src={wooxchatImage}
              className="card-img-top"
              alt="wooxchatImage"
            />
            <div className="card-body card-color">
              <h5 className="card-title">Client-Serever Application</h5>
              <div>
                <span class="badge rounded-pill text-bg-primary">C#</span>
              </div>
              <p className="card-text">
                A client-server application written in C# consists of client and
                server components. The client runs on the user's side and
                connects to the server to send or receive data requests. The
                server manages client connections, processes incoming requests,
                and sends responses back to the clients as needed. Such an
                application can be used in various scenarios, such as instant
                messaging, file sharing, or database access, to facilitate data
                communication.
              </p>
              <div
                style={{ paddingTop: "5%" }}
                className="d-flex justify-content-center gap-2"
              >
                <a
                  className="btn btn-color"
                  href="https://github.com/emrekazaz-hub/Client-Server-Chat-App"
                >
                  Github Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Flamingo Web Site */}
        <div className="col">
          <div className="card h-100">
            <img
              src={flamingoImage}
              className="card-img-top"
              alt="flamingoImage"
            />
            <div className="card-body card-color">
              <h5 className="card-title">Flamingo Web Site</h5>
              <div>
                <span class="badge rounded-pill text-bg-primary">React</span>
              </div>
              <p className="card-text">
                Flamingo2 provides users with a convenient interface to manage
                their social media accounts from a single platform.
              </p>
              <div
                style={{ paddingTop: "43%" }}
                className="d-flex justify-content-center gap-2"
              >
                <a
                  className="btn btn-color"
                  href="https://emrekazaz-hub.github.io/Flamingo2/"
                >
                  Live Page
                </a>
                <a
                  className="btn btn-color"
                  href="https://github.com/emrekazaz-hub/Flamingo2"
                >
                  Github Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Online Marketing Full Stack */}
        <div className="col">
          <div className="card h-100">
            <img
              src={wooxMarketing}
              className="card-img-top"
              alt="wooxMarketing"
            />
            <div className="card-body card-color">
              <h5 className="card-title">Full Stack Online Marketing Web Application</h5>
              <div>
                <span class="badge rounded-pill text-bg-primary">React</span>
                <span class="badge rounded-pill text-bg-primary">Node.js</span>
              </div>
              <p className="card-text">Loading...</p>
              <div
                style={{ paddingTop: "43%" }}
                className="d-flex justify-content-center gap-2"
              >
                <a
                  className="btn btn-color"
                  href="https://emrekazaz-hub.github.io/Flamingo2/"
                >
                  Live Page
                </a>
                <a
                  className="btn btn-color"
                  href="https://github.com/emrekazaz-hub/Flamingo2"
                >
                  Github Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stock Card Application */}
        <div className="col">
          <div className="card h-100">
            <img
              src={stockcardImage}
              className="card-img-top"
              alt="stockcardImage"
            />
            <div className="card-body card-color">
              <h5 className="card-title">Stock Card Application</h5>
              <div>
                <span class="badge rounded-pill text-bg-primary">Java</span>
              </div>
              <p className="card-text">
                The "StockCard" application is a Java application that allows
                users involved in inventory management to track their stock.
                Through stock cards, users can manage product information, stock
                quantities, and supplier details. The application provides
                features for creating, updating, and deleting stock cards, as
                well as monitoring stock levels and tracking remaining
                inventory.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <a
                  className="btn btn-color"
                  href="https://github.com/emrekazaz-hub/StockCard"
                >
                  Github Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ROBO FRIENDS */}
        <div className="col">
          <div className="card h-100">
            <img
              src={robofriendsImage}
              className="card-img-top"
              alt="robofriendsImage"
            />
            <div className="card-body card-color">
              <h5 className="card-title">RoboFriends</h5>
              <div>
                <span class="badge rounded-pill text-bg-primary">React</span>
              </div>
              <p className="card-text">
                Robo is a robot control system project that offers basic motion
                controls along with additional features like sensor integration
                and automated tasks.
              </p>
              <div style={{paddingTop: "20%"}} className="d-flex justify-content-center gap-2">
                <a
                  className="btn btn-color"
                  href="https://emrekazaz-hub.github.io/robo/"
                >
                  Live Page
                </a>
                <a
                  className="btn btn-color"
                  href="https://github.com/emrekazaz-hub/robo"
                >
                  Github Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FMY PROTFOLIO */}
        <div className="col">
          <div className="card h-100">
            <img
              src={protfolioGif}
              className="card-img-top"
              alt="windowsImage"
            />
            <div className="card-body card-color">
              <h5 className="card-title">My Protfolio</h5>
              <div>
                <span class="badge rounded-pill text-bg-primary">React</span>
              </div>
              <p className="card-text">
                Portfolio is a customizable website template that allows users
                to create their professional portfolios with a polished look and
                highlight their projects.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <a
                  className="btn btn-color"
                  href="https://emrekazaz-hub.github.io/protfolio/"
                >
                  Live Page
                </a>
                <a
                  className="btn btn-color"
                  href="https://github.com/emrekazaz-hub/protfolio"
                >
                  Github Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card2;
