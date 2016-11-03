(function(){

  'use strict';

  angular.module ('app.services')

      .service('resolveService', resolveService ) ;

      resolveService.$inject = ['$injector', '$http','$q', 'localStorageService'] ;

      function resolveService( $injector, $http, $q, localStorageService ) {

        return function() {

          return $injector.instantiate( function() {

            this.get = get ;

            this.setLocalstorage = setLocalstorage ;

            this.getLocalstorage = getLocalstorage ;

          } );

        }

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

        function get(url, method, data) {

          if( url ) {

            var defered = $q.defer();
            var promise = defered.promise;

            var params = {
              url : url,
              method : 'GET'
            } ;

            if(  method && typeof method === 'STRING' ){
                params.method = method ;
            } ;

            if( data && typeof data === 'OBJECT' ) {
              params.data = data ;
            } ;

            $http( params )
              .success ( function( response ){
                defered.resolve( response ) ;
              } )
              .error( function( error ){
                defered.reject( error ) ;
              } )

            return promise ;

          } else {

            console.log ( ':: resolve.services.js -> No url on arguments.' )

          }

        }

      }
})() ;
