angular.module('views.advancedSearch', [])

    .controller('advancedSearchCtrl', ['$scope', 'getGyms','$state', function ($scope, getGyms,$state) {

        $scope.searchGym = function(){
            if(($scope.gymname) && ($scope.price) && ($scope.city)){
                var isnum = /^\d+$/.test($scope.price);
                if( isnum == 0){
                    alert("please enter valid price");
                }
                else {
                    var price = parseInt($scope.price);
                    $scope.gyms = getGyms.getGyms($scope.gymname, $scope.city, price);
                    var website = "www.ynet.co.il";

                    $state.go('gyms',{gyms:$scope.gyms});

                    //$state.go('gyms',{name:$scope.gyms.name, city: $scope.gyms.city,price:$scope.gyms.price,website:website});
                    //$state.go('admin');
                }
            }
            else
                alert("Please enter ALL VALUES");

        }

    }]);
