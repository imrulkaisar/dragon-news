import { createBrowserRouter } from "react-router-dom";
import PageTemplate from "../Layouts/PageTemplate";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import PostTemplate from "../Layouts/PostTemplate";
import CategoryTemplate from "../Layouts/CategoryTemplate";

const MainRouters = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <PostTemplate />,
      },
      {
        path: "/category/:catId",
        element: <CategoryTemplate />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
    ],
  },
]);

export default MainRouters;
