'use strict';

app.controller('appCtrl', function($scope, dataSrvc){

  $scope.me = dataSrvc.me;
  $scope.accounts = dataSrvc.accounts;
  $scope.cards = dataSrvc.cards;

  $scope.activeAccount = null;
  $scope.activeDetail = null;

  $scope.accountClicked = function(acctId){
    $scope.activeAccount = $scope.accounts.find((acct) => acct.id === acctId);
  };

  $scope.detailClicked = function(cardId){
    $scope.activeDetail = $scope.activeAccount.data.find((card) => card.id === cardId);
  };

  $scope.clearActive = function(){
    if ($scope.activeDetail) return $scope.activeDetail = null;
    if ($scope.activeAccount) return $scope.activeAccount = null;
    console.log("cleared active", $scope.activeAccount);
  };

})
