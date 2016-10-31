(function (){
  'use stric';

  angular
    .module('app.widgets')
    .component('dteBreadcrumb', {

      bindings : {
        name : '@',
        combos : '='
      },

      restrict : 'E',
      templateUrl : 'app/widgets/dte-breadcrumb/dte-breadcrumb.html',
      controller : dteBreadcrumb

    } ) ;

    dteBreadcrumb.$inject = ['$state'];

    function dteBreadcrumb($state) {

      var vm = this;

      vm.$state = $state ;

      activate() ;

      function activate(){

      }

    }

})() ;
