angular.module('services.getGyms', [])
    .service('getGyms', ['$http',
        function ($http) {
            'use strict';

            var getGyms = function () {
                return $http.get('/your route goes here...');
            };

            var addGym = function () {
                return $http.post('/your POST req goes here...');
            };

            return {
                getGyms: getGyms,
                addGym: addGym
            }
        }]);

