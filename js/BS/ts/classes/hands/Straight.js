"use strict";
const _hand_1 = require('./_hand');
class Straight extends _hand_1.Hand {
    constructor(params) {
        super(params);
        this.setValues();
        this.sortValues();
        this.setIsWheelStr8();
        this.setHighestCard();
    }
    get highestCard() {
        return this._highestCard;
    }
    get isWheel() {
        return this._isWheelStr8;
    }
    sortValues() {
        this._values.sort((a, b) => a - b);
    }
    setIsWheelStr8() {
        this._isWheelStr8 = (this._values[3] === 5 && this._values[4] === 14);
    }
    setHighestCard() {
        this._highestCard = (this._isWheelStr8) ? 5 : this._values[4];
    }
    setKickers() {
    }
    resolveConflict(other) {
        return super.compare(this._highestCard, other._highestCard);
    }
}
exports.Straight = Straight;
//# sourceMappingURL=Straight.js.map