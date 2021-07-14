import { chartData } from './scripts/chart';
const axios = require('axios');
import ApexCharts from 'apexcharts';
import getData from './data.js';



document.addEventListener("DOMContentLoaded", () => {
    let ticker = 'TSLA';
    let smaNum = 15
    async function printing() {
        let data = await getData(axios, ticker);
        let candle = chartData(data, smaNum);
        // let sma = smaX(data, 100);
        let chartView = new ApexCharts(document.querySelector("#chart"), candle);
        // let smaView = new ApexCharts(document.querySelector("#chart"), sma);
        chartView.render();
        // smaView.render();
    }
    printing();
});


// npm run watch