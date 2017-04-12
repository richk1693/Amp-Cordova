angular.module("apCalc")
    .controller('clearanceController', [
        '$scope', '$http', '$routeParams', '$filter', '$sanitize', '$sce', function ($scope, $http, $routeParams, $filter, $sanitize, $sce) {


            $scope.isValid = function () {
                if ($scope.punchSize <= $scope.thickness) return false;
                return true;
            };

            $scope.isIncomplete = function () {
                if ($scope.punchSize == null || $scope.thickness == null) return true;
                return false;
            };

            function toDecimal(str) {
                if (str == '') return 'nothing';
                var origional = str;
                var whole = 0;
                var numerator = 0;
                var denominator = 0;

                //If the string contains a lead number ie 1-1/2 remove the 1 and call it the whole number.
                if (str.split('-').length > 1) {
                    whole = str.split('-')[0];
                    str = str.split('-')[1];
                }

                numerator = str.split('/')[0];
                denominator = str.split('/')[1];

                return (parseInt(whole) + (numerator / denominator));
            }

            $scope.toFraction = function(dec) {
                var result = new Fraction(dec);
                return result.toString();
            };


            $scope.calcResult = function (punchSize, thickness) {
                var punchFraction = new Fraction(punchSize);
                //Material thickness of 1/8th less adds 1/64 of clearance.
                if (thickness == .125) {
                    return punchFraction.add(new Fraction(1, 64)).toString();
                }
                //Material thicknesses of 1/4 and 3/8 adds 1/32 of clearance
                else if ((thickness == .25) || (thickness == .375)) {
                    return punchFraction.add(new Fraction(1, 32)).toString();
                }
                //Clearance of 1/2 or 5/8 adds 1/16 clearance.
                else if (thickness == .5 || thickness == .625) {
                    return punchFraction.add(new Fraction(1, 16)).toString();
                }
                //Thickness of 3/4 adds adds 3/32 of clearance
                else if (thickness == .75) {
                    return punchFraction.add(new Fraction(3, 32)).toString();
                }
                //Calculate additional clearance based on 
            };

            $scope.invalidValues = "";
        }]);