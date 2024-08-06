import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import OurMission from "./components/OurMission";
import Service from "./components/Service";

//https://healthaxon.com/?ref=onepagelove
//https://app.lottiefiles.com/project/cebd44ed-4254-460f-9c0f-6300c98edb02
//https://app.svgator.com/#/
//https://www.flaticon.com/animated-icons
//https://www.unscreen.com/upload

function App() {
  return (
    <div className="bg-[#f0efed]">
      <div className="container mx-auto py-4 space-y-6 px-3">
        <Hero />
        <About />
        <Service />
        <OurMission />
        <Contact />
      </div>
    </div>
  );
}

export default App;
