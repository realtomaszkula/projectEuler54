"use strict";
const _interfaces_1 = require('./../../classes/hands/_interfaces');
const Pair_1 = require('./../../classes/hands/Pair');
const arrays_1 = require('./../../typecasting/arrays');
function card(name) {
    if (!name.includes('Of'))
        throw new Error('card name must include Of');
    let [value, suit] = name.split('Of');
    suit = suit.toLowerCase().slice(0, -1); // i want to use camel case and use plural form for suits ex: aceOfSpades becomes 'ace' 'spade'
    return { value: _interfaces_1.CardValue[value], suit: arrays_1.castSuit(suit) };
}
exports.card = card;
function getPair(defaultParams, first, second) {
    let firstParams = Object.assign({}, defaultParams, first);
    let secondParams = Object.assign({}, defaultParams, second);
    return { firstPair: new Pair_1.Pair(firstParams), secondPair: new Pair_1.Pair(secondParams) };
}
exports.getPair = getPair;
function getTwoPair() {
}
exports.getTwoPair = getTwoPair;
//# sourceMappingURL=methods.js.map