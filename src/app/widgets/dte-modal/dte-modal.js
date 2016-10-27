(function(){

  'use strict';

  angular

    .module('rfc')

    .component('dteModal', {

      bindings : {
        modalInstance: "<",
        modalData: "<"
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
