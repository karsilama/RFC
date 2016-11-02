(function(){

  'use strict';

  angular.module ('app.services')

      .service('mainMonitorService', mainMonitorService ) ;

      mainMonitorService.$inject = ['resolveService', 'MOCK_DATA', 'API_ENDPOINT'] ;

      function mainMonitorService(resolveService, MOCK_DATA, API_ENDPOINT) {

        var _private = {} ;

        var service = {
          getEnviroments : getEnviroments,
          set : set,
          get : get
        };

        return service;

        function set( key, value ) {
          _private[key] = value ;
        }

        function get( key ) {
          return _private[key] ;
        }

        function getEnviroments() {
          var url  = MOCK_DATA ? 'mocks/list-enviroments.json' : API_ENDPOINT + 'enviroments' ;
          if ( _private.enviroments && _private.enviroments.length > 0 ) {
            return _private.enviroments ;
          } else {
            return resolveService.get(url) ;
          }
        }

      }
})() ;
