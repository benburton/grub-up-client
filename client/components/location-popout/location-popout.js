'use strict';

angular.module('grubUpClientApp').directive('locationPopout', [
  function() {
    return {
      link: function($scope, $element) {
      },
      template: [
        "<div class='location-popout' ng-class='{expanded: location}'>",
        "  <h2>{{location.name}}</h2>",
        "</div>"].join(''),
      scope: {
        location: '='
      }
    }
  }
]);