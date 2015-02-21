'use strict';

angular.module('grubUpClientApp').directive('locationPopout', [
  function() {
    return {
      link: function($scope, $element) {
      },
      template: [
        "<div class='location-popout' ng-class='{expanded: location}'>",
        "  <h2>{{location.name}}</h2>",
        "  <ul class='address'>",
        "    <li>{{location.address}}</li>",
        "    <li>Pittsburgh, PA {{location.zip}}</li>",
        "  </ul>",
        "</div>"].join(''),
      scope: {
        location: '='
      }
    }
  }
]);