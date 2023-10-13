import App from "./App";
import Login from "./pages/Login";

export const routes = [
  {
    path: "/",
    exact: true,
    element: <App />,
  },
  {
    path: "/login",
    exact: true,
    element: <Login />,
  },
];
