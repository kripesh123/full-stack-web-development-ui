import home from "./home";
import { APP_IMAGE_API, APP_URL_API} from "../config/env";
import blog from "./blog";
import user from "./user";
import topic from "./topic";
import admin from './admin'

export const routes = Object.assign(home, blog, user, topic, admin)

export const routeApi = APP_URL_API

export const routeImage = APP_IMAGE_API