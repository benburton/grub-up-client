'use strict';

angular.module('grubUpClientApp').controller('MenuCtrl', [
  '$rootScope',
  '$scope',
  'MenuService',
  function($rootScope, $scope, MenuService) {
    $rootScope.showSearch = false;

    $scope.menuIndex = 0;

    $scope.weeks = [
      ['6/15/2015', '6/16/2015', '6/17/2015', '6/18/2015', '6/19/2015'],
      ['6/22/2015', '6/23/2015', '6/24/2015', '6/25/2015', '6/26/2015'],
      ['6/29/2015', '6/30/2015', '7/1/2015', '7/2/2015', '7/3/2015'],
      ['7/6/2015', '7/7/2015', '7/8/2015', '7/9/2015', '7/10/2015'],
      ['7/13/2015', '7/14/2015', '7/15/2015', '7/16/2015', '7/17/2015'],
      ['7/20/2015', '7/21/2015', '7/22/2015', '7/23/2015', '7/24/2015'],
      ['7/27/2015', '7/28/2015', '7/29/2015', '7/30/2015', '7/31/2015'],
      ['8/3/2015', '8/4/2015', '8/5/2015', '8/6/2015','8/7/2015'],
      ['8/10/2015', '8/11/2015', '8/12/2015', '8/13/2015', '8/14/2015']
    ];

    $scope.next = function() {
      $scope.menuIndex = $scope.menuIndex + 1;
    };

    $scope.hasNext = function() {
      return $scope.menuIndex != $scope.weeks.length - 1;
    };

    $scope.previous = function() {
      $scope.menuIndex = $scope.menuIndex - 1;
    };

    $scope.hasPrevious = function() {
      return $scope.menuIndex != 0;
    };

    $scope.weekHeader = function(index) {
      return $scope.weeks[index][0] + " - " + $scope.weeks[index][4];
    };

    $scope.dayFor = function($index) {
      return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'][$index];
    };

    $scope.init = function() {
      var menuType = 'hot';
      $scope.menus = new Array($scope.weeks.length);
      _.map($scope.weeks, function(week, index) {
        MenuService.getMenu({dates: week, menuType: menuType}, function(result) {
          $scope.menus[index] = result;
        });
      });
    };

    $scope.init();

  }
]);