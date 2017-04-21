import * as Router from "koa-router";

import {localRegister} from "../../middleware/auth";

const localRouter = new Router();

localRouter
    .post("/register", localRegister);

const
    localRoutes = () => localRouter.routes(),
    localAllowedMethods = () => localRouter.allowedMethods();

export {
    localRoutes,
    localAllowedMethods
}
