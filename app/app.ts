import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy, ROUTER_PROVIDERS } from 'angular2/router';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);