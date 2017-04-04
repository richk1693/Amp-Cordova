angular.module("apCalc")
    .controller('tonnageRoundController', [
        '$scope', '$http', '$routeParams', '$filter', '$sanitize', '$sce', function ($scope, $http, $routeParams, $filter, $sanitize, $sce) {

    var dia = $routeParams.dia;
    var thickness = $routeParams.thickness;

    $scope.roundHoleSize = (dia === undefined) ? "" : dia;
    $scope.materialThickness = (thickness === undefined) ? "" : thickness;

    $scope.valMsg = "";

    $scope.calculateTonnage = function () {
        if ($scope.roundHoleSize.length > 0 && $scope.materialThickness.length > 0) {
            $scope.valMsg = "";
            window.location.href = "#!/calcTonnage/round/" + $scope.roundHoleSize + "/" + "none" + "/" + $scope.materialThickness;
        } else {
            $scope.valMsg = $sce.trustAsHtml("Please select values for the highlighted dimensions");
        }
    }

}]);