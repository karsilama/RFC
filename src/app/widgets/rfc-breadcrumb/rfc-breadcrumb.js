(function (){
  'use stric';

  angular
    .module('rfc')
    .component('rfcBreadcrumb', {

      restrict : 'E',
      templateUrl : 'app/widgets/rfc-breadcrumb/rfc-breadcrumb.html',
      controller : rfcBreadcrumb

    } )

    rfcBreadcrumb.$inject = ['rfcResolve', '$state' ];

    function rfcBreadcrumb( rfcResolve, $state ) {

      var vm = this;

      vm.$state = $state

      vm.combos = ['projects', 'aplications', 'enviroments'] ;

      return function(){

      }()
    }

})() ;
