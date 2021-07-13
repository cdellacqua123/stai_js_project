// import getData from '../data.js';
export function retreiveData(data) {
    // let attempt = data['date'][0].split('-');
    let create = {
            chart: {
                type: 'candlestick'
            }, series: [{
                data: []
            }]
        };
    for (let i = 0; i < data['date'].length - 1; i++) {
        let yr = data['date'][i].split('-')[0];
        let mth = parseInt(data['date'][i].split('-')[1]);
        let day = data['date'][i].split('-')[2];
        let open = data['open'][i]
        let high = data['high'][i]
        let low = data['low'][i]
        let close = data['close'][i]
        let dateObj = new Date(yr, mth - 1, day)
        let dataObj = { x: (dateObj.getUTCFullYear(), dateObj.getUTCMonth(), dateObj.getUTCDate()), 
            y: [open, high, low, close] }
        create.series[0].data.push(dataObj);
    }
    return create;
}
// let options = retreiveData();
// data = retreiveData();



// export default options;
