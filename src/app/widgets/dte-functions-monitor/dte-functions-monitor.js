(function(){
  'use strict';
  angular
    .module('rfc')
    .component('dteFunctionsMonitor', {
        bindings : {
          name : '@',
          collapsed : '=',
          classes : '@',
          fields : '@'
        },
        restrict : 'E',
        templateUrl : 'app/widgets/dte-functions-monitor/dte-functions-monitor.html',
        controller : dteFunctionsMonitor
    } )

  dteFunctionsMonitor.$inject = ['dteResolve']  ;

  function dteFunctionsMonitor ( dteResolve ) {

    var vm = this ;

    vm.toggleChecked = toggleChecked ;
    vm.showField = showField ;

    vm.rowsHeading = vm.fields.split(',') ;

    function toggleChecked(item){
      return item.checked = ! item.checked ;
   }

    function showField(field) {
      return vm.rowsHeading.indexOf(field) >= 0
    }

    return function () {

      dteResolve
        .get('server/' + vm.name + '.json' )
        .then(function(data){
          vm.myAccordions = data ;
        }) ;

    }()



  }

})()
