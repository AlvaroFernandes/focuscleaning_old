import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages";
import { ErrorPage } from "@/components";
import { Default } from "@/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [{ path: "/", element: <Home />, errorElement: <ErrorPage /> }]
  },
  { path: "*", element: <ErrorPage /> }
]);
