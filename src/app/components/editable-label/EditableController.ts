class EditableController {
    static $inject = ['$scope', 'MovablePopupService'];
    text: string;
    lastUpdated: Date;
    inst: any;
    inst2: any;

    constructor(private $scope: ng.IScope, public MovablePopupService: any) {
        this.$scope.$watch('ctrl.text', (newVal) => {
            if (newVal !== undefined) {
                this.edited();
            }
        });
    }

    edited() {
        this.lastUpdated = new Date();
    }
    open() {
        this.inst = this.MovablePopupService.create({
            $scope: this.$scope,
            title: "Text 1",
            showClose:true,
            templateUrl: "/views/dashboard/dashboard-home.html"
        }).then((scope: ng.IScope) => {
            this.inst = scope;
        });
    }
    open2() {
        this.MovablePopupService.create({
            $scope: this.$scope,
            title: "Text 2",
            template: "<test-componentb></test-componentb>"
        }).then((scope: ng.IScope) => {
            this.inst2 = scope;
        });
    }
    close() {
        this.inst.close();
    }
    close2() {
        this.inst2.close();
    }
}

export = EditableController;