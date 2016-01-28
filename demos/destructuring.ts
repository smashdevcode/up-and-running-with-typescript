
namespace Demos.Destructuring {

    // Object destructuring

    // var myObject = {
    //     value1: 1,
    //     value2: 2,
    //     value3: 3
    // };

    // var value1 = myObject.value1;
    // var value2 = myObject.value2;
    // var value3 = myObject.value3;

    // var { value1, value2, value3 } = myObject;

    // console.log(`value1: ${value1}, value2: ${value2}, value3: ${value3}`);

    // Going deep

    // var myObject = {
    //     foo: {
    //         bar: 'Hello world!'
    //     }
    // };
    // var { foo: { bar }} = myObject;
    // console.log(`bar: ${bar}`);

    // Array destructuring

    // var myArray = [1, 2, 3];
    // var [ value1, value2, value3 ] = myArray;
    // console.log(`value1: ${value1}, value2: ${value2}, value3: ${value3}`);

    // With rest parameters

    // var myArray = [1, 2, 3, 4];
    // var [ value1, value2, ...remaining ] = myArray;
    // console.log(`value1: ${value1}, value2: ${value2}, remaining: ${remaining}`);

    // Skipping values

    // var myArray = [1, 2, 3, 4];
    // var [ value1, , ...remaining ] = myArray;
    // console.log(`value1: ${value1}, remaining: ${remaining}`);

    // Returning multiple values from a function

    // function multiValueFunction() {
    //     return [1, 2];
    // }
    // var [value1, value2] = multiValueFunction();
    // console.log(`value1: ${value1}, value2: ${value2}`);
}
