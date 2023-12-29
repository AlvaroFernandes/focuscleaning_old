import { createTheme, ThemeProvider } from "@mui/material";

import Header from "./pages/header/Header";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes
} from "react-router-dom";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

const theme = createTheme({
  palette: {
    primary: { main: "#F2F1EB" }
  },
  text: {
    secondary: "#46505A"
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
