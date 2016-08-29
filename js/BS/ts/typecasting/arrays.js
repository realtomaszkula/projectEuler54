"use strict";
function returnThreeCast(arr) {
    if (arr.length !== 3)
        throw new Error('Array should have length of 3');
    return arr;
}
exports.returnThreeCast = returnThreeCast;
function returnFiveCast(arr) {
    if (arr.length !== 5)
        throw new Error('Array should have length of 5');
    return arr;
}
exports.returnFiveCast = returnFiveCast;
function returnTwoCast(arr) {
    if (arr.length !== 2)
        throw new Error('Array should have length of 2');
    return arr;
}
exports.returnTwoCast = returnTwoCast;
function castSuit(arg) {
    let isSuit = ['spade', 'club', 'diamond', 'heart'].some(s => s === arg);
    if (!isSuit)
        throw new Error('Incorrect suit name');
    return arg;
}
exports.castSuit = castSuit;
//# sourceMappingURL=arrays.js.map