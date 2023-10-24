import App from "./App";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

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
  {
    path: "/signup",
    exact: true,
    element: <SignUp />,
  },
];
