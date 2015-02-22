'use strict';

angular.module('grubUpClientApp').service('MenuService', [
  '$http',
  function($http) {

    function MenuService() {

      this.getMenus = function() {

      };

    }
    return new MenuService();
  }
]);