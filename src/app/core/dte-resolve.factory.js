(function(){

  'use strict';

  angular.module ('rfc')

      .factory('dteResolve', dteResolve )

      dteResolve.$inject = ['$http','$q'] ;

      function dteResolve($http,$q) {

        var factory = {
          get : get
        }

        function get(url) {

          var defered = $q.defer();
          var promise = defered.promise;

          $http
            .get( url )
            .success(function( response ){
              defered.resolve( response )
            })
            .error(function( error ){
              defered.reject( error )
            })

          return promise ;
        }

        return factory;
      }
})()
