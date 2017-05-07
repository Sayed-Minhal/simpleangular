define(['./module'], function(services) {
    'use strict';
    services.service('MyService1', ["$http", function($http) {
        var baseURL = "http://localhost:3000";
        this.getEmployees = function() {
            return $http.get(baseURL + "/getEmployees")
                .then(function(Response) {
                    return Response.data;
                }, function(error) {
                    return error;
                });
        };

        this.getPayroll = function() {
            return $http.get(baseURL + "/getPayroll")
                .then(function(Response) {
                    return Response.data;
                }, function(error) {
                    return error;
                });
        };
    }]);
});