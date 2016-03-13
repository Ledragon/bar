import 'angular';
import {HomeComponent} from './home.component';
// import {HomeRouteComponent} from './homeRoute.component';
import { upgradeAdapter } from '../../upgradeAdapter';

angular.module('app')
    .config(['$stateProvider', ($stateProvider: angular.ui.IStateProvider) => {
        $stateProvider.state('home', {
            template: '<home></home>',
            url: '/home'
        });
    }])
    // .directive('homeRoute', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(HomeRouteComponent))
    .directive('home',<angular.IDirectiveFactory>  upgradeAdapter.downgradeNg2Component(HomeComponent));