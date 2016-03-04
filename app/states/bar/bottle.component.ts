import { Component, Injectable, Input } from 'angular2/core';

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
    @Input() bottle: any;
    name: string;
    constructor() {
        this.name = 'Component';
    }
}