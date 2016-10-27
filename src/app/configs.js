(function(){
  'use strict';
  angular
    .module('rfc')
    .config ( configFunction ) ;

    configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configFunction($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/style-guide");

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
