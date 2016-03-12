import 'angular';
import 'router';
import {bootstrap} from 'angular2/platform/browser';
import { upgradeAdapter } from './upgradeAdapter';
// import { ROUTER_PROVIDERS } from 'angular2/router';

angular.module('app', ['ui.router']);
angular.element(document)
    .ready(() => {
        upgradeAdapter.bootstrap(document.body, ['app'])
// upgradeAdapter.addProvider(ROUTER_PROVIDERS);
    });