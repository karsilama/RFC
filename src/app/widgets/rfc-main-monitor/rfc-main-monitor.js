
(function(){

  'use strict';

  angular

    .module('rfc')

    .component('rfcMonitor', {

        bindings : {
          name : '@'
        },

        restrict : 'E',
        templateUrl : 'app/widgets/rfc-main-monitor/rfc-main-monitor.html',
        controller : rfcMonitor
    } )

  rfcMonitor.$inject = ['rfcResolve', '$uibModal']  ;

  function rfcMonitor (rfcResolve, $uibModal ) {

    var vm = this ;

    vm.add = function() {
      var modalInstance = $uibModal.open( {
          templateUrl: 'modal-'+vm.name+'.html'
        } )
    }

    return function(){

          rfcResolve
              .get('server/' + vm.name + '.json' )
              .then(function(data){
                vm.rows = data ;
              }) ;

    }()

  }

})() ;
