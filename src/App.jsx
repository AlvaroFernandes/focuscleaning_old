import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserHistory } from "history";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebFont from "webfontloader";
import Header from "./components/layout/header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/layout/Layout";
import Error from "./pages/Error";
import BasicCleaning from "./pages/services/BasicCleaning";
import CommercialCleaning from "./pages/services/CommercialCleaning";
import ConstructionCleaning from "./pages/services/ConstructionCleaning";
import EndOfLeaseCleaning from "./pages/services/EndOfLeaseCleaning";
import PremiumCleaning from "./pages/services/PremiumCleaning";
import SpringCleaning from "./pages/services/SpringCleaning";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/services/basic", element: <BasicCleaning /> },
        { path: "/services/commercial", element: <CommercialCleaning /> },
        { path: "/services/construction", element: <ConstructionCleaning /> },
        { path: "/services/endoflease", element: <EndOfLeaseCleaning /> },
        { path: "/services/premium", element: <PremiumCleaning /> },
        { path: "/services/spring", element: <SpringCleaning /> }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
