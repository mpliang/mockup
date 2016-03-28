'use strict';

(function () {
    'use strict';

    angular.module('app.core').factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
        var service = {
            getHistory: getHistory
        };

        return service;

        function getHistory() {
            return $http.get('http://localhost:8001/api/history').then(success).catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getHistory')(e);
            }
        }
    }
})();