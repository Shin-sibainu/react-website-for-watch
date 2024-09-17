import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurMission from "./components/OurMission";
import Service from "./components/Service";

//https://healthaxon.com/?ref=onepagelove
//https://app.lottiefiles.com/project/cebd44ed-4254-460f-9c0f-6300c98edb02
//https://app.svgator.com/#/
//https://www.flaticon.com/animated-icons
//https://www.unscreen.com/upload

function App() {
  // const scrollRef = useSmoothScroll();
  // bg-[#f0efed]
  return (
    <div className="bg-[#f0efed]" data-scroll-container>
      <div className="container mx-auto py-4 space-y-6 px-3">
        <Header />
        <Hero />
        <About />
        <Service />
        <OurMission />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
