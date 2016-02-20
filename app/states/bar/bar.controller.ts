module app {
    export class barController {
        static controllerId = 'bar';
        public bottles: bottle[] = [{
            name: 'The Dalmore 15years',
            type: 'Whisky',
            comment: 'yummy'
        }]
    }

    interface bottle {
        name: string;
        type: string;
        comment: string;
    }

    angular.module('app')
        .controller(barController.controllerId, barController)
}