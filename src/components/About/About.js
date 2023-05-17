import "./About.css";
import myImage from "../Images/IMG_20230402_043628_864.jpg";

const About = () => {
  return (
    <section id="toAbout" className="container">
      <div style={{paddingTop: "20%"}} className="grup-education-div">
        <header className="card-header-education">About Me</header>
        <div className="education-content gap-5">
          <img
            src={myImage}
            alt="myImage"
            className="rounded-circle education-image"
          />
          <p className="education-p-tag">
            Bu kodu section'ın içindeki h2 etiketlerinin altına ekleyerek, h2
            etiketlerinin altında 1.5rem boşluk bırakabilirsiniz. İsterseniz
            boşluk miktarını arttırıp azaltabilirsiniz. Umarım yardımcı
            olabilmişimdir. Bu kodu section'ın içindeki h2 etiketlerinin altına
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
