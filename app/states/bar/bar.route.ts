import {BarController} from './bar.controller';
import { AddBottleController } from './addBottle.controller';
import {BarService} from './bar.service';

angular.module('app')
    .config(['$stateProvider', ($stateProvider: angular.ui.IStateProvider) => {
        $stateProvider
            .state('bar', {
                controller: BarController.controllerId,
                controllerAs: 'vm',
                templateUrl: 'app/states/bar/bar.html',
                url: '/bar'
            })
            .state('addBottle', {
                controller: AddBottleController.controllerId,
                controllerAs: 'vm',
                templateUrl: 'app/states/bar/addBottle.html',
                url: '/addBottle'
            });
    }])
    .controller(BarController.controllerId, BarController)
    .controller(AddBottleController.controllerId, AddBottleController)
    .factory(BarService.serviceId, () => new BarService());