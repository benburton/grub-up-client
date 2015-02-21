'use strict';

angular.module('grubUpClientApp').service('LocationService', [
  '$http',
  function($http) {
    function LocationService() {

      this.getLocations = function(callback) {
        $http({method: 'GET', url: 'meals/location'}).success(function(data) {
          callback(data);
        });
      };

    }
    return new LocationService();
  }
]);