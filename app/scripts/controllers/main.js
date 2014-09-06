'use strict';

(function() {

    function controller(scope, Auth, location, $rootScope, AuthEvents, Session) {

        scope.credentials = {
            username: '',
            password: ''
        };

        if (Auth.isAuthenticated()) {
            location.path('/powerview');
        }

        scope.login = function(credentials) {
            Auth.login(credentials).then(function (user) {
                $rootScope.$broadcast(AuthEvents.loginSuccess);
                location.path('/powerview');
            }, function () {
                $rootScope.$broadcast(Auth.events.loginFailed);
            });
        };

    }

    var dependencies = ['$scope', 'Auth', '$location', '$rootScope', 'AuthEvents', 'Session', controller];
    angular.module('insightApp').controller('MainCtrl', dependencies);

}).call(null);
