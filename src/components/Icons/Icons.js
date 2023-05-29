import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Icons.css";

const Icon = () => {
  return (
    <section style={{backgroundColor: "#1a0b36"}}>
      <div className="container" style={{ paddingTop: "5%", paddingBottom: "5%" }}>
        <div className="d-flex justify-content-evenly">
          <a className="icon-facebook " href="https://github.com/emrekazaz-hub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="icon-facebook "
            href="https://www.linkedin.com/in/emre-kazaz/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className="icon-facebook">
            <FontAwesomeIcon
              icon={faInstagram}
              href="https://www.instagram.com/emre.kazaz/"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Icon;
