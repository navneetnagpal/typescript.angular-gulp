import ModalController = require("components/modal-test/ModalController");
interface IModalScope extends ng.IScope {
    Modal:boolean;
    localModel:string;
    textModel:string;
}
function ModalTest(): ng.IDirective {
    var directive: ng.IDirective = {
        templateUrl:"/app/components/modal-test/modal-test.html",
        restrict: "EA", 
        controller:ModalController,
		controllerAs:"modalCtrl",
        link:(scope:IModalScope, element:ng.IAugmentedJQuery)=> {
            
        }
    };

    return directive;
}

export = ModalTest; 