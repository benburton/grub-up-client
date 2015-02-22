'use strict';

angular.module('grubUpClientApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/menus', {
        templateUrl: 'app/menu/menu.html',
        controller: 'MenuCtrl'
      });
  });