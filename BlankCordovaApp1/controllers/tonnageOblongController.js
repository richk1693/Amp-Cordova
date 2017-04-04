angular.module("apCalc")
    .controller('tonnageOblongController', [
        '$scope', '$http', '$routeParams', '$filter', '$sanitize', '$sce', function ($scope, $http, $routeParams, $filter, $sanitize, $sce) {

    var width = $routeParams.width;
    var length = $routeParams.length;
    var thickness = $routeParams.thickness;

    $scope.oblongWidth = (width === undefined) ? "" : width;
    $scope.oblongLength = (length === undefined) ? "" : length;
    $scope.materialThickness = (thickness === undefined) ? "" : thickness;

    $scope.valMsg = "";

    $scope.calculateTonnage = function () {
        if ($scope.oblongWidth.length > 0 && $scope.oblongLength.length > 0 && $scope.materialThickness.length > 0) {
            $scope.valMsg = "";
            window.location.href = "#!/calcTonnage/oblong/" + $scope.oblongWidth + "/" + $scope.oblongLength + "/" + $scope.materialThickness;
        } else {
            $scope.valMsg = $sce.trustAsHtml("Please select values for the highlighted dimensions");
        }
    }

}]);