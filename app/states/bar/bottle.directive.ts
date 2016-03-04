import 'angular';
import { upgradeAdapter } from '../../upgradeAdapter';
import { BottleComponent } from './bottle.component';
angular.module('app')
    .directive('bottle', upgradeAdapter.downgradeNg2Component(BottleComponent));