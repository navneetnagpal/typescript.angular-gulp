
class NoteService {
    static $inject = ['$http','$q'];
    notes:INote[]=[];
constructor(private $http: ng.IHttpService, private $q:ng.IQService) { }
    

    get(noteId: string): ng.IPromise<INote> {

        var fakeResult:INote = {NoteId:'fake-id',Text:'Fake text for test'}
        var $defer = this.$q.defer();
        $defer.resolve(fakeResult);
        return $defer.promise;

    }
    save(notes:INote[]){
        this.notes=notes;    
    }

    getAll(): ng.IHttpPromise<INote[]> {
        var promise = this.$http({
            url: '/api/notes/all',
            method: 'GET'
        });
        promise.then((notes:INote[])=>{
            this.save(notes);
        });

        return promise;
    }
}

export = NoteService;