import { Component, Injectable, Inject} from 'angular2/core';
import { BarService } from './bar.service';
import {bottle} from '../../models/bottle';
import { upgradeAdapter } from '../../upgradeAdapter';
import { BarComponent } from './bar.component';
// const uiView = upgradeAdapter.upgradeNg1Component('uiView');
@Component({
    selector: 'bar-overview',
    template: `<h1>Bar overview</h1>
    <div ui-view></div>`,
    providers: [BarService],
    directives:[BarComponent]
})

@Injectable()
export class BarOverviewComponent {

}