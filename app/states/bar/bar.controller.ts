import { BarService } from './bar.service';
import {bottle} from '../../models/bottle';

export class BarController {
    public static controllerId = 'bar';
    public bottles: bottle[];

    static $inject = [BarService.serviceId];
    constructor(barService:BarService) {
        this.bottles = barService.get();
    }
}
