(function () {
    'use strict';
    System.config({
        packages: {
            app: {
                format: 'register',
                'defaultExtension': 'js'
            }
        },
        paths: {
            'angular': 'node_modules/angular/angular.js',
            'router': 'node_modules/angular-ui-router/release/angular-ui-router.js'
        }
    });
    System.import('app/app.js');
} ());