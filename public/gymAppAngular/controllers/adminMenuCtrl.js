/**
 * Created by Zlil on 13/02/2016.
 */

angular.module('views.adminmenu', [])
    .controller('adminMenuCtrl',[ '$scope','gymAdminService','$state' ,function ($scope,adminGyms,$state) {
        $scope.tabs = [{
            url: './partials/AdminHtml/gymsAdmin.html'
        }, {
            url: './partials/AdminHtml/productsAdmin.html'
        }, {
            url: './partials/AdminHtml/courseAdmin.html'
        }];
        $scope.activeTab = $scope.tabs[0];
        $scope.gymTab= $scope.tabs[0];
        $scope.productTab= $scope.tabs[1];
        $scope.CourseTab= $scope.tabs[2];

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
        $scope.gyms= function(){
            $scope.activeTab = $scope.tabs[0];
        }

        $scope.products = function(){
            $scope.activeTab = $scope.tabs[1];
            $scope.data = adminGyms.getAllProducts().then(function(data){
                if(!data){
                    console.log("data is null");
                    alert("wrong details. please try again");
                }
                var gymsProducts = JSON.parse(data);
                $scope.gymsProducts = gymsProducts;
                console.log(gymsProducts);
                // return $scope.gymsObj;
            });

        }

        $scope.course = function(){
            $scope.activeTab = $scope.tabs[2];
            $scope.data = adminGyms.getAllCourse().then(function(data){
                if(!data){
                    console.log("data is null");
                    alert("wrong details. please try again");
                }
                var gymsCourse = JSON.parse(data);
                $scope.gymsCourse = gymsCourse;
                console.log(gymsCourse);
                // return $scope.gymsObj;
            });

        }
}]);
