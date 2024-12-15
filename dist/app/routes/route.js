"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const exchange_route_1 = require("../modules/Exchange/exchange.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/money',
        route: exchange_route_1.moneyRoute,
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
