const demoUrl = 'https://www.metaweather.com/api/location/search/?query=san';

'use strict';
const axios = require('axios');




// async await; possibly promises; response.send
// 11 === Real Data, will make pull request
// document.addEventListener("DOMContentLoaded", () => {
//     const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=QYD67QW2GZO16DQF';
//     console.log(demoUrl);
//     let data = axios.get(url) 
//         .then((res) => {
//         if (!res) {
//             console.log('Error:');
//         } else if (res.status !== 200) {
//             console.log('Status:', res.status);
//         } else {
//             // data is successfully parsed as a JSON object:
//             console.log("else");
//             return res;
//         }
//     });
//     async function getData () {
//         data = await data;
//         console.log(data);
//     }
//     getData();
// });

// 34 === tester, pulls from CSV;
document.addEventListener("DOMContentLoaded", () => {
    
    async function printData() {
        const response = await fetch('../daily_adjusted_IBM.csv')
        const data = await response.text();
        let table = data.split('\n').slice(1);
        table.forEach(row => {
            const col = row.split(',')
            const date = col[0];
            const open = col[1];
            const high = col[2];
            const low = col[3];
            const close = col[4];
            const adjClose = col[5];
            const vol = col[6];
            console.log(date);
        })
        
        
        ;
        // for (let i = 0; i < data.lenth; i++) {
        //     console.log(data[i]);
        // }
        
    }
    printData();


});