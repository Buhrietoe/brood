/**
 *
 * datatablesCtrl
 *
 */

angular
    .module('brood')
    .controller('datatablesCtrl', datatablesCtrl);

function datatablesCtrl($scope, DTOptionsBuilder){



    $scope.dtOptions1 = DTOptionsBuilder.newOptions()
        .withDOM("t");


    $scope.dtOptions2 = DTOptionsBuilder.newOptions()
        .withDOM("<'row'<'col-sm-6'l><'col-sm-6'f>>t<'row'<'col-sm-6'i><'col-sm-6'p>>")
        .withDisplayLength(6);


    $scope.dtOptions3 = DTOptionsBuilder.newOptions()
        .withDOM("<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>tp")
        .withButtons([
            {extend: 'csv',title: 'ExampleFile', className: 'btn-sm'},
            {extend: 'pdf', title: 'ExampleFile', className: 'btn-sm'},
            {extend: 'print',className: 'btn-sm'}
        ]);
}
