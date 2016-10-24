(function (){
  'use stric';

  angular
    .module('rfc')
    .component('rfcHeader', {

      bindings : {

      },

      restrict : 'E',
      templateUrl : 'app/widgets/rfc-header/rfc-header.html',
      controller : rfcHeader

    } )

    rfcHeader.$inject = [];

    function rfcHeader() {

    }

})() ;
