import "./App.css";
import Card from "./components/Card/Card";
import Navigation from "./components/Navigation/Navigation";
import Slide from "./components/Slide/Slide";
import Card2 from "./components/Card/Card2";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Icon from "./components/Icons/Icons";
import Video from "./components/Video/Video";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import React, { useEffect, useRef } from "react";

function App() {
  const videoRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const videoElement = videoRef.current;
      const scrollPosition = window.scrollY;

      // Belirli bir scroll mesafesine ulaşıldığında videoyu zoom yapma işlemini gerçekleştirin
      if (scrollPosition >= 0) {
        const zoomValue = 1 + (scrollPosition - 0) / 400; // Zoom değerini scroll mesafesine göre hesaplayın
        videoElement.style.transform = `scale(${zoomValue})`;
      } else {
        videoElement.style.transform = "scale(1)"; // Scroll mesafesi gereksinimini karşılamadığında normal boyuta dön
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Temizlik işlemi: bileşen kaldırıldığında scroll olayı dinleyicisini kaldırın
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header></header>
      <main>
        {/*<ScrollEvent/>*/}
        <Navigation />
        <Video ref={videoRef} />
        {/*<Slide />*/}
        <About />
        <Card2 />
        {/*<Contact />*/}
        <Icon />
        <Footer />
      </main>
    </div>
  );
}

export default App;
