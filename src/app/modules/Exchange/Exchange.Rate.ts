export  const getExchangeRates = async (): Promise<{ [key: string]: number }> => {
    return {
        USD: 1,
        EUR: 0.91,
        BDT: 109.5,
        JPY: 140,
    };
};