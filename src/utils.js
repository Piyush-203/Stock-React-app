
export const formatStockData = (stockData) => {
    const formatData = []
    if(stockData['Weekly Adjusted Time Series ']){
        // This will iterate through every entry of the object.
        Object.entries(
            stockData['Weekly Adjusted Time Series ']
        ).map( // then map to the value
            ([key, value]) =>
            {
                formatData.push({
                    x: key,
                    y: [
                    value['1. open'],
                    value['2. high'],
                    value['3. low'],
                    value['4. close'],
                    ]
                })
            }
        )
    }
    return formatData //since this will return the high data, whic will slow down the app.
}