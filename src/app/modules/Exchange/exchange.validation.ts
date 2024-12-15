import { z } from 'zod';

const ExchangeValidator = z.object({
    name: z.string().optional(),
    currency: z.string().optional(),
    description: z.string().optional(),
    amount: z.number().optional(),
});

export const ExchangeValidation = {
    ExchangeValidator,
};