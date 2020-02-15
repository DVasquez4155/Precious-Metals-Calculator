var hash = document.location.hash.substr(1).split(',');
$(hash).each(function(i) {
    hash[i] = parseInt(hash[i]);
})
/* Add a basic data series with six labels and values */
var data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    series: [{
        data: hash
    }]
};

/* Set some base options (settings will override the default settings in Chartist.js *see default settings*). We are adding a basic label interpolation function for the xAxis labels. */
var options = {
    showPoint: false,
    scales: {
        xAxes: [{
            gridLines: {
                drawBorder: true,
                display: false,
                lineWidth: 0
                
            }
        }],
        yAxes: [{
            gridLines: {
                display:false
            }   
        }]
    },
    axisX: {
        labelInterpolationFnc: function (value) {
            return '';
        }
    },
    axisY: {
        labelInterpolationFnc: function (value) {
            return '';
        }
    },
    showArea: true
};


/* Initialize the chart with the above settings */
var chart = new Chartist.Line('#my-chart', data, options);