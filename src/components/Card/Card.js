import wooximage from "../Images/hmm.png";
import zedImage from "../Images/422108-artwork-fantasy-art-ArtStation-Zed-League-of-Legends.jpg";
import "./Card.css";

const Card = () => {
  return (
    <section>
      <div className="container">
        <header className="card-header">My Projects</header>
        <div className="row gy-3">

          <div className="col-md-4">
            <div class="card">
              <img src={wooximage} class="card-img-top" alt="wooximage" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="card">
              <img src={zedImage} class="card-img-top" alt="wooximage" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
