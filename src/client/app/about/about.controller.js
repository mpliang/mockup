(function () {
    'use strict';

    angular
        .module('app.about')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function AboutController($q, dataservice, logger) {
        var vm = this;
        vm.news = {
            title: 'test',
            description: 'Hot Towel Angular is a SPA template for Angular developers.'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'About';

        activate();

        function activate() {
            var promises = [getHistory()];
            return $q.all(promises).then(function() {
                logger.info('About View');
            });
        }


        function getHistory() {
            return dataservice.getHistory().then(function (data) {
                vm.history = data;
                return vm.history;
            });
        }
    }
})();
