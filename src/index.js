import { chartData } from './scripts/chart';
const axios = require('axios');
import ApexCharts from 'apexcharts';
import getData from './data.js';



document.addEventListener("DOMContentLoaded", () => {
    let btn = document.getElementById('submit');
    btn.addEventListener('click', (e) => { printing(document.getElementById('ticker').value) });
    printing();
});



async function printing(ticker = 'AAPL') {
    console.log(ticker);
    let smaNum = 10;
    let data = await getData(axios, ticker);
    console.log(data);
    let candle = chartData(data, smaNum);
    let check = document.querySelector("#chart");
    let chartView = {};
    if (check.childNodes.length) {
        check.removeChild(check.firstChild);
        chartView = new ApexCharts(document.querySelector("#chart"), candle);
    } else {
        chartView = new ApexCharts(document.querySelector("#chart"), candle);
    }
    chartView.render();
};

// document.getElementById('submit').addEventListener('click', document.addEventListener());
// npm run watch