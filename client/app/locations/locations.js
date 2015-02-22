'use strict';

angular.module('grubUpClientApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/locations', {
        templateUrl: 'app/locations/locations.html',
        controller: 'LocationsCtrl'
      });
  });