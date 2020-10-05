import home from "./home";
import { APP_IMAGE_API, APP_URL_API} from "../config/env";
import blog from "./blog";

export const routes = Object.assign(home, blog)

export const routeApi = APP_URL_API

export const routeImage = APP_IMAGE_API