 
function TestComp2(): ng.IDirective {
    var directive: ng.IDirective = {
        templateUrl:"/app/components/test-component/test-component2.html",
        restrict: "EA",  
        link:(scope:ng.IScope, element:ng.IAugmentedJQuery)=> {
             
        }
    };

    return directive;
}

export = TestComp2; 