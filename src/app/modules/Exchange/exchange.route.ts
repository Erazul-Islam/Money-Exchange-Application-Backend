import express from 'express'
import validateRequest from '../middleWare/validateRequest';
import { ExchangeValidation } from './exchange.validation';
import { moneyController } from './exchange.controller';


const router = express.Router();

router.post(
    '/expenses',
    validateRequest(ExchangeValidation.ExchangeValidator),  
    moneyController.AddingExchange,
);
router.get(
    '/expenses',
    moneyController.getAllExpense,
);

router.get("/summary",moneyController.getExpenseSummary)

export const moneyRoute = router