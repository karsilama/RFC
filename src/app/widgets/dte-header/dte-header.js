(function (){
  'use stric';

  angular
    .module('rfc')
    .component('rfcHeader', {

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
