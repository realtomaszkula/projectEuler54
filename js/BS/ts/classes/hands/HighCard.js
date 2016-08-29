"use strict";
const _hand_1 = require('./_hand');
class HighCard extends _hand_1.Hand {
    constructor(params) {
        super(params);
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
exports.HighCard = HighCard;
//# sourceMappingURL=HighCard.js.map