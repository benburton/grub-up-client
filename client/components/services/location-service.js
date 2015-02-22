'use strict';

angular.module('grubUpClientApp').service('LocationService', [
  '$http',
  function($http) {
    var geocoder = new google.maps.Geocoder();
    var directionsService = new google.maps.DirectionsService();
    var current, locations;

    function LocationService() {

      this.getCurrent = function(success, failure) {
        failure = failure || function() {};
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
        if (locations) {
          callback(locations);
        } else {
          $http({method: 'GET', url: 'meals/location'}).success(function(data) {
            locations = data;
            callback(locations);
          });
        }
      };

      this.getClosest = function(callback, n) {
        var self = this;
        function metersToMiles(meters) {
          return meters * 0.000621371;
        }
        function distanceBetween(one, two) {
          var oneLatLng = new google.maps.LatLng(one[0], one[1]);
          var twoLatLng = new google.maps.LatLng(two[0], two[1]);
          return google.maps.geometry.spherical.computeDistanceBetween(oneLatLng, twoLatLng);
        }
        n = n || 5;

        self.getLocations(function(locations) {
          self.getCurrent(function(current) {
            var start = new google.maps.LatLng(current[0], current[1]);
            callback(_(locations).map(function (location) {
              location.distance = metersToMiles(distanceBetween(current, [location.lat, location.long])).toFixed(2);
              return location;
            }).sortBy(function(location) {
              return location.distance;
            }).take(n).value());
          });
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