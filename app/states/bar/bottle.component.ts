import { Component, Injectable, Input } from 'angular2/core';
import {bottle} from '../../models/bottle';
import {BarService} from './bar.service'

@Component({
    selector: 'bottle',
    template: `
<div class="row">
    <div class="col-sm-3">
        <img [src]="bottle.imageUrl" alt="Picture" style="max-height:200px">
    </div>
    <div class="col-sm-9">
        <div>{{bottle.name}}</div>
        <div>{{bottle.type}}</div>
        <div>{{bottle.comment}}</div>
    </div>
</div>`
})

@Injectable()
export class BottleComponent {
    @Input() bottle: bottle;
    constructor(barService:BarService) {
    }
}