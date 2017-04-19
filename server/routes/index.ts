import * as Router from "koa-router";

import {authRoutes, authAllowedMethods} from "./auth/index";

const router = new Router();

router
    .use("/auth", authRoutes(), authAllowedMethods());

const
    routes = () => router.routes(),
    allowedMethods = () => router.allowedMethods();

export {
    routes,
    allowedMethods
}
