/*angular.module('views.advancedSearch', [])
    .controller('advancedSearchCtrl',[ '$scope' ,function ($scope) {
        $scope.user = {
            name: 'Adi'
        };

        console.log('the controller fired app');
    }]);*/


angular.module('views.advancedSearch', [])
    .controller('advancedSearchCtrl', ['$scope', 'getGyms','$state', function ($scope, getGyms,$state) {

        $scope.searchGym = function(){
            $scope.aaa = 5;
            if(($scope.gymname) && ($scope.price) && ($scope.city)){
                var isnum = /^\d+$/.test($scope.price);
                if( isnum == 0){
                    alert("please enter valid price");
                }
                else {
                    var price = parseInt($scope.price);
                    $scope.gyms = getGyms.getGyms($scope.gymname, $scope.city, price).then(function(data){
                        $state.go('gyms',{ gyms:data });
                    });
                }
            }
            else
                alert("Please enter ALL VALUES");

        }

    }]);
