import { Component, Injectable} from 'angular2/core';
import { BarService } from './bar.service';
import { BottleComponent } from './bottle.component';
import {bottle} from '../../models/bottle';

@Component({
    selector: 'bar',
    templateUrl: 'app/states/bar/bar.html',
    directives:[BottleComponent],
    providers:[BarService]
})

@Injectable()
export class BarComponent {
    public bottles: bottle[];

    constructor(barService: BarService) {
        this.bottles = barService.get();
    }
}
