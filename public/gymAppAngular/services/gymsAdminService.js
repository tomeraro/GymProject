angular.module('services.gymAdminService', [])
    .service('gymAdminService',['$http',
        function ($http) {
            'use strict';

            var getAllgyms = function () {
                return $http.get('/adminMenu').then( function(data){
                    if(data["data"] == null)
                        return false;
                    else return JSON.stringify(data["data"]);
                });
            };

            var getAllProducts = function () {
                return $http.get('/adminMenuProducts').then( function(data){
                    if(data["data"] == null)
                        return false;
                    else return JSON.stringify(data["data"]);
                });
            };
            var getAllCourse = function () {
                return $http.get('/adminMenuCourse').then( function(data){
                    if(data["data"] == null)
                        return false;
                    else return JSON.stringify(data["data"]);
                });
            };

            return {
                getAllgyms: getAllgyms,
                getAllProducts:getAllProducts,
                getAllCourse:getAllCourse
            }
        }]);
/**
 * Created by Eli on 14/02/2016.
 */
