'use strict';

(function() {

    function controller(scope, Auth, location) {

        scope.login = function(form) {
            Auth.login(scope.username, scope.password).then(function() {
                
            });
        };

    }

    var dependencies = ['$scope', 'Auth', '$location', controller];
    angular.module('insightApp').controller('MainCtrl', dependencies);

}).call(null);
