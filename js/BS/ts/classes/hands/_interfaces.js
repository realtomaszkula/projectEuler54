"use strict";
var HandStrength;
(function (HandStrength) {
    HandStrength[HandStrength["highCard"] = 0] = "highCard";
    HandStrength[HandStrength["pair"] = 1] = "pair";
    HandStrength[HandStrength["twoPair"] = 2] = "twoPair";
    HandStrength[HandStrength["trips"] = 3] = "trips";
    HandStrength[HandStrength["straight"] = 4] = "straight";
    HandStrength[HandStrength["flush"] = 5] = "flush";
    HandStrength[HandStrength["fullHouse"] = 6] = "fullHouse";
    HandStrength[HandStrength["quads"] = 7] = "quads";
    HandStrength[HandStrength["straightFlush"] = 8] = "straightFlush";
})(HandStrength || (HandStrength = {}));
exports.HandStrength = HandStrength;
var CardValue;
(function (CardValue) {
    CardValue[CardValue["duce"] = 2] = "duce";
    CardValue[CardValue["three"] = 3] = "three";
    CardValue[CardValue["four"] = 4] = "four";
    CardValue[CardValue["five"] = 5] = "five";
    CardValue[CardValue["six"] = 6] = "six";
    CardValue[CardValue["seven"] = 7] = "seven";
    CardValue[CardValue["eight"] = 8] = "eight";
    CardValue[CardValue["nine"] = 9] = "nine";
    CardValue[CardValue["ten"] = 10] = "ten";
    CardValue[CardValue["jack"] = 11] = "jack";
    CardValue[CardValue["queen"] = 12] = "queen";
    CardValue[CardValue["king"] = 13] = "king";
    CardValue[CardValue["ace"] = 14] = "ace";
})(CardValue || (CardValue = {}));
exports.CardValue = CardValue;
//# sourceMappingURL=_interfaces.js.map