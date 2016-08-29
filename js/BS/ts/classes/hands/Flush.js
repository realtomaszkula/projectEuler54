"use strict";
const _hand_1 = require('./_hand');
class Flush extends _hand_1.Hand {
    constructor(params) {
        super(params);
    }
    get kickers() {
        return this._kickers;
    }
    setKickers() {
        super.setKickers();
    }
    resolveConflict(other) {
        this.setKickers();
        other.setKickers();
        return this.checkKickers(other);
    }
}
exports.Flush = Flush;
//# sourceMappingURL=Flush.js.map