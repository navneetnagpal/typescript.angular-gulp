import NoteService = require('components/note-editor/NoteService');

class NoteController {
    static $inject = ['$scope','NoteService'];
    notes:Object[]=[];
    colorCount:number=-1;
    randomColors:string[]=[];

    constructor(public $scope:ng.IScope,public noteService:NoteService) {  
        this.loadColors();
        this.noteService.get('all').then((note:INote)=>{
            console.log(note);
        });
        this.add();
    }
    loadColors(){
        this.randomColors.push('bg-info');
        this.randomColors.push('bg-success');
        this.randomColors.push('bg-danger');
        this.randomColors.push('bg-warning');
    }
    add(){ 
        this.notes.unshift({
            randomStyle:this.randomColors[++this.colorCount%this.randomColors.length]
        });
    }
    remove(index:number){
        this.notes.splice(index,1);
    }
}

export = NoteController;