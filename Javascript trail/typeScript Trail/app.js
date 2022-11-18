var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.log("test function is working   ");
    };
    return App;
}());
var object = new App;
object.test();
var numaricValue = "10";
console.log(numaricValue);
var arrayOfDiffDataTypes = ["maaz", "ali", "khan"];
arrayOfDiffDataTypes.push(100);
console.log(arrayOfDiffDataTypes);
var objectOfDiffDataType = {
    name: "maaz",
    age: 22,
    address: "America"
};
objectOfDiffDataType.name = 300;
objectOfDiffDataType.address = 300;
console.log(objectOfDiffDataType);
var stringOfAnyType = "khan g";
stringOfAnyType = true;
console.log(stringOfAnyType);
var functionInObject = {
    name: "maaz",
    age: 22,
    getname: function () {
        return functionInObject;
    }
};
console.log(functionInObject.getname());
function typeInFunction() {
    return true;
}
console.log(typeInFunction());
var CreatedClass = /** @class */ (function () {
    function CreatedClass(name) {
        this.name = name;
    }
    CreatedClass.prototype.getname = function () {
        //console.log(this.name);
    };
    return CreatedClass;
}());
var objectOfClass = new CreatedClass("Muhammad Maaz aLI");
objectOfClass.getname();
console.log(objectOfClass.name);
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.setname = function (name) {
        this.name = name;
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.getname = function () {
        return this.name;
    };
    return Child;
}(Parent));
var objOfChild = new Child;
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
        return 1;
    else
        return n * factorial(n - 1);
}
console.log(amIWilson(563));
function hey(p) {
    var f = factorial(p - 1);
    function factorial(n) {
        return (n == 0) ? 1 : n * factorial(n - 1);
    }
    return ((f + 1) / p * p) % 1 === 0;
}
console.log(hey(5));
var userlog;
(function (userlog) {
    var Users = /** @class */ (function () {
        function Users() {
        }
        Users.prototype.getname = function () {
            return "Maaz Ali Khan Isb";
        };
        return Users;
    }());
    userlog.Users = Users;
})(userlog || (userlog = {}));
var u1 = new userlog.Users();
console.log(u1.getname());
//# sourceMappingURL=app.js.map