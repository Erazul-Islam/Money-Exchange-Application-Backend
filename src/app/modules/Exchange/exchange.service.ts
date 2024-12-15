import AppError from "../../errors/AppError"
import { TExchange } from "./exchange.interface"
import { MoneyModel } from "./exchange.model"
import { getExchangeRates } from "./Exchange.Rate"


const addExchange = async (payload: TExchange) => {
    const result = await MoneyModel.create(payload)
    return result
}

const getAllExpemseFromDB = async () => {
    const result = await MoneyModel.find()
    return result
}

const getSummary = async (baseCurrency: string) => {

    if (!["USD", "EUR", "BDT", "JPY"].includes(baseCurrency)) {
        throw new AppError(403, "Invalid base currency");
    }

    const expenses = await MoneyModel.find();
    const exchangeRates = await getExchangeRates()

    if (!exchangeRates[baseCurrency]) {
        throw new AppError(403, "Base currency not supported");
    }

    const summary = expenses.map((expense) => {
        const rateToBase =
            exchangeRates[baseCurrency] / exchangeRates[expense.currency];
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


}

export const moneyService = {
    addExchange,
    getAllExpemseFromDB,
    getSummary
}