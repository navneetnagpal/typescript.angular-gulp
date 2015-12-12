 
function MovablePopup(): ng.IDirective {
    var directive: ng.IDirective = {
        templateUrl:"/app/components/movable-popup/movable-popup.html",
        restrict: "EA", 
        scope:{
        },
        replace:true,
        link:(scope:any, element:any)=> {
            var $header = element.find(".panel-heading"),
                $body  =  element.find(".panel-body");
            scope.options={};
            
            scope.destroy = function(){
                element.remove();
            };
            
            scope.open = function(){
                element.show();
            };
            scope.close = function(){
                element.hide();
            };
            
            element.draggable({handle:".panel-heading",cursor:"crosshair"});
        }
    };

    return directive;
}

export = MovablePopup; 