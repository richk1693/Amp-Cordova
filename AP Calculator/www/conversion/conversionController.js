angular.module("apCalc")
    .controller('conversionController', [
        '$scope', '$http', '$routeParams', '$filter', '$sanitize', '$sce', function($scope, $http, $routeParams, $filter, $sanitize, $sce) {
            // If using $route and want to redirect to different route use $window.location.href = '#/signin'; 
            //$scope.test = 'This is the placeholder for the conversion page.';

            //Default values for the conversion controls
            $scope.toMetricText = 0;
            $scope.toDecimalText = 0;
            $scope.fractionNum = 0;
            $scope.fractionDen = 0;

            $scope.isNumber = function (input) {
                var reg = new RegExp('^\\d+$');
                return reg.test(input);
            };

            $scope.fracToDecimal = function (num, denom) {
                if (num == '') num = 0;
                if (denom == '' || denom == 0) return 0;

                return Math.round((num / denom)*10000) / 10000;

            }
            $scope.toDecimal = function (val) {
                if (val == '') val = 0;
                return Math.round((val / 25.4) * 10000) / 10000;
            };

            $scope.toMetric = function (val) {
                if (val == '') val = 0;
                return Math.round((val * 25.4)*10000) / 10000;
            };

            $scope.TestInput = function (evt) {
                var theEvent = evt || window.event;
                var key = theEvent.keyCode || theEvent.which;
                key = String.fromCharCode(key);
                var regex = /[0-9]|\./;
                if (!regex.test(key)) {
                    theEvent.returnValue = false;
                    if (theEvent.preventDefault) theEvent.preventDefault();
                }
            };                       
        }]);