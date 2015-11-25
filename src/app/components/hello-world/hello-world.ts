///<reference path="../../../../tools/typings/angularjs/angular.d.ts" />
interface IHelloWorldScope extends ng.IScope {
    property1:string;
}
function HelloWorld(): ng.IDirective {
    var directive: ng.IDirective = {
        restrict: "EA",
        link(scope: IHelloWorldScope) {
            console.log('hello-world'+scope.property1);
        }
    };

    return directive;
} 

export = HelloWorld; 