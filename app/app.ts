angular.module('app', ['ui.router'])
    .controller('ctrl', ['$scope', ($scope) => {
        $scope.message = 'Hello world';
    }]);
