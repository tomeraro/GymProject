angular.module('services.getGyms', [])
    .service('getGyms', ['$http',
        function ($http) {
            'use strict';

            var getGyms = function (gymName, City, Price) {
                var msg = [
                    {
                        name: 'bla bla',
                        city: City,
                        price: Price,
                        position: '[48.74, -80.18]'
                    },
                    {
                        name: gymName,
                        city: City,
                        price: Price,
                        position: '[48.74, -80.18]'
                    },
                    {
                        name: gymName,
                        city: City,
                        price: Price,
                        position: '[48.74, -80.18]'
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
