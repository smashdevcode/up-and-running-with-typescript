// Two ways to export members:
// 1) Place the "export" keyword before a member's declaration
// 2) Export using a separate export declaration (similar to the reveal pattern)
System.register([], function(exports_1) {
    function sayHello() {
        console.log('Hello world!');
    }
    exports_1("sayHello", sayHello);
    function sayHelloAgain() {
        console.log('Hello again!');
    }
    exports_1("sayHelloAgain", sayHelloAgain);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=my-module.js.map