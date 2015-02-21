'use strict';

angular.module('grubUpClientApp').directive('locationPopout', [
  function() {
    return {
      link: function($scope, $element) {
      },
      template: [
        "<div class='location-popout' ng-class='{expanded: location}'>",
        "  <h2>{{location.name}}</h2>",
<<<<<<< HEAD
        "  <ul class='address'>",
        "    <li>{{location.address}}</li>",
        "    <li>Pittsburgh, PA {{location.zip}}</li>",
        "  </ul>",
=======
>>>>>>> 83cab11ee86590b12c8aec3e7aa4375995bbf6f5
        "</div>"].join(''),
      scope: {
        location: '='
      }
    }
  }
]);