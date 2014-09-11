'use strict';

(function() {

    function controller(scope, Auth, location, $rootScope, AuthEvents) {

        scope.credentials = {
            username: '',
            password: ''
        };

        if (Auth.isAuthenticated()) {
            location.path('/powerview');
        }

        scope.login = function(credentials) {
            Auth.login(credentials).then(function() {
                $rootScope.$broadcast(AuthEvents.loginSuccess);
                location.path('/powerview');
            }, function (message) {
                alert(message);
                $rootScope.$broadcast(AuthEvents.loginFailed);
            });
        };

    }

    var dependencies = ['$scope', 'Auth', '$location', '$rootScope', 'AuthEvents', controller];
    angular.module('insightApp').controller('MainCtrl', dependencies);

}).call(null);
