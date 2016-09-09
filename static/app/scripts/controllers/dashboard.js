/**
 *
 * dashboardCtrl
 *
 */

angular
    .module('brood')
    .controller('dashboardCtrl', dashboardCtrl);

function dashboardCtrl($scope){


    /**
     * Sparkline
     */

    $scope.chartData1 = [20, 34, 43, 43, 35, 44, 32, 44, 52, 45];
    $scope.chartOptions1 = {
        type: 'line',
        lineColor: '#FFFFFF',
        lineWidth: 3,
        fillColor: '#404652',
        height: 47,
        width: '100%'
    };

    $scope.chartData2 = [-8, 2, 4, 3, 5, 4, 3, 5, 5, 6, 3, 9, 7, 3, 5, 6, 9, 5, 6, 7, 2, 3, 9, 6, 6, 7, 8, 10, 15, 16, 17, 15];
    $scope.chartOptions2 = {
        type: 'line',
        lineColor: '#fff',
        lineWidth: 3,
        fillColor: '#393D47',
        height: 70,
        width: '100%'
    };

    $scope.chartData3 = [4, 2];
    $scope.chartOptions3 = {
        type: 'pie',
        sliceColors: ['#f7af3e', '#404652']
    };

    $scope.chartData4 = [3, 2];
    $scope.chartOptions4 = {
        type: 'pie',
        sliceColors: ['#f7af3e', '#404652']
    };

    $scope.chartData5 = [4, 1];
    $scope.chartOptions5 = {
        type: 'pie',
        sliceColors: ['#f7af3e', '#404652']
    };

    $scope.chartData6 = [3, 5];
    $scope.chartOptions6 = {
        type: 'pie',
        sliceColors: ['#f7af3e', '#404652']
    };

    $scope.chartData7 = [6, 2];
    $scope.chartOptions7 = {
        type: 'pie',
        sliceColors: ['#f7af3e', '#404652']
    };

    $scope.chartData8 = [10, 34, 13, 33, 35, 24, 32, 24, 52, 35];
    $scope.chartOptions8 = {
        type: 'line',
        lineColor: '#FFFFFF',
        lineWidth: 3,
        fillColor: '#f7af3e',
        height: 75,
        width: '100%'
    };

    /**
     * Flot
     */

    var data1 = [ [0, 16], [1, 24], [2, 11], [3, 7], [4, 10], [5, 15], [6, 24], [7, 30] ];
    var data2 = [ [0, 26], [1, 44], [2, 31], [3, 27], [4, 36], [5, 46], [6, 56], [7, 66] ];

    $scope.chartFlotData = [data2, data1];
    $scope.chartFlotOptions = {
        series: {
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 1,
                fill: 1
            }
        },
        grid: {
            tickColor: "#404652",
            borderWidth: 0,
            borderColor: '#404652',
            color: '#404652'
        },
        colors: [ "#f7af3e","#DE9536"]
    };

}