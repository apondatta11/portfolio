import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root.jsx";
import Home from "../Pages/Home.jsx";
import ProjectDetail from "@/Pages/ProjectDetail.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/project/:id",
        Component: ProjectDetail,
      },
    ],
  },
]);
