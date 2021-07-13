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
            name: 'candle',
            type: 'candlestick',
            data: []
        }, {
            name: 'sma',
            type: 'line',
            data: []
        }]
        ,
        chart: {
            height: 350,
            type: 'line',
        },
        title: {
            text: 'CandleStick Chart',
            align: 'left'
        },
        stroke: {
            width: [3, 1]
        },
        tooltip: {
            shared: true,
            custom: [function ({ seriesIndex, dataPointIndex, w }) {
                return w.globals.series[seriesIndex][dataPointIndex]
            }, function ({ seriesIndex, dataPointIndex, w }) {
                var o = w.globals.seriesCandleO[seriesIndex][dataPointIndex]
                var h = w.globals.seriesCandleH[seriesIndex][dataPointIndex]
                var l = w.globals.seriesCandleL[seriesIndex][dataPointIndex]
                var c = w.globals.seriesCandleC[seriesIndex][dataPointIndex]
                return (
                    ''
                )
            }]
        },
        xaxis: {
            type: 'datetime',
        },
        annotations: {
            xaxis: [
                {
                    x: 'Oct 06 14:00',
                    borderColor: '#00E396',
                    label: {
                        borderColor: '#00E396',
                        style: {
                            fontSize: '12px',
                            color: '#fff',
                            background: '#00E396'
                        },
                        orientation: 'horizontal',
                        offsetY: 7,
                        text: 'Annotation Test'
                    }
                }
            ]
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
        let dateObj = new Date(Date.UTC(yr, mth - 1, day, '00', '00', '00'));
        let dataObj = { 
            x: (dateObj.getTime()),
            y: [open, high, low, close]
        }
        create.series[0].data.push(dataObj);
    }
    // for (let i = data['date'].length - 1; i >= 0; i--) {
    //     let yr = data['date'][i].split('-')[0];
    //     let mth = parseInt(data['date'][i].split('-')[1]);
    //     let day = data['date'][i].split('-')[2];
    //     let open = data['open'][i];
    //     let high = data['high'][i];
    //     let low = data['low'][i];
    //     let close = data['close'][i];
    //     let dateObj = new Date(Date.UTC(yr, mth - 1, day, '00', '00', '00'));
    //     let dataObj = {
    //         x: (dateObj.getTime()),
    //         y: [open, high, low, close]
    //     }
    //     create.series[0].data.push(dataObj);
    // }
    return create;
}