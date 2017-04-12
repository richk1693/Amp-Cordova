angular.module("apCalc")
    .controller('diagonalController', [
        '$scope', '$http', '$routeParams', '$filter', '$sanitize', '$sce', function($scope, $http, $routeParams, $filter, $sanitize, $sce) {
            // If using $route and want to redirect to different route use $window.location.href = '#/signin'; 
            var vm = this;
            //Default value is square.
            vm.shape = 'Square';
            vm.test = 'hello world';
        }]);