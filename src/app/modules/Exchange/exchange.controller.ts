import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import { moneyService } from "./exchange.service"
import sendResponse from "../../utils/SendResponse"



const AddingExchange = catchAsync(async (req: Request, res: Response) => {
    
    const result = await moneyService.addExchange(req.body)
    sendResponse(res, {
        statusCode: 200,
        status: 200,
        success: true,
        message: 'Expense added Successfully',
        data: result
    })
})

const getAllExpense = async (req: Request, res: Response) => {

    try {
        const result = await moneyService.getAllExpemseFromDB()
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Expense retrieved successfully",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}

const getExpenseSummary = catchAsync(async (req: Request, res: Response) => {
    const { baseCurrency } = req.query;

    const result = await moneyService.getSummary(baseCurrency as string);

    sendResponse(res, {
        statusCode: 200,
        status: 200,
        success: true,
        message: "Expense summary retrieved successfully",
        data: result,
    });
});

export const moneyController = {
    AddingExchange,
    getAllExpense,
    getExpenseSummary
}