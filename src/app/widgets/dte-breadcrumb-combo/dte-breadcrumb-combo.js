
(function (){
  'use stric';

  angular
    .module('rfc')
    .component('dteBreadcrumbCombo', {

      bindings : {
        name : '@'
      },

      restrict : 'E',
      templateUrl : 'app/widgets/dte-breadcrumb-combo/dte-breadcrumb-combo.html',
      controller : dteBreadcrumbCombo

    } )

    dteBreadcrumbCombo.$inject = ['dteResolve', '$state' ];

    function dteBreadcrumbCombo( dteResolve, $state ) {

      var vm = this;

      vm.$state = $state

      return function(){

        dteResolve
          .get('server/list-' + vm.name + '.json' )
          .then(function(data){
            vm[vm.name] = data ;
            vm.selected = vm[vm.name][0] ;
          }) ;

      }()
    }

})() ;
