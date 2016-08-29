"use strict";
const Straight_1 = require('./../classes/hands/Straight');
const _interfaces_1 = require('./../classes/hands/_interfaces');
const methods_1 = require('./helpers/methods');
describe('Straight', function () {
    let hand;
    describe('when creating an instance of Straight', function () {
        let params = {
            cards: [methods_1.card('aceOfSpades'), methods_1.card('kingOfClubs'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfHearts')],
            handStrength: _interfaces_1.HandStrength.straight,
        };
        let hand = new Straight_1.Straight(params);
        it('should set highest card correctly', function () {
            expect(hand.highestCard).toEqual(_interfaces_1.CardValue.ace);
        });
        it('should set isWheel to false when passed not wheel str8', function () {
            expect(hand.isWheel).toBe(false);
        });
        it('should set isWheel to true when passeed wheel str8', function () {
            let params2 = {
                cards: [methods_1.card('fiveOfSpades'), methods_1.card('fourOfSpades'), methods_1.card('threeOfClubs'), methods_1.card('duceOfSpades'), methods_1.card('aceOfDiamonds')],
                handStrength: _interfaces_1.HandStrength.straight,
            };
            let hand2 = new Straight_1.Straight(params2);
            expect(hand2.isWheel).toBe(true);
        });
    });
    describe('when comparing to another Straight', function () {
        let firstHand;
        let secondHand;
        beforeEach(function () {
            let firstParams = {
                cards: [methods_1.card('aceOfSpades'), methods_1.card('kingOfClubs'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfHearts')],
                handStrength: _interfaces_1.HandStrength.straight,
            };
            let secondParams = {
                cards: [methods_1.card('kingOfSpades'), methods_1.card('queenOfSpades'), methods_1.card('jackOfSpades'), methods_1.card('tenOfHearts'), methods_1.card('nineOfClubs')],
                handStrength: _interfaces_1.HandStrength.straight,
            };
            firstHand = new Straight_1.Straight(firstParams);
            secondHand = new Straight_1.Straight(secondParams);
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
    describe('when comparing wheel str8 to another Straight', function () {
        let firstHand;
        let secondHand;
        beforeEach(function () {
            let firstParams = {
                cards: [methods_1.card('sixOfDiamonds'), methods_1.card('fiveOfSpades'), methods_1.card('fourOfSpades'), methods_1.card('threeOfClubs'), methods_1.card('duceOfSpades')],
                handStrength: _interfaces_1.HandStrength.straight,
            };
            let secondParams = {
                cards: [methods_1.card('fiveOfSpades'), methods_1.card('fourOfSpades'), methods_1.card('threeOfClubs'), methods_1.card('duceOfSpades'), methods_1.card('aceOfDiamonds')],
                handStrength: _interfaces_1.HandStrength.straight,
            };
            firstHand = new Straight_1.Straight(firstParams);
            secondHand = new Straight_1.Straight(secondParams);
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
//# sourceMappingURL=straight_spec.js.map