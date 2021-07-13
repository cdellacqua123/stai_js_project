import { chartData } from './scripts/chart';
import { smaX } from './scripts/sma';
const axios = require('axios');
import ApexCharts from 'apexcharts';
import getData from './data.js';



document.addEventListener("DOMContentLoaded", () => {
    let ticker = 'AAPL';
    async function printing() {
        let data = await getData(axios, ticker);
        console.log(data);
        let candle = chartData(data);
        // let sma = smaX(data, 100);
        let chartView = new ApexCharts(document.querySelector("#chart"), candle);
        // let smaView = new ApexCharts(document.querySelector("#chart"), sma);
        chartView.render();
        // smaView.render();
    }
    printing();
});


// npm run watch