angular.module("apCalc", ["ngRoute", "ngSanitize", "jqwidgets"])
    .config(
        function ($locationProvider, $routeProvider) {

            $locationProvider.hashPrefix('!');

            $routeProvider.when("/", {
                templateUrl: "Views/tonnageHome.html"
            });

            $routeProvider.when("/home", {
                templateUrl: "Views/tonnageHome.html"
            });

            $routeProvider.when("/round", {
                templateUrl: "Views/tonnageRound.html"
            });

            $routeProvider.when("/round/:dia/:thickness", {
                templateUrl: "Views/tonnageRound.html"
            });

            $routeProvider.when("/square", {
                templateUrl: "Views/tonnageSquare.html"
            });

            $routeProvider.when("/square/:width/:thickness", {
                templateUrl: "Views/tonnageSquare.html"
            });

            $routeProvider.when("/oblong", {
                templateUrl: "Views/tonnageOblong.html"
            });

            $routeProvider.when("/oblong/:width/:length/:thickness", {
                templateUrl: "Views/tonnageOblong.html"
            });

            $routeProvider.when("/rectangle", {
                templateUrl: "Views/tonnageRectangle.html"
            });

            $routeProvider.when("/rectangle/:width/:length/:thickness", {
                templateUrl: "Views/tonnageRectangle.html"
            });

            $routeProvider.when("/calcTonnage/:shape/:width/:length/:thickness", {
                templateUrl: "Views/tonnageResult.html"
            });

        });

