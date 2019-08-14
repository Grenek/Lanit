import "../chart/chart.scss";
import Chart from "chart.js";

var ctx = document.getElementById('myChart').getContext('2d');

var gradientFill = ctx.createLinearGradient(0, 0, 0, 374);
gradientFill.addColorStop(0, "#e2e9f9");
gradientFill.addColorStop(1, "#ffffff");
console.log(gradientFill);

let data = {
    labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"],
    datasets: [{
        fill: true,
        backgroundColor: gradientFill,
        borderColor: 'rgb(13, 73, 204)',
        lineTension: 0,
        data: [5, 10, 5, 7, 20, 30, 45, 90],
        pointRadius: 0
    }]
}

let options = {
    legend: {
        display: false
    },

    scales: {
        xAxes: [{
            ticks: {
                padding: 29,
                fontSize: 14,
                fontColor: "#848e99",
            },
            gridLines: {
                color: "#848e99",
                height: 20,
                display: false
            }
        }],
        yAxes: [{
            ticks: {
                min: 0,
                max: 100,
                stepSize: 20,
                padding: 29,
                fontSize: 14,
                fontColor: "#848e99",
                callback: function (label, index, labels) {
                    switch (label) {
                        case 0:
                            return '0%';
                        case 20:
                            return '20%';
                        case 40:
                            return '40%';
                        case 60:
                            return '60%';
                        case 80:
                            return '80%';
                        case 100:
                            return '100%';
                    }
                }
            },
            gridLines: {
                drawBorder: false,
                display: false
            }
        }]
    }
}

var myLineChart = new Chart(ctx, {
    type: 'line',
    responsive: true,
    maintainAspectRatio: false,

    options: options,
    data: data
});


