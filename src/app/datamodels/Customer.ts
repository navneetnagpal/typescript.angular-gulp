class Person {
    
    constructor(public name:string,public lastname:string, public age:number){

    }
}

class Employee extends Person {
    constructor(name:string,lastname:string,  age:number, public dept:string){
        super(name,lastname,age);
    }
}

    new Employee("Bruce","Wayne",30,"Batman");