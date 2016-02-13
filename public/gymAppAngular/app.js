// app dependncies should be injected , each controller , directive and service.

var app = angular.module('myApp', [
    'ui.router',
    'ui.bootstrap',
    'views.main',
    'views.advancedSearch',
    'views.admin',
    'views.gyms',
    'views.about',
    'views.home',

    'services.getGyms',
    'services.admin'
]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: '/home-page',
            templateUrl: '../partials/main.html',
            controller: 'mainCtrl'
        })
        .state('advancedSearch', {
            url: '/advancedSearch',
            templateUrl: '../partials/advancedSearch.html',
            controller: 'advancedSearchCtrl'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: '../partials/admin.html',
            controller: 'adminCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: '../partials/about.html',
            controller: 'aboutCtrl'
        })
        .state('gyms', {
            url: '/gyms',
            params: {
                gyms: null
            },
            templateUrl: '../partials/gyms.html',
            controller: 'gymsCtrl'
        })
        .state('home', {
            url: 'home',
            templateUrl: '../partials/AdminHtml/temp.html',
            controller: 'homeCtrl'
        });

    $urlRouterProvider.otherwise(function ($injector) {
        $injector.get('$state').go('advancedSearch');
    });
}]);

