(function(){
  'use strict';
  angular
    .module('rfc')

    .constant('LOCALSTORAGE_PREFIX', 'DTERFC')

    .config ( configFunction ) ;

    configFunction.$inject = ['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider', 'LOCALSTORAGE_PREFIX'];

    function configFunction($stateProvider, $urlRouterProvider, localStorageServiceProvider, LOCALSTORAGE_PREFIX) {

      $urlRouterProvider.otherwise("/style-guide");

      localStorageServiceProvider.setPrefix(LOCALSTORAGE_PREFIX);

      $stateProvider

        .state('style-guide', {
          url : '/style-guide',
          templateUrl : '/pages/style-guide/style-guide.html',
          controller : 'styleGuideController',
          controllerAs : 'vm',
          resolve : {
            data : function( dteResolve ) {
              return dteResolve
                .get('server/data.json' )
                .then(function(data){
                  return data ;
                })
                .catch( function(error) {
                  console.log(error) ;
                } ) ;
            }

          }
        }) ;

      }
})() ;
