
(function (){
  'use stric';

  angular
    .module('app.widgets')
    .component('appBreadcrumbCombo', {

      bindings : {
        name : "@",
        combo : '='
      },

      restrict : 'E',
      templateUrl : 'app/widgets/app-breadcrumb-combo/app-breadcrumb-combo.html',
      controller : appBreadcrumbCombo

    } ) ;

    appBreadcrumbCombo.$inject = ['$state' ];

    function appBreadcrumbCombo( $state ) {

      var vm = this;

      vm.$state = $state ;
      vm.selected = vm.combo[0] ;

      activate() ;

      function activate(){

      }

    }

})() ;
