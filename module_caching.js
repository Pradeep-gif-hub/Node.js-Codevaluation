class Superhearo{
    constructor(name){
        this.name=name;
    }

    getName(name){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
};

module.exports= new Superhero("Batman");