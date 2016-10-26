(function(){
  'use strict';
  angular
    .module('rfc')
    .component('dteCheckListTable', {
        bindings : {
          data : '='
        },
        restrict : 'E',
        templateUrl : 'app/widgets/dte-check-list-table/dte-check-list-table.html',
        controller : dteCheckListTable
    } )

  function dteCheckListTable () {

    var vm = this ;
    vm.toggleWatch = toggleWatch ;
    vm.toggleCheck = toggleCheck ;

    function toggleWatch(item){
        return item.watch = ! item.watch ;
     }

    function toggleCheck(item){
        return item.isEnabled = ! item.isEnabled ;
     }

    return function () {

    }()

  }

})()
