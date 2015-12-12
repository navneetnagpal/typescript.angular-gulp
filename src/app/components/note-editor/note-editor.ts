 import NoteController = require("components/note-editor/NoteController");

function NoteEditor(): ng.IDirective {
    var directive: ng.IDirective = {
        restrict: "EA",
        controller:NoteController,
        controllerAs: "nctrl",
        templateUrl:"app/components/note-editor/note-editor.html",
        link(scope: ng.IScope) {
            
        }
    };

    return directive;
} 

export = NoteEditor; 