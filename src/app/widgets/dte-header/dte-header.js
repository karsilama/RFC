(function (){
  'use stric';

  angular
    .module('rfc')
    .component('dteHeader', {

      bindings : {

      },

      restrict : 'E',
      templateUrl : 'app/widgets/dte-header/dte-header.html',
      controller : rfcHeader

    } )

    rfcHeader.$inject = [];

    function rfcHeader() {

    }

})() ;
