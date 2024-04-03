import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderSection from "./components/Header";
import ArticleSection from "./components/article";
import CustomButton from "./components/CustomButton";
import AboutUs from "./components/About";
import OfferCard from "./components/OfferCard";
import Offering from "./components/Offering";

function App() {
  return (
    <>
      <HeaderSection></HeaderSection>
      <ArticleSection></ArticleSection>
      <Offering></Offering>
    </>
  );
}

export default App;
