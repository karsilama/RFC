(function(){
  'use strict';
  angular
    .module('app.widgets')
    .component('appCheckListTable', {
        bindings : {
          data : '='
        },
        restrict : 'E',
        templateUrl : 'app/widgets/app-check-list-table/app-check-list-table.html',
        controller : appCheckListTable
    } ) ;

  function appCheckListTable () {

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
