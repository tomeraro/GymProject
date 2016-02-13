angular.module('services.admin', [])
    .service('admin', ['$http',
        function ($http) {
            'use strict';

            var login = function (email, password) {
                return $http.get('/login/'+email+'/'+password).then( function(data){
                    console.log(data["data"]);
                    var info = data["data"];
                    return JSON.stringify(data["data"]);
                    //return  data["data"];
                });
            };

            var addGym = function () {
                return $http.post('/your POST req goes here...');
            };

            return {
                login: login,
                addGym: addGym
            }
        }]);
