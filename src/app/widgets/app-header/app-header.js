(function (){
  'use stric';

  angular
    .module('app.widgets')
    .component('appHeader', {

      bindings : {
      },

      restrict : 'E',
      templateUrl : 'app/widgets/app-header/app-header.html',
      controller : rfcHeader

    } ) ;

    rfcHeader.$inject = [];

    function rfcHeader() {

    }

})() ;
