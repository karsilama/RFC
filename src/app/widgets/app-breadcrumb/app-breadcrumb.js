(function (){
  'use stric';

  angular
    .module('app.widgets')
    .component('appBreadcrumb', {

      bindings : {
        name : '@',
        combos : '='
      },

      restrict : 'E',
      templateUrl : 'app/widgets/app-breadcrumb/app-breadcrumb.html',
      controller : appBreadcrumb

    } ) ;

    appBreadcrumb.$inject = ['$state'];

    function appBreadcrumb($state) {

      var vm = this;

      vm.$state = $state ;

      activate() ;

      function activate(){

      }

    }

})() ;
