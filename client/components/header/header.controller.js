'use strict';

angular.module('grubUpClientApp')
  .controller('HeaderCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.$watch('zip', function() {
      $rootScope.$broadcast('locationChange', {zip: $scope.zip});
    });
  }]);