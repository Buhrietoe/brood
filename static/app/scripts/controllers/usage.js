/**
 *
 * usageCtrl
 *
 */

angular
    .module('brood')
    .controller('usageCtrl', usageCtrl);

function usageCtrl($scope, $timeout){

    // Function to generate data
    function setUsage(){
        var usage = Math.floor(Math.random() * 100) + 1;
        return usage;
    }

    var updateInterval = 800;

    function update() {

        $scope.usage1 = setUsage();
        $scope.usage2 = setUsage();
        $scope.usage3 = setUsage();
        $scope.usage4 = setUsage();
        $scope.usage5 = setUsage();
        $scope.usage6 = setUsage();
        $scope.usage7 = setUsage();
        $scope.usage8 = setUsage();
        $scope.usage9 = setUsage();
        $timeout(update, updateInterval);

    }

    // Run update method
    update();

}