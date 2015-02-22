'use strict';

angular.module('grubUpClientApp').service('MenuService', [
  '$http',
  function($http) {
    var menu;

    function MenuService() {
      var self = this;

      function byType(type, callback) {
        self.getMenu(function(menu) {
          callback();
        });
      }

      this.getMenu = function(query, callback) {
        function filter(menu) {
          var result = menu;
          if (query.menuType) {
            result = _.filter(result, function(menuItem) {
              return menuItem.menu_type.toLowerCase() == query.menuType;
            });
          }
          if (query.month) {
            result = _.filter(result, function(menuItem) {
              return menuItem.date.split("/")[0] == query.month;
            });
          }
          if (query.year) {
            result = _.filter(result, function(menuItem) {
              return menuItem.date.split("/")[2] == query.year;
            });
          }
          if (query.dates) {
            result = _.filter(result, function(menuItem) {
              return _.contains(query.dates, menuItem.date);
            });
          }
          callback(result);
        }

        if (menu) {
          filter(menu);
        } else {
          $http({method: 'GET', url: 'menu'}).success(function(data) {
            menu = data;
            filter(menu);
          });
        }
      };
    }
    return new MenuService();
  }
]);