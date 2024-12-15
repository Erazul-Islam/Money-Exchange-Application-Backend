import { Router } from "express";
import { moneyRoute } from "../modules/Exchange/exchange.route";

const router = Router();

const moduleRoutes = [
    {
        path: '/money',
        route: moneyRoute,
    }

]

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;