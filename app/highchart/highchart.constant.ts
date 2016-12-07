
import {Highcharts} from "angular2-highcharts/dist/HighchartsWrapper";
export class HighchartConstant{
    chartOptions: any;

    constructor(){
        this.chartOptions = <any>{
            title: {
                text: 'Dashboard'
            },
            xAxis: [{
                type: 'datetime',
                label: {
                    formatter: function () {
                        return Highcharts.dateFormat('%a %d %b %H:%M:%S', this.value);
                    }
                }
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}°C',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                title: {
                    text: 'Temperature',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                }
            }, { // Secondary yAxis
                title: {
                    text: 'Speed',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value} m/s',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 100,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            series: [{
                name: 'Speed',
                type: 'column',
                yAxis: 1,
                tooltip: {
                    valueSuffix: ' m/s'
                }

            }, {
                name: 'Temperature',
                type: 'spline',
                tooltip: {
                    valueSuffix: '°C'
                },
                data: []
            }]
        }
    }
}