
namespace Demos.Decorators {

    // A decorator is:
    // * an expression
    // * that evaluates to a function
    // * that takes the target, name, and property descriptor as arguments
    // * and optionally returns a property descriptor to install on the target object

    // export function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    //     var originalMethod = descriptor.value; // save a reference to the original method
    //
    //     descriptor.value = function(...args: any[]) {
    //         console.log('The method args are: ' + JSON.stringify(args)); // pre
    //         var result = originalMethod.apply(this, args);               // run and store the result
    //         console.log('The return value is: ' + result);               // post
    //         return result;                                               // return the result of the original method
    //     };
    //
    //     return descriptor;
    // }
}
