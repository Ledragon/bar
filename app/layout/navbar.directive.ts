import 'angular';
angular.module('app')
    .directive('navbar', () => {
        return {
            templateUrl: 'app/layout/navbar.html',
            restrict: 'E',
            controller: ($state) => {
                console.log($state.get());
            }
        }
    })