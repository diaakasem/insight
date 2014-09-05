'use strict';

(function() {

    function Auth(q, http, Session) {

        this.logout = function() {
            this.user = null;
        };

        this.login = function(credentials) {

            var deferred = q.defer();

            var that = this;
            setTimeout(function() {
                Session.create(0, 0, 'user');
                deferred.resolve(true);
                //deferred.notify('About to greet ' + name + '.');

                //if (okToGreet(name)) {
                    //deferred.resolve('Hello, ' + name + '!');
                //} else {
                    //deferred.reject('Greeting ' + name + ' is not allowed.');
                //}
            }, 1000);


            //return $http
                //.post('/login', credentials)
                //.then(function (res) {
                    //Session.create(res.data.id, res.data.user.id,
                        //res.data.user.role);
                    //return res.data.user;
                //});

            return deferred.promise;
        };

        this.isAuthorized = function(roles) {
            if (!angular.isArray(roles)) {
                roles = [roles];
            }
            return (this.isAuthenticated() &&
                    roles.indexOf(Session.role) !== -1);
        };

        this.isAuthenticated = function() {
            return !!Session.userId;
        };

        return this;
    }

    var dependencies = ['$q', '$http', 'Session', Auth];
    angular.module('insightApp').service('Auth', dependencies);

}).call(null);
