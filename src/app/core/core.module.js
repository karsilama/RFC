(function(){
  'use strict';
  angular
    .module('app.core', [

      'ui.bootstrap',
      'LocalStorageModule',

      // aplication routing
      'app.core.routing'
    ]) ;
})() ;
