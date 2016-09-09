/**
 *
 * modalCtrl
 *
 */

angular
    .module('brood')
    .controller('modalCtrl', modalCtrl);

function modalCtrl($scope, $uibModal){

    $scope.openModal = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/modal_example.html',
            controller: ModalInstanceCtrl
        });
    };

    $scope.openModal2 = function (size) {
        var modalInstance = $uibModal.open({
            templateUrl: 'views/modal/modal_example2.html',
            size: size,
            controller: ModalInstanceCtrl
        });
    };

}


function ModalInstanceCtrl ($scope, $uibModalInstance) {

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
};