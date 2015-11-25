class EditableController {
    static $inject = ['$scope'];
    message: string;

    constructor(private $scope: ng.IScope) { }

    edit(){ 
        console.log('edit');
    }
}

export = EditableController;