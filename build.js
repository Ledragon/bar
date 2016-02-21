var Builder = require('systemjs-builder');
var builder = new Builder();
builder.config({
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

builder.buildStatic('app/app.js', 'build/scripts/app.min.js',{minify:false, sourceMaps:false})
    .then(function () {
        console.log('build successful');
    })
    .catch(function () {
        console.error('Failed to build');
    })