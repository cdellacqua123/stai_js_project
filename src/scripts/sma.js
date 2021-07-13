export default function smaX(data, numDays) {
    let sma = [];
    for (let i = data['date'].length - 1; i >= 0; i--) {
        let yr = data['date'][i].split('-')[0];
        let mth = parseInt(data['date'][i].split('-')[1]);
        let day = data['date'][i].split('-')[2];
        debugger
        let sum = 0;
        for (let y = i; y > i - numDays; y--) {
            sum += parseInt(data['close'][y])
        }
        let dataObj = {
            x: (`${mth}-${day}-${yr}`),
            y: sum
        }
        sma.push(dataObj);
    }

    return sma;
}