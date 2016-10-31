(function(){

  'use strict';

  angular

    .module('app.widgets')

    .component('appModal', {

      bindings : {
        modalInstance: "<",
        resolve: "<"
      },

      templateUrl : 'app/widgets/app-modal/app-modal.html',

      controller : appModal

    } ) ;

    function appModal () {

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
