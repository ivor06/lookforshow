import * as Router from "koa-router";
import * as KoaBody from "koa-body";

import {register} from "../../handlers/auth";

const localRouter = new Router();

localRouter
    .post("/register", KoaBody(), register);

const
    localRoutes = () => localRouter.routes(),
    localAllowedMethods = () => localRouter.allowedMethods();

export {
    localRoutes,
    localAllowedMethods
}
