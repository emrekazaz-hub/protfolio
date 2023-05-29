import React, { useEffect, useRef } from "react";
import "./About.css";
import myImage from "../Images/IMG_20230402_043628_864.jpg";

const About = () => {
  const educationContentRef = useRef(null);

  useEffect(() => {
    const educationContent = educationContentRef.current;
    const paragraph = educationContent.querySelector(".education-p-tag");

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const windowHeight = window.innerHeight;

      if (
        educationContent.offsetTop < scrollPosition &&
        educationContent.offsetTop > scrollPosition - windowHeight
      ) {
        educationContent.classList.add("animate");
        paragraph.classList.add("animate");
      } else {
        educationContent.classList.remove("animate");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="toAbout" style={{paddingTop: "20%"}} className="container">
      <h2 className="h2-tag-about">About Me</h2>
        <div
          ref={educationContentRef}
          className="grup-education-div education-content gap-5 animate-top-down"
        >
          <img
            src={myImage}
            alt="myImage"
            className="rounded-circle education-image"
          />
          <p className="education-p-tag">
            Hello, I'm Emre Kazaz. I graduated from Trakya University with a
            degree in Computer Engineering. I'm a recent graduate focusing on
            web development. Throughout my education, I had the opportunity to
            work on projects using C#, Java, and React. Additionally, I gained
            experience during my internships. I completed a 1-month internship
            as a Software Developer at Guru company in Istanbul. During this
            time, I worked on the Stock Card project and made contributions. I
            also interned as a Navision Developer at Orca company in Edirne.
            After graduation, I enrolled in the Full Stack Web Developer course
            at ZTM Academy. During the course, I received training in HTML, CSS,
            JavaScript, React, Node.js, MongoDB, PostgreSQL, and Redux. I'm
            committed to continuously improving myself and staying updated with
            new technologies. I'm excited to discuss my projects and experiences
            in more detail with you. You can reach me using the contact
            information provided below.
            <br></br>
            <br></br>
            Thank you, Emre Kazaz
          </p>
        </div>
    </section>
  );
};

export default About;