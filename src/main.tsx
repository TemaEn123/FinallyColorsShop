import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter.tsx";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={AppRouter} />
  </Provider>
);
