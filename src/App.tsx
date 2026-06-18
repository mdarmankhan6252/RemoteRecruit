import { useEffect } from "react";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import CustomProfile from "./components/CustomProfile";
import Footer from "./components/Footer";
import Help from "./components/Help";
import PaymentSystem from "./components/PaymentSystem";
import Question_Answer from "./components/Question_Answer";
import SubBanner from "./components/SubBanner";
import AOS from 'aos';
import 'aos/dist/aos.css'


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true, 
    });
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <AboutUs />
      <PaymentSystem />
      <CustomProfile />
      <SubBanner />
      <Question_Answer />
      <Help />
      <Footer />
    </div>
  );
};

export default App;