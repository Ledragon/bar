import 'angular';
import { upgradeAdapter } from '../../upgradeAdapter';
import { BottleComponent } from './bottle.component';
import { AddBottleComponent } from './addBottle.component'; 
// import { BarOverviewComponent } from './barOverview.component'; 
import { BarComponent } from './bar.component';
angular.module('app')
    .directive('bottle', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(BottleComponent))
    .directive('bar', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(BarComponent))
    // .directive('barOverview', upgradeAdapter.downgradeNg2Component(BarOverviewComponent))
    .directive('addBottle', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(AddBottleComponent));
upgradeAdapter.upgradeNg1Provider('$state');