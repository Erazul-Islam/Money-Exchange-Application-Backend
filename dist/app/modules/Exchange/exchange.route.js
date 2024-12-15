"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moneyRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../middleWare/validateRequest"));
const exchange_validation_1 = require("./exchange.validation");
const exchange_controller_1 = require("./exchange.controller");
const router = express_1.default.Router();
router.post('/expenses', (0, validateRequest_1.default)(exchange_validation_1.ExchangeValidation.ExchangeValidator), exchange_controller_1.moneyController.AddingExchange);
router.get('/expenses', exchange_controller_1.moneyController.getAllExpense);
router.get("/summary", exchange_controller_1.moneyController.getExpenseSummary);
exports.moneyRoute = router;
