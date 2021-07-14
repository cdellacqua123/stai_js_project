import { chartData } from './scripts/chart';
const axios = require('axios');
import ApexCharts from 'apexcharts';
import getData from './data.js';



document.addEventListener("DOMContentLoaded", () => {
    // debugger;
    let btn = document.getElementById('submit');
    btn.addEventListener('click', (e) => { printing(document.getElementById('ticker').value) });

    // console.log(test);
    
    printing();
});

async function printing(ticker = 'AAPL') {
    console.log(ticker);
    let smaNum = 10;
    let data = await getData(axios, ticker);
    console.log(data);
    let candle = chartData(data, smaNum);
    debugger;
    
    let chartView = new ApexCharts(document.querySelector("#chart"), candle);
    chartView.render();
};

// document.getElementById('submit').addEventListener('click', document.addEventListener());
// npm run watch