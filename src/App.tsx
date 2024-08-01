import "./App.css";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";

//https://healthaxon.com/?ref=onepagelove
//https://app.lottiefiles.com/project/cebd44ed-4254-460f-9c0f-6300c98edb02

function App() {
  return (
    <div className="bg-[#f9f1ec]">
      <div className="container mx-auto py-4 space-y-6 px-3">
        <HeroSection />
        <AboutSection />
      </div>
    </div>
  );
}

export default App;
