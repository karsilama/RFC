(function (){
  'use stric';

  angular
    .module('rfc')
    .component('rfcModal', {

      bindings : {
          name : '='
      },

      restrict : 'E',
      templateUrl : 'app/widgets/rfc-modal/rfc-modal.html',
      controller : rfcModal

    } )

    rfcModal.$inject = ['$scope', '$uibModal'];

    function rfcModal( ) {

    }

})() ;
