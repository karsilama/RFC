(function (){
  'use stric';

  angular
    .module('rfc')
    .component('dteBreadcrumb', {

      restrict : 'E',
      templateUrl : 'app/widgets/dte-breadcrumb/dte-breadcrumb.html',
      controller : dteBreadcrumb

    } )

    dteBreadcrumb.$inject = ['dteResolve', '$state' ];

    function dteBreadcrumb( dteResolve, $state ) {

      var vm = this;

      vm.$state = $state

      vm.combos = ['projects', 'aplications', 'enviroments'] ;

      return function(){

      }()
    }

})() ;
