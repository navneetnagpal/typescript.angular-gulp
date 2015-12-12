class CheckDataType {
    counter:number;
    name:string;
    isEditable:boolean;
    colors:number[];
    type:any;
}

var obj = new CheckDataType();
obj.counter = 1;
obj.name = "Name 1";
obj.isEditable = true;
obj.colors = [1,2];
obj.type="hello";
obj.type=2;