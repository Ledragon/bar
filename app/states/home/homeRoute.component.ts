import {Component} from 'angular2/core';
import {HomeComponent} from './home.component';
import { RouteConfig, ROUTER_PROVIDERS } from 'angular2-polyfill/router';
@RouteConfig([
    { path: '/home', component: HomeComponent, name: 'home' }
])
@Component({
    selector: 'home-route',
    template: '<ui-view></ui-view>',
    providers: [ROUTER_PROVIDERS]
})
export class HomeRouteComponent {
    constructor() {
        console.log('Home route component');
    }
}