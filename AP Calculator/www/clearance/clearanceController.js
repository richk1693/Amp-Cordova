angular.module("apCalc")
    .controller('clearanceController', [
        '$scope', '$http', '$routeParams', '$filter', '$sanitize', '$sce', function ($scope, $http, $routeParams, $filter, $sanitize, $sce) {


            $scope.isValid = function () {
                if ($scope.punchSize < $scope.thickness) return false;
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


            //function gcd(a,  b)
            //    {
            //        var n = Math.min(a, b);
            //        var gcd = 1, i = 1;

            //        while (i <= n)
            //        {
            //            if (a % i == 0 && b % i == 0)
            //            {
            //                gcd = i;
            //            }
            //            i++;
            //        }
            //        return gcd;
            //    }

            //function calcDieClearance() {
            //    //Fake rules as placeholder.
            //    //If the punch is > 0.25 add 1/16th to it.
            //    //If the material thickness is > .5 add 1/8th to it.

            //    var decimalPunch = toDecimal($scope.punchSize); //numerator
            //    var decimalThickness = toDecimal($scope.thickness); //denominator
            //    var addition = 0;
            //    var numerator = 0;
            //    var denominator = 0;
            //    var unknownVariable = 0;

            //    if (decimalPunch > 0.25) {
            //        addition += 0.0625;
            //    }

            //    if(decimalThickness > 0.5){
            //        addition+= 0.125;
            //    }

            //    decimalPunch += addition;
            //    var den = 10000000;
            //    var decimalPunch = decimalPunch * den;

            //}
            $scope.toFraction = function(dec) {
                var result = new Fraction(dec);
                return result.toString();
            };


            $scope.calcResult = function (dec1, dec2) {
                //fake rules until I know how to calc: the answer is the sum of the two.
                var f1 = new Fraction(dec1);
                var f2 = new Fraction(dec2);
                return f1.add(f2).toString();
            };

            $scope.invalidValues = "";
        }]);