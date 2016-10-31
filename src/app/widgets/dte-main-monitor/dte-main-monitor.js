(function(){

  'use strict';

  angular
    .module('app.widgets')
    .component('dteMainMonitor', {
        bindings : {
          name : '@',
          enviroment : '=',
          data : '='
        },
        restrict : 'E',
        templateUrl : 'app/widgets/dte-main-monitor/dte-main-monitor.html',
        controller : dteMainMonitor
    } ) ;

  dteMainMonitor.$inject = ['mainMonitorService', '$uibModal']  ;

  function dteMainMonitor ( mainMonitorService, $uibModal ) {

    var vm = this ;

    vm.add = add;
    vm.save = save;
    vm.update = update ;
    vm.remove = remove ;

    activate() ;

    function update ( item ) {
      console.log( ':: Updating ' + item.name ) ;
      // mainMonitorService.upadate[vm.name]()
    }

    function remove ( item ) {
      console.log( ':: Removing ' + item.name ) ;
      // mainMonitorService.delete[vm.name]()
    }

    function save () {
      console.log( ':: Saving ' + vm.name ) ;
      // mainMonitorService.save[vm.name]()
    }

    function add() {
      $uibModal.open( {
        animation: true,
        component: 'dteModal',
        resolve: {
            modalData : function() {

              //checking if saved enviroments
              var enviroments = mainMonitorService.get("enviroments") ;
              if( ! enviroments ) {

                // getting from server
                return mainMonitorService
                  .getEnviroments()
                  .then( function( data ) {

                    // saving on service
                    mainMonitorService.set("enviroments", data ) ;

                    // adding extra data
                    return getModalData( data ) ;
                  } )
                  .catch( function( error ) {
                    console.log ( error )
                  } ) ;
              }

              // adding extra data
              else {
                return getModalData( enviroments ) ;
              }
            }
        }
      } )
      .result.then( function ( data ){

        // ok
        console.log( 'ok', data ) ;
      }, function ( message ) {

        // dimiss
        console.log('dismiss', message ) ;
      }  ) ;
    }

    function getModalData ( data ) {
      return {
        method : 'insert',
        enviroment : vm.enviroment,
        name : vm.name,
        nameForm : vm.name+'Form',
        checkListTableRows : data
      } ;
    }

    function activate() {
    }

  }

})() ;
