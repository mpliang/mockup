'use strict';

app.directive('navBar', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl:'shared/navBar/navBar.html',
    scope: true
  }
})
