(function(){

  'use strict';

  angular

    .module('app.widgets')

    .component('dteModal', {

      bindings : {
        modalInstance: "<",
        resolve: "<"
      },

      templateUrl : 'app/widgets/dte-modal/dte-modal.html',

      controller : dteModal

    } ) ;

    function dteModal () {

      var vm = this;

      vm.data = vm.modalData;

      vm.save = function() {
        vm.modalInstance.close(vm.data);
      };

      vm.close = function() {
        vm.modalInstance.dismiss("close");
      };

    }

} )() ;
