export default function smaX(data, numDays) {
    let sma = [];
    for (let i = 0; i < data['date'].length - 1; i++) {
        let yr = data['date'][i].split('-')[0];
        let mth = data['date'][i].split('-')[1];
        let day = data['date'][i].split('-')[2];
        let sum = 0;
        // debugger
        if ((i + numDays) > data['date'].length - 1) {
            let dataObj = {
                x: (`${mth}-${day}-${yr}`),
                y: null
            };
            console.log('help')
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
    console.log(sma)
    return sma;
}

// for (let i = data['date'].length - 1; i >= 0; i--) {

// for (let y = i; y > i - numDays; y--) {

// 