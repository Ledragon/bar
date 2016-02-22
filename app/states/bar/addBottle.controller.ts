import { BarService } from './bar.service';
import {bottle} from '../../models/bottle';

export class AddBottleController {
    public static controllerId = 'addBottle';
    public bottles: bottle[];
    public bottle: bottle;
    static $inject = ['$state', BarService.serviceId];
    constructor(private _$state: angular.ui.IStateService, private _barService: BarService) {
    }

    add() {
        this._barService.add(this.bottle);
        this._$state.go('bar');
    }
}