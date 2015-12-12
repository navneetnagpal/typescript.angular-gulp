 
function TestComp(): ng.IDirective {
    var directive: ng.IDirective = {
        templateUrl:"/app/components/test-component/test-component.html",
        restrict: "EA",  
        link:(scope:ng.IScope, element:ng.IAugmentedJQuery)=> {
			var $dateinput = element.find('.datepicker-input');
			$dateinput.datepicker({ 
				showOn: "button",
      			buttonImage: "assets/images/calendar.png"
			});
		}
    };

    return directive;
}

export = TestComp; 