'use strict';

angular.module('grubUpClientApp').controller('MainCtrl', [
  '$scope',
  '$timeout',
  'LocationService',
  function($scope, $timeout, LocationService) {

    var defaultCoords = [40.44, -79.95];

    $scope.draggable = !Modernizr.touch;

    $scope.setDefaults = function() {
      $scope.lat = defaultCoords[0];
      $scope.long = defaultCoords[1];
    };

    $scope.$on('mapInitialized', function(event, map) {
      $scope.map = map;
    });

    LocationService.getLocations(function(locations) {
      $scope.markers = _.map(locations, function(location, index) {
        return {
          position: [location.lat, location.long],
          location: location
        };
      });
    });

    $scope.$watch('zip', function(val) {
      if (_.isEmpty(val)) {
        $scope.setDefaults();
      } else {
        $scope.geoCode(val);
      }
    });

    $scope.showLocation = function(index, data) {
      if ($scope.selectedLocation === data.location) {
        $scope.selectedLocation = undefined;
      } else {
        $scope.selectedLocation = data.location;
      }
    };

    $scope.$watch('selectedLocation', function() {
      if ($scope.selectedLocation) {
        $scope.mapClass = 'col-xs-9 pull-right';
        $scope.popoutClass = 'col-xs-3';
      } else {
        $scope.mapClass = 'col-xs-12';
        $scope.popoutClass = 'hidden';
      }
    });

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

