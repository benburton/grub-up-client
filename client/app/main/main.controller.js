'use strict';

angular.module('grubUpClientApp').controller('MainCtrl', [
  '$scope',
  'MealService',
  function($scope, MealService) {

    MealService.getMeals(function(meals) {
      $scope.meals = meals;
    });

    $scope.showMeal = function(meal) {
      window.alert('This would show a ' + meal.toLowerCase() + ' meal!');
    };

  }
]);
