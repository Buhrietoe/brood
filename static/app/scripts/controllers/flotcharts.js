/**
 *
 * flotChartsCtrl
 *
 */

angular
    .module('brood')
    .controller('flotChartsCtrl', flotChartsCtrl);

function flotChartsCtrl($scope){

    /**
     * Flot
     */

    var data1 = [ [0, 3], [1, 6], [2, 8], [3, 9], [4, 12], [5, 14], [6, 15], [7, 12],
        [8, 14], [9, 12], [10, 11], [11, 10], [12, 14], [13, 16], [14, 15], [15, 15],
        [16, 16], [17, 12], [18, 13], [19, 15], [20, 16], [21, 18], [22, 20], [23, 23],
        [24, 22], [25, 21], [26, 20], [27, 17], [28, 15], [29, 14], [30, 13], [31, 10]];

    $scope.chartFlotData1 = [data1];
    $scope.chartFlotOptions1 = {
        points: {
            show: true,
            fill: true,
            lineWidth: 1,
            fillColor: "#f6a821"
        },
        grid: {
            borderWidth: 0
        }
    };

    $scope.chartFlotData2 = [data1];
    $scope.chartFlotOptions2 = {
        lines: {
            show: true,
            fill: false,
            lineWidth: 2,
            fillColor: "#f6a821"
        },
        grid: {
            borderWidth: 0
        }
    };

    $scope.chartFlotData3 = [
        {
            label: "bar",
            data: [ [1, 12], [2, 14], [3, 18], [4, 24], [5, 28], [6, 22],[7, 20], [8, 18], [9, 17], [10, 13], [11, 15], [12, 17] ]
        }
    ];
    $scope.chartFlotOptions3 = {
        bars: {
            show: true,
            fill: false,
            lineWidth: 2,
            fillColor: "#f6a821"
        },
        legend: {
            show: false
        },
        grid: {
            borderWidth: 0
        }
    };

    $scope.chartFlotData4 = [
        {
            label: "bar",
            data: [ [1, 12], [2, 14], [3, 18], [4, 24], [5, 28], [6, 22],[7, 20], [8, 18], [9, 17], [10, 13], [11, 15], [12, 17] ]
        }
    ];
    $scope.chartFlotOptions4 = {
        lines: {
            show: true,
            steps: true
        },
        grid: {
            borderWidth: 0
        }
    };

    $scope.chartFlotData5 = [
        {
            data: [ [1, 4], [2, 5], [3, 7], [4, 4], [5, 8], [6, 9],[7, 11], [8, 10], [9, 8], [10, 5], [11, 4], [12, 3] ]
        }
    ];
    $scope.chartFlotOptions5 = {
        series: {
            splines: {
                show: true,
                tension: 0.4,
                lineWidth: 2,
                fill: false
            },
        },
        legend: {
            show: false
        },
        grid: {
            borderWidth: 0
        }
    };

    $scope.chartFlotData6 = [
        {
            data: [ [1, 4], [2, 5], [3, 7], [4, 4], [5, 8], [6, 9],[7, 11], [8, 10], [9, 8], [10, 5], [11, 4], [12, 3] ]
        }
    ];
    $scope.chartFlotOptions6 = {
        lines: {
            show: true,
            fill: 0.1
        },
        grid: {
            borderWidth: 0
        }
    };


}

