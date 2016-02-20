module app{
    export class homeController{
        static controllerId = 'home';
    }
    
    angular.module('app')
    .controller(homeController.controllerId, homeController)
}