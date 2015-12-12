import EditableController = require("components/editable-label/EditableController");
interface IEditableScope extends ng.IScope {
    editable:boolean;
    localModel:string;
    textModel:string;
}
function EditableLabel(): ng.IDirective {
    var directive: ng.IDirective = {
        templateUrl:"/app/components/editable-label/editable-label.html",
        restrict: "EA", 
        scope:{
            textModel:'=',
            editable:'=',
            style:'@'
        },
        link:(scope:IEditableScope, element:ng.IAugmentedJQuery)=> {
            var $txtarea = element.find('.txt-edit'),
                $txtlabel = element.find('.txt-label.clickable');
            $txtarea.bind('blur',function(e){
                scope.editable = false;
                scope.textModel = scope.localModel;
                scope.$root.$digest();
            });
            scope.localModel = scope.textModel;
            $txtlabel.bind('click',function(e){
                scope.editable = true;
                scope.$root.$digest();
            });
            scope.$watch('editable',function(newVal:boolean){
                if (newVal===true){
                    window.setTimeout(function(){
                        $txtarea.focus();
                    });
                }
            });
        }
    };

    return directive;
}

export = EditableLabel; 