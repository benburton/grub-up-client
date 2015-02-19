'use strict';

angular.module('grubUpClientApp').service('MealService', [
  '$http',
  function($http) {
    function MealService() {

      this.getMeals = function(callback) {
        $http({method: 'GET', url: 'meals'}).success(function(data, status, headers, config) {
          callback(data);
        });
      };

    }
    return new MealService();
  }
]);