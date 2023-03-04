import Home from "../page/Home";
import Following from "../page/Following";
import Search from "../page/Search";
import Profile from "../page/Profile";
import Upload from "../page/Upload";
import HeaderOnly from "../Layout/HeaderOnly";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/search", component: Search, layout: null },
  { path: "/upload", component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
