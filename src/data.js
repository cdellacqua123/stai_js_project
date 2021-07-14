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




export default async function getData(axios, ticker) {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker}&apikey=QYD67QW2GZO16DQF`;
    let pull = axios.get(url) 
        .then((res) => {
        if (!res) {
            console.log('Error:');
        } else if (res.status !== 200) {
            console.log('Status:', res.status);
        } else {
            // data is successfully parsed as a JSON object:
            return res;
        }
    });
    let arg = {
        'date': [], 'open': [], 'high': [], 'low': [], 'close': [],
        'adjClose': [], 'vol': []
    };
    let response = await pull;
    let table = await response.data['Time Series (Daily)'];
    for (let date in table) {
        arg['date'].push(date);
        arg['open'].push(table[date]['1. open']);
        arg['high'].push(table[date]['2. high']);
        arg['low'].push(table[date]['3. low']);
        arg['close'].push(table[date]['4. close']);
        arg['adjClose'].push(table[date]['5. adjusted close']);
        arg['vol'].push(table[date]['6. volume']);
        };
    return arg;
};
