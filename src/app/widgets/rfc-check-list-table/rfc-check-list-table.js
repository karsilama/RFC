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
    vm.showField = toggleWatch ;


    function toggleWatch(){
        console.log('toggle watcher function') ;
     }

    return function () {

    }()

  }

})()
