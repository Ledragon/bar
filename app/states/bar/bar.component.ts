import { Component, Injectable, Inject} from 'angular2/core';
import { BarService } from './bar.service';
import { BottleComponent } from './bottle.component';
import {bottle} from '../../models/bottle';

@Component({
    selector: 'bar',
    templateUrl: 'app/states/bar/bar.html',
    directives: [BottleComponent],
    providers: [BarService]
})

@Injectable()
export class BarComponent {
    public bottles: bottle[];

    constructor( @Inject('$state') private _$state: angular.ui.IStateService, barService: BarService) {
        this.bottles = barService.get();
    }

    addBottle() {
        this._$state.go('addBottle');
    }
}
