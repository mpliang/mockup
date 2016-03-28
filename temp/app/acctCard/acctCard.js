'use strict';

app.directive('acctCard', function($parse){
  return {
    restrict: 'E',
    replace: true,
    templateUrl:'shared/acctCard/acctCard.html',
    scope: {
      acct: '=',
    }
  }
})
