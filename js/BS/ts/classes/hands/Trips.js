"use strict";
const _hand_1 = require('./_hand');
class Trips extends _hand_1.Hand {
    constructor(params) {
        super(params);
        this._trips = params.trips;
    }
    get trips() {
        return this._trips;
    }
    setKickers() {
        super.setKickers(this._trips);
    }
    resolveConflict(other) {
        if (this.trips === other.trips) {
            this.setKickers();
            other.setKickers();
            return this.checkKickers(other);
        }
        return (this.trips > other.trips) ? 1 : -1;
    }
}
exports.Trips = Trips;
//# sourceMappingURL=Trips.js.map