var hash = [5,1,10,4]
function newGraph(container,values) {

    /* Add a basic data series with six labels and values */
    var data = {
        series: [{
            data: values
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
                return value;
            }
        },
        axisY: {
            labelInterpolationFnc: function (value) {
                return value;
            }
        },
        showArea: true,
        
    };


    var chart = new Chartist.Line(container, data, options);
}