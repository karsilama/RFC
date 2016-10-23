(function(){
  'use strict';
  angular
    .module('rfc')
    .component('rfcMonitor', {
        bindings : {
          name : '@'
        },
        restrict : 'E',
        templateUrl : 'app/widgets/rfc-monitor/rfc-monitor.html',
        controller : rfcMonitor
    } )

  rfcMonitor.$inject = ['rfcResolve']  ;

  function rfcMonitor (rfcResolve) {

    var vm = this ;

    rfcResolve
        .get('server/' + vm.name + '.json' )
        .then(function(data){
          vm.rows = data ;
        }) ;

  }

})()
