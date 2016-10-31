(function(){
  'use strict';
  angular
    .module('app', [
      'ui.router',
      'ui.bootstrap',
      'LocalStorageModule',

      'app.pages',
      'app.widgets',
      'app.services'
    ])
})()
