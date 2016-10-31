(function(){

  'use strict';

  angular.module ('app.pages')

      .controller('styleGuideController', styleGuideController )

      styleGuideController.$inject = ['data'] ;

      function styleGuideController( data ) {

        var vm = this;

        vm.data = data ;

        activate()

        function activate () {

        }

      }
})()
