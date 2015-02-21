'use strict';

angular.module('grubUpClientApp').directive('locationPopout', [
  function() {
    return {
      link: function($scope, $element) {
      },
      template: [
        "<div class='location-popout'>",
        "  <h2>{{location.name}}</h2>",
        "  <ul class='address'>",
        "    <li>{{location.address}}</li>",
        "    <li>Pittsburgh, PA {{location.zip}}</li>",
        "  </ul>",
        "</div>"].join(''),
      replace: true,
      scope: {
        location: '='
      }
    }
  }
]);