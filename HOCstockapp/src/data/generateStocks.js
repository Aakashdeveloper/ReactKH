export default function generateStocks(){
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * (900-100+1))+500

        setTimeout(() => {
            const StockName = [
                "JSW Steel",
                "ITC",
                "Wipro",
                "Bank Of India",
                "Tata Power",
                "IRCTC",
                "State Bank Of India",
                "GATI",
                "Tata TinPlate",
                "ONGC",
                "Punjab National Bank",
                "NHPC",
                "BPCL",
                "Zomato",
                "IRFC",
                "SAL",
                "Suzlon"
            ]

            let stocks = [];

            for(let i=0;i<StockName.length;i++){
                let stockPrice = Math.floor(Math.random() *(1000-10+1))+10;
                let variation = Math.floor(Math.random() *(5 - -5 +1))-5;

                stocks.push({
                    company: StockName[i],
                    price:stockPrice,
                    variation:variation
                })
            }

            resolve(stocks);
        },delay)
    })
}