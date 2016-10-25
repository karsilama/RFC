(function(){
  'use strict';
  angular
    .module('rfc')
    .component('rfcFunctionsMonitor', {
        bindings : {
          name : '@',
          collapsed : '=',
          classes : '@',
          fields : '@'
        },
        restrict : 'E',
        templateUrl : 'app/widgets/rfc-functions-monitor/rfc-functions-monitor.html',
        controller : rfcFunctionsMonitor
    } )

  rfcFunctionsMonitor.$inject = ['rfcResolve']  ;

  function rfcFunctionsMonitor ( rfcResolve ) {

    var vm = this ;

    vm.toggleWatch = toggleWatch ;
    vm.showField = showField ;

    vm.rowsHeading = vm.fields.split(',') ;

    function toggleWatch(){
        console.log('toggle watcher function') ;
     }

    function showField(field) {
      return vm.rowsHeading.indexOf(field) >= 0
    }

    return function () {

      rfcResolve
        .get('server/' + vm.name + '.json' )
        .then(function(data){
          vm.myAccordions = data ;
        }) ;

    }()



  }

})()
