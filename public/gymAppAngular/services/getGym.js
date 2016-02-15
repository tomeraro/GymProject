angular.module('services.getGyms', [])
    .service('getGyms', ['$http',
        function ($http) {
            'use strict';

            var getGyms = function (gymName, City) {
                return $http.get('/SearchGym/'+gymName+'/'+City).then(function(data){
                    if(data["data"] == null){
                        console.log("data is null");
                        return false;
                    }
                    else {
                        return data["data"];
                    }
                });
            };

            var getGymsByCity = function (city){
                return $http.get('/SearchGym/'+city).then(function(data){
                    if(data["data"] == null){
                        console.log("data is null");
                        return false;
                    }
                    else {
                        return data["data"];
                    }
                });
            };

            var getGymsByName = function (name){
                return $http.get('/SearchGymByName/'+name).then(function(data){
                    if(data["data"] == null){
                        console.log("data is null");
                        return false;
                    }
                    else {
                        return data["data"];
                    }
                });
            };

            var getGymsByLesson = function (lesson){
                return $http.get('/SearchGymByLesson/'+lesson).then(function(data){
                    if(data["data"] == null){
                        console.log("data is null");
                        return false;
                    }
                    else {
                        return data["data"];
                    }
                });
            };

            var getGymsByProduct = function (product){
                return $http.get('/SearchGymByProduct/'+product).then(function(data){
                    if(data["data"] == null){
                        console.log("data is null");
                        return false;
                    }
                    else {
                        return data["data"];
                    }
                });
            };

            var addGym = function () {
                return $http.post('/your POST req goes here...');
            };



            return {
                getGyms: getGyms,
                getGymsByCity: getGymsByCity,
                getGymsByName: getGymsByName,
                getGymsByProduct: getGymsByProduct,
                getGymsByLesson: getGymsByLesson,

                addGym: addGym
            }
        }]);
