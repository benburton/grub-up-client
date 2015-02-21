'use strict';

angular.module('grubUpClientApp').controller('MainCtrl', [
  '$scope',
  'LocationService',
  function($scope, LocationService) {

    LocationService.getLocations(function(locations) {
      $scope.locations = locations;
    });

    $scope.showLocation = function(location) {
      console.log(location);
    };

  }
]);
