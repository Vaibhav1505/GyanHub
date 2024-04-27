import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import Offering from "./components/Offering";
import HeaderSection from "./components/Header";
import AboutUs from "./components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/getStarted",
    element:  <GetStarted/>,
  },
  {
    path:"/features",
    element: <><HeaderSection /><Offering /></>
  },
  {
    path:"/about",
    element:<><HeaderSection></HeaderSection><AboutUs></AboutUs></>
  }

]);

function App() {
  // const navigate = useNavigate();

  return (
    <>
      <div className="bg-black ">
        <RouterProvider router={router} />
        
      </div>
    </>
  );
}

export default App;
