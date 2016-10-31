(function(){
  'use strict';
  angular
    .module('app.widgets')
    .component('appMonitorOptions', {
        bindings : {
          name : '@',
          item : '=',
          update : '=',
          remove : '='
        },
        restrict : 'E',
        templateUrl : 'app/widgets/app-monitor-options/app-monitor-options.html',
        controller : appMonitorOptions
    } ) ;

  function appMonitorOptions () {

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
