'use strict';

(function() {

    function Session() {
        // AngularJS will instantiate a singleton by calling "new" on this function
        this.create = function (sessionId, userId, role) {
            this.id = sessionId;
            this.userId = userId;
            this.role = role;
        };

        this.destroy = function () {
            this.id = null;
            this.userId = null;
            this.role = null;
        };

        return this;
    }

    angular.module('insightApp')
    .service('Session', Session);

}).call(null);
