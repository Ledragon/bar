import 'angular';

angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
     $urlRouterProvider.otherwise('/home');
     console.log('routes configured');
}])    ;