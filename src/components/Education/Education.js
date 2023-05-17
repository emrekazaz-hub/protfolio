import "./Education.css";
import myImage from "../Images/IMG_20230402_043628_864.jpg";

const Education = () => {
  return (
    <section style={{paddingTop: "20%"}} id="toEducation" className="container">
      <div className="grup-education-div">
        <header className="card-header-education">Education</header>
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

export default Education;
