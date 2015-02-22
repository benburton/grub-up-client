'use strict';

angular.module('grubUpClientApp').directive('locationPopout', [
  function() {
    return {
      link: function($scope, $element) {
        $scope.hours = function(meal) {
          return meal.hours.join(' - ');
        };

        $scope.close = function() {
          $scope.location = undefined;
        };
      },
      template: [
        "<div class='location-popout'>",
        "  <a class='close-popout' ng-click='close()'><i>+</i></a>",
        "  <h2>{{location.menu_type}} Menu</h2>",
        "  <hr/>",
        "  <h3 class='name'>{{location.name}}</h3>",
        "  <ul class='address'>",
        "    <li>{{location.address}}</li>",
        "    <li>Pittsburgh, PA {{location.zip}}</li>",
        "  </ul>",
        "  <hr/>",
        "  <dl>",
        "    <dt ng-if='location.breakfast'>Breakfast</dt>",
        "    <dd class='hours' ng-if='location.breakfast'>{{hours(location.breakfast)}}</dd>",
        "    <dt ng-if='location.lunch'>Lunch</dt>",
        "    <dd class='hours' ng-if='location.lunch'>{{hours(location.lunch)}}</dd>",
        "    <dt ng-if='location.snack'>Snack</dt>",
        "    <dd class='hours' ng-if='location.snack'>{{hours(location.snack)}}</dd>",
        "  </dl>",
        "</div>"
      ].join(''),
      replace: true,
      scope: {
        location: '='
      }
    }
  }
]);