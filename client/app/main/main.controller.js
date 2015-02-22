'use strict';

angular.module('grubUpClientApp').controller('MainCtrl', [
  '$rootScope',
  '$scope',
  '$timeout',
  'LocationService',
  function($rootScope, $scope, $timeout, LocationService) {

    $rootScope.showSearch = true;
    $rootScope.location = {};

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
      $scope.markers = _.map(locations, function(location) {
        return {
          position: [location.lat, location.long],
          location: location
        };
      });
      LocationService.getCurrent(function success(currentLocation) {
        $scope.current = currentLocation;
      });
    });

    $scope.$on('locationChange', function(event, data) {
      if (_.isEmpty(data.zip)) {
        $scope.setDefaults();
      } else {
        $scope.geoCode(data.zip);
      }
    });

    $scope.showLocation = function(index, data) {
      var end = data.location.address + ' ' + data.location.zip;
      if ($scope.selectedLocation === data.location) {
        $scope.selectedLocation = undefined;
      } else {
        $scope.selectedLocation = $scope.current ?
          _.merge(_.clone(data.location), { directionsUrl: LocationService.getDirectionsUrl($scope.current, end) }) :
          data.location;
      }
    };

    $scope.$watch('selectedLocation', function() {
      if ($scope.selectedLocation) {
        $scope.mapClass = 'col-xs-12 col-md-8 col-lg-9 pull-right';
        $scope.popoutClass = 'col-xs-12 col-md-4 col-lg-3';
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
      $scope.setDefaults();
      $scope.locations = {
        closest: []
      };
      LocationService.getClosest(function(closest) {
        $scope.$apply(function() {
          $scope.locations.closest = closest;
        });
      });
    };

    $scope.init();

  }
]);

