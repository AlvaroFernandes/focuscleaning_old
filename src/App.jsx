import { createTheme, ThemeProvider } from "@mui/material";

import Header from "./pages/header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/services", element: <Services /> },
    { path: "/contacts", element: <Contact /> }
  ]);
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
