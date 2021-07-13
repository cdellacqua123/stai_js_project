// export function smaX(data, numDays) {
//     let create = {
//         chart: {
//             stroke: {
//                 curve: 'smooth',
//             },
//             type: 'line'
//         }, series: [{
//             data: []
//         }]
//     }
//     for (let i = 0; i < data['date'].length - 1; i++) {
//         let yr = data['date'][i].split('-')[0];
//         let mth = parseInt(data['date'][i].split('-')[1]);
//         let day = data['date'][i].split('-')[2];
//         let dateObj = new Date(yr, mth - 1, day)
//         let dataObj = {
//             x: (dateObj.getUTCFullYear(), dateObj.getUTCMonth(), dateObj.getUTCDate()),
//             y: [135]
//         }
//         create.series[0].data.push(dataObj);
//     }

//     return create;
// }