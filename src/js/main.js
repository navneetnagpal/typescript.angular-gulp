require.config({
  paths: {
      'angular' : 'libs/angular',
      'jquery' : 'libs/jquery',
      'app':'app'
  },
  shim: {
      angular: {
          exports : 'angular'
      }
  },
  baseUrl: '/js',
     urlArgs: 'bust='+new Date().getTime()
});

require(['app'], function (app) {
    angular.bootstrap(document, ['app']);
});