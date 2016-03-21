import { Component, OnInit } from 'angular2/core';
import { RouterLink, Router } from 'angular2/router';
@Component({
    selector: 'navbar',
    templateUrl: 'app/components/layout/navbar.html',
    directives: [RouterLink]
})
export class NavbarComponent implements OnInit {
    routeNames: Array<string> = [];
    constructor(private _router: Router) {

    }

    ngOnInit() {
        this.routeNames = ['Home', 'Bar'];
    }

    isActive(routeName: string) {
        return this._router.isRouteActive(this._router.generate([routeName]));
    }
}