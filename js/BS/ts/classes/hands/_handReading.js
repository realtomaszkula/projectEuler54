"use strict";
const _interfaces_1 = require('./_interfaces');
const HighCard_1 = require('./HighCard');
const Pair_1 = require('./Pair');
const TwoPair_1 = require('./TwoPair');
const Trips_1 = require('./Trips');
const Straight_1 = require('./Straight');
const Flush_1 = require('./Flush');
const FullHouse_1 = require('./FullHouse');
const Quads_1 = require('./Quads');
const StraightFlush_1 = require('./StraightFlush');
class HandRankSearch {
    constructor(_cards) {
        this._cards = _cards;
        this.searchRanks = {
            isStraightFlush() {
                let isFlush = this.isFlush().found;
                let isStraight = this.isStraight().found;
                let isStraightFlush = isFlush && isStraight;
                return { found: isStraightFlush };
            },
            isFlush: (() => {
                let calledBefore = false;
                let result;
                return () => {
                    if (!calledBefore) {
                        calledBefore = true;
                        let notUniqSuits = this._suits.find((_e, i, a) => {
                            if (i > 0)
                                return a[i - 1] !== a[i];
                        });
                        let isFlush = !notUniqSuits;
                        result = { found: isFlush };
                    }
                    return result;
                };
            })(),
            isStraight: (() => {
                let calledBefore = false;
                let result;
                return () => {
                    if (!calledBefore) {
                        calledBefore = true;
                        let notContinousCards = this._sortedValues.find((_e, i, a) => {
                            if (i > 0) {
                                return a[i - 1] + 1 != a[i];
                            }
                            else {
                                return false;
                            }
                        });
                        let isWheelStr8 = this._sortedValues[0] === 2 && this._sortedValues[1] === 3 &&
                            this._sortedValues[2] === 4 && this._sortedValues[3] === 5 &&
                            this._sortedValues[4] === 14;
                        let isStraight = !notContinousCards;
                        result = { found: isStraight || isWheelStr8 };
                    }
                    return result;
                };
            })(),
            isQuads: () => {
                let isQuads = this.isUniqueSingleRep && this._paired[0].length === 3;
                return { found: isQuads };
            },
            isTrips: () => {
                let isTrips = this.isUniqueSingleRep && this._paired[0].length === 2;
                return { found: isTrips };
            },
            isPair: () => {
                let isPair = this.isUniqueSingleRep && this._paired[0].length === 1;
                return { found: isPair };
            },
            isFullHouse: () => {
                // if full house I want to have trips in first arr [[111][22]]
                this._paired.sort((a, b) => {
                    if (a.length > b.length)
                        return -1;
                    if (a.length < b.length)
                        return 1;
                    return 0;
                });
                let isFullHouse = this.isUniqueDoubleRep && this._paired[0].length === 2 && this._paired[1] && this._paired[1].length === 1;
                return { found: isFullHouse };
            },
            isTwoPair: () => {
                // want to have higher pair first
                this._paired.sort((a, b) => {
                    if (a[0] > b[0])
                        return -1;
                    if (a[0] < b[0])
                        return 1;
                    return 0;
                });
                let isTwoPair = this.isUniqueDoubleRep && this._paired[0].length === 1 && this._paired[1] && this._paired[1].length === 1;
                return { found: isTwoPair };
            },
            isHighCard: () => {
                return { found: true };
            }
        };
        this.classBuilder = {
            StraightFlush: () => {
                let params = {
                    cards: this._cards,
                    handStrength: _interfaces_1.HandStrength.straightFlush,
                };
                return new StraightFlush_1.StraightFlush(params);
            },
            Quads: () => {
                let params = {
                    cards: this._cards,
                    handStrength: _interfaces_1.HandStrength.quads,
                    quads: this._paired[0][0]
                };
                return new Quads_1.Quads(params);
            },
            FullHouse: () => {
                let params = {
                    cards: this._cards,
                    handStrength: _interfaces_1.HandStrength.fullHouse,
                    trips: this._paired[0][0],
                    pair: this._paired[1][0]
                };
                return new FullHouse_1.FullHouse(params);
            },
            Flush: () => {
                let params = {
                    cards: this._cards,
                    handStrength: _interfaces_1.HandStrength.flush,
                };
                return new Flush_1.Flush(params);
            },
            Straight: () => {
                let params = {
                    cards: this._cards,
                    handStrength: _interfaces_1.HandStrength.straight,
                };
                return new Straight_1.Straight(params);
            },
            Trips: () => {
                let params = {
                    cards: this._cards,
                    handStrength: _interfaces_1.HandStrength.trips,
                    trips: this._paired[0][0]
                };
                return new Trips_1.Trips(params);
            },
            TwoPair: () => {
                let params = {
                    cards: this._cards,
                    handStrength: _interfaces_1.HandStrength.twoPair,
                    lowerPair: this._paired[1][0],
                    higherPair: this._paired[0][0]
                };
                return new TwoPair_1.TwoPair(params);
            },
            Pair: () => {
                let params = {
                    cards: this._cards,
                    handStrength: _interfaces_1.HandStrength.pair,
                    pair: this._paired[0][0]
                };
                return new Pair_1.Pair(params);
            },
            HighCard: () => {
                let params = {
                    cards: this._cards,
                    handStrength: _interfaces_1.HandStrength.highCard,
                };
                return new HighCard_1.HighCard(params);
            }
        };
        this.sortValues();
        this.extractSuits();
        this.pairSort();
        this._handRank = this.figureOutHandRank();
    }
    get result() {
        return this._handRank;
    }
    sortValues() {
        this._sortedValues = this._cards.map(card => card.value)
            .sort((a, b) => {
            if (a - b > 0)
                return 1;
            if (a - b < 0)
                return -1;
            return 0;
        });
    }
    extractSuits() {
        this._suits = this._cards.map(card => card.suit);
    }
    pairSort() {
        let repeatedCards;
        // collecting repeated cards => [22111]
        repeatedCards = this._sortedValues.filter((v, i, a) => a[i - 1] == a[i]);
        // spliting repeated cards in two arrs if more than one repeats [[22][111]]
        let idx = repeatedCards.findIndex((v, i, a) => i > 0 && a[i - 1] != a[i]);
        let repeat = [];
        if (idx != -1) {
            repeat.push(repeatedCards.slice(idx));
            repeat.push(repeatedCards.slice(0, idx));
        }
        else {
            repeat.push(repeatedCards);
        }
        // if full house I want to have trips in first arr [[111][22]]
        repeat.sort((a, b) => {
            if (a.length > b.length)
                return -1;
            if (a.length < b.length)
                return 1;
            return 0;
        });
        this._paired = repeat;
    }
    // pair, trips, quads ex. [[111]]
    get isUniqueSingleRep() {
        return this._paired.length === 1;
    }
    // two pair or full house ex. [ [111], [22] ]
    get isUniqueDoubleRep() {
        return this._paired.length === 2;
    }
    figureOutHandRank() {
        let classNames = ['StraightFlush', 'Quads', 'FullHouse', 'Flush', 'Straight', 'Trips', 'TwoPair', 'Pair', 'HighCard'];
        for (let className of classNames) {
            let found = this.searchRanks['is' + className]().found;
            if (found)
                return this.classBuilder[className]();
        }
    }
}
exports.HandRankSearch = HandRankSearch;
//# sourceMappingURL=_handreading.js.map