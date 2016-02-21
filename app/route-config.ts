import 'angular';
import './states/bar/bar.route';
import './states/home/home.route';
angular.module('app')
    .config(['$urlRouterProvider', ($urlRouterProvider) => {
        $urlRouterProvider.otherwise('/home');
    }]);