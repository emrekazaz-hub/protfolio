import "./App.css";
import Card from "./components/Card/Card";
import Navigation from "./components/Navigation/Navigation";
import Slide from "./components/Slide/Slide";
import Card2 from "./components/Card/Card2";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import ScrollEvent from "./components/Scroll/ScrollEvent";

function App() {
  return (
    <div>
      <header></header>
      <main>
        {/*<ScrollEvent/>*/}
        <Navigation />
        <Slide />
        <Education/>
        <Card2 />
        <Contact/>
      </main>
    </div>
  );
}

export default App;
