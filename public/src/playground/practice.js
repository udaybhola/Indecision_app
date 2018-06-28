class Person{

    constructor(name = 'Anonymous',age = 0){
        this.name=name;
        this.age=age;
    }

    getGreeting(){
        return `Hi ! I am ${this.name} `;
    }

    getDescription(){
        return `Hi! I am ${this.name} and my age is ${this.age}`;
    }
}
class Student extends Person{

    constructor(name,age,major){
    super(name,age);
    this.major=major;
   }
   hasMajor(){
       return !!this.major;
   }
   getDescription(){
       let description = super.getDescription();
       if(this.hasMajor()){
           description += `Their major is ${this.major}`;
       }
       return description;
   }
   
}

const me =new Student('Uday Bhola',22,'Computer Science');
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me.hasMajor());

const other =new Student();
console.log(other.getGreeting());
console.log(other.getDescription());
console.log(other.hasMajor());

