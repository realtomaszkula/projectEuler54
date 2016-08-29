"use strict";
const _handReading_1 = require('./../classes/hands/_handReading');
const HighCard_1 = require('./../classes/hands/HighCard');
const Pair_1 = require('./../classes/hands/Pair');
const TwoPair_1 = require('./../classes/hands/TwoPair');
const Trips_1 = require('./../classes/hands/Trips');
const Straight_1 = require('./../classes/hands/Straight');
const FullHouse_1 = require('./../classes/hands/FullHouse');
const Flush_1 = require('./../classes/hands/Flush');
const Quads_1 = require('./../classes/hands/Quads');
const StraightFlush_1 = require('./../classes/hands/StraightFlush');
const _interfaces_1 = require('./../classes/hands/_interfaces');
describe('HandRankSearch', function () {
    describe('when given hand with high card', function () {
        let hand;
        beforeEach(function () {
            hand = new _handReading_1.HandRankSearch([
                { suit: 'spade', value: _interfaces_1.CardValue.ace },
                { suit: 'diamond', value: _interfaces_1.CardValue.jack },
                { suit: 'club', value: _interfaces_1.CardValue.king },
                { suit: 'club', value: _interfaces_1.CardValue.queen },
                { suit: 'club', value: _interfaces_1.CardValue.duce }
            ]);
        });
        it('instance should return instance of class Pair', function () {
            expect(hand.result instanceof HighCard_1.HighCard).toBe(true);
        });
    });
    describe('when given hand including pair', function () {
        let hand;
        beforeEach(function () {
            hand = new _handReading_1.HandRankSearch([
                { suit: 'spade', value: _interfaces_1.CardValue.ace },
                { suit: 'diamond', value: _interfaces_1.CardValue.ace },
                { suit: 'club', value: _interfaces_1.CardValue.king },
                { suit: 'club', value: _interfaces_1.CardValue.queen },
                { suit: 'club', value: _interfaces_1.CardValue.duce }
            ]);
        });
        it('instance should return instance of class Pair', function () {
            expect(hand.result instanceof Pair_1.Pair).toBe(true);
        });
    });
    describe('when given hand including two pair', function () {
        let hand;
        beforeEach(function () {
            hand = new _handReading_1.HandRankSearch([
                { suit: 'spade', value: _interfaces_1.CardValue.ace },
                { suit: 'diamond', value: _interfaces_1.CardValue.ace },
                { suit: 'club', value: _interfaces_1.CardValue.king },
                { suit: 'club', value: _interfaces_1.CardValue.king },
                { suit: 'club', value: _interfaces_1.CardValue.duce }
            ]);
        });
        it('instance should return instance of class two pair', function () {
            expect(hand.result instanceof TwoPair_1.TwoPair).toBe(true);
        });
    });
    describe('when given hand including trips', function () {
        let hand;
        beforeEach(function () {
            hand = new _handReading_1.HandRankSearch([
                { suit: 'spade', value: _interfaces_1.CardValue.ace },
                { suit: 'diamond', value: _interfaces_1.CardValue.ace },
                { suit: 'club', value: _interfaces_1.CardValue.ace },
                { suit: 'club', value: _interfaces_1.CardValue.king },
                { suit: 'club', value: _interfaces_1.CardValue.duce }
            ]);
        });
        it('instance should return instance of class trips', function () {
            expect(hand.result instanceof Trips_1.Trips).toBe(true);
        });
    });
    describe('when given hand including straight', function () {
        let hand;
        beforeEach(function () {
            hand = new _handReading_1.HandRankSearch([
                { suit: 'spade', value: _interfaces_1.CardValue.ace },
                { suit: 'diamond', value: _interfaces_1.CardValue.king },
                { suit: 'club', value: _interfaces_1.CardValue.queen },
                { suit: 'club', value: _interfaces_1.CardValue.jack },
                { suit: 'club', value: _interfaces_1.CardValue.ten }
            ]);
        });
        it('instance should return instance of class straight', function () {
            expect(hand.result instanceof Straight_1.Straight).toBe(true);
        });
    });
    describe('when given hand including wheel straight', function () {
        let hand;
        beforeEach(function () {
            hand = new _handReading_1.HandRankSearch([
                { suit: 'spade', value: _interfaces_1.CardValue.ace },
                { suit: 'diamond', value: _interfaces_1.CardValue.duce },
                { suit: 'club', value: _interfaces_1.CardValue.three },
                { suit: 'club', value: _interfaces_1.CardValue.four },
                { suit: 'club', value: _interfaces_1.CardValue.five }
            ]);
        });
        it('instance should return instance of class straight', function () {
            expect(hand.result instanceof Straight_1.Straight).toBe(true);
        });
    });
    describe('when given hand including flush', function () {
        let hand;
        beforeEach(function () {
            hand = new _handReading_1.HandRankSearch([
                { suit: 'club', value: _interfaces_1.CardValue.ace },
                { suit: 'club', value: _interfaces_1.CardValue.king },
                { suit: 'club', value: _interfaces_1.CardValue.queen },
                { suit: 'club', value: _interfaces_1.CardValue.jack },
                { suit: 'club', value: _interfaces_1.CardValue.duce }
            ]);
        });
        it('instance should return instance of class flush', function () {
            expect(hand.result instanceof Flush_1.Flush).toBe(true);
        });
    });
    describe('when given hand including fullhouse', function () {
        let hand;
        beforeEach(function () {
            hand = new _handReading_1.HandRankSearch([
                { suit: 'club', value: _interfaces_1.CardValue.ace },
                { suit: 'club', value: _interfaces_1.CardValue.ace },
                { suit: 'club', value: _interfaces_1.CardValue.duce },
                { suit: 'club', value: _interfaces_1.CardValue.duce },
                { suit: 'spade', value: _interfaces_1.CardValue.duce }
            ]);
        });
        it('instance should return instance of class fullhouse', function () {
            expect(hand.result instanceof FullHouse_1.FullHouse).toBe(true);
        });
    });
    describe('when given hand including quads', function () {
        let hand;
        beforeEach(function () {
            hand = new _handReading_1.HandRankSearch([
                { suit: 'club', value: _interfaces_1.CardValue.ace },
                { suit: 'club', value: _interfaces_1.CardValue.ace },
                { suit: 'club', value: _interfaces_1.CardValue.ace },
                { suit: 'club', value: _interfaces_1.CardValue.ace },
                { suit: 'spade', value: _interfaces_1.CardValue.duce }
            ]);
        });
        it('instance should return instance of class quads', function () {
            expect(hand.result instanceof Quads_1.Quads).toBe(true);
        });
    });
    describe('when given hand including straightflush', function () {
        let hand;
        beforeEach(function () {
            hand = new _handReading_1.HandRankSearch([
                { suit: 'club', value: _interfaces_1.CardValue.ace },
                { suit: 'club', value: _interfaces_1.CardValue.king },
                { suit: 'club', value: _interfaces_1.CardValue.queen },
                { suit: 'club', value: _interfaces_1.CardValue.jack },
                { suit: 'club', value: _interfaces_1.CardValue.ten }
            ]);
        });
        it('instance should return instance of class straightflush', function () {
            expect(hand.result instanceof StraightFlush_1.StraightFlush).toBe(true);
        });
    });
});
//# sourceMappingURL=handRankSearch_spec.js.map