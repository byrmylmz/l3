// chart.js

// Sample data for the graph
let gameData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Wins',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        data: [12, 19, 3, 5, 2, 3]
    }, {
        label: 'Losses',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [5, 9, 7, 8, 4, 6]
    }]
};

// Create the chart
let ctx = document.getElementById('gameChart').getContext('2d');
let gameChart = new Chart(ctx, {
    type: 'line',
    data: gameData,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});