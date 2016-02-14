/**
 * Created by Zlil on 13/02/2016.
 */

angular.module('views.adminmenu', [])
    .controller('adminMenuCtrl',[ '$scope','gymAdminService','$state' ,function ($scope,adminGyms,$state) {
        var init = function () {
            $scope.data = adminGyms.getAllgyms().then(function(data){
                if(!data){
                    console.log("data is null");
                    alert("wrong details. please try again");
                }
                var gymsObjects = JSON.parse(data);
                $scope.gymsObj = gymsObjects;
                console.log($scope.gymsObj);
               // return $scope.gymsObj;
            });
        }
        init();
}]);
