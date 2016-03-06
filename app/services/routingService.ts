import 'angular';
import 'router';
import {upgradeAdapter} from '../upgradeAdapter';

upgradeAdapter.upgradeNg1Provider('$state');
