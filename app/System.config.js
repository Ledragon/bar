(function() {
    'use strict';
    System.config({
        packages: {
            app: {
                format: 'register',
                'defaultExtension': 'js'
            }
        }
    });
    System.import('app/app.js');
} ());