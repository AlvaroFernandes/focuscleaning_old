import "./assets/scss/style.scss";

import { createBrowserHistory } from "history";
import { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./views/Home/Home";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Raleway"]
      }
    });
  }, []);
  var hist = createBrowserHistory();
  return (
    <HashRouter history={hist}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
