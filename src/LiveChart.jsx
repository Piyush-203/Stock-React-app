import React, { useEffect, useMemo, useState } from 'react'
import { fetchStockData } from './services'
import { formatStockData} from './utils'
import { candleStickOptions } from './constant'
import ReactApexChart from 'react-apexcharts'

const LiveChart = (symbol) => {
    const [stockData, setStockData] = useState({})

    useEffect(() =>
    {
        // fetching the data through the function,which will return
        // promise.
        fetchStockData(symbol).then(data =>
            setStockData(data)
            )
    }, [])

    // refer to utils, so we are memorizise this.
    const seriesData = useMemo(() => formatStockData(stockData), [stockData]) 
        // if value not changed we are using preivous memo value
    return (
        <ReactApexChart 
        // takes data in series object
            series ={
                [
                    {
                        data: seriesData
                    }
                ]
            }
            options = {candleStickOptions}
            type = "candlestick"
        />
    )
}

export default LiveChart;