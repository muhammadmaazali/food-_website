class App {
    test() {
        console.log("test function is working   ");
    }
}

let object = new App;
object.test();
let numaricValue: string = "10";
console.log(numaricValue);
let arrayOfDiffDataTypes: any = ["maaz", "ali", "khan"];
arrayOfDiffDataTypes.push(100);
console.log(arrayOfDiffDataTypes);

interface objectOfDiffDataType {
    name: any,
    age: number,
    address: any,

}

let objectOfDiffDataType: objectOfDiffDataType = {
    name: "maaz",
    age: 22,
    address: "America"
};

objectOfDiffDataType.name = 300;
objectOfDiffDataType.address = 300;
console.log(objectOfDiffDataType);
let stringOfAnyType: string | Number | boolean = "khan g";
stringOfAnyType = true;
console.log(stringOfAnyType);

interface typesOfFunctionInObject {
    name: string,
    age: Number,
    getname: () => string
}

let functionInObject = {
    name: "maaz",
    age: 22,
    getname: function () {
        return functionInObject
    }
}

console.log(functionInObject.getname());

function typeInFunction(): Number | string | boolean {
    return true;
}

console.log(typeInFunction());

class CreatedClass {
    name;
    constructor(name) {
        this.name = name;
    }
    getname() {
        //console.log(this.name);
    }
}

let objectOfClass = new CreatedClass("Muhammad Maaz aLI");
objectOfClass.getname();
console.log(objectOfClass.name);

class Parent {
    name;
    setname(name) {
        this.name = name;
    }
}

class Child extends Parent {

    getname() {
        return this.name;
    }
}

let objOfChild = new Child;
objOfChild.setname("Muhammad");
console.log(objOfChild.getname());

/*function amIWilson(p) {
    var decrementInIt = (p - 1);
    var factorial = 1;

    for (let decrement = decrementInIt; decrement >= 1; decrement--) {
        factorial *= decrement
    }

    var isWisonPrime = ((factorial + 1) / (p * p));
    console.log(isWisonPrime%2);

    return((isWisonPrime % 2) == 0) ? true : false;
}
console.log(amIWilson(39))*/


function amIWilson(P) {
    console.log((factorial(P - 1) + 1) / Math.pow(P, 2) % 1 === 0);
}

function factorial(n) {
    if (n == 0)
        return 1
    else
        return n * factorial(n - 1);
}

console.log(amIWilson(563))

function hey(p) {
    var f = factorial(p - 1);

    function factorial(n) {
        return (n == 0) ? 1 : n * factorial(n - 1);
    }
    return ((f + 1) / p * p) % 1 === 0;
}
console.log(hey(5));

/// <reference path = "utils.ts"/>
namespace userlog {
    export class Users extends Parent{
        getname() {
            return this.name;
        }
    }
}

let u1 = new userlog.Users();
u1.setName("bruce");
console.log(u1.getname());