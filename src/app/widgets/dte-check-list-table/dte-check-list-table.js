(function(){
  'use strict';
  angular
    .module('app.widgets')
    .component('dteCheckListTable', {
        bindings : {
          data : '='
        },
        restrict : 'E',
        templateUrl : 'app/widgets/dte-check-list-table/dte-check-list-table.html',
        controller : dteCheckListTable
    } ) ;

  function dteCheckListTable () {

    var vm = this ;
    vm.toggleWatch = toggleWatch ;
    vm.toggleCheck = toggleCheck ;

    function toggleWatch(item){
        item.watch = ! item.watch ;
     }

    function toggleCheck(item){
        item.isEnabled = ! item.isEnabled ;
     }

     activate () ;

    function activate () {

    }

  }

})() ;
