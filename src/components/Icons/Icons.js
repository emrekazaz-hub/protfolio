import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Icons.css";

const Icon = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-evenly">
        <a className="icon-facebook " href="https://github.com/emrekazaz-hub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className="icon-facebook " href="https://www.linkedin.com/in/emre-kazaz/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Icon;
