
function newGraph(container,values,time) {
    var dates = [];
    $(time).each(function(i) {
            dates.push(moment(parseInt(time[i] + '000')));
        }
    )
    /* Add a basic data series with six labels and values */
    var data = {
        labels: dates,
        series: [values]
    };

    /* Set some base options (settings will override the default settings in Chartist.js *see default settings*). We are adding a basic label interpolation function for the xAxis labels. */
    var options = {
        showPoint: false,
        lineSmooth: false,
        fullWidth: true,
        axisX: {
            labelInterpolationFnc: function (value) {
                //Hour
                // console.log((value.format('HH') % 2) == 0)
                if (
                    (value.format('HH') % 6) == 0 &&
                    value.format('mm') == 00 &&
                    value.format('ss') == 00
                    
                    ) {
                        // console.log(value.format('ha'))
                        return value.format('ha');
                    }
                else {
                    return '';
                }
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