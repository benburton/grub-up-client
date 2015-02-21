'use strict';

angular.module('grubUpClientApp').controller('MainCtrl', [
  '$scope',
  '$timeout',
  'LocationService',
  function($scope, $timeout, LocationService) {
    var map;
    $scope.$on('mapInitialized', function(e, evtMap) {
      map = evtMap;
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
        marker.setMap(map);
        return marker;
      });

    });

    $scope.showLocation = function(location) {
      console.log(location);
    };

    $scope.dynMarkers = [];

  }
]);

