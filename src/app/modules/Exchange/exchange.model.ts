import { Schema, model } from "mongoose";
import { TExchange } from "./exchange.interface";

const ExchangeSchema = new Schema<TExchange>(
    {
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
            enum : ["USD","EUR","BDT","JPY"]
        },
    },
    {
        timestamps: true,
    },
);

export const MoneyModel = model<TExchange>('Money_Exchange', ExchangeSchema);