(function(){

  'use strict';

  angular.module ('rfc')

      .factory('dteResolve', dteResolve ) ;

      dteResolve.$inject = ['$http','$q', 'localStorageService'] ;

      function dteResolve($http, $q, localStorageService) {

        var factory = {
          get : get ,
          orderByKey : orderByKey,
          setLocal : setLocal,
          getLocal : getLocal
        } ;

        return factory;

        function setLocal ( key, value ) {
          if ( localStorageService.isSupported  ) {
            localStorageService.set ( key, value )
          }
        }

        function getLocal ( key ) {
          if ( localStorageService.isSupported  ) {
            return localStorageService.get ( key )
          }
        }

        function orderByKey ( unOrdered , key) {
          var ordered = {} ;
          for ( var i in unOrdered ) {
            ordered[unOrdered[i][key]] = unOrdered[i] ;
          }
          return ordered ;
        }

        function get(url) {

          var defered = $q.defer();
          var promise = defered.promise;

          $http
            .get( url )
            .success(function( response ){
              defered.resolve( response ) ;
            })
            .error(function( error ){
              defered.reject( error ) ;
            }) ;

          return promise ;
        }

      }
})() ;
