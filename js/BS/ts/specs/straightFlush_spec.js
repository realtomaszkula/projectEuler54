"use strict";
const StraightFlush_1 = require('./../classes/hands/StraightFlush');
const _interfaces_1 = require('./../classes/hands/_interfaces');
const methods_1 = require('./helpers/methods');
describe('StraightFlush', function () {
    let hand;
    describe('when creating an instance of StraightFlush', function () {
        let params = {
            cards: [methods_1.card('aceOfSpades'), methods_1.card('kingOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades')],
            handStrength: _interfaces_1.HandStrength.straightFlush,
        };
        let hand = new StraightFlush_1.StraightFlush(params);
        it('should set highest card correctly', function () {
            expect(hand.highestCard).toEqual(_interfaces_1.CardValue.ace);
        });
        it('should set isWheel to false when passed not wheel str8flush', function () {
            expect(hand.isWheel).toBe(false);
        });
        it('should set isWheel to true when passeed wheel str8flush', function () {
            let params2 = {
                cards: [methods_1.card('fiveOfSpades'), methods_1.card('fourOfSpades'), methods_1.card('threeOfSpades'), methods_1.card('duceOfSpades'), methods_1.card('aceOfSpades')],
                handStrength: _interfaces_1.HandStrength.straightFlush,
            };
            let hand2 = new StraightFlush_1.StraightFlush(params2);
            expect(hand2.isWheel).toBe(true);
        });
    });
    describe('when comparing to another StraightFlush', function () {
        let firstHand;
        let secondHand;
        beforeEach(function () {
            let firstParams = {
                cards: [methods_1.card('aceOfSpades'), methods_1.card('kingOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades')],
                handStrength: _interfaces_1.HandStrength.straightFlush,
            };
            let secondParams = {
                cards: [methods_1.card('kingOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfSpades'), methods_1.card('nineOfSpades')],
                handStrength: _interfaces_1.HandStrength.straightFlush,
            };
            firstHand = new StraightFlush_1.StraightFlush(firstParams);
            secondHand = new StraightFlush_1.StraightFlush(secondParams);
        });
        it('should return 1 when higher', function () {
            expect(firstHand.compareTo(secondHand)).toEqual(1);
        });
        it('should return -1 when lower', function () {
            expect(secondHand.compareTo(firstHand)).toEqual(-1);
        });
        it('should return 0 if the same', function () {
            expect(secondHand.compareTo(secondHand)).toEqual(0);
        });
    });
    describe('when comparing wheel str8flush to another StraightFlush', function () {
        let firstHand;
        let secondHand;
        beforeEach(function () {
            let firstParams = {
                cards: [methods_1.card('sixOfSpades'), methods_1.card('fiveOfSpades'), methods_1.card('fourOfSpades'), methods_1.card('threeOfSpades'), methods_1.card('duceOfSpades')],
                handStrength: _interfaces_1.HandStrength.straightFlush,
            };
            let secondParams = {
                cards: [methods_1.card('fiveOfSpades'), methods_1.card('fourOfSpades'), methods_1.card('threeOfSpades'), methods_1.card('duceOfSpades'), methods_1.card('aceOfSpades')],
                handStrength: _interfaces_1.HandStrength.straightFlush,
            };
            firstHand = new StraightFlush_1.StraightFlush(firstParams);
            secondHand = new StraightFlush_1.StraightFlush(secondParams);
        });
        it('should return 1 when higher', function () {
            expect(firstHand.compareTo(secondHand)).toEqual(1);
        });
        it('should return -1 when lower', function () {
            expect(secondHand.compareTo(firstHand)).toEqual(-1);
        });
        it('should return 0 if the same', function () {
            expect(secondHand.compareTo(secondHand)).toEqual(0);
        });
    });
});
//# sourceMappingURL=straightFlush_spec.js.map