'use strict';

angular.module('grubUpClientApp').service('LocationService', [
  '$http',
  function($http) {
    var geocoder = new google.maps.Geocoder();

    function LocationService() {

      this.getLocations = function(callback) {
        $http({method: 'GET', url: 'meals/location'}).success(function(data) {
          callback(data);
        });
      };

      this.latLongFromZip = function(zip, callback) {
        geocoder.geocode({address: zip}, function(results, status) {
          var lat, long;
          if (status == google.maps.GeocoderStatus.OK) {
            lat = results[0].geometry.location.lat();
            long = results[0].geometry.location.lng();
            callback(lat, long);
          }
        });
      };

    }
    return new LocationService();
  }
]);