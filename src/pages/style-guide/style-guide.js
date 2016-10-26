(function(){

  'use strict';

  angular.module ('rfc')

      .controller('styleGuideController', styleGuideController )

      styleGuideController.$inject = ['signatures'] ;

      function styleGuideController( signatures ) {

        var vm = this;

        vm.signatures = signatures ;

        activate()

        function activate () {

        }

      }
})()
