import smaX from './sma.js';
// export function chartData(data) {
//     let create = {
//             chart: {
//                 type: 'candlestick'
//             }, series: [{
//                 data: []
//             }]
//         };
//     // for (let i = 0; i < data['date'].length - 1; i++) {
//     for (let i = data['date'].length - 1; i >= 0; i--) {
//         let yr = data['date'][i].split('-')[0];
//         let mth = parseInt(data['date'][i].split('-')[1]);
//         let day = data['date'][i].split('-')[2];
//         let open = data['open'][i]
//         let high = data['high'][i]
//         let low = data['low'][i]
//         let close = data['close'][i]
//         let dateObj = new Date(yr, mth - 1, day)
//         let dataObj = { x: (dateObj.getUTCFullYear(), dateObj.getUTCMonth(), dateObj.getUTCDate()), 
//             y: [open, high, low, close] }
//         create.series[0].data.push(dataObj);
//     }
//     return create;
// }

export function chartData(data) {
    let create = {
        series: [{
            name: 'sma',
            type: 'line',
            data: []
        }, {
            name: 'candle',
            type: 'candlestick',
            data: []

        }],
        chart: {
            height: 350,
            type: 'line',
        },
        title: {
            text: 'CandleStick Chart',
            align: 'left'
        },
        stroke: {
            width: [4, 1]
        },
        
    };
    // for (let i = 0; i < data['date'].length - 1; i++) {
    for (let i = data['date'].length - 1; i >= 0; i--) {
        let yr = data['date'][i].split('-')[0];
        let mth = parseInt(data['date'][i].split('-')[1]);
        let day = data['date'][i].split('-')[2];
        let open = data['open'][i];
        let high = data['high'][i];
        let low = data['low'][i];
        let close = data['close'][i];
        let dataObj = { 
            x: (`${mth}-${day}-${yr}`),
            y: [open, high, low, close]
        }
        create.series[1].data.push(dataObj);
    }
    let smaObj = smaX(data, 20)
    smaObj.forEach(obj => 
        create.series[0].data.push(obj)
    );
    return create;
}