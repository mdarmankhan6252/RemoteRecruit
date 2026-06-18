import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import CustomProfile from "./components/CustomProfile";
import PaymentSystem from "./components/PaymentSystem";
import Question_Answer from "./components/Question_Answer";
import SubBanner from "./components/SubBanner";


const App = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <PaymentSystem />
      <CustomProfile />
      <SubBanner />
      <Question_Answer />
    </div>
  );
};

export default App;