'use strict';

angular.module('grubUpClientApp').service('LocationService', [
  '$http',
  function($http) {
    var geocoder = new google.maps.Geocoder();
    var directionsService = new google.maps.DirectionsService();
    var current;

    function LocationService() {

      this.getCurrent = function(success, failure) {
        if (current) {
          success(current);
        } else if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            current = [position.coords.latitude, position.coords.longitude];
            success(current);
          }, function() {},
          { timeout:10000 });
        } else {
          failure();
        }
      };

      this.getLocations = function(callback) {
        $http({method: 'GET', url: 'meals/location'}).success(function(data) {
          callback(data);
        });
      };

      this.getDirectionsUrl = function(start, end) {
        return "http://maps.google.com/maps?saddr=" + start[0] + ',' + start[1] + "&daddr=\"" + end + "\"";
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