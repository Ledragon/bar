import {BarService} from './bar.service';

angular.module('app')
    .config(['$stateProvider', ($stateProvider: angular.ui.IStateProvider) => {
        $stateProvider
            .state('bar', {
                template: '<bar-overview></bar-overview>',
                url: '/bar'
            })
            .state('bar.general', {
                template: '<bar></bar>',
                url: '/general'
            })
            .state('addBottle', {
                template: '<add-bottle></add-bottle>',
                url: '/addBottle'
            });
    }])
    .factory(BarService.serviceId, () => new BarService());