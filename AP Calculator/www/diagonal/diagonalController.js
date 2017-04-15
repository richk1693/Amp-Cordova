angular.module("apCalc")
    .controller('diagonalController', [
        '$scope', '$http', '$routeParams', '$filter', '$sanitize', '$sce', function($scope, $http, $routeParams, $filter, $sanitize, $sce) {
            // If using $route and want to redirect to different route use $window.location.href = '#/signin'; 
            var vm = this;
            //Default value is square.
            vm.shape = 'Square';
            vm.test = 'hello world';

            //Set size defaults
            vm.squareSize = 'SIZE';
            vm.rectangleWidth = 'WIDTH';
            vm.rectangleLength = 'LENGTH';
            vm.hexagonSize = 'SIZE';

            vm.calcSquare = function (size) {
                if (isNaN(size)) return "RESULT";
                return Math.round((size * 1.414) * 10000) / 10000;
            }
            
            vm.calcRectangle = function (len, wid) {
                if (isNaN(len) || isNaN(wid)) return "RESULT";
                return Math.round(((len * len) + (wid * wid)) * 10000) / 10000;
                
            }

            vm.calcHexagon = function (size) {
                if (isNaN(size)) return "RESULT";
                return Math.round((size * 1.1547) * 10000) / 10000;
            }

            vm.buttonClass = function (shape) {
                if (vm.shape == shape) {
                    return "selected";
                }
                return "";
            };
        }]);