(function(){
  'use strict';
  angular
    .module('rfc')
    .component('rfcCheckListTable', {
        bindings : {
          data : '='
        },
        restrict : 'E',
        templateUrl : 'app/widgets/rfc-check-list-table/rfc-check-list-table.html',
        controller : rfcCheckListTable
    } )

  function rfcCheckListTable () {

    var vm = this ;
    vm.toggleWatch = toggleWatch ;
    vm.toggleCheck = toggleCheck ;

    function toggleWatch(item){
        return item.watch = ! item.watch ;
     }

    function toggleCheck(item){
        return item.checked = ! item.checked ;
     }

    return function () {

    }()

  }

})()
