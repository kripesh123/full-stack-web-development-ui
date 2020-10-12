// App Imports
import List from "../../modules/topic/List";

// Topic routes
export default {
    list: {
        path: '/topics',
        component: List,
        auth: true
    }
}