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

            var CreateNewGym = function (data) {
                $http.post('/addGym',data).success(function(){
                        console.log('ok!');
                    })
                    .error(function(err) {
                        console.log('Error: ' + err);
                    });
            }
            var DeleteGym = function (data) {
                $http.post('/deleteGym',data).success(function(){
                        console.log('gym has been deleted!');
                    })
                    .error(function(err) {
                        console.log('Error: ' + err);
                    });
            }

            return {
                getAllgyms: getAllgyms,
                getAllProducts:getAllProducts,
                getAllCourse:getAllCourse,
                CreateNewGym:CreateNewGym,
                DeleteGym:DeleteGym
            }
        }]);
/**
 * Created by Eli on 14/02/2016.
 */


/*
 // when submitting the add form, send the item to the node API
 $scope.createItem = function(){
 $http.post('/addNewItems', $scope.formData)
 .success(function() {
 $location.path('#/');
 })
 .error(function(err) {
 console.log('Error: ' + err);
 });
 };*/
