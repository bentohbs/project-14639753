import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import CountriesIndex from "../pages/CountriesIndex";
import CountryPage from "../pages/CountryPage";
import NewsPage from "../pages/NewsPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/countries",
    element: <CountriesIndex />,
  },
  {
    path: "/countries/:slug",
    element: <CountryPage />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
