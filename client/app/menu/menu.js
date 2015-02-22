'use strict';

angular.module('grubUpClientApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/menu', {
        templateUrl: 'app/menu/menu.html',
        controller: 'MenuCtrl'
      });
  });