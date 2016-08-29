"use strict";
const TwoPair_1 = require('./../classes/hands/TwoPair');
const _interfaces_1 = require('./../classes/hands/_interfaces');
const methods_1 = require('./helpers/methods');
describe('TwoPair', function () {
    describe('when creating an instance of TwoPair', function () {
        let hand;
        beforeEach(function () {
            let params = {
                cards: [methods_1.card('aceOfSpades'), methods_1.card('aceOfClubs'), methods_1.card('kingOfclubs'), methods_1.card('kingOfDiamonds'), methods_1.card('jackOfClubs')],
                handStrength: _interfaces_1.HandStrength.twoPair,
                lowerPair: _interfaces_1.CardValue.king,
                higherPair: _interfaces_1.CardValue.ace
            };
            hand = new TwoPair_1.TwoPair(params);
        });
        it('should set the lower pair correctly', function () {
            expect(hand.lowerPair).toEqual(_interfaces_1.CardValue.king);
        });
        it('should set the higher pair correctly', function () {
            expect(hand.lowerPair).toEqual(_interfaces_1.CardValue.king);
        });
    });
    describe('when comparing to another TwoPair', function () {
        describe('with two bigger pairs', function () {
            let firstTwoPair;
            let secondTwoPair;
            beforeEach(function () {
                let params = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('aceOfDiamonds'), methods_1.card('kingOfSpades'), methods_1.card('kingOfDiamonds'), methods_1.card('duceOfClubs')],
                    handStrength: _interfaces_1.HandStrength.twoPair,
                    higherPair: _interfaces_1.CardValue.ace,
                    lowerPair: _interfaces_1.CardValue.king
                };
                let anotherParams = {
                    cards: [methods_1.card('queenOfSpades'), methods_1.card('queenOfClubs'), methods_1.card('jackOfSpades'), methods_1.card('jackOfClubs'), methods_1.card('duceOfSpades')],
                    handStrength: _interfaces_1.HandStrength.twoPair,
                    higherPair: _interfaces_1.CardValue.queen,
                    lowerPair: _interfaces_1.CardValue.jack
                };
                firstTwoPair = new TwoPair_1.TwoPair(params);
                secondTwoPair = new TwoPair_1.TwoPair(anotherParams);
            });
            it('should return 1 if higher', function () {
                expect(firstTwoPair.compareTo(secondTwoPair)).toEqual(1);
            });
            it('should return -1 if lower', function () {
                expect(secondTwoPair.compareTo(firstTwoPair)).toEqual(-1);
            });
        });
        describe('with one bigger pair', function () {
            let firstTwoPair;
            let secondTwoPair;
            beforeEach(function () {
                let params = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('aceOfDiamonds'), methods_1.card('kingOfSpades'), methods_1.card('kingOfDiamonds'), methods_1.card('duceOfClubs')],
                    handStrength: _interfaces_1.HandStrength.twoPair,
                    higherPair: _interfaces_1.CardValue.ace,
                    lowerPair: _interfaces_1.CardValue.king
                };
                let anotherParams = {
                    cards: [methods_1.card('aceOfClubs'), methods_1.card('aceOfHearts'), methods_1.card('jackOfSpades'), methods_1.card('jackOfClubs'), methods_1.card('duceOfSpades')],
                    handStrength: _interfaces_1.HandStrength.twoPair,
                    higherPair: _interfaces_1.CardValue.ace,
                    lowerPair: _interfaces_1.CardValue.jack
                };
                firstTwoPair = new TwoPair_1.TwoPair(params);
                secondTwoPair = new TwoPair_1.TwoPair(anotherParams);
            });
            it('should return 1 if higher', function () {
                expect(firstTwoPair.compareTo(secondTwoPair)).toEqual(1);
            });
            it('should return -1 if lower', function () {
                expect(secondTwoPair.compareTo(firstTwoPair)).toEqual(-1);
            });
        });
        describe('with the same pair and different kickers', function () {
            let firstTwoPair;
            let secondTwoPair;
            beforeEach(function () {
                let params = {
                    cards: [methods_1.card('aceOfClubs'), methods_1.card('aceOfHearts'), methods_1.card('kingOfClubs'), methods_1.card('kingOfHearts'), methods_1.card('threeOfSpades')],
                    handStrength: _interfaces_1.HandStrength.twoPair,
                    higherPair: _interfaces_1.CardValue.ace,
                    lowerPair: _interfaces_1.CardValue.king
                };
                let anotherParams = {
                    cards: [methods_1.card('aceOfSpades'), methods_1.card('aceOfDiamonds'), methods_1.card('kingOfSpades'), methods_1.card('kingOfDiamonds'), methods_1.card('duceOfClubs')],
                    handStrength: _interfaces_1.HandStrength.twoPair,
                    higherPair: _interfaces_1.CardValue.ace,
                    lowerPair: _interfaces_1.CardValue.king
                };
                firstTwoPair = new TwoPair_1.TwoPair(params);
                secondTwoPair = new TwoPair_1.TwoPair(anotherParams);
            });
            it('should return 1 if higher', function () {
                expect(firstTwoPair.compareTo(secondTwoPair)).toEqual(1);
            });
            it('should return -1 if lower', function () {
                expect(secondTwoPair.compareTo(firstTwoPair)).toEqual(-1);
            });
        });
    });
    describe('with the same pair and the same kickers', function () {
        let firstTwoPair;
        let secondTwoPair;
        beforeEach(function () {
            let params = {
                cards: [methods_1.card('aceOfSpades'), methods_1.card('aceOfDiamonds'), methods_1.card('kingOfSpades'), methods_1.card('kingOfDiamonds'), methods_1.card('duceOfClubs')],
                handStrength: _interfaces_1.HandStrength.twoPair,
                higherPair: _interfaces_1.CardValue.ace,
                lowerPair: _interfaces_1.CardValue.king
            };
            let anotherParams = {
                cards: [methods_1.card('aceOfClubs'), methods_1.card('aceOfHearts'), methods_1.card('kingOfClubs'), methods_1.card('kingOfHearts'), methods_1.card('duceOfSpades')],
                handStrength: _interfaces_1.HandStrength.twoPair,
                higherPair: _interfaces_1.CardValue.ace,
                lowerPair: _interfaces_1.CardValue.king
            };
            firstTwoPair = new TwoPair_1.TwoPair(params);
            secondTwoPair = new TwoPair_1.TwoPair(anotherParams);
        });
        it('should return 1 if higher', function () {
            expect(firstTwoPair.compareTo(secondTwoPair)).toEqual(0);
        });
        it('should return -1 if lower', function () {
            expect(secondTwoPair.compareTo(firstTwoPair)).toEqual(0);
        });
    });
});
//# sourceMappingURL=twoPair_spec.js.map