import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";

import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter.tsx";

import "./firebase/firebase.ts";

import "./index.scss";

import { ThemeProvider } from "./context/ThemeContext.tsx";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={AppRouter} />
      </PersistGate>
    </ThemeProvider>
  </Provider>
);
