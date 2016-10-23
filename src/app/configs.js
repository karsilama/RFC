(function(){
  'use strict';
  angular
    .module('rfc')
    .config ( configFunction )

    configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configFunction($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/style-guide");

      $stateProvider

        .state('style-guide', {
          url : '/style-guide',
          templateUrl : '/pages/style-guide.html'
        })
    }
})()
