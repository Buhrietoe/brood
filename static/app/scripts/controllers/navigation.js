

/**
 *
 * navigationCtrl
 *
 */

angular
    .module('brood')
    .controller('navigationCtrl', navigationCtrl);

function navigationCtrl($scope,$rootScope){

    $scope.isSelected = function(navId, navSelected) {

        var activeRoute = $rootScope.$state.current.name;
        var separateRoutes = activeRoute.split('.');

        if (!navSelected) {navSelected = separateRoutes[1]}

        if(navId == navSelected) {
            return false
        } else if ($rootScope.$state.current.name.indexOf(navId) == -1 && navId == navSelected ) {
            return false
        } else {
            return true
        }

    }


}