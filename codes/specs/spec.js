var test_of = {
    '1,视图模版': function () {
        compute_result_of_js_angular_section_1_practice_1()
    },

    '1,变量绑定': function () {
        compute_result_of_js_angular_section_2_practice_1()
    },
    '2,函数绑定': function () {
        compute_result_of_js_angular_section_2_practice_2()
    },

    '1,列表迭代器': function () {
        compute_result_of_js_angular_section_3_practice_1()
    },

    '1,本地存储': function () {
        compute_result_of_js_angular_section_4_practice_1()
    },
    '2,显示与隐藏': function () {
        compute_result_of_js_angular_section_4_practice_2()
    }

}

function compute_result_of_js_angular_section_1_practice_1() {

    var home_page_id = document.getElementById("home_page")

    if (home_page_id) {
        var scope = angular.element(home_page_id).scope();
        scope.$apply(function () {
            scope.go_help_ordering_page();
        });
        setTimeout('document.getElementById("help_ordering_page")?source.postMessage(true, "http://" + window.location.host):source.postMessage(false, "http://" + window.location.host)', 700)

    } else {
        source.postMessage(false, "http://" + window.location.host);
    }

}

function compute_result_of_js_angular_section_2_practice_1() {

    var home_page_id = document.getElementById("home_page");
    if (home_page_id) {
        var scope = angular.element(home_page_id).scope();
        scope.$apply(function () {
            scope.go_help_ordering_page();
        });
    }

    var help_ordering_page_id = document.getElementById("help_ordering_page")
    if (help_ordering_page_id) {
        var scope = angular.element(help_ordering_page_id).scope();

        if (scope.choose_people && scope.choose_people == "选人") {
            source.postMessage(true, "http://" + window.location.host);
        } else {
            source.postMessage(false, "http://" + window.location.host);
        }

    } else {
        source.postMessage(false, "http://" + window.location.host);
    }
}

function compute_result_of_js_angular_section_2_practice_2() {

    var home_page_id = document.getElementById("home_page");
    if (home_page_id) {
        var scope = angular.element(home_page_id).scope();
        scope.$apply(function () {
            scope.go_help_ordering_page();
        });
    }

    var help_ordering_page_id = document.getElementById("help_ordering_page")
    if (help_ordering_page_id) {
        var scope = angular.element(help_ordering_page_id).scope();
        scope.$apply(function () {
            if (scope.choose_people == "选人" && typeof scope.go_choose_people_page == "function") {
                scope.go_choose_people_page();
            }
        });
        setTimeout('document.getElementById("choose_people_page")?source.postMessage(true, "http://" + window.location.host):source.postMessage(false, "http://" + window.location.host)', 700);
    } else {
        source.postMessage(false, "http://" + window.location.host);
    }
}

function compute_result_of_js_angular_section_3_practice_1() {

    var home_page_id = document.getElementById("home_page");
    if (home_page_id) {
        var scope = angular.element(home_page_id).scope();
        scope.$apply(function () {
            scope.go_help_ordering_page();
        });
    }

    var help_ordering_page_id = document.getElementById("help_ordering_page")
    if (help_ordering_page_id) {
        var scope = angular.element(help_ordering_page_id).scope();
        scope.$apply(function () {
            scope.go_choose_people_page();
        });
    }

    var choose_people_page_id = document.getElementById("choose_people_page");
    if (choose_people_page_id) {
        var scope = angular.element(choose_people_page_id).scope();
        scope.$apply(function () {
            var users = scope.users;
            var array = ['赵大','钱二','张三','李四','王五','刘六'];
            var count = 0;
            for(index in users){
                count+=$.inArray(users[index].name, array);
            }

            count==15?source.postMessage(true, "http://" + window.location.host):source.postMessage(false, "http://" + window.location.host);

        });
    } else {
        source.postMessage(false, "http://" + window.location.host);
    }

}

function compute_result_of_js_angular_section_4_practice_1() {

    var home_page_id = document.getElementById("home_page");
    if (home_page_id) {
        var scope = angular.element(home_page_id).scope();
        scope.$apply(function () {
            scope.go_help_ordering_page();
        });
    }

    var help_ordering_page_id = document.getElementById("help_ordering_page")
    if (help_ordering_page_id) {
        var scope = angular.element(help_ordering_page_id).scope();
        scope.$apply(function () {
            scope.go_choose_people_page();
        });
    }

    var choose_people_page_id = document.getElementById("choose_people_page");
    if (choose_people_page_id) {
        var scope = angular.element(choose_people_page_id).scope();
        localStorage.clear();
        scope.$apply(function () {
                scope.select_user('赵大');
        });

        if (localStorage.getItem('user') == '赵大') {
            setTimeout('document.getElementsByClassName("input-sm").length != 0 && document.getElementsByClassName("input-sm")[0].value == "赵大" ? source.postMessage(true, "http://" + window.location.host) : source.postMessage(false, "http://" + window.location.host)', 700)
        } else {
            source.postMessage(false, "http://" + window.location.host);
        }
    } else {
        source.postMessage(false, "http://" + window.location.host);
    }

}

function compute_result_of_js_angular_section_4_practice_2() {

    var home_page_id = document.getElementById("home_page");
    if (home_page_id) {
        var scope = angular.element(home_page_id).scope();
        scope.$apply(function () {
            scope.go_help_ordering_page();
        });
    }

    var help_ordering_page_id = document.getElementById("help_ordering_page")
    if (help_ordering_page_id) {
        var scope = angular.element(help_ordering_page_id).scope();
        scope.$apply(function () {
            scope.go_choose_people_page();
        });
    }

    var choose_people_page_id = document.getElementById("choose_people_page");
    if (choose_people_page_id) {
        var scope = angular.element(choose_people_page_id).scope();
        localStorage.clear();
        scope.$apply(function () {
            scope.select_user('赵大');
        });
        if( document.getElementsByClassName('sure-btn').length != 0 && document.getElementsByClassName('sure-btn')[0].attributes[1].nodeValue == 'user') {
            source.postMessage(true, "http://" + window.location.host);
        } else {
            source.postMessage(false, "http://" + window.location.host);
        }
    } else {
        source.postMessage(false, "http://" + window.location.host);
    }

}