angular.module("apCalc", ["ngRoute", "ngSanitize", "jqwidgets"])
    .config(
        function ($locationProvider, $routeProvider) {

            $locationProvider.hashPrefix('!');

            $routeProvider.when("/", {
                templateUrl: "home/Home.html"
                //templateUrl: "tonnage/tonnageHome.html"
            });

            $routeProvider.when("/Conversion", {
                templateUrl: "conversion/conversion.html"
            });

            $routeProvider.when("/Clearance", {
                templateUrl: "clearance/clearance.html"
            });

            $routeProvider.when("/Diagonal", {
                templateUrl: "diagonal/diagonal.html"
            });

            $routeProvider.when("/Tonnage", {
                templateUrl: "tonnage/tonnageHome.html"
            });

            $routeProvider.when("/round", {
                templateUrl: "tonnage/tonnageRound.html"
            });

            $routeProvider.when("/round/:dia/:thickness", {
                templateUrl: "tonnage/tonnageRound.html"
            });

            $routeProvider.when("/square", {
                templateUrl: "tonnage/tonnageSquare.html"
            });

            $routeProvider.when("/square/:width/:thickness", {
                templateUrl: "tonnage/tonnageSquare.html"
            });

            $routeProvider.when("/oblong", {
                templateUrl: "tonnage/tonnageOblong.html"
            });

            $routeProvider.when("/oblong/:width/:length/:thickness", {
                templateUrl: "tonnage/tonnageOblong.html"
            });

            $routeProvider.when("/rectangle", {
                templateUrl: "tonnage/tonnageRectangle.html"
            });

            $routeProvider.when("/rectangle/:width/:length/:thickness", {
                templateUrl: "tonnage/tonnageRectangle.html"
            });

            $routeProvider.when("/calcTonnage/:shape/:width/:length/:thickness", {
                templateUrl: "tonnage/tonnageResult.html"
            });

        });

