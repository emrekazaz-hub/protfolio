import windowsImage from "../Images/wallpaperflare.com_wallpaper (6).jpg";
import "./Card.css";
import wooxImage from "../Images/woox-low-resolution-color-logo.png";
import abcImage from "../Images/abc-low-resolution-logo-black-on-white-background.png";
import flamingoImage from "../Images/flamingoLogo.png";
import wooxchatImage from "../Images/woox-low-resolution-color-logo (1).png";
import stockcardImage from "../Images/stock-card-low-resolution-color-logo.png";
import wooxMarketing from "../Images/marketingLowRez.png";
import robofriendsImage from "../Images/robofrinedsimage.png";


const Card2 = () => { 
  return (
    <section className="container">
      <header className="card-header">My Projects</header>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div id="toMyProjects" class="col">
          <div class="card h-100">
            <img src={wooxImage} class="card-img-top" alt="wooxImage"/>
            <div class="card-body">
              <h5 class="card-title">Full Stack Face Detection Web Application</h5>
              <p class="card-text">
                The application is designed by using React.js for the frontend and Node.js with Express for the backend. 
                It enables users to upload images and performs face detection using an AI model. The backend communicates with the Clarifai service to process the image and send back the results to the frontend.
                User logins are recorded and filtered when logged in again.
              </p>
              <div className="d-flex justify-content-center gap-2 card-position">
                <a className="btn btn-dark" href="https://emrekazaz-hub.github.io/smartbrain-face-detection-full-stack/">Live Page</a>
                <a className="btn btn-dark" href="https://github.com/emrekazaz-hub/smartbrain-face-detection-full-stack">Github Frontend Code</a>
                <a className="btn btn-dark" href="https://github.com/emrekazaz-hub/smartbrainAPI">Github Backend Code</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img src={abcImage} class="card-img-top" alt="abcImage" />
            <div class="card-body">
              <h5 class="card-title">Electronic Banking Application Frontend</h5>
              <p class="card-text">The "frontend-mini-banking-app" project is focused on the frontend (client-side) development of a mini banking application. It leverages HTML, CSS, and JavaScript to build the user interface and incorporates various features necessary for conducting banking transactions. The project encompasses the creation of interactive components, styling elements using CSS, and implementing functionality with JavaScript to enable tasks such as balance inquiries, fund transfers, and bill payments.</p>
              <div className="d-flex justify-content-center gap-2">
                <a className="btn btn-dark" href="https://emrekazaz-hub.github.io/ebank/">Live Page</a>
                <a className="btn btn-dark" href="https://github.com/emrekazaz-hub/frontend-mini-banking-app">Github Code</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img src={wooxchatImage} class="card-img-top" alt="wooxchatImage" />
            <div class="card-body">
              <h5 class="card-title">Client-Serever Application</h5>
              <p class="card-text">
              A client-server application written in C# consists of client and server components. The client runs on the user's side and connects to the server to send or receive data requests. The server manages client connections, processes incoming requests, and sends responses back to the clients as needed. Such an application can be used in various scenarios, such as instant messaging, file sharing, or database access, to facilitate data communication.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <a className="btn btn-dark" href="https://github.com/emrekazaz-hub/Client-Server-Chat-App">Github Code</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img src={flamingoImage} class="card-img-top" alt="flamingoImage" />
            <div class="card-body">
              <h5 class="card-title">Flamingo Web Site</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <a className="btn btn-dark" href="https://emrekazaz-hub.github.io/Flamingo2/">Live Page</a>
                <a className="btn btn-dark" href="https://github.com/emrekazaz-hub/Flamingo2">Github Code</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img src={wooxMarketing} class="card-img-top" alt="wooxMarketing" />
            <div class="card-body">
              <h5 class="card-title">Online Marketing Full Stack</h5>
              <p class="card-text">
                Loading...
              </p>
              <div className="d-flex justify-content-center gap-2">
                <a className="btn btn-dark" href="https://emrekazaz-hub.github.io/Flamingo2/">Live Page</a>
                <a className="btn btn-dark" href="https://github.com/emrekazaz-hub/Flamingo2">Github Code</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img src={stockcardImage} class="card-img-top" alt="stockcardImage" />
            <div class="card-body">
              <h5 class="card-title">Flamingo Web Site</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <a className="btn btn-dark" href="https://github.com/emrekazaz-hub/StockCard">Github Code</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <img src={robofriendsImage} class="card-img-top" alt="robofriendsImage" />
            <div class="card-body">
              <h5 class="card-title">Flamingo Web Site</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <a className="btn btn-dark" href="https://emrekazaz-hub.github.io/robo/">Live Page</a>
                <a className="btn btn-dark" href="https://github.com/emrekazaz-hub/robo">Github Code</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Card2;
