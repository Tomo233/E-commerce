import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import AppLayout from "./pages/AppLayout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
