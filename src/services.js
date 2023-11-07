const API_KEY =import.meta.env.VITE_API_KEY || `D8YD30T9192GG2CL`

// function which will het the data for us.
export const fetchStockData = async (symbol)=>{
    const resp = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${API_KEY}`)
    const data = await resp.json()
    return data
}
