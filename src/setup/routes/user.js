import Login from "../../modules/user/Login";
import Signup from "../../modules/user/Signup";
import Profile from "../../modules/user/Profile";

export default {
    login: {
        path: '/user/login',
        component: Login
    },

    signup: {
        path: '/user/signup',
        component: Signup
    },
    profile: {
        path: '/user/profile',
        component: Profile,
        auth: true
    }
}