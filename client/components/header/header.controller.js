'use strict';

angular.module('grubUpClientApp')
  .controller('HeaderCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.submit = function() {
      $rootScope.$broadcast('locationChange', {zip: $scope.zip});
    }
  }]);