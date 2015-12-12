require.config({
  paths: {
      'angular' : 'libs/angular',
      'jquery' : 'libs/jquery.min',
      'jqueryui' : 'libs/jquery-ui.min',
      'bootstrap' : 'libs/bootstrap.min', 
      'app':'app'
  },
  shim: {
      angular: {
          exports : 'angular'
      },
      app:{
          deps:['jquery','jqueryui','bootstrap','angular']
      }
  },
  baseUrl: '/js',
     urlArgs: 'bust='+new Date().getTime()
});

require(['app'], function (app) {
    angular.bootstrap(document, ['app']);
});