'use strict';

(function() {

    function Auth(q) {

        this.logout = function(username, password) {
            this.user = null;
        };

        this.login = function(username, password) {

            var deferred = q.defer();

            var that = this;
            setTimeout(function() {
                that.user = {};
                deferred.resolve(true);
                //deferred.notify('About to greet ' + name + '.');

                //if (okToGreet(name)) {
                    //deferred.resolve('Hello, ' + name + '!');
                //} else {
                    //deferred.reject('Greeting ' + name + ' is not allowed.');
                //}
            }, 1000);

            return deferred.promise;
        };
    }

    var dependencies = ['$q', Auth]
    angular.module('insightApp').service('Auth', dependencies);

}).call(null);
