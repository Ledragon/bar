import 'angular';
import { upgradeAdapter } from '../../upgradeAdapter';
import { BottleComponent } from './bottle.component';
import { AddBottleComponent } from './addBottle.component';
import { BarComponent } from './bar.controller';
angular.module('app')
    .directive('bottle', upgradeAdapter.downgradeNg2Component(BottleComponent))
    .directive('bar', upgradeAdapter.downgradeNg2Component(BarComponent))
    .directive('addBottle', upgradeAdapter.downgradeNg2Component(AddBottleComponent));