
(function (){
  'use stric';

  angular
    .module('rfc')
    .component('dteBreadcrumbCombo', {

      bindings : {
        name : "@",
        combo : '='
      },

      restrict : 'E',
      templateUrl : 'app/widgets/dte-breadcrumb-combo/dte-breadcrumb-combo.html',
      controller : dteBreadcrumbCombo

    } ) ;

    dteBreadcrumbCombo.$inject = ['$state' ];

    function dteBreadcrumbCombo( $state ) {

      var vm = this;

      vm.$state = $state ;
      vm.selected = vm.combo[0] ;

      activate() ;

      function activate(){

      }

    }

})() ;
