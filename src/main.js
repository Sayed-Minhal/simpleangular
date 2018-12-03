require.config({

    // alias libraries paths
    paths: {
        'domReady': '../node_modules/requirejs-domready/domReady',
        'angular': '../node_modules/angular/angular.min',
        'angularRoutes': '../node_modules/angular-route/angular-route',
        'angularui': '../node_modules/angular-ui/index'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angularRoutes': {
            deps: ['angular'],
            exports: 'angularRoutes'
        },
        'angularui': {
            deps: ['angular'],
            exports: 'angularui'
        }
    },

    // kick start application
    deps: ['../src/bootstrap']
});