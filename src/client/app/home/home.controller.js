(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['logger'];
    /* @ngInject */
    function HomeController(logger) {
        var vm = this;

        activate();

        function activate() {
            logger.info('Home View');
        }

    }
})();
