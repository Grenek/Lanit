import "../chart/chart.scss";
import Chart from "chart.js";

var ctx = document.getElementById('myChart').getContext('2d');

var gradientFill = ctx.createLinearGradient(0, 0, 0, 374);
gradientFill.addColorStop(0, "#e2e9f9");
gradientFill.addColorStop(1, "#ffffff");

let dataForChart = [5, 10, 5, 7, 20, 30, 45, 90]

let data = {
    labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"],
    datasets: [{
        fill: true,
        backgroundColor: gradientFill,
        borderColor: 'rgb(13, 73, 204)',
        lineTension: 0,
        data: dataForChart,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#0d49cc",


    }],
}

let options = {

    tooltips: {
        mode: 'index',
        axis: 'x',
        intersect: false,
        displayColors: false,
        callbacks: {
            title: function() {}
        }
    },

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

Chart.defaults.LineWithLine = Chart.defaults.line;
Chart.controllers.LineWithLine = Chart.controllers.line.extend({
   draw: function(ease) {
      Chart.controllers.line.prototype.draw.call(this, ease);

      if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
          console.log(this.chart.data.datasets[0]) //todo начать показывать point при активном tooltip
         var activePoint = this.chart.tooltip._active[0],
             ctx = this.chart.ctx,
             x = activePoint.tooltipPosition().x,
             y = activePoint.tooltipPosition().y,
             topY = this.chart.scales['y-axis-0'].top,
             bottomY = this.chart.scales['y-axis-0'].bottom;
             

         // draw line
         ctx.save();
         ctx.beginPath();
         ctx.moveTo(x, topY);
         ctx.lineTo(x, y - 6);
         ctx.moveTo(x, y + 6);
         ctx.lineTo(x, bottomY);
         ctx.setLineDash([1, 1]);
         ctx.lineWidth = 1;
         ctx.strokeStyle = '#0d49cc';
         ctx.stroke();
         ctx.restore();
      }
   }
});

var myLineChart = new Chart(ctx, {
    type: 'LineWithLine',
    responsive: true,
    maintainAspectRatio: false,
    options: options,
    data: data
});

function updateChart() {
    for (let i=0; i < dataForChart.length; i++){
    myLineChart.data.datasets[0].data[i] = Math.floor(Math.random() * 100) + 1 }
    myLineChart.update();  
}

let massive = document.querySelectorAll(".col-4");
massive.forEach (function(item){
    item.addEventListener("click", () => {
        for (let i = 0; i < massive.length; i++) {
            massive[i].classList.remove("chosen");
        }         
        item.classList.toggle("chosen");
        if (item.classList.contains("column")) {
            updateChart(); 
        };
    });

});
