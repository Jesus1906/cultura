/* global angular, random */
angular.module("app").config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/main');
        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);

        $stateProvider.state('main', {
            url: '/main',
            templateUrl: 'templates/main.html',
            controller: "usersCtrl",
            resolve: {
                loadMyCtrl: [
                    '$ocLazyLoad',
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'js/controllers/users-controllers.js',
                            'js/services/users-services.js'
                        ]);
                    }
                ]
            }
        });
    }
]);
