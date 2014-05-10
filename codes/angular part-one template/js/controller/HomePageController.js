function HomePageController($scope, $navigate) {

    $scope.go_help_ordering_page = function () {
        $navigate.go('/help_ordering_page')
    }

}