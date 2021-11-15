var ctx_stat = document.getElementById('stat');
ctx_stat.height = 450;
ctx_stat.width = 320; 

var graphicStatGraph = document.getElementById("stat").getContext("2d");

var chart = new Chart(graphicStatGraph, {
    type: 'bar',
    data: {
        labels: ["ДЦП", "Аутизм", "ЗРР", "СВД с гиперактивностью и ЗПР", "Пр. заболевания (тики, энурез и т.п.)"],

		datasets: [ {
			label: 'Количество (в %)',
			backgroundColor: "rgb(175, 210, 0)",
			data: [30, 30, 20, 10, 10],
		}]
    },

    	options: {
			animation:false,
			responsive: true,

		legend: {
				position: 'top',
				labels: {
					fontColor: '#000',
					fontSize: 14,
					usePointStyle: true
				},
			},

		tooltips: { 
				titleFontSize: 15,
				bodyFontSize: 15
			},

		title: {
				display: true,
				text: 'СТАТИСТИКА ОБРАЩЕНИЙ (в %):',
				fontSize: 16
			},

		scales: {
			xAxes: [{
				ticks: {
					fontSize: 15,
				},
			}],
				
			yAxes: [{
				ticks: {
					beginAtZero: true,
					stepSize: 10,
					fontSize: 15,
				},
			}]
			}
		}
});


var ctx_dcp = document.getElementById('dcp');
ctx_dcp.height = 450;
ctx_dcp.width = 320; 

var graphicDcpGraph = document.getElementById("dcp").getContext("2d");

var chart = new Chart(graphicDcpGraph, {
    type: 'doughnut',
    data: {
        labels: ["Выраженная положительная динамика", "Умеренная положительная динамика", "Сомнительный результат"],

		datasets: [{
			backgroundColor: ["rgb(0, 170, 234)", "rgb(175, 210, 0)", "rgb(204, 204, 204)"],
			data: [60, 30, 10],
		}]
    },

    	options: {
			animation:false,
			responsive: true,


		legend: {
				position: 'top',

				labels: {
					fontColor: '#000',
					fontSize: 14,
					usePointStyle: true
				},
			},

		tooltips: { 
				titleFontSize: 15,
				bodyFontSize: 15
			},

		title: {
				display: true,
				text: 'ЭФФЕКТИВНОСТЬ ЛЕЧЕНИЯ ДЦП (в %):',
				fontSize: 16
		}
	}
});


var ctx_aut = document.getElementById('aut');
ctx_aut.height = 450;
ctx_aut.width = 320; 

var graphicAutGraph = document.getElementById("aut").getContext("2d");

var chart = new Chart(graphicAutGraph, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["Выраженная положительная динамика", "Умеренная положительная динамика", "Сомнительный результат"],

		datasets: [{
			backgroundColor: ["rgb(0, 170, 234)", "rgb(175, 210, 0)", "rgb(204, 204, 204)"],
			data: [70, 25, 5],
		}]
    },

    // Configuration options go here
    		options: {
			animation:false,
			responsive: true,

			legend: {
				position: 'top',
				labels: {
					fontColor: '#000',
					fontSize: 14,
					usePointStyle: true
				},
			},

			tooltips: { 
				titleFontSize: 15,
				bodyFontSize: 15
			},

			title: {
				display: true,
				text: 'ЭФФЕКТИВНОСТЬ ЛЕЧЕНИЯ АУТИЗМА (в %):',
				fontSize: 16
			}
		}
});


var ctx_sdv = document.getElementById('sdv');
ctx_sdv.height = 450;
ctx_sdv.width = 320; 

var graphicSDVGraph = document.getElementById("sdv").getContext("2d");

var chart = new Chart(graphicSDVGraph, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["Выраженная положительная динамика", "Умеренная положительная динамика", "Сомнительный результат"],

		datasets: [{
			backgroundColor: ["rgb(0, 170, 234)", "rgb(175, 210, 0)", "rgb(204, 204, 204)"],
			data: [70, 20, 10],
		}]
    },

    // Configuration options go here
    		options: {
			animation: false,
			responsive: true,

			legend: {
				position: 'top',
				labels: {
					fontColor: '#000',
					fontSize: 14,
					usePointStyle: true
				},
			},

			tooltips: { 
				titleFontSize: 15,
				bodyFontSize: 15
			},

			title: {
				display: true,
				text: 'ЭФФЕКТИВНОСТЬ ЛЕЧЕНИЯ СДВ, ЗПР (в %):',
				fontSize: 16
			}
		}
});



var ctx_zrr = document.getElementById('zrr');
ctx_zrr.height = 450;
ctx_zrr.width = 320; 

var graphicZRRGraph = document.getElementById("zrr").getContext("2d");

var chart = new Chart(graphicZRRGraph, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["Выраженная положительная динамика", "Умеренная положительная динамика", "Сомнительный результат"],

		datasets: [{
			backgroundColor: ["rgb(0, 170, 234)", "rgb(175, 210, 0)", "rgb(204, 204, 204)"],
			data: [90, 5, 5],
		}]
    },

    // Configuration options go here
    		options: {
			animation:false,
			responsive: true,

			legend: {
				position: 'top',
				labels: {
					fontColor: '#000',
					fontSize: 14,
					usePointStyle: true
				},
			},

			tooltips: { 
				titleFontSize: 15,
				bodyFontSize: 15
			},

			title: {
				display: true,
				text: 'ЭФФЕКТИВНОСТЬ ЛЕЧЕНИЯ ЗРР (в %):',
				fontSize: 16
			}
		}
});

var ctx_tiki = document.getElementById('tiki');
ctx_tiki.height = 450;
ctx_tiki.width = 320; 

var graphicTikiGraph = document.getElementById("tiki").getContext("2d");

var chart = new Chart(graphicTikiGraph, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["Выраженная положительная динамика", "Умеренная положительная динамика", "Сомнительный результат"],

		datasets: [{
			backgroundColor: ["rgb(0, 170, 234)", "rgb(175, 210, 0)", "rgb(204, 204, 204)"],
			data: [85, 10, 5],
		}]
    },

    // Configuration options go here
    		options: {
			animation:false,
			responsive: true,

			legend: {
				position: 'top',
				labels: {
					fontColor: '#000',
					fontSize: 14,
					usePointStyle: true
				},
			},

			tooltips: { 
				titleFontSize: 15,
				bodyFontSize: 15
			},

			title: {
				display: true,
				text: 'ТИКИ (логоневроз, энурез и др.) (в %):',
				fontSize: 16
			}
		}
});