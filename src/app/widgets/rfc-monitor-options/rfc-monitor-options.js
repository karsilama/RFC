(function(){
  'use strict';
  angular
    .module('rfc')
    .component('rfcMonitorOptions', {
        bindings : {
          name : '@'
        },
        restrict : 'E',
        templateUrl : 'app/widgets/rfc-monitor-options/rfc-monitor-options.html',
        controller : rfcMonitorOptions
    } )

  function rfcMonitorOptions () {

    var vm = this ;

    vm.options = {
      projects : {
        update : true,
        remove : true
      },
      enviroments : {
        update : true,
        remove : true
      },
      aplications : {
        update : true,
        remove : true
      },
    }

  }

})() ;
