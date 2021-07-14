import { chartData } from './scripts/chart';
const axios = require('axios');
import ApexCharts from 'apexcharts';
import getData from './data.js';



document.addEventListener("DOMContentLoaded", () => {
    // debugger;

    printing();
    // console.log(test);
    let smaNum = 20
    async function printing() {
        ticker = document.getElementById('ticker').value;
        console.log(ticker);
        let data = await getData(axios, ticker);
        console.log(data);
        let candle = chartData(data, smaNum);
        console.log(candle);
        let chartView = new ApexCharts(document.querySelector("#chart"), candle);
        chartView.render();
    };
    let btn = document.getElementById('submit');
    btn.addEventListener('click', (e) => { printing() });
});

// document.getElementById('submit').addEventListener('click', document.addEventListener());
// npm run watch