'use strict';

angular.module('grubUpClientApp').controller('LocationsCtrl', [
  '$rootScope',
  '$scope',
  'LocationService',
  function($rootScope, $scope, LocationService) {
    $rootScope.showSearch = false;

    $scope.init = function() {
      LocationService.getLocations(function(locations) {
        $scope.locations = _.sortBy(locations, function(location) {
          return location.name;
        });
      });
    };

    $scope.init();

  }
]);