"use strict";
const hands_1 = require('./hands');
const _handreading_1 = require('./BS/ts/classes/hands/_handreading');
let hands = hands_1.hands.split('\n');
let p1Wins = 0;
let p2Wins = 0;
for (let handsLine of hands) {
    let p1CardString = handsLine.slice(0, 14);
    let p2CardString = handsLine.slice(15);
    let p1Cards = collectCards(p1CardString);
    let p2Cards = collectCards(p2CardString);
    let p1Hand = new _handreading_1.HandRankSearch(p1Cards).result;
    let p2Hand = new _handreading_1.HandRankSearch(p2Cards).result;
    let compare = p1Hand.compareTo(p2Hand);
    (compare === 1) ? p1Wins++ : p2Wins++;
}
console.log(p1Wins);
console.log(p2Wins);
function collectCards(cardString) {
    let cardsArray = cardString.split(' ');
    let cards = [];
    for (let handLike of cardsArray) {
        let [suit, valueLike] = [handLike[1], handLike[0]];
        cards.push({
            value: convertToValue(valueLike),
            suit: suitCast(suit)
        });
    }
    return cards;
}
function convertToValue(valueLike) {
    if (valueLike === 'T')
        return 10;
    if (valueLike === 'J')
        return 11;
    if (valueLike === 'Q')
        return 12;
    if (valueLike === 'K')
        return 13;
    if (valueLike === 'A')
        return 14;
    return +valueLike;
}
function suitCast(suitLike) {
    let isSuit = ['S', 'D', 'C', 'H'].some(s => s === suitLike);
    if (!isSuit)
        throw new Error('incorrect suit shortcut');
    return suitLike;
}
//# sourceMappingURL=app.js.map