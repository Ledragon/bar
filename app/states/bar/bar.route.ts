import {BarService} from './bar.service';

angular.module('app')
    .config(['$stateProvider', ($stateProvider: angular.ui.IStateProvider) => {
        $stateProvider
            .state('bar', {
                template: '<bar></bar>',
                url: '/bar'
            })
            // .state('barOverview', {
            //     template: '<bar-overview></bar-overview>',
            //     url: '/barOverview'
            // })
            .state('addBottle', {
                template: '<add-bottle></add-bottle>',
                url: '/addBottle'
            });
    }])
    .factory(BarService.serviceId, () => new BarService());