(function(){
  'use strict';
  angular
    .module('rfc')
    .component('rfcFunctionsMonitor', {
        bindings : {
          name : '@'
        },
        restrict : 'E',
        templateUrl : 'app/widgets/rfc-functions-monitor/rfc-functions-monitor.html',
        controller : rfcFunctionsMonitor
    } )

  rfcFunctionsMonitor.$inject = ['rfcResolve']  ;

  function rfcFunctionsMonitor ( rfcResolve ) {

    var vm = this ;

        rfcResolve
            .get('server/signatures.json' )
            .then(function(data){
              vm.rows = data ;
            }) ;


  }

})()
