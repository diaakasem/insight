'use strict';

(function() {

    function controller(scope, Auth, location, $rootScope, AuthEvents) {

        scope.credentials = {
            username: '',
            password: ''
        };

        scope.login = function(credentials) {
            Auth.login(credentials).then(function (user) {
                $rootScope.$broadcast(AuthEvents.loginSuccess);
                location.path('/powerview');
            }, function () {
                $rootScope.$broadcast(Auth.events.loginFailed);
            });
        };

    }

    var dependencies = ['$scope', 'Auth', '$location', '$rootScope', 'AuthEvents', controller];
    angular.module('insightApp').controller('MainCtrl', dependencies);

}).call(null);
