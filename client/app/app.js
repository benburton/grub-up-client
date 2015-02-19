'use strict';

angular.module('grubUpClientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ngMockE2E'
]).config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
}).run(function($httpBackend) {
  $httpBackend.whenGET(/.*\.html/).passThrough();

  $httpBackend.whenGET('meals').respond([
    'Breakfast',
    'Lunch',
    'Dinner'
  ]);
});