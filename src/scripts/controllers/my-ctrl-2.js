define(['./module'], function(controllers) {
    'use strict';
    controllers.controller('MyCtrl2', ["$scope", "MyService1", function($scope, svc) {
        svc.getPayroll()
            .then(function(Result) {
                $scope.payrolls = Result.Payrolls;
                //console.log($scope.payrolls);
            }, function(error) {
                //console.log(error);
                $scope.payrolls = ["No Data Available"];
            });
    }]);
});