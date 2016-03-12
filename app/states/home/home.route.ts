import 'angular';
import {HomeComponent} from './home.component';
import { upgradeAdapter } from '../../upgradeAdapter';

// import { RouteConfig } from 'angular2-polyfill/router';
// // @RouteConfig([
// //     { path: '/home', component: HomeComponent, name: 'home', useAsDefault: false }
// // ])
// export  class HomeRouteComponent {
//     constructor() {

//     }
// }
angular.module('app')
    .config(['$stateProvider', ($stateProvider: angular.ui.IStateProvider) => {
        $stateProvider.state('home', {
            template: '<home></home>',
            url: '/home'
        });
    }])
    .directive('home', upgradeAdapter.downgradeNg2Component(HomeComponent));