'use strict';

app.directive('accountsPanel', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl:'shared/accountsPanel/accountsPanel.html',
    scope: {
      myAccounts: '=',
      accountClickHandler: '&',
    }
  }
})
