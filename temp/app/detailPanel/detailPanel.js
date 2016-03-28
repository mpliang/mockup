'use strict';

app.directive('detailPanel', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: true,
    controller: 'detailPanelCtrl',
    templateUrl:'shared/detailPanel/detailPanel.html'
  }
})
app.controller('detailPanelCtrl', function($scope){
})
