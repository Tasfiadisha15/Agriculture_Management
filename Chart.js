// // Read the data from the CSV file
// const fs = require('fs');
// const d3 = require('d3');

// // Read the CSV file
// const data = fs.readFileSync('./fi.csv', 'utf-8');

// // Parse the CSV data into an array of objects
// const rows = d3.csvParse(data);

// // Convert the data into the format required for graphing
// const graphData = rows.map(row => ({
//     x: row.timestamp,
//     y: row.value
// }));

// // Now that the data is in the correct format, it can be easily graphed using a library such as Chart.js or D3.js.

// fetch('fi.csv')
//     .then(response => response.text())
//     .then(data => {
//         const rows = data.split('\n').slice(1);
//         const weatherData = rows.map(row => {
//             const columns = row.split(',');
//             return {
//                 date: columns[0],
//                 temperature: parseFloat(columns[1])
//             };
//         });

//         // Create the chart
//         const ctx = document.getElementById('myChart').getContext('2d');
//         const chart = new Chart(ctx, {
//             type: 'line',
//             data: {
//                 labels: weatherData.map(data => data.date),
//                 datasets: [{
//                     label: 'Temperature',
//                     data: weatherData.map(data => data.temperature),
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     borderWidth: 1
//                 }]
//             },
//             options: {
//                 scales: {
//                     yAxes: [{
//                         ticks: {
//                             beginAtZero: true
//                         }
//                     }]
//                 }
//             }
//         });
//     });
