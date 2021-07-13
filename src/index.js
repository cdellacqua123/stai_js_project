import { retreiveData } from './scripts/chart';
const axios = require('axios');
import ApexCharts from 'apexcharts';
import getData from './data.js';



document.addEventListener("DOMContentLoaded", () => {
    
    async function printing() {
        let data = await getData(axios);
        // console.log(data);
        let charty = retreiveData(data);
        debugger
        let chartView = new ApexCharts(document.querySelector("#chart"), charty);
        chartView.render();
    }
    printing();
});


