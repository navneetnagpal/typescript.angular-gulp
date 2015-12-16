class ModalInstanceCtrl {
    static $inject = ['$scope', '$uibModalInstance'];
    text: string;

    constructor(private $scope: ng.IScope, public $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) {

    }


    ok() {
      	this.$uibModalInstance.close();   
    }
	cancel(){
		this.$uibModalInstance.dismiss('cancel');
	}
}
    

export = ModalInstanceCtrl;