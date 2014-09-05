'use strict';
(function() {

    var app = angular
    .module('insightApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ]);

    app.constant('AuthEvents', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    });

    app.config(function ($routeProvider, $httpProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            access: 'anonymous'
        })
        .when('/powerview', {
            templateUrl: 'views/powerview.html',
            controller: 'PowerviewCtrl',
            access: 'user'
        })
        .when('/settings', {
            templateUrl: 'views/settings.html',
            controller: 'SettingsCtrl',
            access: 'user'
        })
        .when('/performance', {
            templateUrl: 'views/performance.html',
            controller: 'PerformanceCtrl',
            access: 'user'
        })
        .when('/diagnosis', {
            templateUrl: 'views/diagnosis.html',
            controller: 'DiagnosisCtrl',
            access: 'user'
        })
        .when('/alerts', {
            templateUrl: 'views/alerts.html',
            controller: 'AlertsCtrl',
            access: 'user'
        })
        .otherwise({
            redirectTo: '/'
        });

        $httpProvider.interceptors.push([
            '$injector', function ($injector) {
                return $injector.get('AuthInterceptor');
            }
        ]);
    });

    app.run(function($rootScope, Auth, AuthEvents, $location) {
        $rootScope.$on('$stateChangeStart', function (event, next) {
            var authorizedRoles = next.data.access;
            if (!Auth.isAuthorized(access)) {
                event.preventDefault();
                if (Auth.isAuthenticated()) {
                    // user is not allowed
                    $rootScope.$broadcast(AuthEvents.notAuthorized);
                } else {
                    // user is not logged in
                    $rootScope.$broadcast(AuthEvents.notAuthenticated);
                }
            }
        });

        function notAuth() {
            $location.path('/');
        }

        $rootScope.$on(AuthEvents.notAuthenticated, notAuth);
        $rootScope.$on(AuthEvents.sessionTimeout, notAuth);
    });

}).call(null);
