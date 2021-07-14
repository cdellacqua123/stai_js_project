import { chartData } from './scripts/chart';
const axios = require('axios');
import ApexCharts from 'apexcharts';
import getData from './data.js';



document.addEventListener("DOMContentLoaded", () => {

    let smaNum = 15
    async function printing() {
        ticker = document.getElementById('ticker').value;
        console.log(ticker);
        let data = await getData(axios, ticker);
        let candle = chartData(data, smaNum);
        let chartView = new ApexCharts(document.querySelector("#chart"), candle);
        chartView.render();
    }
    document.getElementById('submit').addEventListener('click', printing());
});


// npm run watch