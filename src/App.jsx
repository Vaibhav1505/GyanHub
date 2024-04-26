import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./components/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GetStarted from "./components/GetStarted";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/getStarted",
    element: <GetStarted/>,
  },
]);

function App() {
  // const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-300 ">
        <RouterProvider router={router} />
        
      </div>
    </>
  );
}

export default App;
