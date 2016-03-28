'use strict';

(function () {
    'use strict';

    angular.module('app.about').run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'about',
            config: {
                url: '/about',
                templateUrl: 'app/about/about.html',
                controller: 'AboutController',
                controllerAs: 'vm',
                title: 'about',
                settings: {
                    nav: 1,
                    content: '<i class="fa fa-about"></i> About'
                }
            }
        }];
    }
})();