"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneyModel = void 0;
const mongoose_1 = require("mongoose");
const ExchangeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true,
        enum: ["USD", "EUR", "BDT", "JPY"]
    },
}, {
    timestamps: true,
});
exports.MoneyModel = (0, mongoose_1.model)('Money_Exchange', ExchangeSchema);
