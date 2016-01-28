
namespace Demos.TemplateStrings {

    // With tag

    // var say = 'a bird in hand > two in the bush';
    // var html = htmlEscape `<div> I would just like to say : ${say}</div>`;
    // console.log(html);

    // First parameter contains all of the string literals
    // The rest parameter contains the placeholders
    // function htmlEscape(literals, ...placeholders) {
    //     let result = '';
    //
    //     // interleave the literals with the placeholders
    //     for (let i = 0; i < placeholders.length; i++) {
    //         result += literals[i];
    //         result += placeholders[i]
    //             .replace(/&/g, '&amp;')
    //             .replace(/"/g, '&quot;')
    //             .replace(/'/g, '&#39;')
    //             .replace(/</g, '&lt;')
    //             .replace(/>/g, '&gt;');
    //     }
    //
    //     // add the last literal
    //     result += literals[literals.length - 1];
    //     return result;
    // }
}
