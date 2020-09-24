import Home from "../../modules/pages/Home";
import About from "../../modules/pages/About";

export default {
    home: {
        path: '/',
        component: Home,
        exact: true
    },
    about: {
        path: '/about-us',
        component: About
    }
}