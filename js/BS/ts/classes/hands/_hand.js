"use strict";
class Hand {
    constructor(params) {
        this._cards = params.cards;
        this._handStrength = params.handStrength;
    }
    get handStrength() {
        return this._handStrength;
    }
    get kickers() {
        return this._kickers;
    }
    setValues() {
        this._values = this._cards.map(card => card.value);
    }
    sortKickers() {
        this._kickers = this._kickers.sort((a, b) => b - a);
    }
    setKickers(...excluded) {
        // kickers is anything thats not relevant for given hand,
        // so pair will pass pair, two pair will pass both pairs etc.
        // this function collects the remaining values
        this.setValues();
        // if value match any of forbiden elems, filter it out
        this._kickers = this._values.filter(v => !excluded.some(n => v === n));
        this.sortKickers();
    }
    checkKickers(other) {
        let otherKickers = other.kickers;
        let thisKickers = this._kickers;
        for (let kicker in thisKickers) {
            let r = this.compare(thisKickers[kicker], otherKickers[kicker]);
            if (r == 1 || r == -1)
                return r;
        }
        return 0;
    }
    compare(thisKicker, otherKicker) {
        if (thisKicker > otherKicker)
            return 1;
        if (thisKicker < otherKicker)
            return -1;
        return 0;
    }
    compareToSibiling(other) {
        if (this._handStrength > other.handStrength)
            return 1;
        if (this._handStrength < other.handStrength)
            return -1;
        return 0;
    }
    resolveConflict(other) {
        if (1) {
            throw new Error('child class must implement resolveConflict method');
        }
        return 42;
    }
    ;
    compareTo(other) {
        if (this.constructor.name === other.constructor.name) {
            return this.resolveConflict(other);
        }
        else {
            return this.compareToSibiling(other);
        }
    }
}
exports.Hand = Hand;
//# sourceMappingURL=_hand.js.map