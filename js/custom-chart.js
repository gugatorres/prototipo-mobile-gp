var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"],
        datasets: [{
            label: 'Teste de Gráfico 01',
            data: [30, 80, 50, 100, 30, 80, 50, 100, 50, 120, 50, 30],
            backgroundColor: [
                '#00618b',
                '#590052',
                '#97138b',
                '#00be82',
                '#00618b',
                '#590052',
                '#97138b',
                '#00be82',
                '#00618b',
                '#590052',
                '#97138b',
                '#00be82'
            ],
            borderColor: [
                '#00618b',
                '#590052',
                '#97138b',
                '#00be82',
                '#00618b',
                '#590052',
                '#97138b',
                '#00be82',
                '#00618b',
                '#590052',
                '#97138b',
                '#00be82'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});