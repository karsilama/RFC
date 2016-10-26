(function(){

  'use strict';

  angular

    .module('rfc')

    .component('dteModal', {

      bindings : {
        modalInstance: "<",
        resolve: "<"
      },

      templateUrl : 'app/widgets/dte-modal/dte-modal.html',

      controller : function () {
        var vm= this;

        vm.data = vm.resolve.data;


        vm.save = function() {
          vm.modalInstance.close(vm.data);
        };

        vm.close = function() {
          vm.modalInstance.dismiss("close");
        };

      }
  } )

} )() ;