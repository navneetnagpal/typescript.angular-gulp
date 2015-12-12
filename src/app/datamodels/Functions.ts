
// normal function with string type paramter
function WriteSomething(message:string){
    console.log(message);
}
WriteSomething("hello"); 

// constructor with public property
class TestFunction{
    constructor(public name:string){
    }
}
new TestFunction("John").name;

// function with optional parameters
function sayHello(name:string="Mr. Guest"){
    console.log("Hello " + name);
}

sayHello();
sayHello("Mr. Wayne");