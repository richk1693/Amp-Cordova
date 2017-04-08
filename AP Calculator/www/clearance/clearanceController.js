angular.module("apCalc")
    .controller('clearanceController', [
        '$scope', '$http', '$routeParams', '$filter', '$sanitize', '$sce', function($scope, $http, $routeParams, $filter, $sanitize, $sce) {
            // If using $route and want to redirect to different route use $window.location.href = '#/signin'; 
            $scope.test = 'This is the placeholder for the clearance page.';
        }]);