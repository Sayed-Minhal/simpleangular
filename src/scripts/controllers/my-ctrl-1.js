define(['./module'], function(controllers) {
    'use strict';
    controllers.controller('MyCtrl1', ["$scope", "MyService1", function($scope, svc) {
        svc.getEmployees()
            .then(function(Result) {
                $scope.employees = Result.Employees;
                //console.log($scope.employees);
            }, function(error) {
                //console.log(error);
                $scope.employees = ["No Data Available"];
            });

    }]);
});