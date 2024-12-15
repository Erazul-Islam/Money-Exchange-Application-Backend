"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeValidation = void 0;
const zod_1 = require("zod");
const ExchangeValidator = zod_1.z.object({
    name: zod_1.z.string().optional(),
    currency: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    amount: zod_1.z.number().optional(),
});
exports.ExchangeValidation = {
    ExchangeValidator,
};
