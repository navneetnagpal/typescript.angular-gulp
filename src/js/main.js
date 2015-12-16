require.config({
  paths: {
      'angular' : 'libs/angular',
      'angular.ui':'libs/angular.ui-bootstrap',
      'jquery' : 'libs/jquery.min',
      'jqueryui' : 'libs/jquery-ui.min',
      'bootstrap' : 'libs/bootstrap.min', 
      'app':'app'
  },
  shim: {
      angular: {
          exports : 'angular'
      },
      'angular.ui':{
        deps:['jquery','bootstrap','angular']
      },
      app:{
          deps:['jquery','jqueryui','bootstrap','angular', 'angular.ui']
      }
  },
  baseUrl: '/js',
     urlArgs: 'bust='+new Date().getTime()
});

require(['app'], function (app) {
    angular.bootstrap(document, ['app']);
});