import Login from "../../modules/user/Login";
import Signup from "../../modules/user/Signup";

export default {
    login: {
        path: 'user/login',
        component: Login
    },

    signup: {
        path: 'user/singup',
        component: Signup
    }
}