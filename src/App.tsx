import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="min-h-screen min-w-screen flex flex-col items-center">
        <div className="max-w-6xl w-full bg-white">
          <Header />
          <HeroBanner />
          <Skills />
          <Profile />
          <Projects />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
