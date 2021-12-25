class User{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    hello(){
        console.log(`Name: ${this.name} age: ${this.age}`);
    }
}

module.exports = User