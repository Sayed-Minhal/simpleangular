define(['../src/scripts/app', 'angularRoutes'], function(app) {
    'use strict';
    return app.config(['$routeProvider', '$httpProvider', '$locationProvider', function($routeProvider, $httpProvider, $locationProvider) {
        $locationProvider.hashPrefix("");
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'MyCtrl1'
            }).when('/view1', {
                templateUrl: 'views/first.html',
                controller: 'MyCtrl1'
            }).when('/view2', {
                templateUrl: 'views/second.html',
                controller: 'MyCtrl2'
            });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);
});