import { AreaChartOutlined, HomeOutlined, NumberOutlined } from "@ant-design/icons";
import Home from "./pages/Home.jsx";
import Coins from "./pages/Coins.jsx";
import CoinsPaged from "./pages/CoinsPaged.jsx";

export const routes = [
  {
    path: "/",
    label: "Home",
    icon: <HomeOutlined />,
    element: <Home />
  },
  {
    path: "/coins",
    label: "Quote",
    icon: <AreaChartOutlined />,
    element: <Coins />
  }, // пів години щоб пофіксити помилку (я забув кому)
  {
    path: "/coins-paged",
    label: "Pagination",
    icon: <NumberOutlined />,
    element: <CoinsPaged />
  }
];
