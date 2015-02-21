'use strict';

angular.module('grubUpClientApp').controller('MainCtrl', [
  '$scope',
  '$timeout',
  'LocationService',
  function($scope, $timeout, LocationService) {

    var defaultCoords = [40.44, -79.95];

    $scope.setDefaults = function() {
      $scope.lat = defaultCoords[0];
      $scope.long = defaultCoords[1];
    };

    $scope.$on('mapInitialized', function(event, map) {
      $scope.map = map;
    });

    LocationService.getLocations(function(locations) {
      $scope.dynMarkers = _.map(locations, function(location, index) {
        var marker = new google.maps.Marker({
          title: location.name
        });
        marker.setPosition(new google.maps.LatLng(location.lat, location.long));
        marker.setMap($scope.map);
        return marker;
      });

    });

    $scope.$watch('zip', function(val) {
      if (_.isEmpty(val)) {
        $scope.setDefaults();
      } else {
        $scope.geoCode(val);
      }
    });

    $scope.showLocation = function(location) {
      console.log(location);
    };

    $scope.geoCode = function(input) {
      LocationService.latLongFromZip(input, function(lat, long) {
        $scope.lat = lat;
        $scope.long = long;
      });
    };

    $scope.init = function() {
      $scope.dynMarkers = [];
      $scope.setDefaults();
    };

    $scope.init();

  }
]);

