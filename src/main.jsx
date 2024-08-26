// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "animate.css";
import App from "./App.jsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calculator from "./pages/calculator/Calculator.jsx";
import Verses from "./pages/verses/Verses.jsx";
import Home from "./pages/Home.jsx";
import PageTitle from "./components/PageTitle.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "*",
        element: (
          <>
            <PageTitle title="404" />
            <NotFound />
          </>
        ),
      },
      {
        path: "",
        element: (
          <>
            <PageTitle title="Home" />
            <Home />
          </>
        ),
      },
      {
        path: "calculator",
        element: (
          <>
            <PageTitle title="Calculator" />
            <Calculator />
          </>
        ),
      },
      {
        path: "verses",
        element: (
          <>
            <PageTitle title="Verses" />
            <Verses />
          </>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
