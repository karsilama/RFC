(function(){
  'use strict';
  angular
    .module('rfc')
    .component('dteMonitorOptions', {
        bindings : {
          name : '@',
          item : '=',
          update : '=',
          remove : '='
        },
        restrict : 'E',
        templateUrl : 'app/widgets/dte-monitor-options/dte-monitor-options.html',
        controller : dteMonitorOptions
    } ) ;

  function dteMonitorOptions () {

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
      signatures : {
        update : true,
        remove : true
      },
      tests : {
        update : true,
        remove : true
      }
    } ;

  }

})() ;
