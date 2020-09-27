import Home from "../../modules/pages/Home";
import About from "../../modules/pages/About";
import Team from "../../modules/pages/Team";
import Advertise from "../../modules/pages/Advertise";
import Product from "../../modules/pages/Product";
import Blog from "../../modules/pages/Blog";

export default {
    home: {
        path: '/',
        component: Home,
        exact: true
    },
    about: {
        path: '/about-us',
        component: About
    },
    team: {
        path: '/team',
        component: Team,
    },
    advertise: {
        path: '/advertise',
        component: Advertise,
    },
    product: {
        path: '/product',
        component: Product
    },
    blog: {
        path: '/blog',
        component: Blog
    }
}