/*angular.module('views.admin', [])
    .controller('adminCtrl',[ '$scope' ,function ($scope) {
        $scope.user = {
            name: 'Adi'
        };

        console.log('the controller fired app');
    }]);*/

var app = angular.module('views.admin', []);
app.controller('adminCtrl',[ '$scope' ,function ($scope) {
        console.log("----------- " + $scope.password + " ------------");
}]);

