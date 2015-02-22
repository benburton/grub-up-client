'use strict';

angular.module('grubUpClientApp').controller('MenuCtrl', [
  '$rootScope',
  '$scope',
  'MenuService',
  function($rootScope, $scope, MenuService) {
    $rootScope.showSearch = false;
  }
]);