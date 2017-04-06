angular.module("apCalc")
    .controller('tonnageResultController', [
        '$scope', '$http', '$routeParams', '$filter', '$sanitize', '$sce', function ($scope, $http, $routeParams, $filter, $sanitize, $sce) {

            // Capture passed parameters
            var shape = $routeParams.shape;
            var width = $routeParams.width;
            var length = $routeParams.length;
            var thickness = $routeParams.thickness;
            var normalizedTonnage = 0.0;
            var z = 0.0;
            
            // Set the "Back to [Shape]" link Text
            $scope.goBackText = "Back to " + capitalizeFirstLetter(shape);

            switch (shape) {
                case "round":
                    $scope.tonnageResultsImage = "./images/calc/schematic_Round_Rules.png";
                    normalizedTonnage = parseFloat(thickness) * parseFloat(width);
                    calculateTonnageForMaterials(normalizedTonnage);
                    $scope.tonnageWidthText = $routeParams.width + '"';
                    $scope.tonnageMatlThickness = $routeParams.thickness + '"';
                    $scope.goBackUrl = "#!/round/" + width + "/" + thickness + "/";
                    break;

                case "square":
                    $scope.tonnageResultsImage = "./images/calc/schematic_Square_Rules.png";
                    normalizedTonnage = parseFloat(thickness) * parseFloat(width) * 1.27;
                    calculateTonnageForMaterials(normalizedTonnage);
                    $scope.tonnageWidthText = $routeParams.width + '"';
                    $scope.tonnageMatlThickness = $routeParams.thickness + '"';
                    $scope.goBackUrl = "#!/square/" + width + "/" + thickness + "/";
                    break;

                case "oblong":
                    $scope.tonnageResultsImage = "./images/calc/schematic_Oblong_Rules.png";
                    z = parseFloat(length) - parseFloat(width);
                    normalizedTonnage = ((.63 * z) + parseFloat(width)) * parseFloat(thickness);
                    calculateTonnageForMaterials(normalizedTonnage);
                    $scope.tonnageWidthText = $routeParams.width + '"';
                    $scope.tonnageLengthText = $routeParams.length + '"';
                    $scope.tonnageMatlThickness = $routeParams.thickness + '"';
                    $scope.goBackUrl = "#!/oblong/" + width + "/" + length + "/" + thickness + "/";
                    break;

                case "rectangle":
                    $scope.tonnageResultsImage = "./images/calc/schematic_Rectangle_Rules.png";
                    z = parseFloat(length) + parseFloat(width);
                    normalizedTonnage = ((.64 * z)) * parseFloat(thickness);
                    calculateTonnageForMaterials(normalizedTonnage);
                    $scope.tonnageWidthText = $routeParams.width + '"';
                    $scope.tonnageLengthText = $routeParams.length + '"';
                    $scope.tonnageMatlThickness = $routeParams.thickness + '"';
                    $scope.goBackUrl = "#!/rectangle/" + width + "/" + length + "/" + thickness + "/";
                    break;

                default:
                    break;
            }

            function calculateTonnageForMaterials(t) {
                $scope.psi50k = Math.ceil(t * 80);
                $scope.psi65k = Math.ceil(t * 102);
                $scope.psi75k = Math.ceil(t * 118);
                $scope.psi85k = Math.ceil(t * 134);
                $scope.csc50 = Math.ceil(t * 128);
                $scope.ss303 = Math.ceil(t * 120);
                $scope.s1018 = Math.ceil(t * 99);
                $scope.a2024 = Math.ceil(t * 29);
            }

            function capitalizeFirstLetter(theString) {
                return theString.charAt(0).toUpperCase() + theString.slice(1);
            }
}]);