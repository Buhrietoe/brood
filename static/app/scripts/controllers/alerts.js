/**
 *
 * alertsCtrl
 *
 */

angular
    .module('brood')
    .controller('alertsCtrl', alertsCtrl);

function alertsCtrl($scope, toastr, toastrConfig){

    angular.extend(toastrConfig, {
        newestOnTop: false,
        positionClass: 'toast-bottom-right',
        preventDuplicates: false,
        preventOpenDuplicates: false,
        progressBar: true
    });

    $scope.pop2 = function () {
        toastr.info('Info - This is a custom BROOD info notification', {});
    };

    $scope.pop3 = function () {
        toastr.success('Success - This is a BROOD success notification', {});
    };

    $scope.pop1 = function () {
        toastr.warning('Warning - This is a BROOD warning notification', {});
    };

    $scope.pop4 = function () {
        toastr.error('Error - This is a BROOD error notification', {});
    };



}
