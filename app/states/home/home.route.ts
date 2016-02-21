import {HomeController} from './home.controller';

angular.module('app')
    .config(['$stateProvider', ($stateProvider: angular.ui.IStateProvider) => {
        $stateProvider.state('home', {
            controller: HomeController.controllerId,
            controllerAs: 'vm',
            templateUrl: 'app/states/home/home.html',
            url: '/home'
        });
    }])
    .controller(HomeController.controllerId, HomeController);