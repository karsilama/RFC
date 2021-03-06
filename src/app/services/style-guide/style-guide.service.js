(function(){

  'use strict';

  angular.module ('app.services')

      .service('styleGuideService', styleGuideService ) ;

      styleGuideService.$inject = ['resolveService', 'MOCK_DATA', 'API_ENDPOINT'] ;

      function styleGuideService(resolveService, MOCK_DATA, API_ENDPOINT) {

        var service = {
          getData : getData ,
          orderByKey : orderByKey,
        } ;

        return service;

        function orderByKey ( unOrdered , key) {
          var ordered = {} ;
          for ( var i in unOrdered ) {
            ordered[unOrdered[i][key]] = unOrdered[i] ;
          }
          return ordered ;
        }

        function getData() {
          var url = MOCK_DATA ? 'mocks/data.json' : API_ENDPOINT = 'data';
          return ( new resolveService()  )
            .get(url)
            .then(function(data){
              return data ;
            })
            .catch( function(error) {
              console.log( error ) ;
            }) ;
        }

      }
})() ;
