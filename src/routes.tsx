import App from "./App";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { v4 as uuid } from "uuid";
import ContactUs from "./pages/ContactUs";

export const routes = [
  {
    path: "/",
    exact: true,
    element: <App />,
    children: [
      {
        id: uuid(),
        path: "dashboard",
        text: "Dashboard",
        // element: <Contact />,
      },
      {
        id: uuid(),
        path: "booking",
        text: "Book a visit",
        // element: <Contact />,
      },
      {
        id: uuid(),
        path: "user-settings",
        text: "User Settings",
        element: <ContactUs />,
      },
    ],
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
