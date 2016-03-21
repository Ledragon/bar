import { Component, Injectable, OnInit, Inject } from 'angular2/core';
import { BarService } from './bar.service';
import {bottle} from '../../models/bottle';

@Component({
    selector: 'add-bottle',
    templateUrl: 'app/components/bar/addBottle.html'
})
@Injectable()
export class AddBottleComponent implements OnInit {
    public static controllerId = 'addBottle';
    public bottles: bottle[];
    public bottle: bottle;

    constructor(private _barService: BarService) {

    }

    add() {
        console.log(this.bottle);
        this._barService.add(this.bottle);
        // this._$state.go('bar');
    }

    ngOnInit() {
        this.bottle = {
            comment: '',
            imageUrl: '',
            name: '',
            type: ''
        };
    }
}