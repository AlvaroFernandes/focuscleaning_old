import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/scss/styles.scss";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
