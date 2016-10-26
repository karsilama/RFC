(function(){
  'use strict';
  angular
    .module('rfc')
    .component('dteFunctionsMonitor', {
        bindings : {
          name : '@',
          functions : '=',
          collapsed : '=',
          classes : '@',
          fields : '@'
        },
        restrict : 'E',
        templateUrl : 'app/widgets/dte-functions-monitor/dte-functions-monitor.html',
        controller : dteFunctionsMonitor
    } )

  dteFunctionsMonitor.$inject = []  ;

  function dteFunctionsMonitor ( ) {

    var vm = this ;

    vm.toggleEnabled = toggleEnabled ;
    vm.showField = showField ;

    vm.rowsHeading = vm.fields.split(',') ;

    function toggleEnabled(item){
      return item.isEnabled = ! item.isEnabled ;
   }

    function showField(field) {
      return vm.rowsHeading.indexOf(field) >= 0
    }

    return function () {

      console.log( vm.functions )

    }()

  }

})()