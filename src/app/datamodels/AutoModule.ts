
class DiesalEngine implements ts.IEngine {
    isStarted:boolean=false;
    start(){
        console.log('D-started');
    }
    stop(){
        console.log('D-stoped');
    }
}
class PetrolEngine implements ts.IEngine {
    isStarted:boolean=false;
    start(){
        console.log('P-started');
    }
    stop(){
        console.log('P-stoped');
    }
}