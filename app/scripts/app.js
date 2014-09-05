'use strict';
(function() {

    var app = angular
    .module('insightApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ]);

    app.config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/powerview', {
            templateUrl: 'views/powerview.html',
            controller: 'PowerviewCtrl'
        })
        .when('/settings', {
            templateUrl: 'views/settings.html',
            controller: 'SettingsCtrl'
        })
        .when('/performance', {
            templateUrl: 'views/performance.html',
            controller: 'PerformanceCtrl'
        })
        .when('/diagnosis', {
            templateUrl: 'views/diagnosis.html',
            controller: 'DiagnosisCtrl'
        })
        .when('/alerts', {
            templateUrl: 'views/alerts.html',
            controller: 'AlertsCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    });

    app.run(function() {
    });

}).call(null);
