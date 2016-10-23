(function(){
  'use strict';
  angular
    .module('rfc')
    .component('rfcSignaturesMonitor', {
        restrict : 'E',
        templateUrl : 'app/widgets/rfc-signatures-monitor/rfc-signatures-monitor.html',
        controller : rfcSignaturesMonitor
    } )

  rfcSignaturesMonitor.$inject = ['rfcResolve']  ;

  function rfcSignaturesMonitor ( rfcResolve ) {

    var vm = this ;

        rfcResolve
            .get('server/signatures.json' )
            .then(function(data){
              vm.rows = data ;
            }) ;


  }

})()
