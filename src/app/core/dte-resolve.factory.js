(function(){

  'use strict';

  angular.module ('rfc')

      .factory('dteResolve', dteResolve )

      dteResolve.$inject = ['$http','$q'] ;

      function dteResolve($http,$q) {

        var factory = {
          get : get, 
          orderByKey : orderByKey
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
