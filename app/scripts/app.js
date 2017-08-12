(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeCtrl as home',
      templateUrl: '/templates/home.html'
    });

    $stateProvider
    .state('form', {
      url: '/',
      controller: 'FormCtrl as form',
      templateUrl: '/templates/form.html'
    });

  }

  angular
  .module('blocChat', ['ui.router', 'firebase'])
  .config(config);
})();
