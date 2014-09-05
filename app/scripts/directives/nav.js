'use strict';
(function() {

    function controller(scope, Auth) {
        scope.visible = !!Auth.user;
    }

    angular.module('insightApp')
    .directive('nav', function () {
        var dependencies = ['$scope', 'Auth', controller]
        return {
            template: '<div></div>',
            restrict: 'E',
            controller: dependencies
        };
    });
}).call(null);
