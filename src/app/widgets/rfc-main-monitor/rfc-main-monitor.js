
(function(){

  'use strict';

  angular

    .module('rfc')

    .component('rfcMainMonitor', {

        bindings : {
          name : '@',
          enviroment : '=enviroment'
        },

        restrict : 'E',
        templateUrl : 'app/widgets/rfc-main-monitor/rfc-main-monitor.html',
        controller : rfcMainMonitor
    } )

  rfcMainMonitor.$inject = ['rfcResolve', '$uibModal']  ;

  function rfcMainMonitor (rfcResolve, $uibModal ) {

    var vm = this ;

    vm.add = add;
    vm.save = save;
    vm.update = update ;
    vm.remove = remove ;

    function update ( item ) {
      console.log( ':: Updating ' + item.name )
      // rfcResolve.upadate[vm.name]()
    }

    function remove ( item ) {
      console.log( ':: Removing ' + item.name )
      // rfcResolve.delete[vm.name]()
    }

    function save () {
      console.log( ':: Saving ' + vm.name ) ;
      // rfcResolve.save[vm.name]()
    }

    function add() {
      $uibModal.open( {
        animation: true,
        component: 'rfcModal',
        resolve: {
            data : function() {
              return rfcResolve
                        .get('server/list-enviroments.json')
                        .then(function(data){
                          return {
                            method : 'insert',
                            enviroment : vm.enviroment,
                            name : vm.name,
                            nameForm : vm.name+'Form',
                            checkListTableRows : data
                          }
                        })
            }
        },
        controller: function($scope) {
          $scope.title = vm.name;
        }
      } )
      .result.then( function ( data ){
        console.log( 'ok', data )
      }, function ( message ) {
        console.log('dismiss', message )
      }  )
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
