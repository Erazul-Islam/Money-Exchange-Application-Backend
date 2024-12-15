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
exports.moneyController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const exchange_service_1 = require("./exchange.service");
const SendResponse_1 = __importDefault(require("../../utils/SendResponse"));
const AddingExchange = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exchange_service_1.moneyService.addExchange(req.body);
    (0, SendResponse_1.default)(res, {
        statusCode: 200,
        status: 200,
        success: true,
        message: 'Expense added Successfully',
        data: result
    });
}));
const getAllExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield exchange_service_1.moneyService.getAllExpemseFromDB();
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Expense retrieved successfully",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getExpenseSummary = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { baseCurrency } = req.query;
    const result = yield exchange_service_1.moneyService.getSummary(baseCurrency);
    (0, SendResponse_1.default)(res, {
        statusCode: 200,
        status: 200,
        success: true,
        message: "Expense summary retrieved successfully",
        data: result,
    });
}));
exports.moneyController = {
    AddingExchange,
    getAllExpense,
    getExpenseSummary
};
