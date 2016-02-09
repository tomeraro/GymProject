angular.module('views.admin', [])
    .controller('adminCtrl',[ '$scope' ,function ($scope) {
        $scope.user = {
            name: 'Adi'
        };

        console.log('the controller fired app');
    }]);