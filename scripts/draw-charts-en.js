function drawChart() {
    var ctx1 = document.getElementById('disc-chart').getContext('2d');
    var disc = new Chart(ctx1, {
        type: 'pie',
        data: {
            labels: ['Conscientious', 'Stable', 'Dominant', 'Influence'],
            datasets: [{
                data: [40, 32, 14, 14],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(42, 181, 190, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(61, 189, 61, 0.4)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(42, 181, 190, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(61, 189, 61, 1)',
                ],
                borderWidth: 1.5
            }]
        },
        options: {
            maintainAspectRatio: false
        }
    });
    var ctxIE = document.getElementById('mbti-IE-chart').getContext('2d');
    var EI = new Chart(ctxIE, {
        type: 'horizontalBar',
        data: {
            datasets: [{
                    label: 'Extraversion',
                    data: [35],
                    backgroundColor: 'rgba(255, 99, 132, 0.4)',
                },
                {
                    label: 'Introversion',
                    data: [65],
                    backgroundColor: 'rgba(42, 181, 190, 0.4)',
                }
            ]
        },
        options: {
            scales: {
                xAxes: [{
                    stacked: true,
                    display: false,
                }],
                yAxes: [{
                    stacked: true,
                    display: false,
                }]
            }
        }
    })
    var ctxSN = document.getElementById('mbti-SN-chart').getContext('2d');
    var SN = new Chart(ctxSN, {
        type: 'horizontalBar',
        data: {
            datasets: [{
                    label: 'Sensing',
                    data: [75],
                    backgroundColor: 'rgba(255, 206, 86, 0.4)',
                },
                {
                    label: 'Intuition',
                    data: [25],
                    backgroundColor: 'rgba(61, 189, 61, 0.4)',
                }
            ]
        },
        options: {
            scales: {
                xAxes: [{
                    stacked: true,
                    display: false,
                }],
                yAxes: [{
                    stacked: true,
                    display: false,
                }]
            }
        }
    })
    var ctxTF = document.getElementById('mbti-TF-chart').getContext('2d');
    var TF = new Chart(ctxTF, {
        type: 'horizontalBar',
        data: {
            datasets: [{
                    label: 'Thinking',
                    data: [50],
                    backgroundColor: 'rgba(255, 99, 132, 0.4)',
                },
                {
                    label: 'Feeling',
                    data: [50],
                    backgroundColor: 'rgba(42, 181, 190, 0.4)',
                }
            ]
        },
        options: {
            scales: {
                xAxes: [{
                    stacked: true,
                    display: false,
                }],
                yAxes: [{
                    stacked: true,
                    display: false,
                }]
            }
        }
    })
    var ctxJP = document.getElementById('mbti-JP-chart').getContext('2d');
    var JP = new Chart(ctxJP, {
        type: 'horizontalBar',
        data: {
            datasets: [{
                    label: 'Judging',
                    data: [75],
                    backgroundColor: 'rgba(255, 206, 86, 0.4)',
                },
                {
                    label: 'Perceiving',
                    data: [25],
                    backgroundColor: 'rgba(61, 189, 61, 0.4)',
                }
            ]
        },
        options: {
            scales: {
                xAxes: [{
                    stacked: true,
                    display: false,
                }],
                yAxes: [{
                    stacked: true,
                    display: false,
                }]
            }
        }
    })
}