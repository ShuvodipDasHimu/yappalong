import {
  createBrowserRouter,
} from "react-router";
import RootLayout from '../layouts/RootLayout'
import NotFound from "../pages/NotFound";

let router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {}
    ]
  },
  {
    path: "*",
    Component: NotFound
  }
]);

export default router;