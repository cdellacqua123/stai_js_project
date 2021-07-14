export default function smaX(data, numDays) {
    let sma = [];
    for (let i = 0; i < data['date'].length; i++) {
        let yr = data['date'][i].split('-')[0];
        let mth = data['date'][i].split('-')[1];
        let day = data['date'][i].split('-')[2];
        let sum = 0;
        if ((i + numDays) > data['date'].length) {
            let dataObj = {
                x: (`${mth}-${day}-${yr}`),
                y: null
            };
            sma.push(dataObj);
        } else {
            for (let y = i; y < i + numDays; y++) {
                sum += parseInt(data['close'][y])
            }
            let dataObj = {
                x: (`${mth}-${day}-${yr}`),
                y: Math.floor(sum / numDays)
            }
            sma.push(dataObj);
        }

    }
    return sma;
}

// for (let i = data['date'].length - 1; i >= 0; i--) {

// for (let y = i; y > i - numDays; y--) {

// 