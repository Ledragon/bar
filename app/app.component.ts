import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { BarComponent } from './states/bar/bar.component';
import { HomeComponent } from './states/home/home.component';
import { NavbarComponent } from './layout/navbar.component';

@RouteConfig([
    { path: '/bar/...', name: 'Bar', component: BarComponent },
    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/', redirectTo: ['Home'] }
])

@Component({
    selector: 'app',
    template: `<navbar></navbar>
<div class="container">
<router-outlet></router-outlet>
</div>
    `,
    directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
export class AppComponent {
    constructor() {

    }
}