class DatePickerController {
    static $inject = ['$scope'];
    opened:boolean;
	
    constructor(private $scope: ng.IScope) {

    }


    open(event:ng.IAngularEvent) {
         this.opened = true;
    }
}
    

export = DatePickerController;