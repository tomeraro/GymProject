angular.module('services.getGyms', [])
    .service('getGyms', ['$http',
        function ($http) {
            'use strict';

            var getGyms = function (gymName, City, Price) {
                var msg = [
                    {
                        name: gymName,
                        city: City,
                        price: Price
                    },
                    {
                        name: gymName,
                        city: City,
                        price: Price
                    },
                    {
                        name: gymName,
                        city: City,
                        price: Price
                    }];
                return msg;
                /*$http.get('/SearchGym/'+gymName+'/'+City+'/'+Price+'')
                 .success(function (response) {
                 })
                 .error(function() {
                 });*/
            };

            var addGym = function () {
                return $http.post('/your POST req goes here...');
            };

            return {
                getGyms: getGyms,
                addGym: addGym
            }
        }]);
