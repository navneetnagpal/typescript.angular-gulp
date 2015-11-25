enum CarType {
    Automatic=1,
    Manual=2
}

console.log(CarType.Automatic);

class ECar {
    constructor(public type:CarType){

    }
}

var obj1= new ECar(1); 
var obj2= new ECar(CarType.Automatic);

CarType[obj2.type];