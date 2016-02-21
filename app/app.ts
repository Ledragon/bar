import 'angular';
import 'router';
import {Main} from './main.js';
import './routes.js';

angular.module('app', ['ui.router'])
    .controller('ctrl', ['$scope', ($scope) => {
        $scope.message = 'Hello world';
    }])
    .controller('main', Main);

angular.element(document).ready(() => {

    angular.bootstrap(document, ['app']);
});
