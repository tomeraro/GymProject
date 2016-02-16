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
        },
        {
            url: './partials/AdminHtml/editGym.html'
        },
        {
            url: './partials/AdminHtml/statistica.html'
        }
        ];

        $scope.activeTab = $scope.tabs[0];
        $scope.gymTab= $scope.tabs[0];
        $scope.productTab= $scope.tabs[1];
        $scope.CourseTab= $scope.tabs[2];
        $scope.CreateGymTab= $scope.tabs[3];
        $scope.editGymTab= $scope.tabs[4];
        $scope.statisticPage= $scope.tabs[5];



        var init = function () {
            $scope.models = [];
            $scope.courseModels = [];
            /*
            $scope.models.push("amino");
            $scope.models.push("bcaa");
            $scope.models.push("watch");
            */

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

            $scope.initializePro = adminGyms.getProducts().then(function(data){
                if(!data){
                    console.log("data is null");
                    alert("wrong details. please try again");
                }
                var gymsPRO = JSON.parse(data);
                $scope.gymsPRO = gymsPRO;
                console.log($scope.gymsPRO);
                // return $scope.gymsObj;
            });

            $scope.initializeCousr = adminGyms.getCourse().then(function(data){
                if(!data){
                    console.log("data is null");
                    alert("wrong details. please try again");
                }
                var gymsCourse = JSON.parse(data);
                $scope.gymsCourse = gymsCourse;
                console.log($scope.gymsCourse);
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

        $scope.editGym = function(gym){
            $scope.activeTab = $scope.tabs[4];
            $scope.gymname = gym.name;
            $scope.gymcity = gym.city;
            $scope.gymstreet =gym.street;
            $scope.gymhouseNum = gym.houseNumber;
            $scope.gymprice = gym.price;
            $scope.gymwebsite = gym.website;
            //$scope.Amino = true;

        }

        $scope.Statistica = function(){
            $scope.activeTab = $scope.tabs[5];
        }


        $scope.addGym =  function(){
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!");
            $scope.ProIDarray = [];
            $scope.CourseIDarray = [];

            for (var i in $scope.models){
                if($scope.models[i] == true){
                console.log($scope.gymsPRO[i]["_id"]);
                $scope.ProIDarray.push($scope.gymsPRO[i]["_id"]);
                }
            }
            for (var i in $scope.courseModels){
                if($scope.courseModels[i] == true){
                    console.log($scope.gymsCourse[i]["_id"]);
                    $scope.CourseIDarray.push($scope.gymsCourse[i]["_id"]);
                }
            }
            console.log($scope.gymsCourse);
            console.log($scope.gymsPRO);
            console.log($scope.models);

            var data = {
                name: $scope.gymname,
                city: $scope.gymcity,
                street:$scope.gymstreet,
                houseNumber:$scope.gymhouseNum,
                price:$scope.gymprice,
                website:$scope.gymwebsite,
                gymLessons:$scope.CourseIDarray,
                gymProducts:$scope.ProIDarray
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
