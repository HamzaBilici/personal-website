import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

  import { ToastContainer } from 'react-toastify';

function App() {
  
const theme = useSelector((state: any) => state.theme.theme);
  return (
    <>
      <div className={`min-h-screen min-w-screen flex flex-col items-center  ${theme==='light'?"bg-white":"bg-[#252128]"}`}>
        <div className={`max-w-6xl w-full `}>
          <Header />
          <HeroBanner />
          <Skills />
          <Profile />
          <Projects />
        </div>
        <Footer />
      </div>
      <ToastContainer/>
    </>
  );
}

export default App;
