angular.module('views.advancedSearch', [])
    .controller('advancedSearchCtrl', ['$scope', 'getGyms','$state', function ($scope, getGyms,$state) {

        $scope.searchGym = function(){
            var lesson =  $scope.test;
            var product =  $scope.comment;


            if(($scope.name == null) && ($scope.city != null) && (lesson == null) && (product == null)){
                $scope.gyms = getGyms.getGymsByCity($scope.city).then(function(data){
                    $state.go('gyms',{ gyms:data });
                });
            }

            else if(($scope.name) && ($scope.city) && (lesson == null) && (product == null)){
                $scope.gyms = getGyms.getGyms($scope.name, $scope.city).then(function(data){
                    $state.go('gyms',{ gyms:data });
                });
            }

            else if(($scope.name !=null) && ($scope.city==null) && (lesson == null) && (product == null)){

                $scope.gyms = getGyms.getGymsByName($scope.name).then(function(data){
                    $state.go('gyms',{ gyms:data });
                });
            }

            else if((($scope.name==null) && ($scope.city==null) && (lesson != null) && (product == null))){
                $scope.gyms = getGyms.getGymsByLesson(lesson).then(function(data){
                    $state.go('gyms',{ gyms:data });
                });
            }

            else if ((($scope.name==null) && ($scope.city==null) && (lesson == null) && (product != null))){
                $scope.gyms = getGyms.getGymsByProduct(product).then(function(data){
                    $state.go('gyms',{ gyms:data });
                });
            }




        }

    }]);
