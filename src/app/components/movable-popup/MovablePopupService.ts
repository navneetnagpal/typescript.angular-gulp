 
class MovablePopupService {
    static $inject = ['$http','$compile','$rootScope','$timeout','$q'];
    notes:INote[]=[];
    constructor(private $http: ng.IHttpService, 
    private $compile:ng.ICompileService,
    private $rootScope:ng.IRootScopeService,
    private $timeout:ng.ITimeoutService,
    private $q:ng.IQService) { 
    
    }
    

    create(options:any): any {
        var _this=this,
            isolateScope:any=null,
        $defer = _this.$q.defer();
        var instance= angular.element("<movable-popup></movable-popup>");
        var $scope = options.$scope || this.$rootScope.$new();
        $scope['options'] = options;
        this.$compile(instance)($scope); 
        $("body").append(instance);

        function onComplete(htmlstr:string){
            var html = angular.element(htmlstr);
            _this.$compile(html)($scope);
            _this.$timeout(function(){   
                instance.find(".panel-body").append(html); 
                isolateScope = instance.isolateScope();
                isolateScope.options =options;
                $defer.resolve(isolateScope);
            },100); 
        }
        
        if (options.templateUrl){
            this.$http.get(options.templateUrl).then(function(response:any){
                    onComplete(response.data);
                });
        } else if(options.template){
             onComplete(options.template);
        }
        return $defer.promise;
    }

}

export = MovablePopupService;