"use strict";
const Pair_1 = require('./../classes/hands/Pair');
const _interfaces_1 = require('./../classes/hands/_interfaces');
const methods_1 = require('./helpers/methods');
const arrays_1 = require('./../typecasting/arrays');
describe('Pair', function () {
    describe('when creating an instance of Pair', function () {
        let hand;
        beforeEach(function () {
            let params = {
                cards: [methods_1.card('aceOfSpades'), methods_1.card('aceOfClubs'), methods_1.card('kingOfclubs'), methods_1.card('queenOfClubs'), methods_1.card('jackOfClubs')],
                handStrength: _interfaces_1.HandStrength.pair,
                pair: _interfaces_1.CardValue.ace
            };
            hand = new Pair_1.Pair(params);
        });
        it('should set the pair correctly', function () {
            expect(hand.pair).toEqual(_interfaces_1.CardValue.ace);
        });
    });
    describe('when comparing to another pair', function () {
        let firstPair;
        let secondPair;
        beforeEach(function () {
            let params = {
                cards: [methods_1.card('kingOfDiamonds'), methods_1.card('kingOfClubs'), methods_1.card('queenOfClubs'), methods_1.card('jackOfClubs'), methods_1.card('tenOfSpades')],
                handStrength: _interfaces_1.HandStrength.pair,
                pair: _interfaces_1.CardValue.king
            };
            let anotherParams = {
                cards: [methods_1.card('aceOfClubs'), methods_1.card('aceOfSpades'), methods_1.card('queenOfClubs'), methods_1.card('jackOfClubs'), methods_1.card('tenOfSpades')],
                handStrength: _interfaces_1.HandStrength.pair,
                pair: _interfaces_1.CardValue.ace
            };
            firstPair = new Pair_1.Pair(params);
            secondPair = new Pair_1.Pair(anotherParams);
        });
        it('should recognize bigger pair', function () {
            expect(firstPair.compareTo(secondPair)).toEqual(-1);
        });
        it('should recognize lower pair', function () {
            expect(secondPair.compareTo(firstPair)).toEqual(1);
        });
    });
    describe('when comparing to the same pair', function () {
        let firstPair;
        let secondPair;
        let defaultParams = { pair: _interfaces_1.CardValue.ace, handStrength: _interfaces_1.HandStrength.pair };
        describe('with different 1st kicker', function () {
            beforeEach(function () {
                let cards = {
                    cards: arrays_1.returnFiveCast([methods_1.card('aceOfClubs'), methods_1.card('aceOfSpades'), methods_1.card('kingOfSpades'), methods_1.card('queenOfClubs'), methods_1.card('jackOfSpades')])
                };
                let otherCards = {
                    cards: arrays_1.returnFiveCast([methods_1.card('aceOfDiamonds'), methods_1.card('aceOfHearts'), methods_1.card('queenOfDiamonds'), methods_1.card('jackOfDiamonds'), methods_1.card('tenOfSpades')]),
                };
                ({ firstPair: firstPair, secondPair: secondPair } = methods_1.getPair(defaultParams, cards, otherCards));
            });
            it('should return 1 if higher', function () {
                expect(firstPair.compareTo(secondPair)).toEqual(1);
            });
            it('should return -1 if lower', function () {
                expect(secondPair.compareTo(firstPair)).toEqual(-1);
            });
        });
        describe('with different 2nd kicker', function () {
            beforeEach(function () {
                let cards = {
                    cards: arrays_1.returnFiveCast([methods_1.card('aceOfClubs'), methods_1.card('aceOfSpades'), methods_1.card('kingOfSpades'), methods_1.card('queenOfClubs'), methods_1.card('jackOfSpades')])
                };
                let otherCards = {
                    cards: arrays_1.returnFiveCast([methods_1.card('aceOfDiamonds'), methods_1.card('aceOfHearts'), methods_1.card('kingOfDiamonds'), methods_1.card('jackOfDiamonds'), methods_1.card('tenOfSpades')]),
                };
                ({ firstPair: firstPair, secondPair: secondPair } = methods_1.getPair(defaultParams, cards, otherCards));
            });
            it('should return 1 if higher', function () {
                expect(firstPair.compareTo(secondPair)).toEqual(1);
            });
            it('should return -1 if lower', function () {
                expect(secondPair.compareTo(firstPair)).toEqual(-1);
            });
        });
        describe('with different 3rd kicker', function () {
            beforeEach(function () {
                let cards = {
                    cards: arrays_1.returnFiveCast([methods_1.card('aceOfClubs'), methods_1.card('aceOfSpades'), methods_1.card('kingOfSpades'), methods_1.card('queenOfClubs'), methods_1.card('jackOfSpades')])
                };
                let otherCards = {
                    cards: arrays_1.returnFiveCast([methods_1.card('aceOfDiamonds'), methods_1.card('aceOfHearts'), methods_1.card('kingOfDiamonds'), methods_1.card('queenOfDiamonds'), methods_1.card('tenOfSpades')]),
                };
                ({ firstPair: firstPair, secondPair: secondPair } = methods_1.getPair(defaultParams, cards, otherCards));
            });
            it('should return 1 if higher', function () {
                expect(firstPair.compareTo(secondPair)).toEqual(1);
            });
            it('should return -1 if lower', function () {
                expect(secondPair.compareTo(firstPair)).toEqual(-1);
            });
        });
        describe('with the same kickers', function () {
            it('should return 0', function () {
                let cards = {
                    cards: arrays_1.returnFiveCast([methods_1.card('aceOfClubs'), methods_1.card('aceOfSpades'), methods_1.card('kingOfSpades'), methods_1.card('queenOfClubs'), methods_1.card('jackOfSpades')])
                };
                let otherCards = {
                    cards: arrays_1.returnFiveCast([methods_1.card('aceOfDiamonds'), methods_1.card('aceOfHearts'), methods_1.card('kingOfDiamonds'), methods_1.card('queenOfDiamonds'), methods_1.card('jackOfHearts')]),
                };
                ({ firstPair: firstPair, secondPair: secondPair } = methods_1.getPair(defaultParams, cards, otherCards));
                expect(firstPair.compareTo(secondPair)).toEqual(0);
            });
        });
    });
});
//# sourceMappingURL=pair_spec.js.map