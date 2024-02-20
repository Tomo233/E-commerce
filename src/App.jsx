import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import AppLayout from "./pages/AppLayout";
import Error from "./pages/Error";
import Cart from "./features/cart/Cart";
import AllProducts from "./features/products/AllProducts";
import Product from "./features/products/Product";
import ProductsOfCertainCategory from "./features/products/ProductsOfCertainCategory";
import CheckOut from "./features/order/CheckOut";

// Define your route configuration
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/",
        element: <CheckOut />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/products/:productId",
        element: <Product />,
      },
      {
        path: "/products/category/:category",
        element: <ProductsOfCertainCategory />,
      },
      {
        path: "/order/checkOut",
        element: <CheckOut />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
