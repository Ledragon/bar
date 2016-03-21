import { Component, Injectable, Inject, OnInit} from 'angular2/core';
import { RouteConfig, RouterOutlet, RouterLink, Router } from 'angular2/router';

import { BarService } from './bar.service';
import { BottleComponent } from './bottle.component';
import { bottle } from '../../models/bottle';
import { AddBottleComponent } from './addBottle.component';
import { BarContentComponent } from './barContent.component';

@RouteConfig([
    { path: 'add', name: 'Add', component: AddBottleComponent, useAsDefault: false },
    { path: '/', name: 'Overview', component: BarContentComponent, useAsDefault: true }
])

@Component({
    selector: 'bar',
    templateUrl: 'app/states/bar/bar.html',
    directives: [RouterOutlet, RouterLink, BottleComponent, AddBottleComponent],
    providers: [BarService]
})

@Injectable()
export class BarComponent implements OnInit {
    routeNames: Array<string>;

    constructor(private _router: Router) {

    }
    ngOnInit() {
        this.routeNames = ['Overview', 'Add'];
    }

    isActive(routeName: string): boolean {
        return this._router.isRouteActive(this._router.generate([routeName]));
    }
}
