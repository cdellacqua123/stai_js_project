
// export default async function getData() {
//     const response = await fetch('../daily_adjusted_IBM.csv')
//     const testResp = await response.text();
//     let table = testResp.split('\n').slice(1);
//     let arg = {
//         'date': [], 'open': [], 'high': [], 'low': [], 'close': [],
//         'adjClose': [], 'vol': []};
//     table.forEach((row, i) => {
//         const col = row.split(',')
//         arg['date'].push(col[0]);
//         arg['open'].push(col[1]);
//         arg['high'].push(col[2]);
//         arg['low'].push(col[3]);
//         arg['close'].push(col[4]);
//         arg['adjClose'].push(col[5]);
//         arg['vol'].push(col[6]);
//     });
//     return arg;
// }
// async await; possibly promises; response.send
// 11 === Real Data, will make pull request
// export default async function getData(axios) {
//     const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=QYD67QW2GZO16DQF';
//     let pull = axios.get(url) 
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
//     let arg = {
//         'date': [], 'open': [], 'high': [], 'low': [], 'close': [],
//         'adjClose': [], 'vol': []
//     };
//     console.log(pull)
//     let table = pull;
    
//     table.forEach((row) => {
//         const col = row.split(',')
//         arg['date'].push(col[0]);
//         arg['open'].push(col[1]);
//         arg['high'].push(col[2]);
//         arg['low'].push(col[3]);
//         arg['close'].push(col[4]);
//         arg['adjClose'].push(col[5]);
//         arg['vol'].push(col[6]);
//         });

//     return arg;
// };


// let test = getData();
// export default test;