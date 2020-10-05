import Detail from "../../modules/blog/Detail";

export default {
    blog: {
        path: (slug = ':slug') => (`/blog/${ slug }`),
        component: Detail
    }
}