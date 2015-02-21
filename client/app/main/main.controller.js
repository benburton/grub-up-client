'use strict';

angular.module('grubUpClientApp').controller('MainCtrl', [
  '$scope',
  '$timeout',
  'LocationService',
  function($scope, $timeout, LocationService) {

    $scope.lat = '40.44';
    $scope.long = '-79.95';

    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(geoData) {
        console.log(geoData.coords);
      });
    }

    $scope.$on('mapInitialized', function(event, map) {
      $scope.map = map;
    });

    LocationService.getLocations(function(locations) {
      function locationToPosition(location) {
        return '[' + location.lat.toFixed(2) + ',' + location.long.toFixed(2) + ']';
      }

      $scope.dynMarkers = _.map(locations, function(location, index) {
        var marker = new google.maps.Marker({
          title: location.name
        });
        marker.setPosition(new google.maps.LatLng(location.lat, location.long));
        marker.setMap($scope.map);
        return marker;
      });

    });

    $scope.showLocation = function(location) {
      console.log(location);
    };

    $scope.dynMarkers = [];

  }
]);

