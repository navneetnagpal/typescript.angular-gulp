define(["require", "exports"], function (require, exports) {
    var DatePickerController = (function () {
        function DatePickerController($scope) {
            this.$scope = $scope;
        }
        DatePickerController.prototype.open = function (event) {
            this.opened = true;
        };
        DatePickerController.$inject = ['$scope'];
        return DatePickerController;
    })();
    return DatePickerController;
});

//# sourceMappingURL=DatePickerCtrl.js.map
