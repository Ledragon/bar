import { Component, OnInit } from 'angular2/core';
import { bottle } from '../../models/bottle';
import { BarService } from './bar.service';
import {BottleComponent} from './bottle.component';

@Component({
    selector: 'bar-content',
    templateUrl: 'app/components/bar/barContent.html',
    directives: [BottleComponent]
})

export class BarContentComponent implements OnInit {
    public bottles: bottle[];

    constructor(private _barService: BarService) {
    }

    ngOnInit() {
        this.bottles = this._barService.get();
    }
}