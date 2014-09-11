'use strict';

(function() {

    function controller(scope, Session, http) {
        http.defaults.headers.post['CSRF-TOKEN'] = Session.csrfToken;

        function onLoad(data) {
            scope.data = data;
        }

        function load(onLoad) {
            http
                .post('/api/powerview', {})
                .then(function (res) {
                    var d = res.data;
                    if (d.status === "error") {
                        alert(d.message);
                    } else {
                        onLoad(d.data);
                    }
                });
        }

        load(onLoad);
    }

    angular.module('insightApp')
    .controller('PowerviewCtrl', ['$scope', 'Session', '$http', controller]);

}).call(null);
