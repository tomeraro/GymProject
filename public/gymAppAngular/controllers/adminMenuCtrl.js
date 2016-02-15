/**
 * Created by Zlil on 13/02/2016.
 */

angular.module('views.adminmenu', [])
    .controller('adminMenuCtrl',[ '$scope','gymAdminService','$state' ,function ($scope,adminGyms,$state ) {
        $scope.tabs = [{
            url: './partials/AdminHtml/gymsAdmin.html'
        }, {
            url: './partials/AdminHtml/productsAdmin.html'
        }, {
            url: './partials/AdminHtml/courseAdmin.html'
        },
            {
                url: './partials/AdminHtml/createGym.html'
            }
        ];
        $scope.activeTab = $scope.tabs[0];
        $scope.gymTab= $scope.tabs[0];
        $scope.productTab= $scope.tabs[1];
        $scope.CourseTab= $scope.tabs[2];
        $scope.CreateGymTab= $scope.tabs[3];



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

        $scope.CreateGym = function(){
            $scope.activeTab = $scope.tabs[3];
        }



        $scope.addGym =  function(){
            var data = {
                name: $scope.gymname,
                city: $scope.gymcity,
                street:$scope.gymstreet,
                houseNumber:$scope.gymhouseNum,
                price:$scope.gymprice,
                website:$scope.gymwebsite
            };
         $scope.data = adminGyms.CreateNewGym(data);

            /*
            alert("addGym");
            alert("things:"+
            $scope.gymname+
            $scope.gymcity+
            $scope.gymstreet+
            $scope.gymhouseNum+
            $scope.gymprice+
            $scope.gymwebsite+

            $scope.Amino+
            $scope.Shaker+
            $scope.Protain+
            $scope.BCCA+
            $scope.BodyOil+
            $scope.CardioWatch+
            $scope.HeartMonitor

            $scope.Yoga+
            $scope.Trx+
            $scope.Pilatis+
            $scope.Kickboxercise+
            $scope.Dance+
            $scope.StepClasses+
            $scope.Cardio+
            $scope.Zumba
            );
        */

        }
        $scope.deleteGym =  function(delGym){
            var data = {name: delGym};
            $scope.data = adminGyms.DeleteGym(data);
            location.reload();
        }


}]);
