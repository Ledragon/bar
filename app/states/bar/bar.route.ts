import {BarController} from './bar.controller';

angular.module('app')
    .config(['$stateProvider', ($stateProvider: angular.ui.IStateProvider) => {
        $stateProvider.state('bar', {
            controller: 'bar',
            controllerAs:'vm',
            templateUrl: 'app/states/bar/bar.html',
            url: '/bar'
        });
    }])
    .controller(BarController.controllerId, BarController);