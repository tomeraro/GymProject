angular.module('views.advancedSearch', [])
    .controller('advancedSearchCtrl',[ '$scope' ,function ($scope) {
        $scope.user = {
            name: 'Adi'
        };

        console.log('the controller fired app');
    }]);