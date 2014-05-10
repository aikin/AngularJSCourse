myModule.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "pages/home_page.html",
        controller: HomePageController
    }).when("/home_page", {
            templateUrl: "pages/home_page.html",
            controller: HomePageController
	}).when("name", {				//*
	    templateUrl: "name",		//*将代码修改正确*
 	    controller:  "name"			//*
    }).when("/choose_people_page", {
        templateUrl: "pages/choose_people_page.html",
        controller: ChoosePeopleController
    }).otherwise({
        redirectTo: "/"
    });


});

/** Here is example
 myModule.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "pages/activity_list_page.html",
        controller: ActivityListController
    }).when("/activity_list_page", {
            templateUrl: "pages/activity_list_page.html",
            controller: ActivityListPageController
        }).when("/apply_page", {
            templateUrl: "pages/apply_page.html",
            controller: ApplyPageController
        }).otherwise({
            redirectTo: "/"
        });
});
 **/
