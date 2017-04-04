angular.module("apCalc")
    .controller('tonnageSquareController', [
        '$scope', '$http', '$routeParams', '$filter', '$sanitize', '$sce', function ($scope, $http, $routeParams, $filter, $sanitize, $sce) {

    var width = $routeParams.width;
    var thickness = $routeParams.thickness;

    $scope.squareHoleSize = (width === undefined) ? "" : width;
    $scope.materialThickness = (thickness === undefined) ? "" : thickness;

    $scope.valMsg = "";

    $scope.calculateTonnage = function () {
        alert('you clicked it you dirty girl');
        if ($scope.squareHoleSize.length > 0 && $scope.materialThickness.length > 0) {
            $scope.valMsg = "";
            window.location.href = "#!/calcTonnage/square/" + $scope.squareHoleSize + "/" + "none" + "/" + $scope.materialThickness;
        } else {
            $scope.valMsg = $sce.trustAsHtml("Please select values for the highlighted dimensions");
        }
    }

}]);