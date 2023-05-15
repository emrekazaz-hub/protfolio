import windowsImg from "../Images/wallpaperflare.com_wallpaper (6).jpg";
import jinxImg from "../Images/1194463.jpg";
import zedImg from "../Images/422108-artwork-fantasy-art-ArtStation-Zed-League-of-Legends.jpg";
import aaa from "../Images/LoL-Capsula-Prime-Gaming-2023.jpg";
import "./Slide.css";

const Slide = () => {
  return (
    <section>
      <div className="container">
        <h5 className="protfolio-header">Welcome To My Protfolio</h5>
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={windowsImg} class="d-block w-100" alt="windowsImg" />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Buraya bir metin girilecek.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={aaa} class="d-block w-100" alt="aaa" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={zedImg} class="d-block w-100" alt="zedImg" />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slide;
