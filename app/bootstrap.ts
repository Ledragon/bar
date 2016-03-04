import 'angular';
import 'router';
import {bootstrap} from 'angular2/platform/browser';
import { upgradeAdapter } from './upgradeAdapter';

angular.module('app', ['ui.router']);
angular.element(document)
    .ready(() => {
        upgradeAdapter.bootstrap(document.body, ['app'])
    });