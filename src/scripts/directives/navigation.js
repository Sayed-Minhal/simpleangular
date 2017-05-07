define(['./module'], function(directives) {
    'use strict';
    directives.directive('navigation', [function() {
        return {
            restrict: "E",
            template: '<nav class="top-bar button-group round even-6 text-center" data-topbar role="navigation">' +
                '<a class="button tiny" href="#/">Home Page</a>' +
                '<a class="button tiny" href="#/view1">Get Employees</a>' +
                '<a class="button tiny" href="#/view2">Get Salary</a>' +
                '</nav>',
            link: function(scope, element, attr) {
                //console.log(scope, element, attr);
            }
        };

    }]);
});