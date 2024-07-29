import { createBrowserRouter } from "react-router-dom";

import BaseLayout from "../layouts/BaseLayout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";
import New from "../pages/New/New";
import Colors from "../pages/Colors/Colors";
import SingleColor from "../pages/SingleColor/SingleColor";

export const AppRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "new",
        element: <New />,
      },
      {
        path: "colors",
        element: <Colors />,
      },
      {
        path: "colors/:id",
        element: <SingleColor />,
      },
    ],
  },
]);
