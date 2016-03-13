import 'angular';
import { Component } from 'angular2/core';
import { upgradeAdapter } from './upgradeAdapter';

@Component({
    selector: 'app',
    template: '<ui-view></ui-view>'
})
export class AppComponent {
    constructor() {

    }
}

angular.module('app')
    .directive('app',<angular.IDirectiveFactory>  upgradeAdapter.downgradeNg2Component(AppComponent));