"use strict";
const _hand_1 = require('./_hand');
class Quads extends _hand_1.Hand {
    constructor(params) {
        super(params);
        this._quads = params.quads;
    }
    get quads() {
        return this._quads;
    }
    setKickers() {
        super.setKickers(this._quads);
    }
    resolveConflict(other) {
        if (this.quads === other.quads) {
            this.setKickers();
            other.setKickers();
            return this.checkKickers(other);
        }
        return (this.quads > other.quads) ? 1 : -1;
    }
}
exports.Quads = Quads;
//# sourceMappingURL=Quads.js.map