import 'angular';
import 'router';

angular.module('app', ['ui.router']);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
});