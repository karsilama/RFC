(function(){

  'use strict';

  angular.module ('app.services')

      .service('resolveService', resolveService ) ;

      resolveService.$inject = ['$http','$q', 'localStorageService'] ;

      function resolveService($http, $q, localStorageService) {

        var service = {
          get : get ,
          setLocalstorage : setLocalstorage,
          getLocalstorage : getLocalstorage
        } ;

        return service;

        function setLocalstorage ( key, value ) {
          if ( localStorageService.isSupported  ) {
            localStorageService.set ( key, value ) ;
          }
        }

        function getLocalstorage ( key ) {
          if ( localStorageService.isSupported  ) {
            return localStorageService.get ( key ) ;
          }
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
