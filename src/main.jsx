import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Burgers from "./pages/Burgers.jsx";
import Pizzas from "./pages/Pizzas.jsx";
import Drinks from "./pages/Drinks.jsx";
import CartProvider from "./Components/cart/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/burgers",
        element: <Burgers />,
      },

      {
        path: "/pizzas",
        element: <Pizzas />,
      },

      {
        path: "/bebidas",
        element: <Drinks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
);
