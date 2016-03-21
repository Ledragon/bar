import { Component, Injectable, Input } from 'angular2/core';
import {bottle} from '../../models/bottle';
import {BarService} from './bar.service'

@Component({
    selector: 'bottle',
    templateUrl: 'app/components/bar/bottle.html'
})

@Injectable()
export class BottleComponent {
    @Input() bottle: bottle;
    constructor(barService: BarService) {
    }
}