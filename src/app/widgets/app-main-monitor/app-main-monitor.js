(function(){

  'use strict';

  angular
    .module('app.widgets')
    .component('appMainMonitor', {
        bindings : {
          name : '@',
          enviroment : '=',
          data : '='
        },
        restrict : 'E',
        templateUrl : 'app/widgets/app-main-monitor/app-main-monitor.html',
        controller : appMainMonitor
    } ) ;

  appMainMonitor.$inject = ['mainMonitorService', '$uibModal']  ;

  function appMainMonitor ( mainMonitorService, $uibModal ) {

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
        component: 'appModal',
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
                    console.log ( error ) ;
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
