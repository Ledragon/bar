angular.module('app', [])
    .controller('ctrl', ['$scope', ($scope) => {
        $scope.message = 'Hello world';
    }]);
