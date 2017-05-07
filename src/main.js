require.config({

    // alias libraries paths
    paths: {
        'domReady': '../node_modules/requirejs-domready/domReady',
        'angular': '../bower_components/angular/angular.min',
        'angularRoutes': '../bower_components/angular-route/angular-route'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angularRoutes': {
            deps: ['angular'],
            exports: 'angularRoutes'
        }
    },

    // kick start application
    deps: ['../src/bootstrap']
});