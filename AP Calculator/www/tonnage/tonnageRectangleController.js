angular.module("apCalc")
    .controller('tonnageRectangleController', [
        '$scope', '$http', '$routeParams', '$filter', '$sanitize', '$sce', function ($scope, $http, $routeParams, $filter, $sanitize, $sce) {

    var width = $routeParams.width;
    var length = $routeParams.length;
    var thickness = $routeParams.thickness;

    $scope.rectangleWidth = (width === undefined) ? "" : width;
    $scope.rectangleLength = (length === undefined) ? "" : length;
    $scope.materialThickness = (thickness === undefined) ? "" : thickness;


    //$scope.rectangleWidth = "";
    //$scope.rectangleLength = "";
    //$scope.materialThickness = "";

    $scope.valMsg = "";

    $scope.calculateTonnage = function () {
        if ($scope.rectangleWidth.length > 0 && $scope.rectangleLength.length > 0 && $scope.materialThickness.length > 0) {
            $scope.valMsg = "";
            window.location.href = "#!/calcTonnage/rectangle/" + $scope.rectangleWidth + "/" + $scope.rectangleLength + "/" + $scope.materialThickness;
        } else {
            $scope.valMsg = $sce.trustAsHtml("Please select values for the highlighted dimensions");
        }
    }

}]);