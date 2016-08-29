"use strict";
const _hand_1 = require('./_hand');
class Pair extends _hand_1.Hand {
    constructor(params) {
        super(params);
        this._pair = params.pair;
    }
    get pair() {
        return this._pair;
    }
    get kickers() {
        return this._kickers;
    }
    setKickers() {
        super.setKickers(this._pair);
    }
    resolveConflict(other) {
        if (this.pair === other.pair) {
            this.setKickers();
            other.setKickers();
            return this.checkKickers(other);
        }
        return (this.pair > other.pair) ? 1 : -1;
    }
}
exports.Pair = Pair;
//# sourceMappingURL=Pair.js.map