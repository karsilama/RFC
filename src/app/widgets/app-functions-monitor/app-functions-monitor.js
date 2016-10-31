(function(){
  'use strict';
  angular
    .module('app.widgets')
    .component('appFunctionsMonitor', {
        bindings : {
          name : '@',
          functions : '=',
          collapsed : '=',
          classes : '@',
          fields : '@'
        },
        restrict : 'E',
        templateUrl : 'app/widgets/app-functions-monitor/app-functions-monitor.html',
        controller : appFunctionsMonitor
    } ) ;

  appFunctionsMonitor.$inject = []  ;

  function appFunctionsMonitor ( ) {

    var vm = this ;

    vm.toggleEnabled = toggleEnabled ;
    vm.showField = showField ;

    vm.rowsHeading = vm.fields.split(',') ;

    activate() ;

    function toggleEnabled(item){
      item.isEnabled = ! item.isEnabled ;
    }

    function showField(field) {
      return vm.rowsHeading.indexOf(field) >= 0 ;
    }

    function activate () {
    }

  }

})() ;
