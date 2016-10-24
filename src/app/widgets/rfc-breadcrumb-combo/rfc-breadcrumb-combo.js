
(function (){
  'use stric';

  angular
    .module('rfc')
    .component('rfcBreadcrumbCombo', {

      bindings : {
        name : '@'
      },

      restrict : 'E',
      templateUrl : 'app/widgets/rfc-breadcrumb-combo/rfc-breadcrumb-combo.html',
      controller : rfcBreadcrumbCombo

    } )

    rfcBreadcrumbCombo.$inject = ['rfcResolve', '$state' ];

    function rfcBreadcrumbCombo( rfcResolve, $state ) {

      var vm = this;

      vm.$state = $state

      return function(){

        rfcResolve
          .get('server/list-' + vm.name + '.json' )
          .then(function(data){
            vm[vm.name] = data ;
            vm.selected = vm[vm.name][0] ;
          }) ;

      }()
    }

})() ;
