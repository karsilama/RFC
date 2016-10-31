(function(){

  'use strict';

  angular

    .module('app.core')

    .config ( configFunction ) ;

    configFunction.$inject = ['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider', 'LOCALSTORAGE_PREFIX'];

    function configFunction($stateProvider, $urlRouterProvider, localStorageServiceProvider, LOCALSTORAGE_PREFIX) {

      $urlRouterProvider.otherwise("/style-guide");

      localStorageServiceProvider.setPrefix(LOCALSTORAGE_PREFIX);

      $stateProvider

      .state('app', {
        url : '/',
        abstract:  true ,
      })

        .state('style-guide', {
          url : '/style-guide',
          templateUrl : '/pages/style-guide/style-guide.html',
          controller : 'styleGuideController',
          controllerAs : 'vm',
          resolve : {
            data : function( styleGuideService ) {
              return styleGuideService.getData() ;
            }
          }
        }) ;

      }
})() ;
