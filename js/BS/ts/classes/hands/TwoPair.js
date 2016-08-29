"use strict";
const _hand_1 = require('./_hand');
class TwoPair extends _hand_1.Hand {
    constructor(params) {
        super(params);
        this._lowerPair = params.lowerPair;
        this._higherPair = params.higherPair;
    }
    get higherPair() {
        return this._higherPair;
    }
    get lowerPair() {
        return this._lowerPair;
    }
    get kicker() {
        return this._kickers[0];
    }
    setKickers() {
        super.setKickers(this._lowerPair, this._higherPair);
    }
    checkHigherPair(other) {
        if (this.higherPair === other.higherPair) {
            return this.checkLowerPair(other);
        }
        return (this.higherPair > other.higherPair) ? 1 : -1;
    }
    checkLowerPair(other) {
        if (this.lowerPair === other.lowerPair) {
            this.setKickers();
            other.setKickers();
            return this.checkKickers(other);
        }
        return (this.lowerPair > other.lowerPair) ? 1 : -1;
    }
    resolveConflict(other) {
        return this.checkHigherPair(other);
    }
}
exports.TwoPair = TwoPair;
//# sourceMappingURL=TwoPair.js.map