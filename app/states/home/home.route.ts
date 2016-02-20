module app {
    angular.module('app')
        .config(['$stateProvider', ($stateProvider: angular.ui.IStateProvider) => {
            $stateProvider.state('home', {
                controller: 'home',
                controllerAs: 'vm',
                templateUrl: 'app/states/home/home.html',
                url: '/home'
            });
        }]);
}