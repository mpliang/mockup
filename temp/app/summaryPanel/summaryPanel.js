'use strict';

app.directive('summaryPanel', function(){
  return {
    restrict: 'E',
    replace: true,
    controller: 'summaryPanelCtrl',
    scope: {
      acct: '=',
      clearActive: '&',
      detailClicked: '&'
    },
    templateUrl:'shared/summaryPanel/summaryPanel.html',
  }
})
app.controller('summaryPanelCtrl', function($scope){
  $scope.totalLimit = $scope.acct.data.reduce((tot, card) => {
    return tot + card.limit;
  }, 0);
  $scope.totalBalance = $scope.acct.data.reduce((tot, card) => {
    return tot + card.balance;
  }, 0);

  console.log("moment", moment(1456462889821).format('l'), moment().format('l'));
  $scope.due = moment(1456462889821).format('l');
})
