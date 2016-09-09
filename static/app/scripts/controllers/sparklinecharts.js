/**
 *
 * sparklinechartsCtrl
 *
 */

angular
    .module('brood')
    .controller('sparklinechartsCtrl', sparklinechartsCtrl);

function sparklinechartsCtrl($scope){

    /**
     * Sparkline
     */

    $scope.chartData1 = [34, 43, 43, 35, 44, 32, 44, 52, 25];
    $scope.chartOptions1 = {
        type: 'line',
        lineColor: '#f6a821',
        fillColor: '#f6a821',
        width: '150',
        height: '20'
    };

    $scope.chartData2 = [5, 6, 7, 2, 0, -4, -2, 4];
    $scope.chartOptions2 = {
        type: 'bar',
        barColor: '#f6a821',
        negBarColor: '#c6c6c6',
        width: '150',
        height: '20'
    };

    $scope.chartData3 = [10, 2];
    $scope.chartOptions3 = {
        type: 'pie',
        sliceColors: ['#f6a821', '#ffffff'],
        width: '150',
        height: '20'
    };

    $scope.chartData4 = [34, 43, 43, 35, 44, 32, 15, 22, 46, 33, 86, 54, 73, 53, 12, 53, 23, 65, 23, 63, 53, 42, 34, 56, 76, 15, 54, 23, 44];
    $scope.chartOptions4 = {
        type: 'line',
        lineColor: '#f6a821',
        fillColor: '#f6a821',
        width: '150',
        height: '20'
    };

    $scope.chartData5 = [1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1];
    $scope.chartOptions5 = {
        type: 'tristate',
        posBarColor: '#f6a821',
        negBarColor: '#ffffff',
        width: '150',
        height: '20'
    };

    $scope.chartData6 = [4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2, 4, 1, 5, 6, 4, 3, 7, ];
    $scope.chartOptions6 = {
        type: 'discrete',
        lineColor: '#f6a821',
        width: '150',
        height: '20'
    };



}

