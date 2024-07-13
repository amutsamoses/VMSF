import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import LandingPage from "../components/home/LandingPage";
import FeaturedVehicles from "../components/home/FeaturedVehicles";
import WhyUs from "../components/home/WhyUs";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <WhyUs />
      <FeaturedVehicles />
      <Footer />
    </div>
  );
};

export default Home;
