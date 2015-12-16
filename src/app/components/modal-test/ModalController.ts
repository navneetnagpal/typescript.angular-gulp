class ModalController {
    static $inject = ['$scope', '$uibModal'];
    text: string;

    constructor(private $scope: ng.IScope, public $uibModal: angular.ui.bootstrap.IModalService) {

    }


    open() {
        let settings = {
            animation: true,
            templateUrl: 'views/test-modal.html',
            controller:'ModalInstanceCtrl',
            controllerAs:"mInstC",
            size: 'sm',
            modal:true
        };
        var modalInstance = this.$uibModal.open(settings);

        modalInstance.result.then(function(selectedItem) {
           console.log('ok');
        }, function() {
           console.log('cancel');
        });
    }
}
    

export = ModalController;