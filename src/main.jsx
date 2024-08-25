// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "animate.css";
import App from "./App.jsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calculator from "./pages/calculator/Calculator.jsx";
import Verses from "./pages/verses/Verses.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "calculator",
        element: <Calculator />,
      },
      {
        path: "verses",
        element: <Verses />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
