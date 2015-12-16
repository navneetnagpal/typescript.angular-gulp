declare class DatePickerController {
    private $scope;
    static $inject: string[];
    opened: boolean;
    constructor($scope: ng.IScope);
    open(event: ng.IAngularEvent): void;
}
export = DatePickerController;
