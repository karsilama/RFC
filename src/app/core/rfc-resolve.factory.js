(function(){

  'use strict';

  angular.module ('rfc')

      .factory('rfcResolve', rfcResolve )

      rfcResolve.$inject = ['$http','$q'] ;

      function rfcResolve($http,$q) {

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
