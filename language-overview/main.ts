
// Language Overview Demos


// JavaScript works as you expect it to
// 1) Show that the JavaScript basically remains unchanged
// 2) Show that the compiler is already providing some benefit

// function add(number1, number2) {
//     return number1 + number2;
// }
//
// var addResult = add(1, 2);
// console.log(addResult);


// TypeScript "any" type allows JavaScript dynamic typing to continue to work
// 1) Change parameter to an unexpected type
// 2) Add type information to prevent this bug
// 3) Notice that type information evaporates
// 4) Notice that the return type is inferred

// function add(number1: number, number2: number) {
//     return number1 + number2;
// }
//
// var addResult = add(1, 2);
// console.log(addResult);


// Type Inference
// 1) Show how type inference works
// 2) Show how you can mix types in an array

// var myBooleanVar = false;
// var myNumberVar = 0;
// var myStringVar = '';
// var myAnyVar;
// var myNullAnyVar = null;
//
// var myNumberArrayVar = [1, 2, 3];
// var myStringArrayVar = ['', '', ''];


// Ambient Declarations
// 1) Show how to reference a variable that exists in the global namespace

// declare var myGlobal;
// console.log(myGlobal);


// Type Definition Files
// 1) Show how to use d.ts files to make TS aware of libraries

// var maxNumber = _.max([1, 2, 3]);
// console.log(maxNumber);


// Interfaces
// 1) Show how to define an interface
// 2) Show that interfaces evaporate
// 3) Show how to use an interface to describe object literals

// interface MyInterface {
//     number1: number;
//     number2: number;
//     add(number1: number, number2: number): number;
// }
//
// function myFunction(obj: MyInterface) {
//     return obj.add(obj.number1, obj.number2);
// }
//
// var result = myFunction({
//     number1: 1,
//     number2: 2,
//     add: (number1, number2) => {
//         return number1 + number2;
//     }
// })
//
// console.log(result);


// Classes
// 1) Show how to define a class
// 2) Show the resulting JS
// 3) Private members
// 4) Show how classes look in ES6

// class MyClass {
//     number1: number;
//     number2: number;
//
//     constructor(number1: number, number2: number) {
//         this.number1 = number1;
//         this.number2 = number2;
//     }
//
//     add() {
//         return this.number1 + this.number2;
//     }
//
//     private hidden() {
//     }
// }
//
// var myClass = new MyClass(1, 2);
// console.log(myClass.number1);
// console.log(myClass.number2);
// console.log(myClass.add());


// Namespaces
// Show how namespaces encapsulate code and keep your global namespace clean

// namespace MyNamespace {
//     export class MyClass {
//         number1: number;
//         number2: number;
//
//         constructor(number1: number, number2: number) {
//             this.number1 = number1;
//             this.number2 = number2;
//         }
//
//         add() {
//             return this.number1 + this.number2;
//         }
//
//         private hidden() {
//         }
//     }
//
//     class AnotherClass {
//         string1: string;
//     }
// }
//
// var myNamespaceClass = new MyNamespace.MyClass(1, 2);
// console.log(myNamespaceClass.add());
