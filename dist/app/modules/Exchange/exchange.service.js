"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moneyService = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const exchange_model_1 = require("./exchange.model");
const Exchange_Rate_1 = require("./Exchange.Rate");
const addExchange = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exchange_model_1.MoneyModel.create(payload);
    return result;
});
const getAllExpemseFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exchange_model_1.MoneyModel.find();
    return result;
});
const getSummary = (baseCurrency) => __awaiter(void 0, void 0, void 0, function* () {
    if (!["USD", "EUR", "BDT", "JPY"].includes(baseCurrency)) {
        throw new AppError_1.default(403, "Invalid base currency");
    }
    const expenses = yield exchange_model_1.MoneyModel.find();
    const exchangeRates = yield (0, Exchange_Rate_1.getExchangeRates)();
    if (!exchangeRates[baseCurrency]) {
        throw new AppError_1.default(403, "Base currency not supported");
    }
    const summary = expenses.map((expense) => {
        const rateToBase = exchangeRates[baseCurrency] / exchangeRates[expense.currency];
        const convertedAmount = expense.amount * rateToBase;
        return {
            id: expense._id,
            amount: expense.amount,
            currency: expense.currency,
            description: expense.description,
            convertedAmount: parseFloat(convertedAmount.toFixed(2)),
        };
    });
    const total = summary.reduce((sum, item) => sum + item.convertedAmount, 0);
    return {
        baseCurrency,
        total: parseFloat(total.toFixed(2)),
        expenses: summary,
    };
});
exports.moneyService = {
    addExchange,
    getAllExpemseFromDB,
    getSummary
};
