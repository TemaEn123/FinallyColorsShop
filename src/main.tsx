import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={AppRouter}></RouterProvider>
);
