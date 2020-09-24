import home from "./home";
import { APP_IMAGE_API, APP_URL_API} from "../config/env";

export const routes = Object.assign(home)

export const routeApi = APP_URL_API

export const routeImage = APP_IMAGE_API