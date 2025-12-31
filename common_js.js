class Name{c
    constructor(name){
        this.name=name;
    }
    getName(){
        console.log(this.name);
    }
    setName(name){  
        this.name=name;
    }
};

const MyName=new Name("Pradeep");
MyName.getName();
MyName.setName("Awasthi"); 
console.log(MyName);