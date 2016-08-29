"use strict";
const _hand_1 = require('./_hand');
class FullHouse extends _hand_1.Hand {
    constructor(params) {
        super(params);
        this._pair = params.pair;
        this._trips = params.trips;
    }
    get trips() {
        return this._trips;
    }
    get pair() {
        return this._pair;
    }
    resolveConflict(other) {
        if (this.trips === other.trips) {
            return super.compare(this.pair, other.pair);
        }
        return (this.trips > other.trips) ? 1 : -1;
    }
}
exports.FullHouse = FullHouse;
//# sourceMappingURL=FullHouse.js.map